this.RWSocketManager = function () {
  this._ws = null, this._openScoped = null, this._socketOpen = !1, this._numTries = 0, this.onRWExtensionIsInstalled = function (t) {
    chrome.runtime.lastError || void 0 != t && (this._ws = new WebSocket("ws://localhost:4808"), this._ws.onopen = this.bind(this.onOpen, this), this._ws.onclose = this.bind(this.onClose, this), this._openScoped = this.bind(this.open, this))
  }, this.onGetPlatformInfo = function (t) {
    try {
      if ("win" !== t.os) return;
      chrome.management.get("ofdopmlmgifpfkijadehmhjccbefaeec", this.bind(this.onRWExtensionIsInstalled, this))
    } catch (n) {}
  }, this.onOpen = function () {
    this._socketOpen = !0
  }, this.onClose = function (t) {
    this._ws.close(), this._ws = null, this._socketOpen && (this._socketOpen = !1), setTimeout(this._openScoped, 100)
  }, this.open = function (t) {
    try {
      chrome.runtime.getPlatformInfo(this.bind(this.onGetPlatformInfo, this))
    } catch (n) {
      console.log(n)
    }
  }, this.isOpen = function () {
    return this._socketOpen
  }, this.bind = function (t, n) {
    return function () {
      return t.apply(n, Array.prototype.slice.call(arguments))
    }
  }, this._openScoped = this.bind(this.open, this)
}, this.socketManager = new RWSocketManager, this.socketManager.open();
