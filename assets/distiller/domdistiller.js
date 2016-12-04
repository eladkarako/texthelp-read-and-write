! function () {
  function t() {}

  function n(t) {
    function n() {}
    return n.prototype = t || {}, new n
  }

  function e() {}

  function i(e, i, r) {
    var a = Ca[e]
      , o = a instanceof Array ? a[0] : null;
    for (a && !o ? fa = a : (fa = Ca[e] = i ? n(Ca[i]) : {}, fa.cM = r, fa.constructor = fa, !i && (fa.tM = t)), a = 3; a < arguments.length; ++a) arguments[a].prototype = fa;
    o && (fa.cZ = o)
  }

  function r() {}

  function a(t, n) {
    return c(t) ? t === n : h(t) ? t.eQ(n) : (l(t), t === n)
  }

  function o(t) {
    return c(t) ? $a : h(t) ? t.cZ : l(t) ? t.cZ : Ra
  }

  function u(t) {
    if (c(t)) {
      Tt();
      var n = ":" + t
        , e = ja[n];
      if (null != e) t = e;
      else {
        if (e = Fa[n], null == e) {
          var i, r, a;
          for (i = 0, r = t.length, a = r - 4, e = 0; e < a;) i = t.charCodeAt(e + 3) + 31 * (t.charCodeAt(e + 2) + 31 * (t.charCodeAt(e + 1) + 31 * (t.charCodeAt(e) + 31 * i))), i = ~~i, e += 4;
          for (; e < r;) i *= 31, a = e++, a = t.charCodeAt(a), i += a;
          e = ~~i
        }
        256 == Qa && (Fa = ja, ja = {}, Qa = 0), ++Qa, t = ja[n] = e
      }
    } else t = h(t) ? t.hC() : (l(t), t.$H || (t.$H = ++La));
    return t
  }

  function h(n) {
    return !Array.isArray(n) && n.tM === t
  }

  function s(t, n) {
    return null != t && (c(t) && !!_a[n] || t.cM && !!t.cM[n])
  }

  function l(n) {
    return Array.isArray(n) && n.tM === t
  }

  function c(t) {
    return "string" == typeof t
  }

  function f(t) {
    return null == t ? null : t
  }

  function b(t) {
    return ~~Math.max(Math.min(t, wa), -2147483648)
  }

  function d(t) {
    if (null == t.n)
      if (t.B()) {
        var n = t.c;
        n.C() ? t.n = "[" + n.k : n.B() ? t.n = "[" + n.w() : t.n = "[L" + n.w() + ";", t.b = n.v() + "[]", t.j = n.A() + "[]"
      } else {
        var n = t.g
          , e = t.d
          , e = e.split("/");
        t.n = N(".", [n, N("$", e)]), t.b = N(".", [n, N(".", e)]), t.j = e[e.length - 1]
      }
  }

  function g(t) {
    return d(t), t.n
  }

  function w(t) {
    return d(t), t.j
  }

  function v() {
    this.i = Oa++, this.a = this.k = this.b = this.d = this.g = this.j = this.n = null
  }

  function p(t) {
    var n;
    return n = new v, n.n = "Class$" + (t ? "S" + t : "" + n.i), n.b = n.n, n.j = n.n, n
  }

  function m(t) {
    var n;
    return n = p(t), C(t, n), n
  }

  function T(t, n) {
    var e;
    return e = p(t), C(t, e), e.f = n ? 8 : 0, e.e = n, e
  }

  function E() {
    var t;
    return t = p(null), t.f = 2, t
  }

  function y(t, n) {
    var e = t.a = t.a || [];
    return e[n] || (e[n] = t.u(n))
  }

  function N(t, n) {
    for (var e = 0; !n[e] || "" == n[e];) e++;
    for (var i = n[e++]; e < n.length; e++) n[e] && "" != n[e] && (i += t + n[e]);
    return i
  }

  function C(t, n) {
    if (t) {
      n.k = t;
      var e = n.C() ? null : Ca[n.k];
      e ? e.cZ = n : Ca[t] = [n]
    }
  }

  function _(t) {
    this.e = t, D(this, this.e)
  }

  function O() {
    O = e, Ia = new r
  }

  function A(t) {
    O(), this.e = null, this.a = "", this.b = t, this.a = ""
  }

  function R(t) {
    da.setTimeout(function () {
      throw t
    }, 0)
  }

  function I() {
    0 != Sa && (Sa = 0), Ja = -1
  }

  function S() {
    S = e, Da = new L
  }

  function L() {}

  function x(t, n) {
    var e, i, r;
    for (i = 0, r = t.length; i < r; i++) {
      e = t[i];
      try {
        if (e[1]) {
          if (e[0].Fb()) {
            var a = n;
            !a && (a = []), a[a.length] = e, n = a
          }
        } else e[0].Fb()
      } catch (o) {
        if (o = z(o), !s(o, 5)) throw V(o);
        e = o, R(s(e, 26) ? e.r() : e)
      }
    }
    return n
  }

  function J() {
    J = e;
    var t, n;
    n = !(Error.stackTraceLimit || "stack" in Error()), t = new P, ka = n ? new k : t
  }

  function D(t, n) {
    J(), ka.s(t, n)
  }

  function k() {}

  function M() {
    M = e, Error.stackTraceLimit = 64
  }

  function P() {
    M()
  }

  function B(t) {
    if (!t) throw new se
  }

  function H(t, n) {
    if (0 > t || t >= n) throw new tt("Index: " + t + ", Size: " + n)
  }

  function F(t) {
    if (null == t) throw new lt
  }

  function j(t, n) {
    if (0 > t || t > n) throw new tt("Index: " + t + ", Size: " + n)
  }

  function $(t, n) {
    return null == t[n] ? null : String(t[n])
  }

  function Q(t, n) {
    return t.getAttribute(n) || ""
  }

  function G(t) {
    return (t = t.parentNode) && 1 == t.nodeType || (t = null), t
  }

  function U(t, n) {
    var e;
    return e = t.slice(0, n), q(o(t), t.cM, t.__elementTypeId$, t.__elementTypeCategory$, e), e
  }

  function Y(t, n) {
    var e;
    return e = K(0, n), q(o(t), t.cM, t.__elementTypeId$, t.__elementTypeCategory$, e), e
  }

  function W(t, n, e, i) {
    var r = ma;
    return e = K(i, e), q(y(t, 1), r, n, i, e), e
  }

  function q(n, e, i, r, a) {
    return a.cZ = n, a.cM = e, a.tM = t, a.__elementTypeId$ = i, a.__elementTypeCategory$ = r, a
  }

  function K(t, n) {
    var e, i = Array(n);
    switch (t) {
    case 6:
      e = {
        l: 0
        , m: 0
        , h: 0
      };
      break;
    case 7:
      e = 0;
      break;
    case 8:
      e = !1;
      break;
    default:
      return i
    }
    for (var r = 0; r < n; ++r) i[r] = e;
    return i
  }

  function V(t) {
    return s(t, 26) && f(t.b) !== f((O(), Ia)) ? f(t.b) === f(Ia) ? null : t.b : t
  }

  function z(t) {
    var n;
    if (s(t, 5)) return t;
    if (n = t && t.__gwt$exception, !n && (n = new A(t), D(n, t), t && "object" == typeof t)) try {
      t.__gwt$exception = n
    } catch (e) {}
    return n
  }

  function X() {
    var t;
    t = navigator.userAgent.toLowerCase();
    var n = ga.documentMode;
    if (t = -1 != t.indexOf("webkit") ? "safari" : -1 != t.indexOf("msie") && 10 <= n && 11 > n ? "ie10" : -1 != t.indexOf("msie") && 9 <= n && 11 > n ? "ie9" : -1 != t.indexOf("msie") && 8 <= n && 11 > n ? "ie8" : -1 != t.indexOf("gecko") || 11 <= n ? "gecko1_8" : "unknown", "safari" !== t) throw new Z(t)
  }

  function Z(t) {
    this.e = "" + ("Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" + t + ").\nExpect more errors."), D(this, this.e)
  }

  function tt(t) {
    _.call(this, t)
  }

  function nt() {
    D(this, this.e)
  }

  function et() {
    et = e, Ma = new it((!1)), Pa = new it((!0))
  }

  function it(t) {
    this.a = t
  }

  function rt(t) {
    _.call(this, t)
  }

  function at() {
    D(this, this.e)
  }

  function ot(t) {
    this.a = t
  }

  function ut(t) {
    var n, e;
    return -129 < t && 128 > t ? (n = t + 128, e = (ht(), Ba)[n], !e && (e = Ba[n] = new ot(t)), e) : new ot(t)
  }

  function ht() {
    ht = e, Ba = W(Ha, 25, 256, 0)
  }

  function st(t, n) {
    return t < n ? t : n
  }

  function lt() {
    D(this, this.e)
  }

  function ct(t) {
    _.call(this, t)
  }

  function ft(t, n) {
    return null != n && (t == n || t.length == n.length && t.toLowerCase() == n.toLowerCase())
  }

  function bt(t) {
    var n = 160..toString(16)
      , n = "\\u" + "0000".substring(n.length) + n;
    return t.replace(RegExp(n, "g"), String.fromCharCode(32))
  }

  function dt(t) {
    var n;
    return n = mt(""), t.replace(RegExp("'", "g"), n)
  }

  function gt(t, n) {
    var e;
    return e = mt(""), t.replace(RegExp(n), e)
  }

  function wt(t, n) {
    for (var e = RegExp(n, "g"), i = [], r = 0, a = t, o = null;;) {
      var u = e.exec(a);
      if (null == u || "" == a) {
        i[r] = a;
        break
      }
      i[r] = a.substring(0, u.index), a = a.substring(u.index + u[0].length, a.length), e.lastIndex = 0, o == a && (i[r] = a.substring(0, 1), a = a.substring(1)), o = a, r++
    }
    if (0 < t.length) {
      for (e = i.length; 0 < e && "" == i[e - 1];) --e;
      e < i.length && i.splice(e, i.length - e)
    }
    for (e = W($a, 2, i.length, 4), r = 0; r < i.length; ++r) e[r] = i[r];
    return e
  }

  function vt(t, n) {
    return t.substr(n, t.length - n)
  }

  function pt(t) {
    return 0 == t.length || " " < t[0] && " " < t[t.length - 1] ? t : t.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, "")
  }

  function mt(t) {
    var n;
    for (n = 0; 0 <= (n = t.indexOf("\\", n));) t = 36 == t.charCodeAt(n + 1) ? t.substr(0, n) + "$" + vt(t, ++n) : t.substr(0, n) + vt(t, ++n);
    return t
  }

  function Tt() {
    Tt = e, Fa = {}, ja = {}
  }

  function Et() {
    this.a = ""
  }

  function yt(t) {
    this.a = t
  }

  function Nt(t) {
    _.call(this, t)
  }

  function Ct(t, n) {
    var e, i, r;
    for (F(n), e = !1, r = n.D(); r.Q();) i = r.R(), e |= t.F(i);
    return e
  }

  function _t(t) {
    var n, e, i, r;
    for (r = new yt("["), n = !1, i = t.D(); i.Q();) e = i.R(), n ? r.a += ", " : n = !0, r.a += e === t ? "(this Collection)" : "" + e;
    return r.a += "]", r.a
  }

  function Ot(t, n) {
    var e, i, r;
    return e = n.W(), r = n.X(), i = t.P(e), !(!(f(r) === f(i) || null != r && a(r, i)) || null == i && !t.N(e))
  }

  function At(t, n) {
    var e, i, r;
    for (i = t.O()
      .D(); i.Q();)
      if (e = i.R(), r = e.W(), f(n) === f(r) || null != n && a(n, r)) return e;
    return null
  }

  function Rt(t, n) {
    return n === t ? "(this Map)" : "" + n
  }

  function It(t) {
    return t ? t.X() : null
  }

  function St(t, n) {
    return c(n) ? Jt(t, n) : !!Pn(t.a, n)
  }

  function Lt(t, n) {
    return c(n) ? xt(t, n) : It(Pn(t.a, n))
  }

  function xt(t, n) {
    return null == n ? It(Pn(t.a, null)) : t.c.db(n)
  }

  function Jt(t, n) {
    return null == n ? !!Pn(t.a, null) : void 0 !== t.c.db(n)
  }

  function Dt(t, n, e) {
    return c(n) ? kt(t, n, e) : Bn(t.a, n, e)
  }

  function kt(t, n, e) {
    return null == n ? Bn(t.a, null, e) : t.c.gb(n, e)
  }

  function Mt(t) {
    Un(), t.a = Ga.ab(), t.a.b = t, t.c = Ga.bb(), t.c.b = t, t.b = 0, gn(t)
  }

  function Pt(t) {
    this.a = t
  }

  function Bt(t) {
    return !!t.a.Q() || t.a == t.b && (t.a = t.c.a.$(), t.a.Q())
  }

  function Ht(t) {
    if (t._gwt_modCount != t.c._gwt_modCount) throw new wn;
    return B(Bt(t)), t.a.R()
  }

  function Ft(t) {
    this.c = t, this.a = this.b = this.c.c.$(), this._gwt_modCount = t._gwt_modCount
  }

  function jt(t) {
    if (-1 == t.c) throw new at;
    t.d.U(t.c), t.b = t.c, t.c = -1
  }

  function $t(t) {
    this.d = t
  }

  function Qt(t, n) {
    this.d = this.a = t, j(n, t.b.length), this.b = n
  }

  function Gt(t, n) {
    return H(n, t.b), un(t.c, t.a + n)
  }

  function Ut(t, n, e) {
    var i = t.b.length;
    if (0 > n) throw new tt("fromIndex: " + n + " < 0");
    if (e > i) throw new tt("toIndex: " + e + " > size " + i);
    if (n > e) throw new rt("fromIndex: " + n + " > toIndex: " + e);
    this.c = t, this.a = n, this.b = e - n
  }

  function Yt(t) {
    return t = new Ft(new Pt(t.a)
      .a), new qt(t)
  }

  function Wt(t) {
    this.a = t
  }

  function qt(t) {
    this.a = t
  }

  function Kt(t, n) {
    var e;
    return e = t.d, t.d = n, e
  }

  function Vt(t, n) {
    this.c = t, this.d = n
  }

  function zt(t, n) {
    var e;
    return e = de(t, n.W()), !!e && le(e.d, n.X())
  }

  function Xt(t) {
    this.a = t
  }

  function Zt(t) {
    return t = new Te(new Ee(t.a)
      .a), new nn(t)
  }

  function tn(t) {
    this.a = t
  }

  function nn(t) {
    this.a = t
  }

  function en(t, n) {
    var e;
    e = re(t, n);
    try {
      return B(e.b != e.d.c), e.c = e.b, e.b = e.b.a, ++e.a, e.c.c
    } catch (i) {
      if (i = z(i), s(i, 38)) throw new tt("Can't get element " + n);
      throw V(i)
    }
  }

  function rn(t, n, e) {
    j(n, t.b.length), t.b.splice(n, 0, e)
  }

  function an(t, n) {
    return t.b[t.b.length] = n, !0
  }

  function on(t, n) {
    var e;
    if (e = n.K(), 0 == e.length) return !1;
    var i = e
      , r = t.b
      , a = t.b.length;
    e = e.length;
    var o = 0;
    i === r && (i = i.slice(o, o + e), o = 0);
    for (var u = o, o = o + e; u < o;) {
      var h = Math.min(u + 1e4, o);
      e = h - u, Array.prototype.splice.apply(r, [a, 0].concat(i.slice(u, h))), u = h, a += e
    }
    return !0
  }

  function un(t, n) {
    return H(n, t.b.length), t.b[n]
  }

  function hn(t, n) {
    for (var e = 0; e < t.b.length; ++e)
      if (le(n, t.b[e])) return e;
    return -1
  }

  function sn(t, n) {
    var e;
    return H(n, t.b.length), e = t.b[n], t.b.splice(n, 1), e
  }

  function ln(t, n) {
    var e, i;
    for (i = t.b.length, n.length < i && (n = Y(n, i)), e = 0; e < i; ++e) n[e] = t.b[e];
    return n.length > i && (n[i] = null), n
  }

  function cn() {
    this.b = W(Aa, 1, 0, 3)
  }

  function fn(t) {
    var n, e;
    for (e = 0, n = t.D(); n.Q();) t = n.R(), e += null != t ? u(t) : 0, e = ~~e;
    return e
  }

  function bn() {
    bn = e
  }

  function dn(t, n) {
    return F(t), F(n), c(t) ? t == n ? 0 : t < n ? -1 : 1 : t.t(n)
  }

  function gn(t) {
    t._gwt_modCount = (0 | t._gwt_modCount) + 1
  }

  function wn() {
    D(this, this.e)
  }

  function vn() {
    D(this, this.e)
  }

  function pn(t, n) {
    return On(t.a, n) ? t.b[n.b] : null
  }

  function mn(t, n, e) {
    _n(t.a, n), Tn(t, n.b, e)
  }

  function Tn(t, n, e) {
    var i;
    return i = t.b[n], t.b[n] = e, i
  }

  function En(t) {
    var n;
    this.a = (n = t.e && t.e(), new An(n, Y(n, n.length))), this.b = W(Aa, 1, this.a.a.length, 3)
  }

  function yn(t) {
    this.a = t
  }

  function Nn(t) {
    this.c = t, this.a = new Ln(this.c.a)
  }

  function Cn(t, n) {
    this.b = t, this.a = n
  }

  function _n(t, n) {
    var e;
    return F(n), e = n.b, !t.b[e] && (t.b[e] = n, ++t.c, !0)
  }

  function On(t, n) {
    return s(n, 11) && !!n && t.b[n.b] == n
  }

  function An(t, n) {
    this.a = t, this.b = n, this.c = 0
  }

  function Rn(t) {
    var n;
    for (++t.a, n = t.c.a.length; t.a < n && !t.c.b[t.a]; ++t.a);
  }

  function In(t) {
    return t.a < t.c.a.length
  }

  function Sn(t) {
    return B(t.a < t.c.a.length), t.b = t.a, Rn(t), t.c.b[t.b]
  }

  function Ln(t) {
    this.c = t, Rn(this)
  }

  function xn(t, n) {
    return f(t) === f(n) || null != t && a(t, n)
  }

  function Jn() {
    Mt(this)
  }

  function Dn(t, n) {
    return null == Dt(t.a, n, t)
  }

  function kn(t, n) {
    return St(t.a, n)
  }

  function Mn() {
    this.a = new Jn
  }

  function Pn(t, n) {
    var e, i, r, a;
    for (e = null == n ? "0" : "" + ~~u(n), i = t.a[e] || [], r = 0, a = i.length; r < a; ++r)
      if (e = i[r], xn(n, e.W())) return e;
    return null
  }

  function Bn(t, n, e) {
    var i, r, a, o;
    for (i = null == n ? "0" : "" + ~~u(n), r = t.a, i = r[i] || (r[i] = []), a = 0, o = i.length; a < o; ++a)
      if (r = i[a], xn(n, r.W())) return r.Y(e);
    return i[i.length] = new Vt(n, e), t = t.b, ++t.b, gn(t), null
  }

  function Hn() {
    this.a = this.Z()
  }

  function Fn(t) {
    if (t.c < t.a.length) return !0;
    if (t.b < t.d.length - 1) {
      var n = t.d[++t.b];
      return t.a = t.f.a[n], t.c = 0, !0
    }
    return !1
  }

  function jn(t) {
    this.f = t, this.d = Object.getOwnPropertyNames(this.f.a), this.a = W(Ua, 16, 0, 0)
  }

  function $n() {
    Hn.call(this)
  }

  function Qn(t) {
    this.a = t, cn.call(this)
  }

  function Gn() {}

  function Un() {
    Un = e;
    var t, n;
    (n = Object.create && Object.getOwnPropertyNames) && (n = Object.create(null), void 0 !== n.__proto__ || 0 != Object.getOwnPropertyNames(n)
      .length ? n = !1 : (n.__proto__ = 42, n = 42 === n.__proto__)), Ga = n ? (t = Object.create(null), t.__proto__ = 42, 0 == Object.getOwnPropertyNames(t)
      .length ? new Yn : new Gn) : new Wn
  }

  function Yn() {}

  function Wn() {}

  function qn(t, n, e) {
    var i;
    if (i = t.a[n], void 0 === i) {
      var r = t.b;
      ++r.b, gn(r)
    }
    return t.a[n] = void 0 === e ? null : e, i
  }

  function Kn(t, n) {
    var e;
    if (e = t.a[n], void 0 !== e) {
      delete t.a[n];
      var i = t.b;
      --i.b, gn(i)
    }
    return e
  }

  function Vn() {
    this.a = this.cb()
  }

  function zn(t, n) {
    this.b = t, this.c = n
  }

  function Xn(t, n) {
    this.a = t, this.b = n
  }

  function Zn() {
    Vn.call(this)
  }

  function te(t) {
    this.a = t, cn.call(this)
  }

  function ne() {
    Vn.call(this)
  }

  function ee(t, n) {
    return ie(t, n, t.c.b, t.c), !0
  }

  function ie(t, n, e, i) {
    var r;
    r = new he, r.c = n, r.b = e, r.a = i, i.b = e.a = r, ++t.b
  }

  function re(t, n) {
    var e, i;
    if (j(n, t.b), n >= t.b >> 1)
      for (i = t.c, e = t.b; e > n; --e) i = i.b;
    else
      for (i = t.a.a, e = 0; e < n; ++e) i = i.a;
    return new ue(t, n, i)
  }

  function ae() {
    this.a = new he, this.c = new he, this.a.a = this.c, this.c.b = this.a, this.a.b = this.c.a = null, this.b = 0
  }

  function oe(t) {
    var n;
    if (!t.c) throw new at;
    n = t.c.a;
    var e = t.d
      , i = t.c;
    i.a.b = i.b, i.b.a = i.a, i.a = i.b = null, i.c = null, --e.b, t.b == t.c ? t.b = n : --t.a, t.c = null
  }

  function ue(t, n, e) {
    this.d = t, this.b = e, this.a = n
  }

  function he() {}

  function se() {
    D(this, this.e)
  }

  function le(t, n) {
    return f(t) === f(n) || null != t && a(t, n)
  }

  function ce(t) {
    return null != t ? u(t) : 0
  }

  function fe(t, n) {
    if (0 > t || t >= n) throw new nt
  }

  function be() {
    this.a = new cn
  }

  function de(t, n) {
    var e, i;
    for (i = t.a; i;) {
      if (e = dn(n, i.c), 0 == e) return i;
      e = 0 > e ? 0 : 1, i = i.a[e]
    }
    return null
  }

  function ge(t, n, e, i, r, a, o, u) {
    var h;
    if (i) {
      (h = i.a[0]) && ge(t, n, e, h, r, a, o, u), h = i.c;
      var s, l;
      e.jb() && (s = dn(h, r), 0 > s || !a && 0 == s) || e.kb() && (l = dn(h, o), 0 < l || !u && 0 == l) || n.F(i), (i = i.a[1]) && ge(t, n, e, i, r, a, o, u)
    }
  }

  function we(t, n, e, i) {
    var r, a;
    return n ? (r = dn(e.c, n.c), 0 == r ? (i.d = Kt(n, e.d), i.b = !0, n) : (r = 0 > r ? 0 : 1, n.a[r] = we(t, n.a[r], e, i), ve(n.a[r]) && (ve(n.a[1 - r]) ? (n.b = !0, n.a[0].b = !1, n.a[1].b = !1) : ve(n.a[r].a[r]) ? n = pe(n, 1 - r) : ve(n.a[r].a[1 - r]) && (a = 1 - (1 - r), n.a[a] = pe(n.a[a], a), n = pe(n, 1 - r))), n)) : e
  }

  function ve(t) {
    return !!t && t.b
  }

  function pe(t, n) {
    var e, i;
    return e = 1 - n, i = t.a[e], t.a[e] = i.a[n], i.a[n] = t, t.b = !0, i.b = !1, i
  }

  function me() {
    this.a = null, bn()
  }

  function Te(t) {
    var n, e = (Ce(), Wa);
    n = new cn, ge(t, n, e, t.a, null, !1, null, !1), this.a = new Qt(n, 0)
  }

  function Ee(t) {
    this.a = t
  }

  function ye(t, n) {
    Vt.call(this, t, n), this.a = W(Ya, 41, 2, 0), this.b = !0
  }

  function Ne() {}

  function Ce() {
    Ce = e, Wa = new _e("All", 0), qa = new Oe, Ka = new Ae, Va = new Re
  }

  function _e(t, n) {
    this.a = t, this.b = n
  }

  function Oe() {
    this.a = "Head", this.b = 1
  }

  function Ae() {
    this.a = "Range", this.b = 2
  }

  function Re() {
    this.a = "Tail", this.b = 3
  }

  function Ie(t) {
    this.a = new me, Ct(this, t)
  }

  function Se(t) {
    var n;
    if (!(0 < t.a.b)) {
      n = Xe(t.f), !n.length || ee(t.a, n), n = t.a;
      var e, i, r = ga.title
        , a = ga.documentElement;
      if (e = i = "", $a == $a ? i = e = r : a && (r = a.getElementsByTagName("TITLE"), 0 < r.length && (i = e = r[0].textContent)), "" == i) e = "";
      else {
        if (Bi(), / [\|\-] /i.test(i)) i = e.replace(RegExp("(.*)[\\|\\-] .*", "gi"), "$1"), 3 > So.yb(i) && (i = e.replace(RegExp("[^\\|\\-]*[\\|\\-](.*)", "gi"), "$1"));
        else if (-1 != i.indexOf(": ")) i = e.replace(RegExp(".*:(.*)", "gi"), "$1"), 3 > So.yb(i) && (i = e.replace(RegExp("[^:]*[:](.*)", "gi"), "$1"));
        else if (a && (150 < i.length || 15 > i.length)) {
          for (i = a.getElementsByTagName("H1"), a = "", r = 0; r < i.length && !a.length; r++) a = i[r].innerText;
          i = a, !i.length && (i = e)
        }
        i = ji(i), 4 >= So.yb(i) && (i = e), e = i
      }
      ee(n, e), $a == $a && ee(t.a, ga.title)
    }
  }

  function Le(t) {
    var n, e;
    if (this.b = t, this.a = new ae, this.e = (n = {}, n[6] = [], n), this.d = e = {}, this.c = new cn, n = Me(), this.f = new Ze(t, this.e), t = Me() - n, void 0 == t) throw new TypeError;
    this.e[1] = t, this.g = ""
  }

  function xe() {}

  function Je(t) {
    var n, e, i, r, a, o, u, h, l, c, f, b, d, g, w, v, p;
    u = Me();
    var m, T, E = ga.documentElement.textContent;
    Bi(), m = RegExp("[\\u3040-\\uA4CF]", "g"), T = RegExp("[\\uAC00-\\uD7AF]", "g"), So = m.test(E) ? new Qi : T.test(E) ? new Gi : new $i, f = {}, f[10] = [], a = f, e = new Le(ga.documentElement);
    var y = (Se(e), en(e.a, 0));
    if (void 0 == y) throw new TypeError;
    a[1] = y;
    var N;
    if (void 0 != t[2]) {
      if (void 0 === t[2]) throw new TypeError;
      N = t[2]
    } else N = 0;
    Xa = N, ze("DomDistiller debug level: " + Xa), n = b = {};
    var C;
    if (C = void 0 != t[1]) {
      if (void 0 === t[1]) throw new TypeError;
      C = t[1]
    }
    var _, O, A, R, I, S, L, x, J, D, k, M = C;
    I = Me(), x = new xe, J = new Kr, D = new Gr(J);
    var P, F, j = e.b;
    if (F = j.getElementsByTagName("ARTICLE"), 1 == F.length) P = F[0];
    else {
      F = j.querySelectorAll('[itemscope][itemtype*="Article"],[itemscope][itemtype*="Post"]');
      var $;
      if (0 < F.length) {
        var U, Y, W = F;
        if (0 == W.length) $ = null;
        else {
          for (Y = W[0], U = 1; U < W.length; U++) Y = De(Y, W[U]);
          $ = Y
        }
      } else $ = null;
      P = $
    }
    k = P, !k && (k = e.b), Ue(new Ye(D), k), x.a = (qr(J, J.d), J.b), Se(e), _ = x;
    var q = Me() - I;
    if (void 0 == q) throw new TypeError;
    e.e[2] = q, I = Me();
    var K, V, z, X, Z, tt, nt = _.a;
    tt = new cn;
    t: {
      var et;
      for (et = 0; et < nt.a.b.length; et++)
        if (s(un(nt.a, et), 24)) {
          X = et;
          break t
        }
      X = nt.a.b.length
    }
    if (X != nt.a.b.length) {
      for (Z = z = un(nt.a, X)
        .d, V = new hr(nt.a, X), ++X; X < nt.a.b.length; X++) s(un(nt.a, X), 24) && (z = un(nt.a, X)
        .d, z == Z ? ar(V, new hr(nt.a, X)) : (tt.b[tt.b.length] = V, Z = z, V = new hr(nt.a, X)));
      tt.b[tt.b.length] = V
    }
    K = new sr(tt);
    var it, rt = e.a;
    yr(K, !0, "Start");
    var at, ot, ht = (Nr(), K);
    for (ot = new $t(ht.a); ot.b < ot.d.J();) {
      B(ot.b < ot.d.J()), at = ot.d.T(ot.c = ot.b++);
      var lt, ct = at
        , gt = void 0;
      14 < ct.d ? lt = !1 : (gt = ji(ct.g), lt = 8 <= gt.length ? cu.test(gt) : 1 == ct.c && "Comment" === gt), lt && Dn(at.b, "STRICTLY_NOT_CONTENT")
    }
    var mt, Tt, yt, Nt = new Sr(rt);
    if (Nt.a)
      for (Tt = new $t(K.a); Tt.b < Tt.d.J();) B(Tt.b < Tt.d.J()), mt = Tt.d.T(Tt.c = Tt.b++), yt = mt.g, yt = bt(yt), yt = dt(yt), yt = pt(yt)
        .toLowerCase(), kn(Nt.a, yt) && Dn(mt.b, "de.l3s.boilerpipe/TITLE"), yt = pt(yt.replace(gu, "")), kn(Nt.a, yt) && Dn(mt.b, "de.l3s.boilerpipe/TITLE");
    var Ct, _t, Ot, At, Rt, It, St;
    if (It = K.a, 0 == It.b.length) it = !1;
    else {
      for (_t = !1, Ot = 0; Ot < It.b.length; Ot++) Rt = 0 == Ot ? null : (H(Ot - 1, It.b.length), It.b[Ot - 1]), H(Ot, It.b.length), Ct = It.b[Ot], At = Ot + 1 == It.b.length ? null : (H(Ot + 1, It.b.length), It.b[Ot + 1]), St = .333333 >= Ct.c && (!Rt || .555556 >= Rt.c ? !(16 >= Ct.d) || (!(!At || 15 >= At.d) || !(!Rt || 4 >= Rt.d)) : !(40 >= Ct.d) || !(!At || 17 >= At.d)), _t |= or(Ct, St);
      it = _t
    }
    yr(K, it, "Classification Complete");
    var xt, Jt, Dt, kt, Pt, Ft, Gt, qt = (jr(), pu);
    xt = !1, Gt = new $t(K.a);
    t: for (; Gt.b < Gt.d.J();)
      if (B(Gt.b < Gt.d.J()), Ft = Gt.d.T(Gt.c = Gt.b++), Ft.a)
        for (Dt = qt.a, kt = 0, Pt = Dt.length; kt < Pt; ++kt)
          if (Jt = Dt[kt], kn(Ft.b, Jt)) {
            or(Ft, !1), xt = !0;
            continue t
          }
    it = xt, yr(K, it, "Ignore Strictly Not Content blocks");
    var Kt = Mr();
    Kt.e = .5, Kt.d = 10, it = Dr(Pr(Kt), K), yr(K, it, "SimilarSiblingContentExpansion: Cross headings");
    var Vt = Mr();
    Vt.c = !0, Vt.e = 0, Vt.d = 10, it = Dr(Pr(Vt), K), yr(K, it, "SimilarSiblingContentExpansion: Mixed tags");
    var zt, Xt, Zt, tn, nn, rn;
    if (rn = K.a, 2 > rn.b.length) it = !1;
    else {
      for (zt = !1, tn = new Qt(rn, 0), Xt = tn.R(); tn.Q();)
        if (nn = Xt, Xt = tn.R(), kn(nn.b, "de.l3s.boilerpipe/HEADING") && !(kn(nn.b, "STRICTLY_NOT_CONTENT") || kn(Xt.b, "STRICTLY_NOT_CONTENT") || kn(nn.b, "de.l3s.boilerpipe/TITLE") || kn(Xt.b, "de.l3s.boilerpipe/TITLE")))
          if (Xt.a) {
            zt = !0, Zt = nn.a, ar(nn, Xt), Xt = nn, tn.V();
            var on = nn;
            kn(on.b, "de.l3s.boilerpipe/HEADING") && on.b.a.c.hb("de.l3s.boilerpipe/HEADING"), Zt || Dn(nn.b, "BOILERPLATE_HEADING_FUSED")
          } else nn.a && (zt = !0, or(nn, !1));
      it = zt
    }
    yr(K, it, "HeadingFusion"), it = _r((Cr(), bu), K), yr(K, it, "BlockProximityFusion: Distance 1");
    var hn, sn, ln, fn, bn = (Hr(), vu);
    for (fn = K.a, hn = !1, sn = new $t(fn); sn.b < sn.d.J();) B(sn.b < sn.d.J()), ln = sn.d.T(sn.c = sn.b++), ln.a || null != bn.a && kn(ln.b, "de.l3s.boilerpipe/TITLE") || (jt(sn), hn = !0);
    it = hn, yr(K, it, "BlockFilter"), it = _r(fu, K), yr(K, it, "BlockProximityFusion: Same level content-only");
    var dn, gn, wn, vn, pn, mn, Tn, En, yn, Nn = (Lr(), wu);
    if (yn = K.a, 2 > yn.b.length) it = !1;
    else {
      for (vn = -1, gn = null, dn = 0, wn = -1, En = new $t(yn); En.b < En.d.J();) B(En.b < En.d.J()), mn = En.d.T(En.c = En.b++), mn.a && (pn = mn.d, pn > vn && (gn = mn, vn = pn, wn = dn)), ++dn;
      for (Tn = new $t(yn); Tn.b < Tn.d.J();) B(Tn.b < Tn.d.J()), mn = Tn.d.T(Tn.c = Tn.b++), mn == gn ? (or(mn, !0), Dn(mn.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT")) : (or(mn, !1), Dn(mn.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT"));
      if (Nn.a && -1 != wn) {
        var Cn, _n, On, An, Rn = wn;
        for (An = G(ta(un(gn.j, un(gn.i, gn.i.b.length - 1)
            .a))), On = new Qt(yn, Rn + 1); On.Q();) Cn = On.R(), _n = G(Zr(un(Cn.j, un(Cn.i, 0)
          .a))), G(An) == G(_n) && (or(Cn, !0), Dn(Cn.b, "SIBLING_OF_MAIN_CONTENT"), An = G(ta(un(Cn.j, un(Cn.i, Cn.i.b.length - 1)
          .a))));
        var In, Sn, Ln, xn, Jn = wn;
        for (Ln = G(Zr(un(gn.j, un(gn.i, 0)
            .a))), xn = new Qt(yn, Jn); 0 < xn.b;) B(0 < xn.b), In = un(xn.a, xn.c = --xn.b), Sn = G(ta(un(In.j, un(In.i, In.i.b.length - 1)
          .a))), G(Ln) == G(Sn) && (or(In, !0), Dn(In.b, "SIBLING_OF_MAIN_CONTENT"), Ln = G(Zr(un(In.j, un(In.i, 0)
          .a))))
      }
      it = !0
    }
    yr(K, it, "Keep Largest Block");
    var Pn, Bn, Hn, Fn, jn, $n, Qn;
    for (Hn = 0, Bn = Qn = -1, $n = new $t(K.a); $n.b < $n.d.J();) B($n.b < $n.d.J()), Fn = $n.d.T($n.c = $n.b++), -1 == Bn && kn(Fn.b, "de.l3s.boilerpipe/TITLE") && (Qn = Hn, Bn = -1), -1 == Bn && Fn.a && (Bn = Hn), ++Hn;
    if (Bn <= Qn || -1 == Qn) it = !1;
    else {
      for (Pn = !1, jn = new $t(new Ut(K.a, Qn, Bn)); jn.b < jn.d.J();) B(jn.b < jn.d.J()), Fn = jn.d.T(jn.c = jn.b++), kn(Fn.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") && (Pn |= or(Fn, !0));
      it = Pn
    }
    yr(K, it, "Expand Title to Content");
    var Gn, Un, Yn, Wn, qn;
    for (Gn = !1, Un = -1, qn = new $t(K.a); qn.b < qn.d.J();)
      if (B(qn.b < qn.d.J()), Yn = qn.d.T(qn.c = qn.b++), Yn.a && kn(Yn.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT")) {
        Un = Yn.f;
        break
      }
    if (-1 == Un) it = !1;
    else {
      for (Wn = new $t(K.a); Wn.b < Wn.d.J();) B(Wn.b < Wn.d.J()), Yn = Wn.d.T(Wn.c = Wn.b++), !Yn.a && 100 <= Yn.d && Yn.f == Un && (or(Yn, !0), Gn = !0);
      it = Gn
    }
    yr(K, it, "Largest Block Same Tag Level -> Content");
    var Kn, Vn, zn, Xn;
    for (Kn = !1, Vn = wa, Xn = new $t(K.a); Xn.b < Xn.d.J();) B(Xn.b < Xn.d.J()), zn = Xn.d.T(Xn.c = Xn.b++), zn.a && kn(zn.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT") ? Vn = zn.f : zn.f > Vn && kn(zn.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") && kn(zn.b, "de.l3s.boilerpipe/LI") && 0 == zn.c ? (or(zn, !0), Kn = !0) : Vn = wa;
    it = Kn, yr(K, it, "List at end filter");
    var Zn, te, ne, ee, ie = e.d;
    for (te = 0, ee = new $t(K.a); ee.b < ee.d.J();) B(ee.b < ee.d.J()), ne = ee.d.T(ee.c = ee.b++), ne.a && (te += ne.d);
    if (Zn = te, void 0 == Zn) throw new TypeError;
    ie[1] = Zn;
    var re, ae;
    for (ae = new $t(K.a); ae.b < ae.d.J();) {
      var oe = (B(ae.b < ae.d.J()), re = ae.d.T(ae.c = ae.b++))
        , ue = void 0
        , he = void 0
        , se = void 0;
      if (oe.a)
        for (he = new $t(oe.i); he.b < he.d.J();) B(he.b < he.d.J()), ue = he.d.T(he.c = he.b++), se = un(oe.j, ue.a), se.p = !0, kn(oe.b, "de.l3s.boilerpipe/TITLE") && Dn(se.e, "de.l3s.boilerpipe/TITLE")
    }
    var le, ce, fe;
    for (fe = !1, ce = new $t(_.a.a); ce.b < ce.d.J();) B(ce.b < ce.d.J()), le = ce.d.T(ce.c = ce.b++), le.p ? fe = !0 : s(le, 24) ? fe = !1 : fe && (le.p = !0);
    var be, de, ge, we, ve = _.a;
    for (be = new cn, we = null, ge = new $t(ve.a); ge.b < ge.d.J();)
      if (B(ge.b < ge.d.J()), de = ge.d.T(ge.c = ge.b++), s(de, 36)) {
        if (de.p) break;
        an(be, de)
      } else !we && s(de, 24) && de.p && (we = de);
    var pe, me, Te, Ee, ye, Ne, Ce, _e;
    if (0 != be.b.length) {
      for (Te = null, we && (Te = un(we.a, we.c)), _e = new cn, an(_e, new aa), an(_e, new oa), an(_e, new ua(Te)), an(_e, new ha), ye = _e, pe = null, me = 0, Ce = new $t(be); Ce.b < Ce.d.J();) {
        B(Ce.b < Ce.d.J()), Ne = Ce.d.T(Ce.c = Ce.b++);
        var Oe = void 0
          , Ae = void 0
          , Re = void 0
          , Ie = void 0;
        if (Ne) {
          for (Ie = 0, Oe = Ne.a, Re = new $t(ye); Re.b < Re.d.J();) B(Re.b < Re.d.J()), Ae = Re.d.T(Re.c = Re.b++), Ie += Ae.Db(Oe);
          2 > Xa || ze(Oe ? "FINAL SCORE: " + Ie + " : " + Q(Oe, "src") : "Null image attempting to be scored!"), Ee = Ie
        } else Ee = 0;
        26 <= Ee && (!pe || me < Ee) && (pe = Ne, me = Ee)
      }
      pe && (pe.p = !0)
    }
    var Je, ke, Pe, He = _.a;
    for (Pe = new cn, ke = new $t(He.a); ke.b < ke.d.J();) B(ke.b < ke.d.J()), Je = ke.d.T(ke.c = ke.b++), s(Je, 36) && Je.p && an(Pe, Je);
    for (L = new $t(Pe); L.b < L.d.J();) B(L.b < L.d.J()), S = L.d.T(L.c = L.b++), an(e.c, S.b);
    var Fe = Me() - I;
    if (void 0 == Fe) throw new TypeError;
    e.e[3] = Fe, I = Me();
    var je, $e, Qe;
    for (Qe = new Et, $e = new $t(_.a.a); $e.b < $e.d.J();)
      if (B($e.b < $e.d.J()), je = $e.d.T($e.c = $e.b++), je.p) {
        var Ge = je.Bb(M);
        Qe.a += Ge, M && (Qe.a += "\n")
      }
    A = Qe.a;
    var We = Me() - I;
    if (void 0 == We) throw new TypeError;
    if (e.e[4] = We, 4 <= Xa) {
      for (R = 0; R < e.e[6].length; R++) {
        var qe = e.e;
        if (R >= qe[6].length) throw new RangeError;
        if (O = qe[6][R], void 0 === O[1]) throw new TypeError;
        var Ze = "Timing: " + O[1] + " = ";
        if (void 0 === O[2]) throw new TypeError;
        ze(Ze + O[2])
      }
      var ti = e.e;
      if (void 0 === ti[1]) throw new TypeError;
      var ni = "Timing: MarkupParsingTime = " + ti[1] + "\nTiming: DocumentConstructionTime = "
        , ei = e.e;
      if (void 0 === ei[2]) throw new TypeError;
      var ii = ni + ei[2] + "\nTiming: ArticleProcessingTime = "
        , ri = e.e;
      if (void 0 === ri[3]) throw new TypeError;
      var ai = ii + ri[3] + "\nTiming: FormattingTime = "
        , oi = e.e;
      if (void 0 === oi[4]) throw new TypeError;
      ze(ai + oi[4])
    }
    if (void 0 == A) throw new TypeError;
    if (n[1] = A, void 0 == n) throw new TypeError;
    a[2] = n;
    var ui = ((null == e.g || !e.g.length) && (e.g = "auto"), e.g);
    if (void 0 == ui) throw new TypeError;
    for (a[9] = ui, c = new $t(e.c); c.b < c.d.J();) {
      B(c.b < c.d.J()), l = c.d.T(c.c = c.b++);
      var hi = (d = {}, a[10].push(d), d);
      if (void 0 == l) throw new TypeError;
      hi[1] = l
    }
    var si;
    if (void 0 != t[3]) {
      if (void 0 === t[3]) throw new TypeError;
      si = t[3]
    } else si = da.location.href;
    r = si, h = e.e, o = Me(), pi(), g = {};
    var li, ci, fi, bi, di, gi, wi, vi, yi, Ni, Ci, _i, Oi, Ai, Ri, Ii, Si, Li, xi, Ji, Di, ki, Mi, Pi, Hi, Fi, Ui, Yi, Wi = ga.documentElement;
    3 <= Xa && Mt(Eo), Bi(), gi = r.replace(RegExp("\\/[^/]*$", "gi"), ""), Ui = r.replace(RegExp("\\/$", "gi"), ""), li = Wi.getElementsByTagName("A"), Mi = new Mn, fi = new Mn;
    var qi, Ki, Vi;
    if (Vi = Wi.getElementsByTagName("BASE"), 0 == Vi.length) qi = r;
    else {
      Ki = Ti(r);
      var zi = Q(Vi[0], "href");
      Ki.setAttribute("href", zi), qi = Ki.href
    }
    bi = Ti(qi);
    var Xi, Zi = wt(r, ":\\/\\/")[0] + "://"
      , tr = r
      , tr = (Bi(), wt(tr, ":\\/\\/"))[1];
    Xi = -1 == tr.indexOf("/") ? tr : wt(tr, "\\/")[0], ci = Zi + Xi + "/";
    var nr = "^" + ci.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") + ".*\\d";
    for (Pi = RegExp(nr, "i"), vi = 0; vi < li.length; vi++)
      if (yi = li[vi], Yi = Q(yi, "href"), bi.setAttribute("href", Yi), Ci = bi.href, Pi.test(Ci))
        if (Fi = 0 | (yi.offsetWidth || 0), wi = 0 | (yi.offsetHeight || 0), 0 == Fi || 0 == wi) mi(yi, "ignored: sz=" + Fi + "x" + wi);
        else if (Be(yi))
      if (Ci = Ci.replace(fo, ""), mi(yi, "-> " + Ci), ft(Ci, Ui) || ft(Ci, gi)) mi(yi, "ignored: same as current or folder url " + gi);
      else if (Ai = yi.innerText, 25 < Ai.length) mi(yi, "ignored: link text too long");
    else if (lo.test(Ai)) mi(yi, "ignored: one of extra"), Dn(fi, Ci);
    else if (_i = Ci, Ci.substr(0, gi.length) === gi && (_i = vt(Ci, gi.length)), vo.test(_i)) {
      for (Oi = new Ei(vi, Ai, Ci), Dn(Mi, Oi), 0 != Ci.indexOf(gi) && (Oi.d -= 25, mi(yi, "score=" + Oi.d + ": not part of folder url " + gi)), Ni = Ai + " " + (yi.className || "") + " " + yi.id, mi(yi, "txt+class+id=" + Ni), wo.test(Ni) && (Oi.d += 50, mi(yi, "score=" + Oi.d + ": has next")), po.test(Ni) && (Oi.d += 25, mi(yi, "score=" + Oi.d + ": has pag* word")), co.test(Ni) && !wo.test(Oi.c) && (Oi.d -= 65, mi(yi, "score=" + Oi.d + ": has first|last but no next regex")), (go.test(Ni) || lo.test(Ni)) && (Oi.d -= 50, mi(yi, "score=" + Oi.d + ": has neg or extra regex")), To.test(Ni) && (Oi.d -= 200, mi(yi, "score=" + Oi.d + ": has opp of next regex")), Ii = ki = !1, Ji = G(yi); Ji && (!ki || !Ii);) Di = (Ji.className || "") + " " + Ji.id, !ki && po.test(Di) && (Oi.d += 25, ki = !0, mi(yi, "score=" + Oi.d + ": posParent - " + Di)), Ii || !go.test(Di) || mo.test(Di) || (Oi.d -= 25, Ii = !0, mi(yi, "score=" + Oi.d + ": negParent - " + Di)), Ji = G(Ji);
      (bo.test(Ci) || po.test(Ci)) && (Oi.d += 25, mi(yi, "score=" + Oi.d + ": has paging info")), lo.test(Ci) && (Oi.d -= 15, mi(yi, "score=" + Oi.d + ": has extra regex")), 10 < Ai.length && (Oi.d -= Ai.length, mi(yi, "score=" + Oi.d + ": text too long")), Ri = Ke(Ai), 0 < Ri && (1 == Ri ? Oi.d -= 10 : Oi.d += 0 > 10 - Ri ? 0 : 10 - Ri, mi(yi, "score=" + Oi.d + ": linktxt is a num (" + Ri + ")"));
      for (var er = r, ir = Ci, rr = yi, ur = void 0, lr = void 0, cr = void 0, ur = ci.length; ur < st(er.length, ir.length) && er.charCodeAt(ur) == ir.charCodeAt(ur); ur++);
      er = er.substr(ur, er.length - ur), ir = ir.substr(ur, ir.length - ur), mi(rr, "remains: " + er + ", " + ir), lr = Ke(ir), cr = Ke(er), mi(rr, "remains: " + cr + ", " + lr), (di = 0 < cr && 0 < lr ? ut(lr - cr) : null) && 1 == di.a && (Oi.d += 25, mi(yi, "score=" + Oi.d + ": diff = " + di))
    } else mi(yi, "ignored: no number beyond folder url " + gi);
    else mi(yi, "ignored: invisible");
    else mi(yi, "ignored: not prefix + num");
    if (Hi = null, 0 != Mi.a.b)
      for (Li = Yt(new Wt(Mi.a)); Bt(Li.a);) Si = Ht(Li.a)
        .W(), kn(fi, Si.a) || 50 <= Si.d && (!Hi || Hi.d < Si.d) && (Hi = Si);
    if (xi = null, Hi) {
      var fr = Hi.a;
      Bi(), xi = fr.replace(RegExp("\\/$", "gi"), ""), mi(li[Hi.b], "found: score=" + Hi.d + ", txt=[" + Hi.c + "], " + xi)
    }
    if (3 <= Xa) {
      var br, dr, gr, wr, vr;
      for (ze("numLinks=" + li.length + ", found next: " + (null != xi ? xi : "null")), br = 0; br < li.length; br++) {
        for (dr = li[br], gr = dr.innerText, Bi(), vr = wt(gr, "\\s+"), gr = "", wr = 0; wr < vr.length; wr++) gr += vr[wr], wr < vr.length - 1 && (gr += " ");
        ze(br + ")" + dr.href + ", txt=[" + gr + "], dbg=[" + Lt(Eo, dr) + "]")
      }
    }
    if (w = xi, null != w) {
      if (void 0 == w) throw new TypeError;
      g[1] = w
    }
    if (void 0 == g) throw new TypeError;
    a[3] = g, Ve(o, h, "Pagination");
    var pr, mr, Tr, Er, Or, Ar, Rr, Ir, xr, Jr, kr, Br = e.f;
    xr = {}, xr[9] = [], Ir = xr;
    var Fr, $r;
    for ($r = !1, Fr = 0; Fr < Br.a.b.length && !$r; Fr++) $r = un(Br.a, Fr)
      .wb();
    if (!$r) {
      var Qr = Xe(Br);
      if (void 0 == Qr) throw new TypeError;
      Ir[1] = Qr;
      var Ur, Yr, Wr;
      for (Wr = "", Yr = 0; Yr < Br.a.b.length && !Wr.length; Yr++) Wr = un(Br.a, Yr)
        .ub();
      if (Ur = Wr, void 0 == Ur) throw new TypeError;
      Ir[2] = Ur;
      var Vr, zr, Xr;
      for (Xr = "", zr = 0; zr < Br.a.b.length && !Xr.length; zr++) Xr = un(Br.a, zr)
        .vb();
      if (Vr = Xr, void 0 == Vr) throw new TypeError;
      Ir[3] = Vr;
      var na, ea, ia;
      for (ea = "", ia = 0; ia < Br.a.b.length && !ea.length; ia++) ea = un(Br.a, ia)
        .qb();
      if (na = ea, void 0 == na) throw new TypeError;
      Ir[4] = na;
      var ra, sa, la;
      for (la = "", sa = 0; sa < Br.a.b.length && !la.length; sa++) la = un(Br.a, sa)
        .sb();
      if (ra = la, void 0 == ra) throw new TypeError;
      Ir[5] = ra;
      var ca, fa, ba;
      for (fa = "", ba = 0; ba < Br.a.b.length && !fa.length; ba++) fa = un(Br.a, ba)
        .pb();
      if (ca = fa, void 0 == ca) throw new TypeError;
      Ir[6] = ca;
      var va, pa, ma;
      for (pa = "", ma = 0; ma < Br.a.b.length && !pa.length; ma++) pa = un(Br.a, ma)
        .ob();
      if (va = pa, void 0 == va) throw new TypeError;
      Ir[7] = va;
      var Ta, Ea;
      for (Ta = null, Ea = 0; Ea < Br.a.b.length && !Ta; Ea++) Ta = un(Br.a, Ea)
        .nb();
      if (pr = Ta) {
        Jr = {}, Jr[5] = [], mr = Jr;
        var ya = pr.d;
        if (void 0 == ya) throw new TypeError;
        mr[1] = ya;
        var Na = pr.c;
        if (void 0 == Na) throw new TypeError;
        mr[2] = Na;
        var Ca = pr.b;
        if (void 0 == Ca) throw new TypeError;
        mr[3] = Ca;
        var _a = pr.e;
        if (void 0 == _a) throw new TypeError;
        for (mr[4] = _a, Er = 0; Er < pr.a.length; Er++) mr[5].push(pr.a[Er]);
        if (void 0 == mr) throw new TypeError;
        Ir[8] = mr
      }
      var Oa, Aa;
      for (Aa = null, Oa = 0; Oa < Br.a.b.length && (Aa = un(Br.a, Oa)
          .rb(), !(0 < Aa.length)); Oa++);
      for (Rr = Aa, Tr = 0; Tr < Rr.length; Tr++) {
        Or = Rr[Tr], kr = {}, Ir[9].push(kr), Ar = kr;
        var Ra = Or.e;
        if (void 0 == Ra) throw new TypeError;
        Ar[1] = Ra;
        var Ia = Or.c;
        if (void 0 == Ia) throw new TypeError;
        Ar[2] = Ia;
        var Sa = Or.d;
        if (void 0 == Sa) throw new TypeError;
        Ar[3] = Sa;
        var La = Or.a;
        if (void 0 == La) throw new TypeError;
        Ar[4] = La;
        var xa = Or.f;
        if (void 0 == xa) throw new TypeError;
        Ar[5] = xa;
        var Ja = Or.b;
        if (void 0 == Ja) throw new TypeError;
        Ar[6] = Ja
      }
    }
    if (void 0 == Ir) throw new TypeError;
    a[5] = Ir;
    var Da = Me() - u;
    if (void 0 == Da) throw new TypeError;
    if (h[5] = Da, void 0 == h) throw new TypeError;
    a[6] = h;
    var ka = e.d;
    if (void 0 == ka) throw new TypeError;
    a[8] = ka, i = v = {};
    var Ma = (p = Za, Za = "", p);
    if (void 0 == Ma) throw new TypeError;
    if (i[1] = Ma, void 0 == i) throw new TypeError;
    return a[7] = i, a
  }

  function De(t, n) {
    var e;
    for (e = t; e && !e.contains(n);) e = e.parentNode;
    return e
  }

  function ke(t) {
    var n;
    for (n = new cn; t;) n.b[n.b.length] = t, t = t.parentNode;
    return n
  }

  function Me() {
    return window.performance ? window.performance.now() : Date.now()
  }

  function Pe(t, n) {
    var e, i;
    return null != t && (e = ga.createElement("a"), e.href = t, e = $(e, "host"), i = ("." + n)
      .length, ("." + e)
      .substr(("." + e)
        .length - i, i) === "." + n)
  }

  function Be(t) {
    var n;
    return n = getComputedStyle(t, null), t = parseFloat(n.opacity), !("none" === n.display || "hidden" === n.visibility || 0 == t)
  }

  function He(t) {
    var n, e, i;
    for (n = t.getElementsByTagName("A"), e = 0; e < n.length; e++) i = n[e], i.href.length && (i.href = i.href);
    for (i = t.getElementsByTagName("VIDEO"), n = 0; n < i.length; n++) e = i[n], e.poster.length && (e.poster = e.poster);
    for (Fe(t), n = t.querySelectorAll("IMG[SRCSET]"), t = 0; t < n.length; t++) je(n[t])
  }

  function Fe(t) {
    t = t.querySelectorAll("img,source,track,video");
    for (var n in t) t[n].src && (t[n].src = t[n].src)
  }

  function je(t) {
    var n, e, i, r;
    for (i = t.src, e = Q(t, "srcset"), Bi(), r = e.split(","), e = 0; e < r.length; e++) n = ji(r[e]), n.length && (n = wt(n, " "), t.src = n[0], n[0] = t.src, r[e] = Fi(n, " "));
    e = Fi(r, ", "), t.setAttribute("srcset", e), t.src = i
  }

  function $e(t) {
    var n, e, i, r;
    if (null == t || !t.length) return new Jn;
    for (r = new Jn, t = wt(t, "&"), e = 0; e < t.length; e++);
    for (e = 0, i = t.length; e < i; ++e)
      if (n = t[e], n = wt(n, "="), 1 < n.length) {
        var a = r
          , o = n[0];
        if (null == n[1]) throw new ct("encodedURL cannot be null");
        kt(a, o, decodeURI(n[1]))
      }
    return r
  }

  function Qe(t, n, e) {
    var i, r, a;
    for (r = 0, a = e.length; r < a; ++r) i = e[r], t.tagName !== i && "*" !== i || t.removeAttribute(n);
    for (i = 0, r = e.length; i < r; ++i);
    for (e = Fi(e, ", "), e = t.querySelectorAll(e), t = 0; t < e.length; t++) e[t].removeAttribute(n)
  }

  function Ge(t) {
    this.a = t
  }

  function Ue(t, n) {
    var e, i;
    if (t.a.mb(n)) {
      if (i = n.firstChild)
        for (; i != n;) {
          if (e = !1, t.a.mb(i)) {
            if (e = i.firstChild) {
              i = e;
              continue
            }
            e = !0
          }
          for (; i != n;) {
            if (e && t.a.lb(i), e = i.nextSibling) {
              i = e;
              break
            }
            i = i.parentNode, e = !0
          }
        }
      t.a.lb(n)
    }
  }

  function Ye(t) {
    this.a = t
  }

  function We(t) {
    var n;
    t.b = "", (n = t.j.querySelector(".byline-name")) && (t.b = n.textContent)
  }

  function qe(t) {
    this.j = t, this.a = t.getElementsByTagName("META")
  }

  function Ke(t) {
    return 0 | parseInt(t, 10)
  }

  function Ve(t, n, e) {
    var i;
    if (n) {
      if (i = {}, n[6].push(i), n = i, void 0 == e) throw new TypeError;
      if (n[1] = e, t = Me() - t, void 0 == t) throw new TypeError;
      n[2] = t
    }
  }

  function ze(t) {
    null == t && (t = ""), -1 == t.indexOf("[0;") && -1 == t.indexOf("[1;") || (t += "[0m"), to || null == da.console || "function" != typeof da.console.log && "object" != typeof da.console.log || da.console.log(t), Za += t + "\n"
  }

  function Xe(t) {
    var n, e;
    for (e = "", n = 0; n < t.a.b.length && !e.length; n++) e = un(t.a, n)
      .tb();
    return e
  }

  function Ze(t, n) {
    var e, i;
    this.b = n, this.a = new cn, i = Me();
    var r = this.b;
    oi();
    var a, o;
    try {
      o = Me(), a = new hi(t, r), Ve(o, r, "OpenGraphProtocolParser.parse"), e = a
    } catch (u) {
      if (u = z(u), !s(u, 7)) throw V(u);
      e = null
    }
    e && an(this.a, e), Ve(i, this.b, "OpenGraphProtocolParser"), i = Me(), an(this.a, new Pi(t, this.b)), Ve(i, this.b, "SchemaOrgParserAccessor"), i = Me(), an(this.a, new qe(t)), Ve(i, this.b, "IEReadingViewParser")
  }

  function ti() {}

  function ni() {}

  function ei(t) {
    this.b = new vi(t), this.a = new cn, this.d = new cn
  }

  function ii(t) {
    var n, e;
    for (e = t.b.cloneNode(!1), t = re(t.a, 0); t.b != t.d.c;) B(t.b != t.d.c), t.c = t.b, t.b = t.b.a, ++t.a, n = t.c.c, n = ii(n), e.appendChild(n);
    return e
  }

  function ri(t) {
    var n, e;
    for (e = t.b.cloneNode(!1), 1 == t.b.nodeType && (n = getComputedStyle(t.b, null)
        .direction, !n.length && (n = "auto"), e.setAttribute("dir", n)), t = re(t.a, 0); t.b != t.d.c;) B(t.b != t.d.c), t.c = t.b, t.b = t.b.a, ++t.a, n = t.c.c, n = ri(n), e.appendChild(n);
    return e
  }

  function ai(t) {
    this.b = t, this.a = new ae
  }

  function oi() {
    oi = e, ro = RegExp("((\\w+):\\s+(http:\\/\\/ogp.me\\/ns(\\/\\w+)*#))\\s*", "gi"), eo = /^xmlns:(\w+)/i, io = /^http:\/\/ogp.me\/ns(\/\w+)*#/i;
  }

  function ui(t, n, e) {
    null != e && e.length ? (e = e.substr(1, e.length - 1), "profile" === e ? mn(t.c, (fi(), uo), n) : "article" === e && mn(t.c, (fi(), ao), n)) : mn(t.c, (fi(), oo), n)
  }

  function hi(t, n) {
    var e, i;
    this.b = new ci, this.d = new di, this.a = new si, this.e = q(y(so, 1), ma, 9, 0, [new gi("title", (fi(), oo), null), new gi("type", oo, null), new gi("url", oo, null), new gi("description", oo, null), new gi("site_name", oo, null), new gi("image", oo, this.b), new gi("image:", oo, this.b), new gi("first_name", uo, this.d), new gi("last_name", uo, this.d), new gi("section", ao, this.a), new gi("published_time", ao, this.a), new gi("modified_time", ao, this.a), new gi("expiration_time", ao, this.a), new gi("author", ao, this.a)]), this.f = new Jn, this.c = new En(ho), this.g = n, i = Me();
    var r, a, o;
    if (e = "", ft("HTML", t.tagName) && (e = Q(t, "prefix")), e.length || (o = t.getElementsByTagName("HEAD"), 1 == o.length && (e = Q(o[0], "prefix"))), e.length)
      for (ro.lastIndex = 0; o = ro.exec(e), o;) ui(this, o[2], o[4]);
    else
      for (e = t.attributes, o = 0; o < e.length; o++) a = e[o], r = a.nodeName.toLowerCase(), (r = eo.exec(r)) && (a = a.nodeValue, (a = io.exec(a)) && ui(this, r[1], a[1]));
    null == pn(this.c, (fi(), oo)) && mn(this.c, oo, "og"), null == pn(this.c, uo) && mn(this.c, uo, "profile"), null == pn(this.c, ao) && mn(this.c, ao, "article"), Ve(i, this.g, "OpenGraphProtocolParser.findPrefixes"), i = Me();
    var u, h;
    for (r = "", o = new Nn(new yn(this.c)
        .a); In(o.a);) o.b = Sn(o.a), e = new Cn(o.c, o.b), r += 'meta[property^="' + e.b.b[e.a.b] + '"],';
    for (r = r.substr(0, r.length - 1 - 0), e = t.querySelectorAll(r), o = 0; o < e.length; o++)
      for (a = e[o], h = Q(a, "property")
        .toLowerCase(), r = 0; r < this.e.length; r++) {
        u = pn(this.c, this.e[r].c) + ":";
        var s = u + this.e[r].a;
        h.substr(0, s.length) === s && (h = vt(h, u.length), u = !0, this.e[r].b && (u = this.e[r].b.xb(h, a.content, this.f)), u && kt(this.f, this.e[r].a, a.content))
      }
    if (Ve(i, this.g, "OpenGraphProtocolParser.parseMetaTags"), i = Me(), e = this.b, 0 != e.a.b.length)
      for (o = e.a.b.length - 1; 0 <= o; o--) r = un(e.a, o)[0], null != r && r.length || e.a.U(o);
    if (Ve(i, this.g, "OpenGraphProtocolParser.imageParser.verify"), i = Me(), e = pn(this.c, oo) + ":", !(Jt(this.f, "title") ? xt(this.f, "title") : "")
      .length) throw new _('Required "' + e + 'title" property is missing.');
    if (!(Jt(this.f, "type") ? xt(this.f, "type") : "")
      .length) throw new _('Required "' + e + 'type" property is missing.');
    if (!(Jt(this.f, "url") ? xt(this.f, "url") : "")
      .length) throw new _('Required "' + e + 'url" property is missing.');
    if (0 == li(this.b)
      .length) throw new _('Required "' + e + 'image" property is missing.');
    Ve(i, this.g, "OpenGraphProtocolParser.checkRequired")
  }

  function si() {
    this.b = !1, this.a = new cn
  }

  function li(t) {
    var n, e, i, r;
    for (r = W(no, 19, t.a.b.length, 0), n = 0; n < t.a.b.length; n++) e = un(t.a, n), i = new ni, r[n] = i, i.e = null != e[1] && e[1].length ? e[1] : e[0], null != e[2] && (i.c = e[2]), null != e[3] && (i.d = e[3]), null != e[4] && (i.f = Ke(e[4])), null != e[5] && (i.b = Ke(e[5]));
    return r
  }

  function ci() {
    this.b = q(y($a, 1), ma, 2, 4, "image image:url image:secure_url image:type image:width image:height".split(" ")), this.a = new cn
  }

  function fi() {
    fi = e, oo = new bi("OG", 0), uo = new bi("PROFILE", 1), ao = new bi("ARTICLE", 2)
  }

  function bi(t, n) {
    this.a = t, this.b = n
  }

  function di() {
    this.b = this.a = !1
  }

  function gi(t, n, e) {
    this.a = t, this.c = n, this.b = e
  }

  function wi(t, n) {
    return n == t.a && (t.a = t.b.Q() ? t.b.R() : null, !0)
  }

  function vi(t) {
    this.b = t.D(), t.I() || (this.a = this.b.R())
  }

  function pi() {
    pi = e, wo = RegExp("(next|weiter|continue|>([^\\|]|$)|»([^\\|]|$))", "i"), To = RegExp("(prev|early|old|new|<|«)", "i"), mo = /article|body|content|entry|hentry|main|page|pagination|post|text|blog|story/i, go = RegExp("combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|outbrain|promo|related|shoutbox|sidebar|sponsor|shopping|tags|tool|widget", "i"), lo = RegExp("print|archive|comment|discuss|e[\\-]?mail|share|reply|all|login|sign|single|as one|article|post|篇", "i"), po = /pag(e|ing|inat)/i, bo = /p(a|g|ag)?(e|ing|ination)?(=|\/)[0-9]{1,2}$/i, co = /(first|last)/i, fo = /\/?(#.*)?$/, vo = /\d/, Eo = new Jn
  }

  function mi(t, n) {
    var e;
    3 > Xa || (e = "", St(Eo, t) && (e = Lt(Eo, t)), !e.length || (e += "; "), Dt(Eo, t, e + n))
  }

  function Ti(t) {
    var n, e;
    return e = ga.implementation.createHTMLDocument(), n = e.createElement("base"), n.href = t, (e.head || e.getElementsByTagName("head")[0])
      .appendChild(n), t = e.createElement("a"), e.body.appendChild(t), t
  }

  function Ei(t, n, e) {
    this.b = t, this.d = 0, this.c = n, this.a = e
  }

  function yi() {
    yi = e, No = new Jn, kt(No, "http://schema.org/ImageObject", (Di(), _o)), kt(No, "http://schema.org/Article", Co), kt(No, "http://schema.org/BlogPosting", Co), kt(No, "http://schema.org/NewsArticle", Co), kt(No, "http://schema.org/ScholarlyArticle", Co), kt(No, "http://schema.org/TechArticle", Co), kt(No, "http://schema.org/Person", Ao), kt(No, "http://schema.org/Organization", Oo), kt(No, "http://schema.org/Corporation", Oo), kt(No, "http://schema.org/EducationalOrganization", Oo), kt(No, "http://schema.org/GovernmentOrganization", Oo), kt(No, "http://schema.org/NGO", Oo), yo = new Jn, kt(yo, "IMG", "SRC"), kt(yo, "AUDIO", "SRC"), kt(yo, "EMBED", "SRC"), kt(yo, "IFRAME", "SRC"), kt(yo, "SOURCE", "SRC"), kt(yo, "TRACK", "SRC"), kt(yo, "VIDEO", "SRC"), kt(yo, "A", "HREF"), kt(yo, "LINK", "HREF"), kt(yo, "AREA", "HREF"), kt(yo, "META", "CONTENT"), kt(yo, "TIME", "DATETIME"), kt(yo, "OBJECT", "DATA"), kt(yo, "DATA", "VALUE"), kt(yo, "METER", "VALUE")
  }

  function Ni(t) {
    var n, e, i;
    for (n = new cn, e = 0; e < t.c.b.length; e++) i = un(t.c, e), i.c == (Di(), Co) && an(n, i);
    return n
  }

  function Ci(t, n, e) {
    var i, r, a, o, u;
    if (r = null, i = n.hasAttribute("ITEMSCOPE") && n.hasAttribute("ITEMTYPE"), e) {
      var h;
      a = Q(n, "ITEMPROP"), a.length ? (Bi(), h = wt(a, "\\s+"), a = 0 < h.length ? h : q(y($a, 1), ma, 2, 4, [a])) : a = W($a, 2, 0, 4)
    } else a = W($a, 2, 0, 4);
    if (i) {
      t: {
        var s;
        switch ((s = Q(n, "ITEMTYPE"), Jt(No, s) ? xt(No, s) : (Di(), Ro))
          .b) {
        case 0:
          r = new Li;
          break;
        case 1:
          r = new Si;
          break;
        case 2:
          r = new Ji;
          break;
        case 3:
          r = new xi;
          break;
        case 4:
          r = new Mi;
          break;
        default:
          r = null;
          break t
        }
      }!r || r.c == (Di(), Ro) || e && e.c == (Di(), Ro) && 0 != a.length || (an(t.c, r), Dt(t.b, n, r))
    }
    if (0 < a.length && e.c != (Di(), Ro) && (!r || r.c != (Di(), Ro)))
      for (t = 0; t < a.length; t++) r ? Jt(e.a, a[t]) && kt(e.a, a[t], r) : (i = e, s = a[t], o = "", u = n.tagName, Jt(yo, u) && (o = Q(n, xt(yo, u))), !o.length && (o = n.textContent), h = o, Jt(i.b, s) && !xt(i.b, s)
        .length && kt(i.b, s, h))
  }

  function _i(t, n) {
    yi();
    var e;
    this.c = new cn, this.b = new Jn, this.d = n, e = Me();
    var i, r, a, o, u;
    for (i = t.querySelectorAll("[ITEMPROP],[ITEMSCOPE]"), Ci(this, t, null), a = 0; a < i.length; a++) {
      for (var h = r = i[a], s = void 0, l = void 0, l = null, s = r; s && (s = G(s), s);)
        if (s.hasAttribute("ITEMSCOPE") && s.hasAttribute("ITEMTYPE")) {
          St(this.b, s) && (l = Lt(this.b, s));
          break
        }
      Ci(this, h, l)
    }
    for (i = t.querySelectorAll("A[rel=author],LINK[rel=author]"), a = 0; a < i.length; a++) r = i[a], !this.a.length && (this.a = (o = "", u = r.tagName, (ft(u, "A") || ft(u, "LINK")) && ft(Q(r, "REL"), "author") && (o = r.textContent), o));
    Ve(e, this.d, "SchemaOrgParser.parse")
  }

  function Oi(t, n) {
    yi();
    var e;
    return e = t, t.length && n.length && (e += " "), e + n
  }

  function Ai(t, n) {
    return Jt(t.b, n) ? xt(t.b, n) : ""
  }

  function Ri(t) {
    this.c = t, this.b = new Jn, this.a = new Jn, kt(this.b, "name", ""), kt(this.b, "url", ""), kt(this.b, "description", ""), kt(this.b, "image", "")
  }

  function Ii(t, n) {
    var e, i, r, a;
    return e = Jt(t.b, n) ? xt(t.b, n) : "", e.length ? e : ((i = Jt(t.a, n) ? xt(t.a, n) : null) && (i.c == (Di(), Ao) ? (r = Jt(i.b, "name") ? xt(i.b, "name") : "", e = r.length ? r : Oi(Jt(i.b, "givenName") ? xt(i.b, "givenName") : "", Jt(i.b, "familyName") ? xt(i.b, "familyName") : "")) : i.c == Oo && (a = Jt(i.b, "name") ? xt(i.b, "name") : "", e = a.length ? a : Jt(i.b, "legalName") ? xt(i.b, "legalName") : "")), e)
  }

  function Si() {
    Ri.call(this, (Di(), Co)), kt(this.b, "headline", ""), kt(this.b, "publisher", ""), kt(this.b, "copyrightHolder", ""), kt(this.b, "copyrightYear", ""), kt(this.b, "dateModified", ""), kt(this.b, "datePublished", ""), kt(this.b, "author", ""), kt(this.b, "creator", ""), kt(this.b, "articleSection", ""), Dt(this.a, "publisher", null), Dt(this.a, "copyrightHolder", null), Dt(this.a, "author", null), Dt(this.a, "creator", null), Dt(this.a, "associatedMedia", null), Dt(this.a, "encoding", null)
  }

  function Li() {
    Ri.call(this, (Di(), _o)), kt(this.b, "contentUrl", ""), kt(this.b, "encodingFormat", ""), kt(this.b, "caption", ""), kt(this.b, "representativeOfPage", ""), kt(this.b, "width", ""), kt(this.b, "height", "")
  }

  function xi() {
    Ri.call(this, (Di(), Oo)), kt(this.b, "legalName", "")
  }

  function Ji() {
    Ri.call(this, (Di(), Ao)), kt(this.b, "familyName", ""), kt(this.b, "givenName", "")
  }

  function Di() {
    Di = e, _o = new ki("IMAGE", 0), Co = new ki("ARTICLE", 1), Ao = new ki("PERSON", 2), Oo = new ki("ORGANIZATION", 3), Ro = new ki("UNSUPPORTED", 4)
  }

  function ki(t, n) {
    this.a = t, this.b = n
  }

  function Mi() {
    Ri.call(this, (Di(), Ro))
  }

  function Pi(t, n) {
    this.a = new _i(t, n)
  }

  function Bi() {
    Bi = e, So = new Qi
  }

  function Hi(t) {
    return Bi(), !/\S/.test(t)
  }

  function Fi(t, n) {
    return Bi(), t.join(n)
  }

  function ji(t) {
    return Bi(), t.trim()
  }

  function $i() {}

  function Qi() {}

  function Gi() {}

  function Ui() {
    Ui = e, Do = new Jn, kt(Do, "COLGROUP", (et(), Ma)), kt(Do, "COL", Ma), kt(Do, "TH", Pa), ko = new Jn, kt(ko, "EMBED", Ma), kt(ko, "OBJECT", Ma), kt(ko, "APPLET", Ma), kt(ko, "IFRAME", Ma), Jo = new Mn, Dn(Jo, "grid"), Dn(Jo, "treegrid"), xo = new Mn, Dn(xo, "gridcell"), Dn(xo, "columnheader"), Dn(xo, "row"), Dn(xo, "rowgroup"), Dn(xo, "rowheader"), Lo = new Mn, Dn(Lo, "application"), Dn(Lo, "banner"), Dn(Lo, "complementary"), Dn(Lo, "contentinfo"), Dn(Lo, "form"), Dn(Lo, "main"), Dn(Lo, "navigation"), Dn(Lo, "search")
  }

  function Yi(t, n) {
    var e, i, r;
    for (i = new $t(t); i.b < i.d.J();)
      if (B(i.b < i.d.J()), e = i.d.T(i.c = i.b++), r = e.tagName, null == r ? Pn(n.a, null) : void 0 !== n.c.db(r)) return !(null == r ? It(Pn(n.a, null)) : n.c.db(r))
        .a || Wi(e);
    return !1
  }

  function Wi(t) {
    return t = t.innerText, !!t.length && !Hi(t)
  }

  function qi(t, n, e) {
    return 2 <= Xa && ze(t + n + " -> " + e), e
  }

  function Ki(t) {
    Ui();
    var n, e, i, r, a, o, u, h;
    for (Vi(), a = G(t); a;) {
      if (ft("INPUT", a.tagName) || ft(Q(a, "contenteditable"), "true")) return qi(Qo, "", (Xi(), au));
      a = G(a)
    }
    if (a = Q(t, "role")
      .toLowerCase(), "presentation" === a) return qi(tu, "_" + a, (Xi(), au));
    if (kn(Jo, a) || kn(Lo, a)) return qi(tu, "_" + a, (Xi(), ru));
    if (a = new cn, o = t.getElementsByTagName("*"), 0 < t.getElementsByTagName("TABLE")
      .length)
      for (r = 0; r < o.length; r++)
        for (e = o[r], i = G(e); i;) {
          if (ft("TABLE", i.tagName)) {
            i == t && (a.b[a.b.length] = e);
            break
          }
          i = G(i)
        } else
          for (r = 0; r < o.length; r++) an(a, o[r]);
    for (o = new $t(a); o.b < o.d.J();)
      if (B(o.b < o.d.J()), n = o.d.T(o.c = o.b++), e = Q(n, "role")
        .toLowerCase(), kn(xo, e) || kn(Lo, e)) return qi(Zo, "_" + e, (Xi(), ru));
    if ("0" === Q(t, "datatable")) return qi(Ho, "", (Xi(), au));
    if (0 < t.getElementsByTagName("TABLE")
      .length) return qi(zo, "", (Xi(), au));
    if (o = t.rows, 1 >= o.length) return qi(Yo, "", (Xi(), au));
    for (e = null, i = n = 0; i < o.length; i++) r = o[i].cells, r.length > n && (n = r.length, e = r);
    if (i = e, !i || 1 >= i.length) return qi(Uo, "", (Xi(), au));
    if ((e = t.caption) && Wi(e) || t.tHead || t.tFoot || Yi(a, Do)) return qi(Po, "", (Xi(), ru));
    for (e = new cn, r = new $t(a); r.b < r.d.J();) B(r.b < r.d.J()), n = r.d.T(r.c = r.b++), ft("TD", n.tagName) && (e.b[e.b.length] = n);
    for (r = new $t(e); r.b < r.d.J();) {
      if (B(r.b < r.d.J()), n = r.d.T(r.c = r.b++), n.hasAttribute("abbr") || n.hasAttribute("headers") || n.hasAttribute("scope")) return qi(Mo, "", (Xi(), ru));
      if (n = n.getElementsByTagName("*"), 1 == n.length && ft("ABBR", n[0].tagName)) return qi(Xo, "", (Xi(), ru))
    }
    if (r = t.ownerDocument.documentElement, n = 0 | (r.offsetWidth || 0), 0 < n && (0 | (t.offsetWidth || 0)) > .95 * n) {
      for (h = !1, n = r.getElementsByTagName("META"), u = 0; u < n.length && !h; u++) h = n[u], h = ft(h.name, "viewport");
      if (!h) return qi(qo, "", (Xi(), au))
    }
    if (t.hasAttribute("summary")) return qi(nu, "", (Xi(), ru));
    if (5 <= i.length) return qi(Vo, "", (Xi(), ru));
    for (i = new $t(e); i.b < i.d.J();)
      if (B(i.b < i.d.J()), n = i.d.T(i.c = i.b++), n = getComputedStyle(n, null)
        .borderStyle, n.length && "none" !== n && "hidden" !== n) return qi(Bo, "_" + n, (Xi(), ru));
    for (u = null, n = 0; n < o.length; n++)
      if (i = getComputedStyle(o[n], null)
        .backgroundColor, null == u) u = i;
      else if (!ft(u, i)) return qi(jo, "", (Xi(), ru));
    return 20 <= o.length ? qi(Ko, "", (Xi(), ru)) : 10 >= e.b.length ? qi(Go, "", (Xi(), au)) : Yi(a, ko) ? qi($o, "", (Xi(), au)) : (a = 0 | (r.offsetHeight || 0), 0 < a && (0 | (t.offsetHeight || 0)) > .9 * a ? qi(Wo, "", (Xi(), au)) : qi(Fo, "", (Xi(), ru)))
  }

  function Vi() {
    Vi = e, Qo = new zi("INSIDE_EDITABLE_AREA", 0), tu = new zi("ROLE_TABLE", 1), Zo = new zi("ROLE_DESCENDANT", 2), Ho = new zi("DATATABLE_0", 3), Po = new zi("CAPTION_THEAD_TFOOT_COLGROUP_COL_TH", 4), Mo = new zi("ABBR_HEADERS_SCOPE", 5), Xo = new zi("ONLY_HAS_ABBR", 6), qo = new zi("MORE_95_PERCENT_DOC_WIDTH", 7), nu = new zi("SUMMARY", 8), zo = new zi("NESTED_TABLE", 9), Yo = new zi("LESS_EQ_1_ROW", 10), Uo = new zi("LESS_EQ_1_COL", 11), Vo = new zi("MORE_EQ_5_COLS", 12), Bo = new zi("CELLS_HAVE_BORDER", 13), jo = new zi("DIFFERENTLY_COLORED_ROWS", 14), Ko = new zi("MORE_EQ_20_ROWS", 15), Go = new zi("LESS_EQ_10_CELLS", 16), $o = new zi("EMBED_OBJECT_APPLET_IFRAME", 17), Wo = new zi("MORE_90_PERCENT_DOC_HEIGHT", 18), Fo = new zi("DEFAULT", 19), eu = new zi("UNKNOWN", 20)
  }

  function zi(t, n) {
    this.a = t, this.b = n
  }

  function Xi() {
    Xi = e, ru = new Zi("DATA", 0), au = new Zi("LAYOUT", 1)
  }

  function Zi(t, n) {
    this.a = t, this.b = n
  }

  function tr(t, n) {
    var e;
    return e = nr(n), t.appendChild(e), e
  }

  function nr(t) {
    var n;
    return n = t.cloneNode(!1), 1 == t.nodeType && (t = getComputedStyle(t, null)
      .direction, !t.length && (t = "auto"), n.setAttribute("dir", t)), n
  }

  function er(t, n) {
    var e;
    return e = t.parentNode, e || (e = nr(n), e.appendChild(t)), e
  }

  function ir(t) {
    return Zr(un(t.j, un(t.i, 0)
      .a))
  }

  function rr(t, n) {
    return kn(t.b, n)
  }

  function ar(t, n) {
    t.g += "\n", t.g += n.g, t.d += n.d, t.e += n.e, t.c = 0 == t.d ? 0 : t.e / t.d, t.a |= n.a, on(t.i, n.i), t.b.G(n.b), t.f = st(t.f, n.f)
  }

  function or(t, n) {
    return n != t.a && (t.a = n, !0)
  }

  function ur(t) {
    var n;
    return n = "[" + (un(t.j, un(t.i, 0)
        .a)
      .j + "-" + un(t.j, un(t.i, t.i.b.length - 1)
        .a)
      .j + ";"), n += "tl=" + t.f + ";", n += "nw=" + t.d + ";", n += "ld=" + t.c + ";", n = n + "]\t" + ((t.a ? "[0;32mCONTENT" : "[0;35mboilerplate") + "[0m,"), n += "[1;30m" + _t(new Ie(t.b)) + "[0m", n += "\n" + t.g
  }

  function hr(t, n) {
    var e, i;
    this.j = t, this.i = new cn, an(this.i, ut(n)), e = un(this.j, n), this.b = (i = e.e, e.e = new Mn, i), this.d = e.i, this.e = e.g, this.f = e.n, this.g = e.o, this.c = 0 == this.d ? 0 : this.e / this.d
  }

  function sr(t) {
    this.a = t
  }

  function lr() {
    lr = e, uu = new Mn, Dn(uu, "IMG")
  }

  function cr() {
    lr()
  }

  function fr() {
    fr = e, hu = new Mn, Dn(hu, "BLOCKQUOTE"), Dn(hu, "IFRAME")
  }

  function br(t) {
    var n;
    if (-1 == (t.className || "")
      .indexOf("twitter-tweet")) return null;
    if (n = t.getElementsByTagName("a"), 0 == n.length) return null;
    if (n = n[n.length - 1], !Pe(n.href, "twitter.com")) return null;
    t: {
      var e;
      for (e = wt($(n, "pathname"), "/"), n = e.length - 1; 0 <= n; n--)
        if (0 < e[n].length) {
          n = e[n];
          break t
        }
      n = null
    }
    return null == n ? null : new Vr(t, "twitter", n, null)
  }

  function dr(t) {
    var n;
    return "IFRAME" !== t.tagName || t.src.length ? null : (n = t.contentWindow.document) ? (n = n.getElementsByTagName("blockquote"), 1 > n.length ? null : (n = Q(n[0], "data-tweet-id"), n.length ? new Vr(t, "twitter", n, null) : null)) : null
  }

  function gr() {
    fr()
  }

  function wr() {
    wr = e, su = new Mn, Dn(su, "IFRAME")
  }

  function vr(t) {
    var n, e;
    if (!t || !kn(su, t.tagName)) return null;
    if (e = t.src, !Pe(e, "player.vimeo.com")) return null;
    n = ga.createElement("a"), n.href = e, e = $(n, "pathname"), n = $e(vt($(n, "search"), 1));
    t: {
      var i;
      for (i = wt(e, "/"), e = i.length - 1; 0 <= e && "video" !== i[e]; e--)
        if (0 < i[e].length) {
          e = i[e];
          break t
        }
      e = null
    }
    return null == e ? null : (2 <= Xa && (ze("Vimeo embed extracted:"), ze("    ID:    " + e)), new Vr(t, "vimeo", e, n))
  }

  function pr() {
    wr()
  }

  function mr() {
    mr = e, lu = new Mn, Dn(lu, "IFRAME")
  }

  function Tr(t) {
    var n, e;
    if (!t || !kn(lu, t.tagName)) return null;
    if (e = t.src, !Pe(e, "youtube.com")) return null;
    n = ga.createElement("a"), n.href = e, e = $(n, "pathname"), n = $e(vt($(n, "search"), 1));
    t: {
      var i;
      for (i = wt(e, "/"), e = i.length - 1; 0 <= e && "embed" !== i[e]; e--)
        if (0 < i[e].length) {
          e = i[e];
          break t
        }
      e = null
    }
    return null == e ? null : (2 <= Xa && (ze("YouTube embed extracted:"), ze("    ID:    " + e)), new Vr(t, "youtube", e, n))
  }

  function Er() {
    mr()
  }

  function yr(t, n, e) {
    if (!(1 > Xa))
      if (n) {
        if (ze("[0;34m<<<<< " + e + " >>>>>"), !(1 > Xa)) {
          for (n = "", e = new $t(t.a); e.b < e.d.J();) B(e.b < e.d.J()), t = e.d.T(e.c = e.b++), n += ur(t) + "\n";
          ze(n)
        }
        ze("[0;34m<<<<<                >>>>>")
      } else ze("[0;31m~~~~~ No Changes: " + e + " ~~~~~")
  }

  function Nr() {
    Nr = e, cu = RegExp("(^(comments|© reuters|please rate this|post a comment|\\d+\\s+(comments|users responded in))|what you think\\.\\.\\.|add your comment|add comment|reader views|have your say|reader comments|rätta artikeln|^thanks for your comments - this feedback is now closed$)", "i")
  }

  function Cr() {
    Cr = e, bu = new Or((!1)), fu = new Or((!0))
  }

  function _r(t, n) {
    var e, i, r, a, o;
    if (e = n.a, 2 > e.b.length) return !1;
    for (i = !1, H(0, e.b.length), o = e.b[0], a = new Qt(e, 1); a.b < a.d.J();) B(a.b < a.d.J()), e = a.d.T(a.c = a.b++), e.a && o.a ? (r = un(e.j, un(e.i, 0)
        .a)
      .j - un(o.j, un(o.i, o.i.b.length - 1)
        .a)
      .j - 1, 1 >= r ? (r = !0, t.a ? o.f != e.f && (r = !1) : kn(e.b, "BOILERPLATE_HEADING_FUSED") && (r = !1), kn(o.b, "STRICTLY_NOT_CONTENT") != kn(e.b, "STRICTLY_NOT_CONTENT") && (r = !1), kn(o.b, "de.l3s.boilerpipe/TITLE") != kn(e.b, "de.l3s.boilerpipe/TITLE") && (r = !1), !o.a && kn(o.b, "de.l3s.boilerpipe/LI") && !kn(e.b, "de.l3s.boilerpipe/LI") && (r = !1), r ? (ar(o, e), jt(a), i = !0) : o = e) : o = e) : o = e;
    return i
  }

  function Or(t) {
    this.a = t
  }

  function Ar() {
    Ar = e, gu = RegExp("[\\?\\!\\.\\-\\:]+", "g")
  }

  function Rr(t, n, e) {
    var i, r;
    if (r = wt(n, e), 1 != r.length)
      for (n = 0; n < r.length; n++) i = r[n], -1 == i.indexOf(".com") && (Bi(), e = So.yb(i), 4 <= e && Dn(t, i))
  }

  function Ir(t, n) {
    var e, i, r, a, o, u;
    if (u = wt(t, n), 1 == u.length) return null;
    for (i = 0, r = "", e = 0; e < u.length; e++) o = u[e], -1 == o.indexOf(".com") && (Bi(), a = So.yb(o), a > i || o.length > r.length) && (i = a, r = o);
    return 0 == r.length ? null : pt(r)
  }

  function Sr(t) {
    Ar();
    var n;
    if (t)
      for (this.a = new Mn, t = re(t, 0); t.b != t.d.c;) {
        B(t.b != t.d.c), t.c = t.b, t.b = t.b.a, ++t.a, n = t.c.c;
        var e = void 0;
        n = bt(n), n = dt(n), n = pt(n)
          .toLowerCase(), 0 != n.length && Dn(this.a, n) && (e = Ir(n, "[ ]*[\\|»|-][ ]*"), null != e && Dn(this.a, e), e = Ir(n, "[ ]*[\\|»|:][ ]*"), null != e && Dn(this.a, e), e = Ir(n, "[ ]*[\\|»|:\\(\\)][ ]*"), null != e && Dn(this.a, e), e = Ir(n, "[ ]*[\\|»|:\\(\\)\\-][ ]*"), null != e && Dn(this.a, e), e = Ir(n, "[ ]*[\\|»|,|:\\(\\)\\-][ ]*"), null != e && Dn(this.a, e), e = Ir(n, "[ ]*[\\|»|,|:\\(\\)\\- ][ ]*"), null != e && Dn(this.a, e), Rr(this.a, n, "[ ]+[\\|][ ]+"), Rr(this.a, n, "[ ]+[\\-][ ]+"), Dn(this.a, gt(n, " - [^\\-]+$")), Dn(this.a, gt(n, "^[^\\-]+ - ")))
      } else this.a = null
  }

  function Lr() {
    Lr = e, wu = new xr((!0))
  }

  function xr(t) {
    this.a = t
  }

  function Jr(t, n, e) {
    return n = un(t.d, n), e = un(t.d, e), !(!t.c && (n.nodeType != e.nodeType || 1 == n.nodeType && n.nodeName !== e.nodeName)) && n.parentNode == e.parentNode
  }

  function Dr(t, n) {
    var e, i, r, a, o, u, h, s, l, c;
    if (t.g = n.a, 2 > t.g.b.length) return !1;
    for (i = t.g, r = ga.documentElement, u = new cn, a = 0; a < i.b.length; ++a) {
      for (o = a + 1 == i.b.length ? r : ir((H(a + 1, i.b.length), i.b[a + 1])), 0 == a ? h = r : (H(a - 1, i.b.length), h = i.b[a - 1], h = ta(un(h.j, un(h.i, h.i.b.length - 1)
          .a))), l = h, h = ir((H(a, i.b.length), i.b[a])), s = h.parentNode; !s.contains(l) && !s.contains(o);) h = s, s = s.parentNode;
      u.b[u.b.length] = h
    }
    for (t.d = u, u = W(Tu, 0, t.g.b.length, 7), s = h = 0, i = W(Tu, 0, t.g.b.length, 7), a = r = 0, o = !1, l = 0; l < t.g.b.length; l++)
      if (!t.b && rr(un(t.g, l), "de.l3s.boilerpipe/TITLE") || !t.a && rr(un(t.g, l), "de.l3s.boilerpipe/HEADING")) h = s, r = a;
      else if (!un(t.g, l)
      .a || rr(un(t.g, l), "STRICTLY_NOT_CONTENT") || rr(un(t.g, l), "de.l3s.boilerpipe/TITLE")) {
      if (un(t.g, l)
        .c <= t.f && !un(t.g, l)
        .a && !rr(un(t.g, l), "STRICTLY_NOT_CONTENT") && !rr(un(t.g, l), "de.l3s.boilerpipe/TITLE")) {
        for (c = h; c < s; c++)
          if (e = u[c], l - e > t.e) c == h && ++h;
          else if (Jr(t, l, e)) {
          o = !0, or(un(t.g, l), !0), u[c] = u[h++];
          break
        }
        c == s ? i[a++] = l : u[s++] = l
      }
    } else
      for (u[s++] = l, c = r; c < a; c++) e = i[c], l - e > t.e ? c == r && ++r : Jr(t, l, e) && (o = !0, or(un(t.g, e), !0), i[c] = i[r++]);
    return o
  }

  function kr(t, n, e, i, r) {
    this.b = t, this.a = n, this.c = e, this.f = i, this.e = r
  }

  function Mr() {
    var t = new Br;
    return t.a = !0, t
  }

  function Pr(t) {
    return new kr(t.b, t.a, t.c, t.e, t.d)
  }

  function Br() {
    this.c = this.a = this.b = !1, this.d = this.e = 0
  }

  function Hr() {
    Hr = e, vu = new Fr("de.l3s.boilerpipe/TITLE")
  }

  function Fr(t) {
    this.a = t
  }

  function jr() {
    jr = e, pu = new $r(q(y($a, 1), ma, 2, 4, ["STRICTLY_NOT_CONTENT"]))
  }

  function $r(t) {
    this.a = t
  }

  function Qr(t, n) {
    var e, i;
    if (e = Be(n), 2 > Xa || (i = getComputedStyle(n, null), ze((e ? "KEEP " : "SKIP ") + n.tagName + ": id=" + n.id + ", dsp=" + i.display + ", vis=" + i.visibility + ", opaq=" + i.opacity)), !e) return Dn(t.d, n), !1;
    if (kn(t.b, n.tagName))
      for (i = new $t(t.c); i.b < i.d.J();)
        if (B(i.b < i.d.J()), e = i.d.T(i.c = i.b++), e = e.zb(n)) return i = t.a, qr(i, i.d), an(i.b.a, e), !1;
    switch (n.tagName) {
    case "BR":
      return e = t.a, e.c && (qr(e, e.d), ++e.d, e.c = !1), e = e.g, e.j += "\n", an(e.a, n), !1;
    case "TABLE":
      if (e = Ki(n), 2 > Xa || (i = G(n), ze("TABLE: " + e + ", id=" + n.id + ", class=" + (n.className || "") + ", parent=[" + i.tagName + ", id=" + i.id + ", class=" + (i.className || "") + "]")), e == (Xi(), ru)) return e = t.a, qr(e, e.d), an(e.b.a, new Xr(n)), !1;
      break;
    case "VIDEO":
      return e = t.a, i = new ra(n), qr(e, e.d), an(e.b.a, i), !1;
    case "OPTION":
    case "OBJECT":
    case "EMBED":
    case "APPLET":
      return t.a.c = !0, !1;
    case "HEAD":
    case "STYLE":
    case "SCRIPT":
    case "LINK":
    case "NOSCRIPT":
      return !1
    }
    e = t.a, Ur();
    var r, a, o, u;
    switch (u = getComputedStyle(n, null), i = new Yr, u.display) {
    case "inline":
      break;
    case "inline-block":
    case "inline-flex":
      i.a = !0;
      break;
    default:
      i.b = !0, i.a = !0
    }
    if (u = n.tagName, "HTML" !== u && "BODY" !== u) switch (a = Q(n, "class"), r = n.classList.length, o = Q(n, "id"), (mu.test(a) || mu.test(o)) && 5 >= r && (r = i.d, r[r.length] = "STRICTLY_NOT_CONTENT"), u) {
    case "ASIDE":
    case "NAV":
      u = i.d, u[u.length] = "STRICTLY_NOT_CONTENT";
      break;
    case "LI":
      u = i.d, u[u.length] = "de.l3s.boilerpipe/LI";
      break;
    case "H1":
      u = i.d, u[u.length] = "de.l3s.boilerpipe/H1", u = i.d, u[u.length] = "de.l3s.boilerpipe/HEADING";
      break;
    case "H2":
      u = i.d, u[u.length] = "de.l3s.boilerpipe/H2", u = i.d, u[u.length] = "de.l3s.boilerpipe/HEADING";
      break;
    case "H3":
      u = i.d, u[u.length] = "de.l3s.boilerpipe/H3", u = i.d, u[u.length] = "de.l3s.boilerpipe/HEADING";
      break;
    case "A":
      i.a = !0, n.hasAttribute("href") && (i.c = !0)
    }
    return an(e.a.a, i), i.a && ++e.f, i.c && (u = e.g, u.e = !0, u.j += " "), e.c |= i.b, !0
  }

  function Gr(t) {
    var n;
    for (this.d = new Mn, this.a = t, this.c = new cn, an(this.c, new cr), an(this.c, new gr), an(this.c, new pr), an(this.c, new Er), this.b = new Mn, n = new $t(this.c); n.b < n.d.J();) B(n.b < n.d.J()), t = n.d.T(n.c = n.b++), Ct(this.b, t.Ab())
  }

  function Ur() {
    Ur = e, mu = /\bcomments?\b/
  }

  function Yr() {
    this.d = []
  }

  function Wr() {
    this.a = new cn
  }

  function qr(t, n) {
    var e;
    e = t.g;
    var i = t.e;
    if (e.c == e.a.b.length ? e = null : e.d < e.c ? (ea(e), e = null) : (i = new na(e.j, e.a, e.c, e.a.b.length, e.d, e.f, e.i, e.g, e.b, i), ea(e), e = i), e) {
      e.d = n, ++t.e;
      var r, a;
      for (r = new $t(t.a.a); r.b < r.d.J();)
        for (B(r.b < r.d.J()), i = r.d.T(r.c = r.b++), a = 0; a < i.d.length; a++) Dn(e.e, i.d[a]);
      an(t.b.a, e)
    }
  }

  function Kr() {
    this.b = new Wr, this.a = new be, this.g = new ia, this.d = 0
  }

  function Vr(t, n, e, i) {
    this.a = new cn, this.b = e, an(this.a, t), this.c = n, !i && new Jn
  }

  function zr(t, n) {
    this.a = t, this.b = n, null == this.b && (this.b = "")
  }

  function Xr(t) {
    this.a = t
  }

  function Zr(t) {
    return un(t.a, t.c)
  }

  function ta(t) {
    return un(t.a, t.f)
  }

  function na(t, n, e, i, r, a, o, u, h, s) {
    this.o = t, this.a = n, this.k = e, this.b = i, this.c = r, this.f = a, this.i = o, this.g = u, this.e = new Mn, this.n = h, this.j = s
  }

  function ea(t) {
    t.j = "", t.i = 0, t.g = 0, t.c = t.a.b.length, t.b = -1
  }

  function ia() {
    this.a = new cn
  }

  function ra(t) {
    this.a = t
  }

  function aa() {
    this.b = 25, this.c = 75e3, this.a = 2e5
  }

  function oa() {
    this.a = 25
  }

  function ua(t) {
    this.b = 25, this.a = t
  }

  function ha() {
    this.a = 15
  }

  function sa(t) {
    return function () {
      var n;
      t: {
        var e, i = arguments;
        if (0 != Sa && (e = Date.now ? Date.now() : (new Date)
            .getTime(), 2e3 < e - xa && (xa = e, Ja = da.setTimeout(I, 10))), 0 == Sa++) {
          S(), e = Da;
          var r, a;
          if (e.a) {
            a = null;
            do r = e.a, e.a = null, a = x(r, a); while (e.a);
            e.a = a
          }
          e = !0
        } else e = !1;
        try {
          n = t.apply(this, i);
          break t
        } finally {
          if ((i = e) && (S(), e = Da, e.b)) {
            a = null;
            do r = e.b, e.b = null, a = x(r, a); while (e.b);
            e.b = a
          }--Sa, i && -1 != Ja && (da.clearTimeout(Ja), Ja = -1)
        }
        n = void 0
      }
      return n
    }
  }
  var la, ca, fa, ba, da = window
    , ga = da.document
    , wa = (da.__gwtStatsEvent ? function (t) {
      da.__gwtStatsEvent(t)
    } : null, 2147483647)
    , va = {
      3: 1
      , 5: 1
    }
    , pa = {
      3: 1
      , 7: 1
      , 5: 1
    }
    , ma = {
      3: 1
    }
    , Ta = {
      30: 1
    }
    , Ea = {
      17: 1
    }
    , ya = {
      3: 1
      , 20: 1
    }
    , Na = {
      3: 1
      , 15: 1
      , 11: 1
      , 18: 1
    }
    , Ca = {};
  i(1, null, {}, r), fa.eQ = function (t) {
    return this === t
  }, fa.gC = function () {
    return this.cZ
  }, fa.hC = function () {
    return this.$H || (this.$H = ++La)
  }, fa.tS = function () {
    var t, n = g(o(this)) + "@";
    return t = (u(this) >>> 0)
      .toString(16), n + t
  }, fa.toString = function () {
    return this.tS()
  }, _a = {
    3: 1
    , 173: 1
    , 15: 1
    , 2: 1
  }, !Array.isArray && (Array.isArray = function (t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  });
  var _a;
  i(54, 1, {}, v), fa.u = function (t) {
    var n;
    return n = new v, n.f = 4, 1 < t ? n.c = y(this, t - 1) : n.c = this, n
  }, fa.v = function () {
    return d(this), this.b
  }, fa.w = function () {
    return g(this)
  }, fa.A = function () {
    return w(this)
  }, fa.B = function () {
    return 0 != (4 & this.f)
  }, fa.C = function () {
    return 0 != (1 & this.f)
  }, fa.tS = function () {
    return (0 != (2 & this.f) ? "interface " : 0 != (1 & this.f) ? "" : "class ") + (d(this), this.n)
  }, fa.f = 0, fa.i = 0;
  var Oa = 1
    , Aa = m(1)
    , Ra = m(0);
  m(54), i(5, 1, va), fa.q = function () {
    return this.e
  }, fa.tS = function () {
    var t, n;
    return t = g(this.cZ), n = this.q(), null != n ? t + ": " + n : t
  }, m(5), i(7, 5, pa, _), m(7), i(10, 7, pa), m(10), i(79, 10, pa), m(79), i(26, 79, {
    26: 1
    , 3: 1
    , 7: 1
    , 5: 1
  }, A), fa.q = function () {
    var n;
    return null == this.c && (n = f(this.b) === f(Ia) ? null : this.b, this.d = null == n ? "null" : null == n || c(n) || n.tM === t ? c(n) ? "String" : g(o(n)) : null == n ? null : n.name, this.a = this.a + ": " + (null == n || c(n) || n.tM === t ? n + "" : null == n ? null : n.message), this.c = "(" + this.d + ") " + this.a), this.c
  }, fa.r = function () {
    return f(this.b) === f(Ia) ? null : this.b
  };
  var Ia;
  m(26), i(149, 1, {}), m(149);
  var Sa = 0
    , La = 0
    , xa = 0
    , Ja = -1;
  i(125, 149, {}, L);
  var Da;
  m(125);
  var ka;
  i(161, 1, {}), m(161), i(87, 161, {}, k), fa.s = function (t, n) {
    var e = {};
    t.fnStack = [];
    for (var i = arguments.callee.caller; i;) {
      J();
      var r;
      if (!(r = i.name)) {
        r = i;
        var a = /function(?:\s+([\w$]+))?\s*\(/.exec(i.toString());
        r = r.name = a && a[1] || "anonymous"
      }
      if (t.fnStack.push(r), r = ":" + r, a = e[r]) {
        var o, u;
        for (o = 0, u = a.length; o < u; o++)
          if (a[o] === i) return
      }(a || (e[r] = []))
      .push(i), i = i.caller
    }
  }, m(87), i(162, 161, {}), fa.s = function (t, n) {
    function e(t) {
      if (!("stack" in t)) try {
        throw t
      } catch (n) {}
      return t
    }
    var i;
    i = "string" == typeof n ? e(Error(n)) : n instanceof Object && "stack" in n ? n : e(Error()), t.__gwt$backingJsError = i
  }, m(162), i(88, 162, {}, P), m(88), i(42, 5, va), m(42), i(12, 42, va), m(12), i(78, 12, va, Z), m(78), i(55, 1, {}), fa.tS = function () {
    return this.a
  }, m(55), i(21, 10, pa, tt), m(21), i(139, 21, pa, nt), m(139), i(32, 1, {
    3: 1
    , 32: 1
    , 15: 1
  }, it), fa.t = function (t) {
    var n = this.a;
    return n == t.a ? 0 : n ? 1 : -1
  }, fa.eQ = function (t) {
    return s(t, 32) && t.a == this.a
  }, fa.hC = function () {
    return this.a ? 1231 : 1237
  }, fa.tS = function () {
    return "" + this.a
  }, fa.a = !1;
  var Ma, Pa;
  m(32), i(53, 1, {
    3: 1
    , 53: 1
  }), m(53), i(11, 1, {
    3: 1
    , 15: 1
    , 11: 1
  }), fa.t = function (t) {
    return this.b - t.b
  }, fa.eQ = function (t) {
    return this === t
  }, fa.hC = function () {
    return this.$H || (this.$H = ++La)
  }, fa.tS = function () {
    return null != this.a ? this.a : "" + this.b
  }, fa.b = 0, m(11), i(61, 10, pa, rt), m(61), i(136, 10, pa, at), m(136), i(25, 53, {
    3: 1
    , 15: 1
    , 25: 1
    , 53: 1
  }, ot), fa.t = function (t) {
    var n = this.a;
    return t = t.a, n < t ? -1 : n > t ? 1 : 0
  }, fa.eQ = function (t) {
    return s(t, 25) && t.a == this.a
  }, fa.hC = function () {
    return this.a
  }, fa.tS = function () {
    return "" + this.a
  }, fa.a = 0;
  var Ba, Ha = m(25);
  i(48, 10, pa, lt, ct), m(48);
  var Fa, ja, $a = m(2)
    , Qa = 0;
  i(33, 55, {
    173: 1
  }, Et, yt), m(33), i(37, 10, pa, Nt), m(37), i(164, 1, {}), fa.F = function () {
    throw new Nt("Add not supported on this collection")
  }, fa.G = function (t) {
    return Ct(this, t)
  }, fa.H = function (t) {
    t: {
      var n, e;
      for (e = this.D(); e.Q();)
        if (n = e.R(), f(t) === f(n) || null != t && a(t, n)) {
          t = !0;
          break t
        }
      t = !1
    }
    return t
  }, fa.I = function () {
    return 0 == this.J()
  }, fa.K = function () {
    return this.L(W(Aa, 1, this.J(), 3))
  }, fa.L = function (t) {
    var n, e, i;
    for (i = this.J(), t.length < i && (t = Y(t, i)), e = this.D(), n = 0; n < i; ++n) t[n] = e.R();
    return t.length > i && (t[i] = null), t
  }, fa.tS = function () {
    return _t(this)
  }, m(164), i(163, 1, Ta), fa.M = function (t) {
    return Ot(this, t)
  }, fa.N = function (t) {
    return !!At(this, t)
  }, fa.eQ = function (t) {
    var n;
    if (t === this) return !0;
    if (!s(t, 30) || this.J() != t.J()) return !1;
    for (n = t.O()
      .D(); n.Q();)
      if (t = n.R(), !this.M(t)) return !1;
    return !0
  }, fa.P = function (t) {
    return It(At(this, t))
  }, fa.hC = function () {
    return fn(this.O())
  }, fa.J = function () {
    return this.O()
      .J()
  }, fa.tS = function () {
    var t, n, e, i;
    for (i = new yt("{"), t = !1, e = this.O()
      .D(); e.Q();) n = e.R(), t ? i.a += ", " : t = !0, i.a += Rt(this, n.W()), i.a += "=", n = Rt(this, n.X()), i.a += n;
    return i.a += "}", i.a
  }, m(163), i(89, 163, Ta), fa.N = function (t) {
    return St(this, t)
  }, fa.O = function () {
    return new Pt(this)
  }, fa.P = function (t) {
    return Lt(this, t)
  }, fa.J = function () {
    return this.b
  }, fa.b = 0, m(89), i(165, 164, Ea), fa.eQ = function (t) {
    if (t === this) t = !0;
    else if (s(t, 17) && t.J() == this.J()) t: {
      var n;
      for (F(t), n = t.D(); n.Q();)
        if (t = n.R(), !this.H(t)) {
          t = !1;
          break t
        }
      t = !0
    }
    else t = !1;
    return t
  }, fa.hC = function () {
    return fn(this)
  }, m(165), i(57, 165, Ea, Pt), fa.H = function (t) {
    return !!s(t, 16) && Ot(this.a, t)
  }, fa.D = function () {
    return new Ft(this.a)
  }, fa.J = function () {
    return this.a.b
  }, m(57), i(58, 1, {}, Ft), fa.Q = function () {
    return Bt(this)
  }, fa.R = function () {
    return Ht(this)
  }, m(58), i(166, 164, {
    20: 1
  }), fa.S = function () {
    throw new Nt("Add not supported on this list")
  }, fa.F = function (t) {
    return this.S(this.J(), t), !0
  }, fa.eQ = function (t) {
    var n, e, i;
    if (t === this) return !0;
    if (!s(t, 20) || this.J() != t.J()) return !1;
    for (i = t.D(), n = this.D(); n.Q();)
      if (t = n.R(), e = i.R(), !(f(t) === f(e) || null != t && a(t, e))) return !1;
    return !0
  }, fa.hC = function () {
    var t, n, e;
    for (e = 1, n = this.D(); n.Q();) t = n.R(), e = 31 * e + (null != t ? u(t) : 0), e = ~~e;
    return e
  }, fa.D = function () {
    return new $t(this)
  }, fa.U = function () {
    throw new Nt("Remove not supported on this list")
  }, m(166), i(4, 1, {}, $t), fa.Q = function () {
    return this.b < this.d.J()
  }, fa.R = function () {
    return B(this.b < this.d.J()), this.d.T(this.c = this.b++)
  }, fa.V = function () {
    jt(this)
  }, fa.b = 0, fa.c = -1, m(4), i(27, 4, {}, Qt), m(27), i(47, 166, {
    20: 1
  }, Ut), fa.S = function (t, n) {
    j(t, this.b), rn(this.c, this.a + t, n), ++this.b
  }, fa.T = function (t) {
    return Gt(this, t)
  }, fa.U = function (t) {
    return H(t, this.b), t = this.c.U(this.a + t), --this.b, t
  }, fa.J = function () {
    return this.b
  }, fa.a = 0, fa.b = 0, m(47), i(45, 165, Ea, Wt), fa.H = function (t) {
    return St(this.a, t)
  }, fa.D = function () {
    return Yt(this)
  }, fa.J = function () {
    return this.a.b
  }, m(45), i(90, 1, {}, qt), fa.Q = function () {
    return Bt(this.a)
  }, fa.R = function () {
    return Ht(this.a)
      .W()
  }, m(90), i(34, 1, {
    34: 1
    , 16: 1
  }), fa.eQ = function (t) {
    return !!s(t, 16) && (le(this.c, t.W()) && le(this.d, t.X()))
  }, fa.W = function () {
    return this.c
  }, fa.X = function () {
    return this.d
  }, fa.hC = function () {
    return ce(this.c) ^ ce(this.d)
  }, fa.Y = function (t) {
    return Kt(this, t)
  }, fa.tS = function () {
    return this.c + "=" + this.d
  }, m(34), i(35, 34, {
    34: 1
    , 35: 1
    , 16: 1
  }, Vt), m(35), i(169, 1, {
    16: 1
  }), fa.eQ = function (t) {
    return !!s(t, 16) && (le(this.W(), t.W()) && le(this.X(), t.X()))
  }, fa.hC = function () {
    return ce(this.W()) ^ ce(this.X())
  }, fa.tS = function () {
    return this.W() + "=" + this.X()
  }, m(169), i(172, 163, Ta), fa.M = function (t) {
    return zt(this, t)
  }, fa.N = function (t) {
    return !!de(this, t)
  }, fa.O = function () {
    return new Xt(this)
  }, fa.P = function (t) {
    return It(de(this, t))
  }, m(172), i(76, 165, Ea, Xt), fa.H = function (t) {
    return s(t, 16) && zt(this.a, t)
  }, fa.D = function () {
    return new Te(this.a)
  }, fa.J = function () {
    return this.a.b
  }, m(76), i(144, 165, Ea, tn), fa.H = function (t) {
    return !!de(this.a, t)
  }, fa.D = function () {
    return Zt(this)
  }, fa.J = function () {
    return this.a.b
  }, m(144), i(145, 1, {}, nn), fa.Q = function () {
    return this.a.a.Q()
  }, fa.R = function () {
    return this.a.a.R()
      .W()
  }, m(145), i(167, 166, {
    20: 1
  }), fa.S = function (t, n) {
    var e;
    e = re(this, t), ie(e.d, n, e.b.b, e.b), ++e.a, e.c = null
  }, fa.T = function (t) {
    return en(this, t)
  }, fa.D = function () {
    return re(this, 0)
  }, fa.U = function (t) {
    var n, e;
    n = re(this, t);
    try {
      return B(n.b != n.d.c), n.c = n.b, n.b = n.b.a, ++n.a, e = n.c.c, oe(n), e
    } catch (i) {
      if (i = z(i), s(i, 38)) throw new tt("Can't remove element " + t);
      throw V(i)
    }
  }, m(167), i(6, 166, ya, cn), fa.S = function (t, n) {
    rn(this, t, n)
  }, fa.F = function (t) {
    return an(this, t)
  }, fa.G = function (t) {
    return on(this, t)
  }, fa.H = function (t) {
    return -1 != hn(this, t)
  }, fa.T = function (t) {
    return un(this, t)
  }, fa.I = function () {
    return 0 == this.b.length
  }, fa.U = function (t) {
    return sn(this, t)
  }, fa.J = function () {
    return this.b.length
  }, fa.K = function () {
    return U(this.b, this.b.length)
  }, fa.L = function (t) {
    return ln(this, t)
  }, m(6), i(148, 1, {}, function () {}), m(148), i(146, 10, pa, wn), m(146), i(72, 10, pa, vn), m(72), i(126, 163, Ta, En), fa.N = function (t) {
    return On(this.a, t)
  }, fa.O = function () {
    return new yn(this)
  }, fa.P = function (t) {
    return pn(this, t)
  }, fa.J = function () {
    return this.a.c
  }, m(126), i(68, 165, Ea, yn), fa.H = function (t) {
    return !!s(t, 16) && Ot(this.a, t)
  }, fa.D = function () {
    return new Nn(this.a)
  }, fa.J = function () {
    return this.a.a.c
  }, m(68), i(69, 1, {}, Nn), fa.Q = function () {
    return In(this.a)
  }, fa.R = function () {
    return this.b = Sn(this.a), new Cn(this.c, this.b)
  }, m(69), i(70, 169, {
    16: 1
  }, Cn), fa.W = function () {
    return this.a
  }, fa.X = function () {
    return this.b.b[this.a.b]
  }, fa.Y = function (t) {
    return Tn(this.b, this.a.b, t)
  }, m(70), i(171, 165, Ea), m(171), i(137, 171, Ea, An), fa.F = function (t) {
    return _n(this, t)
  }, fa.H = function (t) {
    return On(this, t)
  }, fa.D = function () {
    return new Ln(this)
  }, fa.J = function () {
    return this.c
  }, fa.c = 0, m(137), i(71, 1, {}, Ln), fa.Q = function () {
    return In(this)
  }, fa.R = function () {
    return Sn(this)
  }, fa.a = -1, fa.b = -1, m(71), i(13, 89, {
    3: 1
    , 30: 1
  }, Jn), m(13), i(14, 165, {
    3: 1
    , 17: 1
  }, Mn), fa.F = function (t) {
    return Dn(this, t)
  }, fa.H = function (t) {
    return kn(this, t)
  }, fa.I = function () {
    return 0 == this.a.b
  }, fa.D = function () {
    return Yt(new Wt(this.a))
  }, fa.J = function () {
    return this.a.b
  }, fa.tS = function () {
    return _t(new Wt(this.a))
  }, m(14), i(67, 1, {}, Hn), fa.Z = function () {
    return Object.create(null)
  }, fa.$ = function () {
    return new jn(this)
  }, m(67), i(124, 1, {}, jn), fa.Q = function () {
    return Fn(this)
  }, fa.R = function () {
    return B(Fn(this)), this.e = this.a[this.c++], this.e
  }, fa.b = -1, fa.c = 0, fa.e = null, m(124), i(122, 67, {}, $n), fa.Z = function () {
    return {}
  }, fa.$ = function () {
    var t, n = this._()
      , e = this.a;
    for (t in e)
      if (t == parseInt(t, 10))
        for (var i = e[t], r = 0, a = i.length; r < a; ++r) n.F(i[r]);
    return n.D()
  }, fa._ = function () {
    return new Qn(this)
  }, m(122), i(123, 6, ya, Qn), fa.U = function (t) {
    t = sn(this, t);
    t: {
      var n, e, i, r, a = this.a
        , o = t.W();
      for (i = null == o ? "0" : "" + ~~u(o), n = a.a[i] || [], r = 0; r < n.length; r++)
        if (e = n[r], xn(o, e.W())) {
          1 == n.length ? delete a.a[i] : n.splice(r, 1)
            , a = a.b, --a.b, gn(a), e.X();
          break t
        }
    }
    return t
  }, m(123), i(119, 1, {}, Gn), fa.ab = function () {
    return new Hn
  }, fa.bb = function () {
    return new Vn
  }, m(119);
  var Ga;
  i(121, 119, {}, Yn), fa.bb = function () {
    return new ne
  }, m(121), i(120, 119, {}, Wn), fa.ab = function () {
    return new $n
  }, fa.bb = function () {
    return new Zn
  }, m(120), i(49, 1, {}, Vn), fa.cb = function () {
    return Object.create(null)
  }, fa.$ = function () {
    var t;
    return t = this.eb(), new zn(this, t)
  }, fa.db = function (t) {
    return this.a[t]
  }, fa.eb = function () {
    return Object.getOwnPropertyNames(this.a)
  }, fa.fb = function (t) {
    return new Xn(this, t)
  }, fa.gb = function (t, n) {
    return qn(this, t, n)
  }, fa.hb = function (t) {
    return Kn(this, t)
  }, m(49), i(105, 1, {}, zn), fa.Q = function () {
    return this.a < this.c.length
  }, fa.R = function () {
    return B(this.a < this.c.length), new Xn(this.b, this.c[this.a++])
  }, fa.a = 0, m(105), i(62, 169, {
    16: 1
  }, Xn), fa.W = function () {
    return this.b
  }, fa.X = function () {
    return this.a.db(this.b)
  }, fa.Y = function (t) {
    return this.a.gb(this.b, t)
  }, m(62), i(102, 49, {}, Zn), fa.cb = function () {
    return {}
  }, fa.$ = function () {
    var t, n = this.ib();
    for (t in this.a)
      if (58 == t.charCodeAt(0)) {
        var e = this.fb(t.substring(1));
        n.F(e)
      }
    return n.D()
  }, fa.db = function (t) {
    return this.a[":" + t]
  }, fa.ib = function () {
    return new te(this)
  }, fa.gb = function (t, n) {
    return qn(this, ":" + t, n)
  }, fa.hb = function (t) {
    return Kn(this, ":" + t)
  }, m(102), i(104, 6, ya, te), fa.U = function (t) {
    var n;
    return n = sn(this, t), Kn(this.a, ":" + n.W()), n
  }, m(104), i(103, 49, {}, ne), fa.eb = function () {
    var t;
    return t = Object.getOwnPropertyNames(this.a), void 0 !== this.a.__proto__ && (t[t.length] = "__proto__"), t
  }, m(103), i(59, 167, ya, ae), fa.F = function (t) {
    return ee(this, t)
  }, fa.J = function () {
    return this.b
  }, fa.b = 0, m(59), i(91, 1, {}, ue), fa.Q = function () {
    return this.b != this.d.c
  }, fa.R = function () {
    return B(this.b != this.d.c), this.c = this.b, this.b = this.b.a, ++this.a, this.c.c
  }, fa.V = function () {
    oe(this)
  }, fa.a = 0, fa.c = null, m(91), i(46, 1, {}, he), m(46);
  var Ua = E();
  i(38, 10, {
    3: 1
    , 7: 1
    , 5: 1
    , 38: 1
  }, se), m(38), i(127, 166, ya), fa.S = function (t, n) {
    fe(t, this.a.b.length + 1), rn(this.a, t, n)
  }, fa.F = function (t) {
    return an(this.a, t)
  }, fa.G = function (t) {
    return on(this.a, t)
  }, fa.H = function (t) {
    return -1 != hn(this.a, t)
  }, fa.T = function (t) {
    return fe(t, this.a.b.length), un(this.a, t)
  }, fa.I = function () {
    return 0 == this.a.b.length
  }, fa.D = function () {
    return new $t(this.a)
  }, fa.U = function (t) {
    return fe(t, this.a.b.length), this.a.U(t)
  }, fa.J = function () {
    return this.a.b.length
  }, fa.K = function () {
    var t = this.a;
    return U(t.b, t.b.length)
  }, fa.L = function (t) {
    return ln(this.a, t)
  }, fa.tS = function () {
    return _t(this.a)
  }, m(127), i(128, 127, ya, be), m(128), i(75, 172, {
    3: 1
    , 30: 1
  }, me), fa.O = function () {
    return new Ee(this)
  }, fa.J = function () {
    return this.b
  }, fa.b = 0, m(75), i(52, 1, {}, Te), fa.Q = function () {
    return this.a.Q()
  }, fa.R = function () {
    return this.a.R()
  }, m(52), i(77, 76, Ea, Ee), m(77), i(41, 35, {
    34: 1
    , 35: 1
    , 16: 1
    , 41: 1
  }, ye), fa.b = !1;
  var Ya = m(41);
  i(140, 1, {}, Ne), fa.tS = function () {
    return "State: mv=" + this.c + " value=" + this.d + " done=" + this.a + " found=" + this.b
  }, fa.a = !1, fa.b = !1, fa.c = !1, m(140), i(18, 11, Na, _e), fa.jb = function () {
    return !1
  }, fa.kb = function () {
    return !1
  };
  var Wa, qa, Ka, Va, za = T(18, function () {
    return Ce(), q(y(za, 1), ma, 18, 0, [Wa, qa, Ka, Va])
  });
  i(141, 18, Na, Oe), fa.kb = function () {
    return !0
  }, T(141, null), i(142, 18, Na, Ae), fa.jb = function () {
    return !0
  }, fa.kb = function () {
    return !0
  }, T(142, null), i(143, 18, Na, Re), fa.jb = function () {
    return !0
  }, T(143, null), i(73, 165, {
    3: 1
    , 17: 1
  }, Ie), fa.F = function (t) {
    var n = this.a
      , e = (et(), Ma);
    return t = new ye(t, e), e = new Ne, n.a = we(n, n.a, t, e), e.b || ++n.b, n.a.b = !1, null == e.d
  }, fa.H = function (t) {
    return !!de(this.a, t)
  }, fa.D = function () {
    return Zt(new tn(this.a))
  }, fa.J = function () {
    return this.a.b
  }, m(73), i(80, 1, {}, Le), m(80), i(81, 1, {}, xe), m(81), i(160, 1, {}, function () {}), m(160), i(82, 1, {}, Ge), fa.lb = function () {}, fa.mb = function (t) {
    switch (t.nodeType) {
    case 3:
      return an(this.a, t), !1;
    case 1:
      return !!Be(t) && (an(this.a, t), !0);
    default:
      return !1
    }
  }, m(82), i(43, 1, {}, Ye), m(43), i(99, 1, {}, qe), fa.nb = function () {
    var t, n;
    if (t = new ti, null == this.d) {
      var e;
      if (this.d = "", n = this.j.querySelector(".dateline")) this.d = n.textContent;
      else
        for (n = 0; n < this.a.length; n++)
          if (e = this.a[n], ft(e.name, "displaydate")) {
            this.d = e.content;
            break
          }
    }
    return t.d = this.d, null == this.b && We(this), n = this.b, t.a = n.length ? q(y($a, 1), ma, 2, 4, [n]) : W($a, 2, 0, 4), t
  }, fa.ob = function () {
    return null == this.b && We(this), this.b
  }, fa.pb = function () {
    if (null == this.c) {
      var t, n;
      for (this.c = "", t = 0; t < this.a.length; t++)
        if (n = this.a[t], ft(n.name, "copyright")) {
          this.c = n.content;
          break
        }
    }
    return this.c
  }, fa.qb = function () {
    return ""
  }, fa.rb = function () {
    if (!this.f) {
      var t, n, e, i, r;
      for (this.f = new cn, t = this.j.getElementsByTagName("IMG"), e = 0; e < t.length; e++) {
        r = t[e];
        var a = i = n = void 0
          , o = void 0;
        if (n = void 0, n = G(r), ft("FIGURE", n.tagName)) {
          if (i = n.getElementsByTagName("FIGCAPTION"), o = i.length, n = "", 0 < o && 2 >= o)
            for (a = 0; a < o && !n.length; a++) n = i[a].innerText
        } else n = "";
        (i = null != n && n.length) || (i = i = void 0, i = r.width, 400 > i ? i = !1 : (i /= r.height, i = 1.3 <= i && 3 >= i)), i && (i = new ni, i.e = r.src, i.a = n, i.f = r.width, i.b = r.height, an(this.f, i))
      }
    }
    return ln(this.f, W(no, 19, this.f.b.length, 0))
  }, fa.sb = function () {
    if (null == this.i) {
      var t, n, e;
      for (this.i = "", t = this.j.getElementsByTagName("*"), e = 0; e < t.length && !this.i.length; e++) n = t[e], this.i = Q(n, "publisher"), !this.i.length && (this.i = Q(n, "source_organization"))
    }
    return this.i
  }, fa.tb = function () {
    if (null == this.k) {
      var t, n;
      if (this.k = "", 0 != this.a.length && (t = this.j.getElementsByTagName("TITLE"), 0 != t.length))
        for (t = 0; t < this.a.length; t++)
          if (n = this.a[t], ft(n.name, "title")) {
            this.k = n.content;
            break
          }
    }
    return this.k
  }, fa.ub = function () {
    return ""
  }, fa.vb = function () {
    return ""
  }, fa.wb = function () {
    if (!this.e) {
      var t, n;
      for (this.e = !0, t = 0; t < this.a.length; t++)
        if (n = this.a[t], ft(n.name, "IE_RM_OFF")) {
          this.g = ft(n.content, "true");
          break
        }
    }
    return this.g
  }, fa.a = null, fa.b = null, fa.c = null, fa.d = null, fa.e = !1, fa.f = null, fa.g = !1, fa.i = null, fa.j = null, fa.k = null, m(99);
  var Xa = 0
    , Za = ""
    , to = !1;
  i(86, 1, {}, Ze), m(86), i(44, 1, {}, ti), fa.a = null, fa.b = "", fa.c = "", fa.d = "", fa.e = "", m(44), i(19, 1, {
    19: 1
  }, ni), fa.a = "", fa.b = 0, fa.c = "", fa.d = "", fa.e = "", fa.f = 0;
  var no = m(19);
  i(147, 1, {}, ei), fa.lb = function () {
    this.a.U(this.a.b.length - 1), this.d.U(this.d.b.length - 1)
  }, fa.mb = function (t) {
    if (!this.b.a) return !1;
    if (an(this.a, t), an(this.d, null), 1 == this.d.b.length) {
      this.c = new ai(t);
      var n = this.d
        , e = this.c;
      H(0, n.b.length), n.b[0] = e
    }
    if (wi(this.b, t))
      for (t = 0; t < this.a.b.length; t++)
        if (null == un(this.d, t)) {
          var n = this.d
            , e = t
            , i = new ai(un(this.a, t));
          H(e, n.b.length), n.b[e] = i, n = un(this.d, t - 1), e = un(this.d, t), ee(n.a, e)
        }
    return !0
  }, m(147), i(51, 1, {}, ai), m(51), i(94, 1, {}, hi), fa.nb = function () {
    var t;
    t = new ti, t.d = Jt(this.f, "published_time") ? xt(this.f, "published_time") : "", t.c = Jt(this.f, "modified_time") ? xt(this.f, "modified_time") : "", t.b = Jt(this.f, "expiration_time") ? xt(this.f, "expiration_time") : "", t.e = Jt(this.f, "section") ? xt(this.f, "section") : "";
    var n;
    return n = this.a, n = ln(n.a, W($a, 2, n.a.b.length, 4)), t.a = n, t.e.length || t.d.length || t.c.length || t.b.length || 0 != t.a.length ? t : null
  }, fa.ob = function () {
    var t, n = this.f;
    return this.d.b ? (t = n.c.db("first_name"), null == t && (t = ""), n = n.c.db("last_name"), null != n && t.length && n.length && (t += " "), t += n) : t = "", t
  }, fa.pb = function () {
    return ""
  }, fa.qb = function () {
    return Jt(this.f, "description") ? xt(this.f, "description") : ""
  }, fa.rb = function () {
    return li(this.b)
  }, fa.sb = function () {
    return Jt(this.f, "site_name") ? xt(this.f, "site_name") : ""
  }, fa.tb = function () {
    return Jt(this.f, "title") ? xt(this.f, "title") : ""
  }, fa.ub = function () {
    var t;
    return t = Jt(this.f, "type") ? xt(this.f, "type") : "", ft(t, "article") ? "Article" : ""
  }, fa.vb = function () {
    return Jt(this.f, "url") ? xt(this.f, "url") : ""
  }, fa.wb = function () {
    return !1
  };
  var eo, io, ro;
  m(94), i(97, 1, {}, si), fa.xb = function (t, n, e) {
    return this.b || (e = e.c.db("type"), this.b = null != e && ft(e, "article")), !!this.b && ("author" !== t || (an(this.a, n), !1))
  }, fa.b = !1, m(97), i(95, 1, {}, ci), fa.xb = function (t, n) {
    var e, i;
    if ("image" === t) i = W($a, 2, this.b.length, 4), i[0] = n, an(this.a, i);
    else
      for (0 == this.a.b.length ? (i = W($a, 2, this.b.length, 4), an(this.a, i)) : i = un(this.a, this.a.b.length - 1), e = 1; e < this.b.length; e++)
        if (t === this.b[e]) {
          i[e] = n;
          break
        } return !1
  }, m(95), i(28, 11, {
    3: 1
    , 15: 1
    , 11: 1
    , 28: 1
  }, bi);
  var ao, oo, uo, ho = T(28, function () {
    return fi(), q(y(ho, 1), ma, 28, 0, [oo, uo, ao])
  });
  i(96, 1, {}, di), fa.xb = function (t, n, e) {
    return this.a || (t = e.c.db("type"), this.b = null != t && ft(t, "profile"), this.a = !0), this.b
  }, fa.a = !1, fa.b = !1, m(96), i(9, 1, {
    9: 1
  }, gi), fa.a = null, fa.b = null;
  var so = m(9);
  i(74, 1, {}, vi), m(74);
  var lo, co, fo, bo, go, wo, vo, po, mo, To, Eo;
  i(85, 1, {}, Ei), fa.b = -1, fa.d = 0, m(85), i(106, 1, {}, _i), fa.a = "";
  var yo, No;
  m(106), i(29, 1, {}), m(29), i(108, 29, {}, Si), m(108), i(107, 29, {}, Li), m(107), i(110, 29, {}, xi), m(110), i(109, 29, {}, Ji), m(109), i(22, 11, {
    3: 1
    , 15: 1
    , 11: 1
    , 22: 1
  }, ki);
  var Co, _o, Oo, Ao, Ro, Io = T(22, function () {
    return Di(), q(y(Io, 1), ma, 22, 0, [_o, Co, Ao, Oo, Ro])
  });
  i(111, 29, {}, Mi), m(111), i(98, 1, {}, Pi), fa.nb = function () {
    var t;
    if (t = Ni(this.a), 0 == t.b.length) t = null;
    else {
      H(0, t.b.length), t = t.b[0];
      var n, e;
      n = new ti, n.d = Jt(t.b, "datePublished") ? xt(t.b, "datePublished") : "", n.c = Jt(t.b, "dateModified") ? xt(t.b, "dateModified") : "", n.e = Jt(t.b, "articleSection") ? xt(t.b, "articleSection") : "", e = Ii(t, "author"), !e.length && (e = Ii(t, "creator")), n.a = e.length ? q(y($a, 1), ma, 2, 4, [e]) : W($a, 2, 0, 4), t = n
    }
    return t
  }, fa.ob = function () {
    var t, n;
    return n = "", t = Ni(this.a), 0 != t.b.length && (H(0, t.b.length), t = t.b[0], n = Ii(t, "author"), !n.length && (n = Ii(t, "creator"))), n.length ? n : this.a.a
  }, fa.pb = function () {
    var t;
    return t = Ni(this.a), 0 == t.b.length ? t = "" : (H(0, t.b.length), t = t.b[0], t = Oi(Jt(t.b, "copyrightYear") ? xt(t.b, "copyrightYear") : "", Ii(t, "copyrightHolder")), t = t.length ? "Copyright " + t : t), t
  }, fa.qb = function () {
    var t;
    return t = Ni(this.a), 0 == t.b.length ? "" : Ai((H(0, t.b.length), t.b[0]), "description")
  }, fa.rb = function () {
    var t, n, e, i, r, a, o, u;
    for (o = new cn, n = Ni(this.a), e = null, i = 0; i < n.b.length; i++)
      if (H(i, n.b.length), t = n.b[i], e || (r = Jt(t.a, "associatedMedia") ? xt(t.a, "associatedMedia") : null, !r && (r = Jt(t.a, "encoding") ? xt(t.a, "encoding") : null), !(e = r && r.c == (Di(), _o) ? r : null))) {
        var h = a = void 0
          , h = Jt(t.b, "image") ? xt(t.b, "image") : "";
        h.length ? (a = new ni, a.e = h, t = a) : t = null, t && (o.b[o.b.length] = t)
      }
    for (i = this.a, n = new cn, t = 0; t < i.c.b.length; t++) r = un(i.c, t), r.c == (Di(), _o) && an(n, r);
    for (i = !1, r = 0; r < n.b.length; r++) H(r, n.b.length), a = n.b[r], u = new ni, u.e = Jt(a.b, "contentUrl") ? xt(a.b, "contentUrl") : "", !u.e.length && (u.e = Jt(a.b, "url") ? xt(a.b, "url") : ""), u.d = Jt(a.b, "encodingFormat") ? xt(a.b, "encodingFormat") : "", u.a = Jt(a.b, "caption") ? xt(a.b, "caption") : "", u.f = Ke(Jt(a.b, "width") ? xt(a.b, "width") : ""), u.b = Ke(Jt(a.b, "height") ? xt(a.b, "height") : ""), t = u, a == e || !i && ft(Jt(a.b, "representativeOfPage") ? xt(a.b, "representativeOfPage") : "", "true") ? (i = !0, j(0, o.b.length), o.b.splice(0, 0, t)) : o.b[o.b.length] = t;
    return ln(o, W(no, 19, o.b.length, 0))
  }, fa.sb = function () {
    var t, n;
    return n = "", t = Ni(this.a), 0 != t.b.length && (H(0, t.b.length), t = t.b[0], n = Ii(t, "publisher"), !n.length && (n = Ii(t, "copyrightHolder"))), n
  }, fa.tb = function () {
    var t, n, e;
    for (e = "", t = Ni(this.a), n = 0; n < t.b.length && !e.length; n++) e = Ai((H(n, t.b.length), t.b[n]), "headline");
    for (n = 0; n < t.b.length && !e.length; n++) e = Ai((H(n, t.b.length), t.b[n]), "name");
    return e
  }, fa.ub = function () {
    return 0 == Ni(this.a)
      .b.length ? "" : "Article"
  }, fa.vb = function () {
    var t;
    return t = Ni(this.a), 0 == t.b.length ? "" : Ai((H(0, t.b.length), t.b[0]), "url")
  }, fa.wb = function () {
    return !1
  }, m(98);
  var So;
  i(84, 1, {}, $i), fa.yb = function (t) {
    return (t = t.match(/(\S*[\w\u00C0-\u1FFF]\S*)/g)) ? t.length : 0
  }, m(84), i(56, 1, {}, Qi), fa.yb = function (t) {
    var n = t.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g)
      , e = n ? n.length : 0
      , n = t.match(/([\u3040-\uA4CF])/g);
    return e += Math.ceil(.55 * (n ? n.length : 0))
  }, m(56), i(83, 1, {}, Gi), fa.yb = function (t) {
    return (t = t.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g)) ? t.length : 0
  }, m(83);
  var Lo, xo, Jo, Do, ko;
  i(8, 11, {
    3: 1
    , 15: 1
    , 11: 1
    , 8: 1
  }, zi);
  var Mo, Po, Bo, Ho, Fo, jo, $o, Qo, Go, Uo, Yo, Wo, qo, Ko, Vo, zo, Xo, Zo, tu, nu, eu, iu = T(8, function () {
    return Vi(), q(y(iu, 1), ma, 8, 0, [Qo, tu, Zo, Ho, Po, Mo, Xo, qo, nu, zo, Yo, Uo, Vo, Bo, jo, Ko, Go, $o, Wo, Fo, eu])
  });
  i(39, 11, {
    3: 1
    , 15: 1
    , 11: 1
    , 39: 1
  }, Zi);
  var ru, au, ou = T(39, function () {
    return Xi(), q(y(ou, 1), ma, 39, 0, [ru, au])
  });
  i(50, 1, {}, hr), fa.tS = function () {
    return ur(this)
  }, fa.a = !1, fa.c = 0, fa.d = 0, fa.e = 0, fa.f = 0, m(50), i(60, 1, {}, sr), m(60), i(112, 1, {}, cr), fa.zb = function (t) {
    var n;
    return kn(uu, t.tagName) ? (n = "", "IMG" === t.tagName && (n = t.src), t = new zr(t, n)) : t = null, t
  }, fa.Ab = function () {
    return uu
  };
  var uu;
  m(112), i(113, 1, {}, gr), fa.zb = function (t) {
    var n;
    return t && kn(hu, t.tagName) ? (n = null, "BLOCKQUOTE" === t.tagName ? n = br(t) : "IFRAME" === t.tagName && (n = dr(t)), n && 2 <= Xa && (ze("Twitter embed extracted:"), ze("    ID: " + n.b)), t = n) : t = null, t
  }, fa.Ab = function () {
    return hu
  };
  var hu;
  m(113), i(114, 1, {}, pr), fa.zb = function (t) {
    return vr(t)
  }, fa.Ab = function () {
    return su
  };
  var su;
  m(114), i(115, 1, {}, Er), fa.zb = function (t) {
    return Tr(t)
  }, fa.Ab = function () {
    return lu
  };
  var lu;
  m(115);
  var cu;
  i(64, 1, {}, Or), fa.tS = function () {
    return d(du), du.n + ": postFiltering=" + this.a
  }, fa.a = !1;
  var fu, bu, du = m(64);
  i(116, 1, {}, Sr);
  var gu;
  m(116), i(66, 1, {}, xr), fa.a = !1;
  var wu;
  m(66), i(118, 1, {}, kr), fa.a = !1, fa.b = !1, fa.c = !1, fa.e = 0, fa.f = 0, m(118), i(63, 1, {}, Br), fa.a = !1, fa.b = !1, fa.c = !1, fa.d = 0, fa.e = 0, m(63), i(65, 1, {}, Fr);
  var vu;
  m(65), i(117, 1, {}, $r);
  var pu;
  m(117), i(101, 1, {}, Gr), fa.lb = function () {
    var t, n = this.a;
    t = n.a;
    var e;
    if (e = t.a.b.length, !(0 < e)) throw new vn;
    if (fe(e - 1, t.a.b.length), t = un(t.a, e - 1), t.a && --n.f, (n.c || t.b) && (qr(n, n.d), ++n.d), t.c && (t = n.g, t.e = !1, t.j += " "), n = n.a, t = n.a.b.length, !(0 < t)) throw new vn;
    fe(t - 1, n.a.b.length), n.a.U(t - 1)
  }, fa.mb = function (t) {
    switch (t.nodeType) {
    case 3:
      var n = this.a;
      n.c && (qr(n, n.d), ++n.d, n.c = !1);
      var e, i = n.g
        , n = n.f;
      return e = t.data, e.length && (i.j += e, an(i.a, t), Hi(e) || (Bi(), t = So.yb(e), i.i += t, i.e && (i.g += t), i.f = i.a.b.length - 1, i.d < i.c && (i.d = i.f), -1 == i.b && (i.b = n))), !1;
    case 1:
      return Qr(this, t);
    default:
      return !1
    }
  }, m(101), i(135, 1, {}, Yr), fa.a = !1, fa.b = !1, fa.c = !1;
  var mu;
  m(135), i(92, 1, {}, Wr), m(92), i(100, 1, {}, Kr), fa.c = !1, fa.d = 0, fa.e = 0, fa.f = 0, m(100), i(168, 1, {}), fa.p = !1, m(168), i(40, 168, {}, Vr), fa.Bb = function (t) {
    var n;
    return t ? "" : (t = ga.createElement("div"), n = ga.createElement("div"), n.className = "embed-placeholder", n.setAttribute("data-type", this.c), n.setAttribute("data-id", this.b), t.appendChild(n), t.innerHTML)
  }, m(40), i(36, 168, {
    36: 1
  }, zr), fa.Bb = function (t) {
    var n;
    return t ? "" : (t = ga.createElement("div"), n = this.a.cloneNode(!1), je(n), t.appendChild(n), t.innerHTML)
  }, m(36), i(138, 168, {}, Xr), fa.Bb = function (t) {
    var n, e = this.a;
    if (n = new cn, Ue(new Ye(new Ge(n)), e), e = n, 0 == e.b.length) t = "";
    else {
      n = new ei(e);
      var i, r = (H(0, e.b.length), e.b[0]);
      for (i = r.parentNode; i && 9 != i.nodeType; r = i, i = i.parentNode);
      for (Ue(new Ye(n), r), n = n.c, H(0, e.b.length), e = e.b[0]; 1 == n.a.b && n.b != e && 3 != en(n.a, 0)
        .b.nodeType;) n = en(n.a, 0);
      e = ri(n), 1 != e.nodeType ? t = "" : (Qe(e, "ID", q(y($a, 1), ma, 2, 4, ["*"])), He(e), Qe(e, "COLOR", q(y($a, 1), ma, 2, 4, ["FONT"])), Qe(e, "BGCOLOR", q(y($a, 1), ma, 2, 4, ["TABLE", "TR", "TD", "TH"])), Qe(e, "STYLE", q(y($a, 1), ma, 2, 4, ["*"])), t ? (ga.body.appendChild(e), t = e.innerText, ga.body.removeChild(e)) : t = e.outerHTML)
    }
    return t
  }, m(138), i(24, 168, {
    24: 1
  }, na), fa.Bb = function (t) {
    var n, e;
    if (kn(this.e, "de.l3s.boilerpipe/TITLE")) return "";
    var i, r = new Ut(this.a, this.k, this.b);
    if (1 == r.b) n = ii(new ai((H(0, r.b), un(r.c, r.a))));
    else {
      for (H(0, r.b), e = un(r.c, r.a), n = e.cloneNode(!1), r = new vi(r); r.a;)
        if (wi(r, e)) {
          if (!r.a) break;
          for (;;) {
            for (i = e.nextSibling; i && !i.contains(r.a);) i = i.nextSibling;
            if (i) {
              n = er(n, e.parentNode), n = tr(n, i), e = i;
              break
            }
            e = e.parentNode, n = er(n, e)
          }
        } else {
          for (e = e.firstChild; !e.contains(r.a);) e = e.nextSibling;
          n = tr(n, e)
        }
      for (; n.parentNode;) n = n.parentNode
    }
    return 1 != n.nodeType && (e = G(Gt(new Ut(this.a, this.k, this.b), 0))
      .cloneNode(!1), e.appendChild(n), n = e), He(n), Qe(n, "ID", q(y($a, 1), ma, 2, 4, ["*"])), Qe(n, "COLOR", q(y($a, 1), ma, 2, 4, ["FONT"])), t ? n.textContent : n.outerHTML
  }, fa.b = 0, fa.c = 0, fa.d = 0, fa.f = 0, fa.g = 0, fa.i = 0, fa.j = 0, fa.k = 0, fa.n = 0, m(24), i(129, 1, {}, ia), fa.b = -1, fa.c = 0, fa.d = -1, fa.e = !1, fa.f = 0, fa.g = 0, fa.i = 0, fa.j = "", m(129), i(134, 168, {}, ra), fa.Bb = function (t) {
    var n, e, i;
    if (t) return "";
    for (t = ga.createElement("div"), i = this.a.cloneNode(!1), e = 0; e < this.a.childNodes.length; e++) n = this.a.childNodes[e], 1 != n.nodeType || "SOURCE" !== n.tagName && "TRACK" !== n.tagName || (n = n.cloneNode(!1), i.appendChild(n));
    return i.poster.length && (i.poster = i.poster), Fe(i), Qe(i, "ID", q(y($a, 1), ma, 2, 4, ["*"])), t.appendChild(i), t.innerHTML
  }, m(134), i(170, 1, {}), fa.Db = function (t) {
    var n;
    return n = 0, t && (n = this.Cb(t)), 2 <= Xa && ze(w(this.cZ) + ": " + n + "/" + this.Eb()), st(n, this.Eb())
  }, m(170), i(130, 170, {}, aa), fa.Cb = function (t) {
    return t = (0 | (t.offsetWidth || 0)) * (0 | (t.offsetHeight || 0)), t < this.c ? 0 : (t = b((t - this.c) / (this.a - this.c) * this.b), st(t, this.b))
  }, fa.Eb = function () {
    return this.b
  }, fa.a = 0, fa.b = 0, fa.c = 0, m(130), i(131, 170, {}, oa), fa.Cb = function (t) {
    var n, e;
    return n = 0 | (t.offsetHeight || 0), 0 >= n ? 0 : (e = 0 | (t.offsetWidth || 0), t = 0, n = e / n, 1.4500000476837158 < n && 1.7999999523162842 > n ? t = 1 : 1.2999999523162842 < n && 2.200000047683716 > n && (t = .4000000059604645), b(this.a * t))
  }, fa.Eb = function () {
    return this.a
  }, fa.a = 0, m(131), i(132, 170, {}, ua), fa.Cb = function (t) {
    var n;
    return this.a ? (t = ke(this.a)
      .b.length - 1 - (ke(De(this.a, t))
        .b.length - 1), n = 0, 4 > t ? n = 1 : 6 > t ? n = .6000000238418579 : 8 > t && (n = .20000000298023224), b(this.b * n)) : 0
  }, fa.Eb = function () {
    return this.b
  }, fa.b = 0, m(132), i(133, 170, {}, ha), fa.Cb = function (t) {
    var n;
    for (t = ke(t), n = new $t(t); n.b < n.d.J();)
      if (B(n.b < n.d.J()), t = n.d.T(n.c = n.b++), 1 == t.nodeType && "FIGURE" === t.tagName) return this.a;
    return 0
  }, fa.Eb = function () {
    return this.a
  }, fa.a = 0, m(133);
  var Tu, Eu;
  Eu = p("I"), Eu.k = "I", Eu.f = 1, Tu = Eu, m(151), m(153), m(null), m(156), Ua = E(), fa = function (t) {
    var n = this;
    if ("$wnd" == t) return da;
    if ("" === t) return n;
    "$wnd." == t.substring(0, 5) && (n = da, t = t.substring(5)), t = t.split("."), t[0] in n || !n.execScript || n.execScript("var " + t[0]);
    for (var e; t.length && (e = t.shift());) n = n[e] ? n[e] : n[e] = {};
    return n
  }("org.chromium.distiller.DomDistiller"), fa.apply = function () {
    var t;
    return Je(t = {})
  }, fa.applyWithOptions = Je;
  var yu = yu = function (t, n, e) {
    function i() {
      for (var t = 0; t < r.length; t++) r[t]()
    }
    null == ba && (ba = []);
    var r = ba;
    if (la = n, ca = e, t) try {
      sa(i)()
    } catch (a) {
      t(n, a)
    } else sa(i)()
  };
  ! function () {
    null == ba && (ba = []);
    for (var t = ba, n = 0; n < arguments.length; n++) t.push(arguments[n])
  }(function () {
    da.setTimeout(sa(X));
    var t, n, e;
    for (n = ga.compatMode, t = q(y($a, 1), ma, 2, 4, ["CSS1Compat"]), e = 0; e < t.length && t[e] !== n; e++);
  });
  var Nu = [[["locale", "default"], ["user.agent", "safari"]]];
  "object" == typeof window && "object" == typeof window.$gwt && (window.$gwt.permProps = Nu), window.gwtOnLoad = yu, yu(void 0, "domdistiller", "", 0)
}();
