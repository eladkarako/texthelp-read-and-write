! function (e) {
  var t = new Blob([document.querySelector("#thRecordWorker")
      .textContent])
    , o = function (o, n) {
      var s = n || {}
        , r = s.bufferLen || 4096;
      this.context = o.context, _self = this, _self.closed = !1, this.context.createScriptProcessor ? this.node = this.context.createScriptProcessor(r, 2, 2) : this.node = this.context.createJavaScriptNode(r, 2, 2), this.worker = new Worker(e.URL.createObjectURL(t)), this.worker.postMessage({
        command: "init"
        , config: {
          sampleRate: this.context.sampleRate
        }
      });
      var c, a = !1;
      this.node.onaudioprocess = function (e) {
        _self.closed || a && _self.worker.postMessage({
          command: "record"
          , buffer: [e.inputBuffer.getChannelData(0), e.inputBuffer.getChannelData(1)]
        })
      }, this.configure = function (e) {
        for (var t in e) e.hasOwnProperty(t) && (s[t] = e[t])
      }, this.record = function () {
        a = !0
      }, this.stop = function () {
        a = !1
      }, this.clear = function () {
        _self.worker.postMessage({
          command: "clear"
        })
      }, this.getBuffers = function (e) {
        _self.closed || (c = e || s.callback, _self.worker.postMessage({
          command: "getBuffers"
        }))
      }, this.exportWAV = function (e, t) {
        if (!_self.closed) {
          if (c = e || s.callback, t = t || s.type || "audio/wav", !c) throw new Error("Callback not set");
          _self.worker.postMessage({
            command: "exportWAV"
            , type: t
          })
        }
      }, this.exportMonoWAV = function (e, t) {
        if (!_self.closed) {
          if (c = e || s.callback, t = t || s.type || "audio/wav", !c) throw new Error("Callback not set");
          _self.worker.postMessage({
            command: "exportMonoWAV"
            , type: t
          })
        }
      }, this.worker.onmessage = function (e) {
        if (!_self.closed) {
          var t = e.data;
          c(t)
        }
      }, o.connect(this.node), this.node.connect(this.context.destination)
    };
  o.setupDownload = function (t, o) {
    var n = (e.URL || e.webkitURL)
      .createObjectURL(t)
      , s = document.getElementById("saveWavFile");
    s.href = n, s.download = o || "output.wav"
  }, e.Recorder = o
}(window);
