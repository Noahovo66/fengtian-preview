/* 圖示字型載入完成後才顯示圖示，避免顯示成英文字（見 admin.css）。 */
(function () {
  var root = document.documentElement;
  function ready() { root.classList.add("icons-ready"); }
  if (!document.fonts || !document.fonts.load) return ready();
  document.fonts.load('24px "Material Symbols Outlined"').then(ready, ready);
  setTimeout(function () {
    // 10 秒仍未載入：維持隱藏（不重疊），但確認字型已在才顯示
    if (document.fonts.check('24px "Material Symbols Outlined"')) ready();
  }, 10000);
})();
