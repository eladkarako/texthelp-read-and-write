if (!JSZip) throw "JSZip not defined";
! function () {
  var r = 32768
    , n = 0
    , e = 1
    , f = 2
    , o = 6
    , t = !0
    , i = 32768
    , a = 64
    , l = 8192
    , c = 2 * r
    , u = 3
    , s = 258
    , d = 16
    , w = 8192
    , _ = 13;
  w > i && alert("error: zip_INBUFSIZ is too small"), r << 1 > 1 << d && alert("error: zip_WSIZE is too large"), _ > d - 1 && alert("error: zip_HASH_BITS is too large"), (_ < 8 || 258 != s) && alert("error: Code too clever");
  var h, v, y, x, m, A, p, g, b, S, I, E, Z, z, J, C, F, T, D, L, j, k, B, H, N, U, W, q, G, K, M, O, P, Q, R, V, X, Y, $, rr, nr, er, fr, or, tr, ir, ar, lr, cr, ur, sr, dr, wr, _r, hr, vr, yr = w
    , xr = 1 << _
    , mr = xr - 1
    , Ar = r - 1
    , pr = 0
    , gr = 4096
    , br = s + u + 1
    , Sr = r - br
    , Ir = 1
    , Er = 15
    , Zr = 7
    , zr = 29
    , Jr = 256
    , Cr = 256
    , Fr = Jr + 1 + zr
    , Tr = 30
    , Dr = 19
    , Lr = 16
    , jr = 17
    , kr = 18
    , Br = 2 * Fr + 1
    , Hr = parseInt((_ + u - 1) / u)
    , Nr = null
    , Ur = function () {
      this.fc = 0, this.dl = 0
    }
    , Wr = function () {
      this.dyn_tree = null, this.static_tree = null, this.extra_bits = null, this.extra_base = 0, this.elems = 0, this.max_length = 0, this.max_code = 0
    }
    , qr = function (r, n, e, f) {
      this.good_length = r, this.max_lazy = n, this.nice_length = e, this.max_chain = f
    }
    , Gr = function () {
      this.next = null, this.len = 0, this.ptr = new Array(l), this.off = 0
    }
    , Kr = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0)
    , Mr = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13)
    , Or = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7)
    , Pr = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15)
    , Qr = new Array(new qr(0, 0, 0, 0), new qr(4, 4, 8, 4), new qr(4, 5, 16, 8), new qr(4, 6, 32, 32), new qr(4, 4, 16, 16), new qr(8, 16, 32, 32), new qr(8, 16, 128, 128), new qr(8, 32, 128, 256), new qr(32, 128, 258, 1024), new qr(32, 258, 258, 4096))
    , Rr = function (r) {
      var n;
      if (r ? r < 1 ? r = 1 : r > 9 && (r = 9) : r = o, W = r, x = !1, B = !1, null == Nr) {
        for (h = v = y = null, Nr = new Array(l), g = new Array(c), b = new Array(yr), S = new Array(i + a), I = new Array(1 << d), K = new Array(Br), n = 0; n < Br; n++) K[n] = new Ur;
        for (M = new Array(2 * Tr + 1), n = 0; n < 2 * Tr + 1; n++) M[n] = new Ur;
        for (O = new Array(Fr + 2), n = 0; n < Fr + 2; n++) O[n] = new Ur;
        for (P = new Array(Tr), n = 0; n < Tr; n++) P[n] = new Ur;
        for (Q = new Array(2 * Dr + 1), n = 0; n < 2 * Dr + 1; n++) Q[n] = new Ur;
        R = new Wr, V = new Wr, X = new Wr, Y = new Array(Er + 1), $ = new Array(2 * Fr + 1), er = new Array(2 * Fr + 1), fr = new Array(s - u + 1), or = new Array(512), tr = new Array(zr), ir = new Array(Tr), ar = new Array(parseInt(w / 8))
      }
    }
    , Vr = function (r) {
      r.next = h, h = r
    }
    , Xr = function () {
      var r;
      return null != h ? (r = h, h = h.next) : r = new Gr, r.next = null, r.len = r.off = 0, r
    }
    , Yr = function (n) {
      return I[r + n]
    }
    , $r = function (n, e) {
      return I[r + n] = e
    }
    , rn = function (r) {
      Nr[A + m++] = r, A + m == l && Dn()
    }
    , nn = function (r) {
      r &= 65535, A + m < l - 2 ? (Nr[A + m++] = 255 & r, Nr[A + m++] = r >>> 8) : (rn(255 & r), rn(r >>> 8))
    }
    , en = function () {
      J = (J << Hr ^ 255 & g[j + u - 1]) & mr, C = Yr(J), I[j & Ar] = C, $r(J, j)
    }
    , fn = function (r, n) {
      Cn(n[r].fc, n[r].dl)
    }
    , on = function (r) {
      return 255 & (r < 256 ? or[r] : or[256 + (r >> 7)])
    }
    , tn = function (r, n, e) {
      return r[n].fc < r[e].fc || r[n].fc == r[e].fc && er[n] <= er[e]
    }
    , an = function (r, n, e) {
      var f;
      for (f = 0; f < e && vr < hr.length; f++) r[n + f] = 255 & hr.charCodeAt(vr++);
      return f
    }
    , ln = function () {
      var n;
      for (n = 0; n < xr; n++) I[r + n] = 0;
      if (U = Qr[W].max_lazy, q = Qr[W].good_length, t || (G = Qr[W].nice_length), N = Qr[W].max_chain, j = 0, z = 0, H = an(g, 0, 2 * r), H <= 0) return B = !0, void(H = 0);
      for (B = !1; H < br && !B;) un();
      for (J = 0, n = 0; n < u - 1; n++) J = (J << Hr ^ 255 & g[n]) & mr
    }
    , cn = function (r) {
      var n, e, f = N
        , o = j
        , i = L
        , a = j > Sr ? j - Sr : pr
        , l = j + s
        , c = g[o + i - 1]
        , u = g[o + i];
      L >= q && (f >>= 2);
      do
        if (n = r, g[n + i] == u && g[n + i - 1] == c && g[n] == g[o] && g[++n] == g[o + 1]) {
          o += 2, n++;
          do; while (g[++o] == g[++n] && g[++o] == g[++n] && g[++o] == g[++n] && g[++o] == g[++n] && g[++o] == g[++n] && g[++o] == g[++n] && g[++o] == g[++n] && g[++o] == g[++n] && o < l);
          if (e = s - (l - o), o = l - s, e > i) {
            if (k = r, i = e, t) {
              if (e >= s) break
            } else if (e >= G) break;
            c = g[o + i - 1], u = g[o + i]
          }
        }
      while ((r = I[r & Ar]) > a && 0 != --f);
      return i
    }
    , un = function () {
      var n, e, f = c - H - j;
      if (f == -1) f--;
      else if (j >= r + Sr) {
        for (n = 0; n < r; n++) g[n] = g[n + r];
        for (k -= r, j -= r, z -= r, n = 0; n < xr; n++) e = Yr(n), $r(n, e >= r ? e - r : pr);
        for (n = 0; n < r; n++) e = I[n], I[n] = e >= r ? e - r : pr;
        f += r
      }
      B || (n = an(g, j + H, f), n <= 0 ? B = !0 : H += n)
    }
    , sn = function () {
      for (; 0 != H && null == v;) {
        var r;
        if (en(), C != pr && j - C <= Sr && (D = cn(C), D > H && (D = H)), D >= u)
          if (r = Zn(j - k, D - u), H -= D, D <= U) {
            D--;
            do j++, en(); while (0 != --D);
            j++
          } else j += D, D = 0, J = 255 & g[j], J = (J << Hr ^ 255 & g[j + 1]) & mr;
        else r = Zn(0, 255 & g[j]), H--, j++;
        for (r && (En(0), z = j); H < br && !B;) un()
      }
    }
    , dn = function () {
      for (; 0 != H && null == v;) {
        if (en(), L = D, F = k, D = u - 1, C != pr && L < U && j - C <= Sr && (D = cn(C), D > H && (D = H), D == u && j - k > gr && D--), L >= u && D <= L) {
          var r;
          r = Zn(j - 1 - F, L - u), H -= L - 1, L -= 2;
          do j++, en(); while (0 != --L);
          T = 0, D = u - 1, j++, r && (En(0), z = j)
        } else 0 != T ? (Zn(0, 255 & g[j - 1]) && (En(0), z = j), j++, H--) : (T = 1, j++, H--);
        for (; H < br && !B;) un()
      }
    }
    , wn = function () {
      B || (E = 0, Z = 0, vn(), ln(), v = null, m = 0, A = 0, W <= 3 ? (L = u - 1, D = 0) : (D = u - 1, T = 0), p = !1)
    }
    , _n = function (r, n, e) {
      var f;
      return x || (wn(), x = !0, 0 != H) ? (f = hn(r, n, e)) == e ? e : p ? f : (W <= 3 ? sn() : dn(), 0 == H && (0 != T && Zn(0, 255 & g[j - 1]), En(1), p = !0), f + hn(r, f + n, e - f)) : (p = !0, 0)
    }
    , hn = function (r, n, e) {
      var f, o, t;
      for (f = 0; null != v && f < e;) {
        for (o = e - f, o > v.len && (o = v.len), t = 0; t < o; t++) r[n + f + t] = v.ptr[v.off + t];
        if (v.off += o, v.len -= o, f += o, 0 == v.len) {
          var i;
          i = v, v = v.next, Vr(i)
        }
      }
      if (f == e) return f;
      if (A < m) {
        for (o = e - f, o > m - A && (o = m - A), t = 0; t < o; t++) r[n + f + t] = Nr[A + t];
        A += o, f += o, m == A && (m = A = 0)
      }
      return f
    }
    , vn = function () {
      var r, n, e, f, o;
      if (0 == P[0].dl) {
        for (R.dyn_tree = K, R.static_tree = O, R.extra_bits = Kr, R.extra_base = Jr + 1, R.elems = Fr, R.max_length = Er, R.max_code = 0, V.dyn_tree = M, V.static_tree = P, V.extra_bits = Mr, V.extra_base = 0, V.elems = Tr, V.max_length = Er, V.max_code = 0, X.dyn_tree = Q, X.static_tree = null, X.extra_bits = Or, X.extra_base = 0, X.elems = Dr, X.max_length = Zr, X.max_code = 0, e = 0, f = 0; f < zr - 1; f++)
          for (tr[f] = e, r = 0; r < 1 << Kr[f]; r++) fr[e++] = f;
        for (fr[e - 1] = f, o = 0, f = 0; f < 16; f++)
          for (ir[f] = o, r = 0; r < 1 << Mr[f]; r++) or[o++] = f;
        for (o >>= 7; f < Tr; f++)
          for (ir[f] = o << 7, r = 0; r < 1 << Mr[f] - 7; r++) or[256 + o++] = f;
        for (n = 0; n <= Er; n++) Y[n] = 0;
        for (r = 0; r <= 143;) O[r++].dl = 8, Y[8]++;
        for (; r <= 255;) O[r++].dl = 9, Y[9]++;
        for (; r <= 279;) O[r++].dl = 7, Y[7]++;
        for (; r <= 287;) O[r++].dl = 8, Y[8]++;
        for (An(O, Fr + 1), r = 0; r < Tr; r++) P[r].dl = 5, P[r].fc = Fn(r, 5);
        yn()
      }
    }
    , yn = function () {
      var r;
      for (r = 0; r < Fr; r++) K[r].fc = 0;
      for (r = 0; r < Tr; r++) M[r].fc = 0;
      for (r = 0; r < Dr; r++) Q[r].fc = 0;
      K[Cr].fc = 1, wr = _r = 0, lr = cr = ur = 0, sr = 0, dr = 1
    }
    , xn = function (r, n) {
      for (var e = $[n], f = n << 1; f <= rr && (f < rr && tn(r, $[f + 1], $[f]) && f++, !tn(r, e, $[f]));) $[n] = $[f], n = f, f <<= 1;
      $[n] = e
    }
    , mn = function (r) {
      var n, e, f, o, t, i, a = r.dyn_tree
        , l = r.extra_bits
        , c = r.extra_base
        , u = r.max_code
        , s = r.max_length
        , d = r.static_tree
        , w = 0;
      for (o = 0; o <= Er; o++) Y[o] = 0;
      for (a[$[nr]].dl = 0, n = nr + 1; n < Br; n++) e = $[n], o = a[a[e].dl].dl + 1, o > s && (o = s, w++), a[e].dl = o, e > u || (Y[o]++, t = 0, e >= c && (t = l[e - c]), i = a[e].fc, wr += i * (o + t), null != d && (_r += i * (d[e].dl + t)));
      if (0 != w) {
        do {
          for (o = s - 1; 0 == Y[o];) o--;
          Y[o]--, Y[o + 1] += 2, Y[s]--, w -= 2
        } while (w > 0);
        for (o = s; 0 != o; o--)
          for (e = Y[o]; 0 != e;) f = $[--n], f > u || (a[f].dl != o && (wr += (o - a[f].dl) * a[f].fc, a[f].fc = o), e--)
      }
    }
    , An = function (r, n) {
      var e, f, o = new Array(Er + 1)
        , t = 0;
      for (e = 1; e <= Er; e++) t = t + Y[e - 1] << 1, o[e] = t;
      for (f = 0; f <= n; f++) {
        var i = r[f].dl;
        0 != i && (r[f].fc = Fn(o[i]++, i))
      }
    }
    , pn = function (r) {
      var n, e, f = r.dyn_tree
        , o = r.static_tree
        , t = r.elems
        , i = -1
        , a = t;
      for (rr = 0, nr = Br, n = 0; n < t; n++) 0 != f[n].fc ? ($[++rr] = i = n, er[n] = 0) : f[n].dl = 0;
      for (; rr < 2;) {
        var l = $[++rr] = i < 2 ? ++i : 0;
        f[l].fc = 1, er[l] = 0, wr--, null != o && (_r -= o[l].dl)
      }
      for (r.max_code = i, n = rr >> 1; n >= 1; n--) xn(f, n);
      do n = $[Ir], $[Ir] = $[rr--], xn(f, Ir), e = $[Ir], $[--nr] = n, $[--nr] = e, f[a].fc = f[n].fc + f[e].fc, er[n] > er[e] + 1 ? er[a] = er[n] : er[a] = er[e] + 1, f[n].dl = f[e].dl = a, $[Ir] = a++, xn(f, Ir); while (rr >= 2);
      $[--nr] = $[Ir], mn(r), An(f, i)
    }
    , gn = function (r, n) {
      var e, f, o = -1
        , t = r[0].dl
        , i = 0
        , a = 7
        , l = 4;
      for (0 == t && (a = 138, l = 3), r[n + 1].dl = 65535, e = 0; e <= n; e++) f = t, t = r[e + 1].dl, ++i < a && f == t || (i < l ? Q[f].fc += i : 0 != f ? (f != o && Q[f].fc++, Q[Lr].fc++) : i <= 10 ? Q[jr].fc++ : Q[kr].fc++, i = 0, o = f, 0 == t ? (a = 138, l = 3) : f == t ? (a = 6, l = 3) : (a = 7, l = 4))
    }
    , bn = function (r, n) {
      var e, f, o = -1
        , t = r[0].dl
        , i = 0
        , a = 7
        , l = 4;
      for (0 == t && (a = 138, l = 3), e = 0; e <= n; e++)
        if (f = t, t = r[e + 1].dl, !(++i < a && f == t)) {
          if (i < l) {
            do fn(f, Q); while (0 != --i)
          } else 0 != f ? (f != o && (fn(f, Q), i--), fn(Lr, Q), Cn(i - 3, 2)) : i <= 10 ? (fn(jr, Q), Cn(i - 3, 3)) : (fn(kr, Q), Cn(i - 11, 7));
          i = 0, o = f, 0 == t ? (a = 138, l = 3) : f == t ? (a = 6, l = 3) : (a = 7, l = 4)
        }
    }
    , Sn = function () {
      var r;
      for (gn(K, R.max_code), gn(M, V.max_code), pn(X), r = Dr - 1; r >= 3 && 0 == Q[Pr[r]].dl; r--);
      return wr += 3 * (r + 1) + 5 + 5 + 4, r
    }
    , In = function (r, n, e) {
      var f;
      for (Cn(r - 257, 5), Cn(n - 1, 5), Cn(e - 4, 4), f = 0; f < e; f++) Cn(Q[Pr[f]].dl, 3);
      bn(K, r - 1), bn(M, n - 1)
    }
    , En = function (r) {
      var o, t, i, a;
      if (a = j - z, ar[ur] = sr, pn(R), pn(V), i = Sn(), o = wr + 3 + 7 >> 3, t = _r + 3 + 7 >> 3, t <= o && (o = t), a + 4 <= o && z >= 0) {
        var l;
        for (Cn((n << 1) + r, 3), Tn(), nn(a), nn(~a), l = 0; l < a; l++) rn(g[z + l])
      } else t == o ? (Cn((e << 1) + r, 3), zn(O, P)) : (Cn((f << 1) + r, 3), In(R.max_code + 1, V.max_code + 1, i + 1), zn(K, M));
      yn(), 0 != r && Tn()
    }
    , Zn = function (r, n) {
      if (S[lr++] = n, 0 == r ? K[n].fc++ : (r--, K[fr[n] + Jr + 1].fc++, M[on(r)].fc++, b[cr++] = r, sr |= dr), dr <<= 1, 0 == (7 & lr) && (ar[ur++] = sr, sr = 0, dr = 1), W > 2 && 0 == (4095 & lr)) {
        var e, f = 8 * lr
          , o = j - z;
        for (e = 0; e < Tr; e++) f += M[e].fc * (5 + Mr[e]);
        if (f >>= 3, cr < parseInt(lr / 2) && f < parseInt(o / 2)) return !0
      }
      return lr == w - 1 || cr == yr
    }
    , zn = function (r, n) {
      var e, f, o, t, i = 0
        , a = 0
        , l = 0
        , c = 0;
      if (0 != lr)
        do 0 == (7 & i) && (c = ar[l++]), f = 255 & S[i++], 0 == (1 & c) ? fn(f, r) : (o = fr[f], fn(o + Jr + 1, r), t = Kr[o], 0 != t && (f -= tr[o], Cn(f, t)), e = b[a++], o = on(e), fn(o, n), t = Mr[o], 0 != t && (e -= ir[o], Cn(e, t))), c >>= 1; while (i < lr);
      fn(Cr, r)
    }
    , Jn = 16
    , Cn = function (r, n) {
      Z > Jn - n ? (E |= r << Z, nn(E), E = r >> Jn - Z, Z += n - Jn) : (E |= r << Z, Z += n)
    }
    , Fn = function (r, n) {
      var e = 0;
      do e |= 1 & r, r >>= 1, e <<= 1; while (--n > 0);
      return e >> 1
    }
    , Tn = function () {
      Z > 8 ? nn(E) : Z > 0 && rn(E), E = 0, Z = 0
    }
    , Dn = function () {
      if (0 != m) {
        var r, n;
        for (r = Xr(), null == v ? v = y = r : y = y.next = r, r.len = m - A, n = 0; n < r.len; n++) r.ptr[n] = Nr[A + n];
        m = A = 0
      }
    }
    , Ln = function (r, n) {
      var e, f;
      hr = r, vr = 0, "undefined" == typeof n && (n = o), Rr(n);
      for (var t = new Array(1024), i = [];
        (e = _n(t, 0, t.length)) > 0;) {
        var a = new Array(e);
        for (f = 0; f < e; f++) a[f] = String.fromCharCode(t[f]);
        i[i.length] = a.join("")
      }
      return hr = null, i.join("")
    };
  JSZip.compressions.DEFLATE ? JSZip.compressions.DEFLATE.compress = Ln : JSZip.compressions.DEFLATE = {
    magic: "\b\0"
    , compress: Ln
  }
}();
