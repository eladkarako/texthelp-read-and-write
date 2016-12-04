function init(e) {
  sampleRate = e.sampleRate
}

function record(e) {
  recBuffersL.push(e[0]), recBuffersR.push(e[1]), recLength += e[0].length
}

function exportWAV(e) {
  var t = mergeBuffers(recBuffersL, recLength)
    , r = mergeBuffers(recBuffersR, recLength)
    , n = interleave(t, r)
    , a = encodeWAV(n)
    , f = new Blob([a], {
      type: e
    });
  this.postMessage(f)
}

function exportMonoWAV(e) {
  var t = mergeBuffers(recBuffersL, recLength)
    , r = encodeWAV(t, !0)
    , n = new Blob([r], {
      type: e
    });
  this.postMessage(n)
}

function getBuffers() {
  var e = [];
  e.push(mergeBuffers(recBuffersL, recLength)), e.push(mergeBuffers(recBuffersR, recLength)), this.postMessage(e)
}

function clear() {
  recLength = 0, recBuffersL = [], recBuffersR = []
}

function mergeBuffers(e, t) {
  for (var r = new Float32Array(t), n = 0, a = 0; a < e.length; a++) r.set(e[a], n), n += e[a].length;
  return r
}

function interleave(e, t) {
  for (var r = e.length + t.length, n = new Float32Array(r), a = 0, f = 0; a < r;) n[a++] = e[f], n[a++] = t[f], f++;
  return n
}

function interleaveForceMono(e, t) {
  for (var r = e.length, n = new Float32Array(r), a = 0, f = 0; a < r;) n[a++] = .25 * (e[f++] + e[f++] + e[f++] + e[f++]);
  return n
}

function floatTo16BitPCM(e, t, r) {
  for (var n = 0; n < r.length; n++, t += 2) {
    var a = Math.max(-1, Math.min(1, r[n]));
    e.setInt16(t, a < 0 ? 32768 * a : 32767 * a, !0)
  }
}

function writeString(e, t, r) {
  for (var n = 0; n < r.length; n++) e.setUint8(t + n, r.charCodeAt(n))
}

function encodeWAV(e, t) {
  var r = new ArrayBuffer(44 + 2 * e.length)
    , n = new DataView(r);
  return writeString(n, 0, "RIFF"), n.setUint32(4, 32 + 2 * e.length, !0), writeString(n, 8, "WAVE"), writeString(n, 12, "fmt "), n.setUint32(16, 16, !0), n.setUint16(20, 1, !0), n.setUint16(22, t ? 1 : 2, !0), n.setUint32(24, sampleRate, !0), n.setUint32(28, 2 * sampleRate, !0), n.setUint16(32, 2, !0), n.setUint16(34, 16, !0), writeString(n, 36, "data"), n.setUint32(40, 2 * e.length, !0), floatTo16BitPCM(n, 44, e), n
}
var recLength = 0
  , recBuffersL = []
  , recBuffersR = []
  , sampleRate;
this.onmessage = function (e) {
  switch (e.data.command) {
  case "init":
    init(e.data.config);
    break;
  case "record":
    record(e.data.buffer);
    break;
  case "exportWAV":
    exportWAV(e.data.type);
    break;
  case "exportMonoWAV":
    exportMonoWAV(e.data.type);
    break;
  case "getBuffers":
    getBuffers();
    break;
  case "clear":
    clear()
  }
};
