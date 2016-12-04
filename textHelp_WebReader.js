PLOVR_MODULE_INFO = {
  "FixedToolbar": ["WebReader"]
  , "WebReader": []
  , "GoogleSlidesParser": ["WebReaderAPI"]
  , "Configuration": ["WebReader"]
  , "MSWordOnlineParser": ["WebReaderAPI"]
  , "HTMLParser": ["WebReaderAPI"]
  , "WebReaderAPI": ["WebReader"]
  , "GDocsParser": ["WebReaderAPI"]
};
PLOVR_MODULE_URIS = {
  "FixedToolbar": "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_FixedToolbar.js"
  , "WebReader": "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_WebReader.js"
  , "GoogleSlidesParser": "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_GoogleSlidesParser.js"
  , "Configuration": "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_Configuration.js"
  , "MSWordOnlineParser": "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_MSWordOnlineParser.js"
  , "HTMLParser": "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_HTMLParser.js"
  , "WebReaderAPI": "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_WebReaderAPI.js"
  , "GDocsParser": "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_GDocsParser.js"
};
PLOVR_MODULE_USE_DEBUG_MODE = false;
__textHelp__ = {};
(function (z) {
  var aa = function (a) {
      return function () {
        return ba[a].apply(this, arguments)
      }
    }
    , ba, zd, pa, qa, wa;
  z.ca = function (a, b) {
    return ba[a] = b
  };
  z.da = function (a) {
    return void 0 !== a
  };
  var ea = function (a) {
    a = a.split(".");
    for (var b = z.h, c; c = a.shift();)
      if (null != b[c]) b = b[c];
      else return null;
    return b
  };
  var fa = function () {};
  z.ga = function (a) {
    a.a = function () {
      return a.Km ? a.Km : a.Km = new a
    }
  };
  var ia = function (a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
  };
  z.ja = function (a) {
    return "array" == ia(a)
  };
  z.ka = function (a) {
    var b = ia(a);
    return "array" == b || "object" == b && "number" == typeof a.length
  };
  z.r = function (a) {
    return "string" == typeof a
  };
  var la = function (a) {
    return "number" == typeof a
  };
  z.ma = function (a) {
    return "function" == ia(a)
  };
  var na = function (a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
  };
  var oa = function (a) {
    return a[pa] || (a[pa] = ++qa)
  };
  var ra = function (a, b, c) {
    return a.call.apply(a.bind, arguments)
  };
  var sa = function (a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  };
  z.ta = function (a, b, c) {
    z.ta = Function.prototype.bind && -1 != Function.prototype.bind.toString()
      .indexOf("native code") ? ra : sa;
    return z.ta.apply(null, arguments)
  };
  var ua = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b)
    }
  };
  var va = function (a) {
    if (z.h.execScript) z.h.execScript(a, "JavaScript");
    else if (z.h.eval)
      if (null == wa && (z.h.eval("var _et_ = 1;"), "undefined" != typeof z.h._et_ ? (delete z.h._et_, wa = !0) : wa = !1), wa) z.h.eval(a);
      else {
        var b = z.h.document
          , c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c)
      }
    else throw Error("goog.globalEval not available");
  };
  z.u = function (a, b) {
    var c = a.split(".")
      , d = z.h;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());) !c.length && z.da(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
  };
  z.w = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.g = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.ct = function (a, c, g) {
      return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
  };
  var xa = function (a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0
  };
  var za = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  };
  var Aa = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Aa);
    else {
      var b = Error()
        .stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  z.Ba = function (a, b) {
    return 0 == a.lastIndexOf(b, 0)
  };
  var Ca = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
  };
  var Ea = function (a) {
    return a.replace(/[\t\r\n ]+/g, " ")
      .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
  };
  z.Fa = function (a) {
    if (!Ga.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ha, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ia, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ja, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ka, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(La, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ma, "&#0;"));
    return a
  };
  z.Na = function (a, b) {
    return -1 != a.indexOf(b)
  };
  var Pa = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  };
  var Qa = function (a) {
    return String(a)
      .replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
      })
  };
  var Ra = function (a) {
    var b = z.r(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
      .replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
      return b + e.toUpperCase()
    })
  };
  var Sa = function (a, b) {
    b.unshift(a);
    Aa.call(this, Ca.apply(null, b));
    b.shift()
  };
  var Ta = function (a, b) {
    throw new Sa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  };
  var Ua = function (a) {
    return function () {
      throw Error(a);
    }
  };
  var Va = function (a) {
    var b;
    a: {
      b = Wa;
      for (var c = a.length, d = z.r(a) ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a
        }
      b = -1
    }
    return 0 > b ? null : z.r(a) ? a.charAt(b) : a[b]
  };
  z.Xa = function (a, b) {
    return 0 <= (0, z.Ya)(a, b)
  };
  var Za = function (a, b) {
    z.Xa(a, b) || a.push(b)
  };
  z.$a = function (a, b) {
    var c = (0, z.Ya)(a, b)
      , d;
    (d = 0 <= c) && z.ab.splice.call(a, c, 1);
    return d
  };
  z.bb = function (a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  };
  z.cb = function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c]
        , e;
      if (z.ja(d) || (e = z.ka(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
      else if (e)
        for (var g = a.length, k = d.length, l = 0; l < k; l++) a[g + l] = d[l];
      else a.push(d)
    }
  };
  z.db = function (a, b, c, d) {
    z.ab.splice.apply(a, eb(arguments, 1))
  };
  var eb = function (a, b, c) {
    return 2 >= arguments.length ? z.ab.slice.call(a, b) : z.ab.slice.call(a, b, c)
  };
  var fb = function (a, b) {
    for (var c = b || a, d = {}, e = 0, g = 0; g < a.length;) {
      var k = a[g++]
        , l = na(k) ? "o" + oa(k) : (typeof k)
        .charAt(0) + k;
      Object.prototype.hasOwnProperty.call(d, l) || (d[l] = !0, c[e++] = k)
    }
    c.length = e
  };
  z.gb = function (a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  };
  var hb = function (a) {
    var b = []
      , c = 0
      , d;
    for (d in a) b[c++] = a[d];
    return b
  };
  var ib = function (a) {
    var b = []
      , c = 0
      , d;
    for (d in a) b[c++] = d;
    return b
  };
  var jb = function (a, b, c) {
    if (b in a) throw Error('The object already contains the key "' + b + '"');
    a[b] = c
  };
  z.kb = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var g = 0; g < lb.length; g++) c = lb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  };
  var mb = function (a) {
    var b = arguments.length;
    if (1 == b && z.ja(arguments[0])) return mb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c
  };
  var ob = function (a) {
    z.h.setTimeout(function () {
      throw a;
    }, 0)
  };
  var pb = function () {
    var a = z.h.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function () {
      var a = window.document.createElement("iframe");
      a.style.display = "none";
      a.src = "";
      window.document.documentElement.appendChild(a);
      var b = a.contentWindow
        , a = b.document;
      a.open();
      a.write("");
      a.close();
      var c = "callImmediate" + Math.random()
        , d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host
        , a = (0, z.ta)(function (a) {
          if (a.origin == d || a.data ==
            c) this.port1.onmessage()
        }, this);
      b.addEventListener("message", a, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function () {
          b.postMessage(c, d)
        }
      }
    });
    if ("undefined" !== typeof a && !z.Na(qb, "Trident") && !z.Na(qb, "MSIE")) {
      var b = new a
        , c = {}
        , d = c;
      b.port1.onmessage = function () {
        c = c.next;
        var a = c.cm;
        c.cm = null;
        a()
      };
      return function (a) {
        d.next = {
          cm: a
        };
        d = d.next;
        b.port2.postMessage(0)
      }
    }
    return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("script") ? function (a) {
      var b = window.document.createElement("script");
      b.onreadystatechange = function () {
        b.onreadystatechange = null;
        b.parentNode.removeChild(b);
        b = null;
        a();
        a = null
      };
      window.document.documentElement.appendChild(b)
    } : function (a) {
      z.h.setTimeout(a, 0)
    }
  };
  var rb = function (a, b) {
    sb || tb();
    ub || (sb(), ub = !0);
    vb.push(new wb(a, b))
  };
  var tb = function () {
    if (z.h.Promise && z.h.Promise.resolve) {
      var a = z.h.Promise.resolve();
      sb = function () {
        a.then(xb)
      }
    } else sb = function () {
      var a = xb;
      !z.ma(z.h.setImmediate) || z.h.Window && z.h.Window.prototype.setImmediate == z.h.setImmediate ? (yb || (yb = pb()), yb(a)) : z.h.setImmediate(a)
    }
  };
  var xb = function () {
    for (; vb.length;) {
      var a = vb;
      vb = [];
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        try {
          c.Xo.call(c.scope)
        } catch (d) {
          ob(d)
        }
      }
    }
    ub = !1
  };
  var wb = function (a, b) {
    this.Xo = a;
    this.scope = b
  };
  var zb = function (a, b) {
    this.L = Ab;
    this.Md = void 0;
    this.cc = this.V = null;
    this.Ei = this.nk = !1;
    try {
      var c = this;
      a.call(b, function (a) {
        Bb(c, Cb, a)
      }, function (a) {
        if (!(a instanceof Db)) try {
          if (a instanceof Error) throw a;
          throw Error("Promise rejected.");
        } catch (b) {}
        Bb(c, Eb, a)
      })
    } catch (d) {
      Bb(this, Eb, d)
    }
  };
  var Fb = function (a, b) {
    if (a.L == Ab)
      if (a.V) {
        var c = a.V;
        if (c.cc) {
          for (var d = 0, e = -1, g = 0, k; k = c.cc[g]; g++)
            if (k = k.ci)
              if (d++, k == a && (e = g), 0 <= e && 1 < d) break;
          0 <= e && (c.L == Ab && 1 == d ? Fb(c, b) : (d = c.cc.splice(e, 1)[0], Eb == Cb ? d.ll(b) : (Gb(c), d.rl(b))))
        }
      } else Bb(a, Eb, b)
  };
  var Hb = function (a, b) {
    a.cc && a.cc.length || a.L != Cb && a.L != Eb || Ib(a);
    a.cc || (a.cc = []);
    a.cc.push(b)
  };
  var Jb = function (a, b, c, d) {
    var e = {
      ci: null
      , ll: null
      , rl: null
    };
    e.ci = new zb(function (a, k) {
      e.ll = b ? function (c) {
        try {
          var e = b.call(d, c);
          a(e)
        } catch (n) {
          k(n)
        }
      } : a;
      e.rl = c ? function (b) {
        try {
          var e = c.call(d, b);
          !z.da(e) && b instanceof Db ? k(b) : a(e)
        } catch (n) {
          k(n)
        }
      } : k
    });
    e.ci.V = a;
    Hb(a, e);
    return e.ci
  };
  var Bb = function (a, b, c) {
    if (a.L == Ab) {
      if (a == c) b = Eb, c = new TypeError("Promise cannot resolve to itself");
      else {
        if (za(c)) {
          a.L = 1;
          c.then(a.lo, a.mo, a);
          return
        }
        if (na(c)) try {
          var d = c.then;
          if (z.ma(d)) {
            Kb(a, c, d);
            return
          }
        } catch (e) {
          b = Eb, c = e
        }
      }
      a.Md = c;
      a.L = b;
      Ib(a);
      b != Eb || c instanceof Db || Lb(a, c)
    }
  };
  var Kb = function (a, b, c) {
    function d(b) {
      g || (g = !0, a.mo(b))
    }

    function e(b) {
      g || (g = !0, a.lo(b))
    }
    a.L = 1;
    var g = !1;
    try {
      c.call(b, e, d)
    } catch (k) {
      d(k)
    }
  };
  var Ib = function (a) {
    a.nk || (a.nk = !0, rb(a.ri, a))
  };
  var Gb = function (a) {
    for (; a && a.Ei; a = a.V) a.Ei = !1
  };
  var Lb = function (a, b) {
    a.Ei = !0;
    rb(function () {
      a.Ei && Mb.call(null, b)
    })
  };
  var Db = function (a) {
    Aa.call(this, a)
  };
  var Nb = function () {
    0 != Ob && (Pb[oa(this)] = this);
    this.td = this.td;
    this.jf = this.jf
  };
  var Qb = function (a) {
    a && "function" == typeof a.U && a.U()
  };
  var Rb = function (a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      z.ka(d) ? Rb.apply(null, d) : Qb(d)
    }
  };
  var Sb = function () {
    return z.h.navigator || null
  };
  var Tb = function () {
    var a = z.h.document;
    return a ? a.documentMode : void 0
  };
  z.A = function (a) {
    var b;
    if (!(b = Ub[a])) {
      b = 0;
      for (var c = (0, z.Vb)(String(Wb))
          .split("."), d = (0, z.Vb)(String(a))
          .split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
        var k = c[g] || ""
          , l = d[g] || ""
          , m = RegExp("(\\d*)(\\D*)", "g")
          , n = RegExp("(\\d*)(\\D*)", "g");
        do {
          var p = m.exec(k) || ["", "", ""]
            , q = n.exec(l) || ["", "", ""];
          if (0 == p[0].length && 0 == q[0].length) break;
          b = Pa(0 == p[1].length ? 0 : (0, window.parseInt)(p[1], 10), 0 == q[1].length ? 0 : (0, window.parseInt)(q[1], 10)) || Pa(0 == p[2].length, 0 == q[2].length) || Pa(p[2], q[2])
        } while (0 ==
          b)
      }
      b = Ub[a] = 0 <= b
    }
    return b
  };
  var Xb = function (a) {
    return z.B && Yb >= a
  };
  z.Zb = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.nf = !1;
    this.Nn = !0
  };
  var $b = function (a) {
    a.preventDefault()
  };
  var ac = function (a) {
    ac[" "](a);
    return a
  };
  z.bc = function (a, b) {
    z.Zb.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.yl = !1;
    this.Sa = null;
    a && cc(this, a, b)
  };
  var cc = function (a, b, c) {
    var d = a.type = b.type;
    a.target = b.target || b.srcElement;
    a.currentTarget = c;
    if (c = b.relatedTarget) {
      if (z.dc) {
        var e;
        a: {
          try {
            ac(c.nodeName);
            e = !0;
            break a
          } catch (g) {}
          e = !1
        }
        e || (c = null)
      }
    } else "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
    a.relatedTarget = c;
    a.offsetX = z.E || void 0 !== b.offsetX ? b.offsetX : b.layerX;
    a.offsetY = z.E || void 0 !== b.offsetY ? b.offsetY : b.layerY;
    a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
    a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
    a.screenX = b.screenX || 0;
    a.screenY =
      b.screenY || 0;
    a.button = b.button;
    a.keyCode = b.keyCode || 0;
    a.charCode = b.charCode || ("keypress" == d ? b.keyCode : 0);
    a.ctrlKey = b.ctrlKey;
    a.altKey = b.altKey;
    a.shiftKey = b.shiftKey;
    a.metaKey = b.metaKey;
    a.yl = ec ? b.metaKey : b.ctrlKey;
    a.state = b.state;
    a.Sa = b;
    b.defaultPrevented && a.preventDefault()
  };
  var fc = function (a) {
    return (gc ? 0 == a.Sa.button : "click" == a.type ? !0 : !!(a.Sa.button & hc[0])) && !(z.E && ec && a.ctrlKey)
  };
  var ic = function (a) {
    return !(!a || !a[jc])
  };
  var kc = function (a, b, c, d, e) {
    this.Ze = a;
    this.Cj = null;
    this.src = b;
    this.type = c;
    this.bi = !!d;
    this.Ji = e;
    this.key = ++lc;
    this.$f = this.$h = !1
  };
  var mc = function (a) {
    a.$f = !0;
    a.Ze = null;
    a.Cj = null;
    a.src = null;
    a.Ji = null
  };
  var nc = function (a) {
    this.src = a;
    this.rb = {};
    this.Rh = 0
  };
  var oc = function (a, b) {
    var c = b.type;
    if (!(c in a.rb)) return !1;
    var d = z.$a(a.rb[c], b);
    d && (mc(b), 0 == a.rb[c].length && (delete a.rb[c], a.Rh--));
    return d
  };
  var pc = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var g = a[e];
      if (!g.$f && g.Ze == b && g.bi == !!c && g.Ji == d) return e
    }
    return -1
  };
  z.F = function (a, b, c, d, e) {
    if (z.ja(b)) {
      for (var g = 0; g < b.length; g++) z.F(a, b[g], c, d, e);
      return null
    }
    c = qc(c);
    return ic(a) ? a.n(b, c, d, e) : rc(a, b, c, !1, d, e)
  };
  var rc = function (a, b, c, d, e, g) {
    if (!b) throw Error("Invalid event type");
    var k = !!e
      , l = sc(a);
    l || (a[tc] = l = new nc(a));
    c = l.add(b, c, d, e, g);
    if (c.Cj) return c;
    d = uc();
    c.Cj = d;
    d.src = a;
    d.Ze = c;
    a.addEventListener ? a.addEventListener(b.toString(), d, k) : a.attachEvent(vc(b.toString()), d);
    wc++;
    return c
  };
  var uc = function () {
    var a = xc
      , b = yc ? function (c) {
        return a.call(b.src, b.Ze, c)
      } : function (c) {
        c = a.call(b.src, b.Ze, c);
        if (!c) return c
      };
    return b
  };
  var zc = function (a, b, c, d, e) {
    if (z.ja(b)) {
      for (var g = 0; g < b.length; g++) zc(a, b[g], c, d, e);
      return null
    }
    c = qc(c);
    return ic(a) ? a.Rm(b, c, d, e) : rc(a, b, c, !0, d, e)
  };
  var Ac = function (a, b, c, d, e) {
    if (z.ja(b))
      for (var g = 0; g < b.length; g++) Ac(a, b[g], c, d, e);
    else c = qc(c), ic(a) ? a.Xa(b, c, d, e) : a && (a = sc(a)) && (b = a.Hg(b, c, !!d, e)) && Bc(b)
  };
  var Bc = function (a) {
    if (la(a) || !a || a.$f) return !1;
    var b = a.src;
    if (ic(b)) return oc(b.vd, a);
    var c = a.type
      , d = a.Cj;
    b.removeEventListener ? b.removeEventListener(c, d, a.bi) : b.detachEvent && b.detachEvent(vc(c), d);
    wc--;
    (c = sc(b)) ? (oc(c, a), 0 == c.Rh && (c.src = null, b[tc] = null)) : mc(a);
    return !0
  };
  var vc = function (a) {
    return a in Cc ? Cc[a] : Cc[a] = "on" + a
  };
  var Dc = function (a, b, c, d) {
    var e = 1;
    if (a = sc(a))
      if (b = a.rb[b.toString()])
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var g = b[a];
          g && g.bi == c && !g.$f && (e &= !1 !== Ec(g, d))
        }
      return Boolean(e)
  };
  var Ec = function (a, b) {
    var c = a.Ze
      , d = a.Ji || a.src;
    a.$h && Bc(a);
    return c.call(d, b)
  };
  var xc = function (a, b) {
    if (a.$f) return !0;
    if (!yc) {
      var c = b || ea("window.event")
        , d = new z.bc(c, this)
        , e = !0;
      if (!(0 > c.keyCode || void 0 != c.returnValue)) {
        a: {
          var g = !1;
          if (0 == c.keyCode) try {
            c.keyCode = -1;
            break a
          } catch (k) {
            g = !0
          }
          if (g || void 0 == c.returnValue) c.returnValue = !0
        }
        c = [];
        for (g = d.currentTarget; g; g = g.parentNode) c.push(g);
        for (var g = a.type, l = c.length - 1; !d.nf && 0 <= l; l--) d.currentTarget = c[l]
        , e &= Dc(c[l], g, !0, d);
        for (l = 0; !d.nf && l < c.length; l++) d.currentTarget = c[l]
        , e &= Dc(c[l], g, !1, d)
      }
      return e
    }
    return Ec(a, new z.bc(b, this))
  };
  var sc = function (a) {
    a = a[tc];
    return a instanceof nc ? a : null
  };
  var qc = function (a) {
    if (z.ma(a)) return a;
    a[Fc] || (a[Fc] = function (b) {
      return a.handleEvent(b)
    });
    return a[Fc]
  };
  z.Gc = function () {
    Nb.call(this);
    this.vd = new nc(this);
    this.xo = this;
    this.wl = null
  };
  var Hc = function (a, b, c, d) {
    b = a.vd.rb[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, g = 0; g < b.length; ++g) {
      var k = b[g];
      if (k && !k.$f && k.bi == c) {
        var l = k.Ze
          , m = k.Ji || k.src;
        k.$h && oc(a.vd, k);
        e = !1 !== l.call(m, d) && e
      }
    }
    return e && 0 != d.Nn
  };
  z.Ic = function (a, b, c) {
    if (z.ma(a)) c && (a = (0, z.ta)(a, c));
    else if (a && "function" == typeof a.handleEvent) a = (0, z.ta)(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : z.h.setTimeout(a, b || 0)
  };
  z.Jc = function (a) {
    Nb.call(this);
    this.Te = a;
    this.ka = {}
  };
  var Kc = function (a, b, c, d, e, g) {
    if (z.ja(c))
      for (var k = 0; k < c.length; k++) Kc(a, b, c[k], d, e, g);
    else {
      b = zc(b, c, d || a.handleEvent, e, g || a.Te || a);
      if (!b) return a;
      a.ka[b.key] = b
    }
    return a
  };
  z.Lc = function (a) {
    if ("function" == typeof a.yd) return a.yd();
    if (z.r(a)) return a.split("");
    if (z.ka(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b
    }
    return hb(a)
  };
  z.Mc = function (a) {
    if ("function" == typeof a.Vc) return a.Vc();
    if ("function" != typeof a.yd) {
      if (z.ka(a) || z.r(a)) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b
      }
      return ib(a)
    }
  };
  z.Nc = function (a, b, c) {
    if ("function" == typeof a.forEach) a.forEach(b, c);
    else if (z.ka(a) || z.r(a))(0, z.Oc)(a, b, c);
    else
      for (var d = z.Mc(a), e = z.Lc(a), g = e.length, k = 0; k < g; k++) b.call(c, e[k], d && d[k], a)
  };
  z.Pc = function () {};
  z.Qc = function (a) {
    if (a instanceof z.Pc) return a;
    if ("function" == typeof a.yf) return a.yf(!1);
    if (z.ka(a)) {
      var b = 0
        , c = new z.Pc;
      c.next = function () {
        for (;;) {
          if (b >= a.length) throw z.Rc;
          if (b in a) return a[b++];
          b++
        }
      };
      return c
    }
    throw Error("Not implemented");
  };
  z.Sc = function (a, b) {
    if (z.ka(a)) try {
      (0, z.Oc)(a, b, void 0)
    } catch (c) {
      if (c !== z.Rc) throw c;
    } else {
      a = z.Qc(a);
      try {
        for (;;) b.call(void 0, a.next(), void 0, a)
      } catch (d) {
        if (d !== z.Rc) throw d;
      }
    }
  };
  z.Tc = function (a, b) {
    this.Fc = {};
    this.ka = [];
    this.Uh = this.va = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.yo(a)
  };
  var Uc = function (a) {
    if (a.va != a.ka.length) {
      for (var b = 0, c = 0; b < a.ka.length;) {
        var d = a.ka[b];
        z.Vc(a.Fc, d) && (a.ka[c++] = d);
        b++
      }
      a.ka.length = c
    }
    if (a.va != a.ka.length) {
      for (var e = {}, c = b = 0; b < a.ka.length;) d = a.ka[b], z.Vc(e, d) || (a.ka[c++] = d, e[d] = 1), b++;
      a.ka.length = c
    }
  };
  z.Vc = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var Wc = function (a) {
    var b;
    b || (b = Xc(a || arguments.callee.caller, []));
    return b
  };
  var Xc = function (a, b) {
    var c = [];
    if (z.Xa(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
      c.push(Yc(a) + "(");
      for (var d = a.arguments, e = 0; d && e < d.length; e++) {
        0 < e && c.push(", ");
        var g;
        g = d[e];
        switch (typeof g) {
        case "object":
          g = g ? "object" : "null";
          break;
        case "string":
          break;
        case "number":
          g = String(g);
          break;
        case "boolean":
          g = g ? "true" : "false";
          break;
        case "function":
          g = (g = Yc(g)) ? g : "[fn]";
          break;
        default:
          g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Xc(a.caller
          , b))
      } catch (k) {
        c.push("[exception trying to get caller]\n")
      }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
  };
  var Yc = function (a) {
    if (Zc[a]) return Zc[a];
    a = String(a);
    if (!Zc[a]) {
      var b = /function ([^\(]+)/.exec(a);
      Zc[a] = b ? b[1] : "[Anonymous]"
    }
    return Zc[a]
  };
  var ad = function (a, b, c, d, e) {
    this.reset(a, b, c, d, e)
  };
  var bd = function (a) {
    this.zn = a;
    this.Hm = this.Ka = this.Tg = this.V = null
  };
  var cd = function (a, b) {
    this.name = a;
    this.value = b
  };
  var dd = function (a) {
    if (a.Tg) return a.Tg;
    if (a.V) return dd(a.V);
    Ta("Root logger has no level set.");
    return null
  };
  z.ed = function (a) {
    fd || (fd = new bd(""), gd[""] = fd, fd.Sn(hd));
    var b;
    if (!(b = gd[a])) {
      b = new bd(a);
      var c = a.lastIndexOf(".")
        , d = a.substr(c + 1)
        , c = z.ed(a.substr(0, c));
      c.sk()[d] = b;
      b.V = c;
      gd[a] = b
    }
    return b
  };
  z.G = function (a, b) {
    a && a.info(b, void 0)
  };
  z.id = function (a, b) {
    a && a.log(jd, b, void 0)
  };
  var kd = function (a) {
    Nb.call(this);
    this.xf = a;
    this.Hj = []
  };
  z.ld = function (a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
        .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
      return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  };
  var md = function () {};
  var nd = function (a) {
    var b;
    (b = a.am) || (b = {}, od(a) && (b[0] = !0, b[1] = !0), b = a.am = b);
    return b
  };
  var pd = function () {};
  var qd = function (a) {
    return (a = od(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
  };
  var od = function (a) {
    if (!a.Jm && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          return new window.ActiveXObject(d), a.Jm = d
        } catch (e) {}
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.Jm
  };
  var rd = function (a, b) {
    if (sd) {
      sd = !1;
      var c = z.h.location;
      if (c) {
        var d = c.href;
        if (d && (d = (d = rd(3, d)) ? (0, window.decodeURI)(d) : d) && d != c.hostname) throw sd = !0, Error();
      }
    }
    return b.match(td)[a] || null
  };
  z.ud = function (a) {
    z.Gc.call(this);
    this.headers = new z.Tc;
    this.Vj = a || null;
    this.Ud = !1;
    this.Uj = this.C = null;
    this.Rg = this.Pm = this.Ui = "";
    this.Xe = this.Hk = this.Li = this.jk = !1;
    this.Ph = 0;
    this.Oj = null;
    this.Mn = vd;
    this.Tj = this.Ss = !1
  };
  var wd = function (a) {
    return z.B && z.A(9) && la(a.timeout) && z.da(a.ontimeout)
  };
  var Wa = function (a) {
    return "content-type" == a.toLowerCase()
  };
  var xd = function (a) {
    a.jk || (a.jk = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
  };
  var yd = function (a) {
    if (a.Ud && "undefined" != typeof zd)
      if (a.Uj[1] && 4 == Ad(a) && 2 == Bd(a)) z.id(a.w, Cd(a, "Local request error detected and ignored"));
      else if (a.Li && 4 == Ad(a)) z.Ic(a.En, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == Ad(a)) {
      z.id(a.w, Cd(a, "Request complete"));
      a.Ud = !1;
      try {
        if (Dd(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
          var b;
          try {
            b = 2 < Ad(a) ? a.C.statusText : ""
          } catch (c) {
            z.id(a.w, "Can not get status: " + c.message), b = ""
          }
          a.Rg = b + " [" + Bd(a) + "]";
          xd(a)
        }
      } finally {
        Ed(a)
      }
    }
  };
  var Ed = function (a, b) {
    if (a.C) {
      Fd(a);
      var c = a.C
        , d = a.Uj[0] ? fa : null;
      a.C = null;
      a.Uj = null;
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d
      } catch (e) {
        (c = a.w) && c.log(Gd, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
      }
    }
  };
  var Fd = function (a) {
    a.C && a.Tj && (a.C.ontimeout = null);
    la(a.Oj) && (z.h.clearTimeout(a.Oj), a.Oj = null)
  };
  var Dd = function (a) {
    var b = Bd(a)
      , c;
    a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      c = !0;
      break a;
    default:
      c = !1
    }
    if (!c) {
      if (b = 0 === b) a = rd(1, String(a.Ui)), !a && window.self.location && (a = window.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Hd.test(a ? a.toLowerCase() : "");
      c = b
    }
    return c
  };
  var Ad = function (a) {
    return a.C ? a.C.readyState : 0
  };
  var Bd = function (a) {
    try {
      return 2 < Ad(a) ? a.C.status : -1
    } catch (b) {
      return -1
    }
  };
  z.Id = function (a) {
    try {
      return a.C ? a.C.responseText : ""
    } catch (b) {
      return z.id(a.w, "Can not get responseText: " + b.message), ""
    }
  };
  var Cd = function (a, b) {
    return b + " [" + a.Pm + " " + a.Ui + " " + Bd(a) + "]"
  };
  var Jd = function (a) {
    z.Gc.call(this);
    this.Ve = new kd(a);
    this.S = new z.Jc(this)
  };
  var Kd = function (a, b) {
    this.Ij = [];
    this.An = a;
    this.nm = b || null;
    this.Lg = this.Zd = !1;
    this.Md = void 0;
    this.Kl = this.Do = this.Zj = !1;
    this.Rj = 0;
    this.V = null;
    this.ak = 0
  };
  var Ld = function (a, b, c) {
    a.Zd = !0;
    a.Md = c;
    a.Lg = !b;
    Md(a)
  };
  var Nd = function (a, b) {
    a.Xd();
    Ld(a, !1, b)
  };
  var Od = function (a, b, c, d) {
    a.Ij.push([b, c, d]);
    a.Zd && Md(a)
  };
  var Pd = function (a) {
    return Qd(a.Ij, function (a) {
      return z.ma(a[1])
    })
  };
  var Md = function (a) {
    if (a.Rj && a.Zd && Pd(a)) {
      var b = a.Rj
        , c = Rd[b];
      c && (Sd.call(z.h, c.Rb), delete Rd[b]);
      a.Rj = 0
    }
    a.V && (a.V.ak--, delete a.V);
    for (var b = a.Md, d = c = !1; a.Ij.length && !a.Zj;) {
      var e = a.Ij.shift()
        , g = e[0]
        , k = e[1]
        , e = e[2];
      if (g = a.Lg ? k : g) try {
        var l = g.call(e || a.nm, b);
        z.da(l) && (a.Lg = a.Lg && (l == b || l instanceof Error), a.Md = b = l);
        za(b) && (d = !0, a.Zj = !0)
      } catch (m) {
        b = m, a.Lg = !0, Pd(a) || (c = !0)
      }
    }
    a.Md = b;
    d && (l = (0, z.ta)(a.hm, a, !0), d = (0, z.ta)(a.hm, a, !1), b instanceof Kd ? (Od(b, l, d), b.Do = !0) : b.then(l, d));
    c && (b = new Td(b), Rd[b.Rb] = b
      , a.Rj = b.Rb)
  };
  var Ud = function () {
    Aa.call(this)
  };
  var Vd = function () {
    Aa.call(this)
  };
  var Td = function (a) {
    this.Rb = Wd.call(z.h, (0, z.ta)(this.Js, this), 0);
    this.qi = a
  };
  z.H = function (a, b) {
    this.x = z.da(a) ? a : 0;
    this.y = z.da(b) ? b : 0
  };
  var Xd = function (a, b) {
    return new z.H(a.x - b.x, a.y - b.y)
  };
  var Yd = function (a, b) {
    this.width = a;
    this.height = b
  };
  var Zd = function (a) {
    return a ? new $d(z.ae(a)) : be || (be = new $d)
  };
  z.I = function (a) {
    return z.r(a) ? window.document.getElementById(a) : a
  };
  z.J = function (a, b) {
    var c = b || window.document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : z.ce(window.document, "*", a, b)
  };
  z.L = function (a, b) {
    var c = b || window.document
      , d = null;
    return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : z.ce(window.document, "*", a, b)[0]) || null
  };
  z.ce = function (a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? b.toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var e = 0, g = 0, k; k = a[g]; g++) b == k.nodeName && (d[e++] = k);
        d.length = e;
        return d
      }
      return a
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (g = e = 0; k = a[g]; g++) b = k.className, "function" == typeof b.split && z.Xa(b.split(/\s+/), c) && (d[e++] = k);
      d.length = e;
      return d
    }
    return a
  };
  z.de = function (a, b) {
    z.gb(b, function (b, d) {
      "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in ee ? a.setAttribute(ee[d], b) : z.Ba(d, "aria-") || z.Ba(d, "data-") ? a.setAttribute(d, b) : a[d] = b
    })
  };
  var fe = function (a) {
    a = (a || window)
      .document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Yd(a.clientWidth, a.clientHeight)
  };
  var ge = function (a) {
    return z.E || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
  };
  z.he = function (a) {
    return a ? a.parentWindow || a.defaultView : window
  };
  z.ie = function (a, b, c) {
    return je(window.document, arguments)
  };
  var je = function (a, b) {
    var c = b[0]
      , d = b[1];
    if (!ke && d && (d.name || d.type)) {
      c = ["<", c];
      d.name && c.push(' name="', z.Fa(d.name), '"');
      if (d.type) {
        c.push(' type="', z.Fa(d.type), '"');
        var e = {};
        z.kb(e, d);
        delete e.type;
        d = e
      }
      c.push(">");
      c = c.join("")
    }
    c = a.createElement(c);
    d && (z.r(d) ? c.className = d : z.ja(d) ? c.className = d.join(" ") : z.de(c, d));
    2 < b.length && le(a, c, b, 2);
    return c
  };
  var le = function (a, b, c, d) {
    function e(c) {
      c && b.appendChild(z.r(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
      var g = c[d];
      !z.ka(g) || na(g) && 0 < g.nodeType ? e(g) : (0, z.Oc)(me(g) ? z.bb(g) : g, e)
    }
  };
  z.ne = function (a, b) {
    var c = a.createElement("div");
    z.B ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
    if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
    for (var d = a.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
    return d
  };
  var oe = function (a, b) {
    le(z.ae(a), a, arguments, 1)
  };
  var pe = function (a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
  };
  var qe = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
  };
  z.re = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
  };
  var se = function (a) {
    return void 0 != a.firstElementChild ? a.firstElementChild : z.te(a.firstChild)
  };
  z.te = function (a) {
    for (; a && 1 != a.nodeType;) a = a.nextSibling;
    return a
  };
  var ue = function (a) {
    return na(a) && 1 == a.nodeType
  };
  z.ve = function (a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
  };
  z.ae = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  };
  z.we = function (a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
      a.firstChild.data = b
    } else pe(a), a.appendChild(z.ae(a)
      .createTextNode(String(b)))
  };
  var xe = function (a) {
    return ye(a) && ze(a)
  };
  var Ae = function (a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
  };
  var ye = function (a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
  };
  var ze = function (a) {
    a = a.tabIndex;
    return la(a) && 0 <= a && 32768 > a
  };
  z.Be = function (a) {
    if (Ce && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
      var b = [];
      De(a, b, !0);
      a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ")
      .replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    Ce || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
  };
  z.Ee = function (a) {
    var b = [];
    De(a, b, !1);
    return b.join("")
  };
  var De = function (a, b, c) {
    if (!(a.nodeName in Fe))
      if (3 == a.nodeType) c ? b.push(String(a.nodeValue)
        .replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
      else if (a.nodeName in Ge) b.push(Ge[a.nodeName]);
    else
      for (a = a.firstChild; a;) De(a, b, c), a = a.nextSibling
  };
  var me = function (a) {
    if (a && "number" == typeof a.length) {
      if (na(a)) return "function" == typeof a.item || "string" == typeof a.item;
      if (z.ma(a)) return "function" == typeof a.item
    }
    return !1
  };
  z.M = function (a, b) {
    return b ? He(a, function (a) {
      return !b || z.r(a.className) && z.Xa(a.className.split(/\s+/), b)
    }) : null
  };
  var He = function (a, b) {
    for (var c = 0; a;) {
      if (b(a)) return a;
      a = a.parentNode;
      c++
    }
    return null
  };
  var $d = function (a) {
    this.aa = a || z.h.document || window.document
  };
  z.Ie = function (a) {
    return a.aa
  };
  var Je = function (a) {
    return "CSS1Compat" == a.aa.compatMode
  };
  var Ke = function (a) {
    a = a.aa;
    return a.parentWindow || a.defaultView
  };
  var Le = function (a) {
    var b = a.aa;
    a = ge(b);
    b = b.parentWindow || b.defaultView;
    return z.B && z.A("10") && b.pageYOffset != a.scrollTop ? new z.H(a.scrollLeft, a.scrollTop) : new z.H(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
  };
  var Me = function (a) {
    if (a.length) {
      var b = Ne.length;
      z.cb(Ne, a);
      if (!b) {
        a = Ne;
        var c = function () {
          var b = a.shift()
            , b = Oe(b);
          a.length && Od(b, c, c, void 0)
        };
        c()
      }
    }
  };
  var Oe = function (a) {
    var b = {}
      , c = b.document || window.document
      , d = window.document.createElement("SCRIPT")
      , e = {
        On: d
        , Qh: void 0
      }
      , g = new Kd(Pe, e)
      , k = null
      , l = null != b.timeout ? b.timeout : 5E3;
    0 < l && (k = window.setTimeout(function () {
      Qe(d, !0);
      Nd(g, new Re(Se, "Timeout reached for loading script " + a))
    }, l), e.Qh = k);
    d.onload = d.onreadystatechange = function () {
      d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (Qe(d, b.ht || !1, k), g.tg(null))
    };
    d.onerror = function () {
      Qe(d, !0, k);
      Nd(g, new Re(Te, "Error while loading script " +
        a))
    };
    z.de(d, {
      type: "text/javascript"
      , charset: "UTF-8"
      , src: a
    });
    Ue(c)
      .appendChild(d);
    return g
  };
  var Ue = function (a) {
    var b = a.getElementsByTagName("HEAD");
    return b && 0 != b.length ? b[0] : a.documentElement
  };
  var Pe = function () {
    if (this && this.On) {
      var a = this.On;
      a && "SCRIPT" == a.tagName && Qe(a, !0, this.Qh)
    }
  };
  var Qe = function (a, b, c) {
    null != c && z.h.clearTimeout(c);
    a.onload = fa;
    a.onerror = fa;
    a.onreadystatechange = fa;
    b && window.setTimeout(function () {
      z.re(a)
    }, 0)
  };
  var Re = function (a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    Aa.call(this, c);
    this.code = a
  };
  var Ve = function () {
    z.Gc.call(this);
    this.S = new z.Jc(this);
    this.Bd = {}
  };
  var We = function (a, b) {
    a.dispatchEvent(new Xe(Ye));
    z.G(a.Ug, "evaluateCode ids:" + b);
    var c = !0
      , d = a.Bd[b]
      , e = d.Kn
      , g = d.El;
    try {
      if (a.Wn || a.mi && Ze)
        for (var k = 0; k < e.length; k++) va(g[k] + " //@ sourceURL=" + e[k]);
      else va(g.join("\n"))
    } catch (l) {
      c = !1, (e = a.Ug) && e.log($e, "Loaded incomplete code for module(s): " + b, l)
    }
    a.dispatchEvent(new Xe(af));
    c ? d.Ml && d.Ml() : bf(a, b, d.kk, null);
    delete a.Bd[b]
  };
  var bf = function (a, b, c, d) {
    a.dispatchEvent(new Xe(cf));
    (a = a.Ug) && a.log($e, "Request failed for module(s): " + b, void 0);
    c && c(d)
  };
  var Xe = function (a) {
    z.Zb.call(this, a)
  };
  var df = function () {
    this.El = this.Kn = null;
    this.Sm = !1;
    this.kk = this.Ml = null
  };
  var ef = function (a, b) {
    Nb.call(this);
    this.pm = this.km = null;
    this.vn = b;
    this.Cg = [];
    if (a > this.vn) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (var c = 0; c < a; c++) this.Cg.push(this.li())
  };
  var ff = function (a, b) {
    a.Cg.length < a.vn ? a.Cg.push(b) : a.hk(b)
  };
  var gf = function () {
    this.Ag = [];
    this.tl = new z.Tc;
    this.io = this.jo = this.ko = this.Zn = 0;
    this.Mh = new z.Tc;
    this.em = this.ho = 0;
    this.il = 1;
    this.lk = new ef(0, 4E3);
    this.lk.li = function () {
      return new hf
    };
    this.bo = new ef(0, 50);
    this.bo.li = function () {
      return new jf
    };
    var a = this;
    this.Gk = new ef(0, 2E3);
    this.Gk.li = function () {
      return String(a.il++)
    };
    this.Gk.hk = function () {}
  };
  var jf = function () {
    this.Sl = this.time = this.count = 0
  };
  var hf = function () {};
  var kf = function (a, b, c, d) {
    var e = []; - 1 == c ? e.push("    ") : e.push(lf(a.um - c));
    e.push(" ", mf(a.um - b));
    0 == a.mk ? e.push(" Start        ") : 1 == a.mk ? (e.push(" Done "), e.push(lf(a.Wt - a.startTime), " ms ")) : e.push(" Comment      ");
    e.push(d, a);
    0 < a.Ls && e.push("[VarAlloc ", a.Ls, "] ");
    return e.join("")
  };
  var lf = function (a) {
    a = Math.round(a);
    var b = "";
    1E3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a
  };
  var mf = function (a) {
    a = Math.round(a);
    return String(100 + a / 1E3 % 60)
      .substring(1, 3) + "." + String(1E3 + a % 1E3)
      .substring(1, 4)
  };
  var nf = function () {
    Nb.call(this)
  };
  var of = function (a, b) {
    this.si = a;
    this.Te = b
  };
  var pf = function (a, b) {
    Nb.call(this);
    this.om = a;
    this.Rb = b;
    this.sl = [];
    this.kl = [];
    this.sm = []
  };
  var qf = function (a, b) {
    a.Ej(a.kl, b, void 0)
  };
  var rf = function (a, b) {
    var c = new a.hq;
    b();
    a.gf = c;
    c = (c = !!sf(a.sm, b())) || !!sf(a.sl, b());
    c || (a.kl.length = 0);
    return c
  };
  var tf = function (a, b) {
    var c = sf(a.kl, b);
    c && window.setTimeout(Ua("Module errback failures: " + c), 0);
    a.sm.length = 0;
    a.sl.length = 0
  };
  var sf = function (a, b) {
    for (var c = [], d = 0; d < a.length; d++) try {
      a[d].xm(b)
    } catch (e) {
      c.push(e)
    }
    a.length = 0;
    return c.length ? c : null
  };
  z.uf = function () {
    Nb.call(this);
    this.wb = {};
    this.yc = [];
    this.Ld = [];
    this.Bh = [];
    this.xb = [];
    this.gg = [];
    this.ai = {};
    this.mm = this.Yh = new pf([], "");
    this.Om = null;
    this.Pg = new Kd
  };
  var vf = function (a) {
    var b = a.Ye();
    b != a.Nm && (a.ri(b ? "active" : "idle"), a.Nm = b);
    b = 0 < a.gg.length;
    b != a.po && (a.ri(b ? "userActive" : "userIdle"), a.po = b)
  };
  var wf = function (a, b, c, d, e) {
    c.Dj(e.tg, e);
    qf(c, function (a) {
      Nd(e, Error(a))
    });
    xf(a, b) ? d && (z.G(a.w, "User initiated module already loading: " + b), yf(a, b), vf(a)) : d ? (z.G(a.w, "User initiated module load: " + b), yf(a, b)) : z.G(a.w, "Initiating module load: " + b)
  };
  var zf = function (a, b) {
    if (a.Ko) {
      var c = (0, z.ta)(a.Wi, a, b);
      Od(a.Pg, c, null, void 0)
    } else 0 == a.yc.length ? a.Wi(b) : (a.xb.push(b), vf(a))
  };
  var Af = function (a, b) {
    for (var c = 0; c < b.length; c++)
      if (a.wb[b[c]].gf) throw Error("Module already loaded: " + b[c]);
    for (var d = [], c = 0; c < b.length; c++) d = d.concat(Bf(a, b[c]));
    fb(d);
    return !a.Xl && 1 < d.length ? (c = d.shift(), z.G(a.w, "Must load " + c + " module before " + b), a.xb = (0, z.Cf)(d, function (a) {
        return [a]
      })
      .concat(a.xb), [c]) : d
  };
  var Bf = function (a, b) {
    var c = [];
    z.Xa(a.Bh, b) || c.push(b);
    for (var d = z.bb(a.wb[b].om); d.length;) {
      var e = d.pop();
      a.wb[e].gf || z.Xa(a.Bh, e) || (c.unshift(e), Array.prototype.unshift.apply(d, a.wb[e].om))
    }
    fb(c);
    return c
  };
  z.Df = function (a) {
    var b = z.uf.a();
    b.td ? (b = b.w) && b.log($e, "Module loaded after module manager was disposed: " + a, void 0) : (z.G(b.w, "Module loaded: " + a), rf(b.wb[a], (0, z.ta)(b.Dm, b)) && Ef(b, Ff), z.$a(b.gg, a), z.$a(b.yc, a), 0 == b.yc.length && Gf(b), b.Om && a == b.Om && (b.Pg.Zd || b.Pg.tg()), vf(b))
  };
  var xf = function (a, b) {
    if (z.Xa(a.yc, b)) return !0;
    for (var c = 0; c < a.xb.length; c++)
      if (z.Xa(a.xb[c], b)) return !0;
    return !1
  };
  z.Hf = function (a, b, c, d) {
    var e = a.wb[b];
    e.gf ? (z.G(a.w, b + " module already loaded"), a = new of(c, d), window.setTimeout((0, z.ta)(a.xm, a), 0)) : xf(a, b) ? (z.G(a.w, b + " module already loading"), e.Dj(c, d)) : (z.G(a.w, "Registering callback for module: " + b), e.Dj(c, d), z.G(a.w, "Initiating module load: " + b), zf(a, [b]))
  };
  var yf = function (a, b) {
    z.Xa(a.gg, b) || a.gg.push(b)
  };
  var If = function (a, b) {
    1 < a.Ld.length ? a.xb = (0, z.Cf)(a.Ld, function (a) {
        return [a]
      })
      .concat(a.xb) : Ef(a, b)
  };
  var Ef = function (a, b) {
    var c = a.Ld;
    a.yc.length = 0;
    for (var d = [], e = 0; e < a.xb.length; e++) {
      var g = Jf(a.xb[e], function (a) {
        var b = Bf(this, a);
        return Qd(c, function (a) {
          return z.Xa(b, a)
        })
      }, a);
      z.cb(d, g)
    }
    for (e = 0; e < c.length; e++) Za(d, c[e]);
    for (e = 0; e < d.length; e++) {
      for (g = 0; g < a.xb.length; g++) z.$a(a.xb[g], d[e]);
      z.$a(a.gg, d[e])
    }
    var k = a.ai.error;
    if (k)
      for (e = 0; e < k.length; e++)
        for (var l = k[e], g = 0; g < d.length; g++) l("error", d[g], b);
    for (e = 0; e < c.length; e++) a.wb[c[e]] && tf(a.wb[c[e]], b);
    a.Ld.length = 0;
    vf(a)
  };
  var Gf = function (a) {
    for (; a.xb.length;) {
      var b = Jf(a.xb.shift(), function (a) {
        return !this.wb[a].gf
      }, a);
      if (0 < b.length) {
        a.Wi(b);
        return
      }
    }
    vf(a)
  };
  var Kf = function () {
    this.pn = !1;
    this.dl = null
  };
  z.Lf = function () {
    this.gj = this.ih = this.ij = this.gj = this.nh = this.t = null
  };
  var N = function (a, b) {
    for (var c = 0; c < b.left.buttons.length; c++)
      if (b.left.buttons[c].command == a) return b.left.buttons[c];
    for (c = 0; c < b.right.buttons.length; c++)
      if (b.right.buttons[c].command == a) return b.right.buttons[c]
  };
  var Mf = function () {
    return z.E ? "Webkit" : z.dc ? "Moz" : z.B ? "ms" : z.Nf ? "O" : null
  };
  var Of = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  };
  var Pf = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
  };
  z.O = function (a, b, c) {
    if (z.r(b))(b = Qf(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d]
          , g = Qf(c, d);
        g && (c.style[g] = e)
      }
  };
  var Qf = function (a, b) {
    var c = Qa(b);
    if (void 0 === a.style[c]) {
      var d = Mf() + Ra(c);
      if (void 0 !== a.style[d]) return d
    }
    return c
  };
  z.Rf = function (a, b) {
    var c = a.style[Qa(b)];
    return "undefined" !== typeof c ? c : a.style[Qf(a, b)] || ""
  };
  var Sf = function (a, b) {
    var c = z.ae(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
  };
  var Tf = function (a, b) {
    return Sf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
  };
  var Uf = function (a) {
    return Tf(a, "position")
  };
  var Vf = function (a, b, c) {
    var d, e = z.dc && (ec || Wf) && z.A("1.9");
    b instanceof z.H ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = Xf(d, e);
    a.style.top = Xf(b, e)
  };
  var Yf = function (a) {
    var b;
    try {
      b = a.getBoundingClientRect()
    } catch (c) {
      return {
        left: 0
        , top: 0
        , right: 0
        , bottom: 0
      }
    }
    z.B && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
  };
  var Zf = function (a) {
    if (z.B && !Xb(8)) return a.offsetParent;
    var b = z.ae(a)
      , c = Tf(a, "position")
      , d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (c = Tf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return null
  };
  z.$f = function (a) {
    for (var b = new Of(0, window.Infinity, window.Infinity, 0), c = Zd(a), d = c.aa.body, e = c.aa.documentElement, g = ge(c.aa); a = Zf(a);)
      if (!(z.B && 0 == a.clientWidth || z.E && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Tf(a, "overflow")) {
        var k = z.P(a)
          , l;
        l = a;
        if (z.dc && !z.A("1.9")) {
          var m = (0, window.parseFloat)(Sf(l, "borderLeftWidth"));
          if (ag(l)) var n = l.offsetWidth - l.clientWidth - m - (0, window.parseFloat)(Sf(l, "borderRightWidth"))
            , m = m + n;
          l = new z.H(m, (0, window.parseFloat)(Sf(l, "borderTopWidth")))
        } else l = new z.H(l.clientLeft
          , l.clientTop);
        k.x += l.x;
        k.y += l.y;
        b.top = Math.max(b.top, k.y);
        b.right = Math.min(b.right, k.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, k.y + a.clientHeight);
        b.left = Math.max(b.left, k.x)
      }
    d = g.scrollLeft;
    g = g.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, g);
    c = fe(Ke(c));
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, g + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
  };
  z.P = function (a) {
    var b, c = z.ae(a)
      , d = Tf(a, "position")
      , e = z.dc && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY)
      , g = new z.H(0, 0)
      , k;
    b = c ? z.ae(c) : window.document;
    k = !z.B || Xb(9) || Je(Zd(b)) ? b.documentElement : b.body;
    if (a == k) return g;
    if (a.getBoundingClientRect) b = Yf(a), a = Le(Zd(c)), g.x = b.left + a.x, g.y = b.top + a.y;
    else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(k), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
    else {
      b = a;
      do {
        g.x +=
          b.offsetLeft;
        g.y += b.offsetTop;
        b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
        if (z.E && "fixed" == Uf(b)) {
          g.x += c.body.scrollLeft;
          g.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      } while (b && b != a);
      if (z.Nf || z.E && "absolute" == d) g.y -= c.body.offsetTop;
      for (b = a;
        (b = Zf(b)) && b != c.body && b != k;) g.x -= b.scrollLeft, z.Nf && "TR" == b.tagName || (g.y -= b.scrollTop)
    }
    return g
  };
  z.bg = function (a) {
    var b;
    if (a.getBoundingClientRect) b = Yf(a), b = new z.H(b.left, b.top);
    else {
      b = Le(Zd(a));
      var c = z.P(a);
      b = new z.H(c.x - b.x, c.y - b.y)
    }
    if (z.dc && !z.A(12)) {
      b: {
        c = Qa("transform");
        if (void 0 === a.style[c] && (c = Mf() + Ra(c), void 0 !== a.style[c])) {
          c = (z.E ? "-webkit" : z.dc ? "-moz" : z.B ? "-ms" : z.Nf ? "-o" : null) + "-transform";
          break b
        }
        c = "transform"
      }
      a = (a = Tf(a, c) || Tf(a, "transform")) ? (a = a.match(cg)) ? new z.H((0, window.parseFloat)(a[1]), (0, window.parseFloat)(a[2])) : new z.H(0, 0) : new z.H(0, 0);a = new z.H(b.x + a.x, b.y + a.y)
    }
    else a =
      b;
    return a
  };
  z.dg = function (a, b, c) {
    if (b instanceof Yd) c = b.height, b = b.width;
    else if (void 0 == c) throw Error("missing height argument");
    a.style.width = Xf(b, !0);
    a.style.height = Xf(c, !0)
  };
  var Xf = function (a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
  };
  z.eg = function (a) {
    var b = fg;
    if ("none" != Tf(a, "display")) return b(a);
    var c = a.style
      , d = c.display
      , e = c.visibility
      , g = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = g;
    c.visibility = e;
    return a
  };
  var fg = function (a) {
    var b = a.offsetWidth
      , c = a.offsetHeight
      , d = z.E && !b && !c;
    return z.da(b) && !d || !a.getBoundingClientRect ? new Yd(b, c) : (a = Yf(a), new Yd(a.right - a.left, a.bottom - a.top))
  };
  z.gg = function (a) {
    var b = z.P(a);
    a = z.eg(a);
    return new Pf(b.x, b.y, a.width, a.height)
  };
  var hg = function (a, b) {
    var c = a.style;
    "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
  };
  z.ig = function (a, b) {
    a.style.display = b ? "" : "none"
  };
  var ag = function (a) {
    return "rtl" == Tf(a, "direction")
  };
  z.jg = function (a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (kg) {
      if (b = b ? "none" : "", a.style[kg] = b, c) {
        a = 0;
        for (var d; d = c[a]; a++) d.style[kg] = b
      }
    } else if (z.B || z.Nf)
      if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
        for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
  };
  var lg = function (a, b) {
    if (/^\d+px?$/.test(b)) return (0, window.parseInt)(b, 10);
    var c = a.style.left
      , d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
  };
  var mg = function (a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? lg(a, c) : 0
  };
  var ng = function (a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in og ? og[c] : lg(a, c)
  };
  var pg = function (a) {
    if (z.B && !Xb(9)) {
      var b = ng(a, "borderLeft")
        , c = ng(a, "borderRight")
        , d = ng(a, "borderTop");
      a = ng(a, "borderBottom");
      return new Of(d, c, a, b)
    }
    b = Sf(a, "borderLeftWidth");
    c = Sf(a, "borderRightWidth");
    d = Sf(a, "borderTopWidth");
    a = Sf(a, "borderBottomWidth");
    return new Of((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
  };
  var qg = function (a, b, c, d, e) {
    if (!(z.B || z.E && z.A("525"))) return !0;
    if (ec && e) return rg(a);
    if (e && !d) return !1;
    la(b) && (b = sg(b));
    if (!c && (17 == b || 18 == b || ec && 91 == b)) return !1;
    if (z.E && d && c) switch (a) {
    case 220:
    case 219:
    case 221:
    case 192:
    case 186:
    case 189:
    case 187:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
      return !1
    }
    if (z.B && d && b == a) return !1;
    switch (a) {
    case 13:
      return !0;
    case 27:
      return !z.E
    }
    return rg(a)
  };
  var rg = function (a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || z.E && 0 == a) return !0;
    switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
      return !0;
    default:
      return !1
    }
  };
  var sg = function (a) {
    if (z.dc) a = tg(a);
    else if (ec && z.E) a: switch (a) {
    case 93:
      a = 91;
      break a
    }
    return a
  };
  var tg = function (a) {
    switch (a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
    }
  };
  z.ug = function (a, b) {
    z.Gc.call(this);
    a && this.Wl(a, b)
  };
  var vg = function (a, b, c, d) {
    z.bc.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
  };
  z.wg = function (a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
  };
  z.Q = function (a, b, c) {
    z.ja(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c ? (xg || (xg = {
      atomic: !1
      , autocomplete: "none"
      , dropeffect: "none"
      , haspopup: !1
      , live: "off"
      , multiline: !1
      , multiselectable: !1
      , orientation: "vertical"
      , readonly: !1
      , relevant: "additions text"
      , required: !1
      , sort: "none"
      , busy: !1
      , disabled: !1
      , hidden: !1
      , invalid: "false"
    }), c = xg, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
  };
  z.yg = function (a, b) {
    var c = a.getAttribute("aria-" + b);
    return null == c || void 0 == c ? "" : String(c)
  };
  z.zg = function () {};
  z.Ag = function (a) {
    return ":" + (a.il++)
      .toString(36)
  };
  z.Bg = function (a) {
    z.Gc.call(this);
    this.ud = a || Zd();
    this.pf = Cg;
    this.Rb = null;
    this.Q = !1;
    this.m = null;
    this.de = void 0;
    this.pc = this.Ka = this.V = this.hl = null;
    this.ro = !1
  };
  var Dg = function (a, b) {
    switch (a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
    }
    throw Error("Invalid component state");
  };
  var Eg = function (a, b) {
    if (a.V && a.V.pc) {
      var c = a.V.pc
        , d = a.Rb;
      d in c && delete c[d];
      jb(a.V.pc, b, a)
    }
    a.Rb = b
  };
  z.Fg = function (a, b) {
    if (a == b) throw Error("Unable to set parent component");
    if (b && a.V && a.Rb && Gg(a.V, a.Rb) && a.V != b) throw Error("Unable to set parent component");
    a.V = b;
    z.Bg.g.Hl.call(a, b)
  };
  z.Lg = function (a, b, c) {
    if (a.Q) throw Error("Component already rendered");
    a.m || a.q();
    b ? b.insertBefore(a.m, c || null) : a.ud.aa.body.appendChild(a.m);
    a.V && !a.V.Q || a.ga()
  };
  var Mg = function (a) {
    null == a.pf && (a.pf = ag(a.Q ? a.m : a.ud.aa.body));
    return a.pf
  };
  z.Ng = function (a) {
    return a.Ka ? a.Ka.length : 0
  };
  var Gg = function (a, b) {
    var c;
    a.pc && b ? (c = a.pc, c = (b in c ? c[b] : void 0) || null) : c = null;
    return c
  };
  z.Og = function (a, b) {
    return a.Ka ? a.Ka[b] || null : null
  };
  z.Pg = function (a, b, c) {
    a.Ka && (0, z.Oc)(a.Ka, b, c)
  };
  var Qg = function (a, b) {
    return a.Ka && b ? (0, z.Ya)(a.Ka, b) : -1
  };
  z.Rg = function (a) {
    if (a.classList) return a.classList;
    a = a.className;
    return z.r(a) && a.match(/\S+/g) || []
  };
  z.Sg = function (a, b) {
    return a.classList ? a.classList.contains(b) : z.Xa(z.Rg(a), b)
  };
  z.Tg = function (a, b) {
    a.classList ? a.classList.add(b) : z.Sg(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
  };
  z.Ug = function (a, b) {
    if (a.classList)(0, z.Oc)(b, function (b) {
      z.Tg(a, b)
    });
    else {
      var c = {};
      (0, z.Oc)(z.Rg(a), function (a) {
        c[a] = !0
      });
      (0, z.Oc)(b, function (a) {
        c[a] = !0
      });
      a.className = "";
      for (var d in c) a.className += 0 < a.className.length ? " " + d : d
    }
  };
  z.Vg = function (a, b) {
    a.classList ? a.classList.remove(b) : z.Sg(a, b) && (a.className = Jf(z.Rg(a), function (a) {
        return a != b
      })
      .join(" "))
  };
  var Wg = function (a, b) {
    a.classList ? (0, z.Oc)(b, function (b) {
        z.Vg(a, b)
      }) : a.className = Jf(z.Rg(a), function (a) {
        return !z.Xa(b, a)
      })
      .join(" ")
  };
  z.Xg = function () {};
  var Yg = function (a, b, c) {
    if (a = c || a.$d()) c = b.getAttribute("role") || null, a != c && z.wg(b, a)
  };
  z.Zg = function (a, b, c) {
    b.F() || z.Q(c, "hidden", !b.F());
    b.isEnabled() || a.jd(c, 1, !b.isEnabled());
    z.$g(b, 8) && a.jd(c, 8, !!(b.L & 8));
    z.$g(b, 16) && a.jd(c, 16, b.Cb());
    z.$g(b, 64) && a.jd(c, 64, !!(b.L & 64))
  };
  var ah = function (a, b) {
    var c = [];
    b && (a = a.concat([b]));
    (0, z.Oc)([], function (d) {
      !bh(d, ua(z.Xa, a)) || b && !z.Xa(d, b) || c.push(d.join("_"))
    });
    return c
  };
  var ch = function (a) {
    var b = a.J();
    b.replace(/\xa0|\s/g, " ");
    a.di = {
      1: b + "-disabled"
      , 2: b + "-hover"
      , 4: b + "-active"
      , 8: b + "-selected"
      , 16: b + "-checked"
      , 32: b + "-focused"
      , 64: b + "-open"
    }
  };
  z.dh = function () {};
  z.eh = function (a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!z.ma(b)) throw Error("Invalid decorator function " + b);
    fh[a] = b
  };
  z.gh = function (a, b, c) {
    z.Bg.call(this, c);
    if (!b) {
      b = this.constructor;
      for (var d; b;) {
        d = oa(b);
        if (d = hh[d]) break;
        b = b.g ? b.g.constructor : null
      }
      b = d ? z.ma(d.a) ? d.a() : new d : null
    }
    this.G = b;
    this.zb = z.da(a) ? a : null
  };
  var ih = function (a, b) {
    a.Q && b != a.Gi && jh(a, b);
    a.Gi = b
  };
  var jh = function (a, b) {
    var c = a.Ea()
      , d = a.f();
    b ? (c.n(d, "mouseover", a.Ii)
      .n(d, "mousedown", a.ee)
      .n(d, "mouseup", a.fe)
      .n(d, "mouseout", a.Hi), a.Mg != fa && c.n(d, "contextmenu", a.Mg), z.B && c.n(d, "dblclick", a.Fm)) : (c.Xa(d, "mouseover", a.Ii)
      .Xa(d, "mousedown", a.ee)
      .Xa(d, "mouseup", a.fe)
      .Xa(d, "mouseout", a.Hi), a.Mg != fa && c.Xa(d, "contextmenu", a.Mg), z.B && c.Xa(d, "dblclick", a.Fm))
  };
  var kh = function (a, b) {
    a.zb = b
  };
  z.$g = function (a, b) {
    return !!(a.Oh & b)
  };
  var lh = function (a, b) {
    return !!(a.pg & b) && z.$g(a, b)
  };
  var mh = function (a, b, c) {
    return z.$g(a, b) && !!(a.L & b) != c && (!(a.Lh & b) || a.dispatchEvent(Dg(b, c))) && !a.td
  };
  var nh = function () {};
  z.oh = function (a, b, c) {
    z.gh.call(this, a, b || nh.a(), c)
  };
  var ph = function (a, b, c, d, e, g, k, l, m) {
    var n, p;
    if (n = c.offsetParent) {
      var q = "HTML" == n.tagName || "BODY" == n.tagName;
      q && "static" == Uf(n) || (p = z.P(n), q || (q = (q = ag(n)) && z.dc ? -n.scrollLeft : !q || z.B && z.A("8") || "visible" == Tf(n, "overflowX") ? n.scrollLeft : n.scrollWidth - n.clientWidth - n.scrollLeft, p = Xd(p, new z.H(q, n.scrollTop))))
    }
    n = p || new z.H;
    p = z.gg(a);
    (q = z.$f(a)) && p.Gp(new Pf(q.left, q.top, q.right - q.left, q.bottom - q.top));
    var q = Zd(a)
      , s = Zd(c);
    if (q.aa != s.aa) {
      var t = q.aa.body
        , s = Ke(s)
        , v = new z.H(0, 0)
        , C = z.he(z.ae(t))
        , K = t;
      do {
        var V =
          C == s ? z.P(K) : z.bg(K);
        v.x += V.x;
        v.y += V.y
      } while (C && C != s && (K = C.frameElement) && (C = C.parent));
      t = Xd(v, z.P(t));
      !z.B || Xb(9) || Je(q) || (t = Xd(t, Le(q)));
      p.left += t.x;
      p.top += t.y
    }
    a = qh(a, b);
    b = new z.H(a & 2 ? p.left + p.width : p.left, a & 1 ? p.top + p.height : p.top);
    b = Xd(b, n);
    e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
    var D;
    if (k)
      if (m) D = m;
      else if (D = z.$f(c)) D.top -= n.y, D.right -= n.x, D.bottom -= n.y, D.left -= n.x;
    e = D;
    m = b.clone();
    D = qh(c, d);
    d = z.eg(c);
    a = l ? l.clone() : d.clone();
    l = m;
    m = a;
    l = l.clone();
    m = m.clone();
    a = 0;
    if (g || 0 != D) D & 2 ? l.x -= m.width + (g ?
      g.right : 0) : g && (l.x += g.left), D & 1 ? l.y -= m.height + (g ? g.bottom : 0) : g && (l.y += g.top);
    k && (e ? (g = l, D = m, a = 0, 65 == (k & 65) && (g.x < e.left || g.x >= e.right) && (k &= -2), 132 == (k & 132) && (g.y < e.top || g.y >= e.bottom) && (k &= -5), g.x < e.left && k & 1 && (g.x = e.left, a |= 1), g.x < e.left && g.x + D.width > e.right && k & 16 && (D.width = Math.max(D.width - (g.x + D.width - e.right), 0), a |= 4), g.x + D.width > e.right && k & 1 && (g.x = Math.max(e.right - D.width, e.left), a |= 1), k & 2 && (a = a | (g.x < e.left ? 16 : 0) | (g.x + D.width > e.right ? 32 : 0)), g.y < e.top && k & 4 && (g.y = e.top, a |= 2), g.y <= e.top && g.y + D.height <
      e.bottom && k & 32 && (D.height = Math.max(D.height - (e.top - g.y), 0), g.y = e.top, a |= 8), g.y >= e.top && g.y + D.height > e.bottom && k & 32 && (D.height = Math.max(D.height - (g.y + D.height - e.bottom), 0), a |= 8), g.y + D.height > e.bottom && k & 4 && (g.y = Math.max(e.bottom - D.height, e.top), a |= 2), k & 8 && (a = a | (g.y < e.top ? 64 : 0) | (g.y + D.height > e.bottom ? 128 : 0)), k = a) : k = 256, a = k);
    g = new Pf(0, 0, 0, 0);
    g.left = l.x;
    g.top = l.y;
    g.width = m.width;
    g.height = m.height;
    k = a;
    k & 496 || (Vf(c, new z.H(g.left, g.top)), a = new Yd(g.width, g.height), d == a || d && a && d.width == a.width && d.height ==
      a.height || (g = a, d = Je(Zd(z.ae(c))), !z.B || z.A("10") || d && z.A("8") ? (c = c.style, z.dc ? c.MozBoxSizing = "border-box" : z.E ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(g.width, 0) + "px", c.height = Math.max(g.height, 0) + "px") : (l = c.style, d ? (z.B ? (d = mg(c, "paddingLeft"), e = mg(c, "paddingRight"), m = mg(c, "paddingTop"), D = mg(c, "paddingBottom"), d = new Of(m, e, D, d)) : (d = Sf(c, "paddingLeft"), e = Sf(c, "paddingRight"), m = Sf(c, "paddingTop"), D = Sf(c, "paddingBottom"), d = new Of((0, window.parseFloat)(m), (0, window.parseFloat)(e)
        , (0, window.parseFloat)(D), (0, window.parseFloat)(d))), c = pg(c), l.pixelWidth = g.width - c.left - d.left - d.right - c.right, l.pixelHeight = g.height - c.top - d.top - d.bottom - c.bottom) : (l.pixelWidth = g.width, l.pixelHeight = g.height))));
    return k
  };
  var qh = function (a, b) {
    return (b & 4 && ag(a) ? b ^ 2 : b) & -5
  };
  var rh = function () {};
  var sh = function (a, b, c) {
    this.element = a;
    this.ji = b;
    this.hs = c
  };
  z.th = function (a, b, c, d) {
    sh.call(this, a, b);
    this.Ti = c ? 5 : 0;
    this.ul = d || void 0
  };
  var uh = function (a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
  };
  z.vh = function (a, b, c, d) {
    z.th.call(this, a, b, c || d);
    if (c || d) this.Ti = 65 | (d ? 32 : 132)
  };
  var wh = function (a) {
    this.Vl = a
  };
  var xh = function (a, b) {
    a && (a.tabIndex = b ? 0 : -1)
  };
  var yh = function (a, b, c) {
    if (c)
      for (var d = c.firstChild, e; d && d.parentNode == c;) {
        e = d.nextSibling;
        if (1 == d.nodeType) {
          var g = a.tk(d);
          g && (g.m = d, b.isEnabled() || g.Gb(!1), b.Ee(g), g.ca(d))
        } else d.nodeValue && "" != (0, z.Vb)(d.nodeValue) || c.removeChild(d);
        d = e
      }
  };
  z.zh = function (a, b, c) {
    z.Bg.call(this, c);
    this.G = b || wh.a();
    this.mf = a || Ah
  };
  var Bh = function (a, b) {
    var c = a.Ea()
      , d = a.Ca();
    b ? c.n(d, "focus", a.Fi)
      .n(d, "blur", a.Se)
      .n(a.wi(), "key", a.Qb) : c.Xa(d, "focus", a.Fi)
      .Xa(d, "blur", a.Se)
      .Xa(a.wi(), "key", a.Qb)
  };
  var Ch = function (a, b) {
    var c = b.f()
      , c = c.id || (c.id = b.wd());
    a.rd || (a.rd = {});
    a.rd[c] = b
  };
  var Dh = function (a, b) {
    if (a.f()) throw Error("Component already rendered");
    a.mf = b
  };
  z.Eh = function (a) {
    return z.Og(a, a.Fa)
  };
  var Fh = function (a) {
    Gh(a, function (a, c) {
      return (a + 1) % c
    }, z.Ng(a) - 1)
  };
  var Hh = function (a) {
    Gh(a, function (a, c) {
      a--;
      return 0 > a ? c - 1 : a
    }, 0)
  };
  var Ih = function (a) {
    Gh(a, function (a, c) {
      return (a + 1) % c
    }, a.Fa)
  };
  var Jh = function (a) {
    Gh(a, function (a, c) {
      a--;
      return 0 > a ? c - 1 : a
    }, a.Fa)
  };
  var Gh = function (a, b, c) {
    c = 0 > c ? Qg(a, a.Ha) : c;
    var d = z.Ng(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
      var g = z.Og(a, c);
      if (g && a.bm(g)) {
        a.Lc(c);
        break
      }
      e++;
      c = b.call(a, c, d)
    }
  };
  var Kh = function () {};
  var Lh = function (a, b, c) {
    z.gh.call(this, a, c || Kh.a(), b);
    this.ib(1, !1);
    this.ib(2, !1);
    this.ib(4, !1);
    this.ib(32, !1);
    this.L = 1
  };
  var Mh = function () {
    this.dm = []
  };
  var Nh = function (a, b) {
    var c = a.dm[b];
    if (!c) {
      switch (b) {
      case 0:
        c = a.J() + "-highlight";
        break;
      case 1:
        c = a.J() + "-checkbox";
        break;
      case 2:
        c = a.J() + "-content"
      }
      a.dm[b] = c
    }
    return c
  };
  var Oh = function (a, b, c) {
    a = Nh(a, 2);
    return c.q("div", a, b)
  };
  var Ph = function (a, b) {
    var c = a.ja(b);
    if (c) {
      var c = c.firstChild
        , d = Nh(a, 1);
      return !!c && ue(c) && z.Sg(c, d)
    }
    return !1
  };
  var Qh = function (a, b, c, d) {
    Yg(a, c, b.ae());
    z.Zg(a, b, c);
    d != Ph(a, c) && (d ? z.Tg(c, "goog-option") : z.Vg(c, "goog-option"), c = a.ja(c), d ? (a = Nh(a, 1), c.insertBefore(b.u()
      .q("div", a), c.firstChild || null)) : c.removeChild(c.firstChild))
  };
  z.Rh = function (a, b, c, d) {
    z.gh.call(this, a, d || Mh.a(), c);
    this.jb(b)
  };
  var Sh = function () {};
  var Th = function (a, b) {
    z.gh.call(this, null, a || Sh.a(), b);
    this.ib(1, !1);
    this.ib(2, !1);
    this.ib(4, !1);
    this.ib(32, !1);
    this.L = 1
  };
  z.Uh = function (a) {
    this.Vl = a || "menu"
  };
  z.Vh = function (a, b) {
    z.zh.call(this, Ah, b || z.Uh.a(), a);
    this.Pd(!1)
  };
  var Wh = function () {
    this.zl = "";
    this.wo = Xh;
    this.Po = null
  };
  var Yh = function (a) {
    if (a instanceof Wh && a.constructor === Wh && a.wo === Xh) return a.zl;
    Ta("expected object of type SafeHtml, got '" + a + "'");
    return "type_error:SafeHtml"
  };
  var Zh = function (a, b) {
    var c = new Wh;
    c.zl = a;
    c.Po = b;
    return c
  };
  var $h = function (a, b, c) {
    z.Gc.call(this);
    this.target = a;
    this.handle = b || a;
    this.Vi = c || new Pf(window.NaN, window.NaN, window.NaN, window.NaN);
    this.aa = z.ae(a);
    this.S = new z.Jc(this);
    a = ua(Qb, this.S);
    this.jf || (this.jf = []);
    this.jf.push(z.da(void 0) ? (0, z.ta)(a, void 0) : a);
    z.F(this.handle, ["touchstart", "mousedown"], this.Yn, !1, this)
  };
  var ai = function (a) {
    z.da(a.pf) || (a.pf = ag(a.target));
    return a.pf
  };
  var bi = function (a) {
    var b = a.type;
    "touchstart" == b || "touchmove" == b ? cc(a, a.Sa.targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || cc(a, a.Sa.changedTouches[0], a.currentTarget)
  };
  var ci = function (a, b, c) {
    var d = Le(Zd(a.aa));
    b += d.x - a.vl.x;
    c += d.y - a.vl.y;
    a.vl = d;
    a.deltaX += b;
    a.deltaY += c;
    b = di(a, a.deltaX);
    a = ei(a, a.deltaY);
    return new z.H(b, a)
  };
  var fi = function (a, b, c, d) {
    a.Ql && ai(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
    a.target.style.top = d + "px";
    a.dispatchEvent(new gi("drag", a, b.clientX, b.clientY, 0, c, d))
  };
  var di = function (a, b) {
    var c = a.Vi
      , d = (0, window.isNaN)(c.left) ? null : c.left
      , c = (0, window.isNaN)(c.width) ? 0 : c.width;
    return Math.min(null != d ? d + c : window.Infinity, Math.max(null != d ? d : -window.Infinity, b))
  };
  var ei = function (a, b) {
    var c = a.Vi
      , d = (0, window.isNaN)(c.top) ? null : c.top
      , c = (0, window.isNaN)(c.height) ? 0 : c.height;
    return Math.min(null != d ? d + c : window.Infinity, Math.max(null != d ? d : -window.Infinity, b))
  };
  var gi = function (a, b, c, d, e, g, k) {
    z.Zb.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.left = z.da(g) ? g : b.deltaX;
    this.top = z.da(k) ? k : b.deltaY
  };
  var hi = function (a) {
    z.Gc.call(this);
    this.m = a;
    a = z.B ? "focusout" : "blur";
    this.Mp = z.F(this.m, z.B ? "focusin" : "focus", this, !z.B);
    this.Np = z.F(this.m, a, this, !z.B)
  };
  var ii = function (a, b) {
    z.Bg.call(this, b);
    this.Rs = !!a;
    this.Jf = null
  };
  var ji = function (a) {
    if (a.Rs && !a.ab) {
      var b;
      b = a.u()
        .q("iframe", {
          frameborder: 0
          , style: "border:0;vertical-align:bottom;"
          , src: 'javascript:""'
        });
      a.ab = b;
      a.ab.className = a.J() + "-bg";
      z.ig(a.ab, !1);
      hg(a.ab, 0)
    }
    a.Jb || (a.Jb = a.u()
      .q("div", a.J() + "-bg"), z.ig(a.Jb, !1))
  };
  var ki = function (a) {
    a.Nc || (a.Nc = a.u()
      .createElement("span"), z.ig(a.Nc, !1), Ae(a.Nc, !0), a.Nc.style.position = "absolute")
  };
  var li = function (a, b) {
    if (b) {
      a.Gf || (a.Gf = []);
      for (var c = a.u(), c = c.sk(c.aa.body), d = 0; d < c.length; d++) {
        var e = c[d];
        e == a.m || z.yg(e, "hidden") || (z.Q(e, "hidden", !0), a.Gf.push(e))
      }
    } else if (a.Gf) {
      for (d = 0; d < a.Gf.length; d++) a.Gf[d].removeAttribute("aria-hidden");
      a.Gf = null
    }
  };
  var mi = function (a, b) {
    a.ab && z.ig(a.ab, b);
    a.Jb && z.ig(a.Jb, b);
    z.ig(a.f(), b);
    z.ig(a.Nc, b)
  };
  z.ni = function (a, b, c) {
    ii.call(this, b, c);
    this.mb = a || "modal-dialog";
    this.lb = oi(oi(new pi, qi, !0), ri, !1, !0)
  };
  z.si = function (a) {
    a.f() || a.ua();
    return a.f()
  };
  var ti = function (a, b) {
    a.Xh = b;
    if (a.f()) {
      var c = a.ti();
      c && hg(c, a.Xh)
    }
  };
  z.ui = function (a, b) {
    a.sh = b;
    if (a.Q) {
      var c = a.u()
        , d = a.ti()
        , e = a.ab;
      b ? (e && c.Kk(e, a.f()), c.Kk(d, a.f())) : (c.removeNode(e), c.removeNode(d))
    }
    a.F() && li(a, b)
  };
  z.vi = function (a, b) {
    a.qm = b;
    wi(a, b && a.Q)
  };
  var wi = function (a, b) {
    var c = (0, z.Vb)(a.mb + "-title-draggable")
      .split(" ");
    a.f() && (b ? z.Ug(a.Hb, c) : Wg(a.Hb, c));
    b && !a.Yd ? (a.Yd = new $h(a.f(), a.Hb), z.Ug(a.Hb, c), z.F(a.Yd, "start", a.zs, !1, a)) : !b && a.Yd && (a.Yd.U(), a.Yd = null)
  };
  var xi = function (a) {
    if (a.Ue) {
      var b = a.lb
        , c = b && b.bk;
      c ? (b = b.get(c), a.dispatchEvent(new yi(c, b)) && a.D(!1)) : a.D(!1)
    }
  };
  z.zi = function (a) {
    a.lb = null;
    if (a.Pa) {
      if (a.lb) {
        var b = a.lb;
        b.m = a.Pa;
        b.ua()
      } else a.Pa.innerHTML = Yh(Ai);
      z.ig(a.Pa, !!a.lb)
    }
  };
  var yi = function (a, b) {
    this.type = Bi;
    this.key = a;
    this.caption = b
  };
  var pi = function (a) {
    this.ud = a || Zd();
    z.Tc.call(this)
  };
  var oi = function (a, b, c, d) {
    return a.set(b.key, b.caption, c, d)
  };
  var Ci = function () {
    throw Error("Do not instantiate directly");
  };
  var Di = function (a) {
    if (!na(a)) return String(a);
    if (a instanceof Ci) {
      if (a.gm === Ei) return a.Tc();
      if (a.gm === Fi) return z.Fa(a.Tc())
    }
    Ta("Soy template output is unsafe for use as HTML: " + a);
    return "zSoyz"
  };
  var Gi = function () {
    Ci.call(this)
  };
  z.Hi = function (a) {
    var b = new $d(void 0) || Zd();
    a = Di(a(Ii, void 0, void 0));
    a.match(Ji);
    return z.ne(b.aa, a)
  };
  ba = [];
  zd = zd || {};
  z.h = this;
  pa = "closure_uid_" + (1E9 * Math.random() >>> 0);
  qa = 0;
  z.Ki = Date.now || function () {
    return +new Date
  };
  wa = null;
  z.w(Aa, Error);
  Aa.prototype.name = "CustomError";
  var be;
  var Ha, Ia, Ja, Ka, La, Ma, Ga;
  z.Vb = String.prototype.trim ? function (a) {
    return a.trim()
  } : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
  };
  Ha = /&/g;
  Ia = /</g;
  Ja = />/g;
  Ka = /"/g;
  La = /'/g;
  Ma = /\x00/g;
  Ga = /[\x00&<>"']/;
  z.w(Sa, Aa);
  Sa.prototype.name = "AssertionError";
  var Jf, Qd, bh;
  z.ab = Array.prototype;
  z.Ya = z.ab.indexOf ? function (a, b, c) {
    return z.ab.indexOf.call(a, b, c)
  } : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (z.r(a)) return z.r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
      if (c in a && a[c] === b) return c;
    return -1
  };
  z.Oc = z.ab.forEach ? function (a, b, c) {
    z.ab.forEach.call(a, b, c)
  } : function (a, b, c) {
    for (var d = a.length, e = z.r(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
  };
  Jf = z.ab.filter ? function (a, b, c) {
    return z.ab.filter.call(a, b, c)
  } : function (a, b, c) {
    for (var d = a.length, e = [], g = 0, k = z.r(a) ? a.split("") : a, l = 0; l < d; l++)
      if (l in k) {
        var m = k[l];
        b.call(c, m, l, a) && (e[g++] = m)
      }
    return e
  };
  z.Cf = z.ab.map ? function (a, b, c) {
    return z.ab.map.call(a, b, c)
  } : function (a, b, c) {
    for (var d = a.length, e = Array(d), g = z.r(a) ? a.split("") : a, k = 0; k < d; k++) k in g && (e[k] = b.call(c, g[k], k, a));
    return e
  };
  Qd = z.ab.some ? function (a, b, c) {
    return z.ab.some.call(a, b, c)
  } : function (a, b, c) {
    for (var d = a.length, e = z.r(a) ? a.split("") : a, g = 0; g < d; g++)
      if (g in e && b.call(c, e[g], g, a)) return !0;
    return !1
  };
  bh = z.ab.every ? function (a, b, c) {
    return z.ab.every.call(a, b, c)
  } : function (a, b, c) {
    for (var d = a.length, e = z.r(a) ? a.split("") : a, g = 0; g < d; g++)
      if (g in e && !b.call(c, e[g], g, a)) return !1;
    return !0
  };
  var qb;
  a: {
    var Li = z.h.navigator;
    if (Li) {
      var Mi = Li.userAgent;
      if (Mi) {
        qb = Mi;
        break a
      }
    }
    qb = ""
  };
  var lb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var yb;
  var sb, ub = !1
    , vb = [];
  var Ab = 0
    , Cb = 2
    , Eb = 3;
  zb.prototype.then = function (a, b, c) {
    return Jb(this, z.ma(a) ? a : null, z.ma(b) ? b : null, c)
  };
  xa(zb);
  zb.prototype.cancel = function (a) {
    this.L == Ab && rb(function () {
      var b = new Db(a);
      Fb(this, b)
    }, this)
  };
  zb.prototype.lo = function (a) {
    this.L = Ab;
    Bb(this, Cb, a)
  };
  zb.prototype.mo = function (a) {
    this.L = Ab;
    Bb(this, Eb, a)
  };
  zb.prototype.ri = function () {
    for (; this.cc && this.cc.length;) {
      var a = this.cc;
      this.cc = [];
      for (var b = 0; b < a.length; b++) {
        var c = a[b]
          , d = this.Md;
        this.L == Cb ? c.ll(d) : (Gb(this), c.rl(d))
      }
    }
    this.nk = !1
  };
  var Mb = ob;
  z.w(Db, Aa);
  Db.prototype.name = "cancel";
  var Ob = 0
    , Pb = {};
  Nb.prototype.td = !1;
  Nb.prototype.U = function () {
    if (!this.td && (this.td = !0, this.s(), 0 != Ob)) {
      var a = oa(this);
      delete Pb[a]
    }
  };
  Nb.prototype.s = function () {
    if (this.jf)
      for (; this.jf.length;) this.jf.shift()()
  };
  var ec, Ni;
  z.Nf = z.Na(qb, "Opera") || z.Na(qb, "OPR");
  z.B = z.Na(qb, "Trident") || z.Na(qb, "MSIE");
  z.dc = z.Na(qb, "Gecko") && !z.Na(qb.toLowerCase(), "webkit") && !(z.Na(qb, "Trident") || z.Na(qb, "MSIE"));
  z.E = z.Na(qb.toLowerCase(), "webkit");
  Ni = Sb();
  ec = z.Na(Ni && Ni.platform || "", "Mac");
  var Wf = !!Sb() && z.Na(Sb()
      .appVersion || "", "X11")
    , Wb = function () {
      var a = ""
        , b;
      if (z.Nf && z.h.opera) return a = z.h.opera.version, z.ma(a) ? a() : a;
      z.dc ? b = /rv\:([^\);]+)(\)|;)/ : z.B ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z.E && (b = /WebKit\/(\S+)/);
      b && (a = (a = b.exec(qb)) ? a[1] : "");
      return z.B && (b = Tb(), b > (0, window.parseFloat)(a)) ? String(b) : a
    }()
    , Ub = {}
    , Oi = z.h.document
    , Yb = Oi && z.B ? Tb() || ("CSS1Compat" == Oi.compatMode ? (0, window.parseInt)(Wb, 10) : 5) : void 0;
  var gc = !z.B || Xb(9)
    , yc = !z.B || Xb(9)
    , Pi = z.B && !z.A("9");
  !z.E || z.A("528");
  z.dc && z.A("1.9b") || z.B && z.A("8") || z.Nf && z.A("9.5") || z.E && z.A("528");
  z.dc && !z.A("8") || z.B && z.A("9");
  z.Zb.prototype.s = function () {};
  z.Zb.prototype.U = function () {};
  z.Zb.prototype.stopPropagation = function () {
    this.nf = !0
  };
  z.Zb.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Nn = !1
  };
  z.Qi = z.B ? "focusin" : "DOMFocusIn";
  ac[" "] = fa;
  z.w(z.bc, z.Zb);
  var hc = [1, 4, 2];
  z.bc.prototype.stopPropagation = function () {
    z.bc.g.stopPropagation.call(this);
    this.Sa.stopPropagation ? this.Sa.stopPropagation() : this.Sa.cancelBubble = !0
  };
  z.bc.prototype.preventDefault = function () {
    z.bc.g.preventDefault.call(this);
    var a = this.Sa;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Pi) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  z.bc.prototype.zm = aa(0);
  z.bc.prototype.s = function () {};
  var jc = "closure_listenable_" + (1E6 * Math.random() | 0)
    , lc = 0;
  nc.prototype.add = function (a, b, c, d, e) {
    var g = a.toString();
    a = this.rb[g];
    a || (a = this.rb[g] = [], this.Rh++);
    var k = pc(a, b, d, e); - 1 < k ? (b = a[k], c || (b.$h = !1)) : (b = new kc(b, this.src, g, !!d, e), b.$h = c, a.push(b));
    return b
  };
  nc.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.rb)) return !1;
    var e = this.rb[a];
    b = pc(e, b, c, d);
    return -1 < b ? (mc(e[b]), z.ab.splice.call(e, b, 1), 0 == e.length && (delete this.rb[a], this.Rh--), !0) : !1
  };
  nc.prototype.Zf = function (a) {
    a = a && a.toString();
    var b = 0
      , c;
    for (c in this.rb)
      if (!a || c == a) {
        for (var d = this.rb[c], e = 0; e < d.length; e++) ++b, mc(d[e]);
        delete this.rb[c];
        this.Rh--
      }
    return b
  };
  nc.prototype.Hg = function (a, b, c, d) {
    a = this.rb[a.toString()];
    var e = -1;
    a && (e = pc(a, b, c, d));
    return -1 < e ? a[e] : null
  };
  var tc = "closure_lm_" + (1E6 * Math.random() | 0)
    , Cc = {}
    , wc = 0
    , Fc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  z.w(z.Gc, Nb);
  z.Gc.prototype[jc] = !0;
  z.f = z.Gc.prototype;
  z.f.yi = function () {
    return this.wl
  };
  z.f.Hl = function (a) {
    this.wl = a
  };
  z.f.addEventListener = function (a, b, c, d) {
    z.F(this, a, b, c, d)
  };
  z.f.removeEventListener = function (a, b, c, d) {
    Ac(this, a, b, c, d)
  };
  z.f.dispatchEvent = function (a) {
    var b, c = this.yi();
    if (c)
      for (b = []; c; c = c.yi()) b.push(c);
    var c = this.xo
      , d = a.type || a;
    if (z.r(a)) a = new z.Zb(a, c);
    else if (a instanceof z.Zb) a.target = a.target || c;
    else {
      var e = a;
      a = new z.Zb(d, c);
      z.kb(a, e)
    }
    var e = !0
      , g;
    if (b)
      for (var k = b.length - 1; !a.nf && 0 <= k; k--) g = a.currentTarget = b[k], e = Hc(g, d, !0, a) && e;
    a.nf || (g = a.currentTarget = c, e = Hc(g, d, !0, a) && e, a.nf || (e = Hc(g, d, !1, a) && e));
    if (b)
      for (k = 0; !a.nf && k < b.length; k++) g = a.currentTarget = b[k], e = Hc(g, d, !1, a) && e;
    return e
  };
  z.f.s = function () {
    z.Gc.g.s.call(this);
    this.vd && this.vd.Zf(void 0);
    this.wl = null
  };
  z.f.n = function (a, b, c, d) {
    return this.vd.add(String(a), b, !1, c, d)
  };
  z.f.Rm = function (a, b, c, d) {
    return this.vd.add(String(a), b, !0, c, d)
  };
  z.f.Xa = function (a, b, c, d) {
    return this.vd.remove(String(a), b, c, d)
  };
  z.f.Hg = function (a, b, c, d) {
    return this.vd.Hg(String(a), b, c, d)
  };
  z.w(z.Jc, Nb);
  var Ri = [];
  z.f = z.Jc.prototype;
  z.f.n = function (a, b, c, d) {
    z.ja(b) || (b && (Ri[0] = b.toString()), b = Ri);
    for (var e = 0; e < b.length; e++) {
      var g = z.F(a, b[e], c || this.handleEvent, d || !1, this.Te || this);
      if (!g) break;
      this.ka[g.key] = g
    }
    return this
  };
  z.f.Rm = function (a, b, c, d) {
    return Kc(this, a, b, c, d)
  };
  z.f.Xa = function (a, b, c, d, e) {
    if (z.ja(b))
      for (var g = 0; g < b.length; g++) this.Xa(a, b[g], c, d, e);
    else c = c || this.handleEvent, e = e || this.Te || this, c = qc(c), d = !!d, b = ic(a) ? a.Hg(b, c, d, e) : a ? (a = sc(a)) ? a.Hg(b, c, d, e) : null : null, b && (Bc(b), delete this.ka[b.key]);
    return this
  };
  z.f.Zf = function () {
    z.gb(this.ka, Bc);
    this.ka = {}
  };
  z.f.s = function () {
    z.Jc.g.s.call(this);
    this.Zf()
  };
  z.f.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  z.Rc = "StopIteration" in z.h ? z.h.StopIteration : Error("StopIteration");
  z.Pc.prototype.next = function () {
    throw z.Rc;
  };
  z.Pc.prototype.yf = function () {
    return this
  };
  z.f = z.Tc.prototype;
  z.f.ui = function () {
    return this.va
  };
  z.f.yd = function () {
    Uc(this);
    for (var a = [], b = 0; b < this.ka.length; b++) a.push(this.Fc[this.ka[b]]);
    return a
  };
  z.f.Vc = function () {
    Uc(this);
    return this.ka.concat()
  };
  z.f.Cf = aa(1);
  z.f.clear = function () {
    this.Fc = {};
    this.Uh = this.va = this.ka.length = 0
  };
  z.f.remove = function (a) {
    return z.Vc(this.Fc, a) ? (delete this.Fc[a], this.va--, this.Uh++, this.ka.length > 2 * this.va && Uc(this), !0) : !1
  };
  z.f.get = function (a, b) {
    return z.Vc(this.Fc, a) ? this.Fc[a] : b
  };
  z.f.set = function (a, b) {
    z.Vc(this.Fc, a) || (this.va++, this.ka.push(a), this.Uh++);
    this.Fc[a] = b
  };
  z.f.yo = function (a) {
    var b;
    a instanceof z.Tc ? (b = a.Vc(), a = a.yd()) : (b = ib(a), a = hb(a));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
  };
  z.f.forEach = function (a, b) {
    for (var c = this.Vc(), d = 0; d < c.length; d++) {
      var e = c[d]
        , g = this.get(e);
      a.call(b, g, e, this)
    }
  };
  z.f.clone = function () {
    return new z.Tc(this)
  };
  z.f.yf = function (a) {
    Uc(this);
    var b = 0
      , c = this.ka
      , d = this.Fc
      , e = this.Uh
      , g = this
      , k = new z.Pc;
    k.next = function () {
      for (;;) {
        if (e != g.Uh) throw Error("The map has changed since the iterator was created");
        if (b >= c.length) throw z.Rc;
        var k = c[b++];
        return a ? k : d[k]
      }
    };
    return k
  };
  var Zc = {};
  ad.prototype.wm = null;
  ad.prototype.vm = null;
  var Si = 0;
  ad.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || Si++;
    d || (0, z.Ki)();
    this.Tg = a;
    this.iq = b;
    delete this.wm;
    delete this.vm
  };
  ad.prototype.Sn = function (a) {
    this.Tg = a
  };
  cd.prototype.toString = function () {
    return this.name
  };
  var Gd = new cd("SEVERE", 1E3)
    , $e = new cd("WARNING", 900)
    , Ti = new cd("INFO", 800)
    , hd = new cd("CONFIG", 700)
    , jd = new cd("FINE", 500);
  z.f = bd.prototype;
  z.f.getName = function () {
    return this.zn
  };
  z.f.getParent = function () {
    return this.V
  };
  z.f.sk = function () {
    this.Ka || (this.Ka = {});
    return this.Ka
  };
  z.f.Sn = function (a) {
    this.Tg = a
  };
  z.f.log = function (a, b, c) {
    if (a.value >= dd(this)
      .value)
      for (z.ma(b) && (b = b()), a = this.Cm(a, b, c, bd.prototype.log), b = "log:" + a.iq, z.h.console && (z.h.console.timeStamp ? z.h.console.timeStamp(b) : z.h.console.markTimeline && z.h.console.markTimeline(b)), z.h.msWriteProfilerMark && z.h.msWriteProfilerMark(b), b = this; b;) {
        c = b;
        var d = a;
        if (c.Hm)
          for (var e = 0, g = void 0; g = c.Hm[e]; e++) g(d);
        b = b.getParent()
      }
  };
  z.f.Cm = function (a, b, c, d) {
    a = new ad(a, String(b), this.zn);
    if (c) {
      a.wm = c;
      var e;
      d = d || bd.prototype.Cm;
      try {
        var g;
        var k = ea("window.location.href");
        if (z.r(c)) g = {
          message: c
          , name: "Unknown error"
          , lineNumber: "Not available"
          , fileName: k
          , stack: "Not available"
        };
        else {
          var l, m;
          b = !1;
          try {
            l = c.lineNumber || c.Gt || "Not available"
          } catch (n) {
            l = "Not available", b = !0
          }
          try {
            m = c.fileName || c.filename || c.sourceURL || z.h.$googDebugFname || k
          } catch (p) {
            m = "Not available", b = !0
          }
          g = !b && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
            message: c.message ||
              "Not available"
            , name: c.name || "UnknownError"
            , lineNumber: l
            , fileName: m
            , stack: c.stack || "Not available"
          }
        }
        e = "Message: " + z.Fa(g.message) + '\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + z.Fa(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + z.Fa(Wc(d) + "-> ")
      } catch (q) {
        e = "Exception trying to expose exception! You win, we lose. " + q
      }
      a.vm = e
    }
    return a
  };
  z.f.info = function (a, b) {
    this.log(Ti, a, b)
  };
  var gd = {}
    , fd = null;
  z.w(kd, Nb);
  kd.prototype.w = z.ed("goog.net.BulkLoaderHelper");
  kd.prototype.vk = function () {
    return this.Hj
  };
  kd.prototype.s = function () {
    kd.g.s.call(this);
    this.Hj = this.xf = null
  };
  z.Ui = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  md.prototype.am = null;
  var Vi;
  z.w(pd, md);
  Vi = new pd;
  var td = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/
    , sd = z.E;
  z.w(z.ud, z.Gc);
  var vd = "";
  z.ud.prototype.w = z.ed("goog.net.XhrIo");
  var Hd = /^https?$/i
    , Wi = ["POST", "PUT"];
  z.f = z.ud.prototype;
  z.f.send = function (a, b, c, d) {
    if (this.C) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ui + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Ui = a;
    this.Rg = "";
    this.Pm = b;
    this.jk = !1;
    this.Ud = !0;
    this.C = this.Vj ? qd(this.Vj) : qd(Vi);
    this.Uj = this.Vj ? nd(this.Vj) : nd(Vi);
    this.C.onreadystatechange = (0, z.ta)(this.En, this);
    try {
      z.id(this.w, Cd(this, "Opening Xhr")), this.Hk = !0, this.C.open(b, String(a), !0), this.Hk = !1
    } catch (e) {
      z.id(this.w, Cd(this, "Error opening Xhr: " + e.message));
      this.qi(5, e);
      return
    }
    a =
      c || "";
    var g = this.headers.clone();
    d && z.Nc(d, function (a, b) {
      g.set(b, a)
    });
    d = Va(g.Vc());
    c = z.h.FormData && a instanceof z.h.FormData;
    !z.Xa(Wi, b) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    g.forEach(function (a, b) {
      this.C.setRequestHeader(b, a)
    }, this);
    this.Mn && (this.C.responseType = this.Mn);
    "withCredentials" in this.C && (this.C.withCredentials = this.Ss);
    try {
      Fd(this), 0 < this.Ph && (this.Tj = wd(this.C), z.id(this.w, Cd(this, "Will abort after " + this.Ph + "ms if incomplete, xhr2 " + this.Tj))
        , this.Tj ? (this.C.timeout = this.Ph, this.C.ontimeout = (0, z.ta)(this.Qh, this)) : this.Oj = z.Ic(this.Qh, this.Ph, this)), z.id(this.w, Cd(this, "Sending request")), this.Li = !0, this.C.send(a), this.Li = !1
    } catch (k) {
      z.id(this.w, Cd(this, "Send error: " + k.message)), this.qi(5, k)
    }
  };
  z.f.Qh = function () {
    "undefined" != typeof zd && this.C && (this.Rg = "Timed out after " + this.Ph + "ms, aborting", z.id(this.w, Cd(this, this.Rg)), this.dispatchEvent("timeout"), this.abort(8))
  };
  z.f.qi = function (a, b) {
    this.Ud = !1;
    this.C && (this.Xe = !0, this.C.abort(), this.Xe = !1);
    this.Rg = b;
    xd(this);
    Ed(this)
  };
  z.f.abort = function () {
    this.C && this.Ud && (z.id(this.w, Cd(this, "Aborting")), this.Ud = !1, this.Xe = !0, this.C.abort(), this.Xe = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ed(this))
  };
  z.f.s = function () {
    this.C && (this.Ud && (this.Ud = !1, this.Xe = !0, this.C.abort(), this.Xe = !1), Ed(this, !0));
    z.ud.g.s.call(this)
  };
  z.f.En = function () {
    this.td || (this.Hk || this.Li || this.Xe ? yd(this) : this.Yq())
  };
  z.f.Yq = function () {
    yd(this)
  };
  z.f.Ye = function () {
    return !!this.C
  };
  z.f.getResponseHeader = function (a) {
    return this.C && 4 == Ad(this) ? this.C.getResponseHeader(a) : void 0
  };
  z.f.getAllResponseHeaders = function () {
    return this.C && 4 == Ad(this) ? this.C.getAllResponseHeaders() : ""
  };
  z.w(Jd, z.Gc);
  z.f = Jd.prototype;
  z.f.w = z.ed("goog.net.BulkLoader");
  z.f.vk = function () {
    return this.Ve.vk()
  };
  z.f.load = function () {
    var a = this.S
      , b = this.Ve.xf;
    z.G(this.w, "Starting load of code with " + b.length + " uris.");
    for (var c = 0; c < b.length; c++) {
      var d = new z.ud;
      a.n(d, "complete", (0, z.ta)(this.pp, this, c));
      d.send(b[c])
    }
  };
  z.f.pp = function (a, b) {
    z.G(this.w, 'Received event "' + b.type + '" for id ' + a + " with uri " + this.Ve.xf[a]);
    var c = b.target;
    Dd(c) ? this.Dk(a, c) : this.Ak(a, c)
  };
  z.f.Dk = function (a, b) {
    var c = z.Id(b);
    this.Ve.Hj[a] = c;
    a: {
      var d = this.Ve
        , c = d.Hj;
      if (c.length == d.xf.length) {
        for (d = 0; d < c.length; d++)
          if (null == c[d]) {
            c = !1;
            break a
          }
        c = !0
      } else c = !1
    }
    c && (z.G(this.w, "All uris loaded."), this.dispatchEvent("success"));
    b.U()
  };
  z.f.Ak = function (a, b) {
    this.dispatchEvent("error");
    b.U()
  };
  z.f.s = function () {
    Jd.g.s.call(this);
    this.S.U();
    this.S = null;
    this.Ve.U();
    this.Ve = null
  };
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  var Wd = z.h.setTimeout
    , Sd = z.h.clearTimeout;
  z.f = Kd.prototype;
  z.f.cancel = function (a) {
    if (this.Zd) this.Md instanceof Kd && this.Md.cancel();
    else {
      if (this.V) {
        var b = this.V;
        delete this.V;
        a ? b.cancel(a) : (b.ak--, 0 >= b.ak && b.cancel())
      }
      this.An ? this.An.call(this.nm, this) : this.Kl = !0;
      this.Zd || Nd(this, new Vd)
    }
  };
  z.f.hm = function (a, b) {
    this.Zj = !1;
    Ld(this, a, b)
  };
  z.f.Xd = function () {
    if (this.Zd) {
      if (!this.Kl) throw new Ud;
      this.Kl = !1
    }
  };
  z.f.tg = function (a) {
    this.Xd();
    Ld(this, !0, a)
  };
  z.f.then = function (a, b, c) {
    var d, e, g = new zb(function (a, b) {
      d = a;
      e = b
    });
    Od(this, d, function (a) {
      a instanceof Vd ? g.cancel() : e(a)
    });
    return g.then(a, b, c)
  };
  xa(Kd);
  z.w(Ud, Aa);
  Ud.prototype.message = "Deferred has already fired";
  Ud.prototype.name = "AlreadyCalledError";
  z.w(Vd, Aa);
  Vd.prototype.message = "Deferred was canceled";
  Vd.prototype.name = "CanceledError";
  Td.prototype.Js = function () {
    delete Rd[this.Rb];
    throw this.qi;
  };
  var Rd = {};
  var ke = !z.B || Xb(9)
    , Xi = !z.dc && !z.B || z.B && Xb(9) || z.dc && z.A("1.9.1")
    , Ce = z.B && !z.A("9");
  z.f = z.H.prototype;
  z.f.clone = function () {
    return new z.H(this.x, this.y)
  };
  z.f.toString = function () {
    return "(" + this.x + ", " + this.y + ")"
  };
  z.f.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
  };
  z.f.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
  };
  z.f.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  };
  z.f.translate = function (a, b) {
    a instanceof z.H ? (this.x += a.x, this.y += a.y) : (this.x += a, la(b) && (this.y += b));
    return this
  };
  z.f.scale = function (a, b) {
    var c = la(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
  };
  z.f = Yd.prototype;
  z.f.clone = function () {
    return new Yd(this.width, this.height)
  };
  z.f.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
  };
  z.f.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  z.f.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  z.f.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  z.f.scale = function (a, b) {
    var c = la(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
  };
  var ee = {
      cellpadding: "cellPadding"
      , cellspacing: "cellSpacing"
      , colspan: "colSpan"
      , frameborder: "frameBorder"
      , height: "height"
      , maxlength: "maxLength"
      , role: "role"
      , rowspan: "rowSpan"
      , type: "type"
      , usemap: "useMap"
      , valign: "vAlign"
      , width: "width"
    }
    , Fe = {
      SCRIPT: 1
      , STYLE: 1
      , HEAD: 1
      , IFRAME: 1
      , OBJECT: 1
    }
    , Ge = {
      IMG: " "
      , BR: "\n"
    };
  z.f = $d.prototype;
  z.f.u = Zd;
  z.f.f = function (a) {
    return z.r(a) ? this.aa.getElementById(a) : a
  };
  z.f.q = function (a, b, c) {
    return je(this.aa, arguments)
  };
  z.f.createElement = function (a) {
    return this.aa.createElement(a)
  };
  z.f.createTextNode = function (a) {
    return this.aa.createTextNode(String(a))
  };
  z.f.appendChild = function (a, b) {
    a.appendChild(b)
  };
  z.f.append = oe;
  z.f.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
      return !1
    }
    return !0
  };
  z.f.Kk = qe;
  z.f.removeNode = z.re;
  z.f.sk = function (a) {
    return Xi && void 0 != a.children ? a.children : Jf(a.childNodes, function (a) {
      return 1 == a.nodeType
    })
  };
  z.f.Am = se;
  z.f.Ip = ue;
  z.f.contains = z.ve;
  z.f.zd = function (a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!ye(a) || ze(a)) : xe(a)) && z.B ? (a = z.ma(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
      height: a.offsetHeight
      , width: a.offsetWidth
    }, a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
  };
  var Ne = []
    , Te = 0
    , Se = 1;
  z.w(Re, Aa);
  var Yi, Zi, $i, Ze;
  $i = Zi = Yi = !1;
  var aj = qb;
  aj && (-1 != aj.indexOf("Firefox") || -1 != aj.indexOf("Camino") || (-1 != aj.indexOf("iPhone") || -1 != aj.indexOf("iPod") ? Yi = !0 : -1 != aj.indexOf("iPad") ? Zi = !0 : -1 != aj.indexOf("Chrome") && ($i = !0)));
  z.bj = Yi;
  z.cj = Zi;
  Ze = $i;
  z.w(Ve, z.Gc);
  z.f = Ve.prototype;
  z.f.Ug = z.ed("goog.module.ModuleLoader");
  z.f.mi = !1;
  z.f.Wn = !1;
  z.f.Op = function (a, b, c, d) {
    var e = this.Bd[a] || new df;
    e.Sm = !0;
    e.Ml = c || null;
    e.kk = d || null;
    if (this.Bd[a]) null != e.El && We(this, a);
    else {
      this.Bd[a] = e;
      c = [];
      for (d = 0; d < a.length; d++) z.cb(c, b[a[d]].xf);
      z.G(this.Ug, "downloadModules ids:" + a + " uris:" + c);
      !this.mi || this.Wn || this.mi && Ze ? (this.Bd[a].Kn = c, b = new Jd(c), c = this.S, c.n(b, "success", (0, z.ta)(this.Dk, this, b, a)), c.n(b, "error", (0, z.ta)(this.Ak, this, b, a)), b.load()) : Me(c)
    }
  };
  z.f.Dk = function (a, b) {
    z.G(this.Ug, "Code loaded for module(s): " + b);
    var c = this.Bd[b];
    c.El = a.vk();
    c.Sm && We(this, b);
    z.Ic(a.U, 5, a)
  };
  z.f.Ak = function (a, b, c) {
    var d = this.Bd[b];
    d && (delete this.Bd[b], bf(this, b, d.kk, c));
    z.Ic(a.U, 5, a)
  };
  z.f.s = function () {
    Ve.g.s.call(this);
    this.S.U();
    this.S = null
  };
  var af = "a"
    , Ye = "b"
    , cf = "c";
  z.w(Xe, z.Zb);
  z.w(ef, Nb);
  ef.prototype.li = function () {
    return this.km ? this.km() : {}
  };
  ef.prototype.hk = function (a) {
    if (this.pm) this.pm(a);
    else if (na(a))
      if (z.ma(a.U)) a.U();
      else
        for (var b in a) delete a[b]
  };
  ef.prototype.s = function () {
    ef.g.s.call(this);
    for (var a = this.Cg; a.length;) this.hk(a.pop());
    delete this.Cg
  };
  gf.prototype.w = z.ed("goog.debug.Trace");
  jf.prototype.toString = function () {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.Sl && a.push(" [VarAlloc = ", this.Sl, "]");
    return a.join("")
  };
  hf.prototype.toString = function () {
    return null == this.type ? this.Jo : "[" + this.type + "] " + this.Jo
  };
  gf.prototype.reset = function () {
    for (var a = 0; a < this.Ag.length; a++) {
      var b = this.lk.id;
      b && ff(this.Gk, b);
      ff(this.lk, this.Ag[a])
    }
    this.Ag.length = 0;
    this.tl.clear();
    this.Zn = (0, z.Ki)();
    this.em = this.ho = this.io = this.jo = this.ko = 0;
    b = this.Mh.Vc();
    for (a = 0; a < b.length; a++) {
      var c = this.Mh.get(b[a]);
      c.count = 0;
      c.time = 0;
      c.Sl = 0;
      ff(this.bo, c)
    }
    this.Mh.clear()
  };
  gf.prototype.toString = function () {
    for (var a = [], b = -1, c = [], d = 0; d < this.Ag.length; d++) {
      var e = this.Ag[d];
      1 == e.mk && c.pop();
      a.push(" ", kf(e, this.Zn, b, c.join("")));
      b = e.um;
      a.push("\n");
      0 == e.mk && c.push("|  ")
    }
    if (0 != this.tl.ui()) {
      var g = (0, z.Ki)();
      a.push(" Unstopped timers:\n");
      z.Sc(this.tl, function (b) {
        a.push("  ", b, " (", g - b.startTime, " ms, started at ", mf(b.startTime), ")\n")
      })
    }
    b = this.Mh.Vc();
    for (d = 0; d < b.length; d++) c = this.Mh.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.ho
      , "\n", "Total comments created ", this.em, "\n", "Overhead start: ", this.ko, " ms\n", "Overhead end: ", this.jo, " ms\n", "Overhead comment: ", this.io, " ms\n");
    return a.join("")
  };
  new gf;
  z.w(nf, Nb);
  of.prototype.xm = function (a) {
    this.si && (this.si.call(this.Te || null, a), this.si = this.Te = null)
  };
  of.prototype.abort = function () {
    this.Te = this.si = null
  };
  z.w(pf, Nb);
  z.f = pf.prototype;
  z.f.xf = null;
  z.f.hq = nf;
  z.f.gf = null;
  z.f.wd = function () {
    return this.Rb
  };
  z.f.Dj = function (a, b) {
    return this.Ej(this.sl, a, b)
  };
  z.f.Ej = function (a, b, c) {
    b = new of(b, c);
    a.push(b);
    return b
  };
  z.f.s = function () {
    pf.g.s.call(this);
    Qb(this.gf)
  };
  z.w(z.uf, Nb);
  z.ga(z.uf);
  z.f = z.uf.prototype;
  z.f.w = z.ed("goog.module.ModuleManager");
  z.f.Xl = !1;
  z.f.Ko = !1;
  z.f.Ok = null;
  z.f.ii = 0;
  z.f.Nm = !1;
  z.f.po = !1;
  z.f.xn = null;
  z.f.Dm = function () {
    return this.xn
  };
  z.f.Ye = function () {
    return 0 < this.yc.length
  };
  z.f.Wi = function (a, b, c) {
    b || (this.ii = 0);
    b = Af(this, a);
    z.G(this.w, "Loading module(s): " + b);
    this.yc = b;
    this.Ld = this.Xl ? a : z.bb(b);
    vf(this);
    0 != b.length && (this.Bh.push.apply(this.Bh, b), a = (0, z.ta)(this.Ok.Op, this.Ok, z.bb(b), this.wb, null, (0, z.ta)(this.up, this, this.Ld, b), (0, z.ta)(this.vp, this), !!c), (c = 5E3 * Math.pow(this.ii, 2)) ? window.setTimeout(a, c) : a())
  };
  z.f.load = function (a, b) {
    var c = [];
    fb([a], c);
    for (var d = [], e = {}, g = 0; g < c.length; g++) {
      var k = c[g]
        , l = this.wb[k];
      if (!l) throw Error("Unknown module: " + k);
      var m = new Kd;
      e[k] = m;
      l.gf ? m.tg(this.xn) : (wf(this, k, l, !!b, m), xf(this, k) || d.push(k))
    }
    0 < d.length && zf(this, d);
    return e[a]
  };
  var Ff = 4;
  z.f = z.uf.prototype;
  z.f.up = function (a, b, c) {
    this.ii++;
    this.Ld = a;
    (0, z.Oc)(b, ua(z.$a, this.Bh), this);
    401 == c ? (z.G(this.w, "Module loading unauthorized"), Ef(this, 0), this.xb.length = 0) : 410 == c ? (If(this, 3), Gf(this)) : 3 <= this.ii ? (z.G(this.w, "Aborting after failure to load: " + this.yc), If(this, 1), Gf(this)) : (z.G(this.w, "Retrying after failure to load: " + this.yc), this.Wi(this.Ld, !0, 8001 == c))
  };
  z.f.vp = function () {
    z.G(this.w, "Aborting after timeout: " + this.yc);
    If(this, 2);
    Gf(this)
  };
  z.f.Dj = function (a, b) {
    z.ja(a) || (a = [a]);
    for (var c = 0; c < a.length; c++) this.Ej(a[c], b)
  };
  z.f.Ej = function (a, b) {
    var c = this.ai;
    c[a] || (c[a] = []);
    c[a].push(b)
  };
  z.f.ri = function (a) {
    for (var b = this.ai[a], c = 0; b && c < b.length; c++) b[c](a)
  };
  z.f.s = function () {
    z.uf.g.s.call(this);
    Rb(hb(this.wb), this.Yh);
    this.ai = this.xb = this.gg = this.Ld = this.yc = this.wb = null
  };
  Kf.prototype.Jk = function () {
    try {
      (new z.Lf)
      .T()
    } catch (a) {
      this.pn && (this.pn = !0, (0, window.setTimeout)(this.Jk, 0))
    }
  };
  z.u("textHelp.webreader.Installer", Kf);
  Kf.prototype.inject = Kf.prototype.Jk;
  z.f = z.Lf.prototype;
  z.f.T = function () {
    try {
      try {
        z.Hf(z.uf.a(), "Configuration", this.tq, this)
      } catch (a) {
        z.R.a()
          .b(a.stack)
      }
    } catch (b) {
      window.console.error(b)
    }
  };
  z.f.Jq = function (a) {
    try {
      if (window.texthelp.RW4GC.currentToolbar = a, void 0 == window.texthelp.RW4GC.riot.toolbar || null == window.texthelp.RW4GC.riot.toolbar) {
        window.texthelp.RW4GC.pageToolbar = this.t.ec();
        window.texthelp.RW4GC.riot.toolbar = window.texthelp.RW4GC.riot.mount("texthelp-toolbar", window.texthelp.RW4GC.currentToolbar)[0];
        window.texthelp.RW4GC.riot.tooltip = window.texthelp.RW4GC.riot.mount("texthelp-tooltip")[0];
        var b = z.R.a()
          .wa();
        null !== b ? this.ml(b) : this.gj = z.S.a()
          .k("onLicenseReceived", this.ml
            , this)
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Iq = function (a) {
    window.texthelp.RW4GC.currentDialogs = a
  };
  z.f.lm = function () {
    try {
      if (void 0 == window.texthelp || void 0 == window.texthelp.RW4GC) return (0, window.setTimeout)(z.R.a()
        .bind(this, this.lm), 10);
      window.texthelp.RW4GC.toolbarHandlerInstance = new window.texthelp.RW4GC.docsToolbarEventHandler(this);
      window.texthelp.RW4GC.thToolbarStoreInstance = new window.texthelp.RW4GC.toolbarstore(window.texthelp.RW4GC.toolbarHandlerInstance);
      window.texthelp.RW4GC.RiotControl.addStore(window.texthelp.RW4GC.thToolbarStoreInstance);
      window.texthelp.RW4GC.pageToolbar = this.t.ec();
      var a = z.R.a()
        .bind(this, this.Jq);
      window.texthelp.RW4GC.RiotControl.trigger("load_Toolbar", a);
      var b = z.R.a()
        .bind(this, this.Iq);
      window.texthelp.RW4GC.RiotControl.trigger("load_Dialogs", b)
    } catch (c) {
      z.R.a()
        .b(c.stack)
    }
  };
  z.f.tq = function () {
    try {
      z.Hf(z.uf.a(), "WebReaderAPI", this.Gr, this)
    } catch (a) {
      z.R.a()
        .b(a.stack)
    }
  };
  z.f.Uf = aa(2);
  z.f.Kd = aa(3);
  z.f.mr = function () {
    try {
      this.ih = z.S.a()
        .k("onGetOAuthTokenSilent", this.Cq, this);
      window.postMessage({
        method: "getOAuthTokenSilent"
        , type: "1757FROM_PAGERW4G"
      }, "*");
      var a = window.document.getElementById("thSpeechStreamTBPlaceHolder");
      if (null === a) {
        a = window.document.createElement("div");
        a.setAttribute("id", "thSpeechStreamTBPlaceHolder");
        a.setAttribute("style", "display:block");
        a.setAttribute("data-root", "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/");
        var b = window.document.createElement("script");
        b.type =
          "text/javascript";
        b.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/components.js";
        a.appendChild(b);
        var c = window.document.createElement("link");
        c.type = "text/css";
        c.rel = "stylesheet";
        c.href = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/thtoolbaricons.css";
        a.appendChild(c);
        var d = window.document.createElement("link");
        d.type = "text/css";
        d.rel = "stylesheet";
        d.href = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/thmaterial.css";
        a.appendChild(d);
        var e = window.document.createElement("script");
        e.type = "text/javascript";
        e.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/notifications.js";
        e.id = "webReaderModule";
        a.appendChild(e);
        var g = window.document.createElement("script");
        g.type = "text/javascript";
        g.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/screenmasking/screenmasking.js";
        a.appendChild(g);
        var k = window.document.createElement("link");
        k.rel = "stylesheet";
        k.type = "text/css";
        k.href = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/screenmasking/screenmasking.css";
        a.appendChild(k);
        c = window.document.createElement("link");
        c.rel = "stylesheet";
        c.type = "text/css";
        c.href = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/thSettingsDialog.css";
        a.appendChild(c);
        var l = window.document.createElement("link");
        l.rel = "stylesheet";
        l.type = "text/css";
        l.href = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/notifications.css";
        a.appendChild(l);
        var m = window.document.createElement("audio");
        m.id = "thWebAudio";
        m.type = "audio/mpeg";
        a.appendChild(m);
        var n = window.document.createElement("texthelp-toolbar");
        a.appendChild(n);
        var p = window.document.createElement("texthelp-tooltip");
        a.appendChild(p);
        var q = window.document.createElement("texthelp-dictionary");
        a.appendChild(q);
        q = window.document.createElement("texthelp-picture-dictionary");
        a.appendChild(q);
        q = window.document.createElement("texthelp-translator");
        a.appendChild(q);
        window.document.body.insertBefore(a, window.document.body.firstChild)
      }
      var s = new $d;
      this.dl = new z.dj(s);
      this.dl.T(this);
      this.dl.ua(s.f(z.R.a()
        .Df()));
      (0, window.setTimeout)(z.R.a()
        .bind(this
          , this.lm), 10)
    } catch (t) {
      z.R.a()
        .b(t)
    }
  };
  z.f.uj = function (a) {
    try {
      z.S.a()
        .vf(this.ij), void 0 != a && null != a && (z.R.a()
          .Fh(a), z.S.a()
          .l("onLicenseReceived", a))
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Cq = function (a) {
    try {
      z.S.a()
        .vf(this.ih), void 0 != a && null != a && z.S.a()
        .l("onLicenseReceived", a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.ml = function (a) {
    try {
      null !== this.gj && z.S.a()
        .vf(this.gj);
      var b = [];
      b.push(a);
      b.push(z.T.a()
        .v()
        .bar.visible);
      z.U.a()
        .Fe(z.T.a()
          .v()
          .language.language);
      window.texthelp.RW4GC.RiotControl.trigger("authenticated", b);
      var c = a.Features
        , d = window.texthelp.RW4GC.currentToolbar;
      if (void 0 != d) {
        for (b = 0; b < c.length; b++)
          if ("Dictionary" == c[b].FeatureName) N("dictionary", d)
            .enabled = c[b].Enabled;
          else if ("PictureDictionary" == c[b].FeatureName) N("picturedictionary", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("Speech" == c[b].FeatureName) N("play", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled, N("clicktospeak", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled, N("pause", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled, N("stop", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("FactFinder" == c[b].FeatureName) N("factfinder", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("Translator" == c[b].FeatureName) N("translator", window.texthelp.RW4GC.currentToolbar)
          .enabled =
          c[b].Enabled;
        else if ("StudySkills" == c[b].FeatureName) N("highlightblue", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled, N("highlightpink", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled, N("highlightyellow", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled, N("highlightgreen", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled, N("highlightclear", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled, N("highlightscollect", window.texthelp.RW4GC.currentToolbar)
          .enabled =
          c[b].Enabled;
        else if ("Vocab" == c[b].FeatureName) N("vocabtool", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("Simplify" == c[b].FeatureName) N("simplify", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("Prediction" == c[b].FeatureName) N("prediction", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("Prediction-PredictAhead" == c[b].FeatureName) window.prediction_PredictAhead = c[b].Enabled;
        else if ("SSR" == c[b].FeatureName) N("screenshotreader", window.texthelp.RW4GC.currentToolbar)
          .enabled =
          c[b].Enabled;
        else if ("SpeechInput" == c[b].FeatureName) N("speechinput", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("VoiceNotes" == c[b].FeatureName) N("voicenote", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("SpeechMaker" == c[b].FeatureName) N("speechmaker", window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled;
        else if ("ScreenMasking" == c[b].FeatureName) {
          if (void 0 == N("screenmasking", window.texthelp.RW4GC.currentToolbar)) {
            var e = N("screenmasking", window.texthelp.RW4GC.defaultToolbar);
            e.enabled = c[b].Enabled;
            window.texthelp.RW4GC.currentToolbar.left.buttons.splice(b - 1, 0, e)
          }
          N("screenmasking", window.texthelp.RW4GC.currentToolbar)
            .enabled = c[b].Enabled
        } else "PracticeReadingAloud" == c[b].FeatureName && (void 0 == N("practicereadingaloud", window.texthelp.RW4GC.currentToolbar) && (e = N("practicereadingaloud", window.texthelp.RW4GC.defaultToolbar), e.enabled = c[b].Enabled, window.texthelp.RW4GC.currentToolbar.left.buttons.splice(window.texthelp.RW4GC.currentToolbar.left.buttons.length - 1, 0, e)), N("practicereadingaloud"
            , window.texthelp.RW4GC.currentToolbar)
          .enabled = c[b].Enabled);
        window.texthelp.RW4GC.riot.toolbar.unmount(!0);
        window.texthelp.RW4GC.riot.toolbar = window.texthelp.RW4GC.riot.mount("texthelp-toolbar", window.texthelp.RW4GC.currentToolbar)[0];
        window.texthelp.RW4GC.riot.tooltip.unmount(!0);
        window.texthelp.RW4GC.riot.tooltip = window.texthelp.RW4GC.riot.mount("texthelp-tooltip")[0];
        if (1 == a.Trial || 0 == a.Valid || null !== a.Message) {
          var g = window.document.querySelector(".th-msg");
          window.texthelp.RW4GC.trialMessage = "<a tabindex='-1' href='" +
            a.Redirect + "' target='_blank'>" + a.Message + "</a>";
          g.innerHTML = window.texthelp.RW4GC.trialMessage
        }
        var k = window.texthelp.RW4GC.pageToolbar[a.lType];
        if (void 0 !== k)
          for (b = 0; b < k.length; b++) {
            var l = window.document.querySelector(".th-" + k[b] + "-image");
            null !== l && (l.setAttribute("disabled", "true"), l.classList.add("thdisabled"))
          }
        window.postMessage({
          method: "thDoPopupLicenseMessage"
          , type: "1757FROM_PAGERW4G"
          , payload: a
        }, "*")
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.Gr = function () {
    try {
      if (this.t = new z.W, z.R.a()
        .Qn(this.t), this.t.T(), this.nh = new z.ej(Zd()), z.R.a()
        .Tn(this.nh), this.nh.ua(), null == z.I("thSpeechStreamTBPlaceHolder")) {
        z.S.a()
          .k("onWRPlay", this.Ar, this);
        z.S.a()
          .k("onWRStop", this.Fr, this);
        z.S.a()
          .k("onWRRewind", this.Cr, this);
        z.S.a()
          .k("onWRForward", this.xr, this);
        z.S.a()
          .k("onWRPause", this.zr, this);
        z.S.a()
          .k("onWRFactFinder", this.wr, this);
        z.S.a()
          .k("onWRSimplify", this.Dr, this);
        z.S.a()
          .k("onWRSpeechMaker", this.Er, this);
        z.S.a()
          .k("onWRPracticeReadingAloud"
            , this.Br, this);
        z.S.a()
          .k("onWRInsertTextAtCaret", this.yr, this);
        try {
          z.Hf(z.uf.a(), "FixedToolbar", this.mr, this)
        } catch (a) {
          window.console.error(a.stack)
        }
      }
    } catch (b) {
      window.console.error(b.stack)
    }
  };
  z.f.Ar = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.hd();
      var a = z.R.a()
        .ia();
      if (null == a) return null;
      window.postMessage({
        method: "GAE"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          category: a
          , action: "play"
          , label: a.split("@")[1]
        }
      }, "*")
    } catch (b) {
      window.console.error(b.stack)
    }
  };
  z.f.Fr = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.stop()
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.Cr = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.ws()
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.xr = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.forward()
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.zr = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.pause()
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.wr = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Uo();
      var a = z.R.a()
        .ia();
      if (null == a) return null;
      window.postMessage({
        method: "GAE"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          category: a
          , action: "fact finder"
          , label: a.split("@")[1]
        }
      }, "*")
    } catch (b) {
      window.console.error(b.stack)
    }
  };
  z.f.Dr = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Bs();
      var a = z.R.a()
        .ia();
      if (null == a) return null;
      window.postMessage({
        method: "GAE"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          category: a
          , action: "simplify"
          , label: a.split("@")[1]
        }
      }, "*")
    } catch (b) {
      window.console.error(b.stack)
    }
  };
  z.f.gr = function (a) {
    try {
      var b = a.join(" ");
      2E4 < b.length && ((0, window.confirm)(z.U.a()
        .getLocaleString("speechmaker_large_text")) || (b = ""));
      if ("" != b) {
        var c = z.fj.a()
          .Ab()
          , d = c.serversettings.speechmaker
          , e = c.serversettings.user
          , g = (0, window.encodeURIComponent)(z.T.a()
            .v()
            .speechoptions.voice)
          , k = (0, window.encodeURIComponent)(z.T.a()
            .v()
            .speechoptions.speed);
        window.texthelp.RW4GC.toolbarHandlerInstance.setSpeechMakerState(!0);
        var l = window.document.getElementsByClassName("th-speechmaker-image")[0]
          , m = window.document.createElement("div");
        m.className = "thAudioMakerProgress";
        l.parentNode.appendChild(m);
        var n = window.document.getElementsByClassName("thAudioMakerProgress")[0];
        n.style.left = l.offsetLeft + "px";
        n.style.top = l.offsetTop + l.offsetHeight - 3 + "px";
        n.style.width = l.offsetWidth + "px";
        var p = new z.gj(d, "Mp3Maker", e, g, k);
        try {
          p.im("speechmaker", b, function (a) {
            window.texthelp.RW4GC.toolbarHandlerInstance.setSpeechMakerState(!1);
            try {
              n.remove()
            } catch (b) {}
            window.postMessage({
                type: "1757FROM_PAGERW4G"
                , key: "function"
                , method: "OpenTab"
                , parameters: a
              }
              , "*")
          }, function (a) {
            10 > a && (a = 10);
            n.style.background = "linear-gradient(to right, #0037FF " + a + "%, #DDDDFF 0%, #DDDDFF)"
          }, function (a) {
            window.console.log("Audio Error: " + a.message);
            a = z.U.a()
              .K("speechmaker_error_header");
            var b = z.U.a()
              .K("speechmaker_error_content");
            window.notification({
              msg: '<div><div class="vl-notification-mp3maker"><div class="vl-notification-content"><div class="vl-notification-heading">' + a + '</div><div class="vl-notification-msg">' + b + "</div></div></div></div>"
              , delay: 5E3
              , type: "error"
              , animIn: "fadeInRight"
              , animOut: "fadeOutDown"
            });
            window.texthelp.RW4GC.toolbarHandlerInstance.setSpeechMakerState(!1);
            try {
              n.remove()
            } catch (c) {}
          })
        } catch (q) {
          window.console.log("Audio Error: " + q.message);
          var s = z.U.a()
            .K("speechmaker_error_header")
            , t = z.U.a()
            .K("speechmaker_error_content");
          window.notification({
            msg: '<div><div class="vl-notification-mp3maker"><div class="vl-notification-content"><div class="vl-notification-heading">' + s + '</div><div class="vl-notification-msg">' +
              t + "</div></div></div></div>"
            , delay: 5E3
            , type: "error"
            , animIn: "fadeInRight"
            , animOut: "fadeOutDown"
          });
          window.texthelp.RW4GC.toolbarHandlerInstance.setSpeechMakerState(!1);
          try {
            n.remove()
          } catch (v) {}
        }
      }
    } catch (C) {
      window.console.error(C.stack)
    }
  };
  z.f.Er = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Fs(this.gr.bind(this))
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.Vq = function (a) {
    try {
      var b = z.T.a()
        .v()
        , c = b.language.services;
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "OpenPracticeReadingAloud"
        , parameters: {
          documentTitle: a.documentTitle
          , dictionaryLocale: c
          , pictureDictionaryLocale: c
          , translateLanguage: b.translator.translang
          , translateSourceLanguage: b.translator.transsource
          , readingVoice: b.speechoptions.voice
          , html: a.html
          , accountType: null
          , email: null
          , name: null
          , picture: null
        }
      }, "*")
    } catch (d) {
      window.console.log("practice reading aloud: " + d.message)
    }
  };
  z.f.Br = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.ls(this.Vq.bind(this))
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.yr = function (a) {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Ni(a[0])
    } catch (b) {
      window.console.error(b.stack)
    }
  };
  z.f.Bb = function (a) {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      void 0 == a && (a = !1);
      return this.t.Bb(a)
    } catch (b) {
      window.console.error(b.stack)
    }
  };
  z.f.Pc = aa(4);
  z.f.Wj = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Wj()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Zh = aa(5);
  z.f.Di = aa(6);
  z.f.Aj = aa(7);
  z.f.rc = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.rc()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.xe = function (a, b) {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.xe(a, b)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.ye = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.ye()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Pi = aa(8);
  z.f.bb = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      return this.t.bb()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.oc = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      return this.t.oc()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Ob = aa(9);
  z.f.Pb = function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      return this.t.Pb()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  var hj = z.uf.a()
    , ij = new Ve;
  ij.mi = !0;
  hj.Ok = ij;
  var jj = z.h.PLOVR_MODULE_INFO
    , kj;
  for (kj in jj) hj.wb[kj] = new pf(jj[kj], kj);
  hj.Pg.Zd || hj.Pg.tg();
  hj.mm == hj.Yh && (hj.mm = null, rf(hj.Yh, (0, z.ta)(hj.Dm, hj)) && Ef(hj, Ff), vf(hj));
  var lj = z.h.PLOVR_MODULE_URIS
    , mj;
  for (mj in lj) hj.wb[mj].xf = lj[mj];
  z.Df("WebReader");
  (new Kf)
  .Jk();
  z.f = Of.prototype;
  z.f.clone = function () {
    return new Of(this.top, this.right, this.bottom, this.left)
  };
  z.f.toString = function () {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
  };
  z.f.contains = function (a) {
    return this && a ? a instanceof Of ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
  };
  z.f.expand = function (a, b, c, d) {
    na(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
  };
  z.f.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  };
  z.f.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  };
  z.f.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  z.f.translate = function (a, b) {
    a instanceof z.H ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, la(b) && (this.top += b, this.bottom += b));
    return this
  };
  z.f.scale = function (a, b) {
    var c = la(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
  };
  z.f = Pf.prototype;
  z.f.clone = function () {
    return new Pf(this.left, this.top, this.width, this.height)
  };
  z.f.toString = function () {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
  };
  z.f.Gp = function (a) {
    var b = Math.max(this.left, a.left)
      , c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
      var d = Math.max(this.top, a.top);
      a = Math.min(this.top + this.height, a.top + a.height);
      d <= a && (this.left = b, this.top = d, this.width = c - b, this.height = a - d)
    }
  };
  z.f.contains = function (a) {
    return a instanceof Pf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
  };
  z.f.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  z.f.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  z.f.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  z.f.translate = function (a, b) {
    a instanceof z.H ? (this.left += a.x, this.top += a.y) : (this.left += a, la(b) && (this.top += b));
    return this
  };
  z.f.scale = function (a, b) {
    var c = la(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
  };
  var kg = z.dc ? "MozUserSelect" : z.E ? "WebkitUserSelect" : null
    , og = {
      thin: 2
      , medium: 4
      , thick: 6
    }
    , cg = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
  z.w(z.ug, z.Gc);
  z.f = z.ug.prototype;
  z.f.m = null;
  z.f.Qi = null;
  z.f.Lk = null;
  z.f.Ri = null;
  z.f.Sb = -1;
  z.f.ie = -1;
  z.f.Xj = !1;
  var nj = {
      3: 13
      , 12: 144
      , 63232: 38
      , 63233: 40
      , 63234: 37
      , 63235: 39
      , 63236: 112
      , 63237: 113
      , 63238: 114
      , 63239: 115
      , 63240: 116
      , 63241: 117
      , 63242: 118
      , 63243: 119
      , 63244: 120
      , 63245: 121
      , 63246: 122
      , 63247: 123
      , 63248: 44
      , 63272: 46
      , 63273: 36
      , 63275: 35
      , 63276: 33
      , 63277: 34
      , 63289: 144
      , 63302: 45
    }
    , oj = {
      Up: 38
      , Down: 40
      , Left: 37
      , Right: 39
      , Enter: 13
      , F1: 112
      , F2: 113
      , F3: 114
      , F4: 115
      , F5: 116
      , F6: 117
      , F7: 118
      , F8: 119
      , F9: 120
      , F10: 121
      , F11: 122
      , F12: 123
      , "U+007F": 46
      , Home: 36
      , End: 35
      , PageUp: 33
      , PageDown: 34
      , Insert: 45
    }
    , pj = z.B || z.E && z.A("525")
    , qj = ec && z.dc;
  z.f = z.ug.prototype;
  z.f.sp = function (a) {
    z.E && (17 == this.Sb && !a.ctrlKey || 18 == this.Sb && !a.altKey || ec && 91 == this.Sb && !a.metaKey) && (this.ie = this.Sb = -1); - 1 == this.Sb && (a.ctrlKey && 17 != a.keyCode ? this.Sb = 17 : a.altKey && 18 != a.keyCode ? this.Sb = 18 : a.metaKey && 91 != a.keyCode && (this.Sb = 91));
    pj && !qg(a.keyCode, this.Sb, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ie = sg(a.keyCode), qj && (this.Xj = a.altKey))
  };
  z.f.tp = function (a) {
    this.ie = this.Sb = -1;
    this.Xj = a.altKey
  };
  z.f.handleEvent = function (a) {
    var b = a.Sa
      , c, d, e = b.altKey;
    z.B && "keypress" == a.type ? (c = this.ie, d = 13 != c && 27 != c ? b.keyCode : 0) : z.E && "keypress" == a.type ? (c = this.ie, d = 0 <= b.charCode && 63232 > b.charCode && rg(c) ? b.charCode : 0) : z.Nf ? (c = this.ie, d = rg(c) ? b.keyCode : 0) : (c = b.keyCode || this.ie, d = b.charCode || 0, qj && (e = this.Xj), ec && 63 == d && 224 == c && (c = 191));
    var g = c = sg(c)
      , k = b.keyIdentifier;
    c ? 63232 <= c && c in nj ? g = nj[c] : 25 == c && a.shiftKey && (g = 9) : k && k in oj && (g = oj[k]);
    a = g == this.Sb;
    this.Sb = g;
    b = new vg(g, d, a, b);
    b.altKey = e;
    this.dispatchEvent(b)
  };
  z.f.f = function () {
    return this.m
  };
  z.f.Wl = function (a, b) {
    this.Ri && this.detach();
    this.m = a;
    this.Qi = z.F(this.m, "keypress", this, b);
    this.Lk = z.F(this.m, "keydown", this.sp, b, this);
    this.Ri = z.F(this.m, "keyup", this.tp, b, this)
  };
  z.f.detach = function () {
    this.Qi && (Bc(this.Qi), Bc(this.Lk), Bc(this.Ri), this.Ri = this.Lk = this.Qi = null);
    this.m = null;
    this.ie = this.Sb = -1
  };
  z.f.s = function () {
    z.ug.g.s.call(this);
    this.detach()
  };
  z.w(vg, z.bc);
  var xg;
  z.ga(z.zg);
  z.zg.prototype.il = 0;
  z.w(z.Bg, z.Gc);
  z.Bg.prototype.Cp = z.zg.a();
  var Cg = null;
  z.f = z.Bg.prototype;
  z.f.wd = function () {
    return this.Rb || (this.Rb = z.Ag(this.Cp))
  };
  z.f.f = function () {
    return this.m
  };
  z.f.Ea = function () {
    this.de || (this.de = new z.Jc(this));
    return this.de
  };
  z.f.getParent = function () {
    return this.V
  };
  z.f.Hl = function (a) {
    if (this.V && this.V != a) throw Error("Method not supported");
    z.Bg.g.Hl.call(this, a)
  };
  z.f.u = function () {
    return this.ud
  };
  z.f.q = function () {
    this.m = this.ud.createElement("div")
  };
  z.f.ua = function (a) {
    z.Lg(this, a)
  };
  z.f.ca = function (a) {
    if (this.Q) throw Error("Component already rendered");
    if (a && this.Kb(a)) {
      this.ro = !0;
      var b = z.ae(a);
      this.ud && this.ud.aa == b || (this.ud = Zd(a));
      this.Lb(a);
      this.ga()
    } else throw Error("Invalid element to decorate");
  };
  z.f.Kb = function () {
    return !0
  };
  z.f.Lb = function (a) {
    this.m = a
  };
  z.f.ga = function () {
    this.Q = !0;
    z.Pg(this, function (a) {
      !a.Q && a.f() && a.ga()
    })
  };
  z.f.La = function () {
    z.Pg(this, function (a) {
      a.Q && a.La()
    });
    this.de && this.de.Zf();
    this.Q = !1
  };
  z.f.s = function () {
    this.Q && this.La();
    this.de && (this.de.U(), delete this.de);
    z.Pg(this, function (a) {
      a.U()
    });
    !this.ro && this.m && z.re(this.m);
    this.V = this.hl = this.m = this.pc = this.Ka = null;
    z.Bg.g.s.call(this)
  };
  z.f.Ee = function (a, b) {
    this.zf(a, z.Ng(this), b)
  };
  z.f.zf = function (a, b, c) {
    if (a.Q && (c || !this.Q)) throw Error("Component already rendered");
    if (0 > b || b > z.Ng(this)) throw Error("Child component index out of bounds");
    this.pc && this.Ka || (this.pc = {}, this.Ka = []);
    if (a.getParent() == this) {
      var d = a.wd();
      this.pc[d] = a;
      z.$a(this.Ka, a)
    } else jb(this.pc, a.wd(), a);
    z.Fg(a, this);
    z.db(this.Ka, b, 0, a);
    a.Q && this.Q && a.getParent() == this ? (c = this.ja(), c.insertBefore(a.f(), c.childNodes[b] || null)) : c ? (this.m || this.q(), b = z.Og(this, b + 1), z.Lg(a, this.ja(), b ? b.m : null)) : this.Q && !a.Q && a.m &&
      a.m.parentNode && 1 == a.m.parentNode.nodeType && a.ga()
  };
  z.f.ja = function () {
    return this.m
  };
  z.f.dg = function (a) {
    if (this.Q) throw Error("Component already rendered");
    this.pf = a
  };
  z.f.removeChild = function (a, b) {
    if (a) {
      var c = z.r(a) ? a : a.wd();
      a = Gg(this, c);
      if (c && a) {
        var d = this.pc;
        c in d && delete d[c];
        z.$a(this.Ka, a);
        b && (a.La(), a.m && z.re(a.m));
        z.Fg(a, null)
      }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
  };
  var rj;
  z.ga(z.Xg);
  var sj = {
    button: "pressed"
    , checkbox: "checked"
    , menuitem: "selected"
    , menuitemcheckbox: "checked"
    , menuitemradio: "checked"
    , radio: "checked"
    , tab: "selected"
    , treeitem: "selected"
  };
  z.f = z.Xg.prototype;
  z.f.$d = function () {};
  z.f.q = function (a) {
    var b = a.u()
      .q("div", this.Sc(a)
        .join(" "), a.Tc());
    z.Zg(this, a, b);
    return b
  };
  z.f.ja = function (a) {
    return a
  };
  z.f.zg = function (a, b, c) {
    if (a = a.f ? a.f() : a) {
      var d = [b];
      z.B && !z.A("7") && (d = ah(z.Rg(a), b), d.push(b));
      (c ? z.Ug : Wg)(a, d)
    }
  };
  z.f.Kb = function () {
    return !0
  };
  z.f.ca = function (a, b) {
    b.id && Eg(a, b.id);
    var c = this.ja(b);
    c && c.firstChild ? kh(a, c.firstChild.nextSibling ? z.bb(c.childNodes) : c.firstChild) : a.zb = null;
    var d = 0
      , e = this.J()
      , g = this.J()
      , k = !1
      , l = !1
      , m = !1
      , n = z.bb(z.Rg(b));
    (0, z.Oc)(n, function (a) {
      k || a != e ? l || a != g ? d |= this.Bi(a) : l = !0 : (k = !0, g == e && (l = !0));
      1 == this.Bi(a) && xe(c) && Ae(c, !1)
    }, this);
    a.L = d;
    k || (n.push(e), g == e && (l = !0));
    l || n.push(g);
    var p = a.uc;
    p && n.push.apply(n, p);
    if (z.B && !z.A("7")) {
      var q = ah(n);
      0 < q.length && (n.push.apply(n, q), m = !0)
    }
    if (!k || !l || p || m) b.className = n.join(" ");
    z.Zg(this, a, b);
    return b
  };
  z.f.If = function (a) {
    Mg(a) && this.dg(a.f(), !0);
    a.isEnabled() && this.Pd(a, a.F())
  };
  z.f.Eh = function (a, b) {
    z.jg(a, !b, !z.B && !z.Nf)
  };
  z.f.dg = function (a, b) {
    this.zg(a, this.J() + "-rtl", b)
  };
  z.f.zd = function (a) {
    var b;
    return z.$g(a, 32) && (b = a.Ca()) ? xe(b) : !1
  };
  z.f.Pd = function (a, b) {
    var c;
    if (z.$g(a, 32) && (c = a.Ca())) {
      if (!b && a.L & 32) {
        try {
          c.blur()
        } catch (d) {}
        a.L & 32 && a.Se(null)
      }
      xe(c) != b && Ae(c, b)
    }
  };
  z.f.D = function (a, b) {
    z.ig(a, b);
    a && z.Q(a, "hidden", !b)
  };
  z.f.Zb = function (a, b, c) {
    var d = a.f();
    if (d) {
      var e = this.Dg(b);
      e && this.zg(a, e, c);
      this.jd(d, b, c)
    }
  };
  z.f.jd = function (a, b, c) {
    rj || (rj = {
      1: "disabled"
      , 8: "selected"
      , 16: "checked"
      , 64: "expanded"
    });
    b = rj[b];
    var d = a.getAttribute("role") || null;
    d && (d = sj[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && z.Q(a, b, c)
  };
  z.f.Ia = function (a, b) {
    var c = this.ja(a);
    if (c && (pe(c), b))
      if (z.r(b)) z.we(c, b);
      else {
        var d = function (a) {
          if (a) {
            var b = z.ae(c);
            c.appendChild(z.r(a) ? b.createTextNode(a) : a)
          }
        };
        z.ja(b) ? (0, z.Oc)(b, d) : !z.ka(b) || "nodeType" in b ? d(b) : (0, z.Oc)(z.bb(b), d)
      }
  };
  z.f.Ca = function (a) {
    return a.f()
  };
  z.f.J = function () {
    return "goog-control"
  };
  z.f.Sc = function (a) {
    var b = this.J()
      , c = [b]
      , d = this.J();
    d != b && c.push(d);
    b = a.L;
    for (d = []; b;) {
      var e = b & -b;
      d.push(this.Dg(e));
      b &= ~e
    }
    c.push.apply(c, d);
    (a = a.uc) && c.push.apply(c, a);
    z.B && !z.A("7") && c.push.apply(c, ah(c));
    return c
  };
  z.f.Dg = function (a) {
    this.di || ch(this);
    return this.di[a]
  };
  z.f.Bi = function (a) {
    if (!this.co) {
      this.di || ch(this);
      var b = this.di
        , c = {}
        , d;
      for (d in b) c[b[d]] = d;
      this.co = c
    }
    a = (0, window.parseInt)(this.co[a], 10);
    return (0, window.isNaN)(a) ? 0 : a
  };
  z.w(z.dh, z.Xg);
  z.ga(z.dh);
  z.f = z.dh.prototype;
  z.f.$d = function () {
    return "button"
  };
  z.f.jd = function (a, b, c) {
    switch (b) {
    case 8:
    case 16:
      z.Q(a, "pressed", c);
      break;
    default:
    case 64:
    case 1:
      z.dh.g.jd.call(this, a, b, c)
    }
  };
  z.f.q = function (a) {
    var b = z.dh.g.q.call(this, a);
    this.Lj(b, a.Kg());
    var c = a.ba();
    c && this.jb(b, c);
    z.$g(a, 16) && this.jd(b, 16, a.Cb());
    return b
  };
  z.f.ca = function (a, b) {
    b = z.dh.g.ca.call(this, a, b);
    var c = this.ba(b);
    a.Rl = c;
    a.Ol = this.Kg(b);
    z.$g(a, 16) && this.jd(b, 16, a.Cb());
    return b
  };
  z.f.ba = fa;
  z.f.jb = fa;
  z.f.Kg = function (a) {
    return a.title
  };
  z.f.Lj = function (a, b) {
    a && (b ? a.title = b : a.removeAttribute("title"))
  };
  z.f.J = function () {
    return "goog-button"
  };
  var hh = {}
    , fh = {};
  z.w(z.gh, z.Bg);
  z.f = z.gh.prototype;
  z.f.zb = null;
  z.f.L = 0;
  z.f.Oh = 39;
  z.f.pg = 255;
  z.f.Lh = 0;
  z.f.Ja = !0;
  z.f.uc = null;
  z.f.Gi = !0;
  z.f.Wh = !1;
  z.f.zh = null;
  z.f.Ca = function () {
    return this.G.Ca(this)
  };
  z.f.wi = function () {
    return this.eb || (this.eb = new z.ug)
  };
  z.f.X = function (a) {
    a && (this.uc ? z.Xa(this.uc, a) || this.uc.push(a) : this.uc = [a], this.G.zg(this, a, !0))
  };
  z.f.ta = function (a) {
    a && this.uc && z.$a(this.uc, a) && (0 == this.uc.length && (this.uc = null), this.G.zg(this, a, !1))
  };
  z.f.zg = function (a, b) {
    b ? this.X(a) : this.ta(a)
  };
  z.f.q = function () {
    var a = this.G.q(this);
    this.m = a;
    Yg(this.G, a, this.ae());
    this.Wh || this.G.Eh(a, !1);
    this.F() || this.G.D(a, !1)
  };
  z.f.ae = function () {
    return this.zh
  };
  z.f.Jh = aa(11);
  z.f.ja = function () {
    return this.G.ja(this.f())
  };
  z.f.Kb = function (a) {
    return this.G.Kb(a)
  };
  z.f.Lb = function (a) {
    this.m = a = this.G.ca(this, a);
    Yg(this.G, a, this.ae());
    this.Wh || this.G.Eh(a, !1);
    this.Ja = "none" != a.style.display
  };
  z.f.ga = function () {
    z.gh.g.ga.call(this);
    this.G.If(this);
    if (this.Oh & -2 && (this.Gi && jh(this, !0), z.$g(this, 32))) {
      var a = this.Ca();
      if (a) {
        var b = this.wi();
        b.Wl(a);
        this.Ea()
          .n(b, "key", this.Qb)
          .n(a, "focus", this.Fi)
          .n(a, "blur", this.Se)
      }
    }
  };
  z.f.La = function () {
    z.gh.g.La.call(this);
    this.eb && this.eb.detach();
    this.F() && this.isEnabled() && this.G.Pd(this, !1)
  };
  z.f.s = function () {
    z.gh.g.s.call(this);
    this.eb && (this.eb.U(), delete this.eb);
    delete this.G;
    this.uc = this.zb = null
  };
  z.f.Tc = function () {
    return this.zb
  };
  z.f.Ia = function (a) {
    this.G.Ia(this.f(), a);
    this.zb = a
  };
  z.f.Rc = function () {
    var a = this.Tc();
    if (!a) return "";
    a = z.r(a) ? a : z.ja(a) ? z.Cf(a, z.Ee)
      .join("") : z.Be(a);
    return Ea(a)
  };
  z.f.dg = function (a) {
    z.gh.g.dg.call(this, a);
    var b = this.f();
    b && this.G.dg(b, a)
  };
  z.f.Eh = function (a) {
    this.Wh = a;
    var b = this.f();
    b && this.G.Eh(b, a)
  };
  z.f.F = function () {
    return this.Ja
  };
  z.f.D = function (a, b) {
    if (b || this.Ja != a && this.dispatchEvent(a ? "show" : "hide")) {
      var c = this.f();
      c && this.G.D(c, a);
      this.isEnabled() && this.G.Pd(this, a);
      this.Ja = a;
      return !0
    }
    return !1
  };
  z.f.isEnabled = function () {
    return !(this.L & 1)
  };
  z.f.Gb = function (a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !mh(this, 1, !a) || (a || (this.setActive(!1), this.Kc(!1)), this.F() && this.G.Pd(this, a), this.Zb(1, !a, !0))
  };
  z.f.Kc = function (a) {
    mh(this, 2, a) && this.Zb(2, a)
  };
  z.f.Ye = function () {
    return !!(this.L & 4)
  };
  z.f.setActive = function (a) {
    mh(this, 4, a) && this.Zb(4, a)
  };
  z.f.Jl = function (a) {
    mh(this, 8, a) && this.Zb(8, a)
  };
  z.f.Cb = function () {
    return !!(this.L & 16)
  };
  z.f.Od = function (a) {
    mh(this, 16, a) && this.Zb(16, a)
  };
  z.f.Aa = function (a) {
    mh(this, 64, a) && this.Zb(64, a)
  };
  z.f.Zb = function (a, b, c) {
    c || 1 != a ? z.$g(this, a) && b != !!(this.L & a) && (this.G.Zb(this, a, b), this.L = b ? this.L | a : this.L & ~a) : this.Gb(!b)
  };
  z.f.ib = function (a, b) {
    if (this.Q && this.L & a && !b) throw Error("Component already rendered");
    !b && this.L & a && this.Zb(a, !1);
    this.Oh = b ? this.Oh | a : this.Oh & ~a
  };
  z.f.Ii = function (a) {
    (!a.relatedTarget || !z.ve(this.f(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && lh(this, 2) && this.Kc(!0)
  };
  z.f.Hi = function (a) {
    a.relatedTarget && z.ve(this.f(), a.relatedTarget) || !this.dispatchEvent("leave") || (lh(this, 4) && this.setActive(!1), lh(this, 2) && this.Kc(!1))
  };
  z.f.Mg = fa;
  z.f.ee = function (a) {
    this.isEnabled() && (lh(this, 2) && this.Kc(!0), fc(a) && (lh(this, 4) && this.setActive(!0), this.G.zd(this) && this.Ca()
      .focus()));
    !this.Wh && fc(a) && a.preventDefault()
  };
  z.f.fe = function (a) {
    this.isEnabled() && (lh(this, 2) && this.Kc(!0), this.Ye() && this.ve(a) && lh(this, 4) && this.setActive(!1))
  };
  z.f.Fm = function (a) {
    this.isEnabled() && this.ve(a)
  };
  z.f.ve = function (a) {
    lh(this, 16) && this.Od(!this.Cb());
    lh(this, 8) && this.Jl(!0);
    lh(this, 64) && this.Aa(!(this.L & 64));
    var b = new z.Zb("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.yl = a.yl);
    return this.dispatchEvent(b)
  };
  z.f.Fi = function () {
    lh(this, 32) && mh(this, 32, !0) && this.Zb(32, !0)
  };
  z.f.Se = function () {
    lh(this, 4) && this.setActive(!1);
    lh(this, 32) && mh(this, 32, !1) && this.Zb(32, !1)
  };
  z.f.Qb = function (a) {
    return this.F() && this.isEnabled() && this.wc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
  };
  z.f.wc = function (a) {
    return 13 == a.keyCode && this.ve(a)
  };
  if (!z.ma(z.gh)) throw Error("Invalid component class " + z.gh);
  if (!z.ma(z.Xg)) throw Error("Invalid renderer class " + z.Xg);
  var tj = oa(z.gh);
  hh[tj] = z.Xg;
  z.eh("goog-control", function () {
    return new z.gh(null)
  });
  z.w(nh, z.dh);
  z.ga(nh);
  z.f = nh.prototype;
  z.f.$d = function () {};
  z.f.q = function (a) {
    ih(a, !1);
    a.pg &= -256;
    a.ib(32, !1);
    return a.u()
      .q("button", {
        "class": this.Sc(a)
          .join(" ")
        , disabled: !a.isEnabled()
        , title: a.Kg() || ""
        , value: a.ba() || ""
      }, a.Rc() || "")
  };
  z.f.Kb = function (a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
  };
  z.f.ca = function (a, b) {
    ih(a, !1);
    a.pg &= -256;
    a.ib(32, !1);
    if (b.disabled) {
      var c = this.Dg(1);
      z.Tg(b, c)
    }
    return nh.g.ca.call(this, a, b)
  };
  z.f.If = function (a) {
    a.Ea()
      .n(a.f(), "click", a.ve)
  };
  z.f.Eh = fa;
  z.f.dg = fa;
  z.f.zd = function (a) {
    return a.isEnabled()
  };
  z.f.Pd = fa;
  z.f.Zb = function (a, b, c) {
    nh.g.Zb.call(this, a, b, c);
    (a = a.f()) && 1 == b && (a.disabled = c)
  };
  z.f.ba = function (a) {
    return a.value
  };
  z.f.jb = function (a, b) {
    a && (a.value = b)
  };
  z.f.jd = fa;
  z.w(z.oh, z.gh);
  z.f = z.oh.prototype;
  z.f.ba = function () {
    return this.Rl
  };
  z.f.jb = function (a) {
    this.Rl = a;
    this.G.jb(this.f(), a)
  };
  z.f.Kg = function () {
    return this.Ol
  };
  z.f.Lj = function (a) {
    this.Ol = a;
    this.G.Lj(this.f(), a)
  };
  z.f.s = function () {
    z.oh.g.s.call(this);
    delete this.Rl;
    delete this.Ol
  };
  z.f.ga = function () {
    z.oh.g.ga.call(this);
    if (z.$g(this, 32)) {
      var a = this.Ca();
      a && this.Ea()
        .n(a, "keyup", this.wc)
    }
  };
  z.f.wc = function (a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ve(a) : 32 == a.keyCode
  };
  z.eh("goog-button", function () {
    return new z.oh(null)
  });
  rh.prototype.bg = function () {};
  z.w(sh, rh);
  sh.prototype.bg = function (a, b, c) {
    ph(this.element, this.ji, a, b, void 0, c, this.hs)
  };
  z.w(z.th, sh);
  z.th.prototype.Bm = aa(12);
  z.th.prototype.bg = function (a, b, c, d) {
    var e = ph(this.element, this.ji, a, b, null, c, 10, d, this.ul);
    if (e & 496) {
      var g = uh(e, this.ji);
      b = uh(e, b);
      e = ph(this.element, g, a, b, null, c, 10, d, this.ul);
      e & 496 && (g = uh(e, g), b = uh(e, b), ph(this.element, g, a, b, null, c, this.Ti, d, this.ul))
    }
  };
  z.w(z.vh, z.th);
  z.ga(wh);
  z.f = wh.prototype;
  z.f.$d = function () {
    return this.Vl
  };
  z.f.q = function (a) {
    return a.u()
      .q("div", this.Sc(a)
        .join(" "))
  };
  z.f.ja = function (a) {
    return a
  };
  z.f.Kb = function (a) {
    return "DIV" == a.tagName
  };
  z.f.ca = function (a, b) {
    b.id && Eg(a, b.id);
    var c = this.J()
      , d = !1
      , e = z.Rg(b);
    e && (0, z.Oc)(e, function (b) {
      b == c ? d = !0 : b && (b == c + "-disabled" ? a.Gb(!1) : b == c + "-horizontal" ? Dh(a, uj) : b == c + "-vertical" && Dh(a, Ah))
    }, this);
    d || z.Tg(b, c);
    yh(this, a, this.ja(b));
    return b
  };
  z.f.tk = function (a) {
    a: {
      var b;a = z.Rg(a);
      for (var c = 0, d = a.length; c < d; c++)
        if (b = a[c], b = b in fh ? fh[b]() : null) {
          a = b;
          break a
        }
      a = null
    }
    return a
  };
  z.f.If = function (a) {
    a = a.f();
    z.jg(a, !0, z.dc);
    z.B && (a.hideFocus = !0);
    var b = this.$d();
    b && z.wg(a, b)
  };
  z.f.Ca = function (a) {
    return a.f()
  };
  z.f.J = function () {
    return "goog-container"
  };
  z.f.Sc = function (a) {
    var b = this.J()
      , c = [b, a.mf == uj ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
  };
  z.w(z.zh, z.Bg);
  var uj = "horizontal"
    , Ah = "vertical";
  z.f = z.zh.prototype;
  z.f.Mk = null;
  z.f.eb = null;
  z.f.G = null;
  z.f.mf = null;
  z.f.Ja = !0;
  z.f.nb = !0;
  z.f.qk = !0;
  z.f.Fa = -1;
  z.f.Ha = null;
  z.f.dd = !1;
  z.f.zo = !1;
  z.f.gs = !0;
  z.f.rd = null;
  z.f.Ca = function () {
    return this.Mk || this.G.Ca(this)
  };
  z.f.wi = function () {
    return this.eb || (this.eb = new z.ug(this.Ca()))
  };
  z.f.q = function () {
    this.m = this.G.q(this)
  };
  z.f.ja = function () {
    return this.G.ja(this.f())
  };
  z.f.Kb = function (a) {
    return this.G.Kb(a)
  };
  z.f.Lb = function (a) {
    this.m = this.G.ca(this, a);
    "none" == a.style.display && (this.Ja = !1)
  };
  z.f.ga = function () {
    z.zh.g.ga.call(this);
    z.Pg(this, function (a) {
      a.Q && Ch(this, a)
    }, this);
    var a = this.f();
    this.G.If(this);
    this.D(this.Ja, !0);
    this.Ea()
      .n(this, "enter", this.zk)
      .n(this, "highlight", this.Bk)
      .n(this, "unhighlight", this.Ek)
      .n(this, "open", this.yp)
      .n(this, "close", this.yk)
      .n(a, "mousedown", this.ee)
      .n(z.ae(a), "mouseup", this.np)
      .n(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.lp);
    this.zd() && Bh(this, !0)
  };
  z.f.La = function () {
    this.Lc(-1);
    this.Ha && this.Ha.Aa(!1);
    this.dd = !1;
    z.zh.g.La.call(this)
  };
  z.f.s = function () {
    z.zh.g.s.call(this);
    this.eb && (this.eb.U(), this.eb = null);
    this.G = this.Ha = this.rd = this.Mk = null
  };
  z.f.zk = function () {
    return !0
  };
  z.f.Bk = function (a) {
    var b = Qg(this, a.target);
    if (-1 < b && b != this.Fa) {
      var c = z.Eh(this);
      c && c.Kc(!1);
      this.Fa = b;
      c = z.Eh(this);
      this.dd && c.setActive(!0);
      this.gs && this.Ha && c != this.Ha && (z.$g(c, 64) ? c.Aa(!0) : this.Ha.Aa(!1))
    }
    b = this.f();
    null != a.target.f() && z.Q(b, "activedescendant", a.target.f()
      .id)
  };
  z.f.Ek = function (a) {
    a.target == z.Eh(this) && (this.Fa = -1);
    this.f()
      .removeAttribute("aria-activedescendant")
  };
  z.f.yp = function (a) {
    (a = a.target) && a != this.Ha && a.getParent() == this && (this.Ha && this.Ha.Aa(!1), this.Ha = a)
  };
  z.f.yk = function (a) {
    a.target == this.Ha && (this.Ha = null)
  };
  z.f.ee = function (a) {
    this.nb && (this.dd = !0);
    var b = this.Ca();
    b && xe(b) ? b.focus() : a.preventDefault()
  };
  z.f.np = function () {
    this.dd = !1
  };
  z.f.lp = function (a) {
    var b;
    a: {
      b = a.target;
      if (this.rd)
        for (var c = this.f(); b && b !== c;) {
          var d = b.id;
          if (d in this.rd) {
            b = this.rd[d];
            break a
          }
          b = b.parentNode
        }
      b = null
    }
    if (b) switch (a.type) {
    case "mousedown":
      b.ee(a);
      break;
    case "mouseup":
      b.fe(a);
      break;
    case "mouseover":
      b.Ii(a);
      break;
    case "mouseout":
      b.Hi(a);
      break;
    case "contextmenu":
      b.Mg(a)
    }
  };
  z.f.Fi = function () {};
  z.f.Se = function () {
    this.Lc(-1);
    this.dd = !1;
    this.Ha && this.Ha.Aa(!1)
  };
  z.f.Qb = function (a) {
    return this.isEnabled() && this.F() && (0 != z.Ng(this) || this.Mk) && this.wc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
  };
  z.f.wc = function (a) {
    var b = z.Eh(this);
    if (b && "function" == typeof b.Qb && b.Qb(a) || this.Ha && this.Ha != b && "function" == typeof this.Ha.Qb && this.Ha.Qb(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
    case 27:
      if (this.zd()) this.Ca()
        .blur();
      else return !1;
      break;
    case 36:
      Fh(this);
      break;
    case 35:
      Hh(this);
      break;
    case 38:
      if (this.mf == Ah) Jh(this);
      else return !1;
      break;
    case 37:
      if (this.mf == uj) Mg(this) ? Ih(this) : Jh(this);
      else return !1;
      break;
    case 40:
      if (this.mf == Ah) Ih(this);
      else return !1;
      break;
    case 39:
      if (this.mf == uj) Mg(this) ? Jh(this) : Ih(this);
      else return !1;
      break;
    default:
      return !1
    }
    return !0
  };
  z.f.Ee = function (a, b) {
    z.zh.g.Ee.call(this, a, b)
  };
  z.f.zf = function (a, b, c) {
    a.Lh |= 2;
    a.Lh |= 64;
    !this.zd() && this.zo || a.ib(32, !1);
    ih(a, !1);
    var d = a.getParent() == this ? Qg(this, a) : -1;
    z.zh.g.zf.call(this, a, b, c);
    a.Q && this.Q && Ch(this, a);
    a = d; - 1 == a && (a = z.Ng(this));
    a == this.Fa ? this.Fa = Math.min(z.Ng(this) - 1, b) : a > this.Fa && b <= this.Fa ? this.Fa++ : a < this.Fa && b > this.Fa && this.Fa--
  };
  z.f.removeChild = function (a, b) {
    if (a = z.r(a) ? Gg(this, a) : a) {
      var c = Qg(this, a); - 1 != c && (c == this.Fa ? (a.Kc(!1), this.Fa = -1) : c < this.Fa && this.Fa--);
      var d = a.f();
      d && d.id && this.rd && (c = this.rd, d = d.id, d in c && delete c[d])
    }
    a = z.zh.g.removeChild.call(this, a, b);
    ih(a, !0);
    return a
  };
  z.f.F = function () {
    return this.Ja
  };
  z.f.D = function (a, b) {
    if (b || this.Ja != a && this.dispatchEvent(a ? "show" : "hide")) {
      this.Ja = a;
      var c = this.f();
      c && (z.ig(c, a), this.zd() && xh(this.Ca(), this.nb && this.Ja), b || this.dispatchEvent(this.Ja ? "aftershow" : "afterhide"));
      return !0
    }
    return !1
  };
  z.f.isEnabled = function () {
    return this.nb
  };
  z.f.Gb = function (a) {
    this.nb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.nb = !0, z.Pg(this, function (a) {
      a.so ? delete a.so : a.Gb(!0)
    })) : (z.Pg(this, function (a) {
      a.isEnabled() ? a.Gb(!1) : a.so = !0
    }), this.dd = this.nb = !1), this.zd() && xh(this.Ca(), a && this.Ja))
  };
  z.f.zd = function () {
    return this.qk
  };
  z.f.Pd = function (a) {
    a != this.qk && this.Q && Bh(this, a);
    this.qk = a;
    this.nb && this.Ja && xh(this.Ca(), a)
  };
  z.f.Lc = function (a) {
    (a = z.Og(this, a)) ? a.Kc(!0): -1 < this.Fa && z.Eh(this)
      .Kc(!1)
  };
  z.f.Kc = function (a) {
    this.Lc(Qg(this, a))
  };
  z.f.bm = function (a) {
    return a.F() && a.isEnabled() && z.$g(a, 2)
  };
  z.w(Kh, z.Xg);
  z.ga(Kh);
  Kh.prototype.J = function () {
    return "goog-menuheader"
  };
  z.w(Lh, z.gh);
  z.eh("goog-menuheader", function () {
    return new Lh(null)
  });
  z.w(Mh, z.Xg);
  z.ga(Mh);
  z.f = Mh.prototype;
  z.f.$d = function () {
    return "menuitem"
  };
  z.f.q = function (a) {
    var b = a.u()
      .q("div", this.Sc(a)
        .join(" "), Oh(this, a.Tc(), a.u()));
    Qh(this, a, b, z.$g(a, 8) || z.$g(a, 16));
    return b
  };
  z.f.ja = function (a) {
    return a && a.firstChild
  };
  z.f.ca = function (a, b) {
    var c = se(b)
      , d = Nh(this, 2);
    c && z.Sg(c, d) || b.appendChild(Oh(this, b.childNodes, a.u()));
    z.Sg(b, "goog-option") && (a.Jj(!0), this.Jj(a, b, !0));
    return Mh.g.ca.call(this, a, b)
  };
  z.f.Ia = function (a, b) {
    var c = this.ja(a)
      , d = Ph(this, a) ? c.firstChild : null;
    Mh.g.Ia.call(this, a, b);
    d && !Ph(this, a) && c.insertBefore(d, c.firstChild || null)
  };
  z.f.Un = function (a, b, c) {
    a && b && Qh(this, a, b, c)
  };
  z.f.Jj = function (a, b, c) {
    a && b && Qh(this, a, b, c)
  };
  z.f.Dg = function (a) {
    switch (a) {
    case 2:
      return Nh(this, 0);
    case 16:
    case 8:
      return "goog-option-selected";
    default:
      return Mh.g.Dg.call(this, a)
    }
  };
  z.f.Bi = function (a) {
    var b = Nh(this, 0);
    switch (a) {
    case "goog-option-selected":
      return 16;
    case b:
      return 2;
    default:
      return Mh.g.Bi.call(this, a)
    }
  };
  z.f.J = function () {
    return "goog-menuitem"
  };
  z.w(z.Rh, z.gh);
  z.f = z.Rh.prototype;
  z.f.ba = function () {
    var a = this.hl;
    return null != a ? a : this.Rc()
  };
  z.f.jb = function (a) {
    this.hl = a
  };
  z.f.ib = function (a, b) {
    z.Rh.g.ib.call(this, a, b);
    switch (a) {
    case 8:
      this.Cb() && !b && this.Od(!1);
      var c = this.f();
      c && this.G.Un(this, c, b);
      break;
    case 16:
      (c = this.f()) && this.G.Jj(this, c, b)
    }
  };
  z.f.Un = function (a) {
    this.ib(8, a)
  };
  z.f.Jj = function (a) {
    this.ib(16, a)
  };
  z.f.Rc = function () {
    var a = this.Tc();
    return z.ja(a) ? (a = (0, z.Cf)(a, function (a) {
        return ue(a) && (z.Sg(a, "goog-menuitem-accel") || z.Sg(a, "goog-menuitem-mnemonic-separator")) ? "" : z.Ee(a)
      })
      .join(""), Ea(a)) : z.Rh.g.Rc.call(this)
  };
  z.f.fe = function (a) {
    var b = this.getParent();
    if (b) {
      var c = b.Hn;
      b.Hn = null;
      if (b = c && la(a.clientX)) b = new z.H(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
      if (b) return
    }
    z.Rh.g.fe.call(this, a)
  };
  z.f.wc = function (a) {
    return a.keyCode == this.wn && this.ve(a) ? !0 : z.Rh.g.wc.call(this, a)
  };
  z.f.ep = function () {
    return this.wn
  };
  z.eh("goog-menuitem", function () {
    return new z.Rh(null)
  });
  z.Rh.prototype.ae = function () {
    return z.$g(this, 16) ? "menuitemcheckbox" : z.$g(this, 8) ? "menuitemradio" : z.Rh.g.ae.call(this)
  };
  z.Rh.prototype.getParent = function () {
    return z.gh.prototype.getParent.call(this)
  };
  z.Rh.prototype.yi = function () {
    return z.gh.prototype.yi.call(this)
  };
  z.w(Sh, z.Xg);
  z.ga(Sh);
  Sh.prototype.q = function (a) {
    return a.u()
      .q("div", this.J())
  };
  Sh.prototype.ca = function (a, b) {
    b.id && Eg(a, b.id);
    if ("HR" == b.tagName) {
      var c = b;
      b = this.q(a);
      qe(b, c);
      z.re(c)
    } else z.Tg(b, this.J());
    return b
  };
  Sh.prototype.Ia = function () {};
  Sh.prototype.J = function () {
    return "goog-menuseparator"
  };
  z.w(Th, z.gh);
  Th.prototype.ga = function () {
    Th.g.ga.call(this);
    z.wg(this.f(), "separator")
  };
  z.eh("goog-menuseparator", function () {
    return new Th
  });
  z.w(z.Uh, wh);
  z.ga(z.Uh);
  z.f = z.Uh.prototype;
  z.f.Kb = function (a) {
    return "UL" == a.tagName || z.Uh.g.Kb.call(this, a)
  };
  z.f.tk = function (a) {
    return "HR" == a.tagName ? new Th : z.Uh.g.tk.call(this, a)
  };
  z.f.sd = aa(14);
  z.f.J = function () {
    return "goog-menu"
  };
  z.f.If = function (a) {
    z.Uh.g.If.call(this, a);
    z.Q(a.f(), "haspopup", "true")
  };
  z.eh("goog-menuseparator", function () {
    return new Th
  });
  z.w(z.Vh, z.zh);
  z.f = z.Vh.prototype;
  z.f.Vh = !0;
  z.f.Ul = !1;
  z.f.J = function () {
    return this.G.J()
  };
  z.f.sd = aa(13);
  z.f.Ya = function (a) {
    this.Ee(a, !0)
  };
  z.f.Vd = aa(15);
  z.f.removeItem = function (a) {
    (a = this.removeChild(a, !0)) && a.U()
  };
  z.f.Le = aa(16);
  z.f.Fg = aa(17);
  z.f.uk = aa(18);
  z.f.D = function (a, b, c) {
    (b = z.Vh.g.D.call(this, a, b)) && a && this.Q && this.Vh && this.Ca()
      .focus();
    this.Hn = a && c && la(c.clientX) ? new z.H(c.clientX, c.clientY) : null;
    return b
  };
  z.f.zk = function (a) {
    this.Vh && this.Ca()
      .focus();
    return z.Vh.g.zk.call(this, a)
  };
  z.f.bm = function (a) {
    return (this.Ul || a.isEnabled()) && a.F() && z.$g(a, 2)
  };
  z.f.Lb = function (a) {
    var b = this.G
      , c;
    c = this.u();
    c = z.ce(c.aa, "div", b.J() + "-content", a);
    for (var d = c.length, e = 0; e < d; e++) yh(b, this, c[e]);
    z.Vh.g.Lb.call(this, a)
  };
  z.f.wc = function (a) {
    var b = z.Vh.g.wc.call(this, a);
    b || z.Pg(this, function (c) {
      !b && c.ep && c.wn == a.keyCode && (this.isEnabled() && this.Kc(c), b = c.Qb(a))
    }, this);
    return b
  };
  z.f.Lc = function (a) {
    z.Vh.g.Lc.call(this, a);
    var b = z.Og(this, a);
    if (b) {
      a = this.f();
      var b = b.f()
        , c = z.P(b)
        , d = z.P(a)
        , e = pg(a)
        , g = c.x - d.x - e.left
        , c = c.y - d.y - e.top
        , d = a.clientHeight - b.offsetHeight
        , e = a.scrollLeft
        , k = a.scrollTop
        , e = e + Math.min(g, Math.max(g - (a.clientWidth - b.offsetWidth), 0))
        , k = k + Math.min(c, Math.max(c - d, 0))
        , b = new z.H(e, k);
      a.scrollLeft = b.x;
      a.scrollTop = b.y
    }
  };
  mb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
  Wh.prototype.toString = function () {
    return "SafeHtml{" + this.zl + "}"
  };
  mb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
  mb("link", "script", "style");
  var Xh = {}
    , Ai = Zh("", 0);
  z.w($h, z.Gc);
  var vj = z.B || z.dc && z.A("1.9.3");
  z.f = $h.prototype;
  z.f.clientX = 0;
  z.f.clientY = 0;
  z.f.screenX = 0;
  z.f.screenY = 0;
  z.f.$n = 0;
  z.f.ao = 0;
  z.f.deltaX = 0;
  z.f.deltaY = 0;
  z.f.nb = !0;
  z.f.He = !1;
  z.f.Im = 0;
  z.f.Dp = !1;
  z.f.Ql = !1;
  z.f.Ea = function () {
    return this.S
  };
  z.f.Gb = function (a) {
    this.nb = a
  };
  z.f.s = function () {
    $h.g.s.call(this);
    Ac(this.handle, ["touchstart", "mousedown"], this.Yn, !1, this);
    this.S.Zf();
    vj && this.aa.releaseCapture();
    this.handle = this.target = null
  };
  z.f.Yn = function (a) {
    var b = "mousedown" == a.type;
    if (!this.nb || this.He || b && !fc(a)) this.dispatchEvent("earlycancel");
    else {
      bi(a);
      if (0 == this.Im)
        if (this.dispatchEvent(new gi("start", this, a.clientX, a.clientY))) this.He = !0, a.preventDefault();
        else return;
      else a.preventDefault();
      var b = this.aa
        , c = b.documentElement
        , d = !vj;
      this.S.n(b, ["touchmove", "mousemove"], this.xp, d);
      this.S.n(b, ["touchend", "mouseup"], this.pi, d);
      vj ? (c.setCapture(!1), this.S.n(c, "losecapture", this.pi)) : this.S.n(z.he(b), "blur", this.pi);
      z.B && this.Dp &&
        this.S.n(b, "dragstart", $b);
      this.xs && this.S.n(this.xs, "scroll", this.br, d);
      this.clientX = this.$n = a.clientX;
      this.clientY = this.ao = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      this.Ql ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Uf(a) || (c = z.ae(a)
        .documentElement), c ? (z.dc ? (d = pg(c), b += d.left) : Xb(8) && !Xb(9) && (d = pg(c), b -= d.left), a = ag(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
      this.deltaX = a;
      this.deltaY = this.target.offsetTop;
      this.vl = Le(Zd(this.aa));
      (0, z.Ki)()
    }
  };
  z.f.pi = function (a) {
    this.S.Zf();
    vj && this.aa.releaseCapture();
    if (this.He) {
      bi(a);
      this.He = !1;
      var b = di(this, this.deltaX)
        , c = ei(this, this.deltaY);
      this.dispatchEvent(new gi("end", this, a.clientX, a.clientY, 0, b, c))
    } else this.dispatchEvent("earlycancel")
  };
  z.f.xp = function (a) {
    if (this.nb) {
      bi(a);
      var b = (this.Ql && ai(this) ? -1 : 1) * (a.clientX - this.clientX)
        , c = a.clientY - this.clientY;
      this.clientX = a.clientX;
      this.clientY = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      if (!this.He) {
        var d = this.$n - this.clientX
          , e = this.ao - this.clientY;
        if (d * d + e * e > this.Im)
          if (this.dispatchEvent(new gi("start", this, a.clientX, a.clientY))) this.He = !0;
          else {
            this.td || this.pi(a);
            return
          }
      }
      c = ci(this, b, c);
      b = c.x;
      c = c.y;
      this.He && this.dispatchEvent(new gi("beforedrag", this, a.clientX, a.clientY, 0
        , b, c)) && (fi(this, a, b, c), a.preventDefault())
    }
  };
  z.f.br = function (a) {
    var b = ci(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    fi(this, a, b.x, b.y)
  };
  z.w(gi, z.Zb);
  z.w(hi, z.Gc);
  hi.prototype.handleEvent = function (a) {
    var b = new z.bc(a.Sa);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
  };
  hi.prototype.s = function () {
    hi.g.s.call(this);
    Bc(this.Mp);
    Bc(this.Np);
    delete this.m
  };
  z.w(ii, z.Bg);
  z.f = ii.prototype;
  z.f.pk = null;
  z.f.Ja = !1;
  z.f.Jb = null;
  z.f.ab = null;
  z.f.Nc = null;
  z.f.Yj = !1;
  z.f.J = function () {
    return "goog-modalpopup"
  };
  z.f.ti = function () {
    return this.Jb
  };
  z.f.q = function () {
    ii.g.q.call(this);
    var a = this.f()
      , b = (0, z.Vb)(this.J())
      .split(" ");
    z.Ug(a, b);
    Ae(a, !0);
    z.ig(a, !1);
    ji(this);
    ki(this)
  };
  z.f.Ln = function () {
    this.Yj = !1
  };
  z.f.Kb = function (a) {
    return !!a && "DIV" == a.tagName
  };
  z.f.Lb = function (a) {
    ii.g.Lb.call(this, a);
    a = (0, z.Vb)(this.J())
      .split(" ");
    z.Ug(this.f(), a);
    ji(this);
    ki(this);
    z.ig(this.f(), !1)
  };
  z.f.ga = function () {
    this.ab && qe(this.ab, this.f());
    qe(this.Jb, this.f());
    ii.g.ga.call(this);
    var a = this.f();
    a.parentNode && a.parentNode.insertBefore(this.Nc, a.nextSibling);
    this.pk = new hi(z.Ie(this.u()));
    this.Ea()
      .n(this.pk, "focusin", this.yq);
    li(this, !1)
  };
  z.f.La = function () {
    this.F() && this.D(!1);
    Qb(this.pk);
    ii.g.La.call(this);
    z.re(this.ab);
    z.re(this.Jb);
    z.re(this.Nc)
  };
  z.f.D = function (a) {
    a != this.Ja && (this.Xf && this.Xf.stop(), this.rg && this.rg.stop(), this.Wf && this.Wf.stop(), this.qg && this.qg.stop(), this.Q && li(this, a), a ? this.As() : this.Bp())
  };
  z.f.As = function () {
    if (this.dispatchEvent("beforeshow")) {
      try {
        this.Jf = z.Ie(this.u())
          .activeElement
      } catch (a) {}
      this.Cl();
      this.bg();
      this.Ea()
        .n(Ke(this.u()), "resize", this.Cl);
      mi(this, !0);
      this.focus();
      this.Ja = !0;
      this.Xf && this.rg ? (zc(this.Xf, "end", this.wj, !1, this), this.rg.play(), this.Xf.play()) : this.wj()
    }
  };
  z.f.Bp = function () {
    if (this.dispatchEvent("beforehide")) {
      this.Ea()
        .Xa(Ke(this.u()), "resize", this.Cl);
      this.Ja = !1;
      this.Wf && this.qg ? (zc(this.Wf, "end", this.vj, !1, this), this.qg.play(), this.Wf.play()) : this.vj();
      a: {
        try {
          var a = this.u()
            , b = a.aa.body
            , c = a.aa.activeElement || b;
          if (!this.Jf || this.Jf == b) {
            this.Jf = null;
            break a
          }(c == b || a.contains(this.f(), c)) && this.Jf.focus()
        } catch (d) {}
        this.Jf = null
      }
    }
  };
  z.f.wj = function () {
    this.dispatchEvent("show")
  };
  z.f.vj = function () {
    mi(this, !1);
    this.dispatchEvent("hide")
  };
  z.f.F = function () {
    return this.Ja
  };
  z.f.focus = function () {
    this.ym()
  };
  z.f.Cl = function () {
    this.ab && z.ig(this.ab, !1);
    this.Jb && z.ig(this.Jb, !1);
    var a = z.Ie(this.u())
      , b = fe(z.he(a) || window)
      , c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth))
      , a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.ab && (z.ig(this.ab, !0), z.dg(this.ab, c, a));
    this.Jb && (z.ig(this.Jb, !0), z.dg(this.Jb, c, a))
  };
  z.f.bg = function () {
    var a = z.Ie(this.u())
      , b = z.he(a) || window;
    if ("fixed" == Uf(this.f())) var c = a = 0;
    else c = Le(this.u()), a = c.x, c = c.y;
    var d = z.eg(this.f())
      , b = fe(b)
      , a = Math.max(a + b.width / 2 - d.width / 2, 0)
      , c = Math.max(c + b.height / 2 - d.height / 2, 0);
    Vf(this.f(), a, c);
    Vf(this.Nc, a, c)
  };
  z.f.yq = function (a) {
    this.Yj ? this.Ln() : a.target == this.Nc && z.Ic(this.ym, 0, this)
  };
  z.f.ym = function () {
    try {
      z.B && z.Ie(this.u())
        .body.focus(), this.f()
        .focus()
    } catch (a) {}
  };
  z.f.s = function () {
    Qb(this.Xf);
    this.Xf = null;
    Qb(this.Wf);
    this.Wf = null;
    Qb(this.rg);
    this.rg = null;
    Qb(this.qg);
    this.qg = null;
    ii.g.s.call(this)
  };
  z.w(z.ni, ii);
  z.f = z.ni.prototype;
  z.f.So = !0;
  z.f.Ue = !0;
  z.f.sh = !0;
  z.f.qm = !0;
  z.f.Xh = .5;
  z.f.Nl = "";
  z.f.zb = null;
  z.f.Yd = null;
  z.f.Qo = !1;
  z.f.Hb = null;
  z.f.yb = null;
  z.f.Pj = null;
  z.f.Na = null;
  z.f.sc = null;
  z.f.Pa = null;
  z.f.zh = "dialog";
  z.f.J = function () {
    return this.mb
  };
  z.f.Ia = function (a) {
    this.zb = a = Zh(a, null);
    this.sc && (this.sc.innerHTML = Yh(a))
  };
  z.f.Tc = function () {
    return null != this.zb ? Yh(this.zb) : ""
  };
  z.f.ae = function () {
    return this.zh
  };
  z.f.Jh = aa(10);
  z.f.ja = function () {
    this.f() || this.ua();
    return this.sc
  };
  z.f.ti = function () {
    this.f() || this.ua();
    return z.ni.g.ti.call(this)
  };
  z.f.q = function () {
    z.ni.g.q.call(this);
    var a = this.f()
      , b = this.u();
    this.Hb = b.q("div", this.mb + "-title", this.yb = b.q("span", {
      className: this.mb + "-title-text"
      , id: this.wd()
    }, this.Nl), this.Na = b.q("span", this.mb + "-title-close"));
    oe(a, this.Hb, this.sc = b.q("div", this.mb + "-content"), this.Pa = b.q("div", this.mb + "-buttons"));
    z.wg(this.yb, "heading");
    z.wg(this.Na, "button");
    Ae(this.Na, !0);
    z.Q(this.Na, "label", wj);
    this.Pj = this.yb.id;
    z.wg(a, this.ae());
    z.Q(a, "labelledby", this.Pj || "");
    this.zb && (this.sc.innerHTML = Yh(this.zb));
    z.ig(this.Na, this.Ue);
    this.lb && (a = this.lb, a.m = this.Pa, a.ua());
    z.ig(this.Pa, !!this.lb);
    ti(this, this.Xh)
  };
  z.f.Lb = function (a) {
    z.ni.g.Lb.call(this, a);
    a = this.f();
    var b = this.mb + "-content";
    this.sc = z.ce(window.document, null, b, a)[0];
    this.sc || (this.sc = this.u()
      .q("div", b), this.zb && (this.sc.innerHTML = Yh(this.zb)), a.appendChild(this.sc));
    var b = this.mb + "-title"
      , c = this.mb + "-title-text"
      , d = this.mb + "-title-close";
    (this.Hb = z.ce(window.document, null, b, a)[0]) ? (this.yb = z.ce(window.document, null, c, this.Hb)[0], this.Na = z.ce(window.document, null, d, this.Hb)[0]) : (this.Hb = this.u()
      .q("div", b), a.insertBefore(this.Hb, this.sc));
    this.yb ?
      (this.Nl = z.Be(this.yb), this.yb.id || (this.yb.id = this.wd())) : (this.yb = z.ie("span", {
        className: c
        , id: this.wd()
      }), this.Hb.appendChild(this.yb));
    this.Pj = this.yb.id;
    z.Q(a, "labelledby", this.Pj || "");
    this.Na || (this.Na = this.u()
      .q("span", d), this.Hb.appendChild(this.Na));
    z.ig(this.Na, this.Ue);
    b = this.mb + "-buttons";
    (this.Pa = z.ce(window.document, null, b, a)[0]) ? (this.lb = new pi(this.u()), this.lb.ca(this.Pa)) : (this.Pa = this.u()
      .q("div", b), a.appendChild(this.Pa), this.lb && (a = this.lb, a.m = this.Pa, a.ua()), z.ig(this.Pa, !!this.lb));
    ti(this, this.Xh)
  };
  z.f.ga = function () {
    z.ni.g.ga.call(this);
    this.Ea()
      .n(this.f(), "keydown", this.Dn)
      .n(this.f(), "keypress", this.Dn);
    this.Ea()
      .n(this.Pa, "click", this.nq);
    wi(this, this.qm);
    this.Ea()
      .n(this.Na, "click", this.kr);
    var a = this.f();
    z.wg(a, this.ae());
    "" !== this.yb.id && z.Q(a, "labelledby", this.yb.id);
    this.sh || z.ui(this, !1)
  };
  z.f.La = function () {
    this.F() && this.D(!1);
    wi(this, !1);
    z.ni.g.La.call(this)
  };
  z.f.D = function (a) {
    a != this.F() && (this.Q || this.ua(), z.ni.g.D.call(this, a))
  };
  z.f.wj = function () {
    z.ni.g.wj.call(this);
    this.dispatchEvent(xj)
  };
  z.f.vj = function () {
    z.ni.g.vj.call(this);
    this.dispatchEvent(yj);
    this.Qo && this.U()
  };
  z.f.zs = function () {
    var a = z.Ie(this.u())
      , b = fe(z.he(a) || window)
      , c = Math.max(a.body.scrollWidth, b.width)
      , a = Math.max(a.body.scrollHeight, b.height)
      , d = z.eg(this.f());
    "fixed" == Uf(this.f()) ? (b = new Pf(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)), this.Yd.Vi = b || new Pf(window.NaN, window.NaN, window.NaN, window.NaN)) : this.Yd.Vi = new Pf(0, 0, c - d.width, a - d.height) || new Pf(window.NaN, window.NaN, window.NaN, window.NaN)
  };
  z.f.kr = function () {
    xi(this)
  };
  z.f.s = function () {
    this.Pa = this.Na = null;
    z.ni.g.s.call(this)
  };
  z.f.nq = function (a) {
    a: {
      for (a = a.target; null != a && a != this.Pa;) {
        if ("BUTTON" == a.tagName) break a;
        a = a.parentNode
      }
      a = null
    }
    if (a && !a.disabled) {
      a = a.name;
      var b = this.lb.get(a);
      this.dispatchEvent(new yi(a, b)) && this.D(!1)
    }
  };
  z.f.Dn = function (a) {
    var b = !1
      , c = !1
      , d = this.lb
      , e = a.target;
    if ("keydown" == a.type)
      if (this.So && 27 == a.keyCode) {
        var g = d && d.bk
          , e = "SELECT" == e.tagName && !e.disabled;
        g && !e ? (c = !0, b = d.get(g), b = this.dispatchEvent(new yi(g, b))) : e || (b = !0)
      } else {
        if (9 == a.keyCode && a.shiftKey && e == this.f()) {
          this.Yj = !0;
          try {
            this.Nc.focus()
          } catch (k) {}
          z.Ic(this.Ln, 0, this)
        }
      }
    else if (13 == a.keyCode) {
      if ("BUTTON" == e.tagName && !e.disabled) g = e.name;
      else if (e == this.Na) xi(this);
      else if (d) {
        var l = d.fk
          , m;
        if (m = l) a: {
          m = d.m.getElementsByTagName("BUTTON");
          for (var n =
              0, p; p = m[n]; n++)
            if (p.name == l || p.id == l) {
              m = p;
              break a
            }
          m = null
        }
        e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
        !m || m.disabled || e || (g = l)
      }
      g && d && (c = !0, b = this.dispatchEvent(new yi(g, String(d.get(g)))))
    } else e == this.Na && 32 == a.keyCode && xi(this);
    if (b || c) a.stopPropagation(), a.preventDefault();
    b && this.D(!1)
  };
  z.w(yi, z.Zb);
  var Bi = "dialogselect"
    , yj = "afterhide"
    , xj = "aftershow";
  z.w(pi, z.Tc);
  z.f = pi.prototype;
  z.f.mb = "goog-buttonset";
  z.f.fk = null;
  z.f.m = null;
  z.f.bk = null;
  z.f.set = function (a, b, c, d) {
    z.Tc.prototype.set.call(this, a, b);
    c && (this.fk = a);
    d && (this.bk = a);
    return this
  };
  z.f.ua = function () {
    if (this.m) {
      this.m.innerHTML = Yh(Ai);
      var a = Zd(this.m);
      this.forEach(function (b, c) {
        var d = a.q("button", {
          name: c
        }, b);
        c == this.fk && (d.className = this.mb + "-default");
        this.m.appendChild(d)
      }, this)
    }
  };
  z.f.ca = function (a) {
    if (a && 1 == a.nodeType) {
      this.m = a;
      a = this.m.getElementsByTagName("button");
      for (var b = 0, c, d, e; c = a[b]; b++)
        if (d = c.name || c.id, e = z.Be(c) || c.value, d) {
          var g = 0 == b;
          this.set(d, e, g, c.name == zj);
          g && z.Tg(c, this.mb + "-default")
        }
    }
  };
  z.f.f = function () {
    return this.m
  };
  z.f.u = function () {
    return this.ud
  };
  var zj = "cancel"
    , wj = "Close"
    , qi = {
      key: "ok"
      , caption: "OK"
    }
    , ri = {
      key: zj
      , caption: "Cancel"
    }
    , Aj = {
      key: "yes"
      , caption: "Yes"
    }
    , Bj = {
      key: "no"
      , caption: "No"
    }
    , Cj = {
      key: "save"
      , caption: "Save"
    }
    , Dj = {
      key: "continue"
      , caption: "Continue"
    };
  "undefined" != typeof window.document && (oi(new pi, qi, !0, !0), oi(oi(new pi, qi, !0), ri, !1, !0), oi(oi(new pi, Aj, !0), Bj, !1, !0), oi(oi(oi(new pi, Aj), Bj, !0), ri, !1, !0), oi(oi(oi(new pi, Dj), Cj), ri, !0, !0));
  z.B && z.A(8);
  var Ei = {
      Pt: !0
    }
    , Fi = {
      Qt: !0
    };
  Ci.prototype.fm = null;
  Ci.prototype.Tc = function () {
    return this.content
  };
  Ci.prototype.toString = function () {
    return this.content
  };
  var Ji = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i
    , Ii = {};
  z.w(Gi, Ci);
  Gi.prototype.gm = Ei;
  z.Ej = function (a) {
    function b(a) {
      this.content = a
    }
    b.prototype = a.prototype;
    return function (a, d) {
      var e = new b(String(a));
      void 0 !== d && (e.fm = d);
      return e
    }
  }(Gi);
  (function (a) {
    function b(a) {
      this.content = a
    }
    b.prototype = a.prototype;
    return function (a, d) {
      var e = String(a);
      if (!e) return "";
      e = new b(e);
      void 0 !== d && (e.fm = d);
      return e
    }
  })(Gi);
})(__textHelp__);
