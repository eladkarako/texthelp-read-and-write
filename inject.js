function injectBarAll(e) {
  return void 0 == e && (e = !1), e ? (this._injected = !1, window.postMessage({
    type: "1757FROM_PAGERW4G"
    , command: "trackEvent"
    , settings: {
      category: "FromWebReader"
      , action: "ScreenshotReaderOnlyInjected"
      , label: window.location.host
    }
  }, "*"), void window.postMessage({
    method: "thCheckExtension"
    , type: "1757FROM_PAGERW4G"
    , payload: {
      ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
    }
  }, "*")) : (window.postMessage({
    type: "1757FROM_PAGERW4G"
    , command: "trackEvent"
    , settings: {
      category: "FromWebReader"
      , action: "WebReaderBarInjected"
      , label: window.location.host
    }
  }, "*"), injectBar(), void chrome.extension.sendRequest({
    method: "getLang"
  }, function (e) {
    var t = document.getElementById("thSpeechStreamTBPlaceHolder");
    null != t && t.setAttribute("lang", e.payload)
  }))
}

function injectButton() {
  var e = document.getElementById("thSpeechStreamButtonPlaceHolder")
    , t = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfFJREFUeNpitN7g1WAnIlhvIsjLYCLIx0Bl0MgItOA/jMfFzAy2hBqWffv7l6Hv9iMGFnTBQ2/egzEllp15/4lhxr2nYPNY8LkA2TJ7UQEGYFAyyHNx4HX1oocvwHpggIVY725/8RaMRdnZwL5Ct+z6569gV7/++QtFLwupYQsyAN0ykA/XPn2FVT0TJREJsoyX24bh1T9lnGpYyDWch5Wbod2slsFQRJfhxbeXDOffXGL48vsrdXxgK2nJsMZ1PthwEJDgEmcIUw6g3AcgV+frpDF4yrlgyIUp+TNsf7SH4TnQN2T5AOTaBQ6TsRoOszxJPYq8IMoDunqydQc4KPABkOWq/ErEWwBSPB/o6jBlf6KDEeQYouIAZChM8eHnxxlW3dvIoMT+kiFG2ZGBh9OYgZNDG2dQghIBSA9WCySBwVBlWAh2/aq7GxlWAw2GRZyStBjD9x9XwZiFWRBsCSgfgNjIIF8nFbsFIJvBqeHxHobco3vwBsWfv+8ZPn89AsYcbEoM3FwmDNxAn8GSbZJGNMO8G0shFoBSgKGIHjCjfAEaXEFyvvjx6x4Yv/+0mYGTXQvsK5BDV93dALEAlANhXqIE/Pv3neHr97NgzMYqxZCoqEV+UUEI/Pr9jMFSgMLCjhgwagFRFjTS0PxGgAADAOdWxIBsledgAAAAAElFTkSuQmCC"
    , o = !1;
  if (null === e) {
    window.location.href;
    e = document.createElement("div");
    var e = document.createElement("div");
    e.setAttribute("id", "thSpeechStreamButtonPlaceHolder"), e.setAttribute("style", "z-index:9999999;float:right;background-position: center;width:33px;height:32px;position:fixed;top:0%;left:80%;text-shadow: 0px 3px 8px #2A2A2A;background-repeat: no-repeat;border-bottom: 2px solid #A09BC3;border-left: 2px solid #A09BC3;border-right: 2px solid #A09BC3;background-color: #F5F5F5;padding-right: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;");
    var n = document.createElement("div");
    n.setAttribute("id", "thDragMeSpeechStreamButtonPlaceHolder"), n.setAttribute("style", "position: absolute;cursor:e-resize;height: 32px;width: 10px;top: 0px;left: 0px;background-position-y: 3px;background-color: #dadada;background-repeat: no-repeat;background-image:url(" + chrome.extension.getURL("/v195/rwimgs/DragIcon.png") + ");border-bottom-left-radius: 8px;");
    var i = document.createElement("div");
    i.setAttribute("id", "thLogoSpeechStreamButtonPlaceHolder"), i.setAttribute("style", "position: absolute;height: 24px;width: 25px;top: 3px;left: 13px;background-image:url(data:image/png;base64," + t + ");"), o ? i.setAttribute("onclick", 'alert("Website does not support Read&Write For Google Chrome.")') : i.setAttribute("onclick", 'window.postMessage({ type: "1757FROM_PAGERW4G", "command": "connect"}, "*");');
    var a = document.createElement("div");
    a.setAttribute("style", "position: absolute;height: 24px;width: 10px;top: 8px;left: 40px;background-repeat: no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QkbDgwIQIz9igAAAClJREFUKM9jYCAT/IdiByxyakjyBDXhVIxNE1bFjDg0EVKD06ZRT5MFABifIEtJuA7iAAAAAElFTkSuQmCC);");
    var r = document.createElement("script");
    r.type = "text/javascript", r.src = chrome.extension.getURL("/buttonSettings.js"), r.id = "buttonSpeechStreamJS", e.appendChild(r), e.appendChild(n), e.appendChild(i), document.body.appendChild(e)
  }
}

function ejectBar() {
  var e = !1;
  if (void 0 !== textHelp.thWebReaderModule.config.canEject && textHelp.thWebReaderModule.config.canEject && (e = !0), e) {
    var t = document.getElementById("th-RW4GC-toolbar")
      , o = document.getElementById("thSpeechStreamTBPlaceHolder");
    if (null === o) return void(null !== t && (t.style.display = "flex"));
    null !== t && (t.style.display = "none"), window.postMessage({
      type: "1757FROM_BGRW4G"
      , method: "onStopSpeech"
    }, "*"), window.postMessage({
      type: "1757FROM_BGRW4G"
      , method: "removePrediction"
    }, "*")
  }
}

function rwGoogleKeyUpListener() {}

function ejectButton() {
  this._enabledButton && ejectBar()
}

function equals(e, t) {
  if (!e || !t) return !1;
  var o = new RegExp(["^", e.toString(), "$"].join(""), "i");
  return t.match(o)
}

function onDefault() {
  "interactive" === document.readyState ? chrome.extension.sendRequest({
    type: "1362FROM_PAGE"
    , command: "isDefaultOn"
  }, onRequest) : onDefault()
}

function doOAuth() {
  chrome.extension.sendRequest({
    type: "1757FROM_PAGERW4G"
    , method: "getOAuthTokenSilent"
  }, onOAuth)
}

function onOAuth(e, t, o) {
  if (this._enabledButton) return null == e.payload ? void injectBar() : void injectBarLicense()
}

function injectBarLicense() {
  chrome.extension.sendRequest({
    type: "1757FROM_PAGERW4G"
    , method: "trialValidation"
    , user: "NA"
  }, onInjectBarLicense)
}

function onInjectBarLicense(e, t, o) {
  return void 0 === e && (e = [], e.payload = ""), void 0 === e.payload || "" == e.payload ? void injectBar() : e.payload.HideUnlicensed && 0 == e.payload.Valid && "group" == e.payload.UserType.toLowerCase() ? void chrome.runtime.sendMessage({
    method: "thChromeOptionsChanged"
    , enabled: !1
  }) : e.payload.HideUnlicensed && 0 == e.payload.Valid && "single" == e.payload.UserType.toLowerCase() ? void chrome.runtime.sendMessage({
    method: "thChromeOptionsChanged"
    , enabled: !1
  }) : void injectBar()
}

function injectBar() {
  restore_options()
}

function restore_options() {
  chrome.storage.sync.get({
    enabledRW4GC: !0
  }, function (e) {
    this._enabledButton = e.enabledRW4GC, e.enabledRW4GC && injectBarCheckForRW()
  })
}

function injectBarCheckForRW() {
  chrome.extension.sendRequest({
    type: "1757FROM_PAGERW4G"
    , command: "isRWRunning"
  }, injectBarNoRW)
}

function injectBarNoRW(e, t, o) {
  e.running || this._autoInjected && (this._autoInjected = !1, void 0 !== textHelp.thWebReaderModule.config.auto && 0 == textHelp.thWebReaderModule.config.auto) || injectParserByConfig()
}

function injectParserByConfig() {
  try {
    void 0 == textHelp.thWebReaderModule.config && (textHelp.thWebReaderModule.config = {}), void 0 == textHelp.thWebReaderModule.config.frameElement ? window.self == window.top && onInjectParser(document) : document.getElementById(textHelp.thWebReaderModule.config.frameElement) && onInjectParser(document)
  } catch (e) {
    console.log(e)
  }
}

function onInjectParser(e) {
  var t = document.getElementById("thWebReaderPlaceHolder");
  if (null === t) {
    t = document.createElement("div");
    var o = document.getElementsByTagName("body")[0]
      , t = document.createElement("div");
    t.setAttribute("id", "thWebReaderPlaceHolder"), t.setAttribute("class", "thWebReaderPlaceHolder"), t.setAttribute("data-root", chrome.extension.getURL("/")), void 0 !== textHelp.thWebReaderModule.config.appendStart ? textHelp.thWebReaderModule.config.appendStart ? o.appendChild(t) : o.insertBefore(t, o.childNodes[0]) : o.appendChild(t);
    var n = document.createElement("script");
    n.type = "text/javascript", n.src = chrome.extension.getURL("/assets/install.js"), n.id = "thJquery", t.appendChild(n);
    var i = document.createElement("script");
    i.type = "text/javascript", i.src = chrome.extension.getURL("/textHelp_WebReader.js"), i.id = "webReaderModule", i.setAttribute("data-root", chrome.extension.getURL("/")), t.appendChild(i), chrome.extension.sendRequest({
      method: "getLang"
    }, function (e) {
      var t = document.getElementById("webReaderModule");
      t.setAttribute("lang", e.payload)
    })
  }
}

function onExtensionMessage(e, t, o) {
  if ("connected" === e.command) {
    var n = document.getElementById("th-RW4GC-toolbar");
    if (null == n) return this._injected = !0, this._rwebooksx = e.settingcookies.g_fBarPosX, this._rwebooksy = e.settingcookies.g_fBarPosY, this._rwIsClickHoverOn = e.isClickHoverOn, void injectBarAll(e.blockList);
    if ("flex" === n.style.display || "" == n.style.display) n.style.display = "none";
    else {
      n.style.display = "flex";
      var i = [];
      i.push("Web"), i.push(window.location.href), window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "BarShown"
        , parameters: i
      }, "*")
    }
    return;
    var n
  }
}

function onMessage() {
  void 0 != event.source && void 0 != event.data && event.source == window && "1757FROM_PAGERW4G" == event.data.type && ("connect" == event.data.command ? chrome.extension.sendRequest(event.data, onRequest) : "ejectBar" == event.data.command ? ejectBar() : chrome.extension.sendRequest(event.data, function (e) {
    window.postMessage(e, "*")
  }))
}

function updatePageActionIcon() {}

function onRequest(e, t, o) {
  if ("thGetType" != e.method) {
    if ("thToggleVisibility" == e.method) {
      var n = !0
        , i = document.getElementById("kix-appview");
      null === i && (n = !1);
      var i = document.getElementById("docs-editor");
      null === i && (n = !1);
      var i = document.getElementById("docs-header");
      null === i && (n = !1), this._visible ? window.postMessage({
        type: "1757FROM_BGRW4G"
        , method: "thSetVisibility"
        , visibility: "false"
      }, "*") : window.postMessage({
        type: "1757FROM_BGRW4G"
        , method: "thSetVisibility"
        , visibility: "true"
      }, "*"), this._visible = !this._visible
    }
    if ("connected" == e.command) {
      this._rwebooksx = e.settingcookies.g_fBarPosX, this._rwebooksy = e.settingcookies.g_fBarPosY, this._rwIsClickHoverOn = e.isClickHoverOn;
      var a = document.getElementById("thLogoSpeechStreamButtonPlaceHolder");
      a.setAttribute("onclick", 'window.postMessage({ type: "1757FROM_PAGERW4G", "command": "ejectBar"}, "*");$rw_stopSpeech();'), injectBarAll()
    }
    "onGetthRWFGSettings" == e.method && window.postMessage(e, "*"), "thToolbarVisibility" == e.method && ("true" == e.visible ? (injectButton(), this._visible = !0) : this._visible = !1)
  }
}
var textHelp = textHelp || {};
textHelp.thWebReaderModule = {}
  , function () {
    this.injectManager = function () {
      this.m_currentConfig = null, this.m_config = {
        parserSiteMap: {
          "https://docs.google.com/document/*edit": {
            auto: !0
          }
          , "https://docs.google.com/presentation/*edit": {
            auto: !0
          }
          , "https://*.sharepoint.com/*.docx": {
            frameElement: "WACViewPanel_EditingElement"
            , auto: !0
          }
          , "https://onedrive.live.com/edit.aspx*app=Word": {
            frameElement: "WACViewPanel_EditingElement"
            , auto: !0
          }
          , "https://*.sharepoint.com/*Notebooks": {
            frameElement: "WACViewPanel_EditingElement"
            , auto: !0
          }
          , "https://*onedrive.live.com/edit.aspx*app=OneNote": {
            frameElement: "WACViewPanel_EditingElement"
            , auto: !0
          }
          , "https://*word-edit.officeapps.live.com": {
            frameElement: "WACViewPanel_EditingElement"
            , auto: !0
          }
          , "https://*onenote.officeapps.live.com/o/onenoteframe.aspx": {
            frameElement: "WACViewPanel_EditingElement"
            , auto: !0
          }
          , "https://reading.texthelp.com/ReadWrite": {
            auto: !0
          }
          , "https://fluency.texthelp.com/ReadWrite": {
            auto: !0
          }
          , "default": {
            appendStart: !0
            , canEject: !0
            , auto: !1
          }
        }
      }, this.getConfig = function () {
        try {
          if (null !== this.m_currentConfig) return this.m_currentConfig;
          var e = !1
            , t = this.m_config.parserSiteMap;
          for (var o in t) {
            if ("default" == o) break;
            var n = window.location.href.substring(0, o.length);
            if (n === o) this.m_currentConfig = t[o], e = !0;
            else {
              n = window.location.toString();
              var i = o.split("*");
              if (i.length > 1) {
                var a = !0;
                for (var r in i) {
                  var d = n.indexOf(i[r]);
                  if (d == -1) {
                    a = !1;
                    break
                  }
                  n = n.substr(d + i[r].length)
                }
                a && (n = window.location.toString(), this.m_currentConfig = t[o], e = !0)
              }
            }
          }
          return e === !1 && (this.m_currentConfig = t["default"], e = !0), this.m_currentConfig
        } catch (s) {
          textHelp.webreaderapi.HelpersSingleton.getInstance()
            .logError(s)
        }
      }
    }
  }.apply(textHelp.thWebReaderModule), textHelp.thWebReaderModule.injectionManager = new textHelp.thWebReaderModule.injectManager, textHelp.thWebReaderModule.config = textHelp.thWebReaderModule.injectionManager.getConfig(), this._visible = !0, this._pageType = "", this._rwebooksx = null, this._rwebooksy = null, this._rwIsClickHoverOn = !0, this._injected = !1, this._enabledButton = !0, this._autoInjected = !0, chrome.extension.onMessage.addListener(onExtensionMessage), window.addEventListener("message", this.onMessage), chrome.extension.onRequest.addListener(onRequest), setTimeout(injectBarLicense(), 100);
