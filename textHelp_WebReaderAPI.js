(function (z) {
  var Fj = function (a) {
    if (1 == a.nodeType) return z.bg(a);
    var b = z.ma(a.zm)
      , c = a;
    a.targetTouches && a.targetTouches.length ? c = a.targetTouches[0] : b && a.Sa.targetTouches && a.Sa.targetTouches.length && (c = a.Sa.targetTouches[0]);
    return new z.H(c.clientX, c.clientY)
  };
  z.X = function (a, b) {
    var c = Fj(a)
      , d = Fj(b);
    return new z.H(c.x - d.x, c.y - d.y)
  };
  z.W = function () {
    try {
      this.ad = new Gj, null == z.I("thSpeechStreamTBPlaceHolder") && (this.p = new Hj), this.ic = null
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  var Ij = function (a) {
    try {
      if (null === a.p.o()) throw Error("Could not get a reference to the current parser.");
      a.p.o()
        .stop();
      a.ad.stop()
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.Jj = function () {};
  z.S = function () {
    this.ze = {};
    this.oo = [];
    this.Ll = [];
    this.df = z.R.a()
      .bind(this, this.Kd);
    window.addEventListener("message", this.df, !1)
  };
  z.R = function () {
    this.to = "thWebReaderPlaceHolder";
    this.hn = this.je = null;
    this.Xg = !1;
    this.Wk = this.$c = null;
    this.jn = "";
    this.kn = !1
  };
  z.Kj = function (a, b) {
    for (var c = a.length; c--;)
      if (a[c] === b) return !0;
    return !1
  };
  z.Lj = function (a, b) {
    function c(a) {
      if (3 == a.nodeType) d.push(a);
      else
        for (var b = 0, k = a.childNodes.length; b < k; ++b) c(a.childNodes[b])
    }
    var d = [];
    c(b);
    return d
  };
  z.Mj = function () {
    var a = z.R.a();
    try {
      return a.kn
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  var Hj = function () {
    try {
      this.Da = null;
      var a = !1
        , b = z.fj.a()
        .Ab()
        .highlighterSiteMap
        , c;
      for (c in b) {
        if ("default" == c) break;
        var d = window.location.toString()
          .substring(0, c.length);
        if (d === c) {
          this.Da = b[c];
          var e = z.uf.a();
          z.Hf(e, b[c].parser, this.ol, this);
          a = !0
        } else {
          var d = window.location.toString()
            , g = c.split("*");
          if (1 < g.length) {
            var k = !0
              , l;
            for (l in g) {
              var m = d.indexOf(g[l]);
              if (-1 == m) {
                k = !1;
                break
              }
              d = d.substr(m + g[l].length)
            }
            k && (d = window.location.toString(), this.Da = b[c], e = z.uf.a(), z.Hf(e, b[c].parser, this.ol, this), a = !0)
          }
        }
      }!1 ===
        a && (this.Da = b["default"], e = z.uf.a(), z.Hf(e, b["default"].parser, this.ol, this))
    } catch (n) {
      z.R.a()
        .b(n)
    }
  };
  z.Nj = function () {
    this.an = "ScanSoft Emily_Full_22kHz"
  };
  var Pj = function () {
    try {
      throw Error("Not implemented");
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  var Gj = function () {
    try {
      this.Qf = [], this.eh = !1, this.Yb = [], this.bd = []
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  var Qj = function () {
    try {
      this.bn = [], this.R = this.bl = this.al = null, this.cj = -1, this.Zi = this.Eb = null, this.jh = this.cl = !1, this.$c = null, this.Xm = z.fj.a()
        .Ab()
        .charMap, z.S.a()
        .k("onVoices", this.Gn, this)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  var Rj = function (a, b) {
    try {
      for (var c = "", d = "", e = 0; e < b.length; e++) d = b.charCodeAt(e)
        .toString(), c = void 0 === a.Xm[d] ? c + b.charAt(e) : c + a.Xm[d];
      return c
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  var Sj = function () {
    try {
      this.Ec = null, this.ej = !1, this.Rk = null, this.eh = !1
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.gj = function (a, b, c, d, e) {
    try {
      this.path = b;
      this.du = c;
      this.yn;
      this.jm;
      this.Jn;
      this.filename;
      this.speed = e;
      (0, window.decodeURIComponent)(d) === d && (d = (0, window.encodeURIComponent)(d));
      this.eu = d;
      try {
        "/" != a.charAt(a.length - 1) && (a += "/"), "/" != b.charAt(b.length - 1) && (b += "/")
      } catch (g) {}
      this.Bo = a + b + "?userName=" + c + "&voiceName=" + d + "&speedValue=" + e
    } catch (k) {
      window.console.log(k)
    }
  };
  var Tj = function (a, b, c) {
    return new window.Promise(function (d, e) {
      var g = new window.XMLHttpRequest;
      c = (0, window.encodeURIComponent)(c);
      var k = "filename=" + b + "&text=" + c;
      g.open("POST", a);
      g.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
      g.send(k);
      g.onload = function () {
        if (200 == this.status) {
          var a = JSON.parse(this.response);
          null == a ? e(Error("Mp3 Request response is empty.")) : d(a)
        } else e(Error(this.statusText))
      };
      g.onerror = function () {
        e(Error("Error converting text.\r\n" +
          g.statusText))
      }
    })
  };
  var Uj = function (a, b) {
    window.console.log("statusChecker - " + b);
    var c = Vj(b);
    try {
      c.then(function (c) {
        window.console.log("File Status: " + c);
        100 == c ? a.jm(a.yn) : (a.Jn(Math.round(c)), (0, window.setTimeout)(function () {
          try {
            Uj(a, b)
          } catch (c) {
            a.ik(c)
          }
        }, 1E3))
      }, function (b) {
        a.ik(Error("StatusFile Error: " + b.message))
      })
    } catch (d) {
      a.ik(d)
    }
  };
  var Vj = function (a) {
    return new window.Promise(function (b, c) {
      var d = new window.XMLHttpRequest;
      window.console.log("requestStatusFile - " + a);
      d.open("GET", a, !0);
      d.send();
      d.onload = function () {
        if (200 == this.status) {
          var a = JSON.parse(this.response);
          window.console.log(a);
          null == a ? c(Error("Response is empty.")) : "" != a.error && " " != a.error ? c(Error(a.error)) : b(a.progress)
        } else window.console.log("Error - " + this.status), c(Error(this.statusText))
      };
      d.onerror = function () {
        window.console.log("Error - " + this.status);
        c(Error("Error converting text.\r\n" +
          d.statusText))
      }
    })
  };
  z.Lf.prototype.Ob = z.ca(9, function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      return this.t.Ob()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  });
  z.Lf.prototype.Pi = z.ca(8, function () {
    try {
      if (null === this.t) throw Error("The WebReaderAPI has not been created");
      return this.t.Pi()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  });
  z.Lf.prototype.Kd = z.ca(3, function () {});
  z.bc.prototype.zm = z.ca(0, function () {
    return this.Sa
  });
  z.Wj = {};
  z.kb(function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.nn = null;
    this.Rf = 0;
    this.mh = !1
  }.prototype, z.Zb.prototype);
  z.f = z.W.prototype;
  z.f.T = function () {
    try {
      this.ad.T();
      var a = z.I(z.R.a()
        .Df());
      null !== a && "true" !== a.installed && (window.document.documentElement.setAttribute("xmlns:thRWGDns", ""), a.setAttribute("installed", "true"), z.S.a()
        .k("onthAPIWord", this.Hr, this), z.S.a()
        .k("onthAPIStop", this.ir, this), this.nn = new Sj)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.oc = function (a, b) {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .oc(a, b)
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.hd = function () {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      Ij(this);
      z.R.a();
      this.ic = this.p.o()
        .Og();
      if (null === this.ic) window.texthelp.RW4GC.thToolbarStoreInstance.onSpeechStopped();
      else if (0 === this.ic.length) window.texthelp.RW4GC.thToolbarStoreInstance.onSpeechStopped();
      else this.ad.hd(this.ic, 1), window.texthelp.RW4GC.thToolbarStoreInstance.onSpeech()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Xn = function (a) {
    try {
      Ij(this), this.mh = !0, this.ad.hd(a, 1, !1)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.stop = function () {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .stop();
      this.ad.stop()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.forward = function () {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .stop();
      this.ad.stop();
      if (this.mh) this.mh = !1;
      else if (this.ic = this.p.o()
        .ge(!1), null === this.ic) window.texthelp.RW4GC.thToolbarStoreInstance.onSpeechStopped();
      else if (0 === this.ic.length) window.texthelp.RW4GC.thToolbarStoreInstance.onSpeechStopped();
      else this.ad.hd(this.ic, 1)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ws = function () {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.pause = function () {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.ad.pause()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Vo = function (a) {
    0 !== a.length && (this.p.o()
      .ha(), 100 < a.length && (a.length = 100), window.open("http://google.com/search?q=" + (0, window.encodeURIComponent)(a.join(" "))))
  };
  z.f.Uo = function () {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      var a = null;
      this.p.o()
        .Ff() ? this.p.o()
        .xd(this.Vo.bind(this)) : (a = this.p.o()
          .bb(), 0 !== a.length && (this.p.o()
            .ha(), window.open("http://google.com/search?q=" + (0, window.encodeURIComponent)(a.join(" ")))))
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Bs = function () {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Cs()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Fs = function (a) {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Ff() && this.p.o()
        .xd(a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.ls = function (a) {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Ai(a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Ni = function (a) {
    try {
      this.stop();
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Ni(a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Pc = function (a, b, c, d) {
    try {
      this.stop();
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Pc(a, b, c, d)
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.Bf = function (a, b, c) {
    try {
      this.stop();
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Bf(a, b, c)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Bb = function (a) {
    try {
      return void 0 == a && (a = !1), this.ad.Bb(a)
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Hr = function (a) {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      "start" !== a[0] && this.p.o()
        .qb(a[0])
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.ir = function () {
    try {
      this.p.o()
        .stop(), this.mh ? this.mh = !1 : (this.ic = this.p.o()
          .ge(!0), null === this.ic ? (this.p.o()
            .Ge(), window.texthelp.RW4GC.thToolbarStoreInstance.onSpeechStopped()) : 0 === this.ic.length ? (this.p.o()
            .Ge(), window.texthelp.RW4GC.thToolbarStoreInstance.onSpeechStopped()) : this.ad.hd(this.ic, 1))
    } catch (a) {
      this.p.o()
        .Ge(), window.texthelp.RW4GC.thToolbarStoreInstance.onSpeechStopped(), z.R.a()
        .b(a)
    }
  };
  z.f.Wj = function () {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Yc("#FFFF00")
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Zh = function () {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Yc("#00FFFF")
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Di = function () {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Yc("#ADFF2F")
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Aj = function () {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .Yc("#FF00FF")
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.rc = function () {
    try {
      Ij(this);
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      this.p.o()
        .rc()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.gp = function () {
    try {
      return z.R.a()
        .Ig()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.hp = function () {
    try {
      return z.R.a()
        .je.Bb()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.xe = function () {
    try {
      Ij(this), this.p.o()
        .xe()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ye = function () {
    try {
      Ij(this), this.p.o()
        .ye()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Pi = function () {
    try {
      return this.nn.isEnabled()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.bb = function () {
    try {
      var a = this.p.o()
        .bb();
      return 0 === a.length ? "" : a[0]
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Ob = function () {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      return this.p.o()
        .Ob()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.ec = function () {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      return this.p.o()
        .ec()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Pb = function () {
    try {
      if (null === this.p.o()) throw Error("Could not get a reference to the current parser.");
      return this.p.o()
        .Pb()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.u("textHelp.webreaderapi.WebReaderAPI", z.W);
  z.W.prototype.initialise = z.W.prototype.T;
  z.W.prototype.addVoiceNote = z.W.prototype.oc;
  z.W.prototype.speakSelection = z.W.prototype.hd;
  z.W.prototype.speakWord = z.W.prototype.Xn;
  z.W.prototype.stop = z.W.prototype.stop;
  z.W.prototype.getVoices = z.W.prototype.Bb;
  z.W.prototype.yellowHighlighter = z.W.prototype.Wj;
  z.W.prototype.getStaticOptionsDialog = z.W.prototype.gp;
  z.W.prototype.getStaticVoices = z.W.prototype.hp;
  z.W.prototype.startSpeechRecognition = z.W.prototype.xe;
  z.W.prototype.stopSpeechRecognition = z.W.prototype.ye;
  z.W.prototype.isSpeechRecognitionRunning = z.W.prototype.Pi;
  z.W.prototype.getWord = z.W.prototype.bb;
  z.W.prototype.getParserName = z.W.prototype.Ob;
  z.W.prototype.getBarConfigFromParser = z.W.prototype.ec;
  z.W.prototype.getPredictionPosition = z.W.prototype.Pb;
  z.f = z.Jj.prototype;
  z.f.Og = function () {
    throw Error("Not implemented");
  };
  z.f.Ff = function () {
    throw Error("Not implemented");
  };
  z.f.bb = function () {
    throw Error("Not implemented");
  };
  z.f.getSelection = function () {
    throw Error("Not implemented");
  };
  z.f.qb = function () {
    throw Error("Not implemented");
  };
  z.f.Ge = function () {
    throw Error("Not implemented");
  };
  z.f.Pc = function () {
    throw Error("Not implemented");
  };
  z.f.oc = function () {
    throw Error("Not implemented");
  };
  z.f.stop = function () {
    throw Error("Not implemented");
  };
  z.f.X = function (a, b) {
    z.R.a()
      .X(a, b)
  };
  z.f.ta = function (a, b) {
    z.R.a()
      .ta(a, b)
  };
  z.f.I = function (a, b) {
    return z.R.a()
      .I(a, b)
  };
  z.f.Sc = function (a) {
    return z.R.a()
      .Sc(a)
  };
  z.f.pd = function (a, b, c) {
    z.R.a()
      .pd(a, b, c)
  };
  z.ga(z.S);
  z.f = z.S.prototype;
  z.f.Kd = function (a) {
    try {
      if (void 0 != a.source && void 0 != a.data && a.source == window && "1757FROM_BGRW4G" == a.data.type) {
        "thSetVisibility" == a.data.method && z.S.a()
          .l("onBarVisibilityChanged", a.data.visibility);
        "trialValidation" == a.data.method && (z.R.a()
          .Fh(a.data.payload), z.S.a()
          .l("onLicenseReceived", a.data.payload));
        "thPrediction" == a.data.method && z.S.a()
          .l("onPredictionChanged", a.data.payload);
        "onGetthRWFGSettings" == a.data.method && z.S.a()
          .l("onGetSettingsChanged", a.data.payload);
        "onthRWFGPopup" == a.data.method &&
          z.S.a()
          .l("onMessagePopup", a.data.payload);
        "thGetVoices" == a.data.method && z.S.a()
          .l("onVoices", a.data.payload);
        "onCommand" == a.data.method && (0, window.alert)(a.data.payload);
        if ("onGetOAuthToken" == a.data.method) {
          var b = [];
          null != a.data.payload && (b = a.data.payload, z.R.a()
            .Fh(a.data.payload));
          z.S.a()
            .l("onGetOAuthToken", b)
        }
        "onGetOAuthTokenSilent" == a.data.method && (b = [], null != a.data.payload && (b = a.data.payload, z.R.a()
            .Fh(a.data.payload)), z.S.a()
          .l("onGetOAuthTokenSilent", b));
        "onCollectHighlightsWeb" == a.data.method &&
          z.S.a()
          .l("onCollectHighlightsWeb", a.data.payload);
        "onVocabWeb" == a.data.method && z.S.a()
          .l("onVocabWeb", a.data.payload);
        "onAuthenticate" == a.data.method && z.S.a()
          .l("onAuthenticate", a.data.payload)
      }
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.k = function (a, b, c) {
    try {
      if ("string" !== typeof a) throw Error("textHelp.webreaderapi.EventBusSingleton.subscribe's  first parameter 'eventName' should be a string");
      if ("function" !== typeof b) throw Error("textHelp.webreaderapi.EventBusSingleton.subscribe's  first parameter 'callback' should be a function");
      this.ze[a] || (this.ze[a] = []);
      var d = b;
      null !== c && (d = z.R.a()
        .bind(c, b));
      this.ze[a].push(d);
      this.Hs = {
        To: a
        , Fo: this.ze[a].length - 1
      };
      var e = this.Ll.length;
      this.no = {};
      this.Ll[e] = this.Hs;
      return this.oo[e] = this.no
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.l = function (a, b) {
    try {
      if ("string" !== typeof a) throw Error("textHelp.webreaderapi.EventBusSingleton.publish's first parameter 'eventName' should be a string");
      if (!b) throw Error("textHelp.webreaderapi.EventBusSingleton.publish requires a second argument 'data'");
      var c, d;
      if (this.ze[a])
        for (c = 0; c < this.ze[a].length; c++)(d = this.ze[a][c]) && d(b)
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.vf = function (a) {
    try {
      var b = this.Ll[this.oo.indexOf(a)];
      this.ze[b.To][b.Fo] = null
    } catch (c) {
      z.R.a()
        .b(c)
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
  z.u("textHelp.webreaderapi.EventBusSingleton", z.S);
  z.S.prototype.unsubscribe = z.S.prototype.vf;
  z.S.prototype.subscribe = z.S.prototype.k;
  z.S.prototype.publish = z.S.prototype.l;
  z.S.getInst = z.S.prototype.pb;
  z.ga(z.R);
  z.f = z.R.prototype;
  z.f.pb = function () {
    return z.R.a()
  };
  z.f.Hp = function () {
    try {
      return this.Xg
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.cp = function () {
    try {
      var a = this.ia();
      return null == a ? null : a.split("@")[1]
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Nh = function (a) {
    try {
      return Object.keys(a)
        .toString() === Object.keys([])
        .toString() ? 0 : Object.keys(a)
        .length
    } catch (b) {
      return z.R.a()
        .b(b), 0
    }
  };
  z.f.vs = function (a, b) {
    try {
      void 0 == b ? window.postMessage({
        type: "1757FROM_PAGERW4G"
        , method: "trialValidation"
        , user: a
      }, "*") : window.postMessage({
        type: "1757FROM_PAGERW4G"
        , method: "trialValidation"
        , user: a
        , screenScraped: b
      }, "*")
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Df = function () {
    try {
      return this.to
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Fh = function (a) {
    try {
      this.$c = a;
      var b = a.Features;
      this.Wk = {};
      for (a = 0; a < b.length; a++) this.Wk[b[a].FeatureName] = b[a].Enabled
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.wa = function () {
    try {
      return this.$c
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Mb = function () {
    try {
      return this.Wk
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.$ = function () {
    try {
      var a = z.I("thSpeechStreamTBPlaceHolder");
      if (null !== a) return z.I("thSpeechStreamTBPlaceHolder")
        .getAttribute("data-root");
      a = z.I("thWebReaderPlaceHolder");
      return null !== a ? z.I("thWebReaderPlaceHolder")
        .getAttribute("data-root") : null
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Ne = function () {
    try {
      var a = z.I("webReaderModule")
        .getAttribute("lang");
      null == a && (a = z.I("thSpeechStreamTBPlaceHolder")
        .getAttribute("lang"));
      var b = z.fj.a()
        .Ab();
      "undefined" !== typeof b[a] && (b.locale = a);
      return b.locale
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.Uc = function () {
    try {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a, c) {
        return c = 16 * Math.random(), ("y" == a ? c & 3 | 8 : c | 0)
          .toString(16)
      })
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.eo = function (a) {
    return Array.prototype.slice.call(a)
  };
  z.f.bind = function (a, b) {
    return function () {
      return b.apply(a, z.R.a()
        .eo(arguments))
    }
  };
  z.f.b = function (a) {
    window.console.error(a.stack)
  };
  z.f.Pp = function (a) {
    window.console.info(a)
  };
  z.f.X = function (a, b) {
    try {
      if ("string" == typeof a && (a = z.I(a)), a) {
        var c = a.className;
        if (c && 0 < c.length) {
          var d = b.split(" ");
          if (1 === d.length && -1 === (" " + c + " ")
            .lastIndexOf(" " + b + " ")) a.className = a.className + " " + b;
          else {
            for (var e = c.split(" "), g = d.length, k, c = [], l = 0; l < g; l++) k = d[l], -1 === e.indexOf(k) && c.push(k);
            a.className = a.className + " " + (1 < c.length ? c.join(" ") : c[0])
          }
        } else a.className = b
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.ta = function (a, b) {
    try {
      if ("string" == typeof a && (a = z.I(a)), a) {
        var c = a.className;
        if (c && 0 < c.length) {
          for (var d = c.split(" "), e = b.split(" "), g = d.length, k, c = [], l = 0; l < g; l++) k = d[l], -1 === e.indexOf(k) && c.push(k);
          switch (!0) {
          case 1 < c.length:
            a.className = c.join(" ");
            break;
          case 1 == c.length:
            a.className = c[0];
            break;
          case 0 == c.length:
            a.className = ""
          }
        }
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.I = function (a, b) {
    try {
      if (null === a || void 0 == a) return !1;
      if (a.className)
        for (var c = a.className.split(" "), d = b.toUpperCase(), e = 0; e < c.length; e++)
          if (c[e].toUpperCase() == d) return !0;
      return !1
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.Sc = function (a) {
    try {
      if (null === a) return !1;
      var b = [];
      a.className && (b = a.className.split(" "));
      return b
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.pd = function (a, b, c) {
    try {
      this.ta(a, b.toString()), this.X(a, c.toString())
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.trim = function (a) {
    return a.replace(/^\s*([\S\s]*?)\s*$/, "$1")
  };
  z.f.Os = function (a) {
    var b = /\w/i
      , c = a.match(b)
      , c = a.indexOf(c);
    0 < c && (a = a.substring(c)
      .replace(/[\u200B]/g, ""));
    a = a.split("")
      .reverse()
      .join("");
    c = a.match(b);
    c = a.indexOf(c);
    0 < c && (a = a.substring(c));
    return a.split("")
      .reverse()
      .join("")
  };
  z.f.$o = function () {
    return this.je
  };
  z.f.Qn = function (a) {
    this.je = a
  };
  z.f.Tn = function (a) {
    this.hn = a
  };
  z.f.Ig = function () {
    return this.hn
  };
  z.f.Ih = function (a) {
    try {
      this.jn = a
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.fp = function () {
    try {
      return this.jn
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Ro = function (a) {
    try {
      return a = a.replace(/\u2019/g, "'"), (0, window.encodeURIComponent)(a)
        .replace(/\-/g, "%2D")
        .replace(/\_/g, "%5F")
        .replace(/\./g, "%2E")
        .replace(/\!/g, "%21")
        .replace(/\~/g, "%7E")
        .replace(/\*/g, "%2A")
        .replace(/\'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.No = function (a) {
    try {
      return (0, window.decodeURIComponent)(a.replace(/\%2D/g, "-")
        .replace(/\%5F/g, "_")
        .replace(/\%2E/g, ".")
        .replace(/\%21/g, "!")
        .replace(/\%7E/g, "~")
        .replace(/\%2A/g, "*")
        .replace(/\%27/g, "'")
        .replace(/\%28/g, "(")
        .replace(/\%29/g, ")"))
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.uo = function (a) {
    try {
      var b = window.document.createElement("div");
      b.appendChild(window.document.createTextNode(a));
      return b.innerHTML
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  z.f.ld = function (a) {
    try {
      return a.replace(/[\\]/g, "\\\\")
        .replace(/[\/]/g, "\\/")
        .replace(/[\b]/g, "\\b")
        .replace(/[\f]/g, "\\f")
        .replace(/[\n]/g, "\\n")
        .replace(/[\r]/g, "\\r")
        .replace(/[\t]/g, "\\t")
        .replace(/[\"]/g, '\\"')
        .replace(/\\'/g, "\\'")
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.W = function (a, b) {
    try {
      var c = z.R.a()
        .wa();
      return z.R.a()
        .Mb()[a] ? !0 : (null !== c.Redirect && b && window.open(c.Redirect, "_exthtb")
          .focus(), !1)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Il = function (a) {
    try {
      this.kn = a
    } catch (b) {
      z.R.a()
        .b(b)
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
  z.f.ia = function () {
    try {
      return null == this.$c ? null : this.$c.Email
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.fireEvent = function (a, b) {
    var c;
    if (a.ownerDocument) c = a.ownerDocument;
    else if (9 == a.nodeType) c = a;
    else throw Error("Invalid node passed to fireEvent: " + a.id);
    if (a.dispatchEvent) {
      var d = "";
      switch (b) {
      case "click":
      case "mousedown":
      case "mouseup":
        d = "MouseEvents";
        break;
      case "focus":
      case "change":
      case "blur":
      case "select":
        d = "HTMLEvents";
        break;
      default:
        throw "fireEvent: Couldn't find an event class for event '" + b + "'.";
      }
      c = c.createEvent(d);
      c.initEvent(b, "change" == b ? !1 : !0, !0);
      c.Is = !0;
      a.dispatchEvent(c, !0)
    } else a.fireEvent &&
      (c = c.createEventObject(), c.Is = !0, a.fireEvent("on" + b, c))
  };
  z.f.Ns = function (a, b) {
    b = b.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&");
    return a.replace(new RegExp("^[" + b + "]+|[" + b + "]+$", "g"), "")
  };
  z.f.Lm = function (a) {
    var b = a.getBoundingClientRect()
      .top;
    a = a.getBoundingClientRect()
      .bottom;
    return 0 <= b && a <= window.innerHeight
  };
  z.f.fo = function (a) {
    return "en_US" == a || "en-US" == a || "ENGLISH_US" == a ? "en-US" : "en-GB" == a || "en_GB" == a || "ENGLISH_GB" == a ? "en-GB" : "FRENCH" == a || "fr" == a || "FRAN�AIS" == a ? "fr" : "fr-CA" == a || "fr_CA" == a ? "fr-CA" : "PORTUGUESE" == a || "pt" == a ? "pt" : "PORTUGU�S (BRASILEIRA)" == a || "pt-BR" == a || "pt_BR" == a ? "pt-BR" : "MALAYSIAN" == a || "ms" == a ? "ms" : "SPANISH" == a || "es" == a || "ESPA�OL" == a ? "es" : "es-419" == a || "es_419" == a ? "es-419" : "en"
  };
  z.u("textHelp.webreaderapi.HelpersSingleton", z.R);
  z.R.prototype.isAuthenticated = z.R.prototype.Hp;
  z.R.prototype.getPlaceHolder = z.R.prototype.Df;
  z.R.prototype.getRootLocation = z.R.prototype.$;
  z.R.prototype.getGuid = z.R.prototype.Uc;
  z.R.prototype.logError = z.R.prototype.b;
  z.R.prototype.toArray = z.R.prototype.eo;
  z.R.prototype.bind = z.R.prototype.bind;
  z.R.prototype.addClassName = z.R.prototype.X;
  z.R.prototype.removeClassName = z.R.prototype.ta;
  z.R.prototype.hasClassName = z.R.prototype.I;
  z.R.prototype.getClassName = z.R.prototype.vt;
  z.R.prototype.changeClassName = z.R.prototype.pd;
  z.R.prototype.trim = z.R.prototype.trim;
  z.R.prototype.trimPunctuation = z.R.prototype.Os;
  z.R.prototype.trimChars = z.R.prototype.Ns;
  z.R.prototype.getAPI = z.R.prototype.$o;
  z.R.prototype.setAPI = z.R.prototype.Qn;
  z.R.prototype.getOptionsDialog = z.R.prototype.Ig;
  z.R.prototype.setOptionsDialog = z.R.prototype.Tn;
  z.R.prototype.getLicense = z.R.prototype.wa;
  z.R.prototype.setLicense = z.R.prototype.Fh;
  z.R.prototype.getFeatures = z.R.prototype.Mb;
  z.R.prototype.retrieveLicense = z.R.prototype.vs;
  z.R.prototype.CheckLicense = z.R.prototype.W;
  z.R.prototype.setPredictionSequence = z.R.prototype.Ih;
  z.R.prototype.getPredictionSequence = z.R.prototype.fp;
  z.R.prototype.encodeString = z.R.prototype.Ro;
  z.R.prototype.HTMLEscape = z.R.prototype.uo;
  z.R.prototype.JSONEscape = z.R.prototype.ld;
  z.R.prototype.decodeString = z.R.prototype.No;
  z.R.getInst = z.R.prototype.pb;
  z.R.prototype.getIDFromDoc = z.R.prototype.ia;
  z.R.prototype.getDomainFromDoc = z.R.prototype.cp;
  z.R.prototype.sturdyArrayLength = z.R.prototype.Nh;
  z.R.prototype.fireEvent = z.R.prototype.fireEvent;
  z.R.prototype.isScrolledIntoView = z.R.prototype.Lm;
  z.R.prototype.toLang = z.R.prototype.fo;
  Hj.prototype.o = function () {
    try {
      if (null === this.xl) throw Error("The parser is currently null.");
      return this.xl
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  Hj.prototype.ol = function () {
    try {
      this.xl = new window.textHelp.parsers[z.Wj.yj], this.xl.Hh(this.Da)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.u("textHelp.webreaderapi.ParserFactory", Hj);
  Hj.prototype.getParser = Hj.prototype.o;
  z.ga(z.Nj);
  z.f = z.Nj.prototype;
  z.f.Re = function () {
    try {
      return this.an
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Kh = function (a) {
    try {
      this.an = a
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Ig = function () {
    try {
      return z.R.a()
        .Ig()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Bb = function () {
    try {
      return z.R.a()
        .je.Bb()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.pb = function () {
    try {
      return z.Nj.a()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.u("textHelp.webreaderapi.SettingsSingleton", z.Nj);
  z.Nj.prototype.get_Voice = z.Nj.prototype.Re;
  z.Nj.prototype.set_Voice = z.Nj.prototype.Kh;
  z.Nj.prototype.getOptionsDialog = z.Nj.prototype.Ig;
  z.Nj.prototype.getVoices = z.Nj.prototype.Bb;
  z.Nj.getInst = z.Nj.prototype.pb;
  z.f = Pj.prototype;
  z.f.T = function () {
    try {
      throw Error("Not implemented");
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Bb = function () {
    try {
      throw Error("Not implemented");
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.hd = function () {
    try {
      throw Error("Not implemented");
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.stop = function () {
    try {
      throw Error("Not implemented");
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.pause = function () {
    try {
      throw Error("Not implemented");
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f = Gj.prototype;
  z.f.T = function () {
    try {
      this.eh || (this.Qf.speechserver = new Qj, this.Qf.speechserver.T(), this.eh = !0)
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Bb = function (a) {
    try {
      if (!this.eh) return null;
      void 0 == a && (a = !1);
      a && (this.Yb = [], this.bd = []);
      if (0 < z.R.a()
        .Nh(this.Yb)) return this.Yb;
      for (var b in this.Qf)
        if (this.Qf.hasOwnProperty(b)) {
          var c = this.Qf[b].Bb()
            , d;
          for (d in c) c.hasOwnProperty(d) && (this.Yb[d] = c[d], this.bd[d] = this.Qf[b])
        }
      return this.Yb
    } catch (e) {
      z.R.a()
        .b(e)
    }
  };
  z.f.hd = function (a, b, c) {
    try {
      0 == z.R.a()
        .Nh(this.Yb) && this.Bb();
      var d = this.bd[z.Nj.a()
        .Re()];
      if (void 0 === d) {
        var e = z.R.a()
          .Ne()
          , g = z.fj.a()
          .Ab();
        z.Nj.a()
          .Kh(g[e].speechoptions.voice);
        d = this.bd[z.Nj.a()
          .Re()]
      }
      d.hd(a, b, c)
    } catch (k) {
      z.R.a()
        .b(k)
    }
  };
  z.f.stop = function () {
    try {
      if (0 != z.R.a()
        .Nh(this.bd)) {
        var a = this.bd[z.Nj.a()
          .Re()];
        if (void 0 === a) {
          var b = z.R.a()
            .Ne()
            , c = z.fj.a()
            .Ab();
          z.Nj.a()
            .Kh(c[b].speechoptions.voice);
          a = this.bd[z.Nj.a()
            .Re()]
        }
        null !== a && a.stop()
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.pause = function () {
    try {
      if (0 != z.R.a()
        .Nh(this.bd)) {
        var a = this.bd[z.Nj.a()
          .Re()];
        if (void 0 === a) {
          var b = z.R.a()
            .Ne()
            , c = z.fj.a()
            .Ab();
          z.Nj.a()
            .Kh(c[b].voice);
          a = this.bd[z.Nj.a()
            .Re()]
        }
        null !== a && a.pause()
      }
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.w(Qj, Pj);
  z.f = Qj.prototype;
  z.f.T = function () {
    try {
      z.R.a()
        .$();
      z.R.a()
        .Df();
      var a = !1;
      void 0 == a && (a = !1);
      var b = z.fj.a()
        .Ab();
      this.al = b.serversettings.speechserver;
      this.bl = b.serversettings.user;
      var c = '{ "url":"' + (this.al + "user.html?query=getVoices&userName=" + this.bl) + '","refresh":"' + a + '"}'
        , c = z.ld(c);
      window.postMessage({
        method: "thGetVoices"
        , type: "1757FROM_PAGERW4G"
        , payload: c
      }, "*");
      this.Zi = z.R.a()
        .bind(this, this.Ao)
    } catch (d) {
      z.R.a()
        .b(d)
    }
  };
  z.f.Bb = function () {
    try {
      return this.bn
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.hd = function (a, b, c) {
    try {
      void 0 == c && (c = !0);
      this.jh = this.cl = !1;
      null === this.R && (this.R = z.I("thWebAudio"));
      this.cj = 0;
      var d = this.al + "index.html";
      b = "";
      for (var e = 0; e < a.length; e++) {
        var g = a[e];
        b = " " === g || "" === g ? b + " " : c ? b + ("<bookmark mark='" + e + "'/>" + Rj(this, a[e]) + " ") : b + Rj(this, a[e])
      }
      b += "<bookmark mark='" + e + "'/>";
      z.S.a()
        .l("onthAPIWord", ["start"]);
      var k = "text=" + (0, window.encodeURIComponent)(b) + "&userName=" + (0, window.encodeURIComponent)(this.bl) + "&voiceName=" + (0, window.encodeURIComponent)(z.T.a()
          .v()
          .speechoptions.voice) +
        "&speedValue=" + (0, window.encodeURIComponent)(z.T.a()
          .v()
          .speechoptions.speed) + "&usePron=Y"
        , l = new z.ud;
      z.F(l, "complete", this.hr, !1, this);
      var m = new z.Tc;
      m.set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      l.send(d, "POST", k, m);
      null === this.$c && (this.$c = z.R.a()
        .wa());
      a = [];
      a.push("on speech");
      a.push(this.$c.Email);
      a.push(this.$c.Email.split("@")[1]);
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "SendEvent"
        , parameters: a
      }, "*");
      a[0] = "speech request timer";
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "StartTiming"
        , parameters: a
      }, "*")
    } catch (n) {
      z.R.a()
        .b(n)
    }
  };
  z.f.stop = function () {
    try {
      if (null !== this.R && null !== this.Eb) {
        this.cl = !0;
        this.jh = !1;
        this.Eb.length = 0;
        try {
          this.R.pause(), this.R.currentTime = 0, this.R.src = ""
        } catch (a) {}
      }
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.pause = function () {
    try {
      null !== this.R && 0 !== this.R.currentTime && (this.jh ? (this.R.play(), this.jh = !1) : (this.R.pause(), this.jh = !0))
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.f.Ao = function () {
    try {
      if (null !== this.Eb)
        if (this.R.ended) this.R.pause(), this.R.currentTime = 0, this.R.src = "", this.Zi.length = 0, z.S.a()
          .l("onthAPIStop", []);
        else {
          if (0 < this.Eb.length && this.Eb[this.cj] < this.R.currentTime) {
            var a = [];
            a.push(this.cj);
            z.S.a()
              .l("onthAPIWord", a);
            this.cj++
          }(0, window.setTimeout)(this.Zi, 50)
        }
    } catch (b) {
      z.R.a()
        .b(b)
    }
  };
  z.f.Gn = function (a) {
    try {
      for (var b = a.response.split("&voiceName"), c, d = a = "", e = 0; e < b.length; e++) c = b[e].split("="), a = c[1].split("&voice"), a = (0, window.decodeURIComponent)(a[0])
        .replace(/\+/gi, " "), d = (0, window.decodeURIComponent)(c[2])
        .replace(/\+/gi, " "), this.bn[a] = d;
      z.S.a()
        .l("onRefreshedVoices", [])
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  z.f.hr = function (a) {
    try {
      var b = [];
      b.push("speech request timer");
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "EndTiming"
        , parameters: b
      }, "*");
      var c = z.Id(a.currentTarget)
        , d = c.indexOf("&mp3")
        , e = c.substring(c.indexOf("xml=") + 4, d)
        , g = c.substring(d + 5, c.length);
      if ("error" == e || "error" == g) throw this.stop(), Error("Speech request error. Error response from the server.");
      if ("busy" == e || "busy" == g) throw this.stop(), Error("Speech request error. Speech server busy.");
      try {
        this.R.src = g;
        var k =
          new z.ud;
        z.F(k, "complete", this.fs, !1, this);
        k.send(e, "POST")
      } catch (l) {
        z.R.a()
          .b(l)
      }
    } catch (m) {
      z.R.a()
        .b(m)
    }
  };
  z.f.fs = function (a) {
    try {
      var b;
      var c = a.target;
      try {
        b = c.C ? c.C.responseXML : null
      } catch (d) {
        z.id(c.w, "Can not get responseXML: " + d.message), b = null
      }
      this.Eb = [];
      if (b && b.documentElement && b.documentElement.childNodes) {
        var e = b.documentElement.childNodes;
        for (b = a = 0; b < e.length; b++) 1 == e[b].nodeType && (this.Eb[a] = (0, window.parseFloat)(e[b].getAttribute("time") / 1E3), 0 < a && this.Eb[a] <= this.Eb[a - 1] && (this.Eb[a] = this.Eb[a - 1] + .01), a += 1);
        .1 > this.Eb[this.Eb.length - 1] && (this.Eb.length = 0)
      }
      this.cl || (window.setTimeout(this.Zi, 50)
        , this.R.play())
    } catch (g) {
      z.R.a()
        .b(g)
    }
  };
  Sj.prototype.isEnabled = function () {
    try {
      return this.ej
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  Sj.prototype.start = function () {
    try {
      var a = this;
      this.Ec = new window.webkitSpeechRecognition;
      this.Ec.jt = !0;
      this.Ec.Dt = !0;
      var b = z.T.a()
        .v()
        .language.services;
      this.Ec.lang = z.R.a()
        .fo(b);
      this.Ec.onstart = function () {};
      this.Ec.onresult = function (a) {
        for (var b = "", c = "", k = a.resultIndex; k < a.results.length; ++k) a.results[k].isFinal ? b += a.results[k][0].transcript : c += a.results[k][0].transcript;
        0 < b.length ? (a = [], a.push(b + " "), z.S.a()
          .l("onSpeechRecognitionResponse", a)) : 0 < c.length && (a = [], a.push(c + " "), z.S.a()
          .l("onSpeechRecognitionInterimResponse"
            , a))
      };
      this.Ec.onerror = function () {};
      this.Ec.onend = function () {
        a.ej && a.Ec.start()
      };
      this.ej = this.eh = !0;
      this.Ec.start()
    } catch (c) {
      z.R.a()
        .b(c)
    }
  };
  Sj.prototype.stop = function () {
    try {
      this.ej = !1, this.Ec.stop()
    } catch (a) {
      z.R.a()
        .b(a)
    }
  };
  z.u("textHelp.webreaderapi.SpeechRecognition", Sj);
  Sj.prototype.isEnabled = Sj.prototype.isEnabled;
  Sj.prototype.start = Sj.prototype.start;
  Sj.prototype.stop = Sj.prototype.stop;
  z.gj.prototype.im = function (a, b, c, d, e) {
    var g = this.Bo;
    this.jm = c;
    this.Jn = d;
    this.ik = e;
    this.filename = a;
    var k = this;
    Tj(g, a, b)
      .then(function (a) {
        var b = a.statusFileLocation;
        "" != b ? (k.yn = a.mp3Location, (0, window.setTimeout)(function () {
          try {
            Uj(k, b)
          } catch (a) {
            e(a)
          }
        }, 1E3)) : e(Error("Status file returned empty."))
      }, function (a) {
        e(a)
      })
  };
  z.u("textHelp.RW4GC.AudioMaker", z.gj);
  z.gj.prototype.convert = z.gj.prototype.im;
  z.Df("WebReaderAPI");
})(__textHelp__);
//@ sourceURL=chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_WebReaderAPI.js
