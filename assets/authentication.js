function _possibleConstructorReturn(e, A) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !A || "object" != typeof A && "function" != typeof A ? e : A
}

function _inherits(e, A) {
  if ("function" != typeof A && null !== A) throw new TypeError("Super expression must either be null or a function, not " + typeof A);
  e.prototype = Object.create(A && A.prototype, {
    constructor: {
      value: e
      , enumerable: !1
      , writable: !0
      , configurable: !0
    }
  }), A && (Object.setPrototypeOf ? Object.setPrototypeOf(e, A) : e.__proto__ = A)
}

function _classCallCheck(e, A) {
  if (!(e instanceof A)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function () {
    function e(e, A) {
      for (var t = 0; t < A.length; t++) {
        var n = A[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }
    return function (A, t, n) {
      return t && e(A.prototype, t), n && e(A, n), A
    }
  }()
  , texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {}, texthelp.RW4GC.AuthenticatorBase = function () {
  function e() {
    _classCallCheck(this, e), this._accessToken = null, this._email = "", this._name = "", this._accessTokenCallback = null, this._emailCallback = null, this._licenseCallback = null, this._unlicensedCallback = null, this._license = null, this._interactive = !1, this._lastLicenseDate = null
  }
  return _createClass(e, [{
    key: "getAccessToken"
    , value: function (e, A) {
      this._interactive = e, void 0 == A && (A = null), this._accessTokenCallback = A, void 0 == e && (e = !0), this.onGetAccessToken(e)
    }
  }, {
    key: "onAccessToken"
    , value: function (e) {
      null != this._accessTokenCallback && (null !== this._license && (this._license.atoken = this._accessToken), this._accessTokenCallback(e))
    }
  }, {
    key: "getEmail"
    , value: function (e, A) {
      this.getAccessToken(e, function (t) {
        return this._interactive = e, void 0 == A && (A = null), this._emailCallback = A, null == this._accessToken ? void(null !== this._emailCallback && this._emailCallback(null)) : this._email.length > 0 ? void(null !== this._emailCallback && this._emailCallback(this._email)) : (void 0 == e && (e = !0), this._emailCallback = A, void this.getAuthenticatedEmail())
      }.bind(this))
    }
  }, {
    key: "getLicense"
    , value: function (e, A, t) {
      var n = this;
      if (void 0 == t && (t = null), this._unlicensedCallback = t, void 0 == e) return console.log("Invalid email to license"), void(null !== this.unlicensedCallback && t("Invalid email to license"));
      if (null == e) return console.log("Invalid email to license"), void(null !== this.unlicensedCallback && t("Invalid email to license"));
      if (0 == e.length) return console.log("Invalid email to license"), void(null !== this.unlicensedCallback && t("Invalid email to license"));
      void 0 == A && (A = null), this._licenseCallback = A, null == this._lastLicenseDate && (this._lastLicenseDate = new Date);
      var l = new Date
        , o = l.valueOf() - this._lastLicenseDate.valueOf()
        , m = o / 1e3 / 60 / 60 / 24;
      if (e == this._email && null !== this._license && m < 1) return void(null !== this._licenseCallback && (this._license.interactive = !1, this._licenseCallback(this._license)));
      var i = (thHash.hashEmail(e), "https://rw.texthelp.com/access/access/getaccess?id=" + e + "&type=0")
        , r = [];
      r.push("license request timer"), r.push(e), r.push(e.split("@")[1]), window.thFunctions.onStartTiming(r), fetch(i, {
          method: "get"
        })
        .then(function (e) {
          var A = [];
          return A.push("license request timer"), window.thFunctions.onEndTiming(A), e.json()
        }.bind(this))
        .then(function (A) {
          n._lastLicenseDate = l, n._license = A, n._license.ueemail = e, n._license.atoken = n._accessToken, n._license.lType = n.getLicenseType(), n._license.interactive = n._interactive, null !== n._licenseCallback ? n._licenseCallback(A) : null !== n._unlicensedCallback && n._unlicensedCallback("License not accepted")
        })["catch"](function (e) {
          console.log(e), null !== n._unlicensedCallback && n._unlicensedCallback(e)
        })
    }
  }, {
    key: "writeVocabDocument"
    , value: function (e) {
      var A = 'https://rwgoogle-webservices-4.texthelp.com/v1.11.0/vocab?json={"t":"5","i":"f","g":"t","u":"' + e.user + '","e":"WYn4Wx7Vf2","b":[';
      "fr" != e.locale && "pt" != e.locale && "es" != e.locale || (A = 'https://webservices-us-4.texthelp.com/v1.11.0/vocabHTML?json={"t":"5","i":"f","g":"t","u":"' + e.user + '","e":"WYn4Wx7Vf2","b":[');
      for (var t = 0; t < e.words.length; t++) A += '"' + e.words[t].trim() + '"', t < e.words.length - 1 && (A += ", ");
      A += '],"l":"' + e.locale + '"}';
      var n = new XMLHttpRequest;
      n.params = e, n.open("POST", A, !0), n.onreadystatechange = function (A) {
        if (4 == A.target.readyState && 200 == A.target.status) {
          if (e.vocab = JSON.parse(A.target.response), void 0 !== e.vocab.service) return void this.writeVocabHTMLResponse(e);
          this.writeVocabResponse(e)
        }
      }.bind(this), n.send()
    }
  }, {
    key: "getAuthenticatedEmail"
    , value: function () {}
  }, {
    key: "onGetAccessToken"
    , value: function () {}
  }, {
    key: "getLicenseType"
    , value: function () {}
  }, {
    key: "writeVocabResponse"
    , value: function (e) {}
  }, {
    key: "writeVocabHTMLResponse"
    , value: function (e) {}
  }, {
    key: "writeHighlightsDocument"
    , value: function (e, A) {}
  }, {
    key: "email"
    , get: function () {
      return this._email
    }
  }, {
    key: "name"
    , get: function () {
      return this._name
    }
  }]), e
}(), texthelp.RW4GC.AuthenticatorFactory = function () {
  function e(A) {
    _classCallCheck(this, e);
    try {
      this._authenticator = new texthelp.RW4GC[A + "Authenticator"]
    } catch (t) {
      console.log(t), this._authenticator = {}
    }
  }
  return _createClass(e, [{
    key: "authenticator"
    , get: function () {
      return this._authenticator
    }
  }]), e
}(), texthelp.RW4GC.GoogleAuthenticator = function (e) {
  function A() {
    return _classCallCheck(this, A), _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A))
      .call(this))
  }
  return _inherits(A, e), _createClass(A, [{
    key: "onGetAccessToken"
    , value: function (e) {
      chrome.identity.getAuthToken({
        interactive: e
      }, function (e) {
        return void 0 == e ? (chrome.runtime.lastError && console.log(chrome.runtime.lastError.message), this._accessToken = null, this._email = "", this._license = null, void this.onAccessToken(null)) : (this._accessToken = e, void this.onAccessToken(e))
      }.bind(this))
    }
  }, {
    key: "getAuthenticatedEmail"
    , value: function () {
      var e = "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + this._accessToken;
      fetch(e, {
          method: "get"
        })
        .then(function (e) {
          return e.json()
        }.bind(this))
        .then(function (e) {
          return void 0 == e.error ? (this._email = e.email, this._name = e.name, void(null !== this._emailCallback && this._emailCallback(e.email))) : this._interactive ? void chrome.identity.removeCachedAuthToken({
            token: this._accessToken
          }, function () {
            this._accessToken = null, texthelp.RW4GC.authenticator.getEmail(!0, this._emailCallback)
          }.bind(this)) : (this._email = "", void(null !== this._emailCallback && this._emailCallback(this._email)))
        }.bind(this))["catch"](function (e) {
          console.log(e)
        })
    }
  }, {
    key: "getLicenseType"
    , value: function () {
      return "Google"
    }
  }, {
    key: "writeHighlightsDocument"
    , value: function (e, A) {
      var t = "<!DOCTYPE html><html><head><style>";
      t += "p{padding-bottom:10px}.blue{background-color:#0ff}.pink{background-color:#f0f}.green{background-color:#adff2f}.yellow{background-color:#ff0}.boldText{font-weight:700}", t += "</style></head><body>";
      var n = 0;
      for (n = 0; n < e.highlights.length; n++) "#FFFF00" == e.highlights[n].color && (t += '<p><span class="yellow">'), "#ADFF2F" == e.highlights[n].color && (t += '<p><span class="green">'), "#00FFFF" == e.highlights[n].color && (t += '<p><span class="blue">'), "#FF00FF" == e.highlights[n].color && (t += '<p><span class="pink">'), t += e.highlights[n].text + "</span></p>";
      t += '<br><p><span class="boldText"><a href="' + e.url, t += '">' + e.title + "</a></span></p>", t += '<p><span class="user">' + this._name + "<br>" + this._email + "</span></p>", t += "</body></html>";
      var l = '--rw4g\nContent-Type: application/json; charset=UTF-8\n\n{"title": "' + e.docTitle + '", "description": "Read&Write for Google Chrome™"}\n--rw4g\nContent-Type: text/html\n\n' + t + "\n--rw4g--\n"
        , o = new XMLHttpRequest;
      o.open("POST", "https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart&convert=true", !0), o.setRequestHeader("Content-type", 'multipart/related; boundary="rw4g"'), o.setRequestHeader("Authorization", "Bearer " + this._accessToken), o.sendResponse = A, o.onreadystatechange = function () {
        if (4 == this.readyState && 200 == this.status) {
          var e = window.open(JSON.parse(this.response)
            .alternateLink, "_blank");
          e.focus(), this.sendResponse({
            method: "onCollectHighlightsWeb"
            , type: "1757FROM_BGRW4G"
            , payload: JSON.parse(this.response)
              .alternateLink
          })
        }
      }, o.send(l)
    }
  }, {
    key: "writeVocabResponse"
    , value: function (e) {
      var A = e.vocab.words
        , t = e.translations
        , n = "<!DOCTYPE html><html><head><style>";
      n += 'p {padding-top: 10px;}\r\nh1,th {font-family: "Open Sans", sans-serif; font-size: 1em;}\r\ntable {width: 100%;}\r\n.oddrow {background-color: #99ccff;}\r\n.evenrow {background-color: #ffffff;}\r\nh1 {text-align:center;}\r\n.VocabWord {font-family: "Open Sans", sans-serif; width:17%;}\r\n.VocabMeaning {font-family: "Open Sans", sans-serif; width:35%;}\r\n.VocabSymbol {font-family: "Open Sans", sans-serif; width:16%;}\r\n.VocabNotes {font-family: "Open Sans", sans-serif; width:32%;}\r\nth,td {font-family: "Open Sans", sans-serif; padding:5px;}\r\n.wordContainer,.BoldText {font-weight:bold; font-family: "Open Sans", sans-serif;}', n += "</style></head><body>", n += '<h1 class="vocabTitle">' + t.title + '</h1><table id="vocabTable">', n += "<tr>", n += '  <th class="VocabWord">' + t.heading + "</th>", n += '  <th class="VocabMeaning">' + t.meaning + "</th>", n += '  <th class="VocabSymbol">' + t.symbol + "</th>", n += '  <th class="VocabNotes">' + t.notes + "</th>", n += "</tr>";
      for (var l = 0; l < A.length; l++) {
        n += '<tr class="' + oddOrEven(l + 1) + 'row">', n += '   <td class="wordContainer">' + A[l].word + "</td>", n += '   <td class="meaningContainer">';
        for (var o = 0; o < A[l].inflections.length; o++)
          for (var m = 0; m < A[l].inflections[o].definitions.length; m++) n += A[l].inflections[o].definitions[m].definition + "<br><br>";
        n += "   </td>", n += '   <td class="picContainer">';
        for (var o = 0; o < A[l].inflections.length; o++)
          for (var m = 0; m < A[l].inflections[o].symbols.length; m++) n += '<img src="' + A[l].inflections[o].symbols[m] + '" /><br />';
        n += "   </td>", n += '   <td class="notesContainer">&nbsp;</td>', n += "</tr>"
      }
      n += "</body></html>";
      var i = '--rw4g\nContent-Type: application/json; charset=UTF-8\n\n{"title": "' + t.docTitle + '", "description": "Read&Write for Google Chrome™"}\n--rw4g\nContent-Type: text/html\n\n' + n + "\n--rw4g--\n"
        , r = new XMLHttpRequest;
      r.open("POST", "https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart&convert=true", !0), r.setRequestHeader("Content-type", 'multipart/related; boundary="rw4g"'), r.setRequestHeader("Authorization", "Bearer " + this._accessToken), r.sendResponse = e.sendResponse, r.onreadystatechange = function () {
        if (4 == this.readyState && 200 == this.status) {
          var e = window.open(JSON.parse(this.response)
            .alternateLink, "_blank");
          e.focus(), this.sendResponse({
            method: "onVocabWeb"
            , type: "1757FROM_BGRW4G"
            , payload: JSON.parse(this.response)
              .alternateLink
          })
        }
      }, r.send(i)
    }
  }, {
    key: "writeVocabHTMLResponse"
    , value: function (e) {
      var A = e.vocab.words
        , t = e.translations
        , n = "<!DOCTYPE html><html><head><style>";
      n += 'p {padding-top: 10px;}\r\nh1,th {font-family: "Open Sans", sans-serif; font-size: 1em;}\r\ntable {width: 100%;}\r\n.oddrow {background-color: #99ccff;}\r\n.evenrow {background-color: #ffffff;}\r\nh1 {text-align:center;}\r\n.VocabWord {font-family: "Open Sans", sans-serif; width:17%;}\r\n.VocabMeaning {font-family: "Open Sans", sans-serif; width:35%;}\r\n.VocabSymbol {font-family: "Open Sans", sans-serif; width:16%;}\r\n.VocabNotes {font-family: "Open Sans", sans-serif; width:32%;}\r\nth,td {font-family: "Open Sans", sans-serif; padding:5px;}\r\n.wordContainer,.BoldText {font-weight:bold; font-family: "Open Sans", sans-serif;}', n += "</style></head><body>", n += '<h1 class="vocabTitle">' + t.title + '</h1><table id="vocabTable">', n += "<tr>", n += '  <th class="VocabWord">' + t.heading + "</th>", n += '  <th class="VocabMeaning">' + t.meaning + "</th>", n += '  <th class="VocabSymbol">' + t.symbol + "</th>", n += '  <th class="VocabNotes">' + t.notes + "</th>", n += "</tr>";
      for (var l = 0; l < A.length; l++) {
        n += '<tr class="' + oddOrEven(l + 1) + 'row">', n += '   <td class="wordContainer">' + A[l].word + "</td>", n += '   <td class="meaningContainer">', n += A[l].definition, n += "   </td>", n += '   <td class="picContainer">';
        for (var o = 0; o < A[l].symbols.length; o++) n += '<img src="' + A[l].symbols[o] + '" /><br />';
        n += "   </td>", n += '   <td class="notesContainer">&nbsp;</td>', n += "</tr>"
      }
      n += "</body></html>";
      var m = '--rw4g\nContent-Type: application/json; charset=UTF-8\n\n{"title": "' + t.docTitle + '", "description": "Read&Write for Google Chrome™"}\n--rw4g\nContent-Type: text/html\n\n' + n + "\n--rw4g--\n"
        , i = new XMLHttpRequest;
      i.open("POST", "https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart&convert=true", !0), i.setRequestHeader("Content-type", 'multipart/related; boundary="rw4g"'), i.setRequestHeader("Authorization", "Bearer " + this._accessToken), i.sendResponse = e.sendResponse, i.onreadystatechange = function () {
        4 == this.readyState && 200 == this.status && this.sendResponse({
          method: "onVocabWeb"
          , type: "1757FROM_BGRW4G"
          , payload: JSON.parse(this.response)
            .alternateLink
        })
      }, i.send(m)
    }
  }]), A
}(texthelp.RW4GC.AuthenticatorBase), texthelp.RW4GC.MicrosoftLiveAuthenticator = function (e) {
  function A() {
    return _classCallCheck(this, A), _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A))
      .call(this))
  }
  return _inherits(A, e), _createClass(A, [{
    key: "onAuthenticate"
    , value: function (e) {}
  }]), A
}(texthelp.RW4GC.AuthenticatorBase), texthelp.RW4GC.MicrosoftSharepointAuthenticator = function (e) {
  function A() {
    _classCallCheck(this, A);
    var e = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A))
      .call(this));
    return e._directoryCallback = null, e._directoryAccessToken = null, e.imageProcessed = !0, e.base64ImagesArray = [], e
  }
  return _inherits(A, e), _createClass(A, [{
    key: "onGetAccessToken"
    , value: function (e) {
      this.getAccessTokenForGraph(e)
    }
  }, {
    key: "getAccessTokenForGraph"
    , value: function (e) {
      var A = this
        , t = "0c83ac77-768d-478d-ab44-b3ff4c8b38dc"
        , n = chrome.identity.getRedirectURL("provider_cb")
        , l = "https://graph.microsoft.com/";
      this.o365AccessCode, this.o365DiscoveryAccessToken, this.o365DiscoveryRefreshToken, this.o365FilesAccessToken, this.o365FilesRefreshToken, this.o365ServiceEndpointURI, this.o365ServiceResourceId, this.o365Session, this.documentOpened = !1, this.blankDocument = "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";
      var o = {
        interactive: e
        , url: "https://login.windows.net/common/oauth2/authorize?client_id=" + t + "&response_type=token&resource=" + l + "&redirect_uri=" + n
      };
      chrome.identity.launchWebAuthFlow(o, function (e) {
        return void 0 == e ? (chrome.runtime.lastError && console.log(chrome.runtime.lastError.message), A._accessToken = null, A._email = "", A._license = null, void A.onAccessToken()) : (A._accessToken = e.split("access_token=")[1].split("&")[0], void A.onAccessToken())
      })
    }
  }, {
    key: "getAccessTokenForDirectory"
    , value: function (e, A) {
      var t = this
        , n = "0c83ac77-768d-478d-ab44-b3ff4c8b38dc"
        , l = chrome.identity.getRedirectURL("provider_cb")
        , o = "https://api.office.com/discovery/"
        , m = "";
      this._directoryCallback = A;
      var i = {
        interactive: e
        , url: "https://login.windows.net/common/oauth2/authorize?client_id=" + n + "&response_type=code&resource=" + o + "&redirect_uri=" + l
      };
      chrome.identity.launchWebAuthFlow(i, function (e) {
        if (void 0 == e) return t._directoryAccessToken = null, void(t._directoryCallback = null);
        var i = e.split("code=")[1].split("&")[0]
          , r = e.split("session_state=")[1];
        t.o365AccessCode = i, t.o365Session = r, t.getRemoteAccessToken(i, "2", o, l, n, r, m, A)
      })
    }
  }, {
    key: "getRemoteAccessToken"
    , value: function (e, A, t, n, l, o, m, i) {
      var r = this
        , s = "https://rwedge.texthelp.com/thOffice365Service.asmx/generateAccessToken"
        , a = JSON.stringify({
          code: e
          , account_type: A
          , resource: t
          , redirect_uri: n
          , client_id: l
          , session_state: o
          , scope: m
        });
      fetch(s, {
          headers: {
            "Content-Type": "application/json"
          }
          , method: "POST"
          , body: a
        })
        .then(function (e) {
          return e.json()
        })
        .then(function (e) {
          r._directoryAccessToken = e.d, i(r._directoryAccessToken)
        })["catch"](function (e) {
          console.log(e)
        })
    }
  }, {
    key: "getAuthenticatedEmail"
    , value: function () {
      var e = "https://graph.microsoft.com/v1.0/me";
      fetch(e, {
          headers: {
            Authorization: "Bearer " + this._accessToken
          }
          , method: "GET"
        })
        .then(function (e) {
          return e.json()
        }.bind(this))
        .then(function (e) {
          return void 0 == e.error ? (this._email = e.mail, void(null !== this._emailCallback && this._emailCallback(e.mail))) : this._interactive ? void chrome.identity.removeCachedAuthToken({
            token: this._accessToken
          }, function () {
            this._accessToken = null, texthelp.RW4GC.authenticator.getEmail(!0, this._emailCallback)
          }.bind(this)) : (this._email = "", void(null !== this._emailCallback && this._emailCallback(this._email)))
        }.bind(this))["catch"](function (e) {
          console.log(e)
        })
    }
  }, {
    key: "getOfficeServices"
    , value: function (e) {
      this._accessToken = e;
      var A = "https://api.office.com/discovery/me/services";
      fetch(A, {
          headers: {
            Authorization: "Bearer " + this._accessToken
            , "Content-Type": "application/json;odata=verbose"
            , Accept: "application/json;odata=verbose"
          }
          , method: "GET"
        })
        .then(function (e) {
          return e.json()
        })
        .then(function (e) {})["catch"](function (e) {
          console.log(e)
        })
    }
  }, {
    key: "getLicenseType"
    , value: function () {
      return "MicrosoftSharepoint"
    }
  }, {
    key: "writeHighlightsDocument"
    , value: function (e, A) {
      var t = 1
        , n = new openXml.OpenXmlPackage(this.blankDocument)
        , l = n.mainDocumentPart()
        .getXDocument()
        .root.element(openXml.W.body);
      if (1 === t) {
        var o = 0;
        for (o = 0; o < e.highlights.length; ++o) {
          var m;
          "yellow" === e.highlights[o].color || "#FFFF00" === e.highlights[o].color ? m = "yellow" : "magenta" === e.highlights[o].color || "#FF00FF" === e.highlights[o].color ? m = "magenta" : "green" === e.highlights[o].color || "#ADFF2F" === e.highlights[o].color ? m = "green" : "blue" !== e.highlights[o].color && "#00FFFF" !== e.highlights[o].color || (m = "cyan");
          var i = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.cs, "Arial")), new Ltxml.XElement(openXml.W.color, new Ltxml.XAttribute(openXml.W.val, "000000")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), new Ltxml.XElement(openXml.W.highlight, new Ltxml.XAttribute(openXml.W.val, m))), new Ltxml.XElement(openXml.W.t, e.highlights[o].text)))
            , r = l.elements(openXml.W.p)
            .lastOrDefault();
          null !== r && r.addAfterSelf(i)
        }
      } else {
        for (var o = 0; o < yellowHighlights.length; ++o) {
          var i = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.cs, "Arial")), new Ltxml.XElement(openXml.W.color, new Ltxml.XAttribute(openXml.W.val, "000000")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), new Ltxml.XElement(openXml.W.highlight, new Ltxml.XAttribute(openXml.W.val, "yellow"))), new Ltxml.XElement(openXml.W.t, yellowHighlights[o])));
          r = l.elements(openXml.W.p)
            .lastOrDefault(), null !== r && r.addAfterSelf(i)
        }
        for (var o = 0; o < cyanHighlights.length; ++o) {
          var i = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.cs, "Arial")), new Ltxml.XElement(openXml.W.color, new Ltxml.XAttribute(openXml.W.val, "000000")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), new Ltxml.XElement(openXml.W.highlight, new Ltxml.XAttribute(openXml.W.val, "cyan"))), new Ltxml.XElement(openXml.W.t, cyanHighlights[o])));
          r = l.elements(openXml.W.p)
            .lastOrDefault(), null !== r && r.addAfterSelf(i)
        }
        for (var o = 0; o < greenHighlights.length; ++o) {
          var i = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.cs, "Arial")), new Ltxml.XElement(openXml.W.color, new Ltxml.XAttribute(openXml.W.val, "000000")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), new Ltxml.XElement(openXml.W.highlight, new Ltxml.XAttribute(openXml.W.val, "green"))), new Ltxml.XElement(openXml.W.t, greenHighlights[o])));
          r = l.elements(openXml.W.p)
            .lastOrDefault(), null !== r && r.addAfterSelf(i)
        }
        for (var o = 0; o < magentaHighlights.length; ++o) {
          var i = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.cs, "Arial")), new Ltxml.XElement(openXml.W.color, new Ltxml.XAttribute(openXml.W.val, "000000")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), new Ltxml.XElement(openXml.W.highlight, new Ltxml.XAttribute(openXml.W.val, "magenta"))), new Ltxml.XElement(openXml.W.t, greenHighlights[o])));
          r = l.elements(openXml.W.p)
            .lastOrDefault(), null !== r && r.addAfterSelf(i)
        }
      }
      var s = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Arial Bold"), new Ltxml.XAttribute(openXml.W.hAnsi, "Arial Bold")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24"))), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Arial Bold"), new Ltxml.XAttribute(openXml.W.hAnsi, "Arial Bold")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24"))), new Ltxml.XElement(openXml.W.t, e.title), new Ltxml.XElement(openXml.W.br)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Arial Bold"), new Ltxml.XAttribute(openXml.W.hAnsi, "Arial Bold")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24"))), new Ltxml.XElement(openXml.W.t, this._email), new Ltxml.XElement(openXml.W.br)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Arial Bold"), new Ltxml.XAttribute(openXml.W.hAnsi, "Arial Bold")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24"))), new Ltxml.XElement(openXml.W.t, e.url)));
      r = l.elements(openXml.W.p)
        .lastOrDefault(), null !== r && r.addAfterSelf(s);
      var a, c = (n.saveToBase64(), n.saveToBlob())
        , X = new FileReader;
      X.onload = function (A) {
        a = A.target.result;
        for (var t = "", n = new Uint8Array(a), l = n.byteLength, o = 0; o < l; o++) t += String.fromCharCode(n[o]);
        for (var m = e.docTitle + " " + (new Date)
            .getTime(), i = window.atob(window.btoa(t)), l = i.length, n = new Uint8Array(l), o = 0; o < l; o++) n[o] = i.charCodeAt(o);
        var r = n.buffer;
        this.upload0365SharepointDocument(m, r), magentaHighlights = [], yellowHighlights = [], greenHighlights = [], cyanHighlights = [], byPositionHighlights = []
      }.bind(this), X.readAsArrayBuffer(c)
    }
  }, {
    key: "wait"
    , value: function (e, A, t, n) {
      this.imageProcessed ? (this.imageProcessed = !1, this.convertImgToBase64URL(e, A, t, n)) : setTimeout(this.wait, 100, e, A, t, n)
    }
  }, {
    key: "createvocabdoc"
    , value: function (e, A, t) {
      for (var n = 0, l = new openXml.OpenXmlPackage(this.blankDocument), o = (l.mainDocumentPart()
          .getXDocument()
          .root.element(openXml.W.body), new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.pStyle, new Ltxml.XAttribute(openXml.W.val, "Title")), new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center"))), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.t, A.translations.title)))), m = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.pStyle, new Ltxml.XAttribute(openXml.W.val, "Heading1"))), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.t, ""))), i = [], r = 0; r < t.length; r++) {
        var s = t[r][0]
          , a = "rId" + (l.mainDocumentPart()
            .getRelationships()
            .length + 1)
          , c = new Ltxml.XElement(openXml.W.drawing, new Ltxml.XElement(openXml.WP.inline, new Ltxml.XElement(openXml.WP.extent, new Ltxml.XAttribute(openXml.NoNamespace.cx, "457200"), new Ltxml.XAttribute(openXml.NoNamespace.cy, "457200")), new Ltxml.XElement(openXml.WP.docPr, new Ltxml.XAttribute(openXml.NoNamespace.id, r), new Ltxml.XAttribute(openXml.NoNamespace.name, "Pic" + r), new Ltxml.XAttribute(openXml.NoNamespace.descr, "thlogo.png")), new Ltxml.XElement(openXml.A.graphic, new Ltxml.XElement(openXml.A.graphicData, new Ltxml.XAttribute(openXml.NoNamespace.uri, "http://schemas.openxmlformats.org/drawingml/2006/picture"), new Ltxml.XElement(openXml.Pic._pic, new Ltxml.XElement(openXml.Pic.nvPicPr, new Ltxml.XElement(openXml.Pic.cNvPr, new Ltxml.XAttribute(openXml.NoNamespace.id, r), new Ltxml.XAttribute(openXml.NoNamespace.name, "thlogo.png")), new Ltxml.XElement(openXml.Pic.cNvPicPr)), new Ltxml.XElement(openXml.Pic.blipFill, new Ltxml.XElement(openXml.A.blip, new Ltxml.XAttribute(openXml.R.embed, a)), new Ltxml.XElement(openXml.A.stretch, new Ltxml.XElement(openXml.A.fillRect))), new Ltxml.XElement(openXml.Pic.spPr, new Ltxml.XElement(openXml.A.xfrm, new Ltxml.XElement(openXml.A.ext, new Ltxml.XAttribute(openXml.NoNamespace.cx, "457200"), new Ltxml.XAttribute(openXml.NoNamespace.cy, "457200"))), new Ltxml.XElement(openXml.A.prstGeom, new Ltxml.XAttribute(openXml.NoNamespace.prst, "rect"))))))))
          , X = "/word/media/image" + r + ".png"
          , p = "media/image" + r + ".png";
        l.addPart(X, openXml.contentTypes.png, "base64", s), l.mainDocumentPart()
          .addRelationship(a, openXml.relationshipTypes.image, p, "Internal"), i.push(c)
      }
      var h = new Ltxml.XElement(openXml.W.tblPr, new Ltxml.XElement(openXml.W.tblStyle, new Ltxml.XAttribute(openXml.W.val, "TableGrid")), new Ltxml.XElement(openXml.W.tblW, new Ltxml.XAttribute(openXml.W._w, 0), new Ltxml.XAttribute(openXml.W.type, "dxa")), new Ltxml.XElement(openXml.W.tblLook, new Ltxml.XAttribute(openXml.W.val, "04A0"), new Ltxml.XAttribute(openXml.W.firstRow, 1), new Ltxml.XAttribute(openXml.W.lastRow, 0), new Ltxml.XAttribute(openXml.W.firstColumn, 1), new Ltxml.XAttribute(openXml.W.lastColumn, 0), new Ltxml.XAttribute(openXml.W.noHBand, 0), new Ltxml.XAttribute(openXml.W.noVBand, 1)))
        , u = new Ltxml.XElement(openXml.W.tblGrid, new Ltxml.XElement(openXml.W.gridCol, new Ltxml.XAttribute(openXml.W._w, 1326)), new Ltxml.XElement(openXml.W.gridCol, new Ltxml.XAttribute(openXml.W._w, 5355)), new Ltxml.XElement(openXml.W.gridCol, new Ltxml.XAttribute(openXml.W._w, 1575)), new Ltxml.XElement(openXml.W.gridCol, new Ltxml.XAttribute(openXml.W._w, 1200)))
        , w = []
        , b = "E7E6E6"
        , L = new Ltxml.XElement(openXml.W.tc, new Ltxml.XElement(openXml.W.tcPr, new Ltxml.XElement(openXml.W.tcW, new Ltxml.XAttribute(openXml.W._w, 1326), new Ltxml.XAttribute(openXml.W.type, "dxa")), new Ltxml.XElement(openXml.W.shd, new Ltxml.XAttribute(openXml.W.val, "clear"), new Ltxml.XAttribute(openXml.W.color, "auto"), new Ltxml.XAttribute(openXml.W.fill, b))), new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), 0 === v ? new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")) : new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null), new Ltxml.XElement(openXml.W.t, A.translations.heading))))
        , d = new Ltxml.XElement(openXml.W.tc, new Ltxml.XElement(openXml.W.tcPr, new Ltxml.XElement(openXml.W.tcW, new Ltxml.XAttribute(openXml.W._w, 5355), new Ltxml.XAttribute(openXml.W.type, "dxa")), new Ltxml.XElement(openXml.W.shd, new Ltxml.XAttribute(openXml.W.val, "clear"), new Ltxml.XAttribute(openXml.W.color, "auto"), new Ltxml.XAttribute(openXml.W.fill, b))), new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), 0 === v ? new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")) : new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null), new Ltxml.XElement(openXml.W.t, A.translations.meaning))))
        , x = new Ltxml.XElement(openXml.W.tc, new Ltxml.XElement(openXml.W.tcPr, new Ltxml.XElement(openXml.W.tcW, new Ltxml.XAttribute(openXml.W._w, 1575), new Ltxml.XAttribute(openXml.W.type, "dxa")), new Ltxml.XElement(openXml.W.shd, new Ltxml.XAttribute(openXml.W.val, "clear"), new Ltxml.XAttribute(openXml.W.color, "auto"), new Ltxml.XAttribute(openXml.W.fill, b))), new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), 0 === v ? new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")) : new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null), new Ltxml.XElement(openXml.W.t, A.translations.symbol))))
        , W = new Ltxml.XElement(openXml.W.tc, new Ltxml.XElement(openXml.W.tcPr, new Ltxml.XElement(openXml.W.tcW, new Ltxml.XAttribute(openXml.W._w, 1200), new Ltxml.XAttribute(openXml.W.type, "dxa")), new Ltxml.XElement(openXml.W.shd, new Ltxml.XAttribute(openXml.W.val, "clear"), new Ltxml.XAttribute(openXml.W.color, "auto"), new Ltxml.XAttribute(openXml.W.fill, b))), new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), 0 === v ? new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")) : new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null), new Ltxml.XElement(openXml.W.t, A.translations.notes))))
        , g = new Ltxml.XElement(openXml.W.tr, L, d, x, W);
      w.push(g);
      for (var v = 0; v < A.words.length; v++) {
        var f = v % 2 === 0
          , E = "99CDFF"
          , L = new Ltxml.XElement(openXml.W.tc, new Ltxml.XElement(openXml.W.tcPr, new Ltxml.XElement(openXml.W.tcW, new Ltxml.XAttribute(openXml.W._w, 1326), new Ltxml.XAttribute(openXml.W.type, "dxa")), f ? new Ltxml.XElement(openXml.W.shd, new Ltxml.XAttribute(openXml.W.val, "clear"), new Ltxml.XAttribute(openXml.W.color, "auto"), new Ltxml.XAttribute(openXml.W.fill, E)) : null), new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), 0 === v ? new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")) : new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null), new Ltxml.XElement(openXml.W.t, vocabWords[v].word))))
          , y = A.words[v].definitions
          , C = "";
        if (y.length > 0)
          for (var k = 0; k < y.length; k++) C = (C + y[k])
            .trim(), k < y.length - 1 && (C += "\n\n");
        var d = new Ltxml.XElement(openXml.W.tc, new Ltxml.XElement(openXml.W.tcPr, new Ltxml.XElement(openXml.W.tcW, new Ltxml.XAttribute(openXml.W._w, 5355), new Ltxml.XAttribute(openXml.W.type, "dxa")), f ? new Ltxml.XElement(openXml.W.shd, new Ltxml.XAttribute(openXml.W.val, "clear"), new Ltxml.XAttribute(openXml.W.color, "auto"), new Ltxml.XAttribute(openXml.W.fill, E)) : null), new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), 0 === v ? new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")) : new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "24")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null), new Ltxml.XElement(openXml.W.t, C))))
          , x = new Ltxml.XElement(openXml.W.tc, new Ltxml.XElement(openXml.W.tcPr, new Ltxml.XElement(openXml.W.tcW, new Ltxml.XAttribute(openXml.W._w, 1575), new Ltxml.XAttribute(openXml.W.type, "dxa")), f ? new Ltxml.XElement(openXml.W.shd, new Ltxml.XAttribute(openXml.W.val, "clear"), new Ltxml.XAttribute(openXml.W.color, "auto"), new Ltxml.XAttribute(openXml.W.fill, E)) : null))
          , T = A.words[v].symbols;
        vocabWords[v].inflections;
        if (T.length > 0) {
          for (var S = n; S < T.length + n; S++) {
            var R = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), 0 === v ? new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")) : new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, i[S]));
            x.add(R)
          }
          n = parseInt(n) + parseInt(T.length)
        } else {
          var R = new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, "No Symbols"));
          x.add(R)
        }
        var W = new Ltxml.XElement(openXml.W.tc, new Ltxml.XElement(openXml.W.tcPr, new Ltxml.XElement(openXml.W.tcW, new Ltxml.XAttribute(openXml.W._w, 1200), new Ltxml.XAttribute(openXml.W.type, "dxa")), f ? new Ltxml.XElement(openXml.W.shd, new Ltxml.XAttribute(openXml.W.val, "clear"), new Ltxml.XAttribute(openXml.W.color, "auto"), new Ltxml.XAttribute(openXml.W.fill, E)) : null), new Ltxml.XElement(openXml.W.p, new Ltxml.XElement(openXml.W.pPr, new Ltxml.XElement(openXml.W.spacing, new Ltxml.XAttribute(openXml.W.before, 80), new Ltxml.XAttribute(openXml.W.after, 80)), 0 === v ? new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")) : new Ltxml.XElement(openXml.W.jc, new Ltxml.XAttribute(openXml.W.val, "center")), new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null)), new Ltxml.XElement(openXml.W.r, new Ltxml.XElement(openXml.W.rPr, new Ltxml.XElement(openXml.W.rFonts, new Ltxml.XAttribute(openXml.W.ascii, "Trebuchet MS"), new Ltxml.XAttribute(openXml.W.hAnsi, "Trebuchet MS")), new Ltxml.XElement(openXml.W.sz, new Ltxml.XAttribute(openXml.W.val, "32")), 0 === v ? new Ltxml.XElement(openXml.W.b) : null), new Ltxml.XElement(openXml.W.t, ""))))
          , g = new Ltxml.XElement(openXml.W.tr, L, d, x, W);
        w.push(g)
      }
      var P = new Ltxml.XElement(openXml.W.tbl, h, u, w);
      this.createAndUploadVocab("", l, o, m, P, e)
    }
  }, {
    key: "convertImgToBase64URL"
    , value: function (e, A, t, n) {
      var l = new Image;
      l.crossOrigin = "Anonymous", l.onload = function (e) {
        var l, o = document.createElement("CANVAS")
          , m = o.getContext("2d");
        o.height = e.target.height, o.width = e.target.width, m.drawImage(e.target, 0, 0), l = o.toDataURL("image/png"), this.base64ImagesArray.push(l.slice(22)), this.imageProcessed = !0, this.base64ImagesArray.length === t && A(n, this.base64ImagesArray), o = null
      }.bind(this), l.src = e
    }
  }, {
    key: "writeVocabResponse"
    , value: function (e) {
      this.imageProcessed = !0, this.base64ImagesArray = [];
      var A = [];
      vocabWords = e.vocab.words;
      var t, n = {};
      n.words = [], n.translations = e.translations, n.locale = e.locale, n.user = e.user, n.sendResponse = e.sendResponse;
      for (var l = n.translations.docTitle + (new Date)
          .getTime(), o = 0; o < vocabWords.length; o++) {
        var m = {};
        m.word = vocabWords[o].word, m.definitions = [], m.symbols = [];
        var i = vocabWords[o].inflections;
        if (i.length > 0)
          for (var r = 0; r < i.length; r++) {
            for (var s = 0; s < i[r].definitions.length; s++) m.definitions.push(i[r].definitions[s].definition);
            for (t = i[r].symbols, s = 0; s < t.length; s++) m.symbols.push(t[s]), A.push(t[s])
          }
        n.words.push(m)
      }
      var a = A.map(this.convertImgToBase64URLP);
      Promise.all(a)
        .then(function (e) {
          this.createvocabdoc(l, n, e)
        }.bind(this))["catch"](function (e) {
          console.log("Error fetching some images: " + e)
        }.bind(this))
    }
  }, {
    key: "convertImgToBase64URLP"
    , value: function (e) {
      return new Promise(function (A, t) {
        var n = new Image;
        n.crossOrigin = "Anonymous", n.onload = function (e) {
          var t, n = document.createElement("CANVAS")
            , l = n.getContext("2d");
          n.height = e.target.height, n.width = e.target.width, l.drawImage(e.target, 0, 0), t = n.toDataURL("image/png"), base64ImagesArray = [], base64ImagesArray.push(t.slice(22)), n = null, A(base64ImagesArray)
        }.bind(this), n.onerror = function () {
          t(e)
        }.bind(this), n.src = e
      })
    }
  }, {
    key: "writeVocabHTMLResponse"
    , value: function (e) {
      this.imageProcessed = !0, this.base64ImagesArray = [];
      var A = [];
      vocabWords = e.vocab.words;
      var t, n = {};
      n.words = [], n.translations = e.translations, n.locale = e.locale, n.user = e.user, n.sendResponse = e.sendResponse;
      for (var l = n.translations.docTitle + (new Date)
          .getTime(), o = 0; o < vocabWords.length; o++) {
        var m = {};
        m.word = vocabWords[o].word, m.definitions = [], m.symbols = [], m.definitions.push(vocabWords[o].definitionText), t = vocabWords[o].symbols;
        for (var i = 0; i < t.length; i++) m.symbols.push(t[i]), A.push(t[i]);
        n.words.push(m)
      }
      var r = A.map(this.convertImgToBase64URLP);
      Promise.all(r)
        .then(function (e) {
          this.createvocabdoc(l, n, e)
        }.bind(this))["catch"](function (e) {
          console.log("Error fetching some images: " + e)
        }.bind(this))
    }
  }, {
    key: "createAndUploadVocab"
    , value: function (e, A, t, n, l, o) {
      var m = document.createElement("CANVAS")
        , i = (m.getContext("2d"), new Image)
        , r = t
        , s = n
        , a = l
        , c = A;
      i.crossOrigin = "Anonymous";
      var X = new Ltxml.XElement(openXml.W.document, new Ltxml.XElement(openXml.W.body, r, s, a))
        , p = c.mainDocumentPart()
        .getXDocument();
      p.root.replaceWith(X);
      var h, u = (c.saveToBase64(), c.saveToFlatOpc(), c.saveToBlob())
        , w = new FileReader;
      w.onload = function (e) {
        h = e.target.result;
        var A = new FormData;
        A.append("file", u, "VocabularyList.docx");
        for (var t = "", n = new Uint8Array(h), l = n.byteLength, m = 0; m < l; m++) t += String.fromCharCode(n[m]);
        for (var i = window.atob(window.btoa(t)), l = i.length, n = new Uint8Array(l), m = 0; m < l; m++) n[m] = i.charCodeAt(m);
        var r = n.buffer;
        this.upload0365SharepointDocument(o, r)
      }.bind(this), w.readAsArrayBuffer(u)
    }
  }, {
    key: "upload0365SharepointDocument"
    , value: function (e, A) {
      var t = this
        , n = !1;
      this.getAccessTokenForDirectory(!1, function (l) {
        t.o365DiscoveryAccessToken = l;
        var o = new XMLHttpRequest;
        o.open("GET", "https://api.office.com/discovery/me/services", !0), o.setRequestHeader("Authorization", "Bearer " + t.o365DiscoveryAccessToken), o.setRequestHeader("Accept", "application/json;odata=verbose"), o.onreadystatechange = function (t) {
          var l = "";
          if (4 == t.target.readyState && 200 == t.target.status && (l = t.target.getResponseHeader("Content-Type"), "application/json" == l.substr(0, 16))) {
            var o = JSON.parse(t.target.response);
            this.o365ServiceEndpointURI = o.d.results[0].ServiceEndpointUri, this.o365ServiceResourceId = o.d.results[0].ServiceResourceId;
            var m = "0c83ac77-768d-478d-ab44-b3ff4c8b38dc"
              , i = chrome.identity.getRedirectURL("provider_cb")
              , r = "";
            this.getRemoteAccessToken(this.o365AccessCode, "2", this.o365ServiceResourceId, i, m, this.o365Session, r, function (t) {
              this.o365FilesAccessToken = t;
              var l = new XMLHttpRequest;
              l.open("PUT", this.o365ServiceEndpointURI + "/v1.0/files/root/children/" + e + ".docx/content?nameConflict=overwrite"), l.setRequestHeader("Authorization", "Bearer " + this.o365FilesAccessToken), l.setRequestHeader("Accept", "application/json"), l.setRequestHeader("Content-Type", "application/octet-stream"), l.onreadystatechange = function (e) {
                if (201 === e.target.status && 3 === e.target.readyState && "Created" === e.target.statusText && !n) {
                  n = !0;
                  var A = JSON.stringify(e.target.response)
                    , t = A.indexOf("eTag")
                    , l = A.indexOf("{", t)
                    , o = A.indexOf("}", l) + 1
                    , m = A.substring(l, o)
                    , i = this.o365ServiceEndpointURI
                    , r = i.substring(0, i.indexOf("_api"))
                    , s = r + "_layouts/15/WopiFrame.aspx?sourcedoc=" + m + "&action=edit";
                  window.open(s)
                }
              }.bind(this), l.send(A)
            }.bind(this))
          }
        }.bind(t), o.send()
      })
    }
  }]), A
}(texthelp.RW4GC.AuthenticatorBase);
