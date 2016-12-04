function $rw_event_screenshotreader() {
  var e = textHelp.webreader.UserSettingsSingleton.getInst()
    .getUserSettings()
    , t = e.language.services;
  window.postMessage({
    method: "thCheckExtension"
    , type: "1757FROM_PAGERW4G"
    , payload: {
      ChromeExtId: texthelp.RW4GC.texthelpScreenShotReaderID
      , Lang: t
      , defaultsettings: e.speechoptions
    }
  }, "*")
}

function getSelectionCoords(e) {
  e = e || window;
  var t, r, n, o = e.document
    , i = o.selection
    , a = 0
    , s = 0;
  if (i) "Control" != i.type && (t = i.createRange(), t.collapse(!0), a = t.boundingLeft, s = t.boundingTop);
  else if (e.getSelection && (i = e.getSelection(), i.rangeCount && (t = i.getRangeAt(0)
      .cloneRange(), t.getClientRects && (t.collapse(!0), r = t.getClientRects(), r.length > 0 && (n = t.getClientRects()[0]), a = n.left, s = n.top), 0 == a && 0 == s))) {
    var l = o.createElement("span");
    if (l.getClientRects) {
      l.appendChild(o.createTextNode("​")), t.insertNode(l), n = l.getClientRects()[0], a = n.left, s = n.top;
      var c = l.parentNode;
      c.removeChild(l), c.normalize()
    }
  }
  var d = {
    top: s
    , left: a
  };
  return d
}

function GetOffset(e, t) {
  e && (t.x += e.offsetLeft, t.y += e.offsetTop, GetOffset(e.offsetParent, t))
}

function PositionPopup(e) {
  var t = e
    , r = getComputedStyle(t)
    .getPropertyValue("font-size")
    , n = document.getElementById("rwGooglePredictionResponseDetails");
  if (n.style.position = "absolute", "TEXTAREA" == e.nodeName || "INPUT" == e.nodeName && "text" == e.type.toLowerCase()) {
    var o = getCaretCoordinates(t, t.selectionEnd)
      , i = {
        x: 0
        , y: 0
      };
    GetOffset(t, i), n.style.top = i.y - t.scrollTop + o.top + parseInt(r) + 15 + "px", n.style.left = i.x - t.scrollLeft + o.left - 18 + "px", console.log("Element Final Position : " + n.style.top + " / " + n.style.left)
  } else {
    var o = getSelectionCoords();
    n.style.top = o.top + parseInt(r) + 10 + 35 + "px", n.style.left = o.left + "px"
  }
}

function getLineNumber(e) {
  return e.value.substr(0, e.selectionStart)
    .split("\n")
    .length
}

function insertTextToCurrentControl(e) {
  void 0 != e && (parseTexter = new rwGoogleTextParse, parseTexter.CurrentWord = e, parseTexter.InsertText(currentContextControlID, parseTexter.CurrentWord), newCaretPosition = parseTexter.CursorPosition)
}

function GetScreenCordinates(e) {
  var t = {};
  for (t.x = e.offsetLeft, t.y = e.offsetTop; e.offsetParent && (t.x = t.x + e.offsetParent.offsetLeft, t.y = t.y + e.offsetParent.offsetTop, e != document.getElementsByTagName("body")[0]);) e = e.offsetParent;
  return t
}

function rwGoogleKeyUpListener(e) {
  if (e.preventDefault(), rwGooglecoreUI = new rwGoogleUIHandling, e.ctrlKey && e.shiftKey) switch (e.keyCode) {
  case 49:
    insertTextToCurrentControl(currentWordCollection[0]);
    break;
  case 50:
    insertTextToCurrentControl(currentWordCollection[1]);
    break;
  case 51:
    insertTextToCurrentControl(currentWordCollection[2]);
    break;
  case 52:
    insertTextToCurrentControl(currentWordCollection[3]);
    break;
  case 53:
    insertTextToCurrentControl(currentWordCollection[4]);
    break;
  case 54:
    insertTextToCurrentControl(currentWordCollection[5]);
    break;
  case 55:
    insertTextToCurrentControl(currentWordCollection[6]);
    break;
  case 56:
    insertTextToCurrentControl(currentWordCollection[7]);
    break;
  case 57:
    insertTextToCurrentControl(currentWordCollection[8]);
  case 48:
    insertTextToCurrentControl(currentWordCollection[9])
  }
  if (9 != e.keyCode && 13 != e.skeyCode) {
    newRequest = !0;
    var t = void 0;
    t = null != e.srcElement ? e.srcElement : currentContextControlID;
    var r = t.getBoundingClientRect()
      , n = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
      , o = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft;
    callerTopOffset = r.top + n + 35, callerLeftOffset = r.left + o;
    var i = GetScreenCordinates(t);
    if (callerTopOffset = i.y, callerLeftOffset = i.x, "rwGooglePredictionResponseDetails" != t.id) switch (t.tagName) {
    case "SPANx":
    case "DIVx":
      null != e.srcElement && (currentContextControlID = e.srcElement), currentPosition = 0, callerLeftOffset += currentPosition;
      var a = 0
        , s = "";
      parseTexter = new rwGoogleTextParse;
      document.getElementById(currentContextControlID.id);
      PositionPopup(currentContextControlID), alert(prediction_PredictAhead), rwGooglecoreUI.CallPrediction(s, a, currentContextControlID);
      break;
    case "INPUT":
    case "TEXTAREA":
      if (null != e.srcElement && (currentContextControlID = e.srcElement), !rwGooglecoreUI.ignoreControlType(currentContextControlID.type)) {
        var a = getLineNumber(currentContextControlID);
        currentPosition = rwGooglecoreUI.doGetCaretPositionInputField(currentContextControlID), callerLeftOffset += currentPosition + 10, callerTopOffset += 5 * a;
        var s = currentContextControlID.value;
        PositionPopup(currentContextControlID), rwGooglecoreUI.CallPrediction(s, a, currentContextControlID)
      }
    }
  } else document.getElementById("rwGooglePredictionResponseDetails")
    .style.display = "none", document.getElementById("rwDict")
    .style.display = "none";
  rwGooglecoreUI = void 0
}

function sleep(e) {
  for (var t = (new Date)
      .getTime(); t + e >= (new Date)
    .getTime(););
}

function rwHandlePredictionClickEvent(e) {
  e.preventDefault();
  var t = currentContextControlID;
  if (newRequest && (rwGooglecoreUI = new rwGoogleUIHandling, e.target && "DIV" == e.target.nodeName))
    if (e.target && "rwlist-group-item-dict rwclearfix" == e.target.className);
    else if ("rwlist-group-item" == e.target.className) {
    switch (g_lastTarget = void 0, t.tagName) {
    case "DIV":
    case "SPAN":
      parseTexter = new rwGoogleTextParse;
      var r = 0;
      parseTexter.CurrentWord = e.target.innerText.substr(3, e.target.innerText.length), parseTexter.InsertText(currentContextControlID, parseTexter.CurrentWord), newCaretPosition = parseTexter.CursorPosition;
      break;
    case "INPUT":
    case "TEXTAREA":
      var n = t.value;
      parseTexter = new rwGoogleTextParse;
      var r = getLineNumber(currentContextControlID);
      parseTexter.rootText = n, parseTexter.parseText(currentPosition, r, currentContextControlID), parseTexter.CurrentWord = e.target.innerText.substr(3, e.target.innerText.length), parseTexter.InsertText(currentContextControlID, parseTexter.CurrentWord), newCaretPosition = parseTexter.CursorPosition
    }
    newRequest = !1, e.stopPropagation();
    var o = new KeyboardEvent("keyup", {
      view: window
      , bubbles: !1
      , cancelable: !0
    });
    o.srcElement = currentContextControlID, rwGoogleKeyUpListener(o)
  }
}

function rwHoverSpeechEvent(e) {
  var t = ie ? e.srcElement : e.target;
  e.target && "DIV" == e.target.nodeName && "rwlist-group-item" == e.target.className && (timeoutObj = t, timeoutId = setTimeout("rw_speak('" + e.target.innerText.substr(3, e.target.innerText.length) + "')", 1e3))
}

function rwHoverStopSpeechEvent(e) {
  ie ? e.srcElement : e.target;
  e.target && "DIV" == e.target.nodeName && "rwlist-group-item" == e.target.className && timeoutId && clearTimeout(timeoutId)
}

function rwClickPrediction(e) {
  document.getElementById("rwGooglePredictionResponseDetails")
    .style.display = "none", document.getElementById("rwDict")
    .style.display = "none"
}

function GetSelection(e) {
  var t, r = e;
  if (void 0 != document.selection) {
    r.focus();
    var n = document.selection.createRange();
    t = n.text
  } else if (void 0 != r.selectionStart) {
    var o = r.selectionStart
      , i = r.selectionEnd;
    t = r.value.substring(o, i)
  }
  return t
}

function rwClickControlHandler(e) {
  try {
    var t = GetSelection(e.srcElement);
    void 0 != t && 0 == t.length && rwGoogleKeyUpListener(e)
  } catch (r) {
    thLogE(r)
  }
}

function rwPredictionState(e) {
  switch (e) {
  case "Off":
    try {
      this.GlobalPredictionState && (GlobalPredictionState = !1, document.getElementById("PredictionAll")
        .className = "", document.removeEventListener("keyup", rwGoogleKeyUpListener, !1), document.removeEventListener("click", rwClickControlHandler, !1), document.getElementById("rwGooglePredictionResponseDetails")
        .removeEventListener("click", rwHandlePredictionClickEvent, !1), document.getElementById("rwGooglePredictionResponseDetails")
        .removeEventListener("mouseover", rwHoverSpeechEvent, !1), document.removeEventListener("click", rwClickPrediction, !1), document.getElementById("rwGooglePredictionResponseDetails")
        .style.display = "none", document.getElementById("rwDict")
        .style.display = "none")
    } catch (t) {
      thLogE(t)
    }
    break;
  case "On":
    try {
      if (this.GlobalPredictionState) {
        document.getElementById("PredictionAll")
          .className = "enabled", document.addEventListener("click", rwClickControlHandler, !1), document.addEventListener("keyup", rwGoogleKeyUpListener, !1), this.GlobalPredictionState = !0;
        document.getElementById("rwGooglePredictionResponseDetails")
          .addEventListener("mouseover", rwHoverSpeechEvent, !1), document.getElementById("rwGooglePredictionResponseDetails")
          .addEventListener("mouseout", rwHoverStopSpeechEvent, !1), document.getElementById("rwGooglePredictionResponseDetails")
          .addEventListener("click", rwHandlePredictionClickEvent, !1), document.addEventListener("click", rwClickPrediction, !1)
      }
    } catch (t) {
      thLogE(t)
    }
  }
}

function rwth_hasClass(e, t) {
  return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
}

function rwth_removeClass(e, t) {
  if (rwth_hasClass(e, t)) {
    var r = new RegExp("(\\s|^)" + t + "(\\s|$)");
    e.className = e.className.replace(r, " ")
  }
}

function $rw_event_PredictionAll() {
  try {
    if (this.GlobalPredictionState) {
      GlobalPredictionState = !1;
      var e = document.getElementsByClassName("th-prediction-image")[0];
      if (null == e) return;
      rwth_removeClass(e, "enabled"), document.removeEventListener("keyup", rwGoogleKeyUpListener, !1), document.removeEventListener("click", rwClickControlHandler, !1), document.getElementById("rwGooglePredictionResponseDetails")
        .removeEventListener("click", rwHandlePredictionClickEvent, !1), document.getElementById("rwGooglePredictionResponseDetails")
        .removeEventListener("mouseover", rwHoverSpeechEvent, !1), document.removeEventListener("click", rwClickPrediction, !1), document.getElementById("rwGooglePredictionResponseDetails")
        .style.display = "none", document.getElementById("rwDict")
        .style.display = "none"
    } else {
      var e = document.getElementsByClassName("th-prediction-image")[0];
      if (null == e) return;
      rwth_hasClass(e, "enabled") || (e.className = e.className + " enabled"), document.addEventListener("click", rwClickControlHandler, !1), document.addEventListener("keyup", rwGoogleKeyUpListener, !1), this.GlobalPredictionState = !0;
      document.getElementById("rwGooglePredictionResponseDetails")
        .addEventListener("mouseover", rwHoverSpeechEvent, !1), document.getElementById("rwGooglePredictionResponseDetails")
        .addEventListener("mouseout", rwHoverStopSpeechEvent, !1), document.getElementById("rwGooglePredictionResponseDetails")
        .addEventListener("click", rwHandlePredictionClickEvent, !1), document.addEventListener("click", rwClickPrediction, !1)
    }
  } catch (t) {
    thLogE(t)
  }
}

function rw_speak(e) {
  $rw_stopSpeech();
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
    if (rw_isSpeechBusy()) return g_aTargetQueue.push("rw_speakHoverTarget"), g_aTargetQueue.push(e), void(0 == g_nTargetQueueTimerId && (g_nTargetQueueTimerId = setTimeout(rw_targetQueueTimer, 500)));
    g_lTargetQueueTime = (new Date)
      .getTime(), g_lastTarget = null;
    var t = new SpeechStream.SpeechRequest;
    t.setString(e.toString(), SpeechStream.SpeechRequestBookmarks.NONE);
    var r = t.getText()
      , n = g_controllerFactory.getConnector();
    null == n || g_bDisableSpeech || (SpeechStream.cacheMode.useBackupForLiveRequests() ? n.simpleSpeechFromBackup(r, !g_bLocalPronunciationLoaded) : n.simpleSpeech(r, !g_bLocalPronunciationLoaded))
  } catch (o) {
    thLog("rw_speakHoverTarget error:" + o.message)
  }
}

function rw_PredictionDictionaryRequest(e) {
  try {
    var t = e;
    if (g_bIsScholastic) return void("function" == typeof displayDictionaryTerm && displayDictionaryTerm(t));
    if (t.length > 0) {
      var r = g_controllerFactory.getConnector();
      if (null != r)
        if ("undefined" != typeof eba_custom_dictionary_url && null != eba_custom_dictionary_url && eba_custom_dictionary_url.length > 0) r.getCustomDictionaryPage(t, eba_custom_dictionary_url);
        else if ("undefined" != typeof eba_alt_dictionary_url && null != eba_alt_dictionary_url && eba_alt_dictionary_url.length > 0) {
        var n = eba_alt_dictionary_url + t;
        rw_newWindow(n, "popup", 700, 500, 1, 1, 0, 0, 0, 0, 0)
      } else rwPredictionGetDictionaryPage(t)
    } else if ("undefined" != typeof eba_alt_dictionary_url && null != eba_alt_dictionary_url && eba_alt_dictionary_url.length > 0) alert(textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("selection_no_word"));
    else {
      var o = 'result=<div class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("selection_no_word") + "</div>";
      rw_PredictionDictionaryReply(o)
    }
  } catch (i) {
    thLogE(i)
  }
}

function rw_showPredictionDictionaryDiv(e, t) {
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
  var o = rw_getDomObject(n);
  if (null != o) {
    if (r = o.style, null == r) return;
    e ? (resetZIndex(), r.visibility = "visible", r.display = "block", r.zIndex = 99999) : (r.visibility = "hidden", g_bFireFox && (r.display = "none"), rw_setPopupText(t, ""))
  }
}

function $rwPrediction_dictionaryReply(e) {
  try {
    var t = {
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
      , r = e.indexOf("result=");
    if (r > -1) {
      var n = e.substring(7);
      n = rw_replaceSearchPlaceholder(n), rw_setPopupText(POPUP_DICTIONARY, n), rw_showPredictionDictionaryDiv(!0, POPUP_DICTIONARY)
    } else if (e.length > 0) {
      var o = JSON.parse(e);
      if (void 0 !== o.service && "DictionaryHTML_1" == o.service) return void $rw_dictionaryReplyHTML(o);
      if (o.inflections.length < 1) {
        var i = '<div id="rwDictPanel" class="rwDictPanel">';
        return i += '<div class="rwDictWordHeader">!!!' + o.word + "</div>", i += '<div class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + textHelp.webreader.LocaleSingleton.getInst()
          .getLocaleString("dialog_definition_notfound"), rw_setPopupText(POPUP_DICTIONARY, i), void rw_showPredictionDictionaryDiv(!0, POPUP_DICTIONARY)
      }
      var i = '<div class="arrow-left"></div><div class="rwDictPanel">';
      i += '<div class="rwDictWordHeader">' + o.word + "</div>", i += '<table class="rwDictDefin"><tbody>';
      for (var a = 0, s = 5, l = 0, c = o.inflections, d = 0; d < c.length; d++)
        for (var u = c[d].definitions, g = 0; g < u.length; g++) {
          l++, i += "<tr><td>";
          var p = "";
          u[g].type.length > 0 && "11" !== u[g].type && (p = "<b>" + t[u[g].type] + ": </b>"), i += '<span id="def' + l + '" >' + p + "<span>" + u[g].definition + "</span></span>", i += "</td></tr>", a++, a >= s && (g = u.length, d = c.length)
        }
      i += "</tbody></table></div>";
      var m = document.getElementById("rwGooglePredictionDictionaryDetails");
      m.innerHTML = i, m.style.display = "block"
    }
  } catch (v) {
    thLogE(v)
  }
}

function PredCompleteDict(e) {
  $rwPrediction_dictionaryReply(null == e || 0 == e.length ? "Error loading content." : e)
}

function rwGoogleUIHandling() {
  this.endsWith = function (e, t) {
    return e.indexOf(t, e.length - t.length) !== -1
  }, this.ignoreControlType = function (e) {
    switch (e.toLowerCase()) {
    case "password":
      return !0;
    case "email":
      return !0;
    case "tel":
      return !0;
    case "range":
      return !0;
    case "url":
      return !0;
    case "number":
      return !0;
    case "date":
      return !0;
    case "month":
      return !0;
    case "week":
      return !0;
    case "time":
      return !0;
    case "datetime":
      return !0;
    case "color":
      return !0;
    default:
      return !1
    }
  }, this.LastCharSpace = function (e) {
    var t = e.trim();
    return t.length != e.length
  }, this.CallSpeech = function (e) {
    var t = "en_US"
      , r = (textHelp.webreader.ConfigurationSingleton.getInst()
        .getConfiguration(), textHelp.webreader.UserSettingsSingleton.getInst()
        .getUserSettings())
      , n = r.language.services;
    t = n, window.postMessage({
      method: "thPrediction"
      , type: "1757FROM_PAGERW4G"
      , payload: {
        addspace: ""
        , context: [queryData, "10", t]
        , seq: "8"
        , parentId: "TESTLOCATION"
        , positionId: "POSITION"
      }
    }, "*"), window.addEventListener("message", this.onMessage)
  }, this.CallPrediction = function (e, t, r) {
    var n = "en_US"
      , o = (textHelp.webreader.ConfigurationSingleton.getInst()
        .getConfiguration(), textHelp.webreader.UserSettingsSingleton.getInst()
        .getUserSettings())
      , i = o.language.services
      , a = o.prediction.results;
    n = i, sel = void 0, currentPosition = this.getCaretCharacterOffsetWithin(r), parseTexter = new rwGoogleTextParse, parseTexter.CurrentPosition = currentPosition, parseTexter.rootText = e, parseTexter.parseText(currentPosition, t, r);
    var s = "";
    if (0 == prediction_PredictAhead)
      if (" " != parseTexter.CurrentWord) s = encodeURIComponent(parseTexter.Lefttext), window.postMessage({
        method: "thPrediction"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          addspace: ""
          , context: [s, a, n]
          , seq: "8"
          , parentId: "TESTLOCATION"
          , positionId: "POSITION"
        }
      }, "*"), window.addEventListener("message", this.onMessage);
      else {
        var l = document.getElementById("rwGooglePredictionResponseDetails");
        l.style.display = "none", l.innerHTML = ""
      }
    else s = encodeURIComponent(parseTexter.Lefttext), window.postMessage({
      method: "thPrediction"
      , type: "1757FROM_PAGERW4G"
      , payload: {
        addspace: ""
        , context: [s, a, n]
        , seq: "8"
        , parentId: "TESTLOCATION"
        , positionId: "POSITION"
      }
    }, "*"), window.addEventListener("message", this.onMessage)
  }, this.onMessage = function () {
    if (void 0 != event.data && void 0 != event.data && event.source == window) {
      var e = "<div class='arrow-up'></div><div id='predictions' class='rwlist-group'>";
      currentWordCollection = [];
      var t = document.getElementById("rwGooglePredictionResponseDetails");
      try {
        for (var r = event.data.payload.words.length, n = 0; n < r; n++) currentWordCollection.push(event.data.payload.words[n]), e = 9 == n ? e + "<div class='rwlist-group-items-outer rwclearfix'><div class='rwlist-group-item'>0. " + event.data.payload.words[n] + "</div><div class='rwlist-group-item-dict rwclearfix'>&nbsp;</div></div>" : e + "<div class='rwlist-group-items-outer rwclearfix'><div class='rwlist-group-item'>" + (n + 1) + ". " + event.data.payload.words[n] + "</div><div class='rwlist-group-item-dict rwclearfix' data='" + event.data.payload.words[n] + "'>&nbsp;</div></div>";
        e = e + "</div><input type='hidden' id='rwPredictionPosition' value='" + currentPosition + "'>", t.style.display = "block", t.innerHTML = e
      } catch (o) {}
    }
  }, this.getCaretCharacterOffsetWithin = function (e) {
    var t = 0;
    if ("undefined" != typeof window.getSelection) {
      var r = window.getSelection()
        .getRangeAt(0)
        , n = r.cloneRange();
      n.selectNodeContents(e), n.setEnd(r.endContainer, r.endOffset), t = n.toString()
        .length
    } else if ("undefined" != typeof document.selection && "Control" != document.selection.type) {
      var o = document.selection.createRange()
        , i = document.body.createTextRange();
      i.moveToElementText(e), i.setEndPoint("EndToEnd", o), t = i.text.length
    }
    return t
  }, this.doGetCaretPositionInputField = function (e) {
    var t = 0;
    if (document.selection) {
      e.focus();
      var r = document.selection.createRange();
      r.moveStart("character", -e.value.length), t = r.text.length
    } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
    return t
  }, this.setCaretPosition = function (e, t) {
    var r = e;
    if (null != r)
      if (r.createTextRange) {
        var n = r.createTextRange();
        n.move("character", t), n.select()
      } else r.selectionStart ? (r.focus(), r.setSelectionRange(t, t)) : r.focus()
  }
}
var GlobalPredictionState = !1
  , ie = document.all
  , timeoutId, timeoutObj, properties = ["boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing"]
  , isFirefox = !(null == window.mozInnerScreenX)
  , mirrorDivDisplayCheckbox = document.getElementById("mirrorDivDisplay")
  , mirrorDiv, computed, style;
getCaretCoordinates = function (e, t) {
  mirrorDiv = document.getElementById(e.nodeName + "--mirror-div"), mirrorDiv || (mirrorDiv = document.createElement("div"), mirrorDiv.id = e.nodeName + "--mirror-div", document.body.appendChild(mirrorDiv)), style = mirrorDiv.style, computed = getComputedStyle(e), style.whiteSpace = "pre-wrap", "INPUT" !== e.nodeName && (style.wordWrap = "break-word"), style.position = "absolute", style.top = e.offsetTop + parseInt(computed.borderTopWidth) + "px", style.left = "400px", style.visibility = "hidden", properties.forEach(function (e) {
    style[e] = computed[e]
  }), isFirefox ? (style.width = parseInt(computed.width) - 2 + "px", e.scrollHeight > parseInt(computed.height) && (style.overflowY = "scroll")) : style.overflow = "hidden", mirrorDiv.textContent = e.value.substring(0, t), "INPUT" === e.nodeName && (mirrorDiv.textContent = mirrorDiv.textContent.replace(/\s/g, " "));
  var r = document.createElement("span");
  r.textContent = e.value.substring(t) || ".", r.style.backgroundColor = "lightgrey", mirrorDiv.appendChild(r);
  var n = {
    top: r.offsetTop + parseInt(computed.borderTopWidth)
    , left: r.offsetLeft + parseInt(computed.borderLeftWidth)
  };
  return n
};
var currentWordCollection = [];
this.currentTextPosition = 0, rwPredictionGetDictionaryPage = function (e) {
  var t = textHelp.webreader.ConfigurationSingleton.getInst()
    .getConfiguration()
    , r = textHelp.webreader.UserSettingsSingleton.getInst()
    .getUserSettings()
    , n = t.serversettings.dictionaryserver
    , o = t.serversettings.user
    , i = r.language.services;
  "fr" != i && "pt" != i || (n += "HTML"), n += "?json=";
  var a = '{"u":"' + o + '", "e":"WYn4Wx7Vf2", "l":"' + i.replace("-", "_") + '", "w":"' + encodeURIComponent(e) + '"}'
    , s = new SpeechStream.AjaxRequest;
  s.doPost(n += a, "", this, "PredCompleteDict", !1)
};
