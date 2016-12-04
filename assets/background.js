function updateChromeOptions(e) {
  chrome.storage.sync.get({
    enabledRW4GC: !0
  }, function (t) {
    try {
      window.enabled = t.enabledRW4GC, window.enabled && e ? chrome.browserAction.setIcon({
        path: chrome.extension.getURL("/assets/24.png")
      }) : chrome.browserAction.setIcon({
        path: chrome.extension.getURL("/assets/24disabled.png")
      })
    } catch (o) {
      console.log(o)
    }
  })
}

function getDisabledSites() {
  var e = new XMLHttpRequest;
  e.open("GET", "http://rw.texthelp.com/block/list/check", !0), e.onreadystatechange = function () {
    var e = "";
    4 == this.readyState && 200 == this.status && (e = this.getResponseHeader("Content-Type"), "application/json" == e.substr(0, 16) && (disabledSites = JSON.parse(this.responseText.toString())))
  }, e.send()
}

function onPageAction(e) {
  onPageActionHandler(e, !1)
}

function onPageActionHandler(e, t) {
  window.enabled && texthelp.RW4GC.authenticator.getEmail(!0, function (t) {
    texthelp.RW4GC.authenticator.getLicense(t, function (t) {
      if (!(t.HideUnlicensed && 0 == t.Valid && "group" == t.UserType.toLowerCase() || t.HideUnlicensed && 0 == t.Valid && "single" == t.UserType.toLowerCase())) {
        for (var o = !1, n = e.url, s = 0; s < disabledSites.length; s++) n.indexOf(disabledSites[s]) != -1 && (o = !0), n.indexOf("docs.google.com/presentation") != -1 && (o = !1);
        chrome.tabs.sendMessage(e.id, {
          type: "1757FROM_BGRW4G"
          , command: "connected"
          , settingcookies: settingsCookiePosition
          , isClickHoverOn: getClickHoverOn()
          , forceInject: e.url
          , blockList: o
        })
      }
    }.bind(this))
  }.bind(this))
}

function authTokenCallback(e, t) {
  if (void 0 != e) {
    for (var o = !1, n = t[1], s = 0; s < disabledSites.length; s++) n.indexOf(disabledSites[s]) != -1 && (o = !0), n.indexOf("docs.google.com/presentation") != -1 && (o = !1);
    chrome.tabs.sendMessage(t[0], {
      type: "1757FROM_BGRW4G"
      , command: "connected"
      , settingcookies: settingsCookiePosition
      , isClickHoverOn: getClickHoverOn()
      , forceInject: t[1]
      , blockList: o
    })
  }
}

function onStorageChange(e, t) {
  try {
    if (void 0 != e.thRWFGSettings && void 0 != e.thRWFGSettings.newValue) {
      var o = {
        thRWFGSettings: e.thRWFGSettings.newValue
      };
      eachTab(function (e, t) {
        chrome.tabs.sendRequest(e.id, {
          method: "onGetthRWFGSettings"
          , type: "1757FROM_BGRW4G"
          , payload: o
        })
      })
    }
  } catch (n) {
    alert("Couldn't update settings for all tabs. Exception:" + n)
  }
}

function getAuthTokenCallback(e, t) {
  t({
    method: "onGetOAuthToken"
    , type: "1757FROM_BGRW4G"
    , payload: e
  })
}

function getAuthTokenCallbackSilent(e, t) {
  t({
    method: "onGetOAuthTokenSilent"
    , type: "1757FROM_BGRW4G"
    , payload: e
  })
}

function eachTab(e) {
  chrome.windows.getAll(null, function (t) {
    for (var o = 0; o < t.length; o++) chrome.tabs.getAllInWindow(t[o].id, function (n) {
      for (var s = 0; s < n.length; s++) e(n[s], t[o])
    })
  })
}

function stringStartsWith(e, t) {
  return e.slice(0, t.length) == t
}

function stringEndsWith(e, t) {
  return "" == t || e.slice(-t.length) == t
}

function getQAAuthTokenCallbackSilent(e, t) {
  try {
    texthelp.RW4GC.authenticator.getEmail(!1, function (e) {
      if (null != e) {
        if (stringEndsWith(e, "@qaheroes.com") && stringStartsWith(e, "chromepc"));
        else if ("smores01@scary.docsplustesting.com" != e) return;
        onPageActionHandler(t, !0), chrome.tabs.sendRequest(t.id, {
          method: "thGetType"
        })
      }
    }.bind(this))
  } catch (o) {
    console.log(o)
  }
}

function escapeJSON(e) {
  return e.replace(/[\\]/g, "\\\\")
    .replace(/[\/]/g, "\\/")
    .replace(/[\b]/g, "\\b")
    .replace(/[\f]/g, "\\f")
    .replace(/[\n]/g, "\\n")
    .replace(/[\r]/g, "\\r")
    .replace(/[\t]/g, "\\t")
    .replace(/[\"]/g, '\\"')
    .replace(/\\'/g, "\\'")
}

function writeVocabDoc(e, t) {
  var o = t[0].words
    , n = t[0].locale
    , s = (t[0].user, 'https://rwgoogle-webservices-4.texthelp.com/v1.11.0/vocab?json={"t":"5","i":"f","g":"t","u":"rwforgoogle","e":"WYn4Wx7Vf2","b":[');
  "fr" != n && "pt" != n && "es" != n || (s = 'https://webservices-us-4.texthelp.com/v1.11.0/vocabHTML?json={"t":"5","i":"f","g":"t","u":"rwforgoogle","e":"WYn4Wx7Vf2","b":[');
  for (var i = 0; i < o.length; i++) s += '"' + o[i] + '"', i < o.length - 1 && (s += ", ");
  s += '],"l":"' + n + '"}';
  var a = new XMLHttpRequest;
  a.params = t, a.open("POST", s, !0), a.onreadystatechange = function () {
    if (4 == this.readyState && 200 == this.status) {
      var o = JSON.parse(this.response);
      if (t[0].response = o, void 0 !== o.service) return void writeVocabHTMLResponse(e, t);
      writeVocabResponse(e, t)
    }
  }, a.send()
}

function oddOrEven(e) {
  return 1 & e ? "odd" : "even"
}

function writeVocabHTMLResponse(e, t) {
  var o = t[0].response.words
    , n = t[0].translations
    , s = "<!DOCTYPE html><html><head><style>";
  s += 'p {padding-top: 10px;}\r\nh1,th {font-family: "Open Sans", sans-serif; font-size: 1em;}\r\ntable {width: 100%;}\r\n.oddrow {background-color: #99ccff;}\r\n.evenrow {background-color: #ffffff;}\r\nh1 {text-align:center;}\r\n.VocabWord {font-family: "Open Sans", sans-serif; width:17%;}\r\n.VocabMeaning {font-family: "Open Sans", sans-serif; width:35%;}\r\n.VocabSymbol {font-family: "Open Sans", sans-serif; width:16%;}\r\n.VocabNotes {font-family: "Open Sans", sans-serif; width:32%;}\r\nth,td {font-family: "Open Sans", sans-serif; padding:5px;}\r\n.wordContainer,.BoldText {font-weight:bold; font-family: "Open Sans", sans-serif;}', s += "</style></head><body>", s += '<h1 class="vocabTitle">' + n.title + '</h1><table id="vocabTable">', s += "<tr>", s += '  <th class="VocabWord">' + n.heading + "</th>", s += '  <th class="VocabMeaning">' + n.meaning + "</th>", s += '  <th class="VocabSymbol">' + n.symbol + "</th>", s += '  <th class="VocabNotes">' + n.notes + "</th>", s += "</tr>";
  for (var i = 0; i < o.length; i++) {
    s += '<tr class="' + oddOrEven(i + 1) + 'row">', s += '   <td class="wordContainer">' + o[i].word + "</td>", s += '   <td class="meaningContainer">', s += o[i].definition, s += "   </td>", s += '   <td class="picContainer">';
    for (var a = 0; a < o[i].symbols.length; a++) s += '<img src="' + o[i].symbols[a] + '" /><br />';
    s += "   </td>", s += '   <td class="notesContainer">&nbsp;</td>', s += "</tr>"
  }
  s += "</body></html>";
  var r = '--rw4g\nContent-Type: application/json; charset=UTF-8\n\n{"title": "' + n.docTitle + '", "description": "Read&Write for Google Chrome™"}\n--rw4g\nContent-Type: text/html\n\n' + s + "\n--rw4g--\n"
    , c = new XMLHttpRequest;
  c.open("POST", "https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart&convert=true", !0), c.setRequestHeader("Content-type", 'multipart/related; boundary="rw4g"'), c.setRequestHeader("Authorization", "Bearer " + e.token), c.sendResponse = t[1], c.onreadystatechange = function () {
    4 == this.readyState && 200 == this.status && this.sendResponse({
      method: "onVocabWeb"
      , type: "1757FROM_BGRW4G"
      , payload: JSON.parse(this.response)
        .alternateLink
    })
  }, c.send(r)
}

function writeVocabResponse(e, t) {
  var o = t[0].response.words
    , n = t[0].translations
    , s = "<!DOCTYPE html><html><head><style>";
  s += 'p {padding-top: 10px;}\r\nh1,th {font-family: "Open Sans", sans-serif; font-size: 1em;}\r\ntable {width: 100%;}\r\n.oddrow {background-color: #99ccff;}\r\n.evenrow {background-color: #ffffff;}\r\nh1 {text-align:center;}\r\n.VocabWord {font-family: "Open Sans", sans-serif; width:17%;}\r\n.VocabMeaning {font-family: "Open Sans", sans-serif; width:35%;}\r\n.VocabSymbol {font-family: "Open Sans", sans-serif; width:16%;}\r\n.VocabNotes {font-family: "Open Sans", sans-serif; width:32%;}\r\nth,td {font-family: "Open Sans", sans-serif; padding:5px;}\r\n.wordContainer,.BoldText {font-weight:bold; font-family: "Open Sans", sans-serif;}', s += "</style></head><body>", s += '<h1 class="vocabTitle">' + n.title + '</h1><table id="vocabTable">', s += "<tr>", s += '  <th class="VocabWord">' + n.heading + "</th>", s += '  <th class="VocabMeaning">' + n.meaning + "</th>", s += '  <th class="VocabSymbol">' + n.symbol + "</th>", s += '  <th class="VocabNotes">' + n.notes + "</th>", s += "</tr>";
  for (var i = 0; i < o.length; i++) {
    s += '<tr class="' + oddOrEven(i + 1) + 'row">', s += '   <td class="wordContainer">' + o[i].word + "</td>", s += '   <td class="meaningContainer">';
    for (var a = 0; a < o[i].inflections.length; a++)
      for (var r = 0; r < o[i].inflections[a].definitions.length; r++) s += o[i].inflections[a].definitions[r].definition + "<br><br>";
    s += "   </td>", s += '   <td class="picContainer">';
    for (var a = 0; a < o[i].inflections.length; a++)
      for (var r = 0; r < o[i].inflections[a].symbols.length; r++) s += '<img src="' + o[i].inflections[a].symbols[r] + '" /><br />';
    s += "   </td>", s += '   <td class="notesContainer">&nbsp;</td>', s += "</tr>"
  }
  s += "</body></html>";
  var c = '--rw4g\nContent-Type: application/json; charset=UTF-8\n\n{"title": "' + n.docTitle + '", "description": "Read&Write for Google Chrome™"}\n--rw4g\nContent-Type: text/html\n\n' + s + "\n--rw4g--\n"
    , l = new XMLHttpRequest;
  l.open("POST", "https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart&convert=true", !0), l.setRequestHeader("Content-type", 'multipart/related; boundary="rw4g"'), l.setRequestHeader("Authorization", "Bearer " + e.token), l.sendResponse = t[1], l.onreadystatechange = function () {
    4 == this.readyState && 200 == this.status && this.sendResponse({
      method: "onVocabWeb"
      , type: "1757FROM_BGRW4G"
      , payload: JSON.parse(this.response)
        .alternateLink
    })
  }, l.send(c)
}

function trackPageView() {
  _gaq.push(["_trackPageview"])
}

function trackEvent(e, t, o) {
  _gaq.push(["_trackEvent", e, t, o])
}

function getClickHoverOn() {
  return void 0 != LOCALSTORAGE.texthelpClickHoverOn && (clickHoverOn = LOCALSTORAGE.texthelpClickHoverOn), clickHoverOn
}

function setClickHoverOn(e) {
  clickHoverOn = e, LOCALSTORAGE.texthelpClickHoverOn = e
}

function loadCookieSettings() {
  settingsCookiePosition = null;
  try {
    null != LOCALSTORAGE.texthelpSWASettingsPopupPositions && (settingsCookiePosition = JSON.parse(LOCALSTORAGE.texthelpSWASettingsPopupPositions))
  } catch (e) {
    console.log("Could not load settings for texthelpSWA. Resetting to default."), settingsCookiePosition = null
  }
  return null == settingsCookiePosition && (settingsCookiePosition = createDefaultSettingsCookiePosition()), settingsCookiePosition
}

function createDefaultSettingsCookiePosition() {
  var e = {
    g_afDivPosX: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    , g_afDivPosY: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2, .2, .2, .2]
    , g_fBarPosX: 1
    , g_fBarPosY: .01
  };
  return settingsCookiePosition = e, settingsCookiePosition
}

function saveCookiePosition(e, t, o, n) {
  var s = null;
  console.log("Saving the setting of popups cookies: " + e + t), settingsCookiePosition.g_afDivPosX = e, settingsCookiePosition.g_afDivPosY = t, settingsCookiePosition.g_fBarPosX = o, settingsCookiePosition.g_fBarPosY = n, s = JSON.stringify(settingsCookiePosition), LOCALSTORAGE.texthelpSWASettingsPopupPositions = s
}

function writeDocumentHighlightsToDocs(e, t) {
  var o = t[0]
    , n = t[2]
    , s = t[3]
    , i = "<!DOCTYPE html><html><head><style>";
  i += "p{padding-bottom:10px}.blue{background-color:#0ff}.pink{background-color:#f0f}.green{background-color:#adff2f}.yellow{background-color:#ff0}.boldText{font-weight:700}", i += "</style></head><body>";
  var a = 0;
  for (a = 0; a < o.highlights.length; a++) "#FFFF00" == o.highlights[a].color && (i += '<p><span class="yellow">'), "#ADFF2F" == o.highlights[a].color && (i += '<p><span class="green">'), "#00FFFF" == o.highlights[a].color && (i += '<p><span class="blue">'), "#FF00FF" == o.highlights[a].color && (i += '<p><span class="pink">'), i += o.highlights[a].text + "</span></p>";
  i += '<br><p><span class="boldText"><a href="' + o.url, i += '">' + o.title + "</a></span></p>", i += '<p><span class="user">' + n + "<br>" + s + "</span></p>", i += "</body></html>";
  var r = '--rw4g\nContent-Type: application/json; charset=UTF-8\n\n{"title": "' + o.docTitle + '", "description": "Read&Write for Google Chrome™"}\n--rw4g\nContent-Type: text/html\n\n' + i + "\n--rw4g--\n"
    , c = new XMLHttpRequest;
  c.open("POST", "https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart&convert=true", !0), c.setRequestHeader("Content-type", 'multipart/related; boundary="rw4g"'), c.setRequestHeader("Authorization", "Bearer " + e.token), c.sendResponse = t[1], c.onreadystatechange = function () {
    4 == this.readyState && 200 == this.status && this.sendResponse({
      method: "onCollectHighlightsWeb"
      , type: "1757FROM_BGRW4G"
      , payload: JSON.parse(this.response)
        .alternateLink
    })
  }, c.send(r)
}

function init() {
  loadCookieSettings()
}

function updatePageAction(e, t, o) {
  try {
    if (null !== this.license && 0 == this.license.Valid && "Group" == this.license.UserType && 1 == this.license.HideUnlicensed) return void updateChromeOptions(!1);
    updateChromeOptions(e.enabled)
  } catch (n) {
    console.log(n)
  }
}
SETTING_CONTAINER = "texthelpSpeechStreamTBSettings", PORT_NAME = "texthelpSpeechStreamTB", STORAGE = chrome.storage.sync, LOCALSTORAGE = localStorage, extensionInstallTabID = "", disabledSites = [], tab = null, settings = null, settingsCookiePosition = null, clickHoverOn = !0, this.license = null, this.lastGoogleID = "", this.encryptedID = "", this.lastDate = 0, this.enabled = !0, this.licensed = !1, getDisabledSites();
try {} catch (e) {}
try {
  var _AnalyticsCode = "UA-35861859-4"
    , _gaq = _gaq || [];
  _gaq.push(["_setAccount", _AnalyticsCode]), _gaq.push(["_trackPageview"])
    , function () {
      var e = document.createElement("script");
      e.type = "text/javascript", e.async = !0, e.src = "https://ssl.google-analytics.com/ga.js";
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t)
    }(), chrome.browserAction.onClicked.addListener(onPageAction), chrome.storage.onChanged.addListener(onStorageChange), chrome.tabs.onUpdated.addListener(function (e, t, o) {
      try {
        if ("complete" == t.status) {
          if ("chrome://identity-internals/" == o.url) return;
          texthelp.RW4GC.authenticator.getEmail(!1, function (e) {
            if (null != e) {
              if (0 == o.url.indexOf("https://rw.texthelp.com/simplify/"));
              else {
                if (0 == o.url.indexOf("https://docs.google.com/document")) return;
                if (stringEndsWith(e, "@qaheroes.com") && stringStartsWith(e, "chromepc"));
                else if ("smores01@scary.docsplustesting.com" != e) return
              }
              onPageActionHandler(o, !0), chrome.tabs.sendRequest(o.id, {
                method: "thGetType"
              })
            }
          }.bind(this))
        }
      } catch (n) {
        console.log(n)
      }
    });
  var getAccessToken = function (e) {
      chrome.identity.getAuthToken({
        interactive: !0
        , scopes: ["profile", "email", "https://www.googleapis.com/auth/classroom.courses.readonly", "https://www.googleapis.com/auth/classroom.rosters.readonly", "https://www.googleapis.com/auth/classroom.profile.emails", "https://www.googleapis.com/auth/classroom.profile.photos"]
      }, function (t) {
        e({
          token: t
        })
      })
    }
    , getProfileAccessToken = function (e) {
      chrome.identity.getAuthToken({
        interactive: !0
        , scopes: ["profile", "email"]
      }, function (t) {
        e({
          token: t
        })
      })
    }
    , getClassroomAccessToken = function (e) {
      chrome.identity.getAuthToken({
        interactive: !0
        , scopes: ["https://www.googleapis.com/auth/classroom.courses.readonly", "https://www.googleapis.com/auth/classroom.rosters.readonly", "https://www.googleapis.com/auth/classroom.profile.emails", "https://www.googleapis.com/auth/classroom.profile.photos"]
      }, function (t) {
        e({
          token: t
        })
      })
    }
    , revokeAccessToken = function (e, t) {
      chrome.identity.removeCachedAuthToken({
        token: e
      }, function () {
        t({
          value: !0
        })
      })
    };
  chrome.runtime.onMessageExternal.addListener(function (e, t, o) {
    if (e && "ft4g" == e.app) {
      if ("get_access_token" === e.type) return getAccessToken(o), !0;
      if ("get_classroom_token" === e.type) return getClassroomAccessToken(o), !0;
      if ("get_profile_token" === e.type) return getProfileAccessToken(o), !0;
      if ("revoke_access_token" === e.type) return revokeAccessToken(e.custom, o), !0
    }
  });
  var g_lang = chrome.i18n.getUILanguage()
    , g_voices = "";
  chrome.runtime.onMessage.addListener(function (e, t, o) {
    "thChromeOptionsChanged" == e.method && updatePageAction(e, t, o)
  }), chrome.extension.onRequest.addListener(function (e, t, o) {
    var n = "http://rwchrome.texthelp.com/screenshotreaderinstall/"
      , s = "https://script.google.com/macros/s/AKfycbyPhfA6NYF8msRlb7BF4aR8Ax_JWSDM6eAj3tjR2CpkXUMfjhk/exec"
      , i = "https://rw.texthelp.com/access/access/getaccess?id="
      , a = "&type=0"
      , r = "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/prediction?json="
      , c = "{"
      , l = "}";
    if (void 0 != e.key && "function" === e.key) return void this.thFunctions["on" + e.method](e.parameters, o, t.tab);
    if ("thChromeOptionsChanged" === e.method && "1757FROM_PAGERW4G" == e.type && updateChromeOptions(e.enabled), "thCheckExtension" === e.method) {
      var h = e.payload.Lang;
      void 0 == h && (h = g_lang);
      var d = n + "?locale=" + h;
      if (void 0 == e.payload.defaultsettings) {
        e.payload.defaultsettings = {};
        var p = {
          "en-AU": "Vocalizer Expressive Karen Premium High 22kHz"
          , "en-GB": "Vocalizer Expressive Serena Premium High 22kHz"
          , "en-US": "Vocalizer Expressive Ava Premium High 22kHz"
          , fr: "Vocalizer Expressive Audrey Premium High 22kHz"
          , "fr-CA": "Vocalizer Expressive Amelie Premium High 22kHz"
          , pt: "Vocalizer Expressive Luciana Premium High 22kHz"
          , "pt-BR": "ScanSoft Raquel_Full_22kHz"
          , "pt-PT": "Vocalizer Expressive Luciana Premium High 22kHz"
          , es: "Vocalizer Expressive Monica Premium High 22kHz"
          , "es-419": "Vocalizer Expressive Paulina Premium High 22kHz"
        };
        e.payload.defaultsettings.voice = "Vocalizer Expressive Ava Premium High 22kHz", void 0 != p[h] && (e.payload.defaultsettings.voice = p[h]), e.payload.defaultsettings.speed = 50
      }
      window.texthelp.RW4GC.ssrdefaults = e.payload.defaultsettings;
      try {
        chrome.management.get(e.payload.ChromeExtId, function (t) {
          chrome.runtime.lastError ? "" == extensionInstallTabID ? chrome.tabs.create({
            url: d
            , active: !0
          }, function (e) {
            extensionInstallTabID = e.id
          }) : chrome.tabs.get(extensionInstallTabID, function (e) {
            chrome.runtime.lastError ? chrome.tabs.create({
              url: d
              , active: !0
            }, function (e) {
              extensionInstallTabID = e.id
            }) : chrome.tabs.update(extensionInstallTabID, {
              url: d
              , active: !0
            })
          }) : chrome.storage.sync.get("thRWFGSettings", function (t) {
            var o = null;
            void 0 == t.thRWFGSettings ? (o = {}, o.voice = window.texthelp.RW4GC.ssrdefaults.voice, o.speed = window.texthelp.RW4GC.ssrdefaults.speed) : (o = JSON.parse(t.thRWFGSettings), typeof o != Object && o.length > 0 && (o = JSON.parse(o)), void 0 !== o.speechoptions && (o = o.speechoptions));
            var n = {};
            n.command = "startScreenShotReader", n.voice = o.voice, n.speed = o.speed, n.speechServerURL = "https://rwforg.speechstream.net/SpeechServices/index.html", n.user = "rwforgdocs", chrome.runtime.sendMessage(e.payload.ChromeExtId, n)
          })
        })
      } catch (g) {
        console.log(g)
      }
    }
    if ("thStopScreenShotReader" === e.method) try {
      chrome.management.get(e.payload.ChromeExtId, function (t) {
        chrome.runtime.lastError || chrome.storage.sync.get("thRWFGSettings", function (t) {
          var o = {};
          o.command = "stopScreenShotReader", chrome.runtime.sendMessage(e.payload.ChromeExtId, o)
        })
      })
    } catch (g) {
      console.log(g)
    }
    if ("thStopScreenShotReaderSpeech" === e.method) try {
      chrome.management.get(e.payload.ChromeExtId, function (t) {
        chrome.runtime.lastError || chrome.storage.sync.get("thRWFGSettings", function (t) {
          var o = {};
          o.command = "stopScreenShotReaderSpeech", chrome.runtime.sendMessage(e.payload.ChromeExtId, o)
        })
      })
    } catch (g) {
      console.log(g)
    }
    if ("getLang" === e.method && o({
        method: "onLanguage"
        , type: "1757FROM_BGRW4G"
        , payload: g_lang.toString()
      }), "collectHighlightsRequest" === e.method && "1757FROM_PAGERW4G" == e.type) {
      var u = new XMLHttpRequest
        , m = (new Date)
        .getTime();
      u.open("POST", s + "?ver=" + m, !0), u.onreadystatechange = function () {
        var e = "";
        4 == this.readyState && 200 == this.status && (e = this.getResponseHeader("Content-Type"), "application/json" == e.substr(0, 16) && o({
          method: "onCollectHighlights"
          , type: "1757FROM_BGRW4G"
          , payload: this.responseText.toString()
        }))
      };
      var f = new FormData;
      e.sort < 2 ? e.sort = 0 : e.sort = 1;
      var y = JSON.stringify(e.colors)
        , R = '{"newHighlightsDocument":"' + e.docTitle + '","cmd":"collectHighlights", "sort":"' + e.sort + '", "docsToCollect":["' + e.payload + '"],"colors":' + y + "}";
      f.append("payload", R), u.send(f)
    }
    if ("vocabWordsRequest" === e.method && "1757FROM_PAGERW4G" == e.type) {
      var u = new XMLHttpRequest
        , m = (new Date)
        .getTime();
      u.open("POST", s + "?ver=" + m, !0), u.onreadystatechange = function () {
        var e = "";
        4 == this.readyState && 200 == this.status && (e = this.getResponseHeader("Content-Type"), "application/json" == e.substr(0, 16) && o({
          method: "onVocabWords"
          , type: "1757FROM_BGRW4G"
          , payload: this.responseText.toString()
        }))
      };
      var f = new FormData
        , y = JSON.stringify(e.colors)
        , v = JSON.stringify(e.translations)
        , R = '{"newVocabDocument":"' + e.translations.docTitle + '","cmd":"vocab","docsToCollect":["' + e.payload + '"],"colors":' + y + ', "translations":' + v + "}";
      f.append("payload", R), u.send(f)
    }
    if ("collectHighlightsO365Request" === e.method && "1757FROM_PAGERW4G" == e.type) {
      for (var G = e.filename, b = window.atob(e.filedata), w = b.length, S = new Uint8Array(w), O = 0; O < w; O++) S[O] = b.charCodeAt(O);
      var C = S.buffer;
      this.texthelp.RW4GC.authenticator.upload0365SharepointDocument(G, C)
    }
    if ("authenticate" === e.method && "1757FROM_PAGERW4G" == e.type) {
      var k = [];
      window.thFunctions.onAuthenticate(k);
      var u = new XMLHttpRequest
        , m = (new Date)
        .getTime();
      u.open("GET", s + "?ver=" + m, !0), u.onreadystatechange = function () {
        var e = "";
        4 == this.readyState && 200 == this.status && (e = this.getResponseHeader("Content-Type"), "text/html" == e.substr(0, 9) && o({
          method: "onAuthenticate"
          , type: "1757FROM_BGRW4G"
          , payload: this.responseText.toString()
        }))
      }, u.send()
    }
    if ("collectHighlightsWeb" === e.method && "1757FROM_PAGERW4G" == e.type && this.texthelp.RW4GC.authenticator.writeHighlightsDocument(e.documentHighlights, o), "vocabWeb" === e.method && "1757FROM_PAGERW4G" == e.type && (e.payload.sendResponse = o, this.texthelp.RW4GC.authenticator.writeVocabDocument(e.payload)), "getOAuthToken" === e.method && "1757FROM_PAGERW4G" == e.type && texthelp.RW4GC.authenticator.getEmail(!0, function (e) {
        texthelp.RW4GC.authenticator.getLicense(e, function (e) {
          o({
            method: "onGetOAuthToken"
            , type: "1757FROM_BGRW4G"
            , payload: e
          })
        }.bind(this))
      }.bind(this)), "getOAuthTokenSilent" === e.method && "1757FROM_PAGERW4G" == e.type && "1757FROM_PAGERW4G" == e.type && texthelp.RW4GC.authenticator.getEmail(!1, function (e) {
        texthelp.RW4GC.authenticator.getLicense(e, function (e) {
          o({
            method: "onGetOAuthTokenSilent"
            , type: "1757FROM_BGRW4G"
            , payload: e
          })
        }.bind(this))
      }.bind(this)), "thSetType" === e.method, "GAE" === e.method && "1757FROM_PAGERW4G" == e.type) {
      var W = e.payload.category;
      try {
        e.payload.category.indexOf("@") > -1 && (W = thHash.hashEmail(e.payload.category))
      } catch (T) {}
      _gaq.push(["_trackEvent", W, e.payload.action, e.payload.label])
    }
    if ("highlightSelection" === e.method && "1757FROM_PAGERW4G" == e.type) {
      var u = new XMLHttpRequest
        , m = (new Date)
        .getTime();
      u.open("POST", s + "?ver=" + m, !0);
      var f = new FormData
        , R = '{"cmd":"highlightSelection", "range":' + JSON.stringify(e.payload) + "}";
      f.append("payload", R), u.send(f)
    }
    if ("clearHighlights" === e.method && "1757FROM_PAGERW4G" == e.type) {
      var u = new XMLHttpRequest
        , m = (new Date)
        .getTime();
      u.open("POST", s + "?ver=" + m, !0);
      var f = new FormData
        , R = '{"cmd":"clearHighlights", "range":' + JSON.stringify(e.payload) + "}";
      f.append("payload", R), u.send(f)
    }
    if ("thRWFGSettings" === e.method && "1757FROM_PAGERW4G" == e.type && chrome.storage.sync.set({
        thRWFGSettings: JSON.stringify(e.payload)
      }), "thRWFGGetSettings" === e.method && "1757FROM_PAGERW4G" == e.type && chrome.storage.sync.get("thRWFGSettings", function (e) {
        o({
          method: "onGetthRWFGSettings"
          , type: "1757FROM_BGRW4G"
          , payload: e
        })
      }), "thPrediction" === e.method && "1757FROM_PAGERW4G" == e.type) {
      u = new XMLHttpRequest;
      var h = e.payload.context[2]
        , x = e.payload.context[0].replace(/ /g, " ")
        , F = c + '"u":"RWForGoogle","p":"' + encodeURIComponent(escapeJSON(decodeURIComponent(x))) + '","c":"' + e.payload.context[1] + '","l":"' + h + '","s":"' + e.payload.seq + '","e":"WYn4Wx7Vf2"' + l
        , P = "";
      P = r + F, parent = e.payload.parent, position = e.payload.position, u.open("GET", P, !0), u.onreadystatechange = function (e, t) {
        return function () {
          var n = "";
          if (4 == this.readyState && 200 == this.status) {
            var s = [];
            if (s.push("prediction request timer"), window.thFunctions.onEndTiming(s), n = this.getResponseHeader("Content-Type"), "application/json" == n.substr(0, 16)) {
              var i = JSON.parse(this.responseText.toString());
              o({
                method: "thPrediction"
                , type: "1757FROM_BGRW4G"
                , payload: {
                  words: i.predictions
                  , seq: i.sequenceID
                  , parentId: e
                  , positionId: t
                }
              })
            }
          }
        }
      }(parent, position), u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      var k = [];
      k.push("prediction request timer"), k.push(this.texthelp.RW4GC.authenticator.email), k.push(this.texthelp.RW4GC.authenticator.email.split("@")[1]), this.thFunctions.onStartTiming(k), u.send()
    }
    if ("thGetVoices" === e.method && "1757FROM_PAGERW4G" == e.type) {
      if (g_voices.length > 0 && "true" !== e.payload.refresh) return void o({
        method: "thGetVoices"
        , type: "1757FROM_BGRW4G"
        , payload: {
          response: g_voices
        }
      });
      var u = new XMLHttpRequest;
      u.open("GET", e.payload.url, !0), u.onreadystatechange = function () {
        4 == this.readyState && 200 == this.status && (g_voices = this.responseText.toString(), o({
          method: "thGetVoices"
          , type: "1757FROM_BGRW4G"
          , payload: {
            response: g_voices
          }
        }))
      }, u.send()
    }
    if ("thDoPopupLicenseMessage" === e.method && "1757FROM_PAGERW4G" == e.type) {
      var f = e.payload;
      chrome.storage.sync.get("thRWFGPopup", function (e) {
        return function (t) {
          var n = "0"
            , s = e.PromoMessage.MessageDateNumerical;
          void 0 == t.thRWFGPopup && chrome.storage.sync.set({
            thRWFGPopup: ""
          }), void 0 !== t.thRWFGPopup && void 0 !== t.thRWFGPopup.last && (n = t.thRWFGPopup.last), n >= s || (chrome.storage.sync.set({
            thRWFGPopup: {
              last: s
            }
          }), o({
            method: "onthRWFGPopup"
            , type: "1757FROM_BGRW4G"
            , payload: e
          }))
        }
      }(f))
    }
    if ("trialValidation" === e.method && "1757FROM_PAGERW4G" == e.type) return void texthelp.RW4GC.authenticator.getEmail(!1, function (e) {
      texthelp.RW4GC.authenticator.getLicense(e, function (e) {
        o({
          method: "trialValidation"
          , type: "1757FROM_BGRW4G"
          , payload: e
        })
      }.bind(this), function (e) {
        o({
          method: "trialValidation"
          , type: "1757FROM_BGRW4G"
          , payload: void 0
        })
      })
    }.bind(this));
    if ("gdocsTrialValidation" === e.method && "1757FROM_PAGERW4G" == e.type) {
      var f = e.payload
        , A = new Date
        , _ = A.getYear() + A.getYear() + A.getYear();
      if (null == this.license || this.lastGoogleID !== f.email || _ !== this.lastDate) {
        this.lastGoogleID = f.email, this.encryptedID = thHash.hashEmail(this.lastGoogleID), this.lastDate = _;
        var u = new XMLHttpRequest;
        u.open("GET", i + f.email + a, !0), u.onreadystatechange = function () {
          var e = "";
          4 == this.readyState && 200 == this.status && (e = this.getResponseHeader("Content-Type"), "application/json" == e.substr(0, 16) && (this.license = JSON.parse(this.responseText.toString()), o({
            method: "trialValidation"
            , type: "1757FROM_BGRW4G"
            , payload: this.license
          })))
        }, u.send()
      } else o({
        method: "trialValidation"
        , type: "1757FROM_BGRW4G"
        , payload: this.license
      })
    }
    if ("thExtBGAjaxRequest" === e.command && "1757FROM_PAGERW4G" == e.type && (u = new XMLHttpRequest, u.open("POST", e.settings.strURL, !0), u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), u.onreadystatechange = function () {
        4 == this.readyState && 200 == this.status && o({
          command: "thExtBGAjaxResponse"
          , type: "1757FROM_BGRW4G"
          , payload: this.responseText.toString()
        })
      }, u.send(e.settings.parameters)), "connect" == e.command && o({
        type: "1757FROM_BGRW4G"
        , command: "connected"
        , settingcookies: settingsCookiePosition
        , isClickHoverOn: getClickHoverOn()
      }), "isRWRunning" == e.command && o({
        type: "1757FROM_BGRW4G"
        , command: "isRWRunning"
        , running: this.socketManager.isOpen()
      }), "getLicense" == e.command && o({
        type: "1757FROM_BGRW4G"
        , command: "getLicense"
      }), "isDefaultOn" == e.command && chrome.storage.sync.get("thRWFGSettings", function (e) {
        var t = {
          visible: !0
        };
        void 0 == e.thRWFGSettings ? t.visible = "true" : (t = JSON.parse(e.thRWFGSettings), void 0 == t.visible && (t.visible = "true")), o({
          method: "thToolbarVisibility"
          , type: "1757FROM_BGRW4G"
          , visible: t.visible
        })
      }), "save" == e.command && saveSettings(e.settings), "saveCookiePosition" == e.command && saveCookiePosition(e.cookiex, e.cookiey, e.cookieBarx, e.cookieBary), "trackEvent" == e.command) {
      if ("FromWebReader" == e.settings.category) return void trackEvent(this.encryptedID, e.settings.action, e.settings.label);
      trackEvent(e.settings.category, e.settings.action, e.settings.label)
    }
    "saveOnClickHover" == e.command && setClickHoverOn(e.settings.clickHoverOn)
  })
} catch (err) {
  console.log(err)
}
init();
