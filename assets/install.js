var textHelp = textHelp || {};
textHelp.thWebReaderModule = {}
  , function () {
    this.ThirdPartyInstaller = function () {
      var e = null
        , t = "";
      this.onjQueryReady = function () {
        this.$thjQuery.ajaxSetup({
          cache: !0
        });
        var a = document.createElement("link");
        a.href = t + "assets/notifications.css", a.rel = "stylesheet", a.type = "text/css", a.title = "notifications", a.onload = a.onreadystatechange = function () {
          !this.readyState || "loaded" == this.readyState || "complete" == this.readyState
        }, e.appendChild(a), this.$thjQuery.getScript(t + "assets/notifications.js"), this.$thjQuery.ajaxSetup({
          cache: !1
        })
      }, this.injectJQuery = function (e, t) {
        var a = document.createElement("script");
        a.src = e, a.async = !0, a.onload = a.onreadystatechange = function () {
          this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (window.$thjQuery = jQuery.noConflict(!0), a.onload = a.onreadystatechange = null, void 0 != t && t())
        };
        var n = document.getElementById("webReaderModule");
        null !== n && n.appendChild(a)
      }, this.install = function () {
        void 0 === this.$thjQuery && (e = document.getElementById("webReaderModule"), t = e.getAttribute("data-root"), this.injectJQuery(t + "assets/jquery.js", this.onjQueryReady))
      }
    }, this.installer = new textHelp.thWebReaderModule.ThirdPartyInstaller, this.installer.install()
  }.apply(textHelp.thWebReaderModule);
