function $rw_userParameters() {
  try {
    eba_icons = play_icon + pause_icon + clicktospeak_icon + translation_icon + dictionary_icon + imagedictionary_icon + factfinder_icon + speechinput_icon + highlight_icons + collect_icon + vocabulary_icon + screenshotreader_icon, eba_voice = "Vocalizer Expressive Ava Premium High 22kHz", dtdType = "xtran", eba_hover_flag = !0, eba_server = document.getElementById("webSpeechStreamToolbar")
      .getAttribute("data_source"), eba_speech_server = "rwforg.speechstream.net", eba_speech_server_backup = "webappspeech.texthelp.com", eba_language = ENGLISH, eba_use_html5 = !0, eba_translate_server = "rwforg.speechstream.net", eba_picturedictionary_server = "rwforg.speechstream.net", eba_login_name = "rwforgdocs", eba_speed_value = MEDIUM_SPEED, eba_continuous_reading = !0, eba_ignore_buttons = !0, eba_chrome_extension = !0, eba_local_file_path = document.getElementById("webSpeechStreamToolbar")
      .getAttribute("data-root"), eba_initial_speech_on = !1, eba_hidden_bar = !0, window.location.href.indexOf("https") > -1 && (eba_ssl_flag = !0)
  } catch (e) {}
}

function $rw_toolbarLoadedCallback() {
  var e = document.getElementById("webSpeechStreamToolbar")
    .getAttribute("rwIsClickHoverOn");
  $rw_setToolbarPosition(document.getElementById("webSpeechStreamToolbar")
    .getAttribute("rwebooks-x"), document.getElementById("webSpeechStreamToolbar")
    .getAttribute("rwebooks-y")), e = "false" != e, $rw_enableClickToSpeak(e), window.postMessage({
    method: "thRWFGGetSettings"
    , type: "1757FROM_PAGERW4G"
  }, "*")
}
