! function (e) {
  "use strict";

  function t(e, t) {
    function n() {
      var e, t;
      return e = [], t = 0, {
        a: function (n) {
          return e[t += 1] = n, this
        }
        , toString: function (t) {
          return e.join(t || "")
        }
      }
    }

    function r(e, t, n) {
      var a, i, o, s, u, p, l, c, f, d, y;
      for (f = 3; f < arguments.length; f += 1)
        if (a = arguments[f], null !== a && void 0 !== a)
          if (Array.isArray(a))
            for (d = 0; d < a.length; d += 1) r(e, t, n, a[d]);
          else if (a.select)
        for (i = a.toArray(), y = 0; y < i.length; y += 1) r(e, t, n, i[y]);
      else if (a.isXEnumerable)
        for (i = a.asEnumerable()
          .toArray(), y = 0; y < i.length; y += 1) r(e, t, n, i[y]);
      else if ("object" == typeof a && a.nodeType) {
        if ("Element" === a.nodeType || "Text" === a.nodeType || "Comment" === a.nodeType || "CDATA" === a.nodeType || "ProcessingInstruction" === a.nodeType || "Entity" === a.nodeType) {
          if (a.parent && null !== a.parent) {
            if ("Element" === a.nodeType) return o = new h.XElement(a), o.parent = e, void t(o);
            if ("Entity" === a.nodeType) return s = new h.XEntity(a), s.parent = e, void t(s);
            if ("Text" === a.nodeType) return s = new h.XText(a), s.parent = e, void t(s);
            if ("Comment" === a.nodeType) return u = new h.XComment(a), u.parent = e, void t(u);
            if ("CDATA" === a.nodeType) return p = new h.XCData(a), p.parent = e, void t(p);
            if ("ProcessingInstruction" === a.nodeType) return c = new h.XProcessingInstruction(a), c.parent = e, void t(c)
          }
          return a.parent = e, void t(a)
        }
        if ("Attribute" === a.nodeType) return a.parent && null !== a.parent ? (l = new h.XAttribute(a), l.parent = e, void n(l)) : (a.parent = e, void n(a))
      } else {
        if ("string" == typeof a && "" === a) return s = new h.XText(""), s.parent = e, void t(s);
        m(a.toString(), e, !0, t)
      }
    }

    function a(e, t) {
      var n;
      for (n = 0; n < e.nodesArray.length; n += 1) t(e.nodesArray[n]), "Element" === e.nodesArray[n].nodeType && a(e.nodesArray[n], t)
    }

    function i(e, n) {
      var r = t.from(e.nodesArray)
        .traverseDepthFirst(function (e) {
          return t.from(e.nodesArray)
            .where(function (e) {
              return "Element" === e.nodeType
            })
        })
        .where(function (e) {
          return "Element" === e.nodeType
        });
      return n && (r = r.where(function (e) {
        return e.name === n
      })), r
    }

    function o(e, t, n) {
      var r;
      for (r = 0; r < e.nodesArray.length; r += 1) "Element" === e.nodesArray[r].nodeType && (void 0 === t ? (n(e.nodesArray[r]), o(e.nodesArray[r], t, n)) : (e.nodesArray[r].name === t && n(e.nodesArray[r]), o(e.nodesArray[r], t, n)))
    }

    function s(e, t) {
      var n, r, a, i, o, u, p, l, c, f, d, y, A, g, X, v, b, N, w, x, E, T, O, D;
      if (e.nodeType) {
        if (1 === e.nodeType) {
          if (n = null === e.namespaceURI || void 0 === e.namespaceURI || "" === e.namespaceURI && "xmlns" !== e.nodeName ? h.XNamespace.getNone() : new h.XNamespace(e.namespaceURI, e.prefix && "" !== e.prefix ? e.prefix.toString() : null), r = e.localName ? new h.XName(n, e.localName) : new h.XName(n, e.baseName), a = e.attributes, o = e.childNodes, null !== a && void 0 !== a && a.length > 0) {
            for (u = [], g = 0; g < o.length; g += 1) b = s(o[g], t + 1), u.push(b);
            for (i = [], X = 0; X < a.length; X += 1) N = s(a[X], t + 1), i.push(N);
            p = new h.XElement(r, i, u)
          } else {
            for (u = [], v = 0; v < o.length; v += 1) u.push(s(o[v], t + 1));
            p = new h.XElement(r, u)
          }
          return p
        }
        if (2 === e.nodeType) return n = null === e.namespaceURI || void 0 === e.namespaceURI || "" === e.namespaceURI && "xmlns" !== e.prefix ? "xml" === e.prefix ? h.XNamespace.getXml() : h.XNamespace.getNone() : "http://www.w3.org/2000/xmlns/" === e.namespaceURI || "xmlns" === e.prefix ? h.XNamespace.getXmlns() : "http://www.w3.org/XML/1998/namespace" === e.namespaceURI ? h.XNamespace.getXml() : new h.XNamespace(e.namespaceURI, e.prefix ? e.prefix.toString() : null), r = e.localName ? new h.XName(n, e.localName) : "xmlns" === e.nodeName ? new h.XName(n, "xmlns") : new h.XName(n, e.baseName), l = new h.XAttribute(r, e.nodeValue);
        if (3 === e.nodeType) return E = [], m(e.nodeValue, null, !0, function (e) {
          E.push(e)
        }), E;
        if (4 === e.nodeType) return f = new h.XCData(e.nodeValue);
        if (7 === e.nodeType) return "xml" === e.target ? null : y = new h.XProcessingInstruction(e.target, e.data);
        if (8 === e.nodeType) return d = new h.XComment(e.nodeValue);
        if (9 === e.nodeType) {
          for (T = e.xmlVersion, O = e.xmlEncoding, D = e.xmlStandalone, T || (T = "1.0"), O || (O = "UTF-8"), D || (D = "yes"), A = new h.XDeclaration(T, O, D ? "yes" : "no"), o = e.childNodes, w = [], x = 0; x < o.length; x += 1) w.push(s(o[x], t + 1));
          return c = new h.XDocument(A, w)
        }
      }
      throw "Internal Error"
    }

    function u(e) {
      var t, n;
      return n = {
        prefixesFromNamespaceObjects: !1
        , namespaceArray: []
        , prefixArray: []
      }, t = e.namespaceArray.length, n.namespaceArray = e.namespaceArray.slice(0, t), n.prefixArray = e.prefixArray.slice(0, t), n
    }

    function p(e, n, r, a, i) {
      var o, s, l, c, f, m, d, y, g, X, v, b, N, w, x, E, T;
      for (o = !1, E = n, s = e.attributesArray, f = s.length, m = 0; m < f; m += 1)
        if (y = s[m], y.isNamespaceDeclaration) {
          if (c = new h.XNamespace(y.value), v = y.name.localName, E.prefixesFromNamespaceObjects && v !== c.preferredPrefix) {
            E === n && (E = u(n)), T = E.prefixArray.indexOf(v), T !== -1 ? E.namespaceArray[T] = c : (E.namespaceArray.push(c), E.prefixArray.push(v)), o = !0;
            break
          }
          if (T = E.namespaceArray.indexOf(c), T === -1 || v !== E.prefixArray[T]) {
            E === n && (E = u(n)), T = E.prefixArray.indexOf(v), T !== -1 && (E.namespaceArray[T] = c), o = !0;
            break
          }
        }
      for (m = 0; m < f; m += 1)
        if (y = s[m], !y.isNamespaceDeclaration && y.name.namespace !== i && y.name.namespace !== a) {
          for (N = E.namespaceArray.length, T = -1, d = 0; d < N; ++d)
            if (E.namespaceArray[d] === y.name.namespace && "xmlns" !== E.prefixArray[d]) {
              T = d;
              break
            }
          if (T === -1) {
            for (;;) {
              if (w = "p" + A, E.prefixArray.indexOf(w) === -1) break;
              A += 1
            }
            x = new h.XAttribute(h.XNamespace.getXmlns() + w, y.name.namespace.namespaceName), e.add(x), E === n && (E = u(n)), E.namespaceArray.push(y.name.namespace), E.prefixArray.push(w), o = !0
          }
        }
      if (e.name.namespace !== i && E.namespaceArray.indexOf(e.name.namespace) === -1) {
        for (;;) {
          if (w = "p" + A, E.prefixArray.indexOf(w) === -1) break;
          A += 1
        }
        x = new h.XAttribute(h.XNamespace.getXmlns() + w, e.name.namespace.namespaceName), e.add(x), E === n && (E = u(n)), E.namespaceArray.push(e.name.namespace), E.prefixArray.push(w), o = !0
      }
      if (e.name.namespace === i && (T = E.prefixArray.indexOf("xmlns"), T !== -1 && E.namespaceArray[T] !== i && (t.from(e.attributesArray)
          .any(function (e) {
            return e.name.namespace === r && "xmlns" === e.name.localName && "" === e.value
          }) || (b = new h.XAttribute("xmlns", ""), e.add(b), o = !0))), o) {
        for (g = {
            prefixesFromNamespaceObjects: !1
            , namespaceArray: []
            , prefixArray: []
          }, s = e.attributesArray, f = s.length, m = 0; m < f; m += 1) y = s[m], y.isNamespaceDeclaration && (c = "" === y.value ? i : new h.XNamespace(y.value), v = y.name.localName, g.namespaceArray.push(c), g.prefixArray.push(v));
        for (m = 0; m < E.namespaceArray.length; m += 1) g.namespaceArray.indexOf(E.namespaceArray[m]) === -1 && g.prefixArray.indexOf(E.prefixArray[m]) === -1 && (g.namespaceArray.push(E.namespaceArray[m]), g.prefixArray.push(E.prefixArray[m]));
        for (e.nsCache = g, l = e.nodesArray, f = l.length, d = 0; d < f; d += 1) X = l[d], "Element" === X.nodeType && p(X, g, r, a, i)
      } else
        for (e.nsCache = E, l = e.nodesArray, f = l.length, d = 0; d < f; d += 1) X = l[d], "Element" === X.nodeType && p(X, E, r, a, i)
    }

    function l(e, t) {
      var n;
      for (n = 0; n < e.nodesArray.length; n += 1) t(e.nodesArray[n]), "Element" !== e.nodesArray[n].nodeType && "Document" !== e.nodesArray[n].nodeType || l(e.nodesArray[n], t)
    }
    var c, f, h, m, d, y, A, g, X;
    return Array.isArray || (Array.isArray = function (e) {
      return "[object Array]" == Object.prototype.toString.call(e)
    }), f = {
      Identity: function (e) {
        return e
      }
      , True: function () {
        return !0
      }
      , Blank: function () {}
    }, Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
      var t;
      for (t = 0; t < this.length; t += 1)
        if (this[t] === e) return t;
      return -1
    }), c = function (e) {
      var t;
      if (65279 === e.charCodeAt(0) && (e = e.substring(1)), "undefined" != typeof h.DOMParser) return t = (new h.DOMParser)
        .parseFromString(e, "application/xml");
      if ("undefined" != typeof window.DOMParser) return t = (new window.DOMParser)
        .parseFromString(e, "application/xml");
      if ("undefined" != typeof window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM")) {
        var n = new window.ActiveXObject("Microsoft.XMLDOM");
        return n.async = "false", n.loadXML(e), n
      }
      throw new Error("No XML parser found")
    }, h = {}, h.namespaceCache = {}, h.nameCache = {}, h.spaces = "                                                                                          ", h.clearCache = function () {
      this.namespaceCache = {}, this.nameCache = {}
    }, h.cast = function (e) {
      return e ? e.value : null
    }, h.castInt = function (e) {
      return e ? parseInt(e.value, 10) : null
    }, g = [60, 62, 39, 34, 38], X = ["lt", "gt", "apos", "quot", "amp"], m = function (e, t, n, r) {
      var a, i, o, s, u, p, l;
      if ("string" == typeof e) {
        for (o = 0, s = 0, u = e.length;;) {
          if (s === u) break;
          p = e.charCodeAt(s), p >= 40 && p <= 59 || p >= 63 && p <= 126 ? s++ : p >= 32 && p <= 126 && 34 !== p && 38 !== p && 39 !== p && 60 !== p && 62 !== p ? s++ : (9 !== p && 10 !== p && 13 !== p || !n) && (9 !== p || n) ? p < 32 ? (o !== s && (n ? (a = new h.XText(e.substring(o, s)), a.parent = t) : a = e.substring(o, s), r(a)), i = new h.XEntity("#x" + p.toString(16)), i.parent = t, r(i), s++, o = s) : (l = g.indexOf(p), l !== -1 ? (o !== s && (n ? (a = new h.XText(e.substring(o, s)), a.parent = t) : a = e.substring(o, s), r(a)), i = new h.XEntity(X[l]), i.parent = t, r(i), s++, o = s) : s++) : s++
        }
        return void(o !== s && (n ? (a = new h.XText(e.substring(o, s)), a.parent = t) : a = e.substring(o, s), r(a)))
      }
      n ? (a = new h.XText(e), a.parent = t, r(a)) : r(e)
    }, h.XNamespace = function (e, t) {
      var n, r, a;
      return n = h.namespaceCache, null === t && (t = void 0), void 0 === n[e] ? (r = {
        namespaceName: e
        , preferredPrefix: null
        , getName: h.XNamespace.getName
        , toString: h.XNamespace.toString
      }, n[e] = r, r) : a = n[e]
    }, h.XNamespace.getName = function (e) {
      return new h.XName(this.namespaceName, e)
    }, h.XNamespace.toString = function () {
      return this === h.XNamespace.getNone() ? "" : "{" + this.namespaceName + "}"
    }, h.XNamespace.getNone = function () {
      var e, t, n;
      return e = h.namespaceCache, t = "__none", void 0 === e[t] ? (n = {
        namespaceName: t
        , preferredPrefix: null
        , getName: h.XNamespace.getName
        , toString: h.XNamespace.toString
      }, e[t] = n, n) : e[t]
    }, h.XNamespace.get = function (e) {
      return new h.XNamespace(e)
    }, h.XNamespace.getXml = function () {
      return new h.XNamespace("http://www.w3.org/XML/1998/namespace", "xml")
    }, h.XNamespace.getXmlns = function () {
      return new h.XNamespace("http://www.w3.org/2000/xmlns/", "xmlns")
    }, Object.defineProperties && (Object.defineProperty(h.XNamespace, "none", {
      get: function () {
        return h.XNamespace.getNone()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XNamespace, "xml", {
      get: function () {
        return h.XNamespace.getXml()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XNamespace, "xmlns", {
      get: function () {
        return h.XNamespace.getXmlns()
      }
      , enumerable: !0
      , configurable: !0
    })), h.XName = function (e, t) {
      var n, r, a, i, o, s, u, p, l, c, f;
      return n = h.nameCache, "string" == typeof e && void 0 === t && "{" === e.charAt(0) ? (f = e.indexOf("}"), i = e.substring(1, f), r = new h.XNamespace(i), t = e.substring(f + 1), a = "{" + i + "}" + t, void 0 === n[a] ? (n[a] = {
        namespace: r
        , namespaceName: i
        , localName: t
        , toString: h.XName.toString
      }, n[a]) : n[a]) : "string" == typeof e && void 0 === t ? (o = h.XNamespace.getNone(), s = "{" + o.namespaceName + "}" + e, void 0 === n[s] ? (u = {
        namespace: o
        , namespaceName: ""
        , localName: e
        , toString: h.XName.toString
      }, n[s] = u, u) : n[s]) : (p = e, "object" != typeof e && (p = h.XNamespace(e)), l = "{" + p.namespaceName + "}" + t, void 0 === n[l] ? (c = {
        namespace: p
        , namespaceName: p.namespaceName
        , localName: t
        , toString: h.XName.toString
      }, n[l] = c, c) : n[l])
    }, h.XName.toString = function () {
      return this.namespace + this.localName
    }, h.XName.qualify = function (e, t, n) {
      if (e.namespace === h.XNamespace.getNone()) return e.localName;
      var r = t.getPrefixOfNamespace(e.namespace, n);
      return "" === r ? e.localName : r + ":" + e.localName
    }, h.XName.get = function (e, t) {
      var n;
      if ("string" == typeof e && void 0 === t) return n = new h.XName(e);
      if (("string" == typeof e || e.namespaceName) && "string" == typeof t) return n = new h.XName(e, t);
      throw "XName.get: invalid arguments"
    }, h.XObject = function () {}, h.XObject.prototype.addAnnotation = function (e, t) {
      t || (t = {}), this.annotationsArray.push({
        Type: e
        , Object: t
      })
    }, h.XObject.prototype.annotation = function (e) {
      var t;
      for (t = 0; t < this.annotationsArray.length; t += 1)
        if (this.annotationsArray[t].Type === e) return this.annotationsArray[t].Object;
      return null
    }, h.XObject.prototype.annotations = function (e) {
      var n, r;
      for (n = [], r = 0; r < this.annotationsArray.length; r += 1) void 0 !== e && this.annotationsArray[r].Type !== e || n.push(this.annotationsArray[r].Object);
      return t.from(n)
    }, h.XObject.prototype.removeAnnotations = function (e) {
      var t;
      if (void 0 === e) this.annotationsArray = [];
      else
        for (;;) {
          for (t = 0; t < this.annotationsArray.length && this.annotationsArray[t].Type !== e; t += 1);
          if (t === this.annotationsArray.length) break;
          this.annotationsArray.splice(t, 1)
        }
    }, h.XObject.prototype.getDocument = function () {
      for (var e = this;;) {
        if ("Document" === e.nodeType) return e;
        if (e = e.parent, null === e) return null
      }
    }, Object.defineProperties && Object.defineProperty(h.XObject.prototype, "document", {
      get: function () {
        return this.getDocument()
      }
      , enumerable: !0
      , configurable: !0
    }), h.XNode = function () {}, h.XNode.prototype = new h.XObject, h.XNode.prototype.addAfterSelf = function () {
      var e, t, n, a, i, o;
      if (t = [], a = [], null === this.parent) throw "addAfterSelf: no parent element";
      if (e = this.parent.nodesArray.indexOf(this), e === -1) throw "Internal Error";
      for (t = [], i = 0; i < arguments.length; i += 1) t.push(arguments[i]);
      for (n = [], r(this, function (e) {
          n.push(e)
        }, function () {
          throw "addAfterSelf: invalid content"
        }, t), a = this.parent.nodesArray.slice(0, e + 1)
        .concat(n)
        .concat(this.parent.nodesArray.slice(e + 1)), o = 0; o < a.length; o += 1) a[o].parent = this.parent;
      this.parent.nodesArray = a
    }, h.XNode.prototype.addBeforeSelf = function () {
      var e, t, n, a, i, o;
      if (t = [], n = [], a = [], null === this.parent) throw "addBeforeSelf: no parent element";
      if (e = this.parent.nodesArray.indexOf(this), e === -1) throw "Internal Error";
      for (t = [], i = 0; i < arguments.length; i += 1) t.push(arguments[i]);
      for (n = [], r(this, function (e) {
          n.push(e)
        }, function () {
          throw "addBeforeSelf: invalid content"
        }, t), a = this.parent.nodesArray.slice(0, e)
        .concat(n)
        .concat(this.parent.nodesArray.slice(e)), o = 0; o < a.length; o += 1) a[o].parent = this.parent;
      this.parent.nodesArray = a
    }, h.XNode.prototype.CompareDocumentOrder = function () {
      throw "Not implemented"
    }, h.XNode.prototype.deepEquals = function (e) {
      var n, r, a, i;
      return this.nodeType === e.nodeType && (("Element" !== this.nodeType || this.name === e.name) && ("Comment" === this.nodeType || "Text" === this.nodeType || "CData" === this.nodeType || "ProcessingInstruction" === this.nodeType || "Entity" === this.nodeType ? this.value === e.value : this.attributesArray.length === e.attributesArray.length && ((0 === this.attributesArray.length || (n = t.from(this.attributesArray)
        .where(function (e) {
          return !e.isNamespaceDeclaration
        })
        .orderBy("k=>k.name"), r = t.from(e.attributesArray)
        .where(function (e) {
          return !e.isNamespaceDeclaration
        })
        .orderBy("k=>k.name"), !n.zip(r, function (e, t) {
          return {
            att1: e
            , att2: t
          }
        })
        .any(function (e) {
          return e.att1.name !== e.att2.name || e.att1.value !== e.att2.value
        }))) && (this.nodesArray.length === e.nodesArray.length && (0 === this.nodesArray.length && 0 === e.nodesArray.length || (a = t.from(this.nodesArray), i = t.from(e.nodesArray), !a.zip(i, function (e, t) {
          return {
            node1: e
            , node2: t
          }
        })
        .any(function (e) {
          return !e.node1.deepEquals(e.node2)
        })))))))
    }, h.XNode.prototype.isAfter = function () {
      throw "Not implemented"
    }, h.XNode.prototype.isBefore = function () {
      throw "Not implemented"
    }, h.XNode.prototype.getNextNode = function () {
      var e;
      if (null === this.parent) throw "getNextNode: no parent element";
      if (e = this.parent.nodesArray.indexOf(this), e === -1) throw "Internal Error";
      return e < this.parent.nodesArray.length - 2 ? this.parent.nodesArray[e + 1] : null
    }, h.XNode.prototype.remove = function () {
      var e, t;
      if (null === this.parent) throw "remove: no parent element";
      if (e = this.parent.nodesArray.indexOf(this), e === -1) throw "Internal Error";
      t = this.parent.nodesArray.slice(0, e)
        .concat(this.parent.nodesArray.slice(e + 1)), this.parent.nodesArray = t
    }, h.XNode.prototype.replaceWith = function () {
      var e, t, n, a, i, o;
      if (n = [], a = [], null === this.parent) throw "replaceWith: no parent element";
      if (e = this.parent.nodesArray.indexOf(this), e === -1) throw "Internal Error";
      for (n = [], i = 0; i < arguments.length; i += 1) n.push(arguments[i]);
      for (a = [], r(this, function (e) {
          a.push(e)
        }, function () {
          throw "replaceWith: invalid content"
        }, n), t = this.parent.nodesArray.slice(0, e)
        .concat(a)
        .concat(this.parent.nodesArray.slice(e + 1)), o = 0; o < t.length; o += 1) t[o].parent = this.parent;
      this.parent.nodesArray = t
    }, h.XNode.prototype.getPreviousNode = function () {
      var e;
      if (null === this.parent) throw "previousNode: no parent element";
      if (e = this.parent.nodesArray.indexOf(this), e === -1) throw "Internal Error";
      return e > 0 ? this.parent.nodesArray[e - 1] : null
    }, h.XNode.prototype.ancestors = function (e) {
      var n, r, a;
      if (n = this, e && "string" == typeof e && (e = new h.XName(e)), this.lazy) return t.Utils.createEnumerable(function () {
        var r;
        return t.Utils.createEnumerator(function () {
          r = n.parent
        }, function () {
          for (; null !== r;) {
            if (!e || r.name === e) {
              var t = r;
              return r = r.parent, this.yieldReturn(t)
            }
            r = r.parent
          }
          return this.yieldBreak()
        }, f.Blank)
      });
      if (r = [], a = this.parent, void 0 === e) {
        for (; null !== a;) r.push(a), a = a.parent;
        return t.from(r)
      }
      for (; null !== a;) a.name === e && r.push(a), a = a.parent;
      return t.from(r)
    }, h.XNode.prototype.nodesAfterSelf = function () {
      var e, n, r;
      if (r = this, null === this.parent) throw "nodesAfterSelf: no parent element";
      return this.lazy ? t.Utils.createEnumerable(function () {
        var e, n, a;
        return t.Utils.createEnumerator(function () {
          a = r.parent, e = a.nodesArray.indexOf(r) + 1, n = a.nodesArray.length
        }, function () {
          for (var t; e < n;) return t = a.nodesArray[e], e += 1, this.yieldReturn(t);
          return this.yieldBreak()
        }, f.Blank)
      }) : (e = this.parent.nodesArray.indexOf(this), n = t.from(this.parent.nodesArray.slice(e + 1)))
    }, h.XNode.prototype.nodesBeforeSelf = function () {
      var e, n, r;
      if (r = this, null === this.parent) throw "nodesBeforeSelf: no parent element";
      if (this.lazy) return t.Utils.createEnumerable(function () {
        var e, n, a;
        return t.Utils.createEnumerator(function () {
          e = r.parent, n = 0, a = e.nodesArray.indexOf(r)
        }, function () {
          for (var t; n < a;) return t = e.nodesArray[n], n += 1, this.yieldReturn(t);
          return this.yieldBreak()
        }, f.Blank)
      });
      if (null === this.parent) throw "nodesBeforeSelf: no parent element";
      if (e = this.parent.nodesArray.indexOf(this), e === -1) throw "Internal Error";
      return n = t.from(this.parent.nodesArray.slice(0, e))
    }, h.XNode.prototype.elementsAfterSelf = function (e) {
      var n, r, a;
      if (a = this, e && "string" == typeof e && (e = new h.XName(e)), null === this.parent) throw "elementsAfterSelf: no parent element";
      if (this.lazy) return t.Utils.createEnumerable(function () {
        var n, r, i;
        return t.Utils.createEnumerator(function () {
          i = a.parent, n = i.nodesArray.indexOf(a) + 1, r = i.nodesArray.length
        }, function () {
          for (; n < r;) {
            var t = i.nodesArray[n];
            if (!("Element" !== t.nodeType || e && t.name !== e)) return n += 1, this.yieldReturn(t);
            n += 1
          }
          return this.yieldBreak()
        }, f.Blank)
      });
      if (n = this.parent.nodesArray.indexOf(this), n === -1) throw "Internal Error";
      return r = t.from(this.parent.nodesArray.slice(n + 1))
        .where(function (e) {
          return "Element" === e.nodeType
        }), e && (r = r.where(function (t) {
          return t.name === e
        })), r
    }, h.XNode.prototype.elementsBeforeSelf = function (e) {
      var n, r, a;
      if (a = this, e && "string" == typeof e && (e = new h.XName(e)), null === this.parent) throw "elementsBeforeSelf: no parent element";
      if (this.lazy) return t.Utils.createEnumerable(function () {
        var n, r, i;
        return t.Utils.createEnumerator(function () {
          n = a.parent, r = 0, i = n.nodesArray.indexOf(a)
        }, function () {
          for (var t; r < i;) {
            if (t = n.nodesArray[r], !("Element" !== t.nodeType || e && t.name !== e)) return r += 1, this.yieldReturn(t);
            r += 1
          }
          return this.yieldBreak()
        }, f.Blank)
      });
      if (n = this.parent.nodesArray.indexOf(this), n === -1) throw "Internal Error";
      return r = t.from(this.parent.nodesArray.slice(0, n))
        .where(function (e) {
          return "Element" === e.nodeType
        }), e && (r = r.where(function (t) {
          return t.name === e
        })), r
    }, h.XNode.prototype.elementsBeforeSelfReverseDocumentOrder = function (e) {
      var n, r, a;
      if (a = this, e && "string" == typeof e && (e = new h.XName(e)), null === this.parent) throw "elementsBeforeSelfReverseDocumentOrder: no parent element";
      if (this.lazy) return t.Utils.createEnumerable(function () {
        var n, r;
        return t.Utils.createEnumerator(function () {
          n = a.parent, r = n.nodesArray.indexOf(a) - 1
        }, function () {
          for (; r >= 0;) {
            var t = n.nodesArray[r];
            if (!("Element" !== t.nodeType || e && t.name !== e)) return r -= 1, this.yieldReturn(t);
            r -= 1
          }
          return this.yieldBreak()
        }, f.Blank)
      });
      if (n = this.parent.nodesArray.indexOf(this), n === -1) throw "Internal Error";
      return r = t.from(this.parent.nodesArray.slice(0, n))
        .where(function (e) {
          return "Element" === e.nodeType
        })
        .reverse(), e && (r = r.where(function (t) {
          return t.name === e
        })), r
    }, Object.defineProperties && (Object.defineProperty(h.XNode.prototype, "previousNode", {
      get: function () {
        return this.getPreviousNode()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XNode.prototype, "nextNode", {
      get: function () {
        return this.getNextNode()
      }
      , enumerable: !0
      , configurable: !0
    })), h.XAttribute = function (e, t) {
      var n, r, a, i;
      if (this.nodeType = "Attribute", this.simpleValue = null, this.attributeNodesArray = null, this.isNamespaceDeclaration = !1, this.name = null, Object.defineProperties && Object.defineProperty(this, "value", {
          get: h.XAttribute.prototype.getValue
          , set: h.XAttribute.prototype.setValue
          , enumerable: !0
          , configurable: !0
        }), e.nodeType && "Attribute" === e.nodeType) {
        if (void 0 !== t) throw "XAttribute constructor: invalid arguments";
        if (this.isNamespaceDeclaration = e.isNamespaceDeclaration, null !== e.simpleValue && void 0 !== e.simpleValue) this.simpleValue = e.simpleValue;
        else {
          for (r = [], a = 0; a < e.attributeNodesArray.length; a += 1) r.push(e.attributeNodesArray[a]);
          this.attributeNodesArray = r
        }
        return void(this.name = e.name)
      }
      if (void 0 === t) throw "XAttribute constructor: invalid arguments";
      t.namespaceName ? this.attributeNodesArray = [t.namespaceName] : (r = [], m(t.toString(), this, !1, function (e) {
        r.push(e)
      }), 1 === r.length ? this.simpleValue = r[0] : this.attributeNodesArray = r), n = e, i = h.XNamespace.getXmlns(), "string" == typeof e && (n = "xmlns" === e ? new h.XName(i + "xmlns") : new h.XName(e)), this.isNamespaceDeclaration = n.namespace === i, this.name = n
    }, h.XAttribute.prototype = new h.XObject, d = function (e, t) {
      var n, r;
      if (null !== e.simpleValue && void 0 !== e.simpleValue) t.a(e.simpleValue);
      else
        for (n = e.attributeNodesArray, r = 0; r < n.length; r += 1) n[r].nodeType ? n[r].serialize(t) : t.a(n[r])
    }, h.XAttribute.prototype.serialize = function (e) {
      return this.name.namespace === h.XNamespace.getXmlns() ? "xmlns" === this.name.localName ? (e.a("xmlns='"), d(this, e), void e.a("'")) : (e.a("xmlns:")
        .a(this.name.localName)
        .a("='"), d(this, e), void e.a("'")) : this.name.namespace === h.XNamespace.getNone() ? (e.a(this.name.localName)
        .a("='"), d(this, e), void e.a("'")) : this.name.namespace === h.XNamespace.getXml() ? void("string" == typeof this.value ? (e.a("xml:")
        .a(this.name.localName)
        .a("='"), d(this, e), e.a("'")) : (e.a("xml:")
        .a(this.name.localName)
        .a("='"), d(this, e), e.a("'"))) : (e.a(h.XName.qualify(this.name, this.parent, !0))
        .a("='"), d(this, e), void e.a("'"))
    }, h.XAttribute.prototype.toString = function () {
      var e = n();
      return this.serialize(e), e.toString()
    }, h.XAttribute.prototype.remove = function () {
      var e, t;
      if (t = [], null === this.parent) throw "XAttribute.remove: no parent element";
      if (e = this.parent.attributesArray.indexOf(this), e === -1) throw "Internal Error";
      t = this.parent.attributesArray.slice(0, e)
        .concat(this.parent.attributesArray.slice(e + 1)), this.parent.attributesArray = t
    }, h.XAttribute.prototype.setValue = function (e) {
      var t = [];
      m(e.toString(), this, !1, function (e) {
        t.push(e)
      }), 1 === t.length ? this.simpleValue = t[0] : this.attributeNodesArray = t
    }, h.XAttribute.prototype.getValue = function () {
      var e, t;
      return e = n(), d(this, e), t = e.toString()
    }, h.XAttribute.prototype.getNextAttribute = function () {
      var e;
      if (null === this.parent) throw "getNextAttribute: no parent element";
      if (e = this.parent.attributesArray.indexOf(this), e === -1) throw "Internal Error";
      return e < this.parent.attributesArray.length - 2 ? this.parent.attributesArray[e + 1] : null
    }, h.XAttribute.prototype.getPreviousAttribute = function () {
      var e;
      if (!this.parent) throw "getPreviousAttribute: no parent element";
      if (e = this.parent.attributesArray.indexOf(this), e === -1) throw "Internal Error";
      return e > 0 ? this.parent.attributesArray[e - 1] : null
    }, Object.defineProperties && (Object.defineProperty(h.XAttribute.prototype, "previousAttribute", {
      get: function () {
        return this.getPreviousAttribute()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XAttribute.prototype, "nextAttribute", {
      get: function () {
        return this.getNextAttribute()
      }
      , enumerable: !0
      , configurable: !0
    })), h.XComment = function (e) {
      this.nodeType = "Comment", this.parent = null, e.nodeType && "Comment" === e.nodeType ? this.value = e.value.toString() : this.value = e.toString()
    }, h.XComment.prototype = new h.XNode, h.XComment.prototype.serialize = function (e, t, n) {
      var r;
      return n || (n = 0), t ? (r = h.spaces.substring(0, n), void e.a(r)
          .a("<!--")
          .a(this.value)
          .a("-->\n")) : void e.a("<!--")
        .a(this.value)
        .a("-->")
    }, h.XComment.prototype.toString = function (e) {
      var t = n();
      return this.serialize(t, e), t.toString()
    }, h.XContainer = function () {}, h.XContainer.prototype = new h.XNode, h.XContainer.prototype.add = function () {
      var e, t, n, a, i, o;
      for (e = [], t = [], n = [], a = 0; a < arguments.length; a += 1) n.push(arguments[a]);
      e = [], r(this, function (t) {
        e.push(t)
      }, function (e) {
        t.push(e)
      }, n), i = this.nodesArray.concat(e), o = this.attributesArray.concat(t), this.nodesArray = i, this.attributesArray = o
    }, h.XContainer.prototype.addFirst = function () {
      var e, t, n, a, i, o;
      for (e = [], t = [], n = [], a = 0; a < arguments.length; a += 1) n.push(arguments[a]);
      e = [], r(this, function (t) {
        e.push(t)
      }, function (e) {
        t.push(e)
      }, n), i = e.concat(this.nodesArray), o = this.attributesArray.concat(t), this.nodesArray = i, this.attributesArray = o
    }, h.XContainer.prototype.element = function (e) {
      var t, n;
      for ("string" == typeof e && (e = new h.XName(e)), n = this.nodesArray.length, t = 0; t < n; t += 1)
        if (this.nodesArray[t].name === e) return this.nodesArray[t];
      return null
    }, h.XContainer.prototype.nodes = function () {
      return t.from(this.nodesArray)
    }, h.XContainer.prototype.removeNodes = function () {
      this.nodesArray = []
    }, h.XContainer.prototype.replaceNodes = function () {
      var e, t, n, a, i;
      for (e = [], t = [], n = [], a = 0; a < arguments.length; a += 1) n.push(arguments[a]);
      r(this, function (t) {
        e.push(t)
      }, function (e) {
        t.push(e)
      }, n), i = this.attributesArray.concat(t), this.nodesArray = e, this.attributesArray = i
    }, h.XContainer.prototype.getFirstNode = function () {
      return this.nodesArray.length >= 1 ? this.nodesArray[0] : null
    }, h.XContainer.prototype.getLastNode = function () {
      return this.nodesArray.length >= 1 ? this.nodesArray[this.nodesArray.length - 1] : null
    }, h.XContainer.prototype.descendantNodes = function () {
      var e, n;
      return this.lazy ? n = t.from(this.nodesArray)
        .traverseDepthFirst(function (e) {
          return t.from(e.nodesArray)
        }) : (e = [], a(this, function (t) {
          e.push(t)
        }), t.from(e))
    }, h.XContainer.prototype.descendants = function (e) {
      var n;
      return e && "string" == typeof e && (e = new h.XName(e)), this.lazy ? i(this, e) : (n = [], o(this, e, function (e) {
        n.push(e)
      }), t.from(n))
    }, h.XContainer.prototype.elements = function (e) {
      var n, r;
      return r = this, e && "string" == typeof e && (e = new h.XName(e)), this.lazy ? t.Utils.createEnumerable(function () {
          var n, a;
          return t.Utils.createEnumerator(function () {
            n = 0, a = r.nodesArray.length
          }, function () {
            for (; n < a;) {
              var t = r.nodesArray[n];
              if (!("Element" !== t.nodeType || e && t.name !== e)) return n += 1, this.yieldReturn(t);
              n += 1
            }
            return this.yieldBreak()
          }, f.Blank)
        }) : n = e ? t.from(this.nodesArray)
        .where(function (t) {
          return "Element" === t.nodeType && t.name === e
        }) : t.from(this.nodesArray)
        .where(function (e) {
          return "Element" === e.nodeType
        })
    }, Object.defineProperties && (Object.defineProperty(h.XContainer.prototype, "firstNode", {
      get: function () {
        return this.getFirstNode()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XContainer.prototype, "lastNode", {
      get: function () {
        return this.getLastNode()
      }
      , enumerable: !0
      , configurable: !0
    })), h.XDeclaration = function (e, t, n) {
      return e && "object" == typeof e && 1 === arguments.length ? (this.type = "XDeclaration", this.encoding = e.encoding ? e.encoding : "", this.standalone = e.standalone ? e.standalone : "", void(this.version = e.version ? e.version : "")) : 3 === arguments.length ? (this.type = "XDeclaration", this.version = e, this.encoding = t, void(this.standalone = n)) : (this.type = "XDeclaration", this.version = "", this.encoding = "", void(this.standalone = ""))
    }, h.XDeclaration.prototype.serialize = function (e, t) {
      if (this.version || this.encoding || this.standalone) return t ? (e.a("<?xml"), this.version && e.a(' version="')
        .a(this.version)
        .a('"'), this.encoding && e.a(' encoding="')
        .a(this.encoding)
        .a('"'), this.standalone && e.a(' standalone="')
        .a(this.standalone)
        .a('"'), void e.a("?>\n")) : (e.a("<?xml"), this.version && e.a(' version="')
        .a(this.version)
        .a('"'), this.encoding && e.a(' encoding="')
        .a(this.encoding)
        .a('"'), this.standalone && e.a(' standalone="')
        .a(this.standalone)
        .a('"'), void e.a("?>"))
    }, h.XDeclaration.prototype.toString = function (e) {
      var t = n();
      return this.serialize(t, e), t.toString()
    }, h.XDocument = function (e) {
      var t, n, a, i, o;
      if (this.annotationsArray = [], this.parent = null, this.nodeType = "Document", this.nodesArray = [], this.declaration = new h.XDeclaration, "object" == typeof e && e.nodeType && "Document" === e.nodeType) {
        if (arguments.length > 1) throw "XDocument constructor: invalid arguments";
        return t = [], null !== e.declaration && (this.declaration = new h.XDeclaration(e.declaration)), r(this, function (e) {
          t.push(e)
        }, function () {
          throw "Internal Error"
        }, e.nodesArray), void(this.nodesArray = t)
      }
      if (arguments.length > 0) {
        for ("object" == typeof e && e.type && "XDeclaration" === e.type ? (a = 1, this.declaration = e) : a = 0, i = [], o = a; o < arguments.length; o += 1) i.push(arguments[o]);
        n = [], r(this, function (e) {
          n.push(e)
        }, function () {
          throw "Internal Error"
        }, i), this.nodesArray = n
      }
    }, h.XDocument.prototype = new h.XContainer, h.XDocument.prototype.serialize = function (e, t) {
      var n;
      if (t)
        for (this.declaration.serialize(e, !0), n = 0; n < this.nodesArray.length; n += 1) this.nodesArray[n].serialize(e, !0);
      else
        for (this.declaration.serialize(e, !1), n = 0; n < this.nodesArray.length; n += 1) this.nodesArray[n].serialize(e, !1)
    }, h.XDocument.prototype.toString = function (e) {
      var t, r, a;
      return r = n(), t = new h.XDocument(this.declaration, this.nodes()
        .select(function (e) {
          return "Element" === e.nodeType ? (a = new h.XElement(e), y(a), a) : e
        })), t.serialize(r, e), r.toString()
    }, h.XDocument.parse = function (e) {
      var t, n;
      return t = c(e), n = h.XDocument.load(t)
    }, h.XDocument.prototype.DocumentType = function () {
      throw "Not implemented"
    }, h.XDocument.load = function (e) {
      var t = s(e);
      return t
    }, h.XDocument.prototype.getRoot = function () {
      return t.from(this.nodesArray)
        .firstOrDefault(function (e) {
          return "Element" === e.nodeType
        })
    }, h.XDocument.prototype.descendants = function (e) {
      var n;
      return e && "string" == typeof e && (e = new h.XName(e)), this.lazy ? i(this, e) : (e && "string" == typeof e && (e = new h.XName(e)), n = [], o(this, e, function (e) {
        n.push(e)
      }), t.from(n))
    }, Object.defineProperties && Object.defineProperty(h.XDocument.prototype, "root", {
      get: function () {
        return this.getRoot()
      }
      , enumerable: !0
      , configurable: !0
    }), h.XElement = function (e) {
      var t, n, a, i, o, s, u;
      if (this.annotationsArray = [], this.parent = null, this.nodeType = "Element", this.nodesArray = null, this.attributesArray = null, this.name = null, this.nsCache = null, Object.defineProperties && Object.defineProperty(this, "value", {
          get: h.XElement.prototype.getValue
          , set: h.XElement.prototype.setValue
          , enumerable: !0
          , configurable: !0
        }), "object" == typeof e && e.nodeType && "Element" === e.nodeType) {
        if (arguments.length > 1) throw "XElement constructor: invalid arguments";
        return this.name = e.name, t = [], n = [], r(this, function (e) {
          t.push(e)
        }, function (e) {
          n.push(e)
        }, e.attributesArray, e.nodesArray), this.attributesArray = n, void(this.nodesArray = t)
      }
      if (o = e, "string" == typeof e && (o = new h.XName(e)), this.name = o, arguments.length > 1) {
        for (s = [], u = 1; u < arguments.length; u += 1) s.push(arguments[u]);
        a = [], i = [], r(this, function (e) {
          a.push(e)
        }, function (e) {
          i.push(e)
        }, s), this.attributesArray = i, this.nodesArray = a
      }
      null === this.nodesArray && (this.nodesArray = []), null === this.attributesArray && (this.attributesArray = [])
    }, h.XElement.prototype = new h.XContainer, h.XElement.prototype.attribute = function (e) {
      var t;
      for (e && "string" == typeof e && (e = new h.XName(e)), t = 0; t < this.attributesArray.length; t += 1)
        if (this.attributesArray[t].name === e) return this.attributesArray[t];
      return null
    }, h.XElement.prototype.attributes = function (e) {
      var n;
      return e && "string" == typeof e && (e = new h.XName(e)), n = void 0 === e ? t.from(this.attributesArray) : t.from(this.attributesArray)
        .where(function (t) {
          return t.name === e
        })
    }, h.XElement.prototype.serialize = function (e, n, r) {
      var a, i, o, s, u, p, l, c, f, m;
      if (r || (r = 0), p = h.XName.qualify(this.name, this, !1), a = [].concat(this.attributesArray), a.sort(function (e, t) {
          return l = e.name.toString(), c = t.name.toString(), l < c ? -1 : l > c ? 1 : 0
        }), 0 === this.nodesArray.length) {
        if (n) return i = h.spaces.substring(0, r), 0 === a.length ? void e.a(i)
          .a("<")
          .a(p)
          .a("/>\n") : 1 === a.length ? void e.a(i)
          .a("<")
          .a(p)
          .a(" ")
          .a(a[0])
          .a("/>\n") : (u = i + h.spaces.substring(0, 2 + p.length), o = a.length - 2, e.a(i)
            .a("<")
            .a(p)
            .a(" "), a[0].serialize(e), e.a("\n"), t.from(a)
            .skip(1)
            .take(o)
            .forEach(function (t) {
              e.a(u), t.serialize(e), e.a("\n")
            }), e.a(u), a[a.length - 1].serialize(e), void e.a("/>\n"));
        for (e.a("<")
          .a(p)
          .a(0 === a.length ? "" : " "), f = 0; f < a.length; f += 1) a[f].serialize(e), f < a.length - 1 && e.a(" ");
        return void e.a("/>")
      }
      if (n) {
        for (i = h.spaces.substring(0, r), s = !1, f = 0; f < this.nodesArray.length; ++f)
          if (m = this.nodesArray[f], "Text" === m.nodeType && "" !== m.value || "Entity" === m.nodeType) {
            s = !0;
            break
          }
        if (s) {
          if (0 === a.length) {
            for (e.a(i)
              .a("<")
              .a(p)
              .a(">"), f = 0; f < this.nodesArray.length; f += 1) this.nodesArray[f].serialize(e);
            return void e.a("</")
              .a(p)
              .a(">\n")
          }
          if (1 === a.length) {
            for (e.a(i)
              .a("<")
              .a(p)
              .a(" "), a[0].serialize(e), e.a(">"), f = 0; f < this.nodesArray.length; f += 1) this.nodesArray[f].serialize(e, !1);
            return void e.a("</")
              .a(p)
              .a(">\n")
          }
          return u = i + h.spaces.substring(0, 2 + p.length), o = a.length - 2, e.a(i)
            .a("<")
            .a(p)
            .a(" "), a[0].serialize(e), e.a("\n"), t.from(a)
            .skip(1)
            .take(o)
            .forEach(function (t) {
              e.a(u)
                .a(t)
                .a("\n")
            }), e.a(u), a[a.length - 1].serialize(e), e.a(">"), t.from(this.nodesArray)
            .forEach(function (t) {
              t.serialize(e, !1)
            }), void e.a("</")
            .a(p)
            .a(">\n")
        }
        return 0 === a.length ? (e.a(i)
          .a("<")
          .a(p)
          .a(">\n"), t.from(this.nodesArray)
          .forEach(function (t) {
            t.serialize(e, !0, r + 2)
          }), void e.a(i)
          .a("</")
          .a(p)
          .a(">\n")) : 1 === a.length ? (e.a(i)
          .a("<")
          .a(p)
          .a(" "), a[0].serialize(e), e.a(">\n"), t.from(this.nodesArray)
          .forEach(function (t) {
            t.serialize(e, !0, r + 2)
          }), void e.a(i)
          .a("</")
          .a(p)
          .a(">\n")) : (u = i + h.spaces.substring(0, 2 + p.length), o = a.length - 2, e.a(i)
          .a("<")
          .a(p)
          .a(" "), a[0].serialize(e), e.a("\n"), t.from(a)
          .skip(1)
          .take(o)
          .forEach(function (t) {
            e.a(u), t.serialize(e), e.a("\n")
          }), e.a(u), a[a.length - 1].serialize(e), e.a(">\n"), t.from(this.nodesArray)
          .forEach(function (t) {
            t.serialize(e, !0, r + 2)
          }), void e.a(i)
          .a("</")
          .a(p)
          .a(">\n"))
      }
      e.a("<")
        .a(p), t.from(a)
        .forEach(function (t) {
          e.a(" "), t.serialize(e)
        }), e.a(">"), t.from(this.nodesArray)
        .forEach(function (t) {
          t.serialize(e)
        }), e.a("</")
        .a(p)
        .a(">")
    }, y = function (e) {
      var t, n, r, a, i, o, s, u, l, c, f, m, d, y, g, X, v;
      g = h.XNamespace.getXmlns(), X = h.XNamespace.getNone(), v = h.XNamespace.getXml();
      for (m in h.namespaceCache) h.namespaceCache.hasOwnProperty(m) && h.namespaceCache[m].namespaceName && (h.namespaceCache[m].preferredPrefix = null);
      for (A = 0, f = {
          prefixesFromNamespaceObjects: !0
          , namespaceArray: []
          , prefixArray: []
        }, t = e.attributesArray, r = t.length, a = 0; a < r; a += 1) o = t[a], o.isNamespaceDeclaration && (m = new h.XNamespace(o.value), d = o.name.localName, m.preferredPrefix = d, f.namespaceArray.push(m), f.prefixArray.push(d));
      for (a = 0; a < r; a += 1)
        if (o = t[a], !o.isNamespaceDeclaration && o.name.namespace !== X && o.name.namespace !== v) {
          for (l = -1, c = f.namespaceArray.length, i = 0; i < c; ++i)
            if (f.namespaceArray[i] === o.name.namespace && "xmlns" !== f.prefixArray[i]) {
              l = i;
              break
            }
          if (l === -1) {
            for (;;) {
              if (s = "p" + A, f.prefixArray.indexOf(s) === -1) break;
              A += 1
            }
            u = new h.XAttribute(h.XNamespace.getXmlns() + s, o.name.namespace.namespaceName), e.add(u), f.namespaceArray.push(o.name.namespace), f.prefixArray.push(s), o.name.namespace.preferredPrefix = s
          }
        }
      if (e.name.namespace !== X && f.namespaceArray.indexOf(e.name.namespace) === -1) {
        for (;;) {
          if (s = "p" + A, f.prefixArray.indexOf(s) === -1) break;
          A += 1
        }
        u = new h.XAttribute(h.XNamespace.getXmlns() + s, e.name.namespace.namespaceName), e.add(u), f.namespaceArray.push(e.name.namespace), f.prefixArray.push(s), e.name.namespace.preferredPrefix = s
      }
      for (e.nsCache = f, n = e.nodesArray, r = n.length, i = 0; i < r; i += 1) y = n[i], "Element" === y.nodeType && p(y, f, g, v, X)
    }, h.XElement.prototype.toString = function (e) {
      var t, r;
      return void 0 === e && (e = !0), r = n(), t = new h.XElement(this), y(t), t.serialize(r, e, 0), r.toString()
    }, h.XElement.load = function (e) {
      var t = s(e);
      return t
    }, h.XElement.prototype.getFirstAttribute = function () {
      return this.attributesArray.length > 0 ? this.attributesArray[0] : null
    }, h.XElement.prototype.getDefaultNamespaceHelper = function () {
      var e, n;
      return e = [].concat(this.attributesArray), n = t.from(e)
        .where(function (e) {
          return e.isNamespaceDeclaration
        })
        .firstOrDefault(function (e) {
          return e.name.namespace === h.XNamespace.getXmlns() && "xmlns" === e.name.localName
        })
    }, h.XElement.prototype.getDefaultNamespace = function (e) {
      var t, n;
      for (t = this;;) {
        if (n = t.getDefaultNamespaceHelper(e), null !== n) return new h.XNamespace(n.value);
        if (t = t.parent, null === t || "Document" === t.nodeType) return h.XNamespace.getNone()
      }
    }, h.XElement.prototype.getNamespaceOfPrefixForThisElement = function (e) {
      var n = t.from(this.attributesArray)
        .firstOrDefault(function (t) {
          return t.isNamespaceDeclaration && t.name.namespace === h.XNamespace.getXmlns() && t.name.localName === e
        });
      return n
    }, h.XElement.prototype.getNamespaceOfPrefix = function (e) {
      var t, n;
      for (t = this;;) {
        if (n = t.getNamespaceOfPrefixForThisElement(e), null !== n) return n;
        if (t = t.parent, null === t || "Document" === t.nodeType) return null
      }
    }, A = 0, h.XElement.prototype.getPrefixOfNamespace = function (e, t) {
      var n, r, a, i, o;
      if (n = this, a = this.nsCache, i = a.prefixesFromNamespaceObjects, i && e.preferredPrefix) return "xmlns" === e.preferredPrefix ? "" : e.preferredPrefix;
      if (void 0 === t && (t = !1), o = a.namespaceArray.indexOf(e), o === -1) throw "Local namespace cache is invalid";
      return t || o === -1 || "xmlns" !== a.prefixArray[o] ? r = a.prefixArray[o] : ""
    }, h.XElement.prototype.getHasAttributes = function () {
      return this.attributesArray && this.attributesArray.length > 0
    }, h.XElement.prototype.getHasElements = function () {
      return t.from(this.nodesArray)
        .any(function (e) {
          return "Element" === e.nodeType
        })
    }, h.XElement.prototype.getIsEmpty = function () {
      return 0 === this.nodesArray.length
    }, h.XElement.prototype.getLastAttribute = function () {
      return this.attributesArray.length > 0 ? this.attributesArray[this.attributesArray.length - 1] : null
    }, h.XElement.parse = function (e) {
      var t, n;
      return t = c(e), n = h.XElement.load(t.documentElement)
    }, h.XElement.prototype.removeAll = function () {
      this.nodesArray = [], this.attributesArray = []
    }, h.XElement.prototype.removeAttributes = function () {
      this.attributesArray = []
    }, h.XElement.prototype.replaceAll = function () {
      var e, t, n;
      for (e = [], t = [], e = [], n = 0; n < arguments.length; n += 1) e.push(arguments[n]);
      t = [], r(this, function (e) {
        t.push(e)
      }, function () {
        throw "replaceAll: invalid content"
      }, e), this.nodesArray = t
    }, h.XElement.prototype.replaceAttributes = function () {
      var e, t, n;
      for (e = [], t = [], e = [], n = 0; n < arguments.length; n += 1) e.push(arguments[n]);
      t = [], r(this, function () {
        throw "replaceAttributes: invalid content"
      }, function (e) {
        t.push(e)
      }, e), this.attributesArray = t
    }, h.XElement.prototype.setAttributeValue = function (e, t) {
      var n;
      return "string" == typeof e && (e = new h.XName(e)), n = this.attribute(e), null !== n ? null === t ? void(null !== n.parent && n.remove()) : void n.setValue(t) : (n = new h.XAttribute(e, t), n.parent = this, void this.attributesArray.push(n))
    }, h.XElement.prototype.setElementValue = function (e, t) {
      var n, r;
      return "string" == typeof e && (e = new h.XName(e)), n = this.element(e), null !== n ? null === t ? void(null !== n.parent && n.remove()) : (r = [], m(t, n, !0, function (e) {
        r.push(e)
      }), void(n.nodesArray = r)) : (n = new h.XElement(e, t), n.parent = this, void this.nodesArray.push(n))
    }, h.XElement.prototype.setValue = function (e) {
      var t = [];
      m(e.toString(), this, !0, function (e) {
        t.push(e)
      }), this.nodesArray = t
    }, h.XElement.prototype.getValue = function () {
      var e = this.descendantNodes()
        .where(function (e) {
          return "Text" === e.nodeType || "CDATA" === e.nodeType || "Entity" === e.nodeType
        })
        .select(function (e) {
          return e.value
        })
        .toArray()
        .join("");
      return e
    }, h.XElement.prototype.ancestorsAndSelf = function (e) {
      var n, r, a;
      if (a = this, e && "string" == typeof e && (e = new h.XName(e)), this.lazy) return t.Utils.createEnumerable(function () {
        var n;
        return t.Utils.createEnumerator(function () {
          n = a
        }, function () {
          for (; null !== n;) {
            if (!e || n.name === e) {
              var t = n;
              return n = n.parent, this.yieldReturn(t)
            }
            n = n.parent
          }
          return this.yieldBreak()
        }, f.Blank)
      });
      if (n = [], r = this.parent, void 0 === e) {
        for (n.push(this); null !== r;) n.push(r), r = r.parent;
        return t.from(n)
      }
      for (this.name === e && n.push(this); null !== r;) r.name === e && n.push(r), r = r.parent;
      return t.from(n)
    }, h.XElement.prototype.descendantNodesAndSelf = function () {
      var e, n;
      return this.lazy ? (n = t.from(this.nodesArray)
        .traverseDepthFirst(function (e) {
          return t.from(e.nodesArray)
        }), t.from([this])
        .concat(n)) : (e = [], e.push(this), l(this, function (t) {
        e.push(t)
      }), t.from(e))
    }, h.XElement.prototype.descendantsAndSelf = function (e) {
      var n, r;
      return e && "string" == typeof e && (e = new h.XName(e)), this.lazy ? (r = e ? e === this.name ? t.from([this]) : t.from([]) : t.from([this]), r.concat(i(this, e))) : (n = [], e ? e === this.name && n.push(this) : n.push(this), o(this, e, function (e) {
        n.push(e)
      }), t.from(n))
    }, Object.defineProperties && (Object.defineProperty(h.XElement.prototype, "firstAttribute", {
      get: function () {
        return this.getFirstAttribute()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XElement.prototype, "hasAttributes", {
      get: function () {
        return this.getHasAttributes()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XElement.prototype, "hasElements", {
      get: function () {
        return this.getHasElements()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XElement.prototype, "isEmpty", {
      get: function () {
        return this.getIsEmpty()
      }
      , enumerable: !0
      , configurable: !0
    }), Object.defineProperty(h.XElement.prototype, "lastAttribute", {
      get: function () {
        return this.getLastAttribute()
      }
      , enumerable: !0
      , configurable: !0
    })), h.XProcessingInstruction = function (e, t) {
      this.nodeType = "ProcessingInstruction", this.parent = null, this.target = null, this.data = null, e && e.nodeType && "ProcessingInstruction" === e.nodeType ? (e.target && (this.target = e.target), e.data && (this.data = e.data)) : (this.target = e, this.data = t)
    }, h.XProcessingInstruction.prototype = new h.XNode, h.XProcessingInstruction.prototype.serialize = function (e, t, n) {
      var r;
      return n || (n = 0), t ? (r = h.spaces.substring(0, n), void e.a(r)
          .a("<?")
          .a(this.target)
          .a(" ")
          .a(this.data)
          .a("?>\n")) : void e.a("<?")
        .a(this.target)
        .a(" ")
        .a(this.data)
        .a("?>")
    }, h.XProcessingInstruction.prototype.toString = function (e) {
      var t = n();
      return this.serialize(t, e), t.toString()
    }, h.XText = function (e) {
      this.nodeType = "Text", this.parent = null, e && e.nodeType && "Text" === e.nodeType ? this.value = e.value.toString() : this.value = e, this.serialize = function (e) {
        e.a(this.value)
      }, this.toString = function () {
        return this.value
      }
    }, h.XText.prototype = new h.XNode, h.XEntity = function (e) {
      this.nodeType = "Entity", this.parent = null, e && e.nodeType && "Entity" === e.nodeType ? this.value = e.value : "string" == typeof e ? this.value = e : this.value = e.toString(), this.serialize = function (e) {
        var t = "&" + this.value + ";";
        e.a(t)
      }, this.toString = function () {
        return "&" + this.value + ";"
      }
    }, h.XEntity.prototype = new h.XNode, h.XCData = function (e) {
      this.nodeType = "CDATA", this.parent = null, e && e.nodeType && "CDATA" === e.nodeType ? this.value = e.value.toString() : this.value = e.toString()
    }, h.XCData.prototype = new h.XText, h.XCData.prototype.serialize = function (e, t, n) {
      var r;
      return n || (n = 0), t ? (r = h.spaces.substring(0, n), void e.a(r)
          .a("<![CDATA[")
          .a(this.value)
          .a("]]>\n")) : void e.a("<![CDATA[")
        .a(this.value)
        .a("]]>")
    }, h.XCData.prototype.toString = function (e) {
      var t = n();
      return this.serialize(t, e), t.toString()
    }, h
  }
  var n;
  "function" == typeof define && define.amd ? define("ltxml", ["linq"], function (r) {
    return n = t(e, r)
  }) : "undefined" != typeof module && module.exports ? (n = t(e, Enumerable), module.exports = n) : (n = t(e, Enumerable), e.Ltxml = n)
}(this);
