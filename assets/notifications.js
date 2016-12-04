window.notification, window.notification = function (n, t) {
  var i, e, o, s, a, r;
  return n = {
      msg: n.msg || ""
      , type: n.type || "general"
      , sticky: n.sticky || !1
      , delay: n.sticky ? null : n.delay || 6e3
      , fx: n.fx || "css3"
      , animIn: n.animIn || "fadeIn"
      , animOut: n.animOut || "fadeOut"
    }, t = t || function () {}, e = $thjQuery(".th-notifications")
    .length ? $thjQuery(".th-notifications") : $thjQuery('<div class="th-notifications"/>')
    .appendTo("body"), o = '<div class="msg ' + n.type + '">\n    <div class="msg-content">\n        <p>' + n.msg + '</p>\n        <div class="close"></div>\n    </div>\n</div>', i = $thjQuery(o), s = function (n) {
      var t, i;
      return i = $thjQuery(window)
        .height(), t = n.offset()
        .top, t < i / 2
    }, s(e) ? i.appendTo(e) : i.prependTo(e), r = function (e) {
      var o;
      if (o = {
          show: function () {
            return "jQuery" === n.fx ? i.hide()
              .fadeIn() : i.addClass(n.animIn)
          }
          , hide: function () {
            return "jQuery" === n.fx ? i.find(".msg-content")
              .hide(300, function () {
                if ($thjQuery(this)
                  .parent()
                  .remove(), i.off(), t.apply(this), a) return clearTimeout(a)
              }) : (i.removeClass(n.animIn)
                .addClass(n.animOut), setTimeout(function () {
                  if (i.remove()
                    .off(), t.apply(this), a) return clearTimeout(a)
                }, 1200))
          }
        }, o[e]) return o[e].apply(this)
    }, r("show"), !n.sticky && n.delay && (a = setTimeout(function () {
      return r("hide")
    }, n.delay)), i.on("click", ".close", function () {
      var n;
      return n = $thjQuery(this), "absolute" === n.css("position"), r("hide")
    })
};
