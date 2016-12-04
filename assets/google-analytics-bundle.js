(function () {
  "use strict";
  var t, e = e || {}
    , n = this
    , i = function (t) {
      return void 0 !== t
    }
    , r = function () {}
    , a = function (t) {
      var e = typeof t;
      if ("object" == e) {
        if (!t) return "null";
        if (t instanceof Array) return "array";
        if (t instanceof Object) return e;
        var n = Object.prototype.toString.call(t);
        if ("[object Window]" == n) return "object";
        if ("[object Array]" == n || "number" == typeof t.length && "undefined" != typeof t.splice && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == n || "undefined" != typeof t.call && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
      } else if ("function" == e && "undefined" == typeof t.call) return "object";
      return e
    }
    , o = function (t) {
      return "array" == a(t)
    }
    , s = function (t) {
      var e = a(t);
      return "array" == e || "object" == e && "number" == typeof t.length
    }
    , u = function (t) {
      return "string" == typeof t
    }
    , l = function (t) {
      return "number" == typeof t
    }
    , h = function (t) {
      return "function" == a(t)
    }
    , c = function (t) {
      var e = typeof t;
      return "object" == e && null != t || "function" == e
    }
    , f = function (t, e, n) {
      return t.call.apply(t.bind, arguments)
    }
    , p = function (t, e, n) {
      if (!t) throw Error();
      if (2 < arguments.length) {
        var i = Array.prototype.slice.call(arguments, 2);
        return function () {
          var n = Array.prototype.slice.call(arguments);
          return Array.prototype.unshift.apply(n, i), t.apply(e, n)
        }
      }
      return function () {
        return t.apply(e, arguments)
      }
    }
    , d = function (t, e, n) {
      return d = Function.prototype.bind && -1 != Function.prototype.bind.toString()
        .indexOf("native code") ? f : p, d.apply(null, arguments)
    }
    , v = function (t, e) {
      var n = Array.prototype.slice.call(arguments, 1);
      return function () {
        var e = n.slice();
        return e.push.apply(e, arguments), t.apply(this, e)
      }
    }
    , y = Date.now || function () {
      return +new Date
    }
    , g = function (t, e) {
      var r = t.split(".")
        , a = n;
      r[0] in a || !a.execScript || a.execScript("var " + r[0]);
      for (var o; r.length && (o = r.shift());) !r.length && i(e) ? a[o] = e : a = a[o] ? a[o] : a[o] = {}
    }
    , m = function (t, e) {
      function n() {}
      n.prototype = e.prototype, t.W = e.prototype, t.prototype = new n, t.re = function (t, n, i) {
        for (var r = Array(arguments.length - 2), a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
        return e.prototype[n].apply(t, r)
      }
    }
    , b = function (t) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, b);
      else {
        var e = Error()
          .stack;
        e && (this.stack = e)
      }
      t && (this.message = String(t))
    };
  m(b, Error), b.prototype.name = "CustomError";
  var x = String.prototype.trim ? function (t) {
      return t.trim()
    } : function (t) {
      return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    , w = String.prototype.repeat ? function (t, e) {
      return t.repeat(e)
    } : function (t, e) {
      return Array(e + 1)
        .join(t)
    }
    , T = function (t, e) {
      return t < e ? -1 : t > e ? 1 : 0
    }
    , E = Array.prototype.indexOf ? function (t, e, n) {
      return Array.prototype.indexOf.call(t, e, n)
    } : function (t, e, n) {
      if (n = null == n ? 0 : 0 > n ? Math.max(0, t.length + n) : n, u(t)) return u(e) && 1 == e.length ? t.indexOf(e, n) : -1;
      for (; n < t.length; n++)
        if (n in t && t[n] === e) return n;
      return -1
    }
    , L = Array.prototype.forEach ? function (t, e, n) {
      Array.prototype.forEach.call(t, e, n)
    } : function (t, e, n) {
      for (var i = t.length, r = u(t) ? t.split("") : t, a = 0; a < i; a++) a in r && e.call(n, r[a], a, t)
    }
    , S = Array.prototype.some ? function (t, e, n) {
      return Array.prototype.some.call(t, e, n)
    } : function (t, e, n) {
      for (var i = t.length, r = u(t) ? t.split("") : t, a = 0; a < i; a++)
        if (a in r && e.call(n, r[a], a, t)) return !0;
      return !1
    }
    , V = Array.prototype.every ? function (t, e, n) {
      return Array.prototype.every.call(t, e, n)
    } : function (t, e, n) {
      for (var i = t.length, r = u(t) ? t.split("") : t, a = 0; a < i; a++)
        if (a in r && !e.call(n, r[a], a, t)) return !1;
      return !0
    }
    , C = function (t) {
      var e;
      t: {
        e = Ci;
        for (var n = t.length, i = u(t) ? t.split("") : t, r = 0; r < n; r++)
          if (r in i && e.call(void 0, i[r], r, t)) {
            e = r;
            break t
          }
        e = -1
      }
      return 0 > e ? null : u(t) ? t.charAt(e) : t[e]
    }
    , M = function (t, e) {
      var n, i = E(t, e);
      return (n = 0 <= i) && Array.prototype.splice.call(t, i, 1), n
    }
    , k = function (t) {
      return Array.prototype.concat.apply(Array.prototype, arguments)
    }
    , A = function (t, e, n) {
      return 2 >= arguments.length ? Array.prototype.slice.call(t, e) : Array.prototype.slice.call(t, e, n)
    }
    , I = "StopIteration" in n ? n.StopIteration : {
      message: "StopIteration"
      , stack: ""
    }
    , P = function () {};
  P.prototype.next = function () {
    throw I
  }, P.prototype.Yb = function () {
    return this
  };
  var O = function (t, e, n) {
      for (var i in t) e.call(n, t[i], i, t)
    }
    , j = function (t) {
      var e, n = []
        , i = 0;
      for (e in t) n[i++] = t[e];
      return n
    }
    , N = function (t) {
      var e, n = []
        , i = 0;
      for (e in t) n[i++] = e;
      return n
    }
    , X = function (t) {
      return null !== t && "withCredentials" in t
    }
    , B = function (t, e) {
      var n;
      t: {
        for (n in t)
          if (e.call(void 0, t[n], n, t)) break t;n = void 0
      }
      return n && t[n]
    }
    , F = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
    , D = function (t, e) {
      for (var n, i, r = 1; r < arguments.length; r++) {
        i = arguments[r];
        for (n in i) t[n] = i[n];
        for (var a = 0; a < F.length; a++) n = F[a], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
    }
    , H = function (t, e) {
      this.B = {}, this.b = [], this.Qa = this.g = 0;
      var n = arguments.length;
      if (1 < n) {
        if (n % 2) throw Error("Uneven number of arguments");
        for (var i = 0; i < n; i += 2) this.set(arguments[i], arguments[i + 1])
      } else t && this.addAll(t)
    };
  H.prototype.v = function () {
    R(this);
    for (var t = [], e = 0; e < this.b.length; e++) t.push(this.B[this.b[e]]);
    return t
  }, H.prototype.L = function () {
    return R(this), this.b.concat()
  }, H.prototype.$ = function (t) {
    return U(this.B, t)
  }, H.prototype.remove = function (t) {
    return !!U(this.B, t) && (delete this.B[t], this.g--, this.Qa++, this.b.length > 2 * this.g && R(this), !0)
  };
  var R = function (t) {
    if (t.g != t.b.length) {
      for (var e = 0, n = 0; e < t.b.length;) {
        var i = t.b[e];
        U(t.B, i) && (t.b[n++] = i), e++
      }
      t.b.length = n
    }
    if (t.g != t.b.length) {
      for (var r = {}, n = e = 0; e < t.b.length;) i = t.b[e], U(r, i) || (t.b[n++] = i, r[i] = 1), e++;
      t.b.length = n
    }
  };
  t = H.prototype, t.get = function (t, e) {
    return U(this.B, t) ? this.B[t] : e
  }, t.set = function (t, e) {
    U(this.B, t) || (this.g++, this.b.push(t), this.Qa++), this.B[t] = e
  }, t.addAll = function (t) {
    var e;
    t instanceof H ? (e = t.L(), t = t.v()) : (e = N(t), t = j(t));
    for (var n = 0; n < e.length; n++) this.set(e[n], t[n])
  }, t.forEach = function (t, e) {
    for (var n = this.L(), i = 0; i < n.length; i++) {
      var r = n[i]
        , a = this.get(r);
      t.call(e, a, r, this)
    }
  }, t.clone = function () {
    return new H(this)
  }, t.Ub = function () {
    R(this);
    for (var t = {}, e = 0; e < this.b.length; e++) {
      var n = this.b[e];
      t[n] = this.B[n]
    }
    return t
  }, t.Yb = function (t) {
    R(this);
    var e = 0
      , n = this.Qa
      , i = this
      , r = new P;
    return r.next = function () {
      if (n != i.Qa) throw Error("The map has changed since the iterator was created");
      if (e >= i.b.length) throw I;
      var r = i.b[e++];
      return t ? r : i.B[r]
    }, r
  };
  var K, Y, U = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }
    , G = {
      id: "hitType"
      , name: "t"
      , valueType: "text"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , W = {
      id: "sessionControl"
      , name: "sc"
      , valueType: "text"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , $ = {
      id: "description"
      , name: "cd"
      , valueType: "text"
      , maxLength: 2048
      , defaultValue: void 0
    }
    , J = {
      id: "eventCategory"
      , name: "ec"
      , valueType: "text"
      , maxLength: 150
      , defaultValue: void 0
    }
    , q = {
      id: "eventAction"
      , name: "ea"
      , valueType: "text"
      , maxLength: 500
      , defaultValue: void 0
    }
    , Z = {
      id: "eventLabel"
      , name: "el"
      , valueType: "text"
      , maxLength: 500
      , defaultValue: void 0
    }
    , z = {
      id: "eventValue"
      , name: "ev"
      , valueType: "integer"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , _ = {
      Id: G
      , Xb: {
        id: "anonymizeIp"
        , name: "aip"
        , valueType: "boolean"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Td: {
        id: "queueTime"
        , name: "qt"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , pd: {
        id: "cacheBuster"
        , name: "z"
        , valueType: "text"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Zd: W
      , $d: {
        id: "sessionGroup"
        , name: "sg"
        , valueType: "text"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , pe: {
        id: "userId"
        , name: "uid"
        , valueType: "text"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Qd: {
        id: "nonInteraction"
        , name: "ni"
        , valueType: "boolean"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , zd: $
      , ie: {
        id: "title"
        , name: "dt"
        , valueType: "text"
        , maxLength: 1500
        , defaultValue: void 0
      }
      , ld: {
        id: "appId"
        , name: "aid"
        , valueType: "text"
        , maxLength: 150
        , defaultValue: void 0
      }
      , md: {
        id: "appInstallerId"
        , name: "aiid"
        , valueType: "text"
        , maxLength: 150
        , defaultValue: void 0
      }
      , Cd: J
      , Bd: q
      , Dd: Z
      , Ed: z
      , be: {
        id: "socialNetwork"
        , name: "sn"
        , valueType: "text"
        , maxLength: 50
        , defaultValue: void 0
      }
      , ae: {
        id: "socialAction"
        , name: "sa"
        , valueType: "text"
        , maxLength: 50
        , defaultValue: void 0
      }
      , ce: {
        id: "socialTarget"
        , name: "st"
        , valueType: "text"
        , maxLength: 2048
        , defaultValue: void 0
      }
      , le: {
        id: "transactionId"
        , name: "ti"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , ke: {
        id: "transactionAffiliation"
        , name: "ta"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , me: {
        id: "transactionRevenue"
        , name: "tr"
        , valueType: "currency"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , ne: {
        id: "transactionShipping"
        , name: "ts"
        , valueType: "currency"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , oe: {
        id: "transactionTax"
        , name: "tt"
        , valueType: "currency"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , xd: {
        id: "currencyCode"
        , name: "cu"
        , valueType: "text"
        , maxLength: 10
        , defaultValue: void 0
      }
      , Md: {
        id: "itemPrice"
        , name: "ip"
        , valueType: "currency"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Nd: {
        id: "itemQuantity"
        , name: "iq"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Kd: {
        id: "itemCode"
        , name: "ic"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , Ld: {
        id: "itemName"
        , name: "in"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , Jd: {
        id: "itemCategory"
        , name: "iv"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , vd: {
        id: "campaignSource"
        , name: "cs"
        , valueType: "text"
        , maxLength: 100
        , defaultValue: void 0
      }
      , td: {
        id: "campaignMedium"
        , name: "cm"
        , valueType: "text"
        , maxLength: 50
        , defaultValue: void 0
      }
      , ud: {
        id: "campaignName"
        , name: "cn"
        , valueType: "text"
        , maxLength: 100
        , defaultValue: void 0
      }
      , sd: {
        id: "campaignKeyword"
        , name: "ck"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , qd: {
        id: "campaignContent"
        , name: "cc"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , rd: {
        id: "campaignId"
        , name: "ci"
        , valueType: "text"
        , maxLength: 100
        , defaultValue: void 0
      }
      , Hd: {
        id: "gclid"
        , name: "gclid"
        , valueType: "text"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , yd: {
        id: "dclid"
        , name: "dclid"
        , valueType: "text"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Sd: {
        id: "pageLoadTime"
        , name: "plt"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Ad: {
        id: "dnsTime"
        , name: "dns"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , de: {
        id: "tcpConnectTime"
        , name: "tcp"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Yd: {
        id: "serverResponseTime"
        , name: "srt"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Rd: {
        id: "pageDownloadTime"
        , name: "pdt"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , Ud: {
        id: "redirectResponseTime"
        , name: "rrt"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , ee: {
        id: "timingCategory"
        , name: "utc"
        , valueType: "text"
        , maxLength: 150
        , defaultValue: void 0
      }
      , he: {
        id: "timingVar"
        , name: "utv"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , ge: {
        id: "timingValue"
        , name: "utt"
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
      , fe: {
        id: "timingLabel"
        , name: "utl"
        , valueType: "text"
        , maxLength: 500
        , defaultValue: void 0
      }
      , Fd: {
        id: "exDescription"
        , name: "exd"
        , valueType: "text"
        , maxLength: 150
        , defaultValue: void 0
      }
      , Gd: {
        id: "exFatal"
        , name: "exf"
        , valueType: "boolean"
        , maxLength: void 0
        , defaultValue: "1"
      }
    }
    , Q = function (t) {
      if (1 > t || 200 < t) throw Error("Expected dimension index range 1-200, but was : " + t);
      return {
        id: "dimension" + t
        , name: "cd" + t
        , valueType: "text"
        , maxLength: 150
        , defaultValue: void 0
      }
    }
    , tt = function (t) {
      if (1 > t || 200 < t) throw Error("Expected metric index range 1-200, but was : " + t);
      return {
        id: "metric" + t
        , name: "cm" + t
        , valueType: "integer"
        , maxLength: void 0
        , defaultValue: void 0
      }
    }
    , et = function (t) {
      return 1 > t ? "0" : 3 > t ? "1-2" : (t = Math.floor(Math.log(t - 1) / Math.log(2)), Math.pow(2, t) + 1 + "-" + Math.pow(2, t + 1))
    }
    , nt = function (t, e) {
      for (var n = 0, i = t.length - 1, r = 0; n <= i;) {
        var a = Math.floor((n + i) / 2)
          , r = t[a];
        if (e <= r) {
          if (i = 0 == a ? 0 : t[a - 1], e > i) return (i + 1)
            .toString() + "-" + r.toString();
          i = a - 1
        } else if (e > r) {
          if (a >= t.length - 1) return (t[t.length - 1] + 1)
            .toString() + "+";
          n = a + 1
        }
      }
      return "<= 0"
    }
    , it = function () {
      this.mb = []
    }
    , rt = function () {
      return new it
    };
  t = it.prototype, t.when = function (t) {
    return this.mb.push(t), this
  }, t.Wb = function (t) {
    var e = arguments;
    return this.when(function (t) {
      return 0 <= E(e, t.Ab())
    }), this
  }, t.hd = function (t, e) {
    var n = A(arguments, 1);
    return this.when(function (e) {
      return e = e.ba()
        .get(t), 0 <= E(n, e)
    }), this
  }, t.sb = function (t, e) {
    if (c(this.h)) throw Error("Filter has already been set.");
    return this.h = c(e) ? d(t, e) : t, this
  }, t.qa = function () {
    if (0 == this.mb.length) throw Error("Must specify at least one predicate using #when or a helper method.");
    if (!c(this.h)) throw Error("Must specify a delegate filter using #applyFilter.");
    return d(function (t) {
      V(this.mb, function (e) {
        return e(t)
      }) && this.h(t)
    }, this)
  };
  var at = function () {
    this.rb = !1, this.Fb = "", this.Rb = !1, this.Ga = null
  };
  at.prototype.cc = function (t) {
    return this.rb = !0, this.Fb = t || " - ", this
  }, at.prototype.$c = function () {
    return this.Rb = !0, this
  }, at.prototype.Kc = function () {
    return ot(this, et)
  }, at.prototype.Mc = function (t) {
    return ot(this, v(nt, t))
  };
  var ot = function (t, e) {
    if (null != t.Ga) throw Error("LabelerBuilder: Only one labeling strategy may be used.");
    return t.Ga = d(function (t) {
      var n = t.ba()
        .get(z)
        , i = t.ba()
        .get(Z);
      l(n) && (n = e(n), null != i && this.rb && (n = i + this.Fb + n), t.ba()
        .set(Z, n))
    }, t), t
  };
  at.prototype.qa = function () {
    if (null == this.Ga) throw Error("LabelerBuilder: a labeling strategy must be specified prior to calling build().");
    return rt()
      .Wb("event")
      .sb(d(function (t) {
        this.Ga(t), this.Rb && t.ba()
          .remove(z)
      }, this))
      .qa()
  };
  var st = function (t, e) {
      var n = Array.prototype.slice.call(arguments)
        , i = n.shift();
      if ("undefined" == typeof i) throw Error("[goog.string.format] Template required");
      return i.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (t, e, i, r, a, o, s, u) {
        if ("%" == o) return "%";
        var l = n.shift();
        if ("undefined" == typeof l) throw Error("[goog.string.format] Not enough arguments");
        return arguments[0] = l, ut[o].apply(null, arguments)
      })
    }
    , ut = {
      s: function (t, e, n) {
        return isNaN(n) || "" == n || t.length >= Number(n) ? t : t = -1 < e.indexOf("-", 0) ? t + w(" ", Number(n) - t.length) : w(" ", Number(n) - t.length) + t
      }
      , f: function (t, e, n, i, r) {
        i = t.toString(), isNaN(r) || "" == r || (i = parseFloat(t)
          .toFixed(r));
        var a;
        return a = 0 > Number(t) ? "-" : 0 <= e.indexOf("+") ? "+" : 0 <= e.indexOf(" ") ? " " : "", 0 <= Number(t) && (i = a + i), isNaN(n) || i.length >= Number(n) ? i : (i = isNaN(r) ? Math.abs(Number(t))
          .toString() : Math.abs(Number(t))
          .toFixed(r), t = Number(n) - i.length - a.length, i = 0 <= e.indexOf("-", 0) ? a + i + w(" ", t) : a + w(0 <= e.indexOf("0", 0) ? "0" : " ", t) + i)
      }
      , d: function (t, e, n, i, r, a, o, s) {
        return ut.f(parseInt(t, 10), e, n, i, 0, a, o, s)
      }
    };
  ut.i = ut.d, ut.u = ut.d;
  var lt = function (t) {
      if (t.v && "function" == typeof t.v) return t.v();
      if (u(t)) return t.split("");
      if (s(t)) {
        for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
        return e
      }
      return j(t)
    }
    , ht = function (t, e) {
      if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
      else if (s(t) || u(t)) L(t, e, void 0);
      else {
        var n;
        if (t.L && "function" == typeof t.L) n = t.L();
        else if (t.v && "function" == typeof t.v) n = void 0;
        else if (s(t) || u(t)) {
          n = [];
          for (var i = t.length, r = 0; r < i; r++) n.push(r)
        } else n = N(t);
        for (var i = lt(t), r = i.length, a = 0; a < r; a++) e.call(void 0, i[a], n && n[a], t)
      }
    }
    , ct = function (t) {
      if (this.H = new H, 0 < arguments.length % 2) throw Error("Uneven number of arguments to ParameterMap constructor.");
      for (var e = arguments, n = 0; n < e.length; n += 2) this.set(e[n], e[n + 1])
    };
  ct.prototype.set = function (t, e) {
    if (null == e) throw Error("undefined-or-null value for key: " + t.name);
    this.H.set(t.name, {
      key: t
      , value: e
    })
  }, ct.prototype.remove = function (t) {
    this.H.remove(t.name)
  }, ct.prototype.get = function (t) {
    return t = this.H.get(t.name, null), null === t ? null : t.value
  }, ct.prototype.addAll = function (t) {
    this.H.addAll(t.H)
  };
  var ft = function (t, e) {
    L(t.H.v(), function (t) {
      e(t.key, t.value)
    })
  };
  ct.prototype.Ub = function () {
    var t = {};
    return ft(this, function (e, n) {
      t[e.id] = n
    }), t
  }, ct.prototype.clone = function () {
    var t = new ct;
    return t.H = this.H.clone(), t
  }, ct.prototype.toString = function () {
    var t = {};
    return ft(this, function (e, n) {
      t[e.id] = n
    }), JSON.stringify(t)
  };
  var pt = function (t) {
    this.h = t
  };
  t = pt.prototype, t.ec = function (t) {
    var e = new pt(d(this.U, this));
    return e.P = J, e.X = t, e
  }, t.action = function (t) {
    var e = new pt(d(this.U, this));
    return e.P = q, e.X = t, e
  }, t.label = function (t) {
    var e = new pt(d(this.U, this));
    return e.P = Z, e.X = t, e
  }, t.value = function (t) {
    var e = new pt(d(this.U, this));
    return e.P = z, e.X = t, e
  }, t.mc = function (t) {
    var e = new pt(d(this.U, this));
    return e.P = Q(t.index), e.X = t.value, e
  }, t.Cc = function (t) {
    var e = new pt(d(this.U, this));
    return e.P = tt(t.index), e.X = t.value, e
  }, t.send = function (t) {
    var e = new ct;
    return this.U(e), t.send("event", e)
  }, t.U = function (t) {
    null != this.P && null != this.X && !t.H.$(this.P.name) && t.set(this.P, this.X), c(this.h) && this.h(t)
  };
  var dt = new pt(r)
    , vt = function () {
      this.ia = this.ia, this.Ka = this.Ka
    };
  vt.prototype.ia = !1, vt.prototype.ua = function () {
    this.ia || (this.ia = !0, this.A())
  }, vt.prototype.A = function () {
    if (this.Ka)
      for (; this.Ka.length;) this.Ka.shift()()
  };
  var yt = function (t, e) {
    this.type = t, this.currentTarget = this.target = e, this.defaultPrevented = this.ea = !1, this.Ob = !0
  };
  yt.prototype.preventDefault = function () {
    this.defaultPrevented = !0, this.Ob = !1
  };
  var gt = function (t) {
    return gt[" "](t), t
  };
  gt[" "] = r;
  var mt;
  t: {
    var bt = n.navigator;
    if (bt) {
      var xt = bt.userAgent;
      if (xt) {
        mt = xt;
        break t
      }
    }
    mt = ""
  }
  var wt, Tt = function (t) {
      return -1 != mt.indexOf(t)
    }
    , Et = Tt("Opera") || Tt("OPR")
    , Lt = Tt("Trident") || Tt("MSIE")
    , St = Tt("Edge")
    , Vt = Tt("Gecko") && !(-1 != mt.toLowerCase()
      .indexOf("webkit") && !Tt("Edge")) && !(Tt("Trident") || Tt("MSIE")) && !Tt("Edge")
    , Ct = -1 != mt.toLowerCase()
    .indexOf("webkit") && !Tt("Edge")
    , Mt = function () {
      var t = n.document;
      return t ? t.documentMode : void 0
    };
  t: {
    var kt = ""
      , At = function () {
        var t = mt;
        return Vt ? /rv\:([^\);]+)(\)|;)/.exec(t) : St ? /Edge\/([\d\.]+)/.exec(t) : Lt ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : Ct ? /WebKit\/(\S+)/.exec(t) : Et ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
      }();
    if (At && (kt = At ? At[1] : ""), Lt) {
      var It = Mt();
      if (null != It && It > parseFloat(kt)) {
        wt = String(It);
        break t
      }
    }
    wt = kt
  }
  var Pt = wt
    , Ot = {}
    , jt = function (t) {
      var e;
      if (!(e = Ot[t])) {
        e = 0;
        for (var n = x(String(Pt))
            .split("."), i = x(String(t))
            .split("."), r = Math.max(n.length, i.length), a = 0; 0 == e && a < r; a++) {
          var o = n[a] || ""
            , s = i[a] || ""
            , u = /(\d*)(\D*)/g
            , l = /(\d*)(\D*)/g;
          do {
            var h = u.exec(o) || ["", "", ""]
              , c = l.exec(s) || ["", "", ""];
            if (0 == h[0].length && 0 == c[0].length) break;
            e = T(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == c[1].length ? 0 : parseInt(c[1], 10)) || T(0 == h[2].length, 0 == c[2].length) || T(h[2], c[2])
          } while (0 == e)
        }
        e = Ot[t] = 0 <= e
      }
      return e
    }
    , Nt = n.document
    , Xt = Nt && Lt ? Mt() || ("CSS1Compat" == Nt.compatMode ? parseInt(Pt, 10) : 5) : void 0
    , Bt = !Lt || 9 <= Number(Xt)
    , Ft = Lt && !jt("9")
    , Dt = !Ct || jt("528")
    , Ht = Vt && jt("1.9b") || Lt && jt("8") || Et && jt("9.5") || Ct && jt("528")
    , Rt = Vt && !jt("8") || Lt && !jt("9")
    , Kt = function (t, e) {
      if (yt.call(this, t ? t.type : ""), this.relatedTarget = this.currentTarget = this.target = null, this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0, this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.yb = this.state = null, t) {
        var n = this.type = t.type
          , i = t.changedTouches ? t.changedTouches[0] : null;
        this.target = t.target || t.srcElement, this.currentTarget = e;
        var r = t.relatedTarget;
        if (r) {
          if (Vt) {
            var a;
            t: {
              try {
                gt(r.nodeName), a = !0;
                break t
              } catch (o) {}
              a = !1
            }
            a || (r = null)
          }
        } else "mouseover" == n ? r = t.fromElement : "mouseout" == n && (r = t.toElement);
        this.relatedTarget = r, null === i ? (this.offsetX = Ct || void 0 !== t.offsetX ? t.offsetX : t.layerX, this.offsetY = Ct || void 0 !== t.offsetY ? t.offsetY : t.layerY, this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0) : (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0), this.button = t.button, this.keyCode = t.keyCode || 0, this.charCode = t.charCode || ("keypress" == n ? t.keyCode : 0), this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.state = t.state, this.yb = t, t.defaultPrevented && this.preventDefault()
      }
    };
  m(Kt, yt), Kt.prototype.preventDefault = function () {
    Kt.W.preventDefault.call(this);
    var t = this.yb;
    if (t.preventDefault) t.preventDefault();
    else if (t.returnValue = !1, Ft) try {
      (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
    } catch (e) {}
  };
  var Yt = "closure_listenable_" + (1e6 * Math.random() | 0)
    , Ut = function (t) {
      return !(!t || !t[Yt])
    }
    , Gt = 0
    , Wt = function (t, e, n, i, r) {
      this.listener = t, this.proxy = null, this.src = e, this.type = n, this.sa = !!i, this.Aa = r, this.key = ++Gt, this.removed = this.ra = !1
    }
    , $t = function (t) {
      t.removed = !0, t.listener = null, t.proxy = null, t.src = null, t.Aa = null
    }
    , Jt = function (t) {
      this.src = t, this.m = {}, this.na = 0
    };
  Jt.prototype.add = function (t, e, n, i, r) {
    var a = t.toString();
    t = this.m[a], t || (t = this.m[a] = [], this.na++);
    var o = Zt(t, e, i, r);
    return -1 < o ? (e = t[o], n || (e.ra = !1)) : (e = new Wt(e, this.src, a, (!!i), r), e.ra = n, t.push(e)), e
  }, Jt.prototype.remove = function (t, e, n, i) {
    if (t = t.toString(), !(t in this.m)) return !1;
    var r = this.m[t];
    return e = Zt(r, e, n, i), -1 < e && ($t(r[e]), Array.prototype.splice.call(r, e, 1), 0 == r.length && (delete this.m[t], this.na--), !0)
  };
  var qt = function (t, e) {
    var n = e.type;
    n in t.m && M(t.m[n], e) && ($t(e), 0 == t.m[n].length && (delete t.m[n], t.na--))
  };
  Jt.prototype.removeAll = function (t) {
    t = t && t.toString();
    var e, n = 0;
    for (e in this.m)
      if (!t || e == t) {
        for (var i = this.m[e], r = 0; r < i.length; r++) ++n, $t(i[r]);
        delete this.m[e], this.na--
      }
    return n
  }, Jt.prototype.ja = function (t, e, n, i) {
    t = this.m[t.toString()];
    var r = -1;
    return t && (r = Zt(t, e, n, i)), -1 < r ? t[r] : null
  };
  var Zt = function (t, e, n, i) {
      for (var r = 0; r < t.length; ++r) {
        var a = t[r];
        if (!a.removed && a.listener == e && a.sa == !!n && a.Aa == i) return r
      }
      return -1
    }
    , zt = "closure_lm_" + (1e6 * Math.random() | 0)
    , _t = {}
    , Qt = 0
    , te = function (t, e, n, i, r) {
      if (o(e)) {
        for (var a = 0; a < e.length; a++) te(t, e[a], n, i, r);
        return null
      }
      return n = fe(n), Ut(t) ? t.listen(e, n, i, r) : ee(t, e, n, !1, i, r)
    }
    , ee = function (t, e, n, i, r, a) {
      if (!e) throw Error("Invalid event type");
      var o = !!r
        , s = he(t);
      if (s || (t[zt] = s = new Jt(t)), n = s.add(e, n, i, r, a), n.proxy) return n;
      if (i = ne(), n.proxy = i, i.src = t, i.listener = n, t.addEventListener) t.addEventListener(e.toString(), i, o);
      else {
        if (!t.attachEvent) throw Error("addEventListener and attachEvent are unavailable.");
        t.attachEvent(oe(e.toString()), i)
      }
      return Qt++, n
    }
    , ne = function () {
      var t = le
        , e = Bt ? function (n) {
          return t.call(e.src, e.listener, n)
        } : function (n) {
          if (n = t.call(e.src, e.listener, n), !n) return n
        };
      return e
    }
    , ie = function (t, e, n, i, r) {
      if (o(e)) {
        for (var a = 0; a < e.length; a++) ie(t, e[a], n, i, r);
        return null
      }
      return n = fe(n), Ut(t) ? t.jb(e, n, i, r) : ee(t, e, n, !0, i, r)
    }
    , re = function (t, e, n, i, r) {
      if (o(e))
        for (var a = 0; a < e.length; a++) re(t, e[a], n, i, r);
      else n = fe(n), Ut(t) ? t.pb(e, n, i, r) : t && (t = he(t)) && (e = t.ja(e, n, !!i, r)) && ae(e)
    }
    , ae = function (t) {
      if (!l(t) && t && !t.removed) {
        var e = t.src;
        if (Ut(e)) qt(e.J, t);
        else {
          var n = t.type
            , i = t.proxy;
          e.removeEventListener ? e.removeEventListener(n, i, t.sa) : e.detachEvent && e.detachEvent(oe(n), i), Qt--, (n = he(e)) ? (qt(n, t), 0 == n.na && (n.src = null, e[zt] = null)) : $t(t)
        }
      }
    }
    , oe = function (t) {
      return t in _t ? _t[t] : _t[t] = "on" + t
    }
    , se = function (t, e, n, i) {
      var r = !0;
      if ((t = he(t)) && (e = t.m[e.toString()]))
        for (e = e.concat(), t = 0; t < e.length; t++) {
          var a = e[t];
          a && a.sa == n && !a.removed && (a = ue(a, i), r = r && !1 !== a)
        }
      return r
    }
    , ue = function (t, e) {
      var n = t.listener
        , i = t.Aa || t.src;
      return t.ra && ae(t), n.call(i, e)
    }
    , le = function (t, e) {
      if (t.removed) return !0;
      if (!Bt) {
        var i;
        if (!(i = e)) t: {
          i = ["window", "event"];
          for (var r, a = n; r = i.shift();) {
            if (null == a[r]) {
              i = null;
              break t
            }
            a = a[r]
          }
          i = a
        }
        if (r = i, i = new Kt(r, this), a = !0, !(0 > r.keyCode || void 0 != r.returnValue)) {
          t: {
            var o = !1;
            if (0 == r.keyCode) try {
              r.keyCode = -1;
              break t
            } catch (s) {
              o = !0
            }(o || void 0 == r.returnValue) && (r.returnValue = !0)
          }
          for (r = [], o = i.currentTarget; o; o = o.parentNode) r.push(o);
          for (var o = t.type, u = r.length - 1; !i.ea && 0 <= u; u--) {
            i.currentTarget = r[u];
            var l = se(r[u], o, !0, i)
              , a = a && l
          }
          for (u = 0; !i.ea && u < r.length; u++) i.currentTarget = r[u]
          , l = se(r[u], o, !1, i)
          , a = a && l
        }
        return a
      }
      return ue(t, new Kt(e, this))
    }
    , he = function (t) {
      return t = t[zt], t instanceof Jt ? t : null
    }
    , ce = "__closure_events_fn_" + (1e9 * Math.random() >>> 0)
    , fe = function (t) {
      return h(t) ? t : (t[ce] || (t[ce] = function (e) {
        return t.handleEvent(e)
      }), t[ce])
    }
    , pe = function () {
      vt.call(this), this.J = new Jt(this), this.Zb = this, this.lb = null
    };
  m(pe, vt), pe.prototype[Yt] = !0, t = pe.prototype, t.addEventListener = function (t, e, n, i) {
    te(this, t, e, n, i)
  }, t.removeEventListener = function (t, e, n, i) {
    re(this, t, e, n, i)
  }, t.dispatchEvent = function (t) {
    var e, n = this.lb;
    if (n) {
      e = [];
      for (var i = 1; n; n = n.lb) e.push(n), ++i
    }
    if (n = this.Zb, i = t.type || t, u(t)) t = new yt(t, n);
    else if (t instanceof yt) t.target = t.target || n;
    else {
      var r = t;
      t = new yt(i, n), D(t, r)
    }
    var a, r = !0;
    if (e)
      for (var o = e.length - 1; !t.ea && 0 <= o; o--) a = t.currentTarget = e[o], r = de(a, i, !0, t) && r;
    if (t.ea || (a = t.currentTarget = n, r = de(a, i, !0, t) && r, t.ea || (r = de(a, i, !1, t) && r)), e)
      for (o = 0; !t.ea && o < e.length; o++) a = t.currentTarget = e[o], r = de(a, i, !1, t) && r;
    return r
  }, t.A = function () {
    pe.W.A.call(this), this.J && this.J.removeAll(void 0), this.lb = null
  }, t.listen = function (t, e, n, i) {
    return this.J.add(String(t), e, !1, n, i)
  }, t.jb = function (t, e, n, i) {
    return this.J.add(String(t), e, !0, n, i)
  }, t.pb = function (t, e, n, i) {
    return this.J.remove(String(t), e, n, i)
  };
  var de = function (t, e, n, i) {
    if (e = t.J.m[String(e)], !e) return !0;
    e = e.concat();
    for (var r = !0, a = 0; a < e.length; ++a) {
      var o = e[a];
      if (o && !o.removed && o.sa == n) {
        var s = o.listener
          , u = o.Aa || o.src;
        o.ra && qt(t.J, o), r = !1 !== s.call(u, i) && r
      }
    }
    return r && 0 != i.Ob
  };
  pe.prototype.ja = function (t, e, n, i) {
    return this.J.ja(String(t), e, n, i)
  };
  var ve = function (t, e, n) {
    this.Ac = n, this.kc = t, this.Oc = e, this.Ja = 0, this.Ba = null
  };
  ve.prototype.get = function () {
    var t;
    return 0 < this.Ja ? (this.Ja--, t = this.Ba, this.Ba = t.next, t.next = null) : t = this.kc(), t
  }, ve.prototype.put = function (t) {
    this.Oc(t), this.Ja < this.Ac && (this.Ja++, t.next = this.Ba, this.Ba = t)
  };
  var ye, ge = function (t) {
      n.setTimeout(function () {
        throw t
      }, 0)
    }
    , me = function () {
      var t = n.MessageChannel;
      if ("undefined" == typeof t && "undefined" != typeof window && window.postMessage && window.addEventListener && !Tt("Presto") && (t = function () {
          var t = document.createElement("IFRAME");
          t.style.display = "none", t.src = "", document.documentElement.appendChild(t);
          var e = t.contentWindow
            , t = e.document;
          t.open(), t.write(""), t.close();
          var n = "callImmediate" + Math.random()
            , i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host
            , t = d(function (t) {
              "*" != i && t.origin != i || t.data != n || this.port1.onmessage()
            }, this);
          e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
            postMessage: function () {
              e.postMessage(n, i)
            }
          }
        }), "undefined" != typeof t && !Tt("Trident") && !Tt("MSIE")) {
        var e = new t
          , r = {}
          , a = r;
        return e.port1.onmessage = function () {
            if (i(r.next)) {
              r = r.next;
              var t = r.ub;
              r.ub = null, t()
            }
          }
          , function (t) {
            a.next = {
              ub: t
            }, a = a.next, e.port2.postMessage(0)
          }
      }
      return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (t) {
        var e = document.createElement("SCRIPT");
        e.onreadystatechange = function () {
          e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null
        }, document.documentElement.appendChild(e)
      } : function (t) {
        n.setTimeout(t, 0)
      }
    }
    , be = function () {
      this.Ra = this.ga = null
    }
    , xe = new ve(function () {
      return new we
    }, function (t) {
      t.reset()
    }, 100);
  be.prototype.add = function (t, e) {
    var n = xe.get();
    n.set(t, e), this.Ra ? this.Ra.next = n : this.ga = n, this.Ra = n
  }, be.prototype.remove = function () {
    var t = null;
    return this.ga && (t = this.ga, this.ga = this.ga.next, this.ga || (this.Ra = null), t.next = null), t
  };
  var we = function () {
    this.next = this.scope = this.bb = null
  };
  we.prototype.set = function (t, e) {
    this.bb = t, this.scope = e, this.next = null
  }, we.prototype.reset = function () {
    this.next = this.scope = this.bb = null
  };
  var Te, Ee = function (t, e) {
      Te || Le(), Se || (Te(), Se = !0), Ve.add(t, e)
    }
    , Le = function () {
      if (n.Promise && n.Promise.resolve) {
        var t = n.Promise.resolve(void 0);
        Te = function () {
          t.then(Ce)
        }
      } else Te = function () {
        var t = Ce;
        !h(n.setImmediate) || n.Window && n.Window.prototype && !Tt("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (ye || (ye = me()), ye(t)) : n.setImmediate(t)
      }
    }
    , Se = !1
    , Ve = new be
    , Ce = function () {
      for (var t = null; t = Ve.remove();) {
        try {
          t.bb.call(t.scope)
        } catch (e) {
          ge(e)
        }
        xe.put(t)
      }
      Se = !1
    }
    , Me = function (t) {
      t.prototype.then = t.prototype.then, t.prototype.$goog_Thenable = !0
    }
    , ke = function (t) {
      if (!t) return !1;
      try {
        return !!t.$goog_Thenable
      } catch (e) {
        return !1
      }
    }
    , Ae = function (t, e) {
      if (this.C = 0, this.M = void 0, this.Z = this.O = this.o = null, this.za = this.ab = !1, t != r) try {
        var n = this;
        t.call(e, function (t) {
          Be(n, 2, t)
        }, function (t) {
          Be(n, 3, t)
        })
      } catch (i) {
        Be(this, 3, i)
      }
    }
    , Ie = function () {
      this.next = this.context = this.ca = this.la = this.T = null, this.pa = !1
    };
  Ie.prototype.reset = function () {
    this.context = this.ca = this.la = this.T = null, this.pa = !1
  };
  var Pe = new ve(function () {
      return new Ie
    }, function (t) {
      t.reset()
    }, 100)
    , Oe = function (t, e, n) {
      var i = Pe.get();
      return i.la = t, i.ca = e, i.context = n, i
    };
  Ae.prototype.then = function (t, e, n) {
    return Xe(this, h(t) ? t : null, h(e) ? e : null, n)
  }, Me(Ae), Ae.prototype.cancel = function (t) {
    0 == this.C && Ee(function () {
      var e = new Ge(t);
      je(this, e)
    }, this)
  };
  var je = function (t, e) {
      if (0 == t.C)
        if (t.o) {
          var n = t.o;
          if (n.O) {
            for (var i = 0, r = null, a = null, o = n.O; o && (o.pa || (i++, o.T == t && (r = o), !(r && 1 < i))); o = o.next) r || (a = o);
            r && (0 == n.C && 1 == i ? je(n, e) : (a ? (i = a, i.next == n.Z && (n.Z = i), i.next = i.next.next) : He(n), Re(n, r, 3, e)))
          }
          t.o = null
        } else Be(t, 3, e)
    }
    , Ne = function (t, e) {
      t.O || 2 != t.C && 3 != t.C || De(t), t.Z ? t.Z.next = e : t.O = e, t.Z = e
    }
    , Xe = function (t, e, n, r) {
      var a = Oe(null, null, null);
      return a.T = new Ae(function (t, o) {
        a.la = e ? function (n) {
          try {
            var i = e.call(r, n);
            t(i)
          } catch (a) {
            o(a)
          }
        } : t, a.ca = n ? function (e) {
          try {
            var a = n.call(r, e);
            !i(a) && e instanceof Ge ? o(e) : t(a)
          } catch (s) {
            o(s)
          }
        } : o
      }), a.T.o = t, Ne(t, a), a.T
    };
  Ae.prototype.ed = function (t) {
    this.C = 0, Be(this, 2, t)
  }, Ae.prototype.fd = function (t) {
    this.C = 0, Be(this, 3, t)
  };
  var Be = function (t, e, n) {
      if (0 == t.C) {
        t == n && (e = 3, n = new TypeError("Promise cannot resolve to itself")), t.C = 1;
        var i;
        t: {
          var a = n
            , o = t.ed
            , s = t.fd;
          if (a instanceof Ae) Ne(a, Oe(o || r, s || null, t))
          , i = !0;
          else if (ke(a)) a.then(o, s, t)
          , i = !0;
          else {
            if (c(a)) try {
              var u = a.then;
              if (h(u)) {
                Fe(a, u, o, s, t), i = !0;
                break t
              }
            } catch (l) {
              s.call(t, l), i = !0;
              break t
            }
            i = !1
          }
        }
        i || (t.M = n, t.C = e, t.o = null, De(t), 3 != e || n instanceof Ge || Ye(t, n))
      }
    }
    , Fe = function (t, e, n, i, r) {
      var a = !1
        , o = function (t) {
          a || (a = !0, n.call(r, t))
        }
        , s = function (t) {
          a || (a = !0, i.call(r, t))
        };
      try {
        e.call(t, o, s)
      } catch (u) {
        s(u)
      }
    }
    , De = function (t) {
      t.ab || (t.ab = !0, Ee(t.nc, t))
    }
    , He = function (t) {
      var e = null;
      return t.O && (e = t.O, t.O = e.next, e.next = null), t.O || (t.Z = null), e
    };
  Ae.prototype.nc = function () {
    for (var t = null; t = He(this);) Re(this, t, this.C, this.M);
    this.ab = !1
  };
  var Re = function (t, e, n, i) {
      if (3 == n && e.ca && !e.pa)
        for (; t && t.za; t = t.o) t.za = !1;
      if (e.T) e.T.o = null, Ke(e, n, i);
      else try {
        e.pa ? e.la.call(e.context) : Ke(e, n, i)
      } catch (r) {
        Ue.call(null, r)
      }
      Pe.put(e)
    }
    , Ke = function (t, e, n) {
      2 == e ? t.la.call(t.context, n) : t.ca && t.ca.call(t.context, n)
    }
    , Ye = function (t, e) {
      t.za = !0, Ee(function () {
        t.za && Ue.call(null, e)
      })
    }
    , Ue = ge
    , Ge = function (t) {
      b.call(this, t)
    };
  m(Ge, b), Ge.prototype.name = "cancel";
  var We = function (t, e) {
    this.Ma = [], this.Ib = t, this.xb = e || null, this.ka = this.K = !1, this.M = void 0, this.nb = this.dc = this.Ua = !1, this.Pa = 0, this.o = null, this.Wa = 0
  };
  We.prototype.cancel = function (t) {
    if (this.K) this.M instanceof We && this.M.cancel();
    else {
      if (this.o) {
        var e = this.o;
        delete this.o, t ? e.cancel(t) : (e.Wa--, 0 >= e.Wa && e.cancel())
      }
      this.Ib ? this.Ib.call(this.xb, this) : this.nb = !0, this.K || this.I(new nn)
    }
  }, We.prototype.wb = function (t, e) {
    this.Ua = !1, $e(this, t, e)
  };
  var $e = function (t, e, n) {
      t.K = !0, t.M = n, t.ka = !e, _e(t)
    }
    , Je = function (t) {
      if (t.K) {
        if (!t.nb) throw new en;
        t.nb = !1
      }
    };
  We.prototype.G = function (t) {
    Je(this), $e(this, !0, t)
  }, We.prototype.I = function (t) {
    Je(this), $e(this, !1, t)
  }, We.prototype.w = function (t, e) {
    return qe(this, t, null, e)
  };
  var qe = function (t, e, n, i) {
    return t.Ma.push([e, n, i]), t.K && _e(t), t
  };
  We.prototype.then = function (t, e, n) {
    var i, r, a = new Ae(function (t, e) {
      i = t, r = e
    });
    return qe(this, i, function (t) {
      t instanceof nn ? a.cancel() : r(t)
    }), a.then(t, e, n)
  }, Me(We);
  var Ze = function (t) {
      var e = new We;
      return qe(t, e.G, e.I, e), e
    }
    , ze = function (t) {
      return S(t.Ma, function (t) {
        return h(t[1])
      })
    }
    , _e = function (t) {
      if (t.Pa && t.K && ze(t)) {
        var e = t.Pa
          , r = an[e];
        r && (n.clearTimeout(r.Ca), delete an[e]), t.Pa = 0
      }
      t.o && (t.o.Wa--, delete t.o);
      for (var e = t.M, a = r = !1; t.Ma.length && !t.Ua;) {
        var o = t.Ma.shift()
          , s = o[0]
          , u = o[1]
          , o = o[2];
        if (s = t.ka ? u : s) try {
          var l = s.call(o || t.xb, e);
          i(l) && (t.ka = t.ka && (l == e || l instanceof Error), t.M = e = l), (ke(e) || "function" == typeof n.Promise && e instanceof n.Promise) && (a = !0, t.Ua = !0)
        } catch (h) {
          e = h, t.ka = !0, ze(t) || (r = !0)
        }
      }
      t.M = e, a && (l = d(t.wb, t, !0), a = d(t.wb, t, !1), e instanceof We ? (qe(e, l, a), e.dc = !0) : e.then(l, a)), r && (e = new rn(e), an[e.Ca] = e, t.Pa = e.Ca)
    }
    , Qe = function (t) {
      var e = new We;
      return e.G(t), e
    }
    , tn = function () {
      var t = oi
        , e = new We;
      return e.I(t), e
    }
    , en = function () {
      b.call(this)
    };
  m(en, b), en.prototype.message = "Deferred has already fired", en.prototype.name = "AlreadyCalledError";
  var nn = function () {
    b.call(this)
  };
  m(nn, b), nn.prototype.message = "Deferred was canceled", nn.prototype.name = "CanceledError";
  var rn = function (t) {
    this.Ca = n.setTimeout(d(this.ad, this), 0), this.va = t
  };
  rn.prototype.ad = function () {
    throw delete an[this.Ca], this.va
  };
  var an = {}
    , on = function (t) {
      this.ya = [], this.h = t
    };
  on.prototype.Y = function (t) {
    if (!h(t)) throw Error("Invalid filter. Must be a function.");
    this.ya.push(t)
  }, on.prototype.send = function (t, e) {
    if (0 == this.ya.length) return this.h.send(t, e);
    var n = new un(t, e);
    return sn(this, 0, n)
      .w(function () {
        if (!n.Ya) return this.h.send(t, e)
      }, this)
  };
  var sn = function (t, e, n) {
      return Qe()
        .w(function () {
          return this.ya[e](n)
        }, t)
        .w(function () {
          if (++e < this.ya.length && !n.Ya) return sn(this, e, n)
        }, t)
    }
    , un = function (t, e) {
      this.dd = t, this.Jc = e, this.Ya = !1
    };
  un.prototype.Ab = function () {
    return this.dd
  }, un.prototype.ba = function () {
    return this.Jc
  }, un.prototype.cancel = function () {
    this.Ya = !0
  };
  var ln = function (t, e) {
    this.width = t, this.height = e
  };
  ln.prototype.clone = function () {
    return new ln(this.width, this.height)
  }, ln.prototype.floor = function () {
    return this.width = Math.floor(this.width), this.height = Math.floor(this.height), this
  }, !Vt && !Lt || Lt && 9 <= Number(Xt) || Vt && jt("1.9.1"), Lt && jt("9");
  var hn = {
      id: "anonymizeIp"
      , name: "aip"
      , valueType: "boolean"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , cn = {
      id: "apiVersion"
      , name: "v"
      , valueType: "text"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , fn = {
      id: "appName"
      , name: "an"
      , valueType: "text"
      , maxLength: 100
      , defaultValue: void 0
    }
    , pn = {
      id: "appVersion"
      , name: "av"
      , valueType: "text"
      , maxLength: 100
      , defaultValue: void 0
    }
    , dn = {
      id: "clientId"
      , name: "cid"
      , valueType: "text"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , vn = {
      id: "language"
      , name: "ul"
      , valueType: "text"
      , maxLength: 20
      , defaultValue: void 0
    }
    , yn = {
      id: "libVersion"
      , name: "_v"
      , valueType: "text"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , gn = {
      id: "sampleRateOverride"
      , name: "usro"
      , valueType: "integer"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , mn = {
      id: "screenColors"
      , name: "sd"
      , valueType: "text"
      , maxLength: 20
      , defaultValue: void 0
    }
    , bn = {
      id: "screenResolution"
      , name: "sr"
      , valueType: "text"
      , maxLength: 20
      , defaultValue: void 0
    }
    , xn = {
      id: "trackingId"
      , name: "tid"
      , valueType: "text"
      , maxLength: void 0
      , defaultValue: void 0
    }
    , wn = {
      id: "viewportSize"
      , name: "vp"
      , valueType: "text"
      , maxLength: 20
      , defaultValue: void 0
    }
    , Tn = {
      Xb: hn
      , kd: cn
      , nd: fn
      , od: pn
      , wd: dn
      , Od: vn
      , Pd: yn
      , Vd: gn
      , Wd: mn
      , Xd: bn
      , je: xn
      , qe: wn
    }
    , En = function (t) {
      if (!u(t)) return t;
      var e = Ln(t, _);
      if (c(e)) return e;
      if (e = Ln(t, Tn), c(e)) return e;
      if (e = /^dimension(\d+)$/.exec(t), null !== e) return Q(parseInt(e[1], 10));
      if (e = /^metric(\d+)$/.exec(t), null !== e) return tt(parseInt(e[1], 10));
      throw Error(t + " is not a valid parameter name.")
    }
    , Ln = function (t, e) {
      var n = B(e, function (e) {
        return e.id == t && "metric" != t && "dimension" != t
      });
      return c(n) ? n : null
    }
    , Sn = function (t, e) {
      this.hc = e, this.D = e.cb(), this.Mb = new ct, this.$b = this.ob = !1
    };
  t = Sn.prototype, t.set = function (t, e) {
    if (null == e) throw Error("Value must be defined and not null. Parameter=" + t.id);
    var n = En(t);
    this.Mb.set(n, e)
  }, t.Y = function (t) {
    this.hc.Y(t)
  }, t.send = function (t, e) {
    if (t instanceof pt) return t.send(this);
    var n = this.Mb.clone();
    return e instanceof ct ? n.addAll(e) : c(e) && O(e, function (t, e) {
      null != t && n.set(En(e), t)
    }, this), this.ob && (this.ob = !1, n.set(W, "start")), this.$b && n.set(hn, !0), this.D.send(t, n)
  }, t.Pc = function (t) {
    var e = {
      description: t
    };
    return this.set($, t), this.send("appview", e)
  }, t.Qc = function (t, e, n, i) {
    return this.send("event", {
      eventCategory: t
      , eventAction: e
      , eventLabel: n
      , eventValue: i
    })
  }, t.Sc = function (t, e, n) {
    return this.send("social", {
      socialNetwork: t
      , socialAction: e
      , socialTarget: n
    })
  }, t.Rc = function (t, e) {
    return this.send("exception", {
      exDescription: t
      , exFatal: e
    })
  }, t.Pb = function (t, e, n, i, r) {
    return this.send("timing", {
      timingCategory: t
      , timingVar: e
      , timingLabel: i
      , timingValue: n
      , sampleRateOverride: r
    })
  }, t.qc = function () {
    this.ob = !0
  }, t.Zc = function (t, e, n, i) {
    return new Vn(this, t, e, n, i)
  };
  var Vn = function (t, e, n, i, r) {
    this.Vb = t, this.fc = e, this.gd = n, this.yc = i, this.La = r, this.Yc = y()
  };
  Vn.prototype.send = function () {
    var t = this.Vb.Pb(this.fc, this.gd, y() - this.Yc, this.yc, this.La);
    return this.Vb = null, t
  };
  var Cn = function (t, e, n, i, r) {
    this.zc = t, this.ac = e, this.bc = n, this.j = i, this.gc = r
  };
  Cn.prototype.tc = function (t) {
    var e = new Sn(0, this.gc.create());
    return e.set(yn, this.zc), e.set(cn, 1), e.set(fn, this.ac), e.set(pn, this.bc), e.set(xn, t), (t = navigator.language || navigator.browserLanguage) && e.set(vn, t), (t = screen.colorDepth + "-bit") && e.set(mn, t), (t = [screen.width, screen.height].join("x")) && e.set(bn, t), t = window.document, t = "CSS1Compat" == t.compatMode ? t.documentElement : t.body, t = new ln(t.clientWidth, t.clientHeight), (t = [t.width, t.height].join("x")) && e.set(wn, t), e
  }, Cn.prototype.rc = function () {
    return Ze(this.j.ma)
  };
  var Mn = function (t, e, n, i, r, a) {
    for (We.call(this, r, a), this.ib = t, this.Za = [], this.zb = !!e, this.pc = !!n, this.jc = !!i, e = this.Hb = 0; e < t.length; e++) qe(t[e], d(this.Bb, this, e, !0), d(this.Bb, this, e, !1));
    0 != t.length || this.zb || this.G(this.Za)
  };
  m(Mn, We), Mn.prototype.Bb = function (t, e, n) {
    return this.Hb++, this.Za[t] = [e, n], this.K || (this.zb && e ? this.G([t, n]) : this.pc && !e ? this.I(n) : this.Hb == this.ib.length && this.G(this.Za)), this.jc && !e && (n = null), n
  }, Mn.prototype.I = function (t) {
    for (Mn.W.I.call(this, t), t = 0; t < this.ib.length; t++) this.ib[t].cancel()
  };
  var kn = function (t) {
      return new Mn(t, (!1), (!0))
        .w(function (t) {
          for (var e = [], n = 0; n < t.length; n++) e[n] = t[n][1];
          return e
        })
    }
    , An = function () {
      for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""), e = 0, n = t.length; e < n; e++) switch (t[e]) {
      case "x":
        t[e] = Math.floor(16 * Math.random())
          .toString(16);
        break;
      case "y":
        t[e] = (Math.floor(4 * Math.random()) + 8)
          .toString(16)
      }
      return t.join("")
    }
    , In = function (t) {
      this.R = t, this.La = 100, this.vb = [], this.da = this.oa = null, this.ma = Pn(this), this.ma.w(function () {
        this.Qb = te(this.R, "a", d(this.uc, this))
      }, this)
    }
    , Pn = function (t) {
      return On(t)
        .w(function () {
          return this
        }, t)
    }
    , On = function (t) {
      return kn([Nn(t), Bn(t)])
    };
  In.prototype.uc = function () {
    Rn(this);
    var t = Xn(this)
      , e = this.Fa();
    On(this)
      .w(function () {
        t != Xn(this) && Hn(this, "analytics.user-id"), e != this.Fa() && Hn(this, "analytics.tracking-permitted")
      }, this)
  };
  var jn = function (t, e) {
    Rn(t), t.vb.push(e)
  };
  In.prototype.Wc = function (t) {
    Rn(this);
    var e = this.da != t;
    this.da = t, this.R.set("analytics.tracking-permitted", t.toString()), e && Hn(this, "analytics.tracking-permitted")
  }, In.prototype.Fa = function () {
    Rn(this);
    var t;
    return (t = this.da) && (t = n._gaUserPrefs, t = !(t && t.ioo && t.ioo())), t
  };
  var Nn = function (t) {
      return t.R.get("analytics.tracking-permitted")
        .w(function (t) {
          if (this.da = !0, i(t)) switch (t) {
          case "true":
            this.da = !0;
            break;
          case "false":
            this.da = !1
          }
        }, t)
    }
    , Xn = function (t) {
      if (Rn(t), !u(t.oa)) throw Error("Invalid state. UserID is not a string.");
      return t.oa
    }
    , Bn = function (t) {
      return t.R.get("analytics.user-id")
        .w(function (t) {
          i(t) ? this.oa = t : Fn(this)
        }, t)
    }
    , Fn = function (t) {
      return t.oa = An(), t.R.set("analytics.user-id", t.oa)
        .w(function () {
          Hn(this, "analytics.user-id")
        }, t)
    };
  In.prototype.Vc = function (t) {
    Rn(this), this.La = t
  };
  var Dn = function (t) {
    return Rn(t), t.La
  };
  In.prototype.Nc = function () {
    return Fn(this)
  };
  var Hn = function (t, e) {
    L(t.vb, function (t) {
      t(e)
    })
  };
  In.prototype.ua = function () {
    null != this.Qb && ae(this.Qb)
  };
  var Rn = function (t) {
      if (!Ze(t.ma)
        .K) throw Error("Settings object accessed prior to entering ready state.")
    }
    , Kn = function () {
      pe.call(this), this.kb = "google-analytics", this.R = chrome.storage.local, chrome.storage.onChanged.addListener(d(this.Hc, this))
    };
  m(Kn, pe), Kn.prototype.Hc = function (t, e) {
    "local" == e && Yn(this, t) && this.dispatchEvent("a")
  };
  var Yn = function (t, e) {
    return S(N(e), function (t) {
      return 0 == t.lastIndexOf(this.kb, 0)
    }, t)
  };
  Kn.prototype.get = function (t) {
    var e = new We
      , n = this.kb + "." + t;
    return this.R.get(n, function (t) {
      chrome.runtime.lastError ? e.I(chrome.runtime.lastError) : (t = t[n], e.G(null != t ? t.toString() : void 0))
    }), e
  }, Kn.prototype.set = function (t, e) {
    var n = new We
      , i = {};
    return i[this.kb + "." + t] = e, this.R.set(i, function () {
      chrome.runtime.lastError ? n.I(chrome.runtime.lastError) : n.G()
    }), n
  };
  var Un = function () {};
  Un.sc = function () {
    return Un.Eb ? Un.Eb : Un.Eb = new Un
  }, Un.prototype.send = function () {
    return Qe()
  };
  var Gn = function (t) {
    this.lc = t
  };
  Gn.prototype.send = function (t, e) {
    return this.lc.push({
      wc: t
      , Ic: e
    }), Qe()
  };
  var Wn = function (t, e, n) {
    this.j = t, this.aa = [], this.S = {
      enabled: new Gn(this.aa)
      , disabled: n
    }, this.D = this.S.enabled, qe(Ze(this.j.ma), v(this.Gc, e), this.Fc, this)
  };
  Wn.prototype.Gc = function (t) {
    if (null === this.aa) throw Error("Channel setup already completed.");
    this.S.enabled = t(), $n(this), L(this.aa, function (t) {
      this.send(t.wc, t.Ic)
    }, this), this.aa = null, jn(this.j, d(this.Ec, this))
  }, Wn.prototype.Fc = function () {
    if (null === this.aa) throw Error("Channel setup already completed.");
    this.D = this.S.enabled = this.S.disabled, this.aa = null
  }, Wn.prototype.send = function (t, e) {
    return this.D.send(t, e)
  };
  var $n = function (t) {
    t.D = t.j.Fa() ? t.S.enabled : t.S.disabled
  };
  Wn.prototype.Ec = function (t) {
    switch (t) {
    case "analytics.tracking-permitted":
      $n(this)
    }
  };
  var Jn = function (t, e) {
    this.Xa = [];
    var n = d(function () {
      return this.xa = new on(e.cb()), L(this.Xa, function (t) {
        this.xa.Y(t)
      }, this), this.Xa = null, this.xa
    }, this);
    this.D = new Wn(t, n, Un.sc())
  };
  Jn.prototype.cb = function () {
    return this.D
  }, Jn.prototype.Y = function (t) {
    this.xa ? this.xa.Y(t) : this.Xa.push(t)
  };
  var qn = function (t, e) {
    this.j = t, this.Xc = e
  };
  qn.prototype.create = function () {
    return new Jn(this.j, this.Xc)
  };
  var Zn = function (t, e) {
    pe.call(this), this.Ea = t || 1, this.fa = e || n, this.Va = d(this.bd, this), this.hb = y()
  };
  m(Zn, pe), t = Zn.prototype, t.enabled = !1, t.l = null, t.bd = function () {
    if (this.enabled) {
      var t = y() - this.hb;
      0 < t && t < .8 * this.Ea ? this.l = this.fa.setTimeout(this.Va, this.Ea - t) : (this.l && (this.fa.clearTimeout(this.l), this.l = null), this.dispatchEvent("tick"), this.enabled && (this.l = this.fa.setTimeout(this.Va, this.Ea), this.hb = y()))
    }
  }, t.start = function () {
    this.enabled = !0, this.l || (this.l = this.fa.setTimeout(this.Va, this.Ea), this.hb = y())
  }, t.stop = function () {
    this.enabled = !1, this.l && (this.fa.clearTimeout(this.l), this.l = null)
  }, t.A = function () {
    Zn.W.A.call(this), this.stop(), delete this.fa
  };
  var zn = function (t, e, i) {
      if (h(t)) i && (t = d(t, i));
      else {
        if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
        t = d(t.handleEvent, t)
      }
      return 2147483647 < Number(e) ? -1 : n.setTimeout(t, e || 0)
    }
    , _n = function (t) {
      vt.call(this), this.eb = t, this.b = {}
    };
  m(_n, vt);
  var Qn = [];
  _n.prototype.listen = function (t, e, n, i) {
    o(e) || (e && (Qn[0] = e.toString()), e = Qn);
    for (var r = 0; r < e.length; r++) {
      var a = te(t, e[r], n || this.handleEvent, i || !1, this.eb || this);
      if (!a) break;
      this.b[a.key] = a
    }
    return this
  }, _n.prototype.jb = function (t, e, n, i) {
    return ti(this, t, e, n, i)
  };
  var ti = function (t, e, n, i, r, a) {
    if (o(n))
      for (var s = 0; s < n.length; s++) ti(t, e, n[s], i, r, a);
    else {
      if (e = ie(e, n, i || t.handleEvent, r, a || t.eb || t), !e) return t;
      t.b[e.key] = e
    }
    return t
  };
  _n.prototype.pb = function (t, e, n, i, r) {
    if (o(e))
      for (var a = 0; a < e.length; a++) this.pb(t, e[a], n, i, r);
    else n = n || this.handleEvent, r = r || this.eb || this, n = fe(n), i = !!i, e = Ut(t) ? t.ja(e, n, i, r) : t && (t = he(t)) ? t.ja(e, n, i, r) : null, e && (ae(e), delete this.b[e.key]);
    return this
  }, _n.prototype.removeAll = function () {
    O(this.b, function (t, e) {
      this.b.hasOwnProperty(e) && ae(t)
    }, this), this.b = {}
  }, _n.prototype.A = function () {
    _n.W.A.call(this), this.removeAll()
  }, _n.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented")
  };
  var ei = function () {
    pe.call(this), this.wa = new _n(this), Dt && (Ht ? this.wa.listen(Rt ? document.body : window, ["online", "offline"], this.Cb) : (this.Lb = !Dt || navigator.onLine, this.l = new Zn(250), this.wa.listen(this.l, "tick", this.vc), this.l.start()))
  };
  m(ei, pe), ei.prototype.vc = function () {
    var t = !Dt || navigator.onLine;
    t != this.Lb && (this.Lb = t, this.Cb())
  }, ei.prototype.Cb = function () {
    this.dispatchEvent((Dt ? navigator.onLine : 1) ? "online" : "offline")
  }, ei.prototype.A = function () {
    ei.W.A.call(this), this.wa.ua(), this.wa = null, this.l && (this.l.ua(), this.l = null)
  };
  var ni = function (t, e) {
    this.j = t, this.h = e
  };
  ni.prototype.send = function (t, e) {
    return e.set(dn, Xn(this.j)), this.h.send(t, e)
  };
  var ii = function (t) {
    this.h = t
  };
  ii.prototype.send = function (t, e) {
    return ri(e), ai(e), this.h.send(t, e)
  };
  var ri = function (t) {
      ft(t, function (e, n) {
        i(e.maxLength) && "text" == e.valueType && 0 < e.maxLength && n.length > e.maxLength && t.set(e, n.substring(0, e.maxLength))
      })
    }
    , ai = function (t) {
      ft(t, function (e, n) {
        i(e.defaultValue) && n == e.defaultValue && t.remove(e)
      })
    }
    , oi = {
      status: "device-offline"
      , ta: void 0
    }
    , si = {
      status: "rate-limited"
      , ta: void 0
    }
    , ui = {
      status: "sampled-out"
      , ta: void 0
    }
    , li = {
      status: "sent"
      , ta: void 0
    }
    , hi = function (t, e) {
      this.cd = t, this.h = e
    };
  hi.prototype.send = function (t, e) {
    var n;
    n = this.cd;
    var i = n.Sb()
      , r = Math.floor((i - n.Gb) * n.oc);
    return 0 < r && (n.ha = Math.min(n.ha + r, n.Bc), n.Gb = i), 1 > n.ha ? n = !1 : (--n.ha, n = !0), n || "item" == t || "transaction" == t ? this.h.send(t, e) : Qe(si)
  };
  var ci = function () {
      this.ha = 60, this.Bc = 500, this.oc = 5e-4, this.Sb = function () {
        return (new Date)
          .getTime()
      }, this.Gb = this.Sb()
    }
    , fi = function (t, e) {
      this.j = t, this.h = e
    };
  fi.prototype.send = function (t, e) {
    var n, i = e.get(dn)
      , i = parseInt(i.split("-")[1], 16);
    return "timing" != t ? n = Dn(this.j) : ((n = e.get(gn)) && e.remove(gn), n = n || Dn(this.j)), i < 655.36 * n ? this.h.send(t, e) : Qe(ui)
  };
  var pi = /^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/
    , di = function (t, e) {
      if (t)
        for (var n = t.split("&"), i = 0; i < n.length; i++) {
          var r = n[i].indexOf("=")
            , a = null
            , o = null;
          0 <= r ? (a = n[i].substring(0, r), o = n[i].substring(r + 1)) : a = n[i], e(a, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "")
        }
    }
    , vi = function () {};
  vi.prototype.tb = null;
  var yi, gi = function (t) {
      var e;
      return (e = t.tb) || (e = {}, xi(t) && (e[0] = !0, e[1] = !0), e = t.tb = e), e
    }
    , mi = function () {};
  m(mi, vi);
  var bi = function (t) {
      return (t = xi(t)) ? new ActiveXObject(t) : new XMLHttpRequest
    }
    , xi = function (t) {
      if (!t.Db && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
          var i = e[n];
          try {
            return new ActiveXObject(i), t.Db = i
          } catch (r) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
      }
      return t.Db
    };
  yi = new mi;
  var wi = function (t) {
    pe.call(this), this.headers = new H, this.Ta = t || null, this.N = !1, this.Sa = this.a = null, this.Ha = this.gb = "", this.V = this.fb = this.Da = this.$a = !1, this.Oa = 0, this.Na = null, this.Nb = "", this.qb = this.Lc = this.jd = !1
  };
  m(wi, pe);
  var Ti = /^https?$/i
    , Ei = ["POST", "PUT"]
    , Li = []
    , Si = function (t, e, n) {
      var i = new wi;
      Li.push(i), e && i.listen("complete", e), i.jb("ready", i.ic), i.send(t, "POST", n, void 0)
    };
  wi.prototype.ic = function () {
    this.ua(), M(Li, this)
  }, wi.prototype.send = function (t, e, i, r) {
    if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.gb + "; newUri=" + t);
    e = e ? e.toUpperCase() : "GET", this.gb = t, this.Ha = "", this.$a = !1, this.N = !0, this.a = bi(this.Ta ? this.Ta : yi), this.Sa = gi(this.Ta ? this.Ta : yi), this.a.onreadystatechange = d(this.Kb, this), this.Lc && "onprogress" in this.a && (this.a.onprogress = d(function (t) {
      this.Jb(t, !0)
    }, this), this.a.upload && (this.a.upload.onprogress = d(this.Jb, this)));
    try {
      this.fb = !0, this.a.open(e, String(t), !0), this.fb = !1
    } catch (a) {
      return void this.va(5, a)
    }
    t = i || "";
    var o = this.headers.clone();
    r && ht(r, function (t, e) {
      o.set(e, t)
    }), r = C(o.L()), i = n.FormData && t instanceof n.FormData, !(0 <= E(Ei, e)) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function (t, e) {
      this.a.setRequestHeader(e, t)
    }, this), this.Nb && (this.a.responseType = this.Nb), X(this.a) && (this.a.withCredentials = this.jd);
    try {
      Pi(this), 0 < this.Oa && ((this.qb = Vi(this.a)) ? (this.a.timeout = this.Oa, this.a.ontimeout = d(this.Tb, this)) : this.Na = zn(this.Tb, this.Oa, this)), this.Da = !0, this.a.send(t), this.Da = !1
    } catch (a) {
      this.va(5, a)
    }
  };
  var Vi = function (t) {
      return Lt && jt(9) && l(t.timeout) && i(t.ontimeout)
    }
    , Ci = function (t) {
      return "content-type" == t.toLowerCase()
    };
  wi.prototype.Tb = function () {
    "undefined" != typeof e && this.a && (this.Ha = "Timed out after " + this.Oa + "ms, aborting", this.dispatchEvent("timeout"), this.abort(8))
  }, wi.prototype.va = function (t, e) {
    this.N = !1, this.a && (this.V = !0, this.a.abort(), this.V = !1), this.Ha = e, Mi(this), Ii(this)
  };
  var Mi = function (t) {
    t.$a || (t.$a = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
  };
  wi.prototype.abort = function () {
    this.a && this.N && (this.N = !1, this.V = !0, this.a.abort(), this.V = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ii(this))
  }, wi.prototype.A = function () {
    this.a && (this.N && (this.N = !1, this.V = !0, this.a.abort(), this.V = !1), Ii(this, !0)), wi.W.A.call(this)
  }, wi.prototype.Kb = function () {
    this.ia || (this.fb || this.Da || this.V ? ki(this) : this.Dc())
  }, wi.prototype.Dc = function () {
    ki(this)
  };
  var ki = function (t) {
    if (t.N && "undefined" != typeof e && (!t.Sa[1] || 4 != Oi(t) || 2 != ji(t)))
      if (t.Da && 4 == Oi(t)) zn(t.Kb, 0, t);
      else if (t.dispatchEvent("readystatechange"), 4 == Oi(t)) {
      t.N = !1;
      try {
        var i, r = ji(t);
        t: switch (r) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          i = !0;
          break t;
        default:
          i = !1
        }
        var a;
        if (!(a = i)) {
          var o;
          if (o = 0 === r) {
            var s = String(t.gb)
              .match(pi)[1] || null;
            if (!s && n.self && n.self.location) var u = n.self.location.protocol
              , s = u.substr(0, u.length - 1);
            o = !Ti.test(s ? s.toLowerCase() : "")
          }
          a = o
        }
        if (a) t.dispatchEvent("complete"), t.dispatchEvent("success");
        else {
          var l;
          try {
            l = 2 < Oi(t) ? t.a.statusText : ""
          } catch (h) {
            l = ""
          }
          t.Ha = l + " [" + ji(t) + "]", Mi(t)
        }
      } finally {
        Ii(t)
      }
    }
  };
  wi.prototype.Jb = function (t, e) {
    this.dispatchEvent(Ai(t, "progress")), this.dispatchEvent(Ai(t, e ? "downloadprogress" : "uploadprogress"))
  };
  var Ai = function (t, e) {
      return {
        type: e
        , lengthComputable: t.lengthComputable
        , loaded: t.loaded
        , total: t.total
      }
    }
    , Ii = function (t, e) {
      if (t.a) {
        Pi(t);
        var n = t.a
          , i = t.Sa[0] ? r : null;
        t.a = null, t.Sa = null, e || t.dispatchEvent("ready");
        try {
          n.onreadystatechange = i
        } catch (a) {}
      }
    }
    , Pi = function (t) {
      t.a && t.qb && (t.a.ontimeout = null), l(t.Na) && (n.clearTimeout(t.Na), t.Na = null)
    }
    , Oi = function (t) {
      return t.a ? t.a.readyState : 0
    }
    , ji = function (t) {
      try {
        return 2 < Oi(t) ? t.a.status : -1
      } catch (e) {
        return -1
      }
    }
    , Ni = function (t, e, n) {
      this.g = this.c = null, this.F = t || null, this.xc = !!n
    }
    , Xi = function (t) {
      t.c || (t.c = new H, t.g = 0, t.F && di(t.F, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
      }))
    };
  t = Ni.prototype, t.add = function (t, e) {
    Xi(this), this.F = null, t = Bi(this, t);
    var n = this.c.get(t);
    return n || this.c.set(t, n = []), n.push(e), this.g += 1, this
  }, t.remove = function (t) {
    return Xi(this), t = Bi(this, t), !!this.c.$(t) && (this.F = null, this.g -= this.c.get(t)
      .length, this.c.remove(t))
  }, t.$ = function (t) {
    return Xi(this), t = Bi(this, t), this.c.$(t)
  }, t.L = function () {
    Xi(this);
    for (var t = this.c.v(), e = this.c.L(), n = [], i = 0; i < e.length; i++)
      for (var r = t[i], a = 0; a < r.length; a++) n.push(e[i]);
    return n
  }, t.v = function (t) {
    Xi(this);
    var e = [];
    if (u(t)) this.$(t) && (e = k(e, this.c.get(Bi(this, t))));
    else {
      t = this.c.v();
      for (var n = 0; n < t.length; n++) e = k(e, t[n])
    }
    return e
  }, t.set = function (t, e) {
    return Xi(this), this.F = null, t = Bi(this, t), this.$(t) && (this.g -= this.c.get(t)
      .length), this.c.set(t, [e]), this.g += 1, this
  }, t.get = function (t, e) {
    var n = t ? this.v(t) : [];
    return 0 < n.length ? String(n[0]) : e
  }, t.toString = function () {
    if (this.F) return this.F;
    if (!this.c) return "";
    for (var t = [], e = this.c.L(), n = 0; n < e.length; n++)
      for (var i = e[n], r = encodeURIComponent(String(i)), i = this.v(i), a = 0; a < i.length; a++) {
        var o = r;
        "" !== i[a] && (o += "=" + encodeURIComponent(String(i[a]))), t.push(o)
      }
    return this.F = t.join("&")
  }, t.clone = function () {
    var t = new Ni;
    return t.F = this.F, this.c && (t.c = this.c.clone(), t.g = this.g), t
  };
  var Bi = function (t, e) {
      var n = String(e);
      return t.xc && (n = n.toLowerCase()), n
    }
    , Fi = function (t, e) {
      this.Uc = t, this.Ia = e
    };
  Fi.prototype.send = function (t, e) {
    if (Dt && !navigator.onLine) return tn();
    var n = new We
      , i = Di(t, e);
    return i.length > this.Ia ? n.I({
      status: "payload-too-big"
      , ta: st("Encoded hit length == %s, but should be <= %s.", i.length, this.Ia)
    }) : Si(this.Uc, function () {
      n.G(li)
    }, i), n
  };
  var Di = function (t, e) {
      var n = new Ni;
      return n.add(G.name, t), ft(e, function (t, e) {
        n.add(t.name, e.toString())
      }), n.toString()
    }
    , Hi = function (t, e, n) {
      this.j = t, this.Tc = e, this.Ia = n
    };
  Hi.prototype.cb = function () {
    if (!this.D) {
      if (!Ze(this.j.ma)
        .K) throw Error("Cannot construct shared channel prior to settings being ready.");
      new ei;
      var t = new ii(new Fi(this.Tc, this.Ia))
        , e = new ci;
      this.D = new ni(this.j, new fi(this.j, new hi(e, t)))
    }
    return this.D
  };
  var Ri = new H
    , Ki = function () {
      return K || (K = new In(new Kn)), K
    };
  g("goog.async.Deferred", We), g("goog.async.Deferred.prototype.addCallback", We.prototype.w), g("goog.async.Deferred.prototype.callback", We.prototype.G), g("goog.async.Deferred.prototype.then", We.prototype.then), g("goog.events.EventTarget", pe), g("goog.events.EventTarget.prototype.listen", pe.prototype.listen), g("analytics.getService", function (t, e) {
    var n = Ri.get(t, null)
      , i = e || chrome.runtime.getManifest()
      .version;
    if (null === n) {
      if (n = Ki(), !Y) {
        var r = Ki();
        Y = new qn(r, new Hi(r, "https://www.google-analytics.com/collect", 8192))
      }
      n = new Cn("ca1.6.0", t, i, n, Y), Ri.set(t, n)
    }
    return n
  }), g("analytics.internal.GoogleAnalyticsService", Cn), g("analytics.internal.GoogleAnalyticsService.prototype.getTracker", Cn.prototype.tc), g("analytics.internal.GoogleAnalyticsService.prototype.getConfig", Cn.prototype.rc), g("analytics.internal.ServiceSettings", In), g("analytics.internal.ServiceSettings.prototype.setTrackingPermitted", In.prototype.Wc), g("analytics.internal.ServiceSettings.prototype.isTrackingPermitted", In.prototype.Fa), g("analytics.internal.ServiceSettings.prototype.setSampleRate", In.prototype.Vc), g("analytics.internal.ServiceSettings.prototype.resetUserId", In.prototype.Nc), g("analytics.internal.ServiceTracker", Sn), g("analytics.internal.ServiceTracker.prototype.send", Sn.prototype.send), g("analytics.internal.ServiceTracker.prototype.sendAppView", Sn.prototype.Pc), g("analytics.internal.ServiceTracker.prototype.sendEvent", Sn.prototype.Qc), g("analytics.internal.ServiceTracker.prototype.sendSocial", Sn.prototype.Sc), g("analytics.internal.ServiceTracker.prototype.sendException", Sn.prototype.Rc), g("analytics.internal.ServiceTracker.prototype.sendTiming", Sn.prototype.Pb), g("analytics.internal.ServiceTracker.prototype.startTiming", Sn.prototype.Zc), g("analytics.internal.ServiceTracker.Timing", Vn), g("analytics.internal.ServiceTracker.Timing.prototype.send", Vn.prototype.send), g("analytics.internal.ServiceTracker.prototype.forceSessionStart", Sn.prototype.qc), g("analytics.internal.ServiceTracker.prototype.addFilter", Sn.prototype.Y), g("analytics.internal.FilterChannel.Hit", un), g("analytics.internal.FilterChannel.Hit.prototype.getHitType", un.prototype.Ab), g("analytics.internal.FilterChannel.Hit.prototype.getParameters", un.prototype.ba), g("analytics.internal.FilterChannel.Hit.prototype.cancel", un.prototype.cancel), g("analytics.ParameterMap", ct), g("analytics.ParameterMap.Entry", ct.Entry), g("analytics.ParameterMap.prototype.set", ct.prototype.set), g("analytics.ParameterMap.prototype.get", ct.prototype.get), g("analytics.ParameterMap.prototype.remove", ct.prototype.remove), g("analytics.ParameterMap.prototype.toObject", ct.prototype.Ub), g("analytics.HitTypes.APPVIEW", "appview"), g("analytics.HitTypes.EVENT", "event"), g("analytics.HitTypes.SOCIAL", "social"), g("analytics.HitTypes.TRANSACTION", "transaction"), g("analytics.HitTypes.ITEM", "item"), g("analytics.HitTypes.TIMING", "timing"), g("analytics.HitTypes.EXCEPTION", "exception"), g("analytics.createDimensionParam", Q), g("analytics.createMetricParam", tt), O(_, function (t) {
    var e = t.id.replace(/[A-Z]/, "_$&")
      .toUpperCase();
    g("analytics.Parameters." + e, t)
  }), g("analytics.filters.EventLabelerBuilder", at), g("analytics.filters.EventLabelerBuilder.prototype.appendToExistingLabel", at.prototype.cc), g("analytics.filters.EventLabelerBuilder.prototype.stripValue", at.prototype.$c), g("analytics.filters.EventLabelerBuilder.prototype.powersOfTwo", at.prototype.Kc), g("analytics.filters.EventLabelerBuilder.prototype.rangeBounds", at.prototype.Mc), g("analytics.filters.EventLabelerBuilder.prototype.build", at.prototype.qa), g("analytics.filters.FilterBuilder", it), g("analytics.filters.FilterBuilder.builder", rt), g("analytics.filters.FilterBuilder.prototype.when", it.prototype.when), g("analytics.filters.FilterBuilder.prototype.whenHitType", it.prototype.Wb), g("analytics.filters.FilterBuilder.prototype.whenValue", it.prototype.hd), g("analytics.filters.FilterBuilder.prototype.applyFilter", it.prototype.sb), g("analytics.filters.FilterBuilder.prototype.build", it.prototype.qa), g("analytics.EventBuilder", pt), g("analytics.EventBuilder.builder", function () {
    return dt
  }), g("analytics.EventBuilder.prototype.category", pt.prototype.ec), g("analytics.EventBuilder.prototype.action", pt.prototype.action), g("analytics.EventBuilder.prototype.label", pt.prototype.label), g("analytics.EventBuilder.prototype.value", pt.prototype.value), g("analytics.EventBuilder.prototype.dimension", pt.prototype.mc), g("analytics.EventBuilder.prototype.metric", pt.prototype.Cc), g("analytics.EventBuilder.prototype.send", pt.prototype.send)
})
.call(this);
