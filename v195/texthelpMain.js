function $rw_getAutoCacheMissingCount() {
  return g_nSpeechStreamAutoCacheMissingCount
}

function $rw_getAutoCacheError() {
  return g_strSpeechStreamAutoCacheError || ""
}

function iOS6Workaround() {
  $rw_getTouchSelection && $rw_getTouchSelection()
}

function $rw_getVersion() {
  return eba_actual_version
}

function $rw_getRevision() {
  return g_strRevision
}

function $rw_setIconsToLoad(e) {
  var t = !1;
  g_bChromeExtension && (e & dictionary_icon) == dictionary_icon && rw_loadIcon("PredictionAll", "Prediction", IMG_POSITION_FROM_LEFT_ARRAY[DICTIONARY], !1, TRANSLATION_IDS[PREDICTION]), (e & clicktospeak_icon) == clicktospeak_icon && (SSDAT.bubbleData.bBubbleMode || (g_nHoverIndex = rw_loadIcon("hover", TOOL_TIP_TEXT_ARRAY[CLICK_TO_SPEAK][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CLICK_TO_SPEAK], !0, TRANSLATION_IDS[CLICK_TO_SPEAK])), t = !0), g_bChromeExtension && ((e & dictionary_icon) == dictionary_icon && rw_loadIcon("dictionary", TOOL_TIP_TEXT_ARRAY[DICTIONARY][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[DICTIONARY], !1, TRANSLATION_IDS[DICTIONARY]), (e & picturedictionary_icon) == picturedictionary_icon && rw_loadIcon("picturedictionary", TOOL_TIP_TEXT_ARRAY[PICTURE_DICTIONARY][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[PICTURE_DICTIONARY], !1, TRANSLATION_IDS[PICTURE_DICTIONARY])), (e & play_icon) == play_icon && (!g_bSpeechCacheFlag || g_bSpeechCacheGenerateFlag || g_bCacheLiveGeneration) && (SSDAT.bubbleData.bBubbleMode || rw_loadIcon("play", TOOL_TIP_TEXT_ARRAY[SPEAK_CURRENT_SELECTION][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SPEAK_CURRENT_SELECTION], !1, TRANSLATION_IDS[SPEAK_CURRENT_SELECTION]), t = !0), (e & pause_icon) == pause_icon && rw_loadIcon("pause", TOOL_TIP_TEXT_ARRAY[PAUSE_SPEECH][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[PAUSE_SPEECH], !1, TRANSLATION_IDS[PAUSE_SPEECH]);
  var r = !1;
  (e & funplay_icon) == funplay_icon && (rw_loadIcon("funplay", TOOL_TIP_TEXT_ARRAY[SPEAK_CURRENT_SELECTION][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[FUN_PLAY], !1, TRANSLATION_IDS[SPEAK_CURRENT_SELECTION]), r = !0, t = !1), (e & stop_icon) == stop_icon && (t = !0), t && rw_loadIcon("stop", TOOL_TIP_TEXT_ARRAY[STOP_SPEECH][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[STOP_SPEECH], !1, TRANSLATION_IDS[STOP_SPEECH]), r && rw_loadIcon("funstop", TOOL_TIP_TEXT_ARRAY[STOP_SPEECH][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[FUN_STOP], !1, TRANSLATION_IDS[TOOL_TIP_TEXT_ARRAY]), (e & screenshotreader_icon) == screenshotreader_icon && (g_nScreenShoteReaderIndex = rw_loadIcon("screenshotreader", TOOL_TIP_TEXT_ARRAY[SCREENSHOTREADER_CHECKER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SCREENSHOTREADER_CHECKER], !0, TRANSLATION_IDS[SCREENSHOTREADER_CHECKER])), (e & factfinder_icon) == factfinder_icon && rw_loadIcon("ffinder", TOOL_TIP_TEXT_ARRAY[FACT_FINDER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[FACT_FINDER], !1, TRANSLATION_IDS[FACT_FINDER]), (e & speechinput_icon) == speechinput_icon && (g_nSpeechInputIndex = rw_loadIcon("speechinput", TOOL_TIP_TEXT_ARRAY[SPEECH_INPUT][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SPEECH_INPUT], !0, TRANSLATION_IDS[SPEECH_INPUT])), (e & translation_icon) == translation_icon && rw_loadIcon("trans", TOOL_TIP_TEXT_ARRAY[TRANSLATE_WORD][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[TRANSLATE_WORD], !1, TRANSLATION_IDS[TRANSLATE_WORD]), g_bChromeExtension || ((e & dictionary_icon) == dictionary_icon && rw_loadIcon("dictionary", TOOL_TIP_TEXT_ARRAY[DICTIONARY][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[DICTIONARY], !1, TRANSLATION_IDS[DICTIONARY]), (e & picturedictionary_icon) == picturedictionary_icon && rw_loadIcon("picturedictionary", TOOL_TIP_TEXT_ARRAY[PICTURE_DICTIONARY][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[PICTURE_DICTIONARY], !1, TRANSLATION_IDS[PICTURE_DICTIONARY])), (e & prediction_icon) == prediction_icon && (g_nPredIndex = rw_loadIcon("pred", TOOL_TIP_TEXT_ARRAY[PREDICTION_CHECKER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[PREDICTION_CHECKER], !0, TRANSLATION_IDS[PREDICTION_CHECKER]));
  var n = !1;
  (e & highlightcyan_icon) == highlightcyan_icon && (rw_loadIcon("cyan", TOOL_TIP_TEXT_ARRAY[HIGHLIGHT_CYAN][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[HIGHLIGHT_CYAN], !1, TRANSLATION_IDS[HIGHLIGHT_CYAN]), n = !0), (e & highlightmagenta_icon) == highlightmagenta_icon && (rw_loadIcon("magenta", TOOL_TIP_TEXT_ARRAY[HIGHLIGHT_MAGENTA][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[HIGHLIGHT_MAGENTA], !1, TRANSLATION_IDS[HIGHLIGHT_MAGENTA]), n = !0), (e & highlightyellow_icon) == highlightyellow_icon && (rw_loadIcon("yellow", TOOL_TIP_TEXT_ARRAY[HIGHLIGHT_YELLOW][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[HIGHLIGHT_YELLOW], !1, TRANSLATION_IDS[HIGHLIGHT_YELLOW]), n = !0), (e & highlightgreen_icon) == highlightgreen_icon && (rw_loadIcon("green", TOOL_TIP_TEXT_ARRAY[HIGHLIGHT_GREEN][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[HIGHLIGHT_GREEN], !1, TRANSLATION_IDS[HIGHLIGHT_GREEN]), n = !0), (e & strike_icon) == strike_icon && (rw_loadIcon("strike", TOOL_TIP_TEXT_ARRAY[STRIKE_THROUGH][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[STRIKE_THROUGH], !1, TRANSLATION_IDS[STRIKE_THROUGH]), n = !0), n && rw_loadIcon("clear", TOOL_TIP_TEXT_ARRAY[CLEAR_HIGHLIGHT][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CLEAR_HIGHLIGHT], !1, TRANSLATION_IDS[CLEAR_HIGHLIGHT]), (e & collect_icon) == collect_icon && rw_loadIcon("collect", TOOL_TIP_TEXT_ARRAY[COLLECT_HIGHLIGHTS][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[COLLECT_HIGHLIGHTS], !1, TRANSLATION_IDS[COLLECT_HIGHLIGHTS]), (e & vocabulary_icon) == vocabulary_icon && rw_loadIcon("vocabulary", TOOL_TIP_TEXT_ARRAY[VOCABULARY][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[VOCABULARY], !1, TRANSLATION_IDS[VOCABULARY]), (e & mp3_icon) == mp3_icon && rw_loadIcon("mp3", TOOL_TIP_TEXT_ARRAY[MP3_MAKER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[MP3_MAKER], !1, TRANSLATION_IDS[MP3_MAKER]), (e & calculator_icon) == calculator_icon && rw_loadIcon("calculator", TOOL_TIP_TEXT_ARRAY[CALCULATOR][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CALCULATOR], !1, TRANSLATION_IDS[CALCULATOR]), (e & record_icon) == record_icon && rw_loadIcon("recorder", TOOL_TIP_TEXT_ARRAY[SPEECH_RECORDER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SPEECH_RECORDER], !1, TRANSLATION_IDS[SPEECH_RECORDER]), (e & generatecache_icon) == generatecache_icon && rw_loadIcon("generate_cache", TOOL_TIP_TEXT_ARRAY[GENERATE_CACHE][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[GENERATE_CACHE], !1, TRANSLATION_IDS[GENERATE_CACHE]), (e & checkcache_icon) == checkcache_icon && rw_loadIcon("check_cache", TOOL_TIP_TEXT_ARRAY[CHECK_CACHE][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CHECK_CACHE], !1, TRANSLATION_IDS[CHECK_CACHE]), (e & submit_icon) == submit_icon && rw_loadIcon("submit", TOOL_TIP_TEXT_ARRAY[SUBMIT][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SUBMIT], !1, TRANSLATION_IDS[SUBMIT]), (e & sticky_icon) == sticky_icon && (g_nStickyIndex = rw_loadIcon("sticky", TOOL_TIP_TEXT_ARRAY[STICKY_NOTE][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[STICKY_NOTE], !0, TRANSLATION_IDS[STICKY_NOTE])), null != g_strCustId && null != g_strBookId && null != g_strPageId && ((e & pronCreate_icon) == pronCreate_icon && rw_loadIcon("pronCreate", TOOL_TIP_TEXT_ARRAY[CREATE_PRONUNCIATION][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CREATE_PRONUNCIATION], !1, TRANSLATION_IDS[CREATE_PRONUNCIATION]), (e & pronEdit_icon) == pronEdit_icon && rw_loadIcon("pronEdit", TOOL_TIP_TEXT_ARRAY[EDIT_PRONUNCIATION][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[EDIT_PRONUNCIATION], !1, TRANSLATION_IDS[EDIT_PRONUNCIATION])), (e & screenmask_icon) == screenmask_icon && rw_loadIcon("screenmask", TOOL_TIP_TEXT_ARRAY[SCREEN_MASK][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SCREEN_MASK], !1, TRANSLATION_IDS[SCREEN_MASK])
}

function $rw_setVoice(e) {
  if ("string" == typeof e && null != e && e.length > 0 && e != g_strVoice) {
    eba_voice = e, g_strVoice = e;
    try {
      var t = g_controllerFactory.getConnector();
      null != t && t.setVoiceName(g_strVoice)
    } catch (r) {
      thLogE(r)
    }
  }
}

function $rw_updateUILanguage() {
  try {
    if (void 0 == textHelp) return;
    if (void 0 == textHelp.webreader) return;
    if (void 0 == textHelp.webreaderapi) return;
    if (void 0 == textHelp.webreader.LocaleSingleton) return;
    if (void 0 == textHelp.webreaderapi.HelpersSingleton) return;
    if (null == textHelp.webreader.LocaleSingleton.getInst()) return;
    for (var e = document.querySelectorAll("[data-speechstream-toolbar]"), t = 0; t < e.length; t++) {
      var r = e[t].getAttribute("data-speechstream-toolbar");
      e[t].setAttribute("title", textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString(r))
    }
    for (e = document.querySelectorAll("[data-speechstream-picture-dictionary]"), t = 0; t < e.length; t++) {
      var r = e[t].getAttribute("data-speechstream-picture-dictionary");
      e[t].innerText = textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString(r)
    }
    for (e = document.querySelectorAll("[data-speechstream-dictionary]"), t = 0; t < e.length; t++) {
      var r = e[t].getAttribute("data-speechstream-dictionary");
      e[t].innerText = textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString(r)
    }
    for (e = document.querySelectorAll("[data-speechstream-translator]"), t = 0; t < e.length; t++) {
      var r = e[t].getAttribute("data-speechstream-translator");
      e[t].innerText = textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString(r)
    }
  } catch (n) {
    thLogE(n)
  }
}

function $rw_setVoiceForLanguage(e, t) {
  var r;
  if ("string" == typeof t) {
    if (r = rw_determineInternalLanguageNumber(t), r == -1) try {
      r = parseInt(t, 10)
    } catch (n) {
      return void thLogE(n)
    }
  } else {
    if ("number" != typeof t) return;
    r = t
  }
  "string" == typeof e && null != e && e.length > 0 && r >= 0 && r < DEFAULT_VOICE_ARRAY.length && (DEFAULT_VOICE_ARRAY[r] = e)
}

function rw_determineInternalLanguageNumber(e) {
  var t = e.toLowerCase();
  return "english" == t || "english_uk" == t ? ENG_UK : "english_us" == t ? ENG_US : "spanish" == t ? SPANISH : "espanol" == t ? ESPANOL : "espa" == t.substr(0, 4) && t == "espa" + String.fromCharCode(241) + "ol" ? ESPANOL : "french" == t ? FRENCH : "fran" == t.substr(0, 4) && t == "fran" + String.fromCharCode(231) + "ais" ? FRENCH : "french_ca" == t ? FRENCH_CA : "german" == t ? GERMAN : "italian" == t ? ITALIAN : "dutch" == t ? DUTCH : "swedish" == t ? SWEDISH : "australian" == t ? AUSTRALIAN : "portuguese" == t ? PORTUGUESE : "portugues" == t ? PORTUGUES : "malaysian" == t ? MALAYSIAN : -1
}

function rw_setVoiceForLanguageFromList(e) {
  try {
    var t, r, n, a = e.split("~")
      , o = a.length;
    for (t = 0; t < o; t += 2) n = a[t], r = a[t + 1], $rw_setVoiceForLanguage(n, r)
  } catch (i) {}
}

function $rw_setSpeedValue(e) {
  if ("number" == typeof e) {
    if (e > -4 && e < 101 && e != g_nSpeedValue) {
      eba_speedValue = e, eba_speed_value = e, eba_reading_age = e, g_nSpeedValue = e;
      try {
        if (g_bServerSupport) {
          var t = g_controllerFactory.getConnector();
          null != t && t.setSpeedValue("" + g_nSpeedValue)
        }
      } catch (r) {
        thLogE(r)
      }
    }
  } else if ("string" == typeof e) {
    var n = e.toUpperCase();
    if ("VERY_SLOW_SPEED" == n) $rw_setSpeedValue(VERY_SLOW_SPEED);
    else if ("SLOW_SPEED" == n) $rw_setSpeedValue(SLOW_SPEED);
    else if ("MEDIUM_SPEED" == n) $rw_setSpeedValue(MEDIUM_SPEED);
    else if ("FAST_SPEED" == n) $rw_setSpeedValue(FAST_SPEED);
    else {
      var a = parseInt(e, 10);
      $rw_setSpeedValue(a)
    }
  }
}

function $rw_setVolumeValue(e) {
  if ("number" == typeof e && e >= -1 && e <= 100 && e != g_nVolumeValue) {
    eba_volume_value = e, g_nVolumeValue = e;
    try {
      if (g_bServerSupport) {
        var t = g_controllerFactory.getConnector();
        null != t && t.setVolumeValue("" + g_nVolumeValue)
      }
    } catch (r) {
      thLogE(r)
    }
  }
}

function $rw_setBarVisibility(e) {
  return
}

function stopTexthelpScreenshotReading() {
  this.g_thRW4GCNamespaceInit && window.postMessage({
    method: "thStopScreenShotReaderSpeech"
    , type: "1757FROM_PAGERW4G"
    , payload: {
      ChromeExtId: texthelp.RW4GC.texthelpScreenShotReaderID
    }
  }, "*")
}

function $rw_enableClickToSpeak(e) {
  if (stopTexthelpScreenshotReading(), e && !$g_bMouseSpeech) $rw_event_hover(null, g_nHoverIndex);
  else if (!e && $g_bMouseSpeech && ($rw_event_hover(null, g_nHoverIndex), g_nHoverIndex > -1)) {
    var t = g_nBlockNextChange;
    g_nBlockNextChange = 0, rw_mouseOffIcon("hover", g_nHoverIndex, !0), g_nBlockNextChange = t
  }
}

function $rw_enableSpeachByBubbleMode(e) {
  return "undefinded" == typeof SpeechStream.bubbleSpeech || "undefinded" == typeof SpeechStream.bubbleSpeech.initSpeechBubble ? void(SSDAT.bubbleData.bBubbleModeStartDisabled = !e) : void(SSDAT.controlData.bOnloadFinished ? (SSDAT.bubbleData.bBubbleMode = e, SSDAT.bubbleData.bBubbleMode || (SpeechStream.bubbleSpeech.hideStartBubble(), SpeechStream.bubbleSpeech.hideStopBubble(), $rw_stopSpeech())) : SSDAT.bubbleData.bBubbleModeStartDisabled = !e)
}

function $rw_enableContinuousReading(e) {
  stopTexthelpScreenshotReading(), g_bContinuousReading = e, eba_continuous_reading = e, g_bContinuousReading ? (g_bSpeechSelectionBySentence = "boolean" != typeof eba_speak_selection_by_sentence || eba_speak_selection_by_sentence, $rw_isSpeaking() && null != g_lastTarget && null == g_nextTargetForContinuousReading && (rw_clearQueueOfSpeech(), rw_setupContinuousReading(g_lastTarget))) : (g_nextTargetForContinuousReading = null, g_bSpeechSelectionBySentence = !1)
}

function $rw_getUserTarget() {
  return g_userDeterminedTarget
}

function $rw_stopSpeech() {
  $rw_event_stop()
}

function $rw_speakFromElement(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    if (g_nNavDoubleClickTime = t, null != g_apipData) return void SSAPIP.apipHandler.checkElement(e, SSAPIP.apipHandler.Type.DEFAULT);
    var r = rw_getTargetFromElement(e);
    if (null != r) {
      if ($rw_stopSpeech(), g_bSpeechSelectionBySentence) {
        var n;
        n = rw_checkIfNeedToReduceToSentence(r, !1), g_finalSentenceTarget = null, null != n && (r = n)
      }
      g_userDeterminedTarget = r, rw_speakHoverTarget(r)
    } else {
      document.getElementById(id);
      null != e && (e = SSDOM.getNextTextNodeNoBlank(e, !1, null), g_nNavDoubleClickTime = 0, $rw_speakCurrentSentence(e, 0))
    }
  }
}

function $rw_speakFromId(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    if (g_nNavDoubleClickTime = t, null != g_apipData) {
      var r = document.getElementById(e);
      return void SSAPIP.apipHandler.checkElement(r, SSAPIP.apipHandler.Type.DEFAULT)
    }
    var n = rw_getTargetFromId(e);
    if (null != n) {
      if ($rw_stopSpeech(), g_bSpeechSelectionBySentence) {
        var a;
        a = rw_checkIfNeedToReduceToSentence(n, !1), g_finalSentenceTarget = null, null != a && (n = a)
      }
      g_userDeterminedTarget = n, rw_speakHoverTarget(n)
    } else {
      var r = document.getElementById(e);
      null != r && (r = SSDOM.getNextTextNodeNoBlank(r, !1, null), g_nNavDoubleClickTime = 0, $rw_speakCurrentSentence(r, 0))
    }
  }
}

function $rw_speakById(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    if (g_nNavDoubleClickTime = t, null != g_apipData) {
      var r = document.getElementById(e);
      return void SSAPIP.apipHandler.checkElement(r, SSAPIP.apipHandler.Type.SINGLE_ITEM)
    }
    var n = rw_getTargetFromId(e);
    if (null != n) {
      $rw_stopSpeech();
      var a;
      g_bSpeechSelectionBySentence ? (a = rw_checkIfNeedToReduceToSentence(n, !1), null == a && (g_finalSentenceTarget = n)) : (a = n, a.allowContinuous = !1), null != a ? (n = a, rw_speakHoverTarget(n)) : (n.blockCache = !g_bCacheSelection, rw_speakHoverTarget(n)), g_userDeterminedTarget = n
    }
  }
}

function $rw_speakByIdFromFile(e, t) {
  var r = (new Date)
    .getTime();
  if (!(r - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClickTime = r;
    var n = rw_getTargetFromId(e);
    null != n && ($rw_stopSpeech(), g_userDeterminedTarget = n, rw_speechFromFile(n, t))
  }
}

function $rw_speakByIdHighlightOnly(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClickTime = t;
    var r = rw_getTargetFromId(e);
    null != r && ($rw_stopSpeech(), g_userDeterminedTarget = r, rw_speechHighlightOnly(r))
  }
}

function $rw_speakByIdWithSpeaker(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClickTime = t;
    var r = rw_getTargetFromId(e);
    if (null != r) $rw_stopSpeech(), g_strSpeakerId = e, g_userDeterminedTarget = r, rw_speakHoverTarget(r);
    else {
      var n = document.getElementById(e);
      null != n && 1 == n.nodeType && null == n.firstChild && (g_strSpeakerId = e, g_nNavDoubleClickTime = 0, $rw_speakFromId(e))
    }
  }
}

function rw_getTargetFromId(e) {
  var t = document.getElementById(e);
  return rw_getTargetFromElement(t)
}

function rw_getTargetFromElement(e) {
  if (null != e) {
    if (1 == e.nodeType && "img" == e.tagName && null == e.getAttribute("msg")) return new THHoverTarget(e.ownerDocument.body, SSDOM.getPositionInDom(e), null);
    var t = e.innerHTML;
    if (t.length > 0) {
      var r = SSDOM.getFirstChildTextNode(e, !0);
      if (null == r || 3 != r.nodeType) {
        if (null == r || 1 != r.nodeType || "img" != r.tagName) return null;
        var n = r.getAttribute("msg");
        if (!(null != n && n.length > 0)) return null
      }
      var a = SSDOM.getLastChildTextNode(e, !0);
      if (null == a || 3 != a.nodeType) {
        if (null == a || 1 != a.nodeType || "img" != a.tagName) return null;
        var n = a.getAttribute("msg");
        if (!(null != n && n.length > 0)) return null
      }
      var o = rw_getRefPt(r, 0)
        , i = 3 == a.nodeType ? rw_getRefPt(a, a.nodeValue.length) : rw_getRefPt(a, 0)
        , l = new THRange(e.ownerDocument.body, o, i)
        , s = new THHoverTarget(null, null, l);
      return s
    }
  }
  return null
}

function $rw_setSentenceFromSelection() {
  try {
    var e = $rw_getTHCaretRangeFromSelection();
    if (null == e) return;
    var t = SSDOM.getSentenceBreakToLeft(e.leftCaret)
      , r = SSDOM.getSentenceBreakToRight(e.rightCaret);
    if (null != t && null != r) {
      var n = new THCaretRange(t, r)
        , a = rw_getTHRangeFromTHCaretRange(n);
      null != a && (g_userDeterminedTarget = new THHoverTarget(null, null, a))
    }
  } catch (o) {
    thLogE(o)
  }
}

function $rw_speakSentenceAtNode(e, t) {
  (e || 1 == e.nodeType && 3 == e.nodeType) && $rw_speakCurrentSentence(e, t)
}

function $rw_speakCurrentSentence(e, t) {
  var r = (new Date)
    .getTime()
    , n = r - g_nNavDoubleClickTime;
  if (!(n < g_nClickRejectTime)) {
    g_nNavDoubleClickTime = r;
    var a = rw_getCurrentSentence(e, t);
    if (null != a) {
      if (a.equals(g_userDeterminedTarget) && n < 5 * g_nClickRejectTime) return;
      $rw_stopSpeech(), g_userDeterminedTarget = a, rw_speakHoverTarget(a)
    }
  }
}

function $rw_speakCurrentSentenceHighlightOnly(e, t) {
  var r = (new Date)
    .getTime();
  if (!(r - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClickTime = r;
    var n = rw_getCurrentSentence(e, t);
    null != n && ($rw_stopSpeech(), g_userDeterminedTarget = n, rw_speechHighlightOnly(n))
  }
}

function rw_getTHCaretRangeForNode(e, t) {
  var r;
  r = "undefined" == typeof t ? new THCaret(e, 0, (!0)) : new THCaret(e, t, (!0));
  var n = SSDOM.getSentenceBreakToLeft(r)
    , a = SSDOM.getSentenceBreakToRight(r);
  return null == n || null == a ? null : new THCaretRange(n, a)
}

function rw_getCurrentSentence(e, t) {
  var r, n;
  if ("undefined" == typeof e || null == e)
    if (null == g_userDeterminedTarget) {
      var a = SSDOM.getFirstSentence(document.body);
      if (null == a) return null;
      r = rw_getTHRangeFromTHCaretRange(a), n = new THHoverTarget(null, null, r)
    } else n = g_userDeterminedTarget;
  else {
    if (e instanceof THCaretRange) r = rw_getTHRangeFromTHCaretRange(e);
    else {
      var a = rw_getTHCaretRangeForNode(e, t);
      if (null == a) return null;
      r = rw_getTHRangeFromTHCaretRange(a)
    }
    n = new THHoverTarget(null, null, r)
  }
  return n
}

function $rw_getCurrentTarget() {
  return g_userDeterminedTarget
}

function $rw_setCurrentTarget(e) {
  g_userDeterminedTarget = e, g_userDeterminedTarget = "undefined" == typeof e ? null : e
}

function $rw_speakFirstSentence(e) {
  var t = null;
  if (e && e.nodeType) t = e;
  else {
    if (null != g_strPlayStartPoint && "" != g_strPlayStartPoint) try {
      t = rw_searchFramesForElement(window, g_strPlayStartPoint)
    } catch (r) {}
    null == t && (t = document.body)
  }
  3 == t.nodeType && rw_wordIsSpeakable(t.nodeValue) || (t = SSDOM.getNextTextNodeNoBlank(t, !1, null)), $rw_speakCurrentSentence(t, 0)
}

function rw_searchFramesForElement(e, t) {
  var r = e.document.getElementById(t);
  if (null != r) return r;
  for (var n = e.length, a = 0; a < n; a++) {
    var o = e[a];
    if (r = rw_searchFramesForElement(o, t), null != r) return r
  }
  return null
}

function $rw_speakNextSentence() {
  var e = (new Date)
    .getTime();
  if (!(e - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    if (g_nNavDoubleClickTime = e, null == g_userDeterminedTarget) return g_nNavDoubleClickTime = 0, void $rw_speakCurrentSentence();
    var t = g_userDeterminedTarget.getCaretRange()
      , r = rw_findCommands(t.rightCaret.node);
    if (r.length > 0) {
      for (var n = null, a = 0; a < r.length; a++) {
        var o = r[a];
        o.command == o.CMD_JUMP && null != document.getElementById(o.param) && (n = o.param)
      }
      if (null != n) return $rw_stopSpeech(), g_nNavDoubleClickTime = 0, void $rw_speakFromId(n)
    }
    var i = SSDOM.getNextSentence(t);
    if (null != i && !rw_checkForEndContinuousFlag(t.leftCaret.node, i.leftCaret.node)) {
      var l = rw_getTHRangeFromTHCaretRange(i)
        , s = new THHoverTarget(null, null, l);
      $rw_stopSpeech(), g_userDeterminedTarget = s, rw_speakHoverTarget(s)
    }
  }
}

function $rw_speakNextSentenceHighlightOnly() {
  var e = (new Date)
    .getTime();
  if (!(e - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    if (g_nNavDoubleClickTime = e, null == g_userDeterminedTarget) return g_nNavDoubleClickTime = 0, void $rw_speakCurrentSentenceHighlightOnly();
    var t = g_userDeterminedTarget.getCaretRange()
      , r = SSDOM.getNextSentence(t);
    if (null != r) {
      var n = rw_getTHRangeFromTHCaretRange(r)
        , a = new THHoverTarget(null, null, n);
      $rw_stopSpeech(), g_userDeterminedTarget = a, rw_speechHighlightOnly(a)
    }
  }
}

function $rw_speakPreviousSentence() {
  var e = (new Date)
    .getTime();
  if (!(e - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    if (g_nNavDoubleClickTime = e, null == g_userDeterminedTarget) return g_nNavDoubleClickTime = 0, void $rw_speakCurrentSentence();
    var t = g_userDeterminedTarget.getCaretRange()
      , r = rw_findCommands(t.rightCaret.node);
    if (r.length > 0) {
      for (var n = null, a = 0; a < r.length; a++) {
        var o = r[a];
        o.command == o.CMD_JUMPBACK && null != document.getElementById(o.param) && (n = o.param)
      }
      if (null != n) return $rw_stopSpeech(), g_nNavDoubleClickTime = 0, void $rw_speakFromId(n)
    }
    var i = SSDOM.getPreviousSentence(t);
    if (null != i && !rw_checkForEndContinuousFlag(i.rightCaret.node, t.rightCaret.node)) {
      var l = rw_getTHRangeFromTHCaretRange(i)
        , s = new THHoverTarget(null, null, l);
      $rw_stopSpeech(), g_userDeterminedTarget = s, rw_speakHoverTarget(s)
    }
  }
}

function $rw_speakPreviousSentenceHighlightOnly() {
  var e = (new Date)
    .getTime();
  if (!(e - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    if (g_nNavDoubleClickTime = e, null == g_userDeterminedTarget) return g_nNavDoubleClickTime = 0, void $rw_speakCurrentSentenceHighlightOnly();
    var t = g_userDeterminedTarget.getCaretRange()
      , r = SSDOM.getPreviousSentence(t);
    if (null != r) {
      var n = rw_getTHRangeFromTHCaretRange(r)
        , a = new THHoverTarget(null, null, n);
      $rw_stopSpeech(), g_userDeterminedTarget = a, rw_speechHighlightOnly(a)
    }
  }
}

function $rw_getTHCaretRangeFromSelection() {
  var e = rw_getSelectionWithTHRange();
  return null != e && e.range instanceof THRange ? rw_getTHCaretRangeFromTHRange(e.range) : null
}

function $rw_isTextSelectedForPlay() {
  if (g_bServerSupport) try {
    if (null != g_speakableTextAreaTarget) return !!$rw_isPaused() || 0 == g_nSpeakableTextAreaTimerId;
    if ($rw_isPaused()) return !0;
    var e = rw_getSelectionWithTHRange();
    if (null != e && null != e.range) {
      var t = e.range;
      if (t instanceof String) return !0;
      var r = new THHoverTarget(null, null, t)
        , n = r.getTextPreparedForSpeech();
      if (null != n && n.length > 0) return !0
    }
  } catch (a) {
    thLogE(a)
  }
  return !1
}

function $rw_getNumberOfHighlights() {
  return "undefined" != typeof g_aTextRange ? g_aTextRange.length : 0
}

function $rw_getHighlightText(e) {
  return "undefined" != typeof g_aTextRange && e > -1 && e < g_aTextRange.length ? g_bIEOld ? g_aTextRange[e].text : g_aTextRange[e].toString() : ""
}

function $rw_getHighlightColor(e) {
  return "undefined" != typeof g_aHighlightColour && e > -1 && e < g_aHighlightColour.length ? g_aHighlightColour[e] : ""
}

function $rw_getHighlightColour(e) {
  return $rw_getHighlightColor(e)
}

function $rw_isPageLoaded() {
  return SSDAT.controlData.bOnloadFinished && g_bServerSupport
}

function $rw_highlightOnlyWTSFailed() {}

function $rw_log(e) {
  thLog(e)
}

function $rw_setReadingAge(e) {
  if ("string" == typeof e) try {
    e = parseInt(e, 10)
  } catch (t) {
    return void thLogE(t)
  }
  if ("number" == typeof e) switch (e) {
  case 1:
  case 2:
  case 3:
  case 4:
    $rw_setSpeedValue(READING_AGE_4);
    break;
  case 5:
    $rw_setSpeedValue(READING_AGE_5);
    break;
  case 6:
    $rw_setSpeedValue(READING_AGE_6);
    break;
  case 7:
    $rw_setSpeedValue(READING_AGE_7);
    break;
  case 8:
    $rw_setSpeedValue(READING_AGE_8);
    break;
  case 9:
    $rw_setSpeedValue(READING_AGE_9);
    break;
  case 10:
    $rw_setSpeedValue(READING_AGE_10);
    break;
  case 11:
    $rw_setSpeedValue(READING_AGE_11);
    break;
  case 12:
    $rw_setSpeedValue(READING_AGE_12);
    break;
  case 13:
    $rw_setSpeedValue(READING_AGE_13);
    break;
  case 14:
    $rw_setSpeedValue(READING_AGE_14);
    break;
  case 15:
    $rw_setSpeedValue(READING_AGE_15);
    break;
  case 16:
    $rw_setSpeedValue(READING_AGE_16);
    break;
  default:
    $rw_setSpeedValue(READING_AGE_10)
  }
}

function $rw_getVoice() {
  return eba_voice
}

function $rw_getSpeed() {
  return eba_speed_value
}

function $rw_setCustomerId(e) {
  try {
    if ("string" == typeof e) {
      var t = rw_filterId(e.trimTH());
      if (g_strCustId != t) {
        g_strCustId = t, eba_cust_id = g_strCustId;
        var r = g_controllerFactory.getConnector();
        null != r && r.setCustomerId(g_strCustId);
        var n = document.getElementById("editPageMsg");
        null != n && (n.innerHTML = ""), g_bPronActive && (m_pronDictionary.deleteAll(), rw_loadPronunciationsFromServer()), rw_refreshAnnotations()
      }
    }
  } catch (a) {
    thLogE(a)
  }
}

function $rw_setBookId(e) {
  try {
    if ("string" == typeof e) {
      var t = rw_filterId(e.trimTH());
      if (g_strBookId != t) {
        g_strBookId = t, eba_book_id = g_strBookId;
        var r = g_controllerFactory.getConnector();
        null != r && r.setBookId(g_strBookId);
        var n = document.getElementById("editPageMsg");
        null != n && (n.innerHTML = ""), g_bPronActive && (m_pronDictionary.deleteAll(), rw_loadPronunciationsFromServer()), rw_refreshAnnotations()
      }
    }
  } catch (a) {
    thLogE(a)
  }
}

function $rw_setPageId(e) {
  try {
    if ("string" == typeof e) {
      var t = rw_filterId(e.trimTH());
      if (g_strPageId != t) {
        g_strPageId = t, eba_page_id = g_strPageId;
        var r = g_controllerFactory.getConnector();
        null != r && r.setPageId(g_strPageId);
        var n = document.getElementById("editPageMsg");
        null != n && (n.innerHTML = ""), g_bPronActive && (m_pronDictionary.deleteAll(), rw_loadPronunciationsFromServer()), rw_refreshAnnotations()
      }
    }
  } catch (a) {
    thLogE(a)
  }
}

function $rw_setSymbolText(e) {
  null != e && "string" == typeof e && e.length > 0 && (g_bMathsSymbols = !0, g_mathsSymbolArray = new Array, g_mathsMapping = new Object, rw_mathsMappingSetup(g_strMathsData), rw_mathsMappingSetup(e))
}

function rw_refreshAnnotations() {
  if (g_bPersistAnnotations) {
    if ("*" != g_strPersistHighlightEditorId && "undefined" != typeof rw_retrieveHighlightDataForPKT) {
      var e = g_bPersistAnnotations;
      g_bPersistAnnotations = !1, studySkillsClearHighlights(!0), g_bPersistAnnotations = e
    }
    "*" != g_strPersistNoteEditorId && "undefined" != typeof rw_unserialiseStickyNotes && rw_removeAllNotes(), "*" != g_strPersistHighlightEditorId && "undefined" != typeof rw_retrieveHighlightDataForPKT ? rw_retrieveHighlightDataForPKT() : "*" != g_strPersistNoteEditorId && "undefined" != typeof rw_unserialiseStickyNotes && rw_unserialiseStickyNotes()
  }
}

function rw_autogenSpeechFiles() {
  g_cacheImgList = rw_getNonInlineImages(), g_nCacheNumbSentences = 0, g_nCurrentCacheSentences = 1, g_bAutoCacheAllSpeeds && (g_nAutocacheSpeedSetting = 1, $rw_setSpeedValue(SLOW_SPEED)), g_currentCacheSentence = SSDOM.getFirstSentence(document.body), g_nCacheNumbSentences = rw_autogenCountSentences(g_currentCacheSentence), g_nCacheNumbImages = g_cacheImgList.length, g_nCurrentCacheImage = -1, rw_autogenSentence(!0)
}

function rw_autogenCountSentences(e) {
  for (var t = e, r = 0; null != t;) r++, t = SSDOM.getNextSentence(t);
  return r += g_cacheImgList.length, g_bAutoCacheAllSpeeds ? 3 * r : r
}

function rw_getNonInlineImages() {
  var e = new Array;
  if (g_bInlineImg) return e;
  var t, r = document.getElementsByTagName("img")
    , n = r.length;
  for (t = 0; t < n; t++) {
    var a = r[t];
    if (!("none" == a.style.display && g_bIgnoreHidden || SSDOM.isIgnored(a) || null != a.getAttribute("msg"))) {
      var o = a.getAttribute("title");
      null != o && o.length > 0 ? o.trimTH()
        .length > 0 && e.push(a) : (o = a.getAttribute("alt"), null != o && o.length > 0 && o.trimTH()
          .length > 0 && e.push(a))
    }
  }
  return e
}

function rw_getImgText(e) {
  if (null == e) return "";
  var t = e.getAttribute("title");
  if (null != t && t.length > 0) return t;
  var r = e.getAttribute("alt");
  if (null != r && r.length > 0) return r;
  var n = e.getAttribute("msg");
  return null != n && n.length > 0 ? n : ""
}

function rw_autogenSentence(e) {
  var t = ""
    , r = ""
    , n = null;
  if (null == g_currentCacheSentence) {
    var a = !1;
    if (g_nCurrentCacheImage < g_nCacheNumbImages && g_nCurrentCacheImage > -1 && g_nCurrentCacheImage < g_cacheImgList.length) {
      var o = rw_getImgText(g_cacheImgList[g_nCurrentCacheImage]);
      if (o.trimTH()
        .length > 0) {
        g_bVoiceFromLangFlag && (n = rw_getVoiceSetForNode(g_cacheImgList[g_nCurrentCacheImage]));
        var i = new SpeechStream.SpeechRequest;
        i.setString(o, SpeechStream.SpeechRequestBookmarks.OUTER), r = i.getText(), t = i.getFinalText(), a = !0
      }
    }
    if (!a) return void(e ? $rw_autogenSpeechFilesCallback("Success") : $rw_checkAutogenCachedFilesCallback("Success"))
  } else {
    var l = rw_getSpeechOverCaretRangeToSpeak(g_currentCacheSentence, new Array);
    n = l.voice, null != l.caretRange && (g_currentCacheSentence = l.caretRange, g_nCacheNumbSentences++), t = l.txt, r = l.txtOrig
  }
  var s = g_controllerFactory.getConnector();
  if (null != s) {
    var c, g = rw_getCachedSpeechFolderUrl();
    if (c = rw_getHash(SpeechStream.pronunciation.mode == SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER ? t : r), g_bApip && (g = rw_apipFolderCheck(g), c = rw_apipFileCheck(c)), g_bSplitCachePath) {
      var u = rw_getSplitPathFromName(c);
      g = g + "/" + u
    }
    if (e) {
      var _ = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer() + "/";
      s.autogenSpeechFiles(t, g, c, !g_bLocalPronunciationLoaded, _)
    } else {
      var d = g + "/" + c;
      s.checkAutogenCachedFiles(d)
    }
  }
}

function $rw_autogenSpeechFilesCallback(e) {
  if ("Success" == e) {
    var t = !1;
    if (g_bAutoCacheAllSpeeds) switch (1 == g_nAutocacheSpeedSetting || 2 == g_nAutocacheSpeedSetting ? g_nAutocacheSpeedSetting++ : (g_nAutocacheSpeedSetting = 1, t = !0), g_nAutocacheSpeedSetting) {
    case 1:
      $rw_setSpeedValue(SLOW_SPEED);
      break;
    case 2:
      $rw_setSpeedValue(MEDIUM_SPEED);
      break;
    case 3:
      $rw_setSpeedValue(FAST_SPEED)
    } else t = !0;
    if (t)
      if (g_currentCacheSentence = SSDOM.getNextSentence(g_currentCacheSentence, null), null != g_currentCacheSentence)
        if (g_nCurrentCacheSentences++, g_nCacheNumbSentences >= g_nCurrentCacheSentences) {
          if ($rwj("#pb1")
            .progressBar(g_nCurrentCacheSentences / g_nCacheNumbSentences * 100), g_bUseCommands) {
            var r = new THHoverTarget(null, null, rw_getTHRangeFromTHCaretRange(g_currentCacheSentence));
            rw_actOnCommand(r)
          }
          rw_autogenSentence(!0)
        } else $rwj.unblockUI(), g_strSpeechStreamAutoCacheError = "Error: More sentences to be cached than counted in initial count at the start of this process!", g_bSpeechStreamAutoCacheNoAlert || alert(g_strSpeechStreamAutoCacheError), "string" == typeof g_strSpeechStreamAutoCacheCallback && rw_runClientFunction(g_strSpeechStreamAutoCacheCallback);
    else if (g_nCacheNumbImages > 0 && g_nCurrentCacheImage < g_nCacheNumbImages - 1) ++g_nCurrentCacheSentences, $rwj("#pb1")
      .progressBar(g_nCurrentCacheSentences / g_nCacheNumbSentences * 100), ++g_nCurrentCacheImage, rw_autogenSentence(!0);
    else {
      $rwj.unblockUI();
      var n = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer() + "/"
        , a = g_controllerFactory.getConnector();
      a.autoGenComplete(n), null != g_strSpeechStreamAutoCacheCallback || g_bSpeechStreamAutoCacheNoAlert || alert("Page Cached Successfully!")
    } else g_nCurrentCacheSentences++, rw_autogenSentence(!0)
  } else $rwj.unblockUI(), g_strSpeechStreamAutoCacheError = e, g_bSpeechStreamAutoCacheNoAlert || alert(e), "string" == typeof g_strSpeechStreamAutoCacheCallback && rw_runClientFunction(g_strSpeechStreamAutoCacheCallback)
}

function rw_checkAutogenCachedFiles() {
  g_cacheImgList = rw_getNonInlineImages(), g_nCacheNumbSentences = 0, g_nCurrentCacheSentences = 1, g_nCheckCachedSentences = 0, g_nCheckUncachedSentences = 0, g_bAutoCacheAllSpeeds && (g_nAutocacheSpeedSetting = 1, $rw_setSpeedValue(SLOW_SPEED)), g_currentCacheSentence = SSDOM.getFirstSentence(document.body), g_nCacheNumbSentences = rw_autogenCountSentences(g_currentCacheSentence), g_nCacheNumbImages = g_cacheImgList.length, g_nCurrentCacheImage = -1, rw_autogenSentence(!1)
}

function $rw_checkAutogenCachedFilesCallback(e) {
  "Success" == e ? ++g_nCheckCachedSentences : ++g_nCheckUncachedSentences;
  var t = !1;
  if (g_bAutoCacheAllSpeeds) switch (1 == g_nAutocacheSpeedSetting || 2 == g_nAutocacheSpeedSetting ? g_nAutocacheSpeedSetting++ : (g_nAutocacheSpeedSetting = 1, t = !0), g_nAutocacheSpeedSetting) {
  case 1:
    $rw_setSpeedValue(SLOW_SPEED);
    break;
  case 2:
    $rw_setSpeedValue(MEDIUM_SPEED);
    break;
  case 3:
    $rw_setSpeedValue(FAST_SPEED)
  } else t = !0;
  t ? (g_currentCacheSentence = SSDOM.getNextSentence(g_currentCacheSentence, null), null != g_currentCacheSentence ? (g_nCurrentCacheSentences++, g_nCacheNumbSentences >= g_nCurrentCacheSentences ? ($rwj("#pb1")
    .progressBar(g_nCurrentCacheSentences / g_nCacheNumbSentences * 100), rw_autogenSentence(!1)) : ($rwj.unblockUI(), g_strSpeechStreamAutoCacheError = "Error: More sentences to be cached than counted in initial count at the start of this process!", g_bSpeechStreamAutoCacheNoAlert || alert(g_strSpeechStreamAutoCacheError), "string" == typeof g_strSpeechStreamAutoCacheCallback && rw_runClientFunction(g_strSpeechStreamAutoCacheCallback))) : g_nCacheNumbImages > 0 && g_nCurrentCacheImage < g_nCacheNumbImages - 1 ? (++g_nCurrentCacheSentences, $rwj("#pb1")
    .progressBar(g_nCurrentCacheSentences / g_nCacheNumbSentences * 100), ++g_nCurrentCacheImage, rw_autogenSentence(!1)) : ($rwj.unblockUI(), g_nCheckUncachedSentences > 0 && (g_strSpeechStreamAutoCacheError = "Missing files!  Checked page and found that " + g_nCheckUncachedSentences + " sentences out of " + g_nCurrentCacheSentences + " where not cached.", g_nSpeechStreamAutoCacheMissingCount = g_nCheckUncachedSentences, g_bSpeechStreamAutoCacheNoAlert || alert(g_strSpeechStreamAutoCacheError)), "string" == typeof g_strSpeechStreamAutoCacheCallback ? rw_runClientFunction(g_strSpeechStreamAutoCacheCallback) : 0 != g_nCheckUncachedSentences || g_bSpeechStreamAutoCacheNoAlert || alert("Checked page and found that all " + g_nCurrentCacheSentences + " sentences were cached."))) : (g_nCurrentCacheSentences++, rw_autogenSentence(!1))
}

function $rw_autogenCompleteCallback(e) {
  "Success" != e && (g_strSpeechStreamAutoCacheError = e, g_bSpeechStreamAutoCacheNoAlert || alert("Finished autogeneration process.  " + e)), "string" == typeof g_strSpeechStreamAutoCacheCallback && rw_runClientFunction(g_strSpeechStreamAutoCacheCallback);
}

function $rw_setTranslateSource(e) {
  SpeechStream.translatorData.setSource(e)
}

function $rw_setTranslateTarget(e) {
  void 0 != SpeechStream && void 0 != SpeechStream.translatorData && SpeechStream.translatorData.setTarget(e)
}

function $rw_getTouchSelection() {
  var e, t;
  if (window.getSelection()
    .rangeCount > 0 && !window.getSelection()
    .isCollapsed) e = window.getSelection()
    .getRangeAt(0)
    .cloneRange(), t = window;
  else {
    e = null, t = null;
    var r = SSDOM.getFrameSelection(window);
    if (r) {
      var n = r.getSelection();
      n.rangeCount > 0 && !n.isCollapsed && (e = n.getRangeAt(0)
        .cloneRange(), t = r)
    }
  }
  g_bIpad && g_nIOS >= 6 && g_bIpadFrames && null == e || null == t ? (++g_nIpadSelectionBugWorkaroundCount, g_nIpadSelectionBugWorkaroundCount >= 10 && (g_ipadSelectionRange = e, g_ipadSelectionWindow = t, g_nIpadSelectionBugWorkaroundCount = 0)) : (g_ipadSelectionRange = e, g_ipadSelectionWindow = t, g_nIpadSelectionBugWorkaroundCount = 0)
}

function $rw_setBreakList(e) {
  var t, r = SSDAT.pageData.strBreakList
    , n = SSDAT.pageData.strStyleList
    , a = e.split("~");
  for (t = 0; t < a.length; t++) {
    var o = a[t];
    if (o.length > 0)
      if ("!" == o.charAt(0)) {
        if (o = o.substring(1), SSDAT.pageData.isInBreakList(o)) {
          var i = r.indexOf("~" + o + "~")
            , l = i + 1 + o.length;
          r = r.substring(0, i) + r.substring(l)
        }
        SSDAT.pageData.isInStyleList(o) || (n += o + "~")
      } else if (SSDAT.pageData.isInBreakList(o) && (r += o + "~"), SSDAT.pageData.isInStyleList(o)) {
      var i = n.indexOf("~" + o + "~")
        , l = i + 1 + o.length;
      n = n.substring(0, i) + n.substring(l)
    }
  }
  SSDAT.pageData.strBreakList = r, SSDAT.pageData.strStyleList = n
}

function $rw_parseNewSection(e) {
  try {
    if (null != e) {
      if ($rw_tagSentencesForDynamicSection(e), "*" != g_strPersistNoteEditorId && "undefined" != typeof rw_unserialiseStickyNotes) {
        if (g_nStickyNoteOpened != -1) {
          rw_closeStickyNote(g_nStickyNoteOpened);
          var t = function () {
            $rw_parseNewSection(e)
          };
          return void setTimeout(t, 100)
        }
        rw_removeAllNotes()
      }
      "function" == typeof $rw_refreshHighlights && g_bPersistAnnotations ? (1 == g_nHighlightNotSyncedState && (g_nHighlightNotSyncedState = 2), $rw_refreshHighlights()) : "function" == typeof rw_unserialiseStickyNotes && g_bPersistAnnotations && rw_unserialiseStickyNotes()
    }
  } catch (r) {
    thLog(r.message)
  }
}

function $rw_tagSentencesForDynamicSection(e) {
  if (null != e) {
    try {
      for (var t = !1, r = SSDOM.getNextNodeAllowMoveToChild(e, !1, e); null != r;)
        if (3 == r.nodeType) {
          var n = r.parentNode.tagName.toLowerCase();
          if ("textarea" == n) {
            r = SSDOM.getNextNode(r, !1, e);
            continue
          }
          var a = r.nodeValue
            , o = a.trimSpaceTH()
            , i = o.length > 0;
          if (g_bFLVS && "a" == n && (i = !1), i) {
            if (!g_bFLVS && (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency))) {
              if (o.length < a.length) {
                var l = !1;
                o = a.trimSpaceStartTH(), a.length - o.length > 0 && (a = t ? " " + o : o, l = !0), o = a.trimSpaceEndTH(), a.length - o.length > 1 && (a = o + " ", t = !1, l = !0), l && (r.nodeValue = a)
              }
              o = a.replace(REGEX_WHITESPACE, " "), o.length < a.length && (a = o, l = !0)
            }
            var s;
            s = a.search(REGEX_TAG_SENTENCE_BREAK);
            var c = null != r.parentNode.getAttribute("texthelpSkip")
              , g = r;
            if (s > -1 && s < a.length - 1) {
              for (var u = !0;;) {
                var _ = rw_isFullStop(a, s, r);
                if (_) break;
                var d = a.substring(s + 1)
                  , h = d.search(REGEX_TAG_SENTENCE_BREAK);
                if (!(h > -1)) {
                  u = !1;
                  break
                }
                s = s + 1 + h
              }
              if (u) {
                var p = a.substring(0, s + 1)
                  , S = a.substring(s + 1)
                  , f = new THSpan
                  , m = document.createTextNode(p)
                  , b = document.createTextNode(S)
                  , T = r.parentNode;
                T.insertBefore(b, r), T.insertBefore(f, b), f.appendChild(m), T.removeChild(r), r = b, g = m
              } else {
                if (null != r.previousSibling || null != r.nextSibling || c) {
                  var f = new THSpan;
                  f.setAttribute(RWTH_PERM_GENERATED, "1");
                  var m = document.createTextNode(a)
                    , T = r.parentNode;
                  T.insertBefore(f, r), f.appendChild(m), T.removeChild(r), r = m
                }
                g = r, r = SSDOM.getNextNode(r, !1, null)
              }
            } else {
              if (null != r.previousSibling || null != r.nextSibling || c) {
                var f = new THSpan;
                f.setAttribute(RWTH_PERM_GENERATED, "1");
                var m = document.createTextNode(a)
                  , T = r.parentNode;
                T.insertBefore(f, r), f.appendChild(m), T.removeChild(r), r = m
              }
              g = r, r = SSDOM.getNextNode(r, !1, null)
            }
            if (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency)) {
              var w = g.nodeValue
                , v = g.nodeValue.length;
              t = !(v > 0 && 32 == w.charCodeAt(v - 1))
            }
          } else if (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency))
            if (t) g_bFLVS || (r.nodeValue = " "), t = !1, r = SSDOM.getNextNode(r, !1, e);
            else {
              var C = r;
              r = SSDOM.getNextNode(r, !1, e), g_bFLVS || C.parentNode.removeChild(C)
            }
          else r = SSDOM.getNextNode(r, !1, e)
        } else if (1 == r.nodeType) {
        if (g_bPersistAnnotations && (SSDOM.isStyleNode(r) ? "img" == r.tagName.toLowerCase() && (t = !0) : SSDOM.isLineBreakNode(r) && (t = !1)), g_bIsScholastic) {
          if ("img" == r.tagName.toLowerCase()) {
            var y = r.getAttribute("title");
            null != y && y.length > 0 && r.setAttribute("msg", y)
          }
        } else if (g_bInlineImg && "img" == r.tagName.toLowerCase()) {
          var y = r.getAttribute("msg");
          null != y && y.length > 0 || (y = r.getAttribute("title"), null != y && y.length > 0 ? r.setAttribute("msg", y) : (y = r.getAttribute("alt"), null != y && y.length > 0 && r.setAttribute("msg", y)))
        }
        var I = r.getAttribute(RWTH_COMPONENT)
          , E = r.getAttribute(RWTH_DONT_ALTER);
        r = "pre" == r.tagName.toLowerCase() || null != I && I.length > 0 || null != E && E.length > 0 ? SSDOM.getNextNodeIgnoreChildren(r, !1, e) : SSDOM.getNextNode(r, !1, e)
      } else r = SSDOM.getNextNode(r, !1, e);
      if (g_bPersistAnnotations)
        for (r = SSDOM.getNextNodeAllowMoveToChild(e, !1, e); null != r;)
          if (3 == r.nodeType) {
            var i = r.nodeValue.trimTH()
              .length > 0;
            if (i) {
              for (var O = r.parentNode, D = O.getAttribute("rwthgen"); null != D && D.length > 0;) O = O.parentNode, D = O.getAttribute("rwthgen");
              var N = O.getAttribute("id");
              if (null != N && "rwTHnoteMarker" == N.substr(0, 14)) {
                var R = N;
                if (O.id = "", N = null, null != O.nextSibling || null != O.previousSibling || null != O.parentNode.id && "" != O.parentNode.id) {
                  var A = O.ownerDocument.createElement("span");
                  for (O.id = R; null != O.firstChild;) A.appendChild(O.firstChild);
                  O.appendChild(A), O = A
                } else O.parentNode.id = R
              }
              if (null == N || 0 == N.length) {
                var k = rw_getUniqueIdForTextNode(r);
                null != k && (O.id = k)
              }
            }
            r = SSDOM.getNextNode(r, !1, e)
          } else if (1 == r.nodeType) {
        if (rw_checkIfCanHaveStickys(r) && "img" == r.tagName.toLocaleLowerCase()) {
          var D = r.getAttribute("id");
          if (null != D && "rwTHnoteMarker" == D.substr(0, 14)) {
            var R = D;
            if (r.id = "", D = null, null != r.nextSibling || null != r.previousSibling || null != r.parentNode.id && "" != r.parentNode.id) {
              var A = r.ownerDocument.createElement("span");
              A.id = R, r.parentNode.insertBefore(A, r), A.appendChild(r)
            } else r.parentNode.id = R
          }
          if (null == D || 0 == D.length) {
            var k = rw_getUniqueIdForImg(r);
            null != k && (r.id = k)
          }
        }
        var I = r.getAttribute(RWTH_COMPONENT)
          , E = r.getAttribute(RWTH_DONT_ALTER);
        r = "pre" == r.tagName.toLowerCase() || null != I && I.length > 0 || null != E && E.length > 0 ? SSDOM.getNextNodeIgnoreChildren(r, !1, e) : SSDOM.getNextNode(r, !1, e)
      } else r = SSDOM.getNextNode(r, !1, e)
    } catch (P) {
      thLog("Error in $rw_tagSentences: " + P)
    }
    g_bIELoadedFlag = !0
  }
}

function rw_getUniqueIdForTextNode(e) {
  if (null != e && 3 == e.nodeType) {
    var t = e.ownerDocument
      , r = t.body
      , n = e.nodeValue;
    if (null != n) {
      n = n.replace(/\s+/g, "");
      for (var a = e.parentNode; null != a && null != a.parentNode;) {
        if (a = a.parentNode, null != a.id && a.id.length > 0 && "rwTH" != a.id.substr(0, 4)) {
          n = a.id + n;
          break
        }
        if (a == r) break
      }
      var o = "rwTH" + hex_md5(n);
      if (null != t.getElementById(o)) {
        for (var i = 1; null != t.getElementById(o + i);) ++i;
        o += i
      }
      return o
    }
  }
  return null
}

function rw_getUniqueIdForImg(e) {
  if (null != e && 1 == e.nodeType && "img" == e.tagName.toLocaleLowerCase()) {
    var t = e.ownerDocument
      , r = t.body
      , n = e.src;
    if (null != n) {
      n = n.replace(/\s+/g, "");
      for (var a = e; null != a && null != a.parentNode;) {
        if (a = a.parentNode, null != a.id && a.id.length > 0 && "rwTH" != a.id.substr(0, 4)) {
          n = a.id + n;
          break
        }
        if (a == r) break
      }
      var o = "rwTH" + hex_md5(n);
      if (null != t.getElementById(o)) {
        for (var i = 1; null != t.getElementById(o + i);) ++i;
        o += i
      }
      return o
    }
  }
  return null
}

function $rw_isCustId(e) {
  return 1600 == e && g_bPktFlag
}

function $rw_disableSpeech() {
  if (!g_bDisableSpeech) try {
    for (var e = SpeechStream.EnumIconParameter, t = 0; t < g_nIconCount; t++) {
      var r = g_icons[t][e.ICON_NAME];
      ICONS_TO_DISABLE_FOR_SPEECH_ONLY.indexOf(r) > -1 && rw_showAnIcon(g_icons[t][e.ICON_NAME], "mask", g_icons[t][e.ICON_OFFSET], !1)
    }
  } catch (n) {
    thLogE(n)
  }
  g_bDisableSpeech = !0, $rw_divPress(POPUP_DICTIONARY), $rw_divPress(POPUP_TRANSLATOR), $rw_divPress(POPUP_PICTUREDICTIONARY)
}

function $rw_enableSpeech() {
  if (g_bDisableSpeech) try {
    for (var e = SpeechStream.EnumIconParameter, t = 0; t < g_nIconCount; t++) {
      var r = g_icons[t][e.ICON_NAME];
      ICONS_TO_DISABLE_FOR_SPEECH_ONLY.indexOf(r) > -1 && rw_showAnIcon(g_icons[t][e.ICON_NAME], "flat", g_icons[t][e.ICON_OFFSET], !1)
    }
  } catch (n) {
    thLogE(n)
  }
  g_bDisableSpeech = !1, $rw_divPress(POPUP_DICTIONARY), $rw_divPress(POPUP_TRANSLATOR), $rw_divPress(POPUP_PICTUREDICTIONARY)
}

function $rw_setApipFolder(e) {
  g_strApipFolder = e
}

function $rw_setApipFile(e) {
  g_strApipFile = e
}

function THCaret(e, t, r) {
  this.node = e, this.offset = t, this.forwardBias = r, this.specialCase = !1, SSDOM.isSpecialCase(this.node) && (this.specialCase = !0, this.offset = 0)
}

function THCaretRange(e, t) {
  this.leftCaret = e, this.rightCaret = t
}

function THCommand(e) {
  if (this.command = null, this.param = null, null != e) {
    var t = e.indexOf(":");
    t > -1 ? (this.command = e.substr(0, t)
      .toLowerCase(), this.param = e.substr(t + 1)) : this.command = e.toLowerCase()
  }
}

function rw_findCommands(e) {
  var t = [];
  if (null != e) {
    var r = e.ownerDocument.body
      , n = e;
    if (3 == n.nodeType && (n = n.parentNode), 1 != n.nodeType) return t;
    for (; null != n && n != r;) {
      if (null != n.getAttribute("texthelpCmd")) {
        var a = n.getAttribute("texthelpCmd")
          .trimTH();
        if (a == THCommand.prototype.CMD_LIST || a == THCommand.prototype.CMD_LIST + ":") {
          var o = 1;
          for (a = n.getAttribute("texthelpCmd" + o); null != a;) t.push(new THCommand(a)), ++o, a = n.getAttribute("texthelpCmd" + o)
        } else t.push(new THCommand(a));
        break
      }
      n = n.parentNode
    }
  }
  return t
}

function rw_findCommandNode(e) {
  if (null != e) {
    var t = e.ownerDocument.body
      , r = e;
    if (3 == r.nodeType && (r = r.parentNode), 1 != r.nodeType) return null;
    for (; null != r && r != t;) {
      if (null != r.getAttribute("texthelpCmd")) return r;
      r = r.parentNode
    }
  }
  return null
}

function rw_actOnCommand(p_target) {
  if (g_bUseCommands) {
    var tmpCaret = p_target.getCaretRange();
    if (null != tmpCaret) {
      var commands = rw_findCommands(tmpCaret.rightCaret.node);
      if (commands.length > 0) {
        for (var bStop = !1, i = 0; i < commands.length; i++) {
          var cmd = commands[i];
          if (cmd.command == cmd.CMD_STOP) bStop = !0;
          else if (cmd.command == cmd.CMD_STOPAFTER) p_target.allowContinuous = !1;
          else if (cmd.command == cmd.CMD_JUMP) p_target.jumpId = cmd.param;
          else if (cmd.command == cmd.CMD_VOICE) p_target.voice = cmd.param;
          else if (cmd.command == cmd.CMD_PAGEID) p_target.pageId = cmd.param;
          else if (cmd.command == cmd.CMD_BOOKID) p_target.bookId = cmd.param;
          else if (cmd.command == cmd.CMD_EXEC) try {
            eval(cmd.param)
          } catch (err) {
            thLogE(err.message)
          } else if (cmd.command == cmd.CMD_EXECAFTER) {
            var strExec = 'try{eval("' + cmd.param + '");}catch(err){thLogE(err.message);}';
            g_astrSpeechInstructionQueue.push(strExec)
          }
        }
        bStop && (p_target.valid = !1)
      }
    }
  }
}

function THDomRange(e, t, r, n) {
  this.body = e.ownerDocument.body, this.startCaret = new THCaret(e, t, (!0)), this.endCaret = new THCaret(r, n, (!1)), this.startRef = rw_getRefPt(e, t), this.endRef = rw_getRefPt(r, n)
}

function THDomRefPt(e, t) {
  this.path = e, this.offset = t
}

function THHoverTarget(e, t, r) {
  this.body = e, this.path = t, this.range = r, this.wordNodes = null, this.blockCache = !1, this.textToSpeak = null, this.textToSpeakNoChanges = null, this.allowContinuous = !0, this.useHighlighting = !0, this.prepared = !1, this.valid = !0, this.jumpId = null, this.voice = null, this.pageId = null, this.bookId = null
}

function THRange(e, t, r) {
  this.body = e, this.startRef = t, this.endRef = r
}

function $rw_event_click(e, t) {
  return $rw_event_hover(e, t)
}

function $rw_isTouchDevice() {
  return g_bTouchScreen
}

function pasteHtmlAtCaret(e, t) {
  var r, n;
  if (document.getSelection && (r = document.getSelection(), r.getRangeAt && r.rangeCount)) {
    n = r.getRangeAt(0), n.deleteContents();
    var a = document.createElement("div");
    a.innerHTML = e;
    for (var o, i, l = document.createDocumentFragment(); o = a.firstChild;) i = l.appendChild(o);
    l.firstChild;
    n.insertNode(l), i && (n = n.cloneRange(), n.setStartAfter(i), n.collapse(!0), r.removeAllRanges(), r.addRange(n))
  }
}

function insertTextAtCaret(e, t) {
  return e.isContentEditable ? void pasteHtmlAtCaret(t, !0) : "inherit" == e.contentEditable ? void insertTextAtCursorInput(e, t) : void 0
}

function insertTextAtCursorInput(e, t) {
  var r, n, a = e.value;
  "undefined" != typeof e.selectionStart && "undefined" != typeof e.selectionEnd ? (r = e.selectionEnd, e.value = a.slice(0, e.selectionStart) + t + a.slice(r), e.selectionStart = e.selectionEnd = r + t.length) : "undefined" != typeof document.selection && "undefined" != typeof document.selection.createRange && (e.focus(), n = document.selection.createRange(), n.collapse(!1), n.text = t, n.select())
}

function InsertCodeInTextArea(e, t) {
  if (document.selection) {
    e.focus();
    var r = document.selection.createRange();
    return void(r.text = t)
  }
  if (e.selectionStart || "0" == e.selectionStart) {
    var n = e.selectionStart
      , a = e.selectionEnd;
    e.scrollTop;
    e.value = e.value.substring(0, n) + t + e.value.substring(a, e.value.length), e.focus(), e.selectionStart = n + t.length, e.selectionEnd = n + t.length
  } else e.value += textArea.value, e.focus()
}

function $rw_event_speechinput(e, t) {
  stopTexthelpScreenshotReading();
  var r = document.getElementsByClassName("th-speechinput-image")[0];
  if (g_thSpeechInputEnabled = !g_thSpeechInputEnabled, !g_thSpeechInputEnabled) return textHelp.webreaderapi.HelpersSingleton.getInst()
    .removeClassName(r, "enabled"), g_thRecognition.stop(), void(g_thRecognition = null);
  if (textHelp.webreaderapi.HelpersSingleton.getInst()
    .addClassName(r, "enabled"), null == g_thRecognition) {
    g_thRecognition = new webkitSpeechRecognition, g_thRecognition.continuous = !0, g_thRecognition.interimResults = !1;
    var n = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .language.services;
    g_thRecognition.lang = textHelp.webreaderapi.HelpersSingleton.getInst()
      .toLang(n), g_thRecognition.onstart = function (e) {}, g_thRecognition.onresult = function (e) {
        var t = e.results;
        insertTextAtCaret(document.activeElement, t[t.length - 1][0].transcript + " ")
      }, g_thRecognition.onerror = function (e) {}, g_thRecognition.onend = function (e) {}
  }
  g_thRecognition.start()
}

function $rw_event_screenmasking(e, t) {
  stopTexthelpScreenshotReading();
  var r = document.getElementsByClassName("th-screenmasking-image")[0];
  g_thScreenMaskingEnabled = !g_thScreenMaskingEnabled, g_thScreenMaskingEnabled ? textHelp.webreaderapi.HelpersSingleton.getInst()
    .addClassName(r, "enabled") : textHelp.webreaderapi.HelpersSingleton.getInst()
    .removeClassName(r, "enabled"), textHelp.thScreenMasking.screenmasking.toggle(g_thScreenMaskingEnabled)
}

function $rw_event_hover(e, t) {
  if (g_bMP && g_bSafari && $rw_tagSentences(), g_bServerSupport) {
    if (!g_bIELoadedFlag) {
      if (g_bSpeechCacheGenerateFlag) throw "The page has not fully loaded, click and speak is not available yet.";
      return void rw_alert("The page has not fully loaded, click and speak is not available yet.")
    }
    $g_bMouseSpeech = !$g_bMouseSpeech;
    var r = SpeechStream.EnumIconParameter;
    t > -1 && (g_icons[t][r.ICON_TOGGLE_STATE] = $g_bMouseSpeech, g_bTouchScreen && !$g_bMouseSpeech ? rw_showAnIcon(g_icons[t][r.ICON_NAME], "flat", g_icons[t][r.ICON_OFFSET], !0) : rw_showAnIcon(g_icons[t][r.ICON_NAME], "toggleOn", g_icons[t][r.ICON_OFFSET], !0));
    var n = document.getElementById("PredictionAll");
    if (null !== n && "enabled" == n.className && rwPredictionState("Off"), g_bSticky && $g_bMouseSpeech && g_nStickyIndex > -1 && "undefined" != typeof $rw_event_sticky) {
      $rw_event_sticky(e, g_nStickyIndex);
      var a = g_nBlockNextChange;
      g_nBlockNextChange = 0, rw_mouseOffIcon("sticky", g_nStickyIndex, !0), g_nBlockNextChange = a
    }
    $g_bMouseSpeech ? (g_bChromeExtension && window.postMessage({
      type: "1757FROM_PAGERW4G"
      , command: "saveOnClickHover"
      , settings: {
        clickHoverOn: !0
      }
    }, "*"), rw_setSpeakingModeFlag(!0), g_controllerFactory.enableTouchEvents(!0)) : (g_bChromeExtension && window.postMessage({
      type: "1757FROM_PAGERW4G"
      , command: "saveOnClickHover"
      , settings: {
        clickHoverOn: !1
      }
    }, "*"), g_controllerFactory.enableTouchEvents(!1), $rw_event_stop(), rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1), g_controllerFactory.enableTouchEvents(!1))
  }
}

function $rw_isPaused() {
  return g_bServerSupport && g_controllerFactory.getConnector && $rw_isSpeaking() && null != g_controllerFactory.getConnector() && g_controllerFactory.getConnector()
    .isPaused()
}

function $rw_event_play() {
  if (stopTexthelpScreenshotReading(), g_bServerSupport) try {
    if (null != g_speakableTextAreaTarget) {
      if ($rw_isPaused()) return void $rw_event_pause();
      if (0 != g_nSpeakableTextAreaTimerId && (clearTimeout(g_nSpeakableTextAreaTimerId), g_nSpeakableTextAreaTimerId = 0, null == g_speakableTextAreaTarget)) return void $rw_event_play();
      var e = g_speakableTextAreaTarget;
      e.focus(), g_speakableTextAreaTarget = null, $rw_event_stop(), rw_speakHoverTarget(new THHoverTarget(e.ownerDocument.body, SSDOM.getPositionInDom(e), null))
    } else {
      if ($rw_isPaused()) return void $rw_event_pause();
      var t = rw_getSelectionWithTHRange();
      if (null != t && null != t.range) {
        var r = t.range;
        if (r instanceof String) $rw_event_stop(), rw_speakHoverTarget(r);
        else {
          if (g_bIEOld) {
            var n = SSDOM.getSelectionObject();
            null != n && (n.collapse(), n.select())
          } else {
            var n = SSDOM.getSelectionObject();
            null != n && n.collapseToStart()
          }
          var a = new THHoverTarget(null, null, r)
            , o = r.clone()
            , i = a.getTextPreparedForSpeech()
            , l = !1;
          if (o.equals(a.range) || (l = !0), null == i || 0 == i.length) return;
          $rw_event_stop();
          var s;
          g_bSpeechSelectionBySentence ? (s = l ? rw_checkIfNeedToReduceToSentence(new THHoverTarget(null, null, o), !0) : rw_checkIfNeedToReduceToSentence(a, !0), null == s && (g_finalSentenceTarget = a)) : s = a, null != s ? (a = s, rw_speakHoverTarget(a)) : (a.blockCache = !g_bCacheSelection, rw_speakHoverTarget(a))
        }
      } else $rw_event_stop(), $rw_speakFirstSentence()
    }
  } catch (c) {
    thLogE(c)
  }
}

function rw_checkIfNeedToReduceToSentence(e, t) {
  if (null == e) return null;
  g_finalSentenceTargetReduced = null;
  var r = e.getCaretRange();
  r = rw_reduceSelectionForNonSpeechChar(r);
  var n = t ? SSDOM.getSentenceFromPointByLang(r.leftCaret) : SSDOM.getSentenceFromPoint(r.leftCaret);
  if (null == n) return null;
  if (n.rightCaret.node == r.rightCaret.node) {
    if (n.rightCaret.offset == r.rightCaret.offset) return null;
    var a = n.rightCaret.node;
    if (3 == a.nodeType) {
      var o = a.nodeValue.substring(n.rightCaret.offset, r.rightCaret.offset)
        .trimTH();
      if (0 == o.length) return null
    }
  }
  var i = t ? SSDOM.getSentenceFromPointByLang(r.rightCaret) : SSDOM.getSentenceFromPoint(r.rightCaret);
  if (null == i) return null;
  if (n.equals(i)) return null;
  var l;
  if (g_bExtendSelection || (l = n, n = new THCaretRange(r.leftCaret, n.rightCaret)), !rw_caretRangeIsSpeakable(n)) {
    if (n = SSDOM.getNextSentence(n, i.rightCaret.node), null == n) return null;
    if (n.equals(i)) return null
  }
  if (!rw_caretRangeIsSpeakable(i)) {
    if (i = SSDOM.getPreviousSentence(i, null), null == i) return null;
    if (n.equals(i)) return null;
    if (l && l.equals(i)) return null
  }
  if (!g_bExtendSelection) {
    var s = new THCaretRange(i.leftCaret, r.rightCaret);
    g_finalSentenceTargetReduced = new THHoverTarget(null, null, rw_getTHRangeFromTHCaretRange(s))
  }
  var c, g, u = rw_getTHRangeFromTHCaretRange(n);
  return c = new THHoverTarget(null, null, u), i = new THCaretRange(rw_reduceSelectionForNonSpeechChar(i)
    .leftCaret, i.rightCaret), u = rw_getTHRangeFromTHCaretRange(i), g = new THHoverTarget(null, null, u), g_finalSentenceTarget = g, c
}

function rw_reduceSelectionForNonSpeechChar(e) {
  var t, r, n, a, o = !1;
  try {
    var i, l;
    if (!e.rightCaret.isSpecialCase()) {
      t = e.rightCaret.node, r = e.rightCaret.offset;
      for (var s = t.nodeValue;;) {
        if (0 == r) {
          if (i = SSDOM.getPreviousTextNode(t, !1, n), null == i) break;
          if (1 == i.nodeType) {
            t = i, r = 0, o = !0;
            break
          }
          t = i, s = t.nodeValue, r = s.length, o = !0
        }
        if (!(r > 0)) break;
        if (l = s.charAt(r - 1), !rw_isWhiteSpace(l)) break;
        --r, o = !0
      }
    }
    if (!e.leftCaret.isSpecialCase()) {
      n = e.leftCaret.node, a = e.leftCaret.offset;
      for (var c = n.nodeValue, g = c.length;;) {
        if (a == g) {
          if (i = SSDOM.getNextTextNode(n, !1, t), null == i) break;
          if (1 == i.nodeType) {
            n = i, a = 0, g = 0, o = !0;
            break
          }
          n = i, c = n.nodeValue, a = 0, g = c.length, o = !0
        }
        if (!(a < g)) break;
        if (l = c.charAt(a), !rw_isWhiteSpace(l)) break;
        ++a, o = !0
      }
    }
  } catch (u) {
    thLogE(u)
  }
  return o ? new THCaretRange(new THCaret(n, a, (!0)), new THCaret(t, r, (!1))) : e
}

function $rw_event_funplay() {
  $rw_event_play()
}

function $rw_speakText(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClickTime = t, $rw_event_stop(), e = SpeechStream.pauseHandler.encodePauseFromString(e);
    var r = new SpeechStream.SpeechRequest;
    r.setString(e, SpeechStream.SpeechRequestBookmarks.NONE);
    var n = r.getText()
      , a = r.getFinalText();
    rw_playMessage(a, !g_bCacheUserText, n)
  }
}

function $rw_speak(e, t, r) {
  var n = (new Date)
    .getTime();
  if (!(n - g_nNavDoubleClickTime < g_nClickRejectTime))
    if (g_nNavDoubleClickTime = n, $rw_event_stop(), r) {
      var a = new SpeechStream.SpeechRequest;
      a.setString(e, SpeechStream.SpeechRequestBookmarks.NONE);
      var o = a.getText()
        , i = a.getFinalText();
      rw_playMessage(i, t, o)
    } else rw_playMessage(e, t, e)
}

function rw_playMessage(e, t, r) {
  if (rw_speechRedirectCallback(e)) {
    if ("boolean" == typeof eba_no_flash && eba_no_flash) return void rw_sendSocketMessage("THStart" + e + "THEnd");
    if (null == e && 0 == e.length) return void $rw_doSelection(-1);
    try {
      e = SpeechStream.stringAssist.filterNbsp(e), r = "undefinded" == typeof r || null == r ? e : SpeechStream.stringAssist.filterNbsp(r);
      var n = g_controllerFactory.getConnector();
      if (null != n)
        if (g_lastTarget && g_lastTarget.isRange() && (rw_setSpeakingModeFlag(!0), rw_setSpeakerFlag(!0), $rw_doSelection(0)), t && g_bSpeechCacheFlag && g_bCacheLiveGeneration) n.startSpeechFromBackup(e, !g_bLocalPronunciationLoaded), rw_startSpeechCallback();
        else if (SpeechStream.cacheMode.mode == SpeechStream.cacheMode.CACHE_ONLY) {
        var a = rw_getCachedSpeechFolderUrl()
          , o = rw_getHash(r);
        g_bApip && (a = rw_apipFolderCheck(a), o = rw_apipFileCheck(o));
        var i;
        if (g_bSplitCachePath) {
          var l = rw_getSplitPathFromName(o);
          a = a + "/" + l, i = a + "/" + o
        } else i = a + "/" + o;
        n.startSpeechFromCache(i, e, !1), rw_startSpeechCallback()
      } else if (SpeechStream.cacheMode.mode == SpeechStream.cacheMode.CACHE_WITH_LIVE_SERVER) {
        var o, a = rw_getCachedSpeechFolderUrl();
        o = rw_getHash(SpeechStream.pronunciation.mode == SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER ? e : r), g_bApip && (a = rw_apipFolderCheck(a), o = rw_apipFileCheck(o));
        var i;
        if (g_bSplitCachePath) {
          var l = rw_getSplitPathFromName(o);
          a = a + "/" + l, i = a + "/" + o
        } else i = a + "/" + o;
        n.startSpeechFromCacheWithGen(i, e, a, o, !g_bLocalPronunciationLoaded), rw_startSpeechCallback()
      } else if (SpeechStream.cacheMode.mode == SpeechStream.cacheMode.CACHE_BUILDING_MODE) {
        var o, a = rw_getCachedSpeechFolderUrl();
        o = rw_getHash(SpeechStream.pronunciation.mode == SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER ? e : r), g_bApip && (a = rw_apipFolderCheck(a), o = rw_apipFileCheck(o));
        var i;
        if (g_bSplitCachePath) {
          var l = rw_getSplitPathFromName(o);
          a = a + "/" + l, i = a + "/" + o
        } else i = a + "/" + o;
        var s = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer() + "/";
        n.startSpeechGenerateCache(i, e, a, o, !g_bLocalPronunciationLoaded, s), rw_startSpeechCallback()
      } else n.startSpeech(e, !g_bLocalPronunciationLoaded), rw_startSpeechCallback()
    } catch (c) {
      thLogE(c)
    }
  }
}

function rw_apipFolderCheck(e) {
  return null != g_strApipFolder ? g_strApipFolder : e
}

function rw_apipFileCheck(e) {
  return null != g_strApipFile ? g_strApipFile : e
}

function rw_checkForFirefoxCacheProblem(e, t) {
  if (t.indexOf("\n") > -1) {
    var r = rw_getHTTPText(!0) + g_strSpeechServer + "/SpeechCache/" + e + ".xml"
      , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    return n.open("HEAD", r, !1), n.send(), 404 == n.status
  }
  return !1
}

function rw_playMessageFromFile(e, t) {
  if (null == e && 0 == e.length) return void $rw_doSelection(-1);
  if (!g_bServerSupport) return void $rw_doSelection(-1);
  try {
    var r = g_controllerFactory.getConnector();
    null != r && (rw_setSpeakingModeFlag(!0), $rw_doSelection(0), r.startSpeechFromFile(e, t, !g_bLocalPronunciationLoaded), rw_startSpeechCallback())
  } catch (n) {
    thLogE(n)
  }
}

function rw_playMessageHighlighting(e) {
  if (null == e && 0 == e.length) return void $rw_doSelection(-1);
  if (!g_bServerSupport) return void $rw_doSelection(-1);
  try {
    var t = g_controllerFactory.getConnector();
    null != t && (rw_setSpeakingModeFlag(!0), $rw_doSelection(0), t.startHighlighting(e))
  } catch (r) {
    thLogE(r)
  }
}

function $rw_event_pause() {
  if (stopTexthelpScreenshotReading(), g_nPauseEventTimeout > 0 && (clearTimeout(g_nPauseEventTimeout), g_nPauseEventTimeout = 0), $rw_isSpeaking()) {
    var e = (new Date)
      .getTime();
    if (e - g_nNavDoubleClickTime < g_nClickRejectTime) return;
    g_nNavDoubleClickTime = e;
    var t = g_controllerFactory.getConnector();
    if (null != t) {
      if (!t.canPause()) return void(g_nPauseEventTimeout = setTimeout("g_nPauseEventTimeout=0;$rw_event_pause();", 100));
      t.isPaused() ? t.resume() || (g_nPauseEventTimeout = setTimeout("g_nPauseEventTimeout=0;$rw_event_pause();", 100)) : t.pause() || (g_nPauseEventTimeout = setTimeout("g_nPauseEventTimeout=0;$rw_event_pause();", 100))
    }
  } else if (g_bSpeakerFlag) {
    var e = (new Date)
      .getTime();
    if (e - g_nNavDoubleClickTime < g_nClickRejectTime) return;
    g_nNavDoubleClickTime = e, g_nPauseEventTimeout = setTimeout("g_nPauseEventTimeout=0;$rw_event_pause();", 100)
  }
}

function $rw_event_funstop() {
  $rw_event_stop()
}

function $rw_event_stop() {
  stopTexthelpScreenshotReading();
  try {
    if (SSDAT.bubbleData.bBubbleMode && SpeechStream.bubbleSpeech.hideStopBubble(), rw_clearQueueOfSpeech(), g_nextTargetForContinuousReading = null, g_finalSentenceTarget = null, g_nTargetQueueTimerId > 0 && (clearTimeout(g_nTargetQueueTimerId), g_nTargetQueueTimerId = 0), g_aTargetQueue.length = 0, g_bHoverStep2Flag) return void setTimeout($rw_event_stop, 100);
    g_hoverTimeoutId1 > 0 && (clearTimeout(g_hoverTimeoutId1), g_hoverTimeoutId1 = 0), g_hoverTimeoutId2 > 0 && (clearTimeout(g_hoverTimeoutId2), g_hoverTimeoutId2 = 0), rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1);
    var e = g_controllerFactory.getConnector();
    null != e && e.stopSpeechAlt(), g_hoverTarget = null
  } catch (t) {
    thLogE(t)
  }
}

function $rw_event_stop_limited() {
  if (g_bServerSupport) try {
    rw_clearQueueOfSpeech(), g_nextTargetForContinuousReading = null, rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1);
    var e = g_controllerFactory.getConnector();
    null != e && e.stopSpeechAlt()
  } catch (t) {
    thLogE(t)
  }
}

function $rw_event_mp3() {
  try {
    var e = null;
    if (null != g_mp3Id) {
      var t = document.getElementById(g_mp3Id);
      null != t && (e = SSDOM.getAllTextFromNode(t))
    } else e = rw_getSelectionNonParsed();
    if (null != e && (e = e.trimTH(), e.length > 0)) {
      if (e.length > g_nMP3Limit) return void alert("Too much text was selected for making an MP3 file, there is a " + g_nMP3Limit / 1024 + "k limit.");
      var r = g_controllerFactory.getConnector();
      if (null != r) {
        var n = '<br>The MP3 file for the text is being generated, <br> this could take some time depending on the amount of text selected.<br><p align="center"><img alt="loading" src="' + SSDAT.paths.strFileLoc + 'rwimgs/request-processing.gif"> </p>';
        rw_setPopupText(POPUP_DISPLAY, n), rw_showDiv(!0, POPUP_DISPLAY), r.getMP3File(e, !g_bLocalPronunciationLoaded)
      }
    }
  } catch (a) {
    thLogE(a)
  }
}

function $rw_mp3reply(txt) {
  try {
    if ("undefined" != typeof eba_mp3_callback) rw_showDiv(!1, POPUP_DISPLAY), eval("" + eba_mp3_callback + "('" + txt + "')");
    else if (txt.length > 0) {
      var strTarget = "Save Target As...";
      g_bIE || (strTarget = g_bChrome ? "Save Link As..." : g_bSafari ? "Download Linked File" : "Save Link As..."), txt = "<br>Right click on the link below and select '" + strTarget + "' to save the mp3 file to your hard drive.<p></p><a type='application/octet-stream' href=\"" + txt + '">Download speech mp3 file.</a><p></p>', rw_setPopupText(POPUP_DISPLAY, txt), rw_showDiv(!0, POPUP_DISPLAY)
    }
  } catch (err) {
    thLogE(err)
  }
}

function setWarning() {
  $rw_lexiSubmitEvent()
}

function $rw_lexiSubmitEvent() {
  g_bInSubmit = !0
}

function rw_hasSelection() {
  if (g_bIEOld) {
    var e = document.selection.createRange();
    if (e.text.length > 0) return !0;
    if (!g_bIgnoreFrames && top.frames.length > 0) {
      var t = 0
        , r = top.frames.length;
      for (t = 0; t < r; t++) try {
        var n = top.frames[t];
        if (e = n.document.selection.createRange(), null != e.text && e.text.length > 0) return !0
      } catch (a) {}
    }
  } else {
    if (null != g_ipadSelectionRange) return !0;
    if (null != window.getSelection() && !window.getSelection()
      .isCollapsed) return !0;
    if (!g_bIgnoreFrames && top.frames.length > 0) {
      var t = 0
        , r = top.frames.length;
      for (t = 0; t < r; t++) try {
        if (null != top.frames[t].getSelection() && !top.frames[t].getSelection()
          .isCollapsed) return !0
      } catch (a) {}
    }
  }
  return !1
}

function rw_getElementHoldingSelection() {
  if (g_bIEOld) {
    var e = document.selection.createRange();
    if (null != e.text && 0 != e.text.length) return e.parentElement();
    if (!g_bIgnoreFrames && top.frames.length > 0) {
      var t = 0
        , r = top.frames.length;
      for (t = 0; t < r; t++) try {
        var n = top.frames[t];
        if (e = n.document.selection.createRange(), null != e.text && e.text.length > 0) return e.parentElement()
      } catch (a) {}
    }
  } else {
    if (null != g_ipadSelectionRange) return g_ipadSelectionRange.startContainer;
    var o = window.getSelection();
    if (!o.isCollapsed && 0 != o.toString()
      .trimTH()
      .length) return o.focusNode;
    if (g_lastInputSelectSFF && g_lastInputSelectSFF.selectionStart != g_lastInputSelectSFF.selectionEnd) return g_lastInputSelectSFF;
    if (!g_bIgnoreFrames && top.frames.length > 0) {
      var t = 0
        , r = top.frames.length;
      for (t = 0; t < r; t++) try {
        var i = top.frames[t].getSelection();
        if (null != i && !i.isCollapsed) return i
      } catch (a) {}
    }
  }
  return null
}

function rw_getSelectionNonParsed() {
  var e = "";
  if (g_bIEOld) {
    var t = document.selection.createRange();
    if ((null == t.text || 0 == t.text.length) && !g_bIgnoreFrames && top.frames.length > 0) {
      var r = 0
        , n = top.frames.length;
      for (r = 0; r < n; r++) try {
        var a = top.frames[r];
        if (t = a.document.selection.createRange(), null != t.text && t.text.length > 0) break
      } catch (o) {}
    }
    e = t.text;
    var i = t.duplicate();
    i.collapse();
    var l = i.parentElement();
    SSDOM.isIgnored(l) && (e = "")
  } else {
    if (null != g_ipadSelectionRange) return g_ipadSelectionRange.toString();
    var s = window.getSelection();
    if (s.isCollapsed || 0 == s.toString()
      .trimTH()
      .length) {
      if (g_lastInputSelectSFF && g_lastInputSelectSFF.selectionStart != g_lastInputSelectSFF.selectionEnd) return g_lastInputSelectSFF.value.substring(g_lastInputSelectSFF.selectionStart, g_lastInputSelectSFF.selectionEnd);
      if (!g_bIgnoreFrames && top.frames.length > 0) {
        var r = 0
          , n = top.frames.length;
        for (r = 0; r < n; r++) try {
          var c = top.frames[r].getSelection();
          if (null != c && !c.isCollapsed) {
            s = c;
            break
          }
        } catch (o) {}
      }
    }
    if (s.anchorNode && SSDOM.isIgnored(s.anchorNode)) return "";
    if (s.focusNode && s.focusNode.id && "flashcontent" == s.focusNode.id) return "";
    e = s.isCollapsed ? "" : s.toString()
  }
  return e
}

function rw_setButtonsForSpeechOff() {
  rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1)
}

function $rw_doSelection(e) {
  if (e < 0 ? (e == -2 && $rw_isSpeaking() ? $rw_speechCompleteCallback("Stopped") : e == -3 && $rw_speechErrorCallback(), g_nTimeoutForSpeakingState = setTimeout(rw_setButtonsForSpeechOff, 200), rw_setSpeakingFlag(!1), SSDAT.bubbleData.bBubbleMode && SpeechStream.bubbleSpeech.hideStopBubble()) : rw_setSpeakingFlag(!0), g_lastTarget && g_lastTarget.isRange() && e != g_nLastNodePosition)
    if (e == -1 || e == -2 || e == -3) {
      if (g_nLastNodePosition > -1 && null != g_lastTarget.wordNodes) try {
        var t = g_lastTarget.wordNodes
          , r = t.length;
        if (g_nLastNodePosition < r) {
          var n = t[g_nLastNodePosition].range
            , a = SSDOM.getCaretPairFromDomPosition(n.body, n.startRef.path, n.startRef.offset, n.endRef.path, n.endRef.offset)
            , o = a.leftCaret
            , i = a.rightCaret;
          null != o && null != i ? rw_removeSpeechHighlight(SSDOM.getListOfHighlightableNodes(o, i), !0) : thLog("Cannot determine valid range to remove speech highlight from. " + o + " " + i)
        }
      } catch (l) {
        thLog("$rw_doSelection:clear last speech:" + l.toString())
      }
      g_nLastNodePosition = -1;
      try {
        g_lastTarget.unhighlightRange()
      } catch (l) {
        thLog("$rw_doSelection:unhighlightRange:" + l.message)
      }
    } else if (null != g_lastTarget.wordNodes) {
    if (g_nLastNodePosition == e) return;
    var t = g_lastTarget.wordNodes
      , r = t.length;
    try {
      if (g_nLastNodePosition > -1 && g_nLastNodePosition < r) {
        var n = t[g_nLastNodePosition].range
          , a = SSDOM.getCaretPairFromDomPosition(n.body, n.startRef.path, n.startRef.offset, n.endRef.path, n.endRef.offset)
          , o = a.leftCaret
          , i = a.rightCaret;
        null != o && null != i ? rw_removeSpeechHighlight(SSDOM.getListOfHighlightableNodes(o, i), !0) : thLog("Cannot determine valid range to remove speech highlight from. " + o + " " + i)
      }
    } catch (l) {
      thLogE(l)
    }
    if (e < 0 || e >= r) return;
    g_nLastNodePosition = e;
    var n = t[e].range;
    try {
      var a = SSDOM.getCaretPairFromDomPosition(n.body, n.startRef.path, n.startRef.offset, n.endRef.path, n.endRef.offset)
        , o = a.leftCaret
        , i = a.rightCaret;
      if (null != o && null != i) {
        try {
          var s = !1
            , c = SSDOM.getComputedStyle(o.node);
          if (null == c || "none" != c.display && "hidden" != c.visibility) {
            for (var g = o.node, u = g.ownerDocument.body; g != u;)
              if (g = g.parentNode, "none" == SSDOM.getComputedStyle(g)
                .display) {
                s = !0;
                break
              }
          } else s = !0;
          if (s) {
            var _ = function () {
              $rw_stopSpeech(), $rw_setCurrentTarget(null)
            };
            return void setTimeout(_, 1)
          }
        } catch (d) {}
        var h = rw_setSpeechRangeImpl(o.node, o.offset, i.node, i.offset, "csp");
        rw_scrollToObject(null != h && null != h.node ? h.node : o.node)
      } else thLog("Cannot determine valid range to add speech highlight from. " + o + " " + i)
    } catch (l) {
      thLog("error with highlight speech range in rw_doSelection:" + l.message)
    }
  }
  if (e == -1 || e == -2 || e == -3) {
    g_nLastNodePosition = -1, g_lastTarget = null;
    var p = null;
    for (g_astrSpeechInstructionQueue.length > 0 && (p = new Array); g_astrSpeechInstructionQueue.length > 0 && !("string" == typeof g_astrSpeechInstructionQueue[0] && g_astrSpeechInstructionQueue[0].indexOf("$rw_readNextTarget") > -1);) p.push(g_astrSpeechInstructionQueue.shift());
    if (e == -1) g_astrSpeechInstructionQueue.length > 0 && p.push(g_astrSpeechInstructionQueue.shift());
    else if (e == -3) {
      var S = g_controllerFactory.getConnector()
        , f = S.getLastError()
        , m = "An error occurred with speech.  " + f;
      SpeechStream.actionOnError.action == SpeechStream.EnumActionOnError.SKIP ? (thLog(m), g_astrSpeechInstructionQueue.length > 0 && p.push(g_astrSpeechInstructionQueue.shift())) : rw_alert(m);
    }
    null != p && p.length > 0 && rw_doInstructions(p)
  }
}

function $displayMe(e) {
  rw_alert(e)
}

function rw_newWindow(e, t, r, n, a, o, i, l, s, c, g) {
  var u = (screen.width - r) / 2
    , _ = (screen.height - n) / 2
    , d = "height=" + n + ",width=" + r + ",top=" + _ + ",left=" + u + ",scrollbars=" + a + ",resizable=" + o + ",menubar=" + i + ",toolbar=" + l + ",location=" + s + ",statusbar=" + c + ",fullscreen=" + g
    , h = window.open(e, t, d);
  parseInt(navigator.appVersion, 10) >= 4 && h.window.focus()
}

function rw_getCookie(e) {
  var t = document.cookie.indexOf(e + "=")
    , r = t + e.length + 1;
  if (!t && e != document.cookie.substring(0, e.length)) return null;
  if (t == -1) return null;
  var n = document.cookie.indexOf(";", r);
  return n == -1 && (n = document.cookie.length), unescape(document.cookie.substring(r, n))
}

function rw_setCookie(e, t, r, n, a, o) {
  var i = new Date;
  i.setTime(i.getTime()), r && (r = 1e3 * r * 60 * 60 * 24);
  var l = new Date(i.getTime() + r);
  document.cookie = e + "=" + escape(t) + (r ? ";expires=" + l.toGMTString() : "") + (n ? ";path=" + n : "") + (a ? ";domain=" + a : "") + (o ? ";secure" : "")
}

function rw_deleteCookie(e, t, r) {
  rw_getCookie(e) && (document.cookie = e + "=" + (t ? ";path=" + t : "") + (r ? ";domain=" + r : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT")
}

function rw_doCollect() {
  if (hasStudySkills()) {
    var e = studySkillsCollate();
    rw_setPopupText(POPUP_COLLECT, e), rw_showDiv(!0, POPUP_COLLECT);
    var t = rw_getDomObject("rwcollatewrapper")
      , r = document.getElementById("rwCollect");
    if (null != r)
      if (parseInt(t.scrollHeight, 10) >= 380) {
        var n = rw_getDomObject("rwTextCollect");
        n.style.height = "360px"
      } else {
        var n = rw_getDomObject("rwTextCollect");
        n.style.height = t.scrollHeight + 24
      }
  }
}

function $rw_event_axendolink() {
  document.location = "http://www.browsealoud.info"
}

function dis(e) {
  rw_alert(e.tagName + "|" + e.nodeValue + "|" + SSDOM.getPositionInDom(e))
}

function rw_doCallBack(p_strName, p_param) {
  if (null != p_strName) try {
    var bMatch = !1
      , nLen = p_strName.length;
    if (!(nLen > 0)) return;
    if (")" != p_strName.charAt(nLen - 1) && ";" != p_strName.substr(nLen - 1) || (bMatch = !0), bMatch) eval(p_strName);
    else try {
      "undefined" != typeof p_param && null != p_param ? eval(p_strName + "(" + p_param + ");") : eval(p_strName + "();")
    } catch (innerErr) {
      eval(p_strName)
    }
  } catch (err) {
    thLogE(err)
  }
}

function rw_runClientFunction(e) {
  try {
    new Function(e)()
  } catch (t) {
    thLogE(t.message)
  }
}

function rw_speechRedirectCallback(e) {
  return !eba_speech_redirect_callback || "function" != typeof eba_speech_redirect_callback || eba_speech_redirect_callback(e)
}

function rw_startSpeechCallback() {
  "string" == typeof eba_speech_started_callback && rw_doCallBack(eba_speech_started_callback.trimTH())
}

function $rw_renderingSpeechCallback() {
  "string" == typeof eba_rendering_speech_callback && rw_doCallBack(eba_rendering_speech_callback.trimTH())
}

function $rw_speechCompleteCallback(e) {
  try {
    "undefined" != typeof e && null != e || (e = "Complete"), "string" == typeof eba_speech_complete_callback && rw_doCallBack(eba_speech_complete_callback.trimTH(), "'" + e + "'"), g_bApip && "Complete" == e && SSAPIP.apipHandler.handleSpeechComplete()
  } catch (t) {}
}

function $rw_speechErrorCallback() {
  try {
    "string" == typeof eba_speech_complete_callback && rw_doCallBack(eba_speech_complete_callback.trimTH(), "'Error'")
  } catch (e) {}
}

function rw_pageCompleteCallBack() {
  try {
    "string" == typeof eba_page_complete_callback && rw_doCallBack(eba_page_complete_callback.trimTH())
  } catch (e) {}
}

function $rw_event_calculator() {
  try {
    rw_setPopupText(POPUP_CALCULATOR, ""), rw_showDiv(!0, POPUP_CALCULATOR), rw_calClearMem(), rw_calAddDigit("0")
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_recorder() {
  try {
    rw_setPopupText(POPUP_SPEECH_RECORDER, ""), rw_showDiv(!0, POPUP_SPEECH_RECORDER);
    var e = document.getElementById("rw_micDisplay");
    e.style.visibility = "visible";
    var t = document.getElementById("rw_micRecordingOn");
    t.style.visibility = "visible"
  } catch (r) {
    thLogE(r)
  }
}

function $rw_event_generate_cache() {
  try {
    if ("undefined" == typeof $rwj) return void setTimeout($rw_event_generate_cache, 1e3);
    $rwj.blockUI({
        message: '<div id="rwDragMeGenerateCache" class="rwToolbarCaptionGenerateCache" ignore> Caching page please wait...</div><br><span id="pb1" ignore>0%</span>'
      }), $rwj("#pb1")
      .progressBar(0), rw_autogenSpeechFiles()
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_check_cache() {
  try {
    if ("undefined" == typeof $rwj) return void setTimeout($rw_event_check_cache, 1e3);
    $rwj.blockUI({
        message: '<div id="rwDragMeGenerateCache" class="rwToolbarCaptionGenerateCache" ignore> Reading Cache please wait...</div><br><span id="pb1" ignore>0%</span>'
      }), $rwj("#pb1")
      .progressBar(0), rw_checkAutogenCachedFiles()
  } catch (e) {
    $rwj.unblockUI(), thLogE(e)
  }
}

function $rw_event_screenmask(e, t) {
  var r = SpeechStream.EnumIconParameter
    , n = 1 == g_icons[t][r.ICON_TOGGLE_STATE];
  g_icons[t][r.ICON_TOGGLE_STATE] = !n, rw_toggleScreenMask(e ? e : window.event)
}

function rw_toggleScreenMask(e) {
  return
}

function rw_screenMaskArrowHandler(e, t) {
  return 1 === event.touches.length && (null !== g_lastTapTarget && e.target !== g_lastTapTarget || !(null === g_maskLastTap || new Date - g_maskLastTap > 500) || (g_lastTapTarget = e.target, g_maskLastTap = new Date, rw_repositionScreenMaskByArrow(t ? g_nMaskSlideDistance * -1 : g_nMaskSlideDistance)), e.preventDefault()), !1
}

function rw_screenMaskResize() {
  var e = $jq("#rwMaskTop")
    , t = $jq("#rwMaskBottom")
    , r = e.height()
    , n = (t.height(), window.innerWidth ? window.innerWidth : $jq(window)
      .width())
    , a = window.innerHeight ? window.innerHeight : $jq(window)
    .height();
  n === g_currentWidth && a === g_currentHeight || (g_currentWidth = n, g_currentHeight = a, t.css({
    height: a - r - 2 * eba_screen_mask_letterbox_depth + "px"
  }))
}

function rw_repositionScreenMaskByArrow(e) {
  var t = $jq("#rwMaskTop")
    , r = $jq("#rwMaskBottom")
    , n = t.height()
    , a = r.height();
  window.innerWidth ? window.innerWidth : $jq(window)
    .width(), window.innerHeight ? window.innerHeight : $jq(window)
    .height();
  t.height() < g_nMaskSlideDistance && e < 0 && (e = t.height() * -1), r.height() < g_nMaskSlideDistance && e > 0 && (e = r.height()), t.animate({
    height: n + e + "px"
  }, 250), r.animate({
    height: a - e + "px"
  }, 250)
}

function rw_repositionScreenMask(e) {
  var t = eba_screen_mask_letterbox_depth
    , r = $jq("#rwMaskTop")
    , n = $jq("#rwMaskBottom")
    , a = (window.innerWidth ? window.innerWidth : $jq(window)
      .width(), window.innerHeight ? window.innerHeight : $jq(window)
      .height())
    , o = (e.pageX, e.pageY - $jq(window)
      .scrollTop())
    , i = o - t
    , l = a - o - t;
  r.css({
    height: i + "px"
  }), n.css({
    height: l + "px"
  })
}

function rw_trimText(e) {
  if (null == e) return "";
  e = e.trimTH();
  var t = ""
    , r = 0
    , n = e.length
    , a = -1
    , o = -1;
  for (r = 0; r < n; r++) {
    var i = e.charCodeAt(r);
    if (i > 64 && i < 91 || i > 96 && i < 123) a == -1 && (a = r);
    else if (a > -1) {
      if (39 != i) {
        o = r;
        break
      }
      if (!(r < n - 1)) {
        o = r;
        break
      }
      if (nValNext = e.charCodeAt(r + 1), !(nValNext > 64 && nValNext < 91 || nValNext > 96 && nValNext < 123)) {
        o = r;
        break
      }++r
    }
  }
  return a > -1 && (t = o > -1 ? e.substring(a, o) : e.substring(a)), t
}

function rw_trimTextExt(e) {
  if (null == e) return "";
  e = e.trimTH(), e = e.replace(/[\s\xA0]+/g, " ");
  var t = ""
    , r = 0
    , n = e.length
    , a = -1
    , o = -1;
  for (r = 0; r < n; r++) {
    var i = e.charCodeAt(r);
    if (i > 64 && i < 91 || i > 96 && i < 123 || i > 127) a == -1 && (a = r);
    else if (a > -1) {
      if (39 != i) {
        o = r;
        break
      }
      if (!(r < n - 1)) {
        o = r;
        break
      }
      if (nValNext = e.charCodeAt(r + 1), !(nValNext > 64 && nValNext < 91 || nValNext > 96 && nValNext < 123 || i > 127)) {
        o = r;
        break
      }++r
    }
  }
  return a > -1 && (t = o > -1 ? e.substring(a, o) : e.substring(a)), t
}

function rw_trimToThirdWord(e) {
  if (null == e) return "";
  var t = e.trimTH();
  if (0 == t.length) return "";
  t = t.replace(/[\s\xA0]+/g, " ");
  for (var r = 0, n = t.indexOf(" "); n > -1;) {
    if (++r, 3 == r) {
      t = t.substr(0, n);
      break
    }
    n = t.indexOf(" ", n + 1)
  }
  return t
}

function rw_trimToTextFromEnd(e) {
  if (e && e.length > 0) {
    var t, r = -1;
    for (t = e.length - 1; t >= 0 && !rw_isLetterExt(e.charCodeAt(t)); t--) r = t;
    r > -1 && (e = e.substr(0, r))
  }
  return e
}

function rw_trimToTextFromStart(e) {
  if (e && e.length > 0) {
    var t, r = -1;
    for (t = 0; t < e.length && !rw_isLetterExt(e.charCodeAt(t)); t++) r = t;
    r > -1 && (e = e.substr(r))
  }
  return e
}

function rw_isLetterExt(e) {
  return e > 64 && e < 91 || e > 96 && e < 123 || e > 127 && 160 != e
}

function rw_isLetter(e) {
  return e > 64 && e < 91 || e > 96 && e < 123
}

function rw_isNumber(e) {
  return e > 47 && e < 58
}

function rw_isTextChar(e) {
  return e > 47 && e < 58 || e > 63 && e < 91 || e > 94 && e < 123
}

function rw_isTextCharExt(e) {
  return e > 127 && 160 != e || rw_isTextChar(e)
}

function rw_hasText(e) {
  if (null == e) return !1;
  for (var t = 0; t < e.length; t++) {
    var r = e.charCodeAt(t);
    if (39 == r || r > 47 && r < 58 || r > 64 && r < 91 || 96 == r || r > 96 && r < 123) return !0
  }
  return !1
}

function rw_makeSafeForUrl(e) {
  if (null == e || 0 == e.length) return e;
  for (var t = e.length, r = 0; r < t; r++) {
    var n = e.charCodeAt(r);
    39 == n || 44 == n || 46 == n || n > 47 && n < 58 || n > 63 && n < 91 || n > 94 && n < 123 || (e = e.replace(e.charAt(r), " "))
  }
  return e.trimTH()
}

function rw_getTextFromRange(e) {
  var t = "";
  return t = e.text ? e.text : e.toString()
}

function rw_collapseSelection() {
  var e = SSDOM.getSelectionObject();
  null != e && (e.collapseToStart ? e.collapseToStart() : e.execCommand && e.execCommand("UnSelect", !1, null))
}

function rw_selectNode(e) {
  if (null != e)
    if (g_bIEOld) {
      var t = SSDOM.getRangeObject(e.ownerDocument.body);
      t.moveToElementText(e), t.select()
    } else {
      var r = SSDOM.getNextNodeIgnoreChildren(e, !1, null);
      if (null != r) {
        var t = new THDomRange(e, 0, r, 0);
        rw_selectSection(t)
      }
    }
}

function rw_selectSection(e) {
  if (g_bIEOld) e.select();
  else {
    var t = e.startCaret
      , r = e.endCaret
      , n = SSDOM.getWindow(t.node);
    if (g_bSafari) n.getSelection()
      .setBaseAndExtent(t.node, t.offset, r.node, r.offset);
    else {
      var a = n.getSelection();
      if (a.collapse(t.node, t.offset), a.extend) a.extend(r.node, r.offset);
      else {
        var o = n.document.createRange();
        o.setStart(t.node, t.offset), o.setEnd(r.node, r.offset), a.addRange(o)
      }
    }
  }
}

function rw_isWhiteSpace(e) {
  return e.search(/[\s\xa0]/) > -1
}

function debugObject(e) {
  var t = e + "  ";
  null != e.tagName && (t += e.tagName + " "), null != e.className && (t += e.className + " ");
  for (prop in e) t += prop + "   | ";
  alert(t)
}

function debugObjectTxt(e) {
  var t = e + "  ";
  for (prop in e) t += prop + "   | ";
  return t
}

function thLog(e) {
  if ("undefined" != typeof window.console && "undefinded" != typeof window.console.log) try {
    window.console.log(e)
  } catch (t) {}
  if ("function" == typeof $rw_dump) try {
    $rw_dump(e + "\n")
  } catch (t) {}
}

function thLogE(e) {
  null != e && (e.name && e.message ? thLog("Error: " + e.name + ". : " + e.message) : e.message && thLog("Error: " + e.message))
}

function $rw_logMe(e) {
  thLog(e)
}

function $rw_alertMe(e) {
  alert(e)
}

function $rw_inputFieldFilter(e) {
  if (null == e || 0 == e.length) return e;
  var t, r = e.length;
  for (t = r - 1; t >= 0; t--) {
    var n = e.charCodeAt(t);
    (n < 44 && 39 != n || 47 == n || n > 57 && n < 65 || n > 90 && n < 97 && 95 != n || n > 122 && n < 128) && (e = e.substring(0, t) + e.substr(t + 1))
  }
  return e
}

function $rw_handleFieldInput(e) {
  var t = e.value
    , r = $rw_inputFieldFilter(t);
  t != r && (e.value = r)
}

function $rw_handleFieldKeyDownInput(e) {
  if (!e.ctrlKey) {
    var t = e.keyCode;
    if (t > 32 && t < 44 && 39 != t || 47 == t || t > 57 && t < 65 || t > 90 && t < 97 && 95 != t || t > 122 && t < 128) return !1
  }
  return !0
}

function rw_isTextOnlyIncludingHighAscii(e) {
  return e > 64 && e < 91 || e > 96 && e < 123 || 39 == e || e > 128 && 160 != e
}

function rw_wordIsSpeakable(e) {
  var t, r = e.length
    , n = 0;
  for (n = 0; n < r; n++) {
    if (t = e.charCodeAt(n), t > 63 && t < 91 || t > 96 && t < 123 || t > 127 && 160 != t) return !0;
    if (t > 46 && t < 58) return !0;
    if (t > 35 && t < 39 || 43 == t || 61 == t) return !0;
    if ((42 == t || 45 == t || 92 == t || t > 93 && t < 97) && "VW Kate" != g_strVoice) return !0
  }
  return !(!g_bMathsSymbols || !rw_mathsSymbolCheck(e))
}

function rw_caretRangeIsSpeakable(e) {
  try {
    if (null == e || null == e.leftCaret || null == e.rightCaret) return !1;
    for (var t = e.leftCaret, r = e.rightCaret, n = t.node, a = r.node, o = !0, i = !1, l = n; null != l;) {
      if (i = SSDOM.isSpecialCase(l), SpeechStream.pauseHandler.isPauseElement(l) && (i = !0), i || 3 == l.nodeType) {
        var s = SSDOM.getTextFromNode(l);
        if (null != s && "" != s && (i || (l == a && r.offset > -1 && (s = s.substring(0, r.offset)), l == n && t.offset > 0 && (s = s.substring(t.offset))), rw_wordIsSpeakable(s))) return !0
      }
      l = i ? SSDOM.getNextNodeIgnoreChildren(l, !1, a) : o ? SSDOM.getNextNodeAllowMoveToChild(l, !0, a) : SSDOM.getNextNode(l, !1, a), o = !1
    }
  } catch (c) {
    thLogE(c)
  }
  return !1
}

function d2h(e) {
  return e.toString(16)
}

function h2d(e) {
  return parseInt(e, 16)
}

function rw_alert(e) {
  g_bAllowAlertsFlag ? alert(e) : thLog(e)
}

function $rw_enable_alerts(e) {
  "boolean" == typeof e && (g_bAllowAlertsFlag = e)
}

function $rw_uriEncode(e) {
  return encodeURIComponent(e)
}

function rw_getHTTPText(e) {
  return e ? g_bSSL || g_bSSLSpeech ? "https://" : "http://" : g_bSSL || g_bSSLToolbar ? "https://" : "http://"
}

function rw_loadIcon(e, t, r, n, a) {
  var o = SpeechStream.EnumIconParameter
    , i = g_nIconCount;
  return g_icons[g_nIconCount] = new Array(5), g_icons[g_nIconCount][o.ICON_NAME] = e, g_icons[g_nIconCount][o.ICON_ALT_TEXT] = t, g_icons[g_nIconCount][o.ICON_OFFSET] = r, g_icons[g_nIconCount][o.ICON_IS_TOGGLE] = n, g_icons[g_nIconCount][o.ICON_TOGGLE_STATE] = !1, g_icons[g_nIconCount][o.ICON_TRANS_CODE] = a, g_nIconCount++, i
}

function rw_getIconPosition(e) {
  var t;
  for (t = 0; t < g_icons.length; t++)
    if (g_icons[t][SpeechStream.EnumIconParameter.ICON_NAME] == e) return t;
  return -1
}

function rw_addIcon(i) {
  var enumIcon = SpeechStream.EnumIconParameter
    , strName = g_icons[i][enumIcon.ICON_NAME]
    , strAlt = g_icons[i][enumIcon.ICON_ALT_TEXT];
  g_bChromeExtension && "Click To Speak Mode" == strAlt && !g_bOnClick && (strAlt = "Hover Speech");
  var nLeftOffset = g_icons[i][enumIcon.ICON_OFFSET]
    , bToggle = g_icons[i][enumIcon.ICON_IS_TOGGLE]
    , strTransId = g_icons[i][enumIcon.ICON_TRANS_CODE]
    , bToggleOnFromStart = !1;
  bToggle && "hover" == strName && "boolean" == typeof eba_initial_speech_on && eba_initial_speech_on && (g_icons[i][enumIcon.ICON_TOGGLE_STATE] = !0, bToggleOnFromStart = !0);
  var nWidth = 33;
  strName.equalsTH("submit") && (nWidth = 53), g_nBarWidth += nWidth;
  var spanObj = rw_addIconHtml(strName, "flat", strAlt, nWidth, nLeftOffset, !0, bToggleOnFromStart, strTransId);
  return g_bIpad && (g_nIOS < 6 || !g_bIpadFrames) && addEventChecked(spanObj, "touchstart", function () {
    $rw_getTouchSelection()
  }), addEventChecked(spanObj, "mouseover", function () {
    g_bTouchScreen || g_icons[i][enumIcon.ICON_TOGGLE_STATE] || rw_mouseOverIcon(strName, i, bToggle)
  }), addEventChecked(spanObj, "mouseout", function () {
    g_icons[i][enumIcon.ICON_TOGGLE_STATE] || rw_mouseOffIcon(strName, i, bToggle)
  }), addEventChecked(spanObj, "mousedown", function () {
    g_bTouchScreen || g_icons[i][enumIcon.ICON_TOGGLE_STATE] || rw_press(strName, i, bToggle), g_strLastClicked = strName
  }), addEventChecked(spanObj, "mouseup", function (e) {
    if (g_strLastClicked.equalsTH(strName)) {
      if ($rw_blockClick(strName)) return !0;
      SpeechStream.ipadUtils.tinyMceBlurFix();
      var str;
      str = "$rw_event_" + strName + "(e, " + i + ");", eval(str)
    }
    g_bTouchScreen || g_icons[i][enumIcon.ICON_TOGGLE_STATE] || rw_mouseOverIcon(strName, i, bToggle)
  }), spanObj
}

function rw_addIconHtml(e, t, r, n, a, o, i, l) {
  var s = n * rw_getIconPosition(e)
    , c = 0;
  i && (c = 66);
  var g = {};
  if (g.ignore = "1", g.name = e + t, g.width = "" + n, g.height = "32", g.title = r, g["data-speechstream-toolbar"] = l, g.unselectable = "on", o ? g.style = "left:" + s + "px; background-position: -" + a + "px -" + c + "px;" : g.style = "left:" + s + "px; background-position: -" + a + "px -" + c + "px;", g_bChromeExtension) var u = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarIcon", g, e, null, !1);
  else var u = SSDOM.createObjectFromMap("span", g, e, null, !1);
  return g_bIE ? u.onselectstart = function () {
    return !1
  } : u.onmousedown = function () {
    return !1
  }, u
}

function rw_addDropDownList() {
  g_nBarWidth += 130, nLeftPosition = 33 * g_nIconCount;
  var e = {};
  e.ignore = "1", g_bIE ? e.style = "width:95px;position:relative;left:" + nLeftPosition + "px;top:6px;border: 1px solid;color:#000000;backgroundColor:#f1efe5" : e.style = "width:95px;position:relative;left:" + nLeftPosition + "px;top:6px;border: 1px solid;color:#000000;background-color:#f1efe5";
  var t = SSDOM.createObjectFromMap("select", e, null, null, !0);
  addEvent(t, "change", function () {
    $rw_setSpeedValue(parseInt(t.value, 10))
  });
  var r;
  e = {}, e.ignore = "1", e.value = "" + SLOW_SPEED, g_nSpeedValue != -3 && g_nSpeedValue != SLOW_SPEED || (e.selected = "1"), r = SSDOM.createObjectFromMap("option", e, null, null, !0), r.innerHTML = "Slow";
  var n;
  e = {}, e.ignore = "1", e.value = "" + MEDIUM_SPEED, g_nSpeedValue != -2 && g_nSpeedValue != MEDIUM_SPEED || (e.selected = "1"), n = SSDOM.createObjectFromMap("option", e, null, null, !0), n.innerHTML = "Medium";
  var a;
  return e = {}, e.ignore = "1", e.value = "" + FAST_SPEED, g_nSpeedValue != -1 && g_nSpeedValue != FAST_SPEED || (e.selected = "1"), a = SSDOM.createObjectFromMap("option", e, null, null, !0), a.innerHTML = "Fast", t.appendChild(r), t.appendChild(n), t.appendChild(a), t
}

function rw_showSpeakerOnIcon(e, t) {
  var r = null;
  if (null != t) {
    if (r = document.images[e + t], null != r) {
      var n = r.style;
      n.visibility = "visible", n.display = "inline", n.width = "26px"
    }
    if ("off" != t) {
      if (r = document.images[e + "off"], null != r) {
        var n = r.style;
        n.visibility = "hidden", n.display = "none", n.width = "0px"
      }
    } else if ("on" != t && (r = document.images[e + "on"], null != r)) {
      var n = r.style;
      n.visibility = "hidden", n.display = "none", n.width = "0px"
    }
  }
}

function rw_showAnIcon(e, t, r, n) {
  if (ICONS_TO_DISABLE_LICENSE.indexOf(e) > -1) return !0;
  if (null != t) {
    var a = document.getElementById(e);
    "submit" == e ? a.width = "53px" : a.width = "33px"
  }
  "flat" == t && (SSDOM.setStyle(a, "backgroundPosition: -" + r + "px 0px;"), SSDOM.setStyle(a, "backgroundColor:;")), "hover" == t && (SSDOM.setStyle(a, "backgroundPosition: -" + r + "px -33px;"), SSDOM.setStyle(a, "backgroundColor:;")), "toggle" == t && SSDOM.setStyle(a, "backgroundColor:#C4BDBD;"), "mask" == t && (SSDOM.setStyle(a, "backgroundPosition: -" + r + "px -99px;"), SSDOM.setStyle(a, "backgroundColor:;")), n && "mask" == t && SSDOM.setStyle(a, "backgroundPosition: -" + r + "px -99px;")
}

function rw_resetIcon(e) {
  if (document.getElementById(e)) {
    var t = g_icons[rw_getIconPosition(e)];
    t[SpeechStream.EnumIconParameter.ICON_TOGGLE_STATE] = !1, rw_showAnIcon(e, "flat", t[SpeechStream.EnumIconParameter.ICON_OFFSET], !1)
  }
}

function $rw_barInit() {
  if (!rw_checkIfAllowed()) return !1;
  if (("string" == typeof eba_custId && "200" == eba_custId || "string" == typeof eba_cust_id && "200" == eba_cust_id) && rw_initScholastic(), rw_processParameters(), g_bLimitIPad = g_bTouchScreen && !(strAgent.indexOf("android") > -1) && (g_nIcons & clicktospeak_icon) != clicktospeak_icon && (g_nIcons & sticky_icon) != sticky_icon && (g_nNoDisplayIcons & clicktospeak_icon) != clicktospeak_icon && (g_nNoDisplayIcons & sticky_icon) != sticky_icon, SSDAT.pageData.placeholder = rw_getPlaceholder(), g_nCustId = parseInt(g_strCustId, 10), 300 == g_nCustId && rw_initCast(), g_nCustId >= 500 && g_nCustId < 600 && (g_bMcGrawHill = !0), g_nCustId >= 810 && g_nCustId < 820 && (g_bFLVS = !0), g_nCustId >= 1220 && g_nCustId < 1229 && (g_bMP = !0), g_bIE && !g_bProquest) {
    var e = rw_checkTagging();
    if (!e && (g_bInvalidHtml = !0, !g_bSpeechCacheGenerateFlag)) return rw_alert("The embedded speech toolbar cannot be added due to invalid html tag markup in this page .\nTry using FireFox or Safari to view this page or contact the page author to notify them of this error."), !1
  }
  SpeechStream.calculatePaths.initPaths();
  var t = SSDAT.paths.strFileLoc;
  try {
    if ("undefined" != typeof SpeechStream.swaConfig && null != SpeechStream.swaConfig && "function" == typeof SpeechStream.swaConfig.getBlockedToolbar) {
      var r = SpeechStream.swaConfig.getBlockedToolbar()
        , n = g_nIcons & r;
      g_nIcons -= n
    }
  } catch (a) {}
  if (0 == g_nIcons && (g_bUseBar = !1), g_bUseBar && rw_addMainCSS(), rw_createMainBar(), rw_createWebToSpeech(), rw_addEvents(), (g_nIcons & calculator_icon) == calculator_icon) {
    var o = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "texthelpCalc.js"]);
    SSDAT.pageData.placeholder.appendChild(o)
  }
  if ((g_nIcons & record_icon) == record_icon && $rw_barRecInit(), (g_nIcons & generatecache_icon) == generatecache_icon && $rw_barCacheInit(), g_bSWA) {
    SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + t + 'rwLanguageSWA.css" type="text/css" rel="stylesheet" />', !1);
    var i = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "SSLS.js"]);
    SSDAT.pageData.placeholder.appendChild(i);
    var l = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "texthelpSwa.js"]);
    SSDAT.pageData.placeholder.appendChild(l)
  }
  if ((g_nIcons & dictionary_icon) == dictionary_icon || (g_nIcons & factfinder_icon) == factfinder_icon || (g_nIcons & translation_icon) == translation_icon || (g_nIcons & mp3_icon) == mp3_icon) {
    var s = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "texthelpSearch.js"]);
    SSDAT.pageData.placeholder.appendChild(s)
  }
  if ((g_nIcons & highlightcyan_icon) == highlightcyan_icon || (g_nIcons & highlightgreen_icon) == highlightgreen_icon || (g_nIcons & highlightmagenta_icon) == highlightmagenta_icon || (g_nIcons & highlightyellow_icon) == highlightyellow_icon || (g_nIcons & collect_icon) == collect_icon || g_bPersistAnnotations || (g_nIcons & vocabulary_icon) == vocabulary_icon || (g_nIcons & strike_icon) == strike_icon) {
    var c = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "texthelpSS.js"]);
    SSDAT.pageData.placeholder.appendChild(c)
  }
  if ((g_nIcons & sticky_icon) == sticky_icon || g_bPersistAnnotations) {
    var g = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "texthelpSticky.js"]);
    SSDAT.pageData.placeholder.appendChild(g)
  }
  if ((g_nIcons & pronCreate_icon) == pronCreate_icon || (g_nIcons & pronEdit_icon) == pronEdit_icon) {
    var u = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "texthelpPron.js"]);
    SSDAT.pageData.placeholder.appendChild(u)
  }
  if ((g_nIcons & generatecache_icon) == generatecache_icon || (g_nIcons & checkcache_icon) == checkcache_icon) {
    var _ = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "jquerycombined.js"]);
    SSDAT.pageData.placeholder.appendChild(_)
  }
  if ((g_nIcons & screenmask_icon) == screenmask_icon)
    if (rw_jQVersionOK()) $jq = jQuery;
    else {
      var _ = SSDOM.createObject("script", ["type", "text/javascript", "src", "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"]);
      SSDAT.pageData.placeholder.appendChild(_), rw_waitForJQuery()
    }
  if (!g_bIE)
    for (var d = document.getElementsByTagName("input"), h = 0; h < d.length; h++) {
      var p = d.item(h)
        , S = p.getAttribute("type");
      null != S && "text" == S && addEventChecked(p, "mouseup", rw_inputHandlerSFF)
    }
  if (g_bTinyMce && g_bIpad) {
    var f = null;
    if ("string" == typeof eba_tinymce_id && (f = document.getElementById(eba_tinymce_id)), f) {
      try {
        for (var m = document.body, b = m.firstChild; null != b;) rw_containsChildWithId(b, g_strTinymceId) ? b = SSDOM.getNextNodeIgnoreChildren(b, !1, m) : (1 == b.nodeType && addEventChecked(b, "touchstart", SpeechStream.tinymceipadfocusbugworkaround), b = SSDOM.getNextNode(b, !1, m))
      } catch (a) {
        thLogE(a.message)
      }
      var T = document.createElement("input");
      T.setAttribute("type", "text"), T.setAttribute("style", "opacity:0;color:#ffffff;padding:0px;margin:0px;border-top-color:#FFFFFF;border-right-color:#FFFFFF;border-bottom-color:#FFFFFF;border-left-color:#FFFFFF;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;height:1px;width:1px"), T.setAttribute("id", SpeechStream.tinymceipadfix);
      var w = document.getElementById("rwDrag");
      null != w ? w.appendChild(T) : f.parentNode.insertBefore(T, f), rw_setUpIframeForTinyMceOnIpadAndGetRef(!1)
    }
  }
  if (g_bIpad) {
    var w = document.getElementById("rwDrag");
    null != w && (addEventChecked(w, "dragstart", rw_dragEventIpad), addEventChecked(w, "touchend", rw_mouseupEventIpad), addEventChecked(w, "touchmove", rw_mousemoveEventIpad), addEventChecked(w, "touchstart", rw_mousedownEventIpad))
  }
  if (SSDAT.bubbleData.bBubbleMode && !g_bProquest) {
    var v = SSDOM.createObject("script", ["type", "text/javascript", "src", t + "texthelpBubble.js"]);
    SSDAT.pageData.placeholder.appendChild(v)
  }
  "boolean" == typeof eba_initial_speech_on && eba_initial_speech_on && ($g_bMouseSpeech = !0, rw_setSpeakingModeFlag(!0), g_controllerFactory.enableTouchEvents(eba_initial_speech_on));
  var C = document.getElementById(eba_tinymce_id);
  if (C) {
    var y = C.getAttribute("ongrammarclick");
    y && y.length > 0 && (g_strTinyMceGrammarCallback = y);
    var I = C.getAttribute("onspellingclick");
    I && I.length > 0 && (g_strTinyMceSpellingCallback = I);
    var E = C.getAttribute("onhomophoneclick");
    E && E.length > 0 && (g_strTinyMceHomophoneCallback = E);
    var O = C.getAttribute("onpredictionclick");
    O && O.length > 0 && (g_strTinyMcePredictionCallback = O)
  }
  var D = document.createElement("script")
    , N = document.documentElement.getElementsByTagName("body")[0];
  return null != N && void 0 != N || (N = document.body), null !== g_strLocalFilePath && (D.src = g_strLocalFilePath + "assets/jquery.js", D.async = !0, D.onload = D.onreadystatechange = function () {
    this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (window.$thjQuery = jQuery.noConflict(!0), D.onload = D.onreadystatechange = null, N.removeChild(D))
  }, N.appendChild(D)), !0
}

function rw_containsChildWithId(e, t) {
  if (null != e.id && e.id.indexOf(t) > -1) return !0;
  for (var r, n = e.firstChild; null != n;) {
    if (r = !1, null != n.id && n.id.indexOf(t) > -1) return !0;
    n = SSDOM.getNextNode(n, !1, e)
  }
  return !1
}

function rw_setUpIframeForTinyMceOnIpadAndGetRef(e) {
  try {
    var t = document.getElementById(eba_tinymce_id + "_ifr")
      .contentDocument.body;
    return t && "undefined" == typeof t.ipadTinyMceFocus && (t.ipadTinyMceFocus = e, addEvent(t, "click", function () {
      t.ipadTinyMceFocus = !0
    }), addEvent(document.getElementById(eba_tinymce_id + "_ifr")
      .contentWindow, "focus"
      , function () {
        t.ipadTinyMceFocus = !0
      })), t
  } catch (r) {}
  return null
}

function rw_checkIfAllowed() {
  return "boolean" == typeof eba_bypass_dom_check && eba_bypass_dom_check && (g_bProquest = !0), !0
}

function rw_processParameters() {
  if (rw_readStandardParameters(), "undefined" == typeof pktTitleId && "1600" != g_strCustId || rw_checkPKTParameters(), null != g_strCustId && 0 != g_strCustId.length && null != g_strBookId && 0 != g_strBookId.length && null != g_strPageId && 0 != g_strPageId.length || (SpeechStream.pronunciation.mode = SpeechStream.pronunciation.NONE, SpeechStream.cacheMode.mode = SpeechStream.cacheMode.NONE), null == g_strTranslateServer || null == g_strDictionaryServer || null == g_strPictureDictionaryServer) {
    var e = ".speechstream.net"
      , t = e.length
      , r = !1
      , n = SpeechStream.cacheMode.getLiveServer();
    null != n && ("speechus.texthelp.com" == n || n.length > t && n.substring(n.length - t) == e) && (r = !0), r && (n = rw_serverUrlToIncludeHttp(n, !1), null == g_strTranslateServer && (g_strTranslateServer = n), null == g_strDictionaryServer && (g_strDictionaryServer = n), null == g_strPictureDictionaryServer && (g_strPictureDictionaryServer = n))
  }
  null == g_strVocabServer && (g_strVocabServer = g_strDictionaryServer), "string" != typeof eba_annotate_storage_url && "string" != typeof eba_annotate_highlight_editor_id && "string" != typeof eba_annotate_note_editor_id && "string" != typeof eba_annotate_note_storage_url && "string" != typeof eba_annotate_highlight_storage_url || rw_checkAnnotateParameters(), g_nLanguage != SPANISH || "undefined" != typeof eba_voice || "undefined" != typeof pktVoice || g_bVoiceFromLangFlag || (g_strVoice = "ScanSoft Paulina_Full_22kHz"), "undefined" != typeof dtdType && g_bFireFox && (g_dtdType = dtdType, "xtran" == dtdType ? g_bXDTDType = !0 : "loose" == dtdType && (g_bLooseType = !0)), rw_autoCacheParameters(), "boolean" == typeof eba_use_html5 ? eba_use_html5 || (g_bForceFlash = !0) : g_bForceFlash = !("string" == typeof g_strSpeechServer && "speechus.texthelp.com" == g_strSpeechServer || "string" == typeof g_strSpeechServerBackup && "speechus.texthelp.com" == g_strSpeechServerBackup), null != g_apipData && SSAPIP.apipHandler.init(g_apipData, g_apipOrderArray)
}

function rw_autoCacheParameters() {
  var e;
  try {
    e = window.location.search
  } catch (t) {
    e = ""
  }
  if ("boolean" == typeof eba_autocache_generate && eba_autocache_generate) g_bSpeechStreamAutoCache = !0;
  else {
    var r = rw_readURLParameter(e, "speechstreamautocache");
    g_bSpeechStreamAutoCache = null != r && "true" == r.toLowerCase()
  }
  if (!g_bSpeechStreamAutoCache)
    if ("boolean" == typeof eba_autocache_check && eba_autocache_check) g_bSpeechStreamAutoCacheCheck = !0;
    else {
      var r = rw_readURLParameter(e, "speechstreamautocachecheck");
      g_bSpeechStreamAutoCacheCheck = null != r && "true" == r.toLowerCase()
    }
  if ("boolean" == typeof eba_autocache_no_alert && eba_autocache_no_alert) g_bSpeechStreamAutoCacheNoAlert = !0;
  else {
    var r = rw_readURLParameter(e, "speechstreamautocachenoalert");
    g_bSpeechStreamAutoCacheNoAlert = null != r && "true" == r.toLowerCase()
  }
  if (g_bSpeechStreamAutoCache || g_bSpeechStreamAutoCacheCheck ? (g_nNoDisplayIcons |= generatecache_icon, g_nNoDisplayIcons |= checkcache_icon, g_bForceFlash = !0) : ("number" == typeof eba_icons && eba_icons > 0 && ((eba_icons & generatecache_icon) != generatecache_icon && (eba_icons & checkcache_icon) != checkcache_icon || (g_bForceFlash = !0)), "number" == typeof eba_no_display_icons && eba_no_display_icons > 0 && ((eba_no_display_icons & generatecache_icon) != generatecache_icon && (eba_no_display_icons & checkcache_icon) != checkcache_icon || (g_bForceFlash = !0))), "string" == typeof eba_autocache_callback) g_strSpeechStreamAutoCacheCallback = eba_autocache_callback;
  else {
    var r = rw_readURLParameter(e, "speechstreamautocachecallback");
    null != r && r.length > 0 && (r = decodeURIComponent(r), g_strSpeechStreamAutoCacheCallback = r)
  }
  g_strSpeechStreamAutoCacheCallback && g_strSpeechStreamAutoCacheCallback.length > 0 && (g_strSpeechStreamAutoCacheCallback = rw_replaceAll(g_strSpeechStreamAutoCacheCallback, "\\amp;", "&")), "boolean" == typeof eba_autocache_allspeeds && (g_bAutoCacheAllSpeeds = eba_autocache_allspeeds)
}

function rw_readURLParameter(e, t) {
  var r = null
    , n = t + "=";
  n = n.toLowerCase();
  var a, o, i, l = n.length
    , s = e.toLowerCase();
  for (a = s.indexOf(n); a > 0;) {
    if (i = e.charAt(a - 1), "?" == i || "&" == i) {
      o = e.indexOf("&", a + l), r = o == -1 ? e.substr(a + l) : e.substring(a + l, o);
      break
    }
    a = s.indexOf(n, a + 1)
  }
  return r
}

function rw_initScholastic() {
  var e = !1
    , t = !1;
  g_bIsScholastic = !0, null == g_strLoginName && (g_strLoginName = "scholastic", g_strLoginPassword = "scholastic");
  var r, n = document.getElementsByTagName("meta")
    , a = n.length;
  for (r = 0; r < a; r++) {
    var o = n[r];
    null != o.name && ("assetid" == o.name.toLowerCase() && null != o.content && o.content.length > 0 ? (g_strPageId = o.content, t = !0) : "pcode" == o.name.toLowerCase() && null != o.content && o.content.length > 0 && (g_strBookId = o.content, e = !0))
  }
  var i = window.location.search;
  for (nStart = i.indexOf("id="); nStart > 0;) cChar = i.charAt(nStart - 1), "?" == cChar || "&" == cChar ? (nEnd = i.indexOf("&", nStart + 3), g_strPageId = nEnd == -1 ? i.substr(nStart + 3) : i.substring(nStart + 3, nEnd), nStart = -1) : nStart = i.indexOf("id=", nStart + 1);
  for (nStart = i.indexOf("product_id="); nStart > 0;) cChar = i.charAt(nStart - 1), "?" == cChar || "&" == cChar ? (nEnd = i.indexOf("&", nStart + 11), nEnd == -1 ? (g_strBookId = i.substr(nStart + 11), e = !0) : (g_strBookId = i.substring(nStart + 11, nEnd), t = !0), nStart = -1) : nStart = i.indexOf("product_id=", nStart + 1);
  e || null != g_strBookId && "" != g_strBookId || (g_strBookId = "none"), t || null != g_strPageId && "" != g_strPageId || (g_strPageId = "none")
}

function rw_initCast() {
  g_strBookId = "index", g_strPageId = "1";
  var e = document.location;
  if (null != e) {
    var t = e.pathname;
    if (t.length > 0) {
      var r = t.lastIndexOf("/");
      if (r > -1) {
        t = t.substr(r + 1);
        var n = t.indexOf(".html");
        n > -1 && (t = t.substring(0, n), g_strBookId = t)
      }
    }
  }
}

function CalculatePaths() {
  function e() {
    for (null == g_strSourceFolder && (g_strSourceFolder = ""); g_strSourceFolder.length > 0 && "/" == g_strSourceFolder.charAt(0);) g_strSourceFolder = g_strSourceFolder.substr(1);
    for (; g_strSourceFolder.length > 0 && "/" == g_strSourceFolder.charAt(g_strSourceFolder.length - 1);) g_strSourceFolder = g_strSourceFolder.substr(0, g_strSourceFolder.length - 1);
    "" == g_strSourceFolder && (g_strSourceFolder = "SpeechStream")
  }

  function t() {
    var e;
    return e = g_strServerVersion.length > 0 ? "latest" == g_strServerVersion ? g_strSourceFolder + "/" + g_strServerVersion : g_strSourceFolder + "/v" + g_strServerVersion : g_strSourceFolder
  }

  function r(e) {
    null != g_strLocalFilePath ? "latest" == g_strServerVersion ? SSDAT.paths.strFileLoc = g_strLocalFilePath + g_strServerVersion + "/" : SSDAT.paths.strFileLoc = g_strLocalFilePath + "v" + g_strServerVersion + "/" : (e.length > 0 ? SSDAT.paths.strFileLoc = n + e + "/" : SSDAT.paths.strFileLoc = n, SSDAT.paths.strSwfLoc = g_strWebToSpeechFolder)
  }
  var n, a, o;
  this.initPaths = function () {
    n = rw_getHTTPText(!1) + g_strServer + "/", a = rw_getHTTPText(!0) + g_strSpeechServer + "/", o = null != g_strSpeechServerBackup ? rw_getHTTPText(!0) + g_strSpeechServerBackup + "/" : null, e();
    var i = t();
    r(i)
  }, this.getServerUrl = function () {
    return n
  }, this.getSpeechServerUrl = function () {
    return a
  }, this.getSpeechServerUrlBackup = function () {
    return o
  }
}

function rw_createMainBar() {
  return
}

function rw_createWebToSpeech() {
  var e = document.getElementById("WebToSpeech");
  null == e && (e = document.createElement("span"), e.id = "WebToSpeech", SSDAT.pageData.placeholder.appendChild(e)), rw_createSwfObject(SpeechStream.calculatePaths.getServerUrl(), SpeechStream.calculatePaths.getSpeechServerUrl(), SpeechStream.calculatePaths.getSpeechServerUrlBackup())
}

function $rw_barDynamicStart() {
  g_bDynamicLoading = !0
}

function rw_getPlaceholder() {
  var e;
  if (e = g_bChromeExtension ? document.getElementById("thSpeechStreamTBPlaceHolder") : document.getElementById("speechStreamPlaceholder"), null == e)
    if (g_bDynamicLoading) e = document.body;
    else if (g_bUseContainer || g_bIE && g_bIEOld) {
    for (var t, r = document.body; null != r;) null != r && 1 == r.nodeType && (t = r), r = r.lastChild;
    if (t == document.body) e = t;
    else {
      var n = t.parentNode
        , a = document.createElement("span");
      g_bChromeExtension ? a.id = "thSpeechStreamTBPlaceHolder" : a.id = "speechStreamPlaceholder", n.insertBefore(a, t), e = a
    }
  } else e = document.body;
  return e
}

function rw_addMainCSS() {
  var e = SSDAT.paths.strFileLoc;
  if (g_bMcGrawHill) SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwMain500Bar.css" type="text/css" rel="stylesheet" />', !1);
  else {
    var t = g_nIcons;
    g_nDisplayIcons != -1 && (t = g_nDisplayIcons);
    var r = clicktospeak_icon + play_icon + pause_icon + stop_icon;
    if ((t | r) == r) SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwMainTHSpeechBar.css" type="text/css" rel="stylesheet" />', !1);
    else {
      var n = r + search_icons + picturedictionary_icon;
      (t | n) == n ? g_bChromeExtension ? SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwMainExtSearchBar.css" type="text/css" rel="stylesheet" />', !1) : SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwMainTHSearchBar.css" type="text/css" rel="stylesheet" />', !1) : g_bChromeExtension ? SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwMainExtSearchBar.css" type="text/css" rel="stylesheet" />', !1) : SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwMainTHFullBar.css" type="text/css" rel="stylesheet" />', !1);
    }
  }
}

function rw_createBarOutline() {
  var e;
  g_bChromeExtension && (g_nBarWidth += 220);
  var t = "width:" + g_nBarWidth + "px;visibility:hidden;";
  (g_bHiddenBar || g_bNoTitleBar) && (t += "display:none;");
  var r = {};
  return r.style = t, e = g_bNoTitleBar ? SSDOM.createObjectFromMap("div", r, "rwMainOutline", null) : g_bChromeExtension ? SSDOM.createObjectFromMap("thrwgdwrns:thmainoutlinetoolbar", r, "rwMainOutline", "rwToolbarOutline") : SSDOM.createObjectFromMap("div", r, "rwMainOutline", "rwToolbarOutline")
}

function rw_createBarHeader() {
  var e, t, r, n = SSDAT.paths.strFileLoc;
  if (null == eba_logo_url ? g_bMcGrawHill || g_bPktFlag ? (t = "", r = null) : (t = "Click here to go to www.texthelp.com", r = "www.texthelp.com") : "none" == eba_logo_url ? (t = "", r = null) : (t = "Click here to go to " + eba_logo_url, r = eba_logo_url, "http://" == r.substr(0, 7) ? r = r.substr(7) : "https://" == r.substr(0, 8) && (r = r.substr(8))), e = g_bChromeExtension ? SSDOM.createObject("thrwgdwrns:thdragmetoolbar", ["style", "display:block"], "rwDragMe", "rwToolbarCaption") : SSDOM.createObject("div", null, "rwDragMe", "rwToolbarCaption"), g_bChromeExtension) {
    var a = SSDOM.createObject("thrwgdwrns:thtoolbartitileRW", null, "rwToolbarTitleRW", null);
    a.setAttribute("ignore", ""), a.innerHTML = "Read&Write for Google Chrome&trade;", e.appendChild(a)
  }
  var o;
  if (null == r) attrMap = {}, attrMap.border = "0", attrMap.ignore = "1", attrMap.align = "right", g_bMcGrawHill ? (attrMap.src = n + "rwimgs500/logo500.gif", attrMap.style = "margin: 5px; cursor:default;") : g_bChromeExtension ? attrMap.style = "cursor:default" : (attrMap.src = n + "rwimgs/logo.gif", attrMap.style = "cursor:default"), attrMap.title = "", attrMap.alt = "", o = g_bChromeExtension ? SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarImage", attrMap, null, "rwCaptionIcon") : SSDOM.createObjectFromMap("img", attrMap, null, null), e.appendChild(o);
  else {
    attrMap = {}, attrMap.border = "0", attrMap.ignore = "1", attrMap.align = "right", g_bMcGrawHill ? (attrMap.src = n + "rwimgs500/logo500.gif", attrMap.style = "margin: 5px;") : g_bChromeExtension || (attrMap.src = n + "rwimgs/logo.gif"), attrMap.title = t, attrMap.alt = t, o = g_bChromeExtension ? SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarImage", attrMap, null, "rwCaptionIcon") : SSDOM.createObjectFromMap("img", attrMap, null, null);
    var i;
    attrMap = {}, attrMap.href = rw_getHTTPText(!1) + r, attrMap.target = "_blank", g_bSafari || (attrMap.style = "cursor:hand"), i = SSDOM.createObjectFromMap("a", attrMap, null, null), i.appendChild(o), e.appendChild(i)
  }
  return e
}

function openForm(e, t, r, n) {
  var a = document.createElement("form");
  if (a.action = t, a.method = e, a.target = n || "_self", r)
    for (var o in r) {
      var i = document.createElement("textarea");
      i.name = o, i.value = "object" == typeof r[o] ? JSON.stringify(r[o]) : r[o], a.appendChild(i)
    }
  a.style.display = "none", document.body.appendChild(a), a.submit()
}

function onSimplifyClick() {
  stopTexthelpScreenshotReading();
  var e = window.location.href;
  if (!(e.indexOf(".texthelp.com/simplify/") > -1)) {
    var t = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .language.services;
    this.w = window.open("https://rw.texthelp.com/simplify/home/simplify?locale=" + encodeURIComponent(t) + "&simplify=" + window.location.href, "_newtab")
  }
}

function rw_createBarBody() {
  var e;
  if (e = g_bNoTitleBar ? SSDOM.createObject("div", null, null, "rwToolbarBarNoBorder") : g_bChromeExtension ? SSDOM.createObject("thrwgdwrns:thtoolbar", ["style", "display:block"], null, "rwToolbarBar") : SSDOM.createObject("div", null, null, "rwToolbarBar"), g_bChromeExtension) var t = SSDOM.createObject("thrwgdwrns:thtoolbarlist", ["style", "display:block"], "rwToolbarList", null);
  else var t = SSDOM.createObject("div", null, "rwToolbarList", null);
  $rw_setIconsToLoad(g_nIcons);
  for (var r = !1, n = 0; n < g_nIconCount; n++) r = !0, t.appendChild(rw_addIcon(n));
  if ((g_nIcons & selectSpeed_icon) == selectSpeed_icon && (r = !0, t.appendChild(rw_addDropDownList())), r && g_nBarWidth < 110 ? g_nBarWidth = 110 : r || (g_nBarWidth = 0), g_bChromeExtension) {
    var a;
    attrMap = {}, attrMap.id = "thSimplifyBtn", attrMap.title = "Simplify page", attrMap["data-speechstream-toolbar"] = "speechstream_simplify", a = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarfeature", attrMap, null, null);
    var o;
    attrMap = {}, attrMap.id = "thSimplifyImg", o = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarfeatureImg", attrMap, null, null), a.appendChild(o), a.addEventListener("click", onSimplifyClick, !1);
    var i;
    attrMap = {}, attrMap.ignore = "1", attrMap.title = "Click here to go to www.texthelp.com", attrMap.alt = "Click here to go to www.texthelp.com", attrMap["data-speechstream-toolbar"] = "speechstream_clickhere", i = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarImage", attrMap, null, "rwMainLogoIcon");
    var l;
    attrMap = {}, l = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarImage", attrMap, null, "rwMainLogoIconImg"), i.appendChild(l);
    var s;
    attrMap = {}, attrMap.href = rw_getHTTPText(!1) + "www.texthelp.com", attrMap.target = "_blank", attrMap.style = "cursor:hand", s = SSDOM.createObjectFromMap("a", attrMap, null, null);
    var c, g = g_nBarWidth - 8;
    attrMap = {}, attrMap.id = "texthelpLogo", attrMap.ignore = "1", attrMap.width = "24", attrMap.height = "24", attrMap.unselectable = "on", attrMap.style = "left:" + g + "px;cursor:hand; float: right; width: 180px;", c = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarfeaturelogo", attrMap, null, null), s.appendChild(i);
    var u;
    attrMap = {}, attrMap.href = rw_getHTTPText(!1) + "rwchrome.texthelp.com/drive/Support/featurepreview", attrMap.title = "Click here to learn more", attrMap.target = "_blank", attrMap.style = "cursor:hand; padding-top: 4px;float: right;", attrMap.onClick = 'window.postMessage({type: "1757FROM_PAGERW4G",command:"trackEvent",settings:{\'category\': "FromWebReader",\'action\': "WebReader Feature Link",\'label\':"' + window.location.host + "\"}},'*');", u = SSDOM.createObjectFromMap("a", attrMap, null, null);
    var _;
    attrMap = {}, attrMap.id = "thSettingsDlg", attrMap.title = "Settings", attrMap["data-speechstream-toolbar"] = "speechstream_settings", _ = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarfeature", attrMap, null, null);
    var d;
    attrMap = {}, attrMap.id = "thSettingsDlgImg", d = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarfeature", attrMap, null, null), _.appendChild(d), _.addEventListener("click", function () {
      stopTexthelpScreenshotReading(), textHelp.webreaderapi.SettingsSingleton.getInst()
        .getOptionsDialog()
        .showDialog(textHelp.webreaderapi.SettingsSingleton.getInst()
          .getVoices())
    }, !1);
    var h;
    attrMap = {}, attrMap.id = "thHelpBtn", attrMap.title = "Help", attrMap["data-speechstream-toolbar"] = "speechstream_help", h = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarfeature", attrMap, null, null);
    var p;
    attrMap = {}, attrMap.id = "thHelpImg", p = SSDOM.createObjectFromMap("thrwgdwrns:thtoolbarfeature", attrMap, null, null), h.appendChild(p), h.addEventListener("click", function () {
      stopTexthelpScreenshotReading(), window.open("https://rwchrome.texthelp.com/drive/Support/Home", "_thSupport")
    }, !1), t.appendChild(a), c.appendChild(s), c.appendChild(h), c.appendChild(_), t.appendChild(c)
  }
  return e.appendChild(t), e
}

function rw_createSwfObject(e, t, r) {
  var n = {}
    , a = SSDAT.paths.strSwfLoc;
  null != g_strLoginName && null != g_strLoginPassword && (n.userName = g_strLoginName, n.userPassword = g_strLoginPassword), n.lessonServerLoc = e, n.speechServerLoc = t, n.speedValue = g_nSpeedValue, g_nSpeechStreamServerVersion >= 3 ? n.useServices = "true" : g_nSpeechStreamServerVersion == -1 ? null != g_strSpeechServer && g_strSpeechServer.indexOf(".speechstream.net") > -1 || null != g_strSpeechServerBackup && g_strSpeechServerBackup.indexOf(".speechstream.net") > -1 ? n.useServices = "true" : n.useServices = "false" : (n.useServices = "false", g_bForceFlash = !0), null != g_strTranslateServer && (n.translateServerLoc = g_strTranslateServer), null != g_strDictionaryServer && (n.dictionaryServerLoc = g_strDictionaryServer), null != g_strPictureDictionaryServer && (n.imagedictionaryServerLoc = g_strPictureDictionaryServer), null != g_strPredictionServer && (n.predictionServerLoc = g_strPredictionServer), null != g_strSpellingServer && (n.spellingServerLoc = g_strSpellingServer), null != g_strHomophoneServer && (n.homophoneServerLoc = g_strHomophoneServer), (g_bSpeechCacheGenerateFlag || g_bSpeechCacheFlag) && (n.cacheMode = "true", null != r && (n.cacheLiveFallover = "true")), null != r && (n.speechServerBackupLoc = r), null != g_strCustId && null != g_strBookId && null != g_strPageId && (n.custID = g_strCustId, n.bookID = g_strBookId, n.pageID = g_strPageId), g_nCacheRetry > -1 && (n.cacheCount = g_nCacheRetry), g_nCacheRetryTimeout > -1 && (n.cacheTimeDelay = g_nCacheRetryTimeout), n.locale = g_strLocale, n.speechName = g_strVoice, null != g_strSearchSpeechServer && null != g_strReplaceSpeechServer && (n.searchString = g_strSearchSpeechServer, n.replaceString = g_strReplaceSpeechServer), null == a || "" == a ? a = rw_getHTTPText(!1) + g_strServer + "/" : "." == a.charAt(0) ? "/" != a.charAt(a.length - 1) && (a = g_strServer + "/") : ("/" != a.charAt(0) && (a = "/" + a), "/" != a.charAt(a.length - 1) && (a += "/"), a = rw_getHTTPText(!1) + g_strServer + a), SSDAT.paths.strSwfLoc = a, g_bSSL ? (n.SSLSpeech = "true", n.SSLToolbar = "true") : (g_bSSLSpeech && (n.SSLSpeech = "true"), g_bSSLToolbar && (n.SSLToolbar = "true")), g_bIE && (g_bSSL || g_bSSLSpeech) && (n.IESSL = "true"), g_nDisplayIcons = g_nIcons, g_nIcons |= g_nNoDisplayIcons, ((g_nIcons & pronCreate_icon) == pronCreate_icon || (g_nIcons & pronEdit_icon) == pronEdit_icon || g_bCacheBuster) && (n.cacheBuster = "true"), g_nVolumeValue > -1 && (n.volumeValue = "" + g_nVolumeValue);
  var o = {};
  if (o.allowScriptAccess = "always", o.movie = a + "WebToSpeech" + g_strClientVersion + ".swf", o.quality = "high", o.bgcolor = "#ffffff", SpeechStream.m_flashVars = n, SpeechStream.setUpControllerFactory(), g_controllerFactory.doesSupportHtml5()) g_controllerFactory.getConnector()
    .initialise(n, e, t, r), g_controllerFactory.setSwaConntector(g_controllerFactory.getConnector());
  else {
    try {
      g_bIENew && !g_bIE11 && (g_strAmp = "&amp;")
    } catch (i) {
      g_strAmp = "&amp;"
    }
    if (g_bFireFox) {
      var l = new SpeechStream.HTML5Controller;
      l.initialise(n, e, t, r), g_controllerFactory.setSwaConntector(l)
    }
  }
}

function rw_readStandardParameters() {
  "boolean" == typeof eba_use_container && (g_bUseContainer = eba_use_container), "boolean" == typeof eba_allow_alerts_flag && (g_bAllowAlertsFlag = eba_allow_alerts_flag), "boolean" == typeof eba_alerts && (g_bAllowAlertsFlag = eba_alerts), "boolean" == typeof eba_no_title && (g_bNoTitleBar = eba_no_title), "boolean" == typeof eba_noTitleFlag && (g_bNoTitleBar = eba_noTitleFlag), "boolean" == typeof eba_hidden_bar && (g_bHiddenBar = eba_hidden_bar), "boolean" == typeof eba_continuous_reading && (g_bContinuousReading = eba_continuous_reading), "boolean" == typeof eba_speak_selection_by_sentence ? g_bSpeechSelectionBySentence = !!g_bContinuousReading && eba_speak_selection_by_sentence : g_bContinuousReading || (g_bSpeechSelectionBySentence = !1), "boolean" == typeof eba_dont_extend_selection && (g_bExtendSelection = !eba_dont_extend_selection), "boolean" == typeof eba_ignore_buttons && (g_bIgnoreButtons = eba_ignore_buttons), "boolean" == typeof eba_page_complete_after_selection && (g_bCallPageCompleteOnSelectionEnd = eba_page_complete_after_selection), "boolean" == typeof eba_speechCacheGenerateFlag && (g_bSpeechCacheGenerateFlag = eba_speechCacheGenerateFlag, g_bSpeechCacheGenerateFlag && (SpeechStream.cacheMode.mode = SpeechStream.cacheMode.CACHE_BUILDING_MODE)), "boolean" == typeof eba_cache_building_mode && (g_bSpeechCacheGenerateFlag = eba_cache_building_mode, g_bSpeechCacheGenerateFlag && (SpeechStream.cacheMode.mode = SpeechStream.cacheMode.CACHE_BUILDING_MODE));
  var e = !1;
  if ("boolean" == typeof eba_speechCacheFlag && (g_bSpeechCacheFlag = eba_speechCacheFlag, e = !0), "boolean" == typeof eba_speech_cache_flag && (g_bSpeechCacheFlag = eba_speech_cache_flag, e = !0), "boolean" == typeof eba_cache_mode && (g_bSpeechCacheFlag = eba_cache_mode, e = !0), e && g_bSpeechCacheFlag && (SpeechStream.cacheMode.mode = SpeechStream.cacheMode.CACHE_ONLY), "boolean" == typeof eba_cache_live_generation && (g_bCacheLiveGeneration = eba_cache_live_generation, g_bCacheLiveGeneration && (SpeechStream.cacheMode.mode = SpeechStream.cacheMode.CACHE_WITH_LIVE_SERVER)), "boolean" == typeof eba_split_cache_path && (g_bSplitCachePath = eba_split_cache_path), "boolean" == typeof eba_autoCachePage && (g_bAutoCachePage = eba_autoCachePage), "boolean" == typeof eba_voice_from_lang_flag && (g_bVoiceFromLangFlag = eba_voice_from_lang_flag), "boolean" == typeof eba_bubble_mode && (SSDAT.bubbleData.bBubbleMode = eba_bubble_mode), "boolean" == typeof eba_bubble_freeze_on_shift_flag && (SSDAT.bubbleData.bBubbleFreezeOnShiftFlag = eba_bubble_freeze_on_shift_flag), "boolean" == typeof eba_hover_flag && (g_bOnClick = !eba_hover_flag), "boolean" == typeof eba_ssl_flag && (g_bSSL = eba_ssl_flag, g_bSSLSpeech = g_bSSL, g_bSSLToolbar = g_bSSL), "boolean" == typeof eba_ssl_speech && (g_bSSLSpeech = eba_ssl_speech), "boolean" == typeof eba_ssl_toolbar && (g_bSSLToolbar = eba_ssl_toolbar), "boolean" == typeof eba_clientside_pronunciation ? eba_clientside_pronunciation ? "boolean" == typeof eba_check_pronunciation_before_cache && eba_check_pronunciation_before_cache ? SpeechStream.pronunciation.mode = SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER : SpeechStream.pronunciation.mode = SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_OFFLINE_CACHE : SpeechStream.pronunciation.mode = SpeechStream.pronunciation.SERVER_PRONUNCIATION : "boolean" == typeof eba_check_pronunciation_before_cache && (eba_check_pronunciation_before_cache ? SpeechStream.pronunciation.mode = SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER : SpeechStream.pronunciation.mode = SpeechStream.pronunciation.SERVER_PRONUNCIATION), "boolean" == typeof eba_alter_browser_for_consistency && (g_bAlterBrowserForConsistency = eba_alter_browser_for_consistency), "boolean" == typeof eba_cache_selection && (g_bCacheSelection = eba_cache_selection), "boolean" == typeof eba_cache_user_text && (g_bCacheUserText = eba_cache_user_text), "boolean" == typeof eba_skip_on_error && eba_skip_on_error && (SpeechStream.actionOnError.action = SpeechStream.EnumActionOnError.SKIP), "boolean" == typeof eba_cache_buster && eba_cache_buster && (g_bCacheBuster = !0), "boolean" == typeof eba_handle_radio_checkbox_click && eba_handle_radio_checkbox_click && (g_bTakeClickOnRadioBox = !0), "boolean" == typeof eba_inline_img && (g_bInlineImg = eba_inline_img), "boolean" == typeof eba_ignore_hidden && (g_bIgnoreHidden = eba_ignore_hidden), "boolean" == typeof eba_limit_cookies && (g_bLimitCookies = eba_limit_cookies), "boolean" == typeof eba_ignore_frames && (g_bIgnoreFrames = eba_ignore_frames), "boolean" == typeof eba_math && (g_bMathsSymbols = eba_math), "boolean" == typeof eba_maths && (g_bMathsSymbols = eba_maths), "boolean" == typeof eba_use_vocabulary && (g_bUseVocab = eba_use_vocabulary), "boolean" == typeof eba_use_vocab && (g_bUseVocab = eba_use_vocab), "boolean" == typeof eba_use_commands && (g_bUseCommands = eba_use_commands), "boolean" == typeof eba_tinymce && (g_bTinyMce = eba_tinymce), "boolean" == typeof eba_swa && (g_bSWA = eba_swa), "boolean" == typeof eba_disable_speech && (g_bDisableSpeech = eba_disable_speech), "boolean" == typeof eba_apip && (g_bApip = eba_apip), "boolean" == typeof eba_chrome_extension && (g_bChromeExtension = eba_chrome_extension), "number" == typeof eba_icons && (g_nIcons = eba_icons), "number" == typeof eba_no_display_icons && (g_nNoDisplayIcons = eba_no_display_icons), "number" == typeof eba_language && (g_nLanguage = eba_language, 3 == g_nLanguage ? g_nLanguage = 2 : (g_nLanguage > 3 || g_nLanguage < 0) && (g_nLanguage = 0), g_bVoiceFromLangFlag && eba_language >= 0 && eba_language < DEFAULT_VOICE_ARRAY.length && (g_strVoice = DEFAULT_VOICE_ARRAY[eba_language])), "number" == typeof eba_speedValue && (g_nSpeedValue = eba_speedValue), "number" == typeof eba_speed_value && (g_nSpeedValue = eba_speed_value), "number" == typeof eba_reading_age && $rw_setReadingAge(eba_reading_age), "number" == typeof eba_speed_offset && (g_nSpeedValue += eba_speed_offset), "number" == typeof eba_volume_value && (g_nVolumeValue = eba_volume_value), "number" == typeof eba_cache_retry && (g_nCacheRetry = eba_cache_retry), "number" == typeof eba_cache_retry_timeout && (g_nCacheRetryTimeout = eba_cache_retry_timeout), "number" == typeof eba_mp3_limit && (g_nMP3Limit = eba_mp3_limit < 1e3 ? 1024 * g_nMP3Limit : eba_mp3_limit), MAX_WORDCOUNT_TO_SPEAK = eba_max_word_count, SpeechStream.dateFilter.setMode(eba_date_filter_mode), "number" == typeof eba_vocabulary_limit && (g_nVocabLimit = eba_vocabulary_limit), "string" == typeof eba_server_version && (g_strServerVersion = eba_server_version), "string" == typeof eba_serverVersion && (g_strServerVersion = eba_serverVersion), "string" == typeof eba_client_version && "latest" != eba_client_version && (g_strClientVersion = eba_client_version), "string" == typeof eba_clientVersion && "latest" != eba_clientVersion && (g_strClientVersion = eba_clientVersion), "string" == typeof eba_server && (g_strServer = eba_server, g_strServer.length > 6 && "http://" == g_strServer.substring(0, 7) ? g_strServer = g_strServer.substring(7) : g_strServer.length > 7 && "https://" == g_strServer.substring(0, 8) && (g_strServer = g_strServer.substring(8))), "string" == typeof eba_speech_server && (g_strSpeechServer = eba_speech_server), "string" == typeof eba_speechServer && (g_strSpeechServer = eba_speechServer), "string" == typeof eba_speech_server_backup && (g_strSpeechServerBackup = eba_speech_server_backup), "string" == typeof eba_speechServerBackup && (g_strSpeechServerBackup = eba_speechServerBackup), "string" == typeof eba_translation_server && (g_strTranslateServer = rw_serverUrlToIncludeHttp(eba_translation_server, !1)), "string" == typeof eba_translate_server && (g_strTranslateServer = rw_serverUrlToIncludeHttp(eba_translate_server, !1)), "string" == typeof eba_dictionary_server && (g_strDictionaryServer = rw_serverUrlToIncludeHttp(eba_dictionary_server, !1)), "string" == typeof eba_imagedictionary_server && (g_strPictureDictionaryServer = rw_serverUrlToIncludeHttp(eba_imagedictionary_server, !1)), "string" == typeof eba_picturedictionary_server && (g_strPictureDictionaryServer = rw_serverUrlToIncludeHttp(eba_picturedictionary_server, !1)), "string" == typeof eba_language_server && (g_strPredictionServer = rw_serverUrlToIncludeHttp(eba_language_server, !1), g_strSpellingServer = rw_serverUrlToIncludeHttp(eba_language_server, !1), g_strHomophoneServer = rw_serverUrlToIncludeHttp(eba_language_server, !1)), "string" == typeof eba_spelling_server && (g_strSpellingServer = rw_serverUrlToIncludeHttp(eba_spelling_server, !1)), "string" == typeof eba_homophone_server && (g_strHomophoneServer = rw_serverUrlToIncludeHttp(eba_homophone_server, !1)), "string" == typeof eba_prediction_server && (g_strPredictionServer = rw_serverUrlToIncludeHttp(eba_prediction_server, !1)), "string" == typeof eba_vocabulary_server && (g_strVocabServer = rw_serverUrlToIncludeHttp(eba_vocabulary_server, !1)), "string" == typeof eba_folder && (g_strSourceFolder = eba_folder), "string" == typeof eba_client_folder && (g_strWebToSpeechFolder = eba_client_folder), "string" == typeof eba_clientFolder && (g_strWebToSpeechFolder = eba_clientFolder), "string" == typeof eba_voice && (g_strVoice = eba_voice, "ScanSoft Daniel_Full_22kHz" == g_strVoice ? DEFAULT_VOICE_ARRAY[ENG_UK] = g_strVoice : "ScanSoft Tom_Full_22kHz" == g_strVoice ? DEFAULT_VOICE_ARRAY[ENG_US] = g_strVoice : "ScanSoft Jill_Full_22kHz" == g_strVoice && (DEFAULT_VOICE_ARRAY[ENG_US] = g_strVoice)), "string" == typeof eba_custId && (eba_cust_id = eba_custId), "string" == typeof eba_cust_id && (g_strCustId = rw_filterId(eba_cust_id.trimTH())), "string" == typeof eba_bookId && (eba_book_id = eba_bookId), "string" == typeof eba_book_id && (g_strBookId = rw_filterId(eba_book_id.trimTH())), "string" == typeof eba_pageId && (eba_page_id = eba_pageId), "string" == typeof eba_page_id && (g_strPageId = rw_filterId(eba_page_id.trimTH())), "string" == typeof eba_loginName && (eba_login_name = eba_loginName), "string" == typeof eba_login_name && (g_strLoginName = eba_login_name), "string" == typeof eba_loginPassword && (eba_login_password = eba_loginPassword), g_strLoginPassword = "string" == typeof eba_login_password ? eba_login_password : g_strLoginName, "string" == typeof eba_locale && (g_strLocale = eba_locale), "string" == typeof eba_speech_range_colors && (SSDAT.highlightData.strSpeechRangeColours = eba_speech_range_colors), "string" == typeof eba_speech_range_colours && (SSDAT.highlightData.strSpeechRangeColours = eba_speech_range_colours), "string" == typeof eba_speech_range_style && (SSDAT.highlightData.strSpeechRangeColours = eba_speech_range_style), "string" == typeof eba_speech_word_colors && (SSDAT.highlightData.strSpeechWordColours = eba_speech_word_colors), "string" == typeof eba_speech_word_colours && (SSDAT.highlightData.strSpeechWordColours = eba_speech_word_colours), "string" == typeof eba_speech_word_style && (SSDAT.highlightData.strSpeechWordColours = eba_speech_word_style), "string" == typeof eba_mp3_id && (g_mp3Id = eba_mp3_id), "string" == typeof eba_search_speech_server && (g_strSearchSpeechServer = eba_search_speech_server), "string" == typeof eba_replace_speech_server && (g_strReplaceSpeechServer = eba_replace_speech_server), "string" == typeof eba_play_start_point && (g_strPlayStartPoint = eba_play_start_point), "string" == typeof eba_speech_stream_server_version || "number" == typeof eba_speech_stream_server_version)
    if ("number" == typeof eba_speech_stream_server_version) g_nSpeechStreamServerVersion = eba_speech_stream_server_version;
    else try {
      g_nSpeechStreamServerVersion = parseInt(eba_speech_stream_server_version, 10)
    } catch (t) {} else "810" == eba_cust_id && (g_nSpeechStreamServerVersion = 3);
    "string" == typeof eba_symbol_text && rw_mathsMappingSetup(eba_symbol_text), "string" == typeof eba_speech_file_type && (eba_speech_file_type = eba_speech_file_type.toLowerCase(), "mp3" != eba_speech_file_type && "ogg" != eba_speech_file_type && "wav" != eba_speech_file_type || (g_strSpeechFileType = eba_speech_file_type)), "string" == typeof eba_voice_language_map && rw_setVoiceForLanguageFromList(eba_voice_language_map), "string" == typeof eba_break_list && $rw_setBreakList(eba_break_list), "string" == typeof eba_tinymce_id && (g_strTinymceId = eba_tinymce_id), "string" == typeof eba_local_file_path && (g_strLocalFilePath = eba_local_file_path), "object" == typeof eba_apip_data && (g_apipData = eba_apip_data), g_apipOrderArray = eba_apip_order
}

function rw_serverUrlToIncludeHttp(e, t) {
  return (e.length < 4 || "http" != e.substring(0, 4)) && (e = rw_getHTTPText(t) + e), "/" != e.substr(e.length - 1, 1) && (e += "/"), e
}

function rw_checkAnnotateParameters() {
  return null == g_strBookId ? void rw_alert("Persistent annotations is enabled but no book id was provided, this feature will not work in this page.") : null == g_strPageId ? void rw_alert("Persistent annotations is enabled but no page id was provided, this feature will not work in this page.") : (g_bPersistAnnotations = "boolean" != typeof eba_use_annotations || eba_use_annotations, "string" == typeof eba_annotate_note_editor_id && (g_strPersistNoteEditorId = rw_filterId(eba_annotate_note_editor_id)), "string" == typeof eba_annotate_highlight_editor_id && (g_strPersistHighlightEditorId = rw_filterId(eba_annotate_highlight_editor_id)), "string" == typeof eba_annotate_note_reader_id && (g_strPersistNoteReaderId = rw_filterId(eba_annotate_note_reader_id)), "string" == typeof eba_annotate_highlight_reader_id && (g_strPersistHighlightReaderId = rw_filterId(eba_annotate_highlight_reader_id)), "boolean" == typeof eba_annotate_persist_notes && "*" != g_strPersistNoteEditorId && (g_bPersistNotes = eba_annotate_persist_notes), "boolean" == typeof eba_annotate_persist_highlights && "*" != g_strPersistHighlightEditorId && (g_bPersistHighlights = eba_annotate_persist_highlights), "boolean" == typeof eba_annotate_highlight_store_text && (g_bStoreHighlightText = eba_annotate_highlight_store_text), "string" == typeof eba_annotate_storage_url ? (g_strPersistStorageUrl = eba_annotate_storage_url, "undefined" == typeof eba_server && (g_strServer = g_strPersistStorageUrl)) : g_strPersistStorageUrl = g_bSpeechCacheFlag ? null != g_strSpeechServerBackup ? g_strSpeechServerBackup : g_strServer : g_strSpeechServer, "string" == typeof eba_annotate_note_storage_url && (g_strNoteStorageUrl = eba_annotate_note_storage_url), "string" == typeof eba_annotate_highlight_storage_url && (g_strHighlightStorageUrl = eba_annotate_highlight_storage_url), "boolean" == typeof eba_annotate_confirm_delete_note && (g_bPersistConfirmOnDelete = eba_annotate_confirm_delete_note), void(g_bPersistNotes && (g_nIcons & sticky_icon) != sticky_icon && (g_nIcons == no_bar ? g_nNoDisplayIcons += sticky_icon : g_nIcons += sticky_icon)))
}

function rw_checkPKTParameters() {
  g_bPktFlag = !0, g_bPersistAnnotations = "boolean" != typeof eba_use_annotations || eba_use_annotations, "boolean" == typeof pktIsTeacher && (g_bPersistNotes = g_bPersistAnnotations && pktIsTeacher), "string" == typeof pktTitleId && (g_strBookId = pktTitleId), "string" == typeof pktPageId && (g_strPageId = pktPageId), "string" == typeof pktStudentId && (!g_bPersistNotes && g_bPersistAnnotations && (g_bPersistHighlights = !0), g_strPersistHighlightEditorId = rw_filterId(pktStudentId), g_strPersistNoteReaderId = rw_filterId(pktStudentId)), "string" == typeof pktTeacherId && (g_strPersistNoteEditorId = rw_filterId(pktTeacherId), g_strPersistHighlightReaderId = rw_filterId(pktTeacherId)), "string" == typeof pktStorageUrl ? (g_strPersistStorageUrl = pktStorageUrl, "undefined" == typeof eba_server && (g_strServer = g_strPersistStorageUrl)) : g_strPersistStorageUrl = g_strServer, "string" == typeof pktSpeechServerUrl && (g_strSpeechServer = pktSpeechServerUrl), "string" == typeof pktVoice && (g_strVoice = pktVoice), "string" == typeof pktCustCode && (g_strPersistCustCode = pktCustCode), "boolean" == typeof pktConfirmOnDelete && (g_bPersistConfirmOnDelete = pktConfirmOnDelete), g_bPersistNotes && (g_nIcons & sticky_icon) != sticky_icon && (g_nIcons == no_bar ? g_nNoDisplayIcons += sticky_icon : g_nIcons += sticky_icon)
}

function rw_checkTagging() {
  if (!g_bIgnoreFrames && top.frames.length > 0) {
    var e, t = top.frames.length;
    for (e = 0; e < t; e++) {
      var r = top.frames[e];
      try {
        var n = r.document
          , a = rw_checkTaggingImpl(n.body);
        if (!a) return !1
      } catch (o) {}
    }
  }
  return null == document.body || rw_checkTaggingImpl(document.body)
}

function rw_checkTaggingImpl(e) {
  if (null != e.firstChild) {
    var t = e.firstChild
      , r = t.ownerDocument.body;
    try {
      for (; null != t && t != r;) t = SSDOM.getNextNodeIEBugFix(t)
    } catch (n) {
      return !1
    }
  }
  return !0
}

function $rw_versionCheck() {
  try {
    g_bServerSupport = g_controllerFactory.doesSupportSpeech(), $rw_setSpeedValue(g_nSpeedValue)
  } catch (e) {
    g_bServerSupport = !1
  }
  g_bServerSupport || (g_nLoadCount++, g_nLoadCount < g_nLoadRetries ? setTimeout($rw_versionCheck, 100) : g_bWebToSpeechErrShown || (g_bSpeechCacheGenerateFlag || rw_alert("A necessary flash component failed to load.  This page will not work as intended.\nCould not load file from: " + SSDAT.paths.strSwfLoc + "WebToSpeech" + g_strClientVersion + ".swf"), g_bWebToSpeechErrShown = !0))
}

function $rw_getFlashVersion() {
  if (g_nFlashVersion < 0) try {
    var e = g_controllerFactory.getConnector()
      , t = e.getVersion();
    g_nFlashVersion = parseInt(t, 10)
  } catch (r) {
    g_nFlashVersion = parseInt(g_strClientVersion, 10), thLogE(r)
  }
  return g_nFlashVersion
}

function rw_checkIfFrameValid(e, t) {
  if (null == e || null == t) return !1;
  if (e = t) return !0;
  if (e.frames.length > 0) {
    var r;
    for (r = 0; r < e.frames.length; r++) {
      if (t == e.frames[r]) return !0;
      if (e.frames[r].length > 0 && rw_checkIfFrameValid(e.frames[r], t)) return !0
    }
    return !1
  }
  return !1
}

function rw_keydownEvent(e) {
  e.target.classList.contains("texthelp-toolbarbutton") || (e.ctrlKey && 17 != e.keyCode && (g_thThrowNextCTRL = !0, null !== g_thCtrlBounceTimer && clearTimeout(g_thCtrlBounceTimer), g_thCtrlBounceTimer = setTimeout(function () {
    rw_CtrlBounce(e)
  }.bind(this), 500)), 40 === e.keyCode && g_thLastKeyIsCTRL && (g_thLastKeyIsCTRL = !1, g_thThrowNextCTRL = !1, e.preventDefault(), e.stopPropagation(), window.texthelp.RW4GC.thToolbarStoreInstance.onFocusBar(document.activeElement)), g_thLastKeyIsCTRL = !1)
}

function rw_CtrlBounce(e) {
  g_thCtrlBounceTimer = null, g_thThrowNextCTRL = !1
}

function rw_keyupEvent(e) {
  40 === e.keyCode ? g_thThrowNextCTRL ? (g_thLastKeyIsCTRL = !1, g_thThrowNextCTRL = !1) : g_thLastKeyIsCTRL = !0 : g_thLastKeyIsCTRL = !1
}

function rw_addEvents() {
  g_bDynamicLoading || addEvent(window, "load", rw_onload), addEvent(document, "click", rw_mouseclickEvent), addEventChecked(document, "mouseout", rw_mouseoutEvent), addEventChecked(document, "mouseup", rw_mouseupEvent), addEventChecked(document, "mousemove", rw_mousemoveEvent), addEventChecked(document, "mouseover", rw_mouseoverEvent), addEventChecked(document, "mousedown", rw_mousedownEvent), g_nIOS >= 6 && g_bTinyMce || (addEventChecked(document, "dragstart", rw_dragEvent), addEventChecked(document, "touchend", rw_mouseupEvent), addEventChecked(document, "touchmove", rw_mousemoveEvent), addEventChecked(document, "touchstart", rw_mousedownEvent), addEventChecked(document, "keyup", rw_keyupEvent), addEventChecked(document, "keydown", rw_keydownEvent)), g_bChromeExtension && (g_ExtBackgroundScriptCommObj = new SpeechStream.ExtBackgroundScriptComm, window.addEventListener("message", g_ExtBackgroundScriptCommObj.onMessageFromBG, !1), document.addEventListener("webkitvisibilitychange", SpeechStream.handleVisibilityChange, !1))
}

function $rw_addEventsToFrame(e) {
  try {
    var t = e.document;
    addEventChecked(t, "mouseout", rw_mouseoutEvent), addEventChecked(t, "mouseup", rw_mouseupEvent), addEventChecked(t, "click", rw_mouseclickEvent), addEventChecked(t, "mousemove", rw_mousemoveEvent), addEventChecked(t, "mouseover", rw_mouseoverEvent), addEventChecked(t, "mousedown", rw_mousedownEvent), g_nIOS >= 6 && g_bTinyMce || (addEventChecked(t, "dragstart", rw_dragEvent), addEventChecked(t, "touchend", rw_mouseupEvent), addEventChecked(t, "touchmove", rw_mousemoveEvent), addEventChecked(t, "touchstart", rw_mousedownEvent), addEventChecked(t, "keyup", rw_keyupEvent), addEventChecked(t, "keydown", rw_keydownEvent))
  } catch (r) {}
  if (e.frames.length > 0 && !g_bIgnoreFrames) {
    var n;
    for (n = 0; n < e.frames.length; n++) $rw_addEventsToFrame(e.frames[n])
  }
}

function $rw_pageSetup() {
  if ($rw_tagSentencesWithFrames(window), !g_bIgnoreFrames && window.frames.length > 0) {
    var e = 0;
    try {
      var t = window.frames.length;
      for (e = 0; e < t; e++) $rw_addEventsToFrame(window.frames[e])
    } catch (r) {}
  }
  g_nLoadCount = 0, $rw_versionCheck(), rw_initialPronunciationLoad(), g_bIgnoreHidden = !0
}

function rw_initialPronunciationLoad() {
  if (!g_bServerSupport) return void(g_nLoadCount < g_nLoadRetries && setTimeout(rw_initialPronunciationLoad, 109));
  g_bLocalPronunciationLoaded = !1;
  var e = !1;
  g_bServerSupport && "function" == typeof rw_loadPronunciationsFromServer && SpeechStream.pronunciation.fetchData() && (e = !0), e && null != g_strCustId && g_strCustId.length > 0 && null != g_strBookId && g_strBookId.length > 0 && null != g_strPageId && g_strPageId.length > 0 && (g_bPronActive = !0, m_pronDictionary.deleteAll(), rw_loadPronunciationsFromServer())
}

function $rw_tagSentencesWithFrames(e) {
  if ("undefined" == typeof e && (e = window), e.document && e.document.body && $rw_tagSentences(e.document.body), !g_bIgnoreFrames && e.frames.length > 0) {
    var t, r = e.frames.length;
    for (t = 0; t < r; t++) try {
      var n = e.frames[t];
      n.frames.length > 0 ? $rw_tagSentencesWithFrames(n.frames) : n.document && n.document.body && $rw_tagSentences(n.document.body)
    } catch (a) {}
  }
}

function $rw_tagSentences(e) {
  "undefinded" != typeof e && null != e || (e = document.body);
  try {
    var t = !1
      , r = !1;
    g_nCustId >= 200 && g_nCustId < 300 && (r = !0), g_bIsScholastic = r;
    for (var n = e; null != n;)
      if (3 == n.nodeType) {
        var a = n.parentNode.tagName.toLowerCase();
        if ("textarea" == a) {
          n = SSDOM.getNextNode(n, !1, null);
          continue
        }
        var o = n.nodeValue
          , i = o.trimSpaceTH()
          , l = i.length > 0;
        if (g_bFLVS && "a" == a && (l = !1), l) {
          if (!g_bFLVS && (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency))) {
            if (i.length < o.length) {
              var s = !1;
              i = o.trimSpaceStartTH(), o.length - i.length > 0 && (o = t ? " " + i : i, s = !0), i = o.trimSpaceEndTH(), o.length - i.length > 1 && (o = i + " ", t = !1, s = !0), s && (n.nodeValue = o)
            }
            i = o.replace(REGEX_WHITESPACE, " "), i.length < o.length && (o = i, s = !0)
          }
          var c;
          c = o.search(REGEX_TAG_SENTENCE_BREAK);
          var g = null != n.parentNode.getAttribute("texthelpSkip")
            , u = n;
          if (c > -1 && c < o.length - 1) {
            for (var _ = !0;;) {
              var d = rw_isFullStop(o, c, n);
              if (d) break;
              var h = o.substring(c + 1)
                , p = h.search(REGEX_TAG_SENTENCE_BREAK);
              if (!(p > -1)) {
                _ = !1;
                break
              }
              c = c + 1 + p
            }
            if (_) {
              var S = o.substring(0, c + 1)
                , f = o.substring(c + 1)
                , m = new THSpan;
              m.setAttribute(RWTH_PERM_GENERATED, "1");
              var b = document.createTextNode(S)
                , T = document.createTextNode(f)
                , w = n.parentNode;
              w.insertBefore(T, n), w.insertBefore(m, T), m.appendChild(b), w.removeChild(n), n = T, u = b
            } else {
              if (null != n.previousSibling || null != n.nextSibling || g) {
                var m = new THSpan;
                m.setAttribute(RWTH_PERM_GENERATED, "1");
                var b = document.createTextNode(o)
                  , w = n.parentNode;
                w.insertBefore(m, n), m.appendChild(b), w.removeChild(n), n = b
              }
              u = n, n = SSDOM.getNextNode(n, !1, null)
            }
          } else {
            if (null != n.previousSibling || null != n.nextSibling || g) {
              var m = new THSpan;
              m.setAttribute(RWTH_PERM_GENERATED, "1");
              var b = document.createTextNode(o)
                , w = n.parentNode;
              w.insertBefore(m, n), m.appendChild(b), w.removeChild(n), n = b
            }
            u = n, n = SSDOM.getNextNode(n, !1, null)
          }
          if (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency)) {
            var v = u.nodeValue
              , C = u.nodeValue.length;
            t = !(C > 0 && 32 == v.charCodeAt(C - 1))
          }
        } else if (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency))
          if (t) g_bFLVS || (n.nodeValue = " "), t = !1, n = SSDOM.getNextNode(n, !1, null);
          else {
            var y = n;
            n = SSDOM.getNextNode(n, !1, null), g_bFLVS || y.parentNode.removeChild(y)
          }
        else n = SSDOM.getNextNode(n, !1, null)
      } else if (1 == n.nodeType) {
      if (g_bPersistAnnotations && (SSDOM.isStyleNode(n) ? "img" == n.tagName.toLowerCase() && (t = !0) : SSDOM.isLineBreakNode(n) && (t = !1)), r) {
        if ("img" == n.tagName.toLowerCase()) {
          var I = n.getAttribute("title");
          null != I && I.length > 0 && n.setAttribute("msg", I)
        }
      } else if (g_bInlineImg && "img" == n.tagName.toLowerCase()) {
        var I = n.getAttribute("msg");
        null != I && I.length > 0 || (I = n.getAttribute("title"), null != I && I.length > 0 ? n.setAttribute("msg", I) : (I = n.getAttribute("alt"), null != I && I.length > 0 && n.setAttribute("msg", I)))
      }
      var E = n.getAttribute(RWTH_COMPONENT)
        , O = n.getAttribute(RWTH_DONT_ALTER);
      n = "pre" == n.tagName.toLowerCase() || null != E && E.length > 0 || null != O && O.length > 0 ? SSDOM.getNextNodeIgnoreChildren(n, !1, null) : SSDOM.getNextNode(n, !1, null)
    } else n = SSDOM.getNextNode(n, !1, null);
    if (g_bPersistAnnotations)
      for (n = e; null != n;)
        if (3 == n.nodeType) {
          var l = n.nodeValue.trimTH()
            .length > 0;
          if (l) {
            var D = n.parentNode
              , N = D.getAttribute("id");
            null != N && 0 != N.length || (D.id = "rwTHnoteMarker" + g_nIdCounter, ++g_nIdCounter)
          }
          n = SSDOM.getNextNode(n, !1, null)
        } else if (1 == n.nodeType) {
      if (rw_checkIfCanHaveStickys(n)) {
        var R = n.getAttribute("id");
        null != R && 0 != R.length || (n.id = "rwTHnoteMarker" + g_nIdCounter, ++g_nIdCounter)
      }
      var E = n.getAttribute(RWTH_COMPONENT)
        , O = n.getAttribute(RWTH_DONT_ALTER);
      n = "pre" == n.tagName.toLowerCase() || null != E && E.length > 0 || null != O && O.length > 0 ? SSDOM.getNextNodeIgnoreChildren(n, !1, null) : SSDOM.getNextNode(n, !1, null)
    } else n = SSDOM.getNextNode(n, !1, null)
  } catch (A) {
    thLog("Error in $rw_tagSentences: " + A)
  }
  g_bIELoadedFlag = !0
}

function rw_isFullStop(e, t, r) {
  var n = !0
    , a = e.length;
  if (a > t + 1) {
    var o = e.charCodeAt(t + 1);
    rw_isTextChar(o) && (n = !1), g_bMathsSymbols && 61 == o && rw_mathsSymbolCheck("!=") && null != r && "!" == r.nodeValue.charAt(t) && (n = !1)
  }
  if (n && null != r && "." != r.nodeValue.charAt(t)) return !0;
  if (n)
    if (t > 1) {
      var i = e.substring(t - 2, t);
      if ((" " == i.charAt(0) || "\n" == i.charAt(0) || "\r" == i.charAt(0) || "\t" == i.charAt(0)) && i.charCodeAt(1) > 63 && i.charCodeAt(1) < 91) n = !1;
      else if ("." == i.charAt(0) && rw_isTextChar(i.charCodeAt(1))) n = !1;
      else if ("Dr" == i || "Mr" == i || "Ms" == i || "Av" == i || "St" == i || "eg" == i) n = !1;
      else if (t > 2) {
        var l = e.substring(t - 3, t);
        if ("Mrs" == l || "etc" == l || "i.e" == l || "P.O" == l || "PhD" == l) n = !1;
        else if (t > 3) {
          var s = e.substring(t - 4, t);
          "Ph.D" == s && (n = !1)
        }
      }
    } else try {
      if (null != r && 0 == t)
        if (g_bMP) {
          var c = null;
          if (null != r.previousSibling && 1 == r.previousSibling.nodeType) c = r.previousSibling;
          else if (null != r.parentNode.previousSibling && 1 == r.parentNode.previousSibling.nodeType) c = r.parentNode.previousSibling;
          else
            for (var g = r.parentNode; null != g && "span" == g.parentNode.tagName.toLowerCase();) {
              if (null != g.parentNode.previousSibling && 1 == g.parentNode.previousSibling.nodeType) {
                c = g.parentNode.previousSibling;
                break
              }
              g = g.parentNode
            }
          if (null != c && 1 == c.nodeType && "span" == c.tagName.toLowerCase()) {
            tmpAttr = c.getAttribute("class"), tmpAttrIE = c.getAttribute("className");
            var u;
            if (u = null != tmpAttr && ("x2" == tmpAttr.toLowerCase() || "x3" == tmpAttr.toLowerCase()) || null != tmpAttrIE && ("x2" == tmpAttrIE.toLowerCase() || "x3" == tmpAttrIE.toLowerCase())) {
              if (1 == c.lastChild.nodeType)
                for (; null != c && null != c.lastChild && 3 != c.lastChild.nodeType;) c = c.lastChild;
              return null == c || 3 != c.lastChild.nodeType || c == r || rw_isFullStop(c.lastChild.nodeValue + e, c.lastChild.nodeValue.length, null)
            }
          }
        } else {
          var _ = SSDOM.getPreviousTextNode(r, !0, null);
          if (null != _ && 3 == _.nodeType && _ != r) return !!rw_isFullStop(_.nodeValue + e, _.nodeValue.length, null)
        }
    } catch (d) {}
    if (n && null != eba_abbr_array && "object" == typeof eba_abbr_array && "number" == typeof eba_abbr_array.length) {
      var h, p, S = eba_abbr_array.length;
      for (h = 0; h < S; h++)
        if (p = eba_abbr_array[h], "string" == typeof p && t - p.length > -1 && e.substring(t - p.length, t) == p) {
          n = !1;
          break
        }
    }
  return n
}

function rw_inputHandlerSFF(e) {
  g_lastInputSelectSFF = e.currentTarget
}

function addEventChecked(e, t, r) {
  if (g_bLimitIPad) {
    if (e.document && e.document.body && e.document.body.screen) return !0;
    if (e.location) return !0
  }
  return addEvent(e, t, r)
}

function addEvent(e, t, r) {
  return e.addEventListener ? (g_bChromeExtension ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1), !0) : !!e.attachEvent && e.attachEvent("on" + t, r)
}

function rw_mouseCoords(e) {
  return g_bAndroid ? {
    x: e.touches[0].pageX - document.body.scrollLeft
    , y: e.touches[0].pageY - document.body.scrollTop
  } : e.pageX ? g_bXDTDType ? {
    x: e.pageX - document.documentElement.scrollLeft
    , y: e.pageY - document.documentElement.scrollTop
  } : g_bLooseType ? {
    x: e.pageX - document.body.parentNode.scrollLeft
    , y: e.pageY - document.body.parentNode.scrollTop
  } : {
    x: e.pageX - document.body.scrollLeft
    , y: e.pageY - document.body.scrollTop
  } : {
    x: e.clientX
    , y: e.clientY
  }
}

function rw_getPosition(e) {
  var t = 0
    , r = 0;
  if ("undefined" != typeof jQuery && "string" == typeof e.id && 0 == e.id.indexOf("summary")) {
    var n = $(e);
    if (null != n && n.length && n.length > 0) {
      var a = n.position();
      return t = a.left, r = a.top, t -= rw_getScreenOffsetLeft(), r -= rw_getScreenOffsetTop(), {
        x: t
        , y: r
      }
    }
  }
  for (3 == e.nodeType && (e = e.parentNode); e.offsetParent;) t += e.offsetLeft + (e.currentStyle ? parseInt(e.currentStyle.borderLeftWidth, 10)
    .NaN0() : 0), r += e.offsetTop + (e.currentStyle ? parseInt(e.currentStyle.borderTopWidth, 10)
    .NaN0() : 0), e = e.offsetParent;
  return t += e.offsetLeft + (e.currentStyle ? parseInt(e.currentStyle.borderLeftWidth, 10)
    .NaN0() : 0), r += e.offsetTop + (e.currentStyle ? parseInt(e.currentStyle.borderTopWidth, 10)
    .NaN0() : 0), t -= rw_getScreenOffsetLeft(), r -= rw_getScreenOffsetTop(), {
    x: t
    , y: r
  }
}

function $rw_isSpeaking() {
  return g_bSpeakingFlag
}

function rw_setSpeakingModeFlag(e) {
  if (g_nTimeoutForSpeakingState > 0 && (clearTimeout(g_nTimeoutForSpeakingState), g_nTimeoutForSpeakingState = 0), $g_bMouseSpeech && (e = !0), g_bSpeechModeFlag != e) try {
    this.g_thRW4GCNamespaceInit && (texthelp.RW4GC.toolbarHandlerInstance.setSpeechState(e), texthelp.RW4GC.thToolbarStoreInstance.onSpeaking(e)), g_bSpeechModeFlag = e
  } catch (t) {
    thLogE(t)
  }
}

function rw_setSpeakerFlag(e) {
  if (null != g_strSpeakerId) {
    if (g_bSpeakerFlag == e) return;
    try {
      e ? rw_showSpeakerOnIcon("speaker" + g_strSpeakerId, "on") : (rw_showSpeakerOnIcon("speaker" + g_strSpeakerId, "off"), g_strSpeakerId = null), g_bSpeakerFlag = e
    } catch (t) {
      thLogE(t)
    }
  }
}

function rw_setSpeakingFlag(e) {
  g_bSpeakingFlag = e
}

function rw_setFlashFlag() {
  try {
    for (var e = SpeechStream.EnumIconParameter, t = 0; t < g_nIconCount; t++) {
      var r = g_icons[t][e.ICON_NAME];
      ICONS_TO_DISABLE_WITH_FLASH.indexOf(r) > -1 && rw_showAnIcon(g_icons[t][e.ICON_NAME], "flat", g_icons[t][e.ICON_OFFSET], !1)
    }
    for (var t = 0; t < g_nToggleIconCount; t++) {
      var r = g_toggleIcons[t][e.ICON_NAME];
      TOGGLE_ICONS_TO_ENABLE_WITH_FLASH.indexOf(r) > -1 && rw_showAnIcon(g_icons[t][e.ICON_NAME], "mask", g_icons[t][e.ICON_OFFSET], !0)
    }
  } catch (n) {
    thLogE(n)
  }
}

function rw_getDomObject(e) {
  return document.getElementById(e)
}

function $speechFinishedInFlash() {
  rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1), rw_setSpeakingFlag(!1)
}

function rw_waitForJQuery() {
  rw_jQVersionOK() ? $jq = jQuery.noConflict(!0) : setTimeout(rw_waitForJQuery, 250)
}

function rw_jQVersionOK() {
  var e = "undefined" != typeof jQuery;
  if (e) {
    var t = jQuery()
      .jquery.split(".");
    return parseInt(t[0]) >= 1 && parseInt(t[1]) >= 8
  }
  return !1
}

function $rw_setSpeechRangeStyle(e) {
  SSHL.dat.highlightData.strSpeechRangeColours = e
}

function $rw_setSpeechWordStyle(e) {
  SSHL.dat.highlightData.strSpeechWordColours = e
}

function $rw_getSpeechRangeStyle() {
  return SSHL.dat.highlightData.strSpeechRangeColours
}

function $rw_getSpeechWordStyle() {
  return SSHL.dat.highlightData.strSpeechWordColours
}

function rw_setHighlight(e, t, r, n, a) {
  var o = e
    , i = r;
  try {
    var l = null;
    if (r == e) l = rw_setNodeBackground(e, t, n, "ss", a), o = l.node, i = l.node;
    else {
      l = t > 0 ? rw_setNodeBackground(e, t, e.nodeValue.length, "ss", a) : rw_setNodeBackground(e, -1, -1, "ss", a), o = l.node;
      for (var s = SSHL.dom.getNextTextNodeNoImg(l.node, !1, r, !0); null != s;) {
        if (s == r) {
          l = rw_setNodeBackground(s, 0, n, "ss", a), s = l.node, i = s;
          break
        }
        l = rw_setNodeBackground(s, -1, -1, "ss", a), s = l.node, i = s, s = SSHL.dom.getNextTextNodeNoImg(s, !1, r, !0)
      }
    }
  } catch (c) {
    thLog("rw_setHighlight error:" + c.message)
  }
  return {
    start: o
    , end: i
  }
}

function rw_setHighlightForSpelling(e, t, r, n) {
  var a = "" + g_nSpellCount++
    , o = e
    , i = r;
  try {
    var l = null;
    if (r == e) l = rw_setNodeBackground(e, t, n, "spell", a), o = l.node, i = l.node;
    else {
      l = t > 0 ? rw_setNodeBackground(e, t, e.nodeValue.length, "spell", a) : rw_setNodeBackground(e, -1, -1, "spell", a), o = l.node;
      for (var s = SSHL.dom.getNextTextNodeNoImg(l.node, !1, r, !0); null != s;) {
        if (s == r) {
          l = rw_setNodeBackground(s, 0, n, "spell", a), s = l.node, i = s;
          break
        }
        l = rw_setNodeBackground(s, -1, -1, "spell", a), s = l.node, i = s, s = SSHL.dom.getNextTextNodeNoImg(s, !1, r, !0)
      }
    }
  } catch (c) {
    thLog("rw_setHighlight error:" + c.message)
  }
  return {
    start: o
    , end: i
  }
}

function rw_setHighlightForHomophones(e, t, r, n) {
  var a = "" + g_nHomCount++
    , o = e
    , i = r;
  try {
    var l = null;
    if (r == e) l = rw_setNodeBackground(e, t, n, "hom", a), o = l.node, i = l.node;
    else {
      l = t > 0 ? rw_setNodeBackground(e, t, e.nodeValue.length, "hom", a) : rw_setNodeBackground(e, -1, -1, "hom", a), o = l.node;
      for (var s = SSHL.dom.getNextTextNodeNoImg(l.node, !1, r, !0); null != s;) {
        if (s == r) {
          l = rw_setNodeBackground(s, 0, n, "hom", a), s = l.node, i = s;
          break
        }
        l = rw_setNodeBackground(s, -1, -1, "hom", a), s = l.node, i = s, s = SSHL.dom.getNextTextNodeNoImg(s, !1, r, !0)
      }
    }
  } catch (c) {
    thLog("rw_setHighlight error:" + c.message)
  }
  return {
    start: o
    , end: i
  }
}

function rw_setHighlightForGrammar(e, t, r, n) {
  var a = "" + g_nGramamrCount++
    , o = e
    , i = r;
  try {
    var l = null;
    if (r == e) l = rw_setNodeBackground(e, t, n, "grammar", a), o = l.node, i = l.node;
    else {
      l = t > 0 ? rw_setNodeBackground(e, t, e.nodeValue.length, "grammar", a) : rw_setNodeBackground(e, -1, -1, "grammar", a), o = l.node;
      for (var s = SSHL.dom.getNextTextNodeNoImg(l.node, !1, r, !0); null != s;) {
        if (s == r) {
          l = rw_setNodeBackground(s, 0, n, "grammar", a), s = l.node, i = s;
          break
        }
        l = rw_setNodeBackground(s, -1, -1, "grammar", a), s = l.node, i = s, s = SSHL.dom.getNextTextNodeNoImg(s, !1, r, !0)
      }
    }
  } catch (c) {
    thLog("rw_setHighlight error:" + c.message)
  }
  return {
    start: o
    , end: i
  }
}

function rw_removeHighlight(e) {
  try {
    if (null == e || !(e instanceof Array) || 0 == e.length) return;
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      if (rw_checkNodeIsHighlightedText(r)) {
        var n = r.parentNode;
        if (null != r.nextSibling || null != r.previousSibling) {
          var a = SSDOM.allTextFromNodeTH(n)
            , o = n.ownerDocument;
          r = o.createTextNode(a)
        }
        var i = n.parentNode;
        i.replaceChild(r, n), r = SSHL.dom.mergeTextNodes(r), e[t] = r
      } else {
        var l = rw_getNestedNodeForHighlightedText(r);
        null != l && (l.removeAttribute("rwstate"), l.removeAttribute("style"))
      }
    }
    SSDAT.controlData.bSpeakingFlag || rw_removeSpeechHighlight(e, !1)
  } catch (s) {
    thLog("Error in rw_setHighlight: " + s.message)
  }
}

function rw_checkNodeIsHighlightedText(e) {
  if (null == e.parentNode || null == e.parentNode.parentNode) return !1;
  var t = e.parentNode
    , r = t.getAttribute("rwstate");
  return t.tagName.toLowerCase() == SpeechStream.highlighter.getTagToUse() && null != r && "csp" != r && "sp" != r || ("thspell" == t.className || t.className == SpeechStream.highlighter.getHomClass() || "thgrammar" == t.className)
}

function rw_getNestedNodeForHighlightedText(e) {
  if (3 != e.nodeType || null == e.parentNode || null == e.parentNode.parentNode) return null;
  var t = SpeechStream.highlighter.getTagToUse()
    , r = e.parentNode
    , n = r.getAttribute("rwstate");
  if (r.tagName.toLowerCase() != t || null == n || "ss" != n) {
    if (null != r.getAttribute("rwthgen")) {
      var a = r;
      for (n = "1"; null != n;) {
        if (a = a.parentNode, "ss" == a.getAttribute("rwState") && a.tagName.toLowerCase() == t) return a;
        n = a.getAttribute("rwthgen")
      }
    }
    return null
  }
  return r
}

function rw_removeHighlightLang(e) {
  try {
    if (null == e || !(e instanceof Array) || 0 == e.length) return;
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      if (null != r)
        if (rw_checkNodeIsHighlightedText(r)) {
          var n = r.parentNode
            , a = n.parentNode;
          if (null != r.nextSibling || null != r.previousSibling) {
            for (var o = n.firstChild; null != o;) r = o, o = o.nextSibling, a.insertBefore(r, n);
            a.removeChild(n)
          } else a.replaceChild(r, n)
        } else {
          var i = rw_getNestedNodeForHighlightedText(r);
          null != i && (i.removeAttribute("rwstate"), i.removeAttribute("style"))
        }
    }
  } catch (l) {
    thLog("Error in rw_setHighlight: " + l.message)
  }
}

function rw_removeSpeechHighlight(e, t) {
  try {
    if ("undefined" == typeof t && (t = !1), null == e || !(e instanceof Array) || 0 == e.length) return;
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      if (rw_checkNodeIsSpeechText(n, t)) {
        var a = n.parentNode;
        if (null != n.nextSibling || null != n.previousSibling) {
          var o = SSDOM.allTextFromNodeTH(a)
            , i = a.ownerDocument;
          n = i.createTextNode(o)
        }
        var l = a.parentNode;
        l.replaceChild(n, a), n = SSDOM.mergeTextNodes(n), e[r] = n, rw_checkNodeIsSpeechText(n, t) && --r
      } else {
        var s = "";
        1 == n.nodeType && (s = n.tagName.toLowerCase()), "math" == s && rw_highlightMathElement(n, null, null, !1), n.isMathJax && rw_highlightMathElement(n, null, null, !1)
      }
    }
  } catch (c) {
    thLog("rw_removeSpeechHighlight failed error:" + c.message)
  }
}

function rw_checkNodeIsSpeechText(e, t) {
  if (3 != e.nodeType || null == e.parentNode || null == e.parentNode.parentNode) return !1;
  var r = e.parentNode
    , n = r.getAttribute("rwstate");
  return r.tagName.toLowerCase() == SpeechStream.highlighter.getTagToUse() && null != n && (!t && "sp" == n || "csp" == n)
}

function rw_setSpeechRangeImpl(e, t, r, n, a) {
  var o = null;
  try {
    if (r == e) return o = rw_setNodeBackground(e, t, n, a, "");
    o = t > 0 ? rw_setNodeBackground(e, t, e.nodeValue.length, a, "") : rw_setNodeBackground(e, -1, -1, a, "");
    for (var i = SSHL.dom.getNextTextNodeNoImg(o.node, !1, r, !0); null != i;) {
      if (i == r) {
        o = rw_setNodeBackground(i, 0, n, a, ""), i = o.node;
        break
      }
      o = rw_setNodeBackground(i, -1, -1, a, ""), i = o.node, i = SSHL.dom.getNextTextNodeNoImg(i, !1, r, !0)
    }
  } catch (l) {
    thLog("rw_setSpeechRangeImpl error:" + l.message)
  }
  return o
}

function THReturnObject() {
  this.node = null, this.offset = 0
}

function rw_setNodeBackground(e, t, r, n, a) {
  var o = new THReturnObject;
  if (o.node = e, o.offset = t, 3 != e.nodeType) {
    if (1 == e.nodeType && SSHL.dom.isSpecialCaseHighlightable(e)) {
      if ("math" == e.tagName.toLowerCase()) {
        var i = e.parentNode;
        o = rw_setNodeBackgroundImpl(i, e, t, r, n, "")
      } else if (e.isMathJax) {
        var i = e.parentNode;
        o = rw_setNodeBackgroundImpl(i, e, t, r, n, "")
      } else {
        var l = SSHL.dom.getFirstChildTextNode(e, !1)
          , s = SSHL.dom.getLastChildTextNode(e, !1);
        null != l && 3 == l.nodeType && null != s && 3 == s.nodeType && (rw_setSpeechRangeImpl(l, 0, s, s.nodeValue.length, n), o.node = l, o.offset = 0)
      }
      return o
    }
    return o
  }
  if (3 == e.nodeType) {
    var c = e.nodeValue;
    if (c = c.trimTH(), 0 == c.length) {
      var g = e.parentNode;
      if (null != g) {
        var u = g.tagName.trimTH()
          .toLowerCase();
        if ("tr" == u || "table" == u) return o
      }
    }
  }
  var i = e.parentNode
    , _ = null;
  if (i.tagName.toLowerCase() == SpeechStream.highlighter.getTagToUse() && (_ = i.getAttribute("rwstate")), "spell" == n) {
    if (null != _ && "" != _) return o;
    o = rw_setNodeBackgroundImpl(i, e, t, r, n, a)
  } else if ("hom" == n) {
    if (null != _ && "" != _) return o;
    o = rw_setNodeBackgroundImpl(i, e, t, r, n, a)
  } else if ("grammar" == n) {
    if (null != _ && "" != _) return o;
    o = rw_setNodeBackgroundImpl(i, e, t, r, n, a)
  } else if ("ss" == n) {
    if (null != _ && "" != _) return "ss" == _ ? o : o;
    o = rw_setNodeBackgroundImpl(i, e, t, r, n, a)
  } else if ("sp" == n) {
    if ("csp" == _) return thLog("fail in rw_setNodeBackground setting sp to csp"), o;
    if ("sp" == _) return thLog("fail in rw_setNodeBackground setting sp to sp"), o;
    o = rw_setNodeBackgroundImpl(i, e, t, r, n, "")
  } else if ("csp" == n) {
    if ("csp" == _) return thLog("fail parent is csp for csp"), o;
    "sp" == _ && (o = rw_setNodeBackgroundImpl(i, e, t, r, n, ""))
  }
  return o
}

function rw_setNodeBackgroundImpl(e, t, r, n, a, o) {
  var i = "sp" === a || "csp" === a
    , l = "";
  if (1 == t.nodeType && (l = t.tagName.toLowerCase()), 3 == t.nodeType && (n == -1 || n > r) || "math" == l || t.isMathJax) {
    var s;
    if (s = "ss" == a ? "strikethrough" == o ? "text-decoration:line-through" : "background:" + o : "sp" == a ? SSHL.dat.highlightData.strSpeechRangeColours : "csp" == a ? SSHL.dat.highlightData.strSpeechWordColours : "spell" == a ? "" : "hom" == a ? "" : "grammar" == a ? "" : "color:#ff000; background:#00ff00", "math" == l || t.isMathJax) i && rw_highlightMathElement(t, a, s, !0);
    else {
      var c = t.nodeValue.length;
      if (1 == c && ("\n" == t.nodeValue || "\r" == t.nodeValue) || 2 == c && "\r\n" == t.nodeValue) {
        var g = new THReturnObject;
        return g.node = t, r < 0 ? g.offset = 0 : g.offset = r, g
      }
      var u = e.ownerDocument
        , _ = !1;
      r == -1 && n == -1 ? _ = !0 : n == -1 && (n = c), 0 == r && n >= c && (_ = !0);
      var d = u.createElement(SSDAT.pageData.strHighlightTag);
      if ("spell" == a && (d.setAttribute("spellnum", o), SSHL.dat.browser.bIE ? (d.setAttribute("className", "thspell"), s = 'background:url("' + rw_getHTTPText(!1) + eba_language_server + '/SupportedWritingArea/files/tiny_mce/themes/advanced/skins/default/img/wline.gif")  repeat-x bottom left') : d.className = "thspell"), "hom" == a) {
        var h = SpeechStream.highlighter.getHomClass();
        d.setAttribute("homnum", o), SSHL.dat.browser.bIE ? (d.setAttribute("className", h), s = 'background:url("' + rw_getHTTPText(!1) + eba_language_server + '/SupportedWritingArea/files/tiny_mce/themes/advanced/skins/default/img/wlineblue.gif")  repeat-x bottom left') : d.className = h
      }
      if ("grammar" == a) {
        var h = "thgrammar";
        d.setAttribute("grammarnum", o), SSHL.dat.browser.bIE ? (d.setAttribute("className", "thgrammar"), s = 'background:url("' + rw_getHTTPText(!1) + eba_language_server + '/SupportedWritingArea/files/tiny_mce/themes/advanced/skins/default/img/wlinegreen.gif")  repeat-x bottom left') : d.className = h
      }
      if (_) SSHL.dat.browser.bIEOld ? d.style.setAttribute("cssText", s, 0) : d.setAttribute("style", s), d.setAttribute("rwstate", a), i && d.setAttribute("started", "1"), e.replaceChild(d, t), d.appendChild(t);
      else {
        var p, S, f, m = t.nodeValue;
        "span" == e.tagName.toLowerCase() && null != e.getAttribute("pron") ? (p = "", S = m, f = "") : (p = m.substring(0, r), S = m.substring(r, n), f = m.substring(n)), SSHL.dat.browser.bIEOld ? d.style.setAttribute("cssText", s, 0) : d.setAttribute("style", s), d.setAttribute("rwstate", a), i && d.setAttribute("started", "1");
        var b, T = null
          , w = null;
        p.length > 0 && (T = u.createTextNode(p)), b = u.createTextNode(S), f.length > 0 && (w = u.createTextNode(f)), d.appendChild(b), e.replaceChild(d, t), null != T && e.insertBefore(T, d), null != w && (null == d.nextSibling ? e.insertBefore(w, null) : e.insertBefore(w, d.nextSibling)), t = b
      }
    }
  }
  var g = new THReturnObject;
  return g.node = t, r < 0 ? g.offset = 0 : g.offset = r, g
}

function rw_highlightMathElement(e, t, r, n) {
  if (null != e) {
    var a = SSDAT.pageData.strHighlightTag;
    if (SSHL.dat.browser.bIE) {
      var o = e.parentNode;
      if (null == o) return;
      if (o.tagName.toLowerCase() == a && null != o.getAttribute("started"))
        if (n) o.style.setAttribute("cssText", r, 0), o.setAttribute("rwstate", t);
        else {
          var i = o.parentNode;
          if (null == i) return;
          i.replaceChild(e, o)
        }
      else if (n) {
        var l = document.createElement(a);
        l.style.setAttribute("cssText", r, 0), l.setAttribute("started", "1"), l.setAttribute("rwstate", t), o.replaceChild(l, e), l.appendChild(e)
      }
    } else
      for (var s = e.firstChild; null != s;) 1 == s.nodeType && (n ? null != s.getAttribute("started") ? (s.setAttribute("style", r), s.setAttribute("rwstate", t)) : null == s.getAttribute("style") && (s.setAttribute("style", r), s.setAttribute("rwstate", t), s.setAttribute("started", "1")) : null != s.getAttribute("started") && (s.removeAttribute("style"), s.removeAttribute("started"), s.removeAttribute("rwstate"))), s = s.nextSibling
  }
}

function rw_whichNodeFirst(e, t) {
  if (e == t) return 0;
  var r = SSDOM.getRangeObject(e.ownerDocument.body);
  r.setStart(e, 0), r.setEnd(e, 0);
  var n = SSDOM.getRangeObject(e.ownerDocument.body);
  return n.setStart(t, 0), n.setEnd(t, 0), r.compareBoundaryPoints("START_TO_START", n)
}

function rw_hotkeysEvent(e) {}

function rw_mousedownEvent(e) {
  if (SSDAT.controlData.bOnloadFinished) {
    var t = e.target || e.srcElement;
    return "rwDragMe" == t.id || "rwToolbarTitleRW" == t.id || "rwDragMeDisplay" == t.id || "rwDragMeTrans" == t.id || "rwDragMeFF" == t.id || "rwDragMeDict" == t.id || "rwDragMeCollect" == t.id || "rwDragMeStickyNoteTop" == t.id || "rwDragMeStickyNoteBot" == t.id || "rwDragMePronCreate" == t.id || "rwDragMePronEdit" == t.id || "rwDragMeCal" == t.id || "rwDragMePictureDictionary" == t.id || "rwDragMeRec" == t.id || "rwDragMePrediction" == t.id || "rwDragMeSpelling" == t.id || "rwDragMeHomophone" == t.id || "rwDragMeGrammar" == t.id ? (g_rwDragElement = t, g_bDragging = !0, g_bChromeExtension && (g_rwDragElement.parentElement.parentElement.style.opacity = .5, g_rwDragElement.parentElement.style.opacity = .5), g_rwDragElement.setCapture && g_rwDragElement.setCapture(!0), g_aStartElemPos = rw_getPosition(g_rwDragElement), "rwDragMeStickyNoteBot" == t.id && (g_aStartElemPos.y -= t.offsetTop), g_aStartMousePos = rw_mouseCoords(e), !1) : void 0
  }
}

function rw_mousedownEventIpad(e) {
  SpeechStream.ipadUtils.tinyMceBlurFix(), rw_mousedownEvent(e)
}

function rw_dragEvent(e) {
  if (SSDAT.controlData.bOnloadFinished) {
    var t = e.target || e.srcElement;
    return "IMG" == t.tagName && "rwIcon" == t.className ? (rw_blockEvents(e), !1) : void 0
  }
}

function rw_dragEventIpad(e) {
  SpeechStream.ipadUtils.tinyMceBlurFix(), rw_dragEvent(e)
}

function rw_mouseDialogclickEvent(e) {}

function rw_mouseclickEvent(e) {
  if (SSDAT.controlData.bOnloadFinished) {
    var t = (new Date)
      .getTime();
    if (!(t - g_bMouseClickTime < g_nClickRejectTime || (g_bMouseClickTime = t, null == e || g_bDragging))) {
      if ($g_bMouseSpeech && g_bOnClick) rw_mouseStartSpeech(e);
      else {
        var r = rw_getTHCaretFromMouseEvent(e, g_bOnClick);
        null !== r && (findAncestorByClass(r.node.parentElement, "rwDictPanel") || findAncestorByClass(r.node.parentElement, "rwTransPanel") || findAncestorByClass(r.node.parentElement, "rwPicDictPanel")) && $rw_speakFromElement(r.node.parentElement)
      }
      g_bSticky && rw_createStickyNote(e)
    }
  }
}

function waitSeconds(e) {
  for (var t = 0, r = (new Date)
      .getTime(), n = 0; t < e;) n = (new Date)
    .getTime(), t = n - r
}

function PositionDictPredPopup(e) {
  var t = e
    , r = (getComputedStyle(t)
      .getPropertyValue("font-size"), document.getElementById("rwGooglePredictionResponseDetails"));
  e.style.top = r.style.top, e.style.left = parseInt(r.style.left, 10) + parseInt(r.offsetWidth, 10) + "px", rwGooglePredictionDictionaryDetails.style.display = "block"
}

function rw_mouseoverEvent(e) {
  SSDAT.controlData.bOnloadFinished && null != e && (g_bDragging || g_bSafari && ($g_bMouseSpeech && !g_bOnClick ? rw_mouseStartSpeech(e) : SSDAT.bubbleData.bBubbleMode ? SpeechStream.bubbleSpeech.mouseHoverBubblePopup(e) : (g_nIcons & calculator_icon) == calculator_icon && "function" == typeof rw_calSpeechOn && rw_calSpeechOn() && rw_isCalcButton(e) && rw_mouseStartSpeech(e, !0)))
}

function rw_mousemoveEvent(e) {
  if (SSDAT.controlData.bOnloadFinished) {
    if (null == e) return !0;
    if (g_bIE) {
      var t = e.clientX
        , r = e.clientY;
      if (g_nCurMoveX == t && g_nCurMoveY == r) return;
      g_nCurMoveX = t, g_nCurMoveY = r
    }
    if (null == g_rwDragElement) return $g_bMouseSpeech && (g_bFireFox || g_bIE) && !g_bOnClick ? rw_mouseStartSpeech(e) : SSDAT.bubbleData.bBubbleMode ? SpeechStream.bubbleSpeech.mouseHoverBubblePopup(e) : (g_nIcons & calculator_icon) == calculator_icon && "function" == typeof rw_calSpeechOn && rw_calSpeechOn() && (g_bFireFox || g_bIE) && rw_isCalcButton(e) && rw_mouseStartSpeech(e, !0), g_bDragging = !1, !0;
    var n = rw_mouseCoords(e);
    if (!g_bIpadFrames && (n.x < 0 || n.y < 0 || n.x > rw_getDocumentDisplayWidth() || n.y > rw_getDocumentDisplayHeight())) return rw_blockEvents(e), !1;
    var a, o, i = !1
      , l = 1;
    if (g_bIE && !g_bXDTDType && g_bIEBackCompat) {
      var s = document.body.offsetWidth
        , c = document.documentElement.offsetWidth;
      l = s / c, (l > 1.05 || l < 99.5) && (i = !0)
    }
    if (i && !g_bIpadFrames) {
      var g = l * g_aStartMousePos.x - g_aStartElemPos.x
        , u = l * g_aStartMousePos.y - g_aStartElemPos.y;
      a = (l * n.x - g) / l, o = (l * n.y - u) / l
    } else {
      var g = g_aStartMousePos.x - g_aStartElemPos.x
        , u = g_aStartMousePos.y - g_aStartElemPos.y;
      a = n.x - g, o = n.y - u
    }
    if (null != g_rwDragElement) {
      if ("rwDragMe" == g_rwDragElement.id || "rwToolbarTitleRW" == g_rwDragElement.id) rw_setBarPercent(a, o), g_bIpadFrames || a + g_nBarWidth + g_nDragMargin > rw_getDocumentDisplayWidthAdjusted() && (a = rw_getDocumentDisplayWidthAdjusted() - g_nBarWidth - g_nDragMargin, g_fBarPosX = 1), a < g_nDragMargin && (a = g_nDragMargin, g_fBarPosX = 0), g_bIpadFrames || o + g_nBarHeight + g_nDragMargin > rw_getDocumentDisplayHeightAdjusted() && (o = rw_getDisplayHeightAdjusted() - g_nBarHeight - g_nDragMargin, g_fBarPosY = 1), o < g_nDragMargin && (o = g_nDragMargin, g_fBarPosY = 0), rw_positionToolbar(), rw_blockEvents(e);
      else if ("rwDragMeTrans" == g_rwDragElement.id || "rwDragMeFF" == g_rwDragElement.id || "rwDragMeDict" == g_rwDragElement.id || "rwDragMeDisplay" == g_rwDragElement.id || "rwDragMeCollect" == g_rwDragElement.id || "rwDragMeStickyNoteTop" == g_rwDragElement.id || "rwDragMeStickyNoteBot" == g_rwDragElement.id || "rwDragMePronCreate" == g_rwDragElement.id || "rwDragMePronEdit" == g_rwDragElement.id || "rwDragMeCal" == g_rwDragElement.id || "rwDragMeGencache" == g_rwDragElement.id || "rwDragMeCheckcache" == g_rwDragElement.id || "rwDragMePictureDictionary" == g_rwDragElement.id || "rwDragMeRec" == g_rwDragElement.id || "rwDragMePrediction" == g_rwDragElement.id || "rwDragMeSpelling" == g_rwDragElement.id || "rwDragMeHomophone" == g_rwDragElement.id || "rwDragMeGrammar" == g_rwDragElement.id) {
        var _;
        _ = "rwDragMeDisplay" == g_rwDragElement.id ? POPUP_DISPLAY : "rwDragMeTrans" == g_rwDragElement.id ? POPUP_TRANSLATOR : "rwDragMeFF" == g_rwDragElement.id ? POPUP_FF : "rwDragMeDict" == g_rwDragElement.id ? POPUP_DICTIONARY : "rwDragMeStickyNoteTop" == g_rwDragElement.id ? POPUP_STICKYNOTE : "rwDragMeStickyNoteBot" == g_rwDragElement.id ? POPUP_STICKYNOTE : "rwDragMePronCreate" == g_rwDragElement.id ? POPUP_PRON_CREATE : "rwDragMePronEdit" == g_rwDragElement.id ? POPUP_PRON_EDIT : "rwDragMeCal" == g_rwDragElement.id ? POPUP_CALCULATOR : "rwDragMeGencache" == g_rwDragElement.id ? POPUP_GENERATE_CACHE : "rwDragMeCache" == g_rwDragElement.id ? POPUP_CHECK_CACHE : "rwDragMePictureDictionary" == g_rwDragElement.id ? POPUP_PICTUREDICTIONARY : "rwDragMeRec" == g_rwDragElement.id ? POPUP_SPEECH_RECORDER : "rwDragMePrediction" == g_rwDragElement.id ? POPUP_PREDICTION : "rwDragMeSpelling" == g_rwDragElement.id ? POPUP_SPELLING : "rwDragMeHomophone" == g_rwDragElement.id ? POPUP_HOMOPHONE : "rwDragMeGrammar" == g_rwDragElement.id ? POPUP_GRAMMAR : POPUP_COLLECT, rw_setDivPercent(_, a, o), a + g_anDivWidth[_] + g_nDragMargin > rw_getDocumentDisplayWidthAdjusted() && (a = rw_getDocumentDisplayWidthAdjusted() - g_anDivWidth[_] - g_nDragMargin, g_afDivPosX[_] = 1), a < g_nDragMargin && (a = g_nDragMargin, g_afDivPosX[_] = 0), g_bIpadFrames || o + g_anDivHeight[_] + g_nDragMargin > rw_getDocumentDisplayHeightAdjusted() && (o = rw_getDocumentDisplayHeightAdjusted() - g_anDivHeight[_] - g_nDragMargin, g_afDivPosY[_] = 1), o < g_nDragMargin && (o = g_nDragMargin, g_afDivPosY[_] = 0), rw_positionDivBar(_), rw_blockEvents(e)
      }
      return !1
    }
  }
}

function rw_mousemoveEventIpad(e) {
  SpeechStream.ipadUtils.tinyMceBlurFix(), rw_mousemoveEvent(e)
}

function rw_isCalcButton(e) {
  var t;
  if (t = g_bFireFox ? e.explicitOriginalTarget : g_bIE ? e.srcElement : e.target, null != t && 1 == t.nodeType) {
    var r = t.ownerDocument.body;
    if (t != r) {
      var n = t.parentNode;
      if ("string" == typeof n.tagName)
        for (; null != n && n != r;) {
          var a = n.tagName.toLowerCase();
          if ("form" == a && "rw_calForm" == n.id) return !0;
          n = n.parentNode
        }
    }
  }
  return !1
}

function rw_mouseupEvent(e) {
  if (SSDAT.controlData.bOnloadFinished) return !g_bDragging || (g_rwDragElement.releaseCapture && g_rwDragElement.releaseCapture(), g_bChromeExtension && (g_rwDragElement.parentElement.parentElement.style.opacity = 1, g_rwDragElement.parentElement.style.opacity = 1), g_rwDragElement = null, g_bDragging = !1, g_bChromeExtension && window.postMessage({
    type: "1757FROM_PAGERW4G"
    , command: "saveCookiePosition"
    , cookiex: g_afDivPosX
    , cookiey: g_afDivPosY
    , cookieBarx: g_fBarPosX
    , cookieBary: g_fBarPosY
  }, "*"), rw_blockEvents(e), !1)
}

function rw_mouseupEventIpad(e) {
  SpeechStream.ipadUtils.tinyMceBlurFix(), rw_mouseupEvent(e)
}

function rw_mouseoutEvent(e) {
  if (SSDAT.controlData.bOnloadFinished)
    if (g_bDragging) {
      if (g_bFireFox) {
        var t = rw_mouseCoords(e);
        if (t.x < 5 || t.y < 5 || t.x > rw_getDocumentDisplayWidth() - 5 || t.y > rw_getDocumentDisplayHeight() - 5) return rw_mouseupEvent(e), void rw_blockEvents(e)
      }
      rw_mousemoveEvent(e), rw_blockEvents(e)
    } else g_bOnClick || (g_hoverTarget = null)
}

function rw_blockEvents(e) {
  null != e && (e.cancelBubble ? e.cancelBubble = !0 : e.stopPropagation && e.stopPropagation(), e.returnValue ? e.returnValue = !1 : e.preventDefault && e.preventDefault(!0))
}

function rw_mouseOverIcon(e, t, r) {
  return g_nBlockNextChange > 0 ? void--g_nBlockNextChange : void(g_bDragging || $rw_blockClick(e) || rw_showAnIcon(g_icons[t][SpeechStream.EnumIconParameter.ICON_NAME], "hover", g_icons[t][SpeechStream.EnumIconParameter.ICON_OFFSET], r))
}

function rw_mouseOffIcon(e, t, r) {
  return g_nBlockNextChange > 0 ? void--g_nBlockNextChange : void(g_bDragging || $rw_blockClick(e) || rw_showAnIcon(g_icons[t][SpeechStream.EnumIconParameter.ICON_NAME], "flat", g_icons[t][SpeechStream.EnumIconParameter.ICON_OFFSET], r))
}

function rw_press(e, t, r) {
  g_bChromeExtension && window.postMessage({
    type: "1757FROM_PAGERW4G"
    , command: "trackEvent"
    , settings: {
      category: "FromWebReader"
      , action: "WebReader " + e
      , label: window.location.host
    }
  }, "*")
}

function $rw_blockClick(e) {
  return ICONS_TO_DISABLE_LICENSE.indexOf(e) > -1 || (!!(g_bSpeechModeFlag && ICONS_TO_DISABLE.indexOf(e) > -1) || (TOGGLE_ICONS_TO_ENABLE_WITH_FLASH.indexOf(e) > -1 || !(!g_bDisableSpeech || "play" != e && "funplay" != e && "hover" != e)))
}

function rw_onload() {
  if (g_bPersistAnnotations && (!g_bSSLoaded || !g_bStickyLoaded)) return void setTimeout(rw_onload, 100);
  if (g_bUseBar && (!g_bLimitCookies || !g_bIE6 && !g_bIE7)) {
    var e = rw_getCookie("rwebooks-x")
      , t = rw_getCookie("rwebooks-y");
    null != e && null != t && "NaN" != e && "NaN" != t && (g_fBarPosX = parseFloat(e), g_fBarPosY = parseFloat(t))
  }
  var r, n, a = !1
    , o = g_afDivPosX.length;
  if (!g_bUseBar || g_bLimitCookies && (g_bIE6 || g_bIE7)) a = !0;
  else
    for (var i = 0; i < o; i++) r = rw_getCookie("rwebooks-div" + i + "x"), null != r && (g_afDivPosX[i] = parseFloat(r)), n = rw_getCookie("rwebooks-div" + i + "y"), null != n && (g_afDivPosY[i] = parseFloat(n)), i == POPUP_STICKYNOTE && null == r && null == n && (a = !0);
  if (a && (g_afDivPosX[POPUP_STICKYNOTE] = .45, g_bTouchScreen ? g_afDivPosY[POPUP_STICKYNOTE] = 0 : g_afDivPosY[POPUP_STICKYNOTE] = .35), $rw_pageSetup(), g_bPersistAnnotations && ("*" != g_strPersistHighlightEditorId && "undefined" != typeof rw_retrieveHighlightDataForPKT ? rw_retrieveHighlightDataForPKT() : "*" != g_strPersistNoteEditorId && "undefined" != typeof rw_unserialiseStickyNotes && rw_unserialiseStickyNotes()), g_bIE) {
    var l = document.createTextNode(" ");
    document.body.appendChild(l)
  }
  if (g_bSpeechCacheGenerateFlag && g_bAutoCachePage && $rw_cachePage(null, null), SSDAT.bubbleData.bBubbleMode) {
    if (g_bProquest) {
      var s = SSDOM.createObject("script", ["type", "text/javascript", "src", SSDAT.paths.strFileLoc + "texthelpBubble.js"]);
      SSDAT.pageData.placeholder.appendChild(s)
    }
    SSDAT.bubbleData.bBubbleModeStartDisabled && (SSDAT.bubbleData.bBubbleMode = !1)
  }
  g_bSpeechStreamAutoCache && setTimeout($rw_event_generate_cache, 1e3), g_bSpeechStreamAutoCacheCheck && setTimeout($rw_event_check_cache, 1e3), SSDAT.controlData.bOnloadFinished = !0, "function" == typeof $rw_toolbarLoadedCallback && $rw_toolbarLoadedCallback()
}

function $rw_setLanguage(e) {
  void 0 != textHelp.webreader.LocaleSingleton && null != textHelp.webreader.LocaleSingleton.getInst() && (void 0 != e && (thUILanguage = e), rw_setLang(), textHelp.webreader.LocaleSingleton.getInst()
    .changeLanguage(e))
}

function $rw_onUISettingsLanguageChanged(e) {
  $rw_updateUILanguage()
}

function rw_beforeUnload() {
  if ("undefined" != typeof rw_serialiseStickyNotes && g_bPersistAnnotations && "undefined" != typeof g_nStickyNoteOpened && g_nStickyNoteOpened > -1 && rw_closeStickyNote(g_nStickyNoteOpened), g_bUseBar && (!g_bLimitCookies || !g_bIE6 && !g_bIE7)) {
    rw_setCookie("rwebooks-x", g_fBarPosX, 20, "/", window.location.host), rw_setCookie("rwebooks-y", g_fBarPosY, 20, "/", window.location.host);
    for (var e = g_afDivPosX.length, t = 0; t < e; t++) rw_setCookie("rwebooks-div" + t + "x", g_afDivPosX[t], 20, "/", window.location.host), rw_setCookie("rwebooks-div" + t + "y", g_afDivPosY[t], 20, "/", window.location.host)
  }
}

function rw_triggerEndOfPage() {
  g_bReachedEnd = !0, rw_pageCompleteCallBack()
}

function $rw_clearInstructionQueue() {
  g_astrSpeechInstructionQueue.length = 0
}

function rw_clearQueueOfSpeech() {
  if (null != g_astrSpeechInstructionQueue) {
    var e;
    for (e = 0; e < g_astrSpeechInstructionQueue.length; e++)
      if ("string" == typeof g_astrSpeechInstructionQueue[e]) {
        if (g_astrSpeechInstructionQueue[e].indexOf("$rw_readNextTarget") > -1) {
          g_astrSpeechInstructionQueue.length = e;
          break
        }
      } else "function" == typeof g_astrSpeechInstructionQueue[e] && g_astrSpeechInstructionQueue[e] == rw_triggerEndOfPage && (g_astrSpeechInstructionQueue[e] = "")
  }
}

function rw_setupContinuousReading(e) {
  var t, r, n = e.range;
  if (null != n) r = n.body, t = SSDOM.getCaretPairFromDomPosition(r, n.startRef.path, n.startRef.offset, n.endRef.path, n.endRef.offset);
  else {
    if (null == e.body || null == e.path) return void g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()");
    r = e.body;
    var a = new THCaret(SSDOM.getNodeFromPosition(r, e.path), 0, (!0));
    t = new THCaretRange(a, a)
  }
  SSDAT.controlData.bIgnoreSkipSection = !0;
  var o = null
    , i = !1;
  if (null != e.jumpId) {
    var l = t.rightCaret.node.ownerDocument.getElementById(e.jumpId);
    if (null != l && (o = SSDOM.getSentenceFromPoint(new THCaret(l, 0, (!0))), i = !0, null == o)) return void(SSDAT.controlData.bIgnoreSkipSection = !1)
  }
  if (null == o) {
    var o = SSDOM.getNextSentence(t);
    if (null == o) return g_astrSpeechInstructionQueue.push(rw_triggerEndOfPage), void(SSDAT.controlData.bIgnoreSkipSection = !1)
  }
  for (; !rw_caretRangeIsSpeakable(o);)
    if (o = SSDOM.getNextSentence(o), null == o) return g_astrSpeechInstructionQueue.push(rw_triggerEndOfPage), void(SSDAT.controlData.bIgnoreSkipSection = !1);
  SSDAT.controlData.bIgnoreSkipSection = !1;
  var s = new THHoverTarget(null, null, rw_getTHRangeFromTHCaretRange(o));
  s.prepareTextForSpeech();
  var c = s.getCaretRange();
  if (c.equals(o) || (o = c), rw_checkForEndContinuousFlag(t.leftCaret.node, o.rightCaret.node) && !i) return void g_astrSpeechInstructionQueue.push(rw_triggerEndOfPage);
  if (g_bReachedEnd = !1, SSDAT.bubbleData.bBubbleMode) {
    var g = SSDOM.getStartOfParagraph(o.leftCaret.node);
    o.leftCaret.node = g, o.rightCaret.node = SSDOM.getEndOfParagraph(o.rightCaret.node), o.leftCaret.offset = 0, 1 == o.rightCaret.node.nodeType ? o.rightCaret.offset = 0 : o.rightCaret.offset = o.rightCaret.node.length
  }
  var u = new THRange(r, rw_getRefPt(o.leftCaret.node, o.leftCaret.offset), rw_getRefPt(o.rightCaret.node, o.rightCaret.offset));
  g_nextTargetForContinuousReading = new THHoverTarget(null, null, u);
  var _ = g_nextTargetForContinuousReading.getTextPreparedForSpeech();
  return null == _ || 0 == _.length ? void g_astrSpeechInstructionQueue.push(rw_triggerEndOfPage) : void g_astrSpeechInstructionQueue.push("setTimeout($rw_readNextTarget, 100);")
}

function rw_doInstructions(p_array) {
  for (; p_array.length > 0;) {
    var instruction = p_array.shift();
    try {
      "function" == typeof instruction ? instruction() : "string" == typeof instruction && eval(instruction)
    } catch (err) {
      thLogE(err.message)
    }
  }
}

function THSpeech() {
  this.txt = "", this.txtOrig = "", this.voice = null, this.caretRange = null
}

function rw_getVoiceSetForNode(e) {
  return rw_mapLangToVoice(rw_getLangAttr(e))
}

function rw_getVoiceSetForCurrentNode(e) {
  if (null != e && 1 == e.nodeType) {
    var t = e.getAttribute("lang");
    if (null != t) return rw_mapLangToVoice(t);
    try {
      if (t = e.getAttribute("xml:lang"), null != t) return rw_mapLangToVoice(t)
    } catch (r) {}
  }
  return null
}

function rw_getLangAttr(e) {
  for (var t = e; null != t;) {
    if (1 == t.nodeType) {
      var r = t.getAttribute("lang");
      if (null != r && r.length > 0) return r;
      try {
        if (r = t.getAttribute("xml:lang"), null != r && r.length > 0) return r
      } catch (n) {}
    }
    t = t.parentNode
  }
  return null
}

function rw_checkForVoiceChange(e, t, r) {
  var n = e;
  for (n = SSDOM.getNextNodeAllowMoveToChild(n, !1, t); null != n;) {
    var a = rw_getVoiceSetForNode(n);
    if (a != r) {
      var o = SSDOM.getPreviousTextNodeNoBlank(n, !1, e);
      if (null == o && (o = SSDOM.getPreviousTextNode(n, !1, e), null == o)) return null;
      if (3 == o.nodeType) return new THCaret(o, o.nodeValue.length, (!1));
      var i = new THCaret(o, 0, (!0));
      return i.setSpecialCase(!0), i
    }
    n = SSDOM.getNextNode(n, !1, t)
  }
  return null
}

function rw_checkForVoiceChangeRightToLeft(e, t, r) {
  var n = t;
  for (n = SSDOM.getPreviousNode(n, !1, e); null != n;) {
    var a = rw_getVoiceSetForNode(n);
    if (a != r) {
      var o = SSDOM.getNextTextNodeNoBlank(n, !1, t);
      if (null != o) {
        if (3 == o.nodeType) return new THCaret(o, 0, (!1));
        var i = new THCaret(o, 0, (!1));
        return i.setSpecialCase(!0), i
      }
      return null
    }
    n = SSDOM.getPreviousNode(n, !1, e)
  }
  return null
}

function rw_checkForCommandChange(e, t, r) {
  var n = e;
  for (n = SSDOM.getNextNodeAllowMoveToChild(n, !1, t); null != n;) {
    var a = rw_findCommandNode(n);
    if (a != r) {
      var o = SSDOM.getPreviousTextNodeNoBlank(n, !1, e);
      return null == o && (o = SSDOM.getPreviousTextNode(n, !1, e), null == o) ? null : 3 == o.nodeType ? new THCaret(o, o.nodeValue.length, (!1)) : new THCaret(o, 0, (!0))
    }
    n = SSDOM.getNextNode(n, !1, t)
  }
  return null
}

function rw_mapLangToVoice(e) {
  if (null != e) {
    var t, r = e.toLowerCase();
    if ("en" == r || "en-gb" == r || "en-uk" == r) t = ENGLISH;
    else if ("en-us" == r) t = ENGLISH_US;
    else if ("es-us" == r) t = SPANISH;
    else if ("es" == r || "es-es" == r) t = ESPANOL;
    else if ("fr" == r || "fr-fr" == r) t = FRENCH;
    else if ("fr-ca" == r) t = FRENCH_CA;
    else if ("de" == r) t = GERMAN;
    else if ("it" == r) t = ITALIAN;
    else if ("nl" == r) t = DUTCH;
    else if ("sv" == r) t = SWEDISH;
    else if ("en-au" == r) t = AUSTRALIAN;
    else if ("pt-br" == r) t = PORTUGUESE;
    else if ("pt" == r || "pt-pt" == r) t = PORTUGUES;
    else if ("ru" == r) t = RUSSIAN;
    else if ("pl" == r) t = POLISH;
    else if ("ar" == r) t = ARABIC;
    else if ("zh-cn" == r || "zh-tw" == r) t = CHINESE, SpeechStream.translatorData.bCantoneseTarget && (t = CANTONESE);
    else if ("ko" == r) t = KOREAN;
    else {
      if ("ms" != r) return null;
      t = MALAYSIAN
    }
    return DEFAULT_VOICE_ARRAY[t]
  }
  return null
}

function ReadHeader1() {
  var e = (new Date)
    .getTime();
  if (!(e - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClickTime = e;
    var t = document.getElementsByTagName("H1")[0]
      , r = SSDOM.getNextNodeAllowMoveToChild(t, !0, t);
    if (null != r && (3 != r.nodeType && (r = SSDOM.getNextTextNode(r, !0, t)), null != r)) {
      var n = new THCaret(r, 0, (!0))
        , a = rw_getHoverTargetFromCaret(n);
      if (null != a) {
        var o = a.getCaretRange();
        if (rw_caretRangeIsSpeakable(o)) {
          var i = o.leftCaret.node;
          if (a.isRange()) {
            var l = o.rightCaret.node;
            i = SSDOM.getStartOfParagraph(i), l = SSDOM.getEndOfParagraph(l);
            var s, c = rw_getRefPt(i, 0);
            s = 1 == l.nodeType ? rw_getRefPt(l, 0) : rw_getRefPt(l, l.nodeValue.length), a.range = new THRange(document.body, c, s)
          }
          var g = g_bContinuousReading;
          $rw_stopSpeech(), g_bContinuousReading = !1, rw_speakHoverTarget(a), g_bContinuousReading = g
        }
      }
    }
  }
}

function $rw_getHashCodes() {
  for (var e = "", t = SSDOM.getFirstSentence(document.body); null != t;) {
    var r = rw_getSpeechOverCaretRangeToSpeak(t, new Array);
    e = e + rw_getCachedSpeechFolderUrl() + "/";
    var n;
    n = rw_getHash(SpeechStream.cacheMode.mode == SpeechStream.cacheMode.CACHE_ONLY || SpeechStream.pronunciation.mode == SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER ? r.txt : r.txtOrig), e = e + n + "~", t = SSDOM.getNextSentence(t)
  }
  return e
}

function $rw_getSoundFileLength(e) {
  var t = g_controllerFactory.getConnector();
  null == t ? alert("Connection not available to the server.") : t.getSoundFileLength(e)
}

function $rw_soundFileLengthCallback(e) {
  alert(e)
}

function rw_setAltSpeechSettings(e, t, r, n, a) {
  null == SpeechStream.storedVoice && (SpeechStream.storedVoice = g_strVoice, SpeechStream.storedSpeed = g_nSpeedValue, SpeechStream.storedCustId = g_strCustId, SpeechStream.storedBookId = g_strBookId, SpeechStream.storedPageId = g_strPageId), void 0 != e && (g_strVoice = e), void 0 != t && $rw_setSpeedValue(t), void 0 != r && (g_strCustId = r), void 0 != n && (g_strBookId = n), void 0 != a && (g_strPageId = a);
  var o = g_controllerFactory.getConnector();
  null != o && o.setAltSettings(e, t, r, n, a)
}

function rw_restoreSpeechSettings() {
  null != SpeechStream.storedVoice && (g_strVoice = SpeechStream.storedVoice, g_speedValue = SpeechStream.storedSpeed, g_strCustId = SpeechStream.storedCustId, g_strBookId = SpeechStream.storedBookId, g_strPageId = SpeechStream.storedPageId, SpeechStream.storedVoice = null, SpeechStream.storedSpeed = null, SpeechStream.storedCustId = null, SpeechStream.storedBookId = null, SpeechStream.storedPageId = null);
  var e = g_controllerFactory.getConnector();
  null != e && e.restoreSettings()
}

function $rw_ipadFrameScrolling(e, t) {
  g_bIpadBugWorkaroundNastyHack = !0
}

function rw_positionToolbar() {
  return
}

function rw_positionAllDivBars() {
  rw_positionDivBar(0), rw_positionDivBar(1), rw_positionDivBar(2), rw_positionDivBar(3), rw_positionDivBar(4), rw_positionDivBar(5), rw_positionDivBar(6), rw_positionDivBar(7), rw_positionDivBar(8), rw_positionDivBar(9), rw_positionDivBar(10), rw_positionDivBar(11), rw_positionDivBar(12), rw_positionDivBar(13), rw_positionDivBar(14), rw_positionDivBar(15), rw_positionDivBar(16)
}

function rw_positionDivBar(e) {
  var t, r, n;
  switch (e) {
  case 0:
    n = "rwDisplay";
    break;
  case 1:
    n = "rwTrans";
    break;
  case 2:
    n = "rwFF";
    break;
  case 3:
    n = "rwDict";
    break;
  case 4:
    n = "rwCollect";
    break;
  case 5:
    n = "rwSticky";
    break;
  case 6:
    n = "rwPronCreate";
    break;
  case 7:
    n = "rwPronEdit";
    break;
  case 8:
    n = "rwCal";
    break;
  case 9:
    n = "rwGenerateCache";
    break;
  case 10:
    n = "rwCheckCache";
    break;
  case 11:
    n = "rwPictureDictionary";
    break;
  case 12:
    n = "rwRec";
    break;
  case 13:
    n = "rwPrediction";
    break;
  case 14:
    n = "rwSpelling";
    break;
  case 15:
    n = "rwHomophone";
    break;
  case 16:
    n = "rwGrammar";
    break;
  default:
    n = "rwDisplay"
  }
  if (t = document.getElementById(n), "undefined" != typeof t && null != t && (r = t.style, null != r))
    if (g_abVisible[e]) {
      if (r.display = "block", "visible" == r.visibility) {
        var a = rw_getDomObject(n);
        if (null != a) {
          var o = parseInt(a.offsetHeight, 10);
          isNaN(o) || (g_anDivHeight[e] = o - 4)
        }
      }
      var i, l, s = rw_getDocumentDisplayWidth()
        , c = rw_getDocumentDisplayHeight();
      g_bIpadFrames ? (i = g_afDivPosX[e], l = g_afDivPosY[e] + top.window.pageYOffset) : (i = s * g_afDivPosX[e], l = c * g_afDivPosY[e]);
      var g = g_anDivWidth[e];
      g_bIpadFrames ? i - top.window.pageXOffset + g + g_nDragMargin > top.window.innerWidth && (i = top.window.innerWidth - g - g_nDragMargin + top.window.pageXOffset) : i + g + g_nDragMargin > rw_getDisplayWidthAdjusted() && (i = rw_getDisplayWidthAdjusted() - g - g_nDragMargin), i < g_nDragMargin && (i = g_nDragMargin);
      var u = g_anDivHeight[e];
      g_bIpadFrames ? l - top.window.pageYOffset + u + g_nDragMargin > top.window.innerHeight && (l = top.window.innerHeight - u - g_nDragMargin + top.window.pageYOffset) : l + u + g_nDragMargin > rw_getDisplayHeightAdjusted() && (l = rw_getDisplayHeightAdjusted() - u - g_nDragMargin), l < g_nDragMargin && (l = g_nDragMargin), g_bIpadFrames || (i = rw_getScreenOffsetLeft() + i, l = rw_getScreenOffsetTop() + l), rw_getDisplayWidthAdjusted() < g_nBarWidth && (i = rw_getScreenOffsetLeft() + rw_getDisplayWidthAdjusted() - g_nBarWidth - g_nDragMargin), i < g_nDragMargin && (i = g_nDragMargin), r.left = i + "px", r.top = l + "px", r.visibility = "visible"
    } else r.display = "none", r.visibility = "hidden"
}

function rw_setBarPercent(e, t) {
  e < 0 && (e = 0), t < 0 && (t = 0), g_fBarPosX = e / rw_getDocumentDisplayWidth(), g_fBarPosY = t / rw_getDocumentDisplayHeight(), g_fBarPosX > 1 && (g_fBarPosX = 1), g_fBarPosY > 1 && (g_fBarPosY = 1)
}

function rw_setDivPercent(e, t, r) {
  g_bIpadFrames ? (g_afDivPosX[e] = t, g_afDivPosY[e] = r) : (g_afDivPosX[e] = t / rw_getDocumentDisplayWidth(), g_afDivPosY[e] = r / rw_getDocumentDisplayHeight())
}

function $rw_divOver(e) {
  var t;
  switch (e) {
  case POPUP_DISPLAY:
    t = "displayImg";
    break;
  case POPUP_TRANSLATOR:
    t = "transImg";
    break;
  case POPUP_FF:
    t = "FFImg";
    break;
  case POPUP_DICTIONARY:
    t = "dictImg";
    break;
  case POPUP_COLLECT:
    t = "collectImg";
    break;
  case POPUP_PRON_CREATE:
    t = "pronCreateImg";
    break;
  case POPUP_PRON_EDIT:
    t = "pronEditImg";
    break;
  case POPUP_CALCULATOR:
    t = "calImg";
    break;
  case POPUP_GENERATE_CACHE:
    t = "generateCacheImg";
    break;
  case POPUP_CHECK_CACHE:
    t = "checkCacheImg";
    break;
  case POPUP_PICTUREDICTIONARY:
    t = "pictureDictionaryImg";
    break;
  case POPUP_SPEECH_RECORDER:
    t = "recImg";
    break;
  case POPUP_PREDICTION:
    t = "predictImg";
    break;
  case POPUP_SPELLING:
    t = "spellingImg";
    break;
  case POPUP_HOMOPHONE:
    t = "homophoneImg";
    break;
  case POPUP_GRAMMAR:
    t = "grammarImg";
    break;
  default:
    t = "displayImg"
  }
  null != document.images[t] && (document.images[t].src = SSDAT.paths.strFileLoc + "rwimgs/thepressedx.bmp")
}

function $rw_divOut(e) {
  var t;
  switch (e) {
  case POPUP_DISPLAY:
    t = "displayImg";
    break;
  case POPUP_TRANSLATOR:
    t = "transImg";
    break;
  case POPUP_FF:
    t = "FFImg";
    break;
  case POPUP_DICTIONARY:
    t = "dictImg";
    break;
  case POPUP_COLLECT:
    t = "collectImg";
    break;
  case POPUP_PRON_CREATE:
    t = "pronCreateImg";
    break;
  case POPUP_PRON_EDIT:
    t = "pronEditImg";
    break;
  case POPUP_CALCULATOR:
    t = "calImg";
    break;
  case POPUP_GENERATE_CACHE:
    t = "generateCacheImg";
    break;
  case POPUP_CHECK_CACHE:
    t = "checkCacheImg";
    break;
  case POPUP_PICTUREDICTIONARY:
    t = "pictureDictionaryImg";
    break;
  case POPUP_SPEECH_RECORDER:
    t = "recImg";
    break;
  case POPUP_PREDICTION:
    t = "predictImg";
    break;
  case POPUP_SPELLING:
    t = "spellingImg";
    break;
  case POPUP_HOMOPHONE:
    t = "homophoneImg";
    break;
  case POPUP_GRAMMAR:
    t = "grammarImg";
    break;
  default:
    t = "displayImg"
  }
  null != document.images[t] && (document.images[t].src = SSDAT.paths.strFileLoc + "rwimgs/thex.bmp")
}

function $rw_divPress(e) {
  $rw_event_stop(), rw_showDiv(!1, e)
}

function rw_setPopupText(e, t) {
  var r, n;
  switch (e) {
  case POPUP_DISPLAY:
    n = "rwpopupdisplay";
    break;
  case POPUP_TRANSLATOR:
    n = "rwpopuptrans";
    break;
  case POPUP_FF:
    n = "rwpopupff";
    break;
  case POPUP_DICTIONARY:
    n = "rwpopupdict";
    break;
  case POPUP_COLLECT:
    n = "rwpopupcollect";
    break;
  case POPUP_PRON_CREATE:
    n = "rwpopupproncreate";
    break;
  case POPUP_PRON_EDIT:
    n = "rwpopuppronedit";
    break;
  case POPUP_CALCULATOR:
    n = "rwpopupcal";
    break;
  case POPUP_GENERATE_CACHE:
    n = "rwpopupgeneratecache";
    break;
  case POPUP_CHECK_CACHE:
    n = "rwpopupcheckcache";
    break;
  case POPUP_PICTUREDICTIONARY:
    n = "rwpopuppicturedictionary";
    break;
  case POPUP_SPEECH_RECORDER:
    n = "rwpopuprec";
    break;
  case POPUP_PREDICTION:
    n = "rwPopupPredict";
    break;
  case POPUP_SPELLING:
    n = "rwPopupSpelling";
    break;
  case POPUP_HOMOPHONE:
    n = "rwpopuphomophone";
    break;
  case POPUP_GRAMMAR:
    n = "rwpopupgrammar";
    break;
  default:
    n = "rwpopupdisplay"
  }
  if (r = document.getElementById(n), null != r) try {
    r.innerHTML = t
  } catch (a) {
    SSDOM.BetterInnerHTML(r, t, !1)
  }
}

function rw_showDiv(e, t) {
  var r;
  g_abVisible[t] = e;
  var n;
  switch (t) {
  case POPUP_DISPLAY:
    n = "rwDisplay";
    break;
  case POPUP_TRANSLATOR:
    n = "rwTrans";
    break;
  case POPUP_FF:
    n = "rwFF";
    break;
  case POPUP_DICTIONARY:
    n = "rwDict";
    break;
  case POPUP_COLLECT:
    n = "rwCollect";
    break;
  case POPUP_STICKYNOTE:
    n = "rwSticky";
    break;
  case POPUP_PRON_CREATE:
    n = "rwPronCreate";
    break;
  case POPUP_PRON_EDIT:
    n = "rwPronEdit";
    break;
  case POPUP_CALCULATOR:
    n = "rwCal";
    break;
  case POPUP_GENERATE_CACHE:
    n = "rwGenerateCache";
    break;
  case POPUP_CHECK_CACHE:
    n = "rwCache";
    break;
  case POPUP_PICTUREDICTIONARY:
    n = "rwPictureDictionary";
    break;
  case POPUP_SPEECH_RECORDER:
    n = "rwRec";
    break;
  case POPUP_PREDICTION:
    n = "rwPrediction";
    break;
  case POPUP_SPELLING:
    n = "rwSpelling";
    break;
  case POPUP_HOMOPHONE:
    n = "rwHomophone";
    break;
  case POPUP_GRAMMAR:
    n = "rwGrammar";
    break;
  default:
    n = "rwDisplay"
  }
  var a = rw_getDomObject(n);
  if (null != a) {
    if (r = a.style, null == r) return;
    e ? (resetZIndex(), r.visibility = "visible", r.display = "block", r.zIndex = 2147483639, r.position = "absolute") : (r.visibility = "hidden", r.display = "none", rw_setPopupText(t, ""))
  }
  rw_positionAllDivBars()
}

function resetZIndex() {
  var e;
  e = "rwDisplay";
  var t, r = rw_getDomObject(e);
  null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwTrans", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwFF", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwDict", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwCollect", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwSticky", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwCal", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwGenerateCache", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwCheckCache", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwPictureDictionary", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwRec", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwPrediction", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwSpelling", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwHomophone", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998), e = "rwGrammar", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999998)
}

function $rw_getToolbarX() {
  return g_fBarPosX
}

function $rw_getToolbarY() {
  return g_fBarPosY
}

function $rw_setToolbarPosition(e, t) {}

function $rw_placeToolbar(e) {
  return
}

function $rw_setOverridePosition(e, t) {}

function $rw_getOverrideX() {
  return eba_override_x
}

function $rw_getOverrideY() {
  return eba_override_y
}

function rw_mouseStartSpeech(e, t) {
  try {
    if (g_bOnClick) {
      var r = new Date
        , n = r.getTime();
      if (n < g_lLastSpeechSentTime + 800 || !SSDAT.controlData.bOnloadFinished) return
    }
    var a = rw_getTHCaretFromMouseEvent(e, g_bOnClick);
    if (null != a) {
      if (1 == a.node.nodeType && "img" == a.node.tagName.toLowerCase() && "mceIcon" == a.node.className) return;
      if (1 == a.node.nodeType && "input" == a.node.tagName.toLowerCase() && "button" == a.node.type.toLowerCase() && g_bIgnoreButtons && !rw_isCalcButton(e)) return;
      if (null != g_apipData) return void SSAPIP.apipHandler.checkElement(a.node, SSAPIP.apipHandler.Type.DEFAULT);
      if (g_bTakeClickOnRadioBox && 1 == a.node.nodeType && "input" == a.node.tagName.toLowerCase()) {
        var o = a.node.getAttribute("type");
        null != o && (o = o.toLowerCase(), "radio" != o && "checkbox" != o || (a.node = SSDOM.getNextTextNodeNoBlank(a.node, !0, null), a.offset = 0))
      }
      var i = rw_getHoverTargetFromCaret(a);
      if (null != i) try {
        if (i.equals(g_hoverTarget)) return;
        if (i.equals(g_lastTarget)) {
          if (n - g_lLastClickTimeout < 1e3) return;
          g_lLastClickTimeout = n
        }
        "boolean" == typeof t && t ? (i.useHighlighting = !1, rw_doHoverStart(i, !0)) : rw_doHoverStart(i, !1)
      } catch (l) {
        thLogE(l)
      } else g_hoverTarget = null
    }
  } catch (l) {
    thLog("mousehover error: " + l)
  }
}

function rw_getTHCaretFromMouseEvent(e, t) {
  var r = null
    , n = 0;
  if (g_bIE)
    if (r = e.srcElement, 1 == r.nodeType && "textarea" == r.tagName.toLowerCase());
    else {
      var a = rw_getTargetNodeAsCaretIE(e, t);
      if (null != a) r = a.node, n = a.offset;
      else {
        var o = !1;
        if ("li" == r.tagName.toLowerCase() || "a" == r.tagName.toLowerCase() ? o = !0 : null != r.parentNode && null != r.parentNode.tagName && "li" == r.parentNode.tagName.toLowerCase() && (o = !0), o) {
          var i = r.firstChild;
          if (null == i) return null;
          if (3 != i.nodeType && (i = SSDOM.getNextTextNodeNoBlank(i, !1, r), null == i)) return null;
          r = i, n = 0
        }
      }
    }
  else if (g_bSafari) {
    if (r = e.target, null != r)
      if (g_bSafari3) {
        if (null != r.firstChild && 3 == r.firstChild.nodeType && "textarea" != r.tagName.toLowerCase()) {
          var l = r.firstChild.nodeValue;
          l.trimTH()
            .length > 0 && (r = r.firstChild)
        }
      } else if (g_bSafari2)
      if (null != e.fromElement) 1 == r.nodeType && "textarea" != r.tagName.toLowerCase() && 3 == e.fromElement.nodeType && (r = e.fromElement);
      else if (null != r.firstChild && 3 == r.firstChild.nodeType && "textarea" != r.tagName.toLowerCase()) {
      var l = r.firstChild.nodeValue;
      l.trimTH()
        .length > 0 && (r = r.firstChild)
    }
  } else null != e.explicitOriginalTarget.nodeValue ? "textarea" == e.target.tagName.toLowerCase() ? r = e.target : (r = e.explicitOriginalTarget, e.rangeOffset && (n = e.rangeOffset)) : r = e.target;
  return null == r ? null : SSDOM.isIgnored(r) ? null : new THCaret(r, n, (!0))
}

function rw_getHoverTargetFromCaret(e) {
  var t = !1
    , r = e.node
    , n = null;
  if (rw_checkIfBlockCache(r)) {
    if (null == g_strSpeechServerBackup) return n;
    t = !0
  }
  if (null != r && null != r.parentNode && r.parentNode.getAttribute) {
    var a, o, i, l, s;
    if (1 == r.nodeType) {
      if (a = r.tagName, g_bIgnoreButtons && "INPUT" == a.toUpperCase()) {
        var c = r.getAttribute("type")
          , g = r.className;
        if (null != c && "button" == c && "rwcalbutton" != g && "rwcalEqbutton" != g) return n
      }
      if (o = r.getAttribute("started"), i = r.getAttribute("ignore"), l = r.getAttribute("sp"), s = r.getAttribute("csp"), null != s || null != i || null != l || null != o) return n
    }
    var u = r.parentNode;
    if (o = u.getAttribute("started"), i = u.getAttribute("ignore"), l = u.getAttribute("sp"), s = u.getAttribute("csp"), null != s || null != i || null != l || null != o) n = null;
    else {
      var _, d;
      if (3 == r.nodeType) {
        var h = e;
        try {
          if (!g_bIE && h.node.nodeValue.length > 0 && !g_bContinuousReading && g_bSafari ? (h.offset = 0, _ = SSDOM.getSentenceBreakToLeft(h), h.offset = h.node.nodeValue.length - 1, d = SSDOM.getSentenceBreakToRight(h)) : (_ = SSDOM.getSentenceBreakToLeft(h), d = SSDOM.getSentenceBreakToRight(h)), null != _ && null != d) {
            var p = new THRange(SSDOM.getBody(u), rw_getRefPt(_.node, _.offset), rw_getRefPt(d.node, d.offset));
            n = new THHoverTarget(null, null, p), n.blockCache = t
          }
        } catch (S) {
          thLogE(S)
        }
      } else if (1 == r.nodeType)
        if ("img" == r.tagName.toLowerCase() && null != r.getAttribute("msg")) {
          if (_ = SSDOM.getSentenceBreakToLeft(e), d = SSDOM.getSentenceBreakToRight(e), null != _ && null != d) {
            var p = new THRange(SSDOM.getBody(u), rw_getRefPt(_.node, _.offset), rw_getRefPt(d.node, d.offset));
            n = new THHoverTarget(null, null, p)
          } else n = new THHoverTarget(SSDOM.getBody(r), SSDOM.getPositionInDom(r), null);
          n.blockCache = t
        } else n = new THHoverTarget(SSDOM.getBody(r), SSDOM.getPositionInDom(r), null), n.blockCache = t, n.allowContinuous = !1;
      else n = null
    }
  }
  return n
}

function rw_doHoverStart(e, t) {
  if (g_hoverTimeoutId1 > 0 && (clearTimeout(g_hoverTimeoutId1), g_hoverTimeoutId1 = 0), g_hoverTimeoutId2 > 0 && (clearTimeout(g_hoverTimeoutId2), g_hoverTimeoutId2 = 0), g_bOnClick && !t) {
    if (!rw_testHoverTarget(e)) return;
    g_hoverTarget = e;
    var r = g_bSpeakingFlag;
    $rw_event_stop_limited(), g_hoverTimeoutId1 = r ? setTimeout(rw_doHoverStep2, 500) : setTimeout(rw_doHoverStep2, 5)
  } else g_hoverTarget = e, g_hoverTimeoutId1 = setTimeout(rw_doHoverStep1, 500)
}

function rw_doHoverStep1() {
  if (null != g_hoverTarget && ($g_bMouseSpeech || (g_nIcons & calculator_icon) == calculator_icon)) {
    if (g_hoverTimeoutId1 = 0, null != g_hoverTarget && !rw_testHoverTarget(g_hoverTarget)) return;
    g_hoverTimeoutId1 > 0 && (clearTimeout(g_hoverTimeoutId1), g_hoverTimeoutId1 = 0), g_hoverTimeoutId2 > 0 && (clearTimeout(g_hoverTimeoutId2), g_hoverTimeoutId2 = 0), g_bChromeExtension && window.postMessage({
      type: "1757FROM_PAGERW4G"
      , command: "trackEvent"
      , settings: {
        category: "FromWebReader"
        , action: "WebReader start hover action"
        , label: window.location.host
      }
    }, "*"), $rw_event_stop_limited(), g_hoverTimeoutId2 = setTimeout(rw_doHoverStep2, 500)
  }
}

function rw_doHoverStep2() {
  try {
    if (g_bHoverStep2Flag = !0, g_hoverTimeoutId1 = 0, null != g_hoverTarget)
      if (null != g_lastTarget) g_hoverTimeoutId2 > 0 && (clearTimeout(g_hoverTimeoutId2), g_hoverTimeoutId2 = 0), $rw_event_stop_limited(), g_hoverTimeoutId2 = setTimeout(rw_doHoverStep2, 500);
      else {
        var e = new Date;
        g_lLastSpeechSentTime = e.getTime(), null != g_hoverTarget.range && (g_userDeterminedTarget = g_hoverTarget), rw_speakHoverTarget(g_hoverTarget), g_hoverTarget = null
      }
  } catch (t) {
    thLogE(t)
  }
  g_bHoverStep2Flag = !1
}

function rw_testHoverTarget(e) {
  if (null != e) {
    var t;
    return t = e instanceof String ? e.toString() : e.isRange() ? rw_caretRangeIsSpeakable(e.getCaretRange()) ? " " : null : e.getTextPreparedForSpeech(), null != t && 0 != t.length
  }
}

function rw_isSpeechBusy() {
  return (new Date)
    .getTime() - g_lTargetQueueTime < g_nTargetQueueDelay
}

function rw_targetQueueTimer() {
  if (rw_isSpeechBusy()) g_nTargetQueueTimerId = setTimeout(rw_targetQueueTimer, 100);
  else if (g_nTargetQueueTimerId = 0, g_aTargetQueue.length > 1) {
    var e = g_aTargetQueue[g_aTargetQueue.length - 2]
      , t = g_aTargetQueue[g_aTargetQueue.length - 1];
    g_aTargetQueue.length = 0, "rw_speakHoverTarget" == e ? rw_speakHoverTarget(t) : "rw_speechHighlightOnly" == e ? rw_speechHighlightOnly(t) : rw_speechFromFile(t, e)
  }
}

function rw_speakHoverTarget(e) {
  try {
    if (g_bChromeExtension && window.postMessage({
        type: "1757FROM_PAGERW4G"
        , command: "trackEvent"
        , settings: {
          category: "FromWebReader"
          , action: "WebReader speak sentence with hover"
          , label: window.location.host
        }
      }, "*"), null == e) return;
    if (rw_isSpeechBusy()) return g_aTargetQueue.push("rw_speakHoverTarget"), g_aTargetQueue.push(e), void(0 == g_nTargetQueueTimerId && (g_nTargetQueueTimerId = setTimeout(rw_targetQueueTimer, 100)));
    if (g_lTargetQueueTime = (new Date)
      .getTime(), null != g_lastTarget && g_lastTarget.unhighlightRange(), e instanceof String) {
      g_lastTarget = null;
      var t = new SpeechStream.SpeechRequest;
      t.setString(e.toString(), SpeechStream.SpeechRequestBookmarks.NONE);
      var r = t.getText()
        , n = g_controllerFactory.getConnector();
      null == n || g_bDisableSpeech || (SpeechStream.cacheMode.useBackupForLiveRequests() ? n.simpleSpeechFromBackup(r, !g_bLocalPronunciationLoaded) : n.simpleSpeech(r, !g_bLocalPronunciationLoaded))
    } else {
      if (e.range && e.range instanceof THRange) {
        var a = rw_getTHCaretRangeFromTHRange(e.range);
        if (null != a && rw_checkForHiddenParent(a.leftCaret.node)) return g_userDeterminedTarget = null, g_nNavDoubleClickTime = 0, void $rw_speakFirstSentence();
        if (null != a && rw_checkIfBlockCache(a.leftCaret.node)) {
          if (null == g_strSpeechServerBackup) return;
          e.blockCache = !0
        }
      }
      g_bExtendSelection || null == g_finalSentenceTargetReduced || null == g_finalSentenceTarget || e.equalsAprox(g_finalSentenceTarget) && (e = g_finalSentenceTargetReduced, e.allowContinuous = !1, g_finalSentenceTarget = null, g_finalSentenceTargetReduced = null, g_bCallPageCompleteOnSelectionEnd && g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()")), g_lastTarget = e;
      var o = e.getTextPreparedForSpeech();
      if (null != o && o.length > 0) {
        if (rw_actOnCommand(e), !e.isValid()) return;
        if ($rw_setSentenceFromSelection(), e.useHighlighting) {
          e.highlightRange();
          var i = e.textToSpeakNoChanges;
          e.isOverridingGlobal() ? (rw_setAltSpeechSettings(e.voice, null, null, e.bookId, e.pageId), rw_playMessage(o, e.blockCache, i), rw_restoreSpeechSettings()) : rw_playMessage(o, e.blockCache, i)
        } else {
          var n = g_controllerFactory.getConnector();
          null != n && (e.isOverridingGlobal() ? (rw_setAltSpeechSettings(e.voice, null, null, e.bookId, e.pageId), SpeechStream.cacheMode.useBackupForLiveRequests() ? n.simpleSpeechFromBackup(o, !g_bLocalPronunciationLoaded) : n.simpleSpeech(o, !g_bLocalPronunciationLoaded), rw_restoreSpeechSettings()) : SpeechStream.cacheMode.useBackupForLiveRequests() ? n.simpleSpeechFromBackup(o, !g_bLocalPronunciationLoaded) : n.simpleSpeech(o, !g_bLocalPronunciationLoaded))
        }
        g_bContinuousReading && e.allowContinuous && (e.equals(g_finalSentenceTarget) ? (g_finalSentenceTarget = null, g_bCallPageCompleteOnSelectionEnd && g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()")) : rw_setupContinuousReading(e))
      }
    }
  } catch (l) {
    thLog("rw_speakHoverTarget error:" + l.message)
  }
}

function rw_checkForHiddenParent(e) {
  try {
    var t = SSDOM.getComputedStyle(e);
    if (null != t && ("none" == t.display || "hidden" == t.visibility)) return !0;
    for (var r = e, n = r.ownerDocument.body; r != n;)
      if (r = r.parentNode, "none" == SSDOM.getComputedStyle(r)
        .display) return !0
  } catch (a) {}
  return !1
}

function rw_speechFromFile(e, t) {
  if (null != e && null != t) {
    if (rw_isSpeechBusy()) return g_aTargetQueue.push(t), g_aTargetQueue.push(e), void(0 == g_nTargetQueueTimerId && (g_nTargetQueueTimerId = setTimeout(rw_targetQueueTimer, 100)));
    if (g_lTargetQueueTime = (new Date)
      .getTime(), null != g_lastTarget && g_lastTarget.unhighlightRange(), e instanceof String) {
      g_lastTarget = null;
      try {
        var r = g_controllerFactory.getConnector();
        null != r && (rw_setSpeakingModeFlag(!0), r.startSpeechFromFile(e, t, !g_bLocalPronunciationLoaded), rw_startSpeechCallback())
      } catch (n) {
        thLogE(n)
      }
    } else {
      g_lastTarget = e;
      var a = e.getTextPreparedForSpeech();
      if (null != a && a.length > 0) {
        if (rw_actOnCommand(e), !e.isValid()) return;
        e.highlightRange(), rw_playMessageFromFile(a, t)
      }
    }
  }
}

function rw_speechHighlightOnly(e) {
  if (null != e) {
    if (rw_isSpeechBusy()) return g_aTargetQueue.push("rw_speechHighlightOnly"), g_aTargetQueue.push(e), void(0 == g_nTargetQueueTimerId && (g_nTargetQueueTimerId = setTimeout(rw_targetQueueTimer, 100)));
    if (g_lTargetQueueTime = (new Date)
      .getTime(), null != g_lastTarget && g_lastTarget.unhighlightRange(), e instanceof String) g_lastTarget = null;
    else {
      g_lastTarget = e;
      var t = e.getTextPreparedForSpeech();
      if (null != t && t.length > 0) {
        if (rw_actOnCommand(e), !e.isValid()) return;
        e.highlightRange(), rw_playMessageHighlighting(t)
      }
    }
  }
}

function $rw_readNextTarget() {
  null != g_nextTargetForContinuousReading && (g_hoverTarget = g_nextTargetForContinuousReading, g_userDeterminedTarget = g_nextTargetForContinuousReading, g_nextTargetForContinuousReading = null, rw_doHoverStep2())
}

function rw_checkForEndContinuousFlag(e, t) {
  if (null == e || null == t || e == t) return !1;
  var r, n = e
    , a = null;
  for (null != g_finalSentenceTarget && (a = g_finalSentenceTarget.getCaretRange()
      .rightCaret.node); null != n && n != t;) {
    if (1 == n.nodeType && null != n.getAttribute("texthelpStopContinuous")) return !0;
    if (n == a && n != t) return !0;
    if (r = !SSDOM.isInvalidNode(n), null != n.firstChild && r) n = n.firstChild;
    else if (null != n.nextSibling) n = n.nextSibling;
    else {
      for (; null != n && null == n.nextSibling;) {
        if (n = n.parentNode, null != n && 1 == n.nodeType && null != n.getAttribute("texthelpStopContinuous")) return !0;
        if (t == n) return !1
      }
      null != n && t != n && (n = n.nextSibling)
    }
  }
  return !1
}

function THWordNode(e, t) {
  this.range = e, this.word = t
}

function rw_getSpeechOverRangeToSpeak(e, t, r, n) {
  try {
    if (null == t || null == r) return new THSpeech;
    var a = SSDOM.getCaretPairFromDomPosition(e, t.path, t.offset, r.path, r.offset);
    return rw_getSpeechOverCaretRangeToSpeak(a, n)
  } catch (o) {
    return thLog("err rw_getTextOverRangeToSpeak:|" + o.message), new THSpeech
  }
}

function rw_getSpeechOverCaretRangeToSpeak(e, t) {
  var r = new THSpeech;
  try {
    if (null == e) return r;
    var n = e.leftCaret
      , a = e.rightCaret;
    if (null == n) return r;
    if (null == a) return r;
    if (null != n.node) {
      var o = SSDOM.checkForSpecialParent(n.node);
      null != o && (n.node = o, n.offset = 0)
    }
    if (null != a.node) {
      var o = SSDOM.checkForSpecialParent(a.node);
      null != o && (3 == a.node.nodeType && (a.offset = a.node.nodeValue.length), a.node = o)
    }
    var i = !1;
    if (!g_bVoiceFromLangFlag)
      for (var l, s = n.node; null != s;) {
        if (1 == s.nodeType && (l = s.getAttribute("id"), null != l && l.length > 0)) {
          if ("rwpopuptrans" == l) {
            i = !0;
            break
          }
          if (0 != l.indexOf("rwMeaning") && 0 != l.indexOf("rwHeadWord")) break
        }
        s = s.parentNode
      }
    if (g_bVoiceFromLangFlag || i) {
      var c = rw_getVoiceSetForNode(n.node);
      null != c && (r.voice = c);
      var g = rw_checkForVoiceChange(n.node, a.node, c);
      if (null != g) {
        r.caretRange = new THCaretRange(n, g);
        var u = r.caretRange.toString();
        if (0 == u.length || !rw_wordIsSpeakable(u)) {
          var s = SSDOM.getNextTextNodeNoBlank(n.node, !1, a.node);
          if (null != s && s != n.node && s != e.leftCaret.node) {
            var _ = new THCaretRange(new THCaret(s, 0, (!0)), e.rightCaret);
            return rw_getSpeechOverCaretRangeToSpeak(_, t)
          }
        }
        a = g
      }
    }
    if (g_bUseCommands) {
      var d = rw_findCommandNode(n.node)
        , h = rw_checkForCommandChange(n.node, a.node, d);
      null != h && (r.caretRange = new THCaretRange(e.leftCaret, h), a = h)
    }
    rw_getTextOverRangeToSpeakImpl(n, a, t);
    var p, S = t.length
      , f = new Array;
    for (p = 0; p < S; p++) f.push(t[p].word);
    var m = new SpeechStream.SpeechRequest;
    return m.setWordList(f, SpeechStream.SpeechRequestBookmarks.ALL), r.txtOrig = m.getText(), r.txt = m.getFinalText(), r
  } catch (b) {
    return thLog("err rw_getTextOverRangeToSpeak:|" + b.message), r
  }
}

function rw_getTextOverRangeToSpeakAddFullStop(e) {
  var t = e.length;
  if (t > 1 && ". " == e.substr(t - 2, 2)) return e;
  if (t > 0 && "." == e.substr(t - 1, 1)) return e + " ";
  var r = e.trimEndTH()
    , n = r.charCodeAt(r.length - 1);
  return rw_isLetter(n) || n > 127 ? e + ". " : e
}

function rw_filterWord(e) {
  var t = "";
  if (e.indexOf("<math") > -1) return e;
  var r, n = e.length > 20
    , a = 0
    , o = e.length
    , i = 0;
  for (i = 0; i < o; i++)
    if (r = e.charCodeAt(i), r > 127) t += e.charAt(i);
    else {
      switch (r) {
      case 35:
      case 40:
      case 41:
      case 91:
      case 93:
      case 95:
      case 123:
      case 124:
      case 125:
        t += " ";
        break;
      case 96:
        t += "'";
        break;
      case 38:
        t += "&amp;";
        break;
      case 34:
        t += "&quot;";
        break;
      case 60:
        t += "&lt";
        break;
      case 62:
        t += "&gt";
        break;
      default:
        t += e.charAt(i)
      }
      n && (r >= 48 && r <= 57 || 44 == r ? (++a, a > 20 && (t += " ", a = 0)) : a = 0)
    }
  return t
}

function rw_getTextOverRangeToSpeakImpl(e, t, r) {
  try {
    for (var n = e.node, a = t.node, o = SSDOM.getBody(n), i = e.offset, l = t.offset, s = "", c = n, g = null, u = !0, _ = 0, d = rw_getRefPt(c, i), h = null; null != c;) {
      if (_ > MAX_WORDCOUNT_TO_SPEAK && MAX_WORDCOUNT_TO_SPEAK > 0) {
        if (g_bSpeechCacheGenerateFlag) throw "Full selection will not be spoken due to its length.";
        return void rw_alert("Full selection will not be spoken due to its length.")
      }
      if (SSDOM.isSpecialCase(c)) {
        s.length > 0 && (rw_wordIsSpeakable(s) && (r[_++] = new THWordNode(new THRange(o, d, h), s)), s = "");
        var p = SSDOM.getTextFromNode(c);
        if (p.length > 0 && rw_wordIsSpeakable(p)) {
          if (SSDOM.isSpecialCaseHighlightable(c)) {
            var S = SSDOM.getFirstChildTextNode(c, !1)
              , f = SSDOM.getLastChildTextNode(c, !1)
              , m = ""
              , b = "";
            1 == S.nodeType && (m = S.tagName.toLowerCase()), 1 == f.nodeType && (b = f.tagName.toLowerCase()), null != S && 3 == S.nodeType && null != f && 3 == f.nodeType && (d = rw_getRefPt(S, 0), h = rw_getRefPt(f, f.nodeValue.length)), null != S && 1 == S.nodeType && "math" == m && null != f && 1 == f.nodeType && "math" == b && (d = rw_getRefPt(S, 0), h = rw_getRefPt(f, p.length)), r[_++] = new THWordNode(new THRange(o, d, h), p)
          } else d = rw_getRefPt(c, -1), r[_++] = new THWordNode(new THRange(o, d, d), p);
          s = ""
        }
        d = null, h = null, c = SSDOM.getNextNodeIgnoreChildren(c, !1, a)
      } else if (1 == c.nodeType) SpeechStream.pauseHandler.isPauseElement(c) && (s += SpeechStream.pauseHandler.encodePauseFromNode(c)), g = u ? SSDOM.getNextNodeAllowMoveToChild(c, !0, a) : SSDOM.getNextNode(c, !0, a), null == g ? (s.length > 0 && (rw_wordIsSpeakable(s) && (r[_++] = new THWordNode(new THRange(o, d, h), rw_getTextOverRangeToSpeakAddFullStop(s))), s = "", d = null, h = null), c = u ? SSDOM.getNextNodeAllowMoveToChild(c, !1, a) : SSDOM.getNextNode(c, !1, a)) : c = g;
      else if (3 == c.nodeType) {
        var p = SSDOM.getTextFromNode(c);
        null == p && (p = "");
        var T = 0;
        if (a == c && l > -1 && (p = p.substring(0, l)), n == c && i > 0 && (p = p.substring(i), T = i), 0 == p.length && 0 == s.length) d = null;
        else {
          null != d && 0 != s.length || (d = rw_getRefPt(c, T));
          for (var w = rw_getBreakInCurrentWord(p); w > -1;) {
            if (0 == w)
              if (s.length > 0) {
                if (rw_wordIsSpeakable(s)) {
                  null == h && (h = rw_getRefPt(c, T));
                  var v = new THRange(o, d, h);
                  if (g_bMP) {
                    var C = null
                      , y = null
                      , I = c.parentNode;
                    null != I && 1 == I.nodeType && (C = I.getAttribute("class"), y = I.getAttribute("className"));
                    var E = !1;
                    E = null != C && ("x2" == C.toLowerCase() || "x3" == C.toLowerCase()) || null != y && ("x2" == y.toLowerCase() || "x3" == y.toLowerCase());
                    for (var O = !1; E;) {
                      if (null != I.previousSibling && 1 == I.previousSibling.nodeType) {
                        if (C = I.previousSibling.getAttribute("class"), y = I.previousSibling.getAttribute("className"), null != C && C.length > 3 && (C = C.substr(C.length - 4)
                            .toLowerCase(), "text" == C)) {
                          O = !0;
                          break
                        }
                        if (null != y && y.length > 3 && (y = y.substr(y.length - 4)
                            .toLowerCase(), "text" == y)) {
                          O = !0;
                          break
                        }
                        break
                      }
                      if (I = I.parentNode, null == I || 1 != I.nodeType || "span" != I.tagName.toLowerCase()) break
                    }
                    if (E) O || (s += p.substr(0, 1));
                    else if (null != c.previousSibling) C = c.previousSibling.getAttribute("class"), y = c.previousSibling.getAttribute("className"), (null == C || "x2" != C.toLowerCase() && "x3" != C.toLowerCase()) && (null == y || "x2" != y.toLowerCase() && "x3" != y.toLowerCase()) || (s += p.substr(0, 1));
                    else {
                      for (var I = c, D = !1; null == I.previousSibling && "span" == I.parentNode.tagName.toLowerCase();) I = I.parentNode, null != I.previousSibling && (D = !0);
                      D && null != I.previousSibling && (C = I.previousSibling.getAttribute("class"), y = I.previousSibling.getAttribute("className"), (null == C || "x2" != C.toLowerCase() && "x3" != C.toLowerCase()) && (null == y || "x2" != y.toLowerCase() && "x3" != y.toLowerCase()) || (s += p.substr(0, 1)))
                    }
                  } else s += p.substr(0, 1);
                  r[_++] = new THWordNode(v, s)
                }
                s = "", ++T, p = p.substr(1)
              } else p = p.substr(1), ++T;
            else {
              var N = s + p.substring(0, w + 1);
              if ("*" == N.trimTH() && (g_bMathsSymbols && rw_mathsSymbolCheck("*") || (N = "")), rw_wordIsSpeakable(N)) {
                h = rw_getRefPt(c, w + T);
                var v = new THRange(o, d, h);
                if (r[_++] = new THWordNode(v, N), _ > MAX_WORDCOUNT_TO_SPEAK && MAX_WORDCOUNT_TO_SPEAK > 0) {
                  if (g_bSpeechCacheGenerateFlag) throw "Full selection will not be spoken due to its length.";
                  return void rw_alert("Full selection will not be spoken due to its length.")
                }
              }
              s = "", T += w + 1, p = p.substring(w + 1)
            }
            d = rw_getRefPt(c, T), h = null, w = rw_getBreakInCurrentWord(p)
          }
          if (p.length > 0 && (s += p, h = rw_getRefPt(c, p.length + T), null == h && (s = "")), c == a) {
            if (s.length > 0) {
              var v = new THRange(o, d, h);
              rw_wordIsSpeakable(s) && (r[_++] = new THWordNode(v, s))
            }
            return
          }
        }
        g = SSDOM.getNextNode(c, !0, a), null == g ? (s.length > 0 && (rw_wordIsSpeakable(s) && (r[_++] = new THWordNode(new THRange(o, d, h), rw_getTextOverRangeToSpeakAddFullStop(s))), s = "", d = null, h = null), c = SSDOM.getNextNode(c, !1, a)) : c = g
      } else g = SSDOM.getNextNode(c, !0, a), null == g ? (s.length > 0 && (rw_wordIsSpeakable(s) && (r[_++] = new THWordNode(new THRange(o, d, h), rw_getTextOverRangeToSpeakAddFullStop(s)))
        , s = "", d = null, h = null), c = SSDOM.getNextNode(c, !1, a)) : c = g;
      u = !1
    }
  } catch (R) {
    thLog("err rw_getTextOverRangeToSpeakImpl:" + R.message)
  }
}

function rw_getBreakInCurrentWord(e) {
  if (null == e || 0 == e.length) return -1;
  var t = e.search('[\\s"]');
  return t
}

function hex_md5(e) {
  return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}

function core_md5(e, t) {
  e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
  for (var r = 1732584193, n = -271733879, a = -1732584194, o = 271733878, i = 0; i < e.length; i += 16) {
    var l = r
      , s = n
      , c = a
      , g = o;
    r = md5_ff(r, n, a, o, e[i + 0], 7, -680876936), o = md5_ff(o, r, n, a, e[i + 1], 12, -389564586), a = md5_ff(a, o, r, n, e[i + 2], 17, 606105819), n = md5_ff(n, a, o, r, e[i + 3], 22, -1044525330), r = md5_ff(r, n, a, o, e[i + 4], 7, -176418897), o = md5_ff(o, r, n, a, e[i + 5], 12, 1200080426), a = md5_ff(a, o, r, n, e[i + 6], 17, -1473231341), n = md5_ff(n, a, o, r, e[i + 7], 22, -45705983), r = md5_ff(r, n, a, o, e[i + 8], 7, 1770035416), o = md5_ff(o, r, n, a, e[i + 9], 12, -1958414417), a = md5_ff(a, o, r, n, e[i + 10], 17, -42063), n = md5_ff(n, a, o, r, e[i + 11], 22, -1990404162), r = md5_ff(r, n, a, o, e[i + 12], 7, 1804603682), o = md5_ff(o, r, n, a, e[i + 13], 12, -40341101), a = md5_ff(a, o, r, n, e[i + 14], 17, -1502002290), n = md5_ff(n, a, o, r, e[i + 15], 22, 1236535329), r = md5_gg(r, n, a, o, e[i + 1], 5, -165796510), o = md5_gg(o, r, n, a, e[i + 6], 9, -1069501632), a = md5_gg(a, o, r, n, e[i + 11], 14, 643717713), n = md5_gg(n, a, o, r, e[i + 0], 20, -373897302), r = md5_gg(r, n, a, o, e[i + 5], 5, -701558691), o = md5_gg(o, r, n, a, e[i + 10], 9, 38016083), a = md5_gg(a, o, r, n, e[i + 15], 14, -660478335), n = md5_gg(n, a, o, r, e[i + 4], 20, -405537848), r = md5_gg(r, n, a, o, e[i + 9], 5, 568446438), o = md5_gg(o, r, n, a, e[i + 14], 9, -1019803690), a = md5_gg(a, o, r, n, e[i + 3], 14, -187363961), n = md5_gg(n, a, o, r, e[i + 8], 20, 1163531501), r = md5_gg(r, n, a, o, e[i + 13], 5, -1444681467), o = md5_gg(o, r, n, a, e[i + 2], 9, -51403784), a = md5_gg(a, o, r, n, e[i + 7], 14, 1735328473), n = md5_gg(n, a, o, r, e[i + 12], 20, -1926607734), r = md5_hh(r, n, a, o, e[i + 5], 4, -378558), o = md5_hh(o, r, n, a, e[i + 8], 11, -2022574463), a = md5_hh(a, o, r, n, e[i + 11], 16, 1839030562), n = md5_hh(n, a, o, r, e[i + 14], 23, -35309556), r = md5_hh(r, n, a, o, e[i + 1], 4, -1530992060), o = md5_hh(o, r, n, a, e[i + 4], 11, 1272893353), a = md5_hh(a, o, r, n, e[i + 7], 16, -155497632), n = md5_hh(n, a, o, r, e[i + 10], 23, -1094730640), r = md5_hh(r, n, a, o, e[i + 13], 4, 681279174), o = md5_hh(o, r, n, a, e[i + 0], 11, -358537222), a = md5_hh(a, o, r, n, e[i + 3], 16, -722521979), n = md5_hh(n, a, o, r, e[i + 6], 23, 76029189), r = md5_hh(r, n, a, o, e[i + 9], 4, -640364487), o = md5_hh(o, r, n, a, e[i + 12], 11, -421815835), a = md5_hh(a, o, r, n, e[i + 15], 16, 530742520), n = md5_hh(n, a, o, r, e[i + 2], 23, -995338651), r = md5_ii(r, n, a, o, e[i + 0], 6, -198630844), o = md5_ii(o, r, n, a, e[i + 7], 10, 1126891415), a = md5_ii(a, o, r, n, e[i + 14], 15, -1416354905), n = md5_ii(n, a, o, r, e[i + 5], 21, -57434055), r = md5_ii(r, n, a, o, e[i + 12], 6, 1700485571), o = md5_ii(o, r, n, a, e[i + 3], 10, -1894986606), a = md5_ii(a, o, r, n, e[i + 10], 15, -1051523), n = md5_ii(n, a, o, r, e[i + 1], 21, -2054922799), r = md5_ii(r, n, a, o, e[i + 8], 6, 1873313359), o = md5_ii(o, r, n, a, e[i + 15], 10, -30611744), a = md5_ii(a, o, r, n, e[i + 6], 15, -1560198380), n = md5_ii(n, a, o, r, e[i + 13], 21, 1309151649), r = md5_ii(r, n, a, o, e[i + 4], 6, -145523070), o = md5_ii(o, r, n, a, e[i + 11], 10, -1120210379), a = md5_ii(a, o, r, n, e[i + 2], 15, 718787259), n = md5_ii(n, a, o, r, e[i + 9], 21, -343485551), r = safe_add(r, l), n = safe_add(n, s), a = safe_add(a, c), o = safe_add(o, g)
  }
  return Array(r, n, a, o)
}

function md5_cmn(e, t, r, n, a, o) {
  return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(n, o)), a), r)
}

function md5_ff(e, t, r, n, a, o, i) {
  return md5_cmn(t & r | ~t & n, e, t, a, o, i)
}

function md5_gg(e, t, r, n, a, o, i) {
  return md5_cmn(t & n | r & ~n, e, t, a, o, i)
}

function md5_hh(e, t, r, n, a, o, i) {
  return md5_cmn(t ^ r ^ n, e, t, a, o, i)
}

function md5_ii(e, t, r, n, a, o, i) {
  return md5_cmn(r ^ (t | ~n), e, t, a, o, i)
}

function safe_add(e, t) {
  var r = (65535 & e) + (65535 & t)
    , n = (e >> 16) + (t >> 16) + (r >> 16);
  return n << 16 | 65535 & r
}

function bit_rol(e, t) {
  return e << t | e >>> 32 - t
}

function str2binl(e) {
  for (var t = Array(), r = (1 << chrsz) - 1, n = 0; n < e.length * chrsz; n += chrsz) t[n >> 5] |= (e.charCodeAt(n / chrsz) & r) << n % 32;
  return t
}

function binl2hex(e) {
  for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", n = 0; n < 4 * e.length; n++) r += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
  return r
}

function $rw_hash(e) {
  return hex_md5(e)
}

function $rw_cachePage(e, t, r) {
  var n = 0;
  try {
    if (g_bInvalidHtml) return eba_cacheResult = "failure: The embedded speech toolbar cannot be added due to invalid html tag markup in this page.", window.external.completed(eba_cacheResult), eba_cacheResult;
    if (300 == g_nCustId && (g_strBookId = "string" == typeof r && null != r && r.length > 0 ? r : "1", g_strPageId = "1"), !g_bSpeechCacheGenerateFlag) return eba_cacheResult = "failure: The generate cache flag was set to false, no processing done for this page.", window.external.completed(eba_cacheResult), eba_cacheResult;
    null != t && $rw_setSpeedValue(parseInt(t), 10), null != e && $rw_setVoice(e);
    var a = SSDOM.getFirstSentence(document.body);
    $rw_doSelection(-2), n = rw_processSentence(a, n)
  } catch (o) {
    return eba_cacheResult = null != o.message ? "failure:" + o.message : "failure:" + o, window.external.completed(eba_cacheResult), eba_cacheResult
  }
  return eba_cacheResult = "success", n > 0 && (eba_cacheResult = eba_cacheResult + ":Warning, encountered " + n + " zero length speech files."), window.external.completed(eba_cacheResult), "success"
}

function rw_processSentence(e, t) {
  for (var r = e, n = t, a = 0; null != r;) {
    var o = rw_getSpeechOverCaretRangeToSpeak(r, new Array)
      , i = o.txt;
    if (null == i || 0 == i.trimTH()
      .length) {
      if (null == r) {
        if (a > 1) throw "Speech engine generating empty files.";
        return rw_notifyCallerPageFinished(), n
      }
      var l = SSDOM.getNextSentence(r);
      if (null == l) {
        if (a > 1) throw "Speech engine generating empty files.";
        return rw_notifyCallerPageFinished(), n
      }
      r = l
    }
    var s = rw_getHash(i)
      , c = rw_getCachedSpeechFolderName()
      , g = window.external.Generate(i, c, s);
    if (1 == g) a = 0;
    else {
      if (2 == g) throw "Got a Failure response from the speech engine.";
      if (3 == g && (++n, ++a, a > 4)) throw "Speech engine generating empty files."
    }
    r = SSDOM.getNextSentence(r)
  }
  if (a > 1) throw "Speech engine generating empty files.";
  return rw_notifyCallerPageFinished(), n
}

function rw_notifyCallerPageFinished() {
  var e = document.getElementById("pageComplete");
  null != e && e.click()
}

function rw_getCachedSpeechFileUrl(e) {
  if (g_bSplitCachePath) {
    var t = rw_getCachedSpeechFolderUrl()
      , r = rw_getHash(e)
      , n = rw_getSplitPathFromName(r);
    return t + "/" + n + "/" + r
  }
  return rw_getCachedSpeechFolderUrl() + "/" + rw_getHash(e)
}

function rw_getCachedSpeechFolderName() {
  var e = rw_replaceAll(g_strVoice, " ", "_");
  return rw_cacheFilterReservedOSChar(g_bIsScholastic ? g_strCustId + "\\" + g_strBookId + "\\" + $rw_scholasticHash(g_strPageId) + "\\" + g_strPageId + "\\" + e + g_nSpeedValue : g_strCustId + "\\" + g_strBookId + "\\" + g_strPageId + "\\" + e + g_nSpeedValue)
}

function rw_getCachedSpeechFolderUrl() {
  var e = rw_replaceAll(g_strVoice, " ", "_");
  return rw_cacheFilterReservedOSChar(g_bIsScholastic ? g_strCustId + "/" + g_strBookId + "/" + $rw_scholasticHash(g_strPageId) + "/" + g_strPageId + "/" + e + g_nSpeedValue : g_strCustId + "/" + g_strBookId + "/" + g_strPageId + "/" + e + g_nSpeedValue)
}

function rw_getSplitPathFromName(e) {
  return null == e || e.length < 2 ? "1/1" : e.substr(0, 1) + "/" + e.substr(1, 1)
}

function rw_cacheFilterReservedOSChar(e) {
  return e.replace(/[\x26\x3a\x2a\x3f\x22<>\x7c]/g, "")
}

function $rw_speechCacheGenErrorHandler(e) {
  g_strLastError = e;
  var t = document.getElementById("pageFailed");
  null != t && t.click()
}

function $rw_getLastError() {
  return g_strLastError
}

function rw_getTHRangeFromTHCaretRange(e) {
  return null == e || null == e.leftCaret || null == e.rightCaret ? null : new THRange(e.leftCaret.node.ownerDocument.body, rw_getRefPt(e.leftCaret.node, e.leftCaret.offset), rw_getRefPt(e.rightCaret.node, e.rightCaret.offset))
}

function rw_getTHRangeFromTHDomRange(e) {
  return null == e || null == e.startRef || null == e.endRef ? null : new THRange(e.body, e.startRef, e.endRef)
}

function rw_getTHCaretRangeFromTHDomRange(e) {
  if (null == e || null == e.startRef || null == e.endRef) return null;
  var t = SSDOM.getCaretFromDomPosition(e.body, e.startRef.path, e.startRef.offset, !0)
    , r = SSDOM.getCaretFromDomPosition(e.body, e.endRef.path, e.endRef.offset, !1);
  return null != t && null != r ? new THCaretRange(t, r) : null
}

function rw_getTHCaretRangeFromTHRange(e) {
  if (null == e || null == e.startRef || null == e.endRef) return null;
  var t = SSDOM.getCaretFromDomPosition(e.body, e.startRef.path, e.startRef.offset, !0)
    , r = SSDOM.getCaretFromDomPosition(e.body, e.endRef.path, e.endRef.offset, !1);
  return null != t && null != r ? new THCaretRange(t, r) : null
}

function rw_getRefPtFromCaret(e) {
  return rw_getRefPt(e.node, e.offset)
}

function rw_getCaretFromRefPt(e, t) {
  return SSDOM.getCaretFromDomPosition(e, t.path, t.offset, !0)
}

function rw_getHash(e) {
  return 200 == g_nCustId ? e = e.replace(/\s+/g, " ") : (e = e.replace(/(\x3cbookmark\x20mark\x3d\x22(\d)+\x22\x2f\x3e)/g, ""), e = e.replace(/[\s\xA0]+/g, " ")), hex_md5(e)
}

function $rw_scholasticHashShort(e) {
  var t = e.replace(/^0+|[^0-9]/g, "");
  return "0001".substring(0, 4 - t.length) + t.substring(0, 4)
}

function $rw_scholasticHash(e) {
  var t = e.replace(/^0+|[^0-9]/g, "");
  return t = t.length < 4 ? "0001".substring(0, 4 - t.length) + t : t.substring(0, 4)
}

function rw_getDisplayWidth(e) {
  "undefined" == typeof e && (e = window);
  var t = e.innerWidth ? e.innerWidth : e.document.body.offsetWidth;
  return t
}

function rw_getDisplayWidthAdjusted(e) {
  "undefined" == typeof e && (e = window);
  var t = (e.innerWidth ? e.innerWidth : e.document.body.offsetWidth) - rw_getScrollBarWidth(e);
  return t
}

function rw_getDocumentDisplayWidth(e) {
  "undefined" == typeof e && (e = window);
  var t = e.innerWidth ? e.innerWidth : e.document.documentElement.offsetWidth;
  return t
}

function rw_getDocumentDisplayWidthAdjusted(e) {
  "undefined" == typeof e && (e = window);
  var t = (e.innerWidth ? e.innerWidth : e.document.documentElement.offsetWidth) - rw_getScrollBarWidth(e);
  return t
}

function rw_getDisplayHeight(e) {
  if ("undefined" == typeof e && (e = window), g_bIpadBugWorkaroundNastyHack) return top.window.innerHeight;
  if (g_bXDTDType) return rw_getDocumentDisplayHeight(e);
  var t = e.innerHeight ? e.innerHeight : e.document.body.offsetHeight;
  return t
}

function rw_getDisplayHeightAdjusted(e) {
  if ("undefined" == typeof e && (e = window), g_bIpadBugWorkaroundNastyHack) return top.window.innerHeight - window.pageYOffset;
  if (g_bXDTDType) return rw_getDocumentDisplayHeightAdjusted(e);
  var t = (e.innerHeight ? e.innerHeight : e.document.body.offsetHeight) - rw_getScrollBarHeight(e);
  return t
}

function rw_getDocumentDisplayHeight(e) {
  if ("undefined" == typeof e && (e = window), g_bIpadBugWorkaroundNastyHack) return top.window.innerHeight;
  var t = e.innerHeight ? e.innerHeight : e.document.documentElement.offsetHeight;
  return t
}

function rw_getDocumentDisplayHeightAdjusted(e) {
  "undefined" == typeof e && (e = window);
  var t = (e.innerHeight ? e.innerHeight : e.document.documentElement.offsetHeight) - rw_getScrollBarHeight(e);
  return t
}

function rw_getScreenOffsetLeftAlt(e) {
  if ("undefined" == typeof e && (e = window), "CSS1Compat" == e.document.compatMode && e.document.body.parentNode && e.document.body.parentNode.scrollLeft) return e.document.body.parentNode.scrollLeft;
  var t = e.pageXOffset ? e.pageXOffset : e.scrollX ? e.scrollX : e.document.body.scrollLeft ? e.document.body.scrollLeft : e.document.documentElement.scrollLeft ? e.document.documentElement.scrollLeft : 0;
  return t
}

function rw_getScreenOffsetLeft(e) {
  return "undefined" == typeof e && (e = window), e.pageXOffset && e.pageXOffset > 0 ? e.pageXOffset : e.document.body.scrollLeft && e.document.body.scrollLeft > 0 ? e.document.body.scrollLeft : e.document.documentElement.scrollLeft && e.document.documentElement.scrollLeft > 0 ? e.document.documentElement.scrollLeft : 0
}

function rw_getScreenOffsetTop(e) {
  return "undefined" == typeof e && (e = window), e.pageYOffset && e.pageYOffset > 0 ? e.pageYOffset : e.document.body.scrollTop && e.document.body.scrollTop > 0 ? e.document.body.scrollTop : e.document.documentElement.scrollTop && e.document.documentElement.scrollTop > 0 ? e.document.documentElement.scrollTop : 0
}

function rw_getScrollLeft(e) {
  return e.scrollLeft && e.scrollLeft > 0 ? e.scrollLeft : "body" == e.tagName.toLowerCase() && e.ownerDocument && e.ownerDocument.documentElement && e.ownerDocument.documentElement.scrollLeft ? e.ownerDocument.documentElement.scrollLeft : 0
}

function rw_getScrollTop(e) {
  return e.scrollTop && e.scrollTop > 0 ? e.scrollTop : "body" == e.tagName.toLowerCase() && e.ownerDocument && e.ownerDocument.documentElement && e.ownerDocument.documentElement.scrollTop ? e.ownerDocument.documentElement.scrollTop : 0
}

function rw_getScrollBarWidth(e) {
  return g_bIE ? g_bXDTDType ? 20 : ("undefined" == typeof e && (e = window), e.document.compatMode.equalsTH("CSS1Compat") ? e.document.documentElement.offsetWidth - e.document.documentElement.clientWidth : e.document.body.offsetWidth - e.document.body.clientWidth) : window.scrollMaxY > 0 || g_bSafari ? 18 : 4
}

function rw_getScrollBarHeight(e) {
  return "undefined" == typeof e && (e = window), g_bIE ? g_bXDTDType ? 20 : e.document.compatMode.equalsTH("CSS1Compat") ? e.document.documentElement.offsetHeight - e.document.documentElement.clientHeight : e.document.body.offsetHeight - e.document.body.clientHeight : e.scrollMaxX > 0 ? 18 : 4
}

function rw_getSelection() {
  var e = null
    , t = null;
  if (g_bIEOld) {
    var r = document.selection.createRange();
    if (null == r || null == r.text || 0 == r.text.length) {
      var n = SSDOM.getFrameSelectionOldIE(window);
      n.theRange && (e = n.theWindow, t = n.theRange)
    } else e = window, t = r;
    if (null != t) {
      var a = t.duplicate();
      a.collapse();
      var o = a.parentElement();
      SSDOM.isIgnored(o) && (t = null)
    }
    null != t && null != t.parentElement() && "input" == t.parentElement()
      .tagName.toLowerCase() && (t = new String(t.text))
  } else {
    null != g_ipadSelectionRange && g_ipadSelectionWindow.getSelection()
      .addRange(g_ipadSelectionRange);
    var i = window.getSelection()
      , l = null;
    if (!i.isCollapsed && i.toString()
      .trimTH()
      .length > 0) e = window, l = i;
    else {
      if (g_lastInputSelectSFF && g_lastInputSelectSFF.selectionStart != g_lastInputSelectSFF.selectionEnd) return {
        frame: window
        , range: new String(g_lastInputSelectSFF.value.substring(g_lastInputSelectSFF.selectionStart, g_lastInputSelectSFF.selectionEnd))
      };
      var n = SSDOM.getFrameSelectionSFF(window);
      n.foundSel && (e = n.theWindow, l = n.foundSel)
    }
    if (null == l) return null;
    if (l.anchorNode && SSDOM.isIgnored(l.anchorNode)) return null;
    if (l.focusNode && l.focusNode.id && "flashcontent" == l.focusNode.id) return null;
    if (null != l.anchorNode && l.anchorNode == l.focusNode && l.anchorOffset == l.focusOffset) return null;
    var s = null;
    if (l.getRangeAt) s = l.getRangeAt(0);
    else {
      var r = SSDOM.getRangeObject();
      null != r && (l.anchorNode == l.focusNode && l.anchorOffset == l.focusOffset ? r = SSDOM.getRangeFromSelectionPoint(l) : (r.setStart(l.anchorNode, l.anchorOffset), r.setEnd(l.focusNode, l.focusOffset), 0 == r.toString()
        .length && (r.setStart(l.focusNode, l.focusOffset), r.setEnd(l.anchorNode, l.anchorOffset))), s = r)
    }
    if (null == s) return null;
    var c = s.startContainer
      , g = s.startOffset
      , u = s.endContainer
      , _ = s.endOffset;
    if (3 != c.nodeType) {
      if (1 != c.nodeType) return null;
      if (g > 0 && c.hasChildNodes() && c.childNodes.length > g)
        if (c = c.childNodes[g], 3 == c.nodeType) g = 0;
        else if (g = 0, "[object HTMLEmbedElement]" == c.toString()) return null
    }
    if (3 != u.nodeType) {
      if (1 != u.nodeType) return null;
      if (u.hasChildNodes())
        if (u.childNodes.length > _) u = u.childNodes[_];
        else if (u = u.childNodes[_ - 1], 3 != u.nodeType) {
        var d = SSDOM.getLastChildTextNode(u, !0);
        null != d && (u = d)
      }
      if (3 != u.nodeType) {
        var h = SSDOM.getPreviousNode(c, !0, null)
          , d = SSDOM.getPreviousTextNode(u, !0, h);
        null != d && (u = d)
      }
      _ = 3 == u.nodeType ? u.nodeValue.length : 0
    }
    t = new THDomRange(c, g, u, _)
  }
  return null != e && null != t ? {
    frame: e
    , range: t
  } : null
}

function rw_getSelectionWithTHRange() {
  var e = rw_getSelection();
  return null == e || null == e.range || e.range instanceof String || (g_bIEOld ? e.range = rw_getTextRangeAsTHRange(e.frame.document.body, e.range) : e.range instanceof THDomRange && (e.range = rw_getTHRangeFromTHDomRange(e.range))), e
}

function rw_getSelectionText() {
  var e = rw_getSelection();
  if (null != e) {
    var t = e.range;
    return t instanceof String ? t : t instanceof THDomRange ? t.toString() : e.range.text
  }
  return ""
}

function rw_scrollToObject(e) {
  if ("boolean" != typeof eba_no_scroll || !eba_no_scroll) {
    try {
      var t = SSDOM.getWindow(e);
      if (null == t || null == e || null == e.parentNode) return;
      var r = 0
        , n = 0
        , a = e;
      3 == a.nodeType && (a = a.parentNode);
      for (var o = null, i = a, l = a.ownerDocument.body, s = !1, c = null; null != i && i != l;) "div" != i.tagName.toLowerCase() && "form" != i.tagName.toLowerCase() || rw_isDivScrollable(i) && (s = !0, o = rw_scrollToObjectDivCheck(a, i, o), c = i, a = i), i = i.parentNode;
      for (null != c && (a = c); null != a;) r += a.offsetLeft, n += a.offsetTop, a = a.offsetParent;
      null != o && (n += o.y, r += o.x);
      var g, u, _, d, h = 30;
      3 == e.nodeType && (h = 10 + 5 * e.nodeValue.length, h > 60 && (h = 60)), g = rw_getScreenOffsetLeft(t), u = rw_getScreenOffsetTop(t), "number" == typeof t.innerWidth ? (_ = t.innerWidth, d = t.innerHeight) : t.document.documentElement.clientHeight > 0 && t.document.documentElement.clientWidth > 0 ? (_ = t.document.documentElement.clientWidth, d = t.document.documentElement.clientHeight) : (_ = t.document.body.clientWidth, d = t.document.body.clientHeight), _ -= h, d -= 20;
      var p, S;
      if (p = r < g || r > g + _, S = n < u || n > u + d, p || S && (0 != r || 0 != n)) {
        r > g + _ && (r = (r + g) / 2), n > u + d && (n = (n + u) / 2);
        var f = $g_bMouseSpeech;
        if ($g_bMouseSpeech && ($g_bMouseSpeech = !1), t.scrollTo(p ? r : g, S ? n : u), g_bTouchScreen && (rw_positionToolbar(), rw_positionAllDivBars()), f) {
          var m = function () {
            $g_bMouseSpeech = !0
          };
          setTimeout(m, 500)
        }
      }
    } catch (b) {
      thLogE(b)
    }
    g_bDidScroll = !1
  }
}

function rw_isDivScrollable(e) {
  var t = e.clientHeight
    , r = e.clientWidth
    , n = SSDOM.getComputedStyle(e)
    , a = !1;
  return null != n && "visible" != n.overflow && "inline" != n.display && (e.scrollHeight > t && "visible" != n.overflowY && (a = !0), e.scrollWidth > r && "visible" != n.overflowX && (a = !0)), a
}

function rw_scrollToObjectDivCheck(e, t, r) {
  for (var n, a, o = t.clientHeight, i = t.clientWidth, l = 0, s = 0, c = e; c != t && null != c;) l += c.offsetTop, s += c.offsetLeft, c = rw_safeOffsetParent(c, t);
  return null == c && (s -= t.offsetLeft, l -= t.offsetTop), null != r && (l += r.y, s += r.x), (t.scrollTop > l || t.scrollTop + o < l + e.offsetHeight) && (o > 6 * e.offsetHeight ? t.scrollTop = l - e.offsetHeight : t.scrollTop = l), (t.scrollLeft > s || t.scrollLeft + i < s + e.offsetWidth) && (t.scrollLeft = s), n = s - t.scrollLeft, a = l - t.scrollTop, {
    x: n
    , y: a
  }
}

function rw_safeOffsetParent(e, t) {
  var r = e
    , n = r.offsetParent;
  if (null == n) return null;
  if (null == t) return n;
  for (; null != r && r != n;) {
    if (r == t) return null;
    r = r.parentNode
  }
  return n
}

function rw_testTHScreenUtils() {
  var e = "rw_getDisplayWidth=" + rw_getDisplayWidth() + "  rw_getDisplayWidthAdjusted=" + rw_getDisplayWidthAdjusted() + "  rw_getDocumentDisplayWidth=" + rw_getDocumentDisplayWidth() + "  rw_getDocumentDisplayWidthAdjusted=" + rw_getDocumentDisplayWidthAdjusted() + "  rw_getDisplayHeight=" + rw_getDisplayHeight() + "  rw_getDisplayHeightAdjusted=" + rw_getDisplayHeightAdjusted() + "  rw_getDocumentDisplayHeight=" + rw_getDocumentDisplayHeight() + "  rw_getDocumentDisplayHeightAdjusted=" + rw_getDocumentDisplayHeightAdjusted() + "  rw_getScreenOffsetLeft=" + rw_getScreenOffsetLeft() + "  rw_getScreenOffsetTop=" + rw_getScreenOffsetTop() + "  rw_getScrollBarWidth=" + rw_getScrollBarWidth() + "  rw_getScrollBarHeight=" + rw_getScrollBarHeight();
  rw_alert(e)
}

function rw_testScroll(e) {
  rw_scrollToObject(document.getElementById(e))
}

function rw_getRefPt(e, t) {
  try {
    if (null == e) return null;
    if (1 == e.nodeType || 3 == e.nodeType) {
      var r = SSDOM.checkForSpecialParent(e);
      if (null != r) return new THDomRefPt(SSDOM.getPositionInDom(r), t);
      var n, a;
      1 == e.nodeType ? (n = 0, a = e) : (n = rw_getNodeOffset(e), a = e.parentNode);
      for (var o = a.getAttribute("rwstate"), i = a.getAttribute(RWTH_GENERATED); null != o && o.length > 0 || null != i;) n += rw_getNodeOffset(a), a = a.parentNode, o = a.getAttribute("rwstate"), i = a.getAttribute(RWTH_GENERATED);
      return t == -1 && (n = -1), new THDomRefPt(SSDOM.getPositionInDom(a), n + t)
    }
    return null
  } catch (l) {
    return null
  }
}

function rw_getNodeOffset(e) {
  if (null == e) return 0;
  var t = 0
    , r = e.previousSibling;
  return null != r && (t = rw_getNodeOffsetImpl(r)), t
}

function rw_getNodeOffsetImpl(e) {
  for (var t, r = 0, n = e; null != n;) 3 == n.nodeType ? (t = n.nodeValue, r += t.length) : 1 == n.nodeType && (SSDOM.isInvalidNode(n) || (r += SSDOM.isSpecialCase(n) ? 1 : "textarea" != n.tagName.toLowerCase() ? rw_getNodeOffsetImpl(n.lastChild) : 1)), n = n.previousSibling;
  return r
}

function rw_checkIfBlockCache(e) {
  if (g_bSpeechCacheFlag || g_bSpeechCacheGenerateFlag) {
    var t = SSDOM.getBody(e);
    if ("tinymce" == t.getAttribute("id")) return !0;
    var r = e;
    for (3 == r.nodeType && (r = r.parentNode); null != r && r != t;) {
      if (null != r.getAttribute(RWTH_COMPONENT)) return !0;
      r = r.parentNode
    }
  }
  return !1
}

function getNodeText(e) {
  var t = "";
  try {
    if (1 == e.nodeType && null == e.getAttribute("ignore")) {
      var r = e.tagName.toLowerCase();
      if ("input" == r) {
        var n = e.getAttribute("type");
        if (null != n)
          if (n = n.toLowerCase(), 0 == n.length || "text" == n) t = e.value;
          else if ("password" == n) t = "";
        else if ("image" == n) {
          var a = e.getAttribute("alt");
          t = null != a && a.length > 0 ? a : ""
        } else "button" != n && "submit" != n && "reset" != n || (t = "rwcalbutton" == e.className || "rwcalEqbutton" == e.className ? e.getAttribute("name") : e.getAttribute("value"));
        else t = e.value
      } else if ("select" == r) {
        for (var o = e.selectedIndex, i = "", l = e.options.length, s = 0; s < l; s++) i += e.options[s].text + " ";
        l > 0 && (t = o > -1 ? e.options[o].text + " selected from the list " + i : "No selection from list " + i)
      } else if ("textarea" == r || "option" == r) t = e.value;
      else if ("img" == r) {
        var c = e.getAttribute("title");
        if (null != c && c.length > 0) t = c;
        else {
          var a = e.getAttribute("alt");
          if (null != a && a.length > 0) t = a;
          else {
            var g = e.getAttribute("msg");
            null != g && g.length > 0 && (t = g)
          }
        }
      } else if ("math" == r) {
        var u = SSDOM.getTextFromMathMl(e);
        u.length > 0 && (t = a)
      } else {
        var a = e.getAttribute("alt");
        if (null != a && a.length > 0) t = a;
        else {
          var g = e.getAttribute("msg");
          null != g && g.length > 0 && (t = g)
        }
      }
    }
  } catch (_) {
    t = ""
  }
  return null == t && (t = ""), t
}

function rw_mathsMappingSetup(e) {
  var t, r, n, a, o, i;
  for (r = 0, n = e.indexOf(":"), a = e.indexOf(";", n); r > -1 && n > -1 && (o = e.substring(r, n), i = a > -1 ? e.substring(n + 1, a) : e.substring(n + 1), 0 == i.length ? (t = g_mathsSymbolArray.indexOf(o), t > -1 && (g_mathsSymbolArray.splice(t, 1), delete g_mathsMapping[o])) : (t = g_mathsSymbolArray.indexOf(o), t > -1 || g_mathsSymbolArray.push(o), g_mathsMapping[o] = i), a > -1);) r = a + 1, n = e.indexOf(":", r), a = e.indexOf(";", n)
}

function rw_mathsSymbolReplacement(e) {
  var t = e.length
    , r = e
    , n = rw_trimTextToMathsSymbols(e);
  if (null == n) return e;
  var a, o, i;
  for (a = t - 1; a >= 0; a--)
    if (i = n.charCodeAt(a), 32 != i) {
      for (o = a; 32 != i && a >= 0;) --a, i = n.charCodeAt(a);
      var l = n.substring(a + 1, o + 1);
      null != g_mathsMapping[l] && (r = r.substring(0, a + 1) + " " + g_mathsMapping[l] + " " + r.substr(o + 1))
    }
  return r
}

function rw_trimTextToMathsSymbols(e) {
  var t, r, n = !1
    , a = e.length
    , o = "";
  for (t = 0; t < a; t++) r = e.charCodeAt(t), 32 == r || rw_isTextChar(r) ? o += " " : (o += e.charAt(t), n = !0);
  return n ? o : null
}

function rw_mathsSymbolCheck(e) {
  return g_mathsSymbolArray.indexOf(e.trimTH()) > -1
}

function rw_mathsSymbolReplacementSentenceCheck(e) {
  var t, r, n = !1
    , a = e.split(" ")
    , o = a.length;
  for (r = 0; r < o; r++) t = rw_mathsSymbolReplacement(a[r]), t != a[r] && (a[r] = t, n = !0);
  if (n) {
    var i = "";
    for (r = 0; r < o - 1; r++) i += a[r], i += " ";
    return i += a[o - 1]
  }
  return e
}

function rw_mathsSymbolReplacementWordList(e) {
  var t = !1;
  if (g_bMathsSymbols && null != e) {
    var r, n = e.length;
    for (r = 0; r < n; r++) {
      var a = rw_mathsSymbolReplacement(e[r]);
      a != e[r] && (e[r] = a, t = !0)
    }
  }
  return t
}

function rw_replaceAll(e, t, r) {
  if ("string" == typeof e)
    for (var n = e.indexOf(t); n > -1;) e = e.replace(t, r), n = e.indexOf(t, n + 1);
  return e
}

function rw_filterForHtml(e) {
  var t = e.replace(/\x26/g, "&amp;");
  return t = t.replace(/\x3c/g, "&lt;"), t = t.replace(/\x3e/g, "&gt;")
}

function rw_filterId(e) {
  var t = e.length;
  if (t > 100) return hex_md5(e);
  var r, n, a;
  for (r = 0; r < t; r++) n = e.charCodeAt(r), n > 47 && n < 58 || n > 63 && n < 92 || n > 94 && n < 124 || (n > 126 || 92 == n || 47 == n || 58 == n || 59 == n || 42 == n || 63 == n || 34 == n || 60 == n || 62 == n || 124 == n || 35 == n || 37 == n || 43 == n || 38 == n || 94 == n) && (a = "^" + d2h(n), e = e.substr(0, r) + a + e.substr(r + 1), t = e.length, r += a.length - 1);
  return e
}

function rw_getRndId(e) {
  for (var t, r = "th_tmp$", n = 1, a = !0; a;) t = r + n, e.document.getElementById(t) ? ++n : a = !1;
  return t
}

function rw_getTargetNodeAsCaretIE(e, t) {
  try {
    if ((g_bIE8 || g_bIE9 || g_bIE10) && t && !rw_isCalcButton(e)) {
      var r, n = e.srcElement
        , a = SSDOM.getWindow(n)
        , o = n.childNodes.length
        , i = !1;
      for (r = 0; r < o; r++)
        if (3 == n.childNodes[r].nodeType) {
          i = !0;
          break
        }
      if (i) {
        null == g_strRndId && (g_strRndId = rw_getRndId(a));
        var l = a.document.getElementById(g_strRndId);
        null != l && l.parentNode.removeChild(l);
        var s = a.document.selection.createRange();
        s.collapse(), s.pasteHTML("<th-span id='" + g_strRndId + "'></th-span>");
        var c = a.document.getElementById(g_strRndId)
          , g = null;
        return null != c && (null != c.previousSibling && 3 == c.previousSibling.nodeType && (SSDOM.mergeTextNodes(c.previousSibling), g = new THCaret(c.previousSibling, c.previousSibling.length, (!0))), null != c.nextSibling && 3 == c.nextSibling.nodeType && (SSDOM.mergeTextNodes(c.nextSibling), null == g && (g = new THCaret(c.nextSibling, 0, (!0)))), null == g && null != c.nextSibling && 1 == c.nextSibling.nodeType ? g = new THCaret(c.nextSibling, 0, (!0)) : null == g && null != c.previousSibling && 1 == c.previousSibling.nodeType && (g = new THCaret(c.previousSibling, 0, (!0)))), null == g && (g = new THCaret(c.parentNode, 0, (!0))), null != c && c.parentNode.removeChild(c), g
      }
      return new THCaret(n, 0, (!0))
    }
    if (g_bIENew) {
      if (targetElement = e.target, null != targetElement) {
        if (null != targetElement.firstChild && 3 == targetElement.firstChild.nodeType && "textarea" != targetElement.tagName.toLowerCase()) {
          var u = targetElement.firstChild.nodeValue;
          u.trimTH()
            .length > 0 && (targetElement = targetElement.firstChild)
        }
        return new THCaret(targetElement, 0, (!0))
      }
    } else {
      var _ = rw_mouseCoords(e)
        , d = SSDOM.getRangeObject(e.srcElement.ownerDocument.body);
      try {
        d.moveToPoint(_.x, _.y)
      } catch (h) {
        return null
      }
      for (var p = SSDOM.getRangeObject(e.srcElement.ownerDocument.body), S = SSDOM.getRangeObject(e.srcElement.ownerDocument.body), f = e.srcElement.firstChild; null != f;) {
        if (3 == f.nodeType && f.nodeValue.trimTH()
          .length > 0) {
          SSDOM.mergeTextNodes(f);
          for (var m = f.previousSibling; null != m && 1 != m.nodeType;) m = m.previousSibling;
          null != m ? (p.moveToElementText(m), p.collapse(!1)) : p.moveToElementText(f.parentNode);
          for (var b = f.nextSibling; null != b && 1 != b.nodeType;) b = b.nextSibling;
          if (null != b ? (S.moveToElementText(b), p.setEndPoint("EndToStart", S)) : (S.moveToElementText(f.parentNode), p.setEndPoint("EndToEnd", S)), p.inRange(d)) {
            var T = rw_getOffsetInNodeWithTextRange(f, p, d);
            return new THCaret(f, T, (!0))
          }
        }
        f = f.nextSibling
      }
    }
  } catch (w) {
    thLog("rw_getTargetNodeAsCaretIE error:" + w.message)
  }
  return null
}

function rw_getTextRangeAsRefPtIE(e, t) {
  try {
    var r = SSDOM.getRangeObject(e)
      , n = t.parentElement();
    r.moveToElementText(n);
    var a = rw_getOffsetInNodeWithTextRange(n, r, t)
      , o = rw_getRefPt(n, a);
    return o
  } catch (i) {
    thLog("rw_getTextRangeAsRefPtIE error:" + i.message)
  }
  return null
}

function rw_getOffsetInNodeWithTextRange(e, t, r) {
  try {
    var n = 0
      , a = t.duplicate();
    a.collapse(), a.move("character", 1), a.move("character", -1);
    for (var o = 0, i = 0; a.compareEndPoints("EndToEnd", r) == -1;) a.moveEnd("character", 1), o = a.text.length, o > i && (++n, i = o);
    return n
  } catch (l) {
    return 0
  }
}

function rw_getTextRangeAsTHRange(e, t) {
  var r = t.duplicate();
  r.collapse(!0);
  var n = rw_getTextRangeAsRefPtIE(e, r);
  r = t.duplicate(), r.collapse(!1);
  var a = rw_getTextRangeAsRefPtIE(e, r);
  return new THRange(e, n, a)
}

function rw_getAsTextRange(e, t, r, n, a) {
  var o = SSDOM.getRangeObject(e)
    , i = SSDOM.getCaretPairFromDomPosition(e, t, -1, n, -1)
    , l = i.leftCaret
    , s = i.rightCaret;
  if (null != l && null != l.node && null != s && null != s.node) {
    var c = l.node;
    if (3 == c.nodeType) {
      var g = rw_getNodeOffset(c);
      c = c.parentNode, r += g
    }
    var u = s.node;
    if (3 == u.nodeType) {
      var g = rw_getNodeOffset(u);
      u = u.parentNode, a += g
    }
    o.moveToElementText(c), o.collapse(), rw_moveEnd(o, r), o.collapse(!1), o.select();
    var _ = SSDOM.getRangeObject(e);
    _.moveToElementText(u), _.collapse(), rw_moveEnd(_, a), _.collapse(!1), o.setEndPoint("EndToEnd", _)
  } else o = null, thLog("Error with rw_getAsTextRange.");
  return o
}

function rw_moveEnd(e, t) {
  var r, n, a;
  for (r = e.text.length; t > 0;) {
    if (a = e.moveEnd("character", t), 0 == a) return;
    n = e.text.length, t -= n - r, r = n
  }
}

function rw_encodeForStorage(e) {
  var t, r, n, a;
  if (SpeechStream.pronunciation.encodeData())
    for (t = "", r = e.length, n = 0; n < r; n++)
      if (a = e.charCodeAt(n), a < 40 && 33 != a || 43 == a || 47 == a || 60 == a || 62 == a || 92 == a || 96 == a || a > 126) {
        var o = d2h(a);
        switch (o.length) {
        case 1:
          o = "0" + o;
        case 2:
          t += "/x" + o;
          break;
        case 3:
          o = "0" + o;
        case 4:
          t += "/u" + o
        }
      } else t += e.charAt(n);
  else
    for (t = "", r = e.length, n = 0; n < r; n++) a = e.charCodeAt(n), t += 34 == a ? "%22" : 39 == a ? "%27" : e.charAt(n);
  return t
}

function rw_decodeFromStorage(e) {
  var t, r, n, a = decodeURIComponent(e)
    , o = ""
    , i = a.length;
  for (t = 0; t < i; t++) {
    var l = a.charAt(t);
    if ("/" == l) {
      if (t < i - 1) {
        var s = a.charAt(t + 1);
        switch (s) {
        case "/":
          o += "/", t++;
          break;
        case "x":
          t < i - 3 && (r = a.substr(t + 2, 2), n = h2d(r), o += String.fromCharCode(n), t += 3);
          break;
        case "u":
          t < i - 5 && (r = a.substr(t + 2, 4), n = h2d(r), o += String.fromCharCode(n), t += 5)
        }
      }
    } else "+" == l ? o += " " : 10 == l || 13 == l || ("%" == l ? t < i - 2 ? (r = a.substr(t, 3), "%2f" == r ? (o += "/", t += 2) : "%2a" == r ? (o += ":", t -= 2) : "%60" == r ? (o += "`", t -= 2) : t < i - 9 ? (r = a.substr(t, 10), "%26quot%3b" == r ? (o += '"', t += 9) : t < i - 6 ? (r = a.substr(t, 7), "%26quot" == r ? (o += '"', t += 6) : o += l) : o += l) : o += l) : o += l : "&" == l ? t < i - 5 && (r = a.substr(t, 6), "&#x27" == r ? o += "'" : "&quot;" == r && (o += '"'), o += String.fromCharCode(n), t += 5) : o += a.charAt(t))
  }
  return o
}

function rw_encodeForHTML(e) {
  var t, r = ""
    , n = e.length;
  for (t = 0; t < n; t++) {
    var a = e.charCodeAt(t);
    r += a < 40 && 33 != a || 43 == a || 47 == a || 60 == a || 62 == a || 92 == a || 96 == a || a > 126 ? "&#" + a + ";" : e.charAt(t)
  }
  return r
}

function rw_encodeForHTMLParam(e) {
  var t, r = ""
    , n = e.length;
  for (t = 0; t < n; t++) {
    var a = e.charCodeAt(t);
    r += a < 40 && 33 != a || 43 == a || 47 == a || 60 == a || 62 == a || 92 == a || 96 == a || a > 126 ? 34 == a || 39 == a ? "\\&#" + a + ";" : "&#" + a + ";" : e.charAt(t)
  }
  return r
}

function rw_checkPronunciation(e) {
  if (!g_bPronActive) return !1;
  var t, r, n, a = !1
    , o = e.length;
  for (n = 0; n < o; n++)
    if (r = e[n].trimTH(), r.indexOf(" ") > -1) {
      var i = rw_checkPronunciationFromString(r);
      i != r && (e[n] = i, a = !0)
    } else {
      var l;
      if (m_pronDictionary.MultiwordStart$__.indexOf(r) > -1) {
        if (n < o - 1 && (t = r + " " + e[n + 1].trimTH(), null != (l = m_pronDictionary.get$__(t)))) {
          var s = l.split(" ")
            , c = s[0] + " "
            , g = s[1] + " ";
          e[n] = c, e[n + 1] = g, a = !0;
          continue
        }
        if (n < o - 2 && (t = r + " " + e[n + 1].trimTH() + " " + e[n + 2].trimTH(), null != (l = m_pronDictionary.get$__(t)))) {
          var s = l.split(" ")
            , c = s[0] + " "
            , g = s[1] + " "
            , u = s[2] + " ";
          e[n] = c, e[n + 1] = g, e[n + 2] = u, a = !0;
          continue
        }
      }
      if (null == (l = m_pronDictionary.get$__(r)) && null == (l = m_pronDictionary.get$__(r.toLowerCase()))) {
        if (t = r.replace(rw_qouteRegex, "'"), t = t.replace(rw_dqouteRegex, '"'), r != t) {
          if (null != (l = m_pronDictionary.get$__(t)) || null != (l = m_pronDictionary.get$__(t.toLowerCase()))) {
            e[n] = l + " ", a = !0;
            continue
          }
          if (r = t, t = r.replace(rw_trimRegex, ""), r != t && (null != (l = m_pronDictionary.get$__(t)) || null != (l = m_pronDictionary.get$__(t.toLowerCase())))) {
            e[n] = l + " ", a = !0;
            continue
          }
        } else if (t = r.replace(rw_trimRegex, ""), r != t && (null != (l = m_pronDictionary.get$__(t)) || null != (l = m_pronDictionary.get$__(t.toLowerCase())))) {
          e[n] = l + " ", a = !0;
          continue
        }
      } else e[n] = l + " ", a = !0
    }
  return a
}

function rw_checkPronunciationFromString(e) {
  if (!g_bPronActive) return e;
  var t = ""
    , r = e.split(" ");
  if (rw_checkPronunciation(r)) {
    var n, a = r.length;
    for (n = 0; n < a; n++) t += r[n], n < a - 1 && (t += " ");
    return t
  }
  return e
}

function rw_processPronunciationsFromServer(e) {
  var t, r, n, a, o, i, l = e.split("\r\n");
  for (i = 0; i < l.length; i++) {
    n = l[i];
    var s = n.indexOf("&p_pageID=*&") > -1;
    t = n.indexOf("&sayThis="), r = n.indexOf("&likeThis="), a = n.substring(t + 9, r), o = n.substring(r + 10), a = rw_decodeFromStorage(a), o = rw_decodeFromStorage(o), m_pronDictionary.add$__(a, o, s)
  }
  "function" == typeof rw_editPronRefresh && rw_editPronRefresh()
}

function rw_preparePronunciationsForServer() {}

function rw_loadPronunciationsFromServer() {
  if (null != g_strCustId && g_strCustId.length > 0 && null != g_strBookId && g_strBookId.length > 0 && null != g_strPageId && g_strPageId.length > 0) {
    var e;
    if (null == SpeechStream.cacheMode.getLiveServer()) return;
    e = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer();
    var t = "&custID=" + g_strCustId + "&bookID=" + g_strBookId + "&pageID=" + g_strPageId + "&combined=Y"
      , r = g_controllerFactory.getConnector();
    null == r ? rw_alert("Connection to the server is not available.") : r.getPronunciationDataAll(e, t)
  }
}

function $rw_loadPronCallback(e) {
  null == e ? g_nTries > 0 ? (--g_nTries, rw_loadPronunciationsFromServer()) : rw_alert("Failed to load pronunciation data, this may affect the text to speech function.") : (e = e.trimTH(), "" == e ? (SpeechStream.pronunciation.mode != SpeechStream.pronunciation.SERVER_PRONUNCIATION && (g_bLocalPronunciationLoaded = !0), "function" == typeof rw_editPronRefresh && rw_editPronRefresh()) : "-1" == e ? g_nTries > 0 ? (--g_nTries, rw_loadPronunciationsFromServer()) : rw_alert("Failed to load pronunciation data, this may affect the text to speech function.") : (SpeechStream.pronunciation.mode != SpeechStream.pronunciation.SERVER_PRONUNCIATION && (g_bLocalPronunciationLoaded = !0), rw_processPronunciationsFromServer(e)))
}

function rw_addPronunciationToServer(e, t, r) {
  if (null != g_strCustId && g_strCustId.length > 0 && null != g_strBookId && g_strBookId.length > 0 && null != g_strPageId && g_strPageId.length > 0) {
    var n;
    if (null == SpeechStream.cacheMode.getLiveServer()) return;
    n = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer();
    var a = "&custID=" + g_strCustId + "&bookID=" + g_strBookId + "&pageID=" + (r ? "*" : g_strPageId) + "&sayThis=" + rw_encodeForStorage(e) + "&likeThis=" + rw_encodeForStorage(t)
      , o = g_controllerFactory.getConnector();
    null == o ? alert("Connection to the server is not available.") : o.addPronunciationData(n, a)
  }
}

function $rw_addPronCallback(e) {
  if (null == e) document.getElementById("confirmPageMsg")
    .innerHTML = "Failed to insert.";
  else if ("-1" == e) document.getElementById("confirmPageMsg")
    .innerHTML = "Failed to insert.";
  else {
    var t = document.getElementById("createSayThis")
      .value.trimTH()
      , r = document.getElementById("createLikeThis")
      .value.trimTH()
      , n = document.getElementById("createAllPages")
      .checked;
    m_pronDictionary.add$__(t, r, n), document.getElementById("createSayThis")
      .value = "", document.getElementById("createLikeThis")
      .value = "", document.getElementById("confirmPageMsg")
      .innerHTML = "Pronunciation inserted.", rw_editPronRefresh()
  }
}

function rw_updatePronunciationToServer(e, t, r) {
  if (null != g_strCustId && g_strCustId.length > 0 && null != g_strBookId && g_strBookId.length > 0 && null != g_strPageId && g_strPageId.length > 0) {
    var n;
    if (null == SpeechStream.cacheMode.getLiveServer()) return;
    n = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer();
    var a = "&custID=" + g_strCustId + "&bookID=" + g_strBookId + "&pageID=" + (r ? "*" : g_strPageId) + "&sayThis=" + rw_encodeForStorage(e) + "&likeThis=" + rw_encodeForStorage(t)
      , o = g_controllerFactory.getConnector();
    null == o ? alert("Connection to the server is not available.") : o.updatePronunciationData(n, a)
  }
}

function $rw_updatePronCallback(e) {
  if (null == e) document.getElementById("editPageMsg")
    .innerHTML = "Failed to updated.";
  else if ("-1" == e) document.getElementById("editPageMsg")
    .innerHTML = "Failed to updated.";
  else {
    var t = document.getElementById("editSayThis")
      .value.trimTH()
      , r = document.getElementById("editLikeThis")
      .value.trimTH()
      , n = document.getElementById("editAllPages")
      .checked;
    m_pronDictionary.add$__(t, r, n), document.getElementById("editSayThis")
      .value = "", document.getElementById("editLikeThis")
      .value = "", document.getElementById("editPageMsg")
      .innerHTML = "Pronunciation updated.", rw_hideButton(), rw_editPronRefresh()
  }
}

function rw_removePronunciationFromServer(e, t) {
  if (null != g_strCustId && g_strCustId.length > 0 && null != g_strBookId && g_strBookId.length > 0 && null != g_strPageId && g_strPageId.length > 0) {
    var r;
    if (null == SpeechStream.cacheMode.getLiveServer()) return;
    r = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer();
    var n = "&custID=" + g_strCustId + "&bookID=" + g_strBookId + "&pageID=" + (t ? "*" : g_strPageId) + "&sayThis=" + rw_encodeForStorage(e)
      , a = g_controllerFactory.getConnector();
    null == a ? alert("Connection to the server is not available.") : a.removePronunciationData(r, n, e)
  }
}

function $rw_removePronCallback(e, t) {
  null == e ? document.getElementById("editPageMsg")
    .innerHTML = "Failed to delete item." : "-1" == e ? document.getElementById("editPageMsg")
    .innerHTML = "Failed to delete item." : (m_pronDictionary.remove$__(t), document.getElementById("editSayThis")
      .value = "", document.getElementById("editLikeThis")
      .value = "", document.getElementById("editPageMsg")
      .innerHTML = "Pronunciation deleted.", rw_editPronRefresh())
}

function rw_getWebToSpeech() {
  if (null != g_cachedWebToSpeech) return g_cachedWebToSpeech;
  if (g_bWorkaroundFirefoxSwf) {
    var e = document.getElementById("rwDrag");
    null != e && (e.style.position = "relative", g_bWorkaroundFirefoxSwf = !1)
  }
  var t = null;
  try {
    t = g_bSafari ? window.document.WebToSpeech : window.document.WebToSpeech ? window.document.WebToSpeech : window.WebToSpeech, null != t && (t.getVersion(), g_cachedWebToSpeech = t)
  } catch (r) {
    t = null, g_cachedWebToSpeech = null
  }
  if (null == t) {
    var n = document.getElementById("WebToSpeech");
    if (null != n) {
      t = n;
      try {
        t.getVersion(), g_cachedWebToSpeech = t
      } catch (a) {
        t = null, g_cachedWebToSpeech = null
      }
      if (null == t && !g_bIE && n.childNodes && "number" == typeof n.childNodes.length) {
        var o, i = n.childNodes.length;
        for (o = 0; o < i; o++) {
          var l = n.childNodes[o];
          if ("embed" == l.tagName.toLowerCase()) {
            t = l;
            try {
              t.getVersion(), g_cachedWebToSpeech = t
            } catch (a) {
              t = null, g_cachedWebToSpeech = null
            }
          }
        }
      }
    }
  }
  return t
}

function isActivexEnabled() {
  var e = null;
  try {
    e = !!new ActiveXObject("htmlfile")
  } catch (t) {
    e = !1
  }
  return e
}

function $rw_barCacheInit() {
  g_bIE ? SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + SSDAT.paths.strFileLoc + 'rwcache.css" type="text/css" rel="stylesheet" />', !1) : SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + SSDAT.paths.strFileLoc + 'rwcacheSFF.css" type="text/css" rel="stylesheet" />', !1);
  var e = "";
  e += '<div id="rwGenerateCache" rwTHcomp="1" texthelpStopContinuous="1">', e += '<div class="rwGenerateCachePopupOutline">', e += '<div id="rwDragMeGenerateCache" class="rwToolbarCaptionGenerateCache" ignore="1">', e += "Loading, please wait...", e += '<img name="displayImg" align="right" src="' + SSDAT.paths.strFileLoc + 'rwimgs/thex.bmp" onMouseOver="$rw_divOver(9)" onMouseOut="$rw_divOut(9)" onMouseUp="$rw_divPress(9)" />', e += "</div>", e += '<div class="rwGenerateCachePopupContent">', e += '<span id="rwGenerateCachedisplay" ignore="1">', e += "", e += "</span>", e += "</div>", e += "</div>", e += "</div>", SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, e, !1)
}

function $rw_barRecInit() {
  g_bIE ? SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + SSDAT.paths.strFileLoc + 'rwrecorder.css" type="text/css" rel="stylesheet" />', !1) : SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + SSDAT.paths.strFileLoc + 'rwrecorderSFF.css" type="text/css" rel="stylesheet" />', !1);
  var e = "";
  e += '<div id="rwRec" rwTHcomp="1" style="visibility:hidden" texthelpStopContinuous="1">', e += ' <div class="rwRecPopupOutline">', e += g_nLanguage == ENG_UK || g_nLanguage == ENG_US ? '  <div id="rwDragMeRec" class="rwToolbarCaptionRec" >' : '  <div id="rwDragMeRec" class="rwToolbarSpanCaptionRec" >', e += '<img name="recImg" align="right" src="' + SSDAT.paths.strFileLoc + 'rwimgs/thex.bmp" onmouseover="$rw_divOver(12);" onmouseout="$rw_divOut(12);" onmouseup="$rw_divPress(12);" /></div>', e += '<div class="rwRecPopupContent">', e += '<form name="rw_recForm" class="rw_recForm" id="rw_recForm">', e += '<table class="rw_recTable">', e += "<tbody>", e += '<tr><td><div class="rw_micDisplay" id="rw_micDisplay" onclick="recordExercise(START_RECORDING)"></div><div class="rw_micRecordingOn" id="rw_micRecordingOn" onclick="recordExercise(STOP_RECORDING)"></div></td></tr>', e += '<tr><td><div id="coverUpDiv"></div><div class="rw_playBackButton" id="rw_playBackButton" onclick="recordExercise(REPLAY_RECORDING)"></div></td></tr>', e += "</tbody></table></form>", e += '<div id="flashcontent" align="center"><embed type="application/x-shockwave-flash" src="SpeechStream/v194/flashaudiocontrol/textHelpAudioRecord.swf" width="300" height="138" style="undefined" id="audiocontrol" name="audiocontrol" bgcolor="#FF6600" quality="high" wmode="transparent" flashvars="myServer=SpeechStream/v194/flashaudiocontrol/&amp;mySound=3845_2013-12-03_155532191_p&amp;schoolId=235&amp;studentId=20543&amp;signature=acK8In%2Fa6khZxBMNM6XsPQ%3D%3D&amp;soundMode=playOnly&amp;audioStreamFileName=SpeechStream/v194/flashaudiocontrol/3845_2013-12-03_155532191_p&amp;recordType=1&amp;studentRecordModePendingText=Uploading...&amp;studentRecordModeRecordingText=Recording...&amp;audioQualityOGG=0.5&amp;studentRecordModeCSSPath=SpeechStream/v194/flashaudiocontrol/flashstyle.css"></embed></div>', e += "</div></div></div>", SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, e, !1)
}

function recordExercise(e) {
  if (e == START_RECORDING) {
    var t = document.getElementById("rw_micDisplay");
    t.style.visibility = "hidden";
    var r = document.getElementById("rw_micRecordingOn");
    r.style.visibility = "visible", thisMovie("audiocontrol")
      .stopRecording(), initializeTimer(!1), thisMovie("audiocontrol")
      .startRecording(), g_recordStartTime = (new Date)
      .getTime()
  } else if (e == STOP_RECORDING) {
    var t = document.getElementById("rw_micDisplay");
    t.style.visibility = "visible";
    var r = document.getElementById("rw_micRecordingOn");
    r.style.visibility = "hidden";
    var n = document.getElementById("coverUpDiv");
    n.style.visibility = "hidden", g_bReplayOn = !1, StopTheTimer(), thisMovie("audiocontrol")
      .stopRecording(), g_recordEndTime = (new Date)
      .getTime()
  } else e == REPLAY_RECORDING && (g_bReplayOn = !0, StopTheTimer(), thisMovie("audiocontrol")
    .stopRecording(), g_recordEndTime = (new Date)
    .getTime(), thisMovie("audiocontrol")
    .playStreaming())
}

function thisMovie(e) {
  return navigator.appName.indexOf("Microsoft") != -1 && window[e] ? window[e] : document[e]
}

function initializeTimer() {
  g_timerSeconds = 175, StopTheTimer(), StartTheTimer()
}

function StartTheTimer() {
  0 == g_timerSeconds ? (StopTheTimer(), recordExercise(STOP_RECORDING)) : (self.status = g_timerSeconds, g_timerSeconds -= 1, g_timerRunning = !0, g_timerID = self.setTimeout("StartTheTimer()", 1e3))
}

function StopTheTimer() {
  g_timerRunning && clearTimeout(g_timerID), g_timerRunning = !1
}

function disabledIcon(e) {
  var t = rw_getIconPosition(e);
  if (t > -1) {
    var r = SpeechStream.EnumIconParameter;
    rw_showAnIcon(g_icons[t][r.ICON_NAME], "mask", g_icons[t][r.ICON_OFFSET], !1)
  }
}

function rw_isNestedInvalid(e) {
  if (null == e) return !1;
  for (var t = e.ownerDocument.body, r = e; null != r && r != t;) {
    if (rw_isInvalidNode(r)) return !0;
    r = r.parentNode
  }
  return !1
}

function rw_isInvalidNode(e) {
  if (null == e) return !0;
  if (1 != e.nodeType) return 3 != e.nodeType;
  var t;
  if (t = e.getAttribute("ignore"), null != t) return !0;
  if (t = e.getAttribute(RWTH_SKIP_CONTINUOUS), null != t && !g_bDontIngoreSkips) return !0;
  if (g_bIgnoreHidden) {
    var r = rw_getComputedStyle(e);
    if (null != r && ("hidden" == r.visibility || "none" == r.display)) return !0
  }
  var n = e.tagName.toLowerCase();
  return "link" == n || "area" == n || "script" == n || "noscript" == n || "annotation" == n || "style" == n || "!--" == n || "title" == n || "html:script" == n
}

function rw_getComputedStyle(e) {
  return g_bIEOld ? e.currentStyle : window.getComputedStyle(e, null)
}

function rw_bind(e, t) {
  return function () {
    return t.apply(e, textHelp.webreaderapi.HelpersSingleton.getInst()
      .toArray(arguments))
  }
}

function rw_setLang() {
  if (!thlangSet) try {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .subscribe("onUILanguageChanged", $rw_onUISettingsLanguageChanged, this), thlangSet = !0
  } catch (e) {}
}

function findAncestorByClass(e, t) {
  if (null != e) {
    for (;
      (e = e.parentElement) && !e.classList.contains(t););
    return e
  }
}

function rw_start() {
  "function" == typeof $rw_swaParameters ? (g_bDynamicLoading = !0, $rw_swaParameters(), "function" == typeof $rw_userParameters && $rw_userParameters(), $rw_barInit() && rw_onload()) : "function" == typeof $rw_userParameters && (g_bDynamicLoading = !0, window.postMessage({
    method: "thRWFGGetSettings"
    , type: "1757FROM_PAGERW4G"
  }, "*"), window.postMessage({
    type: "1757FROM_PAGERW4G"
    , method: "trialValidation"
    , user: "NA"
  }, "*"), $rw_userParameters(), $rw_barInit() && rw_onload())
}

function onLoadToolbarFromSettingsCallback(e) {
  texthelp.RW4GC.currentToolbar = e
}

function onLoadDialogsFromSettingsCallback(e) {
  texthelp.RW4GC.currentDialogs = e
}

function loadToolbar() {
  return void 0 == window.texthelp ? setTimeout(loadToolbar, 20) : void(this.g_thRW4GCNamespaceInit && (texthelp.RW4GC.toolbarHandlerInstance = new texthelp.RW4GC.toolbarEventHandler, texthelp.RW4GC.thToolbarStoreInstance = new texthelp.RW4GC.toolbarstore(texthelp.RW4GC.toolbarHandlerInstance), texthelp.RW4GC.RiotControl.addStore(texthelp.RW4GC.thToolbarStoreInstance), texthelp.RW4GC.pageToolbar = {}, texthelp.RW4GC.pageToolbar.dock = "float", texthelp.RW4GC.pageToolbar.supported = ["prediction", "clicktospeak", "dictionary", "picturedictionary", "play", "pause", "stop", "screenshotreader", "screenmasking", "speechmaker", "factfinder", "speechinput", "translator", "highlightblue", "highlightpink", "highlightyellow", "highlightgreen", "highlightclear", "highlightscollect", "vocabtool", "simplify", "settings", "help", "logo"], texthelp.RW4GC.RiotControl.trigger("load_Toolbar", onLoadToolbarFromSettingsCallback)))
}

function loadDialogs() {
  return void 0 == window.texthelp ? setTimeout(loadDialogs, 20) : void texthelp.RW4GC.RiotControl.trigger("load_Dialogs", onLoadDialogsFromSettingsCallback)
}
var g_strAmp = "&"
  , g_thRecognition = null
  , g_thSpeechInputEnabled = !1
  , g_thScreenMaskingEnabled = !1
  , g_thLastKeyIsCTRL = !1
  , g_thThrowNextCTRL = !1
  , g_thCtrlBounceTimer = null;
if ("undefined" == typeof SpeechStream) var SpeechStream = new function () {};
var RWTH_DONT_ALTER = "rwDontAlter"
  , RWTH_COMPONENT = "rwTHcomp"
  , RWTH_GENERATED = "rwTHgen"
  , RWTH_PERM_GENERATED = "rwTHpgen"
  , thUILanguage = "en_US"
  , thlangSet = !1
  , g_thToLang = "en";
try {
  var THSpan = document.registerElement("th-span")
} catch (err) {}
var DEFAULT_VOICE_ARRAY = ["Vocalizer Expressive Serena Premium High 22kHz", "Vocalizer Expressive Samantha Standard 22kHz", "Vocalizer Expressive Paulina Premium High 22kHz", "Vocalizer Expressive Monica Premium High 22kHz", "Vocalizer Expressive Audrey Premium High 22kHz", "Vocalizer Expressive Amelie Premium High 22kHz", "ScanSoft Steffi_Full_22kHz", "ScanSoft Silvia_Full_22kHz", "ScanSoft Claire_Full_22kHz", "ScanSoft Ingrid_Full_22kHz", "ScanSoft Karen_Full_22kHz", "Vocalizer Expressive Luciana Premium High 22kHz", "ScanSoft Nora_Full_22kHz", "Vocalizer Expressive Damayanti Premium High 22kHz"]
  , TRANSLATION_IDS = ["speechstream_hover_speech", "speechstream_play", "speechstream_pause", "speechstream_stop", "speechstream_translate", "speechstream_fact_finder", "speechstream_dictionary", "speechstream_highlight_cyan", "speechstream_highlight_magenta", "speechstream_highlight_yellow", "speechstream_highlight_green", "speechstream_highlight_remove", "speechstream_highlight_collect", "speechstream_highlight_green", "speechstream_select", "speechstream_mp3_maker", "speechstream_calculator", "speechstream_cache", "speechstream_picture_dictionary", "speechstream_speech_input", "speechstream_screenshotreader", "speechstream_homophones", "speechstream_prediction", "speechstream_submit", "speechstream_sticky_note", "speechstream_create_pronunciation", "speechstream_vocab", "speechstream_vocab", "speechstream_strike_through", "speechstream_speech_recorder", "speechstream_prediction", "speechstream_prediction"]
  , TOOL_TIP_TEXT_ARRAY = [["Click To Speak Mode", "Select this then click anywhere in the book to start reading text", "Haz clic para el modo hablado"], ["Speak The Current Selection", "Speak the current selection", "Leer en voz alta el texto seleccionado"], ["Pause Speech", "Pause Speech", "Discurso de pausa"], ["Stop Speech", "Stops speech playback", "Parar voz"], ["Translate Word", "Double-click a word in the book and click this icon\nto translate the word into Spanish", "Traducir palabra"], ["Fact Finder", "Select some text in the book and click this icon to\nperform a Google search", "Buscador de datos"], ["Dictionary", "Double-click a word in the book and click this icon to\nsee dictionary definitions", "Diccionario"], ["Highlight Cyan", "Make a selection in the book and click this icon to\ncreate a blue highlight", "Realce azul verdoso"], ["Highlight Magenta", "Make a selection in the book and click this icon to\ncreate a pink highlight", "Realce morado"], ["Highlight Yellow", "Make a selection in the book and click this icon to\ncreate a yellow highlight", "Realce amarillo"], ["Highlight Green", "Make a selection in the book and click this icon to\ncreate a green highlight", "Realce verde"], ["Remove Highlights", "Remove all your highlights from this page", "Borrar realce"], ["Collect Highlights", "Collect all your highlights and display them\nin a window, grouped by color", "Recopilar realces"], ["Click here to select the text", "Click here to select the text", "clic aqu" + String.fromCharCode(237) + " para destacar"], ["MP3 Maker", "MP3 Maker", "MP3 Maker"], ["Calculator", "Calculator", "Calculator"], ["Generate Cache", "Generate Cache", "Generate Cache"], ["Check Cache", "Check Cache", "Check Cache"], ["Picture Dictionary", "Picture Dictionary", "Diccionario visual"], ["Spell Checker", "Spell Checker", "Spell Checker"], ["Screenshot Reader", "Screenshot Reader", "Screenshot Reader"], ["Homophone Checker", "Homophone Checker", "Homophone Checker"], ["Prediction Checker", "Prediction Checker", "Prediction Checker"], ["Submit", "Submit", "Submit"], ["Sticky note", "Sticky note", "Sticky note"], ["Create pronunciation", "Create pronunciation", "Create pronunciation"], ["Edit pronunciation", "Edit pronunciation", "Edit pronunciation"], ["Vocabulary lookup", "Vocabulary lookup", "Vocabulary lookup"], ["Strike through", "Make a selection in the book and click this icon to\nset strike-through style", "Strike through"], ["Speech Recorder", "Speech Recorder", "Speech Recorder"], ["Screen Mask", "Screen Mask", "Screen Mask"]]
  , WORD_TYPES = {
    1: "Noun"
    , 2: "Verb"
    , 3: "Adjective"
    , 4: "Adverb"
    , 5: "Pronoun"
    , 6: "Preposition"
    , 7: "Prefix"
    , 8: "Article"
    , 9: "Conjunction"
    , 10: "Auxiliary verb"
    , 11: "None"
    , 12: "Interjection"
    , 13: "Abbreviation"
    , 14: "Determiner"
    , 15: "Exclamation"
    , 16: "Infinitive"
  }
  , tmpCounterForConsts = 0
  , CLICK_TO_SPEAK = tmpCounterForConsts++
  , SPEAK_CURRENT_SELECTION = tmpCounterForConsts++
  , PAUSE_SPEECH = tmpCounterForConsts++
  , STOP_SPEECH = tmpCounterForConsts++
  , TRANSLATE_WORD = tmpCounterForConsts++
  , FACT_FINDER = tmpCounterForConsts++
  , DICTIONARY = tmpCounterForConsts++
  , HIGHLIGHT_CYAN = tmpCounterForConsts++
  , HIGHLIGHT_MAGENTA = tmpCounterForConsts++
  , HIGHLIGHT_YELLOW = tmpCounterForConsts++
  , HIGHLIGHT_GREEN = tmpCounterForConsts++
  , CLEAR_HIGHLIGHT = tmpCounterForConsts++
  , COLLECT_HIGHLIGHTS = tmpCounterForConsts++
  , CLICK_TO_COPY_TO_CLIPBOARD = tmpCounterForConsts++
  , MP3_MAKER = tmpCounterForConsts++
  , CALCULATOR = tmpCounterForConsts++
  , GENERATE_CACHE = tmpCounterForConsts++
  , CHECK_CACHE = tmpCounterForConsts++
  , PICTURE_DICTIONARY = tmpCounterForConsts++
  , SPEECH_INPUT = tmpCounterForConsts++
  , SCREENSHOTREADER_CHECKER = tmpCounterForConsts++
  , PREDICTION_CHECKER = tmpCounterForConsts++
  , SUBMIT = tmpCounterForConsts++
  , STICKY_NOTE = tmpCounterForConsts++
  , CREATE_PRONUNCIATION = tmpCounterForConsts++
  , EDIT_PRONUNCIATION = tmpCounterForConsts++
  , VOCABULARY = tmpCounterForConsts++
  , STRIKE_THROUGH = tmpCounterForConsts++
  , SPEECH_RECORDER = tmpCounterForConsts++
  , SCREEN_MASK = tmpCounterForConsts++
  , PREDICTION = tmpCounterForConsts++
  , FUN_PLAY = tmpCounterForConsts++
  , FUN_STOP = tmpCounterForConsts++
  , POPUP_DISPLAY = 0
  , POPUP_TRANSLATOR = 1
  , POPUP_FF = 2
  , POPUP_DICTIONARY = 3
  , POPUP_COLLECT = 4
  , POPUP_STICKYNOTE = 5
  , POPUP_PRON_CREATE = 6
  , POPUP_PRON_EDIT = 7
  , POPUP_CALCULATOR = 8
  , POPUP_GENERATE_CACHE = 9
  , POPUP_CHECK_CACHE = 10
  , POPUP_PICTUREDICTIONARY = 11
  , POPUP_SPEECH_RECORDER = 12
  , POPUP_PREDICTION = 13
  , POPUP_SPELLING = 14
  , POPUP_HOMOPHONE = 15
  , POPUP_GRAMMAR = 16
  , IMG_POSITION_FROM_LEFT_ARRAY = [0, 33, 66, 99, 132, 165, 198, 264, 297, 330, 363, 396, 429, 0, 528, 462, 561, 594, 231, 468, 508, 468, 0, 495, 627, 660, 759, 792, 825, 858, 693, 726]
  , RWTH_STOP_CONTINUOUS = "texthelpStopContinuous"
  , RWTH_SKIP_CONTINUOUS = "texthelpSkip"
  , FAST_SPEED = 55
  , MEDIUM_SPEED = 40
  , DEFAULT_SPEED = MEDIUM_SPEED
  , SLOW_SPEED = 25
  , VERY_SLOW_SPEED = 15
  , READING_AGE_4 = 25
  , READING_AGE_5 = 25
  , READING_AGE_6 = 26
  , READING_AGE_7 = 27
  , READING_AGE_8 = 28
  , READING_AGE_9 = 29
  , READING_AGE_10 = 30
  , READING_AGE_11 = 35
  , READING_AGE_12 = 40
  , READING_AGE_13 = 44
  , READING_AGE_14 = 46
  , READING_AGE_15 = 48
  , READING_AGE_16 = 50
  , SUPPORTED_LANG_CODES = "eba_language ENG_UK  ENGLISH UK ENG_US ENGLISH_US SPANISH SPANISH_US ESPANOL SPANISH_ES FRENCH FRENCH_CA FRENCH_CN GERMAN ITALIAN DUTCH SWEDISH AUSTRALIAN PORTUGUESE PORTUGUESE_BR PORTUGUES PORTUGUES_PT MALAYSIAN"
  , ENG_UK = 0
  , UK = 0
  , ENGLISH = 0
  , ENGLISH_UK = 0
  , ENG_US = 1
  , ENGLISH_US = 1
  , SPANISH = 2
  , SPANISH_US = 2
  , ESPANOL = 3
  , SPANISH_ES = 3
  , FRENCH = 4
  , FRENCH_CA = 5
  , FRENCH_CN = 5
  , GERMAN = 6
  , ITALIAN = 7
  , DUTCH = 8
  , SWEDISH = 9
  , AUSTRALIAN = 10
  , PORTUGUESE = 11
  , PORTUGUESE_BR = 11
  , PORTUGUES = 12
  , PORTUGUESE_PT = 12
  , MALAYSIAN = 13
  , LOCAL_CODES = "eba_locale LOCALE_UK LOCALE_US "
  , LOCALE_UK = "UK"
  , LOCALE_US = "US"
  , clicktospeak_icon = 1
  , play_icon = 2
  , search_icons = 28
  , translation_icon = 4
  , translate_icon = 4
  , translator_icon = 4
  , factfinder_icon = 8
  , dictionary_icon = 16
  , language_icons = 224
  , speechinput_icon = 32
  , screenshotreader_icon = 64
  , prediction_icon = 128
  , highlight_icons = 3840
  , highlightcyan_icon = 256
  , highlightmagenta_icon = 512
  , highlightyellow_icon = 1024
  , highlightgreen_icon = 2048
  , collect_icon = 4096
  , sticky_icon = 16384
  , funplay_icon = 32768
  , proncreate_icon = 65536
  , createpron_icon = 65536
  , pronCreate_icon = 65536
  , pronedit_icon = 131072
  , pronEdit_icon = 131072
  , editpron_icon = 131072
  , selectspeed_icon = 262144
  , selectSpeed_icon = 262144
  , pause_icon = 524288
  , mp3_icon = 1048576
  , calculator_icon = 2097152
  , generatecache_icon = 4194304
  , checkcache_icon = 8388608
  , picturedictionary_icon = 16777216
  , imagedictionary_icon = 16777216
  , vocabulary_icon = 33554432
  , strike_icon = 67108864
  , record_icon = 134217728
  , screenmask_icon = 268435456
  , stop_icon = 536870912
  , fullbrowsealoud_icons = 7967
  , standardbrowsealoud_icons = 31
  , minbrowsealoud_icons = 1
  , submit_icon = 8192
  , no_bar = 0
  , main_icons = 7967
  , standard_icons = 31
  , min_icons = 1
  , prediction_PredictAhead = !0
  , title_rw = 0
  , title_ba = 1
  , title_ebooks = 2
  , title_th = 3
  , title_portal = 4;
SpeechStream.EnumPlacement = {
  LEFT: 1
  , RIGHT: 2
}, Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
  var t = this.length
    , r = Number(arguments[1]) || 0;
  for (r = r < 0 ? Math.ceil(r) : Math.floor(r), r < 0 && (r += t); r < t; r++)
    if (r in this && this[r] === e) return r;
  return -1
}), String.prototype.trimTH = function () {
  return this.replace(/^[\s\xA0]+/, "")
    .replace(/[\s\xA0]+$/, "")
}, String.prototype.trimStartTH = function () {
  return this.replace(/^[\s\xA0]+/, "")
}, String.prototype.trimEndTH = function () {
  return this.replace(/[\s\xA0]+$/, "")
}, String.prototype.equalsTH = function (e) {
  if (this.length != e.length) return !1;
  for (var t = 0; t < this.length; t += 1)
    if (this.charAt(t) != e.charAt(t)) return !1;
  return !0
}, String.prototype.trimSpaceTH = function () {
  return this.replace(/^[\t\r\n ]+/, "")
    .replace(/[\t\r\n ]+$/, "")
}, String.prototype.trimSpaceStartTH = function () {
  return this.replace(/^[\t\r\n ]+/, "")
}, String.prototype.trimSpaceEndTH = function () {
  return this.replace(/[\t\r\n ]+$/, "")
};
var g_bOnClick = !0
  , g_bUseBookmarks = !0
  , stringtoleave = "dtdType ls_teacherFlag FAST_SPEED DEFAULT_SPEED MEDIUM_SPEED SLOW_SPEED VERY_SLOW_SPEED pause_icon mp3_icon calculator_icon generatecache_icon checkcache_icon picturedictionary_icon  test sentence"
  , g_nNavDoubleClickTime, g_bNoTitleBar = !1
  , g_strPlayStartPoint = null
  , g_bReachedEnd = !1
  , g_bUseContainer = !1
  , g_bAllowAlertsFlag = !1
  , eba_actual_version = "195"
  , g_strRevision = "0"
  , g_strServerVersion = "195"
  , g_strClientVersion = "166"
  , g_nSpeechStreamServerVersion = -1
  , g_strDefaultServer = "speechus.texthelp.com"
  , g_nIcons = fullbrowsealoud_icons
  , g_nDisplayIcons = -1
  , g_nNoDisplayIcons = 0
  , g_strServer = "inoeonmfapjbbkmdafoankkfajkcphgd"
  , g_strSpeechServer = "rwforg.speechstream.net"
  , g_strSpeechServerBackup = null
  , g_strTranslateServer = null
  , g_strDictionaryServer = null
  , g_strPictureDictionaryServer = null
  , g_strPredictionServer = null
  , g_strSpellingServer = null
  , g_strHomophoneServer = null
  , g_strSourceFolder = "SpeechStream"
  , g_strWebToSpeechFolder = "/SpeechStream/"
  , g_strVoice = "Vocalizer Expressive Ava Premium High 22kHz"
  , g_strCustId = null
  , g_strBookId = null
  , g_strPageId = null
  , g_nCustId = -1
  , g_strLoginName = "rwonline"
  , g_strLoginPassword = "rwonline"
  , g_nLanguage = 0
  , g_bVoiceFromLangFlag = !1
  , g_strLocale = "US"
  , g_nSpeedValue = 40
  , g_nVolumeValue = -1
  , g_bNoTitleFlag = !1
  , g_bHiddenBar = !1
  , g_bIgnoreButtons = !1
  , g_bSpeechCacheGenerateFlag = !1
  , g_bSpeechCacheFlag = !1
  , g_bCacheLiveGeneration = !1
  , g_bSplitCachePath = !1
  , g_bAutoCachePage = !1
  , g_strCacheResult = null
  , g_nAutocacheSpeedSetting = 1
  , g_bCacheSelection = !1
  , g_bCacheUserText = !1
  , g_nCacheRetry = 3
  , g_nCacheRetryTimeout = 10
  , g_bCacheBuster = !1
  , g_bPktFlag = !1
  , g_bPersistAnnotations = !1
  , g_strPersistNoteEditorId = "*"
  , g_strPersistHighlightEditorId = "*"
  , g_strPersistNoteReaderId = "*"
  , g_strPersistHighlightReaderId = "*"
  , g_bPersistNotes = !1
  , g_bPersistHighlights = !1
  , g_bStoreHighlightText = !0
  , g_strPersistStorageUrl = "portal.texthelp.com"
  , g_strNoteStorageUrl = null
  , g_strHighlightStorageUrl = null
  , g_strPersistCustCode = ""
  , g_bPersistConfirmOnDelete = !0
  , g_strSearchSpeechServer = null
  , g_strReplaceSpeechServer = null
  , g_bProquest = !1
  , g_bFLVS = !1
  , g_mp3Id = null
  , g_nMP3Limit = 10240
  , g_bMP = !1
  , g_bLimitCookies = !1
  , g_bIgnoreFrames = !1
  , g_nHoverIndex = -1
  , g_nStickyIndex = -1
  , g_nSpellIndex = -1
  , g_nScreenShotReaderIndex = -1
  , g_nPredIndex = -1
  , g_bIELoadedFlag = !1
  , g_bIsScholastic = !1
  , g_bMcGrawHill = !1
  , g_bInvalidHtml = !1
  , g_bContinuousReading = !0
  , g_nextTargetForContinuousReading = null
  , g_bInlineImg = !1
  , g_bSSL = !0
  , g_bSSLSpeech = !0
  , g_bSSLToolbar = !0
  , g_bCheckPronunciationBeforeCache = !1
  , g_bAlterBrowserForConsistency = !1
  , g_bSpeechSelectionBySentence = !0
  , g_bExtendSelection = !0
  , g_bCallPageCompleteOnSelectionEnd = !0
  , g_finalSentenceTarget = null
  , g_finalSentenceTargetReduced = null
  , g_bTakeClickOnRadioBox = !1
  , g_strSpeakerId = null
  , g_currentCacheSentence = null
  , g_nCacheNumbSentences = 0
  , g_nCurrentCacheSentences = 0
  , g_nCacheNumbImages = 0
  , g_cacheImgList = new Array
  , g_nCurrentCacheImage = -1
  , g_nCheckCachedSentences = 0
  , g_nCheckUncachedSentences = 0
  , g_bAutoCacheAllSpeeds = !1
  , g_bSpeechStreamAutoCache = !1
  , g_bSpeechStreamAutoCacheCheck = !1
  , g_strSpeechStreamAutoCacheCallback = null
  , g_bSpeechStreamAutoCacheNoAlert = !1
  , g_nSpeechStreamAutoCacheMissingCount = 0
  , g_strSpeechStreamAutoCacheError = ""
  , g_bDynamicLoading = !1
  , dtdType, g_bServerSupport = !1
  , g_bForceFlash = !1
  , g_icons = new Array
  , g_toggleIcons = new Array
  , g_nIconCount = 0
  , g_nToggleIconCount = 0
  , TEXTAREA_CLICK_TIMEOUT = 300
  , g_aStartMousePos = {
    x: 0
    , y: 0
  }
  , g_aStartElemPos = {
    x: 0
    , y: 0
  }
  , g_rwDragElement = null
  , g_bDragging = !1
  , g_nDragMargin = 5
  , g_bInSubmit = !1
  , g_nBlockNextChange = 0
  , g_strLastClicked = ""
  , g_fBarPosX = 1
  , g_fBarPosY = .01
  , g_bUseBar = !1
  , g_nBarWidth = 8
  , g_nBarHeight = 60
  , g_afDivPosX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
  , g_afDivPosY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2, .2, .2, .2]
  , g_anDivWidth = [300, 300, 300, 300, 600, 250, 220, 660, 240, 300, 300, 100, 380, 380, 300, 300, 300]
  , g_anDivHeight = [40, 40, 40, 40, 40, 250, 40, 60, 256, 30, 30, 312, 227, 420, 338, 420]
  , g_abVisible = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
  , $g_bMouseSpeech = !1
  , g_dtdType = ""
  , g_bXDTDType = !1
  , g_bLooseType = !1
  , g_bIE = "Microsoft Internet Explorer" == navigator.appName
  , g_bIE6 = navigator.appVersion.indexOf("MSIE 6.") > -1
  , g_bIE7 = navigator.appVersion.indexOf("MSIE 7.") > -1
  , g_bIE8 = navigator.appVersion.indexOf("MSIE 8.") > -1
  , g_bIE9 = navigator.appVersion.indexOf("MSIE 9.") > -1
  , g_bIE10 = navigator.appVersion.indexOf("MSIE 10.") > -1
  , g_bIE11 = !1
  , g_bIEBackCompat = !1
  , g_nIEDocumentMode = -1
  , g_bIEOld, g_bIENew, strAgent = navigator.userAgent.toLowerCase()
  , g_bChrome = strAgent.indexOf("chrome") > -1
  , g_bSafari = strAgent.indexOf("applewebkit") > -1
  , g_bWebkit = !(!g_bSafari || g_bChrome) && strAgent.indexOf("safari") == -1
  , g_bFireFox = strAgent.indexOf("firefox") > -1;
g_bIE || g_bChrome || g_bSafari || g_bFireFox || (g_bIE11 = strAgent.indexOf("trident") > -1, g_bIE11 ? g_bIE = !0 : g_bFireFox = !0), g_bIE && (g_bIE6 ? document.compatMode && "CSS1Compat" != document.compatMode && (g_bIEBackCompat = !0) : g_bIE7 ? (g_bIE8 = !0, document.compatMode && ("CSS1Compat" != document.compatMode ? g_bIEBackCompat = !0 : g_bXDTDType = !0), document.documentMode && (g_nIEDocumentMode = document.documentMode)) : (g_bXDTDType = !0, g_nIEDocumentMode = document.documentMode), g_nIEDocumentMode >= 9 ? (g_bIENew = !0, g_bIEOld = !1) : (g_bIENew = !1, g_bIEOld = !0));
var g_bTouchScreen = strAgent.indexOf("ipad") > -1 || strAgent.indexOf("ipod") > -1 || strAgent.indexOf("iphone") > -1 || strAgent.indexOf("android") > -1
  , g_bIpad = strAgent.indexOf("ipad") > -1 || strAgent.indexOf("ipod") > -1 || strAgent.indexOf("iphone") > -1
  , g_nIOS = 0;
g_bIpad && (g_nIOS = parseInt(strAgent.substring(strAgent.indexOf("cpu os ") + 7, strAgent.indexOf("_"))), isNaN(g_nIOS) && (g_nIOS = 6));
var g_bIpadFrames = !(top === self) && g_bIpad;
g_bIpadFrames && (g_fBarPosX = 2e3);
var g_bAndroid = strAgent.indexOf("android") > -1
  , g_bLimitIPad, g_nIOS = 0;
g_bIpad && (g_nIOS = parseInt(strAgent.substring(strAgent.indexOf("cpu os ") + 7, strAgent.indexOf("_"))), isNaN(g_nIOS) && (g_nIOS = 6)), g_nIOS >= 6 && g_bIpadFrames && setInterval("iOS6Workaround();", 100);
var g_strServerDomain = "localhost"
  , g_speakableTextAreaTarget = null
  , g_nSpeakableTextAreaTimerId = 0
  , g_nIdCounter = 1
  , g_bSticky = !1
  , g_bLocalPronunciationLoaded = !1
  , g_bPronActive = !1
  , g_bMathsSymbols = !1
  , g_mathsSymbolArray = new Array
  , g_mathsMapping = new Object
  , g_strMathsData = "-:minus;+:plus;/:divided by;*:multiplied by;<:less than;>:greater than;=:equals;^:raised to the power of;<=:less than or equal to;>=:greater than or equal to;"
  , g_bWorkaroundFirefoxSwf = !1
  , g_bStickyLoaded = !1
  , g_bSSLoaded = !1
  , g_bSearchLoaded = !1
  , g_strSpeechFileType = "mp3"
  , g_bUseVocab = !1
  , g_strVocabServer = null
  , g_nVocabLimit = 20
  , g_bUseCommands = !0
  , g_bTinyMce = !1
  , g_strTinymceId = "texthelpswa"
  , g_strTinyMceGrammarCallback = null
  , g_strTinyMceSpellingCallback = null
  , g_strTinyMceHomophoneCallback = null
  , g_strTinyMcePredictionCallback = null
  , g_bSWA = !1
  , g_bDisableSpeech = !1
  , g_bApip = !1
  , g_strApipFolder = null
  , g_strApipFile = null
  , g_apipData = null
  , g_apipOrderArray = null
  , g_bChromeExtension = !1
  , g_strLocalFilePath = null
  , g_bIgnoreHidden = !0
  , g_userDeterminedTarget = null
  , eba_server_version, eba_serverVersion, eba_client_version, eba_clientVersion, eba_login_name, eba_login_password, eba_loginName, eba_loginPassword, eba_server, eba_speech_server, eba_speechServer, eba_speech_server_backup, eba_speechServerBackup, eba_folder, eba_client_folder, eba_clientFolder, eba_speech_stream_server_version = -1
  , eba_voice, eba_hover_flag, eba_bubble_mode, eba_bubble_freeze_on_shift_flag, eba_voice_from_lang_flag, eba_voice_language_map, eba_speed_value, eba_speedValue, eba_speed_offset, eba_volume_value, eba_initial_speech_on, eba_continuous_reading, eba_play_start_point, eba_speech_redirect_callback, eba_speech_started_callback, eba_rendering_speech_callback, eba_speech_complete_callback, eba_page_complete_callback, eba_speak_selection_by_sentence, eba_page_complete_after_selection, eba_dont_extend_selection, eba_translate_complete_callback, eba_use_container, eba_override_x, eba_override_y, eba_icons, eba_no_display_icons, eba_no_title, eba_noTitleFlag, eba_hidden_bar, eba_speech_range_style, eba_speech_word_style, eba_allow_alerts_flag, eba_alerts, eba_language, eba_locale, eba_ignore_buttons, eba_max_word_count, eba_logo_url = null
  , eba_inline_img, eba_cache_buster, eba_dictionary_server, eba_custom_dictionary_url, eba_alt_dictionary_url, eba_picturedictionary_server, eba_imagedictionary_server, eba_translate_server, eba_translation_server, eba_translate_source, eba_translate_target, eba_translate_type, eba_language_server, eba_spelling_server, eba_homophone_server, eba_prediction_server, eba_mp3_id, eba_mp3_limit, eba_mp3_callback, eba_cust_id, eba_custId, eba_book_id, eba_bookId, eba_page_id, eba_pageId, eba_use_annotations, eba_annotate_confirm_delete_note, eba_annotate_persist_notes, eba_annotate_persist_highlights, eba_annotate_note_editor_id, eba_annotate_highlight_editor_id, eba_annotate_storage_url, eba_annotate_note_storage_url, eba_annotate_highlight_storage_url, eba_annotate_note_reader_id, eba_annotate_highlight_reader_id, eba_annotate_highlight_store_text, eba_speechCacheGenerateFlag, eba_cache_building_mode, eba_speechCacheFlag, eba_speech_cache_flag, eba_cache_mode, eba_cache_live_generation, eba_autoCachePage, eba_cacheResult = ""
  , eba_cache_retry, eba_cache_retry_timeout, eba_cache_selection, eba_cache_user_text, eba_split_cache_path, eba_autocache_generate, eba_autocache_check, eba_autocache_allspeeds, eba_autocache_callback, eba_autocache_no_alert, eba_clientside_pronunciation, eba_check_pronunciation_before_cache, eba_skip_on_error, eba_alter_browser_for_consistency, eba_ssl_flag, eba_ssl_speech, eba_ssl_toolbar, eba_search_speech_server, eba_replace_speech_server, eba_no_flash, eba_handle_radio_checkbox_click, eba_bypass_dom_check = !1
  , eba_limit_cookies, eba_ignore_frames, eba_math, eba_maths, eba_symbol_text, eba_abbr_array = null
  , eba_date_filter_mode, eba_build_cache_for_external_use, eba_use_html5, eba_speech_file_type, eba_use_vocab, eba_use_vocabulary, eba_vocabulary_server, eba_vocabulary_limit, eba_break_list, eba_use_commands, eba_tinymce, eba_tinymce_id, eba_swa, eba_prediction_placement, eba_prediction_placement_id, eba_homophone_placement, eba_homophone_placement_id, eba_spelling_placement, eba_spelling_placement_id, eba_grammar_placement, eba_grammar_placement_id, eba_disable_speech, eba_no_scroll, eba_ignore_hidden, eba_screen_mask_letterbox_depth = 40
  , eba_screen_mask_opacity = 50
  , $jq, eba_apip, eba_apip_data, eba_apip_order, eba_chrome_extension, eba_local_file_path, ls_teacherFlag = !1
  , eba_reading_age;
"undefined" == typeof SpeechStream && (SpeechStream = {}), SpeechStream.DataTypes = {}, SpeechStream.DataTypes.PageData = function () {
  var e = this
    , t = "~p~br~head~body~hr~div~h1~h2~h3~h4~h5~h6~blockquote~table~tbody~tr~td~th~"
    , r = "~em~strong~b~i~u~tt~font~kbd~dfn~cite~sup~sub~a~embed~span~small~nobr~wbr~acronym~abbr~code~s~chunk~th:pron~img~/th:pron~w~/w~lic/lic~break~silence~";
  this.strBreakList = t, this.strStyleList = r, this.strHighlightTag = "th-span", this.placeholder = document.body, this.isInBreakList = function (t) {
    return e.strBreakList.indexOf("~" + t + "~") > -1
  }, this.isInStyleList = function (t) {
    return e.strStyleList.indexOf("~" + t + "~") > -1
  }
}, SpeechStream.DataTypes.ControlData = function () {
  this.bIgnoreSkipSection = !1, this.bOnloadFinished = !1
}, SpeechStream.DataTypes.HighlightData = function () {
  this.strSpeechRangeColours = "color:#000000; background:#FFFF00;z-Index: 2147483639;", this.strSpeechWordColours = "color:#FFFFFF; background:#0000FF; padding: 2px; margin: -2px; border-radius: 4px; text-shadow: 0 3px 8px #2A2A2A;z-Index: 9999;"
}, SpeechStream.DataTypes.BrowserData = function () {
  var e = navigator.appVersion;
  this.bIE = "Microsoft Internet Explorer" == navigator.appName, this.bIE6 = e.indexOf("MSIE 6.") > -1, this.bIE7 = e.indexOf("MSIE 7.") > -1, this.bIE8 = e.indexOf("MSIE 8.") > -1, this.bIE9 = e.indexOf("MSIE 9.") > -1, this.bIE10 = e.indexOf("MSIE 10.") > -1, this.bIE11 = !1, this.bIEBackCompat = !1, this.nIEDocumentMode = -1, this.bIEOld = !1, this.bIENew = !1, this.dtdType = "", this.bXDTDType = !1, this.bLooseType = !1, this.bIE && (this.bIE6 ? document.compatMode && "CSS1Compat" != document.compatMode && (this.bIEBackCompat = !0) : this.bIE7 ? (this.bIE8 = !0, document.compatMode && ("CSS1Compat" != document.compatMode ? this.bIEBackCompat = !0 : this.bXDTDType = !0)
    , document.documentMode && (this.nIEDocumentMode = document.documentMode)) : (this.bXDTDType = !0, this.nIEDocumentMode = document.documentMode)), this.bIE && (this.nIEDocumentMode >= 9 ? (this.bIENew = !0, this.bIEOld = !1) : (this.bIENew = !1, this.bIEOld = !0));
  var t = navigator.userAgent.toLowerCase();
  this.bChrome = t.indexOf("chrome") > -1, this.bSafari = t.indexOf("applewebkit") > -1, this.bWebkit = !(!this.bSafari || this.bChrome) && t.indexOf("safari") == -1, this.bFireFox = t.indexOf("firefox") > -1, this.bIE || this.bChrome || this.bSafari || this.bFireFox || (this.bIE11 = t.indexOf(!1), this.bIE11 ? this.bIE = !0 : this.bFireFox = !0)
}, SpeechStream.DataTypes.BubbleData = function () {
  this.bBubbleMode = !1, this.bBubbleFreezeOnShiftFlag = !0, this.bBubbleModeStartDisabled = !1
}, SpeechStream.DataTypes.Paths = function () {
  this.strFileLoc = "", this.strSwfLoc = ""
}, SpeechStream.Data = function () {
  this.browser = new SpeechStream.DataTypes.BrowserData, this.paths = new SpeechStream.DataTypes.Paths, this.pageData = new SpeechStream.DataTypes.PageData, this.controlData = new SpeechStream.DataTypes.ControlData, this.highlightData = new SpeechStream.DataTypes.HighlightData, this.bubbleData = new SpeechStream.DataTypes.BubbleData
}, SpeechStream.data = new SpeechStream.Data;
var SSDAT = SpeechStream.data
  , g_nNavDoubleClickTime = 0;
this.g_thRW4GCNamespaceInit = !1;
try {
  texthelp.RW4GC.texthelpScreenShotReaderID = "enfolipbjmnmleonhhebhalojdpcpdoo", this.g_thRW4GCNamespaceInit = !0
} catch (err) {}
var SpeechStreamNote = "The SpeechStream object will contain parameter objects in the future. It holds actionOnError cacheMode and pronunciation";
SpeechStream.EnumActionOnError = {
  STOP: 0
  , SKIP: 1
}, SpeechStream.ActionOnError = function () {
  this.action = SpeechStream.EnumActionOnError.STOP
};
var CacheMode = function () {
  this.NONE = 0, this.CACHE_WITH_LIVE_SERVER = 1, this.CACHE_ONLY = 2, this.CACHE_BUILDING_MODE = 3, this.mode = this.NONE, this.getLiveServer = function () {
    return this.mode == this.NONE ? g_strSpeechServer : this.mode == this.CACHE_ONLY ? null : this.mode == this.CACHE_WITH_LIVE_SERVER ? g_strSpeechServerBackup : this.mode == this.CACHE_BUILDING_MODE ? null != g_strSpeechServerBackup ? g_strSpeechServerBackup : g_strSpeechServer : void 0
  }, this.useBackupForLiveRequests = function () {
    return this.mode != this.NONE && (this.mode != this.CACHE_ONLY && (this.mode == this.CACHE_WITH_LIVE_SERVER ? null != g_strSpeechServerBackup : this.mode == this.CACHE_BUILDING_MODE ? null != g_strSpeechServerBackup : void 0))
  }, this.setCacheMode = function (e) {
    try {
      var t = g_controllerFactory.getConnector();
      if (null != t) switch (e) {
      case this.NONE:
        this.mode = this.NONE, eba_cache_mode = !1, eba_cache_building_mode = !1, eba_cache_live_generation = !1, g_bSpeechCacheFlag = !1, g_bSpeechCacheGenerateFlag = !1, g_bCacheLiveGeneration = !1, t.setCacheMode(!1, !1);
        break;
      case this.CACHE_WITH_LIVE_SERVER:
        this.mode = this.CACHE_WITH_LIVE_SERVER, eba_cache_mode = !0, eba_cache_building_mode = !1, eba_cache_live_generation = !0, g_bSpeechCacheFlag = !0, g_bSpeechCacheGenerateFlag = !1, g_bCacheLiveGeneration = !0, t.setCacheMode(!0, !0);
        break;
      case this.CACHE_ONLY:
        this.mode = this.CACHE_ONLY, eba_cache_mode = !0, eba_cache_building_mode = !1, eba_cache_live_generation = !1, g_bSpeechCacheFlag = !0, g_bSpeechCacheGenerateFlag = !1, g_bCacheLiveGeneration = !1, t.setCacheMode(!0, !1);
        break;
      case this.CACHE_BUILDING_MODE:
        this.mode = this.CACHE_BUILDING_MODE, eba_cache_mode = !1, eba_cache_building_mode = !0, eba_cache_live_generation = !1, g_bSpeechCacheFlag = !1, g_bSpeechCacheGenerateFlag = !0, g_bCacheLiveGeneration = !1, t.setCacheMode(!0, !0);
        break;
      default:
        thLog("Tried to set to an invalid mode, " + e + " is not recognised.")
      }
    } catch (r) {}
  }
};
SpeechStream.actionOnError = new SpeechStream.ActionOnError, SpeechStream.cacheMode = new CacheMode;
var g_nClickRejectTime = 200
  , g_ipadSelectionRange = null
  , g_ipadSelectionWindow = null
  , g_nIpadSelectionBugWorkaroundCount = 0
  , REGEX_TAG_SENTENCE_BREAK = "[\\x21\\x2E\\x3F\\x3A]"
  , REGEX_WHITESPACE = /[\n\r\t ]{2,}/g;
"undefined" == typeof SpeechStream && (SpeechStream = {}), SpeechStream.annotateBlock = {}, SpeechStream.annotateBlock.m_bUseAnnotations = !0, SpeechStream.annotateBlock.setUseAnnotations = function (e) {
  SpeechStream.annotateBlock.m_bUseAnnotations = e
}, SpeechStream.annotateBlock.getUseAnnotations = function () {
  return SpeechStream.annotateBlock.m_bUseAnnotations
}, "undefined" == typeof SpeechStream && (SpeechStream = {}), SpeechStream.Dom = function (e) {
  var t = this;
  if (this.bIE = !1, this.bIEOld = !1, "undefined" != typeof e) t.bIE = e.browser.bIE, t.bIEOld = e.browser.bIEOld;
  else try {
    window.console.log("Data not available when setting up the SpeechStream.Dom")
  } catch (r) {}
}, SpeechStream.dom = new SpeechStream.Dom(SSDAT);
var SSDOM = SpeechStream.dom;
SSDOM.toString = function () {
  return "Singleton instance to control DOM requests."
}, SSDOM.alert = function () {
  alert("testing SSDOM " + SSDOM.toString())
}, SSDOM.getPreviousNode = function (e, t, r) {
  if (null == e || e == r) return null;
  var n = e;
  if (null != n.previousSibling) {
    if (n = n.previousSibling, t && !SSDOM.isStyleNode(n)) return null;
    if (null != n && SSDOM.isInvalidNode(n)) {
      if (r == n) return null;
      n = SSDOM.getPreviousNode(n, t, r)
    } else
      for (; !(null == n || null == n.lastChild || 1 == n.nodeType && "math" == n.tagName.toLowerCase() || 1 == n.nodeType && n.isMathJax);)
        if (n = n.lastChild, t && (SSDOM.isStyleNode(n) || (n = null)), null != n && SSDOM.isInvalidNode(n)) {
          if (r == n) return null;
          n = SSDOM.getPreviousNode(n, t, r);
          break
        }
  } else n = n.parentNode, t && null != n && (SSDOM.isStyleNode(n) || (n = null));
  return n
}, SSDOM.getNextNodeImpl = function (e, t, r, n, a) {
  if (null == e || e == r && !n) return null;
  var o = SSDOM.isInvalidNode(e);
  1 == e.nodeType && "math" == e.tagName.toLowerCase() && (o = !0), 1 == e.nodeType && e.isMathJax && (o = !0);
  var i = null;
  if (e == r && n) {
    if (o || null == e.firstChild) return null;
    i = e.firstChild
  } else if (i = e, null == i.firstChild || o || a)
    if (null != i.nextSibling) i = i.nextSibling;
    else {
      for (; null != i && null == i.nextSibling && (i = i.parentNode, t && (SSDOM.isStyleNode(i) || (i = null)), r != i););
      null != i && r != i && (i = i.nextSibling)
    }
  else i = i.firstChild;
  return null != i && t && (SSDOM.isStyleNode(i) || (i = null)), null != i && SSDOM.isInvalidNode(i) && (i = SSDOM.getNextNodeImpl(i, t, r, !1, a), n && i == r && e == r && (i = null)), i
}, SSDOM.getNextNode = function (e, t, r) {
  return SSDOM.getNextNodeImpl(e, t, r, !1, !1)
}, SSDOM.getNextNodeAllowMoveToChild = function (e, t, r) {
  return SSDOM.getNextNodeImpl(e, t, r, !0, !1)
}, SSDOM.getPreviousNodeIgnoreChildren = function (e, t, r) {
  if (null == e || e == r) return null;
  var n = e;
  return null != n.previousSibling ? (n = n.previousSibling, t && (SSDOM.isStyleNode(n) || (n = null)), null != n && SSDOM.isInvalidNode(n) && (n = r == n ? null : SSDOM.getPreviousNodeIgnoreChildren(n, t, r))) : (n = n.parentNode, t && null != n && (SSDOM.isStyleNode(n) || (n = null))), n
}, SSDOM.getNextNodeIgnoreChildren = function (e, t, r) {
  return SSDOM.getNextNodeImpl(e, t, r, !1, !0)
}, SSDOM.getFirstChildTextNode = function (e, t) {
  if (null == e) return null;
  if (null == e.firstChild || SSDOM.isInvalidNode(e)) return e;
  if (1 == e.nodeType && "textarea" == e.tagName.toLowerCase()) return e;
  if (1 == e.nodeType && "math" == e.tagName.toLowerCase()) return e;
  if (1 == e.nodeType && e.isMathJax) return e;
  var r = e.firstChild;
  return 3 == r.nodeType ? r : 1 == r.nodeType && t && "img" == r.tagName.toLowerCase() && null != r.getAttribute("msg") && r.getAttribute("msg")
    .length > 0 ? r : t ? SSDOM.getNextTextNode(r, !1, e) : SSDOM.getNextTextNodeNoImg(r, !1, e, !0)
}, SSDOM.getLastChildTextNode = function (e, t) {
  if (null == e) return null;
  if (null == e.lastChild || SSDOM.isInvalidNode(e)) return e;
  if (1 == e.nodeType && "textarea" == e.tagName.toLowerCase()) return e;
  if (1 == e.nodeType && "math" == e.tagName.toLowerCase()) return e;
  if (1 == e.nodeType && e.isMathJax) return e;
  for (var r = e.lastChild; null != r;) {
    if (3 == r.nodeType) return r;
    if (1 == r.nodeType && t && "img" == r.tagName.toLowerCase() && null != r.getAttribute("msg") && r.getAttribute("msg")
      .length > 0) return r;
    if (SSDOM.isInvalidNode(r) || null == r.lastChild) {
      var n;
      return n = t ? SSDOM.getPreviousTextNode(r, !1, e) : SSDOM.getPreviousTextNodeNoImg(r, !1, e, !0)
    }
    r = r.lastChild
  }
  return e
}, SSDOM.getNextNodeIEBugFix = function (e) {
  var t = SSDOM.isInvalidNode(e)
    , r = e;
  if (null == r.firstChild || t)
    if (null != r.nextSibling) {
      var n = r;
      r = r.nextSibling;
      for (var a = r, o = a.ownerDocument.body; null != a && a != o;) {
        if (a == n) throw "DOM Error";
        a = a.parentNode
      }
    } else {
      for (; null != r && null == r.nextSibling;) r = r.parentNode;
      if (null != r) {
        var n = r;
        r = r.nextSibling;
        for (var a = r, o = a.ownerDocument.body; null != a && a != o;) {
          if (a == n) throw "DOM Error";
          a = a.parentNode
        }
      }
    }
  else r = r.firstChild;
  return null != r && SSDOM.isInvalidNode(r) && (r = SSDOM.getNextNodeIEBugFix(r)), r
}, SSDOM.getSentenceBreakToLeft = function (e, t) {
  if ("undefined" == typeof t && (t = null), null == e || null == e.node) return null;
  var r = e.node
    , n = e.offset;
  if (1 == e.node.nodeType && "math" == e.node.tagName.toLowerCase()) return e;
  if (1 == e.node.nodeType && e.node.isMathJax) return e;
  if (e.forwardBias) 3 == r.nodeType && n == r.nodeValue.length && (r = SSDOM.getNextTextNode(r, !0, t), n = 0, null == r && (r = e.node, n = e.offset));
  else if (n > 0) --n;
  else {
    if (r = SSDOM.getPreviousTextNode(r, !0, t), null == r) return e;
    if (3 == r.nodeType) n = r.nodeValue.length - 1;
    else {
      if (n = 0, "math" == r.tagName.toLowerCase()) return e;
      if (r.isMathJax) return e
    }
  }
  if (3 == r.nodeType) {
    var a = r.nodeValue.charAt(n);
    if ("." == a || "!" == a || "?" == a || ":" == a)
      if (n > 0) --n;
      else {
        if (r = SSDOM.getPreviousTextNode(r, !0, t), null == r) return e;
        if (3 == r.nodeType) n = r.nodeValue.length - 1;
        else {
          if (n = 0, "math" == r.tagName.toLowerCase()) return e;
          if (r.isMathJax) return e
        }
      }
  }
  for (var o = r, i = n, l = r, s = n, c = !1, g = " "; !c;) {
    if (3 == l.nodeType) {
      var u = l.nodeValue;
      if (u.length > 0) {
        s == -1 && (s = u.length), u = u.replace(/[\x21\x3f\x3a]/g, ".");
        for (var _ = u.lastIndexOf(".", s); _ > -1;) {
          if (rw_isFullStop(u, _, l)) {
            if (_ < u.length - 1) {
              o = l, i = _ + 1, c = !0;
              break
            }
            if (!rw_isTextChar(g)) {
              c = !0;
              break
            }
          }
          _ = 0 == _ ? -1 : u.lastIndexOf(".", _ - 1)
        }
        if (c) break;
        u.trimTH()
          .length > 0 && (o = l, i = 0), g = u.charAt(0)
      }
    } else if (SSDOM.isSpecialCase(l) && null == l.getAttribute("ignore")) {
      if ("math" == l.tagName.toLowerCase()) {
        c = !0;
        break
      }
      if (l.isMathJax) {
        c = !0;
        break
      }
      o = l, i = 0
    }
    if (l = SSDOM.getPreviousNode(l, !0, t), s = -1, null == l) {
      c = !0;
      break
    }
    if (3 == l.nodeType && null != SSDOM.checkForSpecialParent(l) && (l = SSDOM.checkForSpecialParent(l), null == l)) {
      c = !0;
      break
    }
  }
  if (3 == o.nodeType) {
    var u = o.nodeValue;
    if (i < u.length)
      for (; i < u.length && rw_isWhiteSpace(u.charAt(i));) ++i
  }
  return new THCaret(o, i, (!0))
}, SSDOM.getSentenceBreakToRight = function (e, t) {
  if ("undefined" == typeof t && (t = null), null == e || null == e.node) return null;
  for (var r = e.node, n = e.offset, a = r, o = n, i = !1, l = " "; !i;) {
    if (3 == r.nodeType) {
      var s = r.nodeValue;
      if (s.length > 0) {
        if ("." == l) {
          var c = s.charAt(n);
          if (!rw_isTextChar(c)) {
            i = !0;
            break
          }
        }
        s = s.replace(/[\x21\x3f\x3a]/g, ".");
        for (var g = s.indexOf(".", n); g > -1;) {
          if (rw_isFullStop(s, g, r)) {
            g < s.length - 1 && (a = r, o = g + 1, i = !0);
            break
          }
          n = g + 1, g = s.indexOf(".", n)
        }
        if (i) break;
        s.trimTH()
          .length > 0 && (a = r, o = s.length), l = s.charAt(s.length - 1), "." == l && (rw_isFullStop(s, s.length - 1, r) || (l = " "))
      }
      r = SSDOM.getNextNode(r, !0, t)
    } else if (SSDOM.isSpecialCase(r) && null == r.getAttribute("ignore")) {
      if ("math" == r.tagName.toLowerCase()) {
        i = !0;
        break
      }
      if (r.isMathJax) {
        i = !0;
        break
      }
      a = r, o = 0, r = SSDOM.getNextNodeIgnoreChildren(r, !0, t)
    } else r = SSDOM.getNextNode(r, !0, t);
    if (n = 0, null == r) {
      i = !0;
      break
    }
  }
  if (3 == a.nodeType) {
    var s = a.nodeValue;
    if (o > 0 && o <= s.length)
      for (; o > 0 && rw_isWhiteSpace(s.charAt(o - 1));) --o
  }
  return new THCaret(a, o, (!1))
}, SSDOM.getPreviousTextNode = function (e, t, r) {
  for (var n = e, a = !1; null != n && n != r;)
    if (n = SSDOM.getPreviousNode(n, t, r), null != n) {
      if (3 == n.nodeType && "textarea" != n.parentNode.tagName.toLowerCase() && n.nodeValue.length > 0 && (a = !0), 1 == n.nodeType && "math" == n.tagName.toLowerCase()) a = !0;
      else if (1 == n.nodeType && n.isMathJax) a = !0;
      else if (1 == n.nodeType && "img" == n.tagName.toLowerCase()) {
        var o = n.getAttribute("msg");
        null != o && o.length > 0 && (a = !0)
      }
      if (a) return n
    }
  return null
}, SSDOM.getPreviousTextNodeNoBlank = function (e, t, r) {
  for (var n = e; null != n && n != r;)
    if (n = SSDOM.getPreviousTextNode(n, t, r), null != n) {
      var a = 3 == n.nodeType ? n.nodeValue.trimTH() : n.getAttribute("msg")
        .trimTH();
      if (rw_wordIsSpeakable(a)) return n
    }
  return null
}, SSDOM.getPreviousTextNodeNoImg = function (e, t, r, n) {
  for (var a = n ? SSDOM.getPreviousTextNode(e, t, r) : SSDOM.getPreviousTextNodeNoBlank(e, t, r); null != a && 3 != a.nodeType && a != r && "math" != a.tagName.toLowerCase() && !a.isMathJax;) a = n ? SSDOM.getPreviousTextNode(a, t, r) : SSDOM.getPreviousTextNodeNoBlank(a, t, r);
  return a
}, SSDOM.getNextTextNode = function (e, t, r) {
  for (var n = e, a = !1; null != n && n != r;)
    if (n = SSDOM.getNextNode(n, t, r), null != n) {
      if (3 == n.nodeType && "textarea" != n.parentNode.tagName.toLowerCase() && n.nodeValue.length > 0 && (a = !0), 1 == n.nodeType && "math" == n.tagName.toLowerCase()) a = !0;
      else if (1 == n.nodeType && n.isMathJax) a = !0;
      else if (1 == n.nodeType && "img" == n.tagName.toLowerCase()) {
        var o = n.getAttribute("msg");
        null != o && o.length > 0 && (a = !0)
      }
      if (a) return n
    }
  return null
}, SSDOM.getNextTextNodeNoBlank = function (e, t, r) {
  for (var n = e; null != n && n != r;)
    if (n = SSDOM.getNextTextNode(n, t, r), null != n) {
      var a;
      if (3 == n.nodeType ? a = n.nodeValue.trimTH() : "img" == n.tagName.toLowerCase() ? a = n.getAttribute("msg")
        .trimTH() : "math" == n.tagName.toLowerCase() ? a = SSDOM.getTextFromMathMl(n) : n.isMathJax && (a = SSDOM.getTextFromMathJax(n)), rw_wordIsSpeakable(a)) return n
    }
  return null
}, SSDOM.getNextTextNodeNoImg = function (e, t, r, n) {
  for (var a = n ? SSDOM.getNextTextNode(e, t, r) : SSDOM.getNextTextNodeNoBlank(e, t, r); null != a && 3 != a.nodeType && a != r && "math" != a.tagName.toLowerCase() && !a.isMathJax;) a = n ? SSDOM.getNextTextNode(a, t, r) : SSDOM.getNextTextNodeNoBlank(a, t, r);
  return a
}, SSDOM.getFirstSentence = function (e) {
  var t = SSDOM.getFirstChildTextNode(e, !0)
    , r = new THCaret(t, 0, (!0))
    , n = SSDOM.getSentenceBreakToRight(r, e);
  if (r = SSDOM.getSentenceBreakToLeft(n, e), null == r || null == n) return null;
  for (var a = new THCaretRange(r, n), o = !1; !o;)
    if (o = rw_caretRangeIsSpeakable(a) && SSDOM.checkSentence(a), !o) {
      var i = SSDOM.getNextSentence(a, e);
      if (null == i || n.node == i.rightCaret.node && n.offset == i.rightCaret.offset || r.node == i.leftCaret.node && r.offset == i.leftCaret.offset) break;
      a = i
    }
  return a
}, SSDOM.getLastSentence = function (e) {
  var t, r = SSDOM.getLastChildTextNode(e, !0);
  t = 3 == r.nodeType ? new THCaret(r, r.nodeValue.length, (!1)) : new THCaret(r, (-1), (!1));
  var n = SSDOM.getSentenceBreakToLeft(t, e);
  if (t = SSDOM.getSentenceBreakToRight(n, e), null == n || null == t) return null;
  for (var a = new THCaretRange(n, t), o = !1; !o;)
    if (o = rw_caretRangeIsSpeakable(a) && SSDOM.checkSentence(a), !o) {
      var i = SSDOM.getPreviousSentence(a, e);
      if (null == i || t.node == i.rightCaret.node && t.offset == i.rightCaret.offset || n.node == i.leftCaret.node && n.offset == i.leftCaret.offset) break;
      a = i
    }
  return a
}, SSDOM.getSentenceFromPoint = function (e) {
  var t = SSDOM.getSentenceBreakToRight(e)
    , r = SSDOM.getSentenceBreakToLeft(t);
  return null == r || null == t ? null : new THCaretRange(r, t)
}, SSDOM.getSentenceFromPointByLang = function (e) {
  var t = SSDOM.getSentenceBreakToRight(e)
    , r = rw_getVoiceSetForNode(e.node)
    , n = rw_checkForVoiceChange(e.node, t.node, r);
  null != n && (t = n);
  var a = SSDOM.getSentenceBreakToLeft(t);
  r = rw_getVoiceSetForNode(a.node);
  var o = rw_checkForVoiceChangeRightToLeft(a.node, t.node, r);
  return null != o && (a = o), null == a || null == t ? null : new THCaretRange(a, t)
}, SSDOM.getSentenceFromPoints = function (e, t) {
  var r = SSDOM.getSentenceBreakToLeft(e, null)
    , n = SSDOM.getSentenceBreakToRight(t, null);
  return null == r || null == n ? null : new THCaretRange(r, n)
}, SSDOM.getNextSentence = function (e, t) {
  if (null == e) return null;
  "undefined" == typeof t && (t = null);
  var r = e.rightCaret.node
    , n = e.rightCaret.offset;
  e.rightCaret.isSpecialCase() && (r = SSDOM.getNextNodeIgnoreChildren(r, !1, t), n = 0);
  for (var a, o; null != r;) {
    if (3 == r.nodeType && n < r.nodeValue.length) {
      if (a = SSDOM.getSentenceBreakToRight(new THCaret(r, n, (!1)), t), null == a) return null;
      if (a.node == r && a.offset == n) {
        var i = SSDOM.getNextTextNodeNoBlank(r, !1, t);
        if (null == i) return null;
        a = SSDOM.getSentenceBreakToRight(new THCaret(i, 0, (!1)), t)
      }
    } else {
      var i = SSDOM.getNextTextNodeNoBlank(r, !1, t);
      if (null == i) return null;
      a = SSDOM.getSentenceBreakToRight(new THCaret(i, 0, (!1)), t)
    }
    if (o = SSDOM.getSentenceBreakToLeft(a, null), null == o) return null;
    if (e.leftCaret.node != o.node || e.leftCaret.offset != o.offset) {
      var l = new THCaretRange(o, a);
      if (SSDOM.checkSentence(l) && rw_caretRangeIsSpeakable(l)) return l
    }
    if (r = a.node, 3 == r.nodeType) {
      var s = r.nodeValue.replace(/[\x21\x3f\x3a]/g, ".")
        , c = s.indexOf(".", a.offset + 1);
      n = c == -1 ? s.length : c
    }
  }
  return null
}, SSDOM.getPreviousSentence = function (e, t) {
  "undefined" == typeof t && (t = null);
  for (var r, n, a = e.leftCaret.node, o = e.leftCaret.offset; null != a;) {
    if (3 == a.nodeType) {
      var i, l = a.nodeValue.replace(/[\x21\x3f\x3a]/g, ".");
      for (i = o > 0 ? l.lastIndexOf(".", o) : 0 == o ? -1 : l.lastIndexOf("."); i > -1;) {
        if (o = i, n = SSDOM.getSentenceBreakToRight(new THCaret(a, o, (!0)), t), null == n) return null;
        if (n.node != e.rightCaret.node || n.offset != e.rightCaret.offset) {
          if (r = SSDOM.getSentenceBreakToLeft(n, t), null == r) return null;
          var s = new THCaretRange(r, n);
          if (SSDOM.checkSentence(s) && rw_caretRangeIsSpeakable(s)) return s
        }
        i = 0 == i ? -1 : l.lastIndexOf(".", i - 1)
      }
    }
    if (o = -1, tmpNode = SSDOM.getPreviousTextNodeNoImg(a, !0, t, !1), null != tmpNode) a = tmpNode;
    else if (a = SSDOM.getPreviousTextNodeNoBlank(a, !1, t), null != a) {
      if (n = 3 == a.nodeType ? SSDOM.getSentenceBreakToRight(new THCaret(a, a.nodeValue.length, (!1)), t) : SSDOM.getSentenceBreakToRight(new THCaret(a, 0, (!1)), t), null == n) return null;
      if (n.node != e.rightCaret.node || n.offset != e.rightCaret.offset) return r = SSDOM.getSentenceBreakToLeft(n, t), null == r ? null : new THCaretRange(r, n)
    }
  }
  return null
}, SSDOM.checkSentence = function (e) {
  for (var t = e.leftCaret.node, r = t.ownerDocument.body; null != t && t != r;) {
    if (1 == t.nodeType) {
      if ("rwDictDefin" == t.className || "rwPopupContent" == t.className || "rwToolbarBarCollect" == t.className) break;
      if (null != t.getAttribute(RWTH_COMPONENT)) return !1
    }
    t = t.parentNode
  }
  var n = e.rightCaret.node;
  if (n != t)
    for (; null != n && n != r && "rwDictDefin" != n.className && "rwPopupContent" != n.className && "rwToolbarBarCollect" != n.className;) {
      if (1 == n.nodeType && null != n.getAttribute(RWTH_COMPONENT)) return !1;
      n = n.parentNode
    }
  return !0
}, SSDOM.getStartOfParagraph = function (e) {
  for (var t, r = e, n = SSDOM.getPreviousNode(e, !0, null); null != n;) t = !1, 1 == n.nodeType ? SSDOM.isSpecialCase(n) ? null != n.getAttribute("ignore") && (t = !0) : t = !0 : 3 == n.nodeType && 0 == n.nodeValue.trimTH()
    .length && (t = !0), t || (r = n), n = SSDOM.getPreviousNode(n, !0, null);
  return r
}, SSDOM.getEndOfParagraph = function (e) {
  for (var t, r = e, n = SSDOM.getNextNode(e, !0, null); null != n;) t = !1, 1 == n.nodeType ? SSDOM.isSpecialCase(n) ? null != n.getAttribute("ignore") && (t = !0) : t = !0 : 3 == n.nodeType && 0 == n.nodeValue.trimTH()
    .length && (t = !0), t || (r = n), n = SSDOM.getNextNode(n, !0, null);
  return r
}, SSDOM.getEndOfWordAsCaret = function (e) {
  var t = null
    , r = e.node;
  if (3 != r.nodeType) return null;
  for (var n, a, o = r.nodeValue, i = e.offset, l = !1, s = !1; !l;) {
    for (n = i; n < o.length; n++) {
      if (a = o.charCodeAt(n), !rw_isTextOnlyIncludingHighAscii(a)) return s ? new THCaret(r, n, (!1)) : t;
      s = !0
    }
    if (!l) {
      if (s && (t = new THCaret(r, o.length, (!1)), s = !1), r = SSDOM.getNextTextNode(r, !0, null), null == r) break;
      if (3 != r.nodeType) break;
      o = r.nodeValue, i = 0
    }
  }
  return t
}, SSDOM.BetterInnerHTML = function (o, p, q) {
  function r(e) {
    var t;
    if ("undefined" != typeof DOMParser) t = (new DOMParser)
      .parseFromString(e, "application/xml");
    else
      for (var r = ["MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"], n = 0; n < r.length && !t; n++) try {
        t = new ActiveXObject(r[n]), t.loadXML(e)
      } catch (a) {}
    return t
  }

  function s(a, b, c) {
    a[b] = function () {
      return eval(c)
    }
  }

  function t(e, r, n) {
    if ("undefined" == typeof n && (n = 1), n > 1)
      if (1 == r.nodeType) {
        for (var a = document.createElement(r.nodeName), o = {}, i = 0, l = r.attributes.length; i < l; i++) {
          var c = r.attributes[i].name
            , g = r.attributes[i].value
            , u = "on" == c.substr(0, 2);
          if (u) o[c] = g;
          else switch (c) {
          case "class":
            a.className = g;
            break;
          case "for":
            a.htmlFor = g;
            break;
          default:
            a.setAttribute(c, g)
          }
        }
        e = e.appendChild(a);
        for (u in o) s(e, u, o[u])
      } else if (3 == r.nodeType) {
      var _ = r.nodeValue ? r.nodeValue : ""
        , d = _.replace(/^\s*|\s*$/g, "");
      (d.length < 7 || 0 != d.indexOf("<!--") && d.indexOf("-->") != d.length - 3) && e.appendChild(document.createTextNode(_))
    }
    for (var h = 0, p = r.childNodes.length; h < p; h++) t(e, r.childNodes[h], n + 1)
  }
  p = "<root>" + p + "</root>";
  var u = r(p);
  if (o && u) {
    if (0 != q)
      for (; o.lastChild;) o.removeChild(o.lastChild);
    t(o, u.documentElement)
  }
}, SSDOM.isStyleNode = function (e) {
  if (null == e) return !1;
  if (1 != e.nodeType) return 3 == e.nodeType;
  var t = e.tagName.toLowerCase()
    .trimTH();
  if (t == SSDAT.pageData.strHighlightTag) {
    var r = e.getAttribute("started");
    if (null != r && "1" == r) return !1
  }
  return ("span" != t || null == e.getAttribute(RWTH_SKIP_CONTINUOUS)) && SSDAT.pageData.isInStyleList(t)
}, SSDOM.isInvalidNode = function (e) {
  if (null == e) return !0;
  if (1 != e.nodeType) return 3 != e.nodeType;
  var t;
  if (t = e.getAttribute("ignore"), null != t) return !0;
  if (t = e.getAttribute(RWTH_SKIP_CONTINUOUS), null != t && SSDAT.controlData.bIgnoreSkipSection) return !0;
  if (g_bIgnoreHidden) {
    var r = SSDOM.getComputedStyle(e);
    if (null != r && ("hidden" == r.visibility || "none" == r.display)) return !0
  }
  var n = e.tagName.toLowerCase();
  return "link" == n || "area" == n || "script" == n || "noscript" == n || "annotation" == n || "style" == n || "!--" == n || "title" == n || "html:script" == n
}, SSDOM.isInvalidNodeNested = function (e) {
  if (null == e) return !0;
  for (var t = e.ownerDocument.body, r = e; null != r;) {
    if (SSDOM.isInvalidNode(r)) return !0;
    if (r == t) break;
    r = r.parentNode
  }
  return !1
}, SSDOM.isIgnored = function (e) {
  if (null != e && 3 == e.nodeType && (e = e.parentNode), null == e) return !0;
  for (var t = e.ownerDocument.body, r = e; null != r && 1 == r.nodeType;) {
    if (null != r.getAttribute("ignore")) return !0;
    if (r == t) break;
    r = r.parentNode
  }
  return !1
}, SSDOM.isLineBreakNode = function (e) {
  if (1 != e.nodeType) return !1;
  var t = e.tagName.toLowerCase()
    .trimTH();
  return SSDAT.pageData.isInBreakList(t)
}, SSDOM.isFollowedBySpace = function (e) {
  var t = e.node
    , r = e.offset;
  if (3 != t.nodeType) return !1;
  if (r == t.nodeValue.length && (r = 0, t = SSDOM.getNextTextNodeNoImg(t, !0, null, !0), null == t)) return !1;
  var n = t.nodeValue.charCodeAt(r);
  return 32 == n || 160 == n
}, SSDOM.isFollowedByWordBreak = function (e) {
  if (e.forwardBias || (e = e.clone(), e.forwardBias = !0), e.offset == e.node.nodeValue.length && (e = SSDOM.moveCaret(e, 0, !0), null == e)) return !0;
  var t = e.node.nodeValue.charCodeAt(e.offset);
  if (39 == t) {
    if (arguments.length > 1 && arguments[1] === !0) return !0;
    var r = SSDOM.moveCaret(e, 1, !0);
    return null == r || SSDOM.isFollowedByWordBreak(r, !0)
  }
  return !rw_isLetterExt(t)
}, SSDOM.isFollowingWordBreak = function (e) {
  if (e.forwardBias && (e = e.clone(), e.forwardBias = !0), 0 == e.offset && (e = SSDOM.moveCaret(e, 0, !0), null == e)) return !0;
  var t = e.node.nodeValue.charCodeAt(e.offset - 1);
  if (39 == t) {
    if (arguments.length > 1 && arguments[1] === !0) return !0;
    var r = SSDOM.moveCaret(e, -1, !0);
    return null == r || SSDOM.isFollowingWordBreak(r, !0)
  }
  return !rw_isLetterExt(t)
}, SSDOM.isSpecialCase = function (e) {
  if (null == e) return !1;
  if (1 == e.nodeType) {
    var t = e.tagName.toLowerCase();
    if ("span" == t) {
      var r = e.getAttribute("pron");
      if (null != r) return !0;
      if (r = e.getAttribute("chunk"), null != r) return !0;
      if (r = e.isMathJax, null != r && r) {
        var n = SSDOM.getTextFromMathJax(e);
        if (n.length > 0) return !0
      }
    } else if ("acronym" == t || "abbr" == t) {
      var r = e.getAttribute("title");
      if (null != r) return !0
    } else {
      if ("chunk" == t) return !0;
      if ("img" == t) {
        var r = e.getAttribute("msg");
        if (null != r) return !0
      } else if ("math" == t) {
        var n = SSDOM.getTextFromMathMl(e);
        if (n.length > 0) return !0
      }
    }
    if (null != e.getAttribute("ignore")) return !0
  }
  return !1
}, SSDOM.isSpecialCaseHighlightable = function (e) {
  if (1 == e.nodeType) {
    var t = e.tagName.toLowerCase();
    if ("span" == t) {
      var r = e.getAttribute("pron");
      if (null != r) return !0;
      if (r = e.getAttribute("chunk"), null != r && "1" == r) return !0;
      if (r = e.isMathJax, null != r && r) {
        var n = SSDOM.getTextFromMathJax(e);
        if (n.length > 0) return !0
      }
    } else if ("acronym" == t || "abbr" == t) {
      var r = e.getAttribute("title");
      if (null != r) return !0
    } else if ("math" == t) {
      var n = SSDOM.getTextFromMathMl(e);
      if (n.length > 0) return !0
    }
  }
  return !1
}, SSDOM.checkForSpecialParent = function (e) {
  if (null != e) {
    for (var t = SSDOM.getBody(e), r = e; null != r && r != t;) {
      if (SSDOM.isSpecialCase(r)) return r;
      r = r.parentNode
    }
    if (r == t && null != r.getAttribute("ignore")) return r
  }
  return null
}, SSDOM.getContainingNode = function (e, t, r) {
  var n = SSDOM.getBody(e)
    , a = e;
  for (3 == a.nodeType && (a = a.parentNode); null != a && a != n;) {
    if ("class" == t && g_bIE) {
      if (a.className == r) return a;
      if (a.getAttribute("className") == r) return a
    }
    if (null != a.getAttribute(t) && (null == r || a.getAttribute(t) == r)) return a;
    a = a.parentNode
  }
  return null
}, SSDOM.getAllTextFromNode = function (e) {
  var t = "";
  if (3 == e.nodeType) SSDOM.isInvalidNode(e.parentNode) || "textarea" == e.parentNode.tagName.toLowerCase() || (t = e.nodeValue);
  else if (1 == e.nodeType) {
    if (null != e.getAttribute("ignore")) t = "", n = !0;
    else {
      var r = e.tagName.toLowerCase()
        , n = !1;
      if ("img" == r) {
        var a = e.getAttribute("msg");
        null != a && a.trimTH()
          .length > 0 && (t = " " + a.trimTH() + " "), n = !0
      } else if ("span" == r) {
        var a = e.getAttribute("pron");
        null != a && a.trimTH()
          .length > 0 && (t = a.trimTH(), n = !0), a = e.isMathJax, a && (t = SSDOM.getTextFromMathJax(e))
      } else if ("acronym" == r || "abbr" == r) {
        var a = e.getAttribute("pron");
        null != a && a.trimTH()
          .length > 0 ? t = a.trimTH() : (a = e.getAttribute("title"), null != a && a.trimTH()
            .length > 0 && (t = a.trimTH(), n = !0))
      } else "math" == r && (t = SSDOM.getTextFromMathMl(e))
    }
    if (!n)
      for (var o = e.firstChild; null != o;) t += SSDOM.getAllTextFromNode(o), o = o.nextSibling
  }
  return t
}, SSDOM.getTextFromNode = function (e) {
  var t = "";
  if (3 == e.nodeType) SSDOM.isInvalidNode(e.parentNode) || "textarea" == e.parentNode.tagName.toLowerCase() || (t = e.nodeValue);
  else if (1 == e.nodeType)
    if (null != e.getAttribute("ignore")) t = "";
    else {
      var r = e.tagName.toLowerCase();
      if ("img" == r) {
        var n = e.getAttribute("msg");
        null != n && n.trimTH()
          .length > 0 && (t = " " + n.trimTH() + " ")
      } else if ("span" == r) {
        var n = e.getAttribute("pron");
        null != n && n.trimTH()
          .length > 0 && (t = n.trimTH()), n = e.getAttribute("chunk"), null != n && "1" == n && (t = e.innerHTML), n = e.isMathJax, n && (t = SSDOM.getTextFromMathJax(e))
      } else if ("acronym" == r || "abbr" == r) {
        var n = e.getAttribute("pron");
        null != n && n.trimTH()
          .length > 0 ? t = n.trimTH() : (n = e.getAttribute("title"), null != n && n.trimTH()
            .length > 0 && (t = n.trimTH()))
      } else "math" == r && (t = SSDOM.getTextFromMathMl(e))
    }
  return t
}, SSDOM.getTextOverRange = function (e, t, r) {
  try {
    if (null == t || null == r) return "";
    var n = SSDOM.getCaretPairFromDomPosition(e, t.path, t.offset, r.path, r.offset);
    return SSDOM.getTextOverCaretRange(n)
  } catch (a) {
    return thLog("Error getTextOverRange: " + a.message), ""
  }
}, SSDOM.getTextOverCaretRange = function (e) {
  try {
    if (null == e || null == e.leftCaret || null == e.rightCaret) return "";
    for (var t = e.leftCaret, r = e.rightCaret, n = t.node, a = r.node, o = !0, i = n, l = ""; null != i;) {
      var s = "";
      3 == i.nodeType && (SSDOM.isInvalidNode(i.parentNode) || "textarea" == i.parentNode.tagName.toLowerCase() || (s = i.nodeValue)), null != s && "" != s && (i == a && r.offset > -1 && (s = s.substring(0, r.offset)), i == n && t.offset > -1 && (s = s.substring(t.offset)), l += s), i = o ? SSDOM.getNextNodeAllowMoveToChild(i, !1, a) : SSDOM.getNextTextNode(i, !1, a), o = !1
    }
    return l.trimTH()
  } catch (c) {
    return thLog("Error getTextOverCaretRange: " + c.message), ""
  }
}, SSDOM.getTextSpokenOverCaretRange = function (e) {
  try {
    if (null == e || null == e.leftCaret || null == e.rightCaret) return "";
    for (var t = e.leftCaret, r = e.rightCaret, n = t.node, a = r.node, o = !1, i = n, l = ""; null != i;) {
      if (o = SSDOM.isSpecialCase(i), o || 3 == i.nodeType) {
        var s = SSDOM.getTextFromNode(i);
        null != s && "" != s && (o || (i == a && r.offset > -1 && (s = s.substring(0, r.offset)), i == n && t.offset > -1 && (s = s.substring(t.offset))), l += s)
      }
      i = o ? SSDOM.getNextNodeIgnoreChildren(i, !1, a) : SSDOM.getNextNode(i, !1, a)
    }
    return l.trimTH()
  } catch (c) {
    return thLog("Error getTextOverCaretRange: " + c.message), ""
  }
}, SSDOM.textFromFormTH = function (e) {
  var t = null
    , r = e.tagName.toLowerCase()
    , n = SSDOM.getPositionInDom(e);
  if ("input" == r) {
    var a = e.getAttribute("type");
    null != a && (a = a.toLowerCase());
    var o = "";
    null == a || a.equalsTH("") || a.equalsTH("text") ? o = e.value : a.equalsTH("password") ? o = "Masked password field" : a.equalsTH("image") ? o = "" : (a.equalsTH("button") || a.equalsTH("submit") || a.equalsTH("reset")) && (o = e.getAttribute("value")), o.equalsTH("") || (t = "form:" + n + ";" + o)
  } else if ("select" == r) {
    for (var o = "", i = e.selectedIndex, l = "", s = 0; s < e.options.length; s++) l += e.options[s].text + " ";
    l.equalsTH("") || (i > -1 ? (o = e.options[i].text, o += " selected from the list " + l) : o = "No selection from the list " + l, t = "form" + n + ";" + o)
  } else if ("textarea" == r) {
    var o = e.value;
    t = "form" + n + ";" + o
  } else if ("option" == r) {
    var o = e.value;
    t = "form" + n + ";" + o
  }
  return t
}, SSDOM.getTargetElement = function (e) {
  var t;
  return t = g_bIE ? e.srcElement : g_bSafari ? e.target : e.target
}, SSDOM.getClickPoint = function (e) {
  var t, r = null;
  if (g_bIE) {
    if (t = e.srcElement, 1 == t.nodeType && "textarea" == t.tagName.toLowerCase());
    else if (r = rw_getTargetNodeAsCaretIE(e, !0), null != r) {
      if (null == r.node || null == r.node.parentNode || r.node.parentNode != t) return r = null, null;
      3 == r.node.nodeType && (r.node = SSDOM.mergeTextNodes(r.node))
    }
  } else if (g_bSafari) {
    if (t = e.target, null != t)
      if (g_bSafari3) {
        if (null != t.firstChild && 3 == t.firstChild.nodeType && "textarea" != t.tagName.toLowerCase()) {
          var n = t.firstChild.nodeValue;
          n.trimTH()
            .length > 0 && (t = t.firstChild)
        }
      } else if (g_bSafari2)
      if (null != e.fromElement && 1 == t.nodeType && "textarea" != t.tagName.toLowerCase()) 3 == e.fromElement.nodeType && (t = e.fromElement);
      else if (1 == t.nodeType && null != t.firstChild && 3 == t.firstChild.nodeType && "textarea" != t.tagName.toLowerCase()) {
      var n = t.firstChild.nodeValue;
      n.trimTH()
        .length > 0 && (t = t.firstChild)
    }
  } else if (null != e.explicitOriginalTarget.nodeValue)
    if ("textarea" == e.target.tagName.toLowerCase()) t = e.target;
    else {
      t = e.explicitOriginalTarget;
      var a = window.getSelection();
      if (null == a.anchorNode || a.anchorNode != t) return null;
      r = new THCaret(a.anchorNode, a.anchorOffset, (!0))
    }
  else t = e.target;
  return null == r && null != t && (r = new THCaret(t, 0, (!0))), r
}, SSDOM.getPositionInDom = function (e) {
  var t = ""
    , r = 0
    , n = "";
  if (null != e && null != e.ownerDocument)
    for (var a = !1, o = !1, i = e.ownerDocument.body; null != e && e != i;) {
      SSDOM.isSpecialCase(e) && (t = ""), a = 3 == e.nodeType || 1 == e.nodeType && e.tagName.toLowerCase() == SSDAT.pageData.strHighlightTag && null != e.getAttribute("rwstate");
      for (var l = e.previousSibling; null != l;) o = 3 == l.nodeType || 1 == l.nodeType && l.tagName.toLowerCase() == SSDAT.pageData.strHighlightTag && null != l.getAttribute("rwstate"), a && o || ++r, l = l.previousSibling, a = o;
      if (t = t + r + "~", r = 0, e = e.parentNode, null != e && null != e.getAttribute && null != e.tagName) {
        var s = e.getAttribute("chunk");
        if ("span" == e.tagName.toLowerCase() && "1" == s) {
          var c = SSDOM.getPositionInDom(e);
          n = "#^th*" + c + "#^th*"
        }
      }
    }
  return n + t
}, SSDOM.getNodeFromPosition = function (e, t) {
  var r = e;
  if (t.lastIndexOf("*") > -1) {
    var n = t.lastIndexOf("*");
    t = t.substring(n + 1)
  }
  var a, o = t.split("~")
    , i = o.length;
  for (a = i - 2; a > -1; a--) {
    if (r = r.firstChild, null == r) return null;
    var l;
    l = 0 == o[a].length ? 0 : parseInt(o[a], 10);
    for (var s = !1, c = 3 == r.nodeType || 1 == r.nodeType && r.tagName.toLowerCase() == SSDAT.pageData.strHighlightTag && null != r.getAttribute("rwstate"); l > 0;) {
      if (r = r.nextSibling, null == r) return null;
      s = 3 == r.nodeType || 1 == r.nodeType && r.tagName.toLowerCase() == SSDAT.pageData.strHighlightTag && null != r.getAttribute("rwstate"), s && c || (--l, c = s)
    }
  }
  return r
}, SSDOM.getCaretFromDomPosition = function (e, t, r, n, a) {
  "undefined" == typeof a && (a = !1);
  try {
    if (null == e) return null;
    var o = SSDOM.getNodeFromPosition(e, t);
    if (a) {
      var i = new THCaret(o, 0, n);
      return i.setSpecialCase(!0), i
    }
    if (SSDOM.isSpecialCase(o)) {
      if (SSDOM.isSpecialCaseHighlightable(o)) {
        if (n) {
          var l = SSDOM.getFirstChildTextNode(o, !1);
          return null != l ? new THCaret(l, 0, n) : new THCaret(o, 0, n)
        }
        var s = SSDOM.getLastChildTextNode(o, !1);
        return null != s ? 3 == s.nodeType ? new THCaret(s, s.length, n) : new THCaret(s, 0, n) : new THCaret(o, 0, n)
      }
      return new THCaret(o, 0, n)
    }
    var c = 0;
    if (n || ++c, r > -1) {
      if (null == o) return null;
      for (var g, u = !1, s = o.parentNode, _ = o; !u;) {
        if (3 == o.nodeType) {
          if (g = o.nodeValue, r < c + g.length) {
            u = !0;
            break
          }
          _ = o, c += o.nodeValue.length, o = SSDOM.getNextNode(o, !1, s)
        } else if (1 == o.nodeType)
          if (SSDOM.isSpecialCase(o)) {
            var d = r - c;
            if (!(d > 0)) {
              u = !0;
              break
            }
            c += 1, o = SSDOM.getNextNodeIgnoreChildren(o, !1, s)
          } else o = SSDOM.getNextNode(o, !1, s);
        if (null == o || o == s) {
          if (null != _) {
            o = _, c = 3 == o.nodeType ? r - o.nodeValue.length : 0, n || ++c;
            break
          }
          return null
        }
      }
      return n ? new THCaret(o, r - c, n) : new THCaret(o, r - (c - 1), n)
    }
    return new THCaret(o, r, n)
  } catch (h) {
    return thLog("getCaretFromDomPosition error: " + h), null
  }
}, SSDOM.getCaretPairFromDomPosition = function (e, t, r, n, a) {
  var o, i = SSDOM.getCaretFromDomPosition(e, t, r, !0);
  return o = t == n && r >= a ? i : SSDOM.getCaretFromDomPosition(e, n, a, !1), new THCaretRange(i, o)
}, SSDOM.getClass = function (e) {
  return null == e ? "" : e.className ? e.className : e.getAttribute("class")
}, SSDOM.getComputedStyle = function (e) {
  return null == e ? null : 3 == e.nodeType && (e = e.parentNode, null == e) ? null : SSDOM.bIEOld ? e.currentStyle : window.getComputedStyle(e, null)
}, SSDOM.getTextFromMathMl = function (e) {
  if (null != e.previousSibling || null != e.nextSibling) {
    var t = document.createElement("span");
    e.parentNode.replaceChild(t, e), t.appendChild(e)
  }
  if (g_bIE) {
    var r = e.outerHTML;
    if (null == r) return "";
    if (r.indexOf("<?import namespace") > -1) {
      var n = r.indexOf("/>");
      n > -1 && (r = r.substring(n + 2), r = r.replace(/m:/gi, ""))
    }
    return r
  }
  var r = e.parentNode.innerHTML;
  return null != r && r.length > 0 ? r : ""
}, SSDOM.getTextFromMathJax = function (e) {
  var t = MathJax.Hub.getJaxFor(e);
  if (null != t) {
    var r = null;
    try {
      r = t.root.toMathML("")
    } catch (n) {
      return ""
    }
    return null != r || r.length > 0 ? r : ""
  }
  return ""
}, SSDOM.getFrameSelection = function (e) {
  if (!g_bIgnoreFrames && e.frames && e.length > 0) {
    var t, r = e.length;
    for (t = 0; t < r; t++) try {
      var n = e[t].getSelection();
      if (null != n && !n.isCollapsed) return e[t];
      if (e[t].length > 0) {
        var a = SSDOM.getFrameSelection(e[t]);
        if (a) return a
      }
    } catch (o) {}
  }
  return null
}, SSDOM.getFrameSelectionSFF = function (e) {
  var t = {}
    , r = SSDOM.getFrameSelection(e);
  return null != r && (t.theWindow = r, t.foundSel = r.getSelection())
    , t
}, SSDOM.getFrameSelectionOldIE = function (e) {
  var t, r = {};
  if (!g_bIgnoreFrames && e.frames && e.length > 0) {
    var n, a = e.length;
    for (n = 0; n < a; n++) try {
      var o = e[n];
      if (t = o.document.selection.createRange(), null != t && null != t.text && t.text.length > 0) {
        r.theWindow = o, r.theRange = t;
        break
      }
      if (o.length > 0) {
        var i = SSDOM.getFrameSelectionOldIE(o);
        if (i.theRange) {
          r = i;
          break
        }
      }
    } catch (l) {}
  }
  return r
}, SSDOM.getByClassName = function (e, t, r) {
  var n;
  if (g_bIE) n = SSDOM.getElementsByClass(e, t, r);
  else {
    n = [];
    var a, o = t.getElementsByClassName(e)
      , i = o.length;
    for (a = 0; a < i; a++) n.push(o[a])
  }
  return n
}, SSDOM.getElementsByClass = function (e, t, r) {
  var n = [];
  null != r && "*" != r || (r = SSDAT.pageData.strHighlightTag);
  var a, o = t.getElementsByTagName(r)
    , i = o.length
    , l = new RegExp("(^|\\s)" + e + "(\\s|$)");
  for (a = 0; a < i; a++) l.test(o[a].getAttribute("className")) ? n.push(o[a]) : l.test(o[a].getAttribute("class")) && n.push(o[a]);
  return n
}, SSDOM.getContentDocument = function (e) {
  return e.contentDocument ? e.contentDocument : e.contentWindow.document
}, SSDOM.allTextFromNodeTH = function (e) {
  var t = "";
  if (3 == e.nodeType) t = e.nodeValue;
  else if (1 == e.nodeType)
    for (var r = e.firstChild; null != r;) 3 == r.nodeType ? t += r.nodeValue : 1 == r.nodeType && (t += SSDOM.allTextFromNodeTH(r)), r = r.nextSibling;
  return t
}, SSDOM.getListOfHighlightableNodes = function (e, t) {
  var r = g_bIgnoreHidden;
  g_bIgnoreHidden = !1;
  var n = new Array;
  try {
    var a = e.node
      , o = t.node;
    if (3 != a.nodeType)
      if (1 == a.nodeType && "math" == a.tagName.toLowerCase()) {
        if (n.push(a), a == o) return n;
        a = SSDOM.getNextTextNode(a, !1, o)
      } else if (g_bIE && 1 == a.nodeType && null != a.firstChild && "math" == a.firstChild.tagName.toLowerCase()) {
      if (n.push(a.firstChild), a == o) return n;
      a = a.firstChild, a = SSDOM.getNextTextNode(a, !1, o)
    } else if (1 == a.nodeType && a.isMathJax) {
      if (n.push(a), a == o) return n;
      a = SSDOM.getNextTextNode(a, !1, o)
    } else if (g_bIE && 1 == a.nodeType && null != a.firstChild && a.firstChild.isMathJax) {
      if (n.push(a.firstChild), a == o) return n;
      a = a.firstChild, a = SSDOM.getNextTextNode(a, !1, o)
    } else if (a = SSDOM.getFirstChildTextNode(a, !1), null == a) return n;
    if (a == o) {
      if (3 == a.nodeType) {
        var i = a.nodeValue;
        i.length > 0 && e.offset < i.length && t.offset > 0 && t.offset > e.offset && n.push(a)
      }
    } else {
      if (3 == a.nodeType) {
        var i = a.nodeValue;
        i.length > 0 && e.offset < i.length && n.push(a)
      } else 1 == a.nodeType && "math" == a.tagName.toLowerCase() ? n.push(a) : g_bIE && 1 == a.nodeType && null != a.firstChild && "math" == a.firstChild.tagName.toLowerCase() ? (a = a.firstChild, n.push(a)) : 1 == a.nodeType && a.isMathJax ? n.push(a) : g_bIE && 1 == a.nodeType && null != a.firstChild && a.firstChild.isMathJax && (a = a.firstChild, n.push(a));
      for (var l = SSDOM.getNextTextNodeNoImg(a, !1, o, !0); null != l;) {
        if (l == o) {
          if (3 == o.nodeType) {
            var i = o.nodeValue;
            i.length > 0 && t.offset > 0 && n.push(o)
          } else 1 == l.nodeType && "math" == l.tagName.toLowerCase() ? n.push(l) : g_bIE && 1 == l.nodeType && null != l.firstChild && "math" == l.firstChild.tagName.toLowerCase() ? n.push(l.firstChild) : 1 == l.nodeType && l.isMathJax ? n.push(l) : g_bIE && 1 == l.nodeType && null != l.firstChild && l.firstChild.isMathJax && n.push(l.firstChild);
          break
        }
        n.push(l), l = SSDOM.getNextTextNodeNoImg(l, !1, o, !0)
      }
    }
  } catch (s) {
    thLog("getListOfHighlightableNodes error:" + s.message)
  }
  return g_bIgnoreHidden = r, n
}, SSDOM.getListOfNodes = function (e, t) {
  var r = new Array;
  try {
    var n = e.node
      , a = t.node;
    if (n == a) r.push(n);
    else {
      r.push(n);
      for (var o = SSDOM.getNextTextNode(n, !1, a, !0); null != o;) r.push(o), o = SSDOM.getNextTextNodeNoImg(o, !1, a, !0)
    }
  } catch (i) {
    thLog("getListOfNodes error:" + i.message)
  }
  return r
}, SSDOM.getRangeFromSelectionPoint = function (e) {
  try {
    var t = e + "";
    t = t.trimTH(), e.collapseToStart();
    var r = e.anchorNode
      , n = e.anchorOffset;
    if (3 != r.nodeType ? (r = SSDOM.getNextTextNodeNoBlank(r, !1, null), n = 0) : n == r.nodeValue.length && (r = SSDOM.getNextTextNodeNoBlank(r, !1, null), n = 0), null != r && 3 == r.nodeType)
      for (var a = r.nodeValue.substring(n), o = a.trimStartTH(); a.length > o.length;) {
        if (0 == o.length) {
          if (r = SSDOM.getNextTextNodeNoBlank(r, !1, null), n = 0, null == r || 3 != r.nodeType) break
        } else n += a.length - o.length;
        a = r.nodeValue.substring(n), o = a.trimStartTH()
      }
    var i = SSDOM.getRangeObject();
    return null == r ? (i.setStart(e.anchorNode, e.anchorOffset), i.setEnd(e.anchorNode, e.anchorOffset)) : 3 != r.nodeType ? i = SSDOM.getNodesForText(r, n, t) : n + t.length < r.nodeValue.length ? (i.setStart(r, n), i.setEnd(r, n + t.length)) : i = SSDOM.getNodesForText(r, n, t), i
  } catch (l) {
    var i = SSDOM.getRangeObject();
    return i.setStart(e.anchorNode, e.anchorOffset), i.setEnd(e.anchorNode, e.anchorOffset), i
  }
}, SSDOM.getNodesForText = function (e, t, r) {
  var n = SSDOM.getRangeObject(e.ownerDocument.body);
  n.setStart(e, t), n.setEnd(e, t);
  for (var a = 0, o = r.length + t, i = e; null != i && a < o;) {
    if (3 == i.nodeType) {
      var l = i.nodeValue;
      a += l.length
    }
    if (a < o) i = SSDOM.getNextTextNodeNoBlank(i, !1, null);
    else {
      var s = a - o;
      n.setEnd(i, i.nodeValue.length - s)
    }
  }
  return n
}, SSDOM.getSelectionObject = function () {
  var e = null;
  if (window.getSelection) {
    if (null != g_ipadSelectionRange) return null;
    var t = window.getSelection()
      , r = null;
    if (t.isCollapsed ? (t = SSDOM.getFrameSelectionSFF(window), t.foundSel && (r = t.foundSel)) : r = t, null == r) return null;
    e = r
  } else if (document.selection) {
    var n = document.selection.createRange();
    if (n.text.length > 0) theWindow = window, e = n;
    else {
      var a = SSDOM.getFrameSelectionOldIE(window);
      a.theRange && (e = a.theRange)
    }
  }
  return e
}, SSDOM.getPageText = function () {
  var e = "";
  if (SSDOM.bIEOld) {
    var t = document.body.createTextRange();
    t.expand("textedit"), e = t.text
  } else {
    var t = document.createRange();
    t.setStartBefore(document.body), t.setEndAfter(document.body), e = t.toString()
  }
  return e
}, SSDOM.getTextFromElement = function (e) {
  return e.textContent ? e.textContent : e.innerText ? e.innerText : ""
}, SSDOM.getRangeObject = function (e) {
  if ("undefined" != typeof e && null != e || (e = document.body), SSDOM.bIEOld) return e.createTextRange();
  var t = e.ownerDocument;
  return t.createRange()
}, SSDOM.getBody = function (e) {
  return e.document ? e.document.body : e.ownerDocument.body
}, SSDOM.getWindow = function (e) {
  try {
    if (null == e) return window;
    if (0 === top.frames.length) return window;
    var t = e.ownerDocument.body
      , r = window.document.body;
    if (t === r) return window;
    if (!g_bIgnoreFrames) {
      var n, a = top.frames.length;
      for (n = 0; n < a; n++) try {
        var o = top.frames[n].document.body;
        if (o === t) return top.frames[n]
      } catch (i) {}
    }
  } catch (l) {
    thLog("Error getWindow: " + l)
  }
  return window
}, SSDOM.splitText = function (e, t) {
  if (null == e || 3 != e.nodeType || null == e.parentNode) return e;
  var r = 0
    , n = e.parentNode
    , a = n.parentNode;
  if (null == a || "span" != n.tagName.toLowerCase() || "span" != a.tagName.toLowerCase() || null == n.getAttribute(RWTH_GENERATED) || null == a.getAttribute(RWTH_GENERATED) && null == a.getAttribute(RWTH_PERM_GENERATED) ? "span" != n.tagName.toLowerCase() || null == n.getAttribute(RWTH_GENERATED) && null == n.getAttribute(RWTH_PERM_GENERATED) || (r = 1) : (r = 2, null == e.nextSibling && null == e.previousSibling || (r = 1)), 0 == e.nodeValue.length || t <= 0 || t >= e.nodeValue.length) {
    if (0 == r) {
      var o = document.createElement("span");
      o.setAttribute(RWTH_GENERATED, "1");
      var i = document.createElement("span");
      i.setAttribute(RWTH_GENERATED, "1"), n.insertBefore(o, e), o.appendChild(i), i.appendChild(e)
    } else if (1 == r) {
      var o = document.createElement("span");
      o.setAttribute(RWTH_GENERATED, "1"), n.insertBefore(o, e), o.appendChild(e)
    }
    return e
  }
  var l = e.nodeValue
    , s = l.substring(0, t)
    , c = l.substring(t)
    , i = document.createElement("span")
    , g = document.createElement("span")
    , u = document.createTextNode(s)
    , _ = document.createTextNode(c);
  if (i.appendChild(u), g.appendChild(_), i.setAttribute(RWTH_GENERATED, "1"), g.setAttribute(RWTH_GENERATED, "1"), 2 == r) a.insertBefore(g, n), a.insertBefore(i, g), a.removeChild(n);
  else if (1 == r) n.insertBefore(i, e), n.insertBefore(g, e), n.removeChild(e);
  else {
    var o = document.createElement("span");
    o.setAttribute(RWTH_GENERATED, "1"), o.appendChild(i), o.appendChild(g), n.insertBefore(o, e), n.removeChild(e)
  }
  return _
}, SSDOM.createObjectWithNameAttr = function (e, t, r, n, a) {
  if (SSDOM.bIEOld) return SSDOM.createObject("<" + e + " name='" + a + "'>", t, r, n);
  var o = SSDOM.createObject(e, t, r, n);
  return o.setAttribute("name", a), o.name = a, o
}, SSDOM.createObject = function (e, t, r, n) {
  var a = document.createElement(e);
  if (null != r && (a.id = r), null != n && (a.className = n), null != t) {
    var o = t.length;
    if (SSDOM.bIEOld)
      for (var i = 0; i < o; i += 2) "style" == t[i] ? SSDOM.setStyle(a, t[i + 1]) : a.setAttribute(t[i], t[i + 1]);
    else
      for (var i = 0; i < o; i += 2) a.setAttribute(t[i], t[i + 1])
  }
  return a
}, SSDOM.createObjectFromMap = function (e, t, r, n) {
  var a = document.createElement(e);
  if (null != r && (a.id = r), null != n && (a.className = n), null != t)
    if (SSDOM.bIEOld)
      for (var o in t) "style" == o ? SSDOM.setStyle(a, t[o]) : a.setAttribute(o, t[o]);
    else
      for (var o in t) a.setAttribute(o, t[o]);
  return a
}, SSDOM.setStyle = function (p_theObj, p_strStyles) {
  for (var nColon = p_strStyles.indexOf(":"), nSemi = p_strStyles.indexOf(";", nColon), strStyle, strValue, strData = p_strStyles; nColon > -1;) strStyle = strData.substring(0, nColon), nSemi > -1 ? (strValue = strData.substring(nColon + 1, nSemi), strData = strData.substr(nSemi + 1), nColon = strData.indexOf(":"), nSemi = strData.indexOf(";", nColon)) : (strValue = strData.substr(nColon + 1), nColon = -1), SSDOM.bIE && " background-position" == strStyle && (strStyle = " backgroundPosition"), eval("p_theObj.style." + strStyle + '="' + strValue + '";')
}, SSDOM.addContentToPage = function (e, t) {
  var r = document.createElement(t);
  r.innerHTML = e, document.body.appendChild(r)
}, SSDOM.addContentToPageWithAttr = function (e, t, r) {
  var n = document.createElement(t)
    , a = r.length;
  for (i = 0; i < a; i += 2) n.setAttribute(r[i], r[i + 1]);
  n.innerHTML = e, document.body.appendChild(n)
}, SSDOM.moveCaret = function (e, t, r) {
  var n, a = e.node
    , o = e.offset
    , i = e.forwardBias;
  if (3 != a.nodeType) return null;
  for (; a;) {
    var l = a.nodeValue.length;
    if (0 == l)
      if (t > 0 || 0 == t && i) {
        if (n = SSDOM.getNextTextNodeNoImg(a, r, null, !0), null == n) return 0 == t ? new THCaret(a, a.nodeValue.length, i) : null;
        a = n, o = 0
      } else {
        if (n = SSDOM.getPreviousTextNodeNoImg(a, r, null, !0), null == n) return 0 == t ? new THCaret(a, 0, i) : null;
        a = n, o = a.nodeValue.length
      }
    else if (o += t, o < 0 || 0 == o && !i) {
      if (t = o, n = SSDOM.getPreviousTextNodeNoImg(a, r, null, !0), null == n) return 0 == t ? new THCaret(a, 0, i) : null;
      a = n, o = a.nodeValue.length
    } else {
      if (!(o > l || o == l && i)) return new THCaret(a, o, i);
      if (t = o - l, n = SSDOM.getNextTextNodeNoImg(a, r, null, !0), null == n) return 0 == t ? new THCaret(a, a.nodeValue.length, i) : null;
      a = n, o = 0
    }
  }
  return null
}, SSDOM.insertAfter = function (e, t) {
  var r = e.parentNode;
  null != e.nextSibling ? r.insertBefore(t, e.nextSibling) : r.appendChild(t)
}, SSDOM.mergeTextNodes = function (e) {
  if (null == e) return e;
  var t = e.parentNode;
  if (null != t && 3 == e.nodeType) {
    for (var r = e.ownerDocument; null != e.previousSibling && 3 == e.previousSibling.nodeType;) {
      var n = e.previousSibling.nodeValue + e.nodeValue
        , a = r.createTextNode(n);
      t.removeChild(e.previousSibling), t.replaceChild(a, e), e = a
    }
    for (; null != e.nextSibling && 3 == e.nextSibling.nodeType;) {
      var n = e.nodeValue + e.nextSibling.nodeValue
        , a = r.createTextNode(n);
      t.removeChild(e.nextSibling), t.replaceChild(a, e), e = a
    }
  }
  return e
}, THCaret.prototype.setSpecialCase = function (e) {
  this.specialCase = e
}, THCaret.prototype.isSpecialCase = function () {
  return this.specialCase
}, THCaret.prototype.check = function () {
  var e = !0;
  return null == this.node || null == this.node.parentNode ? e = !1 : 3 != this.node.nodeType ? 1 == this.node.nodeType && this.specialCase || (e = !1) : (this.offset < 0 || this.offset > this.node.nodeValue.length) && (e = !1), e
}, THCaret.prototype.toString = function () {
  var e = "THCaret ";
  return null != this.node && (3 == this.node.nodeType ? e += this.node.nodeValue + " " + this.node.parentNode.tagName + " " : 1 == this.node.nodeType && (e += this.node.tagName + " ")), e += this.offset
}, THCaret.prototype.equals = function (e) {
  return null != e && (this.node == e.node && this.offset == e.offset && this.forwardBias == e.forwardBias)
}, THCaret.prototype.clone = function () {
  return new THCaret(this.node, this.offset, this.forwardBias)
}, THCaretRange.prototype.equals = function (e) {
  return null != e && (this.leftCaret.equals(e.leftCaret) && this.rightCaret.equals(e.rightCaret))
}, THCaretRange.prototype.toString = function () {
  return SSDOM.getTextOverCaretRange(this)
}, THCommand.prototype.CMD_LIST = "list", THCommand.prototype.CMD_STOP = "stop", THCommand.prototype.CMD_STOPAFTER = "stopafter", THCommand.prototype.CMD_JUMP = "jump", THCommand.prototype.CMD_JUMPBACK = "jumpback", THCommand.prototype.CMD_VOICE = "voice", THCommand.prototype.CMD_PAGEID = "pageid", THCommand.prototype.CMD_BOOKID = "bookid", THCommand.prototype.CMD_EXEC = "exec", THCommand.prototype.CMD_EXECAFTER = "execafter", SpeechStream.DateFilterModes = {
  DATE: 2
  , NUMBER: 1
  , NONE: 0
}, SpeechStream.dateFilter = new function () {
  function e(e) {
    var r;
    switch (n) {
    case 0:
      r = e;
      break;
    case 1:
      r = t(e) ? " " + e.substring(0, 1) + "," + e.substring(1, 4) + " " : e;
      break;
    case 2:
      if (t(e)) {
        var a = parseInt(e, 10)
          , o = parseInt(e.substring(2, 4), 10);
        r = a < 1e3 ? e : (a >= 1e3 && a < 2e3 || a >= 2100) && 0 == o ? " " + e.substring(0, 2) + " hundred " : (a >= 1e3 && a < 2e3 || a >= 2100) && o > 0 && o < 10 ? " " + e.substring(0, 2) + " oh " + e.substring(3, 4) + " " : (a >= 1e3 && a < 2e3 || a >= 2010) && o >= 10 ? " " + e.substring(0, 2) + " " + e.substring(2, 4) + " " : 2e3 == a ? " two thousand " : a > 2e3 && a < 2010 ? " two thousand and " + e.substring(3, 4) + " " : e
      } else r = e;
      break;
    default:
      r = e
    }
    return r
  }

  function t(e) {
    return 4 == e.length && !isNaN(e) && parseInt(e, 10) >= 1e3
  }

  function r(t) {
    if (null == t) return t;
    var r = t.replace(o, "");
    if (4 == r.length) {
      var n = e(r);
      if (n != r) {
        var a = t.indexOf(r);
        return t.substring(0, a) + n + t.substring(a + 4)
      }
    }
    return t
  }
  var n = 2
    , a = SpeechStream.DateFilterModes
    , o = /^[ ,.?!;:\x27\x22\x28\x29\x5b\x5d\x7b\x7d\x82\x91\x92\x93\x94]+|[ ,.?!;:\x27\x22\x28\x29\x5b\x5d\x7b\x7d\x82\x91\x92\x93\x94]+$/g;
  this.setMode = function (e) {
    var t = parseInt(e, 10);
    if (t == a.NONE || t == a.NUMBER || t == a.DATE) n = t;
    else if ("string" == typeof e) {
      var r = e.toUpperCase();
      "NONE" == r ? n = a.NONE : "NUMBER" == r ? n = a.NUMBER : "DATE" == r && (n = a.DATE)
    }
  }, this.getMode = function () {
    return n
  }, this.checkDatesFromString = function (e) {
    var t = !1
      , r = e.split(" ");
    if (t = this.checkDatesFromList(r)) {
      var n = r.length
        , a = "";
      for (i = 0; i < n - 1; i++) a += r[i], a += " ";
      return a += r[n - 1]
    }
    return e
  }, this.checkDatesFromList = function (e) {
    var t, n, a = !1
      , o = e.length;
    for (n = 0; n < o; n++) t = r(e[n]), t != e[n] && (e[n] = t, a = !0);
    return a
  }
};
var THDomRange_ERROR = -1
  , THDomRange_TARGET_SAME = 0
  , THDomRange_AFTER_TARGET = 1
  , THDomRange_BEFORE_TARGET = 2
  , THDomRange_TARGET_INSIDE = 3
  , THDomRange_TARGET_INCLUDES_THIS = 4
  , THDomRange_OVERLAPS_END_OF_TARGET = 5
  , THDomRange_OVERLAPS_START_OF_TARGET = 6
  , THDomRange_TARGET_INCLUDES_THIS_AT_START = 7
  , THDomRange_TARGET_INCLUDES_THIS_AT_END = 8;
THDomRange.prototype.refresh = function () {
  with(this) if (0 == startCaret.check() || 0 == endCaret.check()) {
    var caretRange = SSDOM.getCaretPairFromDomPosition(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset)
      , startCaret = caretRange.leftCaret
      , endCaret = caretRange.rightCaret;
    null == startCaret && null == endCaret ? (startCaret = new THCaret(document.body, 0, (!0)), endCaret = new THCaret(document.body, 0, (!1))) : null != startCaret && null != endCaret || (null == startCaret ? startCaret = new THCaret(endCaret.node, endCaret.offset, (!0)) : endCaret = new THCaret(startCaret.node, startCaret.offset, (!1)))
  }
}, THDomRange.prototype.toString = function () {
  this.refresh();
  var e = SSDOM.getRangeObject(this.body);
  return e.setStart(this.startCaret.node, this.startCaret.offset), e.setEnd(this.endCaret.node, this.endCaret.offset), e.toString()
}, THDomRange.prototype.getStartAsRange = function () {
  var e = SSDOM.getRangeObject(this.body);
  return e.setStart(this.startCaret.node, this.startCaret.offset), e.setEnd(this.startCaret.node, this.startCaret.offset), e
}, THDomRange.prototype.getEndAsRange = function () {
  var e = SSDOM.getRangeObject(this.body);
  return e.setStart(this.endCaret.node, this.endCaret.offset), e.setEnd(this.endCaret.node, this.endCaret.offset), e
}, THDomRange.prototype.equals = function (e) {
  return this.startRef.path == e.startRef.path && this.startRef.offset == e.startRef.offset && this.endRef.path == e.endRef.path && this.endRef.offset == e.endRef.offset
}, THDomRange.prototype.compareRange = function (e) {
  if (this.equals(e)) return THDomRange_TARGET_SAME;
  this.refresh(), e.refresh();
  var t = this.getStartAsRange()
    , r = this.getEndAsRange()
    , n = e.getStartAsRange()
    , a = e.getEndAsRange()
    , o = t.compareBoundaryPoints("START_TO_START", n)
    , i = t.compareBoundaryPoints("START_TO_START", a)
    , l = r.compareBoundaryPoints("START_TO_START", n)
    , s = r.compareBoundaryPoints("START_TO_START", a)
    , c = THDomRange_ERROR;
  return c = i > -1 ? THDomRange_AFTER_TARGET : l < 1 ? THDomRange_BEFORE_TARGET : o == -1 ? s == -1 ? THDomRange_OVERLAPS_START_OF_TARGET : THDomRange_TARGET_INSIDE : 0 == o ? s == -1 ? THDomRange_TARGET_INCLUDES_THIS_AT_START : 0 == s ? THDomRange_TARGET_SAME : THDomRange_TARGET_INSIDE : s == -1 ? THDomRange_TARGET_INCLUDES_THIS : 0 == s ? THDomRange_TARGET_INCLUDES_THIS_AT_END : THDomRange_OVERLAPS_END_OF_TARGET
}, THDomRefPt.prototype.toString = function () {
  return "THDomRefPt " + this.path + " " + this.offset
}, THHoverTarget.prototype.isRange = function () {
  return null != this.range
}, THHoverTarget.prototype.isValid = function () {
  return this.valid && !g_bDisableSpeech
}, THHoverTarget.prototype.isOverridingGlobal = function () {
  return null != this.voice || null != this.pageId || null != this.bookId
}, THHoverTarget.prototype.getCaretRange = function () {
  var e;
  if (this.isRange()) e = SSDOM.getCaretPairFromDomPosition(this.range.body, this.range.startRef.path, this.range.startRef.offset, this.range.endRef.path, this.range.endRef.offset);
  else {
    var t = SSDOM.getCaretFromDomPosition(this.body, this.path, -1, !0);
    e = new THCaretRange(t, t)
  }
  return e
}, THHoverTarget.prototype.getTextPreparedForSpeech = function () {
  return this.prepareTextForSpeech(), this.textToSpeak
}, THHoverTarget.prototype.prepareTextForSpeech = function () {
  if (!this.prepared) {
    var e, t;
    if (this.isRange()) {
      this.wordNodes = new Array;
      var r = rw_getSpeechOverRangeToSpeak(this.range.body, this.range.startRef, this.range.endRef, this.wordNodes);
      if (this.voice = r.voice, null != r.caretRange) {
        var n = r.caretRange;
        this.range = rw_getTHRangeFromTHCaretRange(n)
      }
      e = r.txt, t = r.txtOrig
    } else {
      var a = SSDOM.getCaretFromDomPosition(this.body, this.path, -1, !0);
      if (null != a && null != a.node) {
        var o = getNodeText(a.node);
        if (0 == o.trimTH()
          .length) e = "", t = "";
        else {
          g_bVoiceFromLangFlag ? this.voice = rw_getVoiceSetForNode(a.node) : this.voice = null;
          var i = new SpeechStream.SpeechRequest;
          i.setString(o, SpeechStream.SpeechRequestBookmarks.OUTER), e = i.getFinalText(), t = i.getText()
        }
      } else e = "", t = ""
    }
    this.textToSpeak = e, this.textToSpeakNoChanges = t, this.prepared = !0
  }
}, THHoverTarget.prototype.highlightRange = function () {
  try {
    if (null != this.range) {
      var e = SSDOM.getCaretPairFromDomPosition(this.range.body, this.range.startRef.path, this.range.startRef.offset, this.range.endRef.path, this.range.endRef.offset)
        , t = e.leftCaret
        , r = e.rightCaret;
      null != t && null != r && rw_setSpeechRangeImpl(t.node, t.offset, r.node, r.offset, "sp")
    }
  } catch (n) {
    thLog("Error in THHoverTargetClass:highlightRange: " + n.message)
  }
}, THHoverTarget.prototype.unhighlightRange = function () {
  try {
    if (null != this.range) {
      var e = SSDOM.getCaretPairFromDomPosition(this.range.body, this.range.startRef.path, this.range.startRef.offset, this.range.endRef.path, this.range.endRef.offset)
        , t = e.leftCaret
        , r = e.rightCaret;
      null != t && null != r && rw_removeSpeechHighlight(SSDOM.getListOfHighlightableNodes(t, r), !1)
    }
  } catch (n) {
    thLog("Error in THHoverTarget:unhighlightRange: " + n.message)
  }
}, THHoverTarget.prototype.equals = function (e) {
  return null != e && (this.isRange() == e.isRange() && (this.isRange() ? this.range.equals(e.range) : this.path.equalsTH(e.path)))
}, THHoverTarget.prototype.equalsAprox = function (e) {
  if (null == e) return !1;
  if (this.isRange() != e.isRange()) return !1;
  if (this.isRange()) {
    if (this.range.equals(e.range)) return !0;
    var t = this.getCaretRange()
      , r = e.getCaretRange();
    return t = rw_reduceSelectionForNonSpeechChar(t), r = rw_reduceSelectionForNonSpeechChar(r), t.equals(r)
  }
  return this.path.equalsTH(e.path)
}, THHoverTarget.prototype.toString = function () {
  var e = "THHoverTarget ";
  return null != this.path ? e += "path=" + this.path : null != this.range && (e += this.range.toString()), e
}, SpeechStream.pronunciation = new function () {
  this.NONE = 0, this.SERVER_PRONUNCIATION = 1, this.CLIENT_PRONUNCIATION_FOR_OFFLINE_CACHE = 2, this.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER = 3, this.mode = this.SERVER_PRONUNCIATION, this.checkPronunciation = function () {
    return this.mode != this.NONE && SpeechStream.cacheMode.mode != SpeechStream.cacheMode.CACHE_ONLY && this.mode != this.SERVER_PRONUNCIATION
  }, this.fetchData = function () {
    return this.mode != this.NONE && SpeechStream.cacheMode.mode != SpeechStream.cacheMode.CACHE_ONLY && (this.mode != this.SERVER_PRONUNCIATION || ((g_nIcons & pronCreate_icon) == pronCreate_icon || (g_nIcons & pronEdit_icon) == pronEdit_icon))
  }, this.encodeData = function () {
    return this.mode != this.NONE && this.mode != this.SERVER_PRONUNCIATION
  }, this.setPronunciation = function (e) {
    e != this.NONE && e != this.SERVER_PRONUNCIATION && e != this.CLIENT_PRONUNCIATION_FOR_OFFLINE_CACHE && e != this.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER || (this.mode = e)
  }
}, SpeechStream.Dictionary = function () {
  function e(e) {
    return this["+" + e]
  }

  function t(e) {
    var t = "+" + e;
    this[t] = null, delete this[t];
    var r = this.Keys$__.indexOf(e);
    if (r > -1 && this.Keys$__.splice(r, 1), r = this.AllPageKeys$__.indexOf(e), r > -1 && this.AllPageKeys$__.splice(r, 1), e.indexOf(" ") > -1) {
      var r = e.indexOf(" ")
        , n = e.substring(0, r);
      r = this.MultiwordStart$__.indexOf(n), r > -1 && this.MultiwordStart$__.splice(r, 1)
    }
  }

  function r(e, t, r) {
    var n = "+" + e;
    if ("$__" == e.substr(e.length - 3) && (e = e.substr(0, e.length - 1)), null != e && e.length > 0 && null != t && t.length > 0) {
      var a = !1;
      if (null != this[n] && (a = !0, r && !this.isAllPage$__(e))) return;
      if (this[n] = t, this.Keys$__.indexOf(e) == -1 && (this.Keys$__[this.Keys$__.length] = e), r ? this.AllPageKeys$__.indexOf(e) == -1 && (this.AllPageKeys$__[this.AllPageKeys$__.length] = e) : this.AllPageKeys$__.indexOf(e) > -1 && this.AllPageKeys$__.splice(this.AllPageKeys$__.indexOf(e), 1), !a && e.indexOf(" ") > -1) {
        var o = e.indexOf(" ")
          , i = e.substring(0, o);
        this.MultiwordStart$__.push(i)
      }
    }
  }

  function n(e) {
    return this.AllPageKeys$__.indexOf(e) > -1
  }
  this.add$__ = r, this.get$__ = e, this.remove$__ = t, this.isAllPage$__ = n, this.Keys$__ = new Array, this.AllPageKeys$__ = new Array, this.MultiwordStart$__ = new Array
}, SpeechStream.Dictionary.prototype.deleteAll = function () {
  if ("undefined" != typeof this.Keys$__) {
    var e, t;
    for (t = 0; t < this.Keys$__.length; t++) e = this.Keys$__[t], this["+" + e] = null, delete this["+" + e];
    this.Keys$__ = new Array, this.AllPageKeys$__ = new Array, this.MultiwordStart$__ = new Array
  }
}, THRange.prototype.equals = function (e) {
  return this.body == e.body && this.startRef.path == e.startRef.path && this.startRef.offset == e.startRef.offset && this.endRef.path == e.endRef.path && this.endRef.offset == e.endRef.offset
}, THRange.prototype.toString = function () {
  var e = this.getAsRange();
  return null != e ? g_bIEOld ? this.getAsRange()
    .text : this.getAsRange()
    .toString() : ""
}, THRange.prototype.getAsRange = function () {
  var e = null;
  if (g_bIEOld) e = rw_getAsTextRange(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset);
  else {
    e = SSDOM.getRangeObject(this.body);
    var t = SSDOM.getCaretPairFromDomPosition(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset)
      , r = t.leftCaret
      , n = t.rightCaret;
    null != r && null != n ? (e.setStart(r.node, r.offset), e.setEnd(n.node, n.offset)) : (e = null, thLog("Error in THRange:getAsRange: Failed to get the start or end caret."))
  }
  return e
}, THRange.prototype.clone = function () {
  return new THRange(this.body, this.startRef, this.endRef)
}, SpeechStream.SpeechRequestBookmarks = {
  NONE: 0
  , OUTER: 1
  , ALL: 2
}, SpeechStream.SpeechRequest = function () {
  this.m_strText = null, this.m_strFinalText = null, this.m_bChanged = !1, this.m_wordList = null
}, SpeechStream.SpeechRequest.prototype.setString = function (e, t) {
  var r, n = e.split(" ")
    , a = n.length - 1;
  for (r = 0; r < a; r++) n[r] = n[r] + " ";
  this.setWordList(n, t)
}, SpeechStream.SpeechRequest.prototype.setWordList = function (e, t) {
  var r = null;
  if ("boolean" == typeof eba_build_cache_for_external_use && eba_build_cache_for_external_use) {
    var n = ""
      , a = e.length;
    for (l = 0; l < a; l++) n += e[l];
    r = n
  }
  var o = !1;
  g_bMathsSymbols && rw_mathsSymbolReplacementWordList(e) && (o = !0), SpeechStream.dateFilter.getMode() != SpeechStream.DateFilterModes.NONE && SpeechStream.dateFilter.checkDatesFromList(e) && (o = !0), this.m_strText = this.buildString(e, t);
  var i, l, s, c, g, u, a = e.length;
  for (l = 0; l < a; l++) {
    var n = e[l];
    if (s = n.indexOf("-"), s > 0) {
      if (c = n.substr(0, s), g = n.substr(s + 1), 0 == g.length || g.indexOf("-") > -1) break;
      isNaN(c) || isNaN(g) || (i = [c, "to", g], SpeechStream.dateFilter.checkDatesFromList(i), e[l] = i.join(" "), o = !0, u = !0)
    }
  }
  u && (this.m_strFinalText = this.buildString(e, t)), SpeechStream.pronunciation.checkPronunciation() && rw_checkPronunciation(e) && (o = !0, this.m_strFinalText = this.buildString(e, t)), this.m_bChanged = o, null == this.m_strFinalText && (this.m_strFinalText = this.m_strText), null != r && (this.m_strText = r)
}, SpeechStream.SpeechRequest.prototype.buildString = function (e, t) {
  if (0 == e.length) return "";
  var r = t == SpeechStream.SpeechRequestBookmarks.ALL
    , n = t == SpeechStream.SpeechRequestBookmarks.OUTER
    , a = ""
    , o = e.length;
  for (n && (a += g_strBMStart + "0" + g_strBMEnd), i = 0; i < o; i++)
    if (r && (a += g_strBMStart + i + g_strBMEnd), SpeechStream.pauseHandler.hasPauseKey(e[i])) {
      var l = rw_filterWord(e[i])
        , s = SpeechStream.pauseHandler.decodedPause(l);
      a += s.join("")
    } else a += rw_filterWord(e[i]);
  return (n || r) && (a += g_strBMStart + o + g_strBMEnd), a
}, SpeechStream.SpeechRequest.prototype.isChanged = function () {
  return this.m_bChanged
}, SpeechStream.SpeechRequest.prototype.getFinalText = function () {
  return this.m_strFinalText
}, SpeechStream.SpeechRequest.prototype.getText = function () {
  return this.m_strText
};
var g_rangestore = null
  , g_targetFrame = null
  , g_tmpLastTargetForCache = null
  , g_nPauseEventTimeout = 0
  , warningMethodName = "setWarning"
  , g_nLastNodePosition = -1
  , g_nMaskSlideDistance = 60
  , g_maskSlideInterval, g_maskLastTap = null
  , g_lastTapTarget = null
  , g_interval, g_currentHeight = 0
  , g_currentWidth = 0;
SpeechStream.EnumIconParameter = {
  ICON_NAME: 0
  , ICON_ALT_TEXT: 1
  , ICON_OFFSET: 2
  , ICON_IS_TOGGLE: 3
  , ICON_TOGGLE_STATE: 4
  , ICON_TRANS_CODE: 5
}, SpeechStream.tinymceipadfix = "thtinymceipadbugworkaround", SpeechStream.tinymceipadfocusbugworkaround = function () {
  SpeechStream.ipadUtils.tinyMceBlurFix()
}, SpeechStream.calculatePaths = new CalculatePaths;
var g_nLoadCount = 0
  , g_nLoadRetries = 500
  , g_bWebToSpeechErrShown = !1
  , g_nFlashVersion = -1
  , REGEX_TAG_SENTENCE_BREAK = "[\\x21\\x2E\\x3F\\x3A]"
  , REGEX_WHITESPACE = /[\n\r\t ]{2,}/g
  , g_lastInputSelectSFF = null
  , g_bSpeakingFlag = !1
  , g_bSpeechModeFlag = !1
  , g_bSpeakerFlag = !1
  , ICONS_TO_DISABLE = "PredictionAll funplay play cyan magenta yellow green strike clear collect trans ffinder dictionary picturedictionary vocabulary"
  , ICONS_TO_DISABLE_LICENSE = ""
  , ICONS_TO_DISABLE_WITH_FLASH = "cyan magenta yellow green strike clear collect"
  , TOGGLE_ICONS_TO_ENABLE_WITH_FLASH = "spell homophone pred"
  , ICONS_TO_DISABLE_FOR_SPEECH_ONLY = "funplay play hover"
  , g_nTimeoutForSpeakingState = 0;
Number.prototype.NaN0 = function () {
  return isNaN(this) ? 0 : this
}, SpeechStream.Highlighter = function () {
  var e = this;
  this.dom = null, "undefined" != typeof SSDOM && (e.dom = SSDOM), this.setDom = function (t) {
    e.dom = t
  }, this.dat = null, "undefined" != typeof SSDAT && (e.dat = SSDAT), this.setData = function (t) {
    e.dat = t
  };
  var t = "span"
    , r = "thhom";
  this.getTagToUse = function () {
    return SSDAT.pageData.strHighlightTag
  }, this.setTagToUse = function (e) {
    SSDAT.pageData.strHighlightTag = e, t = e
  }, this.getHomClass = function () {
    return r
  }, this.setHomClass = function (e) {
    r = e
  }
}, SpeechStream.highlighter = new SpeechStream.Highlighter;
var SSHL = SpeechStream.highlighter
  , $rw_setSpeechRangeColours = $rw_setSpeechRangeStyle
  , $rw_setSpeechWordColours = $rw_setSpeechWordStyle
  , $rw_getSpeechRangeColours = $rw_getSpeechRangeStyle
  , $rw_getSpeechWordColours = $rw_getSpeechWordStyle
  , g_nSpellCount = 1
  , g_nHomCount = 1
  , g_nGramamrCount = 1
  , g_bMouseClickTime = 0
  , g_nCurMoveX = -1
  , g_nCurMoveY = -1
  , PLAY_MODE_COOKIE_NAME = "rw_speechenablingdata"
  , g_astrSpeechInstructionQueue = new Array
  , noObfs = "ReadHeader1 ReadSection";
SpeechStream.storedVoice = null, SpeechStream.storedSpeed = null, SpeechStream.storedCustId = null, SpeechStream.storedBookId = null, SpeechStream.storedPageId = null;
var g_bIpadBugWorkaroundNastyHack = !1
  , g_strBMStart = '<bookmark mark="'
  , g_strBMEnd = '"/>'
  , g_hoverTarget = null
  , g_lastTarget = null
  , g_hoverTimeoutId1 = 0
  , g_hoverTimeoutId2 = 0
  , g_bSafari1 = !1
  , g_bSafari2 = !1
  , g_bSafari3 = !1;
if (g_bSafari) {
  var tmpforhover = navigator.appVersion
    , ntmpforhover = tmpforhover.lastIndexOf("/");
  tmpforhover = tmpforhover.substring(ntmpforhover + 1);
  try {
    var ftmpforhover = parseFloat(tmpforhover);
    ftmpforhover < 300 || ftmpforhover > 400 && ftmpforhover < 416 ? g_bSafari1 = !0 : ftmpforhover > 500 ? g_bSafari3 = !0 : g_bSafari2 = !0
  } catch (err) {
    g_bSafari3 = !0
  }
}
var g_lLastClickTimeout = 0
  , g_lLastSpeechSentTime = 0
  , g_bHoverStep2Flag = !1
  , g_aTargetQueue = new Array
  , g_lTargetQueueTime = (new Date)
  .getTime()
  , g_nTargetQueueTimerId = 0
  , g_nTargetQueueDelay = 500
  , MAX_WORDCOUNT_TO_SPEAK = 500
  , hexcase = 0
  , b64pad = ""
  , chrsz = 8
  , g_strLastError = "";
SpeechStream.pauseHandler = function () {
  function e(e, n, a) {
    var o, i, l, c, g, u, _, d = " " + a + '="'
      , h = "</" + n + ">";
    for (o = e.indexOf("<" + n); o > -1;) {
      if (l = e.indexOf(">", o), c = e.indexOf("/>", o), l > o && (c < 0 || l < c)) i = l, _ = e.indexOf(h);
      else {
        if (!(c > o && (l < 0 || c < l))) {
          thLog("Error in pause handler, appears to be due to unclosed element in html.");
          break
        }
        i = l, _ = -1
      }
      var p;
      if ("" == a && n == s) p = r.getStrengthValue("medium");
      else {
        if (g = e.indexOf(d, o), u = e.indexOf('"', g + d.length), g == -1) break;
        if (g > i) p = -1;
        else {
          if (u > i || u == -1) {
            thLog("Error in pause handler, appears to be due to unclosed string in html attribute.");
            break
          }
          var S = e.substring(g + d.length, u);
          p = t(S, a)
        }
      }
      if (p > -1) {
        var f = e.substr(0, o);
        f += r.encodedPause(p), _ > -1 ? (f += e.substring(i + 1, _), f += e.substr(_ + h.length)) : f += e.substring(i + 2), e = f, o = e.indexOf("<" + n, o + 1)
      }
      o = e.indexOf("<" + n, o + 1)
    }
    return e
  }

  function t(e, t) {
    var n = 0;
    return "msec" == t ? (n = parseInt(e, 10), isNaN(n) && (n = 0)) : "time" == t ? "ms" == e.substr(e.length - 2) ? (n = parseInt(e.substr(0, e.length - 2), 10), isNaN(n) && (n = 0)) : (n = 1e3 * parseInt(e.substr(0, e.length - 1), 10), isNaN(n) && (n = 0)) : "strength" == t && (n = r.getStrengthValue(e)), n
  }
  var r = {}
    , n = {
      none: 0
      , "x-weak": 233
      , weak: 466
      , medium: 700
      , strong: 933
      , "x-string": 1166
    }
    , a = "~!pause:"
    , o = "!~"
    , i = a.length + 4
    , l = "silence"
    , s = "break";
  return r.getStrengthValue = function (e) {
    return "undefined" != typeof n[e] ? n[e] : 0
  }, r.getPauseTimeFromNode = function (e) {
    var t = 0
      , n = e.tagName.toLowerCase();
    if (n == l) {
      var a = e.getAttribute("msec");
      null != a && (t = parseInt(a, 10), isNaN(t) && (t = 0))
    } else if (n == s) {
      var a = e.getAttribute("time");
      null != a && a.length >= 2 ? ("ms" == a.substr(a.length - 2) ? t = parseInt(a, 10) : "s" == a.substr(a.length - 1) && (t = 1e3 * parseInt(a, 10)), isNaN(t) && (t = 0)) : (a = e.getAttribute("strength"), t = null != a ? r.getStrengthValue(a.toLowerCase()) : r.getStrengthValue("medium"))
    }
    return t
  }, r.encodedPause = function (e) {
    return !isNaN(e) && e >= 0 && e < 1e4 ? a + e + o : ""
  }, r.encodePauseFromNode = function (e) {
    return r.encodedPause(r.getPauseTimeFromNode(e))
  }, r.encodePauseFromString = function (t) {
    return (t.indexOf(s) > -1 || t.indexOf(l) > -1) && (t = e(t, l, "msec"), t = e(t, s, "time"), t = e(t, s, "strength"), t = e(t, s, "")), t
  }, r.isPauseElement = function (e) {
    if (1 == e.nodeType) {
      var t = e.tagName.toLowerCase();
      return t == l || t == s
    }
    return !1
  }, r.hasPauseKey = function (e) {
    if ("string" != typeof e) return !1;
    var t = e.indexOf(a);
    if (t > -1) {
      var r = e.indexOf(o, t);
      if (r > -1 && r - t <= i) return !0
    }
  }, r.decodedPause = function (e) {
    var t = [];
    if ("string" == typeof e) {
      for (var r = e.indexOf(a); r > -1;) {
        var n = e.indexOf(o, r);
        if (n > -1 && n - r <= i) {
          r > 0 && t.push(e.substr(0, r));
          var l = e.substring(r + a.length, n)
            , s = parseInt(l, 10);
          isNaN(s) || t.push('<silence msec="' + l + '"/>'), e = e.substr(n + o.length), r = e.indexOf(a)
        }
      }
      t.push(e)
    }
    return t
  }, r
}(), document.getElementById("testbuildspan") && (document.getElementById("testbuildspan")
  .innerHTML = "test build 4"), SpeechStream.stringAssist = new function () {
  function e() {
    var e, t = ""
      , n = '\\s !"%&()*+,-./:;<=>?[]^_{|}����������������”“';
    for (e = 0; e < n.length; e++) t += "\\" + n.charAt(e);
    r.REGEX_WORD_SPLIT = new RegExp("([" + t + "])", "g"), r.REGEX_NON_WORD = new RegExp("(\\S*[0-9|�$@#]\\S*)", "g")
  }
  var t = String.fromCharCode(160);
  this.SOFT_HYPHEN = String.fromCharCode(173);
  var r = this
    , n = /[\s\xA0]+/g;
  this.REGEX_WORD_SPLIT = null, this.REGEX_NON_WORD = null, e(), this.trimWordsFromStart = function (e, t) {
    if (null == e) return "";
    var n = e;
    if (n = r.reduceWhiteSpace(n), 0 == n.length) return "";
    for (var a = 0, o = n.indexOf(" "); o > -1;) {
      if (a == t) {
        n = n.substr(0, o);
        break
      }++a, o = n.indexOf(" ", o + 1)
    }
    return n
  }, this.trimWordsFromEnd = function (e, t) {
    if (null == e) return "";
    var n = e;
    if (n = r.reduceWhiteSpace(n), 0 == n.length) return "";
    for (var a = 0, o = n.lastIndexOf(" "); o > -1;) {
      if (a == t) {
        n = n.substr(o + 1);
        break
      }++a, o = n.lastIndexOf(" ", o - 1)
    }
    return n
  }, this.trimWordsFromStartAsArray = function (e, t) {
    var n = r.convertTextToArray(e);
    return n.length <= t ? n : n.slice(0, t)
  }, this.trimWordsFromEndAsArray = function (e, t) {
    var n = r.convertTextToArray(e);
    return n.length <= t ? n : n.slice(n.length - t, n.length)
  }, this.getWordListToBreak = function (e, t, r) {
    var n;
    n = t > -1 ? r ? SpeechStream.stringAssist.trimWordsFromStartAsArray(e, t) : SpeechStream.stringAssist.trimWordsFromEndAsArray(e, t) : SpeechStream.stringAssist.convertTextToArray(e), r || n.reverse();
    var a, o, i, l, s = !1
      , c = n.length;
    for (a = 0; a < c; a++) {
      if (a == t && (s = !0), !s) {
        var g = a;
        l = n[a], o = !rw_isLetterExt(l.charCodeAt(0)), i = !rw_isLetterExt(l.charCodeAt(l.length - 1)), (o || i) && (s = !0, !o && i && r ? a++ : !o || i || r || a++), l = SpeechStream.stringAssist.filterWord(l), n[g] = l
      }
      if (s) {
        n = n.slice(0, a);
        break
      }
    }
    return r || n.reverse(), n
  }, this.convertTextToArray = function (e) {
    if (null == e || 0 == e.length) return [];
    var t = r.reduceWhiteSpace(e)
      .trimTH();
    return t.split(" ")
  }, this.reduceWhiteSpace = function (e) {
    return e.replace(n, " ")
  }, this.filterWordForPronunciation = function (e) {
    if (null == e || 0 == e.length) return e;
    for (var t = e.length, r = 0; r < t; r++) {
      var n = e.charCodeAt(r);
      39 == n || 45 == n || n > 47 && n < 58 || n > 64 && n < 91 || n > 94 && n < 123 || n > 127 && 160 != n || (e = e.replace(e.charAt(r), " "))
    }
    return e.trimTH()
  }, this.filterToListOfWords = function (e, t, n) {
    var a, o, i = [];
    return "undefined" != typeof n && null != n || (n = r.REGEX_WORD_SPLIT), a = e.replace(r.REGEX_NON_WORD, " "), a = a.replace(n, " "), a = tinymce.trim(a.replace(/(\s+)/g, " ")), o = a.split(" "), tinymce.each(o, function (e) {
      i.indexOf(e) == -1 && t.indexOf(e) == -1 && i.push(e)
    }), i
  }, this.filterWord = function (e) {
    for (var t = e.length, n = 0; n < t; n++) {
      var a = e.charCodeAt(n);
      39 == a || 45 == a || a > 47 && a < 58 || a > 64 && a < 91 || a > 94 && a < 123 || a > 127 && 160 != a && 163 != a && 8364 != a || (e = e.replace(e.charAt(n), " "))
    }
    return e.replace(r.REGEX_WORD_SPLIT, " ")
      .trimTH()
  }, this.checkIfIncludesBreak = function (e) {
    return !(rw_isLetterExt(e.charCodeAt(0)) && rw_isLetterExt(e.charCodeAt(e.length - 1)))
  }, this.filterNbsp = function (e) {
    if ("string" == typeof e && e.indexOf(t) > -1)
      for (var r = e.indexOf(t); r > -1;) e = e.replace(t, " "), r = e.indexOf(t, r + 1);
    return e
  }, this.filter = function (e, t, r) {
    if ("string" == typeof e && "string" == typeof t && "string" == typeof r && e.indexOf(t) > -1)
      for (var n = e.indexOf(t) > -1; n > -1;) e = e.replace(t, r), n = e.indexOf(t, n + 1);
    return e
  }, this.compareStrings = function (e, t) {
    var n = r.reduceWhiteSpace(e)
      , a = r.reduceWhiteSpace(t);
    return n == a
  }
}, rw_mathsMappingSetup(g_strMathsData);
var g_strRndId = null;
SpeechStream.ipadUtils = new function () {
  this.tinyMceBlurFix = function () {
    if (g_bTinyMce && g_bIpad) try {
      var e = rw_setUpIframeForTinyMceOnIpadAndGetRef(!0);
      if (e && e.ipadTinyMceFocus) {
        e.ipadTinyMceFocus = !1;
        var t = window.pageXOffset
          , r = window.pageYOffset
          , n = document.getElementById(SpeechStream.tinymceipadfix);
        n.focus(), window.scrollTo(t, r), n.blur()
      }
    } catch (a) {}
  }
};
var m_pronDictionary = new SpeechStream.Dictionary
  , rw_qouteRegex = "\\x82\\x91\\x92"
  , rw_dqouteRegex = "\\x93\\x94"
  , rw_trimRegex = /^[,.?!;:\x27\x22�$�]+|[,.?!;:\x27\x22�$�]+$/g
  , g_nTries = 2
  , g_cachedWebToSpeech = null
  , g_nGlobalCount = 0;
SpeechStream.AjaxRequest = function () {
  var m_nCount = ++g_nGlobalCount
    , m_request = null
    , m_callBackObject = null
    , m_strCallBackFunctionName = null
    , m_bXml = !1
    , m_errorCallBack = null
    , m_timeoutCallBack = null
    , m_nTimeoutMs = 0
    , m_bCancel = !1;
  this.cancel = function () {
    thLog("Cancelling request " + m_nCount), m_bCancel = !0
  }, this.getCount = function () {
    return m_nCount
  }, this.setTimeoutCallBack = function (e) {
    m_timeoutCallBack = e
  }, this.setErrorCallBack = function (e) {
    m_errorCallBack = e
  }, this.setTimeout = function (e) {
    m_nTimeoutMs = e
  }, this.callBack = function () {
    if (!m_bCancel) with(this) {
      if (readyState < 4) return;
      if (200 != status) {
        if (m_timeoutCallBack) return void m_timeoutCallBack(m_nCount);
        if (m_errorCallBack) return void m_errorCallBack(status)
      }
      m_bXml ? null == m_strCallBackFunctionName ? m_callBackObject(responseXML) : m_callBackObject[m_strCallBackFunctionName](responseXML) : null == m_strCallBackFunctionName ? m_callBackObject(responseText) : m_callBackObject[m_strCallBackFunctionName](responseText)
    }
  }, this.doPost = function (p_strURL, p_parameters, p_responseObject, p_responseCallback, p_bXml) {
    with(this) m_callBackObject = p_responseObject, m_strCallBackFunctionName = p_responseCallback, m_bXml = p_bXml, g_bChromeExtension ? g_ExtBackgroundScriptCommObj.extBGAjaxRequest(p_parameters, p_strURL, p_responseObject, p_responseCallback, p_bXml) : (m_request = new XMLHttpRequest, g_bFireFox && (m_request.timeout = m_nTimeoutMs), m_request.open("POST", p_strURL, !0), m_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), m_request.onreadystatechange = callBack, m_request.send(p_parameters))
  }, this.doGet = function (p_strURL, p_parameters, p_responseObject, p_responseCallback, p_bXml) {
    with(this) m_callBackObject = p_responseObject, m_strCallBackFunctionName = p_responseCallback, m_bXml = p_bXml, g_bChromeExtension ? g_ExtBackgroundScriptCommObj.extBGAjaxRequest(p_parameters, p_strURL, p_responseObject, p_responseCallback, p_bXml) : (m_request = new XMLHttpRequest, g_bFireFox && (m_request.timeout = m_nTimeoutMs), m_request.open("GET", p_strURL, !0), m_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), m_request.onreadystatechange = callBack, m_request.send(p_parameters))
  }
}, SpeechStream.HTML5Controller = function () {
  function e() {
    var e = ++p;
    return null != S && (t(0), delete S, S = null), h = !1, v && (m.pause(), m.autoplay = !0, m.play(), v = !1), e
  }

  function t(e) {
    e < 0 && $rw_doSelection(e), b = null, T = 0, w = null
  }

  function r(e) {
    return "en_US" == e || "en-US" == e || "ENGLISH_US" == e ? "en-US" : "en-GB" == e || "en_GB" == e || "ENGLISH_GB" == e ? "en-GB" : "FRENCH" == e || "fr" == e || "FRAN" == e.substr(0, 4) ? "fr" : "PORTUGUESE" == e || "pt" == e ? "pt" : "PORT" == e.substr(0, 4) || "pt-BR" == e || "pt_BR" == e ? "pt-BR" : "MALAYSIAN" == e || "ms" == e ? "ms" : "SPANISH" == e || "es" == e || "ESPA" == e.substr(0, 4) ? "es" : "en"
  }

  function n(e, t, n, a, o) {
    var i = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      , l = i.translator.translang
      , s = i.language.services;
    fromLang = r(s), toLang = r(l), toLang.length > 2 && (toLang = toLang.substr(0, 2)), g_thToLang = toLang;
    var c = "1";
    "ms" == toLang && (c = "2");
    var u = "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/translation?"
      , _ = "json={";
    _ += '"u":"rwforgdocs",', _ += '"e":"WYn4Wx7Vf2",', _ += '"l":"' + fromLang.substring(0, 2) + '",', _ += '"d":"' + toLang.substring(0, 2) + '",', _ += '"r":"' + c + '",', _ += '"t":"' + encodeURIComponent(e) + '"', _ += "}";
    var d = new SpeechStream.AjaxRequest;
    d.doPost(u += _, "", o, "translationLoad", !1), g.paratranCaller = d
  }
  var a, o, i, l, s, c, g = this
    , u = g_strClientVersion
    , _ = !1
    , d = 0
    , h = !1
    , p = 0
    , S = null
    , f = g_strVoice
    , m = new Audio;
  m.type = "audio/mpeg", "number" == typeof g_nVolumeValue && g_nVolumeValue > -1 && (m.volume = parseInt(g_nVolumeValue, 10) / 100);
  var b = null
    , T = 0
    , w = null
    , v = !0
    , C = !1
    , y = !1;
  this.initialise = function (e, t, r, n) {
    a = t, o = r, i = n, l = null != g_strDictionaryServer ? g_strDictionaryServer : rw_serverUrlToIncludeHttp(g_strDefaultServer, !1), s = null != g_strTranslateServer ? g_strTranslateServer : rw_serverUrlToIncludeHttp(g_strDefaultServer, !1), c = null != g_strPictureDictionaryServer ? g_strPictureDictionaryServer : rw_serverUrlToIncludeHttp(g_strDefaultServer, !1), "true" == e.cacheMode && (C = !0), "true" == e.cacheLiveFallover && (y = !0), e.volumeValue > -1 && (m.volume = e.volumeValue / 100)
  }, this.setToClipboard = function (e) {}, this.setCacheBuster = function (e) {
    _ = e
  }, this.setCacheMode = function () {}, this.resetCacheTimer = function () {
    d = 0, setTimeout(g.resetCacheTimer, 1e3 * g_nCacheRetryTimeout * 60)
  }, setTimeout(this.resetCacheTimer, 1e3 * g_nCacheRetryTimeout * 60), this.canPause = function () {
    return m && !m.ended && !isNaN(m.duration) && m.duration > 0
  }, this.isPaused = function () {
    return h
  }, this.pause = function () {
    return null != m && (m.pause(), h = !0, !0)
  }, this.resume = function () {
    return !(null == m || !h) && (g_bChrome && m.currentTime > .05 && !m.ended && (m.currentTime -= .05), m.play(), h = !1, !0)
  }, this.setCustomerId = function () {}, this.setBookId = function () {}, this.setPageId = function () {}, this.setSpeedValue = function () {}, this.setVoiceName = function (e) {
    f = e
  }, this.getVoiceName = function () {
    return f
  }, this.setVolumeValue = function (e) {
    if (null != m) try {
      m.volume = parseInt(e, 10) / 100
    } catch (t) {}
  }, this.checkPath = function (e) {
    if (null != g_strSearchSpeechServer && null != g_strReplaceSpeechServer) {
      var t;
      return t = e, t.indexOf(g_strSearchSpeechServer) > -1 && (t = t.substr(0, t.indexOf(g_strSearchSpeechServer)) + g_strReplaceSpeechServer + t.substr(t.indexOf(g_strSearchSpeechServer) + g_strSearchSpeechServer.length)), t
    }
    return e
  }, this.getPronunciationDataAll = function (e, t) {
    var r = e + "/SpeechNAServer/pronounce.html?type=get&pronounceClient=" + g_strLoginName + t
      , n = new SpeechStream.AjaxRequest;
    n.doGet(r, null, this, "requestPGetAllLoad", !1)
  }, this.requestPGetAllLoad = function (e) {
    $rw_loadPronCallback(null == e || 0 == e.length ? "-1" : "get=false" == e || "" == e ? "-1" : "empty" == e ? "" : e)
  }, this.addPronunciationData = function (e, t) {
    var r = e + "/SpeechNAServer/pronounce.html?type=add&pronounceClient=" + g_strLoginName + t
      , n = new SpeechStream.AjaxRequest;
    n.doGet(r, null, this, "requestPAddLoad", !1)
  }, this.requestPAddLoad = function (e) {
    $rw_addPronCallback(null == e || 0 == e.length ? "-1" : "add=false" == e ? "-1" : "add=true" == e ? "1" : "-1")
  }, this.updatePronunciationData = function (e, t) {
    var r = e + "/SpeechNAServer/pronounce.html?type=update&pronounceClient=" + g_strLoginName + t
      , n = new SpeechStream.AjaxRequest;
    n.doGet(r, null, this, "requestPUpdateLoad", !1)
  }, this.requestPUpdateLoad = function (e) {
    $rw_updatePronCallback(null == e || 0 == e.length ? "-1" : "update=false" == e ? "-1" : "update=true" == e ? "1" : "-1")
  }, this.removePronunciationData = function (e, t, r) {
    var n = e + "/SpeechNAServer/pronounce.html?type=delete&pronounceClient=" + g_strLoginName + t
      , a = new SpeechStream.AjaxRequest
      , o = function (e) {
        null == e || 0 == e.length ? $rw_removePronCallback("-1") : "delete=false" == e ? $rw_removePronCallback("-1") : "delete=true" == e ? $rw_removePronCallback("1", r) : $rw_removePronCallback("-1")
      };
    a.doGet(n, null, o, null, !1)
  };
  var I = "";
  this.getLastError = function () {
    return I
  }, this.getVersion = function () {
    return u
  }, this.getRevisionNumber = function () {
    return "0"
  }, this.checkRequestStillValid = function (e) {
    return e == p
  }, this.setAudio = function (e) {
    m.src = e
  }, this.setTimer = function (e) {
    b = e
  }, this.requestCompleteStartPlayback = function () {
    $rw_renderingSpeechCallback(), audioPlaybackTimer(), m.autoplay = !0, m.play()
  }, this.stopSpeech = function () {
    null != m && (m.pause(), m.currentTime = 0, this.onSpeechStop(-1)), S = null, ++p
  }, this.stopSpeechAlt = function () {
    if (null != m) {
      m.pause();
      try {
        m.currentTime = 0
      } catch (e) {}
      this.onSpeechStop(-2)
    }
    S = null, ++p
  }, this.onSpeechStop = function (e) {
    t(e)
  }, this.startSpeech = function (t, r) {
    var n = e();
    S = new SpeechStream.Html5Speech, S.setParameters(this, n, t, r), d <= g_nCacheRetry || null == i ? S.makeSpeechRequest(o, !1) : S.makeSpeechRequest(i, !0)
  }, this.startSpeechFromBackup = function (t, r) {
    var n = e();
    S = new SpeechStream.Html5Speech, S.setParameters(this, n, t, r), S.makeSpeechRequest(i, !0)
  }, this.startSpeechBackup = function (t) {
    if (null == i) return this.onSpeechStop(-3), !1;
    var r = e();
    return S = new SpeechStream.Html5Speech, S.copyParameters(this, r, t), S.makeSpeechRequest(i, !0), !0
  }, this.startSpeechFromCacheWithGen = function (t, r, n, a, l) {
    var s = e();
    if (d <= g_nCacheRetry || !y || null == i) {
      var c, g;
      _ ? (c = o + "SpeechCache/" + t + ".xml?cachebuster=" + (new Date)
        .getTime() + Math.random(), g = o + "SpeechCache/" + t + ".mp3?cachebuster=" + (new Date)
        .getTime() + Math.random()) : (c = o + "SpeechCache/" + t + ".xml", g = o + "SpeechCache/" + t + ".mp3"), S = new SpeechStream.Html5Speech, S.setParameters(this, s, r, l), S.setStaticParameters(n, a), S.loadFiles(c, g)
    } else S = new SpeechStream.Html5Speech, S.setParameters(this, s, r, l), S.setStaticParameters(n, a), S.makeSpeechRequest(i, !0)
  }, this.startSpeechGenerateCache = function (t, r, n, a, o, i) {
    var l = e();
    S = new SpeechStream.Html5Speech, S.setParameters(this, l, r, o), S.setStaticParameters(n, a), S.makeSpeechRequest(i, !0)
  }, this.startSpeechFromCache = function (t, r, n) {
    var a = e();
    if (d <= g_nCacheRetry || !y || null == i) {
      var l, s;
      _ ? (l = o + "SpeechCache/" + t + ".xml?cachebuster=" + (new Date)
        .getTime() + Math.random(), s = o + "SpeechCache/" + t + ".mp3?cachebuster=" + (new Date)
        .getTime() + Math.random()) : (l = o + "SpeechCache/" + t + ".xml", s = o + "SpeechCache/" + t + ".mp3"), S = new SpeechStream.Html5Speech, S.setParameters(this, a, r, n), S.loadFiles(l, s)
    } else S = new SpeechStream.Html5Speech, S.setParameters(this, a, r, n), S.makeSpeechRequest(i, !0)
  }, this.speakFromFile = function (t) {
    var r = e()
      , n = t + ".xml"
      , a = t + ".mp3";
    S = new SpeechStream.Html5Speech, S.setParameters(this, r, "n/a", !1), S.loadFiles(n, a)
  }, this.startSpeechFromFile = function (e, t, r) {}, this.startHighlighting = function (e) {}, this.simpleSpeech = function (t, r) {
    var n = e();
    S = new SpeechStream.Html5Speech, S.setParameters(this, n, t, r), S.setHighlightable(!1), d <= g_nCacheRetry || null == i ? S.makeSpeechRequest(o, !1) : S.makeSpeechRequest(i, !0)
  }, this.simpleSpeechFromBackup = function (t, r) {
    var n = e();
    S = new SpeechStream.Html5Speech, S.setParameters(this, n, t, r), S.setHighlightable(!1), S.makeSpeechRequest(i, !0)
  }, this.autogenSpeechFiles = function (t, r, n, a, o) {
    var i = e();
    this.onSpeechStop(-2), S = new SpeechStream.Html5Speech, S.setParameters(this, i, t, a), S.setStaticParameters(r, n), S.makeSpeechRequest(o, !0)
  }, this.checkAutogenCachedFiles = function (e) {}, this.autoGenComplete = function (e) {}, this.getMP3File = function (e, t) {}, this.getPictureDictionaryPage = function (e, t) {
    var r = textHelp.webreader.ConfigurationSingleton.getInst()
      .getConfiguration()
      , n = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      , a = n.language.services
      , o = r.serversettings.user
      , i = r.serversettings.picturedictionaryserver;
    i += "?json=";
    var l = '{"u":"' + o + '", "e":"WYn4Wx7Vf2", "l":"' + a.replace("-", "_") + '", "w":"' + encodeURIComponent(e) + '"}'
      , s = new SpeechStream.AjaxRequest;
    s.doPost(i + l, "", this, "imagedictionaryLoad", !1)
  }, this.imagedictionaryLoad = function (e) {
    var t = JSON.parse(e);
    if ("0" !== t.status || 0 == t.symbols.length) {
      var r = '<div class="rwPicDictPanel">';
      r += '<div class="rwDictWordHeader">' + t.word + "</div>", r += '<div class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("dialog_definition_notfound"), $rw_picturedictionaryReply(r)
    } else {
      var r = '<div class="rwPicDictPanel">';
      r += '<div class="rwDictWordHeader">' + t.word + "</div>", responseHTM = '<p class="point_cmap">';
      for (var n = t.symbols, a = 0; a < n.length; a++) r += '<img class="point_symbol" src="' + n[a] + '" alt="">';
      r += "</p></div></div>", $rw_picturedictionaryReply(r)
    }
  }, this.getCustomDictionaryPage = function (e, t) {
    var r = new SpeechStream.AjaxRequest;
    r.doPost(t, e, this, "dictionaryLoad", !1)
  }, this.getDictionaryPage = function (e) {
    var t = textHelp.webreader.ConfigurationSingleton.getInst()
      .getConfiguration()
      , r = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      , n = t.serversettings.dictionaryserver
      , a = t.serversettings.user
      , o = r.language.services;
    "fr" != o && "pt" != o && "es" != o || (n += "HTML"), n += "?json=";
    var i = '{"u":"' + a + '", "e":"WYn4Wx7Vf2", "l":"' + o.replace("-", "_") + '", "w":"' + encodeURIComponent(e) + '"}'
      , l = new SpeechStream.AjaxRequest;
    l.doPost(n += i, "", this, "dictionaryLoad", !1)
  }, this.dictionaryLoad = function (e) {
    null == e || 0 == e.length ? $rw_dictionaryReply("Error loading content.") : $rw_dictionaryReply(e)
  }, this.getPopupDictionaryPage = function (e) {
    var t = "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/dictionary?"
      , r = "json={";
    r += '"u":"rwforgdocs",', r += '"e":"WYn4Wx7Vf2",', r += '"l":"en_US",', r += '"w":"' + encodeURIComponent(e) + '"', r += "}";
    var n = new SpeechStream.AjaxRequest;
    n.doPost(t, r, this, "dictionaryPopupLoad", !1)
  }, this.dictionaryPopupLoad = function (e) {
    "function" == typeof $rw_popupDictionaryReply && (null == e || 0 == e.length ? $rw_popupDictionaryReply("Error loading content.") : $rw_popupDictionaryReply(e))
  }, this.getDictionaryPageFl = function (e) {
    var t = l + "rwserver/?query=dictionary&type=result&wordType=15&&text=" + e + "&locale=" + g_strLocale + "&userName=" + g_strLoginName + "&swf=" + u + "&dictionaryType=SIMPLE";
    null != g_strCustId && (t += "&custID=" + g_strCustId);
    var r = new SpeechStream.AjaxRequest;
    r.doPost(t, null, this, "dictionaryFlLoad", !1)
  }, this.getDictionaryPageFlHTML = function (e) {
    var t = l + "rwserver/?query=dictionaryHtml&text=" + e + "&locale=" + g_strLocale + "&userName=" + g_strLoginName + "&swf=" + u + "&dictionaryType=SIMPLE";
    null != g_strCustId && (t += "&custID=" + g_strCustId);
    var r = new SpeechStream.AjaxRequest;
    r.doPost(t, null, this, "dictionaryFlLoad", !1)
  }, this.dictionaryFlLoad = function (e) {
    null == e || 0 == e.length ? $rw_dictionaryFlReply("Error loading content.") : $rw_dictionaryFlReply(e)
  }, this.getTranslationPage = function (e) {
    this.getTranslationGenericPage(e, "English", "Spanish")
  }, this.getTranslationGenericPage = function (e, t, r) {
    n(e, t, r, !1, this)
  }, this.getTranslationFlGenericPage = function (e, t, r) {
    n(e, t, r, !0, this)
  }, this.getTranslationParagraph = function (e, t, r) {
    rw_translateParagraphImpl(e, t, r, this)
  }, this.translationLoad = function (e) {
    if (g.paratranCaller = null, null == e || 0 == e.length) $rw_transReply("Error loading content.");
    else {
      var t = "<b>No match was found for this word.</b>";
      e.indexOf(t) > -1 && (e = e.replace(t, '<div class="th-nomatch">No match was found for this word</div>')), $rw_transReply(e)
    }
  }, this.translationFlLoad = function (e) {
    null == e || 0 == e.length ? $rw_transFlReply("Error loading content.") : (e = '<style type="text/css">div.rwTranWordHeader{font-weight: bold;padding: 5px;border-bottom:1px solid #666666;margin-bottom: 10px;}th-span.rwMeaningNum{pading-left: 10px;padding-right: 10px;font-weight:bold;}th-span.rwMeaning{padding-right:1-px;}</style>' + e, $rw_transFlReply(e))
  }, this.getSoundFileLength = function (e) {}, audioPlaybackTimer = function () {
    if (null != b)
      if (m.ended) {
        $rw_speechCompleteCallback("Complete"), t(-1);
        try {
          m.pause(), m.currentTime = 0
        } catch (e) {}
      } else if (b.length > 0 && (b[T] < m.currentTime && ($rw_doSelection(T), T++), m.currentTime > b[b.length - 1])) {
      $rw_speechCompleteCallback("Complete"), t(-1);
      try {
        m.pause(), m.currentTime = 0
      } catch (e) {}
    } else w = setTimeout(audioPlaybackTimer, 10)
  }, this.strStoredVoice = null, this.setAltSettings = function (e, t, r, n, a) {
    null == this.strStoredVoice && (this.strStoredVoice = f), "string" == typeof e && (f = e)
  }, this.restoreSettings = function () {
    null != this.strStoredVoice && (f = this.strStoredVoice, this.strStoredVoice = null)
  }
}, SpeechStream.Html5Speech = function () {
  this.m_nRequestNumber = -1, this.m_params = null, this.m_bBackup = !1, this.m_bHighlightable = !0, this.m_controller = null, this.makeSpeechRequest = function (e, t) {
    var r = e + "SpeechServices/index.html";
    this.m_bBackup = t;
    var n = new SpeechStream.AjaxRequest;
    n.doPost(r, this.m_params, this, "onSpeechRequestResponse", !1)
  }, this.onSpeechRequestResponse = function (e) {
    if (this.m_controller.checkRequestStillValid(this.m_nRequestNumber)) {
      var t = e.indexOf("xml=")
        , r = e.indexOf("&mp3")
        , n = e.substring(t + 4, r)
        , a = e.substring(r + 5, e.length);
      if ("error" == n || "error" == a || "" == n || "" == a) return this.m_bBackup ? (g_strLastError = "Error response from server", void this.m_controller.onSpeechStop(-3)) : void(this.m_controller.startSpeechBackup(this.m_params) || (g_strLastError = "Error response from server"));
      if ("busy" == n || "busy" == a) return this.m_bBackup ? (g_strLastError = "Busy response from server", void this.m_controller.onSpeechStop(-3)) : void(this.m_controller.startSpeechBackup(this.m_params) || (g_strLastError = "Busy response from server"));
      g_bSSLSpeech && ("http:" == n.substring(0, 5) && (n = "https:" + n.substr(5)), "http:" == a.substring(0, 5) && (a = "https:" + a.substr(5))), this.loadFiles(n, a)
    }
  }, this.loadFiles = function (e, t) {
    if (e = this.m_controller.checkPath(e), t = this.m_controller.checkPath(t), this.m_controller.setAudio(t), this.m_bHighlightable) {
      var r = new SpeechStream.AjaxRequest;
      r.doGet(e, null, this, "onTimingFileResponse", !0)
    } else {
      var n = new Array;
      this.m_controller.setTimer(n), this.m_controller.requestCompleteStartPlayback()
    }
  }, this.onTimingFileResponse = function (e) {
    if (this.m_controller.checkRequestStillValid(this.m_nRequestNumber)) {
      var t = new Array;
      if (e && e.documentElement && e.documentElement.childNodes) {
        var r = e.documentElement.childNodes
          , n = 0;
        for (i = 0; i < r.length; i++) 1 == r[i].nodeType && (t[n] = parseFloat(r[i].getAttribute("time") / 1e3), n > 0 && t[n] <= t[n - 1] && (t[n] = t[n - 1] + .01), n += 1);
        this.m_controller.setTimer(t), this.m_controller.requestCompleteStartPlayback()
      } else this.m_bBackup ? (g_strLastError = "Failed to get timing response from server", this.m_controller.onSpeechStop(-3)) : this.m_controller.startSpeechBackup(this.m_params) || (g_strLastError = "Failed to get timing response from server")
    }
  }
}, SpeechStream.Html5Speech.prototype.setParameters = function (e, t, r, n) {
  null == r && (r = ""), this.m_controller = e, this.m_nRequestNumber = t;
  var a = "text=" + encodeURIComponent(r) + "&userName=" + encodeURIComponent(g_strLoginName) + "&voiceName=" + encodeURIComponent(e.getVoiceName()) + "&speedValue=" + encodeURIComponent(g_nSpeedValue);
  null != g_strCustId && (a += "&custID=" + encodeURIComponent(g_strCustId)), null != g_strBookId && (a += "&bookID=" + encodeURIComponent(g_strBookId)), null != g_strPageId && (a += "&pageID=" + encodeURIComponent(g_strPageId)), n && (a += "&usePron=Y"), this.m_params = a
}, SpeechStream.Html5Speech.prototype.copyParameters = function (e, t, r) {
  this.m_controller = e, this.m_nRequestNumber = t, this.m_params = r
}, SpeechStream.Html5Speech.prototype.setStaticParameters = function (e, t) {
  var r = "&destFolder=" + e + "&destFilename=" + t;
  this.m_params = this.m_params + r
}, SpeechStream.Html5Speech.prototype.setHighlightable = function (e) {
  this.m_bHighlightable = e
}, SpeechStream.Html5Speech.prototype.getHighlightable = function () {
  return this.m_bHighlightable
}, SpeechStream.TouchScreenManager = function () {
  var e = !1
    , t = !1
    , r = !0
    , n = null;
  this.initialise = function () {
    if (g_nIOS >= 6 && g_bTinyMce);
    else if (addEventChecked(document, "touchstart", onTouchStart), addEventChecked(document, "touchmove", onTouchMove), addEventChecked(document, "touchend", onTouchEnd), !g_bIgnoreFrames && window.frames.length > 0) {
      var e;
      for (e = 0; e < window.frames.length; e++) this.initialiseToFrame(window.frames[e])
    }
  }, this.initialiseToFrame = function (e) {
    if (g_nIOS >= 6 && g_bTinyMce);
    else if (g_bChromeExtension);
    else try {
      e.document && (addEventChecked(e.document, "touchstart", onTouchStart), addEventChecked(e.document, "touchmove", onTouchMove), addEventChecked(e.document, "touchend", onTouchEnd))
    } catch (t) {}
  }, this.clickAndSpeak = function (t) {
    e = t
  };
  onTouchStart = function (a) {
    if (g_bTouchScreen || (g_bTouchScreen = !0), t = !1, (e || g_bSticky) && r) {
      var o = a.changedTouches;
      if (null != o && o.length > 0) {
        var i = rw_getTHCaretFromMouseEvent(o[0], !0);
        n = rw_getHoverTargetFromCaret(i)
      }
    }
  }, onTouchMove = function () {
    g_bTouchScreen || (g_bTouchScreen = !0), t = !0
  }, onTouchEnd = function (a) {
    if (e || g_bSticky) {
      if (t) return void(n = null);
      if (r && !g_bSticky) {
        if (null == n) return;
        var o = new THHoverTarget(null, null, n.range);
        if (null == o) return;
        r = !1, rw_speakHoverTarget(o)
      } else rw_mouseclickEvent(a)
    }
  }
};
var g_thSimplifyState = !0;
SpeechStream.ExtBackgroundScriptComm = function () {
  this.callBackObject = null, this.strCallBackFunctionName = null, this.bXml = !1, this.thAjaxResponse = null, this.thInitialised = !1, this.onMessageFromBG = function () {
    if (this.findToolbarButtonObject = function (e, t) {
        for (var r = 0; r < t.left.buttons.length; r++)
          if (t.left.buttons[r].command == e) return t.left.buttons[r];
        for (r = 0; r < t.right.buttons.length; r++)
          if (t.right.buttons[r].command == e) return t.right.buttons[r]
      }, void 0 != event.data && void 0 != event.data.type && "1757FROM_BGRW4G" == event.data.type) {
      if ("onGetthRWFGSettings" == event.data.method) {
        var e = textHelp.webreader.UserSettingsSingleton.getInst()
          .getUserSettings();
        if (void 0 !== event.data.payload.thRWFGSettings) {
          var t = JSON.parse(event.data.payload.thRWFGSettings);
          if ("string" == typeof t) t = JSON.parse(t), $rw_setVoice(t.speechoptions.voice), $rw_setSpeedValue(t.speechoptions.speed), $rw_enableContinuousReading(t.speechoptions.continousreading), $rw_setVoiceForLanguage(t.speechoptions.voice, "english_us"), $rw_setTranslateTarget(t.translator.translang), $rw_setLanguage(t.language.language), $rw_enableClickToSpeak(!1);
          else {
            var t = JSON.parse(event.data.payload.thRWFGSettings);
            $rw_setVoice(t.voice), $rw_setSpeedValue(t.speed), $rw_enableContinuousReading(t.continousreading), $rw_setVoiceForLanguage(t.voice, "english_us"), $rw_setTranslateTarget(t.translang), $rw_setLanguage(t.language), $rw_enableClickToSpeak(!1)
          }
        } else $rw_setVoice(e.speechoptions.voice), $rw_setSpeedValue(e.speechoptions.speed), $rw_enableContinuousReading(e.speechoptions.continousreading), $rw_enableClickToSpeak(!1), $rw_setLanguage(e.language.language), window.postMessage({
          method: "thRWFGSettings"
          , type: "1757FROM_PAGERW4G"
          , payload: JSON.stringify(e)
        }, "*");
        this.thInitialised || (texthelp.RW4GC.RiotControl.trigger("th-initialised"), this.thInitialised = !0)
      }
      if ("onStopSpeech" == event.data.method && ($rw_stopSpeech(), $rw_enableClickToSpeak(!1)), "removePrediction" == event.data.method && (document.removeEventListener("keyup", rwGoogleKeyUpListener, !1), texthelp.RW4GC.riot.toolbar.unmount(!1)), "thExtBGAjaxResponse" == event.data.command && (thAjaxResponse = event.data.payload, g_ExtBackgroundScriptCommObj.bXml && (thAjaxResponse = (new window.DOMParser)
          .parseFromString(thAjaxResponse, "text/xml")), g_ExtBackgroundScriptCommObj.callBackObject[g_ExtBackgroundScriptCommObj.strCallBackFunctionName](thAjaxResponse)), "trialValidation" == event.data.method) {
        this.thService = event.data.payload, g_thLicense = this.thService.Features;
        var r = this.thService.Features;
        for (i = 0; i < r.length; i++) "Dictionary" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("dictionary", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "PictureDictionary" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("picturedictionary", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "Speech" == r[i].FeatureName && 0 == r[i].Enabled ? (this.findToolbarButtonObject("play", texthelp.RW4GC.currentToolbar)
            .enabled = !1, this.findToolbarButtonObject("clicktospeak", texthelp.RW4GC.currentToolbar)
            .enabled = !1, this.findToolbarButtonObject("pause", texthelp.RW4GC.currentToolbar)
            .enabled = !1, this.findToolbarButtonObject("stop", texthelp.RW4GC.currentToolbar)
            .enabled = !1) : "FactFinder" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("factfinder", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "Translator" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("translator", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "StudySkills" == r[i].FeatureName && 0 == r[i].Enabled ? (this.findToolbarButtonObject("highlightblue", texthelp.RW4GC.currentToolbar)
            .enabled = !1, this.findToolbarButtonObject("highlightpink", texthelp.RW4GC.currentToolbar)
            .enabled = !1, this.findToolbarButtonObject("highlightyellow", texthelp.RW4GC.currentToolbar)
            .enabled = !1, this.findToolbarButtonObject("highlightgreen", texthelp.RW4GC.currentToolbar)
            .enabled = !1, this.findToolbarButtonObject("highlightclear", texthelp.RW4GC.currentToolbar)
            .enabled = !1, this.findToolbarButtonObject("highlightscollect", texthelp.RW4GC.currentToolbar)
            .enabled = !1) : "Vocab" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("vocabtool", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "Simplify" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("simplify", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "Prediction" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("prediction", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "Prediction-PredictAhead" == r[i].FeatureName && 0 == r[i].Enabled ? prediction_PredictAhead = !1 : "SSR" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("screenshotreader", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "SpeechInput" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("speechinput", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "SpeechMaker" == r[i].FeatureName && 0 == r[i].Enabled ? this.findToolbarButtonObject("speechmaker", texthelp.RW4GC.currentToolbar)
          .enabled = !1 : "ScreenMasking" == r[i].FeatureName && 0 == r[i].Enabled && (this.findToolbarButtonObject("screenmasking", texthelp.RW4GC.currentToolbar)
            .enabled = !1);
        if (void 0 != texthelp.RW4GC.riot.toolbar && null != texthelp.RW4GC.riot.toolbar || (texthelp.RW4GC.riot.toolbar = texthelp.RW4GC.riot.mount("texthelp-toolbar", texthelp.RW4GC.currentToolbar)[0], texthelp.RW4GC.riot.tooltip = texthelp.RW4GC.riot.mount("texthelp-tooltip")[0]), 1 == this.thService.Trial || 0 == this.thService.Valid || null !== this.thService.Message) {
          var n = document.getElementById("th-toolbar-drag-area");
          texthelp.RW4GC.trialMessage = " -   <a tabindex='-1' href='" + this.thService.Redirect + "' target='_blank'>" + this.thService.Message + "</a>", n.innerHTML = texthelp.RW4GC.currentToolbar.applicationName + texthelp.RW4GC.trialMessage
        }
        if (g_bChromeExtension) {
          var a = this.thService.UserType + " ";
          a += 0 == this.thService.Valid ? " expired " : 0 == this.thService.Trial ? " licensed " : " trial ", window.postMessage({
            type: "1757FROM_PAGERW4G"
            , command: "trackEvent"
            , settings: {
              category: "FromWebReader"
              , action: a
              , label: window.location.host
            }
          }, "*")
        }
        var o = document.getElementById("thSpeechStreamTBPlaceHolder");
        o.setAttribute("style", "display:block")
      }
    }
  }, this.extBGAjaxRequest = function (e, t, r, n, a) {
    g_ExtBackgroundScriptCommObj.callBackObject = r, g_ExtBackgroundScriptCommObj.strCallBackFunctionName = n, g_ExtBackgroundScriptCommObj.bXml = a, window.postMessage({
      type: "1757FROM_PAGERW4G"
      , command: "thExtBGAjaxRequest"
      , settings: {
        strURL: t
        , parameters: e
      }
    }, "*")
  }
}, SpeechStream.handleVisibilityChange = function () {
  document.webkitHidden, $rw_event_pause()
}, window.g_controllerFactory = null, SpeechStream.setUpControllerFactory = function () {
  null == window.g_controllerFactory && (window.g_controllerFactory = function () {
    function e() {
      var e;
      try {
        if (g_bIE && !g_bIE10 && !g_bIE11 || g_bIE && (g_bIE10 || g_bIE11) && isActivexEnabled() || "hmh" == g_strServerVersion) e = null, n = !1;
        else {
          e = new Audio;
          var t;
          t = "mp3" == g_strSpeechFileType ? "audio/mpeg" : "audio/" + g_strSpeechFileType, e.type = t, e.canPlayType && (n = "no" != e.canPlayType(t) && "" != e.canPlayType(t))
        }
      } catch (r) {
        e = null, n = !1
      }
    }
    var t = null
      , r = null
      , n = !1
      , a = !1
      , o = new SpeechStream.TouchScreenManager;
    o.initialise(), g_bForceFlash ? (t = null, n = !1) : e();
    var i = {
      enableTouchEvents: function (e) {
        o.clickAndSpeak(e)
      }
      , getConnector: function () {
        if (null != t) return t;
        if (n) {
          if (t = new SpeechStream.HTML5Controller, g_bWorkaroundFirefoxSwf) {
            var e = document.getElementById("rwDrag");
            null != e && (e.style.position = "relative", g_bWorkaroundFirefoxSwf = !1)
          }
        } else a = i.hasFlashSupport(), a && (t = rw_getWebToSpeech());
        return t
      }
      , setSwaConntector: function (e) {
        r = e
      }
      , getSwaConnector: function () {
        return null != r ? r : i.getConnector()
      }
      , hasFlashSupport: function () {
        if ("boolean" == typeof eba_no_flash && 1 == eba_no_flash) a = !0;
        else {
          var e = rw_getWebToSpeech();
          if (null != e) {
            var t = e.getVersion()
              , r = parseFloat(t);
            a = !(r < 1.05 || NaN == r)
          }
        }
        return a
      }
      , doesSupportSpeech: function () {
        return !!n || i.hasFlashSupport()
      }
      , doesSupportHtml5: function () {
        return n
      }
    };
    return i
  }())
}, SpeechStream.tools || (SpeechStream.tools = {}), SpeechStream.tools.translator = function () {
  var e = {};
  return e.translate = function (e) {
    if ("string" == typeof e && e.length > 0) {
      var t = g_controllerFactory.getConnector();
      null != t && t.getTranslationGenericPage(e, SpeechStream.translatorData.strSource, SpeechStream.translatorData.strTarget)
    } else {
      '<div class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("selection_no_word") + "</div>"
    }
  }, e
}(), SpeechStream.tools || (SpeechStream.tools = {}), SpeechStream.tools.dictionary = function () {
  var e = {};
  return e.lookup = function (e) {
    $rw_dictionaryRequest(e)
  }, e
}(), SpeechStream.tools || (SpeechStream.tools = {}), SpeechStream.tools.pictureDictionary = function () {
  var e = {};
  return e.lookup = function (e) {
    if (e.length > 0) {
      var t = g_controllerFactory.getConnector();
      null != t && t.getPictureDictionaryPage(e, g_strLocale)
    } else {
      var r = '<div class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("selection_no_word") + "</div>";
      rw_setPopupText(POPUP_PICTUREDICTIONARY, r), rw_showDiv(!0, POPUP_PICTUREDICTIONARY)
    }
  }, e
}(), SpeechStream.tools || (SpeechStream.tools = {}), SpeechStream.tools.factfinder = function () {
  var e = {};
  return e.lookup = function (e) {
    var t = e;
    t.length > 0 && window.open("http://google.com/search?q=" + encodeURIComponent(t))
  }, e
}();
var START_RECORDING = 0
  , STOP_RECORDING = 2
  , REPLAY_RECORDING = 3
  , g_bReplayOn = !1
  , g_recordStartTime = 0
  , g_recordEndTime = 0
  , g_timerRunning = !1;
this.g_thRW4GCNamespaceInit && (texthelp.RW4GC.toolbarEventHandler = function () {
  var e = !1
    , t = !1;
  this.disableButton = function (e, t) {
    var r = document.getElementsByClassName("th-" + e + "-image")[0];
    null != r && (t ? r.classList.contains("disabled") || (r.classList.add("disabled"), r.setAttribute("disabled", "true")) : 0 != texthelp.RW4GC.featureMap[e].enabled && (r.classList.contains("disabled") && r.classList.remove("disabled"), r.removeAttribute("disabled")))
  }, this.onplay = function (e) {
    texthelp.RW4GC.featureMap.play.enabled && ($rw_event_play(), this.setSpeechState(!0), rw_press("play", 0, !1))
  }, this.onstop = function (t) {
    texthelp.RW4GC.featureMap.stop.enabled && ($rw_event_stop(), e || (this.setSpeechState(!1), rw_press("stop", 0, !1)))
  }, this.onpause = function (e) {
    texthelp.RW4GC.featureMap.pause.enabled && ($rw_event_pause(), rw_press("pause", 0, !1))
  }, this.onpicturedictionary = function () {
    if (!texthelp.RW4GC.featureMap.picturedictionary.enabled) return void lastActiveElement.focus();
    var e = rw_getSelectionNonParsed();
    texthelp.RW4GC.currentPictureDictionary = {
      isvisible: !0
      , heading: "Picture Dictionary"
      , word: e
    }, texthelp.RW4GC.riot.pictureDictionary = texthelp.RW4GC.riot.mount("texthelp-picture-dictionary", texthelp.RW4GC.currentPictureDictionary)[0], rw_press("picturedictionary", 0, !1)
  }, this.ondictionary = function () {
    if (!texthelp.RW4GC.featureMap.dictionary.enabled) return void lastActiveElement.focus();
    var e = rw_getSelectionNonParsed();
    texthelp.RW4GC.currentDictionary = {
      isvisible: !0
      , heading: "Translator"
      , word: e
    }, texthelp.RW4GC.riot.dictionary = texthelp.RW4GC.riot.mount("texthelp-dictionary", texthelp.RW4GC.currentDictionary)[0], rw_press("dictionary", 0, !1)
  }, this.ontranslator = function () {
    if (!texthelp.RW4GC.featureMap.translator.enabled) return void lastActiveElement.focus();
    var e = rw_getSelectionNonParsed();
    texthelp.RW4GC.currentTranslator = {
      isvisible: !0
      , heading: "Translator"
      , word: e
    }, texthelp.RW4GC.riot.translator = texthelp.RW4GC.riot.mount("texthelp-translator", texthelp.RW4GC.currentTranslator)[0], rw_press("trans", 0, !1)
  }, this.onscreenshotreader = function () {
    return texthelp.RW4GC.featureMap.screenshotreader.enabled ? ($rw_event_screenshotreader(), void rw_press("screenshotreader", 0, !1)) : void lastActiveElement.focus()
  }, this.onspeechinput = function (e) {
    return texthelp.RW4GC.featureMap.speechinput.enabled ? ($rw_event_speechinput(null, 1), void rw_press("speechinput", 0, !1)) : void e.focus()
  }, this.onfactfinder = function () {
    return texthelp.RW4GC.featureMap.factfinder.enabled ? ($rw_event_ffinder(), void rw_press("ffinder", 0, !1)) : void lastActiveElement.focus()
  }, this.onhighlightblue = function (e) {
    e.focus(), texthelp.RW4GC.featureMap.highlightblue.enabled && ($rw_event_cyan(), rw_press("cyan", 0, !1))
  }, this.onhighlightpink = function (e) {
    e.focus(), texthelp.RW4GC.featureMap.highlightpink.enabled && ($rw_event_magenta(), rw_press("magenta", 0, !1))
  }, this.onhighlightyellow = function (e) {
    e.focus(), texthelp.RW4GC.featureMap.highlightyellow.enabled && ($rw_event_yellow(), rw_press("yellow", 0, !1))
  }, this.onhighlightgreen = function (e) {
    e.focus(), texthelp.RW4GC.featureMap.highlightgreen.enabled && ($rw_event_green(), rw_press("green", 0, !1))
  }, this.onhighlightclear = function (e) {
    e.focus(), texthelp.RW4GC.featureMap.highlightclear.enabled && ($rw_event_clear(), rw_press("clear", 0, !1))
  }, this.onhighlightscollect = function (e) {
    texthelp.RW4GC.featureMap.highlightscollect.enabled && ($rw_event_collect(), rw_press("collect", 0, !1))
  }, this.onvocabtool = function (e) {
    texthelp.RW4GC.featureMap.vocabtool.enabled && ($rw_event_vocabulary(), rw_press("vocabulary", 0, !1))
  }, this.onsimplify = function (e) {
    e.focus(), texthelp.RW4GC.featureMap.simplify.enabled && (onSimplifyClick(), rw_press("simplify", 0, !1))
  }, this.onprediction = function (e) {
    if (texthelp.RW4GC.featureMap.prediction.enabled) {
      rw_press("PredictionAll", 0, !1), t = !t, $rw_event_PredictionAll();
      var r = document.getElementsByClassName("th-prediction-image")[0];
      null != r && r && (t ? r.classList.contains("enabled") || r.classList.add("enabled") : r.classList.contains("enabled") && r.classList.remove("enabled"))
    }
  }, this.onclicktospeak = function () {
    if (texthelp.RW4GC.featureMap.clicktospeak.enabled) {
      e = !e, $rw_enableClickToSpeak(e);
      var t = document.getElementsByClassName("th-clicktospeak-image")[0];
      null != t && (e ? t.classList.contains("enabled") || (t.classList.add("enabled"), this.setSpeechState(!0)) : t.classList.contains("enabled") && (t.classList.remove("enabled"), this.setSpeechState(!1)), rw_press("clicktospeak", 0, !1))
    }
  }, this.setSpeechState = function (e) {
    this.disableButton("prediction", e), this.disableButton("dictionary", e), this.disableButton("picturedictionary", e), this.disableButton("play", e), this.disableButton("screenshotreader", e), this.disableButton("speechmaker", e), this.disableButton("factfinder", e), this.disableButton("speechinput", e), this.disableButton("translator", e), this.disableButton("speechinput", e), this.disableButton("highlightblue", e), this.disableButton("highlightpink", e), this.disableButton("highlightyellow", e), this.disableButton("highlightgreen", e), this.disableButton("highlightclear", e), this.disableButton("highlightscollect", e), this.disableButton("vocabtool", e), this.disableButton("simplify", e)
  }, this.setSpeechMakerState = function (e) {
    this.disableButton("speechmaker", e)
  }, this.onsettings = function () {
    stopTexthelpScreenshotReading(), textHelp.webreaderapi.SettingsSingleton.getInst()
      .getOptionsDialog()
      .showDialog(textHelp.webreaderapi.SettingsSingleton.getInst()
        .getVoices()), rw_press("settings", 0, !1)
  }, this.onhelp = function () {
    stopTexthelpScreenshotReading(), window.open("https://rwchrome.texthelp.com/drive/Support/Home", "_thSupport"), rw_press("help", 0, !1)
  }, this.onlogo = function () {
    stopTexthelpScreenshotReading(), window.open("https://www.texthelp.com", "_thLogo"), rw_press("logo", 0, !1)
  }, this.onscreenmasking = function (e) {
    $rw_event_screenmasking(null, 1), rw_press("screenmasking", 0, !0), e.focus()
  }, this.onspeechmaker = function () {
    var e = this;
    rw_press("speechmaker", 0, !1), stopTexthelpScreenshotReading();
    var t = rw_getSelectionNonParsed();
    if (t.length > 2e4) {
      var r = confirm(textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("speechmaker_large_text"));
      r || (t = "")
    }
    var n = textHelp.webreader.ConfigurationSingleton.getInst()
      .getConfiguration()
      , a = n.serversettings.speechmaker
      , o = n.serversettings.user;
    if ("" != t) {
      var i = new textHelp.RW4GC.AudioMaker(a, "Mp3Maker", o, g_strVoice, g_nSpeedValue)
        , l = "speechmaker";
      e.setSpeechMakerState(!0);
      var s = document.getElementsByClassName("th-speechmaker-image")[0]
        , c = document.createElement("div");
      c.className = "thAudioMakerProgress", s.parentNode.appendChild(c);
      var g = document.getElementsByClassName("thAudioMakerProgress")[0];
      g.style.left = s.offsetLeft + "px", g.style.top = s.offsetTop + s.offsetHeight - 3 + "px", g.style.width = s.offsetWidth + "px";
      try {
        i.convert(l, t, function (t) {
          e.setSpeechMakerState(!1);
          try {
            g.remove()
          } catch (r) {
            console.log("Remove error - " + r)
          }
          var n = document.createElement("a");
          n.href = t, n.download = "speechmaker.mp3", n.click()
        }, function (e) {
          e < 10 && (e = 10), g.style.background = "linear-gradient(to right, #0037FF " + e + "%, #DDDDFF 0%, #DDDDFF)"
        }, function (t) {
          console.log("Audio Error: " + t.message);
          var r = textHelp.webreader.LocaleSingleton.getInst()
            .getLocaleString("speechmaker_error_header")
            , n = textHelp.webreader.LocaleSingleton.getInst()
            .getLocaleString("speechmaker_error_content")
            , a = {
              msg: '<div><div class="vl-notification-mp3maker"><div class="vl-notification-content"><div class="vl-notification-heading">' + r + '</div><div class="vl-notification-msg">' + n + "</div></div></div></div>"
              , delay: 5e3
              , type: "error"
              , animIn: "fadeInRight"
              , animOut: "fadeOutDown"
            };
          window.notification(a);
          e.setSpeechMakerState(!1);
          try {
            g.remove()
          } catch (t) {}
        })
      } catch (u) {
        console.log("Audio Error: " + u.message);
        var _ = textHelp.webreader.LocaleSingleton.getInst()
          .getLocaleString("speechmaker_error_header")
          , d = textHelp.webreader.LocaleSingleton.getInst()
          .getLocaleString("speechmaker_error_content")
          , h = {
            msg: '<div><div class="vl-notification-mp3maker"><div class="vl-notification-content"><div class="vl-notification-heading">' + _ + '</div><div class="vl-notification-msg">' + d + "</div></div></div></div>"
            , delay: 5e3
            , type: "error"
            , animIn: "fadeInRight"
            , animOut: "fadeOutDown"
          };
        window.notification(h);
        e.setSpeechMakerState(!1);
        try {
          g.remove()
        } catch (u) {}
      }
    }
  }
}), loadToolbar(), loadDialogs(), setTimeout(function () {
  rw_start()
}, 1);
