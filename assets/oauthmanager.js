this.oAuthManager = function () {
  this._profile = null, this._xmlhttp = new XMLHttpRequest, this._token = "", this._getProfileDetailsURL = "", this._callback = null, this._params = null, this.refreshAuthToken = function () {
    this._callback = null, this._params = null, chrome.identity.getAuthToken({
      interactive: !0
    }, this.bind(this.onToken, this))
  }, this.refreshAuthTokenSilent = function () {
    this._callback = null, this._params = null, chrome.identity.getAuthToken({
      interactive: !1
    }, this.bind(this.onTokenSilent, this))
  }, this.getAuthToken = function (t, i) {
    return void 0 == t ? void this.refreshAuthToken() : null == t ? void this.refreshAuthToken() : (this._callback = t, this._params = i, void chrome.identity.getAuthToken({
      interactive: !0
    }, this.bind(this.onToken, this)))
  }, this.getAuthTokenSilent = function (t, i) {
    return void 0 == t ? void this.refreshAuthTokenSilent() : null == t ? void this.refreshAuthTokenSilent() : (this._callback = t, this._params = i, void chrome.identity.getAuthToken({
      interactive: !1
    }, this.bind(this.onTokenSilent, this)))
  }, this.onToken = function (t) {
    if (null == t || void 0 == t) {
      if (null == this._callback) return;
      return this._callback(null, this._params), this._callback = null, void(this._params = null)
    }
    this._token = t, this._getProfileDetailsURL = "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + t, this._xmlhttp.onreadystatechange = this.bind(this.onProfile, this), this._xmlhttp.open("GET", this._getProfileDetailsURL, !0), this._xmlhttp.send()
  }, this.onTokenSilent = function (t) {
    if (null == t || void 0 == t) {
      if (null == this._callback) return;
      return this._callback(null, this._params), this._callback = null, void(this._params = null)
    }
    this._token = t, this._getProfileDetailsURL = "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + t, this._xmlhttp.onreadystatechange = this.bind(this.onProfileSilent, this), this._xmlhttp.open("GET", this._getProfileDetailsURL, !0), this._xmlhttp.send()
  }, this.onProfile = function () {
    if (4 == this._xmlhttp.readyState && 200 == this._xmlhttp.status) {
      if (this._profile = JSON.parse(this._xmlhttp.responseText), this.convertImgToBase64(this._profile.picture, this.bind(this.onConvertProfileImagetoBase64, this)), this._profile.token = this._token, null == this._callback) return;
      this._callback(this._profile, this._params), this._callback = null, this._params = null
    }
    4 == this._xmlhttp.readyState && 401 == this._xmlhttp.status && (console.log("401 error"), chrome.identity.removeCachedAuthToken({
      token: this._token
    }, this.bind(this.onCachedTokenRemoved, this)))
  }, this.onProfileSilent = function () {
    if (4 == this._xmlhttp.readyState && 200 == this._xmlhttp.status) {
      if (this._profile = JSON.parse(this._xmlhttp.responseText), this.convertImgToBase64(this._profile.picture, this.bind(this.onConvertProfileImagetoBase64, this)), this._profile.token = this._token, null == this._callback) return;
      this._callback(this._profile, this._params), this._callback = null, this._params = null
    }
    4 == this._xmlhttp.readyState && 401 == this._xmlhttp.status && (console.log("401 error"), chrome.identity.removeCachedAuthToken({
      token: this._token
    }, this.bind(this.onCachedTokenRemovedSilent, this)))
  }, this.getProfileDetails = function () {
    return this._profile
  }, this.onConvertProfileImagetoBase64 = function (t) {
    this._profile.pictureBase64 = t
  }, this.onCachedTokenRemoved = function () {
    this.refreshAuthToken()
  }, this.onCachedTokenRemovedSilent = function () {
    this.refreshAuthTokenSilent()
  }, this.convertImgToBase64 = function (t, i, e) {
    var s = document.createElement("CANVAS")
      , n = s.getContext("2d")
      , h = new Image;
    h.crossOrigin = "Anonymous", h.onload = function () {
      s.height = h.height, s.width = h.width, n.drawImage(h, 0, 0);
      var t = s.toDataURL(e || "image/png");
      i.call(this, t), s = null
    }, h.src = t
  }, this.bind = function (t, i) {
    return function () {
      return t.apply(i, Array.prototype.slice.call(arguments))
    }
  }
};
