this.save_options = function () {
  var e = document.querySelector(".th-enable-switch")
    , t = !1;
  e.className.indexOf("is-checked") > -1 && (t = !0), chrome.storage.sync.set({
    enabledRW4GC: t
  }, function () {
    var e = document.querySelector(".texthelp-tile-image");
    t ? e.classList.remove("greyout") : e.className.indexOf("greyout") < 0 && (e.className += " greyout"), chrome.runtime.sendMessage({
      method: "thChromeOptionsChanged"
      , enabled: t
    })
  })
}.bind(this), this.restore_options = function () {
  chrome.storage.sync.get({
    enabledRW4GC: !0
  }, function (e) {
    var t = document.querySelector(".th-enable-switch")
      , s = document.querySelector(".texthelp-tile-image");
    e.enabledRW4GC ? (t.className.indexOf("is-checked") < 0 && (t.className += " is-checked"), t.querySelector("input")
      .setAttribute("checked", ""), s.classList.remove("greyout")) : (t.classList.remove("is-checked"), s.className.indexOf("greyout") < 0 && (s.className += " greyout"))
  })
}.bind(this);
var enabledSwitch = document.querySelector(".th-enable-switch");
enabledSwitch.addEventListener("change", this.save_options), document.addEventListener("DOMContentLoaded", this.restore_options);
