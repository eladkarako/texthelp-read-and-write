function $rw_barSSInit() {
  SSDAT.paths.strFileLoc;
  if ((g_nIcons & collect_icon) == collect_icon || (g_nNoDisplayIcons & collect_icon) == collect_icon) {
    g_bIE;
    var e = "";
    e += '<span texthelpStopContinuous="1"></span>', SSDOM.BetterInnerHTML(SSDAT.pageData.placeholder, e, !1)
  }
  g_bSSLoaded = !0, "function" == typeof $rw_toolbarHighlightLoadedCallback && $rw_toolbarHighlightLoadedCallback()
}

function studySkillsHTMLHighlightRange(e) {
  try {
    var t = rw_getSelection();
    if (null == t || null == t.range || t.range instanceof String) return !1;
    var o = t.range;
    if (g_bIEOld) {
      var n = o.parentElement()
        .ownerDocument.body
        , l = rw_getTextRangeAsTHRange(n, o);
      if (null == l) return !1;
      var a = SSDOM.getCaretPairFromDomPosition(n, l.startRef.path, l.startRef.offset, l.endRef.path, l.endRef.offset)
        , r = a.leftCaret
        , i = a.rightCaret;
      if (null == r || null == i) return !1;
      var g = new THDomRange(r.node, r.offset, i.node, i.offset);
      if (null == g) return null;
      if (g = rw_checkTHRangeForValidHighlight(g), null == g) return null;
      o = rw_getAsTextRange(n, g.startRef.path, g.startRef.offset, g.endRef.path, g.endRef.offset)
    } else o = rw_checkTHRangeForValidHighlight(o);
    return null == o ? (rw_alert("Failed to do the highlight, possibly due to selection going into a non textual part of the page."), !1) : (studySkillsHTMLHighlightRangeImpl(o, e), rw_collapseSelection(), g_bPersistAnnotations && g_bPersistHighlights && "undefined" != typeof rw_storeHighlightData && rw_storeHighlightData(), !0)
  } catch (s) {
    return !1
  }
}

function rw_checkTHRangeForValidHighlight(e) {
  var t = e.startCaret
    , o = e.endCaret
    , n = !1;
  if (SSDOM.isInvalidNode(t.node)) {
    if (t.node == o.node) return;
    var l = SSDOM.getNextTextNodeNoImg(t.node, !1, o.node, !1);
    if (null == l || SSDOM.isInvalidNode(l)) return;
    t.node = l, t.offset = 0, n = !0
  }
  var a = 3 != t.node.nodeType || 3 == t.node.nodeType && 0 == t.node.nodeValue.trimTH()
    .length;
  if (a) {
    for (n = !0; a;) {
      if (t.node == o.node) return null;
      if (t.node = SSDOM.getNextTextNodeNoBlank(t.node, !1, o.node), null == t.node) return null;
      a = 3 != t.node.nodeType || 3 == t.node.nodeType && 0 == t.node.nodeValue.trimTH()
        .length
    }
    t.offset = 0
  }
  if (SSDOM.isInvalidNode(o.node)) {
    if (t.node == o.node) return;
    var l = SSDOM.getPreviousTextNodeNoImg(o.node, !1, t.node, !1);
    if (null == l || SSDOM.isInvalidNode(l)) return;
    o.node = l, o.offset = l.nodeValue.length, n = !0
  }
  if (a = 3 != o.node.nodeType || 3 == o.node.nodeType && 0 == o.node.nodeValue.trimTH()
    .length) {
    for (n = !0; a;) {
      if (t.node == o.node) return null;
      if (o.node = SSDOM.getPreviousTextNodeNoImg(o.node, !1, t.node, !1), null == o.node) return null;
      a = 3 != o.node.nodeType || 3 == o.node.nodeType && 0 == o.node.nodeValue.trimTH()
        .length
    }
    3 == o.node.nodeType && (o.offset = o.node.nodeValue.length)
  }
  return null == t.node || null == o.node ? null : (n && (e = new THDomRange(t.node, t.offset, o.node, o.offset)), e)
}

function studySkillsHTMLHighlightRangeImpl(e, t) {
  try {
    var o = !1
      , n = null
      , l = null
      , a = null
      , r = !0;
    if (null == e || e instanceof String) return;
    var i = 0
      , g = !1;
    if (g_bIEOld) {
      if (a = rw_getTextFromRange(e), 0 == a.length) return;
      try {
        n = e.parentElement();
        var s = SSDOM.getComputedStyle(n);
        if (null != s && "none" == s.display) o = !0;
        else
          for (var c = n.ownerDocument.body; n != c;)
            if (n = n.parentNode, "none" == SSDOM.getComputedStyle(n)
              .display) {
              o = !0;
              break
            }
        o && (l = n.style.display, n.style.display = "inline")
      } catch (h) {}
      studySkillsHTMLRefreshRanges();
      for (var d = 0; d < g_aTextRange.length; d++) {
        var u = g_aTextRange[d]
          , _ = e.duplicate();
        _.collapse(!0);
        var S = u.inRange(_);
        _ = e.duplicate(), _.collapse(!1);
        var f = u.inRange(_);
        g = !1, S && f ? g_aHighlightColour[d] == t ? r = !1 : (case1IE(d, e), g = !0) : !S && f ? (case2IE(d, e), g = !0) : S && !f ? (case3IE(d, e), g = !0) : e.inRange(u) && (g_aTextRange.splice(d, 1), g_aHighlightColour.splice(d, 1), d--, g = !0), g && (++i, i < 100 && (d = -1))
      }
    } else {
      if (!e.toString) return;
      if (null == e || null == e.toString() || "" == e.toString()) return;
      for (var d = 0; d < g_aTextRange.length; d++) {
        var p = g_aTextRange[d];
        if (e.body.ownerDocument == p.body.ownerDocument) {
          var b = e.compareRange(p);
          switch (b) {
          case THDomRange_ERROR:
            window.status = "Error occurred when trying to add a highlight.";
            break;
          case THDomRange_TARGET_SAME:
            if (g_aHighlightColour[d] == t) {
              r = !1;
              break
            }
          case THDomRange_TARGET_INSIDE:
            p.refresh(), rw_removeHighlight(SSDOM.getListOfHighlightableNodes(p.startCaret, p.endCaret)), g_aTextRange.splice(d, 1), g_aHighlightColour.splice(d, 1), --d, e.refresh(), g = !0;
            break;
          case THDomRange_TARGET_INCLUDES_THIS:
          case THDomRange_TARGET_INCLUDES_THIS_AT_START:
          case THDomRange_TARGET_INCLUDES_THIS_AT_END:
            g_aHighlightColour[d] == t ? r = !1 : (case1SFF(d, e, b), ++d, g = !0);
            break;
          case THDomRange_OVERLAPS_START_OF_TARGET:
            case2SFF(d, e), g = !0;
            break;
          case THDomRange_OVERLAPS_END_OF_TARGET:
            case3SFF(d, e), g = !0;
            break;
          case THDomRange_AFTER_TARGET:
            break;
          case THDomRange_BEFORE_TARGET:
          }
        }
        g && (++i, i < 100 && (d = -1))
      }
    }
    if (g_bIENew && rw_collapseSelection(), r) {
      if (e.execCommand) studySkillsClearRangeIE(e), rw_ieSpecificCallToSetHighlight(e, t);
      else {
        var v = e.startCaret
          , T = e.endCaret;
        rw_setHighlight(v.node, v.offset, T.node, T.offset, t)
      }
      g_aTextRange.push(e), g_aHighlightColour.push(t)
    }
    return rw_collapseSelection(), o && (n.style.display = l), !0
  } catch (m) {
    return !1
  }
}

function rw_ieSpecificCallToSetHighlight(e, t) {
  "strikethrough" == t ? e.execCommand("strikethrough", !1, null) : e.execCommand("backcolor", !1, t)
}

function case1IE(e, t) {
  var o = g_aTextRange[e].duplicate()
    , n = g_aTextRange[e].duplicate();
  for (o.collapse(!0), n.collapse(!1); o.compareEndPoints("EndToStart", t) < 0;) o.moveEnd("character", 1);
  for (; n.compareEndPoints("StartToEnd", t) > 0;) n.moveStart("character", -1);
  studySkillsClearRangeIE(g_aTextRange[e]), 0 == o.text.length ? (g_aTextRange[e] = n, rw_ieSpecificCallToSetHighlight(g_aTextRange[e], g_aHighlightColour[e])) : (g_aTextRange[e] = o, rw_ieSpecificCallToSetHighlight(g_aTextRange[e], g_aHighlightColour[e]), n.text.length > 0 && (g_aTextRange.push(n), g_aHighlightColour.push(g_aHighlightColour[e]), rw_ieSpecificCallToSetHighlight(n, g_aHighlightColour[e])))
}

function case2IE(e, t) {
  var o = g_aTextRange[e].duplicate();
  for (o.collapse(!1); o.compareEndPoints("StartToEnd", t) > 0;) o.moveStart("character", -1);
  g_aTextRange[e] = o
}

function case3IE(e, t) {
  var o = g_aTextRange[e].duplicate();
  for (o.collapse(!0); o.compareEndPoints("EndToStart", t) < 0;) o.moveEnd("character", 1);
  g_aTextRange[e] = o
}

function case1SFF(e, t, o) {
  var n = g_aHighlightColour[e]
    , l = g_aTextRange[e];
  l.refresh();
  var a = l.startRef
    , r = t.startRef
    , i = t.endRef
    , g = l.endRef;
  rw_removeHighlight(SSDOM.getListOfHighlightableNodes(l.startCaret, l.endCaret)), g_aTextRange.splice(e, 1), g_aHighlightColour.splice(e, 1);
  var s, c, h, d;
  o != THDomRange_TARGET_INCLUDES_THIS_AT_START && (caretRange = SSDOM.getCaretPairFromDomPosition(t.body, a.path, a.offset, r.path, r.offset), s = caretRange.leftCaret, c = caretRange.rightCaret, h = rw_setHighlight(s.node, s.offset, c.node, c.offset, n), d = new THDomRange(h.start, 0, h.end, h.end.nodeValue.length), g_aTextRange.push(d), g_aHighlightColour.push(n)), o != THDomRange_TARGET_INCLUDES_THIS_AT_END && (caretRange = SSDOM.getCaretPairFromDomPosition(t.body, i.path, i.offset, g.path, g.offset), s = caretRange.leftCaret, c = caretRange.rightCaret, h = rw_setHighlight(s.node, s.offset, c.node, c.offset, n), d = new THDomRange(h.start, 0, h.end, h.end.nodeValue.length), g_aTextRange.push(d), g_aHighlightColour.push(n)), t.refresh()
}

function case2SFF(e, t) {
  var o = g_aHighlightColour[e]
    , n = g_aTextRange[e];
  n.refresh();
  var l = t.endRef
    , a = n.endRef;
  rw_removeHighlight(SSDOM.getListOfHighlightableNodes(n.startCaret, n.endCaret)), g_aTextRange.splice(e, 1), g_aHighlightColour.splice(e, 1);
  var r = SSDOM.getCaretPairFromDomPosition(t.body, l.path, l.offset, a.path, a.offset)
    , i = r.leftCaret
    , g = r.rightCaret
    , s = rw_setHighlight(i.node, i.offset, g.node, g.offset, o)
    , c = new THDomRange(s.start, 0, s.end, s.end.nodeValue.length);
  g_aTextRange.push(c), g_aHighlightColour.push(o), t.refresh()
}

function case3SFF(e, t) {
  var o = g_aHighlightColour[e]
    , n = g_aTextRange[e];
  n.refresh();
  var l = n.startRef
    , a = t.startRef;
  rw_removeHighlight(SSDOM.getListOfHighlightableNodes(n.startCaret, n.endCaret)), g_aTextRange.splice(e, 1), g_aHighlightColour.splice(e, 1);
  var r = SSDOM.getCaretPairFromDomPosition(t.body, l.path, l.offset, a.path, a.offset)
    , i = r.leftCaret
    , g = r.rightCaret
    , s = rw_setHighlight(i.node, i.offset, g.node, g.offset, o)
    , c = new THDomRange(s.start, 0, s.end, s.end.nodeValue.length);
  g_aTextRange.push(c), g_aHighlightColour.push(o), t.refresh()
}

function testRange(e) {
  var t = "";
  t += "range.collapse=" + e.collapse + "\n", t += "range.duplicate=" + e.duplicate + "\n", t += "range.inRange=" + e.inRange + "\n", t += "range.text=" + e.text + "\n", t += "range.compareEndPoints=" + e.compareEndPoints + "\n", rw_alert(t)
}

function studySkillsClearHighlights(e) {
  try {
    var t = rw_getSelection()
      , o = null
      , n = null;
    if (null != t && null != t.range && (o = t.range, n = t.frame), null != o && o instanceof String) {
      if (null != g_lastInputSelectSFF && (g_lastInputSelectSFF.selectionStart = 0, g_lastInputSelectSFF.selectionEnd = 0), g_lastInputSelectSFF = null, !e) return;
      o = null
    }
    if (g_bIEOld) {
      if (null == o || 0 == o.length || 0 == o.text.length || e) {
        if (!e) {
          var l = confirm(textHelp.webreader.LocaleSingleton.getInst()
            .getLocaleString("speechstream_msh_removehighlights"));
          if (!l) return
        }
        g_bPersistAnnotations && (g_strStoredHighlightData = null, g_strStoredHighlightUnprocessedData = null);
        for (var a = g_aTextRange.length, r = 0; r < a; r++) {
          var i = g_aTextRange[r];
          studySkillsClearRangeIE(i), g_aTextRange[r] = null, g_aHighlightColour[r] = null
        }
        if (g_aTextRange = new Array, g_aHighlightColour = new Array, !document.compatMode.equalsTH("CSS1Compat"))
          if (!g_bIgnoreFrames && top.frames.length > 0) {
            var g = 0
              , s = top.frames.length;
            for (g = 0; g < s; g++) try {
              var c = top.frames[g];
              o = c.document.selection.createRange(), o.expand("textedit"), studySkillsClearRangeIE(o)
            } catch (h) {}
          } else o = document.selection.createRange(), o.expand("textedit"), studySkillsClearRangeIE(o);
        return void(g_bPersistAnnotations && g_bPersistHighlights && "undefined" != typeof rw_storeHighlightData && rw_storeHighlightData())
      }
      studySkillsClearRangeIE(o), studySkillsHTMLRefreshRanges();
      var a = g_aTextRange.length
        , r = 0
        , d = null
        , u = null;
      for (r = 0; r < a; r++)
        if (d = g_aTextRange[r], null != d) {
          if (o.inRange(d)) {
            d = null, g_aTextRange.splice(r, 1), g_aHighlightColour.splice(r, 1), r--;
            continue
          }
          if (u = d.duplicate(), u.collapse(!0), o.inRange(u)) {
            var _ = d.duplicate();
            for (_.collapse(!1); _.compareEndPoints("StartToEnd", o) > 0;) _.moveStart("character", -1);
            studySkillsClearRangeIE(g_aTextRange[r]), g_aTextRange[r] = _, rw_ieSpecificCallToSetHighlight(g_aTextRange[r], g_aHighlightColour[r])
          } else if (u = d.duplicate(), u.collapse(!1), o.inRange(u)) {
            var S = d.duplicate();
            for (S.collapse(!0); S.compareEndPoints("EndToStart", o) < 0;) S.moveEnd("character", 1);
            studySkillsClearRangeIE(g_aTextRange[r]), g_aTextRange[r] = S, rw_ieSpecificCallToSetHighlight(g_aTextRange[r], g_aHighlightColour[r])
          }
          if (d.inRange(o)) {
            studySkillsClearRangeIE(d);
            var S = d.duplicate()
              , _ = d.duplicate();
            for (S.collapse(!0), _.collapse(!1); S.compareEndPoints("EndToStart", o) < 0;) S.moveEnd("character", 1);
            for (; _.compareEndPoints("StartToEnd", o) > 0;) _.moveStart("character", -1);
            studySkillsClearRangeIE(g_aTextRange[r]), g_aTextRange[r] = S, g_aTextRange.push(_), g_aHighlightColour.push(g_aHighlightColour[r]), rw_ieSpecificCallToSetHighlight(S, g_aHighlightColour[r]), rw_ieSpecificCallToSetHighlight(_, g_aHighlightColour[r])
          }
        }
      o.execCommand("UnSelect", !1, null)
    } else {
      if (null == o || e) {
        if (!e) {
          var l = confirm(textHelp.webreader.LocaleSingleton.getInst()
            .getLocaleString("speechstream_msh_removehighlights"));
          if (!l) return
        }
        g_bPersistAnnotations && (g_strStoredHighlightData = null, g_strStoredHighlightUnprocessedData = null);
        var f = g_aTextRange;
        g_aTextRange = new Array, g_aHighlightColour = new Array;
        for (var g = 0; g < f.length; g++) {
          var d = f[g];
          d.refresh(), rw_removeHighlight(SSDOM.getListOfHighlightableNodes(d.startCaret, d.endCaret))
        }
      } else {
        o.refresh();
        for (var r = 0; r < g_aTextRange.length; r++) {
          var p = g_aTextRange[r];
          if (o.body == p.body) {
            var b = o.compareRange(p);
            switch (b) {
            case THDomRange_ERROR:
              window.status = "Error occurred when trying to remove a highlight.";
              break;
            case THDomRange_TARGET_SAME:
            case THDomRange_TARGET_INSIDE:
              p.refresh(), rw_removeHighlight(SSDOM.getListOfHighlightableNodes(p.startCaret, p.endCaret)), g_aTextRange.splice(r, 1), g_aHighlightColour.splice(r, 1), --r, o.refresh();
              break;
            case THDomRange_TARGET_INCLUDES_THIS:
            case THDomRange_TARGET_INCLUDES_THIS_AT_START:
            case THDomRange_TARGET_INCLUDES_THIS_AT_END:
              case1SFF(r, o, b), ++r;
              break;
            case THDomRange_OVERLAPS_START_OF_TARGET:
              case2SFF(r, o);
              break;
            case THDomRange_OVERLAPS_END_OF_TARGET:
              case3SFF(r, o);
              break;
            case THDomRange_AFTER_TARGET:
              break;
            case THDomRange_BEFORE_TARGET:
            }
          }
        }
      }
      rw_collapseSelection()
    }
    g_bPersistAnnotations && g_bPersistHighlights && "undefined" != typeof rw_storeHighlightData && rw_storeHighlightData(), g_abVisible[POPUP_COLLECT] && $rw_divPress(POPUP_COLLECT)
  } catch (v) {
    thLog("Error in method: " + v.name + " " + v.message + " " + v.description + " " + v.toString())
  }
}

function studySkillsClearRangeIE(e) {
  e.execCommand("backcolor", !1, "clear"), (g_nIcons & strike_icon) == strike_icon && e.execCommand("RemoveFormat", !1, null)
}

function sortBy(e, t) {
  try {
    return e.compareEndPoints("EndToEnd", t)
  } catch (o) {
    return thLog("sortby " + o.message), 0
  }
}

function sortBySFF(e, t) {
  try {
    if (e.equals(t)) return 0;
    e.refresh(), t.refresh();
    var o = e.getEndAsRange()
      , n = t.getEndAsRange();
    return o.compareBoundaryPoints("END_TO_END", n)
  } catch (l) {
    return thLog("sortBySFF " + l.message), 0
  }
}

function showDialog() {
  g_eventSubScribeID = textHelp.webreaderapi.EventBusSingleton.getInst()
    .subscribe("onGetSettingsChanged", this.onGetSettingsChanged, this), textHelp.webreader.UserSettingsSingleton.getInst()
    .updateUserSettings()
}

function hasClassName(e, t) {
  return e.classList.contains(t)
}

function changeClassName(e, t, o) {
  e.classList.remove(t), e.classList.add(o)
}

function showDialogwithSetting(e) {
  var t = document.querySelector("#thSSCHODialog");
  if (null !== t) return void(g_showTHCHDialog = !1);
  t = document.createElement("div"), t.id = "thSSCHODialog", t.className = "gdwr-modal-dialog-bg";
  var o = "opacity: 0.5; width: " + document.body.clientWidth + "px; height: " + document.body.clientHeight + "px;";
  t.setAttribute("style", o), dialog = document.createElement("div"), dialog.className = "gdwr-modal-dialog gdwr-collecthighlights-dialog", dialog.id = "thCHDialog";
  var n = Math.round(screen.width / 2) - 125
    , l = Math.round(screen.height / 2) - 160;
  o = "left: " + n + "px; top: " + l + "px;", dialog.setAttribute("style", o), dialog.innerHTML = '<div class="gdwr-modal-dialog-title" id=":0"><span class="gdwr-modal-dialog-title-text" data-speechstream-collecthighlights-dialog="speechstream_collect_highlights_dialog_heading">Collect Highlights</span><span class="gdwr-modal-dialog-title-close"></span></div><div class="gdwr-modal-dialog-content"><div class="thchitems"><div class="sortLabel" data-speechstream-collecthighlights-dialog="speechstream_collecthighlights_sort">Sort highlights by</div><select id="sortSelect" class="thSelect"><option value="0" data-speechstream-collecthighlights-dialog="speechstream_collecthighlights_color">color</option><option value="1" data-speechstream-collecthighlights-dialog="speechstream_collecthighlights_position">position</option></select><div class="thchcolors"><span data-speechstream-collecthighlights-dialog="speechstream_collecthighlights_to_collect">Colors to collect</span><div><div id="thYellowChk" class="thCollectChks thYellowChk goog-checkbox-checked goog-checkbox" tabindex="0" aria-checked="true" role="checkbox" style="-webkit-user-select: none;"><div class="thRects thYellowRect"></div></div><br><div id="thBlueChk" class="thCollectChks thBlueChk goog-checkbox-checked goog-checkbox" tabindex="0" aria-checked="true" role="checkbox" style="-webkit-user-select: none;"><div class="thRects thBlueRect"></div></div><br><div id="thGreenChk" class="thCollectChks thGreenChk goog-checkbox-checked goog-checkbox" style="-webkit-user-select: none;" 0"="" aria-checked="true" role="checkbox" tabindex="0"><div class="thRects thGreenRect"></div></div><br><div id="thPinkChk" class="thCollectChks thPinkChk goog-checkbox-checked goog-checkbox" tabindex="0" aria-checked="true" role="checkbox" style="-webkit-user-select: none;"><div class="thRects thPinkRect"></div></div><br></div></div></div><div class="gdwr-modal-dialog-buttons gdwr-collect-dialog-buttons"><button class="goog-button gdwr-dialog-button" title="" value="" data-speechstream-collecthighlights-dialog="dialog_Cancel">Cancel</button><button class="goog-button gdwr-dialog-button" title="" value="" data-speechstream-collecthighlights-dialog="dialog_OK">OK</button></div></div><div class="gdwr-modal-dialog-buttons" style="display: none;"></div>';
  var a = document.getElementById("thSpeechStreamTBPlaceHolder");
  a.appendChild(t), a.appendChild(dialog);
  var r = e.sortAlgorithm
    , i = document.querySelector("#sortSelect");
  i.selectedIndex = r;
  var g = document.querySelector("#thYellowChk");
  e.yellow !== !0 && void 0 !== e.yellow && changeClassName(g, "goog-checkbox-checked", "goog-checkbox-unchecked"), g.addEventListener("click", function (e) {
    hasClassName(g, "goog-checkbox-checked") ? changeClassName(g, "goog-checkbox-checked", "goog-checkbox-unchecked") : changeClassName(g, "goog-checkbox-unchecked", "goog-checkbox-checked")
  }, !0);
  var s = document.querySelector("#thBlueChk");
  e.blue !== !0 && void 0 !== e.blue && changeClassName(s, "goog-checkbox-checked", "goog-checkbox-unchecked"), s.addEventListener("click", function (e) {
    hasClassName(s, "goog-checkbox-checked") ? changeClassName(s, "goog-checkbox-checked", "goog-checkbox-unchecked") : changeClassName(s, "goog-checkbox-unchecked", "goog-checkbox-checked")
  }, !0);
  var c = document.querySelector("#thGreenChk");
  e.green !== !0 && void 0 !== e.green && changeClassName(c, "goog-checkbox-checked", "goog-checkbox-unchecked"), c.addEventListener("click", function (e) {
    hasClassName(c, "goog-checkbox-checked") ? changeClassName(c, "goog-checkbox-checked", "goog-checkbox-unchecked") : changeClassName(c, "goog-checkbox-unchecked", "goog-checkbox-checked")
  }, !0);
  var h = document.querySelector("#thPinkChk");
  e.pink !== !0 && void 0 !== e.pink && changeClassName(h, "goog-checkbox-checked", "goog-checkbox-unchecked"), h.addEventListener("click", function (e) {
    hasClassName(h, "goog-checkbox-checked") ? changeClassName(h, "goog-checkbox-checked", "goog-checkbox-unchecked") : changeClassName(h, "goog-checkbox-unchecked", "goog-checkbox-checked")
  }, !0), dialog.addEventListener("click", function (e) {
    var t = e.target.nodeName
      , o = e.target.innerText;
    if ("BUTTON" == t) switch (o) {
    case "OK":
      onOKCHDialog();
      break;
    default:
      onCancelCHDialog()
    }
  }, !0);
  for (var d = dialog.querySelectorAll("[data-speechstream-collecthighlights-dialog]"), u = 0; u < d.length; u++) {
    var _ = d[u].getAttribute("data-speechstream-collecthighlights-dialog");
    d[u].innerText = textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString(_)
  }
}

function onOKCHDialog() {
  textHelp.webreaderapi.EventBusSingleton.getInst()
    .unsubscribe(g_eventSubScribeID);
  var e = textHelp.webreader.UserSettingsSingleton.getInst()
    .getUserSettings()
    , t = document.querySelector("#sortSelect");
  e.collecthighlights.sortAlgorithm = t.selectedIndex;
  var o = document.querySelector("#thYellowChk");
  hasClassName(o, "goog-checkbox-checked") ? e.collecthighlights.yellow = !0 : e.collecthighlights.yellow = !1;
  var n = document.querySelector("#thBlueChk");
  hasClassName(n, "goog-checkbox-checked") ? e.collecthighlights.blue = !0 : e.collecthighlights.blue = !1;
  var l = document.querySelector("#thGreenChk");
  hasClassName(l, "goog-checkbox-checked") ? e.collecthighlights.green = !0 : e.collecthighlights.green = !1;
  var a = document.querySelector("#thPinkChk");
  hasClassName(a, "goog-checkbox-checked") ? e.collecthighlights.pink = !0 : e.collecthighlights.pink = !1, textHelp.webreader.UserSettingsSingleton.getInst()
    .saveUserSettings(e);
  var r = document.querySelector("#thCHDialog");
  null !== r && r.parentNode.removeChild(r);
  var i = document.querySelector("#thSSCHODialog");
  null !== i && i.parentNode.removeChild(i), g_showTHCHDialog = !1;
  var g = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("collect_highlights_notification")
    , s = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("collect_highlights_notification_text")
    , c = {
      msg: '<div><div class="vl-notification"><div class="vl-notification-content"><div class="vl-notification-heading">' + g + '</div><div class="vl-notification-msg">' + s + "</div></div></div></div>"
      , sticky: !0
      , type: "success"
      , animIn: "fadeInRight"
      , animOut: "fadeOutDown"
    }
    , h = window.notification(c);
  g_collectHighlightsTab = window.open("", "_blank");
  var d = {
    sortBy: t.selectedIndex
    , yellow: e.collecthighlights.yellow
    , blue: e.collecthighlights.blue
    , green: e.collecthighlights.green
    , pink: e.collecthighlights.pink
    , title: document.getElementsByTagName("title")[0].innerHTML
    , url: window.location.href
  };
  collectHighlightsWithSettings(d, h)
}

function collectHighlightsWithSettings(e, t) {
  return 0 == e.sortBy ? void collectHighlightsByColor(e, t) : void collectHighlightsByPosition(e, t)
}

function collectHighlightsByColor(e, t) {
  var o = [];
  e.yellow && (o = o.concat(studySkillsCollateForColour(["yellow"]))), e.blue && (o = o.concat(studySkillsCollateForColour(["blue"]))), e.green && (o = o.concat(studySkillsCollateForColour(["green"]))), e.pink && (o = o.concat(studySkillsCollateForColour(["pink"])));
  var n = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("ch_documentTitle")
    , l = {
      highlights: o
      , title: document.getElementsByTagName("title")[0].innerHTML
      , url: window.location.href
      , docTitle: n
    };
  g_notifID = t, g_eventSubScribeCollectID = textHelp.webreaderapi.EventBusSingleton.getInst()
    .subscribe("onCollectHighlightsWeb", this.onCollectHighlightsWeb, this), window.postMessage({
      method: "collectHighlightsWeb"
      , type: "1757FROM_PAGERW4G"
      , documentHighlights: l
    }, "*")
}

function collectHighlightsByPosition(e, t) {
  var o = []
    , n = []
    , o = [];
  e.yellow && n.push("yellow"), e.blue && n.push("blue"), e.green && n.push("green"), e.pink && n.push("pink"), o = o.concat(studySkillsCollateForColour(n));
  var l = {
    highlights: o
    , title: document.getElementsByTagName("title")[0].innerHTML
    , url: window.location.href
  };
  g_notifID = t, g_eventSubScribeCollectID = textHelp.webreaderapi.EventBusSingleton.getInst()
    .subscribe("onCollectHighlightsWeb", this.onCollectHighlightsWeb, this), window.postMessage({
      method: "collectHighlightsWeb"
      , type: "1757FROM_PAGERW4G"
      , documentHighlights: l
    }, "*")
}

function onGetSettingsChanged(e) {
  try {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .unsubscribe(g_eventSubScribeID)
  } catch (t) {
    window.console.error(t.stack)
  }
}

function onCollectHighlightsWeb(e) {
  try {
    g_notifID.remove(), textHelp.webreaderapi.EventBusSingleton.getInst()
      .unsubscribe(g_eventSubScribeCollectID), g_collectHighlightsTab.location = e, g_collectHighlightsTab.focus()
  } catch (t) {
    window.console.error(t.stack)
  }
}

function onVocabWeb(e) {
  try {
    g_notifID.remove(), textHelp.webreaderapi.EventBusSingleton.getInst()
      .unsubscribe(g_eventSubScribeVocabID), g_vocabTab.location = e, g_vocabTab.focus()
  } catch (t) {
    window.console.error(t.stack)
  }
}

function onCancelCHDialog() {
  textHelp.webreaderapi.EventBusSingleton.getInst()
    .unsubscribe(g_eventSubScribeID);
  var e = document.querySelector("#thCHDialog");
  null !== e && e.parentNode.removeChild(e);
  var t = document.querySelector("#thSSCHODialog");
  null !== t && t.parentNode.removeChild(t), g_showTHCHDialog = !1
}

function onGetSettingsChanged(e) {
  try {
    if (void 0 == e.thRWFGSettings) return;
    var t = document.querySelector("#thCHDialog");
    if (null !== t) return;
    if (g_showTHCHDialog) return;
    g_showTHCHDialog = !0, showDialogwithSetting(window.JSON.parse(e.thRWFGSettings))
  } catch (o) {
    window.console.error(o.stack)
  }
}

function studySkillsCollate() {
  try {
    return showDialog(), ""
  } catch (e) {
    return thLog("Error in method: " + e.name + " " + e.message + " " + e.toString()), ""
  }
}

function collateFilter(e) {
  if (e.indexOf("\\") > -1 || e.indexOf("~") > -1 || e.indexOf("|") > -1) {
    var t, o;
    for (o = 0; o < e.length; o++) t = e.charCodeAt(o), 126 == t ? (e = e.substring(0, o) + "\\h" + e.substr(o + 1), ++o) : 124 == t ? (e = e.substring(0, o) + "\\v" + e.substr(o + 1), ++o) : 92 == t && (e = e.substring(0, o) + "\\\\" + e.substr(o + 1), ++o)
  }
  return e
}

function studySkillsCollateValuesOnly() {
  try {
    var e, t = studySkillsCollateForColourValuesOnly("cyan");
    e = t;
    var o = studySkillsCollateForColourValuesOnly("magenta");
    e.length > 0 && o.length > 0 && (e += "|"), e += o;
    var n = studySkillsCollateForColourValuesOnly("yellow");
    e.length > 0 && n.length > 0 && (e += "|"), e += n;
    var l = studySkillsCollateForColourValuesOnly("orange");
    e.length > 0 && l.length > 0 && (e += "|"), e += l;
    var a = studySkillsCollateForColourValuesOnly("lightgreen");
    return e.length > 0 && a.length > 0 && (e += "|"), e += a
  } catch (r) {
    return thLog("Error in method: " + r.name + " " + r.message + " " + r.toString()), ""
  }
}

function rw_selectCollateText() {
  var e = document.getElementById("rwcollatewrapper");
  if (null != e) {
    if (g_bIEOld) {
      var t = SSDOM.getRangeObject(e.ownerDocument.body);
      t.moveToElementText(e), t.select()
    } else {
      var o = SSDOM.getNextNodeIgnoreChildren(e, !1, null);
      if (null != o) {
        var t = new THDomRange(e, 0, o, 0);
        rw_selectSection(t)
      }
    }
    try {
      var n = g_controllerFactory.getConnector();
      if (null != n) {
        var l = rw_getSelectionNonParsed();
        null != l && 0 != l.length && n.setToClipboard(l.valueOf())
      }
    } catch (a) {
      thLogE(a)
    }
  }
}

function $rw_getHighlights(e) {
  return e = e.toLowerCase(), "blue" == e ? e = "cyan" : "red" == e && (e = "magenta"), "green" == e && (e = "lightgreen"), studySkillsCollateForColour(e)
}

function getColor(e) {
  return e = e.toLowerCase(), "cyan" == e ? e = "blue" : "magenta" == e && (e = "pink"), "lightgreen" == e && (e = "green"), e
}

function studySkillsCollateForColour(e) {
  for (var t = new Array, o = (new Array, []), n = g_aTextRange.length, l = 0, a = 0; a < n; a++) {
    var r = getColor(g_aHighlightColour[a]);
    if (e.indexOf(r) != -1) {
      var i = g_aTextRange.slice(a, a + 1)
        .pop();
      i.color = r, t.push(i)
    }
  }
  g_bIEOld ? t.sort(sortBy) : t.sort(sortBySFF);
  for (var g, s = t.length, a = 0; a < s; a++) {
    var c, h = t[a].color;
    if (g_bIEOld) {
      var d = t.slice(a, a + 1)
        .pop()
        , u = rw_getTextRangeAsTHRange(d.parentElement()
          .ownerDocument.body, d);
      c = rw_getTHCaretRangeFromTHRange(u)
    } else c = rw_getTHCaretRangeFromTHDomRange(t[a]);
    g = SSDOM.getTextOverCaretRange(c), g.length > 0 && (g = rw_filterForHtml(g), l++, o.push({
      text: g
      , color: h
    }))
  }
  return o
}

function studySkillsCollateForColourValuesOnly(e) {
  for (var t = new Array, o = g_aTextRange.length, n = "", l = "", a = 0; a < o; a++) {
    var r = g_aHighlightColour[a];
    r == e && t.push(g_aTextRange.slice(a, a + 1)
      .pop())
  }
  g_bIEOld ? t.sort(sortBy) : t.sort(sortBySFF);
  for (var i, g = t.length, a = 0; a < g; a++) i = g_bIEOld ? t.slice(a, a + 1)
    .pop()
    .text : t[a].toString(), i.length > 0 && (l += "~" + collateFilter(i));
  return l.length > 0 && (n += e, n += l), n
}

function hasStudySkills() {
  return null != g_aTextRange && g_aTextRange.length > 0
}

function $rw_event_cyan() {
  try {
    stopTexthelpScreenshotReading(), studySkillsHTMLHighlightRange("cyan")
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_magenta() {
  try {
    stopTexthelpScreenshotReading(), studySkillsHTMLHighlightRange("magenta")
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_yellow() {
  try {
    stopTexthelpScreenshotReading(), studySkillsHTMLHighlightRange("yellow")
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_orange() {
  try {
    stopTexthelpScreenshotReading(), studySkillsHTMLHighlightRange("orange")
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_green() {
  try {
    stopTexthelpScreenshotReading(), studySkillsHTMLHighlightRange("lightgreen")
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_strike() {
  try {
    studySkillsHTMLHighlightRange("strikethrough")
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_clear() {
  try {
    stopTexthelpScreenshotReading(), studySkillsClearHighlights(!1)
  } catch (e) {
    thLogE(e)
  }
}

function $rw_clearAllHighlights() {
  studySkillsClearHighlights(!0)
}

function $rw_refreshHighlights() {
  var e = g_bPersistAnnotations;
  g_bPersistAnnotations = !1, g_strStoredHighlightData = null, g_strStoredHighlightUnprocessedData = null, studySkillsClearHighlights(!0), g_bPersistAnnotations = e, rw_retrieveHighlightDataForPKT()
}

function $rw_event_collect() {
  try {
    stopTexthelpScreenshotReading(), rw_doCollect()
  } catch (e) {
    thLogE(e)
  }
}

function $rw_event_vocabulary() {
  try {
    stopTexthelpScreenshotReading(), (new SpeechStream.Vocab)
      .sendRequest()
  } catch (e) {
    thLogE(e)
  }
}

function studySkillsHTMLRefreshRanges() {
  try {
    var e = null
      , t = !1
      , o = 0;
    for (o = 0; o < g_aTextRange.length; o++) {
      e = g_aTextRange[o];
      try {
        null != e.text && "" != e.text || (e = null)
      } catch (n) {
        thLogE(n), e = null
      }
      null == e && (g_aTextRange.splice(o, 1), g_aHighlightColour.splice(o, 1), t = !0, o--)
    }
    return t
  } catch (l) {
    return thLog("Error in method studySkillsHTMLRefreshRanges: " + l.toString()), !1
  }
}

function rw_submitSSDataWithPost(e) {
  var t;
  t = null != g_strHighlightStorageUrl ? g_strHighlightStorageUrl : g_strPersistStorageUrl;
  var o = rw_getHTTPText(!1) + t + "/stickynoteserver/"
    , n = "cmd=" + CMD_ADD_SSDATA;
  g_bPktFlag || (n += "&custid=" + rw_custEscape(g_strCustId)), n += "&titleid=" + rw_custEscape(g_strBookId), n += "&pageid=" + rw_custEscape(g_strPageId), n += "&teacherid=" + rw_custEscape(g_strPersistHighlightReaderId), n += "&studentid=" + rw_custEscape(g_strPersistHighlightEditorId);
  var l = e[0]
    , a = e[1];
  n += "&ssdata=" + rw_custEscape(l), null != a && (n += "&highlighttext=" + a);
  var r = new SpeechStream.AjaxRequest;
  r.doPost(o, n, rw_SSPostCallback, null, !1)
}

function rw_submitSSDataWithGet(e) {
  var t;
  t = null != g_strHighlightStorageUrl ? g_strHighlightStorageUrl : g_strPersistStorageUrl;
  var o = rw_getHTTPText(!1) + t + "/stickynoteserver/?" + CMD_CODE + "=" + CMD_ADD_SSDATA;
  g_bPktFlag || (o += "&custid=" + rw_custEscape(g_strCustId)), o += "&titleid=" + rw_custEscape(g_strBookId), o += "&pageid=" + rw_custEscape(g_strPageId), o += "&teacherid=" + rw_custEscape(g_strPersistHighlightReaderId), o += "&studentid=" + rw_custEscape(g_strPersistHighlightEditorId);
  var n = e[0]
    , l = e[1];
  o += "&ssdata=" + rw_custEscape(n), null != l && (o += "&highlighttext=" + encodeURIComponent(l));
  var a = document.createElement("script");
  a.type = "text/javascript", a.src = o, document.body.appendChild(a)
}

function rw_submitViaFlash(e) {
  var t = g_controllerFactory.getConnector();
  if (null != t) {
    var o, n = e[0]
      , l = e[1];
    o = null != g_strHighlightStorageUrl ? g_strHighlightStorageUrl : g_strPersistStorageUrl;
    var a = rw_getHTTPText(!1) + o + "/stickynoteserver/"
      , r = CMD_ADD_SSDATA
      , i = g_bPktFlag ? null : g_strCustId
      , g = g_strBookId
      , s = g_strPageId
      , c = g_strPersistHighlightReaderId
      , h = g_strPersistHighlightEditorId;
    t.storeIEHighlightData(a, r, i, g, s, c, h, n, l)
  }
}

function $rw_submitViaFlashCallback(p_strSrc) {
  eval(p_strSrc)
}

function rw_getStudySkillsPositionData() {
  var e = g_aTextRange.length
    , t = ""
    , o = null;
  g_bStoreHighlightText && (o = "|");
  try {
    for (var n = 0; n < e; n++) {
      t += "|";
      var l = g_aHighlightColour[n];
      t += l + "|";
      var a, r, i, g = g_aTextRange[n];
      if (g_bIEOld) {
        g_bStoreHighlightText && (i = g.text);
        var s = rw_getTextRangeAsTHRange(g.body, g);
        a = s.startRef, r = s.endRef
      } else {
        g.refresh(), g_bStoreHighlightText && (i = g.toString());
        var c = g.startCaret.node
          , h = g.startCaret.offset
          , d = g.endCaret.node
          , u = g.endCaret.offset;
        if (3 == c.nodeType && 0 == c.nodeValue.trimTH()
          .length) {
          for (c = SSDOM.getNextNode(c, !1, d), h = 0; null != c && 3 == c.nodeType && 0 == c.nodeValue.trimTH()
            .length;) c = SSDOM.getNextNode(c, !1, d);
          null == c && (c = d)
        }
        var _ = rw_getRefPt(c, h);
        if (3 == d.nodeType && 0 == d.nodeValue.trimTH()
          .length) {
          for (u = 0; c != d && null != d && 3 == d.nodeType && 0 == d.nodeValue.trimTH()
            .length;) d = SSDOM.getPreviousNode(d, !1, c);
          null != d && 3 == d.nodeType && d.nodeValue.trimTH()
            .length > 0 && (u = d.nodeValue.length)
        }
        var S = rw_getRefPt(d, u);
        a = _, r = S
      }
      if (null != a && null != r) {
        var f = SSDOM.getCaretPairFromDomPosition(g.body, a.path, a.offset, r.path, r.offset)
          , p = f.leftCaret
          , b = f.rightCaret;
        t += rw_convertToPermCaretPosition(p) + "|" + rw_convertToPermCaretPosition(b), g_bStoreHighlightText && (i = rw_replaceAll(i, "|", "&#124;"), o += encodeURIComponent(i) + "|")
      }
    }
    t.length > 0 && (t += "|*188")
  } catch (v) {
    thLogE(v)
  }
  return new Array(t, o)
}

function rw_convertToPermCaretPosition(e) {
  var t = e.node.ownerDocument.body
    , o = e.node
    , n = e.offset;
  n += rw_getNodeOffset(o);
  for (var l = o.parentNode, a = l.getAttribute("id");
    (null == a || 0 == a.length) && l != t;) n += rw_getNodeOffset(l), l = l.parentNode, a = l.getAttribute("id");
  if (null != a && a.length > 0) {
    if (strPos = "idx" + a, null != l && null != l.firstChild) {
      var r = SSDOM.getFirstChildTextNode(l, !1);
      if (3 == r.nodeType) {
        for (var i = 0, g = r.nodeValue; g.length > i && 32 == g.charCodeAt(i);) ++i;
        n -= i
      }
    }
  } else {
    var s = rw_getRefPt(e.node, e.offset);
    strPos = s.path, n = s.offset
  }
  return strPos + "|" + n
}

function rw_convertFromPermCaretPosition(e, t, o) {
  var n = SSDOM.getPositionInDom(e)
    , l = 0;
  if (o && null != e.firstChild) {
    var a = SSDOM.getFirstChildTextNode(e, !1);
    if (null == a) return null;
    if (3 == a.nodeType)
      for (var r = a.nodeValue; r.length > l && 32 == r.charCodeAt(l);) ++l
  }
  return new THDomRefPt(n, t + l)
}

function rw_restoreHighlights(e) {
  var t = !1;
  if (e.length > 4) {
    var o = e.substr(e.length - 4);
    if ("*" == o.charAt(0)) {
      var n = parseInt(o.substr(o.length - 3), 10);
      n >= 188 && (t = !0)
    }
  }
  for (var l, a, r, i, g, s, c, h, d = e.indexOf("|"), u = e.indexOf("|", d + 1), _ = e.indexOf("|", u + 1), S = e.indexOf("|", _ + 1), f = e.indexOf("|", S + 1), p = e.indexOf("|", f + 1); d > -1 && u > -1 && _ > -1 && S > -1 && f > -1 && p > -1;) {
    h = !0, l = e.substring(d + 1, u), a = e.substring(u + 1, _), r = e.substring(_ + 1, S), g = e.substring(S + 1, f), s = e.substring(f + 1, p), i = parseInt(r, 10), c = parseInt(s, 10);
    var b = document.body;
    if (a.length > 3 && "idx" == a.substring(0, 3)) {
      var v = rw_getElementById(a.substr(3));
      if (null == v) h = !1;
      else {
        b = v.ownerDocument.body;
        var T = rw_convertFromPermCaretPosition(v, i, t);
        null == T ? h = !1 : (a = T.path, i = T.offset)
      }
    }
    if (g.length > 3 && "idx" == g.substring(0, 3)) {
      var v = rw_getElementById(g.substr(3));
      if (null == v) h = !1;
      else {
        b = v.ownerDocument.body;
        var T = rw_convertFromPermCaretPosition(v, c, t);
        null == T ? h = !1 : (g = T.path, c = T.offset)
      }
    }
    if (h) {
      var m = null;
      if (g_bIEOld) m = rw_getAsTextRange(b, a, i, g, c);
      else {
        var H = SSDOM.getCaretPairFromDomPosition(b, a, i, g, c)
          , C = H.leftCaret
          , w = H.rightCaret;
        null != C && null != w && (m = new THDomRange(C.node, C.offset, w.node, w.offset))
      }
      null != m ? studySkillsHTMLHighlightRangeImpl(m, l) : h = !1
    }
    h || (null == g_strStoredHighlightUnprocessedData && (g_strStoredHighlightUnprocessedData = ""), g_strStoredHighlightUnprocessedData += e.substring(d, p)), d = p, u = e.indexOf("|", d + 1), _ = e.indexOf("|", u + 1), S = e.indexOf("|", _ + 1), f = e.indexOf("|", S + 1), p = e.indexOf("|", f + 1)
  }
}

function rw_storeHighlightData() {
  g_bAnnotationGlobalCheck && rw_forceUseAnnotations();
  var e = rw_getStudySkillsPositionData();
  null != g_strStoredHighlightUnprocessedData ? (e[0] = g_strStoredHighlightUnprocessedData + e[0], g_bStoreHighlightText && (g_nHighlightNotSyncedState = 1)) : g_nHighlightNotSyncedState = 0, g_strStoredHighlightData = null, g_bIE && !g_controllerFactory.doesSupportHtml5() ? rw_submitViaFlash(e) : g_bStoreHighlightText ? rw_submitSSDataWithPost(e) : rw_submitSSDataWithGet(e)
}

function rw_storeHighlightCallback(p_strRes) {
  eval(p_strRes)
}

function rw_retrieveHighlightDataForPKT() {
  if (SpeechStream.annotateBlock.m_bUseAnnotations) {
    if (null != g_strStoredHighlightData) return void $rw_retrieveHighlightDataForPKTReply(g_strStoredHighlightData);
    if (!g_bAnnotationGlobalCheck || g_bAnnotationGlobalAllowed) {
      var e, t = new Date
        , o = t.getTime();
      e = null != g_strHighlightStorageUrl ? g_strHighlightStorageUrl : g_strPersistStorageUrl;
      var n = rw_getHTTPText(!1) + e + "/stickynoteserver/?" + CMD_CODE + "=";
      n += g_bAnnotationGlobalCheck && g_bAnnotationGlobalUnknown ? CMD_RETRIEVE_SSDATA_EXTRA : CMD_RETRIEVE_SSDATA, g_bPktFlag || (n += "&custid=" + rw_custEscape(g_strCustId)), n += "&titleid=" + rw_custEscape(g_strBookId), n += "&pageid=" + rw_custEscape(g_strPageId), n += "&teacherid=" + rw_custEscape(g_strPersistHighlightReaderId), n += "&studentid=" + rw_custEscape(g_strPersistHighlightEditorId), n += "&" + o + Math.floor(111 * Math.random());
      var l = document.createElement("script");
      l.type = "text/javascript", l.src = n, document.body.appendChild(l)
    }
  }
}

function $rw_retrieveHighlightDataForPKTReply(e) {
  var t = g_bIgnoreHidden;
  try {
    "boolean" != typeof eba_ignore_hidden || eba_ignore_hidden || (g_bIgnoreHidden = !1), "[e2020-nomatch]" == e ? rw_setNotUsingAnnotations() : g_bAnnotationGlobalCheck && g_bAnnotationGlobalUnknown && rw_setUsingAnnotations();
    var o;
    2 == g_nHighlightNotSyncedState && (o = g_strStoredHighlightUnprocessedData), g_strStoredHighlightUnprocessedData = null, rw_restoreHighlights(e), g_strStoredHighlightData = e, 2 == g_nHighlightNotSyncedState && (o != g_strStoredHighlightUnprocessedData && rw_storeHighlightData(), g_nHighlightNotSyncedState = null == g_strStoredHighlightUnprocessedData ? 0 : 1)
  } catch (n) {
    thLog(n.message)
  }
  "boolean" != typeof eba_ignore_hidden || eba_ignore_hidden || (g_bIgnoreHidden = t), "*" != g_strPersistNoteEditorId && "undefined" != typeof rw_unserialiseStickyNotes && rw_unserialiseStickyNotes()
}
if ($rw_barSSInit(), "undefined" == typeof g_aTextRange) var g_aTextRange = new Array;
if ("undefined" == typeof g_aHighlightColour) var g_aHighlightColour = new Array;
var g_showTHCHDialog = !1
  , g_eventSubScribeID, g_eventSubScribeCollectID, g_eventSubScribeVocabID, g_collectHighlightsTab, g_vocabTab, g_notifID = null
  , rw_SSPostCallback = function (p_strData) {
    try {
      eval(p_strData)
    } catch (err) {}
  }
  , g_nHighlightNotSyncedState = 0
  , g_strStoredHighlightData = null
  , g_strStoredHighlightUnprocessedData = null;
SpeechStream.Vocab = function () {
  this.m_bSentenceSelection = !1
}, SpeechStream.Vocab.prototype.fetchWords = function () {
  function e(e) {
    return e.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&")
  }
  for (var t = new Array, o = new Array, n = g_aTextRange.length, l = 0; l < n; l++) {
    var a;
    if (a = g_bIEOld ? g_aTextRange.slice(l, l + 1)
      .pop()
      .text : g_aTextRange[l].toString(), a.trimTH()
      .indexOf(" ") == -1) {
      if (o.push(g_aTextRange.slice(l, l + 1)
          .pop()), o.length >= g_nVocabLimit && g_nVocabLimit != -1) break
    } else this.m_bSentenceSelection = !0
  }
  g_bIEOld ? o.sort(sortBy) : o.sort(sortBySFF);
  for (var r, i = o.length, g = 0; g < i; g++) {
    r = g_bIEOld ? o.slice(g, g + 1)
      .pop()
      .text : o[g].toString(), r = r.trim();
    var s = ".,?!"
      , c = "g";
    s = e(s), r = r.replace(new RegExp("^[" + s + "]+|[" + s + "]+$", c), ""), t.push(r)
  }
  return t
}, SpeechStream.Vocab.prototype.generateRequestData = function () {
  var e = this.fetchWords();
  if (0 == e.length) return this.m_bSentenceSelection ? alert(textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("speechstream_msh_singlewordnoselection")) : alert(textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("speechstream_msh_noselection")), null;
  var t = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("vocab_notification")
    , o = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("vocab_notification_text")
    , n = {
      msg: '<div><div class="vl-notification"><div class="vl-notification-content"><div class="vl-notification-heading">' + t + '</div><div class="vl-notification-msg">' + o + "</div></div></div></div>"
      , sticky: !0
      , type: "success"
      , animIn: "fadeInRight"
      , animOut: "fadeOutDown"
    };
  g_notifID = window.notification(n), g_vocabTab = window.open("", "_blank");
  var l = textHelp.webreader.ConfigurationSingleton.getInst()
    .getConfiguration()
    , a = new Object;
  a.words = e, a.locale = l.locale, a.user = l.serversettings.user, a.translations = new Object, a.translations.docTitle = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("vocab_document_title"), a.translations.title = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("vocab_title"), a.translations.heading = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("vocab_word_heading"), a.translations.symbol = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("vocab_word_symbol"), a.translations.notes = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("vocab_word_notes"), a.translations.meaning = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("vocab_word_meaning"), a.locale = textHelp.webreader.UserSettingsSingleton.getInst()
    .getUserSettings()
    .language.services, g_eventSubScribeVocabID = textHelp.webreaderapi.EventBusSingleton.getInst()
    .subscribe("onVocabWeb", onVocabWeb, this), window.postMessage({
      method: "vocabWeb"
      , type: "1757FROM_PAGERW4G"
      , payload: a
    }, "*")
}, SpeechStream.Vocab.prototype.sendRequest = function () {
  this.generateRequestData()
};
