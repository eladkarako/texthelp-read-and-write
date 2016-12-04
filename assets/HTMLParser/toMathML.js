MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js", function () {
  var t = MathJax.ElementJax.mml;
  SETTINGS = MathJax.Hub.config.menuSettings, t.mbase.Augment({
    toMathML: function (t) {
      var a = this.inferred && this.parent.inferRow;
      null == t && (t = "");
      var h = this.type
        , i = this.toMathMLattributes();
      if ("mspace" === h) return t + "<" + h + i + " />";
      for (var s = [], e = this.isToken ? "" : t + (a ? "" : "  "), n = 0, r = this.data.length; n < r; n++) this.data[n] ? s.push(this.data[n].toMathML(e)) : this.isToken || this.isChars || s.push(e + "<mrow />");
      return this.isToken ? t + "<" + h + i + ">" + s.join("") + "</" + h + ">" : a ? s.join("\n") : 0 === s.length || 1 === s.length && "" === s[0] ? t + "<" + h + i + " />" : t + "<" + h + i + ">\n" + s.join("\n") + "\n" + t + "</" + h + ">"
    }
    , toMathMLattributes: function () {
      var a = []
        , h = this.defaults
        , i = this.attrNames || t.copyAttributeNames
        , s = t.skipAttributes;
      if ("math" !== this.type || this.attr && this.attr.xmlns || a.push('xmlns="http://www.w3.org/1998/Math/MathML"'), !this.attrNames) {
        "mstyle" === this.type && (h = t.math.prototype.defaults);
        for (var e in h)
          if (!s[e] && h.hasOwnProperty(e)) {
            var n = "open" === e || "close" === e || "form" === e;
            if (null != this[e] && (n || this[e] !== h[e])) {
              var r = this[e];
              delete this[e], (n || this.Get(e) !== r) && a.push(e + '="' + this.toMathMLattribute(r) + '"'), this[e] = r
            }
          }
      }
      for (var o = 0, u = i.length; o < u; o++) "class" !== i[o] && (r = (this.attr || {})[i[o]], null == r && (r = this[i[o]]), null != r && a.push(i[o] + '="' + this.toMathMLquote(r) + '"'));
      return this.toMathMLclass(a), a.length ? " " + a.join(" ") : ""
    }
    , toMathMLclass: function (a) {
      var h = [];
      if (this["class"] && h.push(this["class"]), this.isa(t.TeXAtom) && SETTINGS.texHints) {
        var i = ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"][this.texClass];
        i && h.push("MJX-TeXAtom-" + i)
      }
      this.mathvariant && this.toMathMLvariants[this.mathvariant] && h.push("MJX" + this.mathvariant), this.variantForm && h.push("MJX-variant"), h.length && a.unshift('class="' + h.join(" ") + '"')
    }
    , toMathMLattribute: function (t) {
      return "string" == typeof t && t.replace(/ /g, "")
        .match(/^(([-+])?(\d+(\.\d*)?|\.\d+))mu$/) ? RegExp.$2 + (1 / 18 * RegExp.$3)
        .toFixed(3)
        .replace(/\.?0+$/, "") + "em" : this.toMathMLvariants[t] ? this.toMathMLvariants[t] : this.toMathMLquote(t)
    }
    , toMathMLvariants: {
      "-tex-caligraphic": t.VARIANT.SCRIPT
      , "-tex-caligraphic-bold": t.VARIANT.BOLDSCRIPT
      , "-tex-oldstyle": t.VARIANT.NORMAL
      , "-tex-oldstyle-bold": t.VARIANT.BOLD
      , "-tex-mathit": t.VARIANT.ITALIC
    }
    , toMathMLquote: function (t) {
      t = String(t)
        .split("");
      for (var a = 0, h = t.length; a < h; a++) {
        var i = t[a].charCodeAt(0);
        if (i <= 55295 || 57344 <= i)
          if (i < 32 || i > 126) t[a] = "&#x" + i.toString(16)
            .toUpperCase() + ";";
          else {
            var s = {
              "&": "&amp;"
              , "<": "&lt;"
              , ">": "&gt;"
              , '"': "&quot;"
            }[t[a]];
            s && (t[a] = s)
          }
        else if (a + 1 < h) {
          var e = t[a + 1].charCodeAt(0)
            , n = (i - 55296 << 10) + (e - 56320) + 65536;
          t[a] = "&#x" + n.toString(16)
            .toUpperCase() + ";", t[a + 1] = "", a++
        } else t[a] = ""
      }
      return t.join("")
    }
  }), t.msubsup.Augment({
    toMathML: function (t) {
      var a = this.type;
      null == this.data[this.sup] && (a = "msub"), null == this.data[this.sub] && (a = "msup");
      var h = this.toMathMLattributes();
      delete this.data[0].inferred;
      for (var i = [], s = 0, e = this.data.length; s < e; s++) this.data[s] && i.push(this.data[s].toMathML(t + "  "));
      return t + "<" + a + h + ">\n" + i.join("\n") + "\n" + t + "</" + a + ">"
    }
  }), t.munderover.Augment({
    toMathML: function (t) {
      var a = this.type;
      null == this.data[this.under] && (a = "mover"), null == this.data[this.over] && (a = "munder");
      var h = this.toMathMLattributes();
      delete this.data[0].inferred;
      for (var i = [], s = 0, e = this.data.length; s < e; s++) this.data[s] && i.push(this.data[s].toMathML(t + "  "));
      return t + "<" + a + h + ">\n" + i.join("\n") + "\n" + t + "</" + a + ">"
    }
  }), t.TeXAtom.Augment({
    toMathML: function (t) {
      var a = this.toMathMLattributes();
      return a || 1 !== this.data[0].data.length ? t + "<mrow" + a + ">\n" + this.data[0].toMathML(t + "  ") + "\n" + t + "</mrow>" : t.substr(2) + this.data[0].toMathML(t)
    }
  }), t.chars.Augment({
    toMathML: function (t) {
      return (t || "") + this.toMathMLquote(this.toString())
    }
  }), t.entity.Augment({
    toMathML: function (t) {
      return (t || "") + "&" + this.data[0] + ";<!-- " + this.toString() + " -->"
    }
  }), t.xml.Augment({
    toMathML: function (t) {
      return (t || "") + this.toString()
    }
  }), MathJax.Hub.Register.StartupHook("TeX mathchoice Ready", function () {
    t.TeXmathchoice.Augment({
      toMathML: function (t) {
        return this.Core()
          .toMathML(t)
      }
    })
  }), MathJax.Hub.Startup.signal.Post("toMathML Ready")
}), MathJax.Ajax.loadComplete("[MathJax]/extensions/toMathML.js");
