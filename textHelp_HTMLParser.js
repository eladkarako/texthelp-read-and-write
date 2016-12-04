(function (z) {
  var rk = function (a) {
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
    this.of = z.R.a()
      .bind(this, this.wf);
    this.Yf = z.R.a()
      .bind(this, this.Sh);
    this.Ga = this.ma = null
  };
  var sk = function () {
    this.Ib = "rwGooglePredictionDictionaryDetails";
    this.ac = "rwGooglePredictionResponseDetails";
    window.m_webReaderElem = window.document.getElementById("webReaderModule");
    window.m_extensionPath = window.m_webReaderElem.getAttribute("data-root");
    tk(window.m_extensionPath + "assets/distiller/domdistiller.js");
    tk(window.m_extensionPath + "assets/HTMLParser/HTMLParser.js", this.vo.bind(this));
    this.Z = {};
    this.Da = null;
    var a = [];
    a.push("Web");
    a.push(window.location.href);
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "BarShown"
      , parameters: a
    }, "*")
  };
  var tk = function (a, b) {
    var c = window.document.documentElement.getElementsByTagName("body")[0];
    if (null == c || void 0 == c) c = window.document.body;
    var d = window.document.createElement("script");
    d.src = a;
    d.async = !0;
    d.onload = d.onreadystatechange = function () {
      this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d.onload = d.onreadystatechange = null, c.removeChild(d), void 0 != b && b())
    };
    c.appendChild(d)
  };
  var uk = function (a, b, c) {
    a.Z.mouseOverEvent(b, c)
  };
  var vk = function () {
    return new window.Promise(function (a) {
      window.result = window.org.chromium.distiller.DomDistiller.applyWithOptions({});
      a({
        title: window.result[1]
        , html: window.result[2][1]
      })
    })
  };
  var wk = function (a) {
    return a.Z.getPredictionCoordinates()
  };
  var xk = function (a) {
    a.Z.isEditable()
  };
  z.f = rk.prototype;
  z.f.fd = function (a) {
    null !== this.Ga && ((0, window.clearTimeout)(this.Ga), this.Ga = null);
    var b = this;
    this.Ga = (0, window.setTimeout)(function () {
      b.of(a)
    }, 300)
  };
  z.f.play = function () {
    z.S.a()
      .l("onWRPlay", !0)
  };
  z.f.vh = function (a) {
    var b = this;
    uk(this.da, a, function () {
      b.play()
    }); - 1 == a.target.className.indexOf("texthelp-toolbarbutton") && -1 == a.target.parentNode.className.indexOf("texthelp-toolbarbutton") && -1 == a.target.className.indexOf("th-RW4GC-toolbar") && -1 == a.target.parentNode.className.indexOf("th-RW4GC-toolbar") || this.da.Z.clearHoverSpeak()
  };
  z.f.ed = function (a) {
    if (a.ctrlKey && 47 < a.keyCode && 58 > a.keyCode) {
      var b = [];
      b.push(a);
      z.S.a()
        .l("onPredictionKeyDownEvent", b);
      z.Mj() && (a.preventDefault(), a.stopPropagation());
      this.da.ed(a);
      if (xk(this.da)) z.S.a()
        .l("onClosePredictionWindow", []);
      else {
        a = wk(this.da);
        if (b = window.document.getElementById("rwGooglePredictionDictionaryDetails")) b.style.left = a.left, b.style.top = a.top;
        this.sa && this.Oa("")
      }
    }
  };
  z.f.Cn = function (a) {
    z.S.a()
      .l("onPredictionKeyDownEvent", a)
  };
  z.f.Oa = function () {
    null !== this.ma && ((0, window.clearTimeout)(this.ma), this.ma = null);
    this.ma = (0, window.setTimeout)(this.Yf, 0)
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
    var a = window.document.getElementById("th-RW4GC-picture-dictionary")
      , b = window.document.getElementById("th-RW4GC-translator");
    if (null != window.document.getElementById("th-RW4GC-dictionary") || null != a || null != b) a = this.da.bb(), null != a && "" != a && z.S.a()
      .l("onWordChanged", [])
  };
  z.f.wf = function (a) {
    this.da.fd(a);
    if (xk(this.da)) z.S.a()
      .l("onClosePredictionWindow", []);
    else {
      a = wk(this.da);
      var b = window.document.getElementById("rwGooglePredictionDictionaryDetails");
      b && (b.style.left = a.left, b.style.top = a.top);
      this.sa && this.Oa("")
    }
  };
  z.f.kf = function (a) {
    try {
      this.da.Z.predictionInsertText(a[0]);
      var b = z.R.pb()
        .wa();
      a = [];
      a.push("prediction insert");
      a.push(b.mg);
      a.push(b.mg.split("@")[1]);
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "SendEvent"
        , parameters: a
      }, "*")
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.lf = function (a) {
    try {
      var b = window.document.getElementById("rwGooglePredictionDictionaryDetails");
      if (!b) {
        var c = window.document.body
          , b = window.document.createElement("div");
        b.setAttribute("id", "rwGooglePredictionDictionaryDetails");
        b.className = "rwGooglePredictionDictionaryDetails";
        b.style.position = "absolute";
        c.appendChild(b);
        var d = window.document.createElement("div");
        d.setAttribute("id", "rwGooglePredictionResponseDetails");
        d.className = "rwGooglePredictionResponseDetails";
        c.appendChild(d)
      }
      this.sa = a[0];
      if (xk(this.da)) {
        var e = wk(this.da);
        b.style.left = e.left;
        b.style.top = e.top;
        this.sa && (a = [], a.push("kix-appview-editor"), this.Oa(""), z.S.a()
          .l("onOpenPredictionWindow", a))
      } else z.S.a()
        .l("onClosePredictionWindow", [])
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
  z.f.Ho = function (a) {
    a = a[0];
    this.da.Z.hoverSpeakEnabled(a);
    a || z.S.a()
      .l("onWRStop", !0)
  };
  z.Wj.yj = "HTMLParser";
  z.w(sk, z.Jj);
  z.f = sk.prototype;
  z.f.vo = function () {
    this.Z = new window.textHelp.parsers.HTMLParserAPI(!0, "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/HTMLParser/");
    var a = this.la = new rk(this);
    if (0 < window.frames.length)
      for (var b = 0; b < window.frames.length; b++) try {
        var c = z.R.a()
          .bind(a, a.fd);
        window.frames[b].document.addEventListener("mousedown", c, !0);
        var d = z.R.a()
          .bind(a, a.vh);
        window.frames[b].document.addEventListener("mousemove", d, !0);
        var e = z.R.a()
          .bind(a, a.ed);
        window.frames[b].document.addEventListener("keydown", e, !0);
        var g = z.R.a()
          .bind(a, a.wh);
        window.frames[b].document.addEventListener("mouseup", g, !0)
      } catch (k) {}
    c = z.R.a()
      .bind(a, a.fd);
    a.M.addEventListener("mousedown", c, !0);
    d = z.R.a()
      .bind(a, a.vh);
    a.M.addEventListener("mousemove", d, !0);
    e = z.R.a()
      .bind(a, a.ed);
    a.M.addEventListener("keydown", e, !0);
    g = z.R.a()
      .bind(a, a.wh);
    a.M.addEventListener("mouseup", g, !0);
    z.S.a()
      .k("onclicktospeak", a.Ho, a);
    z.S.a()
      .k("onPredictionChange", a.kf, a);
    z.S.a()
      .k("onWRPredictionStateChanged", a.lf, a)
  };
  z.f.Og = function () {
    return this.Z.hiliteSelection()
  };
  z.f.Yc = function (a) {
    this.Z.highlightSelection(a)
  };
  z.f.Ff = function () {
    return this.Z.hasSelection()
  };
  z.f.Cs = function () {
    if (!(-1 < window.location.href.indexOf(".texthelp.com/simplify/"))) {
      var a = window.textHelp.webreader.UserSettingsSingleton.getInst()
        .getUserSettings()
        .language.services;
      window.open("https://rw.texthelp.com/simplify/home/simplify?locale=" + (0, window.encodeURIComponent)(a) + "&simplify=" + window.location.href, "_newtab")
    }
  };
  z.f.bb = function () {
    return this.Z.getWord()
  };
  z.f.getSelection = function () {
    return this.Z.getSelection()
  };
  z.f.qb = function (a) {
    this.Z.hiliteWord(a)
  };
  z.f.Ge = function () {
    this.Z.clearBrowserSelection()
  };
  z.f.Pc = function (a, b, c) {
    a = this.Z.collectHighlights(b, c);
    b = window.textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("ch_documentTitle");
    a = {
      highlights: a
      , title: window.document.getElementsByTagName("title")[0].innerHTML
      , url: window.location.href
      , docTitle: b
    };
    this.rk = window.textHelp.webreaderapi.EventBusSingleton.getInst()
      .subscribe("onCollectHighlightsWeb", this.jl, this);
    window.postMessage({
      method: "collectHighlightsWeb"
      , type: "1757FROM_PAGERW4G"
      , documentHighlights: a
    }, "*")
  };
  z.f.jl = function () {
    try {
      window.textHelp.webreaderapi.EventBusSingleton.getInst()
        .unsubscribe(this.rk), this.Us.focus()
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.stop = function () {
    this.Z.stop()
  };
  z.f.ge = function () {
    var a = window.textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.continousreading;
    return this.Z.hiliteNextSentence(a)
  };
  z.f.rc = function () {
    this.Z.clearHighlights()
  };
  z.f.Bf = function (a, b, c) {
    a = this.Z.collectVocabs(a, b, c);
    b = window.textHelp.webreader.ConfigurationSingleton.getInst()
      .getConfiguration();
    c = {};
    c.words = a;
    c.locale = b.locale;
    c.user = b.serversettings.user;
    c.translations = {};
    c.translations.docTitle = window.textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("vocab_document_title");
    c.translations.title = window.textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("vocab_title");
    c.translations.heading = window.textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("vocab_word_heading");
    c.translations.symbol = window.textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("vocab_word_symbol");
    c.translations.notes = window.textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("vocab_word_notes");
    c.translations.meaning = window.textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("vocab_word_meaning");
    c.locale = window.textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .language.services;
    this.Zo = window.textHelp.webreaderapi.EventBusSingleton.getInst()
      .subscribe("onVocabWeb"
        , this.rr, this);
    window.postMessage({
      method: "vocabWeb"
      , type: "1757FROM_PAGERW4G"
      , payload: c
    }, "*")
  };
  z.f.rr = function () {
    try {
      window.textHelp.webreaderapi.EventBusSingleton.getInst()
        .unsubscribe(this.Zo)
    } catch (a) {
      window.console.error(a.stack)
    }
  };
  z.f.xd = function (a) {
    a(this.Z.getSelectionLocal())
  };
  z.f.Ai = function (a) {
    vk()
      .then(this.dp)
      .then(function (b) {
        window.title = b.title;
        window.html = b.html;
        a({
          documentTitle: window.title
          , html: window.html
        })
      })
  };
  z.f.dp = function (a) {
    var b = window.document.createElement("body");
    b.innerHTML = a.html;
    for (var c = b.querySelectorAll("img"), d = 0; d < c.length; d++) {
      var e = c[d];
      "https:" !== e.getAttribute("src")
        .substr(0, 6)
        .toLowerCase() && b.removeChild(e)
    }
    return Object.assign({}, a, {
      html: b.innerHTML
    })
  };
  z.f.ha = function () {
    this.Z.clearSelection_()
  };
  z.f.ye = function () {
    throw Error("Not implemented");
  };
  z.f.xe = function () {
    throw Error("Not implemented");
  };
  z.f.xd = function (a) {
    a(this.Z.getSelectionLocal())
  };
  z.f.Ni = function (a) {
    this.Z.predictionInsertText(a)
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
      a.context = this.Z.getPredictionSentence()
    } catch (b) {}
    return a
  };
  z.f.wh = function (a) {
    this.Z.onMouseUp(a)
  };
  z.f.fd = function (a) {
    this.Z.onMouseDown(a)
  };
  z.f.ed = function (a) {
    this.Z.onKeyDown(a)
  };
  z.f.vh = function (a) {
    this.Z.onMouseOver(a)
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
      var a = this.Z.prediction.getPositionOfPopup()
        , b = {
          x: 10
          , y: 10
        };
      b.x = (0, window.parseInt)(a.left.substring(0, a.left.length - 2)) - 32;
      b.y = (0, window.parseInt)(a.top.substring(0, a.top.length - 2)) + 2;
      return b
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.u("textHelp.parsers.HTMLParser", sk);
  sk.prototype.getParserName = sk.prototype.Ob;
  sk.prototype.getBarConfigFromParser = sk.prototype.ec;
  sk.prototype.setParserConfig = sk.prototype.Hh;
  sk.prototype.getPredictionPosition = sk.prototype.Pb;
  z.Df("HTMLParser");
})(__textHelp__);
//@ sourceURL=chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_HTMLParser.js
