function removeClassName(e, a) {
  if ("string" == typeof e && (e = goog.dom.getElement(e)), e) {
    var n = e.className;
    if (n && n.length > 0) {
      for (var t, r = n.split(" "), l = a.split(" "), o = r.length, s = [], d = 0; d < o; d++) t = r[d], l.indexOf(t) === -1 && s.push(t);
      switch (!0) {
      case s.length > 1:
        e.className = s.join(" ");
        break;
      case 1 == s.length:
        e.className = s[0];
        break;
      case 0 == s.length:
        e.className = ""
      }
    }
  }
}

function addClassName(e, a) {
  if ("string" == typeof e && (e = goog.dom.getElement(e)), e) {
    var n = e.className;
    if (n && n.length > 0) {
      var t = a.split(" ");
      if (1 === t.length && (" " + n + " ")
        .lastIndexOf(" " + a + " ") === -1) e.className = e.className + " " + a;
      else {
        for (var r, l = n.split(" "), o = t.length, s = [], d = 0; d < o; d++) r = t[d], l.indexOf(r) === -1 && s.push(r);
        e.className = e.className + " " + (s.length > 1 ? s.join(" ") : s[0])
      }
    } else e.className = a
  }
}

function receiver(e) {
  var a = document.getElementById("gdwr-placeHolder")
    , n = e.data.split(":")[0]
    , t = e.data.substr(n.length + 1);
  if ("content" === n) {
    a.innerHTML = t;
    var r = document.getElementById("gdwr-placeHolder");
    removeClassName(r, "gdwr-hidden");
    var l = document.getElementById("gdwr-activity");
    return void addClassName(l, "gdwr-hidden")
  }
  if ("voice" === n) return void $rw_setVoice(t);
  if ("speed" === n) return void $rw_setSpeedValue(t);
  if ("clear" === n) {
    var r = document.getElementById("gdwr-activity");
    removeClassName(r, "gdwr-hidden");
    var l = document.getElementById("gdwr-placeHolder");
    return addClassName(l, "gdwr-hidden"), void(a.innerHTML = "")
  }
  if ("selectall" === n) {
    var o = window.getSelection()
      , s = document.getElementById("gdwr-placeHolder");
    s.focus();
    var d = document.createRange();
    return d.selectNodeContents(s), o.removeAllRanges(), void o.addRange(d)
  }
  if ("copyHighlights" === n) {
    var o = window.getSelection()
      , s = document.getElementById("gdwr-placeHolder");
    s.focus();
    var d = document.createRange();
    return d.selectNodeContents(s), o.removeAllRanges(), o.addRange(d), document.execCommand("Copy", !1, null), void o.removeAllRanges()
  }
  return "stop" === n ? void $rw_event_stop() : void 0
}
window.addEventListener("message", receiver, !1);
try {
  eba_client_version = "160", eba_server_version = "ToolbarRW", eba_icons = no_bar, eba_server = "inoeonmfapjbbkmdafoankkfajkcphgd", eba_speech_server = "rwforg.speechstream.net", eba_login_name = "rwforgdocs", eba_speed_value = MEDIUM_SPEED, eba_voice_from_lang_flag = !0, eba_initial_speech_on = !0, eba_continuous_reading = !0, $rw_barInit()
} catch (err) {}
