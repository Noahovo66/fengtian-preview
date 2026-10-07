/* 圖示字型真的載入後才顯示圖示，避免顯示成英文字而重疊（見 admin.css）。
   注意：字型載入失敗時 document.fonts.load 仍會成功回傳空陣列，所以要檢查回傳內容。 */
(function () {
  var root = document.documentElement;
  var FONT = '24px "Material Symbols Outlined"';
  function ready() { root.classList.add("icons-ready"); }
  if (!document.fonts || !document.fonts.load) return;
  document.fonts.load(FONT).then(function (faces) {
    if ((faces && faces.length) || document.fonts.check(FONT)) ready();
  }, function () {});
})();
