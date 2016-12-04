! function (e) {
  "use strict";

  function n(e, n, t) {
    var o, r, s, u, i, p, c, y, d, m, a, f, h;
    return o = function (e) {
      var o, r;
      return e && "string" == typeof e && (e = new t.XName(e)), o = this.source ? this.source : this, r = o.selectMany(function (t) {
        return !t.nodeType || "Element" !== t.nodeType && "Comment" !== t.nodeType && "ProcessingInstruction" !== t.nodeType && "Text" !== t.nodeType && "CDATA" !== t.nodeType && "Entity" !== t.nodeType ? n.empty() : t.ancestors(e)
      }), new h(r)
    }, r = function (e) {
      var o, r;
      return e && "string" == typeof e && (e = new t.XName(e)), o = this.source ? this.source : this, r = o.selectMany(function (t) {
        return t.nodeType && "Element" === t.nodeType ? t.ancestorsAndSelf(e) : n.empty()
      }), new h(r)
    }, s = function (e) {
      var o, r;
      return e && "string" == typeof e && (e = new t.XName(e)), o = this.source ? this.source : this, r = o.selectMany(function (t) {
        return t.nodeType && "Element" === t.nodeType ? t.attributes(e) : n.empty()
      }), new h(r)
    }, u = function () {
      var e, t;
      return e = this.source ? this.source : this, t = e.selectMany(function (e) {
        return !e.nodeType || "Element" !== e.nodeType && "Comment" !== e.nodeType && "ProcessingInstruction" !== e.nodeType && "Text" !== e.nodeType && "CDATA" !== e.nodeType && "Entity" !== e.nodeType ? n.empty() : e.descendantNodes()
      }), new h(t)
    }, i = function () {
      var e, t;
      return e = this.source ? this.source : this, t = e.selectMany(function (e) {
        return !e.nodeType || "Element" !== e.nodeType && "Comment" !== e.nodeType && "ProcessingInstruction" !== e.nodeType && "Text" !== e.nodeType && "CDATA" !== e.nodeType && "Entity" !== e.nodeType ? n.empty() : e.descendantNodesAndSelf()
      }), new h(t)
    }, p = function (e) {
      var o, r;
      return e && "string" == typeof e && (e = new t.XName(e)), o = this.source ? this.source : this, r = o.selectMany(function (t) {
        return t.nodeType && "Element" === t.nodeType ? t.descendants(e) : n.empty()
      }), new h(r)
    }, c = function (e) {
      var o, r;
      return e && "string" == typeof e && (e = new t.XName(e)), o = this.source ? this.source : this, r = o.selectMany(function (t) {
        return t.nodeType && "Element" === t.nodeType ? t.descendantsAndSelf(e) : n.empty()
      }), new h(r)
    }, y = function (e) {
      var o, r;
      return e && "string" == typeof e && (e = new t.XName(e)), o = this.source ? this.source : this, r = o.select(function (t) {
          return !t.nodeType || "Element" !== t.nodeType && "Document" !== t.nodeType ? n.empty() : t.elements(e)
        })
        .selectMany("i=>i"), new h(r)
    }, d = function () {
      throw "Not implemented"
    }, m = function () {
      var e, t;
      return e = this.source ? this.source : this, t = e.selectMany(function (e) {
        return !e.nodeType || "Element" !== e.nodeType && "Document" !== e.nodeType ? n.empty() : e.nodes()
      }), new h(t)
    }, a = function (e) {
      var n, o, r;
      for (e && "string" == typeof e && (e = new t.XName(e)), n = this.source ? this.source : this, o = n.toArray(), r = 0; r < o.length; r += 1) void 0 === e ? o[r].remove() : o[r].name && o[r].name === e && o[r].remove()
    }, f = function (e) {
      var t, o, r, s, u;
      return u = this.source ? this.source : this, t = null, o = !1, r = [], s = [], u.forEach(function (u) {
        var i;
        i = e(u), o ? i !== t ? (r.push({
          Key: t
          , Group: n.from(s)
        }), s = [], s.push(u), t = i) : (s.push(u), t = i) : (s.push(u), t = i, o = !0)
      }), o && r.push({
        Key: t
        , Group: n.from(s)
      }), n.from(r)
    }, h = function (e) {
      this.source = e, this.isXEnumerable = !0
    }, h.prototype = new n, h.prototype.getEnumerator = function () {
      return this.source.getEnumerator()
    }, h.prototype.asEnumerable = function () {
      return this.source
    }, h.prototype.ancestors = o, h.prototype.ancestorsAndSelf = r, h.prototype.attributes = s, h.prototype.descendantNodes = u, h.prototype.descendantNodesAndSelf = i, h.prototype.descendants = p, h.prototype.descendantsAndSelf = c, h.prototype.elements = y, h.prototype.inDocumentOrder = d, h.prototype.nodes = m, h.prototype.remove = a, h.prototype.groupAdjacent = f, h
  }
  var t;
  "function" == typeof define && define.amd ? define("ltxml-extensions", ["linq", "ltxml"], function (o, r) {
    return t = n(e, o, r)
  }) : "undefined" != typeof module && module.exports ? (t = n(e, Enumerable, Ltxml), module.exports = t) : (t = n(e, Enumerable, Ltxml), e.XEnumerable = t)
}(this);
