var thHash = {};
thHash.hashEmail = function (h) {
  try {
    h = h.toLowerCase();
    var t = "hfdu9b89';JHK7898hbh;';[/"
      , a = h.split("@")
      , r = a[0].replace("%", "")
      , H = a[1];
    return r += t, thHash.hash(r) + "@" + H
  } catch (o) {
    console.log(o)
  }
}, thHash.hash = function (h) {
  h = unescape(encodeURIComponent(h));
  var t = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
    , a = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  h += String.fromCharCode(128);
  for (var r = h.length / 4 + 2, H = Math.ceil(r / 16), o = new Array(H), n = 0; n < H; n++) {
    o[n] = new Array(16);
    for (var s = 0; s < 16; s++) o[n][s] = h.charCodeAt(64 * n + 4 * s) << 24 | h.charCodeAt(64 * n + 4 * s + 1) << 16 | h.charCodeAt(64 * n + 4 * s + 2) << 8 | h.charCodeAt(64 * n + 4 * s + 3)
  }
  o[H - 1][14] = 8 * (h.length - 1) / Math.pow(2, 32), o[H - 1][14] = Math.floor(o[H - 1][14]), o[H - 1][15] = 8 * (h.length - 1) & 4294967295;
  for (var e, R, u, c, f, i, v, O, S = new Array(64), n = 0; n < H; n++) {
    for (var T = 0; T < 16; T++) S[T] = o[n][T];
    for (var T = 16; T < 64; T++) S[T] = thHash.σ1(S[T - 2]) + S[T - 7] + thHash.σ0(S[T - 15]) + S[T - 16] & 4294967295;
    e = a[0], R = a[1], u = a[2], c = a[3], f = a[4], i = a[5], v = a[6], O = a[7];
    for (var T = 0; T < 64; T++) {
      var l = O + thHash.Σ1(f) + thHash.Ch(f, i, v) + t[T] + S[T]
        , C = thHash.Σ0(e) + thHash.Maj(e, R, u);
      O = v, v = i, i = f, f = c + l & 4294967295, c = u, u = R, R = e, e = l + C & 4294967295
    }
    a[0] = a[0] + e & 4294967295, a[1] = a[1] + R & 4294967295, a[2] = a[2] + u & 4294967295, a[3] = a[3] + c & 4294967295, a[4] = a[4] + f & 4294967295, a[5] = a[5] + i & 4294967295, a[6] = a[6] + v & 4294967295, a[7] = a[7] + O & 4294967295
  }
  return thHash.toHexStr(a[0]) + thHash.toHexStr(a[1]) + thHash.toHexStr(a[2]) + thHash.toHexStr(a[3]) + thHash.toHexStr(a[4]) + thHash.toHexStr(a[5]) + thHash.toHexStr(a[6]) + thHash.toHexStr(a[7])
}, thHash.ROTR = function (h, t) {
  return t >>> h | t << 32 - h
}, thHash.Σ0 = function (h) {
  return thHash.ROTR(2, h) ^ thHash.ROTR(13, h) ^ thHash.ROTR(22, h)
}, thHash.Σ1 = function (h) {
  return thHash.ROTR(6, h) ^ thHash.ROTR(11, h) ^ thHash.ROTR(25, h)
}, thHash.σ0 = function (h) {
  return thHash.ROTR(7, h) ^ thHash.ROTR(18, h) ^ h >>> 3
}, thHash.σ1 = function (h) {
  return thHash.ROTR(17, h) ^ thHash.ROTR(19, h) ^ h >>> 10
}, thHash.Ch = function (h, t, a) {
  return h & t ^ ~h & a
}, thHash.Maj = function (h, t, a) {
  return h & t ^ h & a ^ t & a
}, thHash.toHexStr = function (h) {
  for (var t, a = "", r = 7; r >= 0; r--) t = h >>> 4 * r & 15, a += t.toString(16);
  return a
};
