function $rw_getVersion() {
  return eba_actual_version
}

function $rw_getRevision() {
  return g_strRevision
}

function $rw_setIconsToLoad(e) {
  var t = !1;
  (e & clicktospeak_icon) == clicktospeak_icon && (g_bBubbleMode || (g_nHoverIndex = rw_loadIcon("hover", TOOL_TIP_TEXT_ARRAY[CLICK_TO_SPEAK][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CLICK_TO_SPEAK], !0)), t = !0), (e & play_icon) == play_icon && (!g_bSpeechCacheFlag || g_bSpeechCacheGenerateFlag || g_bCacheLiveGeneration) && (g_bBubbleMode || rw_loadIcon("play", TOOL_TIP_TEXT_ARRAY[SPEAK_CURRENT_SELECTION][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SPEAK_CURRENT_SELECTION], !1), t = !0), (e & pause_icon) == pause_icon && rw_loadIcon("pause", TOOL_TIP_TEXT_ARRAY[PAUSE_SPEECH][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[PAUSE_SPEECH], !1), t && rw_loadIcon("stop", TOOL_TIP_TEXT_ARRAY[STOP_SPEECH][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[STOP_SPEECH], !1);
  var r = !1;
  (e & funplay_icon) == funplay_icon && (rw_loadIcon("funplay", TOOL_TIP_TEXT_ARRAY[SPEAK_CURRENT_SELECTION][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[FUN_PLAY], !1), r = !0), r && rw_loadIcon("funstop", TOOL_TIP_TEXT_ARRAY[STOP_SPEECH][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[FUN_STOP], !1), (e & factfinder_icon) == factfinder_icon && rw_loadIcon("ffinder", TOOL_TIP_TEXT_ARRAY[FACT_FINDER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[FACT_FINDER], !1), (e & translation_icon) == translation_icon && rw_loadIcon("trans", TOOL_TIP_TEXT_ARRAY[TRANSLATE_WORD][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[TRANSLATE_WORD], !1), (e & dictionary_icon) == dictionary_icon && rw_loadIcon("dictionary", TOOL_TIP_TEXT_ARRAY[DICTIONARY][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[DICTIONARY], !1), (e & picturedictionary_icon) == picturedictionary_icon && rw_loadIcon("picturedictionary", TOOL_TIP_TEXT_ARRAY[PICTURE_DICTIONARY][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[PICTURE_DICTIONARY], !1), (e & spelling_icon) == spelling_icon && (g_nSpellIndex = rw_loadIcon("spell", TOOL_TIP_TEXT_ARRAY[SPELL_CHECKER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SPELL_CHECKER], !0)), (e & homophone_icon) == homophone_icon && (g_nHomophoneIndex = rw_loadIcon("homophone", TOOL_TIP_TEXT_ARRAY[SCREENSHOTREADER_CHECKER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SCREENSHOTREADER_CHECKER], !0)), (e & prediction_icon) == prediction_icon && (g_nPredIndex = rw_loadIcon("pred", TOOL_TIP_TEXT_ARRAY[PREDICTION_CHECKER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[PREDICTION_CHECKER], !0));
  var n = !1;
  (e & highlightcyan_icon) == highlightcyan_icon && (rw_loadIcon("cyan", TOOL_TIP_TEXT_ARRAY[HIGHLIGHT_CYAN][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[HIGHLIGHT_CYAN], !1), n = !0), (e & highlightmagenta_icon) == highlightmagenta_icon && (rw_loadIcon("magenta", TOOL_TIP_TEXT_ARRAY[HIGHLIGHT_MAGENTA][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[HIGHLIGHT_MAGENTA], !1), n = !0), (e & highlightyellow_icon) == highlightyellow_icon && (rw_loadIcon("yellow", TOOL_TIP_TEXT_ARRAY[HIGHLIGHT_YELLOW][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[HIGHLIGHT_YELLOW], !1), n = !0), (e & highlightgreen_icon) == highlightgreen_icon && (rw_loadIcon("green", TOOL_TIP_TEXT_ARRAY[HIGHLIGHT_GREEN][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[HIGHLIGHT_GREEN], !1), n = !0), n && rw_loadIcon("clear", TOOL_TIP_TEXT_ARRAY[CLEAR_HIGHLIGHT][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CLEAR_HIGHLIGHT], !1), (e & collect_icon) == collect_icon && rw_loadIcon("collect", TOOL_TIP_TEXT_ARRAY[COLLECT_HIGHLIGHTS][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[COLLECT_HIGHLIGHTS], !1), (e & mp3_icon) == mp3_icon && rw_loadIcon("mp3", TOOL_TIP_TEXT_ARRAY[MP3_MAKER][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[MP3_MAKER], !1), (e & calculator_icon) == calculator_icon && rw_loadIcon("calculator", TOOL_TIP_TEXT_ARRAY[CALCULATOR][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CALCULATOR], !1), (e & generatecache_icon) == generatecache_icon && rw_loadIcon("generate_cache", TOOL_TIP_TEXT_ARRAY[GENERATE_CACHE][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[GENERATE_CACHE], !1), (e & checkcache_icon) == checkcache_icon && rw_loadIcon("check_cache", TOOL_TIP_TEXT_ARRAY[CHECK_CACHE][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CHECK_CACHE], !1), (e & submit_icon) == submit_icon && rw_loadIcon("submit", TOOL_TIP_TEXT_ARRAY[SUBMIT][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[SUBMIT], !1), (e & sticky_icon) == sticky_icon && (g_nStickyIndex = rw_loadIcon("sticky", TOOL_TIP_TEXT_ARRAY[STICKY_NOTE][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[STICKY_NOTE], !0)), null != g_strCustId && null != g_strBookId && null != g_strPageId && ((e & pronCreate_icon) == pronCreate_icon && rw_loadIcon("pronCreate", TOOL_TIP_TEXT_ARRAY[CREATE_PRONUNCIATION][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[CREATE_PRONUNCIATION], !1), (e & pronEdit_icon) == pronEdit_icon && rw_loadIcon("pronEdit", TOOL_TIP_TEXT_ARRAY[EDIT_PRONUNCIATION][g_nLanguage], IMG_POSITION_FROM_LEFT_ARRAY[EDIT_PRONUNCIATION], !1))
}

function $rw_setVoice(e) {
  if ("string" == typeof e && null != e && e.length > 0) {
    eba_voice = e, g_strVoice = e;
    try {
      var t = g_controllerFactory.getConnector();
      null != t && t.setVoiceName(g_strVoice)
    } catch (r) {
      thLogE(r)
    }
  }
}

function $rw_setVoiceForLanguage(e, t) {
  if ("string" == typeof t) try {
    t = parseInt(t)
  } catch (r) {
    return void thLogE(r)
  }
  "string" == typeof e && "number" == typeof t && null != e && e.length > 0 && t >= 0 && t < DEFAULT_VOICE_ARRAY.length && (DEFAULT_VOICE_ARRAY[t] = e)
}

function $rw_setSpeedValue(e) {
  if ("number" == typeof e) {
    if (e > -4 && e < 101) {
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
    "VERY_SLOW_SPEED" == n ? $rw_setSpeedValue(VERY_SLOW_SPEED) : "SLOW_SPEED" == n ? $rw_setSpeedValue(SLOW_SPEED) : "MEDIUM_SPEED" == n ? $rw_setSpeedValue(MEDIUM_SPEED) : "FAST_SPEED" == n && $rw_setSpeedValue(FAST_SPEED)
  }
}

function $rw_setBarVisibility(e) {
  if ("boolean" == typeof e) {
    var t = document.getElementById("rwDrag");
    e ? (t.style.visibility = "visible", t.style.display = "inline") : (t.style.visibility = "hidden", t.style.display = "none"), g_bHiddenBar = !e, rw_positionToolbar()
  }
}

function $rw_enableClickToSpeak(e) {
  if (e && !$g_bMouseSpeech) $rw_event_hover(null, g_nHoverIndex);
  else if (!e && $g_bMouseSpeech && ($rw_event_hover(null, g_nHoverIndex), g_nHoverIndex > -1)) {
    var t = g_nBlockNextChange;
    g_nBlockNextChange = 0, rw_mouseOffIcon("hover", g_nHoverIndex, !0), g_nBlockNextChange = t
  }
}

function $rw_enableSpeachByBubbleMode(e) {
  return "undefinded" == typeof rw_initSpeechBubble ? void(e && alert("Bubble speech mode is not available.")) : void(g_bOnloadFinished ? (g_bBubbleMode = e, g_bBubbleMode || (rw_hideStartBubble(), rw_hideStopBubble(), $rw_stopSpeech())) : g_bBubbleModeStartDisabled = !e)
}

function $rw_enableContinuousReading(e) {
  if (g_bContinuousReading = e, eba_continuous_reading = e, g_bContinuousReading) {
    if (g_bSpeechSelectionBySentence = "boolean" != typeof eba_speak_selection_by_sentence || eba_speak_selection_by_sentence, $rw_isSpeaking() && null != g_lastTarget && null == g_nextTargetForContinuousReading) {
      if (null != g_astrSpeechInstructionQueue) {
        var t;
        for (t = 0; t < g_astrSpeechInstructionQueue.length; t++) g_astrSpeechInstructionQueue[t].indexOf("$rw_readNextTarget") > -1 && (g_astrSpeechInstructionQueue.splice(t, 1), --t)
      }
      rw_setupContinuousReading(g_lastTarget)
    }
  } else g_nextTargetForContinuousReading = null, g_bSpeechSelectionBySentence = !1
}

function $rw_stopSpeech() {
  $rw_event_stop()
}

function $rw_speakFromElement(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClickTime = t;
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
    g_nNavDoubleClick = t;
    var r = rw_getTargetFromId(e);
    if (null != r) {
      if ($rw_stopSpeech(), g_bSpeechSelectionBySentence) {
        var n;
        n = rw_checkIfNeedToReduceToSentence(r), g_finalSentence = null, null != n && (r = n)
      }
      g_userDeterminedTarget = r, rw_speakHoverTarget(r)
    } else {
      var a = document.getElementById(e);
      null != a && (a = rw_getNextTextNodeNoBlank(a, !1, null), $rw_speakCurrentSentence(a, 0))
    }
  }
}

function $rw_speakById(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClick = t;
    var r = rw_getTargetFromId(e);
    if (null != r) {
      $rw_stopSpeech();
      var n;
      g_bSpeechSelectionBySentence ? (n = rw_checkIfNeedToReduceToSentence(r), null == n && (g_finalSentence = r)) : n = r, null != n ? (r = n, rw_speakHoverTarget(r)) : (r.blockCache = !g_bCacheSelection, rw_speakHoverTarget(r)), g_userDeterminedTarget = r
    }
  }
}

function $rw_speakByIdFromFile(e, t) {
  var r = (new Date)
    .getTime();
  if (!(r - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClick = r;
    var n = rw_getTargetFromId(e);
    null != n && ($rw_stopSpeech(), g_userDeterminedTarget = n, rw_speechFromFile(n, t))
  }
}

function $rw_speakByIdHighlightOnly(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClick = t;
    var r = rw_getTargetFromId(e);
    null != r && ($rw_stopSpeech(), g_userDeterminedTarget = r, rw_speechHighlightOnly(r))
  }
}

function $rw_speakByIdWithSpeaker(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClick = t;
    var r = rw_getTargetFromId(e);
    null != r && ($rw_stopSpeech(), g_bSpeakerID = e, g_userDeterminedTarget = r, rw_speakHoverTarget(r))
  }
}

function rw_getTargetFromId(e) {
  var t = document.getElementById(e);
  return rw_getTargetFromElement(t)
}

function rw_getTargetFromElement(e) {
  if (null != e) {
    var t = e.innerHTML;
    if (t.length > 0) {
      var r = rw_getFirstChildTextNode(e, !0);
      if (null == r || 3 != r.nodeType) return null;
      var n = rw_getLastChildTextNode(e, !0);
      if (null == n || 3 != n.nodeType) return null;
      var a = rw_getRefPt(r, 0)
        , o = 3 == n.nodeType ? rw_getRefPt(n, n.nodeValue.length) : rw_getRefPt(n, 0)
        , i = new THRange(e.ownerDocument.body, a, o)
        , l = new THHoverTarget(null, null, i);
      return l
    }
  }
  return null
}

function $rw_setSentenceFromSelection() {
  try {
    var e = $rw_getTHCaretRangeFromSelection();
    if (null == e) return;
    var t = rw_getSentenceBreakToLeft(e.leftCaret)
      , r = rw_getSentenceBreakToRight(e.rightCaret);
    if (null != t && null != r) {
      var n = new THCaretRange(t, r)
        , a = rw_getTHRangeFromTHCaretRange(n);
      null != a && (g_userDeterminedTarget = new THHoverTarget(null, null, a))
    }
  } catch (o) {
    thLogE(o)
  }
}

function $rw_speakCurrentSentence(e, t) {
  var r = (new Date)
    .getTime()
    , n = r - g_nNavDoubleClickTime;
  if (!(n < g_nClickRejectTime)) {
    var a = rw_getCurrentSentence(e, t);
    if (null != a) {
      if (a.equals(g_userDeterminedTarget) && n < 5 * g_nClickRejectTime) return;
      $rw_stopSpeech(), g_userDeterminedTarget = a, rw_speakHoverTarget(a)
    }
    g_nNavDoubleClickTime = r
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

function rw_getCurrentSentence(e, t) {
  var r, n;
  if ("undefined" == typeof e || null == e)
    if (null == g_userDeterminedTarget) {
      var a = rw_getFirstSentence(document.body);
      if (null == a) return null;
      r = rw_getTHRangeFromTHCaretRange(a), n = new THHoverTarget(null, null, r)
    } else n = g_userDeterminedTarget;
  else {
    if (e instanceof THCaretRange) r = rw_getTHRangeFromTHCaretRange(e);
    else {
      var o;
      o = "undefined" == typeof t ? new THCaret(e, 0, (!0)) : new THCaret(e, t, (!0));
      var i = rw_getSentenceBreakToLeft(o)
        , l = rw_getSentenceBreakToRight(o);
      if (null == i || null == l) return null;
      var a = new THCaretRange(i, l);
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
  g_userDeterminedTarget = e
}

function $rw_speakFirstSentence() {
  var e = null;
  null != g_strPlayStartPoint && "" != g_strPlayStartPoint && (e = document.getElementById(g_strPlayStartPoint)), null == e && (e = document.body), e = rw_getNextTextNodeNoBlank(e, !1, null), $rw_speakCurrentSentence(e, 0)
}

function $rw_speakNextSentence() {
  var e = (new Date)
    .getTime();
  if (e - g_nNavDoubleClickTime < g_nClickRejectTime) return !1;
  if (g_nNavDoubleClickTime = e, null == g_userDeterminedTarget) return $rw_speakCurrentSentence(), !1;
  var t = g_userDeterminedTarget.getCaretRange()
    , r = rw_getNextSentence(t);
  if (null == r) return !1;
  if (rw_checkForEndContinuousFlag(t.leftCaret.node, r.leftCaret.node)) return !1;
  var n = rw_getTHRangeFromTHCaretRange(r)
    , a = new THHoverTarget(null, null, n);
  return $rw_stopSpeech(), g_userDeterminedTarget = a, rw_speakHoverTarget(a), !0
}

function $rw_speakNextSentenceHighlightOnly() {
  var e = (new Date)
    .getTime();
  if (e - g_nNavDoubleClickTime < g_nClickRejectTime) return !1;
  if (g_nNavDoubleClickTime = e, null == g_userDeterminedTarget) return $rw_speakCurrentSentenceHighlightOnly(), !1;
  var t = g_userDeterminedTarget.getCaretRange()
    , r = rw_getNextSentence(t);
  if (null == r) return !1;
  var n = rw_getTHRangeFromTHCaretRange(r)
    , a = new THHoverTarget(null, null, n);
  return $rw_stopSpeech(), g_userDeterminedTarget = a, rw_speechHighlightOnly(a), !0
}

function $rw_speakPreviousSentence() {
  var e = (new Date)
    .getTime();
  if (e - g_nNavDoubleClickTime < g_nClickRejectTime) return !1;
  if (g_nNavDoubleClickTime = e, null == g_userDeterminedTarget) return $rw_speakCurrentSentence(), !1;
  var t = g_userDeterminedTarget.getCaretRange()
    , r = rw_getPreviousSentence(t);
  if (null == r) return !1;
  if (rw_checkForEndContinuousFlag(r.rightCaret.node, t.rightCaret.node)) return !1;
  var n = rw_getTHRangeFromTHCaretRange(r)
    , a = new THHoverTarget(null, null, n);
  return $rw_stopSpeech(), g_userDeterminedTarget = a, rw_speakHoverTarget(a), !0
}

function $rw_speakPreviousSentenceHighlightOnly() {
  var e = (new Date)
    .getTime();
  if (e - g_nNavDoubleClickTime < g_nClickRejectTime) return !1;
  if (g_nNavDoubleClickTime = e, null == g_userDeterminedTarget) return $rw_speakCurrentSentenceHighlightOnly(), !1;
  var t = g_userDeterminedTarget.getCaretRange()
    , r = rw_getPreviousSentence(t);
  if (null == r) return !1;
  var n = rw_getTHRangeFromTHCaretRange(r)
    , a = new THHoverTarget(null, null, n);
  return $rw_stopSpeech(), g_userDeterminedTarget = a, rw_speechHighlightOnly(a), !0
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
  return g_bOnloadFinished && g_bServerSupport
}

function $rw_highlightOnlyWTSFailed() {}

function $rw_log(e) {
  thLog(e)
}

function $rw_setReadingAge(e) {
  if ("string" == typeof e) try {
    e = parseInt(e)
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
    eba_cust_id = e, g_strCustId = e;
    var t = g_controllerFactory.getConnector();
    null != t && t.setCustomerId(e);
    var r = document.getElementById("editPageMsg");
    null != r && (r.innerHTML = ""), g_bPronActive && (m_pronDictionary.deleteAll(), rw_loadPronunciationsFromServer()), rw_refreshAnnotations()
  } catch (n) {
    thLogE(n)
  }
}

function $rw_setBookId(e) {
  try {
    eba_book_id = e, g_strBookId = e;
    var t = g_controllerFactory.getConnector();
    null != t && t.setBookId(e);
    var r = document.getElementById("editPageMsg");
    null != r && (r.innerHTML = ""), g_bPronActive && (m_pronDictionary.deleteAll(), rw_loadPronunciationsFromServer()), rw_refreshAnnotations()
  } catch (n) {
    thLogE(n)
  }
}

function $rw_setPageId(e) {
  try {
    eba_page_id = e, g_strPageId = e;
    var t = g_controllerFactory.getConnector();
    null != t && t.setPageId(e);
    var r = document.getElementById("editPageMsg");
    null != r && (r.innerHTML = ""), g_bPronActive && (m_pronDictionary.deleteAll(), rw_loadPronunciationsFromServer()), rw_refreshAnnotations()
  } catch (n) {
    thLogE(n)
  }
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
  g_cacheImgList = rw_getNonInlineImages(), g_nCacheNumbSentences = 0, g_nCurrentCacheSentences = 1, g_bAutoCacheAllSpeeds && (g_nAutocacheSpeedSetting = 1, $rw_setSpeedValue(SLOW_SPEED)), g_currentCacheSentence = rw_getFirstSentence(document.body), g_nCacheNumbSentences = rw_autogenCountSentences(g_currentCacheSentence), g_nCacheNumbImages = g_cacheImgList.length, g_nCurrentCacheImage = -1, rw_autogenSentence(!0)
}

function rw_autogenCountSentences(e) {
  for (var t = e, r = 0; null != t;) r++, t = rw_getNextSentence(t);
  return r += g_cacheImgList.length, g_bAutoCacheAllSpeeds ? 3 * r : r
}

function rw_getNonInlineImages() {
  var e = new Array;
  if (g_bInlineImg) return e;
  var t, r = document.getElementsByTagName("img")
    , n = r.length;
  for (t = 0; t < n; t++) {
    var a = r[t];
    if (!("none" == a.style.display && g_bIgnoreHidden || rw_isIgnored(a) || null != a.getAttribute("msg"))) {
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
    , r = "";
  if (null == g_currentCacheSentence) {
    var n = !1;
    if (g_nCurrentCacheImage < g_nCacheNumbImages && g_nCurrentCacheImage > -1 && g_nCurrentCacheImage < g_cacheImgList.length) {
      var a = rw_getImgText(g_cacheImgList[g_nCurrentCacheImage]);
      if (a.trimTH()
        .length > 0) {
        g_bVoiceFromLangFlag && rw_checkIfVoiceChanged(rw_getVoiceSetForNode(g_cacheImgList[g_nCurrentCacheImage]));
        var o = new SpeechStream.SpeechRequest;
        o.setString(a, SpeechStream.SpeechRequestBookmarks.OUTER), r = o.getText(), t = o.getFinalText(), n = !0
      }
    }
    if (!n) return void(e ? $rw_autogenSpeechFilesCallback("Success") : $rw_checkAutogenCachedFilesCallback("Success"))
  } else {
    var i = rw_getSpeechOverCaretRangeToSpeak(g_currentCacheSentence, new Array);
    rw_checkIfVoiceChanged(i.voice), null != i.caretRange && (g_currentCacheSentence = i.caretRange, g_nCacheNumbSentences++), t = i.txt, r = i.txtOrig
  }
  var l = g_controllerFactory.getConnector();
  if (null != l) {
    var s, c = rw_getCachedSpeechFolderUrl();
    if (s = rw_getHash(SpeechStream.pronunciation.mode == SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER ? t : r), g_bSplitCachePath) {
      var g = rw_getSplitPathFromName(s);
      c = c + "/" + g
    }
    if (e) {
      var _ = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer() + "/";
      l.autogenSpeechFiles(t, c, s, !g_bLocalPronunciationLoaded, _)
    } else {
      var u = c + "/" + s;
      l.checkAutogenCachedFiles(u)
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
      if (g_currentCacheSentence = rw_getNextSentence(g_currentCacheSentence, null), null != g_currentCacheSentence) g_nCurrentCacheSentences++, g_nCacheNumbSentences >= g_nCurrentCacheSentences ? ($rwj("#pb1")
        .progressBar(g_nCurrentCacheSentences / g_nCacheNumbSentences * 100), rw_autogenSentence(!0)) : ($rwj.unblockUI(), alert("Error: More sentences to be cached than counted in initial count at the start of this process!"));
      else if (g_nCacheNumbImages > 0 && g_nCurrentCacheImage < g_nCacheNumbImages - 1) ++g_nCurrentCacheSentences, $rwj("#pb1")
      .progressBar(g_nCurrentCacheSentences / g_nCacheNumbSentences * 100), ++g_nCurrentCacheImage, rw_autogenSentence(!0);
    else {
      $rwj.unblockUI();
      var r = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer() + "/"
        , n = g_controllerFactory.getConnector();
      n.autoGenComplete(r), null == g_strSpeechStreamAutoCacheCallback && alert("Page Cached Successfully!")
    } else g_nCurrentCacheSentences++, rw_autogenSentence(!0)
  } else $rwj.unblockUI(), alert(e)
}

function rw_checkAutogenCachedFiles() {
  g_cacheImgList = rw_getNonInlineImages(), g_nCacheNumbSentences = 0, g_nCurrentCacheSentences = 1, g_nCheckCachedSentences = 0, g_nCheckUncachedSentences = 0, g_bAutoCacheAllSpeeds && (g_nAutocacheSpeedSetting = 1, $rw_setSpeedValue(SLOW_SPEED)), g_currentCacheSentence = rw_getFirstSentence(document.body), g_nCacheNumbSentences = rw_autogenCountSentences(g_currentCacheSentence), g_nCacheNumbImages = g_cacheImgList.length, g_nCurrentCacheImage = -1, rw_autogenSentence(!1)
}

function $rw_checkAutogenCachedFilesCallback(p_strMsg) {
  "Success" == p_strMsg ? ++g_nCheckCachedSentences : ++g_nCheckUncachedSentences;
  var bMoveToNext = !1;
  if (g_bAutoCacheAllSpeeds) switch (1 == g_nAutocacheSpeedSetting || 2 == g_nAutocacheSpeedSetting ? g_nAutocacheSpeedSetting++ : (g_nAutocacheSpeedSetting = 1, bMoveToNext = !0), g_nAutocacheSpeedSetting) {
  case 1:
    $rw_setSpeedValue(SLOW_SPEED);
    break;
  case 2:
    $rw_setSpeedValue(MEDIUM_SPEED);
    break;
  case 3:
    $rw_setSpeedValue(FAST_SPEED)
  } else bMoveToNext = !0;
  bMoveToNext ? (g_currentCacheSentence = rw_getNextSentence(g_currentCacheSentence, null), null != g_currentCacheSentence ? (g_nCurrentCacheSentences++, g_nCacheNumbSentences >= g_nCurrentCacheSentences ? ($rwj("#pb1")
    .progressBar(g_nCurrentCacheSentences / g_nCacheNumbSentences * 100), rw_autogenSentence(!1)) : ($rwj.unblockUI(), alert("Error: More sentences to be cached than counted in initial count at the start of this process!"))) : g_nCacheNumbImages > 0 && g_nCurrentCacheImage < g_nCacheNumbImages - 1 ? (++g_nCurrentCacheSentences, $rwj("#pb1")
    .progressBar(g_nCurrentCacheSentences / g_nCacheNumbSentences * 100), ++g_nCurrentCacheImage, rw_autogenSentence(!1)) : ($rwj.unblockUI(), g_nCheckUncachedSentences > 0 && alert("Missing files!  Checked page and found that " + g_nCheckUncachedSentences + " sentences out of " + g_nCurrentCacheSentences + " where not cached."), null != g_strSpeechStreamAutoCacheCallback ? eval(g_strSpeechStreamAutoCacheCallback) : 0 == g_nCheckUncachedSentences && alert("Checked page and found that all " + g_nCurrentCacheSentences + " sentences were cached."))) : (g_nCurrentCacheSentences++, rw_autogenSentence(!1))
}

function $rw_autogenCompleteCallback(p_strMsg) {
  "Success" != p_strMsg && alert("Finished autogeneration process.  " + p_strMsg), null != g_strSpeechStreamAutoCacheCallback && eval(g_strSpeechStreamAutoCacheCallback)
}

function $rw_setTranslateSource(e) {
  TranslatorData.setSource(e)
}

function $rw_setTranslateTarget(e) {
  TranslatorData.setTarget(e)
}

function $rw_isWordInPictDictFilter(e) {
  function t() {
    return null === g_rwFilter && (g_rwFilter = new Array("islamophobia", "bum", "fart", "addict", "drug", "cannabis", "kill", "gas", "assassinated", "assassination", "bottom", "bottoms", "killed", "killer", "killers", "killing", "killings", "kills", "murdered", "murdering", "murders", "peeings", "pees", "slay", "slayed", "slaying", "slays", "urinate", "urinated", "urinates", "urines", "pee", "marijuana", "peeing", "murder", "addicts", "addicted", "addicteds", "addicting", "assassinating", "assassinates", "cannabiss")), g_rwFilter
  }

  function r(e) {
    for (var e = e.replace(/^\s\s*/, ""), t = /\s/, r = e.length; t.test(e.charAt(--r)););
    return e.slice(0, r + 1)
  }

  function n(e, t) {
    if (t < 0) return !1;
    r(t);
    for (var n = 0; n < e.length; n++)
      if (e[n] == t.toLowerCase()) return !0;
    return !1
  }
  return t(), !!n(g_rwFilter, e)
}

function $rw_checkIfWewNeedToInstallFlash() {
  function e() {
    g_bNoFlashConfirm ? confirm(g_strNoFlashErrorMsg) && (location.href = "http://get.adobe.com/flashplayer") : alert(g_strNoFlashErrorMsg)
  }
  g_controllerFactory.doesSupportHtml5() === !1 && swfobject.hasFlashPlayerVersion("10.1") === !1 && ($rw_setBarVisibility(!1), e())
}

function $rw_getTouchSelection() {
  g_selectionRange = window.getSelection()
    .rangeCount > 0 ? window.getSelection()
    .getRangeAt(0)
    .cloneRange() : null
}

function $rw_isTouchDevice() {
  return g_bTouchScreen
}

function THCaret(e, t, r) {
  this.node = e, this.offset = t, this.forwardBias = r, rw_isSpecialCase(this.node) && (this.offset = SPECIAL_CASE)
}

function THCaretRange(e, t) {
  this.leftCaret = e, this.rightCaret = t
}

function THDomRange(e, t, r, n) {
  this.body = e.ownerDocument.body, this.startCaret = new THCaret(e, t, (!0)), this.endCaret = new THCaret(r, n, (!1)), this.startRef = rw_getRefPt(e, t), this.endRef = rw_getRefPt(r, n)
}

function THDomRefPt(e, t) {
  this.path = e, this.offset = t
}

function THHoverTarget(e, t, r) {
  this.body = e, this.path = t, this.range = r, this.wordNodes = null, this.blockCache = !1, this.textToSpeak = null, this.textToSpeakNoChanges = null, this.allowContinuous = !0, this.useHighlighting = !0
}

function THRange(e, t, r) {
  this.body = e, this.startRef = t, this.endRef = r
}

function $rw_event_click(e, t) {
  return $rw_event_hover(e, t)
}

function $rw_event_hover(e, t) {
  if (g_bMP && g_bSafari && $rw_tagSentences(), g_bServerSupport) {
    if (!g_bIELoadedFlag) {
      if (g_bSpeechCacheGenerateFlag) throw "The page has not fully loaded, click and speak is not available yet.";
      return void rw_alert("The page has not fully loaded, click and speak is not available yet.")
    }
    $g_bMouseSpeech = !$g_bMouseSpeech;
    var r = SpeechStream.enumIconParams;
    if (t > -1 && (g_icons[t][r.ICON_TOGGLE_STATE] = $g_bMouseSpeech, g_bTouchScreen && !$g_bMouseSpeech ? rw_showAnIcon(g_icons[t][r.ICON_NAME], "flat", g_icons[t][r.ICON_OFFSET], !0) : rw_showAnIcon(g_icons[t][r.ICON_NAME], "toggleOn", g_icons[t][r.ICON_OFFSET], !0)), g_bSticky && $g_bMouseSpeech && g_nStickyIndex > -1 && "undefined" != typeof $rw_event_sticky) {
      $rw_event_sticky(e, g_nStickyIndex);
      var n = g_nBlockNextChange;
      g_nBlockNextChange = 0, rw_mouseOffIcon("sticky", g_nStickyIndex, !0), g_nBlockNextChange = n
    }
    $g_bMouseSpeech ? (rw_setSpeakingModeFlag(!0), g_controllerFactory.enableTouchEvents(!0)) : (g_controllerFactory.enableTouchEvents(!1), $rw_event_stop(), rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1), g_controllerFactory.enableTouchEvents(!1))
  }
}

function $rw_isPaused() {
  return g_bServerSupport && g_controllerFactory.getConnector && $rw_isSpeaking() && null != g_controllerFactory.getConnector() && g_controllerFactory.getConnector()
    .isPaused()
}

function $rw_event_play() {
  if ($rw_isTextSelectedForPlay()) {
    if (g_bServerSupport) try {
      if (null != g_speakableTextAreaTarget) {
        if ($rw_isPaused()) return void $rw_event_pause();
        if (0 != g_nSpeakableTextAreaTimerId && (clearTimeout(g_nSpeakableTextAreaTimerId), g_nSpeakableTextAreaTimerId = 0, null == g_speakableTextAreaTarget)) return void $rw_event_play();
        var e = g_speakableTextAreaTarget;
        e.focus(), g_speakableTextAreaTarget = null, rw_speakHoverTarget(new THHoverTarget(e.ownerDocument.body, rw_getPositionInDom(e), null))
      } else {
        if ($rw_isPaused()) return void $rw_event_pause();
        var t = rw_getSelectionWithTHRange();
        if (null != t && null != t.range) {
          var r = t.range;
          if (r instanceof String) rw_speakHoverTarget(r);
          else {
            if (g_bIEOld) {
              var n = rw_getSelectionObject();
              n.collapse(), n.select()
            } else {
              var n = rw_getSelectionObject();
              n.collapseToStart()
            }
            var a, o = new THHoverTarget(null, null, r);
            g_bSpeechSelectionBySentence ? (a = rw_checkIfNeedToReduceToSentence(o), null == a && (g_finalSentence = o)) : a = o, null != a ? (o = a, rw_speakHoverTarget(o)) : (o.blockCache = !g_bCacheSelection, rw_speakHoverTarget(o))
          }
        } else null != g_strPlayStartPoint && (null == g_userDeterminedTarget || g_bReachedEnd ? (g_bReachedEnd = !1, $rw_speakFirstSentence()) : $rw_speakCurrentSentence())
      }
    } catch (i) {
      thLogE(i)
    }
  } else alert(PLEASE_SELECT_TEXT_ARRAY[g_nLanguage])
}

function rw_checkIfNeedToReduceToSentence(e) {
  if (null == e) return null;
  var t = e.getCaretRange()
    , r = rw_getSentenceFromPoint(t.leftCaret)
    , n = rw_getSentenceFromPoint(t.rightCaret);
  if (!r.equals(n) || "undefined" != typeof eba_expand_sentence_selections && eba_expand_sentence_selections) {
    if (!rw_caretRangeIsSpeakable(r)) {
      if (r = rw_getNextSentence(r, n.rightCaret.node), null == r) return null;
      if (r.equals(n)) return null
    }
    if (!rw_caretRangeIsSpeakable(n)) {
      if (n = rw_getPreviousSentence(n, null), null == n) return null;
      if (r.equals(n)) return null
    }
    var a, o, i = rw_getTHRangeFromTHCaretRange(r);
    return a = new THHoverTarget(null, null, i), i = rw_getTHRangeFromTHCaretRange(n), o = new THHoverTarget(null, null, i), g_finalSentence = o, a
  }
  return null
}

function $rw_event_funplay() {
  $rw_event_play()
}

function $rw_speakText(e) {
  var t = (new Date)
    .getTime();
  if (!(t - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClick = t, $rw_event_stop();
    var r = new SpeechStream.SpeechRequest;
    r.setString(e, SpeechStream.SpeechRequestBookmarks.NONE);
    var n = r.getText()
      , a = r.getFinalText();
    rw_checkIfVoiceChanged(null), rw_playMessage(a, !g_bCacheUserText, n)
  }
}

function $rw_speak(e, t, r) {
  var n = (new Date)
    .getTime();
  if (!(n - g_nNavDoubleClickTime < g_nClickRejectTime))
    if (g_nNavDoubleClick = n, $rw_event_stop(), rw_checkIfVoiceChanged(null), r) {
      var a = new SpeechStream.SpeechRequest;
      a.setString(e, SpeechStream.SpeechRequestBookmarks.NONE);
      var o = a.getText()
        , i = a.getFinalText();
      rw_playMessage(i, t, o)
    } else rw_playMessage(e, t, e)
}

function rw_playMessage(e, t, r) {
  if ("boolean" == typeof eba_no_flash && eba_no_flash) return void rw_sendSocketMessage("THStart" + e + "THEnd");
  if (null == e && 0 == e.length) return void $rw_doSelection(-1);
  if (!g_bServerSupport) return void $rw_doSelection(-1);
  try {
    if (e.indexOf(NON_BREAKING_SPACE) > -1)
      for (var n = e.indexOf(NON_BREAKING_SPACE) > -1; n > -1;) e = e.replace(NON_BREAKING_SPACE, " "), n = e.indexOf(NON_BREAKING_SPACE, n + 1);
    if ("undefinded" == typeof r || null == r) r = e;
    else if (r.indexOf(NON_BREAKING_SPACE) > -1)
      for (var n = r.indexOf(NON_BREAKING_SPACE) > -1; n > -1;) r = r.replace(NON_BREAKING_SPACE, " "), n = r.indexOf(NON_BREAKING_SPACE, n + 1);
    var a = g_controllerFactory.getConnector();
    if (null != a)
      if (g_lastTarget && g_lastTarget.isRange() && (rw_setSpeakingModeFlag(!0), rw_setSpeakerFlag(!0), $rw_doSelection(0)), t && g_bSpeechCacheFlag && g_bCacheLiveGeneration) a.startSpeechFromBackup(e, !g_bLocalPronunciationLoaded), rw_startSpeechCallback();
      else if (SpeechStream.cacheMode.mode == SpeechStream.cacheMode.CACHE_ONLY) {
      var o, i = rw_getCachedSpeechFolderUrl()
        , l = rw_getHash(r);
      if (g_bSplitCachePath) {
        var s = rw_getSplitPathFromName(l);
        i = i + "/" + s, o = i + "/" + l
      } else o = i + "/" + l;
      a.startSpeechFromCache(o, e, !1), rw_startSpeechCallback()
    } else if (SpeechStream.cacheMode.mode == SpeechStream.cacheMode.CACHE_WITH_LIVE_SERVER) {
      var l, i = rw_getCachedSpeechFolderUrl();
      l = rw_getHash(SpeechStream.pronunciation.mode == SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER ? e : r);
      var o;
      if (g_bSplitCachePath) {
        var s = rw_getSplitPathFromName(l);
        i = i + "/" + s, o = i + "/" + l
      } else o = i + "/" + l;
      a.startSpeechFromCacheWithGen(o, e, i, l, !g_bLocalPronunciationLoaded), rw_startSpeechCallback()
    } else if (SpeechStream.cacheMode.mode == SpeechStream.cacheMode.CACHE_BUILDING_MODE) {
      var l, i = rw_getCachedSpeechFolderUrl();
      l = rw_getHash(SpeechStream.pronunciation.mode == SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER ? e : r);
      var o;
      if (g_bSplitCachePath) {
        var s = rw_getSplitPathFromName(l);
        i = i + "/" + s, o = i + "/" + l
      } else o = i + "/" + l;
      var c = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer() + "/";
      a.startSpeechGenerateCache(o, e, i, l, !g_bLocalPronunciationLoaded, c), rw_startSpeechCallback()
    } else a.startSpeech(e, !g_bLocalPronunciationLoaded), rw_startSpeechCallback()
  } catch (g) {
    thLogE(g)
  }
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
    null != r && (rw_setSpeakingModeFlag(!0), $rw_doSelection(0), r.startSpeechFromFile(e, t), rw_startSpeechCallback())
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
  if ($rw_isSpeaking()) {
    var e = (new Date)
      .getTime();
    if (e - g_nNavDoubleClickTime < g_nClickRejectTime) return;
    g_nNavDoubleClick = e;
    var t = g_controllerFactory.getConnector();
    null != t && (t.isPaused() ? t.resume() : t.pause())
  }
}

function $rw_event_funstop() {
  $rw_event_stop()
}

function $rw_event_stop() {
  if ("boolean" == typeof eba_no_flash && eba_no_flash && rw_sendSocketMessage("THStop"), g_bServerSupport) try {
    if (g_bBubbleMode && rw_hideStopBubble(), g_astrSpeechInstructionQueue.length = 0, g_nextTargetForContinuousReading = null, g_finalSentence = null, g_nTargetQueueTimerId > 0 && (clearTimeout(g_nTargetQueueTimerId), g_nTargetQueueTimerId = 0), g_aTargetQueue.length = 0, g_bHoverStep2Flag) return void setTimeout($rw_event_stop, 100);
    g_hoverTimeoutId1 > 0 && (clearTimeout(g_hoverTimeoutId1), g_hoverTimeoutId1 = 0), g_hoverTimeoutId2 > 0 && (clearTimeout(g_hoverTimeoutId2), g_hoverTimeoutId2 = 0), rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1);
    var e = g_controllerFactory.getConnector();
    null != e && e.stopSpeechAlt(), g_hoverTarget = null
  } catch (t) {
    thLogE(t)
  }
}

function $rw_event_stop_limited() {
  if (g_bServerSupport) try {
    g_astrSpeechInstructionQueue.length = 0, g_nextTargetForContinuousReading = null, rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1);
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
      null != t && (e = rw_getAllTextFromNode(t))
    } else e = rw_getSelectionNonParsed();
    if (null != e && (e = e.trimTH(), e.length > 0)) {
      if (e.length > g_nMP3Limit) return void alert("Too much text was selected for making an MP3 file, there is a " + g_nMP3Limit / 1024 + "k limit.");
      var r = g_controllerFactory.getConnector();
      if (null != r) {
        var n = '<br>The MP3 file for the text is being generated, <br> this could take some time depending on the amount of text selected.<br><p align="center"><img alt="loading" src="' + $g_strFileLoc + 'rwimgs/request-processing.gif"> </p>';
        rw_setPopupText(POPUP_DISPLAY, n), rw_showDiv(!0, POPUP_DISPLAY), r.getMP3File(e)
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
    if (top.frames.length > 0) {
      var t = 0
        , r = top.frames.length;
      for (t = 0; t < r; t++) try {
        var n = top.frames[t];
        if (e = n.document.selection.createRange(), null != e.text && e.text.length > 0) return !0
      } catch (a) {
        thLogE(a)
      }
    }
  } else {
    if (null !== g_selectionRange && window.getSelection()
      .addRange(g_selectionRange), null != window.getSelection() && !window.getSelection()
      .isCollapsed) return !0;
    if (top.frames.length > 0) {
      var t = 0
        , r = top.frames.length;
      for (t = 0; t < r; t++) try {
        if (null != top.frames[t].getSelection() && !top.frames[t].getSelection()
          .isCollapsed) return !0
      } catch (a) {
        thLogE(a)
      }
    }
  }
  return !1
}

function rw_getSelectionNonParsed() {
  var e = "";
  if (g_bIEOld) {
    var t = document.selection.createRange();
    if ((null == t.text || 0 == t.text.length) && top.frames.length > 0) {
      var r = 0
        , n = top.frames.length;
      for (r = 0; r < n; r++) try {
        var a = top.frames[r];
        if (t = a.document.selection.createRange(), null != t.text && t.text.length > 0) break
      } catch (o) {
        thLogE(o)
      }
    }
    e = t.text
  } else {
    null !== g_selectionRange && window.getSelection()
      .addRange(g_selectionRange);
    var i = window.getSelection();
    if (i.isCollapsed) {
      if (g_lastInputSelectSFF && g_lastInputSelectSFF.selectionStart != g_lastInputSelectSFF.selectionEnd) return g_lastInputSelectSFF.value.substring(g_lastInputSelectSFF.selectionStart, g_lastInputSelectSFF.selectionEnd);
      if (top.frames.length > 0) {
        var r = 0
          , n = top.frames.length;
        for (r = 0; r < n; r++) try {
          var l = top.frames[r].getSelection();
          if (null != l && !l.isCollapsed) {
            i = l;
            break
          }
        } catch (o) {
          thLogE(o)
        }
      }
    }
    e = i.isCollapsed ? "" : i.toString()
  }
  return e
}

function $rw_doSelection(e) {
  if (g_bIENew) var t = null;
  if (e < 0 ? (e == -2 && $rw_isSpeaking() && $rw_speechCompleteCallback(), rw_setSpeakingModeFlag(!1), rw_setSpeakerFlag(!1), rw_setSpeakingFlag(!1), g_bBubbleMode && rw_hideStopBubble()) : rw_setSpeakingFlag(!0), g_lastTarget && g_lastTarget.isRange() && e != g_nLastNodePosition)
    if (e == -1 || e == -2 || e == -3) {
      if (g_nLastNodePosition > -1 && null != g_lastTarget.wordNodes) try {
        var r = g_lastTarget.wordNodes
          , n = r.length;
        if (g_nLastNodePosition < n) {
          var a = r[g_nLastNodePosition].range;
          g_bIENew && (t = a.body);
          var o = rw_getCaretPairFromDomPosition(a.body, a.startRef.path, a.startRef.offset, a.endRef.path, a.endRef.offset)
            , i = o.leftCaret
            , l = o.rightCaret;
          null != i && null != l ? rw_removeSpeechHighlight(rw_getListOfHighlightableNodes(i, l), !0) : thLog("Cannot determine valid range to remove speech highlight from. " + i + " " + l)
        }
      } catch (s) {
        thLog("$rw_doSelection:clear last speech:" + s.toString())
      }
      g_nLastNodePosition = -1;
      try {
        g_lastTarget.unhighlightRange()
      } catch (s) {
        thLog("$rw_doSelection:unhighlightRange:" + s.message)
      }
    } else if (null != g_lastTarget.wordNodes) {
    if (g_nLastNodePosition == e) return;
    var r = g_lastTarget.wordNodes
      , n = r.length;
    try {
      if (g_nLastNodePosition > -1 && g_nLastNodePosition < n) {
        var a = r[g_nLastNodePosition].range
          , o = rw_getCaretPairFromDomPosition(a.body, a.startRef.path, a.startRef.offset, a.endRef.path, a.endRef.offset)
          , i = o.leftCaret
          , l = o.rightCaret;
        null != i && null != l ? rw_removeSpeechHighlight(rw_getListOfHighlightableNodes(i, l), !0) : thLog("Cannot determine valid range to remove speech highlight from. " + i + " " + l)
      }
    } catch (s) {
      thLogE(s)
    }
    if (e < 0 || e >= n) return;
    g_nLastNodePosition = e;
    var a = r[e].range;
    try {
      var o = rw_getCaretPairFromDomPosition(a.body, a.startRef.path, a.startRef.offset, a.endRef.path, a.endRef.offset)
        , i = o.leftCaret
        , l = o.rightCaret;
      if (null != i && null != l) {
        var c = rw_setSpeechRangeImpl(i.node, i.offset, l.node, l.offset, "csp");
        rw_scrollToObject(null != c && null != c.node ? c.node : i.node)
      } else thLog("Cannot determine valid range to add speech highlight from. " + i + " " + l)
    } catch (s) {
      thLog("error with highlight speech range in rw_doSelection:" + s.message)
    }
  }
  if ((e == -1 || e == -2 || e == -3) && (g_nLastNodePosition = -1, g_lastTarget = null, e == -1 && g_astrSpeechInstructionQueue.length > 0)) {
    g_astrSpeechInstructionQueue.shift();
    $rw_readNextTarget()
  }
  if (e == -3) {
    var g = g_controllerFactory.getConnector()
      , _ = g.getLastError()
      , u = "An error occurred with speech.  " + _;
    if (SpeechStream.actionOnError.action == SpeechStream.actionOnError.SKIP) {
      if (thLog(u), g_astrSpeechInstructionQueue.length > 0) {
        g_astrSpeechInstructionQueue.shift();
        $rw_readNextTarget()
      }
    } else rw_alert(u)
  }
}

function $displayMe(e) {
  rw_alert(e)
}

function rw_newWindow(e, t, r, n, a, o, i, l, s, c, g) {
  var _ = (screen.width - r) / 2
    , u = (screen.height - n) / 2
    , d = "height=" + n + ",width=" + r + ",top=" + u + ",left=" + _ + ",scrollbars=" + a + ",resizable=" + o + ",menubar=" + i + ",toolbar=" + l + ",location=" + s + ",statusbar=" + c + ",fullscreen=" + g
    , h = window.open(e, t, d);
  parseInt(navigator.appVersion) >= 4 && h.window.focus()
}

function rw_newTab(e, t) {
  var r = window.open(e, t);
  r.window.focus()
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
      if (parseInt(t.scrollHeight) >= 380) {
        var n = rw_getDomObject("rwTextCollect");
        n.style.height = 360
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
  rw_alert(e.tagName + "|" + e.nodeValue + "|" + rw_getPositionInDom(e))
}

function rw_doCallBack(p_strName) {
  if (null != p_strName) {
    var bMatch = !1
      , nLen = p_strName.length;
    nLen > 2 && (")" != p_strName.charAt(nLen - 1) && ");" != p_strName.substr(nLen - 2) || (bMatch = !0)), bMatch ? eval(p_strName) : eval(p_strName + "();")
  }
}

function rw_startSpeechCallback() {
  if ("string" == typeof eba_speech_started_callback) try {
    rw_doCallBack(eba_speech_started_callback.trimTH())
  } catch (e) {
    thLogE(e)
  }
}

function $rw_renderingSpeechCallback() {
  if ("string" == typeof eba_rendering_speech_callback) try {
    rw_doCallBack(eba_rendering_speech_callback.trimTH())
  } catch (e) {
    thLogE(e)
  }
}

function $rw_speechCompleteCallback() {
  if ("string" == typeof eba_speech_complete_callback) try {
    rw_doCallBack(eba_speech_complete_callback.trimTH())
  } catch (e) {
    thLogE(e)
  }
}

function rw_pageCompleteCallBack() {
  if ("boolean" == typeof eba_no_flash && eba_no_flash && rw_sendSocketMessage("THStop"), "string" == typeof eba_page_complete_callback) try {
    rw_doCallBack(eba_page_complete_callback.trimTH())
  } catch (e) {
    thLogE(e)
  }
}

function rw_stopContinuousCallBack() {
  if ("boolean" == typeof eba_no_flash && eba_no_flash && rw_sendSocketMessage("THStop"), "string" == typeof eba_onStopContinuous_callback) try {
    rw_doCallBack(eba_onStopContinuous_callback.trimTH())
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_calculator() {
  try {
    rw_setPopupText(POPUP_CALCULATOR, ""), rw_showDiv(!0, POPUP_CALCULATOR), rw_calClearMem(), rw_calAddDigit("0")
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_generate_cache() {
  try {
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
    $rwj.blockUI({
        message: '<div id="rwDragMeGenerateCache" class="rwToolbarCaptionGenerateCache" ignore> Reading Cache please wait...</div><br><span id="pb1" ignore>0%</span>'
      }), $rwj("#pb1")
      .progressBar(0), rw_checkAutogenCachedFiles()
  } catch (e) {
    $rwj.unblockUI(), thLogE(e)
  }
}

function textFromNodeTH(e) {
  var t = "";
  if (3 == e.nodeType) t = e.nodeValue;
  else if (1 == e.nodeType)
    for (var r = e.firstChild; null != r;) 3 == r.nodeType ? t += r.nodeValue : 1 == r.nodeType && (t += textFromNodeTH(r)), r = r.nextSibling;
  return t
}

function textFromFormTH(e) {
  var t = null
    , r = e.tagName.toLowerCase()
    , n = rw_getPositionInDom(e);
  if ("input" == r) {
    var a = e.getAttribute("type");
    null != a && (a = a.toLowerCase());
    var o = "";
    null == a || a.equalsTH("") || a.equalsTH("text") ? o = e.value : a.equalsTH("password") ? o = "Masked password field" : a.equalsTH("image") ? o = "" : (a.equalsTH("button") || a.equalsTH("submit") || a.equalsTH("reset")) && (o = e.getAttribute("value")), 0 == o.equalsTH("") && (t = "form:" + n + ";" + o)
  } else if ("select" == r) {
    for (var o = "", i = e.selectedIndex, l = "", s = 0; s < e.options.length; s++) l += e.options[s].text + " ";
    0 == l.equalsTH("") && (i > -1 ? (o = e.options[i].text, o += " selected from the list " + l) : o = "No selection from the list " + l, t = "form" + n + ";" + o)
  } else if ("textarea" == r) {
    var o = e.value;
    t = "form" + n + ";" + o
  } else if ("option" == r) {
    var o = e.value;
    t = "form" + n + ";" + o
  }
  return t
}

function reenableMouseOverTH(e) {
  e.setAttribute("onmouseover", "top.doMouseOverTH(event)")
}

function handleUnloadTH(e) {
  if (clearBrowserUnloadTH(), null != document.getElementsByTagName("frameset")
    .item(0)) {
    var t = document.getElementsByTagName("frameset")
      .item(0);
    t.removeAttribute("thSafariReaderDetails"), t.removeAttribute("thSafariReaderAutoDetails"), t.removeAttribute("thSafariReaderFlag")
  } else document.body.removeAttribute("thSafariReaderDetails"), document.body.removeAttribute("thSafariReaderAutoDetails"), document.body.removeAttribute("thSafariReaderFlag")
}

function loopThroughFramesTH(e, t) {
  var r = e.document;
  if (null != r) {
    var n = r.body;
    null != n && setupBodyTH(e, t + ".")
  }
  for (var a, o = e.frames.length, i = 0; i < o; i += 1) {
    var l = e.frames[i];
    a = t + ".frames[" + i + "]", loopThroughFramesTH(l, a)
  }
}

function setupBodyTH(e, t) {
  e.String.prototype.trimTH = function () {
    return this.replace(/^[\s\xA0]+/, "")
      .replace(/[\s\xA0]+$/, "")
  }, e.String.prototype.equalsTH = function (e) {
    if (this.length != e.length) return !1;
    for (var t = 0; t < this.length; t += 1)
      if (this.charAt(t) != e.charAt(t)) return !1;
    return !0
  };
  var r = e.document.body
    , n = r.getAttribute("onmouseover")
    , a = r.getAttribute("onclick")
    , o = r.getAttribute("onUnload");
  "function" == typeof n ? e.onmouseover = function (e) {
    n(e), top.doMouseOverTH(e)
  } : e.onmouseover = function (e) {
    top.doMouseOverTH(e)
  }, "function" == typeof a ? e.onclick = function (e) {
    a(e), top.doMouseClickTH(e)
  } : e.onclick = function (e) {
    top.doMouseClickTH(e)
  }, "function" == typeof o ? e.onunload = function () {
    o(), top.handleUnloadTH()
  } : e.onunload = function () {
    top.handleUnloadTH()
  };
  var i = t + "document.body";
  r.setAttribute("body_loc", i)
}

function getXOffset(e) {
  var t = 0;
  if (e)
    if (e.offsetParent)
      for (; e.offsetParent;) t += e.offsetLeft, e = e.offsetParent, null == e.offsetParent && (t += e.offsetLeft);
    else e.offsetLeft && (t += e.offsetLeft);
  return t
}

function getYOffset(e) {
  var t = 0;
  if (e)
    if (e.offsetParent)
      for (; e.offsetParent;) t += e.offsetTop, e = e.offsetParent, null == e.offsetParent && (t += e.offsetTop);
    else e.offsetTop && (t += e.offsetTop);
  return t
}

function clearBrowserUnloadTH() {
  if (setSpeechDetailsTH(""), setSpeechAutoDetailsTH(""), null != document.getElementsByTagName("frameset")
    .item(0)) clearFrameBrowserUnloadTH(top);
  else {
    var e = document.body;
    checkNodeUnloadTH(e)
  }
}

function clearFrameBrowserUnloadTH(e) {
  for (var t = e.frames.length, r = 0; r < t; r += 1) {
    var n = e.frames[r];
    0 == n.length ? (checkNodeUnloadTH(n.document.body), n.String.prototype.trimTH = function () {
      return this.replace(/^[\s\xA0]+/, "")
        .replace(/[\s\xA0]+$/, "")
    }, n.String.prototype.equalsTH = function (e) {
      if (this.length != e.length) return !1;
      for (r = 0; r < this.length; r += 1)
        if (this.charAt(r) != e.charAt(r)) return !1;
      return !0
    }) : loopThroughFramesTH(n)
  }
}

function checkNodeUnloadTH(e) {
  if (null != e && 1 == e.nodeType)
    if ("thtag" == e.tagName.toLowerCase() && "1" == e.getAttribute("started")) {
      var t = textFromNodeTH(e)
        , r = e.ownerDocument
        , n = r.createTextNode(t);
      e.parentNode.replaceChild(n, e)
    } else
      for (var a = e.firstChild; null != a;) {
        var o = a;
        a = a.nextSibling, checkNodeUnloadTH(o)
      }
}

function aa(e) {}

function llog(e) {
  var t = 150;
  if (e.length > t)
    for (; e.length > t;) {
      var r = e.substring(0, t);
      e = e.substring(t), thLog(r)
    } else thLog(e)
}

function rw_getListOfHighlightableNodes(e, t) {
  var r = g_bIgnoreHidden;
  g_bIgnoreHidden = !1;
  var n = new Array;
  try {
    var a = e.node
      , o = t.node;
    if (3 != a.nodeType)
      if (1 == a.nodeType && "math" == a.tagName.toLowerCase()) {
        if (n.push(a), a == o) return n;
        a = rw_getNextTextNode(a, !1, o)
      } else if (g_bIE && 1 == a.nodeType && null != a.firstChild && "math" == a.firstChild.tagName.toLowerCase()) {
      if (n.push(a.firstChild), a == o) return n;
      a = a.firstChild, a = rw_getNextTextNode(a, !1, o)
    } else if (a = rw_getFirstChildTextNode(a, !1), null == a) return n;
    if (a == o) {
      if (3 == a.nodeType) {
        var i = a.nodeValue;
        i.length > 0 && e.offset < i.length && t.offset > 0 && t.offset > e.offset && n.push(a)
      }
    } else {
      if (3 == a.nodeType) {
        var i = a.nodeValue;
        i.length > 0 && e.offset < i.length && n.push(a)
      } else 1 == a.nodeType && "math" == a.tagName.toLowerCase() ? n.push(a) : g_bIE && 1 == a.nodeType && null != a.firstChild && "math" == a.firstChild.tagName.toLowerCase() && (a = a.firstChild, n.push(a));
      for (var l = rw_getNextTextNodeNoImg(a, !1, o, !0); null != l;) {
        if (l == o) {
          if (3 == o.nodeType) {
            var i = o.nodeValue;
            i.length > 0 && t.offset > 0 && n.push(o)
          } else 1 == l.nodeType && "math" == l.tagName.toLowerCase() ? n.push(l) : g_bIE && 1 == l.nodeType && null != l.firstChild && "math" == l.firstChild.tagName.toLowerCase() && n.push(l.firstChild);
          break
        }
        n.push(l), l = rw_getNextTextNodeNoImg(l, !1, o, !0)
      }
    }
  } catch (s) {
    thLog("rw_setHighlight error:" + s.message)
  }
  return g_bIgnoreHidden = r, n
}

function rw_mergeTextNodes(e) {
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
}

function rw_getRangeFromSelectionPoint(e) {
  try {
    var t = e + "";
    t = t.trimTH(), e.collapseToStart();
    var r = e.anchorNode
      , n = e.anchorOffset;
    if (3 != r.nodeType ? (r = rw_getNextTextNodeNoBlank(r, !1, null), n = 0) : n == r.nodeValue.length && (r = rw_getNextTextNodeNoBlank(r, !1, null), n = 0), null != r && 3 == r.nodeType)
      for (var a = r.nodeValue.substring(n), o = a.trimStartTH(); a.length > o.length;) {
        if (0 == o.length) {
          if (r = rw_getNextTextNodeNoBlank(r, !1, null), n = 0, null == r || 3 != r.nodeType) break
        } else n += a.length - o.length;
        a = r.nodeValue.substring(n), o = a.trimStartTH()
      }
    var i = rw_getRangeObject();
    return null == r ? (i.setStart(e.anchorNode, e.anchorOffset), i.setEnd(e.anchorNode, e.anchorOffset)) : 3 != r.nodeType ? i = rw_getNodesForText(r, n, t) : n + t.length < r.nodeValue.length ? (i.setStart(r, n), i.setEnd(r, n + t.length)) : i = rw_getNodesForText(r, n, t), i
  } catch (l) {
    var i = rw_getRangeObject();
    return i.setStart(e.anchorNode, e.anchorOffset), i.setEnd(e.anchorNode, e.anchorOffset), i
  }
}

function rw_getNodesForText(e, t, r) {
  var n = rw_getRangeObject(e.ownerDocument.body);
  n.setStart(e, t), n.setEnd(e, t);
  for (var a = 0, o = r.length + t, i = e; null != i && a < o;) {
    if (3 == i.nodeType) {
      var l = i.nodeValue;
      a += l.length
    }
    if (a < o) i = rw_getNextTextNodeNoBlank(i, !1, null);
    else {
      var s = a - o;
      n.setEnd(i, i.nodeValue.length - s)
    }
  }
  return n
}

function rw_getSelectionObject() {
  var e = null;
  if (window.getSelection) {
    null !== g_selectionRange && window.getSelection()
      .addRange(g_selectionRange);
    var t = window.getSelection()
      , r = null;
    if (0 == t.isCollapsed) r = t;
    else if (top.frames.length > 0) {
      var n = 0
        , a = top.frames.length;
      for (n = 0; n < a; n++) try {
        if (null != top.frames[n].getSelection() && 0 == top.frames[n].getSelection()
          .isCollapsed) {
          r = top.frames[n].getSelection();
          break
        }
      } catch (o) {
        thLogE(o)
      }
    }
    if (null == r) return null;
    e = r
  } else if (document.selection) {
    var i = document.selection.createRange();
    if (i.text.length > 0) theWindow = window, e = i;
    else if (top.frames.length > 0) {
      var n = 0
        , a = top.frames.length;
      for (n = 0; n < a; n++) try {
        var l = top.frames[n];
        if (i = l.document.selection.createRange(), i.text.length > 0) {
          theWindow = l, e = i;
          break
        }
      } catch (o) {
        thLogE(o)
      }
    }
  }
  return e
}

function rw_getPageText() {
  var e = "";
  if (g_bIEOld) {
    var t = document.body.createTextRange();
    t.expand("textedit"), e = t.text
  } else {
    var t = document.createRange();
    t.setStartBefore(document.body), t.setEndAfter(document.body), e = t.toString()
  }
  return e
}

function rw_getTextFromElement(e) {
  return e.innerText ? e.innerText : e.textContent ? e.textContent : ""
}

function rw_getRangeObject(e) {
  if ("undefined" != typeof e && null != e || (e = document.body), g_bIEOld) return e.createTextRange();
  var t = e.ownerDocument;
  return t.createRange()
}

function rw_getBody(e) {
  return e.document ? e.document.body : e.ownerDocument.body
}

function rw_getWindow(e) {
  try {
    if (null == e) return window;
    if (0 === top.frames.length) return window;
    var t = e.ownerDocument.body
      , r = window.document.body;
    if (t === r) return window;
    var n = 0
      , a = top.frames.length;
    for (n = 0; n < a; n++) {
      var o = top.frames[n].document.body;
      if (o === t) return top.frames[n]
    }
  } catch (i) {
    thLog("Error rw_getWindow: " + i)
  }
  return window
}

function thLog(e) {
  window.console && window.console.log ? window.console.log(e) : "undefined" != typeof dump && dump(e + "\n")
}

function thLogE(e) {
  null != e && (e.name && e.message ? thLog("Error: " + e.name + ". : " + e.message) : e.message && thLog("Error: " + e.message))
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

function rw_isLetter(e) {
  return e > 64 && e < 91 || e > 96 && e < 123
}

function rw_isNumber(e) {
  return e > 47 && e < 58
}

function rw_isTextChar(e) {
  return e > 47 && e < 58 || e > 63 && e < 91 || e > 94 && e < 123
}

function rw_isSpeakableText(e) {
  var t = !1;
  if (e.length > 0)
    if (e.length > 2 && (t = !0), 2 == e.length) {
      var r = e.charCodeAt(0)
        , n = e.charCodeAt(1);
      r > 32 && r < 127 && n > 32 && n < 127 && (t = !0)
    } else {
      var r = e.charCodeAt(0);
      r > 32 && r < 127 && (t = !0)
    }
  return t
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
  var e = rw_getSelectionObject();
  null != e && (e.collapseToStart ? e.collapseToStart() : e.execCommand && e.execCommand("UnSelect", !1, null))
}

function rw_selectNode(e) {
  if (null != e)
    if (g_bIEOld) {
      var t = rw_getRangeObject(e.ownerDocument.body);
      t.moveToElementText(e), t.select()
    } else {
      var r = rw_getNextNodeIgnoreChildren(e, !1, null);
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
      , n = rw_getWindow(t.node);
    if (g_bSafari) n.getSelection()
      .setBaseAndExtent(t.node, t.offset, r.node, r.offset);
    else {
      var a = n.getSelection();
      a.collapse(t.node, t.offset), a.extend(r.node, r.offset)
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

function rw_checkText(e) {
  e = e.trimTH();
  var t, r = e.length;
  for (t = 0; t < r; t++) {
    var n = e.charCodeAt(t);
    if (n > 47 && n < 58 || n > 63 && n < 91 || n > 96 && n < 123 || 38 == n || 39 == n) return e
  }
  return ""
}

function rw_wordIsSpeakable(e) {
  var t, r = e.length
    , n = 0;
  for (n = 0; n < r; n++) {
    if (t = e.charCodeAt(n), t > 63 && t < 91 || t > 96 && t < 123 || t > 127 && 160 != t) return !0;
    if (t > 46 && t < 58) return !0;
    if (t > 35 && t < 39 || 43 == t || 61 == t) return !0;
    if (39 == t || 42 == t || 45 == t || 92 == t || t > 93 && t < 97)
      if (null != g_strAltVoice) {
        if ("VW Kate" != g_strAltVoice) return !0
      } else if ("VW Kate" != g_strVoice) return !0
  }
  return !(!g_bMathsSymbols || !rw_mathsSymbolCheck(e))
}

function rw_caretRangeIsSpeakable(e) {
  try {
    if (null == e || null == e.leftCaret || null == e.rightCaret) return !1;
    for (var t = e.leftCaret, r = e.rightCaret, n = t.node, a = r.node, o = !0, i = !1, l = n; null != l;) {
      if (i = rw_isSpecialCase(l), i || 3 == l.nodeType) {
        var s = rw_getTextFromNode(l);
        if (null != s && "" != s && (l == a && r.offset > -1 && (s = s.substring(0, r.offset)), l == n && t.offset > 0 && (s = s.substring(t.offset)), rw_wordIsSpeakable(s))) return !0
      }
      l = i ? rw_getNextNodeIgnoreChildren(l, !1, a) : o ? rw_getNextNodeAllowMoveToChild(l, !0, a) : rw_getNextNode(l, !1, a), o = !1
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
  return e ? g_bSSL || g_bSSLSpeech ? "https://" : "http://" : "chrome-extension://"
}

function rw_loadIcon(e, t, r, n) {
  var a = SpeechStream.enumIconParams
    , o = g_nIconCount;
  return g_icons[g_nIconCount] = new Array(5), g_icons[g_nIconCount][a.ICON_NAME] = e, g_icons[g_nIconCount][a.ICON_ALT_TEXT] = t, g_icons[g_nIconCount][a.ICON_OFFSET] = r, g_icons[g_nIconCount][a.ICON_IS_TOGGLE] = n, g_icons[g_nIconCount][a.ICON_TOGGLE_STATE] = !1, g_nIconCount++, o
}

function rw_getIconPosition(e) {
  var t = 0;
  for (t = 0; t < g_icons.length; t++)
    if (g_icons[t][SpeechStream.enumIconParams.ICON_NAME] == e) return t;
  return -1
}

function rw_addIcon(i) {
  var enumIcon = SpeechStream.enumIconParams
    , strName = g_icons[i][enumIcon.ICON_NAME]
    , strAlt = g_icons[i][enumIcon.ICON_ALT_TEXT]
    , nLeftOffset = g_icons[i][enumIcon.ICON_OFFSET]
    , bToggle = g_icons[i][enumIcon.ICON_IS_TOGGLE]
    , bToggleOnFromStart = !1;
  bToggle && "hover" == strName && "boolean" == typeof eba_initial_speech_on && eba_initial_speech_on && (g_icons[i][enumIcon.ICON_TOGGLE_STATE] = !0, bToggleOnFromStart = !0);
  var nWidth = 33;
  strName.equalsTH("submit") && (nWidth = 53), g_nBarWidth += nWidth;
  var spanObj = rw_addIconHtml(strName, "flat", strAlt, nWidth, nLeftOffset, !0, bToggleOnFromStart);
  return addEvent(spanObj, "mouseover", function () {
    g_bTouchScreen || g_icons[i][enumIcon.ICON_TOGGLE_STATE] || rw_mouseOverIcon(strName, i, bToggle)
  }), addEvent(spanObj, "mouseout", function () {
    g_icons[i][enumIcon.ICON_TOGGLE_STATE] || rw_mouseOffIcon(strName, i, bToggle)
  }), addEvent(spanObj, "mousedown", function () {
    g_bTouchScreen || g_icons[i][enumIcon.ICON_TOGGLE_STATE] || rw_press(strName, i, bToggle), g_strLastClicked = strName
  }), addEvent(spanObj, "mouseup", function () {
    if (g_strLastClicked.equalsTH(strName)) {
      if ($rw_blockClick(strName)) return !0;
      var str = "$rw_event_" + strName + "(null, " + i + ");";
      eval(str)
    }
    g_bTouchScreen || g_icons[i][enumIcon.ICON_TOGGLE_STATE] || rw_mouseOverIcon(strName, i, bToggle)
  }), addEvent(spanObj, "touchstart", function () {
    $rw_getTouchSelection()
  }), spanObj
}

function rw_addIconHtml(e, t, r, n, a, o, i) {
  var l = n * rw_getIconPosition(e)
    , s = 0;
  i && (s = 66);
  var c = {};
  c.ignore = "1", c.name = e + t, c.width = "" + n, c.height = "32", c.title = r, c.unselectable = "on", o ? c.style = "left:" + l + "px; background-position: -" + a + "px -" + s + "px;" : c.style = "left:" + l + "px; background-position: -" + a + "px -" + s + "px;";
  var g = rw_createObjectFromMap("span", c, e, null, !1);
  return g_bIE ? g.onselectstart = function () {
    return !1
  } : g.onmousedown = function () {
    return !1
  }, g
}

function rw_addDropDownList() {
  g_nBarWidth += 100, nLeftPosition = 33 * g_nIconCount;
  var e = {};
  e.ignore = "1", g_bIE ? e.style = "width:95px;position:relative;left:" + nLeftPosition + "px;top:6px;border: 1px solid;color:#000000;backgroundColor:#f1efe5" : e.style = "width:95px;position:relative;left:" + nLeftPosition + "px;top:6px;border: 1px solid;color:#000000;background-color:#f1efe5";
  var t = rw_createObjectFromMap("select", e, null, null, !0);
  addEvent(t, "change", function () {
    $rw_setSpeedValue(parseInt(t.value))
  });
  var r;
  e = {}, e.ignore = "1", e.value = "" + SLOW_SPEED, g_nSpeedValue != -3 && g_nSpeedValue != SLOW_SPEED || (e.selected = "1"), r = rw_createObjectFromMap("option", e, null, null, !0), r.innerHTML = "Slow";
  var n;
  e = {}, e.ignore = "1", e.value = "" + MEDIUM_SPEED, g_nSpeedValue != -2 && g_nSpeedValue != MEDIUM_SPEED || (e.selected = "1"), n = rw_createObjectFromMap("option", e, null, null, !0), n.innerHTML = "Medium";
  var a;
  return e = {}, e.ignore = "1", e.value = "" + FAST_SPEED, g_nSpeedValue != -1 && g_nSpeedValue != FAST_SPEED || (e.selected = "1"), a = rw_createObjectFromMap("option", e, null, null, !0), a.innerHTML = "Fast", t.appendChild(r), t.appendChild(n), t.appendChild(a), t
}

function rw_showSpeakerOnIcon(e, t) {
  if (null != t) {
    var r = document.images[e + t].style;
    r.visibility = "visible", r.display = "inline", r.width = "26px", r.maxwidth = "26px"
  }
  "off" != t && (document.images[e + "off"].style.visibility = "hidden", document.images[e + "off"].style.display = "none", document.images[e + "off"].style.width = "0px"), "on" != t && (document.images[e + "on"].style.visibility = "hidden", document.images[e + "on"].style.display = "none", document.images[e + "on"].style.width = "0px")
}

function rw_showAnIcon(e, t, r, n) {
  if (null != t) {
    var a = document.getElementById(e);
    "submit" == e ? a.width = "53px" : a.width = "33px"
  }
  "flat" == t && rw_setStyle(a, "backgroundPosition: -" + r + "px 0px;"), "hover" == t && rw_setStyle(a, "backgroundPosition: -" + r + "px -33px;"), "toggle" == t && rw_setStyle(a, "backgroundPosition: -" + r + "px -66px;"), "mask" == t && rw_setStyle(a, "backgroundPosition: -" + r + "px -99px;"), n && ("toggleOn" == t && rw_setStyle(a, "backgroundPosition: -" + r + "px -66px;"), "mask" == t && rw_setStyle(a, "backgroundPosition: -" + r + "px -99px;"))
}

function $rw_barInit() {
  if (rw_checkIfAllowed()) {
    if (rw_processParameters(), g_placeholderObj = rw_getPlaceholder(), "https:" === document.location.protocol && g_bAllowUserMessages && !1 === confirm("You are currently viewing a secure website. \r\nDo you wish to continue using Read&Write Web on this website?")) return !1;
    if (g_nCustId = parseInt(g_strCustId), g_nCustId >= 200 && g_nCustId < 300 && rw_initScholastic(), 300 == g_nCustId && rw_initCast(), g_nCustId >= 500 && g_nCustId < 600 && (g_bMcGrawHill = !0), g_nCustId >= 810 && g_nCustId < 820 && (g_bFLVS = !0), g_nCustId >= 1220 && g_nCustId < 1229 && (g_bMP = !0), SpeechStream.calculatePaths.initPaths(), document.documentElement.setAttribute("xmlns:texthelpns", ""), 0 == g_nIcons && (g_bUseBar = !1), g_bUseBar && rw_addMainCSS(), rw_createMainBar(), rw_createWebToSpeech(), rw_addEvents(), (g_nIcons & calculator_icon) == calculator_icon && $rw_barCalInit(), (g_nIcons & generatecache_icon) == generatecache_icon && $rw_barCacheInit(), (g_nIcons & dictionary_icon) == dictionary_icon || (g_nIcons & factfinder_icon) == factfinder_icon || (g_nIcons & translation_icon) == translation_icon) {
      var e = rw_createObject("script", ["type", "text/javascript", "src", $g_strFileLoc + "texthelpSearch.js"]);
      g_placeholderObj.appendChild(e)
    }
    if ((g_nIcons & highlightcyan_icon) == highlightcyan_icon || (g_nIcons & highlightgreen_icon) == highlightgreen_icon || (g_nIcons & highlightmagenta_icon) == highlightmagenta_icon || (g_nIcons & highlightyellow_icon) == highlightyellow_icon || (g_nIcons & collect_icon) == collect_icon || g_bPersistAnnotations) {
      var t = rw_createObject("script", ["type", "text/javascript", "src", $g_strFileLoc + "texthelpSS.js"]);
      g_placeholderObj.appendChild(t)
    }
    if ((g_nIcons & sticky_icon) == sticky_icon || g_bPersistAnnotations) {
      var r = rw_createObject("script", ["type", "text/javascript", "src", $g_strFileLoc + "texthelpSticky.js"]);
      g_placeholderObj.appendChild(r)
    }
    if ((g_nIcons & pronCreate_icon) == pronCreate_icon || (g_nIcons & pronEdit_icon) == pronEdit_icon) {
      var n = rw_createObject("script", ["type", "text/javascript", "src", $g_strFileLoc + "texthelpPron.js"]);
      g_placeholderObj.appendChild(n)
    }
    if ((g_nIcons & generatecache_icon) == generatecache_icon || (g_nIcons & checkcache_icon) == checkcache_icon) {
      var a = rw_createObject("script", ["type", "text/javascript", "src", $g_strFileLoc + "jquerycombined.js"]);
      g_placeholderObj.appendChild(a)
    }
    if (!g_bIE)
      for (var o = document.getElementsByTagName("input"), i = 0; i < o.length; i++) {
        var l = o.item(i)
          , s = l.getAttribute("type");
        null != s && "text" == s && addEvent(l, "mouseup", rw_inputHandlerSFF)
      }
    g_bBubbleMode && (g_bProquest || rw_initSpeechBubble()), "boolean" == typeof eba_initial_speech_on && eba_initial_speech_on && ($g_bMouseSpeech = !0, rw_setSpeakingModeFlag(!0), g_controllerFactory.enableTouchEvents(eba_initial_speech_on)), "string" == typeof eba_no_flash_error_msg && "" != eba_no_flash_error_msg && (g_strNoFlashErrorMsg = eba_no_flash_error_msg, g_bNoFlashConfirm = !0)
  }
}

function rw_checkIfAllowed() {
  var e = !1;
  return "undefined" != typeof BYPASS_BROWSER_CHECK && "y" == BYPASS_BROWSER_CHECK && (e = !0), "boolean" == typeof eba_bypass_dom_check && eba_bypass_dom_check && (e = !0, g_bProquest = !0), e || (e = rw_checkBrowser()), e
}

function rw_processParameters() {
  rw_readStandardParameters(), "undefined" != typeof pktTitleId && rw_checkPKTParameters()
    , "string" != typeof eba_annotate_storage_url && "string" != typeof eba_annotate_highlight_editor_id && "string" != typeof eba_annotate_note_editor_id || rw_checkAnnotateParameters(), g_nLanguage == SPANISH && "undefined" == typeof eba_voice && (g_strVoice = "ScanSoft Paulina_Full_22kHz"), "undefined" != typeof dtdType && (g_dtdType = dtdType, "xtran" == dtdType ? g_bXDTDType = !0 : "loose" == dtdType && (g_bLooseType = !0)), rw_autoCacheParameters()
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
    g_bSpeechStreamAutoCache = "true" == r.toLowerCase()
  }
  if (!g_bSpeechStreamAutoCache)
    if ("boolean" == typeof eba_autocache_check && eba_autocache_check) g_bSpeechStreamAutoCacheCheck = !0;
    else {
      var r = rw_readURLParameter(e, "speechstreamautocachecheck");
      g_bSpeechStreamAutoCacheCheck = "true" == r.toLowerCase()
    }
  if (g_bSpeechStreamAutoCache || g_bSpeechStreamAutoCacheCheck ? (g_nNoDisplayIcons |= generatecache_icon, g_nNoDisplayIcons |= checkcache_icon, g_controllerFactory.forceFlash()) : ("number" == typeof eba_icons && eba_icons > 0 && ((eba_icons & generatecache_icon) != generatecache_icon && (eba_icons & checkcache_icon) != checkcache_icon || g_controllerFactory.forceFlash()), "number" == typeof eba_no_display_icons && eba_no_display_icons > 0 && ((eba_no_display_icons & generatecache_icon) != generatecache_icon && (eba_no_display_icons & checkcache_icon) != checkcache_icon || g_controllerFactory.forceFlash())), "string" == typeof eba_autocache_callback) g_strSpeechStreamAutoCacheCallback = eba_autocache_callback;
  else {
    var r = rw_readURLParameter(e, "speechstreamautocachecallback");
    r.length > 0 && (r = decodeURIComponent(r), g_strSpeechStreamAutoCacheCallback = r)
  }
  "boolean" == typeof eba_autocache_allspeeds && (g_bAutoCacheAllSpeeds = eba_autocache_allspeeds)
}

function rw_readURLParameter(e, t) {
  var r, n, a, o = ""
    , i = t + "="
    , l = i.length;
  for (r = e.indexOf(i); r > 0;) {
    if (a = e.charAt(r - 1), "?" == a || "&" == a) {
      n = e.indexOf("&", r + l);
      var o;
      o = n == -1 ? e.substr(r + l) : e.substring(r + l, n);
      break
    }
    r = e.indexOf(i, r + 1)
  }
  return o
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
    $g_strFileLoc = e.length > 0 ? n + e + "/" : n, g_strSwfLoc = g_strWebToSpeechFolder;
    try {
      var t = new String(document.location);
      "file" == t.substring(0, 4) && ($g_strFileLoc = "", g_strSwfLoc = "")
    } catch (r) {
      thLogE(r)
    }
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
  var e, t = rw_createBarBody();
  if (g_nBarWidth > 0) {
    g_bUseContainer ? g_bFireFox ? (g_bWorkaroundFirefoxSwf = !0, e = rw_createObject("div", ["rwTHComp", "1", "style", "visibility:hidden;display:none"], "rwDrag")) : e = rw_createObject("div", ["rwTHComp", "1", "style", "position:relative;visibility:hidden;display:none"], "rwDrag") : e = rw_createObject("div", ["rwTHComp", "1", "style", "visibility:hidden;display:none"], "rwDrag");
    var r = rw_createBarOutline();
    g_bNoTitleBar || r.appendChild(rw_createBarHeader()), r.appendChild(t), e.appendChild(r)
  } else {
    e = rw_createObject("div", ["rwTHComp", "1", "visibility", "hidden"], "rwDrag");
    var r = rw_createObject("div", ["rwTHComp", "1", "visibility", "hidden"], "rwDrag");
    e.appendChild(r)
  }
  g_placeholderObj.appendChild(e)
}

function rw_createWebToSpeech() {
  var e = document.getElementById("WebToSpeech");
  null == e && (e = document.createElement("span"), e.id = "WebToSpeech", g_placeholderObj.appendChild(e)), rw_createSwfObject(SpeechStream.calculatePaths.getServerUrl(), SpeechStream.calculatePaths.getSpeechServerUrl(), SpeechStream.calculatePaths.getSpeechServerUrlBackup())
}

function $rw_barDynamicStart() {
  g_bDynamicLoading = !0
}

function rw_getPlaceholder() {
  var e;
  if (e = document.getElementById("speechStreamPlaceholder"), null == e)
    if (g_bDynamicLoading) e = document.body;
    else if (g_bUseContainer) {
    for (var t, r = document.body; null != r;) null != r && 1 == r.nodeType && (t = r), r = r.lastChild;
    if (t == document.body) e = t;
    else {
      var n = t.parentNode
        , a = document.createElement("span");
      a.id = "speechStreamPlaceholder", n.insertBefore(a, t), e = a
    }
  } else e = document.body;
  return e
}

function rw_addMainCSS() {
  if (g_bMcGrawHill) BetterInnerHTML(document.body, '<link href="' + $g_strFileLoc + 'rwMain500Bar.css" type="text/css" rel="stylesheet" />', !1);
  else {
    var e = g_nIcons;
    g_nDisplayIcons != -1 && (e = g_nDisplayIcons);
    var t = clicktospeak_icon + play_icon + pause_icon;
    if ((e | t) == t) BetterInnerHTML(document.body, '<link href="' + $g_strFileLoc + 'rwMainTHSpeechBar.css" type="text/css" rel="stylesheet" />', !1);
    else {
      var r = t + search_icons + picturedictionary_icon;
      (e | r) == r ? BetterInnerHTML(document.body, '<link href="' + $g_strFileLoc + 'rwMainTHSearchBar.css" type="text/css" rel="stylesheet" />', !1) : BetterInnerHTML(document.body, '<link href="' + $g_strFileLoc + 'rwMainTHFullBar.css" type="text/css" rel="stylesheet" />', !1)
    }
  }
}

function rw_createBarOutline() {
  var e, t = "width:" + g_nBarWidth + "px;visibility:hidden;";
  (g_bHiddenBar || g_bNoTitleBar) && (t += "display:none;");
  var r = {};
  return r.style = t, e = g_bNoTitleBar ? rw_createObjectFromMap("div", r, "rwMainOutline", null) : rw_createObjectFromMap("div", r, "rwMainOutline", "rwToolbarOutline")
}

function rw_createBarHeader() {
  var e, t, r;
  null == eba_logo_url ? g_bMcGrawHill || g_bPktFlag ? (t = "", r = null) : (t = eba_click_here_text + " www.texthelp.com", r = "www.texthelp.com") : "none" == eba_logo_url ? (t = "", r = null) : (t = eba_click_here_text + " " + eba_logo_url, r = eba_logo_url, "http://" == r.substr(0, 7) ? r = r.substr(7) : "https://" == r.substr(0, 8) && (r = r.substr(8))), e = rw_createObject("div", null, "rwDragMe", "rwToolbarCaption");
  var n;
  if (null == r) attrMap = {}, attrMap.border = "0", attrMap.ignore = "1", attrMap.align = "right", g_bMcGrawHill ? (attrMap.src = $g_strFileLoc + "rwimgs500/logo500.gif", attrMap.style = "margin: 5px; cursor:default;") : (attrMap.src = $g_strFileLoc + "rwimgs/logo.gif", attrMap.style = "cursor:default"), attrMap.title = "", attrMap.alt = "", n = rw_createObjectFromMap("img", attrMap, null, null), e.appendChild(n);
  else {
    attrMap = {}, attrMap.border = "0", attrMap.ignore = "1", attrMap.align = "right", g_bMcGrawHill ? (attrMap.src = $g_strFileLoc + "rwimgs500/logo500.gif", attrMap.style = "margin: 5px;") : attrMap.src = $g_strFileLoc + "rwimgs/logo.gif", attrMap.title = t, attrMap.alt = t, n = rw_createObjectFromMap("img", attrMap, null, null);
    var a;
    attrMap = {}, attrMap.href = rw_getHTTPText(!1) + r, attrMap.target = "new", g_bSafari || (attrMap.style = "cursor:hand"), a = rw_createObjectFromMap("a", attrMap, null, null), a.appendChild(n), e.appendChild(a)
  }
  return e
}

function rw_createBarBody() {
  var e;
  e = g_bNoTitleBar ? rw_createObject("div", null, null, "rwToolbarBarNoBorder") : rw_createObject("div", null, null, "rwToolbarBar");
  var t = rw_createObject("div", null, "rwToolbarList", null);
  $rw_setIconsToLoad(g_nIcons);
  for (var r = !1, n = 0; n < g_nIconCount; n++) r = !0, t.appendChild(rw_addIcon(n));
  return (g_nIcons & selectSpeed_icon) == selectSpeed_icon && (r = !0, t.appendChild(rw_addDropDownList())), r && g_nBarWidth < 110 ? g_nBarWidth = 110 : r || (g_nBarWidth = 0), e.appendChild(t), e
}

function rw_createSwfObject(e, t, r) {
  var n = {};
  null != g_strLoginName && null != g_strLoginPassword && (n.userName = g_strLoginName, n.userPassword = g_strLoginPassword), n.lessonServerLoc = e, n.speechServerLoc = t, n.speedValue = g_nSpeedValue, g_nSpeechStreamServerVersion >= 3 && (n.useServices = "true"), null != g_strTranslateServer && (n.translateServerLoc = g_strTranslateServer), null != g_strDictionaryServer && (n.dictionaryServerLoc = g_strDictionaryServer), null != g_strImageDictionaryServer && (n.imagedictionaryServerLoc = g_strImageDictionaryServer), (g_bSpeechCacheGenerateFlag || g_bSpeechCacheFlag) && (n.cacheMode = "true", null != r && (n.cacheLiveFallover = "true")), null != r && (n.speechServerBackupLoc = r), null != g_strCustId && null != g_strBookId && null != g_strPageId && (n.custID = g_strCustId, n.bookID = g_strBookId, n.pageID = g_strPageId), g_nCacheRetry > -1 && (n.cacheCount = g_nCacheRetry), g_nCacheRetryTimeout > -1 && (n.cacheTimeDelay = g_nCacheRetryTimeout), n.locale = g_strLocale, n.speechName = g_strVoice, null != g_strSearchSpeechServer && null != g_strReplaceSpeechServer && (n.searchString = g_strSearchSpeechServer, n.replaceString = g_strReplaceSpeechServer), null == g_strSwfLoc || "" == g_strSwfLoc ? g_strSwfLoc = rw_getHTTPText(!1) + g_strServer + "/" : "." == g_strSwfLoc.charAt(0) ? "/" != g_strSwfLoc.charAt(g_strSwfLoc.length - 1) && (g_strSwfLoc = g_strServer + "/") : ("/" != g_strSwfLoc.charAt(0) && (g_strSwfLoc = "/" + g_strSwfLoc), "/" != g_strSwfLoc.charAt(g_strSwfLoc.length - 1) && (g_strSwfLoc += "/"), g_strSwfLoc = rw_getHTTPText(!1) + g_strServer + g_strSwfLoc), g_bSSL ? (n.SSLSpeech = "true", n.SSLToolbar = "true") : (g_bSSLSpeech && (n.SSLSpeech = "true"), g_bSSLToolbar && (n.SSLToolbar = "true")), g_bIE && (g_bSSL || g_bSSLSpeech) && (n.IESSL = "true"), g_nDisplayIcons = g_nIcons, g_nIcons |= g_nNoDisplayIcons, ((g_nIcons & pronCreate_icon) == pronCreate_icon || (g_nIcons & pronEdit_icon) == pronEdit_icon || g_bCacheBuster) && (n.cacheBuster = "true");
  var a = {};
  if (a.allowScriptAccess = "always", a.movie = g_strSwfLoc + "WebToSpeech" + g_strClientVersion + ".swf", a.quality = "high", a.bgcolor = "#ffffff", SpeechStream.m_flashVars = n, g_controllerFactory.doesSupportHtml5()) g_controllerFactory.getConnector()
    .initialise(n, e, t, r);
  else try {
    g_bIE9 && (g_strAmp = "&amp;"), swfobject.embedSWF(g_strSwfLoc + "WebToSpeech" + g_strClientVersion + ".swf?t=" + (new Date)
      .getTime(), "WebToSpeech", "1", "1", "9.0.0", !1, n, a)
  } catch (o) {
    g_strAmp = "&amp;", swfobject.embedSWF(g_strSwfLoc + "WebToSpeech" + g_strClientVersion + ".swf?t=" + (new Date)
      .getTime(), "WebToSpeech", "1", "1", "9.0.0", !1, n, a)
  }
}

function rw_checkBrowser() {
  var e = !1
    , t = navigator.userAgent.toLowerCase();
  if (t.indexOf("msie 6") > -1) e = !0;
  else if (t.indexOf("msie 7") > -1) e = !0;
  else if (t.indexOf("msie 8") > -1) e = !0;
  else if (t.indexOf("msie 9") > -1) e = !0;
  else if (t.indexOf("msie 10") > -1) e = !0;
  else if (t.indexOf("safari") > -1) {
    e = !0;
    var r = navigator.appVersion
      , n = r.lastIndexOf("/");
    r = r.substring(n + 1);
    try {
      var a = parseFloat(r);
      a < 300 && rw_alert("You are using an older version of Safari that is not support by the embedded bar in this page.  The bar may not work at all or work erratically, it is recommended that you upgrade to the latest version of Safari.")
    } catch (o) {
      thLogE(o)
    }
  } else if (t.indexOf("firefox") > -1) {
    e = !0;
    var i = t.indexOf("firefox") + 8;
    if (i < t.length) {
      var l = t.substr(i)
        , s = l.substr(0, l.indexOf("."));
      try {
        var c = parseInt(s);
        if (c < 2) {
          if (1 == c) {
            l = l.substr(s.length + 1);
            var g = l.substr(0, l.indexOf("."));
            c = parseInt(g)
          } else c = 0;
          c < 5 && rw_alert("You are using an older version of Firefox that is not support by the embedded bar in this page.  The bar may not work at all or work erratically, it is recommended that you upgrade to the latest version of Firefox.")
        }
      } catch (o) {
        thLogE(o)
      }
    }
  } else if (t.indexOf("ipad") > -1 || t.indexOf("ipod") > -1 || t.indexOf("iphone") > -1) e = !0;
  else {
    var _ = navigator.platform;
    rw_alert(_.indexOf("mac") > -1 ? "The browser you are using is not supported by the embedded bar that should be displayed in this page.  To view this page with the bar displayed please use Firefox (version 2.0.0.1 or later)." : "The browser you are using is not supported by the embedded bar that should be displayed in this page.  To view this page with the bar displayed please use either Firefox (version 2.0.0.1 or later) or Internet Explorer (version 7 or later).")
  }
  return e
}

function rw_readStandardParameters() {
  "boolean" == typeof eba_use_container && (g_bUseContainer = eba_use_container), "boolean" == typeof eba_allow_alerts_flag && (g_bAllowAlertsFlag = eba_allow_alerts_flag), "boolean" == typeof eba_alerts && (g_bAllowAlertsFlag = eba_alerts), "boolean" == typeof eba_userMessges && (g_bAllowUserMessages = eba_userMessges), "boolean" == typeof eba_no_title && (g_bNoTitleBar = eba_no_title), "boolean" == typeof eba_noTitleFlag && (g_bNoTitleBar = eba_noTitleFlag), "boolean" == typeof eba_hidden_bar && (g_bHiddenBar = eba_hidden_bar), "boolean" == typeof eba_continuous_reading && (g_bContinuousReading = eba_continuous_reading, g_bContinuousReading || (g_bSpeechSelectionBySentence = !1)), "boolean" == typeof eba_ignore_buttons && (g_bIgnoreButtons = eba_ignore_buttons), "boolean" == typeof eba_speak_selection_by_sentence && (g_bSpeechSelectionBySentence = !!g_bContinuousReading && eba_speak_selection_by_sentence), "boolean" == typeof eba_page_complete_after_selection && (g_bCallPageCompleteOnSelectionEnd = eba_page_complete_after_selection), "boolean" == typeof eba_speechCacheGenerateFlag && (g_bSpeechCacheGenerateFlag = eba_speechCacheGenerateFlag, g_bSpeechCacheGenerateFlag && (SpeechStream.cacheMode.mode = SpeechStream.cacheMode.CACHE_BUILDING_MODE)), "boolean" == typeof eba_cache_building_mode && (g_bSpeechCacheGenerateFlag = eba_cache_building_mode, g_bSpeechCacheGenerateFlag && (SpeechStream.cacheMode.mode = SpeechStream.cacheMode.CACHE_BUILDING_MODE));
  var e = !1;
  "boolean" == typeof eba_speechCacheFlag && (g_bSpeechCacheFlag = eba_speechCacheFlag, e = !0), "boolean" == typeof eba_speech_cache_flag && (g_bSpeechCacheFlag = eba_speech_cache_flag, e = !0), "boolean" == typeof eba_cache_mode && (g_bSpeechCacheFlag = eba_cache_mode, e = !0), e && g_bSpeechCacheFlag && (SpeechStream.cacheMode.mode = SpeechStream.cacheMode.CACHE_ONLY), "boolean" == typeof eba_cache_live_generation && (g_bCacheLiveGeneration = eba_cache_live_generation, g_bCacheLiveGeneration && (SpeechStream.cacheMode.mode = SpeechStream.cacheMode.CACHE_WITH_LIVE_SERVER)), "boolean" == typeof eba_split_cache_path && (g_bSplitCachePath = eba_split_cache_path), "boolean" == typeof eba_autoCachePage && (g_bAutoCachePage = eba_autoCachePage), "boolean" == typeof eba_voice_from_lang_flag && (g_bVoiceFromLangFlag = eba_voice_from_lang_flag), "boolean" == typeof eba_bubble_mode && (g_bBubbleMode = eba_bubble_mode), "boolean" == typeof eba_bubble_freeze_on_shift_flag && (g_bBubbleFreezeOnShiftFlag = eba_bubble_freeze_on_shift_flag), "boolean" == typeof eba_hover_flag && (g_bOnClick = !eba_hover_flag), "boolean" == typeof eba_ssl_flag && (g_bSSL = eba_ssl_flag, g_bSSLSpeech = g_bSSL, g_bSSLToolbar = g_bSSL), "boolean" == typeof eba_ssl_speech && (g_bSSLSpeech = eba_ssl_speech), "boolean" == typeof eba_ssl_toolbar && (g_bSSLToolbar = eba_ssl_toolbar), "boolean" == typeof eba_clientside_pronunciation ? eba_clientside_pronunciation ? "boolean" == typeof eba_check_pronunciation_before_cache && eba_check_pronunciation_before_cache ? SpeechStream.pronunciation.mode = SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER : SpeechStream.pronunciation.mode = SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_OFFLINE_CACHE : SpeechStream.pronunciation.mode = SpeechStream.pronunciation.SERVER_PRONUNCIATION : "boolean" == typeof eba_check_pronunciation_before_cache && (eba_check_pronunciation_before_cache ? SpeechStream.pronunciation.mode = SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER : SpeechStream.pronunciation.mode = SpeechStream.pronunciation.SERVER_PRONUNCIATION), "boolean" == typeof eba_alter_browser_for_consistency && (g_bAlterBrowserForConsistency = eba_alter_browser_for_consistency), "boolean" == typeof eba_cache_selection && (g_bCacheSelection = eba_cache_selection), "boolean" == typeof eba_cache_user_text && (g_bCacheUserText = eba_cache_user_text), "boolean" == typeof eba_skip_on_error && eba_skip_on_error && (SpeechStream.actionOnError.action = SpeechStream.actionOnError.SKIP), "boolean" == typeof eba_cache_buster && eba_cache_buster && (g_bCacheBuster = !0), "boolean" == typeof eba_handle_radio_checkbox_click && eba_handle_radio_checkbox_click && (g_bTakeClickOnRadioBox = !0), "boolean" == typeof eba_inline_img && (g_bInlineImg = eba_inline_img), "boolean" == typeof eba_ignore_hidden && (g_bIgnoreHidden = eba_ignore_hidden), "boolean" == typeof eba_limit_cookies && (g_bLimitCookies = eba_limit_cookies), "boolean" == typeof eba_math && (g_bMathsSymbols = eba_math), "boolean" == typeof eba_maths && (g_bMathsSymbols = eba_maths), "number" == typeof eba_icons && (g_nIcons = eba_icons), "number" == typeof eba_no_display_icons && (g_nNoDisplayIcons = eba_no_display_icons), "number" == typeof eba_language && (g_nLanguage = eba_language, 3 == g_nLanguage ? g_nLanguage = 2 : 8 != g_nLanguage && 9 != g_nLanguage && 12 != g_nLanguage && (g_nLanguage = 0), g_bVoiceFromLangFlag && eba_language >= 0 && eba_language < DEFAULT_VOICE_ARRAY.length && (g_strVoice = DEFAULT_VOICE_ARRAY[eba_language])), "number" == typeof eba_speedValue && (g_nSpeedValue = eba_speedValue), "number" == typeof eba_speed_value && (g_nSpeedValue = eba_speed_value), "number" == typeof eba_reading_age && $rw_setReadingAge(eba_reading_age), "number" == typeof eba_speed_offset && (g_nSpeedValue += eba_speed_offset), "number" == typeof eba_cache_retry && (g_nCacheRetry = eba_cache_retry), "number" == typeof eba_cache_retry_timeout && (g_nCacheRetryTimeout = eba_cache_retry_timeout), "number" == typeof eba_mp3_limit && (g_nMP3Limit = eba_mp3_limit < 1e3 ? 1024 * g_nMP3Limit : eba_mp3_limit), MAX_WORDCOUNT_TO_SPEAK = eba_max_word_count, g_dateFilter.setMode(eba_date_filter_mode), "string" == typeof eba_server_version && (g_strServerVersion = eba_server_version), "string" == typeof eba_serverVersion && (g_strServerVersion = eba_serverVersion), "string" == typeof eba_client_version && "latest" != eba_client_version && (g_strClientVersion = eba_client_version), "string" == typeof eba_clientVersion && "latest" != eba_clientVersion && (g_strClientVersion = eba_clientVersion), "string" == typeof eba_server && (g_strServer = eba_server, g_strServer.length > 6 && "http://" == g_strServer.substring(0, 7) ? g_strServer = g_strServer.substring(7) : g_strServer.length > 7 && "https://" == g_strServer.substring(0, 8) && (g_strServer = g_strServer.substring(8))), "string" == typeof eba_speech_server && (g_strSpeechServer = eba_speech_server), "string" == typeof eba_speechServer && (g_strSpeechServer = eba_speechServer), "string" == typeof eba_speech_server_backup && (g_strSpeechServerBackup = eba_speech_server_backup), "string" == typeof eba_speechServerBackup && (g_strSpeechServerBackup = eba_speechServerBackup), "string" == typeof eba_translate_server && (g_strTranslateServer = eba_translate_server), "string" == typeof eba_dictionary_server && (g_strDictionaryServer = eba_dictionary_server), "string" == typeof eba_image_dictionary_server && (g_strImageDictionaryServer = eba_image_dictionary_server);
  var t = !1
    , r = null;
  if (null != g_strSpeechServer && "webappspeech.texthelp.com" == g_strSpeechServer ? (t = !0, r = g_strSpeechServer) : null != g_strSpeechServerBackup && "webappspeech.texthelp.com" == g_strSpeechServerBackup && (t = !0, r = g_strSpeechServerBackup), t && (null != g_strServerVersion && "latest" != g_strServerVersion ? (parseInt(g_strServerVersion) > 181 && null == g_strTranslateServer && (g_strTranslateServer = r), parseInt(g_strServerVersion) > 181 && null == g_strDictionaryServer && (g_strDictionaryServer = r)) : "latest" == g_strServerVersion && (null == g_strTranslateServer && (g_strTranslateServer = r), null == g_strDictionaryServer && (g_strDictionaryServer = r))), "string" == typeof eba_folder && (g_strSourceFolder = eba_folder), "string" == typeof eba_client_folder && (g_strWebToSpeechFolder = eba_client_folder), "string" == typeof eba_clientFolder && (g_strWebToSpeechFolder = eba_clientFolder), "string" == typeof eba_voice && (g_strVoice = eba_voice, null != g_controllerFactory && null != g_controllerFactory.getConnector() && g_controllerFactory.getConnector()
      .setVoiceName && g_controllerFactory.getConnector()
      .setVoiceName(g_strVoice), "ScanSoft Daniel_Full_22kHz" == g_strVoice ? DEFAULT_VOICE_ARRAY[ENG_UK] = g_strVoice : "ScanSoft Tom_Full_22kHz" == g_strVoice ? DEFAULT_VOICE_ARRAY[ENG_US] = g_strVoice : "ScanSoft Jill_Full_22kHz" == g_strVoice && (DEFAULT_VOICE_ARRAY[ENG_US] = g_strVoice)), "string" == typeof eba_custId && (g_strCustId = eba_custId), "string" == typeof eba_cust_id && (g_strCustId = eba_cust_id), "string" == typeof eba_bookId && (g_strBookId = eba_bookId), "string" == typeof eba_book_id && (g_strBookId = eba_book_id), "string" == typeof eba_pageId && (g_strPageId = eba_pageId), "string" == typeof eba_page_id && (g_strPageId = eba_page_id), null != g_strCustId && 0 != g_strCustId.length && null != g_strBookId && 0 != g_strBookId.length && null != g_strPageId && 0 != g_strPageId.length || (SpeechStream.pronunciation.mode = SpeechStream.pronunciation.NONE, SpeechStream.cacheMode.mode = SpeechStream.cacheMode.NONE), "string" == typeof eba_loginName && (g_strLoginName = eba_loginName), "string" == typeof eba_login_name && (g_strLoginName = eba_login_name), "string" == typeof eba_loginPassword || "string" == typeof eba_login_password ? ("string" == typeof eba_loginPassword && (g_strLoginPassword = eba_loginPassword), "string" == typeof eba_login_password && (g_strLoginPassword = eba_login_password)) : g_strLoginPassword = g_strLoginName, "string" == typeof eba_locale && (g_strLocale = eba_locale), "string" == typeof eba_speech_range_colors && (g_strSpeechRangeColours = eba_speech_range_colors), "string" == typeof eba_speech_range_colours && (g_strSpeechRangeColours = eba_speech_range_colours), "string" == typeof eba_speech_word_colors && (g_strSpeechWordColours = eba_speech_word_colors), "string" == typeof eba_speech_word_colours && (g_strSpeechWordColours = eba_speech_word_colours), "string" == typeof eba_mp3_id && (g_mp3Id = eba_mp3_id), "string" == typeof eba_search_speech_server && (g_strSearchSpeechServer = eba_search_speech_server), "string" == typeof eba_replace_speech_server && (g_strReplaceSpeechServer = eba_replace_speech_server), "string" == typeof eba_play_start_point && (g_strPlayStartPoint = eba_play_start_point), "string" == typeof eba_speech_stream_server_version || "integer" == typeof eba_speech_stream_server_version)
    if ("integer" == typeof eba_speech_stream_server_version) g_nSpeechStreamServerVersion = eba_speech_stream_server_version;
    else try {
      g_nSpeechStreamServerVersion = parseInt(eba_speech_stream_server_version)
    } catch (n) {} else "810" == eba_cust_id && (g_nSpeechStreamServerVersion = 3);
    "string" == typeof eba_symbol_text && rw_mathsMappingSetup(eba_symbol_text), "boolean" == typeof eba_noScrolling && (g_noScrolling = eba_noScrolling)
}

function rw_checkAnnotateParameters() {
  return null == g_strBookId ? void rw_alert("Persistent annotations is enabled but no book id was provided, this feature will not work in this page.") : null == g_strPageId ? void rw_alert("Persistent annotations is enabled but no page id was provided, this feature will not work in this page.") : (g_bPersistAnnotations = !0, "string" == typeof eba_annotate_note_editor_id && (g_strPersistNoteEditorId = eba_annotate_note_editor_id), "string" == typeof eba_annotate_highlight_editor_id && (g_strPersistHighlightEditorId = eba_annotate_highlight_editor_id), "string" == typeof eba_annotate_note_reader_id && (g_strPersistNoteReaderId = eba_annotate_note_reader_id), "string" == typeof eba_annotate_highlight_reader_id && (g_strPersistHighlightReaderId = eba_annotate_highlight_reader_id), "boolean" == typeof eba_annotate_persist_notes && "*" != g_strPersistNoteEditorId && (g_bPersistNotes = eba_annotate_persist_notes), "boolean" == typeof eba_annotate_persist_highlights && "*" != g_strPersistHighlightEditorId && (g_bPersistHighlights = eba_annotate_persist_highlights), "string" == typeof eba_annotate_storage_url ? (g_strPersistStorageUrl = eba_annotate_storage_url, "undefined" == typeof eba_server && (g_strServer = g_strPersistStorageUrl)) : g_strPersistStorageUrl = g_bSpeechCacheFlag ? null != g_strSpeechServerBackup ? g_strSpeechServerBackup : g_strServer : g_strSpeechServer, "boolean" == typeof eba_annotate_confirm_delete_note && (g_bPersistConfirmOnDelete = eba_annotate_confirm_delete_note), void(g_bPersistNotes && (g_nIcons & sticky_icon) != sticky_icon && (g_nIcons += sticky_icon)))
}

function rw_checkPKTParameters() {
  g_bPktFlag = !0, g_bPersistAnnotations = !0, "boolean" == typeof pktIsTeacher && (g_bPersistNotes = pktIsTeacher), "string" == typeof pktTitleId && (g_strBookId = pktTitleId), "string" == typeof pktPageId && (g_strPageId = pktPageId), "string" == typeof pktStudentId && (g_bPersistNotes || (g_bPersistHighlights = !0), g_strPersistHighlightEditorId = pktStudentId, g_strPersistNoteReaderId = pktStudentId), "string" == typeof pktTeacherId && (g_strPersistNoteEditorId = pktTeacherId, g_strPersistHighlightReaderId = pktTeacherId), "string" == typeof pktStorageUrl ? (g_strPersistStorageUrl = pktStorageUrl, "undefined" == typeof eba_server && (g_strServer = g_strPersistStorageUrl)) : g_strPersistStorageUrl = g_strServer, "string" == typeof pktSpeechServerUrl && (g_strSpeechServer = pktSpeechServerUrl), "string" == typeof pktVoice && (g_strVoice = pktVoice), "string" == typeof pktCustCode && (g_strPersistCustCode = pktCustCode), "boolean" == typeof pktConfirmOnDelete && (g_bPersistConfirmOnDelete = pktConfirmOnDelete), g_bPersistNotes && (g_nIcons & sticky_icon) != sticky_icon && (g_nIcons += sticky_icon)
}

function rw_checkTagging() {
  if (top.frames.length > 0) {
    var e = 0
      , t = top.frames.length;
    for (e = 0; e < t; e++) {
      var r = top.frames[e];
      try {
        var n = r.document
          , a = rw_checkTaggingImpl(n.body);
        if (!a) return !1
      } catch (o) {
        thLogE(o)
      }
    }
  }
  return null == document.body || rw_checkTaggingImpl(document.body)
}

function rw_checkTaggingImpl(e) {
  if (null != e.firstChild) {
    var t = e.firstChild
      , r = t.ownerDocument.body;
    try {
      for (; null != t && t != r;) t = rw_getNextNodeIEBugFix(t)
    } catch (n) {
      return !1
    }
  }
  return !0
}

function $rw_versionCheck() {
  try {
    g_bServerSupport = g_controllerFactory.doesSupportSpeech()
  } catch (e) {
    g_bServerSupport = !1
  }
  g_bServerSupport || (g_nLoadCount++, g_nLoadCount < g_nLoadRetries ? setTimeout($rw_versionCheck, 100) : g_bWebToSpeechErrShown || (g_bSpeechCacheGenerateFlag || rw_alert("A necessary flash component failed to load.  This page will not work as intended.\nCould not load file from: " + g_strSwfLoc + "WebToSpeech" + g_strClientVersion + ".swf"), g_bWebToSpeechErrShown = !0))
}

function $rw_getFlashVersion() {
  if (g_nFlashVersion < 0) try {
    var e = g_controllerFactory.getConnector()
      , t = e.getVersion();
    g_nFlashVersion = parseInt(t)
  } catch (r) {
    g_nFlashVersion = parseInt(g_strClientVersion), thLogE(r)
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

function rw_addEvents() {
  addEvent(window, "scroll", rw_positionToolbar), addEvent(window, "resize", rw_positionToolbar), addEvent(window, "scroll", rw_positionAllDivBars), addEvent(window, "resize", rw_positionAllDivBars), g_bDynamicLoading || addEvent(window, "load", rw_onload), addEvent(window, "beforeunload", rw_beforeUnload), addEvent(document, "click", rw_mouseclickEvent), addEvent(document, "mouseout", rw_mouseoutEvent), addEvent(document, "mouseup", rw_mouseupEvent), addEvent(document, "mousemove", rw_mousemoveEvent), addEvent(document, "mouseover", rw_mouseoverEvent), addEvent(document, "mousedown", rw_mousedownEvent), addEvent(document, "dragstart", rw_dragEvent), addEvent(document, "keyup", rw_hotkeysEvent)
}

function $rw_addEventsToFrame(e) {
  try {
    var t = e.document;
    addEvent(t, "mouseout", rw_mouseoutEvent), addEvent(t, "mouseup", rw_mouseupEvent), addEvent(t, "click", rw_mouseclickEvent), addEvent(t, "mousemove", rw_mousemoveEvent), addEvent(t, "mouseover", rw_mouseoverEvent), addEvent(t, "mousedown", rw_mousedownEvent), addEvent(t, "dragstart", rw_dragEvent), addEvent(t, "keyup", rw_hotkeysEvent)
  } catch (r) {}
  if (e.frames.length > 0) {
    var n = 0;
    for (n = 0; n < e.frames.length; n++) $rw_addEventsToFrame(e.frames[n])
  }
}

function $rw_pageSetup() {
  if ($rw_tagSentencesWithFrames(window), window.frames.length > 0) {
    var e = 0;
    try {
      var t = top.frames.length;
      for (e = 0; e < t; e++) $rw_addEventsToFrame(window.frames[e])
    } catch (r) {
      thLogE(r)
    }
  }
  objStyle = document.getElementById("rwDrag")
    .style, objStyle.display = "inline", g_nLoadCount = 0, $rw_versionCheck(), rw_initialPronunciationLoad()
}

function rw_initialPronunciationLoad() {
  if (!g_bServerSupport) return void(g_nLoadCount < g_nLoadRetries && setTimeout(rw_initialPronunciationLoad, 109));
  g_bLocalPronunciationLoaded = !1;
  var e = !1;
  g_bServerSupport && "function" == typeof rw_loadPronunciationsFromServer && SpeechStream.pronunciation.fetchData() && (e = !0), e && null != g_strCustId && g_strCustId.length > 0 && null != g_strBookId && g_strBookId.length > 0 && null != g_strPageId && g_strPageId.length > 0 && (g_bPronActive = !0, m_pronDictionary.deleteAll(), rw_loadPronunciationsFromServer())
}

function $rw_tagSentencesWithFrames(e) {
  if ("undefined" == typeof e && (e = window), e.document && e.document.body && $rw_tagSentences(e.document.body), e.frames.length > 0) {
    var t = 0
      , r = e.frames.length;
    for (t = 0; t < r; t++) try {
      var n = e.frames[t];
      n.frames.length > 0 ? $rw_tagSentencesWithFrames(n.frames) : n.document && n.document.body && $rw_tagSentences(n.document.body)
    } catch (a) {}
  }
}

function $rw_tagSentences(e) {
  for ("undefinded" != typeof e && null != e || (e = document.body), g_nIdCounter = 1; null != document.getElementById("rwTHnoteMarker" + g_nIdCounter);) g_nIdCounter++;
  try {
    g_bDontIngoreSkips = !0;
    var t = !1
      , r = !1;
    g_nCustId >= 200 && g_nCustId < 300 && (r = !0), g_bIsScholastic = r;
    for (var n = e; null != n;)
      if (3 == n.nodeType) {
        var a = n.parentNode.tagName.toLowerCase();
        if ("textarea" == a) {
          n = rw_getNextNode(n, !1, null);
          continue
        }
        var o = n.nodeValue
          , i = o.trimSpaceTH()
          , l = i.length > 0;
        if (g_bFLVS && "a" == a && (l = !1), l) {
          if (!g_bFLVS && (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency)) && i.length < o.length) {
            var s = !1;
            i = o.trimSpaceStartTH(), o.length - i.length > 0 && (o = t ? " " + i : i, s = !0), i = o.trimSpaceEndTH(), o.length - i.length > 1 && (o = i + " ", t = !1, s = !0), i = o.replace(REGEX_WHITESPACE, " "), i.length < o.length && (o = i, s = !0), s && (n.nodeValue = o)
          }
          var c;
          c = o.search(REGEX_TAG_SENTENCE_BREAK);
          var g = null != n.parentNode.getAttribute("texthelpSkip")
            , _ = n;
          if (c > -1 && c < o.length - 1) {
            for (var u = !0;;) {
              var d = rw_isFullStop(o, c, n);
              if (d) break;
              var h = o.substring(c + 1)
                , p = h.search(REGEX_TAG_SENTENCE_BREAK);
              if (!(p > -1)) {
                u = !1;
                break
              }
              c = c + 1 + p
            }
            if (u) {
              var f = o.substring(0, c + 1)
                , m = o.substring(c + 1)
                , b = document.createElement("xmlns:texthelpns");
              b.setAttribute(RWTH_PERM_GENERATED, "1");
              var w = document.createTextNode(f)
                , S = document.createTextNode(m)
                , T = n.parentNode;
              T.insertBefore(S, n), T.insertBefore(b, S), b.appendChild(w), T.removeChild(n), n = S, _ = w
            } else {
              if (null != n.previousSibling || null != n.nextSibling || g) {
                var b = document.createElement("xmlns:texthelpns");
                b.setAttribute(RWTH_PERM_GENERATED, "1");
                var w = document.createTextNode(o)
                  , T = n.parentNode;
                T.insertBefore(b, n), b.appendChild(w), T.removeChild(n), n = w
              }
              _ = n, n = rw_getNextNode(n, !1, null)
            }
          } else {
            if (null != n.previousSibling || null != n.nextSibling || g) {
              var b = document.createElement("xmlns:texthelpns");
              b.setAttribute(RWTH_PERM_GENERATED, "1");
              var w = document.createTextNode(o)
                , T = n.parentNode;
              T.insertBefore(b, n), b.appendChild(w), T.removeChild(n), n = w
            }
            _ = n, n = rw_getNextNode(n, !1, null)
          }
          if (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency)) {
            var v = _.nodeValue
              , C = _.nodeValue.length;
            t = !(C > 0 && 32 == v.charCodeAt(C - 1))
          }
        } else if (g_bPersistAnnotations || g_bSpeechCacheFlag && (g_bIsScholastic || g_bPktFlag || g_bAlterBrowserForConsistency))
          if (t) g_bFLVS || (n.nodeValue = " "), t = !1, n = rw_getNextNode(n, !1, null);
          else {
            var y = n;
            n = rw_getNextNode(n, !1, null), g_bFLVS || y.parentNode.removeChild(y)
          }
        else n = rw_getNextNode(n, !1, null)
      } else if (1 == n.nodeType) {
      if (g_bPersistAnnotations && (rw_isStyleNode(n) ? "img" == n.tagName.toLowerCase() && (t = !0) : rw_isLineBreakNode(n) && (t = !1)), r) {
        if ("img" == n.tagName.toLowerCase()) {
          var E = n.getAttribute("title");
          n.setAttribute("msg", E)
        }
      } else if (g_bInlineImg && "img" == n.tagName.toLowerCase()) {
        var E = n.getAttribute("msg");
        null != E && E.length > 0 || (E = n.getAttribute("title"), null != E && E.length > 0 ? n.setAttribute("msg", E) : (E = n.getAttribute("alt"), n.setAttribute("msg", E)))
      }
      var N = n.getAttribute(RWTH_COMPONENT)
        , I = n.getAttribute(RWTH_DONT_ALTER);
      n = "pre" == n.tagName.toLowerCase() || null != N && N.length > 0 || null != I && I.length > 0 ? rw_getNextNodeIgnoreChildren(n, !1, null) : rw_getNextNode(n, !1, null)
    } else n = rw_getNextNode(n, !1, null);
    if (g_bPersistAnnotations)
      for (n = e; null != n;)
        if (3 == n.nodeType) {
          var l = n.nodeValue.trimTH()
            .length > 0;
          if (l) {
            var A = n.parentNode
              , P = A.getAttribute("id");
            null != P && 0 != P.length || (A.id = "rwTHnoteMarker" + g_nIdCounter, ++g_nIdCounter)
          }
          n = rw_getNextNode(n, !1, null)
        } else if (1 == n.nodeType) {
      if (rw_checkIfCanHaveStickys(n)) {
        var k = n.getAttribute("id");
        null != k && 0 != k.length || (n.id = "rwTHnoteMarker" + g_nIdCounter, ++g_nIdCounter)
      }
      var N = n.getAttribute(RWTH_COMPONENT)
        , I = n.getAttribute(RWTH_DONT_ALTER);
      n = "pre" == n.tagName.toLowerCase() || null != N && N.length > 0 || null != I && I.length > 0 ? rw_getNextNodeIgnoreChildren(n, !1, null) : rw_getNextNode(n, !1, null)
    } else n = rw_getNextNode(n, !1, null)
  } catch (R) {
    thLog("Error in $rw_tagSentences: " + R)
  }
  g_bDontIngoreSkips = !1, g_bIELoadedFlag = !0
}

function rw_isFullStop(e, t, r) {
  var n = !0
    , a = e.length;
  if (a > t + 1) {
    var o = e.charCodeAt(t + 1);
    rw_isTextChar(o) && (n = !1), g_bMathsSymbols && 61 == o && rw_mathsSymbolCheck("!=") && "!" == r.nodeValue.charAt(t) && (n = !1)
  }
  if (n && "." != r.nodeValue.charAt(t)) return !0;
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
            var _ = !1;
            if (_ = null != tmpAttr && ("x2" == tmpAttr.toLowerCase() || "x3" == tmpAttr.toLowerCase()) || null != tmpAttrIE && ("x2" == tmpAttrIE.toLowerCase() || "x3" == tmpAttrIE.toLowerCase())) {
              if (1 == c.lastChild.nodeType)
                for (; null != c && null != c.lastChild && 3 != c.lastChild.nodeType;) c = c.lastChild;
              if (null != c && 3 == c.lastChild.nodeType) return rw_isFullStop(c.lastChild.nodeValue + e, c.lastChild.nodeValue.length, null)
            }
          }
        } else {
          var u = rw_getPreviousTextNode(r, !0, null);
          if (null != u && 3 == u.nodeType && !rw_isFullStop(u.nodeValue + e, u.nodeValue.length, null)) return !1
        }
    } catch (d) {}
    if (n && null != eba_abbr_array && "object" == typeof eba_abbr_array && "number" == typeof eba_abbr_array.length) {
      var h, p, f = eba_abbr_array.length;
      for (h = 0; h < f; h++)
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

function addEvent(e, t, r) {
  return e.addEventListener ? (e.addEventListener(t, r, !1), !0) : !!e.attachEvent && e.attachEvent("on" + t, r)
}

function rw_mouseCoords(e) {
  return e.pageX ? g_bXDTDType ? {
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
  for (3 == e.nodeType && (e = e.parentNode); e.offsetParent;) t += e.offsetLeft + (e.currentStyle ? parseInt(e.currentStyle.borderLeftWidth)
    .NaN0() : 0), r += e.offsetTop + (e.currentStyle ? parseInt(e.currentStyle.borderTopWidth)
    .NaN0() : 0), e = e.offsetParent;
  return t += e.offsetLeft + (e.currentStyle ? parseInt(e.currentStyle.borderLeftWidth)
    .NaN0() : 0), r += e.offsetTop + (e.currentStyle ? parseInt(e.currentStyle.borderTopWidth)
    .NaN0() : 0), t -= rw_getScreenOffsetLeft(), r -= rw_getScreenOffsetTop(), {
    x: t
    , y: r
  }
}

function $rw_isSpeaking() {
  return g_bSpeakingFlag
}

function rw_setSpeakingModeFlag(p_bState) {
  if ($g_bMouseSpeech && (p_bState = !0), g_bSpeechModeFlag != p_bState) try {
    with(SpeechStream.enumIconParams) {
      for (var i = 0; i < g_nIconCount; i++) {
        var strName = g_icons[i][ICON_NAME];
        ICONS_TO_DISABLE.indexOf(strName) > -1 && (p_bState ? rw_showAnIcon(g_icons[i][ICON_NAME], "mask", g_icons[i][ICON_OFFSET], !1) : rw_showAnIcon(g_icons[i][ICON_NAME], "flat", g_icons[i][ICON_OFFSET], !1))
      }
      g_bSpeechModeFlag = p_bState
    }
  } catch (err) {
    thLogE(err)
  }
}

function rw_setSpeakerFlag(e) {
  if (null != g_bSpeakerID) {
    if (g_bSpeakerFlag == e) return;
    try {
      e ? rw_showSpeakerOnIcon("speaker" + g_bSpeakerID, "on") : (rw_showSpeakerOnIcon("speaker" + g_bSpeakerID, "off"), g_bSpeakerID = null), g_bSpeakerFlag = e
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
    for (var e = SpeechStream.enumIconParams, t = 0; t < g_nIconCount; t++) {
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

function rw_hotkeysEvent(e) {}

function rw_mousedownEvent(e) {
  if (g_bOnloadFinished) {
    var t = e.target || e.srcElement;
    return "rwDragMe" == t.id || "rwDragMeDisplay" == t.id || "rwDragMeTrans" == t.id || "rwDragMeFF" == t.id || "rwDragMeDict" == t.id || "rwDragMeCollect" == t.id || "rwDragMeStickyNoteTop" == t.id || "rwDragMeStickyNoteBot" == t.id || "rwDragMePronCreate" == t.id || "rwDragMePronEdit" == t.id || "rwDragMeCal" == t.id || "rwDragMePictureDictionary" == t.id ? (g_rwDragElement = t, g_bDragging = !0, g_rwDragElement.setCapture && g_rwDragElement.setCapture(!0), g_aStartElemPos = rw_getPosition(g_rwDragElement), "rwDragMeStickyNoteBot" == t.id && (g_aStartElemPos.y -= t.offsetTop), g_aStartMousePos = rw_mouseCoords(e), !1) : void 0
  }
}

function rw_dragEvent(e) {
  if (g_bOnloadFinished) {
    var t = e.target || e.srcElement;
    return "IMG" == t.tagName && "rwIcon" == t.className ? (rw_blockEvents(e), !1) : void 0
  }
}

function rw_mouseclickEvent(e) {
  if (g_bOnloadFinished) {
    var t = (new Date)
      .getTime();
    if (!(t - g_bMouseDoubleClickTime < g_nClickRejectTime || (g_bMouseDoubleClickTime = t, null == e || g_bDragging))) {
      if ($g_bMouseSpeech && g_bOnClick) rw_mouseHover(e);
      else {
        var r = rw_getTHCaretFromMouseEvent(e, g_bOnClick);
        $rw_speakFromElement(r.node.parentElement)
      }
      g_bSticky && rw_createStickyNote(e)
    }
  }
}

function rw_mouseoverEvent(e) {
  g_bOnloadFinished && null != e && (g_bDragging || g_bSafari && ($g_bMouseSpeech && !g_bOnClick ? rw_mouseHover(e) : g_bBubbleMode ? rw_mouseHoverBubblePopup(e) : (g_nIcons & calculator_icon) == calculator_icon && rw_calSpeechOn() && rw_isCalcButton(e) && rw_mouseHover(e, !0)))
}

function rw_mousemoveEvent(e) {
  if (g_bOnloadFinished) {
    if (null == e) return !0;
    if (g_bIE) {
      var t = e.clientX
        , r = e.clientY;
      if (g_nCurMoveX == t && g_nCurMoveY == r) return;
      g_nCurMoveX = t, g_nCurMoveY = r
    }
    if (null == g_rwDragElement) return $g_bMouseSpeech && (g_bFireFox || g_bIE) && !g_bOnClick ? rw_mouseHover(e) : g_bBubbleMode ? rw_mouseHoverBubblePopup(e) : (g_nIcons & calculator_icon) == calculator_icon && rw_calSpeechOn() && (g_bFireFox || g_bIE) && rw_isCalcButton(e) && rw_mouseHover(e, !0), g_bDragging = !1, !0;
    var n = rw_mouseCoords(e);
    if (n.x < 0 || n.y < 0 || n.x > rw_getDocumentDisplayWidth() || n.y > rw_getDocumentDisplayHeight()) return rw_blockEvents(e), !1;
    var a, o, i = !1
      , l = 1;
    if (g_bIE && !g_bXDTDType && g_bIEBackCompat) {
      var s = document.body.offsetWidth
        , c = document.documentElement.offsetWidth;
      l = s / c, (l > 1.05 || l < 99.5) && (i = !0)
    }
    if (i) {
      var g = l * g_aStartMousePos.x - g_aStartElemPos.x
        , _ = l * g_aStartMousePos.y - g_aStartElemPos.y;
      a = (l * n.x - g) / l, o = (l * n.y - _) / l
    } else {
      var g = g_aStartMousePos.x - g_aStartElemPos.x
        , _ = g_aStartMousePos.y - g_aStartElemPos.y;
      a = n.x - g, o = n.y - _
    }
    if (null != g_rwDragElement) {
      if ("rwDragMe" == g_rwDragElement.id) rw_setBarPercent(a, o), a + g_nBarWidth + g_nDragMargin > rw_getDocumentDisplayWidthAdjusted() && (a = rw_getDocumentDisplayWidthAdjusted() - g_nBarWidth - g_nDragMargin, g_fBarPosX = 1), a < g_nDragMargin && (a = g_nDragMargin, g_fBarPosX = 0), o + g_nBarHeight + g_nDragMargin > rw_getDocumentDisplayHeightAdjusted() && (o = rw_getDisplayHeightAdjusted() - g_nBarHeight - g_nDragMargin, g_fBarPosY = 1), o < g_nDragMargin && (o = g_nDragMargin, g_fBarPosY = 0), rw_positionToolbar(), rw_blockEvents(e);
      else if ("rwDragMeTrans" == g_rwDragElement.id || "rwDragMeFF" == g_rwDragElement.id || "rwDragMeDict" == g_rwDragElement.id || "rwDragMeDisplay" == g_rwDragElement.id || "rwDragMeCollect" == g_rwDragElement.id || "rwDragMeStickyNoteTop" == g_rwDragElement.id || "rwDragMeStickyNoteBot" == g_rwDragElement.id || "rwDragMePronCreate" == g_rwDragElement.id || "rwDragMePronEdit" == g_rwDragElement.id || "rwDragMeCal" == g_rwDragElement.id || "rwDragMeGencache" == g_rwDragElement.id || "rwDragMeCheckcache" == g_rwDragElement.id || "rwDragMePictureDictionary" == g_rwDragElement.id) {
        var u;
        u = "rwDragMeDisplay" == g_rwDragElement.id ? POPUP_DISPLAY : "rwDragMeTrans" == g_rwDragElement.id ? POPUP_TRANSLATOR : "rwDragMeFF" == g_rwDragElement.id ? POPUP_FF : "rwDragMeDict" == g_rwDragElement.id ? POPUP_DICTIONARY : "rwDragMeStickyNoteTop" == g_rwDragElement.id ? POPUP_STICKYNOTE : "rwDragMeStickyNoteBot" == g_rwDragElement.id ? POPUP_STICKYNOTE : "rwDragMePronCreate" == g_rwDragElement.id ? POPUP_PRON_CREATE : "rwDragMePronEdit" == g_rwDragElement.id ? POPUP_PRON_EDIT : "rwDragMeCal" == g_rwDragElement.id ? POPUP_CALCULATOR : "rwDragMeGencache" == g_rwDragElement.id ? POPUP_GENERATE_CACHE : "rwDragMeCache" == g_rwDragElement.id ? POPUP_CHECK_CACHE : "rwDragMePictureDictionary" == g_rwDragElement.id ? POPUP_PICTUREDICTIONARY : POPUP_COLLECT, rw_setDivPercent(u, a, o), a + g_anDivWidth[u] + g_nDragMargin > rw_getDocumentDisplayWidthAdjusted() && (a = rw_getDocumentDisplayWidthAdjusted() - g_anDivWidth[u] - g_nDragMargin, g_afDivPosX[u] = 1), a < g_nDragMargin && (a = g_nDragMargin, g_afDivPosX[u] = 0), o + g_anDivHeight[u] + g_nDragMargin > rw_getDocumentDisplayHeightAdjusted() && (o = rw_getDocumentDisplayHeightAdjusted() - g_anDivHeight[u] - g_nDragMargin, g_afDivPosY[u] = 1), o < g_nDragMargin && (o = g_nDragMargin, g_afDivPosY[u] = 0), rw_positionDivBar(u), rw_blockEvents(e)
      }
      return !1
    }
  }
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
  if (g_bOnloadFinished) return !g_bDragging || (g_rwDragElement.releaseCapture && g_rwDragElement.releaseCapture(), g_rwDragElement = null, g_bDragging = !1, rw_blockEvents(e), !1)
}

function rw_mouseoutEvent(e) {
  if (g_bOnloadFinished)
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
  return g_nBlockNextChange > 0 ? void--g_nBlockNextChange : void(g_bDragging || $rw_blockClick(e) || rw_showAnIcon(g_icons[t][SpeechStream.enumIconParams.ICON_NAME], "hover", g_icons[t][SpeechStream.enumIconParams.ICON_OFFSET], r))
}

function rw_mouseOffIcon(e, t, r) {
  return g_nBlockNextChange > 0 ? void--g_nBlockNextChange : void(g_bDragging || $rw_blockClick(e) || rw_showAnIcon(g_icons[t][SpeechStream.enumIconParams.ICON_NAME], "flat", g_icons[t][SpeechStream.enumIconParams.ICON_OFFSET], r))
}

function rw_press(e, t, r) {
  return g_nBlockNextChange > 0 ? void--g_nBlockNextChange : void(g_bDragging || $rw_blockClick(e) || rw_showAnIcon(g_icons[t][SpeechStream.enumIconParams.ICON_NAME], "toggle", g_icons[t][SpeechStream.enumIconParams.ICON_OFFSET], r))
}

function $rw_blockClick(e) {
  return !!(g_bSpeechModeFlag && ICONS_TO_DISABLE.indexOf(e) > -1) || TOGGLE_ICONS_TO_ENABLE_WITH_FLASH.indexOf(e) > -1
}

function rw_onload() {
  if (g_bPersistAnnotations && (!g_bSSLoaded || !g_bStickyLoaded)) return void setTimeout(rw_onload, 50);
  if (g_bUseBar && (!g_bLimitCookies || !g_bIE6 && !g_bIE7)) {
    var e = rw_getCookie("rwebooks-x")
      , t = rw_getCookie("rwebooks-y");
    null != e && null != t && (g_fBarPosX = parseFloat(e), g_fBarPosY = parseFloat(t))
  }
  var r, n, a = !1
    , o = g_afDivPosX.length;
  if (!g_bUseBar || g_bLimitCookies && (g_bIE6 || g_bIE7)) a = !0;
  else
    for (var i = 0; i < o; i++) r = rw_getCookie("rwebooks-div" + i + "x"), null != r && (g_afDivPosX[i] = parseFloat(r)), n = rw_getCookie("rwebooks-div" + i + "y"), null != n && (g_afDivPosY[i] = parseFloat(n)), i == POPUP_STICKYNOTE && null == r && null == n && (a = !0);
  if (a && (g_afDivPosX[POPUP_STICKYNOTE] = .45, g_afDivPosY[POPUP_STICKYNOTE] = .35), rw_positionToolbar(), rw_positionAllDivBars(), $rw_pageSetup(), g_bPersistAnnotations && ("*" != g_strPersistHighlightEditorId && "undefined" != typeof rw_retrieveHighlightDataForPKT ? rw_retrieveHighlightDataForPKT() : "*" != g_strPersistNoteEditorId && "undefined" != typeof rw_unserialiseStickyNotes && rw_unserialiseStickyNotes()), g_bIE) {
    var l = document.createTextNode(" ");
    document.body.appendChild(l)
  }
  g_bSpeechCacheGenerateFlag && g_bAutoCachePage && $rw_cachePage(null, null), g_bBubbleMode && (g_bProquest && rw_initSpeechBubble(), g_bBubbleModeStartDisabled && (g_bBubbleMode = !1)), g_bOnloadFinished = !0, "function" == typeof $rw_toolbarLoadedCallback && $rw_toolbarLoadedCallback()
}

function rw_beforeUnload() {
  if (window.onunload = null, "undefined" != typeof rw_serialiseStickyNotes && g_bPersistAnnotations && "undefined" != typeof g_nStickyNoteOpened && g_nStickyNoteOpened > -1 && rw_closeStickyNote(g_nStickyNoteOpened), g_bUseBar && (!g_bLimitCookies || !g_bIE6 && !g_bIE7)) {
    rw_setCookie("rwebooks-x", g_fBarPosX, 20, "/", window.location.host), rw_setCookie("rwebooks-y", g_fBarPosY, 20, "/", window.location.host);
    for (var e = g_afDivPosX.length, t = 0; t < e; t++) rw_setCookie("rwebooks-div" + t + "x", g_afDivPosX[t], 20, "/", window.location.host), rw_setCookie("rwebooks-div" + t + "y", g_afDivPosY[t], 20, "/", window.location.host)
  }
}

function $rw_setSpeechRangeColours(e) {
  g_strSpeechRangeColours = e
}

function $rw_setSpeechWordColours(e) {
  g_strSpeechWordColours = e
}

function $rw_getSpeechRangeColours() {
  return g_strSpeechRangeColours
}

function $rw_getSpeechWordColours() {
  return g_strSpeechWordColours
}

function rw_setHighlight(e, t, r, n, a) {
  var o = e
    , i = r;
  try {
    var l = null;
    if (r == e) l = rw_setNodeBackground(e, t, n, "ss", a), o = l.node, i = l.node;
    else {
      l = t > 0 ? rw_setNodeBackground(e, t, e.nodeValue.length, "ss", a) : rw_setNodeBackground(e, -1, -1, "ss", a), o = l.node;
      for (var s = rw_getNextTextNodeNoImg(l.node, !1, r, !0); null != s;) {
        if (s == r) {
          l = rw_setNodeBackground(s, 0, n, "ss", a), s = l.node, i = s;
          break
        }
        l = rw_setNodeBackground(s, -1, -1, "ss", a), s = l.node, i = s, s = rw_getNextTextNodeNoImg(s, !1, r, !0)
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
          var a = textFromNodeTH(n)
            , o = n.ownerDocument;
          r = o.createTextNode(a)
        }
        var i = n.parentNode;
        i.replaceChild(r, n), r = rw_mergeTextNodes(r), e[t] = r
      }
    }
    g_bSpeakingFlag || rw_removeSpeechHighlight(e, !1)
  } catch (l) {
    thLog("Error in rw_setHighlight: " + l.message)
  }
}

function rw_checkNodeIsHighlightedText(e) {
  if (3 != e.nodeType || null == e.parentNode || null == e.parentNode.parentNode) return !1;
  var t = e.parentNode
    , r = t.getAttribute("rwstate");
  return "thtag" == t.tagName.toLowerCase() && null != r && "ss" == r
}

function rw_removeSpeechHighlight(e, t) {
  try {
    if ("undefined" == typeof t && (t = !1), null == e || !(e instanceof Array) || 0 == e.length) return;
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      if (rw_checkNodeIsSpeechText(n, t)) {
        var a = n.parentNode;
        if (null != n.nextSibling || null != n.previousSibling) {
          var o = textFromNodeTH(a)
            , i = a.ownerDocument;
          n = i.createTextNode(o)
        }
        var l = a.parentNode;
        l.replaceChild(n, a), n = rw_mergeTextNodes(n), e[r] = n, rw_checkNodeIsSpeechText(n, t) && --r
      } else {
        var s = "";
        1 == n.nodeType && (s = n.tagName.toLowerCase()), "math" == s && rw_highlightMathElement(n, null, null, !1)
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
  return "thtag" == r.tagName.toLowerCase() && null != n && (!t && "sp" == n || "csp" == n)
}

function rw_setSpeechRangeImpl(e, t, r, n, a) {
  var o = null;
  try {
    if (r == e) return o = rw_setNodeBackground(e, t, n, a, "");
    o = t > 0 ? rw_setNodeBackground(e, t, e.nodeValue.length, a, "") : rw_setNodeBackground(e, -1, -1, a, "");
    for (var i = rw_getNextTextNodeNoImg(o.node, !1, r, !0); null != i;) {
      if (i == r) {
        o = rw_setNodeBackground(i, 0, n, a, ""), i = o.node;
        break
      }
      o = rw_setNodeBackground(i, -1, -1, a, ""), i = o.node, i = rw_getNextTextNodeNoImg(i, !1, r, !0)
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
    if (1 == e.nodeType && rw_isSpecialCaseHighlightable(e)) {
      if ("math" == e.tagName.toLowerCase()) {
        var i = e.parentNode;
        o = rw_setNodeBackgroundImpl(i, e, t, r, n, "")
      } else {
        var l = rw_getFirstChildTextNode(e, !1)
          , s = rw_getLastChildTextNode(e, !1);
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
        var _ = g.tagName.trimTH()
          .toLowerCase();
        if ("tr" == _ || "table" == _) return o
      }
    }
  }
  var i = e.parentNode
    , u = null;
  if ("thtag" == i.tagName.toLowerCase() && (u = i.getAttribute("rwstate")), "ss" == n) {
    if (null != u && "" != u) return "ss" == u ? o : o;
    o = rw_setNodeBackgroundImpl(i, e, t, r, n, a)
  } else if ("sp" == n) {
    if ("csp" == u) return thLog("fail in rw_setNodeBackground setting sp to csp"), o;
    if ("sp" == u) return thLog("fail in rw_setNodeBackground setting sp to sp"), o;
    o = rw_setNodeBackgroundImpl(i, e, t, r, n, "")
  } else if ("csp" == n) {
    if ("csp" == u) return thLog("fail parent is csp for csp"), o;
    "sp" == u && (o = rw_setNodeBackgroundImpl(i, e, t, r, n, ""))
  }
  return o
}

function rw_setNodeBackgroundImpl(e, t, r, n, a, o) {
  var i = ""
    , l = "speech";
  if (1 == t.nodeType && (i = t.tagName.toLowerCase()), 3 == t.nodeType && (n == -1 || n > r) || "math" == i) {
    var s;
    if ("ss" == a ? s = "background:" + o : "sp" == a ? s = g_strSpeechRangeColours : "csp" == a ? (s = g_strSpeechWordColours, l = "speechreading") : s = "color:#ff000; background:#00ff00", "math" == i) "ss" != a && rw_highlightMathElement(t, a, s, !0);
    else {
      var c = t.nodeValue.length;
      if (1 == c && ("\n" == t.nodeValue || "\r" == t.nodeValue) || 2 == c && "\r\n" == t.nodeValue) {
        var g = new THReturnObject;
        return g.node = t, r < 0 ? g.offset = 0 : g.offset = r, g
      }
      var _ = e.ownerDocument
        , u = !1;
      if (r == -1 && n == -1 ? u = !0 : n == -1 && (n = c), 0 == r && n >= c && (u = !0), u) {
        var d = _.createElement("thtag");
        g_bIEOld ? d.style.setAttribute("cssText", s, 0) : d.setAttribute("style", s), d.setAttribute("rwstate", a), "ss" != a && d.setAttribute("started", "1"), e.replaceChild(d, t), d.appendChild(t)
      } else {
        var h, p, f, m = t.nodeValue;
        "span" == e.tagName.toLowerCase() && null != e.getAttribute("pron") ? (h = "", p = m, f = "") : (h = m.substring(0, r), p = m.substring(r, n), f = m.substring(n));
        var d = _.createElement("thtag");
        g_bIEOld ? d.style.setAttribute("cssText", s, 0) : d.setAttribute("style", s), d.setAttribute("rwstate", a), d.setAttribute("class", l), "ss" != a && d.setAttribute("started", "1");
        var b = null
          , w = null
          , S = null;
        h.length > 0 && (b = _.createTextNode(h)), w = _.createTextNode(p), f.length > 0 && (S = _.createTextNode(f)), d.appendChild(w), e.replaceChild(d, t), null != b && e.insertBefore(b, d), null != S && (null == d.nextSibling ? e.insertBefore(S, null) : e.insertBefore(S, d.nextSibling)), t = w
      }
    }
  }
  var g = new THReturnObject;
  return g.node = t, r < 0 ? g.offset = 0 : g.offset = r, g
}

function rw_highlightMathElement(e, t, r, n) {
  if (null != e)
    if (g_bIE) {
      var a = e.parentNode;
      if (null == a) return;
      if ("thtag" == a.tagName.toLowerCase() && null != a.getAttribute("started"))
        if (n) a.style.setAttribute("cssText", r, 0), a.setAttribute("rwstate", t);
        else {
          var o = a.parentNode;
          if (null == o) return;
          o.replaceChild(e, a)
        }
      else if (n) {
        var i = document.createElement("thtag");
        i.style.setAttribute("cssText", r, 0), i.setAttribute("started", "1"), i.setAttribute("rwstate", t), a.replaceChild(i, e), i.appendChild(e)
      }
    } else
      for (var l = e.firstChild; null != l;) 1 == l.nodeType && (n ? null != l.getAttribute("started") ? (l.setAttribute("style", r), l.setAttribute("rwstate", t)) : null == l.getAttribute("style") && (l.setAttribute("style", r), l.setAttribute("rwstate", t), l.setAttribute("started", "1")) : null != l.getAttribute("started") && (l.removeAttribute("style"), l.removeAttribute("started"), l.removeAttribute("rwstate"))), l = l.nextSibling
}

function rw_whichNodeFirst(e, t) {
  if (e == t) return 0;
  var r = rw_getRangeObject(e.ownerDocument.body);
  r.setStart(e, 0), r.setEnd(e, 0);
  var n = rw_getRangeObject(e.ownerDocument.body);
  return n.setStart(t, 0), n.setEnd(t, 0), r.compareBoundaryPoints("START_TO_START", n)
}

function THSpeech() {
  this.txt = "", this.txtOrig = "", this.voice = null, this.caretRange = null
}

function rw_getVoiceSetForNode(e) {
  return rw_mapLangToVoice(rw_getLangAttr(e))
}

function rw_getVoiceSetForCurrentNode(e) {
  return null != e && 1 == e.nodeType ? rw_mapLangToVoice(e.getAttribute("lang")) : null
}

function rw_getLangAttr(e) {
  for (var t = e; null != t;) {
    if (3 == t.nodeType && null !== t.parentElement && (t = t.parentElement), 1 == t.nodeType) {
      g_strAltVoice = "";
      var r = t.getAttribute("lang");
      if (null != r && r.length > 0) return r
    }
    t = t.parentNode
  }
  return null
}

function rw_checkForVoiceChange(e, t, r) {
  var n = e;
  for (n = rw_getNextNodeAllowMoveToChild(n, !1, t); null != n;) {
    var a = rw_getVoiceSetForNode(n);
    if (a != r) {
      var o = rw_getPreviousTextNodeNoBlank(n, !1, e);
      return 3 == o.nodeType ? new THCaret(o, o.nodeValue.length, (!1)) : new THCaret(o, 0, (!0))
    }
    n = rw_getNextNode(n, !1, t)
  }
  return null
}

function rw_mapLangToVoice(e) {
  if (null != e) {
    var t, r = e.toLowerCase();
    if ("en" == r || "en-gb" == r) t = ENGLISH;
    else if ("en-us" == r) t = ENGLISH_US;
    else if ("es-us" == r) t = SPANISH;
    else if ("es" == r || "es-es" == r) t = ESPANOL;
    else if ("fr" == r || "fr-fr" == r) t = FRENCH;
    else if ("fr-ca" == r) t = FRENCH_CN;
    else if ("de" == r) t = GERMAN;
    else if ("it" == r) t = ITALIAN;
    else if ("nl" == r) t = DUTCH;
    else if ("sv" == r) t = SWEDISH;
    else if ("en-au" == r) t = AUSTRALIAN;
    else if ("pt-br" == r) t = PORTUGUESE;
    else {
      if ("ms" != r) return null;
      t = MALAYSIAN
    }
    return DEFAULT_VOICE_ARRAY[t]
  }
  return null
}

function rw_checkIfVoiceChanged(e) {
  if (null != e) {
    if (e != g_strAltVoice) {
      g_strAltVoice = e;
      var t = g_controllerFactory.getConnector();
      null != t && t.setVoiceName(g_strAltVoice)
    }
  } else if (null != g_strAltVoice) {
    g_strAltVoice = null;
    var t = g_controllerFactory.getConnector();
    null != t && t.setVoiceName(g_strVoice)
  }
}

function ReadHeader1() {
  var e = (new Date)
    .getTime();
  if (!(e - g_nNavDoubleClickTime < g_nClickRejectTime)) {
    g_nNavDoubleClick = e;
    var t = document.getElementsByTagName("H1")[0]
      , r = rw_getNextNodeAllowMoveToChild(t, !0, t);
    if (null != r && (3 != r.nodeType && (r = rw_getNextTextNode(r, !0, t)), null != r)) {
      var n = new THCaret(r, 0, (!0))
        , a = rw_getHoverTargetFromCaret(n);
      if (null != a) {
        var o = a.getCaretRange();
        if (rw_caretRangeIsSpeakable(o)) {
          var i = o.leftCaret.node;
          if (a.isRange()) {
            var l = o.rightCaret.node;
            i = rw_getStartOfParagraph(i), l = rw_getEndOfParagraph(l);
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
  for (var e = "", t = rw_getFirstSentence(document.body); null != t;) {
    var r = rw_getSpeechOverCaretRangeToSpeak(t, new Array);
    e = e + rw_getCachedSpeechFolderUrl() + "/";
    var n;
    n = rw_getHash(SpeechStream.cacheMode.mode == SpeechStream.cacheMode.CACHE_ONLY || SpeechStream.pronunciation.mode == SpeechStream.pronunciation.CLIENT_PRONUNCIATION_FOR_LIVE_SERVER ? r.txt : r.txtOrig), e = e + n + "~", t = rw_getNextSentence(t)
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

function $rw_processMp3(e, t) {
  if (!g_controllerFactory.doesSupportHtml5() && "undefined" != typeof eba_log_speech_requests && eba_log_speech_requests && "undefined" != typeof eba_log_web_service && "" != eba_log_web_service) {
    var r, n = "speechRequestData=" + escape("http://" + g_strSpeechServer + "/SpeechServices/index.html?text=" + e + "&userName=" + g_strLoginName + "&voiceName=" + g_strVoice + "&speedValue=" + g_nSpeedValue + "&userPron=Y|xml=&mp3=" + t + "&custid=" + g_strCustId + "&urlid=" + g_strBookId);
    if ("undefined" != typeof XDomainRequest) {
      r = new XDomainRequest;
      var a = eba_log_web_service + "?" + n;
      r.open("GET", a), r.send()
    } else r = new SpeechStream.AjaxRequest, r.doPost(eba_log_web_service, n, this, null)
  }
}

function rw_positionToolbar() {
  var e;
  if (e = document.getElementById("rwDrag")
    .style, null != e) {
    if (!g_bUseContainer) {
      var t, r;
      if ("undefined" != typeof eba_override_x && "undefined" != typeof eba_override_y) t = eba_override_x, r = eba_override_y;
      else {
        var n = rw_getDisplayWidth()
          , a = rw_getDisplayHeight();
        g_bNoTitleBar && (g_fBarPosX = 1, g_fBarPosY = 0, g_nDragMargin = 0), t = n * g_fBarPosX, r = a * g_fBarPosY, t + g_nBarWidth + g_nDragMargin > rw_getDisplayWidthAdjusted() && (t = rw_getDisplayWidthAdjusted() - g_nBarWidth - g_nDragMargin), t < g_nDragMargin && (t = g_nDragMargin), r + g_nBarHeight + g_nDragMargin > rw_getDisplayHeightAdjusted() && (r = rw_getDisplayHeightAdjusted() - g_nBarHeight - g_nDragMargin), r < g_nDragMargin && (r = g_nDragMargin), t = rw_getScreenOffsetLeft() + t, r = rw_getScreenOffsetTop() + r, g_bNoTitleBar && (r = 0)
      }
      strAgent.indexOf("android") != -1 && (r += parseInt(100 / ((window.outerWidth - 8) / window.innerWidth)), t -= 10), e.left = t + "px", e.top = r + "px"
    }
    if (!g_bHiddenBar) {
      e.visibility = "visible", e.display = "inline";
      var o = document.getElementById("rwMainOutline");
      null != o && (o.style.visibility = "visible", o.style.display = "block"), o = document.getElementById("rwMainNoOutline"), null != o && (o.style.visibility = "visible", o.style.display = "block")
    }
  }
}

function rw_positionAllDivBars() {
  rw_positionDivBar(0), rw_positionDivBar(1), rw_positionDivBar(2), rw_positionDivBar(3), rw_positionDivBar(4), rw_positionDivBar(5), rw_positionDivBar(6), rw_positionDivBar(7), rw_positionDivBar(8), rw_positionDivBar(9), rw_positionDivBar(10), rw_positionDivBar(11)
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
  default:
    n = "rwDisplay"
  }
  if (t = document.getElementById(n), "undefined" != typeof t && null != t && (r = t.style, null != r))
    if (g_abVisible[e]) {
      if (r.display = "block", "visible" == r.visibility) {
        var a = rw_getDomObject(n);
        if (null != a) {
          var o = parseInt(a.offsetHeight);
          isNaN(o) || (g_anDivHeight[e] = o - 4)
        }
      }
      var i = rw_getDocumentDisplayWidth()
        , l = rw_getDocumentDisplayHeight()
        , s = i * g_afDivPosX[e]
        , c = l * g_afDivPosY[e];
      s + g_anDivWidth[e] + g_nDragMargin > rw_getDocumentDisplayWidthAdjusted() && (s = rw_getDocumentDisplayWidthAdjusted() - g_anDivWidth[e] - g_nDragMargin), s < g_nDragMargin && (s = g_nDragMargin), c + g_anDivHeight[e] + g_nDragMargin > rw_getDocumentDisplayHeightAdjusted() && (c = rw_getDocumentDisplayHeightAdjusted() - g_anDivHeight[e] - g_nDragMargin), c < g_nDragMargin && (c = g_nDragMargin), s = rw_getScreenOffsetLeft() + s, c = rw_getScreenOffsetTop() + c, r.left = s + "px", r.top = c + "px", r.visibility = "visible"
    } else g_bFireFox && (r.display = "none"), r.visibility = "hidden"
}

function rw_setBarPercent(e, t) {
  g_fBarPosX = e / rw_getDocumentDisplayWidth(), g_fBarPosY = t / rw_getDocumentDisplayHeight()
}

function rw_setDivPercent(e, t, r) {
  g_afDivPosX[e] = t / rw_getDocumentDisplayWidth(), g_afDivPosY[e] = r / rw_getDocumentDisplayHeight()
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
  default:
    t = "displayImg"
  }
  null != document.images[t] && (document.images[t].src = $g_strFileLoc + "rwimgs/thepressedx.bmp")
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
  default:
    t = "displayImg"
  }
  null != document.images[t] && (document.images[t].src = $g_strFileLoc + "rwimgs/thex.bmp")
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
  default:
    n = "rwpopupdisplay"
  }
  r = document.getElementById(n), null != r && (r.innerHTML = t)
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
  default:
    n = "rwDisplay"
  }
  var a = rw_getDomObject(n);
  if (null != a) {
    if (r = a.style, null == r) return;
    e ? (resetZIndex(), r.visibility = "visible", r.display = "block", r.zIndex = 99999) : (r.visibility = "hidden", g_bFireFox && (r.display = "none"), rw_setPopupText(t, ""))
  }
  rw_positionAllDivBars()
}

function resetZIndex() {
  var e;
  e = "rwDisplay";
  var t, r = rw_getDomObject(e);
  null != r && r.style && (t = r.style, t.zIndex = 99999), e = "rwTrans", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999), e = "rwFF", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999), e = "rwDict", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999), e = "rwCollect", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99998), e = "rwSticky", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999), e = "rwCal", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999), e = "rwGenerateCache", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999), e = "rwCheckCache", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999), e = "rwPictureDictionary", r = rw_getDomObject(e), null != r && r.style && (t = r.style, t.zIndex = 99999)
}

function $setToolbarX(e) {
  g_fBarPosX = e < 0 ? 0 : e > 1 ? 1 : e, rw_positionToolbar()
}

function $setToolbarY(e) {
  g_fBarPosY = e < 0 ? 0 : e > 1 ? 1 : e, rw_positionToolbar()
}

function $getToolbarX() {
  return g_fBarPosX
}

function $getToolbarY() {
  return g_fBarPosY
}

function rw_mouseHover(e, t) {
  try {
    if (g_bOnClick) {
      var r = new Date
        , n = r.getTime();
      if (n < g_lLastSpeechSentTime + 800 || !g_bOnloadFinished) return
    }
    var a = rw_getTHCaretFromMouseEvent(e, g_bOnClick);
    if (null != a) {
      if (g_bTakeClickOnRadioBox && 1 == a.node.nodeType && "input" == a.node.tagName.toLowerCase()) {
        var o = a.node.getAttribute("type");
        null != o && (o = o.toLowerCase(), "radio" != o && "checkbox" != o || (a.node = rw_getNextTextNodeNoBlank(a.node, !0, null), a.offset = 0))
      }
      var i = rw_getHoverTargetFromCaret(a);
      if (null != i) try {
        if (i.equals(g_hoverTarget)) return;
        if (i.equals(g_lastTarget)) {
          if (n - g_lLastClickTimeout < 1e3) return;
          g_lLastClickTimeout = n
        }
        "boolean" == typeof t && t ? (i.useHighlighting = !1
          , rw_doHoverStart(i, !0)) : rw_doHoverStart(i, !1)
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
          if (3 != i.nodeType && (i = rw_getNextTextNodeNoBlank(i, !1, r), null == i)) return null;
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
  } else r = null != e.explicitOriginalTarget.nodeValue ? "textarea" == e.target.tagName.toLowerCase() ? e.target : e.explicitOriginalTarget : e.target;
  return null == r ? null : new THCaret(r, n, (!0))
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
    var _ = r.parentNode;
    if (o = _.getAttribute("started"), i = _.getAttribute("ignore"), l = _.getAttribute("sp"), s = _.getAttribute("csp"), null != s || null != i || null != l || null != o) n = null;
    else {
      var u, d;
      if (3 == r.nodeType) {
        var h = e;
        try {
          if (!g_bIE && h.node.nodeValue.length > 0 ? (h.offset = 0, u = rw_getSentenceBreakToLeft(h), h.offset = h.node.nodeValue.length - 1, d = rw_getSentenceBreakToRight(h)) : (u = rw_getSentenceBreakToLeft(h), d = rw_getSentenceBreakToRight(h)), null != u && null != d) {
            var p = new THRange(rw_getBody(_), rw_getRefPt(u.node, u.offset), rw_getRefPt(d.node, d.offset));
            n = new THHoverTarget(null, null, p), n.blockCache = t
          }
        } catch (f) {
          thLogE(f)
        }
      } else if (1 == r.nodeType)
        if ("img" == r.tagName.toLowerCase() && null != r.getAttribute("msg")) {
          if (u = rw_getSentenceBreakToLeft(e), d = rw_getSentenceBreakToRight(e), null != u && null != d) {
            var p = new THRange(rw_getBody(_), rw_getRefPt(u.node, u.offset), rw_getRefPt(d.node, d.offset));
            n = new THHoverTarget(null, null, p)
          } else n = new THHoverTarget(rw_getBody(r), rw_getPositionInDom(r), null);
          n.blockCache = t
        } else n = new THHoverTarget(rw_getBody(r), rw_getPositionInDom(r), null), n.blockCache = t, n.allowContinuous = !1;
      else n = null
    }
  }
  return n
}

function rw_doHoverStart(e, t) {
  g_hoverTimeoutId1 > 0 && (clearTimeout(g_hoverTimeoutId1), g_hoverTimeoutId1 = 0), g_hoverTimeoutId2 > 0 && (clearTimeout(g_hoverTimeoutId2), g_hoverTimeoutId2 = 0), g_bOnClick && !t ? (g_hoverTarget = e, $rw_event_stop_limited(), g_hoverTimeoutId1 = setTimeout(rw_doHoverStep2, 500)) : (g_hoverTarget = e, g_hoverTimeoutId1 = setTimeout(rw_doHoverStep1, 500))
}

function rw_doHoverStep1() {
  if (null != g_hoverTarget && ($g_bMouseSpeech || (g_nIcons & calculator_icon) == calculator_icon)) {
    if (g_hoverTimeoutId1 = 0, null != g_hoverTarget) {
      var e;
      if (e = g_hoverTarget instanceof String ? g_hoverTarget.toString() : g_hoverTarget.isRange() ? rw_caretRangeIsSpeakable(g_hoverTarget.getCaretRange()) ? " " : null : g_hoverTarget.getTextPreparedForSpeech(), null == e || 0 == e.length) return
    }
    g_hoverTimeoutId1 > 0 && (clearTimeout(g_hoverTimeoutId1), g_hoverTimeoutId1 = 0), g_hoverTimeoutId2 > 0 && (clearTimeout(g_hoverTimeoutId2), g_hoverTimeoutId2 = 0), $rw_event_stop_limited(), g_hoverTimeoutId2 = setTimeout(rw_doHoverStep2, 500)
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
    if (null == e) return;
    if (rw_isSpeechBusy()) return g_aTargetQueue.push("rw_speakHoverTarget"), g_aTargetQueue.push(e), void(0 == g_nTargetQueueTimerId && (g_nTargetQueueTimerId = setTimeout(rw_targetQueueTimer, 100)));
    if (g_lTargetQueueTime = (new Date)
      .getTime(), null != g_lastTarget && g_lastTarget.unhighlightRange(), e instanceof String) {
      g_lastTarget = null;
      var t = e.toString()
        , r = new SpeechStream.SpeechRequest;
      r.setString(t, SpeechStream.SpeechRequestBookmarks.NONE);
      var n = r.getText()
        , a = r.getFinalText();
      if (e.useHighlighting) rw_playMessage(a, !1, n);
      else {
        var o = g_controllerFactory.getConnector();
        null != o && o.simpleSpeech(n, !g_bLocalPronunciationLoaded)
      }
    } else {
      if (e.range && e.range instanceof THRange) {
        var i = rw_getTHCaretRangeFromTHRange(e.range);
        if (null != i && rw_checkIfBlockCache(i.leftCaret.node)) {
          if (null == g_strSpeechServerBackup) return;
          e.blockCache = !0
        }
      }
      g_lastTarget = e, e.prepareTextForSpeech();
      var l = e.textToSpeak;
      if (null != l && l.length > 0) {
        if ($rw_setSentenceFromSelection(), e.useHighlighting) {
          e.highlightRange();
          var s = e.textToSpeakNoChanges;
          rw_playMessage(l, e.blockCache, s)
        } else {
          var o = g_controllerFactory.getConnector();
          null != o && o.simpleSpeech(l, !g_bLocalPronunciationLoaded)
        }
        g_bContinuousReading && e.allowContinuous && (e.equals(g_finalSentence) ? (g_finalSentence = null, g_bCallPageCompleteOnSelectionEnd && g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()")) : rw_setupContinuousReading(e, e.blockCache))
      }
    }
  } catch (c) {
    thLog("rw_speakHoverTarget error:" + c.message)
  }
}

function rw_setupContinuousReading(e) {
  var t, r, n = e.range;
  if (null != n) r = n.body, t = rw_getCaretPairFromDomPosition(r, n.startRef.path, n.startRef.offset, n.endRef.path, n.endRef.offset);
  else {
    if (null == e.body || null == e.path) return void g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()");
    r = e.body;
    var a = new THCaret(rw_getNodeFromPosition(r, e.path), 0, (!0));
    t = new THCaretRange(a, a)
  }
  var o = rw_getNextSentence(t);
  if (null == o) return g_bReachedEnd = !0, void g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()");
  for (; !rw_caretRangeIsSpeakable(o);)
    if (o = rw_getNextSentence(o), null == o) return g_bReachedEnd = !0, void g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()");
  if (rw_checkForEndContinuousFlag(t.leftCaret.node, o.rightCaret.node)) return g_bReachedEnd = !0, void g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()");
  if (g_bReachedEnd = !1, g_bBubbleMode) {
    var i = rw_getStartOfParagraph(o.leftCaret.node);
    o.leftCaret.node = i, o.rightCaret.node = rw_getEndOfParagraph(o.rightCaret.node), o.leftCaret.offset = 0, 1 == o.rightCaret.node.nodeType ? o.rightCaret.offset = 0 : o.rightCaret.offset = o.rightCaret.node.length
  }
  var l = new THRange(r, rw_getRefPt(o.leftCaret.node, o.leftCaret.offset), rw_getRefPt(o.rightCaret.node, o.rightCaret.offset));
  g_nextTargetForContinuousReading = new THHoverTarget(null, null, l);
  var s = g_nextTargetForContinuousReading.getTextPreparedForSpeech();
  return null == s || 0 == s.length ? (g_bReachedEnd = !0, void g_astrSpeechInstructionQueue.push("rw_pageCompleteCallBack()")) : void g_astrSpeechInstructionQueue.push("setTimeout($rw_readNextTarget, 50);")
}

function rw_speechFromFile(e, t) {
  if (null != e && null != t) {
    if (rw_isSpeechBusy()) return g_aTargetQueue.push(t), g_aTargetQueue.push(e), void(0 == g_nTargetQueueTimerId && (g_nTargetQueueTimerId = setTimeout(rw_targetQueueTimer, 100)));
    if (g_lTargetQueueTime = (new Date)
      .getTime(), null != g_lastTarget && g_lastTarget.unhighlightRange(), e instanceof String) {
      g_lastTarget = null;
      try {
        var r = g_controllerFactory.getConnector();
        null != r && (rw_setSpeakingModeFlag(!0), r.startSpeechFromFile(e, t), rw_startSpeechCallback())
      } catch (n) {
        thLogE(n)
      }
    } else {
      g_lastTarget = e;
      var a = e.getTextPreparedForSpeech();
      null != a && a.length > 0 && (e.highlightRange(), rw_playMessageFromFile(a, t))
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
      null != t && t.length > 0 && (e.highlightRange(), rw_playMessageHighlighting(t))
    }
  }
}

function $rw_readNextTarget() {
  null != g_nextTargetForContinuousReading && (g_hoverTarget = g_nextTargetForContinuousReading, g_userDeterminedTarget = g_nextTargetForContinuousReading, g_nextTargetForContinuousReading = null, rw_doHoverStep2())
}

function rw_checkForEndContinuousFlag(e, t) {
  if (null == e || null == t || e == t) return !1;
  for (var r, n = e; null != n && n != t;) {
    if (1 == n.nodeType && null != n.getAttribute("texthelpStopContinuous")) return rw_stopContinuousCallBack(), !0;
    if (r = !rw_isInvalidNode(n), null != n.firstChild && r) n = n.firstChild;
    else if (null != n.nextSibling) n = n.nextSibling;
    else {
      for (; null != n && null == n.nextSibling;) {
        if (n = n.parentNode, null != n && 1 == n.nodeType && null != n.getAttribute("texthelpStopContinuous")) return rw_stopContinuousCallBack(), !0;
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
    var a = rw_getCaretPairFromDomPosition(e, t.path, t.offset, r.path, r.offset);
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
      var o = rw_checkForSpecialParent(n.node);
      null != o && (n.node = o, n.offset = 0)
    }
    if (null != a.node && 3 == a.node.nodeType) {
      var o = rw_checkForSpecialParent(a.node);
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
      null != g && (r.caretRange = new THCaretRange(e.leftCaret, g), a = g)
    }
    rw_getTextOverRangeToSpeakImpl(n, a, t);
    var _, u = t.length
      , d = new Array;
    for (_ = 0; _ < u; _++) d.push(t[_].word);
    var h = new SpeechStream.SpeechRequest;
    return h.setWordList(d, SpeechStream.SpeechRequestBookmarks.ALL), r.txtOrig = h.getText(), r.txt = h.getFinalText(), r
  } catch (p) {
    return thLog("err rw_getTextOverRangeToSpeak:|" + p.message), r
  }
}

function rw_isSpecialCase(e) {
  if (null == e) return !1;
  if (1 == e.nodeType) {
    var t = e.tagName.toLowerCase();
    if ("span" == t) {
      var r = e.getAttribute("pron");
      if (null != r) return !0;
      if (r = e.getAttribute("chunk"), null != r) return !0
    } else if ("acronym" == t || "abbr" == t) {
      var r = e.getAttribute("title");
      if (null != r) return !0
    } else {
      if ("chunk" == t) return !0;
      if ("img" == t) {
        var r = e.getAttribute("msg");
        if (null != r) return !0
      } else if ("math" == t) {
        var n = rw_getTextFromMathMl(e);
        if (n.length > 0) return !0
      }
    }
    if (null != e.getAttribute("ignore")) return !0
  }
  return !1
}

function rw_isSpecialCaseHighlightable(e) {
  if (1 == e.nodeType) {
    var t = e.tagName.toLowerCase();
    if ("span" == t) {
      var r = e.getAttribute("pron");
      if (null != r) return !0;
      if (r = e.getAttribute("chunk"), null != r && "1" == r) return !0
    } else if ("acronym" == t || "abbr" == t) {
      var r = e.getAttribute("title");
      if (null != r) return !0
    } else if ("math" == t) {
      var n = rw_getTextFromMathMl(e);
      if (n.length > 0) return !0
    }
  }
  return !1
}

function rw_checkForSpecialParent(e) {
  if (null != e) {
    for (var t = rw_getBody(e), r = e; null != r && r != t;) {
      if (rw_isSpecialCase(r)) return r;
      r = r.parentNode
    }
    if (r == t && null != r.getAttribute("ignore")) return r
  }
  return null
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
      n && (r >= 48 && r <= 57 ? (++a, a > 20 && (t += " ", a = 0)) : a = 0)
    }
  return t
}

function rw_getTextOverRangeToSpeakImpl(e, t, r) {
  try {
    for (var n = e.node, a = t.node, o = rw_getBody(n), i = e.offset, l = t.offset, s = "", c = n, g = null, _ = !0, u = 0, d = rw_getRefPt(c, i), h = null; null != c;) {
      if (u > MAX_WORDCOUNT_TO_SPEAK && MAX_WORDCOUNT_TO_SPEAK > 0) {
        if (g_bSpeechCacheGenerateFlag) throw "Full selection will not be spoken due to its length.";
        return void rw_alert("Full selection will not be spoken due to its length.")
      }
      if (rw_isSpecialCase(c)) {
        s.length > 0 && (rw_wordIsSpeakable(s) && (r[u++] = new THWordNode(new THRange(o, d, h), s)), s = "");
        var p = rw_getTextFromNode(c);
        if (p.length > 0 && rw_wordIsSpeakable(p)) {
          if (rw_isSpecialCaseHighlightable(c)) {
            var f = rw_getFirstChildTextNode(c, !1)
              , m = rw_getLastChildTextNode(c, !1)
              , b = ""
              , w = "";
            1 == f.nodeType && (b = f.tagName.toLowerCase()), 1 == m.nodeType && (w = m.tagName.toLowerCase()), null != f && 3 == f.nodeType && null != m && 3 == m.nodeType && (d = rw_getRefPt(f, 0), h = rw_getRefPt(m, m.nodeValue.length)), null != f && 1 == f.nodeType && "math" == b && null != m && 1 == m.nodeType && "math" == w && (d = rw_getRefPt(f, 0), h = rw_getRefPt(m, p.length)), r[u++] = new THWordNode(new THRange(o, d, h), p)
          } else d = rw_getRefPt(c, -1), r[u++] = new THWordNode(new THRange(o, d, d), p);
          s = ""
        }
        d = null, h = null, c = rw_getNextNodeIgnoreChildren(c, !1, a)
      } else if (1 == c.nodeType) g = _ ? rw_getNextNodeAllowMoveToChild(c, !0, a) : rw_getNextNode(c, !0, a), null == g ? (s.length > 0 && (rw_wordIsSpeakable(s) && (r[u++] = new THWordNode(new THRange(o, d, h), rw_getTextOverRangeToSpeakAddFullStop(s))), s = "", d = null, h = null), c = _ ? rw_getNextNodeAllowMoveToChild(c, !1, a) : rw_getNextNode(c, !1, a)) : c = g;
      else if (3 == c.nodeType) {
        var p = rw_getTextFromNode(c);
        null == p && (p = "");
        var S = 0;
        if (a == c && l > -1 && (p = p.substring(0, l)), n == c && i > 0 && (p = p.substring(i), S = i), 0 == p.length && 0 == s.length) d = null;
        else {
          null != d && 0 != s.length || (d = rw_getRefPt(c, S));
          for (var T = rw_getBreakInCurrentWord(p); T > -1;) {
            if (0 == T)
              if (s.length > 0) {
                if (rw_wordIsSpeakable(s)) {
                  null == h && (h = rw_getRefPt(c, S));
                  var v = new THRange(o, d, h);
                  if (g_bMP) {
                    var C = null
                      , y = null
                      , E = c.parentNode;
                    null != E && 1 == E.nodeType && (C = E.getAttribute("class"), y = E.getAttribute("className"));
                    var N = !1;
                    N = null != C && ("x2" == C.toLowerCase() || "x3" == C.toLowerCase()) || null != y && ("x2" == y.toLowerCase() || "x3" == y.toLowerCase());
                    for (var I = !1; N;) {
                      if (null != E.previousSibling && 1 == E.previousSibling.nodeType) {
                        if (C = E.previousSibling.getAttribute("class"), y = E.previousSibling.getAttribute("className"), null != C && C.length > 3 && (C = C.substr(C.length - 4)
                            .toLowerCase(), "text" == C)) {
                          I = !0;
                          break
                        }
                        if (null != y && y.length > 3 && (y = y.substr(y.length - 4)
                            .toLowerCase(), "text" == y)) {
                          I = !0;
                          break
                        }
                        break
                      }
                      if (E = E.parentNode, null == E || 1 != E.nodeType || "span" != E.tagName.toLowerCase()) break
                    }
                    if (N) I || (s += p.substr(0, 1));
                    else if (null != c.previousSibling) C = c.previousSibling.getAttribute("class"), y = c.previousSibling.getAttribute("className"), (null == C || "x2" != C.toLowerCase() && "x3" != C.toLowerCase()) && (null == y || "x2" != y.toLowerCase() && "x3" != y.toLowerCase()) || (s += p.substr(0, 1));
                    else {
                      for (var E = c, A = !1; null == E.previousSibling && "span" == E.parentNode.tagName.toLowerCase();) E = E.parentNode, null != E.previousSibling && (A = !0);
                      A && null != E.previousSibling && (C = E.previousSibling.getAttribute("class"), y = E.previousSibling.getAttribute("className"), (null == C || "x2" != C.toLowerCase() && "x3" != C.toLowerCase()) && (null == y || "x2" != y.toLowerCase() && "x3" != y.toLowerCase()) || (s += p.substr(0, 1)))
                    }
                  } else s += p.substr(0, 1);
                  r[u++] = new THWordNode(v, s)
                }
                s = "", ++S, p = p.substr(1)
              } else p = p.substr(1), ++S;
            else {
              var P = s + p.substring(0, T + 1);
              if ("*" == P.trimTH() && (g_bMathsSymbols && rw_mathsSymbolCheck("*") || (P = "")), rw_wordIsSpeakable(P)) {
                h = rw_getRefPt(c, T + S);
                var v = new THRange(o, d, h);
                if (r[u++] = new THWordNode(v, P), u > MAX_WORDCOUNT_TO_SPEAK && MAX_WORDCOUNT_TO_SPEAK > 0) {
                  if (g_bSpeechCacheGenerateFlag) throw "Full selection will not be spoken due to its length.";
                  return void rw_alert("Full selection will not be spoken due to its length.")
                }
              }
              s = "", S += T + 1, p = p.substring(T + 1)
            }
            d = rw_getRefPt(c, S), h = null, T = rw_getBreakInCurrentWord(p)
          }
          if (p.length > 0 && (s += p, h = rw_getRefPt(c, p.length + S), null == h && (s = "")), c == a) {
            if (s.length > 0) {
              var v = new THRange(o, d, h);
              rw_wordIsSpeakable(s) && (r[u++] = new THWordNode(v, s))
            }
            return
          }
        }
        g = rw_getNextNode(c, !0, a), null == g ? (s.length > 0 && (rw_wordIsSpeakable(s) && (r[u++] = new THWordNode(new THRange(o, d, h), rw_getTextOverRangeToSpeakAddFullStop(s))), s = "", d = null, h = null), c = rw_getNextNode(c, !1, a)) : c = g
      } else g = rw_getNextNode(c, !0, a), null == g ? (s.length > 0 && (rw_wordIsSpeakable(s) && (r[u++] = new THWordNode(new THRange(o, d, h), rw_getTextOverRangeToSpeakAddFullStop(s))), s = "", d = null, h = null), c = rw_getNextNode(c, !1, a)) : c = g;
      _ = !1
    }
  } catch (k) {
    thLog("err rw_getTextOverRangeToSpeakImpl:" + k.message)
  }
}

function rw_getBreakInCurrentWord(e) {
  if (null == e || 0 == e.length) return -1;
  var t = e.search("\\s");
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
    null != t && $rw_setSpeedValue(parseInt(t)), null != e && $rw_setVoice(e);
    var a = rw_getFirstSentence(document.body);
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
      var l = rw_getNextSentence(r);
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
    r = rw_getNextSentence(r)
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
  var t = rw_getCaretFromDomPosition(e.body, e.startRef.path, e.startRef.offset, !0)
    , r = rw_getCaretFromDomPosition(e.body, e.endRef.path, e.endRef.offset, !1);
  return null != t && null != r ? new THCaretRange(e.body, t, r) : null
}

function rw_getTHCaretRangeFromTHRange(e) {
  if (null == e || null == e.startRef || null == e.endRef) return null;
  var t = rw_getCaretFromDomPosition(e.body, e.startRef.path, e.startRef.offset, !0)
    , r = rw_getCaretFromDomPosition(e.body, e.endRef.path, e.endRef.offset, !1);
  return null != t && null != r ? new THCaretRange(t, r) : null
}

function rw_isNestedInvalid(e) {
  if (null == e) return !1;
  for (var t = e.ownerDocument.body, r = e; null != r && r != t;) {
    if (rw_isInvalidNode(r)) return !0;
    r = r.parentNode
  }
  return !1
}

function rw_getPreviousNode(e, t, r) {
  if (null == e || e == r) return null;
  var n = e;
  if (null != n.previousSibling) {
    if (n = n.previousSibling, t && !rw_isStyleNode(n)) return null;
    if (null != n && rw_isInvalidNode(n)) {
      if (r == n) return null;
      n = rw_getPreviousNode(n, t, r)
    } else
      for (; null != n && null != n.lastChild && (1 != n.nodeType || "math" != n.tagName.toLowerCase());)
        if (n = n.lastChild, t && (rw_isStyleNode(n) || (n = null)), null != n && rw_isInvalidNode(n)) {
          if (r == n) return null;
          n = rw_getPreviousNode(n, t, r);
          break
        }
  } else n = n.parentNode, t && (rw_isStyleNode(n) || (n = null));
  return n
}

function rw_getNextNode(e, t, r) {
  if (null == e || e == r) return null;
  var n = rw_isInvalidNode(e);
  1 == e.nodeType && "math" == e.tagName.toLowerCase() && (n = !0);
  var a = e;
  if (null == a.firstChild || n)
    if (null != a.nextSibling) a = a.nextSibling;
    else {
      for (; null != a && null == a.nextSibling && (a = a.parentNode, t && (rw_isStyleNode(a) || (a = null)), r != a););
      null != a && r != a && (a = a.nextSibling)
    }
  else a = a.firstChild;
  return null != a && t && (rw_isStyleNode(a) || (a = null)), null != a && rw_isInvalidNode(a) && (a = a != r ? rw_getNextNode(a, t, r) : null), a
}

function rw_getNextNodeAllowMoveToChild(e, t, r) {
  if (null == e) return null;
  var n = rw_isInvalidNode(e)
    , a = e;
  if (null == a.firstChild || n)
    if (null != a.nextSibling) a = e == r ? null : a.nextSibling;
    else if (e == r) a = null;
  else {
    for (; null != a && null == a.nextSibling && (a = a.parentNode, t && 0 == rw_isStyleNode(a) && (a = null), r != a););
    null != a && r != a && (a = a.nextSibling)
  } else a = a.firstChild;
  return null != a && t && 0 == rw_isStyleNode(a) && (a = null), null != a && rw_isInvalidNode(a) && (a = a != r ? rw_getNextNode(a, t, r) : null), a
}

function rw_getPreviousNodeIgnoreChildren(e, t, r) {
  if (null == e || e == r) return null;
  var n = e;
  return null != n.previousSibling ? (n = n.previousSibling, t && (rw_isStyleNode(n) || (n = null)), null != n && rw_isInvalidNode(n) && (n = r == n ? null : rw_getPreviousNodeIgnoreChildren(n, t, r))) : (n = n.parentNode, t && (rw_isStyleNode(n) || (n = null))), n
}

function rw_getNextNodeIgnoreChildren(e, t, r) {
  if (null == e || e == r) return null;
  var n = e;
  if (null != n.nextSibling) n = n.nextSibling;
  else {
    for (; null != n && null == n.nextSibling && (n = n.parentNode, t && 0 == rw_isStyleNode(n) && (n = null), r != n););
    null != n && n != r && (n = n.nextSibling)
  }
  return null != n && t && 0 == rw_isStyleNode(n) && (n = null), null != n && rw_isInvalidNode(n) && (n = n == r ? null : rw_getNextNodeIgnoreChildren(n, t, r)), n
}

function rw_getFirstChildTextNode(e, t) {
  if (null == e) return null;
  if (null == e.firstChild || rw_isInvalidNode(e)) return e;
  if (1 == e.nodeType && "textarea" == e.tagName.toLowerCase()) return e;
  if (1 == e.nodeType && "math" == e.tagName.toLowerCase()) return e;
  var r = e.firstChild;
  return 3 == r.nodeType ? r : 1 == r.nodeType && t && "img" == r.tagName.toLowerCase() && null != r.getAttribute("msg") && r.getAttribute("msg")
    .length > 0 ? r : t ? rw_getNextTextNode(r, !1, e) : rw_getNextTextNodeNoImg(r, !1, e, !0)
}

function rw_getLastChildTextNode(e, t) {
  if (null == e) return null;
  if (null == e.lastChild || rw_isInvalidNode(e)) return e;
  if (1 == e.nodeType && "textarea" == e.tagName.toLowerCase()) return e;
  if (1 == e.nodeType && "math" == e.tagName.toLowerCase()) return e;
  for (var r = e.lastChild; null != r;) {
    if (3 == r.nodeType) return r;
    if (1 == r.nodeType && t && "img" == r.tagName.toLowerCase() && null != r.getAttribute("msg") && r.getAttribute("msg")
      .length > 0) return r;
    if (rw_isInvalidNode(r) || null == r.lastChild) {
      var n;
      return n = t ? rw_getPreviousTextNode(r, !1, e) : rw_getPreviousTextNodeNoImg(r, !1, e, !0)
    }
    r = r.lastChild
  }
  return e
}

function rw_getNextNodeIEBugFix(e) {
  var t = rw_isInvalidNode(e)
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
  return null != r && rw_isInvalidNode(r) && (r = rw_getNextNodeIEBugFix(r)), r
}

function rw_getSentenceBreakToLeft(e, t) {
  if ("undefined" == typeof t && (t = null), null == e || null == e.node) return null;
  var r = e.node
    , n = e.offset;
  if (1 == e.node.nodeType && "math" == e.node.tagName.toLowerCase()) return e;
  if (e.forwardBias) 3 == r.nodeType && n == r.nodeValue.length && (r = rw_getNextTextNode(r, !0, t), n = 0, null == r && (r = e.node, n = e.offset));
  else if (n > 0) --n;
  else {
    if (r = rw_getPreviousTextNode(r, !0, t), null == r) return e;
    if (3 == r.nodeType) n = r.nodeValue.length - 1;
    else if (n = 0, "math" == r.tagName.toLowerCase()) return e
  }
  if (3 == r.nodeType) {
    var a = r.nodeValue.charAt(n);
    if ("." == a || "!" == a || "?" == a || ":" == a)
      if (n > 0) --n;
      else {
        if (r = rw_getPreviousTextNode(r, !0, t), null == r) return e;
        if (3 == r.nodeType) n = r.nodeValue.length - 1;
        else if (n = 0, "math" == r.tagName.toLowerCase()) return e
      }
  }
  for (var o = r, i = n, l = r, s = n, c = !1, g = " "; !c;) {
    if (3 == l.nodeType) {
      var _ = l.nodeValue;
      if (_.length > 0) {
        s == -1 && (s = _.length), _ = _.replace(/[\x21\x3f\x3a]/g, ".");
        for (var u = _.lastIndexOf(".", s); u > -1;) {
          if (rw_isFullStop(_, u, l)) {
            if (u < _.length - 1) {
              o = l, i = u + 1, c = !0;
              break
            }
            if (!rw_isTextChar(g)) {
              c = !0;
              break
            }
          }
          u = 0 == u ? -1 : _.lastIndexOf(".", u - 1)
        }
        if (c) break;
        _.trimTH()
          .length > 0 && (o = l, i = 0), g = _.charAt(0)
      }
    } else if (rw_isSpecialCase(l) && null == l.getAttribute("ignore")) {
      if ("math" == l.tagName.toLowerCase()) {
        c = !0;
        break
      }
      o = l, i = 0
    }
    if (l = rw_getPreviousNode(l, !0, t), s = -1, null == l) {
      c = !0;
      break
    }
    3 == l.nodeType && null != rw_checkForSpecialParent(l) && (l = rw_checkForSpecialParent(l), l = rw_getPreviousNode(l, !0, t))
  }
  if (3 == o.nodeType) {
    var _ = o.nodeValue;
    if (i < _.length)
      for (; i < _.length && rw_isWhiteSpace(_.charAt(i));) ++i
  }
  return new THCaret(o, i, (!0))
}

function rw_getSentenceBreakToRight(e, t) {
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
      r = rw_getNextNode(r, !0, t)
    } else if (rw_isSpecialCase(r) && null == r.getAttribute("ignore")) {
      if ("math" == r.tagName.toLowerCase()) {
        i = !0;
        break
      }
      a = r, o = 0, r = rw_getNextNodeIgnoreChildren(r, !0, t)
    } else r = rw_getNextNode(r, !0, t);
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
}

function rw_getPreviousTextNode(e, t, r) {
  for (var n = e, a = !1; null != n && n != r;)
    if (n = rw_getPreviousNode(n, t, r), null != n) {
      if (3 == n.nodeType && "textarea" != n.parentNode.tagName.toLowerCase() && (a = !0), 1 == n.nodeType && "math" == n.tagName.toLowerCase()) a = !0;
      else if (1 == n.nodeType && "img" == n.tagName.toLowerCase()) {
        var o = n.getAttribute("msg");
        null != o && o.length > 0 && (a = !0);
      }
      if (a) return n
    }
  return null
}

function rw_getPreviousTextNodeNoBlank(e, t, r) {
  for (var n = e; null != n && n != r;)
    if (n = rw_getPreviousTextNode(n, t, r), null != n) {
      var a = 3 == n.nodeType ? n.nodeValue.trimTH() : n.getAttribute("msg")
        .trimTH();
      if (rw_wordIsSpeakable(a)) return n
    }
  return null
}

function rw_getPreviousTextNodeNoImg(e, t, r, n) {
  for (var a = n ? rw_getPreviousTextNode(e, t, r) : rw_getPreviousTextNodeNoBlank(e, t, r); null != a && 3 != a.nodeType && a != r && "math" != a.tagName.toLowerCase();) a = n ? rw_getPreviousTextNode(a, t, r) : rw_getPreviousTextNodeNoBlank(a, t, r);
  return a
}

function rw_getNextTextNode(e, t, r) {
  for (var n = e, a = !1; null != n && n != r;)
    if (n = rw_getNextNode(n, t, r), null != n) {
      if (3 == n.nodeType && "textarea" != n.parentNode.tagName.toLowerCase() && (a = !0), 1 == n.nodeType && "math" == n.tagName.toLowerCase()) a = !0;
      else if (1 == n.nodeType && "img" == n.tagName.toLowerCase()) {
        var o = n.getAttribute("msg");
        null != o && o.length > 0 && (a = !0)
      }
      if (a) return n
    }
  return null
}

function rw_getNextTextNodeNoBlank(e, t, r) {
  for (var n = e; null != n && n != r;)
    if (n = rw_getNextTextNode(n, t, r), null != n) {
      var a;
      if (3 == n.nodeType ? a = n.nodeValue.trimTH() : "img" == n.tagName.toLowerCase() ? a = n.getAttribute("msg")
        .trimTH() : "math" == n.tagName.toLowerCase() && (a = rw_getTextFromMathMl(n)), rw_wordIsSpeakable(a)) return n
    }
  return null
}

function rw_getNextTextNodeNoImg(e, t, r, n) {
  for (var a = n ? rw_getNextTextNode(e, t, r) : rw_getNextTextNodeNoBlank(e, t, r); null != a && 3 != a.nodeType && a != r && "math" != a.tagName.toLowerCase();) a = n ? rw_getNextTextNode(a, t, r) : rw_getNextTextNodeNoBlank(a, t, r);
  return a
}

function rw_getFirstSentence(e) {
  var t = rw_getFirstChildTextNode(e, !0)
    , r = new THCaret(t, 0, (!0))
    , n = rw_getSentenceBreakToRight(r, e);
  if (r = rw_getSentenceBreakToLeft(n, e), null == r || null == n) return null;
  for (var a = new THCaretRange(r, n), o = !1; !o;)
    if (o = rw_caretRangeIsSpeakable(a) && rw_checkSentence(a), !o) {
      var i = rw_getNextSentence(a, e);
      if (null == i || n.node == i.rightCaret.node && n.offset == i.rightCaret.offset || r.node == i.leftCaret.node && r.offset == i.leftCaret.offset) break;
      a = i
    }
  return a
}

function rw_getLastSentence(e) {
  var t, r = rw_getLastChildTextNode(e, !0);
  t = 3 == r.nodeType ? new THCaret(r, r.nodeValue.length, (!1)) : new THCaret(r, (-1), (!1));
  var n = rw_getSentenceBreakToLeft(t, e);
  if (t = rw_getSentenceBreakToRight(n, e), null == n || null == t) return null;
  for (var a = new THCaretRange(n, t), o = !1; !o;)
    if (o = rw_caretRangeIsSpeakable(a) && rw_checkSentence(a), !o) {
      var i = rw_getPreviousSentence(a, e);
      if (null == i || t.node == i.rightCaret.node && t.offset == i.rightCaret.offset || n.node == i.leftCaret.node && n.offset == i.leftCaret.offset) break;
      a = i
    }
  return a
}

function rw_getSentenceFromPoint(e) {
  var t = rw_getSentenceBreakToRight(e)
    , r = rw_getSentenceBreakToLeft(t);
  return null == r || null == t ? null : new THCaretRange(r, t)
}

function rw_getSentenceFromPoints(e, t) {
  var r = rw_getSentenceBreakToLeft(e, null)
    , n = rw_getSentenceBreakToRight(t, null);
  return null == r || null == n ? null : new THCaretRange(r, n)
}

function rw_getNextSentence(e, t) {
  if (null == e) return null;
  "undefined" == typeof t && (t = null);
  var r = e.rightCaret.node
    , n = e.rightCaret.offset;
  n == SPECIAL_CASE && (r = rw_getNextNodeIgnoreChildren(r, !1, t), n = 0);
  for (var a, o; null != r;) {
    if (3 == r.nodeType && n < r.nodeValue.length) {
      if (a = rw_getSentenceBreakToRight(new THCaret(r, n, (!1)), t), null == a) return null;
      if (a.node == r && a.offset == n) {
        var i = rw_getNextTextNodeNoBlank(r, !1, t);
        if (null == i) return null;
        a = rw_getSentenceBreakToRight(new THCaret(i, 0, (!1)), t)
      }
    } else {
      var i = rw_getNextTextNodeNoBlank(r, !1, t);
      if (null == i) return null;
      a = rw_getSentenceBreakToRight(new THCaret(i, 0, (!1)), t)
    }
    if (o = rw_getSentenceBreakToLeft(a, null), null == o) return null;
    if (e.leftCaret.node != o.node || e.leftCaret.offset != o.offset) {
      var l = new THCaretRange(o, a);
      if (rw_checkSentence(l) && rw_caretRangeIsSpeakable(l)) return l
    }
    if (r = a.node, 3 == r.nodeType) {
      var s = r.nodeValue.replace(/[\x21\x3f\x3a]/g, ".")
        , c = s.indexOf(".", a.offset + 1);
      n = c == -1 ? s.length : c
    }
  }
  return null
}

function rw_getPreviousSentence(e, t) {
  "undefined" == typeof t && (t = null);
  for (var r, n, a = e.leftCaret.node, o = e.leftCaret.offset; null != a;) {
    if (3 == a.nodeType) {
      var i, l = a.nodeValue.replace(/[\x21\x3f\x3a]/g, ".");
      for (i = o > 0 ? l.lastIndexOf(".", o) : 0 == o ? -1 : l.lastIndexOf("."); i > -1;) {
        if (o = i, n = rw_getSentenceBreakToRight(new THCaret(a, o, (!0)), t), null == n) return null;
        if (n.node != e.rightCaret.node || n.offset != e.rightCaret.offset) {
          if (r = rw_getSentenceBreakToLeft(n, t), null == r) return null;
          var s = new THCaretRange(r, n);
          if (rw_checkSentence(s) && rw_caretRangeIsSpeakable(s)) return s
        }
        i = 0 == i ? -1 : l.lastIndexOf(".", i - 1)
      }
    }
    if (o = -1, tmpNode = rw_getPreviousTextNodeNoImg(a, !0, t, !1), null != tmpNode) a = tmpNode;
    else if (a = rw_getPreviousTextNodeNoBlank(a, !1, t), null != a) {
      if (n = 3 == a.nodeType ? rw_getSentenceBreakToRight(new THCaret(a, a.nodeValue.length, (!1)), t) : rw_getSentenceBreakToRight(new THCaret(a, 0, (!1)), t), null == n) return null;
      if (n.node != e.rightCaret.node || n.offset != e.rightCaret.offset) return r = rw_getSentenceBreakToLeft(n, t), null == r ? null : new THCaretRange(r, n)
    }
  }
  return null
}

function rw_checkSentence(e) {
  for (var t = e.leftCaret.node, r = t.ownerDocument.body; null != t && t != r;) {
    if (1 == t.nodeType && null != t.getAttribute(RWTH_COMPONENT)) return !1;
    t = t.parentNode
  }
  var n = e.rightCaret.node;
  if (n != t)
    for (; null != n && n != r;) {
      if (1 == n.nodeType && null != n.getAttribute(RWTH_COMPONENT)) return !1;
      n = n.parentNode
    }
  return !0
}

function rw_getStartOfParagraph(e) {
  for (var t, r = e, n = rw_getPreviousNode(e, !0, null); null != n;) t = !1, 1 == n.nodeType ? rw_isSpecialCase(n) ? null != n.getAttribute("ignore") && (t = !0) : t = !0 : 3 == n.nodeType && 0 == n.nodeValue.trimTH()
    .length && (t = !0), t || (r = n), n = rw_getPreviousNode(n, !0, null);
  return r
}

function rw_getEndOfParagraph(e) {
  for (var t, r = e, n = rw_getNextNode(e, !0, null); null != n;) t = !1, 1 == n.nodeType ? rw_isSpecialCase(n) ? null != n.getAttribute("ignore") && (t = !0) : t = !0 : 3 == n.nodeType && 0 == n.nodeValue.trimTH()
    .length && (t = !0), t || (r = n), n = rw_getNextNode(n, !0, null);
  return r
}

function rw_splitText(e, t) {
  if (null == e || 3 != e.nodeType || null == e.parentNode) return e;
  var r = 0
    , n = e.parentNode
    , a = n.parentNode;
  if (null == a || "xmlns:texthelpns" != n.tagName.toLowerCase() || "xmlns:texthelpns" != a.tagName.toLowerCase() || null == n.getAttribute(RWTH_GENERATED) || null == a.getAttribute(RWTH_GENERATED) && null == a.getAttribute(RWTH_PERM_GENERATED) ? "xmlns:texthelpns" != n.tagName.toLowerCase() || null == n.getAttribute(RWTH_GENERATED) && null == n.getAttribute(RWTH_PERM_GENERATED) || (r = 1) : r = 2, 0 == e.nodeValue.length || t <= 0 || t >= e.nodeValue.length) {
    if (0 == r) {
      var o = document.createElement("xmlns:texthelpns");
      o.setAttribute(RWTH_GENERATED, "1");
      var i = document.createElement("xmlns:texthelpns");
      i.setAttribute(RWTH_GENERATED, "1"), n.insertBefore(o, e), o.appendChild(i), i.appendChild(e)
    } else if (1 == r) {
      var o = document.createElement("xmlns:texthelpns");
      o.setAttribute(RWTH_GENERATED, "1"), n.insertBefore(o, e), o.appendChild(e)
    }
    return e
  }
  var l = e.nodeValue
    , s = l.substring(0, t)
    , c = l.substring(t)
    , i = document.createElement("xmlns:texthelpns")
    , g = document.createElement("xmlns:texthelpns")
    , _ = document.createTextNode(s)
    , u = document.createTextNode(c);
  if (i.appendChild(_), g.appendChild(u), i.setAttribute(RWTH_GENERATED, "1"), g.setAttribute(RWTH_GENERATED, "1"), 2 == r) a.insertBefore(g, n), a.insertBefore(i, g), a.removeChild(n);
  else if (1 == r) n.insertBefore(i, e), n.insertBefore(g, e), n.removeChild(e);
  else {
    var o = document.createElement("xmlns:texthelpns");
    o.setAttribute(RWTH_GENERATED, "1"), o.appendChild(i), o.appendChild(g), n.insertBefore(o, e), n.removeChild(e)
  }
  return u
}

function rw_isStyleNode(e) {
  if (1 != e.nodeType) return 3 == e.nodeType;
  var t = e.tagName.toLowerCase()
    .trimTH();
  if ("thtag" == t) {
    var r = e.getAttribute("started");
    if (null != r && "1" == r) return !1
  }
  return ("xmlns:texthelpns" != t || null == e.getAttribute("texthelpSkip")) && ("em" == t || "strong" == t || "b" == t || "i" == t || "u" == t || "tt" == t || "font" == t || "kbd" == t || "dfn" == t || "cite" == t || "sup" == t || "sub" == t || "a" == t || "embed" == t || "span" == t || "texthelpns:sent" == t || "xmlns:texthelpns" == t || "small" == t || "nobr" == t || "wbr" == t || "acronym" == t || "abbr" == t || "code" == t || "s" == t || "chunk" == t || "th:pron" == t || "img" == t || "/th:pron" == t || "w" == t || "/w" == t || "lic" == t || "/lic" == t || "thtag" == t)
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

function rw_isIgnored(e) {
  if (null != e && 3 == e.nodeType && (e = e.parentNode), null == e) return !0;
  for (var t = e.ownerDocument.body, r = e; null != r && 1 == r.nodeType;) {
    if (null != r.getAttribute("ignore")) return !0;
    if (r == t) break;
    r = r.parentNode
  }
  return !1
}

function rw_isLineBreakNode(e) {
  if (1 != e.nodeType) return !1;
  var t = e.tagName.toLowerCase()
    .trimTH();
  return "p" == t || "br" == t || "head" == t || "body" == t || "hr" == t || "div" == t || "h1" == t || "h2" == t || "h3" == t || "h4" == t || "h5" == t || "h6" == t || "blockquote" == t || "table" == t || "tbody" == t || "tr" == t || "td" == t || "th" == t
}

function rw_getAllTextFromNode(e) {
  var t = "";
  if (3 == e.nodeType) 0 == rw_isInvalidNode(e.parentNode) && "textarea" != e.parentNode.tagName.toLowerCase() && (t = e.nodeValue);
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
          .length > 0 && (t = a.trimTH(), n = !0)
      } else if ("acronym" == r || "abbr" == r) {
        var a = e.getAttribute("pron");
        null != a && a.trimTH()
          .length > 0 ? t = a.trimTH() : (a = e.getAttribute("title"), null != a && a.trimTH()
            .length > 0 && (t = a.trimTH(), n = !0))
      } else "math" == r && (t = rw_getTextFromMathMl(e))
    }
    if (!n)
      for (var o = e.firstChild; null != o;) t += rw_getAllTextFromNode(o), o = o.nextSibling
  }
  return t
}

function rw_getTextFromNode(e) {
  var t = "";
  if (3 == e.nodeType) rw_isInvalidNode(e.parentNode) || "textarea" == e.parentNode.tagName.toLowerCase() || (t = e.nodeValue);
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
          .length > 0 && (t = n.trimTH()), n = e.getAttribute("chunk"), null != n && "1" == n && (t = e.innerHTML)
      } else if ("acronym" == r || "abbr" == r) {
        var n = e.getAttribute("pron");
        null != n && n.trimTH()
          .length > 0 ? t = n.trimTH() : (n = e.getAttribute("title"), null != n && n.trimTH()
            .length > 0 && (t = n.trimTH()))
      } else "math" == r && (t = rw_getTextFromMathMl(e))
    }
  return t
}

function rw_getTextOverRange(e, t, r) {
  try {
    if (null == t || null == r) return "";
    var n = rw_getCaretPairFromDomPosition(e, t.path, t.offset, r.path, r.offset);
    return rw_getTextOverCaretRange(n)
  } catch (a) {
    return thLog("Error rw_getTextOverRange: " + a.message), ""
  }
}

function rw_getTextOverCaretRange(e) {
  try {
    if (null == e || null == e.leftCaret || null == e.rightCaret) return "";
    for (var t = e.leftCaret, r = e.rightCaret, n = t.node, a = r.node, o = !0, i = n, l = ""; null != i;) {
      var s = rw_getTextFromNode(i);
      null != s && "" != s && (i == a && r.offset > -1 && (s = s.substring(0, r.offset)), i == n && t.offset > -1 && (s = s.substring(t.offset)), l += s), i = o ? rw_getNextNodeAllowMoveToChild(i, !1, a) : rw_getNextTextNode(i, !1, a), o = !1
    }
    return l.trimTH()
  } catch (c) {
    return thLog("Error rw_getTextOverCaretRange: " + c.message), ""
  }
}

function rw_getTextSpokenOverCaretRange(e) {
  try {
    if (null == e || null == e.leftCaret || null == e.rightCaret) return "";
    for (var t = e.leftCaret, r = e.rightCaret, n = t.node, a = r.node, o = !1, i = n, l = ""; null != i;) {
      if (o = rw_isSpecialCase(i), o || 3 == i.nodeType) {
        var s = rw_getTextFromNode(i);
        null != s && "" != s && (i == a && r.offset > -1 && (s = s.substring(0, r.offset)), i == n && t.offset > -1 && (s = s.substring(t.offset)), l += s)
      }
      i = o ? rw_getNextNodeIgnoreChildren(i, !1, a) : rw_getNextNode(i, !1, a)
    }
    return l.trimTH()
  } catch (c) {
    return thLog("Error rw_getTextOverCaretRange: " + c.message), ""
  }
}

function rw_textFromFormTH(e) {
  var t = null
    , r = e.tagName.toLowerCase()
    , n = rw_getPositionInDom(e);
  if ("input" == r) {
    var a = e.getAttribute("type");
    null != a && (a = a.toLowerCase());
    var o = "";
    null == a || a.equalsTH("") || a.equalsTH("text") ? o = e.value : a.equalsTH("password") ? o = "Masked password field" : a.equalsTH("image") ? o = "" : (a.equalsTH("button") || a.equalsTH("submit") || a.equalsTH("reset")) && (o = e.getAttribute("value")), 0 == o.equalsTH("") && (t = "form:" + n + ";" + o)
  } else if ("select" == r) {
    for (var o = "", i = e.selectedIndex, l = "", s = 0; s < e.options.length; s++) l += e.options[s].text + " ";
    0 == l.equalsTH("") && (i > -1 ? (o = e.options[i].text, o += " selected from the list " + l) : o = "No selection from the list " + l, t = "form" + n + ";" + o)
  } else if ("textarea" == r) {
    var o = e.value;
    t = "form" + n + ";" + o
  } else if ("option" == r) {
    var o = e.value;
    t = "form" + n + ";" + o
  }
  return t
}

function rw_getTargetElement(e) {
  var t;
  return t = g_bIE ? e.srcElement : g_bSafari ? e.target : e.target
}

function rw_getClickPoint(e) {
  var t, r = null;
  if (g_bIE) {
    if (t = e.srcElement, 1 == t.nodeType && "textarea" == t.tagName.toLowerCase());
    else if (r = rw_getTargetNodeAsCaretIE(e, !0), null != r && (null == r.node || null == r.node.parentNode || r.node.parentNode != t)) return r = null, null
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
}

function rw_getPositionInDom(e) {
  var t = ""
    , r = 0
    , n = "";
  if (null != e && null != e.ownerDocument)
    for (var a = !1, o = !1, i = e.ownerDocument.body; null != e && e != i;) {
      rw_isSpecialCase(e) && (t = ""), a = 3 == e.nodeType || 1 == e.nodeType && "FONT" == e.tagName && null != e.getAttribute("rwstate");
      for (var l = e.previousSibling; null != l;) o = 3 == l.nodeType || 1 == l.nodeType && "FONT" == l.tagName && null != l.getAttribute("rwstate"), a && o || ++r, l = l.previousSibling, a = o;
      if (t = t + r + "~", r = 0, e = e.parentNode, null != e && null != e.getAttribute && null != e.tagName) {
        var s = e.getAttribute("chunk");
        if ("span" == e.tagName.toLowerCase() && "1" == s) {
          var c = rw_getPositionInDom(e);
          n = "#^th*" + c + "#^th*"
        }
      }
    }
  return n + t
}

function rw_getNodeFromPosition(e, t) {
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
    l = 0 == o[a].length ? 0 : parseInt(o[a]);
    for (var s = !1, c = 3 == r.nodeType || 1 == r.nodeType && "FONT" == r.tagName && null != r.getAttribute("rwstate"); l > 0;) {
      if (r = r.nextSibling, null == r) return null;
      s = 3 == r.nodeType || 1 == r.nodeType && "FONT" == r.tagName && null != r.getAttribute("rwstate"), s && c || (--l, c = s)
    }
  }
  return r
}

function rw_getCaretFromDomPosition(e, t, r, n) {
  try {
    if (null == e) return null;
    var a = rw_getNodeFromPosition(e, t);
    if (rw_isSpecialCase(a)) {
      if (rw_isSpecialCaseHighlightable(a)) {
        if (n) {
          var o = rw_getFirstChildTextNode(a, !1);
          return null != o ? new THCaret(o, 0, n) : new THCaret(a, 0, n)
        }
        var i = rw_getLastChildTextNode(a, !1);
        return null != i ? 3 == i.nodeType ? new THCaret(i, i.length, n) : new THCaret(i, 0, n) : new THCaret(a, 0, n)
      }
      return new THCaret(a, 0, n)
    }
    var l = 0;
    if (0 == n && ++l, r > -1) {
      if (null == a) return null;
      for (var s, c = !1, i = a.parentNode, g = a; 0 == c;) {
        if (3 == a.nodeType) {
          if (s = a.nodeValue, r < l + s.length) {
            c = !0;
            break
          }
          g = a, l += a.nodeValue.length, a = rw_getNextNode(a, !1, i)
        } else if (1 == a.nodeType)
          if (rw_isSpecialCase(a)) {
            var _ = r - l;
            if (!(_ > 0)) {
              c = !0;
              break
            }
            l += 1, a = rw_getNextNodeIgnoreChildren(a, !1, i)
          } else a = rw_getNextNode(a, !1, i);
        if (null == a || a == i) {
          if (null != g) {
            a = g, l = 3 == a.nodeType ? r - a.nodeValue.length : 0, n || ++l;
            break
          }
          return null
        }
      }
      return n ? new THCaret(a, r - l, n) : new THCaret(a, r - (l - 1), n)
    }
    return new THCaret(a, r, n)
  } catch (u) {
    return thLog("getCaretFromDomPosition error: " + u), null
  }
}

function rw_getCaretPairFromDomPosition(e, t, r, n, a) {
  var o, i = rw_getCaretFromDomPosition(e, t, r, !0);
  return o = t == n && r >= a ? i : rw_getCaretFromDomPosition(e, n, a, !1), new THCaretRange(i, o)
}

function rw_getClass(e) {
  return null == e ? "" : e.className ? e.className : e.getAttribute("class")
}

function rw_createObjectWithNameAttr(e, t, r, n, a) {
  if (g_bIEOld) return rw_createObject("<" + e + " name='" + a + "'>", t, r, n);
  var o = rw_createObject(e, t, r, n);
  return o.setAttribute("name", a), o.name = a, o
}

function rw_createObject(e, t, r, n) {
  var a = document.createElement(e);
  if (null != r && (a.id = r), null != n && (a.className = n), null != t) {
    var o = t.length;
    if (g_bIEOld)
      for (var i = 0; i < o; i += 2) "style" == t[i] ? rw_setStyle(a, t[i + 1]) : a.setAttribute(t[i], t[i + 1]);
    else
      for (var i = 0; i < o; i += 2) a.setAttribute(t[i], t[i + 1])
  }
  return a
}

function rw_createObjectFromMap(e, t, r, n) {
  var a = document.createElement(e);
  if (null != r && (a.id = r), null != n && (a.className = n), null != t)
    if (g_bIEOld)
      for (var o in t) "style" == o ? rw_setStyle(a, t[o]) : a.setAttribute(o, t[o]);
    else
      for (var o in t) a.setAttribute(o, t[o]);
  return a
}

function rw_setStyle(p_theObj, p_strStyles) {
  for (var nColon = p_strStyles.indexOf(":"), nSemi = p_strStyles.indexOf(";", nColon), strStyle, strValue, strData = p_strStyles; nColon > -1;) strStyle = strData.substring(0, nColon), nSemi > -1 ? (strValue = strData.substring(nColon + 1, nSemi), strData = strData.substr(nSemi + 1), nColon = strData.indexOf(":"), nSemi = strData.indexOf(";", nColon)) : (strValue = strData.substr(nColon + 1), nColon = -1), g_bIE && " background-position" == strStyle && (strStyle = " backgroundPosition"), eval("p_theObj.style." + strStyle + '="' + strValue + '";')
}

function rw_getComputedStyle(e) {
  return g_bIEOld ? e.currentStyle : window.getComputedStyle(e, null)
}

function rw_addContentToPage(e, t) {
  var r = document.createElement(t);
  r.innerHTML = e, document.body.appendChild(r)
}

function rw_addContentToPageWithAttr(e, t, r) {
  var n = document.createElement(t)
    , a = r.length;
  for (i = 0; i < a; i += 2) n.setAttribute(r[i], r[i + 1]);
  n.innerHTML = e, document.body.appendChild(n)
}

function rw_getTextFromMathMl(e) {
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
}

function BetterInnerHTML(o, p, q) {
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
            , _ = "on" == c.substr(0, 2);
          if (_) o[c] = g;
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
        for (_ in o) s(e, _, o[_])
      } else if (3 == r.nodeType) {
      var u = r.nodeValue ? r.nodeValue : ""
        , d = u.replace(/^\s*|\s*$/g, "");
      (d.length < 7 || 0 != d.indexOf("<!--") && d.indexOf("-->") != d.length - 3) && e.appendChild(document.createTextNode(u))
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
}

function $rw_logMe(e) {
  thLog(e)
}

function $rw_alertMe(e) {
  alert(e)
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
  if ("undefined" == typeof e && (e = window), g_bXDTDType) return rw_getDocumentDisplayHeight(e);
  var t = e.innerHeight ? e.innerHeight : e.document.body.offsetHeight;
  return t
}

function rw_getDisplayHeightAdjusted(e) {
  if ("undefined" == typeof e && (e = window), g_bXDTDType) return rw_getDocumentDisplayHeightAdjusted(e);
  var t = (e.innerHeight ? e.innerHeight : e.document.body.offsetHeight) - rw_getScrollBarHeight(e);
  return t
}

function rw_getDocumentDisplayHeight(e) {
  "undefined" == typeof e && (e = window);
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
  return e.scrollLeft && e.scrollLeft > 0 ? e.scrollTop : "body" == e.tagName.toLowerCase() && e.ownerDocument && e.ownerDocument.documentElement && e.ownerDocument.documentElement.scrollLeft ? e.ownerDocument.documentElement.scrollLeft : 0
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
      if (top.frames.length > 0) {
        var n = 0
          , a = top.frames.length;
        for (n = 0; n < a; n++) try {
          var o = top.frames[n];
          if (r = o.document.selection.createRange(), null != r && null != r.text && r.text.length > 0) {
            e = o, t = r;
            break
          }
        } catch (i) {
          thLogE(i)
        }
      }
    } else e = window, t = r;
    null != t && null != t.parentElement() && "input" == t.parentElement()
      .tagName.toLowerCase() && (t = new String(t.text))
  } else {
    null !== g_selectionRange && window.getSelection()
      .addRange(g_selectionRange);
    var l = window.getSelection();
    if (null != l && l.focusNode && l.focusNode.id) {
      if ("flashcontent" == l.focusNode.id) return null;
      if (l.anchorNode == l.focusNode && l.anchorOffset == l.focusOffset) return null
    }
    var s = null;
    if (l.isCollapsed) {
      if (g_lastInputSelectSFF && g_lastInputSelectSFF.selectionStart != g_lastInputSelectSFF.selectionEnd) return {
        frame: window
        , range: new String(g_strBMStart + "0" + g_strBMEnd + g_lastInputSelectSFF.value.substring(g_lastInputSelectSFF.selectionStart, g_lastInputSelectSFF.selectionEnd) + g_strBMStart + "1" + g_strBMEnd)
      }
    } else e = window, s = l;
    if (null == s) return null;
    var c = null;
    if (s.getRangeAt) c = s.getRangeAt(0);
    else {
      var r = rw_getRangeObject();
      null != r && (s.anchorNode == s.focusNode && s.anchorOffset == s.focusOffset ? r = rw_getRangeFromSelectionPoint(s) : (r.setStart(s.anchorNode, s.anchorOffset), r.setEnd(s.focusNode, s.focusOffset), 0 == r.toString()
        .length && (r.setStart(s.focusNode, s.focusOffset), r.setEnd(s.anchorNode, s.anchorOffset))), c = r)
    }
    if (null == c) return null;
    var g = c.startContainer
      , _ = c.startOffset
      , u = c.endContainer
      , d = c.endOffset;
    if (3 != g.nodeType) {
      if (1 != g.nodeType) return null;
      if (_ > 0 && g.hasChildNodes() && g.childNodes.length > _)
        if (g = g.childNodes[_], 3 == g.nodeType) _ = 0;
        else if (_ = 0, "[object HTMLEmbedElement]" == g.toString()) return null
    }
    if (3 != u.nodeType) {
      if (1 != u.nodeType) return null;
      if (u.hasChildNodes())
        if (u.childNodes.length > d) u = u.childNodes[d];
        else if (u = u.childNodes[d - 1], 3 != u.nodeType) {
        var h = rw_getLastChildTextNode(u, !0);
        null != h && (u = h)
      }
      if (3 != u.nodeType) {
        var p = rw_getPreviousNode(g, !0, null)
          , h = rw_getPreviousTextNode(u, !0, p);
        null != h && (u = h)
      }
      d = 3 == u.nodeType ? u.nodeValue.length : 0
    }
    t = new THDomRange(g, _, u, d)
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
  try {
    if (g_noScrolling) return;
    var t = rw_getWindow(e);
    if (null == t || null == e || null == e.parentNode) return;
    var r = 0
      , n = 0
      , a = e;
    3 == a.nodeType && (a = a.parentNode);
    for (var o = null, i = a, l = a.ownerDocument.body, s = !1, c = null; null != i && i != l;) "div" != i.tagName.toLowerCase() && "form" != i.tagName.toLowerCase() || rw_isDivScrollable(i) && (s = !0, o = rw_scrollToObjectDivCheck(a, i, o), c = i, a = i), i = i.parentNode;
    for (null != c && (a = c); null != a;) r += a.offsetLeft, n += a.offsetTop, a = a.offsetParent;
    null != o && (n += o.y, r += o.x);
    var g, _, u, d, h = 30;
    3 == e.nodeType && (h = 10 + 5 * e.nodeValue.length, h > 60 && (h = 60)), g = rw_getScreenOffsetLeft(t), _ = rw_getScreenOffsetTop(t), "number" == typeof t.innerWidth ? (u = t.innerWidth, d = t.innerHeight) : t.document.documentElement.clientHeight > 0 && t.document.documentElement.clientWidth > 0 ? (u = t.document.documentElement.clientWidth, d = t.document.documentElement.clientHeight) : (u = t.document.body.clientWidth, d = t.document.body.clientHeight), u -= h, d -= 20;
    var p, f;
    if (p = r < g || r > g + u, f = n < _ || n > _ + d, p || f && (0 != r || 0 != n)) {
      r > g + u && (r = (r + g) / 2), n > _ + d && (n = (n + _) / 2);
      $g_bMouseSpeech && ($g_bMouseSpeech = !1), t.scrollTo(p ? r : g, f ? n : _), g_bTouchScreen && (rw_positionToolbar(), rw_positionAllDivBars())
    }
  } catch (m) {
    thLogE(m)
  }
  g_bDidScroll = !1
}

function rw_isDivScrollable(e) {
  var t = e.clientHeight
    , r = e.clientWidth
    , n = rw_getComputedStyle(e)
    , a = !1;
  return null != n && "visible" != n.overflow && "inline" != n.display && (e.scrollHeight > t && "visible" != n.overflowY && (a = !0), e.scrollWidth > r && "visible" != n.overflowX && (a = !0)), a
}

function rw_scrollToObjectDivCheck(e, t, r) {
  for (var n = 0, a = 0, o = t.clientHeight, i = t.clientWidth, l = 0, s = 0, c = e; c != t && null != c;) l += c.offsetTop, s += c.offsetLeft, c = rw_safeOffsetParent(c, t);
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

function rw_testTHScreenUtils2() {
  rw_getSelection(), rw_getSelectionWithTHRange(), rw_getSelectionText()
}

function rw_testScroll(e) {
  rw_scrollToObject(document.getElementById(e))
}

function rw_getRefPt(e, t) {
  try {
    if (null == e) return null;
    if (1 == e.nodeType || 3 == e.nodeType) {
      var r = rw_checkForSpecialParent(e);
      if (null != r) return new THDomRefPt(rw_getPositionInDom(r), t);
      var n, a;
      1 == e.nodeType ? (n = 0, a = e) : (0 == e.nodeValue.trimTH()
        .length && (t = 0), n = rw_getNodeOffset(e), a = e.parentNode);
      for (var o = a.getAttribute("rwstate"), i = a.getAttribute(RWTH_GENERATED);
        "thtag" == a.tagName.toLowerCase() || null != o && o.length > 0 || null != i;) n += rw_getNodeOffset(a), a = a.parentNode, o = a.getAttribute("rwstate"), i = a.getAttribute(RWTH_GENERATED);
      return t == -1 && (n = -1), new THDomRefPt(rw_getPositionInDom(a), n + t)
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
  for (var t, r = 0, n = e; null != n;) 3 == n.nodeType ? (t = n.nodeValue, r += t.length) : 1 == n.nodeType && (rw_isInvalidNode(n) || (r += rw_isSpecialCase(n) ? 1 : "textarea" != n.tagName.toLowerCase() ? rw_getNodeOffsetImpl(n.lastChild) : 1)), n = n.previousSibling;
  return r
}

function rw_checkIfBlockCache(e) {
  if (g_bSpeechCacheFlag || g_bSpeechCacheGenerateFlag) {
    var t = rw_getBody(e)
      , r = e;
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
        var _ = rw_getTextFromMathMl(e);
        _.length > 0 && (t = a)
      } else {
        var a = e.getAttribute("alt");
        if (null != a && a.length > 0) t = a;
        else {
          var g = e.getAttribute("msg");
          null != g && g.length > 0 && (t = g)
        }
      }
    }
  } catch (u) {
    t = ""
  }
  return null == t && (t = ""), t
}

function rw_mathsMappingSetup(e) {
  var t, r, n, a, o, i;
  for (r = 0, n = e.indexOf(":"), a = e.indexOf(";", n); r > -1 && n > -1 && a > -1;) o = e.substring(r, n), i = e.substring(n + 1, a), 0 == i.length ? (t = g_mathsSymbolArray.indexOf(o), t > -1 && (g_mathsSymbolArray.splice(t, 1), delete g_mathsMapping[o])) : (t = g_mathsSymbolArray.indexOf(o), t > -1 || g_mathsSymbolArray.push(o), g_mathsMapping[o] = i), r = a + 1, n = e.indexOf(":", r), a = e.indexOf(";", n)
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
  for (t = 0; t < a; t++) r = e.charCodeAt(t)
    , 32 == r || rw_isTextChar(r) ? o += " " : (o += e.charAt(t), n = !0);
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
    var r = e.length
      , n = 0;
    for (n = 0; n < r; n++) {
      var a = rw_mathsSymbolReplacement(e[n]);
      a != e[n] && (e[n] = a, t = !0)
    }
  }
  return t
}

function rw_replaceAll(e, t, r) {
  for (var n = e.indexOf(t); n > -1;) e = e.replace(t, r), n = e.indexOf(t, n + 1);
  return e
}

function rw_getRndId(e) {
  for (var t, r = "th_tmp$", n = 1, a = !0; a;) t = r + n, e.document.getElementById(t) ? ++n : a = !1;
  return t
}

function rw_getTargetNodeAsCaretIE(e, t) {
  try {
    if ((g_bIE8 || g_bIE9) && t && !rw_isCalcButton(e)) {
      var r, n = e.srcElement
        , a = rw_getWindow(n)
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
        s.collapse(), s.pasteHTML("<span id='" + g_strRndId + "'></span>");
        var c = a.document.getElementById(g_strRndId)
          , g = null;
        return null != c && (null != c.previousSibling && 3 == c.previousSibling.nodeType && (rw_mergeTextNodes(c.previousSibling), g = new THCaret(c.previousSibling, c.previousSibling.length, (!0))), null != c.nextSibling && 3 == c.nextSibling.nodeType && (rw_mergeTextNodes(c.nextSibling), null == g && (g = new THCaret(c.nextSibling, 0, (!0)))), null == g && null != c.nextSibling && 1 == c.nextSibling.nodeType ? g = new THCaret(c.nextSibling, 0, (!0)) : null == g && null != c.previousSibling && 1 == c.previousSibling.nodeType && (g = new THCaret(c.previousSibling, 0, (!0)))), null == g && (g = new THCaret(c.parentNode, 0, (!0))), null != c && c.parentNode.removeChild(c), g
      }
      return new THCaret(n, 0, (!0))
    }
    if (g_bIENew) {
      if (targetElement = e.target, null != targetElement) {
        if (null != targetElement.firstChild && 3 == targetElement.firstChild.nodeType && "textarea" != targetElement.tagName.toLowerCase()) {
          var _ = targetElement.firstChild.nodeValue;
          _.trimTH()
            .length > 0 && (targetElement = targetElement.firstChild)
        }
        return new THCaret(targetElement, 0, (!0))
      }
    } else {
      var u = rw_mouseCoords(e)
        , d = rw_getRangeObject(e.srcElement.ownerDocument.body);
      try {
        d.moveToPoint(u.x, u.y)
      } catch (h) {
        return null
      }
      for (var p = rw_getRangeObject(e.srcElement.ownerDocument.body), f = rw_getRangeObject(e.srcElement.ownerDocument.body), m = e.srcElement.firstChild; null != m;) {
        if (3 == m.nodeType && m.nodeValue.trimTH()
          .length > 0) {
          rw_mergeTextNodes(m);
          for (var b = m.previousSibling; null != b && 1 != b.nodeType;) b = b.previousSibling;
          null != b ? (p.moveToElementText(b), p.collapse(!1)) : p.moveToElementText(m.parentNode);
          for (var w = m.nextSibling; null != w && 1 != w.nodeType;) w = w.nextSibling;
          if (null != w ? (f.moveToElementText(w), p.setEndPoint("EndToStart", f)) : (f.moveToElementText(m.parentNode), p.setEndPoint("EndToEnd", f)), p.inRange(d)) {
            var S = rw_getOffsetInNodeWithTextRange(m, p, d);
            return new THCaret(m, S, (!0))
          }
        }
        m = m.nextSibling
      }
    }
  } catch (T) {
    thLog("rw_getTargetNodeAsCaretIE error:" + T.message)
  }
  return null
}

function rw_getTextRangeAsRefPtIE(e, t) {
  try {
    var r = rw_getRangeObject(e)
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
  var o = rw_getRangeObject(e)
    , i = rw_getCaretPairFromDomPosition(e, t, -1, n, -1)
    , l = i.leftCaret
    , s = i.rightCaret;
  if (null != l && null != s) {
    var c = l.node;
    if (3 == c.nodeType) {
      var g = rw_getNodeOffset(c);
      c = c.parentNode, r += g
    }
    var _ = s.node;
    if (3 == _.nodeType) {
      var g = rw_getNodeOffset(_);
      _ = _.parentNode, a += g
    }
    o.moveToElementText(c), o.collapse(), rw_moveEnd(o, r), o.collapse(!1), o.select();
    var u = rw_getRangeObject(e);
    u.moveToElementText(_), u.collapse(), rw_moveEnd(u, a), u.collapse(!1), o.setEndPoint("EndToEnd", u)
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
            , _ = s[2] + " ";
          e[n] = c, e[n + 1] = g, e[n + 2] = _, a = !0;
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
    var n = r.length;
    for (i = 0; i < n; i++) t += r[i], i < n - 1 && (t += " ");
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
  rw_editPronRefresh()
}

function rw_preparePronunciationsForServer() {}

function rw_loadPronunciationsFromServer() {
  if (null != g_strCustId && g_strCustId.length > 0 && null != g_strBookId && g_strBookId.length > 0 && null != g_strPageId && g_strPageId.length > 0) {
    var e;
    if (null == SpeechStream.cacheMode.getLiveServer()) return;
    e = rw_getHTTPText(!0) + SpeechStream.cacheMode.getLiveServer();
    var t = "&custID=" + g_strCustId + "&bookID=" + g_strBookId + "&pageID=" + g_strPageId + "&combined=Y"
      , r = g_controllerFactory.getConnector();
    null == r ? alert("Connection to the server is not available.") : r.getPronunciationDataAll(e, t)
  }
}

function $rw_loadPronCallback(e) {
  null == e ? g_nTries > 0 ? (--g_nTries, rw_loadPronunciationsFromServer()) : rw_alert("Failed to load pronunciation data, this may affect the text to speech function.") : (e = e.trimTH(), "" == e ? SpeechStream.pronunciation.mode != SpeechStream.pronunciation.SERVER_PRONUNCIATION && (g_bLocalPronunciationLoaded = !0) : "-1" == e ? g_nTries > 0 ? (--g_nTries, rw_loadPronunciationsFromServer()) : rw_alert("Failed to load pronunciation data, this may affect the text to speech function.") : (SpeechStream.pronunciation.mode != SpeechStream.pronunciation.SERVER_PRONUNCIATION && (g_bLocalPronunciationLoaded = !0), rw_processPronunciationsFromServer(e)))
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
  var e = null;
  try {
    e = g_bSafari ? window.document.WebToSpeech : window.document.WebToSpeech ? window.document.WebToSpeech : window.WebToSpeech, null != e && (e.getVersion(), g_cachedWebToSpeech = e)
  } catch (t) {
    e = null, g_cachedWebToSpeech = null
  }
  if (null == e) {
    var r = document.getElementById("WebToSpeech");
    if (null != r) {
      e = r;
      try {
        e.getVersion(), g_cachedWebToSpeech = e
      } catch (n) {
        e = null, g_cachedWebToSpeech = null
      }
      if (null == e && !g_bIE) {
        var a, o = r.childNodes.length;
        for (a = 0; a < o; a++) {
          var i = r.childNodes[a];
          if ("embed" == i.tagName.toLowerCase()) {
            e = i;
            try {
              e.getVersion(), g_cachedWebToSpeech = e
            } catch (n) {
              e = null, g_cachedWebToSpeech = null
            }
          }
        }
      }
    }
  }
  if (null != g_cachedWebToSpeech && g_bWorkaroundFirefoxSwf) {
    var l = document.getElementById("rwDrag");
    null != l && (l.style.position = "relative")
  }
  return e
}

function rw_initSpeechBubble() {
  var e = document.createElement("div");
  e.id = START_BUBBLE, e.style.zIndex = "998", e.style.position = "absolute", e.style.display = "none", g_bIEOld ? e.style.cursor = "hand" : e.style.cursor = "pointer", addEvent(e, "click", rw_clickOnStartBubble);
  var t = document.createElement("img");
  t.setAttribute("src", $g_strFileLoc + "rwimgs/start_speak_popup.gif"), e.appendChild(t), g_placeholderObj.appendChild(e);
  var r = document.createElement("div");
  r.id = STOP_BUBBLE, r.style.zIndex = "999", r.style.position = "absolute", r.style.display = "none", g_bIEOld ? r.style.cursor = "hand" : r.style.cursor = "pointer", addEvent(r, "click", rw_clickOnStopBubble);
  var n = document.createElement("img");
  n.setAttribute("src", $g_strFileLoc + "rwimgs/stop_speak_popup.gif"), r.appendChild(n), g_placeholderObj.appendChild(r)
}

function rw_setBubbleBase() {
  var e = document.getElementById(START_BUBBLE);
  if (null != e) {
    var t = e.style.visibility
      , r = e.style.display;
    e.style.visibility = "hidden", e.style.display = "inline", g_bubbleDiv = e.offsetParent, g_bubbleDiv == document.body && (g_bubbleDiv = null), e.style.visibility = t, e.style.display = r, g_nBubbleBaseX = 0, g_nBubbleBaseY = 0, "number" == typeof eba_bubble_adjust_x && (g_nBubbleBaseX -= eba_bubble_adjust_x), "number" == typeof eba_bubble_adjust_y && (g_nBubbleBaseY -= eba_bubble_adjust_y)
  }
}

function rw_mouseHoverBubblePopup(e) {
  if (!(g_bBubbleFreezeOnShiftFlag && e.shiftKey || !g_bOnloadFinished)) {
    var t = !1
      , r = rw_getTHCaretFromMouseEvent(e, !1);
    if (null != r && r.node != document.body) {
      if (1 == r.node.nodeType) {
        var n = r.node
          , a = n.tagName.toLowerCase();
        if ("img" != a) return;
        var o = n.parentNode;
        if ("div" == o.tagName.toLowerCase() && (n.id == START_BUBBLE || n.id == STOP_BUBBLE)) return;
        var i = n.getAttribute("title");
        if (null == i || 0 == i.length) {
          var l = n.getAttribute("alt");
          if (null == l || 0 == l.length) {
            var s = n.getAttribute("msg");
            if (null == s || 0 == s.length) return
          }
        }
        t = !0
      }
      var c = rw_getHoverTargetFromCaret(r);
      if (null != c) {
        if ("undefined" == typeof g_nBubbleBaseX && rw_setBubbleBase(), null != g_bubbleDiv && !rw_isContainedIn(g_bubbleDiv, r.node)) return;
        if (t) {
          for (var g = rw_getPosition(r.node), _ = rw_getContainingScrollableDiv(r.node), u = 0, d = 0; null != _;) _ != g_bubbleDiv ? (u += _.scrollLeft, d += _.scrollTop, _ = rw_getContainingScrollableDiv(_)) : _ = null;
          g.x -= u, g.y -= d, rw_showStartBubble(g.x - g_nBubbleBaseX, g.y - g_nBubbleBaseY, c)
        } else {
          var h = c.getCaretRange();
          if (rw_caretRangeIsSpeakable(h)) {
            var p = h.leftCaret.node;
            if (c.isRange()) {
              var f = h.rightCaret.node;
              p = rw_getStartOfParagraph(p), f = rw_getEndOfParagraph(f);
              var m, b = rw_getRefPt(p, 0);
              m = 1 == f.nodeType ? rw_getRefPt(f, 0) : rw_getRefPt(f, f.nodeValue.length), c.range = new THRange(document.body, b, m)
            }
            var g = rw_getPagePosition(p);
            rw_showStartBubble(g.x - g_nBubbleBaseX, g.y - g_nBubbleBaseY, c)
          }
        }
      }
    }
  }
}

function rw_showStartBubble(e, t, r) {
  if (g_bBubbleMode && g_bOnloadFinished) {
    e -= 32, e < 0 && (e = 0), t -= 18, t < 0 && (t = 0);
    var n, a;
    null != g_bubbleDiv ? (n = 0, a = 0) : (n = rw_getScreenOffsetLeft(), a = rw_getScreenOffsetTop()), g_nLastBubbleX = e + n, g_nLastBubbleY = t + a, document.getElementById(START_BUBBLE)
      .style.display = "inline", document.getElementById(START_BUBBLE)
      .style.left = g_nLastBubbleX + "px", document.getElementById(START_BUBBLE)
      .style.top = g_nLastBubbleY + "px", g_storedHoverTarget = r
  }
}

function rw_clickOnStartBubble() {
  if (null != g_storedHoverTarget)
    if ($rw_event_stop(), rw_showStopBubble(g_nLastBubbleX, g_nLastBubbleY), g_storedHoverTarget.isRange()) rw_speakHoverTarget(g_storedHoverTarget);
    else {
      var e = g_bContinuousReading;
      g_bContinuousReading = !1, rw_speakHoverTarget(g_storedHoverTarget), g_bContinuousReading = e
    }
}

function rw_clickOnStopBubble() {
  $rw_event_stop()
}

function rw_showStopBubble(e, t) {
  g_bBubbleMode && g_bOnloadFinished && (document.getElementById(STOP_BUBBLE)
    .style.display = "inline", document.getElementById(STOP_BUBBLE)
    .style.left = e + "px", document.getElementById(STOP_BUBBLE)
    .style.top = t + "px")
}

function rw_hideStartBubble() {
  document.getElementById(START_BUBBLE) && (document.getElementById(START_BUBBLE)
    .style.display = "none")
}

function rw_hideStopBubble() {
  if (document.getElementById(STOP_BUBBLE)) try {
    document.getElementById(STOP_BUBBLE)
      .style.display = "none"
  } catch (e) {
    thLogE(e)
  }
}

function rw_getPagePosition(e) {
  var t = 0
    , r = 0
    , n = rw_getContainingScrollableDiv(e);
  null == g_bubbleDiv || rw_isContainedIn(g_bubbleDiv, n) || (n = g_bubbleDiv);
  for (var a, o = e; null != n && (a = rw_adjustPositionForDisplay(rw_getPositionInsideDiv(o, n), n), t += a.x, r += a.y, o = n, n != g_bubbleDiv);) n = rw_getContainingScrollableDiv(n), null == g_bubbleDiv || rw_isContainedIn(g_bubbleDiv, n) || (n = g_bubbleDiv);
  return null == g_bubbleDiv ? (a = rw_adjustPositionForDisplay(rw_getPositionInsideDiv(o, o.ownerDocument.body), o.ownerDocument.body), t += a.x, r += a.y) : (t += rw_getScrollLeft(g_bubbleDiv), r += rw_getScrollTop(g_bubbleDiv)), {
    x: t
    , y: r
  }
}

function rw_isContainedIn(e, t) {
  if (null == e || null == t) return !1;
  for (var r = t.ownerDocument.body, n = t; null != n && n != r;) {
    if (e == n) return !0;
    n = n.parentNode
  }
  return !1
}

function rw_getContainingScrollableDiv(e) {
  for (var t = e.parentNode, r = e.ownerDocument.body, n = null; null != t && t != r;) {
    if ("div" == t.tagName.toLowerCase() || "form" == t.tagName.toLowerCase()) {
      var a = t.clientHeight
        , o = t.clientWidth
        , i = rw_getComputedStyle(t)
        , l = !1;
      if (null != i && "visible" != i.overflow && (t.scrollHeight > a && "visible" != i.overflowY && (l = !0), t.scrollWidth > o && "visible" != i.overflowX && (l = !0)), l) {
        n = t;
        break
      }
    }
    t = t.parentNode
  }
  return n
}

function rw_getPositionInsideDiv(e, t) {
  3 == e.nodeType && (e = e.parentNode);
  for (var r = 0, n = 0, a = e; a != t && null != a;) r += a.offsetLeft, n += a.offsetTop, a = rw_safeOffsetParent(a, t);
  return {
    x: r
    , y: n
  }
}

function rw_adjustPositionForDisplay(e, t) {
  return e.x -= rw_getScrollLeft(t), e.y -= rw_getScrollTop(t), "static" == rw_getComputedStyle(t)
    .position && (e.x -= t.offsetLeft, e.y -= t.offsetTop), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x > t.clientWidth && (e.x = t.clientWidth), e.y > t.clientHeight && (e.y = t.clientHeight), {
      x: e.x
      , y: e.y
    }
}

function $rw_barCacheInit() {
  g_bIE ? BetterInnerHTML(g_placeholderObj, '<link href="' + $g_strFileLoc + 'rwcache.css" type="text/css" rel="stylesheet" />', !1) : BetterInnerHTML(g_placeholderObj, '<link href="' + $g_strFileLoc + 'rwcacheSFF.css" type="text/css" rel="stylesheet" />', !1);
  var e = "";
  e += '<div id="rwGenerateCache" rwTHcomp="1" texthelpStopContinuous="1">', e += '<div class="rwGenerateCachePopupOutline">', e += '<div id="rwDragMeGenerateCache" class="rwToolbarCaptionGenerateCache" ignore="1">', e += "Loading, please wait...", e += '<img name="displayImg" align="right" src="' + $g_strFileLoc + 'rwimgs/thex.bmp" onMouseOver="$rw_divOver(9)" onMouseOut="$rw_divOut(9)" onMouseUp="$rw_divPress(9)" />', e += "</div>", e += '<div class="rwGenerateCachePopupContent">', e += '<span id="rwGenerateCachedisplay" ignore="1">', e += "", e += "</span>", e += "</div>", e += "</div>", e += "</div>", BetterInnerHTML(g_placeholderObj, e, !1)
}

function $rw_barCalInit() {
  g_bIE ? BetterInnerHTML(g_placeholderObj, '<link href="' + $g_strFileLoc + 'rwcalculator.css" type="text/css" rel="stylesheet" />', !1) : BetterInnerHTML(g_placeholderObj, '<link href="' + $g_strFileLoc + 'rwcalculatorSFF.css" type="text/css" rel="stylesheet" />', !1);
  var e = "";
  e += '<div id="rwCal" rwTHcomp="1" style="visibility:hidden" texthelpStopContinuous="1">', e += ' <div class="rwCalPopupOutline">', e += g_nLanguage == ENG_UK || g_nLanguage == ENG_US ? '  <div id="rwDragMeCal" class="rwToolbarCaptionCal" >' : '  <div id="rwDragMeCal" class="rwToolbarSpanCaptionCal" >', e += '    <img name="calImg" align="right" src="' + $g_strFileLoc + 'rwimgs/thex.bmp" onmouseover="$rw_divOver(8);" onmouseout="$rw_divOut(8);" onmouseup="$rw_divPress(8);" /></div>', e += '<div class="rwCalPopupContent">', e += '<form name="rw_calForm" class="rw_calForm" id="rw_calForm">', e += '<table class="rw_calTable">', e += "<tbody>", e += "<tr>", e += '<td colSpan="2">', e += '<input type="text" class="rwcaldisplay" id="rw_calDis" maxlength="40" name="rw_calDis" readonly="readonly" />', e += "</td>", e += "</tr>", e += "<tr>", e += '<td colSpan="2" class="rwcalspeechbutton">', e += g_bTouchScreen ? "<br/>" : '<input type="checkbox" id="rw_calspeechbutton" name="rw_calspeechbutton" /><span>Speech on</span>', e += "</td>", e += "</tr>", e += "<tr>", e += "<td> ", e += "<table>", e += "<tbody>", e += "<tr>", e += '<td><input type="button" class="rwcalbutton" value="7" name="seven" onclick="rw_calAddDigit(\'7\')"/></td>', e += '<td><input type="button" class="rwcalbutton" value="8" name="eight" onclick="rw_calAddDigit(\'8\')"/></td>', e += '<td><input type="button" class="rwcalbutton" value="9" name="nine" onclick="rw_calAddDigit(\'9\')"/></td>', e += "</tr>", e += "<tr>", e += '<td><input type="button" class="rwcalbutton" value="4" name="four" onclick="rw_calAddDigit(\'4\')"/></td>', e += '<td><input type="button" class="rwcalbutton" value="5" name="five" onclick="rw_calAddDigit(\'5\')"/></td>', e += '<td><input type="button" class="rwcalbutton" value="6" name="six" onclick="rw_calAddDigit(\'6\')"/></td>', e += "</tr>", e += "<tr>", e += '<td><input type="button" class="rwcalbutton" value="1" name="one" onclick="rw_calAddDigit(\'1\')"/></td>', e += '<td><input type="button" class="rwcalbutton" value="2" name="two" onclick="rw_calAddDigit(\'2\')"/></td>', e += '<td><input type="button" class="rwcalbutton" value="3" name="three" onclick="rw_calAddDigit(\'3\')"/></td>', e += "</tr>", e += "<tr>", e += '<td><input type="button" class="rwcalbutton" value="+/-" name="toggle the sign of the number" onclick="rw_calPlusMinus()"/></td>', e += '<td><input type="button" class="rwcalbutton" value="0" name="zero" onclick="rw_calAddDigit(\'0\')"/></td>', e += '<td><input type="button" class="rwcalbutton" value="." name="decimal point" onclick="rw_calDec()"/></td>', e += "</tr>", e += "</tbody>", e += "</table>", e += "</td>", e += "<td>", e += "<table>", e += "<tbody>", e += "<tr>", e += '<td><input type="button" class="rwcalbutton" value="C" name="clear" onclick="rw_calClearNum()" /></td>', e += '<td><input type="button" class="rwcalbutton" value="AC" name="clear memory" onclick="rw_calClearMem()" /></td>', e += "</tr>", e += "<tr>", e += '<td><input type="button" class="rwcalbutton" value="*" name="multiply" onclick="rw_calFunc(\'*\')" /></td>', e += '<td><input type="button" class="rwcalbutton" value="/" name="divide" onclick="rw_calFunc(\'/\')" /></td>', e += "</tr>", e += "<tr>", e += '<td><input type="button" class="rwcalbutton" value="+" name="plus" onclick="rw_calFunc(\'+\')" /></td>', e += '<td><input type="button" class="rwcalbutton" value="-" name="minus" onclick="rw_calFunc(\'-\')" /></td>', e += "</tr>", e += "<tr>", e += '<td colSpan="2"><input type="button" class="rwcalEqbutton" value="=" name="equals" onclick="rw_calEquals()" /></td>', e += "</tr>", e += "</tbody>", e += "</table>", e += "</td>", e += "</tr>", e += "</tbody>", e += "</table>", e += "</form>", e += "</div></div></div>", BetterInnerHTML(g_placeholderObj, e, !1)
}

function rw_calFunc(e) {
  0 != g_nCalFunction && rw_calEquals(), e.indexOf("*") > -1 && (g_nCalFunction = 1), e.indexOf("/") > -1 && (g_nCalFunction = 2), e.indexOf("+") > -1 && (g_nCalFunction = 3), e.indexOf("-") > -1 && (g_nCalFunction = 4), g_fCalMem = g_fCalNum, g_strCalDisNum = ""
}

function rw_calDec() {
  0 == g_strCalDisNum.length ? g_strCalDisNum = "0." : g_strCalDisNum.indexOf(".") == -1 && g_strCalDisNum.indexOf("e") == -1 && (g_strCalDisNum += "."), g_fCalNum = parseFloat(g_strCalDisNum), rw_setCalcValue(g_strCalDisNum)
}

function rw_calPlusMinus() {
  g_strCalDisNum.indexOf("!") == -1 ? (g_fCalNum *= -1, g_strCalDisNum = "" + g_fCalNum) : g_strCalDisNum = "Press 'AC'!", rw_setCalcValue(g_strCalDisNum)
}

function rw_calEquals() {
  "" != g_strCalDisNum && (g_strCalDisNum.indexOf("!") == -1 ? (1 == g_nCalFunction && (g_fCalNum = g_fCalMem * g_fCalNum), 2 == g_nCalFunction && (0 != g_fCalNum ? g_fCalNum = g_fCalMem / g_fCalNum : g_strCalDisNum = "Cannot divide by zero!"), 3 == g_nCalFunction && (g_fCalNum = g_fCalMem + g_fCalNum), 4 == g_nCalFunction && (g_fCalNum = g_fCalMem - g_fCalNum), 2 == g_nCalFunction && 0 == g_fCalNum || (g_strCalDisNum = g_fCalNum + ""), g_nCalFunction = 0, g_fCalMem = 0, g_strCalDisNum.indexOf("Infinity") != -1 && (g_strCalDisNum = "Value too long!"), g_strCalDisNum.indexOf("NaN") != -1 && (g_strCalDisNum = "N/A!")) : g_strCalDisNum = "Press 'AC'!", rw_setCalcValue(g_strCalDisNum), rw_calSpeechOn() && $rw_speakText(g_strCalDisNum), g_strCalDisNum = "0")
}

function rw_calAddDigit(e) {
  g_strCalDisNum.length < DISPLAYMAXLENGTH && (g_strCalDisNum.indexOf("!") == -1 ? (0 == parseFloat(g_strCalDisNum) && g_strCalDisNum.indexOf(".") == -1 ? g_strCalDisNum = e : g_strCalDisNum += e, g_fCalNum = parseFloat(g_strCalDisNum)) : g_strCalDisNum = "Press 'AC'!"), rw_setCalcValue(g_strCalDisNum)
}

function rw_calClearNum() {
  g_fCalNum = 0, g_strCalDisNum = "" + g_fCalNum, rw_setCalcValue(g_strCalDisNum)
}

function rw_calClearMem() {
  g_fCalNum = 0, g_nCalFunction = 0, g_fCalMem = 0, g_strCalDisNum = "" + g_fCalNum, rw_setCalcValue(g_strCalDisNum)
}

function rw_calSpeechOn() {
  var e = document.getElementById("rw_calspeechbutton");
  return null != e && e.checked
}

function rw_getCalcForm() {
  return document.getElementById("rw_calForm")
}

function rw_setCalcValue(e) {
  document.getElementById("rw_calDis")
    .value = e
}

function rw_addInstalled() {
  var e = document.getElementById("texthelpspeechstream");
  null === e && (e = document.createElement("span"), e.id = "texthelpspeechstream", document.getElementsByTagName("head")[0].appendChild(e)), e.setAttribute("installed", "true")
}
var g_strAmp = "&"
  , swfobject = function () {
    function e() {
      if (!G) {
        try {
          var e = D.getElementsByTagName("body")[0].appendChild(f("span"));
          e.parentNode.removeChild(e)
        } catch (t) {
          return
        }
        G = !0;
        for (var r = B.length, n = 0; n < r; n++) B[n]()
      }
    }

    function t(e) {
      G ? e() : B[B.length] = e
    }

    function r(e) {
      if (typeof H.addEventListener != A) H.addEventListener("load", e, !1);
      else if (typeof D.addEventListener != A) D.addEventListener("load", e, !1);
      else if (typeof H.attachEvent != A) m(H, "onload", e);
      else if ("function" == typeof H.onload) {
        var t = H.onload;
        H.onload = function () {
          t(), e()
        }
      } else H.onload = e
    }

    function n() {
      M ? a() : o()
    }

    function a() {
      var e = D.getElementsByTagName("body")[0]
        , t = f(P);
      t.setAttribute("type", O);
      var r = e.appendChild(t);
      if (r) {
        var n = 0;
        ! function () {
          if (typeof r.GetVariable != A) {
            var a = r.GetVariable("$version");
            a && (a = a.split(" ")[1].split(","), Y.pv = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)])
          } else if (n < 10) return n++, void setTimeout(arguments.callee, 10);
          e.removeChild(t), r = null, o()
        }()
      } else o()
    }

    function o() {
      var e = $.length;
      if (e > 0)
        for (var t = 0; t < e; t++) {
          var r = $[t].id
            , n = $[t].callbackFn
            , a = {
              success: !1
              , id: r
            };
          if (Y.pv[0] > 0) {
            var o = p(r);
            if (o)
              if (!b($[t].swfVersion) || Y.wk && Y.wk < 312)
                if ($[t].expressInstall && l()) {
                  var g = {};
                  g.data = $[t].expressInstall, g.width = o.getAttribute("width") || "0", g.height = o.getAttribute("height") || "0", o.getAttribute("class") && (g.styleclass = o.getAttribute("class")), o.getAttribute("align") && (g.align = o.getAttribute("align"));
                  for (var _ = {}, u = o.getElementsByTagName("param"), d = u.length, h = 0; h < d; h++) "movie" != u[h].getAttribute("name")
                    .toLowerCase() && (_[u[h].getAttribute("name")] = u[h].getAttribute("value"));
                  s(g, _, r, n)
                } else c(o), n && n(a);
            else S(r, !0), n && (a.success = !0, a.ref = i(r), n(a))
          } else if (S(r, !0), n) {
            var f = i(r);
            f && typeof f.SetVariable != A && (a.success = !0, a.ref = f), n(a)
          }
        }
    }

    function i(e) {
      var t = null
        , r = p(e);
      if (r && "OBJECT" == r.nodeName)
        if (typeof r.SetVariable != A) t = r;
        else {
          var n = r.getElementsByTagName(P)[0];
          n && (t = n)
        }
      return t
    }

    function l() {
      return !W && b("6.0.65") && (Y.win || Y.mac) && !(Y.wk && Y.wk < 312)
    }

    function s(e, t, r, n) {
      W = !0, y = n || null, E = {
        success: !1
        , id: r
      };
      var a = p(r);
      if (a) {
        "OBJECT" == a.nodeName ? (v = g(a), C = null) : (v = a, C = r), e.id = L, (typeof e.width == A || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == A || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), D.title = D.title.slice(0, 47) + " - Flash Player Installation";
        var o = Y.ie && Y.win ? "ActiveX" : "PlugIn"
          , i = "MMredirectURL=" + H.location.toString()
          .replace(/&/g, "%26") + g_strAmp + "MMplayerType=" + o + g_strAmp + "MMdoctitle=" + D.title;
        if (typeof t.flashvars != A ? t.flashvars += g_strAmp + i : t.flashvars = i, Y.ie && Y.win && 4 != a.readyState) {
          var l = f("div");
          r += "SWFObjectNew", l.setAttribute("id", r), a.parentNode.insertBefore(l, a), a.style.display = "none"
            , function () {
              4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
            }()
        }
        _(e, t, r)
      }
    }

    function c(e) {
      if (Y.ie && Y.win && 4 != e.readyState) {
        var t = f("div");
        e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(g(e), t), e.style.display = "none"
          , function () {
            4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
          }()
      } else e.parentNode.replaceChild(g(e), e)
    }

    function g(e) {
      var t = f("div");
      if (Y.win && Y.ie) t.innerHTML = e.innerHTML;
      else {
        var r = e.getElementsByTagName(P)[0];
        if (r) {
          var n = r.childNodes;
          if (n)
            for (var a = n.length, o = 0; o < a; o++) 1 == n[o].nodeType && "PARAM" == n[o].nodeName || 8 == n[o].nodeType || t.appendChild(n[o].cloneNode(!0))
        }
      }
      return t
    }

    function _(e, t, r) {
      var n, a = p(r);
      if (Y.wk && Y.wk < 312) return n;
      if (a)
        if (typeof e.id == A && (e.id = r), Y.ie && Y.win) {
          var o = "";
          for (var i in e) e[i] != Object.prototype[i] && ("data" == i.toLowerCase() ? t.movie = e[i] : "styleclass" == i.toLowerCase() ? o += ' class="' + e[i] + '"' : "classid" != i.toLowerCase() && (o += " " + i + '="' + e[i] + '"'));
          var l = "";
          for (var s in t) t[s] != Object.prototype[s] && (l += '<param name="' + s + '" value="' + t[s] + '" />');
          a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + l + "</object>", V[V.length] = e.id, n = p(e.id)
        } else {
          var c = f(P);
          c.setAttribute("type", O);
          for (var g in e) e[g] != Object.prototype[g] && ("styleclass" == g.toLowerCase() ? c.setAttribute("class", e[g]) : "classid" != g.toLowerCase() && c.setAttribute(g, e[g]));
          for (var _ in t) t[_] != Object.prototype[_] && "movie" != _.toLowerCase() && u(c, _, t[_]);
          a.parentNode.replaceChild(c, a), n = c
        }
      return n
    }

    function u(e, t, r) {
      var n = f("param");
      n.setAttribute("name", t), n.setAttribute("value", r), e.appendChild(n)
    }

    function d(e) {
      var t = p(e);
      t && "OBJECT" == t.nodeName && (Y.ie && Y.win ? (t.style.display = "none", function () {
        4 == t.readyState ? h(e) : setTimeout(arguments.callee, 10)
      }()) : t.parentNode.removeChild(t))
    }

    function h(e) {
      var t = p(e);
      if (t) {
        for (var r in t) "function" == typeof t[r] && (t[r] = null);
        t.parentNode.removeChild(t)
      }
    }

    function p(e) {
      var t = null;
      try {
        t = D.getElementById(e)
      } catch (r) {}
      return t
    }

    function f(e) {
      return D.createElement(e)
    }

    function m(e, t, r) {
      e.attachEvent(t, r), U[U.length] = [e, t, r]
    }

    function b(e) {
      var t = Y.pv
        , r = e.split(".");
      return r[0] = parseInt(r[0], 10), r[1] = parseInt(r[1], 10) || 0, r[2] = parseInt(r[2], 10) || 0, t[0] > r[0] || t[0] == r[0] && t[1] > r[1] || t[0] == r[0] && t[1] == r[1] && t[2] >= r[2]
    }

    function w(e, t, r, n) {
      if (!Y.ie || !Y.mac) {
        var a = D.getElementsByTagName("head")[0];
        if (a) {
          var o = r && "string" == typeof r ? r : "screen";
          if (n && (N = null, I = null), !N || I != o) {
            var i = f("style");
            i.setAttribute("type", "text/css"), i.setAttribute("media", o), N = a.appendChild(i), Y.ie && Y.win && typeof D.styleSheets != A && D.styleSheets.length > 0 && (N = D.styleSheets[D.styleSheets.length - 1]), I = o
          }
          Y.ie && Y.win ? N && typeof N.addRule == P && N.addRule(e, t) : N && typeof D.createTextNode != A && N.appendChild(D.createTextNode(e + " {" + t + "}"))
        }
      }
    }

    function S(e, t) {
      if (j) {
        var r = t ? "visible" : "hidden";
        G && p(e) ? p(e)
          .style.visibility = r : w("#" + e, "visibility:" + r)
      }
    }

    function T(e) {
      var t = /[\\\"<>\.;]/
        , r = null != t.exec(e);
      return r && typeof encodeURIComponent != A ? encodeURIComponent(e) : e
    }
    var v, C, y, E, N, I, A = "undefined"
      , P = "object"
      , k = "Shockwave Flash"
      , R = "ShockwaveFlash.ShockwaveFlash"
      , O = "application/x-shockwave-flash"
      , L = "SWFObjectExprInst"
      , x = "onreadystatechange"
      , H = window
      , D = document
      , F = navigator
      , M = !1
      , B = [n]
      , $ = []
      , V = []
      , U = []
      , G = !1
      , W = !1
      , j = !0
      , Y = function () {
        var e = typeof D.getElementById != A && typeof D.getElementsByTagName != A && typeof D.createElement != A
          , t = F.userAgent.toLowerCase()
          , r = F.platform.toLowerCase()
          , n = r ? /win/.test(r) : /win/.test(t)
          , a = r ? /mac/.test(r) : /mac/.test(t)
          , o = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1"))
          , i = !1
          , l = [0, 0, 0]
          , s = null;
        if (typeof F.plugins != A && typeof F.plugins[k] == P) s = F.plugins[k].description, !s || typeof F.mimeTypes != A && F.mimeTypes[O] && !F.mimeTypes[O].enabledPlugin || (M = !0, i = !1, s = s.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), l[0] = parseInt(s.replace(/^(.*)\..*$/, "$1"), 10), l[1] = parseInt(s.replace(/^.*\.(.*)\s.*$/, "$1"), 10), l[2] = /[a-zA-Z]/.test(s) ? parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof H.ActiveXObject != A) try {
          var c = new ActiveXObject(R);
          c && (s = c.GetVariable("$version"), s && (i = !0, s = s.split(" ")[1].split(","), l = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)]))
        } catch (g) {}
        return {
          w3: e
          , pv: l
          , wk: o
          , ie: i
          , win: n
          , mac: a
        }
      }();
    (function () {
      Y.w3 && ((typeof D.readyState != A && "complete" == D.readyState || typeof D.readyState == A && (D.getElementsByTagName("body")[0] || D.body)) && e(), G || (typeof D.addEventListener != A && D.addEventListener("DOMContentLoaded", e, !1), Y.ie && Y.win && (D.attachEvent(x, function () {
        "complete" == D.readyState && (D.detachEvent(x, arguments.callee), e())
      }), H == top && ! function () {
        if (!G) {
          try {
            D.documentElement.doScroll("left")
          } catch (t) {
            return void setTimeout(arguments.callee, 0)
          }
          e()
        }
      }()), Y.wk && ! function () {
        if (!G) return /loaded|complete/.test(D.readyState) ? void e() : void setTimeout(arguments.callee, 0)
      }(), r(e)))
    })()
    , function () {
      Y.ie && Y.win && window.attachEvent("onunload", function () {
        for (var e = U.length, t = 0; t < e; t++) U[t][0].detachEvent(U[t][1], U[t][2]);
        for (var r = V.length, n = 0; n < r; n++) d(V[n]);
        for (var a in Y) Y[a] = null;
        Y = null;
        for (var o in swfobject) swfobject[o] = null;
        swfobject = null
      })
    }();
    return {
      registerObject: function (e, t, r, n) {
        if (Y.w3 && e && t) {
          var a = {};
          a.id = e, a.swfVersion = t, a.expressInstall = r, a.callbackFn = n, $[$.length] = a, S(e, !1)
        } else n && n({
          success: !1
          , id: e
        })
      }
      , getObjectById: function (e) {
        if (Y.w3) return i(e)
      }
      , embedSWF: function (e, r, n, a, o, i, c, g, u, d) {
        var h = {
          success: !1
          , id: r
        };
        Y.w3 && !(Y.wk && Y.wk < 312) && e && r && n && a && o ? (S(r, !1), t(function () {
          n += "", a += "";
          var t = {};
          if (u && typeof u === P)
            for (var p in u) t[p] = u[p];
          t.data = e, t.width = n, t.height = a;
          var f = {};
          if (g && typeof g === P)
            for (var m in g) f[m] = g[m];
          if (c && typeof c === P)
            for (var w in c) typeof f.flashvars != A ? f.flashvars += g_strAmp + w + "=" + c[w] : f.flashvars = w + "=" + c[w];
          if (b(o)) {
            var T = _(t, f, r);
            t.id == r && S(r, !0), h.success = !0, h.ref = T
          } else {
            if (i && l()) return t.data = i, void s(t, f, r, d);
            S(r, !0)
          }
          d && d(h)
        })) : d && d(h)
      }
      , switchOffAutoHideShow: function () {
        j = !1
      }
      , ua: Y
      , getFlashPlayerVersion: function () {
        return {
          major: Y.pv[0]
          , minor: Y.pv[1]
          , release: Y.pv[2]
        }
      }
      , hasFlashPlayerVersion: b
      , createSWF: function (e, t, r) {
        return Y.w3 ? _(e, t, r) : void 0
      }
      , showExpressInstall: function (e, t, r, n) {
        Y.w3 && l() && s(e, t, r, n)
      }
      , removeSWF: function (e) {
        Y.w3 && d(e)
      }
      , createCSS: function (e, t, r, n) {
        Y.w3 && w(e, t, r, n)
      }
      , addDomLoadEvent: t
      , addLoadEvent: r
      , getQueryParamValue: function (e) {
        var t = D.location.search || D.location.hash;
        if (t) {
          if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return T(t);
          for (var r = t.split("&"), n = 0; n < r.length; n++)
            if (r[n].substring(0, r[n].indexOf("=")) == e) return T(r[n].substring(r[n].indexOf("=") + 1))
        }
        return ""
      }
      , expressInstallCallback: function () {
        if (W) {
          var e = p(L);
          e && v && (e.parentNode.replaceChild(v, e), C && (S(C, !0), Y.ie && Y.win && (v.style.display = "block")), y && y(E)), W = !1
        }
      }
    }
  }()
  , SpeechStream = new function () {}
  , RWTH_DONT_ALTER = "rwDontAlter"
  , RWTH_COMPONENT = "rwTHcomp"
  , RWTH_GENERATED = "rwTHgen"
  , RWTH_PERM_GENERATED = "rwTHpgen"
  , DEFAULT_VOICE_ARRAY = ["Vocalizer Expressive Serena Premium High 22kHz", "Vocalizer Expressive Samantha Standard 22kHz", "Vocalizer Expressive Paulina Premium High 22kHz", "Vocalizer Expressive Monica Premium High 22kHz", "Vocalizer Expressive Audrey Premium High 22kHz", "Vocalizer Expressive Amelie Premium High 22kHz", "ScanSoft Steffi_Full_22kHz", "ScanSoft Silvia_Full_22kHz", "ScanSoft Claire_Full_22kHz", "ScanSoft Ingrid_Full_22kHz", "ScanSoft Karen_Full_22kHz", "Vocalizer Expressive Luciana Premium High 22kHz", "ScanSoft Nora_Full_22kHz", "Vocalizer Expressive Damayanti Premium High 22kHz"]
  , TOOL_TIP_TEXT_ARRAY = [["Click To Speak Mode", "Select this then click anywhere in the book to start reading text", "Haz clic para el modo hablado", "", "", "", "", "", "Klik voor voorlezen", "Markera och läs-läge", "", "", "Klikk til Tale Modus"], ["Speak The Current Selection", "Speak the current selection", "Leer en voz alta el texto seleccionado", "", "", "", "", "", "Voorlezen huidige selectie", "Läs upp den nuvarande markeringen", "", "", "Uttal gjeldende valg"], ["Pause Speech", "Pause Speech", "Discurso de pausa", "", "", "", "", "", "Pauzeer voorlezen", "Pausa uppläsningen", "", "", "Pause Tale"], ["Stop Speech", "Stops speech playback", "Parar voz", "", "", "", "", "", "Stop voorlezen", "Stoppa uppläsningen", "", "", "Stopp Tale"], ["Translate Word", "Double-click a word in the book and click this icon\nto translate the word into Spanish", "Traducir palabra", "", "", "", "", "", "NL: Translate Word", "SE: Translate Word", "", "", "NO: Translate Word"], ["Fact Finder", "Select some text in the book and click this icon to\nperform a Google search", "Buscador de datos", "", "", "", "", "", "NL: Fact Finder", "SE: Fact Finder", "", "", "NO: Fact Finder"], ["Dictionary", "Double-click a word in the book and click this icon to\nsee dictionary definitions", "Diccionario", "", "", "", "", "", "NL: Dictionary", "SE: Dictionary", "", "", "NO: Dictionary"], ["Highlight Cyan", "Make a selection in the book and click this icon to\ncreate a blue highlight", "Realce azul verdoso", "", "", "", "", "", "NL: Highlight Cyan", "SE: Highlight Cyan", "", "", "NO: Highlight Cyan"], ["Highlight Magenta", "Make a selection in the book and click this icon to\ncreate a pink highlight", "Realce morado", "", "", "", "", "", "NL: Highlight Magenta", "SE: Highlight Magenta", "", "", "NO: Highlight Magenta"], ["Highlight Yellow", "Make a selection in the book and click this icon to\ncreate a yellow highlight", "Realce amarillo", "", "", "", "", "", "NL: Highlight Yellow", "SE: Highlight Yellow", "", "", "NO: Highlight Yellow"], ["Highlight Green", "Make a selection in the book and click this icon to\ncreate a green highlight", "Realce verde", "", "", "", "", "", "NL: Highlight Green", "SE: Highlight Green", "", "", "NO: Translate Word"], ["Remove Highlights", "Remove all your highlights from this page", "Borrar realce", "", "", "", "", "", "NL: Remove Highlights", "SE: Remove Highlights", "", "", "NO: Remove Highlights"], ["Collect Highlights", "Collect all your highlights and display them\nin a window, grouped by color", "Recopilar realces", "", "", "", "", "", "NL: Collect Highlights", "SE: Collect Highlights", "", "", "NO: Collect Highlights"], ["Click here to select the text", "Click here to select the text", "clic aqu" + String.fromCharCode(237) + " para destacar", "", "", "", "", "", "NL: Click here to select the text", "SE: Click here to select the text", "", "", "NO: Click here to select the text"], ["MP3 Maker", "MP3 Maker", "MP3 Maker", "", "", "", "", "", "NL: MP3 Maker", "SE: MP3 Maker", "", "", "NO: MP3 Maker"], ["Calculator", "Calculator", "Calculator", "", "", "", "", "", "NL: Calculator", "SE: Calculator", "", "", "NO: Calculator"], ["Generate Cache", "Generate Cache", "Generate Cache", "", "", "", "", "", "NL: Generate Cache", "SE: Generate Cache", "", "", "NO: Generate Cache"], ["Check Cache", "Check Cache", "Check Cache", "", "", "", "", "", "NL: Check Cache", "SE: Check Cache", "", "", "NO: Calculator"], ["Picture Dictionary", "Picture Dictionary", "Picture Dictionary", "", "", "", "", "", "NL: Picture Dictionary", "SE: Picture Dictionary", "", "", "NO: Picture Dictionary"], ["Spell Checker", "Spell Checker", "Spell Checker", "", "", "", "", "", "NL: Spell Checker", "SE: Spell Checker", "", "", "NO: Spell Checker"], ["Homophone Checker", "Homophone Checker", "Homophone Checker", "", "", "", "", "", "NL: Homophone Checker", "SE: Homophone Checker", "", "", "NO: Homophone Checker"], ["Prediction Checker", "Prediction Checker", "Prediction Checker", "", "", "", "", "", "NL: Prediction Checker", "SE: Prediction Checker", "", "", "NO: Prediction Checker"], ["Submit", "Submit", "Submit", "", "", "", "", "", "NL: Submit", "SE: Submit", "", "", "NO: Submit"], ["Sticky note", "Sticky note", "Sticky note", "", "", "", "", "", "NL: Sticky Note", "SE: Sticky Note", "", "", "NO: Sticky Note"], ["Create pronunciation", "Create pronunciation", "Create pronunciation", "", "", "", "", "", "NL: Create pronunciation", "SE: Create pronunciation", "", "", "NO: Create pronunciation"], ["Edit pronunciation", "Edit pronunciation", "Edit pronunciation", "", "", "", "", "", "NL: Edit pronunciation", "SE: Edit pronunciation", "", "", "NO: Edit pronunciation"]]
  , PLEASE_SELECT_TEXT_ARRAY = ["Please select some text before clicking 'Play'.", "Please select some text before clicking 'Play'.", "", "", "", "", "", "", "Selecteer een stuk tekst voordat u op 'Play' klikt.", "Du måste markera text innan du klickar på 'Läs upp'.", "", "", "Vennligst velg noe tekst før du klikker 'Spill av'."]
  , tmpCounterForConsts = 0
  , CLICK_TO_SPEAK = tmpCounterForConsts++
  , SPEAK_CURRENT_SELECTION = tmpCounterForConsts++
  , PAUSE_SPEECH = tmpCounterForConsts++
  , STOP_SPEECH = tmpCounterForConsts++
  , FACT_FINDER = tmpCounterForConsts++
  , TRANSLATE_WORD = tmpCounterForConsts++
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
  , SPELL_CHECKER = tmpCounterForConsts++
  , SCREENSHOTREADER_CHECKER = tmpCounterForConsts++
  , PREDICTION_CHECKER = tmpCounterForConsts++
  , SUBMIT = tmpCounterForConsts++
  , STICKY_NOTE = tmpCounterForConsts++
  , CREATE_PRONUNCIATION = tmpCounterForConsts++
  , EDIT_PRONUNCIATION = tmpCounterForConsts++
  , FUN_PLAY = tmpCounterForConsts++
  , FUN_STOP = tmpCounterForConsts++
  , PLEASE_SELECT_TEXT = tmpCounterForConsts++
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
  , IMG_POSITION_FROM_LEFT_ARRAY = [0, 33, 66, 99, 132, 165, 198, 264, 297, 330, 363, 396, 429, 0, 528, 462, 561, 594, 231, 0, 0, 0, 0, 495, 627, 660, 693, 726]
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
  , SUPPORTED_LANG_CODES = "eba_language ENG_UK  ENGLISH UK ENG_US ENGLISH_US SPANISH SPANISH_US ESPANOL SPANISH_ES FRENCH FRENCH_CN GERMAN ITALIAN DUTCH SWEDISH AUSTRALIAN MALAYSIAN"
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
  , FRENCH_CN = 5
  , GERMAN = 6
  , ITALIAN = 7
  , DUTCH = 8
  , SWEDISH = 9
  , AUSTRALIAN = 10
  , PORTUGUESE = 11
  , NORWEGIAN = 12
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
  , spelling_icon = 32
  , homophone_icon = 64
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
  , fullbrowsealoud_icons = 7967
  , standardbrowsealoud_icons = 31
  , minbrowsealoud_icons = 1
  , submit_icon = 8192
  , no_bar = 0
  , main_icons = 7967
  , standard_icons = 31
  , min_icons = 1
  , rw_icons = 17047327
  , rw_android_icons = 262145
  , title_rw = 0
  , title_ba = 1
  , title_ebooks = 2
  , title_th = 3
  , title_portal = 4
  , g_selectionRange = null
  , g_bOnloadFinished = !1
  , g_bDontIngoreSkips = !1
  , g_bOnClick = !0
  , g_bUseBookmarks = !0
  , stringtoleave = "dtdType ls_teacherFlag FAST_SPEED DEFAULT_SPEED MEDIUM_SPEED SLOW_SPEED VERY_SLOW_SPEED pause_icon mp3_icon calculator_icon generatecache_icon checkcache_icon picturedictionary_icon"
  , g_nNavDoubleClick, g_bNoTitleBar = !1
  , g_strSpeechRangeColours = "color:#000000; background:#FFFF00"
  , g_strSpeechWordColours = "color:#FFFFFF; background:#0000FF"
  , g_strPlayStartPoint = null
  , g_bReachedEnd = !1
  , g_bUseContainer = !1
  , g_bAllowAlertsFlag = !1
  , g_bAllowUserMessages = !0
  , eba_actual_version = "185"
  , g_strRevision = "0"
  , g_strServerVersion = "ToolbarRW"
  , g_strClientVersion = "Plus"
  , g_nSpeechStreamServerVersion = null
  , g_nIcons = fullbrowsealoud_icons
  , g_nDisplayIcons = -1
  , g_nNoDisplayIcons = 0
  , g_strServer = "inoeonmfapjbbkmdafoankkfajkcphgd"
  , g_strSpeechServer = "control01.speechstream.net"
  , g_strSpeechServerBackup = null
  , g_strTranslateServer = null
  , g_strDictionaryServer = null
  , g_strImageDictionaryServer = null
  , g_strSourceFolder = "SpeechStream"
  , g_strWebToSpeechFolder = "/SpeechStream/"
  , g_strVoice = "Vocalizer Expressive Ava Premium High 22kHz"
  , g_strCustId = null
  , g_strBookId = null
  , g_strPageId = null
  , g_nCustId = -1
  , g_strLoginName = "webappreadwrite"
  , g_strLoginPassword = "webappreadwrite"
  , g_nLanguage = 0
  , g_bVoiceFromLangFlag = !1
  , g_strAltVoice = null
  , g_strLocale = "US"
  , g_nSpeedValue = 40
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
  , g_strPersistStorageUrl = "portal.texthelp.com"
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
  , g_nHoverIndex = -1
  , g_nStickyIndex = -1
  , g_nSpellIndex = -1
  , g_nHomophoneIndex = -1
  , g_nPredIndex = -1
  , g_bIELoadedFlag = !1
  , g_bIsScholastic = !1
  , g_bMcGrawHill = !1
  , g_bInvalidHtml = !1
  , g_bContinuousReading = !1
  , g_nextTargetForContinuousReading = null
  , g_bInlineImg = !1
  , g_bBubbleMode = !1
  , g_bBubbleFreezeOnShiftFlag = !0
  , g_bBubbleModeStartDisabled = !1
  , g_bSSL = !0
  , g_bSSLSpeech = !0
  , g_bSSLToolbar = !0
  , g_bCheckPronunciationBeforeCache = !1
  , g_bAlterBrowserForConsistency = !1
  , g_bSpeechSelectionBySentence = !0
  , g_bCallPageCompleteOnSelectionEnd = !0
  , g_finalSentence = null
  , g_bTakeClickOnRadioBox = !1
  , g_bSpeakerID = null
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
  , g_placeholderObj, g_bDynamicLoading = !1
  , g_noScrolling = !1
  , dtdType, g_bServerSupport = !1
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
  , g_bUseBar = !0
  , g_nBarWidth = 8
  , g_nBarHeight = 60
  , g_afDivPosX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  , g_afDivPosY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  , g_anDivWidth = [300, 300, 300, 300, 600, 250, 220, 660, 240, 300, 300, 100]
  , g_anDivHeight = [40, 40, 40, 40, 40, 250, 40, 60, 256, 30, 30, 30]
  , g_abVisible = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
  , $g_bMouseSpeech = !1
  , g_dtdType = ""
  , g_bXDTDType = !1
  , g_bLooseType = !1
  , g_bIE = "Microsoft Internet Explorer" == navigator.appName
  , g_bIE6 = navigator.appVersion.indexOf("MSIE 6.") > -1
  , g_bIE7 = navigator.appVersion.indexOf("MSIE 7.") > -1
  , g_bIE8 = navigator.appVersion.indexOf("MSIE 8.") > -1
  , g_bIE9 = navigator.appVersion.indexOf("MSIE 9.") > -1
  , g_bIEBackCompat = !1
  , g_bIEDocumentMode = -1
  , g_bIEOld, g_bIENew;
g_bIE && (g_bIE6 ? document.compatMode && "CSS1Compat" != document.compatMode && (g_bIEBackCompat = !0) : g_bIE7 ? (g_bIE8 = !0, document.compatMode && ("CSS1Compat" != document.compatMode ? g_bIEBackCompat = !0 : g_bXDTDType = !0), document.documentMode && (g_bIEDocumentMode = document.documentMode)) : (g_bXDTDType = !0, g_bIEDocumentMode = document.documentMode)), g_bIE && (g_bIEDocumentMode >= 9 ? (g_bIENew = !0, g_bIEOld = !1) : (g_bIENew = !1, g_bIEOld = !0));
var g_bChrome = navigator.appVersion.indexOf("Chrome") > -1
  , g_bSafari = navigator.appVersion.indexOf("Safari") > -1
  , g_bFireFox = !(g_bIE || g_bSafari)
  , strAgent = navigator.userAgent.toLowerCase()
  , g_bTouchScreen = strAgent.indexOf("ipad") > -1 || strAgent.indexOf("ipod") > -1 || strAgent.indexOf("iphone") > -1 || strAgent.indexOf("android") > -1;
Array.indexOf || (Array.prototype.indexOf = function (e) {
  for (var t = 0; t < this.length; t++)
    if (this[t] == e) return t;
  return -1
});
var g_strServerDomain = "localhost"
  , $g_strFileLoc = ""
  , g_strSwfLoc = ""
  , g_speakableTextAreaTarget = null
  , g_nSpeakableTextAreaTimerId = 0
  , g_nIdCounter = 1
  , g_bSticky = !1
  , g_bLocalPronunciationLoaded = !1
  , g_bPronActive = !1
  , g_bMathsSymbols = !1
  , g_mathsSymbolArray = new Array;
g_mathsSymbolArray.push("-"), g_mathsSymbolArray.push("+"), g_mathsSymbolArray.push("/"), g_mathsSymbolArray.push("*"), g_mathsSymbolArray.push("<"), g_mathsSymbolArray.push(">"), g_mathsSymbolArray.push("="), g_mathsSymbolArray.push("^"), g_mathsSymbolArray.push("<="), g_mathsSymbolArray.push(">=");
var g_mathsMapping = new Object;
g_mathsMapping["-"] = "minus", g_mathsMapping["+"] = "plus", g_mathsMapping["/"] = "divided by", g_mathsMapping["*"] = "multiplied by", g_mathsMapping["<"] = "less than", g_mathsMapping[">"] = "greater than", g_mathsMapping["="] = "equals", g_mathsMapping["^"] = "raised to the power of", g_mathsMapping["<="] = "less than or equal to", g_mathsMapping[">="] = "greater than or equal to";
var g_bWorkaroundFirefoxSwf = !1
  , g_bStickyLoaded = !1
  , g_bSSLoaded = !1
  , g_bSearchLoaded = !1
  , g_strNoFlashErrorMsg = "Adobe Flash Player 10 or greater is required to use speech.\r\nYou can download and install Adobe Flash Player from http://get.adobe.com/flashplayer/"
  , g_bNoFlashConfirm = !1
  , eba_server_version, eba_serverVersion, eba_client_version, eba_clientVersion, eba_login_name, eba_login_password, eba_loginName, eba_loginPassword, eba_server, eba_speech_server, eba_speechServer, eba_speech_server_backup, eba_speechServerBackup, eba_folder, eba_client_folder, eba_clientFolder, eba_speech_stream_server_version = -1
  , eba_voice, eba_hover_flag, eba_bubble_mode, eba_bubble_freeze_on_shift_flag, eba_voice_from_lang_flag, eba_speed_value, eba_speedValue, eba_speed_offset, eba_initial_speech_on, eba_continuous_reading, eba_play_start_point, eba_speech_started_callback, eba_rendering_speech_callback, eba_speech_complete_callback, eba_page_complete_callback, eba_speak_selection_by_sentence, eba_page_complete_after_selection, eba_onStopContinuous_callback, eba_use_container, eba_override_x, eba_override_y, eba_icons, eba_no_display_icons, eba_no_title, eba_noTitleFlag, eba_hidden_bar, eba_speech_range_colours, eba_speech_word_colours, eba_allow_alerts_flag, eba_alerts, eba_userMessges, eba_language, eba_locale, eba_ignore_buttons, eba_max_word_count, eba_logo_url = null
  , eba_inline_img, eba_cache_buster, eba_dictionary_server, eba_custom_dictionary_url, eba_alt_dictionary_url, eba_translate_server, eba_translate_source, eba_translate_target, eba_image_dictionary_server = null
  , eba_mp3_id, eba_mp3_limit, eba_mp3_callback, eba_cust_id, eba_custId, eba_book_id, eba_bookId, eba_page_id, eba_pageId, eba_annotate_confirm_delete_note, eba_annotate_persist_notes, eba_annotate_persist_highlights, eba_annotate_note_editor_id, eba_annotate_highlight_editor_id, eba_annotate_storage_url, eba_annotate_note_reader_id, eba_annotate_highlight_reader_id, eba_speechCacheGenerateFlag, eba_cache_building_mode, eba_speechCacheFlag, eba_speech_cache_flag, eba_cache_mode, eba_cache_live_generation, eba_autoCachePage, eba_cacheResult = ""
  , eba_cache_retry, eba_cache_retry_timeout, eba_cache_selection, eba_cache_user_text, eba_split_cache_path, eba_autocache_generate, eba_autocache_check, eba_autocache_allspeeds, eba_autocache_callback, eba_clientside_pronunciation, eba_check_pronunciation_before_cache, eba_skip_on_error, eba_alter_browser_for_consistency, eba_ssl_flag, eba_ssl_speech, eba_ssl_toolbar, eba_search_speech_server, eba_replace_speech_server, eba_no_flash, eba_handle_radio_checkbox_click, eba_bypass_dom_check = !1
  , eba_limit_cookies, eba_math, eba_maths, eba_symbol_text, eba_abbr_array = null
  , eba_date_filter_mode, ls_teacherFlag = !1
  , eba_reading_age, eba_no_flash_error_msg = ""
  , eba_expand_sentence_selections = !1
  , eba_log_speech_requests = !1
  , eba_log_web_service = ""
  , eba_click_here_text = "Click here to go to"
  , g_nNavDoubleClickTime = 0
  , g_userDeterminedTarget = null
  , eba_ignore_hidden, g_bIgnoreHidden = !0
  , SpeechStreamNote = "The SpeechStream object will contain parameter objects in the future. It holds actionOnError cacheMode and pronunciation"
  , ActionOnError = function () {
    this.STOP = 0, this.SKIP = 1, this.action = this.STOP
  }
  , CacheMode = function () {
    this.NONE = 0, this.CACHE_WITH_LIVE_SERVER = 1, this.CACHE_ONLY = 2, this.CACHE_BUILDING_MODE = 3, this.mode = this.NONE, this.getLiveServer = function () {
      return this.mode == this.NONE ? g_strSpeechServer : this.mode == this.CACHE_ONLY ? null : this.mode == this.CACHE_WITH_LIVE_SERVER ? g_strSpeechServerBackup : this.mode == this.CACHE_BUILDING_MODE ? null != g_strSpeechServerBackup ? g_strSpeechServerBackup : g_strSpeechServer : void 0
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
SpeechStream.actionOnError = new ActionOnError, SpeechStream.cacheMode = new CacheMode;
var g_nClickRejectTime = 200
  , g_rwFilter = null
  , SPECIAL_CASE = -10;
THCaret.prototype.isSpecialCase = function () {
  return this.offset == SPECIAL_CASE
}, THCaret.prototype.check = function () {
  var bValid = !0;
  with(this) null == node || null == node.parentNode ? bValid = !1 : 3 != node.nodeType ? 1 == node.nodeType && this.offset == SPECIAL_CASE || (bValid = !1) : (this.offset < 0 || this.offset > node.nodeValue.length) && (bValid = !1);
  return bValid
}, THCaret.prototype.toString = function () {
  var e = "THCaret ";
  return null != this.node && (3 == this.node.nodeType ? e += this.node.nodeValue + " " + this.node.parentNode.tagName + " " : 1 == this.node.nodeType && (e += this.node.tagName + " ")), e += this.offset
}, THCaret.prototype.equals = function (e) {
  return null != e && (this.node == e.node && this.offset == e.offset && this.forwardBias == e.forwardBias)
}, THCaretRange.prototype.equals = function (e) {
  return null != e && (this.leftCaret.equals(e.leftCaret) && this.rightCaret.equals(e.rightCaret))
}, THCaretRange.prototype.toString = function () {
  return rw_getTextOverCaretRange(this)
}, SpeechStream.DateFilterModes = {
  DATE: 2
  , NUMBER: 1
  , NONE: 0
}, SpeechStream.DateFilter = function () {
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
        var a = parseInt(e)
          , o = parseInt(e.substring(2, 4));
        r = a < 1e3 ? e : (a >= 1e3 && a < 2e3 || a >= 2100) && 0 == o ? " " + e.substring(0, 2) + " hundred " : (a >= 1e3 && a < 2e3 || a >= 2100) && o > 0 && o < 10 ? " " + e.substring(0, 2) + " oh " + e.substring(3, 4) + " " : (a >= 1e3 && a < 2e3 || a >= 2010) && o >= 10 ? " " + e.substring(0, 2) + " " + e.substring(2, 4) + " " : 2e3 == a ? " two thousand " : a > 2e3 && a < 2010 ? " two thousand and " + e.substring(3, 4) + " " : e
      } else r = e;
      break;
    default:
      r = e
    }
    return r
  }

  function t(e) {
    return 4 == e.length && !isNaN(e) && parseInt(e) >= 1e3
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
    , o = /^[ ,.?!;:\x27\x22\x82\x91\x92\x93\x94]+|[ ,.?!;:\x27\x22\x82\x91\x92\x93\x94]+$/g;
  this.setMode = function (e) {
    var t = parseInt(e);
    t == a.NONE || t == a.NUMBER || t == a.DATE ? n = t : "string" == typeof e && ("NONE" == e ? n = a.NONE : "NUMBER" == e ? n = a.NUMBER : "DATE" == e && (n = a.DATE))
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
var g_dateFilter = new SpeechStream.DateFilter
  , THDomRange_ERROR = -1
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
    var caretRange = rw_getCaretPairFromDomPosition(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset)
      , startCaret = caretRange.leftCaret
      , endCaret = caretRange.rightCaret;
    null == startCaret && null == endCaret ? (startCaret = new THCaret(document.body, 0, (!0)), endCaret = new THCaret(document.body, 0, (!1))) : null != startCaret && null != endCaret || (null == startCaret ? startCaret = new THCaret(endCaret.node, endCaret.offset, (!0)) : endCaret = new THCaret(startCaret.node, startCaret.offset, (!1)))
  }
}, THDomRange.prototype.toString = function () {
  this.refresh();
  var e = rw_getRangeObject(this.body);
  return e.setStart(this.startCaret.node, this.startCaret.offset), e.setEnd(this.endCaret.node, this.endCaret.offset), e.toString()
}, THDomRange.prototype.getStartAsRange = function () {
  var e = rw_getRangeObject(this.body);
  return e.setStart(this.startCaret.node, this.startCaret.offset), e.setEnd(this.startCaret.node, this.startCaret.offset), e
}, THDomRange.prototype.getEndAsRange = function () {
  var e = rw_getRangeObject(this.body);
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
}, THDomRefPt.prototype.isSpecialCase = function () {
  return this.offset == SPECIAL_CASE
}, THDomRefPt.prototype.toString = function () {
  return "THDomRefPt " + this.path + " " + this.offset
}, THHoverTarget.prototype.isRange = function () {
  return null != this.range
}, THHoverTarget.prototype.getCaretRange = function () {
  var e;
  if (this.isRange()) e = rw_getCaretPairFromDomPosition(this.range.body, this.range.startRef.path, this.range.startRef.offset, this.range.endRef.path, this.range.endRef.offset);
  else {
    var t = rw_getCaretFromDomPosition(this.body, this.path, -1, !0);
    e = new THCaretRange(t, t)
  }
  return e
}, THHoverTarget.prototype.getTextPreparedForSpeech = function () {
  return this.prepareTextForSpeech(), this.textToSpeak
}, THHoverTarget.prototype.prepareTextForSpeech = function () {
  var e, t;
  if (this.isRange()) {
    this.wordNodes = new Array;
    var r = rw_getSpeechOverRangeToSpeak(this.range.body, this.range.startRef, this.range.endRef, this.wordNodes);
    if (rw_checkIfVoiceChanged(r.voice), null != r.caretRange) {
      var n = r.caretRange;
      this.range = rw_getTHRangeFromTHCaretRange(n)
    }
    e = r.txt, t = r.txtOrig
  } else {
    var a = rw_getCaretFromDomPosition(this.body, this.path, -1, !0);
    if (null != a && null != a.node) {
      var o = getNodeText(a.node);
      if (0 == o.trimTH()
        .length) e = "", t = "";
      else {
        rw_checkIfVoiceChanged(g_bVoiceFromLangFlag ? rw_getVoiceSetForNode(a.node) : null);
        var i = new SpeechStream.SpeechRequest;
        i.setString(o, SpeechStream.SpeechRequestBookmarks.OUTER), e = i.getText(), t = i.getFinalText()
      }
    } else e = "", t = ""
  }
  if (g_bVoiceFromLangFlag && e.length > 0) {
    var l;
    null != g_strAltVoice ? l = g_strAltVoice : g_strAltVoice = g_strVoice, "ScanSoft Emily_Full_22kHz" != g_strAltVoice && "ScanSoft Daniel_Full_22kHz" != g_strAltVoice && "ScanSoft Jill_Full_22kHz" != g_strAltVoice && "ScanSoft Samantha_Full_22kHz" != g_strAltVoice && "ScanSoft Tom_Full_22kHz" != g_strAltVoice && "VW Kate" != g_strAltVoice && "VW Paul" != g_strAltVoice || (e = '<volume level="75"/>' + e, t = '<volume level="75"/>' + t)
  }
  this.textToSpeak = e, this.textToSpeakNoChanges = t
}, THHoverTarget.prototype.highlightRange = function () {
  try {
    if (null != this.range) {
      var e = rw_getCaretPairFromDomPosition(this.range.body, this.range.startRef.path, this.range.startRef.offset, this.range.endRef.path, this.range.endRef.offset)
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
      var e = rw_getCaretPairFromDomPosition(this.range.body, this.range.startRef.path, this.range.startRef.offset, this.range.endRef.path, this.range.endRef.offset)
        , t = e.leftCaret
        , r = e.rightCaret;
      null != t && null != r && rw_removeSpeechHighlight(rw_getListOfHighlightableNodes(t, r), !1)
    }
  } catch (n) {
    thLog("Error in THHoverTarget:unhighlightRange: " + n.message)
  }
}, THHoverTarget.prototype.equals = function (e) {
  return null != e && (this.isRange() == e.isRange() && (this.isRange() ? this.range.equals(e.range) : this.path.equalsTH(e.path)))
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
  return this.startRef.path == e.startRef.path && this.startRef.offset == e.startRef.offset && this.endRef.path == e.endRef.path && this.endRef.offset == e.endRef.offset
}, THRange.prototype.toString = function () {
  with(this) {
    if (g_bIEOld) {
      var range = getAsRange();
      return null != range ? getAsRange()
        .text : ""
    }
    var range = getAsRange();
    return null != range ? getAsRange()
      .toString() : ""
  }
}, THRange.prototype.getAsRange = function () {
  with(this) {
    var range = null;
    if (g_bIEOld) range = rw_getAsTextRange(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset);
    else {
      range = rw_getRangeObject(this.body);
      var caretRange = rw_getCaretPairFromDomPosition(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset)
        , startCaret = caretRange.leftCaret
        , endCaret = caretRange.rightCaret;
      null != startCaret && null != endCaret ? (range.setStart(startCaret.node, startCaret.offset), range.setEnd(endCaret.node, endCaret.offset)) : (range = null, thLog("Error in THRange:getAsRange: Failed to get the start or end caret."))
    }
    return range
  }
};
var SPEECH_MODES_STR = "SpeechMode DISABLED CLICK_SPEAK HOVER_SPEAK BUBBLE_SPEAK KEY_PRESS_SPEAK";
SpeechStream.SpeechMode = new function () {
  this.mode = -1, this.DISABLED = 0, this.CLICK_SPEAK = 1, this.HOVER_SPEAK = 2, this.BUBBLE_SPEAK = 4, this.KEY_PRESS_SPEAK = 8
}, SpeechStream.SpeechMode.setPlayMode = function (e) {
  if ("number" == typeof e) {
    switch (e) {
    case SpeechStream.SpeechMode.DISABLED:
      $g_bMouseSpeech = !1, g_bSpeechModeFlag = !1, $rw_enableSpeachByBubbleMode(!1);
      break;
    case SpeechStream.SpeechMode.CLICK_SPEAK:
      g_bOnClick = !0, $g_bMouseSpeech = !0, g_bSpeechModeFlag = !0, $rw_enableSpeachByBubbleMode(!1);
      break;
    case SpeechStream.SpeechMode.HOVER_SPEAK:
      g_bOnClick = !1, $g_bMouseSpeech = !0, g_bSpeechModeFlag = !0, $rw_enableSpeachByBubbleMode(!1);
      break;
    case SpeechStream.SpeechMode.BUBBLE_SPEAK:
      $g_bMouseSpeech = !1, g_bSpeechModeFlag = !1, $rw_enableSpeachByBubbleMode(!0);
      break;
    case SpeechStream.SpeechMode.KEY_PRESS_SPEAK:
      $g_bMouseSpeech = !1, g_bSpeechModeFlag = !1, $rw_enableSpeachByBubbleMode(!1);
      break;
    default:
      return
    }
    SpeechStream.SpeechMode.mode = e
  }
}, SpeechStream.SpeechMode.getPlayMode = function () {
  return SpeechStream.SpeechMode.mode == -1 && (g_bBubbleMode ? g_nSpeechMode = SpeechStream.SpeechMode.BUBBLE_SPEAK : $g_bMouseSpeech && g_bOnClick ? g_nSpeechMode = SpeechStream.SpeechMode.CLICK_SPEAK : $g_bMouseSpeech && !g_bOnClick ? g_nSpeechMode = SpeechStream.SpeechMode.HOVER_SPEAK : g_nSpeechMode = SpeechStream.SpeechMode.KEY_PRESS_SPEAK), SpeechStream.SpeechMode.mode
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
  var r = !1;
  if (g_bMathsSymbols && rw_mathsSymbolReplacementWordList(e) && (r = !0), null != g_dateFilter && g_dateFilter.getMode() != SpeechStream.DateFilterModes.NONE && g_dateFilter.checkDatesFromList(e) && (r = !0), this.m_strText = this.buildString(e, t), SpeechStream.pronunciation.checkPronunciation() && rw_checkPronunciation(e) && (r = !0, this.m_strFinalText = this.buildString(e, t)), this.m_bChanged = r, null == this.m_strFinalText && (this.m_strFinalText = this.m_strText), "boolean" == typeof eba_build_cache_for_external_use && eba_build_cache_for_external_use) {
    var n = ""
      , a = e.length;
    for (i = 0; i < a; i++) n += e[i];
    this.m_strText = n
  }
}, SpeechStream.SpeechRequest.prototype.buildString = function (e, t) {
  var r = t == SpeechStream.SpeechRequestBookmarks.ALL
    , n = t == SpeechStream.SpeechRequestBookmarks.OUTER
    , a = ""
    , o = e.length;
  for (n && (a += g_strBMStart + "0" + g_strBMEnd), i = 0; i < o; i++) r && (a += g_strBMStart + i + g_strBMEnd), a += rw_filterWord(e[i]);
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
  , NON_BREAKING_SPACE = String.fromCharCode(160)
  , g_tmpLastTargetForCache = null
  , warningMethodName = "setWarning"
  , g_nLastNodePosition = -1
  , g_astrSpeechInstructionQueue = new Array
  , aTmpVarToHoldBodyRef = null;
String.prototype.trimSpaceTH = function () {
  return this.replace(/^[\t\r\n ]+/, "")
    .replace(/[\t\r\n ]+$/, "")
}, String.prototype.trimSpaceStartTH = function () {
  return this.replace(/^[\t\r\n ]+/, "")
}, String.prototype.trimSpaceEndTH = function () {
  return this.replace(/[\t\r\n ]+$/, "")
}, String.prototype.trimTH = function () {
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
}, SpeechStream.IconParameters = function () {
  this.ICON_NAME = 0, this.ICON_ALT_TEXT = 1, this.ICON_OFFSET = 2, this.ICON_IS_TOGGLE = 3, this.ICON_TOGGLE_STATE = 4
}, SpeechStream.enumIconParams = new SpeechStream.IconParameters, SpeechStream.calculatePaths = new CalculatePaths;
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
  , ICONS_TO_DISABLE = "funplay play cyan magenta yellow green clear collect trans ffinder dictionary picturedictionary"
  , ICONS_TO_DISABLE_WITH_FLASH = "cyan magenta yellow green clear collect"
  , TOGGLE_ICONS_TO_ENABLE_WITH_FLASH = "spell homophone pred";
Number.prototype.NaN0 = function () {
  return isNaN(this) ? 0 : this
};
var g_bMouseDoubleClickTime = 0
  , g_nCurMoveX = -1
  , g_nCurMoveY = -1
  , PLAY_MODE_COOKIE_NAME = "rw_speechenablingdata"
  , g_bInhighlighting = !1
  , noObfs = "ReadHeader1 ReadSection"
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
  , g_strLastError = ""
  , g_strRndId = null
  , m_pronDictionary = new SpeechStream.Dictionary
  , rw_qouteRegex = "\\x82\\x91\\x92"
  , rw_dqouteRegex = "\\x93\\x94"
  , rw_trimRegex = /^[,.?!;:\x27\x22�$�]+|[,.?!;:\x27\x22�$�]+$/g
  , g_nTries = 2
  , g_cachedWebToSpeech = null
  , g_nGlobalCount = 0;
SpeechStream.AjaxRequest = function () {
  var m_request = null
    , m_callBackObject = null
    , m_strCallBackFunctionName = null
    , m_bXml = !1;
  this.callBack = function () {
    with(this) {
      if (readyState < 4 || null == m_callBackObject) return;
      m_bXml ? null == m_strCallBackFunctionName ? m_callBackObject(responseXML) : m_callBackObject[m_strCallBackFunctionName](responseXML) : null == m_strCallBackFunctionName ? m_callBackObject(responseText) : m_callBackObject[m_strCallBackFunctionName](responseText)
    }
  }, this.doPost = function (p_strURL, p_parameters, p_responseObject, p_responseCallback, p_bXml) {
    with(this) m_callBackObject = p_responseObject, m_strCallBackFunctionName = p_responseCallback, m_request = new XMLHttpRequest, m_bXml = p_bXml, m_request.open("POST", p_strURL, !0), m_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), m_request.onreadystatechange = callBack, m_request.send(p_parameters)
  }, this.doGet = function (p_strURL, p_parameters, p_responseObject, p_responseCallback, p_bXml) {
    with(this) m_callBackObject = p_responseObject, m_strCallBackFunctionName = p_responseCallback, m_request = new XMLHttpRequest, m_bXml = p_bXml, m_request.open("GET", p_strURL, !0), m_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), m_request.onreadystatechange = callBack, m_request.send(p_parameters)
  }
}, SpeechStream.HTML5Controller = function () {
  function e() {
    var e = ++d;
    return null != h && (t(0), delete h, h = null), u = !1, S && (f.pause(), f.play(), S = !1), e
  }

  function t(e) {
    e < 0 && $rw_doSelection(e), m = null, b = 0, w = null
  }

  function r(e, t, r, n, a) {
    var o = l + "rwtranslateserver/onlinetranslator?type=ultrahtml5&mode=content&value=" + encodeURIComponent(e) + "&value2=" + e + "&caller=" + location.protocol + "//" + location.host + location.pathname + "&key=" + hex_md5(e + g_strLoginName) + "&username=" + g_strLoginName + "&source=" + t + "&dest=" + r;
    null != g_strCustId && (o += "&custID=" + g_strCustId);
    var i = new SpeechStream.AjaxRequest;
    n ? i.doPost(o, null, a, "translationFlLoad", !1) : i.doPost(o, null, a, "translationLoad", !1)
  }
  var n, a, o, i, l, s, c = "160"
    , g = !1
    , _ = 0
    , u = !1
    , d = 0
    , h = null
    , p = g_strVoice
    , f = new Audio;
  f.type = "audio/mpeg", f.src = "";
  var m = null
    , b = 0
    , w = null
    , S = !0
    , T = !1
    , v = !1;
  this.initialise = function (e, t, r, c) {
    n = t, a = r, o = c, null != g_strDictionaryServer ? (i = g_strDictionaryServer, (i.length < 4 || "http" != i.substring(0, 4)) && (i = rw_getHTTPText(!1) + i), "/" != i.substr(i.length - 1, 1) && (i += "/")) : i = rw_getHTTPText(!1) + "webappspeech.texthelp.com/", null != g_strTranslateServer ? (l = g_strTranslateServer, (l.length < 4 || "http" != l.substring(0, 4)) && (l = rw_getHTTPText(!1) + l), "/" != l.substr(l.length - 1, 1) && (l += "/")) : l = rw_getHTTPText(!1) + "webappspeech.texthelp.com/", null != g_strDictionaryServer ? (s = g_strDictionaryServer, (s.length < 4 || "http" != s.substring(0, 4)) && (s = rw_getHTTPText(!1) + s), "/" != s.substr(s.length - 1, 1) && (s += "/")) : s = rw_getHTTPText(!1) + "webappspeech.texthelp.com/", "true" == e.cacheMode && (T = !0), "true" == e.cacheLiveFallover && (v = !0)
  }, this.setToClipboard = function (e) {}, this.setCacheBuster = function (e) {
    g = e
  }, this.setCacheMode = function () {}, this.resetCacheTimer = function () {
    _ = 0
  }, this.isPaused = function () {
    return u
  }, this.pause = function () {
    null != f && (f.pause(), u = !0)
  }, this.resume = function () {
    null != f && u && (f.play(), u = !1)
  }, this.setCustomerId = function () {}, this.setBookId = function () {}, this.setPageId = function () {}, this.setSpeedValue = function () {}, this.setVoiceName = function (e) {
    p = e
  }, this.getVoiceName = function () {
    return p
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
  var C = "";
  this.getLastError = function () {
    return C
  }, this.getVersion = function () {
    return c
  }, this.getRevisionNumber = function () {
    return "0"
  }, this.checkRequestStillValid = function (e) {
    return e == d
  }, this.setAudio = function (e) {
    f.src = e
  }, this.setTimer = function (e) {
    m = e
  }, this.requestCompleteStartPlayback = function () {
    audioPlaybackTimer(), m.length > 0 ? f.play() : $rw_doSelection(-1)
  }, this.stopSpeech = function () {
    null != f && (f.pause(), f.currentTime = 0, f.src = "", this.onSpeechStop(-1)), h = null, ++d
  }, this.stopSpeechAlt = function () {
    if (null != f) {
      f.pause();
      try {
        f.currentTime = 0
      } catch (e) {}
      f.src = "", this.onSpeechStop(-2)
    }
    h = null, ++d
  }, this.onSpeechStop = function (e) {
    t(e)
  }, this.startSpeech = function (t, r) {
    var n = e();
    h = new SpeechStream.Html5Speech, h.setParameters(this, n, t, r), _ <= g_nCacheRetry || null == o ? h.makeSpeechRequest(a, !1) : h.makeSpeechRequest(o, !0)
  }, this.startSpeechFromBackup = function (t, r) {
    var n = e();
    h = new SpeechStream.Html5Speech, h.setParameters(this, n, t, r), h.makeSpeechRequest(o, !0)
  }, this.startSpeechBackup = function (t) {
    if (null == o) return this.onSpeechStop(-3), !1;
    var r = e();
    return h = new SpeechStream.Html5Speech, h.copyParamaeters(this, r, t), h.makeSpeechRequest(o, !0), !0
  }, this.startSpeechFromCacheWithGen = function (t, r, n, i, l) {
    var s = e();
    if (_ <= g_nCacheRetry || !v || null == o) {
      var c, u;
      g ? (c = a + "SpeechCache/" + t + ".xml?cachebuster=" + (new Date)
        .getTime() + Math.random(), u = a + "SpeechCache/" + t + ".mp3?cachebuster=" + (new Date)
        .getTime() + Math.random()) : (c = a + "SpeechCache/" + t + ".xml", u = a + "SpeechCache/" + t + ".mp3"), h = new SpeechStream.Html5Speech, h.setParameters(this, s, r, l), h.setStaticParameters(n, i), h.loadFiles(c, u)
    } else h = new SpeechStream.Html5Speech, h.setParameters(this, s, r, l), h.setStaticParameters(n, i), h.makeSpeechRequest(o, !0)
  }, this.startSpeechGenerateCache = function (t, r, n, a, o, i) {
    var l = e();
    h = new SpeechStream.Html5Speech, h.setParameters(this, l, r, o), h.setStaticParameters(n, a), h.makeSpeechRequest(i, !0)
  }, this.startSpeechFromCache = function (t, r, n) {
    var i = e();
    if (_ <= g_nCacheRetry || !v || null == o) {
      var l, s;
      g ? (l = a + "SpeechCache/" + t + ".xml?cachebuster=" + (new Date)
        .getTime() + Math.random(), s = a + "SpeechCache/" + t + ".mp3?cachebuster=" + (new Date)
        .getTime() + Math.random()) : (l = a + t + ".xml", s = a + t + ".mp3"), h = new SpeechStream.Html5Speech, h.setParameters(this, i, r, n), h.loadFiles(l, s)
    } else h = new SpeechStream.Html5Speech, h.setParameters(this, i, r, n), h.makeSpeechRequest(o, !0)
  }, this.startSpeechFromCacheGenerator = function (e) {}, this.startSpeechFromFile = function (e, t) {}, this.startHighlighting = function (e) {}, this.simpleSpeech = function (t, r) {
    var n = e();
    h = new SpeechStream.Html5Speech, h.setParameters(this, n, t, r), h.setHighlightable(!1), _ <= g_nCacheRetry || null == o ? h.makeSpeechRequest(a, !1) : h.makeSpeechRequest(o, !0)
  }, this.simpleSpeechFromBackup = function (t, r) {
    var n = e();
    h = new SpeechStream.Html5Speech, h.setParameters(this, n, t, r), h.setHighlightable(!1), h.makeSpeechRequest(o, !0)
  }, this.simpleSpeechBackup = function (t) {
    var r = e();
    h = new SpeechStream.Html5Speech, h.copyParamaeters(this, r, t), h.setHighlightable(!1), h.makeSpeechRequest(o, !0)
  }, this.autogenSpeechFiles = function (t, r, n, a, o) {
    var i = e();
    this.onSpeechStop(-2), h = new SpeechStream.Html5Speech, h.setParameters(this, i, t, a), h.setStaticParameters(r, n), h.makeSpeechRequest(o, !0)
  }, this.checkAutogenCachedFiles = function (e) {}, this.checkAutogenStaticFiles = function (e) {}, this.autoGenComplete = function (e) {}, this.getMP3File = function (e) {}, this.getPictureDictionaryPage = function (e) {
    var t = "&userName=" + g_strLoginName + "&swf=" + c
      , r = s + "ImageServices/imagedict.html?word=" + e + t;
    null != g_strCustId && (r += "&custID=" + g_strCustId);
    var n = new SpeechStream.AjaxRequest;
    n.doPost(r, null, this, "imagedictionaryLoad", !1)
  }, this.imagedictionaryLoad = function (e) {
    null == e || 0 == e.length ? $rw_picturedictionaryReply("No Image.") : $rw_picturedictionaryReply(e)
  }, this.getCustomDictionaryPage = function (e, t) {
    var r = new SpeechStream.AjaxRequest;
    r.doPost(t + e, null, this, "dictionaryLoad", !1)
  }, this.getDictionaryPage = function (e) {
    var t = i + "rwserver/?query=dictionaryHtml&text=" + e + "&locale=" + g_strLocale + "&userName=" + g_strLoginName + "&swf=" + c;
    null != g_strCustId && (t += "&custID=" + g_strCustId);
    var r = new SpeechStream.AjaxRequest;
    r.doPost(t, null, this, "dictionaryLoad", !1)
  }, this.dictionaryLoad = function (e) {
    null == e || 0 == e.length ? $rw_dictionaryReply("Error loading content.") : $rw_dictionaryReply(e)
  }, this.getDictionaryPageFl = function (e) {
    var t = i + "rwserver/?query=dictionary&type=result&wordType=15&&text=" + e + "&locale=" + g_strLocale + "&userName=" + g_strLoginName + "&swf=" + c + "&dictionaryType=SIMPLE";
    null != g_strCustId && (t += "&custID=" + g_strCustId);
    var r = new SpeechStream.AjaxRequest;
    r.doPost(t, null, this, "dictionaryFlLoad", !1)
  }, this.getDictionaryPageFlHTML = function (e) {
    var t = i + "rwserver/?query=dictionaryHtml&text=" + e + "&locale=" + g_strLocale + "&userName=" + g_strLoginName + "&swf=" + c + "&dictionaryType=SIMPLE";
    null != g_strCustId && (t += "&custID=" + g_strCustId);
    var r = new SpeechStream.AjaxRequest;
    r.doPost(t, null, this, "dictionaryFlLoad", !1)
  }, this.dictionaryFlLoad = function (e) {
    null == e || 0 == e.length ? $rw_dictionaryFlReply("Error loading content.") : $rw_dictionaryFlReply(e)
  }, this.getTranslationPage = function (e) {
    this.getTranslationGenericPage(e, "English", "Spanish")
  }, this.getTranslationGenericPage = function (e, t, n) {
    r(e, t, n, !1, this)
  }, this.getTranslationFlGenericPage = function (e, t, n) {
    r(e, t, n, !0, this)
  }, this.translationLoad = function (e) {
    null == e || 0 == e.length ? $rw_transReply("Error loading content.") : (e = '<style type="text/css">div.rwTranWordHeader{font-weight: bold;padding-bottom: 3px;border-bottom:1px solid #666666;margin-bottom: 10px;}span.rwMeaningNum{pading-left: 10px;padding-right: 10px;font-weight:bold;}span.rwMeaning{padding-right:1-px;}</style>' + e, $rw_transReply(e))
  }, this.translationFlLoad = function (e) {
    null == e || 0 == e.length ? $rw_transFlReply("Error loading content.") : (e = '<style type="text/css">div.rwTranWordHeader{font-weight: bold;padding-bottom: 3px;border-bottom:1px solid #666666;margin-bottom: 10px;}span.rwMeaningNum{pading-left: 10px;padding-right: 10px;font-weight:bold;}span.rwMeaning{padding-right:1-px;}</style>' + e, $rw_transFlReply(e))
  }, this.getSoundFileLength = function (e) {}, audioPlaybackTimer = function () {
    if (null != m) {
      if (f.ended) return $rw_speechCompleteCallback(), t(-1), f.pause(), f.currentTime = 0, void(f.src = "");
      m.length > 0 && m[b] < f.currentTime && ($rw_doSelection(b), b++), w = setTimeout(audioPlaybackTimer, 10)
    }
  }
}, SpeechStream.Html5Speech = function () {
  this.m_nRequestNumber = -1, this.m_params = null, this.m_bBackup = !1, this.m_bHighlightable = !0, this.m_speechRequestURL = "", this.m_controller = null, this.makeSpeechRequest = function (e, t) {
    var r = e + "SpeechServices/index.html";
    this.m_bBackup = t, "undefined" != typeof eba_log_speech_requests && eba_log_speech_requests && (this.m_speechRequestURL = escape(r + "?" + this.m_params));
    var n = new SpeechStream.AjaxRequest;
    n.doPost(r, this.m_params, this, "onSpeechRequestResponse", !1)
  }, this.onSpeechRequestResponse = function (e) {
    if (this.m_controller.checkRequestStillValid(this.m_nRequestNumber)) {
      if ("undefined" != typeof eba_log_speech_requests && eba_log_speech_requests && "undefined" != typeof eba_log_web_service && "" != eba_log_web_service) {
        this.m_speechRequestURL += "|" + escape(e + "&custid=" + g_strCustId + "&urlid=" + g_strBookId);
        var t = new SpeechStream.AjaxRequest;
        t.doPost(eba_log_web_service, "speechRequestData=" + this.m_speechRequestURL, this, null)
      }
      var r = e.indexOf("xml=")
        , n = e.indexOf("&mp3")
        , a = e.substring(r + 4, n)
        , o = e.substring(n + 5, e.length);
      if ("error" == a || "error" == o) {
        if (this.m_bBackup) return this.m_controller.onSpeechStop(-3), void(g_strLastError = "Error response from server");
        if (!this.m_controller.startSpeechBackup(this.m_params)) return void(g_strLastError = "Error response from server")
      }
      if ("busy" == a || "busy" == o) {
        if (this.m_bBackup) return this.m_controller.onSpeechStop(-3), void(g_strLastError = "Busy response from server");
        if (!this.m_controller.startSpeechBackup(this.m_params)) return void(g_strLastError = "Busy response from server")
      }
      this.loadFiles(a, o)
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
        t[t.length - 1] < .1 && (t.length = 0), this.m_controller.setTimer(t), this.m_controller.requestCompleteStartPlayback()
      } else this.m_bBackup ? (this.m_controller.onSpeechStop(-3), g_strLastError = "Failed to get timing response from server") : this.m_controller.startSpeechBackup(this.m_params) || (g_strLastError = "Failed to get timing response from server")
    }
  }
}, SpeechStream.Html5Speech.prototype.setParameters = function (e, t, r, n) {
  null == r && (r = ""), this.m_controller = e, this.m_nRequestNumber = t;
  var a = "text=" + encodeURIComponent(r) + "&userName=" + encodeURIComponent(g_strLoginName) + "&voiceName=" + encodeURIComponent(e.getVoiceName()) + "&speedValue=" + encodeURIComponent(g_nSpeedValue);
  null != g_strCustId && (a += "&custID=" + encodeURIComponent(g_strCustId)), null != g_strBookId && (a += "&bookID=" + encodeURIComponent(g_strBookId)), null != g_strPageId && (a += "&pageID=" + encodeURIComponent(g_strPageId)), n && (a += "&usePron=Y"), this.m_params = a
}, SpeechStream.Html5Speech.prototype.copyParamaeters = function (e, t, r) {
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
    addEvent(document, "touchstart", onTouchStart), addEvent(document, "touchmove", onTouchMove), addEvent(document, "touchend", onTouchEnd)
  }, this.initialiseToFrame = function (e) {
    e.document && (addEvent(e.document, "touchstart", onTouchStart), addEvent(e.document, "touchmove", onTouchMove), addEvent(e.document, "touchend", onTouchEnd))
  }, this.clickAndSpeak = function (t) {
    e = t
  };
  onTouchStart = function (a) {
    if (g_bTouchScreen || (g_bTouchScreen = !0), t = !1, e && r) {
      var o = a.changedTouches;
      if (null != o && o.length > 0) {
        var i = rw_getTHCaretFromMouseEvent(o[0], !0);
        n = rw_getHoverTargetFromCaret(i)
      }
    }
  }, onTouchMove = function () {
    g_bTouchScreen || (g_bTouchScreen = !0), t = !0
  }, onTouchEnd = function (a) {
    if (e) {
      if (t) return void(n = null);
      if (r) {
        if (null == n) return;
        var o = new THHoverTarget(null, null, n.range);
        if (null == o) return;
        r = !1, rw_speakHoverTarget(o)
      } else rw_mouseclickEvent(a)
    }
  }
};
var g_controllerFactory = function () {
    var e = {
        FLASH: 1
        , HTML5: 2
      }
      , t = e.HTML5
      , r = null
      , n = !1
      , a = !1
      , o = new SpeechStream.TouchScreenManager;
    o.initialise();
    var i;
    try {
      g_bIE || "hmh" == g_strServerVersion ? (i = null, n = !1) : (i = new Audio, i.type = "audio/mpeg", i.src = "", i.canPlayType && (n = "no" != i.canPlayType("audio/mpeg") && "" != i.canPlayType("audio/mpeg")))
    } catch (l) {
      i = null, n = !1
    }
    var s = {
        enableTouchEvents: function (e) {
          o.clickAndSpeak(e)
        }
        , getConnector: function () {
          if (null != r) return r;
          switch (t) {
          case e.HTML5:
            n ? r = new SpeechStream.HTML5Controller : a && (r = rw_getWebToSpeech());
            break;
          default:
            a ? r = rw_getWebToSpeech() : n && (r = new SpeechStream.HTML5Controller)
          }
          return r
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
          return !!n || s.hasFlashSupport()
        }
        , doesSupportHtml5: function () {
          return n
        }
        , forceFlash: function () {
          n = !1, t = e.FLASH, r = null
        }
      }
      , c = navigator.userAgent;
    return c.indexOf("Android") > -1 && s.forceFlash(), s
  }()
  , g_serverAccess = g_controllerFactory.getConnector()
  , START_BUBBLE = "startbubble"
  , STOP_BUBBLE = "stopbubble"
  , eba_bubble_adjust_x, eba_bubble_adjust_y, g_storedHoverTarget = null
  , g_nLastBubbleX, g_nLastBubbleY, g_nBubbleBaseX, g_nBubbleBaseY, g_bubbleDiv = null
  , g_nCalFunction = 0
  , DISPLAYMAXLENGTH = 16
  , g_fCalMem = 0
  , g_strCalDisNum = "0"
  , g_fCalNum = 0;
"function" == typeof $rw_userParameters && (g_bDynamicLoading = !0, $rw_userParameters(), $rw_barInit(), rw_onload(), eba_no_flash || $rw_checkIfWewNeedToInstallFlash(), rw_addInstalled());
