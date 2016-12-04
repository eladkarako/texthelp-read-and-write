(function (z) {
  var Tl = function (a, b) {
    a.Nl = b;
    a.yb && z.we(a.yb, b)
  };
  var Ul = function (a, b) {
    z.Gc.call(this);
    this.Qg = a || 1;
    this.fg = b || z.h;
    this.$j = (0, z.ta)(this.Ks, this);
    this.Nk = (0, z.Ki)()
  };
  var Vl = function (a, b) {
    var c = 0;
    (0, z.Oc)(a, function (a, e, g) {
      b.call(void 0, a, e, g) && ++c
    }, void 0);
    return c
  };
  var Wl = function () {
    this.Xb = !1;
    this.vb = z.L("kix-thprediction-popup");
    this.lh = this.bj = null;
    this.pe = this.kh = this.mn = !1;
    this.qs = z.R.a()
      .bind(this, this.Qq);
    this.Of = this.kj = null;
    this.gh = !1;
    this.Yk = null;
    z.S.a()
      .k("onClosePredictionWindow", this.pq, this);
    z.S.a()
      .k("onOpenPredictionWindow", this.Tq, this);
    z.S.a()
      .k("onClearPredictionWindow", this.oq, this);
    z.S.a()
      .k("onPredictionKeyDownEvent", this.Xq, this)
  };
  var Xl = function (a) {
    var b = {}
      , c = window
      , d = "undefined" != typeof a.href ? a.href : String(a);
    a = b.target || a.target;
    var e = []
      , g;
    for (g in b) switch (g) {
    case "width":
    case "height":
    case "top":
    case "left":
      e.push(g + "=" + b[g]);
      break;
    case "target":
    case "noreferrer":
      break;
    default:
      e.push(g + "=" + (b[g] ? 1 : 0))
    }
    g = e.join(",");
    if (b.noreferrer) {
      if (b = c.open("", a, g)) z.B && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), b.opener = null, d = z.Fa(d), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">')
        , b.document.close()
    } else c.open(d, a, g)
  };
  var Yl = function () {
    return (0, z.Ej)("")
  };
  var Zl = function () {
    return (0, z.Ej)("")
  };
  var $l = function () {
    return (0, z.Ej)('<div><div class="thchitems"><div class="sortLabel"><span data-collecthighlights-dialog="collecthighlights_sort">Sort highlights by</span></div><select id="sortSelect" class="thSelect"><option value="0" data-collecthighlights-dialog="collecthighlights_color">color</option><option value="1" data-collecthighlights-dialog="collecthighlights_position">position</option></select><div class="thchcolors"><span data-collecthighlights-dialog="collecthighlights_to_collect">Colors to collect</span><div><div id="thYellowChk" class="thCollectChks thYellowChk goog-checkbox-checked goog-checkbox" tabindex="0"><div class="thRects thYellowRect"></div></div><br/><div id="thBlueChk" class="thCollectChks thBlueChk goog-checkbox-checked goog-checkbox" tabindex="0"><div class="thRects thBlueRect"></div></div><br/><div id="thGreenChk" class="thCollectChks thGreenChk goog-checkbox-checked goog-checkbox" tabindex="0"><div class="thRects thGreenRect"></div></div><br/><div id="thPinkChk" class="thCollectChks thPinkChk goog-checkbox-checked goog-checkbox" tabindex="0"><div class="thRects thPinkRect"></div></div><br/></div></div></div><div class="gdwr-modal-dialog-buttons gdwr-collect-dialog-buttons"/></div>')
  };
  var am = function () {
    return (0, z.Ej)('<div><div class="gdwr-voicenote-dialog-content"><script id=\'thRecordWorker\' type=\'javascript/worker\'></script><div class="round-mic-record"><div id="thRecorderPH" class="thRecorderPH"></div><canvas class="thMicLevelCanvas" width="134px" height="134px"></canvas><div class="round-mic-record-circle"><div class="round-mic-record-circle-img"></div></div></div><div class="voicenote-message-spacer"></div><div class="round-playback"><div class="round-playback-circle"><canvas class="round-playback-canvas"></canvas><div class="round-micplayback-circle-img play"></div><div class="round-countdownclock">1:00</div></div></div><span class="gdwr-dialog-title-close gdwr-voicenote-dialog-close" role="button" tabindex="0" aria-label="Close"></span><div class="gdwr-voicenote-add-button" role="button" tabindex="0" aria-label="Add voice note"><div class="gdwr-dialog-title-add gdwr-voicenote-add"></div><div class="gdwr-voicenote-add-image" data-voicenote-dialog=\'voicenote_insert\'>Insert</div></div><div class="thVNload-bar"><div class="thVNbar"></div><div class="thVNbar"></div><div class="thVNbar"></div></div></div><div>')
  };
  var bm = function () {
    return (0, z.Ej)('<div><div class="ch-notification"><div class="ch-notification-content"><div class="ch-notification-heading" data-collect-highlights-notification=\'collect_highlights_notification\'>Collecting highlights</div><div class="ch-notification-msg" data-collect-highlights-notification=\'collect_highlights_notification_text\'>A new document containing your highlights is being created.</div></div></div></div>')
  };
  var cm = function () {
    return (0, z.Ej)('<div><div class="vl-notification"><div class="vl-notification-content"><div class="vl-notification-heading" data-vocab-notification=\'vocab_notification\'>Vocabulary List</div><div class="vl-notification-msg" data-vocab-notification=\'vocab_notification_text\'>A new document containing your vocabulary list is being created.</div></div></div></div>')
  };
  var dm = function () {
    return (0, z.Ej)('<div><div class="mn-notification"><div class="mn-notification-content"><div class="mn-notification-heading">Notification</div><div class="mn-notification-msg"></div></div></div></div>')
  };
  var em = function () {
    return (0, z.Ej)('<thRWGDns:thUIPred id="kix-thprediction-popup" class="kix-thprediction-popup" style= "display: block; left: 0px; top: 0px;"><div class="kix-thPredictions"></div><div class="thPredictionArrow thPredictionArrowup" style="left: 20px; "><div class="thPredictionArrowimplBefore"></div><div class="thPredictionArrowimplAfter"></div></thRWGDns:thUIPred>')
  };
  z.qk = function () {
    return (0, z.Ej)('<thRWGDns:thVoiceNoteOverlay class="kix-thvoicenote-overlay" style= "visibility: hidden; left: 0px; top: 0px; width:0px; height:0px; background: ; position: absolute;"><div class="thVNPlayback" id="thVNPlayback" data-percent="0" data-line="4"><audio source class="thVNAudio" type="audio/wav"></audio><div class="thVNButton"><div class="thVNIcon thVNPlay"></div></div></div></thRWGDns:thVoiceNoteOverlay>')
  };
  z.dj = function (a) {
    z.Bg.call(this, a);
    z.U.a();
    z.T.a()
      .v();
    this.jj = this.Fb = this.Yb = this.Tb = null;
    this.$k = this.mj = this.sa = !1;
    this.O = {};
    this.Ym = new fm;
    this.rn = new gm;
    this.bq = new hm;
    this.dq = new im;
    this.Yp = new jm;
    this.qn = this.nh = null;
    this.Xg = !1;
    this.ij = null;
    this.fn = "";
    this.$c = null;
    z.S.a()
      .k("onBarVisibilityChanged", this.pr, this);
    z.S.a()
      .k("onWordChanged", this.Ir, this);
    z.S.a()
      .k("onPredictionChanged", this.Wq, this);
    z.S.a()
      .k("onMessagePopup", this.Lq, this);
    z.S.a()
      .k("onUILanguageChanged", this.Gc, this);
    z.S.a()
      .k("onShowDocsOAuthDialog"
        , this.dr, this);
    z.S.a()
      .k("onCollectStudySkills", this.Lr, this);
    z.S.a()
      .k("onVoiceNotes", this.cs, this);
    z.S.a()
      .k("onVocabTool", this.bs, this);
    z.S.a()
      .k("onPlay", this.Ur, this);
    z.S.a()
      .k("onStop", this.$r, this);
    z.S.a()
      .k("onPause", this.Rr, this);
    z.S.a()
      .k("onBlueHighlighter", this.Jr, this);
    z.S.a()
      .k("onPinkHighlighter", this.Tr, this);
    z.S.a()
      .k("onYellowHighlighter", this.ds, this);
    z.S.a()
      .k("onGreenHighlighter", this.Or, this);
    z.S.a()
      .k("onClear", this.Kr, this);
    z.S.a()
      .k("onHelp", this.Pr, this);
    z.S.a()
      .k("onLogo"
        , this.Qr, this);
    z.S.a()
      .k("onSpeechInput", this.Zr, this);
    z.S.a()
      .k("onPictureDictionary", this.Sr, this);
    z.S.a()
      .k("onDictionary", this.Mr, this);
    z.S.a()
      .k("onTranslator", this.as, this);
    z.S.a()
      .k("onScreenshotReader", this.Xr, this);
    z.S.a()
      .k("onScreenMasking", this.Wr, this);
    z.S.a()
      .k("onFactFinder", this.Nr, this);
    z.S.a()
      .k("onSimplify", this.Yr, this);
    z.S.a()
      .k("onPracticeReadingAloud", this.Vr, this);
    this.$p = null
  };
  var km = function () {
    this.Xb = !1;
    this.oj = z.L("thTooltip");
    this.bj = null;
    this.el = z.L("thTooltipContentId");
    this.cq = z.L("thTooltipArrow")
  };
  var lm = function () {
    this.hc = this.j = null;
    this.Xb = !1
  };
  var mm = function () {
    lm.call(this);
    this.Qk = null
  };
  var nm = function (a, b) {
    var c = z.J("authenticateFrame");
    0 != c.length && (c[c.length - 1].contentDocument.body.innerHTML = "", c[c.length - 1].contentDocument.write(b), z.F(c[c.length - 1].contentDocument, "mouseup", (0, z.ta)(a.Aq, a)))
  };
  var om = function () {};
  var pm = function (a, b) {
    if (a)
      for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
        d = b ? c.nextSibling : c.previousSibling;
        if (3 == c.nodeType) {
          var e = c.nodeValue;
          if ("" == (0, z.Vb)(e)) a.removeChild(c);
          else {
            c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
            break
          }
        } else break;
        c = d
      }
  };
  var qm = function () {};
  var rm = function (a, b, c, d, e) {
    z.oh.call(this, a, c || qm.a(), d);
    this.ib(64, !0);
    this.sj = new z.vh(null, 5);
    b && this.Gh(b);
    this.fq = null;
    this.oa = new Ul(500);
    !z.bj && !z.cj || z.A("533.17.9") || (this.Oi = !0);
    this.Io = !0;
    this.gq = e || z.Uh.a()
  };
  var sm = function (a, b, c) {
    var d = a.Ea();
    c = c ? d.n : d.Xa;
    c.call(d, b, "action", a.Ck);
    c.call(d, b, "close", a.yk);
    c.call(d, b, "highlight", a.Bk);
    c.call(d, b, "unhighlight", a.Ek)
  };
  var tm = function (a, b) {
    var c = a.Ea();
    (b ? c.n : c.Xa)
    .call(c, a.f(), "keydown", a.rp)
  };
  var um = function (a, b) {
    var c = a.f()
      , d = z.yg(b, "activedescendant")
      , d = z.ae(b)
      .getElementById(d) || b;
    if (!d.id) {
      var e = z.zg.a();
      d.id = z.Ag(e)
    }
    e = "";
    d && (e = d.id);
    z.Q(c, "activedescendant", e);
    z.Q(c, "owns", d.id)
  };
  var vm = function (a) {
    z.Gc.call(this);
    this.Ad = [];
    wm(this, a)
  };
  var wm = function (a, b) {
    b && ((0, z.Oc)(b, function (a) {
      xm(this, a, !1)
    }, a), z.cb(a.Ad, b))
  };
  var xm = function (a, b, c) {
    b && ("function" == typeof a.Pn ? a.Pn(b, c) : "function" == typeof b.Jl && b.Jl(c))
  };
  var ym = function (a, b, c, d, e) {
    rm.call(this, a, b, c, d, e || new z.Uh("listbox"));
    this.gk = this.Tc();
    this.Ik = null;
    this.Jh("listbox")
  };
  var Am = function (a, b) {
    a.Y = new vm;
    b && z.Pg(b, function (a) {
      Bm(a);
      this.Y.Ya(a)
    }, a);
    Cm(a)
  };
  var Cm = function (a) {
    a.Y && a.Ea()
      .n(a.Y, "select", a.zp)
  };
  var Dm = function (a) {
    var b = a.Qe();
    a.Ia(b ? b.Rc() : a.gk);
    var c = a.G.ja(a.f());
    c && a.u()
      .Ip(c) && (null == a.Ik && (a.Ik = z.yg(c, "label")), b = (b = b ? b.f() : null) ? z.yg(b, "label") : a.Ik, z.Q(c, "label", b), Em(a))
  };
  var Em = function (a) {
    var b = a.G;
    if (b && (b = b.ja(a.f()))) {
      var c = a.m;
      b.id || (b.id = z.Ag(z.zg.a()));
      z.wg(b, "option");
      z.Q(c, "activedescendant", b.id);
      a.Y && (c = a.Y.uk(), c = Vl(c, function (a) {
        return a instanceof z.Rh
      }), z.Q(b, "setsize", c), z.Q(b, "posinset", 1 + a.Y.zi()))
    }
  };
  var Bm = function (a) {
    a.Jh(a instanceof z.Rh ? "option" : "separator")
  };
  var Fm = function () {
    this.hc = this.j = null;
    this.Xb = !1
  };
  var fm = function () {
    lm.call(this);
    this.Hd = null;
    this.Uk = 0;
    this.pj = !1;
    this.Zk = [];
    this.gn = this.$g = this.Zg = this.Yg = this.ah = this.Xp = null;
    z.S.a()
      .k("onUILanguageChanged", this.Gc, this)
  };
  var jm = function () {
    Fm.call(this)
  };
  var hm = function () {
    this.kc = null;
    Fm.call(this)
  };
  var im = function () {
    Fm.call(this);
    this.kc = null
  };
  var gm = function () {
    lm.call(this);
    z.S.a()
      .k("onUILanguageChanged", this.Gc, this);
    this.qe = this.$e = null;
    this.re = !1;
    this.N = this.dj = null;
    this.lc = 60;
    this.lj = this.Dc = 0;
    this.Yi = !1;
    this.Xi = 0;
    this.R = null;
    this.tn = this.Sk = !1;
    this.Vg = this.me = 0;
    this.hh = !1;
    this.sb = null
  };
  var Gm = function (a) {
    try {
      var b = z.L("round-mic-record-circle");
      if (null != b) {
        var c = z.L("round-mic-record-circle-img");
        if (null != c) {
          (0, window.clearTimeout)(a.lj);
          a.lc = 60;
          var d = z.L("round-countdownclock");
          if (null !== d) {
            var e = Math.floor(a.lc / 60)
              , g = a.lc - 60 * e
              , k = e + ":" + g;
            10 > g && (k = e + ":0" + g);
            z.we(d, k)
          }
          a.qe.stop();
          a.qe.exportMonoWAV(a.Qp);
          a.N.clearRect(-300, -300, 800, 800);
          a.Ra(a.N, "#efefef", 4, 1, a.Dc);
          a.re = !1;
          a.sb.close();
          a.sb = null;
          z.R.a()
            .ta(b, "recording");
          z.R.a()
            .ta(c, "recording");
          Hm();
          var l = z.L("voicenote-message-spacer");
          z.we(l, "");
          var m = z.L("thRecorderPH");
          z.O(m, "display", "none")
        }
      }
    } catch (n) {
      z.R.a()
        .b(n)
    }
  };
  var Im = function (a) {
    try {
      var b = z.L("round-mic-record-circle");
      if (null != b) {
        var c = z.L("round-mic-record-circle-img");
        if (null != c) {
          var d = z.L("round-micplayback-circle-img");
          Jm(a);
          a.Ra(a.N, "#efefef", 4, 1, a.Dc);
          null == a.sb && (a.sb = new window.AudioContext, window.navigator.Em({
            audio: !0
          }, a.Wp, function () {}));
          a.Sk || (z.R.a()
            .X(z.L("gdwr-voicenote-add-button"), "enabled"), a.Sk = !0);
          z.R.a()
            .X(b, "recording");
          z.R.a()
            .X(c, "recording");
          z.R.a()
            .I(d, "stop") && z.R.a()
            .ta(d, "stop");
          z.R.a()
            .I(d, "play") || z.R.a()
            .X(d, "play");
          a.lj =
            (0, window.setTimeout)(a.Wm, 0);
          Km();
          var e = z.L("voicenote-message-spacer");
          z.we(e, z.U.a()
            .K("voicenote_recording"));
          var g = z.L("thRecorderPH");
          z.O(g, "display", "block")
        }
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  var Lm = function (a) {
    try {
      a.Yi = !0, a.me = 0, a.Vg = 0, a.hh = !1, a.sb = null, a.R.play(), a.Xi = (0, window.setTimeout)(a.Vm, 0)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  var Jm = function (a) {
    try {
      a.Yi = !1, a.R.pause(), a.R.currentTime = 0, a.me = 0, a.Vg = 0, a.hh = !1, a.sb = null, a.N.clearRect(-300, -300, 800, 800), a.Ra(a.N, "#efefef", 4, 1, a.Dc)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  var Hm = function () {
    try {
      var a = z.L("round-micplayback-circle-img")
        , b = z.L("round-countdownclock");
      z.O(b, "display", "none");
      z.O(a, "display", "block")
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  var Km = function () {
    try {
      var a = z.L("round-micplayback-circle-img")
        , b = z.L("round-countdownclock");
      z.O(a, "display", "none");
      z.O(b, "display", "block")
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.Vh.prototype.uk = z.ca(18, function () {
    var a = [];
    z.Pg(this, function (b) {
      a.push(b)
    });
    return a
  });
  z.Vh.prototype.Fg = z.ca(17, function () {
    return z.Ng(this)
  });
  z.Vh.prototype.Le = z.ca(16, function (a) {
    return z.Og(this, a)
  });
  z.Vh.prototype.Vd = z.ca(15, function (a, b) {
    this.zf(a, b, !0)
  });
  z.Uh.prototype.sd = z.ca(14, function (a, b) {
    return z.ve(a.f(), b)
  });
  z.Vh.prototype.sd = z.ca(13, function (a) {
    if (this.G.sd(this, a)) return !0;
    for (var b = 0, c = z.Ng(this); b < c; b++) {
      var d = z.Og(this, b);
      if ("function" == typeof d.sd && d.sd(a)) return !0
    }
    return !1
  });
  z.th.prototype.Bm = z.ca(12, function () {
    return this.Ti
  });
  z.gh.prototype.Jh = z.ca(11, function (a) {
    this.zh = a
  });
  z.ni.prototype.Jh = z.ca(10, function (a) {
    this.zh = a
  });
  z.f = z.Lf.prototype;
  z.f.Aj = z.ca(7, function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Aj()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  });
  z.f.Di = z.ca(6, function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Di()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  });
  z.f.Zh = z.ca(5, function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Zh()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  });
  z.f.Pc = z.ca(4, function (a) {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      this.t.Pc(a)
    } catch (b) {
      window.console.error(b.stack)
    }
  });
  z.f.Uf = z.ca(2, function (a, b) {
    try {
      if (a) {
        var c = z.I("thInfoRef")
          , d = z.I("thInfoLink")
          , e = z.R.a()
          .wa();
        z.R.a()
          .W("Dictionary", !1) || z.O(z.I("thDictionary"), "opacity", "0.3");
        z.R.a()
          .W("Prediction", !1) || z.O(z.I("thPrediction"), "opacity", "0.3");
        z.R.a()
          .W("SpeechInput", !1) || z.O(z.I("thSpeechInput"), "opacity", "0.3");
        z.R.a()
          .W("PictureDictionary", !1) || z.O(z.I("thPictureDictionary"), "opacity", "0.3");
        z.R.a()
          .W("FactFinder", !1) || z.O(z.I("thFactFinder"), "opacity", "0.3");
        z.R.a()
          .W("Translator", !1) || z.O(z.I("thTranslator")
            , "opacity", "0.3");
        z.R.a()
          .W("StudySkills", !1) || (z.O(z.I("thYellowStudySkills"), "opacity", "0.3"), z.O(z.I("thGreenStudySkills"), "opacity", "0.3"), z.O(z.I("thBlueStudySkills"), "opacity", "0.3"), z.O(z.I("thPinkStudySkills"), "opacity", "0.3"), z.O(z.I("thClearStudySkills"), "opacity", "0.3"), z.O(z.I("thCollectStudySkills"), "opacity", "0.3"));
        z.R.a()
          .W("Speech", !1) || (z.O(z.I("thPlay"), "opacity", "0.3"), z.O(z.I("thPause"), "opacity", "0.3"), z.O(z.I("thStop"), "opacity", "0.3"));
        z.R.a()
          .W("Vocab", !1) || z.O(z.I("thVocabTool")
            , "opacity", "0.3");
        z.R.a()
          .W("SSR", !1) || z.O(z.I("thScreenshotReader"), "opacity", "0.3");
        z.R.a()
          .W("SpeechMaker", !1) || z.O(z.I("thSpeechMaker"), "opacity", "0.3");
        z.R.a()
          .W("ScreenMasking", !1) || z.O(z.I("thScreenMasking"), "opacity", "0.3");
        window.postMessage({
          method: "thDoPopupLicenseMessage"
          , type: "1757FROM_PAGERW4G"
          , payload: e
        }, "*");
        !1 === e.Valid ? (z.we(c, e.Message), c.setAttribute("href", e.Redirect), z.O(c, "visibility", "visible"), z.O(c, "display", "block"), z.R.a()
          .X(d, "visible")) : !0 === e.Trial && (z.we(c, e.Message)
          , c.setAttribute("href", e.Redirect), z.O(c, "visibility", "visible"), z.O(c, "display", "block"), z.R.a()
          .X(d, "visible"))
      }
      null != b && (b.qc(), b.We())
    } catch (g) {
      z.R.a()
        .b(g)
    }
  });
  z.w(Ul, z.Gc);
  z.f = Ul.prototype;
  z.f.enabled = !1;
  z.f.oa = null;
  z.f.setInterval = function (a) {
    this.Qg = a;
    this.oa && this.enabled ? (this.stop(), this.start()) : this.oa && this.stop()
  };
  z.f.Ks = function () {
    if (this.enabled) {
      var a = (0, z.Ki)() - this.Nk;
      0 < a && a < .8 * this.Qg ? this.oa = this.fg.setTimeout(this.$j, this.Qg - a) : (this.oa && (this.fg.clearTimeout(this.oa), this.oa = null), this.dispatchEvent("tick"), this.enabled && (this.oa = this.fg.setTimeout(this.$j, this.Qg), this.Nk = (0, z.Ki)()))
    }
  };
  z.f.start = function () {
    this.enabled = !0;
    this.oa || (this.oa = this.fg.setTimeout(this.$j, this.Qg), this.Nk = (0, z.Ki)())
  };
  z.f.stop = function () {
    this.enabled = !1;
    this.oa && (this.fg.clearTimeout(this.oa), this.oa = null)
  };
  z.f.s = function () {
    Ul.g.s.call(this);
    this.stop();
    delete this.fg
  };
  z.f = Wl.prototype;
  z.f.Rn = function (a, b) {
    try {
      this.pe = !1;
      this.Yk = b;
      this.gh = !0;
      var c = z.T.a()
        .v()
        .prediction.results
        , d = b.length;
      c < b.length && (d = c);
      for (var e = "", g = 0; g < d; g++) {
        var k = g + 1;
        10 == k && (k = 0);
        e = null != b[g] ? e + ('<div class="thprediction"><div class="thprediction-word">' + k.toString() + ". " + b[g] + "</div></div>") : e + '<div class="thprediction"><div class="thprediction-word"></div></div>'
      }
      if (d < c)
        for (c -= d, d = 0; d < c; d++) e += '<div class="thprediction"><div class="thprediction-word"></div></div>';
      this.lh.innerHTML = e;
      this.vb.style.webkitTransform = this.vb.style.transform = "translate(" + a.x + "px, " + a.y + "px)";
      this.pe = !1
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.f.D = function (a, b) {
    try {
      if (this.kh = this.pe = !1, this.Xb !== a) {
        if (!this.mn) {
          var c = z.Hi(em);
          z.L(b)
            .appendChild(c);
          this.vb = z.L("kix-thprediction-popup");
          this.bj = null;
          this.lh = z.L("kix-thPredictions");
          var d = z.R.a()
            .bind(this, this.Pq);
          z.F(this.vb, "mouseover", d);
          var e = z.R.a()
            .bind(this, this.Nq);
          z.F(this.vb, "mousemove", e);
          var g = z.R.a()
            .bind(this, this.Mq);
          z.F(this.vb, "mousedown", g);
          this.mn = !0
        }
        a ? (z.O(this.vb, "display", "block"), z.R.a()
          .Il(!0)) : (z.O(this.vb, "display", "none"), z.R.a()
          .Il(!1));
        this.gh = !1;
        this.Xb = a
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  z.f.Pq = function (a) {
    this.pe = !1;
    this.gh ? (null !== this.kj && (0, window.clearTimeout)(this.kj), this.kh = !0, this.Of = a, this.kj = (0, window.setTimeout)(this.qs, 300), this.gh = !1) : (0, window.clearTimeout)(this.kj)
  };
  z.f.Mq = function (a) {
    a.stopPropagation();
    a.preventDefault();
    if (!this.pe) {
      this.pe = !0;
      this.kh = !1;
      var b = "";
      if ("thprediction-word" == this.Of.target.className) b = a.target.innerText.substr(3);
      else if ("thprediction" == this.Of.target.className) b = a.target.firstChild.innerText.substr(3);
      else return;
      0 != b.length && (a = [], a.push(b), z.S.a()
        .l("onPredictionChange", a))
    }
  };
  z.f.Qq = function () {
    if (("thprediction-word" === this.Of.target.className || "thprediction" === this.Of.target.className) && this.kh) {
      var a = [];
      a.push(this.Of.target.innerText.substr(3));
      z.S.a()
        .l("onWordChanged", a);
      a[0] += "-,";
      z.R.a()
        .je.Xn(a)
    }
  };
  z.f.Nq = function () {
    this.gh = !0
  };
  z.f.pq = function () {
    try {
      this.D(!1)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.oq = function (a) {
    try {
      for (var b = z.T.a()
          .v()
          .prediction.results, c = "", d = 0; d < b; d++) c += '<div class="thprediction"><div class="thprediction-word"></div></div>';
      if (null != this.lh && void 0 != this.lh) {
        this.lh.innerHTML = c;
        var e = z.L(a.position)
          , g = new z.H(e.offsetLeft, e.offsetTop)
          , k = z.eg(e)
          , l = g.y + k.height + e.scrollHeight + 6 + "px";
        z.O(this.vb, "left", g.x - k.width - e.scrollWidth - 18 + "px");
        z.O(this.vb, "top", l)
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.Tq = function () {};
  z.f.Xq = function (a) {
    try {
      if (this.Xb && !this.pe) {
        this.pe = !0;
        this.kh = !1;
        var b = 0;
        a[0].ctrlKey && (b = 48 == a[0].keyCode ? 9 : a[0].keyCode - 49);
        b >= this.Yk.length || (a = [], a.push(this.Yk[b]), z.S.a()
          .l("onPredictionChange", a))
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  Yl.Qd = "textHelp.fixedtoolbar.templates.Toolbar";
  Zl.Qd = "textHelp.fixedtoolbar.templates.Tooltip";
  $l.Qd = "textHelp.fixedtoolbar.templates.CollectHighlights";
  am.Qd = "textHelp.fixedtoolbar.templates.VoiceNote";
  bm.Qd = "textHelp.fixedtoolbar.templates.CollectHighlightsNotification";
  cm.Qd = "textHelp.fixedtoolbar.templates.VocabNotification";
  dm.Qd = "textHelp.fixedtoolbar.templates.MessageNotification";
  em.Qd = "textHelp.fixedtoolbar.templates.Prediction";
  z.qk.Qd = "textHelp.fixedtoolbar.templates.VoiceNoteCommentOverlay";
  z.w(z.dj, z.Bg);
  z.f = z.dj.prototype;
  z.f.q = function () {
    try {
      z.dj.g.q.call(this);
      var a = z.R.a()
        .$()
        , b = z.I(z.R.a()
          .Df());
      if (null != b) {
        var c = window.document.createElement("link");
        c.rel = "stylesheet";
        c.type = "text/css";
        c.href = a + "assets/thFixedToolbar.css";
        this.u()
          .appendChild(b, c);
        var d = z.Hi(Yl);
        this.u()
          .Kk(d, window.document.body.firstChild);
        d = z.Hi(Zl);
        this.u()
          .appendChild(window.document.body, d);
        new km;
        this.jj = new Wl
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.T = function (a) {
    try {
      this.Fb = a, this.Ym.T(""), this.rn.T(""), this.bq.T(""), this.dq.T(""), this.Yp.T("")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.pr = function () {
    try {
      try {
        if (window.postMessage({
            method: "thStopScreenShotReaderSpeech"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
            }
          }, "*"), null == z.R.a()
          .wa()) this.ij = z.S.a()
          .k("onGetOAuthToken", this.uj, this), window.postMessage({
            method: "getOAuthToken"
            , type: "1757FROM_PAGERW4G"
          }, "*");
        else try {
          z.T.a()
            .v(), this.Xg ? this.Uf(!0, null) : (z.S.a()
              .k("onAuthenticate", this.lq, this), window.postMessage({
                method: "authenticate"
                , type: "1757FROM_PAGERW4G"
                , payload: ""
              }, "*"))
        } catch (a) {
          z.R.a()
            .b(a)
        }
      } catch (b) {
        z.R.a()
          .b(b)
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Ir = function (a) {
    try {
      if (!this.oh) {
        var b = window.document.getElementById("th-RW4GC-picture-dictionary")
          , c = window.document.getElementById("th-RW4GC-translator");
        if (null != window.document.getElementById("th-RW4GC-dictionary") || null != b || null != c) b = "", b = 0 == a.length ? this.Fb.bb() : a[0], 1 > b.length || b == this.fn || (this.fn = b, window.texthelp.RW4GC.thToolbarStoreInstance.onWordChanged(b))
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.dr = function (a) {
    try {
      null == this.Tb && (this.Tb = new mm, this.Tb.T(""));
      nm(this.Tb, a);
      var b = z.R.a()
        .bind(this, this.Uf);
      this.Tb.nc(b)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.lq = function (a) {
    try {
      if (-1 !== a.indexOf("thGDOCSAuthenticated()")) this.Xg = !0, this.Uf(!0, null);
      else {
        this.Xg = !1;
        null == this.Tb && (this.Tb = new mm, this.Tb.T(""));
        nm(this.Tb, a);
        var b = z.R.a()
          .bind(this, this.Uf);
        this.Tb.nc(b)
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Uf = function () {
    try {
      null !== this.Tb && (this.Tb.qc(), this.Tb.We())
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ml = function () {};
  z.f.Wq = function (a) {
    try {
      if (z.R.a()
        .W("Prediction", !0)) {
        var b = z.R.a()
          .wa()
          , c = [];
        c.push("prediction lookup");
        c.push(b.Email);
        c.push(b.Email.split("@")[1]);
        window.postMessage({
          type: "1757FROM_PAGERW4G"
          , key: "function"
          , method: "SendEvent"
          , parameters: c
        }, "*");
        var d = this.Fb.Pb();
        0 > d.x || 0 > d.y ? this.jj.D(!1, a.parentId) : (this.jj.D(!0, a.parentId), this.jj.Rn(d, a.words))
      }
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Lq = function (a) {
    try {
      var b = z.R.a()
        .wa();
      if (null != b && (!1 !== b.Valid || !0 !== b.HideUnlicensed)) {
        var c = a.PromoMessage.Message
          , d = a.PromoMessage.Link;
        if (0 != c.length) {
          var e = z.Hi(dm);
          a = "";
          a = 0 < d.length ? '<a href="' + d + '" target="_blank">' + c + "</a>" : "<div>" + c + "</div>";
          var g = z.ne(window.document, a);
          z.L("mn-notification-msg", e)
            .appendChild(g);
          window.notification({
            msg: e.innerHTML
            , delay: 1E4
            , type: "success"
            , animIn: "fadeInRight"
            , animOut: "fadeOutDown"
          })
        }
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  z.f.Gc = function () {
    try {
      for (var a = window.document.querySelectorAll("[data-fixedtoolbar-tooltip]"), b = 0; b < a.length; b++) {
        var c = a[b].getAttribute("data-fixedtoolbar-tooltip");
        a[b].setAttribute("tooltip", z.U.a()
          .K(c))
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.uj = function (a) {
    try {
      if (z.S.a()
        .vf(this.ij), void 0 !== a.email) {
        var b = a.email.split("@")[1];
        window.postMessage({
          method: "GAE"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            category: a.email
            , action: "authenticatedLUI"
            , label: b
          }
        }, "*")
      } else {
        var c = z.I("thToolbar");
        null != c && z.O(c, "visibility", "visible")
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Ur = function () {
    try {
      z.R.a()
        .W("Speech", !0) && (window.postMessage({
            method: "thStopScreenShotReaderSpeech"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
            }
          }, "*"), z.T.a()
          .Sj(), z.S.a()
          .l("onWRPlay", []))
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.$r = function () {
    try {
      z.R.a()
        .W("Speech", !0) && (window.postMessage({
            method: "thStopScreenShotReaderSpeech"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
            }
          }, "*"), z.S.a()
          .l("onWRStop", []))
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Rr = function () {
    try {
      z.R.a()
        .W("Speech", !0) && (window.postMessage({
            method: "thStopScreenShotReaderSpeech"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
            }
          }, "*"), z.S.a()
          .l("onWRPause", []))
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Nr = function () {
    try {
      if (z.R.a()
        .W("FactFinder", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        var a = z.R.a()
          .wa();
        z.R.a()
          .Mb()
          .FactFinder ? z.S.a()
          .l("onWRFactFinder", []) : null !== a.Redirect && window.open(a.Redirect, "_exthtb")
          .focus()
      }
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Yr = function () {
    try {
      if (z.R.a()
        .W("Simplify", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        var a = z.R.a()
          .wa();
        z.R.a()
          .Mb()
          .Simplify ? z.S.a()
          .l("onWRSimplify", []) : null !== a.Redirect && window.open(a.Redirect, "_exthtb")
          .focus()
      }
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Vr = function () {
    try {
      z.S.a()
        .l("onWRPracticeReadingAloud", [])
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Mr = function () {
    try {
      window.texthelp.RW4GC.currentDictionary = {
        word: this.Fb.bb()
      };
      window.texthelp.RW4GC.riot.dictionary = window.texthelp.RW4GC.riot.mount("texthelp-dictionary", window.texthelp.RW4GC.currentDictionary)[0];
      var a = z.R.a()
        .ia();
      if (null == a) return null;
      window.postMessage({
        method: "GAE"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          category: a
          , action: "dictionary"
          , label: a.split("@")[1]
        }
      }, "*")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.as = function () {
    try {
      window.texthelp.RW4GC.currentTranslator = {
        word: this.Fb.bb()
      };
      window.texthelp.RW4GC.riot.translator = window.texthelp.RW4GC.riot.mount("texthelp-translator", window.texthelp.RW4GC.currentTranslator)[0];
      var a = z.R.a()
        .ia();
      if (null == a) return null;
      window.postMessage({
        method: "GAE"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          category: a
          , action: "translate"
          , label: a.split("@")[1]
        }
      }, "*")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.cs = function () {
    try {
      var a = z.R.a()
        .wa();
      if (z.R.a()
        .Mb()
        .VoiceNotes) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        this.rn.nc();
        var b = z.R.a()
          .ia();
        if (null == b) return null;
        window.postMessage({
          method: "GAE"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            category: b
            , action: "voice note"
            , label: b.split("@")[1]
          }
        }, "*")
      } else null !== a.Redirect && window.open(a.Redirect, "_exthtb")
        .focus()
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Sr = function () {
    try {
      window.texthelp.RW4GC.currentPictureDictionary = {
        word: this.Fb.bb()
      };
      window.texthelp.RW4GC.riot.pictureDictionary = window.texthelp.RW4GC.riot.mount("texthelp-picture-dictionary", window.texthelp.RW4GC.currentPictureDictionary)[0];
      var a = z.R.a()
        .ia();
      if (null == a) return null;
      window.postMessage({
        method: "GAE"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          category: a
          , action: "picture dictionary"
          , label: a.split("@")[1]
        }
      }, "*")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.ds = function () {
    try {
      if (z.R.a()
        .W("StudySkills", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        var a = z.R.a()
          .wa();
        if (z.R.a()
          .Mb()
          .StudySkills) {
          this.Fb.Wj();
          var b = z.R.a()
            .ia();
          if (null == b) return null;
          window.postMessage({
            method: "GAE"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              category: b
              , action: "yellow study skills"
              , label: b.split("@")[1]
            }
          }, "*")
        } else null !== a.Redirect && window.open(a.Redirect, "_exthtb")
          .focus()
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Jr = function () {
    try {
      if (z.R.a()
        .W("StudySkills", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        var a = z.R.a()
          .wa();
        if (z.R.a()
          .Mb()
          .StudySkills) {
          this.Fb.Zh();
          var b = z.R.a()
            .ia();
          if (null == b) return null;
          window.postMessage({
            method: "GAE"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              category: b
              , action: "blue study skills"
              , label: b.split("@")[1]
            }
          }, "*")
        } else null !== a.Redirect && window.open(a.Redirect, "_exthtb")
          .focus()
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Or = function () {
    try {
      if (z.R.a()
        .W("StudySkills", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        var a = z.R.a()
          .wa();
        if (z.R.a()
          .Mb()
          .StudySkills) {
          this.Fb.Di();
          var b = z.R.a()
            .ia();
          if (null == b) return null;
          window.postMessage({
            method: "GAE"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              category: b
              , action: "green study skills"
              , label: b.split("@")[1]
            }
          }, "*")
        } else null !== a.Redirect && window.open(a.Redirect, "_exthtb")
          .focus()
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Tr = function () {
    try {
      if (z.R.a()
        .W("StudySkills", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        var a = z.R.a()
          .wa();
        if (z.R.a()
          .Mb()
          .StudySkills) {
          this.Fb.Aj();
          var b = z.R.a()
            .ia();
          if (null == b) return null;
          window.postMessage({
            method: "GAE"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              category: b
              , action: "pink study skills"
              , label: b.split("@")[1]
            }
          }, "*")
        } else null !== a.Redirect && window.open(a.Redirect, "_exthtb")
          .focus()
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Kr = function () {
    try {
      if (z.R.a()
        .W("StudySkills", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        var a = z.R.a()
          .wa();
        if (z.R.a()
          .Mb()
          .StudySkills) {
          this.Fb.rc();
          var b = z.R.a()
            .ia();
          if (null == b) return null;
          window.postMessage({
            method: "GAE"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              category: b
              , action: "clear study skills"
              , label: b.split("@")[1]
            }
          }, "*")
        } else null !== a.Redirect && window.open(a.Redirect, "_exthtb")
          .focus()
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Qr = function () {
    try {
      window.postMessage({
        method: "thStopScreenShotReaderSpeech"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
        }
      }, "*");
      Xl("https://www.texthelp.com");
      var a = z.R.a()
        .ia();
      if (null == a) return null;
      window.postMessage({
        method: "GAE"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          category: a
          , action: "logo"
          , label: a.split("@")[1]
        }
      }, "*")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Gn = function () {
    try {
      z.S.a()
        .vf(this.$p), this.nh.nc(this.Fb.Bb(!1))
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Pr = function () {
    try {
      window.postMessage({
        method: "thStopScreenShotReaderSpeech"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
        }
      }, "*");
      Xl("https://rwchrome.texthelp.com/drive/Support/Home");
      var a = z.R.a()
        .ia();
      if (null == a) return null;
      window.postMessage({
        method: "GAE"
        , type: "1757FROM_PAGERW4G"
        , payload: {
          category: a
          , action: "help"
          , label: a.split("@")[1]
        }
      }, "*")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Xr = function () {
    try {
      if (z.R.a()
        .W("SSR", !0)) {
        var a = z.R.a()
          .ia();
        if (null == a) return null;
        window.postMessage({
          method: "GAE"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            category: a
            , action: "screenshot reader"
            , label: a.split("@")[1]
          }
        }, "*");
        var b = z.T.a()
          .v();
        window.postMessage({
          method: "thCheckExtension"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
            , Lang: b.language.services
            , defaultsettings: b.speechoptions
          }
        }, "*")
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Lr = function () {
    try {
      if (z.R.a()
        .W("StudySkills", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        this.Ym.nc();
        var a = z.R.a()
          .ia();
        if (null == a) return null;
        window.postMessage({
          method: "GAE"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            category: a
            , action: "collect highlights"
            , label: a.split("@")[1]
          }
        }, "*")
      }
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.bs = function () {
    try {
      if (z.R.a()
        .W("Vocab", !0)) {
        window.postMessage({
          method: "thStopScreenShotReaderSpeech"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
          }
        }, "*");
        var a = z.R.a()
          .bind(this, this.qr)
          , b = [];
        b.push("#FFFF00");
        b.push("#00FFFF");
        b.push("#ADFF2F");
        b.push("#FF00FF");
        z.R.a()
          .je.Bf(a, b, "untitled Vocabulary List");
        var c = z.R.a()
          .ia();
        if (null == c) return null;
        window.postMessage({
            method: "GAE"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              category: c
              , action: "vocab words"
              , label: c.split("@")[1]
            }
          }
          , "*");
        for (var d = z.Hi(cm), e = d.querySelectorAll("[data-vocab-notification]"), a = 0; a < e.length; a++) {
          var g = e[a].getAttribute("data-vocab-notification");
          e[a].innerText = z.U.a()
            .K(g)
        }
        this.qn = window.notification({
          msg: d.innerHTML
          , delay: 5E3
          , type: "success"
          , animIn: "fadeInRight"
          , animOut: "fadeOutDown"
        })
      }
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  z.f.Zr = function () {
    try {
      if (z.R.a()
        .W("SpeechInput", !0))
        if (window.postMessage({
            method: "thStopScreenShotReaderSpeech"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
            }
          }, "*"), this.$k = !this.$k) {
          this.Fb.xe();
          a = z.R.a()
            .ia();
          if (null == a) return null;
          b = a.split("@")[1];
          window.postMessage({
            method: "GAE"
            , type: "1757FROM_PAGERW4G"
            , payload: {
              category: a
              , action: "speech input"
              , label: b
            }
          }, "*")
        } else this.Fb.ye();
      else {
        var a = z.R.a()
          .ia();
        if (null == a) return null;
        var b = a.split("@")[1];
        window.postMessage({
          method: "GAE"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            category: a
            , action: "speech input"
            , label: b
          }
        }, "*")
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Wr = function () {
    try {
      if (z.R.a()
        .W("ScreenMasking", !0)) {
        this.mj = !this.mj;
        var a = window.document.getElementsByClassName("th-screenmasking-image")[0];
        this.mj ? z.R.a()
          .X(a, "enabled") : z.R.a()
          .ta(a, "enabled");
        window.textHelp.thScreenMasking.screenmasking.toggle(this.mj)
      }
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.qr = function () {
    try {
      this.qn.remove()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.W = function (a, b) {
    try {
      var c = z.R.a()
        .wa()
        , d = z.R.a()
        .Mb();
      z.T.a()
        .Sj();
      return d[a] ? !0 : (null !== c.Redirect && b && window.open(c.Redirect, "_exthtb")
        .focus(), !1)
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  km.prototype.Rn = function (a) {
    try {
      if (a !== this.bj) {
        z.we(this.el, a.getAttribute("tooltip"));
        var b = this.el.offsetWidth / 2 + this.el.offsetLeft;
        z.O(this.cq, "left", b + "px");
        var c = a.offsetTop + a.offsetParent.offsetTop + a.offsetHeight + "px";
        z.O(this.oj, "left", a.offsetLeft + a.offsetParent.offsetLeft + a.offsetWidth / 2 - b + "px");
        z.O(this.oj, "top", c);
        this.bj = a
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  km.prototype.D = function (a) {
    try {
      this.Xb !== a && (a ? z.R.a()
        .ta(this.oj, "thTooltipHide") : z.R.a()
        .X(this.oj, "thTooltipHide"), this.Xb = a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f = lm.prototype;
  z.f.T = function (a) {
    try {
      this.Ac = a;
      var b = this.j = new z.ni("gdwr-modal-dialog", !0);
      1 != b.sh && z.ui(b, !0);
      z.vi(this.j, !1);
      z.R.a()
        .X(z.si(this.j), "gdwr-" + this.Ac + "-dialog")
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.show = function () {
    this.j.D(!0);
    this.Xb = !0
  };
  z.f.We = function () {
    try {
      this.j.D(!1), this.Xb = !1
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.F = function () {
    try {
      return this.Xb
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Ch = function () {
    try {
      this.hc.contentWindow.postMessage("stop:", z.R.a()
        .$());
      var a = z.Rf(z.si(this.j), "top")
        , b = z.Rf(z.si(this.j), "left")
        , c = z.T.a()
        .v();
      c[this.Ac].position = b + "," + a;
      z.T.a()
        .cg(c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.qc = function () {
    try {
      null === this.hc && (this.hc = z.I(this.Ac + "Frame")), null !== this.hc && this.hc.contentWindow.postMessage("clear:", z.R.a()
        .$())
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.w(mm, lm);
  z.f = mm.prototype;
  z.f.T = function () {
    mm.g.T.call(this, "authenticate");
    Tl(this.j, "Read&Write for Google authorization");
    this.j.Ia("<html><head/><body><div class='th-auth-text'>Read&Write for Google&trade; has features that create and modify your documents. These features need to be authorized with Google before the app can run.</div><div class='th-auth-text'>When authorized you will receive an email notitification confirming the authorization and a button to remove authorization at any time.</div><div class='th-auth-text'>Texthelp will never have access to your password.</div><br><iframe id='authenticateFrame' class='authenticateFrame' name='authenticateFrameRW4G' frameborder='0'></iframe></div><div class='gdwr-modal-auth-dialog-buttons'></div></div></body></html>");
    z.zi(this.j);
    var a = this.j;
    a.Ue = !1;
    a.Na && z.ig(a.Na, a.Ue);
    a = new z.oh("Cancel");
    a.X("gdwr-dialog-button");
    a.ua(z.L("gdwr-modal-auth-dialog-buttons"));
    this.j.D(!0);
    this.j.D(!1);
    z.F(z.si(this.j), "mouseup", this.Vf, !1, this);
    z.F(a, "action", this.hf, !1, this);
    return !0
  };
  z.f.nc = function (a) {
    try {
      this.Qk = a, this.show()
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Vf = function () {};
  z.f.qc = function () {
    mm.g.qc.call(this)
  };
  z.f.Aq = function (a) {
    if ("A" == a.target.nodeName || "BUTTON" == a.target.nodeName) this.Qk(!0, this), this.We()
  };
  z.f.hf = function () {
    try {
      this.Qk(!1, this)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.w(om, z.dh);
  z.ga(om);
  z.f = om.prototype;
  z.f.q = function (a) {
    var b = {
        "class": "goog-inline-block " + this.Sc(a)
          .join(" ")
      }
      , b = a.u()
      .q("div", b, this.ki(a.Tc(), a.u()));
    this.Lj(b, a.Kg());
    z.Zg(this, a, b);
    return b
  };
  z.f.$d = function () {
    return "button"
  };
  z.f.ja = function (a) {
    return a && a.firstChild && a.firstChild.firstChild
  };
  z.f.ki = function (a, b) {
    return b.q("div", "goog-inline-block " + (this.J() + "-outer-box"), b.q("div", "goog-inline-block " + (this.J() + "-inner-box"), a))
  };
  z.f.Kb = function (a) {
    return "DIV" == a.tagName
  };
  z.f.ca = function (a, b) {
    pm(b, !0);
    pm(b, !1);
    var c;
    a: {
      c = a.u()
      .Am(b);
      var d = this.J() + "-outer-box";
      if (c && z.Sg(c, d) && (c = a.u()
          .Am(c), d = this.J() + "-inner-box", c && z.Sg(c, d))) {
        c = !0;
        break a
      }
      c = !1
    }
    c || b.appendChild(this.ki(b.childNodes, a.u()));
    z.Ug(b, ["goog-inline-block", this.J()]);
    return om.g.ca.call(this, a, b)
  };
  z.f.J = function () {
    return "goog-custom-button"
  };
  z.w(qm, om);
  z.ga(qm);
  z.f = qm.prototype;
  z.f.ja = function (a) {
    return qm.g.ja.call(this, a && a.firstChild)
  };
  z.f.ca = function (a, b) {
    var c = z.ce(window.document, "*", "goog-menu", b)[0];
    if (c) {
      z.ig(c, !1);
      z.ae(c)
        .body.appendChild(c);
      var d = new z.Vh;
      d.ca(c);
      a.Gh(d)
    }
    return qm.g.ca.call(this, a, b)
  };
  z.f.ki = function (a, b) {
    return qm.g.ki.call(this, [this.createCaption(a, b), b.q("div", "goog-inline-block " + (this.J() + "-dropdown"), " ")], b)
  };
  z.f.createCaption = function (a, b) {
    return b.q("div", "goog-inline-block " + (this.J() + "-caption"), a)
  };
  z.f.J = function () {
    return "goog-menu-button"
  };
  z.w(rm, z.oh);
  z.f = rm.prototype;
  z.f.Oi = !1;
  z.f.ts = !1;
  z.f.ys = !1;
  z.f.ga = function () {
    rm.g.ga.call(this);
    tm(this, !0);
    this.i && sm(this, this.i, !0);
    z.Q(this.m, "haspopup", !!this.i)
  };
  z.f.La = function () {
    rm.g.La.call(this);
    tm(this, !1);
    if (this.i) {
      this.Aa(!1);
      this.i.La();
      sm(this, this.i, !1);
      var a = this.i.f();
      a && z.re(a)
    }
  };
  z.f.s = function () {
    rm.g.s.call(this);
    this.i && (this.i.U(), delete this.i);
    delete this.ks;
    this.oa.U()
  };
  z.f.ee = function (a) {
    rm.g.ee.call(this, a);
    this.Ye() && (this.Aa(!(this.L & 64), a), this.i && (this.i.dd = !!(this.L & 64)))
  };
  z.f.fe = function (a) {
    rm.g.fe.call(this, a);
    this.i && !this.Ye() && (this.i.dd = !1)
  };
  z.f.ve = function () {
    this.setActive(!1);
    return !0
  };
  z.f.mp = function (a) {
    this.i && this.i.F() && !this.sd(a.target) && this.Aa(!1)
  };
  z.f.sd = function (a) {
    return a && z.ve(this.f(), a) || this.i && this.i.sd(a) || !1
  };
  z.f.wc = function (a) {
    if (32 == a.keyCode) {
      if (a.preventDefault(), "keyup" != a.type) return !0
    } else if ("key" != a.type) return !1;
    if (this.i && this.i.F()) {
      var b = 13 == a.keyCode || 32 == a.keyCode
        , c = this.i.Qb(a);
      return 27 == a.keyCode || b && this.Io ? (this.Aa(!1), !0) : c
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Aa(!0, a), !0) : !1
  };
  z.f.Ck = function () {
    this.Aa(!1)
  };
  z.f.wp = function () {
    this.Ye() || this.Aa(!1)
  };
  z.f.Se = function (a) {
    this.Oi || this.Aa(!1);
    rm.g.Se.call(this, a)
  };
  z.f.Oe = function () {
    this.i || this.Gh(new z.Vh(this.u(), this.gq));
    return this.i || null
  };
  z.f.Gh = function (a) {
    var b = this.i;
    if (a != b && (b && (this.Aa(!1), this.Q && sm(this, b, !1), delete this.i), this.Q && z.Q(this.m, "haspopup", !!a), a)) {
      this.i = a;
      z.Fg(a, this);
      a.D(!1);
      var c = this.Oi;
      (a.Vh = c) && a.Pd(!0);
      this.Q && sm(this, a, !0)
    }
    return b
  };
  z.f.Ya = function (a) {
    this.Oe()
      .Ee(a, !0)
  };
  z.f.Vd = function (a, b) {
    this.Oe()
      .zf(a, b, !0)
  };
  z.f.removeItem = function (a) {
    (a = this.Oe()
      .removeChild(a, !0)) && a.U()
  };
  z.f.Le = function (a) {
    return this.i ? z.Og(this.i, a) : null
  };
  z.f.Fg = function () {
    return this.i ? z.Ng(this.i) : 0
  };
  z.f.D = function (a, b) {
    var c = rm.g.D.call(this, a, b);
    c && !this.F() && this.Aa(!1);
    return c
  };
  z.f.Gb = function (a) {
    rm.g.Gb.call(this, a);
    this.isEnabled() || this.Aa(!1)
  };
  z.f.Aa = function (a, b) {
    rm.g.Aa.call(this, a);
    if (this.i && !!(this.L & 64) == a) {
      if (a) {
        if (!this.i.Q)
          if (this.ts) {
            var c;
            c = this.f();
            (c = void 0 != c.nextElementSibling ? c.nextElementSibling : z.te(c.nextSibling)) ? z.Lg(this.i, c.parentNode, c): this.i.ua(this.f()
              .parentNode)
          } else this.i.ua();
        this.qo = z.$f(this.f());
        this.$l = z.gg(this.f());
        this.Bj();
        c = !!b && (13 == b.keyCode || 32 == b.keyCode);
        this.i.Lc(b && (40 == b.keyCode || 38 == b.keyCode) || c && this.ys ? 0 : -1)
      } else {
        this.setActive(!1);
        this.i.dd = !1;
        if (c = this.f()) z.Q(c, "activedescendant"
          , ""), z.Q(c, "owns", "");
        null != this.xj && (this.xj = void 0, (c = this.i.f()) && z.dg(c, "", ""))
      }
      this.i.D(a, !1, b);
      if (!this.td) {
        c = this.Ea();
        var d = a ? c.n : c.Xa;
        d.call(c, z.Ie(this.u()), "mousedown", this.mp, !0);
        this.Oi && d.call(c, this.i, "blur", this.wp);
        d.call(c, this.oa, "tick", this.jr);
        a ? this.oa.start() : this.oa.stop()
      }
    }
    this.i && this.i.f() && this.i.m.removeAttribute("aria-hidden")
  };
  z.f.Bj = function () {
    if (this.i.Q) {
      var a = this.sj;
      this.sj.element = this.ks || this.f();
      var b = this.i.f();
      this.i.F() || (b.style.visibility = "hidden", z.ig(b, !0));
      !this.xj && this.sj.Bm && this.sj.Ti & 32 && (this.xj = z.eg(b));
      a.bg(b, a.ji ^ 1, this.fq, this.xj);
      this.i.F() || (z.ig(b, !1), b.style.visibility = "visible")
    }
  };
  z.f.jr = function () {
    var a = z.gg(this.f())
      , b = z.$f(this.f())
      , c = this.$l;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.qo, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    c && (this.$l = a, this.qo = b, this.Bj())
  };
  z.f.Bk = function (a) {
    (a = a.target.f()) && um(this, a)
  };
  z.f.rp = function (a) {
    z.$g(this, 32) && this.Ca() && this.i && this.i.F() && a.stopPropagation()
  };
  z.f.Ek = function () {
    if (!z.Eh(this.i)) {
      var a = this.f();
      z.Q(a, "activedescendant", "");
      z.Q(a, "owns", "")
    }
  };
  z.f.yk = function (a) {
    if (this.L & 64 && a.target instanceof z.Rh) {
      a = a.target;
      var b = a.f();
      a.F() && a.L & 2 && null != b && um(this, b)
    }
  };
  z.eh("goog-menu-button", function () {
    return new rm(null)
  });
  z.w(vm, z.Gc);
  z.f = vm.prototype;
  z.f.Nd = null;
  z.f.Pn = null;
  z.f.Fg = function () {
    return this.Ad.length
  };
  z.f.Le = function (a) {
    return this.Ad[a] || null
  };
  z.f.Ya = function (a) {
    this.Vd(a, this.Fg())
  };
  z.f.Vd = function (a, b) {
    a && (xm(this, a, !1), z.db(this.Ad, b, 0, a))
  };
  z.f.removeItem = function (a) {
    a && z.$a(this.Ad, a) && a == this.Nd && (this.Nd = null, this.dispatchEvent("select"))
  };
  z.f.Qe = function () {
    return this.Nd
  };
  z.f.uk = function () {
    return z.bb(this.Ad)
  };
  z.f.qf = function (a) {
    a != this.Nd && (xm(this, this.Nd, !1), this.Nd = a, xm(this, a, !0));
    this.dispatchEvent("select")
  };
  z.f.zi = function () {
    var a = this.Nd;
    return a ? (0, z.Ya)(this.Ad, a) : -1
  };
  z.f.Vn = function (a) {
    this.qf(this.Le(a))
  };
  z.f.clear = function () {
    var a = this.Ad;
    if (!z.ja(a))
      for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.Nd = null
  };
  z.f.s = function () {
    vm.g.s.call(this);
    delete this.Ad;
    this.Nd = null
  };
  z.w(ym, rm);
  z.f = ym.prototype;
  z.f.Y = null;
  z.f.ga = function () {
    ym.g.ga.call(this);
    Dm(this);
    Cm(this)
  };
  z.f.Lb = function (a) {
    ym.g.Lb.call(this, a);
    (a = this.Rc()) ? (this.gk = a, Dm(this)) : this.Qe() || this.Vn(0)
  };
  z.f.s = function () {
    ym.g.s.call(this);
    this.Y && (this.Y.U(), this.Y = null);
    this.gk = null
  };
  z.f.Ck = function (a) {
    this.qf(a.target);
    ym.g.Ck.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
  };
  z.f.zp = function () {
    var a = this.Qe();
    ym.g.jb.call(this, a && a.ba());
    Dm(this)
  };
  z.f.Gh = function (a) {
    var b = ym.g.Gh.call(this, a);
    a != b && (this.Y && this.Y.clear(), a && (this.Y ? z.Pg(a, function (a) {
      Bm(a);
      this.Y.Ya(a)
    }, this) : Am(this, a)));
    return b
  };
  z.f.Ya = function (a) {
    Bm(a);
    ym.g.Ya.call(this, a);
    this.Y ? this.Y.Ya(a) : Am(this, this.Oe());
    Em(this)
  };
  z.f.Vd = function (a, b) {
    Bm(a);
    ym.g.Vd.call(this, a, b);
    this.Y ? this.Y.Vd(a, b) : Am(this, this.Oe())
  };
  z.f.removeItem = function (a) {
    ym.g.removeItem.call(this, a);
    this.Y && this.Y.removeItem(a)
  };
  z.f.qf = function (a) {
    if (this.Y) {
      var b = this.Qe();
      this.Y.qf(a);
      a != b && this.dispatchEvent("change")
    }
  };
  z.f.Vn = function (a) {
    this.Y && this.qf(this.Y.Le(a))
  };
  z.f.jb = function (a) {
    if (null != a && this.Y)
      for (var b = 0, c; c = this.Y.Le(b); b++)
        if (c && "function" == typeof c.ba && c.ba() == a) {
          this.qf(c);
          return
        }
    this.qf(null)
  };
  z.f.ba = function () {
    var a = this.Qe();
    return a ? a.ba() : null
  };
  z.f.Qe = function () {
    return this.Y ? this.Y.Qe() : null
  };
  z.f.zi = function () {
    return this.Y ? this.Y.zi() : -1
  };
  z.f.Aa = function (a, b) {
    ym.g.Aa.call(this, a, b);
    this.L & 64 ? this.Oe()
      .Lc(this.zi()) : Em(this)
  };
  z.eh("goog-select", function () {
    return new ym(null)
  });
  Fm.prototype.T = function (a) {
    try {
      this.Ac = a;
      this.j = new z.ni("gdwr-dialog", !0);
      z.zi(this.j);
      var b = this.j;
      0 != b.sh && z.ui(b, !1);
      z.vi(this.j, !0);
      var c = this.j;
      c.Ue = !0;
      c.Na && z.ig(c.Na, c.Ue);
      this.j.D(!0);
      this.j.D(!1);
      z.R.a()
        .X(z.si(this.j), "gdwr-" + this.Ac + "-dialog")
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  Fm.prototype.show = function () {
    null === this.hc && (this.hc = z.I(this.Ac + "Frame"));
    this.j.D(!0);
    this.Xb = !0
  };
  Fm.prototype.We = function () {
    try {
      this.j.D(!1), this.Xb = !1
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  lm.prototype.F = function () {
    try {
      return this.j.F()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  Fm.prototype.Ch = function () {
    try {
      this.hc.contentWindow.postMessage("stop:", z.R.a()
        .$());
      var a = z.Rf(z.si(this.j), "top")
        , b = z.Rf(z.si(this.j), "left")
        , c = z.T.a()
        .v();
      c[this.Ac].position = b + "," + a;
      z.T.a()
        .cg(c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  Fm.prototype.qc = function () {
    try {
      null === this.hc && (this.hc = z.I(this.Ac + "Frame")), this.hc.contentWindow.postMessage("clear:", z.R.a()
        .$())
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.w(fm, lm);
  z.f = fm.prototype;
  z.f.T = function () {
    fm.g.T.call(this, "collecthighlights");
    this.aq = z.R.a()
      .bind(this, this.Eq);
    z.zi(this.j);
    var a = z.Hi($l);
    Tl(this.j, "Collect Highlights");
    this.j.Ia(a.innerHTML);
    this.Zk[0] = this.Ds;
    this.Zk[1] = this.Es;
    this.Hd = z.L("thSelect");
    z.F(this.Hd, "mouseup", this.er, !1, this);
    this.ah = new z.vl;
    this.ah.ca(z.I("thYellowChk"));
    this.Yg = new z.vl;
    this.Yg.ca(z.I("thBlueChk"));
    this.Zg = new z.vl;
    this.Zg.ca(z.I("thGreenChk"));
    this.$g = new z.vl;
    this.$g.ca(z.I("thPinkChk"));
    this.Cd = new z.oh("Cancel");
    this.Cd.X("gdwr-dialog-button");
    this.Dd = new z.oh("OK");
    this.Dd.X("gdwr-dialog-button");
    this.Cd.ua(z.L("gdwr-collect-dialog-buttons"));
    this.Dd.ua(z.L("gdwr-collect-dialog-buttons"));
    z.F(this.Cd, "action", this.hf, !1, this);
    z.F(this.Dd, "action", this.xh, !1, this)
  };
  z.f.nc = function () {
    try {
      this.pj = !0;
      this.show();
      var a = z.T.a()
        .v();
      this.Hd[a.collecthighlights.sortAlgorithm].selected = !0;
      void 0 == a.collecthighlights.yellow && (a.collecthighlights.yellow = !0);
      void 0 == a.collecthighlights.green && (a.collecthighlights.green = !0);
      void 0 == a.collecthighlights.blue && (a.collecthighlights.blue = !0);
      void 0 == a.collecthighlights.pink && (a.collecthighlights.pink = !0);
      this.ah.Od(a.collecthighlights.yellow);
      this.Yg.Od(a.collecthighlights.blue);
      this.Zg.Od(a.collecthighlights.green);
      this.$g.Od(a.collecthighlights.pink)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Vf = function () {
    try {
      this.Ch()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.er = function () {
    try {
      if (!this.pj && this.Uk !== this.Hd.selectedIndex) {
        var a = z.T.a()
          .v();
        a.collecthighlights.sortAlgorithm = this.Hd.selectedIndex;
        z.T.a()
          .cg(a);
        if (!this.pj) {
          try {
            var b = this.Xp
              , c = z.I("collecthighlightsFrame");
            this.Uk = this.Hd.selectedIndex;
            for (var a = "<div>", d = 0; d < b.length; d++) {
              var e = b[d];
              e.highlights.sort(this.Zk[this.Uk]);
              for (var g = 0; g < e.highlights.length; g++) var k = e.highlights[g]
                , a = a + ('<span style="background-color:' + k.bgcolor + ";color:" + k.fgcolor + ';">' + k.text + "</span><br><br>");
              a += "<div>" + e.title + "</div><div>" + e.author + "<br>" + e.link + "</div></div>"
            }
            c.contentWindow.postMessage("content:" + (a + "</div>"), z.R.a()
              .$());
            this.pj = !1
          } catch (l) {
            z.R.a()
              .b(l)
          }
          window.document.createRange()
            .selectNodeContents(window.document.body)
        }
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.Ds = function (a, b) {
    try {
      return a.colorOrder > b.colorOrder ? 1 : a.colorOrder < b.colorOrder ? -1 : 0
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Es = function (a, b) {
    try {
      return a.start > b.start ? 1 : a.start < b.start ? -1 : 0
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.hf = function () {
    try {
      this.j.D(!1)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.xh = function () {
    try {
      this.j.D(!1);
      var a = z.T.a()
        .v();
      a.collecthighlights.sortAlgorithm = this.Hd.selectedIndex;
      a.collecthighlights.yellow = this.ah.Cb();
      a.collecthighlights.green = this.Zg.Cb();
      a.collecthighlights.blue = this.Yg.Cb();
      a.collecthighlights.pink = this.$g.Cb();
      z.T.a()
        .cg(a);
      var a = 1
        , b = this.Hd[this.Hd.selectedIndex].value;
      "0" === b ? a = 2 : "1" === b && (a = 1);
      b = [];
      this.ah.Cb() && b.push("#FFFF00");
      this.Yg.Cb() && b.push("#00FFFF");
      this.Zg.Cb() && b.push("#ADFF2F");
      this.$g.Cb() && b.push("#FF00FF");
      z.R.a()
        .je.Pc(this.aq
          , a, b, "Highlights Untitled");
      for (var c = z.Hi(bm), d = c.querySelectorAll("[data-collect-highlights-notification]"), a = 0; a < d.length; a++) {
        var e = d[a].getAttribute("data-collect-highlights-notification");
        d[a].innerText = z.U.a()
          .K(e)
      }
      this.gn = window.notification({
        msg: c.innerHTML
        , type: "success"
        , animIn: "fadeInRight"
        , delay: 5E3
        , animOut: "fadeOutDown"
      })
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.Eq = function () {
    try {
      this.gn.remove()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Gc = function () {
    try {
      Tl(this.j, z.U.a()
        .K("collect_highlights_dialog_heading"));
      for (var a = window.document.querySelectorAll("[data-collecthighlights-dialog]"), b = 0; b < a.length; b++) {
        var c = a[b].getAttribute("data-collecthighlights-dialog");
        a[b].innerText = z.U.a()
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
  z.w(jm, Fm);
  z.f = jm.prototype;
  z.f.T = function () {
    jm.g.T.call(this, "dictionary");
    this.kc = null;
    Tl(this.j, "Dictionary");
    this.j.Ia("<html><head/><body><iframe id='dictionaryFrame'name='dictionaryFrame' src='" + z.R.a()
      .$() + "dialog.html' style='width:500px;height:200px' frameborder='0'></iframe></body></html>");
    this.un = {
      1: "Noun"
      , 2: "Verb"
      , 3: "Adjective"
      , 4: "Adverb"
      , 5: "Pronoun"
      , 6: "Preposition"
      , 7: "Prefix"
      , 8: "Article"
      , 9: "Conjunction"
      , 10: "Auxiliary verb"
      , 11: "None"
      , 12: "Interjection"
      , 13: "Abbreviation"
      , 14: "Determiner"
      , 15: "Exclamation"
      , 16: "Infinitive"
    };
    z.F(z.si(this.j), "mouseup", this.Vf, !1, this);
    z.S.a()
      .k("onUILanguageChanged", this.Gc, this)
  };
  z.f.nc = function () {
    try {
      var a = this.F();
      this.show();
      var b = z.T.a()
        .v()[this.Ac].position.split(",");
      z.de(z.si(this.j), {
        style: "top: " + b[1] + "; left: " + b[0]
      });
      a || z.S.a()
        .l("onFocusOnCursor", [])
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.F = function () {
    try {
      return this.j.F()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Vf = function () {
    try {
      this.Ch()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.qc = function () {
    jm.g.qc.call(this)
  };
  z.f.Gc = function () {
    try {
      if (Tl(this.j, z.U.a()
          .K("dictionary_dialog_heading")), null !== this.kc) {
        var a = this.kc;
        try {
          var b = z.I("dictionaryFrame")
            , c = z.T.a()
            .v()
            .speechoptions.voice;
          b.contentWindow.postMessage("voice:" + c, z.R.a()
            .$());
          var d = z.T.a()
            .v()
            .speechoptions.speed;
          b.contentWindow.postMessage("speed:" + d, z.R.a()
            .$());
          this.kc = a;
          c = "";
          if (null == a) c += '<div class="th-nomatch" data-trans-dictionaryDlg="speechstream_msh_noselection">' + z.U.a()
            .K("speechstream_msh_noselection"), window.NaN, b.contentWindow.postMessage("content:" +
              c, z.R.a()
              .$());
          else {
            var e = JSON.parse(a);
            if (void 0 !== e.service && "DictionaryHTML_1" == e.service) try {
                var g = z.I("dictionaryFrame")
                  , a = ""
                  , a = e.definitions;
                0 == a.length && (a += '<div class="rwDictWordHeader">' + e.word + "</div>", a += '<div class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + z.U.a()
                  .K("dialog_definition_notfound"), window.NaN);
                g.contentWindow.postMessage("content:" + a, z.R.a()
                  .$())
              } catch (k) {
                z.R.a()
                  .b(k)
              } else if (c = '<div class="rwDictWordHeader">' +
                e.word + "</div>", "0" !== e.status || 0 == e.inflections.length) c += '<div class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + z.U.a()
                .K("dialog_definition_notfound"), window.NaN, b.contentWindow.postMessage("content:" + c, z.R.a()
                  .$());
              else if (1 > a.length) this.We();
            else
              for (var c = c + '<table class="rwDictDefin"><tbody>', g = 0, l = e.inflections, d = 0; d < l.length; d++)
                for (var m = l[d].definitions, n = 0; n < m.length; n++) {
                  g++;
                  var c = c + "<tr><td>"
                    , p = "";
                  0 < m[n].type.length &&
                    "11" !== m[n].type && (p = "<b>" + this.un[m[n].type] + ": </b>");
                  var q = 0
                    , e = JSON.parse(a)
                    , c = '<div class="rwDictWordHeader">' + e.word + "</div>"
                    , c = c + '<table class="rwDictDefin"><tbody>'
                    , g = 0
                    , l = e.inflections;
                  if (0 == l.length) c += '<div class="th-nomatch">No match was found for this word.</div>';
                  else
                    for (d = 0; d < l.length; d++)
                      for (m = l[d].definitions, n = 0; n < m.length; n++) g++, c += "<tr><td>", p = "", 0 < m[n].type.length && "11" !== m[n].type && (p = "<b>" + this.un[m[n].type] +
                        ": </b>"), c += '<span id="def' + g + '">' + p + "<span>" + m[n].definition + "</span></span>", c += "</td></tr>", q++, 5 <= q && (n = m.length, d = l.length);
                  c += "</tbody></table>";
                  b.contentWindow.postMessage("content:" + c, z.R.a()
                    .$())
                }
          }
        } catch (s) {
          z.R.a()
            .b(s)
        }
      }
    } catch (t) {
      z.R.a()
        .b(t)
    }
  };
  z.w(hm, Fm);
  z.f = hm.prototype;
  z.f.T = function () {
    try {
      hm.g.T.call(this, "picturedictionary"), Tl(this.j, "Picture Dictionary"), this.j.Ia("<html><head/><body><iframe id='picturedictionaryFrame' name='picturedictionaryFrame' src='" + z.R.a()
          .$() + "dialog.html' style='width:185px;height:485px' frameborder='0'></iframe></body></html>"), z.F(z.si(this.j), "mouseup", this.Vf, !1, this), z.S.a()
        .k("onUILanguageChanged", this.Gc, this)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.nc = function () {
    try {
      var a = this.F();
      this.show();
      var b = z.T.a()
        .v()[this.Ac].position.split(",");
      z.de(z.si(this.j), {
        style: "top: " + b[1] + "; left: " + b[0]
      });
      a || z.S.a()
        .l("onFocusOnCursor", [])
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.F = function () {
    try {
      return this.j.F()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Vf = function () {
    try {
      this.Ch()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.qc = function () {
    hm.g.qc.call(this)
  };
  z.f.Gc = function () {
    try {
      if (Tl(this.j, z.U.a()
          .K("picture_dictionary_dialog_heading")), null !== this.kc) {
        var a = this.kc;
        try {
          var b = z.I("picturedictionaryFrame")
            , c = z.T.a()
            .v()
            .speechoptions.voice;
          b.contentWindow.postMessage("voice:" + c, z.R.a()
            .$());
          var d = z.T.a()
            .v()
            .speechoptions.speed;
          b.contentWindow.postMessage("speed:" + d, z.R.a()
            .$());
          this.kc = a;
          if (null == a) a = '<div class="th-nomatch" data-trans-pictureDictionaryDlg="speechstream_msh_noselection">' + z.U.a()
            .K("speechstream_msh_noselection"), window.NaN
            , b.contentWindow.postMessage("content:" + a, z.R.a()
              .$());
          else {
            var e = JSON.parse(a)
              , a = '<div class="rwDictWordHeader">' + e.word + "</div>";
            if ("0" !== e.status || 0 == e.symbols.length) a += '<div class="th-nomatch" data-trans-pictureDictionaryDlg="dialog_definition_notfound">' + z.U.a()
              .K("dialog_definition_notfound"), window.NaN;
            if (1 > a.length) this.We();
            else {
              if (null !== a) {
                for (var a = a + '<p class="point_cmap">', g = e.symbols, c = 0; c < g.length; c++) a += '<img class="point_symbol" src="' +
                  g[c] + '" alt=""><br>';
                a += "</p"
              }
              b.contentWindow.postMessage("content:" + a, z.R.a()
                .$())
            }
          }
        } catch (k) {
          z.R.a()
            .b(k)
        }
      }
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.w(im, Fm);
  z.f = im.prototype;
  z.f.T = function () {
    im.g.T.call(this, "translator");
    Tl(this.j, "Translator");
    this.j.Ia("<html><head/><body><iframe id='translatorFrame' name='translatorFrame' src='" + z.R.a()
      .$() + "dialog.html' style='width:500px;height:250px' frameborder='0'></iframe></body></html>");
    z.F(z.si(this.j), "mouseup", this.ar, !1, this);
    z.S.a()
      .k("onUILanguageChanged", this.Gc, this)
  };
  z.f.nc = function () {
    try {
      var a = this.F();
      this.show();
      var b = z.T.a()
        .v()[this.Ac].position.split(",");
      z.de(z.si(this.j), {
        style: "top: " + b[1] + "; left: " + b[0]
      });
      a || z.S.a()
        .l("onFocusOnCursor", [])
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.F = function () {
    try {
      return this.j.F()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ar = function () {
    try {
      this.Ch()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.qc = function () {
    im.g.qc.call(this)
  };
  z.f.Gc = function () {
    try {
      if (Tl(this.j, z.U.a()
          .K("translator_dialog_heading")), null !== this.kc) {
        var a = this.kc;
        try {
          var b = z.I("translatorFrame")
            , c = z.T.a()
            .v()
            .speechoptions.voice;
          b.contentWindow.postMessage("voice:" + c, z.R.a()
            .$());
          var d = z.T.a()
            .v()
            .speechoptions.speed;
          b.contentWindow.postMessage("speed:" + d, z.R.a()
            .$());
          this.kc = a;
          c = "";
          if (null == a) c += '<div class="th-nomatch"  texthelpstopcontinuous="1" data-trans-translatorDlg="speechstream_msh_noselection">' + z.U.a()
            .K("speechstream_msh_noselection")
            , window.NaN, b.contentWindow.postMessage("content:" + c, z.R.a()
              .$());
          else {
            var e = JSON.parse(a.json)
              , c = '<div class="rwTranWordHeader"  texthelpstopcontinuous="1">' + e.text + "</div>";
            if (1 == a.wordLength && "false" == e.confirmed || "0" !== e.status) c += '<div class="th-nomatch"  texthelpstopcontinuous="1" data-trans-translatorDlg="dialog_definition_notfound">' + z.U.a()
              .K("dialog_definition_notfound"), window.NaN, b.contentWindow.postMessage("content:" + c, z.R.a()
                .$());
            else if (1 > a.length) this.We();
            else {
              for (var c = c + '<table class="rwTransMean"><tbody>', g = e.translations, a = 0; a < g.length; a++) c += '<tr><td><div texthelpstopcontinuous="1" lang="' + this.kc.toLang + '" class="rwMeaning" id="rwMeaning' + a + '">' + e.translations[a].word + "</div></td></tr>";
              b.contentWindow.postMessage("content:" + (c + "</tbody></table>"), z.R.a()
                .$())
            }
          }
        } catch (k) {
          z.R.a()
            .b(k)
        }
      }
    } catch (l) {
      z.R.a()
        .b(l)
    }
  };
  z.w(gm, lm);
  z.f = gm.prototype;
  z.f.T = function () {
    gm.g.T.call(this, "voicenote");
    var a = window.document.getElementById("thSpeechStreamTBPlaceHolder")
      , b = a.getAttribute("data-root");
    if (!this.tn) {
      var c = window.document.createElement("script");
      c.src = b + "assets/recorder.js";
      c.async = !0;
      c.id = "thRecordWorker";
      c.onload = c.onreadystatechange = function () {
        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (c.onload = c.onreadystatechange = null, a.removeChild(c))
      };
      c.textContent = 'function init(e){sampleRate=e.sampleRate}function record(e){recBuffersL.push(e[0]),recBuffersR.push(e[1]),recLength+=e[0].length}function exportWAV(e){var t=mergeBuffers(recBuffersL,recLength),r=mergeBuffers(recBuffersR,recLength),n=interleave(t,r),a=encodeWAV(n),f=new Blob([a],{type:e});this.postMessage(f)}function exportMonoWAV(e){var t=mergeBuffers(recBuffersL,recLength),r=encodeWAV(t,!0),n=new Blob([r],{type:e});this.postMessage(n)}function getBuffers(){var e=[];e.push(mergeBuffers(recBuffersL,recLength)),e.push(mergeBuffers(recBuffersR,recLength)),this.postMessage(e)}function clear(){recLength=0,recBuffersL=[],recBuffersR=[]}function mergeBuffers(e,t){for(var r=new Float32Array(t),n=0,a=0;a<e.length;a++)r.set(e[a],n),n+=e[a].length;return r}function interleave(e,t){for(var r=e.length+t.length,n=new Float32Array(r),a=0,f=0;r>a;)n[a++]=e[f],n[a++]=t[f],f++;return n}function interleaveForceMono(e){for(var t=e.length,r=new Float32Array(t),n=0,a=0;t>n;)r[n++]=.25*(e[a++]+e[a++]+e[a++]+e[a++]);return r}function floatTo16BitPCM(e,t,r){for(var n=0;n<r.length;n++,t+=2){var a=Math.max(-1,Math.min(1,r[n]));e.setInt16(t,0>a?32768*a:32767*a,!0)}}function writeString(e,t,r){for(var n=0;n<r.length;n++)e.setUint8(t+n,r.charCodeAt(n))}function encodeWAV(e,t){var r=new ArrayBuffer(44+2*e.length),n=new DataView(r);return writeString(n,0,"RIFF"),n.setUint32(4,32+2*e.length,!0),writeString(n,8,"WAVE"),writeString(n,12,"fmt "),n.setUint32(16,16,!0),n.setUint16(20,1,!0),n.setUint16(22,t?1:2,!0),n.setUint32(24,sampleRate,!0),n.setUint32(28,2*sampleRate,!0),n.setUint16(32,2,!0),n.setUint16(34,16,!0),writeString(n,36,"data"),n.setUint32(40,2*e.length,!0),floatTo16BitPCM(n,44,e),n}var recLength=0,recBuffersL=[],recBuffersR=[],sampleRate;this.onmessage=function(e){switch(e.data.command){case"init":init(e.data.config);break;case"record":record(e.data.buffer);break;case"exportWAV":exportWAV(e.data.type);break;case"exportMonoWAV":exportMonoWAV(e.data.type);break;case"getBuffers":getBuffers();break;case"clear":clear()}};';
      a.appendChild(c);
      this.tn = !0
    }
    z.zi(this.j);
    b = z.Hi(am);
    this.j.Ia(b.innerHTML);
    b = z.L("gdwr-modal-dialog-title", this.j.f());
    z.O(b, "visibility", "hidden");
    this.R = new window.Audio;
    z.F(z.L("gdwr-voicenote-add-button"), "click", this.xh, !1, this);
    z.F(z.L("gdwr-voicenote-dialog-close"), "click", this.hf, !1, this);
    this.Wp = z.R.a()
      .bind(this, this.Gs);
    this.Rp = z.R.a()
      .bind(this, this.ap);
    z.R.a();
    this.Qp = z.R.a()
      .bind(this, this.jq);
    this.Vm = z.R.a()
      .bind(this, this.ql);
    this.Um = z.R.a()
      .bind(this, this.pl);
    z.R.a();
    this.Vp = z.R.a()
      .bind(this, this.Zq);
    this.Wm = z.R.a()
      .bind(this, this.$q);
    this.Tp = z.R.a()
      .bind(this, this.Uq);
    this.Sp = z.R.a()
      .bind(this, this.nl);
    z.F(z.L("round-mic-record"), "click", this.Vp, !1, this);
    z.F(z.L("round-micplayback-circle-img"), "click", this.Tp, !1, this);
    z.F(z.L("round-playback-canvas"), "mouseup", this.Sp, !0, this)
  };
  z.f.nc = function () {
    try {
      this.j.D(!0);
      this.Dl();
      var a = z.L("thVNload-bar", this.j.f());
      z.O(a, "display", "none");
      null == this.sb && (window.AudioContext = window.AudioContext || window.webkitAudioContext, window.navigator.Em = window.navigator.Em || window.navigator.webkitGetUserMedia, window.URL = window.URL || window.webkitURL, this.R.onended = this.Yl);
      if (null == this.N) {
        var b = z.L("round-playback-canvas");
        b.width = b.height;
        this.N = b.getContext("2d");
        this.N.translate(b.height / 2, b.height / 2);
        this.N.rotate(-.5 * Math.PI);
        this.N.translate(.5
          , .5);
        this.Dc = b.height - 20;
        this.Ra(this.N, "#efefef", 4, 1, this.Dc);
        b = z.L("thMicLevelCanvas");
        this.Gd = b.getContext("2d");
        this.R.onended = this.Um
      }
      null == this.R.onended && (this.R.onended = this.Um)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.hf = function () {
    try {
      this.re && Gm(this);
      if (this.Yi) {
        var a = z.L("round-micplayback-circle-img");
        z.R.a()
          .ta(a, "stop");
        z.R.a()
          .X(a, "play");
        Jm(this)
      }
      this.j.D(!1);
      this.qe = this.sb = null
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.xh = function () {
    try {
      if (this.re) try {
        var a = z.L("round-mic-record-circle");
        if (null != a) {
          var b = z.L("round-mic-record-circle-img");
          if (null != b) {
            (0, window.clearTimeout)(this.lj);
            this.lc = 60;
            var c = z.L("round-countdownclock");
            if (null !== c) {
              var d = Math.floor(this.lc / 60)
                , e = this.lc - 60 * d
                , g = d + ":" + e;
              10 > e && (g = d + ":0" + e);
              z.we(c, g)
            }
            this.qe.stop();
            this.N.clearRect(-300, -300, 800, 800);
            this.Ra(this.N, "#efefef", 4, 1, this.Dc);
            this.re = !1;
            this.sb.close();
            this.sb = null;
            z.R.a()
              .ta(a, "recording");
            z.R.a()
              .ta(b, "recording");
            Hm();
            var k =
              z.L("voicenote-message-spacer");
            z.we(k, "");
            var l = z.L("thRecorderPH");
            z.O(l, "display", "none")
          }
        }
      } catch (m) {
        z.R.a()
          .b(m)
      }
      if (this.Sk) {
        var n = z.L("thVNload-bar", this.j.f());
        z.O(n, "display", "block");
        this.qe.exportMonoWAV(z.R.a()
          .bind(this, this.xq))
      }
    } catch (p) {
      z.R.a()
        .b(p)
    }
  };
  z.f.$q = function () {
    try {
      var a = z.L("round-countdownclock");
      60 == this.lc && z.O(a, "display", "block");
      --this.lc;
      var b = 100 / 60 * this.lc
        , c = Math.floor(this.lc / 60)
        , d = this.lc - 60 * c
        , e = c + ":" + d;
      10 > d && (e = c + ":0" + d);
      this.N.clearRect(-300, -300, 800, 800);
      this.Ra(this.N, "#efefef", 4, 1, this.Dc);
      0 < b && 100 > b && this.Ra(this.N, "#FD3269", 4, b / 100, this.Dc);
      z.we(a, e);
      0 == this.lc ? Gm(this) : this.lj = (0, window.setTimeout)(this.Wm, 1E3)
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.Uq = function () {
    try {
      var a = z.L("round-micplayback-circle-img");
      z.R.a()
        .I(a, "play") ? (z.R.a()
          .ta(a, "play"), z.R.a()
          .X(a, "stop"), Lm(this)) : (z.R.a()
          .ta(a, "stop"), z.R.a()
          .X(a, "play"), Jm(this))
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Zq = function () {
    try {
      this.re ? Gm(this) : Im(this)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.xq = function (a) {
    try {
      if (this.hh) {
        var b = z.L("voicenote-message-spacer");
        z.we(b, z.U.a()
          .K("voicenote_nomic"))
      } else(window.URL || window.webkitURL)
        .createObjectURL(a), z.R.a()
        .je.oc(a, z.R.a()
          .bind(this, this.sr))
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.sr = function () {
    try {
      this.j.D(!1), this.sb = null
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.jq = function (a) {
    try {
      if (this.hh) {
        var b = z.L("voicenote-message-spacer");
        z.we(b, z.U.a()
          .K("voicenote_nomic"))
      } else {
        0 < this.R.src.length && (window.URL || window.webkitURL)
          .revokeObjectURL(this.R.src);
        var c = (window.URL || window.webkitURL)
          .createObjectURL(a);
        this.R.src = c
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.ap = function () {
    try {
      this.sb.createBufferSource()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Dl = function () {
    try {
      z.O(z.si(this.j), "left", "0px"), z.O(z.si(this.j), "top", "0px"), z.O(z.si(this.j), "width", "100%"), z.O(z.si(this.j), "height", "140px")
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Gc = function () {
    try {
      for (var a = window.document.querySelectorAll("[data-voicenote-dialog]"), b = 0; b < a.length; b++) {
        var c = a[b].getAttribute("data-voicenote-dialog");
        a[b].innerText = z.U.a()
          .K(c)
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Gs = function (a) {
    try {
      var b = this.sb.createMediaStreamSource(a);
      this.qe = new window.Recorder(b);
      this.$e = this.sb.createAnalyser();
      this.$e.Ut = .3;
      this.$e.st = 1024;
      b.connect(this.$e);
      this.qe.record();
      this.re = !0;
      this.qe.getBuffers(this.Rp);
      this.dj = new window.Uint8Array(this.$e.fftSize);
      this.$e.getByteTimeDomainData(this.dj);
      this.rm()
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.ql = function () {
    try {
      if (this.Yi) {
        var a = (100 / this.R.duration * this.R.currentTime)
          .toFixed();
        this.N.clearRect(-300, -300, 800, 800);
        this.Ra(this.N, "#efefef", 4, 1, this.Dc);
        0 < a && 100 > a && this.Ra(this.N, "#555555", 4, a / 100, this.Dc);
        this.Xi = (0, window.setTimeout)(this.Vm, 250)
      }
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.pl = function () {
    try {
      var a = z.L("round-micplayback-circle-img");
      z.R.a()
        .ta(a, "stop");
      z.R.a()
        .X(a, "play");
      Jm(this);
      (0, window.clearTimeout)(this.Xi);
      this.Xi = 0;
      this.N.clearRect(-300, -300, 800, 800);
      this.Ra(this.N, "#efefef", 4, 1, this.Dc)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.nl = function (a) {
    try {
      if (!this.re) {
        var b = z.P(a.currentTarget)
          , c = {};
        c.x = a.clientX - b.x;
        c.y = a.clientY - b.y;
        var d = z.eg(a.currentTarget);
        a = {};
        a.x = d.width / 2;
        a.y = d.height / 2;
        var e = 2 * Math.PI
          , g = (Math.atan2(c.y - a.y, c.x - a.x) + e) % e
          , k = (0, window.parseInt)(g / e * 100)
          , k = k + 25;
        99 < k && (k -= 100);
        this.R.currentTime = k / 100 * this.R.duration;
        var l = z.L("round-micplayback-circle-img");
        z.R.a()
          .ta(l, "play");
        z.R.a()
          .X(l, "stop");
        Lm(this)
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.rm = function () {
    try {
      if (this.re)
        if (250 < this.Vg) this.hh = !0, this.Gd.clearRect(-200, -200, 400, 400), Gm(this);
        else {
          (0, window.requestAnimationFrame)(z.R.a()
            .bind(this, this.rm));
          this.$e.getByteTimeDomainData(this.dj);
          var a = this.dj[0];
          this.me < a - 127 && 129 < a ? this.me += 20 : this.me > a - 127 && (this.Gd.clearRect(-200, -200, 400, 400), this.me--);
          this.Gd.globalAlpha = .5;
          this.Gd.beginPath();
          this.Gd.arc(67, 67, 46 + this.me, 0, 2 * Math.PI, !1);
          this.Gd.arc(67, 67, 20, 0, 2 * Math.PI, !0);
          this.Gd.fillStyle = "#FD3269";
          this.Gd.fill();
          128 == a ? this.Vg++ :
            this.Vg = 0
        }
      else this.Gd.clearRect(-200, -200, 400, 400)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Ra = function (a, b, c, d, e) {
    d = Math.min(Math.max(0, d || 1), 1);
    e = (e - c) / 2;
    a.beginPath();
    a.arc(0, 0, e, 0, 2 * Math.PI * d, !1);
    a.strokeStyle = b;
    a.lineCap = "round";
    a.lineWidth = c;
    a.stroke()
  };
  z.Df("FixedToolbar");
})(__textHelp__);
//@ sourceURL=chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_FixedToolbar.js
