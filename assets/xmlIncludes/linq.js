! function (t, n) {
  var e = {
      Identity: function (t) {
        return t
      }
      , True: function () {
        return !0
      }
      , Blank: function () {}
    }
    , r = {
      Boolean: typeof !0
      , Number: "number"
      , String: "string"
      , Object: typeof {}
      , Undefined: typeof n
      , Function: "function"
    }
    , o = {
      createLambda: function (t) {
        if (null == t) return e.Identity;
        if (typeof t == r.String) {
          if ("" == t) return e.Identity;
          if (t.indexOf("=>") == -1) {
            for (var n, o = new RegExp("[$]+", "g"), u = 0; n = o.exec(t);) {
              var i = n[0].length;
              i > u && (u = i)
            }
            for (var c = [], a = 1; a <= u; a++) {
              for (var f = "", s = 0; s < a; s++) f += "$";
              c.push(f)
            }
            var l = Array.prototype.join.call(c, ",");
            return new Function(l, "return " + t)
          }
          var p = t.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
          return new Function(p[1], "return " + p[2])
        }
        return t
      }
      , isIEnumerable: function (t) {
        if (typeof Enumerator !== r.Undefined) try {
          return new Enumerator(t), !0
        } catch (n) {}
        return !1
      }
      , defineProperty: null != Object.defineProperties ? function (t, n, e) {
        Object.defineProperty(t, n, {
          enumerable: !1
          , configurable: !0
          , writable: !0
          , value: e
        })
      } : function (t, n, e) {
        t[n] = e
      }
      , compare: function (t, n) {
        return t === n ? 0 : t > n ? 1 : -1
      }
      , dispose: function (t) {
        null != t && t.dispose()
      }
    }
    , u = {
      Before: 0
      , Running: 1
      , After: 2
    }
    , i = function (t, n, e) {
      var r = new c
        , o = u.Before;
      this.current = r.current, this.moveNext = function () {
        try {
          switch (o) {
          case u.Before:
            o = u.Running, t();
          case u.Running:
            return !!n.apply(r) || (this.dispose(), !1);
          case u.After:
            return !1
          }
        } catch (e) {
          throw this.dispose(), e
        }
      }, this.dispose = function () {
        if (o == u.Running) try {
          e()
        } finally {
          o = u.After
        }
      }
    }
    , c = function () {
      var t = null;
      this.current = function () {
        return t
      }, this.yieldReturn = function (n) {
        return t = n, !0
      }, this.yieldBreak = function () {
        return !1
      }
    }
    , a = function (t) {
      this.getEnumerator = t
    };
  a.Utils = {}, a.Utils.createLambda = function (t) {
    return o.createLambda(t)
  }, a.Utils.createEnumerable = function (t) {
    return new a(t)
  }, a.Utils.createEnumerator = function (t, n, e) {
    return new i(t, n, e)
  }, a.Utils.extendTo = function (t) {
    var n, e = t.prototype;
    t === Array ? (n = p.prototype, o.defineProperty(e, "getSource", function () {
      return this
    })) : (n = a.prototype, o.defineProperty(e, "getEnumerator", function () {
      return a.from(this)
        .getEnumerator()
    }));
    for (var r in n) {
      var u = n[r];
      e[r] != u && (null != e[r] && (r += "ByLinq", e[r] == u) || u instanceof Function && o.defineProperty(e, r, u))
    }
  }, a.choice = function () {
    var t = arguments;
    return new a(function () {
      return new i(function () {
        t = t[0] instanceof Array ? t[0] : null != t[0].getEnumerator ? t[0].toArray() : t
      }, function () {
        return this.yieldReturn(t[Math.floor(Math.random() * t.length)])
      }, e.Blank)
    })
  }, a.cycle = function () {
    var t = arguments;
    return new a(function () {
      var n = 0;
      return new i(function () {
        t = t[0] instanceof Array ? t[0] : null != t[0].getEnumerator ? t[0].toArray() : t
      }, function () {
        return n >= t.length && (n = 0), this.yieldReturn(t[n++])
      }, e.Blank)
    })
  }, a.empty = function () {
    return new a(function () {
      return new i(e.Blank, function () {
        return !1
      }, e.Blank)
    })
  }, a.from = function (t) {
    if (null == t) return a.empty();
    if (t instanceof a) return t;
    if (typeof t == r.Number || typeof t == r.Boolean) return a.repeat(t, 1);
    if (typeof t == r.String) return new a(function () {
      var n = 0;
      return new i(e.Blank, function () {
        return n < t.length && this.yieldReturn(t.charAt(n++))
      }, e.Blank)
    });
    if (typeof t != r.Function) {
      if (typeof t.length == r.Number) return new p(t);
      if (!(t instanceof Object) && o.isIEnumerable(t)) return new a(function () {
        var n, r = !0;
        return new i(function () {
          n = new Enumerator(t)
        }, function () {
          return r ? r = !1 : n.moveNext(), !n.atEnd() && this.yieldReturn(n.item())
        }, e.Blank)
      });
      if (typeof Windows === r.Object && typeof t.first === r.Function) return new a(function () {
        var n, r = !0;
        return new i(function () {
          n = t.first()
        }, function () {
          return r ? r = !1 : n.moveNext(), n.hasCurrent ? this.yieldReturn(n.current) : this.yieldBreak()
        }, e.Blank)
      })
    }
    return new a(function () {
      var n = []
        , r = 0;
      return new i(function () {
        for (var e in t) {
          var r = t[e];
          r instanceof Function || !Object.prototype.hasOwnProperty.call(t, e) || n.push({
            key: e
            , value: r
          })
        }
      }, function () {
        return r < n.length && this.yieldReturn(n[r++])
      }, e.Blank)
    })
  }, a.make = function (t) {
    return a.repeat(t, 1)
  }, a.matches = function (t, n, r) {
    return null == r && (r = ""), n instanceof RegExp && (r += n.ignoreCase ? "i" : "", r += n.multiline ? "m" : "", n = n.source), r.indexOf("g") === -1 && (r += "g"), new a(function () {
      var o;
      return new i(function () {
        o = new RegExp(n, r)
      }, function () {
        var n = o.exec(t);
        return !!n && this.yieldReturn(n)
      }, e.Blank)
    })
  }, a.range = function (t, n, r) {
    return null == r && (r = 1), new a(function () {
      var o, u = 0;
      return new i(function () {
        o = t - r
      }, function () {
        return u++<<
        n ? this.yieldReturn(o += r) : this.yieldBreak()
      }, e.Blank)
    })
  }, a.rangeDown = function (t, n, r) {
    return null == r && (r = 1), new a(function () {
      var o, u = 0;
      return new i(function () {
        o = t + r
      }, function () {
        return u++<<
        n ? this.yieldReturn(o -= r) : this.yieldBreak()
      }, e.Blank)
    })
  }, a.rangeTo = function (t, n, r) {
    return null == r && (r = 1), new a(t < n ? function () {
      var o;
      return new i(function () {
        o = t - r
      }, function () {
        var t = o += r;
        return t <= n ? this.yieldReturn(t) : this.yieldBreak()
      }, e.Blank)
    } : function () {
      var o;
      return new i(function () {
        o = t + r
      }, function () {
        var t = o -= r;
        return t >= n ? this.yieldReturn(t) : this.yieldBreak()
      }, e.Blank)
    })
  }, a.repeat = function (t, n) {
    return null != n ? a.repeat(t)
      .take(n) : new a(function () {
        return new i(e.Blank, function () {
          return this.yieldReturn(t)
        }, e.Blank)
      })
  }, a.repeatWithFinalize = function (t, n) {
    return t = o.createLambda(t), n = o.createLambda(n), new a(function () {
      var e;
      return new i(function () {
        e = t()
      }, function () {
        return this.yieldReturn(e)
      }, function () {
        null != e && (n(e), e = null)
      })
    })
  }, a.generate = function (t, n) {
    return null != n ? a.generate(t)
      .take(n) : (t = o.createLambda(t), new a(function () {
        return new i(e.Blank, function () {
          return this.yieldReturn(t())
        }, e.Blank)
      }))
  }, a.toInfinity = function (t, n) {
    return null == t && (t = 0), null == n && (n = 1), new a(function () {
      var r;
      return new i(function () {
        r = t - n
      }, function () {
        return this.yieldReturn(r += n)
      }, e.Blank)
    })
  }, a.toNegativeInfinity = function (t, n) {
    return null == t && (t = 0), null == n && (n = 1), new a(function () {
      var r;
      return new i(function () {
        r = t + n
      }, function () {
        return this.yieldReturn(r -= n)
      }, e.Blank)
    })
  }, a.unfold = function (t, n) {
    return n = o.createLambda(n), new a(function () {
      var r, o = !0;
      return new i(e.Blank, function () {
        return o ? (o = !1, r = t, this.yieldReturn(r)) : (r = n(r), this.yieldReturn(r))
      }, e.Blank)
    })
  }, a.defer = function (t) {
    return new a(function () {
      var n;
      return new i(function () {
        n = a.from(t())
          .getEnumerator()
      }, function () {
        return n.moveNext() ? this.yieldReturn(n.current()) : this.yieldBreak()
      }, function () {
        o.dispose(n)
      })
    })
  }, a.prototype.traverseBreadthFirst = function (t, n) {
    var e = this;
    return t = o.createLambda(t), n = o.createLambda(n), new a(function () {
      var r, u = 0
        , c = [];
      return new i(function () {
        r = e.getEnumerator()
      }, function () {
        for (;;) {
          if (r.moveNext()) return c.push(r.current()), this.yieldReturn(n(r.current(), u));
          var e = a.from(c)
            .selectMany(function (n) {
              return t(n)
            });
          if (!e.any()) return !1;
          u++, c = [], o.dispose(r), r = e.getEnumerator()
        }
      }, function () {
        o.dispose(r)
      })
    })
  }, a.prototype.traverseDepthFirst = function (t, n) {
    var e = this;
    return t = o.createLambda(t), n = o.createLambda(n), new a(function () {
      var r, u = [];
      return new i(function () {
        r = e.getEnumerator()
      }, function () {
        for (;;) {
          if (r.moveNext()) {
            var e = n(r.current(), u.length);
            return u.push(r), r = a.from(t(r.current()))
              .getEnumerator(), this.yieldReturn(e)
          }
          if (u.length <= 0) return !1;
          o.dispose(r), r = u.pop()
        }
      }, function () {
        try {
          o.dispose(r)
        } finally {
          a.from(u)
            .forEach(function (t) {
              t.dispose()
            })
        }
      })
    })
  }, a.prototype.flatten = function () {
    var t = this;
    return new a(function () {
      var n, r = null;
      return new i(function () {
        n = t.getEnumerator()
      }, function () {
        for (;;) {
          if (null != r) {
            if (r.moveNext()) return this.yieldReturn(r.current());
            r = null
          }
          if (n.moveNext()) {
            if (n.current() instanceof Array) {
              o.dispose(r), r = a.from(n.current())
                .selectMany(e.Identity)
                .flatten()
                .getEnumerator();
              continue
            }
            return this.yieldReturn(n.current())
          }
          return !1
        }
      }, function () {
        try {
          o.dispose(n)
        } finally {
          o.dispose(r)
        }
      })
    })
  }, a.prototype.pairwise = function (t) {
    var n = this;
    return t = o.createLambda(t), new a(function () {
      var e;
      return new i(function () {
        e = n.getEnumerator(), e.moveNext()
      }, function () {
        var n = e.current();
        return !!e.moveNext() && this.yieldReturn(t(n, e.current()))
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.scan = function (t, n) {
    var e;
    null == n ? (n = o.createLambda(t), e = !1) : (n = o.createLambda(n), e = !0);
    var r = this;
    return new a(function () {
      var u, c, a = !0;
      return new i(function () {
        u = r.getEnumerator()
      }, function () {
        if (a) {
          if (a = !1, e) return this.yieldReturn(c = t);
          if (u.moveNext()) return this.yieldReturn(c = u.current())
        }
        return !!u.moveNext() && this.yieldReturn(c = n(c, u.current()))
      }, function () {
        o.dispose(u)
      })
    })
  }, a.prototype.select = function (t) {
    if (t = o.createLambda(t), t.length <= 1) return new y(this, null, t);
    var n = this;
    return new a(function () {
      var e, r = 0;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        return !!e.moveNext() && this.yieldReturn(t(e.current(), r++))
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.selectMany = function (t, e) {
    var r = this;
    return t = o.createLambda(t), null == e && (e = function (t, n) {
      return n
    }), e = o.createLambda(e), new a(function () {
      var u, c = n
        , f = 0;
      return new i(function () {
        u = r.getEnumerator()
      }, function () {
        if (c === n && !u.moveNext()) return !1;
        do {
          if (null == c) {
            var r = t(u.current(), f++);
            c = a.from(r)
              .getEnumerator()
          }
          if (c.moveNext()) return this.yieldReturn(e(u.current(), c.current()));
          o.dispose(c), c = null
        } while (u.moveNext());
        return !1
      }, function () {
        try {
          o.dispose(u)
        } finally {
          o.dispose(c)
        }
      })
    })
  }, a.prototype.where = function (t) {
    if (t = o.createLambda(t), t.length <= 1) return new h(this, t);
    var n = this;
    return new a(function () {
      var e, r = 0;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        for (; e.moveNext();)
          if (t(e.current(), r++)) return this.yieldReturn(e.current());
        return !1
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.choose = function (t) {
    t = o.createLambda(t);
    var n = this;
    return new a(function () {
      var e, r = 0;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        for (; e.moveNext();) {
          var n = t(e.current(), r++);
          if (null != n) return this.yieldReturn(n)
        }
        return this.yieldBreak()
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.ofType = function (t) {
    var n;
    switch (t) {
    case Number:
      n = r.Number;
      break;
    case String:
      n = r.String;
      break;
    case Boolean:
      n = r.Boolean;
      break;
    case Function:
      n = r.Function;
      break;
    default:
      n = null
    }
    return null === n ? this.where(function (n) {
      return n instanceof t
    }) : this.where(function (t) {
      return typeof t === n
    })
  }, a.prototype.zip = function () {
    var t = arguments
      , n = o.createLambda(arguments[arguments.length - 1])
      , e = this;
    if (2 == arguments.length) {
      var r = arguments[0];
      return new a(function () {
        var t, u, c = 0;
        return new i(function () {
          t = e.getEnumerator(), u = a.from(r)
            .getEnumerator()
        }, function () {
          return !(!t.moveNext() || !u.moveNext()) && this.yieldReturn(n(t.current(), u.current(), c++))
        }, function () {
          try {
            o.dispose(t)
          } finally {
            o.dispose(u)
          }
        })
      })
    }
    return new a(function () {
      var r, u = 0;
      return new i(function () {
        var n = a.make(e)
          .concat(a.from(t)
            .takeExceptLast()
            .select(a.from))
          .select(function (t) {
            return t.getEnumerator()
          })
          .toArray();
        r = a.from(n)
      }, function () {
        if (r.all(function (t) {
            return t.moveNext()
          })) {
          var t = r.select(function (t) {
              return t.current()
            })
            .toArray();
          return t.push(u++), this.yieldReturn(n.apply(null, t))
        }
        return this.yieldBreak()
      }, function () {
        a.from(r)
          .forEach(o.dispose)
      })
    })
  }, a.prototype.merge = function () {
    var t = arguments
      , n = this;
    return new a(function () {
      var e, r = -1;
      return new i(function () {
        e = a.make(n)
          .concat(a.from(t)
            .select(a.from))
          .select(function (t) {
            return t.getEnumerator()
          })
          .toArray()
      }, function () {
        for (; e.length > 0;) {
          r = r >= e.length - 1 ? 0 : r + 1;
          var t = e[r];
          if (t.moveNext()) return this.yieldReturn(t.current());
          t.dispose(), e.splice(r--, 1)
        }
        return this.yieldBreak()
      }, function () {
        a.from(e)
          .forEach(o.dispose)
      })
    })
  }, a.prototype.join = function (t, r, u, c, f) {
    r = o.createLambda(r), u = o.createLambda(u), c = o.createLambda(c), f = o.createLambda(f);
    var s = this;
    return new a(function () {
      var l, p, h = null
        , y = 0;
      return new i(function () {
        l = s.getEnumerator(), p = a.from(t)
          .toLookup(u, e.Identity, f)
      }, function () {
        for (;;) {
          if (null != h) {
            var t = h[y++];
            if (t !== n) return this.yieldReturn(c(l.current(), t));
            t = null, y = 0
          }
          if (!l.moveNext()) return !1;
          var e = r(l.current());
          h = p.get(e)
            .toArray()
        }
      }, function () {
        o.dispose(l)
      })
    })
  }, a.prototype.groupJoin = function (t, n, r, u, c) {
    n = o.createLambda(n), r = o.createLambda(r), u = o.createLambda(u), c = o.createLambda(c);
    var f = this;
    return new a(function () {
      var s = f.getEnumerator()
        , l = null;
      return new i(function () {
        s = f.getEnumerator(), l = a.from(t)
          .toLookup(r, e.Identity, c)
      }, function () {
        if (s.moveNext()) {
          var t = l.get(n(s.current()));
          return this.yieldReturn(u(s.current(), t))
        }
        return !1
      }, function () {
        o.dispose(s)
      })
    })
  }, a.prototype.all = function (t) {
    t = o.createLambda(t);
    var n = !0;
    return this.forEach(function (e) {
      if (!t(e)) return n = !1, !1
    }), n
  }, a.prototype.any = function (t) {
    t = o.createLambda(t);
    var n = this.getEnumerator();
    try {
      if (0 == arguments.length) return n.moveNext();
      for (; n.moveNext();)
        if (t(n.current())) return !0;
      return !1
    } finally {
      o.dispose(n)
    }
  }, a.prototype.isEmpty = function () {
    return !this.any()
  }, a.prototype.concat = function () {
    var t = this;
    if (1 == arguments.length) {
      var n = arguments[0];
      return new a(function () {
        var e, r;
        return new i(function () {
          e = t.getEnumerator()
        }, function () {
          if (null == r) {
            if (e.moveNext()) return this.yieldReturn(e.current());
            r = a.from(n)
              .getEnumerator()
          }
          return !!r.moveNext() && this.yieldReturn(r.current())
        }, function () {
          try {
            o.dispose(e)
          } finally {
            o.dispose(r)
          }
        })
      })
    }
    var e = arguments;
    return new a(function () {
      var n;
      return new i(function () {
        n = a.make(t)
          .concat(a.from(e)
            .select(a.from))
          .select(function (t) {
            return t.getEnumerator()
          })
          .toArray()
      }, function () {
        for (; n.length > 0;) {
          var t = n[0];
          if (t.moveNext()) return this.yieldReturn(t.current());
          t.dispose(), n.splice(0, 1)
        }
        return this.yieldBreak()
      }, function () {
        a.from(n)
          .forEach(o.dispose)
      })
    })
  }, a.prototype.insert = function (t, n) {
    var e = this;
    return new a(function () {
      var r, u, c = 0
        , f = !1;
      return new i(function () {
        r = e.getEnumerator(), u = a.from(n)
          .getEnumerator()
      }, function () {
        return c == t && u.moveNext() ? (f = !0, this.yieldReturn(u.current())) : r.moveNext() ? (c++, this.yieldReturn(r.current())) : !(f || !u.moveNext()) && this.yieldReturn(u.current())
      }, function () {
        try {
          o.dispose(r)
        } finally {
          o.dispose(u)
        }
      })
    })
  }, a.prototype.alternate = function (t) {
    var n = this;
    return new a(function () {
      var e, r, u, c;
      return new i(function () {
        u = t instanceof Array || null != t.getEnumerator ? a.from(a.from(t)
          .toArray()) : a.make(t), r = n.getEnumerator(), r.moveNext() && (e = r.current())
      }, function () {
        for (;;) {
          if (null != c) {
            if (c.moveNext()) return this.yieldReturn(c.current());
            c = null
          } {
            if (null != e || !r.moveNext()) {
              if (null != e) {
                var t = e;
                return e = null, this.yieldReturn(t)
              }
              return this.yieldBreak()
            }
            e = r.current(), c = u.getEnumerator()
          }
        }
      }, function () {
        try {
          o.dispose(r)
        } finally {
          o.dispose(c)
        }
      })
    })
  }, a.prototype.contains = function (t, n) {
    n = o.createLambda(n);
    var e = this.getEnumerator();
    try {
      for (; e.moveNext();)
        if (n(e.current()) === t) return !0;
      return !1
    } finally {
      o.dispose(e)
    }
  }, a.prototype.defaultIfEmpty = function (t) {
    var e = this;
    return t === n && (t = null), new a(function () {
      var n, r = !0;
      return new i(function () {
        n = e.getEnumerator()
      }, function () {
        return n.moveNext() ? (r = !1, this.yieldReturn(n.current())) : !!r && (r = !1, this.yieldReturn(t))
      }, function () {
        o.dispose(n)
      })
    })
  }, a.prototype.distinct = function (t) {
    return this.except(a.empty(), t)
  }, a.prototype.distinctUntilChanged = function (t) {
    t = o.createLambda(t);
    var n = this;
    return new a(function () {
      var e, r, u;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        for (; e.moveNext();) {
          var n = t(e.current());
          if (u) return u = !1, r = n, this.yieldReturn(e.current());
          if (r !== n) return r = n, this.yieldReturn(e.current())
        }
        return this.yieldBreak()
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.except = function (t, n) {
    n = o.createLambda(n);
    var e = this;
    return new a(function () {
      var r, u;
      return new i(function () {
        r = e.getEnumerator(), u = new d(n), a.from(t)
          .forEach(function (t) {
            u.add(t)
          })
      }, function () {
        for (; r.moveNext();) {
          var t = r.current();
          if (!u.contains(t)) return u.add(t), this.yieldReturn(t)
        }
        return !1
      }, function () {
        o.dispose(r)
      })
    })
  }, a.prototype.intersect = function (t, n) {
    n = o.createLambda(n);
    var e = this;
    return new a(function () {
      var r, u, c;
      return new i(function () {
        r = e.getEnumerator(), u = new d(n), a.from(t)
          .forEach(function (t) {
            u.add(t)
          }), c = new d(n)
      }, function () {
        for (; r.moveNext();) {
          var t = r.current();
          if (!c.contains(t) && u.contains(t)) return c.add(t), this.yieldReturn(t)
        }
        return !1
      }, function () {
        o.dispose(r)
      })
    })
  }, a.prototype.sequenceEqual = function (t, n) {
    n = o.createLambda(n);
    var e = this.getEnumerator();
    try {
      var r = a.from(t)
        .getEnumerator();
      try {
        for (; e.moveNext();)
          if (!r.moveNext() || n(e.current()) !== n(r.current())) return !1;
        return !r.moveNext()
      } finally {
        o.dispose(r)
      }
    } finally {
      o.dispose(e)
    }
  }, a.prototype.union = function (t, e) {
    e = o.createLambda(e);
    var r = this;
    return new a(function () {
      var u, c, f;
      return new i(function () {
        u = r.getEnumerator(), f = new d(e)
      }, function () {
        var e;
        if (c === n) {
          for (; u.moveNext();)
            if (e = u.current(), !f.contains(e)) return f.add(e), this.yieldReturn(e);
          c = a.from(t)
            .getEnumerator()
        }
        for (; c.moveNext();)
          if (e = c.current(), !f.contains(e)) return f.add(e), this.yieldReturn(e);
        return !1
      }, function () {
        try {
          o.dispose(u)
        } finally {
          o.dispose(c)
        }
      })
    })
  }, a.prototype.orderBy = function (t) {
    return new f(this, t, (!1))
  }, a.prototype.orderByDescending = function (t) {
    return new f(this, t, (!0))
  }, a.prototype.reverse = function () {
    var t = this;
    return new a(function () {
      var n, r;
      return new i(function () {
        n = t.toArray(), r = n.length
      }, function () {
        return r > 0 && this.yieldReturn(n[--r])
      }, e.Blank)
    })
  }, a.prototype.shuffle = function () {
    var t = this;
    return new a(function () {
      var n;
      return new i(function () {
        n = t.toArray()
      }, function () {
        if (n.length > 0) {
          var t = Math.floor(Math.random() * n.length);
          return this.yieldReturn(n.splice(t, 1)[0])
        }
        return !1
      }, e.Blank)
    })
  }, a.prototype.weightedSample = function (t) {
    t = o.createLambda(t);
    var n = this;
    return new a(function () {
      var r, o = 0;
      return new i(function () {
        r = n.choose(function (n) {
            var e = t(n);
            return e <= 0 ? null : (o += e, {
              value: n
              , bound: o
            })
          })
          .toArray()
      }, function () {
        if (r.length > 0) {
          for (var t = Math.floor(Math.random() * o) + 1, n = -1, e = r.length; e - n > 1;) {
            var u = Math.floor((n + e) / 2);
            r[u].bound >= t ? e = u : n = u
          }
          return this.yieldReturn(r[e].value)
        }
        return this.yieldBreak()
      }, e.Blank)
    })
  }, a.prototype.groupBy = function (t, n, e, r) {
    var u = this;
    return t = o.createLambda(t), n = o.createLambda(n), null != e && (e = o.createLambda(e)), r = o.createLambda(r), new a(function () {
      var c;
      return new i(function () {
        c = u.toLookup(t, n, r)
          .toEnumerable()
          .getEnumerator()
      }, function () {
        for (; c.moveNext();) return null == e ? this.yieldReturn(c.current()) : this.yieldReturn(e(c.current()
          .key(), c.current()));
        return !1
      }, function () {
        o.dispose(c)
      })
    })
  }, a.prototype.partitionBy = function (t, n, e, r) {
    var u = this;
    t = o.createLambda(t), n = o.createLambda(n), r = o.createLambda(r);
    var c;
    return null == e ? (c = !1, e = function (t, n) {
      return new v(t, n)
    }) : (c = !0, e = o.createLambda(e)), new a(function () {
      var f, s, l, p = [];
      return new i(function () {
        f = u.getEnumerator(), f.moveNext() && (s = t(f.current()), l = r(s), p.push(n(f.current())))
      }, function () {
        for (var o; 1 == (o = f.moveNext()) && l === r(t(f.current()));) p.push(n(f.current()));
        if (p.length > 0) {
          var u = c ? e(s, a.from(p)) : e(s, p);
          return o ? (s = t(f.current()), l = r(s), p = [n(f.current())]) : p = [], this.yieldReturn(u)
        }
        return !1
      }, function () {
        o.dispose(f)
      })
    })
  }, a.prototype.buffer = function (t) {
    var n = this;
    return new a(function () {
      var e;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        for (var n = [], r = 0; e.moveNext();)
          if (n.push(e.current()), ++r >= t) return this.yieldReturn(n);
        return n.length > 0 && this.yieldReturn(n)
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.aggregate = function (t, n, e) {
    return (e = o.createLambda(e))(this.scan(t, n, e)
      .last())
  }, a.prototype.average = function (t) {
    t = o.createLambda(t);
    var n = 0
      , e = 0;
    return this.forEach(function (r) {
      n += t(r), ++e
    }), n / e
  }, a.prototype.count = function (t) {
    t = null == t ? e.True : o.createLambda(t);
    var n = 0;
    return this.forEach(function (e, r) {
      t(e, r) && ++n
    }), n
  }, a.prototype.max = function (t) {
    return null == t && (t = e.Identity), this.select(t)
      .aggregate(function (t, n) {
        return t > n ? t : n
      })
  }, a.prototype.min = function (t) {
    return null == t && (t = e.Identity), this.select(t)
      .aggregate(function (t, n) {
        return t < n ? t : n
      })
  }, a.prototype.maxBy = function (t) {
    return t = o.createLambda(t), this.aggregate(function (n, e) {
      return t(n) > t(e) ? n : e
    })
  }, a.prototype.minBy = function (t) {
    return t = o.createLambda(t), this.aggregate(function (n, e) {
      return t(n) < t(e) ? n : e
    })
  }, a.prototype.sum = function (t) {
    return null == t && (t = e.Identity), this.select(t)
      .aggregate(0, function (t, n) {
        return t + n
      })
  }, a.prototype.elementAt = function (t) {
    var n, e = !1;
    if (this.forEach(function (r, o) {
        if (o == t) return n = r, e = !0, !1
      }), !e) throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
    return n
  }, a.prototype.elementAtOrDefault = function (t, e) {
    e === n && (e = null);
    var r, o = !1;
    return this.forEach(function (n, e) {
      if (e == t) return r = n, o = !0, !1
    }), o ? r : e
  }, a.prototype.first = function (t) {
    if (null != t) return this.where(t)
      .first();
    var n, e = !1;
    if (this.forEach(function (t) {
        return n = t, e = !0, !1
      }), !e) throw new Error("first:No element satisfies the condition.");
    return n
  }, a.prototype.firstOrDefault = function (t, e) {
    if (e === n && (e = null), null != t) return this.where(t)
      .firstOrDefault(null, e);
    var r, o = !1;
    return this.forEach(function (t) {
      return r = t, o = !0, !1
    }), o ? r : e
  }, a.prototype.last = function (t) {
    if (null != t) return this.where(t)
      .last();
    var n, e = !1;
    if (this.forEach(function (t) {
        e = !0, n = t
      }), !e) throw new Error("last:No element satisfies the condition.");
    return n
  }, a.prototype.lastOrDefault = function (t, e) {
    if (e === n && (e = null), null != t) return this.where(t)
      .lastOrDefault(null, e);
    var r, o = !1;
    return this.forEach(function (t) {
      o = !0, r = t
    }), o ? r : e
  }, a.prototype.single = function (t) {
    if (null != t) return this.where(t)
      .single();
    var n, e = !1;
    if (this.forEach(function (t) {
        if (e) throw new Error("single:sequence contains more than one element.");
        e = !0, n = t
      }), !e) throw new Error("single:No element satisfies the condition.");
    return n
  }, a.prototype.singleOrDefault = function (t, e) {
    if (e === n && (e = null), null != t) return this.where(t)
      .singleOrDefault(null, e);
    var r, o = !1;
    return this.forEach(function (t) {
      if (o) throw new Error("single:sequence contains more than one element.");
      o = !0, r = t
    }), o ? r : e
  }, a.prototype.skip = function (t) {
    var n = this;
    return new a(function () {
      var e, r = 0;
      return new i(function () {
        for (e = n.getEnumerator(); r++<<
          t && e.moveNext(););
      }, function () {
        return !!e.moveNext() && this.yieldReturn(e.current())
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.skipWhile = function (t) {
    t = o.createLambda(t);
    var n = this;
    return new a(function () {
      var e, r = 0
        , u = !1;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        for (; !u;) {
          if (!e.moveNext()) return !1;
          if (!t(e.current(), r++)) return u = !0, this.yieldReturn(e.current())
        }
        return !!e.moveNext() && this.yieldReturn(e.current())
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.take = function (t) {
    var n = this;
    return new a(function () {
      var e, r = 0;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        return !!(r++<<
          t && e.moveNext()) && this.yieldReturn(e.current())
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.takeWhile = function (t) {
    t = o.createLambda(t);
    var n = this;
    return new a(function () {
      var e, r = 0;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        return !(!e.moveNext() || !t(e.current(), r++)) && this.yieldReturn(e.current())
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.takeExceptLast = function (t) {
    null == t && (t = 1);
    var n = this;
    return new a(function () {
      if (t <= 0) return n.getEnumerator();
      var e, r = [];
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        for (; e.moveNext();) {
          if (r.length == t) return r.push(e.current()), this.yieldReturn(r.shift());
          r.push(e.current())
        }
        return !1
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.takeFromLast = function (t) {
    if (t <= 0 || null == t) return a.empty();
    var n = this;
    return new a(function () {
      var e, r, u = [];
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        for (; e.moveNext();) u.length == t && u.shift(), u.push(e.current());
        return null == r && (r = a.from(u)
          .getEnumerator()), !!r.moveNext() && this.yieldReturn(r.current())
      }, function () {
        o.dispose(r)
      })
    })
  }, a.prototype.indexOf = function (t) {
    var n = null;
    return typeof t === r.Function ? this.forEach(function (e, r) {
      if (t(e, r)) return n = r, !1
    }) : this.forEach(function (e, r) {
      if (e === t) return n = r, !1
    }), null !== n ? n : -1
  }, a.prototype.lastIndexOf = function (t) {
    var n = -1;
    return typeof t === r.Function ? this.forEach(function (e, r) {
      t(e, r) && (n = r)
    }) : this.forEach(function (e, r) {
      e === t && (n = r)
    }), n
  }, a.prototype.asEnumerable = function () {
    return a.from(this)
  }, a.prototype.toArray = function () {
    var t = [];
    return this.forEach(function (n) {
      t.push(n)
    }), t
  }, a.prototype.toLookup = function (t, e, r) {
    t = o.createLambda(t), e = o.createLambda(e), r = o.createLambda(r);
    var u = new d(r);
    return this.forEach(function (r) {
      var o = t(r)
        , i = e(r)
        , c = u.get(o);
      c !== n ? c.push(i) : u.add(o, [i])
    }), new m(u)
  }, a.prototype.toObject = function (t, n) {
    t = o.createLambda(t), n = o.createLambda(n);
    var e = {};
    return this.forEach(function (r) {
      e[t(r)] = n(r)
    }), e
  }, a.prototype.toDictionary = function (t, n, e) {
    t = o.createLambda(t), n = o.createLambda(n), e = o.createLambda(e);
    var r = new d(e);
    return this.forEach(function (e) {
      r.add(t(e), n(e))
    }), r
  }, a.prototype.toJSONString = function (t, n) {
    if (typeof JSON === r.Undefined || null == JSON.stringify) throw new Error("toJSONString can't find JSON.stringify. This works native JSON support Browser or include json2.js");
    return JSON.stringify(this.toArray(), t, n)
  }, a.prototype.toJoinedString = function (t, n) {
    return null == t && (t = ""), null == n && (n = e.Identity), this.select(n)
      .toArray()
      .join(t)
  }, a.prototype.doAction = function (t) {
    var n = this;
    return t = o.createLambda(t), new a(function () {
      var e, r = 0;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        return !!e.moveNext() && (t(e.current(), r++), this.yieldReturn(e.current()))
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.forEach = function (t) {
    t = o.createLambda(t);
    var n = 0
      , e = this.getEnumerator();
    try {
      for (; e.moveNext() && t(e.current(), n++) !== !1;);
    } finally {
      o.dispose(e)
    }
  }, a.prototype.write = function (t, n) {
    null == t && (t = ""), n = o.createLambda(n);
    var e = !0;
    this.forEach(function (r) {
      e ? e = !1 : document.write(t), document.write(n(r))
    })
  }, a.prototype.writeLine = function (t) {
    t = o.createLambda(t), this.forEach(function (n) {
      document.writeln(t(n) + "<br />")
    })
  }, a.prototype.force = function () {
    var t = this.getEnumerator();
    try {
      for (; t.moveNext(););
    } finally {
      o.dispose(t)
    }
  }, a.prototype.letBind = function (t) {
    t = o.createLambda(t);
    var n = this;
    return new a(function () {
      var e;
      return new i(function () {
        e = a.from(t(n))
          .getEnumerator()
      }, function () {
        return !!e.moveNext() && this.yieldReturn(e.current())
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.share = function () {
    var t, n = this
      , r = !1;
    return new l(function () {
      return new i(function () {
        null == t && (t = n.getEnumerator())
      }, function () {
        if (r) throw new Error("enumerator is disposed");
        return !!t.moveNext() && this.yieldReturn(t.current())
      }, e.Blank)
    }, function () {
      r = !0, o.dispose(t)
    })
  }, a.prototype.memoize = function () {
    var t, n, r = this
      , u = !1;
    return new l(function () {
      var o = -1;
      return new i(function () {
        null == n && (n = r.getEnumerator(), t = [])
      }, function () {
        if (u) throw new Error("enumerator is disposed");
        return o++, t.length <= o ? !!n.moveNext() && this.yieldReturn(t[o] = n.current()) : this.yieldReturn(t[o])
      }, e.Blank)
    }, function () {
      u = !0, o.dispose(n), t = null
    })
  }, a.prototype.catchError = function (t) {
    t = o.createLambda(t);
    var n = this;
    return new a(function () {
      var e;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        try {
          return !!e.moveNext() && this.yieldReturn(e.current())
        } catch (n) {
          return t(n), !1
        }
      }, function () {
        o.dispose(e)
      })
    })
  }, a.prototype.finallyAction = function (t) {
    t = o.createLambda(t);
    var n = this;
    return new a(function () {
      var e;
      return new i(function () {
        e = n.getEnumerator()
      }, function () {
        return !!e.moveNext() && this.yieldReturn(e.current())
      }, function () {
        try {
          o.dispose(e)
        } finally {
          t()
        }
      })
    })
  }, a.prototype.log = function (t) {
    return t = o.createLambda(t), this.doAction(function (n) {
      typeof console !== r.Undefined && console.log(t(n))
    })
  }, a.prototype.trace = function (t, n) {
    return null == t && (t = "Trace"), n = o.createLambda(n), this.doAction(function (e) {
      typeof console !== r.Undefined && console.log(t, n(e))
    })
  };
  var f = function (t, n, e, r) {
    this.source = t, this.keySelector = o.createLambda(n), this.descending = e, this.parent = r
  };
  f.prototype = new a, f.prototype.createOrderedEnumerable = function (t, n) {
    return new f(this.source, t, n, this)
  }, f.prototype.thenBy = function (t) {
    return this.createOrderedEnumerable(t, !1)
  }, f.prototype.thenByDescending = function (t) {
    return this.createOrderedEnumerable(t, !0)
  }, f.prototype.getEnumerator = function () {
    var t, n, r = this
      , o = 0;
    return new i(function () {
      t = [], n = [], r.source.forEach(function (e, r) {
        t.push(e), n.push(r)
      });
      var e = s.create(r, null);
      e.GenerateKeys(t), n.sort(function (t, n) {
        return e.compare(t, n)
      })
    }, function () {
      return o < n.length && this.yieldReturn(t[n[o++]])
    }, e.Blank)
  };
  var s = function (t, n, e) {
    this.keySelector = t, this.descending = n, this.child = e, this.keys = null
  };
  s.create = function (t, n) {
    var e = new s(t.keySelector, t.descending, n);
    return null != t.parent ? s.create(t.parent, e) : e
  }, s.prototype.GenerateKeys = function (t) {
    for (var n = t.length, e = this.keySelector, r = new Array(n), o = 0; o < n; o++) r[o] = e(t[o]);
    this.keys = r, null != this.child && this.child.GenerateKeys(t)
  }, s.prototype.compare = function (t, n) {
    var e = o.compare(this.keys[t], this.keys[n]);
    return 0 == e ? null != this.child ? this.child.compare(t, n) : o.compare(t, n) : this.descending ? -e : e
  };
  var l = function (t, n) {
    this.dispose = n, a.call(this, t)
  };
  l.prototype = new a;
  var p = function (t) {
    this.getSource = function () {
      return t
    }
  };
  p.prototype = new a, p.prototype.any = function (t) {
    return null == t ? this.getSource()
      .length > 0 : a.prototype.any.apply(this, arguments)
  }, p.prototype.count = function (t) {
    return null == t ? this.getSource()
      .length : a.prototype.count.apply(this, arguments)
  }, p.prototype.elementAt = function (t) {
    var n = this.getSource();
    return 0 <= t && t < n.length ? n[t] : a.prototype.elementAt.apply(this, arguments)
  }, p.prototype.elementAtOrDefault = function (t, e) {
    e === n && (e = null);
    var r = this.getSource();
    return 0 <= t && t < r.length ? r[t] : e
  }, p.prototype.first = function (t) {
    var n = this.getSource();
    return null == t && n.length > 0 ? n[0] : a.prototype.first.apply(this, arguments)
  }, p.prototype.firstOrDefault = function (t, e) {
    if (e === n && (e = null), null != t) return a.prototype.firstOrDefault.apply(this, arguments);
    var r = this.getSource();
    return r.length > 0 ? r[0] : e
  }, p.prototype.last = function (t) {
    var n = this.getSource();
    return null == t && n.length > 0 ? n[n.length - 1] : a.prototype.last.apply(this, arguments)
  }, p.prototype.lastOrDefault = function (t, e) {
    if (e === n && (e = null), null != t) return a.prototype.lastOrDefault.apply(this, arguments);
    var r = this.getSource();
    return r.length > 0 ? r[r.length - 1] : e
  }, p.prototype.skip = function (t) {
    var n = this.getSource();
    return new a(function () {
      var r;
      return new i(function () {
        r = t < 0 ? 0 : t
      }, function () {
        return r < n.length && this.yieldReturn(n[r++])
      }, e.Blank)
    })
  }, p.prototype.takeExceptLast = function (t) {
    return null == t && (t = 1), this.take(this.getSource()
      .length - t)
  }, p.prototype.takeFromLast = function (t) {
    return this.skip(this.getSource()
      .length - t)
  }, p.prototype.reverse = function () {
    var t = this.getSource();
    return new a(function () {
      var n;
      return new i(function () {
        n = t.length
      }, function () {
        return n > 0 && this.yieldReturn(t[--n])
      }, e.Blank)
    })
  }, p.prototype.sequenceEqual = function (t, n) {
    return (!(t instanceof p || t instanceof Array) || null != n || a.from(t)
      .count() == this.count()) && a.prototype.sequenceEqual.apply(this, arguments)
  }, p.prototype.toJoinedString = function (t, n) {
    var e = this.getSource();
    return null == n && e instanceof Array ? (null == t && (t = ""), e.join(t)) : a.prototype.toJoinedString.apply(this, arguments)
  }, p.prototype.getEnumerator = function () {
    var t = this.getSource()
      , n = -1;
    return {
      current: function () {
        return t[n]
      }
      , moveNext: function () {
        return ++n < t.length
      }
      , dispose: e.Blank
    }
  };
  var h = function (t, n) {
    this.prevSource = t, this.prevPredicate = n
  };
  h.prototype = new a, h.prototype.where = function (t) {
    if (t = o.createLambda(t), t.length <= 1) {
      var n = this.prevPredicate
        , e = function (e) {
          return n(e) && t(e)
        };
      return new h(this.prevSource, e)
    }
    return a.prototype.where.call(this, t)
  }, h.prototype.select = function (t) {
    return t = o.createLambda(t), t.length <= 1 ? new y(this.prevSource, this.prevPredicate, t) : a.prototype.select.call(this, t)
  }, h.prototype.getEnumerator = function () {
    var t, n = this.prevPredicate
      , e = this.prevSource;
    return new i(function () {
      t = e.getEnumerator()
    }, function () {
      for (; t.moveNext();)
        if (n(t.current())) return this.yieldReturn(t.current());
      return !1
    }, function () {
      o.dispose(t)
    })
  };
  var y = function (t, n, e) {
    this.prevSource = t, this.prevPredicate = n, this.prevSelector = e
  };
  y.prototype = new a, y.prototype.where = function (t) {
    return t = o.createLambda(t), t.length <= 1 ? new h(this, t) : a.prototype.where.call(this, t)
  }, y.prototype.select = function (t) {
    if (t = o.createLambda(t), t.length <= 1) {
      var n = this.prevSelector
        , e = function (e) {
          return t(n(e))
        };
      return new y(this.prevSource, this.prevPredicate, e)
    }
    return a.prototype.select.call(this, t)
  }, y.prototype.getEnumerator = function () {
    var t, n = this.prevPredicate
      , e = this.prevSelector
      , r = this.prevSource;
    return new i(function () {
      t = r.getEnumerator()
    }, function () {
      for (; t.moveNext();)
        if (null == n || n(t.current())) return this.yieldReturn(e(t.current()));
      return !1
    }, function () {
      o.dispose(t)
    })
  };
  var d = function () {
      var t = function (t, n) {
          return Object.prototype.hasOwnProperty.call(t, n)
        }
        , o = function (t) {
          return null === t ? "null" : t === n ? "undefined" : typeof t.toString === r.Function ? t.toString() : Object.prototype.toString.call(t)
        }
        , u = function (t, n) {
          this.key = t, this.value = n, this.prev = null, this.next = null
        }
        , c = function () {
          this.first = null, this.last = null
        };
      c.prototype = {
        addLast: function (t) {
          null != this.last ? (this.last.next = t, t.prev = this.last, this.last = t) : this.first = this.last = t
        }
        , replace: function (t, n) {
          null != t.prev ? (t.prev.next = n, n.prev = t.prev) : this.first = n, null != t.next ? (t.next.prev = n, n.next = t.next) : this.last = n;
        }
        , remove: function (t) {
          null != t.prev ? t.prev.next = t.next : this.first = t.next, null != t.next ? t.next.prev = t.prev : this.last = t.prev
        }
      };
      var f = function (t) {
        this.countField = 0, this.entryList = new c, this.buckets = {}, this.compareSelector = null == t ? e.Identity : t
      };
      return f.prototype = {
        add: function (n, e) {
          var r = this.compareSelector(n)
            , i = o(r)
            , c = new u(n, e);
          if (t(this.buckets, i)) {
            for (var a = this.buckets[i], f = 0; f < a.length; f++)
              if (this.compareSelector(a[f].key) === r) return this.entryList.replace(a[f], c), void(a[f] = c);
            a.push(c)
          } else this.buckets[i] = [c];
          this.countField++, this.entryList.addLast(c)
        }
        , get: function (e) {
          var r = this.compareSelector(e)
            , u = o(r);
          if (!t(this.buckets, u)) return n;
          for (var i = this.buckets[u], c = 0; c < i.length; c++) {
            var a = i[c];
            if (this.compareSelector(a.key) === r) return a.value
          }
          return n
        }
        , set: function (n, e) {
          var r = this.compareSelector(n)
            , i = o(r);
          if (t(this.buckets, i))
            for (var c = this.buckets[i], a = 0; a < c.length; a++)
              if (this.compareSelector(c[a].key) === r) {
                var f = new u(n, e);
                return this.entryList.replace(c[a], f), c[a] = f, !0
              }
          return !1
        }
        , contains: function (n) {
          var e = this.compareSelector(n)
            , r = o(e);
          if (!t(this.buckets, r)) return !1;
          for (var u = this.buckets[r], i = 0; i < u.length; i++)
            if (this.compareSelector(u[i].key) === e) return !0;
          return !1
        }
        , clear: function () {
          this.countField = 0, this.buckets = {}, this.entryList = new c
        }
        , remove: function (n) {
          var e = this.compareSelector(n)
            , r = o(e);
          if (t(this.buckets, r))
            for (var u = this.buckets[r], i = 0; i < u.length; i++)
              if (this.compareSelector(u[i].key) === e) return this.entryList.remove(u[i]), u.splice(i, 1), 0 == u.length && delete this.buckets[r], void this.countField--
        }
        , count: function () {
          return this.countField
        }
        , toEnumerable: function () {
          var t = this;
          return new a(function () {
            var n;
            return new i(function () {
              n = t.entryList.first
            }, function () {
              if (null != n) {
                var t = {
                  key: n.key
                  , value: n.value
                };
                return n = n.next, this.yieldReturn(t)
              }
              return !1
            }, e.Blank)
          })
        }
      }, f
    }()
    , m = function (t) {
      this.count = function () {
        return t.count()
      }, this.get = function (n) {
        return a.from(t.get(n))
      }, this.contains = function (n) {
        return t.contains(n)
      }, this.toEnumerable = function () {
        return t.toEnumerable()
          .select(function (t) {
            return new v(t.key, t.value)
          })
      }
    }
    , v = function (t, n) {
      this.key = function () {
        return t
      }, p.call(this, n)
    };
  v.prototype = new p, typeof define === r.Function && define.amd ? define("linq", [], function () {
    return a
  }) : typeof module !== r.Undefined && module.exports ? module.exports = a : t.Enumerable = a
}(this);
