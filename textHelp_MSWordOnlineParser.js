(function (z) {
  var yk = function (a) {
    this.M = window.document;
    this.h = this.se = window;
    this.da = a;
    new z.ud;
    this.sa = !1;
    this.jc = this.ub = null;
    this.O = [];
    this.Cc = !1;
    this.B = {};
    this.B.na = 0;
    this.B.Bl = "";
    this.B.Al = "";
    this.B.mc = null;
    this.Jd = this.Id = 0;
    this.cd = /\w/i;
    this.A = {};
    this.A.parentId = "WACDocumentPanelContent";
    this.A.positionId = "Selected";
    this.A.seq = "1";
    this.A.words = [];
    this.A.words.push("The");
    this.A.words.push("In");
    this.A.words.push("I");
    this.A.words.push("It");
    this.A.words.push("He");
    this.A.words.push("This");
    this.A.words.push("A");
    this.A.words.push("But");
    this.A.words.push("As");
    this.A.words.push("For");
    this.Yf = z.R.a()
      .bind(this, this.Sh);
    this.of = z.R.a()
      .bind(this, this.wf);
    this.Ga = this.ma = null
  };
  var zk = function (a) {
    var b;
    b = window.getSelection();
    0 < b.toString()
      .trim()
      .length ? (b = b.getRangeAt(0), b.deleteContents()) : (b.collapseToEnd(), b = b.getRangeAt(0));
    b.insertNode(window.document.createTextNode(a))
  };
  var Z = function () {
    this.kd = "Highlights";
    this.ac = "WACViewPanel_EditingElement";
    this.ea = "kix-lineview";
    this.kb = "kix-lineview-text-block";
    this.kg = "kix-paragraphrenderer";
    this.ig = "kix-page";
    this.lg = "thRWGDns";
    this.hg = "thCTag";
    this.pa = this.lg + ":" + this.hg;
    this.H = "textHELPWR";
    this.r = "thMSWord";
    this.Ba = "thSpace";
    this.jg = 100;
    this.Da = null;
    this.le = -1;
    this.te = 0;
    this.gc = z.fj.a()
      .Ab();
    this.fb = this.gc.sentences.wordEnds;
    this.za = [];
    this.Rf = 0;
    this.bf = null;
    this.Ah = !1;
    this.Vb = /[\u200B-\u200D\uFEFF\u25A0-\u27A2]/g;
    this.cd =
      /\w/i;
    this.Ma = this.fa = null;
    (this.Vk = z.I(this.ac)) && window.console.log("Found Editor Frame");
    (this.Fd = window.document) && window.console.log("Found Editor Document");
    this.h = window;
    null === this.h && window.console.log("Found Editor Window");
    this.ne = [];
    this.ya = null;
    this.tb = -1;
    this.cf = !1;
    this.Db = null;
    this.ue = 0;
    this.df = z.R.a()
      .bind(this, this.Kd);
    this.la = new yk(this);
    window.addEventListener("message", this.df, !1);
    var a = this.la
      , b = z.R.a()
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
    a.M.addEventListener("mouseup", b, !0);
    z.S.a()
      .k("onPredictionChange", a.kf, a);
    z.S.a()
      .k("onWRPredictionStateChanged", a.lf, a);
    z.S.a()
      .k("onSpeechRecognitionChange", a.yh, a)
  };
  var Ak = function (a) {
    if (a.firstChild) return a.firstChild;
    for (; a;) {
      if (a.nextSibling) return a.nextSibling;
      a = a.parentNode
    }
  };
  z.Bk = function (a, b, c, d) {
    z.Ck ? (z.Ck = !1, z.Dk(a, b, c, d)) : window.setTimeout(z.Bk, 100, a, b, c, d)
  };
  z.Dk = function (a, b, c, d) {
    var e = new window.Image;
    e.crossOrigin = "Anonymous";
    e.onload = function () {
      var a = window.document.createElement("CANVAS")
        , e = a.getContext("2d");
      a.height = this.height;
      a.width = this.width;
      e.drawImage(this, 0, 0);
      a = a.toDataURL("image/png");
      z.Ek.push(a.slice(22));
      z.Ck = !0;
      z.Ek.length === c && b(d, z.Ek)
    };
    e.src = a
  };
  z.Fk = function (a, b) {
    var c = 0
      , d = new window.openXml.Ws(z.Gk);
    d.gl()
      .ip()
      .root.element(window.openXml.c.body);
    for (var e = new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.js, new window.Ltxml.e(window.openXml.c.P, "Title")), new window.Ltxml.d(window.openXml.c.he, new window.Ltxml.e(window.openXml.c.P, "center"))), new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.Ae, "Vocabulary List Untitled"))), g = new window.Ltxml.d(window.openXml.c.Hc
        , new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.js, new window.Ltxml.e(window.openXml.c.P, "Heading1"))), new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.Ae, ""))), k = [], l = 0; l < b.length; l++) {
      var m = b[l]
        , n = "rId" + (d.gl()
          .wt()
          .length + 1)
        , p = new window.Ltxml.d(window.openXml.c.nt, new window.Ltxml.d(window.openXml.Tl.Ct, new window.Ltxml.d(window.openXml.Tl.rt, new window.Ltxml.e(window.openXml.Oc.Lo, "457200"), new window.Ltxml.e(window.openXml.Oc.Mo, "457200"))
          , new window.Ltxml.d(window.openXml.Tl.lt, new window.Ltxml.e(window.openXml.Oc.id, l), new window.Ltxml.e(window.openXml.Oc.name, "Pic" + l), new window.Ltxml.e(window.openXml.Oc.kt, "thlogo.png")), new window.Ltxml.d(window.openXml.Ce.xt, new window.Ltxml.d(window.openXml.Ce.yt, new window.Ltxml.e(window.openXml.Oc.uri, "http://schemas.openxmlformats.org/drawingml/2006/picture"), new window.Ltxml.d(window.openXml.og.$s, new window.Ltxml.d(window.openXml.og.Jt, new window.Ltxml.d(window.openXml.og.gt, new window.Ltxml.e(window.openXml.Oc.id
            , l), new window.Ltxml.e(window.openXml.Oc.name, "thlogo.png")), new window.Ltxml.d(window.openXml.og.ft)), new window.Ltxml.d(window.openXml.og.et, new window.Ltxml.d(window.openXml.Ce.dt, new window.Ltxml.e(window.openXml.Xs.ot, n)), new window.Ltxml.d(window.openXml.Ce.stretch, new window.Ltxml.d(window.openXml.Ce.fillRect))), new window.Ltxml.d(window.openXml.og.Vt, new window.Ltxml.d(window.openXml.Ce.gu, new window.Ltxml.d(window.openXml.Ce.qt, new window.Ltxml.e(window.openXml.Oc.Lo, "457200"), new window.Ltxml.e(window.openXml.Oc.Mo
            , "457200"))), new window.Ltxml.d(window.openXml.Ce.Mt, new window.Ltxml.e(window.openXml.Oc.Lt, "rect"))))))))
        , q = "media/image" + l + ".png";
      d.at("/word/media/image" + l + ".png", window.openXml.it.Kt, "base64", m);
      d.gl()
        .bt(n, window.openXml.Nt.zt, q, "Internal");
      k.push(p)
    }
    var l = new window.Ltxml.d(window.openXml.c.au, new window.Ltxml.d(window.openXml.c.bu, new window.Ltxml.e(window.openXml.c.P, "TableGrid")), new window.Ltxml.d(window.openXml.c.cu, new window.Ltxml.e(window.openXml.c.bc, 0), new window.Ltxml.e(window.openXml.c.type
        , "dxa")), new window.Ltxml.d(window.openXml.c.$t, new window.Ltxml.e(window.openXml.c.P, "04A0"), new window.Ltxml.e(window.openXml.c.ut, 1), new window.Ltxml.e(window.openXml.c.Ft, 0), new window.Ltxml.e(window.openXml.c.tt, 1), new window.Ltxml.e(window.openXml.c.Et, 0), new window.Ltxml.e(window.openXml.c.Ht, 0), new window.Ltxml.e(window.openXml.c.It, 1)))
      , m = new window.Ltxml.d(window.openXml.c.Zt, new window.Ltxml.d(window.openXml.c.wk, new window.Ltxml.e(window.openXml.c.bc, 1326)), new window.Ltxml.d(window.openXml.c.wk
        , new window.Ltxml.e(window.openXml.c.bc, 5355)), new window.Ltxml.d(window.openXml.c.wk, new window.Ltxml.e(window.openXml.c.bc, 1575)), new window.Ltxml.d(window.openXml.c.wk, new window.Ltxml.e(window.openXml.c.bc, 1200)))
      , n = []
      , p = new window.Ltxml.d(window.openXml.c.sf, new window.Ltxml.d(window.openXml.c.tf, new window.Ltxml.d(window.openXml.c.uf, new window.Ltxml.e(window.openXml.c.bc, 1326), new window.Ltxml.e(window.openXml.c.type, "dxa")), new window.Ltxml.d(window.openXml.c.rf, new window.Ltxml.e(window.openXml.c.P
        , "clear"), new window.Ltxml.e(window.openXml.c.color, "auto"), new window.Ltxml.e(window.openXml.c.fill, "E7E6E6"))), new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd, new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.he, new window.Ltxml.e(window.openXml.c.P, "center")), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za
        , "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null)), new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P
        , "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null), new window.Ltxml.d(window.openXml.c.Ae, "Word"))))
      , s = new window.Ltxml.d(window.openXml.c.sf, new window.Ltxml.d(window.openXml.c.tf, new window.Ltxml.d(window.openXml.c.uf, new window.Ltxml.e(window.openXml.c.bc, 5355), new window.Ltxml.e(window.openXml.c.type, "dxa")), new window.Ltxml.d(window.openXml.c.rf, new window.Ltxml.e(window.openXml.c.P, "clear"), new window.Ltxml.e(window.openXml.c.color, "auto"), new window.Ltxml.e(window.openXml.c.fill, "E7E6E6")))
        , new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd, new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.he, new window.Ltxml.e(window.openXml.c.P, "center")), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b
          , new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null)), new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null), new window.Ltxml.d(window.openXml.c.Ae
          , "Meaning"))))
      , t = new window.Ltxml.d(window.openXml.c.sf, new window.Ltxml.d(window.openXml.c.tf, new window.Ltxml.d(window.openXml.c.uf, new window.Ltxml.e(window.openXml.c.bc, 1575), new window.Ltxml.e(window.openXml.c.type, "dxa")), new window.Ltxml.d(window.openXml.c.rf, new window.Ltxml.e(window.openXml.c.P, "clear"), new window.Ltxml.e(window.openXml.c.color, "auto"), new window.Ltxml.e(window.openXml.c.fill, "E7E6E6"))), new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd
          , new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.he, new window.Ltxml.e(window.openXml.c.P, "center")), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null))
        , new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null), new window.Ltxml.d(window.openXml.c.Ae, "Symbol"))))
      , q = new window.Ltxml.d(window.openXml.c.sf, new window.Ltxml.d(window.openXml.c.tf, new window.Ltxml.d(window.openXml.c.uf
        , new window.Ltxml.e(window.openXml.c.bc, 1200), new window.Ltxml.e(window.openXml.c.type, "dxa")), new window.Ltxml.d(window.openXml.c.rf, new window.Ltxml.e(window.openXml.c.P, "clear"), new window.Ltxml.e(window.openXml.c.color, "auto"), new window.Ltxml.e(window.openXml.c.fill, "E7E6E6"))), new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd, new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.he
        , new window.Ltxml.e(window.openXml.c.P, "center")), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null)), new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za
        , "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null), new window.Ltxml.d(window.openXml.c.Ae, "Notes"))))
      , p = new window.Ltxml.d(window.openXml.c.Ms, p, s, t, q);
    n.push(p);
    for (var v = 0; v < z.Hk.length; v++) {
      var q = 0 === v % 2
        , p = new window.Ltxml.d(window.openXml.c.sf, new window.Ltxml.d(window.openXml.c.tf, new window.Ltxml.d(window.openXml.c.uf, new window.Ltxml.e(window.openXml.c.bc
          , 1326), new window.Ltxml.e(window.openXml.c.type, "dxa")), q ? new window.Ltxml.d(window.openXml.c.rf, new window.Ltxml.e(window.openXml.c.P, "clear"), new window.Ltxml.e(window.openXml.c.color, "auto"), new window.Ltxml.e(window.openXml.c.fill, "99CDFF")) : null), new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd, new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.he, new window.Ltxml.e(window.openXml.c.P
          , "center")), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "24")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null)), new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS")
          , new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "24")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null), new window.Ltxml.d(window.openXml.c.Ae, z.Hk[v].word))))
        , C = z.Hk[v].inflections
        , s = "";
      if (0 < C.length)
        for (var K = 0; K < C.length; K++)
          for (var t = C[K].definitions, V = 0; V < t.length; V++) s = s + t[V].definition + "\n\n";
      "" === s && (s = "No meaning found.");
      s = new window.Ltxml.d(window.openXml.c.sf, new window.Ltxml.d(window.openXml.c.tf
        , new window.Ltxml.d(window.openXml.c.uf, new window.Ltxml.e(window.openXml.c.bc, 5355), new window.Ltxml.e(window.openXml.c.type, "dxa")), q ? new window.Ltxml.d(window.openXml.c.rf, new window.Ltxml.e(window.openXml.c.P, "clear"), new window.Ltxml.e(window.openXml.c.color, "auto"), new window.Ltxml.e(window.openXml.c.fill, "99CDFF")) : null), new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd, new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md
        , 80)), new window.Ltxml.d(window.openXml.c.he, new window.Ltxml.e(window.openXml.c.P, "center")), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "24")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null)), new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb
        , new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "24")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null), new window.Ltxml.d(window.openXml.c.Ae, s))));
      t = new window.Ltxml.d(window.openXml.c.sf, new window.Ltxml.d(window.openXml.c.tf, new window.Ltxml.d(window.openXml.c.uf, new window.Ltxml.e(window.openXml.c.bc, 1575), new window.Ltxml.e(window.openXml.c.type, "dxa"))
        , q ? new window.Ltxml.d(window.openXml.c.rf, new window.Ltxml.e(window.openXml.c.P, "clear"), new window.Ltxml.e(window.openXml.c.color, "auto"), new window.Ltxml.e(window.openXml.c.fill, "99CDFF")) : null));
      C = z.Hk[v].inflections;
      if (0 < C.length)
        for (K = 0; K < C.length; K++)
          if (window.symbols = C[K].symbols, 0 < window.symbols.length) {
            for (V = c; V < window.symbols.length + c; V++) {
              var D = new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd, new window.Ltxml.e(window.openXml.c.nd
                , 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.he, new window.Ltxml.e(window.openXml.c.P, "center")), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null)), new window.Ltxml.d(window.openXml.c.Jc, k[V]));
              t.add(D)
            }
            c = (0, window.parseInt)(c) + (0, window.parseInt)(window.symbols.length)
          } else D =
            new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd, new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null)), new window.Ltxml.d(window.openXml.c.Jc, "No Symbols")), t.add(D);
      else D = new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd, new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null)), new window.Ltxml.d(window.openXml.c.Jc, "No Symbols"))
        , t.add(D);
      q = new window.Ltxml.d(window.openXml.c.sf, new window.Ltxml.d(window.openXml.c.tf, new window.Ltxml.d(window.openXml.c.uf, new window.Ltxml.e(window.openXml.c.bc, 1200), new window.Ltxml.e(window.openXml.c.type, "dxa")), q ? new window.Ltxml.d(window.openXml.c.rf, new window.Ltxml.e(window.openXml.c.P, "clear"), new window.Ltxml.e(window.openXml.c.color, "auto"), new window.Ltxml.e(window.openXml.c.fill, "99CDFF")) : null), new window.Ltxml.d(window.openXml.c.Hc, new window.Ltxml.d(window.openXml.c.Ic, new window.Ltxml.d(window.openXml.c.Rd
          , new window.Ltxml.e(window.openXml.c.nd, 80), new window.Ltxml.e(window.openXml.c.md, 80)), new window.Ltxml.d(window.openXml.c.he, new window.Ltxml.e(window.openXml.c.P, "center")), new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null))
        , new window.Ltxml.d(window.openXml.c.Jc, new window.Ltxml.d(window.openXml.c.hb, new window.Ltxml.d(window.openXml.c.gb, new window.Ltxml.e(window.openXml.c.Za, "Trebuchet MS"), new window.Ltxml.e(window.openXml.c.cb, "Trebuchet MS")), new window.Ltxml.d(window.openXml.c.$b, new window.Ltxml.e(window.openXml.c.P, "32")), 0 === v ? new window.Ltxml.d(window.openXml.c.$a) : null), new window.Ltxml.d(window.openXml.c.Ae, ""))));
      p = new window.Ltxml.d(window.openXml.c.Ms, p, s, t, q);
      n.push(p)
    }
    c = new window.Ltxml.d(window.openXml.c.Yt
      , l, m, n);
    k = z.R.a()
      .$();
    z.Ik(k + "assets/helper.png", d, e, g, c, a)
  };
  z.Ik = function (a, b, c, d, e, g) {
    window.document.createElement("CANVAS")
      .getContext("2d");
    (new window.Image)
    .crossOrigin = "Anonymous";
    a = new window.Ltxml.d(window.openXml.c.document, new window.Ltxml.d(window.openXml.c.body, c, d, e));
    b.gl()
      .ip()
      .root.Ot(a);
    b.Rt();
    b.Tt();
    var k = b.St()
      , l;
    b = new window.FileReader;
    b.onload = function () {
      l = this.result;
      (new window.FormData)
      .append("file", k, "VocabularyList.docx");
      for (var a = "", b = new window.Uint8Array(l), c = b.byteLength, d = 0; d < c; d++) a += String.fromCharCode(b[d]);
      0 < window.location.ancestorOrigins[0].indexOf("sharepoint.com") ?
        window.postMessage({
          method: "vocabO365WordsRequest"
          , type: "1757FROM_PAGERW4G"
          , filename: g
          , filedata: window.btoa(a)
        }, "*") : window.postMessage({
          method: "vocabO365WordsLiveRequest"
          , type: "1757FROM_PAGERW4G"
          , filename: g
          , filedata: window.btoa(a)
        }, "*")
    };
    b.readAsArrayBuffer(k)
  };
  z.f = yk.prototype;
  z.f.uh = function (a) {
    this.Oa(a.keyCode)
  };
  z.f.th = function () {};
  z.f.ed = function (a) {
    if (a.ctrlKey && 47 < a.keyCode && 58 > a.keyCode) {
      var b = [];
      b.push(a);
      z.S.a()
        .l("onPredictionKeyDownEvent", b);
      z.Mj() && (a.preventDefault(), a.stopPropagation())
    }
  };
  z.f.wf = function () {
    this.sa && this.Oa("");
    this.Ke()
  };
  z.f.Oa = function () {
    null !== this.ma && ((0, window.clearTimeout)(this.ma), this.ma = null);
    this.ma = (0, window.setTimeout)(this.Yf, 110)
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
      var b = this.B.mc
        , c = b.prepunc + a[0] + b.postpunc;
      b.spaceatstart && (c = " " + c);
      b.spaceatend && (c += " ");
      this.eg(c);
      var d = z.R.pb()
        .wa();
      a = [];
      a.push("prediction insert");
      a.push(d.mg);
      a.push(d.mg.split("@")[1]);
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "SendEvent"
        , parameters: a
      }, "*");
      this.Oa()
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.lf = function (a) {
    try {
      if (this.sa = a[0]) a = [], a.push("WACViewPanel_EditingElement"), this.Oa(""), z.S.a()
        .l("onOpenPredictionWindow", a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.tj = function () {
    try {
      var a = z.L("kix-cursor-caret", this.h);
      if (null !== a) {
        var b = z.P(a);
        this.hi(b.x, b.y)
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.yh = function (a) {
    try {
      var b;
      b = window.getSelection();
      b.collapseToEnd();
      b.getRangeAt(0)
        .insertNode(window.document.createTextNode(a));
      var c = b.anchorNode.parentNode
        , d = window.document.createEventObject ? window.document.createEventObject() : window.document.createEvent("Events");
      d.initEvent && d.initEvent("keypress", !0, !0);
      d.keyCode = 77;
      d.which = 77;
      c.dispatchEvent ? c.dispatchEvent(d) : c.fireEvent("onkeydown", d);
      for (c = 0; c < a.length; c++) b.modify("extend", "forward", "character");
      b.collapseToEnd()
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Zc = function () {
    this.O.keydown = this.ob("keydown", window.document);
    this.O.keypress = this.ob("keypress", window.document);
    this.O.mousedown = this.ob("mousedown", window.document);
    this.O.mouseup = this.ob("mouseup", window.document)
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
  z.f.qa = function (a, b) {
    void 0 == b && (b = 1);
    if (!(1 > b)) {
      this.Cc || this.Zc();
      void 0 == b && (b = 1);
      var c = {
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
        , type: "keydown"
        , view: this.se
        , which: 0
      };
      switch (a) {
      case "CTRL+Z":
        c.ctrlKey = !0;
        c.keyCode = 90;
        c.which = 90;
        break;
      case "Apple+Z":
        c.metaKey = !0;
        c.keyCode = 90;
        c.which = 90;
        break;
      case "Backspace":
        c.defaultPrevented = !0;
        c.keyCode = 8;
        c.which = 8;
        break;
      case "Newline":
        c.defaultPrevented = !0;
        c.keyCode = 13;
        c.which = 13;
        break;
      case "CTRL+Home":
        c.ctrlKey = !0;
        c.keyCode = 36;
        c.which = 36;
        break;
      case "Shift+ArrowLeft":
        c.keyCode = 37;
        c.shiftKey = !0;
        c.which = 37;
        break;
      case "ArrowRight":
        c.keyCode = 39;
        c.which = 39;
        break;
      case "ArrowLeft":
        c.keyCode = 37;
        c.which = 37;
        break;
      case "CTRL+Shift+ArrowRight":
        c.ctrlKey = !0;
        c.keyCode = 39;
        c.shiftKey = !0;
        c.which = 39;
        break;
      default:
        return
      }
      for (var d = 0; d < b; d++)
        for (var e in this.O.keydown) this.O.keydown[e].tc(c)
    }
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
          .ld(a.context) + '","' + b + '","' + c + '"'
          , e = '{ "parent":"WACDocumentPanelContent", "position":"' + this.da.Ib + '","addSpace":true,"seq":"' + this.B.na + '"}';
        z.R.a()
          .Ih(this.B.na);
        this.B.mc = a;
        e = z.ld(e);
        d = [];
        d[0] = (0, window.encodeURIComponent)(z.R.a()
          .ld(a.context));
        d[1] =
          b;
        d[2] = c;
        0 < this.h.getSelection()
          .toString()
          .length ? z.S.a()
          .l("onClosePredictionWindow", []) : (e.context = d, window.postMessage({
            method: "thPrediction"
            , type: "1757FROM_PAGERW4G"
            , payload: e
          }, "*"))
      }
    }
  };
  z.f.eg = function (a) {
    for (var b = window.getSelection(), c = this.B.mc, d = 0; d < c.selectRight; d++) b.modify("extend", "forward", "character");
    b.collapseToEnd();
    for (d = 0; d < c.selectLeft + c.selectRight; d++) b.modify("extend", "backward", "character");
    zk(a);
    var d = b.anchorNode.parentNode
      , e = window.document.createEventObject ? window.document.createEventObject() : window.document.createEvent("Events");
    e.initEvent && e.initEvent("keypress", !0, !0);
    e.keyCode = 77;
    e.which = 77;
    d.dispatchEvent ? d.dispatchEvent(e) : d.fireEvent("onkeydown"
      , e);
    for (d = 0; d < a.length; d++) b.modify("extend", "forward", "character");
    c.spaceatend || b.modify("extend", "forward", "character");
    b.collapseToEnd()
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
  z.Wj.yj = "MSWordOnlineParser";
  z.Gk = "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";
  z.w(Z, z.Jj);
  z.f = Z.prototype;
  z.f.Og = function () {
    try {
      var a = this.ce();
      z.R.a();
      var b = this.gc.sentences.sentenceEndExclusions;
      window.console.log("sentenceEndExclusions Initialised");
      for (var c = 0; c < a.length - 1; c++)
        if (!z.Kj(b, a[c]))
          for (var d in this.fb) - 1 !== a[c].search(this.fb[d]) && (c = a.length);
      return a
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Ff = function () {
    try {
      for (var a = window.document.getElementsByClassName("Selected"), b = "", c = 0; c < a.length; c++)
        if (0 < a[c].innerText.trim()
          .length) b += a[c].innerText;
        else break;
      return 0 < b.length ? !0 : !1
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.bb = function () {
    try {
      for (var a = window.document.getElementsByClassName("Selected"), b = "", c = [], d = 0; d < a.length; d++)
        if (0 < a[d].innerText.trim()
          .length) b += a[d].innerText;
        else break;
      0 < b.length && c.push(b.trim());
      if (0 == c.length) {
        var e;
        e = null == this.h ? this.Fd.getSelection() : this.h.getSelection();
        if (null != e.anchorNode && "undefined" != typeof e.anchorNode.offsetParent && "gdwr-modal-dialog" === e.anchorNode.offsetParent.className) return c;
        for (var g = e.anchorOffset, g = Number(g) >>> 0, k = e.anchorNode.parentNode.parentNode.parentNode.parentNode.text
            , l = window.document.getElementsByClassName("Paragraph"), m, d = 0, n = l.length; d < n; d++) {
          var p = l[d];
          if (p.contains(e.anchorNode)) {
            window.console.log("result found our paragraph" + p.nodeValue);
            m = p;
            break
          }
        }
        var q = window.document.createTreeWalker(m, window.NodeFilter.SHOW_TEXT, null, !1)
          , s, a = !1
          , b = !0
          , d = "";
        s = q.nextNode();
        do s.isSameNode(e.anchorNode) ? (a = !0, d += s.nodeValue) : (d += s.nodeValue, s = q.nextNode(), b = !1); while (!a);
        var t;
        b || (t = d.length, g = t - (e.anchorNode.text.length - g));
        var v = k.slice(0, g)
          .search(/\S+$/)
          , C = k.slice(g)
          .search(/\s/);
        if (0 > C) return k.slice(v); - 1 === v && (v = g);
        window.selectedWord = k.slice(v, C + g);
        c.push(window.selectedWord)
      }
      return c
    } catch (K) {
      z.R.a()
        .b(K)
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
      var b;
      b = null == this.h ? this.Fd.getSelection() : this.h.getSelection();
      var c = b.anchorNode
        , d = b.anchorOffset
        , d = Number(d) >>> 0;
      if ("Hyperlink" == b.anchorNode.parentNode.parentNode.parentNode.className) var e = b.anchorNode.parentNode.parentNode.parentNode.parentNode.text
        , g = b.anchorNode.parentNode.parentNode.parentNode.parentNode.childNodes
        , k = c.parentNode.parentNode.parentNode;
      else e = b.anchorNode.parentNode.parentNode.parentNode.parentNode.text, g = b.anchorNode.parentNode.parentNode.parentNode.childNodes, k = c.parentNode.parentNode;
      window.NodeList.prototype.forEach = Array.prototype.forEach;
      var l = "";
      try {
        g.forEach(function (a) {
          a.isSameNode(k) && null.Vs;
          l = "LineBreakBlob BlobObject" != a.className ? l + a.innerText : l + " "
        })
      } catch (m) {}
      d += l.length;
      b = "";
      a.context = e.substring(0, d)
        .substr(0, d)
        .replace(this.Vb, "")
        .split(/(.*?[.?!])/g);
      for (var n = a.context.length; n--;) 1 >
        a.context[n].length && a.context.splice(n, 1);
      for (var p = e.substr(0)
          .replace(this.Vb, "")
          .split(/(.*?[.?!])/g), n = p.length; n--;) "" === p[n] && p.splice(n, 1);
      0 < a.context.length ? (p = p[a.context.length - 1], a.context = a.context[a.context.length - 1], b = p.substr(a.context.length), -1 !== ".?!".indexOf(a.context.substr(a.context.length - 2), 1) && (a.spaceatstart = !0)) : p = b = a.context = "";
      var q = a.context.substr(a.context.length - 1);
      0 != a.context.length && " " != q && -1 === ".?!".indexOf(q) || z.R.a()
        .Mb();
      var s = a.context.split(/\s/g);
      a.word =
        p.split(/\s/g)[s.length - 1];
      var t = s[s.length - 1].replace(this.Vb, "");
      a.cursorindex = t.length;
      if (0 == a.context.length || 0 == b.trim()
        .replace(/[\u200B]/g, "")
        .length) a.spaceatend = !0;
      0 == a.cursorindex ? (a.selectLeft = 0, a.selectRight = 0, a.spaceatend = !0, a.word = "") : (a.selectLeft = t.replace(this.Vb, "")
        .length, a.selectRight = a.word.replace(this.Vb, "")
        .length - a.selectLeft);
      var v = a.word.match(this.cd)
        , C = a.word
        , K = C.indexOf(v);
      0 < K && (a.prepunc = C.substring(0, K)
        .replace(/[\u200B]/g, ""), C = C.substring(K)
        .replace(/[\u200B]/g, ""));
      var C = C.split("")
        .reverse()
        .join("")
        , v = C.match(this.cd)
        , V = C.indexOf(v);
      0 < V && (a.postpunc = C.substring(0, V), a.postpunc = a.postpunc.split("")
        .reverse()
        .join("")
        .replace(/[\u200B]/g, ""), C = C.substring(V));
      window.textNode = null;
      a.context = "" + a.context;
      a.context = a.context.replace(this.Vb, "")
        .replace(/\u00a0/g, " ");
      return a
    } catch (D) {
      z.R.a()
        .b(D)
    }
  };
  z.f.be = function () {
    try {
      this.Wc();
      var a = {};
      a.Ta = z.Ee(z.J(this.r)[0]);
      if (!(1 > a.Ta.length)) {
        for (var b = z.I(this.ac), c = b.innerHTML.split("<thrwgdns:thctag")[0], d = c.split(">"), e = [], g = 0; g < d.length; g++) {
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
      for (var b = window.document.getElementsByClassName("cui-ctl cui-fa-sm"), c, d = 0, e = b.length; d < e; d++) "floatiefontBackgroundColor-Small" == b[d].id && (c = b[d]);
      var g = window.document.createEvent("MouseEvents");
      g.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      c.dispatchEvent(g);
      for (var k = window.document.getElementsByClassName("cui-colorpicker-cell-a"), l, m, n, p, d = 0, e = k.length; d < e; d++) "Yellow" == k[d].title && (l = k[d]), "Green" == k[d].title && (m = k[d]), "Turquoise" == k[d].title &&
        (n = k[d]), "Pink" == k[d].title && (p = k[d]);
      "#FFFF00" == a ? (g = window.document.createEvent("MouseEvents"), g.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.dispatchEvent(g)) : "#00FFFF" == a ? (g = window.document.createEvent("MouseEvents"), g.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(g)) : "#ADFF2F" == a ? (g = window.document.createEvent("MouseEvents"), g.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), m.dispatchEvent(g)) : "#FF00FF" == a && (g =
        window.document.createEvent("MouseEvents"), g.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), p.dispatchEvent(g))
    } catch (q) {
      z.R.a()
        .b(q)
    }
  };
  z.f.rc = function () {
    try {
      for (var a = window.document.getElementsByClassName("cui-ctl cui-fa-sm"), b, c = 0, d = a.length; c < d; c++) "floatiefontBackgroundColor-Small" == a[c].id && (b = a[c]);
      var e = window.document.createEvent("MouseEvents");
      e.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      b.dispatchEvent(e);
      for (var g = window.document.getElementsByClassName("cui-ctl-menu cui-ctl-menu16 "), k, c = 0, d = g.length; c < d; c++) "none-Menu16" == g[c].id && (k = g[c]);
      e = window.document.createEvent("MouseEvents");
      e.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      k.dispatchEvent(e)
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.f.Ni = function (a) {
    var b = window.getSelection();
    zk(a);
    var c = b.anchorNode.parentNode
      , d = window.document.createEventObject ? window.document.createEventObject() : window.document.createEvent("Events");
    d.initEvent && d.initEvent("keypress", !0, !0);
    d.keyCode = 77;
    d.which = 77;
    c.dispatchEvent ? c.dispatchEvent(d) : c.fireEvent("onkeydown", d);
    for (c = 0; c < a.length; c++) b.modify("extend", "forward", "character");
    b.collapseToEnd()
  };
  z.f.Wc = function () {
    try {
      var a = this.ue = 0
        , b = ""
        , c = RegExp("​", "g")
        , d = window.document.getElementsByClassName("Selected");
      if (0 < d.length) {
        this.Ah = !0;
        for (var e = this.h.getSelection(), g = e.toString(), k = g.split(/\s/), l = 0; l < d.length; l++) {
          var m = d[l]
            , n = m.innerText
            , p = n.charAt(0);
          ha && p.match(/[^0-9a-zA-Z'-']/i) && (a++, ha = !1);
          var q = n.slice(-1);
          q.match(/[^0-9a-zA-Z'-']/i) || (ha = !0);
          var s = n.split(/\s/);
          for (window.j = 0; window.j < s.length; window.j++) {
            var t = s[window.j].replace(c, "");
            (" " === t || "" === t) && window.j < s.length -
              1 ? b = 0 > a ? b + " " : b + ("<span class='" + this.H + " " + this.Ba + "'>&nbsp;</span>") : 0 < t.trim()
              .length && (window.j < s.length - 1 ? (b += "<span class='" + this.H + " " + this.r + "-" + a + "'>" + t + "</span><span class='" + this.H + " " + this.Ba + "'> </span>", a++) : (b += "<span class='" + this.H + " " + this.r + "-" + a + "'>" + t + "</span>", ha || a++))
          }
          if (0 < b.length) {
            var v = window.document.createElement("th-span")
              , C;
            for (C in m.firstChild.attributes) v.setAttribute(m.firstChild.attributes[C].name, m.firstChild.attributes[C].value);
            m.innerText = "";
            m.appendChild(v);
            v.innerHTML = b;
            b = ""
          }
        }
        for (var K = d.length, l = 0; l < K; l++) m = d[0], m.className = "texthelp"
      } else {
        this.Ah = !1;
        c = RegExp("​", "g");
        e = this.h.getSelection();
        e.collapseToStart();
        e.modify("extend", "backward", "sentence");
        e.collapseToStart();
        e.modify("extend", "forward", "sentence");
        for (var g = e.toString(), k = g.split(/\s/), V = e.getRangeAt(0)
            .cloneRange(), D = window.document.createElement("th-span"); 0 < g.length;) this.ue += 1, e.collapseToStart(), e.modify("extend", "backward", "sentence"), g = e.toString();
        D.appendChild(V.extractContents());
        for (var d = D.childNodes, ha = !1, l = 0; l < d.length; l++) {
          m = d[l];
          3 === m.nodeType && (m = m.parentNode);
          n = m.innerText;
          p = n.charAt(0);
          ha && p.match(/[^0-9a-zA-Z'-']/i) && (a++, ha = !1);
          q = n.slice(-1);
          q.match(/[^0-9a-zA-Z'-']/i) || (ha = !0);
          s = n.split(/\s/);
          for (window.j = 0; window.j < s.length; window.j++) t = s[window.j].replace(c, ""), (" " === t || "" === t) && window.j < s.length - 1 ? b = 0 > a ? b + " " : b + ("<span class='" + this.H + " " + this.Ba + "'>&nbsp;</span>") : 0 < t.trim()
            .length && (window.j < s.length - 1 ?
              (b += "<span class='" + this.H + " " + this.r + "-" + a + "'>" + t + "</span><span class='" + this.H + " " + this.Ba + "'> </span>", a++) : (b += "<span class='" + this.H + " " + this.r + "-" + a + "'>" + t + "</span>", ha || a++));
          if (0 < b.length) {
            if (1 === d.length) {
              if ('"' === m.innerText) m.innerHTML = b;
              else {
                var ya = m.innerHTML.indexOf(">" + m.innerText) + 1;
                if (1 > ya) m.innerHTML = b;
                else {
                  var Da = ya + m.innerText.length
                    , Oa = m.innerHTML.substr(0, ya) + b + m.innerHTML.substr(Da);
                  m.innerHTML = Oa
                }
              }
              break
            } else '"' === m.innerText ?
              m.innerHTML = b : (ya = m.innerHTML.indexOf(">" + m.innerText) + 1, 1 > ya ? m.innerHTML = b : (Da = ya + m.innerText.length, Oa = m.innerHTML.substr(0, ya) + b + m.innerHTML.substr(Da), m.innerHTML = Oa));
            b = ""
          }
        }
        V.insertNode(D);
        e.collapseToStart()
      }
      this.za = window.document.getElementsByClassName(this.H);
      return k
    } catch ($c) {
      z.R.a()
        .b($c)
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
  z.f.xd = function (a) {
    try {
      if (0 < window.document.getElementsByClassName("Selected")
        .length) {
        var b = this.h.getSelection()
          .toString()
          .split(/\s/);
        a(b)
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Ai = function (a) {
    try {
      if (0 < window.document.getElementsByClassName("Selected")
        .length) var b = this.h.getSelection()
        .toString()
        .split(/\s/)
        .join(" ")
        .replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, ".<br /><br />$2")
        .split("|")
        , c = {
          documentTitle: window.document.title
          , html: b.join(" ")
        };
      else c = {
        documentTitle: window.document.title
        , html: ""
      };
      a(c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.ce = function () {
    try {
      return this.Wc()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Ge = function () {};
  z.f.Pc = function (a, b, c, d) {
    try {
      a = {
        documentHighlights: {}
      };
      a.documentHighlights.highlights = [];
      a.documentHighlights.title = window.document.getElementById("BreadcrumbTitle")
        .text;
      a.documentHighlights.url = "";
      a.documentHighlights.docTitle = d;
      var e = window.document.getElementById("WACViewPanel")
        , g = window.document.getElementById("WACViewPanel_EditingElement_WrappingDiv");
      if (1 === b) {
        var k = [].slice.call(e.querySelectorAll('[class*="TextRun"][style*="background-color: rgb"]'));
        b = []; - 1 < c.indexOf("#FFFF00") &&
          b.push("rgb(255, 255, 0)"); - 1 < c.indexOf("#00FFFF") && b.push("rgb(0, 255, 255)"); - 1 < c.indexOf("#ADFF2F") && b.push("rgb(0, 255, 0)"); - 1 < c.indexOf("#FF00FF") && b.push("rgb(255, 0, 255)");
        for (t = 0; t < k.length; ++t)
          if (!g.contains(k[t].parentNode)) {
            var l = b.indexOf(k[t].style.backgroundColor);
            if (-1 < l) {
              var m = {};
              m.text = k[t].text;
              m.color = c[l];
              a.documentHighlights.highlights.push(m)
            }
          }
      } else {
        var n = [].slice.call(e.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(255, 0, 255)"]'))
          , p = [].slice.call(e.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(255, 255, 0)"]'))
          , q = [].slice.call(e.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(0, 255, 0)"]'))
          , s = [].slice.call(e.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(0, 255, 255)"]'))
          , t = 0;
        if (-1 < c.indexOf("#FF00FF"))
          for (t = 0; t < n.length; ++t) m = {
              text: ""
              , color: "#FF00FF"
            }, g.contains(n[t].parentNode) || (m.text = "rgb(255, 0, 255)" === (n[t].nextSibling ? n[t].nextSibling : n[t].parentNode.nextSibling)
              .style.backgroundColor ? window.magentaParagraphText + n[t].text : m.text + n[t].text), 0 < m.text.length &&
            a.documentHighlights.highlights.push(m);
        t = 0;
        if (-1 < c.indexOf("#FFFF00"))
          for (t = 0; t < p.length; ++t) m = {
            text: ""
            , color: "#FFFF00"
          }, g.contains(p[t].parentNode) || (m.text += p[t].text), 0 < m.text.length && a.documentHighlights.highlights.push(m);
        t = 0;
        if (-1 < c.indexOf("#ADFF2F"))
          for (t = 0; t < q.length; ++t) m = {
            text: ""
            , color: "#ADFF2F"
          }, g.contains(q[t].parentNode) || (m.text += q[t].text), 0 < m.text.length && a.documentHighlights.highlights.push(m);
        t = 0;
        if (-1 < c.indexOf("#00FFFF"))
          for (t = 0; t < s.length; ++t) m = {
              text: ""
              , color: "#00FFFF"
            }, g.contains(s[t].parentNode) ||
            (m.text += s[t].text), 0 < m.text.length && a.documentHighlights.highlights.push(m)
      }
      this.rk = window.textHelp.webreaderapi.EventBusSingleton.getInst()
        .subscribe("onCollectHighlightsWeb", this.jl, this);
      window.postMessage({
        method: "collectHighlightsWeb"
        , type: "1757FROM_PAGERW4G"
        , documentHighlights: a.documentHighlights
      }, "*")
    } catch (v) {
      z.R.a()
        .b(v)
    }
  };
  z.f.jl = function () {
    try {
      window.textHelp.webreaderapi.EventBusSingleton.getInst()
        .unsubscribe(this.rk)
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.Bf = function (a, b, c) {
    try {
      b = [];
      var d = window.document.getElementById("WACViewPanel");
      d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb"]');
      for (var e = [].slice.call(d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(255, 0, 255)"]')), g = [].slice.call(d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(255, 255, 0)"]')), k = [].slice.call(d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(0, 255, 0)"]')), l = [].slice.call(d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(0, 255, 255)"]'))
          , m = window.document.getElementById("WACViewPanel_EditingElement_WrappingDiv"), d = 0, n = "", d = 0; d < e.length; ++d)
        if (!m.contains(e[d].parentNode)) {
          var p;
          p = e[d].nextSibling ? e[d].nextSibling : e[d].parentNode.nextSibling;
          if ("rgb(255, 0, 255)" === p.style.backgroundColor) n += e[d].text;
          else {
            n += e[d].text;
            if (0 < n.length) {
              var q;
              q = 0 > n.indexOf(" ") ? n : n.substr(0, n.indexOf(" "));
              0 > b.indexOf(q) && b.push(q)
            }
            n = ""
          }
        }
      d = 0;
      e = "";
      for (d = 0; d < g.length; ++d) m.contains(g[d].parentNode) || (p = g[d].nextSibling ? g[d].nextSibling : g[d].parentNode.nextSibling
        , "rgb(255, 255, 0)" === p.style.backgroundColor ? e += g[d].text : (e += g[d].text, 0 < e.length && (q = 0 > e.indexOf(" ") ? e : e.substr(0, e.indexOf(" ")), 0 > b.indexOf(q) && b.push(q)), e = ""));
      d = 0;
      g = "";
      for (d = 0; d < k.length; ++d) m.contains(k[d].parentNode) || (p = k[d].nextSibling ? k[d].nextSibling : k[d].parentNode.nextSibling, "rgb(0, 255, 0)" === p.style.backgroundColor ? g += k[d].text : (g += k[d].text, 0 < g.length && (q = 0 > g.indexOf(" ") ? g : g.substr(0, g.indexOf(" ")), 0 > b.indexOf(q) && b.push(q)), g = ""));
      d = 0;
      k = "";
      for (d = 0; d < l.length; ++d) m.contains(l[d].parentNode) ||
        (p = l[d].nextSibling ? l[d].nextSibling : l[d].parentNode.nextSibling, "rgb(0, 255, 255)" === p.style.backgroundColor ? k += l[d].text : (k += l[d].text, 0 < k.length && (q = 0 > k.indexOf(" ") ? k : k.substr(0, k.indexOf(" ")), 0 > b.indexOf(q) && b.push(q)), k = ""));
      this.xg(a, b, c)
    } catch (s) {
      z.R.a()
        .b(s)
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
          , g = (0, window.parseInt)(g, 10);
        d.y += g / 2;
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
      if (0 < a)
        for (var b = window.document.getElementsByClassName("thMSWord-" + ((0, window.parseInt)(a) - 1)), c = 0; c < b.length; c++) z.R.a()
          .ta(b[c], "thHighlighted");
      b = window.document.getElementsByClassName("thMSWord-" + a);
      this.we(this.za[a], this.h);
      for (a = 0; a < b.length; a++) z.R.a()
        .X(b[a], "thHighlighted")
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
      if (this.Ah) {
        if (window.document.createEvent) {
          var b = window.document.createEvent("MouseEvents");
          b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
          b ? this.Ma.dispatchEvent(b) : this.Ma.click && this.Ma.click()
        }
        if (window.document.createEvent) {
          var c = window.document.createEvent("MouseEvents");
          c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
          c ? this.fa.dispatchEvent(c) : this.Ma.click && this.Ma.click()
        }
        return null
      }
      var d = z.T.a()
        .v()
        .speechoptions.continousreading;
      if (-1 < window.document.URL.indexOf("onenote.officeapps.live.com")) {
        d = !1;
        c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("dblclick", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        c ? this.fa.dispatchEvent(c) : this.fa.click && this.fa.click();
        var e = window.document.createEvent("MouseEvents");
        e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        e ? this.fa.dispatchEvent(e) : this.fa.click && this.fa.click()
      }
      if (a && !d) return null;
      this.ue += 1;
      a = 0;
      var c = ""
        , g = RegExp("​", "g")
        , k = this.h.getSelection();
      if ("None" !== k.type) {
        for (d = 1; d < this.ue; ++d) k.collapseToStart(), k.modify("extend", "forward", "sentence"), k.collapseToEnd(), k.modify("extend", "forward", "sentence");
        var l, m = k.getRangeAt(0)
          , n = m.startContainer
          , p = m.endContainer
          , q = m.commonAncestorContainer
          , m = []
          , s;
        for (s = n.parentNode; s && ("TextRun" !== s.className && "Hyperlink" !== s.className || m.push(s), s != q); s = s.parentNode);
        m.reverse();
        for (s = n; s && ("TextRun" !== s.className && "Hyperlink" !== s.className || m.push(s), s != p); s = Ak(s));
        l = m
      } else l = null;
      (!l || 0 >= l.length) && 0 ==
        window.document.getElementsByTagName("th-span")
        .length && (this.ue = 1, window.document.createEvent && (b = window.document.createEvent("MouseEvents"), b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), b ? this.Ma.dispatchEvent(b) : this.Ma.click && this.Ma.click()), k = this.h.getSelection(), k.collapseToStart(), k.modify("extend", "backward", "sentence"), k.collapseToStart(), k.modify("extend", "forward", "sentence"));
      var t = k.toString();
      0 === t.length && (window.document.createEvent && (b = window.document.createEvent("MouseEvents")
        , b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), b ? this.Ma.dispatchEvent(b) : this.Ma.click && this.Ma.click()), k = this.h.getSelection(), k.collapseToStart(), k.modify("extend", "backward", "sentence"), k.collapseToStart(), k.modify("extend", "forward", "sentence"));
      var t = k.toString()
        , v = t.split(/\s/)
        , C = k.getRangeAt(0)
        .cloneRange()
        , K = window.document.createElement("th-span");
      K.appendChild(C.extractContents());
      l = K.childNodes;
      b = !1;
      for (window.i = 0; window.i < l.length; window.i++) {
        window.currentNode =
          l[window.i];
        3 === window.currentNode.nodeType && (window.currentNode = window.currentNode.parentNode);
        window.text = window.currentNode.innerText;
        var V = window.text.charAt(0);
        b && V.match(/[^0-9a-zA-Z'-']/i) && (a++, b = !1);
        window.text.slice(-1)
          .match(/[^0-9a-zA-Z'-']/i) || (b = !0);
        var D = window.text.split(/\s/);
        for (window.j = 0; window.j < D.length; window.j++) {
          var ha = D[window.j].replace(g, "");
          (" " === ha || "" === ha) && window.j < D.length - 1 ? c = 0 > a ? c + " " : c + ("<span class='" + this.H + " " + this.Ba + "'>&nbsp;</span>") : 0 <
            ha.trim()
            .length && (window.j < D.length - 1 ? (c += "<span class='" + this.H + " " + this.r + "-" + a + "'>" + ha + "</span><span class='" + this.H + " " + this.Ba + "'> </span>", a++) : (c += "<span class='" + this.H + " " + this.r + "-" + a + "'>" + ha + "</span>", b || a++))
        }
        if (0 < c.length) {
          if (1 === l.length) {
            if ('"' === window.currentNode.innerText) window.currentNode.innerHTML = c;
            else {
              var ya = window.currentNode.innerHTML.indexOf(">" + window.currentNode.innerText) + 1;
              if (1 > ya) window.currentNode.innerHTML = c;
              else {
                var Da =
                  ya + window.currentNode.innerText.length
                  , Oa = window.currentNode.innerHTML.substr(0, ya) + c + window.currentNode.innerHTML.substr(Da);
                window.currentNode.innerHTML = Oa
              }
            }
            break
          } else '"' === window.currentNode.innerText ? window.currentNode.innerHTML = c : (ya = window.currentNode.innerHTML.indexOf(">" + window.currentNode.innerText) + 1, 1 > ya ? window.currentNode.innerHTML = c : (Da = ya + window.currentNode.innerText.length, Oa = window.currentNode.innerHTML.substr(0, ya) + c + window.currentNode.innerHTML.substr(Da), window.currentNode.innerHTML =
            Oa));
          c = ""
        }
      }
      C.insertNode(K);
      k.collapseToStart();
      this.za = window.document.getElementsByClassName(this.H);
      return v
    } catch ($c) {
      z.R.a()
        .b($c)
    }
  };
  z.f.Ki = function (a) {
    var b = z.L(this.Ib);
    this.we(b, this.h);
    if (null !== b) {
      var b = z.P(b)
        , c = z.L(this.Td)
        , c = z.Rf(c, "height")
        , c = c.substr(0, c.length - 2)
        , c = (0, window.parseInt)(c, 10);
      b.y += c / 2;
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
      var d = z.J(this.r);
      z.P(d[0]);
      z.P(d[d.length - 1]);
      for (c = 0; c < d.length; c++) b.push(z.Be(d[c]));
      (0, window.setTimeout)(this.vg.bind(this), this.jg);
      (0, window.alert)("m_wordsHTML called hiliteSentenceFromElement_");
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
        , d = this.Gg(a, b);
      if (null == d && (d = this.Gg(a + 4, b), null == d)) return null;
      if (null !== d) {
        for (var e = z.J(this.kb, d), d = 0; d < e.length; d++) this.gd(e[d]);
        this.Gl(a, b)
      }
      this.ag();
      var g = z.J(this.r);
      if (0 == g.length) return c;
      z.P(g[0]);
      z.P(g[g.length - 1]);
      for (e = 0; e < g.length; e++) c.push(z.Be(g[e]));
      (0, window.setTimeout)(this.vg.bind(this), this.jg);
      (0, window.alert)("m_wordsHTML called hiliteSentenceFromPoint_");
      this.za = z.J(this.r);
      1 === this.za.length && this.qb(0);
      return c
    } catch (k) {
      z.R.a()
        .b(k)
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
      b = b.childNodes;
      for (a = 0; a < b.length; a++)
        for (var c = z.Lj(z.R.a(), b[a]), d = 0; d < c.length; d++)
          if (0 < c.length) {
            for (var e = c[d].nodeValue.split(/\s/), g = "", k = "", l = 0; l < e.length; l++) {
              var m = e[l];
              "<" === m.substr(0, 1) ? (k += "<" + this.pa + " class='" + this.H + "'>" + m + "</" + this.pa + ">", l < e.length - 1 && (k += "<" + this.pa + " class='" +
                this.H + " " + this.Ba + "'>&nbsp;</" + this.pa + ">")) : (" " === m || "" === m) && l < e.length - 1 ? k = 0 > this.le ? k + "&nbsp;" : k + ("<" + this.pa + " class='" + this.H + " " + this.Ba + "'>&nbsp;</" + this.pa + ">") : 0 < m.length && (this.le++, k += "<" + this.pa + " class='" + this.H + " " + this.r + "'>" + m + "</" + this.pa + ">", l < e.length - 1 && (k += "<" + this.pa + " class='" + this.H + " " + this.Ba + "'>&nbsp;</" + this.pa + ">"))
            }
            var g = g + k
              , n = z.ie("span");
            n.innerHTML = g;
            var p = c[d]
              , q = p.parentNode;
            q && q.replaceChild(n
              , p);
            this.le = -1
          }
    } catch (s) {
      z.R.a()
        .b(s)
    }
  };
  z.f.we = function () {};
  z.f.ha = function () {
    try {
      null == this.h && (this.h = window);
      this.h.getSelection();
      this.dk();
      var a = z.J(this.H);
      if (0 !== a.length)
        for (var b = a[0].parentNode; null !== a;) {
          b.innerHTML = z.Ee(b);
          a = z.J(this.H);
          if (0 === a.length) {
            var c = window.document.getElementsByTagName("th-span");
            if (0 == c.length) break;
            this.fa = c[0].parentElement.getAttribute("paraid");
            null == this.fa && (this.fa = c[0].parentElement.parentElement.parentElement.getAttribute("paraid")); - 1 < window.document.URL.indexOf("onenote.officeapps") && (this.fa = c[0].parentElement);
            for (var d = window.document.getElementsByTagName("P"), e = window.document.getElementsByTagName("P")
                .length, a = 0; a < e; ++a)
              if (d[a].getAttribute("paraid") === this.fa) {
                this.Ma = d[a + 2];
                this.fa = d[a + 1];
                break
              }
            if ("undefined" === typeof this.Ma) {
              if (window.document.createEvent) {
                var g = window.document.createEvent("MouseEvents");
                g.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                g ? this.fa.dispatchEvent(g) : this.fa.click && this.fa.click()
              }
              for (var k = window.document.getElementsByClassName("cui-ctl cui-fa-sm")
                  , l, d = 0, m = k.length; d < m; d++) "fontBackgroundColor-Small" == k[d].id && (l = k[d]);
              var n = window.document.createEvent("MouseEvents");
              n.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
              l.dispatchEvent(n);
              for (var p = window.document.getElementsByClassName("cui-ctl-menu cui-ctl-menu16 "), q, d = 0, m = p.length; d < m; d++) "none-Menu16" == p[d].id && (q = p[d]);
              n = window.document.createEvent("MouseEvents");
              n.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
              q.dispatchEvent(n)
            } else if (window.document.createEvent &&
              null != this.Ma && (n = window.document.createEvent("MouseEvents"), n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n ? this.Ma.dispatchEvent(n) : this.Ma.click && this.Ma.click()), window.document.createEvent && (g = window.document.createEvent("MouseEvents"), g.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g ? this.fa.dispatchEvent(g) : this.fa.click && this.fa.click(), -1 < window.document.URL.indexOf("onenote.officeapps.live.com"))) {
              window.continueNextSentence = window.continueNextSentence = !1;
              g = window.document.createEvent("MouseEvents");
              g.initMouseEvent("dblclick", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
              g ? this.fa.dispatchEvent(g) : this.fa.click && this.fa.click();
              var s = window.document.createEvent("MouseEvents");
              s.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
              s ? this.fa.dispatchEvent(s) : this.fa.click && this.fa.click()
            }
            break
          }
          b = a[0].parentNode
        }
    } catch (t) {
      z.R.a()
        .b(t)
    }
  };
  z.f.fi = function (a) {
    try {
      var b = [];
      this.te = 0;
      for (var c = z.J(this.H), d = 0; d < c.length; d++) {
        var e = z.X(c[d], this.h)
          , g = z.eg(c[d]);
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
        for (d = 0; d < b.length; d++) b[d].parentNode !== k && (k.innerHTML = a + k.innerHTML, a = "", k = b[d].parentNode), c = z.Ee(b[d]), a += c, z.re(b[d]);
        0 == k.childNodes.length ?
          a = c : 3 == k.lastChild.nodeType && (a += k.lastChild.textContent);
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
        var e = z.X(c[d], this.h);
        e.x += 2;
        if (e.x >= a.x) b.push(c[d]), this.ya = this.ok(c[d]), this.tb = z.X(c[d], this.ya)
          .x;
        else {
          for (; this.I(c[d], this.Ba);) b.push(c[d]), d--;
          d = -1
        }
      }
      if (0 !== b.length) {
        a = "";
        b.reverse();
        c = b;
        for (d = b.length - 1; 0 <= d; d--) b[d].parentNode !== c && (c.innerHTML += a, a = "", c = b[d].parentNode), a = z.Ee(b[d]) + a, z.re(b[d]);
        z.Ee(c.innerHTML);
        c.innerHTML += a
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
      var c = window.document.elementFromPoint(a, b)
        , d = z.M(c, this.ig)
        , e = z.J("kix-lineview", d);
      if (0 == e.length) return null;
      for (var g = e[0], c = null, d = 1; d < e.length; d++) {
        c = z.P(e[d]);
        if (c.y > b) return g;
        g = e[d]
      }
      return e[e.length - 1]
    } catch (k) {
      z.R.a()
        .b(k)
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
          for (m = a; 0 <= m; m--)
            if (!z.Kj(l, z.Be(c[m])))
              for (var n in this.fb) - 1 !== c[m].innerText.search(this.fb[n]) &&
                (e = m, m = -1);
          if (-1 < e) {
            if (c.length - 1 === e) this.ck(z.M(c[e], this.ea));
            else {
              var p = z.X(c[e + 1], this.h);
              this.fi(p)
            }
            return
          }
        }
        null === d && (d = z.M(b, this.ea));
        this.Je(d.previousSibling)
      }
    } catch (q) {
      z.R.a()
        .b(q)
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
        for (m = a; m < c.length; m++)
          if (!z.Kj(l, z.Be(c[m])))
            for (var n in this.fb) - 1 !== c[m].innerText.search(this.fb[n]) &&
              (e = m, m = c.length); - 1 === e && null === d.nextSibling && (e = c.length - 1);
        e === c.length - 1 && (this.ya = d);
        if (-1 < e) {
          if (e < c.length - 1) {
            var p = z.X(c[e + 1], this.h);
            this.ei(p)
          }
        } else null === d && (d = z.M(b, this.ea)), this.Ie(d.nextSibling)
      }
    } catch (q) {
      z.R.a()
        .b(q)
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
  z.f.ek = function (a, b) {
    try {
      var c = z.I(this.ac)
        , d = ["mousedown", !0, !0, window, 1, 0, 0, a, b, !1, !1, !1, !1, 0, null];
      this.oi(c, d);
      d[0] = "mouseup";
      this.oi(c, d)
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
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
  window.genTableFromData = function () {};
  Z.prototype.Fj = function (a, b) {
    try {
      if (a < this.bf.length && !1 === this.cf) {
        this.we(this.bf[a], this.h);
        var c = z.R.a()
          .bind(this, this.Fj);
        a += 1;
        (0, window.setTimeout)(function () {
          c(a, b)
        }, 30)
      } else this.cf = !0, this.wg(b, 0)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  Z.prototype.Kd = function (a) {
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
        "string" ===
        typeof g && (d = null, e = z.R.a()
          .Uc(), d = window.open(g, "_ntthchVc" + e), d.focus(), this.rj(g))
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  Z.prototype.wg = function (a) {
    try {
      this.zc = a, z.R.a()
        .Uc()
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.Ck = !0;
  z.f = Z.prototype;
  z.f.xg = function (a, b) {
    try {
      var c = window.textHelp.webreader.ConfigurationSingleton.getInst()
        .getConfiguration()
        , d = {};
      d.words = b;
      d.locale = c.locale;
      d.user = c.serversettings.user;
      d.translations = {};
      d.translations.docTitle = window.textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("vocab_document_title");
      d.translations.title = window.textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("vocab_title");
      d.translations.heading = window.textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("vocab_word_heading");
      d.translations.symbol = window.textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("vocab_word_symbol");
      d.translations.notes = window.textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("vocab_word_notes");
      d.translations.meaning = window.textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("vocab_word_meaning");
      d.locale = window.textHelp.webreader.UserSettingsSingleton.getInst()
        .getUserSettings()
        .language.services;
      window.postMessage({
          method: "vocabWeb"
          , type: "1757FROM_PAGERW4G"
          , payload: d
        }
        , "*")
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Mj = function (a, b) {
    try {
      var c = z.X(a, this.h)
        , d = z.X(b, this.h);
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
  z.f.Pb = function () {
    try {
      var a = window.getSelection()
        .getRangeAt(0);
      a.collapse(!1);
      window.rect = a.getClientRects()[0];
      if (-1 < window.document.URL.indexOf("onenote.officeapps.live.com")) {
        var b = window.document.getElementById("applicationWACNavigationPanel")
          .style.width.replace("px", "");
        window.x = window.rect.left - ((0, window.parseInt)(b) + 22)
      } else window.x = window.rect.left - 22;
      window.y = null !== window.document.getElementById("RibbonPinButton-Small") ? window.rect.top - 150 : window.rect.top + -60;
      return {
        x: window.x
        , y: window.y
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.u("textHelp.parsers", z.Wj);
  z.u("textHelp.parsers.MSWordOnlineParser", Z);
  Z.prototype.hiliteNextSentence = Z.prototype.ge;
  Z.prototype.hiliteWord = Z.prototype.qb;
  Z.prototype.highlightSelection = Z.prototype.Yc;
  Z.hiliteWord = Z.qb;
  Z.prototype.getUserSettings = Z.prototype.v;
  Z.prototype.getSelection = Z.prototype.getSelection;
  Z.prototype.getSelectionLocal = Z.prototype.xd;
  Z.prototype.clearHighlights = Z.prototype.rc;
  Z.prototype.getTextWithContext = Z.prototype.Jg;
  Z.prototype.updateSelection = Z.prototype.Pl;
  Z.prototype.getParserName = Z.prototype.Ob;
  Z.prototype.getBarConfigFromParser = Z.prototype.ec;
  Z.prototype.getPredictionPosition = Z.prototype.Pb;
  z.Df("MSWordOnlineParser");
})(__textHelp__);
//@ sourceURL=chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_MSWordOnlineParser.js
