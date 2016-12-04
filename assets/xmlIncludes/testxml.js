! function (e) {
  "use strict";

  function n(e, n, t) {
    function r(e, n) {
      for (var t in e.files) {
        var r = e.files[t];
        if (!b.util.endsWith(t, "/")) {
          var a = t;
          "[Content_Types].xml" !== t && (a = "/" + t);
          var o = new b.OpenXmlPart(n, a, null, null, r.data);
          n.parts[a] = o
        }
      }
      var i = n.parts["[Content_Types].xml"];
      if (null === i) throw "Invalid Open XML document: no [Content_Types].xml";
      n.ctXDoc = x.parse(i.data);
      for (var s in n.parts)
        if ("[Content_Types].xml" !== s) {
          var l = n.getContentType(s)
            , w = n.parts[s];
          w.contentType = l, b.util.endsWith(l, "xml") && (w.partType = "xml"), b.util.endsWith(l, "xml") || (w.partType = "binary")
        }
    }

    function a(e, n) {
      var t = new JSZip(n, {
        base64: !0
        , checkCRC32: !1
      });
      r(t, e)
    }

    function o(e, n, t) {
      var a = null
        , o = 1
        , i = setInterval(function () {
          return 1 === o ? (a = new JSZip(n, {
            base64: !0
            , checkCRC32: !1
          }), void(o = 2)) : 2 === o ? (r(a, e, t), clearInterval(i), void t(e)) : void 0
        }, 10)
    }

    function i(e, n) {
      var t = new JSZip(n);
      r(t, e)
    }

    function s(e, n, t) {
      var a = null
        , o = 1
        , i = setInterval(function () {
          return 1 === o ? (a = new JSZip(n), void(o = 2)) : 2 === o ? (r(a, e), clearInterval(i), void t(e)) : void 0
        }, 10)
    }

    function l(e, n) {
      var t = n.getRoot();
      e.ctXDoc = new x(new P("1.0", "utf-8", "yes"), new S(Pe.Types, new v("xmlns", ve.namespaceName), new S(Pe.Default, new v("Extension", "rels"), new v("ContentType", b.contentTypes.relationships)), new S(Pe.Default, new v("Extension", "xml"), new v("ContentType", "application/xml")))), t.elements(Ce.part)
        .forEach(function (n) {
          var t = n.attribute(Ce.name)
            .value
            , r = n.attribute(Ce.contentType)
            .value
            , a = "xml";
          if (b.util.endsWith(r, "xml") || (a = "base64"), "xml" === a) {
            var o = new b.OpenXmlPart(e, t, r, a, new x(n.element(Ce.xmlData)
              .elements()
              .firstOrDefault()));
            e.parts[t] = o, "application/vnd.openxmlformats-package.relationships+xml" !== r && e.ctXDoc.getRoot()
              .add(new S(Pe.Override, new v("PartName", t), new v("ContentType", r)))
          }
          if ("base64" === a) {
            var o = new b.OpenXmlPart(e, t, r, a, n.element(Ce.binaryData)
              .value);
            e.parts[t] = o, e.ctXDoc.getRoot()
              .add(new S(Pe.Override, new v("PartName", t), new v("ContentType", r)))
          }
        });
      var r = new b.OpenXmlPart(e, "[Content_Types].xml", null, "xml", e.ctXDoc);
      e.parts["[Content_Types].xml"] = r
    }

    function w(e, n) {
      var t = x.parse(n);
      l(e, t)
    }

    function p(e, n, t) {
      var r = null
        , a = 1
        , o = setInterval(function () {
          return 1 === a ? (r = x.parse(n), void(a = 2)) : 2 === a ? (l(e, r), clearInterval(o), void t(e)) : void 0
        }, 10)
    }

    function c(e) {
      var n = new JSZip;
      for (var t in e.parts) {
        var r, a = e.parts[t];
        if (null !== a)
          if ("[Content_Types].xml" === t) n.file("[Content_Types].xml", e.ctXDoc.toString(!1));
          else {
            var o = e.ctXDoc.getRoot()
              .elements(Pe.Override)
              .firstOrDefault(function (e) {
                return e.attribute("PartName")
                  .value === t
              });
            if (null === o) {
              var i = t.substring(t.lastIndexOf(".") + 1)
                .toLowerCase()
                , s = e.ctXDoc.getRoot()
                .elements(Pe.Default)
                .firstOrDefault(function (e) {
                  return e.attribute("Extension")
                    .value.toLowerCase() === i
                });
              if (!s) throw "internal error";
              r = s.attribute("ContentType")
                .value
            } else r = o.attribute("ContentType")
              .value;
            var l = t;
            if ("/" === l.charAt(0) && (l = l.substring(1)), "binary" === a.partType && n.file(l, a.data, {
                binary: !0
              }), "xml" === a.partType && "string" == typeof a.data) {
              var w = a.data
                , p = b.util.decode_utf8(w);
              n.file(l, p)
            }
            if ("xml" === a.partType && a.data.nodeType && n.file(l, a.data.toString(!1)), "base64" === a.partType) {
              for (var c = a.data, d = [], m = 0, u = c.length;;) {
                if (m >= u) break;
                d.push(c.substring(m, m + 76) + "\n"), m += 76
              }
              n.file(l, d.join(""), {
                base64: !0
              })
            }
          }
      }
      return n
    }

    function d(e, n, t) {
      var r = t.getXDocument()
        , a = r.getRoot()
        .elements(Se.Relationship)
        .select(function (t) {
          var r = null
            , a = t.attribute("TargetMode");
          a && (r = a.value);
          var o = new b.OpenXmlRelationship(e, n, t.attribute("Id")
            .value, t.attribute("Type")
            .value, t.attribute("Target")
            .value, r);
          return o
        })
        .toArray();
      return a
    }

    function m(e, n, t, r, a) {
      var o = e.getXDocument()
        , i = null;
      "Internal" !== a && (i = new v("TargetMode", "External")), o.getRoot()
        .add(new S(Se.Relationship, new v("Id", n), new v("Type", t), new v("Target", r), i))
    }

    function u(e) {
      var n = e.uri
        , t = n.lastIndexOf("/")
        , r = n.substring(t + 1)
        , a = n.substring(0, t) + "/_rels/" + r + ".rels";
      return a
    }

    function h(e) {
      var n = u(e)
        , t = e.pkg.getPartByUri(n);
      return t
    }

    function f(e, n) {
      if ("%" === e.charAt(n)) {
        n++;
        var t = e.charAt(n++);
        t += e.charAt(n++);
        var r = parseInt(t, 16);
        return {
          chr: r
          , i: n
        }
      }
      var r = e.charCodeAt(n);
      return n++, {
        chr: r
        , i: n
      }
    }

    function g(n) {
      var r, a, o, i, s, l, w, p, c;
      if (null === n) return null;
      for (r = [], a = n.length, o = 0; o < a; o += 1)
        if (i = n.charCodeAt(o), 61623 !== i && 61607 !== i && 61558 !== i && 61656 !== i && 61608 !== i && 61692 !== i && 61664 !== i && 61618 !== i)
          if (i >= 61440) r.push(new T("loz"));
          else if (i >= 128) {
        if (s = i.toString(), l = b.entityMap[s]) {
          r.push(new T(l));
          continue
        }
        var d = i.toString(16);
        r.push(new T("#" + d))
      } else r.push(n.charAt(o));
      else r.push(new T("bull"));
      return w = new t(e.from(r))
        .groupAdjacent(function (e) {
          var n = "string" == typeof e;
          return n
        }), p = w.select(function (e) {
          return e.Key === !0 ? c = e.Group.toJoinedString() : e.Group
        })
    }

    function y(e) {
      return "Element" === e.nodeType ? new S(e.name, e.attributes(), e.nodes()
        .select(function (e) {
          return y(e)
        })) : "Text" === e.nodeType ? g(e.value) : e
    }
    var b = {}
      , v = n.XAttribute
      , P = (n.XCData, n.XComment, n.XContainer, n.XDeclaration)
      , x = n.XDocument
      , S = n.XElement
      , T = n.XEntity
      , C = n.XName
      , k = n.XNamespace
      , D = (n.XNode, n.XObject, n.XProcessingInstruction);
    n.XText, n.cast, n.castInt;
    b.OpenXmlPackage = function (e) {
      this.parts = {}, this.ctXDoc = null, void 0 !== e && (b.util.isBase64(e) ? a(this, e) : "string" == typeof e ? w(this, e) : i(this, e))
    }, b.OpenXmlPackage.prototype.openFromBase64 = function (e) {
      a(this, e)
    }, b.OpenXmlPackage.prototype.openFromBase64Async = function (e, n) {
      o(this, e, n)
    }, b.OpenXmlPackage.prototype.openFromFlatOpc = function (e) {
      w(this, e)
    }, b.OpenXmlPackage.prototype.openFromFlatOpcAsync = function (e, n) {
      p(this, e, n)
    }, b.OpenXmlPackage.prototype.openFromBlob = function (e) {
      i(this, e)
    }, b.OpenXmlPackage.prototype.openFromBlobAsync = function (e, n) {
      s(this, e, n)
    }, b.OpenXmlPackage.prototype.saveToBase64 = function () {
      var e = c(this)
        , n = e.generate({
          base64: !0
          , compression: "deflate"
          , type: "base64"
        });
      return n
    }, b.OpenXmlPackage.prototype.saveToBase64Async = function (e) {
      var n = null
        , t = 1
        , r = this
        , a = setInterval(function () {
          if (1 === t) return n = c(r), void(t = 2);
          if (2 === t) {
            var o = n.generate({
              base64: !0
              , compression: "deflate"
              , type: "base64"
            });
            return clearInterval(a), void e(o)
          }
        }, 10)
    }, b.OpenXmlPackage.prototype.saveToBlob = function () {
      var e = c(this)
        , n = e.generate({
          blob: !0
          , base64: !1
          , type: "blob"
        });
      return n
    }, b.OpenXmlPackage.prototype.saveToBlobAsync = function (e) {
      var n = null
        , t = 1
        , r = this
        , a = setInterval(function () {
          if (1 === t) return n = c(r), void(t = 2);
          if (2 === t) {
            var o = n.generate({
              blob: !0
              , base64: !1
              , type: "blob"
            });
            return clearInterval(a), void e(o)
          }
        }, 10)
    }, b.OpenXmlPackage.prototype.saveToFlatOpc = function () {
      var e = new P("1.0", "UTF-8", "yes")
        , n = new v(k.xmlns + "pkg", "http://schemas.microsoft.com/office/2006/xmlPackage")
        , t = new S(Ce._package, n)
        , r = new x(e, new D("mso-application", 'progid="Word.Document"'), t);
      for (var a in this.parts)
        if ("[Content_Types].xml" !== a) {
          var o, i = this.parts[a];
          if (null !== i) {
            var s = this.ctXDoc.getRoot()
              .elements(Pe.Override)
              .firstOrDefault(function (e) {
                var n = e.attribute("PartName")
                  .value
                  , t = a
                  , r = n === t;
                return r
              });
            if (null === s) {
              var l = a.substring(a.lastIndexOf(".") + 1)
                .toLowerCase()
                , w = this.ctXDoc.getRoot()
                .elements(Pe.Default)
                .firstOrDefault(function (e) {
                  return e.attribute("Extension")
                    .value.toLowerCase() === l
                });
              if (!w) throw "internal error";
              o = w.attribute("ContentType")
                .value
            } else o = s.attribute("ContentType")
              .value;
            var p = null
              , c = null;
            if ("xml" === i.partType && "string" == typeof i.data && (c = x.parse(b.util.decode_utf8(i.data))
                .root, c = y(c)), "xml" === i.partType && i.data.nodeType)
              if ("Document" === i.data.nodeType) c = i.data.getRoot();
              else {
                if ("Element" !== i.data.nodeType) throw "internal error";
                c = i.data
              }
            if ("base64" === i.partType) {
              for (var d = i.data, m = [], u = 0, h = d.length;;) {
                if (u >= h) break;
                m.push(d.substring(u, u + 76) + "\n"), u += 76
              }
              c = m.join(""), p = "store"
            }
            "binary" === i.partType && (c = b.util.encode64(i.data), p = "store");
            var f = new v(Ce.name, a)
              , g = new v(Ce.contentType, o)
              , T = null;
            p && (T = new v(Ce.compression, p));
            var C = null;
            "base64" !== i.partType && "binary" !== i.partType || (C = new S(Ce.binaryData, c)), "xml" === i.partType && (C = new S(Ce.xmlData, c));
            var L = new S(Ce.part, f, g, T, C);
            t.add(L)
          }
        }
      return r.toString(!0)
    }, b.OpenXmlPackage.prototype.saveToFlatOpcAsync = function (e) {
      var n = new P("1.0", "UTF-8", "yes")
        , t = new v(k.xmlns + "pkg", "http://schemas.microsoft.com/office/2006/xmlPackage")
        , r = new S(Ce._package, t)
        , a = new x(n, new D("mso-application", 'progid="Word.Document"'), r)
        , o = [];
      for (var i in this.parts)
        if ("[Content_Types].xml" !== i) {
          var s = this.parts[i];
          null !== s && o.push(s)
        }
      var l = 0
        , w = this
        , p = o.length
        , c = setInterval(function () {
          if (!(l < p)) return clearInterval(c), void e(a.toString(!0));
          for (var n = 0; n < 10; n++) {
            var t = o[l]
              , i = w.ctXDoc.getRoot()
              .elements(Pe.Override)
              .firstOrDefault(function (e) {
                var n = e.attribute("PartName")
                  .value
                  , r = t.uri
                  , a = n === r;
                return a
              })
              , s = null;
            if (null === i) {
              var d = t.uri.substring(t.uri.lastIndexOf(".") + 1)
                .toLowerCase()
                , m = w.ctXDoc.getRoot()
                .elements(Pe.Default)
                .firstOrDefault(function (e) {
                  return e.attribute("Extension")
                    .value.toLowerCase() === d
                });
              if (!m) throw "internal error";
              s = m.attribute("ContentType")
                .value
            } else s = i.attribute("ContentType")
              .value;
            var u = null
              , h = null;
            if ("xml" === t.partType && "string" == typeof t.data && (h = x.parse(b.util.decode_utf8(t.data))
                .root, h = y(h)), "xml" === t.partType && t.data.nodeType)
              if ("Document" === t.data.nodeType) h = t.data.getRoot();
              else {
                if ("Element" !== t.data.nodeType) throw "internal error";
                h = t.data
              }
            if ("base64" === t.partType) {
              for (var f = t.data, g = [], P = 0, T = f.length;;) {
                if (P >= T) break;
                g.push(f.substring(P, P + 76) + "\n"), P += 76
              }
              h = g.join(""), u = "store"
            }
            "binary" === t.partType && (h = b.util.encode64(t.data), u = "store");
            var C = new v(Ce.name, t.uri)
              , k = new v(Ce.contentType, s)
              , D = null;
            u && (D = new v(Ce.compression, u));
            var L = null;
            "base64" !== t.partType && "binary" !== t.partType || (L = new S(Ce.binaryData, h)), "xml" === t.partType && (L = new S(Ce.xmlData, h));
            var F = new S(Ce.part, C, k, D, L);
            if (r.add(F), l += 1, l >= p) break
          }
        }, 10)
    }, b.OpenXmlPackage.prototype.addPart = function (e, n, t, r) {
      var a = this.ctXDoc.getRoot()
        .elements(Pe.Override)
        .firstOrDefault(function (n) {
          var t = n.attribute("PartName")
            .value;
          return e === t
        });
      if (a || this.parts[e]) throw "Invalid operation, trying to add a part that already exists";
      var o = new b.OpenXmlPart(this, e, n, t, r);
      return this.parts[e] = o, this.ctXDoc.getRoot()
        .add(new S(Pe.Override, new v("PartName", e), new v("ContentType", n))), o
    }, b.OpenXmlPackage.prototype.deletePart = function (e) {
      var n = e.uri;
      this.parts[n] = null;
      var t = this.ctXDoc.getRoot()
        .elements(Pe.Override)
        .firstOrDefault(function (e) {
          var t = e.attribute("PartName")
            .value;
          return n === t
        });
      t && t.remove()
    }, b.OpenXmlPackage.prototype.getRelationships = function () {
      var e = this.getPartByUri("/_rels/.rels")
        , n = d(this, null, e);
      return n
    }, b.OpenXmlPackage.prototype.getParts = function () {
      var e = [];
      for (var n in this.parts) this.parts[n].contentType !== b.contentTypes.relationships && "[Content_Types].xml" !== n && e.push(this.parts[n]);
      return e
    }, b.OpenXmlPackage.prototype.getRelationshipsByRelationshipType = function (e) {
      var n = this.getPartByUri("/_rels/.rels")
        , t = n.getXDocument()
        , r = this
        , a = t.getRoot()
        .elements(Se.Relationship)
        .where(function (n) {
          return n.attribute("Type")
            .value === e
        })
        .select(function (n) {
          var t = null
            , a = n.attribute("TargetMode");
          a && (t = a.value);
          var o = new b.OpenXmlRelationship(r, null, n.attribute("Id")
            .value, e, n.attribute("Target")
            .value, t);
          return o
        })
        .toArray();
      return a
    }, b.OpenXmlPackage.prototype.getPartsByRelationshipType = function (e) {
      for (var n = this.getRelationshipsByRelationshipType(e), t = [], r = 0; r < n.length; ++r) {
        var a = this.getPartByUri(n[r].targetFullName);
        t.push(a)
      }
      return t
    }, b.OpenXmlPackage.prototype.getPartByRelationshipType = function (e) {
      var n = this.getPartsByRelationshipType(e);
      return n.length < 1 ? null : n[0]
    }, b.OpenXmlPackage.prototype.getRelationshipsByContentType = function (e) {
      var n = this.getPartByUri("/_rels/.rels");
      if (n) {
        for (var t = d(this, null, n), r = [], a = 0; a < t.length; ++a)
          if ("External" !== t[a].targetMode) {
            var o = this.getContentType(t[a].targetFullName);
            o === e && r.push(t[a])
          }
        return r
      }
      return []
    }, b.OpenXmlPackage.prototype.getPartsByContentType = function (e) {
      for (var n = this.getRelationshipsByContentType(e), t = [], r = 0; r < n.length; ++r) {
        var a = this.getPartByUri(n[r].targetFullName);
        t.push(a)
      }
      return t
    }, b.OpenXmlPackage.prototype.getRelationshipById = function (n) {
      var t = e.from(this.getRelationships())
        .firstOrDefault(function (e) {
          return e.relationshipId == n
        });
      return t
    }, b.OpenXmlPackage.prototype.getPartById = function (n) {
      var t = e.from(this.getRelationships())
        .firstOrDefault(function (e) {
          return e.relationshipId == n
        });
      if (!t) return null;
      var r = this.getPartByUri(t.targetFullName);
      return r
    }, b.OpenXmlPackage.prototype.getPartByUri = function (e) {
      var n = this.parts[e];
      return n
    }, b.OpenXmlPackage.prototype.addRelationship = function (e, n, t, r) {
      r || (r = "Internal");
      var a = this.getPartByUri("/_rels/.rels");
      a || (rootRelationshipsPart = this.addPart("/_rels/.rels", this.contentTypes.relationships, "xml", new x(new S(Se.Relationships, new v("xmlns", xe.namespaceName))))), m(a, e, n, t, r)
    }, b.OpenXmlPackage.prototype.deleteRelationship = function (e) {
      var n = this.getPartByUri("/_rels/.rels")
        , t = n.getXDocument()
        , r = t.getRoot()
        .elements(Se.Relationship)
        .firstOrDefault(function (n) {
          return n.attribute("Id")
            .value == e
        });
      r && r.remove()
    }, b.OpenXmlPackage.prototype.getContentType = function (e) {
      var n, t;
      if (n = this.ctXDoc.descendants(Pe.Override)
        .firstOrDefault(function (n) {
          return n.attribute("PartName")
            .value === e
        }), null === n) {
        var r = e.lastIndexOf(".")
          , a = e.substring(r + 1)
          , o = this.ctXDoc.descendants(Pe.Default)
          .firstOrDefault(function (e) {
            return e.attribute("Extension")
              .value === a
          });
        return null !== o ? o.attribute("ContentType")
          .value : null
      }
      return t = n.attribute("ContentType")
        .value
    }, b.OpenXmlPackage.prototype.mainDocumentPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.mainDocument)
    }, b.OpenXmlPackage.prototype.coreFilePropertiesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.coreFileProperties)
    }, b.OpenXmlPackage.prototype.extendedFilePropertiesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.extendedFileProperties)
    }, b.OpenXmlPackage.prototype.workbookPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.workbook)
    }, b.OpenXmlPackage.prototype.customFilePropertiesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.customFileProperties)
    }, b.OpenXmlPackage.prototype.presentationPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.presentation)
    }, b.OpenXmlPackage.prototype.contentParts = function () {
      for (var e = this.mainDocumentPart(), n = [e], t = e.headerParts(), r = 0; r < t.length; r++) n.push(t[r]);
      for (var a = e.footerParts(), r = 0; r < a.length; r++) n.push(a[r]);
      var o = e.endnotesPart()
        , i = e.footnotesPart();
      return o && n.push(o), i && n.push(i), n
    }, b.OpenXmlPart = function (e, n, t, r, a) {
      this.pkg = e, this.uri = n, this.contentType = t, this.partType = r, "[Content_Types].xml" === n && (r = "xml"), this.data = a
    }, b.OpenXmlPart.prototype.getXDocument = function () {
      if ("xml" === this.partType && "string" == typeof this.data) {
        var e = this.data
          , n = b.util.decode_utf8(e);
        this.data = x.parse(n), this.partType = "xml"
      }
      return this.data
    }, b.OpenXmlPart.prototype.putXDocument = function (e) {
      e && (this.data = e)
    }, b.OpenXmlPart.prototype.getRelationships = function () {
      var e = h(this);
      if (e) {
        var n = d(null, this, e);
        return n
      }
      return []
    }, b.OpenXmlPart.prototype.getParts = function () {
      for (var e = [], n = this.getRelationships(), t = 0; t < n.length; ++t)
        if ("Internal" === n[t].targetMode) {
          var r = this.pkg.getPartByUri(n[t].targetFullName);
          e.push(r)
        }
      return e
    }, b.OpenXmlPart.prototype.getRelationshipsByRelationshipType = function (e) {
      for (var n = [], t = this.getRelationships(), r = 0; r < t.length; ++r) t[r].relationshipType === e && n.push(t[r]);
      return n
    }, b.OpenXmlPart.prototype.getPartsByRelationshipType = function (e) {
      for (var n = [], t = this.getRelationshipsByRelationshipType(e), r = 0; r < t.length; ++r) {
        var a = this.pkg.getPartByUri(t[r].targetFullName);
        n.push(a)
      }
      return n
    }, b.OpenXmlPart.prototype.getPartByRelationshipType = function (e) {
      var n = this.getPartsByRelationshipType(e);
      return n.length < 1 ? null : n[0]
    }, b.OpenXmlPart.prototype.getRelationshipsByContentType = function (e) {
      for (var n = [], t = this.getRelationships(), r = 0; r < t.length; ++r)
        if ("Internal" === t[r].targetMode) {
          var a = this.pkg.getContentType(t[r].targetFullName);
          a === e && n.push(t[r])
        }
      return n
    }, b.OpenXmlPart.prototype.getPartsByContentType = function (e) {
      for (var n = [], t = this.getRelationshipsByContentType(e), r = 0; r < t.length; ++r) {
        var a = this.pkg.getPartByUri(t[r].targetFullName);
        n.push(a)
      }
      return n
    }, b.OpenXmlPart.prototype.getRelationshipById = function (e) {
      for (var n = this.getRelationships(), t = 0; t < n.length; ++t)
        if (n[t].relationshipId === e) return n[t];
      return null
    }, b.OpenXmlPart.prototype.getPartById = function (e) {
      var n = this.getRelationshipById(e);
      if (n) {
        var t = this.pkg.getPartByUri(n.targetFullName);
        return t
      }
      return null
    }, b.OpenXmlPart.prototype.addRelationship = function (e, n, t, r) {
      var a = h(this);
      if (!a) {
        var o = u(this);
        a = this.pkg.addPart(o, b.contentTypes.relationships, "xml", new x(new S(Se.Relationships, new v(k.xmlns + "rel", xe.namespaceName))))
      }
      m(a, e, n, t, r)
    }, b.OpenXmlPart.prototype.deleteRelationship = function (e) {
      var n = h(this);
      if (n) var t = n.getXDocument()
        , r = t.getRoot()
        .elements(Se.Relationship)
        .firstOrDefault(function (n) {
          if (n.attribute("Id")
            .value === e) return !0
        });
      r && r.remove()
    }, b.OpenXmlPart.prototype.wordprocessingCommentsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.wordprocessingComments)
    }, b.OpenXmlPart.prototype.fontTablePart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.fontTable)
    }, b.OpenXmlPart.prototype.numberingDefinitionsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.numberingDefinitions)
    }, b.OpenXmlPart.prototype.headerParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.header)
    }, b.OpenXmlPart.prototype.footerParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.footer)
    }, b.OpenXmlPart.prototype.customXmlPropertiesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.customXmlProperties)
    }, b.OpenXmlPart.prototype.footnotesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.footnotes)
    }, b.OpenXmlPart.prototype.endnotesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.endnotes)
    }, b.OpenXmlPart.prototype.styleDefinitionsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.styles)
    }, b.OpenXmlPart.prototype.webSettingsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.webSettings)
    }, b.OpenXmlPart.prototype.documentSettingsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.documentSettings)
    }, b.OpenXmlPart.prototype.glossaryDocumentPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.glossaryDocument)
    }, b.OpenXmlPart.prototype.calculationChainPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.calculationChain)
    }, b.OpenXmlPart.prototype.cellMetadataPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.cellMetadata)
    }, b.OpenXmlPart.prototype.chartsheetParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.chartsheet)
    }, b.OpenXmlPart.prototype.sharedStringTablePart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.sharedStringTable)
    }, b.OpenXmlPart.prototype.themePart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.theme)
    }, b.OpenXmlPart.prototype.thumbnailPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.thumbnail)
    }, b.OpenXmlPart.prototype.workbookRevisionHeaderPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.workbookRevisionHeader)
    }, b.OpenXmlPart.prototype.workbookStylesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.workbookStyles)
    }, b.OpenXmlPart.prototype.worksheetParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.worksheet)
    }, b.OpenXmlPart.prototype.drawingsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.drawings)
    }, b.OpenXmlPart.prototype.imageParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.image)
    }, b.OpenXmlPart.prototype.pivotTableParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.pivotTable)
    }, b.OpenXmlPart.prototype.queryTableParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.queryTable)
    }, b.OpenXmlPart.prototype.tableDefinitionParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.tableDefinition)
    }, b.OpenXmlPart.prototype.timeLineParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.timeLine)
    }, b.OpenXmlPart.prototype.worksheetCommentsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.worksheetComments)
    }, b.OpenXmlPart.prototype.commentAuthorsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.commentAuthors)
    }, b.OpenXmlPart.prototype.customXmlParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.customXml)
    }, b.OpenXmlPart.prototype.fontParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.font)
    }, b.OpenXmlPart.prototype.handoutMasterPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.handoutMaster)
    }, b.OpenXmlPart.prototype.notesMasterPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.notesMaster)
    }, b.OpenXmlPart.prototype.notesSlidePart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.notesSlide)
    }, b.OpenXmlPart.prototype.presentationPropertiesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.presentationProperties)
    }, b.OpenXmlPart.prototype.slideMasterParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.slideMaster)
    }, b.OpenXmlPart.prototype.slideParts = function () {
      return this.getPartsByRelationshipType(b.relationshipTypes.slide)
    }, b.OpenXmlPart.prototype.tableStylesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.tableStyles)
    }, b.OpenXmlPart.prototype.themePart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.theme)
    }, b.OpenXmlPart.prototype.userDefinedTagsPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.userDefinedTags)
    }, b.OpenXmlPart.prototype.viewPropertiesPart = function () {
      return this.getPartByRelationshipType(b.relationshipTypes.viewProperties)
    }, b.OpenXmlRelationship = function (e, n, t, r, a, o) {
      this.fromPkg = e, this.fromPart = n, this.relationshipId = t, this.relationshipType = r, this.target = a, this.targetMode = o, o || (this.targetMode = "Internal");
      var i, s = a;
      if (this.fromPkg && (i = "/"), this.fromPart) {
        var l = this.fromPart.uri.lastIndexOf("/");
        i = l === -1 ? "/" : this.fromPart.uri.substring(0, l) + "/"
      }
      if ("External" === o) return void(this.targetFullName = this.target);
      for (; b.util.startsWith(s, "../");) {
        b.util.endsWith(i, "/") && (i = i.substring(0, i.length - 1));
        var w = i.lastIndexOf("/");
        if (w === -1) throw "internal error when processing relationships";
        i = i.substring(0, w + 1), s = s.substring(3)
      }
      this.targetFullName = i + s
    }, b.util = {}, b.util.isBase64 = function (e) {
      if ("string" != typeof e) return !1;
      for (var n = e.substring(0, 500), t = 0; t < n.length; t++) {
        var r = n[t];
        if (!(r >= "A" && r <= "Z" || r >= "a" && r <= "z" || r >= "0" && r <= "9" || "+" === r || "/" === r)) return !1
      }
      return !0
    }, b.util.trim = function (e, n) {
      var t, r;
      return n || (n = "\\s\\xA0\\t"), t = "^[" + n + "]+", r = "[" + n + "]+$", e.replace(new RegExp(t), "")
        .replace(new RegExp(r), "")
    }, b.util.trimStart = function (e, n) {
      var t;
      return n || (n = "\\s\\xA0\\t"), t = "^[" + n + "]+", e.replace(new RegExp(t), "")
    }, b.util.trimEnd = function (e, n) {
      var t;
      return n || (n = "\\s\\xA0\\t"), t = "[" + n + "]+$", e.replace(new RegExp(t), "")
    }, b.util.startsWith = function (e, n) {
      var t = e.match("^" + n);
      return !!t && t.join("") === n
    }, b.util.endsWith = function (e, n) {
      var t = e.match(n + "$");
      return !!t && t.join("") === n
    }, b.util.trimEndingNewlines = function (e) {
      var n;
      for (n = e;
        "\n" === n.substr(n.length - 1);) n = n.substr(0, n.length - 1);
      return n
    }, b.util.bucketTimer = {};
    var L = b.util.bucketTimer;
    L.init = function () {
      var e;
      L.currentTime = (new Date)
        .getTime(), L.beginningTime = L.currentTime, L.currentBucket = "";
      for (e in L) "function" != typeof L[e] && "currentTime" !== e && "currentBucket" !== e && "beginningTime" !== e && delete L[e]
    }, L.bucket = function (e) {
      var n, t, r;
      n = (new Date)
        .getTime(), t = n - L.currentTime, "" !== L.currentBucket && (L[L.currentBucket] ? (L[L.currentBucket].time += t, L[L.currentBucket].count += 1) : (r = {}, r.time = t, r.count = 1, L[L.currentBucket] = r)), L.currentTime = n, L.currentBucket = e
    }, b.util.lPad = function (e, n, t) {
      var r = Math.max(n + 1 - e.length, 0);
      return Array(r)
        .join(t) + e
    }, b.util.rPad = function (e, n, t) {
      var r = Math.max(n + 1 - e.length, 0);
      return e + Array(r)
        .join(t)
    }, L.dump = function () {
      var n, t, r, a, o, i, s, l;
      L.bucket(""), t = "", r = [];
      for (n in L) "function" != typeof L[n] && "currentTime" !== n && "currentBucket" !== n && "beginningTime" !== n && r.push(b.util.rPad(n.toString(), 50, "-") + ": " + b.util.lPad(L[n].time.toString(), 8, " ") + " " + b.util.lPad(L[n].count.toString(), 8, " "));
      for (a = e.from(r), o = a.orderBy("z=>z"), i = o.toArray(), l = 0; l < i.length; l += 1) t += i[l] + "\n";
      return s = L.currentTime - L.beginningTime, t += "total time: " + s + "\n"
    }, b.util.encode_utf8 = function (e) {
      return unescape(encodeURIComponent(e))
    }, b.util.decode_utf8 = function (e) {
      return decodeURIComponent(escape(e))
    };
    var F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    b.util.encode64 = function (e) {
      e = escape(e);
      var n, t, r, a, o, i = ""
        , s = ""
        , l = ""
        , w = 0;
      do {
        var p = f(e, w);
        n = p.chr, w = p.i;
        var p = f(e, w);
        t = p.chr, w = p.i;
        var p = f(e, w);
        s = p.chr, w = p.i, r = n >> 2, a = (3 & n) << 4 | t >> 4, o = (15 & t) << 2 | s >> 6, l = 63 & s, isNaN(t) ? o = l = 64 : isNaN(s) && (l = 64), i = i + F.charAt(r) + F.charAt(a) + F.charAt(o) + F.charAt(l), n = t = s = "", r = a = o = l = ""
      } while (w < e.length);
      return i
    }, b.util.decode64 = function (e) {
      var n, t, r, a, o, i = ""
        , s = ""
        , l = ""
        , w = 0
        , p = /[^A-Za-z0-9\+\/\=]/g;
      p.exec(e) && alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do r = F.indexOf(e.charAt(w++)), a = F.indexOf(e.charAt(w++)), o = F.indexOf(e.charAt(w++)), l = F.indexOf(e.charAt(w++)), n = r << 2 | a >> 4, t = (15 & a) << 4 | o >> 2, s = (3 & o) << 6 | l, i += String.fromCharCode(n), 64 != o && (i += String.fromCharCode(t)), 64 != l && (i += String.fromCharCode(s)), n = t = s = "", r = a = o = l = ""; while (w < e.length);
      return unescape(i)
    }, b.entityMap = {
      160: "nbsp"
      , 161: "iexcl"
      , 162: "cent"
      , 163: "pound"
      , 164: "curren"
      , 165: "yen"
      , 166: "brvbar"
      , 167: "sect"
      , 168: "uml"
      , 169: "copy"
      , 170: "ordf"
      , 171: "laquo"
      , 172: "not"
      , 173: "shy"
      , 174: "reg"
      , 175: "macr"
      , 176: "deg"
      , 177: "plusmn"
      , 178: "sup2"
      , 179: "sup3"
      , 180: "acute"
      , 181: "micro"
      , 182: "para"
      , 183: "middot"
      , 184: "cedil"
      , 185: "sup1"
      , 186: "ordm"
      , 187: "raquo"
      , 188: "frac14"
      , 189: "frac12"
      , 190: "frac34"
      , 191: "iquest"
      , 192: "Agrave"
      , 193: "Aacute"
      , 194: "Acirc"
      , 195: "Atilde"
      , 196: "Auml"
      , 197: "Aring"
      , 198: "AElig"
      , 199: "Ccedil"
      , 200: "Egrave"
      , 201: "Eacute"
      , 202: "Ecirc"
      , 203: "Euml"
      , 204: "Igrave"
      , 205: "Iacute"
      , 206: "Icirc"
      , 207: "Iuml"
      , 208: "ETH"
      , 209: "Ntilde"
      , 210: "Ograve"
      , 211: "Oacute"
      , 212: "Ocirc"
      , 213: "Otilde"
      , 214: "Ouml"
      , 215: "times"
      , 216: "Oslash"
      , 217: "Ugrave"
      , 218: "Uacute"
      , 219: "Ucirc"
      , 220: "Uuml"
      , 221: "Yacute"
      , 222: "THORN"
      , 223: "szlig"
      , 224: "agrave"
      , 225: "aacute"
      , 226: "acirc"
      , 227: "atilde"
      , 228: "auml"
      , 229: "aring"
      , 230: "aelig"
      , 231: "ccedil"
      , 232: "egrave"
      , 233: "eacute"
      , 234: "ecirc"
      , 235: "euml"
      , 236: "igrave"
      , 237: "iacute"
      , 238: "icirc"
      , 239: "iuml"
      , 240: "eth"
      , 241: "ntilde"
      , 242: "ograve"
      , 243: "oacute"
      , 244: "ocirc"
      , 245: "otilde"
      , 246: "ouml"
      , 247: "divide"
      , 248: "oslash"
      , 249: "ugrave"
      , 250: "uacute"
      , 251: "ucirc"
      , 252: "uuml"
      , 253: "yacute"
      , 254: "thorn"
      , 255: "yuml"
      , 338: "OElig"
      , 339: "oelig"
      , 352: "Scaron"
      , 353: "scaron"
      , 376: "Yuml"
      , 402: "fnof"
      , 710: "circ"
      , 732: "tilde"
      , 913: "Alpha"
      , 914: "Beta"
      , 915: "Gamma"
      , 916: "Delta"
      , 917: "Epsilon"
      , 918: "Zeta"
      , 919: "Eta"
      , 920: "Theta"
      , 921: "Iota"
      , 922: "Kappa"
      , 923: "Lambda"
      , 924: "Mu"
      , 925: "Nu"
      , 926: "Xi"
      , 927: "Omicron"
      , 928: "Pi"
      , 929: "Rho"
      , 931: "Sigma"
      , 932: "Tau"
      , 933: "Upsilon"
      , 934: "Phi"
      , 935: "Chi"
      , 936: "Psi"
      , 937: "Omega"
      , 945: "alpha"
      , 946: "beta"
      , 947: "gamma"
      , 948: "delta"
      , 949: "epsilon"
      , 950: "zeta"
      , 951: "eta"
      , 952: "theta"
      , 953: "iota"
      , 954: "kappa"
      , 955: "lambda"
      , 956: "mu"
      , 957: "nu"
      , 958: "xi"
      , 959: "omicron"
      , 960: "pi"
      , 961: "rho"
      , 962: "sigmaf"
      , 963: "sigma"
      , 964: "tau"
      , 965: "upsilon"
      , 966: "phi"
      , 967: "chi"
      , 968: "psi"
      , 969: "omega"
      , 977: "thetasym"
      , 978: "upsih"
      , 982: "piv"
      , 8194: "ensp"
      , 8195: "emsp"
      , 8201: "thinsp"
      , 8204: "zwnj"
      , 8205: "zwj"
      , 8206: "lrm"
      , 8207: "rlm"
      , 8211: "ndash"
      , 8212: "mdash"
      , 8216: "lsquo"
      , 8217: "rsquo"
      , 8218: "sbquo"
      , 8220: "ldquo"
      , 8221: "rdquo"
      , 8222: "bdquo"
      , 8224: "dagger"
      , 8225: "Dagger"
      , 8226: "bull"
      , 8230: "hellip"
      , 8240: "permil"
      , 8242: "prime"
      , 8243: "Prime"
      , 8249: "lsaquo"
      , 8250: "rsaquo"
      , 8254: "oline"
      , 8260: "frasl"
      , 8364: "euro"
      , 8465: "image"
      , 8472: "weierp"
      , 8476: "real"
      , 8482: "trade"
      , 8501: "alefsym"
      , 8592: "larr"
      , 8593: "uarr"
      , 8594: "rarr"
      , 8595: "darr"
      , 8596: "harr"
      , 8629: "crarr"
      , 8656: "lArr"
      , 8657: "uArr"
      , 8658: "rArr"
      , 8659: "dArr"
      , 8660: "hArr"
      , 8704: "forall"
      , 8706: "part"
      , 8707: "exist"
      , 8709: "empty"
      , 8711: "nabla"
      , 8712: "isin"
      , 8713: "notin"
      , 8715: "ni"
      , 8719: "prod"
      , 8721: "sum"
      , 8722: "minus"
      , 8727: "lowast"
      , 8730: "radic"
      , 8733: "prop"
      , 8734: "infin"
      , 8736: "ang"
      , 8743: "and"
      , 8744: "or"
      , 8745: "cap"
      , 8746: "cup"
      , 8747: "int"
      , 8756: "there4"
      , 8764: "sim"
      , 8773: "cong"
      , 8776: "asymp"
      , 8800: "ne"
      , 8801: "equiv"
      , 8804: "le"
      , 8805: "ge"
      , 8834: "sub"
      , 8835: "sup"
      , 8836: "nsub"
      , 8838: "sube"
      , 8839: "supe"
      , 8853: "oplus"
      , 8855: "otimes"
      , 8869: "perp"
      , 8901: "sdot"
      , 8968: "lceil"
      , 8969: "rceil"
      , 8970: "lfloor"
      , 8971: "rfloor"
      , 9001: "lang"
      , 9002: "rang"
      , 9674: "loz"
      , 9824: "spades"
      , 9827: "clubs"
      , 9829: "hearts"
      , 9830: "diams"
    }, b.contentTypes = {
      calculationChain: "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml"
      , cellMetadata: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml"
      , chart: "application/vnd.openxmlformats-officedocument.drawingml.chart+xml"
      , chartColorStyle: "application/vnd.ms-office.chartcolorstyle+xml"
      , chartDrawing: "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml"
      , chartsheet: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml"
      , chartStyle: "application/vnd.ms-office.chartstyle+xml"
      , commentAuthors: "application/vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml"
      , connections: "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml"
      , coreFileProperties: "application/vnd.openxmlformats-package.core-properties+xml"
      , customFileProperties: "application/vnd.openxmlformats-officedocument.custom-properties+xml"
      , customization: "application/vnd.ms-word.keyMapCustomizations+xml"
      , customProperty: "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty"
      , customXmlProperties: "application/vnd.openxmlformats-officedocument.customXmlProperties+xml"
      , diagramColors: "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml"
      , diagramData: "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml"
      , diagramLayoutDefinition: "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml"
      , diagramPersistLayout: "application/vnd.ms-office.drawingml.diagramDrawing+xml"
      , diagramStyle: "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml"
      , dialogsheet: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml"
      , digitalSignatureOrigin: "application/vnd.openxmlformats-package.digital-signature-origin"
      , documentSettings: "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"
      , drawings: "application/vnd.openxmlformats-officedocument.drawing+xml"
      , endnotes: "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml"
      , excelAttachedToolbars: "application/vnd.ms-excel.attachedToolbars"
      , extendedFileProperties: "application/vnd.openxmlformats-officedocument.extended-properties+xml"
      , externalWorkbook: "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml"
      , fontData: "application/x-fontdata"
      , fontTable: "application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml"
      , footer: "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"
      , footnotes: "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml"
      , gif: "image/gif"
      , glossaryDocument: "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml"
      , handoutMaster: "application/vnd.openxmlformats-officedocument.presentationml.handoutMaster+xml"
      , header: "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"
      , jpeg: "image/jpeg"
      , mainDocument: "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"
      , notesMaster: "application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml"
      , notesSlide: "application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml"
      , numberingDefinitions: "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"
      , pict: "image/pict"
      , pivotTable: "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml"
      , pivotTableCacheDefinition: "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml"
      , pivotTableCacheRecords: "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml"
      , png: "image/png"
      , presentation: "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"
      , presentationProperties: "application/vnd.openxmlformats-officedocument.presentationml.presProps+xml"
      , presentationTemplate: "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml"
      , queryTable: "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml"
      , relationships: "application/vnd.openxmlformats-package.relationships+xml"
      , ribbonAndBackstageCustomizations: "http://schemas.microsoft.com/office/2009/07/customui"
      , sharedStringTable: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"
      , singleCellTable: "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml"
      , slicerCache: "application/vnd.openxmlformats-officedocument.spreadsheetml.slicerCache+xml"
      , slicers: "application/vnd.openxmlformats-officedocument.spreadsheetml.slicer+xml"
      , slide: "application/vnd.openxmlformats-officedocument.presentationml.slide+xml"
      , slideComments: "application/vnd.openxmlformats-officedocument.presentationml.comments+xml"
      , slideLayout: "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"
      , slideMaster: "application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"
      , slideShow: "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml"
      , slideSyncData: "application/vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml"
      , styles: "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"
      , tableDefinition: "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"
      , tableStyles: "application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml"
      , theme: "application/vnd.openxmlformats-officedocument.theme+xml"
      , themeOverride: "application/vnd.openxmlformats-officedocument.themeOverride+xml"
      , tiff: "image/tiff"
      , trueTypeFont: "application/x-font-ttf"
      , userDefinedTags: "application/vnd.openxmlformats-officedocument.presentationml.tags+xml"
      , viewProperties: "application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml"
      , vmlDrawing: "application/vnd.openxmlformats-officedocument.vmlDrawing"
      , volatileDependencies: "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml"
      , webSettings: "application/vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml"
      , wordAttachedToolbars: "application/vnd.ms-word.attachedToolbars"
      , wordprocessingComments: "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml"
      , wordprocessingTemplate: "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml"
      , workbook: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"
      , workbookRevisionHeader: "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml"
      , workbookRevisionLog: "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml"
      , workbookStyles: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"
      , workbookTemplate: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
      , workbookUserData: "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml"
      , worksheet: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"
      , worksheetComments: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml"
      , worksheetSortMap: "application/vnd.ms-excel.wsSortMap+xml"
      , xmlSignature: "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml"
    }, b.relationshipTypes = {
      alternativeFormatImport: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk"
      , calculationChain: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain"
      , cellMetadata: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata"
      , chart: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart"
      , chartColorStyle: "http://schemas.microsoft.com/office/2011/relationships/chartColorStyle"
      , chartDrawing: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartUserShapes"
      , chartsheet: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet"
      , chartStyle: "http://schemas.microsoft.com/office/2011/relationships/chartStyle"
      , commentAuthors: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/commentAuthors"
      , connections: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections"
      , coreFileProperties: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"
      , customFileProperties: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties"
      , customization: "http://schemas.microsoft.com/office/2006/relationships/keyMapCustomizations"
      , customProperty: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customProperty"
      , customXml: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml"
      , customXmlMappings: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/xmlMaps"
      , customXmlProperties: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps"
      , diagramColors: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramColors"
      , diagramData: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramData"
      , diagramLayoutDefinition: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramLayout"
      , diagramPersistLayout: "http://schemas.microsoft.com/office/2007/relationships/diagramDrawing"
      , diagramStyle: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramQuickStyle"
      , dialogsheet: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet"
      , digitalSignatureOrigin: "http://schemas.openxmlformats.org/package/2006/relationships/digital-signature/origin"
      , documentSettings: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings"
      , drawings: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
      , endnotes: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes"
      , excelAttachedToolbars: "http://schemas.microsoft.com/office/2006/relationships/attachedToolbars"
      , extendedFileProperties: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"
      , externalWorkbook: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink"
      , font: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font"
      , fontTable: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable"
      , footer: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer"
      , footnotes: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes"
      , glossaryDocument: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/glossaryDocument"
      , handoutMaster: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/handoutMaster"
      , header: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header"
      , image: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"
      , mainDocument: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
      , notesSlide: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide"
      , numberingDefinitions: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering"
      , pivotTable: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable"
      , pivotTableCacheDefinition: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheDefinition"
      , pivotTableCacheRecords: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/ pivotCacheRecords"
      , presentation: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
      , presentationProperties: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps"
      , queryTable: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/queryTable"
      , ribbonAndBackstageCustomizations: "http://schemas.microsoft.com/office/2007/relationships/ui/extensibility"
      , sharedStringTable: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
      , singleCellTable: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableSingleCells"
      , slide: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide"
      , slideComments: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
      , slideLayout: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout"
      , slideMaster: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster"
      , slideSyncData: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideUpdateInfo"
      , styles: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
      , tableDefinition: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/table"
      , tableStyles: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles"
      , theme: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
      , themeOverride: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/themeOverride"
      , thumbnail: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail"
      , userDefinedTags: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tags"
      , viewProperties: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps"
      , vmlDrawing: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing"
      , volatileDependencies: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/volatileDependencies"
      , webSettings: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings"
      , wordAttachedToolbars: "http://schemas.microsoft.com/office/2006/relationships/attachedToolbars"
      , wordprocessingComments: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
      , workbook: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
      , workbookRevisionHeader: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/revisionHeaders"
      , workbookRevisionLog: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/revisionLog"
      , workbookStyles: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
      , workbookUserData: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/usernames"
      , worksheet: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
      , worksheetComments: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
      , worksheetSortMap: "http://schemas.microsoft.com/office/2006/relationships/wsSortMap"
      , xmlSignature: "http://schemas.openxmlformats.org/package/2006/relationships/digital-signature/signature"
    }, b.aNs = new k("http://schemas.openxmlformats.org/drawingml/2006/main");
    var R = b.aNs;
    b.A = {
      accent1: new C(R, "accent1")
      , accent2: new C(R, "accent2")
      , accent3: new C(R, "accent3")
      , accent4: new C(R, "accent4")
      , accent5: new C(R, "accent5")
      , accent6: new C(R, "accent6")
      , ahLst: new C(R, "ahLst")
      , ahPolar: new C(R, "ahPolar")
      , ahXY: new C(R, "ahXY")
      , alpha: new C(R, "alpha")
      , alphaBiLevel: new C(R, "alphaBiLevel")
      , alphaCeiling: new C(R, "alphaCeiling")
      , alphaFloor: new C(R, "alphaFloor")
      , alphaInv: new C(R, "alphaInv")
      , alphaMod: new C(R, "alphaMod")
      , alphaModFix: new C(R, "alphaModFix")
      , alphaOff: new C(R, "alphaOff")
      , alphaOutset: new C(R, "alphaOutset")
      , alphaRepl: new C(R, "alphaRepl")
      , anchor: new C(R, "anchor")
      , arcTo: new C(R, "arcTo")
      , audioCd: new C(R, "audioCd")
      , audioFile: new C(R, "audioFile")
      , avLst: new C(R, "avLst")
      , backdrop: new C(R, "backdrop")
      , band1H: new C(R, "band1H")
      , band1V: new C(R, "band1V")
      , band2H: new C(R, "band2H")
      , band2V: new C(R, "band2V")
      , bevel: new C(R, "bevel")
      , bevelB: new C(R, "bevelB")
      , bevelT: new C(R, "bevelT")
      , bgClr: new C(R, "bgClr")
      , bgFillStyleLst: new C(R, "bgFillStyleLst")
      , biLevel: new C(R, "biLevel")
      , bldChart: new C(R, "bldChart")
      , bldDgm: new C(R, "bldDgm")
      , blend: new C(R, "blend")
      , blip: new C(R, "blip")
      , blipFill: new C(R, "blipFill")
      , blue: new C(R, "blue")
      , blueMod: new C(R, "blueMod")
      , blueOff: new C(R, "blueOff")
      , blur: new C(R, "blur")
      , bodyPr: new C(R, "bodyPr")
      , bottom: new C(R, "bottom")
      , br: new C(R, "br")
      , buAutoNum: new C(R, "buAutoNum")
      , buBlip: new C(R, "buBlip")
      , buChar: new C(R, "buChar")
      , buClr: new C(R, "buClr")
      , buClrTx: new C(R, "buClrTx")
      , buFont: new C(R, "buFont")
      , buFontTx: new C(R, "buFontTx")
      , buNone: new C(R, "buNone")
      , buSzPct: new C(R, "buSzPct")
      , buSzPts: new C(R, "buSzPts")
      , buSzTx: new C(R, "buSzTx")
      , camera: new C(R, "camera")
      , cell3D: new C(R, "cell3D")
      , chart: new C(R, "chart")
      , chExt: new C(R, "chExt")
      , chOff: new C(R, "chOff")
      , close: new C(R, "close")
      , clrChange: new C(R, "clrChange")
      , clrFrom: new C(R, "clrFrom")
      , clrMap: new C(R, "clrMap")
      , clrRepl: new C(R, "clrRepl")
      , clrScheme: new C(R, "clrScheme")
      , clrTo: new C(R, "clrTo")
      , cNvCxnSpPr: new C(R, "cNvCxnSpPr")
      , cNvGraphicFramePr: new C(R, "cNvGraphicFramePr")
      , cNvGrpSpPr: new C(R, "cNvGrpSpPr")
      , cNvPicPr: new C(R, "cNvPicPr")
      , cNvPr: new C(R, "cNvPr")
      , cNvSpPr: new C(R, "cNvSpPr")
      , comp: new C(R, "comp")
      , cont: new C(R, "cont")
      , contourClr: new C(R, "contourClr")
      , cs: new C(R, "cs")
      , cubicBezTo: new C(R, "cubicBezTo")
      , custClr: new C(R, "custClr")
      , custClrLst: new C(R, "custClrLst")
      , custDash: new C(R, "custDash")
      , custGeom: new C(R, "custGeom")
      , cxn: new C(R, "cxn")
      , cxnLst: new C(R, "cxnLst")
      , cxnSp: new C(R, "cxnSp")
      , cxnSpLocks: new C(R, "cxnSpLocks")
      , defPPr: new C(R, "defPPr")
      , defRPr: new C(R, "defRPr")
      , dgm: new C(R, "dgm")
      , dk1: new C(R, "dk1")
      , dk2: new C(R, "dk2")
      , ds: new C(R, "ds")
      , duotone: new C(R, "duotone")
      , ea: new C(R, "ea")
      , effect: new C(R, "effect")
      , effectDag: new C(R, "effectDag")
      , effectLst: new C(R, "effectLst")
      , effectRef: new C(R, "effectRef")
      , effectStyle: new C(R, "effectStyle")
      , effectStyleLst: new C(R, "effectStyleLst")
      , end: new C(R, "end")
      , endCxn: new C(R, "endCxn")
      , endParaRPr: new C(R, "endParaRPr")
      , ext: new C(R, "ext")
      , extLst: new C(R, "extLst")
      , extraClrScheme: new C(R, "extraClrScheme")
      , extraClrSchemeLst: new C(R, "extraClrSchemeLst")
      , extrusionClr: new C(R, "extrusionClr")
      , fgClr: new C(R, "fgClr")
      , fill: new C(R, "fill")
      , fillOverlay: new C(R, "fillOverlay")
      , fillRect: new C(R, "fillRect")
      , fillRef: new C(R, "fillRef")
      , fillStyleLst: new C(R, "fillStyleLst")
      , fillToRect: new C(R, "fillToRect")
      , firstCol: new C(R, "firstCol")
      , firstRow: new C(R, "firstRow")
      , flatTx: new C(R, "flatTx")
      , fld: new C(R, "fld")
      , fmtScheme: new C(R, "fmtScheme")
      , folHlink: new C(R, "folHlink")
      , font: new C(R, "font")
      , fontRef: new C(R, "fontRef")
      , fontScheme: new C(R, "fontScheme")
      , gamma: new C(R, "gamma")
      , gd: new C(R, "gd")
      , gdLst: new C(R, "gdLst")
      , glow: new C(R, "glow")
      , gradFill: new C(R, "gradFill")
      , graphic: new C(R, "graphic")
      , graphicData: new C(R, "graphicData")
      , graphicFrame: new C(R, "graphicFrame")
      , graphicFrameLocks: new C(R, "graphicFrameLocks")
      , gray: new C(R, "gray")
      , grayscl: new C(R, "grayscl")
      , green: new C(R, "green")
      , greenMod: new C(R, "greenMod")
      , greenOff: new C(R, "greenOff")
      , gridCol: new C(R, "gridCol")
      , grpFill: new C(R, "grpFill")
      , grpSp: new C(R, "grpSp")
      , grpSpLocks: new C(R, "grpSpLocks")
      , grpSpPr: new C(R, "grpSpPr")
      , gs: new C(R, "gs")
      , gsLst: new C(R, "gsLst")
      , headEnd: new C(R, "headEnd")
      , highlight: new C(R, "highlight")
      , hlink: new C(R, "hlink")
      , hlinkClick: new C(R, "hlinkClick")
      , hlinkHover: new C(R, "hlinkHover")
      , hlinkMouseOver: new C(R, "hlinkMouseOver")
      , hsl: new C(R, "hsl")
      , hslClr: new C(R, "hslClr")
      , hue: new C(R, "hue")
      , hueMod: new C(R, "hueMod")
      , hueOff: new C(R, "hueOff")
      , innerShdw: new C(R, "innerShdw")
      , insideH: new C(R, "insideH")
      , insideV: new C(R, "insideV")
      , inv: new C(R, "inv")
      , invGamma: new C(R, "invGamma")
      , lastCol: new C(R, "lastCol")
      , lastRow: new C(R, "lastRow")
      , latin: new C(R, "latin")
      , left: new C(R, "left")
      , lightRig: new C(R, "lightRig")
      , lin: new C(R, "lin")
      , ln: new C(R, "ln")
      , lnB: new C(R, "lnB")
      , lnBlToTr: new C(R, "lnBlToTr")
      , lnDef: new C(R, "lnDef")
      , lnL: new C(R, "lnL")
      , lnR: new C(R, "lnR")
      , lnRef: new C(R, "lnRef")
      , lnSpc: new C(R, "lnSpc")
      , lnStyleLst: new C(R, "lnStyleLst")
      , lnT: new C(R, "lnT")
      , lnTlToBr: new C(R, "lnTlToBr")
      , lnTo: new C(R, "lnTo")
      , lstStyle: new C(R, "lstStyle")
      , lt1: new C(R, "lt1")
      , lt2: new C(R, "lt2")
      , lum: new C(R, "lum")
      , lumMod: new C(R, "lumMod")
      , lumOff: new C(R, "lumOff")
      , lvl1pPr: new C(R, "lvl1pPr")
      , lvl2pPr: new C(R, "lvl2pPr")
      , lvl3pPr: new C(R, "lvl3pPr")
      , lvl4pPr: new C(R, "lvl4pPr")
      , lvl5pPr: new C(R, "lvl5pPr")
      , lvl6pPr: new C(R, "lvl6pPr")
      , lvl7pPr: new C(R, "lvl7pPr")
      , lvl8pPr: new C(R, "lvl8pPr")
      , lvl9pPr: new C(R, "lvl9pPr")
      , majorFont: new C(R, "majorFont")
      , masterClrMapping: new C(R, "masterClrMapping")
      , minorFont: new C(R, "minorFont")
      , miter: new C(R, "miter")
      , moveTo: new C(R, "moveTo")
      , neCell: new C(R, "neCell")
      , noAutofit: new C(R, "noAutofit")
      , noFill: new C(R, "noFill")
      , norm: new C(R, "norm")
      , normAutofit: new C(R, "normAutofit")
      , nvCxnSpPr: new C(R, "nvCxnSpPr")
      , nvGraphicFramePr: new C(R, "nvGraphicFramePr")
      , nvGrpSpPr: new C(R, "nvGrpSpPr")
      , nvPicPr: new C(R, "nvPicPr")
      , nvSpPr: new C(R, "nvSpPr")
      , nwCell: new C(R, "nwCell")
      , objectDefaults: new C(R, "objectDefaults")
      , off: new C(R, "off")
      , outerShdw: new C(R, "outerShdw")
      , overrideClrMapping: new C(R, "overrideClrMapping")
      , p: new C(R, "p")
      , path: new C(R, "path")
      , pathLst: new C(R, "pathLst")
      , pattFill: new C(R, "pattFill")
      , pic: new C(R, "pic")
      , picLocks: new C(R, "picLocks")
      , pos: new C(R, "pos")
      , pPr: new C(R, "pPr")
      , prstClr: new C(R, "prstClr")
      , prstDash: new C(R, "prstDash")
      , prstGeom: new C(R, "prstGeom")
      , prstShdw: new C(R, "prstShdw")
      , prstTxWarp: new C(R, "prstTxWarp")
      , pt: new C(R, "pt")
      , quadBezTo: new C(R, "quadBezTo")
      , quickTimeFile: new C(R, "quickTimeFile")
      , r: new C(R, "r")
      , rect: new C(R, "rect")
      , red: new C(R, "red")
      , redMod: new C(R, "redMod")
      , redOff: new C(R, "redOff")
      , reflection: new C(R, "reflection")
      , relIds: new C(R, "relIds")
      , relOff: new C(R, "relOff")
      , right: new C(R, "right")
      , rot: new C(R, "rot")
      , round: new C(R, "round")
      , rPr: new C(R, "rPr")
      , sat: new C(R, "sat")
      , satMod: new C(R, "satMod")
      , satOff: new C(R, "satOff")
      , scene3d: new C(R, "scene3d")
      , schemeClr: new C(R, "schemeClr")
      , scrgbClr: new C(R, "scrgbClr")
      , seCell: new C(R, "seCell")
      , shade: new C(R, "shade")
      , snd: new C(R, "snd")
      , softEdge: new C(R, "softEdge")
      , solidFill: new C(R, "solidFill")
      , sp: new C(R, "sp")
      , sp3d: new C(R, "sp3d")
      , spAutoFit: new C(R, "spAutoFit")
      , spcAft: new C(R, "spcAft")
      , spcBef: new C(R, "spcBef")
      , spcPct: new C(R, "spcPct")
      , spcPts: new C(R, "spcPts")
      , spDef: new C(R, "spDef")
      , spLocks: new C(R, "spLocks")
      , spPr: new C(R, "spPr")
      , srcRect: new C(R, "srcRect")
      , srgbClr: new C(R, "srgbClr")
      , st: new C(R, "st")
      , stCxn: new C(R, "stCxn")
      , stretch: new C(R, "stretch")
      , style: new C(R, "style")
      , swCell: new C(R, "swCell")
      , sx: new C(R, "sx")
      , sy: new C(R, "sy")
      , sym: new C(R, "sym")
      , sysClr: new C(R, "sysClr")
      , t: new C(R, "t")
      , tab: new C(R, "tab")
      , tableStyle: new C(R, "tableStyle")
      , tableStyleId: new C(R, "tableStyleId")
      , tabLst: new C(R, "tabLst")
      , tailEnd: new C(R, "tailEnd")
      , tbl: new C(R, "tbl")
      , tblBg: new C(R, "tblBg")
      , tblGrid: new C(R, "tblGrid")
      , tblPr: new C(R, "tblPr")
      , tblStyle: new C(R, "tblStyle")
      , tblStyleLst: new C(R, "tblStyleLst")
      , tc: new C(R, "tc")
      , tcBdr: new C(R, "tcBdr")
      , tcPr: new C(R, "tcPr")
      , tcStyle: new C(R, "tcStyle")
      , tcTxStyle: new C(R, "tcTxStyle")
      , theme: new C(R, "theme")
      , themeElements: new C(R, "themeElements")
      , themeOverride: new C(R, "themeOverride")
      , tile: new C(R, "tile")
      , tileRect: new C(R, "tileRect")
      , tint: new C(R, "tint")
      , top: new C(R, "top")
      , tr: new C(R, "tr")
      , txBody: new C(R, "txBody")
      , txDef: new C(R, "txDef")
      , txSp: new C(R, "txSp")
      , uFill: new C(R, "uFill")
      , uFillTx: new C(R, "uFillTx")
      , uLn: new C(R, "uLn")
      , uLnTx: new C(R, "uLnTx")
      , up: new C(R, "up")
      , useSpRect: new C(R, "useSpRect")
      , videoFile: new C(R, "videoFile")
      , wavAudioFile: new C(R, "wavAudioFile")
      , wholeTbl: new C(R, "wholeTbl")
      , xfrm: new C(R, "xfrm")
    };
    b.A;
    b.a14Ns = new k("http://schemas.microsoft.com/office/drawing/2010/main");
    var I = b.a14Ns;
    b.A14 = {
      artisticChalkSketch: new C(I, "artisticChalkSketch")
      , artisticGlass: new C(I, "artisticGlass")
      , artisticGlowEdges: new C(I, "artisticGlowEdges")
      , artisticLightScreen: new C(I, "artisticLightScreen")
      , artisticPlasticWrap: new C(I, "artisticPlasticWrap")
      , artisticTexturizer: new C(I, "artisticTexturizer")
      , backgroundMark: new C(I, "backgroundMark")
      , backgroundRemoval: new C(I, "backgroundRemoval")
      , brightnessContrast: new C(I, "brightnessContrast")
      , cameraTool: new C(I, "cameraTool")
      , colorTemperature: new C(I, "colorTemperature")
      , compatExt: new C(I, "compatExt")
      , cpLocks: new C(I, "cpLocks")
      , extLst: new C(I, "extLst")
      , foregroundMark: new C(I, "foregroundMark")
      , hiddenEffects: new C(I, "hiddenEffects")
      , hiddenFill: new C(I, "hiddenFill")
      , hiddenLine: new C(I, "hiddenLine")
      , hiddenScene3d: new C(I, "hiddenScene3d")
      , hiddenSp3d: new C(I, "hiddenSp3d")
      , imgEffect: new C(I, "imgEffect")
      , imgLayer: new C(I, "imgLayer")
      , imgProps: new C(I, "imgProps")
      , legacySpreadsheetColorIndex: new C(I, "legacySpreadsheetColorIndex")
      , m: new C(I, "m")
      , saturation: new C(I, "saturation")
      , shadowObscured: new C(I, "shadowObscured")
      , sharpenSoften: new C(I, "sharpenSoften")
      , useLocalDpi: new C(I, "useLocalDpi")
    };
    b.A14;
    b.cNs = new k("http://schemas.openxmlformats.org/drawingml/2006/chart");
    var N = b.cNs;
    b.C = {
      applyToEnd: new C(N, "applyToEnd")
      , applyToFront: new C(N, "applyToFront")
      , applyToSides: new C(N, "applyToSides")
      , area3DChart: new C(N, "area3DChart")
      , areaChart: new C(N, "areaChart")
      , auto: new C(N, "auto")
      , autoTitleDeleted: new C(N, "autoTitleDeleted")
      , autoUpdate: new C(N, "autoUpdate")
      , axId: new C(N, "axId")
      , axPos: new C(N, "axPos")
      , backWall: new C(N, "backWall")
      , backward: new C(N, "backward")
      , bandFmt: new C(N, "bandFmt")
      , bandFmts: new C(N, "bandFmts")
      , bar3DChart: new C(N, "bar3DChart")
      , barChart: new C(N, "barChart")
      , barDir: new C(N, "barDir")
      , baseTimeUnit: new C(N, "baseTimeUnit")
      , bubble3D: new C(N, "bubble3D")
      , bubbleChart: new C(N, "bubbleChart")
      , bubbleScale: new C(N, "bubbleScale")
      , bubbleSize: new C(N, "bubbleSize")
      , builtInUnit: new C(N, "builtInUnit")
      , cat: new C(N, "cat")
      , catAx: new C(N, "catAx")
      , chart: new C(N, "chart")
      , chartObject: new C(N, "chartObject")
      , chartSpace: new C(N, "chartSpace")
      , clrMapOvr: new C(N, "clrMapOvr")
      , crossAx: new C(N, "crossAx")
      , crossBetween: new C(N, "crossBetween")
      , crosses: new C(N, "crosses")
      , crossesAt: new C(N, "crossesAt")
      , custSplit: new C(N, "custSplit")
      , custUnit: new C(N, "custUnit")
      , data: new C(N, "data")
      , date1904: new C(N, "date1904")
      , dateAx: new C(N, "dateAx")
      , "delete": new C(N, "delete")
      , depthPercent: new C(N, "depthPercent")
      , dispBlanksAs: new C(N, "dispBlanksAs")
      , dispEq: new C(N, "dispEq")
      , dispRSqr: new C(N, "dispRSqr")
      , dispUnits: new C(N, "dispUnits")
      , dispUnitsLbl: new C(N, "dispUnitsLbl")
      , dLbl: new C(N, "dLbl")
      , dLblPos: new C(N, "dLblPos")
      , dLbls: new C(N, "dLbls")
      , doughnutChart: new C(N, "doughnutChart")
      , downBars: new C(N, "downBars")
      , dPt: new C(N, "dPt")
      , dropLines: new C(N, "dropLines")
      , dTable: new C(N, "dTable")
      , errBars: new C(N, "errBars")
      , errBarType: new C(N, "errBarType")
      , errDir: new C(N, "errDir")
      , errValType: new C(N, "errValType")
      , explosion: new C(N, "explosion")
      , ext: new C(N, "ext")
      , externalData: new C(N, "externalData")
      , extLst: new C(N, "extLst")
      , f: new C(N, "f")
      , firstSliceAng: new C(N, "firstSliceAng")
      , floor: new C(N, "floor")
      , fmtId: new C(N, "fmtId")
      , formatCode: new C(N, "formatCode")
      , formatting: new C(N, "formatting")
      , forward: new C(N, "forward")
      , gapDepth: new C(N, "gapDepth")
      , gapWidth: new C(N, "gapWidth")
      , grouping: new C(N, "grouping")
      , h: new C(N, "h")
      , headerFooter: new C(N, "headerFooter")
      , hiLowLines: new C(N, "hiLowLines")
      , hMode: new C(N, "hMode")
      , holeSize: new C(N, "holeSize")
      , hPercent: new C(N, "hPercent")
      , idx: new C(N, "idx")
      , intercept: new C(N, "intercept")
      , invertIfNegative: new C(N, "invertIfNegative")
      , lang: new C(N, "lang")
      , layout: new C(N, "layout")
      , layoutTarget: new C(N, "layoutTarget")
      , lblAlgn: new C(N, "lblAlgn")
      , lblOffset: new C(N, "lblOffset")
      , leaderLines: new C(N, "leaderLines")
      , legend: new C(N, "legend")
      , legendEntry: new C(N, "legendEntry")
      , legendPos: new C(N, "legendPos")
      , line3DChart: new C(N, "line3DChart")
      , lineChart: new C(N, "lineChart")
      , logBase: new C(N, "logBase")
      , lvl: new C(N, "lvl")
      , majorGridlines: new C(N, "majorGridlines")
      , majorTickMark: new C(N, "majorTickMark")
      , majorTimeUnit: new C(N, "majorTimeUnit")
      , majorUnit: new C(N, "majorUnit")
      , manualLayout: new C(N, "manualLayout")
      , marker: new C(N, "marker")
      , max: new C(N, "max")
      , min: new C(N, "min")
      , minorGridlines: new C(N, "minorGridlines")
      , minorTickMark: new C(N, "minorTickMark")
      , minorTimeUnit: new C(N, "minorTimeUnit")
      , minorUnit: new C(N, "minorUnit")
      , minus: new C(N, "minus")
      , multiLvlStrCache: new C(N, "multiLvlStrCache")
      , multiLvlStrRef: new C(N, "multiLvlStrRef")
      , name: new C(N, "name")
      , noEndCap: new C(N, "noEndCap")
      , noMultiLvlLbl: new C(N, "noMultiLvlLbl")
      , numCache: new C(N, "numCache")
      , numFmt: new C(N, "numFmt")
      , numLit: new C(N, "numLit")
      , numRef: new C(N, "numRef")
      , oddFooter: new C(N, "oddFooter")
      , oddHeader: new C(N, "oddHeader")
      , ofPieChart: new C(N, "ofPieChart")
      , ofPieType: new C(N, "ofPieType")
      , order: new C(N, "order")
      , orientation: new C(N, "orientation")
      , overlap: new C(N, "overlap")
      , overlay: new C(N, "overlay")
      , pageMargins: new C(N, "pageMargins")
      , pageSetup: new C(N, "pageSetup")
      , period: new C(N, "period")
      , perspective: new C(N, "perspective")
      , pictureFormat: new C(N, "pictureFormat")
      , pictureOptions: new C(N, "pictureOptions")
      , pictureStackUnit: new C(N, "pictureStackUnit")
      , pie3DChart: new C(N, "pie3DChart")
      , pieChart: new C(N, "pieChart")
      , pivotFmt: new C(N, "pivotFmt")
      , pivotFmts: new C(N, "pivotFmts")
      , pivotSource: new C(N, "pivotSource")
      , plotArea: new C(N, "plotArea")
      , plotVisOnly: new C(N, "plotVisOnly")
      , plus: new C(N, "plus")
      , printSettings: new C(N, "printSettings")
      , protection: new C(N, "protection")
      , pt: new C(N, "pt")
      , ptCount: new C(N, "ptCount")
      , radarChart: new C(N, "radarChart")
      , radarStyle: new C(N, "radarStyle")
      , rAngAx: new C(N, "rAngAx")
      , rich: new C(N, "rich")
      , rotX: new C(N, "rotX")
      , rotY: new C(N, "rotY")
      , roundedCorners: new C(N, "roundedCorners")
      , scaling: new C(N, "scaling")
      , scatterChart: new C(N, "scatterChart")
      , scatterStyle: new C(N, "scatterStyle")
      , secondPiePt: new C(N, "secondPiePt")
      , secondPieSize: new C(N, "secondPieSize")
      , selection: new C(N, "selection")
      , separator: new C(N, "separator")
      , ser: new C(N, "ser")
      , serAx: new C(N, "serAx")
      , serLines: new C(N, "serLines")
      , shape: new C(N, "shape")
      , showBubbleSize: new C(N, "showBubbleSize")
      , showCatName: new C(N, "showCatName")
      , showDLblsOverMax: new C(N, "showDLblsOverMax")
      , showHorzBorder: new C(N, "showHorzBorder")
      , showKeys: new C(N, "showKeys")
      , showLeaderLines: new C(N, "showLeaderLines")
      , showLegendKey: new C(N, "showLegendKey")
      , showNegBubbles: new C(N, "showNegBubbles")
      , showOutline: new C(N, "showOutline")
      , showPercent: new C(N, "showPercent")
      , showSerName: new C(N, "showSerName")
      , showVal: new C(N, "showVal")
      , showVertBorder: new C(N, "showVertBorder")
      , sideWall: new C(N, "sideWall")
      , size: new C(N, "size")
      , sizeRepresents: new C(N, "sizeRepresents")
      , smooth: new C(N, "smooth")
      , splitPos: new C(N, "splitPos")
      , splitType: new C(N, "splitType")
      , spPr: new C(N, "spPr")
      , stockChart: new C(N, "stockChart")
      , strCache: new C(N, "strCache")
      , strLit: new C(N, "strLit")
      , strRef: new C(N, "strRef")
      , style: new C(N, "style")
      , surface3DChart: new C(N, "surface3DChart")
      , surfaceChart: new C(N, "surfaceChart")
      , symbol: new C(N, "symbol")
      , thickness: new C(N, "thickness")
      , tickLblPos: new C(N, "tickLblPos")
      , tickLblSkip: new C(N, "tickLblSkip")
      , tickMarkSkip: new C(N, "tickMarkSkip")
      , title: new C(N, "title")
      , trendline: new C(N, "trendline")
      , trendlineLbl: new C(N, "trendlineLbl")
      , trendlineType: new C(N, "trendlineType")
      , tx: new C(N, "tx")
      , txPr: new C(N, "txPr")
      , upBars: new C(N, "upBars")
      , upDownBars: new C(N, "upDownBars")
      , userInterface: new C(N, "userInterface")
      , userShapes: new C(N, "userShapes")
      , v: new C(N, "v")
      , val: new C(N, "val")
      , valAx: new C(N, "valAx")
      , varyColors: new C(N, "varyColors")
      , view3D: new C(N, "view3D")
      , w: new C(N, "w")
      , wireframe: new C(N, "wireframe")
      , wMode: new C(N, "wMode")
      , x: new C(N, "x")
      , xMode: new C(N, "xMode")
      , xVal: new C(N, "xVal")
      , y: new C(N, "y")
      , yMode: new C(N, "yMode")
      , yVal: new C(N, "yVal")
    };
    b.C;
    b.cdrNs = new k("http://schemas.openxmlformats.org/drawingml/2006/chartDrawing");
    var B = b.cdrNs;
    b.CDR = {
      absSizeAnchor: new C(B, "absSizeAnchor")
      , blipFill: new C(B, "blipFill")
      , cNvCxnSpPr: new C(B, "cNvCxnSpPr")
      , cNvGraphicFramePr: new C(B, "cNvGraphicFramePr")
      , cNvGrpSpPr: new C(B, "cNvGrpSpPr")
      , cNvPicPr: new C(B, "cNvPicPr")
      , cNvPr: new C(B, "cNvPr")
      , cNvSpPr: new C(B, "cNvSpPr")
      , cxnSp: new C(B, "cxnSp")
      , ext: new C(B, "ext")
      , from: new C(B, "from")
      , graphicFrame: new C(B, "graphicFrame")
      , grpSp: new C(B, "grpSp")
      , grpSpPr: new C(B, "grpSpPr")
      , nvCxnSpPr: new C(B, "nvCxnSpPr")
      , nvGraphicFramePr: new C(B, "nvGraphicFramePr")
      , nvGrpSpPr: new C(B, "nvGrpSpPr")
      , nvPicPr: new C(B, "nvPicPr")
      , nvSpPr: new C(B, "nvSpPr")
      , pic: new C(B, "pic")
      , relSizeAnchor: new C(B, "relSizeAnchor")
      , sp: new C(B, "sp")
      , spPr: new C(B, "spPr")
      , style: new C(B, "style")
      , to: new C(B, "to")
      , txBody: new C(B, "txBody")
      , x: new C(B, "x")
      , xfrm: new C(B, "xfrm")
      , y: new C(B, "y")
    };
    b.CDR;
    b.comNs = new k("http://schemas.openxmlformats.org/drawingml/2006/compatibility");
    var A = b.comNs;
    b.COM = {
      legacyDrawing: new C(A, "legacyDrawing")
    };
    b.COM;
    b.cpNs = new k("http://schemas.openxmlformats.org/package/2006/metadata/core-properties");
    var O = b.cpNs;
    b.CP = {
      category: new C(O, "category")
      , contentStatus: new C(O, "contentStatus")
      , contentType: new C(O, "contentType")
      , coreProperties: new C(O, "coreProperties")
      , keywords: new C(O, "keywords")
      , lastModifiedBy: new C(O, "lastModifiedBy")
      , lastPrinted: new C(O, "lastPrinted")
      , revision: new C(O, "revision")
    };
    b.CP;
    b.custproNs = new k("http://schemas.openxmlformats.org/officeDocument/2006/custom-properties");
    var M = b.custproNs;
    b.CUSTPRO = {
      Properties: new C(M, "Properties")
      , property: new C(M, "property")
    };
    b.CUSTPRO;
    b.dcNs = new k("http://purl.org/dc/elements/1.1/");
    var X = b.dcNs;
    b.DC = {
      creator: new C(X, "creator")
      , description: new C(X, "description")
      , subject: new C(X, "subject")
      , title: new C(X, "title")
    };
    b.DC;
    b.dctermsNs = new k("http://purl.org/dc/terms/");
    var E = b.dctermsNs;
    b.DCTERMS = {
      created: new C(E, "created")
      , modified: new C(E, "modified")
    };
    b.DCTERMS;
    b.dgmNs = new k("http://schemas.openxmlformats.org/drawingml/2006/diagram");
    var H = b.dgmNs;
    b.DGM = {
      adj: new C(H, "adj")
      , adjLst: new C(H, "adjLst")
      , alg: new C(H, "alg")
      , animLvl: new C(H, "animLvl")
      , animOne: new C(H, "animOne")
      , bg: new C(H, "bg")
      , bulletEnabled: new C(H, "bulletEnabled")
      , cat: new C(H, "cat")
      , catLst: new C(H, "catLst")
      , chMax: new C(H, "chMax")
      , choose: new C(H, "choose")
      , chPref: new C(H, "chPref")
      , clrData: new C(H, "clrData")
      , colorsDef: new C(H, "colorsDef")
      , constr: new C(H, "constr")
      , constrLst: new C(H, "constrLst")
      , cxn: new C(H, "cxn")
      , cxnLst: new C(H, "cxnLst")
      , dataModel: new C(H, "dataModel")
      , desc: new C(H, "desc")
      , dir: new C(H, "dir")
      , effectClrLst: new C(H, "effectClrLst")
      , _else: new C(H, "else")
      , extLst: new C(H, "extLst")
      , fillClrLst: new C(H, "fillClrLst")
      , forEach: new C(H, "forEach")
      , hierBranch: new C(H, "hierBranch")
      , _if: new C(H, "if")
      , layoutDef: new C(H, "layoutDef")
      , layoutNode: new C(H, "layoutNode")
      , linClrLst: new C(H, "linClrLst")
      , orgChart: new C(H, "orgChart")
      , param: new C(H, "param")
      , presLayoutVars: new C(H, "presLayoutVars")
      , presOf: new C(H, "presOf")
      , prSet: new C(H, "prSet")
      , pt: new C(H, "pt")
      , ptLst: new C(H, "ptLst")
      , relIds: new C(H, "relIds")
      , resizeHandles: new C(H, "resizeHandles")
      , rule: new C(H, "rule")
      , ruleLst: new C(H, "ruleLst")
      , sampData: new C(H, "sampData")
      , scene3d: new C(H, "scene3d")
      , shape: new C(H, "shape")
      , sp3d: new C(H, "sp3d")
      , spPr: new C(H, "spPr")
      , style: new C(H, "style")
      , styleData: new C(H, "styleData")
      , styleDef: new C(H, "styleDef")
      , styleLbl: new C(H, "styleLbl")
      , t: new C(H, "t")
      , title: new C(H, "title")
      , txEffectClrLst: new C(H, "txEffectClrLst")
      , txFillClrLst: new C(H, "txFillClrLst")
      , txLinClrLst: new C(H, "txLinClrLst")
      , txPr: new C(H, "txPr")
      , varLst: new C(H, "varLst")
      , whole: new C(H, "whole")
    };
    b.DGM;
    b.dgm14Ns = new k("http://schemas.microsoft.com/office/drawing/2010/diagram");
    var V = b.dgm14Ns;
    b.DGM14 = {
      cNvPr: new C(V, "cNvPr")
      , recolorImg: new C(V, "recolorImg")
    };
    b.DGM14;
    b.digsigNs = new k("http://schemas.microsoft.com/office/2006/digsig");
    var z = b.digsigNs;
    b.DIGSIG = {
      ApplicationVersion: new C(z, "ApplicationVersion")
      , ColorDepth: new C(z, "ColorDepth")
      , HorizontalResolution: new C(z, "HorizontalResolution")
      , ManifestHashAlgorithm: new C(z, "ManifestHashAlgorithm")
      , Monitors: new C(z, "Monitors")
      , OfficeVersion: new C(z, "OfficeVersion")
      , SetupID: new C(z, "SetupID")
      , SignatureComments: new C(z, "SignatureComments")
      , SignatureImage: new C(z, "SignatureImage")
      , SignatureInfoV1: new C(z, "SignatureInfoV1")
      , SignatureProviderDetails: new C(z, "SignatureProviderDetails")
      , SignatureProviderId: new C(z, "SignatureProviderId")
      , SignatureProviderUrl: new C(z, "SignatureProviderUrl")
      , SignatureText: new C(z, "SignatureText")
      , SignatureType: new C(z, "SignatureType")
      , VerticalResolution: new C(z, "VerticalResolution")
      , WindowsVersion: new C(z, "WindowsVersion")
    };
    b.DIGSIG;
    b.dsNs = new k("http://schemas.openxmlformats.org/officeDocument/2006/customXml");
    var W = b.dsNs;
    b.DS = {
      datastoreItem: new C(W, "datastoreItem")
      , itemID: new C(W, "itemID")
      , schemaRef: new C(W, "schemaRef")
      , schemaRefs: new C(W, "schemaRefs")
      , uri: new C(W, "uri")
    };
    b.DS;
    b.dspNs = new k("http://schemas.microsoft.com/office/drawing/2008/diagram");
    var G = b.dspNs;
    b.DSP = {
      dataModelExt: new C(G, "dataModelExt")
    };
    b.DSP;
    b.epNs = new k("http://schemas.openxmlformats.org/officeDocument/2006/extended-properties");
    var U = b.epNs;
    b.EP = {
      Application: new C(U, "Application")
      , AppVersion: new C(U, "AppVersion")
      , Characters: new C(U, "Characters")
      , CharactersWithSpaces: new C(U, "CharactersWithSpaces")
      , Company: new C(U, "Company")
      , DocSecurity: new C(U, "DocSecurity")
      , HeadingPairs: new C(U, "HeadingPairs")
      , HiddenSlides: new C(U, "HiddenSlides")
      , HLinks: new C(U, "HLinks")
      , HyperlinkBase: new C(U, "HyperlinkBase")
      , HyperlinksChanged: new C(U, "HyperlinksChanged")
      , Lines: new C(U, "Lines")
      , LinksUpToDate: new C(U, "LinksUpToDate")
      , Manager: new C(U, "Manager")
      , MMClips: new C(U, "MMClips")
      , Notes: new C(U, "Notes")
      , Pages: new C(U, "Pages")
      , Paragraphs: new C(U, "Paragraphs")
      , PresentationFormat: new C(U, "PresentationFormat")
      , Properties: new C(U, "Properties")
      , ScaleCrop: new C(U, "ScaleCrop")
      , SharedDoc: new C(U, "SharedDoc")
      , Slides: new C(U, "Slides")
      , Template: new C(U, "Template")
      , TitlesOfParts: new C(U, "TitlesOfParts")
      , TotalTime: new C(U, "TotalTime")
      , Words: new C(U, "Words")
    };
    b.EP;
    b.lcNs = new k("http://schemas.openxmlformats.org/drawingml/2006/lockedCanvas");
    var q = b.lcNs;
    b.LC = {
      lockedCanvas: new C(q, "lockedCanvas")
    };
    b.LC;
    b.mNs = new k("http://schemas.openxmlformats.org/officeDocument/2006/math");
    var j = b.mNs;
    b.M = {
      acc: new C(j, "acc")
      , accPr: new C(j, "accPr")
      , aln: new C(j, "aln")
      , alnAt: new C(j, "alnAt")
      , alnScr: new C(j, "alnScr")
      , argPr: new C(j, "argPr")
      , argSz: new C(j, "argSz")
      , bar: new C(j, "bar")
      , barPr: new C(j, "barPr")
      , baseJc: new C(j, "baseJc")
      , begChr: new C(j, "begChr")
      , borderBox: new C(j, "borderBox")
      , borderBoxPr: new C(j, "borderBoxPr")
      , box: new C(j, "box")
      , boxPr: new C(j, "boxPr")
      , brk: new C(j, "brk")
      , brkBin: new C(j, "brkBin")
      , brkBinSub: new C(j, "brkBinSub")
      , cGp: new C(j, "cGp")
      , cGpRule: new C(j, "cGpRule")
      , chr: new C(j, "chr")
      , count: new C(j, "count")
      , cSp: new C(j, "cSp")
      , ctrlPr: new C(j, "ctrlPr")
      , d: new C(j, "d")
      , defJc: new C(j, "defJc")
      , deg: new C(j, "deg")
      , degHide: new C(j, "degHide")
      , den: new C(j, "den")
      , diff: new C(j, "diff")
      , dispDef: new C(j, "dispDef")
      , dPr: new C(j, "dPr")
      , e: new C(j, "e")
      , endChr: new C(j, "endChr")
      , eqArr: new C(j, "eqArr")
      , eqArrPr: new C(j, "eqArrPr")
      , f: new C(j, "f")
      , fName: new C(j, "fName")
      , fPr: new C(j, "fPr")
      , func: new C(j, "func")
      , funcPr: new C(j, "funcPr")
      , groupChr: new C(j, "groupChr")
      , groupChrPr: new C(j, "groupChrPr")
      , grow: new C(j, "grow")
      , hideBot: new C(j, "hideBot")
      , hideLeft: new C(j, "hideLeft")
      , hideRight: new C(j, "hideRight")
      , hideTop: new C(j, "hideTop")
      , interSp: new C(j, "interSp")
      , intLim: new C(j, "intLim")
      , intraSp: new C(j, "intraSp")
      , jc: new C(j, "jc")
      , lim: new C(j, "lim")
      , limLoc: new C(j, "limLoc")
      , limLow: new C(j, "limLow")
      , limLowPr: new C(j, "limLowPr")
      , limUpp: new C(j, "limUpp")
      , limUppPr: new C(j, "limUppPr")
      , lit: new C(j, "lit")
      , lMargin: new C(j, "lMargin")
      , _m: new C(j, "m")
      , mathFont: new C(j, "mathFont")
      , mathPr: new C(j, "mathPr")
      , maxDist: new C(j, "maxDist")
      , mc: new C(j, "mc")
      , mcJc: new C(j, "mcJc")
      , mcPr: new C(j, "mcPr")
      , mcs: new C(j, "mcs")
      , mPr: new C(j, "mPr")
      , mr: new C(j, "mr")
      , nary: new C(j, "nary")
      , naryLim: new C(j, "naryLim")
      , naryPr: new C(j, "naryPr")
      , noBreak: new C(j, "noBreak")
      , nor: new C(j, "nor")
      , num: new C(j, "num")
      , objDist: new C(j, "objDist")
      , oMath: new C(j, "oMath")
      , oMathPara: new C(j, "oMathPara")
      , oMathParaPr: new C(j, "oMathParaPr")
      , opEmu: new C(j, "opEmu")
      , phant: new C(j, "phant")
      , phantPr: new C(j, "phantPr")
      , plcHide: new C(j, "plcHide")
      , pos: new C(j, "pos")
      , postSp: new C(j, "postSp")
      , preSp: new C(j, "preSp")
      , r: new C(j, "r")
      , rad: new C(j, "rad")
      , radPr: new C(j, "radPr")
      , rMargin: new C(j, "rMargin")
      , rPr: new C(j, "rPr")
      , rSp: new C(j, "rSp")
      , rSpRule: new C(j, "rSpRule")
      , scr: new C(j, "scr")
      , sepChr: new C(j, "sepChr")
      , show: new C(j, "show")
      , shp: new C(j, "shp")
      , smallFrac: new C(j, "smallFrac")
      , sPre: new C(j, "sPre")
      , sPrePr: new C(j, "sPrePr")
      , sSub: new C(j, "sSub")
      , sSubPr: new C(j, "sSubPr")
      , sSubSup: new C(j, "sSubSup")
      , sSubSupPr: new C(j, "sSubSupPr")
      , sSup: new C(j, "sSup")
      , sSupPr: new C(j, "sSupPr")
      , strikeBLTR: new C(j, "strikeBLTR")
      , strikeH: new C(j, "strikeH")
      , strikeTLBR: new C(j, "strikeTLBR")
      , strikeV: new C(j, "strikeV")
      , sty: new C(j, "sty")
      , sub: new C(j, "sub")
      , subHide: new C(j, "subHide")
      , sup: new C(j, "sup")
      , supHide: new C(j, "supHide")
      , t: new C(j, "t")
      , transp: new C(j, "transp")
      , type: new C(j, "type")
      , val: new C(j, "val")
      , vertJc: new C(j, "vertJc")
      , wrapIndent: new C(j, "wrapIndent")
      , wrapRight: new C(j, "wrapRight")
      , zeroAsc: new C(j, "zeroAsc")
      , zeroDesc: new C(j, "zeroDesc")
      , zeroWid: new C(j, "zeroWid")
    };
    b.M;
    b.mcNs = new k("http://schemas.openxmlformats.org/markup-compatibility/2006");
    var _ = b.mcNs;
    b.MC = {
      AlternateContent: new C(_, "AlternateContent")
      , Choice: new C(_, "Choice")
      , Fallback: new C(_, "Fallback")
      , Ignorable: new C(_, "Ignorable")
      , PreserveAttributes: new C(_, "PreserveAttributes")
    };
    b.MC;
    b.mdssiNs = new k("http://schemas.openxmlformats.org/package/2006/digital-signature");
    var K = b.mdssiNs;
    b.MDSSI = {
      Format: new C(K, "Format")
      , RelationshipReference: new C(K, "RelationshipReference")
      , SignatureTime: new C(K, "SignatureTime")
      , Value: new C(K, "Value")
    };
    b.MDSSI;
    b.mpNs = new k("http://schemas.microsoft.com/office/mac/powerpoint/2008/main");
    var J = b.mpNs;
    b.MP = {
      cube: new C(J, "cube")
      , flip: new C(J, "flip")
      , transition: new C(J, "transition")
    };
    b.MP;
    b.mvNs = new k("urn:schemas-microsoft-com:mac:vml");
    var Y = b.mvNs;
    b.MV = {
      blur: new C(Y, "blur")
      , complextextbox: new C(Y, "complextextbox")
    };
    b.MV;
    b.NoNamespace = {
      a: new C("a")
      , accent1: new C("accent1")
      , accent2: new C("accent2")
      , accent3: new C("accent3")
      , accent4: new C("accent4")
      , accent5: new C("accent5")
      , accent6: new C("accent6")
      , action: new C("action")
      , activeCell: new C("activeCell")
      , activeCol: new C("activeCol")
      , activePane: new C("activePane")
      , activeRow: new C("activeRow")
      , advise: new C("advise")
      , algn: new C("algn")
      , Algorithm: new C("Algorithm")
      , alignWithMargins: new C("alignWithMargins")
      , allowcomments: new C("allowcomments")
      , allowOverlap: new C("allowOverlap")
      , allUniqueName: new C("allUniqueName")
      , alt: new C("alt")
      , alwaysShow: new C("alwaysShow")
      , amount: new C("amount")
      , amt: new C("amt")
      , anchor: new C("anchor")
      , anchorCtr: new C("anchorCtr")
      , ang: new C("ang")
      , animBg: new C("animBg")
      , annotation: new C("annotation")
      , applyAlignment: new C("applyAlignment")
      , applyAlignmentFormats: new C("applyAlignmentFormats")
      , applyBorder: new C("applyBorder")
      , applyBorderFormats: new C("applyBorderFormats")
      , applyFill: new C("applyFill")
      , applyFont: new C("applyFont")
      , applyFontFormats: new C("applyFontFormats")
      , applyNumberFormat: new C("applyNumberFormat")
      , applyNumberFormats: new C("applyNumberFormats")
      , applyPatternFormats: new C("applyPatternFormats")
      , applyProtection: new C("applyProtection")
      , applyWidthHeightFormats: new C("applyWidthHeightFormats")
      , arcsize: new C("arcsize")
      , arg: new C("arg")
      , aspectratio: new C("aspectratio")
      , assign: new C("assign")
      , attribute: new C("attribute")
      , author: new C("author")
      , authorId: new C("authorId")
      , auto: new C("auto")
      , autoEnd: new C("autoEnd")
      , autoFormatId: new C("autoFormatId")
      , autoLine: new C("autoLine")
      , autoStart: new C("autoStart")
      , axis: new C("axis")
      , b: new C("b")
      , backdepth: new C("backdepth")
      , bandRow: new C("bandRow")
      , _base: new C("base")
      , baseField: new C("baseField")
      , baseItem: new C("baseItem")
      , baseline: new C("baseline")
      , baseType: new C("baseType")
      , behindDoc: new C("behindDoc")
      , bestFit: new C("bestFit")
      , bg1: new C("bg1")
      , bg2: new C("bg2")
      , bIns: new C("bIns")
      , bld: new C("bld")
      , bldStep: new C("bldStep")
      , blend: new C("blend")
      , blurRad: new C("blurRad")
      , bmkName: new C("bmkName")
      , borderId: new C("borderId")
      , bottom: new C("bottom")
      , bright: new C("bright")
      , brightness: new C("brightness")
      , builtinId: new C("builtinId")
      , bwMode: new C("bwMode")
      , by: new C("by")
      , c: new C("c")
      , cacheId: new C("cacheId")
      , cacheIndex: new C("cacheIndex")
      , calcmode: new C("calcmode")
      , cap: new C("cap")
      , caption: new C("caption")
      , categoryIdx: new C("categoryIdx")
      , cell: new C("cell")
      , cellColor: new C("cellColor")
      , cellRange: new C("cellRange")
      , _char: new C("char")
      , charset: new C("charset")
      , chart: new C("chart")
      , clearComments: new C("clearComments")
      , clearFormats: new C("clearFormats")
      , click: new C("click")
      , clientInsertedTime: new C("clientInsertedTime")
      , clrIdx: new C("clrIdx")
      , clrSpc: new C("clrSpc")
      , cmd: new C("cmd")
      , cmpd: new C("cmpd")
      , codeName: new C("codeName")
      , coerce: new C("coerce")
      , colId: new C("colId")
      , color: new C("color")
      , colors: new C("colors")
      , colorTemp: new C("colorTemp")
      , colPageCount: new C("colPageCount")
      , cols: new C("cols")
      , comma: new C("comma")
      , command: new C("command")
      , commandType: new C("commandType")
      , comment: new C("comment")
      , compatLnSpc: new C("compatLnSpc")
      , concurrent: new C("concurrent")
      , connection: new C("connection")
      , connectionId: new C("connectionId")
      , connectloc: new C("connectloc")
      , consecutive: new C("consecutive")
      , constrainbounds: new C("constrainbounds")
      , containsInteger: new C("containsInteger")
      , containsNumber: new C("containsNumber")
      , containsSemiMixedTypes: new C("containsSemiMixedTypes")
      , containsString: new C("containsString")
      , contrast: new C("contrast")
      , control1: new C("control1")
      , control2: new C("control2")
      , coordorigin: new C("coordorigin")
      , coordsize: new C("coordsize")
      , copy: new C("copy")
      , count: new C("count")
      , createdVersion: new C("createdVersion")
      , cryptAlgorithmClass: new C("cryptAlgorithmClass")
      , cryptAlgorithmSid: new C("cryptAlgorithmSid")
      , cryptAlgorithmType: new C("cryptAlgorithmType")
      , cryptProviderType: new C("cryptProviderType")
      , csCatId: new C("csCatId")
      , cstate: new C("cstate")
      , csTypeId: new C("csTypeId")
      , culture: new C("culture")
      , current: new C("current")
      , customFormat: new C("customFormat")
      , customList: new C("customList")
      , customWidth: new C("customWidth")
      , cx: new C("cx")
      , cy: new C("cy")
      , d: new C("d")
      , data: new C("data")
      , dataCaption: new C("dataCaption")
      , dataDxfId: new C("dataDxfId")
      , dataField: new C("dataField")
      , dateTime: new C("dateTime")
      , dateTimeGrouping: new C("dateTimeGrouping")
      , dde: new C("dde")
      , ddeService: new C("ddeService")
      , ddeTopic: new C("ddeTopic")
      , def: new C("def")
      , defaultMemberUniqueName: new C("defaultMemberUniqueName")
      , defaultPivotStyle: new C("defaultPivotStyle")
      , defaultRowHeight: new C("defaultRowHeight")
      , defaultSize: new C("defaultSize")
      , defaultTableStyle: new C("defaultTableStyle")
      , defStyle: new C("defStyle")
      , defTabSz: new C("defTabSz")
      , degree: new C("degree")
      , delay: new C("delay")
      , descending: new C("descending")
      , descr: new C("descr")
      , destId: new C("destId")
      , destination: new C("destination")
      , destinationFile: new C("destinationFile")
      , destOrd: new C("destOrd")
      , dgmfontsize: new C("dgmfontsize")
      , dgmstyle: new C("dgmstyle")
      , diagonalDown: new C("diagonalDown")
      , diagonalUp: new C("diagonalUp")
      , dimension: new C("dimension")
      , dimensionUniqueName: new C("dimensionUniqueName")
      , dir: new C("dir")
      , dirty: new C("dirty")
      , display: new C("display")
      , displayFolder: new C("displayFolder")
      , displayName: new C("displayName")
      , dist: new C("dist")
      , distB: new C("distB")
      , distL: new C("distL")
      , distR: new C("distR")
      , distT: new C("distT")
      , divId: new C("divId")
      , dpi: new C("dpi")
      , dr: new C("dr")
      , DrawAspect: new C("DrawAspect")
      , dt: new C("dt")
      , dur: new C("dur")
      , dx: new C("dx")
      , dxfId: new C("dxfId")
      , dy: new C("dy")
      , dz: new C("dz")
      , eaLnBrk: new C("eaLnBrk")
      , eb: new C("eb")
      , edited: new C("edited")
      , editPage: new C("editPage")
      , end: new C("end")
      , endA: new C("endA")
      , endangle: new C("endangle")
      , endDate: new C("endDate")
      , endPos: new C("endPos")
      , endSnd: new C("endSnd")
      , eqn: new C("eqn")
      , evalOrder: new C("evalOrder")
      , evt: new C("evt")
      , exp: new C("exp")
      , extProperty: new C("extProperty")
      , f: new C("f")
      , fact: new C("fact")
      , field: new C("field")
      , fieldId: new C("fieldId")
      , fieldListSortAscending: new C("fieldListSortAscending")
      , fieldPosition: new C("fieldPosition")
      , fileType: new C("fileType")
      , fillcolor: new C("fillcolor")
      , filled: new C("filled")
      , fillId: new C("fillId")
      , filter: new C("filter")
      , filterVal: new C("filterVal")
      , first: new C("first")
      , firstDataCol: new C("firstDataCol")
      , firstDataRow: new C("firstDataRow")
      , firstHeaderRow: new C("firstHeaderRow")
      , firstRow: new C("firstRow")
      , fitshape: new C("fitshape")
      , fitToPage: new C("fitToPage")
      , fld: new C("fld")
      , flip: new C("flip")
      , fmla: new C("fmla")
      , fmtid: new C("fmtid")
      , folHlink: new C("folHlink")
      , followColorScheme: new C("followColorScheme")
      , fontId: new C("fontId")
      , footer: new C("footer")
      , _for: new C("for")
      , forceAA: new C("forceAA")
      , format: new C("format")
      , formatCode: new C("formatCode")
      , formula: new C("formula")
      , forName: new C("forName")
      , fov: new C("fov")
      , frame: new C("frame")
      , from: new C("from")
      , fromWordArt: new C("fromWordArt")
      , fullCalcOnLoad: new C("fullCalcOnLoad")
      , func: new C("func")
      , g: new C("g")
      , gdRefAng: new C("gdRefAng")
      , gdRefR: new C("gdRefR")
      , gdRefX: new C("gdRefX")
      , gdRefY: new C("gdRefY")
      , goal: new C("goal")
      , gradientshapeok: new C("gradientshapeok")
      , groupBy: new C("groupBy")
      , grpId: new C("grpId")
      , guid: new C("guid")
      , h: new C("h")
      , hangingPunct: new C("hangingPunct")
      , hashData: new C("hashData")
      , header: new C("header")
      , headerRowBorderDxfId: new C("headerRowBorderDxfId")
      , headerRowDxfId: new C("headerRowDxfId")
      , hidden: new C("hidden")
      , hier: new C("hier")
      , hierarchy: new C("hierarchy")
      , hierarchyUsage: new C("hierarchyUsage")
      , highlightClick: new C("highlightClick")
      , hlink: new C("hlink")
      , horizontal: new C("horizontal")
      , horizontalCentered: new C("horizontalCentered")
      , horizontalDpi: new C("horizontalDpi")
      , horzOverflow: new C("horzOverflow")
      , hR: new C("hR")
      , htmlFormat: new C("htmlFormat")
      , htmlTables: new C("htmlTables")
      , hue: new C("hue")
      , i: new C("i")
      , i1: new C("i1")
      , iconId: new C("iconId")
      , iconSet: new C("iconSet")
      , id: new C("id")
      , Id: new C("Id")
      , iddest: new C("iddest")
      , idref: new C("idref")
      , idsrc: new C("idsrc")
      , idx: new C("idx")
      , imgH: new C("imgH")
      , imgW: new C("imgW")
      , _in: new C("in")
      , includeNewItemsInFilter: new C("includeNewItemsInFilter")
      , indent: new C("indent")
      , index: new C("index")
      , indexed: new C("indexed")
      , initials: new C("initials")
      , insetpen: new C("insetpen")
      , invalEndChars: new C("invalEndChars")
      , invalidUrl: new C("invalidUrl")
      , invalStChars: new C("invalStChars")
      , isInverted: new C("isInverted")
      , issignatureline: new C("issignatureline")
      , item: new C("item")
      , itemPrintTitles: new C("itemPrintTitles")
      , joinstyle: new C("joinstyle")
      , justifyLastLine: new C("justifyLastLine")
      , key: new C("key")
      , keyAttribute: new C("keyAttribute")
      , l: new C("l")
      , lang: new C("lang")
      , lastClr: new C("lastClr")
      , lastIdx: new C("lastIdx")
      , lat: new C("lat")
      , latinLnBrk: new C("latinLnBrk")
      , layout: new C("layout")
      , layoutInCell: new C("layoutInCell")
      , left: new C("left")
      , len: new C("len")
      , length: new C("length")
      , level: new C("level")
      , lightharsh2: new C("lightharsh2")
      , lightlevel: new C("lightlevel")
      , lightlevel2: new C("lightlevel2")
      , lightposition: new C("lightposition")
      , lightposition2: new C("lightposition2")
      , lim: new C("lim")
      , link: new C("link")
      , lIns: new C("lIns")
      , loCatId: new C("loCatId")
      , locked: new C("locked")
      , lon: new C("lon")
      , loop: new C("loop")
      , loTypeId: new C("loTypeId")
      , lum: new C("lum")
      , lvl: new C("lvl")
      , macro: new C("macro")
      , man: new C("man")
      , manualBreakCount: new C("manualBreakCount")
      , mapId: new C("mapId")
      , marL: new C("marL")
      , max: new C("max")
      , maxAng: new C("maxAng")
      , maxR: new C("maxR")
      , maxRank: new C("maxRank")
      , maxSheetId: new C("maxSheetId")
      , maxValue: new C("maxValue")
      , maxX: new C("maxX")
      , maxY: new C("maxY")
      , mdx: new C("mdx")
      , measureGroup: new C("measureGroup")
      , memberName: new C("memberName")
      , merge: new C("merge")
      , meth: new C("meth")
      , min: new C("min")
      , minAng: new C("minAng")
      , minR: new C("minR")
      , minRefreshableVersion: new C("minRefreshableVersion")
      , minSupportedVersion: new C("minSupportedVersion")
      , minValue: new C("minValue")
      , minVer: new C("minVer")
      , minX: new C("minX")
      , minY: new C("minY")
      , modelId: new C("modelId")
      , moveWithCells: new C("moveWithCells")
      , n: new C("n")
      , name: new C("name")
      , _new: new C("new")
      , newLength: new C("newLength")
      , newName: new C("newName")
      , nextAc: new C("nextAc")
      , nextId: new C("nextId")
      , noChangeArrowheads: new C("noChangeArrowheads")
      , noChangeAspect: new C("noChangeAspect")
      , noChangeShapeType: new C("noChangeShapeType")
      , nodeType: new C("nodeType")
      , noEditPoints: new C("noEditPoints")
      , noGrp: new C("noGrp")
      , noRot: new C("noRot")
      , noUngrp: new C("noUngrp")
      , np: new C("np")
      , ns: new C("ns")
      , numCol: new C("numCol")
      , numFmtId: new C("numFmtId")
      , o: new C("o")
      , ObjectID: new C("ObjectID")
      , objects: new C("objects")
      , ObjectType: new C("ObjectType")
      , objId: new C("objId")
      , offset: new C("offset")
      , old: new C("old")
      , oldComment: new C("oldComment")
      , oldName: new C("oldName")
      , oleUpdate: new C("oleUpdate")
      , on: new C("on")
      , op: new C("op")
      , orient: new C("orient")
      , orientation: new C("orientation")
      , origin: new C("origin")
      , _out: new C("out")
      , outline: new C("outline")
      , outlineData: new C("outlineData")
      , p: new C("p")
      , pane: new C("pane")
      , panose: new C("panose")
      , paperSize: new C("paperSize")
      , par: new C("par")
      , parameterType: new C("parameterType")
      , parent: new C("parent")
      , password: new C("password")
      , pasteAll: new C("pasteAll")
      , pasteValues: new C("pasteValues")
      , path: new C("path")
      , pathEditMode: new C("pathEditMode")
      , patternType: new C("patternType")
      , phldr: new C("phldr")
      , pid: new C("pid")
      , pitchFamily: new C("pitchFamily")
      , pivot: new C("pivot")
      , points: new C("points")
      , pos: new C("pos")
      , position: new C("position")
      , post: new C("post")
      , preferPic: new C("preferPic")
      , preserve: new C("preserve")
      , pressure: new C("pressure")
      , previousCol: new C("previousCol")
      , previousRow: new C("previousRow")
      , pri: new C("pri")
      , priority: new C("priority")
      , progId: new C("progId")
      , ProgID: new C("ProgID")
      , provid: new C("provid")
      , prst: new C("prst")
      , prstMaterial: new C("prstMaterial")
      , ptsTypes: new C("ptsTypes")
      , ptType: new C("ptType")
      , qsCatId: new C("qsCatId")
      , qsTypeId: new C("qsTypeId")
      , r: new C("r")
      , rad: new C("rad")
      , readingOrder: new C("readingOrder")
      , recordCount: new C("recordCount")
      , _ref: new C("ref")
      , ref3D: new C("ref3D")
      , refersTo: new C("refersTo")
      , refreshedBy: new C("refreshedBy")
      , refreshedDate: new C("refreshedDate")
      , refreshedVersion: new C("refreshedVersion")
      , refreshOnLoad: new C("refreshOnLoad")
      , refType: new C("refType")
      , relativeFrom: new C("relativeFrom")
      , relativeHeight: new C("relativeHeight")
      , relId: new C("relId")
      , Requires: new C("Requires")
      , restart: new C("restart")
      , rev: new C("rev")
      , rgb: new C("rgb")
      , rId: new C("rId")
      , rig: new C("rig")
      , right: new C("right")
      , rIns: new C("rIns")
      , rot: new C("rot")
      , rotWithShape: new C("rotWithShape")
      , rowColShift: new C("rowColShift")
      , rowDrillCount: new C("rowDrillCount")
      , rowPageCount: new C("rowPageCount")
      , rows: new C("rows")
      , rtl: new C("rtl")
      , rtlCol: new C("rtlCol")
      , s: new C("s")
      , saltData: new C("saltData")
      , sat: new C("sat")
      , saveData: new C("saveData")
      , saveSubsetFonts: new C("saveSubsetFonts")
      , sb: new C("sb")
      , scaled: new C("scaled")
      , scaling: new C("scaling")
      , scenarios: new C("scenarios")
      , scope: new C("scope")
      , script: new C("script")
      , securityDescriptor: new C("securityDescriptor")
      , seek: new C("seek")
      , sendLocale: new C("sendLocale")
      , series: new C("series")
      , seriesIdx: new C("seriesIdx")
      , serverSldId: new C("serverSldId")
      , serverSldModifiedTime: new C("serverSldModifiedTime")
      , setDefinition: new C("setDefinition")
      , shapeId: new C("shapeId")
      , ShapeID: new C("ShapeID")
      , sheet: new C("sheet")
      , sheetId: new C("sheetId")
      , sheetPosition: new C("sheetPosition")
      , show: new C("show")
      , showAll: new C("showAll")
      , showCaptions: new C("showCaptions")
      , showColHeaders: new C("showColHeaders")
      , showColStripes: new C("showColStripes")
      , showColumnStripes: new C("showColumnStripes")
      , showErrorMessage: new C("showErrorMessage")
      , showFirstColumn: new C("showFirstColumn")
      , showHeader: new C("showHeader")
      , showInputMessage: new C("showInputMessage")
      , showLastColumn: new C("showLastColumn")
      , showRowHeaders: new C("showRowHeaders")
      , showRowStripes: new C("showRowStripes")
      , showValue: new C("showValue")
      , shrinkToFit: new C("shrinkToFit")
      , si: new C("si")
      , sId: new C("sId")
      , simplePos: new C("simplePos")
      , size: new C("size")
      , skewangle: new C("skewangle")
      , smoothness: new C("smoothness")
      , smtClean: new C("smtClean")
      , source: new C("source")
      , sourceFile: new C("sourceFile")
      , SourceId: new C("SourceId")
      , sourceLinked: new C("sourceLinked")
      , sourceSheetId: new C("sourceSheetId")
      , sourceType: new C("sourceType")
      , sp: new C("sp")
      , spans: new C("spans")
      , spcCol: new C("spcCol")
      , spcFirstLastPara: new C("spcFirstLastPara")
      , spid: new C("spid")
      , spidmax: new C("spidmax")
      , spinCount: new C("spinCount")
      , splitFirst: new C("splitFirst")
      , spokes: new C("spokes")
      , sqlType: new C("sqlType")
      , sqref: new C("sqref")
      , src: new C("src")
      , srcId: new C("srcId")
      , srcOrd: new C("srcOrd")
      , st: new C("st")
      , stA: new C("stA")
      , stAng: new C("stAng")
      , start: new C("start")
      , startangle: new C("startangle")
      , startDate: new C("startDate")
      , status: new C("status")
      , strike: new C("strike")
      , _string: new C("string")
      , strokecolor: new C("strokecolor")
      , stroked: new C("stroked")
      , strokeweight: new C("strokeweight")
      , style: new C("style")
      , styleId: new C("styleId")
      , styleName: new C("styleName")
      , subtotal: new C("subtotal")
      , summaryBelow: new C("summaryBelow")
      , swAng: new C("swAng")
      , sx: new C("sx")
      , sy: new C("sy")
      , sz: new C("sz")
      , t: new C("t")
      , tab: new C("tab")
      , tableBorderDxfId: new C("tableBorderDxfId")
      , tableColumnId: new C("tableColumnId")
      , Target: new C("Target")
      , textlink: new C("textlink")
      , textRotation: new C("textRotation")
      , theme: new C("theme")
      , thresh: new C("thresh")
      , thruBlk: new C("thruBlk")
      , time: new C("time")
      , tIns: new C("tIns")
      , tint: new C("tint")
      , tm: new C("tm")
      , to: new C("to")
      , tooltip: new C("tooltip")
      , top: new C("top")
      , topLabels: new C("topLabels")
      , topLeftCell: new C("topLeftCell")
      , totalsRowShown: new C("totalsRowShown")
      , track: new C("track")
      , trans: new C("trans")
      , transition: new C("transition")
      , trend: new C("trend")
      , twoDigitTextYear: new C("twoDigitTextYear")
      , tx: new C("tx")
      , tx1: new C("tx1")
      , tx2: new C("tx2")
      , txBox: new C("txBox")
      , txbxSeq: new C("txbxSeq")
      , txbxStory: new C("txbxStory")
      , ty: new C("ty")
      , type: new C("type")
      , Type: new C("Type")
      , typeface: new C("typeface")
      , u: new C("u")
      , ua: new C("ua")
      , uiExpand: new C("uiExpand")
      , unbalanced: new C("unbalanced")
      , uniqueCount: new C("uniqueCount")
      , uniqueId: new C("uniqueId")
      , uniqueName: new C("uniqueName")
      , uniqueParent: new C("uniqueParent")
      , updateAutomatic: new C("updateAutomatic")
      , updatedVersion: new C("updatedVersion")
      , uri: new C("uri")
      , URI: new C("URI")
      , url: new C("url")
      , useAutoFormatting: new C("useAutoFormatting")
      , useDef: new C("useDef")
      , user: new C("user")
      , userName: new C("userName")
      , v: new C("v")
      , val: new C("val")
      , value: new C("value")
      , valueType: new C("valueType")
      , varScale: new C("varScale")
      , vert: new C("vert")
      , vertical: new C("vertical")
      , verticalCentered: new C("verticalCentered")
      , verticalDpi: new C("verticalDpi")
      , vertOverflow: new C("vertOverflow")
      , viewpoint: new C("viewpoint")
      , viewpointorigin: new C("viewpointorigin")
      , w: new C("w")
      , weight: new C("weight")
      , width: new C("width")
      , workbookViewId: new C("workbookViewId")
      , wR: new C("wR")
      , wrap: new C("wrap")
      , wrapText: new C("wrapText")
      , x: new C("x")
      , x1: new C("x1")
      , x2: new C("x2")
      , xfId: new C("xfId")
      , xl97: new C("xl97")
      , xmlDataType: new C("xmlDataType")
      , xpath: new C("xpath")
      , xSplit: new C("xSplit")
      , y: new C("y")
      , y1: new C("y1")
      , y2: new C("y2")
      , year: new C("year")
      , yrange: new C("yrange")
      , ySplit: new C("ySplit")
      , z: new C("z")
    };
    b.NoNamespace;
    b.oNs = new k("urn:schemas-microsoft-com:office:office");
    var Z = b.oNs;
    b.O = {
      allowincell: new C(Z, "allowincell")
      , allowoverlap: new C(Z, "allowoverlap")
      , althref: new C(Z, "althref")
      , borderbottomcolor: new C(Z, "borderbottomcolor")
      , borderleftcolor: new C(Z, "borderleftcolor")
      , borderrightcolor: new C(Z, "borderrightcolor")
      , bordertopcolor: new C(Z, "bordertopcolor")
      , bottom: new C(Z, "bottom")
      , bullet: new C(Z, "bullet")
      , button: new C(Z, "button")
      , bwmode: new C(Z, "bwmode")
      , bwnormal: new C(Z, "bwnormal")
      , bwpure: new C(Z, "bwpure")
      , callout: new C(Z, "callout")
      , clip: new C(Z, "clip")
      , clippath: new C(Z, "clippath")
      , cliptowrap: new C(Z, "cliptowrap")
      , colormenu: new C(Z, "colormenu")
      , colormru: new C(Z, "colormru")
      , column: new C(Z, "column")
      , complex: new C(Z, "complex")
      , connectangles: new C(Z, "connectangles")
      , connectlocs: new C(Z, "connectlocs")
      , connectortype: new C(Z, "connectortype")
      , connecttype: new C(Z, "connecttype")
      , detectmouseclick: new C(Z, "detectmouseclick")
      , dgmlayout: new C(Z, "dgmlayout")
      , dgmlayoutmru: new C(Z, "dgmlayoutmru")
      , dgmnodekind: new C(Z, "dgmnodekind")
      , diagram: new C(Z, "diagram")
      , doubleclicknotify: new C(Z, "doubleclicknotify")
      , entry: new C(Z, "entry")
      , extrusion: new C(Z, "extrusion")
      , extrusionok: new C(Z, "extrusionok")
      , FieldCodes: new C(Z, "FieldCodes")
      , fill: new C(Z, "fill")
      , forcedash: new C(Z, "forcedash")
      , gfxdata: new C(Z, "gfxdata")
      , hr: new C(Z, "hr")
      , hralign: new C(Z, "hralign")
      , href: new C(Z, "href")
      , hrnoshade: new C(Z, "hrnoshade")
      , hrpct: new C(Z, "hrpct")
      , hrstd: new C(Z, "hrstd")
      , idmap: new C(Z, "idmap")
      , ink: new C(Z, "ink")
      , insetmode: new C(Z, "insetmode")
      , left: new C(Z, "left")
      , LinkType: new C(Z, "LinkType")
      , _lock: new C(Z, "lock")
      , LockedField: new C(Z, "LockedField")
      , master: new C(Z, "master")
      , ole: new C(Z, "ole")
      , oleicon: new C(Z, "oleicon")
      , OLEObject: new C(Z, "OLEObject")
      , oned: new C(Z, "oned")
      , opacity2: new C(Z, "opacity2")
      , preferrelative: new C(Z, "preferrelative")
      , proxy: new C(Z, "proxy")
      , r: new C(Z, "r")
      , regroupid: new C(Z, "regroupid")
      , regrouptable: new C(Z, "regrouptable")
      , rel: new C(Z, "rel")
      , relationtable: new C(Z, "relationtable")
      , relid: new C(Z, "relid")
      , right: new C(Z, "right")
      , rules: new C(Z, "rules")
      , shapedefaults: new C(Z, "shapedefaults")
      , shapelayout: new C(Z, "shapelayout")
      , signatureline: new C(Z, "signatureline")
      , singleclick: new C(Z, "singleclick")
      , skew: new C(Z, "skew")
      , spid: new C(Z, "spid")
      , spt: new C(Z, "spt")
      , suggestedsigner: new C(Z, "suggestedsigner")
      , suggestedsigner2: new C(Z, "suggestedsigner2")
      , suggestedsigneremail: new C(Z, "suggestedsigneremail")
      , tablelimits: new C(Z, "tablelimits")
      , tableproperties: new C(Z, "tableproperties")
      , targetscreensize: new C(Z, "targetscreensize")
      , title: new C(Z, "title")
      , top: new C(Z, "top")
      , userdrawn: new C(Z, "userdrawn")
      , userhidden: new C(Z, "userhidden")
      , v: new C(Z, "v")
    };
    b.O;
    b.pNs = new k("http://schemas.openxmlformats.org/presentationml/2006/main");
    var Q = b.pNs;
    b.P = {
      anim: new C(Q, "anim")
      , animClr: new C(Q, "animClr")
      , animEffect: new C(Q, "animEffect")
      , animMotion: new C(Q, "animMotion")
      , animRot: new C(Q, "animRot")
      , animScale: new C(Q, "animScale")
      , attrName: new C(Q, "attrName")
      , attrNameLst: new C(Q, "attrNameLst")
      , audio: new C(Q, "audio")
      , bg: new C(Q, "bg")
      , bgPr: new C(Q, "bgPr")
      , bgRef: new C(Q, "bgRef")
      , bldAsOne: new C(Q, "bldAsOne")
      , bldDgm: new C(Q, "bldDgm")
      , bldGraphic: new C(Q, "bldGraphic")
      , bldLst: new C(Q, "bldLst")
      , bldOleChart: new C(Q, "bldOleChart")
      , bldP: new C(Q, "bldP")
      , bldSub: new C(Q, "bldSub")
      , blinds: new C(Q, "blinds")
      , blipFill: new C(Q, "blipFill")
      , bodyStyle: new C(Q, "bodyStyle")
      , bold: new C(Q, "bold")
      , boldItalic: new C(Q, "boldItalic")
      , boolVal: new C(Q, "boolVal")
      , by: new C(Q, "by")
      , cBhvr: new C(Q, "cBhvr")
      , charRg: new C(Q, "charRg")
      , checker: new C(Q, "checker")
      , childTnLst: new C(Q, "childTnLst")
      , circle: new C(Q, "circle")
      , clrMap: new C(Q, "clrMap")
      , clrMapOvr: new C(Q, "clrMapOvr")
      , clrVal: new C(Q, "clrVal")
      , cm: new C(Q, "cm")
      , cmAuthor: new C(Q, "cmAuthor")
      , cmAuthorLst: new C(Q, "cmAuthorLst")
      , cmd: new C(Q, "cmd")
      , cMediaNode: new C(Q, "cMediaNode")
      , cmLst: new C(Q, "cmLst")
      , cNvCxnSpPr: new C(Q, "cNvCxnSpPr")
      , cNvGraphicFramePr: new C(Q, "cNvGraphicFramePr")
      , cNvGrpSpPr: new C(Q, "cNvGrpSpPr")
      , cNvPicPr: new C(Q, "cNvPicPr")
      , cNvPr: new C(Q, "cNvPr")
      , cNvSpPr: new C(Q, "cNvSpPr")
      , comb: new C(Q, "comb")
      , cond: new C(Q, "cond")
      , contentPart: new C(Q, "contentPart")
      , control: new C(Q, "control")
      , controls: new C(Q, "controls")
      , cover: new C(Q, "cover")
      , cSld: new C(Q, "cSld")
      , cSldViewPr: new C(Q, "cSldViewPr")
      , cTn: new C(Q, "cTn")
      , custData: new C(Q, "custData")
      , custDataLst: new C(Q, "custDataLst")
      , custShow: new C(Q, "custShow")
      , custShowLst: new C(Q, "custShowLst")
      , cut: new C(Q, "cut")
      , cViewPr: new C(Q, "cViewPr")
      , cxnSp: new C(Q, "cxnSp")
      , defaultTextStyle: new C(Q, "defaultTextStyle")
      , diamond: new C(Q, "diamond")
      , dissolve: new C(Q, "dissolve")
      , embed: new C(Q, "embed")
      , embeddedFont: new C(Q, "embeddedFont")
      , embeddedFontLst: new C(Q, "embeddedFontLst")
      , endCondLst: new C(Q, "endCondLst")
      , endSnd: new C(Q, "endSnd")
      , endSync: new C(Q, "endSync")
      , ext: new C(Q, "ext")
      , extLst: new C(Q, "extLst")
      , fade: new C(Q, "fade")
      , fltVal: new C(Q, "fltVal")
      , font: new C(Q, "font")
      , from: new C(Q, "from")
      , graphicEl: new C(Q, "graphicEl")
      , graphicFrame: new C(Q, "graphicFrame")
      , gridSpacing: new C(Q, "gridSpacing")
      , grpSp: new C(Q, "grpSp")
      , grpSpPr: new C(Q, "grpSpPr")
      , guide: new C(Q, "guide")
      , guideLst: new C(Q, "guideLst")
      , handoutMaster: new C(Q, "handoutMaster")
      , handoutMasterId: new C(Q, "handoutMasterId")
      , handoutMasterIdLst: new C(Q, "handoutMasterIdLst")
      , hf: new C(Q, "hf")
      , hsl: new C(Q, "hsl")
      , inkTgt: new C(Q, "inkTgt")
      , italic: new C(Q, "italic")
      , iterate: new C(Q, "iterate")
      , kinsoku: new C(Q, "kinsoku")
      , link: new C(Q, "link")
      , modifyVerifier: new C(Q, "modifyVerifier")
      , newsflash: new C(Q, "newsflash")
      , nextCondLst: new C(Q, "nextCondLst")
      , normalViewPr: new C(Q, "normalViewPr")
      , notes: new C(Q, "notes")
      , notesMaster: new C(Q, "notesMaster")
      , notesMasterId: new C(Q, "notesMasterId")
      , notesMasterIdLst: new C(Q, "notesMasterIdLst")
      , notesStyle: new C(Q, "notesStyle")
      , notesSz: new C(Q, "notesSz")
      , notesTextViewPr: new C(Q, "notesTextViewPr")
      , notesViewPr: new C(Q, "notesViewPr")
      , nvCxnSpPr: new C(Q, "nvCxnSpPr")
      , nvGraphicFramePr: new C(Q, "nvGraphicFramePr")
      , nvGrpSpPr: new C(Q, "nvGrpSpPr")
      , nvPicPr: new C(Q, "nvPicPr")
      , nvPr: new C(Q, "nvPr")
      , nvSpPr: new C(Q, "nvSpPr")
      , oleChartEl: new C(Q, "oleChartEl")
      , oleObj: new C(Q, "oleObj")
      , origin: new C(Q, "origin")
      , otherStyle: new C(Q, "otherStyle")
      , outlineViewPr: new C(Q, "outlineViewPr")
      , par: new C(Q, "par")
      , ph: new C(Q, "ph")
      , photoAlbum: new C(Q, "photoAlbum")
      , pic: new C(Q, "pic")
      , plus: new C(Q, "plus")
      , pos: new C(Q, "pos")
      , presentation: new C(Q, "presentation")
      , prevCondLst: new C(Q, "prevCondLst")
      , pRg: new C(Q, "pRg")
      , pull: new C(Q, "pull")
      , push: new C(Q, "push")
      , random: new C(Q, "random")
      , randomBar: new C(Q, "randomBar")
      , rCtr: new C(Q, "rCtr")
      , regular: new C(Q, "regular")
      , restoredLeft: new C(Q, "restoredLeft")
      , restoredTop: new C(Q, "restoredTop")
      , rgb: new C(Q, "rgb")
      , rtn: new C(Q, "rtn")
      , scale: new C(Q, "scale")
      , seq: new C(Q, "seq")
      , set: new C(Q, "set")
      , sld: new C(Q, "sld")
      , sldId: new C(Q, "sldId")
      , sldIdLst: new C(Q, "sldIdLst")
      , sldLayout: new C(Q, "sldLayout")
      , sldLayoutId: new C(Q, "sldLayoutId")
      , sldLayoutIdLst: new C(Q, "sldLayoutIdLst")
      , sldLst: new C(Q, "sldLst")
      , sldMaster: new C(Q, "sldMaster")
      , sldMasterId: new C(Q, "sldMasterId")
      , sldMasterIdLst: new C(Q, "sldMasterIdLst")
      , sldSyncPr: new C(Q, "sldSyncPr")
      , sldSz: new C(Q, "sldSz")
      , sldTgt: new C(Q, "sldTgt")
      , slideViewPr: new C(Q, "slideViewPr")
      , snd: new C(Q, "snd")
      , sndAc: new C(Q, "sndAc")
      , sndTgt: new C(Q, "sndTgt")
      , sorterViewPr: new C(Q, "sorterViewPr")
      , sp: new C(Q, "sp")
      , split: new C(Q, "split")
      , spPr: new C(Q, "spPr")
      , spTgt: new C(Q, "spTgt")
      , spTree: new C(Q, "spTree")
      , stCondLst: new C(Q, "stCondLst")
      , strips: new C(Q, "strips")
      , strVal: new C(Q, "strVal")
      , stSnd: new C(Q, "stSnd")
      , style: new C(Q, "style")
      , subSp: new C(Q, "subSp")
      , subTnLst: new C(Q, "subTnLst")
      , tag: new C(Q, "tag")
      , tagLst: new C(Q, "tagLst")
      , tags: new C(Q, "tags")
      , tav: new C(Q, "tav")
      , tavLst: new C(Q, "tavLst")
      , text: new C(Q, "text")
      , tgtEl: new C(Q, "tgtEl")
      , timing: new C(Q, "timing")
      , titleStyle: new C(Q, "titleStyle")
      , tmAbs: new C(Q, "tmAbs")
      , tmPct: new C(Q, "tmPct")
      , tmpl: new C(Q, "tmpl")
      , tmplLst: new C(Q, "tmplLst")
      , tn: new C(Q, "tn")
      , tnLst: new C(Q, "tnLst")
      , to: new C(Q, "to")
      , transition: new C(Q, "transition")
      , txBody: new C(Q, "txBody")
      , txEl: new C(Q, "txEl")
      , txStyles: new C(Q, "txStyles")
      , val: new C(Q, "val")
      , video: new C(Q, "video")
      , viewPr: new C(Q, "viewPr")
      , wedge: new C(Q, "wedge")
      , wheel: new C(Q, "wheel")
      , wipe: new C(Q, "wipe")
      , xfrm: new C(Q, "xfrm")
      , zoom: new C(Q, "zoom")
    };
    b.P;
    b.p14Ns = new k("http://schemas.microsoft.com/office/powerpoint/2010/main");
    var $ = b.p14Ns;
    b.P14 = {
      bmk: new C($, "bmk")
      , bmkLst: new C($, "bmkLst")
      , bmkTgt: new C($, "bmkTgt")
      , bounceEnd: new C($, "bounceEnd")
      , bwMode: new C($, "bwMode")
      , cNvContentPartPr: new C($, "cNvContentPartPr")
      , cNvPr: new C($, "cNvPr")
      , conveyor: new C($, "conveyor")
      , creationId: new C($, "creationId")
      , doors: new C($, "doors")
      , dur: new C($, "dur")
      , extLst: new C($, "extLst")
      , fade: new C($, "fade")
      , ferris: new C($, "ferris")
      , flash: new C($, "flash")
      , flip: new C($, "flip")
      , flythrough: new C($, "flythrough")
      , gallery: new C($, "gallery")
      , glitter: new C($, "glitter")
      , honeycomb: new C($, "honeycomb")
      , laserTraceLst: new C($, "laserTraceLst")
      , media: new C($, "media")
      , modId: new C($, "modId")
      , nvContentPartPr: new C($, "nvContentPartPr")
      , nvPr: new C($, "nvPr")
      , pan: new C($, "pan")
      , pauseEvt: new C($, "pauseEvt")
      , playEvt: new C($, "playEvt")
      , presetBounceEnd: new C($, "presetBounceEnd")
      , prism: new C($, "prism")
      , resumeEvt: new C($, "resumeEvt")
      , reveal: new C($, "reveal")
      , ripple: new C($, "ripple")
      , section: new C($, "section")
      , sectionLst: new C($, "sectionLst")
      , seekEvt: new C($, "seekEvt")
      , showEvtLst: new C($, "showEvtLst")
      , shred: new C($, "shred")
      , sldId: new C($, "sldId")
      , sldIdLst: new C($, "sldIdLst")
      , stopEvt: new C($, "stopEvt")
      , _switch: new C($, "switch")
      , tracePt: new C($, "tracePt")
      , tracePtLst: new C($, "tracePtLst")
      , triggerEvt: new C($, "triggerEvt")
      , trim: new C($, "trim")
      , vortex: new C($, "vortex")
      , warp: new C($, "warp")
      , wheelReverse: new C($, "wheelReverse")
      , window: new C($, "window")
      , xfrm: new C($, "xfrm")
    };
    b.P14;
    b.p15Ns = new k("http://schemas.microsoft.com/office15/powerpoint");
    var ee = b.p15Ns;
    b.P15 = {
      extElement: new C(ee, "extElement")
    };
    b.P15;
    b.picNs = new k("http://schemas.openxmlformats.org/drawingml/2006/picture");
    var ne = b.picNs;
    b.Pic = {
      blipFill: new C(ne, "blipFill")
      , cNvPicPr: new C(ne, "cNvPicPr")
      , cNvPr: new C(ne, "cNvPr")
      , nvPicPr: new C(ne, "nvPicPr")
      , _pic: new C(ne, "pic")
      , spPr: new C(ne, "spPr")
    };
    b.Pic;
    b.rNs = new k("http://schemas.openxmlformats.org/officeDocument/2006/relationships");
    var te = b.rNs;
    b.R = {
      blip: new C(te, "blip")
      , cs: new C(te, "cs")
      , dm: new C(te, "dm")
      , embed: new C(te, "embed")
      , href: new C(te, "href")
      , id: new C(te, "id")
      , link: new C(te, "link")
      , lo: new C(te, "lo")
      , pict: new C(te, "pict")
      , qs: new C(te, "qs")
      , verticalDpi: new C(te, "verticalDpi")
    };
    b.R;
    b.sNs = new k("http://schemas.openxmlformats.org/spreadsheetml/2006/main");
    var re = b.sNs;
    b.S = {
      alignment: new C(re, "alignment")
      , anchor: new C(re, "anchor")
      , author: new C(re, "author")
      , authors: new C(re, "authors")
      , autoFilter: new C(re, "autoFilter")
      , autoSortScope: new C(re, "autoSortScope")
      , b: new C(re, "b")
      , bgColor: new C(re, "bgColor")
      , bk: new C(re, "bk")
      , border: new C(re, "border")
      , borders: new C(re, "borders")
      , bottom: new C(re, "bottom")
      , brk: new C(re, "brk")
      , c: new C(re, "c")
      , cacheField: new C(re, "cacheField")
      , cacheFields: new C(re, "cacheFields")
      , cacheHierarchies: new C(re, "cacheHierarchies")
      , cacheHierarchy: new C(re, "cacheHierarchy")
      , cacheSource: new C(re, "cacheSource")
      , calcChain: new C(re, "calcChain")
      , calcPr: new C(re, "calcPr")
      , calculatedColumnFormula: new C(re, "calculatedColumnFormula")
      , calculatedItem: new C(re, "calculatedItem")
      , calculatedItems: new C(re, "calculatedItems")
      , calculatedMember: new C(re, "calculatedMember")
      , calculatedMembers: new C(re, "calculatedMembers")
      , cell: new C(re, "cell")
      , cellMetadata: new C(re, "cellMetadata")
      , cellSmartTag: new C(re, "cellSmartTag")
      , cellSmartTagPr: new C(re, "cellSmartTagPr")
      , cellSmartTags: new C(re, "cellSmartTags")
      , cellStyle: new C(re, "cellStyle")
      , cellStyles: new C(re, "cellStyles")
      , cellStyleXfs: new C(re, "cellStyleXfs")
      , cellWatch: new C(re, "cellWatch")
      , cellWatches: new C(re, "cellWatches")
      , cellXfs: new C(re, "cellXfs")
      , cfRule: new C(re, "cfRule")
      , cfvo: new C(re, "cfvo")
      , charset: new C(re, "charset")
      , chartFormat: new C(re, "chartFormat")
      , chartFormats: new C(re, "chartFormats")
      , chartsheet: new C(re, "chartsheet")
      , col: new C(re, "col")
      , colBreaks: new C(re, "colBreaks")
      , colFields: new C(re, "colFields")
      , colHierarchiesUsage: new C(re, "colHierarchiesUsage")
      , colHierarchyUsage: new C(re, "colHierarchyUsage")
      , colItems: new C(re, "colItems")
      , color: new C(re, "color")
      , colorFilter: new C(re, "colorFilter")
      , colors: new C(re, "colors")
      , colorScale: new C(re, "colorScale")
      , cols: new C(re, "cols")
      , comment: new C(re, "comment")
      , commentList: new C(re, "commentList")
      , comments: new C(re, "comments")
      , condense: new C(re, "condense")
      , conditionalFormat: new C(re, "conditionalFormat")
      , conditionalFormats: new C(re, "conditionalFormats")
      , conditionalFormatting: new C(re, "conditionalFormatting")
      , connection: new C(re, "connection")
      , connections: new C(re, "connections")
      , consolidation: new C(re, "consolidation")
      , control: new C(re, "control")
      , controlPr: new C(re, "controlPr")
      , controls: new C(re, "controls")
      , customFilter: new C(re, "customFilter")
      , customFilters: new C(re, "customFilters")
      , customPr: new C(re, "customPr")
      , customProperties: new C(re, "customProperties")
      , customSheetView: new C(re, "customSheetView")
      , customSheetViews: new C(re, "customSheetViews")
      , d: new C(re, "d")
      , dataBar: new C(re, "dataBar")
      , dataConsolidate: new C(re, "dataConsolidate")
      , dataField: new C(re, "dataField")
      , dataFields: new C(re, "dataFields")
      , dataRef: new C(re, "dataRef")
      , dataRefs: new C(re, "dataRefs")
      , dataValidation: new C(re, "dataValidation")
      , dataValidations: new C(re, "dataValidations")
      , dateGroupItem: new C(re, "dateGroupItem")
      , dbPr: new C(re, "dbPr")
      , ddeItem: new C(re, "ddeItem")
      , ddeItems: new C(re, "ddeItems")
      , ddeLink: new C(re, "ddeLink")
      , definedName: new C(re, "definedName")
      , definedNames: new C(re, "definedNames")
      , deletedField: new C(re, "deletedField")
      , diagonal: new C(re, "diagonal")
      , dialogsheet: new C(re, "dialogsheet")
      , dimension: new C(re, "dimension")
      , dimensions: new C(re, "dimensions")
      , discretePr: new C(re, "discretePr")
      , drawing: new C(re, "drawing")
      , dxf: new C(re, "dxf")
      , dxfs: new C(re, "dxfs")
      , dynamicFilter: new C(re, "dynamicFilter")
      , e: new C(re, "e")
      , entries: new C(re, "entries")
      , evenFooter: new C(re, "evenFooter")
      , evenHeader: new C(re, "evenHeader")
      , ext: new C(re, "ext")
      , extend: new C(re, "extend")
      , externalBook: new C(re, "externalBook")
      , externalLink: new C(re, "externalLink")
      , extLst: new C(re, "extLst")
      , f: new C(re, "f")
      , family: new C(re, "family")
      , fgColor: new C(re, "fgColor")
      , field: new C(re, "field")
      , fieldGroup: new C(re, "fieldGroup")
      , fieldsUsage: new C(re, "fieldsUsage")
      , fieldUsage: new C(re, "fieldUsage")
      , fill: new C(re, "fill")
      , fills: new C(re, "fills")
      , filter: new C(re, "filter")
      , filterColumn: new C(re, "filterColumn")
      , filters: new C(re, "filters")
      , firstFooter: new C(re, "firstFooter")
      , firstHeader: new C(re, "firstHeader")
      , font: new C(re, "font")
      , fonts: new C(re, "fonts")
      , foo: new C(re, "foo")
      , format: new C(re, "format")
      , formats: new C(re, "formats")
      , formula: new C(re, "formula")
      , formula1: new C(re, "formula1")
      , formula2: new C(re, "formula2")
      , from: new C(re, "from")
      , futureMetadata: new C(re, "futureMetadata")
      , gradientFill: new C(re, "gradientFill")
      , group: new C(re, "group")
      , groupItems: new C(re, "groupItems")
      , groupLevel: new C(re, "groupLevel")
      , groupLevels: new C(re, "groupLevels")
      , groupMember: new C(re, "groupMember")
      , groupMembers: new C(re, "groupMembers")
      , groups: new C(re, "groups")
      , header: new C(re, "header")
      , headerFooter: new C(re, "headerFooter")
      , headers: new C(re, "headers")
      , horizontal: new C(re, "horizontal")
      , hyperlink: new C(re, "hyperlink")
      , hyperlinks: new C(re, "hyperlinks")
      , i: new C(re, "i")
      , iconFilter: new C(re, "iconFilter")
      , iconSet: new C(re, "iconSet")
      , ignoredError: new C(re, "ignoredError")
      , ignoredErrors: new C(re, "ignoredErrors")
      , indexedColors: new C(re, "indexedColors")
      , inputCells: new C(re, "inputCells")
      , _is: new C(re, "is")
      , item: new C(re, "item")
      , items: new C(re, "items")
      , k: new C(re, "k")
      , kpi: new C(re, "kpi")
      , kpis: new C(re, "kpis")
      , left: new C(re, "left")
      , legacyDrawing: new C(re, "legacyDrawing")
      , legacyDrawingHF: new C(re, "legacyDrawingHF")
      , location: new C(re, "location")
      , m: new C(re, "m")
      , main: new C(re, "main")
      , map: new C(re, "map")
      , maps: new C(re, "maps")
      , mdx: new C(re, "mdx")
      , mdxMetadata: new C(re, "mdxMetadata")
      , measureGroup: new C(re, "measureGroup")
      , measureGroups: new C(re, "measureGroups")
      , member: new C(re, "member")
      , members: new C(re, "members")
      , mergeCell: new C(re, "mergeCell")
      , mergeCells: new C(re, "mergeCells")
      , metadata: new C(re, "metadata")
      , metadataStrings: new C(re, "metadataStrings")
      , metadataType: new C(re, "metadataType")
      , metadataTypes: new C(re, "metadataTypes")
      , mp: new C(re, "mp")
      , mpMap: new C(re, "mpMap")
      , mps: new C(re, "mps")
      , mruColors: new C(re, "mruColors")
      , ms: new C(re, "ms")
      , n: new C(re, "n")
      , name: new C(re, "name")
      , nc: new C(re, "nc")
      , ndxf: new C(re, "ndxf")
      , numFmt: new C(re, "numFmt")
      , numFmts: new C(re, "numFmts")
      , objectPr: new C(re, "objectPr")
      , oc: new C(re, "oc")
      , oddFooter: new C(re, "oddFooter")
      , oddHeader: new C(re, "oddHeader")
      , odxf: new C(re, "odxf")
      , olapPr: new C(re, "olapPr")
      , oldFormula: new C(re, "oldFormula")
      , oleItem: new C(re, "oleItem")
      , oleItems: new C(re, "oleItems")
      , oleLink: new C(re, "oleLink")
      , oleObject: new C(re, "oleObject")
      , oleObjects: new C(re, "oleObjects")
      , outline: new C(re, "outline")
      , outlinePr: new C(re, "outlinePr")
      , p: new C(re, "p")
      , page: new C(re, "page")
      , pageField: new C(re, "pageField")
      , pageFields: new C(re, "pageFields")
      , pageItem: new C(re, "pageItem")
      , pageMargins: new C(re, "pageMargins")
      , pages: new C(re, "pages")
      , pageSetup: new C(re, "pageSetup")
      , pageSetUpPr: new C(re, "pageSetUpPr")
      , pane: new C(re, "pane")
      , parameter: new C(re, "parameter")
      , parameters: new C(re, "parameters")
      , patternFill: new C(re, "patternFill")
      , phoneticPr: new C(re, "phoneticPr")
      , picture: new C(re, "picture")
      , pivotArea: new C(re, "pivotArea")
      , pivotAreas: new C(re, "pivotAreas")
      , pivotCache: new C(re, "pivotCache")
      , pivotCacheDefinition: new C(re, "pivotCacheDefinition")
      , pivotCacheRecords: new C(re, "pivotCacheRecords")
      , pivotCaches: new C(re, "pivotCaches")
      , pivotField: new C(re, "pivotField")
      , pivotFields: new C(re, "pivotFields")
      , pivotHierarchies: new C(re, "pivotHierarchies")
      , pivotHierarchy: new C(re, "pivotHierarchy")
      , pivotSelection: new C(re, "pivotSelection")
      , pivotTableDefinition: new C(re, "pivotTableDefinition")
      , pivotTableStyleInfo: new C(re, "pivotTableStyleInfo")
      , printOptions: new C(re, "printOptions")
      , protectedRange: new C(re, "protectedRange")
      , protectedRanges: new C(re, "protectedRanges")
      , protection: new C(re, "protection")
      , query: new C(re, "query")
      , queryCache: new C(re, "queryCache")
      , queryTable: new C(re, "queryTable")
      , queryTableDeletedFields: new C(re, "queryTableDeletedFields")
      , queryTableField: new C(re, "queryTableField")
      , queryTableFields: new C(re, "queryTableFields")
      , queryTableRefresh: new C(re, "queryTableRefresh")
      , r: new C(re, "r")
      , raf: new C(re, "raf")
      , rangePr: new C(re, "rangePr")
      , rangeSet: new C(re, "rangeSet")
      , rangeSets: new C(re, "rangeSets")
      , rc: new C(re, "rc")
      , rcc: new C(re, "rcc")
      , rcft: new C(re, "rcft")
      , rcmt: new C(re, "rcmt")
      , rcv: new C(re, "rcv")
      , rdn: new C(re, "rdn")
      , reference: new C(re, "reference")
      , references: new C(re, "references")
      , reviewed: new C(re, "reviewed")
      , reviewedList: new C(re, "reviewedList")
      , revisions: new C(re, "revisions")
      , rfmt: new C(re, "rfmt")
      , rFont: new C(re, "rFont")
      , rgbColor: new C(re, "rgbColor")
      , right: new C(re, "right")
      , ris: new C(re, "ris")
      , rm: new C(re, "rm")
      , row: new C(re, "row")
      , rowBreaks: new C(re, "rowBreaks")
      , rowFields: new C(re, "rowFields")
      , rowHierarchiesUsage: new C(re, "rowHierarchiesUsage")
      , rowHierarchyUsage: new C(re, "rowHierarchyUsage")
      , rowItems: new C(re, "rowItems")
      , rPh: new C(re, "rPh")
      , rPr: new C(re, "rPr")
      , rqt: new C(re, "rqt")
      , rrc: new C(re, "rrc")
      , rsnm: new C(re, "rsnm")
      , _s: new C(re, "s")
      , scenario: new C(re, "scenario")
      , scenarios: new C(re, "scenarios")
      , scheme: new C(re, "scheme")
      , selection: new C(re, "selection")
      , serverFormat: new C(re, "serverFormat")
      , serverFormats: new C(re, "serverFormats")
      , set: new C(re, "set")
      , sets: new C(re, "sets")
      , shadow: new C(re, "shadow")
      , sharedItems: new C(re, "sharedItems")
      , sheet: new C(re, "sheet")
      , sheetCalcPr: new C(re, "sheetCalcPr")
      , sheetData: new C(re, "sheetData")
      , sheetDataSet: new C(re, "sheetDataSet")
      , sheetFormatPr: new C(re, "sheetFormatPr")
      , sheetId: new C(re, "sheetId")
      , sheetIdMap: new C(re, "sheetIdMap")
      , sheetName: new C(re, "sheetName")
      , sheetNames: new C(re, "sheetNames")
      , sheetPr: new C(re, "sheetPr")
      , sheetProtection: new C(re, "sheetProtection")
      , sheets: new C(re, "sheets")
      , sheetView: new C(re, "sheetView")
      , sheetViews: new C(re, "sheetViews")
      , si: new C(re, "si")
      , singleXmlCell: new C(re, "singleXmlCell")
      , singleXmlCells: new C(re, "singleXmlCells")
      , smartTags: new C(re, "smartTags")
      , sortByTuple: new C(re, "sortByTuple")
      , sortCondition: new C(re, "sortCondition")
      , sortState: new C(re, "sortState")
      , sst: new C(re, "sst")
      , stop: new C(re, "stop")
      , stp: new C(re, "stp")
      , strike: new C(re, "strike")
      , styleSheet: new C(re, "styleSheet")
      , sz: new C(re, "sz")
      , t: new C(re, "t")
      , tabColor: new C(re, "tabColor")
      , table: new C(re, "table")
      , tableColumn: new C(re, "tableColumn")
      , tableColumns: new C(re, "tableColumns")
      , tablePart: new C(re, "tablePart")
      , tableParts: new C(re, "tableParts")
      , tables: new C(re, "tables")
      , tableStyle: new C(re, "tableStyle")
      , tableStyleElement: new C(re, "tableStyleElement")
      , tableStyleInfo: new C(re, "tableStyleInfo")
      , tableStyles: new C(re, "tableStyles")
      , text: new C(re, "text")
      , textField: new C(re, "textField")
      , textFields: new C(re, "textFields")
      , textPr: new C(re, "textPr")
      , to: new C(re, "to")
      , top: new C(re, "top")
      , top10: new C(re, "top10")
      , totalsRowFormula: new C(re, "totalsRowFormula")
      , tp: new C(re, "tp")
      , tpl: new C(re, "tpl")
      , tpls: new C(re, "tpls")
      , tr: new C(re, "tr")
      , tupleCache: new C(re, "tupleCache")
      , u: new C(re, "u")
      , undo: new C(re, "undo")
      , userInfo: new C(re, "userInfo")
      , users: new C(re, "users")
      , v: new C(re, "v")
      , val: new C(re, "val")
      , value: new C(re, "value")
      , valueMetadata: new C(re, "valueMetadata")
      , values: new C(re, "values")
      , vertAlign: new C(re, "vertAlign")
      , vertical: new C(re, "vertical")
      , volType: new C(re, "volType")
      , volTypes: new C(re, "volTypes")
      , webPr: new C(re, "webPr")
      , webPublishItem: new C(re, "webPublishItem")
      , webPublishItems: new C(re, "webPublishItems")
      , worksheet: new C(re, "worksheet")
      , worksheetEx14: new C(re, "worksheetEx14")
      , worksheetSource: new C(re, "worksheetSource")
      , x: new C(re, "x")
      , xf: new C(re, "xf")
      , xmlCellPr: new C(re, "xmlCellPr")
      , xmlColumnPr: new C(re, "xmlColumnPr")
      , xmlPr: new C(re, "xmlPr")
    };
    b.S;
    b.slNs = new k("http://schemas.openxmlformats.org/schemaLibrary/2006/main");
    var ae = b.slNs;
    b.SL = {
      manifestLocation: new C(ae, "manifestLocation")
      , schema: new C(ae, "schema")
      , schemaLibrary: new C(ae, "schemaLibrary")
      , uri: new C(ae, "uri")
    };
    b.SL;
    b.sleNs = new k("http://schemas.microsoft.com/office/drawing/2010/slicer");
    var oe = b.sleNs;
    b.SLE = {
      slicer: new C(oe, "slicer")
    };
    b.SLE;
    b.vmlNs = new k("urn:schemas-microsoft-com:vml");
    var ie = b.vmlNs;
    b.VML = {
      arc: new C(ie, "arc")
      , background: new C(ie, "background")
      , curve: new C(ie, "curve")
      , ext: new C(ie, "ext")
      , f: new C(ie, "f")
      , fill: new C(ie, "fill")
      , formulas: new C(ie, "formulas")
      , group: new C(ie, "group")
      , h: new C(ie, "h")
      , handles: new C(ie, "handles")
      , image: new C(ie, "image")
      , imagedata: new C(ie, "imagedata")
      , line: new C(ie, "line")
      , oval: new C(ie, "oval")
      , path: new C(ie, "path")
      , polyline: new C(ie, "polyline")
      , rect: new C(ie, "rect")
      , roundrect: new C(ie, "roundrect")
      , shadow: new C(ie, "shadow")
      , shape: new C(ie, "shape")
      , shapetype: new C(ie, "shapetype")
      , stroke: new C(ie, "stroke")
      , textbox: new C(ie, "textbox")
      , textpath: new C(ie, "textpath")
    };
    b.VML;
    b.vtNs = new k("http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes");
    var se = b.vtNs;
    b.VT = {
      _bool: new C(se, "bool")
      , filetime: new C(se, "filetime")
      , i4: new C(se, "i4")
      , lpstr: new C(se, "lpstr")
      , lpwstr: new C(se, "lpwstr")
      , r8: new C(se, "r8")
      , variant: new C(se, "variant")
      , vector: new C(se, "vector")
    };
    b.VT;
    b.wNs = new k("http://schemas.openxmlformats.org/wordprocessingml/2006/main");
    var le = b.wNs;
    b.W = {
      abstractNum: new C(le, "abstractNum")
      , abstractNumId: new C(le, "abstractNumId")
      , accent1: new C(le, "accent1")
      , accent2: new C(le, "accent2")
      , accent3: new C(le, "accent3")
      , accent4: new C(le, "accent4")
      , accent5: new C(le, "accent5")
      , accent6: new C(le, "accent6")
      , activeRecord: new C(le, "activeRecord")
      , activeWritingStyle: new C(le, "activeWritingStyle")
      , actualPg: new C(le, "actualPg")
      , addressFieldName: new C(le, "addressFieldName")
      , adjustLineHeightInTable: new C(le, "adjustLineHeightInTable")
      , adjustRightInd: new C(le, "adjustRightInd")
      , after: new C(le, "after")
      , afterAutospacing: new C(le, "afterAutospacing")
      , afterLines: new C(le, "afterLines")
      , algIdExt: new C(le, "algIdExt")
      , algIdExtSource: new C(le, "algIdExtSource")
      , alias: new C(le, "alias")
      , aliases: new C(le, "aliases")
      , alignBordersAndEdges: new C(le, "alignBordersAndEdges")
      , alignment: new C(le, "alignment")
      , alignTablesRowByRow: new C(le, "alignTablesRowByRow")
      , allowPNG: new C(le, "allowPNG")
      , allowSpaceOfSameStyleInTable: new C(le, "allowSpaceOfSameStyleInTable")
      , altChunk: new C(le, "altChunk")
      , altChunkPr: new C(le, "altChunkPr")
      , altName: new C(le, "altName")
      , alwaysMergeEmptyNamespace: new C(le, "alwaysMergeEmptyNamespace")
      , alwaysShowPlaceholderText: new C(le, "alwaysShowPlaceholderText")
      , anchor: new C(le, "anchor")
      , anchorLock: new C(le, "anchorLock")
      , annotationRef: new C(le, "annotationRef")
      , applyBreakingRules: new C(le, "applyBreakingRules")
      , appName: new C(le, "appName")
      , ascii: new C(le, "ascii")
      , asciiTheme: new C(le, "asciiTheme")
      , attachedSchema: new C(le, "attachedSchema")
      , attachedTemplate: new C(le, "attachedTemplate")
      , attr: new C(le, "attr")
      , author: new C(le, "author")
      , autofitToFirstFixedWidthCell: new C(le, "autofitToFirstFixedWidthCell")
      , autoFormatOverride: new C(le, "autoFormatOverride")
      , autoHyphenation: new C(le, "autoHyphenation")
      , autoRedefine: new C(le, "autoRedefine")
      , autoSpaceDE: new C(le, "autoSpaceDE")
      , autoSpaceDN: new C(le, "autoSpaceDN")
      , autoSpaceLikeWord95: new C(le, "autoSpaceLikeWord95")
      , b: new C(le, "b")
      , background: new C(le, "background")
      , balanceSingleByteDoubleByteWidth: new C(le, "balanceSingleByteDoubleByteWidth")
      , bar: new C(le, "bar")
      , basedOn: new C(le, "basedOn")
      , bCs: new C(le, "bCs")
      , bdr: new C(le, "bdr")
      , before: new C(le, "before")
      , beforeAutospacing: new C(le, "beforeAutospacing")
      , beforeLines: new C(le, "beforeLines")
      , behavior: new C(le, "behavior")
      , behaviors: new C(le, "behaviors")
      , between: new C(le, "between")
      , bg1: new C(le, "bg1")
      , bg2: new C(le, "bg2")
      , bibliography: new C(le, "bibliography")
      , bidi: new C(le, "bidi")
      , bidiVisual: new C(le, "bidiVisual")
      , blockQuote: new C(le, "blockQuote")
      , body: new C(le, "body")
      , bodyDiv: new C(le, "bodyDiv")
      , bookFoldPrinting: new C(le, "bookFoldPrinting")
      , bookFoldPrintingSheets: new C(le, "bookFoldPrintingSheets")
      , bookFoldRevPrinting: new C(le, "bookFoldRevPrinting")
      , bookmarkEnd: new C(le, "bookmarkEnd")
      , bookmarkStart: new C(le, "bookmarkStart")
      , bordersDoNotSurroundFooter: new C(le, "bordersDoNotSurroundFooter")
      , bordersDoNotSurroundHeader: new C(le, "bordersDoNotSurroundHeader")
      , bottom: new C(le, "bottom")
      , bottomFromText: new C(le, "bottomFromText")
      , br: new C(le, "br")
      , cachedColBalance: new C(le, "cachedColBalance")
      , calcOnExit: new C(le, "calcOnExit")
      , calendar: new C(le, "calendar")
      , cantSplit: new C(le, "cantSplit")
      , caps: new C(le, "caps")
      , category: new C(le, "category")
      , cellDel: new C(le, "cellDel")
      , cellIns: new C(le, "cellIns")
      , cellMerge: new C(le, "cellMerge")
      , chapSep: new C(le, "chapSep")
      , chapStyle: new C(le, "chapStyle")
      , _char: new C(le, "char")
      , characterSpacingControl: new C(le, "characterSpacingControl")
      , charset: new C(le, "charset")
      , charSpace: new C(le, "charSpace")
      , checkBox: new C(le, "checkBox")
      , _checked: new C(le, "checked")
      , checkErrors: new C(le, "checkErrors")
      , checkStyle: new C(le, "checkStyle")
      , citation: new C(le, "citation")
      , clear: new C(le, "clear")
      , clickAndTypeStyle: new C(le, "clickAndTypeStyle")
      , clrSchemeMapping: new C(le, "clrSchemeMapping")
      , cnfStyle: new C(le, "cnfStyle")
      , code: new C(le, "code")
      , col: new C(le, "col")
      , colDelim: new C(le, "colDelim")
      , colFirst: new C(le, "colFirst")
      , colLast: new C(le, "colLast")
      , color: new C(le, "color")
      , cols: new C(le, "cols")
      , column: new C(le, "column")
      , combine: new C(le, "combine")
      , combineBrackets: new C(le, "combineBrackets")
      , comboBox: new C(le, "comboBox")
      , comment: new C(le, "comment")
      , commentRangeEnd: new C(le, "commentRangeEnd")
      , commentRangeStart: new C(le, "commentRangeStart")
      , commentReference: new C(le, "commentReference")
      , comments: new C(le, "comments")
      , compat: new C(le, "compat")
      , compatSetting: new C(le, "compatSetting")
      , connectString: new C(le, "connectString")
      , consecutiveHyphenLimit: new C(le, "consecutiveHyphenLimit")
      , contextualSpacing: new C(le, "contextualSpacing")
      , continuationSeparator: new C(le, "continuationSeparator")
      , control: new C(le, "control")
      , convMailMergeEsc: new C(le, "convMailMergeEsc")
      , count: new C(le, "count")
      , countBy: new C(le, "countBy")
      , cr: new C(le, "cr")
      , cryptAlgorithmClass: new C(le, "cryptAlgorithmClass")
      , cryptAlgorithmSid: new C(le, "cryptAlgorithmSid")
      , cryptAlgorithmType: new C(le, "cryptAlgorithmType")
      , cryptProvider: new C(le, "cryptProvider")
      , cryptProviderType: new C(le, "cryptProviderType")
      , cryptProviderTypeExt: new C(le, "cryptProviderTypeExt")
      , cryptProviderTypeExtSource: new C(le, "cryptProviderTypeExtSource")
      , cryptSpinCount: new C(le, "cryptSpinCount")
      , cs: new C(le, "cs")
      , csb0: new C(le, "csb0")
      , csb1: new C(le, "csb1")
      , cstheme: new C(le, "cstheme")
      , customMarkFollows: new C(le, "customMarkFollows")
      , customStyle: new C(le, "customStyle")
      , customXml: new C(le, "customXml")
      , customXmlDelRangeEnd: new C(le, "customXmlDelRangeEnd")
      , customXmlDelRangeStart: new C(le, "customXmlDelRangeStart")
      , customXmlInsRangeEnd: new C(le, "customXmlInsRangeEnd")
      , customXmlInsRangeStart: new C(le, "customXmlInsRangeStart")
      , customXmlMoveFromRangeEnd: new C(le, "customXmlMoveFromRangeEnd")
      , customXmlMoveFromRangeStart: new C(le, "customXmlMoveFromRangeStart")
      , customXmlMoveToRangeEnd: new C(le, "customXmlMoveToRangeEnd")
      , customXmlMoveToRangeStart: new C(le, "customXmlMoveToRangeStart")
      , customXmlPr: new C(le, "customXmlPr")
      , dataBinding: new C(le, "dataBinding")
      , dataSource: new C(le, "dataSource")
      , dataType: new C(le, "dataType")
      , date: new C(le, "date")
      , dateFormat: new C(le, "dateFormat")
      , dayLong: new C(le, "dayLong")
      , dayShort: new C(le, "dayShort")
      , ddList: new C(le, "ddList")
      , decimalSymbol: new C(le, "decimalSymbol")
      , _default: new C(le, "default")
      , defaultTableStyle: new C(le, "defaultTableStyle")
      , defaultTabStop: new C(le, "defaultTabStop")
      , defLockedState: new C(le, "defLockedState")
      , defQFormat: new C(le, "defQFormat")
      , defSemiHidden: new C(le, "defSemiHidden")
      , defUIPriority: new C(le, "defUIPriority")
      , defUnhideWhenUsed: new C(le, "defUnhideWhenUsed")
      , del: new C(le, "del")
      , delInstrText: new C(le, "delInstrText")
      , delText: new C(le, "delText")
      , description: new C(le, "description")
      , destination: new C(le, "destination")
      , dirty: new C(le, "dirty")
      , displacedByCustomXml: new C(le, "displacedByCustomXml")
      , display: new C(le, "display")
      , displayBackgroundShape: new C(le, "displayBackgroundShape")
      , displayHangulFixedWidth: new C(le, "displayHangulFixedWidth")
      , displayHorizontalDrawingGridEvery: new C(le, "displayHorizontalDrawingGridEvery")
      , displayText: new C(le, "displayText")
      , displayVerticalDrawingGridEvery: new C(le, "displayVerticalDrawingGridEvery")
      , distance: new C(le, "distance")
      , div: new C(le, "div")
      , divBdr: new C(le, "divBdr")
      , divId: new C(le, "divId")
      , divs: new C(le, "divs")
      , divsChild: new C(le, "divsChild")
      , dllVersion: new C(le, "dllVersion")
      , docDefaults: new C(le, "docDefaults")
      , docGrid: new C(le, "docGrid")
      , docLocation: new C(le, "docLocation")
      , docPart: new C(le, "docPart")
      , docPartBody: new C(le, "docPartBody")
      , docPartCategory: new C(le, "docPartCategory")
      , docPartGallery: new C(le, "docPartGallery")
      , docPartList: new C(le, "docPartList")
      , docPartObj: new C(le, "docPartObj")
      , docPartPr: new C(le, "docPartPr")
      , docParts: new C(le, "docParts")
      , docPartUnique: new C(le, "docPartUnique")
      , document: new C(le, "document")
      , documentProtection: new C(le, "documentProtection")
      , documentType: new C(le, "documentType")
      , docVar: new C(le, "docVar")
      , docVars: new C(le, "docVars")
      , doNotAutoCompressPictures: new C(le, "doNotAutoCompressPictures")
      , doNotAutofitConstrainedTables: new C(le, "doNotAutofitConstrainedTables")
      , doNotBreakConstrainedForcedTable: new C(le, "doNotBreakConstrainedForcedTable")
      , doNotBreakWrappedTables: new C(le, "doNotBreakWrappedTables")
      , doNotDemarcateInvalidXml: new C(le, "doNotDemarcateInvalidXml")
      , doNotDisplayPageBoundaries: new C(le, "doNotDisplayPageBoundaries")
      , doNotEmbedSmartTags: new C(le, "doNotEmbedSmartTags")
      , doNotExpandShiftReturn: new C(le, "doNotExpandShiftReturn")
      , doNotHyphenateCaps: new C(le, "doNotHyphenateCaps")
      , doNotIncludeSubdocsInStats: new C(le, "doNotIncludeSubdocsInStats")
      , doNotLeaveBackslashAlone: new C(le, "doNotLeaveBackslashAlone")
      , doNotOrganizeInFolder: new C(le, "doNotOrganizeInFolder")
      , doNotRelyOnCSS: new C(le, "doNotRelyOnCSS")
      , doNotSaveAsSingleFile: new C(le, "doNotSaveAsSingleFile")
      , doNotShadeFormData: new C(le, "doNotShadeFormData")
      , doNotSnapToGridInCell: new C(le, "doNotSnapToGridInCell")
      , doNotSuppressBlankLines: new C(le, "doNotSuppressBlankLines")
      , doNotSuppressIndentation: new C(le, "doNotSuppressIndentation")
      , doNotSuppressParagraphBorders: new C(le, "doNotSuppressParagraphBorders")
      , doNotTrackFormatting: new C(le, "doNotTrackFormatting")
      , doNotTrackMoves: new C(le, "doNotTrackMoves")
      , doNotUseEastAsianBreakRules: new C(le, "doNotUseEastAsianBreakRules")
      , doNotUseHTMLParagraphAutoSpacing: new C(le, "doNotUseHTMLParagraphAutoSpacing")
      , doNotUseIndentAsNumberingTabStop: new C(le, "doNotUseIndentAsNumberingTabStop")
      , doNotUseLongFileNames: new C(le, "doNotUseLongFileNames")
      , doNotUseMarginsForDrawingGridOrigin: new C(le, "doNotUseMarginsForDrawingGridOrigin")
      , doNotValidateAgainstSchema: new C(le, "doNotValidateAgainstSchema")
      , doNotVertAlignCellWithSp: new C(le, "doNotVertAlignCellWithSp")
      , doNotVertAlignInTxbx: new C(le, "doNotVertAlignInTxbx")
      , doNotWrapTextWithPunct: new C(le, "doNotWrapTextWithPunct")
      , drawing: new C(le, "drawing")
      , drawingGridHorizontalOrigin: new C(le, "drawingGridHorizontalOrigin")
      , drawingGridHorizontalSpacing: new C(le, "drawingGridHorizontalSpacing")
      , drawingGridVerticalOrigin: new C(le, "drawingGridVerticalOrigin")
      , drawingGridVerticalSpacing: new C(le, "drawingGridVerticalSpacing")
      , dropCap: new C(le, "dropCap")
      , dropDownList: new C(le, "dropDownList")
      , dstrike: new C(le, "dstrike")
      , dxaOrig: new C(le, "dxaOrig")
      , dyaOrig: new C(le, "dyaOrig")
      , dynamicAddress: new C(le, "dynamicAddress")
      , eastAsia: new C(le, "eastAsia")
      , eastAsianLayout: new C(le, "eastAsianLayout")
      , eastAsiaTheme: new C(le, "eastAsiaTheme")
      , ed: new C(le, "ed")
      , edGrp: new C(le, "edGrp")
      , edit: new C(le, "edit")
      , effect: new C(le, "effect")
      , element: new C(le, "element")
      , em: new C(le, "em")
      , embedBold: new C(le, "embedBold")
      , embedBoldItalic: new C(le, "embedBoldItalic")
      , embedItalic: new C(le, "embedItalic")
      , embedRegular: new C(le, "embedRegular")
      , embedSystemFonts: new C(le, "embedSystemFonts")
      , embedTrueTypeFonts: new C(le, "embedTrueTypeFonts")
      , emboss: new C(le, "emboss")
      , enabled: new C(le, "enabled")
      , encoding: new C(le, "encoding")
      , endnote: new C(le, "endnote")
      , endnotePr: new C(le, "endnotePr")
      , endnoteRef: new C(le, "endnoteRef")
      , endnoteReference: new C(le, "endnoteReference")
      , endnotes: new C(le, "endnotes")
      , enforcement: new C(le, "enforcement")
      , entryMacro: new C(le, "entryMacro")
      , equalWidth: new C(le, "equalWidth")
      , equation: new C(le, "equation")
      , evenAndOddHeaders: new C(le, "evenAndOddHeaders")
      , exitMacro: new C(le, "exitMacro")
      , family: new C(le, "family")
      , ffData: new C(le, "ffData")
      , fHdr: new C(le, "fHdr")
      , fieldMapData: new C(le, "fieldMapData")
      , fill: new C(le, "fill")
      , first: new C(le, "first")
      , firstColumn: new C(le, "firstColumn")
      , firstLine: new C(le, "firstLine")
      , firstLineChars: new C(le, "firstLineChars")
      , firstRow: new C(le, "firstRow")
      , fitText: new C(le, "fitText")
      , flatBorders: new C(le, "flatBorders")
      , fldChar: new C(le, "fldChar")
      , fldCharType: new C(le, "fldCharType")
      , fldData: new C(le, "fldData")
      , fldLock: new C(le, "fldLock")
      , fldSimple: new C(le, "fldSimple")
      , fmt: new C(le, "fmt")
      , followedHyperlink: new C(le, "followedHyperlink")
      , font: new C(le, "font")
      , fontKey: new C(le, "fontKey")
      , fonts: new C(le, "fonts")
      , fontSz: new C(le, "fontSz")
      , footer: new C(le, "footer")
      , footerReference: new C(le, "footerReference")
      , footnote: new C(le, "footnote")
      , footnoteLayoutLikeWW8: new C(le, "footnoteLayoutLikeWW8")
      , footnotePr: new C(le, "footnotePr")
      , footnoteRef: new C(le, "footnoteRef")
      , footnoteReference: new C(le, "footnoteReference")
      , footnotes: new C(le, "footnotes")
      , forceUpgrade: new C(le, "forceUpgrade")
      , forgetLastTabAlignment: new C(le, "forgetLastTabAlignment")
      , format: new C(le, "format")
      , formatting: new C(le, "formatting")
      , formProt: new C(le, "formProt")
      , formsDesign: new C(le, "formsDesign")
      , frame: new C(le, "frame")
      , frameLayout: new C(le, "frameLayout")
      , framePr: new C(le, "framePr")
      , frameset: new C(le, "frameset")
      , framesetSplitbar: new C(le, "framesetSplitbar")
      , ftr: new C(le, "ftr")
      , fullDate: new C(le, "fullDate")
      , gallery: new C(le, "gallery")
      , glossaryDocument: new C(le, "glossaryDocument")
      , grammar: new C(le, "grammar")
      , gridAfter: new C(le, "gridAfter")
      , gridBefore: new C(le, "gridBefore")
      , gridCol: new C(le, "gridCol")
      , gridSpan: new C(le, "gridSpan")
      , group: new C(le, "group")
      , growAutofit: new C(le, "growAutofit")
      , guid: new C(le, "guid")
      , gutter: new C(le, "gutter")
      , gutterAtTop: new C(le, "gutterAtTop")
      , h: new C(le, "h")
      , hAnchor: new C(le, "hAnchor")
      , hanging: new C(le, "hanging")
      , hangingChars: new C(le, "hangingChars")
      , hAnsi: new C(le, "hAnsi")
      , hAnsiTheme: new C(le, "hAnsiTheme")
      , hash: new C(le, "hash")
      , hdr: new C(le, "hdr")
      , hdrShapeDefaults: new C(le, "hdrShapeDefaults")
      , header: new C(le, "header")
      , headerReference: new C(le, "headerReference")
      , headerSource: new C(le, "headerSource")
      , helpText: new C(le, "helpText")
      , hidden: new C(le, "hidden")
      , hideGrammaticalErrors: new C(le, "hideGrammaticalErrors")
      , hideMark: new C(le, "hideMark")
      , hideSpellingErrors: new C(le, "hideSpellingErrors")
      , highlight: new C(le, "highlight")
      , hint: new C(le, "hint")
      , history: new C(le, "history")
      , hMerge: new C(le, "hMerge")
      , horzAnchor: new C(le, "horzAnchor")
      , hps: new C(le, "hps")
      , hpsBaseText: new C(le, "hpsBaseText")
      , hpsRaise: new C(le, "hpsRaise")
      , hRule: new C(le, "hRule")
      , hSpace: new C(le, "hSpace")
      , hyperlink: new C(le, "hyperlink")
      , hyphenationZone: new C(le, "hyphenationZone")
      , i: new C(le, "i")
      , iCs: new C(le, "iCs")
      , id: new C(le, "id")
      , ignoreMixedContent: new C(le, "ignoreMixedContent")
      , ilvl: new C(le, "ilvl")
      , imprint: new C(le, "imprint")
      , ind: new C(le, "ind")
      , initials: new C(le, "initials")
      , inkAnnotations: new C(le, "inkAnnotations")
      , ins: new C(le, "ins")
      , insDel: new C(le, "insDel")
      , insideH: new C(le, "insideH")
      , insideV: new C(le, "insideV")
      , instr: new C(le, "instr")
      , instrText: new C(le, "instrText")
      , isLgl: new C(le, "isLgl")
      , jc: new C(le, "jc")
      , keepLines: new C(le, "keepLines")
      , keepNext: new C(le, "keepNext")
      , kern: new C(le, "kern")
      , kinsoku: new C(le, "kinsoku")
      , lang: new C(le, "lang")
      , lastColumn: new C(le, "lastColumn")
      , lastRenderedPageBreak: new C(le, "lastRenderedPageBreak")
      , lastRow: new C(le, "lastRow")
      , lastValue: new C(le, "lastValue")
      , latentStyles: new C(le, "latentStyles")
      , layoutRawTableWidth: new C(le, "layoutRawTableWidth")
      , layoutTableRowsApart: new C(le, "layoutTableRowsApart")
      , leader: new C(le, "leader")
      , left: new C(le, "left")
      , leftChars: new C(le, "leftChars")
      , leftFromText: new C(le, "leftFromText")
      , legacy: new C(le, "legacy")
      , legacyIndent: new C(le, "legacyIndent")
      , legacySpace: new C(le, "legacySpace")
      , lid: new C(le, "lid")
      , line: new C(le, "line")
      , linePitch: new C(le, "linePitch")
      , lineRule: new C(le, "lineRule")
      , lines: new C(le, "lines")
      , lineWrapLikeWord6: new C(le, "lineWrapLikeWord6")
      , link: new C(le, "link")
      , linkedToFile: new C(le, "linkedToFile")
      , linkStyles: new C(le, "linkStyles")
      , linkToQuery: new C(le, "linkToQuery")
      , listEntry: new C(le, "listEntry")
      , listItem: new C(le, "listItem")
      , listSeparator: new C(le, "listSeparator")
      , lnNumType: new C(le, "lnNumType")
      , _lock: new C(le, "lock")
      , locked: new C(le, "locked")
      , lsdException: new C(le, "lsdException")
      , lvl: new C(le, "lvl")
      , lvlJc: new C(le, "lvlJc")
      , lvlOverride: new C(le, "lvlOverride")
      , lvlPicBulletId: new C(le, "lvlPicBulletId")
      , lvlRestart: new C(le, "lvlRestart")
      , lvlText: new C(le, "lvlText")
      , mailAsAttachment: new C(le, "mailAsAttachment")
      , mailMerge: new C(le, "mailMerge")
      , mailSubject: new C(le, "mailSubject")
      , mainDocumentType: new C(le, "mainDocumentType")
      , mappedName: new C(le, "mappedName")
      , marBottom: new C(le, "marBottom")
      , marH: new C(le, "marH")
      , markup: new C(le, "markup")
      , marLeft: new C(le, "marLeft")
      , marRight: new C(le, "marRight")
      , marTop: new C(le, "marTop")
      , marW: new C(le, "marW")
      , matchSrc: new C(le, "matchSrc")
      , maxLength: new C(le, "maxLength")
      , mirrorIndents: new C(le, "mirrorIndents")
      , mirrorMargins: new C(le, "mirrorMargins")
      , monthLong: new C(le, "monthLong")
      , monthShort: new C(le, "monthShort")
      , moveFrom: new C(le, "moveFrom")
      , moveFromRangeEnd: new C(le, "moveFromRangeEnd")
      , moveFromRangeStart: new C(le, "moveFromRangeStart")
      , moveTo: new C(le, "moveTo")
      , moveToRangeEnd: new C(le, "moveToRangeEnd")
      , moveToRangeStart: new C(le, "moveToRangeStart")
      , multiLevelType: new C(le, "multiLevelType")
      , multiLine: new C(le, "multiLine")
      , mwSmallCaps: new C(le, "mwSmallCaps")
      , name: new C(le, "name")
      , namespaceuri: new C(le, "namespaceuri")
      , next: new C(le, "next")
      , nlCheck: new C(le, "nlCheck")
      , noBorder: new C(le, "noBorder")
      , noBreakHyphen: new C(le, "noBreakHyphen")
      , noColumnBalance: new C(le, "noColumnBalance")
      , noEndnote: new C(le, "noEndnote")
      , noExtraLineSpacing: new C(le, "noExtraLineSpacing")
      , noHBand: new C(le, "noHBand")
      , noLeading: new C(le, "noLeading")
      , noLineBreaksAfter: new C(le, "noLineBreaksAfter")
      , noLineBreaksBefore: new C(le, "noLineBreaksBefore")
      , noProof: new C(le, "noProof")
      , noPunctuationKerning: new C(le, "noPunctuationKerning")
      , noResizeAllowed: new C(le, "noResizeAllowed")
      , noSpaceRaiseLower: new C(le, "noSpaceRaiseLower")
      , noTabHangInd: new C(le, "noTabHangInd")
      , notTrueType: new C(le, "notTrueType")
      , noVBand: new C(le, "noVBand")
      , noWrap: new C(le, "noWrap")
      , nsid: new C(le, "nsid")
      , _null: new C(le, "null")
      , num: new C(le, "num")
      , numbering: new C(le, "numbering")
      , numberingChange: new C(le, "numberingChange")
      , numFmt: new C(le, "numFmt")
      , numId: new C(le, "numId")
      , numIdMacAtCleanup: new C(le, "numIdMacAtCleanup")
      , numPicBullet: new C(le, "numPicBullet")
      , numPicBulletId: new C(le, "numPicBulletId")
      , numPr: new C(le, "numPr")
      , numRestart: new C(le, "numRestart")
      , numStart: new C(le, "numStart")
      , numStyleLink: new C(le, "numStyleLink")
      , _object: new C(le, "object")
      , odso: new C(le, "odso")
      , offsetFrom: new C(le, "offsetFrom")
      , oMath: new C(le, "oMath")
      , optimizeForBrowser: new C(le, "optimizeForBrowser")
      , orient: new C(le, "orient")
      , original: new C(le, "original")
      , other: new C(le, "other")
      , outline: new C(le, "outline")
      , outlineLvl: new C(le, "outlineLvl")
      , overflowPunct: new C(le, "overflowPunct")
      , p: new C(le, "p")
      , pageBreakBefore: new C(le, "pageBreakBefore")
      , panose1: new C(le, "panose1")
      , paperSrc: new C(le, "paperSrc")
      , pBdr: new C(le, "pBdr")
      , percent: new C(le, "percent")
      , permEnd: new C(le, "permEnd")
      , permStart: new C(le, "permStart")
      , personal: new C(le, "personal")
      , personalCompose: new C(le, "personalCompose")
      , personalReply: new C(le, "personalReply")
      , pgBorders: new C(le, "pgBorders")
      , pgMar: new C(le, "pgMar")
      , pgNum: new C(le, "pgNum")
      , pgNumType: new C(le, "pgNumType")
      , pgSz: new C(le, "pgSz")
      , pict: new C(le, "pict")
      , picture: new C(le, "picture")
      , pitch: new C(le, "pitch")
      , pixelsPerInch: new C(le, "pixelsPerInch")
      , placeholder: new C(le, "placeholder")
      , pos: new C(le, "pos")
      , position: new C(le, "position")
      , pPr: new C(le, "pPr")
      , pPrChange: new C(le, "pPrChange")
      , pPrDefault: new C(le, "pPrDefault")
      , prefixMappings: new C(le, "prefixMappings")
      , printBodyTextBeforeHeader: new C(le, "printBodyTextBeforeHeader")
      , printColBlack: new C(le, "printColBlack")
      , printerSettings: new C(le, "printerSettings")
      , printFormsData: new C(le, "printFormsData")
      , printFractionalCharacterWidth: new C(le, "printFractionalCharacterWidth")
      , printPostScriptOverText: new C(le, "printPostScriptOverText")
      , printTwoOnOne: new C(le, "printTwoOnOne")
      , proofErr: new C(le, "proofErr")
      , proofState: new C(le, "proofState")
      , pStyle: new C(le, "pStyle")
      , ptab: new C(le, "ptab")
      , qFormat: new C(le, "qFormat")
      , query: new C(le, "query")
      , r: new C(le, "r")
      , readModeInkLockDown: new C(le, "readModeInkLockDown")
      , recipientData: new C(le, "recipientData")
      , recommended: new C(le, "recommended")
      , relativeTo: new C(le, "relativeTo")
      , relyOnVML: new C(le, "relyOnVML")
      , removeDateAndTime: new C(le, "removeDateAndTime")
      , removePersonalInformation: new C(le, "removePersonalInformation")
      , restart: new C(le, "restart")
      , result: new C(le, "result")
      , revisionView: new C(le, "revisionView")
      , rFonts: new C(le, "rFonts")
      , right: new C(le, "right")
      , rightChars: new C(le, "rightChars")
      , rightFromText: new C(le, "rightFromText")
      , rPr: new C(le, "rPr")
      , rPrChange: new C(le, "rPrChange")
      , rPrDefault: new C(le, "rPrDefault")
      , rsid: new C(le, "rsid")
      , rsidDel: new C(le, "rsidDel")
      , rsidP: new C(le, "rsidP")
      , rsidR: new C(le, "rsidR")
      , rsidRDefault: new C(le, "rsidRDefault")
      , rsidRoot: new C(le, "rsidRoot")
      , rsidRPr: new C(le, "rsidRPr")
      , rsids: new C(le, "rsids")
      , rsidSect: new C(le, "rsidSect")
      , rsidTr: new C(le, "rsidTr")
      , rStyle: new C(le, "rStyle")
      , rt: new C(le, "rt")
      , rtl: new C(le, "rtl")
      , rtlGutter: new C(le, "rtlGutter")
      , ruby: new C(le, "ruby")
      , rubyAlign: new C(le, "rubyAlign")
      , rubyBase: new C(le, "rubyBase")
      , rubyPr: new C(le, "rubyPr")
      , salt: new C(le, "salt")
      , saveFormsData: new C(le, "saveFormsData")
      , saveInvalidXml: new C(le, "saveInvalidXml")
      , savePreviewPicture: new C(le, "savePreviewPicture")
      , saveSmartTagsAsXml: new C(le, "saveSmartTagsAsXml")
      , saveSubsetFonts: new C(le, "saveSubsetFonts")
      , saveThroughXslt: new C(le, "saveThroughXslt")
      , saveXmlDataOnly: new C(le, "saveXmlDataOnly")
      , scrollbar: new C(le, "scrollbar")
      , sdt: new C(le, "sdt")
      , sdtContent: new C(le, "sdtContent")
      , sdtEndPr: new C(le, "sdtEndPr")
      , sdtPr: new C(le, "sdtPr")
      , sectPr: new C(le, "sectPr")
      , sectPrChange: new C(le, "sectPrChange")
      , selectFldWithFirstOrLastChar: new C(le, "selectFldWithFirstOrLastChar")
      , semiHidden: new C(le, "semiHidden")
      , sep: new C(le, "sep")
      , separator: new C(le, "separator")
      , settings: new C(le, "settings")
      , shadow: new C(le, "shadow")
      , shapeDefaults: new C(le, "shapeDefaults")
      , shapeid: new C(le, "shapeid")
      , shapeLayoutLikeWW8: new C(le, "shapeLayoutLikeWW8")
      , shd: new C(le, "shd")
      , showBreaksInFrames: new C(le, "showBreaksInFrames")
      , showEnvelope: new C(le, "showEnvelope")
      , showingPlcHdr: new C(le, "showingPlcHdr")
      , showXMLTags: new C(le, "showXMLTags")
      , sig: new C(le, "sig")
      , size: new C(le, "size")
      , sizeAuto: new C(le, "sizeAuto")
      , smallCaps: new C(le, "smallCaps")
      , smartTag: new C(le, "smartTag")
      , smartTagPr: new C(le, "smartTagPr")
      , smartTagType: new C(le, "smartTagType")
      , snapToGrid: new C(le, "snapToGrid")
      , softHyphen: new C(le, "softHyphen")
      , solutionID: new C(le, "solutionID")
      , sourceFileName: new C(le, "sourceFileName")
      , space: new C(le, "space")
      , spaceForUL: new C(le, "spaceForUL")
      , spacing: new C(le, "spacing")
      , spacingInWholePoints: new C(le, "spacingInWholePoints")
      , specVanish: new C(le, "specVanish")
      , spelling: new C(le, "spelling")
      , splitPgBreakAndParaMark: new C(le, "splitPgBreakAndParaMark")
      , src: new C(le, "src")
      , start: new C(le, "start")
      , startOverride: new C(le, "startOverride")
      , statusText: new C(le, "statusText")
      , storeItemID: new C(le, "storeItemID")
      , storeMappedDataAs: new C(le, "storeMappedDataAs")
      , strictFirstAndLastChars: new C(le, "strictFirstAndLastChars")
      , strike: new C(le, "strike")
      , style: new C(le, "style")
      , styleId: new C(le, "styleId")
      , styleLink: new C(le, "styleLink")
      , styleLockQFSet: new C(le, "styleLockQFSet")
      , styleLockTheme: new C(le, "styleLockTheme")
      , stylePaneFormatFilter: new C(le, "stylePaneFormatFilter")
      , stylePaneSortMethod: new C(le, "stylePaneSortMethod")
      , styles: new C(le, "styles")
      , subDoc: new C(le, "subDoc")
      , subFontBySize: new C(le, "subFontBySize")
      , subsetted: new C(le, "subsetted")
      , suff: new C(le, "suff")
      , summaryLength: new C(le, "summaryLength")
      , suppressAutoHyphens: new C(le, "suppressAutoHyphens")
      , suppressBottomSpacing: new C(le, "suppressBottomSpacing")
      , suppressLineNumbers: new C(le, "suppressLineNumbers")
      , suppressOverlap: new C(le, "suppressOverlap")
      , suppressSpacingAtTopOfPage: new C(le, "suppressSpacingAtTopOfPage")
      , suppressSpBfAfterPgBrk: new C(le, "suppressSpBfAfterPgBrk")
      , suppressTopSpacing: new C(le, "suppressTopSpacing")
      , suppressTopSpacingWP: new C(le, "suppressTopSpacingWP")
      , swapBordersFacingPages: new C(le, "swapBordersFacingPages")
      , sym: new C(le, "sym")
      , sz: new C(le, "sz")
      , szCs: new C(le, "szCs")
      , t: new C(le, "t")
      , t1: new C(le, "t1")
      , t2: new C(le, "t2")
      , tab: new C(le, "tab")
      , table: new C(le, "table")
      , tabs: new C(le, "tabs")
      , tag: new C(le, "tag")
      , targetScreenSz: new C(le, "targetScreenSz")
      , tbl: new C(le, "tbl")
      , tblBorders: new C(le, "tblBorders")
      , tblCellMar: new C(le, "tblCellMar")
      , tblCellSpacing: new C(le, "tblCellSpacing")
      , tblGrid: new C(le, "tblGrid")
      , tblGridChange: new C(le, "tblGridChange")
      , tblHeader: new C(le, "tblHeader")
      , tblInd: new C(le, "tblInd")
      , tblLayout: new C(le, "tblLayout")
      , tblLook: new C(le, "tblLook")
      , tblOverlap: new C(le, "tblOverlap")
      , tblpPr: new C(le, "tblpPr")
      , tblPr: new C(le, "tblPr")
      , tblPrChange: new C(le, "tblPrChange")
      , tblPrEx: new C(le, "tblPrEx")
      , tblPrExChange: new C(le, "tblPrExChange")
      , tblpX: new C(le, "tblpX")
      , tblpXSpec: new C(le, "tblpXSpec")
      , tblpY: new C(le, "tblpY")
      , tblpYSpec: new C(le, "tblpYSpec")
      , tblStyle: new C(le, "tblStyle")
      , tblStyleColBandSize: new C(le, "tblStyleColBandSize")
      , tblStylePr: new C(le, "tblStylePr")
      , tblStyleRowBandSize: new C(le, "tblStyleRowBandSize")
      , tblW: new C(le, "tblW")
      , tc: new C(le, "tc")
      , tcBorders: new C(le, "tcBorders")
      , tcFitText: new C(le, "tcFitText")
      , tcMar: new C(le, "tcMar")
      , tcPr: new C(le, "tcPr")
      , tcPrChange: new C(le, "tcPrChange")
      , tcW: new C(le, "tcW")
      , temporary: new C(le, "temporary")
      , tentative: new C(le, "tentative")
      , text: new C(le, "text")
      , textAlignment: new C(le, "textAlignment")
      , textboxTightWrap: new C(le, "textboxTightWrap")
      , textDirection: new C(le, "textDirection")
      , textInput: new C(le, "textInput")
      , tgtFrame: new C(le, "tgtFrame")
      , themeColor: new C(le, "themeColor")
      , themeFill: new C(le, "themeFill")
      , themeFillShade: new C(le, "themeFillShade")
      , themeFillTint: new C(le, "themeFillTint")
      , themeFontLang: new C(le, "themeFontLang")
      , themeShade: new C(le, "themeShade")
      , themeTint: new C(le, "themeTint")
      , titlePg: new C(le, "titlePg")
      , tl2br: new C(le, "tl2br")
      , tmpl: new C(le, "tmpl")
      , tooltip: new C(le, "tooltip")
      , top: new C(le, "top")
      , topFromText: new C(le, "topFromText")
      , topLinePunct: new C(le, "topLinePunct")
      , tplc: new C(le, "tplc")
      , tr: new C(le, "tr")
      , tr2bl: new C(le, "tr2bl")
      , trackRevisions: new C(le, "trackRevisions")
      , trHeight: new C(le, "trHeight")
      , trPr: new C(le, "trPr")
      , trPrChange: new C(le, "trPrChange")
      , truncateFontHeightsLikeWP6: new C(le, "truncateFontHeightsLikeWP6")
      , txbxContent: new C(le, "txbxContent")
      , type: new C(le, "type")
      , types: new C(le, "types")
      , u: new C(le, "u")
      , udl: new C(le, "udl")
      , uiCompat97To2003: new C(le, "uiCompat97To2003")
      , uiPriority: new C(le, "uiPriority")
      , ulTrailSpace: new C(le, "ulTrailSpace")
      , underlineTabInNumList: new C(le, "underlineTabInNumList")
      , unhideWhenUsed: new C(le, "unhideWhenUsed")
      , updateFields: new C(le, "updateFields")
      , uri: new C(le, "uri")
      , url: new C(le, "url")
      , usb0: new C(le, "usb0")
      , usb1: new C(le, "usb1")
      , usb2: new C(le, "usb2")
      , usb3: new C(le, "usb3")
      , useAltKinsokuLineBreakRules: new C(le, "useAltKinsokuLineBreakRules")
      , useAnsiKerningPairs: new C(le, "useAnsiKerningPairs")
      , useFELayout: new C(le, "useFELayout")
      , useNormalStyleForList: new C(le, "useNormalStyleForList")
      , usePrinterMetrics: new C(le, "usePrinterMetrics")
      , useSingleBorderforContiguousCells: new C(le, "useSingleBorderforContiguousCells")
      , useWord2002TableStyleRules: new C(le, "useWord2002TableStyleRules")
      , useWord97LineBreakRules: new C(le, "useWord97LineBreakRules")
      , useXSLTWhenSaving: new C(le, "useXSLTWhenSaving")
      , val: new C(le, "val")
      , vAlign: new C(le, "vAlign")
      , value: new C(le, "value")
      , vAnchor: new C(le, "vAnchor")
      , vanish: new C(le, "vanish")
      , vendorID: new C(le, "vendorID")
      , vert: new C(le, "vert")
      , vertAlign: new C(le, "vertAlign")
      , vertAnchor: new C(le, "vertAnchor")
      , vertCompress: new C(le, "vertCompress")
      , view: new C(le, "view")
      , viewMergedData: new C(le, "viewMergedData")
      , vMerge: new C(le, "vMerge")
      , vMergeOrig: new C(le, "vMergeOrig")
      , vSpace: new C(le, "vSpace")
      , _w: new C(le, "w")
      , wAfter: new C(le, "wAfter")
      , wBefore: new C(le, "wBefore")
      , webHidden: new C(le, "webHidden")
      , webSettings: new C(le, "webSettings")
      , widowControl: new C(le, "widowControl")
      , wordWrap: new C(le, "wordWrap")
      , wpJustification: new C(le, "wpJustification")
      , wpSpaceWidth: new C(le, "wpSpaceWidth")
      , wrap: new C(le, "wrap")
      , wrapTrailSpaces: new C(le, "wrapTrailSpaces")
      , writeProtection: new C(le, "writeProtection")
      , x: new C(le, "x")
      , xAlign: new C(le, "xAlign")
      , xpath: new C(le, "xpath")
      , y: new C(le, "y")
      , yAlign: new C(le, "yAlign")
      , yearLong: new C(le, "yearLong")
      , yearShort: new C(le, "yearShort")
      , zoom: new C(le, "zoom")
      , zOrder: new C(le, "zOrder")
    };
    b.W;
    b.w10Ns = new k("urn:schemas-microsoft-com:office:word");
    var we = b.w10Ns;
    b.W10 = {
      anchorlock: new C(we, "anchorlock")
      , borderbottom: new C(we, "borderbottom")
      , borderleft: new C(we, "borderleft")
      , borderright: new C(we, "borderright")
      , bordertop: new C(we, "bordertop")
      , wrap: new C(we, "wrap")
    };
    b.W10;
    b.w14Ns = new k("http://schemas.microsoft.com/office/word/2010/wordml");
    var pe = b.w14Ns;
    b.W14 = {
      algn: new C(pe, "algn")
      , alpha: new C(pe, "alpha")
      , ang: new C(pe, "ang")
      , b: new C(pe, "b")
      , bevel: new C(pe, "bevel")
      , bevelB: new C(pe, "bevelB")
      , bevelT: new C(pe, "bevelT")
      , blurRad: new C(pe, "blurRad")
      , camera: new C(pe, "camera")
      , cap: new C(pe, "cap")
      , checkbox: new C(pe, "checkbox")
      , _checked: new C(pe, "checked")
      , checkedState: new C(pe, "checkedState")
      , cmpd: new C(pe, "cmpd")
      , cntxtAlts: new C(pe, "cntxtAlts")
      , cNvContentPartPr: new C(pe, "cNvContentPartPr")
      , conflictMode: new C(pe, "conflictMode")
      , contentPart: new C(pe, "contentPart")
      , contourClr: new C(pe, "contourClr")
      , contourW: new C(pe, "contourW")
      , defaultImageDpi: new C(pe, "defaultImageDpi")
      , dir: new C(pe, "dir")
      , discardImageEditingData: new C(pe, "discardImageEditingData")
      , dist: new C(pe, "dist")
      , docId: new C(pe, "docId")
      , editId: new C(pe, "editId")
      , enableOpenTypeKerning: new C(pe, "enableOpenTypeKerning")
      , endA: new C(pe, "endA")
      , endPos: new C(pe, "endPos")
      , entityPicker: new C(pe, "entityPicker")
      , extrusionClr: new C(pe, "extrusionClr")
      , extrusionH: new C(pe, "extrusionH")
      , fadeDir: new C(pe, "fadeDir")
      , fillToRect: new C(pe, "fillToRect")
      , font: new C(pe, "font")
      , glow: new C(pe, "glow")
      , gradFill: new C(pe, "gradFill")
      , gs: new C(pe, "gs")
      , gsLst: new C(pe, "gsLst")
      , h: new C(pe, "h")
      , hueMod: new C(pe, "hueMod")
      , id: new C(pe, "id")
      , kx: new C(pe, "kx")
      , ky: new C(pe, "ky")
      , l: new C(pe, "l")
      , lat: new C(pe, "lat")
      , ligatures: new C(pe, "ligatures")
      , lightRig: new C(pe, "lightRig")
      , lim: new C(pe, "lim")
      , lin: new C(pe, "lin")
      , lon: new C(pe, "lon")
      , lumMod: new C(pe, "lumMod")
      , lumOff: new C(pe, "lumOff")
      , miter: new C(pe, "miter")
      , noFill: new C(pe, "noFill")
      , numForm: new C(pe, "numForm")
      , numSpacing: new C(pe, "numSpacing")
      , nvContentPartPr: new C(pe, "nvContentPartPr")
      , paraId: new C(pe, "paraId")
      , path: new C(pe, "path")
      , pos: new C(pe, "pos")
      , props3d: new C(pe, "props3d")
      , prst: new C(pe, "prst")
      , prstDash: new C(pe, "prstDash")
      , prstMaterial: new C(pe, "prstMaterial")
      , r: new C(pe, "r")
      , rad: new C(pe, "rad")
      , reflection: new C(pe, "reflection")
      , rev: new C(pe, "rev")
      , rig: new C(pe, "rig")
      , rot: new C(pe, "rot")
      , round: new C(pe, "round")
      , sat: new C(pe, "sat")
      , satMod: new C(pe, "satMod")
      , satOff: new C(pe, "satOff")
      , scaled: new C(pe, "scaled")
      , scene3d: new C(pe, "scene3d")
      , schemeClr: new C(pe, "schemeClr")
      , shade: new C(pe, "shade")
      , shadow: new C(pe, "shadow")
      , solidFill: new C(pe, "solidFill")
      , srgbClr: new C(pe, "srgbClr")
      , stA: new C(pe, "stA")
      , stPos: new C(pe, "stPos")
      , styleSet: new C(pe, "styleSet")
      , stylisticSets: new C(pe, "stylisticSets")
      , sx: new C(pe, "sx")
      , sy: new C(pe, "sy")
      , t: new C(pe, "t")
      , textFill: new C(pe, "textFill")
      , textId: new C(pe, "textId")
      , textOutline: new C(pe, "textOutline")
      , tint: new C(pe, "tint")
      , uncheckedState: new C(pe, "uncheckedState")
      , val: new C(pe, "val")
      , w: new C(pe, "w")
      , wProps3d: new C(pe, "wProps3d")
      , wScene3d: new C(pe, "wScene3d")
      , wShadow: new C(pe, "wShadow")
      , wTextFill: new C(pe, "wTextFill")
      , wTextOutline: new C(pe, "wTextOutline")
      , xfrm: new C(pe, "xfrm")
    };
    b.W14;
    b.w3digsigNs = new k("http://www.w3.org/2000/09/xmldsig#");
    var ce = b.w3digsigNs;
    b.W3DIGSIG = {
      CanonicalizationMethod: new C(ce, "CanonicalizationMethod")
      , DigestMethod: new C(ce, "DigestMethod")
      , DigestValue: new C(ce, "DigestValue")
      , Exponent: new C(ce, "Exponent")
      , KeyInfo: new C(ce, "KeyInfo")
      , KeyValue: new C(ce, "KeyValue")
      , Manifest: new C(ce, "Manifest")
      , Modulus: new C(ce, "Modulus")
      , Object: new C(ce, "Object")
      , Reference: new C(ce, "Reference")
      , RSAKeyValue: new C(ce, "RSAKeyValue")
      , Signature: new C(ce, "Signature")
      , SignatureMethod: new C(ce, "SignatureMethod")
      , SignatureProperties: new C(ce, "SignatureProperties")
      , SignatureProperty: new C(ce, "SignatureProperty")
      , SignatureValue: new C(ce, "SignatureValue")
      , SignedInfo: new C(ce, "SignedInfo")
      , Transform: new C(ce, "Transform")
      , Transforms: new C(ce, "Transforms")
      , X509Certificate: new C(ce, "X509Certificate")
      , X509Data: new C(ce, "X509Data")
      , X509IssuerName: new C(ce, "X509IssuerName")
      , X509SerialNumber: new C(ce, "X509SerialNumber")
    };
    b.W3DIGSIG;
    b.wpNs = new k("http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing");
    var de = b.wpNs;
    b.WP = {
      align: new C(de, "align")
      , anchor: new C(de, "anchor")
      , cNvGraphicFramePr: new C(de, "cNvGraphicFramePr")
      , docPr: new C(de, "docPr")
      , effectExtent: new C(de, "effectExtent")
      , extent: new C(de, "extent")
      , inline: new C(de, "inline")
      , lineTo: new C(de, "lineTo")
      , positionH: new C(de, "positionH")
      , positionV: new C(de, "positionV")
      , posOffset: new C(de, "posOffset")
      , simplePos: new C(de, "simplePos")
      , start: new C(de, "start")
      , wrapNone: new C(de, "wrapNone")
      , wrapPolygon: new C(de, "wrapPolygon")
      , wrapSquare: new C(de, "wrapSquare")
      , wrapThrough: new C(de, "wrapThrough")
      , wrapTight: new C(de, "wrapTight")
      , wrapTopAndBottom: new C(de, "wrapTopAndBottom")
    };
    b.WP;
    b.wp14Ns = new k("http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing");
    var me = b.wp14Ns;
    b.WP14 = {
      editId: new C(me, "editId")
      , pctHeight: new C(me, "pctHeight")
      , pctPosVOffset: new C(me, "pctPosVOffset")
      , pctWidth: new C(me, "pctWidth")
      , sizeRelH: new C(me, "sizeRelH")
      , sizeRelV: new C(me, "sizeRelV")
    };
    b.WP14;
    b.wpsNs = new k("http://schemas.microsoft.com/office/word/2010/wordprocessingShape");
    var ue = b.wpsNs;
    b.WPS = {
      altTxbx: new C(ue, "altTxbx")
      , bodyPr: new C(ue, "bodyPr")
      , cNvSpPr: new C(ue, "cNvSpPr")
      , spPr: new C(ue, "spPr")
      , style: new C(ue, "style")
      , textbox: new C(ue, "textbox")
      , txbx: new C(ue, "txbx")
      , wsp: new C(ue, "wsp")
    };
    b.WPS;
    b.xNs = new k("urn:schemas-microsoft-com:office:excel");
    var he = b.xNs;
    b.X = {
      Anchor: new C(he, "Anchor")
      , AutoFill: new C(he, "AutoFill")
      , ClientData: new C(he, "ClientData")
      , Column: new C(he, "Column")
      , MoveWithCells: new C(he, "MoveWithCells")
      , Row: new C(he, "Row")
      , SizeWithCells: new C(he, "SizeWithCells")
    };
    b.X;
    b.xdrNs = new k("http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing");
    var fe = b.xdrNs;
    b.XDR = {
      absoluteAnchor: new C(fe, "absoluteAnchor")
      , blipFill: new C(fe, "blipFill")
      , clientData: new C(fe, "clientData")
      , cNvCxnSpPr: new C(fe, "cNvCxnSpPr")
      , cNvGraphicFramePr: new C(fe, "cNvGraphicFramePr")
      , cNvGrpSpPr: new C(fe, "cNvGrpSpPr")
      , cNvPicPr: new C(fe, "cNvPicPr")
      , cNvPr: new C(fe, "cNvPr")
      , cNvSpPr: new C(fe, "cNvSpPr")
      , col: new C(fe, "col")
      , colOff: new C(fe, "colOff")
      , contentPart: new C(fe, "contentPart")
      , cxnSp: new C(fe, "cxnSp")
      , ext: new C(fe, "ext")
      , from: new C(fe, "from")
      , graphicFrame: new C(fe, "graphicFrame")
      , grpSp: new C(fe, "grpSp")
      , grpSpPr: new C(fe, "grpSpPr")
      , nvCxnSpPr: new C(fe, "nvCxnSpPr")
      , nvGraphicFramePr: new C(fe, "nvGraphicFramePr")
      , nvGrpSpPr: new C(fe, "nvGrpSpPr")
      , nvPicPr: new C(fe, "nvPicPr")
      , nvSpPr: new C(fe, "nvSpPr")
      , oneCellAnchor: new C(fe, "oneCellAnchor")
      , pic: new C(fe, "pic")
      , pos: new C(fe, "pos")
      , row: new C(fe, "row")
      , rowOff: new C(fe, "rowOff")
      , sp: new C(fe, "sp")
      , spPr: new C(fe, "spPr")
      , style: new C(fe, "style")
      , to: new C(fe, "to")
      , twoCellAnchor: new C(fe, "twoCellAnchor")
      , txBody: new C(fe, "txBody")
      , wsDr: new C(fe, "wsDr")
      , xfrm: new C(fe, "xfrm")
    };
    b.XDR;
    b.xdr14Ns = new k("http://schemas.microsoft.com/office/excel/2010/spreadsheetDrawing");
    var ge = b.xdr14Ns;
    b.XDR14 = {
      cNvContentPartPr: new C(ge, "cNvContentPartPr")
      , cNvPr: new C(ge, "cNvPr")
      , nvContentPartPr: new C(ge, "nvContentPartPr")
      , nvPr: new C(ge, "nvPr")
      , xfrm: new C(ge, "xfrm")
    };
    b.XDR14;
    b.xmNs = new k("http://schemas.microsoft.com/office/excel/2006/main");
    var ye = b.xmNs;
    b.XM = {
      f: new C(ye, "f")
      , _ref: new C(ye, "ref")
      , sqref: new C(ye, "sqref")
    };
    b.XM;
    b.xsiNs = new k("http://www.w3.org/2001/XMLSchema-instance");
    var be = b.xsiNs;
    b.XSI = {
      type: new C(be, "type")
    };
    b.XSI;
    b.ctNs = new k("http://schemas.openxmlformats.org/package/2006/content-types");
    var ve = b.ctNs;
    b.CT = {
      Override: new C(ve, "Override")
      , Default: new C(ve, "Default")
      , Types: new C(ve, "Types")
    };
    var Pe = b.CT;
    b.pkgRelNs = new k("http://schemas.openxmlformats.org/package/2006/relationships");
    var xe = b.pkgRelNs;
    b.PKGREL = {
      Relationships: new C(xe, "Relationships")
      , Relationship: new C(xe, "Relationship")
    };
    var Se = b.PKGREL;
    b.flatOpcPkgNs = new k("http://schemas.microsoft.com/office/2006/xmlPackage");
    var Te = b.flatOpcPkgNs;
    b.FLATOPC = {
      _package: new C(Te + "package")
      , part: new C(Te + "part")
      , name: new C(Te + "name")
      , contentType: new C(Te + "contentType")
      , padding: new C(Te + "padding")
      , xmlData: new C(Te + "xmlData")
      , binaryData: new C(Te + "binaryData")
      , compression: new C(Te + "compression")
    };
    var Ce = b.FLATOPC;
    return b
  }
  if ("function" == typeof define && define.amd) define("openxml", ["linq", "ltxml", "ltxml-extensions"], function (e, t, r) {
    var a = n(e, t, r);
    return a
  });
  else if ("undefined" != typeof module && module.exports) {
    var t = n(Enumerable, Ltxml, XEnumerable);
    module.exports = t
  } else {
    var t = n(Enumerable, Ltxml, XEnumerable);
    e.openXml = t
  }
}(this);
