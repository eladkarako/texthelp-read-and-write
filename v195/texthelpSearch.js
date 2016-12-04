function $rw_barSearchInit() {
  var e = SSDAT.paths.strFileLoc;
  if (g_bUseBar || "function" != typeof displayDictionaryTerm) {
    g_bSWA ? SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwsearchSWA.css" type="text/css" rel="stylesheet" />', !1) : g_bChromeExtension ? SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwsearchExt.css" type="text/css" rel="stylesheet" />', !1) : g_bIE ? SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwsearch.css" type="text/css" rel="stylesheet" />', !1) : SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, '<link href="' + e + 'rwsearchSFF.css" type="text/css" rel="stylesheet" />', !1);
    var t = "";
    g_bSWA || g_bChromeExtension ? (t += '<div id="rwDisplay" style="visibility:hidden" >', t += '<div class="rwPopupOutline">', t += '<div id="rwDragMeDisplay" class="rwToolbarCaptionDisplay" >Display</div>', t += '    <div id="rwCloseMeDisplay" class="rwDisplayCaptionClose" onmouseover="$rw_divOver(0);" onmouseout="$rw_divOut(0);" onmouseup="$rw_divPress(0);"></div>', t += '<span id="rwpopupdisplay"></span>', t += "</div>", t += "</div>") : (t += '<div id="rwDisplay" style="visibility:hidden" >', t += '<div class="rwPopupOutline">', t += '<div id="rwDragMeDisplay" class="rwToolbarCaptionDisplay" >', t += '<img name="displayImg" align="right" src="' + e + 'rwimgs/thex.bmp" onmouseover="$rw_divOver(0);" onmouseout="$rw_divOut(0);" onmouseup="$rw_divPress(0);" />', t += "</div>", t += g_bMcGrawHill ? '<div class="rwPopupContent500">' : '<div class="rwPopupContent">', t += '<span id="rwpopupdisplay"></span>', t += "</div>", t += "</div>", t += "</div>"), g_bSWA || g_bChromeExtension ? (t += ' <div id="rwTrans" style="visibility:hidden" >', t += ' <div class="rwPopupOutline">', t += g_nLanguage == ENG_UK || g_nLanguage == ENG_US ? '  <div id="rwDragMeTrans" class="rwToolbarCaptionTrans"  data-speechstream-translator="speechstream_translator">Translator</div>' : '  <div id="rwDragMeTrans" class="rwToolbarSpanCaptionTrans" data-speechstream-translator="speechstream_translator">Translator</div>', t += '    <div id="rwCloseMeTrans" class="rwTransCaptionClose" onmouseover="$rw_divOver(1);" onmouseout="$rw_divOut(1);" onmouseup="$rw_divPress(1);"></div>', t += '<span id="rwpopuptrans"></span>', t += "</div>", t += "</div>") : (t += ' <div id="rwTrans" style="visibility:hidden">', t += ' <div class="rwPopupOutline">', t += g_bMcGrawHill ? '  <div id="rwDragMeTrans" class="rwToolbar500CaptionTrans" >' : g_nLanguage == ENG_UK || g_nLanguage == ENG_US ? '  <div id="rwDragMeTrans" class="rwToolbarCaptionTrans" >' : '  <div id="rwDragMeTrans" class="rwToolbarSpanCaptionTrans" >', t += '    <img name="transImg" align="right" src="' + e + 'rwimgs/thex.bmp" onmouseover="$rw_divOver(1);" onmouseout="$rw_divOut(1);" onmouseup="$rw_divPress(1);" /></div>', t += g_bMcGrawHill ? '<div class="rwPopupContent500">' : '<div class="rwPopupContent">', t += '<span id="rwpopuptrans"></span></div>', t += "</div></div>"), g_bSWA || g_bChromeExtension ? (t += ' <div id="rwDict" style="visibility:hidden">', t += ' <div class="rwPopupOutline">', t += g_nLanguage == ENG_UK || g_nLanguage == ENG_US ? '  <div id="rwDragMeDict" class="rwToolbarCaptionDict" data-speechstream-dictionary="speechstream_dictionary">Dictionary</div>' : '  <div id="rwDragMeDict" class="rwToolbarSpanCaptionDict" data-speechstream-dictionary="speechstream_dictionary">Dictionary</div>', t += '    <div id="rwCloseMeDict" class="rwDictCaptionClose" onmouseover="$rw_divOver(3);" onmouseout="$rw_divOut(3);" onmouseup="$rw_divPress(3);"></div>', t += '<span id="rwpopupdict"></span>', t += "</div>", t += "</div>") : (t += '<div id="rwDict" style="visibility:hidden" data-speechstream-dictionary="speechstream_dictionary">', t += ' <div class="rwPopupOutline">', t += g_bMcGrawHill ? '  <div id="rwDragMeDict" class="rwToolbar500CaptionDict" >' : g_nLanguage == ENG_UK || g_nLanguage == ENG_US ? '  <div id="rwDragMeDict" class="rwToolbarCaptionDict" >' : '  <div id="rwDragMeDict" class="rwToolbarSpanCaptionDict" >', t += '    <img name="dictImg" align="right" src="' + e + 'rwimgs/thex.bmp" onmouseover="$rw_divOver(3);" onmouseout="$rw_divOut(3);" onmouseup="$rw_divPress(3);" /></div>', t += g_bMcGrawHill ? '<div class="rwPopupContent500">' : '<div class="rwPopupContent">', t += '<span id="rwpopupdict"></span></div>', t += "</div></div>"), g_bSWA || g_bChromeExtension ? (t += ' <div id="rwPictureDictionary" style="visibility:hidden" >', t += ' <div class="rwPopupOutline">', t += g_nLanguage == ENG_UK || g_nLanguage == ENG_US ? '  <div id="rwDragMePictureDictionary" class="rwToolbarCaptionPictureDictionary" data-speechstream-picture-dictionary="speechstream_picture_dictionary_heading" >Picture Dictionary</div>' : '  <div id="rwDragMePictureDictionary" class="rwToolbarSpanCaptionPictureDictionary" data-speechstream-picture-dictionary="speechstream_picture_dictionary_heading" >Picture Dictionary</div>', t += '    <div id="rwCloseMePictureDictionary" class="rwPictureDictionaryCaptionClose" onmouseover="$rw_divOver(11);" onmouseout="$rw_divOut(11);" onmouseup="$rw_divPress(11);"></div>', t += '<span id="rwpopuppicturedictionary"></span>', t += "</div>", t += "</div>") : (t += ' <div id="rwPictureDictionary" style="visibility:hidden">', t += ' <div class="rwPictureDictionaryOutline">', t += g_bMcGrawHill ? '  <div id="rwDragMePictureDictionary" class="rwToolbar500CaptionPictureDictionary" data-speechstream-picture-dictionary="speechstream_picture_dictionary_heading">' : g_nLanguage == ENG_UK || g_nLanguage == ENG_US ? '  <div id="rwDragMePictureDictionary" class="rwToolbarCaptionPictureDictionary" data-speechstream-picture-dictionary="speechstream_picture_dictionary_heading">' : '  <div id="rwDragMePictureDictionary" class="rwToolbarSpanCaptionPictureDictionary" data-speechstream-picture-dictionary="speechstream_picture_dictionary_heading">', t += '    <img name="pictureDictionaryImg" align="right" src="' + e + 'rwimgs/thex.bmp" onmouseover="$rw_divOver(11);" onmouseout="$rw_divOut(11);" onmouseup="$rw_divPress(11);" /></div>', t += g_bMcGrawHill ? '<div class="rwPictureDictionaryContent500">' : '<div class="rwPictureDictionaryContent">', t += '<span id="rwpopuppicturedictionary"></span></div>', t += "</div></div>"), SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, t, !1);
    var r = document.getElementById("rwTrans");
    null != r && (addEventChecked(r, "dragstart", rw_dragEventIpad), addEventChecked(r, "touchend", rw_mouseupEventIpad), addEventChecked(r, "touchmove", rw_mousemoveEventIpad), addEventChecked(r, "touchstart", rw_mousedownEventIpad));
    var r = document.getElementById("rwDict");
    null != r && (addEventChecked(r, "dragstart", rw_dragEventIpad), addEventChecked(r, "touchend", rw_mouseupEventIpad), addEventChecked(r, "touchmove", rw_mousemoveEventIpad), addEventChecked(r, "touchstart", rw_mousedownEventIpad));
    var r = document.getElementById("rwPictureDictionary");
    null != r && (addEventChecked(r, "dragstart", rw_dragEventIpad), addEventChecked(r, "touchend", rw_mouseupEventIpad), addEventChecked(r, "touchmove", rw_mousemoveEventIpad), addEventChecked(r, "touchstart", rw_mousedownEventIpad)), g_bSearchLoaded = !0, "function" == typeof $rw_toolbarSearchLoadedCallback && $rw_toolbarSearchLoadedCallback()
  }
}

function $rw_event_trans() {
  try {
    stopTexthelpScreenshotReading();
    try {
      var e = rw_getElementHoldingSelection();
      if (null != e) {
        var t = rw_getLangAttr(e);
        if (SpeechStream.translatorData.strTarget === SpeechStream.translatorData.SPANISH && ("es" === t || "es-es" === t || "es-us" === t)) return
      }
    } catch (r) {}
    var a;
    a = rw_getSelectionNonParsed(), SpeechStream.translatorData.getType() == SpeechStream.translatorData.PARAGRAPH_TYPE ? rw_paragraphTranslate(a) : rw_singleWordTranslate(a)
  } catch (r) {
    thLogE(r)
  }
}

function rw_paragraphTranslate(e) {
  if (e.length > 0) {
    var t = g_controllerFactory.getConnector();
    null != t && t.getTranslationParagraph(e, SpeechStream.translatorData.strSource, SpeechStream.translatorData.strTarget)
  } else {
    var r = '<style type="text/css">div.rwTranWordHeader{font-size:150%;font-weight: bold;padding-bottom: 3px;padding-left: 5px;border-bottom: 1px solid #666666;margin-bottom: 10px;}span.rwMeaningNum{padding-left: 10px;padding-right: 10px;font-weight: bold;}span.rwMeaning{padding-right:10px}</style><div class="rwTranWordHeader">No valid text selected</div>';
    $rw_transReply(r)
  }
}

function rw_singleWordTranslate(e) {
  if (e.length > 0) {
    var t = g_controllerFactory.getConnector();
    null != t && t.getTranslationGenericPage(e, SpeechStream.translatorData.strSource, SpeechStream.translatorData.strTarget)
  } else {
    var r = "";
    $rw_transReply(r)
  }
}

function $rw_translate(e, t, r) {
  try {
    if ("undefined" == typeof r && (r = rw_getSelectionNonParsed()), null != r && r.length > 0) {
      var a = g_controllerFactory.getConnector();
      null != a && a.getTranslationGenericPage(r, e, t)
    } else {
      var i = '<style type="text/css">div.rwTranWordHeader{font-size:150%;font-weight: bold;padding-bottom: 3px;padding-left: 5px;border-bottom: 1px solid #666666;margin-bottom: 10px;}span.rwMeaningNum{padding-left: 10px;padding-right: 10px;font-weight: bold;}span.rwMeaning{padding-right:10px}</style><div class="rwTranWordHeader">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("selection_no_word") + "</div>";
      $rw_transReply(i)
    }
  } catch (n) {
    thLogE(n)
  }
}

function $rw_transReply(e) {
  try {
    var t = "";
    if ("string" == typeof e && e.length > 0) {
      var r = JSON.parse(e);
      if (t = '<div class="rwTransPanel">', t += '<div class="rwTranWordHeader"  >' + r.text + "</div>", "ms" !== g_thToLang && "false" == r.confirmed || "0" !== r.status) return t += '<div class="th-nomatch"  data-trans-translatorDlg="dialog_definition_notfound">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("dialog_definition_notfound"), rw_setPopupText(POPUP_TRANSLATOR, t), rw_speechTranslateCompleteCallback(), void rw_showDiv(!0, POPUP_TRANSLATOR);
      t += '<table class="rwTransMean"><tbody>';
      for (var a = r.translations, i = 0; i < a.length; i++) t += '<tr><td><span lang="' + g_thToLang + '" class="rwMeaning" id="rwMeaning' + i + '">' + r.translations[i].word + "</span></td></tr>";
      t += "</tbody></table></div>"
    } else t = '<div class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("selection_no_word") + "</div>";
    rw_setPopupText(POPUP_TRANSLATOR, t), rw_speechTranslateCompleteCallback(), rw_showDiv(!0, POPUP_TRANSLATOR)
  } catch (n) {
    thLogE(n)
  }
}

function $rw_event_ffinder() {
  try {
    stopTexthelpScreenshotReading();
    var e;
    e = rw_getSelectionNonParsed(), SpeechStream.tools.factfinder.lookup(e)
  } catch (t) {
    thLogE(t)
  }
}

function $rw_event_dict() {
  $rw_event_dictionary()
}

function $rw_event_dictionary() {
  try {
    stopTexthelpScreenshotReading();
    var e = rw_getSelectionNonParsed();
    texthelp.RW4GC.currentDictionary = {
      isvisible: !0
      , heading: "Translator"
      , word: e
    }, texthelp.RW4GC.riot.dictionary = texthelp.RW4GC.riot.mount("texthelp-dictionary", texthelp.RW4GC.currentDictionary)[0], window.postMessage({
      method: "thStopScreenShotReaderSpeech"
      , type: "1757FROM_PAGERW4G"
      , payload: {
        ChromeExtId: "23"
      }
    }, "*")
  } catch (t) {
    thLogE(t)
  }
}

function $rw_dictionaryRequest(e) {
  try {
    var t = e;
    if (g_bIsScholastic) return void("function" == typeof displayDictionaryTerm && displayDictionaryTerm(t));
    if (t.length > 0) {
      var r = g_controllerFactory.getConnector();
      if (null != r)
        if ("undefined" != typeof eba_custom_dictionary_url && null != eba_custom_dictionary_url && eba_custom_dictionary_url.length > 0) r.getCustomDictionaryPage(t, eba_custom_dictionary_url);
        else if ("undefined" != typeof eba_alt_dictionary_url && null != eba_alt_dictionary_url && eba_alt_dictionary_url.length > 0) {
        var a = eba_alt_dictionary_url + t;
        rw_newWindow(a, "popup", 700, 500, 1, 1, 0, 0, 0, 0, 0)
      } else r.getDictionaryPage(t)
    } else if ("undefined" != typeof eba_alt_dictionary_url && null != eba_alt_dictionary_url && eba_alt_dictionary_url.length > 0) alert(textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("selection_no_word"));
    else {
      var i = 'result=<div class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("selection_no_word") + "</div>";
      $rw_dictionaryReply(i)
    }
  } catch (n) {
    thLogE(n)
  }
}

function $rw_dictionaryReply(e) {
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
      var a = e.substring(7);
      a = rw_replaceSearchPlaceholder(a), rw_setPopupText(POPUP_DICTIONARY, a), rw_showDiv(!0, POPUP_DICTIONARY)
    } else if (e.length > 0) {
      var i = JSON.parse(e);
      if (void 0 !== i.service && "DictionaryHTML_1" == i.service) return void $rw_dictionaryReplyHTML(i);
      if (i.inflections.length < 1) {
        var n = '<div id="rwDictPanel" class="rwDictPanel">';
        return n += '<div class="rwDictWordHeader">' + i.word + "</div>", n += '<div class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + textHelp.webreader.LocaleSingleton.getInst()
          .getLocaleString("dialog_definition_notfound"), rw_setPopupText(POPUP_DICTIONARY, n), void rw_showDiv(!0, POPUP_DICTIONARY)
      }
      var n = '<div class="rwDictPanel">';
      n += '<div class="rwDictWordHeader">' + i.word + "</div>", n += '<table class="rwDictDefin"><tbody>';
      for (var s = 0, o = 5, l = 0, c = i.inflections, d = 0; d < c.length; d++)
        for (var p = c[d].definitions, g = 0; g < p.length; g++) {
          l++, n += "<tr><td>";
          var u = "";
          p[g].type.length > 0 && "11" !== p[g].type && (u = "<b>" + t[p[g].type] + ": </b>"), n += '<span id="def' + l + '" >' + u + "<span>" + p[g].definition + "</span></span>", n += "</td></tr>", s++, s >= o && (g = p.length, d = c.length)
        }
      n += "</tbody></table></div>", rw_setPopupText(POPUP_DICTIONARY, n), rw_showDiv(!0, POPUP_DICTIONARY)
    }
  } catch (_) {
    thLogE(_)
  }
}

function $rw_dictionaryReplyHTML(e) {
  var t = e.definitions;
  0 == t.length && (t += '<div class="rwDictWordHeader">' + e.word + "</div>", t += '<div class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("dialog_definition_notfound")), t = '<div id="rwDictPanel" class="rwDictPanel">' + t + "</div>", rw_setPopupText(POPUP_DICTIONARY, t), rw_showDiv(!0, POPUP_DICTIONARY)
}

function rw_replaceSearchPlaceholder(e) {
  for (var t = e.indexOf(g_strSearchStartPlaceholder); t > -1;) {
    var r = e.indexOf(g_strSearchEndPlaceholder, t);
    if (r > -1) {
      var a = e.substring(t + g_strSearchStartPlaceholder.length, r);
      if (!g_bDisableSpeech) {
        var i = "<span onclick=\"$rw_speakByIdWithSpeaker('" + a + '\')" ignore="1"><img name="speaker' + a + 'off" align="right" src="' + SSDAT.paths.strFileLoc + 'rwimgs/Speaker.png" style="width:26px; visibility:visible; display:inline" /><img name="speaker' + a + 'on" align="right" src="' + SSDAT.paths.strFileLoc + 'rwimgs/Speaker_on.png" style="width:0px;visibility:hidden; display:none" /> </span>';
        e = e.substring(0, t) + i + e.substr(r + g_strSearchEndPlaceholder.length)
      }
    }
    t = e.indexOf(g_strSearchStartPlaceholder, t + 1)
  }
  return e
}

function $rw_getTranslationFl(e, t) {
  try {
    g_strTranCallback = t;
    var r = e;
    if (r.length > 0) {
      var a = g_controllerFactory.getConnector();
      if (null != a) return a.getTranslationFlGenericPage(r, SpeechStream.translatorData.strSource, SpeechStream.translatorData.strTarget)
    }
  } catch (i) {
    thLogE(i)
  }
  var n = '<div class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("selection_no_word") + "</div>";
  return n
}

function $rw_transFlReply(p_str) {
  try {
    if ("string" == typeof p_str && p_str.length > 0) {
      for (var strResult = "<html><body>" + p_str + "</body></html>", n = strResult.indexOf("'"); n > -1;) strResult = strResult.substring(0, n) + "\\'" + strResult.substring(n + 1), n = strResult.indexOf("'", n + 2);
      return eval(g_strTranCallback + "('" + strResult + "')"), strResult
    }
  } catch (err) {
    thLogE(err)
  }
  return "error"
}

function $rw_getDictionaryFl(e, t) {
  try {
    g_strDictCallback = t;
    var r = rw_trimText(e);
    if (r.length > 0) {
      var a = g_controllerFactory.getConnector();
      if (null != a) return a.getDictionaryPageFl(r)
    }
    var i = '<div class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("selection_no_word") + "</div>";
    return i
  } catch (n) {
    return thLogE(n), '<div class="rwDictWordHeader">No result available</div>'
  }
}

function $rw_dictionaryFlReply(p_str) {
  try {
    var nPos = p_str.indexOf("result=");
    if (nPos > -1) {
      var strResult = p_str.substring(7)
        , strTmp = "rwDictWordHeader"
        , nStart = strResult.indexOf(strTmp);
      nStart > -1 && (strResult = strResult.substring(0, nStart) + "fluencyDictionaryHeader" + strResult.substring(nStart + strTmp.length));
      for (var n = strResult.indexOf("'"); n > -1;) strResult = strResult.substring(0, n) + "\\'" + strResult.substring(n + 1), n = strResult.indexOf("'", n + 2);
      return eval(g_strDictCallback + "('" + strResult + "')"), strResult
    }
  } catch (err) {
    thLogE(err)
  }
  return "error"
}

function $rw_translateFlTest(e) {
  alert(e)
}

function $rw_dictionaryFlTest(e) {
  alert(e)
}

function $rw_event_picturedictionary() {
  try {
    stopTexthelpScreenshotReading();
    var e;
    e = rw_getSelectionNonParsed(), SpeechStream.tools.pictureDictionary.lookup(e)
  } catch (t) {
    thLogE(t)
  }
}

function $rw_picturedictionaryReply(e) {
  try {
    if ("string" == typeof e && e.length > 0) {
      var t;
      t = e;
      for (var r = t.indexOf('src="') + 5; r > 4;) t = t.substring(0, r) + (g_strPictureDictionaryServer ? g_strPictureDictionaryServer : rw_serverUrlToIncludeHttp(g_strDefaultServer, !1)) + "ImageServices/image.html?imageurl=" + t.substring(r), r = t.indexOf("src=", r) + 5;
      for (var a = t.indexOf("<br />"), i = t.indexOf(String.fromCharCode(60) + "/p>", a); a > -1 && i > -1;) t = t.substring(0, a) + t.substr(i), a = t.indexOf("<br />", a), i = a > -1 ? t.indexOf(String.fromCharCode(60) + "/p>", a) : -1;
      rw_setPopupText(POPUP_PICTUREDICTIONARY, t), rw_showDiv(!0, POPUP_PICTUREDICTIONARY)
    }
  } catch (n) {
    thLogE(n)
  }
}

function rw_speechTranslateCompleteCallback() {
  eba_translate_complete_callback && "function" == typeof eba_translate_complete_callback && eba_translate_complete_callback()
}
$rw_barSearchInit(), SpeechStream.TranslatorData = function () {
  function e(e) {
    if ("string" == typeof e) {
      var r = e.trimTH()
        .toUpperCase();
      return r == t.ENGLISH ? "US" == g_strLocale ? t.ENGLISH_US : t.ENGLISH_UK : "CANTONESE" == r.toUpperCase() ? "CHINESE" : "MANDARIN" == r.toUpperCase() ? "CHINESE" : r
    }
    if ("number" == typeof e) {
      var a = parseInt(e, 10);
      switch (a) {
      case ENGLISH:
        return "US" == g_strLocale ? t.ENGLISH_US : t.ENGLISH;
      case ENGLISH_US:
        return t.ENGLISH_US;
      case ENGLISH_UK:
        return t.ENGLISH_UK;
      case SPANISH:
        return t.SPANISH;
      case FRENCH:
        return t.FRENCH;
      case FRENCH_CA:
        return t.FRENCH_CA;
      case GERMAN:
        return t.GERMAN;
      case ITALIAN:
        return t.ITALIAN;
      case PORTUGUESE:
        return t.PORTUGUESE;
      case PORTUGUES:
        return t.PORTUGUES;
      case CHINESE:
        return t.CHINESE;
      case MALAYSIAN:
        return t.MALAYSIAN
      }
    }
    return null
  }
  var t = this;
  this.ENGLISH = "ENGLISH", this.ENGLISH_US = "ENGLISH_US", this.ENGLISH_UK = "ENGLISH_UK", this.FRENCH = "FRENCH", this.FRENCH_CA = "FRENCH", this.SPANISH = "SPANISH", this.GERMAN = "GERMAN", this.ITALIAN = "ITALIAN", this.PORTUGUESE = "PORTUGUESE", this.PORTUGUES = "PORTUGUES", this.CHINESE = "CHINESE", this.MALAYSIAN = "MALAYSIAN", this.WORD_TYPE = "word", this.PARAGRAPH_TYPE = "paragraph", this.strSource = "ENGLISH_US", this.strTarget = "SPANISH", this.strType = this.WORD_TYPE, this.bCantoneseTarget = !1, this.setSource = function (r) {
    var a = e(r);
    null != a && (t.strSource = a)
  }, this.setTarget = function (r) {
    var a = e(r);
    null != a && (t.strTarget = a, t.bCantoneseTarget = "CANTONESE" === r.toUpperCase())
  }, this.setType = function (e) {
    null != e && (t.type = e.toLowerCase())
  }, this.getType = function () {
    return t.type
  }
}, SpeechStream.translatorData = new SpeechStream.TranslatorData, "string" != typeof eba_translate_source && "number" != typeof eba_translate_source || SpeechStream.translatorData.setSource(eba_translate_source), "string" != typeof eba_translate_target && "number" != typeof eba_translate_target || SpeechStream.translatorData.setTarget(eba_translate_target), "string" == typeof eba_translate_type && SpeechStream.translatorData.setType(eba_translate_type);
var g_strSearchStartPlaceholder = "<span placeholder='"
  , g_strSearchEndPlaceholder = "'></span>"
  , g_strTranCallback = null
  , g_strDictCallback = null;
