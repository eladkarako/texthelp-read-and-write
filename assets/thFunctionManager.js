this.thFunctionhManager = function () {
  this._service = null, this._tracker = null, this._license = null, this._timing = [], this._firstChromeStart = !0, this.initialise = function () {
    try {
      this._service = analytics.getService("RW4GC"), this._tracker = this._service.getTracker("UA-83720712-1"), chrome.storage.managed.get(null, function (t) {
        this._adminPreferences = t, void 0 == this._adminPreferences.accountType && (this._adminPreferences.accountType = "Google"), this._oauthFactory = new texthelp.RW4GC.AuthenticatorFactory(this._adminPreferences.accountType), texthelp.RW4GC.authenticator = this._oauthFactory.authenticator, texthelp.RW4GC.authenticator.getEmail(!1, function (t) {
          if (null == t && this._firstChromeStart) {
            var e = [];
            return e.push("chrome started"), e.push("noauthentication@texthelp.event.com"), e.push("texthelp.event.com"), void(this._firstChromeStart = !1)
          }
          if (0 == t.length && this._firstChromeStart) {
            var e = [];
            return e.push("chrome started"), e.push("noauthentication@texthelp.event.com"), e.push("texthelp.event.com"), void(this._firstChromeStart = !1)
          }
          texthelp.RW4GC.authenticator.getLicense(t, function (t) {
            if (this._firstChromeStart) {
              var e = [];
              e.push("chrome started"), e.push(t.Email), e.push(t.Email.split("@")[1]), this.onSendEvent(e), this._firstChromeStart = !1
            }
          }.bind(this))
        }.bind(this))
      }.bind(this))
    } catch (t) {
      console.log(t)
    }
  }, this.onAuthenticate = function () {
    try {
      texthelp.RW4GC.authenticator.getEmail(!0, function (t) {
        texthelp.RW4GC.authenticator.getLicense(t, function (t) {}.bind(this))
      }.bind(this))
    } catch (t) {
      console.log(t)
    }
  }, this.onBarShown = function (t) {
    try {
      var e = texthelp.RW4GC.authenticator._license
        , o = [];
      o.push(t[0]), o.push(e), this.onSendAppView(o);
      var o = [];
      o.push("toolbar down"), o.push(e.Email), o.push(e.Email.split("@")[1]), this.onSendEvent(o);
      var o = [];
      o.push(t[1]), o.push(e.Email), o.push(e.Email.split("@")[1]), this.onSendEvent(o)
    } catch (i) {
      console.log(i)
    }
  }, this.onOpenTab = function (t, e, o) {
    chrome.tabs.create({
      url: t
      , index: o.index
    })
  }, this.openForm = function (t, e, o, i) {
    var n = document.createElement("form");
    if (n.action = e, n.method = t, n.setAttribute("method", "post"), n.enctype = "application/x-www-form-urlencoded", n.target = i || "_blank", o)
      for (var s in o) {
        var h = document.createElement("textarea");
        h.name = s, h.value = "object" == typeof o[s] ? JSON.stringify(o[s]) : o[s], n.appendChild(h)
      }
    n.style.display = "none", document.body.appendChild(n), n.submit()
  }, this.onOpenPracticeReadingAloud = function (t) {
    this.openForm("POST", "https://fluency.texthelp.com/ReadWrite", t)
  }, this.onSaveBarSettings = function (t) {
    chrome.storage.sync.set({
      texthelpbar: t
    })
  }, this.onLoadBarSettings = function (t, e) {
    chrome.storage.sync.get({
      texthelpbar: t
    }, function (o) {
      null == o.texthelpbar && (o.texthelpbar = t), e({
        type: "1757FROM_BGRW4G_FUNCTION"
        , method: "LoadBarSettings"
        , parameters: {
          texthelpbar: o.texthelpbar
        }
      })
    })
  }, this.onSaveDialogSettings = function (t) {
    chrome.storage.sync.set({
      texthelpdialogs: t
    })
  }, this.onLoadDialogSettings = function (t, e) {
    chrome.storage.sync.get({
      texthelpdialogs: t
    }, function (o) {
      null == o.texthelpdialogs && (o.texthelpdialogs = t), e({
        type: "1757FROM_BGRW4G_FUNCTION"
        , method: "LoadDialogSettings"
        , parameters: {
          texthelpdialogs: o.texthelpdialogs
        }
      })
    })
  }, this.onStartTiming = function (t) {
    null != this._tracker && (t[1].indexOf("@") > -1 && (t[1] = thHash.hashEmail(t[1])), this._timing[t[0]] = this._tracker.startTiming(t[0].toLowerCase(), t[1].toLowerCase(), t[2].toLowerCase()), console.log("onStartTiming: " + t[0] + ":" + t[1] + ":" + t[2]))
  }, this.onEndTiming = function (t) {
    if (null != this._tracker) {
      console.log("onEndTiming: " + t[0]);
      try {
        this._timing[t[0]].send()
      } catch (e) {
        console.log("End Timing Error: " + e.message)
      }
    }
  }, this.onNewLicense = function (t) {
    try {
      var e = [];
      if (null !== this._license) return;
      this._license = t, t.Valid && !t.Trial ? (e.push("premium"), e.push(t.Email.toLowerCase()), e.push(t.Email.split("@")[1].toLowerCase()), e.push(1), this.onSendEvent(e)) : !t.Valid && !t.Trial || "Group" == t.UserType && !t.Valid ? (e.push("freemium"), e.push(t.Email.toLowerCase()), e.push(t.Email.split("@")[1].toLowerCase()), e.push(1), this.onSendEvent(e)) : (e.push("trial"), e.push(t.Email.toLowerCase()), e.push(t.Email.split("@")[1].toLowerCase()), e.push(1), this.onSendEvent(e)), e.length = 0, e.push(t.UserType.toLowerCase()), e.push(thHash.hashEmail(t.Email)), e.push(t.Email.split("@")[1]), e.push(1), this.onSendEvent(e)
    } catch (o) {
      console.log(o)
    }
  }, this.onSendAppView = function (t) {
    null != this._tracker && (this.onNewLicense(t[1]), console.log("SendAppView: " + t[0].toLowerCase()), this._tracker.sendAppView(t[0].toLowerCase()))
  }, this.onSendEvent = function (t) {
    if (null != this._tracker) {
      if (t[1].indexOf("@") > -1 && (t[1] = thHash.hashEmail(t[1])), t[0].indexOf("https://docs.google.com/document/") >= 0 && t[0].indexOf("/edit") >= 0 ? t[0] = "https://docs.google.com/document/" + thHash.hash(t[0].split("https://docs.google.com/document/")[1]) : t[0].indexOf("https://docs.google.com/presentation/") >= 0 && t[0].indexOf("/edit") >= 0 ? t[0] = "https://docs.google.com/presentation/" + thHash.hash(t[0].split("https://docs.google.com/presentation/")[1]) : t[0].indexOf("onenote.officeapps.live.com/") >= 0 ? t[0] = "https://onenote.officeapps.live.com/onenote/" + thHash.hash(t[0].split("onenote.officeapps.live.com/")[1]) : t[0].indexOf("word-edit.officeapps.live.com/") >= 0 && (t[0] = "https://word-edit.officeapps.live.com/word/" + thHash.hash(t[0].split("word-edit.officeapps.live.com/")[1])), 4 == t.length) return this._tracker.sendEvent(t[0].toLowerCase(), t[1].toLowerCase(), t[2].toLowerCase(), t[3]), void console.log("SendEvent: " + t[0].toLowerCase() + ":" + t[1].toLowerCase() + ":" + t[2].toLowerCase() + ":" + t[3]);
      console.log("SendEvent: " + t[0].toLowerCase() + ":" + t[1].toLowerCase() + ":" + t[2].toLowerCase()), this._tracker.sendEvent(t[0].toLowerCase(), t[1].toLowerCase(), t[2].toLowerCase())
    }
  }
}, this.thFunctions = new this.thFunctionhManager, this.thFunctions.initialise();
