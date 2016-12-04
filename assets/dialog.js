function receiver(e) {
  var t;
  if (void 0 !== e.data.split) {
    t = e.data.split(":")[0];
    var s = e.data.substr(t.length + 1)
  }
  return "content" === t ? ($rw_event_stop(), void(elem.innerHTML = s)) : "voice" === t ? ($rw_event_stop(), void $rw_setVoice(s)) : "speed" === t ? ($rw_event_stop(), void $rw_setSpeedValue(parseInt(s))) : "clear" === t ? ($rw_event_stop(), void(elem.innerHTML = "")) : "stop" === t ? void $rw_event_stop() : void 0
}

function startedSpeech() {
  if (event.target.classList.contains("play")) {
    if (event.target.classList.remove("play"), list = document.getElementsByClassName("stop"), null != list)
      for (var e = 0; e < list.length; e++) list[e].classList.add("play"), list[e].classList.remove("stop");
    event.target.classList.add("stop")
  }
}

function completeSpeech() {
  if (void 0 !== event && (event.currentTarget = "div.stop") && (event.target.classList.remove("stop"), event.target.classList.add("play"), list = document.getElementsByClassName("stop"), null != list))
    for (var e = 0; e < list.length; e++) list[e].classList.add("play"), list[e].classList.remove("stop")
}

function pageCompleteSpeech() {
  if (list = document.getElementsByClassName("stop"), null != list)
    for (var e = 0; e < list.length; e++) list[e].classList.add("play"), list[e].classList.remove("stop")
}
window.addEventListener("message", receiver, !1);
var voice = "Vocalizer Expressive Ava Premium High 22kHz";
try {
  window.postMessage({
    type: "1757FROM_BGRW4G_FUNCTION"
    , method: "LoadDialogSettings"
    , parameters: {
      category: "FromWebReader"
      , action: "ScreenshotReaderOnlyInjected"
      , label: window.location.host
    }
  }, "*"), eba_speech_started_callback = "startedSpeech();", eba_speech_complete_callback = "completeSpeech();", eba_page_complete_callback = "pageCompleteSpeech()", eba_client_version = "160", eba_server_version = "ToolbarRW", eba_server = "inoeonmfapjbbkmdafoankkfajkcphgd", eba_speech_server = "rwforg.speechstream.net", eba_speech_server_backup = "webappspeech.texthelp.com", eba_icons = 0, eba_use_html5 = !0, eba_translate_server = "rwforg.speechstream.net", eba_picturedictionary_server = "rwforg.speechstream.net", eba_login_name = "rwforgdocs", eba_continuous_reading = !0, eba_ignore_buttons = !0, eba_chrome_extension = !1, eba_initial_speech_on = !1, eba_hidden_bar = !1, eba_hover_flag = !1, eba_voice_from_lang_flag = !0, window.postMessage({
    type: "1757FROM_PAGERW4G"
    , key: "function"
    , method: "LoadDialogSettings"
    , parameters: "Dictionary"
  }, "*"), $rw_barInit()
} catch (err) {}
