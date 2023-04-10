!(function () {
  "use strict"
  try {
    if ("undefined" != typeof document) {
      var e = document.createElement("style")
      e.appendChild(
        document.createTextNode(
          ".command.svelte-1bq7axd{padding:8px 12px}.command.svelte-1bq7axd:hover{cursor:pointer;background-color:#0003;color:var(--b3-theme-primary)}.command-selected.svelte-1bq7axd{color:var(--b3-theme-primary);background-color:#0003}.command-plugin.svelte-1bq7axd{font-size:14px}.command-shortcut.svelte-1bq7axd{font-size:12px;color:var(--color-text-3)}.plugin.svelte-bwhxpp span.remove.svelte-bwhxpp{display:none;color:var(--b3-theme-error);margin-left:4px}.plugin.svelte-bwhxpp:hover span.remove.svelte-bwhxpp{display:inline;cursor:pointer}.plugin.svelte-bwhxpp:hover span.remove.svelte-bwhxpp:hover{text-decoration:underline}.plugin-info.svelte-bj9chc{display:flex;align-items:center}.plugin-detail.svelte-bj9chc{margin-top:12px;width:100%}.plugin-name.svelte-bj9chc{display:inline;margin-right:6px;font-size:24px}.plugin-key.svelte-bj9chc{display:inline;font-size:16px}.plugin-manifest.svelte-bj9chc{margin-top:12px}.plugin-readme.svelte-bj9chc{margin-top:20px}.go-back.svelte-bj9chc{margin-left:12px;font-size:12px;height:24px}.go-back-icon.svelte-bj9chc{height:12px;width:12px;margin-right:4px}"
        )
      ),
        document.head.appendChild(e)
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t)
  }
})()
;(function () {
  var _a,
    _b,
    _c,
    commonjsGlobal =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    Reflect$1,
    Reflect2
  ;(Reflect2 = Reflect$1 || (Reflect$1 = {})),
    (function (t) {
      var n =
          "object" == typeof commonjsGlobal
            ? commonjsGlobal
            : "object" == typeof self
            ? self
            : "object" == typeof this
            ? this
            : Function("return this;")(),
        r = i(Reflect2)
      function i(e, t) {
        return function (n, r) {
          "function" != typeof e[n] && Object.defineProperty(e, n, { configurable: !0, writable: !0, value: r }),
            t && t(n, r)
        }
      }
      void 0 === n.Reflect ? (n.Reflect = Reflect2) : (r = i(n.Reflect, r)),
        (function (t) {
          var n = Object.prototype.hasOwnProperty,
            r = "function" == typeof Symbol,
            i = r && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
            o = r && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
            a = "function" == typeof Object.create,
            s = { __proto__: [] } instanceof Array,
            c = !a && !s,
            l = {
              create: a
                ? function () {
                    return ie(Object.create(null))
                  }
                : s
                ? function () {
                    return ie({ __proto__: null })
                  }
                : function () {
                    return ie({})
                  },
              has: c
                ? function (e, t) {
                    return n.call(e, t)
                  }
                : function (e, t) {
                    return t in e
                  },
              get: c
                ? function (e, t) {
                    return n.call(e, t) ? e[t] : void 0
                  }
                : function (e, t) {
                    return e[t]
                  },
            },
            u = Object.getPrototypeOf(Function),
            p = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL,
            d = p || "function" != typeof Map || "function" != typeof Map.prototype.entries ? te() : Map,
            h = p || "function" != typeof Set || "function" != typeof Set.prototype.entries ? ne() : Set,
            f = new (p || "function" != typeof WeakMap ? re() : WeakMap)()
          function g(e, t, n, r) {
            if (D(n)) {
              if (!H(e)) throw new TypeError()
              if (!Y(t)) throw new TypeError()
              return $(e, t)
            }
            if (!H(e)) throw new TypeError()
            if (!F(t)) throw new TypeError()
            if (!F(r) && !D(r) && !B(r)) throw new TypeError()
            return B(r) && (r = void 0), T(e, t, (n = V(n)), r)
          }
          function m(e, t) {
            function n(n, r) {
              if (!F(n)) throw new TypeError()
              if (!D(r) && !W(r)) throw new TypeError()
              k(e, t, n, r)
            }
            return n
          }
          function _(e, t, n, r) {
            if (!F(n)) throw new TypeError()
            return D(r) || (r = V(r)), k(e, t, n, r)
          }
          function y(e, t, n) {
            if (!F(t)) throw new TypeError()
            return D(n) || (n = V(n)), P(e, t, n)
          }
          function v(e, t, n) {
            if (!F(t)) throw new TypeError()
            return D(n) || (n = V(n)), I(e, t, n)
          }
          function b(e, t, n) {
            if (!F(t)) throw new TypeError()
            return D(n) || (n = V(n)), N(e, t, n)
          }
          function w(e, t, n) {
            if (!F(t)) throw new TypeError()
            return D(n) || (n = V(n)), R(e, t, n)
          }
          function E(e, t) {
            if (!F(e)) throw new TypeError()
            return D(t) || (t = V(t)), C(e, t)
          }
          function S(e, t) {
            if (!F(e)) throw new TypeError()
            return D(t) || (t = V(t)), x(e, t)
          }
          function A(e, t, n) {
            if (!F(t)) throw new TypeError()
            D(n) || (n = V(n))
            var r = O(t, n, !1)
            if (D(r)) return !1
            if (!r.delete(e)) return !1
            if (r.size > 0) return !0
            var i = f.get(t)
            return i.delete(n), i.size > 0 || f.delete(t), !0
          }
          function $(e, t) {
            for (var n = e.length - 1; n >= 0; --n) {
              var r = (0, e[n])(t)
              if (!D(r) && !B(r)) {
                if (!Y(r)) throw new TypeError()
                t = r
              }
            }
            return t
          }
          function T(e, t, n, r) {
            for (var i = e.length - 1; i >= 0; --i) {
              var o = (0, e[i])(t, n, r)
              if (!D(o) && !B(o)) {
                if (!F(o)) throw new TypeError()
                r = o
              }
            }
            return r
          }
          function O(e, t, n) {
            var r = f.get(e)
            if (D(r)) {
              if (!n) return
              ;(r = new d()), f.set(e, r)
            }
            var i = r.get(t)
            if (D(i)) {
              if (!n) return
              ;(i = new d()), r.set(t, i)
            }
            return i
          }
          function P(e, t, n) {
            if (I(e, t, n)) return !0
            var r = ee(t)
            return !B(r) && P(e, r, n)
          }
          function I(e, t, n) {
            var r = O(t, n, !1)
            return !D(r) && q(r.has(e))
          }
          function N(e, t, n) {
            if (I(e, t, n)) return R(e, t, n)
            var r = ee(t)
            return B(r) ? void 0 : N(e, r, n)
          }
          function R(e, t, n) {
            var r = O(t, n, !1)
            if (!D(r)) return r.get(e)
          }
          function k(e, t, n, r) {
            O(n, r, !0).set(e, t)
          }
          function C(e, t) {
            var n = x(e, t),
              r = ee(e)
            if (null === r) return n
            var i = C(r, t)
            if (i.length <= 0) return n
            if (n.length <= 0) return i
            for (var o = new h(), a = [], s = 0, c = n; s < c.length; s++) {
              var l = c[s]
              o.has(l) || (o.add(l), a.push(l))
            }
            for (var u = 0, p = i; u < p.length; u++) (l = p[u]), o.has(l) || (o.add(l), a.push(l))
            return a
          }
          function x(t, n) {
            var r = [],
              i = O(t, n, !1)
            if (D(i)) return r
            for (var o = X(i.keys()), a = 0; ; ) {
              var s = Q(o)
              if (!s) return (r.length = a), r
              var c = J(s)
              try {
                r[a] = c
              } catch (e) {
                try {
                  Z(o)
                } finally {
                  throw e
                }
              }
              a++
            }
          }
          function L(e) {
            if (null === e) return 1
            switch (typeof e) {
              case "undefined":
                return 0
              case "boolean":
                return 2
              case "string":
                return 3
              case "symbol":
                return 4
              case "number":
                return 5
              case "object":
                return null === e ? 1 : 6
              default:
                return 6
            }
          }
          function D(e) {
            return void 0 === e
          }
          function B(e) {
            return null === e
          }
          function M(e) {
            return "symbol" == typeof e
          }
          function F(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
          }
          function j(e, t) {
            switch (L(e)) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return e
            }
            var n = 3 === t ? "string" : 5 === t ? "number" : "default",
              r = z(e, i)
            if (void 0 !== r) {
              var o = r.call(e, n)
              if (F(o)) throw new TypeError()
              return o
            }
            return U(e, "default" === n ? "number" : n)
          }
          function U(e, t) {
            if ("string" === t) {
              var n = e.toString
              if (K(n) && !F((i = n.call(e)))) return i
              if (K((r = e.valueOf)) && !F((i = r.call(e)))) return i
            } else {
              var r
              if (K((r = e.valueOf)) && !F((i = r.call(e)))) return i
              var i,
                o = e.toString
              if (K(o) && !F((i = o.call(e)))) return i
            }
            throw new TypeError()
          }
          function q(e) {
            return !!e
          }
          function G(e) {
            return "" + e
          }
          function V(e) {
            var t = j(e, 3)
            return M(t) ? t : G(t)
          }
          function H(e) {
            return Array.isArray
              ? Array.isArray(e)
              : e instanceof Object
              ? e instanceof Array
              : "[object Array]" === Object.prototype.toString.call(e)
          }
          function K(e) {
            return "function" == typeof e
          }
          function Y(e) {
            return "function" == typeof e
          }
          function W(e) {
            switch (L(e)) {
              case 3:
              case 4:
                return !0
              default:
                return !1
            }
          }
          function z(e, t) {
            var n = e[t]
            if (null != n) {
              if (!K(n)) throw new TypeError()
              return n
            }
          }
          function X(e) {
            var t = z(e, o)
            if (!K(t)) throw new TypeError()
            var n = t.call(e)
            if (!F(n)) throw new TypeError()
            return n
          }
          function J(e) {
            return e.value
          }
          function Q(e) {
            var t = e.next()
            return !t.done && t
          }
          function Z(e) {
            var t = e.return
            t && t.call(e)
          }
          function ee(e) {
            var t = Object.getPrototypeOf(e)
            if ("function" != typeof e || e === u) return t
            if (t !== u) return t
            var n = e.prototype,
              r = n && Object.getPrototypeOf(n)
            if (null == r || r === Object.prototype) return t
            var i = r.constructor
            return "function" != typeof i || i === e ? t : i
          }
          function te() {
            var e = {},
              t = [],
              n = (function () {
                function e(e, t, n) {
                  ;(this._index = 0), (this._keys = e), (this._values = t), (this._selector = n)
                }
                return (
                  (e.prototype["@@iterator"] = function () {
                    return this
                  }),
                  (e.prototype[o] = function () {
                    return this
                  }),
                  (e.prototype.next = function () {
                    var e = this._index
                    if (e >= 0 && e < this._keys.length) {
                      var n = this._selector(this._keys[e], this._values[e])
                      return (
                        e + 1 >= this._keys.length
                          ? ((this._index = -1), (this._keys = t), (this._values = t))
                          : this._index++,
                        { value: n, done: !1 }
                      )
                    }
                    return { value: void 0, done: !0 }
                  }),
                  (e.prototype.throw = function (e) {
                    throw (this._index >= 0 && ((this._index = -1), (this._keys = t), (this._values = t)), e)
                  }),
                  (e.prototype.return = function (e) {
                    return (
                      this._index >= 0 && ((this._index = -1), (this._keys = t), (this._values = t)),
                      { value: e, done: !0 }
                    )
                  }),
                  e
                )
              })()
            return (function () {
              function t() {
                ;(this._keys = []), (this._values = []), (this._cacheKey = e), (this._cacheIndex = -2)
              }
              return (
                Object.defineProperty(t.prototype, "size", {
                  get: function () {
                    return this._keys.length
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.has = function (e) {
                  return this._find(e, !1) >= 0
                }),
                (t.prototype.get = function (e) {
                  var t = this._find(e, !1)
                  return t >= 0 ? this._values[t] : void 0
                }),
                (t.prototype.set = function (e, t) {
                  var n = this._find(e, !0)
                  return (this._values[n] = t), this
                }),
                (t.prototype.delete = function (t) {
                  var n = this._find(t, !1)
                  if (n >= 0) {
                    for (var r = this._keys.length, i = n + 1; i < r; i++)
                      (this._keys[i - 1] = this._keys[i]), (this._values[i - 1] = this._values[i])
                    return (
                      this._keys.length--,
                      this._values.length--,
                      t === this._cacheKey && ((this._cacheKey = e), (this._cacheIndex = -2)),
                      !0
                    )
                  }
                  return !1
                }),
                (t.prototype.clear = function () {
                  ;(this._keys.length = 0), (this._values.length = 0), (this._cacheKey = e), (this._cacheIndex = -2)
                }),
                (t.prototype.keys = function () {
                  return new n(this._keys, this._values, r)
                }),
                (t.prototype.values = function () {
                  return new n(this._keys, this._values, i)
                }),
                (t.prototype.entries = function () {
                  return new n(this._keys, this._values, a)
                }),
                (t.prototype["@@iterator"] = function () {
                  return this.entries()
                }),
                (t.prototype[o] = function () {
                  return this.entries()
                }),
                (t.prototype._find = function (e, t) {
                  return (
                    this._cacheKey !== e && (this._cacheIndex = this._keys.indexOf((this._cacheKey = e))),
                    this._cacheIndex < 0 &&
                      t &&
                      ((this._cacheIndex = this._keys.length), this._keys.push(e), this._values.push(void 0)),
                    this._cacheIndex
                  )
                }),
                t
              )
            })()
            function r(e, t) {
              return e
            }
            function i(e, t) {
              return t
            }
            function a(e, t) {
              return [e, t]
            }
          }
          function ne() {
            return (function () {
              function e() {
                this._map = new d()
              }
              return (
                Object.defineProperty(e.prototype, "size", {
                  get: function () {
                    return this._map.size
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.has = function (e) {
                  return this._map.has(e)
                }),
                (e.prototype.add = function (e) {
                  return this._map.set(e, e), this
                }),
                (e.prototype.delete = function (e) {
                  return this._map.delete(e)
                }),
                (e.prototype.clear = function () {
                  this._map.clear()
                }),
                (e.prototype.keys = function () {
                  return this._map.keys()
                }),
                (e.prototype.values = function () {
                  return this._map.values()
                }),
                (e.prototype.entries = function () {
                  return this._map.entries()
                }),
                (e.prototype["@@iterator"] = function () {
                  return this.keys()
                }),
                (e.prototype[o] = function () {
                  return this.keys()
                }),
                e
              )
            })()
          }
          function re() {
            var e = 16,
              t = l.create(),
              r = i()
            return (function () {
              function e() {
                this._key = i()
              }
              return (
                (e.prototype.has = function (e) {
                  var t = o(e, !1)
                  return void 0 !== t && l.has(t, this._key)
                }),
                (e.prototype.get = function (e) {
                  var t = o(e, !1)
                  return void 0 !== t ? l.get(t, this._key) : void 0
                }),
                (e.prototype.set = function (e, t) {
                  return (o(e, !0)[this._key] = t), this
                }),
                (e.prototype.delete = function (e) {
                  var t = o(e, !1)
                  return void 0 !== t && delete t[this._key]
                }),
                (e.prototype.clear = function () {
                  this._key = i()
                }),
                e
              )
            })()
            function i() {
              var e
              do {
                e = "@@WeakMap@@" + c()
              } while (l.has(t, e))
              return (t[e] = !0), e
            }
            function o(e, t) {
              if (!n.call(e, r)) {
                if (!t) return
                Object.defineProperty(e, r, { value: l.create() })
              }
              return e[r]
            }
            function a(e, t) {
              for (var n = 0; n < t; ++n) e[n] = (255 * Math.random()) | 0
              return e
            }
            function s(e) {
              return "function" == typeof Uint8Array
                ? "undefined" != typeof crypto
                  ? crypto.getRandomValues(new Uint8Array(e))
                  : "undefined" != typeof msCrypto
                  ? msCrypto.getRandomValues(new Uint8Array(e))
                  : a(new Uint8Array(e), e)
                : a(new Array(e), e)
            }
            function c() {
              var t = s(e)
              ;(t[6] = (79 & t[6]) | 64), (t[8] = (191 & t[8]) | 128)
              for (var n = "", r = 0; r < e; ++r) {
                var i = t[r]
                ;(4 !== r && 6 !== r && 8 !== r) || (n += "-"),
                  i < 16 && (n += "0"),
                  (n += i.toString(16).toLowerCase())
              }
              return n
            }
          }
          function ie(e) {
            return (e.__ = void 0), delete e.__, e
          }
          t("decorate", g),
            t("metadata", m),
            t("defineMetadata", _),
            t("hasMetadata", y),
            t("hasOwnMetadata", v),
            t("getMetadata", b),
            t("getOwnMetadata", w),
            t("getMetadataKeys", E),
            t("getOwnMetadataKeys", S),
            t("deleteMetadata", A)
        })(r)
    })(),
    window.siyuan.config.system.dataDir
  const VERSION$1 = "0.5.0",
    VERSION_URL = "https://gitee.com/zuoez02/siyuan-plugin-system/raw/main/VERSION",
    SCRIPT_URL = "https://gitee.com/zuoez02/siyuan-plugin-system/raw/main/main.js",
    PLUGIN_SYS_ABS_PATH = "/data/widgets/插件系统/plugin.js",
    config = () => ({ token: window.siyuan.config.api.token }),
    TYPES = {
      StorageManager: "StorageManager",
      PluginSystem: "PluginSystem",
      SystemManager: "PluginSystemLocalManager",
      PluginLoader: "PluginLoader",
      PluginFileManager: "PluginFileManager",
      EventBus: "EventBus",
      Shortcut: "Shortcut",
      CommandManager: "CommandManager",
      Store: "Store",
    }
  async function request(e, t) {
    let n = null
    return (
      await fetch(e, {
        body: JSON.stringify(t),
        method: "POST",
        headers: { Authorization: `Token ${config().token}` },
      }).then(function (e) {
        n = e.json()
      }),
      n
    )
  }
  async function parseBody(e) {
    let t = await e
    return 0 === t.code ? t.data : null
  }
  async function transactions(e, t = []) {
    const n = new URL(e.ws.ws.url)
    return parseBody(
      request("/api/transactions", {
        app: n.searchParams.get("app"),
        session: n.searchParams.get("id"),
        transactions: t,
      })
    )
  }
  async function sql(e) {
    return parseBody(request("/api/query/sql", { stmt: e }))
  }
  async function lsNotebooks(e) {
    return parseBody(request("/api/notebook/lsNotebooks", { stmt: e }))
  }
  async function getAnchor(t, n) {
    let r = `select * from blocks where id = '${(t = t.replace("((", "").replace("))", ""))}'`,
      i = await sql(r),
      o = ""
    if (i)
      try {
        o = i[0][n] ? i[0][n] : i[0].content ? i[0].content : t
      } catch (e) {
        o = "解析错误"
      }
    return o
  }
  async function openNotebook(e) {
    return parseBody(request("/api/notebook/openNotebook", { notebook: e }))
  }
  async function closeNotebook(e) {
    return parseBody(request("/api/notebook/closeNotebook", { notebook: e }))
  }
  async function renameNotebook(e, t) {
    return parseBody(request("/api/notebook/renameNotebook", { notebook: e, name: t }))
  }
  async function createNotebook(e) {
    return parseBody(request("/api/notebook/createNotebook", { name: e }))
  }
  async function removeNotebook(e) {
    return parseBody(request("/api/notebook/removeNotebook", { notebook: e }))
  }
  async function getNotebookConf(e) {
    return parseBody(request("/api/notebook/getNotebookConf", { notebook: e }))
  }
  async function setNotebookConf(e) {
    return parseBody(request("/api/notebook/setNotebookConf", { notebook: e }))
  }
  async function renameDoc(e, t, n) {
    return parseBody(request("/api/filetree/renameDoc", { notebook: e, path: t, title: n }))
  }
  async function removeDoc(e, t) {
    return parseBody(request("/api/filetree/removeDoc", { notebook: e, path: t }))
  }
  async function moveDoc(e, t, n, r) {
    return parseBody(request("/api/filetree/moveDoc", { fromNotebook: e, fromPath: t, toNotebook: n, toPath: r }))
  }
  async function getHPathByPath(e, t) {
    return parseBody(request("/api/filetree/getHPathByPath", { Notebook: e, Path: t }))
  }
  async function getHPathByID(e) {
    return parseBody(request("/api/filetree/getHPathByID", { id: e }))
  }
  async function getBlockAttrs(e) {
    return parseBody(request("/api/attr/getBlockAttrs", { id: e }))
  }
  async function getBlockByID(e) {
    let t = `select * from blocks where id ='${e}'`
    return (await sql(t))[0]
  }
  async function getBlockKramdown(e) {
    return parseBody(request("/api/block/getBlockKramdown", { id: e }))
  }
  async function getBlockBreadcrumb(e) {
    return parseBody(request("/api/block/getBlockBreadcrumb", { id: e }))
  }
  async function setBlockAttrs(e, t) {
    return parseBody(request("/api/attr/setBlockAttrs", { id: e, attrs: t }))
  }
  async function exportMdContent(e) {
    return parseBody(request("/api/export/exportMdContent", { id: e }))
  }
  async function getDocOutline(e) {
    return parseBody(request("/api/outline/getDocOutline", { id: e }))
  }
  async function listDocsByPath(e) {
    return parseBody(request("/api/filetree/listDocsByPath", { path: e }))
  }
  async function getBacklink(e) {
    return parseBody(request("/api/ref/getBacklink", { id: e, beforeLen: 10, k: "", mk: "" }))
  }
  async function searchEmbedBlock(e, t) {
    return parseBody(request("/api/search/searchEmbedBlock", { stmt: t, excludeIDs: e }))
  }
  async function getDoc(e) {
    return parseBody(request("/api/filetree/getDoc", { id: e, k: "", mode: 2, size: 36 }))
  }
  async function getFocusedDoc(e) {
    return parseBody(request("/api/filetree/getDoc", { id: e, k: "", mode: 0, size: 36 }))
  }
  async function getTag() {
    return parseBody(request("/api/tag/getTag", {}))
  }
  async function getLocalGraph(e, t, n, r) {
    return parseBody(request("/api/graph/getLocalGraph", { id: t, k: e, conf: n, reqId: r }))
  }
  async function getGraph(e, t, n) {
    return parseBody(request("/api/graph/getGraph", { k: e, conf: t, reqId: n }))
  }
  async function searchDocs(e) {
    return parseBody(request("/api/filetree/searchDocs", { k: e }))
  }
  async function searchBlock(e) {
    return parseBody(request("/api/search/searchBlock", { query: e }))
  }
  async function searchTemplate(e) {
    return parseBody(request("/api/search/searchTemplate", { k: e }))
  }
  async function createDocWithMd(e, t, n) {
    return parseBody(request("/api/filetree/createDocWithMd", { notebook: e, path: t, markdown: n }))
  }
  async function docSaveAsTemplate(e, t = !1) {
    return parseBody(request("/api/template/docSaveAsTemplate", { id: e, overwrite: t }))
  }
  async function render(e) {
    return parseBody(request("/api/template/render", e))
  }
  async function insertBlock(e, t, n) {
    let r = "/api/block/insertBlock"
    return parseBody(request(r, (n = { previousID: e, dataType: t, data: n })))
  }
  async function prependBlock(e, t, n) {
    let r = "/api/block/prependBlock"
    return parseBody(request(r, (n = { parentID: e, dataType: t, data: n })))
  }
  async function appendBlock(e, t, n) {
    let r = "/api/block/appendBlock"
    return parseBody(request(r, (n = { parentID: e, dataType: t, data: n })))
  }
  async function updateBlock(e, t, n) {
    let r = "/api/block/updateBlock"
    return parseBody(request(r, (n = { id: e, dataType: t, data: n })))
  }
  async function deleteBlock(e) {
    return parseBody(request("/api/block/deleteBlock", { id: e }))
  }
  async function getSysFonts() {
    return parseBody(request("/api/system/getSysFonts", null))
  }
  async function getFile(e, t = "text") {
    const n = await fetch("/api/file/getFile", {
      method: "POST",
      headers: { Authorization: `Token ${config().token}` },
      body: JSON.stringify({ path: e }),
    })
    if (200 === n.status) {
      if ("text" === t) return await n.text()
      if ("json" === t) return (await n.json()).data
    }
    return null
  }
  async function putFile(e, t, n = !1, r = Date.now()) {
    let i = new Blob([t]),
      o = new File([i], e.split("/").pop()),
      a = new FormData()
    a.append("path", e), a.append("file", o), a.append("isDir", String(n)), a.append("modTime", String(r))
    const s = await fetch("/api/file/putFile", {
      body: a,
      method: "POST",
      headers: { Authorization: `Token ${config().token}` },
    })
    return 200 === s.status ? await s.json() : null
  }
  async function readDir(e) {
    const t = await fetch("/api/file/readDir", {
      method: "POST",
      headers: { Authorization: `Token ${config().token}` },
      body: JSON.stringify({ path: e }),
    })
    return 200 === t.status ? (await t.json()).data : null
  }
  async function removeFile(e) {
    return 200 ===
      (
        await fetch("/api/file/removeFile", {
          method: "POST",
          headers: { Authorization: `Token ${config().token}` },
          body: JSON.stringify({ path: e }),
        })
      ).status
      ? void 0
      : null
  }
  const language = null == (_a = window.theme) ? void 0 : _a.languageMode
  async function pushMsg(e = null, t = null, n = 7e3) {
    return parseBody(request("/api/notification/pushMsg", { msg: e ? e[language] || e.other : t, timeout: n }))
  }
  async function pushErrMsg(e = null, t = null, n = 7e3) {
    return parseBody(request("/api/notification/pushErrMsg", { msg: e ? e[language] || e.other : t, timeout: n }))
  }
  async function setStorageVal(e, t) {
    return parseBody(request("/api/storage/setLocalStorageVal", { app: genUUID(), key: e, val: t }))
  }
  async function getLocalStorage() {
    return parseBody(request("/api/storage/getLocalStorage", null))
  }
  const serverApi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        appendBlock: appendBlock,
        closeNotebook: closeNotebook,
        createDocWithMd: createDocWithMd,
        createNotebook: createNotebook,
        deleteBlock: deleteBlock,
        docSaveAsTemplate: docSaveAsTemplate,
        exportMdContent: exportMdContent,
        getAnchor: getAnchor,
        getBacklink: getBacklink,
        getBlockAttrs: getBlockAttrs,
        getBlockBreadcrumb: getBlockBreadcrumb,
        getBlockByID: getBlockByID,
        getBlockKramdown: getBlockKramdown,
        getDoc: getDoc,
        getDocOutline: getDocOutline,
        getFile: getFile,
        getFocusedDoc: getFocusedDoc,
        getGraph: getGraph,
        getHPathByID: getHPathByID,
        getHPathByPath: getHPathByPath,
        getLocalGraph: getLocalGraph,
        getLocalStorage: getLocalStorage,
        getNotebookConf: getNotebookConf,
        getSysFonts: getSysFonts,
        getTag: getTag,
        insertBlock: insertBlock,
        listDocsByPath: listDocsByPath,
        lsNotebooks: lsNotebooks,
        moveDoc: moveDoc,
        openNotebook: openNotebook,
        parseBody: parseBody,
        prependBlock: prependBlock,
        pushErrMsg: pushErrMsg,
        pushMsg: pushMsg,
        putFile: putFile,
        readDir: readDir,
        removeDoc: removeDoc,
        removeFile: removeFile,
        removeNotebook: removeNotebook,
        renameDoc: renameDoc,
        renameNotebook: renameNotebook,
        render: render,
        request: request,
        searchBlock: searchBlock,
        searchDocs: searchDocs,
        searchEmbedBlock: searchEmbedBlock,
        searchTemplate: searchTemplate,
        setBlockAttrs: setBlockAttrs,
        setNotebookConf: setNotebookConf,
        setStorageVal: setStorageVal,
        sql: sql,
        transactions: transactions,
        updateBlock: updateBlock,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  )
  function insertBefore(e, t) {
    return e.insertAdjacentElement("beforebegin", t)
  }
  function insertAfter(e, t) {
    return e.insertAdjacentElement("afterend", t)
  }
  function addToolbarLeft(e) {
    var t
    const n = null == (t = document.getElementById("toolbar")) ? void 0 : t.getElementsByClassName("fn__ellipsis")
    n && insertBefore(n[0], e)
  }
  function addToolbarRight(e) {
    var t
    const n = null == (t = document.getElementById("toolbar")) ? void 0 : t.getElementsByClassName("fn__ellipsis")
    n && insertAfter(n[0], e)
  }
  const createLogger = (e) => getLogger(e),
    clientApi = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          addToolbarLeft: addToolbarLeft,
          addToolbarRight: addToolbarRight,
          createLogger: createLogger,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    menu = null == (_c = null == (_b = window.siyuan) ? void 0 : _b.menus) ? void 0 : _c.menu
  class Menu {
    constructor(e) {
      if (!menu) throw Error("Siyuan internal menu not found!")
      if (!e) throw Error("Menu must has an id, got empty or undefined!")
      menu.remove(), menu.element.setAttribute("data-name", e)
    }
    addItem(e) {
      return menu.append(e.element), this
    }
    addSeparator() {
      return this.addItem(new MenuItem({ type: "separator" })), this
    }
    showAtMouseEvent(e) {
      return menu.popup({ x: e.clientX, y: e.clientY }), this
    }
    showAtPosition(e) {
      return menu.popup({ x: e.x, y: e.y }), this
    }
    close() {
      menu.remove()
    }
  }
  class MenuItem {
    constructor(e) {
      if (
        ((this.element = document.createElement("button")),
        e.disabled && this.element.setAttribute("disabled", "disabled"),
        "separator" === e.type)
      )
        return void this.element.classList.add("b3-menu__separator")
      this.element.classList.add("b3-menu__item"),
        e.current && this.element.classList.add("b3-menu__item--selected"),
        e.click &&
          this.element.addEventListener("click", (t) => {
            this.element.getAttribute("disabled") ||
              (e.click(this.element),
              t.preventDefault(),
              t.stopImmediatePropagation(),
              t.stopPropagation(),
              window.siyuan.menus.menu.remove())
          })
      let t = `<span class="b3-menu__label">${e.label}</span>`
      if (
        ((t = e.iconHTML
          ? e.iconHTML + t
          : `<svg class="b3-menu__icon${
              ["HTML (SiYuan)", window.siyuan.languages.template].includes(e.label) ? " ft__error" : ""
            }" style="${"iconClose" === e.icon ? "height:10px;" : ""}"><use xlink:href="#${
              e.icon || ""
            }"></use></svg>${t}`),
        e.action && (t += `<svg class="b3-menu__action"><use xlink:href="#${e.action}"></use></svg>`),
        e.id && this.element.setAttribute("data-id", e.id),
        "readonly" === e.type && this.element.classList.add("b3-menu__item--readonly"),
        (this.element.innerHTML = t),
        e.bind && (this.element.classList.add("b3-menu__item--custom"), e.bind(this.element)),
        e.submenu)
      ) {
        const t = document.createElement("div")
        t.classList.add("b3-menu__submenu"),
          e.submenu.forEach((e) => {
            t.append(new MenuItem(e).element)
          }),
          this.element.insertAdjacentHTML(
            "beforeend",
            '<svg class="b3-menu__icon b3-menu__icon--arrow"><use xlink:href="#iconRight"></use></svg>'
          ),
          this.element.append(t)
      }
    }
  }
  class Dialog {
    constructor(e) {
      ;(this.disableClose = e.disableClose),
        (this.id = genUUID()),
        window.siyuan.dialogs.push(this),
        (this.destroyCallback = e.destroyCallback),
        (this.element = document.createElement("div")),
        (this.element.innerHTML = `<div class="b3-dialog">\n<div class="b3-dialog__scrim"${
          e.transparent ? 'style="background-color:transparent"' : ""
        }></div>\n<div class="b3-dialog__container" style="width:${
          e.width || "auto"
        }">\n  <svg class="b3-dialog__close fn__a${
          this.disableClose ? " fn__none" : ""
        }"><use xlink:href="#iconClose"></use></svg>\n  <div class="b3-dialog__header${
          e.title ? "" : " fn__none"
        }" onselectstart="return false;">${e.title || ""}</div>\n  <div style="height:${e.height || "auto"}">${
          e.content
        }</div>\n</div></div>`),
        this.element.querySelector(".b3-dialog__scrim").addEventListener("click", (e) => {
          this.disableClose || this.destroy(),
            e.preventDefault(),
            e.stopPropagation(),
            window.siyuan.menus.menu.remove()
        }),
        this.disableClose ||
          this.element.querySelector(".b3-dialog__close").addEventListener("click", (e) => {
            this.destroy(), e.preventDefault(), e.stopPropagation()
          }),
        document.body.append(this.element),
        e.disableAnimation
          ? this.element.classList.add("b3-dialog--open")
          : setTimeout(() => {
              this.element.classList.add("b3-dialog--open")
            }),
        window.siyuan.menus.menu.remove()
    }
    static destroyAll() {
      window.siyuan.dialogs.forEach((e) => e.destroy())
    }
    destroy() {
      this.element.remove(),
        window.siyuan.menus.menu.remove(),
        this.destroyCallback && this.destroyCallback(),
        window.siyuan.dialogs.find((e, t) => {
          if (e.id === this.id) return window.siyuan.dialogs.splice(t, 1), !0
        })
    }
    bindInput(e, t) {
      e.focus(),
        e.addEventListener("keydown", (e) => {
          if (!e.isComposing)
            return "Escape" === e.key
              ? (this.destroy(), e.preventDefault(), void e.stopPropagation())
              : void ("Enter" === e.key && t && (t(), e.preventDefault()))
          e.preventDefault()
        })
    }
  }
  class Plugin {
    onload() {}
    onunload() {}
    registerCommand(e) {}
    async loadStorage(e) {
      return null
    }
    async writeStorage(e, t) {}
  }
  const api = { clientApi: clientApi, serverApi: serverApi, Plugin: Plugin, Menu: Menu, Dialog: Dialog }
  class Notification {
    constructor(e) {
      this.option = e
    }
    show() {
      "error" === this.option.type
        ? pushErrMsg(null, this.option.message, this.option.timeout)
        : pushMsg(null, this.option.message, this.option.timeout)
    }
  }
  var z = Object.defineProperty,
    D = (e, t, n) => (t in e ? z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
    _$1 = (e, t, n) => (D(e, "symbol" != typeof t ? t + "" : t, n), n),
    P =
      typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof self < "u"
        ? self
        : {},
    b = {},
    W = {
      get exports() {
        return b
      },
      set exports(e) {
        b = e
      },
    },
    i,
    e,
    t2
  ;(i = W),
    (e = P),
    (t2 = function () {
      var e = function () {},
        t = "undefined",
        n = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
        r = ["trace", "debug", "info", "warn", "error"]
      function i(e, t) {
        var n = e[t]
        if ("function" == typeof n.bind) return n.bind(e)
        try {
          return Function.prototype.bind.call(n, e)
        } catch {
          return function () {
            return Function.prototype.apply.apply(n, [e, arguments])
          }
        }
      }
      function o() {
        console.log &&
          (console.log.apply
            ? console.log.apply(console, arguments)
            : Function.prototype.apply.apply(console.log, [console, arguments])),
          console.trace && console.trace()
      }
      function a(t, n) {
        for (var i = 0; i < r.length; i++) {
          var o = r[i]
          this[o] = i < t ? e : this.methodFactory(o, t, n)
        }
        this.log = this.debug
      }
      function s(e, n, r) {
        return function () {
          typeof console !== t && (a.call(this, n, r), this[e].apply(this, arguments))
        }
      }
      function c(r, a, c) {
        return (
          (function (r) {
            return (
              "debug" === r && (r = "log"),
              typeof console !== t &&
                ("trace" === r && n
                  ? o
                  : void 0 !== console[r]
                  ? i(console, r)
                  : void 0 !== console.log
                  ? i(console, "log")
                  : e)
            )
          })(r) || s.apply(this, arguments)
        )
      }
      function l(e, n, i) {
        var o,
          s = this
        n = n ?? "WARN"
        var l = "loglevel"
        function u() {
          var e
          if (typeof window !== t && l) {
            try {
              e = window.localStorage[l]
            } catch {}
            if (typeof e === t)
              try {
                var n = window.document.cookie,
                  r = n.indexOf(encodeURIComponent(l) + "=")
                ;-1 !== r && (e = /^([^;]+)/.exec(n.slice(r))[1])
              } catch {}
            return void 0 === s.levels[e] && (e = void 0), e
          }
        }
        "string" == typeof e ? (l += ":" + e) : "symbol" == typeof e && (l = void 0),
          (s.name = e),
          (s.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }),
          (s.methodFactory = i || c),
          (s.getLevel = function () {
            return o
          }),
          (s.setLevel = function (n, i) {
            if (
              ("string" == typeof n && void 0 !== s.levels[n.toUpperCase()] && (n = s.levels[n.toUpperCase()]),
              !("number" == typeof n && n >= 0 && n <= s.levels.SILENT))
            )
              throw "log.setLevel() called with invalid level: " + n
            if (
              ((o = n),
              !1 !== i &&
                (function (e) {
                  var n = (r[e] || "silent").toUpperCase()
                  if (typeof window !== t && l) {
                    try {
                      return void (window.localStorage[l] = n)
                    } catch {}
                    try {
                      window.document.cookie = encodeURIComponent(l) + "=" + n + ";"
                    } catch {}
                  }
                })(n),
              a.call(s, n, e),
              typeof console === t && n < s.levels.SILENT)
            )
              return "No console available for logging"
          }),
          (s.setDefaultLevel = function (e) {
            ;(n = e), u() || s.setLevel(e, !1)
          }),
          (s.resetLevel = function () {
            s.setLevel(n, !1),
              (function () {
                if (typeof window !== t && l) {
                  try {
                    return void window.localStorage.removeItem(l)
                  } catch {}
                  try {
                    window.document.cookie = encodeURIComponent(l) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                  } catch {}
                }
              })()
          }),
          (s.enableAll = function (e) {
            s.setLevel(s.levels.TRACE, e)
          }),
          (s.disableAll = function (e) {
            s.setLevel(s.levels.SILENT, e)
          })
        var p = u()
        null == p && (p = n), s.setLevel(p, !1)
      }
      var u = new l(),
        p = {}
      u.getLogger = function (e) {
        if (("symbol" != typeof e && "string" != typeof e) || "" === e)
          throw new TypeError("You must supply a name when creating a logger.")
        var t = p[e]
        return t || (t = p[e] = new l(e, u.getLevel(), u.methodFactory)), t
      }
      var d = typeof window !== t ? window.log : void 0
      return (
        (u.noConflict = function () {
          return typeof window !== t && window.log === u && (window.log = d), u
        }),
        (u.getLoggers = function () {
          return p
        }),
        (u.default = u),
        u
      )
    }),
    i.exports ? (i.exports = t2()) : (e.log = t2())
  var R = {},
    B = {
      get exports() {
        return R
      },
      set exports(e) {
        R = e
      },
    }
  !(function (e) {
    !(function (t, n) {
      e.exports ? (e.exports = n()) : (t.prefix = n(t))
    })(P, function (e) {
      var t,
        n,
        r = {
          template: "[%t] %l:",
          levelFormatter: function (e) {
            return e.toUpperCase()
          },
          nameFormatter: function (e) {
            return e || "root"
          },
          timestampFormatter: function (e) {
            return e.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
          },
          format: void 0,
        },
        i = {},
        o = {
          reg: function (e) {
            if (!e || !e.getLogger) throw new TypeError("Argument is not a root logger")
            t = e
          },
          apply: function (e, n) {
            if (!e || !e.setLevel) throw new TypeError("Argument is not a logger")
            var o = e.methodFactory,
              a = e.name || "",
              s = i[a] || i[""] || r
            return (
              i[a] ||
                (e.methodFactory = function (e, t, n) {
                  var r = o(e, t, n),
                    s = i[n] || i[""],
                    c = -1 !== s.template.indexOf("%t"),
                    l = -1 !== s.template.indexOf("%l"),
                    u = -1 !== s.template.indexOf("%n")
                  return function () {
                    for (var t = "", o = arguments.length, p = Array(o), d = 0; d < o; d++) p[d] = arguments[d]
                    if (a || !i[n]) {
                      var h = s.timestampFormatter(new Date()),
                        f = s.levelFormatter(e),
                        g = s.nameFormatter(n)
                      s.format
                        ? (t += s.format(f, g, h))
                        : ((t += s.template),
                          c && (t = t.replace(/%t/, h)),
                          l && (t = t.replace(/%l/, f)),
                          u && (t = t.replace(/%n/, g))),
                        p.length && "string" == typeof p[0] ? (p[0] = t + " " + p[0]) : p.unshift(t)
                    }
                    r.apply(void 0, p)
                  }
                }),
              (n = n || {}).template && (n.format = void 0),
              (i[a] = (function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (t in arguments[n])
                    Object.prototype.hasOwnProperty.call(arguments[n], t) && (e[t] = arguments[n][t])
                return e
              })({}, s, n)),
              e.setLevel(e.getLevel()),
              t ||
                e.warn(
                  "It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"
                ),
              e
            )
          },
        }
      return (
        e &&
          ((n = e.prefix),
          (o.noConflict = function () {
            return e.prefix === o && (e.prefix = n), o
          })),
        o
      )
    })
  })(B)
  class T {}
  _$1(T, "LOG_LEVEL_KEY", "VITE_LOG_LEVEL"), _$1(T, "LOG_PREFIX_KEY", "VITE_LOG_PREFIX")
  var S = ((e) => (
    (e.LOG_LEVEL_DEBUG = "DEBUG"),
    (e.LOG_LEVEL_INFO = "INFO"),
    (e.LOG_LEVEL_WARN = "WARN"),
    (e.LOG_LEVEL_ERROR = "ERROR"),
    e
  ))(S || {})
  function K() {
    const e = Error.prepareStackTrace
    Error.prepareStackTrace = (e, t) => t
    const t = new Error().stack.slice(1)
    return (Error.prepareStackTrace = e), t
  }
  class I {
    static stringToEnumValue(e, t) {
      return e[Object.keys(e).filter((n) => e[n].toString() === t)[0]]
    }
    static getEnvLevel(e) {
      if (!e) return
      const t = e.getEnvOrDefault(T.LOG_LEVEL_KEY, S.LOG_LEVEL_INFO),
        n = I.stringToEnumValue(S, t.toUpperCase())
      return (
        n ||
          console.warn(
            "[zhi-log] LOG_LEVEL is invalid in you .env file.Must be either debug, info, warn or error, fallback to default info level"
          ),
        n
      )
    }
    static getEnvLogger(e) {
      if (e) return e.getEnv(T.LOG_PREFIX_KEY)
    }
  }
  class Y {
    constructor(e, t, n) {
      let r
      _$1(this, "consoleLogger", "console"),
        _$1(this, "stackSize", 1),
        _$1(this, "getLogger", (e) => {
          let t
          if (e) t = e
          else {
            const e = this.getCallStack(),
              n = [],
              r = []
            for (let t = 0; t < e.length; t++) {
              const r = e[t],
                i = r.getFileName() ?? "none"
              if (t > this.stackSize - 1) break
              const o = i + "-" + r.getLineNumber() + ":" + r.getColumnNumber()
              n.push(o)
            }
            r.length > 0 && (t = n.join(" -> "))
          }
          return (!t || 0 === t.trim().length) && (t = this.consoleLogger), b.getLogger(t)
        }),
        (this.stackSize = 1),
        (r = e || I.getEnvLevel(n)),
        (r = r ?? S.LOG_LEVEL_INFO),
        b.setLevel(r)
      const i = (e) => e.toString(),
        o = (e) => e.toString(),
        a = (e) => e.toString(),
        s = (e) => e.toString()
      R.reg(b),
        R.apply(b, {
          format(e, r, c) {
            const l = ["[" + (t ?? I.getEnvLogger(n) ?? "zhi") + "]"]
            switch ((l.push(i("[") + o(c).toString() + i("]")), e)) {
              case S.LOG_LEVEL_DEBUG:
                l.push(i(e.toUpperCase().toString()))
                break
              case S.LOG_LEVEL_INFO:
                l.push(o(e.toUpperCase().toString()))
                break
              case S.LOG_LEVEL_WARN:
                l.push(a(e.toUpperCase().toString()))
                break
              case S.LOG_LEVEL_ERROR:
                l.push(s(e.toUpperCase().toString()))
            }
            return l.push(o(r).toString()), l.push(i(":")), l.join(" ")
          },
        })
    }
    setStackSize(e) {
      this.stackSize = e ?? 1
    }
    getCallStack() {
      let e
      try {
        e = K()
      } catch {
        e = []
      }
      return e
    }
  }
  class X {
    constructor(e, t, n) {
      _$1(this, "logger"), (this.logger = new Y(e, t, n))
    }
    getLogger(e, t) {
      return this.logger.setStackSize(t), this.logger.getLogger(e)
    }
  }
  class N extends X {
    constructor(e, t, n) {
      super(e, t, n)
    }
    getLogger(e, t) {
      return super.getLogger(e, t)
    }
  }
  class M {
    static defaultLogger(e, t) {
      return M.customLogFactory(void 0, void 0, e).getLogger(void 0, t)
    }
    static customLogFactory(e, t, n) {
      return new N(e, t, n)
    }
    static customSignLogFactory(e, t) {
      return new N(void 0, e, t)
    }
  }
  var reExports = {},
    re$3 = {
      get exports() {
        return reExports
      },
      set exports(e) {
        reExports = e
      },
    }
  const SEMVER_SPEC_VERSION = "2.0.0",
    MAX_LENGTH$2 = 256,
    MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || 9007199254740991,
    MAX_SAFE_COMPONENT_LENGTH = 16
  var constants$1 = {
    SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
    MAX_LENGTH: MAX_LENGTH$2,
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
    MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH,
  }
  const debug$1 =
    "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)
      ? (...e) => console.error("SEMVER", ...e)
      : () => {}
  var debug_1 = debug$1
  !(function (e, t) {
    const { MAX_SAFE_COMPONENT_LENGTH: n } = constants$1,
      r = debug_1,
      i = ((t = e.exports = {}).re = []),
      o = (t.src = []),
      a = (t.t = {})
    let s = 0
    const c = (e, t, n) => {
      const c = s++
      r(e, c, t), (a[e] = c), (o[c] = t), (i[c] = new RegExp(t, n ? "g" : void 0))
    }
    c("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
      c("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
      c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
      c("MAINVERSION", `(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})`),
      c(
        "MAINVERSIONLOOSE",
        `(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})`
      ),
      c("PRERELEASEIDENTIFIER", `(?:${o[a.NUMERICIDENTIFIER]}|${o[a.NONNUMERICIDENTIFIER]})`),
      c("PRERELEASEIDENTIFIERLOOSE", `(?:${o[a.NUMERICIDENTIFIERLOOSE]}|${o[a.NONNUMERICIDENTIFIER]})`),
      c("PRERELEASE", `(?:-(${o[a.PRERELEASEIDENTIFIER]}(?:\\.${o[a.PRERELEASEIDENTIFIER]})*))`),
      c("PRERELEASELOOSE", `(?:-?(${o[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[a.PRERELEASEIDENTIFIERLOOSE]})*))`),
      c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
      c("BUILD", `(?:\\+(${o[a.BUILDIDENTIFIER]}(?:\\.${o[a.BUILDIDENTIFIER]})*))`),
      c("FULLPLAIN", `v?${o[a.MAINVERSION]}${o[a.PRERELEASE]}?${o[a.BUILD]}?`),
      c("FULL", `^${o[a.FULLPLAIN]}$`),
      c("LOOSEPLAIN", `[v=\\s]*${o[a.MAINVERSIONLOOSE]}${o[a.PRERELEASELOOSE]}?${o[a.BUILD]}?`),
      c("LOOSE", `^${o[a.LOOSEPLAIN]}$`),
      c("GTLT", "((?:<|>)?=?)"),
      c("XRANGEIDENTIFIERLOOSE", `${o[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
      c("XRANGEIDENTIFIER", `${o[a.NUMERICIDENTIFIER]}|x|X|\\*`),
      c(
        "XRANGEPLAIN",
        `[v=\\s]*(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:${
          o[a.PRERELEASE]
        })?${o[a.BUILD]}?)?)?`
      ),
      c(
        "XRANGEPLAINLOOSE",
        `[v=\\s]*(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
          o[a.XRANGEIDENTIFIERLOOSE]
        })(?:${o[a.PRERELEASELOOSE]})?${o[a.BUILD]}?)?)?`
      ),
      c("XRANGE", `^${o[a.GTLT]}\\s*${o[a.XRANGEPLAIN]}$`),
      c("XRANGELOOSE", `^${o[a.GTLT]}\\s*${o[a.XRANGEPLAINLOOSE]}$`),
      c("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),
      c("COERCERTL", o[a.COERCE], !0),
      c("LONETILDE", "(?:~>?)"),
      c("TILDETRIM", `(\\s*)${o[a.LONETILDE]}\\s+`, !0),
      (t.tildeTrimReplace = "$1~"),
      c("TILDE", `^${o[a.LONETILDE]}${o[a.XRANGEPLAIN]}$`),
      c("TILDELOOSE", `^${o[a.LONETILDE]}${o[a.XRANGEPLAINLOOSE]}$`),
      c("LONECARET", "(?:\\^)"),
      c("CARETTRIM", `(\\s*)${o[a.LONECARET]}\\s+`, !0),
      (t.caretTrimReplace = "$1^"),
      c("CARET", `^${o[a.LONECARET]}${o[a.XRANGEPLAIN]}$`),
      c("CARETLOOSE", `^${o[a.LONECARET]}${o[a.XRANGEPLAINLOOSE]}$`),
      c("COMPARATORLOOSE", `^${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]})$|^$`),
      c("COMPARATOR", `^${o[a.GTLT]}\\s*(${o[a.FULLPLAIN]})$|^$`),
      c("COMPARATORTRIM", `(\\s*)${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]}|${o[a.XRANGEPLAIN]})`, !0),
      (t.comparatorTrimReplace = "$1$2$3"),
      c("HYPHENRANGE", `^\\s*(${o[a.XRANGEPLAIN]})\\s+-\\s+(${o[a.XRANGEPLAIN]})\\s*$`),
      c("HYPHENRANGELOOSE", `^\\s*(${o[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[a.XRANGEPLAINLOOSE]})\\s*$`),
      c("STAR", "(<|>)?=?\\s*\\*"),
      c("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
      c("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
  })(re$3, reExports)
  const opts = ["includePrerelease", "loose", "rtl"],
    parseOptions$2 = (e) =>
      e ? ("object" != typeof e ? { loose: !0 } : opts.filter((t) => e[t]).reduce((e, t) => ((e[t] = !0), e), {})) : {}
  var parseOptions_1 = parseOptions$2
  const numeric = /^[0-9]+$/,
    compareIdentifiers$1 = (e, t) => {
      const n = numeric.test(e),
        r = numeric.test(t)
      return n && r && ((e = +e), (t = +t)), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
    },
    rcompareIdentifiers = (e, t) => compareIdentifiers$1(t, e)
  var identifiers$1 = { compareIdentifiers: compareIdentifiers$1, rcompareIdentifiers: rcompareIdentifiers }
  const debug = debug_1,
    { MAX_LENGTH: MAX_LENGTH$1, MAX_SAFE_INTEGER: MAX_SAFE_INTEGER } = constants$1,
    { re: re$2, t: t$2 } = reExports,
    parseOptions$1 = parseOptions_1,
    { compareIdentifiers: compareIdentifiers } = identifiers$1
  let SemVer$d = class e {
    constructor(t, n) {
      if (((n = parseOptions$1(n)), t instanceof e)) {
        if (t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease) return t
        t = t.version
      } else if ("string" != typeof t) throw new TypeError(`Invalid Version: ${t}`)
      if (t.length > MAX_LENGTH$1) throw new TypeError(`version is longer than ${MAX_LENGTH$1} characters`)
      debug("SemVer", t, n),
        (this.options = n),
        (this.loose = !!n.loose),
        (this.includePrerelease = !!n.includePrerelease)
      const r = t.trim().match(n.loose ? re$2[t$2.LOOSE] : re$2[t$2.FULL])
      if (!r) throw new TypeError(`Invalid Version: ${t}`)
      if (
        ((this.raw = t),
        (this.major = +r[1]),
        (this.minor = +r[2]),
        (this.patch = +r[3]),
        this.major > MAX_SAFE_INTEGER || this.major < 0)
      )
        throw new TypeError("Invalid major version")
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version")
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version")
      r[4]
        ? (this.prerelease = r[4].split(".").map((e) => {
            if (/^[0-9]+$/.test(e)) {
              const t = +e
              if (t >= 0 && t < MAX_SAFE_INTEGER) return t
            }
            return e
          }))
        : (this.prerelease = []),
        (this.build = r[5] ? r[5].split(".") : []),
        this.format()
    }
    format() {
      return (
        (this.version = `${this.major}.${this.minor}.${this.patch}`),
        this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
        this.version
      )
    }
    toString() {
      return this.version
    }
    compare(t) {
      if ((debug("SemVer.compare", this.version, this.options, t), !(t instanceof e))) {
        if ("string" == typeof t && t === this.version) return 0
        t = new e(t, this.options)
      }
      return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
    }
    compareMain(t) {
      return (
        t instanceof e || (t = new e(t, this.options)),
        compareIdentifiers(this.major, t.major) ||
          compareIdentifiers(this.minor, t.minor) ||
          compareIdentifiers(this.patch, t.patch)
      )
    }
    comparePre(t) {
      if ((t instanceof e || (t = new e(t, this.options)), this.prerelease.length && !t.prerelease.length)) return -1
      if (!this.prerelease.length && t.prerelease.length) return 1
      if (!this.prerelease.length && !t.prerelease.length) return 0
      let n = 0
      do {
        const e = this.prerelease[n],
          r = t.prerelease[n]
        if ((debug("prerelease compare", n, e, r), void 0 === e && void 0 === r)) return 0
        if (void 0 === r) return 1
        if (void 0 === e) return -1
        if (e !== r) return compareIdentifiers(e, r)
      } while (++n)
    }
    compareBuild(t) {
      t instanceof e || (t = new e(t, this.options))
      let n = 0
      do {
        const e = this.build[n],
          r = t.build[n]
        if ((debug("prerelease compare", n, e, r), void 0 === e && void 0 === r)) return 0
        if (void 0 === r) return 1
        if (void 0 === e) return -1
        if (e !== r) return compareIdentifiers(e, r)
      } while (++n)
    }
    inc(e, t) {
      switch (e) {
        case "premajor":
          ;(this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", t)
          break
        case "preminor":
          ;(this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", t)
          break
        case "prepatch":
          ;(this.prerelease.length = 0), this.inc("patch", t), this.inc("pre", t)
          break
        case "prerelease":
          0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t)
          break
        case "major":
          ;(0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length) || this.major++,
            (this.minor = 0),
            (this.patch = 0),
            (this.prerelease = [])
          break
        case "minor":
          ;(0 === this.patch && 0 !== this.prerelease.length) || this.minor++, (this.patch = 0), (this.prerelease = [])
          break
        case "patch":
          0 === this.prerelease.length && this.patch++, (this.prerelease = [])
          break
        case "pre":
          if (0 === this.prerelease.length) this.prerelease = [0]
          else {
            let e = this.prerelease.length
            for (; --e >= 0; ) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, (e = -2))
            ;-1 === e && this.prerelease.push(0)
          }
          t &&
            (0 === compareIdentifiers(this.prerelease[0], t)
              ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
              : (this.prerelease = [t, 0]))
          break
        default:
          throw new Error(`invalid increment argument: ${e}`)
      }
      return this.format(), (this.raw = this.version), this
    }
  }
  var semver$1 = SemVer$d
  const { MAX_LENGTH: MAX_LENGTH } = constants$1,
    { re: re$1, t: t$1 } = reExports,
    SemVer$c = semver$1,
    parseOptions = parseOptions_1,
    parse$6 = (e, t) => {
      if (((t = parseOptions(t)), e instanceof SemVer$c)) return e
      if ("string" != typeof e) return null
      if (e.length > MAX_LENGTH) return null
      if (!(t.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]).test(e)) return null
      try {
        return new SemVer$c(e, t)
      } catch (n) {
        return null
      }
    }
  var parse_1 = parse$6
  const parse$5 = parse_1,
    valid$2 = (e, t) => {
      const n = parse$5(e, t)
      return n ? n.version : null
    }
  var valid_1 = valid$2
  const parse$4 = parse_1,
    clean$1 = (e, t) => {
      const n = parse$4(e.trim().replace(/^[=v]+/, ""), t)
      return n ? n.version : null
    }
  var clean_1 = clean$1
  const SemVer$b = semver$1,
    inc$1 = (e, t, n, r) => {
      "string" == typeof n && ((r = n), (n = void 0))
      try {
        return new SemVer$b(e instanceof SemVer$b ? e.version : e, n).inc(t, r).version
      } catch (i) {
        return null
      }
    }
  var inc_1 = inc$1
  const SemVer$a = semver$1,
    compare$b = (e, t, n) => new SemVer$a(e, n).compare(new SemVer$a(t, n))
  var compare_1 = compare$b
  const compare$a = compare_1,
    eq$3 = (e, t, n) => 0 === compare$a(e, t, n)
  var eq_1 = eq$3
  const parse$3 = parse_1,
    eq$2 = eq_1,
    diff$1 = (e, t) => {
      if (eq$2(e, t)) return null
      {
        const n = parse$3(e),
          r = parse$3(t),
          i = n.prerelease.length || r.prerelease.length,
          o = i ? "pre" : "",
          a = i ? "prerelease" : ""
        for (const e in n) if (("major" === e || "minor" === e || "patch" === e) && n[e] !== r[e]) return o + e
        return a
      }
    }
  var diff_1 = diff$1
  const SemVer$9 = semver$1,
    major$1 = (e, t) => new SemVer$9(e, t).major
  var major_1 = major$1
  const SemVer$8 = semver$1,
    minor$1 = (e, t) => new SemVer$8(e, t).minor
  var minor_1 = minor$1
  const SemVer$7 = semver$1,
    patch$1 = (e, t) => new SemVer$7(e, t).patch
  var patch_1 = patch$1
  const parse$2 = parse_1,
    prerelease$1 = (e, t) => {
      const n = parse$2(e, t)
      return n && n.prerelease.length ? n.prerelease : null
    }
  var prerelease_1 = prerelease$1
  const compare$9 = compare_1,
    rcompare$1 = (e, t, n) => compare$9(t, e, n)
  var rcompare_1 = rcompare$1
  const compare$8 = compare_1,
    compareLoose$1 = (e, t) => compare$8(e, t, !0)
  var compareLoose_1 = compareLoose$1
  const SemVer$6 = semver$1,
    compareBuild$3 = (e, t, n) => {
      const r = new SemVer$6(e, n),
        i = new SemVer$6(t, n)
      return r.compare(i) || r.compareBuild(i)
    }
  var compareBuild_1 = compareBuild$3
  const compareBuild$2 = compareBuild_1,
    sort$1 = (e, t) => e.sort((e, n) => compareBuild$2(e, n, t))
  var sort_1 = sort$1
  const compareBuild$1 = compareBuild_1,
    rsort$1 = (e, t) => e.sort((e, n) => compareBuild$1(n, e, t))
  var rsort_1 = rsort$1
  const compare$7 = compare_1,
    gt$4 = (e, t, n) => compare$7(e, t, n) > 0
  var gt_1 = gt$4
  const compare$6 = compare_1,
    lt$3 = (e, t, n) => compare$6(e, t, n) < 0
  var lt_1 = lt$3
  const compare$5 = compare_1,
    neq$2 = (e, t, n) => 0 !== compare$5(e, t, n)
  var neq_1 = neq$2
  const compare$4 = compare_1,
    gte$3 = (e, t, n) => compare$4(e, t, n) >= 0
  var gte_1 = gte$3
  const compare$3 = compare_1,
    lte$3 = (e, t, n) => compare$3(e, t, n) <= 0
  var lte_1 = lte$3
  const eq$1 = eq_1,
    neq$1 = neq_1,
    gt$3 = gt_1,
    gte$2 = gte_1,
    lt$2 = lt_1,
    lte$2 = lte_1,
    cmp$1 = (e, t, n, r) => {
      switch (t) {
        case "===":
          return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n
        case "!==":
          return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n
        case "":
        case "=":
        case "==":
          return eq$1(e, n, r)
        case "!=":
          return neq$1(e, n, r)
        case ">":
          return gt$3(e, n, r)
        case ">=":
          return gte$2(e, n, r)
        case "<":
          return lt$2(e, n, r)
        case "<=":
          return lte$2(e, n, r)
        default:
          throw new TypeError(`Invalid operator: ${t}`)
      }
    }
  var cmp_1 = cmp$1
  const SemVer$5 = semver$1,
    parse$1 = parse_1,
    { re: re, t: t } = reExports,
    coerce$1 = (e, n) => {
      if (e instanceof SemVer$5) return e
      if (("number" == typeof e && (e = String(e)), "string" != typeof e)) return null
      let r = null
      if ((n = n || {}).rtl) {
        let n
        for (; (n = re[t.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); )
          (r && n.index + n[0].length === r.index + r[0].length) || (r = n),
            (re[t.COERCERTL].lastIndex = n.index + n[1].length + n[2].length)
        re[t.COERCERTL].lastIndex = -1
      } else r = e.match(re[t.COERCE])
      return null === r ? null : parse$1(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, n)
    }
  var coerce_1 = coerce$1,
    iterator,
    hasRequiredIterator,
    yallist,
    hasRequiredYallist,
    lruCache,
    hasRequiredLruCache,
    range,
    hasRequiredRange,
    comparator,
    hasRequiredComparator
  function requireIterator() {
    return hasRequiredIterator
      ? iterator
      : ((hasRequiredIterator = 1),
        (iterator = function (e) {
          e.prototype[Symbol.iterator] = function* () {
            for (let e = this.head; e; e = e.next) yield e.value
          }
        }))
  }
  function requireYallist() {
    if (hasRequiredYallist) return yallist
    function e(t) {
      var n = this
      if (
        (n instanceof e || (n = new e()),
        (n.tail = null),
        (n.head = null),
        (n.length = 0),
        t && "function" == typeof t.forEach)
      )
        t.forEach(function (e) {
          n.push(e)
        })
      else if (arguments.length > 0) for (var r = 0, i = arguments.length; r < i; r++) n.push(arguments[r])
      return n
    }
    function t(e, t, n) {
      var r = t === e.head ? new i(n, null, t, e) : new i(n, t, t.next, e)
      return null === r.next && (e.tail = r), null === r.prev && (e.head = r), e.length++, r
    }
    function n(e, t) {
      ;(e.tail = new i(t, e.tail, null, e)), e.head || (e.head = e.tail), e.length++
    }
    function r(e, t) {
      ;(e.head = new i(t, null, e.head, e)), e.tail || (e.tail = e.head), e.length++
    }
    function i(e, t, n, r) {
      if (!(this instanceof i)) return new i(e, t, n, r)
      ;(this.list = r),
        (this.value = e),
        t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
        n ? ((n.prev = this), (this.next = n)) : (this.next = null)
    }
    ;(hasRequiredYallist = 1),
      (yallist = e),
      (e.Node = i),
      (e.create = e),
      (e.prototype.removeNode = function (e) {
        if (e.list !== this) throw new Error("removing node which does not belong to this list")
        var t = e.next,
          n = e.prev
        return (
          t && (t.prev = n),
          n && (n.next = t),
          e === this.head && (this.head = t),
          e === this.tail && (this.tail = n),
          e.list.length--,
          (e.next = null),
          (e.prev = null),
          (e.list = null),
          t
        )
      }),
      (e.prototype.unshiftNode = function (e) {
        if (e !== this.head) {
          e.list && e.list.removeNode(e)
          var t = this.head
          ;(e.list = this),
            (e.next = t),
            t && (t.prev = e),
            (this.head = e),
            this.tail || (this.tail = e),
            this.length++
        }
      }),
      (e.prototype.pushNode = function (e) {
        if (e !== this.tail) {
          e.list && e.list.removeNode(e)
          var t = this.tail
          ;(e.list = this),
            (e.prev = t),
            t && (t.next = e),
            (this.tail = e),
            this.head || (this.head = e),
            this.length++
        }
      }),
      (e.prototype.push = function () {
        for (var e = 0, t = arguments.length; e < t; e++) n(this, arguments[e])
        return this.length
      }),
      (e.prototype.unshift = function () {
        for (var e = 0, t = arguments.length; e < t; e++) r(this, arguments[e])
        return this.length
      }),
      (e.prototype.pop = function () {
        if (this.tail) {
          var e = this.tail.value
          return (
            (this.tail = this.tail.prev), this.tail ? (this.tail.next = null) : (this.head = null), this.length--, e
          )
        }
      }),
      (e.prototype.shift = function () {
        if (this.head) {
          var e = this.head.value
          return (
            (this.head = this.head.next), this.head ? (this.head.prev = null) : (this.tail = null), this.length--, e
          )
        }
      }),
      (e.prototype.forEach = function (e, t) {
        t = t || this
        for (var n = this.head, r = 0; null !== n; r++) e.call(t, n.value, r, this), (n = n.next)
      }),
      (e.prototype.forEachReverse = function (e, t) {
        t = t || this
        for (var n = this.tail, r = this.length - 1; null !== n; r--) e.call(t, n.value, r, this), (n = n.prev)
      }),
      (e.prototype.get = function (e) {
        for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next
        if (t === e && null !== n) return n.value
      }),
      (e.prototype.getReverse = function (e) {
        for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev
        if (t === e && null !== n) return n.value
      }),
      (e.prototype.map = function (t, n) {
        n = n || this
        for (var r = new e(), i = this.head; null !== i; ) r.push(t.call(n, i.value, this)), (i = i.next)
        return r
      }),
      (e.prototype.mapReverse = function (t, n) {
        n = n || this
        for (var r = new e(), i = this.tail; null !== i; ) r.push(t.call(n, i.value, this)), (i = i.prev)
        return r
      }),
      (e.prototype.reduce = function (e, t) {
        var n,
          r = this.head
        if (arguments.length > 1) n = t
        else {
          if (!this.head) throw new TypeError("Reduce of empty list with no initial value")
          ;(r = this.head.next), (n = this.head.value)
        }
        for (var i = 0; null !== r; i++) (n = e(n, r.value, i)), (r = r.next)
        return n
      }),
      (e.prototype.reduceReverse = function (e, t) {
        var n,
          r = this.tail
        if (arguments.length > 1) n = t
        else {
          if (!this.tail) throw new TypeError("Reduce of empty list with no initial value")
          ;(r = this.tail.prev), (n = this.tail.value)
        }
        for (var i = this.length - 1; null !== r; i--) (n = e(n, r.value, i)), (r = r.prev)
        return n
      }),
      (e.prototype.toArray = function () {
        for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++) (e[t] = n.value), (n = n.next)
        return e
      }),
      (e.prototype.toArrayReverse = function () {
        for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++) (e[t] = n.value), (n = n.prev)
        return e
      }),
      (e.prototype.slice = function (t, n) {
        ;(n = n || this.length) < 0 && (n += this.length), (t = t || 0) < 0 && (t += this.length)
        var r = new e()
        if (n < t || n < 0) return r
        t < 0 && (t = 0), n > this.length && (n = this.length)
        for (var i = 0, o = this.head; null !== o && i < t; i++) o = o.next
        for (; null !== o && i < n; i++, o = o.next) r.push(o.value)
        return r
      }),
      (e.prototype.sliceReverse = function (t, n) {
        ;(n = n || this.length) < 0 && (n += this.length), (t = t || 0) < 0 && (t += this.length)
        var r = new e()
        if (n < t || n < 0) return r
        t < 0 && (t = 0), n > this.length && (n = this.length)
        for (var i = this.length, o = this.tail; null !== o && i > n; i--) o = o.prev
        for (; null !== o && i > t; i--, o = o.prev) r.push(o.value)
        return r
      }),
      (e.prototype.splice = function (e, n, ...r) {
        e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e)
        for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next
        var a = []
        for (i = 0; o && i < n; i++) a.push(o.value), (o = this.removeNode(o))
        null === o && (o = this.tail), o !== this.head && o !== this.tail && (o = o.prev)
        for (i = 0; i < r.length; i++) o = t(this, o, r[i])
        return a
      }),
      (e.prototype.reverse = function () {
        for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
          var r = n.prev
          ;(n.prev = n.next), (n.next = r)
        }
        return (this.head = t), (this.tail = e), this
      })
    try {
      requireIterator()(e)
    } catch (o) {}
    return yallist
  }
  function requireLruCache() {
    if (hasRequiredLruCache) return lruCache
    hasRequiredLruCache = 1
    const e = requireYallist(),
      t = Symbol("max"),
      n = Symbol("length"),
      r = Symbol("lengthCalculator"),
      i = Symbol("allowStale"),
      o = Symbol("maxAge"),
      a = Symbol("dispose"),
      s = Symbol("noDisposeOnSet"),
      c = Symbol("lruList"),
      l = Symbol("cache"),
      u = Symbol("updateAgeOnGet"),
      p = () => 1
    const d = (e, t, n) => {
        const r = e[l].get(t)
        if (r) {
          const t = r.value
          if (h(e, t)) {
            if ((g(e, r), !e[i])) return
          } else n && (e[u] && (r.value.now = Date.now()), e[c].unshiftNode(r))
          return t.value
        }
      },
      h = (e, t) => {
        if (!t || (!t.maxAge && !e[o])) return !1
        const n = Date.now() - t.now
        return t.maxAge ? n > t.maxAge : e[o] && n > e[o]
      },
      f = (e) => {
        if (e[n] > e[t])
          for (let r = e[c].tail; e[n] > e[t] && null !== r; ) {
            const t = r.prev
            g(e, r), (r = t)
          }
      },
      g = (e, t) => {
        if (t) {
          const r = t.value
          e[a] && e[a](r.key, r.value), (e[n] -= r.length), e[l].delete(r.key), e[c].removeNode(t)
        }
      }
    class m {
      constructor(e, t, n, r, i) {
        ;(this.key = e), (this.value = t), (this.length = n), (this.now = r), (this.maxAge = i || 0)
      }
    }
    const _ = (e, t, n, r) => {
      let o = n.value
      h(e, o) && (g(e, n), e[i] || (o = void 0)), o && t.call(r, o.value, o.key, e)
    }
    return (lruCache = class {
      constructor(e) {
        if (("number" == typeof e && (e = { max: e }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)))
          throw new TypeError("max must be a non-negative number")
        this[t] = e.max || 1 / 0
        const n = e.length || p
        if (
          ((this[r] = "function" != typeof n ? p : n),
          (this[i] = e.stale || !1),
          e.maxAge && "number" != typeof e.maxAge)
        )
          throw new TypeError("maxAge must be a number")
        ;(this[o] = e.maxAge || 0),
          (this[a] = e.dispose),
          (this[s] = e.noDisposeOnSet || !1),
          (this[u] = e.updateAgeOnGet || !1),
          this.reset()
      }
      set max(e) {
        if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number")
        ;(this[t] = e || 1 / 0), f(this)
      }
      get max() {
        return this[t]
      }
      set allowStale(e) {
        this[i] = !!e
      }
      get allowStale() {
        return this[i]
      }
      set maxAge(e) {
        if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number")
        ;(this[o] = e), f(this)
      }
      get maxAge() {
        return this[o]
      }
      set lengthCalculator(e) {
        "function" != typeof e && (e = p),
          e !== this[r] &&
            ((this[r] = e),
            (this[n] = 0),
            this[c].forEach((e) => {
              ;(e.length = this[r](e.value, e.key)), (this[n] += e.length)
            })),
          f(this)
      }
      get lengthCalculator() {
        return this[r]
      }
      get length() {
        return this[n]
      }
      get itemCount() {
        return this[c].length
      }
      rforEach(e, t) {
        t = t || this
        for (let n = this[c].tail; null !== n; ) {
          const r = n.prev
          _(this, e, n, t), (n = r)
        }
      }
      forEach(e, t) {
        t = t || this
        for (let n = this[c].head; null !== n; ) {
          const r = n.next
          _(this, e, n, t), (n = r)
        }
      }
      keys() {
        return this[c].toArray().map((e) => e.key)
      }
      values() {
        return this[c].toArray().map((e) => e.value)
      }
      reset() {
        this[a] && this[c] && this[c].length && this[c].forEach((e) => this[a](e.key, e.value)),
          (this[l] = new Map()),
          (this[c] = new e()),
          (this[n] = 0)
      }
      dump() {
        return this[c]
          .map((e) => !h(this, e) && { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) })
          .toArray()
          .filter((e) => e)
      }
      dumpLru() {
        return this[c]
      }
      set(e, i, u) {
        if ((u = u || this[o]) && "number" != typeof u) throw new TypeError("maxAge must be a number")
        const p = u ? Date.now() : 0,
          d = this[r](i, e)
        if (this[l].has(e)) {
          if (d > this[t]) return g(this, this[l].get(e)), !1
          const r = this[l].get(e).value
          return (
            this[a] && (this[s] || this[a](e, r.value)),
            (r.now = p),
            (r.maxAge = u),
            (r.value = i),
            (this[n] += d - r.length),
            (r.length = d),
            this.get(e),
            f(this),
            !0
          )
        }
        const h = new m(e, i, d, p, u)
        return h.length > this[t]
          ? (this[a] && this[a](e, i), !1)
          : ((this[n] += h.length), this[c].unshift(h), this[l].set(e, this[c].head), f(this), !0)
      }
      has(e) {
        if (!this[l].has(e)) return !1
        const t = this[l].get(e).value
        return !h(this, t)
      }
      get(e) {
        return d(this, e, !0)
      }
      peek(e) {
        return d(this, e, !1)
      }
      pop() {
        const e = this[c].tail
        return e ? (g(this, e), e.value) : null
      }
      del(e) {
        g(this, this[l].get(e))
      }
      load(e) {
        this.reset()
        const t = Date.now()
        for (let n = e.length - 1; n >= 0; n--) {
          const r = e[n],
            i = r.e || 0
          if (0 === i) this.set(r.k, r.v)
          else {
            const e = i - t
            e > 0 && this.set(r.k, r.v, e)
          }
        }
      }
      prune() {
        this[l].forEach((e, t) => d(this, t, !1))
      }
    })
  }
  function requireRange() {
    if (hasRequiredRange) return range
    hasRequiredRange = 1
    class e {
      constructor(t, i) {
        if (((i = n(i)), t instanceof e))
          return t.loose === !!i.loose && t.includePrerelease === !!i.includePrerelease ? t : new e(t.raw, i)
        if (t instanceof r) return (this.raw = t.value), (this.set = [[t]]), this.format(), this
        if (
          ((this.options = i),
          (this.loose = !!i.loose),
          (this.includePrerelease = !!i.includePrerelease),
          (this.raw = t),
          (this.set = t
            .split("||")
            .map((e) => this.parseRange(e.trim()))
            .filter((e) => e.length)),
          !this.set.length)
        )
          throw new TypeError(`Invalid SemVer Range: ${t}`)
        if (this.set.length > 1) {
          const e = this.set[0]
          if (((this.set = this.set.filter((e) => !p(e[0]))), 0 === this.set.length)) this.set = [e]
          else if (this.set.length > 1)
            for (const t of this.set)
              if (1 === t.length && d(t[0])) {
                this.set = [t]
                break
              }
        }
        this.format()
      }
      format() {
        return (
          (this.range = this.set
            .map((e) => e.join(" ").trim())
            .join("||")
            .trim()),
          this.range
        )
      }
      toString() {
        return this.range
      }
      parseRange(e) {
        e = e.trim()
        const n = `parseRange:${Object.keys(this.options).join(",")}:${e}`,
          o = t.get(n)
        if (o) return o
        const d = this.options.loose,
          h = d ? a[s.HYPHENRANGELOOSE] : a[s.HYPHENRANGE]
        ;(e = e.replace(h, A(this.options.includePrerelease))),
          i("hyphen replace", e),
          (e = e.replace(a[s.COMPARATORTRIM], c)),
          i("comparator trim", e)
        let g = (e = (e = (e = e.replace(a[s.TILDETRIM], l)).replace(a[s.CARETTRIM], u)).split(/\s+/).join(" "))
          .split(" ")
          .map((e) => f(e, this.options))
          .join(" ")
          .split(/\s+/)
          .map((e) => S(e, this.options))
        d && (g = g.filter((e) => (i("loose invalid filter", e, this.options), !!e.match(a[s.COMPARATORLOOSE])))),
          i("range list", g)
        const m = new Map(),
          _ = g.map((e) => new r(e, this.options))
        for (const t of _) {
          if (p(t)) return [t]
          m.set(t.value, t)
        }
        m.size > 1 && m.has("") && m.delete("")
        const y = [...m.values()]
        return t.set(n, y), y
      }
      intersects(t, n) {
        if (!(t instanceof e)) throw new TypeError("a Range is required")
        return this.set.some(
          (e) => h(e, n) && t.set.some((t) => h(t, n) && e.every((e) => t.every((t) => e.intersects(t, n))))
        )
      }
      test(e) {
        if (!e) return !1
        if ("string" == typeof e)
          try {
            e = new o(e, this.options)
          } catch (t) {
            return !1
          }
        for (let n = 0; n < this.set.length; n++) if ($(this.set[n], e, this.options)) return !0
        return !1
      }
    }
    range = e
    const t = new (requireLruCache())({ max: 1e3 }),
      n = parseOptions_1,
      r = requireComparator(),
      i = debug_1,
      o = semver$1,
      { re: a, t: s, comparatorTrimReplace: c, tildeTrimReplace: l, caretTrimReplace: u } = reExports,
      p = (e) => "<0.0.0-0" === e.value,
      d = (e) => "" === e.value,
      h = (e, t) => {
        let n = !0
        const r = e.slice()
        let i = r.pop()
        for (; n && r.length; ) (n = r.every((e) => i.intersects(e, t))), (i = r.pop())
        return n
      },
      f = (e, t) => (
        i("comp", e, t),
        (e = y(e, t)),
        i("caret", e),
        (e = m(e, t)),
        i("tildes", e),
        (e = b(e, t)),
        i("xrange", e),
        (e = E(e, t)),
        i("stars", e),
        e
      ),
      g = (e) => !e || "x" === e.toLowerCase() || "*" === e,
      m = (e, t) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => _(e, t))
          .join(" "),
      _ = (e, t) => {
        const n = t.loose ? a[s.TILDELOOSE] : a[s.TILDE]
        return e.replace(n, (t, n, r, o, a) => {
          let s
          return (
            i("tilde", e, t, n, r, o, a),
            g(n)
              ? (s = "")
              : g(r)
              ? (s = `>=${n}.0.0 <${+n + 1}.0.0-0`)
              : g(o)
              ? (s = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0`)
              : a
              ? (i("replaceTilde pr", a), (s = `>=${n}.${r}.${o}-${a} <${n}.${+r + 1}.0-0`))
              : (s = `>=${n}.${r}.${o} <${n}.${+r + 1}.0-0`),
            i("tilde return", s),
            s
          )
        })
      },
      y = (e, t) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => v(e, t))
          .join(" "),
      v = (e, t) => {
        i("caret", e, t)
        const n = t.loose ? a[s.CARETLOOSE] : a[s.CARET],
          r = t.includePrerelease ? "-0" : ""
        return e.replace(n, (t, n, o, a, s) => {
          let c
          return (
            i("caret", e, t, n, o, a, s),
            g(n)
              ? (c = "")
              : g(o)
              ? (c = `>=${n}.0.0${r} <${+n + 1}.0.0-0`)
              : g(a)
              ? (c = "0" === n ? `>=${n}.${o}.0${r} <${n}.${+o + 1}.0-0` : `>=${n}.${o}.0${r} <${+n + 1}.0.0-0`)
              : s
              ? (i("replaceCaret pr", s),
                (c =
                  "0" === n
                    ? "0" === o
                      ? `>=${n}.${o}.${a}-${s} <${n}.${o}.${+a + 1}-0`
                      : `>=${n}.${o}.${a}-${s} <${n}.${+o + 1}.0-0`
                    : `>=${n}.${o}.${a}-${s} <${+n + 1}.0.0-0`))
              : (i("no pr"),
                (c =
                  "0" === n
                    ? "0" === o
                      ? `>=${n}.${o}.${a}${r} <${n}.${o}.${+a + 1}-0`
                      : `>=${n}.${o}.${a}${r} <${n}.${+o + 1}.0-0`
                    : `>=${n}.${o}.${a} <${+n + 1}.0.0-0`)),
            i("caret return", c),
            c
          )
        })
      },
      b = (e, t) => (
        i("replaceXRanges", e, t),
        e
          .split(/\s+/)
          .map((e) => w(e, t))
          .join(" ")
      ),
      w = (e, t) => {
        e = e.trim()
        const n = t.loose ? a[s.XRANGELOOSE] : a[s.XRANGE]
        return e.replace(n, (n, r, o, a, s, c) => {
          i("xRange", e, n, r, o, a, s, c)
          const l = g(o),
            u = l || g(a),
            p = u || g(s),
            d = p
          return (
            "=" === r && d && (r = ""),
            (c = t.includePrerelease ? "-0" : ""),
            l
              ? (n = ">" === r || "<" === r ? "<0.0.0-0" : "*")
              : r && d
              ? (u && (a = 0),
                (s = 0),
                ">" === r
                  ? ((r = ">="), u ? ((o = +o + 1), (a = 0), (s = 0)) : ((a = +a + 1), (s = 0)))
                  : "<=" === r && ((r = "<"), u ? (o = +o + 1) : (a = +a + 1)),
                "<" === r && (c = "-0"),
                (n = `${r + o}.${a}.${s}${c}`))
              : u
              ? (n = `>=${o}.0.0${c} <${+o + 1}.0.0-0`)
              : p && (n = `>=${o}.${a}.0${c} <${o}.${+a + 1}.0-0`),
            i("xRange return", n),
            n
          )
        })
      },
      E = (e, t) => (i("replaceStars", e, t), e.trim().replace(a[s.STAR], "")),
      S = (e, t) => (i("replaceGTE0", e, t), e.trim().replace(a[t.includePrerelease ? s.GTE0PRE : s.GTE0], "")),
      A = (e) => (t, n, r, i, o, a, s, c, l, u, p, d, h) =>
        `${(n = g(r)
          ? ""
          : g(i)
          ? `>=${r}.0.0${e ? "-0" : ""}`
          : g(o)
          ? `>=${r}.${i}.0${e ? "-0" : ""}`
          : a
          ? `>=${n}`
          : `>=${n}${e ? "-0" : ""}`)} ${(c = g(l)
          ? ""
          : g(u)
          ? `<${+l + 1}.0.0-0`
          : g(p)
          ? `<${l}.${+u + 1}.0-0`
          : d
          ? `<=${l}.${u}.${p}-${d}`
          : e
          ? `<${l}.${u}.${+p + 1}-0`
          : `<=${c}`)}`.trim(),
      $ = (e, t, n) => {
        for (let r = 0; r < e.length; r++) if (!e[r].test(t)) return !1
        if (t.prerelease.length && !n.includePrerelease) {
          for (let n = 0; n < e.length; n++)
            if ((i(e[n].semver), e[n].semver !== r.ANY && e[n].semver.prerelease.length > 0)) {
              const r = e[n].semver
              if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0
            }
          return !1
        }
        return !0
      }
    return range
  }
  function requireComparator() {
    if (hasRequiredComparator) return comparator
    hasRequiredComparator = 1
    const e = Symbol("SemVer ANY")
    class t {
      static get ANY() {
        return e
      }
      constructor(r, i) {
        if (((i = n(i)), r instanceof t)) {
          if (r.loose === !!i.loose) return r
          r = r.value
        }
        a("comparator", r, i),
          (this.options = i),
          (this.loose = !!i.loose),
          this.parse(r),
          this.semver === e ? (this.value = "") : (this.value = this.operator + this.semver.version),
          a("comp", this)
      }
      parse(t) {
        const n = this.options.loose ? r[i.COMPARATORLOOSE] : r[i.COMPARATOR],
          o = t.match(n)
        if (!o) throw new TypeError(`Invalid comparator: ${t}`)
        ;(this.operator = void 0 !== o[1] ? o[1] : ""),
          "=" === this.operator && (this.operator = ""),
          o[2] ? (this.semver = new s(o[2], this.options.loose)) : (this.semver = e)
      }
      toString() {
        return this.value
      }
      test(t) {
        if ((a("Comparator.test", t, this.options.loose), this.semver === e || t === e)) return !0
        if ("string" == typeof t)
          try {
            t = new s(t, this.options)
          } catch (n) {
            return !1
          }
        return o(t, this.operator, this.semver, this.options)
      }
      intersects(e, n) {
        if (!(e instanceof t)) throw new TypeError("a Comparator is required")
        if (((n && "object" == typeof n) || (n = { loose: !!n, includePrerelease: !1 }), "" === this.operator))
          return "" === this.value || new c(e.value, n).test(this.value)
        if ("" === e.operator) return "" === e.value || new c(this.value, n).test(e.semver)
        const r = !((">=" !== this.operator && ">" !== this.operator) || (">=" !== e.operator && ">" !== e.operator)),
          i = !(("<=" !== this.operator && "<" !== this.operator) || ("<=" !== e.operator && "<" !== e.operator)),
          a = this.semver.version === e.semver.version,
          s = !((">=" !== this.operator && "<=" !== this.operator) || (">=" !== e.operator && "<=" !== e.operator)),
          l =
            o(this.semver, "<", e.semver, n) &&
            (">=" === this.operator || ">" === this.operator) &&
            ("<=" === e.operator || "<" === e.operator),
          u =
            o(this.semver, ">", e.semver, n) &&
            ("<=" === this.operator || "<" === this.operator) &&
            (">=" === e.operator || ">" === e.operator)
        return r || i || (a && s) || l || u
      }
    }
    comparator = t
    const n = parseOptions_1,
      { re: r, t: i } = reExports,
      o = cmp_1,
      a = debug_1,
      s = semver$1,
      c = requireRange()
    return comparator
  }
  const Range$9 = requireRange(),
    satisfies$4 = (e, t, n) => {
      try {
        t = new Range$9(t, n)
      } catch (r) {
        return !1
      }
      return t.test(e)
    }
  var satisfies_1 = satisfies$4
  const Range$8 = requireRange(),
    toComparators$1 = (e, t) =>
      new Range$8(e, t).set.map((e) =>
        e
          .map((e) => e.value)
          .join(" ")
          .trim()
          .split(" ")
      )
  var toComparators_1 = toComparators$1
  const SemVer$4 = semver$1,
    Range$7 = requireRange(),
    maxSatisfying$1 = (e, t, n) => {
      let r = null,
        i = null,
        o = null
      try {
        o = new Range$7(t, n)
      } catch (a) {
        return null
      }
      return (
        e.forEach((e) => {
          o.test(e) && ((r && -1 !== i.compare(e)) || ((r = e), (i = new SemVer$4(r, n))))
        }),
        r
      )
    }
  var maxSatisfying_1 = maxSatisfying$1
  const SemVer$3 = semver$1,
    Range$6 = requireRange(),
    minSatisfying$1 = (e, t, n) => {
      let r = null,
        i = null,
        o = null
      try {
        o = new Range$6(t, n)
      } catch (a) {
        return null
      }
      return (
        e.forEach((e) => {
          o.test(e) && ((r && 1 !== i.compare(e)) || ((r = e), (i = new SemVer$3(r, n))))
        }),
        r
      )
    }
  var minSatisfying_1 = minSatisfying$1
  const SemVer$2 = semver$1,
    Range$5 = requireRange(),
    gt$2 = gt_1,
    minVersion$1 = (e, t) => {
      e = new Range$5(e, t)
      let n = new SemVer$2("0.0.0")
      if (e.test(n)) return n
      if (((n = new SemVer$2("0.0.0-0")), e.test(n))) return n
      n = null
      for (let r = 0; r < e.set.length; ++r) {
        const t = e.set[r]
        let i = null
        t.forEach((e) => {
          const t = new SemVer$2(e.semver.version)
          switch (e.operator) {
            case ">":
              0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format())
            case "":
            case ">=":
              ;(i && !gt$2(t, i)) || (i = t)
              break
            case "<":
            case "<=":
              break
            default:
              throw new Error(`Unexpected operation: ${e.operator}`)
          }
        }),
          !i || (n && !gt$2(n, i)) || (n = i)
      }
      return n && e.test(n) ? n : null
    }
  var minVersion_1 = minVersion$1
  const Range$4 = requireRange(),
    validRange$1 = (e, t) => {
      try {
        return new Range$4(e, t).range || "*"
      } catch (n) {
        return null
      }
    }
  var valid$1 = validRange$1
  const SemVer$1 = semver$1,
    Comparator$2 = requireComparator(),
    { ANY: ANY$1 } = Comparator$2,
    Range$3 = requireRange(),
    satisfies$3 = satisfies_1,
    gt$1 = gt_1,
    lt$1 = lt_1,
    lte$1 = lte_1,
    gte$1 = gte_1,
    outside$3 = (e, t, n, r) => {
      let i, o, a, s, c
      switch (((e = new SemVer$1(e, r)), (t = new Range$3(t, r)), n)) {
        case ">":
          ;(i = gt$1), (o = lte$1), (a = lt$1), (s = ">"), (c = ">=")
          break
        case "<":
          ;(i = lt$1), (o = gte$1), (a = gt$1), (s = "<"), (c = "<=")
          break
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"')
      }
      if (satisfies$3(e, t, r)) return !1
      for (let l = 0; l < t.set.length; ++l) {
        const n = t.set[l]
        let u = null,
          p = null
        if (
          (n.forEach((e) => {
            e.semver === ANY$1 && (e = new Comparator$2(">=0.0.0")),
              (u = u || e),
              (p = p || e),
              i(e.semver, u.semver, r) ? (u = e) : a(e.semver, p.semver, r) && (p = e)
          }),
          u.operator === s || u.operator === c)
        )
          return !1
        if ((!p.operator || p.operator === s) && o(e, p.semver)) return !1
        if (p.operator === c && a(e, p.semver)) return !1
      }
      return !0
    }
  var outside_1 = outside$3
  const outside$2 = outside_1,
    gtr$1 = (e, t, n) => outside$2(e, t, ">", n)
  var gtr_1 = gtr$1
  const outside$1 = outside_1,
    ltr$1 = (e, t, n) => outside$1(e, t, "<", n)
  var ltr_1 = ltr$1
  const Range$2 = requireRange(),
    intersects$1 = (e, t, n) => ((e = new Range$2(e, n)), (t = new Range$2(t, n)), e.intersects(t))
  var intersects_1 = intersects$1
  const satisfies$2 = satisfies_1,
    compare$2 = compare_1
  var simplify = (e, t, n) => {
    const r = []
    let i = null,
      o = null
    const a = e.sort((e, t) => compare$2(e, t, n))
    for (const u of a) {
      satisfies$2(u, t, n) ? ((o = u), i || (i = u)) : (o && r.push([i, o]), (o = null), (i = null))
    }
    i && r.push([i, null])
    const s = []
    for (const [u, p] of r)
      u === p
        ? s.push(u)
        : p || u !== a[0]
        ? p
          ? u === a[0]
            ? s.push(`<=${p}`)
            : s.push(`${u} - ${p}`)
          : s.push(`>=${u}`)
        : s.push("*")
    const c = s.join(" || "),
      l = "string" == typeof t.raw ? t.raw : String(t)
    return c.length < l.length ? c : t
  }
  const Range$1 = requireRange(),
    Comparator$1 = requireComparator(),
    { ANY: ANY } = Comparator$1,
    satisfies$1 = satisfies_1,
    compare$1 = compare_1,
    subset$1 = (e, t, n = {}) => {
      if (e === t) return !0
      ;(e = new Range$1(e, n)), (t = new Range$1(t, n))
      let r = !1
      e: for (const i of e.set) {
        for (const e of t.set) {
          const t = simpleSubset(i, e, n)
          if (((r = r || null !== t), t)) continue e
        }
        if (r) return !1
      }
      return !0
    },
    simpleSubset = (e, t, n) => {
      if (e === t) return !0
      if (1 === e.length && e[0].semver === ANY) {
        if (1 === t.length && t[0].semver === ANY) return !0
        e = n.includePrerelease ? [new Comparator$1(">=0.0.0-0")] : [new Comparator$1(">=0.0.0")]
      }
      if (1 === t.length && t[0].semver === ANY) {
        if (n.includePrerelease) return !0
        t = [new Comparator$1(">=0.0.0")]
      }
      const r = new Set()
      let i, o, a, s, c, l, u
      for (const h of e)
        ">" === h.operator || ">=" === h.operator
          ? (i = higherGT(i, h, n))
          : "<" === h.operator || "<=" === h.operator
          ? (o = lowerLT(o, h, n))
          : r.add(h.semver)
      if (r.size > 1) return null
      if (i && o) {
        if (((a = compare$1(i.semver, o.semver, n)), a > 0)) return null
        if (0 === a && (">=" !== i.operator || "<=" !== o.operator)) return null
      }
      for (const h of r) {
        if (i && !satisfies$1(h, String(i), n)) return null
        if (o && !satisfies$1(h, String(o), n)) return null
        for (const e of t) if (!satisfies$1(h, String(e), n)) return !1
        return !0
      }
      let p = !(!o || n.includePrerelease || !o.semver.prerelease.length) && o.semver,
        d = !(!i || n.includePrerelease || !i.semver.prerelease.length) && i.semver
      p && 1 === p.prerelease.length && "<" === o.operator && 0 === p.prerelease[0] && (p = !1)
      for (const h of t) {
        if (
          ((u = u || ">" === h.operator || ">=" === h.operator),
          (l = l || "<" === h.operator || "<=" === h.operator),
          i)
        )
          if (
            (d &&
              h.semver.prerelease &&
              h.semver.prerelease.length &&
              h.semver.major === d.major &&
              h.semver.minor === d.minor &&
              h.semver.patch === d.patch &&
              (d = !1),
            ">" === h.operator || ">=" === h.operator)
          ) {
            if (((s = higherGT(i, h, n)), s === h && s !== i)) return !1
          } else if (">=" === i.operator && !satisfies$1(i.semver, String(h), n)) return !1
        if (o)
          if (
            (p &&
              h.semver.prerelease &&
              h.semver.prerelease.length &&
              h.semver.major === p.major &&
              h.semver.minor === p.minor &&
              h.semver.patch === p.patch &&
              (p = !1),
            "<" === h.operator || "<=" === h.operator)
          ) {
            if (((c = lowerLT(o, h, n)), c === h && c !== o)) return !1
          } else if ("<=" === o.operator && !satisfies$1(o.semver, String(h), n)) return !1
        if (!h.operator && (o || i) && 0 !== a) return !1
      }
      return !(i && l && !o && 0 !== a) && !(o && u && !i && 0 !== a) && !d && !p
    },
    higherGT = (e, t, n) => {
      if (!e) return t
      const r = compare$1(e.semver, t.semver, n)
      return r > 0 ? e : r < 0 || (">" === t.operator && ">=" === e.operator) ? t : e
    },
    lowerLT = (e, t, n) => {
      if (!e) return t
      const r = compare$1(e.semver, t.semver, n)
      return r < 0 ? e : r > 0 || ("<" === t.operator && "<=" === e.operator) ? t : e
    }
  var subset_1 = subset$1
  const internalRe = reExports,
    constants = constants$1,
    SemVer = semver$1,
    identifiers = identifiers$1,
    parse = parse_1,
    valid = valid_1,
    clean = clean_1,
    inc = inc_1,
    diff = diff_1,
    major = major_1,
    minor = minor_1,
    patch = patch_1,
    prerelease = prerelease_1,
    compare = compare_1,
    rcompare = rcompare_1,
    compareLoose = compareLoose_1,
    compareBuild = compareBuild_1,
    sort = sort_1,
    rsort = rsort_1,
    gt = gt_1,
    lt = lt_1,
    eq = eq_1,
    neq = neq_1,
    gte = gte_1,
    lte = lte_1,
    cmp = cmp_1,
    coerce = coerce_1,
    Comparator = requireComparator(),
    Range = requireRange(),
    satisfies = satisfies_1,
    toComparators = toComparators_1,
    maxSatisfying = maxSatisfying_1,
    minSatisfying = minSatisfying_1,
    minVersion = minVersion_1,
    validRange = valid$1,
    outside = outside_1,
    gtr = gtr_1,
    ltr = ltr_1,
    intersects = intersects_1,
    simplifyRange = simplify,
    subset = subset_1
  var semver = {
    parse: parse,
    valid: valid,
    clean: clean,
    inc: inc,
    diff: diff,
    major: major,
    minor: minor,
    patch: patch,
    prerelease: prerelease,
    compare: compare,
    rcompare: rcompare,
    compareLoose: compareLoose,
    compareBuild: compareBuild,
    sort: sort,
    rsort: rsort,
    gt: gt,
    lt: lt,
    eq: eq,
    neq: neq,
    gte: gte,
    lte: lte,
    cmp: cmp,
    coerce: coerce,
    Comparator: Comparator,
    Range: Range,
    satisfies: satisfies,
    toComparators: toComparators,
    maxSatisfying: maxSatisfying,
    minSatisfying: minSatisfying,
    minVersion: minVersion,
    validRange: validRange,
    outside: outside,
    gtr: gtr,
    ltr: ltr,
    intersects: intersects,
    simplifyRange: simplifyRange,
    subset: subset,
    SemVer: SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers,
  }
  class FileClient {
    constructor() {
      ;(this.electronApi = {
        readDir(e) {
          const t = window.require("fs"),
            n = window.require("path"),
            r = n.join(window.siyuan.config.system.dataDir, "..")
          return new Promise((i) => {
            t.readdir(n.join(r, e), (o, a) => {
              if (o) return void i([])
              const s = a.map((i) => ({ isDir: t.statSync(n.join(r, e, i)).isDirectory(), name: i }))
              i(s)
            })
          })
        },
        getFile: (t, n = "text") =>
          new Promise((r, i) => {
            const o = window.require("fs"),
              a = window.require("path"),
              s = a.join(window.siyuan.config.system.dataDir, "..")
            o.readFile(a.join(s, t), (t, o) => {
              if (t) return i(t)
              const a = o.toString("utf8")
              if ("json" === n)
                try {
                  return r(JSON.parse(a))
                } catch (e) {
                  return void i(e)
                }
              return r(a)
            })
          }),
        putFile: putFile,
        removeFile: (e) =>
          new Promise((t, n) => {
            const r = window.require("fs"),
              i = window.require("path"),
              o = i.join(window.siyuan.config.system.dataDir, ".."),
              a = i.join(o, e)
            log("Remove files from", a),
              r.rm(a, { recursive: !0, force: !0 }, (e) => {
                if (e) return n(e)
                t(null)
              })
          }),
      }),
        (this.serverApi = { readDir: readDir, getFile: getFile, putFile: putFile, removeFile: removeFile })
      const t = this.getVersion()
      semver.compare(t, "2.8.1") < 0 ? (this.fileApi = this.electronApi) : (this.fileApi = this.serverApi)
    }
    getVersion() {
      return window.siyuan.config.system.kernelVersion
    }
    static getInstanceApi() {
      return this.fileClient || (this.fileClient = new FileClient()), this.fileClient
    }
  }
  const author$1 = "作者",
    version$1 = "版本",
    description$1 = "描述",
    goBack$1 = "返回",
    url$1 = "地址",
    readme$1 = "README",
    loading$1 = "加载中",
    downloading$1 = "下载中",
    downloaded$1 = "已下载",
    download$1 = "下载",
    upgrade$1 = "升级",
    nodescription$1 = "无描述内容",
    safemode$1 = "安全模式",
    safemodetip$1 = "关闭安全模式允许第三方插件加载",
    autoupgrade$1 = "自动更新",
    autoupgradetip$1 = "从固定位置获取版本并更新本地存储的插件系统脚本",
    store_url$1 = "插件商店地址",
    store_url_tip$1 = "线上插件系统仓库地址, 默认为",
    menu_common$1 = "通用配置",
    menu_list$1 = "插件列表",
    menu_store$1 = "插件商店",
    plugin_system$1 = "插件系统",
    plugin_system_setting$1 = "插件系统设置",
    reload$1 = "重载",
    show_plugin_system_config$1 = "显示插件系统配置",
    reload_window$1 = "重载当前窗口",
    shortcut$1 = "快捷键",
    show_command_panel$1 = "显示控制面板",
    uninstall$1 = "卸载",
    zh_CN = {
      author: author$1,
      version: version$1,
      description: description$1,
      goBack: goBack$1,
      url: url$1,
      readme: readme$1,
      loading: loading$1,
      downloading: downloading$1,
      downloaded: downloaded$1,
      download: download$1,
      upgrade: upgrade$1,
      nodescription: nodescription$1,
      safemode: safemode$1,
      safemodetip: safemodetip$1,
      autoupgrade: autoupgrade$1,
      autoupgradetip: autoupgradetip$1,
      store_url: store_url$1,
      store_url_tip: store_url_tip$1,
      menu_common: menu_common$1,
      menu_list: menu_list$1,
      menu_store: menu_store$1,
      plugin_system: plugin_system$1,
      plugin_system_setting: plugin_system_setting$1,
      reload: reload$1,
      show_plugin_system_config: show_plugin_system_config$1,
      reload_window: reload_window$1,
      shortcut: shortcut$1,
      show_command_panel: show_command_panel$1,
      uninstall: uninstall$1,
    },
    author = "Author",
    version = "Version",
    description = "Description",
    goBack = "Go Back",
    url = "URL",
    readme = "README",
    loading = "Loading",
    downloading = "Downloading",
    downloaded = "Downloaded",
    download = "Download",
    upgrade = "Upgrade",
    nodescription = "No Description content",
    safemode = "Safe Mode",
    safemodetip = "Turn off safe mode to enable third party plugins.",
    autoupgrade = "Auto Upgrade",
    autoupgradetip = "Auto upgrade plugin system online.",
    store_url = "Plugin Store URL",
    store_url_tip = "Plugin Store URL, default is",
    menu_common = "Common Setting",
    menu_list = "Plugins",
    menu_store = "Store",
    plugin_system = "Plugin System",
    plugin_system_setting = "Plugin System Setting",
    reload = "Reload",
    show_plugin_system_config = "Show plugin system config",
    reload_window = "Reload current window",
    shortcut = "Shortcut",
    show_command_panel = "Show command panel",
    uninstall = "Uninstall",
    en_US = {
      author: author,
      version: version,
      description: description,
      goBack: goBack,
      url: url,
      readme: readme,
      loading: loading,
      downloading: downloading,
      downloaded: downloaded,
      download: download,
      upgrade: upgrade,
      nodescription: nodescription,
      safemode: safemode,
      safemodetip: safemodetip,
      autoupgrade: autoupgrade,
      autoupgradetip: autoupgradetip,
      store_url: store_url,
      store_url_tip: store_url_tip,
      menu_common: menu_common,
      menu_list: menu_list,
      menu_store: menu_store,
      plugin_system: plugin_system,
      plugin_system_setting: plugin_system_setting,
      reload: reload,
      show_plugin_system_config: show_plugin_system_config,
      reload_window: reload_window,
      shortcut: shortcut,
      show_command_panel: show_command_panel,
      uninstall: uninstall,
    },
    factory = M.customLogFactory(S.LOG_LEVEL_INFO, "PluginSystem"),
    pluginSystemLogger = factory.getLogger("plugin system"),
    log = (...e) => {
      pluginSystemLogger.info(...e)
    },
    sleep = async (e) =>
      new Promise((t) => {
        setTimeout(() => t(null), e)
      }),
    error = (...e) => pluginSystemLogger.error(...e),
    reloadWindow = () => window.location.reload(),
    genUUID = () =>
      ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) =>
        (
          parseInt(e, 10) ^
          (window.crypto.getRandomValues(new Uint32Array(1))[0] & (15 >> (parseInt(e, 10) / 4)))
        ).toString(16)
      )
  async function isExists(e) {
    try {
      return null !== (await FileClient.getInstanceApi().fileApi.getFile(e))
    } catch {
      return !1
    }
  }
  let Error$1 = class {
    constructor(e) {
      this.message = e
    }
  }
  class Warning {
    constructor(e) {
      this.message = e
    }
  }
  const showInfoMessage = (e, t) => new Notification({ type: "info", message: e, timeout: t }).show(),
    showErrorMessage = (e, t) => new Notification({ type: "error", message: e, timeout: t }).show(),
    getLogger = (e) => factory.getLogger(e),
    langs = { zh_CN: zh_CN, en_US: en_US },
    currentLang = window.siyuan.config.lang,
    lang = langs[currentLang] || en_US,
    _ = (e) => lang[e] || "not defined"
  var NAMED_TAG = "named",
    NAME_TAG = "name",
    UNMANAGED_TAG = "unmanaged",
    OPTIONAL_TAG = "optional",
    INJECT_TAG = "inject",
    MULTI_INJECT_TAG = "multi_inject",
    TAGGED = "inversify:tagged",
    TAGGED_PROP = "inversify:tagged_props",
    PARAM_TYPES = "inversify:paramtypes",
    DESIGN_PARAM_TYPES = "design:paramtypes",
    POST_CONSTRUCT = "post_construct",
    PRE_DESTROY = "pre_destroy"
  function getNonCustomTagKeys() {
    return [INJECT_TAG, MULTI_INJECT_TAG, NAME_TAG, UNMANAGED_TAG, NAMED_TAG, OPTIONAL_TAG]
  }
  var NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys(),
    BindingScopeEnum = { Request: "Request", Singleton: "Singleton", Transient: "Transient" },
    BindingTypeEnum = {
      ConstantValue: "ConstantValue",
      Constructor: "Constructor",
      DynamicValue: "DynamicValue",
      Factory: "Factory",
      Function: "Function",
      Instance: "Instance",
      Invalid: "Invalid",
      Provider: "Provider",
    },
    TargetTypeEnum = {
      ClassProperty: "ClassProperty",
      ConstructorArgument: "ConstructorArgument",
      Variable: "Variable",
    },
    idCounter = 0
  function id() {
    return idCounter++
  }
  var Binding = (function () {
      function e(e, t) {
        ;(this.id = id()),
          (this.activated = !1),
          (this.serviceIdentifier = e),
          (this.scope = t),
          (this.type = BindingTypeEnum.Invalid),
          (this.constraint = function (e) {
            return !0
          }),
          (this.implementationType = null),
          (this.cache = null),
          (this.factory = null),
          (this.provider = null),
          (this.onActivation = null),
          (this.onDeactivation = null),
          (this.dynamicValue = null)
      }
      return (
        (e.prototype.clone = function () {
          var t = new e(this.serviceIdentifier, this.scope)
          return (
            (t.activated = t.scope === BindingScopeEnum.Singleton && this.activated),
            (t.implementationType = this.implementationType),
            (t.dynamicValue = this.dynamicValue),
            (t.scope = this.scope),
            (t.type = this.type),
            (t.factory = this.factory),
            (t.provider = this.provider),
            (t.constraint = this.constraint),
            (t.onActivation = this.onActivation),
            (t.onDeactivation = this.onDeactivation),
            (t.cache = this.cache),
            t
          )
        }),
        e
      )
    })(),
    DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.",
    DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:",
    NULL_ARGUMENT = "NULL argument",
    KEY_NOT_FOUND = "Key Not Found",
    AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:",
    CANNOT_UNBIND = "Could not unbind serviceIdentifier:",
    NOT_REGISTERED = "No matching bindings found for serviceIdentifier:",
    MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:",
    MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:",
    UNDEFINED_INJECT_ANNOTATION = function (e) {
      return (
        "@inject called with undefined this could mean that the class " +
        e +
        " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."
      )
    },
    CIRCULAR_DEPENDENCY = "Circular dependency found:",
    INVALID_BINDING_TYPE = "Invalid binding type:",
    NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.",
    INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!",
    INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!",
    LAZY_IN_SYNC = function (e) {
      return "You are attempting to construct '" + e + "' in a synchronous way\n but it has asynchronous dependencies."
    },
    INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier",
    INVALID_DECORATOR_OPERATION =
      "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.",
    ARGUMENTS_LENGTH_MISMATCH = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      return (
        "The number of constructor arguments in the derived class " +
        e[0] +
        " must be >= than the number of constructor arguments of its base class."
      )
    },
    CONTAINER_OPTIONS_MUST_BE_AN_OBJECT =
      "Invalid Container constructor argument. Container options must be an object.",
    CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE =
      "Invalid Container option. Default scope must be a string ('singleton' or 'transient').",
    CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean",
    CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean",
    ASYNC_UNBIND_REQUIRED =
      "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)",
    POST_CONSTRUCT_ERROR = function (e, t) {
      return "@postConstruct error in class " + e + ": " + t
    },
    PRE_DESTROY_ERROR = function (e, t) {
      return "@preDestroy error in class " + e + ": " + t
    },
    ON_DEACTIVATION_ERROR = function (e, t) {
      return "onDeactivation() error in class " + e + ": " + t
    },
    CIRCULAR_DEPENDENCY_IN_FACTORY = function (e, t) {
      return (
        "It looks like there is a circular dependency in one of the '" +
        e +
        "' bindings. Please investigate bindings withservice identifier '" +
        t +
        "'."
      )
    },
    STACK_OVERFLOW = "Maximum call stack size exceeded",
    MetadataReader = (function () {
      function e() {}
      return (
        (e.prototype.getConstructorMetadata = function (e) {
          return {
            compilerGeneratedMetadata: Reflect.getMetadata(PARAM_TYPES, e),
            userGeneratedMetadata: Reflect.getMetadata(TAGGED, e) || {},
          }
        }),
        (e.prototype.getPropertiesMetadata = function (e) {
          return Reflect.getMetadata(TAGGED_PROP, e) || []
        }),
        e
      )
    })(),
    BindingCount = { MultipleBindingsAvailable: 2, NoBindingsAvailable: 0, OnlyOneBindingAvailable: 1 }
  function isStackOverflowExeption(e) {
    return e instanceof RangeError || e.message === STACK_OVERFLOW
  }
  var tryAndThrowErrorIfStackOverflow = function (e, t) {
    try {
      return e()
    } catch (n) {
      throw (isStackOverflowExeption(n) && (n = t()), n)
    }
  }
  function getServiceIdentifierAsString(e) {
    return "function" == typeof e ? e.name : "symbol" == typeof e ? e.toString() : e
  }
  function listRegisteredBindingsForServiceIdentifier(e, t, n) {
    var r = "",
      i = n(e, t)
    return (
      0 !== i.length &&
        ((r = "\nRegistered bindings:"),
        i.forEach(function (e) {
          var t = "Object"
          null !== e.implementationType && (t = getFunctionName(e.implementationType)),
            (r = r + "\n " + t),
            e.constraint.metaData && (r = r + " - " + e.constraint.metaData)
        })),
      r
    )
  }
  function alreadyDependencyChain(e, t) {
    return (
      null !== e.parentRequest &&
      (e.parentRequest.serviceIdentifier === t || alreadyDependencyChain(e.parentRequest, t))
    )
  }
  function dependencyChainToString(e) {
    var t = (function e(t, n) {
      void 0 === n && (n = [])
      var r = getServiceIdentifierAsString(t.serviceIdentifier)
      return n.push(r), null !== t.parentRequest ? e(t.parentRequest, n) : n
    })(e)
    return t.reverse().join(" --\x3e ")
  }
  function circularDependencyToException(e) {
    e.childRequests.forEach(function (e) {
      if (alreadyDependencyChain(e, e.serviceIdentifier)) {
        var t = dependencyChainToString(e)
        throw new Error(CIRCULAR_DEPENDENCY + " " + t)
      }
      circularDependencyToException(e)
    })
  }
  function listMetadataForTarget(e, t) {
    if (t.isTagged() || t.isNamed()) {
      var n = "",
        r = t.getNamedTag(),
        i = t.getCustomTags()
      return (
        null !== r && (n += r.toString() + "\n"),
        null !== i &&
          i.forEach(function (e) {
            n += e.toString() + "\n"
          }),
        " " + e + "\n " + e + " - " + n
      )
    }
    return " " + e
  }
  function getFunctionName(e) {
    if (e.name) return e.name
    var t = e.toString(),
      n = t.match(/^function\s*([^\s(]+)/)
    return n ? n[1] : "Anonymous function: " + t
  }
  function getSymbolDescription(e) {
    return e.toString().slice(7, -1)
  }
  var Context = (function () {
      function e(e) {
        ;(this.id = id()), (this.container = e)
      }
      return (
        (e.prototype.addPlan = function (e) {
          this.plan = e
        }),
        (e.prototype.setCurrentRequest = function (e) {
          this.currentRequest = e
        }),
        e
      )
    })(),
    Metadata = (function () {
      function e(e, t) {
        ;(this.key = e), (this.value = t)
      }
      return (
        (e.prototype.toString = function () {
          return this.key === NAMED_TAG
            ? "named: " + String(this.value).toString() + " "
            : "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }"
        }),
        e
      )
    })(),
    Plan = function (e, t) {
      ;(this.parentContext = e), (this.rootRequest = t)
    },
    LazyServiceIdentifer = (function () {
      function e(e) {
        this._cb = e
      }
      return (
        (e.prototype.unwrap = function () {
          return this._cb()
        }),
        e
      )
    })(),
    QueryableString = (function () {
      function e(e) {
        this.str = e
      }
      return (
        (e.prototype.startsWith = function (e) {
          return 0 === this.str.indexOf(e)
        }),
        (e.prototype.endsWith = function (e) {
          var t,
            n = e.split("").reverse().join("")
          return (t = this.str.split("").reverse().join("")), this.startsWith.call({ str: t }, n)
        }),
        (e.prototype.contains = function (e) {
          return -1 !== this.str.indexOf(e)
        }),
        (e.prototype.equals = function (e) {
          return this.str === e
        }),
        (e.prototype.value = function () {
          return this.str
        }),
        e
      )
    })(),
    Target = (function () {
      function e(e, t, n, r) {
        ;(this.id = id()), (this.type = e), (this.serviceIdentifier = n)
        var i = "symbol" == typeof t ? getSymbolDescription(t) : t
        ;(this.name = new QueryableString(i || "")), (this.identifier = t), (this.metadata = new Array())
        var o = null
        "string" == typeof r ? (o = new Metadata(NAMED_TAG, r)) : r instanceof Metadata && (o = r),
          null !== o && this.metadata.push(o)
      }
      return (
        (e.prototype.hasTag = function (e) {
          for (var t = 0, n = this.metadata; t < n.length; t++) {
            if (n[t].key === e) return !0
          }
          return !1
        }),
        (e.prototype.isArray = function () {
          return this.hasTag(MULTI_INJECT_TAG)
        }),
        (e.prototype.matchesArray = function (e) {
          return this.matchesTag(MULTI_INJECT_TAG)(e)
        }),
        (e.prototype.isNamed = function () {
          return this.hasTag(NAMED_TAG)
        }),
        (e.prototype.isTagged = function () {
          return this.metadata.some(function (e) {
            return NON_CUSTOM_TAG_KEYS.every(function (t) {
              return e.key !== t
            })
          })
        }),
        (e.prototype.isOptional = function () {
          return this.matchesTag(OPTIONAL_TAG)(!0)
        }),
        (e.prototype.getNamedTag = function () {
          return this.isNamed()
            ? this.metadata.filter(function (e) {
                return e.key === NAMED_TAG
              })[0]
            : null
        }),
        (e.prototype.getCustomTags = function () {
          return this.isTagged()
            ? this.metadata.filter(function (e) {
                return NON_CUSTOM_TAG_KEYS.every(function (t) {
                  return e.key !== t
                })
              })
            : null
        }),
        (e.prototype.matchesNamedTag = function (e) {
          return this.matchesTag(NAMED_TAG)(e)
        }),
        (e.prototype.matchesTag = function (e) {
          var t = this
          return function (n) {
            for (var r = 0, i = t.metadata; r < i.length; r++) {
              var o = i[r]
              if (o.key === e && o.value === n) return !0
            }
            return !1
          }
        }),
        e
      )
    })(),
    __spreadArray$2 =
      (globalThis && globalThis.__spreadArray) ||
      function (e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]))
        return e.concat(r || Array.prototype.slice.call(t))
      }
  function getDependencies(e, t) {
    return getTargets(e, getFunctionName(t), t, !1)
  }
  function getTargets(e, t, n, r) {
    var i = e.getConstructorMetadata(n),
      o = i.compilerGeneratedMetadata
    if (void 0 === o) throw new Error(MISSING_INJECTABLE_ANNOTATION + " " + t + ".")
    var a = i.userGeneratedMetadata,
      s = Object.keys(a),
      c = 0 === n.length && s.length > 0,
      l = s.length > n.length,
      u = getConstructorArgsAsTargets(r, t, o, a, c || l ? s.length : n.length),
      p = getClassPropsAsTargets(e, n, t)
    return __spreadArray$2(__spreadArray$2([], u, !0), p, !0)
  }
  function getConstructorArgsAsTarget(e, t, n, r, i) {
    var o = i[e.toString()] || [],
      a = formatTargetMetadata(o),
      s = !0 !== a.unmanaged,
      c = r[e],
      l = a.inject || a.multiInject
    if (((c = l || c) instanceof LazyServiceIdentifer && (c = c.unwrap()), s)) {
      if (!t && (c === Object || c === Function || void 0 === c))
        throw new Error(MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + ".")
      var u = new Target(TargetTypeEnum.ConstructorArgument, a.targetName, c)
      return (u.metadata = o), u
    }
    return null
  }
  function getConstructorArgsAsTargets(e, t, n, r, i) {
    for (var o = [], a = 0; a < i; a++) {
      var s = getConstructorArgsAsTarget(a, e, t, n, r)
      null !== s && o.push(s)
    }
    return o
  }
  function _getServiceIdentifierForProperty(e, t, n, r) {
    var i = e || t
    if (void 0 === i) {
      var o = MISSING_INJECTABLE_ANNOTATION + " for property " + String(n) + " in class " + r + "."
      throw new Error(o)
    }
    return i
  }
  function getClassPropsAsTargets(e, t, n) {
    for (
      var r = e.getPropertiesMetadata(t),
        i = [],
        o = Object.getOwnPropertySymbols(r),
        a = 0,
        s = Object.keys(r).concat(o);
      a < s.length;
      a++
    ) {
      var c = s[a],
        l = r[c],
        u = formatTargetMetadata(l),
        p = u.targetName || c,
        d = _getServiceIdentifierForProperty(u.inject, u.multiInject, c, n),
        h = new Target(TargetTypeEnum.ClassProperty, p, d)
      ;(h.metadata = l), i.push(h)
    }
    var f = Object.getPrototypeOf(t.prototype).constructor
    if (f !== Object) {
      var g = getClassPropsAsTargets(e, f, n)
      i = __spreadArray$2(__spreadArray$2([], i, !0), g, !0)
    }
    return i
  }
  function getBaseClassDependencyCount(e, t) {
    var n = Object.getPrototypeOf(t.prototype).constructor
    if (n !== Object) {
      var r = getTargets(e, getFunctionName(n), n, !0),
        i = r.map(function (e) {
          return e.metadata.filter(function (e) {
            return e.key === UNMANAGED_TAG
          })
        }),
        o = [].concat.apply([], i).length,
        a = r.length - o
      return a > 0 ? a : getBaseClassDependencyCount(e, n)
    }
    return 0
  }
  function formatTargetMetadata(e) {
    var t = {}
    return (
      e.forEach(function (e) {
        t[e.key.toString()] = e.value
      }),
      { inject: t[INJECT_TAG], multiInject: t[MULTI_INJECT_TAG], targetName: t[NAME_TAG], unmanaged: t[UNMANAGED_TAG] }
    )
  }
  var Request = (function () {
    function e(e, t, n, r, i) {
      ;(this.id = id()),
        (this.serviceIdentifier = e),
        (this.parentContext = t),
        (this.parentRequest = n),
        (this.target = i),
        (this.childRequests = []),
        (this.bindings = Array.isArray(r) ? r : [r]),
        (this.requestScope = null === n ? new Map() : null)
    }
    return (
      (e.prototype.addChildRequest = function (t, n, r) {
        var i = new e(t, this.parentContext, this, n, r)
        return this.childRequests.push(i), i
      }),
      e
    )
  })()
  function getBindingDictionary(e) {
    return e._bindingDictionary
  }
  function _createTarget(e, t, n, r, i, o) {
    var a = new Metadata(e ? MULTI_INJECT_TAG : INJECT_TAG, n),
      s = new Target(t, r, n, a)
    if (void 0 !== i) {
      var c = new Metadata(i, o)
      s.metadata.push(c)
    }
    return s
  }
  function _getActiveBindings(e, t, n, r, i) {
    var o = getBindings(n.container, i.serviceIdentifier),
      a = []
    return (
      o.length === BindingCount.NoBindingsAvailable &&
        n.container.options.autoBindInjectable &&
        "function" == typeof i.serviceIdentifier &&
        e.getConstructorMetadata(i.serviceIdentifier).compilerGeneratedMetadata &&
        (n.container.bind(i.serviceIdentifier).toSelf(), (o = getBindings(n.container, i.serviceIdentifier))),
      (a = t
        ? o
        : o.filter(function (e) {
            var t = new Request(e.serviceIdentifier, n, r, e, i)
            return e.constraint(t)
          })),
      _validateActiveBindingCount(i.serviceIdentifier, a, i, n.container),
      a
    )
  }
  function _validateActiveBindingCount(e, t, n, r) {
    switch (t.length) {
      case BindingCount.NoBindingsAvailable:
        if (n.isOptional()) return t
        var i = getServiceIdentifierAsString(e),
          o = NOT_REGISTERED
        throw (
          ((o += listMetadataForTarget(i, n)),
          (o += listRegisteredBindingsForServiceIdentifier(r, i, getBindings)),
          new Error(o))
        )
      case BindingCount.OnlyOneBindingAvailable:
        return t
      case BindingCount.MultipleBindingsAvailable:
      default:
        if (n.isArray()) return t
        ;(i = getServiceIdentifierAsString(e)), (o = AMBIGUOUS_MATCH + " " + i)
        throw ((o += listRegisteredBindingsForServiceIdentifier(r, i, getBindings)), new Error(o))
    }
  }
  function _createSubRequests(e, t, n, r, i, o) {
    var a, s
    if (null === i) {
      ;(a = _getActiveBindings(e, t, r, null, o)), (s = new Request(n, r, null, a, o))
      var c = new Plan(r, s)
      r.addPlan(c)
    } else (a = _getActiveBindings(e, t, r, i, o)), (s = i.addChildRequest(o.serviceIdentifier, a, o))
    a.forEach(function (t) {
      var n = null
      if (o.isArray()) n = s.addChildRequest(t.serviceIdentifier, t, o)
      else {
        if (t.cache) return
        n = s
      }
      if (t.type === BindingTypeEnum.Instance && null !== t.implementationType) {
        var i = getDependencies(e, t.implementationType)
        if (!r.container.options.skipBaseClassChecks) {
          var a = getBaseClassDependencyCount(e, t.implementationType)
          if (i.length < a) {
            var c = ARGUMENTS_LENGTH_MISMATCH(getFunctionName(t.implementationType))
            throw new Error(c)
          }
        }
        i.forEach(function (t) {
          _createSubRequests(e, !1, t.serviceIdentifier, r, n, t)
        })
      }
    })
  }
  function getBindings(e, t) {
    var n = [],
      r = getBindingDictionary(e)
    return r.hasKey(t) ? (n = r.get(t)) : null !== e.parent && (n = getBindings(e.parent, t)), n
  }
  function plan(e, t, n, r, i, o, a, s) {
    void 0 === s && (s = !1)
    var c = new Context(t),
      l = _createTarget(n, r, i, "", o, a)
    try {
      return _createSubRequests(e, s, i, c, null, l), c
    } catch (u) {
      throw (isStackOverflowExeption(u) && circularDependencyToException(c.plan.rootRequest), u)
    }
  }
  function createMockRequest(e, t, n, r) {
    var i = new Target(TargetTypeEnum.Variable, "", t, new Metadata(n, r)),
      o = new Context(e)
    return new Request(t, o, null, [], i)
  }
  function isPromise(e) {
    return (("object" == typeof e && null !== e) || "function" == typeof e) && "function" == typeof e.then
  }
  function isPromiseOrContainsPromise(e) {
    return !!isPromise(e) || (Array.isArray(e) && e.some(isPromise))
  }
  var __awaiter$3 =
      (globalThis && globalThis.__awaiter) ||
      function (t, n, r, i) {
        return new (r || (r = Promise))(function (o, a) {
          function s(t) {
            try {
              l(i.next(t))
            } catch (e) {
              a(e)
            }
          }
          function c(t) {
            try {
              l(i.throw(t))
            } catch (e) {
              a(e)
            }
          }
          function l(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t)
                    })).then(s, c)
          }
          l((i = i.apply(t, n || [])).next())
        })
      },
    __generator$3 =
      (globalThis && globalThis.__generator) ||
      function (t, n) {
        var r,
          i,
          o,
          a,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (a = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this
            }),
          a
        )
        function c(a) {
          return function (c) {
            return (function (a) {
              if (r) throw new TypeError("Generator is already executing.")
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) &&
                      !(o = o.call(i, a[1])).done)
                  )
                    return o
                  switch (((i = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a
                      break
                    case 4:
                      return s.label++, { value: a[1], done: !1 }
                    case 5:
                      s.label++, (i = a[1]), (a = [0])
                      continue
                    case 7:
                      ;(a = s.ops.pop()), s.trys.pop()
                      continue
                    default:
                      if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                        s = 0
                        continue
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        s.label = a[1]
                        break
                      }
                      if (6 === a[0] && s.label < o[1]) {
                        ;(s.label = o[1]), (o = a)
                        break
                      }
                      if (o && s.label < o[2]) {
                        ;(s.label = o[2]), s.ops.push(a)
                        break
                      }
                      o[2] && s.ops.pop(), s.trys.pop()
                      continue
                  }
                  a = n.call(t, s)
                } catch (e) {
                  ;(a = [6, e]), (i = 0)
                } finally {
                  r = o = 0
                }
              if (5 & a[0]) throw a[1]
              return { value: a[0] ? a[1] : void 0, done: !0 }
            })([a, c])
          }
        }
      },
    tryGetFromScope = function (e, t) {
      return t.scope === BindingScopeEnum.Singleton && t.activated
        ? t.cache
        : t.scope === BindingScopeEnum.Request && e.has(t.id)
        ? e.get(t.id)
        : null
    },
    saveToScope = function (e, t, n) {
      t.scope === BindingScopeEnum.Singleton && _saveToSingletonScope(t, n),
        t.scope === BindingScopeEnum.Request && _saveToRequestScope(e, t, n)
    },
    _saveToRequestScope = function (e, t, n) {
      e.has(t.id) || e.set(t.id, n)
    },
    _saveToSingletonScope = function (e, t) {
      ;(e.cache = t), (e.activated = !0), isPromise(t) && _saveAsyncResultToSingletonScope(e, t)
    },
    _saveAsyncResultToSingletonScope = function (e, t) {
      return __awaiter$3(void 0, void 0, void 0, function () {
        var n, r
        return __generator$3(this, function (i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, t]
            case 1:
              return (n = i.sent()), (e.cache = n), [3, 3]
            case 2:
              throw ((r = i.sent()), (e.cache = null), (e.activated = !1), r)
            case 3:
              return [2]
          }
        })
      })
    },
    FactoryType,
    FactoryType2
  ;(FactoryType2 = FactoryType || (FactoryType = {})),
    (FactoryType2.DynamicValue = "toDynamicValue"),
    (FactoryType2.Factory = "toFactory"),
    (FactoryType2.Provider = "toProvider")
  var ensureFullyBound = function (e) {
      var t = null
      switch (e.type) {
        case BindingTypeEnum.ConstantValue:
        case BindingTypeEnum.Function:
          t = e.cache
          break
        case BindingTypeEnum.Constructor:
        case BindingTypeEnum.Instance:
          t = e.implementationType
          break
        case BindingTypeEnum.DynamicValue:
          t = e.dynamicValue
          break
        case BindingTypeEnum.Provider:
          t = e.provider
          break
        case BindingTypeEnum.Factory:
          t = e.factory
      }
      if (null === t) {
        var n = getServiceIdentifierAsString(e.serviceIdentifier)
        throw new Error(INVALID_BINDING_TYPE + " " + n)
      }
    },
    getFactoryDetails = function (e) {
      switch (e.type) {
        case BindingTypeEnum.Factory:
          return { factory: e.factory, factoryType: FactoryType.Factory }
        case BindingTypeEnum.Provider:
          return { factory: e.provider, factoryType: FactoryType.Provider }
        case BindingTypeEnum.DynamicValue:
          return { factory: e.dynamicValue, factoryType: FactoryType.DynamicValue }
        default:
          throw new Error("Unexpected factory type " + e.type)
      }
    },
    __assign$1 =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (__assign$1 =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
              return e
            }),
          __assign$1.apply(this, arguments)
        )
      },
    __awaiter$2 =
      (globalThis && globalThis.__awaiter) ||
      function (t, n, r, i) {
        return new (r || (r = Promise))(function (o, a) {
          function s(t) {
            try {
              l(i.next(t))
            } catch (e) {
              a(e)
            }
          }
          function c(t) {
            try {
              l(i.throw(t))
            } catch (e) {
              a(e)
            }
          }
          function l(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t)
                    })).then(s, c)
          }
          l((i = i.apply(t, n || [])).next())
        })
      },
    __generator$2 =
      (globalThis && globalThis.__generator) ||
      function (t, n) {
        var r,
          i,
          o,
          a,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (a = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this
            }),
          a
        )
        function c(a) {
          return function (c) {
            return (function (a) {
              if (r) throw new TypeError("Generator is already executing.")
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) &&
                      !(o = o.call(i, a[1])).done)
                  )
                    return o
                  switch (((i = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a
                      break
                    case 4:
                      return s.label++, { value: a[1], done: !1 }
                    case 5:
                      s.label++, (i = a[1]), (a = [0])
                      continue
                    case 7:
                      ;(a = s.ops.pop()), s.trys.pop()
                      continue
                    default:
                      if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                        s = 0
                        continue
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        s.label = a[1]
                        break
                      }
                      if (6 === a[0] && s.label < o[1]) {
                        ;(s.label = o[1]), (o = a)
                        break
                      }
                      if (o && s.label < o[2]) {
                        ;(s.label = o[2]), s.ops.push(a)
                        break
                      }
                      o[2] && s.ops.pop(), s.trys.pop()
                      continue
                  }
                  a = n.call(t, s)
                } catch (e) {
                  ;(a = [6, e]), (i = 0)
                } finally {
                  r = o = 0
                }
              if (5 & a[0]) throw a[1]
              return { value: a[0] ? a[1] : void 0, done: !0 }
            })([a, c])
          }
        }
      },
    __spreadArray$1 =
      (globalThis && globalThis.__spreadArray) ||
      function (e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]))
        return e.concat(r || Array.prototype.slice.call(t))
      }
  function _resolveRequests(e, t) {
    return e.reduce(
      function (e, n) {
        var r = t(n)
        return (
          n.target.type === TargetTypeEnum.ConstructorArgument
            ? e.constructorInjections.push(r)
            : (e.propertyRequests.push(n), e.propertyInjections.push(r)),
          e.isAsync || (e.isAsync = isPromiseOrContainsPromise(r)),
          e
        )
      },
      { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: !1 }
    )
  }
  function _createInstance(e, t, n) {
    var r
    if (t.length > 0) {
      var i = _resolveRequests(t, n),
        o = __assign$1(__assign$1({}, i), { constr: e })
      r = i.isAsync ? createInstanceWithInjectionsAsync(o) : createInstanceWithInjections(o)
    } else r = new e()
    return r
  }
  function createInstanceWithInjections(e) {
    var t,
      n = new ((t = e.constr).bind.apply(t, __spreadArray$1([void 0], e.constructorInjections, !1)))()
    return (
      e.propertyRequests.forEach(function (t, r) {
        var i = t.target.identifier,
          o = e.propertyInjections[r]
        n[i] = o
      }),
      n
    )
  }
  function createInstanceWithInjectionsAsync(e) {
    return __awaiter$2(this, void 0, void 0, function () {
      var t, n
      return __generator$2(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, possiblyWaitInjections(e.constructorInjections)]
          case 1:
            return (t = r.sent()), [4, possiblyWaitInjections(e.propertyInjections)]
          case 2:
            return (
              (n = r.sent()),
              [
                2,
                createInstanceWithInjections(
                  __assign$1(__assign$1({}, e), { constructorInjections: t, propertyInjections: n })
                ),
              ]
            )
        }
      })
    })
  }
  function possiblyWaitInjections(e) {
    return __awaiter$2(this, void 0, void 0, function () {
      var t, n, r, i
      return __generator$2(this, function (o) {
        for (t = [], n = 0, r = e; n < r.length; n++) (i = r[n]), Array.isArray(i) ? t.push(Promise.all(i)) : t.push(i)
        return [2, Promise.all(t)]
      })
    })
  }
  function _getInstanceAfterPostConstruct(e, t) {
    var n = _postConstruct(e, t)
    return isPromise(n)
      ? n.then(function () {
          return t
        })
      : t
  }
  function _postConstruct(t, n) {
    var r, i
    if (Reflect.hasMetadata(POST_CONSTRUCT, t)) {
      var o = Reflect.getMetadata(POST_CONSTRUCT, t)
      try {
        return null === (i = (r = n)[o.value]) || void 0 === i ? void 0 : i.call(r)
      } catch (e) {
        throw new Error(POST_CONSTRUCT_ERROR(t.name, e.message))
      }
    }
  }
  function _validateInstanceResolution(e, t) {
    e.scope !== BindingScopeEnum.Singleton && _throwIfHandlingDeactivation(e, t)
  }
  function _throwIfHandlingDeactivation(e, t) {
    var n =
      "Class cannot be instantiated in " + (e.scope === BindingScopeEnum.Request ? "request" : "transient") + " scope."
    if ("function" == typeof e.onDeactivation) throw new Error(ON_DEACTIVATION_ERROR(t.name, n))
    if (Reflect.hasMetadata(PRE_DESTROY, t)) throw new Error(PRE_DESTROY_ERROR(t.name, n))
  }
  function resolveInstance(e, t, n, r) {
    _validateInstanceResolution(e, t)
    var i = _createInstance(t, n, r)
    return isPromise(i)
      ? i.then(function (e) {
          return _getInstanceAfterPostConstruct(t, e)
        })
      : _getInstanceAfterPostConstruct(t, i)
  }
  var __awaiter$1 =
      (globalThis && globalThis.__awaiter) ||
      function (t, n, r, i) {
        return new (r || (r = Promise))(function (o, a) {
          function s(t) {
            try {
              l(i.next(t))
            } catch (e) {
              a(e)
            }
          }
          function c(t) {
            try {
              l(i.throw(t))
            } catch (e) {
              a(e)
            }
          }
          function l(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t)
                    })).then(s, c)
          }
          l((i = i.apply(t, n || [])).next())
        })
      },
    __generator$1 =
      (globalThis && globalThis.__generator) ||
      function (t, n) {
        var r,
          i,
          o,
          a,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (a = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this
            }),
          a
        )
        function c(a) {
          return function (c) {
            return (function (a) {
              if (r) throw new TypeError("Generator is already executing.")
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) &&
                      !(o = o.call(i, a[1])).done)
                  )
                    return o
                  switch (((i = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a
                      break
                    case 4:
                      return s.label++, { value: a[1], done: !1 }
                    case 5:
                      s.label++, (i = a[1]), (a = [0])
                      continue
                    case 7:
                      ;(a = s.ops.pop()), s.trys.pop()
                      continue
                    default:
                      if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                        s = 0
                        continue
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        s.label = a[1]
                        break
                      }
                      if (6 === a[0] && s.label < o[1]) {
                        ;(s.label = o[1]), (o = a)
                        break
                      }
                      if (o && s.label < o[2]) {
                        ;(s.label = o[2]), s.ops.push(a)
                        break
                      }
                      o[2] && s.ops.pop(), s.trys.pop()
                      continue
                  }
                  a = n.call(t, s)
                } catch (e) {
                  ;(a = [6, e]), (i = 0)
                } finally {
                  r = o = 0
                }
              if (5 & a[0]) throw a[1]
              return { value: a[0] ? a[1] : void 0, done: !0 }
            })([a, c])
          }
        }
      },
    _resolveRequest = function (e) {
      return function (t) {
        t.parentContext.setCurrentRequest(t)
        var n = t.bindings,
          r = t.childRequests,
          i = t.target && t.target.isArray(),
          o = !(
            t.parentRequest &&
            t.parentRequest.target &&
            t.target &&
            t.parentRequest.target.matchesArray(t.target.serviceIdentifier)
          )
        if (i && o)
          return r.map(function (t) {
            return _resolveRequest(e)(t)
          })
        if (!t.target.isOptional() || 0 !== n.length) {
          var a = n[0]
          return _resolveBinding(e, t, a)
        }
      }
    },
    _resolveFactoryFromBinding = function (e, t) {
      var n = getFactoryDetails(e)
      return tryAndThrowErrorIfStackOverflow(
        function () {
          return n.factory.bind(e)(t)
        },
        function () {
          return new Error(CIRCULAR_DEPENDENCY_IN_FACTORY(n.factoryType, t.currentRequest.serviceIdentifier.toString()))
        }
      )
    },
    _getResolvedFromBinding = function (e, t, n) {
      var r,
        i = t.childRequests
      switch ((ensureFullyBound(n), n.type)) {
        case BindingTypeEnum.ConstantValue:
        case BindingTypeEnum.Function:
          r = n.cache
          break
        case BindingTypeEnum.Constructor:
          r = n.implementationType
          break
        case BindingTypeEnum.Instance:
          r = resolveInstance(n, n.implementationType, i, _resolveRequest(e))
          break
        default:
          r = _resolveFactoryFromBinding(n, t.parentContext)
      }
      return r
    },
    _resolveInScope = function (e, t, n) {
      var r = tryGetFromScope(e, t)
      return null !== r || ((r = n()), saveToScope(e, t, r)), r
    },
    _resolveBinding = function (e, t, n) {
      return _resolveInScope(e, n, function () {
        var r = _getResolvedFromBinding(e, t, n)
        return (r = isPromise(r)
          ? r.then(function (e) {
              return _onActivation(t, n, e)
            })
          : _onActivation(t, n, r))
      })
    }
  function _onActivation(e, t, n) {
    var r,
      i = _bindingActivation(e.parentContext, t, n),
      o = _getContainersIterator(e.parentContext.container),
      a = o.next()
    do {
      r = a.value
      var s = e.parentContext,
        c = e.serviceIdentifier,
        l = _getContainerActivationsForService(r, c)
      ;(i = isPromise(i) ? _activateContainerAsync(l, s, i) : _activateContainer(l, s, i)), (a = o.next())
    } while (!0 !== a.done && !getBindingDictionary(r).hasKey(e.serviceIdentifier))
    return i
  }
  var _bindingActivation = function (e, t, n) {
      return "function" == typeof t.onActivation ? t.onActivation(e, n) : n
    },
    _activateContainer = function (e, t, n) {
      for (var r = e.next(); !r.done; ) {
        if (isPromise((n = r.value(t, n)))) return _activateContainerAsync(e, t, n)
        r = e.next()
      }
      return n
    },
    _activateContainerAsync = function (e, t, n) {
      return __awaiter$1(void 0, void 0, void 0, function () {
        var r, i
        return __generator$1(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, n]
            case 1:
              ;(r = o.sent()), (i = e.next()), (o.label = 2)
            case 2:
              return i.done ? [3, 4] : [4, i.value(t, r)]
            case 3:
              return (r = o.sent()), (i = e.next()), [3, 2]
            case 4:
              return [2, r]
          }
        })
      })
    },
    _getContainerActivationsForService = function (e, t) {
      var n = e._activations
      return n.hasKey(t) ? n.get(t).values() : [].values()
    },
    _getContainersIterator = function (e) {
      for (var t = [e], n = e.parent; null !== n; ) t.push(n), (n = n.parent)
      return {
        next: function () {
          var e = t.pop()
          return void 0 !== e ? { done: !1, value: e } : { done: !0, value: void 0 }
        },
      }
    }
  function resolve(e) {
    return _resolveRequest(e.plan.rootRequest.requestScope)(e.plan.rootRequest)
  }
  var traverseAncerstors = function (e, t) {
      var n = e.parentRequest
      return null !== n && (!!t(n) || traverseAncerstors(n, t))
    },
    taggedConstraint = function (e) {
      return function (t) {
        var n = function (n) {
          return null !== n && null !== n.target && n.target.matchesTag(e)(t)
        }
        return (n.metaData = new Metadata(e, t)), n
      }
    },
    namedConstraint = taggedConstraint(NAMED_TAG),
    typeConstraint = function (e) {
      return function (t) {
        var n = null
        if (null !== t) {
          if (((n = t.bindings[0]), "string" == typeof e)) return n.serviceIdentifier === e
          var r = t.bindings[0].implementationType
          return e === r
        }
        return !1
      }
    },
    BindingWhenSyntax = (function () {
      function e(e) {
        this._binding = e
      }
      return (
        (e.prototype.when = function (e) {
          return (this._binding.constraint = e), new BindingOnSyntax(this._binding)
        }),
        (e.prototype.whenTargetNamed = function (e) {
          return (this._binding.constraint = namedConstraint(e)), new BindingOnSyntax(this._binding)
        }),
        (e.prototype.whenTargetIsDefault = function () {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && null !== e.target && !e.target.isNamed() && !e.target.isTagged()
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenTargetTagged = function (e, t) {
          return (this._binding.constraint = taggedConstraint(e)(t)), new BindingOnSyntax(this._binding)
        }),
        (e.prototype.whenInjectedInto = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return null !== t && typeConstraint(e)(t.parentRequest)
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenParentNamed = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return null !== t && namedConstraint(e)(t.parentRequest)
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenParentTagged = function (e, t) {
          return (
            (this._binding.constraint = function (n) {
              return null !== n && taggedConstraint(e)(t)(n.parentRequest)
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenAnyAncestorIs = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return null !== t && traverseAncerstors(t, typeConstraint(e))
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenNoAncestorIs = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return null !== t && !traverseAncerstors(t, typeConstraint(e))
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenAnyAncestorNamed = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return null !== t && traverseAncerstors(t, namedConstraint(e))
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenNoAncestorNamed = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return null !== t && !traverseAncerstors(t, namedConstraint(e))
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenAnyAncestorTagged = function (e, t) {
          return (
            (this._binding.constraint = function (n) {
              return null !== n && traverseAncerstors(n, taggedConstraint(e)(t))
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenNoAncestorTagged = function (e, t) {
          return (
            (this._binding.constraint = function (n) {
              return null !== n && !traverseAncerstors(n, taggedConstraint(e)(t))
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenAnyAncestorMatches = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return null !== t && traverseAncerstors(t, e)
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenNoAncestorMatches = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return null !== t && !traverseAncerstors(t, e)
            }),
            new BindingOnSyntax(this._binding)
          )
        }),
        e
      )
    })(),
    BindingOnSyntax = (function () {
      function e(e) {
        this._binding = e
      }
      return (
        (e.prototype.onActivation = function (e) {
          return (this._binding.onActivation = e), new BindingWhenSyntax(this._binding)
        }),
        (e.prototype.onDeactivation = function (e) {
          return (this._binding.onDeactivation = e), new BindingWhenSyntax(this._binding)
        }),
        e
      )
    })(),
    BindingWhenOnSyntax = (function () {
      function e(e) {
        ;(this._binding = e),
          (this._bindingWhenSyntax = new BindingWhenSyntax(this._binding)),
          (this._bindingOnSyntax = new BindingOnSyntax(this._binding))
      }
      return (
        (e.prototype.when = function (e) {
          return this._bindingWhenSyntax.when(e)
        }),
        (e.prototype.whenTargetNamed = function (e) {
          return this._bindingWhenSyntax.whenTargetNamed(e)
        }),
        (e.prototype.whenTargetIsDefault = function () {
          return this._bindingWhenSyntax.whenTargetIsDefault()
        }),
        (e.prototype.whenTargetTagged = function (e, t) {
          return this._bindingWhenSyntax.whenTargetTagged(e, t)
        }),
        (e.prototype.whenInjectedInto = function (e) {
          return this._bindingWhenSyntax.whenInjectedInto(e)
        }),
        (e.prototype.whenParentNamed = function (e) {
          return this._bindingWhenSyntax.whenParentNamed(e)
        }),
        (e.prototype.whenParentTagged = function (e, t) {
          return this._bindingWhenSyntax.whenParentTagged(e, t)
        }),
        (e.prototype.whenAnyAncestorIs = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(e)
        }),
        (e.prototype.whenNoAncestorIs = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorIs(e)
        }),
        (e.prototype.whenAnyAncestorNamed = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
        }),
        (e.prototype.whenAnyAncestorTagged = function (e, t) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
        }),
        (e.prototype.whenNoAncestorNamed = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(e)
        }),
        (e.prototype.whenNoAncestorTagged = function (e, t) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
        }),
        (e.prototype.whenAnyAncestorMatches = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
        }),
        (e.prototype.whenNoAncestorMatches = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(e)
        }),
        (e.prototype.onActivation = function (e) {
          return this._bindingOnSyntax.onActivation(e)
        }),
        (e.prototype.onDeactivation = function (e) {
          return this._bindingOnSyntax.onDeactivation(e)
        }),
        e
      )
    })(),
    BindingInSyntax = (function () {
      function e(e) {
        this._binding = e
      }
      return (
        (e.prototype.inRequestScope = function () {
          return (this._binding.scope = BindingScopeEnum.Request), new BindingWhenOnSyntax(this._binding)
        }),
        (e.prototype.inSingletonScope = function () {
          return (this._binding.scope = BindingScopeEnum.Singleton), new BindingWhenOnSyntax(this._binding)
        }),
        (e.prototype.inTransientScope = function () {
          return (this._binding.scope = BindingScopeEnum.Transient), new BindingWhenOnSyntax(this._binding)
        }),
        e
      )
    })(),
    BindingInWhenOnSyntax = (function () {
      function e(e) {
        ;(this._binding = e),
          (this._bindingWhenSyntax = new BindingWhenSyntax(this._binding)),
          (this._bindingOnSyntax = new BindingOnSyntax(this._binding)),
          (this._bindingInSyntax = new BindingInSyntax(e))
      }
      return (
        (e.prototype.inRequestScope = function () {
          return this._bindingInSyntax.inRequestScope()
        }),
        (e.prototype.inSingletonScope = function () {
          return this._bindingInSyntax.inSingletonScope()
        }),
        (e.prototype.inTransientScope = function () {
          return this._bindingInSyntax.inTransientScope()
        }),
        (e.prototype.when = function (e) {
          return this._bindingWhenSyntax.when(e)
        }),
        (e.prototype.whenTargetNamed = function (e) {
          return this._bindingWhenSyntax.whenTargetNamed(e)
        }),
        (e.prototype.whenTargetIsDefault = function () {
          return this._bindingWhenSyntax.whenTargetIsDefault()
        }),
        (e.prototype.whenTargetTagged = function (e, t) {
          return this._bindingWhenSyntax.whenTargetTagged(e, t)
        }),
        (e.prototype.whenInjectedInto = function (e) {
          return this._bindingWhenSyntax.whenInjectedInto(e)
        }),
        (e.prototype.whenParentNamed = function (e) {
          return this._bindingWhenSyntax.whenParentNamed(e)
        }),
        (e.prototype.whenParentTagged = function (e, t) {
          return this._bindingWhenSyntax.whenParentTagged(e, t)
        }),
        (e.prototype.whenAnyAncestorIs = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(e)
        }),
        (e.prototype.whenNoAncestorIs = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorIs(e)
        }),
        (e.prototype.whenAnyAncestorNamed = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
        }),
        (e.prototype.whenAnyAncestorTagged = function (e, t) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
        }),
        (e.prototype.whenNoAncestorNamed = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(e)
        }),
        (e.prototype.whenNoAncestorTagged = function (e, t) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
        }),
        (e.prototype.whenAnyAncestorMatches = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
        }),
        (e.prototype.whenNoAncestorMatches = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(e)
        }),
        (e.prototype.onActivation = function (e) {
          return this._bindingOnSyntax.onActivation(e)
        }),
        (e.prototype.onDeactivation = function (e) {
          return this._bindingOnSyntax.onDeactivation(e)
        }),
        e
      )
    })(),
    BindingToSyntax = (function () {
      function e(e) {
        this._binding = e
      }
      return (
        (e.prototype.to = function (e) {
          return (
            (this._binding.type = BindingTypeEnum.Instance),
            (this._binding.implementationType = e),
            new BindingInWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toSelf = function () {
          if ("function" != typeof this._binding.serviceIdentifier) throw new Error("" + INVALID_TO_SELF_VALUE)
          var e = this._binding.serviceIdentifier
          return this.to(e)
        }),
        (e.prototype.toConstantValue = function (e) {
          return (
            (this._binding.type = BindingTypeEnum.ConstantValue),
            (this._binding.cache = e),
            (this._binding.dynamicValue = null),
            (this._binding.implementationType = null),
            (this._binding.scope = BindingScopeEnum.Singleton),
            new BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toDynamicValue = function (e) {
          return (
            (this._binding.type = BindingTypeEnum.DynamicValue),
            (this._binding.cache = null),
            (this._binding.dynamicValue = e),
            (this._binding.implementationType = null),
            new BindingInWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toConstructor = function (e) {
          return (
            (this._binding.type = BindingTypeEnum.Constructor),
            (this._binding.implementationType = e),
            (this._binding.scope = BindingScopeEnum.Singleton),
            new BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toFactory = function (e) {
          return (
            (this._binding.type = BindingTypeEnum.Factory),
            (this._binding.factory = e),
            (this._binding.scope = BindingScopeEnum.Singleton),
            new BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toFunction = function (e) {
          if ("function" != typeof e) throw new Error(INVALID_FUNCTION_BINDING)
          var t = this.toConstantValue(e)
          return (this._binding.type = BindingTypeEnum.Function), (this._binding.scope = BindingScopeEnum.Singleton), t
        }),
        (e.prototype.toAutoFactory = function (e) {
          return (
            (this._binding.type = BindingTypeEnum.Factory),
            (this._binding.factory = function (t) {
              return function () {
                return t.container.get(e)
              }
            }),
            (this._binding.scope = BindingScopeEnum.Singleton),
            new BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toAutoNamedFactory = function (e) {
          return (
            (this._binding.type = BindingTypeEnum.Factory),
            (this._binding.factory = function (t) {
              return function (n) {
                return t.container.getNamed(e, n)
              }
            }),
            new BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toProvider = function (e) {
          return (
            (this._binding.type = BindingTypeEnum.Provider),
            (this._binding.provider = e),
            (this._binding.scope = BindingScopeEnum.Singleton),
            new BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toService = function (e) {
          this.toDynamicValue(function (t) {
            return t.container.get(e)
          })
        }),
        e
      )
    })(),
    ContainerSnapshot = (function () {
      function e() {}
      return (
        (e.of = function (t, n, r, i, o) {
          var a = new e()
          return (
            (a.bindings = t),
            (a.middleware = n),
            (a.deactivations = i),
            (a.activations = r),
            (a.moduleActivationStore = o),
            a
          )
        }),
        e
      )
    })()
  function isClonable(e) {
    return "object" == typeof e && null !== e && "clone" in e && "function" == typeof e.clone
  }
  var Lookup = (function () {
      function e() {
        this._map = new Map()
      }
      return (
        (e.prototype.getMap = function () {
          return this._map
        }),
        (e.prototype.add = function (e, t) {
          if (null == e) throw new Error(NULL_ARGUMENT)
          if (null == t) throw new Error(NULL_ARGUMENT)
          var n = this._map.get(e)
          void 0 !== n ? n.push(t) : this._map.set(e, [t])
        }),
        (e.prototype.get = function (e) {
          if (null == e) throw new Error(NULL_ARGUMENT)
          var t = this._map.get(e)
          if (void 0 !== t) return t
          throw new Error(KEY_NOT_FOUND)
        }),
        (e.prototype.remove = function (e) {
          if (null == e) throw new Error(NULL_ARGUMENT)
          if (!this._map.delete(e)) throw new Error(KEY_NOT_FOUND)
        }),
        (e.prototype.removeIntersection = function (e) {
          var t = this
          this.traverse(function (n, r) {
            var i = e.hasKey(n) ? e.get(n) : void 0
            if (void 0 !== i) {
              var o = r.filter(function (e) {
                return !i.some(function (t) {
                  return e === t
                })
              })
              t._setValue(n, o)
            }
          })
        }),
        (e.prototype.removeByCondition = function (e) {
          var t = this,
            n = []
          return (
            this._map.forEach(function (r, i) {
              for (var o = [], a = 0, s = r; a < s.length; a++) {
                var c = s[a]
                e(c) ? n.push(c) : o.push(c)
              }
              t._setValue(i, o)
            }),
            n
          )
        }),
        (e.prototype.hasKey = function (e) {
          if (null == e) throw new Error(NULL_ARGUMENT)
          return this._map.has(e)
        }),
        (e.prototype.clone = function () {
          var t = new e()
          return (
            this._map.forEach(function (e, n) {
              e.forEach(function (e) {
                return t.add(n, isClonable(e) ? e.clone() : e)
              })
            }),
            t
          )
        }),
        (e.prototype.traverse = function (e) {
          this._map.forEach(function (t, n) {
            e(n, t)
          })
        }),
        (e.prototype._setValue = function (e, t) {
          t.length > 0 ? this._map.set(e, t) : this._map.delete(e)
        }),
        e
      )
    })(),
    ModuleActivationStore = (function () {
      function e() {
        this._map = new Map()
      }
      return (
        (e.prototype.remove = function (e) {
          if (this._map.has(e)) {
            var t = this._map.get(e)
            return this._map.delete(e), t
          }
          return this._getEmptyHandlersStore()
        }),
        (e.prototype.addDeactivation = function (e, t, n) {
          this._getModuleActivationHandlers(e).onDeactivations.add(t, n)
        }),
        (e.prototype.addActivation = function (e, t, n) {
          this._getModuleActivationHandlers(e).onActivations.add(t, n)
        }),
        (e.prototype.clone = function () {
          var t = new e()
          return (
            this._map.forEach(function (e, n) {
              t._map.set(n, { onActivations: e.onActivations.clone(), onDeactivations: e.onDeactivations.clone() })
            }),
            t
          )
        }),
        (e.prototype._getModuleActivationHandlers = function (e) {
          var t = this._map.get(e)
          return void 0 === t && ((t = this._getEmptyHandlersStore()), this._map.set(e, t)), t
        }),
        (e.prototype._getEmptyHandlersStore = function () {
          return { onActivations: new Lookup(), onDeactivations: new Lookup() }
        }),
        e
      )
    })(),
    __assign =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (__assign =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
              return e
            }),
          __assign.apply(this, arguments)
        )
      },
    __awaiter =
      (globalThis && globalThis.__awaiter) ||
      function (t, n, r, i) {
        return new (r || (r = Promise))(function (o, a) {
          function s(t) {
            try {
              l(i.next(t))
            } catch (e) {
              a(e)
            }
          }
          function c(t) {
            try {
              l(i.throw(t))
            } catch (e) {
              a(e)
            }
          }
          function l(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t)
                    })).then(s, c)
          }
          l((i = i.apply(t, n || [])).next())
        })
      },
    __generator =
      (globalThis && globalThis.__generator) ||
      function (t, n) {
        var r,
          i,
          o,
          a,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (a = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this
            }),
          a
        )
        function c(a) {
          return function (c) {
            return (function (a) {
              if (r) throw new TypeError("Generator is already executing.")
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) &&
                      !(o = o.call(i, a[1])).done)
                  )
                    return o
                  switch (((i = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a
                      break
                    case 4:
                      return s.label++, { value: a[1], done: !1 }
                    case 5:
                      s.label++, (i = a[1]), (a = [0])
                      continue
                    case 7:
                      ;(a = s.ops.pop()), s.trys.pop()
                      continue
                    default:
                      if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                        s = 0
                        continue
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        s.label = a[1]
                        break
                      }
                      if (6 === a[0] && s.label < o[1]) {
                        ;(s.label = o[1]), (o = a)
                        break
                      }
                      if (o && s.label < o[2]) {
                        ;(s.label = o[2]), s.ops.push(a)
                        break
                      }
                      o[2] && s.ops.pop(), s.trys.pop()
                      continue
                  }
                  a = n.call(t, s)
                } catch (e) {
                  ;(a = [6, e]), (i = 0)
                } finally {
                  r = o = 0
                }
              if (5 & a[0]) throw a[1]
              return { value: a[0] ? a[1] : void 0, done: !0 }
            })([a, c])
          }
        }
      },
    __spreadArray =
      (globalThis && globalThis.__spreadArray) ||
      function (e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]))
        return e.concat(r || Array.prototype.slice.call(t))
      },
    Container = (function () {
      function t(e) {
        var t = e || {}
        if ("object" != typeof t) throw new Error("" + CONTAINER_OPTIONS_MUST_BE_AN_OBJECT)
        if (void 0 === t.defaultScope) t.defaultScope = BindingScopeEnum.Transient
        else if (
          t.defaultScope !== BindingScopeEnum.Singleton &&
          t.defaultScope !== BindingScopeEnum.Transient &&
          t.defaultScope !== BindingScopeEnum.Request
        )
          throw new Error("" + CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE)
        if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1
        else if ("boolean" != typeof t.autoBindInjectable)
          throw new Error("" + CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE)
        if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1
        else if ("boolean" != typeof t.skipBaseClassChecks)
          throw new Error("" + CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK)
        ;(this.options = {
          autoBindInjectable: t.autoBindInjectable,
          defaultScope: t.defaultScope,
          skipBaseClassChecks: t.skipBaseClassChecks,
        }),
          (this.id = id()),
          (this._bindingDictionary = new Lookup()),
          (this._snapshots = []),
          (this._middleware = null),
          (this._activations = new Lookup()),
          (this._deactivations = new Lookup()),
          (this.parent = null),
          (this._metadataReader = new MetadataReader()),
          (this._moduleActivationStore = new ModuleActivationStore())
      }
      return (
        (t.merge = function (e, n) {
          for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]
          var o = new t(),
            a = __spreadArray([e, n], r, !0).map(function (e) {
              return getBindingDictionary(e)
            }),
            s = getBindingDictionary(o)
          return (
            a.forEach(function (e) {
              var t
              ;(t = s),
                e.traverse(function (e, n) {
                  n.forEach(function (e) {
                    t.add(e.serviceIdentifier, e.clone())
                  })
                })
            }),
            o
          )
        }),
        (t.prototype.load = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          for (var n = this._getContainerModuleHelpersFactory(), r = 0, i = e; r < i.length; r++) {
            var o = i[r],
              a = n(o.id)
            o.registry(
              a.bindFunction,
              a.unbindFunction,
              a.isboundFunction,
              a.rebindFunction,
              a.unbindAsyncFunction,
              a.onActivationFunction,
              a.onDeactivationFunction
            )
          }
        }),
        (t.prototype.loadAsync = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return __awaiter(this, void 0, void 0, function () {
            var t, n, r, i, o
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  ;(t = this._getContainerModuleHelpersFactory()), (n = 0), (r = e), (a.label = 1)
                case 1:
                  return n < r.length
                    ? ((i = r[n]),
                      (o = t(i.id)),
                      [
                        4,
                        i.registry(
                          o.bindFunction,
                          o.unbindFunction,
                          o.isboundFunction,
                          o.rebindFunction,
                          o.unbindAsyncFunction,
                          o.onActivationFunction,
                          o.onDeactivationFunction
                        ),
                      ])
                    : [3, 4]
                case 2:
                  a.sent(), (a.label = 3)
                case 3:
                  return n++, [3, 1]
                case 4:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.unload = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          t.forEach(function (t) {
            var n = e._removeModuleBindings(t.id)
            e._deactivateSingletons(n), e._removeModuleHandlers(t.id)
          })
        }),
        (t.prototype.unloadAsync = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return __awaiter(this, void 0, void 0, function () {
            var t, n, r, i
            return __generator(this, function (o) {
              switch (o.label) {
                case 0:
                  ;(t = 0), (n = e), (o.label = 1)
                case 1:
                  return t < n.length
                    ? ((r = n[t]), (i = this._removeModuleBindings(r.id)), [4, this._deactivateSingletonsAsync(i)])
                    : [3, 4]
                case 2:
                  o.sent(), this._removeModuleHandlers(r.id), (o.label = 3)
                case 3:
                  return t++, [3, 1]
                case 4:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.bind = function (e) {
          var t = this.options.defaultScope || BindingScopeEnum.Transient,
            n = new Binding(e, t)
          return this._bindingDictionary.add(e, n), new BindingToSyntax(n)
        }),
        (t.prototype.rebind = function (e) {
          return this.unbind(e), this.bind(e)
        }),
        (t.prototype.rebindAsync = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.unbindAsync(e)]
                case 1:
                  return t.sent(), [2, this.bind(e)]
              }
            })
          })
        }),
        (t.prototype.unbind = function (e) {
          if (this._bindingDictionary.hasKey(e)) {
            var t = this._bindingDictionary.get(e)
            this._deactivateSingletons(t)
          }
          this._removeServiceFromDictionary(e)
        }),
        (t.prototype.unbindAsync = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return this._bindingDictionary.hasKey(e)
                    ? ((t = this._bindingDictionary.get(e)), [4, this._deactivateSingletonsAsync(t)])
                    : [3, 2]
                case 1:
                  n.sent(), (n.label = 2)
                case 2:
                  return this._removeServiceFromDictionary(e), [2]
              }
            })
          })
        }),
        (t.prototype.unbindAll = function () {
          var e = this
          this._bindingDictionary.traverse(function (t, n) {
            e._deactivateSingletons(n)
          }),
            (this._bindingDictionary = new Lookup())
        }),
        (t.prototype.unbindAllAsync = function () {
          return __awaiter(this, void 0, void 0, function () {
            var e,
              t = this
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (e = []),
                    this._bindingDictionary.traverse(function (n, r) {
                      e.push(t._deactivateSingletonsAsync(r))
                    }),
                    [4, Promise.all(e)]
                  )
                case 1:
                  return n.sent(), (this._bindingDictionary = new Lookup()), [2]
              }
            })
          })
        }),
        (t.prototype.onActivation = function (e, t) {
          this._activations.add(e, t)
        }),
        (t.prototype.onDeactivation = function (e, t) {
          this._deactivations.add(e, t)
        }),
        (t.prototype.isBound = function (e) {
          var t = this._bindingDictionary.hasKey(e)
          return !t && this.parent && (t = this.parent.isBound(e)), t
        }),
        (t.prototype.isCurrentBound = function (e) {
          return this._bindingDictionary.hasKey(e)
        }),
        (t.prototype.isBoundNamed = function (e, t) {
          return this.isBoundTagged(e, NAMED_TAG, t)
        }),
        (t.prototype.isBoundTagged = function (e, t, n) {
          var r = !1
          if (this._bindingDictionary.hasKey(e)) {
            var i = this._bindingDictionary.get(e),
              o = createMockRequest(this, e, t, n)
            r = i.some(function (e) {
              return e.constraint(o)
            })
          }
          return !r && this.parent && (r = this.parent.isBoundTagged(e, t, n)), r
        }),
        (t.prototype.snapshot = function () {
          this._snapshots.push(
            ContainerSnapshot.of(
              this._bindingDictionary.clone(),
              this._middleware,
              this._activations.clone(),
              this._deactivations.clone(),
              this._moduleActivationStore.clone()
            )
          )
        }),
        (t.prototype.restore = function () {
          var e = this._snapshots.pop()
          if (void 0 === e) throw new Error(NO_MORE_SNAPSHOTS_AVAILABLE)
          ;(this._bindingDictionary = e.bindings),
            (this._activations = e.activations),
            (this._deactivations = e.deactivations),
            (this._middleware = e.middleware),
            (this._moduleActivationStore = e.moduleActivationStore)
        }),
        (t.prototype.createChild = function (e) {
          var n = new t(e || this.options)
          return (n.parent = this), n
        }),
        (t.prototype.applyMiddleware = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          var n = this._middleware ? this._middleware : this._planAndResolve()
          this._middleware = e.reduce(function (e, t) {
            return t(e)
          }, n)
        }),
        (t.prototype.applyCustomMetadataReader = function (e) {
          this._metadataReader = e
        }),
        (t.prototype.get = function (e) {
          var t = this._getNotAllArgs(e, !1)
          return this._getButThrowIfAsync(t)
        }),
        (t.prototype.getAsync = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t
            return __generator(this, function (n) {
              return (t = this._getNotAllArgs(e, !1)), [2, this._get(t)]
            })
          })
        }),
        (t.prototype.getTagged = function (e, t, n) {
          var r = this._getNotAllArgs(e, !1, t, n)
          return this._getButThrowIfAsync(r)
        }),
        (t.prototype.getTaggedAsync = function (e, t, n) {
          return __awaiter(this, void 0, void 0, function () {
            var r
            return __generator(this, function (i) {
              return (r = this._getNotAllArgs(e, !1, t, n)), [2, this._get(r)]
            })
          })
        }),
        (t.prototype.getNamed = function (e, t) {
          return this.getTagged(e, NAMED_TAG, t)
        }),
        (t.prototype.getNamedAsync = function (e, t) {
          return this.getTaggedAsync(e, NAMED_TAG, t)
        }),
        (t.prototype.getAll = function (e) {
          var t = this._getAllArgs(e)
          return this._getButThrowIfAsync(t)
        }),
        (t.prototype.getAllAsync = function (e) {
          var t = this._getAllArgs(e)
          return this._getAll(t)
        }),
        (t.prototype.getAllTagged = function (e, t, n) {
          var r = this._getNotAllArgs(e, !0, t, n)
          return this._getButThrowIfAsync(r)
        }),
        (t.prototype.getAllTaggedAsync = function (e, t, n) {
          var r = this._getNotAllArgs(e, !0, t, n)
          return this._getAll(r)
        }),
        (t.prototype.getAllNamed = function (e, t) {
          return this.getAllTagged(e, NAMED_TAG, t)
        }),
        (t.prototype.getAllNamedAsync = function (e, t) {
          return this.getAllTaggedAsync(e, NAMED_TAG, t)
        }),
        (t.prototype.resolve = function (e) {
          var t = this.isBound(e)
          t || this.bind(e).toSelf()
          var n = this.get(e)
          return t || this.unbind(e), n
        }),
        (t.prototype._preDestroy = function (e, t) {
          if (Reflect.hasMetadata(PRE_DESTROY, e)) return t[Reflect.getMetadata(PRE_DESTROY, e).value]()
        }),
        (t.prototype._removeModuleHandlers = function (e) {
          var t = this._moduleActivationStore.remove(e)
          this._activations.removeIntersection(t.onActivations),
            this._deactivations.removeIntersection(t.onDeactivations)
        }),
        (t.prototype._removeModuleBindings = function (e) {
          return this._bindingDictionary.removeByCondition(function (t) {
            return t.moduleId === e
          })
        }),
        (t.prototype._deactivate = function (e, t) {
          var n = this,
            r = Object.getPrototypeOf(t).constructor
          try {
            if (this._deactivations.hasKey(e.serviceIdentifier)) {
              var i = this._deactivateContainer(t, this._deactivations.get(e.serviceIdentifier).values())
              if (isPromise(i))
                return this._handleDeactivationError(
                  i.then(function () {
                    return n._propagateContainerDeactivationThenBindingAndPreDestroyAsync(e, t, r)
                  }),
                  r
                )
            }
            var o = this._propagateContainerDeactivationThenBindingAndPreDestroy(e, t, r)
            if (isPromise(o)) return this._handleDeactivationError(o, r)
          } catch (a) {
            throw new Error(ON_DEACTIVATION_ERROR(r.name, a.message))
          }
        }),
        (t.prototype._handleDeactivationError = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var n
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return r.trys.push([0, 2, , 3]), [4, e]
                case 1:
                  return r.sent(), [3, 3]
                case 2:
                  throw ((n = r.sent()), new Error(ON_DEACTIVATION_ERROR(t.name, n.message)))
                case 3:
                  return [2]
              }
            })
          })
        }),
        (t.prototype._deactivateContainer = function (e, t) {
          for (var n = this, r = t.next(); r.value; ) {
            var i = r.value(e)
            if (isPromise(i))
              return i.then(function () {
                return n._deactivateContainerAsync(e, t)
              })
            r = t.next()
          }
        }),
        (t.prototype._deactivateContainerAsync = function (e, t) {
          return __awaiter(this, void 0, void 0, function () {
            var n
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  ;(n = t.next()), (r.label = 1)
                case 1:
                  return n.value ? [4, n.value(e)] : [3, 3]
                case 2:
                  return r.sent(), (n = t.next()), [3, 1]
                case 3:
                  return [2]
              }
            })
          })
        }),
        (t.prototype._getContainerModuleHelpersFactory = function () {
          var e = this,
            t = function (e, t) {
              e._binding.moduleId = t
            },
            n = function (n) {
              return function (r) {
                var i = e.rebind(r)
                return t(i, n), i
              }
            },
            r = function (t) {
              return function (n, r) {
                e._moduleActivationStore.addActivation(t, n, r), e.onActivation(n, r)
              }
            },
            i = function (t) {
              return function (n, r) {
                e._moduleActivationStore.addDeactivation(t, n, r), e.onDeactivation(n, r)
              }
            }
          return function (o) {
            return {
              bindFunction:
                ((a = o),
                function (n) {
                  var r = e.bind(n)
                  return t(r, a), r
                }),
              isboundFunction: function (t) {
                return e.isBound(t)
              },
              onActivationFunction: r(o),
              onDeactivationFunction: i(o),
              rebindFunction: n(o),
              unbindFunction: function (t) {
                return e.unbind(t)
              },
              unbindAsyncFunction: function (t) {
                return e.unbindAsync(t)
              },
            }
            var a
          }
        }),
        (t.prototype._getAll = function (e) {
          return Promise.all(this._get(e))
        }),
        (t.prototype._get = function (e) {
          var t = __assign(__assign({}, e), {
            contextInterceptor: function (e) {
              return e
            },
            targetType: TargetTypeEnum.Variable,
          })
          if (this._middleware) {
            var n = this._middleware(t)
            if (null == n) throw new Error(INVALID_MIDDLEWARE_RETURN)
            return n
          }
          return this._planAndResolve()(t)
        }),
        (t.prototype._getButThrowIfAsync = function (e) {
          var t = this._get(e)
          if (isPromiseOrContainsPromise(t)) throw new Error(LAZY_IN_SYNC(e.serviceIdentifier))
          return t
        }),
        (t.prototype._getAllArgs = function (e) {
          return { avoidConstraints: !0, isMultiInject: !0, serviceIdentifier: e }
        }),
        (t.prototype._getNotAllArgs = function (e, t, n, r) {
          return { avoidConstraints: !1, isMultiInject: t, serviceIdentifier: e, key: n, value: r }
        }),
        (t.prototype._planAndResolve = function () {
          var e = this
          return function (t) {
            var n = plan(
              e._metadataReader,
              e,
              t.isMultiInject,
              t.targetType,
              t.serviceIdentifier,
              t.key,
              t.value,
              t.avoidConstraints
            )
            return resolve((n = t.contextInterceptor(n)))
          }
        }),
        (t.prototype._deactivateIfSingleton = function (e) {
          var t = this
          if (e.activated)
            return isPromise(e.cache)
              ? e.cache.then(function (n) {
                  return t._deactivate(e, n)
                })
              : this._deactivate(e, e.cache)
        }),
        (t.prototype._deactivateSingletons = function (e) {
          for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t]
            if (isPromise(this._deactivateIfSingleton(r))) throw new Error(ASYNC_UNBIND_REQUIRED)
          }
        }),
        (t.prototype._deactivateSingletonsAsync = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t = this
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    Promise.all(
                      e.map(function (e) {
                        return t._deactivateIfSingleton(e)
                      })
                    ),
                  ]
                case 1:
                  return n.sent(), [2]
              }
            })
          })
        }),
        (t.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function (e, t, n) {
          return this.parent
            ? this._deactivate.bind(this.parent)(e, t)
            : this._bindingDeactivationAndPreDestroy(e, t, n)
        }),
        (t.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function (e, t, n) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return this.parent ? [4, this._deactivate.bind(this.parent)(e, t)] : [3, 2]
                case 1:
                  return r.sent(), [3, 4]
                case 2:
                  return [4, this._bindingDeactivationAndPreDestroyAsync(e, t, n)]
                case 3:
                  r.sent(), (r.label = 4)
                case 4:
                  return [2]
              }
            })
          })
        }),
        (t.prototype._removeServiceFromDictionary = function (t) {
          try {
            this._bindingDictionary.remove(t)
          } catch (e) {
            throw new Error(CANNOT_UNBIND + " " + getServiceIdentifierAsString(t))
          }
        }),
        (t.prototype._bindingDeactivationAndPreDestroy = function (e, t, n) {
          var r = this
          if ("function" == typeof e.onDeactivation) {
            var i = e.onDeactivation(t)
            if (isPromise(i))
              return i.then(function () {
                return r._preDestroy(n, t)
              })
          }
          return this._preDestroy(n, t)
        }),
        (t.prototype._bindingDeactivationAndPreDestroyAsync = function (e, t, n) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return "function" != typeof e.onDeactivation ? [3, 2] : [4, e.onDeactivation(t)]
                case 1:
                  r.sent(), (r.label = 2)
                case 2:
                  return [4, this._preDestroy(n, t)]
                case 3:
                  return r.sent(), [2]
              }
            })
          })
        }),
        t
      )
    })()
  function getFirstArrayDuplicate(e) {
    for (var t = new Set(), n = 0, r = e; n < r.length; n++) {
      var i = r[n]
      if (t.has(i)) return i
      t.add(i)
    }
  }
  function targetIsConstructorFunction(e) {
    return void 0 !== e.prototype
  }
  function _throwIfMethodParameter(e) {
    if (void 0 !== e) throw new Error(INVALID_DECORATOR_OPERATION)
  }
  function tagParameter(e, t, n, r) {
    _throwIfMethodParameter(t), _tagParameterOrProperty(TAGGED, e, n.toString(), r)
  }
  function tagProperty(e, t, n) {
    if (targetIsConstructorFunction(e)) throw new Error(INVALID_DECORATOR_OPERATION)
    _tagParameterOrProperty(TAGGED_PROP, e.constructor, t, n)
  }
  function _ensureNoMetadataKeyDuplicates(e) {
    var t = []
    if (Array.isArray(e)) {
      var n = getFirstArrayDuplicate(
        (t = e).map(function (e) {
          return e.key
        })
      )
      if (void 0 !== n) throw new Error(DUPLICATED_METADATA + " " + n.toString())
    } else t = [e]
    return t
  }
  function _tagParameterOrProperty(e, t, n, r) {
    var i = _ensureNoMetadataKeyDuplicates(r),
      o = {}
    Reflect.hasOwnMetadata(e, t) && (o = Reflect.getMetadata(e, t))
    var a = o[n]
    if (void 0 === a) a = []
    else
      for (
        var s = function (e) {
            if (
              i.some(function (t) {
                return t.key === e.key
              })
            )
              throw new Error(DUPLICATED_METADATA + " " + e.key.toString())
          },
          c = 0,
          l = a;
        c < l.length;
        c++
      ) {
        s(l[c])
      }
    a.push.apply(a, i), (o[n] = a), Reflect.defineMetadata(e, o, t)
  }
  function createTaggedDecorator(e) {
    return function (t, n, r) {
      "number" == typeof r ? tagParameter(t, n, r, e) : tagProperty(t, n, e)
    }
  }
  function injectable() {
    return function (e) {
      if (Reflect.hasOwnMetadata(PARAM_TYPES, e)) throw new Error(DUPLICATED_INJECTABLE_DECORATOR)
      var t = Reflect.getMetadata(DESIGN_PARAM_TYPES, e) || []
      return Reflect.defineMetadata(PARAM_TYPES, t, e), e
    }
  }
  function injectBase(e) {
    return function (t) {
      return function (n, r, i) {
        if (void 0 === t) {
          var o = "function" == typeof n ? n.name : n.constructor.name
          throw new Error(UNDEFINED_INJECT_ANNOTATION(o))
        }
        return createTaggedDecorator(new Metadata(e, t))(n, r, i)
      }
    }
  }
  var inject = injectBase(INJECT_TAG)
  const PLUGIN_SYSTEM_AUTO_UPDATE = "PLUGIN_SYSTEM_AUTO_UPDATE",
    PLUGIN_SYSTEM_PLUGIN = "PLUGIN_SYSTEM_PLUGIN",
    PLUGIN_SYSTEM_THIRD_PARTY_PLUGIN = "PLUGIN_SYSTEM_THIRD_PARTY_PLUGIN",
    PLUGIN_SYSTEM_SAFE_MODE_ENABLED = "PLUGIN_SYSTEM_SAFE_MODE_ENABLED",
    PLUGIN_STORE_URL = "PLUGIN_STORE_URL",
    defaultConfig = {
      [PLUGIN_SYSTEM_SAFE_MODE_ENABLED]: !0,
      [PLUGIN_SYSTEM_AUTO_UPDATE]: !0,
      [PLUGIN_SYSTEM_PLUGIN]: [{ key: "setting", enabled: !0 }],
      [PLUGIN_SYSTEM_THIRD_PARTY_PLUGIN]: [],
      [PLUGIN_STORE_URL]: "https://bitbucket.org/siyuan-plugin/siyuan-plugins/raw/main/",
    }
  function noop$1() {}
  function assign(e, t) {
    for (const n in t) e[n] = t[n]
    return e
  }
  function run(e) {
    return e()
  }
  function blank_object() {
    return Object.create(null)
  }
  function run_all(e) {
    e.forEach(run)
  }
  function is_function(e) {
    return "function" == typeof e
  }
  function safe_not_equal(e, t) {
    return e != e ? t == t : e !== t || (e && "object" == typeof e) || "function" == typeof e
  }
  function is_empty(e) {
    return 0 === Object.keys(e).length
  }
  function create_slot(e, t, n, r) {
    if (e) {
      const i = get_slot_context(e, t, n, r)
      return e[0](i)
    }
  }
  function get_slot_context(e, t, n, r) {
    return e[1] && r ? assign(n.ctx.slice(), e[1](r(t))) : n.ctx
  }
  function get_slot_changes(e, t, n, r) {
    if (e[2] && r) {
      const i = e[2](r(n))
      if (void 0 === t.dirty) return i
      if ("object" == typeof i) {
        const e = [],
          n = Math.max(t.dirty.length, i.length)
        for (let r = 0; r < n; r += 1) e[r] = t.dirty[r] | i[r]
        return e
      }
      return t.dirty | i
    }
    return t.dirty
  }
  function update_slot_base(e, t, n, r, i, o) {
    if (i) {
      const a = get_slot_context(t, n, r, o)
      e.p(a, i)
    }
  }
  function get_all_dirty_from_scope(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32
      for (let e = 0; e < n; e++) t[e] = -1
      return t
    }
    return -1
  }
  function null_to_empty(e) {
    return null == e ? "" : e
  }
  function append(e, t) {
    e.appendChild(t)
  }
  function insert(e, t, n) {
    e.insertBefore(t, n || null)
  }
  function detach(e) {
    e.parentNode && e.parentNode.removeChild(e)
  }
  function destroy_each(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
  }
  function element(e) {
    return document.createElement(e)
  }
  function svg_element(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
  }
  function text(e) {
    return document.createTextNode(e)
  }
  function space() {
    return text(" ")
  }
  function empty() {
    return text("")
  }
  function listen(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
  }
  function attr(e, t, n) {
    null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
  }
  function xlink_attr(e, t, n) {
    e.setAttributeNS("http://www.w3.org/1999/xlink", t, n)
  }
  function children(e) {
    return Array.from(e.childNodes)
  }
  function set_data(e, t) {
    ;(t = "" + t), e.wholeText !== t && (e.data = t)
  }
  function set_input_value(e, t) {
    e.value = null == t ? "" : t
  }
  function set_style(e, t, n, r) {
    null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "")
  }
  function custom_event(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
    const i = document.createEvent("CustomEvent")
    return i.initCustomEvent(e, n, r, t), i
  }
  class HtmlTag {
    constructor(e = !1) {
      ;(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null)
    }
    c(e) {
      this.h(e)
    }
    m(e, t, n = null) {
      this.e ||
        (this.is_svg ? (this.e = svg_element(t.nodeName)) : (this.e = element(t.nodeName)), (this.t = t), this.c(e)),
        this.i(n)
    }
    h(e) {
      ;(this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes))
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) insert(this.t, this.n[t], e)
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a)
    }
    d() {
      this.n.forEach(detach)
    }
  }
  function construct_svelte_component(e, t) {
    return new e(t)
  }
  let current_component
  function set_current_component(e) {
    current_component = e
  }
  function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization")
    return current_component
  }
  function onMount(e) {
    get_current_component().$$.on_mount.push(e)
  }
  function createEventDispatcher() {
    const e = get_current_component()
    return (t, n, { cancelable: r = !1 } = {}) => {
      const i = e.$$.callbacks[t]
      if (i) {
        const o = custom_event(t, n, { cancelable: r })
        return (
          i.slice().forEach((t) => {
            t.call(e, o)
          }),
          !o.defaultPrevented
        )
      }
      return !0
    }
  }
  const dirty_components = [],
    binding_callbacks = [],
    render_callbacks = [],
    flush_callbacks = [],
    resolved_promise = Promise.resolve()
  let update_scheduled = !1
  function schedule_update() {
    update_scheduled || ((update_scheduled = !0), resolved_promise.then(flush))
  }
  function add_render_callback(e) {
    render_callbacks.push(e)
  }
  const seen_callbacks = new Set()
  let flushidx = 0
  function flush() {
    if (0 !== flushidx) return
    const t = current_component
    do {
      try {
        for (; flushidx < dirty_components.length; ) {
          const e = dirty_components[flushidx]
          flushidx++, set_current_component(e), update(e.$$)
        }
      } catch (e) {
        throw ((dirty_components.length = 0), (flushidx = 0), e)
      }
      for (set_current_component(null), dirty_components.length = 0, flushidx = 0; binding_callbacks.length; )
        binding_callbacks.pop()()
      for (let e = 0; e < render_callbacks.length; e += 1) {
        const t = render_callbacks[e]
        seen_callbacks.has(t) || (seen_callbacks.add(t), t())
      }
      render_callbacks.length = 0
    } while (dirty_components.length)
    for (; flush_callbacks.length; ) flush_callbacks.pop()()
    ;(update_scheduled = !1), seen_callbacks.clear(), set_current_component(t)
  }
  function update(e) {
    if (null !== e.fragment) {
      e.update(), run_all(e.before_update)
      const t = e.dirty
      ;(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(add_render_callback)
    }
  }
  const outroing = new Set()
  let outros
  function group_outros() {
    outros = { r: 0, c: [], p: outros }
  }
  function check_outros() {
    outros.r || run_all(outros.c), (outros = outros.p)
  }
  function transition_in(e, t) {
    e && e.i && (outroing.delete(e), e.i(t))
  }
  function transition_out(e, t, n, r) {
    if (e && e.o) {
      if (outroing.has(e)) return
      outroing.add(e),
        outros.c.push(() => {
          outroing.delete(e), r && (n && e.d(1), r())
        }),
        e.o(t)
    } else r && r()
  }
  function create_component(e) {
    e && e.c()
  }
  function mount_component(e, t, n, r) {
    const { fragment: i, after_update: o } = e.$$
    i && i.m(t, n),
      r ||
        add_render_callback(() => {
          const t = e.$$.on_mount.map(run).filter(is_function)
          e.$$.on_destroy ? e.$$.on_destroy.push(...t) : run_all(t), (e.$$.on_mount = [])
        }),
      o.forEach(add_render_callback)
  }
  function destroy_component(e, t) {
    const n = e.$$
    null !== n.fragment &&
      (run_all(n.on_destroy), n.fragment && n.fragment.d(t), (n.on_destroy = n.fragment = null), (n.ctx = []))
  }
  function make_dirty(e, t) {
    ;-1 === e.$$.dirty[0] && (dirty_components.push(e), schedule_update(), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
  }
  function init(e, t, n, r, i, o, a, s = [-1]) {
    const c = current_component
    set_current_component(e)
    const l = (e.$$ = {
      fragment: null,
      ctx: [],
      props: o,
      update: noop$1,
      not_equal: i,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (c ? c.$$.context : [])),
      callbacks: blank_object(),
      dirty: s,
      skip_bound: !1,
      root: t.target || c.$$.root,
    })
    a && a(l.root)
    let u = !1
    if (
      ((l.ctx = n
        ? n(e, t.props || {}, (t, n, ...r) => {
            const o = r.length ? r[0] : n
            return (
              l.ctx &&
                i(l.ctx[t], (l.ctx[t] = o)) &&
                (!l.skip_bound && l.bound[t] && l.bound[t](o), u && make_dirty(e, t)),
              n
            )
          })
        : []),
      l.update(),
      (u = !0),
      run_all(l.before_update),
      (l.fragment = !!r && r(l.ctx)),
      t.target)
    ) {
      if (t.hydrate) {
        const e = children(t.target)
        l.fragment && l.fragment.l(e), e.forEach(detach)
      } else l.fragment && l.fragment.c()
      t.intro && transition_in(e.$$.fragment), mount_component(e, t.target, t.anchor, t.customElement), flush()
    }
    set_current_component(c)
  }
  class SvelteComponent {
    $destroy() {
      destroy_component(this, 1), (this.$destroy = noop$1)
    }
    $on(e, t) {
      if (!is_function(t)) return noop$1
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t)
          ;-1 !== e && n.splice(e, 1)
        }
      )
    }
    $set(e) {
      this.$$set && !is_empty(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
    }
  }
  const commandPanel_svelte_svelte_type_style_lang = ""
  function get_each_context$4(e, t, n) {
    const r = e.slice()
    return (r[11] = t[n]), (r[13] = n), r
  }
  function create_if_block$4(e) {
    let t,
      n = e[2],
      r = []
    for (let i = 0; i < n.length; i += 1) r[i] = create_each_block$4(get_each_context$4(e, n, i))
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c()
        t = empty()
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n)
        insert(e, t, n)
      },
      p(e, i) {
        if (22 & i) {
          let o
          for (n = e[2], o = 0; o < n.length; o += 1) {
            const a = get_each_context$4(e, n, o)
            r[o] ? r[o].p(a, i) : ((r[o] = create_each_block$4(a)), r[o].c(), r[o].m(t.parentNode, t))
          }
          for (; o < r.length; o += 1) r[o].d(1)
          r.length = n.length
        }
      },
      d(e) {
        destroy_each(r, e), e && detach(t)
      },
    }
  }
  function create_if_block_1$3(e) {
    let t,
      n,
      r,
      i,
      o = _("shortcut") + "",
      a = e[11].shortcut + ""
    return {
      c() {
        ;(t = element("div")),
          (n = text(o)),
          (r = text(": ")),
          (i = text(a)),
          attr(t, "class", "command-shortcut svelte-1bq7axd")
      },
      m(e, o) {
        insert(e, t, o), append(t, n), append(t, r), append(t, i)
      },
      p(e, t) {
        4 & t && a !== (a = e[11].shortcut + "") && set_data(i, a)
      },
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_each_block$4(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s,
      c,
      l,
      u,
      p,
      d,
      h,
      f,
      g,
      m = e[11].pluginName + "",
      _ = e[11].command + "",
      y = (e[11].description || "") + "",
      v = e[11].shortcut && create_if_block_1$3(e)
    function b() {
      return e[7](e[13])
    }
    return {
      c() {
        ;(t = element("div")),
          (n = element("span")),
          (r = text(m)),
          (i = space()),
          (o = text(":")),
          (a = space()),
          (s = element("span")),
          (c = text(_)),
          (l = space()),
          (u = text(y)),
          (p = space()),
          v && v.c(),
          (d = space()),
          attr(n, "class", "command-plugin svelte-1bq7axd"),
          attr(s, "class", "command-description"),
          attr(
            t,
            "class",
            (h = null_to_empty(e[13] === e[1] ? "command-selected command" : "command") + " svelte-1bq7axd")
          )
      },
      m(e, h) {
        insert(e, t, h),
          append(t, n),
          append(n, r),
          append(n, i),
          append(n, o),
          append(t, a),
          append(t, s),
          append(s, c),
          append(s, l),
          append(s, u),
          append(t, p),
          v && v.m(t, null),
          append(t, d),
          f || ((g = listen(t, "click", b)), (f = !0))
      },
      p(n, i) {
        ;(e = n),
          4 & i && m !== (m = e[11].pluginName + "") && set_data(r, m),
          4 & i && _ !== (_ = e[11].command + "") && set_data(c, _),
          4 & i && y !== (y = (e[11].description || "") + "") && set_data(u, y),
          e[11].shortcut
            ? v
              ? v.p(e, i)
              : ((v = create_if_block_1$3(e)), v.c(), v.m(t, d))
            : v && (v.d(1), (v = null)),
          2 & i &&
            h !== (h = null_to_empty(e[13] === e[1] ? "command-selected command" : "command") + " svelte-1bq7axd") &&
            attr(t, "class", h)
      },
      d(e) {
        e && detach(t), v && v.d(), (f = !1), g()
      },
    }
  }
  function create_fragment$6(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s,
      c,
      l,
      u = e[2] && create_if_block$4(e)
    return {
      c() {
        ;(t = element("div")),
          (n = element("div")),
          (r = svg_element("svg")),
          (i = svg_element("path")),
          (o = space()),
          (a = element("input")),
          (s = space()),
          u && u.c(),
          attr(
            i,
            "d",
            "M64 112v800h896V112H64z m846 750H114V162h796v700zM234.6 688.8L411.3 512 234.6 335.2l35.4-35.4L482.1 512 269.9 724.1l-35.3-35.3z m554.8-10.2h-300v-50h300v50z"
          ),
          set_style(r, "left", "14px"),
          attr(r, "class", "b3-form__icon-icon"),
          attr(r, "viewBox", "0 0 1024 1024"),
          attr(r, "version", "1.1"),
          attr(r, "xmlns", "http://www.w3.org/2000/svg"),
          attr(r, "width", "200"),
          attr(r, "height", "200"),
          attr(a, "id", "commandPanelInput"),
          attr(a, "class", "b3-text-field b3-text-field--text fn__block b3-form__icon-input"),
          attr(n, "class", "b3-form__icon search__header"),
          attr(t, "class", "fn__flex-column"),
          set_style(t, "border-radius", "4px"),
          set_style(t, "overflow", "hidden"),
          set_style(t, "position", "relative"),
          set_style(t, "width", "max(80vw, 1000px)")
      },
      m(p, d) {
        insert(p, t, d),
          append(t, n),
          append(n, r),
          append(r, i),
          append(n, o),
          append(n, a),
          set_input_value(a, e[0]),
          append(t, s),
          u && u.m(t, null),
          c || ((l = [listen(a, "input", e[6]), listen(a, "keydown", e[3])]), (c = !0))
      },
      p(e, [n]) {
        1 & n && a.value !== e[0] && set_input_value(a, e[0]),
          e[2] ? (u ? u.p(e, n) : ((u = create_if_block$4(e)), u.c(), u.m(t, null))) : u && (u.d(1), (u = null))
      },
      i: noop$1,
      o: noop$1,
      d(e) {
        e && detach(t), u && u.d(), (c = !1), run_all(l)
      },
    }
  }
  function instance$6(e, t, n) {
    const r = container.get("CommandManager")
    let i = [],
      o = "",
      a = 0,
      s = []
    const c = () => {
        const e = s[a]
        Dialog.destroyAll(), e.callback()
      },
      l = (e) => {
        n(1, (a = e)), c()
      },
      u = (e, t) => e && e.toLowerCase().indexOf(t.toLowerCase()) >= 0
    onMount(() => {
      n(5, (i = r.getCommands()))
      document.getElementById("commandPanelInput").focus()
    })
    return (
      (e.$$.update = () => {
        33 & e.$$.dirty &&
          (n(1, (a = 0)),
          n(
            2,
            (s = o
              ? i.filter((e) => u(e.plugin, o) || u(e.pluginName, o) || u(e.command, o) || u(e.description, o))
              : i)
          ))
      }),
      [
        o,
        a,
        s,
        (e) => {
          if (13 !== e.keyCode)
            if (38 !== e.keyCode) {
              if (40 === e.keyCode) {
                const t = s.length
                if ((e.preventDefault(), a >= t - 1)) return
                n(1, a++, a)
              }
            } else {
              if ((e.preventDefault(), 0 === a)) return
              n(1, a--, a)
            }
          else c()
        },
        l,
        i,
        function () {
          ;(o = this.value), n(0, o)
        },
        (e) => l(e),
      ]
    )
  }
  class Command_panel extends SvelteComponent {
    constructor(e) {
      super(), init(this, e, instance$6, create_fragment$6, safe_not_equal, {})
    }
  }
  class CommandPanelPlugin extends Plugin {
    onload() {
      this.registerCommand({
        command: "Show command panel",
        description: _("show_command_panel"),
        shortcut: "ctrl+shift+o,command+shift+o",
        callback: () => {
          this.showPanel()
        },
      })
    }
    showPanel() {
      Dialog.destroyAll(),
        new Dialog({ content: '<div id="command-panel"></div>' }),
        setImmediate(() => {
          new Command_panel({ target: document.getElementById("command-panel") })
        })
    }
  }
  function get_each_context$3(e, t, n) {
    const r = e.slice()
    return (r[5] = t[n]), (r[6] = t), (r[7] = n), r
  }
  function create_if_block_1$2(e) {
    let t, n, r
    function i() {
      e[2].call(t, e[6], e[7])
    }
    return {
      c() {
        ;(t = element("input")), attr(t, "class", "b3-text-field fn__flex-center fn__size200"), attr(t, "type", "input")
      },
      m(o, a) {
        insert(o, t, a),
          set_input_value(t, e[5].value),
          n ||
            ((r = [
              listen(t, "input", i),
              listen(t, "change", function () {
                is_function(e[5].onChange) && e[5].onChange.apply(this, arguments)
              }),
            ]),
            (n = !0))
      },
      p(n, r) {
        ;(e = n), 1 & r && set_input_value(t, e[5].value)
      },
      d(e) {
        e && detach(t), (n = !1), run_all(r)
      },
    }
  }
  function create_if_block$3(e) {
    let t, n, r
    function i() {
      e[1].call(t, e[6], e[7])
    }
    return {
      c() {
        ;(t = element("input")), attr(t, "class", "b3-switch fn__flex-center"), attr(t, "type", "checkbox")
      },
      m(o, a) {
        insert(o, t, a),
          (t.checked = e[5].checked),
          n ||
            ((r = [
              listen(t, "change", i),
              listen(t, "change", function () {
                is_function(e[5].onChange) && e[5].onChange.apply(this, arguments)
              }),
            ]),
            (n = !0))
      },
      p(n, r) {
        ;(e = n), 1 & r && (t.checked = e[5].checked)
      },
      d(e) {
        e && detach(t), (n = !1), run_all(r)
      },
    }
  }
  function create_each_block$3(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s,
      c,
      l,
      u,
      p = e[5].label + "",
      d = e[5].tip + ""
    function h(e, t) {
      return "checkbox" === e[5].type ? create_if_block$3 : "input" === e[5].type ? create_if_block_1$2 : void 0
    }
    let f = h(e),
      g = f && f(e)
    return {
      c() {
        ;(t = element("label")),
          (n = element("div")),
          (r = text(p)),
          (i = space()),
          (o = element("div")),
          (a = text(d)),
          (s = space()),
          (c = element("span")),
          (l = space()),
          g && g.c(),
          (u = space()),
          attr(o, "class", "b3-label__text"),
          attr(n, "class", "fn__flex-1"),
          attr(c, "class", "fn__space"),
          attr(t, "class", "fn__flex b3-label config__item")
      },
      m(e, p) {
        insert(e, t, p),
          append(t, n),
          append(n, r),
          append(n, i),
          append(n, o),
          append(o, a),
          append(t, s),
          append(t, c),
          append(t, l),
          g && g.m(t, null),
          append(t, u)
      },
      p(e, n) {
        1 & n && p !== (p = e[5].label + "") && set_data(r, p),
          1 & n && d !== (d = e[5].tip + "") && set_data(a, d),
          f === (f = h(e)) && g ? g.p(e, n) : (g && g.d(1), (g = f && f(e)), g && (g.c(), g.m(t, u)))
      },
      d(e) {
        e && detach(t), g && g.d()
      },
    }
  }
  function create_fragment$5(e) {
    let t,
      n = e[0],
      r = []
    for (let i = 0; i < n.length; i += 1) r[i] = create_each_block$3(get_each_context$3(e, n, i))
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c()
        t = empty()
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n)
        insert(e, t, n)
      },
      p(e, [i]) {
        if (1 & i) {
          let o
          for (n = e[0], o = 0; o < n.length; o += 1) {
            const a = get_each_context$3(e, n, o)
            r[o] ? r[o].p(a, i) : ((r[o] = create_each_block$3(a)), r[o].c(), r[o].m(t.parentNode, t))
          }
          for (; o < r.length; o += 1) r[o].d(1)
          r.length = n.length
        }
      },
      i: noop$1,
      o: noop$1,
      d(e) {
        destroy_each(r, e), e && detach(t)
      },
    }
  }
  function instance$5(e, t, n) {
    const r = container.get(TYPES.StorageManager),
      i = container.get(TYPES.PluginSystem)
    let o = [
      {
        label: _("safemode"),
        tip: _("safemodetip"),
        checked: !0,
        type: "checkbox",
        onChange: (e) => {
          e.target.checked ? i.turnOnSafeMode() : i.turnOffSafeMode()
        },
      },
      {
        label: _("autoupgrade"),
        tip: _("autoupgradetip"),
        checked: !0,
        type: "checkbox",
        onChange: (e) => {
          r.set(PLUGIN_SYSTEM_AUTO_UPDATE, e.target.checked)
        },
      },
      {
        label: _("store_url"),
        tip: `${_("store_url_tip")} ${defaultConfig.PLUGIN_STORE_URL}`,
        type: "input",
        value: r.get(PLUGIN_STORE_URL),
        onChange: (e) => {
          r.set(PLUGIN_STORE_URL, e.target.value)
        },
      },
    ]
    return (
      onMount(() => {
        const e = r.get(PLUGIN_SYSTEM_SAFE_MODE_ENABLED)
        n(0, (o[0].checked = e), o)
        const t = r.get(PLUGIN_SYSTEM_AUTO_UPDATE)
        n(0, (o[1].checked = t), o)
      }),
      [
        o,
        function (e, t) {
          ;(e[t].checked = this.checked), n(0, o)
        },
        function (e, t) {
          ;(e[t].value = this.value), n(0, o)
        },
      ]
    )
  }
  class Setting_common extends SvelteComponent {
    constructor(e) {
      super(), init(this, e, instance$5, create_fragment$5, safe_not_equal, {})
    }
  }
  const settingList_svelte_svelte_type_style_lang = ""
  function get_each_context$2(e, t, n) {
    const r = e.slice()
    return (r[9] = t[n]), (r[10] = t), (r[11] = n), r
  }
  function create_if_block$2(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s,
      c,
      l,
      u,
      p,
      d,
      h,
      f,
      g,
      m,
      y,
      v = e[9].name + "",
      b = e[9].version + "",
      w = (e[9].description || _("nodescription")) + ""
    function E(...t) {
      return e[4](e[9], ...t)
    }
    function S() {
      e[5].call(f, e[10], e[11])
    }
    return {
      c() {
        ;(t = element("label")),
          (n = element("div")),
          (r = text(v)),
          (i = space()),
          (o = text(b)),
          (a = space()),
          (s = element("span")),
          (s.textContent = `${_("uninstall")}`),
          (c = space()),
          (l = element("div")),
          (u = text(w)),
          (p = space()),
          (d = element("span")),
          (h = space()),
          (f = element("input")),
          (g = space()),
          attr(s, "class", "remove svelte-bwhxpp"),
          attr(l, "class", "b3-label__text"),
          attr(n, "class", "plugin fn__flex-1 svelte-bwhxpp"),
          attr(d, "class", "fn__space"),
          attr(f, "class", "b3-switch fn__flex-center"),
          attr(f, "id", "fullWidth"),
          attr(f, "type", "checkbox"),
          attr(t, "class", "fn__flex b3-label")
      },
      m(_, v) {
        insert(_, t, v),
          append(t, n),
          append(n, r),
          append(n, i),
          append(n, o),
          append(n, a),
          append(n, s),
          append(n, c),
          append(n, l),
          append(l, u),
          append(t, p),
          append(t, d),
          append(t, h),
          append(t, f),
          (f.checked = e[9].enabled),
          append(t, g),
          m ||
            ((y = [
              listen(s, "click", E),
              listen(f, "change", S),
              listen(f, "change", function () {
                is_function(e[1](e[9].key)) && e[1](e[9].key).apply(this, arguments)
              }),
            ]),
            (m = !0))
      },
      p(t, n) {
        ;(e = t),
          1 & n && v !== (v = e[9].name + "") && set_data(r, v),
          1 & n && b !== (b = e[9].version + "") && set_data(o, b),
          1 & n && w !== (w = (e[9].description || _("nodescription")) + "") && set_data(u, w),
          1 & n && (f.checked = e[9].enabled)
      },
      d(e) {
        e && detach(t), (m = !1), run_all(y)
      },
    }
  }
  function create_each_block$2(e) {
    let t,
      n = !e[9].hidden && create_if_block$2(e)
    return {
      c() {
        n && n.c(), (t = empty())
      },
      m(e, r) {
        n && n.m(e, r), insert(e, t, r)
      },
      p(e, r) {
        e[9].hidden
          ? n && (n.d(1), (n = null))
          : n
          ? n.p(e, r)
          : ((n = create_if_block$2(e)), n.c(), n.m(t.parentNode, t))
      },
      d(e) {
        n && n.d(e), e && detach(t)
      },
    }
  }
  function create_fragment$4(e) {
    let t,
      n,
      r = e[0],
      i = []
    for (let o = 0; o < r.length; o += 1) i[o] = create_each_block$2(get_each_context$2(e, r, o))
    return {
      c() {
        ;(t = element("label")), (n = element("div"))
        for (let e = 0; e < i.length; e += 1) i[e].c()
        attr(n, "class", "fn__flex-1"), attr(t, "class", "b3-label fn__flex")
      },
      m(e, r) {
        insert(e, t, r), append(t, n)
        for (let t = 0; t < i.length; t += 1) i[t].m(n, null)
      },
      p(e, [t]) {
        if (7 & t) {
          let o
          for (r = e[0], o = 0; o < r.length; o += 1) {
            const a = get_each_context$2(e, r, o)
            i[o] ? i[o].p(a, t) : ((i[o] = create_each_block$2(a)), i[o].c(), i[o].m(n, null))
          }
          for (; o < i.length; o += 1) i[o].d(1)
          i.length = r.length
        }
      },
      i: noop$1,
      o: noop$1,
      d(e) {
        e && detach(t), destroy_each(i, e)
      },
    }
  }
  function instance$4(e, t, n) {
    let r
    const i = container.get(TYPES.StorageManager),
      o = container.get(TYPES.PluginSystem)
    let a = []
    const s = () => {
        n(3, (a = i.getPlugins()))
      },
      c = async (e, t) => {
        t.preventDefault(),
          t.stopPropagation(),
          await o.unloadPlugin(e),
          await i.uninstallPlugin(e),
          await i.initStorage(),
          s()
      }
    onMount(async () => {
      await i.initStorage(), s()
    })
    return (
      (e.$$.update = () => {
        8 & e.$$.dirty && n(0, (r = a.filter((e) => e.script)))
      }),
      [
        r,
        (e) => async (t) => {
          const n = i.get(PLUGIN_SYSTEM_SAFE_MODE_ENABLED),
            r = t.target.checked
          await i.setPluginEnabled(e, r), n || (r ? o.loadPlugin(e) : o.unloadPlugin(e))
        },
        c,
        a,
        (e, t) => c(e.key, t),
        function (e, t) {
          ;(e[t].enabled = this.checked), n(0, r), n(3, a)
        },
      ]
    )
  }
  class Setting_list extends SvelteComponent {
    constructor(e) {
      super(), init(this, e, instance$4, create_fragment$4, safe_not_equal, {})
    }
  }
  function bind(e, t) {
    return function () {
      return e.apply(t, arguments)
    }
  }
  const { toString: toString } = Object.prototype,
    { getPrototypeOf: getPrototypeOf } = Object,
    kindOf =
      ((cache = Object.create(null)),
      (e) => {
        const t = toString.call(e)
        return cache[t] || (cache[t] = t.slice(8, -1).toLowerCase())
      })
  var cache
  const kindOfTest = (e) => ((e = e.toLowerCase()), (t) => kindOf(t) === e),
    typeOfTest = (e) => (t) => typeof t === e,
    { isArray: isArray } = Array,
    isUndefined = typeOfTest("undefined")
  function isBuffer(e) {
    return (
      null !== e &&
      !isUndefined(e) &&
      null !== e.constructor &&
      !isUndefined(e.constructor) &&
      isFunction(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    )
  }
  const isArrayBuffer = kindOfTest("ArrayBuffer")
  function isArrayBufferView(e) {
    let t
    return (
      (t =
        "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && isArrayBuffer(e.buffer)),
      t
    )
  }
  const isString = typeOfTest("string"),
    isFunction = typeOfTest("function"),
    isNumber = typeOfTest("number"),
    isObject = (e) => null !== e && "object" == typeof e,
    isBoolean = (e) => !0 === e || !1 === e,
    isPlainObject = (e) => {
      if ("object" !== kindOf(e)) return !1
      const t = getPrototypeOf(e)
      return !(
        (null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      )
    },
    isDate = kindOfTest("Date"),
    isFile = kindOfTest("File"),
    isBlob = kindOfTest("Blob"),
    isFileList = kindOfTest("FileList"),
    isStream = (e) => isObject(e) && isFunction(e.pipe),
    isFormData = (e) => {
      const t = "[object FormData]"
      return (
        e &&
        (("function" == typeof FormData && e instanceof FormData) ||
          toString.call(e) === t ||
          (isFunction(e.toString) && e.toString() === t))
      )
    },
    isURLSearchParams = kindOfTest("URLSearchParams"),
    trim = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
  function forEach(e, t, { allOwnKeys: n = !1 } = {}) {
    if (null == e) return
    let r, i
    if (("object" != typeof e && (e = [e]), isArray(e))) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e)
    else {
      const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        o = i.length
      let a
      for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e)
    }
  }
  function findKey(e, t) {
    t = t.toLowerCase()
    const n = Object.keys(e)
    let r,
      i = n.length
    for (; i-- > 0; ) if (((r = n[i]), t === r.toLowerCase())) return r
    return null
  }
  const _global =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    isContextDefined = (e) => !isUndefined(e) && e !== _global
  function merge() {
    const { caseless: e } = (isContextDefined(this) && this) || {},
      t = {},
      n = (n, r) => {
        const i = (e && findKey(t, r)) || r
        isPlainObject(t[i]) && isPlainObject(n)
          ? (t[i] = merge(t[i], n))
          : isPlainObject(n)
          ? (t[i] = merge({}, n))
          : isArray(n)
          ? (t[i] = n.slice())
          : (t[i] = n)
      }
    for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && forEach(arguments[r], n)
    return t
  }
  const extend = (e, t, n, { allOwnKeys: r } = {}) => (
      forEach(
        t,
        (t, r) => {
          n && isFunction(t) ? (e[r] = bind(t, n)) : (e[r] = t)
        },
        { allOwnKeys: r }
      ),
      e
    ),
    stripBOM = (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
    inherits = (e, t, n, r) => {
      ;(e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        n && Object.assign(e.prototype, n)
    },
    toFlatObject = (e, t, n, r) => {
      let i, o, a
      const s = {}
      if (((t = t || {}), null == e)) return t
      do {
        for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
          (a = i[o]), (r && !r(a, e, t)) || s[a] || ((t[a] = e[a]), (s[a] = !0))
        e = !1 !== n && getPrototypeOf(e)
      } while (e && (!n || n(e, t)) && e !== Object.prototype)
      return t
    },
    endsWith = (e, t, n) => {
      ;(e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length)
      const r = e.indexOf(t, n)
      return -1 !== r && r === n
    },
    toArray = (e) => {
      if (!e) return null
      if (isArray(e)) return e
      let t = e.length
      if (!isNumber(t)) return null
      const n = new Array(t)
      for (; t-- > 0; ) n[t] = e[t]
      return n
    },
    isTypedArray =
      ((TypedArray = "undefined" != typeof Uint8Array && getPrototypeOf(Uint8Array)),
      (e) => TypedArray && e instanceof TypedArray)
  var TypedArray
  const forEachEntry = (e, t) => {
      const n = (e && e[Symbol.iterator]).call(e)
      let r
      for (; (r = n.next()) && !r.done; ) {
        const n = r.value
        t.call(e, n[0], n[1])
      }
    },
    matchAll = (e, t) => {
      let n
      const r = []
      for (; null !== (n = e.exec(t)); ) r.push(n)
      return r
    },
    isHTMLForm = kindOfTest("HTMLFormElement"),
    toCamelCase = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
        return t.toUpperCase() + n
      }),
    hasOwnProperty = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    isRegExp = kindOfTest("RegExp"),
    reduceDescriptors = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {}
      forEach(n, (n, i) => {
        !1 !== t(n, i, e) && (r[i] = n)
      }),
        Object.defineProperties(e, r)
    },
    freezeMethods = (e) => {
      reduceDescriptors(e, (t, n) => {
        if (isFunction(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1
        const r = e[n]
        isFunction(r) &&
          ((t.enumerable = !1),
          "writable" in t
            ? (t.writable = !1)
            : t.set ||
              (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
              }))
      })
    },
    toObjectSet = (e, t) => {
      const n = {},
        r = (e) => {
          e.forEach((e) => {
            n[e] = !0
          })
        }
      return isArray(e) ? r(e) : r(String(e).split(t)), n
    },
    noop = () => {},
    toFiniteNumber = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    ALPHA = "abcdefghijklmnopqrstuvwxyz",
    DIGIT = "0123456789",
    ALPHABET = { DIGIT: DIGIT, ALPHA: ALPHA, ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT },
    generateString = (e = 16, t = ALPHABET.ALPHA_DIGIT) => {
      let n = ""
      const { length: r } = t
      for (; e--; ) n += t[(Math.random() * r) | 0]
      return n
    }
  function isSpecCompliantForm(e) {
    return !!(e && isFunction(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
  }
  const toJSONObject = (e) => {
      const t = new Array(10),
        n = (e, r) => {
          if (isObject(e)) {
            if (t.indexOf(e) >= 0) return
            if (!("toJSON" in e)) {
              t[r] = e
              const i = isArray(e) ? [] : {}
              return (
                forEach(e, (e, t) => {
                  const o = n(e, r + 1)
                  !isUndefined(o) && (i[t] = o)
                }),
                (t[r] = void 0),
                i
              )
            }
          }
          return e
        }
      return n(e, 0)
    },
    utils = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isBoolean: isBoolean,
      isObject: isObject,
      isPlainObject: isPlainObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isRegExp: isRegExp,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isTypedArray: isTypedArray,
      isFileList: isFileList,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim,
      stripBOM: stripBOM,
      inherits: inherits,
      toFlatObject: toFlatObject,
      kindOf: kindOf,
      kindOfTest: kindOfTest,
      endsWith: endsWith,
      toArray: toArray,
      forEachEntry: forEachEntry,
      matchAll: matchAll,
      isHTMLForm: isHTMLForm,
      hasOwnProperty: hasOwnProperty,
      hasOwnProp: hasOwnProperty,
      reduceDescriptors: reduceDescriptors,
      freezeMethods: freezeMethods,
      toObjectSet: toObjectSet,
      toCamelCase: toCamelCase,
      noop: noop,
      toFiniteNumber: toFiniteNumber,
      findKey: findKey,
      global: _global,
      isContextDefined: isContextDefined,
      ALPHABET: ALPHABET,
      generateString: generateString,
      isSpecCompliantForm: isSpecCompliantForm,
      toJSONObject: toJSONObject,
    }
  function AxiosError(e, t, n, r, i) {
    Error.call(this),
      Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && (this.response = i)
  }
  utils.inherits(AxiosError, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: utils.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null,
      }
    },
  })
  const prototype$1 = AxiosError.prototype,
    descriptors = {}
  ;[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    descriptors[e] = { value: e }
  }),
    Object.defineProperties(AxiosError, descriptors),
    Object.defineProperty(prototype$1, "isAxiosError", { value: !0 }),
    (AxiosError.from = (e, t, n, r, i, o) => {
      const a = Object.create(prototype$1)
      return (
        utils.toFlatObject(
          e,
          a,
          function (e) {
            return e !== Error.prototype
          },
          (e) => "isAxiosError" !== e
        ),
        AxiosError.call(a, e.message, t, n, r, i),
        (a.cause = e),
        (a.name = e.name),
        o && Object.assign(a, o),
        a
      )
    })
  const httpAdapter = null
  function isVisitable(e) {
    return utils.isPlainObject(e) || utils.isArray(e)
  }
  function removeBrackets(e) {
    return utils.endsWith(e, "[]") ? e.slice(0, -2) : e
  }
  function renderKey(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = removeBrackets(e)), !n && t ? "[" + e + "]" : e
          })
          .join(n ? "." : "")
      : t
  }
  function isFlatArray(e) {
    return utils.isArray(e) && !e.some(isVisitable)
  }
  const predicates = utils.toFlatObject(utils, {}, null, function (e) {
    return /^is[A-Z]/.test(e)
  })
  function toFormData(e, t, n) {
    if (!utils.isObject(e)) throw new TypeError("target must be an object")
    t = t || new FormData()
    const r = (n = utils.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
        return !utils.isUndefined(t[e])
      })).metaTokens,
      i = n.visitor || l,
      o = n.dots,
      a = n.indexes,
      s = (n.Blob || ("undefined" != typeof Blob && Blob)) && utils.isSpecCompliantForm(t)
    if (!utils.isFunction(i)) throw new TypeError("visitor must be a function")
    function c(e) {
      if (null === e) return ""
      if (utils.isDate(e)) return e.toISOString()
      if (!s && utils.isBlob(e)) throw new AxiosError("Blob is not supported. Use a Buffer instead.")
      return utils.isArrayBuffer(e) || utils.isTypedArray(e)
        ? s && "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e
    }
    function l(e, n, i) {
      let s = e
      if (e && !i && "object" == typeof e)
        if (utils.endsWith(n, "{}")) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e))
        else if (
          (utils.isArray(e) && isFlatArray(e)) ||
          ((utils.isFileList(e) || utils.endsWith(n, "[]")) && (s = utils.toArray(e)))
        )
          return (
            (n = removeBrackets(n)),
            s.forEach(function (e, r) {
              !utils.isUndefined(e) &&
                null !== e &&
                t.append(!0 === a ? renderKey([n], r, o) : null === a ? n : n + "[]", c(e))
            }),
            !1
          )
      return !!isVisitable(e) || (t.append(renderKey(i, n, o), c(e)), !1)
    }
    const u = [],
      p = Object.assign(predicates, { defaultVisitor: l, convertValue: c, isVisitable: isVisitable })
    if (!utils.isObject(e)) throw new TypeError("data must be an object")
    return (
      (function e(n, r) {
        if (!utils.isUndefined(n)) {
          if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + r.join("."))
          u.push(n),
            utils.forEach(n, function (n, o) {
              !0 === (!(utils.isUndefined(n) || null === n) && i.call(t, n, utils.isString(o) ? o.trim() : o, r, p)) &&
                e(n, r ? r.concat(o) : [o])
            }),
            u.pop()
        }
      })(e),
      t
    )
  }
  function encode$1(e) {
    const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e]
    })
  }
  function AxiosURLSearchParams(e, t) {
    ;(this._pairs = []), e && toFormData(e, this, t)
  }
  const prototype = AxiosURLSearchParams.prototype
  function encode(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]")
  }
  function buildURL(e, t, n) {
    if (!t) return e
    const r = (n && n.encode) || encode,
      i = n && n.serialize
    let o
    if (
      ((o = i ? i(t, n) : utils.isURLSearchParams(t) ? t.toString() : new AxiosURLSearchParams(t, n).toString(r)), o)
    ) {
      const t = e.indexOf("#")
      ;-1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf("?") ? "?" : "&") + o)
    }
    return e
  }
  ;(prototype.append = function (e, t) {
    this._pairs.push([e, t])
  }),
    (prototype.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, encode$1)
          }
        : encode$1
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1])
        }, "")
        .join("&")
    })
  class InterceptorManager {
    constructor() {
      this.handlers = []
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      )
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
      this.handlers && (this.handlers = [])
    }
    forEach(e) {
      utils.forEach(this.handlers, function (t) {
        null !== t && e(t)
      })
    }
  }
  const InterceptorManager$1 = InterceptorManager,
    transitionalDefaults = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    URLSearchParams$1 = "undefined" != typeof URLSearchParams ? URLSearchParams : AxiosURLSearchParams,
    FormData$1 = "undefined" != typeof FormData ? FormData : null,
    Blob$1 = "undefined" != typeof Blob ? Blob : null,
    isStandardBrowserEnv = (() => {
      let e
      return (
        ("undefined" == typeof navigator ||
          ("ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document
      )
    })(),
    isStandardBrowserWebWorkerEnv =
      "undefined" != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" == typeof self.importScripts,
    platform = {
      isBrowser: !0,
      classes: { URLSearchParams: URLSearchParams$1, FormData: FormData$1, Blob: Blob$1 },
      isStandardBrowserEnv: isStandardBrowserEnv,
      isStandardBrowserWebWorkerEnv: isStandardBrowserWebWorkerEnv,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    }
  function toURLEncodedForm(e, t) {
    return toFormData(
      e,
      new platform.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (e, t, n, r) {
            return platform.isNode && utils.isBuffer(e)
              ? (this.append(t, e.toString("base64")), !1)
              : r.defaultVisitor.apply(this, arguments)
          },
        },
        t
      )
    )
  }
  function parsePropPath(e) {
    return utils.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ("[]" === e[0] ? "" : e[1] || e[0]))
  }
  function arrayToObject(e) {
    const t = {},
      n = Object.keys(e)
    let r
    const i = n.length
    let o
    for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o])
    return t
  }
  function formDataToJSON(e) {
    function t(e, n, r, i) {
      let o = e[i++]
      const a = Number.isFinite(+o),
        s = i >= e.length
      if (((o = !o && utils.isArray(r) ? r.length : o), s))
        return utils.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !a
      ;(r[o] && utils.isObject(r[o])) || (r[o] = [])
      return t(e, n, r[o], i) && utils.isArray(r[o]) && (r[o] = arrayToObject(r[o])), !a
    }
    if (utils.isFormData(e) && utils.isFunction(e.entries)) {
      const n = {}
      return (
        utils.forEachEntry(e, (e, r) => {
          t(parsePropPath(e), r, n, 0)
        }),
        n
      )
    }
    return null
  }
  const DEFAULT_CONTENT_TYPE = { "Content-Type": void 0 }
  function stringifySafely(t, n, r) {
    if (utils.isString(t))
      try {
        return (n || JSON.parse)(t), utils.trim(t)
      } catch (e) {
        if ("SyntaxError" !== e.name) throw e
      }
    return (r || JSON.stringify)(t)
  }
  const defaults = {
    transitional: transitionalDefaults,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          i = utils.isObject(e)
        i && utils.isHTMLForm(e) && (e = new FormData(e))
        if (utils.isFormData(e)) return r && r ? JSON.stringify(formDataToJSON(e)) : e
        if (utils.isArrayBuffer(e) || utils.isBuffer(e) || utils.isStream(e) || utils.isFile(e) || utils.isBlob(e))
          return e
        if (utils.isArrayBufferView(e)) return e.buffer
        if (utils.isURLSearchParams(e))
          return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString()
        let o
        if (i) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return toURLEncodedForm(e, this.formSerializer).toString()
          if ((o = utils.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData
            return toFormData(o ? { "files[]": e } : e, t && new t(), this.formSerializer)
          }
        }
        return i || r ? (t.setContentType("application/json", !1), stringifySafely(e)) : e
      },
    ],
    transformResponse: [
      function (t) {
        const n = this.transitional || defaults.transitional,
          r = n && n.forcedJSONParsing,
          i = "json" === this.responseType
        if (t && utils.isString(t) && ((r && !this.responseType) || i)) {
          const r = !(n && n.silentJSONParsing) && i
          try {
            return JSON.parse(t)
          } catch (e) {
            if (r) {
              if ("SyntaxError" === e.name)
                throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response)
              throw e
            }
          }
        }
        return t
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: platform.classes.FormData, Blob: platform.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  }
  utils.forEach(["delete", "get", "head"], function (e) {
    defaults.headers[e] = {}
  }),
    utils.forEach(["post", "put", "patch"], function (e) {
      defaults.headers[e] = utils.merge(DEFAULT_CONTENT_TYPE)
    })
  const defaults$1 = defaults,
    ignoreDuplicateOf = utils.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    parseHeaders = (e) => {
      const t = {}
      let n, r, i
      return (
        e &&
          e.split("\n").forEach(function (e) {
            ;(i = e.indexOf(":")),
              (n = e.substring(0, i).trim().toLowerCase()),
              (r = e.substring(i + 1).trim()),
              !n ||
                (t[n] && ignoreDuplicateOf[n]) ||
                ("set-cookie" === n ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ", " + r : r))
          }),
        t
      )
    },
    $internals = Symbol("internals")
  function normalizeHeader(e) {
    return e && String(e).trim().toLowerCase()
  }
  function normalizeValue(e) {
    return !1 === e || null == e ? e : utils.isArray(e) ? e.map(normalizeValue) : String(e)
  }
  function parseTokens(e) {
    const t = Object.create(null),
      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
    let r
    for (; (r = n.exec(e)); ) t[r[1]] = r[2]
    return t
  }
  function isValidHeaderName(e) {
    return /^[-_a-zA-Z]+$/.test(e.trim())
  }
  function matchHeaderValue(e, t, n, r, i) {
    return utils.isFunction(r)
      ? r.call(this, t, n)
      : (i && (t = n),
        utils.isString(t) ? (utils.isString(r) ? -1 !== t.indexOf(r) : utils.isRegExp(r) ? r.test(t) : void 0) : void 0)
  }
  function formatHeader(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n)
  }
  function buildAccessors(e, t) {
    const n = utils.toCamelCase(" " + t)
    ;["get", "set", "has"].forEach((r) => {
      Object.defineProperty(e, r + n, {
        value: function (e, n, i) {
          return this[r].call(this, t, e, n, i)
        },
        configurable: !0,
      })
    })
  }
  class AxiosHeaders {
    constructor(e) {
      e && this.set(e)
    }
    set(e, t, n) {
      const r = this
      function i(e, t, n) {
        const i = normalizeHeader(t)
        if (!i) throw new Error("header name must be a non-empty string")
        const o = utils.findKey(r, i)
        ;(!o || void 0 === r[o] || !0 === n || (void 0 === n && !1 !== r[o])) && (r[o || t] = normalizeValue(e))
      }
      const o = (e, t) => utils.forEach(e, (e, n) => i(e, n, t))
      return (
        utils.isPlainObject(e) || e instanceof this.constructor
          ? o(e, t)
          : utils.isString(e) && (e = e.trim()) && !isValidHeaderName(e)
          ? o(parseHeaders(e), t)
          : null != e && i(t, e, n),
        this
      )
    }
    get(e, t) {
      if ((e = normalizeHeader(e))) {
        const n = utils.findKey(this, e)
        if (n) {
          const e = this[n]
          if (!t) return e
          if (!0 === t) return parseTokens(e)
          if (utils.isFunction(t)) return t.call(this, e, n)
          if (utils.isRegExp(t)) return t.exec(e)
          throw new TypeError("parser must be boolean|regexp|function")
        }
      }
    }
    has(e, t) {
      if ((e = normalizeHeader(e))) {
        const n = utils.findKey(this, e)
        return !(!n || void 0 === this[n] || (t && !matchHeaderValue(this, this[n], n, t)))
      }
      return !1
    }
    delete(e, t) {
      const n = this
      let r = !1
      function i(e) {
        if ((e = normalizeHeader(e))) {
          const i = utils.findKey(n, e)
          !i || (t && !matchHeaderValue(n, n[i], i, t)) || (delete n[i], (r = !0))
        }
      }
      return utils.isArray(e) ? e.forEach(i) : i(e), r
    }
    clear(e) {
      const t = Object.keys(this)
      let n = t.length,
        r = !1
      for (; n--; ) {
        const i = t[n]
        ;(e && !matchHeaderValue(this, this[i], i, e, !0)) || (delete this[i], (r = !0))
      }
      return r
    }
    normalize(e) {
      const t = this,
        n = {}
      return (
        utils.forEach(this, (r, i) => {
          const o = utils.findKey(n, i)
          if (o) return (t[o] = normalizeValue(r)), void delete t[i]
          const a = e ? formatHeader(i) : String(i).trim()
          a !== i && delete t[i], (t[a] = normalizeValue(r)), (n[a] = !0)
        }),
        this
      )
    }
    concat(...e) {
      return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
      const t = Object.create(null)
      return (
        utils.forEach(this, (n, r) => {
          null != n && !1 !== n && (t[r] = e && utils.isArray(n) ? n.join(", ") : n)
        }),
        t
      )
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([e, t]) => e + ": " + t)
        .join("\n")
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders"
    }
    static from(e) {
      return e instanceof this ? e : new this(e)
    }
    static concat(e, ...t) {
      const n = new this(e)
      return t.forEach((e) => n.set(e)), n
    }
    static accessor(e) {
      const t = (this[$internals] = this[$internals] = { accessors: {} }).accessors,
        n = this.prototype
      function r(e) {
        const r = normalizeHeader(e)
        t[r] || (buildAccessors(n, e), (t[r] = !0))
      }
      return utils.isArray(e) ? e.forEach(r) : r(e), this
    }
  }
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
    utils.freezeMethods(AxiosHeaders.prototype),
    utils.freezeMethods(AxiosHeaders)
  const AxiosHeaders$1 = AxiosHeaders
  function transformData(e, t) {
    const n = this || defaults$1,
      r = t || n,
      i = AxiosHeaders$1.from(r.headers)
    let o = r.data
    return (
      utils.forEach(e, function (e) {
        o = e.call(n, o, i.normalize(), t ? t.status : void 0)
      }),
      i.normalize(),
      o
    )
  }
  function isCancel(e) {
    return !(!e || !e.__CANCEL__)
  }
  function CanceledError(e, t, n) {
    AxiosError.call(this, null == e ? "canceled" : e, AxiosError.ERR_CANCELED, t, n), (this.name = "CanceledError")
  }
  function settle(e, t, n) {
    const r = n.config.validateStatus
    n.status && r && !r(n.status)
      ? t(
          new AxiosError(
            "Request failed with status code " + n.status,
            [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
            n.config,
            n.request,
            n
          )
        )
      : e(n)
  }
  utils.inherits(CanceledError, AxiosError, { __CANCEL__: !0 })
  const cookies = platform.isStandardBrowserEnv
    ? {
        write: function (e, t, n, r, i, o) {
          const a = []
          a.push(e + "=" + encodeURIComponent(t)),
            utils.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            utils.isString(r) && a.push("path=" + r),
            utils.isString(i) && a.push("domain=" + i),
            !0 === o && a.push("secure"),
            (document.cookie = a.join("; "))
        },
        read: function (e) {
          const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"))
          return t ? decodeURIComponent(t[3]) : null
        },
        remove: function (e) {
          this.write(e, "", Date.now() - 864e5)
        },
      }
    : {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      }
  function isAbsoluteURL(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
  }
  function combineURLs(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
  }
  function buildFullPath(e, t) {
    return e && !isAbsoluteURL(t) ? combineURLs(e, t) : t
  }
  const isURLSameOrigin = platform.isStandardBrowserEnv
    ? (function () {
        const e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement("a")
        let n
        function r(n) {
          let r = n
          return (
            e && (t.setAttribute("href", r), (r = t.href)),
            t.setAttribute("href", r),
            {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, "") : "",
              hash: t.hash ? t.hash.replace(/^#/, "") : "",
              hostname: t.hostname,
              port: t.port,
              pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
            }
          )
        }
        return (
          (n = r(window.location.href)),
          function (e) {
            const t = utils.isString(e) ? r(e) : e
            return t.protocol === n.protocol && t.host === n.host
          }
        )
      })()
    : function () {
        return !0
      }
  function parseProtocol(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
    return (t && t[1]) || ""
  }
  function speedometer(e, t) {
    e = e || 10
    const n = new Array(e),
      r = new Array(e)
    let i,
      o = 0,
      a = 0
    return (
      (t = void 0 !== t ? t : 1e3),
      function (s) {
        const c = Date.now(),
          l = r[a]
        i || (i = c), (n[o] = s), (r[o] = c)
        let u = a,
          p = 0
        for (; u !== o; ) (p += n[u++]), (u %= e)
        if (((o = (o + 1) % e), o === a && (a = (a + 1) % e), c - i < t)) return
        const d = l && c - l
        return d ? Math.round((1e3 * p) / d) : void 0
      }
    )
  }
  function progressEventReducer(e, t) {
    let n = 0
    const r = speedometer(50, 250)
    return (i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        s = o - n,
        c = r(s)
      n = o
      const l = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: s,
        rate: c || void 0,
        estimated: c && a && o <= a ? (a - o) / c : void 0,
        event: i,
      }
      ;(l[t ? "download" : "upload"] = !0), e(l)
    }
  }
  const isXHRAdapterSupported = "undefined" != typeof XMLHttpRequest,
    xhrAdapter =
      isXHRAdapterSupported &&
      function (e) {
        return new Promise(function (t, n) {
          let r = e.data
          const i = AxiosHeaders$1.from(e.headers).normalize(),
            o = e.responseType
          let a
          function s() {
            e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a)
          }
          utils.isFormData(r) &&
            (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) &&
            i.setContentType(!1)
          let c = new XMLHttpRequest()
          if (e.auth) {
            const t = e.auth.username || "",
              n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ""
            i.set("Authorization", "Basic " + btoa(t + ":" + n))
          }
          const l = buildFullPath(e.baseURL, e.url)
          function u() {
            if (!c) return
            const r = AxiosHeaders$1.from("getAllResponseHeaders" in c && c.getAllResponseHeaders())
            settle(
              function (e) {
                t(e), s()
              },
              function (e) {
                n(e), s()
              },
              {
                data: o && "text" !== o && "json" !== o ? c.response : c.responseText,
                status: c.status,
                statusText: c.statusText,
                headers: r,
                config: e,
                request: c,
              }
            ),
              (c = null)
          }
          if (
            (c.open(e.method.toUpperCase(), buildURL(l, e.params, e.paramsSerializer), !0),
            (c.timeout = e.timeout),
            "onloadend" in c
              ? (c.onloadend = u)
              : (c.onreadystatechange = function () {
                  c &&
                    4 === c.readyState &&
                    (0 !== c.status || (c.responseURL && 0 === c.responseURL.indexOf("file:"))) &&
                    setTimeout(u)
                }),
            (c.onabort = function () {
              c && (n(new AxiosError("Request aborted", AxiosError.ECONNABORTED, e, c)), (c = null))
            }),
            (c.onerror = function () {
              n(new AxiosError("Network Error", AxiosError.ERR_NETWORK, e, c)), (c = null)
            }),
            (c.ontimeout = function () {
              let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
              const r = e.transitional || transitionalDefaults
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(new AxiosError(t, r.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, e, c)),
                (c = null)
            }),
            platform.isStandardBrowserEnv)
          ) {
            const t = (e.withCredentials || isURLSameOrigin(l)) && e.xsrfCookieName && cookies.read(e.xsrfCookieName)
            t && i.set(e.xsrfHeaderName, t)
          }
          void 0 === r && i.setContentType(null),
            "setRequestHeader" in c &&
              utils.forEach(i.toJSON(), function (e, t) {
                c.setRequestHeader(t, e)
              }),
            utils.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
            o && "json" !== o && (c.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              c.addEventListener("progress", progressEventReducer(e.onDownloadProgress, !0)),
            "function" == typeof e.onUploadProgress &&
              c.upload &&
              c.upload.addEventListener("progress", progressEventReducer(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((a = (t) => {
                c && (n(!t || t.type ? new CanceledError(null, e, c) : t), c.abort(), (c = null))
              }),
              e.cancelToken && e.cancelToken.subscribe(a),
              e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)))
          const p = parseProtocol(l)
          p && -1 === platform.protocols.indexOf(p)
            ? n(new AxiosError("Unsupported protocol " + p + ":", AxiosError.ERR_BAD_REQUEST, e))
            : c.send(r || null)
        })
      },
    knownAdapters = { http: httpAdapter, xhr: xhrAdapter }
  utils.forEach(knownAdapters, (t, n) => {
    if (t) {
      try {
        Object.defineProperty(t, "name", { value: n })
      } catch (e) {}
      Object.defineProperty(t, "adapterName", { value: n })
    }
  })
  const adapters = {
    getAdapter: (e) => {
      e = utils.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      for (let i = 0; i < t && ((n = e[i]), !(r = utils.isString(n) ? knownAdapters[n.toLowerCase()] : n)); i++);
      if (!r) {
        if (!1 === r) throw new AxiosError(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT")
        throw new Error(
          utils.hasOwnProp(knownAdapters, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
        )
      }
      if (!utils.isFunction(r)) throw new TypeError("adapter is not a function")
      return r
    },
    adapters: knownAdapters,
  }
  function throwIfCancellationRequested(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
      throw new CanceledError(null, e)
  }
  function dispatchRequest(e) {
    throwIfCancellationRequested(e),
      (e.headers = AxiosHeaders$1.from(e.headers)),
      (e.data = transformData.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1)
    return adapters
      .getAdapter(e.adapter || defaults$1.adapter)(e)
      .then(
        function (t) {
          return (
            throwIfCancellationRequested(e),
            (t.data = transformData.call(e, e.transformResponse, t)),
            (t.headers = AxiosHeaders$1.from(t.headers)),
            t
          )
        },
        function (t) {
          return (
            isCancel(t) ||
              (throwIfCancellationRequested(e),
              t &&
                t.response &&
                ((t.response.data = transformData.call(e, e.transformResponse, t.response)),
                (t.response.headers = AxiosHeaders$1.from(t.response.headers)))),
            Promise.reject(t)
          )
        }
      )
  }
  const headersToObject = (e) => (e instanceof AxiosHeaders$1 ? e.toJSON() : e)
  function mergeConfig(e, t) {
    t = t || {}
    const n = {}
    function r(e, t, n) {
      return utils.isPlainObject(e) && utils.isPlainObject(t)
        ? utils.merge.call({ caseless: n }, e, t)
        : utils.isPlainObject(t)
        ? utils.merge({}, t)
        : utils.isArray(t)
        ? t.slice()
        : t
    }
    function i(e, t, n) {
      return utils.isUndefined(t) ? (utils.isUndefined(e) ? void 0 : r(void 0, e, n)) : r(e, t, n)
    }
    function o(e, t) {
      if (!utils.isUndefined(t)) return r(void 0, t)
    }
    function a(e, t) {
      return utils.isUndefined(t) ? (utils.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t)
    }
    function s(n, i, o) {
      return o in t ? r(n, i) : o in e ? r(void 0, n) : void 0
    }
    const c = {
      url: o,
      method: o,
      data: o,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: (e, t) => i(headersToObject(e), headersToObject(t), !0),
    }
    return (
      utils.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
        const o = c[r] || i,
          a = o(e[r], t[r], r)
        ;(utils.isUndefined(a) && o !== s) || (n[r] = a)
      }),
      n
    )
  }
  const VERSION = "1.3.4",
    validators$1 = {}
  ;["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    validators$1[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
  })
  const deprecatedWarnings = {}
  function assertOptions(e, t, n) {
    if ("object" != typeof e) throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE)
    const r = Object.keys(e)
    let i = r.length
    for (; i-- > 0; ) {
      const o = r[i],
        a = t[o]
      if (a) {
        const t = e[o],
          n = void 0 === t || a(t, o, e)
        if (!0 !== n) throw new AxiosError("option " + o + " must be " + n, AxiosError.ERR_BAD_OPTION_VALUE)
      } else if (!0 !== n) throw new AxiosError("Unknown option " + o, AxiosError.ERR_BAD_OPTION)
    }
  }
  validators$1.transitional = function (e, t, n) {
    function r(e, t) {
      return "[Axios v" + VERSION + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
    }
    return (n, i, o) => {
      if (!1 === e) throw new AxiosError(r(i, " has been removed" + (t ? " in " + t : "")), AxiosError.ERR_DEPRECATED)
      return (
        t &&
          !deprecatedWarnings[i] &&
          ((deprecatedWarnings[i] = !0),
          console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))),
        !e || e(n, i, o)
      )
    }
  }
  const validator = { assertOptions: assertOptions, validators: validators$1 },
    validators = validator.validators
  class Axios {
    constructor(e) {
      ;(this.defaults = e),
        (this.interceptors = { request: new InterceptorManager$1(), response: new InterceptorManager$1() })
    }
    request(e, t) {
      "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = mergeConfig(this.defaults, t))
      const { transitional: n, paramsSerializer: r, headers: i } = t
      let o
      void 0 !== n &&
        validator.assertOptions(
          n,
          {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean),
          },
          !1
        ),
        void 0 !== r && validator.assertOptions(r, { encode: validators.function, serialize: validators.function }, !0),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase()),
        (o = i && utils.merge(i.common, i[t.method])),
        o &&
          utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
            delete i[e]
          }),
        (t.headers = AxiosHeaders$1.concat(o, i))
      const a = []
      let s = !0
      this.interceptors.request.forEach(function (e) {
        ;("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((s = s && e.synchronous), a.unshift(e.fulfilled, e.rejected))
      })
      const c = []
      let l
      this.interceptors.response.forEach(function (e) {
        c.push(e.fulfilled, e.rejected)
      })
      let u,
        p = 0
      if (!s) {
        const e = [dispatchRequest.bind(this), void 0]
        for (e.unshift.apply(e, a), e.push.apply(e, c), u = e.length, l = Promise.resolve(t); p < u; )
          l = l.then(e[p++], e[p++])
        return l
      }
      u = a.length
      let d = t
      for (p = 0; p < u; ) {
        const e = a[p++],
          t = a[p++]
        try {
          d = e(d)
        } catch (h) {
          t.call(this, h)
          break
        }
      }
      try {
        l = dispatchRequest.call(this, d)
      } catch (h) {
        return Promise.reject(h)
      }
      for (p = 0, u = c.length; p < u; ) l = l.then(c[p++], c[p++])
      return l
    }
    getUri(e) {
      return buildURL(buildFullPath((e = mergeConfig(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
    }
  }
  utils.forEach(["delete", "get", "head", "options"], function (e) {
    Axios.prototype[e] = function (t, n) {
      return this.request(mergeConfig(n || {}, { method: e, url: t, data: (n || {}).data }))
    }
  }),
    utils.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, i) {
          return this.request(
            mergeConfig(i || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          )
        }
      }
      ;(Axios.prototype[e] = t()), (Axios.prototype[e + "Form"] = t(!0))
    })
  const Axios$1 = Axios
  class CancelToken {
    constructor(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.")
      let t
      this.promise = new Promise(function (e) {
        t = e
      })
      const n = this
      this.promise.then((e) => {
        if (!n._listeners) return
        let t = n._listeners.length
        for (; t-- > 0; ) n._listeners[t](e)
        n._listeners = null
      }),
        (this.promise.then = (e) => {
          let t
          const r = new Promise((e) => {
            n.subscribe(e), (t = e)
          }).then(e)
          return (
            (r.cancel = function () {
              n.unsubscribe(t)
            }),
            r
          )
        }),
        e(function (e, r, i) {
          n.reason || ((n.reason = new CanceledError(e, r, i)), t(n.reason))
        })
    }
    throwIfRequested() {
      if (this.reason) throw this.reason
    }
    subscribe(e) {
      this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e])
    }
    unsubscribe(e) {
      if (!this._listeners) return
      const t = this._listeners.indexOf(e)
      ;-1 !== t && this._listeners.splice(t, 1)
    }
    static source() {
      let e
      return {
        token: new CancelToken(function (t) {
          e = t
        }),
        cancel: e,
      }
    }
  }
  const CancelToken$1 = CancelToken
  function spread(e) {
    return function (t) {
      return e.apply(null, t)
    }
  }
  function isAxiosError(e) {
    return utils.isObject(e) && !0 === e.isAxiosError
  }
  const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  }
  Object.entries(HttpStatusCode).forEach(([e, t]) => {
    HttpStatusCode[t] = e
  })
  const HttpStatusCode$1 = HttpStatusCode
  function createInstance(e) {
    const t = new Axios$1(e),
      n = bind(Axios$1.prototype.request, t)
    return (
      utils.extend(n, Axios$1.prototype, t, { allOwnKeys: !0 }),
      utils.extend(n, t, null, { allOwnKeys: !0 }),
      (n.create = function (t) {
        return createInstance(mergeConfig(e, t))
      }),
      n
    )
  }
  const axios = createInstance(defaults$1)
  ;(axios.Axios = Axios$1),
    (axios.CanceledError = CanceledError),
    (axios.CancelToken = CancelToken$1),
    (axios.isCancel = isCancel),
    (axios.VERSION = VERSION),
    (axios.toFormData = toFormData),
    (axios.AxiosError = AxiosError),
    (axios.Cancel = axios.CanceledError),
    (axios.all = function (e) {
      return Promise.all(e)
    }),
    (axios.spread = spread),
    (axios.isAxiosError = isAxiosError),
    (axios.mergeConfig = mergeConfig),
    (axios.AxiosHeaders = AxiosHeaders$1),
    (axios.formToJSON = (e) => formDataToJSON(utils.isHTMLForm(e) ? new FormData(e) : e)),
    (axios.HttpStatusCode = HttpStatusCode$1),
    (axios.default = axios)
  const axios$1 = axios
  var __defProp$8 = Object.defineProperty,
    __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor,
    __decorateClass$8 = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc$8(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp$8(t, n, o), o
    },
    __decorateParam$6 = (e, t) => (n, r) => t(n, r, e)
  let Store = class {
    constructor(e) {
      ;(this.storageManager = e), (this.plugins = []), (this.pluginStatus = [])
    }
    async init() {
      ;(this.plugins = []),
        (this.pluginStatus = []),
        await this.loadPluginsFromUrl(),
        await this.storageManager.initStorage()
      const e = this.storageManager.getPlugins(),
        t = []
      for (const n of this.plugins) {
        const r = { ...n, isExist: !1, needUpgrade: !1 },
          i = e.find((e) => e.key === n.key)
        if (i) {
          r.isExist = !0
          const e = new semver.SemVer(r.version),
            t = new semver.SemVer(i.version)
          1 === e.compare(t) && (r.needUpgrade = !0)
        }
        t.push(r)
      }
      this.pluginStatus = t
    }
    getStoreUrl() {
      return this.storageManager.get(PLUGIN_STORE_URL)
    }
    getPlugins() {
      return this.plugins
    }
    async loadPlugins() {
      return await this.init(), this.getPluginsWithStatus()
    }
    getPluginsWithStatus() {
      return this.pluginStatus
    }
    async loadPluginsFromUrl() {
      var t, n
      const r = this.getStoreUrl()
      if (!r) return
      let i
      try {
        i = await axios$1.get(r + "/plugins.json", { headers: { "Cache-Control": "no-cache" } })
      } catch (e) {
        return void console.error(e)
      }
      if (Array.isArray(null == (t = i.data) ? void 0 : t.plugins))
        for (const e of (null == (n = i.data) ? void 0 : n.plugins) || {}) {
          const t = await this.getPluginManifest(`${r}/${e}`)
          this.plugins.push(t)
        }
    }
    async getPluginByUrl(e) {
      return Promise.all([this.getPluginManifest(e), this.getPluginMainJs(e)]).then((e) => ({
        manifest: e[0],
        mainJs: e[1],
      }))
    }
    async getPluginManifest(t) {
      try {
        return (
          await axios$1.get(`${t}/manifest.json`, {
            headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
          })
        ).data
      } catch (e) {
        return console.error(e), null
      }
    }
    async getPluginMainJs(t) {
      window.axios = axios$1
      try {
        return (
          await axios$1.get(`${t}/main.js`, { headers: { "Content-Type": "text/plain", "Cache-Control": "no-cache" } })
        ).data
      } catch (e) {
        return console.error(e), null
      }
    }
    async getPluginReadme(t) {
      window.axios = axios$1
      const n = `${this.getStoreUrl()}/${t}`
      try {
        return (
          await axios$1.get(`${n}/README.md`, {
            headers: { "Content-Type": "text/plain", "Cache-Control": "no-cache" },
          })
        ).data
      } catch (e) {
        return console.error(e), null
      }
    }
    async downloadPlugin(e) {
      await sleep(500)
      const t = await this.getPluginByUrl(`${this.getStoreUrl()}/${e}`),
        n = t.manifest,
        r = t.mainJs
      return await Promise.all([
        FileClient.getInstanceApi().fileApi.putFile(`/data/plugins/${e}`, null, !0),
        FileClient.getInstanceApi().fileApi.putFile(`/data/plugins/${e}/manifest.json`, JSON.stringify(n), !1),
        FileClient.getInstanceApi().fileApi.putFile(`/data/plugins/${e}/main.js`, r, !1),
      ])
    }
  }
  function create_fragment$3(e) {
    let t, n, r, i
    const o = e[3].default,
      a = create_slot(o, e, e[2], null)
    return {
      c() {
        ;(t = element("button")), a && a.c(), (t.disabled = e[1]), attr(t, "class", "b3-button")
      },
      m(o, s) {
        insert(o, t, s),
          a && a.m(t, null),
          (n = !0),
          r ||
            ((i = listen(t, "click", function () {
              is_function(e[0]) && e[0].apply(this, arguments)
            })),
            (r = !0))
      },
      p(r, [i]) {
        ;(e = r),
          a &&
            a.p &&
            (!n || 4 & i) &&
            update_slot_base(
              a,
              o,
              e,
              e[2],
              n ? get_slot_changes(o, e[2], i, null) : get_all_dirty_from_scope(e[2]),
              null
            ),
          (!n || 2 & i) && (t.disabled = e[1])
      },
      i(e) {
        n || (transition_in(a, e), (n = !0))
      },
      o(e) {
        transition_out(a, e), (n = !1)
      },
      d(e) {
        e && detach(t), a && a.d(e), (r = !1), i()
      },
    }
  }
  function instance$3(e, t, n) {
    let { $$slots: r = {}, $$scope: i } = t,
      { onClick: o = null } = t,
      { disabled: a = !1 } = t
    return (
      (e.$$set = (e) => {
        "onClick" in e && n(0, (o = e.onClick)),
          "disabled" in e && n(1, (a = e.disabled)),
          "$$scope" in e && n(2, (i = e.$$scope))
      }),
      [o, a, i, r]
    )
  }
  Store = __decorateClass$8([injectable(), __decorateParam$6(0, inject(TYPES.StorageManager))], Store)
  class Button extends SvelteComponent {
    constructor(e) {
      super(), init(this, e, instance$3, create_fragment$3, safe_not_equal, { onClick: 0, disabled: 1 })
    }
  }
  const settingPreview_svelte_svelte_type_style_lang = ""
  function create_if_block_4$1(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s = _("url") + "",
      c = e[0].url + ""
    return {
      c() {
        ;(t = element("div")),
          (n = text(s)),
          (r = text(": ")),
          (i = element("a")),
          (o = text(c)),
          attr(i, "href", (a = e[0].url)),
          attr(i, "target", "_blank"),
          attr(i, "rel", "noreferrer"),
          attr(t, "class", "plugin-item")
      },
      m(e, a) {
        insert(e, t, a), append(t, n), append(t, r), append(t, i), append(i, o)
      },
      p(e, t) {
        1 & t && c !== (c = e[0].url + "") && set_data(o, c), 1 & t && a !== (a = e[0].url) && attr(i, "href", a)
      },
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_if_block_3$1(e) {
    let t,
      n,
      r,
      i,
      o = _("author") + "",
      a = e[0].author + ""
    return {
      c() {
        ;(t = element("div")), (n = text(o)), (r = text(": ")), (i = text(a)), attr(t, "class", "plugin-item")
      },
      m(e, o) {
        insert(e, t, o), append(t, n), append(t, r), append(t, i)
      },
      p(e, t) {
        1 & t && a !== (a = e[0].author + "") && set_data(i, a)
      },
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_if_block_2$1(e) {
    let t,
      n,
      r,
      i,
      o = _("version") + "",
      a = e[0].version + ""
    return {
      c() {
        ;(t = element("div")), (n = text(o)), (r = text(": ")), (i = text(a)), attr(t, "class", "plugin-item")
      },
      m(e, o) {
        insert(e, t, o), append(t, n), append(t, r), append(t, i)
      },
      p(e, t) {
        1 & t && a !== (a = e[0].version + "") && set_data(i, a)
      },
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_if_block_1$1(e) {
    let t,
      n,
      r,
      i,
      o = _("description") + "",
      a = e[0].description + ""
    return {
      c() {
        ;(t = element("div")), (n = text(o)), (r = text(": ")), (i = text(a)), attr(t, "class", "plugin-item")
      },
      m(e, o) {
        insert(e, t, o), append(t, n), append(t, r), append(t, i)
      },
      p(e, t) {
        1 & t && a !== (a = e[0].description + "") && set_data(i, a)
      },
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_else_block$1(e) {
    let t,
      n,
      r = e[2]() + ""
    return {
      c() {
        ;(t = new HtmlTag(!1)), (n = empty()), (t.a = n)
      },
      m(e, i) {
        t.m(r, e, i), insert(e, n, i)
      },
      p(e, n) {
        4 & n && r !== (r = e[2]() + "") && t.p(r)
      },
      d(e) {
        e && detach(n), e && t.d()
      },
    }
  }
  function create_if_block$1(e) {
    let t
    return {
      c() {
        ;(t = element("span")), (t.textContent = `${_("readme")}`)
      },
      m(e, n) {
        insert(e, t, n)
      },
      p: noop$1,
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_fragment$2(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s,
      c,
      l,
      u,
      p,
      d,
      h,
      f,
      g,
      m,
      y,
      v,
      b,
      w,
      E,
      S,
      A,
      $,
      T,
      O,
      P = e[0].name + "",
      I = e[0].key + "",
      N = _("goBack") + "",
      R = e[0].url && create_if_block_4$1(e),
      k = e[0].author && create_if_block_3$1(e),
      C = e[0].version && create_if_block_2$1(e),
      x = e[0].description && create_if_block_1$1(e)
    function L(e, t) {
      return e[1] ? create_if_block$1 : create_else_block$1
    }
    let D = L(e),
      B = D(e)
    return {
      c() {
        ;(t = element("div")),
          (n = element("div")),
          (r = element("div")),
          (i = element("div")),
          (o = text(P)),
          (a = space()),
          (s = element("div")),
          (c = text("(")),
          (l = text(I)),
          (u = text(")")),
          (p = space()),
          (d = element("button")),
          (h = svg_element("svg")),
          (f = svg_element("use")),
          (g = text(N)),
          (m = space()),
          (y = element("div")),
          R && R.c(),
          (v = space()),
          k && k.c(),
          (b = space()),
          C && C.c(),
          (w = space()),
          x && x.c(),
          (E = space()),
          (S = element("hr")),
          (A = space()),
          ($ = element("div")),
          B.c(),
          attr(i, "class", "plugin-name svelte-bj9chc"),
          attr(s, "class", "plugin-key svelte-bj9chc"),
          xlink_attr(f, "xlink:href", "#iconBack"),
          attr(h, "class", "go-back-icon svelte-bj9chc"),
          attr(d, "class", "go-back b3-button svelte-bj9chc"),
          attr(r, "class", "plugin-info svelte-bj9chc"),
          attr(y, "class", "plugin-manifest svelte-bj9chc"),
          attr(n, "class", "plugin-basic"),
          attr($, "class", "plugin-readme b3-typography svelte-bj9chc"),
          attr(t, "class", "plugin-detail svelte-bj9chc")
      },
      m(_, P) {
        insert(_, t, P),
          append(t, n),
          append(n, r),
          append(r, i),
          append(i, o),
          append(r, a),
          append(r, s),
          append(s, c),
          append(s, l),
          append(s, u),
          append(r, p),
          append(r, d),
          append(d, h),
          append(h, f),
          append(d, g),
          append(n, m),
          append(n, y),
          R && R.m(y, null),
          append(y, v),
          k && k.m(y, null),
          append(y, b),
          C && C.m(y, null),
          append(y, w),
          x && x.m(y, null),
          append(t, E),
          append(t, S),
          append(t, A),
          append(t, $),
          B.m($, null),
          T || ((O = listen(d, "click", e[5])), (T = !0))
      },
      p(e, [t]) {
        1 & t && P !== (P = e[0].name + "") && set_data(o, P),
          1 & t && I !== (I = e[0].key + "") && set_data(l, I),
          e[0].url ? (R ? R.p(e, t) : ((R = create_if_block_4$1(e)), R.c(), R.m(y, v))) : R && (R.d(1), (R = null)),
          e[0].author ? (k ? k.p(e, t) : ((k = create_if_block_3$1(e)), k.c(), k.m(y, b))) : k && (k.d(1), (k = null)),
          e[0].version ? (C ? C.p(e, t) : ((C = create_if_block_2$1(e)), C.c(), C.m(y, w))) : C && (C.d(1), (C = null)),
          e[0].description
            ? x
              ? x.p(e, t)
              : ((x = create_if_block_1$1(e)), x.c(), x.m(y, null))
            : x && (x.d(1), (x = null)),
          D === (D = L(e)) && B ? B.p(e, t) : (B.d(1), (B = D(e)), B && (B.c(), B.m($, null)))
      },
      i: noop$1,
      o: noop$1,
      d(e) {
        e && detach(t), R && R.d(), k && k.d(), C && C.d(), x && x.d(), B.d(), (T = !1), O()
      },
    }
  }
  function instance$2(e, t, n) {
    let r
    const i = createEventDispatcher()
    let o = !0,
      { plugin: a } = t
    let s
    const c = window.Lute.New()
    onMount(() => {
      ;(async () => {
        n(4, (s = await container.get("Store").getPluginReadme(a.key))), n(1, (o = !1))
      })()
    })
    const l = () => {
      i("goback")
    }
    return (
      (e.$$set = (e) => {
        "plugin" in e && n(0, (a = e.plugin))
      }),
      (e.$$.update = () => {
        16 & e.$$.dirty && n(2, (r = () => (s ? c.Md2HTML(s) : "")))
      }),
      [a, o, r, l, s, () => l()]
    )
  }
  class Setting_preview extends SvelteComponent {
    constructor(e) {
      super(), init(this, e, instance$2, create_fragment$2, safe_not_equal, { plugin: 0 })
    }
  }
  function get_each_context$1(e, t, n) {
    const r = e.slice()
    return (r[11] = t[n]), r
  }
  function create_else_block_2(e) {
    let t, n
    return (
      (t = new Setting_preview({ props: { plugin: e[3] } })),
      t.$on("goback", e[9]),
      {
        c() {
          create_component(t.$$.fragment)
        },
        m(e, r) {
          mount_component(t, e, r), (n = !0)
        },
        p(e, n) {
          const r = {}
          8 & n && (r.plugin = e[3]), t.$set(r)
        },
        i(e) {
          n || (transition_in(t.$$.fragment, e), (n = !0))
        },
        o(e) {
          transition_out(t.$$.fragment, e), (n = !1)
        },
        d(e) {
          destroy_component(t, e)
        },
      }
    )
  }
  function create_if_block_1(e) {
    let t,
      n,
      r = e[0],
      i = []
    for (let a = 0; a < r.length; a += 1) i[a] = create_each_block$1(get_each_context$1(e, r, a))
    const o = (e) =>
      transition_out(i[e], 1, 1, () => {
        i[e] = null
      })
    return {
      c() {
        t = element("div")
        for (let e = 0; e < i.length; e += 1) i[e].c()
        attr(t, "class", "fn__flex-1")
      },
      m(e, r) {
        insert(e, t, r)
        for (let n = 0; n < i.length; n += 1) i[n].m(t, null)
        n = !0
      },
      p(e, n) {
        if (53 & n) {
          let a
          for (r = e[0], a = 0; a < r.length; a += 1) {
            const o = get_each_context$1(e, r, a)
            i[a]
              ? (i[a].p(o, n), transition_in(i[a], 1))
              : ((i[a] = create_each_block$1(o)), i[a].c(), transition_in(i[a], 1), i[a].m(t, null))
          }
          for (group_outros(), a = r.length; a < i.length; a += 1) o(a)
          check_outros()
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < r.length; e += 1) transition_in(i[e])
          n = !0
        }
      },
      o(e) {
        i = i.filter(Boolean)
        for (let t = 0; t < i.length; t += 1) transition_out(i[t])
        n = !1
      },
      d(e) {
        e && detach(t), destroy_each(i, e)
      },
    }
  }
  function create_if_block(e) {
    let t
    return {
      c() {
        ;(t = element("div")), (t.textContent = `${_("loading")}`)
      },
      m(e, n) {
        insert(e, t, n)
      },
      p: noop$1,
      i: noop$1,
      o: noop$1,
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_else_block_1(e) {
    let t, n
    function r() {
      return e[8](e[11])
    }
    return (
      (t = new Button({ props: { onClick: r, $$slots: { default: [create_default_slot_3] }, $$scope: { ctx: e } } })),
      {
        c() {
          create_component(t.$$.fragment)
        },
        m(e, r) {
          mount_component(t, e, r), (n = !0)
        },
        p(n, i) {
          e = n
          const o = {}
          1 & i && (o.onClick = r), 16384 & i && (o.$$scope = { dirty: i, ctx: e }), t.$set(o)
        },
        i(e) {
          n || (transition_in(t.$$.fragment, e), (n = !0))
        },
        o(e) {
          transition_out(t.$$.fragment, e), (n = !1)
        },
        d(e) {
          destroy_component(t, e)
        },
      }
    )
  }
  function create_if_block_3(e) {
    let t, n, r, i
    const o = [create_if_block_4, create_else_block],
      a = []
    function s(e, t) {
      return e[11].needUpgrade ? 0 : 1
    }
    return (
      (t = s(e)),
      (n = a[t] = o[t](e)),
      {
        c() {
          n.c(), (r = empty())
        },
        m(e, n) {
          a[t].m(e, n), insert(e, r, n), (i = !0)
        },
        p(e, i) {
          let c = t
          ;(t = s(e)),
            t === c
              ? a[t].p(e, i)
              : (group_outros(),
                transition_out(a[c], 1, 1, () => {
                  a[c] = null
                }),
                check_outros(),
                (n = a[t]),
                n ? n.p(e, i) : ((n = a[t] = o[t](e)), n.c()),
                transition_in(n, 1),
                n.m(r.parentNode, r))
        },
        i(e) {
          i || (transition_in(n), (i = !0))
        },
        o(e) {
          transition_out(n), (i = !1)
        },
        d(e) {
          a[t].d(e), e && detach(r)
        },
      }
    )
  }
  function create_if_block_2(e) {
    let t, n
    return (
      (t = new Button({ props: { disabled: !0, $$slots: { default: [create_default_slot] }, $$scope: { ctx: e } } })),
      {
        c() {
          create_component(t.$$.fragment)
        },
        m(e, r) {
          mount_component(t, e, r), (n = !0)
        },
        p(e, n) {
          const r = {}
          16384 & n && (r.$$scope = { dirty: n, ctx: e }), t.$set(r)
        },
        i(e) {
          n || (transition_in(t.$$.fragment, e), (n = !0))
        },
        o(e) {
          transition_out(t.$$.fragment, e), (n = !1)
        },
        d(e) {
          destroy_component(t, e)
        },
      }
    )
  }
  function create_default_slot_3(e) {
    let t,
      n = _("download") + ""
    return {
      c() {
        t = text(n)
      },
      m(e, n) {
        insert(e, t, n)
      },
      p: noop$1,
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_else_block(e) {
    let t, n
    return (
      (t = new Button({ props: { disabled: !0, $$slots: { default: [create_default_slot_2] }, $$scope: { ctx: e } } })),
      {
        c() {
          create_component(t.$$.fragment)
        },
        m(e, r) {
          mount_component(t, e, r), (n = !0)
        },
        p(e, n) {
          const r = {}
          16384 & n && (r.$$scope = { dirty: n, ctx: e }), t.$set(r)
        },
        i(e) {
          n || (transition_in(t.$$.fragment, e), (n = !0))
        },
        o(e) {
          transition_out(t.$$.fragment, e), (n = !1)
        },
        d(e) {
          destroy_component(t, e)
        },
      }
    )
  }
  function create_if_block_4(e) {
    let t, n
    function r() {
      return e[7](e[11])
    }
    return (
      (t = new Button({ props: { onClick: r, $$slots: { default: [create_default_slot_1] }, $$scope: { ctx: e } } })),
      {
        c() {
          create_component(t.$$.fragment)
        },
        m(e, r) {
          mount_component(t, e, r), (n = !0)
        },
        p(n, i) {
          e = n
          const o = {}
          1 & i && (o.onClick = r), 16384 & i && (o.$$scope = { dirty: i, ctx: e }), t.$set(o)
        },
        i(e) {
          n || (transition_in(t.$$.fragment, e), (n = !0))
        },
        o(e) {
          transition_out(t.$$.fragment, e), (n = !1)
        },
        d(e) {
          destroy_component(t, e)
        },
      }
    )
  }
  function create_default_slot_2(e) {
    let t,
      n = _("downloaded") + ""
    return {
      c() {
        t = text(n)
      },
      m(e, n) {
        insert(e, t, n)
      },
      p: noop$1,
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_default_slot_1(e) {
    let t,
      n = _("upgrade") + ""
    return {
      c() {
        t = text(n)
      },
      m(e, n) {
        insert(e, t, n)
      },
      p: noop$1,
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_default_slot(e) {
    let t,
      n = _("downloading") + ""
    return {
      c() {
        t = text(n)
      },
      m(e, n) {
        insert(e, t, n)
      },
      p: noop$1,
      d(e) {
        e && detach(t)
      },
    }
  }
  function create_each_block$1(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s,
      c,
      l,
      u,
      p,
      d,
      h,
      f,
      g,
      m,
      _,
      y,
      v = e[11].name + "",
      b = e[11].version + "",
      w = (e[11].description || "") + ""
    function E(...t) {
      return e[6](e[11], ...t)
    }
    const S = [create_if_block_2, create_if_block_3, create_else_block_1],
      A = []
    function $(e, t) {
      return e[2][e[11].key] ? 0 : e[11].isExist ? 1 : 2
    }
    return (
      (h = $(e)),
      (f = A[h] = S[h](e)),
      {
        c() {
          ;(t = element("label")),
            (n = element("div")),
            (r = element("a")),
            (i = text(v)),
            (o = space()),
            (a = text(b)),
            (s = space()),
            (c = element("div")),
            (l = text(w)),
            (u = space()),
            (p = element("span")),
            (d = space()),
            f.c(),
            (g = space()),
            attr(r, "href", "javascript:void(0)"),
            attr(r, "class", ""),
            attr(c, "class", "b3-label__text"),
            attr(n, "class", "fn__flex-1"),
            attr(p, "class", "fn__space"),
            attr(t, "class", "fn__flex b3-label")
        },
        m(e, f) {
          insert(e, t, f),
            append(t, n),
            append(n, r),
            append(r, i),
            append(n, o),
            append(n, a),
            append(n, s),
            append(n, c),
            append(c, l),
            append(t, u),
            append(t, p),
            append(t, d),
            A[h].m(t, null),
            append(t, g),
            (m = !0),
            _ || ((y = listen(r, "click", E)), (_ = !0))
        },
        p(n, r) {
          ;(e = n),
            (!m || 1 & r) && v !== (v = e[11].name + "") && set_data(i, v),
            (!m || 1 & r) && b !== (b = e[11].version + "") && set_data(a, b),
            (!m || 1 & r) && w !== (w = (e[11].description || "") + "") && set_data(l, w)
          let o = h
          ;(h = $(e)),
            h === o
              ? A[h].p(e, r)
              : (group_outros(),
                transition_out(A[o], 1, 1, () => {
                  A[o] = null
                }),
                check_outros(),
                (f = A[h]),
                f ? f.p(e, r) : ((f = A[h] = S[h](e)), f.c()),
                transition_in(f, 1),
                f.m(t, g))
        },
        i(e) {
          m || (transition_in(f), (m = !0))
        },
        o(e) {
          transition_out(f), (m = !1)
        },
        d(e) {
          e && detach(t), A[h].d(), (_ = !1), y()
        },
      }
    )
  }
  function create_fragment$1(e) {
    let t, n, r, i
    const o = [create_if_block, create_if_block_1, create_else_block_2],
      a = []
    function s(e, t) {
      return e[1] ? 0 : e[3] ? 2 : 1
    }
    return (
      (n = s(e)),
      (r = a[n] = o[n](e)),
      {
        c() {
          ;(t = element("div")), r.c(), attr(t, "class", "b3-label fn__flex")
        },
        m(e, r) {
          insert(e, t, r), a[n].m(t, null), (i = !0)
        },
        p(e, [i]) {
          let c = n
          ;(n = s(e)),
            n === c
              ? a[n].p(e, i)
              : (group_outros(),
                transition_out(a[c], 1, 1, () => {
                  a[c] = null
                }),
                check_outros(),
                (r = a[n]),
                r ? r.p(e, i) : ((r = a[n] = o[n](e)), r.c()),
                transition_in(r, 1),
                r.m(t, null))
        },
        i(e) {
          i || (transition_in(r), (i = !0))
        },
        o(e) {
          transition_out(r), (i = !1)
        },
        d(e) {
          e && detach(t), a[n].d()
        },
      }
    )
  }
  function instance$1(e, t, n) {
    const r = container.get(TYPES.Store)
    let i = [],
      o = !0
    const a = {}
    onMount(async () => {
      n(0, (i = await r.loadPlugins())), n(1, (o = !1))
    })
    const s = async (e) => {
      if (!a[e])
        try {
          n(2, (a[e] = !0), a), await r.downloadPlugin(e)
          const t = i.find((t) => t.key === e)
          t && ((t.isExist = !0), (t.needUpgrade = !1))
        } finally {
          n(2, (a[e] = !1), a)
        }
    }
    let c = null
    const l = (e, t) => {
      n(3, (c = t)), e.stopPropagation(), e.preventDefault()
    }
    return [i, o, a, c, s, l, (e, t) => l(t, e), (e) => s(e.key), (e) => s(e.key), () => n(3, (c = null))]
  }
  class Setting_store extends SvelteComponent {
    constructor(e) {
      super(), init(this, e, instance$1, create_fragment$1, safe_not_equal, {})
    }
  }
  function get_each_context(e, t, n) {
    const r = e.slice()
    return (r[4] = t[n]), r
  }
  function create_each_block(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s,
      c,
      l,
      u = e[4].name + ""
    function p() {
      return e[3](e[4])
    }
    return {
      c() {
        ;(t = element("li")),
          (n = svg_element("svg")),
          (r = svg_element("use")),
          (i = element("span")),
          (o = text(u)),
          (a = space()),
          xlink_attr(r, "xlink:href", e[4].icon),
          attr(n, "class", "b3-list-item__graphic"),
          attr(i, "class", "b3-list-item__text"),
          attr(t, "data-name", e[4].key),
          attr(
            t,
            "class",
            (s =
              e[0].key === e[4].key
                ? "b3-list-item--focus b3-list-item b3-list-item--big"
                : "b3-list-item b3-list-item--big")
          )
      },
      m(e, s) {
        insert(e, t, s),
          append(t, n),
          append(n, r),
          append(t, i),
          append(i, o),
          append(t, a),
          c || ((l = listen(t, "click", p)), (c = !0))
      },
      p(n, r) {
        ;(e = n),
          1 & r &&
            s !==
              (s =
                e[0].key === e[4].key
                  ? "b3-list-item--focus b3-list-item b3-list-item--big"
                  : "b3-list-item b3-list-item--big") &&
            attr(t, "class", s)
      },
      d(e) {
        e && detach(t), (c = !1), l()
      },
    }
  }
  function create_fragment(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      s,
      c,
      l = e[1],
      u = []
    for (let d = 0; d < l.length; d += 1) u[d] = create_each_block(get_each_context(e, l, d))
    var p = e[0].component
    return (
      p && (a = construct_svelte_component(p, {})),
      {
        c() {
          ;(t = element("div")), (n = element("div")), (r = element("ul"))
          for (let e = 0; e < u.length; e += 1) u[e].c()
          ;(i = space()),
            (o = element("div")),
            a && create_component(a.$$.fragment),
            attr(r, "class", "b3-tab-bar b3-list b3-list--background"),
            set_style(r, "height", "unset", 1),
            attr(o, "class", "config__tab-container"),
            set_style(o, "height", "unset", 1),
            attr(o, "data-name", (s = e[0].key)),
            attr(n, "class", "fn__flex-1 fn__flex config__panel"),
            attr(t, "class", "fn__flex-column"),
            set_style(t, "border-radius", "4px"),
            set_style(t, "overflow", "auto"),
            set_style(t, "position", "relative"),
            set_style(t, "height", "50vh")
        },
        m(e, s) {
          insert(e, t, s), append(t, n), append(n, r)
          for (let t = 0; t < u.length; t += 1) u[t].m(r, null)
          append(n, i), append(n, o), a && mount_component(a, o, null), (c = !0)
        },
        p(e, [t]) {
          if (7 & t) {
            let n
            for (l = e[1], n = 0; n < l.length; n += 1) {
              const i = get_each_context(e, l, n)
              u[n] ? u[n].p(i, t) : ((u[n] = create_each_block(i)), u[n].c(), u[n].m(r, null))
            }
            for (; n < u.length; n += 1) u[n].d(1)
            u.length = l.length
          }
          if (p !== (p = e[0].component)) {
            if (a) {
              group_outros()
              const e = a
              transition_out(e.$$.fragment, 1, 0, () => {
                destroy_component(e, 1)
              }),
                check_outros()
            }
            p
              ? ((a = construct_svelte_component(p, {})),
                create_component(a.$$.fragment),
                transition_in(a.$$.fragment, 1),
                mount_component(a, o, null))
              : (a = null)
          }
          ;(!c || (1 & t && s !== (s = e[0].key))) && attr(o, "data-name", s)
        },
        i(e) {
          c || (a && transition_in(a.$$.fragment, e), (c = !0))
        },
        o(e) {
          a && transition_out(a.$$.fragment, e), (c = !1)
        },
        d(e) {
          e && detach(t), destroy_each(u, e), a && destroy_component(a)
        },
      }
    )
  }
  function instance(e, t, n) {
    const r = [
        { key: "common", name: _("menu_common"), icon: "#iconSettings", component: Setting_common },
        { key: "list", name: _("menu_list"), icon: "#iconSettings", component: Setting_list },
        { key: "store", name: _("menu_store"), icon: "#iconSettings", component: Setting_store },
      ],
      i = (e) => n(0, (o = e))
    let o = r[0]
    return [o, r, i, (e) => i(e)]
  }
  class Setting extends SvelteComponent {
    constructor(e) {
      super(), init(this, e, instance, create_fragment, safe_not_equal, {})
    }
  }
  class InternalSettingPlugin extends Plugin {
    constructor() {
      super(),
        (this.svg =
          '<svg t="1679703027227" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24715" width="200" height="200"><path d="M512 1023.99984a75.519988 75.519988 0 0 1-53.679992-22.207997L22.368077 565.455912c-29.487995-29.679995-29.487995-77.919988-0.064-107.519984l159.711975-159.839975a31.951995 31.951995 0 0 1 54.047991 28.207996 131.10398 131.10398 0 0 0-2.368 23.135996c0 69.951989 56.895991 128.11198 126.847981 128.11198 69.999989 0 121.119981-58.159991 121.119981-128.11198 0-70.079989-51.119992-127.07198-121.119981-127.07198a130.87998 130.87998 0 0 0-23.007997 2.384 31.759995 31.759995 0 0 1-33.919994-16.671998 31.999995 31.999995 0 0 1 5.743999-37.423994l148.895976-149.103976c28.847995-28.719996 78.719988-28.655996 107.423984-0.064l109.023983 109.183983C697.439971 59.887991 763.871961 8.479999 842.015948 8.479999c96.911985 0 175.743973 78.959988 175.743973 175.967972 0 78.239988-51.295992 144.719977-122.063981 167.471974l105.887984 105.951983a76.351988 76.351988 0 0 1 0.031999 107.551984L565.743992 1001.775843A75.759988 75.759988 0 0 1 512 1023.99984z" fill="" p-id="24716"></path></svg>')
    }
    onload() {
      const e = document.createElement("button")
      e.setAttribute("aria-label", _("plugin_system")),
        e.classList.add("toolbar__item", "b3-tooltips", "b3-tooltips__sw"),
        e.insertAdjacentHTML("beforeend", this.svg),
        e.addEventListener("click", (e) => {
          new Menu("internalSettingButton")
            .addItem(
              new MenuItem({ label: _("plugin_system_setting"), icon: "iconEdit", click: () => showSettingDialog() })
            )
            .addSeparator()
            .addItem(new MenuItem({ label: _("reload"), icon: "iconRefresh", click: () => window.location.reload() }))
            .showAtMouseEvent(e),
            e.stopPropagation()
        }),
        addToolbarRight(e),
        this.registerCommand({
          command: "Show plugin system conifg",
          description: _("show_plugin_system_config"),
          shortcut: "command+option+p",
          callback: () => showSettingDialog(),
        }),
        this.registerCommand({
          command: "Reload Window",
          description: _("reload_window"),
          callback: () => window.location.reload(),
        })
    }
    onunload() {
      console.log("InternalSettingPluginUnload")
    }
  }
  function showSettingDialog() {
    new Dialog({
      title: _("plugin_system_setting"),
      content: '<div id="plugin-settings"></div>',
      width: "90vw",
      height: "50vh",
    }),
      setTimeout(() => {
        new Setting({ target: document.getElementById("plugin-settings") })
      })
  }
  const internalPlugins = [
    { key: "setting", name: "setting", plugin: InternalSettingPlugin, enabled: !0, hidden: !0, version: "1.0.0" },
    {
      key: "commandPanel",
      name: "commandPanel",
      plugin: CommandPanelPlugin,
      enabled: !0,
      hidden: !0,
      version: "1.0.0",
    },
  ]
  function isHighSurrogate$1(e) {
    return e >= 55296 && e <= 56319
  }
  function isLowSurrogate$1(e) {
    return e >= 56320 && e <= 57343
  }
  var truncate$2 = function (e, t, n) {
    if ("string" != typeof t) throw new Error("Input must be string")
    for (var r, i, o = t.length, a = 0, s = 0; s < o; s += 1) {
      if (
        ((r = t.charCodeAt(s)),
        (i = t[s]),
        isHighSurrogate$1(r) && isLowSurrogate$1(t.charCodeAt(s + 1)) && (i += t[(s += 1)]),
        (a += e(i)) === n)
      )
        return t.slice(0, s + 1)
      if (a > n) return t.slice(0, s - i.length + 1)
    }
    return t
  }
  function isHighSurrogate(e) {
    return e >= 55296 && e <= 56319
  }
  function isLowSurrogate(e) {
    return e >= 56320 && e <= 57343
  }
  var browser$1 = function (e) {
      if ("string" != typeof e) throw new Error("Input must be string")
      for (var t = e.length, n = 0, r = null, i = null, o = 0; o < t; o++)
        isLowSurrogate((r = e.charCodeAt(o)))
          ? null != i && isHighSurrogate(i)
            ? (n += 1)
            : (n += 3)
          : r <= 127
          ? (n += 1)
          : r >= 128 && r <= 2047
          ? (n += 2)
          : r >= 2048 && r <= 65535 && (n += 3),
          (i = r)
      return n
    },
    truncate$1 = truncate$2,
    getLength = browser$1,
    browser = truncate$1.bind(null, getLength),
    truncate = browser,
    illegalRe = /[\/\?<>\\:\*\|"]/g,
    controlRe = /[\x00-\x1f\x80-\x9f]/g,
    reservedRe = /^\.+$/,
    windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,
    windowsTrailingRe = /[\. ]+$/
  function sanitize(e, t) {
    if ("string" != typeof e) throw new Error("Input must be string")
    var n = e
      .replace(illegalRe, t)
      .replace(controlRe, t)
      .replace(reservedRe, t)
      .replace(windowsReservedRe, t)
      .replace(windowsTrailingRe, t)
    return truncate(n, 255)
  }
  var sanitizeFilename = function (e, t) {
      var n = (t && t.replacement) || "",
        r = sanitize(e, n)
      return "" === n ? r : sanitize(r, "")
    },
    __defProp$7 = Object.defineProperty,
    __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor,
    __decorateClass$7 = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc$7(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp$7(t, n, o), o
    },
    __decorateParam$5 = (e, t) => (n, r) => t(n, r, e)
  let StorageManager = class {
    constructor(e) {
      ;(this.config = Object.assign({}, defaultConfig)), (this.pluginFileManager = e)
    }
    get(e) {
      return this.config[e]
    }
    async set(e, t) {
      return (this.config[e] = t), setStorageVal(e, t)
    }
    async initStorage() {
      const e = await getLocalStorage(),
        t = Object.keys(defaultConfig)
      for (const n of t) void 0 !== e[n] ? (this.config[n] = e[n]) : await setStorageVal(n, defaultConfig[n])
      return (
        (this.thirdPartyPlugins = await this.pluginFileManager.getAllPlugins()),
        (this.internalPlugins = [...internalPlugins]),
        this.init3rdPartyEnabled(),
        this.initInternalEnabled(),
        await this.savePluginsEnabled(),
        this
      )
    }
    init3rdPartyEnabled() {
      const e = this.get(PLUGIN_SYSTEM_THIRD_PARTY_PLUGIN)
      for (const t of e)
        for (const e of this.thirdPartyPlugins)
          if (e.key === t.key) {
            e.enabled = t.enabled || !1
            break
          }
    }
    initInternalEnabled() {
      const e = this.get(PLUGIN_SYSTEM_PLUGIN)
      for (const t of e)
        for (const e of this.internalPlugins)
          if (e.key === t.key) {
            e.enabled = t.enabled || !1
            break
          }
    }
    getPlugins() {
      return [...this.internalPlugins, ...this.thirdPartyPlugins]
    }
    getInternalPlugins() {
      return this.internalPlugins
    }
    getThirdPartyPlugins() {
      return this.thirdPartyPlugins
    }
    getPluginByKey(e) {
      return this.getPlugins().find((t) => t.key === e)
    }
    async setPluginEnabled(e, t) {
      for (const n of [...this.internalPlugins, ...this.thirdPartyPlugins])
        if (n.key === e) {
          n.enabled = t
          break
        }
      await this.savePluginsEnabled()
    }
    async setSafeModeEnabled(e) {
      return this.set(PLUGIN_SYSTEM_SAFE_MODE_ENABLED, e)
    }
    async savePluginsEnabled() {
      return (
        await this.set(
          PLUGIN_SYSTEM_PLUGIN,
          this.internalPlugins.map((e) => ({ key: e.key, enabled: e.enabled }))
        ),
        this.set(
          PLUGIN_SYSTEM_THIRD_PARTY_PLUGIN,
          this.thirdPartyPlugins.map((e) => ({ key: e.key, enabled: e.enabled }))
        )
      )
    }
    async setPluginStorage(t, n, r) {
      try {
        if (this.isFileNameIllegal(n)) return void showErrorMessage(`插件${t}存储文件名不合法`)
        await this.addPluginStorageFolderIfNotExist(t),
          await FileClient.getInstanceApi().fileApi.putFile(`/data/plugins/.storage/${t}/${n}`, r)
      } catch (e) {
        showErrorMessage(`插件${t}存储保存失败`, 2e3)
      }
    }
    async getPluginStorage(t, n) {
      try {
        return await FileClient.getInstanceApi().fileApi.getFile(`/data/plugins/.storage/${t}/${n}`)
      } catch (e) {
        return showErrorMessage(`插件${t}存储保存失败`, 2e3), null
      }
    }
    async uninstallPlugin(e) {
      await FileClient.getInstanceApi().fileApi.removeFile(`/data/plugins/${e}`),
        await FileClient.getInstanceApi().fileApi.removeFile(`/data/plugins//.storage/${e}`)
    }
    async addPluginStorageFolderIfNotExist(e) {
      const t = `/data/plugins/.storage/${e}`
      await FileClient.getInstanceApi().fileApi.putFile(t, null, !0)
    }
    isFileNameIllegal(e) {
      return e !== sanitizeFilename(e)
    }
  }
  StorageManager = __decorateClass$7(
    [injectable(), __decorateParam$5(0, inject(TYPES.PluginFileManager))],
    StorageManager
  )
  var __defProp$6 = Object.defineProperty,
    __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor,
    __decorateClass$6 = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc$6(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp$6(t, n, o), o
    },
    __decorateParam$4 = (e, t) => (n, r) => t(n, r, e)
  let PluginSystem = class {
    constructor(e, t, n, r, i) {
      ;(this.pluginLoader = e),
        (this.pslm = t),
        (this.storageManager = n),
        (this.commandManager = r),
        (this.store = i),
        (this.version = VERSION$1)
    }
    async init() {
      await this.storageManager.initStorage()
      const e = this.storageManager.getInternalPlugins()
      this.pluginLoader.loadEnabledPlugins(e), log(`Loading internal enabled plugins: ${e.map((e) => e.key).join(",")}`)
      if (!this.storageManager.get(PLUGIN_SYSTEM_SAFE_MODE_ENABLED)) {
        const e = this.storageManager.getThirdPartyPlugins()
        log(`Loading 3rd party enabled plugins: ${e.map((e) => e.key).join(",")}`),
          this.pluginLoader.loadEnabledPlugins(e)
      }
      return this.pslm.localCacheInit(), this
    }
    async loadPlugin(e) {
      this.storageManager.setPluginEnabled(e, !0)
      const t = this.storageManager.getPluginByKey(e)
      this.pluginLoader.loadPlugin(t)
    }
    async unloadPlugin(e) {
      this.storageManager.setPluginEnabled(e, !1), this.pluginLoader.unloadPlugin(e)
    }
    async turnOffSafeMode() {
      this.storageManager.setSafeModeEnabled(!1)
      const e = this.storageManager.getThirdPartyPlugins()
      return this.pluginLoader.loadEnabledPlugins(e)
    }
    async turnOnSafeMode() {
      this.storageManager.setSafeModeEnabled(!0)
      const e = this.storageManager.getThirdPartyPlugins()
      return this.pluginLoader.unloadThirdPartyPlugins(e)
    }
  }
  PluginSystem = __decorateClass$6(
    [
      injectable(),
      __decorateParam$4(0, inject(TYPES.PluginLoader)),
      __decorateParam$4(1, inject(TYPES.SystemManager)),
      __decorateParam$4(2, inject(TYPES.StorageManager)),
      __decorateParam$4(3, inject(TYPES.CommandManager)),
      __decorateParam$4(4, inject(TYPES.Store)),
    ],
    PluginSystem
  )
  const migrate = async () => {
    const e = "plugin-system-bazzar",
      t =
        "(async () => {\n        window.pluginSystemSource = 'bazzar';\n        const response = await fetch('/api/file/getFile', {\n            method: 'POST',\n            mode: 'cors',\n            cache: 'no-cache',\n            credentials: 'same-origin',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            redirect: 'follow',\n            referrerPolicy: 'no-referrer',\n            body: JSON.stringify({ path: '/data/widgets/插件系统/plugin.js' }),\n        });\n        const js = await response.text();\n        eval(js);\n    })()",
      n = async (e, t) =>
        (
          await fetch(e, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(t),
          })
        ).json(),
      r = (await n("/api/snippet/getSnippet", { enabled: 2, type: "all" })).data.snippets
    for (const i of r)
      if (
        "js" === i.type &&
        (-1 !== i.content.indexOf("https://gitee.com/zuoez02/siyuan-plugin-system/raw/main/main.js") &&
          (i.enabled = !1),
        i.name === e)
      )
        return (i.enabled = !0), (i.content = t), void (await n("/api/snippet/setSnippet", { snippets: r }))
    r.splice(0, 0, { id: "20230324100959-plugind", name: e, type: "js", enabled: !0, content: t }),
      await n("/api/snippet/setSnippet", { snippets: r }),
      setTimeout(() => window.parent.location.reload(), 1e3)
  }
  var __defProp$5 = Object.defineProperty,
    __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor,
    __decorateClass$5 = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc$5(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp$5(t, n, o), o
    },
    __decorateParam$3 = (e, t) => (n, r) => t(n, r, e)
  const pluginScriptPosition = PLUGIN_SYS_ABS_PATH
  let SystemManager = class {
    constructor(e) {
      this.storageMangager = e
    }
    async saveToLocal(e, t) {
      FileClient.getInstanceApi().fileApi.putFile(e, t)
    }
    async localCacheInit() {
      try {
        return void (
          null !== FileClient.getInstanceApi().fileApi.getFile(pluginScriptPosition) && this.delayAutoUpgrade()
        )
      } catch (e) {
        log("Plugin system not found")
      }
      const t = window.siyuanPluginScript
      t && (await this.saveToLocal(pluginScriptPosition, t), this.delayAutoUpgrade())
    }
    delayAutoUpgrade() {
      setTimeout(() => {
        this.storageMangager.get(PLUGIN_SYSTEM_AUTO_UPDATE) ? this.tryUpgrade() : log("Auto Update skipped")
      }, 1e3)
    }
    async tryUpgrade() {
      if ("bazzar" === window.pluginSystemSource) return void log("Plugin installed from bazzar version, upgrade skip")
      log("Try getting online version")
      const e = await this.getOnlineVersion()
      e !== VERSION$1
        ? (showInfoMessage(`插件系统获取到最新版本 ${e}，即将自动更新`),
          log("Online Version: " + e + ", local version: " + VERSION$1),
          log("Downloading new version of Plugin System"),
          this.upgrade())
        : log("Version is " + VERSION$1 + ", OK")
    }
    async getOnlineVersion() {
      return fetch(VERSION_URL, { cache: "no-cache" }).then((e) => e.text())
    }
    async upgrade() {
      const e = await fetch(SCRIPT_URL, { cache: "no-cache" }).then((e) => e.text())
      e &&
        (migrate(),
        showInfoMessage("插件系统升级中，即将自动重载..."),
        await this.saveToLocal(pluginScriptPosition, e),
        log("Plugin system upgraded, reloading..."),
        setTimeout(() => reloadWindow(), 3e3))
    }
  }
  SystemManager = __decorateClass$5([injectable(), __decorateParam$3(0, inject(TYPES.StorageManager))], SystemManager)
  var __defProp$4 = Object.defineProperty,
    __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor,
    __decorateClass$4 = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc$4(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp$4(t, n, o), o
    },
    __decorateParam$2 = (e, t) => (n, r) => t(n, r, e)
  let components,
    PluginLoader = class {
      constructor(e) {
        ;(this.pluginFileManager = e), (this.loadedPlugins = new Map())
      }
      async loadEnabledPlugins(e) {
        if (e && e.length) for (const t of e) t.enabled && (await this.loadPlugin(t))
      }
      async loadAllInternalPlugins() {
        internalPlugins.forEach(async (e) => {
          const t = new e.plugin()
          if (!(t instanceof Plugin)) throw new Error(`Failed to load plugin ${e.name}`)
          log(`Load internal plugin: ${e.key}(${e.name})`),
            this.addAdditionalMethod(t, e.key, e.name),
            await t.onload(),
            this.loadedPlugins.set(e.key, t)
        })
      }
      async loadAllLocalPlugins() {
        const e = await this.pluginFileManager.getAllPlugins()
        if (e) for (const t of e) await this.loadPlugin(t)
      }
      async loadPlugin(plugin) {
        if ((components || this.generateRequiredModules(), !plugin.enabled || (!plugin.plugin && !plugin.script)))
          return
        if (plugin.plugin) {
          const e = new plugin.plugin()
          if (!(e instanceof Plugin)) throw new Error(`Failed to load plugin ${plugin.name}`)
          return (
            log(`Load internal plugin: ${plugin.key}(${plugin.name})`),
            this.addAdditionalMethod(e, plugin.key, plugin.name),
            await e.onload(),
            void this.loadedPlugins.set(plugin.key, e)
          )
        }
        const exports = {},
          module = { exports: exports }
        function run(script, name) {
          return eval(
            "(function anonymous(require,module,exports){".concat(script, "\n})\n//# sourceURL=").concat(name, "\n")
          )
        }
        const __require = (e) => {
            if (components[e]) return components[e]
            throw new Error(`module ${e} not found`)
          },
          pluginName = plugin.key
        try {
          run(plugin.script, plugin.key)(__require, module, exports)
        } catch (e) {
          return void error("Error plugin:" + plugin.key + " ->", e)
        }
        let pluginConstructor
        if (!(pluginConstructor = (module.exports || exports).default || module.exports))
          throw new Error(`Failed to load plugin ${pluginName}. No exports detected.`)
        const plug = new pluginConstructor()
        if (!(plug instanceof Plugin)) throw new Error(`Failed to load plugin ${pluginName}`)
        this.addAdditionalMethod(plug, plugin.key, pluginName)
        try {
          await plug.onload(), this.loadedPlugins.set(plugin.key, plug)
        } catch (e) {
          error("Error plugin:" + plugin.key + " ->", e)
        }
      }
      async unloadPlugin(e) {
        const t = this.loadedPlugins.get(e)
        t &&
          (t.onunload(), container.get(TYPES.CommandManager).unregisterCommandByPlugin(e), this.loadedPlugins.delete(e))
      }
      async unloadThirdPartyPlugins(e) {
        const t = e.filter((e) => e.enabled).map((e) => e.key)
        for (const n of t) log(`unload third party plugin: ${n}`), await this.unloadPlugin(n)
      }
      async loadThirdPartyEnabledPlugins(e) {
        return this.loadEnabledPlugins(e)
      }
      generateRequiredModules() {
        components = { siyuan: api, axios: axios$1 }
      }
      addAdditionalMethod(e, t, n) {
        e.registerCommand = (e) => {
          container.get(TYPES.CommandManager).registerCommand({ ...e, plugin: t, pluginName: n })
        }
        const r = container.get(TYPES.StorageManager)
        ;(e.writeStorage = async (e, n) => await r.setPluginStorage(t, e, n)),
          (e.loadStorage = async (e) => await r.getPluginStorage(t, e))
      }
    }
  PluginLoader = __decorateClass$4([injectable(), __decorateParam$2(0, inject(TYPES.PluginFileManager))], PluginLoader)
  var __defProp$3 = Object.defineProperty,
    __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor,
    __decorateClass$3 = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc$3(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp$3(t, n, o), o
    }
  let PluginFileManager = class {
    async scanPlugins(e) {
      const t = await FileClient.getInstanceApi().fileApi.readDir(e)
      if (!t) return []
      const n = t,
        r = []
      for (const i of n)
        i.name.startsWith(".") ||
          (i.isDir &&
            (await isExists(`/data/plugins/${i.name}/manifest.json`)) &&
            (await isExists(`/data/plugins/${i.name}/main.js`)) &&
            r.push(`/data/plugins/${i.name}`))
      return r
    }
    async getFileContent(e) {
      return (await FileClient.getInstanceApi().fileApi.getFile(e)) || ""
    }
    async getManifest(t) {
      const n = await this.getFileContent(t)
      try {
        return JSON.parse(n)
      } catch (e) {
        return error("loading manifest: " + t, e), null
      }
    }
    async getScript(e) {
      return await this.getFileContent(e)
    }
    async getAllPlugins() {
      const e = await this.scanPlugins("/data/plugins")
      if (!e || !e.length) return log("No plugin found in /data/plugins"), []
      const t = []
      for (const n of e) {
        log("Reading plugin from filesystem: " + n)
        const [e, r] = await Promise.all([this.getManifest(`${n}/manifest.json`), this.getScript(`${n}/main.js`)])
        t.push({ ...e, script: r, enabled: !1, key: this.getFolderName(n) })
      }
      return t || []
    }
    getFolderName(e) {
      const t = e.split("/")
      for (let n = t.length - 1; n >= 0; n--) if (t[n]) return t[n]
      return ""
    }
  }
  PluginFileManager = __decorateClass$3([injectable()], PluginFileManager)
  var __defProp$2 = Object.defineProperty,
    __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor,
    __decorateClass$2 = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc$2(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp$2(t, n, o), o
    }
  let EventBus = class {
    constructor() {
      this.eventListeners = {}
    }
    destroy() {
      delete this.eventListeners
    }
    on(e, t) {
      return (
        this.eventListeners[e] || (this.eventListeners[e] = []), this.eventListeners[e].push(t), () => this.off(e, t)
      )
    }
    off(e, t) {
      if (t) {
        for (let n = 0; n < this.eventListeners[e].length; n++)
          if (this.eventListeners[e][n] === t) return void this.eventListeners[e].splice(n, 1)
      } else delete this.eventListeners[e]
    }
    emit(e, ...t) {
      this.eventListeners[e] &&
        this.eventListeners[e].forEach((e) => {
          e(...t)
        })
    }
  }
  EventBus = __decorateClass$2([injectable()], EventBus)
  var __defProp$1 = Object.defineProperty,
    __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor,
    __decorateClass$1 = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc$1(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp$1(t, n, o), o
    },
    __decorateParam$1 = (e, t) => (n, r) => t(n, r, e)
  let CommandManager = class {
    constructor(e) {
      ;(this.commandList = []), (this.shortcut = e)
    }
    registerCommand(e) {
      return this.commandList.some((t) => {
        t.plugin === e.plugin && (t.command, e.command)
      })
        ? new Error$1("Command is already registered, do not register command repeatly")
        : e.shortcut &&
          this.commandList.some((t) => {
            t.shortcut, e.shortcut
          })
        ? new Warning("shortcut has already registered")
        : (this.commandList.push(e),
          this.shortcut.registerKeyboardEventFromPlugin(e),
          void log(`Register plugin: ${e.plugin} command: ${e.command}`))
    }
    unregisterCommandByPlugin(e) {
      for (let t = 0; t < this.commandList.length; t++)
        if (e === this.commandList[t].plugin) {
          const n = this.commandList[t]
          log(`Unregister plugin: ${e} command: ${n.command}`),
            this.commandList.splice(t, 1),
            n.shortcut && this.shortcut.unregisterKeyboardEvent(n.shortcut)
        }
    }
    unregisterCommand(e) {
      for (let t = 0; t < this.commandList.length; t++)
        if (e.command === this.commandList[t].command && e.plugin === this.commandList[t].plugin) {
          this.commandList.splice(t, 1)
          break
        }
      this.shortcut.registerKeyboardEventFromPlugin(e)
    }
    getCommands() {
      return this.commandList
    }
  }
  CommandManager = __decorateClass$1([injectable(), __decorateParam$1(0, inject(TYPES.Shortcut))], CommandManager)
  var isff = "undefined" != typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0
  function addEvent(e, t, n, r) {
    e.addEventListener
      ? e.addEventListener(t, n, r)
      : e.attachEvent &&
        e.attachEvent("on".concat(t), function () {
          n(window.event)
        })
  }
  function getMods(e, t) {
    for (var n = t.slice(0, t.length - 1), r = 0; r < n.length; r++) n[r] = e[n[r].toLowerCase()]
    return n
  }
  function getKeys(e) {
    "string" != typeof e && (e = "")
    for (var t = (e = e.replace(/\s/g, "")).split(","), n = t.lastIndexOf(""); n >= 0; )
      (t[n - 1] += ","), t.splice(n, 1), (n = t.lastIndexOf(""))
    return t
  }
  function compareArray(e, t) {
    for (var n = e.length >= t.length ? e : t, r = e.length >= t.length ? t : e, i = !0, o = 0; o < n.length; o++)
      -1 === r.indexOf(n[o]) && (i = !1)
    return i
  }
  for (
    var _keyMap = {
        backspace: 8,
        "⌫": 8,
        tab: 9,
        clear: 12,
        enter: 13,
        "↩": 13,
        return: 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        delete: 46,
        ins: 45,
        insert: 45,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        capslock: 20,
        num_0: 96,
        num_1: 97,
        num_2: 98,
        num_3: 99,
        num_4: 100,
        num_5: 101,
        num_6: 102,
        num_7: 103,
        num_8: 104,
        num_9: 105,
        num_multiply: 106,
        num_add: 107,
        num_enter: 108,
        num_subtract: 109,
        num_decimal: 110,
        num_divide: 111,
        "⇪": 20,
        ",": 188,
        ".": 190,
        "/": 191,
        "`": 192,
        "-": isff ? 173 : 189,
        "=": isff ? 61 : 187,
        ";": isff ? 59 : 186,
        "'": 222,
        "[": 219,
        "]": 221,
        "\\": 220,
      },
      _modifier = {
        "⇧": 16,
        shift: 16,
        "⌥": 18,
        alt: 18,
        option: 18,
        "⌃": 17,
        ctrl: 17,
        control: 17,
        "⌘": 91,
        cmd: 91,
        command: 91,
      },
      modifierMap = {
        16: "shiftKey",
        18: "altKey",
        17: "ctrlKey",
        91: "metaKey",
        shiftKey: 16,
        ctrlKey: 17,
        altKey: 18,
        metaKey: 91,
      },
      _mods = { 16: !1, 18: !1, 17: !1, 91: !1 },
      _handlers = {},
      k = 1;
    k < 20;
    k++
  )
    _keyMap["f".concat(k)] = 111 + k
  var _downKeys = [],
    winListendFocus = !1,
    _scope = "all",
    elementHasBindEvent = [],
    code = function (e) {
      return _keyMap[e.toLowerCase()] || _modifier[e.toLowerCase()] || e.toUpperCase().charCodeAt(0)
    },
    getKey = function (e) {
      return Object.keys(_keyMap).find(function (t) {
        return _keyMap[t] === e
      })
    },
    getModifier = function (e) {
      return Object.keys(_modifier).find(function (t) {
        return _modifier[t] === e
      })
    }
  function setScope(e) {
    _scope = e || "all"
  }
  function getScope() {
    return _scope || "all"
  }
  function getPressedKeyCodes() {
    return _downKeys.slice(0)
  }
  function getPressedKeyString() {
    return _downKeys.map(function (e) {
      return getKey(e) || getModifier(e) || String.fromCharCode(e)
    })
  }
  function filter(e) {
    var t = e.target || e.srcElement,
      n = t.tagName,
      r = !0
    return (
      (!t.isContentEditable && (("INPUT" !== n && "TEXTAREA" !== n && "SELECT" !== n) || t.readOnly)) || (r = !1), r
    )
  }
  function isPressed(e) {
    return "string" == typeof e && (e = code(e)), -1 !== _downKeys.indexOf(e)
  }
  function deleteScope(e, t) {
    var n, r
    for (var i in (e || (e = getScope()), _handlers))
      if (Object.prototype.hasOwnProperty.call(_handlers, i))
        for (n = _handlers[i], r = 0; r < n.length; ) n[r].scope === e ? n.splice(r, 1) : r++
    getScope() === e && setScope(t || "all")
  }
  function clearModifier(e) {
    var t = e.keyCode || e.which || e.charCode,
      n = _downKeys.indexOf(t)
    if (
      (n >= 0 && _downKeys.splice(n, 1),
      e.key && "meta" === e.key.toLowerCase() && _downKeys.splice(0, _downKeys.length),
      (93 !== t && 224 !== t) || (t = 91),
      t in _mods)
    )
      for (var r in ((_mods[t] = !1), _modifier)) _modifier[r] === t && (hotkeys[r] = !1)
  }
  function unbind(e) {
    if (void 0 === e)
      Object.keys(_handlers).forEach(function (e) {
        return delete _handlers[e]
      })
    else if (Array.isArray(e))
      e.forEach(function (e) {
        e.key && eachUnbind(e)
      })
    else if ("object" == typeof e) e.key && eachUnbind(e)
    else if ("string" == typeof e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
      var i = n[0],
        o = n[1]
      "function" == typeof i && ((o = i), (i = "")), eachUnbind({ key: e, scope: i, method: o, splitKey: "+" })
    }
  }
  var eachUnbind = function (e) {
    var t = e.key,
      n = e.scope,
      r = e.method,
      i = e.splitKey,
      o = void 0 === i ? "+" : i
    getKeys(t).forEach(function (e) {
      var t = e.split(o),
        i = t.length,
        a = t[i - 1],
        s = "*" === a ? "*" : code(a)
      if (_handlers[s]) {
        n || (n = getScope())
        var c = i > 1 ? getMods(_modifier, t) : []
        _handlers[s] = _handlers[s].filter(function (e) {
          return !((!r || e.method === r) && e.scope === n && compareArray(e.mods, c))
        })
      }
    })
  }
  function eventHandler(e, t, n, r) {
    var i
    if (t.element === r && (t.scope === n || "all" === t.scope)) {
      for (var o in ((i = t.mods.length > 0), _mods))
        Object.prototype.hasOwnProperty.call(_mods, o) &&
          ((!_mods[o] && t.mods.indexOf(+o) > -1) || (_mods[o] && -1 === t.mods.indexOf(+o))) &&
          (i = !1)
      ;((0 !== t.mods.length || _mods[16] || _mods[18] || _mods[17] || _mods[91]) && !i && "*" !== t.shortcut) ||
        (!1 === t.method(e, t) &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          e.stopPropagation && e.stopPropagation(),
          e.cancelBubble && (e.cancelBubble = !0)))
    }
  }
  function dispatch(e, t) {
    var n = _handlers["*"],
      r = e.keyCode || e.which || e.charCode
    if (hotkeys.filter.call(this, e)) {
      if (
        ((93 !== r && 224 !== r) || (r = 91),
        -1 === _downKeys.indexOf(r) && 229 !== r && _downKeys.push(r),
        ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function (t) {
          var n = modifierMap[t]
          e[t] && -1 === _downKeys.indexOf(n)
            ? _downKeys.push(n)
            : !e[t] && _downKeys.indexOf(n) > -1
            ? _downKeys.splice(_downKeys.indexOf(n), 1)
            : "metaKey" === t &&
              e[t] &&
              3 === _downKeys.length &&
              (e.ctrlKey || e.shiftKey || e.altKey || (_downKeys = _downKeys.slice(_downKeys.indexOf(n))))
        }),
        r in _mods)
      ) {
        for (var i in ((_mods[r] = !0), _modifier)) _modifier[i] === r && (hotkeys[i] = !0)
        if (!n) return
      }
      for (var o in _mods) Object.prototype.hasOwnProperty.call(_mods, o) && (_mods[o] = e[modifierMap[o]])
      e.getModifierState &&
        (!e.altKey || e.ctrlKey) &&
        e.getModifierState("AltGraph") &&
        (-1 === _downKeys.indexOf(17) && _downKeys.push(17),
        -1 === _downKeys.indexOf(18) && _downKeys.push(18),
        (_mods[17] = !0),
        (_mods[18] = !0))
      var a = getScope()
      if (n)
        for (var s = 0; s < n.length; s++)
          n[s].scope === a &&
            (("keydown" === e.type && n[s].keydown) || ("keyup" === e.type && n[s].keyup)) &&
            eventHandler(e, n[s], a, t)
      if (r in _handlers)
        for (var c = 0; c < _handlers[r].length; c++)
          if (
            (("keydown" === e.type && _handlers[r][c].keydown) || ("keyup" === e.type && _handlers[r][c].keyup)) &&
            _handlers[r][c].key
          ) {
            for (var l = _handlers[r][c], u = l.splitKey, p = l.key.split(u), d = [], h = 0; h < p.length; h++)
              d.push(code(p[h]))
            d.sort().join("") === _downKeys.sort().join("") && eventHandler(e, l, a, t)
          }
    }
  }
  function isElementBind(e) {
    return elementHasBindEvent.indexOf(e) > -1
  }
  function hotkeys(e, t, n) {
    _downKeys = []
    var r = getKeys(e),
      i = [],
      o = "all",
      a = document,
      s = 0,
      c = !1,
      l = !0,
      u = "+",
      p = !1
    for (
      void 0 === n && "function" == typeof t && (n = t),
        "[object Object]" === Object.prototype.toString.call(t) &&
          (t.scope && (o = t.scope),
          t.element && (a = t.element),
          t.keyup && (c = t.keyup),
          void 0 !== t.keydown && (l = t.keydown),
          void 0 !== t.capture && (p = t.capture),
          "string" == typeof t.splitKey && (u = t.splitKey)),
        "string" == typeof t && (o = t);
      s < r.length;
      s++
    )
      (i = []),
        (e = r[s].split(u)).length > 1 && (i = getMods(_modifier, e)),
        (e = "*" === (e = e[e.length - 1]) ? "*" : code(e)) in _handlers || (_handlers[e] = []),
        _handlers[e].push({
          keyup: c,
          keydown: l,
          scope: o,
          mods: i,
          shortcut: r[s],
          method: n,
          key: r[s],
          splitKey: u,
          element: a,
        })
    void 0 !== a &&
      !isElementBind(a) &&
      window &&
      (elementHasBindEvent.push(a),
      addEvent(
        a,
        "keydown",
        function (e) {
          dispatch(e, a)
        },
        p
      ),
      winListendFocus ||
        ((winListendFocus = !0),
        addEvent(
          window,
          "focus",
          function () {
            _downKeys = []
          },
          p
        )),
      addEvent(
        a,
        "keyup",
        function (e) {
          dispatch(e, a), clearModifier(e)
        },
        p
      ))
  }
  function trigger(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all"
    Object.keys(_handlers).forEach(function (n) {
      _handlers[n]
        .filter(function (n) {
          return n.scope === t && n.shortcut === e
        })
        .forEach(function (e) {
          e && e.method && e.method()
        })
    })
  }
  var _api = {
    getPressedKeyString: getPressedKeyString,
    setScope: setScope,
    getScope: getScope,
    deleteScope: deleteScope,
    getPressedKeyCodes: getPressedKeyCodes,
    isPressed: isPressed,
    filter: filter,
    trigger: trigger,
    unbind: unbind,
    keyMap: _keyMap,
    modifier: _modifier,
    modifierMap: modifierMap,
  }
  for (var a in _api) Object.prototype.hasOwnProperty.call(_api, a) && (hotkeys[a] = _api[a])
  if ("undefined" != typeof window) {
    var _hotkeys = window.hotkeys
    ;(hotkeys.noConflict = function (e) {
      return e && window.hotkeys === hotkeys && (window.hotkeys = _hotkeys), hotkeys
    }),
      (window.hotkeys = hotkeys)
  }
  var __defProp = Object.defineProperty,
    __getOwnPropDesc = Object.getOwnPropertyDescriptor,
    __decorateClass = (e, t, n, r) => {
      for (var i, o = r > 1 ? void 0 : r ? __getOwnPropDesc(t, n) : t, a = e.length - 1; a >= 0; a--)
        (i = e[a]) && (o = (r ? i(t, n, o) : i(o)) || o)
      return r && o && __defProp(t, n, o), o
    },
    __decorateParam = (e, t) => (n, r) => t(n, r, e)
  hotkeys.filter = function () {
    return !0
  }
  let Shortcut = class {
    constructor(e) {
      ;(this.option = { capture: !0 }), log("Initialize shortcut subsystem"), (this.eventBus = e)
    }
    registerKeyboardEvent(e, t) {
      hotkeys(e, this.option, t), this.eventBus.on(e.toString(), t)
    }
    unregisterKeyboardEvent(e) {
      hotkeys.unbind(e), this.eventBus.off(e.toString())
    }
    registerKeyboardEventFromPlugin(e) {
      e.shortcut && e.callback && this.registerKeyboardEvent(e.shortcut, e.callback)
    }
    unregisterKeyboardEventFromPlugin(e) {
      e.shortcut && e.callback && this.unregisterKeyboardEvent(e.shortcut)
    }
  }
  Shortcut = __decorateClass([injectable(), __decorateParam(0, inject(TYPES.EventBus))], Shortcut)
  const container = new Container()
  container.bind(TYPES.StorageManager).to(StorageManager).inSingletonScope(),
    container.bind(TYPES.SystemManager).to(SystemManager).inSingletonScope(),
    container.bind(TYPES.PluginSystem).to(PluginSystem).inSingletonScope(),
    container.bind(TYPES.PluginLoader).to(PluginLoader).inSingletonScope(),
    container.bind(TYPES.PluginFileManager).to(PluginFileManager).inSingletonScope(),
    container.bind(TYPES.EventBus).to(EventBus),
    container.bind(TYPES.Shortcut).to(Shortcut).inSingletonScope(),
    container.bind(TYPES.CommandManager).to(CommandManager).inSingletonScope(),
    container.bind(TYPES.Store).to(Store).inSingletonScope(),
    window.pluginSystem ||
      (log("Siyuan Plugin System loading..."),
      (window.pluginSystemVersion = VERSION$1),
      (window.pluginSystem = container.get(TYPES.PluginSystem).init()),
      (window.pluginSystemIocContainer = container))
})()
