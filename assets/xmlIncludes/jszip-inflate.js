if (!JSZip) throw "JSZip not defined";
! function () {
  function r() {
    this.next = null, this.list = null
  }

  function t() {
    this.e = 0, this.b = 0, this.n = 0, this.t = null
  }

  function n(n, e, i, o, f, s) {
    this.BMAX = 16, this.N_MAX = 288, this.status = 0, this.root = null, this.m = 0;
    var u, l, a, h, A, w, c, b, m, y, d, v, g, p, B, M, X, E = new Array(this.BMAX + 1)
      , S = new Array(this.BMAX + 1)
      , k = new t
      , J = new Array(this.BMAX)
      , Z = new Array(this.N_MAX)
      , x = new Array(this.BMAX + 1);
    for (X = this.root = null, w = 0; w < E.length; w++) E[w] = 0;
    for (w = 0; w < S.length; w++) S[w] = 0;
    for (w = 0; w < J.length; w++) J[w] = null;
    for (w = 0; w < Z.length; w++) Z[w] = 0;
    for (w = 0; w < x.length; w++) x[w] = 0;
    l = e > 256 ? n[256] : this.BMAX, m = n, y = 0, w = e;
    do E[m[y]]++, y++; while (--w > 0);
    if (E[0] == e) return this.root = null, this.m = 0, void(this.status = 0);
    for (c = 1; c <= this.BMAX && 0 == E[c]; c++);
    for (b = c, s < c && (s = c), w = this.BMAX; 0 != w && 0 == E[w]; w--);
    for (h = w, s > w && (s = w), p = 1 << c; c < w; c++, p <<= 1)
      if ((p -= E[c]) < 0) return this.status = 2, void(this.m = s);
    if ((p -= E[w]) < 0) return this.status = 2, void(this.m = s);
    for (E[w] += p, x[1] = c = 0, m = E, y = 1, g = 2; --w > 0;) x[g++] = c += m[y++];
    m = n, y = 0, w = 0;
    do 0 != (c = m[y++]) && (Z[x[c]++] = w); while (++w < e);
    for (e = x[h], x[0] = w = 0, m = Z, y = 0, A = -1, v = S[0] = 0, d = null, B = 0; b <= h; b++)
      for (u = E[b]; u-- > 0;) {
        for (; b > v + S[1 + A];) {
          if (v += S[1 + A], A++, B = (B = h - v) > s ? s : B, (a = 1 << (c = b - v)) > u + 1)
            for (a -= u + 1, g = b; ++c < B && !((a <<= 1) <= E[++g]);) a -= E[g];
          for (v + c > l && v < l && (c = l - v), B = 1 << c, S[1 + A] = c, d = new Array(B), M = 0; M < B; M++) d[M] = new t;
          X = null == X ? this.root = new r : X.next = new r, X.next = null, X.list = d, J[A] = d, A > 0 && (x[A] = w, k.b = S[A], k.e = 16 + c, k.t = d, c = (w & (1 << v) - 1) >> v - S[A], J[A - 1][c].e = k.e, J[A - 1][c].b = k.b, J[A - 1][c].n = k.n, J[A - 1][c].t = k.t)
        }
        for (k.b = b - v, y >= e ? k.e = 99 : m[y] < i ? (k.e = m[y] < 256 ? 16 : 15, k.n = m[y++]) : (k.e = f[m[y] - i], k.n = o[m[y++] - i]), a = 1 << b - v, c = w >> v; c < B; c += a) d[c].e = k.e, d[c].b = k.b, d[c].n = k.n, d[c].t = k.t;
        for (c = 1 << b - 1; 0 != (w & c); c >>= 1) w ^= c;
        for (w ^= c;
          (w & (1 << v) - 1) != x[A];) v -= S[A], A--
      }
    this.m = S[1], this.status = 0 != p && 1 != h ? 1 : 0
  }

  function e() {
    return Z.length == x ? -1 : 255 & Z.charCodeAt(x++)
  }

  function i(r) {
    for (; g < r;) v |= e() << g, g += 8
  }

  function o(r) {
    return v & H[r]
  }

  function f(r) {
    v >>= r, g -= r
  }

  function s(r, t, n) {
    var e, s, u;
    if (0 == n) return 0;
    for (u = 0;;) {
      for (i(k), s = E.list[o(k)], e = s.e; e > 16;) {
        if (99 == e) return -1;
        f(s.b), e -= 16, i(e), s = s.t[o(e)], e = s.e
      }
      if (f(s.b), 16 != e) {
        if (15 == e) break;
        for (i(e), M = s.n + o(e), f(e), i(J), s = S.list[o(J)], e = s.e; e > 16;) {
          if (99 == e) return -1;
          f(s.b), e -= 16, i(e), s = s.t[o(e)], e = s.e
        }
        for (f(s.b), i(e), X = m - s.n - o(e), f(e); M > 0 && u < n;) M--, X &= C - 1, m &= C - 1, r[t + u++] = b[m++] = b[X++];
        if (u == n) return n
      } else if (m &= C - 1, r[t + u++] = b[m++] = s.n, u == n) return n
    }
    return p = -1, u
  }

  function u(r, t, n) {
    var e;
    if (e = 7 & g, f(e), i(16), e = o(16), f(16), i(16), e != (65535 & ~v)) return -1;
    for (f(16), M = e, e = 0; M > 0 && e < n;) M--, m &= C - 1, i(8), r[t + e++] = b[m++] = o(8), f(8);
    return 0 == M && (p = -1), e
  }

  function l(r, t, e) {
    if (null == T) {
      var i, o, f = new Array(288);
      for (i = 0; i < 144; i++) f[i] = 8;
      for (; i < 256; i++) f[i] = 9;
      for (; i < 280; i++) f[i] = 7;
      for (; i < 288; i++) f[i] = 8;
      if (d = 7, o = new n(f, 288, 257, N, _, d), 0 != o.status) return alert("HufBuild error: " + o.status), -1;
      for (T = o.root, d = o.m, i = 0; i < 30; i++) f[i] = 5;
      if (c = 5, o = new n(f, 30, 0, j, q, c), o.status > 1) return T = null, alert("HufBuild error: " + o.status), -1;
      y = o.root, c = o.m
    }
    return E = T, S = y, k = d, J = c, s(r, t, e)
  }

  function a(r, t, e) {
    var u, l, a, h, A, w, c, b, m, y = new Array(316);
    for (u = 0; u < y.length; u++) y[u] = 0;
    if (i(5), c = 257 + o(5), f(5), i(5), b = 1 + o(5), f(5), i(4), w = 4 + o(4), f(4), c > 286 || b > 30) return -1;
    for (l = 0; l < w; l++) i(3), y[z[l]] = o(3), f(3);
    for (; l < 19; l++) y[z[l]] = 0;
    if (k = 7, m = new n(y, 19, 19, null, null, k), 0 != m.status) return -1;
    for (E = m.root, k = m.m, h = c + b, u = a = 0; u < h;)
      if (i(k), A = E.list[o(k)], l = A.b, f(l), l = A.n, l < 16) y[u++] = a = l;
      else if (16 == l) {
      if (i(2), l = 3 + o(2), f(2), u + l > h) return -1;
      for (; l-- > 0;) y[u++] = a
    } else if (17 == l) {
      if (i(3), l = 3 + o(3), f(3), u + l > h) return -1;
      for (; l-- > 0;) y[u++] = 0;
      a = 0
    } else {
      if (i(7), l = 11 + o(7), f(7), u + l > h) return -1;
      for (; l-- > 0;) y[u++] = 0;
      a = 0
    }
    if (k = F, m = new n(y, c, 257, N, _, k), 0 == k && (m.status = 1), 0 != m.status) return 1 == m.status, -1;
    for (E = m.root, k = m.m, u = 0; u < b; u++) y[u] = y[u + c];
    return J = L, m = new n(y, b, 0, j, q, J), S = m.root, J = m.m, 0 == J && c > 257 ? -1 : (1 == m.status, 0 != m.status ? -1 : s(r, t, e))
  }

  function h() {
    null == b && (b = new Array(2 * C)), m = 0, v = 0, g = 0, p = -1, B = !1, M = X = 0, E = null
  }

  function A(r, t, n) {
    var e, h;
    for (e = 0; e < n;) {
      if (B && p == -1) return e;
      if (M > 0) {
        if (p != D)
          for (; M > 0 && e < n;) M--, X &= C - 1, m &= C - 1, r[t + e++] = b[m++] = b[X++];
        else {
          for (; M > 0 && e < n;) M--, m &= C - 1, i(8), r[t + e++] = b[m++] = o(8), f(8);
          0 == M && (p = -1)
        }
        if (e == n) return e
      }
      if (p == -1) {
        if (B) break;
        i(1), 0 != o(1) && (B = !0), f(1), i(2), p = o(2), f(2), E = null, M = 0
      }
      switch (p) {
      case 0:
        h = u(r, t + e, n - e);
        break;
      case 1:
        h = null != E ? s(r, t + e, n - e) : l(r, t + e, n - e);
        break;
      case 2:
        h = null != E ? s(r, t + e, n - e) : a(r, t + e, n - e);
        break;
      default:
        h = -1
      }
      if (h == -1) return B ? 0 : -1;
      e += h
    }
    return e
  }

  function w(r) {
    var t, n, e, i;
    for (h(), Z = r, x = 0, n = new Array(1024), t = "";
      (e = A(n, 0, n.length)) > 0;)
      for (i = 0; i < e; i++) t += String.fromCharCode(n[i]);
    return Z = null, t
  }
  var c, b, m, y, d, v, g, p, B, M, X, E, S, k, J, Z, x, C = 32768
    , D = 0
    , F = 9
    , L = 6
    , T = null
    , H = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535)
    , N = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0)
    , _ = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99)
    , j = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577)
    , q = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13)
    , z = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
  JSZip.compressions.DEFLATE ? JSZip.compressions.DEFLATE.uncompress = w : JSZip.compressions.DEFLATE = {
    magic: "\b\0"
    , uncompress: w
  }
}();
