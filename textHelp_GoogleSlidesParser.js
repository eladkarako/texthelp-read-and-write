(function (z) {
  var Jk = function (a) {
    this.M = z.L("docs-texteventtarget-iframe")
      .contentDocument;
    this.se = z.L("docs-texteventtarget-iframe")
      .contentWindow;
    this.h = window;
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
    this.A.parentId = "panel-right";
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
    this.of = z.R.a()
      .bind(this, this.wf);
    this.ps = z.R.a()
      .bind(this, this.Ps);
    this.Si = this.Ga = this.ma = null
  };
  var $ = function () {
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
    this.r = "thGBWord";
    this.Ba = "thSpace";
    this.Da = null;
    this.le = -1;
    this.Pf = {};
    this.Pf.x = -1;
    this.Pf.y = -1;
    this.te = 0;
    this.gc = z.fj.a()
      .Ab();
    this.fb = this.gc.sentences.wordEnds;
    this.za = [];
    this.Rf = 0;
    this.bf = null;
    this.Ah = !1;
    this.cd = /\w/i;
    this.Ma = this.fa =
      null;
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
    this.la = new Jk(this);
    window.addEventListener("message", this.df, !1);
    window.console.log("***WARNING: Location to put Stylesheet Requires Update. ***");
    var a = z.R.a()
      .$()
      , b = this.Fd.createElement("link");
    b.rel = "stylesheet";
    b.type = "text/css";
    b.href = a + "assets/thFixedToolbar.css";
    this.Fd.body.appendChild(b);
    window.console.log("about to attach events");
    a = this.la;
    b = z.R.a()
      .bind(a, a.uh);
    a.M.addEventListener("keyup", b, !0);
    b = z.R.a()
      .bind(a, a.th);
    a.M.addEventListener("keypress", b, !0);
    b = z.R.a()
      .bind(a, a.ed);
    a.M.addEventListener("keydown", b, !0);
    b = z.R.a()
      .bind(a, a.fd);
    window.document.addEventListener("mousedown", b, !0);
    z.S.a()
      .k("onPredictionChange", a.kf, a);
    z.S.a()
      .k("onWRPredictionStateChanged", a.lf, a);
    z.S.a()
      .k("onSpeechRecognitionChange"
        , a.yh, a);
    this.on = this.nj = this.dh = this.Sf = null
  };
  var Kk = function () {
    try {
      for (var a = window.document.getElementById("pages"), b = null, c = 0; c < a.childElementCount; c++)
        if ("none" != a.childNodes[c].style.display) {
          b = a.childNodes[c];
          break
        }
      var d = b.getElementsByTagName("rect");
      if (0 != d.length) {
        for (b = 0; b < d.length - 1;) {
          var e = d[b].outerHTML;
          if (-1 != e.indexOf("docs-text-ui-cursor-blink")) {
            Lk = d[b];
            Mk = d[b].getAttribute("y");
            Nk = d[b].getAttribute("x");
            break
          }
          for (c = 0; c <= a.childNodes.length - 1; c++) a.childNodes[c].contains(Lk) && "none" == a.childNodes[c].style.display && (Nk = Mk = Lk =
            null);
          if (d[b].hasAttribute("fill") && "#000" == d[b].getAttribute("fill")) {
            Lk = d[b];
            Mk = d[b].getAttribute("y");
            Nk = d[b].getAttribute("x");
            break
          }
          b++
        }
        for (var g = window.document.getElementById("speakernotes-workspace")
            .getElementsByTagName("rect"), a = 0; a < g.length; a++)
          if (e = g[a].outerHTML, -1 != e.indexOf("docs-text-ui-cursor-blink")) {
            Lk = g[a];
            Mk = g[a].getAttribute("y");
            Nk = g[a].getAttribute("x");
            break
          }
      }
    } catch (k) {}
  };
  var Ok = function () {
    try {
      Kk(), (0, window.setTimeout)(Ok, 100)
    } catch (a) {
      window.console.log("error FindFocusedCaretElement"), (0, window.setTimeout)(Ok, 100)
    }
  };
  var Pk = function () {
    var a = null;
    try {
      var b = Lk.parentNode.getElementsByTagName("g")
    } catch (c) {
      window.console.log(c)
    }
    for (var d = null, e = !1, g = 1; g < b.length; g++) try {
      var e = b[g].hasAttribute("transform")
        , k = -10;
      0 == e && (k = 0);
      if (1 == e) {
        var l = b[g].getAttribute("transform")
          , m = b[g].getAttribute("id")
          , n = b[g].getAttribute("class")
          , p = null
          , q = !1;
        null == m & null == n ? (p = l.split(" "), q = !0) : p = l.split(",");
        var s = p[1].replace(")", "")
          , s = s.trim()
          , k = (0, window.parseInt)(s);
        if (1 == q && 1 == b[g].parentNode.hasAttribute("transform")) var p = null
          , p = b[g].parentNode.getAttribute("transform")
          .split(",")
          , t = p[1].replace(")", "")
          , t = t.trim()
          , k = k + (0, window.parseInt)(t)
      }
      Mk = Math.round(Mk);
      if (k > Mk + 5 && (k = g - 1, "sketchy-text-content-decoration" == b[g - 1].getAttribute("class") && (k = g - 2), 0 != b[k].getElementsByTagName("text")
          .length)) {
        d = 1 == b[k].hasAttribute("id") ? b[k].childNodes[0] : b[k];
        break
      }
    } catch (v) {
      window.console.log(v)
    }
    null == d && 1 == e && 0 != b[b.length - 1].getElementsByTagName("text")
      .length && (d = 1 == b[b.length - 1].hasAttribute("id") ? b[b.length - 1].childNodes[0] : b[b.length -
        1]);
    if (null == d)
      for (d = b[1], g = 1; g < b.length; g++) b[g].getBBox();
    try {
      for (var C = d.getElementsByTagName("text"), g = 0; g < C.length; g++)(0, window.parseInt)(C[g].getAttribute("x")) <= (0, window.parseInt)(Nk) && (a = C[g])
    } catch (K) {
      window.console.log(K)
    }
    window.console.log(a.innerHTML);
    return a
  };
  var Qk = function (a, b) {
    try {
      var c = []
        , d = [];
      if (null == b)
        if (null != a.Sf) {
          null == Lk ? d = a.on : 0 != window.document.querySelectorAll('rect[fill="#000"]')
            .length ? (d = Lk.parentNode.parentNode.parentNode.getElementsByTagName("text"), a.la.Zc(), a.la.qa("ESC"), a.la.qa("ArrowLeft"), Lk = null) : d = Lk.previousSibling.getElementsByTagName("text");
          a.dh > d.length - 1 && (a.dh = d.length);
          for (var e = 0, g = a.Sf; g <= a.dh; g++) c[e] = d[g], e++;
          a.nj = c
        } else c = Lk.previousSibling.getElementsByTagName("text");
      else c = b, a.nj = c;
      d = -1;
      for (g = 0; g < c.length; g++) c[g].getBBox()
        .height >
        d && (d = c[g].getBBox()
          .height);
      for (g = 0; g < c.length; g++) {
        d = -1;
        for (e = g; e < c.length; e++) c[e].getBBox()
          .height > d && (d = c[e].getBBox()
            .height);
        var k = c[g].getAttribute("x")
          , k = k.replace("px", "")
          , k = (0, window.parseInt)(k)
          , e = -1 * d
          , l = d
          , m = c[g].getBBox()
          .width;
        if (g != c.length - 1) {
          var n = c[g + 1].getAttribute("x")
            , n = n.replace("px", "")
            , n = (0, window.parseInt)(n)
            , p = c[g].getAttribute("x")
            , p = p.replace("px", "")
            , p = (0, window.parseInt)(p);
          c[g + 1].getBBox()
            .x > c[g].getBBox()
            .x && (m = n - p)
        }
        var q = l
          , s = window.document.createElement("g");
        s.setAttribute("class"
          , "sketchy-text-background-inner TH-Word-BackHighlightTest");
        s.setAttribute("transform", "translate(0 " + q + ")");
        var t = window.document.createElement("rect");
        t.setAttribute("x", k);
        t.setAttribute("y", e);
        t.setAttribute("width", 1);
        t.setAttribute("height", l);
        t.setAttribute("fill", "#ffff00");
        t.setAttribute("fill-opacity", "1");
        s.appendChild(t);
        c[g].parentNode.parentNode.previousSibling.appendChild(s);
        var v = c[g].parentNode.parentNode.previousSibling;
        v.innerHTML += " ";
        var C = c[g].parentNode.parentNode.previousSibling.getBBox()
          .height;
        C >= l + 10 && (window.console.log("taller para " + l), v.innerHTML += " ", l = C);
        for (var K = window.document.getElementsByClassName("sketchy-text-background-inner TH-Word-BackHighlightTest"), V = 0; 0 < K.length && 5E3 > V;) K[K.length - 1].remove(), V++;
        var D = window.document.createElement("g");
        D.setAttribute("class", "sketchy-text-background-inner TH-Word-BackHighlight");
        D.setAttribute("transform", "translate(0 " + q + ")");
        window.colorRectEl = window.document.createElement("rect");
        window.colorRectEl.setAttribute("x", k);
        window.colorRectEl.setAttribute("y"
          , e);
        window.colorRectEl.setAttribute("width", m + 1);
        window.colorRectEl.setAttribute("height", l);
        1 != c.length && (window.colorRectEl.setAttribute("fill", "#ffff00"), window.colorRectEl.setAttribute("fill-opacity", "1"));
        D.appendChild(window.colorRectEl);
        c[g].parentNode.parentNode.previousSibling.appendChild(D);
        v = c[g].parentNode.parentNode.previousSibling;
        v.innerHTML += " "
      }
    } catch (ha) {
      window.console.log(ha)
    }
  };
  var Rk = function () {
    for (var a = [], b = 0, c = window.document.getElementById("pages"), d = null, e = 0; e <= c.childNodes.length - 1; e++)
      if (-1 == c.childNodes[e].getAttribute("style")
        .indexOf("display: none")) {
        d = c.childNodes[e];
        break
      }
    var g = d.querySelectorAll("[transform]");
    window.yCoordArray = [];
    for (e = 0; e < g.length - 1; e++) c = g[e].getAttribute("transform"), -1 != c.indexOf("matrix") && 0 < g[e].getElementsByTagName("text")
      .length && (a[b] = g[e], window.console.log("thematrix :" + c), b++, d = "", d = c.substr(c.lastIndexOf(",") + 1), d = d.replace(")"
        , ""), d = (0, window.parseInt)(d), window.console.log(d), window.yCoordArray[b] = d);
    window.yCoordArray.sort(function (a, b) {
      return a - b
    });
    for (var b = [], k = g = 0; k <= window.yCoordArray.length - 1; k++)
      for (e = 0; e <= a.length - 1; e++)
        if (c = a[e].getAttribute("transform"), d = "", d = c.substr(c.lastIndexOf(",") + 1), d = d.replace(")", ""), d = (0, window.parseInt)(d), d == window.yCoordArray[k]) {
          c = !1;
          for (d = 0; d <= b.length - 1; d++) b[d] == a[e] && (c = !0);
          c || (b[g] = a[e], g++)
        }
    return b
  };
  z.Bk = function (a, b, c, d) {
    z.Ck ? (z.Ck = !1, z.Dk(a, b, c, d)) : window.setTimeout(z.Bk, 100, a, b, c, d)
  };
  z.Dk = function () {};
  z.Fk = function () {};
  z.Ik = function () {};
  z.f = Jk.prototype;
  z.f.uh = function (a) {
    null !== this.Si && ((0, window.clearTimeout)(this.Si), this.Si = null);
    var b = this;
    this.Si = (0, window.setTimeout)(function () {
      b.ps(a)
    }, 1500)
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
  z.f.Ps = function (a) {
    this.sa && this.Oa(a);
    this.Ke()
  };
  z.f.wf = function () {
    this.sa && this.Oa("");
    this.Ke()
  };
  z.f.Oa = function (a) {
    window.console.log("textHelp.parsers.GoogleBooksEventsManager.prototype.updatePrediction");
    this.ma = null;
    if (this.sa) {
      void 0 == a && (a = "");
      var b = this.da.Pe(a);
      "string" == typeof a && (6 < a.length || " " == a.substr(a.length - 1, 1)) && (b.context = a);
      if (null == b) z.S.a()
        .l("onClosePredictionWindow", []);
      else {
        a = z.T.a()
          .v()
          .prediction.results;
        var c = z.T.a()
          .v()
          .language.services;
        this.B.na++;
        999 < this.B.na && (this.B.na = 0);
        var d = '"' + z.R.a()
          .ld(b.context) + '","' + a + '","' + c + '"'
          , e = '{ "parent":"panel-right", "position":"' +
          this.da.Ib + '","addSpace":true,"seq":"' + this.B.na + '"}';
        z.R.a()
          .Ih(this.B.na);
        this.B.mc = b;
        e = z.ld(e);
        d = [];
        d[0] = (0, window.encodeURIComponent)(z.R.a()
          .ld(b.context));
        d[1] = a;
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
  z.f.fd = function (a) {
    window.console.log("GoogleSlidesEventsManager.prototype.onMouseDown" + a);
    null !== this.Ga && ((0, window.clearTimeout)(this.Ga), this.Ga = null);
    var b = this;
    window.console.log("ActiveElement: " + window.document.activeElement);
    "thprediction-word" != a.target.className && (this.Ga = (0, window.setTimeout)(function () {
      b.of(a)
    }, 600))
  };
  z.f.Ke = function () {
    z.S.a()
      .l("onWordChanged", [])
  };
  z.f.kf = function (a) {
    try {
      var b = this.B.mc
        , c = b.prepunc + a[0] + b.postpunc;
      this.eg(c + " ");
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
      }, "*")
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.lf = function (a) {
    try {
      if (this.sa = a[0]) a = [], a.push("panel-right"), this.Oa(""), z.S.a()
        .l("onOpenPredictionWindow", a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.yh = function (a) {
    try {
      window.console.log("speech recog " + a);
      var b = (a + " ")
        .split("")
        , c = window.document.getElementsByClassName("docs-texteventtarget-iframe")
        , d = c[0].contentDocument
        , e = c[0].contentDocument.createEventObject ? c[0].contentDocument.createEventObject() : c[0].contentDocument.createEvent("Events");
      e.initEvent && e.initEvent("keypress", !0, !0);
      for (a = 0; a < b.length; a++) e.keyCode = b[a].charCodeAt(0), e.which = b[a].charCodeAt(0), d.dispatchEvent ? d.dispatchEvent(e) : d.fireEvent("onkeydown", e)
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.Zc = function () {
    this.O.keydown = this.ob("keydown", this.M);
    this.O.keypress = this.ob("keypress", this.M);
    this.O.mousedown = this.ob("mousedown", window.document);
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
  z.f.qa = function (a, b) {
    window.console.log("fireKeyDownEvent");
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
      c.keyCode =
        90;
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
    case "AppleAlt+ArrowLeft":
      c.altKey = !0;
      c.keyCode = 37;
      c.which = 37;
      break;
    case "CTRL+ArrowLeft":
      c.ctrlKey = !0;
      c.keyCode = 37;
      c.which = 37;
      break;
    case "AppleAlt+Shift+ArrowRight":
      c.altKey = !0;
      c.keyCode = 39;
      c.shiftKey = !0;
      c.which = 39;
      break;
    case "CTRL+Shift+ArrowRight":
      c.ctrlKey = !0;
      c.keyCode = 39;
      c.shiftKey = !0;
      c.which = 39;
      break;
    case "AppleAlt+Shift+ArrowLeft":
      c.altKey = !0;
      c.keyCode = 37;
      c.shiftKey = !0;
      c.which = 37;
      break;
    case "CTRL+Shift+ArrowLeft":
      c.ctrlKey = !0;
      c.keyCode = 37;
      c.shiftKey = !0;
      c.which = 37;
      break;
    case "ESC":
      c.keyCode = 27, c.which = 27;
    default:
      return
    }
    for (var d = 0; d < b; d++)
      for (var e in this.O.keydown) this.O.keydown[e].tc(c)
  };
  z.f.eg = function (a) {
    window.getSelection();
    var b = this.B.mc.context
      , c = a.split("")
      , d = window.document.getElementsByClassName("docs-texteventtarget-iframe")
      , e = d[0].contentDocument
      , d = d[0].contentDocument.createEventObject ? d[0].contentDocument.createEventObject() : d[0].contentDocument.createEvent("Events");
    d.initEvent && d.initEvent("keypress", !0, !0);
    if (" " != b.substr(b.length - 1, 1)) {
      this.Zc();
      var g = 0 <= window.navigator.platform.toUpperCase()
        .indexOf("MAC")
        , k = "";
      try {
        Pk();
        for (var l = Pk()
            .parentNode.children, m = null
            , n = !1, p = 0; p < l.length; p++)(0, window.parseInt)(l[p].getAttribute("x")) > (0, window.parseInt)(Nk) - 2 && (null == m && (m = l[p]), k = k + l[p].innerHTML + " ", n = !0);
        0 == n && (k = l[l.length - 1].innerHTML)
      } catch (q) {
        window.console.log(q), k = ""
      }
      "" != k ? 1 == g ? (this.qa("AppleAlt+ArrowLeft"), this.qa("AppleAlt+Shift+ArrowRight")) : (this.qa("CTRL+ArrowLeft"), this.qa("CTRL+Shift+ArrowRight")) : 1 == g ? this.qa("AppleAlt+Shift+ArrowLeft") : this.qa("CTRL+Shift+ArrowLeft")
    }
    for (l = 0; l < c.length; l++) d.keyCode = c[l].charCodeAt(0), d.which = c[l].charCodeAt(0)
      , e.dispatchEvent ? e.dispatchEvent(d) : e.fireEvent("onkeydown", d);
    try {
      " " != b.substr(b.length - 1, 1) && "" != b ? (b = b.substring(0, b.lastIndexOf(" ")), this.Oa(b + " " + a)) : this.Oa(b + a)
    } catch (s) {
      window.console.log(s)
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
  var Lk, Mk, Nk;
  z.Wj.yj = "GoogleSlidesParser";
  z.Gk = "";
  Lk = null;
  Mk = null;
  Nk = null;
  z.w($, z.Jj);
  (0, window.setTimeout)(Ok, 2250);
  z.f = $.prototype;
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
  z.f.Og = function () {
    try {
      var a = z.R.a()
        .$()
        , b = this.Fd.createElement("link");
      b.rel = "stylesheet";
      b.type = "text/css";
      b.href = a + "assets/thFixedToolbar.css";
      this.Fd.body.appendChild(b);
      var c = this.ce();
      Qk(this);
      z.R.a();
      for (var d = this.gc.sentences.sentenceEndExclusions, a = 0; a < c.length - 1; a++)
        if (!z.Kj(d, c[a]))
          for (var e in this.fb) - 1 !== c[a].search(this.fb[e]) && (a = c.length);
      return c
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.Ff = function () {
    return !0
  };
  z.f.bb = function () {
    try {
      var a = []
        , b = Pk();
      if (-1 == b.innerHTML.indexOf("tspan")) a.push(Pk()
        .innerHTML);
      else {
        for (var c = b.getElementsByTagName("tspan"), b = "", d = 0; d <= c.length - 1; d++) b += c[d].innerHTML, b = b.replace(/[\u200B-\u200D\uFEFF]/g, "");
        a.push(b)
      }
      return a
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Pe = function () {
    Kk();
    var a = ""
      , b = ""
      , c = 0;
    try {
      Pk();
      for (var d = Pk()
          .parentNode.children, e = !1, e = !0, g = null, k = 0; k < d.length; k++)(0, window.parseInt)(d[k].getAttribute("x")) < (0, window.parseInt)(Nk) && (null == g && (g = d[k]), a = a + d[k].innerHTML + " ", b = d[k].innerHTML, c = k);
      if (1 == e)
        for (var l = d[0].parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("text"), k = 0; k < l.length; k++)
          if (g == l[k]) {
            0 < k && (a = l[k - 2].innerHTML + " " + l[k - 1].innerHTML + " " + a);
            break
          }
      Math.round((0, window.parseInt)(Nk)) > Math.round((0, window.parseInt)(d[c].getAttribute("x")) +
        (0, window.parseInt)(d[c].getBBox()
          .width)) + 1 || (a = a.substring(0, a.length - 1))
    } catch (m) {
      window.console.log(m)
    }
    try {
      var n = Lk.getBoundingClientRect();
      null != n && 0 != n.left && (this.Pf.x = n.left + n.width - 22, this.Pf.y = n.top + n.height)
    } catch (p) {
      window.console.log(p)
    }
    window.console.log("context: " + a + "|");
    c = [];
    c.context = a;
    c.word = b;
    c.cursorindex = "";
    c.spaceatstart = !1;
    c.spaceatend = !1;
    c.prepunc = "";
    c.postpunc = "";
    c.selectRight = 0;
    c.selectLeft = 0;
    c.prechar = "";
    c.currentchar = "";
    c.postchar = "";
    return c
  };
  z.f.be = function () {
    try {
      window.console.log("getSelectionRange");
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
      window.console.log("highlightSelection color " + a);
      var b = window.document.getElementById("textColorButton")
        , c = window.document.createEvent("MouseEvents");
      c.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      b.dispatchEvent(c);
      var d = window.document.getElementById("textBackgroundColorButton")
        , c = window.document.createEvent("MouseEvents");
      c.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      d.dispatchEvent(c);
      if ("#FFFF00" == a) {
        var e = window.document.getElementById("jfk-palette-cell-313")
          , c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        e.dispatchEvent(c);
        c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        e.dispatchEvent(c)
      } else if ("#00FFFF" == a) {
        var g = window.document.getElementById("jfk-palette-cell-315")
          , c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        g.dispatchEvent(c);
        c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        g.dispatchEvent(c)
      } else if ("#ADFF2F" == a) {
        var k = window.document.getElementById("jfk-palette-cell-314")
          , c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        k.dispatchEvent(c);
        c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        k.dispatchEvent(c)
      } else if ("#FF00FF" == a) {
        var l = window.document.getElementById("jfk-palette-cell-319")
          , c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        l.dispatchEvent(c);
        c = window.document.createEvent("MouseEvents");
        c.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        l.dispatchEvent(c)
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.rc = function () {
    try {
      var a = window.document.getElementById("textColorButton")
        , b = window.document.createEvent("MouseEvents");
      b.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      a.dispatchEvent(b);
      var c = window.document.getElementById("textBackgroundColorButton")
        , b = window.document.createEvent("MouseEvents");
      b.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      c.dispatchEvent(b);
      for (var d = window.document.getElementsByClassName("goog-menuitem-label"), a = null, e = 0; e <= d.length -
        1; e++)
        if ("Transparent" == d[e].innerText && c.parentNode == d[e].parentNode.parentNode.parentNode) {
          a = d[e].parentNode.parentNode;
          break
        }
      b = window.document.createEvent("MouseEvents");
      b.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      a.dispatchEvent(b);
      b = window.document.createEvent("MouseEvents");
      b.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      a.dispatchEvent(b);
      b = window.document.createEvent("MouseEvents");
      b.initMouseEvent("mousedown", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      a.dispatchEvent(b);
      b = window.document.createEvent("MouseEvents");
      b.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
      a.dispatchEvent(b)
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.bp = function (a) {
    try {
      window.console.log("getCaretPosition function");
      var b = window.document.getElementsByTagName("rect")
        , c = window.document.getElementById("pages");
      if (0 != b.length)
        for (var d = 0; d < b.length - 1;) {
          if (-1 != b[d].outerHTML.indexOf("docs-text-ui-cursor-blink")) {
            Lk = b[d];
            Mk = b[d].getAttribute("y");
            Nk = b[d].getAttribute("x");
            break
          }
          for (var e = 0; e <= c.childNodes.length - 1; e++) c.childNodes[e].contains(Lk) && "none" == c.childNodes[e].style.display && (Nk = Mk = Lk = null);
          if (b[d].hasAttribute("fill") && "#000" == b[d].getAttribute("fill")) {
            Lk =
              b[d];
            Mk = b[d].getAttribute("y");
            Nk = b[d].getAttribute("x");
            break
          }
          d++
        }
      a([]);
      return window.words
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.getSelection = function (a) {
    try {
      window.console.log("getSelection");
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
  z.f.Wc = function () {
    try {
      window.console.log("getSelectionOnly_");
      Kk();
      var a = null
        , b = null
        , c = null;
      try {
        for (var a = Pk(), c = 0 != window.document.querySelectorAll('rect[fill="#000"]')
            .length ? Lk.parentNode.parentNode.parentNode.getElementsByTagName("text") : Lk.previousSibling.getElementsByTagName("text"), d = 0; d < c.length; d++)
          if (c[d] == a) {
            b = d;
            break
          }
      } catch (e) {
        var g = Rk()[0].getElementsByTagName("text");
        this.on = g;
        a = g[0];
        c = g;
        b = 0
      }
      g = "";
      if (-1 == c[b].innerHTML.indexOf("tspan")) g = c[b].innerHTML;
      else {
        for (var k = a.getElementsByTagName("tspan")
            , l = "", m = 0; m <= k.length - 1; m++) l += k[m].innerHTML;
        g = l
      }
      this.Sf = -1;
      var a = null
        , n = !1;
      0 < b && c[b].parentNode.parentNode.parentNode.parentNode != c[b - 1].parentNode.parentNode.parentNode.parentNode && (n = !0);
      if (1 != n)
        for (d = b - 1; - 1 < d; d--) {
          var p = "";
          if (-1 == c[d].innerHTML.indexOf("tspan")) p = c[d].innerHTML;
          else {
            k = c[d].getElementsByTagName("tspan");
            l = "";
            for (m = 0; m <= k.length - 1; m++) l += k[m].innerHTML;
            p = l
          }
          if (-1 == p.indexOf(".") && -1 == p.indexOf("!") && -1 == p.indexOf("?")) {
            if (null != a && c[d].parentNode.parentNode.parentNode.parentNode !=
              a) break;
            g = p + " " + g;
            this.Sf = d;
            a = c[d].parentNode.parentNode.parentNode.parentNode
          } else break
        }
      if (-1 == this.Sf || 1 == n) this.Sf = b;
      a = null;
      n = !1;
      c.length - 1 >= b && (c.length - 1 == b ? n = !0 : c[b].parentNode.parentNode.parentNode.parentNode != c[b + 1].parentNode.parentNode.parentNode.parentNode && (n = !0));
      p = "";
      if (-1 == c[b].innerHTML.indexOf("tspan")) p = c[b].innerHTML;
      else {
        k = c[b].getElementsByTagName("tspan");
        l = "";
        for (m = 0; m <= k.length - 1; m++) l += k[m].innerHTML;
        p = l
      }
      if (-1 != p.indexOf(".") || -1 != p.indexOf("!") || -1 != p.indexOf("?") || 1 == n) this.dh =
        b;
      else
        for (d = b + 1; d < c.length && (null == a || c[d].parentNode.parentNode.parentNode.parentNode == a); d++) {
          p = "";
          if (-1 == c[d].innerHTML.indexOf("tspan")) p = c[d].innerHTML;
          else {
            k = c[d].getElementsByTagName("tspan");
            l = "";
            for (m = 0; m <= k.length - 1; m++) l += k[m].innerHTML;
            p = l
          }
          g = g + " " + p;
          this.dh = d;
          a = c[d].parentNode.parentNode.parentNode.parentNode;
          if (-1 != p.indexOf(".") || -1 != p.indexOf("!") || -1 != p.indexOf("?")) break
        }
      return window.lineOfWords = g.split(" ")
    } catch (q) {
      z.R.a()
        .b(q)
    }
  };
  z.f.getSelection = function (a) {
    try {
      window.console.log("getSelection");
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
      window.console.log("getSelectionLocal function");
      var b = [];
      if (0 != window.document.querySelectorAll('rect[fill="#000"]')
        .length)
        for (var c = window.document.querySelectorAll('rect[fill="#000"]'), d = 0; d < c.length; d++)
          for (var e = c[d].parentNode.getElementsByTagName("text"), g = 0; g < e.length; g++) {
            var k = e[g].getBBox()
              .x + 1
              , l = (0, window.parseInt)(c[d].getAttribute("x"))
              , m = e[g].getBBox()
              .x + e[g].getBBox()
              .width
              , n = (0, window.parseInt)(c[d].getAttribute("x")) + (0, window.parseInt)(c[d].getAttribute("width"));
            if (m >= l && m <= n || k >= l && k <= n)
              if (-1 == e[g].innerHTML.indexOf("tspan")) b.push(e[g].innerHTML);
              else {
                for (var p = e[g].getElementsByTagName("tspan"), q = "", s = 0; s <= p.length - 1; s++) q += p[s].innerHTML;
                b.push(q)
              }
          } else b = this.bb();
      a(b);
      return b
    } catch (t) {
      z.R.a()
        .b(t)
    }
  };
  z.f.Ai = function (a) {
    try {
      window.console.log("getSelectionLocal function");
      var b = [];
      if (0 != window.document.querySelectorAll('rect[fill="#000"]')
        .length) {
        for (var c = window.document.querySelectorAll('rect[fill="#000"]'), d = 0; d < c.length; d++)
          for (var e = c[d].parentNode.getElementsByTagName("text"), g = 0; g < e.length; g++) {
            var k = e[g].getBBox()
              .x + 1
              , l = (0, window.parseInt)(c[d].getAttribute("x"))
              , m = e[g].getBBox()
              .x + e[g].getBBox()
              .width
              , n = (0, window.parseInt)(c[d].getAttribute("x")) + (0, window.parseInt)(c[d].getAttribute("width"));
            if (m >= l && m <= n || k >= l && k <= n)
              if (-1 == e[g].innerHTML.indexOf("tspan")) b.push(e[g].innerHTML);
              else {
                for (var p = e[g].getElementsByTagName("tspan"), q = "", s = 0; s <= p.length - 1; s++) q += p[s].innerHTML;
                b.push(q)
              }
          }
        var t = b.join(" ")
          .replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, ".<br /><br />$2")
          .split("|")
          , v = {
            documentTitle: window.document.title.replace(" - Google Slides", "")
            , html: t.join(" ")
          }
      } else v = {
        documentTitle: window.document.title
        , html: ""
      };
      a(v)
    } catch (C) {
      z.R.a()
        .b(C)
    }
  };
  z.f.ce = function () {
    try {
      return window.console.log("getSelection_"), this.Wc()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Ge = function () {};
  z.f.Pc = function (a, b, c, d) {
    try {
      window.console.log("collectHighlights " + d), this.wg(a, b, c, d)
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Bf = function (a, b, c) {
    try {
      window.console.log("collectVocabs " + c);
      b = [];
      var d = window.document.getElementById("WACViewPanel");
      d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb"]');
      for (var e = [].slice.call(d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(255, 0, 255)"]')), g = [].slice.call(d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(255, 255, 0)"]')), k = [].slice.call(d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(0, 255, 0)"]'))
          , l = [].slice.call(d.querySelectorAll('[class*="TextRun"][style*="background-color: rgb(0, 255, 255)"]')), m = window.document.getElementById("WACViewPanel_EditingElement_WrappingDiv"), d = 0, n = "", d = 0; d < e.length; ++d)
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
      e =
        "";
      for (d = 0; d < g.length; ++d) m.contains(g[d].parentNode) || (p = g[d].nextSibling ? g[d].nextSibling : g[d].parentNode.nextSibling, "rgb(255, 255, 0)" === p.style.backgroundColor ? e += g[d].text : (e += g[d].text, 0 < e.length && (q = 0 > e.indexOf(" ") ? e : e.substr(0, e.indexOf(" ")), 0 > b.indexOf(q) && b.push(q)), e = ""));
      d = 0;
      g = "";
      for (d = 0; d < k.length; ++d) m.contains(k[d].parentNode) || (p = k[d].nextSibling ? k[d].nextSibling : k[d].parentNode.nextSibling, "rgb(0, 255, 0)" === p.style.backgroundColor ? g += k[d].text : (g += k[d].text, 0 < g.length && (q = 0 > g.indexOf(" ") ?
        g : g.substr(0, g.indexOf(" ")), 0 > b.indexOf(q) && b.push(q)), g = ""));
      d = 0;
      k = "";
      for (d = 0; d < l.length; ++d) m.contains(l[d].parentNode) || (p = l[d].nextSibling ? l[d].nextSibling : l[d].parentNode.nextSibling, "rgb(0, 255, 255)" === p.style.backgroundColor ? k += l[d].text : (k += l[d].text, 0 < k.length && (q = 0 > k.indexOf(" ") ? k : k.substr(0, k.indexOf(" ")), 0 > b.indexOf(q) && b.push(q)), k = ""));
      this.xg(a, b, c)
    } catch (s) {
      z.R.a()
        .b(s)
    }
  };
  z.f.Jg = function () {};
  z.f.qb = function (a) {
    try {
      var b = null
        , c = window.document.getElementById("TH-Word-highlight");
      null != c && c.remove();
      var d = window.document.getElementById("TH-Word-highlightFont");
      if (null != d) {
        if (-1 == d.innerHTML.indexOf("tspan")) {
          var e = d.getAttribute("style")
            , e = e.replace("fill:white", "");
          d.setAttribute("style", e)
        } else
          for (var g = d.getElementsByTagName("tspan"), k = 0; k <= g.length - 1; k++) e = g[k].getAttribute("style"), e = e.replace("fill:white", ""), g[k].setAttribute("style", e);
        d.removeAttribute("id")
      }
      var b = this.nj
        , l = b[a].getAttribute("style")
        , m = b[a].getAttribute("x")
        , m = m.replace("px", "")
        , m = (0, window.parseInt)(m)
        , n = b[a].parentNode.parentNode.previousSibling.getBBox()
        .height
        , c = -1 * n
        , p = b[a].getBBox()
        .width
        , q = window.document.createElement("g");
      q.setAttribute("class", "sketchy-text-background-inner TH-Word-HighlightTest");
      q.setAttribute("transform", "translate(0 " + n + ")");
      var s = window.document.createElement("rect");
      s.setAttribute("x", m);
      s.setAttribute("y", c);
      s.setAttribute("width", 1);
      s.setAttribute("height", n);
      s.setAttribute("fill", "#ffff00");
      s.setAttribute("fill-opacity", "1");
      q.appendChild(s);
      b[a].parentNode.parentNode.previousSibling.appendChild(q);
      var t = b[a].parentNode.parentNode.previousSibling;
      t.innerHTML += " ";
      for (var v = window.document.getElementsByClassName("sketchy-text-background-inner TH-Word-HighlightTest"), q = 0; 0 < v.length && 5E3 > q;) v[v.length - 1].remove(), q++;
      if (-1 == b[a].innerHTML.indexOf("tspan")) b[a].setAttribute("style", l + ";fill:white");
      else
        for (g = b[a].getElementsByTagName("tspan"), k = 0; k <= g.length - 1; k++) l = g[k].getAttribute("style")
          , g[k].setAttribute("style", l + ";fill:white");
      b[a].setAttribute("id", "TH-Word-highlightFont");
      var C = window.document.createElement("g");
      C.setAttribute("class", "sketchy-text-background-inner");
      C.setAttribute("id", "TH-Word-highlight");
      C.setAttribute("transform", "translate(0 " + n + ")");
      window.colorRectEl = window.document.createElement("rect");
      window.colorRectEl.setAttribute("x", m);
      window.colorRectEl.setAttribute("y", c);
      window.colorRectEl.setAttribute("width", p);
      window.colorRectEl.setAttribute("height", n);
      window.colorRectEl.setAttribute("fill"
        , "#0000ff");
      window.colorRectEl.setAttribute("fill-opacity", "1");
      window.colorRectEl.setAttribute("rx", "2");
      window.colorRectEl.setAttribute("ry", "2");
      C.appendChild(window.colorRectEl);
      b[a].parentNode.parentNode.previousSibling.appendChild(C);
      t = b[a].parentNode.parentNode.previousSibling;
      t.innerHTML += " ";
      window.m_lastHighlightedWord = b[a]
    } catch (K) {
      z.R.a()
        .b(K)
    }
  };
  z.f.stop = function () {
    try {
      window.console.log("stop function"), this.ha()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ge = function (a) {
    try {
      window.console.log("hiliteNextSentence");
      if (this.Ah) return null;
      var b = z.T.a()
        .v()
        .speechoptions.continousreading;
      if (a && !b) return null;
      window.postMessage({
        command: "GBooksSelection"
        , type: "1757FROM_PAGERW4G"
        , speech: "nextSentence"
        , highlightWordIndex: -1
      }, "*");
      var c = Rk();
      a = "";
      for (var b = [], d = 0, e = null, g = null, k = null, l = 0; l <= c.length - 1; l++)
        if (1 == c[l].contains(window.m_lastHighlightedWord)) {
          var m = c[l].getElementsByTagName("text")
            , k = window.m_lastHighlightedWord == m[m.length - 1] ? c[l + 1] : c[l];
          break
        }
      for (var n = k.getElementsByTagName("text"), l = g = 0; l <= n.length - 1; l++)
        if (window.m_lastHighlightedWord == n[l]) {
          g = l;
          g++;
          break
        }
      for (l = g; l <= n.length - 1 && (null == e || n[l].parentNode.parentNode.parentNode.parentNode == e); l++) {
        c = "";
        if (-1 == n[l].innerHTML.indexOf("tspan")) c = n[l].innerHTML;
        else {
          for (var p = n[l].getElementsByTagName("tspan"), m = "", g = 0; g <= p.length - 1; g++) m += p[g].innerHTML;
          c = m
        }
        a = a + " " + c;
        b[d] = n[l];
        d++;
        e = n[l].parentNode.parentNode.parentNode.parentNode;
        if (-1 != c.indexOf(".") || -1 != c.indexOf("!") || -1 != c.indexOf("?")) break
      }
      Qk(this
        , b);
      return a.split(" ")
    } catch (q) {
      z.R.a()
        .b(q)
    }
  };
  z.f.ha = function () {
    try {
      window.console.log("clearSelection_");
      for (var a = window.document.getElementsByClassName("sketchy-text-background-inner TH-Word-BackHighlight"), b = 0; 0 < a.length && 5E3 > b;) a[a.length - 1].remove(), b++;
      var c = window.document.getElementById("TH-Word-highlight");
      null != c && c.remove();
      var d = window.document.getElementById("TH-Word-highlightFont");
      if (null != d) {
        var e = d.getAttribute("style")
          , e = e.replace("fill:white", "");
        d.setAttribute("style", e);
        d.removeAttribute("id")
      }
      this.nj = null
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.oi = function (a, b) {
    try {
      window.console.log("dispatchMouseEvent_");
      var c = window.document.createEvent("MouseEvents");
      c.initMouseEvent.apply(c, b);
      a.dispatchEvent(c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Kd = function (a) {
    try {
      if (window.console.log("onMessageResponse"), void 0 != a.source && void 0 != a.data && a.source == window && "1757FROM_BGRW4G" == a.data.type)
        if ("onGetSelection" == a.data.method) {
          var b = z.ld(a.data.payload);
          this.Kf(b)
        } else if ("GBooksSelectionReturn" === a.data.method && (0, window.alert)(a.data.In), "GBooksSelectionReturnfromBG" === a.data.method && window.console.log(a.data.In + "FROMbg"), "GBooksNextSentenceReturnfromBG" === a.data.method && window.console.log(a.data.In + "FROMbg"), "onCollectHighlights" == a.data.method) {
        var c =
          z.ld(a.data.payload);
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
        "string" === typeof g && (d = null, e = z.R.a()
          .Uc(), d = window.open(g, "_ntthchVc" + e), d.focus(), this.rj(g))
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  z.f.wg = function (a) {
    try {
      window.console.log("collectHighlights_"), this.zc = a, z.R.a()
        .Uc()
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.Ck = !0;
  $.prototype.xg = function (a, b, c) {
    try {
      var d = [];
      this.rj = a;
      var e = z.R.a()
        .Uc();
      c = c + " " + e;
      var g = new window.XMLHttpRequest;
      a = "https://webservices-us.texthelp.com/v1.11.0/vocab?json={%22u%22:%22RWOfficeApps%22,%22e%22:%229yvydZ1FQn%22,%22b%22:";
      for (var e = "", k = 0; k < b.length; k++) e = k === b.length - 1 ? e + "%22" + b[k] + "%22]}" : 0 === k ? e + "[%22" + b[k] + "%22," : e + "%22" + b[k] + "%22,";
      g.open("POST", a + e);
      g.setRequestHeader("Accept", "application/json;odata=verbose");
      g.onreadystatechange = function () {
        var a = "";
        z.Ek = [];
        if (4 == this.readyState &&
          200 == this.status && (a = this.getResponseHeader("Content-Type"), "application/json" == a.substr(0, 16))) {
          z.Hk = JSON.parse(this.response)
            .fu;
          for (var b = 0; b < z.Hk.length; b++)
            for (var e = z.Hk[b].At, g = 0; g < e.length; g++)
              for (var a = e[g].Xt, k = 0; k < a.length; k++) d.push(a[k]);
          for (a = 0; a < d.length; a++) z.Bk(d[a], z.Fk, d.length, c)
        }
      };
      g.send()
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  $.prototype.Mj = function (a, b) {
    try {
      window.console.log("sortHighlights_");
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
  $.prototype.Pb = function () {
    try {
      return {
        x: this.Pf.x
        , y: this.Pf.y
      }
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.u("textHelp.parsers", z.Wj);
  z.u("textHelp.parsers.GoogleSlidesParser", $);
  $.prototype.hiliteNextSentence = $.prototype.ge;
  $.prototype.hiliteWord = $.prototype.qb;
  $.prototype.highlightSelection = $.prototype.Yc;
  $.hiliteWord = $.qb;
  $.prototype.getUserSettings = $.prototype.v;
  $.prototype.getCaretPosition = $.prototype.bp;
  $.prototype.getSelection = $.prototype.getSelection;
  $.prototype.getSelectionLocal = $.prototype.xd;
  $.prototype.clearHighlights = $.prototype.rc;
  $.prototype.getTextWithContext = $.prototype.Jg;
  $.prototype.getParserName = $.prototype.Ob;
  $.prototype.getBarConfigFromParser = $.prototype.ec;
  $.prototype.getPredictionPosition = $.prototype.Pb;
  z.Df("GoogleSlidesParser");
})(__textHelp__);
//@ sourceURL=chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_GoogleSlidesParser.js
