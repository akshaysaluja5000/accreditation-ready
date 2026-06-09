(function () {
  var MOON = '<svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var SUN  = '<svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  function syncBtn() {
    var btn = document.getElementById('night-btn');
    if (!btn) return;
    var dark = document.documentElement.classList.contains('dark');
    btn.innerHTML = dark ? SUN : MOON;
    btn.title = dark ? 'Switch to light mode' : 'Switch to night mode';
  }

  function toggleNight() {
    var dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('ar_night_mode', dark ? '1' : '0');
    syncBtn();
  }

  function init() {
    // Dark mode toggle
    var nightBtn = document.getElementById('night-btn');
    if (nightBtn) nightBtn.addEventListener('click', toggleNight);
    syncBtn();

    // Back to app — close this tab so the app tab isn't duplicated
    var backBtn = document.querySelector('.header-back');
    if (backBtn) {
      backBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.close();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
