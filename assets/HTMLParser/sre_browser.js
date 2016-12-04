var COMPILED = !0
  , goog = goog || {};
goog.global = this, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.provide = function (e) {
  if (!COMPILED) {
    if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
    delete goog.implicitNamespaces_[e];
    for (var t = e;
      (t = t.substring(0, t.lastIndexOf("."))) && !goog.getObjectByName(t);) goog.implicitNamespaces_[t] = !0
  }
  goog.exportPath_(e)
}, goog.setTestOnly = function (e) {
  if (COMPILED && !goog.DEBUG) throw e = e || "", Error(": " + e)
}, COMPILED || (goog.isProvided_ = function (e) {
  return !goog.implicitNamespaces_[e] && !!goog.getObjectByName(e)
}, goog.implicitNamespaces_ = {}), goog.exportPath_ = function (e, t, r) {
  e = e.split("."), r = r || goog.global, e[0] in r || !r.execScript || r.execScript("var " + e[0]);
  for (var s; e.length && (s = e.shift());) !e.length && goog.isDef(t) ? r[s] = t : r = r[s] ? r[s] : r[s] = {}
}, goog.getObjectByName = function (e, t) {
  for (var r, s = e.split("."), n = t || goog.global; r = s.shift();) {
    if (!goog.isDefAndNotNull(n[r])) return null;
    n = n[r]
  }
  return n
}, goog.globalize = function (e, t) {
  var r, s = t || goog.global;
  for (r in e) s[r] = e[r]
}, goog.addDependency = function (e, t, r) {
  if (!COMPILED) {
    var s;
    e = e.replace(/\\/g, "/");
    for (var n = goog.dependencies_, i = 0; s = t[i]; i++) n.nameToPath[s] = e, e in n.pathToNames || (n.pathToNames[e] = {}), n.pathToNames[e][s] = !0;
    for (s = 0; t = r[s]; s++) e in n.requires || (n.requires[e] = {}), n.requires[e][t] = !0
  }
}, goog.ENABLE_DEBUG_LOADER = !0, goog.require = function (e) {
  if (!COMPILED && !goog.isProvided_(e)) {
    if (goog.ENABLE_DEBUG_LOADER) {
      var t = goog.getPathFromDeps_(e);
      if (t) return goog.included_[t] = !0, void goog.writeScripts_()
    }
    throw e = "goog.require could not find: " + e, goog.global.console && goog.global.console.error(e), Error(e)
  }
}, goog.basePath = "", goog.global.CLOSURE_IMPORT_SCRIPT = null, goog.nullFunction = function () {}, goog.identityFunction = function (e, t) {
  return e
}, goog.abstractMethod = function () {
  throw Error("unimplemented abstract method")
}, goog.addSingletonGetter = function (e) {
  e.getInstance = function () {
    return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), e.instance_ = new e)
  }
}, goog.instantiatedSingletons_ = [], !COMPILED && goog.ENABLE_DEBUG_LOADER && (goog.included_ = {}, goog.dependencies_ = {
  pathToNames: {}
  , nameToPath: {}
  , requires: {}
  , visited: {}
  , written: {}
}, goog.inHtmlDocument_ = function () {
  var e = goog.global.document;
  return "undefined" != typeof e && "write" in e
}, goog.findBasePath_ = function () {
  if (goog.global.CLOSURE_BASE_PATH) goog.basePath = goog.global.CLOSURE_BASE_PATH;
  else if (goog.inHtmlDocument_())
    for (var e = goog.global.document.getElementsByTagName("script"), t = e.length - 1; 0 <= t; --t) {
      var r = e[t].src
        , s = r.lastIndexOf("?")
        , s = -1 == s ? r.length : s;
      if ("base.js" == r.substr(s - 7, 7)) {
        goog.basePath = r.substr(0, s - 7);
        break
      }
    }
}, goog.importScript_ = function (e) {
  var t = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
  !goog.dependencies_.written[e] && t(e) && (goog.dependencies_.written[e] = !0)
}, goog.writeScriptTag_ = function (e) {
  if (goog.inHtmlDocument_()) {
    var t = goog.global.document;
    if ("complete" == t.readyState) {
      if (/\bdeps.js$/.test(e)) return !1;
      throw Error('Cannot write "' + e + '" after document load')
    }
    return t.write('<script type="text/javascript" src="' + e + '"></script>'), !0
  }
  return !1
}, goog.writeScripts_ = function () {
  function e(t) {
    if (!(t in n.written)) {
      if (!(t in n.visited) && (n.visited[t] = !0, t in n.requires))
        for (var i in n.requires[t])
          if (!goog.isProvided_(i)) {
            if (!(i in n.nameToPath)) throw Error("Undefined nameToPath for " + i);
            e(n.nameToPath[i])
          }
      t in s || (s[t] = !0, r.push(t))
    }
  }
  var t, r = []
    , s = {}
    , n = goog.dependencies_;
  for (t in goog.included_) n.written[t] || e(t);
  for (t = 0; t < r.length; t++) {
    if (!r[t]) throw Error("Undefined script input");
    goog.importScript_(goog.basePath + r[t])
  }
}, goog.getPathFromDeps_ = function (e) {
  return e in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[e] : null
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")), goog.typeOf = function (e) {
  var t = typeof e;
  if ("object" == t) {
    if (!e) return "null";
    if (e instanceof Array) return "array";
    if (e instanceof Object) return t;
    var r = Object.prototype.toString.call(e);
    if ("[object Window]" == r) return "object";
    if ("[object Array]" == r || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
    if ("[object Function]" == r || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
  } else if ("function" == t && "undefined" == typeof e.call) return "object";
  return t
}, goog.isDef = function (e) {
  return void 0 !== e
}, goog.isNull = function (e) {
  return null === e
}, goog.isDefAndNotNull = function (e) {
  return null != e
}, goog.isArray = function (e) {
  return "array" == goog.typeOf(e)
}, goog.isArrayLike = function (e) {
  var t = goog.typeOf(e);
  return "array" == t || "object" == t && "number" == typeof e.length
}, goog.isDateLike = function (e) {
  return goog.isObject(e) && "function" == typeof e.getFullYear
}, goog.isString = function (e) {
  return "string" == typeof e
}, goog.isBoolean = function (e) {
  return "boolean" == typeof e
}, goog.isNumber = function (e) {
  return "number" == typeof e
}, goog.isFunction = function (e) {
  return "function" == goog.typeOf(e)
}, goog.isObject = function (e) {
  var t = typeof e;
  return "object" == t && null != e || "function" == t
}, goog.getUid = function (e) {
  return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
}, goog.removeUid = function (e) {
  "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete e[goog.UID_PROPERTY_]
  } catch (t) {}
}, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function (e) {
  var t = goog.typeOf(e);
  if ("object" == t || "array" == t) {
    if (e.clone) return e.clone();
    var r, t = "array" == t ? [] : {};
    for (r in e) t[r] = goog.cloneObject(e[r]);
    return t
  }
  return e
}, goog.bindNative_ = function (e, t, r) {
  return e.call.apply(e.bind, arguments)
}, goog.bindJs_ = function (e, t, r) {
  if (!e) throw Error();
  if (2 < arguments.length) {
    var s = Array.prototype.slice.call(arguments, 2);
    return function () {
      var r = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(r, s), e.apply(t, r)
    }
  }
  return function () {
    return e.apply(t, arguments)
  }
}, goog.bind = function (e, t, r) {
  return Function.prototype.bind && -1 != Function.prototype.bind.toString()
    .indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_, goog.bind.apply(null, arguments)
}, goog.partial = function (e, t) {
  var r = Array.prototype.slice.call(arguments, 1);
  return function () {
    var t = Array.prototype.slice.call(arguments);
    return t.unshift.apply(t, r), e.apply(this, t)
  }
}, goog.mixin = function (e, t) {
  for (var r in t) e[r] = t[r]
}, goog.now = goog.TRUSTED_SITE && Date.now || function () {
  return +new Date
}, goog.globalEval = function (e) {
  if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
  else {
    if (!goog.global.eval) throw Error("goog.globalEval not available");
    if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) goog.global.eval(e);
    else {
      var t = goog.global.document
        , r = t.createElement("script");
      r.type = "text/javascript", r.defer = !1, r.appendChild(t.createTextNode(e)), t.body.appendChild(r), t.body.removeChild(r)
    }
  }
}, goog.evalWorksForGlobals_ = null, goog.getCssName = function (e, t) {
  var r = function (e) {
      return goog.cssNameMapping_[e] || e
    }
    , s = function (e) {
      e = e.split("-");
      for (var t = [], s = 0; s < e.length; s++) t.push(r(e[s]));
      return t.join("-")
    }
    , s = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? r : s : function (e) {
      return e
    };
  return t ? e + "-" + s(t) : s(e)
}, goog.setCssNameMapping = function (e, t) {
  goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = t
}, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function (e, t) {
  var r, s = t || {};
  for (r in s) {
    var n = ("" + s[r])
      .replace(/\$/g, "$$$$");
    e = e.replace(new RegExp("\\{\\$" + r + "\\}", "gi"), n)
  }
  return e
}, goog.getMsgWithFallback = function (e, t) {
  return e
}, goog.exportSymbol = function (e, t, r) {
  goog.exportPath_(e, t, r)
}, goog.exportProperty = function (e, t, r) {
  e[t] = r
}, goog.inherits = function (e, t) {
  function r() {}
  r.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new r, e.prototype.constructor = e
}, goog.base = function (e, t, r) {
  var s = arguments.callee.caller;
  if (s.superClass_) return s.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1));
  for (var n = Array.prototype.slice.call(arguments, 2), i = !1, a = e.constructor; a; a = a.superClass_ && a.superClass_.constructor)
    if (a.prototype[t] === s) i = !0;
    else if (i) return a.prototype[t].apply(e, n);
  if (e[t] === s) return e.constructor.prototype[t].apply(e, n);
  throw Error("goog.base called from a method of one name to a method of a different name")
}, goog.scope = function (e) {
  e.call(goog.global)
};
var sre = {
  SystemExternal: function () {}
};
sre.SystemExternal.locationSupported = function () {
    return "undefined" != typeof location
  }, sre.SystemExternal.getLocation = function () {
    var e = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/HTMLParser"; - 1 < e.indexOf("tokens.fileLocation") && (e = "//speechstreamtoolbar.speechstream.net/MathSpeak/latest");
    for (var t = document.getElementsByTagName("script"), r = 0; r < t.length; r++)
      if (-1 != t[r].src.indexOf("sre_mathjax.js")) {
        e = t[r].src.replace("/sre_mathjax.js", "");
        break
      }
    return e
  }, sre.SystemExternal.url = (sre.SystemExternal.locationSupported(), sre.SystemExternal.getLocation()), sre.SystemExternal.jsonPath = function () {
    return ("undefined" != typeof process && "undefined" != typeof global ? process.env.SRE_JSON_PATH || global.SRE_JSON_PATH || process.cwd() : sre.SystemExternal.url + "/mathmaps") + "/"
  }(), sre.SystemExternal.require = function (e) {
    return "undefined" != typeof require ? require(e) : null
  }, sre.SystemExternal.documentSupported = function () {
    return "undefined" != typeof document
  }, sre.SystemExternal.xmldom = sre.SystemExternal.documentSupported() ? window : sre.SystemExternal.require("xmldom"), sre.SystemExternal.document = sre.SystemExternal.documentSupported() ? document : (new sre.SystemExternal.xmldom.DOMImplementation)
  .createDocument("", "", 0), sre.SystemExternal.xpath = sre.SystemExternal.documentSupported() ? document : sre.SystemExternal.require("xpath"), sre.SystemExternal.commander = sre.SystemExternal.documentSupported() ? null : sre.SystemExternal.require("commander"), sre.SystemExternal.fs = sre.SystemExternal.documentSupported() ? null : sre.SystemExternal.require("fs"), sre.BrowserUtil = {}, sre.BrowserUtil.detectIE = function () {
    return "undefined" != typeof window && "ActiveXObject" in window && "clipboardData" in window && (sre.BrowserUtil.loadMapsForIE_(), sre.BrowserUtil.loadWGXpath_(), !0)
  }, sre.BrowserUtil.detectEdge = function () {
    return "undefined" != typeof window && "MSGestureEvent" in window && "chrome" in window && null == window.chrome.loadTimes && (document.evaluate = null, sre.BrowserUtil.loadWGXpath_(), !0)
  }, sre.BrowserUtil.mapsForIE = null, sre.BrowserUtil.loadWGXpath_ = function () {
    sre.BrowserUtil.loadScript(sre.SystemExternal.url + "/wgxpath.install.js"), sre.BrowserUtil.installWGXpath_()
  }, sre.BrowserUtil.installWGXpath_ = function (e) {
    var t = e || 1;
    "undefined" == typeof wgxpath && 10 > t ? setTimeout(function () {
      sre.BrowserUtil.installWGXpath_(t++)
    }, 200) : 10 <= t || (wgxpath.install(), sre.XpathUtil.xpathEvaluate = document.evaluate, sre.XpathUtil.xpathResult = XPathResult, sre.XpathUtil.createNSResolver = document.createNSResolver)
  }, sre.BrowserUtil.loadMapsForIE_ = function () {
    sre.BrowserUtil.loadScript(sre.SystemExternal.jsonPath + "mathmaps_ie.js")
  }, sre.BrowserUtil.loadScript = function (e) {
    var t = sre.SystemExternal.document.createElement("script");
    t.type = "text/javascript", t.src = e, sre.SystemExternal.document.head ? sre.SystemExternal.document.head.appendChild(t) : sre.SystemExternal.document.body.appendChild(t)
  }, sre.Engine = function () {
    this.alternativeHost = this.activeHost = null, this.allDomains = [], this.allStyles = [], this.domain = "default", this.style = "short", this.semantics = !1, this.mode = sre.Engine.Mode.SYNC, this.speech = !1, this.setupTests_ = [], this.withCache = !0, this.isIE = sre.BrowserUtil.detectIE(), this.isEdge = sre.BrowserUtil.detectEdge()
  }, goog.addSingletonGetter(sre.Engine), sre.Engine.personalityProps = {
    PITCH: "pitch"
    , RATE: "rate"
    , VOLUME: "volume"
    , PAUSE: "pause"
  }, sre.Engine.Mode = {
    SYNC: "sync"
    , ASYNC: "async"
    , HTTP: "http"
  }, sre.Engine.registerTest = function (e) {
    sre.Engine.getInstance()
      .setupTests_.push(e)
  }, sre.Engine.isReady = function () {
    return sre.Engine.getInstance()
      .setupTests_.every(function (e) {
        return e()
      })
  }, sre.SpeechRule = function (e, t, r, s) {
    this.name = e, this.dynamicCstr = t, this.precondition = r, this.action = s
  }, sre.SpeechRule.prototype.toString = function () {
    return this.name + " | " + sre.SpeechRule.stringifyCstr(this.dynamicCstr) + " | " + this.precondition.toString() + " ==> " + this.action.toString()
  }, sre.SpeechRule.Type = {
    NODE: "NODE"
    , MULTI: "MULTI"
    , TEXT: "TEXT"
    , PERSONALITY: "PERSONALITY"
  }, sre.SpeechRule.Type.fromString = function (e) {
    switch (e) {
    case "[n]":
      return sre.SpeechRule.Type.NODE;
    case "[m]":
      return sre.SpeechRule.Type.MULTI;
    case "[t]":
      return sre.SpeechRule.Type.TEXT;
    case "[p]":
      return sre.SpeechRule.Type.PERSONALITY;
    default:
      throw "Parse error: " + e
    }
  }, sre.SpeechRule.Type.toString = function (e) {
    switch (e) {
    case sre.SpeechRule.Type.NODE:
      return "[n]";
    case sre.SpeechRule.Type.MULTI:
      return "[m]";
    case sre.SpeechRule.Type.TEXT:
      return "[t]";
    case sre.SpeechRule.Type.PERSONALITY:
      return "[p]";
    default:
      throw "Unknown type error: " + e
    }
  }, sre.SpeechRule.Component = function (e) {
    this.type = e.type, this.content = e.content
  }, sre.SpeechRule.Component.fromString = function (e) {
    var t = {};
    if (t.type = sre.SpeechRule.Type.fromString(e.substring(0, 3)), e = e.slice(3)
      .trim(), !e) throw new sre.SpeechRule.OutputError("Missing content.");
    switch (t.type) {
    case sre.SpeechRule.Type.TEXT:
      if ('"' == e[0]) {
        var r = sre.SpeechRule.splitString_(e, "\\(")[0].trim();
        if ('"' != r.slice(-1)) throw new sre.SpeechRule.OutputError("Invalid string syntax.");
        t.content = r, e = e.slice(r.length)
          .trim(), -1 == e.indexOf("(") && (e = "");
        break
      }
    case sre.SpeechRule.Type.NODE:
    case sre.SpeechRule.Type.MULTI:
      if (r = e.indexOf(" ("), -1 == r) {
        t.content = e.trim(), e = "";
        break
      }
      t.content = e.substring(0, r)
        .trim(), e = e.slice(r)
        .trim()
    }
    return t = new sre.SpeechRule.Component(t), e && t.addAttributes(e), t
  }, sre.SpeechRule.Component.prototype.toString = function () {
    var e;
    e = "" + sre.SpeechRule.Type.toString(this.type), e += this.content ? " " + this.content : "";
    var t = this.getAttributes();
    return 0 < t.length && (e += " (" + t.join(", ") + ")"), e
  }, sre.SpeechRule.Component.prototype.addAttribute = function (e) {
    var t = e.indexOf(":"); - 1 == t ? this[e.trim()] = "true" : this[e.substring(0, t)
        .trim()] = e.slice(t + 1)
      .trim()
  }, sre.SpeechRule.Component.prototype.addAttributes = function (e) {
    if ("(" != e[0] || ")" != e.slice(-1)) throw new sre.SpeechRule.OutputError("Invalid attribute expression: " + e);
    e = sre.SpeechRule.splitString_(e.slice(1, -1), ",");
    for (var t = 0; t < e.length; t++) this.addAttribute(e[t])
  }, sre.SpeechRule.Component.prototype.getAttributes = function () {
    var e, t = [];
    for (e in this) "content" != e && "type" != e && "function" != typeof this[e] && t.push(e + ":" + this[e]);
    return t
  }, sre.SpeechRule.Action = function (e) {
    this.components = e
  }, sre.SpeechRule.Action.fromString = function (e) {
    e = sre.SpeechRule.splitString_(e, ";")
      .filter(function (e) {
        return e.match(/\S/)
      })
      .map(function (e) {
        return e.trim()
      });
    for (var t = [], r = 0; r < e.length; r++) {
      var s = sre.SpeechRule.Component.fromString(e[r]);
      s && t.push(s)
    }
    return new sre.SpeechRule.Action(t)
  }, sre.SpeechRule.Action.prototype.toString = function () {
    return this.components.map(function (e) {
        return e.toString()
      })
      .join("; ")
  }, sre.SpeechRule.Precondition = function (e, t) {
    this.query = e, this.constraints = t || []
  }, sre.SpeechRule.Precondition.prototype.toString = function () {
    var e = this.constraints.join(", ");
    return this.query + ", " + e
  }, sre.SpeechRule.splitString_ = function (e, t) {
    for (var r = [], s = "";
      "" != e;) {
      var n = e.search(t);
      if (-1 == n) {
        if (0 != (e.match(/"/g) || [])
          .length % 2) throw new sre.SpeechRule.OutputError("Invalid string in expression: " + e);
        r.push(s + e), e = s = ""
      } else if (0 == (e.substring(0, n)
          .match(/"/g) || [])
        .length % 2) r.push(s + e.substring(0, n)), s = "", e = e.substring(n + 1);
      else {
        var i = e.substring(n)
          .search('"');
        if (-1 == i) throw new sre.SpeechRule.OutputError("Invalid string in expression: " + e);
        s += e.substring(0, n + i + 1), e = e.substring(n + i + 1)
      }
    }
    return s && r.push(s), r
  }, sre.SpeechRule.DynamicCstrAttrib = {
    STYLE: "style"
  }, sre.SpeechRule.stringifyCstr = function (e) {
    var t, r = [];
    for (t in e) r.push(e[t]);
    return r.join(".")
  }, sre.SpeechRule.OutputError = function (e) {
    Error.call(this), this.message = e || "", this.name = "RuleError"
  }, goog.inherits(sre.SpeechRule.OutputError, Error), sre.BaseUtil = {}, sre.BaseUtil.removeEmpty = function (e) {
    return e.filter(function (e) {
      return e
    })
  }, sre.BaseUtil.interleaveLists = function (e, t) {
    for (var r = []; e.length || t.length;) e.length && r.push(e.shift()), t.length && r.push(t.shift());
    return r
  }, sre.SpeechRuleFunctions = function () {}, sre.SpeechRuleFunctions.Store_ = function (e, t) {
    this.prefix_ = e, this.store_ = t
  }, sre.SpeechRuleFunctions.Store_.prototype.add = function (e, t) {
    this.checkCustomFunctionSyntax_(e) && (this.store_[e] = t)
  }, sre.SpeechRuleFunctions.Store_.prototype.lookup = function (e) {
    return this.store_[e]
  }, sre.SpeechRuleFunctions.CustomQueries = function () {
    sre.SpeechRuleFunctions.Store_.call(this, "CQF", {})
  }, goog.inherits(sre.SpeechRuleFunctions.CustomQueries, sre.SpeechRuleFunctions.Store_), sre.SpeechRuleFunctions.CustomStrings = function () {
    sre.SpeechRuleFunctions.Store_.call(this, "CSF", {})
  }, goog.inherits(sre.SpeechRuleFunctions.CustomStrings, sre.SpeechRuleFunctions.Store_), sre.SpeechRuleFunctions.ContextFunctions = function () {
    sre.SpeechRuleFunctions.Store_.call(this, "CTXF", {})
  }, goog.inherits(sre.SpeechRuleFunctions.ContextFunctions, sre.SpeechRuleFunctions.Store_), sre.SpeechRuleFunctions.Store_.prototype.checkCustomFunctionSyntax_ = function (e) {
    return !!e.match(new RegExp("^" + this.prefix_)) || (console.log("FunctionError: Invalid function name. Expected prefix " + this.prefix_), !1)
  }, sre.XpathUtil = {}, sre.XpathUtil.xpathSupported = function () {
    return "undefined" != typeof XPathResult
  }, sre.XpathUtil.currentDocument = null, sre.XpathUtil.xpathEvaluate = sre.XpathUtil.xpathSupported() ? document.evaluate : sre.SystemExternal.xpath.evaluate, sre.XpathUtil.xpathResult = sre.XpathUtil.xpathSupported() ? XPathResult : sre.SystemExternal.xpath.XPathResult, sre.XpathUtil.createNSResolver = sre.XpathUtil.xpathSupported() ? document.createNSResolver : sre.SystemExternal.xpath.createNSResolver, sre.XpathUtil.nameSpaces_ = {
    xhtml: "http://www.w3.org/1999/xhtml"
    , mathml: "http://www.w3.org/1998/Math/MathML"
    , svg: "http://www.w3.org/2000/svg"
  }, sre.XpathUtil.resolveNameSpace = function (e) {
    return sre.XpathUtil.nameSpaces_[e] || null
  }, sre.XpathUtil.evaluateXpath_ = function (e, t, r) {
    var s = sre.Engine.getInstance();
    return s.mode !== sre.Engine.Mode.HTTP || s.isIE || s.isEdge ? sre.XpathUtil.xpathEvaluate(e, t, sre.XpathUtil.createNSResolver(t), r, null) : sre.XpathUtil.currentDocument.evaluate(e, t, sre.XpathUtil.resolveNameSpace, r, null)
  }, sre.XpathUtil.evalXPath = function (e, t) {
    try {
      var r = sre.XpathUtil.evaluateXpath_(e, t, sre.XpathUtil.xpathResult.ORDERED_NODE_ITERATOR_TYPE)
    } catch (s) {
      return []
    }
    for (var n = [], i = r.iterateNext(); i; i = r.iterateNext()) n.push(i);
    return n
  }, sre.XpathUtil.getLeafNodes = function (e) {
    return sre.XpathUtil.evalXPath(".//*[count(*)=0]", e)
  }, sre.XpathUtil.evaluateBoolean = function (e, t) {
    try {
      var r = sre.XpathUtil.evaluateXpath_(e, t, sre.XpathUtil.xpathResult.BOOLEAN_TYPE)
    } catch (s) {
      return !1
    }
    return r.booleanValue
  }, sre.XpathUtil.evaluateString = function (e, t) {
    try {
      var r = sre.XpathUtil.evaluateXpath_(e, t, sre.XpathUtil.xpathResult.STRING_TYPE)
    } catch (s) {
      return ""
    }
    return r.stringValue
  }, sre.XpathUtil.prefixes_ = function () {
    var e = {};
    return Object.keys(sre.XpathUtil.nameSpaces_)
      .map(function (t) {
        e[sre.XpathUtil.nameSpaces_[t]] = t
      }), e
  }(), sre.XpathUtil.defaultNamespace_ = function (e) {
    if (e && 1 === e.nodeType) {
      !e.prefix && e.namespaceURI && (e.prefix = sre.XpathUtil.prefixes_[e.namespaceURI], e.nodeName = e.prefix + ":" + e.nodeName), e = e.childNodes;
      for (var t, r = 0; t = e[r]; r++) sre.XpathUtil.defaultNamespace_(t)
    }
  }, sre.XpathUtil.prefixNamespace = function (e) {
    if (e && e._nsMap) {
      for (var t, r = e.attributes, s = 0; t = r[s]; s++)
        if ("xmlns" == t.name && !t.prefix) {
          var n = sre.XpathUtil.prefixes_[e.namespaceURI];
          n && (t.prefix = t.name, t.localName = n, t.nodeName = t.nodeName + ":" + n)
        }
      e.namespaceURI && (e._nsMap[n] = e.namespaceURI, delete e._nsMap[""], sre.XpathUtil.defaultNamespace_(e))
    }
  }, sre.DomUtil = {}, sre.DomUtil.toArray = function (e) {
    for (var t = [], r = 0; r < e.length; r++) t.push(e[r]);
    return t
  }, sre.DomUtil.trimInput_ = function (e) {
    return e = e.replace(/&nbsp;/g, " "), e.replace(/>\s+</g, "><")
      .trim()
  }, sre.DomUtil.parseInput = function (e, t) {
    var r = t || Error
      , s = new sre.SystemExternal.xmldom.DOMParser
      , n = sre.DomUtil.trimInput_(e);
    if (!n) throw new r("Empty input!");
    try {
      var i = s.parseFromString(n, "text/xml");
      if (sre.Engine.getInstance()
        .mode === sre.Engine.Mode.HTTP) return sre.XpathUtil.currentDocument = i, i.documentElement;
      var a = i.documentElement;
      return sre.XpathUtil.prefixNamespace(a), a
    } catch (l) {
      throw new r("Illegal input: " + l.message)
    }
  }, sre.DomUtil.NodeType = {
    ELEMENT_NODE: 1
    , ATTRIBUTE_NODE: 2
    , TEXT_NODE: 3
    , CDATA_SECTION_NODE: 4
    , ENTITY_REFERENCE_NODE: 5
    , ENTITY_NODE: 6
    , PROCESSING_INSTRUCTION_NODE: 7
    , COMMENT_NODE: 8
    , DOCUMENT_NODE: 9
    , DOCUMENT_TYPE_NODE: 10
    , DOCUMENT_FRAGMENT_NODE: 11
    , NOTATION_NODE: 12
  }, sre.DomUtil.replaceNode = function (e, t) {
    e.parentNode && (e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e))
  }, sre.Debugger = function () {
    this.isActive_ = !1, this.outputFunction_ = console.log, this.stream_ = null
  }, goog.addSingletonGetter(sre.Debugger), sre.Debugger.prototype.init = function (e) {
    e && this.startDebugFile_(e), this.isActive_ = !0
  }, sre.Debugger.prototype.startDebugFile_ = function (e) {
    this.stream_ = sre.SystemExternal.fs.createWriteStream(e), this.outputFunction_ = goog.bind(function (e) {
      var t = Array.prototype.slice.call(arguments, 0);
      this.stream_.write(t.join(" ")), this.stream_.write("\n")
    }, this), this.stream_.on("error", goog.bind(function (e) {
      console.log("Invalid log file. Debug information sent to console."), this.outputFunction_ = console.log
    }, this)), this.stream_.on("finish", function () {
      console.log("Finalizing debug file.")
    })
  }, sre.Debugger.prototype.output_ = function (e) {
    this.outputFunction_.apply(console.log === this.outputFunction_ ? console : this.outputFunction_, ["Speech Rule Engine Debugger:"].concat(e))
  }, sre.Debugger.prototype.output = function (e) {
    this.isActive_ && this.output_(Array.prototype.slice.call(arguments, 0))
  }, sre.Debugger.prototype.generateOutput = function (e) {
    this.isActive_ && this.output_(e.apply(e, []))
  }, sre.Debugger.prototype.exit = function (e) {
    this.isActive_ && this.stream_ && this.stream_.end("", "", e || function () {}), this.isActive_ = !1
  }, sre.MathUtil = {}, sre.MathUtil.isMathmlNodeOfClass_ = function (e, t) {
    return -1 != t.indexOf(e.tagName.toUpperCase())
  }, sre.MathUtil.isMathjaxNodeOfClass_ = function (e, t) {
    return "SPAN" == e.tagName && e.className.split(" ")
      .some(function (e) {
        return -1 != t.indexOf(e.toUpperCase())
      })
  }, sre.MathUtil.isMathNodeOfClass_ = function (e, t) {
    return e.nodeType == sre.DomUtil.NodeType.ELEMENT_NODE && (sre.MathUtil.isMathmlNodeOfClass_(e, t) || sre.MathUtil.isMathjaxNodeOfClass_(e, t))
  }, sre.MathUtil.TOKEN_LIST = "MI MN MO MTEXT MSPACE MS".split(" "), sre.MathUtil.isToken = function (e) {
    return sre.MathUtil.isMathNodeOfClass_(e, sre.MathUtil.TOKEN_LIST)
  }, sre.MathUtil.LAYOUT_LIST = "MROW MFRAC MSQRT MROOT MSTYLE MERROR MPADDED MPHANTOM MFENCED MENCLOSE".split(" "), sre.MathUtil.isLayout = function (e) {
    return sre.MathUtil.isMathNodeOfClass_(e, sre.MathUtil.LAYOUT_LIST)
  }, sre.MathUtil.SCRIPT_LIST = "MSUB MSUP MSUBSUP MUNDER MOVER MUNDEROVER MMULTISCRIPTS MPRESCRIPTS".split(" "), sre.MathUtil.isScript = function (e) {
    return sre.MathUtil.isMathNodeOfClass_(e, sre.MathUtil.SCRIPT_LIST)
  }, sre.MathUtil.TABLES_LIST = "MTABLE MLABELEDTR MTR MTD MALIGNGROUP MALIGNMARK".split(" "), sre.MathUtil.isTables = function (e) {
    return sre.MathUtil.isMathNodeOfClass_(e, sre.MathUtil.TABLES_LIST)
  }, sre.MathUtil.ELEMENTARY_LIST = "MSTACK MLONGDIV MSGROUP MSROW MSCARRIES MSCARRY MSLINE".split(" "), sre.MathUtil.isElementary = function (e) {
    return sre.MathUtil.isMathNodeOfClass_(e, sre.MathUtil.ELEMENTARY_LIST)
  }, sre.MathUtil.MATHML_TAG_LIST = [sre.MathUtil.TOKEN_LIST, sre.MathUtil.LAYOUT_LIST, sre.MathUtil.SCRIPT_LIST, sre.MathUtil.TABLES_LIST, sre.MathUtil.ELEMENTARY_LIST].reduce(function (e, t) {
    return e.concat(t)
  }), sre.MathUtil.isMathmlTag = function (e) {
    return sre.MathUtil.isMathNodeOfClass_(e, sre.MathUtil.MATHML_TAG_LIST)
  }, sre.MathUtil.WHITESPACE_LIST = ["MSROW", "MROW", "MSPACE", "MPHANTOM", "MPADDED"], sre.MathUtil.isWhitespace = function (e) {
    return sre.MathUtil.isMathNodeOfClass_(e, sre.MathUtil.WHITESPACE_LIST)
  }, sre.MathUtil.isNotWhitespace = function (e) {
    return sre.MathUtil.isMathmlTag(e) && !sre.MathUtil.isWhitespace(e)
  }, sre.MathUtil.setdifference = function (e, t) {
    return e.filter(function (e) {
      return 0 > t.indexOf(e)
    })
  }, sre.MathUtil.union = function (e, t) {
    return e.concat(sre.MathUtil.setdifference(t, e))
  }, sre.MathUtil.nextSeparatorFunction = function (e) {
    if (e) {
      if (e.match(/^\s+$/)) return null;
      var t = e.replace(/\s/g, "")
        .split("")
        .filter(function (e) {
          return e
        })
    } else t = [","];
    return function () {
      return 1 < t.length ? t.shift() : t[0]
    }
  }, sre.BaseRuleStore = function () {
    this.customQueries = new sre.SpeechRuleFunctions.CustomQueries, this.customStrings = new sre.SpeechRuleFunctions.CustomStrings, this.contextFunctions = new sre.SpeechRuleFunctions.ContextFunctions, this.speechRules_ = [], this.dynamicCstrAttribs = [sre.SpeechRule.DynamicCstrAttrib.STYLE], this.defaultTtsProps = []
  }, sre.BaseRuleStore.prototype.lookupRule = function (e, t) {
    if (!e || e.nodeType != sre.DomUtil.NodeType.ELEMENT_NODE && e.nodeType != sre.DomUtil.NodeType.TEXT_NODE) return null;
    var r = this.speechRules_.filter(goog.bind(function (r) {
      return this.testDynamicConstraints(t, r) && this.testPrecondition_(e, r)
    }, this));
    return 0 < r.length ? this.pickMostConstraint_(t, r) : null
  }, sre.BaseRuleStore.prototype.defineRule = function (e, t, r, s, n) {
    try {
      var i = sre.SpeechRule.Action.fromString(r)
        , a = Array.prototype.slice.call(arguments, 4)
        , l = new sre.SpeechRule.Precondition(s, a)
        , a = {};
      a[sre.SpeechRule.DynamicCstrAttrib.STYLE] = t;
      var o = new sre.SpeechRule(e, a, l, i)
    } catch (c) {
      if ("RuleError" == c.name) return console.log("Rule Error ", s, "(" + t + "):", c.message), null;
      throw c
    }
    return this.addRule(o), o
  }, sre.BaseRuleStore.prototype.addRule = function (e) {
    this.speechRules_.unshift(e)
  }, sre.BaseRuleStore.prototype.deleteRule = function (e) {
    e = this.speechRules_.indexOf(e), -1 != e && this.speechRules_.splice(e, 1)
  }, sre.BaseRuleStore.prototype.findRule = function (e) {
    for (var t, r = 0; t = this.speechRules_[r]; r++)
      if (e(t)) return t;
    return null
  }, sre.BaseRuleStore.prototype.findAllRules = function (e) {
    return this.speechRules_.filter(e)
  }, sre.BaseRuleStore.prototype.evaluateDefault = function (e) {
    return [new sre.AuditoryDescription({
      text: e.textContent
    })]
  }, sre.BaseRuleStore.prototype.debugSpeechRule = function (e, t) {
    var r = e.precondition
      , s = this.applyQuery(t, r.query);
    sre.Debugger.getInstance()
      .output(r.query, s ? s.toString() : s), r.constraints.forEach(goog.bind(function (e) {
        sre.Debugger.getInstance()
          .output(e, this.applyConstraint(t, e))
      }, this))
  }, sre.BaseRuleStore.prototype.removeDuplicates = function (e) {
    for (var t, r = this.speechRules_.length - 1; t = this.speechRules_[r]; r--) t != e && sre.BaseRuleStore.compareDynamicConstraints_(t.dynamicCstr, e.dynamicCstr) && sre.BaseRuleStore.comparePreconditions_(t, e) && this.speechRules_.splice(r, 1)
  }, sre.BaseRuleStore.prototype.applyCustomQuery = function (e, t) {
    var r = this.customQueries.lookup(t);
    return r ? r(e) : null
  }, sre.BaseRuleStore.prototype.applySelector = function (e, t) {
    return this.applyCustomQuery(e, t) || sre.XpathUtil.evalXPath(t, e)
  }, sre.BaseRuleStore.prototype.applyQuery = function (e, t) {
    var r = this.applySelector(e, t);
    return 0 < r.length ? r[0] : null
  }, sre.BaseRuleStore.prototype.applyConstraint = function (e, t) {
    return !!this.applyQuery(e, t) || sre.XpathUtil.evaluateBoolean(t, e)
  }, sre.BaseRuleStore.prototype.testDynamicConstraints = function (e, t) {
    return Object.keys(e)
      .every(function (r) {
        return e[r] == t.dynamicCstr[r] || "short" == t.dynamicCstr[r] || "default" == t.dynamicCstr[r]
      })
  }, sre.BaseRuleStore.prototype.getDynamicConstraintValues = function () {
    for (var e, t = {}, r = 0; e = this.speechRules_[r]; r++)
      for (var s in e.dynamicCstr) {
        var n = [e.dynamicCstr[s]];
        t[s] = t[s] ? sre.MathUtil.union(t[s], n) : n
      }
    return t
  }, sre.BaseRuleStore.prototype.countMatchingDynamicConstraintValues_ = function (e, t) {
    for (var r, s = 0, n = 0;
      (r = this.dynamicCstrAttribs[n]) && e[r] === t.dynamicCstr[r]; n++) s++;
    return s
  }, sre.BaseRuleStore.prototype.pickMostConstraint_ = function (e, t) {
    return t.sort(goog.bind(function (t, r) {
        var s = this.countMatchingDynamicConstraintValues_(e, t)
          , n = this.countMatchingDynamicConstraintValues_(e, r);
        return s > n ? -1 : n > s ? 1 : r.precondition.constraints.length - t.precondition.constraints.length
      }, this)), sre.Debugger.getInstance()
      .generateOutput(goog.bind(function () {
        return t.map(function (e) {
          return e.name + "(" + sre.SpeechRule.stringifyCstr(e.dynamicCstr) + ")"
        })
      }, this)), t[0]
  }, sre.BaseRuleStore.prototype.testPrecondition_ = function (e, t) {
    var r = t.precondition;
    return this.applyQuery(e, r.query) === e && r.constraints.every(goog.bind(function (t) {
      return this.applyConstraint(e, t)
    }, this))
  }, sre.BaseRuleStore.compareDynamicConstraints_ = function (e, t) {
    if (Object.keys(e)
      .length != Object.keys(t)
      .length) return !1;
    for (var r in e)
      if (!t[r] || e[r] !== t[r]) return !1;
    return !0
  }, sre.BaseRuleStore.compareStaticConstraints_ = function (e, t) {
    if (e.length != t.length) return !1;
    for (var r, s = 0; r = e[s]; s++)
      if (-1 == t.indexOf(r)) return !1;
    return !0
  }, sre.BaseRuleStore.comparePreconditions_ = function (e, t) {
    var r = e.precondition
      , s = t.precondition;
    return r.query == s.query && sre.BaseRuleStore.compareStaticConstraints_(r.constraints, s.constraints)
  }, sre.MathStore = function () {
    sre.BaseRuleStore.call(this), this.dynamicCstrAttribs = [sre.SpeechRule.DynamicCstrAttrib.DOMAIN, sre.SpeechRule.DynamicCstrAttrib.STYLE], this.defaultTtsProps = [sre.Engine.personalityProps.PITCH, sre.Engine.personalityProps.RATE]
  }, goog.inherits(sre.MathStore, sre.BaseRuleStore), sre.SpeechRule.DynamicCstrAttrib.DOMAIN = "domain", sre.MathStore.prototype.defineRule = function (e, t, r, s, n) {
    var i = this.parseDynamicConstraint(t)
      , a = Array.prototype.slice.call(arguments, 4)
      , a = sre.MathStore.superClass_.defineRule.apply(this, [e, i[sre.SpeechRule.DynamicCstrAttrib.STYLE], r, s].concat(a));
    return a.dynamicCstr = i, this.removeDuplicates(a), a
  }, sre.MathStore.prototype.parseDynamicConstraint = function (e) {
    var t = e.split(".");
    if (!t[0] || !t[1]) throw new sre.SpeechRule.OutputError("Invalid domain assignment:" + e);
    return sre.MathStore.createDynamicConstraint(t[0], t[1])
  }, sre.MathStore.createDynamicConstraint = function (e, t) {
    var r = {};
    return r[sre.SpeechRule.DynamicCstrAttrib.DOMAIN] = e, r[sre.SpeechRule.DynamicCstrAttrib.STYLE] = t, r
  }, sre.MathStore.prototype.defineUniqueRuleAlias = function (e, t, r, s) {
    var n = this.parseDynamicConstraint(t)
      , i = this.findRule(goog.bind(function (t) {
        return t.name == e && this.testDynamicConstraints(n, t)
      }, this));
    if (!i) throw new sre.SpeechRule.OutputError("Rule named " + e + " with style " + t + " does not exist.");
    this.addAlias_(i, r, Array.prototype.slice.call(arguments, 3))
  }, sre.MathStore.prototype.defineRuleAlias = function (e, t, r) {
    var s = this.findRule(function (t) {
      return t.name == e
    });
    if (!s) throw new sre.SpeechRule.OutputError("Rule with named " + e + " does not exist.");
    this.addAlias_(s, t, Array.prototype.slice.call(arguments, 2))
  }, sre.MathStore.prototype.defineRulesAlias = function (e, t, r) {
    var s = this.findAllRules(function (t) {
      return t.name == e
    });
    if (0 == s.length) throw new sre.SpeechRule.OutputError("Rule with name " + e + " does not exist.");
    var n = Array.prototype.slice.call(arguments, 2);
    s.forEach(goog.bind(function (e) {
      this.addAlias_(e, t, n)
    }, this))
  }, sre.MathStore.prototype.addAlias_ = function (e, t, r) {
    t = new sre.SpeechRule.Precondition(t, r), t = new sre.SpeechRule(e.name, e.dynamicCstr, t, e.action), t.name = e.name, this.addRule(t)
  }, sre.MathStore.prototype.defineSpecialisedRule = function (e, t, r, s) {
    var n = this.parseDynamicConstraint(t)
      , i = this.findRule(goog.bind(function (t) {
        return t.name == e && this.testDynamicConstraints(n, t)
      }, this));
    if (!i) throw new sre.SpeechRule.OutputError("Rule named " + e + " with style " + t + " does not exist.");
    t = this.parseDynamicConstraint(r), s = s ? sre.SpeechRule.Action.fromString(s) : i.action, i = new sre.SpeechRule(i.name, t, i.precondition, s), this.addRule(i)
  }, sre.MathStore.prototype.evaluateDefault = function (e) {
    return this.evaluateString_(e.textContent, e)
  }, sre.MathStore.prototype.evaluateString_ = function (e, t) {
    var r = []
      , s = {}
      , n = {
        value: 0
      };
    if (e.match(/^\s+$/)) return r;
    for (var i, a = sre.BaseUtil.removeEmpty(e.replace(/\s/g, " ")
        .split(" ")), l = 0; i = a[l]; l++)
      if (1 == i.length) r.push(this.evaluate_(i, this.getBookmark(i, t, 0, n)));
      else if (i.match(/^[a-zA-Z]+$/)) {
      var o = this.multipleCharaters(s, i, n);
      r.push(this.evaluate_(i, this.getBookmark(i, t, o, n)))
    } else
      for (; i;) {
        var c = i.match(/^((\d{1,3})(?=,)(,\d{3})*(\.\d+)?)|^\d*\.\d+|^\d+/)
          , u = i.match(/^[a-zA-Z]+/);
        c ? (o = this.multipleCharaters(s, c[0], n)
          , r.push(this.evaluate_(c[0], this.getBookmark(c[0], t, o, n))), i = i.substring(c[0].length)) : u ? (o = this.multipleCharaters(s, u[0], n), r.push(this.evaluate_(u[0], this.getBookmark(u[0], t, o, n))), i = i.substring(u[0].length)) : (o = i[0].charCodeAt(0), 55296 <= o && 56319 >= o && 1 < i.length && !isNaN(i.charCodeAt(1)) ? (o = this.multipleCharaters(s, i.slice(0, 2), n), r.push(this.evaluate_(i.slice(0, 2), this.getBookmark(i.slice(0, 2), t, o, n))), i = i.substring(2)) : (o = this.multipleCharaters(s, i[0], n), r.push(this.evaluate_(i[0], this.getBookmark(i[0], t, o, n))), i = i.substring(1)))
      }
    return r
  }, sre.MathStore.prototype.multipleCharaters = function (e, t, r) {
    return "undefined" == typeof e[t] ? e[t] = 0 : e[t]++, r.value = 0, e[t]
  }, sre.MathStore.prototype.getBookmark = function (e, t, r, s) {
    var n = 0;
    if ("undefined" != typeof t.childNodes && null != t.childNodes && "undefined" != typeof t.childNodes.length && null != t.childNodes.length) {
      for (var i = 0; i < t.childNodes.length; i++)
        if (0 == t.childNodes.length) {
          if (-1 < t.textContent.indexOf(e)) {
            if (r == s.value) return t.parentNode.getAttribute("bookmark");
            s.value++
          }
        } else if (n = this.getBookmark(e, t.childNodes[i], r, s), 0 != n) break;
      if (0 == t.childNodes.length && -1 < t.textContent.indexOf(e)) {
        if (r == s.value) return t.parentNode.getAttribute("bookmark");
        s.value++
      }
    }
    return n
  }, sre.MathStore.prototype.evaluate_ = function (e, t) {
    return new sre.AuditoryDescription({
      text: e
      , preprocess: !0
      , correction: sre.SpeechRuleEngine.getInstance()
        .getGlobalParameter("remove") || ""
      , bookmark: t || "0"
    })
  }, sre.StoreUtil = {}, sre.StoreUtil.nodeCounter = function (e, t) {
    var r = e.length
      , s = 0
      , n = t;
    return t || (n = "")
      , function () {
        return s < r && (s += 1), n + " " + s
      }
  }, sre.MathmlStore = function () {
    sre.MathStore.call(this)
  }, goog.inherits(sre.MathmlStore, sre.MathStore), goog.addSingletonGetter(sre.MathmlStore), sre.MathmlStore.prototype.defineMathmlRule = function (e, t, r) {
    this.defineRule(e, t, r, "self::mathml:" + e)
  }, sre.MathmlStore.prototype.defineDefaultMathmlRule = function (e, t) {
    this.defineRule(e, "default.default", t, "self::mathml:" + e)
  }, sre.MathmlStoreUtil = {}, sre.MathmlStoreUtil.matchMathjaxToMathml = function (e) {
    return sre.Engine.getInstance()
      .alternativeHost.querySelector("#" + e.id)
  }, sre.MathmlStoreUtil.retrieveMathjaxExtender = function (e) {
    return (e = sre.MathmlStoreUtil.matchMathjaxToMathml(e)) ? [e] : []
  }, sre.MathmlStoreUtil.retrieveMathjaxLeaf = function (e) {
    return (e = sre.MathmlStoreUtil.matchMathjaxToMathml(e)) ? [e] : []
  }, sre.MathmlStoreUtil.checkMathjaxTag = function (e, t) {
    var r = sre.MathmlStoreUtil.matchMathjaxToMathml(e);
    return r && r.tagName.toUpperCase() == t ? [r] : []
  }, sre.MathmlStoreUtil.checkMathjaxMunder = function (e) {
    return sre.MathmlStoreUtil.checkMathjaxTag(e, "MUNDER")
  }, sre.MathmlStoreUtil.checkMathjaxMover = function (e) {
    return sre.MathmlStoreUtil.checkMathjaxTag(e, "MOVER")
  }, sre.MathmlStoreUtil.checkMathjaxMsub = function (e) {
    return sre.MathmlStoreUtil.checkMathjaxTag(e, "MSUB")
  }, sre.MathmlStoreUtil.checkMathjaxMsup = function (e) {
    return sre.MathmlStoreUtil.checkMathjaxTag(e, "MSUP")
  }, sre.MathmlStoreUtil.mfencedSeparators = function (e, t) {
    var r = sre.MathUtil.nextSeparatorFunction(t);
    return function () {
      return r ? [new sre.AuditoryDescription({
        text: r()
        , preprocess: !0
      })] : []
    }
  }, sre.MathmlStoreUtil.contentIterator = function (e, t) {
    var r = 0 < e.length ? sre.XpathUtil.evalXPath("../../content/*", e[0]) : [];
    return function () {
      var e = r.shift()
        , s = t ? [new sre.AuditoryDescription({
          text: t
          , preprocess: !0
        })] : [];
      return e ? (e = sre.SpeechRuleEngine.getInstance()
        .evaluateNode(e), s.concat(e)) : s
    }
  }, sre.MathmlStoreUtil.hideFont = function (e) {
    if (e.hasAttribute("font")) {
      var t = e.getAttribute("font");
      e.removeAttribute("font"), sre.SpeechRuleEngine.getInstance()
        .setGlobalParameter("remove", t), e.setAttribute("hiddenfont", t)
    }
    return [e]
  }, sre.MathmlStoreUtil.showFont = function (e) {
    if (e.hasAttribute("hiddenfont")) {
      var t = e.getAttribute("hiddenfont");
      e.removeAttribute("hiddenfont"), sre.SpeechRuleEngine.getInstance()
        .setGlobalParameter("remove", ""), e.setAttribute("font", t)
    }
    return ""
  }, sre.MathmlStoreRules = function () {
    sre.MathmlStoreRules.initCustomFunctions_(), sre.MathmlStoreRules.initDefaultRules_(), sre.MathmlStoreRules.initMathjaxRules_(), sre.MathmlStoreRules.initAliases_(), sre.MathmlStoreRules.initSpecializationRules_()
  }, goog.addSingletonGetter(sre.MathmlStoreRules), sre.MathmlStoreRules.mathStore = sre.MathmlStore.getInstance(), sre.MathmlStoreRules.defineDefaultMathmlRule_ = goog.bind(sre.MathmlStoreRules.mathStore.defineDefaultMathmlRule, sre.MathmlStoreRules.mathStore), sre.MathmlStoreRules.defineRule_ = goog.bind(sre.MathmlStoreRules.mathStore.defineRule, sre.MathmlStoreRules.mathStore), sre.MathmlStoreRules.defineRuleAlias_ = goog.bind(sre.MathmlStoreRules.mathStore.defineRuleAlias, sre.MathmlStoreRules.mathStore), sre.MathmlStoreRules.addContextFunction_ = goog.bind(sre.MathmlStoreRules.mathStore.contextFunctions.add, sre.MathmlStoreRules.mathStore.contextFunctions), sre.MathmlStoreRules.addCustomQuery_ = goog.bind(sre.MathmlStoreRules.mathStore.customQueries.add, sre.MathmlStoreRules.mathStore.customQueries), sre.MathmlStoreRules.initCustomFunctions_ = function () {
    (0, sre.MathmlStoreRules.addContextFunction_)("CTXFnodeCounter", sre.StoreUtil.nodeCounter), (0, sre.MathmlStoreRules.addContextFunction_)("CTXFmfSeparators", sre.MathmlStoreUtil.mfencedSeparators), (0, sre.MathmlStoreRules.addCustomQuery_)("CQFextender", sre.MathmlStoreUtil.retrieveMathjaxExtender), (0, sre.MathmlStoreRules.addCustomQuery_)("CQFmathmlmunder", sre.MathmlStoreUtil.checkMathjaxMunder), (0, sre.MathmlStoreRules.addCustomQuery_)("CQFmathmlmover", sre.MathmlStoreUtil.checkMathjaxMover), (0, sre.MathmlStoreRules.addCustomQuery_)("CQFmathmlmsub", sre.MathmlStoreUtil.checkMathjaxMsub), (0, sre.MathmlStoreRules.addCustomQuery_)("CQFmathmlmsup", sre.MathmlStoreUtil.checkMathjaxMsup), (0, sre.MathmlStoreRules.addCustomQuery_)("CQFlookupleaf", sre.MathmlStoreUtil.retrieveMathjaxLeaf)
  }, sre.MathmlStoreRules.initDefaultRules_ = function () {
    (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("math", "[m] ./*"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("semantics", "[n] ./*[1]"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mspace", "[p] (pause:250)"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mstyle", "[m] ./*"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mpadded", "[m] ./*"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("merror", "[m] ./*"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mphantom", "[m] ./*"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mtext", "[t] text(); [p] (pause:200)"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mi", "[n] text()"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mo", "[n] text() (rate:-0.1)"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mn", "[n] text()"), (0, sre.MathmlStoreRules.defineRule_)("mtext-variant", "default.default", '[t] "begin"; [t] @mathvariant (pause:150);[t] text() (pause:150); [t] "end"; [t] @mathvariant (pause:200)', "self::mathml:mtext", "@mathvariant", '@mathvariant!="normal"'), (0, sre.MathmlStoreRules.defineRule_)("mi-variant", "default.default", "[t] @mathvariant; [n] text()", "self::mathml:mi", "@mathvariant", '@mathvariant!="normal"'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mi-variant", "self::mathml:mn", "@mathvariant", '@mathvariant!="normal"'), (0, sre.MathmlStoreRules.defineRule_)("mo-variant", "default.default", "[t] @mathvariant; [n] text() (rate:-0.1)", "self::mathml:mo", "@mathvariant", '@mathvariant!="normal"'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("ms", '[t] "string" (pitch:0.5, rate:0.5); [t] text()'), (0, sre.MathmlStoreRules.defineRule_)("unit", "default.default", "[t] text() (annotation:unit, preprocess)", "self::mathml:mi", '@class="MathML-Unit"'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("msup", '[n] ./*[1]; [t] "super";[n] ./*[2] (pitch:0.35); [p] (pause:300)'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("msubsup", '[n] ./*[1]; [t] "sub"; [n] ./*[2] (pitch:-0.35); [p] (pause:200);[t] "super"; [n] ./*[3] (pitch:0.35); [p] (pause:300)'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("msub", '[n] ./*[1]; [t] "sub"; [n] ./*[2] (pitch:-0.35); [p] (pause:300)'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mover", '[n] ./*[2] (pitch:0.35); [p] (pause:200); [t] "over"; [n] ./*[1]; [p] (pause:400)'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("munder", '[n] ./*[2] (pitch:-0.35); [t] "under"; [n] ./*[1]; [p] (pause:400)'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("munderover", '[n] ./*[2] (pitch:-0.35); [t] "under and"; [n] ./*[3] (pitch:0.35); [t] "over"; [n] ./*[1]; [p] (pause:400)'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mrow", "[m] ./*"), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("msqrt", '[t] "Square root of"; [m] ./* (rate:0.2); [p] (pause:400)'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mroot", '[t] "root of order"; [n] ./*[2]; [t] "of";[n] ./*[1] (rate:0.2); [p] (pause:400)'), (0, sre.MathmlStoreRules.defineDefaultMathmlRule_)("mfrac", ' [p] (pause:400); [n] ./*[1] (pitch:0.3); [t] "divided by"; [n] ./*[2] (pitch:-0.3); [p] (pause:400)'), (0, sre.MathmlStoreRules.defineRule_)("mfrac", "default.short", '[p] (pause:200); [t] "start fraction";[n] ./*[1] (pitch:0.3); [t] "over"; [n] ./*[2] (pitch:-0.3); [p] (pause:400); [t] "end fraction"', "self::mathml:mfrac"), (0, sre.MathmlStoreRules.defineRule_)("mfenced-single", "default.default", '[t] concat(substring(@open, 0 div boolean(@open)), substring("(", 0 div not(boolean(@open)))) (context:"opening"); [m] ./* (separator:@separators); [t] concat(substring(@close, 0 div boolean(@close)), substring(")", 0 div not(boolean(@close)))) (context:"closing")', "self::mathml:mfenced", "string-length(string(@separators))=1"), (0, sre.MathmlStoreRules.defineRule_)("mfenced-omit", "default.default", '[t] concat(substring(@open, 0 div boolean(@open)), substring("(", 0 div not(boolean(@open)))) (context:"opening"); [m] ./*; [t] concat(substring(@close, 0 div boolean(@close)), substring(")", 0 div not(boolean(@close)))) (context:"closing")', "self::mathml:mfenced", "@separators", "string-length(string(@separators))=0", 'string(@separators)=""'), (0, sre.MathmlStoreRules.defineRule_)("mfenced-empty", "default.default", '[t] concat(substring(@open, 0 div boolean(@open)), substring("(", 0 div not(boolean(@open)))) (context:"opening"); [m] ./*;[t] concat(substring(@close, 0 div boolean(@close)), substring(")", 0 div not(boolean(@close)))) (context:"closing")', "self::mathml:mfenced", "string-length(string(@separators))=1", 'string(@separators)=" "'), (0, sre.MathmlStoreRules.defineRule_)("mfenced-comma", "default.default", '[t] concat(substring(@open, 0 div boolean(@open)), substring("(", 0 div not(boolean(@open)))) (context:"opening"); [m] ./* (separator:"comma");[t] concat(substring(@close, 0 div boolean(@close)), substring(")", 0 div not(boolean(@close)))) (context:"closing")', "self::mathml:mfenced"), (0, sre.MathmlStoreRules.defineRule_)("mfenced-multi", "default.default", '[t] concat(substring(@open, 0 div boolean(@open)), substring("(", 0 div not(boolean(@open)))) (context:"opening"); [m] ./* (sepFunc:CTXFmfSeparators, separator:@separators); [t] concat(substring(@close, 0 div boolean(@close)), substring(")", 0 div not(boolean(@close)))) (context:"closing")', "self::mathml:mfenced", "string-length(string(@separators))>1"), (0, sre.MathmlStoreRules.defineRule_)("mtable", "default.default", '[t] "matrix"; [m] ./* (ctxtFunc:CTXFnodeCounter,context:"row",pause:100)', "self::mathml:mtable"), (0, sre.MathmlStoreRules.defineRule_)("mtr", "default.default", '[m] ./* (ctxtFunc:CTXFnodeCounter,context:"column",pause:100)', "self::mathml:mtr"), (0, sre.MathmlStoreRules.defineRule_)("mlabeledtr", "default.default", '[m] ./* (ctxtFunc:CTXFnodeCounter,context:"column",pause:100)', "self::mathml:mlabeledtr"), (0, sre.MathmlStoreRules.defineRule_)("mtd", "default.default", "[m] ./*", "self::mathml:mtd"), (0, sre.MathmlStoreRules.defineRule_)("mtable", "default.superbrief", '[t] count(child::mathml:mtr);  [t] "by";[t] count(child::mathml:mtr[1]/mathml:mtd); [t] "matrix";', "self::mathml:mtable"), (0, sre.MathmlStoreRules.defineRule_)("mtable", "default.short", '[t] "matrix"; [m] ./*', "self::mathml:mtable"), (0, sre.MathmlStoreRules.defineRule_)("mtr", "default.short", "[m] ./*", "self::mathml:mtr"), (0, sre.MathmlStoreRules.defineRule_)("mtd", "default.short", '[t] "Element"; [t] count(./preceding-sibling::mathml:mtd)+1;[t] count(./parent::mathml:mtr/preceding-sibling::mathml:mtr)+1;[p] (pause:500); [m] ./*', "self::mathml:mtd"), (0, sre.MathmlStoreRules.defineRule_)("mmultiscripts-4", "default.default", '[n] ./*[1]; [p] (pause:200);[t] "left sub"; [n] ./*[5] (pitch:-0.35); [p] (pause:200);[t] "left super"; [n] ./*[6] (pitch:0.35); [p] (pause:200);[t] "right sub"; [n] ./*[2] (pitch:-0.35); [p] (pause:200);[t] "right super"; [n] ./*[3] (pitch:0.35); [p] (pause:300);', "self::mathml:mmultiscripts"), (0, sre.MathmlStoreRules.defineRule_)("mmultiscripts-3-1", "default.default", '[n] ./*[1]; [p] (pause:200);[t] "left sub"; [n] ./*[5] (pitch:-0.35); [p] (pause:200);[t] "left super"; [n] ./*[6] (pitch:0.35); [p] (pause:200);[t] "right super"; [n] ./*[3] (pitch:0.35); [p] (pause:300);', "self::mathml:mmultiscripts", "./mathml:none=./*[2]", "./mathml:mprescripts=./*[4]"), (0, sre.MathmlStoreRules.defineRule_)("mmultiscripts-3-2", "default.default", '[n] ./*[1]; [p] (pause:200);[t] "left sub"; [n] ./*[5] (pitch:-0.35); [p] (pause:200);[t] "left super"; [n] ./*[6] (pitch:0.35); [p] (pause:200);[t] "right sub"; [n] ./*[2] (pitch:-0.35); [p] (pause:200);', "self::mathml:mmultiscripts", "./mathml:none=./*[3]", "./mathml:mprescripts=./*[4]"), (0, sre.MathmlStoreRules.defineRule_)("mmultiscripts-3-3", "default.default", '[n] ./*[1]; [p] (pause:200);[t] "left super"; [n] ./*[6] (pitch:0.35); [p] (pause:200);[t] "right sub"; [n] ./*[2] (pitch:-0.35); [p] (pause:200);[t] "right super"; [n] ./*[3] (pitch:0.35); [p] (pause:300);', "self::mathml:mmultiscripts", "./mathml:none=./*[5]", "./mathml:mprescripts=./*[4]"), (0, sre.MathmlStoreRules.defineRule_)("mmultiscripts-3-4", "default.default", '[n] ./*[1]; [p] (pause:200);[t] "left sub"; [n] ./*[5] (pitch:-0.35); [p] (pause:200);[t] "right sub"; [n] ./*[2] (pitch:-0.35); [p] (pause:200);[t] "right super"; [n] ./*[3] (pitch:0.35); [p] (pause:300);', "self::mathml:mmultiscripts", "./mathml:none=./*[6]", "./mathml:mprescripts=./*[4]"), (0, sre.MathmlStoreRules.defineRule_)("mmultiscripts-2-1", "default.default", '[n] ./*[1]; [p] (pause:200);[t] "left sub"; [n] ./*[5] (pitch:-0.35); [p] (pause:200);[t] "left super"; [n] ./*[6] (pitch:0.35); [p] (pause:300);', "self::mathml:mmultiscripts", "./mathml:none=./*[2]", "./mathml:none=./*[3]", "./mathml:mprescripts=./*[4]"), (0, sre.MathmlStoreRules.defineRule_)("mmultiscripts-1-1", "default.default", '[n] ./*[1]; [p] (pause:200);[t] "left super"; [n] ./*[6] (pitch:0.35); [p] (pause:300);', "self::mathml:mmultiscripts", "./mathml:none=./*[2]", "./mathml:none=./*[3]", "./mathml:mprescripts=./*[4]", "./mathml:none=./*[5]"), (0, sre.MathmlStoreRules.defineRule_)("mmultiscripts-1-2", "default.default", '[n] ./*[1]; [p] (pause:200);[t] "left sub"; [n] ./*[5] (pitch:-0.35); [p] (pause:200);', "self::mathml:mmultiscripts", "./mathml:none=./*[2]", "./mathml:none=./*[3]", "./mathml:mprescripts=./*[4]", "./mathml:none=./*[6]")
  }, sre.MathmlStoreRules.initMathjaxRules_ = function () {
    (0, sre.MathmlStoreRules.defineRule_)("mj-math", "default.default", "[n] ./*[1]/*[1]/*[1]", 'self::span[@class="math"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-leaf", "default.default", "[n] CQFlookupleaf", 'self::span[@class="mi"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-leaf", 'self::span[@class="mo"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-leaf", 'self::span[@class="mn"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-leaf", 'self::span[@class="mtext"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-mo-ext", "default.default", "[n] CQFextender", 'self::span[@class="mo"]', "./*[1]/*[1]/text()", "./*[1]/*[2]/text()"), (0, sre.MathmlStoreRules.defineRule_)("mj-texatom", "default.default", "[n] ./*[1]", 'self::span[@class="texatom"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-msubsup", "default.default", '[n] ./*[1]/*[1]/*[1]; [t] "sub"; [n] ./*[1]/*[3]/*[1] (pitch:-0.35);[p] (pause:200); [t] "super"; [n] ./*[1]/*[2]/*[1] (pitch:0.35);[p] (pause:300)', 'self::span[@class="msubsup"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-msub", "default.default", '[n] ./*[1]/*[1]/*[1]; [t] "sub";[n] ./*[1]/*[2]/*[1] (pitch:-0.35); [p] (pause:300)', 'self::span[@class="msub"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-msup", "default.default", '[n] ./*[1]/*[1]/*[1]; [t] "super";[n] ./*[1]/*[2]/*[1] (pitch:0.35); [p] (pause:300)', 'self::span[@class="msup"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-munderover", "default.default", '[n] ./*[1]/*[2]/*[1] (pitch:0.35); [t] "under and";[n] ./*[1]/*[3]/*[1] (pitch:-0.35); [t] "over";[n] ./*[1]/*[1]/*[1]; [p] (pause:400)', 'self::span[@class="munderover"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-munder", "default.default", '[n] ./*[1]/*[2]/*[1] (pitch:0.35); [t] "under";[n] ./*[1]/*[1]/*[1]; [p] (pause:400)', 'self::span[@class="munder"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-mover", "default.default", '[n] ./*[1]/*[2]/*[1] (pitch:0.35); [t] "over";[n] ./*[1]/*[1]/*[1]; [p] (pause:400)', 'self::span[@class="mover"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-mfrac", "default.default", '[p] (pause:250); [n] ./*[1]/*[1]/*[1] (pitch:0.3); [p] (pause:250); [t] "divided by"; [n] ./*[1]/*[2]/*[1] (pitch:-0.3);[p] (pause:400)', 'self::span[@class="mfrac"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-msqrt", "default.default", '[t] "Square root of";[n] ./*[1]/*[1]/*[1] (rate:0.2); [p] (pause:400)', 'self::span[@class="msqrt"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-mroot", "default.default", '[t] "root of order"; [n] ./*[1]/*[4]/*[1]; [t] "of";[n] ./*[1]/*[1]/*[1] (rate:0.2); [p] (pause:400)', 'self::span[@class="mroot"]'), (0, sre.MathmlStoreRules.defineRule_)("mj-mfenced", "default.default", '[t] "opening"; [n] ./*[1]; [m] ./*[position()>1 and position()<last()]; [t] "closing"; [n] ./*[last()]', 'self::span[@class="mfenced"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-leaf", 'self::span[@class="mtable"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-leaf", 'self::span[@class="mmultiscripts"]')
  }, sre.MathmlStoreRules.initAliases_ = function () {
    (0, sre.MathmlStoreRules.defineRuleAlias_)("mspace", 'self::span[@class="mspace"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mstyle", 'self::span[@class="mstyle"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mpadded", 'self::span[@class="mpadded"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("merror", 'self::span[@class="merror"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mphantom", 'self::span[@class="mphantom"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("ms", 'self::span[@class="ms"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mrow", 'self::span[@class="mrow"]'), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-msub", 'self::span[@class="msubsup"]', "CQFmathmlmsub"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-msup", 'self::span[@class="msubsup"]', "CQFmathmlmsup"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-munder", 'self::span[@class="munderover"]', "CQFmathmlmunder"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-mover", 'self::span[@class="munderover"]', "CQFmathmlmover")
  }, sre.MathmlStoreRules.initSpecializationRules_ = function () {
    (0, sre.MathmlStoreRules.defineRule_)("square", "default.default", '[n] ./*[1]; [t] "square" (pitch:0.35); [p] (pause:300)', "self::mathml:msup", "./*[2][text()=2]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("square", "self::mathml:msup", "./mathml:mrow=./*[2]", "count(./*[2]/*)=1", "./*[2]/*[1][text()=2]"), (0, sre.MathmlStoreRules.defineRule_)("cube", "default.default", '[n] ./*[1]; [t] "cube" (pitch:0.35); [p] (pause:300)', "self::mathml:msup", "./*[2][text()=3]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("cube", "self::mathml:msup", "./mathml:mrow=./*[2]", "count(./*[2]/*)=1", "./*[2]/*[1][text()=3]"), (0, sre.MathmlStoreRules.defineRule_)("square-sub", "default.default", '[n] ./*[1]; [t] "sub"; [n] ./*[2] (pitch:-0.35);[p] (pause:300); [t] "square" (pitch:0.35); [p] (pause:400)', "self::mathml:msubsup", "./*[3][text()=2]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("square-sub", "self::mathml:msubsup", "./mathml:mrow=./*[3]", "count(./*[3]/*)=1", "./*[3]/*[1][text()=2]"), (0, sre.MathmlStoreRules.defineRule_)("cube-sub", "default.default", '[n] ./*[1]; [t] "sub"; [n] ./*[2] (pitch:-0.35);[p] (pause:300); [t] "cube" (pitch:0.35); [p] (pause:400)', "self::mathml:msubsup", "./*[3][text()=3]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("cube-sub", "self::mathml:msubsup", "./mathml:mrow=./*[3]", "count(./*[3]/*)=1", "./*[3]/*[1][text()=3]"), (0, sre.MathmlStoreRules.defineRule_)("mj-square", "default.default", '[n] ./*[1]/*[1]/*[1]; [t] "square" (pitch:0.35); [p] (pause:300)', 'self::span[@class="msup"]', "./*[1]/*[2]/*[1][text()=2]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-square", 'self::span[@class="msup"]', './*[1]/*[2]/*[1]=./*[1]/*[2]/span[@class="mrow"]', "count(./*[1]/*[2]/*[1]/*)=1", "./*[1]/*[2]/*[1]/*[1][text()=2]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-square", 'self::span[@class="msubsup"]', "CQFmathmlmsup", "./*[1]/*[2]/*[1][text()=2]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-square", 'self::span[@class="msubsup"]', "CQFmathmlmsup", './*[1]/*[2]/*[1]=./*[1]/*[2]/span[@class="mrow"]', "count(./*[1]/*[2]/*[1]/*)=1", "./*[1]/*[2]/*[1]/*[1][text()=2]"), (0, sre.MathmlStoreRules.defineRule_)("mj-cube", "default.default", '[n] ./*[1]/*[1]/*[1]; [t] "cube" (pitch:0.35); [p] (pause:300)', 'self::span[@class="msup"]', "./*[1]/*[2]/*[1][text()=3]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-cube", 'self::span[@class="msup"]', './*[1]/*[2]/*[1]=./*[1]/*[2]/span[@class="mrow"]', "count(./*[1]/*[2]/*[1]/*)=1", "./*[1]/*[2]/*[1]/*[1][text()=3]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-cube", 'self::span[@class="msubsup"]', "CQFmathmlmsup", "./*[1]/*[2]/*[1][text()=3]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-cube", 'self::span[@class="msubsup"]', "CQFmathmlmsup", './*[1]/*[2]/*[1]=./*[1]/*[2]/span[@class="mrow"]', "count(./*[1]/*[2]/*[1]/*)=1", "./*[1]/*[2]/*[1]/*[1][text()=3]"), (0, sre.MathmlStoreRules.defineRule_)("mj-square-sub", "default.default", '[n] ./*[1]/*[1]/*[1]; [t] "sub"; [n] ./*[1]/*[3]/*[1] (pitch:-0.35); [p] (pause:300); [t] "square" (pitch:0.35); [p] (pause:400)', 'self::span[@class="msubsup"]', "./*[1]/*[2]/*[1][text()=2]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-square-sub", 'self::span[@class="msubsup"]', './*[1]/*[2]/*[1]=./*[1]/*[2]/span[@class="mrow"]', "count(./*[1]/*[2]/*[1]/*)=1", "./*[1]/*[2]/*[1]/*[1][text()=2]"), (0, sre.MathmlStoreRules.defineRule_)("mj-cube-sub", "default.default", '[n] ./*[1]/*[1]/*[1]; [t] "sub"; [n] ./*[1]/*[3]/*[1] (pitch:-0.35); [p] (pause:300); [t] "cube" (pitch:0.35); [p] (pause:400)', 'self::span[@class="msubsup"]', "./*[1]/*[2]/*[1][text()=3]"), (0, sre.MathmlStoreRules.defineRuleAlias_)("mj-cube-sub", 'self::span[@class="msubsup"]', './*[1]/*[2]/*[1]=./*[1]/*[2]/span[@class="mrow"]', "count(./*[1]/*[2]/*[1]/*)=1", "./*[1]/*[2]/*[1]/*[1][text()=3]")
  }, sre.SemanticTreeRules = function () {
    sre.SemanticTreeRules.initCustomFunctions_(), sre.SemanticTreeRules.initSemanticRules_()
  }, goog.addSingletonGetter(sre.SemanticTreeRules), sre.SemanticTreeRules.mathStore = sre.MathmlStore.getInstance(), sre.SemanticTreeRules.defineRule_ = goog.bind(sre.SemanticTreeRules.mathStore.defineRule, sre.SemanticTreeRules.mathStore), sre.SemanticTreeRules.defineRuleAlias_ = goog.bind(sre.SemanticTreeRules.mathStore.defineRuleAlias, sre.SemanticTreeRules.mathStore), sre.SemanticTreeRules.addContextFunction_ = goog.bind(sre.SemanticTreeRules.mathStore.contextFunctions.add, sre.SemanticTreeRules.mathStore.contextFunctions), sre.SemanticTreeRules.addCustomQuery_ = goog.bind(sre.SemanticTreeRules.mathStore.customQueries.add, sre.SemanticTreeRules.mathStore.customQueries), sre.SemanticTreeRules.addCustomString_ = goog.bind(sre.SemanticTreeRules.mathStore.customStrings.add, sre.SemanticTreeRules.mathStore.customStrings), sre.SemanticTreeRules.initCustomFunctions_ = function () {
    (0, sre.SemanticTreeRules.addContextFunction_)("CTXFnodeCounter", sre.StoreUtil.nodeCounter), (0, sre.SemanticTreeRules.addContextFunction_)("CTXFcontentIterator", sre.MathmlStoreUtil.contentIterator), (0, sre.SemanticTreeRules.addCustomQuery_)("CQFhideFont", sre.MathmlStoreUtil.hideFont), (0, sre.SemanticTreeRules.addCustomString_)("CSFshowFont", sre.MathmlStoreUtil.showFont)
  }, sre.SemanticTreeRules.initSemanticRules_ = function () {
    (0, sre.SemanticTreeRules.defineRule_)("stree", "default.default", "[n] ./*[1]", "self::stree"), (0, sre.SemanticTreeRules.defineRule_)("multrel", "default.default", '[t] "multirelation"; [m] children/* (sepFunc:CTXFcontentIterator)', "self::multirel"), (0, sre.SemanticTreeRules.defineRule_)("variable-equality", "default.default", '[t] "equation sequence"; [m] ./children/* (context:"part",ctxtFunc:CTXFnodeCounter,sepFunc:CTXFcontentIterator)', 'self::relseq[@role="equality"]', "count(./children/*)>2", './children/punct[@role="ellipsis"]'), (0, sre.SemanticTreeRules.defineRule_)("multi-equality", "default.default", '[t] "equation sequence"; [m] ./children/* (context:"part",ctxtFunc:CTXFnodeCounter,sepFunc:CTXFcontentIterator)', 'self::relseq[@role="equality"]', "count(./children/*)>2"), (0, sre.SemanticTreeRules.defineRule_)("multi-equality", "default.short", '[t] "equation sequence"; [m] ./children/* (sepFunc:CTXFcontentIterator)', 'self::relseq[@role="equality"]', "count(./children/*)>2"), (0, sre.SemanticTreeRules.defineRule_)("equality", "default.default", '[t] "equation"; [t] "left hand side"; [n] children/*[1];[p] (pause:200); [n] content/*[1] (pause:200);[t] "right hand side"; [n] children/*[2]', 'self::relseq[@role="equality"]', "count(./children/*)=2"), (0, sre.SemanticTreeRules.defineRule_)("simple-equality", "default.default", "[n] children/*[1]; [p] (pause:200); [n] content/*[1] (pause:200);[n] children/*[2]", 'self::relseq[@role="equality"]', "count(./children/*)=2", "./children/identifier or ./children/number"), (0, sre.SemanticTreeRules.defineRule_)("simple-equality2", "default.default", "[n] children/*[1]; [p] (pause:200); [n] content/*[1] (pause:200);[n] children/*[2]", 'self::relseq[@role="equality"]', "count(./children/*)=2", "./children/function or ./children/appl"), (0, sre.SemanticTreeRules.defineRule_)("relseq", "default.default", "[m] children/* (sepFunc:CTXFcontentIterator)", "self::relseq"), (0, sre.SemanticTreeRules.defineRule_)("binary-operation", "default.default", "[m] children/* (sepFunc:CTXFcontentIterator);", "self::infixop"), (0, sre.SemanticTreeRules.defineRule_)("variable-addition", "default.default", '[t] "sum with variable number of summands";[p] (pause:400); [m] children/* (sepFunc:CTXFcontentIterator)', 'self::infixop[@role="addition"]', "count(children/*)>2", 'children/punct[@role="ellipsis"]'), (0, sre.SemanticTreeRules.defineRule_)("multi-addition", "default.default", '[t] "sum with,"; [t] count(./children/*); [t] ", summands";[p] (pause:400); [m] ./children/* (sepFunc:CTXFcontentIterator)', 'self::infixop[@role="addition"]', "count(./children/*)>2"), (0, sre.SemanticTreeRules.defineRule_)("prefix", "default.default", '[t] "prefix"; [n] text(); [t] "of" (pause 150);[n] children/*[1]', "self::prefixop"), (0, sre.SemanticTreeRules.defineRule_)("negative", "default.default", '[t] "negative"; [n] children/*[1]', "self::prefixop", 'self::prefixop[@role="negative"]'), (0, sre.SemanticTreeRules.defineRule_)("postfix", "default.default", '[n] children/*[1]; [t] "postfix"; [n] text() (pause 300)', "self::postfixop"), (0, sre.SemanticTreeRules.defineRule_)("identifier", "default.default", "[n] text()", "self::identifier"), (0, sre.SemanticTreeRules.defineRule_)("number", "default.default", "[n] text()", "self::number"), (0, sre.SemanticTreeRules.defineRule_)("font", "default.default", "[t] @font; [n] CQFhideFont; [t] CSFshowFont", "self::*", "@font", '@font!="normal"'), (0, sre.SemanticTreeRules.defineRule_)("font-identifier-short", "default.default", "[t] @font; [n] CQFhideFont; [t] CSFshowFont", "self::identifier", "string-length(text())=1", "@font", '@font="normal"', '""=translate(text(), "abcdefghijklmnopqrstuvwxyzαβγδεζηθικλμνξοπρςστυφχψωABCDEFGHIJKLMNOPQRSTUVWXYZΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΣΤΥΦΧΨΩ", "")', '@role!="unit"'), (0, sre.SemanticTreeRules.defineRule_)("font-identifier", "default.default", "[t] @font; [n] CQFhideFont; [t] CSFshowFont", "self::identifier", "string-length(text())=1", "@font", '@font="normal"', '@role!="unit"'), (0, sre.SemanticTreeRules.defineRule_)("omit-font", "default.default", "[n] CQFhideFont; [t] CSFshowFont", "self::identifier", "string-length(text())=1", "@font", '@font="italic"'), (0, sre.SemanticTreeRules.defineRule_)("fraction", "default.default", '[p] (pause:250); [n] children/*[1] (pitch:0.3); [p] (pause:250); [t] "divided by"; [n] children/*[2] (pitch:-0.3); [p] (pause:400)', "self::fraction"), (0, sre.SemanticTreeRules.defineRule_)("superscript", "default.default", '[n] children/*[1]; [t] "super"; [n] children/*[2] (pitch:0.35);[p] (pause:300)', "self::superscript"), (0, sre.SemanticTreeRules.defineRule_)("subscript", "default.default", '[n] children/*[1]; [t] "sub"; [n] children/*[2] (pitch:-0.35);[p] (pause:300)', "self::subscript"), (0, sre.SemanticTreeRules.defineRule_)("ellipsis", "default.default", '[p] (pause:200); [t] "dot dot dot"; [p] (pause:300)', "self::punct", 'self::punct[@role="ellipsis"]'), (0, sre.SemanticTreeRules.defineRule_)("fence-single", "default.default", "[n] text()", "self::punct", 'self::punct[@role="openfence"]'), (0, sre.SemanticTreeRules.defineRuleAlias_)("fence-single", "self::punct", 'self::punct[@role="closefence"]'), (0, sre.SemanticTreeRules.defineRuleAlias_)("fence-single", "self::punct", 'self::punct[@role="vbar"]'), (0, sre.SemanticTreeRules.defineRuleAlias_)("fence-single", "self::punct", 'self::punct[@role="application"]'), (0, sre.SemanticTreeRules.defineRule_)("omit-punct", "default.default", "[p] (pause:200);", "self::punct"), (0, sre.SemanticTreeRules.defineRule_)("omit-empty", "default.default", "[p] (pause:100)", "self::empty"), (0, sre.SemanticTreeRules.defineRule_)("fences-open-close", "default.default", '[p] (pause:100); [t] "open"; [n] children/*[1]; [p] (pause:200);[t] "close"', "self::fenced", '@role="leftright"'), (0, sre.SemanticTreeRules.defineRule_)("fences-open-close-in-appl", "default.default", "[p] (pause:100); [n] children/*[1]; [p] (pause:200);", 'self::fenced[@role="leftright"]', "./parent::children/parent::appl"), (0, sre.SemanticTreeRules.defineRule_)("fences-neutral", "default.default", '[p] (pause:100); [t] "absolute value of"; [n] children/*[1];[p] (pause:350);', "self::fenced", 'self::fenced[@role="neutral"]'), (0, sre.SemanticTreeRules.defineRule_)("omit-fences", "default.default", "[p] (pause:500); [n] children/*[1]; [p] (pause:200);", "self::fenced"), (0, sre.SemanticTreeRules.defineRule_)("matrix", "default.default", '[t] "matrix"; [m] children/* (ctxtFunc:CTXFnodeCounter,context:"row",pause:100)', "self::matrix"), (0, sre.SemanticTreeRules.defineRule_)("matrix-row", "default.default", '[m] children/* (ctxtFunc:CTXFnodeCounter,context:"column",pause:100)', 'self::row[@role="matrix"]'), (0, sre.SemanticTreeRules.defineRule_)("matrix-cell", "default.default", "[n] children/*[1]", 'self::cell[@role="matrix"]'), (0, sre.SemanticTreeRules.defineRule_)("vector", "default.default", '[t] "vector"; [m] children/* (ctxtFunc:CTXFnodeCounter,context:"element",pause:100)', "self::vector"), (0, sre.SemanticTreeRules.defineRule_)("cases", "default.default", '[t] "case statement"; [m] children/* (ctxtFunc:CTXFnodeCounter,context:"case",pause:100)', "self::cases"), (0, sre.SemanticTreeRules.defineRule_)("cases-row", "default.default", "[m] children/*", 'self::row[@role="cases"]'), (0, sre.SemanticTreeRules.defineRule_)("cases-cell", "default.default", "[n] children/*[1]", 'self::cell[@role="cases"]'), (0, sre.SemanticTreeRules.defineRule_)("row", "default.default", '[m] ./* (ctxtFunc:CTXFnodeCounter,context:"column",pause:100)', "self::row"), (0, sre.SemanticTreeRules.defineRule_)("cases-end", "default.default", '[t] "case statement"; [m] children/* (ctxtFunc:CTXFnodeCounter,context:"case",pause:100);[t] "end cases"', "self::cases", "following-sibling::*"), (0, sre.SemanticTreeRules.defineRule_)("multiline", "default.default", '[t] "multiline equation";[m] children/* (ctxtFunc:CTXFnodeCounter,context:"line",pause:100)', "self::multiline"), (0, sre.SemanticTreeRules.defineRule_)("line", "default.default", "[m] children/*", "self::line")
    , (0, sre.SemanticTreeRules.defineRule_)("table", "default.default", '[t] "multiline equation";[m] children/* (ctxtFunc:CTXFnodeCounter,context:"row",pause:200)', "self::table"), (0, sre.SemanticTreeRules.defineRule_)("table-row", "default.default", "[m] children/* (pause:100)", 'self::row[@role="table"]'), (0, sre.SemanticTreeRules.defineRuleAlias_)("cases-cell", 'self::cell[@role="table"]'), (0, sre.SemanticTreeRules.defineRule_)("end-punct", "default.default", "[m] children/*; [p] (pause:300)", "self::punctuated", '@role="endpunct"'), (0, sre.SemanticTreeRules.defineRule_)("start-punct", "default.default", "[n] content/*[1]; [p] (pause:200); [m] children/*[position()>1]", "self::punctuated", '@role="startpunct"'), (0, sre.SemanticTreeRules.defineRule_)("integral-punct", "default.default", "[n] children/*[1] (rate:0.2); [n] children/*[3] (rate:0.2)", "self::punctuated", '@role="integral"'), (0, sre.SemanticTreeRules.defineRule_)("punctuated", "default.default", "[m] children/* (pause:100)", "self::punctuated"), (0, sre.SemanticTreeRules.defineRule_)("function", "default.default", "[n] text()", "self::function"), (0, sre.SemanticTreeRules.defineRule_)("appl", "default.default", "[n] children/*[1]; [n] content/*[1]; [n] children/*[2]", "self::appl"), (0, sre.SemanticTreeRules.defineRule_)("sum-only", "default.default", '[n] children/*[1]; [t] "from"; [n] children/*[2]; [t] "to";[n] children/*[3]', "self::limboth", 'self::limboth[@role="sum"]'), (0, sre.SemanticTreeRules.defineRule_)("limboth", "default.default", '[n] children/*[1]; [p] (pause 100); [t] "over"; [n] children/*[2];[t] "under"; [n] children/*[3]; [p] (pause 250);', "self::limboth"), (0, sre.SemanticTreeRules.defineRule_)("limlower", "default.default", '[n] children/*[1]; [t] "over"; [n] children/*[2];', "self::limlower"), (0, sre.SemanticTreeRules.defineRule_)("limupper", "default.default", '[n] children/*[1]; [t] "under"; [n] children/*[2];', "self::limupper"), (0, sre.SemanticTreeRules.defineRule_)("largeop", "default.default", "[n] text()", "self::largeop"), (0, sre.SemanticTreeRules.defineRule_)("bigop", "default.default", '[n] children/*[1]; [p] (pause 100); [t] "over"; [n] children/*[2];[p] (pause 250);', "self::bigop"), (0, sre.SemanticTreeRules.defineRule_)("integral", "default.default", "[n] children/*[1]; [p] (pause 100); [n] children/*[2];[p] (pause 200); [n] children/*[3] (rate:0.35);", "self::integral"), (0, sre.SemanticTreeRules.defineRule_)("sqrt", "default.default", '[t] "Square root of"; [n] children/*[1] (rate:0.2); [p] (pause:400)', "self::sqrt"), (0, sre.SemanticTreeRules.defineRule_)("square", "default.default", '[n] children/*[1]; [t] "squared" (pitch:0.35); [p] (pause:300)', "self::superscript", "children/*[2][text()=2]", 'name(./children/*[1])!="text"'), (0, sre.SemanticTreeRules.defineRule_)("cube", "default.default", '[n] children/*[1]; [t] "cubed" (pitch:0.35); [p] (pause:300)', "self::superscript", "children/*[2][text()=3]", 'name(./children/*[1])!="text"'), (0, sre.SemanticTreeRules.defineRule_)("root", "default.default", '[t] "root of order"; [n] children/*[1];[t] "over"; [n] children/*[1] (rate:0.2); [p] (pause:400)', "self::root"), (0, sre.SemanticTreeRules.defineRule_)("text-no-mult", "default.default", "[n] children/*[1]; [p] (pause:200); [n] children/*[2]", "self::infixop", "children/text"), (0, sre.SemanticTreeRules.defineRule_)("text", "default.default", "[n] text(); [p] (pause:200)", "self::text"), (0, sre.SemanticTreeRules.defineRule_)("unit", "default.default", "[t] text() (annotation:unit, preprocess)", "self::identifier", '@role="unit"'), (0, sre.SemanticTreeRules.defineRule_)("unit-square", "default.default", '[t] "square"; [n] children/*[1]', "self::superscript", '@role="unit"', "children/*[2][text()=2]", 'name(children/*[1])="identifier"'), (0, sre.SemanticTreeRules.defineRule_)("unit-cubic", "default.default", '[t] "cubic"; [n] children/*[1]', "self::superscript", '@role="unit"', "children/*[2][text()=3]", 'name(children/*[1])="identifier"'), (0, sre.SemanticTreeRules.defineRule_)("reciprocal", "default.default", '[t] "reciprocal"; [n] children/*[1]', "self::superscript", '@role="unit"', 'name(children/*[1])="identifier"', 'name(children/*[2])="prefixop"', 'children/*[2][@role="negative"]', "children/*[2]/children/*[1][text()=1]", 'count(preceding-sibling::*)=0 or preceding-sibling::*[@role!="unit"]'), (0, sre.SemanticTreeRules.defineRule_)("reciprocal", "default.default", '[t] "per"; [n] children/*[1]', "self::superscript", '@role="unit"', 'name(children/*[1])="identifier"', 'name(children/*[2])="prefixop"', 'children/*[2][@role="negative"]', "children/*[2]/children/*[1][text()=1]", 'preceding-sibling::*[@role="unit"]'), (0, sre.SemanticTreeRules.defineRule_)("unit-combine", "default.default", "[m] children/*", "self::infixop", '@role="unit"'), (0, sre.SemanticTreeRules.defineRule_)("unit-divide", "default.default", '[n] children/*[1] (pitch:0.3); [t] "per"; [n] children/*[2] (pitch:-0.3)', "self::fraction", '@role="unit"')
  }, sre.MathSimpleStore = function () {
    sre.MathStore.call(this)
  }, goog.inherits(sre.MathSimpleStore, sre.MathStore), sre.MathSimpleStore.prototype.defineRulesFromMappings = function (e, t, r) {
    for (var s in r)
      for (var n in r[s]) this.defineRule(e, s + "." + n, '[t] "' + r[s][n] + '"', "self::text()", '"' === t ? "self::text() = '" + t + "'" : 'self::text() = "' + t + '"')
  }, sre.MathCompoundStore = function () {
    this.subStores_ = {}
  }, goog.addSingletonGetter(sre.MathCompoundStore), sre.MathCompoundStore.prototype.defineRules = function (e, t, r) {
    var s = new sre.MathSimpleStore;
    s.defineRulesFromMappings(e, t, r), this.subStores_[t] = s
  }, sre.MathCompoundStore.prototype.addSymbolRules = function (e) {
    var t = sre.MathSimpleStore.parseUnicode_(e.key);
    this.defineRules(e.key, t, e.mappings)
  }, sre.MathCompoundStore.prototype.addFunctionRules = function (e) {
    var t = e.names;
    e = e.mappings;
    for (var r, s = 0; r = t[s]; s++) this.defineRules(r, r, e)
  }, sre.MathCompoundStore.prototype.addUnitRules = function (e) {
    var t = e.names;
    t && (e.names = t.map(function (e) {
      return e + ":unit"
    })), this.addFunctionRules(e)
  }, sre.MathCompoundStore.prototype.lookupRule = function (e, t) {
    var r = this.subStores_[e.textContent];
    return r ? r.lookupRule(e, t) : null
  }, sre.MathCompoundStore.prototype.lookupString = function (e, t) {
    var r = sre.XpathUtil.currentDocument ? sre.XpathUtil.currentDocument.createTextNode(e) : sre.SystemExternal.document.createTextNode(e);
    return (r = this.lookupRule(r, t)) ? r.action.components.map(function (e) {
        return e.content.slice(1, -1)
      })
      .join(" ") : ""
  }, sre.MathCompoundStore.prototype.getDynamicConstraintValues = function () {
    var e, t = {};
    for (e in this.subStores_) {
      var r, s = this.subStores_[e].getDynamicConstraintValues();
      for (r in s) {
        var n = t[r];
        t[r] = n ? sre.MathUtil.union(n, s[r]) : s[r]
      }
    }
    return t
  }, sre.MathSimpleStore.parseUnicode_ = function (e) {
    return e = parseInt(e, 16), 65536 > e ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (1023 & e) + 56320))
  }, sre.MathMap = function () {
    this.store = sre.MathCompoundStore.getInstance(), this.allDomains = [], this.allStyles = [], this.retrieveMaps(), this.getDynamicConstraintValues()
  }, goog.addSingletonGetter(sre.MathMap), sre.MathMap.toFetch_ = 0, sre.Engine.registerTest(function () {
    return sre.MathMap.getInstance() && !sre.MathMap.toFetch_
  }), sre.MathMap.prototype.stringify = function () {
    return JSON.stringify(this)
  }, sre.MathMap.MATHMAP_PATH_ = sre.SystemExternal.jsonPath, sre.MathMap.SYMBOLS_PATH_ = sre.MathMap.MATHMAP_PATH_ + "symbols/", sre.MathMap.FUNCTIONS_PATH_ = sre.MathMap.MATHMAP_PATH_ + "functions/", sre.MathMap.UNITS_PATH_ = sre.MathMap.MATHMAP_PATH_ + "units/", sre.MathMap.SYMBOLS_FILES_ = "greek-capital.json greek-small.json greek-scripts.json greek-mathfonts.json greek-symbols.json hebrew_letters.json latin-lower-double-accent.json latin-lower-normal.json latin-lower-phonetic.json latin-lower-single-accent.json latin-rest.json latin-upper-double-accent.json latin-upper-normal.json latin-upper-single-accent.json latin-mathfonts.json math_angles.json math_arrows.json math_characters.json math_delimiters.json math_digits.json math_geometry.json math_harpoons.json math_non_characters.json math_symbols.json math_whitespace.json other_stars.json".split(" "), sre.MathMap.FUNCTIONS_FILES_ = ["algebra.json", "elementary.json", "hyperbolic.json", "trigonometry.json"], sre.MathMap.UNITS_FILES_ = "energy.json length.json memory.json other.json speed.json temperature.json time.json volume.json weight.json".split(" "), sre.MathMap.retrieveFiles = function (e, t, r) {
    switch (sre.Engine.getInstance()
      .mode) {
    case sre.Engine.Mode.ASYNC:
      sre.MathMap.toFetch_ += e.length;
      for (var s, n = 0; s = e[n]; n++) sre.MathMap.fromFile_(t + s, function (e, t) {
        sre.MathMap.toFetch_--, e || JSON.parse(t)
          .forEach(function (e) {
            r(e)
          })
      });
      break;
    case sre.Engine.Mode.HTTP:
      var i = sre.Engine.getInstance()
        .isIE;
      for (sre.MathMap.toFetch_ += e.length, n = 0; s = e[n]; n++) i ? sre.MathMap.getJsonIE_(s, r) : sre.MathMap.getJsonAjax_(t + s, r);
      break;
    default:
      sre.MathMap.parseFiles(e.map(function (e) {
          return t + e
        }))
        .forEach(function (e) {
          r(e)
        })
    }
  }, sre.MathMap.prototype.retrieveMaps = function () {
    sre.MathMap.retrieveFiles(sre.MathMap.FUNCTIONS_FILES_, sre.MathMap.FUNCTIONS_PATH_, goog.bind(this.store.addFunctionRules, this.store)), sre.MathMap.retrieveFiles(sre.MathMap.SYMBOLS_FILES_, sre.MathMap.SYMBOLS_PATH_, goog.bind(this.store.addSymbolRules, this.store)), sre.MathMap.retrieveFiles(sre.MathMap.UNITS_FILES_, sre.MathMap.UNITS_PATH_, goog.bind(this.store.addUnitRules, this.store))
  }, sre.MathMap.getJsonIE_ = function (e, t, r) {
    var s = r || 1;
    sre.BrowserUtil.mapsForIE ? ((r = sre.BrowserUtil.mapsForIE[e]) && r.forEach(function (e) {
      t(e)
    }), sre.MathMap.toFetch_--) : 5 >= s ? setTimeout(function () {
      sre.MathMap.getJsonIE_(e, t, s++)
    }, 300) : sre.MathMap.toFetch_--
  }, sre.MathMap.fromFile_ = function (e, t) {
    return sre.SystemExternal.fs.readFile(e, "utf8", t)
  }, sre.MathMap.loadFile = function (e) {
    try {
      return sre.MathMap.readJSON_(e)
    } catch (t) {
      console.log("Unable to load file: " + e + ", error: " + t)
    }
  }, sre.MathMap.loadFiles = function (e) {
    return e.map(sre.MathMap.loadFile)
  }, sre.MathMap.parseFiles = function (e) {
    return e = sre.MathMap.loadFiles(e), [].concat.apply([], e.map(function (e) {
      return JSON.parse(e)
    }))
  }, sre.MathMap.readJSON_ = function (e) {
    return sre.SystemExternal.fs.readFileSync(e)
  }, sre.MathMap.getJsonAjax_ = function (e, t) {
    var r = new XMLHttpRequest;
    r.onreadystatechange = function () {
      4 === r.readyState && (sre.MathMap.toFetch_--, 200 === r.status && JSON.parse(r.responseText)
        .forEach(function (e) {
          t(e)
        }))
    }, r.open("GET", e, !0), r.send()
  }, sre.MathMap.prototype.getDynamicConstraintValues = function () {
    if (sre.MathMap.toFetch_) setTimeout(goog.bind(this.getDynamicConstraintValues, this), 300);
    else {
      var e = this.store.getDynamicConstraintValues();
      this.allDomains = e.domain, this.allStyles = e.style
    }
  }, sre.SemanticUtil = function () {}, sre.SemanticUtil.objectsToKeys = function (e) {
    e = Array.prototype.slice.call(arguments, 0);
    var t = [];
    return t.concat.apply(t, e.map(Object.keys))
  }, sre.SemanticUtil.objectsToValues = function (e) {
    e = Array.prototype.slice.call(arguments, 0);
    var t = [];
    return e.forEach(function (e) {
      for (var r in e) t.push(e[r])
    }), t
  }, sre.SemanticUtil.unicodeToNumber = function (e) {
    if (!e || 2 < e.length) return null;
    if (2 == e.length) {
      var t = e.charCodeAt(0);
      return e = e.charCodeAt(1), 55296 <= t && 56319 >= t && !isNaN(e) ? 1024 * (t - 55296) + (e - 56320) + 65536 : null
    }
    return e.charCodeAt(0)
  }, sre.SemanticUtil.numberToUnicode = function (e) {
    return 65536 <= e ? String.fromCharCode((e - 65536) / 1024 + 55296, (e - 65536) % 1024 + 56320) : String.fromCharCode(e)
  }, sre.SemanticUtil.splitUnicode = function (e) {
    e = e.split("");
    for (var t, r = [], s = 0; t = e[s]; s++) "�" <= t && "�" >= t && e[s + 1] ? r.push(t + e[++s]) : r.push(t);
    return r
  }, sre.SemanticUtil.tagName = function (e) {
    return e.tagName.toUpperCase()
  }, sre.SemanticUtil.LEAFTAGS = ["MO", "MI", "MN", "MTEXT", "MS"], sre.SemanticUtil.IGNORETAGS = "MERROR MPHANTOM MSPACE MACTION MALIGNGROUP MALIGNMARK NONE MPRESCRIPTS".split(" "), sre.SemanticUtil.EMPTYTAGS = ["MATH", "MROW", "MPADDED", "MSTYLE"], sre.SemanticUtil.hasMathTag = function (e) {
    return !!e && "MATH" === sre.SemanticUtil.tagName(e)
  }, sre.SemanticUtil.hasIgnoreTag = function (e) {
    return !!e && -1 !== sre.SemanticUtil.IGNORETAGS.indexOf(sre.SemanticUtil.tagName(e))
  }, sre.SemanticUtil.hasEmptyTag = function (e) {
    return !!e && -1 !== sre.SemanticUtil.EMPTYTAGS.indexOf(sre.SemanticUtil.tagName(e))
  }, sre.SemanticUtil.purgeNodes = function (e) {
    for (var t, r = [], s = 0; t = e[s]; s++) {
      var n = sre.SemanticUtil.tagName(t); - 1 == sre.SemanticUtil.IGNORETAGS.indexOf(n) && (-1 != sre.SemanticUtil.EMPTYTAGS.indexOf(n) && 0 == t.childNodes.length || r.push(t))
    }
    return r
  }, sre.SemanticUtil.isZeroLength = function (e) {
    return !!e && (-1 !== "negativeveryverythinmathspace negativeverythinmathspace negativethinmathspace negativemediummathspace negativethickmathspace negativeverythickmathspace negativeveryverythickmathspace".split(" ")
      .indexOf(e) || !!(e = e.match(/[0-9\.]+/)) && 0 === parseFloat(e))
  }, sre.SemanticAttr = function () {
    this.generalPunctuations = '!"#%&:;?@\\¡§¶¿‗†‡•‣․‥‧‰‱‸※‼‽‾⁁⁂⁃⁇⁈⁉⁋⁌⁍⁎⁏⁐⁑⁓⁕⁖⁘⁙⁚⁛⁜⁝⁞︐︓︔︕︖︰﹅﹆﹉﹊﹋﹌﹐﹔﹕﹖﹗﹟﹠﹡﹨﹪﹫！＂＃％＆＇＊，／：；？＠＼'.split(""), this.invisibleComma_ = sre.SemanticUtil.numberToUnicode(8291), this.commas = [",", this.invisibleComma_], this.ellipses = "…⋮⋯⋰⋱︙".split(""), this.fullStops = [".", "﹒", "．"], this.dashes = "‒–—―〜︱︲﹘".split(""), this.primes = "'′″‴‵‶‷⁗".split(""), this.openClosePairs = {
      "(": ")"
      , "[": "]"
      , "{": "}"
      , "⁅": "⁆"
      , "〈": "〉"
      , "❨": "❩"
      , "❪": "❫"
      , "❬": "❭"
      , "❮": "❯"
      , "❰": "❱"
      , "❲": "❳"
      , "❴": "❵"
      , "⟅": "⟆"
      , "⟦": "⟧"
      , "⟨": "⟩"
      , "⟪": "⟫"
      , "⟬": "⟭"
      , "⟮": "⟯"
      , "⦃": "⦄"
      , "⦅": "⦆"
      , "⦇": "⦈"
      , "⦉": "⦊"
      , "⦋": "⦌"
      , "⦍": "⦎"
      , "⦏": "⦐"
      , "⦑": "⦒"
      , "⦓": "⦔"
      , "⦕": "⦖"
      , "⦗": "⦘"
      , "⧘": "⧙"
      , "⧚": "⧛"
      , "⧼": "⧽"
      , "⸢": "⸣"
      , "⸤": "⸥"
      , "⸦": "⸧"
      , "⸨": "⸩"
      , "〈": "〉"
      , "《": "》"
      , "「": "」"
      , "『": "』"
      , "【": "】"
      , "〔": "〕"
      , "〖": "〗"
      , "〘": "〙"
      , "〚": "〛"
      , "〝": "〞"
      , "﴾": "﴿"
      , "︗": "︘"
      , "﹙": "﹚"
      , "﹛": "﹜"
      , "﹝": "﹞"
      , "（": "）"
      , "［": "］"
      , "｛": "｝"
      , "｟": "｠"
      , "｢": "｣"
      , "⌈": "⌉"
      , "⌊": "⌋"
      , "⌌": "⌍"
      , "⌎": "⌏"
      , "⌜": "⌝"
      , "⌞": "⌟"
      , "⎛": "⎞"
      , "⎜": "⎟"
      , "⎝": "⎠"
      , "⎡": "⎤"
      , "⎢": "⎥"
      , "⎣": "⎦"
      , "⎧": "⎫"
      , "⎨": "⎬"
      , "⎩": "⎭"
      , "⎰": "⎱"
      , "⎸": "⎹"
    }, this.topBottomPairs = {
      "⎴": "⎵"
      , "⏜": "⏝"
      , "⏞": "⏟"
      , "⏠": "⏡"
      , "︵": "︶"
      , "︷": "︸"
      , "︹": "︺"
      , "︻": "︼"
      , "︽": "︾"
      , "︿": "﹀"
      , "﹁": "﹂"
      , "﹃": "﹄"
      , "﹇": "﹈"
    }, this.leftFences = sre.SemanticUtil.objectsToKeys(this.openClosePairs), this.rightFences = sre.SemanticUtil.objectsToValues(this.openClosePairs), this.rightFences.push("〟"), this.topFences = sre.SemanticUtil.objectsToKeys(this.topBottomPairs), this.bottomFences = sre.SemanticUtil.objectsToValues(this.topBottomPairs), this.neutralFences = "|¦‖❘⦀⫴￤｜".split(""), this.fences = this.neutralFences.concat(this.leftFences, this.rightFences, this.topFences, this.bottomFences), this.capitalLatin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), this.smallLatin = "abcdefghijklmnopqrstuvwxyzıȷ".split(""), this.capitalLatinFullWidth = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ".split(""), this.smallLatinFullWidth = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ".split(""), this.capitalLatinBold = "𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇 𝐈 𝐉 𝐊 𝐋 𝐌 𝐍 𝐎 𝐏 𝐐 𝐑 𝐒 𝐓 𝐔 𝐕 𝐖 𝐗 𝐘 𝐙".split(" "), this.smallLatinBold = "𝐚 𝐛 𝐜 𝐝 𝐞 𝐟 𝐠 𝐡 𝐢 𝐣 𝐤 𝐥 𝐦 𝐧 𝐨 𝐩 𝐪 𝐫 𝐬 𝐭 𝐮 𝐯 𝐰 𝐱 𝐲 𝐳".split(" "), this.capitalLatinItalic = "𝐴 𝐵 𝐶 𝐷 𝐸 𝐹 𝐺 𝐻 𝐼 𝐽 𝐾 𝐿 𝑀 𝑁 𝑂 𝑃 𝑄 𝑅 𝑆 𝑇 𝑈 𝑉 𝑊 𝑋 𝑌 𝑍".split(" "), this.smallLatinItalic = "𝑎 𝑏 𝑐 𝑑 𝑒 𝑓 𝑔 ℎ 𝑖 𝑗 𝑘 𝑙 𝑚 𝑛 𝑜 𝑝 𝑞 𝑟 𝑠 𝑡 𝑢 𝑣 𝑤 𝑥 𝑦 𝑧 𝚤 𝚥".split(" "), this.capitalLatinScript = "𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵 ℘".split(" "), this.smallLatinScript = "𝒶 𝒷 𝒸 𝒹 ℯ 𝒻 ℊ 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 ℴ 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏 ℓ".split(" "), this.capitalLatinBoldScript = "𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩".split(" "), this.smallLatinBoldScript = "𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃".split(" "), this.capitalLatinFraktur = "𝔄 𝔅 ℭ 𝔇 𝔈 𝔉 𝔊 ℌ ℑ 𝔍 𝔎 𝔏 𝔐 𝔑 𝔒 𝔓 𝔔 ℜ 𝔖 𝔗 𝔘 𝔙 𝔚 𝔛 𝔜 ℨ".split(" "), this.smallLatinFraktur = "𝔞 𝔟 𝔠 𝔡 𝔢 𝔣 𝔤 𝔥 𝔦 𝔧 𝔨 𝔩 𝔪 𝔫 𝔬 𝔭 𝔮 𝔯 𝔰 𝔱 𝔲 𝔳 𝔴 𝔵 𝔶 𝔷".split(" "), this.capitalLatinDoubleStruck = "𝔸 𝔹 ℂ 𝔻 𝔼 𝔽 𝔾 ℍ 𝕀 𝕁 𝕂 𝕃 𝕄 ℕ 𝕆 ℙ ℚ ℝ 𝕊 𝕋 𝕌 𝕍 𝕎 𝕏 𝕐 ℤ".split(" "), this.smallLatinDoubleStruck = "𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫".split(" "), this.capitalLatinBoldFraktur = "𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵 𝕶 𝕷 𝕸 𝕹 𝕺 𝕻 𝕼 𝕽 𝕾 𝕿 𝖀 𝖁 𝖂 𝖃 𝖄 𝖅".split(" "), this.smallLatinBoldFraktur = "𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟".split(" "), this.capitalLatinSansSerif = "𝖠 𝖡 𝖢 𝖣 𝖤 𝖥 𝖦 𝖧 𝖨 𝖩 𝖪 𝖫 𝖬 𝖭 𝖮 𝖯 𝖰 𝖱 𝖲 𝖳 𝖴 𝖵 𝖶 𝖷 𝖸 𝖹".split(" "), this.smallLatinSansSerif = "𝖺 𝖻 𝖼 𝖽 𝖾 𝖿 𝗀 𝗁 𝗂 𝗃 𝗄 𝗅 𝗆 𝗇 𝗈 𝗉 𝗊 𝗋 𝗌 𝗍 𝗎 𝗏 𝗐 𝗑 𝗒 𝗓".split(" "), this.capitalLatinSansSerifBold = "𝗔 𝗕 𝗖 𝗗 𝗘 𝗙 𝗚 𝗛 𝗜 𝗝 𝗞 𝗟 𝗠 𝗡 𝗢 𝗣 𝗤 𝗥 𝗦 𝗧 𝗨 𝗩 𝗪 𝗫 𝗬 𝗭".split(" "), this.smallLatinSansSerifBold = "𝗮 𝗯 𝗰 𝗱 𝗲 𝗳 𝗴 𝗵 𝗶 𝗷 𝗸 𝗹 𝗺 𝗻 𝗼 𝗽 𝗾 𝗿 𝘀 𝘁 𝘂 𝘃 𝘄 𝘅 𝘆 𝘇".split(" "), this.capitalLatinSansSerifItalic = "𝘈 𝘉 𝘊 𝘋 𝘌 𝘍 𝘎 𝘏 𝘐 𝘑 𝘒 𝘓 𝘔 𝘕 𝘖 𝘗 𝘘 𝘙 𝘚 𝘛 𝘜 𝘝 𝘞 𝘟 𝘠 𝘡".split(" "), this.smallLatinSansSerifItalic = "𝘢 𝘣 𝘤 𝘥 𝘦 𝘧 𝘨 𝘩 𝘪 𝘫 𝘬 𝘭 𝘮 𝘯 𝘰 𝘱 𝘲 𝘳 𝘴 𝘵 𝘶 𝘷 𝘸 𝘹 𝘺 𝘻".split(" "), this.capitalLatinMonospace = "𝙰 𝙱 𝙲 𝙳 𝙴 𝙵 𝙶 𝙷 𝙸 𝙹 𝙺 𝙻 𝙼 𝙽 𝙾 𝙿 𝚀 𝚁 𝚂 𝚃 𝚄 𝚅 𝚆 𝚇 𝚈 𝚉".split(" "), this.smallLatinMonospace = "𝚊 𝚋 𝚌 𝚍 𝚎 𝚏 𝚐 𝚑 𝚒 𝚓 𝚔 𝚕 𝚖 𝚗 𝚘 𝚙 𝚚 𝚛 𝚜 𝚝 𝚞 𝚟 𝚠 𝚡 𝚢 𝚣".split(" "), this.latinDoubleStruckItalic = ["ⅅ", "ⅆ", "ⅇ", "ⅈ", "ⅉ"], this.capitalGreek = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split(""), this.smallGreek = "αβγδεζηθικλμνξοπρςστυφχψω".split(""), this.capitalGreekBold = "𝚨 𝚩 𝚪 𝚫 𝚬 𝚭 𝚮 𝚯 𝚰 𝚱 𝚲 𝚳 𝚴 𝚵 𝚶 𝚷 𝚸 𝚺 𝚻 𝚼 𝚽 𝚾 𝚿 𝛀".split(" "), this.smallGreekBold = "𝛂 𝛃 𝛄 𝛅 𝛆 𝛇 𝛈 𝛉 𝛊 𝛋 𝛌 𝛍 𝛎 𝛏 𝛐 𝛑 𝛒 𝛓 𝛔 𝛕 𝛖 𝛗 𝛘 𝛙 𝛚".split(" "), this.capitalGreekItalic = "𝛢 𝛣 𝛤 𝛥 𝛦 𝛧 𝛨 𝛩 𝛪 𝛫 𝛬 𝛭 𝛮 𝛯 𝛰 𝛱 𝛲 𝛴 𝛵 𝛶 𝛷 𝛸 𝛹 𝛺".split(" "), this.smallGreekItalic = "𝛼 𝛽 𝛾 𝛿 𝜀 𝜁 𝜂 𝜃 𝜄 𝜅 𝜆 𝜇 𝜈 𝜉 𝜊 𝜋 𝜌 𝜍 𝜎 𝜏 𝜐 𝜑 𝜒 𝜓 𝜔".split(" "), this.capitalGreekSansSerifBold = "𝝖 𝝗 𝝘 𝝙 𝝚 𝝛 𝝜 𝝝 𝝞 𝝟 𝝠 𝝡 𝝢 𝝣 𝝤 𝝥 𝝦 𝝨 𝝩 𝝪 𝝫 𝝬 𝝭 𝝮".split(" "), this.smallGreekSansSerifBold = "𝝰 𝝱 𝝲 𝝳 𝝴 𝝵 𝝶 𝝷 𝝸 𝝹 𝝺 𝝻 𝝼 𝝽 𝝾 𝝿 𝞀 𝞁 𝞂 𝞃 𝞄 𝞅 𝞆 𝞇 𝞈".split(" "), this.greekDoubleStruck = ["ℼ", "ℽ", "ℾ", "ℿ"], this.hebrewLetters = ["ℵ", "ℶ", "ℷ", "ℸ"], this.allLetters = this.capitalLatin.concat(this.smallLatin, this.capitalLatinFullWidth, this.smallLatinFullWidth, this.capitalLatinBold, this.smallLatinBold, this.capitalLatinItalic, this.smallLatinItalic, this.capitalLatinScript, this.smallLatinScript, this.capitalLatinBoldScript, this.smallLatinBoldScript, this.capitalLatinFraktur, this.smallLatinFraktur, this.capitalLatinDoubleStruck, this.smallLatinDoubleStruck, this.capitalLatinBoldFraktur, this.smallLatinBoldFraktur, this.capitalLatinSansSerif, this.smallLatinSansSerif, this.capitalLatinSansSerifBold, this.smallLatinSansSerifBold, this.capitalLatinSansSerifItalic, this.smallLatinSansSerifItalic, this.capitalLatinMonospace, this.smallLatinMonospace, this.latinDoubleStruckItalic, this.capitalGreek, this.smallGreek, this.capitalGreekBold, this.smallGreekBold, this.capitalGreekItalic, this.smallGreekItalic, this.capitalGreekSansSerifBold, this.smallGreekSansSerifBold, this.greekDoubleStruck, this.hebrewLetters), this.additions = "+±∓∔∧∨∩∪⊌⊓⊔⊝⊞⊤⊥⊺⊻⊼⋄⋎⋏⋒⋓△▷▽◁⩞⊕".split(""), this.invisiblePlus_ = sre.SemanticUtil.numberToUnicode(8292), this.additions.push(this.invisiblePlus_), this.multiplications = "†‡∐∗∘∙≀⊚⊛⊠⊡⋅⋆⋇⋉⋊⋋⋌○·*".split(""), this.invisibleTimes_ = sre.SemanticUtil.numberToUnicode(8290), this.multiplications.push(this.invisibleTimes_), this.subtractions = "-⁒⁻₋−∖∸≂⊖⊟➖⨩⨪⨫⨬⨺⩁⩬﹣－‐‑".split(""), this.divisions = "/÷⁄∕⊘⟌⦼⨸".split(""), this.functionApplication_ = sre.SemanticUtil.numberToUnicode(8289), this.equalities = "=~⁼₌∼∽≃≅≈≊≋≌≍≎≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≡≣⧤⩦⩮⩯⩰⩱⩲⩳⩴⩵⩶⩷⩸⋕⩭⩪⩫⩬﹦＝".split(""), this.inequalities = "<>≁≂≄≆≇≉≏≐≠≢≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⩹⩺⩻⩼⩽⩾⩿⪀⪁⪂⪃⪄⪅⪆⪇⪈⪉⪊⪋⪌⪍⪎⪏⪐⪑⪒⪓⪔⪕⪖⪗⪘⪙⪚⪛⪜⪝⪞⪟⪠⪡⪢⪣⪤⪥⪦⪧⪨⪩⪪⪫⪬⪭⪮⪯⪰⪱⪲⪳⪴⪵⪶⪷⪸⪹⪺⪻⪼⫷⫸⫹⫺⧀⧁﹤﹥＜＞".split(""), this.relations = [], this.arrows = "←↑→↓↔↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻⇄⇅⇆⇇⇈⇉⇊⇍⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿⌁⌃⌄⌤⎋➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪➫➬➭➮➯➱➲➳➴➵➶➷➸➹➺➻➼➽➾⟰⟱⟲⟳⟴⟵⟶⟷⟸⟹⟺⟻⟼⟽⟾⟿⤀⤁⤂⤃⤄⤅⤆⤇⤈⤉⤊⤋⤌⤍⤎⤏⤐⤑⤒⤓⤔⤕⤖⤗⤘⤙⤚⤛⤜⤝⤞⤟⤠⤡⤢⤣⤤⤥⤦⤧⤨⤩⤪⤭⤮⤯⤰⤱⤲⤳⤴⤵⤶⤷⤸⤹⤺⤻⤼⤽⤾⤿⥀⥁⥂⥃⥄⥅⥆⥇⥈⥉⥰⥱⥲⥳⥴⥵⥶⥷⥸⥹⥺⥻⦳⦴⦽⧪⧬⧭⨗⬀⬁⬂⬃⬄⬅⬆⬇⬈⬉⬊⬋⬌⬍⬎⬏⬐⬑⬰⬱⬲⬳⬴⬵⬶⬷⬸⬹⬺⬻⬼⬽⬾⬿⭀⭁⭂⭃⭄⭅⭆⭇⭈⭉⭊⭋⭌￩￪￫￬↼↽↾↿⇀⇁⇂⇃⇋⇌⥊⥋⥌⥍⥎⥏⥐⥑⥒⥓⥔⥕⥖⥗⥘⥙⥚⥛⥜⥝⥞⥟⥠⥡⥢⥣⥤⥥⥦⥧⥨⥩⥪⥫⥬⥭⥮⥯⥼⥽⥾⥿".split(""), this.sumOps = "⅀∏∐∑⋀⋁⋂⋃⨀⨁⨂⨃⨄⨅⨆⨇⨈⨉⨊⨋⫼⫿".split(""), this.intOps = "∫∬∭∮∯∰∱∲∳⨌⨍⨎⨏⨐⨑⨒⨓⨔⨕⨖⨗⨘⨙⨚⨛⨜".split(""), this.prefixOps = ["∀", "∃"], this.operatorBits = "⌠⌡⎶⎪⎮⎯⎲⎳⎷".split(""), this.digitsNormal = "0123456789".split(""), this.digitsFullWidth = "０１２３４５６７８９".split(""), this.digitsBold = "𝟎 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗".split(" "), this.digitsDoubleStruck = "𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡".split(" "), this.digitsSansSerif = "𝟢 𝟣 𝟤 𝟥 𝟦 𝟧 𝟨 𝟩 𝟪 𝟫".split(" "), this.digitsSansSerifBold = "𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵".split(" "), this.digitsMonospace = "𝟶 𝟷 𝟸 𝟹 𝟺 𝟻 𝟼 𝟽 𝟾 𝟿".split(" "), this.digitsSuperscript = "²³¹⁰⁴⁵⁶⁷⁸⁹".split(""), this.digitsSubscript = "₀₁₂₃₄₅₆₇₈₉".split(""), this.fractions = "¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅟↉".split(""), this.enclosedNumbers = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⓪⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾⓿❶❷❸❹❺❻❼❽❾❿➀➁➂➃➄➅➆➇➈➉➊➋➌➍➎➏➐➑➒➓㉈㉉㉊㉋㉌㉍㉎㉏㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿".split(""), this.fencedNumbers = "⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇".split(""), this.punctuatedNumbers = "⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑ ⒒ ⒓ ⒔ ⒕ ⒖ ⒗ ⒘ ⒙ ⒚ ⒛ 🄀 🄁 🄂 🄃 🄄 🄅 🄆 🄇 🄈 🄉 🄊".split(" "), this.digits = this.digitsNormal.concat(this.digitsFullWidth, this.digitsBold, this.digitsDoubleStruck, this.digitsSansSerif, this.digitsSansSerifBold, this.digitsMonospace), this.numbers = this.fractions.concat(this.digitsSuperscript, this.digitsSubscript, this.enclosedNumbers, this.fencedNumbers, this.punctuatedNumbers), this.allNumbers = this.digits.concat(this.numbers), this.trigonometricFunctions = "cos cot csc sec sin tan arccos arccot arccsc arcsec arcsin arctan".split(" "), this.hyperbolicFunctions = "cosh coth csch sech sinh tanh arcosh arcoth arcsch arsech arsinh artanh arccosh arccoth arccsch arcsech arcsinh arctanh".split(" "), this.algebraicFunctions = "deg det dim hom ker Tr tr".split(" "), this.elementaryFunctions = "log ln lg exp expt gcd gcd arg im re Pr".split(" "), this.prefixFunctions = this.trigonometricFunctions.concat(this.hyperbolicFunctions, this.algebraicFunctions, this.elementaryFunctions), this.limitFunctions = "inf lim liminf limsup max min sup injlim projlim".split(" "), this.infixFunctions = ["mod", "rem"], this.symbolSetToSemantic_ = [{
      set: this.generalPunctuations
      , type: sre.SemanticAttr.Type.PUNCTUATION
      , role: sre.SemanticAttr.Role.UNKNOWN
    }, {
      set: this.commas
      , type: sre.SemanticAttr.Type.PUNCTUATION
      , role: sre.SemanticAttr.Role.COMMA
    }, {
      set: this.ellipses
      , type: sre.SemanticAttr.Type.PUNCTUATION
      , role: sre.SemanticAttr.Role.ELLIPSIS
    }, {
      set: this.fullStops
      , type: sre.SemanticAttr.Type.PUNCTUATION
      , role: sre.SemanticAttr.Role.FULLSTOP
    }, {
      set: this.dashes
      , type: sre.SemanticAttr.Type.PUNCTUATION
      , role: sre.SemanticAttr.Role.DASH
    }, {
      set: this.primes
      , type: sre.SemanticAttr.Type.PUNCTUATION
      , role: sre.SemanticAttr.Role.PRIME
    }, {
      set: this.leftFences
      , type: sre.SemanticAttr.Type.FENCE
      , role: sre.SemanticAttr.Role.OPEN
    }, {
      set: this.rightFences
      , type: sre.SemanticAttr.Type.FENCE
      , role: sre.SemanticAttr.Role.CLOSE
    }, {
      set: this.topFences
      , type: sre.SemanticAttr.Type.FENCE
      , role: sre.SemanticAttr.Role.TOP
    }, {
      set: this.bottomFences
      , type: sre.SemanticAttr.Type.FENCE
      , role: sre.SemanticAttr.Role.BOTTOM
    }, {
      set: this.neutralFences
      , type: sre.SemanticAttr.Type.FENCE
      , role: sre.SemanticAttr.Role.NEUTRAL
    }, {
      set: this.smallLatin
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.capitalLatin
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.smallLatinFullWidth
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.capitalLatinFullWidth
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.smallLatinBold
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.BOLD
    }, {
      set: this.capitalLatinBold
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.BOLD
    }, {
      set: this.smallLatinItalic
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.ITALIC
    }, {
      set: this.capitalLatinItalic
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.ITALIC
    }, {
      set: this.smallLatinScript
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.SCRIPT
    }, {
      set: this.capitalLatinScript
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.SCRIPT
    }, {
      set: this.smallLatinBoldScript
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.BOLDSCRIPT
    }, {
      set: this.capitalLatinBoldScript
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.BOLDSCRIPT
    }, {
      set: this.smallLatinFraktur
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.FRAKTUR
    }, {
      set: this.capitalLatinFraktur
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.FRAKTUR
    }, {
      set: this.smallLatinDoubleStruck
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.DOUBLESTRUCK
    }, {
      set: this.capitalLatinDoubleStruck
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.DOUBLESTRUCK
    }, {
      set: this.smallLatinBoldFraktur
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.BOLDFRAKTUR
    }, {
      set: this.capitalLatinBoldFraktur
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.BOLDFRAKTUR
    }, {
      set: this.smallLatinSansSerif
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.SANSSERIF
    }, {
      set: this.capitalLatinSansSerif
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.SANSSERIF
    }, {
      set: this.smallLatinSansSerifBold
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.SANSSERIFBOLD
    }, {
      set: this.capitalLatinSansSerifBold
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.SANSSERIFBOLD
    }, {
      set: this.smallLatinSansSerifItalic
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.SANSSERIFITALIC
    }, {
      set: this.capitalLatinSansSerifItalic
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.SANSSERIFITALIC
    }, {
      set: this.smallLatinMonospace
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.MONOSPACE
    }, {
      set: this.capitalLatinMonospace
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.MONOSPACE
    }, {
      set: this.latinDoubleStruckItalic
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.LATINLETTER
      , font: sre.SemanticAttr.Font.DOUBLESTRUCKITALIC
    }, {
      set: this.smallGreek
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.capitalGreek
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.smallGreekBold
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.BOLD
    }, {
      set: this.capitalGreekBold
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.BOLD
    }, {
      set: this.smallGreekItalic
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.ITALIC
    }, {
      set: this.capitalGreekItalic
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.ITALIC
    }, {
      set: this.smallGreekSansSerifBold
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.SANSSERIFBOLD
    }, {
      set: this.capitalGreekSansSerifBold
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.SANSSERIFBOLD
    }, {
      set: this.greekDoubleStruck
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.GREEKLETTER
      , font: sre.SemanticAttr.Font.DOUBLESTRUCK
    }, {
      set: this.hebrewLetters
      , type: sre.SemanticAttr.Type.IDENTIFIER
      , role: sre.SemanticAttr.Role.OTHERLETTER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.digitsNormal
      , type: sre.SemanticAttr.Type.NUMBER
      , role: sre.SemanticAttr.Role.INTEGER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.digitsFullWidth
      , type: sre.SemanticAttr.Type.NUMBER
      , role: sre.SemanticAttr.Role.INTEGER
      , font: sre.SemanticAttr.Font.NORMAL
    }, {
      set: this.digitsBold
      , type: sre.SemanticAttr.Type.NUMBER
      , role: sre.SemanticAttr.Role.INTEGER
      , font: sre.SemanticAttr.Font.BOLD
    }, {
      set: this.digitsDoubleStruck
      , type: sre.SemanticAttr.Type.NUMBER
      , role: sre.SemanticAttr.Role.INTEGER
      , font: sre.SemanticAttr.Font.DOUBLESTRUCK
    }, {
      set: this.digitsSansSerif
      , type: sre.SemanticAttr.Type.NUMBER
      , role: sre.SemanticAttr.Role.INTEGER
      , font: sre.SemanticAttr.Font.SANSSERIF
    }, {
      set: this.digitsSansSerifBold
      , type: sre.SemanticAttr.Type.NUMBER
      , role: sre.SemanticAttr.Role.INTEGER
      , font: sre.SemanticAttr.Font.SANSSERIFBOLD
    }, {
      set: this.digitsMonospace
      , type: sre.SemanticAttr.Type.NUMBER
      , role: sre.SemanticAttr.Role.INTEGER
      , font: sre.SemanticAttr.Font.MONOSPACE
    }, {
      set: this.numbers
      , type: sre.SemanticAttr.Type.NUMBER
      , role: sre.SemanticAttr.Role.FLOAT
    }, {
      set: this.additions
      , type: sre.SemanticAttr.Type.OPERATOR
      , role: sre.SemanticAttr.Role.ADDITION
    }, {
      set: this.multiplications
      , type: sre.SemanticAttr.Type.OPERATOR
      , role: sre.SemanticAttr.Role.MULTIPLICATION
    }, {
      set: this.subtractions
      , type: sre.SemanticAttr.Type.OPERATOR
      , role: sre.SemanticAttr.Role.SUBTRACTION
    }, {
      set: this.divisions
      , type: sre.SemanticAttr.Type.OPERATOR
      , role: sre.SemanticAttr.Role.DIVISION
    }, {
      set: this.prefixOps
      , type: sre.SemanticAttr.Type.PREFIXOP
      , role: sre.SemanticAttr.Role.PREFIXFUNC
    }, {
      set: this.equalities
      , type: sre.SemanticAttr.Type.RELATION
      , role: sre.SemanticAttr.Role.EQUALITY
    }, {
      set: this.inequalities
      , type: sre.SemanticAttr.Type.RELATION
      , role: sre.SemanticAttr.Role.INEQUALITY
    }, {
      set: this.relations
      , type: sre.SemanticAttr.Type.RELATION
      , role: sre.SemanticAttr.Role.UNKNOWN
    }, {
      set: this.arrows
      , type: sre.SemanticAttr.Type.RELATION
      , role: sre.SemanticAttr.Role.ARROW
    }, {
      set: this.sumOps
      , type: sre.SemanticAttr.Type.LARGEOP
      , role: sre.SemanticAttr.Role.SUM
    }, {
      set: this.intOps
      , type: sre.SemanticAttr.Type.LARGEOP
      , role: sre.SemanticAttr.Role.INTEGRAL
    }, {
      set: this.limitFunctions
      , type: sre.SemanticAttr.Type.FUNCTION
      , role: sre.SemanticAttr.Role.LIMFUNC
    }, {
      set: this.prefixFunctions
      , type: sre.SemanticAttr.Type.FUNCTION
      , role: sre.SemanticAttr.Role.PREFIXFUNC
    }, {
      set: this.infixFunctions
      , type: sre.SemanticAttr.Type.OPERATOR
      , role: sre.SemanticAttr.Role.MULTIPLICATION
    }], this.meaning_ = this.initMeaning_()
  }, goog.addSingletonGetter(sre.SemanticAttr), sre.SemanticAttr.Type = {
    PUNCTUATION: "punctuation"
    , FENCE: "fence"
    , NUMBER: "number"
    , IDENTIFIER: "identifier"
    , TEXT: "text"
    , OPERATOR: "operator"
    , RELATION: "relation"
    , LARGEOP: "largeop"
    , FUNCTION: "function"
    , ACCENT: "accent"
    , FENCED: "fenced"
    , FRACTION: "fraction"
    , PUNCTUATED: "punctuated"
    , RELSEQ: "relseq"
    , MULTIREL: "multirel"
    , INFIXOP: "infixop"
    , PREFIXOP: "prefixop"
    , POSTFIXOP: "postfixop"
    , APPL: "appl"
    , INTEGRAL: "integral"
    , BIGOP: "bigop"
    , SQRT: "sqrt"
    , ROOT: "root"
    , LIMUPPER: "limupper"
    , LIMLOWER: "limlower"
    , LIMBOTH: "limboth"
    , SUBSCRIPT: "subscript"
    , SUPERSCRIPT: "superscript"
    , UNDERSCORE: "underscore"
    , OVERSCORE: "overscore"
    , TENSOR: "tensor"
    , TABLE: "table"
    , MULTILINE: "multiline"
    , MATRIX: "matrix"
    , VECTOR: "vector"
    , CASES: "cases"
    , ROW: "row"
    , LINE: "line"
    , CELL: "cell"
    , ENCLOSE: "enclose"
    , UNKNOWN: "unknown"
    , EMPTY: "empty"
  }, sre.SemanticAttr.Role = {
    COMMA: "comma"
    , ELLIPSIS: "ellipsis"
    , FULLSTOP: "fullstop"
    , DASH: "dash"
    , PRIME: "prime"
    , VBAR: "vbar"
    , OPENFENCE: "openfence"
    , CLOSEFENCE: "closefence"
    , APPLICATION: "application"
    , DUMMY: "dummy"
    , UNIT: "unit"
    , OPEN: "open"
    , CLOSE: "close"
    , TOP: "top"
    , BOTTOM: "bottom"
    , NEUTRAL: "neutral"
    , LATINLETTER: "latinletter"
    , GREEKLETTER: "greekletter"
    , OTHERLETTER: "otherletter"
    , INTEGER: "integer"
    , FLOAT: "float"
    , OTHERNUMBER: "othernumber"
    , MIXED: "mixed"
    , MULTIACCENT: "multiaccent"
    , OVERACCENT: "overaccent"
    , UNDERACCENT: "underaccent"
    , SUBSUP: "subsup"
    , LEFTSUB: "leftsub"
    , LEFTSUPER: "leftsuper"
    , RIGHTSUB: "rightsub"
    , RIGHTSUPER: "rightsuper"
    , LEFTRIGHT: "leftright"
    , ABOVEBELOW: "abovebelow"
    , STRING: "string"
    , SEQUENCE: "sequence"
    , ENDPUNCT: "endpunct"
    , STARTPUNCT: "startpunct"
    , TEXT: "text"
    , NEGATIVE: "negative"
    , NEGATION: "negation"
    , MULTIOP: "multiop"
    , LIMFUNC: "limit function"
    , INFIXFUNC: "infix function"
    , PREFIXFUNC: "prefix function"
    , POSTFIXFUNC: "postfix function"
    , SIMPLEFUNC: "simple function"
    , SUM: "sum"
    , INTEGRAL: "integral"
    , ADDITION: "addition"
    , MULTIPLICATION: "multiplication"
    , SUBTRACTION: "subtraction"
    , IMPLICIT: "implicit"
    , DIVISION: "division"
    , VULGAR: "vulgar"
    , EQUALITY: "equality"
    , INEQUALITY: "inequality"
    , ELEMENT: "element"
    , BINREL: "binrel"
    , ARROW: "arrow"
    , DETERMINANT: "determinant"
    , ROWVECTOR: "rowvector"
    , BINOMIAL: "binomial"
    , SQUAREMATRIX: "squarematrix"
    , MULTILINE: "multiline"
    , MATRIX: "matrix"
    , VECTOR: "vector"
    , CASES: "cases"
    , TABLE: "table"
    , UNKNOWN: "unknown"
    , PROTECTED: "protected"
  }, sre.SemanticAttr.Font = {
    BOLD: "bold"
    , BOLDFRAKTUR: "bold-fraktur"
    , BOLDITALIC: "bold-italic"
    , BOLDSCRIPT: "bold-script"
    , DOUBLESTRUCK: "double-struck"
    , DOUBLESTRUCKITALIC: "double-struck-italic"
    , FRAKTUR: "fraktur"
    , ITALIC: "italic"
    , MONOSPACE: "monospace"
    , NORMAL: "normal"
    , SCRIPT: "script"
    , SANSSERIF: "sans-serif"
    , SANSSERIFITALIC: "sans-serif-italic"
    , SANSSERIFBOLD: "sans-serif-bold"
    , SANSSERIFBOLDITALIC: "sans-serif-bold-italic"
    , UNKNOWN: "unknown"
  }, sre.SemanticAttr.prototype.lookupType = function (e) {
    return sre.SemanticAttr.Type.UNKNOWN
  }, sre.SemanticAttr.prototype.lookupRole = function (e) {
    return sre.SemanticAttr.Role.UNKNOWN
  }, sre.SemanticAttr.lookupMeaning = function (e) {
    return sre.SemanticAttr.getInstance()
      .lookupMeaning_(e)
  }, sre.SemanticAttr.invisibleTimes = function () {
    return sre.SemanticAttr.getInstance()
      .invisibleTimes_
  }, sre.SemanticAttr.invisibleComma = function () {
    return sre.SemanticAttr.getInstance()
      .invisibleComma_
  }, sre.SemanticAttr.functionApplication = function () {
    return sre.SemanticAttr.getInstance()
      .functionApplication_
  }, sre.SemanticAttr.isMatchingFenceRole = function (e, t) {
    return e == sre.SemanticAttr.Role.OPEN && t == sre.SemanticAttr.Role.CLOSE || e == sre.SemanticAttr.Role.NEUTRAL && t == sre.SemanticAttr.Role.NEUTRAL || e == sre.SemanticAttr.Role.TOP && t == sre.SemanticAttr.Role.BOTTOM
  }, sre.SemanticAttr.isMatchingFence = function (e, t) {
    return sre.SemanticAttr.getInstance()
      .isMatchingFence_(e, t)
  }, sre.SemanticAttr.isOpeningFence = function (e) {
    return e == sre.SemanticAttr.Role.OPEN || e == sre.SemanticAttr.Role.NEUTRAL
  }, sre.SemanticAttr.isClosingFence = function (e) {
    return e == sre.SemanticAttr.Role.CLOSE || e == sre.SemanticAttr.Role.NEUTRAL
  }, sre.SemanticAttr.isEmbellishedType = function (e) {
    return e === sre.SemanticAttr.Type.OPERATOR || e === sre.SemanticAttr.Type.RELATION || e === sre.SemanticAttr.Type.FENCE || e === sre.SemanticAttr.Type.PUNCTUATION
  }, sre.SemanticAttr.isCharacterD = function (e) {
    return -1 != "d ⅆ ｄ 𝐝 𝑑 𝒹 𝓭 𝔡 𝕕 𝖉 𝖽 𝗱 𝘥 𝚍".split(" ")
      .indexOf(e)
  }, sre.SemanticAttr.prototype.isMatchingFence_ = function (e, t) {
    return -1 != this.neutralFences.indexOf(e) ? e == t : this.openClosePairs[e] == t || this.topBottomPairs[e] == t
  }, sre.SemanticAttr.prototype.initMeaning_ = function () {
    for (var e, t = {}, r = 0; e = this.symbolSetToSemantic_[r]; r++) e.set.forEach(function (r) {
      t[r] = {
        role: e.role || sre.SemanticAttr.Role.UNKNOWN
        , type: e.type || sre.SemanticAttr.Type.UNKNOWN
        , font: e.font || sre.SemanticAttr.Font.UNKNOWN
      }
    });
    return t
  }, sre.SemanticAttr.prototype.lookupMeaning_ = function (e) {
    return this.meaning_[e] || {
      role: sre.SemanticAttr.Role.UNKNOWN
      , type: sre.SemanticAttr.Type.UNKNOWN
      , font: sre.SemanticAttr.Font.UNKNOWN
    }
  }, sre.SemanticTree = function (e) {
    this.idCounter_ = 0, this.mathml = e, this.root = this.parseMathml_(e)
  }, sre.SemanticTree.Node = function (e) {
    this.id = e, this.mathml = [], this.parent = null, this.type = sre.SemanticAttr.Type.UNKNOWN, this.role = sre.SemanticAttr.Role.UNKNOWN, this.font = sre.SemanticAttr.Font.UNKNOWN, this.embellished = null, this.fencePointer = "", this.childNodes = [], this.textContent = "", this.mathmlTree = null, this.contentNodes = [], this.bookmark = 0
  }, sre.SemanticTree.Node.prototype.querySelectorAll = function (e) {
    for (var t, r = [], s = 0; t = this.childNodes[s]; s++) r = r.concat(t.querySelectorAll(e));
    return e(this) && r.unshift(this), r
  }, sre.SemanticTree.prototype.xml = function (e) {
    var t = (new sre.SystemExternal.xmldom.DOMParser)
      .parseFromString("<stree></stree>", "text/xml");
    return e = this.root.xml(t, e), t.childNodes[0].appendChild(e), t
  }, sre.SemanticTree.Node.prototype.xml = function (e, t) {
    var r = function (r, s) {
        for (var n, i = s.map(function (r) {
            return r.xml(e, t)
          }), a = e.createElement(r), l = 0; n = i[l]; l++) a.appendChild(n);
        return a
      }
      , s = e.createElement(this.type);
    return t || this.xmlAttributes_(s), s.textContent = this.textContent, 0 < this.contentNodes.length && s.appendChild(r("content", this.contentNodes)), 0 < this.childNodes.length && s.appendChild(r("children", this.childNodes)), s
  }, sre.SemanticTree.prototype.toString = function (e) {
    return (new sre.SystemExternal.xmldom.XMLSerializer)
      .serializeToString(this.xml(e))
  }, sre.SemanticTree.prototype.formatXml = function (e) {
    return e = this.toString(e), sre.SemanticTree.formatXml(e)
  }, sre.SemanticTree.formatXml = function (e) {
    var t = /(>)(<)(\/*)/g;
    e = e.replace(t, "$1\r\n$2$3"), t = /(>)(.+)(<c)/g, e = e.replace(t, "$1\r\n$2\r\n$3");
    var r = ""
      , s = "";
    return e.split("\r\n")
      .forEach(function (e) {
        e.match(/.+<\/\w[^>]*>$/) ? r += s + e + "\r\n" : e.match(/^<\/\w/) ? s && (s = s.slice(2), r += s + e + "\r\n") : e.match(/^<\w[^>]*[^\/]>.*$/) ? (r += s + e + "\r\n", s += "  ") : r += s + e + "\r\n"
      }), r
  }, sre.SemanticTree.Node.prototype.toString = function (e) {
    var t = new sre.SystemExternal.xmldom.XMLSerializer
      , r = (new sre.SystemExternal.xmldom.DOMParser)
      .parseFromString("", "text/xml");
    return t.serializeToString(this.xml(r, e))
  }, sre.SemanticTree.Node.prototype.xmlAttributes_ = function (e) {
    e.setAttribute("role", this.role), this.font != sre.SemanticAttr.Font.UNKNOWN && e.setAttribute("font", this.font), this.embellished && e.setAttribute("embellished", this.embellished), this.fencePointer && e.setAttribute("fencepointer", this.fencePointer), this.bookmark && e.setAttribute("bookmark", this.bookmark), e.setAttribute("id", this.id)
  }, sre.SemanticTree.prototype.createNode_ = function () {
    return new sre.SemanticTree.Node((this.idCounter_++))
  }, sre.SemanticTree.prototype.replaceNode_ = function (e, t) {
    var r = e.parent;
    r ? r.replaceChild_(e, t) : this.root = t
  }, sre.SemanticTree.Node.prototype.updateContent_ = function (e) {
    if (e = e.trim(), this.textContent != e) {
      var t = sre.SemanticAttr.lookupMeaning(e);
      this.textContent = e, this.role = t.role, this.type = t.type, this.font = t.font
    }
  }, sre.SemanticTree.Node.prototype.addMathmlNodes_ = function (e) {
    for (var t, r = 0; t = e[r]; r++) - 1 == this.mathml.indexOf(t) && this.mathml.push(t)
  }, sre.SemanticTree.Node.prototype.removeMathmlNodes_ = function (e) {
    for (var t, r = this.mathml, s = 0; t = e[s]; s++) t = r.indexOf(t), -1 != t && r.splice(t, 1);
    this.mathml = r
  }, sre.SemanticTree.Node.prototype.appendChild_ = function (e) {
    this.childNodes.push(e), this.addMathmlNodes_(e.mathml), e.parent = this
  }, sre.SemanticTree.Node.prototype.replaceChild_ = function (e, t) {
    var r = this.childNodes.indexOf(e);
    if (-1 != r) {
      e.parent = null, t.parent = this, this.childNodes[r] = t;
      var r = e.mathml.filter(function (e) {
          return -1 == t.mathml.indexOf(e)
        })
        , s = t.mathml.filter(function (t) {
          return -1 == e.mathml.indexOf(t)
        });
      this.removeMathmlNodes_(r), this.addMathmlNodes_(s)
    }
  }, sre.SemanticTree.Node.prototype.appendContentNode_ = function (e) {
    e && (this.contentNodes.push(e), this.addMathmlNodes_(e.mathml), e.parent = this)
  }, sre.SemanticTree.Node.prototype.removeContentNode_ = function (e) {
    e && (e = this.contentNodes.indexOf(e), -1 != e && this.contentNodes.slice(e, 1))
  }, sre.SemanticTree.Node.prototype.equals = function (e) {
    if (!e || this.type !== e.type || this.role !== e.role || this.textContent !== e.textContent || this.childNodes.length !== e.childNodes.length || this.contentNodes.length !== e.contentNodes.length) return !1;
    for (var t, r, s = 0; t = this.childNodes[s], r = e.childNodes[s]; s++)
      if (!t.equals(r)) return !1;
    for (s = 0; t = this.contentNodes[s], r = e.contentNodes[s]; s++)
      if (!t.equals(r)) return !1;
    return !0
  }, sre.SemanticTree.prototype.parseMathml_ = function (e) {
    var t, r = sre.DomUtil.toArray(e.childNodes);
    switch (sre.SemanticUtil.tagName(e)) {
    case "SEMANTICS":
      if (0 < r.length) {
        t = this.parseMathml_(r[0]);
        break
      }
    case "MATH":
    case "MROW":
    case "MPADDED":
    case "MSTYLE":
      return r = sre.SemanticUtil.purgeNodes(r), t = 1 == r.length ? this.parseMathml_(r[0]) : this.processRow_(this.parseMathmlChildren_(r)), t.mathml.unshift(e), t;
    case "MFRAC":
      sre.SemanticUtil.isZeroLength(e.getAttribute("linethickness")) ? (t = this.makeBranchNode_(sre.SemanticAttr.Type.LINE, [this.parseMathml_(r[0])], []), r = this.makeBranchNode_(sre.SemanticAttr.Type.LINE, [this.parseMathml_(r[1])], []), t = this.makeBranchNode_(sre.SemanticAttr.Type.MULTILINE, [t, r], [])) : t = this.makeFractionNode_(this.parseMathml_(r[0]), this.parseMathml_(r[1]));
      break;
    case "MSUB":
    case "MSUP":
    case "MSUBSUP":
    case "MOVER":
    case "MUNDER":
    case "MUNDEROVER":
      t = this.makeLimitNode_(sre.SemanticUtil.tagName(e), this.parseMathmlChildren_(r));
      break;
    case "MROOT":
      t = this.makeBranchNode_(sre.SemanticAttr.Type.ROOT, [this.parseMathml_(r[1]), this.parseMathml_(r[0])], []);
      break;
    case "MSQRT":
      r = this.parseMathmlChildren_(sre.SemanticUtil.purgeNodes(r)), t = this.makeBranchNode_(sre.SemanticAttr.Type.SQRT, [this.processRow_(r)], []);
      break;
    case "MTABLE":
      t = this.makeBranchNode_(sre.SemanticAttr.Type.TABLE, this.parseMathmlChildren_(r), []), sre.SemanticTree.tableIsMultiline_(t) && this.tableToMultiline_(t);
      break;
    case "MTR":
      t = this.makeBranchNode_(sre.SemanticAttr.Type.ROW, this.parseMathmlChildren_(r), []), t.role = sre.SemanticAttr.Role.TABLE;
      break;
    case "MTD":
      r = this.parseMathmlChildren_(sre.SemanticUtil.purgeNodes(r)), t = this.makeBranchNode_(sre.SemanticAttr.Type.CELL, [this.processRow_(r)], []), t.role = sre.SemanticAttr.Role.TABLE;
      break;
    case "MS":
    case "MTEXT":
      t = this.makeLeafNode_(e), t.type = sre.SemanticAttr.Type.TEXT, "MS" === sre.SemanticUtil.tagName(e) && (t.role = sre.SemanticAttr.Role.STRING), sre.SemanticTree.exprFont_(t);
      break;
    case "MI":
      t = this.makeIdentifierNode_(e);
      break;
    case "MN":
      t = this.makeLeafNode_(e), t.type != sre.SemanticAttr.Type.UNKNOWN && t.type != sre.SemanticAttr.Type.IDENTIFIER || (t.type = sre.SemanticAttr.Type.NUMBER), sre.SemanticTree.numberRole_(t), sre.SemanticTree.exprFont_(t);
      break;
    case "MO":
      t = this.makeLeafNode_(e), t.type == sre.SemanticAttr.Type.UNKNOWN && (t.type = sre.SemanticAttr.Type.OPERATOR);
      break;
    case "MFENCED":
      t = this.processMfenced_(e, this.parseMathmlChildren_(sre.SemanticUtil.purgeNodes(r))), t = this.processTablesInRow_([t])[0];
      break;
    case "MENCLOSE":
      r = this.parseMathmlChildren_(sre.SemanticUtil.purgeNodes(r)), t = this.makeBranchNode_(sre.SemanticAttr.Type.ENCLOSE, [this.processRow_(r)], []), t.role = e.getAttribute("notation") || sre.SemanticAttr.Role.UNKNOWN;
      break;
    case "MMULTISCRIPTS":
      t = this.processMultiScript_(r);
      break;
    case "NONE":
      t = this.makeEmptyNode_();
      break;
    default:
      t = this.makeUnprocessed_(e)
    }
    return t.mathml.unshift(e), t.mathmlTree = e, t
  }, sre.SemanticTree.prototype.parseMathmlChildren_ = function (e) {
    for (var t, r = [], s = 0; t = e[s]; s++) r.push(this.parseMathml_(t));
    return r
  }, sre.SemanticTree.prototype.makeUnprocessed_ = function (e) {
    var t = this.createNode_();
    return t.mathml = [e], t
  }, sre.SemanticTree.prototype.makeEmptyNode_ = function () {
    var e = this.createNode_();
    return e.type = sre.SemanticAttr.Type.EMPTY, e
  }, sre.SemanticTree.prototype.makeContentNode_ = function (e) {
    var t = this.createNode_();
    return t.updateContent_(e), t
  }, sre.SemanticTree.prototype.makeMultipleContentNodes_ = function (e, t) {
    for (var r = [], s = 0; s < e; s++) r.push(this.makeContentNode_(t));
    return r
  }, sre.SemanticTree.prototype.makeLeafNode_ = function (e) {
    if (!e.textContent) return this.makeEmptyNode_();
    var t = this.makeContentNode_(e.textContent);
    return t.font = e.getAttribute("mathvariant") || t.font, t.bookmark = e.getAttribute("bookmark") || 0, t
  }, sre.SemanticTree.prototype.makeBranchNode_ = function (e, t, r, s) {
    var n = this.createNode_();
    return s && n.updateContent_(s), n.type = e, n.childNodes = t, n.contentNodes = r, n.contentNodes = r, t.concat(r)
      .forEach(function (e) {
        e.parent = n, n.addMathmlNodes_(e.mathml)
      }), n
  }, sre.SemanticTree.prototype.makeIdentifierNode_ = function (e) {
    var t = this.makeLeafNode_(e)
      , r = e.getAttribute("mathvariant");
    if ("MathML-Unit" === e.getAttribute("class")) t.type = sre.SemanticAttr.Type.IDENTIFIER, t.role = sre.SemanticAttr.Role.UNIT;
    else if (!r && 1 == t.textContent.length && (t.role == sre.SemanticAttr.Role.INTEGER || t.role == sre.SemanticAttr.Role.LATINLETTER || t.role == sre.SemanticAttr.Role.GREEKLETTER) && t.font == sre.SemanticAttr.Font.NORMAL) return t.font = sre.SemanticAttr.Font.ITALIC, t;
    return t.type == sre.SemanticAttr.Type.UNKNOWN && (t.type = sre.SemanticAttr.Type.IDENTIFIER), sre.SemanticTree.exprFont_(t), t
  }, sre.SemanticTree.prototype.makeImplicitNode_ = function (e) {
    if (e = this.getMixedNumbers_(e), e = this.combineUnits_(e), 1 == e.length) return e[0];
    var t = this.makeMultipleContentNodes_(e.length - 1, sre.SemanticAttr.invisibleTimes())
      , r = this.makeInfixNode_(e, t[0]);
    return r.role = sre.SemanticAttr.Role.IMPLICIT, t.forEach(function (e) {
      e.parent = r
    }), r.contentNodes = t, r
  }, sre.SemanticTree.prototype.makeInfixNode_ = function (e, t) {
    var r = this.makeBranchNode_(sre.SemanticAttr.Type.INFIXOP, e, [t], sre.SemanticTree.getEmbellishedInner_(t)
      .textContent);
    return r.bookmark = t.bookmark, r.role = t.role, r
  }, sre.SemanticTree.prototype.makeConcatNode_ = function (e, t, r) {
    if (0 == t.length) return e;
    var s = t.map(function (e) {
        return sre.SemanticTree.getEmbellishedInner_(e)
          .textContent
      })
      .join(" ");
    for (e = this.makeBranchNode_(r, [e], t, s), 1 < t.length && (e.role = sre.SemanticAttr.Role.MULTIOP), s = r = 0; s < t.length; s++)
      if (0 != t[s].bookmark) {
        r = t[s].bookmark;
        break
      }
    return e.bookmark = r, e
  }, sre.SemanticTree.prototype.makePrefixNode_ = function (e, t) {
    for (var r = sre.SemanticTree.partitionNodes_(t, sre.SemanticTree.attrPred_("role", "SUBTRACTION")), s = this.makeConcatNode_(e, r.comp.pop(), sre.SemanticAttr.Type.PREFIXOP); 0 < r.rel.length;) s = this.makeConcatNode_(s, [r.rel.pop()], sre.SemanticAttr.Type.PREFIXOP), s.role = sre.SemanticAttr.Role.NEGATIVE, s = this.makeConcatNode_(s, r.comp.pop(), sre.SemanticAttr.Type.PREFIXOP);
    return s
  }, sre.SemanticTree.prototype.makePostfixNode_ = function (e, t) {
    return t.length ? this.makeConcatNode_(e, t, sre.SemanticAttr.Type.POSTFIXOP) : e
  }, sre.SemanticTree.prototype.processRow_ = function (e) {
    return e = e.filter(function (e) {
      return !sre.SemanticTree.attrPred_("type", "EMPTY")(e)
    }), 0 == e.length ? this.makeEmptyNode_() : (e = this.getFencesInRow_(e), e = this.processTablesInRow_(e), e = this.getPunctuationInRow_(e), e = this.getTextInRow_(e), e = this.getFunctionsInRow_(e), this.processRelationsInRow_(e))
  }, sre.SemanticTree.prototype.combineUnits_ = function (e) {
    var t = sre.SemanticTree.partitionNodes_(e, function (e) {
      return !sre.SemanticTree.attrPred_("role", "UNIT")(e)
    });
    if (e.length === t.rel.length) return t.rel;
    e = [];
    do {
      var r = t.comp.shift()
        , s = t.rel.shift();
      if (1 == r.length && (e = e.concat(r)), 1 < r.length) {
        var n = this.makeContentNode_(sre.SemanticAttr.invisibleTimes())
          , r = this.makeInfixNode_(r, n);
        r.role = sre.SemanticAttr.Role.UNIT, e.push(r)
      }
      s && e.push(s)
    } while (s);
    return e
  }, sre.SemanticTree.prototype.getMixedNumbers_ = function (e) {
    var t = sre.SemanticTree.partitionNodes_(e, function (e) {
      return sre.SemanticTree.attrPred_("type", "FRACTION")(e) && sre.SemanticTree.attrPred_("role", "VULGAR")(e)
    });
    if (!t.rel.length) return e;
    e = [];
    for (var r, s = 0; r = t.rel[s]; s++) {
      var n = t.comp[s]
        , i = n.length - 1;
      n[i] && sre.SemanticTree.attrPred_("type", "NUMBER")(n[i]) && sre.SemanticTree.attrPred_("role", "INTEGER")(n[i]) ? (r = this.makeBranchNode_(sre.SemanticAttr.Type.NUMBER, [n[i], r], []), r.role = sre.SemanticAttr.Role.MIXED, e = e.concat(n.slice(0, i))) : e = e.concat(n), e.push(r)
    }
    return e.concat(t.comp[t.comp.length - 1])
  }, sre.SemanticTree.prototype.getTextInRow_ = function (e) {
    if (1 >= e.length) return e;
    var t = sre.SemanticTree.partitionNodes_(e, sre.SemanticTree.attrPred_("type", "TEXT"));
    if (0 == t.rel.length) return e;
    e = [];
    var r = t.comp[0];
    0 < r.length && e.push(this.processRow_(r));
    for (var s = 0; r = t.rel[s]; s++) e.push(r), r = t.comp[s + 1], 0 < r.length && e.push(this.processRow_(r));
    return [this.makeDummyNode_(e)]
  }, sre.SemanticTree.prototype.processRelationsInRow_ = function (e) {
    var t = sre.SemanticTree.partitionNodes_(e, sre.SemanticTree.isRelation_)
      , r = t.rel[0];
    return r ? 1 == e.length ? e[0] : (e = t.comp.map(goog.bind(this.processOperationsInRow_, this)), t.rel.some(function (e) {
      return !e.equals(r)
    }) ? this.makeBranchNode_(sre.SemanticAttr.Type.MULTIREL, e, t.rel) : (t = this.makeBranchNode_(sre.SemanticAttr.Type.RELSEQ, e, t.rel, sre.SemanticTree.getEmbellishedInner_(r)
      .textContent), t.role = r.role, t)) : this.processOperationsInRow_(e)
  }, sre.SemanticTree.prototype.processOperationsInRow_ = function (e) {
    if (0 == e.length) return this.makeEmptyNode_();
    if (1 == e.length) return e[0];
    for (var t = []; 0 < e.length && sre.SemanticTree.isOperator_(e[0]);) t.push(e.shift());
    return 0 == e.length ? this.makePrefixNode_(t.pop(), t) : 1 == e.length ? this.makePrefixNode_(e[0], t) : (e = sre.SemanticTree.sliceNodes_(e, sre.SemanticTree.isOperator_), t = this.makePrefixNode_(this.makeImplicitNode_(e.head), t), e.div ? this.makeOperationsTree_(e.tail, t, e.div) : t)
  }, sre.SemanticTree.prototype.makeOperationsTree_ = function (e, t, r, s) {
    return s = s || [], 0 == e.length ? (s.unshift(r), t.type == sre.SemanticAttr.Type.INFIXOP ? (s = this.makePostfixNode_(t.childNodes.pop(), s), t.appendChild_(s), t) : this.makePostfixNode_(t, s)) : (e = sre.SemanticTree.sliceNodes_(e, sre.SemanticTree.isOperator_), 0 == e.head.length ? (s.push(e.div), this.makeOperationsTree_(e.tail, t, r, s)) : (s = this.makePrefixNode_(this.makeImplicitNode_(e.head), s), t = this.appendOperand_(t, r, s), e.div ? this.makeOperationsTree_(e.tail, t, e.div, []) : t))
  }, sre.SemanticTree.prototype.appendOperand_ = function (e, t, r) {
    return e.type != sre.SemanticAttr.Type.INFIXOP ? this.makeInfixNode_([e, r], t) : this.appendExistingOperator_(e, t, r) ? e : t.role == sre.SemanticAttr.Role.MULTIPLICATION ? this.appendMultiplicativeOp_(e, t, r) : this.appendAdditiveOp_(e, t, r)
  }, sre.SemanticTree.prototype.appendMultiplicativeOp_ = function (e, t, r) {
    if (e.role == sre.SemanticAttr.Role.IMPLICIT) return this.makeInfixNode_([e, r], t);
    for (var s = e, n = e.childNodes[e.childNodes.length - 1]; n && n.type == sre.SemanticAttr.Type.INFIXOP;) s = n, n = s.childNodes[e.childNodes.length - 1];
    return t = this.makeInfixNode_([s.childNodes.pop(), r], t), s.appendChild_(t), e
  }, sre.SemanticTree.prototype.appendAdditiveOp_ = function (e, t, r) {
    return this.makeInfixNode_([e, r], t)
  }, sre.SemanticTree.prototype.appendExistingOperator_ = function (e, t, r) {
    return !(!e || e.type != sre.SemanticAttr.Type.INFIXOP || e.role === sre.SemanticAttr.Role.IMPLICIT) && (e.contentNodes[0].equals(t) ? (e.appendContentNode_(t), e.appendChild_(r), !0) : this.appendExistingOperator_(e.childNodes[e.childNodes.length - 1], t, r))
  }, sre.SemanticTree.prototype.getFencesInRow_ = function (e) {
    e = sre.SemanticTree.partitionNodes_(e, sre.SemanticTree.isFence_), e = sre.SemanticTree.purgeFences_(e);
    var t = e.comp.shift();
    return this.processFences_(e.rel, e.comp, [], [t])
  }, sre.SemanticTree.prototype.processFences_ = function (e, t, r, s) {
    if (0 == e.length && 0 == r.length) return s[0];
    var n = sre.SemanticTree.attrPred_("role", "OPEN");
    if (0 == e.length) {
      for (e = s.shift(); 0 < r.length;) {
        if (n(r[0])) t = r.shift(), sre.SemanticTree.fenceToPunct_(t), e.push(t);
        else {
          r = sre.SemanticTree.sliceNodes_(r, n);
          var i = r.head.length - 1
            , a = this.processNeutralFences_(r.head, s.slice(0, i));
          s = s.slice(i), e.push.apply(e, a), r.div && r.tail.unshift(r.div), r = r.tail
        }
        e.push.apply(e, s.shift())
      }
      return e
    }
    return i = r[r.length - 1], a = e[0].role, a != sre.SemanticAttr.Role.OPEN && (a != sre.SemanticAttr.Role.NEUTRAL || i && e[0].textContent == i.textContent) ? i && (a == sre.SemanticAttr.Role.CLOSE && i.role == sre.SemanticAttr.Role.OPEN || a == sre.SemanticAttr.Role.NEUTRAL && e[0].textContent == i.textContent) ? (n = this.makeHorizontalFencedNode_(r.pop(), e.shift(), s.pop()), s.push(s.pop()
      .concat([n], t.shift())), this.processFences_(e, t, r, s)) : i && a == sre.SemanticAttr.Role.CLOSE && i.role == sre.SemanticAttr.Role.NEUTRAL && r.some(n) ? (r = sre.SemanticTree.sliceNodes_(r, n, !0), n = s.pop(), i = s.length - r.tail.length + 1, a = this.processNeutralFences_(r.tail, s.slice(i)), s = s.slice(0, i), n = this.makeHorizontalFencedNode_(r.div, e.shift(), s.pop()
      .concat(a, n)), s.push(s.pop()
      .concat([n], t.shift())), this.processFences_(e, t, r.head, s)) : (n = e.shift(), sre.SemanticTree.fenceToPunct_(n), s.push(s.pop()
      .concat([n], t.shift())), this.processFences_(e, t, r, s)) : (r.push(e.shift()), (n = t.shift()) && s.push(n), this.processFences_(e, t, r, s))
  }, sre.SemanticTree.prototype.processNeutralFences_ = function (e, t) {
    if (0 == e.length) return e;
    if (1 == e.length) return sre.SemanticTree.fenceToPunct_(e[0]), e;
    var r = e.shift()
      , s = sre.SemanticTree.sliceNodes_(e, function (e) {
        return e.textContent == r.textContent
      });
    if (!s.div) {
      sre.SemanticTree.fenceToPunct_(r);
      var n = t.shift();
      return n.unshift(r), n.concat(this.processNeutralFences_(e, t))
    }
    var i = this.combineFencedContent_(r, s.div, s.head, t);
    return 0 < s.tail.length ? (n = i.shift(), s = this.processNeutralFences_(s.tail, i), n.concat(s)) : i[0]
  }, sre.SemanticTree.prototype.combineFencedContent_ = function (e, t, r, s) {
    if (0 == r.length) return e = this.makeHorizontalFencedNode_(e, t, s.shift()), s.unshift(e), s;
    var n = s.shift()
      , i = r.length - 1
      , a = s.slice(0, i);
    return s = s.slice(i), i = s.shift(), r = this.processNeutralFences_(r, a), n.push.apply(n, r), n.push.apply(n, i), e = this.makeHorizontalFencedNode_(e, t, n), 0 < s.length ? s[0].unshift(e) : s = [[e]], s
  }, sre.SemanticTree.fenceToPunct_ = function (e) {
    var t;
    switch (e.role) {
    case sre.SemanticAttr.Role.NEUTRAL:
      t = sre.SemanticAttr.Role.VBAR;
      break;
    case sre.SemanticAttr.Role.OPEN:
      t = sre.SemanticAttr.Role.OPENFENCE;
      break;
    case sre.SemanticAttr.Role.CLOSE:
      t = sre.SemanticAttr.Role.CLOSEFENCE;
      break;
    default:
      return
    }
    for (; e.embellished;) e.embellished = sre.SemanticAttr.Type.PUNCTUATION, e.role = t, e = e.childNodes[0];
    e.type = sre.SemanticAttr.Type.PUNCTUATION, e.role = t
  }, sre.SemanticTree.prototype.makeHorizontalFencedNode_ = function (e, t, r) {
    return r = this.processRow_(r), t = this.makeBranchNode_(sre.SemanticAttr.Type.FENCED, [r], [e, t]), t.role = e.role == sre.SemanticAttr.Role.OPEN ? sre.SemanticAttr.Role.LEFTRIGHT : e.role, sre.SemanticTree.rewriteFencedNode_(t)
  }, sre.SemanticTree.prototype.getPunctuationInRow_ = function (e) {
    var t = sre.SemanticTree.partitionNodes_(e, function (e) {
      return sre.SemanticTree.isPunctuation_(e) && !sre.SemanticTree.attrPred_("role", "ELLIPSIS")(e)
    });
    if (0 == t.rel.length) return e;
    e = [];
    var r = t.comp.shift();
    0 < r.length && e.push(this.processRow_(r));
    for (var s = 0; 0 < t.comp.length;) e.push(t.rel[s++]), r = t.comp.shift(), 0 < r.length && e.push(this.processRow_(r));
    return [this.makePunctuatedNode_(e, t.rel)]
  }, sre.SemanticTree.prototype.makePunctuatedNode_ = function (e, t) {
    var r = this.makeBranchNode_(sre.SemanticAttr.Type.PUNCTUATED, e, t);
    if (t.length == e.length) {
      var s = t[0].role;
      if (s != sre.SemanticAttr.Role.UNKNOWN && t.every(function (e) {
          return e.role == s
        })) return r.role = s, r
    }
    return 1 == t.length && e[0].type == sre.SemanticAttr.Type.PUNCTUATION ? r.role = sre.SemanticAttr.Role.STARTPUNCT : 1 == t.length && e[e.length - 1].type == sre.SemanticAttr.Type.PUNCTUATION ? r.role = sre.SemanticAttr.Role.ENDPUNCT : t.every(sre.SemanticTree.attrPred_("role", "DUMMY")) ? r.role = sre.SemanticAttr.Role.TEXT : r.role = sre.SemanticAttr.Role.SEQUENCE, r
  }, sre.SemanticTree.prototype.makeDummyNode_ = function (e) {
    var t = this.makeMultipleContentNodes_(e.length - 1, sre.SemanticAttr.invisibleComma());
    return t.forEach(function (e) {
      e.role = sre.SemanticAttr.Role.DUMMY
    }), this.makePunctuatedNode_(e, t)
  }, sre.SemanticTree.prototype.makeLimitNode_ = function (e, t) {
    var r = t[0]
      , s = sre.SemanticTree.attrPred_("type", "FUNCTION")(r)
      , s = sre.SemanticTree.attrPred_("type", "LARGEOP")(r) || sre.SemanticTree.attrPred_("type", "LIMBOTH")(r) || sre.SemanticTree.attrPred_("type", "LIMLOWER")(r) || sre.SemanticTree.attrPred_("type", "LIMUPPER")(r) || s && sre.SemanticTree.attrPred_("role", "LIMFUNC")(r)
      , n = sre.SemanticAttr.Type.UNKNOWN;
    if (s) switch (e) {
    case "MSUB":
    case "MUNDER":
      n = sre.SemanticAttr.Type.LIMLOWER;
      break;
    case "MSUP":
    case "MOVER":
      n = sre.SemanticAttr.Type.LIMUPPER;
      break;
    case "MSUBSUP":
    case "MUNDEROVER":
      n = sre.SemanticAttr.Type.LIMBOTH
    } else switch (e) {
    case "MSUB":
      n = sre.SemanticAttr.Type.SUBSCRIPT;
      break;
    case "MSUP":
      n = sre.SemanticAttr.Type.SUPERSCRIPT;
      break;
    case "MSUBSUP":
      var i = this.makeBranchNode_(sre.SemanticAttr.Type.SUBSCRIPT, [r, t[1]], []);
      i.role = sre.SemanticAttr.Role.SUBSUP, t = [i, t[2]], n = sre.SemanticAttr.Type.SUPERSCRIPT;
      break;
    case "MOVER":
      n = sre.SemanticAttr.Type.OVERSCORE, sre.SemanticTree.isAccent_(t[1]) && (t[1].role = sre.SemanticAttr.Role.OVERACCENT);
      break;
    case "MUNDER":
      n = sre.SemanticAttr.Type.UNDERSCORE, sre.SemanticTree.isAccent_(t[1]) && (t[1].role = sre.SemanticAttr.Role.UNDERACCENT);
      break;
    default:
      i = sre.SemanticTree.isAccent_(t[1]), s = sre.SemanticTree.isAccent_(t[2]), i && (t[1].role = sre.SemanticAttr.Role.UNDERACCENT), s && (t[2].role = sre.SemanticAttr.Role.OVERACCENT), s && !i ? (i = this.makeBranchNode_(sre.SemanticAttr.Type.OVERSCORE, [r, t[2]], []), i.role = r.role, t = [i, t[1]], n = sre.SemanticAttr.Type.UNDERSCORE) : (i = this.makeBranchNode_(sre.SemanticAttr.Type.UNDERSCORE, [r, t[1]], []), i.role = r.role, t = [i, t[2]], n = sre.SemanticAttr.Type.OVERSCORE)
    }
    return s = this.makeBranchNode_(n, t, []), n = sre.SemanticTree.isEmbellished_(r), i && (i.embellished = n), s.embellished = n, s.role = r.role, s
  }, sre.SemanticTree.isAccent_ = function (e) {
    return sre.SemanticTree.attrPred_("type", "FENCE")(e) || sre.SemanticTree.attrPred_("type", "PUNCTUATION")(e) || sre.SemanticTree.attrPred_("type", "OPERATOR")(e) || sre.SemanticTree.attrPred_("type", "RELATION")(e) || sre.SemanticTree.attrPred_("type", "IDENTIFIER")(e) && sre.SemanticTree.attrPred_("role", "UNKNOWN")(e) && !e.textContent.match(new RegExp(sre.SemanticAttr.getInstance()
      .allLetters.join("|")))
  }, sre.SemanticTree.prototype.getFunctionsInRow_ = function (e, t) {
    var r = t || [];
    if (0 == e.length) return r;
    var s = e.shift()
      , n = sre.SemanticTree.classifyFunction_(s, e);
    if (!n) return r.push(s), this.getFunctionsInRow_(e, r);
    var i = this.getFunctionsInRow_(e, [])
      , s = this.getFunctionArgs_(s, i, n);
    return r.concat(s)
  }, sre.SemanticTree.classifyFunction_ = function (e, t) {
    if (e.type == sre.SemanticAttr.Type.APPL || e.type == sre.SemanticAttr.Type.BIGOP || e.type == sre.SemanticAttr.Type.INTEGRAL) return "";
    if (t[0] && t[0].textContent == sre.SemanticAttr.functionApplication()) {
      t.shift();
      var r = sre.SemanticAttr.Role.SIMPLEFUNC;
      return e.role !== sre.SemanticAttr.Role.PREFIXFUNC && e.role !== sre.SemanticAttr.Role.LIMFUNC || (r = e.role), sre.SemanticTree.propagateFunctionRole_(e, r), "prefix"
    }
    switch (e.role) {
    case sre.SemanticAttr.Role.INTEGRAL:
      return "integral";
    case sre.SemanticAttr.Role.SUM:
      return "bigop";
    case sre.SemanticAttr.Role.PREFIXFUNC:
    case sre.SemanticAttr.Role.LIMFUNC:
      return "prefix";
    default:
      if (e.type == sre.SemanticAttr.Type.IDENTIFIER || e.role == sre.SemanticAttr.Role.LATINLETTER || e.role == sre.SemanticAttr.Role.GREEKLETTER || e.role == sre.SemanticAttr.Role.OTHERLETTER) return "simple"
    }
    return ""
  }, sre.SemanticTree.propagateFunctionRole_ = function (e, t) {
    e && (sre.SemanticTree.attrPred_("role", "SUBSUP")(e) || (e.role = t), sre.SemanticTree.propagateFunctionRole_(e.childNodes[0], t))
  }, sre.SemanticTree.prototype.getFunctionArgs_ = function (e, t, r) {
    switch (r) {
    case "integral":
      t = this.getIntegralArgs_(t);
      var s = this.processRow_(t.integrand);
      return e = this.makeIntegralNode_(e, s, t.intvar), t.rest.unshift(e), t.rest;
    case "prefix":
      if (t[0] && t[0].type == sre.SemanticAttr.Type.FENCED) return e = this.makeFunctionNode_(e, t.shift()), t.unshift(e), t;
    case "bigop":
      return s = sre.SemanticTree.sliceNodes_(t, sre.SemanticTree.prefixFunctionBoundary_), s.head.length ? (t = this.processRow_(s.head), e = "prefix" == r ? this.makeFunctionNode_(e, t) : this.makeBigOpNode_(e, t), s.div && s.tail.unshift(s.div), s.tail.unshift(e), s.tail) : (t.unshift(e), t);
    default:
      return 0 == t.length ? [e] : (s = t[0], s.type == sre.SemanticAttr.Type.FENCED && s.role != sre.SemanticAttr.Role.NEUTRAL && this.simpleFunctionHeuristic_(s) ? (sre.SemanticTree.propagateFunctionRole_(e, sre.SemanticAttr.Role.SIMPLEFUNC), e = this.makeFunctionNode_(e, t.shift()), t.unshift(e), t) : (t.unshift(e), t))
    }
  }, sre.SemanticTree.prototype.getIntegralArgs_ = function (e, t) {
    var r = t || [];
    if (0 == e.length) return {
      integrand: r
      , intvar: null
      , rest: e
    };
    var s = e[0];
    if (sre.SemanticTree.generalFunctionBoundary_(s)) return {
      integrand: r
      , intvar: null
      , rest: e
    };
    if (sre.SemanticTree.integralDxBoundarySingle_(s)) return {
      integrand: r
      , intvar: s
      , rest: e.slice(1)
    };
    if (e[1] && sre.SemanticTree.integralDxBoundary_(s, e[1])) {
      var n = this.makeContentNode_(sre.SemanticAttr.invisibleComma())
        , s = this.makePunctuatedNode_([s, n, e[1]], [n]);
      return s.role = sre.SemanticAttr.Role.INTEGRAL, {
        integrand: r
        , intvar: s
        , rest: e.slice(2)
      }
    }
    return r.push(e.shift()), this.getIntegralArgs_(e, r)
  }, sre.SemanticTree.prototype.makeFunctionNode_ = function (e, t) {
    var r = this.makeContentNode_(sre.SemanticAttr.functionApplication());
    r.type = sre.SemanticAttr.Type.PUNCTUATION, r.role = sre.SemanticAttr.Role.APPLICATION;
    var s = sre.SemanticTree.getFunctionOp_(e, function (e) {
      return sre.SemanticTree.attrPred_("type", "FUNCTION")(e) || sre.SemanticTree.attrPred_("type", "IDENTIFIER")(e) && sre.SemanticTree.attrPred_("role", "SIMPLEFUNC")(e)
    });
    return this.makeFunctionalNode_(sre.SemanticAttr.Type.APPL, [e, t], s, [r])
  }, sre.SemanticTree.prototype.makeBigOpNode_ = function (e, t) {
    var r = sre.SemanticTree.getFunctionOp_(e, sre.SemanticTree.attrPred_("type", "LARGEOP"));
    return this.makeFunctionalNode_(sre.SemanticAttr.Type.BIGOP, [e, t], r, [])
  }, sre.SemanticTree.prototype.makeIntegralNode_ = function (e, t, r) {
    t = t || this.makeEmptyNode_(), r = r || this.makeEmptyNode_();
    var s = sre.SemanticTree.getFunctionOp_(e, sre.SemanticTree.attrPred_("type", "LARGEOP"));
    return this.makeFunctionalNode_(sre.SemanticAttr.Type.INTEGRAL, [e, t, r], s, [])
  }, sre.SemanticTree.prototype.makeFunctionalNode_ = function (e, t, r, s) {
    var n = t[0];
    if (r) {
      var i = r.parent;
      s.push(r)
    }
    return e = this.makeBranchNode_(e, t, s), e.role = n.role, i && (r.parent = i), e
  }, sre.SemanticTree.getFunctionOp_ = function (e, t) {
    if (t(e)) return e;
    for (var r, s = 0; r = e.childNodes[s]; s++)
      if (r = sre.SemanticTree.getFunctionOp_(r, t)) return r;
    return null
  }, sre.SemanticTree.prototype.simpleFunctionHeuristic_ = function (e) {
    return e = e.childNodes, 0 == e.length || !(1 < e.length) && (e = e[0], e.type != sre.SemanticAttr.Type.INFIXOP || e.role == sre.SemanticAttr.Role.IMPLICIT && !e.childNodes.some(sre.SemanticTree.attrPred_("type", "INFIXOP")))
  }, sre.SemanticTree.prefixFunctionBoundary_ = function (e) {
    return sre.SemanticTree.isOperator_(e) || sre.SemanticTree.generalFunctionBoundary_(e)
  }, sre.SemanticTree.integralDxBoundary_ = function (e, t) {
    return !!t && sre.SemanticTree.attrPred_("type", "IDENTIFIER")(t) && sre.SemanticAttr.isCharacterD(e.textContent)
  }, sre.SemanticTree.integralDxBoundarySingle_ = function (e) {
    if (sre.SemanticTree.attrPred_("type", "IDENTIFIER")(e)) {
      var t = e.textContent[0];
      return t && e.textContent[1] && sre.SemanticAttr.isCharacterD(t)
    }
    return !1
  }, sre.SemanticTree.generalFunctionBoundary_ = function (e) {
    return sre.SemanticTree.isRelation_(e) || sre.SemanticTree.isPunctuation_(e)
  }, sre.SemanticTree.prototype.processTablesInRow_ = function (e) {
    e = sre.SemanticTree.partitionNodes_(e, sre.SemanticTree.tableIsMatrixOrVector_);
    for (var t, r = [], s = 0; t = e.rel[s]; s++) r = r.concat(e.comp.shift()), r.push(this.tableToMatrixOrVector_(t));
    for (r = r.concat(e.comp.shift()), e = sre.SemanticTree.partitionNodes_(r, sre.SemanticTree.isTableOrMultiline_), r = [], s = 0; t = e.rel[s]; s++) {
      var n = e.comp.shift();
      sre.SemanticTree.tableIsCases_(t, n) && this.tableToCases_(t, n.pop()), r = r.concat(n), r.push(t)
    }
    return r.concat(e.comp.shift())
  }, sre.SemanticTree.isTableOrMultiline_ = function (e) {
    return !!e && (sre.SemanticTree.attrPred_("type", "TABLE")(e) || sre.SemanticTree.attrPred_("type", "MULTILINE")(e))
  }, sre.SemanticTree.tableIsMatrixOrVector_ = function (e) {
    return !!e && sre.SemanticTree.attrPred_("type", "FENCED")(e) && (sre.SemanticTree.attrPred_("role", "LEFTRIGHT")(e) || sre.SemanticTree.attrPred_("role", "NEUTRAL")(e)) && 1 == e.childNodes.length && sre.SemanticTree.isTableOrMultiline_(e.childNodes[0])
  }, sre.SemanticTree.prototype.tableToMatrixOrVector_ = function (e) {
    var t = e.childNodes[0];
    sre.SemanticTree.attrPred_("type", "MULTILINE")(t) ? this.tableToVector_(e) : this.tableToMatrix_(e), e.contentNodes.forEach(goog.bind(t.appendContentNode_, t)), e = 0;
    for (var r; r = t.childNodes[e]; e++) sre.SemanticTree.assignRoleToRow_(r, sre.SemanticTree.getComponentRoles_(t));
    return t.parent = null, t
  }, sre.SemanticTree.prototype.tableToVector_ = function (e) {
    var t = e.childNodes[0];
    t.type = sre.SemanticAttr.Type.VECTOR, 1 === t.childNodes.length ? this.tableToSquare_(e) : 2 === t.childNodes.length && (t.role = sre.SemanticAttr.Role.BINOMIAL)
  }, sre.SemanticTree.prototype.tableToMatrix_ = function (e) {
    var t = e.childNodes[0];
    t.type = sre.SemanticAttr.Type.MATRIX, t.childNodes && 0 < t.childNodes.length && t.childNodes[0].childNodes && t.childNodes.length === t.childNodes[0].childNodes.length ? this.tableToSquare_(e) : t.childNodes && 1 === t.childNodes.length && (t.role = sre.SemanticAttr.Role.ROWVECTOR)
  }, sre.SemanticTree.prototype.tableToSquare_ = function (e) {
    var t = e.childNodes[0];
    sre.SemanticTree.attrPred_("role", "NEUTRAL")(e) ? t.role = sre.SemanticAttr.Role.DETERMINANT : t.role = sre.SemanticAttr.Role.SQUAREMATRIX
  }, sre.SemanticTree.getComponentRoles_ = function (e) {
    var t = e.role;
    return t && t !== sre.SemanticAttr.Role.UNKNOWN ? t : sre.SemanticAttr.Role[e.type.toUpperCase()] || sre.SemanticAttr.Role.UNKNOWN
  }, sre.SemanticTree.tableIsCases_ = function (e, t) {
    return 0 < t.length && sre.SemanticTree.attrPred_("role", "OPENFENCE")(t[t.length - 1])
  }, sre.SemanticTree.prototype.tableToCases_ = function (e, t) {
    for (var r, s = 0; r = e.childNodes[s]; s++) sre.SemanticTree.assignRoleToRow_(r, sre.SemanticAttr.Role.CASES);
    return e.type = sre.SemanticAttr.Type.CASES, e.appendContentNode_(t), e
  }, sre.SemanticTree.tableIsMultiline_ = function (e) {
    return e.childNodes.every(function (e) {
      return 1 >= e.childNodes.length
    })
  }, sre.SemanticTree.prototype.tableToMultiline_ = function (e) {
    e.type = sre.SemanticAttr.Type.MULTILINE;
    for (var t, r = 0; t = e.childNodes[r]; r++) sre.SemanticTree.rowToLine_(t, sre.SemanticAttr.Role.MULTILINE)
  }, sre.SemanticTree.rowToLine_ = function (e, t) {
    var r = t || sre.SemanticAttr.Role.UNKNOWN;
    sre.SemanticTree.attrPred_("type", "ROW")(e) && 1 == e.childNodes.length && sre.SemanticTree.attrPred_("type", "CELL")(e.childNodes[0]) && (e.type = sre.SemanticAttr.Type.LINE, e.role = r, e.childNodes = e.childNodes[0].childNodes)
  }, sre.SemanticTree.assignRoleToRow_ = function (e, t) {
    if (sre.SemanticTree.attrPred_("type", "LINE")(e)) e.role = t;
    else if (sre.SemanticTree.attrPred_("type", "ROW")(e)) {
      e.role = t;
      var r = sre.SemanticTree.attrPred_("type", "CELL");
      e.childNodes.forEach(function (e) {
        r(e) && (e.role = t)
      })
    }
  }, sre.SemanticTree.sliceNodes_ = function (e, t, r) {
    r && e.reverse();
    for (var s, n = [], i = 0; s = e[i]; i++) {
      if (t(s)) return r ? {
        head: e.slice(i + 1)
          .reverse()
        , div: s
        , tail: n.reverse()
      } : {
        head: n
        , div: s
        , tail: e.slice(i + 1)
      };
      n.push(s)
    }
    return r ? {
      head: []
      , div: null
      , tail: n.reverse()
    } : {
      head: n
      , div: null
      , tail: []
    }
  }, sre.SemanticTree.partitionNodes_ = function (e, t) {
    var r = e
      , s = []
      , n = [];
    do {
      var i = sre.SemanticTree.sliceNodes_(r, t);
      n.push(i.head), s.push(i.div), r = i.tail
    } while (i.div);
    return s.pop(), {
      rel: s
      , comp: n
    }
  }, sre.SemanticTree.attrPred_ = function (e, t) {
    return function (r) {
      r = r[e];
      var s;
      e: switch (e) {
      case "role":
        s = sre.SemanticAttr.Role[t];
        break e;
      case "font":
        s = sre.SemanticAttr.Font[t];
        break e;
      default:
        s = sre.SemanticAttr.Type[t]
      }
      return r == s
    }
  }, sre.SemanticTree.prototype.processMfenced_ = function (e, t) {
    var r = sre.SemanticTree.getAttribute_(e, "separators", ",")
      , s = sre.SemanticTree.getAttribute_(e, "open", "(")
      , n = sre.SemanticTree.getAttribute_(e, "close", ")");
    if (r && 0 < t.length) {
      var i = sre.MathUtil.nextSeparatorFunction(r)
        , a = [t.shift()];
      t.forEach(goog.bind(function (e) {
        a.push(this.makeContentNode_(i())), a.push(e)
      }, this)), t = a
    }
    return s && n ? this.makeHorizontalFencedNode_(this.makeContentNode_(s), this.makeContentNode_(n), t) : (s && t.unshift(this.makeContentNode_(s)), n && t.push(this.makeContentNode_(n)), this.processRow_(t))
  }, sre.SemanticTree.getAttribute_ = function (e, t, r) {
    return e.hasAttribute(t) ? (e = e.getAttribute(t), e.match(/^\s*$/) ? null : e) : r
  }, sre.SemanticTree.numberRole_ = function (e) {
    if (e.role === sre.SemanticAttr.Role.UNKNOWN) {
      var t = sre.SemanticUtil.splitUnicode(e.textContent)
        .map(sre.SemanticAttr.lookupMeaning);
      t.every(function (e) {
        return e.type == sre.SemanticAttr.Type.NUMBER && e.role == sre.SemanticAttr.Role.INTEGER || e.type == sre.SemanticAttr.Type.PUNCTUATION && e.role == sre.SemanticAttr.Role.COMMA
      }) ? e.role = sre.SemanticAttr.Role.INTEGER : t.every(function (e) {
        return e.type == sre.SemanticAttr.Type.NUMBER && e.role == sre.SemanticAttr.Role.INTEGER || e.type == sre.SemanticAttr.Type.PUNCTUATION
      }) ? e.role = sre.SemanticAttr.Role.FLOAT : e.role = sre.SemanticAttr.Role.OTHERNUMBER
    }
  }, sre.SemanticTree.exprFont_ = function (e) {
    if (e.font === sre.SemanticAttr.Font.UNKNOWN) {
      var t = sre.SemanticUtil.splitUnicode(e.textContent)
        .map(sre.SemanticAttr.lookupMeaning)
        .reduce(function (e, t) {
          return e && t.font && t.font != sre.SemanticAttr.Font.UNKNOWN && t.font != e ? e == sre.SemanticAttr.Font.UNKNOWN ? t.font : null : e
        }, sre.SemanticAttr.Font.UNKNOWN);
      t && (e.font = t)
    }
  }, sre.SemanticTree.prototype.makeFractionNode_ = function (e, t) {
    var r = this.makeBranchNode_(sre.SemanticAttr.Type.FRACTION, [e, t], []);
    return r.role = r.childNodes.every(function (e) {
      return sre.SemanticTree.attrPred_("role", "INTEGER")(e)
    }) ? sre.SemanticAttr.Role.VULGAR : r.childNodes.every(function (e) {
      return sre.SemanticTree.attrPred_("role", "UNIT")(e)
    }) ? sre.SemanticAttr.Role.UNIT : sre.SemanticAttr.Role.DIVISION, r
  }, sre.SemanticTree.prototype.processMultiScript_ = function (e) {
    if (!e.length) return this.makeEmptyNode_();
    var t = this.parseMathml_(e.shift());
    if (!e.length) return t;
    for (var r, s = [], n = [], i = [], a = [], l = !1, o = 0, c = 0; r = e[c]; c++) "MPRESCRIPTS" === sre.SemanticUtil.tagName(r) ? (l = !0, o = 0) : (l ? 1 & o ? s.push(r) : n.push(r) : 1 & o ? i.push(r) : a.push(r), o++);
    return sre.SemanticUtil.purgeNodes(s)
      .length || sre.SemanticUtil.purgeNodes(n)
      .length ? (i = this.makeBranchNode_(sre.SemanticAttr.Type.TENSOR, [t, this.makeScriptNode_(n, sre.SemanticAttr.Role.LEFTSUB), this.makeScriptNode_(s, sre.SemanticAttr.Role.LEFTSUPER), this.makeScriptNode_(a, sre.SemanticAttr.Role.RIGHTSUB), this.makeScriptNode_(i, sre.SemanticAttr.Role.RIGHTSUPER)], []), i.role = t.role, i.embellished = sre.SemanticTree.isEmbellished_(t), i) : (e = sre.SemanticUtil.purgeNodes(i), s = sre.SemanticUtil.purgeNodes(a), e.length || s.length ? (n = s.length ? e.length ? "MSUBSUP" : "MSUB" : "MSUP", t = [t], s.length && t.push(this.makeScriptNode_(a, sre.SemanticAttr.Role.RIGHTSUB, !0)), e.length && t.push(this.makeScriptNode_(i, sre.SemanticAttr.Role.RIGHTSUPER, !0)), this.makeLimitNode_(n, t)) : t)
  }, sre.SemanticTree.prototype.makeScriptNode_ = function (e, t, r) {
    switch (e.length) {
    case 0:
      e = this.makeEmptyNode_();
      break;
    case 1:
      if (e = this.parseMathml_(e[0]), r) return e;
      break;
    default:
      e = this.makeDummyNode_(this.parseMathmlChildren_(e))
    }
    return e.role = t, e
  }, sre.SemanticTree.isEmbellished_ = function (e) {
    return e.embellished ? e.embellished : sre.SemanticAttr.isEmbellishedType(e.type) ? e.type : null
  }, sre.SemanticTree.isOperator_ = function (e) {
    return sre.SemanticTree.attrPred_("type", "OPERATOR")(e) || sre.SemanticTree.attrPred_("embellished", "OPERATOR")(e)
  }, sre.SemanticTree.isRelation_ = function (e) {
    return sre.SemanticTree.attrPred_("type", "RELATION")(e) || sre.SemanticTree.attrPred_("embellished", "RELATION")(e)
  }, sre.SemanticTree.isPunctuation_ = function (e) {
    return sre.SemanticTree.attrPred_("type", "PUNCTUATION")(e) || sre.SemanticTree.attrPred_("embellished", "PUNCTUATION")(e)
  }, sre.SemanticTree.isFence_ = function (e) {
    return sre.SemanticTree.attrPred_("type", "FENCE")(e) || sre.SemanticTree.attrPred_("embellished", "FENCE")(e)
  }, sre.SemanticTree.getEmbellishedInner_ = function (e) {
    return e && e.embellished && 0 < e.childNodes.length ? sre.SemanticTree.getEmbellishedInner_(e.childNodes[0]) : e
  }, sre.SemanticTree.purgeFences_ = function (e) {
    var t = e.rel;
    e = e.comp;
    for (var r = [], s = []; 0 < t.length;) {
      var n = t.shift()
        , i = e.shift();
      sre.SemanticTree.isElligibleFence_(n) ? (r.push(n), s.push(i)) : (sre.SemanticTree.fenceToPunct_(n), i.push(n), i = i.concat(e.shift()), e.unshift(i))
    }
    return s.push(e.shift()), {
      rel: r
      , comp: s
    }
  }, sre.SemanticTree.isElligibleFence_ = function (e) {
    if (!e || !sre.SemanticTree.isFence_(e)) return !1;
    if (!e.embellished) return !0;
    var t = function (e) {
      return !e.embellished || !(!(!sre.SemanticTree.attrPred_("type", "TENSOR")(e) || sre.SemanticTree.attrPred_("type", "EMPTY")(e.childNodes[1]) && sre.SemanticTree.attrPred_("type", "EMPTY")(e.childNodes[2]) || sre.SemanticTree.attrPred_("type", "EMPTY")(e.childNodes[3]) && sre.SemanticTree.attrPred_("type", "EMPTY")(e.childNodes[4])) || sre.SemanticTree.attrPred_("role", "CLOSE")(e) && sre.SemanticTree.attrPred_("type", "TENSOR")(e) || sre.SemanticTree.attrPred_("role", "OPEN")(e) && (sre.SemanticTree.attrPred_("type", "SUBSCRIPT")(e) || sre.SemanticTree.attrPred_("type", "SUPERSCRIPT")(e))) && t(e.childNodes[0])
    };
    return t(e)
  }, sre.SemanticTree.rewriteFencedNode_ = function (e) {
    var t = e.contentNodes[1]
      , r = sre.SemanticTree.rewriteFence_(e, e.contentNodes[0]);
    return e.contentNodes[0] = r.fence, r = sre.SemanticTree.rewriteFence_(r.node, t), e.contentNodes[1] = r.fence, e.contentNodes[0].parent = e, e.contentNodes[1].parent = e, r.node.parent = null, r.node
  }, sre.SemanticTree.rewriteFence_ = function (e, t) {
    if (!t.embellished) return {
      node: e
      , fence: t
    };
    var r = t.childNodes[0]
      , s = sre.SemanticTree.rewriteFence_(e, r);
    return sre.SemanticTree.attrPred_("type", "SUPERSCRIPT")(t) || sre.SemanticTree.attrPred_("type", "SUBSCRIPT")(t) || sre.SemanticTree.attrPred_("type", "TENSOR")(t) ? (sre.SemanticTree.attrPred_("role", "SUBSUP")(t) || (t.role = e.role), r !== s.node && (t.replaceChild_(r, s.node), r.parent = e), sre.SemanticTree.propagateFencePointer_(t, r), {
      node: t
      , fence: s.fence
    }) : (t.replaceChild_(r, s.fence), t.mathmlTree && -1 === t.mathml.indexOf(t.mathmlTree) && t.mathml.push(t.mathmlTree), {
      node: s.node
      , fence: t
    })
  }, sre.SemanticTree.propagateFencePointer_ = function (e, t) {
    e.fencePointer = t.fencePointer || t.id.toString(), e.embellished = null
  }, sre.SemanticTree.prototype.displayTree = function () {
    this.root.displayTree(0)
  }, sre.SemanticTree.Node.prototype.displayTree = function (e) {
    e++;
    var t = Array(e)
      .join("  ");
    console.log(t + this.toString()), console.log(t + "MathmlTree:"), console.log(t + this.mathmlTreeString_()), console.log(t + "MathML:");
    for (var r, s = 0; r = this.mathml[s]; s++) console.log(t + r.toString());
    console.log(t + "Begin Content"), this.contentNodes.forEach(function (t) {
      t.displayTree(e)
    }), console.log(t + "End Content"), console.log(t + "Begin Children"), this.childNodes.forEach(function (t) {
      t.displayTree(e)
    }), console.log(t + "End Children")
  }, sre.SemanticTree.Node.prototype.mathmlTreeString_ = function () {
    return this.mathmlTree ? this.mathmlTree.toString() : "EMPTY"
  }, sre.Semantic = {}, sre.Semantic.Font = sre.SemanticAttr.Font, sre.Semantic.Role = sre.SemanticAttr.Role, sre.Semantic.Type = sre.SemanticAttr.Type, sre.Semantic.getTree = function (e) {
    return new sre.SemanticTree(e)
      .xml()
  }, sre.Semantic.getTreeFromString = function (e) {
    return e = sre.DomUtil.parseInput(e), new sre.SemanticTree(e)
  }, sre.MathspeakUtil = {}, sre.MathspeakUtil.spaceoutText = function (e) {
    return e.textContent.split("")
      .join(" ")
  }, sre.MathspeakUtil.spaceoutNumber = function (e) {
    e = e.textContent.split("");
    for (var t, r = [], s = new sre.SystemExternal.xmldom.DOMParser, n = 0; t = e[n]; n++) {
      var i = sre.Semantic.Type.NUMBER
        , a = t.match(/\W/) ? sre.Semantic.Role.UNKNOWN : sre.Semantic.Role.PROTECTED;
      t = s.parseFromString("<" + i + ' role="' + a + '">' + t + "</" + i + ">", "text/xml"), r.push(t.documentElement)
    }
    return r
  }, sre.MathspeakUtil.spaceoutIdentifier = function (e) {
    var t = e.textContent;
    if (!t.match(/[a-zA-Z]+/)) return e.setAttribute("role", sre.SemanticAttr.Role.PROTECTED), [e];
    e = t.split("");
    for (var r, t = [], s = new sre.SystemExternal.xmldom.DOMParser, n = 0; r = e[n]; n++) {
      var i = sre.Semantic.Type.IDENTIFIER;
      r = s.parseFromString("<" + i + ' role="' + sre.Semantic.Role.UNKNOWN + '">' + r + "</" + i + ">", "text/xml"), t.push(r.documentElement)
    }
    return t
  }, sre.MathspeakUtil.nestingBarriers = [sre.Semantic.Type.CASES, sre.Semantic.Type.CELL, sre.Semantic.Type.INTEGRAL, sre.Semantic.Type.LINE, sre.Semantic.Type.MATRIX, sre.Semantic.Type.MULTILINE, sre.Semantic.Type.OVERSCORE, sre.Semantic.Type.ROOT, sre.Semantic.Type.ROW, sre.Semantic.Type.SQRT, sre.Semantic.Type.SUBSCRIPT, sre.Semantic.Type.SUPERSCRIPT, sre.Semantic.Type.TABLE, sre.Semantic.Type.UNDERSCORE, sre.Semantic.Type.VECTOR], sre.MathspeakUtil.nestingDepth = {}, sre.MathspeakUtil.getNestingDepth = function (e, t, r, s, n, i) {
    return s = s || sre.MathspeakUtil.nestingBarriers, n = n || {}, i = i || function (e) {
      return !1
    }, sre.MathspeakUtil.nestingDepth[e] || (sre.MathspeakUtil.nestingDepth[e] = {}), sre.MathspeakUtil.nestingDepth[e][t.toString()] ? sre.MathspeakUtil.nestingDepth[e][t.toString()] : i(t) || 0 > r.indexOf(t.tagName) ? 0 : (r = sre.MathspeakUtil.computeNestingDepth_(t, r, sre.MathUtil.setdifference(s, r), n, i, 0), sre.MathspeakUtil.nestingDepth[e][t.toString()] = r)
  }, sre.MathspeakUtil.containsAttr = function (e, t) {
    if (!e.attributes) return !1;
    for (var r, s = sre.DomUtil.toArray(e.attributes), n = 0; r = s[n]; n++)
      if (t[r.nodeName] === r.nodeValue) return !0;
    return !1
  }, sre.MathspeakUtil.computeNestingDepth_ = function (e, t, r, s, n, i) {
    return n(e) || -1 < r.indexOf(e.tagName) || sre.MathspeakUtil.containsAttr(e, s) ? i : (-1 < t.indexOf(e.tagName) && i++, e.childNodes && 0 !== e.childNodes.length ? (e = sre.DomUtil.toArray(e.childNodes), Math.max.apply(null, e.map(function (e) {
      return sre.MathspeakUtil.computeNestingDepth_(e, t, r, s, n, i)
    }))) : i)
  }, sre.MathspeakUtil.fractionNestingDepth = function (e) {
    return sre.MathspeakUtil.getNestingDepth("fraction", e, ["fraction"], sre.MathspeakUtil.nestingBarriers, {}, function (e) {
      return sre.MathspeakUtil.vulgarFractionSmall(e)
    })
  }, sre.MathspeakUtil.openingFractionVerbose = function (e) {
    return e = sre.MathspeakUtil.fractionNestingDepth(e), Array(e + 1)
      .join("Start") + "Fraction"
  }, sre.MathspeakUtil.closingFractionVerbose = function (e) {
    return e = sre.MathspeakUtil.fractionNestingDepth(e), Array(e + 1)
      .join("End") + "Fraction"
  }, sre.MathspeakUtil.overFractionVerbose = function (e) {
    return e = sre.MathspeakUtil.fractionNestingDepth(e), Array(e + 1)
      .join("Over")
  }, sre.MathspeakUtil.openingFractionBrief = function (e) {
    return e = sre.MathspeakUtil.fractionNestingDepth(e), Array(e + 1)
      .join("Start") + "Frac"
  }, sre.MathspeakUtil.closingFractionBrief = function (e) {
    return e = sre.MathspeakUtil.fractionNestingDepth(e), Array(e + 1)
      .join("End") + "Frac"
  }, sre.MathspeakUtil.nestingToString = function (e) {
    switch (e) {
    case 1:
      return "";
    case 2:
      return "Twice";
    default:
      return e.toString()
    }
  }, sre.MathspeakUtil.openingFractionSbrief = function (e) {
    return e = sre.MathspeakUtil.fractionNestingDepth(e), 1 === e ? "Frac" : "Nest" + sre.MathspeakUtil.nestingToString(e - 1) + "Frac"
  }, sre.MathspeakUtil.closingFractionSbrief = function (e) {
    return e = sre.MathspeakUtil.fractionNestingDepth(e), 1 === e ? "EndFrac" : "Nest" + sre.MathspeakUtil.nestingToString(e - 1) + "EndFrac"
  }, sre.MathspeakUtil.overFractionSbrief = function (e) {
    return e = sre.MathspeakUtil.fractionNestingDepth(e), 1 === e ? "Over" : "Nest" + sre.MathspeakUtil.nestingToString(e - 1) + "Over"
  }, sre.MathspeakUtil.onesNumbers = " one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "), sre.MathspeakUtil.tensNumbers = "  twenty thirty forty fifty sixty seventy eighty ninety".split(" "), sre.MathspeakUtil.largeNumbers = " thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion decillion".split(" "), sre.MathspeakUtil.hundredsToWords = function (e) {
    e %= 1e3;
    var t;
    return t = "" + (sre.MathspeakUtil.onesNumbers[Math.floor(e / 100)] ? sre.MathspeakUtil.onesNumbers[Math.floor(e / 100)] + "-hundred" : ""), (e %= 100) && (t = t + (t ? "-" : "") + (sre.MathspeakUtil.onesNumbers[e] || sre.MathspeakUtil.tensNumbers[Math.floor(e / 10)] + "-" + sre.MathspeakUtil.onesNumbers[e % 10])), t
  }, sre.MathspeakUtil.numberToWords = function (e) {
    if (e >= Math.pow(10, 36)) return e.toString();
    for (var t = 0, r = ""; 0 < e;) e % 1e3 && (r = sre.MathspeakUtil.hundredsToWords(e % 1e3) + (t ? "-" + sre.MathspeakUtil.largeNumbers[t] + "-" : "") + r), e = Math.floor(e / 1e3), t++;
    return r
  }, sre.MathspeakUtil.numberToOrdinal = function (e, t) {
    if (2 === e) return t ? "halves" : "half";
    var r = sre.MathspeakUtil.numberToWords(e)
      , r = r.match(/one$/) ? r.slice(0, -3) + "first" : r.match(/two$/) ? r.slice(0, -3) + "second" : r.match(/three$/) ? r.slice(0, -5) + "third" : r.match(/five$/) ? r.slice(0, -4) + "fifth" : r.match(/eight$/) ? r.slice(0, -5) + "eighth" : r.match(/nine$/) ? r.slice(0, -4) + "ninth" : r.match(/twelve$/) ? r.slice(0, -5) + "twelfth" : r.match(/ty$/) ? r.slice(0, -2) + "tieth" : r + "th";
    return t ? r + "s" : r
  }, sre.MathspeakUtil.simpleOrdinal_ = function (e) {
    var t = e % 100
      , r = e.toString();
    if (10 < t && 20 > t) return r + "th";
    switch (e % 10) {
    case 1:
      return r + "st";
    case 2:
      return r + "nd";
    case 3:
      return r + "rd";
    default:
      return r + "th"
    }
  }, sre.MathspeakUtil.ordinalCounter = function (e, t) {
    var r = 0;
    return function () {
      return sre.MathspeakUtil.simpleOrdinal_(++r) + " " + t
    }
  }, sre.MathspeakUtil.convertVulgarFraction_ = function (e) {
    if (!e.childNodes || !e.childNodes[0] || !e.childNodes[0].childNodes || 2 > e.childNodes[0].childNodes.length || e.childNodes[0].childNodes[0].tagName !== sre.SemanticAttr.Type.NUMBER || e.childNodes[0].childNodes[0].getAttribute("role") !== sre.SemanticAttr.Role.INTEGER || e.childNodes[0].childNodes[1].tagName !== sre.SemanticAttr.Type.NUMBER || e.childNodes[0].childNodes[1].getAttribute("role") !== sre.SemanticAttr.Role.INTEGER) return {
      convertible: !1
      , content: e.textContent
    };
    var t = e.childNodes[0].childNodes[1].textContent;
    e = e.childNodes[0].childNodes[0].textContent;
    var r = Number(t)
      , s = Number(e);
    return isNaN(r) || isNaN(s) ? {
      convertible: !1
      , content: e + " Over " + t
    } : {
      convertible: !0
      , enumerator: s
      , denominator: r
    }
  }, sre.MathspeakUtil.vulgarFraction = function (e) {
    return e = sre.MathspeakUtil.convertVulgarFraction_(e), e.convertible && e.enumerator && e.denominator ? sre.MathspeakUtil.numberToWords(e.enumerator) + "-" + sre.MathspeakUtil.numberToOrdinal(e.denominator, 1 !== e.enumerator) : e.content || ""
  }, sre.MathspeakUtil.vulgarFractionSmall = function (e) {
    var t = sre.MathspeakUtil.convertVulgarFraction_(e);
    return !!t.convertible && (e = t.enumerator, t = t.denominator, 0 < e && 10 > e && 0 < t && 100 > t)
  }, sre.MathspeakUtil.isSmallVulgarFraction = function (e) {
    return sre.MathspeakUtil.vulgarFractionSmall(e) ? [e] : []
  }, sre.MathspeakUtil.nestedSubSuper = function (e, t, r) {
    for (; e.parentNode;) {
      var s = e.parentNode
        , n = s.parentNode
        , i = e.getAttribute && e.getAttribute("role");
      (n.tagName === sre.Semantic.Type.SUBSCRIPT && e === s.childNodes[1] || n.tagName === sre.Semantic.Type.TENSOR && i && (i === sre.Semantic.Role.LEFTSUB || i === sre.Semantic.Role.RIGHTSUB)) && (t = r.sub + " " + t), (n.tagName === sre.Semantic.Type.SUPERSCRIPT && e === s.childNodes[1] || n.tagName === sre.Semantic.Type.TENSOR && i && (i === sre.Semantic.Role.LEFTSUPER || i === sre.Semantic.Role.RIGHTSUPER)) && (t = r.sup + " " + t), e = n
    }
    return t.trim()
  }, sre.MathspeakUtil.subscriptVerbose = function (e) {
    return sre.MathspeakUtil.nestedSubSuper(e, "Subscript", {
      sup: "Super"
      , sub: "Sub"
    })
  }, sre.MathspeakUtil.subscriptBrief = function (e) {
    return sre.MathspeakUtil.nestedSubSuper(e, "Sub", {
      sup: "Sup"
      , sub: "Sub"
    })
  }, sre.MathspeakUtil.superscriptVerbose = function (e) {
    return sre.MathspeakUtil.nestedSubSuper(e, "Superscript", {
      sup: "Super"
      , sub: "Sub"
    })
  }, sre.MathspeakUtil.superscriptBrief = function (e) {
    return sre.MathspeakUtil.nestedSubSuper(e, "Sup", {
      sup: "Sup"
      , sub: "Sub"
    })
  }, sre.MathspeakUtil.baselineVerbose = function (e) {
    return (e = sre.MathspeakUtil.nestedSubSuper(e, "", {
        sup: "Super"
        , sub: "Sub"
      })) ? e.replace(/Sub$/, "Subscript")
      .replace(/Super$/, "Superscript") : "Baseline"
  }, sre.MathspeakUtil.baselineBrief = function (e) {
    return sre.MathspeakUtil.nestedSubSuper(e, "", {
      sup: "Sup"
      , sub: "Sub"
    }) || "Base"
  }, sre.MathspeakUtil.radicalNestingDepth = function (e) {
    return sre.MathspeakUtil.getNestingDepth("radical", e, ["sqrt", "root"], sre.MathspeakUtil.nestingBarriers, {})
  }, sre.MathspeakUtil.nestedRadical = function (e, t, r) {
    return e = sre.MathspeakUtil.radicalNestingDepth(e), 1 === e ? r : t + sre.MathspeakUtil.nestingToString(e - 1) + r
  }, sre.MathspeakUtil.openingRadicalVerbose = function (e) {
    return sre.MathspeakUtil.nestedRadical(e, "Nested", "StartRoot")
  }, sre.MathspeakUtil.closingRadicalVerbose = function (e) {
    return sre.MathspeakUtil.nestedRadical(e, "Nested", "EndRoot")
  }, sre.MathspeakUtil.indexRadicalVerbose = function (e) {
    return sre.MathspeakUtil.nestedRadical(e, "Nested", "RootIndex")
  }, sre.MathspeakUtil.openingRadicalBrief = function (e) {
    return sre.MathspeakUtil.nestedRadical(e, "Nest", "StartRoot")
  }, sre.MathspeakUtil.closingRadicalBrief = function (e) {
    return sre.MathspeakUtil.nestedRadical(e, "Nest", "EndRoot")
  }, sre.MathspeakUtil.indexRadicalBrief = function (e) {
    return sre.MathspeakUtil.nestedRadical(e, "Nest", "RootIndex")
  }, sre.MathspeakUtil.openingRadicalSbrief = function (e) {
    return sre.MathspeakUtil.nestedRadical(e, "Nest", "Root")
  }, sre.MathspeakUtil.indexRadicalSbrief = function (e) {
    return sre.MathspeakUtil.nestedRadical(e, "Nest", "Index")
  }, sre.MathspeakUtil.underscoreNestingDepth = function (e) {
    return sre.MathspeakUtil.getNestingDepth("underscore", e, ["underscore"], sre.MathspeakUtil.nestingBarriers, {}, function (e) {
      return e.tagName && e.tagName === sre.Semantic.Type.UNDERSCORE && e.childNodes[0].childNodes[1].getAttribute("role") === sre.Semantic.Role.UNDERACCENT
    })
  }, sre.MathspeakUtil.nestedUnderscore = function (e) {
    return e = sre.MathspeakUtil.underscoreNestingDepth(e), Array(e)
      .join("Under") + "Underscript"
  }, sre.MathspeakUtil.overscoreNestingDepth = function (e) {
    return sre.MathspeakUtil.getNestingDepth("overscore", e, ["overscore"], sre.MathspeakUtil.nestingBarriers, {}, function (e) {
      return e.tagName && e.tagName === sre.Semantic.Type.OVERSCORE && e.childNodes[0].childNodes[1].getAttribute("role") === sre.Semantic.Role.OVERACCENT
    })
  }, sre.MathspeakUtil.nestedOverscore = function (e) {
    return e = sre.MathspeakUtil.overscoreNestingDepth(e), Array(e)
      .join("Over") + "Overscript"
  }, sre.MathspeakUtil.determinantIsSimple = function (e) {
    if (e.tagName !== sre.Semantic.Type.MATRIX || e.getAttribute("role") !== sre.Semantic.Role.DETERMINANT) return [];
    for (var t, r = sre.XpathUtil.evalXPath("children/row/children/cell/children/*", e), s = 0; t = r[s]; s++)
      if (t.tagName !== sre.Semantic.Type.NUMBER) {
        if (t.tagName === sre.Semantic.Type.IDENTIFIER && (t = t.getAttribute("role"), t === sre.Semantic.Role.LATINLETTER || t === sre.Semantic.Role.GREEKLETTER || t === sre.Semantic.Role.OTHERLETTER)) continue;
        return []
      }
    return [e]
  }, sre.MathspeakUtil.determinantMarkSimple = function (e) {
    return sre.XpathUtil.evalXPath("children/row", e)
      .forEach(function (e) {
        e.setAttribute("sre_flag", "simple")
      }), ""
  }, sre.MathspeakUtil.determinantUnMarkSimple = function (e) {
    return sre.XpathUtil.evalXPath("children/row", e)
      .forEach(function (e) {
        e.removeAttribute("sre_flag")
      }), ""
  }, sre.MathspeakUtil.generateBaselineConstraint = function () {
    for (var e, t = function (e) {
        return e.map(function (e) {
          return "ancestor::" + e
        })
      }, r = function (e) {
        return "not(" + e + ")"
      }, s = r(t(["subscript", "superscript", "tensor"])
        .join(" or ")), n = t(["relseq", "multrel"]), t = t(["fraction", "punctuation", "fenced", "sqrt", "root"]), i = [], a = 0; e = t[a]; a++) i = i.concat(n.map(function (t) {
      return e + "/" + t
    }));
    return r = r(i.join(" | ")), ["ancestor::*/following-sibling::*", s, r].join(" and ")
  }, sre.MathspeakRules = function () {
    sre.MathspeakRules.initCustomFunctions_(), sre.MathspeakRules.initMathspeakRules_(), sre.MathspeakRules.generateMathspeakTensorRules_()
  }, goog.addSingletonGetter(sre.MathspeakRules), sre.MathspeakRules.mathStore = sre.MathmlStore.getInstance(), sre.MathspeakRules.defineRule_ = goog.bind(sre.MathspeakRules.mathStore.defineRule, sre.MathspeakRules.mathStore), sre.MathspeakRules.defineRuleAlias_ = goog.bind(sre.MathspeakRules.mathStore.defineRulesAlias, sre.MathspeakRules.mathStore), sre.MathspeakRules.defineSpecialisedRule_ = goog.bind(sre.MathspeakRules.mathStore.defineSpecialisedRule, sre.MathspeakRules.mathStore), sre.MathspeakRules.addContextFunction_ = goog.bind(sre.MathspeakRules.mathStore.contextFunctions.add, sre.MathspeakRules.mathStore.contextFunctions), sre.MathspeakRules.addCustomQuery_ = goog.bind(sre.MathspeakRules.mathStore.customQueries.add, sre.MathspeakRules.mathStore.customQueries), sre.MathspeakRules.addCustomString_ = goog.bind(sre.MathspeakRules.mathStore.customStrings.add, sre.MathspeakRules.mathStore.customStrings), sre.MathspeakRules.initCustomFunctions_ = function () {
    (0, sre.MathspeakRules.addCustomQuery_)("CQFspaceoutNumber", sre.MathspeakUtil.spaceoutNumber), (0, sre.MathspeakRules.addCustomQuery_)("CQFspaceoutIdentifier", sre.MathspeakUtil.spaceoutIdentifier), (0, sre.MathspeakRules.addCustomString_)("CSFspaceoutText", sre.MathspeakUtil.spaceoutText), (0, sre.MathspeakRules.addCustomString_)("CSFopenFracVerbose", sre.MathspeakUtil.openingFractionVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFcloseFracVerbose", sre.MathspeakUtil.closingFractionVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFoverFracVerbose", sre.MathspeakUtil.overFractionVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFopenFracBrief", sre.MathspeakUtil.openingFractionBrief), (0, sre.MathspeakRules.addCustomString_)("CSFcloseFracBrief", sre.MathspeakUtil.closingFractionBrief), (0, sre.MathspeakRules.addCustomString_)("CSFopenFracSbrief", sre.MathspeakUtil.openingFractionSbrief), (0, sre.MathspeakRules.addCustomString_)("CSFcloseFracSbrief", sre.MathspeakUtil.closingFractionSbrief), (0, sre.MathspeakRules.addCustomString_)("CSFoverFracSbrief", sre.MathspeakUtil.overFractionSbrief), (0, sre.MathspeakRules.addCustomString_)("CSFvulgarFraction", sre.MathspeakUtil.vulgarFraction), (0, sre.MathspeakRules.addCustomQuery_)("CQFvulgarFractionSmall", sre.MathspeakUtil.isSmallVulgarFraction), (0, sre.MathspeakRules.addCustomString_)("CSFopenRadicalVerbose", sre.MathspeakUtil.openingRadicalVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFcloseRadicalVerbose", sre.MathspeakUtil.closingRadicalVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFindexRadicalVerbose", sre.MathspeakUtil.indexRadicalVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFopenRadicalBrief", sre.MathspeakUtil.openingRadicalBrief), (0, sre.MathspeakRules.addCustomString_)("CSFcloseRadicalBrief", sre.MathspeakUtil.closingRadicalBrief), (0, sre.MathspeakRules.addCustomString_)("CSFindexRadicalBrief", sre.MathspeakUtil.indexRadicalBrief), (0, sre.MathspeakRules.addCustomString_)("CSFopenRadicalSbrief", sre.MathspeakUtil.openingRadicalSbrief), (0, sre.MathspeakRules.addCustomString_)("CSFindexRadicalSbrief", sre.MathspeakUtil.indexRadicalSbrief), (0, sre.MathspeakRules.addCustomString_)("CSFsuperscriptVerbose", sre.MathspeakUtil.superscriptVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFsuperscriptBrief", sre.MathspeakUtil.superscriptBrief), (0, sre.MathspeakRules.addCustomString_)("CSFsubscriptVerbose", sre.MathspeakUtil.subscriptVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFsubscriptBrief", sre.MathspeakUtil.subscriptBrief), (0, sre.MathspeakRules.addCustomString_)("CSFbaselineVerbose", sre.MathspeakUtil.baselineVerbose), (0, sre.MathspeakRules.addCustomString_)("CSFbaselineBrief", sre.MathspeakUtil.baselineBrief), (0, sre.MathspeakRules.addCustomString_)("CSFunderscript", sre.MathspeakUtil.nestedUnderscore), (0, sre.MathspeakRules.addCustomString_)("CSFoverscript", sre.MathspeakUtil.nestedOverscore), (0, sre.MathspeakRules.addCustomQuery_)("CQFhideFont", sre.MathmlStoreUtil.hideFont), (0, sre.MathspeakRules.addCustomString_)("CSFshowFont", sre.MathmlStoreUtil.showFont), (0, sre.MathspeakRules.addContextFunction_)("CTXFordinalCounter", sre.MathspeakUtil.ordinalCounter), (0, sre.MathspeakRules.addCustomQuery_)("CQFdetIsSimple", sre.MathspeakUtil.determinantIsSimple), (0, sre.MathspeakRules.addCustomString_)("CSFdetMarkSimple", sre.MathspeakUtil.determinantMarkSimple), (0, sre.MathspeakRules.addCustomString_)("CSFdetUnMarkSimple", sre.MathspeakUtil.determinantUnMarkSimple)
  }, sre.MathspeakRules.initMathspeakRules_ = function () {
    (0, sre.MathspeakRules.defineRule_)("unknown", "mathspeak.default", "[n] text()", "self::unknown"), (0, sre.MathspeakRules.defineRule_)("protected", "mathspeak.default", "[t] text()", "self::*", '@role="protected"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("font", "default.default", "mathspeak.default"), (0, sre.MathspeakRules.defineSpecialisedRule_)("font-identifier", "default.default", "mathspeak.default"), (0, sre.MathspeakRules.defineSpecialisedRule_)("font-identifier-short", "default.default", "mathspeak.default"), (0, sre.MathspeakRules.defineSpecialisedRule_)("omit-font", "default.default", "mathspeak.default"), (0, sre.MathspeakRules.defineRule_)("german-font", "mathspeak.default", '[t] "German"; [n] CQFhideFont; [t] CSFshowFont', "self::*", "@font", '@font="fraktur"'), (0, sre.MathspeakRules.defineRule_)("german-font", "mathspeak.default", '[t] "bold German"; [n] CQFhideFont; [t] CSFshowFont', "self::*", "@font", '@font="bold-fraktur"'), (0, sre.MathspeakRules.defineRule_)("number", "mathspeak.default", "[n] text()", "self::number"), (0, sre.MathspeakRules.defineRule_)("mixed-number", "mathspeak.default", '[n] children/*[1]; [t] "and"; [n] children/*[2]; ', "self::number", '@role="mixed"'), (0, sre.MathspeakRules.defineRule_)("number-with-chars", "mathspeak.default", '[t] "Number"; [m] CQFspaceoutNumber', "self::number", '"" != translate(text(), "0123456789.,", "")', 'text() != translate(text(), "0123456789.,", "")'), (0, sre.MathspeakRules.defineSpecialisedRule_)("number-with-chars", "mathspeak.default", "mathspeak.brief", '[t] "Num"; [m] CQFspaceoutNumber'), (0, sre.MathspeakRules.defineSpecialisedRule_)("number-with-chars", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("number-as-upper-word", "mathspeak.default", '[t] "UpperWord"; [t] CSFspaceoutText', "self::number", "string-length(text())>1", 'text()=translate(text(), "abcdefghijklmnopqrstuvwxyzαβγδεζηθικλμνξοπρςστυφχψω", "ABCDEFGHIJKLMNOPQRSTUVWXYZΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΣΤΥΦΧΨΩ")', '""=translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΣΤΥΦΧΨΩ","")'), (0, sre.MathspeakRules.defineRule_)("number-baseline", "mathspeak.default", '[t] "Baseline"; [n] text()', "self::number", "not(@hiddenfont)", "preceding-sibling::identifier", 'preceding-sibling::*[1][@role="latinletter" or @role="greekletter" or @role="otherletter"]', 'parent::*/parent::infixop[@role="implicit"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("number-baseline", "mathspeak.default", "mathspeak.brief", '[t] "Base"; [n] text()'), (0, sre.MathspeakRules.defineSpecialisedRule_)("number-baseline", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("number-baseline-font", "mathspeak.default", '[t] "Baseline"; [t] @font; [n] CQFhideFont; [t] CSFshowFont', "self::number", "@font", '@font!="normal"', "preceding-sibling::identifier", 'preceding-sibling::*[@role="latinletter" or @role="greekletter" or @role="otherletter"]', 'parent::*/parent::infixop[@role="implicit"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("number-baseline-font", "mathspeak.default", "mathspeak.brief", '[t] "Base"; [n] text()'), (0, sre.MathspeakRules.defineSpecialisedRule_)("number-baseline-font", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("identifier", "mathspeak.default", "[m] CQFspaceoutIdentifier", "self::identifier", "string-length(text())>1", '@role!="unit"', '@role!="protected"', 'not(@font) or @font="normal" or @hiddenfont'), (0, sre.MathspeakRules.defineRule_)("identifier", "mathspeak.default", "[n] text()", "self::identifier", '@role="protected"'), (0, sre.MathspeakRules.defineRule_)("negative", "mathspeak.default", '[t] "negative"; [n] children/*[1]', "self::prefixop", '@role="negative"', "children/identifier"), (0, sre.MathspeakRules.defineRuleAlias_)("negative", "self::prefixop", '@role="negative"', "children/number"), (0, sre.MathspeakRules.defineRuleAlias_)("negative", "self::prefixop", '@role="negative"', 'children/fraction[@role="vulgar"]'), (0, sre.MathspeakRules.defineRule_)("negative", "mathspeak.default", '[t] "minus"; [n] children/*[1]', "self::prefixop", '@role="negative"'), (0, sre.MathspeakRules.defineRule_)("prefix", "mathspeak.default", "[n] text(); [n] children/*[1]", "self::prefixop"), (0, sre.MathspeakRules.defineRule_)("postfix", "mathspeak.default", "[n] children/*[1]; [n] text()", "self::postfixop"), (0, sre.MathspeakRules.defineRule_)("binary-operation", "mathspeak.default", "[m] children/* (sepFunc:CTXFcontentIterator);", "self::infixop"), (0, sre.MathspeakRules.defineRule_)("implicit", "mathspeak.default", "[m] children/*", "self::infixop", '@role="implicit"'), (0, sre.MathspeakRules.defineRuleAlias_)("implicit", "self::infixop", '@role="leftsuper" or @role="leftsub" or @role="rightsuper" or @role="rightsub"'), (0, sre.MathspeakRules.defineRule_)("subtraction", "mathspeak.default", '[m] children/* (separator:"minus");', "self::infixop", '@role="subtraction"'), (0, sre.MathspeakRules.defineRule_)("function-unknown", "mathspeak.default", "[n] children/*[1]; [n] children/*[2]", "self::appl"), (0, sre.MathspeakRules.defineRule_)("function-prefix", "mathspeak.default", "[n] children/*[1]; [n] children/*[2]", "self::appl", 'children/*[1][@role="prefix function"]'), (0, sre.MathspeakRules.defineRule_)("fences-open-close", "mathspeak.default", "[n] content/*[1]; [n] children/*[1]; [n] content/*[2]", "self::fenced", '@role="leftright"'), (0, sre.MathspeakRules.defineRule_)("fences-neutral", "mathspeak.default", '[t] "StartAbsoluteValue"; [n] children/*[1]; [t] "EndAbsoluteValue"', "self::fenced", 'self::fenced[@role="neutral"]', 'content/*[1][text()]="|" or content/*[1][text()]="❘" or content/*[1][text()]="｜"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("fences-neutral", "mathspeak.default", "mathspeak.sbrief", '[t] "AbsoluteValue"; [n] children/*[1]; [t] "EndAbsoluteValue"'), (0, sre.MathspeakRules.defineRule_)("fences-neutral", "mathspeak.default", "[n] content/*[1]; [n] children/*[1]; [n] content/*[2]", "self::fenced", 'self::fenced[@role="neutral"]'), (0, sre.MathspeakRules.defineRule_)("fences-set", "mathspeak.default", '[t] "StartSet"; [n] children/*[1]; [t] "EndSet"', 'self::fenced[@role="leftright"]', 'content/*[1][text()]="{"', 'content/*[2][text()]="}"', "count(children/*)=1", 'not(name(../..)="appl")'), (0, sre.MathspeakRules.defineSpecialisedRule_)("fences-set", "mathspeak.default", "mathspeak.sbrief", '[t] "Set"; [n] children/*[1]; [t] "EndSet"'), (0, sre.MathspeakRules.defineRule_)("text", "mathspeak.default", "[n] text()", "self::text"), (0, sre.MathspeakRules.defineRule_)("factorial", "mathspeak.default", '[t] "factorial"', "self::punctuation", 'text()="!"', 'name(preceding-sibling::*[1])!="text"')
    , (0, sre.MathspeakRules.defineRule_)("minus", "mathspeak.default", '[t] "minus"', "self::operator", 'text()="-"'), (0, sre.MathspeakRules.defineRule_)("single-prime", "mathspeak.default", '[t] "prime"', 'self::punctuated[@role="prime"]', "count(children/*)=1"), (0, sre.MathspeakRules.defineRule_)("double-prime", "mathspeak.default", '[t] "double-prime"', 'self::punctuated[@role="prime"]', "count(children/*)=2"), (0, sre.MathspeakRules.defineRule_)("triple-prime", "mathspeak.default", '[t] "triple-prime"', 'self::punctuated[@role="prime"]', "count(children/*)=3"), (0, sre.MathspeakRules.defineRule_)("quadruple-prime", "mathspeak.default", '[t] "quadruple-prime"', 'self::punctuated[@role="prime"]', "count(children/*)=4"), (0, sre.MathspeakRules.defineRule_)("counted-prime", "mathspeak.default", '[t] count(children/*); [t] "prime"', 'self::punctuated[@role="prime"]'), (0, sre.MathspeakRules.defineRule_)("fraction", "mathspeak.default", "[t] CSFopenFracVerbose; [n] children/*[1]; [t] CSFoverFracVerbose; [n] children/*[2]; [t] CSFcloseFracVerbose", "self::fraction"), (0, sre.MathspeakRules.defineRule_)("fraction", "mathspeak.brief", "[t] CSFopenFracBrief; [n] children/*[1]; [t] CSFoverFracVerbose; [n] children/*[2]; [t] CSFcloseFracBrief", "self::fraction"), (0, sre.MathspeakRules.defineRule_)("fraction", "mathspeak.sbrief", "[t] CSFopenFracSbrief; [n] children/*[1]; [t] CSFoverFracSbrief; [n] children/*[2]; [t] CSFcloseFracSbrief", "self::fraction"), (0, sre.MathspeakRules.defineRule_)("vulgar-fraction", "mathspeak.default", "[t] CSFvulgarFraction", "self::fraction", '@role="vulgar"', "CQFvulgarFractionSmall"), (0, sre.MathspeakRules.defineSpecialisedRule_)("vulgar-fraction", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("vulgar-fraction", "mathspeak.default", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("continued-fraction-outer", "mathspeak.default", '[t] "ContinuedFraction"; [n] children/*[1];[t] "Over"; [n] children/*[2]', "self::fraction", "not(ancestor::fraction)", 'children/*[2]/descendant-or-self::*[@role="ellipsis" and not(following-sibling::*)]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("continued-fraction-outer", "mathspeak.default", "mathspeak.brief", '[t] "ContinuedFrac"; [n] children/*[1];[t] "Over"; [n] children/*[2]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("continued-fraction-outer", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("continued-fraction-inner", "mathspeak.default", '[t] "StartFraction"; [n] children/*[1];[t] "Over"; [n] children/*[2]', "self::fraction", "ancestor::fraction", 'children/*[2]/descendant-or-self::*[@role="ellipsis" and not(following-sibling::*)]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("continued-fraction-inner", "mathspeak.default", "mathspeak.brief", '[t] "StartFrac"; [n] children/*[1];[t] "Over"; [n] children/*[2]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("continued-fraction-inner", "mathspeak.brief", "mathspeak.sbrief", '[t] "Frac"; [n] children/*[1];[t] "Over"; [n] children/*[2]'), (0, sre.MathspeakRules.defineRule_)("sqrt", "mathspeak.default", "[t] CSFopenRadicalVerbose; [n] children/*[1]; [t] CSFcloseRadicalVerbose", "self::sqrt"), (0, sre.MathspeakRules.defineRule_)("sqrt", "mathspeak.brief", "[t] CSFopenRadicalBrief; [n] children/*[1]; [t] CSFcloseRadicalBrief", "self::sqrt"), (0, sre.MathspeakRules.defineRule_)("sqrt", "mathspeak.sbrief", "[t] CSFopenRadicalSbrief; [n] children/*[1]; [t] CSFcloseRadicalBrief", "self::sqrt"), (0, sre.MathspeakRules.defineRule_)("root", "mathspeak.default", "[t] CSFindexRadicalVerbose; [n] children/*[1];[t] CSFopenRadicalVerbose; [n] children/*[2]; [t] CSFcloseRadicalVerbose", "self::root"), (0, sre.MathspeakRules.defineRule_)("root", "mathspeak.brief", "[t] CSFindexRadicalBrief; [n] children/*[1];[t] CSFopenRadicalBrief; [n] children/*[2]; [t] CSFcloseRadicalBrief", "self::root"), (0, sre.MathspeakRules.defineRule_)("root", "mathspeak.sbrief", "[t] CSFindexRadicalSbrief; [n] children/*[1];[t] CSFopenRadicalSbrief; [n] children/*[2]; [t] CSFcloseRadicalBrief", "self::root"), (0, sre.MathspeakRules.defineRule_)("limboth", "mathspeak.default", "[n] children/*[1]; [t] CSFunderscript; [n] children/*[2];[t] CSFoverscript; [n] children/*[3]", "self::limboth", 'name(../..)="underscore" or name(../..)="overscore"', 'following-sibling::*[@role!="underaccent" and @role!="overaccent"]'), (0, sre.MathspeakRules.defineRule_)("limlower", "mathspeak.default", "[n] children/*[1]; [t] CSFunderscript; [n] children/*[2];", "self::limlower", 'name(../..)="underscore" or name(../..)="overscore"', 'following-sibling::*[@role!="underaccent" and @role!="overaccent"]'), (0, sre.MathspeakRules.defineRule_)("limupper", "mathspeak.default", "[n] children/*[1]; [t] CSFoverscript; [n] children/*[2];", "self::limupper", 'name(../..)="underscore" or name(../..)="overscore"', 'following-sibling::*[@role!="underaccent" and @role!="overaccent"]'), (0, sre.MathspeakRules.defineRuleAlias_)("limlower", "self::underscore", '@role="limit function"', 'name(../..)="underscore" or name(../..)="overscore"', 'following-sibling::*[@role!="underaccent" and @role!="overaccent"]'), (0, sre.MathspeakRules.defineRuleAlias_)("limlower", "self::underscore", 'children/*[2][@role!="underaccent"]', 'name(../..)="underscore" or name(../..)="overscore"', 'following-sibling::*[@role!="underaccent" and @role!="overaccent"]'), (0, sre.MathspeakRules.defineRuleAlias_)("limupper", "self::overscore", 'children/*[2][@role!="overaccent"]', 'name(../..)="underscore" or name(../..)="overscore"', 'following-sibling::*[@role!="underaccent" and @role!="overaccent"]'), (0, sre.MathspeakRules.defineRule_)("limboth-end", "mathspeak.default", '[n] children/*[1]; [t] CSFunderscript; [n] children/*[2];[t] CSFoverscript; [n] children/*[3]; [t] "Endscripts"', "self::limboth"), (0, sre.MathspeakRules.defineRule_)("limlower-end", "mathspeak.default", '[n] children/*[1]; [t] CSFunderscript; [n] children/*[2]; [t] "Endscripts"', "self::limlower"), (0, sre.MathspeakRules.defineRule_)("limupper-end", "mathspeak.default", '[n] children/*[1]; [t] CSFoverscript; [n] children/*[2]; [t] "Endscripts"', "self::limupper"), (0, sre.MathspeakRules.defineRuleAlias_)("limlower-end", "self::underscore", '@role="limit function"'), (0, sre.MathspeakRules.defineRuleAlias_)("limlower-end", "self::underscore"), (0, sre.MathspeakRules.defineRuleAlias_)("limupper-end", "self::overscore"), (0, sre.MathspeakRules.defineRule_)("integral", "mathspeak.default", '[n] children/*[1]; [t] "Subscript"; [n] children/*[2];[t] "Superscript"; [n] children/*[3]; [t] "Baseline";', "self::limboth", '@role="integral"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("integral", "mathspeak.default", "mathspeak.brief", '[n] children/*[1]; [t] "Sub"; [n] children/*[2];[t] "Sup"; [n] children/*[3]; [t] "Base";'), (0, sre.MathspeakRules.defineSpecialisedRule_)("integral", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("bigop", "mathspeak.default", "[n] children/*[1]; [n] children/*[2];", "self::bigop"), (0, sre.MathspeakRules.defineRule_)("equality", "mathspeak.default", "[n] children/*[1]; [n] content/*[1]; [n] children/*[2]", 'self::relseq[@role="equality"]', "count(./children/*)=2"), (0, sre.MathspeakRules.defineRule_)("multi-equality", "mathspeak.default", "[m] ./children/* (sepFunc:CTXFcontentIterator)", 'self::relseq[@role="equality"]', "count(./children/*)>2"), (0, sre.MathspeakRules.defineRule_)("multrel", "mathspeak.default", "[m] children/* (sepFunc:CTXFcontentIterator)", "self::multirel"), (0, sre.MathspeakRules.defineRule_)("subscript", "mathspeak.default", "[n] children/*[1]; [t] CSFsubscriptVerbose; [n] children/*[2]", "self::subscript"), (0, sre.MathspeakRules.defineRule_)("subscript", "mathspeak.brief", "[n] children/*[1]; [t] CSFsubscriptBrief; [n] children/*[2]", "self::subscript"), (0, sre.MathspeakRules.defineSpecialisedRule_)("subscript", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("subscript-simple", "mathspeak.default", "[n] children/*[1]; [n] children/*[2]", "self::subscript", 'name(./children/*[1])="identifier"', 'name(./children/*[2])="number"', './children/*[2][@role!="mixed"]', './children/*[2][@role!="othernumber"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("subscript-simple", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("subscript-simple", "mathspeak.default", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("subscript-baseline", "mathspeak.default", "[n] children/*[1]; [t] CSFsubscriptVerbose; [n] children/*[2]; [t] CSFbaselineVerbose", "self::subscript", "following-sibling::*", 'not(name(following-sibling::subscript/children/*[1])="empty" or (name(following-sibling::infixop[@role="implicit"]/children/*[1])="subscript" and name(following-sibling::*/children/*[1]/children/*[1])="empty")) and @role!="subsup"', 'not(following-sibling::*[@role="rightsuper" or @role="rightsub" or @role="leftsub" or @role="leftsub"])'), (0, sre.MathspeakRules.defineSpecialisedRule_)("subscript-baseline", "mathspeak.default", "mathspeak.brief", "[n] children/*[1]; [t] CSFsubscriptBrief; [n] children/*[2]; [t] CSFbaselineBrief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("subscript-baseline", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRuleAlias_)("subscript-baseline", "self::subscript", "not(following-sibling::*)", "ancestor::fenced|ancestor::root|ancestor::sqrt|ancestor::punctuated|ancestor::fraction", 'not(ancestor::punctuated[@role="leftsuper" or @role="rightsub" or @role="rightsuper" or @role="rightsub"])'), (0, sre.MathspeakRules.defineRuleAlias_)("subscript-baseline", "self::subscript", "not(following-sibling::*)", "ancestor::relseq|ancestor::multirel", sre.MathspeakUtil.generateBaselineConstraint()), (0, sre.MathspeakRules.defineRuleAlias_)("subscript-baseline", "self::subscript", "not(following-sibling::*)", "self::subscript[@embellished]"), (0, sre.MathspeakRules.defineRule_)("subscript-empty-sup", "mathspeak.default", "[n] children/*[1]; [n] children/*[2]", "self::subscript", 'name(children/*[2])="infixop"', 'name(children/*[2][@role="implicit"]/children/*[1])="superscript"', 'name(children/*[2]/children/*[1]/children/*[1])="empty"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("subscript-empty-sup", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("subscript-empty-sup", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRuleAlias_)("subscript-empty-sup", "self::subscript", 'name(children/*[2])="superscript"', 'name(children/*[2]/children/*[1])="empty"'), (0, sre.MathspeakRules.defineRule_)("superscript", "mathspeak.default", "[n] children/*[1]; [t] CSFsuperscriptVerbose; [n] children/*[2]", "self::superscript"), (0, sre.MathspeakRules.defineSpecialisedRule_)("superscript", "mathspeak.default", "mathspeak.brief", "[n] children/*[1]; [t] CSFsuperscriptBrief; [n] children/*[2]"), (0, sre.MathspeakRules.defineSpecialisedRule_)("superscript", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("superscript-baseline", "mathspeak.default", "[n] children/*[1]; [t] CSFsuperscriptVerbose; [n] children/*[2];[t] CSFbaselineVerbose", "self::superscript", "following-sibling::*", 'not(name(following-sibling::superscript/children/*[1])="empty" or (name(following-sibling::infixop[@role="implicit"]/children/*[1])="superscript" and name(following-sibling::*/children/*[1]/children/*[1])="empty")) and not(following-sibling::*[@role="rightsuper" or @role="rightsub" or @role="leftsub" or @role="leftsub"])'), (0, sre.MathspeakRules.defineSpecialisedRule_)("superscript-baseline", "mathspeak.default", "mathspeak.brief", "[n] children/*[1]; [t] CSFsuperscriptBrief; [n] children/*[2];[t] CSFbaselineBrief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("superscript-baseline", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRuleAlias_)("superscript-baseline", "self::superscript", "not(following-sibling::*)", "ancestor::punctuated", 'ancestor::*/following-sibling::* and not(ancestor::punctuated[@role="leftsuper" or @role="rightsub" or @role="rightsuper" or @role="rightsub"])'), (0, sre.MathspeakRules.defineRuleAlias_)("superscript-baseline", "self::superscript", "not(following-sibling::*)", "ancestor::fraction|ancestor::fenced|ancestor::root|ancestor::sqrt"), (0, sre.MathspeakRules.defineRuleAlias_)("superscript-baseline", "self::superscript", "not(following-sibling::*)", "ancestor::relseq|ancestor::multirel", "not(self::superscript[@embellished])", sre.MathspeakUtil.generateBaselineConstraint()), (0, sre.MathspeakRules.defineRuleAlias_)("superscript-baseline", "self::superscript", "not(following-sibling::*)", "self::superscript[@embellished]", 'not(children/*[2][@role="prime"])'), (0, sre.MathspeakRules.defineRule_)("superscript-empty-sub", "mathspeak.default", "[n] children/*[1]; [n] children/*[2]", "self::superscript", 'name(children/*[2])="infixop"', 'name(children/*[2][@role="implicit"]/children/*[1])="subscript"', 'name(children/*[2]/children/*[1]/children/*[1])="empty"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("superscript-empty-sub", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("superscript-empty-sub", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRuleAlias_)("superscript-empty-sub", "self::superscript", 'name(children/*[2])="subscript"', 'name(children/*[2]/children/*[1])="empty"'), (0, sre.MathspeakRules.defineRule_)("square", "mathspeak.default", '[n] children/*[1]; [t] "squared"', "self::superscript", "children/*[2]", "children/*[2][text()=2]", 'name(children/*[1])!="text" or not(name(children/*[1])="text" and (name(../../../punctuated[@role="text"]/..)="stree" or name(..)="stree"))', 'name(children/*[1])!="subscript" or (name(children/*[1])="subscript" and name(children/*[1]/children/*[1])="identifier" and name(children/*[1]/children/*[2])="number" and children/*[1]/children/*[2][@role!="mixed"] and children/*[1]/children/*[2][@role!="othernumber"])', "not(self::superscript[@embellished])"), (0, sre.MathspeakRules.defineSpecialisedRule_)("square", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("square", "mathspeak.default", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("cube", "mathspeak.default", '[n] children/*[1]; [t] "cubed"', "self::superscript", "children/*[2]", "children/*[2][text()=3]", 'name(children/*[1])!="text" or not(name(children/*[1])="text" and (name(../../../punctuated[@role="text"]/..)="stree" or name(..)="stree"))', 'name(children/*[1])!="subscript" or (name(children/*[1])="subscript" and name(children/*[1]/children/*[1])="identifier" and name(children/*[1]/children/*[2])="number" and children/*[1]/children/*[2][@role!="mixed"] and children/*[1]/children/*[2][@role!="othernumber"])', "not(self::superscript[@embellished])"), (0, sre.MathspeakRules.defineSpecialisedRule_)("cube", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("cube", "mathspeak.default", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("prime", "mathspeak.default", "[n] children/*[1]; [n] children/*[2]", "self::superscript", "children/*[2]", 'children/*[2][@role="prime"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("prime", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("prime", "mathspeak.default", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("prime-subscript", "mathspeak.default", "[n] children/*[1]/children/*[1]; [n] children/*[2]; [t] CSFsubscriptVerbose; [n] children/*[1]/children/*[2]", "self::superscript", 'children/*[2][@role="prime"]', 'name(children/*[1])="subscript"', "not(following-sibling::*)"), (0, sre.MathspeakRules.defineSpecialisedRule_)("prime-subscript", "mathspeak.default", "mathspeak.brief", "[n] children/*[1]/children/*[1]; [n] children/*[2]; [t] CSFsubscriptBrief; [n] children/*[1]/children/*[2]"), (0, sre.MathspeakRules.defineSpecialisedRule_)("prime-subscript", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("prime-subscript-baseline", "mathspeak.default", "[n] children/*[1]/children/*[1]; [n] children/*[2]; [t] CSFsubscriptVerbose; [n] children/*[1]/children/*[2]; [t] CSFbaselineVerbose", "self::superscript", 'children/*[2][@role="prime"]', 'name(children/*[1])="subscript"', "following-sibling::*"), (0, sre.MathspeakRules.defineSpecialisedRule_)("prime-subscript-baseline", "mathspeak.default", "mathspeak.brief", "[n] children/*[1]/children/*[1]; [n] children/*[2]; [t] CSFsubscriptBrief; [n] children/*[1]/children/*[2]; [t] CSFbaselineBrief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("prime-subscript-baseline", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRuleAlias_)("prime-subscript-baseline", "self::superscript", 'children/*[2][@role="prime"]', 'name(children/*[1])="subscript"', "not(following-sibling::*)", "self::superscript[@embellished]"), (0, sre.MathspeakRules.defineRule_)("prime-subscript-simple", "mathspeak.default", "[n] children/*[1]/children/*[1]; [n] children/*[2];[n] children/*[1]/children/*[2]", "self::superscript", 'children/*[2][@role="prime"]', 'name(children/*[1])="subscript"', 'name(children/*[1]/children/*[1])="identifier"', 'name(children/*[1]/children/*[2])="number"', 'children/*[1]/children/*[2][@role!="mixed"]', 'children/*[1]/children/*[2][@role!="othernumber"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("prime-subscript-simple", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("prime-subscript-simple", "mathspeak.default", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("overscore", "mathspeak.default", '[t] "ModifyingAbove"; [n] children/*[1]; [t] "With"; [n] children/*[2]', "self::overscore", 'children/*[2][@role="overaccent"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("overscore", "mathspeak.default", "mathspeak.brief", '[t] "ModAbove"; [n] children/*[1]; [t] "With"; [n] children/*[2]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("overscore", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("double-overscore", "mathspeak.default", '[t] "ModifyingAbove Above"; [n] children/*[1]; [t] "With"; [n] children/*[2]', "self::overscore", 'children/*[2][@role="overaccent"]', 'name(children/*[1])="overscore"', 'children/*[1]/children/*[2][@role="overaccent"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("double-overscore", "mathspeak.default", "mathspeak.brief", '[t] "ModAbove Above"; [n] children/*[1]; [t] "With"; [n] children/*[2]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("double-overscore", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("underscore", "mathspeak.default", '[t] "ModifyingBelow"; [n] children/*[1]; [t] "With"; [n] children/*[2]', "self::underscore", 'children/*[2][@role="underaccent"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("underscore", "mathspeak.default", "mathspeak.brief", '[t] "ModBelow"; [n] children/*[1]; [t] "With"; [n] children/*[2]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("underscore", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("double-underscore", "mathspeak.default", '[t] "ModifyingBelow Below"; [n] children/*[1]; [t] "With"; [n] children/*[2]', "self::underscore", 'children/*[2][@role="underaccent"]', 'name(children/*[1])="underscore"', 'children/*[1]/children/*[2][@role="underaccent"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("double-underscore", "mathspeak.default", "mathspeak.brief", '[t] "ModBelow Below"; [n] children/*[1]; [t] "With"; [n] children/*[2]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("double-underscore", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("overbar", "mathspeak.default", '[n] children/*[1]; [t] "overbar"', "self::overscore", '@role="latinletter" or @role="greekletter" or @role="otherletter"', 'children/*[2][@role="overaccent"]', 'children/*[2][text()="¯" or text()="￣" or text()="＿" or text()="_" or text()="‾"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("overbar", "mathspeak.default", "mathspeak.brief", '[n] children/*[1]; [t] "overBar"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("overbar", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("underbar", "mathspeak.default", '[n] children/*[1]; [t] "underbar"', "self::underscore", '@role="latinletter" or @role="greekletter" or @role="otherletter"', 'children/*[2][@role="underaccent"]', 'children/*[2][text()="¯" or text()="￣" or text()="＿" or text()="_" or text()="‾"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("underbar", "mathspeak.default", "mathspeak.brief", '[n] children/*[1]; [t] "underBar"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("underbar", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("overtilde", "mathspeak.default", '[n] children/*[1]; [t] "overTilde"', "self::overscore", 'children/*[2][@role="overaccent"]', '@role="latinletter" or @role="greekletter" or @role="otherletter"', 'children/*[2][text()="~" or text()="˜" or text()="∼" or text()="～"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("overtilde", "mathspeak.default", "mathspeak.brief", '[n] children/*[1]; [t] "overtilde"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("overtilde", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("undertilde", "mathspeak.default", '[n] children/*[1]; [t] "underTilde"', "self::underscore", '@role="latinletter" or @role="greekletter" or @role="otherletter"', 'children/*[2][@role="underaccent"]', 'children/*[2][text()="~" or text()="˜" or text()="∼" or text()="～"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("undertilde", "mathspeak.default", "mathspeak.brief", '[n] children/*[1]; [t] "undertilde"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("undertilde", "mathspeak.brief", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRule_)("matrix-fence", "mathspeak.default", "[n] children/*[1];", "self::fenced", "count(children/*)=1", 'name(children/*[1])="matrix"'), (0, sre.MathspeakRules.defineRule_)("matrix", "mathspeak.default", '[t] "Start"; [t] count(children/*);  [t] "By";[t] count(children/*[1]/children/*); [t] "Matrix"; [m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row "); [t] "EndMatrix"', "self::matrix"), (0, sre.MathspeakRules.defineRule_)("matrix", "mathspeak.sbrief", '[t] count(children/*);  [t] "By";[t] count(children/*[1]/children/*); [t] "Matrix"; [m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row "); [t] "EndMatrix"', "self::matrix"), (0, sre.MathspeakRules.defineRuleAlias_)("matrix", "self::vector"), (0, sre.MathspeakRules.defineRule_)("matrix-row", "mathspeak.default", '[m] children/* (ctxtFunc:CTXFordinalCounter,context:"Column")', "self::row"), (0, sre.MathspeakRules.defineRule_)("matrix-cell", "mathspeak.default", "[n] children/*[1]", "self::cell"), (0, sre.MathspeakRules.defineRule_)("empty-cell", "mathspeak.default", '[t] "Blank"', "self::cell", "count(children/*)=1", "children/empty"), (0, sre.MathspeakRules.defineRule_)("determinant", "mathspeak.default", '[t] "Start"; [t] count(children/*);  [t] "By";[t] count(children/*[1]/children/*); [t] "Determinant"; [m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row "); [t] "EndDeterminant"', "self::matrix", '@role="determinant"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("determinant", "mathspeak.default", "mathspeak.sbrief", '[t] count(children/*);  [t] "By";[t] count(children/*[1]/children/*); [t] "Determinant"; [m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row "); [t] "EndDeterminant"'), (0, sre.MathspeakRules.defineRule_)("determinant-simple", "mathspeak.default", '[t] CSFdetMarkSimple;[t] "Start"; [t] count(children/*);  [t] "By";[t] count(children/*[1]/children/*); [t] "Determinant"; [m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row"); [t] "EndDeterminant"; [t] CSFdetUnMarkSimple', "self::matrix", '@role="determinant"', "CQFdetIsSimple"), (0, sre.MathspeakRules.defineSpecialisedRule_)("determinant-simple", "mathspeak.default", "mathspeak.sbrief", '[t] CSFdetMarkSimple;[t] count(children/*);  [t] "By";[t] count(children/*[1]/children/*); [t] "Determinant"; [m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row"); [t] "EndDeterminant"; [t] CSFdetUnMarkSimple'), (0, sre.MathspeakRules.defineRule_)("row-simple", "mathspeak.default", "[m] children/*;", "self::row", '@role="determinant"', '@sre_flag="simple"'), (0, sre.MathspeakRules.defineRule_)("layout", "mathspeak.default", '[t] "StartLayout"; [m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row "); [t] "EndLayout"', "self::table"), (0, sre.MathspeakRules.defineRule_)("layout", "mathspeak.sbrief", '[t] "Layout"; [m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row "); [t] "EndLayout"', "self::table"), (0, sre.MathspeakRules.defineRule_)("binomial", "mathspeak.default", '[t] "StartBinomialOrMatrix"; [n] children/*[1]/children/*[1]; [t] "Choose"; [n] children/*[2]/children/*[1];  [t] "EndBinomialOrMatrix"', "self::vector", '@role="binomial"'), (0, sre.MathspeakRules.defineRule_)("binomial", "mathspeak.sbrief", '[t] "BinomialOrMatrix"; [n] children/*[1]/children/*[1]; [t] "Choose"; [n] children/*[2]/children/*[1];  [t] "EndBinomialOrMatrix"', "self::vector", '@role="binomial"'), (0, sre.MathspeakRules.defineRule_)("cases", "mathspeak.default", '[t] "StartLayout"; [t] "Enlarged"; [n] content/*[1];[m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row "); [t] "EndLayout"', "self::cases"), (0, sre.MathspeakRules.defineRule_)("cases", "mathspeak.sbrief", '[t] "Layout"; [t] "Enlarged"; [n] content/*[1];[m] children/* (ctxtFunc:CTXFordinalCounter,context:"Row "); [t] "EndLayout"', "self::cases"), (0, sre.MathspeakRules.defineRule_)("enclose", "mathspeak.default", '[t] "StartEnclose"; [t] @role; [n] children/*[1]; [t] "EndEnclose"', "self::enclose"), (0, sre.MathspeakRules.defineRuleAlias_)("overbar", "self::enclose", '@role="top"'), (0, sre.MathspeakRules.defineRuleAlias_)("underbar", "self::enclose", '@role="bottom"'), (0, sre.MathspeakRules.defineRule_)("leftbar", "mathspeak.default", '[t] "vertical-bar"; [n] children/*[1]', "self::enclose", '@role="left"'), (0, sre.MathspeakRules.defineRule_)("rightbar", "mathspeak.default", '[t] "vertical-bar"; [n] children/*[1]', "self::enclose", '@role="right"'), (0, sre.MathspeakRules.defineRule_)("crossout", "mathspeak.default", '[t] "CrossOut"; [n] children/*[1]; [t] "EndCrossOut"', "self::enclose", '@role="updiagonalstrike" or @role="downdiagonalstrike" or @role="horizontalstrike"'), (0, sre.MathspeakRules.defineRule_)("cancel", "mathspeak.default", '[t] "CrossOut"; [n] children/*[1]/children/*[1]; [t] "With"; [n] children/*[2]; [t] "EndCrossOut"', "self::overscore", '@role="updiagonalstrike" or @role="downdiagonalstrike" or @role="horizontalstrike"'), (0, sre.MathspeakRules.defineSpecialisedRule_)("cancel", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("cancel", "mathspeak.default", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRuleAlias_)("cancel", "self::underscore", '@role="updiagonalstrike" or @role="downdiagonalstrike" or @role="horizontalstrike"'), (0, sre.MathspeakRules.defineRule_)("cancel-reverse", "mathspeak.default", '[t] "CrossOut"; [n] children/*[2]/children/*[1]; [t] "With"; [n] children/*[1]; [t] "EndCrossOut"', "self::overscore", 'name(children/*[2])="enclose"', 'children/*[2][@role="updiagonalstrike" or @role="downdiagonalstrike" or @role="horizontalstrike"]'), (0, sre.MathspeakRules.defineSpecialisedRule_)("cancel-reverse", "mathspeak.default", "mathspeak.brief"), (0, sre.MathspeakRules.defineSpecialisedRule_)("cancel-reverse", "mathspeak.default", "mathspeak.sbrief"), (0, sre.MathspeakRules.defineRuleAlias_)("cancel-reverse", "self::underscore", 'name(children/*[2])="enclose"', 'children/*[2][@role="updiagonalstrike" or @role="downdiagonalstrike" or @role="horizontalstrike"]')
  }, sre.MathspeakRules.componentString_ = {
    2: "CSFbaseline"
    , 1: "CSFsubscript"
    , 0: "CSFsuperscript"
  }, sre.MathspeakRules.childNumber_ = {
    4: 2
    , 3: 3
    , 2: 1
    , 1: 4
    , 0: 5
  }, sre.MathspeakRules.generateTensorRuleStrings_ = function (e) {
    var t = []
      , r = ""
      , s = "";
    e = parseInt(e, 2);
    for (var n = 0; 5 > n; n++) {
      var i = "children/*[" + sre.MathspeakRules.childNumber_[n] + "]";
      if (1 & e) var a = sre.MathspeakRules.componentString_[n % 3]
        , r = "[t] " + a + "Verbose; [n] " + i + ";" + r
        , s = "[t] " + a + "Brief; [n] " + i + ";" + s;
      else t.unshift("name(" + i + ')="empty"');
      e >>= 1
    }
    return t.push(r), t.push(s), t
  }, sre.MathspeakRules.generateMathspeakTensorRules_ = function () {
    for (var e, t = "11111 11110 11101 11100 10111 10110 10101 10100 01111 01110 01101 01100".split(" "), r = 0; e = t[r]; r++) {
      var s = "tensor" + e;
      e = sre.MathspeakRules.generateTensorRuleStrings_(e);
      var n = e.pop()
        , i = e.pop()
        , a = [s, "mathspeak.default", i, "self::tensor"].concat(e)
        , l = [s, "mathspeak.brief", n, "self::tensor"].concat(e);
      sre.MathspeakRules.defineRule_.apply(null, a), sre.MathspeakRules.defineRule_.apply(null, l), (0, sre.MathspeakRules.defineSpecialisedRule_)(s, "mathspeak.brief", "mathspeak.sbrief"), a = sre.MathspeakRules.componentString_[2], i += "; [t]" + a + "Verbose", n += "; [t]" + a + "Brief", s += "-baseline", a = [s, "mathspeak.default", i, "self::tensor", "following-sibling::*"].concat(e), l = [s, "mathspeak.brief", n, "self::tensor", "following-sibling::*"].concat(e), sre.MathspeakRules.defineRule_.apply(null, a), sre.MathspeakRules.defineRule_.apply(null, l), (0, sre.MathspeakRules.defineSpecialisedRule_)(s, "mathspeak.brief", "mathspeak.sbrief"), s = [s, "self::tensor", "not(following-sibling::*)", "ancestor::fraction|ancestor::punctuated|ancestor::fenced|ancestor::root|ancestor::sqrt|ancestor::relseq|ancestor::multirel|self::tensor[@embellished]"].concat(e), sre.MathspeakRules.defineRuleAlias_.apply(null, s)
    }
  }, sre.CombinedStore = function () {}, goog.addSingletonGetter(sre.CombinedStore), sre.CombinedStore.mathStore = sre.MathmlStore.getInstance(), sre.CombinedStore.mathStore.initialize = function () {
    sre.MathmlStoreRules.getInstance(), sre.SemanticTreeRules.getInstance(), sre.MathspeakRules.getInstance(), sre.CombinedStore.getInstance()
      .updateEngine()
  }, sre.CombinedStore.prototype.updateEngine = function () {
    var e = sre.MathMap.getInstance();
    if (sre.Engine.isReady()) {
      var t = sre.Engine.getInstance()
        , r = sre.CombinedStore.mathStore.getDynamicConstraintValues();
      t.allDomains = sre.MathUtil.union(r.domain, e.allDomains), t.allStyles = sre.MathUtil.union(r.style, e.allStyles)
    } else setTimeout(sre.CombinedStore.getInstance()
      .updateEngine, 500)
  }, sre.EnrichCase = function () {}, sre.EnrichCase.prototype.getMathml = function () {}, sre.AbstractEnrichCase = function (e) {
    this.semantic = e
  }, sre.EnrichCaseFactory = function () {}, sre.EnrichCaseFactory.getEmbellishedCase = function (e) {
    return new sre.EnrichCaseFactory.embellishedCase(e)
  }, sre.EnrichCaseFactory.cases = [], sre.EnrichCaseFactory.getCase = function (e) {
    for (var t, r = 0; t = sre.EnrichCaseFactory.cases[r]; r++)
      if (t.test(e)) return new t.constr(e);
    return null
  }, sre.AuditoryDescription = function (e) {
    this.context = e.context ? e.context : "", this.text = e.text ? e.text : "", this.userValue = e.userValue ? e.userValue : "", this.annotation = e.annotation ? e.annotation : "", this.correction = e.correction ? e.correction : "", this.personality = e.personality, this.preprocess = !!e.preprocess, this.bookmark = e.bookmark ? e.bookmark : "0", this.nobookmark = !1
  }, sre.AuditoryDescription.prototype.isEmpty = function () {
    return 0 == this.context.length && 0 == this.text.length && 0 == this.userValue.length && 0 == this.annotation.length
  }, sre.AuditoryDescription.prototype.toString = function () {
    return 'AuditoryDescription(context="' + this.context + '"  text="' + this.text + '"  userValue="' + this.userValue + '"  annotation="' + this.annotation + '")'
  }, sre.AuditoryDescription.prototype.descriptionString = function () {
    return this.context && "" != this.context ? '<bookmark mark="0"/>' + this.context + " " + this.text : this.text
  }, sre.AuditoryDescription.prototype.equals = function (e) {
    return this.context == e.context && this.text == e.text && this.userValue == e.userValue && this.annotation == e.annotation
  }, sre.AuditoryDescription.toSimpleString = function (e, t) {
    var r = "" === t ? "" : t || " ";
    return sre.AuditoryDescription.preprocessDescriptionList_(e), sre.AuditoryDescription.addBookmarks(e), sre.BaseUtil.removeEmpty(e.map(function (e) {
        return e.descriptionString()
      }))
      .join(r)
  }, sre.AuditoryDescription.addBookmarks = function (e) {
    if (null != e && void 0 != e && 0 < e.length) {
      for (var t = !0, r = 0; r < e.length; r++)
        if (e[r].nobookmark) {
          t = !1;
          break
        }
      if (t) {
        for (r = 0; r < e.length; r++) "" != e[r].text && null != e[r].text && (e[r].text = "" != e[r].bookmark ? "a" == e[r].text ? '<bookmark mark="' + e[r].bookmark + '"/>' + e[r].text + "." : '<bookmark mark="' + e[r].bookmark + '"/>' + e[r].text : '<bookmark mark="0"/>' + e[r].text.toUpperCase());
        e[e.length - 1].text = e[e.length - 1].text.toUpperCase() + '<bookmark mark="0"/>'
      }
    }
  }, sre.AuditoryDescription.preprocessString_ = function (e) {
    if ("mathspeak" == sre.Engine.getInstance()
      .domain && e.match(/^\d{1}$/)) return e;
    var t = sre.MathStore.createDynamicConstraint(sre.Engine.getInstance()
      .domain, sre.Engine.getInstance()
      .style);
    return sre.MathMap.getInstance()
      .store.lookupString(e, t) || e
  }, sre.AuditoryDescription.processCorrections_ = function (e, t) {
    if (!t || !e) return e;
    var r = t.split(/ |-/)
      , r = new RegExp("^" + r.join("( |-)") + "( |-)");
    return e.replace(r, "")
  }, sre.AuditoryDescription.preprocessDescription_ = function (e) {
    e.annotation && (e.text += ":" + e.annotation), e.preprocess && (e.text = sre.AuditoryDescription.processCorrections_(sre.AuditoryDescription.preprocessString_(e.text), e.correction), e.preprocess = !1)
  }, sre.AuditoryDescription.preprocessDescriptionList_ = function (e) {
    for (var t, r = 0; t = e[r]; r++) sre.AuditoryDescription.preprocessDescription_(t)
  }, sre.SpeechRuleEngine = function () {
    this.activeStore_ = null, this.dynamicCstr = {}, this.dynamicCstr[sre.SpeechRule.DynamicCstrAttrib.STYLE] = "short", this.globalParameters_ = {}, this.cache_ = {}
  }, goog.addSingletonGetter(sre.SpeechRuleEngine), sre.SpeechRuleEngine.prototype.setGlobalParameter = function (e, t) {
    this.globalParameters_[e] = t
  }, sre.SpeechRuleEngine.prototype.getGlobalParameter = function (e) {
    return this.globalParameters_[e]
  }, sre.SpeechRuleEngine.prototype.parameterize = function (e) {
    try {
      e.initialize()
    } catch (t) {
      if ("StoreError" != t.name) throw t;
      console.log("Store Error:", t.message)
    }
    this.activeStore_ = e
  }, sre.SpeechRuleEngine.prototype.setDynamicConstraint = function (e) {
    e && (this.dynamicCstr = e)
  }, sre.SpeechRuleEngine.prototype.constructString = function (e, t) {
    if (!t) return "";
    if ('"' == t.charAt(0)) return t.slice(1, -1);
    var r = this.activeStore_.customStrings.lookup(t);
    return r ? r(e) : sre.XpathUtil.evaluateString(t, e)
  }, sre.SpeechRuleEngine.prototype.clearCache = function () {
    this.cache_ = {}
  }, sre.SpeechRuleEngine.prototype.getCacheForNode_ = function (e) {
    return e && e.getAttribute ? (e = e.getAttribute("id"), "undefined" === e || "" === e ? null : this.getCache_(e)) : null
  }, sre.SpeechRuleEngine.prototype.getCache_ = function (e) {
    return this.cache_[e]
  }, sre.SpeechRuleEngine.prototype.pushCache_ = function (e, t) {
    if (e.getAttribute) {
      var r = e.getAttribute("id");
      r && (this.cache_[r] = t)
    }
  }, sre.SpeechRuleEngine.prototype.evaluateNode = function (e) {
    return e ? this.evaluateTree_(e) : []
  }, sre.SpeechRuleEngine.prototype.evaluateTree_ = function (e) {
    if (sre.Engine.getInstance()
      .withCache) {
      var t = this.getCacheForNode_(e);
      if (t) return t
    }
    var r = this.activeStore_.lookupRule(e, this.dynamicCstr);
    if (!r) return t = this.activeStore_.evaluateDefault(e), this.pushCache_(e, t), t;
    sre.Debugger.getInstance()
      .generateOutput(goog.bind(function () {
        return [r.name, sre.SpeechRule.stringifyCstr(r.dynamicCstr), e.toString()]
      }, this));
    for (var s, n = r.action.components, t = [], i = 0; s = n[i]; i++) {
      var a = []
        , l = s.content || "";
      switch (s.type) {
      case sre.SpeechRule.Type.NODE:
        (l = this.activeStore_.applyQuery(e, l)) && (a = this.evaluateTree_(l));
        break;
      case sre.SpeechRule.Type.MULTI:
        l = this.activeStore_.applySelector(e, l), 0 < l.length && (a = this.evaluateNodeList_(l, s.sepFunc, this.constructString(e, s.separator), s.ctxtFunc, this.constructString(e, s.context), e.getAttribute("bookmark")));
        break;
      case sre.SpeechRule.Type.TEXT:
        if (l = this.constructString(e, l)) {
          if (a = 0, "Subscript" != l && "Baseline" != l) {
            for (var o = 0; o < r.precondition.constraints.length; o++) {
              try {
                a = sre.XpathUtil.evaluateXpath_(r.precondition.constraints[o], e, XPathResult.ANY_UNORDERED_NODE_TYPE)
                  .singleNodeValue.getAttribute("bookmark")
              } catch (c) {}
              if (0 != a) break
            }
            1 == e.childNodes.length && void 0 != e.getAttribute("bookmark") && null != e.getAttribute("bookmark") && (a = e.getAttribute("bookmark"))
          }
          a = [new sre.AuditoryDescription({
            text: l
            , bookmark: a
          })]
        }
        break;
      default:
        a = void 0 != s.pause && 0 < s.pause ? [new sre.AuditoryDescription({
          text: '<silence msec="' + s.pause + '"/>'
        })] : [new sre.AuditoryDescription({
          text: l
        })]
      }
      a[0] && s.type != sre.SpeechRule.Type.MULTI && (s.context && (a[0].context = this.constructString(e, s.context) + (a[0].context || "")), s.annotation && (a[0].annotation = s.annotation), s.preprocess && (a[0].preprocess = !0), null != e.getAttribute("nobookmark") && (a[0].nobookmark = !0)), t = t.concat(this.addPersonality_(a, s))
    }
    return this.pushCache_(e, t), t
  }, sre.SpeechRuleEngine.prototype.evaluateNodeList_ = function (e, t, r, s, n, i) {
    if (e == []) return [];
    var a = r || ""
      , l = n || "";
    r = (r = this.activeStore_.contextFunctions.lookup(s)) ? r(e, l) : function () {
      return l
    }, t = (t = this.activeStore_.contextFunctions.lookup(t)) ? t(e, a) : function () {
      return new sre.AuditoryDescription({
        text: a
        , preprocess: !0
      })
    }, s = [], n = 0;
    for (var o; o = e[n]; n++) o = this.evaluateTree_(o), 0 < o.length && (o[0].context = r() + (o[0].context || ""), s = s.concat(o), n < e.length - 1 && (o = t(), o.bookmark = i || 0, s = s.concat(o)));
    return s
  }, sre.SpeechRuleEngine.prototype.addPersonality_ = function (e, t) {
    var r, s = {};
    for (r in sre.Engine.personalityProps) {
      var n = parseFloat(t[sre.Engine.personalityProps[r]]);
      isNaN(n) || (s[r] = n)
    }
    return e.forEach(goog.bind(function (e) {
      this.addRelativePersonality_(e, s)
    }, this)), e
  }, sre.SpeechRuleEngine.prototype.addRelativePersonality_ = function (e, t) {
    if (!e.personality) return e.personality = t, e;
    var r, s = e.personality;
    for (r in t) s[r] = s[r] && "number" == typeof s[r] ? s[r] + t[r] : t[r];
    return e
  }, sre.SpeechRuleEngine.prototype.toString = function () {
    return this.activeStore_.findAllRules(function (e) {
        return !0
      })
      .map(function (e) {
        return e.toString()
      })
      .join("\n")
  }, sre.SpeechRuleEngine.debugSpeechRule = function (e, t) {
    var r = sre.SpeechRuleEngine.getInstance()
      .activeStore_;
    r && r.debugSpeechRule(e, t)
  }, sre.SpeechRuleEngine.debugNamedSpeechRule = function (e, t) {
    var r = sre.SpeechRuleEngine.getInstance()
      .activeStore_;
    if (r)
      for (var s, n = r.findAllRules(function (t) {
          return t.name == e
        }), i = 0; s = n[i]; i++) sre.Debugger.getInstance()
        .output("Rule", e, "DynamicCstr:", sre.SpeechRule.stringifyCstr(s.dynamicCstr), "number", i), r.debugSpeechRule(s, t)
  }, sre.EnrichMathml = function () {}, sre.EnrichMathml.Error = function (e) {
    Error.call(this), this.message = e || "", this.name = "MathML Enrichment Error"
  }, goog.inherits(sre.EnrichMathml.Error, Error), sre.EnrichMathml.SETTINGS = {
    collapsed: !0
    , implicit: !0
  }, sre.EnrichMathml.ATTRIBUTE_PREFIX_ = "data-semantic-", sre.EnrichMathml.Attribute = {
    ADDED: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "added"
    , CHILDREN: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "children"
    , COLLAPSED: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "collapsed"
    , CONTENT: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "content"
    , FONT: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "font"
    , ID: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "id"
    , OPERATOR: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "operator"
    , PARENT: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "parent"
    , ROLE: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "role"
    , SPEECH: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "speech"
    , TYPE: sre.EnrichMathml.ATTRIBUTE_PREFIX_ + "type"
  }, sre.EnrichMathml.enrich = function (e, t) {
    var r = sre.Engine.getInstance();
    r.style = "default", r.domain = "mathspeak", r.semantics = !0, sre.SpeechRuleEngine.getInstance()
      .clearCache(), sre.SpeechRuleEngine.getInstance()
      .parameterize(sre.MathmlStore.getInstance()), sre.SpeechRuleEngine.getInstance()
      .dynamicCstr = sre.MathStore.createDynamicConstraint(r.domain, r.style);
    var s = e.cloneNode(!0);
    return sre.EnrichMathml.walkTree(t.root), sre.Debugger.getInstance()
      .generateOutput(function () {
        return sre.EnrichMathml.formattedOutput(s, e, t, !0), []
      }), e
  }, sre.EnrichMathml.walkTree = function (e) {
    var t = sre.EnrichCaseFactory.getCase(e);
    if (t) return t = t.getMathml(), sre.EnrichMathml.ascendNewNode(t);
    if (1 === e.mathml.length) return sre.Debugger.getInstance()
      .output("Walktree Case 0"), t = e.mathml[0], sre.EnrichMathml.setAttributes(t, e), sre.EnrichMathml.ascendNewNode(t);
    var t = e.contentNodes.map(sre.EnrichMathml.cloneContentNode)
      , r = e.childNodes.map(sre.EnrichMathml.walkTree)
      , r = sre.EnrichMathml.combineContentChildren_(e, t, r)
      , t = e.mathmlTree;
    if (null === t) sre.Debugger.getInstance()
      .output("Walktree Case 1"), t = sre.EnrichMathml.introduceNewLayer(r);
    else {
      var s = sre.EnrichMathml.attachedElement_(r);
      sre.Debugger.getInstance()
        .output("Walktree Case 2"), s ? (sre.Debugger.getInstance()
          .output("Walktree Case 2.1"), t = s.parentNode) : (sre.Debugger.getInstance()
          .output("Walktree Case 2.2"), t = sre.EnrichMathml.getInnerNode(t))
    }
    return t = sre.EnrichMathml.rewriteMfenced(t), sre.EnrichMathml.mergeChildren_(t, r), sre.EnrichMathml.setAttributes(t, e), sre.EnrichMathml.ascendNewNode(t)
  }, sre.EnrichMathml.introduceNewLayer = function (e) {
    var t = sre.EnrichMathml.mathmlLca_(e)
      , r = t.node;
    return t.valid && sre.SemanticUtil.hasEmptyTag(r) || (sre.Debugger.getInstance()
      .output("Walktree Case 1.1"), r = sre.SystemExternal.document.createElement("mrow"), e[0] && (sre.Debugger.getInstance()
        .output("Walktree Case 1.1.1"), t = sre.EnrichMathml.attachedElement_(e), e = sre.EnrichMathml.childrenSubset_(t.parentNode, e), sre.DomUtil.replaceNode(t, r), e.forEach(function (e) {
          r.appendChild(e)
        }))), r
  }, sre.EnrichMathml.childrenSubset_ = function (e, t) {
    var r = sre.DomUtil.toArray(e.childNodes)
      , s = 1 / 0
      , n = -(1 / 0);
    return t.forEach(function (e) {
      e = r.indexOf(e), -1 !== e && (s = Math.min(s, e), n = Math.max(n, e))
    }), r.slice(s, n + 1)
  }, sre.EnrichMathml.mergeChildren_ = function (e, t) {
    var r = e.childNodes;
    if (r.length)
      for (var s = 0; t.length;) r[s] === t[0] || sre.EnrichMathml.functionApplication_(r[s], t[0]) ? (t.shift(), s++) : r[s] && -1 === t.indexOf(r[s]) ? s++ : (e.insertBefore(t[0], r[s]), t.shift());
    else t.forEach(function (t) {
      e.appendChild(t)
    })
  }, sre.EnrichMathml.functionApplication_ = function (e, t) {
    var r = sre.SemanticAttr.functionApplication();
    return !!(e && t && e.textContent && t.textContent && e.textContent === r && t.textContent === r && "true" === t.getAttribute(sre.EnrichMathml.Attribute.ADDED)) && (sre.DomUtil.replaceNode(e, t), !0)
  }, sre.EnrichMathml.mathmlLca_ = function (e) {
    var t = sre.EnrichMathml.attachedElement_(e);
    if (!t) return {
      valid: !1
      , node: null
    };
    if (e = sre.EnrichMathml.attachedElement_(e.slice()
        .reverse()), t === e) return {
      valid: !0
      , node: t
    };
    var r = sre.EnrichMathml.pathToRoot_(t)
      , t = sre.EnrichMathml.pathToRoot_(e, function (e) {
        return -1 !== r.indexOf(e)
      });
    e = t[0];
    var s = r.indexOf(e);
    return -1 === s ? {
      valid: !1
      , node: null
    } : {
      valid: sre.EnrichMathml.validLca_(r[s + 1], t[1])
      , node: e
    }
  }, sre.EnrichMathml.attachedElement_ = function (e) {
    for (var t = 0, r = null; !r && t < e.length;) e[t].parentNode && (r = e[t]), t++;
    return r
  }, sre.EnrichMathml.pathToRoot_ = function (e, t) {
    for (var r = t || function (e) {
        return !1
      }, s = [e]; !r(e) && !sre.SemanticUtil.hasMathTag(e) && e.parentNode;) e = sre.EnrichMathml.parentNode_(e), s.unshift(e);
    return s
  }, sre.EnrichMathml.validLca_ = function (e, t) {
    return !(!e || !t || e.previousSibling || t.nextSibling)
  }, sre.EnrichMathml.ascendNewNode = function (e) {
    for (; !sre.SemanticUtil.hasMathTag(e) && sre.EnrichMathml.unitChild_(e);) e = sre.EnrichMathml.parentNode_(e);
    return e
  }, sre.EnrichMathml.unitChild_ = function (e) {
    var t = sre.EnrichMathml.parentNode_(e);
    return !(!t || !sre.SemanticUtil.hasEmptyTag(t)) && sre.DomUtil.toArray(t.childNodes)
      .every(function (t) {
        return t === e || sre.SemanticUtil.hasIgnoreTag(t)
      })
  }, sre.EnrichMathml.parentNode_ = function (e) {
    return e.parentNode
  }, sre.EnrichMathml.simpleCollapseStructure = function (e) {
    return "number" == typeof e
  }, sre.EnrichMathml.interleaveIds = function (e, t) {
    return sre.BaseUtil.interleaveLists(sre.EnrichMathml.collapsedLeafs(e), sre.EnrichMathml.collapsedLeafs(t))
  }, sre.EnrichMathml.collapsedLeafs = function (e) {
    var t = function (e) {
      return sre.EnrichMathml.simpleCollapseStructure(e) ? [e] : e.slice(1)
    };
    return Array.prototype.slice.call(arguments, 0)
      .reduce(function (e, r) {
        return e.concat(t(r))
      }, [])
  }, sre.EnrichMathml.addCollapsedAttribute = function (e, t) {
    var r = function (e) {
      return sre.EnrichMathml.simpleCollapseStructure(e) ? e.toString() : "(" + e.map(r)
        .join(" ") + ")"
    };
    e.setAttribute(sre.EnrichMathml.Attribute.COLLAPSED, r(t))
  }, sre.EnrichMathml.cloneContentNode = function (e) {
    if (e.mathml.length) return sre.EnrichMathml.walkTree(e);
    var t = sre.EnrichMathml.SETTINGS.implicit ? sre.EnrichMathml.createInvisibleOperator_(e) : sre.SystemExternal.document.createElement("mrow");
    return e.mathml = [t], t
  }, sre.EnrichMathml.makeIdList = function (e) {
    return e.map(function (e) {
        return e.id
      })
      .join(",")
  }, sre.EnrichMathml.setAttributes = function (e, t) {
    e.setAttribute(sre.EnrichMathml.Attribute.TYPE, t.type), e.setAttribute(sre.EnrichMathml.Attribute.ROLE, t.role), e.setAttribute(sre.EnrichMathml.Attribute.ID, t.id), t.childNodes.length && e.setAttribute(sre.EnrichMathml.Attribute.CHILDREN, sre.EnrichMathml.makeIdList(t.childNodes)), t.contentNodes.length && e.setAttribute(sre.EnrichMathml.Attribute.CONTENT, sre.EnrichMathml.makeIdList(t.contentNodes)), t.parent && e.setAttribute(sre.EnrichMathml.Attribute.PARENT, t.parent.id), sre.Engine.getInstance()
      .speech && sre.EnrichMathml.addSpeech(e, t)
  }, sre.EnrichMathml.addSpeech = function (e, t) {
    var r = sre.DomUtil.parseInput("<stree>" + t.toString() + "</stree>", sre.EnrichMathml.Error)
      , r = sre.SpeechRuleEngine.getInstance()
      .evaluateNode(r)
      , r = sre.AuditoryDescription.toSimpleString(r);
    e.setAttribute(sre.EnrichMathml.Attribute.SPEECH, r)
  }, sre.EnrichMathml.combineContentChildren_ = function (e, t, r) {
    switch (sre.EnrichMathml.setOperatorAttribute_(e, t), e.type) {
    case sre.SemanticAttr.Type.RELSEQ:
    case sre.SemanticAttr.Type.INFIXOP:
    case sre.SemanticAttr.Type.MULTIREL:
      return sre.BaseUtil.interleaveLists(r, t);
    case sre.SemanticAttr.Type.PREFIXOP:
      return t.concat(r);
    case sre.SemanticAttr.Type.POSTFIXOP:
      return r.concat(t);
    case sre.SemanticAttr.Type.FENCED:
      return r.unshift(t[0]), r.push(t[1]), r;
    case sre.SemanticAttr.Type.PUNCTUATED:
      if (e.role === sre.SemanticAttr.Role.TEXT) return sre.BaseUtil.interleaveLists(r, t);
      for (var s, n, i = [], a = 0, l = 0; s = r[a], n = t[l]; a++) s.getAttribute(sre.EnrichMathml.Attribute.ID) == n.getAttribute(sre.EnrichMathml.Attribute.ID) && (l++, i.push(s));
      return sre.EnrichMathml.setOperatorAttribute_(e, i), r;
    case sre.SemanticAttr.Type.APPL:
      return [r[0], t[0], r[1]];
    case sre.SemanticAttr.Type.ROOT:
      return [r[1], r[0]];
    default:
      return r
    }
  }, sre.EnrichMathml.rewriteMfenced = function (e) {
    if ("MFENCED" !== sre.SemanticUtil.tagName(e)) return e;
    for (var t, r = sre.SystemExternal.document.createElement("mrow"), s = 0; t = e.attributes[s]; s++) - 1 === ["open", "close", "separators"].indexOf(t.name) && r.setAttribute(t.name, t.value);
    return sre.DomUtil.toArray(e.childNodes)
      .forEach(function (e) {
        r.appendChild(e)
      }), sre.DomUtil.replaceNode(e, r), r
  }, sre.EnrichMathml.createInvisibleOperator_ = function (e) {
    var t = sre.SystemExternal.document.createElement("mo")
      , r = sre.SystemExternal.document.createTextNode(e.textContent);
    return t.appendChild(r), sre.EnrichMathml.setAttributes(t, e), t.setAttribute(sre.EnrichMathml.Attribute.ADDED, "true"), t
  }, sre.EnrichMathml.setOperatorAttribute_ = function (e, t) {
    var r = e.type + (e.textContent ? "," + e.textContent : "");
    t.forEach(function (e) {
      sre.EnrichMathml.getInnerNode(e)
        .setAttribute(sre.EnrichMathml.Attribute.OPERATOR, r)
    })
  }, sre.EnrichMathml.getInnerNode = function (e) {
    var t = sre.DomUtil.toArray(e.childNodes);
    if (!t) return e;
    for (var r, t = t.filter(function (e) {
        return e.nodeType === sre.DomUtil.NodeType.ELEMENT_NODE && !sre.SemanticUtil.hasIgnoreTag(e)
      }), s = [], n = 0; r = t[n]; n++)
      if (sre.SemanticUtil.hasEmptyTag(r)) {
        var i = sre.EnrichMathml.getInnerNode(r);
        i && i !== r && s.push(i)
      } else s.push(r);
    return 1 === s.length ? s[0] : e
  }, sre.EnrichMathml.formattedOutput = function (e, t, r, s) {
    s = s || !1, sre.EnrichMathml.formattedOutput_(e, "Original MathML", s), sre.EnrichMathml.formattedOutput_(r, "Semantic Tree", s), sre.EnrichMathml.formattedOutput_(t, "Semantically enriched MathML", s)
  }, sre.EnrichMathml.formattedOutput_ = function (e, t, r) {
    e = sre.SemanticTree.formatXml(e.toString()), r ? console.log(t + ":\n```html\n" + sre.EnrichMathml.removeAttributePrefix(e) + "\n```\n") : console.log(e)
  }, sre.EnrichMathml.removeAttributePrefix = function (e) {
    return e.toString()
      .replace(new RegExp(sre.EnrichMathml.ATTRIBUTE_PREFIX_, "g"), "")
  }, sre.EnrichMathml.printNodeList__ = function (e, t) {
    console.log(e), sre.DomUtil.toArray(t)
      .forEach(function (e) {
        console.log(e.toString())
      }), console.log("<<<<<<<<<<<<<<<<<")
  }, sre.CaseDoubleScript = function (e) {
    sre.AbstractEnrichCase.call(this, e), this.mml = e.mathmlTree
  }, goog.inherits(sre.CaseDoubleScript, sre.AbstractEnrichCase), sre.CaseDoubleScript.test = function (e) {
    if (!e.mathmlTree) return !1;
    var t = sre.SemanticUtil.tagName(e.mathmlTree);
    return "MSUBSUP" === t && e.type === sre.SemanticAttr.Type.SUPERSCRIPT || "MUNDEROVER" === t && e.type === sre.SemanticAttr.Type.OVERSCORE
  }, sre.CaseDoubleScript.prototype.getMathml = function () {
    var e = this.semantic.childNodes[1]
      , t = this.semantic.childNodes[0]
      , r = t.childNodes[0]
      , s = t.childNodes[1]
      , n = sre.EnrichMathml.walkTree(e)
      , i = sre.EnrichMathml.walkTree(r)
      , a = sre.EnrichMathml.walkTree(s);
    return sre.EnrichMathml.setAttributes(this.mml, this.semantic), this.mml.setAttribute(sre.EnrichMathml.Attribute.CHILDREN, sre.EnrichMathml.makeIdList([r, s, e])), [i, a, n].forEach(goog.bind(function (e) {
      sre.EnrichMathml.getInnerNode(e)
        .setAttribute(sre.EnrichMathml.Attribute.PARENT, this.mml.getAttribute(sre.EnrichMathml.Attribute.ID))
    }, this)), this.mml.setAttribute(sre.EnrichMathml.Attribute.TYPE, t.role), sre.EnrichMathml.addCollapsedAttribute(this.mml, [this.semantic.id, [t.id, r.id, s.id], e.id]), this.mml
  }, sre.CaseMultiindex = function (e) {
    sre.AbstractEnrichCase.call(this, e), this.mml = e.mathmlTree
  }, goog.inherits(sre.CaseMultiindex, sre.AbstractEnrichCase), sre.CaseMultiindex.prototype.completeMultiscript = function (e, t) {
    var r = sre.DomUtil.toArray(this.mml.childNodes)
      .slice(1)
      , s = 0
      , n = goog.bind(function (e) {
        for (var t, n = 0; t = e[n]; n++) {
          var i = r[s];
          if (i && t == sre.EnrichMathml.getInnerNode(i)
            .getAttribute(sre.EnrichMathml.Attribute.ID)) sre.EnrichMathml.getInnerNode(i)
            .setAttribute(sre.EnrichMathml.Attribute.PARENT, this.semantic.id), s++;
          else {
            var a = this.semantic.querySelectorAll(function (e) {
              return e.id === t
            });
            this.mml.insertBefore(sre.CaseMultiindex.createNone_(a[0]), i)
          }
        }
      }, this);
    n(e), r[s] && "MPRESCRIPTS" !== sre.SemanticUtil.tagName(r[s]) ? this.mml.insertBefore(r[s], sre.SystemExternal.document.createElement("mprescripts")) : s++, n(t)
  }, sre.CaseMultiindex.createNone_ = function (e) {
    var t = sre.SystemExternal.document.createElement("none");
    return e && sre.EnrichMathml.setAttributes(t, e), t.setAttribute(sre.EnrichMathml.Attribute.ADDED, "true"), t
  }, sre.CaseMultiindex.multiscriptIndex = function (e) {
    if (e.type === sre.SemanticAttr.Type.PUNCTUATED && e.contentNodes[0].role === sre.SemanticAttr.Role.DUMMY) {
      for (var t, r = e.role, s = e.parent.id, n = [e.id], i = 0; t = e.childNodes[i]; i++) {
        var a = sre.EnrichMathml.walkTree(t)
          , a = sre.EnrichMathml.getInnerNode(a);
        a.setAttribute(sre.EnrichMathml.Attribute.PARENT, s), a.setAttribute(sre.EnrichMathml.Attribute.ROLE, r), n.push(t.id)
      }
      return n
    }
    return sre.EnrichMathml.walkTree(e), e.id
  }, sre.CaseTensor = function (e) {
    sre.CaseMultiindex.call(this, e)
  }, goog.inherits(sre.CaseTensor, sre.CaseMultiindex), sre.CaseTensor.test = function (e) {
    return e.mathmlTree && e.type === sre.SemanticAttr.Type.TENSOR
  }, sre.CaseTensor.prototype.getMathml = function () {
    sre.EnrichMathml.walkTree(this.semantic.childNodes[0]);
    var e = sre.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1])
      , t = sre.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[2])
      , r = sre.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[3])
      , s = sre.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[4]);
    sre.EnrichMathml.setAttributes(this.mml, this.semantic);
    var n = [this.semantic.id, e, t, r, s];
    return n.every(sre.EnrichMathml.simpleCollapseStructure) || sre.EnrichMathml.addCollapsedAttribute(this.mml, n), n = sre.EnrichMathml.collapsedLeafs(e, t, r, s), n.unshift(this.semantic.childNodes[0].id), this.mml.setAttribute(sre.EnrichMathml.Attribute.CHILDREN, n.join(",")), this.completeMultiscript(sre.EnrichMathml.interleaveIds(r, s), sre.EnrichMathml.interleaveIds(e, t)), this.mml
  }, sre.CaseLine = function (e) {
    sre.AbstractEnrichCase.call(this, e), this.mml = e.mathmlTree
  }, goog.inherits(sre.CaseLine, sre.AbstractEnrichCase), sre.CaseLine.test = function (e) {
    return e.mathmlTree && e.type === sre.SemanticAttr.Type.LINE
  }, sre.CaseLine.prototype.getMathml = function () {
    return this.semantic.childNodes.length && sre.EnrichMathml.walkTree(this.semantic.childNodes[0]), sre.EnrichMathml.setAttributes(this.mml, this.semantic), this.mml
  }, sre.CaseMultiscripts = function (e) {
    sre.CaseMultiindex.call(this, e)
  }, goog.inherits(sre.CaseMultiscripts, sre.CaseMultiindex), sre.CaseMultiscripts.test = function (e) {
    return !!e.mathmlTree && ("MMULTISCRIPTS" === sre.SemanticUtil.tagName(e.mathmlTree) && (e.type === sre.SemanticAttr.Type.SUPERSCRIPT || e.type === sre.SemanticAttr.Type.SUBSCRIPT))
  }, sre.CaseMultiscripts.prototype.getMathml = function () {
    if (sre.EnrichMathml.setAttributes(this.mml, this.semantic), this.semantic.childNodes[0] && this.semantic.childNodes[0].role === sre.SemanticAttr.Role.SUBSUP) {
      var e = this.semantic.childNodes[0]
        , t = e.childNodes[0]
        , r = sre.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1])
        , s = sre.CaseMultiindex.multiscriptIndex(e.childNodes[1])
        , n = [this.semantic.id, [e.id, t.id, s], r];
      sre.EnrichMathml.addCollapsedAttribute(this.mml, n), this.mml.setAttribute(sre.EnrichMathml.Attribute.TYPE, e.role), this.completeMultiscript(sre.EnrichMathml.interleaveIds(s, r), [])
    } else t = this.semantic.childNodes[0], r = sre.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]), sre.EnrichMathml.simpleCollapseStructure(r) || (n = [this.semantic.id, t.id, r], sre.EnrichMathml.addCollapsedAttribute(this.mml, n));
    return e = sre.EnrichMathml.collapsedLeafs(s || [], r), r = sre.EnrichMathml.walkTree(t), sre.EnrichMathml.getInnerNode(r)
      .setAttribute(sre.EnrichMathml.Attribute.PARENT, this.semantic.id), e.unshift(t.id), this.mml.setAttribute(sre.EnrichMathml.Attribute.CHILDREN, e.join(",")), this.mml
  }, sre.CaseEmbellished = function (e) {
    sre.AbstractEnrichCase.call(this, e), this.ofenceMml = this.ofence = this.fencedMml = this.fenced = null, this.ofenceMap = {}, this.cfenceMml = this.cfence = null, this.cfenceMap = {}, this.parentCleanup = []
  }, goog.inherits(sre.CaseEmbellished, sre.AbstractEnrichCase), sre.CaseEmbellished.test = function (e) {
    return e.mathmlTree && e.fencePointer
  }, sre.CaseEmbellished.prototype.getMathml = function () {
    return this.getFenced_(), this.fencedMml = sre.EnrichMathml.walkTree(this.fenced), this.getFencesMml_(), this.rewrite_()
  }, sre.CaseEmbellished.prototype.getFenced_ = function () {
    for (var e = this.semantic; e.type !== sre.SemanticAttr.Type.FENCED;) e = e.childNodes[0];
    this.fenced = e.childNodes[0], this.ofence = e.contentNodes[0], this.cfence = e.contentNodes[1], sre.CaseEmbellished.fencedMap_(this.ofence, this.ofenceMap), sre.CaseEmbellished.fencedMap_(this.cfence, this.cfenceMap)
  }, sre.CaseEmbellished.fencedMap_ = function (e, t) {
    t[e.id] = e.mathmlTree, e.embellished && sre.CaseEmbellished.fencedMap_(e.childNodes[0], t)
  }, sre.CaseEmbellished.prototype.getFencesMml_ = function () {
    for (var e = this.semantic, t = Object.keys(this.ofenceMap), r = Object.keys(this.cfenceMap); !(this.ofenceMml && this.cfenceMml || e === this.fenced);) - 1 === t.indexOf(e.fencePointer) || this.ofenceMml || (this.ofenceMml = e.mathmlTree), -1 === r.indexOf(e.fencePointer) || this.cfenceMml || (this.cfenceMml = e.mathmlTree), e = e.childNodes[0];
    this.ofenceMml || (this.ofenceMml = this.ofence.mathmlTree), this.cfenceMml || (this.cfenceMml = this.cfence.mathmlTree), this.ofenceMml && (this.ofenceMml = sre.EnrichMathml.ascendNewNode(this.ofenceMml)), this.cfenceMml && (this.cfenceMml = sre.EnrichMathml.ascendNewNode(this.cfenceMml))
  }, sre.CaseEmbellished.prototype.rewrite_ = function () {
    var e = this.semantic
      , t = null
      , r = this.introduceNewLayer_();
    for (sre.EnrichMathml.setAttributes(r, this.fenced.parent); e.type !== sre.SemanticAttr.Type.FENCED;) {
      var s = e.mathmlTree
        , n = this.specialCase_(e, s);
      if (n) e = n;
      else {
        sre.EnrichMathml.setAttributes(s, e);
        for (var i, n = [], a = 1; i = e.childNodes[a]; a++) n.push(sre.EnrichMathml.walkTree(i));
        e = e.childNodes[0]
      }
      n = sre.SystemExternal.document.createElement("dummy"), a = r.parentNode, i = s.childNodes[0], sre.DomUtil.replaceNode(s, n), sre.DomUtil.replaceNode(r, s), sre.DomUtil.replaceNode(s.childNodes[0], r), sre.DomUtil.replaceNode(n, i), s.parentNode = a, r = s.childNodes[0], t || (t = s)
    }
    return sre.EnrichMathml.walkTree(this.ofence), sre.EnrichMathml.walkTree(this.cfence), this.cleanupParents_(), t || r
  }, sre.CaseEmbellished.prototype.specialCase_ = function (e, t) {
    var r = sre.SemanticUtil.tagName(t)
      , s = null;
    if ("MSUBSUP" === r) var s = e.childNodes[0]
      , n = sre.CaseDoubleScript;
    else "MMULTISCRIPTS" !== r || e.type !== sre.SemanticAttr.Type.SUPERSCRIPT && e.type !== sre.SemanticAttr.Type.SUBSCRIPT || (n = sre.CaseMultiscripts, s = e.childNodes[0] && e.childNodes[0].role === sre.SemanticAttr.Role.SUBSUP ? e.childNodes[0] : e);
    if (!s) return null;
    var r = s.childNodes[0]
      , i = sre.CaseEmbellished.makeEmptyNode_(r.id);
    return s.childNodes[0] = i, t = new n(e)
      .getMathml(), s.childNodes[0] = r, this.parentCleanup.push(t), s.childNodes[0]
  }, sre.CaseEmbellished.makeEmptyNode_ = function (e) {
    var t = sre.SystemExternal.document.createElement("mrow");
    return e = new sre.SemanticTree.Node(e), e.type = sre.SemanticAttr.Type.EMPTY, e.mathmlTree = t, e
  }, sre.CaseEmbellished.prototype.introduceNewLayer_ = function () {
    var e = this.fullFence(this.ofenceMml)
      , t = this.fullFence(this.cfenceMml)
      , r = sre.SystemExternal.document.createElement("mrow");
    if (sre.DomUtil.replaceNode(this.fencedMml, r), r.appendChild(this.fencedMml), r.insertBefore(e, this.fencedMml), r.appendChild(t), !r.parentNode) {
      for (e = sre.SystemExternal.document.createElement("mrow"); 0 < r.childNodes.length;) e.appendChild(r.childNodes[0]);
      r.appendChild(e), r = e
    }
    return r
  }, sre.CaseEmbellished.prototype.fullFence = function (e) {
    for (var t = this.fencedMml.parentNode; e.parentNode && e.parentNode !== t;) e = e.parentNode;
    return e
  }, sre.CaseEmbellished.prototype.cleanupParents_ = function () {
    this.parentCleanup.forEach(function (e) {
      var t = e.childNodes[1].getAttribute(sre.EnrichMathml.Attribute.PARENT);
      e.childNodes[0].setAttribute(sre.EnrichMathml.Attribute.PARENT, t)
    })
  }, sre.CaseTable = function (e) {
    sre.AbstractEnrichCase.call(this, e), this.mml = e.mathmlTree
  }, goog.inherits(sre.CaseTable, sre.AbstractEnrichCase), sre.CaseTable.test = function (e) {
    return e.mathmlTree && (e.type === sre.SemanticAttr.Type.MATRIX || e.type === sre.SemanticAttr.Type.VECTOR || e.type === sre.SemanticAttr.Type.CASES)
  }, sre.CaseTable.prototype.getMathml = function () {
    var e = sre.EnrichMathml.cloneContentNode(this.semantic.contentNodes[0])
      , t = this.semantic.contentNodes[1] ? sre.EnrichMathml.cloneContentNode(this.semantic.contentNodes[1]) : null;
    return this.semantic.childNodes.map(sre.EnrichMathml.walkTree), "MFENCED" === sre.SemanticUtil.tagName(this.mml) ? (this.mml.insertBefore(e, this.mml.childNodes[0]), t && this.mml.appendChild(t), this.mml = sre.EnrichMathml.rewriteMfenced(this.mml)) : (e = [e, this.mml], t && e.push(t), this.mml = sre.EnrichMathml.introduceNewLayer(e)), sre.EnrichMathml.setAttributes(this.mml, this.semantic), this.mml
  }, sre.EnrichCases = function () {}, sre.EnrichCaseFactory.cases.push({
    test: sre.CaseEmbellished.test
    , constr: sre.CaseEmbellished
  }, {
    test: sre.CaseDoubleScript.test
    , constr: sre.CaseDoubleScript
  }, {
    test: sre.CaseTensor.test
    , constr: sre.CaseTensor
  }, {
    test: sre.CaseMultiscripts.test
    , constr: sre.CaseMultiscripts
  }, {
    test: sre.CaseLine.test
    , constr: sre.CaseLine
  }, {
    test: sre.CaseTable.test
    , constr: sre.CaseTable
  }), sre.Enrich = {}, sre.Enrich.semanticMathmlNode = function (e) {
    e = e.cloneNode(!0);
    var t = new sre.SemanticTree(e);
    return sre.EnrichMathml.enrich(e, t)
  }, sre.Enrich.semanticMathmlSync = function (e) {
    return e = sre.DomUtil.parseInput(e), sre.Enrich.semanticMathmlNode(e)
  }, sre.Enrich.semanticMathml = function (e, t) {
    if (sre.Engine.isReady()) {
      var r = sre.DomUtil.parseInput(e);
      t(sre.Enrich.semanticMathmlNode(r))
    } else setTimeout(function () {
      sre.Enrich.semanticMathml(e, t)
    }, 500)
  }, sre.Enrich.testTranslation__ = function (e) {
    return sre.Debugger.getInstance()
      .init(), e = sre.Enrich.semanticMathmlSync(sre.Enrich.prepareMmlString(e))
      .toString(), sre.EnrichMathml.removeAttributePrefix(e), sre.Debugger.getInstance()
      .exit(), e
  }, sre.Enrich.prepareMmlString = function (e) {
    return e.match(/^<math/) || (e = "<math>" + e), e.match(/\/math>$/) || (e += "</math>"), e
  }, sre.System = function () {
    this.version = "0.8"
  }, goog.addSingletonGetter(sre.System), sre.System.Error = function (e) {
    Error.call(this), this.message = e || "", this.name = "System Error"
  }, goog.inherits(sre.System.Error, Error), sre.System.prototype.setupEngine = function (e) {
    var t = sre.Engine.getInstance();
    t.style = e.style || t.style, t.domain = e.domain || t.domain, t.semantics = !!e.semantics, void 0 !== e.cache && (t.withCache = !!e.cache), t.mode = e.mode || t.mode, t.speech = !!e.speech, sre.SpeechRuleEngine.getInstance()
      .parameterize(sre.MathmlStore.getInstance()), sre.SpeechRuleEngine.getInstance()
      .dynamicCstr = sre.MathStore.createDynamicConstraint(t.domain, t.style)
  }, sre.System.prototype.processExpression = function (e) {
    try {
      var t = sre.DomUtil.parseInput(e, sre.System.Error);
      sre.Engine.getInstance()
        .semantics && (t = this.getSemanticTree_(t)), sre.Debugger.getInstance()
        .generateOutput(goog.bind(function () {
          return t.toString()
        }, this))
    } catch (r) {
      return console.log("Parse Error: " + r.message), ""
    }
    return sre.SpeechRuleEngine.getInstance()
      .clearCache(), e = sre.SpeechRuleEngine.getInstance()
      .evaluateNode(t), sre.AuditoryDescription.toSimpleString(e)
  }, sre.System.prototype.getSemanticTree_ = function (e) {
    return e = sre.Semantic.getTree(e), sre.Engine.getInstance()
      .mode === sre.Engine.Mode.HTTP ? e.childNodes[0] : sre.DomUtil.parseInput(e.toString(), sre.System.Error)
  }, sre.System.prototype.processFile_ = function (e) {
    try {
      var t = sre.SystemExternal.fs.readFileSync(e, {
        encoding: "utf8"
      })
    } catch (r) {
      throw new sre.System.Error("Can not open file: " + e)
    }
    return this.processExpression(t)
  }, sre.System.prototype.processFile = function (e, t) {
    var r = this.processFile_(e);
    if (t) try {
      sre.SystemExternal.fs.writeFileSync(t, r)
    } catch (s) {
      throw new sre.System.Error("Can not write to file: " + t)
    } else console.log(r)
  }, sre.Browser = {}, sre.System.getInstance()
  .setupEngine({
    mode: sre.Engine.Mode.HTTP
  });
