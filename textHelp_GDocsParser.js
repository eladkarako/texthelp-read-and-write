(function (z) {
  var Xj = function (a) {
    return z.ab.concat.apply(z.ab, arguments)
  };
  var Yj = function (a, b, c) {
    this.dc = a || null;
    this.Ep = !!c
  };
  var Zj = function (a) {
    if (!a.xa && (a.xa = new z.Tc, a.va = 0, a.dc))
      for (var b = a.dc.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("=")
          , e = null
          , g = null;
        0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
        e = (0, window.decodeURIComponent)(e.replace(/\+/g, " "));
        e = ak(a, e);
        a.add(e, g ? (0, window.decodeURIComponent)(g.replace(/\+/g, " ")) : "")
      }
  };
  var ak = function (a, b) {
    var c = String(b);
    a.Ep && (c = c.toLowerCase());
    return c
  };
  var bk = function (a) {
    var b = z.Mc(a);
    if ("undefined" == typeof b) throw Error("Keys are undefined");
    var c = new Yj(null, 0, void 0);
    a = z.Lc(a);
    for (var d = 0; d < b.length; d++) {
      var e = b[d]
        , g = a[d];
      if (z.ja(g)) {
        var k = c;
        k.remove(e);
        0 < g.length && (k.dc = null, k.xa.set(ak(k, e), z.bb(g)), k.va += g.length)
      } else c.add(e, g)
    }
    return c
  };
  var ck = function (a) {
    this.h = this.se = this.M = null;
    null != z.L("docs-texteventtarget-iframe") && null != z.L("docs-texteventtarget-iframe") && (this.M = z.L("docs-texteventtarget-iframe")
      .contentDocument, this.se = z.L("docs-texteventtarget-iframe")
      .contentWindow, this.h = z.L("kix-appview-editor"), this.da = a, new z.ud, this.sa = !1, this.jc = this.ub = this.fj = null, this.O = [], this.Cc = !1, this.B = {}, this.B.na = 0, this.B.Bl = "", this.B.Al = "", this.B.mc = null, this.Jd = this.Id = 0, this.cd = /\w/i, this.A = {}, this.A.parentId = "kix-appview-editor"
      , this.A.positionId = "kix-cursor", this.A.seq = "1", this.Yf = z.R.a()
      .bind(this, this.Sh), this.of = z.R.a()
      .bind(this, this.wf), this.Ga = this.ma = null, this.Nj = this.Sg = !1, this.bh = null)
  };
  var dk = function (a) {
    this.la = a;
    this.Tm = "";
    this.Wb = this.ih = 0;
    this.ln = null;
    this.Zm = this.Tf = this.rh = "";
    this.Rk = null;
    a = window.location.pathname.split("/");
    this.aj = a[a.length - 2];
    this.$m = ""
  };
  var ek = function (a) {
    try {
      var b = new z.ud;
      z.F(b, "complete", z.R.a()
        .bind(a, a.sq));
      var c = bk(new z.Tc({
        Authorization: "Bearer " + a.Wb
      }));
      b.send("https://www.googleapis.com/drive/v2/files?q=title%3D'TexthelpVoiceNoteConfig'&spaces=appDataFolder", "GET", null, c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  var fk = function (a, b, c) {
    try {
      var d = new z.ud;
      null !== c && z.F(d, "complete", c);
      var e = bk(new z.Tc({
        Authorization: "Bearer " + a.Wb
      }));
      d.send("https://www.googleapis.com/drive/v2/files/" + b, "GET", null, e)
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  var gk = function (a) {
    try {
      var b = new z.ud;
      z.F(b, "complete", z.R.a()
        .bind(a, a.Bq));
      var c = bk(new z.Tc({
        Authorization: "Bearer " + a.Wb
      }));
      b.send("https://www.googleapis.com/drive/v2/files/" + a.aj + "/properties/voicenotefolder", "GET", null, c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  var hk = function (a) {
    try {
      var b = new window.FileReader;
      b.readAsDataURL(a.Tm);
      b.onloadend = z.R.a()
        .bind(a, a.mq)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  var ik = function (a) {
    try {
      z.R.a()
        .fireEvent(a, "mousedown"), z.R.a()
        .fireEvent(a, "mouseup"), z.R.a()
        .fireEvent(a, "click")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  var jk = function (a, b) {
    this.da = a;
    this.la = b;
    this.Bc = null;
    this.oe = this.Xk = !1;
    this.N = this.Wa = null;
    this.qh = 0;
    this.fl = null;
    z.F(window.document, "mouseover", this.vh, !0, this);
    z.F(window.document, "mouseout", this.Oq, !0, this);
    null != z.L("docs-texteventtarget-iframe") && (this.M = z.L("docs-texteventtarget-iframe")
      .contentDocument, this.ph = null, this.Yl = z.R.a()
      .bind(this, this.pl), this.Zl = z.R.a()
      .bind(this, this.ql), this.Eo = z.R.a()
      .bind(this, this.nl))
  };
  var kk = function (a, b) {
    try {
      (0, window.clearTimeout)(a.qh), a.oe = !0, a.qh = (0, window.setTimeout)(a.Zl, 250), b.play()
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  var Y = function () {
    this.kd = "kix-selection-overlay";
    this.De = "kix-selection-overlay-mac";
    this.ac = "kix-appview-editor";
    this.Ib = "kix-cursor";
    this.Td = "kix-cursor-caret";
    this.ea = "kix-lineview";
    this.kb = "kix-lineview-text-block";
    this.kg = "kix-paragraphrenderer";
    this.ig = "kix-page";
    this.lg = "thRWGDns";
    this.hg = "thCTag";
    this.pa = this.lg + ":" + this.hg;
    this.H = "textHELPWR";
    this.r = "thWord";
    this.Ba = "thSpace";
    this.jg = 100;
    this.Nf = this.Da = null;
    this.le = -1;
    this.te = 0;
    this.gc = z.fj.a()
      .Ab();
    this.fb = this.gc.sentences.wordEnds;
    this.za = [];
    this.Pk = [];
    this.Rf = 0;
    this.bf = null;
    this.oh = !1;
    this.cd = /\w/i;
    this.Vb = /[\u200B-\u200D\uFEFF\u25A0-\u27A2]/g;
    this.h = z.L(this.ac);
    this.ne = [];
    this.ya = null;
    this.tb = -1;
    this.cf = !1;
    this.Db = null;
    this.df = z.R.a()
      .bind(this, this.Kd);
    z.R.a();
    this.la = new ck(this);
    this.eq = new jk(this, this.la);
    window.addEventListener("message", this.df, !1);
    z.S.a()
      .k("onSpeechStateChanged", this.Fn, this);
    this.vb = null;
    var a = this.la;
    if (null != a.M) {
      var b = z.R.a()
        .bind(a, a.uh);
      a.M.addEventListener("keyup", b, !0);
      b = z.R.a()
        .bind(a, a.th);
      a.M.addEventListener("keypress"
        , b, !0);
      b = z.R.a()
        .bind(a, a.ed);
      a.M.addEventListener("keydown", b, !0);
      b = z.R.a()
        .bind(a, a.fd);
      z.F(window.document, "click", b, !0);
      b = z.R.a()
        .bind(a, a.wh);
      z.F(window.document, "mouseup", b);
      z.S.a()
        .k("onPredictionChange", a.kf, a);
      z.S.a()
        .k("onWRPredictionStateChanged", a.lf, a);
      z.S.a()
        .k("onSpeechRecognitionChange", a.yh, a);
      z.S.a()
        .k("onFocusOnCursor", a.tj, a)
    }
  };
  var lk = function (a, b) {
    var c = {};
    c.ug = z.L(a.Td);
    if (null == c.ug) return c;
    c.Wd = z.P(c.ug);
    var d = z.Rf(c.ug, "height")
      , d = d.substr(0, d.length - 2)
      , d = (0, window.parseInt)(d / 2, 10)
      , e = 0;
    a.I(c.ug, "kix-cursor-italic") && (e = d / Math.tan(Math.PI / 180 * 77));
    c.Wd.y += d;
    c.Wd.x += e + (c.ug.offsetWidth / 2 + .5);
    c.element = mk(c.Wd.x, c.Wd.y, b);
    return c
  };
  var mk = function (a, b, c) {
    for (var d = [], e = [], g;
      (g = window.document.elementFromPoint(a, b)) && -1 === d.indexOf(g) && null != g;) d.push(g), e.push({
      value: g.style.getPropertyValue("pointer-events")
      , os: g.style.getPropertyPriority("pointer-events")
    }), g.style.setProperty("pointer-events", "none", "important");
    for (a = e.length; b = e[--a];) d[a].style.setProperty("pointer-events", b.value ? b.value : "", b.os);
    for (e = 0; e < d.length; e++)
      if (-1 < d[e].className.indexOf(c) || "kix-lineview" == d[e].className) return d[e];
    return null
  };
  var nk = function (a) {
    try {
      for (var b = ["thrwgdns:thctag", "title", "desc"]; void 0 != a.nodeName && b.includes(a.nodeName.toLowerCase());)
        if (null != a.parentElement) a = a.parentElement;
        else break;
      return void 0 == a.nodeName ? !1 : "svg" == a.nodeName.toLowerCase() || "image" == a.nodeName.toLowerCase() || "desc" == a.nodeName.toLowerCase() || "title" == a.nodeName.toLowerCase() ? !0 : !1
    } catch (c) {
      return !1
    }
  };
  var ok = function (a) {
    for (var b = a; !a.classList.contains("kix-embeddedobject-crop");)
      if (null != a.parentElement) a = a.parentElement;
      else break;
    return a.classList.contains("kix-embeddedobject-crop") ? a : b
  };
  var pk = function (a, b) {
    try {
      a.bf = z.J(a.ig);
      a.Rf = a.h.scrollTop;
      a.cf = !1;
      var c = z.R.a()
        .bind(a, a.Fj);
      (0, window.setTimeout)(function () {
        c(0, b)
      }, 0)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.Tc.prototype.Cf = z.ca(1, function (a) {
    return z.Vc(this.Fc, a)
  });
  z.f = Yj.prototype;
  z.f.xa = null;
  z.f.va = null;
  z.f.ui = function () {
    Zj(this);
    return this.va
  };
  z.f.add = function (a, b) {
    Zj(this);
    this.dc = null;
    a = ak(this, a);
    var c = this.xa.get(a);
    c || this.xa.set(a, c = []);
    c.push(b);
    this.va++;
    return this
  };
  z.f.remove = function (a) {
    Zj(this);
    a = ak(this, a);
    return this.xa.Cf(a) ? (this.dc = null, this.va -= this.xa.get(a)
      .length, this.xa.remove(a)) : !1
  };
  z.f.clear = function () {
    this.xa = this.dc = null;
    this.va = 0
  };
  z.f.Cf = function (a) {
    Zj(this);
    a = ak(this, a);
    return this.xa.Cf(a)
  };
  z.f.Vc = function () {
    Zj(this);
    for (var a = this.xa.yd(), b = this.xa.Vc(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
    return c
  };
  z.f.yd = function (a) {
    Zj(this);
    var b = [];
    if (z.r(a)) this.Cf(a) && (b = Xj(b, this.xa.get(ak(this, a))));
    else {
      a = this.xa.yd();
      for (var c = 0; c < a.length; c++) b = Xj(b, a[c])
    }
    return b
  };
  z.f.set = function (a, b) {
    Zj(this);
    this.dc = null;
    a = ak(this, a);
    this.Cf(a) && (this.va -= this.xa.get(a)
      .length);
    this.xa.set(a, [b]);
    this.va++;
    return this
  };
  z.f.get = function (a, b) {
    var c = a ? this.yd(a) : [];
    return 0 < c.length ? String(c[0]) : b
  };
  z.f.toString = function () {
    if (this.dc) return this.dc;
    if (!this.xa) return "";
    for (var a = [], b = this.xa.Vc(), c = 0; c < b.length; c++)
      for (var d = b[c], e = (0, window.encodeURIComponent)(String(d)), d = this.yd(d), g = 0; g < d.length; g++) {
        var k = e;
        "" !== d[g] && (k += "=" + (0, window.encodeURIComponent)(String(d[g])));
        a.push(k)
      }
    return this.dc = a.join("&")
  };
  z.f.clone = function () {
    var a = new Yj;
    a.dc = this.dc;
    this.xa && (a.xa = this.xa.clone(), a.va = this.va);
    return a
  };
  z.f.extend = function (a) {
    for (var b = 0; b < arguments.length; b++) z.Nc(arguments[b], function (a, b) {
      this.add(b, a)
    }, this)
  };
  z.f = ck.prototype;
  z.f.uh = function (a) {
    var b = [];
    b.push(a.keyCode);
    z.S.a()
      .l("onKeyUpEvent", b);
    null !== this.ma && ((0, window.clearTimeout)(this.ma), this.ma = null);
    a.ctrlKey && 17 !== a.keyCode && (this.Nj = !0, null !== this.bh && (0, window.clearTimeout)(this.bh), this.bh = (0, window.setTimeout)(function () {
      (0, window.clearTimeout)(this.bh);
      this.bh = null;
      this.Nj = !1
    }.bind(this), 1E3));
    17 === a.keyCode ? this.Sg = this.Nj ? !1 : !0 : (this.ma = (0, window.setTimeout)(this.Yf, 100), this.Sg = !1)
  };
  z.f.th = function () {};
  z.f.ed = function (a) {
    if (a.ctrlKey && 47 < a.keyCode && 58 > a.keyCode) {
      var b = [];
      b.push(a);
      null !== this.fj && ((0, window.clearTimeout)(this.fj), this.fj = null);
      this.fj = (0, window.setTimeout)(function () {
        this.Cn(b)
      }.bind(this), 10);
      z.Mj() && (a.preventDefault(), a.stopPropagation())
    }
    40 === a.keyCode && this.Sg && (this.Nj = this.Sg = !1, a.preventDefault(), a.stopPropagation(), window.texthelp.RW4GC.thToolbarStoreInstance.onFocusBar(window.document.activeElement));
    this.Sg = !1
  };
  z.f.Cn = function (a) {
    z.S.a()
      .l("onPredictionKeyDownEvent", a)
  };
  z.f.Oa = function () {
    null !== this.ma && ((0, window.clearTimeout)(this.ma), this.ma = null);
    this.ma = (0, window.setTimeout)(this.Yf, 10)
  };
  z.f.Sh = function () {
    this.ma = null;
    if (this.sa) {
      var a = this.da.Pe();
      if (null == a) z.S.a()
        .l("onClosePredictionWindow", []);
      else {
        var b = z.T.a()
          .v()
          .prediction.results
          , c = z.T.a()
          .v()
          .language.services;
        this.B.na++;
        999 < this.B.na && (this.B.na = 0);
        var d = '"' + z.R.a()
          .ld(a.context) + '","' + b + '","en_US"'
          , e = '{ "parent":"' + this.da.ac + '", "position":"' + this.da.Ib + '","addSpace":false,"seq":"' + this.B.na + '"}';
        z.R.a()
          .Ih(this.B.na);
        this.B.mc = a;
        e = z.ld(e);
        d = [];
        d[0] = z.R.a()
          .ld((0, window.encodeURIComponent)(a.context));
        d[1] = b;
        d[2] = c;
        null !== z.L("kix-selection-overlay") ? z.S.a()
          .l("onClosePredictionWindow", []) : (e.context = d, window.postMessage({
            method: "thPrediction"
            , type: "1757FROM_PAGERW4G"
            , payload: e
          }, "*"))
      }
    }
  };
  z.f.wh = function () {
    if (null !== z.L("kix-selection-overlay")) z.S.a()
      .l("onClosePredictionWindow", []);
    else return !0
  };
  z.f.wf = function (a) {
    if (null !== z.L("kix-selection-overlay")) z.S.a()
      .l("onClosePredictionWindow", []), this.Ke();
    else {
      var b = z.M(a.target, "kix-lineview-text-block");
      null == b && (b = z.L("kix-lineview-text-block", a.target.parentNode));
      null !== b && (this.sa && this.Oa(), this.Ke())
    }
  };
  z.f.fd = function (a) {
    null !== this.Ga && ((0, window.clearTimeout)(this.Ga), this.Ga = null);
    var b = this;
    this.Ga = (0, window.setTimeout)(function () {
      b.of(a)
    }, 300)
  };
  z.f.Ke = function () {
    z.S.a()
      .l("onWordChanged", [])
  };
  z.f.kf = function (a) {
    try {
      if (null !== z.L("kix-selection-overlay")) z.S.a()
        .l("onClosePredictionWindow", []);
      else {
        var b = this.B.mc
          , c = b.prepunc + a[0] + b.postpunc;
        this.qa("ArrowRight", b.selectRight);
        this.qa("Shift+ArrowLeft", b.selectLeft + b.selectRight);
        b.spaceatstart && (c = " " + c);
        b.spaceatend && (c += " ");
        this.eg(c);
        b.spaceatend || this.qa("ArrowRight");
        var d = z.R.a()
          .wa();
        a = [];
        a.push("prediction insert");
        a.push(d.Email);
        a.push(d.Email.split("@")[1]);
        window.postMessage({
          type: "1757FROM_PAGERW4G"
          , key: "function"
          , method: "SendEvent"
          , parameters: a
        }, "*");
        this.Oa()
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.lf = function (a) {
    try {
      this.sa = a[0];
      var b = z.L("kix-cursor-caret", this.h);
      if (null !== b) {
        var c = 0
          , d = z.P(b)
          , e = z.Rf(b, "height")
          , e = e.substr(0, e.length - 2)
          , e = (0, window.parseInt)(e, 10);
        d.y += e / 2;
        z.R.a()
          .I(b, "kix-cursor-italic") && (c = e / Math.tan(Math.PI / 180 * 77));
        d.x += c;
        this.hi(d.x, d.y)
      }
      this.sa && (a = [], a.push("kix-appview-editor"), this.Oa(), z.S.a()
        .l("onOpenPredictionWindow", a))
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.tj = function () {
    try {
      var a = z.L("kix-cursor-caret", this.h);
      null !== a && (z.R.a()
        .fireEvent(a, "click"), a.focus())
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.yh = function (a) {
    try {
      "scratch that" == a.toLowerCase()
        .trim() ? this.qa("CTRL+Z") : this.eg(a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Zc = function () {
    this.O.keydown = this.ob("keydown", this.M);
    this.O.keyup = this.ob("keyup", this.M);
    this.O.keypress = this.ob("keypress", this.M);
    this.O.mousedown = this.ob("mousedown", this.h);
    this.O.mouseup = this.ob("mouseup", window.document);
    this.Cc = !0
  };
  z.f.ob = function (a, b) {
    try {
      var c = []
        , d;
      for (d in b)
        if (d.match(/^closure/) && "number" != typeof b[d]) {
          var e = b[d];
          if (e) {
            if (!this.ub)
              for (var g in e) {
                var k = e[g];
                if (k && k != b)
                  for (var l in k) {
                    var m = k[l];
                    m && void 0 != m.length && m[0].src == b && (this.ub = g)
                  }
              }
            for (var n in e[this.ub])
              if (n == a)
                for (var p = e[this.ub][n], q = 0; q < p.length; q++) {
                  if (!this.jc && p[q].src == b)
                    for (var s in p[q])
                      if (p[q][s].src == b) {
                        this.jc = s;
                        break
                      }
                  c.push({
                    tm: p[q]
                    , tc: p[q][this.jc]
                  })
                }
          }
        }
      return c
    } catch (t) {
      z.R.a()
        .b(t)
    }
  };
  z.f.qa = function (a, b, c) {
    void 0 == c && (c = "keydown");
    void 0 == b && (b = 1);
    if (!(1 > b)) {
      this.Cc || this.Zc();
      void 0 == b && (b = 1);
      var d = {
        altGraphKey: !1
        , altKey: !1
        , bubbles: !0
        , cancelBubble: !1
        , cancelable: !0
        , charCode: 0
        , clipboardData: void 0
        , ctrlKey: !1
        , currentTarget: this.M
        , defaultPrevented: !1
        , detail: 0
        , eventPhase: 0
        , keyCode: 0
        , keyLocation: 0
        , layerX: 0
        , layerY: 0
        , metaKey: !1
        , pageX: 0
        , pageY: 0
        , returnValue: !0
        , shiftKey: !1
        , srcElement: this.M.body
        , target: this.M.body
        , timeStamp: (new Date)
          .getTime()
        , type: c
        , view: this.se
        , which: 0
      };
      switch (a) {
      case "SPACE":
        d.ctrlKey = !0;
        d.keyCode = 32;
        d.which = 32;
        break;
      case "CTRL+Z":
        d.ctrlKey = !0;
        d.keyCode = 90;
        d.which = 90;
        break;
      case "Apple+Z":
        d.metaKey = !0;
        d.keyCode = 90;
        d.which = 90;
        break;
      case "Delete":
        d.defaultPrevented = !0;
        d.keyCode = 8;
        d.which = 8;
        break;
      case "Backspace":
        d.defaultPrevented = !0;
        d.keyCode = 8;
        d.which = 8;
        break;
      case "Newline":
        d.defaultPrevented = !0;
        d.keyCode = 13;
        d.which = 13;
        break;
      case "CTRL+Home":
        d.ctrlKey = !0;
        d.keyCode = 36;
        d.which = 36;
        break;
      case "Shift+ArrowLeft":
        d.keyCode = 37;
        d.shiftKey = !0;
        d.which = 37;
        break;
      case "ArrowRight":
        d.keyCode =
          39;
        d.which = 39;
        break;
      case "ArrowLeft":
        d.keyCode = 37;
        d.which = 37;
        break;
      case "CTRL+Shift+ArrowRight":
        d.ctrlKey = !0;
        d.keyCode = 39;
        d.shiftKey = !0;
        d.which = 39;
        break;
      case "CTRL+ALT+M":
        d.ctrlKey = !0;
        d.keyCode = 77;
        d.shiftKey = !1;
        d.altKey = !0;
        d.which = 77;
        break;
      case "CMD+ALT+M":
        d.metaKey = !0;
        d.keyCode = 77;
        d.shiftKey = !1;
        d.altKey = !0;
        d.which = 77;
        break;
      case "CTRL+Shift+S":
        d.ctrlKey = !0;
        d.keyCode = 83;
        d.shiftKey = !0;
        d.altKey = !1;
        d.which = 83;
        break;
      case "CMD+Shift+S":
        d.metaKey = !0;
        d.keyCode = 83;
        d.shiftKey = !0;
        d.altKey = !1;
        d.which = 83;
        break;
      case "CTRL+Shift+F":
        d.metaKey = !0;
        d.keyCode = 70;
        d.shiftKey = !0;
        d.altKey = !1;
        d.which = 70;
        break;
      case "CMD+Shift+F":
        d.metaKey = !0;
        d.keyCode = 70;
        d.shiftKey = !0;
        d.altKey = !1;
        d.which = 70;
        break;
      default:
        return
      }
      for (a = 0; a < b; a++)
        for (var e in this.O[c]) this.O[c][e].tc(d)
    }
  };
  z.f.eg = function (a) {
    this.Cc || this.Zc();
    for (var b = {
        altGraphKey: !1
        , altKey: !1
        , bubbles: !0
        , cancelBubble: !1
        , cancelable: !0
        , charCode: 0
        , clipboardData: void 0
        , ctrlKey: !1
        , currentTarget: this.M
        , defaultPrevented: !0
        , detail: 0
        , eventPhase: 0
        , keyCode: 0
        , keyLocation: 0
        , layerX: 0
        , layerY: 0
        , metaKey: !1
        , pageX: 0
        , pageY: 0
        , returnValue: !0
        , shiftKey: !1
        , srcElement: this.M.body
        , target: this.M.body
        , timeStamp: 0
        , type: "keypress"
        , view: this.se
        , which: 0
      }, c, d = 0; d < a.length; d++) {
      c = a[d];
      b.charCode = c.charCodeAt(0);
      b.keyCode = c.charCodeAt(0);
      b.which = c.charCodeAt(0);
      b.shiftKey = c.toUpperCase() == c ? !0 : !1;
      b.timeStamp = (new Date)
        .getTime();
      try {
        switch (b.keyCode) {
        case 10:
          if (0 < d) {
            if (10 != a[d - 1].charCodeAt(0)) {
              b.charCode = 13;
              b.keyCode = 13;
              b.which = 13;
              var e
            }
          } else b.charCode = 13, b.keyCode = 13, b.which = 13;
          for (e in this.O.keydown) this.O.keydown[e].tc(b);
          break;
        case 13:
          for (e in this.O.keydown) this.O.keydown[e].tc(b);
          break;
        default:
          for (e in this.O.keypress) this.O.keypress[e].tc(b)
        }
      } catch (g) {}
    }
  };
  z.f.hi = function (a, b) {
    this.Cc || this.Zc();
    z.P(this.h);
    if (!(a < this.h.x || a > this.h.x + this.h.offsetWidth || b < this.h.y || b > this.h.y + this.h.offsetHeight)) {
      var c = z.R.a()
        .bind(this, this.Bg);
      this.Id = a;
      this.Jd = b;
      (0, window.setTimeout)(c, 1)
    }
  };
  z.f.Bg = function () {
    var a = {
        altKey: !1
        , bubbles: !0
        , button: 0
        , cancelBubble: !1
        , cancelable: !0
        , charCode: 0
        , clientX: this.Id
        , clientY: this.Jd
        , clipboardData: void 0
        , ctrlKey: !1
        , currentTarget: window.document
        , dataTransfer: null
        , defaultPrevented: !1
        , detail: 1
        , eventPhase: 0
        , fromElement: null
        , keyCode: 0
        , layerX: 0
        , layerY: 0
        , metaKey: !1
        , offsetX: 0
        , offsetY: 0
        , pageX: 0
        , pageY: 0
        , relatedTarget: null
        , returnValue: !0
        , screenX: 0
        , screenY: 0
        , shiftKey: !1
        , srcElement: this.h
        , target: this.h
        , timeStamp: (new Date)
          .getTime()
        , toElement: this.h
        , type: null
        , view: window
        , which: 1
        , x: 0
        , y: 0
      }
      , b = ["mousedown", "mouseup"]
      , c;
    for (c in b) {
      a.type = b[c];
      "mouseup" == b[c] && (a.srcElement = a.target = a.toElement = window.document);
      for (var d in this.O[b[c]]) this.O[b[c]][d].tc(a)
    }
  };
  z.f = dk.prototype;
  z.f.uj = function (a) {
    try {
      z.S.a()
        .vf(this.ih), this.Wb = a.atoken, this.ln(this.Wb)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.oc = function (a, b) {
    try {
      this.Tm = a, this.Rk = b, this.ln = this.lr, this.ih = z.S.a()
        .k("onGetOAuthToken", this.uj, this), window.postMessage({
          method: "getOAuthToken"
          , type: "1757FROM_PAGERW4G"
        }, "*")
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.lr = function (a) {
    try {
      this.Wb = a, ek(this)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.sq = function (a) {
    try {
      var b = JSON.parse(a.target.C.response)
        .items;
      if (0 == b.length) try {
        var c = new z.ud;
        z.F(c, "complete", z.R.a()
          .bind(this, this.ur));
        var d = bk(new z.Tc({
            Authorization: "Bearer " + this.Wb
            , "Content-type": "application/json"
          }))
          , e = '{"title": "' + z.U.a()
          .K("voicenote_folder") + '","mimeType": "application/vnd.google-apps.folder"}';
        c.send("https://www.googleapis.com/drive/v2/files", "POST", e, d)
      } catch (g) {
        z.R.a()
          .b(g)
      } else {
        var k = b[0];
        try {
          this.Zm = k.id, this.rh = k.description, fk(this, this.rh, z.R.a()
            .bind(this
              , this.tr))
        } catch (l) {
          z.R.a()
            .b(l)
        }
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.rq = function () {
    try {
      gk(this)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ur = function (a) {
    try {
      var b = this.rh = JSON.parse(a.target.C.response)
        .id;
      try {
        var c = new z.ud;
        z.F(c, "complete", z.R.a()
          .bind(this, this.rq));
        var d = bk(new z.Tc({
          Authorization: "Bearer " + this.Wb
          , "Content-type": "application/json"
        }));
        c.send("https://www.googleapis.com/drive/v2/files?q=title%3D'TexthelpVoiceNoteConfig'", "POST", '{"title": "TexthelpVoiceNoteConfig","parents": [{"id": "appfolder"}],"description": "' + b + '"}', d)
      } catch (e) {
        z.R.a()
          .b(e)
      }
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.tr = function (a) {
    try {
      var b = JSON.parse(a.target.C.response);
      if (void 0 !== b.error || b.labels.trashed) {
        var c = this.Zm
          , d = z.R.a()
          .bind(this, this.vq);
        try {
          var e = new z.ud;
          null !== d && z.F(e, "complete", d);
          var g = bk(new z.Tc({
            Authorization: "Bearer " + this.Wb
          }));
          e.send("https://www.googleapis.com/drive/v2/files/" + c, "DELETE", null, g)
        } catch (k) {
          z.R.a()
            .b(k)
        }
      } else gk(this)
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.f.vq = function () {
    try {
      ek(this)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Bq = function (a) {
    try {
      var b = JSON.parse(a.target.C.response);
      void 0 !== b.error ? fk(this, this.aj, z.R.a()
        .bind(this, this.Bn)) : (this.Tf = b.value, fk(this, this.Tf, z.R.a()
        .bind(this, this.vr)))
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Bn = function (a) {
    try {
      this.$m = JSON.parse(a.target.C.response)
        .title;
      try {
        var b = new z.ud;
        z.F(b, "complete", z.R.a()
          .bind(this, this.uq));
        var c = bk(new z.Tc({
          Authorization: "Bearer " + this.Wb
          , "Content-type": "application/json"
        }));
        b.send("https://www.googleapis.com/drive/v2/files", "POST", '{"title": "' + this.$m + '","parents": [{"id": "' + this.rh + '"}],"mimeType": "application/vnd.google-apps.folder"}', c)
      } catch (d) {
        z.R.a()
          .b(d)
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.vr = function (a) {
    try {
      var b = JSON.parse(a.target.C.response);
      void 0 !== b.error || b.labels.trashed ? fk(this, this.aj, z.R.a()
        .bind(this, this.Bn)) : hk(this)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.uq = function (a) {
    try {
      this.Tf = JSON.parse(a.target.C.response)
        .id;
      var b = new z.ud;
      z.F(b, "complete", z.R.a()
        .bind(this, this.or));
      var c = bk(new z.Tc({
        Authorization: "Bearer " + this.Wb
        , "Content-type": "application/json"
      }));
      b.send("https://www.googleapis.com/drive/v2/files/" + this.aj + "/properties", "POST", '{"key": "voicenotefolder","value": "' + this.Tf + '"}', c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.or = function () {
    try {
      var a = new z.ud;
      z.F(a, "complete", z.R.a()
        .bind(this, this.cr));
      var b = bk(new z.Tc({
        Authorization: "Bearer " + this.Wb
        , "Content-type": "application/json"
      }));
      a.send("https://www.googleapis.com/drive/v2/files/" + this.Tf + "/permissions", "POST", '{"role": "reader","type": "anyone"}', b)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.cr = function (a) {
    try {
      JSON.parse(a.target.C.response), hk(this)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.mq = function (a) {
    try {
      var b = a.currentTarget.result.replace(/^data:audio\/(wav|ogg);base64,/, "")
        , c = new z.ud;
      z.F(c, "complete", z.R.a()
        .bind(this, this.kq));
      var d = bk(new z.Tc({
          Authorization: "Bearer " + this.Wb
          , "Content-type": 'multipart/form-data; boundary="rw4g"'
        }))
        , e = '--rw4g\nContent-Type: application/json; charset=UTF-8\n\n{"title": "' + z.U.a()
        .K("voicenote_filename") + '.wav", "description": "Read&Write for Google Chrome™", "mimeType": "audio/wav","parents": [{"id": "' + this.Tf + '"}]}\n--rw4g\nContent-Type: audio/wav\nContent-Transfer-Encoding: base64\n\n' +
        b + "\n--rw4g--\n";
      c.send("https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart", "POST", e, d)
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.kq = function (a) {
    try {
      this.la.qa("CTRL+ALT+M", 1, "keydown");
      this.la.qa("CTRL+ALT+M", 1, "keyup");
      this.la.qa("CMD+ALT+M", 1, "keydown");
      this.la.qa("CMD+ALT+M", 1, "keyup");
      var b = window.document.activeElement;
      this.Rk();
      z.L("docos-input-buttons-post", b.parentElement);
      var c;
      var d = a.target;
      c = d.C ? z.ld(d.C.responseText) : void 0;
      var e = c.webContentLink.split("&")[0];
      b.value = "Texthelp;" + e + ";";
      b.focus();
      b.click();
      this.sb = null;
      ik(b);
      try {
        var g = z.L("docos-input-buttons-post", b.parentElement);
        ik(g)
      } catch (k) {
        z.R.a()
          .b(k)
      }
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.f = jk.prototype;
  z.f.oc = function (a, b) {
    try {
      null == this.fl && (this.fl = new dk(this.la)), this.fl.oc(a, b)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.vh = function (a) {
    try {
      var b = a.target;
      if (void 0 != b && void 0 != b.classList && null != b.classList) {
        var c = z.M(b, "docos-docoview");
        if (null != c) {
          var d = z.L("docos-collapsible-replyview", c);
          if (null != d && d != this.Bc) {
            this.Xk = !0;
            var e = z.L("kix-thvoicenote-overlay");
            z.re(e);
            this.oe = !1;
            this.N = null;
            this.Bc = d;
            if (null != this.Bc) {
              var g = this.Bc.innerText;
              if (-1 != g.indexOf("Texthelp;https://docs.google.com")) {
                var k = z.M(this.Bc, "docos-docoview");
                if (null !== k) {
                  this.ph = z.L("docos-input", k);
                  if (null == this.ph || "none" !== this.ph.style.display &&
                    "" !== this.ph.style.display) return;
                  z.F(this.ph, z.Qi, this.zq, !0, this)
                }
                var l = g.split(";")[1]
                  , e = z.L("kix-thvoicenote-overlay");
                null == e && (e = z.Hi(z.qk));
                e.style.top = (0, window.parseInt)(this.Bc.offsetTop) + "px";
                e.style.left = (0, window.parseInt)(this.Bc.offsetLeft) + "px";
                e.style.width = (0, window.parseInt)(this.Bc.offsetWidth) + "px";
                e.style.height = (0, window.parseInt)(this.Bc.offsetHeight) + "px";
                e.style.background = "white";
                e.style.visibility = "visible";
                var m = z.L("thVNPlayback", e);
                this.Wa = {
                  zj: m.getAttribute("data-percent") ||
                    0
                  , size: m.getAttribute("data-size") || 60
                  , lineWidth: m.getAttribute("data-line") || 4
                  , rotate: m.getAttribute("data-rotate") || 0
                };
                var n = window.document.createElement("canvas");
                "undefined" !== typeof window.G_vmlCanvasManager && window.G_vmlCanvasManager.Bt(n);
                this.N = n.getContext("2d");
                n.width = n.height = this.Wa.size;
                n.id = "thVNCanPlayback";
                n.className = "thVNCanPlayback";
                m.appendChild(n);
                this.N.translate(this.Wa.size / 2, this.Wa.size / 2);
                this.N.rotate((-.5 + this.Wa.rotate / 180) * Math.PI);
                this.N.translate(.5, .5);
                this.Ra(this.N
                  , "#efefef", this.Wa.lineWidth, 1);
                0 < this.Wa.zj && this.Ra(this.N, "#555555", this.Wa.lineWidth, this.Wa.zj / 100);
                var p = z.L("thVNCanPlayback", e)
                  , q = z.L("thVNIcon", e);
                z.F(p, "mouseup", this.Eo, !0, this);
                z.F(q, "mouseup", this.Rq, !0, this);
                var s = z.L("thVNAudio", e);
                s.src = l;
                this.Bc.parentElement.appendChild(e);
                s.onended = this.Yl
              }
            }
          }
        }
      }
    } catch (t) {
      z.R.a()
        .b(t)
    }
  };
  z.f.zq = function () {
    try {
      var a = z.L("kix-thvoicenote-overlay");
      z.re(a);
      this.Bc = null;
      this.oe = !1;
      this.N = null
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Oq = function (a) {
    try {
      if (this.Xk) {
        var b = a.Sa.toElement;
        void 0 != b && void 0 != b.classList && null != b.classList && null === z.M(b, "docos-docoview") && (this.Xk = !1)
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Rq = function (a) {
    try {
      var b = z.M(a.currentTarget, "thVNPlayback");
      if (null != b) {
        var c = z.L("thVNIcon", b);
        if (null != c) {
          var d = z.L("thVNAudio", b);
          if (this.oe) {
            this.oe = !1;
            z.R.a()
              .pd(c, "thVNPause", "thVNPlay");
            try {
              d.pause()
            } catch (e) {
              z.R.a()
                .b(e)
            }
          } else {
            this.oe = !0;
            z.R.a()
              .pd(c, "thVNPlay", "thVNPause");
            kk(this, d);
            var g = z.R.a()
              .ia();
            if (null == g) return null;
            window.postMessage({
              method: "GAE"
              , type: "1757FROM_PAGERW4G"
              , payload: {
                category: g
                , action: "voice note play"
                , label: g.split("@")[1]
              }
            }, "*")
          }
        }
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  z.f.nl = function (a) {
    try {
      var b = z.L("thVNAudio");
      if (null != b) {
        var c = z.P(a.currentTarget)
          , d, e;
        d = a.clientX - c.x;
        e = a.clientY - c.y;
        var g = z.eg(a.currentTarget)
          , k = 2 * Math.PI
          , l = (0, window.parseInt)((Math.atan2(e - g.height / 2, d - g.width / 2) + k) % k / k * 100)
          , l = l + 25;
        99 < l && (l -= 100);
        b.currentTime = l / 100 * b.duration;
        kk(this, b);
        var m = z.M(a.currentTarget, "thVNPlayback");
        if (null != m) {
          var n = z.L("thVNIcon", m);
          null != n && z.R.a()
            .I(n, "thVNPlay") && z.R.a()
            .pd(n, "thVNPlay", "thVNPause")
        }
      }
    } catch (p) {
      z.R.a()
        .b(p)
    }
  };
  z.f.pl = function (a) {
    try {
      this.oe = !1;
      (0, window.clearTimeout)(this.qh);
      this.qh = 0;
      var b = a.currentTarget;
      if (null != b) {
        var c = b.parentElement;
        if (null != c) {
          var d = z.L("thVNIcon", c);
          null != d && (this.N.clearRect(-100, -100, 200, 200), this.Ra(this.N, "#efefef", this.Wa.lineWidth, 1), 0 < this.Wa.zj && this.Ra(this.N, "#555555", this.Wa.lineWidth, this.Wa.zj / 100), z.R.a()
            .pd(d, "thVNPause", "thVNPlay"))
        }
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.ql = function () {
    try {
      if (this.oe) {
        var a = z.L("thVNAudio");
        if (null != a) {
          var b = (100 / a.duration * a.currentTime)
            .toFixed();
          this.N.clearRect(-100, -100, 200, 200);
          this.Ra(this.N, "#efefef", this.Wa.lineWidth, 1);
          this.Ra(this.N, "#555555", this.Wa.lineWidth, b / 100);
          this.qh = (0, window.setTimeout)(this.Zl, 250)
        }
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Ra = function (a, b, c, d) {
    d = Math.min(Math.max(0, d || 1), 1);
    var e = (this.Wa.size - this.Wa.lineWidth) / 2;
    a.beginPath();
    a.arc(0, 0, e, 0, 2 * Math.PI * d, !1);
    a.strokeStyle = b;
    a.lineCap = "round";
    a.lineWidth = c;
    a.stroke()
  };
  z.Wj.yj = "Parser";
  z.w(Y, z.Jj);
  z.f = Y.prototype;
  z.f.Hh = function (a) {
    try {
      this.Da = a
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Ob = function () {
    try {
      return this.Da.name
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ec = function () {
    try {
      return this.Da.bar
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Fn = function (a) {
    this.oh = 0 < a.length ? a[0] : !1
  };
  z.f.oc = function (a, b) {
    try {
      this.eq.oc(a, b)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Og = function () {
    try {
      var a = this.ce()
        , b = !1;
      z.R.a();
      for (var c = this.gc.sentences.sentenceEndExclusions, d = 0; d < a.length - 1; d++) {
        var e = z.Kj(c, a[d]);
        if (!e) {
          try {
            e = this.Pk[d]
          } catch (g) {
            e = !1
          }
          void 0 == e && (e = !1)
        }
        if (!e)
          for (var k in this.fb) - 1 !== a[d].search(this.fb[k]) && (b = !0, d = a.length)
      }
      if (!b) return a;
      var l = z.J(this.kd);
      if (1 > l.length && (l = z.J(this.De), 1 > l.length)) return this.Ki(!0);
      var l = Array.prototype.slice.call(l, 0)
        , m = z.R.a()
        .bind(this, this.Mj);
      l.sort(m);
      this.ha();
      var n = z.P(l[0])
        , p = z.Rf(l[0], "height")
        , p = p.substr(0
          , p.length - 2)
        , p = (0, window.parseInt)(p, 10);
      n.y += p / 2;
      this.Db = z.P(l[l.length - 1]);
      var q = z.Rf(l[l.length - 1], "width")
        , q = q.substr(0, q.length - 2)
        , q = (0, window.parseInt)(q, 10);
      this.Db.x += q;
      return this.Hf(n.x, n.y)
    } catch (s) {
      z.R.a()
        .b(s)
    }
  };
  z.f.Ff = function () {
    try {
      var a = z.J(this.kd);
      return 1 > a.length && (a = z.J(this.De), 1 > a.length) ? !1 : !0
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.bb = function () {
    try {
      var a = window.document.getElementById("th-RW4GC-picture-dictionary")
        , b = window.document.getElementById("th-RW4GC-translator");
      if ((null != window.document.getElementById("th-RW4GC-dictionary") || null != a || null != b) && this.oh) return "";
      var a = []
        , c = RegExp("​", "g")
        , d = z.J(this.kd);
      if (1 > d.length && (d = z.J(this.De), 1 > d.length)) {
        var e = z.L(this.Ib);
        if (null !== e) {
          var g = z.P(e)
            , k = z.L(this.Td)
            , l = z.Rf(k, "height")
            , l = l.substr(0, l.length - 2)
            , l = (0, window.parseInt)(l, 10) / 2
            , d = 0;
          this.I(k, "kix-cursor-italic") &&
            (d = l / Math.tan(Math.PI / 180 * 77));
          g.y += l;
          g.x += k.offsetWidth / 2 + d;
          var k = z.L(this.Td)
            , m = z.Rf(k, "display");
          z.O(k, "display", "none");
          this.Hf(g.x, g.y);
          var l = ""
            , n = this.Xc(g.x - 3, g.y, 0);
          if (null === n) return z.O(k, "display", m), this.ha(), a;
          l = n.innerText;
          this.ha();
          a.push(l.replace(c, ""));
          z.O(k, "display", m)
        }
        return a
      }
      if (this.oh) return "";
      var p = this.ce();
      0 < p.length && a.push(p[0].replace(c, ""));
      this.ha();
      return a
    } catch (q) {
      z.R.a()
        .b(q)
    }
  };
  z.f.Pe = function () {
    try {
      var a = [];
      a.context = "";
      a.word = "";
      a.cursorindex = "";
      a.spaceatstart = !1;
      a.spaceatend = !1;
      a.prepunc = "";
      a.postpunc = "";
      a.selectRight = 0;
      a.selectLeft = 0;
      a.prechar = "";
      a.currentchar = "";
      a.postchar = "";
      var b = z.L(this.Td);
      z.P(b);
      var c = window.document.createRange()
        , d = lk(this, "kix-embeddedobject-view");
      if (!(null !== d.element && -1 < d.element.className.indexOf("kix-embeddedobject-view"))) {
        d = lk(this, "kix-wordhtmlgenerator-word-node");
        if (null == d.element && (d = lk(this, "kix-lineview"), null == d.element)) return null;
        d.element = z.M(d.element, "kix-lineview");
        if (null == d.element) return null;
        for (var e = b = "", g = !1, k = window.document.createTreeWalker(d.element, window.NodeFilter.SHOW_TEXT), l = k.nextNode(), m = "", n = "", p = 0, q = 0; l;) {
          for (var s = l.textContent.split(""), t = 0; t < s.length; t++) {
            c.setStart(l, t);
            c.setEnd(l, t + 1);
            var v = c.getClientRects()
              , C;
            a: {
              for (var K = d.Wd.x + 1, V = d.Wd.y, D = 0; D < v.length; ++D) {
                var ha = v[D];
                if (ha.left < K && ha.right > K && ha.top < V && ha.bottom > V) {
                  C = ha;
                  break a
                }
                if (ha.left > K) {
                  C = "leftpastcaret";
                  break a
                }
              }
              C = !1
            }
            "leftpastcaret" ==
            C ? (t = s.length + 10, g = !0) : C ? (t = s.length + 10, g = !0) : "​" !== c.toString() && (n = c.toString(), b += n);
            p++
          }
          g || p != d.element.textContent.length || (b = d.element.textContent, g = !0, p = b.length + 1);
          if (g) {
            var ya = b.split(/(.*?[.?!])/g);
            1 < ya.length && (b = ya[ya.length - 1]);
            a.context = d.element.textContent.substr(0, p - 1)
              .replace(this.Vb, "")
              .split(/(.*?[.?!])/g);
            for (t = a.context.length; t--;) 1 > a.context[t].length && a.context.splice(t, 1);
            for (var Da = d.element.textContent.substr(0)
                .replace(this.Vb, "")
                .split(/(.*?[.?!])/g), t = Da.length; t--;) "" ===
              Da[t] && Da.splice(t, 1);
            0 < q && (Da[0] = Da[0].substr(q), a.context[0] = a.context[0].substr(q));
            if (1 > a.context.length)
              for (var Oa = d.element.previousSibling; Oa;) 10 < Oa.textContent.split(/\s/g)
                .length ? (m = Oa.textContent + m, Oa = null) : (m = Oa.textContent + m, Oa = Oa.previousSibling);
            0 < a.context.length ? (Da = Da[a.context.length - 1], a.context = a.context[a.context.length - 1], e = Da.substr(a.context.length), -1 !== ".?!".indexOf(a.context.substr(a.context.length - 2), 1) && (a.spaceatstart = !0)) : Da = e = a.context = "";
            var $c = a.context.substr(a.context.length -
              1);
            if ((0 == a.context.length || " " == $c || -1 !== ".?!".indexOf($c)) && !z.R.a()
              .Mb()["Prediction-PredictAhead"]) return null == this.vb && (this.vb = z.L("kix-thprediction-popup")), null !== this.vb && (z.O(this.vb, "display", "none"), z.R.a()
              .Il(!1)), null;
            var Hg = a.context.split(/\s/g);
            a.word = Da.split(/\s/g)[Hg.length - 1];
            var Oj = Hg[Hg.length - 1].replace(this.Vb, "");
            a.cursorindex = Oj.length;
            if (0 == a.context.length || 0 == e.trim()
              .replace(/[\u200B]/g, "")
              .length) a.spaceatend = !0;
            0 == a.cursorindex ? (a.selectLeft = 0, a.selectRight =
              0, a.spaceatend = !0, a.word = "") : (a.selectLeft = Oj.replace(this.Vb, "")
              .length, a.selectRight = a.word.replace(this.Vb, "")
              .length - a.selectLeft);
            var Ig = a.word.match(this.cd)
              , nb = a.word
              , Jg = nb.indexOf(Ig);
            0 < Jg && (a.prepunc = nb.substring(0, Jg)
              .replace(/[\u200B]/g, ""), nb = nb.substring(Jg)
              .replace(/[\u200B]/g, ""));
            var nb = nb.split("")
              .reverse()
              .join("")
              , Ig = nb.match(this.cd)
              , Kg = nb.indexOf(Ig);
            0 < Kg && (a.postpunc = nb.substring(0, Kg), a.postpunc = a.postpunc.split("")
              .reverse()
              .join("")
              .replace(/[\u200B]/g, ""), nb = nb.substring(Kg));
            l = null
          } else nk(l.parentElement) && (q = b.length), l = k.nextNode()
        }
        a.context = m + a.context;
        a.context = a.context.replace(this.Vb, "")
          .replace(/\u00a0/g, " ");
        return a
      }
    } catch (zm) {
      z.R.a()
        .b(zm)
    }
  };
  z.f.be = function () {
    try {
      this.Wc();
      var a = {};
      a.Ta = z.Ee(z.J(this.r)[0]);
      if (!(1 > a.Ta.length)) {
        for (var b = z.L(this.ac), c = b.innerHTML.split("<thrwgdns:thctag")[0], d = c.split(">"), e = [], g = 0; g < d.length; g++) {
          var k = d[g];
          "<" != k.substr(0, 1) && e.push(k.split("<")[0])
        }
        a.Mc = e.join(" ")
          .split(a.Ta)
          .length - 1;
        var l = z.J(this.r);
        a.Va = a.Ta;
        a.xc = a.Mc;
        a.Va = z.Ee(l[l.length - 1]);
        if (0 < a.Va.length) {
          var m = b.innerHTML.split("</thrwgdns:thctag>");
          m[m.length - 1] = null;
          c = m.join();
          c = c.substr(0, c.length - 2);
          d = c.split(">");
          e = [];
          for (g = 0; g < d.length; g++) k = d[g], "<" != k.substr(0, 1) && e.push(k.split("<")[0]);
          a.xc = e.join(" ")
            .split(a.Va)
            .length - 1
        }
        this.ha();
        return a
      }
    } catch (n) {
      z.R.a()
        .b(n)
    }
  };
  z.f.Yc = function (a) {
    try {
      a = a.substring(1);
      var b = (0, window.parseInt)(a, 16)
        , b = "rgb(" + (b >> 16 & 255) + "," + (b >> 8 & 255) + "," + (b & 255) + ")"
        , c = window.document.getElementById("textColorButton")
        , d = window.document.getElementById("jfk-palette-cell-169");
      if (null !== c || null !== d) {
        c = window.document.getElementById("textColorButton");
        z.R.a()
          .fireEvent(c, "mousedown");
        z.R.a()
          .fireEvent(c, "mouseup");
        z.R.a()
          .fireEvent(c, "click");
        var d = window.document.getElementById("jfk-palette-cell-169")
          , e = d.firstChild.style.backgroundColor;
        d.firstChild.style.backgroundColor =
          b;
        z.R.a()
          .fireEvent(d, "mousedown");
        z.R.a()
          .fireEvent(d, "mouseup");
        z.R.a()
          .fireEvent(d, "click");
        d.firstChild.style.backgroundColor = e
      } else {
        var g = this.be()
          , k = '{ "doc":"' + window.location.href + '","color":"' + a + '","startWordCount":"' + g.Mc + '", "startWord":"' + (0, window.escape)(g.Ta) + '", "endWordCount":"' + g.xc + '", "endWord":"' + (0, window.escape)(g.Va) + '"}'
          , k = z.ld(k);
        window.postMessage({
          method: "highlightSelection"
          , type: "1757FROM_PAGERW4G"
          , payload: k
        }, "*")
      }
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.f.rc = function () {
    try {
      var a = window.document.getElementById("textColorButton")
        , b = window.document.getElementById("jfk-palette-cell-169");
      if (null !== a && null !== b) {
        z.R.a()
          .fireEvent(a, "mousedown");
        z.R.a()
          .fireEvent(a, "mouseup");
        z.R.a()
          .fireEvent(a, "click");
        var c = b.firstChild.style.backgroundColor;
        b.firstChild.style.backgroundColor = "rgb(255,255,255)";
        z.R.a()
          .fireEvent(b, "mousedown");
        z.R.a()
          .fireEvent(b, "mouseup");
        z.R.a()
          .fireEvent(b, "click");
        b.firstChild.style.backgroundColor = c
      } else {
        var d = this.be()
          , e = '{ "doc":"' +
          window.location.href + '","startWordCount":"' + d.Mc + '", "startWord":"' + (0, window.escape)(d.Ta) + '", "endWordCount":"' + d.xc + '", "endWord":"' + (0, window.escape)(d.Va) + '"}'
          , e = z.ld(e);
        window.postMessage({
          method: "clearHighlights"
          , type: "1757FROM_PAGERW4G"
          , payload: e
        }, "*")
      }
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.Wc = function (a) {
    try {
      void 0 == a && (a = !0);
      var b = []
        , c = []
        , d = z.J(this.kd);
      if (1 > d.length && (d = z.J(this.De), 1 > d.length)) return b;
      var d = Array.prototype.slice.call(d, 0)
        , e = z.R.a()
        .bind(this, this.Mj);
      d.sort(e);
      for (var g = d, d = [], e = 0; e < g.length; e++) a ? z.R.a()
        .Lm(g[e]) && d.push(g[e]) : d.push(g[e]);
      if (0 == d.length) return b;
      a = [];
      for (var k = g = null, l = null, e = 0; e < d.length; e++) {
        for (var k = z.J(this.ea, d[e].parentNode), m = 0; m < k.length; m++) k[m] !== l && (a.push(k[m]), l = k[m]);
        1 > k.length && (g = z.M(d[e], this.ea), g !== l && (a.push(g), l = g))
      }
      g =
        e = null;
      for (k = 0; k < a.length; k++)
        for (e = z.J(this.kb, a[k]), l = 0; l < e.length; l++) this.gd(e[l]), null === g && (g = e[l]);
      var n;
      n = nk(d[0]) ? z.X(ok(d[0]), this.h) : z.X(d[0], this.h);
      var p;
      p = nk(d[d.length - 1]) ? z.X(ok(d[d.length - 1]), this.h) : z.X(d[d.length - 1], this.h);
      var q = z.eg(d[d.length - 1]);
      p.x += q.width;
      this.fi(n);
      this.ei(p);
      this.ag();
      this.za = z.J(this.r);
      for (var s = z.J(this.r), d = 0; d < s.length; d++) b.push(z.Be(s[d])), c.push(nk(s[d]));
      this.Pk = c;
      return b
    } catch (t) {
      z.R.a()
        .b(t)
    }
  };
  z.f.getSelection = function (a) {
    try {
      this.Kf = a;
      var b = this.be()
        , c = '{ "doc":"' + window.location.href + '","startWordCount":"' + b.Mc + '", "startWord":"' + (0, window.escape)(b.Ta) + '", "endWordCount":"' + b.xc + '", "endWord":"' + (0, window.escape)(b.Va) + '"}'
        , c = z.ld(c);
      window.postMessage({
        method: "getSelection"
        , type: "1757FROM_PAGERW4G"
        , payload: c
      }, "*")
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.ss = function () {
    this.h.scrollTop = this.Rf;
    var a = this.Wc(!1);
    this.ha();
    this.Nf(a);
    this.Nf = null
  };
  z.f.rs = function () {
    this.h.scrollTop = this.Rf;
    var a = this.Wc(!1);
    this.ha();
    a = a.join(" ")
      .replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, ".<br /><br />$2")
      .split("|");
    a = {
      documentTitle: window.document.title.replace(" - Google Docs", "")
      , html: a.join(" ")
    };
    this.Nf(a);
    this.Nf = null
  };
  z.f.xd = function (a) {
    try {
      this.Nf = a, pk(this, this.ss.bind(this))
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Ai = function (a) {
    try {
      this.Nf = a, pk(this, this.rs.bind(this))
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.ce = function () {
    try {
      var a = z.J(this.kd);
      if (1 > a.length && (a = z.J(this.De), 1 > a.length)) return this.Ki(!0);
      var b = this.Wc();
      return 1 > b.length ? this.Ki(!0) : b
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Ge = function () {
    try {
      this.dk();
      var a = z.J(this.H);
      if (0 !== a.length)
        for (var b = a[0].parentNode; null !== a;) {
          b.innerHTML = z.Ee(b);
          a = z.J(this.H);
          if (0 === a.length) break;
          b = a[0].parentNode
        }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Pc = function (a, b, c, d) {
    try {
      this.wg(a, b, c, d)
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Bf = function (a, b, c) {
    try {
      this.xg(a, b, c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Jg = function () {
    try {
      var a = {
          trailingSpace: !1
        }
        , b = this.ce()
        , c = z.L(this.Ib);
      if (null !== c) {
        var d = z.P(c)
          , e = z.L(this.Td)
          , g = z.Rf(e, "height")
          , g = g.substr(0, g.length - 2)
          , g = (0, window.parseInt)(g / 2, 10)
          , c = 0;
        this.I(e, "kix-cursor-italic") && (c = g / Math.tan(Math.PI / 180 * 77));
        d.y += g;
        d.x += c + (e.offsetWidth / 2 + .5);
        d.x += 1;
        d.y += 4;
        var k = this.Xc(d.x, d.y, 0)
          , l = z.P(k);
        l.x += this.Dh(k.offsetWidth);
        l.y += this.Dh(k.offsetHeight);
        if (l.x < d.x - 2 || l.y < d.y - 2) a.trailingSpace = !0;
        a.currentWord = (0, window.parseInt)(k.className.split(" ")[2])
      }
      this.ha();
      a.words = b.join(" ");
      return a
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.qb = function (a) {
    try {
      var b = function (a, b) {
        b ? a.classList.add("thImageHighlighted") : a.classList.remove("thImageHighlighted")
      };
      0 < a && (nk(this.za[a - 1]) ? b(ok(this.za[a - 1]), !1) : z.R.a()
        .ta(this.za[a - 1], "thHighlighted"));
      if (nk(this.za[a])) b(ok(this.za[a]), !0);
      else {
        try {
          this.we(this.za[a], this.h)
        } catch (c) {}
        z.R.a()
          .X(this.za[a], "thHighlighted")
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.stop = function () {
    try {
      this.ha()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ge = function (a) {
    try {
      var b = null
        , c = null
        , d = null
        , e = null
        , g = z.T.a()
        .v()
        .speechoptions.continousreading;
      if (a && !g && null === this.Db) return this.ya = null, this.tb = -1, null;
      if (-1 < this.tb) {
        var k = z.P(this.ya);
        k.x += this.tb;
        if (!g && null !== this.Db && (k.y > this.Db.y || k.y === this.Db.y && k.x >= this.Db.x)) return this.ya = null, this.tb = -1, null;
        this.ya = null;
        this.tb = -1;
        return this.Hf(k.x + 5, k.y + 2)
      }
      this.tb = -1;
      if (null !== this.ya.nextSibling) return this.Ng(this.ya.nextSibling);
      b = z.M(this.ya, this.kg);
      if (null === b) return null;
      var l = this.xi(b);
      if (null !== l) return this.Ng(l);
      d = this.Nb(b);
      if (null !== d) return this.Ng(d);
      c = z.M(this.ya, this.ig);
      if (null === c) return [];
      for (; null !== c.nextSibling;) {
        var c = c.nextSibling
          , m = z.Be(c);
        if (0 < m.length && " " !== m && (b = z.L(this.kg, c), b = z.L(this.kg, b), null != b && (e = this.Nb(b, !0), null !== e))) return this.Ng(e)
      }
      return []
    } catch (n) {
      z.R.a()
        .b(n)
    }
  };
  z.f.Ki = function (a) {
    var b = z.L(this.Ib);
    if (null !== b) {
      var b = z.P(b)
        , c = z.L(this.Td)
        , d = z.Rf(c, "height")
        , d = d.substr(0, d.length - 2)
        , d = (0, window.parseInt)(d / 2, 10)
        , e = 0;
      this.I(c, "kix-cursor-italic") && (e = d / Math.tan(Math.PI / 180 * 77));
      b.y += d;
      b.x += e + (c.offsetWidth / 2 + .5);
      return this.Hf(b.x, b.y, a)
    }
    return null
  };
  z.f.Fk = function (a) {
    try {
      var b = [];
      if (null !== a) {
        var c = z.J(this.kb, a);
        for (a = 0; a < c.length; a++) this.gd(c[a]);
        this.Fl()
      }
      this.ag();
      for (var d = z.J(this.r), c = 0; c < d.length; c++) b.push(z.Be(d[c]));
      (0, window.setTimeout)(this.vg.bind(this), this.jg);
      this.za = z.J(this.r);
      1 === this.za.length && this.qb(0);
      return b
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Hf = function (a, b) {
    try {
      var c = []
        , d = []
        , e = this.Gg(a, b);
      if (null == e && (e = this.Gg(a + 4, b), null == e)) return null;
      if (null !== e) {
        var g = z.M(e, this.kb);
        this.gd(g);
        this.Gl(a, b)
      }
      this.ag();
      var k = z.J(this.r);
      if (0 == k.length) return c;
      z.P(k[0]);
      z.P(k[k.length - 1]);
      for (e = 0; e < k.length; e++) c.push(z.Be(k[e])), d.push(nk(k[e]));
      (0, window.setTimeout)(this.vg.bind(this), this.jg);
      this.za = z.J(this.r);
      1 === this.za.length && this.qb(0);
      this.Pk = d;
      return c
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.f.gd = function (a) {
    try {
      var b = z.L(this.kb, a);
      if (null === b)
        if (this.I(a, this.kb)) b = a;
        else throw Error("The element has no text child.");
      a = {};
      a.key = b;
      a.value = a.key.innerHTML;
      this.ne.push(a);
      var c = RegExp("​", "g")
        , b = b.childNodes;
      for (a = 0; a < b.length; a++) {
        for (var d = z.Lj(z.R.a(), b[a]), e = [], g = !1, k = 0; k < d.length; k++) {
          var l = d[k];
          if (g = nk(l.parentElement)) try {
            var m;
            var n = l;
            try {
              for (var p = ["svg", "image", "title", "desc"]; !p.includes(n.nodeName.toLowerCase());)
                if (null != n.parentElement) n = n.parentElement;
                else break;
              m = void 0 == n.nodeName ? "undefined" : "svg" == n.nodeName.toLowerCase() || "image" == n.nodeName.toLowerCase() ? "image" : "desc" == n.nodeName.toLowerCase() ? "desc" : "title" == n.nodeName.toLowerCase() ? "title" : "undefined"
            } catch (q) {
              m = "undefined"
            }
            "desc" == m.toLowerCase() ? -1 == l.nodeValue.indexOf("gmath_latex") && e.push(d[k]) : e.push(d[k])
          } catch (s) {
            e.push(d[k])
          } else e.push(d[k])
        }
        for (g = 0; g < e.length; g++)
          if (0 < e.length) {
            for (var t = e[g].nodeValue.split(/\s/), n = k = "", p = 0; p < t.length; p++) {
              var v = t[p].replace(c, "");
              "<" === v.substr(0
                , 1) ? (n += "<" + this.pa + " class='" + this.H + "'>" + v.trim() + "</" + this.pa + ">", p < t.length - 1 && (n += "<" + this.pa + " class='" + this.H + " " + this.Ba + "'>&nbsp;</" + this.pa + ">")) : (" " === v || "" === v) && p < t.length - 1 ? n = 0 > this.le ? n + "&nbsp;" : n + ("<" + this.pa + " class='" + this.H + " " + this.Ba + "'>&nbsp;</" + this.pa + ">") : 0 < v.length && (this.le++, n += "<" + this.pa + " class='" + this.H + " " + this.r + "'>" + v.trim() + "</" + this.pa + ">", p < t.length - 1 && (n += "<" + this.pa + " class='" + this.H +
                " " + this.Ba + "'>&nbsp;</" + this.pa + ">"))
            }
            var k = k + n
              , C = z.ie("thrwgdns:thctag");
            C.innerHTML = k;
            var K = e[g]
              , V = K.parentNode;
            V && V.replaceChild(C, K);
            this.le = -1
          }
      }
    } catch (D) {
      z.R.a()
        .b(D)
    }
  };
  z.f.we = function (a, b) {
    try {
      if (void 0 != a && void 0 != b) {
        var c = 0
          , d = a;
        if (null != d) {
          for (; d !== b;) c += d.offsetTop, d = d.offsetParent;
          c + 30 > b.scrollTop && c < b.scrollTop + b.offsetHeight - 30 || (b.scrollTop = c - 30)
        }
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.ha = function () {
    try {
      if (0 !== z.J(this.H)
        .length) {
        for (var a in this.ne) this.ne[a].key.innerHTML = this.ne[a].value;
        this.ne.length = 0
      }
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.fi = function (a) {
    try {
      var b = [];
      this.te = 0;
      for (var c = z.J(this.H), d = 0; d < c.length; d++) {
        var e;
        e = nk(c[d]) ? z.X(ok(c[d]), this.h) : z.X(c[d], this.h);
        var g = z.eg(c[d]);
        if (e.x + g.width < a.x) b.push(c[d]), this.I(c[d], this.r) && this.te++;
        else {
          for (; this.I(c[d], this.Ba);) b.push(c[d]), d++;
          d = c.length
        }
      }
      if (0 !== b.length) {
        a = "";
        var k = b[0].parentNode;
        3 == k.firstChild.nodeType && (a += k.firstChild.textContent, z.re(k.firstChild));
        c = "";
        for (d = 0; d < b.length; d++) b[d].parentNode !== k && (k.innerHTML = a + k.innerHTML, a = "", k = b[d].parentNode), c =
          z.Ee(b[d]), a += c, z.re(b[d]);
        0 == k.childNodes.length ? a = c : 3 == k.lastChild.nodeType && (a += k.lastChild.textContent);
        k.innerHTML = a + k.innerHTML
      }
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.f.ei = function (a) {
    try {
      for (var b = [], c = z.J(this.H), d = c.length - 1; 0 <= d; --d) {
        var e;
        e = nk(c[d]) ? z.X(ok(c[d]), this.h) : z.X(c[d], this.h);
        e.x += 2;
        if (e.x >= a.x) b.push(c[d]), this.ya = this.ok(c[d]), nk(c[d]) ? this.tb = z.X(ok(c[d]), this.ya)
          .x : this.tb = z.X(c[d], this.ya)
          .x;
        else {
          for (; this.I(c[d], this.Ba);) b.push(c[d]), d--;
          d = -1
        }
      }
      if (0 !== b.length && (a = "", b.reverse(), c = b, !nk(b[0]))) {
        for (d = b.length - 1; 0 <= d; d--) b[d].parentNode !== c && (c.innerHTML += a, a = "", c = b[d].parentNode), a = z.Ee(b[d]) + a, z.re(b[d]);
        z.Ee(c.innerHTML);
        c.innerHTML +=
          a
      }
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.ck = function (a) {
    try {
      var b = z.J(this.H, a)
        , b = Array.prototype.slice.call(b, 0);
      if (0 !== b.length) {
        a = "";
        for (var c = b, d = b.length - 1; 0 <= d; d--) b[d].parentNode !== c && (c.innerHTML += a, a = "", c = b[d].parentNode), a = z.Ee(b[d]) + a, z.re(b[d]);
        c.innerHTML += a
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.ag = function () {
    try {
      for (var a = -1, b = z.J(this.H), c = 0; c < b.length; c++) this.I(b[c], this.r) && a++, this.pd(b[c], (a + this.te)
        .toString(), a.toString())
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.vg = function () {
    try {
      var a = z.J(this.kd);
      1 > a.length && (a = z.J(this.De));
      for (var b = 0; b < a.length; b++) z.re(a[b])
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Gg = function (a, b) {
    try {
      return mk(a, b, "kix-lineview")
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Xc = function (a, b, c) {
    try {
      if (4 < c) return null;
      var d = window.document.elementFromPoint(a, b);
      if (null === d) return null;
      if (this.I(d, this.ea)) {
        var e = z.J(this.r, d);
        return 0 < e.length ? e[e.length - 1] : null
      }
      if (this.I(d, this.r)) return d;
      if (this.I(d, this.Ba)) {
        var g = z.J(this.H);
        a = null;
        for (b = 0; b < g.length; b++) this.I(g[b], this.r) && (a = g[b]), g[b] == d && (b = g.length);
        return a
      }
      var k = z.Rf(d, "display");
      z.O(d, "display", "none");
      c++;
      var l = this.Xc(a, b, c);
      z.O(d, "display", k);
      return l
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.Dh = function (a) {
    try {
      var b = z.L("kix-zoomdocumentplugin-inner", this.h);
      if (null == b) return a;
      var c = z.Rf(b, "webkitTransform");
      if (null == c || 0 == c.length) return a;
      c = c.substr(6, c.length - 7);
      return a * (0, window.parseFloat)(c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Gl = function (a, b) {
    try {
      var c = this.Xc(a, b, 0);
      if (null === c) {
        var d = z.J(this.r);
        if (0 == d.length) {
          this.ha();
          return
        }
        c = d[d.length - 1]
      }
      this.Je(c);
      c = this.Xc(a, b, 0);
      if (null === c) {
        d = z.J(this.r);
        if (0 == d.length) {
          this.ha();
          return
        }
        c = d[d.length - 1]
      }
      this.Ie(c)
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Fl = function () {
    try {
      var a = z.J(this.r);
      this.Je(a[0]);
      a = z.J(this.r);
      null === a[0] ? this.ha() : this.Ie(a[0])
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Je = function (a) {
    try {
      var b = null
        , c = null
        , d = null
        , e = !1;
      if (this.I(a, this.r)) b = a;
      else if (this.I(a, this.ea)) {
        for (var g = z.J(this.kb, a), k = 0; k < g.length; k++) this.gd(g[k]);
        c = z.J(this.r, a);
        b = c[c.length - 1];
        e = !0
      } else return;
      z.R.a();
      var l = this.gc.sentences.sentenceEndExclusions
        , g = -1;
      null === c && (d = z.M(b, this.ea), c = z.J(this.r, d));
      if (e) g = c.length - 1;
      else
        for (var m = 0; m < c.length; m++) c[m] === b && (g = m, m = c.length);
      if (-1 !== g) {
        a = g;
        !e && 0 < a && a--;
        if (0 < g) {
          e = -1;
          for (m = a; 0 <= m; m--) {
            var n = z.Kj(l, z.Be(c[m]));
            n || (n = nk(c[m]));
            if (!n)
              for (var p in this.fb) - 1 !==
                c[m].innerText.search(this.fb[p]) && (e = m, m = -1)
          }
          if (-1 < e) {
            if (c.length - 1 === e) this.ck(z.M(c[e], this.ea));
            else {
              var q;
              q = nk(c[e + 1]) ? z.X(ok(c[e + 1]), this.h) : z.X(c[e + 1], this.h);
              this.fi(q)
            }
            return
          }
        }
        null === d && (d = z.M(b, this.ea));
        this.Je(d.previousSibling)
      }
    } catch (s) {
      z.R.a()
        .b(s)
    }
  };
  z.f.Ie = function (a) {
    try {
      var b = null
        , c = null
        , d = null
        , e = !1;
      if (this.I(a, this.r)) b = a;
      else if (this.I(a, this.ea)) {
        for (var d = a, g = z.J(this.kb, a), k = 0; k < g.length; k++) this.gd(g[k]);
        c = z.J(this.r, a);
        b = c[0];
        e = !0
      } else return;
      z.R.a();
      var l = this.gc.sentences.sentenceEndExclusions;
      a = -1;
      null === c && (d = z.M(b, this.ea), c = z.J(this.r, d));
      if (e) a = 0;
      else
        for (var m = 0; m < c.length; m++) c[m] === b && (a = m, m = c.length);
      if (-1 !== a) {
        e = -1;
        for (m = a; m < c.length; m++) {
          var n = z.Kj(l, z.Be(c[m]));
          n || (n = nk(c[m]));
          if (!n)
            for (var p in this.fb) - 1 !== c[m].innerText.search(this.fb[p]) &&
              (e = m, m = c.length)
        } - 1 === e && null === d.nextSibling && (e = c.length - 1);
        e === c.length - 1 && (this.ya = d);
        if (-1 < e) {
          if (e < c.length - 1) {
            var q;
            q = nk(c[e + 1]) ? z.X(ok(c[e + 1]), this.h) : z.X(c[e + 1], this.h);
            this.ei(q)
          }
        } else null === d && (d = z.M(b, this.ea)), this.Ie(d.nextSibling)
      }
    } catch (s) {
      z.R.a()
        .b(s)
    }
  };
  z.f.ok = function (a) {
    try {
      return null === a ? null : this.I(a, this.ea) ? a : z.M(a, this.ea)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.oi = function (a, b) {
    try {
      var c = window.document.createEvent("MouseEvents");
      c.initMouseEvent.apply(c, b);
      a.dispatchEvent(c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.ek = function () {};
  z.f.dk = function () {
    try {
      var a = z.L(this.Ib);
      if (null !== a) {
        var b = z.P(a);
        this.ek(b.x, b.y)
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Fj = function (a, b) {
    try {
      if (a < this.bf.length && !1 === this.cf) {
        this.we(this.bf[a], this.h);
        var c = z.R.a()
          .bind(this, this.Fj);
        a += 1;
        (0, window.setTimeout)(function () {
          c(a, b)
        }, 30)
      } else this.cf = !0, void 0 !== b && b()
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Kd = function (a) {
    try {
      if (void 0 != a.source && void 0 != a.data && a.source == window && "1757FROM_BGRW4G" == a.data.type)
        if ("onGetSelection" == a.data.method) {
          var b = z.ld(a.data.payload);
          this.Kf(b)
        } else if ("onCollectHighlights" == a.data.method) {
        var c = z.ld(a.data.payload);
        if ("string" === typeof c) {
          var d = null
            , e = z.R.a()
            .Uc()
            , d = window.open(c, "_ntthch" + e);
          d.focus();
          this.zc(c)
        } else 0 == c[0].highlights.length ? this.zc("false") : this.zc("true")
      } else if ("onVocabWords" == a.data.method) {
        var g = z.ld(a.data.payload);
        "string" === typeof g &&
          (d = null, e = z.R.a()
            .Uc(), d = window.open(g, "_ntthchVc" + e), d.focus(), this.rj(g))
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  z.f.wg = function (a, b, c) {
    try {
      this.zc = a;
      var d = z.U.a()
        .K("ch_documentTitle");
      window.postMessage({
        method: "collectHighlightsRequest"
        , type: "1757FROM_PAGERW4G"
        , payload: window.location.href
        , sort: b
        , colors: c
        , docTitle: d
      }, "*")
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.xg = function (a, b) {
    try {
      this.rj = a;
      var c = {};
      c.docTitle = z.U.a()
        .K("vocab_document_title");
      c.title = z.U.a()
        .K("vocab_title");
      c.heading = z.U.a()
        .K("vocab_word_heading");
      c.symbol = z.U.a()
        .K("vocab_word_symbol");
      c.notes = z.U.a()
        .K("vocab_word_notes");
      c.meaning = z.U.a()
        .K("vocab_word_meaning");
      c.locale = z.T.a()
        .v()
        .language.services;
      window.postMessage({
        method: "vocabWordsRequest"
        , type: "1757FROM_PAGERW4G"
        , payload: window.location.href
        , colors: b
        , filename: c.mt
        , translations: c
        , locale: c.locale
      }, "*")
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Mj = function (a, b) {
    try {
      var c, d;
      nk(a) ? window.thPos = z.X(ok(a), this.h) : c = z.X(a, this.h);
      nk(b) ? window.thPos = z.X(ok(b), this.h) : d = z.X(b, this.h);
      if (c.y > d.y) return 1;
      if (c.y < d.y) return -1;
      if (c.y === d.y) {
        if (c.x < d.x) return -1;
        if (c.x > d.x) return 1
      }
      return 0
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Ng = function (a) {
    try {
      if (null === a) return [];
      this.we(a, this.h);
      var b = z.T.a()
        .v()
        .speechoptions.continousreading;
      this.ya = null;
      this.tb = -1;
      if (null !== a) {
        var c = z.P(a);
        if (!b && null !== this.Db && c.y > this.Db.y) return this.ya = null, this.tb = -1, [];
        var d = z.Rf(a, "height")
          , d = d.substr(0, d.length - 2)
          , d = (0, window.parseInt)(d, 10);
        c.y += d / 2;
        return this.Fk(a)
      }
      return []
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Nb = function (a, b) {
    try {
      var c = a.nextSibling;
      !0 === b && (c = a);
      if (null === c) return null;
      for (; null !== c;) {
        var d = z.Be(c);
        if (0 < d.length && " " !== d) return z.L(this.ea, c);
        c = c.nextSibling
      }
      return null
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.xi = function (a) {
    try {
      var b = z.M(a, "kix-rowrenderer-td");
      if (null !== b) {
        var c = this.Nb(a);
        if (null !== c || null !== b.nextSibling && (c = this.Nb(b), null !== c)) return c;
        var d = b.parentElement;
        if (null !== d.nextSibling && (c = this.Nb(d), null !== c)) return c;
        var e = z.M(d, "kix-tablerenderer-container");
        if (null !== e.nextSibling && (c = this.Nb(e), null !== c)) return c
      } else return c = this.Nb(a), b = z.M(c, "kix-rowrenderer-td"), null === b ? null : "" === z.Be(b) ? this.xi(b) : b;
      return null
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.Pl = function (a) {
    try {
      a.doc = window.location.href, window.postMessage({
        method: "updateSelection"
        , type: "1757FROM_PAGERW4G"
        , payload: a
      }, "*")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.xe = function () {
    try {
      this.la.tj(), this.la.qa("CTRL+Shift+S", 1, "keydown"), this.la.qa("CTRL+Shift+S", 1, "keyup"), this.la.qa("CMD+Shift+S", 1, "keydown"), this.la.qa("CMD+Shift+S", 1, "keyup")
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ye = function () {};
  z.f.Pb = function () {
    try {
      var a = z.L(this.Ib)
        , b = {
          x: 10
          , y: 10
        };
      if (null == a) return {
        x: -1
        , y: -1
      };
      var c = new z.H(a.offsetLeft, a.offsetTop)
        , d = z.eg(a);
      b.x = c.x - d.width - a.scrollWidth - 18;
      b.y = c.y + d.height + a.scrollHeight + 6;
      return b
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.u("textHelp.parsers", z.Wj);
  z.u("textHelp.parsers.Parser", Y);
  Y.prototype.hiliteNextSentence = Y.prototype.ge;
  Y.prototype.hiliteWord = Y.prototype.qb;
  Y.prototype.highlightSelection = Y.prototype.Yc;
  Y.hiliteWord = Y.qb;
  Y.prototype.getUserSettings = Y.prototype.v;
  Y.prototype.getSelection = Y.prototype.getSelection;
  Y.prototype.getSelectionLocal = Y.prototype.xd;
  Y.prototype.clearHighlights = Y.prototype.rc;
  Y.prototype.getTextWithContext = Y.prototype.Jg;
  Y.prototype.updateSelection = Y.prototype.Pl;
  Y.prototype.startSpeechRecognition = Y.prototype.xe;
  Y.prototype.stopSpeechRecognition = Y.prototype.ye;
  Y.prototype.getParserName = Y.prototype.Ob;
  Y.prototype.getBarConfigFromParser = Y.prototype.ec;
  Y.prototype.getPredictionPosition = Y.prototype.Pb;
  z.Df("GDocsParser");
})(__textHelp__);
//@ sourceURL=chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_GDocsParser.js
