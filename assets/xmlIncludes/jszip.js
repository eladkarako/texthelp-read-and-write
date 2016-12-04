var JSZip = function (r, t) {
  this.files = {}, this.root = "", r && this.load(r, t)
};
JSZip.signature = {
  LOCAL_FILE_HEADER: "PK"
  , CENTRAL_FILE_HEADER: "PK"
  , CENTRAL_DIRECTORY_END: "PK"
  , ZIP64_CENTRAL_DIRECTORY_LOCATOR: "PK"
  , ZIP64_CENTRAL_DIRECTORY_END: "PK"
  , DATA_DESCRIPTOR: "PK\b"
}, JSZip.defaults = {
  base64: !1
  , binary: !1
  , dir: !1
  , date: null
}, JSZip.prototype = function () {
  var r = function (r, t, e) {
    this.name = r, this.data = t, this.options = e
  };
  r.prototype = {
    asText: function () {
      var r = this.data;
      return null === r || "undefined" == typeof r ? "" : (this.options.base64 && (r = JSZipBase64.decode(r)), this.options.binary && (r = JSZip.prototype.utf8decode(r)), r)
    }
    , asBinary: function () {
      var r = this.data;
      return null === r || "undefined" == typeof r ? "" : (this.options.base64 && (r = JSZipBase64.decode(r)), this.options.binary || (r = JSZip.prototype.utf8encode(r)), r)
    }
    , asUint8Array: function () {
      return JSZip.utils.string2Uint8Array(this.asBinary())
    }
    , asArrayBuffer: function () {
      return JSZip.utils.string2Uint8Array(this.asBinary())
        .buffer
    }
  };
  var t = function (r, t) {
      var e, i = "";
      for (e = 0; e < t; e++) i += String.fromCharCode(255 & r), r >>>= 8;
      return i
    }
    , e = function () {
      var r, t, e = {};
      for (r = 0; r < arguments.length; r++)
        for (t in arguments[r]) arguments[r].hasOwnProperty(t) && "undefined" == typeof e[t] && (e[t] = arguments[r][t]);
      return e
    }
    , i = function (r) {
      return r = r || {}, r.base64 === !0 && null == r.binary && (r.binary = !0), r = e(r, JSZip.defaults), r.date = r.date || new Date, r
    }
    , n = function (t, e, n) {
      var s = o(t);
      if (s && a.call(this, s), n = i(n), n.dir || null === e || "undefined" == typeof e) n.base64 = !1, n.binary = !1, e = null;
      else if (JSZip.support.uint8array && e instanceof Uint8Array) n.base64 = !1, n.binary = !0, e = JSZip.utils.uint8Array2String(e);
      else if (JSZip.support.arraybuffer && e instanceof ArrayBuffer) {
        n.base64 = !1, n.binary = !0;
        var u = new Uint8Array(e);
        e = JSZip.utils.uint8Array2String(u)
      } else n.binary && !n.base64 && (n.optimizedBinaryString !== !0 && (e = JSZip.utils.string2binary(e)), delete n.optimizedBinaryString);
      return this.files[t] = new r(t, e, n)
    }
    , o = function (r) {
      "/" == r.slice(-1) && (r = r.substring(0, r.length - 1));
      var t = r.lastIndexOf("/");
      return t > 0 ? r.substring(0, t) : ""
    }
    , a = function (r) {
      if ("/" != r.slice(-1) && (r += "/"), !this.files[r]) {
        var t = o(r);
        t && a.call(this, t), n.call(this, r, null, {
          dir: !0
        })
      }
      return this.files[r]
    }
    , s = function (r, e, i) {
      var n, o, a = e !== r.name
        , s = r.asBinary()
        , u = r.options;
      n = u.date.getHours(), n <<= 6, n |= u.date.getMinutes(), n <<= 5, n |= u.date.getSeconds() / 2, o = u.date.getFullYear() - 1980, o <<= 4, o |= u.date.getMonth() + 1, o <<= 5, o |= u.date.getDate();
      var f = null !== s && 0 !== s.length
        , l = JSZip.compressions[i]
        , h = f ? l.compress(s) : ""
        , d = "";
      return d += "\n\0", d += a ? "\0\b" : "\0\0", d += f ? l.magic : JSZip.compressions.STORE.magic, d += t(n, 2), d += t(o, 2), d += f ? t(this.crc32(s), 4) : "\0\0\0\0", d += f ? t(h.length, 4) : "\0\0\0\0", d += f ? t(s.length, 4) : "\0\0\0\0", d += t(e.length, 2), d += "\0\0", {
        header: d
        , compressedData: h
      }
    };
  return {
    load: function (r, t) {
      throw new Error("Load method is not defined. Is the file jszip-load.js included ?")
    }
    , filter: function (t) {
      var i, n, o, a, s = [];
      for (i in this.files) this.files.hasOwnProperty(i) && (o = this.files[i], a = new r(o.name, o.data, e(o.options)), n = i.slice(this.root.length, i.length), i.slice(0, this.root.length) === this.root && t(n, a) && s.push(a));
      return s
    }
    , file: function (r, t, e) {
      if (1 === arguments.length) {
        if (r instanceof RegExp) {
          var i = r;
          return this.filter(function (r, t) {
            return !t.options.dir && i.test(r)
          })
        }
        return this.filter(function (t, e) {
          return !e.options.dir && t === r
        })[0] || null
      }
      return r = this.root + r, n.call(this, r, t, e), this
    }
    , folder: function (r) {
      if (!r) return this;
      if (r instanceof RegExp) return this.filter(function (t, e) {
        return e.options.dir && r.test(t)
      });
      var t = this.root + r
        , e = a.call(this, t)
        , i = this.clone();
      return i.root = e.name, i
    }
    , remove: function (r) {
      r = this.root + r;
      var t = this.files[r];
      if (t || ("/" != r.slice(-1) && (r += "/"), t = this.files[r]), t)
        if (t.options.dir)
          for (var e = this.filter(function (t, e) {
              return e.name.slice(0, r.length) === r
            }), i = 0; i < e.length; i++) delete this.files[e[i].name];
        else delete this.files[r];
      return this
    }
    , generate: function (r) {
      r = e(r || {}, {
        base64: !0
        , compression: "STORE"
        , type: "base64"
      });
      var i = r.compression.toUpperCase()
        , n = []
        , o = []
        , a = 0;
      if (!JSZip.compressions[i]) throw i + " is not a valid compression method !";
      for (var u in this.files)
        if (this.files.hasOwnProperty(u)) {
          var f = this.files[u]
            , l = this.utf8encode(f.name)
            , h = ""
            , d = ""
            , c = s.call(this, f, l, i);
          h = JSZip.signature.LOCAL_FILE_HEADER + c.header + l + c.compressedData, d = JSZip.signature.CENTRAL_FILE_HEADER + "\0" + c.header + "\0\0\0\0\0\0" + (this.files[u].options.dir === !0 ? "\0\0\0" : "\0\0\0\0") + t(a, 4) + l, a += h.length, o.push(h), n.push(d)
        }
      var p = o.join("")
        , g = n.join("")
        , y = "";
      y = JSZip.signature.CENTRAL_DIRECTORY_END + "\0\0\0\0" + t(o.length, 2) + t(o.length, 2) + t(g.length, 4) + t(p.length, 4) + "\0\0";
      var b = p + g + y;
      switch (r.type.toLowerCase()) {
      case "uint8array":
        return JSZip.utils.string2Uint8Array(b);
      case "arraybuffer":
        return JSZip.utils.string2Uint8Array(b)
          .buffer;
      case "blob":
        return JSZip.utils.string2Blob(b);
      case "base64":
        return r.base64 ? JSZipBase64.encode(b) : b;
      default:
        return b
      }
    }
    , crc32: function (r, t) {
      if ("" === r || "undefined" == typeof r) return 0;
      var e = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
      "undefined" == typeof t && (t = 0);
      var i = 0
        , n = 0;
      t ^= -1;
      for (var o = 0, a = r.length; o < a; o++) n = 255 & (t ^ r.charCodeAt(o)), i = e[n], t = t >>> 8 ^ i;
      return t ^ -1
    }
    , clone: function () {
      var r = new JSZip;
      for (var t in this) "function" != typeof this[t] && (r[t] = this[t]);
      return r
    }
    , utf8encode: function (r) {
      r = r.replace(/\r\n/g, "\n");
      for (var t = "", e = 0; e < r.length; e++) {
        var i = r.charCodeAt(e);
        i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
      }
      return t
    }
    , utf8decode: function (r) {
      for (var t = "", e = 0, i = 0, n = 0, o = 0; e < r.length;) i = r.charCodeAt(e), i < 128 ? (t += String.fromCharCode(i), e++) : i > 191 && i < 224 ? (n = r.charCodeAt(e + 1), t += String.fromCharCode((31 & i) << 6 | 63 & n), e += 2) : (n = r.charCodeAt(e + 1), o = r.charCodeAt(e + 2), t += String.fromCharCode((15 & i) << 12 | (63 & n) << 6 | 63 & o), e += 3);
      return t
    }
  }
}(), JSZip.compressions = {
  STORE: {
    magic: "\0\0"
    , compress: function (r) {
      return r
    }
    , uncompress: function (r) {
      return r
    }
  }
}, JSZip.support = {
  arraybuffer: function () {
    return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
  }()
  , uint8array: function () {
    return "undefined" != typeof Uint8Array
  }()
  , blob: function () {
    if ("undefined" == typeof ArrayBuffer) return !1;
    var r = new ArrayBuffer(0);
    try {
      return 0 === new Blob([r], {
          type: "application/zip"
        })
        .size
    } catch (t) {}
    try {
      var e = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder);
      return e.append(r), 0 === e.getBlob("application/zip")
        .size
    } catch (t) {}
    return !1
  }()
}, JSZip.utils = {
  string2binary: function (r) {
    for (var t = "", e = 0; e < r.length; e++) t += String.fromCharCode(255 & r.charCodeAt(e));
    return t
  }
  , string2Uint8Array: function (r) {
    if (!JSZip.support.uint8array) throw new Error("Uint8Array is not supported by this browser");
    for (var t = new ArrayBuffer(r.length), e = new Uint8Array(t), i = 0; i < r.length; i++) e[i] = r.charCodeAt(i);
    return e
  }
  , uint8Array2String: function (r) {
    if (!JSZip.support.uint8array) throw new Error("Uint8Array is not supported by this browser");
    for (var t = "", e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
    return t
  }
  , string2Blob: function (r) {
    if (!JSZip.support.blob) throw new Error("Blob is not supported by this browser");
    var t = JSZip.utils.string2Uint8Array(r)
      .buffer;
    try {
      return new Blob([t], {
        type: "application/zip"
      })
    } catch (e) {}
    try {
      var i = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder);
      return i.append(t), i.getBlob("application/zip")
    } catch (e) {}
    throw new Error("Bug : can't construct the Blob.")
  }
};
var JSZipBase64 = function () {
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return {
    encode: function (t, e) {
      for (var i, n, o, a, s, u, f, l = "", h = 0; h < t.length;) i = t.charCodeAt(h++), n = t.charCodeAt(h++), o = t.charCodeAt(h++), a = i >> 2, s = (3 & i) << 4 | n >> 4, u = (15 & n) << 2 | o >> 6, f = 63 & o, isNaN(n) ? u = f = 64 : isNaN(o) && (f = 64), l = l + r.charAt(a) + r.charAt(s) + r.charAt(u) + r.charAt(f);
      return l
    }
    , decode: function (t, e) {
      var i, n, o, a, s, u, f, l = ""
        , h = 0;
      for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < t.length;) a = r.indexOf(t.charAt(h++)), s = r.indexOf(t.charAt(h++)), u = r.indexOf(t.charAt(h++)), f = r.indexOf(t.charAt(h++)), i = a << 2 | s >> 4, n = (15 & s) << 4 | u >> 2, o = (3 & u) << 6 | f, l += String.fromCharCode(i), 64 != u && (l += String.fromCharCode(n)), 64 != f && (l += String.fromCharCode(o));
      return l
    }
  }
}();
