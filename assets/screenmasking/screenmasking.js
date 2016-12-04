var textHelp = textHelp || {};
textHelp.thScreenMasking = {}
  , function () {
    this.ScreenMasking = function () {
      var e = !1
        , t = 80
        , n = this;
      this.maskMove = function (e) {
        var t = this.getPosition(e);
        this.drawMask(t.y, window.scrollY, window.scrollHeight, window.innerHeight)
      }.bind(this), this.frameMove = function (e) {
        if (currFrame = e.view.frameElement, null != currFrame) {
          var t = currFrame.getBoundingClientRect()
            , i = (currFrame.getBoundingClientRect(), t.left, t.top)
            , o = window.scrollY;
          n.drawMask(e.clientY + i + o, o, currFrame.ownerDocument.body.scrollHeight, window.innerHeight)
        }
      }.bind(this), this.drawMask = function (e, n, i, o) {
        var s = t / 2
          , l = 0
          , m = e - s
          , d = e + s
          , a = document.getElementById("texthelpTopMask");
        if (a.style.top = "0px", a.style.left = "0px", l = i, m > 0 ? a.style.height = m + "px" : a.style.height = "0px", a = document.getElementById("texthelpMiddleMask"), a.style.left = "0px", m > 0 ? a.style.top = m + "px" : a.style.top = "0px", e - n + s > o ? a.style.height = "100px" : m > 0 ? a.style.height = d - m + "px" : a.style.height = t + m + "px", a = document.getElementById("texthelpBottomMask"), a.style.left = "0px", e - n + s > o) a.style.height = n + o + "px", a.style.height = "0px";
        else {
          var r = document.body
            , h = document.documentElement
            , c = Math.max(r.scrollHeight, r.offsetHeight, h.clientHeight, h.scrollHeight, h.offsetHeight);
          a.style.top = e + s + "px", a.style.height = c - (e + s) + "px"
        }
      }.bind(this), this.getPosition = function (e) {
        e = e || window.event;
        var t = {
          x: 0
          , y: 0
        };
        return e.pageX || e.pageY ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft, t.y = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop), t
      }.bind(this), this.toggle = function (t) {
        e = t, e ? (this.addMaskElement("div", "texthelpMasking", "texthelpTopMask"), this.addMaskElement("div", "texthelpMiddleMask", "texthelpMiddleMask"), this.addMaskElement("div", "texthelpMasking", "texthelpBottomMask"), document.addEventListener("mousemove", this.maskMove, !1), this.toggleFrameEvents(!0), this.maskMove()) : (document.removeEventListener("mousemove", this.maskMove, !1), this.toggleFrameEvents(!1), this.removeMaskElement("texthelpTopMask"), this.removeMaskElement("texthelpMiddleMask"), this.removeMaskElement("texthelpBottomMask"))
      }.bind(this), this.toggleFrameEvents = function (t) {
        if (e) {
          try {
            var n = document.getElementById("texthelp-dictionary-frame")
              .contentWindow.document;
            t ? n.addEventListener("mousemove", this.frameMove, !1) : n.removeEventListener("mousemove", this.frameMove, !1)
          } catch (i) {}
          try {
            var o = document.getElementById("texthelp-picture-dictionary-frame")
              .contentWindow.document;
            t ? o.addEventListener("mousemove", this.frameMove, !1) : o.removeEventListener("mousemove", this.frameMove, !1)
          } catch (i) {}
          try {
            var s = document.getElementById("texthelp-translator-frame")
              .contentWindow.document;
            t ? s.addEventListener("mousemove", this.frameMove, !1) : s.removeEventListener("mousemove", this.frameMove, !1)
          } catch (i) {}
        }
      }.bind(this), this.addMaskElement = function (e, t, n) {
        var i = document.body
          , o = document.createElement(e);
        o.setAttribute("id", n), o.setAttribute("class", t), i.appendChild(o)
      }.bind(this), this.removeMaskElement = function (e) {
        var t = document.getElementById(e);
        t.parentNode.removeChild(t)
      }, this.addElement = function (e, t) {
        var n = documen.body
          , i = document.createElement(e);
        i.setAttribute("id", t), n.appendChild(i)
      }, this.install = function () {}
    }, this.screenmasking = new textHelp.thScreenMasking.ScreenMasking, this.screenmasking.install()
  }.apply(textHelp.thScreenMasking);
