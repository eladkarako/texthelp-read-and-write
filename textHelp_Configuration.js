(function (z) {
  var Sk = function (a) {
    return z.eg(a)
  };
  var Tk = function () {
    this.od = -1
  };
  var Uk = function (a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
    switch (a.keyCode) {
    case 18:
    case 20:
    case 93:
    case 17:
    case 40:
    case 35:
    case 27:
    case 36:
    case 45:
    case 37:
    case 224:
    case 91:
    case 144:
    case 12:
    case 34:
    case 33:
    case 19:
    case 255:
    case 44:
    case 39:
    case 145:
    case 16:
    case 38:
    case 224:
    case 92:
      return !1;
    case 0:
      return !z.dc;
    default:
      return 166 > a.keyCode || 183 < a.keyCode
    }
  };
  var Vk = function () {
    this.od = -1;
    this.od = 64;
    this.Qa = Array(4);
    this.Co = Array(this.od);
    this.Qj = this.sg = 0;
    this.reset()
  };
  var Wk = function (a, b, c) {
    c || (c = 0);
    var d = Array(16);
    if (z.r(b))
      for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
    else
      for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
    b = a.Qa[0];
    c = a.Qa[1];
    var e = a.Qa[2]
      , g = a.Qa[3]
      , k = 0
      , k = b + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
    b = c + (k << 7 & 4294967295 | k >>> 25);
    k = g + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
    g = b + (k << 12 & 4294967295 | k >>> 20);
    k = e + (c ^ g & (b ^ c)) + d[2] + 606105819 & 4294967295;
    e = g + (k << 17 & 4294967295 | k >>> 15);
    k = c +
      (b ^ e & (g ^ b)) + d[3] + 3250441966 & 4294967295;
    c = e + (k << 22 & 4294967295 | k >>> 10);
    k = b + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
    b = c + (k << 7 & 4294967295 | k >>> 25);
    k = g + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
    g = b + (k << 12 & 4294967295 | k >>> 20);
    k = e + (c ^ g & (b ^ c)) + d[6] + 2821735955 & 4294967295;
    e = g + (k << 17 & 4294967295 | k >>> 15);
    k = c + (b ^ e & (g ^ b)) + d[7] + 4249261313 & 4294967295;
    c = e + (k << 22 & 4294967295 | k >>> 10);
    k = b + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
    b = c + (k << 7 & 4294967295 | k >>> 25);
    k = g + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
    g = b + (k << 12 & 4294967295 | k >>>
      20);
    k = e + (c ^ g & (b ^ c)) + d[10] + 4294925233 & 4294967295;
    e = g + (k << 17 & 4294967295 | k >>> 15);
    k = c + (b ^ e & (g ^ b)) + d[11] + 2304563134 & 4294967295;
    c = e + (k << 22 & 4294967295 | k >>> 10);
    k = b + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
    b = c + (k << 7 & 4294967295 | k >>> 25);
    k = g + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
    g = b + (k << 12 & 4294967295 | k >>> 20);
    k = e + (c ^ g & (b ^ c)) + d[14] + 2792965006 & 4294967295;
    e = g + (k << 17 & 4294967295 | k >>> 15);
    k = c + (b ^ e & (g ^ b)) + d[15] + 1236535329 & 4294967295;
    c = e + (k << 22 & 4294967295 | k >>> 10);
    k = b + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
    b = c + (k << 5 & 4294967295 |
      k >>> 27);
    k = g + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
    g = b + (k << 9 & 4294967295 | k >>> 23);
    k = e + (b ^ c & (g ^ b)) + d[11] + 643717713 & 4294967295;
    e = g + (k << 14 & 4294967295 | k >>> 18);
    k = c + (g ^ b & (e ^ g)) + d[0] + 3921069994 & 4294967295;
    c = e + (k << 20 & 4294967295 | k >>> 12);
    k = b + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
    b = c + (k << 5 & 4294967295 | k >>> 27);
    k = g + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
    g = b + (k << 9 & 4294967295 | k >>> 23);
    k = e + (b ^ c & (g ^ b)) + d[15] + 3634488961 & 4294967295;
    e = g + (k << 14 & 4294967295 | k >>> 18);
    k = c + (g ^ b & (e ^ g)) + d[4] + 3889429448 & 4294967295;
    c = e + (k << 20 & 4294967295 |
      k >>> 12);
    k = b + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
    b = c + (k << 5 & 4294967295 | k >>> 27);
    k = g + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
    g = b + (k << 9 & 4294967295 | k >>> 23);
    k = e + (b ^ c & (g ^ b)) + d[3] + 4107603335 & 4294967295;
    e = g + (k << 14 & 4294967295 | k >>> 18);
    k = c + (g ^ b & (e ^ g)) + d[8] + 1163531501 & 4294967295;
    c = e + (k << 20 & 4294967295 | k >>> 12);
    k = b + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
    b = c + (k << 5 & 4294967295 | k >>> 27);
    k = g + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
    g = b + (k << 9 & 4294967295 | k >>> 23);
    k = e + (b ^ c & (g ^ b)) + d[7] + 1735328473 & 4294967295;
    e = g + (k << 14 & 4294967295 |
      k >>> 18);
    k = c + (g ^ b & (e ^ g)) + d[12] + 2368359562 & 4294967295;
    c = e + (k << 20 & 4294967295 | k >>> 12);
    k = b + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
    b = c + (k << 4 & 4294967295 | k >>> 28);
    k = g + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
    g = b + (k << 11 & 4294967295 | k >>> 21);
    k = e + (g ^ b ^ c) + d[11] + 1839030562 & 4294967295;
    e = g + (k << 16 & 4294967295 | k >>> 16);
    k = c + (e ^ g ^ b) + d[14] + 4259657740 & 4294967295;
    c = e + (k << 23 & 4294967295 | k >>> 9);
    k = b + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
    b = c + (k << 4 & 4294967295 | k >>> 28);
    k = g + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
    g = b + (k << 11 & 4294967295 | k >>> 21);
    k = e + (g ^
      b ^ c) + d[7] + 4139469664 & 4294967295;
    e = g + (k << 16 & 4294967295 | k >>> 16);
    k = c + (e ^ g ^ b) + d[10] + 3200236656 & 4294967295;
    c = e + (k << 23 & 4294967295 | k >>> 9);
    k = b + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
    b = c + (k << 4 & 4294967295 | k >>> 28);
    k = g + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
    g = b + (k << 11 & 4294967295 | k >>> 21);
    k = e + (g ^ b ^ c) + d[3] + 3572445317 & 4294967295;
    e = g + (k << 16 & 4294967295 | k >>> 16);
    k = c + (e ^ g ^ b) + d[6] + 76029189 & 4294967295;
    c = e + (k << 23 & 4294967295 | k >>> 9);
    k = b + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
    b = c + (k << 4 & 4294967295 | k >>> 28);
    k = g + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
    g = b + (k << 11 & 4294967295 | k >>> 21);
    k = e + (g ^ b ^ c) + d[15] + 530742520 & 4294967295;
    e = g + (k << 16 & 4294967295 | k >>> 16);
    k = c + (e ^ g ^ b) + d[2] + 3299628645 & 4294967295;
    c = e + (k << 23 & 4294967295 | k >>> 9);
    k = b + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
    b = c + (k << 6 & 4294967295 | k >>> 26);
    k = g + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
    g = b + (k << 10 & 4294967295 | k >>> 22);
    k = e + (b ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
    e = g + (k << 15 & 4294967295 | k >>> 17);
    k = c + (g ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
    c = e + (k << 21 & 4294967295 | k >>> 11);
    k = b + (e ^ (c | ~g)) + d[12] + 1700485571 & 4294967295;
    b = c +
      (k << 6 & 4294967295 | k >>> 26);
    k = g + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
    g = b + (k << 10 & 4294967295 | k >>> 22);
    k = e + (b ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
    e = g + (k << 15 & 4294967295 | k >>> 17);
    k = c + (g ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
    c = e + (k << 21 & 4294967295 | k >>> 11);
    k = b + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
    b = c + (k << 6 & 4294967295 | k >>> 26);
    k = g + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
    g = b + (k << 10 & 4294967295 | k >>> 22);
    k = e + (b ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
    e = g + (k << 15 & 4294967295 | k >>> 17);
    k = c + (g ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
    c = e + (k << 21 & 4294967295 | k >>> 11);
    k = b + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
    b = c + (k << 6 & 4294967295 | k >>> 26);
    k = g + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
    g = b + (k << 10 & 4294967295 | k >>> 22);
    k = e + (b ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
    e = g + (k << 15 & 4294967295 | k >>> 17);
    k = c + (g ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
    a.Qa[0] = a.Qa[0] + b & 4294967295;
    a.Qa[1] = a.Qa[1] + (e + (k << 21 & 4294967295 | k >>> 11)) & 4294967295;
    a.Qa[2] = a.Qa[2] + e & 4294967295;
    a.Qa[3] = a.Qa[3] + g & 4294967295
  };
  var Xk = function (a) {
    var b = Array((56 > a.sg ? a.od : 2 * a.od) - a.sg);
    b[0] = 128;
    for (var c = 1; c < b.length - 8; ++c) b[c] = 0;
    for (var d = 8 * a.Qj, c = b.length - 8; c < b.length; ++c) b[c] = d & 255, d /= 256;
    a.update(b);
    b = Array(16);
    for (c = d = 0; 4 > c; ++c)
      for (var e = 0; 32 > e; e += 8) b[d++] = a.Qa[c] >>> e & 255;
    return b
  };
  var Yk = function (a) {
    try {
      return a && a.activeElement
    } catch (b) {}
    return null
  };
  var Zk = function () {
    this.Gj = void 0
  };
  var $k = function (a, b) {
    var c = [];
    al(a, b, c);
    return c.join("")
  };
  var al = function (a, b, c) {
    switch (typeof b) {
    case "string":
      bl(b, c);
      break;
    case "number":
      c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if (null == b) {
        c.push("null");
        break
      }
      if (z.ja(b)) {
        var d = b.length;
        c.push("[");
        for (var e = "", g = 0; g < d; g++) c.push(e), e = b[g], al(a, a.Gj ? a.Gj.call(b, String(g), e) : e, c), e = ",";
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" !=
        typeof e && (c.push(d), bl(g, c), c.push(":"), al(a, a.Gj ? a.Gj.call(b, g, e) : e, c), d = ","));
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);
    }
  };
  var bl = function (a, b) {
    b.push('"', a.replace(z.Ui, function (a) {
      if (a in cl) return cl[a];
      var b = a.charCodeAt(0)
        , e = "\\u";
      16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
      return cl[a] = e + b.toString(16)
    }), '"')
  };
  var dl = function (a) {
    if (z.ka(a)) return z.bb(a);
    a = z.Qc(a);
    var b = [];
    z.Sc(a, function (a) {
      b.push(a)
    });
    return b
  };
  z.U = function () {
    try {
      this.dn = "en_US", this.Tk = "", this.fh = [], this.en = new el, this.cn = fl(this.dn)
        .vc(), z.T.a()
        .v(), this.ef = this.en.Ci(), this.Zp = this.en.vi()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  var gl = function () {};
  var hl = function () {};
  var il = function () {};
  var jl = function () {};
  var kl = function () {};
  var el = function () {};
  var fl = function (a) {
    return "pt" == a ? new jl : "fr" == a ? new gl : "es" == a ? new il : "ms" == a ? new kl : new hl
  };
  z.fj = function () {};
  var ll = function (a) {
    (0, z.Cf)(a, function (a) {
      a = a.toString(16);
      return 1 < a.length ? a : "0" + a
    })
  };
  var ml = function () {
    try {
      this.Wg = "readwriteforgdocs";
      var a = new Vk;
      a.update(this.Wg);
      ll(Xk(a))
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  var nl = function () {
    try {
      this.Wg = "readwriteforgdocs";
      var a = z.R.a()
        .ia();
      null !== a && (this.Wg = z.Be(a));
      var b = new Vk;
      b.update(this.Wg);
      ll(Xk(b))
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  var ol = function () {};
  var pl = function (a, b, c) {
    if (b) {
      var d = ql(a, c);
      z.Sg(b, d) || (z.gb(rl, function (a) {
        a = ql(this, a);
        a == d ? z.Tg(b, a) : z.Vg(b, a)
      }, a), z.Q(b, "checked", c == sl ? "mixed" : c == tl ? "true" : "false"))
    }
  };
  var ql = function (a, b) {
    var c = a.J();
    if (b == tl) return c + "-checked";
    if (b == ul) return c + "-unchecked";
    if (b == sl) return c + "-undetermined";
    throw Error("Invalid checkbox state: " + b);
  };
  z.vl = function (a, b, c) {
    c = c || ol.a();
    z.gh.call(this, null, c, b);
    this.qd = z.da(a) ? a : ul
  };
  var wl = function (a) {
    z.Gc.call(this);
    this.oa = null;
    this.m = a;
    a = z.B || z.E && !z.A("531") && "TEXTAREA" == a.tagName;
    this.S = new z.Jc(this);
    this.S.n(this.m, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
  };
  var xl = function (a) {
    null != a.oa && (z.h.clearTimeout(a.oa), a.oa = null)
  };
  var yl = function (a) {
    a = new z.bc(a.Sa);
    a.type = "input";
    return a
  };
  var zl = function (a, b, c) {
    z.Zb.call(this, a, b);
    this.item = c
  };
  var Al = function (a, b) {
    z.Bg.call(this, b);
    this.ra = a || ""
  };
  var Bl = function () {
    null != Cl || (Cl = "placeholder" in window.document.createElement("input"));
    return Cl
  };
  var Dl = function (a) {
    !a.Yo && a.S && a.f()
      .form && (a.S.n(a.f()
        .form, "submit", a.qp), a.Yo = !0)
  };
  var El = function (a) {
    return !!a.f() && "" != a.f()
      .value && a.f()
      .value != a.ra
  };
  var Fl = function (a, b, c) {
    z.Bg.call(this, a);
    this.Ua = c || new Al;
    this.nb = !0;
    a = this.i = b || new z.Vh(this.u());
    a.D(!1);
    a.Vh = !1;
    a.Ul = !0
  };
  var Gl = function (a, b) {
    var c = a.i.F()
      , d;
    if (-1 == a.Be) {
      for (var e = d = 0, g = z.Ng(a.i); e < g; e++) !z.Og(a.i, e)
        .F() || d++;
      a.Be = d
    }
    z.G(a.w, "getNumberOfVisibleItems() - " + a.Be);
    d = a.Be;
    c && 0 == d ? (z.id(a.w, "no matching items, hiding"), Hl(a)) : !c && 0 < d && (b && (z.id(a.w, "showing menu"), Il(a, ""), Jl(a, (0, z.Vb)(a.Ua.ba()
      .toLowerCase()))), z.Ic(a.gi, 1, a), a.i.D(!0), z.Tg(a.f(), "goog-combobox-active"));
    a.Bj()
  };
  var Hl = function (a) {
    a.i.D(!1);
    z.Vg(a.f(), "goog-combobox-active")
  };
  var Kl = function (a) {
    var b = (0, z.Vb)(a.Ua.ba()
      .toLowerCase());
    Il(a, b);
    Yk(z.Ie(a.u())) == a.fc && Gl(a, !1);
    var c = z.Eh(a.i);
    "" != b && c && c.F() || Jl(a, b);
    a.Qm = b;
    a.dispatchEvent("change")
  };
  var Il = function (a, b) {
    z.G(a.w, "setItemVisibilityFromToken_() - " + b);
    for (var c = !1, d = 0, e = !a.ff(b, a.Qm), g = 0, k = z.Ng(a.i); g < k; g++) {
      var l = z.Og(a.i, g);
      if (l instanceof z.Rh) {
        if (!l.F() && !e) continue;
        var m = l.Rc()
          , m = "function" == typeof l.Jp && l.Mm || m && a.ff(m.toLowerCase(), b);
        "function" == typeof l.Kj && l.Kj(b);
        l.D(!!m);
        c = m || c
      } else c = l.F() || c;
      !l.F() || d++
    }
    a.Be = d
  };
  var Jl = function (a, b) {
    z.G(a.w, "setItemHighlightFromToken_() - " + b);
    if ("" != b)
      for (var c = 0, d = z.Ng(a.i); c < d; c++) {
        var e = z.Og(a.i, c)
          , g = e.Rc();
        if (g && a.ff(g.toLowerCase(), b)) {
          a.i.Lc(c);
          e.Kj && e.Kj(b);
          return
        }
      }
    a.i.Lc(-1)
  };
  var Ll = function (a, b, c, d) {
    z.Rh.call(this, a, b, c, d)
  };
  var Ml = function () {
    return (0, z.Ej)('<div><link href=\'https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800\' rel=\'stylesheet\' type=\'text/css\'><div id="gdwr-options-container"><div id="gdwr-navbar-container"><h1 id="gdwr-navbar-content-title" i18n-content="title" data-trans-optionsdlg="settings_dialog_header">Settings</h1><ul id="gdwr-navbar"><li id="gdwr-speech" class="gdwr-navbar-item gdwr-navbar-item-selected" pagename="speech" role="tab" tabindex="0" aria-selected="true" data-trans-optionsdlg="settings_dialog_panel_speech">Speech</li><li id="gdwr-prediction" class="gdwr-navbar-item" pagename="prediction" role="tab" tabindex="1" data-trans-optionsdlg="settings_dialog_panel_prediction">Prediction</li><li id="gdwr-language" class="gdwr-navbar-item" pagename="language" role="tab" tabindex="1" data-trans-optionsdlg="settings_dialog_panel_language">Language</li><li id="gdwr-features" class="gdwr-navbar-item" pagename="features" role="tab" tabindex="1" data-trans-optionsdlg="settings_dialog_panel_features">Features</li><li id="gdwr-about" class="gdwr-navbar-item" pagename="about" role="tab" tabindex="2" data-trans-optionsdlg="settings_dialog_panel_about">About</li></ul></div><div id="gdwr-page-container"><div id="gdwr-speechPage" class="gdwr-page"><h1 i18n-content="settingsPage" data-trans-optionsdlg="settings_dialog_panel_speech">Speech</h1><div class="displaytable"><section id="voiceSection" class="gdwr-section"><h3 i18n-content="voiceGroupName" class="gdwr-h3" data-trans-optionsdlg="settings_dialog_speech_voice">Voice</h3><div><div id="cbothVoices" class="th-goog-combobox"/></div></section><section id="voiceSection" class="gdwr-section"><h3 i18n-content="voiceGroupName" class="gdwr-h3" data-trans-optionsdlg="settings_dialog_speech_speed">Speed</h3><br><div><input type="radio" name="voiceSpeed" class="thVerySlow"/><span i18n-content=​"voiceSpeedVerySlow">&nbsp;<span data-trans-optionsdlg="settings_dialog_speech_very_slow">Very ​Slow</span></span><br><input type="radio" name="voiceSpeed" class="thSlow"/><span i18n-content=​"voiceSpeedSlow">&nbsp;​<span data-trans-optionsdlg="settings_dialog_speech_slow">Slow</span></span><br><input type="radio" name="voiceSpeed" value=\'true\' checked=\'\'/><span i18n-content=​"voiceSpeedMedium" class="thMedium">&nbsp;<span data-trans-optionsdlg="settings_dialog_speech_medium">Medium</span>​</span><br><input type="radio" name="voiceSpeed" class="thFast"/><span i18n-content=​"voiceSpeedFast">&nbsp;<span data-trans-optionsdlg="settings_dialog_speech_fast">Fast</span>​</span><br></div></section><section id="readingSection" class="gdwr-section"><h3 i18n-content="readingGroupName" class="gdwr-h3" data-trans-optionsdlg="settings_dialog_speech_reading">Reading</h3><div><div id="continuousReadingChk" class="goog-checkbox-checked" ></div><span>&nbsp;<span data-trans-optionsdlg="settings_dialog_speech_continuous_reading">Continuous reading</span>​</span><br></div></section><section id="translationSection" class="gdwr-section"><h3 i18n-content="translationGroupName" class="gdwr-h3" data-trans-optionsdlg="settings_dialog_speech_translation">Translation</h3><div><div id="cbothLanguages"  class="th-goog-combobox"/></div></section></div></div><div id="gdwr-predictionPage" class="gdwr-page gdwr-page-hidden"><h1 i18n-content="settingsPage" data-trans-optionsdlg="settings_dialog_panel_prediction">Prediction</h1><div class="displaytable"><section id="voiceSection" class="gdwr-section"><h3 i18n-content="predictionGroupName" class="gdwr-h3" data-trans-optionsdlg="settings_dialog_panel_number_of_results">Number of results</h3><div><input id="thNumberOfPredictions" class="thNumberOfPredictions" type="number" min="3" max="10" step="1" value="10"/><div data-trans-optionsdlg="settings_dialog_panel_prediction_results">  (3-10)</div></div></section></div></div><div id="gdwr-languagePage" class="gdwr-page gdwr-page-hidden"><h1 i18n-content="settingsPage" data-trans-optionsdlg="settings_dialog_panel_language">Language</h1><div class="displaytable"><section id="languageSection" class="gdwr-section"><h3 i18n-content="languageGroupName" class="gdwr-h3" data-trans-optionsdlg="settings_dialog_panel_ui_language">Language</h3><div><div id="cbothUILanguage" class="th-goog-combobox"/></div></section><section id="servicesSection" class="gdwr-section"><h3 i18n-content="servicesGroupName" class="gdwr-h3" data-trans-optionsdlg="settings_dialog_panel_features_language">Features</h3><div><div id="cbothServicesLanguage" class="th-goog-combobox"/></div></section></div></div><div id="gdwr-featuresPage" class="gdwr-page gdwr-page-hidden"><h1 i18n-content="featuresPage" data-trans-optionsdlg="settings_dialog_panel_features">Features</h1><div class="displaytable"><section id="featuresSection" class="gdwr-section"><texthelp-featurelist></texthelp-featurelist></section></div></div><div id="gdwr-aboutPage" class="gdwr-page gdwr-page-hidden"><h1 i18n-content="settingsPage" data-trans-optionsdlg="settings_dialog_panel_about">About</h1><div class="displaytable"><br><div class="texthelp-logo"></div><span data-trans-optionsdlg="product_name">Read&Write for Google Chrome™</span><br>Version 1.7<br><br><br><br></div><br><textarea class="license" rows="2" cols="20" data-trans-optionsdlg="settings_dialog_panel_license">&#10;1. No part of this software may be reproduced or transmitted in any form or by any means, electronic or mechanical, for any purpose, without express written permission of Texthelp Limited. Unauthorised use of this software will be prosecuted to the maximum possible extent under law. &#10;&#10;</textarea></div><div class="gdwr-modal-dialog-buttons gdwr-options-dialog-buttons"/></div></div></div>')
  };
  z.ej = function (a) {
    z.Bg.call(this, a);
    this.Yb = this.$i = this.Ed = this.j = null;
    this.sn = !1;
    this.af = this.ke = this.Ub = null;
    this.Mf = 0;
    this.Lf = "";
    new z.zh
  };
  var Nl = function (a) {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", a.preventDefault, !1);
    window.onmousewheel = window.document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    window.document.onkeydown = null
  };
  var Ol = function () {};
  var Pl = function () {};
  var Ql = function (a) {
    this.Sd = a
  };
  var Rl = function () {
    var a = null;
    try {
      a = window.localStorage || null
    } catch (b) {}
    this.Sd = a
  };
  z.T = function () {
    try {
      this.Sj();
      var a;
      a: {
        try {
          a = null !== z.R.a()
            .ia() ? new nl : new ml;
          break a
        } catch (b) {
          z.R.a()
            .b(b)
        }
        a = void 0
      }
      this.qj = a;
      this.hj = new Rl;
      z.S.a()
        .k("onGetSettingsChanged", this.Dq, this)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  var Sl = function (a, b) {
    try {
      if (null !== b) {
        var c = new Zk
          , d = a.qj.getKey();
        null !== d && a.hj.set(d, $k(c, b))
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  var cl = {
    '"': '\\"'
    , "\\": "\\\\"
    , "/": "\\/"
    , "\b": "\\b"
    , "\f": "\\f"
    , "\n": "\\n"
    , "\r": "\\r"
    , "\t": "\\t"
    , "\x0B": "\\u000b"
  };
  z.w(Vk, Tk);
  Vk.prototype.reset = function () {
    this.Qa[0] = 1732584193;
    this.Qa[1] = 4023233417;
    this.Qa[2] = 2562383102;
    this.Qa[3] = 271733878;
    this.Qj = this.sg = 0
  };
  Vk.prototype.update = function (a, b) {
    z.da(b) || (b = a.length);
    for (var c = b - this.od, d = this.Co, e = this.sg, g = 0; g < b;) {
      if (0 == e)
        for (; g <= c;) Wk(this, a, g), g += this.od;
      if (z.r(a))
        for (; g < b;) {
          if (d[e++] = a.charCodeAt(g++), e == this.od) {
            Wk(this, d);
            e = 0;
            break
          }
        } else
          for (; g < b;)
            if (d[e++] = a[g++], e == this.od) {
              Wk(this, d);
              e = 0;
              break
            }
    }
    this.sg = e;
    this.Qj += b
  };
  z.ga(z.U);
  z.f = z.U.prototype;
  z.f.pb = function () {
    try {
      return this.a()
    } catch (a) {
      return null
    }
  };
  z.f.Ci = function () {
    try {
      return this.ef
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.vi = function () {
    try {
      return this.Zp
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Go = function (a) {
    try {
      this.Fe(this.Eg(a))
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Qs = function () {
    try {
      var a = z.T.a()
        .v();
      this.Fe(a.language.language);
      var b = [];
      b.push(a.language.language);
      z.S.a()
        .l("onUILanguageChanged", b)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Fe = function (a) {
    try {
      if (this.ef.hasOwnProperty(a)) {
        try {
          if (a != this.Tk && (this.Tk = a, this.fh.length = 0, this.fh = JSON.parse(JSON.stringify(this.cn)), a != this.dn)) {
            var b = fl(a)
              .vc()
              , c;
            for (c in b) this.fh[c] = b[c]
          }
        } catch (d) {
          z.R.a()
            .b(d)
        }
        b = [];
        b.push(a);
        z.S.a()
          .l("onUILanguageChanged", b)
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Me = function (a) {
    return this.ef.hasOwnProperty(a) ? this.ef[a] : ""
  };
  z.f.Eg = function (a) {
    for (var b in this.ef)
      if (this.ef.hasOwnProperty(b) && this.ef[b] == a) return b;
    return ""
  };
  z.f.K = function (a) {
    return void 0 == this.fh[a] ? this.cn[a] : this.fh[a]
  };
  z.f.Ne = function () {
    return this.Tk
  };
  z.u("textHelp.webreader.LocaleSingleton", z.U);
  z.U.getInst = z.U.prototype.pb;
  z.U.prototype.getUILanguages = z.U.prototype.Ci;
  z.U.prototype.getFeatureLanguages = z.U.prototype.vi;
  z.U.prototype.changeLanguageString = z.U.prototype.Go;
  z.U.prototype.updateUILanguageFromSettings = z.U.prototype.Qs;
  z.U.prototype.changeLanguage = z.U.prototype.Fe;
  z.U.prototype.getLanguageFromCode = z.U.prototype.Me;
  z.U.prototype.getCodeFromLanguage = z.U.prototype.Eg;
  z.U.prototype.getLocaleString = z.U.prototype.K;
  z.U.prototype.getLocale = z.U.prototype.Ne;
  gl.prototype.vc = function () {
    return {
      product_name: "Read&Write for Google™ Chrome"
      , dialog_OK: "OK"
      , dialog_Cancel: "Annuler"
      , settings_dialog_header: "Paramètres"
      , settings_dialog_panel_speech: "Parole"
      , settings_dialog_speech_voice: "Voix"
      , settings_dialog_speech_speed: "Vitesse"
      , settings_dialog_speech_very_slow: "Très lent"
      , settings_dialog_speech_slow: "Lent"
      , settings_dialog_speech_medium: "Moyen"
      , settings_dialog_speech_fast: "Rapide"
      , settings_dialog_speech_reading: "Lecture"
      , settings_dialog_speech_continuous_reading: "Lecture continue"
      , settings_dialog_speech_translation: "Traduction"
      , settings_dialog_speech_translation_french: "Français"
      , settings_dialog_speech_translation_spanish: "Espagnol"
      , settings_dialog_panel_prediction: "Prédiction"
      , settings_dialog_panel_prediction_results: "(3-10)"
      , settings_dialog_panel_number_of_results: "Nombre de résultats"
      , settings_dialog_panel_language: "Langue"
      , settings_dialog_panel_ui_language: "Langue"
      , settings_dialog_panel_features_language: "Fonctionnalités"
      , settings_dialog_panel_features: "Fonctionnalités"
      , settings_dialog_panel_about: "À propos"
      , settings_dialog_panel_version: "Version 1.6"
      , settings_dialog_panel_license: "Copyright © 2012, 2013 Les Éditions Québec Amérique Inc., under licence to Oxford University Press. All rights reserved.&#10;&#13;Copyright © 2012, 2013 Les Éditions Québec Amérique Inc., sous licence à Oxford University Press. Tous droits réservés.&#10;&#13;Tous droits réservés. Aucune partie de ce logiciel, pour quelque fin que ce soit, ne peut être reproduite ou transmise, sous aucune forme ni d'aucune façon, qu'elle soit électronique ou mécanique,  sans l'autorisation explicite écrite de Texthelp Limited. L'utilisation non autorisée de ce logiciel sera poursuivie avec toute la rigueur de la loi."
      , fixedtoolbar_prediction: "Prédiction"
      , fixedtoolbar_dictionary: "Dictionnaire"
      , fixedtoolbar_picture_dictionary: "Dictionnaire d'images"
      , fixedtoolbar_play: "Lire"
      , fixedtoolbar_pause: "Suspendre"
      , fixedtoolbar_stop: "Arrêter"
      , fixedtoolbar_screenshotreader: "Lecteur de capture d'écran"
      , fixedtoolbar_fact_finder: "Outil de recherche"
      , fixedtoolbar_speech_input: "Saisie de parole"
      , fixedtoolbar_translator: "Traducteur"
      , fixedtoolbar_highlight_yellow: "Surbrillance jaune"
      , fixedtoolbar_highlight_blue: "Surbrillance bleue"
      , fixedtoolbar_highlight_green: "Surbrillance verte"
      , fixedtoolbar_highlight_pink: "Surbrillance rose"
      , fixedtoolbar_clear: "Effacer les surbrillances"
      , fixedtoolbar_highlight_collect: "Collecter les surbrillances"
      , fixedtoolbar_highlight_vocabulary: "Vocabulaire"
      , fixedtoolbar_highlight_voicenote: "Voice Note"
      , fixedtoolbar_highlight_help: "Aide"
      , fixedtoolbar_highlight_settings: "Paramètres"
      , dictionary_dialog_heading: "Dictionnaire"
      , picture_dictionary_dialog_heading: "Dictionnaire d'images"
      , translator_dialog_heading: "Traducteur"
      , dialog_definition_notfound: "Aucune correspondance pour ce mot"
      , collect_highlights_dialog_heading: "Collecter les surbrillances"
      , collecthighlights_sort: "Trier les surbrillances par"
      , collecthighlights_color: "couleur"
      , collecthighlights_position: "position"
      , collecthighlights_to_collect: "Couleurs à collecter"
      , collect_highlights_notification: "Collecter les surbrillances"
      , collect_highlights_notification_text: "Nouveau document contenant les surbriances en cours de création"
      , vocab_notification: "Liste de vocabulaire"
      , vocab_notification_text: "Document contenant la liste de vocabulaire en cours de création"
      , texthelp_toolbar_prediction: "Prédiction"
      , texthelp_toolbar_clicktospeak: "Mode Parole activé"
      , texthelp_toolbar_dictionary: "Dictionnaire"
      , texthelp_toolbar_picturedictionary: "Dictionnaire d'images"
      , texthelp_toolbar_play: "Lire"
      , texthelp_toolbar_pause: "Suspendre"
      , texthelp_toolbar_stop: "Arrêter"
      , texthelp_toolbar_screenshotreader: "Lecteur de capture d'écran"
      , texthelp_toolbar_screenmasking: "Masque d'écran"
      , texthelp_toolbar_speechmaker: "Discours Fabricant"
      , texthelp_toolbar_speechinput: "Saisie de parole"
      , texthelp_toolbar_factfinder: "Outil de recherche"
      , texthelp_toolbar_translator: "Traducteur"
      , texthelp_toolbar_highlightblue: "Surbrillance bleue"
      , texthelp_toolbar_highlightpink: "Surbrillance rose"
      , texthelp_toolbar_highlightyellow: "Surbrillance jaune"
      , texthelp_toolbar_highlightgreen: "Surbrillance verte"
      , texthelp_toolbar_highlightclear: "Effacer les surbrillances"
      , texthelp_toolbar_highlightscollect: "Collecter les surbrillances"
      , texthelp_toolbar_vocabtool: "Vocabulaire"
      , texthelp_toolbar_voicenote: "Note Vocal"
      , texthelp_toolbar_simplify: "Simplifier la page"
      , texthelp_toolbar_practicereadingaloud: "Pratique lecture à haute voix"
      , texthelp_toolbar_settings: "Paramètres"
      , texthelp_toolbar_help: "Aide"
      , texthelp_toolbar_logo: "www.texthelp.com"
      , speechstream_picture_dictionary_heading: "Dictionnaire d'images"
      , speechstream_picture_dictionary: "Dictionnaire d'images"
      , speechstream_translator: "Traducteur"
      , speechstream_collect_highlights_dialog_heading: "Collecter les surbrillances"
      , speechstream_collecthighlights_sort: "Trier les surbrillances par"
      , speechstream_collecthighlights_color: "couleur"
      , speechstream_collecthighlights_position: "position"
      , speechstream_collecthighlights_to_collect: "Couleurs à collecter"
      , speechstream_msh_removehighlights: "Voulez-vous supprimer toutes les surbrillances?"
      , speechstream_msh_singlewordnoselection: "Aucune sélection de mot à rechercher. Recherche de mots uniquement, et non de phrases."
      , speechstream_msh_noselection: "Aucune sélection de mot à rechercher"
      , speechstream_clickhere: "www.texthelp.com"
      , ch_documentTitle: "Faits saillants Untitled"
      , vocab_document_title: "Vocabulaire Liste Untitled"
      , vocab_title: "Vocabulaire Liste"
      , vocab_word_heading: "Mot"
      , vocab_word_meaning: "Sens"
      , vocab_word_symbol: "Symbole"
      , vocab_word_notes: "Remarques"
      , blocked_site: "Read&Write for Google Chrome™ ne supporte pas ce site."
      , voicenote_insert: "Ajoutez"
      , voicenote_recording: "Enregistrement en cours..."
      , voicenote_folder: "Mes notes vocales"
      , voicenote_filename: "Note Vocale"
      , voicenote_nomic: "Assurez-vous que votre microphone est bien branché"
      , selection_no_word: "Aucun mot valide sélectionné"
      , speechmaker_large_text: "Le système pourrait ralentir si vous convertissez beaucoup de texte en audio.\nVoulez-vous continuer?"
      , speechmaker_error_header: "Erreur dans la conversion du texte"
      , speechmaker_error_content: "Impossible de générer audio en ce moment. Veuillez réessayer plus tard."
    }
  };
  z.u("textHelp.webreader.locale.fr", gl);
  gl.getTextMap = gl.prototype.vc;
  hl.prototype.vc = function () {
    return {
      product_name: "Read&Write for Google Chrome™"
      , dialog_OK: "OK"
      , dialog_Cancel: "Cancel"
      , settings_dialog_header: "Settings"
      , settings_dialog_panel_speech: "Speech"
      , settings_dialog_speech_voice: "Voice"
      , settings_dialog_speech_speed: "Speed"
      , settings_dialog_speech_very_slow: "Very slow"
      , settings_dialog_speech_slow: "Slow"
      , settings_dialog_speech_medium: "Medium"
      , settings_dialog_speech_fast: "Fast"
      , settings_dialog_speech_reading: "Reading"
      , settings_dialog_speech_continuous_reading: "Continuous reading"
      , settings_dialog_speech_translation: "Translation"
      , settings_dialog_speech_translation_french: "French"
      , settings_dialog_speech_translation_spanish: "Spanish"
      , settings_dialog_panel_prediction: "Prediction"
      , settings_dialog_panel_prediction_results: "(3-10)"
      , settings_dialog_panel_number_of_results: "Number of results"
      , settings_dialog_panel_language: "Language"
      , settings_dialog_panel_ui_language: "Language"
      , settings_dialog_panel_features_language: "Features"
      , settings_dialog_panel_features: "Features"
      , settings_dialog_panel_about: "About"
      , settings_dialog_panel_version: "Version 1.3.2.5"
      , settings_dialog_panel_license: "All rights reserved. No part of this software may be reproduced or transmitted in any form or by any means, electronic or mechanical, for any purpose, without express written permission of Texthelp Limited. Unauthorised use of this software will be prosecuted to the maximum possible extent under law."
      , fixedtoolbar_prediction: "Prediction"
      , fixedtoolbar_dictionary: "Dictionary"
      , fixedtoolbar_picture_dictionary: "Picture Dictionary"
      , fixedtoolbar_play: "Play"
      , fixedtoolbar_pause: "Pause"
      , fixedtoolbar_stop: "Stop"
      , fixedtoolbar_screenshotreader: "Screenshot Reader"
      , fixedtoolbar_fact_finder: "Fact Finder"
      , fixedtoolbar_speech_input: "Speech Input"
      , fixedtoolbar_translator: "Translator"
      , fixedtoolbar_highlight_yellow: "Highlight Yellow"
      , fixedtoolbar_highlight_blue: "Highlight Blue"
      , fixedtoolbar_highlight_green: "Highlight Green"
      , fixedtoolbar_highlight_pink: "Highlight Pink"
      , fixedtoolbar_clear: "Clear Highlights"
      , fixedtoolbar_highlight_collect: "Collect highlights"
      , fixedtoolbar_highlight_vocabulary: "Vocabulary"
      , fixedtoolbar_highlight_help: "Help"
      , fixedtoolbar_highlight_settings: "Settings"
      , dictionary_dialog_heading: "Dictionary"
      , picture_dictionary_dialog_heading: "Picture Dictionary"
      , translator_dialog_heading: "Translator"
      , dialog_definition_notfound: "No match was found for this word."
      , collect_highlights_dialog_heading: "Collect highlights"
      , collecthighlights_sort: "Sort highlights by"
      , collecthighlights_color: "color"
      , collecthighlights_position: "position"
      , collecthighlights_to_collect: "Colors to collect"
      , collect_highlights_notification: "Collect highlights"
      , collect_highlights_notification_text: "A new document containing your highlights is being created"
      , vocab_notification: "Vocabulary List"
      , vocab_notification_text: "A new document containing your vocabulary list is being created"
      , texthelp_toolbar_prediction: "Prediction"
      , texthelp_toolbar_clicktospeak: "Hover Speech"
      , texthelp_toolbar_dictionary: "Dictionary"
      , texthelp_toolbar_picturedictionary: "Picture Dictionary"
      , texthelp_toolbar_play: "Play"
      , texthelp_toolbar_pause: "Pause"
      , texthelp_toolbar_stop: "Stop"
      , texthelp_toolbar_screenmasking: "Screen Mask"
      , texthelp_toolbar_screenshotreader: "Screenshot Reader"
      , texthelp_toolbar_speechmaker: "Speech Maker"
      , texthelp_toolbar_factfinder: "Fact Finder"
      , texthelp_toolbar_speechinput: "Speech Input"
      , texthelp_toolbar_translator: "Translator"
      , texthelp_toolbar_highlightblue: "Highlight Blue"
      , texthelp_toolbar_highlightpink: "Highlight Pink"
      , texthelp_toolbar_highlightyellow: "Highlight Yellow"
      , texthelp_toolbar_highlightgreen: "Highlight Green"
      , texthelp_toolbar_highlightclear: "Clear Highlights"
      , texthelp_toolbar_highlightscollect: "Collect highlights"
      , texthelp_toolbar_vocabtool: "Vocabulary"
      , texthelp_toolbar_voicenote: "Voice Note"
      , texthelp_toolbar_simplify: "Simplify page"
      , texthelp_toolbar_practicereadingaloud: "Practice Reading Aloud"
      , texthelp_toolbar_settings: "Settings"
      , texthelp_toolbar_help: "Help"
      , texthelp_toolbar_logo: "www.texthelp.com"
      , speechstream_picture_dictionary_heading: "Picture Dictionary"
      , speechstream_picture_dictionary: "Picture Dictionary"
      , speechstream_translator: "Translator"
      , speechstream_collect_highlights_dialog_heading: "Collect highlights"
      , speechstream_collecthighlights_sort: "Sort highlights by"
      , speechstream_collecthighlights_color: "color"
      , speechstream_collecthighlights_position: "position"
      , speechstream_collecthighlights_to_collect: "Colors to collect"
      , speechstream_msh_removehighlights: "Remove all highlights?"
      , speechstream_msh_singlewordnoselection: "No words selected to look up.  Lookup only works on single word selections, not sentences."
      , speechstream_msh_noselection: "No words selected to look up."
      , speechstream_clickhere: "www.texthelp.com"
      , ch_documentTitle: "Highlights Untitled"
      , vocab_document_title: "Vocabulary List Untitled"
      , vocab_title: "Vocabulary List"
      , vocab_word_heading: "Word"
      , vocab_word_meaning: "Meaning"
      , vocab_word_symbol: "Symbol"
      , vocab_word_notes: "Notes"
      , blocked_site: "Read&Write for Google Chrome™ does not support this site."
      , voicenote_insert: "INSERT"
      , voicenote_recording: "Recording..."
      , voicenote_folder: "My Voice Notes"
      , voicenote_filename: "Voice Note"
      , voicenote_nomic: "Please check your microphone"
      , selection_no_word: "No valid word selected"
      , speechmaker_large_text: "Converting large amounts of text into audio may cause the system to slow down.\nWould you like to continue?"
      , speechmaker_error_header: "Error Converting Text"
      , speechmaker_error_content: "Unable to generate audio at this time. Please try again later."
    }
  };
  z.u("textHelp.webreader.locale.en_US", hl);
  hl.getTextMap = hl.prototype.vc;
  il.prototype.vc = function () {
    return {
      product_name: "Read&Write for Google Chrome™"
      , dialog_OK: "OK"
      , dialog_Cancel: "Cancelar"
      , settings_dialog_header: "Ajustes"
      , settings_dialog_panel_speech: "Función de lectura"
      , settings_dialog_speech_voice: "Voz-idioma"
      , settings_dialog_speech_speed: "Velocidad de lectura"
      , settings_dialog_speech_very_slow: "Muy lenta"
      , settings_dialog_speech_slow: "Lenta"
      , settings_dialog_speech_medium: "Media "
      , settings_dialog_speech_fast: "Rápida"
      , settings_dialog_speech_reading: "Tipo de lectura"
      , settings_dialog_speech_continuous_reading: " Continuada (por párrafos)"
      , settings_dialog_speech_translation: "Idioma del traductor"
      , settings_dialog_speech_translation_french: "Francés"
      , settings_dialog_speech_translation_spanish: "Español"
      , settings_dialog_panel_prediction: "Predicción"
      , settings_dialog_panel_prediction_results: "(3-10)"
      , settings_dialog_panel_number_of_results: "Número de opciones"
      , settings_dialog_panel_language: "Opciones de idioma"
      , settings_dialog_panel_ui_language: "Idioma"
      , settings_dialog_panel_features_language: "Funciones"
      , settings_dialog_panel_features: "Funciones"
      , settings_dialog_panel_about: "Más información"
      , settings_dialog_panel_version: "Versión  1.3.2.5"
      , settings_dialog_panel_license: "Todos los derechos reservados. No se permite duplicar ni transmitir, de forma electrónica o mecánica, este software, sin autorización escrita de Texthelp Limited. El uso de este software sin la autorización será perseguido por la ley."
      , fixedtoolbar_prediction: "Predicción de texto"
      , fixedtoolbar_dictionary: "Diccionario"
      , fixedtoolbar_picture_dictionary: "Diccionario imágenes"
      , fixedtoolbar_play: "Leer en voz alta"
      , fixedtoolbar_pause: "Pausar"
      , fixedtoolbar_stop: "Parar"
      , fixedtoolbar_screenshotreader: "Lectura por selección"
      , fixedtoolbar_fact_finder: "Buscador"
      , fixedtoolbar_speech_input: "Escritura por voz"
      , fixedtoolbar_translator: "Traducir"
      , fixedtoolbar_highlight_yellow: "Subrayador amarillo"
      , fixedtoolbar_highlight_blue: "Subrayador azul"
      , fixedtoolbar_highlight_green: "Subrayador verde"
      , fixedtoolbar_highlight_pink: "Subrayador rosa"
      , fixedtoolbar_clear: "Borrar subrayado"
      , fixedtoolbar_highlight_collect: "Compilar texto subrayado"
      , fixedtoolbar_highlight_vocabulary: "Lista de vocabulario"
      , fixedtoolbar_highlight_help: "Ayuda"
      , fixedtoolbar_highlight_settings: "Ajustes"
      , dictionary_dialog_heading: "Diccionario"
      , picture_dictionary_dialog_heading: "Diccionario imágenes"
      , translator_dialog_heading: "Traducir"
      , dialog_definition_notfound: "La búsqueda no produjo ningún resultado."
      , collect_highlights_dialog_heading: "Compilar texto subrayado"
      , collecthighlights_sort: "Ordenar según"
      , collecthighlights_color: "Color"
      , collecthighlights_position: "Posición"
      , collecthighlights_to_collect: "Colores para compilar"
      , collect_highlights_notification: "Compilar el texto subrayado"
      , collect_highlights_notification_text: "Se creará un documento nuevo con el texto subrayado"
      , vocab_notification: "Lista de vocabulario"
      , vocab_notification_text: "se creará un documento nuevo (lista) con las palabras subrayadas"
      , texthelp_toolbar_prediction: "Predicción de texto"
      , texthelp_toolbar_clicktospeak: "Click para leer"
      , texthelp_toolbar_dictionary: "Diccionario"
      , texthelp_toolbar_picturedictionary: "Diccionario imágenes"
      , texthelp_toolbar_play: "Leer en voz alta"
      , texthelp_toolbar_pause: "Pausar"
      , texthelp_toolbar_stop: "Parar"
      , texthelp_toolbar_screenshotreader: "Lectura por selección"
      , texthelp_toolbar_screenmasking: "Máscara de pantalla"
      , texthelp_toolbar_speechmaker: "Grabar lectura"
      , texthelp_toolbar_speechinput: "Escritura por voz"
      , texthelp_toolbar_factfinder: "Buscador"
      , texthelp_toolbar_translator: "Traducir"
      , texthelp_toolbar_highlightblue: "Subrayador azul"
      , texthelp_toolbar_highlightpink: "Subrayador rosa"
      , texthelp_toolbar_highlightyellow: "Subrayador amarillo"
      , texthelp_toolbar_highlightgreen: "Subrayador verde"
      , texthelp_toolbar_highlightclear: "Borrar subrayado"
      , texthelp_toolbar_highlightscollect: "Compilar texto subrayado"
      , texthelp_toolbar_vocabtool: "Lista de vocabulario"
      , texthelp_toolbar_voicenote: "Nota de voz"
      , texthelp_toolbar_simplify: "Simplificar la página"
      , texthelp_toolbar_practicereadingaloud: "Práctica de lectura en voz alta"
      , texthelp_toolbar_settings: "Ajustes"
      , texthelp_toolbar_help: "Ayuda"
      , texthelp_toolbar_logo: "www.texthelp.com"
      , speechstream_picture_dictionary_heading: "Diccionario imágenes"
      , speechstream_picture_dictionary: "Diccionario imágenes"
      , speechstream_translator: "Traducir"
      , speechstream_collect_highlights_dialog_heading: "Compilar texto subrayado"
      , speechstream_collecthighlights_sort: "Ordenar según"
      , speechstream_collecthighlights_color: "Color"
      , speechstream_collecthighlights_position: "Posición"
      , speechstream_collecthighlights_to_collect: "Colores para compilar"
      , speechstream_msh_removehighlights: "¿Borrar el subrayado del texto?"
      , speechstream_msh_singlewordnoselection: "No hay palabras selecionadas para buscar. Esta función no puede buscar frases, sólo palabras individuales."
      , speechstream_msh_noselection: "Ninguna palabra selecionada para buscar."
      , speechstream_clickhere: "www.texthelp.com"
      , ch_documentTitle: "Texto subrayado sin título"
      , vocab_document_title: "Lista de vocabulario sin título"
      , vocab_title: "Lista de vocabulario"
      , vocab_word_heading: "Palabra"
      , vocab_word_meaning: "Significado"
      , vocab_word_symbol: "Imagen"
      , vocab_word_notes: "Notas"
      , blocked_site: "Read&Write for Google Chrome™ no admite este sitio web."
      , voicenote_insert: "INSERTAR"
      , voicenote_recording: "Grabando..."
      , voicenote_folder: "Mis notas de voz "
      , voicenote_filename: "Nota de voz"
      , voicenote_nomic: "Por favor verifique su micrófono"
      , selection_no_word: "No hay palabra válida seleccionada"
      , speechmaker_large_text: "El sistema puede ralentizarse si convierte grandes cantidades de texto en audio.\n¿Quiere continuar?"
      , speechmaker_error_header: "Error en la conversión de texto"
      , speechmaker_error_content: "No se puede generar el audio en este momento. Por favor, inténtelo más tarde."
    }
  };
  z.u("textHelp.webreader.locale.es", il);
  il.getTextMap = il.prototype.vc;
  jl.prototype.vc = function () {
    return {
      product_name: "Read&Write for Google Chrome™"
      , dialog_OK: "OK"
      , dialog_Cancel: "Cancelar"
      , settings_dialog_header: "Configurações"
      , settings_dialog_panel_speech: "Voz"
      , settings_dialog_speech_voice: "Voz"
      , settings_dialog_speech_speed: "Velocidade"
      , settings_dialog_speech_very_slow: "Muito lento"
      , settings_dialog_speech_slow: "Lento"
      , settings_dialog_speech_medium: "Médio"
      , settings_dialog_speech_fast: "Rápido"
      , settings_dialog_speech_reading: "Leitura"
      , settings_dialog_speech_continuous_reading: "Leitura contínua"
      , settings_dialog_speech_translation: "Tradução"
      , settings_dialog_speech_translation_french: "Francesa"
      , settings_dialog_speech_translation_spanish: "Espanhol,"
      , settings_dialog_panel_prediction: "Previsão de Palavras"
      , settings_dialog_panel_prediction_results: "(3-10)"
      , settings_dialog_panel_number_of_results: "Número de resultados"
      , settings_dialog_panel_language: "Idioma"
      , settings_dialog_panel_ui_language: "Idioma"
      , settings_dialog_panel_features_language: "Recursos"
      , settings_dialog_panel_features: "Recursos"
      , settings_dialog_panel_about: "Sobre"
      , settings_dialog_panel_version: "Versão 1.6"
      , settings_dialog_panel_license: "Copyright © 2012 Editora Objetiva, sob licença da Oxford University Press. Todos os direitos reservados.&#10;&#13;Copyright © 2012 Editora Objetiva, under licence to Oxford University Press. All rights reserved.&#10;&#13;Todos os direitos reservados. Nenhuma parte deste software pode ser reproduzida ou transmitida de nenhuma forma ou maneira, nem mecânica nem eletrônica, com nenhum objetivo, sem a permissão expressa e por escrito da Texthelp Limited. O uso não autorizado deste software será processado até o limite máximo da lei."
      , fixedtoolbar_prediction: "Previsão de Palavras"
      , fixedtoolbar_dictionary: "Dicionário"
      , fixedtoolbar_picture_dictionary: "Dicionário de imagens"
      , fixedtoolbar_play: "Reproduzir"
      , fixedtoolbar_pause: "Pausar"
      , fixedtoolbar_stop: "Parar"
      , fixedtoolbar_screenshotreader: "Leitor de tela"
      , fixedtoolbar_fact_finder: "Localizador de Factos"
      , fixedtoolbar_speech_input: "Entrada de Voz para Adição de Fala ao Texto"
      , fixedtoolbar_translator: "Tradutor"
      , fixedtoolbar_highlight_yellow: "Destaque amarelo"
      , fixedtoolbar_highlight_blue: "Destaque azul"
      , fixedtoolbar_highlight_green: "Destaque verde"
      , fixedtoolbar_highlight_pink: "Destaque rosa"
      , fixedtoolbar_clear: "Remover destaques"
      , fixedtoolbar_highlight_collect: "Compilar destaques"
      , fixedtoolbar_highlight_vocabulary: "Vocabulário para Dicionário Extendido"
      , fixedtoolbar_highlight_voicenote: "Voice Note"
      , fixedtoolbar_highlight_help: "Ajuda"
      , fixedtoolbar_highlight_settings: "Configurações"
      , dictionary_dialog_heading: "Dicionário"
      , picture_dictionary_dialog_heading: "Dicionário de imagens"
      , translator_dialog_heading: "Tradutor"
      , dialog_definition_notfound: "Nada foi encontrado para esta palavra."
      , collect_highlights_dialog_heading: "Compilar destaques"
      , collecthighlights_sort: "Organizar destaques por"
      , collecthighlights_color: "cor"
      , collecthighlights_position: "posição"
      , collecthighlights_to_collect: "Cores a compilar"
      , collect_highlights_notification: "Compilar destaques"
      , collect_highlights_notification_text: "Um novo documento contendo seus destaques está sendo criado"
      , vocab_notification: "Lista de vocabulário"
      , vocab_notification_text: "Um novo documento contendo sua lista de vocabulário está sendo criado"
      , texthelp_toolbar_prediction: "Previsão de Palavras"
      , texthelp_toolbar_clicktospeak: "Leitura sem clique"
      , texthelp_toolbar_dictionary: "Dicionário"
      , texthelp_toolbar_picturedictionary: "Dicionário de imagens"
      , texthelp_toolbar_play: "Reproduzir"
      , texthelp_toolbar_pause: "Pausar"
      , texthelp_toolbar_stop: "Parar"
      , texthelp_toolbar_screenshotreader: "Leitor de tela"
      , texthelp_toolbar_screenmasking: "Máscara de ecrã"
      , texthelp_toolbar_speechmaker: "Fabricante de Discurso"
      , texthelp_toolbar_speechinput: "Entrada de Voz"
      , texthelp_toolbar_factfinder: "Localizador de Factos"
      , texthelp_toolbar_translator: "Tradutor"
      , texthelp_toolbar_highlightblue: "Destaque azul"
      , texthelp_toolbar_highlightpink: "Destaque rosa"
      , texthelp_toolbar_highlightyellow: "Destaque amarelo"
      , texthelp_toolbar_highlightgreen: "Destaque verde"
      , texthelp_toolbar_highlightclear: "Remover destaques"
      , texthelp_toolbar_highlightscollect: "Compilar destaques"
      , texthelp_toolbar_vocabtool: "Vocabulário"
      , texthelp_toolbar_voicenote: "Anotação de Voz​"
      , texthelp_toolbar_simplify: "Simplificar página"
      , texthelp_toolbar_practicereadingaloud: "Prática Leitura em Voz Alta"
      , texthelp_toolbar_settings: "Configurações"
      , texthelp_toolbar_help: "Ajuda"
      , texthelp_toolbar_logo: "www.texthelp.com"
      , speechstream_picture_dictionary_heading: "Dicionário de imagens"
      , speechstream_picture_dictionary: "Dicionário de imagens"
      , speechstream_translator: "Tradutor"
      , speechstream_collect_highlights_dialog_heading: "Compilar destaques"
      , speechstream_collecthighlights_sort: "Organizar destaques por"
      , speechstream_collecthighlights_color: "cor"
      , speechstream_collecthighlights_position: "posição"
      , speechstream_collecthighlights_to_collect: "Cores a compilar"
      , speechstream_msh_removehighlights: "Remover todos os destaques?"
      , speechstream_msh_singlewordnoselection: "Nenhuma palavra selecionada para pesquisar. A pesquisa funciona somente em seleções de uma só palavra."
      , speechstream_msh_noselection: "Nenhuma palavra selecionada para pesquisar."
      , speechstream_clickhere: "www.texthelp.com"
      , ch_documentTitle: "Destaques sem título"
      , vocab_document_title: "Lista de vocabulário sem título"
      , vocab_title: "Lista de vocabulário"
      , vocab_word_heading: "Palavra"
      , vocab_word_meaning: "Significado"
      , vocab_word_symbol: "Símbolo"
      , vocab_word_notes: "Observações"
      , blocked_site: "Read&Write for Google Chrome™ não tem suporte para este site."
      , voicenote_insert: "Inserir"
      , voicenote_recording: "Gravando​..."
      , voicenote_folder: "As minhas anotações de voz"
      , voicenote_filename: "Anotação de Voz"
      , voicenote_nomic: "Por favor, verifique seu microfone!​"
      , selection_no_word: "Nenhuma palavra válida selecionado"
      , speechmaker_large_text: "Converter grandes quantidades de texto em áudio pode causar o sistema para abrandar.\nVocê gostaria de continuar?"
      , speechmaker_error_header: "Erro ao converter texto"
      , speechmaker_error_content: "Não é possível gerar áudio neste momento. Por favor, tente novamente mais tarde."
    }
  };
  z.u("textHelp.webreader.locale.pt", jl);
  jl.getTextMap = jl.prototype.vc;
  kl.prototype.vc = function () {
    return {
      product_name: "Read&Write for Google Chrome™"
      , dialog_OK: "OK"
      , dialog_Cancel: "Batal"
      , settings_dialog_header: "Tetapan"
      , settings_dialog_panel_speech: "Ucapan"
      , settings_dialog_speech_voice: "Suara"
      , settings_dialog_speech_speed: "Kelajuan"
      , settings_dialog_speech_very_slow: "Sangat perlahan"
      , settings_dialog_speech_slow: "Perlahan"
      , settings_dialog_speech_medium: "Sederhana"
      , settings_dialog_speech_fast: "Laju"
      , settings_dialog_speech_reading: "Bacaan"
      , settings_dialog_speech_continuous_reading: "Bacaan berterusan"
      , settings_dialog_speech_translation: "Terjemahan"
      , settings_dialog_speech_translation_french: "Perancis"
      , settings_dialog_speech_translation_spanish: "Sepanyol"
      , settings_dialog_panel_prediction: "Ramalan / Jangkaan"
      , settings_dialog_panel_prediction_results: "(3-10)"
      , settings_dialog_panel_number_of_results: "Bilangan keputusan"
      , settings_dialog_panel_language: "Bahasa"
      , settings_dialog_panel_ui_language: "Bahasa"
      , settings_dialog_panel_features_language: "Ciri-ciri"
      , settings_dialog_panel_features: "Ciri-ciri"
      , settings_dialog_panel_about: "Tentang / Mengenai"
      , settings_dialog_panel_version: "Version 1.3.2.5"
      , settings_dialog_panel_license: "Hak cipta terpelihara. Tiada bahagian daripada perisian ini boleh diterbitkan semula atau dipindahkan dalam sebarang bentuk atau dengan apa-apa cara, elektronik atau mekanikal, untuk apa jua tujuan, tanpa kebenaran bertulis daripada Texthelp Limited. Penggunaan tanpa kebenaran perisian ini akan didakwa sehingga ke tahap semaksimum yang mungkin di bawah undang-undang."
      , fixedtoolbar_prediction: "Ramalan / Jangkaan"
      , fixedtoolbar_dictionary: "Kamus"
      , fixedtoolbar_picture_dictionary: "Kamus bergambar"
      , fixedtoolbar_play: "Mainkan"
      , fixedtoolbar_pause: "Jeda"
      , fixedtoolbar_stop: "Berhenti"
      , fixedtoolbar_screenshotreader: "Pembaca Paparan Skrin"
      , fixedtoolbar_fact_finder: "Pencari Fakta"
      , fixedtoolbar_speech_input: "Input Ucapan"
      , fixedtoolbar_translator: "Penterjemah"
      , fixedtoolbar_highlight_yellow: "Penyerlah Kuning"
      , fixedtoolbar_highlight_blue: "Penyerlah Biru"
      , fixedtoolbar_highlight_green: "Penyerlah Hijau"
      , fixedtoolbar_highlight_pink: "Penyerlah Merah Jambu"
      , fixedtoolbar_clear: "Alih serlahan"
      , fixedtoolbar_highlight_collect: "Kumpul serlahan"
      , fixedtoolbar_highlight_vocabulary: "Kosa kata"
      , fixedtoolbar_highlight_help: "Bantuan"
      , fixedtoolbar_highlight_settings: "Tetapan"
      , dictionary_dialog_heading: "Kamus"
      , picture_dictionary_dialog_heading: "Kamus bergambar"
      , translator_dialog_heading: "Penterjemah"
      , dialog_definition_notfound: "Tiada padanan ditemui untuk perkataan ini."
      , collect_highlights_dialog_heading: "Kumpul serlahan"
      , collecthighlights_sort: "Susun serlahan menurut"
      , collecthighlights_color: "warna"
      , collecthighlights_position: "kedudukan / posisi"
      , collecthighlights_to_collect: "Warna untuk dikumpul"
      , collect_highlights_notification: "Kumpul serlahan"
      , collect_highlights_notification_text: "Dokumen baru mengandungi serlahan anda sedang dibina"
      , vocab_notification: "Senarai  kosa kata"
      , vocab_notification_text: "Dokumen baru mengandungi senarai kosa kata anda sedang dibina"
      , texthelp_toolbar_prediction: "Ramalan / Jangkaan"
      , texthelp_toolbar_clicktospeak: "Ucapan Selayang /  Ucapan Imbasan"
      , texthelp_toolbar_dictionary: "Kamus"
      , texthelp_toolbar_picturedictionary: "Kamus bergambar"
      , texthelp_toolbar_play: "Mainkan"
      , texthelp_toolbar_pause: "Jeda"
      , texthelp_toolbar_stop: "Berhenti"
      , texthelp_toolbar_screenmasking: "Topeng Skrin"
      , texthelp_toolbar_screenshotreader: "Pembaca Paparan Skrin"
      , texthelp_toolbar_speechmaker: "Pembuat Ucapan"
      , texthelp_toolbar_factfinder: "Pencari Fakta"
      , texthelp_toolbar_speechinput: "Input Ucapan"
      , texthelp_toolbar_translator: "Penterjemah"
      , texthelp_toolbar_highlightblue: "Penyerlah Biru"
      , texthelp_toolbar_highlightpink: "Penyerlah Merah Jambu"
      , texthelp_toolbar_highlightyellow: "Penyerlah Kuning"
      , texthelp_toolbar_highlightgreen: "Penyerlah Hijau"
      , texthelp_toolbar_highlightclear: "Alih serlahan"
      , texthelp_toolbar_highlightscollect: "Kumpul serlahan"
      , texthelp_toolbar_vocabtool: "Kosa kata"
      , texthelp_toolbar_voicenote: "Nota Suara"
      , texthelp_toolbar_simplify: "Mudahkan halaman"
      , texthelp_toolbar_practicereadingaloud: "Amalan pembacaan kuat"
      , texthelp_toolbar_settings: "Tetapan"
      , texthelp_toolbar_help: "Bantuan"
      , texthelp_toolbar_logo: "www.texthelp.com"
      , speechstream_picture_dictionary_heading: "Kamus bergambar"
      , speechstream_picture_dictionary: "Kamus bergambar"
      , speechstream_translator: "Penterjemah"
      , speechstream_collect_highlights_dialog_heading: "Kumpul serlahan"
      , speechstream_collecthighlights_sort: "Susun serlahan menurut"
      , speechstream_collecthighlights_color: "warna"
      , speechstream_collecthighlights_position: "kedudukan / posisi"
      , speechstream_collecthighlights_to_collect: "Warna untuk dikumpul"
      , speechstream_msh_removehighlights: "Alih semua serlahan?"
      , speechstream_msh_singlewordnoselection: "Tiada perkatan yang dipilih untuk dicari. Carian hanya berfungsi pada pilihan perkataan tunggal, bukan ayat."
      , speechstream_msh_noselection: "Tiada perkataan yang dipilih untuk dicari."
      , speechstream_clickhere: "www.texthelp.com"
      , ch_documentTitle: "Serlahan Tanpa Nama / Serlahan Tanpa Tajuk"
      , vocab_document_title: "Senarai Kosa Kata Tanpa Nama /  Senarai  Kosa Kata Tanpa Tajuk"
      , vocab_title: "Senarai Kosa Kata"
      , vocab_word_heading: "Perkataan"
      , vocab_word_meaning: "Makna / Maksud"
      , vocab_word_symbol: "Simbol /  Lambang"
      , vocab_word_notes: "Nota"
      , blocked_site: "Read&Write for Google Chrome™ tidak  menyokong laman  ini."
      , voicenote_insert: "MASUKKAN"
      , voicenote_recording: "Sedang merakam..."
      , voicenote_folder: "Nota Suara Saya"
      , voicenote_filename: "Nota Suara"
      , voicenote_nomic: "Sila uji mikrofon anda / Sila periksa mikrofon anda"
      , selection_no_word: "Tiada perkataan sah dipilih"
      , speechmaker_large_text: "Mengalihkan sejumlah besar teks ke dalam audio mungkin menyebabkan sistem menjadi perlahan. Adakah anda ingin teruskan?"
      , speechmaker_error_header: "Ralat Menukar Teks"
      , speechmaker_error_content: "Tidak dapat menjana audio pada kali ini. Sila cuba sebentar lagi."
    }
  };
  z.u("textHelp.webreader.locale.ms", kl);
  kl.getTextMap = kl.prototype.vc;
  el.prototype.Ci = function () {
    return {
      en_US: "English (United States)"
      , es: "Español Beta"
      , fr: "Français"
      , pt: "Português (Brasileira) Beta"
      , ms: "Bahasa Melayu"
    }
  };
  el.prototype.vi = function () {
    return {
      en_US: "English (United States)"
      , es: "Español Beta"
      , fr: "Français"
      , pt: "Português (Brasileira) Beta"
    }
  };
  z.u("textHelp.webreader.locale.Languages", el);
  z.ga(z.fj);
  z.fj.prototype.Ab = function () {
    return {
      locale: "en-US"
      , highlighterSiteMap: {
        "https://docs.google.com/document/*edit": {
          parser: "GDocsParser"
          , name: "Google Docs"
          , bar: {
            dock: "docked-top"
            , supported: "prediction dictionary picturedictionary play pause stop screenshotreader speechmaker factfinder screenmasking speechinput translator highlightblue highlightpink highlightyellow highlightgreen highlightclear highlightscollect vocabtool voicenote practicereadingaloud settings help logo".split(" ")
            , MicrosoftSharepoint: ["highlightscollect", "vocabtool"
, "voicenote"]
            , custom: {
              screenshotreadertoogle: !1
            }
          }
        }
        , "https://docs.google.com/presentation/*slide=": {
          parser: "GoogleSlidesParser"
          , name: "Google Slides"
          , bar: {
            dock: "docked-top"
            , supported: "prediction dictionary picturedictionary play pause stop screenshotreader speechmaker factfinder screenmasking translator highlightblue highlightpink highlightyellow highlightgreen highlightclear practicereadingaloud settings help logo".split(" ")
          }
        }
        , "https://*word-edit.officeapps.live.com": {
          parser: "MSWordOnlineParser"
          , name: "Microsoft Word Online"
          , bar: {
            dock: "docked-top"
            , supported: "prediction dictionary picturedictionary play pause stop screenshotreader speechmaker factfinder screenmasking speechinput translator highlightblue highlightpink highlightyellow highlightgreen highlightclear highlightscollect vocabtool practicereadingaloud settings help logo".split(" ")
            , Google: ["highlightscollect", "vocabtool", "voicenote"]
          }
        }
        , "https://*onenote.officeapps.live.com/o/onenoteframe.aspx": {
          parser: "MSWordOnlineParser"
          , name: "Microsoft Onenote Online"
          , bar: {
            dock: "docked-top"
            , supported: "prediction dictionary picturedictionary play pause stop screenshotreader speechmaker factfinder screenmasking speechinput translator highlightblue highlightpink highlightyellow highlightgreen highlightclear highlightscollect vocabtool practicereadingaloud settings help logo".split(" ")
            , Google: ["highlightscollect", "vocabtool", "voicenote"]
          }
        }
        , "https://reading.texthelp.com/ReadWrite": {
          parser: "HTMLParser"
          , name: "Fluency Tutor"
          , bar: {
            dock: "docked-top"
            , supported: "clicktospeak dictionary picturedictionary play pause stop factfinder screenmasking translator settings help logo".split(" ")
          }
        }
        , "https://fluency.texthelp.com/ReadWrite": {
          parser: "HTMLParser"
          , name: "Fluency Tutor"
          , bar: {
            dock: "docked-top"
            , supported: "clicktospeak dictionary picturedictionary play pause stop factfinder screenmasking translator settings help logo".split(" ")
          }
        }
        , "default": {
          parser: "HTMLParser"
          , name: "Web"
          , bar: {
            dock: "float"
            , supported: "prediction clicktospeak dictionary picturedictionary play pause stop screenshotreader speechmaker factfinder screenmasking speechinput translator highlightblue highlightpink highlightyellow highlightgreen highlightclear highlightscollect vocabtool simplify practicereadingaloud settings help logo".split(" ")
          }
        }
      }
      , serversettings: {
        user: "rwforgdocs"
        , speechserver: "https://rwforg.speechstream.net/SpeechServices/"
        , speechmaker: "https://rwforg.speechstream.net/"
        , dictionaryserver: "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/dictionary"
        , translatorserver: "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/translation"
        , picturedictionaryserver: "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/pictureDictionary"
      }
      , "en-AU": {
        speechoptions: {
          voice: "Vocalizer Expressive Karen Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "SPANISH"
          , transsource: "ENGLISH_US"
        }
        , language: {
          language: "en_US"
          , services: "en_US"
        }
      }
      , "en-GB": {
        speechoptions: {
          voice: "Vocalizer Expressive Serena Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "SPANISH"
          , transsource: "ENGLISH_US"
        }
        , language: {
          language: "en_US"
          , services: "en_US"
        }
      }
      , "en-US": {
        speechoptions: {
          voice: "Vocalizer Expressive Ava Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "SPANISH"
          , transsource: "ENGLISH_US"
        }
        , language: {
          language: "en_US"
          , services: "en_US"
        }
      }
      , fr: {
        speechoptions: {
          voice: "Vocalizer Expressive Audrey Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "ENGLISH_US"
          , transsource: "FRENCH"
        }
        , language: {
          language: "fr"
          , services: "fr"
        }
      }
      , "fr-CA": {
        speechoptions: {
          voice: "Vocalizer Expressive Amelie Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "ENGLISH_US"
          , transsource: "FRENCH"
        }
        , language: {
          language: "fr-CA"
          , services: "fr-CA"
        }
      }
      , ms: {
        speechoptions: {
          voice: "Vocalizer Expressive Luciana Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "ENGLISH_US"
          , transsource: "MALAYSIAN"
        }
        , language: {
          language: "ms"
          , services: "ms"
        }
      }
      , pt: {
        speechoptions: {
          voice: "Vocalizer Expressive Damayanti Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "ENGLISH_US"
          , transsource: "PORTUGUESE"
        }
        , language: {
          language: "pt"
          , services: "pt"
        }
      }
      , "pt-BR": {
        speechoptions: {
          voice: "ScanSoft Raquel_Full_22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "ENGLISH_US"
          , transsource: "PORTUGUESE"
        }
        , language: {
          language: "pt-BR"
          , services: "pt-BR"
        }
      }
      , "pt-PT": {
        speechoptions: {
          voice: "Vocalizer Expressive Luciana Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "ENGLISH_US"
          , transsource: "PORTUGUESE"
        }
        , language: {
          language: "pt-PT"
          , services: "pt-PT"
        }
      }
      , es: {
        speechoptions: {
          voice: "Vocalizer Expressive Monica Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "ENGLISH_US"
          , transsource: "SPANISH"
        }
        , language: {
          language: "es"
          , services: "es"
        }
      }
      , "es-419": {
        speechoptions: {
          voice: "Vocalizer Expressive Paulina Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , translator: {
          translang: "ENGLISH_US"
          , transsource: "SPANISH"
        }
        , language: {
          language: "es-419"
          , services: "es-419"
        }
      }
      , charMap: {
        8217: "'"
        , 96: "'"
        , 8482: " "
        , 8212: " "
      }
      , sentences: {
        wordEnds: ["[.?!]$"]
        , sentenceEndExclusions: "Dr. Mr. Mrs. i.e. e.g. St. N.B. NB. Ltd. plc. U.S. a.m. p.m. ext. vs. Jan. Feb. Mar. Apr. Jun. Jul. Aug. Sep. Oct. Nov. Dec. N.E. S.E. S.W. N.W.".split(" ")
      }
    }
  };
  z.fj.prototype.pb = function () {
    try {
      return this.a()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.u("textHelp.webreader.ConfigurationSingleton", z.fj);
  z.fj.prototype.getConfiguration = z.fj.prototype.Ab;
  z.fj.getInst = z.fj.prototype.pb;
  ml.prototype.getKey = function () {
    try {
      return this.Wg
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  ml.prototype.v = function () {
    var a = z.R.a()
      .Ne()
      , a = z.fj.a()
      .Ab()[a]
      , b = {
        speechoptions: {
          voice: "Vocalizer Expressive Ava Premium High 22kHz"
          , continousreading: !0
          , speed: 50
        }
        , dictionary: {
          position: "10px,150px"
        }
        , translator: {
          position: "10px,400px"
          , translang: "SPANISH"
          , transsource: "ENGLISH_US"
        }
        , picturedictionary: {
          position: "550px,150px"
        }
        , collecthighlights: {
          position: "160px,130px"
          , sortAlgorithm: 0
          , yellow: !0
          , green: !0
          , blue: !0
          , pink: !0
        }
        , bar: {
          visible: "true"
        }
        , driveViewers: {
          installed: !0
        }
        , prediction: {
          results: 10
        }
        , language: {
          language: "en_US"
          , services: "en_US"
        }
      };
    z.kb(b, a);
    return b
  };
  z.w(nl, ml);
  z.w(ol, z.Xg);
  z.ga(ol);
  ol.prototype.q = function (a) {
    var b = a.u()
      .q("span", this.Sc(a)
        .join(" "));
    pl(this, b, a.qd);
    return b
  };
  ol.prototype.ca = function (a, b) {
    b = ol.g.ca.call(this, a, b);
    var c = z.Rg(b)
      , d = ul;
    z.Xa(c, ql(this, sl)) ? d = sl : z.Xa(c, ql(this, tl)) ? d = tl : z.Xa(c, ql(this, ul)) && (d = ul);
    a.qd = d;
    z.Q(b, "checked", d == sl ? "mixed" : d == tl ? "true" : "false");
    return b
  };
  ol.prototype.$d = function () {
    return "checkbox"
  };
  ol.prototype.J = function () {
    return "goog-checkbox"
  };
  z.w(z.vl, z.gh);
  var tl = !0
    , ul = !1
    , sl = null
    , rl = {
      Ts: tl
      , Ys: ul
      , Zs: sl
    };
  z.f = z.vl.prototype;
  z.f.ra = null;
  z.f.Cb = function () {
    return this.qd == tl
  };
  z.f.Od = function (a) {
    a != this.qd && (this.qd = a, pl(this.G, this.f(), this.qd))
  };
  z.f.toggle = function () {
    this.Od(this.qd ? ul : tl)
  };
  z.f.ga = function () {
    z.vl.g.ga.call(this);
    if (this.Gi) {
      var a = this.Ea();
      this.ra && a.n(this.ra, "click", this.xk)
        .n(this.ra, "mouseover", this.Ii)
        .n(this.ra, "mouseout", this.Hi)
        .n(this.ra, "mousedown", this.ee)
        .n(this.ra, "mouseup", this.fe);
      a.n(this.f(), "click", this.xk)
    }
    var a = this.m
      , b;
    if (b = this.ra && a != this.ra) b = z.yg(a, "label"), b = /^[\s\xa0]*$/.test(b);
    if (b) {
      if (!this.ra.id) {
        b = this.ra;
        var c;
        c = this.wd() + ".lbl";
        b.id = c
      }
      z.Q(a, "labelledby", this.ra.id)
    }
  };
  z.f.Gb = function (a) {
    z.vl.g.Gb.call(this, a);
    if (a = this.f()) a.tabIndex = this.isEnabled() ? 0 : -1
  };
  z.f.xk = function (a) {
    a.stopPropagation();
    var b = this.qd ? "uncheck" : "check";
    this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
  };
  z.f.wc = function (a) {
    32 == a.keyCode && this.xk(a);
    return !1
  };
  z.eh("goog-checkbox", function () {
    return new z.vl
  });
  z.w(wl, z.Gc);
  wl.prototype.handleEvent = function (a) {
    if ("input" == a.type) z.B && z.A(10) && 0 == a.keyCode && 0 == a.charCode || (xl(this), z.Nf && this.m != z.ae(this.m)
      .activeElement || this.dispatchEvent(yl(a)));
    else if ("keydown" != a.type || Uk(a)) {
      var b = "keydown" == a.type ? this.m.value : null;
      z.B && 229 == a.keyCode && (b = null);
      var c = yl(a);
      xl(this);
      this.oa = z.Ic(function () {
        this.oa = null;
        this.m.value != b && this.dispatchEvent(c)
      }, 0, this)
    }
  };
  wl.prototype.s = function () {
    wl.g.s.call(this);
    this.S.U();
    xl(this);
    delete this.m
  };
  z.w(zl, z.Zb);
  var Cl;
  z.w(Al, z.Bg);
  z.f = Al.prototype;
  z.f.Qc = null;
  z.f.Kp = 10;
  z.f.Ef = !1;
  z.f.q = function () {
    this.m = this.u()
      .q("input", {
        type: "text"
      })
  };
  z.f.Lb = function (a) {
    Al.g.Lb.call(this, a);
    this.ra || (this.ra = a.getAttribute("label") || "");
    Yk(z.ae(a)) == a && (this.Ef = !0, z.Vg(this.f(), this.ng));
    Bl() && (this.f()
      .placeholder = this.ra);
    z.Q(this.f(), "label", this.ra)
  };
  z.f.ga = function () {
    Al.g.ga.call(this);
    var a = new z.Jc(this);
    a.n(this.f(), "focus", this.Gm);
    a.n(this.f(), "blur", this.kp);
    Bl() ? this.S = a : (z.dc && a.n(this.f(), ["keypress", "keydown", "keyup"], this.op), a.n(z.he(z.ae(this.f())), "load", this.Ap), this.S = a, Dl(this));
    this.Xd();
    this.f()
      .Ua = this
  };
  z.f.La = function () {
    Al.g.La.call(this);
    this.S && (this.S.U(), this.S = null);
    this.f()
      .Ua = null
  };
  z.f.s = function () {
    Al.g.s.call(this);
    this.S && (this.S.U(), this.S = null)
  };
  z.f.ng = "label-input-label";
  z.f.Gm = function () {
    this.Ef = !0;
    z.Vg(this.f(), this.ng);
    if (!Bl() && !El(this) && !this.Fp) {
      var a = this
        , b = function () {
          a.f() && (a.f()
            .value = "")
        };
      z.B ? z.Ic(b, 10) : b()
    }
  };
  z.f.kp = function () {
    Bl() || (this.S.Xa(this.f(), "click", this.Gm), this.Qc = null);
    this.Ef = !1;
    this.Xd()
  };
  z.f.op = function (a) {
    27 == a.keyCode && ("keydown" == a.type ? this.Qc = this.f()
      .value : "keypress" == a.type ? this.f()
      .value = this.Qc : "keyup" == a.type && (this.Qc = null), a.preventDefault())
  };
  z.f.qp = function () {
    El(this) || (this.f()
      .value = "", z.Ic(this.jp, 10, this))
  };
  z.f.jp = function () {
    El(this) || (this.f()
      .value = this.ra)
  };
  z.f.Ap = function () {
    this.Xd()
  };
  z.f.hasFocus = function () {
    return this.Ef
  };
  z.f.clear = function () {
    this.f()
      .value = "";
    null != this.Qc && (this.Qc = "")
  };
  z.f.reset = function () {
    El(this) && (this.clear(), this.Xd())
  };
  z.f.jb = function (a) {
    null != this.Qc && (this.Qc = a);
    this.f()
      .value = a;
    this.Xd()
  };
  z.f.ba = function () {
    return null != this.Qc ? this.Qc : El(this) ? this.f()
      .value : ""
  };
  z.f.Xd = function () {
    var a = this.f();
    Bl() ? this.f()
      .placeholder != this.ra && (this.f()
        .placeholder = this.ra) : Dl(this);
    z.Q(a, "label", this.ra);
    El(this) ? (a = this.f(), z.Vg(a, this.ng)) : (this.Fp || this.Ef || (a = this.f(), z.Tg(a, this.ng)), Bl() || z.Ic(this.us, this.Kp, this))
  };
  z.f.Gb = function (a) {
    this.f()
      .disabled = !a;
    var b = this.f()
      , c = this.ng + "-disabled";
    a ? z.Vg(b, c) : z.Tg(b, c)
  };
  z.f.isEnabled = function () {
    return !this.f()
      .disabled
  };
  z.f.us = function () {
    !this.f() || El(this) || this.Ef || (this.f()
      .value = this.ra)
  };
  z.w(Fl, z.Bg);
  z.f = Fl.prototype;
  z.f.w = z.ed("goog.ui.ComboBox");
  z.f.Mi = null;
  z.f.Qm = null;
  z.f.Ua = null;
  z.f.i = null;
  z.f.Be = -1;
  z.f.fc = null;
  z.f.ff = z.Ba;
  z.f.Af = null;
  z.f.Oo = "";
  z.f.Wo = "";
  z.f.ni = null;
  z.f.Th = !1;
  z.f.q = function () {
    this.fc = this.u()
      .q("input", {
        name: this.Wo
        , type: "text"
        , autocomplete: "off"
      });
    this.Af = this.u()
      .q("span", "goog-combobox-button");
    this.m = this.u()
      .q("span", "goog-combobox", this.fc, this.Af);
    this.Th && (z.we(this.Af, "▼"), z.jg(this.Af, !0));
    this.fc.setAttribute("label", this.Oo);
    this.Ua.ca(this.fc);
    this.i.Pd(!1);
    this.i.Q || this.Ee(this.i, !0)
  };
  z.f.Gb = function (a) {
    this.nb = a;
    this.Ua.Gb(a);
    var b = this.f();
    a ? z.Vg(b, "goog-combobox-disabled") : z.Tg(b, "goog-combobox-disabled")
  };
  z.f.isEnabled = function () {
    return this.nb
  };
  z.f.ga = function () {
    Fl.g.ga.call(this);
    var a = this.Ea();
    a.n(this.f(), "mousedown", this.qq);
    a.n(z.Ie(this.u()), "mousedown", this.wq);
    a.n(this.fc, "blur", this.Fq);
    this.eb = new z.ug(this.fc);
    a.n(this.eb, "key", this.Qb);
    this.Mi = new wl(this.fc);
    a.n(this.Mi, "input", this.Gq);
    a.n(this.i, "action", this.Kq)
  };
  z.f.La = function () {
    this.eb.U();
    delete this.eb;
    this.Mi.U();
    this.Mi = null;
    Fl.g.La.call(this)
  };
  z.f.Kb = function () {
    return !1
  };
  z.f.s = function () {
    Fl.g.s.call(this);
    this.gi();
    this.Ua.U();
    this.i.U();
    this.Af = this.fc = this.i = this.Ua = null
  };
  z.f.yg = function () {
    this.gi();
    Hl(this);
    this.i.Lc(-1)
  };
  z.f.Ya = function (a) {
    this.i.Ee(a, !0);
    this.Be = -1
  };
  z.f.Vd = function (a, b) {
    this.i.zf(a, b, !0);
    this.Be = -1
  };
  z.f.removeItem = function (a) {
    if (a = this.i.removeChild(a, !0)) a.U(), this.Be = -1
  };
  z.f.Le = function (a) {
    return z.Og(this.i, a)
  };
  z.f.Fg = function () {
    return z.Ng(this.i)
  };
  z.f.Oe = function () {
    return this.i
  };
  z.f.jb = function (a) {
    z.G(this.w, "setValue() - " + a);
    this.Ua.ba() != a && (this.Ua.jb(a), Kl(this))
  };
  z.f.ba = function () {
    return this.Ua.ba()
  };
  z.f.Bj = function () {
    this.i && this.i.F() && (new z.vh(this.f(), 5, !0))
      .bg(this.i.f(), 4)
  };
  z.f.gi = function () {
    this.ni && (z.h.clearTimeout(this.ni), this.ni = null)
  };
  z.f.qq = function (a) {
    this.nb && (a.target == this.f() || a.target == this.fc || z.ve(this.Af, a.target)) && (this.i.F() ? (z.id(this.w, "Menu is visible, dismissing"), this.yg()) : (z.id(this.w, "Opening dropdown"), Gl(this, !0), z.Nf && this.fc.focus(), this.fc.select(), this.i.dd = !0, a.preventDefault()));
    a.stopPropagation()
  };
  z.f.wq = function (a) {
    z.ve(this.i.f(), a.target) || (z.G(this.w, "onDocClicked_() - dismissing immediately"), this.yg())
  };
  z.f.Kq = function (a) {
    z.G(this.w, "onMenuSelected_()");
    var b = a.target;
    this.dispatchEvent(new zl("action", this, b)) && (b = b.Rc(), z.id(this.w, "Menu selection: " + b + ". Dismissing menu"), this.Ua.ba() != b && (this.Ua.jb(b), this.dispatchEvent("change")), this.yg());
    a.stopPropagation()
  };
  z.f.Fq = function () {
    z.G(this.w, "onInputBlur_() - delayed dismiss");
    this.gi();
    this.ni = z.Ic(this.yg, 250, this)
  };
  z.f.Qb = function (a) {
    var b = this.i.F();
    if (b && this.i.Qb(a)) return !0;
    var c = !1;
    switch (a.keyCode) {
    case 27:
      b && (z.id(this.w, "Dismiss on Esc: " + this.Ua.ba()), this.yg(), c = !0);
      break;
    case 9:
      b && (b = z.Eh(this.i)) && (z.id(this.w, "Select on Tab: " + this.Ua.ba()), b.ve(a), c = !0);
      break;
    case 38:
    case 40:
      b || (z.id(this.w, "Up/Down - maybe show menu"), Gl(this, !0), c = !0)
    }
    c && a.preventDefault();
    return c
  };
  z.f.Gq = function () {
    z.id(this.w, "Key is modifying: " + this.Ua.ba());
    Kl(this)
  };
  z.w(Ll, z.Rh);
  z.eh("goog-combobox-item", function () {
    return new Ll(null)
  });
  Ll.prototype.Mm = !1;
  Ll.prototype.Jp = function () {
    return this.Mm
  };
  Ll.prototype.Kj = function (a) {
    if (this.isEnabled()) {
      var b = this.Rc()
        , c = b.toLowerCase()
        .indexOf(a);
      if (0 <= c) {
        var d = this.u();
        this.Ia([d.createTextNode(b.substr(0, c)), d.q("b", null, b.substr(c, a.length)), d.createTextNode(b.substr(c + a.length))])
      }
    }
  };
  Ml.Qd = "textHelp.webreader.templates.OptionsDialog";
  z.w(z.ej, z.Bg);
  z.f = z.ej.prototype;
  z.f.q = function () {
    try {
      z.ej.g.q.call(this);
      var a = z.Hi(Ml);
      this.j = new z.ni("gdwr-modal-dialog", !0);
      this.j.Ia(a.innerHTML);
      z.vi(this.j, !1);
      var b = this.j;
      1 != b.sh && z.ui(b, !0);
      this.j.ua(z.L(z.R.a()
        .Df()));
      var c = z.L("gdwr-modal-dialog-title", this.j.f());
      z.O(c, "padding", "0px 0px 0px 0px");
      this.Ed = new Fl;
      this.Ed.Th = !0;
      this.Ed.ff = z.Na;
      this.Ed.ua(z.I("cbothVoices"));
      z.O(this.Ed.ja()
        .children[2], "overflowY", "scroll");
      z.O(this.Ed.ja()
        .children[2], "max-height", "350px");
      this.$i = new z.vl;
      this.$i.ca(z.I("continuousReadingChk"));
      this.Ub = new Fl;
      this.Ub.Th = !0;
      this.Ub.ff = z.Na;
      this.Ub.ua(z.I("cbothLanguages"));
      this.ke = new Fl;
      this.ke.Th = !0;
      this.ke.ff = z.Na;
      this.ke.ua(z.I("cbothUILanguage"));
      this.af = new Fl;
      this.af.Th = !0;
      this.af.ff = z.Na;
      this.af.ua(z.I("cbothServicesLanguage"));
      z.zi(this.j);
      this.Cd = new z.oh("Cancel");
      this.Cd.X("gdwr-dialog-button");
      this.Dd = new z.oh("OK");
      this.Dd.X("gdwr-dialog-button");
      this.Cd.ua(z.L("gdwr-options-dialog-buttons"));
      this.Dd.ua(z.L("gdwr-options-dialog-buttons"));
      z.F(this.Cd, "action", this.hf, !1, this);
      z.F(this.Dd, "action", this.xh, !1, this);
      z.F(z.I("gdwr-navbar"), "mouseup", this.Sq, !1, this);
      z.S.a()
        .k("onUISettingsLanguageChanged", this.nr, this)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.nc = function (a) {
    try {
      z.S.a()
        .l("onWRStop", []);
      var b = z.R.a()
        .Ne()
        , c = z.fj.a()
        .Ab();
      if (!this.sn) {
        for (var d in a) a.hasOwnProperty(d) && this.Ed.Ya(new z.Rh(a[d]));
        this.Ub.Ya(new z.Rh("English"));
        this.Ub.Ya(new z.Rh("Español"));
        this.Ub.Ya(new z.Rh("Français"));
        this.Ub.Ya(new z.Rh("Bahasa Melayu"));
        this.Ub.Ya(new z.Rh("Português (Brasileira)"));
        var e = z.U.a()
          .Ci()
          , g;
        for (g in e)
          if (e.hasOwnProperty(g)) {
            var k = new z.Rh(e[g]);
            k.Lp = g;
            this.ke.Ya(k)
          }
        var l = z.U.a()
          .vi();
        for (g in l)
          if (l.hasOwnProperty(g)) {
            var m =
              new z.Rh(l[g]);
            m.Lp = g;
            this.af.Ya(m)
          }
        this.Yb = a;
        this.sn = !0;
        z.F(this.ke, "change", this.Hq)
      }
      var n = c[b].speechoptions.voice
        , p = z.T.a()
        .v()
        , q = this.Yb[p.speechoptions.voice];
      void 0 === q && (q = this.Yb[n]);
      this.Ed.jb(q);
      var s = p.translator.translang;
      a = "Español";
      "FRANÇAIS" == s ? a = "Français" : "ENGLISH" == s ? a = "English" : "ENGLISH_US" == s ? a = "English" : "PORTUGUÊS (BRASILEIRA)" == s ? a = "Português (Brasileira)" : "MALAYSIAN" == s && (a = "Bahasa Melayu");
      this.Ub.jb(a);
      var t = p.language
        , e = d = a = s = "";
      g = !1;
      null == t.language &&
        (s = z.U.a()
          .Me(c[b].language.language), g = !0);
      null == t.services && (a = z.U.a()
        .Me(c[b].language.services), g = !0);
      g || (e = z.U.a()
        .Me(t.services), 0 < e.length && (a = e), d = z.U.a()
        .Me(t.language), 0 < d.length && (s = d), void 0 == s && (s = z.U.a()
          .Me(c[b].lang)), void 0 == a && (a = z.U.a()
          .Me(c[b].services)));
      this.Lf = s;
      this.ke.jb(s);
      this.af.jb(a);
      var v = p.speechoptions.continousreading;
      null == v && (v = c[b].speechoptions.continousreading);
      this.$i.Od(v);
      var C = p.speechoptions.speed;
      null == C && (C = c[b].speechoptions.speed);
      switch (C) {
      case 15:
        z.L("thVerySlow")
          .checked = !0;
        break;
      case 33:
        z.L("thSlow")
          .checked = !0;
        break;
      case 50:
        z.L("thMedium")
          .checked = !0;
        break;
      case 68:
        z.L("thFast")
          .checked = !0
      }
      this.Mf = p.prediction.results;
      if (null == this.Mf || "" == this.Mf) this.Mf = 10;
      z.L("thNumberOfPredictions")
        .value = this.Mf;
      this.Dl();
      window.addEventListener && window.addEventListener("DOMMouseScroll", this.preventDefault, !1);
      window.onwheel = this.preventDefault;
      window.onmousewheel = window.document.onmousewheel = this.preventDefault;
      window.ontouchmove = this.preventDefault;
      window.document.onscroll =
        this.onscroll;
      window.document.onkeydown = z.R.a()
        .bind(this, this.ns);
      this.j.D(!0);
      window.texthelp.RW4GC.thToolbarStoreInstance.onSettingsShow()
    } catch (K) {
      z.R.a()
        .b(K)
    }
  };
  z.f.Hq = function (a) {
    a = z.U.a()
      .Eg(a.target.ba());
    z.U.a()
      .Fe(a);
    var b = [];
    b.push(a);
    z.S.a()
      .l("onUISettingsLanguageChanged", b);
    window.texthelp.RW4GC.thToolbarStoreInstance.onUILangChanged()
  };
  z.f.nr = function () {
    try {
      for (var a = window.document.querySelectorAll("[data-trans-optionsdlg]"), b = 0; b < a.length; b++) {
        var c = a[b].getAttribute("data-trans-optionsdlg");
        a[b].innerHTML = z.U.a()
          .K(c)
      }
      var d = z.U.a()
        .K("dialog_OK");
      this.Dd.Ia(d);
      var e = z.U.a()
        .K("dialog_Cancel");
      this.Cd.Ia(e)
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.Sq = function (a) {
    try {
      var b = a.target
        , c = z.R.a();
      if (!c.I(b, "gdwr-navbar-item-selected")) {
        var d = z.L("gdwr-navbar-item-selected")
          , e = z.I("gdwr-" + d.getAttribute("pagename") + "Page");
        c.X(e, "gdwr-page-hidden");
        c.ta(d, "gdwr-navbar-item-selected");
        0 == b.id.length && (b = b.parentElement.parentElement);
        var g = z.I("gdwr-" + b.getAttribute("pagename") + "Page");
        c.ta(g, "gdwr-page-hidden");
        c.X(b, "gdwr-navbar-item-selected")
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  z.f.hf = function () {
    try {
      window.texthelp.RW4GC.thToolbarStoreInstance.onSettingsCancel(), Nl(this), this.j.D(!1)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.xh = function () {
    try {
      Nl(this);
      this.j.D(!1);
      var a = z.T.a()
        .v()
        , b;
      for (b in this.Yb)
        if (this.Yb[b] === this.Ed.ba()) {
          a.translator.translang = this.Ub.ba()
            .toUpperCase();
          a.speechoptions.voice = b;
          z.Nj.a()
            .Kh(b);
          a.speechoptions.continousreading = this.$i.qd;
          var c = this.Ub.ba()
            .toUpperCase();
          "Bahasa Melayu" == this.Ub.ba() && (c = "MALAYSIAN");
          a.translator.translang = c;
          void 0 == a.language && (a.language = {});
          void 0 == a.language.language && (a.language.language = {});
          var d = z.U.a()
            .Eg(this.ke.ba());
          0 < d.length && (a.language.language =
            d);
          if (d !== this.Lf) {
            this.Lf = d;
            z.U.a()
              .Fe(this.Lf);
            var e = [];
            e.push(this.Lf);
            z.S.a()
              .l("onUILanguageChanged", e)
          } else z.U.a()
            .Fe(this.Lf);
          void 0 == a.language.services && (a.language.services = {});
          var g = z.U.a()
            .Eg(this.af.ba());
          0 < g.length && (a.language.services = g);
          b = 50;
          1 == z.L("thVerySlow")
            .checked ? b = 15 : 1 == z.L("thSlow")
            .checked ? b = 33 : 1 == z.L("thFast")
            .checked && (b = 68);
          var k = z.L("thNumberOfPredictions")
            .value;
          if (3 > (0, window.parseInt)(k) || 10 < (0, window.parseInt)(k) || "" == k) k = this.Mf;
          a.speechoptions.speed = b;
          a.prediction.results =
            k;
          z.T.a()
            .cg(a);
          e = [];
          z.S.a()
            .l("onSettingsChanged", e);
          window.texthelp.RW4GC.thToolbarStoreInstance.onSettingsOK();
          break
        }
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.f.Dl = function () {
    try {
      var a = z.I("gdwr-navbar-container")
        , b = z.I("gdwr-page-container")
        , c = Sk(z.si(this.j))
        , d = Sk(z.si(this.j))
        , e = Sk(z.si(this.j));
      d.height = c.height;
      d.width = 226;
      e.height = c.height;
      e.width = c.width - 226;
      z.dg(a, d);
      z.dg(b, e)
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.preventDefault = function (a) {
    null === z.M(a.target, "goog-combobox") && (a = a || window.event, a.preventDefault && a.preventDefault(), a.returnValue = !1)
  };
  z.f.ns = function (a) {
    if ((null === z.M(a.target, "gdwr-modal-dialog") || "INPUT" != a.target.tagName) && {
        32: 1
        , 33: 1
        , 34: 1
        , 35: 1
        , 36: 1
        , 37: 1
        , 38: 1
        , 39: 1
        , 40: 1
      }[a.keyCode]) return this.preventDefault(a), !1
  };
  z.f.onscroll = function (a) {
    a.preventDefault();
    a.stopPropagation();
    return !1
  };
  z.u("textHelp.webreader.SpeechOptionsDlg", z.ej);
  z.ej.prototype.showDialog = z.ej.prototype.nc;
  z.w(Pl, Ol);
  Pl.prototype.ui = function () {
    var a = 0;
    z.Sc(this.yf(!0), function () {
      a++
    });
    return a
  };
  Pl.prototype.clear = function () {
    var a = dl(this.yf(!0))
      , b = this;
    (0, z.Oc)(a, function (a) {
      b.remove(a)
    })
  };
  z.w(Ql, Pl);
  z.f = Ql.prototype;
  z.f.set = function (a, b) {
    try {
      this.Sd.setItem(a, b)
    } catch (c) {
      if (0 == this.Sd.length) throw "Storage mechanism: Storage disabled";
      throw "Storage mechanism: Quota exceeded";
    }
  };
  z.f.get = function (a) {
    a = this.Sd.getItem(a);
    if (!z.r(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
    return a
  };
  z.f.remove = function (a) {
    this.Sd.removeItem(a)
  };
  z.f.ui = function () {
    return this.Sd.length
  };
  z.f.yf = function (a) {
    var b = 0
      , c = this.Sd
      , d = new z.Pc;
    d.next = function () {
      if (b >= c.length) throw z.Rc;
      var d = c.key(b++);
      if (a) return d;
      d = c.getItem(d);
      if (!z.r(d)) throw "Storage mechanism: Invalid value was encountered";
      return d
    };
    return d
  };
  z.f.clear = function () {
    this.Sd.clear()
  };
  z.f.key = function (a) {
    return this.Sd.key(a)
  };
  z.w(Rl, Ql);
  z.ga(z.T);
  z.f = z.T.prototype;
  z.f.v = function () {
    try {
      var a = this.qj.getKey()
        , b = this.hj.get(a)
        , c = this.qj.v();
      if (null === b || void 0 === b || void 0 === z.ld(b)
        .bar) return Sl(this, c), c;
      var d = z.ld(this.hj.get(a));
      z.kb(c, d);
      return c
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.cg = function (a) {
    try {
      if (null !== a) {
        var b = new Zk;
        window.postMessage({
          method: "thRWFGSettings"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            voice: a.speechoptions.voice
            , continousreading: a.speechoptions.continousreading
            , speed: a.speechoptions.speed
            , translang: a.translator.translang
            , transsource: a.translator.transsource
            , sortAlgorithm: a.collecthighlights.sortAlgorithm
            , yellow: a.collecthighlights.yellow
            , green: a.collecthighlights.green
            , blue: a.collecthighlights.blue
            , pink: a.collecthighlights.pink
            , visible: a.bar.visible
            , predictionResults: a.prediction.results
            , language: a.language.language
            , services: a.language.services
          }
        }, "*");
        z.R.a()
          .Pp($k(b, a));
        var c = this.qj.getKey();
        null !== c && this.hj.set(c, $k(b, a))
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Sj = function () {
    try {
      window.postMessage({
        method: "thRWFGGetSettings"
        , type: "1757FROM_PAGERW4G"
      }, "*")
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Dq = function (a) {
    try {
      if (void 0 != a.thRWFGSettings) {
        var b = z.ld(a.thRWFGSettings);
        a = null;
        "string" == typeof b ? a = z.ld(b) : (a = this.v(), a.speechoptions.voice = b.voice, a.speechoptions.continousreading = b.continousreading, a.speechoptions.speed = b.speed, a.translator.translang = b.translang, a.translator.transsource = b.transsource, a.collecthighlights.sortAlgorithm = b.sortAlgorithm, a.collecthighlights.yellow = b.yellow, a.collecthighlights.green = b.green, a.collecthighlights.blue = b.blue, a.collecthighlights.pink = b.pink, a.bar.visible =
          b.visible, a.prediction.results = b.predictionResults, a.language.language = b.language, a.language.services = b.services);
        Sl(this, a)
      }
    } catch (c) {
      window.console.error(c.stack)
    }
  };
  z.f.pb = function () {
    try {
      return this.a()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.u("textHelp.webreader.UserSettingsSingleton", z.T);
  z.T.prototype.getUserSettings = z.T.prototype.v;
  z.T.prototype.updateUserSettings = z.T.prototype.Sj;
  z.T.prototype.saveUserSettings = z.T.prototype.cg;
  z.T.getInst = z.T.prototype.pb;
  z.Df("Configuration");
})(__textHelp__);
//@ sourceURL=chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_Configuration.js
