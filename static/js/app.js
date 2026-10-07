/* 前台共用互動：抽屜、字數、曆法切換、地址連動、須知勾選。無 JS 時表單仍可正常送出。 */
(function () {
  "use strict";

  // ---------- 右側抽屜（服務說明） ----------
  var lastFocus = null;
  function openDrawer() {
    var root = document.getElementById("drawer-root");
    if (!root || !root.firstElementChild) return;
    document.documentElement.classList.add("overflow-hidden");
    requestAnimationFrame(function () { root.classList.add("is-open"); });
    var close = root.querySelector("[data-drawer-close]");
    if (close) close.focus();
  }
  function closeDrawer() {
    var root = document.getElementById("drawer-root");
    if (!root) return;
    root.classList.remove("is-open");
    document.documentElement.classList.remove("overflow-hidden");
    setTimeout(function () { root.innerHTML = ""; }, 250);
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-drawer-open]");
    if (opener) lastFocus = opener;
    if (e.target.closest("[data-drawer-close]") || e.target.matches("[data-drawer-overlay]")) {
      e.preventDefault();
      closeDrawer();
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });
  document.addEventListener("htmx:afterSwap", function (e) {
    if (e.detail.target && e.detail.target.id === "drawer-root") openDrawer();
    init(e.detail.target);
  });

  // ---------- 字數計數 ----------
  function initCounters(scope) {
    scope.querySelectorAll("input[maxlength][data-count]").forEach(function (el) {
      if (el.dataset.countReady) return;
      el.dataset.countReady = "1";
      var out = document.createElement("div");
      out.className = "mt-1 text-right text-sm text-temple-muted";
      out.setAttribute("aria-hidden", "true");
      el.insertAdjacentElement("afterend", out);
      var update = function () { out.textContent = el.value.length + "/" + el.maxLength; };
      el.addEventListener("input", update);
      update();
    });
  }

  // ---------- 農曆／國曆切換 ----------
  function initCalendars(scope) {
    scope.querySelectorAll("[data-birth]").forEach(function (box) {
      if (box.dataset.ready) return;
      box.dataset.ready = "1";
      var sync = function () {
        var checked = box.querySelector("input[type=radio]:checked");
        var cal = checked ? checked.value : "lunar";
        box.querySelectorAll("[data-cal-show]").forEach(function (el) {
          var on = el.dataset.calShow === cal;
          el.hidden = !on;
          el.querySelectorAll("select,input").forEach(function (i) { i.disabled = !on; });
        });
        var y = box.querySelector("input[name$='_year']");
        if (y) y.placeholder = cal === "solar" ? "例：68" : "例：68（空白＝吉年）";
      };
      box.addEventListener("change", function (e) { if (e.target.type === "radio") sync(); });
      sync();
    });
  }

  // ---------- 地址：縣市 → 鄉鎮市區 → 郵遞區號 ----------
  var zipData = null;
  function zips() {
    if (zipData) return zipData;
    var el = document.getElementById("tw-zip-data");
    zipData = el ? JSON.parse(el.textContent) : {};
    return zipData;
  }
  function initAddresses(scope) {
    scope.querySelectorAll("[data-address]").forEach(function (box) {
      if (box.dataset.ready) return;
      box.dataset.ready = "1";
      var region = box.querySelector("[data-addr-region]");
      var county = box.querySelector("[data-addr-county]");
      var district = box.querySelector("[data-addr-district]");
      var zipOut = box.querySelector("[data-addr-zip]");
      var twOnly = box.querySelectorAll("[data-addr-tw]");
      var keep = district.value;

      function fillDistricts() {
        var rows = zips()[county.value] || [];
        district.innerHTML = "";
        var ph = document.createElement("option");
        ph.value = ""; ph.textContent = "鄉鎮市區";
        district.appendChild(ph);
        rows.forEach(function (r) {
          var o = document.createElement("option");
          o.value = r[0]; o.textContent = r[0]; o.dataset.zip = r[1];
          if (r[0] === keep) o.selected = true;
          district.appendChild(o);
        });
        keep = "";
        showZip();
      }
      function showZip() {
        var o = district.options[district.selectedIndex];
        zipOut.value = (o && o.dataset.zip) || "";
      }
      function syncRegion() {
        var abroad = region && region.value === "abroad";
        twOnly.forEach(function (el) { el.hidden = abroad; });
        var street = box.querySelector("[data-addr-street]");
        if (street) street.placeholder = abroad ? "完整地址（含國家）" : "路街、巷弄、號、樓";
      }
      county.addEventListener("change", fillDistricts);
      district.addEventListener("change", showZip);
      if (region) region.addEventListener("change", syncRegion);
      fillDistricts();
      syncRegion();
    });
  }

  // ---------- 須知勾選後才能下一步 ----------
  function initAgree(scope) {
    scope.querySelectorAll("[data-agree-target]").forEach(function (cb) {
      if (cb.dataset.ready) return;
      cb.dataset.ready = "1";
      var btn = document.getElementById(cb.dataset.agreeTarget);
      var sync = function () { if (btn) btn.disabled = !cb.checked; };
      cb.addEventListener("change", sync);
      sync();
    });
  }

  function init(scope) {
    scope = scope || document;
    initCounters(scope);
    initCalendars(scope);
    initAddresses(scope);
    initAgree(scope);
  }
  document.addEventListener("DOMContentLoaded", function () { init(document); });
})();
