! function e(t, n, r) {
  function a(o, l) {
    if (!n[o]) {
      if (!t[o]) {
        var s = "function" == typeof require && require;
        if (!l && s) return s(o, !0);
        if (i) return i(o, !0);
        var u = new Error("Cannot find module '" + o + "'");
        throw u.code = "MODULE_NOT_FOUND", u
      }
      var c = n[o] = {
        exports: {}
      };
      t[o][0].call(c.exports, function (e) {
        var n = t[o][1][e];
        return a(n ? n : e)
      }, c, c.exports, e, t, n, r)
    }
    return n[o].exports
  }
  for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) a(r[o]);
  return a
}({
  1: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.HIGHLIGHT_TAG = "texthelp-highlight-span", n.WRAPPER_TAG = "texthelp-wrapper-span", n.THDomRange_ERROR = -1, n.THDomRange_TARGET_SAME = 0, n.THDomRange_AFTER_TARGET = 1, n.THDomRange_BEFORE_TARGET = 2, n.THDomRange_TARGET_INSIDE = 3, n.THDomRange_TARGET_INCLUDES_THIS = 4, n.THDomRange_OVERLAPS_END_OF_TARGET = 5, n.THDomRange_OVERLAPS_START_OF_TARGET = 6, n.THDomRange_TARGET_INCLUDES_THIS_AT_START = 7, n.THDomRange_TARGET_INCLUDES_THIS_AT_END = 8, n.SPEECH_RANGE_COLOUR = "colour:#rrggbb; background:#FFFF00", n.SPEECH_WORD_COLOUR = "color:#FFFFFF; background:#0000FF; padding: 2px; margin: -2px; border-radius: 4px; text-shadow: 0 3px 8px #2A2A2A"
  }, {}]
  , 2: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    n.Attribute = function () {
      function e() {
        r(this, e)
      }
      return a(e, [{
        key: "rw_getAttribute"
        , value: function (e, t) {
          if (null != e && 1 == e.nodeType && "string" == typeof t) {
            var n = null;
            return 0 != t.indexOf("data-texthelp-") && (n = e.getAttribute("data-texthelp-" + t)), null == n && 0 != t.indexOf("data-") && (n = e.getAttribute("data-" + t)), null == n && (n = e.getAttribute(t)), n
          }
          return null
        }
      }, {
        key: "rw_setAttribute"
        , value: function (e, t, n) {
          null != e && 1 == e.nodeType && "string" == typeof t && "string" == typeof n && (0 != t.indexOf("data-") && "style" != t && (t = "data-" + t), e.setAttribute(t, n))
        }
      }, {
        key: "rw_removeAttribute"
        , value: function (e, t) {
          if (null != e && 1 == e.nodeType && "string" == typeof t) {
            if (0 != t.indexOf("data-") && null != e.getAttribute("data-" + t)) return void e.removeAttribute("data-" + t);
            null != e.getAttribute(t) && e.removeAttribute(t)
          }
        }
      }]), e
    }()
  }, {}]
  , 3: [function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t["default"] = e, t
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.DomNavigation = void 0;
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , o = e("src/SpeechStream/Utilities/Utilities")
      , l = e("src/SpeechStream/DOM/SSDOM")
      , s = e("src/SpeechStream/DOM/Attribute")
      , u = e("src/SpeechStream/MathJax/MathSpeak")
      , c = (e("src/SpeechStream/THCaret"), e("src/SpeechStream/THCaretRange"), e("src/Constants/Constants"))
      , h = r(c);
    n.DomNavigation = function () {
      function e() {
        a(this, e)
      }
      return i(e, [{
        key: "getActualNextNodeIgnoreChildren"
        , value: function (e, t) {
          if (null == e || e == t) return null;
          if (null != e.nextSibling) return e.nextSibling;
          for (var n = e; null != n;) {
            if (n = n.parentNode, t == n) return null;
            if (null != n.nextSibling) return n.nextSibling
          }
          return null
        }
      }, {
        key: "getActualNextNode"
        , value: function (e, t) {
          if (null == e) return null;
          if (null != e.firstChild) return e.firstChild;
          if (e == t) return null;
          if (null != e.nextSibling) return e.nextSibling;
          for (var n = e; null != n;) {
            if (n = n.parentNode, t == n) return null;
            if (null != n.nextSibling) return n.nextSibling
          }
          return null
        }
      }, {
        key: "getNodeFromPosition"
        , value: function (e, t) {
          var n = new s.Attribute
            , r = e;
          if (t.lastIndexOf("*") > -1) {
            var a = t.lastIndexOf("*");
            t = t.substring(a + 1)
          }
          var i, o = t.split("~")
            , l = o.length;
          for (i = l - 2; i > -1; i--) {
            if (r = r.firstChild, null == r) return null;
            var u;
            u = 0 == o[i].length ? 0 : parseInt(o[i], 10);
            for (var c = !1, f = 3 == r.nodeType || 1 == r.nodeType && r.tagName.toLowerCase() == h.HIGHLIGHT_TAG && null != n.rw_getAttribute(r, "rwstate"); u > 0;) {
              if (r = r.nextSibling, null == r) return null;
              c = 3 == r.nodeType || 1 == r.nodeType && r.tagName.toLowerCase() == h.HIGHLIGHT_TAG && null != n.rw_getAttribute(r, "rwstate"), c && f || (--u, f = c)
            }
          }
          return r
        }
      }, {
        key: "getTextFromNode"
        , value: function (e) {
          var t = new l.SSDOM
            , n = new s.Attribute
            , r = "";
          if (t.isInvalidNode(e) || t.isIgnored(e)) return r;
          if (3 == e.nodeType) "textarea" != e.parentNode.tagName.toLowerCase() && (r = e.nodeValue);
          else if (1 == e.nodeType) {
            var a = e.tagName.toLowerCase();
            if ("img" == a) {
              var i = n.rw_getAttribute(e, "msg");
              null != i && i.trimTH()
                .length > 0 && (r = " " + i.trimTH() + " ")
            } else if ("span" == a) {
              var i = n.rw_getAttribute(e, "pron");
              if (null != i && i.trimTH()
                .length > 0 && (r = i.trimTH()), i = n.rw_getAttribute(e, "chunk"), null != i && "1" == i && (r = e.innerHTML), i = e.isMathJax) {
                var c = new u.MathSpeak;
                r = c.getTextFromMathJax(e)
              }
            } else if ("acronym" == a || "abbr" == a) {
              var i = n.rw_getAttribute(e, "pron")
                , h = new o.Utilities;
              null != i && h.trim(i)
                .length > 0 ? r = h.trim(i) : (i = e.getAttribute("title"), null != i && h.trim(i)
                  .length > 0 && (r = h.trim(i)))
            } else "math" == a && (r = this.getTextFromMathMl(e))
          }
          return r
        }
      }, {
        key: "getNextNodeAllowMoveToChild"
        , value: function (e, t, n) {
          return this.getNextNodeImpl(e, t, n, !0, !1)
        }
      }, {
        key: "getNextNodeIgnoreChildren"
        , value: function (e, t, n) {
          return this.getNextNodeImpl(e, t, n, !1, !0)
        }
      }, {
        key: "getLastChildTextNode"
        , value: function (e, t) {
          var n = new s.Attribute
            , r = new l.SSDOM;
          if (null == e || null == e.lastChild || r.isInvalidNode(e)) return e;
          if (r.isSpecialCaseWithIgnoredContent(e)) return e;
          for (var a = e.lastChild; null != a;) {
            var i = r.isIgnored(e);
            if (!i && 3 == a.nodeType) return a;
            if (!i && 1 == a.nodeType && t && "img" == a.tagName.toLowerCase() && null != n.rw_getAttribute(a, "msg") && n.rw_getAttribute(a, "msg")
              .length > 0) return a;
            if (r.isInvalidNode(a) || null == a.lastChild || r.isSpecialCaseWithIgnoredContent(e)) {
              var o;
              return o = t ? this.getPreviousTextNode(a, !1, e) : this.getPreviousTextNodeNoImg(a, !1, e, !0)
            }
            a = a.lastChild
          }
          return e
        }
      }, {
        key: "getPreviousTextNodeNoImg"
        , value: function (e, t, n, r) {
          for (var a = r ? this.getPreviousTextNode(e, t, n) : this.getPreviousTextNodeNoBlank(e, t, n); null != a && 3 != a.nodeType && a != n && "math" != a.tagName.toLowerCase() && !a.isMathJax;) a = r ? this.getPreviousTextNode(a, t, n) : this.getPreviousTextNodeNoBlank(a, t, n);
          return a
        }
      }, {
        key: "getPreviousTextNodeNoBlank"
        , value: function (e, t, n) {
          for (var r = new s.Attribute, a = new l.SSDOM, i = e; null != i && i != n;)
            if (i = this.getPreviousTextNode(i, t, n), null != i) {
              var o;
              if (3 == i.nodeType) o = i.nodeValue.trimTH();
              else if ("img" == i.tagName.toLowerCase() && null != r.rw_getAttribute(i, "msg")) o = r.rw_getAttribute(i, "msg")
                .trimTH();
              else if ("math" == i.tagName.toLowerCase()) o = this.getTextFromMathMl(i);
              else if (i.isMathJax) {
                var c = new u.MathSpeak;
                o = c.getTextFromMathJax(i)
              }
              if (a.rw_isWordSpeakable(o)) return i
            }
          return null
        }
      }, {
        key: "getPreviousTextNode"
        , value: function (e, t, n) {
          for (var r = new s.Attribute, a = e, i = !1; null != a && a != n;)
            if (a = this.getPreviousNode(a, t, n), null != a) {
              if (3 == a.nodeType && "textarea" != a.parentNode.tagName.toLowerCase() && a.nodeValue.length > 0 && (i = !0), 1 == a.nodeType && "math" == a.tagName.toLowerCase()) i = !0;
              else if (1 == a.nodeType && a.isMathJax) i = !0;
              else if (1 == a.nodeType && "img" == a.tagName.toLowerCase()) {
                var o = r.rw_getAttribute(a, "msg");
                null != o && o.length > 0 && (i = !0)
              }
              if (i) return a
            }
          return null
        }
      }, {
        key: "getPreviousNode"
        , value: function (e, t, n) {
          var r = new l.SSDOM;
          if (null == e || e == n) return null;
          var a = e;
          if (null != a.previousSibling) {
            if (a = a.previousSibling, t && !r.isStyleNode(a)) return null;
            if (null != a && r.isInvalidNode(a)) {
              if (n == a) return null;
              a = this.getPreviousNode(a, t, n)
            } else {
              for (; null != a && null != a.lastChild && !r.isSpecialCaseWithIgnoredContent(a);)
                if (a = a.lastChild, t && (r.isStyleNode(a) || (a = null)), null != a && r.isInvalidNode(a)) {
                  if (n == a) return null;
                  a = this.getPreviousNode(a, t, n);
                  break
                }
              if (null != a && r.isIgnored(a)) {
                if (a == n) return null;
                a = this.getPreviousNode(a, t, n)
              }
            }
          } else if (a = a.parentNode, t && null != a && (r.isStyleNode(a) || (a = null)), null != a && r.isIgnored(a)) {
            if (a == n) return null;
            a = this.getPreviousNode(a, t, n)
          }
          return a
        }
      }, {
        key: "getFirstChildTextNode"
        , value: function (e, t) {
          var n = new l.SSDOM
            , r = new s.Attribute;
          if (null == e || null == e.firstChild || n.isInvalidNode(e)) return e;
          if (n.isSpecialCaseWithIgnoredContent(e)) return e;
          var a = e.firstChild;
          return 3 == a.nodeType ? a : 1 == a.nodeType && t && "img" == a.tagName.toLowerCase() && null != r.rw_getAttribute(a, "msg") && r.rw_getAttribute(a, "msg")
            .length > 0 ? a : t ? this.getNextTextNode(a, !1, e) : this.getNextTextNodeNoImg(a, !1, e, !0)
        }
      }, {
        key: "getNextTextNodeNoImg"
        , value: function (e, t, n, r) {
          for (var a = r ? this.getNextTextNode(e, t, n) : this.getNextTextNodeNoBlank(e, t, n); null != a && 3 != a.nodeType && a != n && "math" != a.tagName.toLowerCase() && !a.isMathJax;) a = r ? this.getNextTextNode(a, t, n) : this.getNextTextNodeNoBlank(a, t, n);
          return a
        }
      }, {
        key: "getNextTextNodeNoBlank"
        , value: function (e, t, n) {
          for (var r = new s.Attribute, a = new l.SSDOM, i = e; null != i && i != n;)
            if (i = this.getNextTextNode(i, t, n), null != i) {
              var o;
              if (3 == i.nodeType) o = i.nodeValue.trimTH();
              else if ("img" == i.tagName.toLowerCase() && null != r.rw_getAttribute(i, "msg")) o = r.rw_getAttribute(i, "msg")
                .trimTH();
              else if ("math" == i.tagName.toLowerCase()) o = this.getTextFromMathMl(i);
              else if (i.isMathJax) {
                var c = new u.MathSpeak;
                o = c.getTextFromMathJax(i)
              }
              if (a.rw_isWordSpeakable(o)) return i
            }
          return null
        }
      }, {
        key: "getTextFromMathMl"
        , value: function (e) {
          var t = new l.SSDOM;
          if (null != e.previousSibling || null != e.nextSibling) {
            var n = t.createWrapperElement();
            e.parentNode.replaceChild(n, e), n.appendChild(e)
          }
          var r = !1;
          if (r) {
            var a = e.outerHTML;
            if (null == a) return "";
            if (a.indexOf("<?import namespace") > -1) {
              var i = a.indexOf("/>");
              i > -1 && (a = a.substring(i + 2), a = a.replace(/m:/gi, ""))
            }
            return a
          }
          var a = e.parentNode.innerHTML;
          return null != a && a.length > 0 ? a : ""
        }
      }, {
        key: "getNextTextNode"
        , value: function (e, t, n) {
          for (var r = new s.Attribute, a = e, i = !1; null != a && a != n;)
            if (a = this.getNextNode(a, t, n), null != a) {
              if (3 == a.nodeType && "textarea" != a.parentNode.tagName.toLowerCase() && a.nodeValue.length > 0 && (i = !0), 1 == a.nodeType && "math" == a.tagName.toLowerCase()) i = !0;
              else if (1 == a.nodeType && a.isMathJax) i = !0;
              else if (1 == a.nodeType && "img" == a.tagName.toLowerCase()) {
                var o = r.rw_getAttribute(a, "msg");
                null != o && o.length > 0 && (i = !0)
              }
              if (i) return a
            }
          return null
        }
      }, {
        key: "getNextNode"
        , value: function (e, t, n) {
          return this.getNextNodeImpl(e, t, n, !1, !1)
        }
      }, {
        key: "getNextNodeImpl"
        , value: function (e, t, n, r, a) {
          var i = new l.SSDOM;
          if (null == e || e == n && (a || !r)) return null;
          var o = i.isInvalidNode(e);
          i.isSpecialCaseWithIgnoredContent(e) && (o = !0);
          var s = null;
          if (e == n && r) {
            if (o || null == e.firstChild) return null;
            s = e.firstChild
          } else if (s = e, null == s.firstChild || o || a) {
            if (null != s.firstChild && a && null != n && i.checkIfElementInsideElement(n, s)) return null;
            if (null != s.nextSibling) s = s.nextSibling;
            else {
              for (; null != s && null == s.nextSibling && (s = s.parentNode, t && (i.isStyleNode(s) || (s = null)), n != s););
              null != s && n != s && (s = s.nextSibling)
            }
          } else s = s.firstChild;
          return null != s && t && (i.isStyleNode(s) || (s = null)), null != s && (i.isInvalidNode(s) ? s = this.getNextNodeImpl(s, t, n, !1, !0) : i.isIgnored(s) && (s = this.getNextNodeImpl(s, t, n, !1, !1)), r && s == n && e == n && (s = null)), s
        }
      }]), e
    }()
  }, {
    "src/Constants/Constants": 1
    , "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/MathJax/MathSpeak": 16
    , "src/SpeechStream/THCaret": 27
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 4: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.DomSentences = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/Utilities/Utilities")
      , o = e("src/SpeechStream/DOM/SSDOM")
      , l = e("src/SpeechStream/DOM/Attribute")
      , s = e("src/SpeechStream/DOM/DomNavigation")
      , u = e("src/SpeechStream/THCaret")
      , c = e("src/SpeechStream/THCaretRange");
    n.DomSentences = function () {
      function e() {
        r(this, e)
      }
      return a(e, [{
        key: "getSentenceFromPoint"
        , value: function (e) {
          var t = this.getSentenceBreakToRight(e)
            , n = this.getSentenceBreakToLeft(t);
          if (null == n || null == t) return null;
          var r = new c.THCaretRange;
          return r.setCaretRange(n, t), r
        }
      }, {
        key: "getNextSentence"
        , value: function (e, t) {
          var n = new s.DomNavigation
            , r = new o.SSDOM;
          if (null == e) return null;
          "undefined" == typeof t && (t = null);
          var a = e.rightCaret.node
            , i = e.rightCaret.offset;
          if (r.rw_checkForHiddenParent(e.rightCaret.node)) return null;
          e.rightCaret.isSpecialCase() && (a = n.getNextNodeIgnoreChildren(a, !1, t), i = 0);
          for (var l, h; null != a;) {
            if (3 == a.nodeType && i < a.nodeValue.length) {
              if (l = this.getSentenceBreakToRight(new u.THCaret(a, i, (!1)), t), null == l) return null;
              if (l.node == a && l.offset == i) {
                var f = n.getNextTextNodeNoBlank(a, !1, t);
                if (null == f) return null;
                l = this.getSentenceBreakToRight(new u.THCaret(f, 0, (!1)), t)
              }
            } else {
              var f = n.getNextTextNodeNoBlank(a, !1, t);
              if (null == f) return null;
              l = this.getSentenceBreakToRight(new u.THCaret(f, 0, (!1)), t)
            }
            if (h = this.getSentenceBreakToLeft(l, null), null == h) return null;
            if (e.leftCaret.node != h.node || e.leftCaret.offset != h.offset) {
              var g = new c.THCaretRange;
              if (g.setCaretRange(h, l), this.checkSentence(g) && r.rw_caretRangeIsSpeakable(g)) return g
            }
            if (a = l.node, 3 == a.nodeType) {
              var d = a.nodeValue.replace(/[\x21\x3f\x3a]/g, ".")
                , p = d.indexOf(".", l.offset + 1);
              i = p == -1 ? d.length : p
            }
          }
          return null
        }
      }, {
        key: "checkSentence"
        , value: function (e) {
          for (var t = new l.Attribute, n = "rwTHcomp", r = e.leftCaret.node, a = r.ownerDocument.body; null != r && r != a;) {
            if (1 == r.nodeType) {
              if ("rwDictDefin" == r.className || "rwPopupContent" == r.className || "rwToolbarBarCollect" == r.className) break;
              if (null != t.rw_getAttribute(r, n)) return !1
            }
            r = r.parentNode
          }
          var i = e.rightCaret.node;
          if (i != r)
            for (; null != i && i != a && "rwDictDefin" != i.className && "rwPopupContent" != i.className && "rwToolbarBarCollect" != i.className;) {
              if (1 == i.nodeType && null != t.rw_getAttribute(i, n)) return !1;
              i = i.parentNode
            }
          return !0
        }
      }, {
        key: "getPreviousSentence"
        , value: function (e, t) {
          var n = new s.DomNavigation
            , r = new o.SSDOM;
          "undefined" == typeof t && (t = null);
          for (var a, i, l = e.leftCaret.node, h = e.leftCaret.offset; null != l;) {
            if (3 == l.nodeType) {
              var f, g = l.nodeValue.replace(/[\x21\x3f\x3a]/g, ".");
              for (f = h > 0 ? g.lastIndexOf(".", h) : 0 == h ? -1 : g.lastIndexOf("."); f > -1;) {
                if (h = f, i = this.getSentenceBreakToRight(new u.THCaret(l, h, (!0)), t), null == i) return null;
                if (i.node != e.rightCaret.node || i.offset != e.rightCaret.offset) {
                  if (a = this.getSentenceBreakToLeft(i, t), null == a) return null;
                  var d = new c.THCaretRange;
                  if (d.setCaretRange(a, i), this.checkSentence(d) && r.rw_caretRangeIsSpeakable(d)) return d
                }
                f = 0 == f ? -1 : g.lastIndexOf(".", f - 1)
              }
            }
            if (h = -1, tmpNode = n.getPreviousTextNodeNoImg(l, !0, t, !1), null != tmpNode) l = tmpNode;
            else if (l = n.getPreviousTextNodeNoBlank(l, !1, t), null != l) {
              if (i = 3 == l.nodeType ? this.getSentenceBreakToRight(new u.THCaret(l, l.nodeValue.length, (!1)), t) : this.getSentenceBreakToRight(new u.THCaret(l, 0, (!1)), t), null == i) return null;
              if (i.node != e.rightCaret.node || i.offset != e.rightCaret.offset) return a = this.getSentenceBreakToLeft(i, t), null == a ? null : new c.THCaretRange(a, i)
            }
          }
          return null
        }
      }, {
        key: "getSentenceBreakToLeft"
        , value: function (e, t) {
          var n = new s.DomNavigation
            , r = new o.SSDOM;
          if ("undefined" == typeof t && (t = null), null == e || null == e.node) return null;
          var a = e.node
            , l = e.offset;
          if (1 == e.node.nodeType && "math" == e.node.tagName.toLowerCase()) return e;
          if (1 == e.node.nodeType && e.node.isMathJax) return e;
          if (e.forwardBias) 3 == a.nodeType && l == a.nodeValue.length && (a = n.getNextTextNode(a, !0, t), l = 0, null == a && (a = e.node, l = e.offset));
          else if (l > 0) --l;
          else {
            if (a = n.getPreviousTextNode(a, !0, t), null == a) return e;
            if (3 == a.nodeType) l = a.nodeValue.length - 1;
            else {
              if (l = 0, "math" == a.tagName.toLowerCase()) return e;
              if (a.isMathJax) return e
            }
          }
          if (3 == a.nodeType) {
            var c = a.nodeValue.charAt(l);
            if ("." == c || "!" == c || "?" == c || ":" == c)
              if (l > 0) --l;
              else {
                if (a = n.getPreviousTextNode(a, !0, t), null == a) return e;
                if (3 == a.nodeType) l = a.nodeValue.length - 1;
                else {
                  if (l = 0, "math" == a.tagName.toLowerCase()) return e;
                  if (a.isMathJax) return e
                }
              }
          }
          for (var h = a, f = l, g = a, d = l, p = !1, v = " "; !p;) {
            if (r.isSpecialCaseNested(g)) {
              if (g = r.checkForSpecialParent(g), "math" == g.tagName.toLowerCase()) {
                p = !0;
                break
              }
              if (g.isMathJax) {
                p = !0;
                break
              }
              h = g, f = 0
            } else if (3 == g.nodeType) {
              var m = g.nodeValue;
              if (m.length > 0) {
                d == -1 && (d = m.length), m = m.replace(/[\x21\x3f\x3a]/g, ".");
                for (var S = m.lastIndexOf(".", d); S > -1;) {
                  if (r.rw_isFullStop(m, S, g)) {
                    if (S < m.length - 1) {
                      h = g, f = S + 1, p = !0;
                      break
                    }
                    if (!r.rw_isTextChar(v)) {
                      p = !0;
                      break
                    }
                  }
                  S = 0 == S ? -1 : m.lastIndexOf(".", S - 1)
                }
                if (p) break;
                var y = new i.Utilities;
                y.trim(m)
                  .length > 0 && (h = g, f = 0), v = m.charAt(0)
              }
            }
            if (g = n.getPreviousNode(g, !0, t), d = -1, null == g) {
              p = !0;
              break
            }
            if (3 == g.nodeType && r.isSpecialCaseNested(g) && (g = r.checkForSpecialParent(g), null == g)) {
              p = !0;
              break
            }
          }
          if (3 == h.nodeType) {
            var m = h.nodeValue;
            if (f < m.length)
              for (; f < m.length && r.rw_isWhiteSpace(m.charAt(f));) ++f
          }
          return new u.THCaret(h, f, (!0))
        }
      }, {
        key: "getSentenceBreakToRight"
        , value: function (e, t) {
          var n = new s.DomNavigation
            , r = new o.SSDOM;
          if ("undefined" == typeof t && (t = null), null == e || null == e.node) return null;
          for (var a = e.node, l = e.offset, c = a, h = l, f = !1, g = " "; !f;) {
            if (r.isSpecialCaseNested(a)) {
              if (a = r.checkForSpecialParent(a), "math" == a.tagName.toLowerCase()) {
                f = !0;
                break
              }
              if (a.isMathJax) {
                f = !0;
                break
              }
              c = a, h = 0, a = n.getNextNodeIgnoreChildren(a, !0, t)
            } else if (3 == a.nodeType) {
              var d = a.nodeValue;
              if (d.length > 0) {
                if ("." == g) {
                  var p = d.charAt(l);
                  if (!r.rw_isTextChar(p)) {
                    f = !0;
                    break
                  }
                }
                d = d.replace(/[\x21\x3f\x3a]/g, ".");
                for (var v = d.indexOf(".", l); v > -1;) {
                  if (r.rw_isFullStop(d, v, a)) {
                    v < d.length - 1 && (c = a, h = v + 1, f = !0);
                    break
                  }
                  l = v + 1, v = d.indexOf(".", l)
                }
                if (f) break;
                var m = new i.Utilities;
                m.trim(d)
                  .length > 0 && (c = a, h = d.length), g = d.charAt(d.length - 1), "." == g && (r.rw_isFullStop(d, d.length - 1, a) || (g = " "))
              }
              a = n.getNextNode(a, !0, t)
            } else a = n.getNextNode(a, !0, t);
            if (l = 0, null == a) {
              f = !0;
              break
            }
          }
          if (3 == c.nodeType) {
            var d = c.nodeValue;
            if (h > 0 && h <= d.length)
              for (; h > 0 && r.rw_isWhiteSpace(d.charAt(h - 1));) --h
          }
          return new u.THCaret(c, h, (!1))
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/DomNavigation": 3
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/THCaret": 27
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 5: [function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t["default"] = e, t
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.SSDOM = void 0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
      }
      , o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , l = e("src/SpeechStream/Utilities/Utilities")
      , s = e("src/SpeechStream/THCaret")
      , u = e("src/SpeechStream/THCaretRange")
      , c = e("src/SpeechStream/THRange")
      , h = e("src/SpeechStream/THDomRefPt")
      , f = e("src/SpeechStream/MathJax/MathSpeak")
      , g = e("src/SpeechStream/DOM/DomNavigation")
      , d = e("src/SpeechStream/DOM/Attribute")
      , p = e("src/SpeechStream/DOM/DomSentences")
      , v = e("src/Constants/Constants")
      , m = r(v);
    n.SSDOM = function () {
      function e() {
        a(this, e)
      }
      return o(e, [{
        key: "checkForSpecialParent"
        , value: function (e) {
          if (null != e)
            for (var t = this.getBody(e), n = e; null != n && n != t;) {
              if (this.isSpecialCase(n)) return n;
              n = n.parentNode
            }
          return null
        }
      }, {
        key: "getBody"
        , value: function (e) {
          return e.document ? e.document.body : e.ownerDocument.body
        }
      }, {
        key: "isSpecialCase"
        , value: function (e) {
          var t = new d.Attribute;
          if (null == e) return !1;
          if (1 == e.nodeType) {
            var n = e.tagName.toLowerCase();
            if (n == m.HIGHLIGHT_TAG || "span" == n) {
              var r = t.rw_getAttribute(e, "pron");
              if (null != r) return !0;
              if (r = t.rw_getAttribute(e, "chunk"), null != r) return !0;
              if (r = e.isMathJax, null != r && r) return !0
            } else if ("acronym" == n || "abbr" == n) {
              var r = e.getAttribute("title");
              if (null != r) return !0
            } else {
              if ("chunk" == n) return !0;
              if ("img" == n) {
                var r = t.rw_getAttribute(e, "msg");
                if (null != r) return !0
              } else if ("math" == n) return !0
            }
          }
          return !1
        }
      }, {
        key: "isSpecialCaseHighlightable"
        , value: function (e) {
          var t = new d.Attribute;
          if (1 == e.nodeType) {
            var n = e.tagName.toLowerCase();
            if ("span" == n) {
              var r = t.rw_getAttribute(e, "pron");
              if (null != r) return !0;
              if (r = t.rw_getAttribute(e, "chunk"), null != r && "1" == r) return !0;
              if (r = e.isMathJax, null != r && r) {
                var a = new f.MathSpeak
                  , i = a.getTextFromMathJax(e);
                if (i.length > 0) return !0
              }
            } else if ("acronym" == n || "abbr" == n) {
              var r = e.getAttribute("title");
              if (null != r) return !0
            } else if ("math" == n) return !1
          }
          return !1
        }
      }, {
        key: "checkIfElementInsideElement"
        , value: function (e, t) {
          if (null == e || null == t) return !1;
          for (var n = e.parentNode; null != n;) {
            if (n == t) return !0;
            n = n.parentNode
          }
          return !1
        }
      }, {
        key: "isSpecialCaseWithIgnoredContent"
        , value: function (e) {
          var t = new d.Attribute;
          if (null == e) return !1;
          if (1 == e.nodeType) {
            var n = e.tagName.toLowerCase();
            if ("span" == n) {
              var r = e.isMathJax;
              if (null != r && r) return !0
            } else {
              if ("textarea" == n) return !0;
              if ("img" == n) {
                var r = t.rw_getAttribute(e, "msg");
                if (null != r) return !0
              } else if ("math" == n) return !0
            }
          }
          return !1
        }
      }, {
        key: "rw_isWordSpeakable"
        , value: function (e) {
          if (null == e || 0 == e.length) return !1;
          var t = new l.Utilities
            , n = t.trim(e);
          if (1 == n.length) {
            var r = n.charCodeAt(0);
            if (96 == r || 180 == r || 8216 == r || 8217 == r || 8220 == r || 8221 == r) return !1
          }
          var a, i = n.length
            , o = 0;
          for (o = 0; o < i; o++) {
            if (a = n.charCodeAt(o), a > 63 && a < 91 || a > 96 && a < 123 || a > 127 && 160 != a) return !0;
            if (a > 46 && a < 58) return !0;
            if (a > 35 && a < 39 || 43 == a || 61 == a) return !0
          }
          return !1
        }
      }, {
        key: "createWrapperElement"
        , value: function () {
          return this.createObject(m.WRAPPER_TAG, null, null, g_bOverrideSpan ? "thspan" : null)
        }
      }, {
        key: "createObject"
        , value: function (e, t, n, r) {
          return this.createObjectForDoc(e, t, n, r, document)
        }
      }, {
        key: "createObjectForDoc"
        , value: function (e, t, n, r, a) {
          var i = a.createElement(e);
          if (null != n && (i.id = n), null != r && (i.className = r), null != t)
            for (var o = t.length, l = 0; l < o; l += 2) i.setAttribute(t[l], t[l + 1]);
          return i
        }
      }, {
        key: "isStyleNode"
        , value: function (e) {
          var t = new d.Attribute;
          if (null == e) return !1;
          if (1 != e.nodeType) return 3 == e.nodeType || 8 == e.nodeType;
          var n = e.tagName.toLowerCase()
            .trimTH();
          if (n == m.HIGHLIGHT_TAG) {
            var r = t.rw_getAttribute(e, "started");
            if (null != r && "1" == r) return !1
          }
          return this.isInStyleList(n)
        }
      }, {
        key: "isInStyleList"
        , value: function (e) {
          var t = "~em~strong~b~i~u~tt~font~kbd~dfn~cite~sup~sub~a~embed~span~small~nobr~wbr~acronym~abbr~code~s~chunk~th:pron~img~/th:pron~w~/w~lic/lic~break~silence~thspan~beelinereader~beelinespan~" + m.HIGHLIGHT_TAG + "~" + m.WRAPPER_TAG + "~";
          return t.indexOf("~" + e + "~") > -1
        }
      }, {
        key: "isInvalidNode"
        , value: function (e) {
          if (null == e) return !0;
          if (1 != e.nodeType) return 3 != e.nodeType || this.isInvalidNode(e.parentNode);
          var t = this.getComputedStyle(e);
          if (null != t && ("hidden" == t.visibility || "none" == t.display)) return !0;
          var n = e.tagName.toLowerCase();
          return "link" == n || "area" == n || "script" == n || "noscript" == n || "annotation" == n || "style" == n || "!--" == n || "title" == n || "html:script" == n
        }
      }, {
        key: "getComputedStyle"
        , value: function (e) {
          return null == e ? null : 3 == e.nodeType && (e = e.parentNode, null == e) ? null : window.getComputedStyle(e, null)
        }
      }, {
        key: "isIgnored"
        , value: function (e) {
          var t = new d.Attribute
            , n = !1;
          if (null != e && 3 == e.nodeType && (e = e.parentNode), null == e) return !0;
          for (var r = "ignore", a = "allow", i = e.ownerDocument.body, o = e; null != o && 1 == o.nodeType;) {
            if (null != t.rw_getAttribute(o, r)) return !0;
            if (null != t.rw_getAttribute(o, a)) return !1;
            if ("button" == o.tagName.toLowerCase()) return !0;
            if (o == i) break;
            o = o.parentNode
          }
          return n
        }
      }, {
        key: "allTextFromNodeTH"
        , value: function (e) {
          var t = "";
          if (3 == e.nodeType) t = e.nodeValue;
          else if (1 == e.nodeType)
            for (var n = e.firstChild; null != n;) 3 == n.nodeType ? t += n.nodeValue : 1 == n.nodeType && (t += this.allTextFromNodeTH(n)), n = n.nextSibling;
          return t
        }
      }, {
        key: "mergeTextNodes"
        , value: function (e) {
          if (null == e) return e;
          var t = e.parentNode;
          if (null != t && 3 == e.nodeType) {
            for (var n = e.ownerDocument; null != e.previousSibling && 3 == e.previousSibling.nodeType;) {
              var r = e.previousSibling.nodeValue + e.nodeValue
                , a = n.createTextNode(r);
              t.removeChild(e.previousSibling), t.replaceChild(a, e), e = a
            }
            for (; null != e.nextSibling && 3 == e.nextSibling.nodeType;) {
              var r = e.nodeValue + e.nextSibling.nodeValue
                , a = n.createTextNode(r);
              t.removeChild(e.nextSibling), t.replaceChild(a, e), e = a
            }
          }
          return e
        }
      }, {
        key: "rw_reduceSelectionForNonSpeechChar"
        , value: function (e) {
          var t = new g.DomNavigation
            , n = !1
            , r = e.rightCaret.node
            , a = e.rightCaret.offset
            , i = e.leftCaret.node
            , o = e.leftCaret.offset;
          try {
            var l, c;
            if (!e.rightCaret.isSpecialCase())
              for (var h = r.nodeValue;;) {
                if (0 == a) {
                  if (l = t.getPreviousTextNode(r, !1, i), null == l) break;
                  if (1 == l.nodeType) {
                    r = l, a = 0, n = !0;
                    break
                  }
                  r = l, h = r.nodeValue, a = h.length, n = !0
                }
                if (r == i && a == o) break;
                if (!(a > 0)) break;
                if (c = h.charAt(a - 1), !this.rw_isWhiteSpace(c)) break;
                --a, n = !0
              }
            if (!e.leftCaret.isSpecialCase())
              for (var f = i.nodeValue, d = f.length;;) {
                if (o == d) {
                  if (l = t.getNextTextNode(i, !1, r), null == l) break;
                  if (1 == l.nodeType) {
                    i = l, o = 0, d = 0, n = !0;
                    break
                  }
                  i = l, f = i.nodeValue, o = 0, d = f.length, n = !0
                }
                if (r == i && a == o) break;
                if (!(o < d)) break;
                if (c = f.charAt(o), !this.rw_isWhiteSpace(c)) break;
                ++o, n = !0
              }
          } catch (p) {
            console.log(p)
          }
          return n ? new u.THCaretRange(new s.THCaret(i, o, (!0)), new s.THCaret(r, a, (!1))) : e
        }
      }, {
        key: "rw_isWhiteSpace"
        , value: function (e) {
          return e.search(/[\s\xa0]/) > -1
        }
      }, {
        key: "getSentenceFromPointByLang"
        , value: function (e) {
          var t = new p.DomSentences
            , n = t.getSentenceBreakToRight(e)
            , r = t.getSentenceBreakToLeft(n)
            , a = new u.THCaretRange;
          return a.setCaretRange(r, n), a
        }
      }, {
        key: "isSpecialCaseNested"
        , value: function (e) {
          if (null != e)
            for (var t = this.getBody(e), n = e; null != n && n != t;) {
              if (this.isSpecialCase(n)) return !0;
              n = n.parentNode
            }
          return !1
        }
      }, {
        key: "rw_isTextChar"
        , value: function (e) {
          return e > 47 && e < 58 || e > 63 && e < 91 || e > 94 && e < 123
        }
      }, {
        key: "rw_isFullStop"
        , value: function (e, t, n) {
          var r = new g.DomNavigation
            , a = !0
            , o = e.length;
          if (o > t + 1) {
            var l = e.charCodeAt(t + 1);
            this.rw_isTextChar(l) && (a = !1)
          }
          if (a && null != n && "." != n.nodeValue.charAt(t)) return !0;
          if (a)
            if (t > 1) {
              var s = e.substring(t - 2, t);
              if ((" " == s.charAt(0) || "\n" == s.charAt(0) || "\r" == s.charAt(0) || "\t" == s.charAt(0)) && s.charCodeAt(1) > 63 && s.charCodeAt(1) < 91) a = !1;
              else if ("." == s.charAt(0) && this.rw_isTextChar(s.charCodeAt(1))) a = !1;
              else if ("Dr" == s || "Mr" == s || "Ms" == s || "Av" == s || "St" == s || "eg" == s) a = !1;
              else if (t > 2) {
                var u = e.substring(t - 3, t);
                if ("Mrs" == u || "etc" == u || "i.e" == u || "P.O" == u || "PhD" == u) a = !1;
                else if (t > 3) {
                  var c = e.substring(t - 4, t);
                  "Ph.D" == c && (a = !1)
                }
              }
            } else try {
              if (null != n && 0 == t) {
                var h = r.getPreviousTextNode(n, !0, null);
                if (null != h && 3 == h.nodeType && h != n) return !!this.rw_isFullStop(h.nodeValue + e, h.nodeValue.length, null)
              }
            } catch (f) {}
            var d = null;
          if (a && null != d && "object" == ("undefined" == typeof d ? "undefined" : i(d)) && "number" == typeof d.length) {
            var p, v, m = d.length;
            for (p = 0; p < m; p++)
              if (v = d[p], "string" == typeof v && t - v.length > -1 && e.substring(t - v.length, t) == v) {
                a = !1;
                break
              }
          }
          return a
        }
      }, {
        key: "rw_caretRangeIsSpeakable"
        , value: function (e) {
          var t = new g.DomNavigation;
          try {
            if (null == e || null == e.leftCaret || null == e.rightCaret) return !1;
            if (this.rw_checkForHiddenParent(e.leftCaret.node)) return !1;
            for (var n = e.leftCaret, r = e.rightCaret, a = n.node, i = r.node, o = !0, l = !1, s = a; null != s;) {
              if (l = this.isSpecialCase(s), l || 3 == s.nodeType) {
                var u = t.getTextFromNode(s);
                if (null != u && "" != u && (l || (s == i && r.offset > -1 && (u = u.substring(0, r.offset)), s == a && n.offset > 0 && (u = u.substring(n.offset))), this.rw_isWordSpeakable(u))) return !0
              }
              s = l ? t.getNextNodeIgnoreChildren(s, !1, i) : o ? t.getNextNodeAllowMoveToChild(s, !0, i) : t.getNextNode(s, !1, i), o = !1
            }
          } catch (c) {}
          return !1
        }
      }, {
        key: "rw_checkForHiddenParent"
        , value: function (e) {
          try {
            var t = this.getComputedStyle(e);
            if (null != t && ("none" == t.display || "hidden" == t.visibility)) return !0;
            for (var n = e, r = n.ownerDocument.body; n != r;)
              if (n = n.parentNode, "none" == this.getComputedStyle(n)
                .display) return !0
          } catch (a) {}
          return !1
        }
      }, {
        key: "rw_getRefPt"
        , value: function (e, t) {
          var n = new d.Attribute
            , r = "rwTHgen";
          try {
            if (null == e) return null;
            if (1 == e.nodeType || 3 == e.nodeType) {
              var a = this.checkForSpecialParent(e);
              if (null != a) return new h.THDomRefPt(this.getPositionInDom(a), t);
              var i, o;
              1 == e.nodeType ? (i = 0, o = e) : (i = this.rw_getNodeOffset(e), o = e.parentNode);
              for (var l = n.rw_getAttribute(o, "rwstate"), s = n.rw_getAttribute(o, r); null != l && l.length > 0 || null != s;) i += this.rw_getNodeOffset(o), o = o.parentNode, l = n.rw_getAttribute(o, "rwstate"), s = n.rw_getAttribute(o, r);
              return t == -1 && (i = -1), new h.THDomRefPt(this.getPositionInDom(o), i + t)
            }
            return null
          } catch (u) {
            return null
          }
        }
      }, {
        key: "rw_getNodeOffset"
        , value: function (e) {
          if (null == e) return 0;
          var t = 0
            , n = e.previousSibling;
          return null != n && (t = this.rw_getNodeOffsetImpl(n)), t
        }
      }, {
        key: "getPositionInDom"
        , value: function (e) {
          var t = new d.Attribute
            , n = ""
            , r = 0
            , a = "";
          if (null != e && null != e.ownerDocument)
            for (var i = !1, o = !1, l = e.ownerDocument.body; null != e && e != l;) {
              this.isSpecialCase(e) && (n = ""), i = 3 == e.nodeType || 1 == e.nodeType && e.tagName.toLowerCase() == m.HIGHLIGHT_TAG && null != t.rw_getAttribute(e, "rwstate");
              for (var s = e.previousSibling; null != s;) o = 3 == s.nodeType || 1 == s.nodeType && s.tagName.toLowerCase() == m.HIGHLIGHT_TAG && null != t.rw_getAttribute(s, "rwstate"), i && o || ++r, s = s.previousSibling, i = o;
              if (n = n + r + "~", r = 0, e = e.parentNode, null != e && null != e.getAttribute && null != e.tagName) {
                var u = t.rw_getAttribute(e, "chunk");
                if ("span" == e.tagName.toLowerCase() && "1" == u) {
                  var c = this.getPositionInDom(e);
                  a = "#^th*" + c + "#^th*"
                }
              }
            }
          return a + n
        }
      }, {
        key: "rw_getBreakInCurrentWord"
        , value: function (e) {
          return null == e || 0 == e.length ? -1 : e.search("[" + String.fromCharCode(8212) + '\\s"]')
        }
      }, {
        key: "rw_isLetter"
        , value: function (e) {
          return e > 64 && e < 91 || e > 96 && e < 123
        }
      }, {
        key: "rw_getNodeOffsetImpl"
        , value: function (e) {
          for (var t, n = 0, r = e; null != r;) 3 != r.nodeType || this.isIgnored(r) ? 1 == r.nodeType && (this.isInvalidNode(r) || (n += this.isSpecialCase(r) ? 1 : "textarea" != r.tagName.toLowerCase() ? this.rw_getNodeOffsetImpl(r.lastChild) : 1)) : (t = r.nodeValue, n += t.length), r = r.previousSibling;
          return n
        }
      }, {
        key: "rw_getCaretFromRefPt"
        , value: function (e, t) {
          return this.getCaretFromDomPosition(e, t.path, t.offset, !0)
        }
      }, {
        key: "getCaretFromDomPosition"
        , value: function (e, t, n, r, a) {
          var i = new g.DomNavigation;
          "undefined" == typeof a && (a = !1);
          try {
            if (null == e) return null;
            var o = i.getNodeFromPosition(e, t);
            if (a) {
              var l = new s.THCaret(o, 0, r);
              return l.setSpecialCase(!0), l
            }
            var u = this.checkForSpecialParent(o);
            if (null != u) {
              if (o = u, this.isSpecialCaseHighlightable(u)) {
                if (r) {
                  var c = i.getFirstChildTextNode(o, !1);
                  return null != c ? new s.THCaret(c, 0, r) : new s.THCaret(o, 0, r)
                }
                var h = i.getLastChildTextNode(o, !1);
                return null != h ? 3 == h.nodeType ? new s.THCaret(h, h.length, r) : new s.THCaret(h, 0, r) : new s.THCaret(o, 0, r)
              }
              return new s.THCaret(u, 0, r)
            }
            var f = 0;
            if (r || ++f, n > -1) {
              if (null == o) return null;
              for (var d, p = !1, h = o.parentNode, v = o; !p;) {
                if (3 == o.nodeType) {
                  if (d = o.nodeValue, n < f + d.length) {
                    p = !0;
                    break
                  }
                  v = o, f += o.nodeValue.length, o = i.getNextNode(o, !1, h)
                } else if (1 == o.nodeType)
                  if (u = this.checkForSpecialParent(o), null != u) {
                    o = u;
                    var m = n - f;
                    if (!(m > 0)) {
                      p = !0;
                      break
                    }
                    f += 1, o = i.getNextNodeIgnoreChildren(o, !1, h)
                  } else o = i.getNextNode(o, !1, h);
                if (null == o || o == h) {
                  if (null != v) {
                    o = v, f = 3 == o.nodeType ? n - o.nodeValue.length : 0, r || ++f;
                    break
                  }
                  return null
                }
              }
              return r ? new s.THCaret(o, n - f, r) : new s.THCaret(o, n - (f - 1), r)
            }
            return new s.THCaret(o, n, r)
          } catch (S) {
            return null
          }
        }
      }, {
        key: "getNodesOverRange"
        , value: function (e, t) {
          var n = new g.DomNavigation
            , r = [];
          if (null == e || null == t) return r;
          for (var a = e; a;) this.isInvalidNode(a) ? a = n.getActualNextNodeIgnoreChildren(a, t) : (this.isIgnored(a) || r.push(a), a = n.getActualNextNode(a, t));
          return r
        }
      }, {
        key: "getWindow"
        , value: function (e) {
          try {
            if (null == e) return window;
            if (0 === top.frames.length) return window;
            var t = e.ownerDocument.body
              , n = window.document.body;
            if (t === n) return window;
            var r, a = top.frames.length;
            for (r = 0; r < a; r++) try {
              var i = top.frames[r].document.body;
              if (i === t) return top.frames[r]
            } catch (o) {}
          } catch (l) {}
          return window
        }
      }, {
        key: "rw_getTextRangeAsTHRange"
        , value: function (e, t) {
          var n = t.duplicate();
          n.collapse(!0);
          var r = rw_getTextRangeAsRefPtIE(e, n);
          n = t.duplicate(), n.collapse(!1);
          var a = rw_getTextRangeAsRefPtIE(e, n);
          return new c.THRange(e, r, a)
        }
      }, {
        key: "rw_getAsTextRange"
        , value: function (e, t, n, r, a) {
          var i = this.getRangeObject(e)
            , o = new u.THCaretRange(e, t, (-1), r, (-1))
            , l = o.leftCaret
            , s = o.rightCaret;
          if (null != l && null != l.node && null != s && null != s.node) {
            var c = l.node;
            if (3 == c.nodeType) {
              var h = this.rw_getNodeOffset(c);
              c = c.parentNode, n += h
            }
            var f = s.node;
            if (3 == f.nodeType) {
              var h = this.rw_getNodeOffset(f);
              f = f.parentNode, a += h
            }
            i.moveToElementText(c), i.collapse(), rw_moveEnd(i, n), i.collapse(!1), i.select();
            var g = this.getRangeObject(e);
            g.moveToElementText(f), g.collapse(), rw_moveEnd(g, a), g.collapse(!1), i.setEndPoint("EndToEnd", g)
          } else i = null;
          return i
        }
      }, {
        key: "rw_collapseSelection"
        , value: function () {
          var e = this.getSelectionObject();
          null != e && (e.collapseToStart ? e.collapseToStart() : e.execCommand && e.execCommand("UnSelect", !1, null));
        }
      }, {
        key: "getSelectionObject"
        , value: function () {
          var e = null
            , t = !1;
          if (window.getSelection) {
            if (null != t) return null;
            var n = window.getSelection()
              , r = null;
            if (n.isCollapsed ? (n = this.getFrameSelectionSFF(window), n.foundSel && (r = n.foundSel)) : r = n, null == r) return null;
            e = r
          } else if (document.selection) {
            var a = document.selection.createRange();
            if (a.text.length > 0) theWindow = window, e = a;
            else {
              var i = this.getFrameSelectionOldIE(window);
              i.theRange && (e = i.theRange)
            }
          }
          return e
        }
      }, {
        key: "getFrameSelectionOldIE"
        , value: function (e) {
          var t, n = {}
            , r = !1;
          if (!r && e.frames && e.length > 0) {
            var a, i = e.length;
            for (a = 0; a < i; a++) try {
              var o = e[a];
              if (t = o.document.selection.createRange(), null != t && null != t.text && t.text.length > 0) {
                n.theWindow = o, n.theRange = t;
                break
              }
              if (o.length > 0) {
                var l = this.getFrameSelectionOldIE(o);
                if (l.theRange) {
                  n = l;
                  break
                }
              }
            } catch (s) {}
          }
          return n
        }
      }, {
        key: "getFrameSelectionSFF"
        , value: function (e) {
          var t = {}
            , n = this.getFrameSelection(e);
          return null != n && (t.theWindow = n, t.foundSel = n.getSelection()), t
        }
      }, {
        key: "getFrameSelection"
        , value: function (e) {
          if (!g_bIgnoreFrames && e.frames && e.length > 0) {
            var t, n = e.length;
            for (t = 0; t < n; t++) try {
              var r = e[t].getSelection();
              if (null != r && !r.isCollapsed) return e[t];
              if (e[t].length > 0) {
                var a = this.getFrameSelection(e[t]);
                if (a) return a
              }
            } catch (i) {}
          }
          return null
        }
      }]), e
    }()
  }, {
    "src/Constants/Constants": 1
    , "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/DomNavigation": 3
    , "src/SpeechStream/DOM/DomSentences": 4
    , "src/SpeechStream/MathJax/MathSpeak": 16
    , "src/SpeechStream/THCaret": 27
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/THDomRefPt": 30
    , "src/SpeechStream/THRange": 31
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 6: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = null;
    n.EventBus = function () {
      function e() {
        return r(this, e), i || (i = this), this.events = new Array, i
      }
      return a(e, [{
        key: "unSubscribe"
        , value: function (e, t) {
          for (var n = 0; n < this.events.length; n++) this.events[n].event == e && this.events[n].callback == t && this.events.splice(n, 1)
        }
      }, {
        key: "subscribe"
        , value: function (e, t) {
          this.events.push({
            event: e
            , callback: t
          })
        }
      }, {
        key: "publish"
        , value: function (e, t) {
          for (var n = 0; n < this.events.length; n++) this.events[n].event == e && this.events[n].callback(t)
        }
      }]), e
    }()
  }, {}]
  , 7: [function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t["default"] = e, t
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.HighlightBaseController = void 0;
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , o = e("src/SpeechStream/DOM/SSDOM")
      , l = e("src/SpeechStream/THReturnObject")
      , s = e("src/SpeechStream/Utilities/Utilities")
      , u = e("src/SpeechStream/DOM/DomNavigation")
      , c = e("src/SpeechStream/DOM/Attribute")
      , h = e("src/Constants/Constants")
      , f = r(h);
    n.HighlightBaseController = function () {
      function e() {
        a(this, e)
      }
      return i(e, [{
        key: "highlightRange"
        , value: function () {}
      }, {
        key: "unHighlightRange"
        , value: function () {}
      }, {
        key: "rw_setNodeBackground"
        , value: function (e, t, n, r, a) {
          var i = new o.SSDOM
            , h = new c.Attribute
            , g = new u.DomNavigation
            , d = new l.THReturnObject;
          if (d.node = e, d.offset = t, 3 != e.nodeType) {
            if (1 == e.nodeType && i.isSpecialCaseHighlightable(e)) {
              if ("math" == e.tagName.toLowerCase()) {
                var p = e.parentNode;
                d = rw_setNodeBackgroundImpl(p, e, t, n, r, "")
              } else if (e.isMathJax) {
                var p = e.parentNode;
                d = rw_setNodeBackgroundImpl(p, e, t, n, r, "")
              } else {
                var v = g.getFirstChildTextNode(e, !1)
                  , m = g.getLastChildTextNode(e, !1);
                null != v && 3 == v.nodeType && null != m && 3 == m.nodeType && (this.rw_setSpeechRangeImpl(v, 0, m, m.nodeValue.length, r), d.node = v, d.offset = 0)
              }
              return d
            }
            return d
          }
          if (3 == e.nodeType) {
            var S = e.nodeValue
              , y = new s.Utilities;
            if (S = y.trim(S), 0 == S.length) {
              var T = e.parentNode;
              if (null != T) {
                var w = y.trim(T.tagName)
                  .toLowerCase();
                if ("tr" == w || "table" == w) return d
              }
            }
          }
          var p = e.parentNode
            , b = null;
          if (p.tagName.toLowerCase() == f.HIGHLIGHT_TAG && (b = h.rw_getAttribute(p, "rwstate")), "spell" == r) {
            if (null != b && "" != b) return d;
            d = this.rw_setNodeBackgroundImpl(p, e, t, n, r, a)
          } else if ("hom" == r) {
            if (null != b && "" != b) return d;
            d = this.rw_setNodeBackgroundImpl(p, e, t, n, r, a)
          } else if ("grammar" == r) {
            if (null != b && "" != b) return d;
            d = this.rw_setNodeBackgroundImpl(p, e, t, n, r, a)
          } else if ("ss" == r) {
            if (null != b && "" != b) return "ss" == b ? d : d;
            d = this.rw_setNodeBackgroundImpl(p, e, t, n, r, a)
          } else if ("sp" == r) {
            if ("csp" == b) return d;
            if ("sp" == b) return d;
            d = this.rw_setNodeBackgroundImpl(p, e, t, n, r, "")
          } else if ("csp" == r) {
            if ("csp" == b) return d;
            "sp" == b && (d = this.rw_setNodeBackgroundImpl(p, e, t, n, r, ""))
          }
          return d
        }
      }, {
        key: "rw_setNodeBackgroundImpl"
        , value: function (e, t, n, r, a, i) {
          var s = (new o.SSDOM, new c.Attribute)
            , u = "sp" === a || "csp" === a
            , h = "";
          if (1 == t.nodeType && (h = t.tagName.toLowerCase()), 3 == t.nodeType && (r == -1 || r > n) || "math" == h || t.isMathJax) {
            var g;
            if (g = "ss" == a ? "strikethrough" == i ? "text-decoration:line-through" : "background:" + i : "sp" == a ? f.SPEECH_RANGE_COLOUR : "csp" == a ? f.SPEECH_WORD_COLOUR : "spell" == a ? "" : "hom" == a ? "" : "grammar" == a ? "" : "color:#ff000; background:#00ff00", "math" == h || t.isMathJax) u && this.rw_highlightMathElement(t, a, g, !0);
            else {
              var d = t.nodeValue.length;
              if (1 == d && ("\n" == t.nodeValue || "\r" == t.nodeValue) || 2 == d && "\r\n" == t.nodeValue) {
                var p = new l.THReturnObject;
                return p.node = t, n < 0 ? p.offset = 0 : p.offset = n, p
              }
              var v = e.ownerDocument
                , m = !1;
              n == -1 && r == -1 ? m = !0 : r == -1 && (r = d), 0 == n && r >= d && (m = !0);
              var S = v.createElement(f.HIGHLIGHT_TAG);
              if ("spell" == a && (rw_setAttribute(S, "spellnum", i), S.className = "thspell"), "grammar" == a) {
                var y = "thgrammar";
                rw_setAttribute(S, "grammarnum", i), S.className = y
              }
              if (m) S.setAttribute("style", g), s.rw_setAttribute(S, "rwstate", a), u && s.rw_setAttribute(S, "started", "1"), e.replaceChild(S, t), S.appendChild(t);
              else {
                var T, w, b, C = t.nodeValue;
                "span" == e.tagName.toLowerCase() && null != s.rw_getAttribute(e, "pron") ? (T = "", w = C, b = "") : (T = C.substring(0, n), w = C.substring(n, r), b = C.substring(r)), S.setAttribute("style", g), s.rw_setAttribute(S, "rwstate", a), u && s.rw_setAttribute(S, "started", "1");
                var _, R = null
                  , k = null;
                T.length > 0 && (R = v.createTextNode(T)), _ = v.createTextNode(w), b.length > 0 && (k = v.createTextNode(b)), S.appendChild(_), e.replaceChild(S, t), null != R && e.insertBefore(R, S), null != k && (null == S.nextSibling ? e.insertBefore(k, null) : e.insertBefore(k, S.nextSibling)), t = _
              }
            }
          }
          var p = new l.THReturnObject;
          return p.node = t, n < 0 ? p.offset = 0 : p.offset = n, p
        }
      }, {
        key: "rw_highlightMathElement"
        , value: function (e, t, n, r) {
          var a = (new o.SSDOM, new c.Attribute);
          if (null != e) {
            var i = f.HIGHLIGHT_TAG
              , l = !1;
            if (l) {
              var s = e.parentNode;
              if (null == s) return;
              if (s.tagName.toLowerCase() == i && null != rw_getAttribute(s, "started"))
                if (r) s.style.setAttribute("cssText", n, 0), rw_setAttribute(s, "rwstate", t);
                else {
                  var u = s.parentNode;
                  if (null == u) return;
                  u.replaceChild(e, s)
                }
              else if (r) {
                var h = document.createElement(i);
                h.style.setAttribute("cssText", n, 0), rw_setAttribute(h, "started", "1"), rw_setAttribute(h, "rwstate", t), s.replaceChild(h, e), h.appendChild(e)
              }
            } else
              for (var g = e.firstChild; null != g;) 1 == g.nodeType && (r ? null != a.rw_getAttribute(g, "started") ? (g.setAttribute("style", n), a.rw_setAttribute(g, "rwstate", t)) : null == a.rw_getAttribute(g, "style") && (g.setAttribute("style", n), a.rw_setAttribute(g, "rwstate", t), a.rw_setAttribute(g, "started", "1")) : null != a.rw_getAttribute(g, "started") && (g.removeAttribute("style"), a.rw_removeAttribute(g, "started"), a.rw_removeAttribute(g, "rwstate"))), g = g.nextSibling
          }
        }
      }, {
        key: "getListOfHighlightableNodes"
        , value: function (e, t) {
          var n = (new o.SSDOM, new u.DomNavigation)
            , r = new Array;
          try {
            var a = e.node
              , i = t.node;
            if (3 != a.nodeType)
              if (1 == a.nodeType && "math" == a.tagName.toLowerCase()) {
                if (r.push(a), a == i) return r;
                a = n.getNextTextNode(a, !1, i)
              } else if (g_bIE && 1 == a.nodeType && null != a.firstChild && 1 == a.firstChild.nodeType && "math" == a.firstChild.tagName.toLowerCase()) {
              if (r.push(a.firstChild), a == i) return r;
              a = a.firstChild, a = n.getNextTextNode(a, !1, i)
            } else if (1 == a.nodeType && a.isMathJax) {
              if (r.push(a), a == i) return r;
              a = n.getNextTextNode(a, !1, i)
            } else if (g_bIE && 1 == a.nodeType && null != a.firstChild && a.firstChild.isMathJax) {
              if (r.push(a.firstChild), a == i) return r;
              a = a.firstChild, a = n.getNextTextNode(a, !1, i)
            } else if (a = n.getFirstChildTextNode(a, !1), null == a) return r;
            if (a == i) {
              if (3 == a.nodeType) {
                var l = a.nodeValue;
                l.length > 0 && e.offset < l.length && t.offset > 0 && t.offset > e.offset && r.push(a)
              }
            } else {
              if (3 == a.nodeType) {
                var l = a.nodeValue;
                l.length > 0 && e.offset < l.length && r.push(a)
              } else 1 == a.nodeType && "math" == a.tagName.toLowerCase() ? r.push(a) : 1 == a.nodeType && a.isMathJax && r.push(a);
              for (var s = n.getNextTextNodeNoImg(a, !1, i, !0); null != s;) {
                if (s == i) {
                  if (3 == i.nodeType) {
                    var l = i.nodeValue;
                    l.length > 0 && t.offset > 0 && r.push(i)
                  } else 1 == s.nodeType && "math" == s.tagName.toLowerCase() ? r.push(s) : 1 == s.nodeType && s.isMathJax && r.push(s);
                  break
                }
                r.push(s), s = n.getNextTextNodeNoImg(s, !1, i, !0)
              }
            }
          } catch (c) {}
          return r
        }
      }]), e
    }()
  }, {
    "src/Constants/Constants": 1
    , "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/DomNavigation": 3
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/THReturnObject": 32
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 8: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.MathJaxHighlightController = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/MathJax/MathJaxHighlighter");
    n.MathJaxHighlightController = function () {
      function e(t) {
        r(this, e), this.m_setupHash = {}, this.m_defaultContextBg = {
          r: 255
          , g: 255
          , b: 0
        }, this.m_defaultContextFg = {
          r: 0
          , g: 0
          , b: 0
        }, this.m_defaultWordBg = {
          r: 0
          , g: 0
          , b: 255
        }, this.m_defaultWordFg = {
          r: 255
          , g: 255
          , b: 255
        }, this.m_contextBg = {
          r: 255
          , g: 255
          , b: 0
        }, this.m_contextFg = {
          r: 0
          , g: 0
          , b: 0
        }, this.m_wordBg = {
          r: 0
          , g: 0
          , b: 255
        }, this.m_wordFg = {
          r: 255
          , g: 255
          , b: 255
        }, this.m_strContextStyle = "highlight", this.m_strWordStyle = "highlight", this.sentence = t, this.lastMathId = null
      }
      return a(e, [{
        key: "highlight"
        , value: function (e) {
          try {
            var t = document.getElementById(e)
              , n = this.getJaxFor(t);
            this.h = new i.MathJaxHighlighter(n), "highlight" === this.m_strContextStyle ? (this.h.setHighlightStyle("context", "bg", this.m_contextBg.r, this.m_contextBg.g, this.m_contextBg.b), this.h.setHighlightStyle("context", "fg", this.m_contextFg.r, this.m_contextFg.g, this.m_contextFg.b)) : "outline" === this.m_strContextStyle ? this.h.setHighlightStyle("context", "outline", this.m_contextFg.r, this.m_contextFg.g, this.m_contextFg.b) : "underline" === this.m_strContextStyle && this.h.setHighlightStyle("context", "underline", this.m_contextFg.r, this.m_contextFg.g, this.m_contextFg.b), "highlight" === this.m_strWordStyle ? (this.h.setHighlightStyle("word", "bg", this.m_wordBg.r, this.m_wordBg.g, this.m_wordBg.b), this.h.setHighlightStyle("word", "fg", this.m_wordFg.r, this.m_wordFg.g, this.m_wordFg.b)) : "outline" === this.m_strWordStyle ? this.h.setHighlightStyle("word", "outline", this.m_wordFg.r, this.m_wordFg.g, this.m_wordFg.b) : "underline" === this.m_strWordStyle && this.h.setHighlightStyle("word", "underline", this.m_wordFg.r, this.m_wordFg.g, this.m_wordFg.b)
          } catch (r) {}
        }
      }, {
        key: "highlightRange"
        , value: function () {
          var e = this.sentence.getSpanId();
          try {
            this.lastMathId && this.clearHighlights(), this.lastMathId = e, this.m_setupHash[e] || (this.highlight(e), this.m_setupHash[e] = !0);
            var t = document.getElementById(e)
              , n = this.getJaxFor(t)
              , r = n.root.spanID ? n.root.spanID : n.root.CHTMLnodeID;
            r = null != r && void 0 != r ? r : n.root.PHTMLspanID, this.h.highlightNodes("context", r)
          } catch (a) {}
        }
      }, {
        key: "unHighlightRange"
        , value: function () {
          try {
            var e = this.sentence.getSpanId()
              , t = document.getElementById(e);
            this.getJaxFor(t), this.h.clearHighlights()
          } catch (n) {}
        }
      }, {
        key: "highlightWord"
        , value: function (e) {
          var t = this.sentence.getSpanId(e)
            , n = this.sentence.getWordRange(e);
          try {
            this.m_setupHash[t] || (this.highlight(t), this.m_setupHash[t] = !0);
            var r = document.getElementById(t);
            this.getJaxFor(r), this.h.highlightNodes("word", n)
          } catch (a) {}
        }
      }, {
        key: "setHighlightStyle"
        , value: function (e, t, n, r) {
          if (this.m_setupHash = [], "string" == typeof e) {
            "undefined" == typeof t && (t = "word");
            var a = "undefined" == typeof p_rgb;
            "context" === t ? (this.m_strContextStyle = e, "highlight" === e ? (this.m_contextBg = a ? this.m_defaultContextBg : r, this.m_contextFg = a ? this.m_defaultContextFg : n) : "outline" !== e && "underline" !== e || (this.m_contextFg = a ? this.m_defaultContextBg : n)) : "word" === t && (this.m_strWordStyle = e, "highlight" === this.m_strWordStyle ? (this.m_wordBg = a ? this.m_defaultWordBg : r, this.m_wordFg = a ? this.m_defaultWordFg : n) : "outline" !== e && "underline" !== e || (this.m_wordFg = a ? this.m_defaultWordBg : n))
          }
        }
      }, {
        key: "getJaxFor"
        , value: function (e) {
          var t = null
            , n = !1
            , r = !1;
          if (!n || r) t = MathJax.Hub.getJaxFor(e);
          else if (e && e.isMathJax) {
            for (; e && !e.jaxID;) e = e.parentNode;
            if (e) {
              var a = e.id;
              if (a.indexOf("-Frame") > -1) {
                a = a.substr(0, a.indexOf("-Frame"));
                var i = document.getElementById(a);
                t = MathJax.Hub.getJaxFor(i)
              }
            }
          }
          return t
        }
      }, {
        key: "checkText"
        , value: function (e) {
          for (var t, n, r = e.indexOf("<mtext>"); r > -1 && (t = e.indexOf("</mtext>", r), t > r);) n = e.substring(r + 7, t), n = n.trimTH(), 0 == n.length ? (e = e.substr(0, r) + e.substr(t + 8), r = e.indexOf("<mtext>", r)) : r = e.indexOf("<mtext>", t + 8);
          for (r = e.indexOf("<mn>"); r > -1 && (t = e.indexOf("</mn>", r), t > r);) n = e.substring(r + 4, t), n = n.trimTH(), 0 == n.length ? (e = e.substr(0, r) + e.substr(t + 5), r = e.indexOf("<mn>", r)) : r = e.indexOf("<mn>", t + 5);
          for (var t, n, r = e.indexOf("<mover>"); r > -1 && (t = e.indexOf("</mover>", r), t > r);) n = e.substring(r + 7, t), n = n.trimTH(), 0 == n.length ? (e = e.substr(0, r) + e.substr(t + 8), r = e.indexOf("<mover>", r)) : r = e.indexOf("<mover>", t + 8);
          return e
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/MathJax/MathJaxHighlighter": 15
  }]
  , 9: [function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t["default"] = e, t
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e
          , enumerable: !1
          , writable: !0
          , configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.SpeechHighlightController = void 0;
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , s = e("src/SpeechStream/THCaretRange")
      , u = (e("src/SpeechStream/THReturnObject"), e("src/SpeechStream/DOM/SSDOM"))
      , c = (e("src/SpeechStream/Utilities/Utilities"), e("src/SpeechStream/Sentence/SentenceObject"), e("src/SpeechStream/SpeechObject"), e("src/SpeechStream/ScrollInToView"))
      , h = e("src/SpeechStream/Highlighting/HighlightBaseController")
      , f = e("src/SpeechStream/DOM/DomNavigation")
      , g = e("src/SpeechStream/DOM/Attribute")
      , d = e("src/Constants/Constants")
      , p = r(d);
    n.SpeechHighlightController = function (e) {
      function t(e) {
        a(this, t);
        var n = i(this, Object.getPrototypeOf(t)
          .call(this));
        return n.sentence = e, n
      }
      return o(t, e), l(t, [{
        key: "highlightRange"
        , value: function () {
          var e = this.sentence.getRange();
          new u.SSDOM;
          try {
            if (null != e) {
              var t = new s.THCaretRange(e.body, e.startRef.path, e.startRef.offset, e.endRef.path, e.endRef.offset)
                , n = t.leftCaret
                , r = t.rightCaret;
              null != n && null != r && this.rw_setSpeechRangeImpl(n.node, n.offset, r.node, r.offset, "sp")
            }
          } catch (a) {}
        }
      }, {
        key: "unHighlightRange"
        , value: function () {
          var e = this.sentence.getRange();
          new u.SSDOM;
          try {
            if (null != e) {
              var t = new s.THCaretRange(e.body, e.startRef.path, e.startRef.offset, e.endRef.path, e.endRef.offset)
                , n = t.leftCaret
                , r = t.rightCaret;
              null != n && null != r && this.rw_removeSpeechHighlight(this.getListOfHighlightableNodes(n, r), !1)
            }
          } catch (a) {}
        }
      }, {
        key: "highlightWord"
        , value: function (e) {
          if (e < this.sentence.getWords()
            .length) {
            if (new u.SSDOM, e > 0) {
              var t = this.sentence.getWordRange(e - 1);
              if (null != t) {
                var n = new s.THCaretRange(t.body, t.startRef.path, t.startRef.offset, t.endRef.path, t.endRef.offset)
                  , r = n.leftCaret
                  , a = n.rightCaret;
                null != r && null != a && this.rw_removeSpeechHighlight(this.getListOfHighlightableNodes(r, a), !0)
              }
            }
            var i = this.sentence.getWordRange(e);
            if (null != i) {
              var n = new s.THCaretRange(i.body, i.startRef.path, i.startRef.offset, i.endRef.path, i.endRef.offset)
                , r = n.leftCaret
                , a = n.rightCaret
                , o = new c.ScrollInToView;
              if (null != r && null != a) {
                var l = this.rw_setSpeechRangeImpl(r.node, r.offset, a.node, a.offset, "csp");
                null != l && null != l.node ? o.rw_scrollToObject(l.node) : o.rw_scrollToObject(r.node)
              }
            }
          }
        }
      }, {
        key: "rw_removeSpeechHighlight"
        , value: function (e, t) {
          var n = new u.SSDOM;
          try {
            if ("undefined" == typeof t && (t = !1), null == e || !(e instanceof Array) || 0 == e.length) return;
            for (var r = 0; r < e.length; r++) {
              var a = e[r];
              if (this.rw_checkNodeIsSpeechText(a, t)) {
                var i = a.parentNode;
                if (null != a.nextSibling || null != a.previousSibling) {
                  var o = n.allTextFromNodeTH(i)
                    , l = i.ownerDocument;
                  a = l.createTextNode(o)
                }
                var s = i.parentNode;
                s.replaceChild(a, i), a = n.mergeTextNodes(a), e[r] = a, this.rw_checkNodeIsSpeechText(a, t) && --r
              } else {
                var c = "";
                1 == a.nodeType && (c = a.tagName.toLowerCase()), "math" == c && this.rw_highlightMathElement(a, null, null, !1), a.isMathJax && this.rw_highlightMathElement(a, null, null, !1)
              }
            }
          } catch (h) {}
        }
      }, {
        key: "rw_checkNodeIsSpeechText"
        , value: function (e, t) {
          var n = (new u.SSDOM, new g.Attribute);
          if (3 != e.nodeType || null == e.parentNode || null == e.parentNode.parentNode) return !1;
          var r = e.parentNode
            , a = n.rw_getAttribute(r, "rwstate");
          return r.tagName.toLowerCase() == p.HIGHLIGHT_TAG && null != a && (!t && "sp" == a || "csp" == a)
        }
      }, {
        key: "rw_setSpeechRangeImpl"
        , value: function (e, t, n, r, a) {
          var i = (new u.SSDOM, new f.DomNavigation)
            , o = null;
          try {
            if (n == e) return o = this.rw_setNodeBackground(e, t, r, a, "");
            o = t > 0 ? this.rw_setNodeBackground(e, t, e.nodeValue.length, a, "") : this.rw_setNodeBackground(e, -1, -1, a, "");
            for (var l = i.getNextTextNodeNoImg(o.node, !1, n, !0); null != l;) {
              if (l == n) {
                o = this.rw_setNodeBackground(l, 0, r, a, ""), l = o.node;
                break
              }
              o = this.rw_setNodeBackground(l, -1, -1, a, ""), l = o.node, l = i.getNextTextNodeNoImg(l, !1, n, !0)
            }
          } catch (s) {}
          return o
        }
      }]), t
    }(h.HighlightBaseController)
  }, {
    "src/Constants/Constants": 1
    , "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/DomNavigation": 3
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/Highlighting/HighlightBaseController": 7
    , "src/SpeechStream/ScrollInToView": 18
    , "src/SpeechStream/Sentence/SentenceObject": 24
    , "src/SpeechStream/SpeechObject": 26
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/THReturnObject": 32
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 10: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.SpeechHighlightManager = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/Highlighting/SpeechHighlightController")
      , o = e("src/SpeechStream/Highlighting/MathJaxHighlightController");
    n.SpeechHighlightManager = function () {
      function e(t) {
        r(this, e), t.isMathML() ? this.highlightController = new o.MathJaxHighlightController(t) : this.highlightController = new i.SpeechHighlightController(t)
      }
      return a(e, [{
        key: "highlightRange"
        , value: function () {
          this.highlightController.highlightRange()
        }
      }, {
        key: "unHighlightRange"
        , value: function () {
          this.highlightController.unHighlightRange()
        }
      }, {
        key: "highlightWord"
        , value: function (e) {
          this.highlightController.highlightWord(e)
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/Highlighting/MathJaxHighlightController": 8
    , "src/SpeechStream/Highlighting/SpeechHighlightController": 9
  }]
  , 11: [function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t["default"] = e, t
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e
          , enumerable: !1
          , writable: !0
          , configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.StudySkillsHighlighting = void 0;
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , s = e("src/SpeechStream/DOM/SSDOM")
      , u = e("src/SpeechStream/THDomRange")
      , c = e("src/SpeechStream/THCaretRange")
      , h = (e("src/SpeechStream/THReturnObject"), e("src/SpeechStream/Utilities/Utilities"))
      , f = e("src/SpeechStream/Highlighting/HighlightBaseController")
      , g = e("src/SpeechStream/DOM/DomNavigation")
      , d = e("src/SpeechStream/DOM/Attribute")
      , p = e("src/Constants/Constants")
      , v = r(p);
    n.StudySkillsHighlighting = function (e) {
      function t() {
        a(this, t);
        var e = i(this, Object.getPrototypeOf(t)
          .call(this));
        return e.g_aTextRange = new Array, e.g_aHighlightColour = new Array, e
      }
      return o(t, e), l(t, [{
        key: "fetchWords"
        , value: function () {
          for (var e = !1, t = new Array, n = new Array, r = this.g_aTextRange.length, a = 0; a < r; a++) {
            var i;
            i = e ? g_aTextRange.slice(a, a + 1)
              .pop()
              .text : this.g_aTextRange[a].toString(), i.trimTH()
              .indexOf(" ") == -1 ? n.push(this.g_aTextRange.slice(a, a + 1)
                .pop()) : this.m_bSentenceSelection = !0
          }
          e ? n.sort(this.sortBy) : n.sort(this.sortBySFF);
          for (var o, l = n.length, s = function () {
              function r(e) {
                return e.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&")
              }
              o = e ? n.slice(u, u + 1)
                .pop()
                .text : n[u].toString(), o = o.trim(), c = ".,?!", h = "g", c = r(c), o = o.replace(new RegExp("^[" + c + "]+|[" + c + "]+$", h), ""), t.push(o)
            }, u = 0; u < l; u++) {
            var c, h;
            s()
          }
          return t
        }
      }, {
        key: "studySkillsCollateForColour"
        , value: function (e) {
          for (var t = new s.SSDOM, n = new Array, r = this.g_aTextRange.length, a = "", i = "", o = 0, l = 0; l < r; l++) {
            var u = this.g_aHighlightColour[l];
            u == e && n.push(this.g_aTextRange.slice(l, l + 1)
              .pop())
          }
          v ? n.sort(this.sortBy) : n.sort(this.sortBySFF);
          for (var c, f = n.length, g = new h.Utilities, d = new Array, l = 0; l < f; l++) {
            var p, v = !1;
            if (v) {
              var m = n.slice(l, l + 1)
                .pop()
                , S = t.rw_getTextRangeAsTHRange(m.parentElement()
                  .ownerDocument.body, m);
              p = S.rw_getTHCaretRangeFromTHRange()
            } else p = n[l].rw_getTHCaretRangeFromTHDomRange();
            c = p.getTextOverCaretRange(), c.length > 0 && (c = g.rw_filterForHtml(c), d.push({
              color: e
              , text: c
            }))
          }
          return o > 0 && (a += "<p></p>", a += '<div style="background:' + e + '">', a += i, a += "</div><p></p>"), d
        }
      }, {
        key: "studySkillsCollateForColour"
        , value: function (e) {
          for (var t = new s.SSDOM, n = new Array, r = (new Array, []), a = this.g_aTextRange.length, i = 0, o = 0; o < a; o++) {
            var l = this.g_aHighlightColour[o];
            if (e.indexOf(l) != -1) {
              var u = this.g_aTextRange.slice(o, o + 1)
                .pop();
              u.color = l, n.push(u)
            }
          }
          var c = !1;
          c ? n.sort(this.sortBy) : n.sort(this.sortBySFF);
          for (var f, g = n.length, d = new h.Utilities, o = 0; o < g; o++) {
            var p, v = n[o].color;
            if (c) {
              var m = n.slice(o, o + 1)
                .pop()
                , S = t.rw_getTextRangeAsTHRange(m.parentElement()
                  .ownerDocument.body, m);
              p = S.rw_getTHCaretRangeFromTHRange()
            } else p = n[o].rw_getTHCaretRangeFromTHDomRange();
            f = p.getTextOverCaretRange(), f.length > 0 && (f = d.rw_filterForHtml(f), i++, r.push({
              text: f
              , color: v
            }))
          }
          return r
        }
      }, {
        key: "sortBy"
        , value: function (e, t) {
          try {
            return e.compareEndPoints("EndToEnd", t)
          } catch (n) {
            return 0
          }
        }
      }, {
        key: "sortBySFF"
        , value: function (e, t) {
          try {
            if (e.equals(t)) return 0;
            e.refresh(), t.refresh();
            var n = e.getEndAsRange()
              , r = t.getEndAsRange();
            return n.compareBoundaryPoints("END_TO_END", r)
          } catch (a) {
            return 0
          }
        }
      }, {
        key: "studySkillsHTMLHighlightRange"
        , value: function (e, t) {
          var n = new s.SSDOM;
          try {
            if (null == t || null == t.range || t.range instanceof String) return !1;
            var r = t.range
              , a = !1;
            if (a) {
              var i = r.parentElement()
                .ownerDocument.body
                , o = n.rw_getTextRangeAsTHRange(i, r);
              if (null == o) return !1;
              var l = new c.THCaretRange(i, o.startRef.path, o.startRef.offset, o.endRef.path, o.endRef.offset)
                , h = l.leftCaret
                , f = l.rightCaret;
              if (null == h || null == f) return !1;
              var g = new u.THDomRange(h.node, h.offset, f.node, f.offset);
              if (null == g) return null;
              if (g = this.rw_checkTHRangeForValidHighlight(g), null == g) return null;
              r = n.rw_getAsTextRange(i, g.startRef.path, g.startRef.offset, g.endRef.path, g.endRef.offset)
            } else r = this.rw_checkTHRangeForValidHighlight(r);
            if (null == r) return !1;
            n.rw_collapseSelection(), this.studySkillsHTMLHighlightRangeImpl(r, e);
            var d = SpeechStream.analytics;
            return d.report(d.categories.HIGHLIGHT, e), !0
          } catch (p) {
            return !1
          }
        }
      }, {
        key: "studySkillsHTMLHighlightRangeImpl"
        , value: function (e, t) {
          try {
            var n = new s.SSDOM
              , r = !1
              , a = null
              , i = null
              , o = null
              , l = !0;
            if (null == e || e instanceof String) return;
            var u = 0
              , c = !1
              , h = !1;
            if (h) {
              if (o = e.rw_getTextFromRange(), 0 == o.length) return;
              try {
                a = e.parentElement();
                var f = s.SSDOM.getComputedStyle(a);
                if (null != f && "none" == f.display) r = !0;
                else
                  for (var g = a.ownerDocument.body; a != g;)
                    if (a = a.parentNode, "none" == s.SSDOM.getComputedStyle(a)
                      .display) {
                      r = !0;
                      break
                    }
                r && (i = a.style.display, a.style.display = "inline")
              } catch (d) {}
              studySkillsHTMLRefreshRanges();
              for (var p = 0; p < this.g_aTextRange.length; p++) {
                var m = this.g_aTextRange[p]
                  , S = e.duplicate();
                S.collapse(!0);
                var y = m.inRange(S);
                S = e.duplicate(), S.collapse(!1);
                var T = m.inRange(S);
                c = !1, y && T ? this.g_aHighlightColour[p] == t ? l = !1 : (case1IE(p, e), c = !0) : !y && T ? (case2IE(p, e), c = !0) : y && !T ? (case3IE(p, e), c = !0) : e.inRange(m) && (this.g_aTextRange.splice(p, 1), this.g_aHighlightColour.splice(p, 1), p--, c = !0), c && (++u, u < 100 && (p = -1))
              }
            } else {
              if (!e.toString) return;
              if (null == e || null == e.toString() || "" == e.toString()) return;
              for (var p = 0; p < this.g_aTextRange.length; p++) {
                var w = this.g_aTextRange[p];
                if (e.body.ownerDocument == w.body.ownerDocument) {
                  var b = e.compareRange(w);
                  switch (b) {
                  case v.THDomRange_ERROR:
                    window.status = "Error occurred when trying to add a highlight.";
                    break;
                  case v.THDomRange_TARGET_SAME:
                  case v.THDomRange_TARGET_INSIDE:
                    w.refresh(), this.rw_removeHighlight(this.getListOfHighlightableNodes(w.startCaret, w.endCaret)), this.g_aTextRange.splice(p, 1), this.g_aHighlightColour.splice(p, 1), --p, e.refresh(), c = !0;
                    break;
                  case v.THDomRange_TARGET_INCLUDES_THIS:
                  case v.THDomRange_TARGET_INCLUDES_THIS_AT_START:
                  case v.THDomRange_TARGET_INCLUDES_THIS_AT_END:
                    this.g_aHighlightColour[p] == t ? l = !1 : (this.case1SFF(p, e, b), ++p, c = !0);
                    break;
                  case v.THDomRange_OVERLAPS_START_OF_TARGET:
                    this.case2SFF(p, e), c = !0;
                    break;
                  case v.THDomRange_OVERLAPS_END_OF_TARGET:
                    this.case3SFF(p, e), c = !0;
                    break;
                  case v.THDomRange_AFTER_TARGET:
                    break;
                  case v.THDomRange_BEFORE_TARGET:
                  }
                }
                c && (++u, u < 100 && (p = -1))
              }
            }
            var C = !1;
            if (C && n.rw_collapseSelection(), l) {
              if (e.execCommand) this.studySkillsClearRangeIE(e), this.rw_ieSpecificCallToSetHighlight(e, t);
              else {
                var _ = e.startCaret
                  , R = e.endCaret;
                this.rw_setHighlight(_.node, _.offset, R.node, R.offset, t)
              }
              this.g_aTextRange.push(e), this.g_aHighlightColour.push(t)
            }
            return n.rw_collapseSelection(), r && (a.style.display = i), !0
          } catch (k) {
            return !1
          }
        }
      }, {
        key: "rw_setHighlight"
        , value: function (e, t, n, r, a) {
          var i = e
            , o = n
            , l = (new s.SSDOM, new g.DomNavigation);
          try {
            var u = null;
            if (n == e) u = this.rw_setNodeBackground(e, t, r, "ss", a), i = u.node, o = u.node;
            else {
              u = t > 0 ? this.rw_setNodeBackground(e, t, e.nodeValue.length, "ss", a) : this.rw_setNodeBackground(e, -1, -1, "ss", a), i = u.node;
              for (var c = l.getNextTextNodeNoImg(u.node, !1, n, !0); null != c;) {
                if (c == n) {
                  u = this.rw_setNodeBackground(c, 0, r, "ss", a), c = u.node, o = c;
                  break
                }
                u = this.rw_setNodeBackground(c, -1, -1, "ss", a), c = u.node, o = c, c = l.getNextTextNodeNoImg(c, !1, n, !0)
              }
            }
          } catch (h) {}
          return {
            start: i
            , end: o
          }
        }
      }, {
        key: "rw_ieSpecificCallToSetHighlight"
        , value: function (e, t) {
          "strikethrough" == t ? e.execCommand("strikethrough", !1, null) : e.execCommand("backcolor", !1, t)
        }
      }, {
        key: "studySkillsClearRangeIE"
        , value: function (e) {
          e.execCommand("backcolor", !1, "clear"), (g_nIcons & strike_icon) == strike_icon && e.execCommand("RemoveFormat", !1, null)
        }
      }, {
        key: "rw_removeHighlight"
        , value: function (e) {
          var t = new s.SSDOM
            , n = new d.Attribute;
          try {
            if (null == e || !(e instanceof Array) || 0 == e.length) return;
            for (var r = 0; r < e.length; r++) {
              var a = e[r];
              if (this.rw_checkNodeIsHighlightedText(a)) {
                var i = a.parentNode;
                if (null != a.nextSibling || null != a.previousSibling) {
                  var o = t.allTextFromNodeTH(i)
                    , l = i.ownerDocument;
                  a = l.createTextNode(o)
                }
                var u = i.parentNode;
                u.replaceChild(a, i), a = t.mergeTextNodes(a), e[r] = a
              } else {
                var c = this.rw_getNestedNodeForHighlightedText(a);
                null != c && (n.rw_removeAttribute(c, "rwstate"), c.removeAttribute("style"))
              }
            }
          } catch (h) {}
        }
      }, {
        key: "rw_getNestedNodeForHighlightedText"
        , value: function (e) {
          var t = (new s.SSDOM, new d.Attribute);
          if (3 != e.nodeType || null == e.parentNode || null == e.parentNode.parentNode) return null;
          var n = v.HIGHLIGHT_TAG
            , r = e.parentNode
            , a = t.rw_getAttribute(r, "rwstate");
          if (r.tagName.toLowerCase() != n || null == a || "ss" != a) {
            if (null != t.rw_getAttribute(r, "rwthgen")) {
              var i = r;
              for (a = "1"; null != a;) {
                if (i = i.parentNode, "ss" == t.rw_getAttribute(i, "rwState") && i.tagName.toLowerCase() == n) return i;
                a = t.rw_getAttribute(i, "rwthgen")
              }
            }
            return null
          }
          return r
        }
      }, {
        key: "rw_checkNodeIsHighlightedText"
        , value: function (e) {
          var t = (new s.SSDOM, new d.Attribute);
          if (null == e.parentNode || null == e.parentNode.parentNode) return !1;
          var n = e.parentNode
            , r = t.rw_getAttribute(n, "rwstate");
          return n.tagName.toLowerCase() == v.HIGHLIGHT_TAG && null != r && "csp" != r && "sp" != r || "thspell" == n.className || "thhom" == n.className || "thgrammar" == n.className
        }
      }, {
        key: "rw_checkTHRangeForValidHighlight"
        , value: function (e) {
          var t = new s.SSDOM
            , n = new g.DomNavigation
            , r = e.startCaret
            , a = e.endCaret
            , i = !1;
          if (t.isInvalidNode(r.node)) {
            if (r.node == a.node) return;
            var o = n.getNextTextNodeNoImg(r.node, !1, a.node, !1);
            if (null == o || t.isInvalidNode(o)) return;
            r.node = o, r.offset = 0, i = !0
          }
          var l = 3 != r.node.nodeType || 3 == r.node.nodeType && 0 == r.node.nodeValue.trimTH()
            .length;
          if (l) {
            for (i = !0; l;) {
              if (r.node == a.node) return null;
              if (r.node = n.getNextTextNodeNoBlank(r.node, !1, a.node), null == r.node) return null;
              l = 3 != r.node.nodeType || 3 == r.node.nodeType && 0 == r.node.nodeValue.trimTH()
                .length
            }
            r.offset = 0
          }
          if (t.isInvalidNode(a.node)) {
            if (r.node == a.node) return;
            var o = n.getPreviousTextNodeNoImg(a.node, !1, r.node, !1);
            if (null == o || t.isInvalidNode(o)) return;
            a.node = o, a.offset = o.nodeValue.length, i = !0
          }
          if (l = 3 != a.node.nodeType || 3 == a.node.nodeType && 0 == a.node.nodeValue.trimTH()
            .length) {
            for (i = !0; l;) {
              if (r.node == a.node) return null;
              if (a.node = n.getPreviousTextNodeNoImg(a.node, !1, r.node, !1), null == a.node) return null;
              l = 3 != a.node.nodeType || 3 == a.node.nodeType && 0 == a.node.nodeValue.trimTH()
                .length
            }
            3 == a.node.nodeType && (a.offset = a.node.nodeValue.length)
          }
          return null == r.node || null == a.node ? null : (i && (e = new u.THDomRange(r.node, r.offset, a.node, a.offset)), e)
        }
      }, {
        key: "studySkillsClearHighlights"
        , value: function (e, t) {
          try {
            var n = null
              , r = null;
            if (null != t && null != t.range && (n = t.range, r = t.frame), null != n && n instanceof String) {
              var a = !1;
              if (null != a && (a.selectionStart = 0, a.selectionEnd = 0), a = null, !e) return;
              n = null
            }
            var i = !1;
            if (i) {
              if (null == n || 0 == n.length || 0 == n.text.length || e) {
                if (!e) {
                  var o = !1;
                  if (!o) return
                }
                for (var l = this.g_aTextRange.length, u = 0; u < l; u++) {
                  var c = this.g_aTextRange[u];
                  this.studySkillsClearRangeIE(c), this.g_aTextRange[u] = null, this.g_aHighlightColour[u] = null
                }
                if (this.g_aTextRange = new Array, this.g_aHighlightColour = new Array, !document.compatMode.equalsTH("CSS1Compat")) {
                  var h = !1;
                  if (!h && top.frames.length > 0) {
                    var f = 0
                      , g = top.frames.length;
                    for (f = 0; f < g; f++) try {
                      var d = top.frames[f];
                      n = d.document.selection.createRange(), n.expand("textedit"), this.studySkillsClearRangeIE(n)
                    } catch (p) {}
                  } else n = document.selection.createRange(), n.expand("textedit"), this.studySkillsClearRangeIE(n)
                }
                return
              }
              this.studySkillsClearRangeIE(n), this.studySkillsHTMLRefreshRanges();
              var l = this.g_aTextRange.length
                , u = 0
                , m = null
                , S = null;
              for (u = 0; u < l; u++)
                if (m = this.g_aTextRange[u], null != m) {
                  if (n.inRange(m)) {
                    m = null, this.g_aTextRange.splice(u, 1), this.g_aHighlightColour.splice(u, 1), u--;
                    continue
                  }
                  if (S = m.duplicate(), S.collapse(!0), n.inRange(S)) {
                    var y = m.duplicate();
                    for (y.collapse(!1); y.compareEndPoints("StartToEnd", n) > 0;) y.moveStart("character", -1);
                    this.studySkillsClearRangeIE(this.g_aTextRange[u]), this.g_aTextRange[u] = y, this.rw_ieSpecificCallToSetHighlight(this.g_aTextRange[u], this.g_aHighlightColour[u])
                  } else if (S = m.duplicate(), S.collapse(!1), n.inRange(S)) {
                    var T = m.duplicate();
                    for (T.collapse(!0); T.compareEndPoints("EndToStart", n) < 0;) T.moveEnd("character", 1);
                    this.studySkillsClearRangeIE(this.g_aTextRange[u]), this.g_aTextRange[u] = T, this.rw_ieSpecificCallToSetHighlight(this.g_aTextRange[u], this.g_aHighlightColour[u])
                  }
                  if (m.inRange(n)) {
                    studySkillsClearRangeIE(m);
                    var T = m.duplicate()
                      , y = m.duplicate();
                    for (T.collapse(!0), y.collapse(!1); T.compareEndPoints("EndToStart", n) < 0;) T.moveEnd("character", 1);
                    for (; y.compareEndPoints("StartToEnd", n) > 0;) y.moveStart("character", -1);
                    this.studySkillsClearRangeIE(this.g_aTextRange[u]), this.g_aTextRange[u] = T, this.g_aTextRange.push(y), this.g_aHighlightColour.push(this.g_aHighlightColour[u]), this.rw_ieSpecificCallToSetHighlight(T, this.g_aHighlightColour[u]), this.rw_ieSpecificCallToSetHighlight(y, this.g_aHighlightColour[u])
                  }
                }
              n.execCommand("UnSelect", !1, null)
            } else {
              if (null == n || e) {
                if (!e) {
                  var o = !1;
                  if (!o) return
                }
                var w = this.g_aTextRange;
                this.g_aTextRange = new Array, this.g_aHighlightColour = new Array;
                for (var b = new s.SSDOM, f = 0; f < w.length; f++) {
                  var m = w[f];
                  m.refresh(), this.rw_removeHighlight(this.getListOfHighlightableNodes(m.startCaret, m.endCaret))
                }
              } else {
                n.refresh();
                for (var u = 0; u < this.g_aTextRange.length; u++) {
                  var C = this.g_aTextRange[u];
                  if (n.body == C.body) {
                    var _ = n.compareRange(C);
                    switch (_) {
                    case v.THDomRange_ERROR:
                      window.status = "Error occurred when trying to remove a highlight.";
                      break;
                    case v.THDomRange_TARGET_SAME:
                    case v.THDomRange_TARGET_INSIDE:
                      C.refresh(), this.rw_removeHighlight(this.getListOfHighlightableNodes(C.startCaret, C.endCaret)), this.g_aTextRange.splice(u, 1), this.g_aHighlightColour.splice(u, 1), --u, n.refresh();
                      break;
                    case v.THDomRange_TARGET_INCLUDES_THIS:
                    case v.THDomRange_TARGET_INCLUDES_THIS_AT_START:
                    case v.THDomRange_TARGET_INCLUDES_THIS_AT_END:
                      this.case1SFF(u, n, _), ++u;
                      break;
                    case v.THDomRange_OVERLAPS_START_OF_TARGET:
                      this.case2SFF(u, n);
                      break;
                    case v.THDomRange_OVERLAPS_END_OF_TARGET:
                      this.case3SFF(u, n);
                      break;
                    case v.THDomRange_AFTER_TARGET:
                      break;
                    case v.THDomRange_BEFORE_TARGET:
                    }
                  }
                }
              }
              b.rw_collapseSelection()
            }
          } catch (R) {}
        }
      }, {
        key: "studySkillsHTMLRefreshRanges"
        , value: function () {
          try {
            var e = null
              , t = !1
              , n = 0;
            for (n = 0; n < this.g_aTextRange.length; n++) {
              e = this.g_aTextRange[n];
              try {
                null != e.text && "" != e.text || (e = null)
              } catch (r) {
                e = null
              }
              null == e && (this.g_aTextRange.splice(n, 1), this.g_aHighlightColour.splice(n, 1), t = !0, n--)
            }
            return t
          } catch (a) {
            return !1
          }
        }
      }, {
        key: "case1SFF"
        , value: function (e, t, n) {
          var r = (new s.SSDOM, this.g_aHighlightColour[e])
            , a = this.g_aTextRange[e];
          a.refresh();
          var i = a.startRef
            , o = t.startRef
            , l = t.endRef
            , h = a.endRef;
          this.rw_removeHighlight(this.getListOfHighlightableNodes(a.startCaret, a.endCaret)), this.g_aTextRange.splice(e, 1), this.g_aHighlightColour.splice(e, 1);
          var f, g, d, p;
          if (n != v.THDomRange_TARGET_INCLUDES_THIS_AT_START) {
            var m = new c.THCaretRange(t.body, i.path, i.offset, o.path, o.offset);
            f = m.leftCaret, g = m.rightCaret, d = this.rw_setHighlight(f.node, f.offset, g.node, g.offset, r), p = new u.THDomRange(d.start, 0, d.end, d.end.nodeValue.length), this.g_aTextRange.push(p), this.g_aHighlightColour.push(r)
          }
          n != v.THDomRange_TARGET_INCLUDES_THIS_AT_END && (m = new c.THCaretRange(t.body, l.path, l.offset, h.path, h.offset), f = m.leftCaret, g = m.rightCaret, d = this.rw_setHighlight(f.node, f.offset, g.node, g.offset, r), p = new u.THDomRange(d.start, 0, d.end, d.end.nodeValue.length), this.g_aTextRange.push(p), this.g_aHighlightColour.push(r)), t.refresh()
        }
      }, {
        key: "case2SFF"
        , value: function (e, t) {
          var n = (new s.SSDOM, this.g_aHighlightColour[e])
            , r = this.g_aTextRange[e];
          r.refresh();
          var a = t.endRef
            , i = r.endRef;
          this.rw_removeHighlight(this.getListOfHighlightableNodes(r.startCaret, r.endCaret)), this.g_aTextRange.splice(e, 1), this.g_aHighlightColour.splice(e, 1);
          var o = new c.THCaretRange(t.body, a.path, a.offset, i.path, i.offset)
            , l = o.leftCaret
            , h = o.rightCaret
            , f = this.rw_setHighlight(l.node, l.offset, h.node, h.offset, n)
            , g = new u.THDomRange(f.start, 0, f.end, f.end.nodeValue.length);
          this.g_aTextRange.push(g), this.g_aHighlightColour.push(n), t.refresh()
        }
      }, {
        key: "case3SFF"
        , value: function (e, t) {
          var n = (new s.SSDOM, this.g_aHighlightColour[e])
            , r = this.g_aTextRange[e];
          r.refresh();
          var a = r.startRef
            , i = t.startRef;
          this.rw_removeHighlight(this.getListOfHighlightableNodes(r.startCaret, r.endCaret)), this.g_aTextRange.splice(e, 1), this.g_aHighlightColour.splice(e, 1);
          var o = new c.THCaretRange(t.body, a.path, a.offset, i.path, i.offset)
            , l = o.leftCaret
            , h = o.rightCaret
            , f = this.rw_setHighlight(l.node, l.offset, h.node, h.offset, n)
            , g = new u.THDomRange(f.start, 0, f.end, f.end.nodeValue.length);
          this.g_aTextRange.push(g), this.g_aHighlightColour.push(n), t.refresh()
        }
      }]), t
    }(f.HighlightBaseController)
  }, {
    "src/Constants/Constants": 1
    , "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/DomNavigation": 3
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/Highlighting/HighlightBaseController": 7
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/THDomRange": 29
    , "src/SpeechStream/THReturnObject": 32
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 12: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.ElementHelper = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/MathJax/LoopState");
    n.ElementHelper = function () {
      function e() {
        r(this, e)
      }
      return a(e, [{
        key: "isTokenType"
        , value: function (e) {
          return "entity" == e || "char" == e || "entities" == e || "chars" == e
        }
      }, {
        key: "looper"
        , value: function (e, t, n) {
          if (null != e) {
            var r = e.spanID ? e.spanID : e.CHTMLnodeID;
            if (r = null != r && void 0 != r ? r : e.PHTMLspanID, null != r && r == t) return n.pushToList(e), ++n.count, !0;
            if (null != e.data)
              for (var a = 0; a < e.data.length; a++) {
                var i = this.looper(e.data[a], t, n);
                if (i) return i
              }
          }
          return !1
        }
      }, {
        key: "getList"
        , value: function (e, t) {
          var n = new i.LoopState;
          return this.looper(e, t, n), n.getList()
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/MathJax/LoopState": 14
  }]
  , 13: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.HighlightData = function a() {
      r(this, a), this.style = null, this.fg = null, this.bg = null, this.lastSpanId = 0
    }
  }, {}]
  , 14: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    n.LoopState = function () {
      function e() {
        r(this, e), this.count = 1, this.list = []
      }
      return a(e, [{
        key: "pushToList"
        , value: function (e) {
          this.list.push(e)
        }
      }, {
        key: "getList"
        , value: function () {
          return this.list
        }
      }]), e
    }()
  }, {}]
  , 15: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.MathJaxHighlighter = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/MathJax/HighlightData")
      , o = e("src/SpeechStream/MathJax/ElementHelper")
      , l = e("src/SpeechStream/DOM/SSDOM");
    n.MathJaxHighlighter = function () {
      function e(t) {
        r(this, e), this.highlightDataStore = {}, this.highlightJaxRoot = t.root, this.highlightClearLast = !0, this.elementHelper = new o.ElementHelper
      }
      return a(e, [{
        key: "setClearLastHighlight"
        , value: function (e) {
          this.highlightClearLast = e
        }
      }, {
        key: "setHighlightStyle"
        , value: function (e, t, n, r, a) {
          if ("string" != typeof e) return !1;
          if (this.highlightDataStore[e] && this.highlightDataStore.hasOwnProperty(e)) {
            var o = this.highlightDataStore[e];
            o && o.lastSpanId > 0 && this.clearHighlightNodesImpl(e, o.style, o.lastSpanId)
          }
          if (null === t) return delete this.highlightDataStore[e], !0;
          if ("string" != typeof t) return !1;
          if (t = t.toLowerCase(), "" === t || "none" === t) return delete this.highlightDataStore[e], !0;
          var l, s, u;
          try {
            l = this.parseColor(n), s = this.parseColor(r), u = this.parseColor(a)
          } catch (c) {
            return !1
          }
          var h;
          return this.highlightDataStore[e] && this.highlightDataStore.hasOwnProperty(e) ? (h = this.highlightDataStore[e], "highlight" !== h.style && (h.fg = null, h.bg = null)) : h = new i.HighlightData, "fg" === t ? (h.style = "highlight", h.fg = "rgb(" + l + "," + s + "," + u + ")") : "bg" === t ? (h.style = "highlight", h.bg = "rgb(" + l + "," + s + "," + u + ")") : "outline" === t ? (h.style = t, h.fg = "rgb(" + l + "," + s + "," + u + ")", h.bg = null) : "underline" === t && (h.style = t, h.fg = "rgb(" + l + "," + s + "," + u + ")", h.bg = null), this.highlightDataStore[e] = h, !0
        }
      }, {
        key: "highlightNodes"
        , value: function (e, t) {
          var n;
          if (this.highlightDataStore[e] && this.highlightDataStore.hasOwnProperty(e) && (n = this.highlightDataStore[e], null !== n.style)) {
            n.lastSpanId > 0 && this.highlightClearLast && this.clearHighlightNodesImpl(e, n.style, n.lastSpanId), n.lastSpanId = t;
            var r = this.elementHelper.getList(this.highlightJaxRoot, t);
            this.highlightImpl(r, e, n.style, n.fg, n.bg)
          }
        }
      }, {
        key: "clearHighlights"
        , value: function () {
          for (var e in this.highlightDataStore)
            if (this.highlightDataStore.hasOwnProperty(e)) {
              var t = this.highlightDataStore[e];
              this.clearHighlightNodesImpl(e, "", t.lastSpanId), t.lastSpanId = 0
            }
        }
      }, {
        key: "clearHighlightNodes"
        , value: function (e, t) {
          this.clearHighlightNodesImpl(e, "", t)
        }
      }, {
        key: "parseColor"
        , value: function (e) {
          var t;
          if ("string" == typeof e) t = parseInt(e, 10);
          else {
            if ("number" != typeof e) throw "invalid";
            t = e
          }
          if (t < 0 || t > 255) throw "invalid";
          return t
        }
      }, {
        key: "clearHighlightNodesImpl"
        , value: function (e, t, n) {
          for (var r = this.elementHelper.getList(this.highlightJaxRoot, n), a = 0, i = r.length; a < i; a++) {
            var o = r[a];
            if ("" !== t && "outline" !== t || delete o.mathoutline, "" === t || "underline" === t)
              if (o.previousline) {
                this.removeFromPrevious(o.previousline, e);
                var l = o.previousline.length;
                l > 0 ? o.mathunderline = o.previousline[l - 1].val : o.mathunderline = ""
              } else o.mathunderline = "";
            if ("" === t || "highlight" === t) {
              if (o.previouscolor) {
                this.removeFromPrevious(o.previouscolor, e);
                var l = o.previouscolor.length;
                l > 0 ? o.mathcolor = o.previouscolor[l - 1].val : o.mathcolor = ""
              } else o.mathcolor = " ";
              delete o.mathbackground
            }
            var s = null;
            try {
              s = o.HTMLspanElement()
            } catch (u) {}
            if (null == s) try {
              s = o.CHTMLnodeElement()
            } catch (u) {}
            if (null == s) return;
            var c = !0;
            if (void 0 != o.HTMLremoveColor && (c = this.setupPostFix(s, e, !0)), c) try {
              o.HTMLhandleColor(s)
            } catch (h) {
              o.PHTMLhandleColor(s)
            }
            this.setdownPostFix();
            var c = !0;
            if (void 0 != o.HTMLremoveColor && (c = this.setupPostFix(s, e, !1)), c)
              if (void 0 != o.HTMLremoveColor) o.HTMLremoveColor();
              else {
                var f;
                try {
                  f = o.HTMLspanElement()
                } catch (u) {
                  f = o.CHTMLnodeElement()
                }
                null != f && (f.style.background = "", f.style.color = "")
              }
            if (this.setdownPostFix(), void 0 != o.HTMLremoveColor) {
              var f;
              try {
                f = o.HTMLspanElement()
              } catch (u) {
                f = o.CHTMLnodeElement()
              }
              null != f && (f.style.background = "", f.style.color = "")
            }
          }
        }
      }, {
        key: "highlightImpl"
        , value: function (e, t, n, r, a) {
          for (var i = 0, o = e.length; i < o; i++) {
            var s = e[i]
              , u = s.HTMLhandleColor ? s.HTMLhandleColor : s.CHTMLhandleColor;
            if ("function" == typeof u) {
              var c = null;
              try {
                c = s.CHTMLnodeElement()
              } catch (h) {}
              if (null == c) try {
                c = s.HTMLspanElement()
              } catch (h) {}
              if (null == c) return;
              if ("highlight" === n) {
                if (null != a && (s.mathbackground = a), null != r) {
                  if (s.previouscolor) this.removeFromPrevious(s.previouscolor, t);
                  else if (s.previouscolor = [], s.mathcolor) s.previouscolor.push({
                    key: ""
                    , val: s.mathcolor
                  });
                  else {
                    var f = new l.SSDOM
                      , g = f.getComputedStyle(c);
                    g.color
                  }
                  s.previouscolor.push({
                    key: t
                    , val: r
                  }), s.mathcolor = r
                }
              } else "outline" === n ? s.mathoutline = r + "thin solid" : "underline" === n && (s.previousline ? this.removeFromPrevious(s.previousline, t) : (s.previousline = [], s.textDecoration && s.previousline.push({
                key: ""
                , val: s.textDecoration
              })), s.previousline.push({
                key: t
                , val: "underline"
              }), s.mathunderline = "underline");
              var d = this.setupPostFix(c, t, !0);
              if (d) try {
                s.HTMLhandleColor(c)
              } catch (h) {
                s.PHTMLhandleColor(c)
              }
              this.setdownPostFix()
            }
          }
        }
      }, {
        key: "removeFromPrevious"
        , value: function (e, t) {
          for (var n = 0; n < e.length; n++)
            if (e[n].key === t) return void e.splice(n, 1)
        }
      }, {
        key: "setupPostFix"
        , value: function (e, t, n) {
          try {
            var r = MathJax.OutputJax["HTML-CSS"] ? MathJax.OutputJax["HTML-CSS"] : MathJax.OutputJax.CommonHTML
              , a = "-" + t;
            if (n) {
              var i = e.id + r.idPostfix + a;
              if (null != document.getElementById(i)) return !1
            }
            "string" == typeof r.idPostfix ? (this.m_strTmpPostFix = r.idPostfix, r.idPostfix += a) : (this.m_strTmpPostFix = "", r.idPostfix = a)
          } catch (o) {
            return !1
          }
          return !0
        }
      }, {
        key: "setdownPostFix"
        , value: function () {
          try {
            var e = MathJax.OutputJax["HTML-CSS"] ? MathJax.OutputJax["HTML-CSS"] : MathJax.OutputJax.CommonHTML;
            "" == this.m_strTmpPostFix && (e.idPostfix = null, delete e.idPostfix), null != this.m_strTmpPostFix && (e.idPostfix = this.m_strTmpPostFix, this.m_strTmpPostFix = null)
          } catch (t) {}
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/MathJax/ElementHelper": 12
    , "src/SpeechStream/MathJax/HighlightData": 13
  }]
  , 16: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    n.MathSpeak = function () {
      function e() {
        r(this, e), sre.System.getInstance()
          .setupEngine({
            semantics: !1
            , domain: "mathspeak"
            , style: "default"
          }), this.instance = sre.System.getInstance()
      }
      return a(e, [{
        key: "getTextFromMathJax"
        , value: function (e) {
          if (e.isMathJax) {
            for (var t = e; null != t && t.isMathJax && !t.id;) t = t.parentNode;
            var n;
            n = t && t.id ? "math:" + t.id + ";" : "math:none;"
          }
          var r = MathJax.Hub.getJaxFor(e);
          if (null != r) {
            var a = null;
            try {
              if (a = r.root.toMathML(""), null != a || a.length > 0) return n + a
            } catch (i) {}
            return ""
          }
          return ""
        }
      }, {
        key: "getSpeech"
        , value: function (e) {
          if ("string" == typeof e) {
            var t = document.getElementById(e);
            if (null != t && 1 == t.isMathJax) {
              var n = this.getMathMLText(e)
                , r = this.getMathMLObject(e);
              return n = n.replace(/<\/([^>]+)/g, "</mathml:$1>"), n = n.replace(/<([^>]+)/g, "<mathml:$1>"), this.instance.processExpression(this.getMathMLWithBookmarks(r, n, !1))
            }
          }
          return ""
        }
      }, {
        key: "getSpeechWithBookmarks"
        , value: function (e) {
          if ("string" == typeof e) {
            var t = document.getElementById(e);
            if (null != t && 1 == t.isMathJax) {
              var t = document.getElementById(e)
                , n = this.getMathMLText(e)
                , r = this.getMathMLObject(e);
              return this.instance.processExpression(this.getMathMLWithBookmarks(r, n, !0))
            }
          }
          return ""
        }
      }, {
        key: "getSpeechWithBookmarksFromElement"
        , value: function (e) {
          if (null != e && 1 == e.isMathJax) {
            var t = "";
            try {
              var n = this.getMathMLText(e)
                , r = this.getMathMLObject(e)
                , a = this.getMathMLWithBookmarks(r, n, !0);
              "" != a && (t = this.instance.processExpression(a))
            } catch (i) {}
            return t
          }
          return ""
        }
      }, {
        key: "getMathMLOriginalText"
        , value: function (e) {
          if ("string" == typeof e) {
            var t = document.getElementById(e);
            if (null != t && 1 == t.isMathJax) {
              var t = document.getElementById(e);
              return MathJax.Hub.getJaxFor(t)
                .originalText
            }
          }
          return ""
        }
      }, {
        key: "getMathMLText"
        , value: function (e) {
          if (null != e && 1 == e.isMathJax) {
            var t = MathJax.Hub.getJaxFor(e)
              .root.toMathML()
              , n = new DOMParser
              , r = n.parseFromString(t, "text/xml");
            if ("parsererror" == r.documentElement.nodeName || "parsererror" == r.documentElement.firstChild.nodeName) throw console.error("Mathml is invalid, Please contact page provider"), "Mathml is invalid, Please contact page provider";
            return t
          }
          return ""
        }
      }, {
        key: "getMathMLObject"
        , value: function (e) {
          return null != e && 1 == e.isMathJax ? MathJax.Hub.getJaxFor(e)
            .root : ""
        }
      }, {
        key: "isMathML"
        , value: function (e) {
          if ("string" == typeof e) {
            var t = document.getElementById(e);
            if (null != t && 1 == t.isMathJax) return !0
          }
          return !1
        }
      }, {
        key: "getMathMLWithBookmarks"
        , value: function (e, t, n) {
          if (null != t && (t = t.replace(/<mathml:math.*>/, '<math xmlns="http://www.w3.org/1998/Math/MathML">')), void 0 != e.data)
            for (var r = 0; r < e.data.length; r++)
              if (null != e.data[r]) {
                var a = e.data[r].spanID ? e.data[r].spanID : e.data[r].CHTMLnodeID;
                if (a = null != a && void 0 != a ? a : e.data[r].PHTMLspanID, e.data[r].toMathML && e.data[r].toMathML() && void 0 != a && void 0 != e.data[r].data[0] && void 0 != e.data[r].data[0].data[0] && void 0 == e.data[r].data[0].data[0].toMathML) {
                  var i = e.data[r].toMathML();
                  if (t.indexOf(i) == -1 && (i = i.replace(/>.*</, ">" + e.data[r].data[0].data[0] + "<")), n) var o = i.replace(">", ' bookmark ="' + a + '">');
                  else var o = i.replace(">", ' nobookmark ="">');
                  t = t.replace(i, o)
                }
                t = this.getMathMLWithBookmarks(e.data[r], t, n)
              }
          return t
        }
      }, {
        key: "getMathMLTextWithBookmarks"
        , value: function (e) {
          if ("string" == typeof e) {
            var t = document.getElementById(e);
            if (null != t && 1 == t.isMathJax) {
              var t = document.getElementById(e)
                , n = this.getMathMLText(e)
                , r = this.getMathMLObject(e);
              return this.getMathMLWithBookmarks(r, n, !0)
            }
          }
          return ""
        }
      }]), e
    }()
  }, {}]
  , 17: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    n.Prediction = function () {
      function e() {
        r(this, e), this.curser = 0, this.properties = ["boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing"]
      }
      return a(e, [{
        key: "setEditControl"
        , value: function (e) {
          ("TEXTAREA" == e.nodeName || "INPUT" == e.nodeName && "text" == e.type.toLowerCase()) && (this.controlEdit = e, this.curser = e.selectionEnd, this.currentChar = this.getCurrentCharacter(), e.setSelectionRange(this.curser, this.curser))
        }
      }, {
        key: "isEditable"
        , value: function () {
          return "undefined" != typeof this.controlEdit && ("TEXTAREA" == this.controlEdit.nodeName || "INPUT" == this.controlEdit.nodeName && "text" == this.controlEdit.type.toLowerCase())
        }
      }, {
        key: "getSentence"
        , value: function () {
          try {
            this.curser = this.controlEdit.selectionEnd
          } catch (e) {}
          var t, n = "";
          if (window.getSelection && (t = window.getSelection())
            .modify) {
            var r = t.getRangeAt(0);
            t.collapseToStart(), 32 == this.currentChar.charCodeAt(0) || 160 == this.currentChar.charCodeAt(0) ? t.modify("extend", "backward", "sentenceboundary") : t.modify("extend", "backward", "sentenceboundary"), n = t.toString(), t.removeAllRanges(), t.addRange(r)
          } else if ((t = document.selection) && "Control" != t.type) {
            var a = t.createRange();
            a.collapse(!0), a.expand("sentence"), n = a.text
          }
          return this.controlEdit.setSelectionRange(this.curser, this.curser), n
        }
      }, {
        key: "getPositionOfPopup"
        , value: function () {
          var e = this.controlEdit;
          if ("undefined" == typeof e) return {
            top: -100
            , left: -100
          };
          var t = getComputedStyle(e)
            .getPropertyValue("font-size");
          if ("TEXTAREA" == this.controlEdit.nodeName || "INPUT" == this.controlEdit.nodeName && "text" == this.controlEdit.type.toLowerCase()) {
            var n = this.getCaretCoordinates(e, e.selectionEnd);
            this.curser = e.selectionEnd;
            var r = {
              x: 0
              , y: 0
            };
            this.GetOffset(e, r);
            var a = r.y - e.scrollTop + n.top + parseInt(t) + 4 + "px"
              , i = r.x - e.scrollLeft + n.left + 10 + "px";
            return {
              top: a
              , left: i
            }
          }
          return {
            top: -100
            , left: -100
          }
        }
      }, {
        key: "GetOffset"
        , value: function (e, t) {
          e && (t.x += e.offsetLeft, t.y += e.offsetTop, this.GetOffset(e.offsetParent, t))
        }
      }, {
        key: "getCaretCoordinates"
        , value: function (e, t) {
          var n = document.getElementById(e.nodeName + "--mirror-div");
          n || (n = document.createElement("div"), n.id = e.nodeName + "--mirror-div", document.body.appendChild(n));
          var r = n.style
            , a = getComputedStyle(e);
          r.whiteSpace = "pre-wrap", "INPUT" !== e.nodeName && (r.wordWrap = "break-word"), r.position = "absolute", r.top = e.offsetTop + parseInt(a.borderTopWidth) + "px", r.left = "400px", r.visibility = "hidden", this.properties.forEach(function (e) {
            r[e] = a[e]
          }), r.overflow = "hidden", n.textContent = e.value.substring(0, t), "INPUT" === e.nodeName && (n.textContent = n.textContent.replace(/\s/g, " "));
          var i = document.createElement("span");
          i.textContent = e.value.substring(t) || ".", i.style.backgroundColor = "lightgrey", n.appendChild(i);
          var o = {
            top: i.offsetTop + parseInt(a.borderTopWidth)
            , left: i.offsetLeft + parseInt(a.borderLeftWidth)
          };
          return o
        }
      }, {
        key: "setSelectionRange"
        , value: function (e, t, n) {
          if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, n);
          else if (e.createTextRange) {
            var r = e.createTextRange();
            r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r.select()
          } else e.focus()
        }
      }, {
        key: "setCaretPosition"
        , value: function (e, t) {
          if (null != e)
            if (e.createTextRange) {
              var n = e.createTextRange();
              n.move("character", t), n.select()
            } else e.selectionStart ? (e.focus(), e.setSelectionRange(t, t)) : e.focus()
        }
      }, {
        key: "insertText"
        , value: function (e) {
          var t = this.controlEdit;
          if ("DIV" == t.tagName) {
            t.focus();
            var n = document.getElementById("rwPredictionPosition");
            this.setCaretPositionDiv(currentContextControlID), this.setSelectionRange(t, n.value, n.value), this.currentChar = this.getCurrentCharacter(), this.replaceSelectedText(e)
          } else this.CurrentPosition = t.selectionStart, this.setSelectionRange(t, this.CurrentPosition, this.CurrentPosition), this.currentChar = this.getCurrentCharacter(), this.setSelectionRange(t, this.CurrentPosition, this.CurrentPosition), this.replaceSelectedText(e), this.setSelectionRange(t, this.CurrentPosition, this.CurrentPosition), this.setCaretPosition(t, this.CurrentPosition);
          return !1
        }
      }, {
        key: "getCurrentCharacter"
        , value: function () {
          var e, t = "";
          if (window.getSelection && (e = window.getSelection())
            .modify) {
            var n = e.getRangeAt(0);
            e.collapseToStart(), e.modify("move", "backward", "character"), e.modify("extend", "forward", "character"), t = e.toString(), e.removeAllRanges(), e.addRange(n)
          } else if ((e = document.selection) && "Control" != e.type) {
            var r = e.createRange();
            r.collapse(!0), r.expand("word"), t = r.text
          }
          return t
        }
      }, {
        key: "replaceSelectedText"
        , value: function (e) {
          var t, n;
          e += " ";
          var r = 0;
          if (window.getSelection) {
            t = window.getSelection();
            var a = document.activeElement;
            if ("TEXTAREA" == a.nodeName || "INPUT" == a.nodeName && "text" == a.type.toLowerCase()) {
              if (this.curser > 0) switch (this.currentChar.charCodeAt(0)) {
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
                  var o = /^[0-9a-zA-Z]+$/;
                  i.substr(i.length - 1, 1)
                    .match(o) || (t.modify("extend", "backward", "character"), e = e.trim(), r++)
                }
              }
              var l = a.value
                , s = a.selectionStart
                , u = a.selectionEnd;
              if (navigator.appVersion.indexOf("Win") != -1);
              else switch (l.slice(u)
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
              a.value = l.slice(0, s) + e + l.slice(u), this.CurrentPosition = s + e.length + r
            } else {
              var t = window.getSelection();
              if (this.setCaretPositionDiv(a), 32 == this.currentChar.charCodeAt(0) || 160 == this.currentChar.charCodeAt(0));
              else {
                t.modify("move", "backward", "word"), t.modify("move", "backward", "character"), t.modify("extend", "forward", "character");
                var i = t.toString();
                "-" == i ? (t.modify("extend", "backward", "character"), t.modify("move", "forward", "character"), t.modify("move", "backward", "word"), t.modify("extend", "forward", "word"), t.modify("extend", "forward", "word")) : 32 == i.charCodeAt(0) && t.modify("move", "forward", "character"), t.modify("extend", "forward", "word")
              }
              t.rangeCount ? (n = t.getRangeAt(0), n.deleteContents(), n.insertNode(document.createTextNode(e))) : t.deleteFromDocument();
              var l = a.value
                , s = a.selectionStart
                , u = a.selectionEnd;
              a.value = l.slice(0, s) + e + l.slice(u), setCaretPositionDiv(a, s + e.length)
            }
          } else document.selection && document.selection.createRange && (n = document.selection.createRange(), n.text = e)
        }
      }, {
        key: "getSelection"
        , value: function () {
          var e, t = this.controlEdit;
          if (void 0 != document.selection) {
            t.focus();
            var n = document.selection.createRange();
            e = n.text
          } else if (void 0 != t.selectionStart) {
            var r = t.selectionStart
              , a = t.selectionEnd;
            e = t.value.substring(r, a)
          }
          return e
        }
      }]), e
    }()
  }, {}]
  , 18: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.ScrollInToView = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/DOM/SSDOM")
      , o = e("src/SpeechStream/Events/EventBus");
    n.ScrollInToView = function () {
      function e() {
        r(this, e)
      }
      return a(e, [{
        key: "rw_scrollToObject"
        , value: function (e) {
          var t = new i.SSDOM
            , n = !1;
          try {
            var r = t.getWindow(e);
            if (null == r || null == e || null == e.parentNode) return;
            var a = 0
              , l = 0
              , s = e;
            3 == s.nodeType && (s = s.parentNode);
            for (var u = null, c = s, h = s.ownerDocument.body, f = !1, g = null; null != c && c != h;) "div" != c.tagName.toLowerCase() && "form" != c.tagName.toLowerCase() || this.rw_isDivScrollable(c) && (f = !0, u = this.rw_scrollToObjectDivCheck(s, c, u), g = c, s = c), c = c.parentNode;
            for (null != g && (s = g); null != s;) a += s.offsetLeft, l += s.offsetTop, s = s.offsetParent;
            null != u && (l += u.y, a += u.x);
            var d, p, v, m, S = 30;
            3 == e.nodeType && (S = 10 + 5 * e.nodeValue.length, S > 60 && (S = 60)), d = this.rw_getScreenOffsetLeft(r), p = this.rw_getScreenOffsetTop(r), "number" == typeof r.innerWidth ? (v = r.innerWidth, m = r.innerHeight) : r.document.documentElement.clientHeight > 0 && r.document.documentElement.clientWidth > 0 ? (v = r.document.documentElement.clientWidth, m = r.document.documentElement.clientHeight) : (v = r.document.body.clientWidth, m = r.document.body.clientHeight), v -= S, m -= 20;
            var y, T;
            if (y = a < d || a > d + v, T = l < p || l > p + m, y || T && (0 != a || 0 != l)) {
              a > d + v && (a = (a + d) / 2), l > p + m && (l = (l + p) / 2), n && (n = !1);
              var w = new o.EventBus;
              w.publish("pauseHover", null), r.scrollTo(y ? a : d, T ? l : p);
              var b = !1;
              b && (rw_positionToolbar(), rw_positionAllDivBars())
            }
          } catch (C) {}
        }
      }, {
        key: "rw_getScreenOffsetLeft"
        , value: function (e) {
          return "undefined" == typeof e && (e = window), e.pageXOffset && e.pageXOffset > 0 ? e.pageXOffset : e.document.body.scrollLeft && e.document.body.scrollLeft > 0 ? e.document.body.scrollLeft : e.document.documentElement.scrollLeft && e.document.documentElement.scrollLeft > 0 ? e.document.documentElement.scrollLeft : 0
        }
      }, {
        key: "rw_getScreenOffsetTop"
        , value: function (e) {
          return "undefined" == typeof e && (e = window), e.pageYOffset && e.pageYOffset > 0 ? e.pageYOffset : e.document.body.scrollTop && e.document.body.scrollTop > 0 ? e.document.body.scrollTop : e.document.documentElement.scrollTop && e.document.documentElement.scrollTop > 0 ? e.document.documentElement.scrollTop : 0
        }
      }, {
        key: "rw_getScreenOffsetLeftAlt"
        , value: function (e) {
          if ("undefined" == typeof e && (e = window), "CSS1Compat" == e.document.compatMode && e.document.body.parentNode && e.document.body.parentNode.scrollLeft) return e.document.body.parentNode.scrollLeft;
          var t = e.pageXOffset ? e.pageXOffset : e.scrollX ? e.scrollX : e.document.body.scrollLeft ? e.document.body.scrollLeft : e.document.documentElement.scrollLeft ? e.document.documentElement.scrollLeft : 0;
          return t
        }
      }, {
        key: "rw_scrollToObjectDivCheck"
        , value: function (e, t, n) {
          for (var r, a, i = t.clientHeight, o = t.clientWidth, l = e.getBoundingClientRect()
              .right - e.getBoundingClientRect()
              .left, s = 0, u = 0, c = e; c != t && null != c;) s += c.offsetTop, u += c.offsetLeft, c = this.rw_safeOffsetParent(c, t);
          return null == c && (u -= t.offsetLeft, s -= t.offsetTop), null != n && (s += n.y, u += n.x), (t.scrollTop > s || t.scrollTop + i < s + e.offsetHeight) && (i > 6 * e.offsetHeight ? t.scrollTop = s - e.offsetHeight : t.scrollTop = s), l < 200 && (t.scrollLeft > u || t.scrollLeft + o < u + e.offsetWidth) && (t.scrollLeft = u), r = u - t.scrollLeft, a = s - t.scrollTop, {
            x: r
            , y: a
          }
        }
      }, {
        key: "rw_safeOffsetParent"
        , value: function (e, t) {
          var n = e
            , r = n.offsetParent;
          if (null == r) return null;
          if (null == t) return r;
          for (; null != n && n != r;) {
            if (n == t) return null;
            n = n.parentNode
          }
          return r
        }
      }, {
        key: "rw_isDivScrollable"
        , value: function (e) {
          var t = new i.SSDOM
            , n = e.clientHeight
            , r = e.clientWidth
            , a = t.getComputedStyle(e)
            , o = !1;
          return null != a && "visible" != a.overflow && "inline" != a.display && (e.scrollHeight > n && "visible" != a.overflowY && (o = !0), e.scrollWidth > r && "visible" != a.overflowX && (o = !0)), o
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/Events/EventBus": 6
  }]
  , 19: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    n.BaseSelection = function () {
      function e() {
        r(this, e)
      }
      return a(e, [{
        key: "clearSelection_"
        , value: function () {
          this.clearBrowserSelection()
        }
      }, {
        key: "clearBrowserSelection"
        , value: function () {
          if (window.getSelection) {
            for (var e = 0; e < window.frames.length; e++) try {
              window.getSelection()
                .empty ? window.frames[e].getSelection()
                .empty() : window.getSelection()
                .removeAllRanges && window.frames[e].getSelection()
                .removeAllRanges()
            } catch (t) {}
            window.getSelection()
              .empty ? window.getSelection()
              .empty() : window.getSelection()
              .removeAllRanges && window.getSelection()
              .removeAllRanges()
          } else document.selection && document.selection.empty()
        }
      }, {
        key: "getSelectionRange"
        , value: function () {}
      }, {
        key: "hasSelection"
        , value: function () {}
      }]), e
    }()
  }, {}]
  , 20: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e
          , enumerable: !1
          , writable: !0
          , configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.HoverSpeak = void 0;
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , l = (e("src/SpeechStream/THCaretRange"), e("src/SpeechStream/THCaret"), e("src/SpeechStream/THDomRange"))
      , s = e("src/SpeechStream/Selection/BaseSelection")
      , u = e("src/SpeechStream/Events/EventBus")
      , c = e("src/SpeechStream/SpeechObject");
    n.HoverSpeak = function (e) {
      function t() {
        r(this, t);
        var e = a(this, Object.getPrototypeOf(t)
          .call(this));
        e.event = {}, e.timerEvent = null, e.callback = null, e.caretRange = null;
        var n = new u.EventBus;
        return n.subscribe("pauseHover", e.clearTimer.bind(e)), e.sentence, e.readRange = null, e
      }
      return i(t, e), o(t, [{
        key: "mouseMoved"
        , value: function (e, t) {
          var n = this;
          clearTimeout(this.timerEvent), this.event = e, this.callback = t, this.timerEvent = setTimeout(function () {
            return n.startSpeech()
          }, 500)
        }
      }, {
        key: "clearTimer"
        , value: function () {
          clearTimeout(this.timerEvent)
        }
      }, {
        key: "clearHoverSpeak"
        , value: function () {
          clearTimeout(this.timerEvent), null == this.sentence
        }
      }, {
        key: "startSpeech"
        , value: function () {
          var e;
          if ("textarea" == this.event.target.tagName.toLowerCase()) e = new l.THDomRange(this.event.target, 0, this.event.target, 0), this.readRange = e, this.callback();
          else {
            if (document.caretRangeFromPoint) {
              var t = this.event.target.ownerDocument.caretRangeFromPoint(this.event.clientX, this.event.clientY);
              e = new l.THDomRange(t.startContainer, t.startOffset, t.endContainer, t.endOffset);
            } else {
              var t = this.event.target.ownerDocument.caretPositionFromPoint(this.event.clientX, this.event.clientY);
              e = new l.THDomRange(t.offsetNode, t.offset, t.offsetNode, t.offset)
            }
            var n = new c.SpeechObject;
            n.processRange(e, !0);
            var r = n.getFirstSentence()
              , a = ""
              , i = "";
            this.sentence && this.sentence.getRawText() && (a = this.sentence.getRawText()), r.getRawText() && (i = r.getRawText()), this.event.target == e.startCaret.node.parentElement && (null != this.sentence && a.indexOf(i) != -1 || (this.sentence = r, this.readRange = e, this.callback()))
          }
        }
      }, {
        key: "getSelectionRange"
        , value: function () {
          return this.readRange
        }
      }]), t
    }(s.BaseSelection)
  }, {
    "src/SpeechStream/Events/EventBus": 6
    , "src/SpeechStream/Selection/BaseSelection": 19
    , "src/SpeechStream/SpeechObject": 26
    , "src/SpeechStream/THCaret": 27
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/THDomRange": 29
  }]
  , 21: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e
          , enumerable: !1
          , writable: !0
          , configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.SelectionController = void 0;
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , l = (e("src/SpeechStream/THCaretRange"), e("src/SpeechStream/THDomRange"))
      , s = e("src/SpeechStream/Utilities/Utilities")
      , u = e("src/SpeechStream/DOM/SSDOM")
      , c = e("src/SpeechStream/Selection/BaseSelection")
      , h = e("src/SpeechStream/DOM/DomNavigation");
    e("src/SpeechStream/DOM/Attribute"), n.SelectionController = function (e) {
      function t() {
        r(this, t);
        var e = a(this, Object.getPrototypeOf(t)
          .call(this));
        return e.g_ipadSelectionRange = null, e
      }
      return i(t, e), o(t, [{
        key: "getSelectionRange"
        , value: function () {
          var e = this.getSelection_();
          return e ? e.range : null
        }
      }, {
        key: "getSelectionObject"
        , value: function () {
          var e = this.getSelection_();
          return this.clearBrowserSelection(), e
        }
      }, {
        key: "isMathJax"
        , value: function (e) {
          if ("undefined" != typeof MathJax) {
            if (e.startCaret.node.isMathJax) return !0;
            if (e.startCaret.node.parentNode.isMathJax) return !0
          }
          return !1
        }
      }, {
        key: "hasSelection"
        , value: function () {
          var e = this.getSelection_();
          return null != e && void 0 != e
        }
      }, {
        key: "getSelectionString"
        , value: function () {
          var e = this.getSelection_()
            , t = e.range.toString();
          return t
        }
      }, {
        key: "getSelection_"
        , value: function () {
          var e = new u.SSDOM
            , t = new h.DomNavigation
            , n = null
            , r = null;
          null != this.g_ipadSelectionRange && g_ipadSelectionWindow.getSelection()
            .addRange(this.g_ipadSelectionRange);
          var a = window.getSelection()
            , i = null
            , o = new s.Utilities;
          if (!a.isCollapsed && o.trim(a.toString())
            .length > 0 && (n = window, i = a), null == i) {
            for (var c = 0; null == i && c < window.frames.length;) try {
              a = window.frames[c].getSelection(), c++, !a.isCollapsed && o.trim(a.toString())
                .length > 0 && (n = window, i = a)
            } catch (f) {
              i = null, c++
            }
            if (null == i) return null
          }
          if (i.focusNode && i.focusNode.id && "flashcontent" == i.focusNode.id) return null;
          if (null != i.anchorNode && i.anchorNode == i.focusNode && i.anchorOffset == i.focusOffset) return null;
          var g = null;
          if (i.getRangeAt) g = i.getRangeAt(0);
          else {
            var d = e.getRangeObject();
            null != d && (i.anchorNode == i.focusNode && i.anchorOffset == i.focusOffset ? d = e.getRangeFromSelectionPoint(i) : (d.setStart(i.anchorNode, i.anchorOffset), d.setEnd(i.focusNode, i.focusOffset), 0 == d.toString()
              .length && (d.setStart(i.focusNode, i.focusOffset), d.setEnd(i.anchorNode, i.anchorOffset))), g = d)
          }
          if (null == g) return null;
          var p = g.startContainer
            , v = g.startOffset
            , m = g.endContainer
            , S = g.endOffset;
          if (3 != p.nodeType) {
            if (1 != p.nodeType) return null;
            if (v > 0 && p.hasChildNodes() && p.childNodes.length > v)
              if (p = p.childNodes[v], 3 == p.nodeType) v = 0;
              else if (v = 0, "[object HTMLEmbedElement]" == p.toString()) return null
          }
          if (3 != m.nodeType) {
            if (1 != m.nodeType) return null;
            if (m.hasChildNodes())
              if (m.childNodes.length > S) m = m.childNodes[S];
              else if (m = m.childNodes[S - 1], 3 != m.nodeType) {
              var y = t.getLastChildTextNode(m, !0);
              null != y && (m = y)
            }
            if (3 != m.nodeType) {
              var T = t.getPreviousNode(p, !0, null)
                , y = t.getPreviousTextNode(m, !1, T);
              null != y && (m = y)
            }
            S = 3 == m.nodeType ? m.nodeValue.length : 0
          }
          return r = new l.THDomRange(p, v, m, S), null != n && null != r ? {
            frame: n
            , range: r
          } : null
        }
      }]), t
    }(c.BaseSelection)
  }, {
    "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/DomNavigation": 3
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/Selection/BaseSelection": 19
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/THDomRange": 29
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 22: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.BaseObject = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/THRange")
      , o = e("src/SpeechStream/DOM/SSDOM");
    n.BaseObject = function () {
      function e(t) {
        r(this, e), this.m_range = null, this.m_type = t, this.m_bValid = !0, this.m_contents = null, this.Types = {
          WORD: 1
          , SENTENCE: 2
          , SSML: 3
          , DOCUMENT: 4
          , SILENCE: 5
        }
      }
      return a(e, [{
        key: "getRange"
        , value: function () {
          return this.m_range
        }
      }, {
        key: "setRange"
        , value: function (e) {
          e instanceof i.THRange && (this.m_range = e)
        }
      }, {
        key: "getType"
        , value: function () {
          return this.m_type
        }
      }, {
        key: "isValid"
        , value: function () {
          return this.m_bValid
        }
      }, {
        key: "setValid"
        , value: function (e) {
          this.m_bValid = e
        }
      }, {
        key: "getContents"
        , value: function () {
          return null == this.m_contents && (this.m_contents = []), this.m_contents
        }
      }, {
        key: "setContents"
        , value: function (e) {
          e instanceof Array ? this.m_contents = e : this.m_contents = [e]
        }
      }, {
        key: "addContent"
        , value: function (e) {
          null == this.m_contents && (this.m_contents = []), this.m_contents.push(e)
        }
      }, {
        key: "isOverridingText"
        , value: function () {
          return !1
        }
      }, {
        key: "getWordCount"
        , value: function () {
          if (this.m_type == this.Types.WORD || this.isOverridingText()) return 1;
          var e = 0;
          if (null == this.m_contents && (this.m_contents = []), this.m_contents.length > 0) {
            var t, n = this.m_contents.length;
            for (t = 0; t < n; t++) e += this.m_contents[t].getWordCount()
          }
          return e
        }
      }, {
        key: "getWords"
        , value: function () {
          if (this.m_type == this.Types.WORD || this.isOverridingText()) return [this];
          var e = [];
          if (null == this.m_contents && (this.m_contents = []), this.m_contents.length > 0) {
            var t, n = this.m_contents.length;
            for (t = 0; t < n; t++) e = e.concat(this.m_contents[t].getWords())
          }
          return e
        }
      }, {
        key: "getFirstNode"
        , value: function () {
          var e = new o.SSDOM
            , t = this.getRange();
          if (null != t) {
            var n = e.rw_getCaretFromRefPt(t.body, t.startRef);
            if (null != n && null != n.node) return n.node
          }
          return null
        }
      }, {
        key: "getSpokenText"
        , value: function () {
          return ""
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/THRange": 31
  }]
  , 23: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e
          , enumerable: !1
          , writable: !0
          , configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.MathWordObject = void 0;
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , l = e("src/SpeechStream/Sentence/BaseObject");
    n.MathWordObject = function (e) {
      function t(e, n) {
        r(this, t);
        var i = a(this, Object.getPrototypeOf(t)
          .call(this, 1));
        return i.spanID = e, i.m_strWord = n, i.m_strPronunciation = null, i
      }
      return i(t, e), o(t, [{
        key: "getRange"
        , value: function () {
          return this.spanID
        }
      }, {
        key: "setRange"
        , value: function (e) {
          this.spanID = e
        }
      }, {
        key: "getWord"
        , value: function () {
          return this.m_strWord
        }
      }]), t
    }(l.BaseObject)
  }, {
    "src/SpeechStream/Sentence/BaseObject": 22
  }]
  , 24: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e
          , enumerable: !1
          , writable: !0
          , configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.SentenceObject = void 0;
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , l = e("src/SpeechStream/DOM/SSDOM")
      , s = e("src/SpeechStream/Utilities/Utilities")
      , u = e("src/SpeechStream/TextOverRangeBeanClass")
      , c = e("src/SpeechStream/Sentence/BaseObject")
      , h = e("src/SpeechStream/THDomRange")
      , f = e("src/SpeechStream/MathJax/MathSpeak")
      , g = e("src/SpeechStream/Sentence/WordObject")
      , d = e("src/SpeechStream/Sentence/MathWordObject")
      , p = e("src/SpeechStream/THRange")
      , v = e("src/SpeechStream/DOM/DomNavigation");
    e("src/SpeechStream/DOM/Attribute"), n.SentenceObject = function (e) {
      function t(e) {
        r(this, t);
        var n = a(this, Object.getPrototypeOf(t)
          .call(this, 2));
        if (new l.SSDOM, null != e) {
          if (n.m_range = new h.THDomRange(e.leftCaret.node, e.leftCaret.offset, e.rightCaret.node, e.rightCaret.offset), n.m_caretRange = e, e.leftCaret.node.isMathJax) {
            var i = new f.MathSpeak;
            try {
              n.math = !0, n.m_strRawText = i.getSpeechWithBookmarksFromElement(e.leftCaret.node), n.splitMathIntoWords(), n.sentenceSpanId = e.leftCaret.node.id
            } catch (o) {}
          } else n.m_strRawText = e.getTextOverCaretRange(), n.math = !1;
          n.m_strMarkedText
        }
        return n
      }
      return i(t, e), o(t, [{
        key: "setVoice"
        , value: function (e) {
          this.m_strVoice = e
        }
      }, {
        key: "getVoice"
        , value: function () {
          return this.m_strVoice
        }
      }, {
        key: "getSpanId"
        , value: function () {
          return this.sentenceSpanId
        }
      }, {
        key: "setCaretRange"
        , value: function (e) {
          this.m_caretRange = e, this.m_range = m_caretRange.rw_getTHRangeFromTHCaretRange()
        }
      }, {
        key: "getCaretRange"
        , value: function () {
          return this.m_caretRange
        }
      }, {
        key: "setWords"
        , value: function (e) {
          var t = new g.WordObject(null, e);
          this.setContents(t)
        }
      }, {
        key: "getWords"
        , value: function () {
          for (var e = new Array, t = this.getContents(), n = 0; n < t.length; n++) e.push(t[n].getWord());
          return e
        }
      }, {
        key: "getWordRange"
        , value: function (e) {
          var t = this.getContents();
          return e < t.length ? t[e].getRange() : null
        }
      }, {
        key: "isMathML"
        , value: function () {
          return this.math
        }
      }, {
        key: "getRawText"
        , value: function () {
          return this.m_strRawText
        }
      }, {
        key: "setRawText"
        , value: function (e) {
          this.m_strRawText = e
        }
      }, {
        key: "getMarkedText"
        , value: function () {
          return this.m_strMarkedText
        }
      }, {
        key: "setMarkedText"
        , value: function (e) {
          this.m_strMarkedText = e
        }
      }, {
        key: "clone"
        , value: function () {
          var e = new t(m_caretRange);
          return e.setContents(this.getContents()), e.setValid(this.isValid()), e.setVoice(m_strVoice), e.setRawText(m_strRawText), e.setMarkedText(m_strMarkedText), e
        }
      }, {
        key: "splitMathIntoWords"
        , value: function () {
          if ("" != this.m_strRawText) {
            var e = this.m_strRawText.toLowerCase()
              .match(/<bookmark mark="[0-9]+"\/>+/g)
              , t = this.m_strRawText.toLowerCase()
              .split(/<bookmark mark="[0-9]+"\/>+/g)
              , n = 0;
            t.length > 0 && "" == t[0] && (n = 1);
            for (var r = 0; r < e.length; r++) {
              var a = e[r].match(/[0-9]+/g)
                , i = new d.MathWordObject(a[0], t[n]);
              this.addContent(i), n++
            }
          }
        }
      }, {
        key: "processTextToSpeakInSentenceObject"
        , value: function () {
          this.processTextToSpeakInSentenceObjectImpl();
          for (var e = this.getContents(), t = 0; t < e.length; t++) {
            var n = e[t]
              , r = n.getFirstNode();
            null != r && this.isNestedSsml(r) && this.insertInWrappingSsml(e, t, r)
          }
        }
      }, {
        key: "isNestedSsml"
        , value: function (e) {
          for (var t = e.ownerDocument.body, n = e; n != t && null != n;) {
            if (null != this.checkForSsmlAttribute(n)) return !0;
            n = n.parentNode
          }
          return !1
        }
      }, {
        key: "insertInWrappingSsml"
        , value: function (e, t, n) {
          for (var r = n.ownerDocument.body, a = n, i = new l.SSDOM; a != r && null != a;)
            if (a = a.parentNode, null != this.checkForSsmlAttribute(a)) {
              var o = this.checkForSsmlAttribute(a);
              if (o.canContainContent()) {
                var s = e[t];
                e[t] = o, o.setContents([s]);
                for (var u = t + 1; u < e.length; u++) {
                  var c = e[u]
                    , h = c.getFirstNode();
                  if (!i.checkIfElementInsideElement(h, a)) break;
                  s = e[u], o.addContent(s), e.splice(u, 1), u--
                }
              } else {
                e[t] = o;
                for (var u = t + 1; u < e.length; u++) {
                  var c = e[u]
                    , h = c.getFirstNode();
                  if (!i.checkIfElementInsideElement(h, a)) break;
                  e.splice(u, 1), u--
                }
              }
            }
          return !1
        }
      }, {
        key: "processTextToSpeakInSentenceObjectImpl"
        , value: function () {
          var e = new l.SSDOM;
          try {
            var t = new u.TextOverRangeBeanClass(this);
            for (this.setupCheck(t), t.startRefPt = e.rw_getRefPt(t.leftNode, t.leftOffset), t.endRefPt = null; null != t.currentNode;) {
              if (this.checkIfTooLong(t)) return;
              var n = t.currentNode;
              e.isSpecialCase(n) ? this.handleSpecialCase(t) : 1 == n.nodeType ? this.handleElement(t) : 3 == n.nodeType ? this.handleTextNode(t) : this.moveToNextNode(t)
            }
          } catch (r) {
            this.setValid(!1)
          }
        }
      }, {
        key: "handleTextNode"
        , value: function (e) {
          var t = new l.SSDOM
            , n = new v.DomNavigation
            , r = e.currentNode
            , a = n.getTextFromNode(r);
          null == a && (a = "");
          var i = 0;
          if (e.rightNode == r && e.rightOffset > -1 && (a = a.substring(0, e.rightOffset)), e.leftNode == r && e.leftOffset > 0 && (a = a.substring(e.leftOffset), i = e.leftOffset), 0 == a.length && 0 == e.storedText.length) e.startRefPt = null;
          else {
            null != e.startRefPt && 0 != e.storedText.length || (e.startRefPt = t.rw_getRefPt(r, i));
            for (var o = t.rw_getBreakInCurrentWord(a); o > -1;) {
              var s = e.storedText + a.substring(0, o + 1);
              if (e.storedText = this.filterWordToSpeak(s), null != e.endRefPt && 0 == o || (e.endRefPt = t.rw_getRefPt(r, o + i)), this.moveStoredTextToWordObject(e), this.checkIfTooLong(e)) return void(e.currentNode = null);
              i += o + 1, a = a.substring(o + 1), e.startRefPt = t.rw_getRefPt(r, i), e.endRefPt = null, o = t.rw_getBreakInCurrentWord(a)
            }
            if (a.length > 0 && (e.storedText += a, e.endRefPt = t.rw_getRefPt(r, a.length + i), null == e.endRefPt && (e.storedText = "")), r == e.rightNode) return this.moveStoredTextToWordObject(e), void(e.currentNode = null)
          }
          this.moveToNextNode(e)
        }
      }, {
        key: "filterWordToSpeak"
        , value: function (e) {
          var t = (new l.SSDOM, new s.Utilities);
          return "*" == t.trim(e), e
        }
      }, {
        key: "handleElement"
        , value: function (e) {
          var t = e.currentNode
            , n = this.checkForSsmlAttribute(t);
          null != n || this.moveToNextNode(e)
        }
      }, {
        key: "moveToNextNode"
        , value: function (e) {
          var t = (new l.SSDOM, new v.DomNavigation)
            , n = e.currentNode
            , r = t.getNextNode(n, !0, e.rightNode);
          null == r ? (e.storedText = this.getTextOverRangeToSpeakAddFullStop(e.storedText), this.moveStoredTextToWordObject(e), e.currentNode = t.getNextNode(n, !1, e.rightNode)) : e.currentNode = r
        }
      }, {
        key: "getTextOverRangeToSpeakAddFullStop"
        , value: function (e) {
          var t = new l.SSDOM
            , n = e.length;
          if (n > 1 && ". " == e.substr(n - 2, 2)) return e;
          if (n > 0 && "." == e.substr(n - 1, 1)) return e + " ";
          var r = new s.Utilities
            , a = r.trimEndTH(e)
            , i = a.charCodeAt(a.length - 1);
          return t.rw_isLetter(i) || i > 127 ? e + ". " : e
        }
      }, {
        key: "handleSpecialCase"
        , value: function (e) {
          var t = new l.SSDOM
            , n = new v.DomNavigation;
          this.moveStoredTextToWordObject(e);
          var r = e.currentNode;
          if (e.storedText = n.getTextFromNode(r), t.isSpecialCaseHighlightable(r)) {
            var a = n.getFirstChildTextNode(r, !1)
              , i = n.getLastChildTextNode(r, !1);
            null != a && null != i ? 3 == a.nodeType && 3 == i.nodeType ? (e.startRefPt = t.rw_getRefPt(a, 0), e.endRefPt = t.rw_getRefPt(i, i.nodeValue.length)) : (e.startRefPt = t.rw_getRefPt(a, -1), e.endRefPt = t.rw_getRefPt(i, -1)) : (e.startRefPt = t.rw_getRefPt(r, -1), e.endRefPt = e.startRefPt)
          } else e.startRefPt = t.rw_getRefPt(r, -1), e.endRefPt = e.startRefPt;
          this.moveStoredTextToWordObject(e), e.currentNode = n.getNextNodeIgnoreChildren(r, !1, e.rightNode)
        }
      }, {
        key: "moveStoredTextToWordObject"
        , value: function (e) {
          var t = new l.SSDOM;
          if (t.rw_isWordSpeakable(e.storedText) && null != e.startRefPt && null != e.endRefPt) {
            var n = new g.WordObject(new p.THRange(e.body, e.startRefPt, e.endRefPt), e.storedText);
            e.sentenceObject.addContent(n)
          }
          this.clearState(e)
        }
      }, {
        key: "clearState"
        , value: function (e) {
          e.startRefPt = null, e.endRefPt = null, e.storedText = ""
        }
      }, {
        key: "checkIfTooLong"
        , value: function (e) {
          var t = 500;
          return t > 0 && e.sentenceObject.getWordCount() > t
        }
      }, {
        key: "setupCheck"
        , value: function (e) {
          var t = new l.SSDOM
            , n = new v.DomNavigation;
          1 == e.leftNode.nodeType && (t.isSpecialCase(e.leftNode) || null != this.checkForSsmlAttribute(e.leftNode) || (e.leftNode = n.getNextNodeAllowMoveToChild(e.currentNode, !1, e.rightNode), e.leftOffset = 0))
        }
      }, {
        key: "checkForSsmlAttribute"
        , value: function (e) {
          if (1 == e.nodeType) {
            var t = this.checkForSsmlNoNamespace(e);
            if (null != t) return t;
            if (t = this.checkForSsmlNamespace(e), null != t) return t
          }
          return null
        }
      }, {
        key: "checkForSsmlNamespace"
        , value: function (e) {
          return null
        }
      }, {
        key: "checkForSsmlNoNamespace"
        , value: function (e) {
          return null
        }
      }, {
        key: "checkForCommands"
        , value: function () {
          if (g_bUseCommands) {
            var e, t, n = this.getSentences();
            for (t = 0; t < n.length; t++) {
              e = n[t];
              var r = e.getCaretRange()
                .leftCaret
                , a = e.getCaretRange()
                .rightCaret
                , i = rw_findCommandNode(r.node)
                , o = rw_checkForCommandChange(r.node, a.node, i);
              if (null != o) {
                var s = e.clone()
                  , u = e.clone()
                  , c = new THCaretRange(r, o)
                  , h = o.clone();
                h.forwardBias = !0, h = l.SSDOM.moveCaret(h, 0, !1);
                var f = new THCaretRange(h, a);
                s.setCaretRange(c), u.setCaretRange(f), n.splice(t, 1, s, u)
              }
            }
            this.setSentences(n)
          }
        }
      }]), t
    }(c.BaseObject)
  }, {
    "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/DomNavigation": 3
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/MathJax/MathSpeak": 16
    , "src/SpeechStream/Sentence/BaseObject": 22
    , "src/SpeechStream/Sentence/MathWordObject": 23
    , "src/SpeechStream/Sentence/WordObject": 25
    , "src/SpeechStream/THDomRange": 29
    , "src/SpeechStream/THRange": 31
    , "src/SpeechStream/TextOverRangeBeanClass": 33
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 25: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e
          , enumerable: !1
          , writable: !0
          , configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.WordObject = void 0;
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , l = e("src/SpeechStream/Sentence/BaseObject");
    n.WordObject = function (e) {
      function t(e, n) {
        r(this, t);
        var i = a(this, Object.getPrototypeOf(t)
          .call(this, 1));
        return i.setRange(e), i.m_strWord = n, i.m_strPronunciation = null, i
      }
      return i(t, e), o(t, [{
        key: "getWord"
        , value: function () {
          return this.m_strWord
        }
      }, {
        key: "setPronunciation"
        , value: function (e) {
          this.m_strPronunciation = e
        }
      }, {
        key: "getPronunciation"
        , value: function () {
          return this.m_strPronunciation
        }
      }, {
        key: "isOverridingText"
        , value: function () {
          return null != this.m_strPronunciation
        }
      }, {
        key: "getSpokenText"
        , value: function () {
          var e;
          return e = null != this.m_strPronunciation ? this.m_strPronunciation : this.m_strWord
        }
      }]), t
    }(l.BaseObject)
  }, {
    "src/SpeechStream/Sentence/BaseObject": 22
  }]
  , 26: [function (e, t, n) {
    "use strict";

    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e
          , enumerable: !1
          , writable: !0
          , configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.SpeechObject = void 0;
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , s = e("src/SpeechStream/Sentence/BaseObject")
      , u = e("src/SpeechStream/DOM/SSDOM")
      , c = e("src/SpeechStream/Sentence/SentenceObject")
      , h = (e("src/SpeechStream/THCaret"), e("src/SpeechStream/Utilities/Utilities"), e("src/SpeechStream/THCaretRange"))
      , f = (e("src/SpeechStream/THDomRange"), e("src/SpeechStream/DOM/DomSentences"));
    n.SpeechObject = function (e) {
      function t() {
        a(this, t);
        var e = i(this, Object.getPrototypeOf(t)
          .call(this, 3));
        return e.m_bBatch = !1, e.SSML_NAMESPACE = "ssml", e.SSMS_TYPES = {
          SUB: "sub"
          , PHONEME: "phoneme"
          , SAYAS: "say-as"
          , EMPHASIS: "emphasis"
          , BREAK: "break"
          , PROSODY: "prosody"
        }, e.SSMS_ATTRIBUTES = {
          ALPHABET: "alphabet"
          , PH: "ph"
          , ALIAS: "alias"
          , INTERPRETAS: "interpret-as"
          , FORMAT: "format"
          , LEVEL: "level"
          , STRENGTH: "strength"
          , TIME: "time"
          , PITCH: "pitch"
          , RATE: "rate"
          , VOLUME: "volume"
        }, e.sentenceNo = 0, e
      }
      return o(t, e), l(t, [{
        key: "setSentences"
        , value: function (e) {
          this.setContents(e)
        }
      }, {
        key: "getSentences"
        , value: function () {
          return this.getContents()
        }
      }, {
        key: "setBatch"
        , value: function (e) {
          this.m_bBatch = e
        }
      }, {
        key: "isBatch"
        , value: function () {
          return this.m_bBatch
        }
      }, {
        key: "getNextSentence"
        , value: function (e) {
          this.sentenceNo++;
          var t = this.getSentences();
          if (this.sentenceNo < t.length) return 0 == t[this.sentenceNo].getWords()
            .length ? this.getNextSentence(e) : t[this.sentenceNo];
          if (e) {
            var n = t[t.length - 1]
              , a = n.getCaretRange();
            n.m_range.refresh();
            var i = new h.THCaretRange(n.m_range.body, n.m_range.startRef.path, n.m_range.startRef.offset, n.m_range.endRef.path, n.m_range.endRef.offset)
              , o = new f.DomSentences
              , a = o.getSentenceFromPoint(i.leftCaret)
              , l = o.getNextSentence(a, null)
              , s = this.processSentence(l);
            return this.m_contents.length = 0, this.setSentences.apply(this, r(s)), this.sentenceNo = 0, 0 == s[0].getWords()
              .length ? this.getNextSentence(e) : s[0]
          }
          return null
        }
      }, {
        key: "getCurrentSentence"
        , value: function () {
          var e = this.getSentences();
          return this.sentenceNo < e.length ? e[this.sentenceNo] : e[e.length - 1]
        }
      }, {
        key: "getFirstSentence"
        , value: function () {
          return this.sentenceNo = 0, this.getSentences()
            .length > 0 ? this.getSentences()[0] : null
        }
      }, {
        key: "processRange"
        , value: function (e, t) {
          this.setSentences([]), this.sentenceNo = 0;
          var n = new h.THCaretRange(e.body, e.startRef.path, e.startRef.offset, e.endRef.path, e.endRef.offset);
          if (e.startCaret.node.tagName && "textarea" == e.startCaret.node.tagName.toLowerCase()) {
            var a = new c.SentenceObject(n);
            a.setWords(e.startCaret.node.value), a.m_strRawText = e.startCaret.node.value, this.setSentences(a)
          } else {
            var i, o = new f.DomSentences
              , l = o.getSentenceFromPoint(n.leftCaret)
              , s = new Array
              , u = this.processSentence(l);
            if ((i = s)
              .push.apply(i, r(u)), !t) {
              var g = !0;
              do {
                var d = o.getNextSentence(l, n.rightCaret.node);
                if (null != d)
                  if (d.leftCaret.node != n.rightCaret.node || d.leftCaret.offset < n.rightCaret.offset) {
                    if (u = this.processSentence(d), null != u) {
                      var p;
                      (p = s)
                      .push.apply(p, r(u))
                    }
                    l = d
                  } else g = !1;
                else g = !1
              } while (g);
              1 == s.length && l.rightCaret.offset > n.rightCaret.offset && n.rightCaret.offset != n.leftCaret.offset && (s = this.processSentence(n))
            }
            this.setSentences(s)
          }
        }
      }, {
        key: "processSentence"
        , value: function (e) {
          try {
            this.checkRange(e) || this.setValid(!1);
            var t = new c.SentenceObject(e)
              , n = this.splitSentenceByLanguage(t);
            0 == n.length && this.setValid(!1);
            for (var r = n.length, a = 0; a < r; a++) n[a].isMathML() || n[a].processTextToSpeakInSentenceObject();
            return n
          } catch (i) {
            this.setValid(!1)
          }
          return null
        }
      }, {
        key: "splitSentenceByLanguage"
        , value: function (e) {
          function t(t) {
            return e.apply(this, arguments)
          }
          return t.toString = function () {
            return e.toString()
          }, t
        }(function (e) {
          var t = e.getCaretRange()
            , n = t.leftCaret
            , r = t.rightCaret
            , a = !1;
          if (a) {
            var i = rw_getVoiceSetForNode(n.node);
            null != i && e.setVoice(i);
            var o = rw_checkForVoiceChange(n.node, r.node, i);
            if (null != o) {
              var l = o.clone();
              l.forwardBias = !0, l = u.SSDOM.moveCaret(l, 0, !1);
              var s = new h.THCaretRange(n, o)
                , c = new h.THCaretRange(l, r)
                , f = e.clone();
              e.setCaretRange(s), f.setCaretRange(c), f.setVoice(null);
              var g = s.toString();
              if (0 != g.length && rw_isWordSpeakable(g)) {
                var d = [];
                return d.push(e), d = d.concat(splitSentenceByLanguage(f))
              }
              return splitSentenceByLanguage(f)
            }
          }
          return [e]
        })
      }, {
        key: "checkRange"
        , value: function (e) {
          var t = new u.SSDOM;
          if (null == e || null == e.leftCaret || null == e.rightCaret || null == e.leftCaret.node || null == e.rightCaret.node) return !1;
          var n = e.leftCaret
            , r = e.rightCaret
            , a = t.checkForSpecialParent(n.node);
          return null != a && (n.node = a, n.setSpecialCase(!0), e.leftCaret = n), a = t.checkForSpecialParent(r.node), null != a && (r.node = a, r.setSpecialCase(!0), e.rightCaret = r), !0
        }
      }]), t
    }(s.BaseObject)
  }, {
    "src/SpeechStream/DOM/DomSentences": 4
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/Sentence/BaseObject": 22
    , "src/SpeechStream/Sentence/SentenceObject": 24
    , "src/SpeechStream/THCaret": 27
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/THDomRange": 29
    , "src/SpeechStream/Utilities/Utilities": 34
  }]
  , 27: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    n.THCaret = function () {
      function e(t, n, a) {
        r(this, e), this.node = t, this.offset = n, this.forwardBias = a, this.specialCase = !1
      }
      return a(e, [{
        key: "setSpecialCase"
        , value: function (e) {
          this.specialCase = e
        }
      }, {
        key: "isSpecialCase"
        , value: function () {
          return this.specialCase
        }
      }, {
        key: "check"
        , value: function () {
          var e = !0;
          return null == this.node || null == this.node.parentNode ? e = !1 : 3 != this.node.nodeType ? 1 == this.node.nodeType && this.specialCase || (e = !1) : (this.offset < 0 || this.offset > this.node.nodeValue.length) && (e = !1), e
        }
      }, {
        key: "toString"
        , value: function () {
          var e = "THCaret ";
          return null != this.node && (3 == this.node.nodeType ? e += this.node.nodeValue + " " + this.node.parentNode.tagName + " " : 1 == this.node.nodeType && (e += this.node.tagName + " ")), e += this.offset
        }
      }, {
        key: "equals"
        , value: function (e) {
          return null != e && this.node == e.node && this.offset == e.offset && this.forwardBias == e.forwardBias
        }
      }, {
        key: "clone"
        , value: function () {
          return new e(this.node, this.offset, this.forwardBias)
        }
      }]), e
    }()
  }, {}]
  , 28: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.THCaretRange = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/THCaret")
      , o = e("src/SpeechStream/DOM/SSDOM")
      , l = e("src/SpeechStream/DOM/DomNavigation");
    e("src/SpeechStream/DOM/Attribute"), n.THCaretRange = function () {
      function e(t, n, a, i, o) {
        r(this, e), this.leftCaret = null, this.rightCaret = null, null != t && null != n && null != a && null != i && null != o && this.getCaretPairFromDomPosition(t, n, a, i, o)
      }
      return a(e, [{
        key: "setCaretRange"
        , value: function (e, t) {
          this.leftCaret = e, this.rightCaret = t
        }
      }, {
        key: "equals"
        , value: function (e) {
          return null != e && this.leftCaret.equals(e.leftCaret) && this.rightCaret.equals(e.rightCaret)
        }
      }, {
        key: "toString"
        , value: function () {
          return this.getTextOverCaretRange()
        }
      }, {
        key: "getTextOverCaretRange"
        , value: function () {
          var e = new o.SSDOM;
          try {
            if (null == this.leftCaret || null == this.rightCaret) return "";
            var t, n = this.leftCaret
              , r = this.rightCaret
              , a = n.node
              , i = r.node
              , l = ""
              , s = e.getNodesOverRange(a, i);
            if (null != s && s.length > 0)
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                3 == c.nodeType && "textarea" != c.parentNode.tagName.toLowerCase() ? (t = c.nodeValue, l += i == a ? t.substring(n.offset, r.offset) : c == a && n.offset > 0 ? t.substr(n.offset) : c == i && r.offset > -1 ? t.substring(0, r.offset) : t) : 1 == c.nodeType && "img" == c.tagName.toLowerCase() && rw_getAttribute(c, "msg") && (l = rw_getAttribute(c, "msg"))
              }
            return l.trimTH()
          } catch (h) {
            return ""
          }
        }
      }, {
        key: "rw_getTHRangeFromTHCaretRange"
        , value: function () {
          return null == this || null == this.leftCaret || null == this.rightCaret ? null : new THRange(this.leftCaret.node.ownerDocument.body, this.rw_getRefPt(this.leftCaret.node, this.leftCaret.offset), this.rw_getRefPt(this.rightCaret.node, this.rightCaret.offset))
        }
      }, {
        key: "getCaretPairFromDomPosition"
        , value: function (e, t, n, r, a) {
          var i = new o.SSDOM;
          this.leftCaret = i.getCaretFromDomPosition(e, t, n, !0), t == r && n >= a ? this.rightCaret = this.leftCaret : this.rightCaret = i.getCaretFromDomPosition(e, r, a, !1)
        }
      }, {
        key: "getTextSpokenOverCaretRange"
        , value: function (e) {
          var t = new l.DomNavigation
            , n = new o.SSDOM;
          try {
            if (null == e || null == e.leftCaret || null == e.rightCaret) return "";
            var r = e.leftCaret
              , a = e.rightCaret
              , s = r.node
              , u = a.node
              , c = n.isSpecialCaseNested(s);
            c && (s = n.checkForSpecialParent(s), r = new i.THCaret(s, 0, (!0)));
            for (var h = s, f = ""; null != h;) {
              if (c = n.isSpecialCase(h), c || 3 == h.nodeType) {
                var g = t.getTextFromNode(h);
                null != g && "" != g && (c || (h == u && a.offset > -1 && (g = g.substring(0, a.offset)), h == s && r.offset > -1 && (g = g.substring(r.offset))), f += g)
              }
              h = c ? t.getNextNodeIgnoreChildren(h, !1, u) : t.getNextNode(h, !1, u)
            }
            return f.trimTH()
          } catch (d) {
            return ""
          }
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/DomNavigation": 3
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/THCaret": 27
  }]
  , 29: [function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t["default"] = e, t
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.THDomRange = void 0;
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , o = e("src/SpeechStream/THCaretRange")
      , l = e("src/SpeechStream/THCaret")
      , s = e("src/SpeechStream/THDomRefPt")
      , u = e("src/SpeechStream/DOM/SSDOM")
      , c = e("src/SpeechStream/DOM/Attribute")
      , h = e("src/Constants/Constants")
      , f = r(h);
    n.THDomRange = function () {
      function e(t, n, r, i) {
        a(this, e), this.body = t.ownerDocument.body, this.startCaret = new l.THCaret(t, n, (!0)), this.endCaret = new l.THCaret(r, i, (!1)), this.startRef = this.rw_getRefPt(t, n), this.endRef = this.rw_getRefPt(r, i)
      }
      return i(e, [{
        key: "getPositionInDom"
        , value: function (e) {
          var t = new u.SSDOM
            , n = new c.Attribute
            , r = ""
            , a = 0
            , i = "";
          if (null != e && null != e.ownerDocument)
            for (var o = !1, l = !1, s = e.ownerDocument.body; null != e && e != s;) {
              t.isSpecialCase(e) && (r = ""), o = 3 == e.nodeType || 1 == e.nodeType && e.tagName.toLowerCase() == f.HIGHLIGHT_TAG && null != n.rw_getAttribute(e, "rwstate");
              for (var h = e.previousSibling; null != h;) l = 3 == h.nodeType || 1 == h.nodeType && h.tagName.toLowerCase() == f.HIGHLIGHT_TAG && null != n.rw_getAttribute(h, "rwstate"), o && l || ++a, h = h.previousSibling, o = l;
              if (r = r + a + "~", a = 0, e = e.parentNode, null != e && null != e.getAttribute && null != e.tagName) {
                var g = n.rw_getAttribute(e, "chunk");
                if ("span" == e.tagName.toLowerCase() && "1" == g) {
                  var d = n.getPositionInDom(e);
                  i = "#^th*" + d + "#^th*"
                }
              }
            }
          return i + r
        }
      }, {
        key: "rw_getRefPt"
        , value: function (e, t) {
          var n = "rwTHgen"
            , r = new u.SSDOM
            , a = new c.Attribute;
          try {
            if (null == e) return null;
            if (1 == e.nodeType || 3 == e.nodeType) {
              var i = r.checkForSpecialParent(e);
              if (null != i) return new s.THDomRefPt(this.getPositionInDom(i), t);
              var o, l;
              1 == e.nodeType ? (o = 0, l = e) : (o = this.getNodeOffset_(e), l = e.parentNode);
              for (var h = a.rw_getAttribute(l, "rwstate"), f = a.rw_getAttribute(l, n); null != h && h.length > 0 || null != f;) o += this.getNodeOffset_(l), l = l.parentNode, h = a.rw_getAttribute(l, "rwstate"), f = a.rw_getAttribute(l, n);
              return t == -1 && (o = -1), new s.THDomRefPt(this.getPositionInDom(l), o + t)
            }
            return null
          } catch (g) {
            return null
          }
        }
      }, {
        key: "getNodeOffset_"
        , value: function (e) {
          var t = new u.SSDOM;
          if (null == e) return 0;
          var n = 0
            , r = e.previousSibling;
          return null != r && (n = t.rw_getNodeOffsetImpl(r)), n
        }
      }, {
        key: "refresh"
        , value: function () {
          if (0 == this.startCaret.check() || 0 == this.endCaret.check()) {
            var e = new o.THCaretRange(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset);
            this.startCaret = e.leftCaret, this.endCaret = e.rightCaret, null == this.startCaret && null == this.endCaret ? (this.startCaret = new l.THCaret(document.body, 0, (!0)), this.endCaret = new l.THCaret(document.body, 0, (!1))) : null != this.startCaret && null != this.endCaret || (null == this.startCaret ? this.startCaret = new l.THCaret(this.endCaret.node, this.endCaret.offset, (!0)) : this.endCaret = new l.THCaret(this.startCaret.node, this.startCaret.offset, (!1)))
          }
        }
      }, {
        key: "toString"
        , value: function () {
          new u.SSDOM, this.refresh();
          var e = new o.THCaretRange;
          return e.setCaretRange(this.startCaret, this.endCaret), e.getTextSpokenOverCaretRange(e)
        }
      }, {
        key: "getRangeObject"
        , value: function (e) {
          "undefined" != typeof e && null != e || (e = document.body);
          var t = e.ownerDocument;
          return t.createRange()
        }
      }, {
        key: "getStartAsRange"
        , value: function () {
          var e = this.getRangeObject(this.body);
          return e.setStart(this.startCaret.node, this.startCaret.offset), e.setEnd(this.startCaret.node, this.startCaret.offset), e
        }
      }, {
        key: "getEndAsRange"
        , value: function () {
          var e = this.getRangeObject(this.body);
          return e.setStart(this.endCaret.node, this.endCaret.offset), e.setEnd(this.endCaret.node, this.endCaret.offset), e
        }
      }, {
        key: "equals"
        , value: function (e) {
          return this.startRef.path == e.startRef.path && this.startRef.offset == e.startRef.offset && this.endRef.path == e.endRef.path && this.endRef.offset == e.endRef.offset
        }
      }, {
        key: "compareRange"
        , value: function (e) {
          if (this.equals(e)) return f.THDomRange_TARGET_SAME;
          this.refresh(), e.refresh();
          var t = this.getStartAsRange()
            , n = this.getEndAsRange()
            , r = e.getStartAsRange()
            , a = e.getEndAsRange()
            , i = t.compareBoundaryPoints("START_TO_START", r)
            , o = t.compareBoundaryPoints("START_TO_START", a)
            , l = n.compareBoundaryPoints("START_TO_START", r)
            , s = n.compareBoundaryPoints("START_TO_START", a)
            , u = f.THDomRange_ERROR;
          return u = o > -1 ? f.THDomRange_AFTER_TARGET : l < 1 ? f.THDomRange_BEFORE_TARGET : i == -1 ? s == -1 ? f.THDomRange_OVERLAPS_START_OF_TARGET : f.THDomRange_TARGET_INSIDE : 0 == i ? s == -1 ? f.THDomRange_TARGET_INCLUDES_THIS_AT_START : 0 == s ? f.THDomRange_TARGET_SAME : f.THDomRange_TARGET_INSIDE : s == -1 ? f.THDomRange_TARGET_INCLUDES_THIS : 0 == s ? f.THDomRange_TARGET_INCLUDES_THIS_AT_END : f.THDomRange_OVERLAPS_END_OF_TARGET
        }
      }, {
        key: "rw_getTextFromRange"
        , value: function () {
          var e = "";
          return e = this.text ? this.text : this.toString()
        }
      }, {
        key: "rw_getTHCaretRangeFromTHDomRange"
        , value: function () {
          var e = new u.SSDOM;
          if (null == this.startRef || null == this.endRef) return null;
          var t = e.getCaretFromDomPosition(this.body, this.startRef.path, this.startRef.offset, !0)
            , n = e.getCaretFromDomPosition(this.body, this.endRef.path, this.endRef.offset, !1);
          if (null != t && null != n) {
            var r = new o.THCaretRange;
            return r.setCaretRange(t, n), r
          }
          return null
        }
      }]), e
    }()
  }, {
    "src/Constants/Constants": 1
    , "src/SpeechStream/DOM/Attribute": 2
    , "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/THCaret": 27
    , "src/SpeechStream/THCaretRange": 28
    , "src/SpeechStream/THDomRefPt": 30
  }]
  , 30: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    n.THDomRefPt = function () {
      function e(t, n) {
        r(this, e), this.path = t, this.offset = n
      }
      return a(e, [{
        key: "toString"
        , value: function () {
          return "THDomRefPt " + this.path + " " + this.offset
        }
      }, {
        key: "getPath"
        , value: function () {
          return this.path
        }
      }, {
        key: "getOffset"
        , value: function () {
          return this.getOffset
        }
      }]), e
    }()
  }, {}]
  , 31: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.THRange = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , i = e("src/SpeechStream/DOM/SSDOM")
      , o = e("src/SpeechStream/THCaretRange");
    n.THRange = function () {
      function e(t, n, a) {
        r(this, e), this.body = t, this.startRef = n, this.endRef = a
      }
      return a(e, [{
        key: "equals"
        , value: function (e) {
          return this.body == e.body && this.startRef.path == e.startRef.path && this.startRef.offset == e.startRef.offset && this.endRef.path == e.endRef.path && this.endRef.offset == e.endRef.offset
        }
      }, {
        key: "toString"
        , value: function () {
          var e = this.getAsRange();
          return null != e ? g_bIEOld ? this.getAsRange()
            .text : this.getAsRange()
            .toString() : ""
        }
      }, {
        key: "getAsRange"
        , value: function () {
          var e = null;
          if (g_bIEOld) e = rw_getAsTextRange(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset);
          else {
            e = i.SSDOM.getRangeObject(this.body);
            var t = new new o.THCaretRange(this.body, this.startRef.path, this.startRef.offset, this.endRef.path, this.endRef.offset)
              , n = t.leftCaret
              , r = t.rightCaret;
            null != n && null != r ? (e.setStart(n.node, n.offset), e.setEnd(r.node, r.offset)) : e = null
          }
          return e
        }
      }, {
        key: "clone"
        , value: function () {
          return new e(this.body, this.startRef, this.endRef)
        }
      }, {
        key: "rw_getTHCaretRangeFromTHRange"
        , value: function () {
          var e = new i.SSDOM;
          if (null == this.startRef || null == this.endRef) return null;
          var t = e.getCaretFromDomPosition(this.body, this.startRef.path, this.startRef.offset, !0)
            , n = e.getCaretFromDomPosition(this.body, this.endRef.path, this.endRef.offset, !1);
          if (null != t && null != n) {
            var r = new o.THCaretRange;
            return r.setCaretRange(t, n), r
          }
          return null
        }
      }]), e
    }()
  }, {
    "src/SpeechStream/DOM/SSDOM": 5
    , "src/SpeechStream/THCaretRange": 28
  }]
  , 32: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.THReturnObject = function a() {
      r(this, a), this.node = null, this.offset = 0
    }
  }, {}]
  , 33: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.TextOverRangeBeanClass = void 0;
    var a = e("src/SpeechStream/DOM/SSDOM");
    n.TextOverRangeBeanClass = function i(e) {
      r(this, i);
      var t = e.getCaretRange()
        , n = new a.SSDOM;
      this.sentenceObject = e, this.leftNode = t.leftCaret.node, this.rightNode = t.rightCaret.node, this.body = n.getBody(this.leftNode), this.leftOffset = t.leftCaret.offset, this.rightOffset = t.rightCaret.offset, this.currentNode = this.leftNode, this.storedText = "", this.startRefPt = null, this.endRefPt = null
    }
  }, {
    "src/SpeechStream/DOM/SSDOM": 5
  }]
  , 34: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    String.prototype.trimTH = function () {
      return this.replace(/^[\s\xA0]+/, "")
        .replace(/[\s\xA0]+$/, "")
    }, n.Utilities = function () {
      function e() {
        r(this, e)
      }
      return a(e, [{
        key: "trim"
        , value: function (e) {
          return e.replace(/^[\s\xA0]+/, "")
            .replace(/[\s\xA0]+$/, "")
        }
      }, {
        key: "trimEndTH"
        , value: function (e) {
          return e.replace(/[\s\xA0]+$/, "")
        }
      }, {
        key: "rw_filterForHtml"
        , value: function (e) {
          var t = e.replace(/\x26/g, "&amp;");
          return t = t.replace(/\x3c/g, "&lt;"), t = t.replace(/\x3e/g, "&gt;")
        }
      }]), e
    }()
  }, {}]
  , 35: [function (e, t, n) {
    "use strict";

    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.ParserAPI = void 0;
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }()
      , o = e("src/SpeechStream/Selection/SelectionController")
      , l = e("src/SpeechStream/Highlighting/SpeechHighlightManager")
      , s = e("src/SpeechStream/SpeechObject")
      , u = e("src/SpeechStream/Selection/HoverSpeak")
      , c = e("src/SpeechStream/Highlighting/StudySkillsHighlighting")
      , h = e("src/SpeechStream/Prediction/Prediction")
      , f = e("src/SpeechStream/Events/EventBus")
      , g = e("src/SpeechStream/THDomRange")
      , d = n.ParserAPI = function () {
        function e(t, n) {
          a(this, e), this.selectionController = new o.SelectionController, this.speechHighlightManager = null, this.hoverSpeak = new u.HoverSpeak, this.speechObject = new s.SpeechObject, this.studySkills = new c.StudySkillsHighlighting, this.hoverSpeakOn = !1, this.mathLoaded = !1, this.url = n, "undefined" != typeof MathJax && (MathJax.Ajax.Load(n + "toMathML.js"), this.load_script(n + "sre_browser.js"), this.mathLoaded = !0), this.predictionOn = !1, this.prediction = new h.Prediction;
          var r = new f.EventBus;
          r.subscribe("pauseHover", this.pauseHover.bind(this)), this.isHoverSpeakEnabled = !1
        }
        return i(e, [{
          key: "setUpiframes"
          , value: function () {
            if (window.frames.length > 0)
              for (var e = 0; e < window.frames.length; e++) try {
                window.frames[e].document.body.addEventListener("mouseover", this.iframeCallback.bind(this))
              } catch (t) {}
          }
        }, {
          key: "iframeCallback"
          , value: function (e) {
            this.hoverSpeakOn && this.speechCallback && this.hoverSpeak.mouseMoved(e, this.speechCallback)
          }
        }, {
          key: "forceLoadMath"
          , value: function () {
            this.mathLoaded || "undefined" != typeof MathJax && (MathJax.Ajax.Load(this.url + "toMathML.js"), this.load_script(this.url + "sre_browser.js"), this.mathLoaded = !0)
          }
        }, {
          key: "pauseHover"
          , value: function () {
            var e = this;
            this.hoverSpeakOn || this.isHoverSpeakEnabled ? (this.hoverSpeakOn = !1, this.isHoverSpeakEnabled = !0, this.pauseHoverTimer = setTimeout(function () {
              return e.unPauseHover()
            }, 300)) : this.isHoverSpeakEnabled = !1
          }
        }, {
          key: "unPauseHover"
          , value: function () {
            this.isHoverSpeakEnabled && (this.hoverSpeakOn = !0)
          }
        }, {
          key: "clearHoverSpeak"
          , value: function () {
            this.hoverSpeak.clearHoverSpeak()
          }
        }, {
          key: "load_script"
          , value: function (e) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = e, t.className = "MyInjectedScript", document.getElementsByTagName("head")[0].appendChild(t)
          }
        }, {
          key: "predictionEnabled"
          , value: function (e) {
            this.predictionOn = e
          }
        }, {
          key: "getPredictionCoordinates"
          , value: function () {
            return this.prediction.getPositionOfPopup()
          }
        }, {
          key: "getPredictionSentence"
          , value: function () {
            return this.prediction.getSentence()
          }
        }, {
          key: "predictionInsertText"
          , value: function (e) {
            this.prediction.insertText(e)
          }
        }, {
          key: "isEditable"
          , value: function () {
            return this.prediction.isEditable()
          }
        }, {
          key: "hoverSpeakEnabled"
          , value: function (e) {
            this.hoverSpeakOn = e, this.isHoverSpeakEnabled = e, e || clearTimeout(this.pauseHoverTimer)
          }
        }, {
          key: "mouseOverEvent"
          , value: function (e, t) {
            this.speechCallback = t, this.hoverSpeakOn ? this.hoverSpeak.mouseMoved(e, this.speechCallback) : clearTimeout(this.pauseHoverTimer)
          }
        }, {
          key: "hasSelection"
          , value: function () {
            return this.selectionController.hasSelection()
          }
        }, {
          key: "getWord"
          , value: function () {
            var e = new Array
              , t = this.selectionController.getSelectionRange();
            if (t) {
              var e = t.toString()
                .split(/\s/);
              if (e.length > 0) return new Array(e[0])
            }
            return null
          }
        }, {
          key: "getSelection"
          , value: function () {
            return this.selectionController.getSelectionRange()
              .toString()
              .split(/\s/)
          }
        }, {
          key: "getSelectionLocal"
          , value: function () {
            return this.getSelection()
          }
        }, {
          key: "clearSelection_"
          , value: function () {
            this.selectionController.clearSelection_()
          }
        }, {
          key: "clearBrowserSelection"
          , value: function () {
            this.selectionController.clearBrowserSelection()
          }
        }, {
          key: "hiliteSelection"
          , value: function () {
            var e = null;
            if (this.hasSelection() || this.hoverSpeakOn) {
              if (this.sentenceNo = 0, this.hoverSpeakOn) {
                var t = this.hoverSpeak.getSelectionRange();
                this.speechObject.processRange(t, !0)
              } else this.speechObject.processRange(this.selectionController.getSelectionRange(), !1);
              e = this.speechObject.getFirstSentence(), e && "" == e.getRawText() && (e = this.speechObject.getNextSentence(!0))
            } else {
              var t;
              if (document.caretRangeFromPoint) {
                var n = document.caretRangeFromPoint(event.clientX, event.clientY);
                t = new g.THDomRange(n.startContainer, n.startOffset, n.endContainer, n.endContainer)
              } else {
                var n = document.caretPositionFromPoint(event.clientX, event.clientY);
                t = new g.THDomRange(n.offsetNode, n.offset, n.offsetNode, n.offset)
              }
              this.speechObject.processRange(t, !0), e = this.speechObject.getNextSentence(!0)
            }
            if (this.selectionController.clearBrowserSelection(), null != e) {
              var r = e.getWords();
              return 0 == r.length ? "" : (this.speechHighlightManager = new l.SpeechHighlightManager(e), this.speechHighlightManager.highlightRange(), r)
            }
            return ""
          }
        }, {
          key: "hiliteWord"
          , value: function (e) {
            this.speechHighlightManager.highlightWord(e)
          }
        }, {
          key: "stop"
          , value: function () {
            var e = this.speechObject.getCurrentSentence();
            null != e && null != this.speechHighlightManager && this.speechHighlightManager.unHighlightRange()
          }
        }, {
          key: "hiliteNextSentence"
          , value: function (e) {
            null != this.speechHighlightManager && this.speechHighlightManager.unHighlightRange();
            var t = this.speechObject.getNextSentence(e)
              , n = null;
            return null != t && (n = t.getWords(), this.speechHighlightManager = new l.SpeechHighlightManager(t), this.speechHighlightManager.highlightRange(t)), n
          }
        }, {
          key: "highlightSelection"
          , value: function (e) {
            var t = this.selectionController.getSelectionObject();
            this.studySkills.studySkillsHTMLHighlightRange(e, t)
          }
        }, {
          key: "clearHighlights"
          , value: function () {
            var e = null;
            this.hasSelection() && (e = this.selectionController.getSelectionObject()), this.studySkills.studySkillsClearHighlights(!1, e)
          }
        }, {
          key: "collectHighlights"
          , value: function (e, t) {
            var n = new Array;
            if (2 == e)
              for (var a = 0; a < t.length; a++) n.push.apply(n, r(this.studySkills.studySkillsCollateForColour(t[a])));
            else n.push.apply(n, r(this.studySkills.studySkillsCollateForColour(t)));
            return n
          }
        }, {
          key: "collectVocabWords"
          , value: function (e) {}
        }, {
          key: "addVoiceNote"
          , value: function () {}
        }, {
          key: "collectVocabs"
          , value: function (e, t, n) {
            return this.studySkills.fetchWords()
          }
        }, {
          key: "onMouseUp"
          , value: function (e) {}
        }, {
          key: "onMouseDown"
          , value: function (e) {
            this.prediction.setEditControl(e.target)
          }
        }, {
          key: "onKeyDown"
          , value: function (e) {
            this.prediction.setEditControl(e.target)
          }
        }]), e
      }();
    textHelp.parsers = textHelp.parsers || {}, textHelp.parsers.HTMLParserAPI = textHelp.parsers.HTMLParserAPI || {}, textHelp.parsers.HTMLParserAPI = d
  }, {
    "src/SpeechStream/Events/EventBus": 6
    , "src/SpeechStream/Highlighting/SpeechHighlightManager": 10
    , "src/SpeechStream/Highlighting/StudySkillsHighlighting": 11
    , "src/SpeechStream/Prediction/Prediction": 17
    , "src/SpeechStream/Selection/HoverSpeak": 20
    , "src/SpeechStream/Selection/SelectionController": 21
    , "src/SpeechStream/SpeechObject": 26
    , "src/SpeechStream/THDomRange": 29
  }]
  , 36: [function (e, t, n) {
    "use strict";
    e("src/api/ParserAPI")
  }, {
    "src/api/ParserAPI": 35
  }]
}, {}, [36]);
