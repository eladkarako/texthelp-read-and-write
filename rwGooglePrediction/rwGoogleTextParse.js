function rwGoogleTextParse() {
  this.isHTML = !1, this.rootText = "", this.Lefttext = "", this.Leftwords = "", this.MultiLineText = !1, this.MultiLineCollection = "", this.ExpectLines = 0, this.RightText = "", this.Rightwords = "", this.CurrentWordBeginIndex = 0, this.CurrentWordEndIndex = 0, this.CurrentWord = "", this.CursorPosition = 0, this.CursorLinePosition = 0, this.currentChar = "", this.LastCharWord = "", this.ActiveLine = -1, this.CurrentPosition = 0, this.NextChar = "", this.Selection = void 0, this.setCaretPosition = function (e, t) {
    if (null != e)
      if (e.createTextRange) {
        var o = e.createTextRange();
        o.move("character", t), o.select()
      } else e.selectionStart ? (e.focus(), e.setSelectionRange(t, t)) : e.focus()
  }, this.getCaretPosition = function (e) {
    var t = 0;
    if ("undefined" != typeof window.getSelection) {
      var o = window.getSelection()
        .getRangeAt(0)
        , r = o.cloneRange();
      r.selectNodeContents(e), r.setEnd(o.endContainer, o.endOffset), t = r.toString()
        .length
    } else if ("undefined" != typeof document.selection && "Control" != document.selection.type) {
      var n = document.selection.createRange()
        , i = document.body.createTextRange();
      i.moveToElementText(e), i.setEndPoint("EndToEnd", n), t = i.text.length
    }
    return t
  }, this.InsertText = function (e, t) {
    if ("DIV" == e.tagName) {
      e.focus();
      var o = document.getElementById("rwPredictionPosition");
      this.setCaretPositionDiv(currentContextControlID), this.setSelectionRange(e, o.value, o.value), this.currentChar = this.getCurrentCharacter(), this.replaceSelectedText(t)
    } else this.CurrentPosition = e.selectionStart, this.setSelectionRange(e, this.CurrentPosition, this.CurrentPosition), this.currentChar = this.getCurrentCharacter(), this.setSelectionRange(e, this.CurrentPosition, this.CurrentPosition), this.replaceSelectedText(t), this.setSelectionRange(e, this.CurrentPosition, this.CurrentPosition), this.setCaretPosition(e, this.CurrentPosition);
    return !1
  }, this.setSelection = function () {
    window.getSelection && (this.Selection = window.getSelection())
      .modify
  }, this.parseText = function (e, t, o) {
    "DIV" == o.tagName || (this.CurrentPosition = o.selectionStart), this.setSelectionRange(o, this.CurrentPosition, this.CurrentPosition), this.currentChar = this.getCurrentCharacter();
    var r = !1;
    switch (this.currentChar.charCodeAt(0)) {
    case 46:
    case 33:
    case 63:
      this.Lefttext = "", r = !0
    }
    if (!r) {
      this.setSelectionRange(o, this.CurrentPosition, this.CurrentPosition);
      var n = this.getPreviousCharacter();
      13 == n.charCodeAt(0) ? this.Lefttext = "" : (this.setSelectionRange(o, this.CurrentPosition, this.CurrentPosition), this.Lefttext = this.GetSentence())
    }
    this.setSelectionRange(o, this.CurrentPosition, this.CurrentPosition), this.NextChar = this.getNextCharacter(), this.setSelectionRange(o, this.CurrentPosition, this.CurrentPosition), 32 == this.currentChar.charCodeAt(0) || 160 == this.currentChar.charCodeAt(0) ? this.CurrentWord = " " : this.CurrentWord = this.getWord(), this.setSelectionRange(o, this.CurrentPosition, this.CurrentPosition)
  }, this.GetSentence = function () {
    var e, t = "";
    if (window.getSelection && (e = window.getSelection())
      .modify) {
      var o = e.getRangeAt(0);
      e.collapseToStart(), 32 == this.currentChar.charCodeAt(0) || 160 == this.currentChar.charCodeAt(0) ? e.modify("extend", "backward", "sentenceboundary") : e.modify("extend", "backward", "sentenceboundary"), t = e.toString(), e.removeAllRanges(), e.addRange(o)
    } else if ((e = document.selection) && "Control" != e.type) {
      var r = e.createRange();
      r.collapse(!0), r.expand("sentence"), t = r.text
    }
    return t
  }, this.getCurrentCharacter = function () {
    var e, t = "";
    if (window.getSelection && (e = window.getSelection())
      .modify) {
      var o = e.getRangeAt(0);
      e.collapseToStart(), e.modify("move", "backward", "character"), e.modify("extend", "forward", "character"), t = e.toString(), e.removeAllRanges(), e.addRange(o)
    } else if ((e = document.selection) && "Control" != e.type) {
      var r = e.createRange();
      r.collapse(!0), r.expand("word"), t = r.text
    }
    return t
  }, this.getPreviousCharacter = function () {
    var e, t = "";
    if (window.getSelection && (e = window.getSelection())
      .modify) {
      var o = e.getRangeAt(0);
      e.collapseToStart(), e.modify("move", "backward", "character"), e.modify("move", "backward", "character"), e.modify("extend", "forward", "character"), t = e.toString(), e.removeAllRanges(), e.addRange(o)
    } else if ((e = document.selection) && "Control" != e.type) {
      var r = e.createRange();
      r.collapse(!0), r.expand("word"), t = r.text
    }
    return t
  }, this.getNextCharacter = function () {
    var e, t = "";
    if (window.getSelection && (e = window.getSelection())
      .modify) {
      var o = e.getRangeAt(0);
      e.collapseToStart(), e.modify("move", "forward", "character"), e.modify("extend", "forward", "character"), t = e.toString(), e.removeAllRanges(), e.addRange(o)
    } else if ((e = document.selection) && "Control" != e.type) {
      var r = e.createRange();
      r.collapse(!0), r.expand("word"), t = r.text
    }
    return t
  }, this.getNewPosition = function () {
    var e, t = "";
    if (window.getSelection && (e = window.getSelection())
      .modify) {
      var o = e.getRangeAt(0);
      e.collapseToStart(), e.modify("move", "forward", "word"), t = e.toString(), e.removeAllRanges(), e.addRange(o)
    } else if ((e = document.selection) && "Control" != e.type) {
      var r = e.createRange();
      r.collapse(!0), r.expand("word"), t = r.text
    }
    return t
  }, this.MoveToEnd = function () {
    var e, t = "";
    if (window.getSelection && (e = window.getSelection())
      .modify) {
      var o = e.getRangeAt(0);
      e.collapseToStart(), e.modify("move", "forward", "word"), e.removeAllRanges(), e.addRange(o)
    } else if ((e = document.selection) && "Control" != e.type) {
      var r = e.createRange();
      r.collapse(!0), r.expand("word"), t = r.text
    }
    return t
  }, this.getWord = function () {
    var e, t = "";
    if (window.getSelection && (e = window.getSelection())
      .modify) {
      var o = e.getRangeAt(0);
      e.collapseToStart(), e.modify("move", "backward", "word"), e.modify("extend", "forward", "word"), t = e.toString(), e.removeAllRanges(), e.addRange(o)
    } else if ((e = document.selection) && "Control" != e.type) {
      var r = e.createRange();
      r.collapse(!0), r.expand("word"), t = r.text
    }
    return t
  }, this.setSelectionRange = function (e, t, o) {
    if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, o);
    else if (e.createTextRange) {
      var r = e.createTextRange();
      r.collapse(!0), r.moveEnd("character", o), r.moveStart("character", t), r.select()
    } else e.focus()
  }, this.setCaretPositionDiv = function (e, t) {
    var o = window.getSelection();
    o.collapseToStart();
    var r = document.getElementById("rwPredictionPosition")
      , n = r.value;
    void 0 != t && (n = t);
    var a = e;
    a.focus();
    var c = a.firstChild
      , d = 0
      , s = n
      , l = !1;
    for (i = 0; i < a.childNodes.length; i++) d += a.childNodes[i].nodeValue.length, n <= d && 0 == l ? (c = a.childNodes[i], l = !0) : s -= a.childNodes[i].nodeValue.length;
    var h = document.createRange();
    h.setStart(c, s), h.setEnd(c, s), o = window.getSelection(), o.removeAllRanges(), o.addRange(h)
  }, this.replaceSelectedText = function (e) {
    var t, o;
    e += " ";
    var r = 0;
    if (window.getSelection) {
      t = window.getSelection();
      var n = document.activeElement;
      if ("TEXTAREA" == n.nodeName || "INPUT" == n.nodeName && "text" == n.type.toLowerCase()) {
        if (this.CurrentPosition > 0) switch (this.currentChar.charCodeAt(0)) {
        case 46:
        case 33:
        case 63:
          e = " " + e;
        case 32:
        case 160:
          break;
        case 38:
          t.collapseToStart(), t.modify("move", "backward", "character"), t.modify("move", "backward", "character"), t.modify("extend", "forward", "character");
          var i = t.toString();
          " " == i ? (t.modify("move", "forward", "character"), t.modify("extend", "forward", "character")) : (t.modify("move", "backward", "word"), t.modify("extend", "forward", "word"));
          break;
        case 45:
          t.collapseToStart(), t.modify("move", "backward", "word"), t.modify("extend", "forward", "word"), t.modify("extend", "forward", "word");
          break;
        default:
          t.collapseToStart(), t.modify("move", "backward", "word"), t.modify("move", "backward", "character"), t.modify("extend", "forward", "character");
          var i = t.toString();
          if ("-" == i ? (t.modify("extend", "backward", "character"), t.modify("move", "forward", "character"), t.modify("move", "backward", "word"), t.modify("extend", "forward", "word"), t.modify("extend", "forward", "word")) : 32 == i.charCodeAt(0) && t.modify("move", "forward", "character"), t.modify("extend", "forward", "word"), i = t.toString(), "-" == i.substr(i.length - 1, 1) && t.modify("extend", "forward", "word"), i = t.toString(), navigator.appVersion.indexOf("Win") != -1) {
            " " == i.substr(i.length - 1, 1) && (t.modify("extend", "backward", "character"), e = e.trim(), r++), i = t.toString();
            var a = /^[0-9a-zA-Z]+$/;
            i.substr(i.length - 1, 1)
              .match(a) || (t.modify("extend", "backward", "character"), e = e.trim(), r++)
          }
        }
        var c = n.value
          , d = n.selectionStart
          , s = n.selectionEnd;
        if (navigator.appVersion.indexOf("Win") != -1);
        else switch (c.slice(s)
          .substr(0, 1)) {
        case " ":
          e = e.trim(), r++;
          break;
        case ";":
        case ":":
        case "!":
        case ".":
          e = e.trim(), r++, r++
        }
        n.value = c.slice(0, d) + e + c.slice(s), this.CurrentPosition = d + e.length + r
      } else {
        var t = window.getSelection();
        if (this.setCaretPositionDiv(n), 32 == this.currentChar.charCodeAt(0) || 160 == this.currentChar.charCodeAt(0));
        else {
          t.modify("move", "backward", "word"), t.modify("move", "backward", "character"), t.modify("extend", "forward", "character");
          var i = t.toString();
          "-" == i ? (t.modify("extend", "backward", "character"), t.modify("move", "forward", "character"), t.modify("move", "backward", "word"), t.modify("extend", "forward", "word"), t.modify("extend", "forward", "word")) : 32 == i.charCodeAt(0) && t.modify("move", "forward", "character"), t.modify("extend", "forward", "word")
        }
        t.rangeCount ? (o = t.getRangeAt(0), o.deleteContents(), o.insertNode(document.createTextNode(e))) : t.deleteFromDocument();
        var c = n.value
          , d = n.selectionStart
          , s = n.selectionEnd;
        n.value = c.slice(0, d) + e + c.slice(s), setCaretPositionDiv(n, d + e.length)
      }
    } else document.selection && document.selection.createRange && (o = document.selection.createRange(), o.text = e)
  }, this.getCaretCharacterOffsetWithin = function (e) {
    var t, o = 0
      , r = e.ownerDocument || e.document
      , n = r.defaultView || r.parentWindow;
    if ("undefined" != typeof n.getSelection) {
      if (t = n.getSelection(), t.rangeCount > 0) {
        var i = n.getSelection()
          .getRangeAt(0)
          , a = i.cloneRange();
        a.selectNodeContents(e), a.setEnd(i.endContainer, i.endOffset), o = a.toString()
          .length
      }
    } else if ((t = r.selection) && "Control" != t.type) {
      var c = t.createRange()
        , d = r.body.createTextRange();
      d.moveToElementText(e), d.setEndPoint("EndToEnd", c), o = d.text.length
    }
    return o
  }
}
