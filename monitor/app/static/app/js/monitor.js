/**
     * Created by agustin on 5/2/15.
     *
     *
     * Minified version of the Web Performance script.
     * LACNIC Labs
     * March 2015
     *
     * Scripts contained are
     *  - JQuery 1.11 (http://code.jquery.com/jquery-1.11.2.min.js)
     *  - boomerang.js
     *  - howtos.js (Boomerang POSTing)
     *  - navtiming.js
     *  - rt.js
     *  - bw.js
 *

     [ Closure Compiler Code ](http://closure-compiler.appspot.com/home):

     // ==ClosureCompiler==
     // @compilation_level SIMPLE_OPTIMIZATIONS
     // @output_file_name default.js
     // @code_url http://code.jquery.com/jquery-1.11.2.min.js
     // @code_url http://simon.lacnic.net/static/app/js/boomerang.js
     // @code_url http://simon.lacnic.net/static/app/js/howtos.js
     // @code_url http://simon.lacnic.net/static/app/js/rt.js
     // @code_url http://simon.lacnic.net/static/app/js/bw.js
     // @code_url http://simon.lacnic.net/static/app/js/navtiming.js
     // ==/ClosureCompiler==

     */
!function (h, q) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = h.document ? q(h, !0) : function (d) {
        if (!d.document)throw Error("jQuery requires a window with a document");
        return q(d)
    } : q(h)
}("undefined" != typeof window ? window : this, function (h, q) {
    function d(a) {
        var b = a.length, e = c.type(a);
        return"function" === e || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === e || 0 === b || "number" == typeof b && 0 < b && b - 1 in a
    }

    function l(a, b, e) {
        if (c.isFunction(b))return c.grep(a, function (a, c) {
            return!!b.call(a, c,
                a) !== e
        });
        if (b.nodeType)return c.grep(a, function (a) {
            return a === b !== e
        });
        if ("string" == typeof b) {
            if (Pb.test(b))return c.filter(b, a, e);
            b = c.filter(b, a)
        }
        return c.grep(a, function (a) {
            return 0 <= c.inArray(a, b) !== e
        })
    }

    function p(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function n(a) {
        var b = Va[a] = {};
        return c.each(a.match(S) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function A() {
        w.addEventListener ? (w.removeEventListener("DOMContentLoaded", k, !1), h.removeEventListener("load", k, !1)) : (w.detachEvent("onreadystatechange",
            k), h.detachEvent("onload", k))
    }

    function k() {
        (w.addEventListener || "load" === event.type || "complete" === w.readyState) && (A(), c.ready())
    }

    function u(a, b, e) {
        if (void 0 === e && 1 === a.nodeType) {
            var f = "data-" + b.replace(Qb, "-$1").toLowerCase();
            if (e = a.getAttribute(f), "string" == typeof e) {
                try {
                    e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : +e + "" === e ? +e : Rb.test(e) ? c.parseJSON(e) : e
                } catch (g) {
                }
                c.data(a, b, e)
            } else e = void 0
        }
        return e
    }

    function t(a) {
        for (var b in a)if (("data" !== b || !c.isEmptyObject(a[b])) && "toJSON" !== b)return!1;
        return!0
    }

    function E(a, b, e, f) {
        if (c.acceptData(a)) {
            var g, m, r = c.expando, z = a.nodeType, d = z ? c.cache : a, k = z ? a[r] : a[r] && r;
            if (k && d[k] && (f || d[k].data) || void 0 !== e || "string" != typeof b)return k || (k = z ? a[r] = T.pop() || c.guid++ : r), d[k] || (d[k] = z ? {} : {toJSON: c.noop}), ("object" == typeof b || "function" == typeof b) && (f ? d[k] = c.extend(d[k], b) : d[k].data = c.extend(d[k].data, b)), m = d[k], f || (m.data || (m.data = {}), m = m.data), void 0 !== e && (m[c.camelCase(b)] = e), "string" == typeof b ? (g = m[b], null == g && (g = m[c.camelCase(b)])) : g = m, g
        }
    }

    function y(a, b, e) {
        if (c.acceptData(a)) {
            var f,
                g, m = a.nodeType, r = m ? c.cache : a, z = m ? a[c.expando] : c.expando;
            if (r[z]) {
                if (b && (f = e ? r[z] : r[z].data)) {
                    c.isArray(b) ? b = b.concat(c.map(b, c.camelCase)) : b in f ? b = [b] : (b = c.camelCase(b), b = b in f ? [b] : b.split(" "));
                    for (g = b.length; g--;)delete f[b[g]];
                    if (e ? !t(f) : !c.isEmptyObject(f))return
                }
                (e || (delete r[z].data, t(r[z]))) && (m ? c.cleanData([a], !0) : v.deleteExpando || r != r.window ? delete r[z] : r[z] = null)
            }
        }
    }

    function F() {
        return!0
    }

    function D() {
        return!1
    }

    function ba() {
        try {
            return w.activeElement
        } catch (a) {
        }
    }

    function Wa(a) {
        var b = Xa.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)for (; b.length;)a.createElement(b.pop());
        return a
    }

    function G(a, b) {
        var e, f, g = 0, m = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!m)for (m = [], e = a.childNodes || a; null != (f = e[g]); g++)!b || c.nodeName(f, b) ? m.push(f) : c.merge(m, G(f, b));
        return void 0 === b || b && c.nodeName(a, b) ? c.merge([a], m) : m
    }

    function Sb(a) {
        Ga.test(a.type) && (a.defaultChecked = a.checked)
    }

    function Ya(a, b) {
        return c.nodeName(a, "table") && c.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Za(a) {
        return a.type = (null !== c.find.attr(a, "type")) + "/" + a.type, a
    }

    function $a(a) {
        var b = Tb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ha(a, b) {
        for (var e, f = 0; null != (e = a[f]); f++)c._data(e, "globalEval", !b || c._data(b[f], "globalEval"))
    }

    function ab(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var e, f, g;
            f = c._data(a);
            var m = c._data(b, f), r = f.events;
            if (r)for (e in delete m.handle, m.events = {}, r)for (f = 0, g = r[e].length; g > f; f++)c.event.add(b, e, r[e][f]);
            m.data && (m.data = c.extend({}, m.data))
        }
    }

    function bb(a, b) {
        var e, f = c(b.createElement(a)).appendTo(b.body), g = h.getDefaultComputedStyle && (e = h.getDefaultComputedStyle(f[0])) ? e.display : c.css(f[0], "display");
        return f.detach(), g
    }

    function ca(a) {
        var b = w, e = cb[a];
        return e || (e = bb(a, b), "none" !== e && e || (ma = (ma || c("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = (ma[0].contentWindow || ma[0].contentDocument).document, b.write(), b.close(), e = bb(a, b), ma.detach()), cb[a] = e), e
    }

    function db(a, b) {
        return{get: function () {
            var e = a();
            if (null != e)return e ? void delete this.get : (this.get = b).apply(this, arguments)
        }}
    }

    function eb(a, b) {
        if (b in a)return b;
        for (var e = b.charAt(0).toUpperCase() + b.slice(1), c = b, g = fb.length; g--;)if (b = fb[g] + e, b in a)return b;
        return c
    }

    function gb(a, b) {
        for (var e, f, g, m = [], r = 0, z = a.length; z > r; r++)f = a[r], f.style && (m[r] = c._data(f, "olddisplay"), e = f.style.display,
            b ? (m[r] || "none" !== e || (f.style.display = ""), "" === f.style.display && na(f) && (m[r] = c._data(f, "olddisplay", ca(f.nodeName)))) : (g = na(f), (e && "none" !== e || !g) && c._data(f, "olddisplay", g ? e : c.css(f, "display"))));
        for (r = 0; z > r; r++)f = a[r], f.style && (b && "none" !== f.style.display && "" !== f.style.display || (f.style.display = b ? m[r] || "" : "none"));
        return a
    }

    function hb(a, b, e) {
        return(a = Ub.exec(b)) ? Math.max(0, a[1] - (e || 0)) + (a[2] || "px") : b
    }

    function ib(a, b, e, f, g) {
        b = e === (f ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var m = 0; 4 > b; b += 2)"margin" ===
        e && (m += c.css(a, e + da[b], !0, g)), f ? ("content" === e && (m -= c.css(a, "padding" + da[b], !0, g)), "margin" !== e && (m -= c.css(a, "border" + da[b] + "Width", !0, g))) : (m += c.css(a, "padding" + da[b], !0, g), "padding" !== e && (m += c.css(a, "border" + da[b] + "Width", !0, g)));
        return m
    }

    function jb(a, b, e) {
        var f = !0, g = "width" === b ? a.offsetWidth : a.offsetHeight, m = ea(a), r = v.boxSizing && "border-box" === c.css(a, "boxSizing", !1, m);
        if (0 >= g || null == g) {
            if (g = W(a, b, m), (0 > g || null == g) && (g = a.style[b]), ta.test(g))return g;
            f = r && (v.boxSizingReliable() || g === a.style[b]);
            g = parseFloat(g) || 0
        }
        return g + ib(a, b, e || (r ? "border" : "content"), f, m) + "px"
    }

    function C(a, b, e, c, g) {
        return new C.prototype.init(a, b, e, c, g)
    }

    function kb() {
        return setTimeout(function () {
            X = void 0
        }), X = c.now()
    }

    function ua(a, b) {
        var e, c = {height: a}, g = 0;
        for (b = b ? 1 : 0; 4 > g; g += 2 - b)e = da[g], c["margin" + e] = c["padding" + e] = a;
        return b && (c.opacity = c.width = a), c
    }

    function lb(a, b, e) {
        for (var c, g = (oa[b] || []).concat(oa["*"]), m = 0, r = g.length; r > m; m++)if (c = g[m].call(e, b, a))return c
    }

    function Vb(a, b) {
        var e, f, g, m, r;
        for (e in a)if (f = c.camelCase(e),
            g = b[f], m = a[e], c.isArray(m) && (g = m[1], m = a[e] = m[0]), e !== f && (a[f] = m, delete a[e]), r = c.cssHooks[f], r && "expand"in r)for (e in m = r.expand(m), delete a[f], m)e in a || (a[e] = m[e], b[e] = g); else b[f] = g
    }

    function mb(a, b, e) {
        var f, g = 0, m = va.length, r = c.Deferred().always(function () {
            delete z.elem
        }), z = function () {
            if (f)return!1;
            for (var b = X || kb(), b = Math.max(0, d.startTime + d.duration - b), e = 1 - (b / d.duration || 0), c = 0, g = d.tweens.length; g > c; c++)d.tweens[c].run(e);
            return r.notifyWith(a, [d, e, b]), 1 > e && g ? b : (r.resolveWith(a, [d]), !1)
        }, d = r.promise({elem: a,
            props: c.extend({}, b), opts: c.extend(!0, {specialEasing: {}}, e), originalProperties: b, originalOptions: e, startTime: X || kb(), duration: e.duration, tweens: [], createTween: function (b, e) {
                var f = c.Tween(a, d.opts, b, e, d.opts.specialEasing[b] || d.opts.easing);
                return d.tweens.push(f), f
            }, stop: function (b) {
                var e = 0, c = b ? d.tweens.length : 0;
                if (f)return this;
                for (f = !0; c > e; e++)d.tweens[e].run(1);
                return b ? r.resolveWith(a, [d, b]) : r.rejectWith(a, [d, b]), this
            }});
        e = d.props;
        for (Vb(e, d.opts.specialEasing); m > g; g++)if (b = va[g].call(d, a, e, d.opts))return b;
        return c.map(e, lb, d), c.isFunction(d.opts.start) && d.opts.start.call(a, d), c.fx.timer(c.extend(z, {elem: a, anim: d, queue: d.opts.queue})), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function nb(a) {
        return function (b, e) {
            "string" != typeof b && (e = b, b = "*");
            var f, g = 0, m = b.toLowerCase().match(S) || [];
            if (c.isFunction(e))for (; f = m[g++];)"+" === f.charAt(0) ? (f = f.slice(1) || "*", (a[f] = a[f] || []).unshift(e)) : (a[f] = a[f] || []).push(e)
        }
    }

    function ob(a, b, e, f) {
        function g(d) {
            var k;
            return m[d] = !0, c.each(a[d] || [], function (a, c) {
                var d = c(b, e, f);
                return"string" != typeof d || r || m[d] ? r ? !(k = d) : void 0 : (b.dataTypes.unshift(d), g(d), !1)
            }), k
        }

        var m = {}, r = a === Ia;
        return g(b.dataTypes[0]) || !m["*"] && g("*")
    }

    function Ja(a, b) {
        var e, f, g = c.ajaxSettings.flatOptions || {};
        for (f in b)void 0 !== b[f] && ((g[f] ? a : e || (e = {}))[f] = b[f]);
        return e && c.extend(!0, a, e), a
    }

    function Ka(a, b, e, f) {
        var g;
        if (c.isArray(b))c.each(b, function (b, c) {
            e || Wb.test(a) ? f(a, c) : Ka(a + "[" + ("object" == typeof c ? b : "") + "]", c, e, f)
        }); else if (e || "object" !==
            c.type(b))f(a, b); else for (g in b)Ka(a + "[" + g + "]", b[g], e, f)
    }

    function pb() {
        try {
            return new h.XMLHttpRequest
        } catch (a) {
        }
    }

    function qb(a) {
        return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var T = [], R = T.slice, rb = T.concat, La = T.push, sb = T.indexOf, ha = {}, Xb = ha.toString, ia = ha.hasOwnProperty, v = {}, c = function (a, b) {
        return new c.fn.init(a, b)
    }, Yb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Zb = /^-ms-/, $b = /-([\da-z])/gi, ac = function (a, b) {
        return b.toUpperCase()
    };
    c.fn = c.prototype = {jquery: "1.11.2", constructor: c,
        selector: "", length: 0, toArray: function () {
            return R.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        }, pushStack: function (a) {
            a = c.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        }, each: function (a, b) {
            return c.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(c.map(this, function (b, e) {
                return a.call(b, e, b)
            }))
        }, slice: function () {
            return this.pushStack(R.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: La, sort: T.sort, splice: T.splice};
    c.extend = c.fn.extend = function () {
        var a, b, e, f, g, m, r = arguments[0] || {}, d = 1, k = arguments.length, l = !1;
        "boolean" == typeof r && (l = r, r = arguments[d] || {}, d++);
        "object" == typeof r || c.isFunction(r) || (r = {});
        for (d === k && (r = this, d--); k > d; d++)if (null != (g = arguments[d]))for (f in g)a = r[f], e = g[f], r !== e && (l && e && (c.isPlainObject(e) ||
            (b = c.isArray(e))) ? (b ? (b = !1, m = a && c.isArray(a) ? a : []) : m = a && c.isPlainObject(a) ? a : {}, r[f] = c.extend(l, m, e)) : void 0 !== e && (r[f] = e));
        return r
    };
    c.extend({expando: "jQuery" + ("1.11.2" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
        throw Error(a);
    }, noop: function () {
    }, isFunction: function (a) {
        return"function" === c.type(a)
    }, isArray: Array.isArray || function (a) {
        return"array" === c.type(a)
    }, isWindow: function (a) {
        return null != a && a == a.window
    }, isNumeric: function (a) {
        return!c.isArray(a) && 0 <= a - parseFloat(a) + 1
    }, isEmptyObject: function (a) {
        for (var b in a)return!1;
        return!0
    }, isPlainObject: function (a) {
        var b;
        if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a))return!1;
        try {
            if (a.constructor && !ia.call(a, "constructor") && !ia.call(a.constructor.prototype, "isPrototypeOf"))return!1
        } catch (e) {
            return!1
        }
        if (v.ownLast)for (b in a)return ia.call(a, b);
        for (b in a);
        return void 0 === b || ia.call(a, b)
    }, type: function (a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ha[Xb.call(a)] || "object" : typeof a
    }, globalEval: function (a) {
        a && c.trim(a) && (h.execScript || function (a) {
            h.eval.call(h,
                a)
        })(a)
    }, camelCase: function (a) {
        return a.replace(Zb, "ms-").replace($b, ac)
    }, nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (a, b, e) {
        var c, g = 0, m = a.length, r = d(a);
        if (e)if (r)for (; m > g && (c = b.apply(a[g], e), !1 !== c); g++); else for (g in a) {
            if (c = b.apply(a[g], e), !1 === c)break
        } else if (r)for (; m > g && (c = b.call(a[g], g, a[g]), !1 !== c); g++); else for (g in a)if (c = b.call(a[g], g, a[g]), !1 === c)break;
        return a
    }, trim: function (a) {
        return null == a ? "" : (a + "").replace(Yb, "")
    }, makeArray: function (a, b) {
        var e = b || [];
        return null != a && (d(Object(a)) ? c.merge(e, "string" == typeof a ? [a] : a) : La.call(e, a)), e
    }, inArray: function (a, b, e) {
        var c;
        if (b) {
            if (sb)return sb.call(b, a, e);
            c = b.length;
            for (e = e ? 0 > e ? Math.max(0, c + e) : e : 0; c > e; e++)if (e in b && b[e] === a)return e
        }
        return-1
    }, merge: function (a, b) {
        for (var e = +b.length, c = 0, g = a.length; e > c;)a[g++] = b[c++];
        if (e !== e)for (; void 0 !== b[c];)a[g++] = b[c++];
        return a.length = g, a
    }, grep: function (a, b, e) {
        for (var c = [], g = 0, m = a.length, r = !e; m > g; g++)e = !b(a[g], g), e !== r && c.push(a[g]);
        return c
    }, map: function (a, b, e) {
        var c, g = 0, m = a.length, r = [];
        if (d(a))for (; m > g; g++)c = b(a[g], g, e), null != c && r.push(c); else for (g in a)c = b(a[g], g, e), null != c && r.push(c);
        return rb.apply([], r)
    }, guid: 1, proxy: function (a, b) {
        var e, f, g;
        return"string" == typeof b && (g = a[b], b = a, a = g), c.isFunction(a) ? (e = R.call(arguments, 2), f = function () {
            return a.apply(b || this, e.concat(R.call(arguments)))
        }, f.guid = a.guid = a.guid || c.guid++, f) : void 0
    }, now: function () {
        return+new Date
    }, support: v});
    c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function (a, b) {
            ha["[object " + b + "]"] = b.toLowerCase()
        });
    var V = function (a) {
        function b(a, b, c, e) {
            var f, g, m, r, d;
            if ((b ? b.ownerDocument || b : P) !== Q && pa(b), b = b || Q, c = c || [], r = b.nodeType, "string" != typeof a || !a || 1 !== r && 9 !== r && 11 !== r)return c;
            if (!e && K) {
                if (11 !== r && (f = va.exec(a)))if (m = f[1])if (9 === r) {
                    if (g = b.getElementById(m), !g || !g.parentNode)return c;
                    if (g.id === m)return c.push(g), c
                } else {
                    if (b.ownerDocument && (g = b.ownerDocument.getElementById(m)) && N(b, g) && g.id === m)return c.push(g), c
                } else {
                    if (f[2])return ja.apply(c, b.getElementsByTagName(a)),
                        c;
                    if ((m = f[3]) && y.getElementsByClassName)return ja.apply(c, b.getElementsByClassName(m)), c
                }
                if (y.qsa && (!L || !L.test(a))) {
                    if (g = f = B, m = b, d = 1 !== r && a, 1 === r && "object" !== b.nodeName.toLowerCase()) {
                        r = za(a);
                        (f = b.getAttribute("id")) ? g = f.replace(xa, "\\$&") : b.setAttribute("id", g);
                        g = "[id='" + g + "'] ";
                        for (m = r.length; m--;)r[m] = g + p(r[m]);
                        m = ha.test(a) && h(b.parentNode) || b;
                        d = r.join(",")
                    }
                    if (d)try {
                        return ja.apply(c, m.querySelectorAll(d)), c
                    } catch (k) {
                    } finally {
                        f || b.removeAttribute("id")
                    }
                }
            }
            return G(a.replace(V, "$1"), b, c, e)
        }

        function c() {
            function a(c, e) {
                return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = e
            }

            var b = [];
            return a
        }

        function f(a) {
            return a[B] = !0, a
        }

        function g(a) {
            var b = Q.createElement("div");
            try {
                return!!a(b)
            } catch (c) {
                return!1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function m(a, b) {
            for (var c = a.split("|"), e = a.length; e--;)x.attrHandle[c[e]] = b
        }

        function r(a, b) {
            var c = b && a, e = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (e)return e;
            if (c)for (; c = c.nextSibling;)if (c === b)return-1;
            return a ? 1 : -1
        }

        function d(a) {
            return function (b) {
                return"input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function k(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return("input" === c || "button" === c) && b.type === a
            }
        }

        function l(a) {
            return f(function (b) {
                return b = +b, f(function (c, e) {
                    for (var f, g = a([], c.length, b), m = g.length; m--;)c[f = g[m]] && (c[f] = !(e[f] = c[f]))
                })
            })
        }

        function h(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function O() {
        }

        function p(a) {
            for (var b = 0, c = a.length, e = ""; c > b; b++)e += a[b].value;
            return e
        }

        function u(a, b, c) {
            var e = b.dir, f = c && "parentNode" === e, g = S++;
            return b.first ? function (b, c, g) {
                for (; b = b[e];)if (1 === b.nodeType || f)return a(b, c, g)
            } : function (b, c, m) {
                var r, d, k = [I, g];
                if (m)for (; b = b[e];) {
                    if ((1 === b.nodeType || f) && a(b, c, m))return!0
                } else for (; b = b[e];)if (1 === b.nodeType || f) {
                    if (d = b[B] || (b[B] = {}), (r = d[e]) && r[0] === I && r[1] === g)return k[2] = r[2];
                    if (d[e] = k, k[2] = a(b, c, m))return!0
                }
            }
        }

        function t(a) {
            return 1 < a.length ? function (b, c, e) {
                for (var f = a.length; f--;)if (!a[f](b, c, e))return!1;
                return!0
            } : a[0]
        }

        function q(a, b, c, e, f) {
            for (var g, m = [], r = 0, d = a.length, k = null != b; d > r; r++)(g = a[r]) && (!c || c(g, e, f)) && (m.push(g), k && b.push(r));
            return m
        }

        function n(a, c, e, g, m, r) {
            return g && !g[B] && (g = n(g)), m && !m[B] && (m = n(m, r)), f(function (f, r, d, k) {
                var z, l, h = [], O = [], p = r.length, u;
                if (!(u = f)) {
                    u = c || "*";
                    for (var t = d.nodeType ? [d] : d, ya = [], n = 0, Ca = t.length; Ca > n; n++)b(u, t[n], ya);
                    u = ya
                }
                u = !a || !f && c ? u : q(u, h, a, d, k);
                t = e ? m || (f ? a : p || g) ? [] : r : u;
                if (e && e(u, t, d, k), g)for (z = q(t, O), g(z, [], d, k), d = z.length; d--;)(l = z[d]) && (t[O[d]] = !(u[O[d]] = l));
                if (f) {
                    if (m || a) {
                        if (m) {
                            z =
                                [];
                            for (d = t.length; d--;)(l = t[d]) && z.push(u[d] = l);
                            m(null, t = [], z, k)
                        }
                        for (d = t.length; d--;)(l = t[d]) && -1 < (z = m ? J(f, l) : h[d]) && (f[z] = !(r[z] = l))
                    }
                } else t = q(t === r ? t.splice(p, t.length) : t), m ? m(null, r, t, k) : ja.apply(r, t)
            })
        }

        function E(a) {
            var b, c, e, f = a.length, g = x.relative[a[0].type];
            c = g || x.relative[" "];
            for (var m = g ? 1 : 0, r = u(function (a) {
                return a === b
            }, c, !0), d = u(function (a) {
                return-1 < J(b, a)
            }, c, !0), k = [function (a, c, e) {
                a = !g && (e || c !== C) || ((b = c).nodeType ? r(a, c, e) : d(a, c, e));
                return b = null, a
            }]; f > m; m++)if (c = x.relative[a[m].type])k =
                [u(t(k), c)]; else {
                if (c = x.filter[a[m].type].apply(null, a[m].matches), c[B]) {
                    for (e = ++m; f > e && !x.relative[a[e].type]; e++);
                    return n(1 < m && t(k), 1 < m && p(a.slice(0, m - 1).concat({value: " " === a[m - 2].type ? "*" : ""})).replace(V, "$1"), c, e > m && E(a.slice(m, e)), f > e && E(a = a.slice(e)), f > e && p(a))
                }
                k.push(c)
            }
            return t(k)
        }

        function A(a, c) {
            var e = 0 < c.length, g = 0 < a.length, m = function (f, m, r, d, k) {
                var z, l, h, O = 0, p = "0", u = f && [], t = [], ya = C, n = f || g && x.find.TAG("*", k), Ca = I += null == ya ? 1 : Math.random() || .1, y = n.length;
                for (k && (C = m !== Q && m); p !== y && null !=
                    (z = n[p]); p++) {
                    if (g && z) {
                        for (l = 0; h = a[l++];)if (h(z, m, r)) {
                            d.push(z);
                            break
                        }
                        k && (I = Ca)
                    }
                    e && ((z = !h && z) && O--, f && u.push(z))
                }
                if (O += p, e && p !== O) {
                    for (l = 0; h = c[l++];)h(u, t, m, r);
                    if (f) {
                        if (0 < O)for (; p--;)u[p] || t[p] || (t[p] = da.call(d));
                        t = q(t)
                    }
                    ja.apply(d, t);
                    k && !f && 0 < t.length && 1 < O + c.length && b.uniqueSort(d)
                }
                return k && (I = Ca, C = ya), u
            };
            return e ? f(m) : m
        }

        var v, y, x, w, F, za, D, G, C, ka, wa, pa, Q, U, K, L, qa, H, N, B = "sizzle" + 1 * new Date, P = a.document, I = 0, S = 0, tb = c(), T = c(), ba = c(), R = function (a, b) {
                return a === b && (wa = !0), 0
            }, Y = {}.hasOwnProperty, M = [], da =
                M.pop, ea = M.push, ja = M.push, W = M.slice, J = function (a, b) {
                for (var c = 0, e = a.length; e > c; c++)if (a[c] === b)return c;
                return-1
            }, Z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), aa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Z + "))|)[\\x20\\t\\r\\n\\f]*\\]", X = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + aa +
                ")*)|.*)\\)|)", ia = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), V = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), la = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ma = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, na = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), oa = new RegExp(X), ra = new RegExp("^" + Z + "$"), ca = {ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w",
                "w*") + ")"), ATTR: new RegExp("^" + aa), PSEUDO: new RegExp("^" + X), CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},
            ta = /^(?:input|select|textarea|button)$/i, ua = /^h\d$/i, Aa = /^[^{]+\{\s*\[native \w/, va = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ha = /[+~]/, xa = /'|\\/g, fa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), ga = function (a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            }, sa = function () {
                pa()
            };
        try {
            ja.apply(M = W.call(P.childNodes), P.childNodes), M[P.childNodes.length].nodeType
        } catch (Ba) {
            ja = {apply: M.length ? function (a, b) {
                ea.apply(a,
                    W.call(b))
            } : function (a, b) {
                for (var c = a.length, e = 0; a[c++] = b[e++];);
                a.length = c - 1
            }}
        }
        y = b.support = {};
        F = b.isXML = function (a) {
            return(a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        pa = b.setDocument = function (a) {
            var b, c, e = a ? a.ownerDocument || a : P;
            return e !== Q && 9 === e.nodeType && e.documentElement ? (Q = e, U = e.documentElement, c = e.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", sa, !1) : c.attachEvent && c.attachEvent("onunload", sa)), K = !F(e), y.attributes = g(function (a) {
                return a.className =
                    "i", !a.getAttribute("className")
            }), y.getElementsByTagName = g(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), y.getElementsByClassName = Aa.test(e.getElementsByClassName), y.getById = g(function (a) {
                return U.appendChild(a).id = B, !e.getElementsByName || !e.getElementsByName(B).length
            }), y.getById ? (x.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && K) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, x.filter.ID = function (a) {
                var b = a.replace(fa, ga);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete x.find.ID, x.filter.ID = function (a) {
                var b = a.replace(fa, ga);
                return function (a) {
                    return(a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            }), x.find.TAG = y.getElementsByTagName ? function (a, b) {
                return"undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : y.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, e = [], f = 0, g = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = g[f++];)1 === c.nodeType && e.push(c);
                    return e
                }
                return g
            },
                x.find.CLASS = y.getElementsByClassName && function (a, b) {
                    return K ? b.getElementsByClassName(a) : void 0
                }, qa = [], L = [], (y.qsa = Aa.test(e.querySelectorAll)) && (g(function (a) {
                U.appendChild(a).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || L.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" + B + "-]").length || L.push("~=");
                a.querySelectorAll(":checked").length || L.push(":checked");
                a.querySelectorAll("a#" + B + "+*").length || L.push(".#.+[+~]")
            }), g(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && L.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                L.push(",.*:")
            })), (y.matchesSelector =
                Aa.test(H = U.matches || U.webkitMatchesSelector || U.mozMatchesSelector || U.oMatchesSelector || U.msMatchesSelector)) && g(function (a) {
                y.disconnectedMatch = H.call(a, "div");
                H.call(a, "[s!='']:x");
                qa.push("!=", X)
            }), L = L.length && new RegExp(L.join("|")), qa = qa.length && new RegExp(qa.join("|")), b = Aa.test(U.compareDocumentPosition), N = b || Aa.test(U.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, e = b && b.parentNode;
                return a === e || !(!e || 1 !== e.nodeType || !(c.contains ? c.contains(e) : a.compareDocumentPosition &&
                    16 & a.compareDocumentPosition(e)))
            } : function (a, b) {
                if (b)for (; b = b.parentNode;)if (b === a)return!0;
                return!1
            }, R = b ? function (a, b) {
                if (a === b)return wa = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !y.sortDetached && b.compareDocumentPosition(a) === c ? a === e || a.ownerDocument === P && N(P, a) ? -1 : b === e || b.ownerDocument === P && N(P, b) ? 1 : ka ? J(ka, a) - J(ka, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b)return wa = !0, 0;
                var c, f =
                    0;
                c = a.parentNode;
                var g = b.parentNode, m = [a], d = [b];
                if (!c || !g)return a === e ? -1 : b === e ? 1 : c ? -1 : g ? 1 : ka ? J(ka, a) - J(ka, b) : 0;
                if (c === g)return r(a, b);
                for (c = a; c = c.parentNode;)m.unshift(c);
                for (c = b; c = c.parentNode;)d.unshift(c);
                for (; m[f] === d[f];)f++;
                return f ? r(m[f], d[f]) : m[f] === P ? -1 : d[f] === P ? 1 : 0
            }, e) : Q
        };
        b.matches = function (a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== Q && pa(a), c = c.replace(na, "='$1']"), !(!y.matchesSelector || !K || qa && qa.test(c) || L && L.test(c)))try {
                var e = H.call(a,
                    c);
                if (e || y.disconnectedMatch || a.document && 11 !== a.document.nodeType)return e
            } catch (f) {
            }
            return 0 < b(c, Q, null, [a]).length
        };
        b.contains = function (a, b) {
            return(a.ownerDocument || a) !== Q && pa(a), N(a, b)
        };
        b.attr = function (a, b) {
            (a.ownerDocument || a) !== Q && pa(a);
            var c = x.attrHandle[b.toLowerCase()], c = c && Y.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !K) : void 0;
            return void 0 !== c ? c : y.attributes || !K ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " +
                a);
        };
        b.uniqueSort = function (a) {
            var b, c = [], e = 0, f = 0;
            if (wa = !y.detectDuplicates, ka = !y.sortStable && a.slice(0), a.sort(R), wa) {
                for (; b = a[f++];)b === a[f] && (e = c.push(f));
                for (; e--;)a.splice(c[e], 1)
            }
            return ka = null, a
        };
        w = b.getText = function (a) {
            var b, c = "", e = 0;
            if (b = a.nodeType)if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent)return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)c += w(a)
            } else {
                if (3 === b || 4 === b)return a.nodeValue
            } else for (; b = a[e++];)c += w(b);
            return c
        };
        x = b.selectors = {cacheLength: 50, createPseudo: f,
            match: ca, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) {
                return a[1] = a[1].replace(fa, ga), a[3] = (a[3] || a[4] || a[5] || "").replace(fa, ga), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
            }, CHILD: function (a) {
                return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] &&
                    b.error(a[0]), a
            }, PSEUDO: function (a) {
                var b, c = !a[6] && a[2];
                return ca.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && oa.test(c) && (b = za(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
            }}, filter: {TAG: function (a) {
                var b = a.replace(fa, ga).toLowerCase();
                return"*" === a ? function () {
                    return!0
                } : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b
                }
            }, CLASS: function (a) {
                var b = tb[a + " "];
                return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) &&
                    tb(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
            }, ATTR: function (a, c, e) {
                return function (f) {
                    f = b.attr(f, a);
                    return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === e : "!=" === c ? f !== e : "^=" === c ? e && 0 === f.indexOf(e) : "*=" === c ? e && -1 < f.indexOf(e) : "$=" === c ? e && f.slice(-e.length) === e : "~=" === c ? -1 < (" " + f.replace(ia, " ") + " ").indexOf(e) : "|=" === c ? f === e || f.slice(0, e.length + 1) === e + "-" : !1) : !0
                }
            }, CHILD: function (a, b, c, e, f) {
                var g = "nth" !== a.slice(0,
                    3), m = "last" !== a.slice(-4), r = "of-type" === b;
                return 1 === e && 0 === f ? function (a) {
                    return!!a.parentNode
                } : function (b, c, d) {
                    var k, z, l, h, O;
                    c = g !== m ? "nextSibling" : "previousSibling";
                    var p = b.parentNode, u = r && b.nodeName.toLowerCase();
                    d = !d && !r;
                    if (p) {
                        if (g) {
                            for (; c;) {
                                for (z = b; z = z[c];)if (r ? z.nodeName.toLowerCase() === u : 1 === z.nodeType)return!1;
                                O = c = "only" === a && !O && "nextSibling"
                            }
                            return!0
                        }
                        if (O = [m ? p.firstChild : p.lastChild], m && d)for (d = p[B] || (p[B] = {}), k = d[a] || [], h = k[0] === I && k[1], l = k[0] === I && k[2], z = h && p.childNodes[h]; z = ++h && z && z[c] ||
                            (l = h = 0) || O.pop();) {
                            if (1 === z.nodeType && ++l && z === b) {
                                d[a] = [I, h, l];
                                break
                            }
                        } else if (d && (k = (b[B] || (b[B] = {}))[a]) && k[0] === I)l = k[1]; else for (; (z = ++h && z && z[c] || (l = h = 0) || O.pop()) && ((r ? z.nodeName.toLowerCase() !== u : 1 !== z.nodeType) || !++l || (d && ((z[B] || (z[B] = {}))[a] = [I, l]), z !== b)););
                        return l -= f, l === e || 0 === l % e && 0 <= l / e
                    }
                }
            }, PSEUDO: function (a, c) {
                var e, g = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                return g[B] ? g(c) : 1 < g.length ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ?
                    f(function (a, b) {
                        for (var e, f = g(a, c), m = f.length; m--;)e = J(a, f[m]), a[e] = !(b[e] = f[m])
                    }) : function (a) {
                    return g(a, 0, e)
                }) : g
            }}, pseudos: {not: f(function (a) {
                var b = [], c = [], e = D(a.replace(V, "$1"));
                return e[B] ? f(function (a, b, c, f) {
                    var g;
                    c = e(a, null, f, []);
                    for (f = a.length; f--;)(g = c[f]) && (a[f] = !(b[f] = g))
                }) : function (a, f, g) {
                    return b[0] = a, e(b, null, g, c), b[0] = null, !c.pop()
                }
            }), has: f(function (a) {
                return function (c) {
                    return 0 < b(a, c).length
                }
            }), contains: f(function (a) {
                return a = a.replace(fa, ga), function (b) {
                    return-1 < (b.textContent || b.innerText ||
                        w(b)).indexOf(a)
                }
            }), lang: f(function (a) {
                return ra.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(fa, ga).toLowerCase(), function (b) {
                    var c;
                    do if (c = K ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                    return!1
                }
            }), target: function (b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id
            }, root: function (a) {
                return a === U
            }, focus: function (a) {
                return a === Q.activeElement && (!Q.hasFocus || Q.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
            }, enabled: function (a) {
                return!1 === a.disabled
            }, disabled: function (a) {
                return!0 === a.disabled
            }, checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return"input" === b && !!a.checked || "option" === b && !!a.selected
            }, selected: function (a) {
                return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
            }, empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType)return!1;
                return!0
            }, parent: function (a) {
                return!x.pseudos.empty(a)
            }, header: function (a) {
                return ua.test(a.nodeName)
            }, input: function (a) {
                return ta.test(a.nodeName)
            },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return"input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: l(function () {
                    return[0]
                }), last: l(function (a, b) {
                    return[b - 1]
                }), eq: l(function (a, b, c) {
                    return[0 > c ? c + b : c]
                }), even: l(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: l(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: l(function (a, b, c) {
                    for (b =
                                 0 > c ? c + b : c; 0 <= --b;)a.push(b);
                    return a
                }), gt: l(function (a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;)a.push(c);
                    return a
                })}};
        x.pseudos.nth = x.pseudos.eq;
        for (v in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[v] = d(v);
        for (v in{submit: !0, reset: !0})x.pseudos[v] = k(v);
        O.prototype = x.filters = x.pseudos;
        x.setFilters = new O;
        za = b.tokenize = function (a, c) {
            var e, f, g, m, r, d, k;
            if (r = T[a + " "])return c ? 0 : r.slice(0);
            r = a;
            d = [];
            for (k = x.preFilter; r;) {
                e && !(f = la.exec(r)) || (f && (r = r.slice(f[0].length) || r), d.push(g = []));
                e = !1;
                (f = ma.exec(r)) &&
                (e = f.shift(), g.push({value: e, type: f[0].replace(V, " ")}), r = r.slice(e.length));
                for (m in x.filter)!(f = ca[m].exec(r)) || k[m] && !(f = k[m](f)) || (e = f.shift(), g.push({value: e, type: m, matches: f}), r = r.slice(e.length));
                if (!e)break
            }
            return c ? r.length : r ? b.error(a) : T(a, d).slice(0)
        };
        return D = b.compile = function (a, b) {
            var c, e = [], f = [], g = ba[a + " "];
            if (!g) {
                b || (b = za(a));
                for (c = b.length; c--;)g = E(b[c]), g[B] ? e.push(g) : f.push(g);
                g = ba(a, A(f, e));
                g.selector = a
            }
            return g
        }, G = b.select = function (a, b, c, e) {
            var f, g, m, r, d, k = "function" == typeof a &&
                a, z = !e && za(a = k.selector || a);
            if (c = c || [], 1 === z.length) {
                if (g = z[0] = z[0].slice(0), 2 < g.length && "ID" === (m = g[0]).type && y.getById && 9 === b.nodeType && K && x.relative[g[1].type]) {
                    if (b = (x.find.ID(m.matches[0].replace(fa, ga), b) || [])[0], !b)return c;
                    k && (b = b.parentNode);
                    a = a.slice(g.shift().value.length)
                }
                for (f = ca.needsContext.test(a) ? 0 : g.length; f-- && (m = g[f], !x.relative[r = m.type]);)if ((d = x.find[r]) && (e = d(m.matches[0].replace(fa, ga), ha.test(g[0].type) && h(b.parentNode) || b))) {
                    if (g.splice(f, 1), a = e.length && p(g), !a)return ja.apply(c,
                        e), c;
                    break
                }
            }
            return(k || D(a, z))(e, b, !K, c, ha.test(a) && h(b.parentNode) || b), c
        }, y.sortStable = B.split("").sort(R).join("") === B, y.detectDuplicates = !!wa, pa(), y.sortDetached = g(function (a) {
            return 1 & a.compareDocumentPosition(Q.createElement("div"))
        }), g(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || m("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), y.attributes && g(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value",
                ""), "" === a.firstChild.getAttribute("value")
        }) || m("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), g(function (a) {
            return null == a.getAttribute("disabled")
        }) || m("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, c) {
            var e;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (e = a.getAttributeNode(b)) && e.specified ? e.value : null
        }), b
    }(h);
    c.find = V;
    c.expr = V.selectors;
    c.expr[":"] = c.expr.pseudos;
    c.unique = V.uniqueSort;
    c.text = V.getText;
    c.isXMLDoc = V.isXML;
    c.contains = V.contains;
    var ub = c.expr.match.needsContext, vb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Pb = /^.[^:#\[\.,]*$/;
    c.filter = function (a, b, e) {
        var f = b[0];
        return e && (a = ":not(" + a + ")"), 1 === b.length && 1 === f.nodeType ? c.find.matchesSelector(f, a) ? [f] : [] : c.find.matches(a, c.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    };
    c.fn.extend({find: function (a) {
        var b, e = [], f = this, g = f.length;
        if ("string" != typeof a)return this.pushStack(c(a).filter(function () {
            for (b = 0; g > b; b++)if (c.contains(f[b],
                this))return!0
        }));
        for (b = 0; g > b; b++)c.find(a, f[b], e);
        return e = this.pushStack(1 < g ? c.unique(e) : e), e.selector = this.selector ? this.selector + " " + a : a, e
    }, filter: function (a) {
        return this.pushStack(l(this, a || [], !1))
    }, not: function (a) {
        return this.pushStack(l(this, a || [], !0))
    }, is: function (a) {
        return!!l(this, "string" == typeof a && ub.test(a) ? c(a) : a || [], !1).length
    }});
    var ra, w = h.document, cc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (c.fn.init = function (a, b) {
        var e, f;
        if (!a)return this;
        if ("string" == typeof a) {
            if (e = "<" === a.charAt(0) &&
                ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : cc.exec(a), !e || !e[1] && b)return!b || b.jquery ? (b || ra).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof c ? b[0] : b, c.merge(this, c.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : w, !0)), vb.test(e[1]) && c.isPlainObject(b))for (e in b)c.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = w.getElementById(e[2]), f && f.parentNode) {
                if (f.id !== e[2])return ra.find(a);
                this.length = 1;
                this[0] = f
            }
            return this.context = w, this.selector = a, this
        }
        return a.nodeType ?
            (this.context = this[0] = a, this.length = 1, this) : c.isFunction(a) ? "undefined" != typeof ra.ready ? ra.ready(a) : a(c) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), c.makeArray(a, this))
    }).prototype = c.fn;
    ra = c(w);
    var dc = /^(?:parents|prev(?:Until|All))/, ec = {children: !0, contents: !0, next: !0, prev: !0};
    c.extend({dir: function (a, b, e) {
        var f = [];
        for (a = a[b]; a && 9 !== a.nodeType && (void 0 === e || 1 !== a.nodeType || !c(a).is(e));)1 === a.nodeType && f.push(a), a = a[b];
        return f
    }, sibling: function (a, b) {
        for (var c = []; a; a =
            a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
        return c
    }});
    c.fn.extend({has: function (a) {
        var b, e = c(a, this), f = e.length;
        return this.filter(function () {
            for (b = 0; f > b; b++)if (c.contains(this, e[b]))return!0
        })
    }, closest: function (a, b) {
        for (var e, f = 0, g = this.length, m = [], r = ub.test(a) || "string" != typeof a ? c(a, b || this.context) : 0; g > f; f++)for (e = this[f]; e && e !== b; e = e.parentNode)if (11 > e.nodeType && (r ? -1 < r.index(e) : 1 === e.nodeType && c.find.matchesSelector(e, a))) {
            m.push(e);
            break
        }
        return this.pushStack(1 < m.length ? c.unique(m) : m)
    },
        index: function (a) {
            return a ? "string" == typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(c.unique(c.merge(this.get(), c(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }});
    c.each({parent: function (a) {
        return(a = a.parentNode) && 11 !== a.nodeType ? a : null
    }, parents: function (a) {
        return c.dir(a, "parentNode")
    }, parentsUntil: function (a, b, e) {
        return c.dir(a,
            "parentNode", e)
    }, next: function (a) {
        return p(a, "nextSibling")
    }, prev: function (a) {
        return p(a, "previousSibling")
    }, nextAll: function (a) {
        return c.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return c.dir(a, "previousSibling")
    }, nextUntil: function (a, b, e) {
        return c.dir(a, "nextSibling", e)
    }, prevUntil: function (a, b, e) {
        return c.dir(a, "previousSibling", e)
    }, siblings: function (a) {
        return c.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
        return c.sibling(a.firstChild)
    }, contents: function (a) {
        return c.nodeName(a,
            "iframe") ? a.contentDocument || a.contentWindow.document : c.merge([], a.childNodes)
    }}, function (a, b) {
        c.fn[a] = function (e, f) {
            var g = c.map(this, b, e);
            return"Until" !== a.slice(-5) && (f = e), f && "string" == typeof f && (g = c.filter(f, g)), 1 < this.length && (ec[a] || (g = c.unique(g)), dc.test(a) && (g = g.reverse())), this.pushStack(g)
        }
    });
    var S = /\S+/g, Va = {};
    c.Callbacks = function (a) {
        a = "string" == typeof a ? Va[a] || n(a) : c.extend({}, a);
        var b, e, f, g, m, r, d = [], k = !a.once && [], l = function (c) {
            e = a.memory && c;
            f = !0;
            m = r || 0;
            r = 0;
            g = d.length;
            for (b = !0; d && g > m; m++)if (!1 ===
                d[m].apply(c[0], c[1]) && a.stopOnFalse) {
                e = !1;
                break
            }
            b = !1;
            d && (k ? k.length && l(k.shift()) : e ? d = [] : h.disable())
        }, h = {add: function () {
            if (d) {
                var f = d.length;
                !function bc(b) {
                    c.each(b, function (b, e) {
                        var f = c.type(e);
                        "function" === f ? a.unique && h.has(e) || d.push(e) : e && e.length && "string" !== f && bc(e)
                    })
                }(arguments);
                b ? g = d.length : e && (r = f, l(e))
            }
            return this
        }, remove: function () {
            return d && c.each(arguments, function (a, e) {
                for (var f; -1 < (f = c.inArray(e, d, f));)d.splice(f, 1), b && (g >= f && g--, m >= f && m--)
            }), this
        }, has: function (a) {
            return a ? -1 < c.inArray(a,
                d) : !(!d || !d.length)
        }, empty: function () {
            return d = [], g = 0, this
        }, disable: function () {
            return d = k = e = void 0, this
        }, disabled: function () {
            return!d
        }, lock: function () {
            return k = void 0, e || h.disable(), this
        }, locked: function () {
            return!k
        }, fireWith: function (a, c) {
            return!d || f && !k || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? k.push(c) : l(c)), this
        }, fire: function () {
            return h.fireWith(this, arguments), this
        }, fired: function () {
            return!!f
        }};
        return h
    };
    c.extend({Deferred: function (a) {
        var b = [
            ["resolve", "done", c.Callbacks("once memory"), "resolved"],
            ["reject", "fail", c.Callbacks("once memory"), "rejected"],
            ["notify", "progress", c.Callbacks("memory")]
        ], e = "pending", f = {state: function () {
            return e
        }, always: function () {
            return g.done(arguments).fail(arguments), this
        }, then: function () {
            var a = arguments;
            return c.Deferred(function (e) {
                c.each(b, function (b, d) {
                    var k = c.isFunction(a[b]) && a[b];
                    g[d[1]](function () {
                        var a = k && k.apply(this, arguments);
                        a && c.isFunction(a.promise) ? a.promise().done(e.resolve).fail(e.reject).progress(e.notify) : e[d[0] + "With"](this === f ? e.promise() :
                            this, k ? [a] : arguments)
                    })
                });
                a = null
            }).promise()
        }, promise: function (a) {
            return null != a ? c.extend(a, f) : f
        }}, g = {};
        return f.pipe = f.then, c.each(b, function (a, c) {
            var d = c[2], k = c[3];
            f[c[1]] = d.add;
            k && d.add(function () {
                e = k
            }, b[1 ^ a][2].disable, b[2][2].lock);
            g[c[0]] = function () {
                return g[c[0] + "With"](this === g ? f : this, arguments), this
            };
            g[c[0] + "With"] = d.fireWith
        }), f.promise(g), a && a.call(g, g), g
    }, when: function (a) {
        var b = 0, e = R.call(arguments), f = e.length, g = 1 !== f || a && c.isFunction(a.promise) ? f : 0, m = 1 === g ? a : c.Deferred(), r = function (a, b, c) {
            return function (e) {
                b[a] = this;
                c[a] = 1 < arguments.length ? R.call(arguments) : e;
                c === d ? m.notifyWith(b, c) : --g || m.resolveWith(b, c)
            }
        }, d, k, l;
        if (1 < f)for (d = Array(f), k = Array(f), l = Array(f); f > b; b++)e[b] && c.isFunction(e[b].promise) ? e[b].promise().done(r(b, l, e)).fail(m.reject).progress(r(b, k, d)) : --g;
        return g || m.resolveWith(l, e), m.promise()
    }});
    var xa;
    c.fn.ready = function (a) {
        return c.ready.promise().done(a), this
    };
    c.extend({isReady: !1, readyWait: 1, holdReady: function (a) {
        a ? c.readyWait++ : c.ready(!0)
    }, ready: function (a) {
        if (!0 ===
            a ? !--c.readyWait : !c.isReady) {
            if (!w.body)return setTimeout(c.ready);
            c.isReady = !0;
            !0 !== a && 0 < --c.readyWait || (xa.resolveWith(w, [c]), c.fn.triggerHandler && (c(w).triggerHandler("ready"), c(w).off("ready")))
        }
    }});
    c.ready.promise = function (a) {
        if (!xa)if (xa = c.Deferred(), "complete" === w.readyState)setTimeout(c.ready); else if (w.addEventListener)w.addEventListener("DOMContentLoaded", k, !1), h.addEventListener("load", k, !1); else {
            w.attachEvent("onreadystatechange", k);
            h.attachEvent("onload", k);
            var b = !1;
            try {
                b = null == h.frameElement &&
                    w.documentElement
            } catch (e) {
            }
            b && b.doScroll && !function g() {
                if (!c.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (a) {
                        return setTimeout(g, 50)
                    }
                    A();
                    c.ready()
                }
            }()
        }
        return xa.promise(a)
    };
    for (var fc in c(v))break;
    v.ownLast = "0" !== fc;
    v.inlineBlockNeedsLayout = !1;
    c(function () {
        var a, b, c, f;
        (c = w.getElementsByTagName("body")[0]) && c.style && (b = w.createElement("div"), f = w.createElement("div"), f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(f).appendChild(b), "undefined" !== typeof b.style.zoom &&
            (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(f))
    });
    (function () {
        var a = w.createElement("div");
        if (null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                v.deleteExpando = !1
            }
        }
    })();
    c.acceptData = function (a) {
        var b = c.noData[(a.nodeName + " ").toLowerCase()], e = +a.nodeType || 1;
        return 1 !== e && 9 !== e ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    };
    var Rb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Qb =
        /([A-Z])/g;
    c.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (a) {
        return a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando], !!a && !t(a)
    }, data: function (a, b, c) {
        return E(a, b, c)
    }, removeData: function (a, b) {
        return y(a, b)
    }, _data: function (a, b, c) {
        return E(a, b, c, !0)
    }, _removeData: function (a, b) {
        return y(a, b, !0)
    }});
    c.fn.extend({data: function (a, b) {
        var e, f, g, m = this[0], r = m && m.attributes;
        if (void 0 === a) {
            if (this.length && (g = c.data(m), 1 === m.nodeType && !c._data(m, "parsedAttrs"))) {
                for (e = r.length; e--;)r[e] && (f = r[e].name, 0 === f.indexOf("data-") && (f = c.camelCase(f.slice(5)), u(m, f, g[f])));
                c._data(m, "parsedAttrs", !0)
            }
            return g
        }
        return"object" == typeof a ? this.each(function () {
            c.data(this, a)
        }) : 1 < arguments.length ? this.each(function () {
            c.data(this, a, b)
        }) : m ? u(m, a, c.data(m, a)) : void 0
    }, removeData: function (a) {
        return this.each(function () {
            c.removeData(this, a)
        })
    }});
    c.extend({queue: function (a, b, e) {
        var f;
        return a ? (b = (b || "fx") + "queue", f = c._data(a, b), e && (!f || c.isArray(e) ?
            f = c._data(a, b, c.makeArray(e)) : f.push(e)), f || []) : void 0
    }, dequeue: function (a, b) {
        b = b || "fx";
        var e = c.queue(a, b), f = e.length, g = e.shift(), m = c._queueHooks(a, b), r = function () {
            c.dequeue(a, b)
        };
        "inprogress" === g && (g = e.shift(), f--);
        g && ("fx" === b && e.unshift("inprogress"), delete m.stop, g.call(a, r, m));
        !f && m && m.empty.fire()
    }, _queueHooks: function (a, b) {
        var e = b + "queueHooks";
        return c._data(a, e) || c._data(a, e, {empty: c.Callbacks("once memory").add(function () {
            c._removeData(a, b + "queue");
            c._removeData(a, e)
        })})
    }});
    c.fn.extend({queue: function (a, b) {
        var e = 2;
        return"string" != typeof a && (b = a, a = "fx", e--), arguments.length < e ? c.queue(this[0], a) : void 0 === b ? this : this.each(function () {
            var e = c.queue(this, a, b);
            c._queueHooks(this, a);
            "fx" === a && "inprogress" !== e[0] && c.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            c.dequeue(this, a)
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, b) {
        var e, f = 1, g = c.Deferred(), m = this, r = this.length, d = function () {
            --f || g.resolveWith(m, [m])
        };
        "string" != typeof a && (b = a, a = void 0);
        for (a = a ||
            "fx"; r--;)(e = c._data(m[r], a + "queueHooks")) && e.empty && (f++, e.empty.add(d));
        return d(), g.promise(b)
    }});
    var sa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, da = ["Top", "Right", "Bottom", "Left"], na = function (a, b) {
        return a = b || a, "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a)
    }, J = c.access = function (a, b, e, f, g, m, r) {
        var d = 0, k = a.length, l = null == e;
        if ("object" === c.type(e))for (d in g = !0, e)c.access(a, b, d, e[d], !0, m, r); else if (void 0 !== f && (g = !0, c.isFunction(f) || (r = !0), l && (r ? (b.call(a, f), b = null) : (l = b, b = function (a, b, e) {
            return l.call(c(a), e)
        })), b))for (; k > d; d++)b(a[d], e, r ? f : f.call(a[d], d, b(a[d], e)));
        return g ? a : l ? b.call(a) : k ? b(a[0], e) : m
    }, Ga = /^(?:checkbox|radio)$/i;
    !function () {
        var a = w.createElement("input"), b = w.createElement("div"), c = w.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === b.firstChild.nodeType, v.tbody = !b.getElementsByTagName("tbody").length, v.htmlSerialize = !!b.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !==
            w.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), v.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            v.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete b.test
            } catch (f) {
                v.deleteExpando = !1
            }
        }
    }();
    (function () {
        var a, b, c = w.createElement("div");
        for (a in{submit: !0, change: !0, focusin: !0})b = "on" + a, (v[a + "Bubbles"] = b in h) || (c.setAttribute(b, "t"), v[a + "Bubbles"] = !1 === c.attributes[b].expando)
    })();
    var Ma = /^(?:input|select|textarea)$/i, gc = /^key/, hc = /^(?:mouse|pointer|contextmenu)|click/, wb = /^(?:focusinfocus|focusoutblur)$/, xb = /^([^.]*)(?:\.(.+)|)$/;
    c.event = {global: {}, add: function (a, b, e, f, g) {
        var m, d, k, l, h, p, u, t, n, q;
        if (k = c._data(a)) {
            e.handler && (l = e, e =
                l.handler, g = l.selector);
            e.guid || (e.guid = c.guid++);
            (d = k.events) || (d = k.events = {});
            (p = k.handle) || (p = k.handle = function (a) {
                return"undefined" === typeof c || a && c.event.triggered === a.type ? void 0 : c.event.dispatch.apply(p.elem, arguments)
            }, p.elem = a);
            b = (b || "").match(S) || [""];
            for (k = b.length; k--;)m = xb.exec(b[k]) || [], n = q = m[1], m = (m[2] || "").split(".").sort(), n && (h = c.event.special[n] || {}, n = (g ? h.delegateType : h.bindType) || n, h = c.event.special[n] || {}, u = c.extend({type: n, origType: q, data: f, handler: e, guid: e.guid, selector: g,
                needsContext: g && c.expr.match.needsContext.test(g), namespace: m.join(".")}, l), (t = d[n]) || (t = d[n] = [], t.delegateCount = 0, h.setup && !1 !== h.setup.call(a, f, m, p) || (a.addEventListener ? a.addEventListener(n, p, !1) : a.attachEvent && a.attachEvent("on" + n, p))), h.add && (h.add.call(a, u), u.handler.guid || (u.handler.guid = e.guid)), g ? t.splice(t.delegateCount++, 0, u) : t.push(u), c.event.global[n] = !0);
            a = null
        }
    }, remove: function (a, b, e, f, g) {
        var m, d, k, l, h, p, u, t, n, q, y, E = c.hasData(a) && c._data(a);
        if (E && (p = E.events)) {
            b = (b || "").match(S) || [""];
            for (h = b.length; h--;)if (k = xb.exec(b[h]) || [], n = y = k[1], q = (k[2] || "").split(".").sort(), n) {
                u = c.event.special[n] || {};
                n = (f ? u.delegateType : u.bindType) || n;
                t = p[n] || [];
                k = k[2] && new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)");
                for (l = m = t.length; m--;)d = t[m], !g && y !== d.origType || e && e.guid !== d.guid || k && !k.test(d.namespace) || f && f !== d.selector && ("**" !== f || !d.selector) || (t.splice(m, 1), d.selector && t.delegateCount--, u.remove && u.remove.call(a, d));
                l && !t.length && (u.teardown && !1 !== u.teardown.call(a, q, E.handle) || c.removeEvent(a,
                    n, E.handle), delete p[n])
            } else for (n in p)c.event.remove(a, n + b[h], e, f, !0);
            c.isEmptyObject(p) && (delete E.handle, c._removeData(a, "events"))
        }
    }, trigger: function (a, b, e, f) {
        var g, m, d, k, l, p, u = [e || w], t = ia.call(a, "type") ? a.type : a;
        p = ia.call(a, "namespace") ? a.namespace.split(".") : [];
        if (d = g = e = e || w, 3 !== e.nodeType && 8 !== e.nodeType && !wb.test(t + c.event.triggered) && (0 <= t.indexOf(".") && (p = t.split("."), t = p.shift(), p.sort()), m = 0 > t.indexOf(":") && "on" + t, a = a[c.expando] ? a : new c.Event(t, "object" == typeof a && a), a.isTrigger = f ? 2 :
            3, a.namespace = p.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = e), b = null == b ? [a] : c.makeArray(b, [a]), l = c.event.special[t] || {}, f || !l.trigger || !1 !== l.trigger.apply(e, b))) {
            if (!f && !l.noBubble && !c.isWindow(e)) {
                k = l.delegateType || t;
                for (wb.test(k + t) || (d = d.parentNode); d; d = d.parentNode)u.push(d), g = d;
                g === (e.ownerDocument || w) && u.push(g.defaultView || g.parentWindow || h)
            }
            for (p = 0; (d = u[p++]) && !a.isPropagationStopped();)a.type = 1 < p ?
                k : l.bindType || t, (g = (c._data(d, "events") || {})[a.type] && c._data(d, "handle")) && g.apply(d, b), (g = m && d[m]) && g.apply && c.acceptData(d) && (a.result = g.apply(d, b), !1 === a.result && a.preventDefault());
            if (a.type = t, !(f || a.isDefaultPrevented() || l._default && !1 !== l._default.apply(u.pop(), b)) && c.acceptData(e) && m && e[t] && !c.isWindow(e)) {
                (g = e[m]) && (e[m] = null);
                c.event.triggered = t;
                try {
                    e[t]()
                } catch (n) {
                }
                c.event.triggered = void 0;
                g && (e[m] = g)
            }
            return a.result
        }
    }, dispatch: function (a) {
        a = c.event.fix(a);
        var b, e, f, g, m, d = [], k = R.call(arguments);
        b = (c._data(this, "events") || {})[a.type] || [];
        var l = c.event.special[a.type] || {};
        if (k[0] = a, a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
            d = c.event.handlers.call(this, a, b);
            for (b = 0; (g = d[b++]) && !a.isPropagationStopped();)for (a.currentTarget = g.elem, m = 0; (f = g.handlers[m++]) && !a.isImmediatePropagationStopped();)a.namespace_re && !a.namespace_re.test(f.namespace) || (a.handleObj = f, a.data = f.data, e = ((c.event.special[f.origType] || {}).handle || f.handler).apply(g.elem, k), void 0 === e || !1 !== (a.result =
                e) || (a.preventDefault(), a.stopPropagation()));
            return l.postDispatch && l.postDispatch.call(this, a), a.result
        }
    }, handlers: function (a, b) {
        var e, f, g, m, d = [], k = b.delegateCount, l = a.target;
        if (k && l.nodeType && (!a.button || "click" !== a.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (!0 !== l.disabled || "click" !== a.type)) {
            g = [];
            for (m = 0; k > m; m++)f = b[m], e = f.selector + " ", void 0 === g[e] && (g[e] = f.needsContext ? 0 <= c(e, this).index(l) : c.find(e, this, null, [l]).length), g[e] && g.push(f);
            g.length && d.push({elem: l, handlers: g})
        }
        return k <
            b.length && d.push({elem: this, handlers: b.slice(k)}), d
    }, fix: function (a) {
        if (a[c.expando])return a;
        var b, e, f;
        b = a.type;
        var g = a, m = this.fixHooks[b];
        m || (this.fixHooks[b] = m = hc.test(b) ? this.mouseHooks : gc.test(b) ? this.keyHooks : {});
        f = m.props ? this.props.concat(m.props) : this.props;
        a = new c.Event(g);
        for (b = f.length; b--;)e = f[b], a[e] = g[e];
        return a.target || (a.target = g.srcElement || w), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, m.filter ? m.filter(a, g) : a
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {}, keyHooks: {props: ["char", "charCode", "key", "keyCode"], filter: function (a, b) {
            return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
        }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
            var c, f, g, m = b.button, d = b.fromElement;
            return null == a.pageX && null != b.clientX && (f = a.target.ownerDocument || w, g = f.documentElement, c = f.body, a.pageX = b.clientX + (g && g.scrollLeft || c && c.scrollLeft || 0) - (g &&
                g.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (g && g.scrollTop || c && c.scrollTop || 0) - (g && g.clientTop || c && c.clientTop || 0)), !a.relatedTarget && d && (a.relatedTarget = d === a.target ? b.toElement : d), a.which || void 0 === m || (a.which = 1 & m ? 1 : 2 & m ? 3 : 4 & m ? 2 : 0), a
        }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
            if (this !== ba() && this.focus)try {
                return this.focus(), !1
            } catch (a) {
            }
        }, delegateType: "focusin"}, blur: {trigger: function () {
            return this === ba() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"}, click: {trigger: function () {
            return c.nodeName(this,
                "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        }, _default: function (a) {
            return c.nodeName(a.target, "a")
        }}, beforeunload: {postDispatch: function (a) {
            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }}}, simulate: function (a, b, e, f) {
            a = c.extend(new c.Event, e, {type: a, isSimulated: !0, originalEvent: {}});
            f ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
            a.isDefaultPrevented() && e.preventDefault()
        }};
    c.removeEvent = w.removeEventListener ? function (a, b, c) {
        a.removeEventListener &&
        a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    c.Event = function (a, b) {
        return this instanceof c.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? F : D) : this.type = a, b && c.extend(this, b), this.timeStamp = a && a.timeStamp || c.now(), void(this[c.expando] = !0)) : new c.Event(a, b)
    };
    c.Event.prototype = {isDefaultPrevented: D, isPropagationStopped: D,
        isImmediatePropagationStopped: D, preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = F;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = F;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = F;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }};
    c.each({mouseenter: "mouseover",
        mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) {
        c.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var f, g = a.relatedTarget, m = a.handleObj;
            return(!g || g !== this && !c.contains(this, g)) && (a.type = m.origType, f = m.handler.apply(this, arguments), a.type = b), f
        }}
    });
    v.submitBubbles || (c.event.special.submit = {setup: function () {
        return c.nodeName(this, "form") ? !1 : void c.event.add(this, "click._submit keypress._submit", function (a) {
            a = a.target;
            (a = c.nodeName(a, "input") ||
                c.nodeName(a, "button") ? a.form : void 0) && !c._data(a, "submitBubbles") && (c.event.add(a, "submit._submit", function (a) {
                a._submit_bubble = !0
            }), c._data(a, "submitBubbles", !0))
        })
    }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
        return c.nodeName(this, "form") ? !1 : void c.event.remove(this, "._submit")
    }});
    v.changeBubbles || (c.event.special.change = {setup: function () {
        return Ma.test(this.nodeName) ? (("checkbox" ===
            this.type || "radio" === this.type) && (c.event.add(this, "propertychange._change", function (a) {
            "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
        }), c.event.add(this, "click._change", function (a) {
            this._just_changed && !a.isTrigger && (this._just_changed = !1);
            c.event.simulate("change", this, a, !0)
        })), !1) : void c.event.add(this, "beforeactivate._change", function (a) {
            a = a.target;
            Ma.test(a.nodeName) && !c._data(a, "changeBubbles") && (c.event.add(a, "change._change", function (a) {
                !this.parentNode || a.isSimulated || a.isTrigger ||
                c.event.simulate("change", this.parentNode, a, !0)
            }), c._data(a, "changeBubbles", !0))
        })
    }, handle: function (a) {
        var b = a.target;
        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return c.event.remove(this, "._change"), !Ma.test(this.nodeName)
    }});
    v.focusinBubbles || c.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var e = function (a) {
            c.event.simulate(b, a.target, c.event.fix(a), !0)
        };
        c.event.special[b] = {setup: function () {
            var f =
                this.ownerDocument || this, g = c._data(f, b);
            g || f.addEventListener(a, e, !0);
            c._data(f, b, (g || 0) + 1)
        }, teardown: function () {
            var f = this.ownerDocument || this, g = c._data(f, b) - 1;
            g ? c._data(f, b, g) : (f.removeEventListener(a, e, !0), c._removeData(f, b))
        }}
    });
    c.fn.extend({on: function (a, b, e, f, g) {
        var m, d;
        if ("object" == typeof a) {
            "string" != typeof b && (e = e || b, b = void 0);
            for (m in a)this.on(m, b, e, a[m], g);
            return this
        }
        if (null == e && null == f ? (f = b, e = b = void 0) : null == f && ("string" == typeof b ? (f = e, e = void 0) : (f = e, e = b, b = void 0)), !1 === f)f = D; else if (!f)return this;
        return 1 === g && (d = f, f = function (a) {
            return c().off(a), d.apply(this, arguments)
        }, f.guid = d.guid || (d.guid = c.guid++)), this.each(function () {
            c.event.add(this, a, f, e, b)
        })
    }, one: function (a, b, c, f) {
        return this.on(a, b, c, f, 1)
    }, off: function (a, b, e) {
        var f, g;
        if (a && a.preventDefault && a.handleObj)return f = a.handleObj, c(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
        if ("object" == typeof a) {
            for (g in a)this.off(g, b, a[g]);
            return this
        }
        return(!1 === b || "function" == typeof b) && (e =
            b, b = void 0), !1 === e && (e = D), this.each(function () {
            c.event.remove(this, a, e, b)
        })
    }, trigger: function (a, b) {
        return this.each(function () {
            c.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        var e = this[0];
        return e ? c.event.trigger(a, b, e, !0) : void 0
    }});
    var Xa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ic = / jQuery\d+="(?:null|\d+)"/g, yb = new RegExp("<(?:" + Xa + ")[\\s/>]", "i"), Na = /^\s+/, zb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ab = /<([\w:]+)/, Bb = /<tbody/i, jc = /<|&#?\w+;/, kc = /<(?:script|style|link)/i, lc = /checked\s*(?:[^=]|=\s*.checked.)/i, Cb = /^$|\/(?:java|ecma)script/i, Tb = /^true\/(.*)/, mc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, N = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3,
            "<table><tbody><tr>", "</tr></tbody></table>"], _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Oa = Wa(w).appendChild(w.createElement("div"));
    N.optgroup = N.option;
    N.tbody = N.tfoot = N.colgroup = N.caption = N.thead;
    N.th = N.td;
    c.extend({clone: function (a, b, e) {
        var f, g, m, d, k, l = c.contains(a.ownerDocument, a);
        if (v.html5Clone || c.isXMLDoc(a) || !yb.test("<" + a.nodeName + ">") ? m = a.cloneNode(!0) : (Oa.innerHTML = a.outerHTML, Oa.removeChild(m = Oa.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType ||
            c.isXMLDoc(a)))for (f = G(m), k = G(a), d = 0; null != (g = k[d]); ++d)if (f[d]) {
            var h = f[d], p = void 0, t = void 0, u = void 0;
            if (1 === h.nodeType) {
                if (p = h.nodeName.toLowerCase(), !v.noCloneEvent && h[c.expando]) {
                    u = c._data(h);
                    for (t in u.events)c.removeEvent(h, t, u.handle);
                    h.removeAttribute(c.expando)
                }
                "script" === p && h.text !== g.text ? (Za(h).text = g.text, $a(h)) : "object" === p ? (h.parentNode && (h.outerHTML = g.outerHTML), v.html5Clone && g.innerHTML && !c.trim(h.innerHTML) && (h.innerHTML = g.innerHTML)) : "input" === p && Ga.test(g.type) ? (h.defaultChecked =
                    h.checked = g.checked, h.value !== g.value && (h.value = g.value)) : "option" === p ? h.defaultSelected = h.selected = g.defaultSelected : ("input" === p || "textarea" === p) && (h.defaultValue = g.defaultValue)
            }
        }
        if (b)if (e)for (k = k || G(a), f = f || G(m), d = 0; null != (g = k[d]); d++)ab(g, f[d]); else ab(a, m);
        return f = G(m, "script"), 0 < f.length && Ha(f, !l && G(a, "script")), m
    }, buildFragment: function (a, b, e, f) {
        for (var g, m, d, k, l, h, p, t = a.length, u = Wa(b), n = [], q = 0; t > q; q++)if (m = a[q], m || 0 === m)if ("object" === c.type(m))c.merge(n, m.nodeType ? [m] : m); else if (jc.test(m)) {
            k =
                k || u.appendChild(b.createElement("div"));
            l = (Ab.exec(m) || ["", ""])[1].toLowerCase();
            p = N[l] || N._default;
            k.innerHTML = p[1] + m.replace(zb, "<$1></$2>") + p[2];
            for (g = p[0]; g--;)k = k.lastChild;
            if (!v.leadingWhitespace && Na.test(m) && n.push(b.createTextNode(Na.exec(m)[0])), !v.tbody)for (g = (m = "table" !== l || Bb.test(m) ? "<table>" !== p[1] || Bb.test(m) ? 0 : k : k.firstChild) && m.childNodes.length; g--;)c.nodeName(h = m.childNodes[g], "tbody") && !h.childNodes.length && m.removeChild(h);
            c.merge(n, k.childNodes);
            for (k.textContent = ""; k.firstChild;)k.removeChild(k.firstChild);
            k = u.lastChild
        } else n.push(b.createTextNode(m));
        k && u.removeChild(k);
        v.appendChecked || c.grep(G(n, "input"), Sb);
        for (q = 0; m = n[q++];)if ((!f || -1 === c.inArray(m, f)) && (d = c.contains(m.ownerDocument, m), k = G(u.appendChild(m), "script"), d && Ha(k), e))for (g = 0; m = k[g++];)Cb.test(m.type || "") && e.push(m);
        return u
    }, cleanData: function (a, b) {
        for (var e, f, g, m, d = 0, k = c.expando, l = c.cache, h = v.deleteExpando, p = c.event.special; null != (e = a[d]); d++)if ((b || c.acceptData(e)) && (g = e[k], m = g && l[g])) {
            if (m.events)for (f in m.events)p[f] ? c.event.remove(e,
                f) : c.removeEvent(e, f, m.handle);
            l[g] && (delete l[g], h ? delete e[k] : "undefined" !== typeof e.removeAttribute ? e.removeAttribute(k) : e[k] = null, T.push(g))
        }
    }});
    c.fn.extend({text: function (a) {
        return J(this, function (a) {
            return void 0 === a ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || w).createTextNode(a))
        }, null, a, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (a) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ya(this, a).appendChild(a)
        })
    }, prepend: function () {
        return this.domManip(arguments,
            function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ya(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
    }, before: function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
    }, remove: function (a, b) {
        for (var e, f = a ? c.filter(a, this) : this, g = 0; null != (e = f[g]); g++)b || 1 !== e.nodeType || c.cleanData(G(e)), e.parentNode &&
            (b && c.contains(e.ownerDocument, e) && Ha(G(e, "script")), e.parentNode.removeChild(e));
        return this
    }, empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
            for (1 === a.nodeType && c.cleanData(G(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
            a.options && c.nodeName(a, "select") && (a.options.length = 0)
        }
        return this
    }, clone: function (a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
            return c.clone(this, a, b)
        })
    }, html: function (a) {
        return J(this, function (a) {
            var e = this[0] || {}, f = 0, g = this.length;
            if (void 0 === a)return 1 ===
                e.nodeType ? e.innerHTML.replace(ic, "") : void 0;
            if (!("string" != typeof a || kc.test(a) || !v.htmlSerialize && yb.test(a) || !v.leadingWhitespace && Na.test(a) || N[(Ab.exec(a) || ["", ""])[1].toLowerCase()])) {
                a = a.replace(zb, "<$1></$2>");
                try {
                    for (; g > f; f++)e = this[f] || {}, 1 === e.nodeType && (c.cleanData(G(e, !1)), e.innerHTML = a);
                    e = 0
                } catch (m) {
                }
            }
            e && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function () {
        var a = arguments[0];
        return this.domManip(arguments, function (b) {
            a = this.parentNode;
            c.cleanData(G(this));
            a && a.replaceChild(b,
                this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, b) {
        a = rb.apply([], a);
        var e, f, g, m, d = 0, k = this.length, l = this, h = k - 1, p = a[0], u = c.isFunction(p);
        if (u || 1 < k && "string" == typeof p && !v.checkClone && lc.test(p))return this.each(function (c) {
            var e = l.eq(c);
            u && (a[0] = p.call(this, c, e.html()));
            e.domManip(a, b)
        });
        if (k && (m = c.buildFragment(a, this[0].ownerDocument, !1, this), e = m.firstChild, 1 === m.childNodes.length && (m = e), e)) {
            g = c.map(G(m, "script"), Za);
            for (f = g.length; k >
                d; d++)e = m, d !== h && (e = c.clone(e, !0, !0), f && c.merge(g, G(e, "script"))), b.call(this[d], e, d);
            if (f)for (m = g[g.length - 1].ownerDocument, c.map(g, $a), d = 0; f > d; d++)e = g[d], Cb.test(e.type || "") && !c._data(e, "globalEval") && c.contains(m, e) && (e.src ? c._evalUrl && c._evalUrl(e.src) : c.globalEval((e.text || e.textContent || e.innerHTML || "").replace(mc, "")));
            m = e = null
        }
        return this
    }});
    c.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        c.fn[a] = function (a) {
            for (var f =
                0, g = [], m = c(a), d = m.length - 1; d >= f; f++)a = f === d ? this : this.clone(!0), c(m[f])[b](a), La.apply(g, a.get());
            return this.pushStack(g)
        }
    });
    var ma, cb = {};
    !function () {
        var a;
        v.shrinkWrapBlocks = function () {
            if (null != a)return a;
            a = !1;
            var b, c, f;
            return c = w.getElementsByTagName("body")[0], c && c.style ? (b = w.createElement("div"), f = w.createElement("div"), f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(f).appendChild(b), "undefined" !== typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                b.appendChild(w.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(f), a) : void 0
        }
    }();
    var Db = /^margin/, ta = new RegExp("^(" + sa + ")(?!px)[a-z%]+$", "i"), ea, W, nc = /^(top|right|bottom|left)$/;
    h.getComputedStyle ? (ea = function (a) {
        return a.ownerDocument.defaultView.opener ? a.ownerDocument.defaultView.getComputedStyle(a, null) : h.getComputedStyle(a, null)
    }, W = function (a, b, e) {
        var f, g, m, d, k = a.style;
        return e = e || ea(a), d = e ? e.getPropertyValue(b) || e[b] : void 0, e && ("" !== d || c.contains(a.ownerDocument, a) ||
            (d = c.style(a, b)), ta.test(d) && Db.test(b) && (f = k.width, g = k.minWidth, m = k.maxWidth, k.minWidth = k.maxWidth = k.width = d, d = e.width, k.width = f, k.minWidth = g, k.maxWidth = m)), void 0 === d ? d : d + ""
    }) : w.documentElement.currentStyle && (ea = function (a) {
        return a.currentStyle
    }, W = function (a, b, c) {
        var f, g, m, d, k = a.style;
        return c = c || ea(a), d = c ? c[b] : void 0, null == d && k && k[b] && (d = k[b]), ta.test(d) && !nc.test(b) && (f = k.left, g = a.runtimeStyle, m = g && g.left, m && (g.left = a.currentStyle.left), k.left = "fontSize" === b ? "1em" : d, d = k.pixelLeft + "px", k.left =
            f, m && (g.left = m)), void 0 === d ? d : d + "" || "auto"
    });
    !function () {
        var a, b, e, f, g, m, d;
        if (a = w.createElement("div"), a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = a.getElementsByTagName("a")[0], b = e && e.style) {
            var k = function () {
                var a, b, c, e;
                (b = w.getElementsByTagName("body")[0]) && b.style && (a = w.createElement("div"), c = w.createElement("div"), c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", b.appendChild(c).appendChild(a), a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    f = g = !1, d = !0, h.getComputedStyle && (f = "1%" !== (h.getComputedStyle(a, null) || {}).top, g = "4px" === (h.getComputedStyle(a, null) || {width: "4px"}).width, e = a.appendChild(w.createElement("div")), e.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", d = !parseFloat((h.getComputedStyle(e, null) || {}).marginRight), a.removeChild(e)), a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    e = a.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", m = 0 === e[0].offsetHeight, m && (e[0].style.display = "", e[1].style.display = "none", m = 0 === e[0].offsetHeight), b.removeChild(c))
            };
            b.cssText = "float:left;opacity:.5";
            v.opacity = "0.5" === b.opacity;
            v.cssFloat = !!b.cssFloat;
            a.style.backgroundClip = "content-box";
            a.cloneNode(!0).style.backgroundClip = "";
            v.clearCloneStyle = "content-box" === a.style.backgroundClip;
            v.boxSizing = "" === b.boxSizing || "" === b.MozBoxSizing || "" === b.WebkitBoxSizing;
            c.extend(v, {reliableHiddenOffsets: function () {
                return null == m && k(), m
            }, boxSizingReliable: function () {
                return null == g && k(), g
            }, pixelPosition: function () {
                return null == f && k(), f
            }, reliableMarginRight: function () {
                return null == d && k(), d
            }})
        }
    }();
    c.swap = function (a, b, c, f) {
        var g, d = {};
        for (g in b)d[g] = a.style[g], a.style[g] = b[g];
        c = c.apply(a, f || []);
        for (g in b)a.style[g] = d[g];
        return c
    };
    var Pa = /alpha\([^)]*\)/i, oc = /opacity\s*=\s*([^)]*)/, pc = /^(none|table(?!-c[ea]).+)/, Ub = new RegExp("^(" + sa + ")(.*)$", "i"), qc = new RegExp("^([+-])=(" +
        sa + ")", "i"), rc = {position: "absolute", visibility: "hidden", display: "block"}, Eb = {letterSpacing: "0", fontWeight: "400"}, fb = ["Webkit", "O", "Moz", "ms"];
    c.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = W(a, "opacity");
            return"" === c ? "1" : c
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": v.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, b, e, f) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType &&
            a.style) {
            var g, d, k, l = c.camelCase(b), h = a.style;
            if (b = c.cssProps[l] || (c.cssProps[l] = eb(h, l)), k = c.cssHooks[b] || c.cssHooks[l], void 0 === e)return k && "get"in k && void 0 !== (g = k.get(a, !1, f)) ? g : h[b];
            if (d = typeof e, "string" === d && (g = qc.exec(e)) && (e = (g[1] + 1) * g[2] + parseFloat(c.css(a, b)), d = "number"), null != e && e === e && ("number" !== d || c.cssNumber[l] || (e += "px"), v.clearCloneStyle || "" !== e || 0 !== b.indexOf("background") || (h[b] = "inherit"), !(k && "set"in k && void 0 === (e = k.set(a, e, f)))))try {
                h[b] = e
            } catch (p) {
            }
        }
    }, css: function (a, b, e, f) {
        var g,
            d, k, l = c.camelCase(b);
        return b = c.cssProps[l] || (c.cssProps[l] = eb(a.style, l)), k = c.cssHooks[b] || c.cssHooks[l], k && "get"in k && (d = k.get(a, !0, e)), void 0 === d && (d = W(a, b, f)), "normal" === d && b in Eb && (d = Eb[b]), "" === e || e ? (g = parseFloat(d), !0 === e || c.isNumeric(g) ? g || 0 : d) : d
    }});
    c.each(["height", "width"], function (a, b) {
        c.cssHooks[b] = {get: function (a, f, g) {
            return f ? pc.test(c.css(a, "display")) && 0 === a.offsetWidth ? c.swap(a, rc, function () {
                return jb(a, b, g)
            }) : jb(a, b, g) : void 0
        }, set: function (a, f, g) {
            var d = g && ea(a);
            return hb(a, f, g ?
                ib(a, b, g, v.boxSizing && "border-box" === c.css(a, "boxSizing", !1, d), d) : 0)
        }}
    });
    v.opacity || (c.cssHooks.opacity = {get: function (a, b) {
        return oc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    }, set: function (a, b) {
        var e = a.style, f = a.currentStyle, g = c.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", d = f && f.filter || e.filter || "";
        e.zoom = 1;
        (1 <= b || "" === b) && "" === c.trim(d.replace(Pa, "")) && e.removeAttribute && (e.removeAttribute("filter"), "" === b || f && !f.filter) || (e.filter = Pa.test(d) ?
            d.replace(Pa, g) : d + " " + g)
    }});
    c.cssHooks.marginRight = db(v.reliableMarginRight, function (a, b) {
        return b ? c.swap(a, {display: "inline-block"}, W, [a, "marginRight"]) : void 0
    });
    c.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        c.cssHooks[a + b] = {expand: function (c) {
            var f = 0, g = {};
            for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > f; f++)g[a + da[f] + b] = c[f] || c[f - 2] || c[0];
            return g
        }};
        Db.test(a) || (c.cssHooks[a + b].set = hb)
    });
    c.fn.extend({css: function (a, b) {
        return J(this, function (a, b, g) {
            var d, k = {}, l = 0;
            if (c.isArray(b)) {
                g = ea(a);
                for (d = b.length; d > l; l++)k[b[l]] = c.css(a, b[l], !1, g);
                return k
            }
            return void 0 !== g ? c.style(a, b, g) : c.css(a, b)
        }, a, b, 1 < arguments.length)
    }, show: function () {
        return gb(this, !0)
    }, hide: function () {
        return gb(this)
    }, toggle: function (a) {
        return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
            na(this) ? c(this).show() : c(this).hide()
        })
    }});
    c.Tween = C;
    C.prototype = {constructor: C, init: function (a, b, e, f, g, d) {
        this.elem = a;
        this.prop = e;
        this.easing = g || "swing";
        this.options = b;
        this.start = this.now = this.cur();
        this.end = f;
        this.unit = d || (c.cssNumber[e] ? "" : "px")
    }, cur: function () {
        var a = C.propHooks[this.prop];
        return a && a.get ? a.get(this) : C.propHooks._default.get(this)
    }, run: function (a) {
        var b, e = C.propHooks[this.prop];
        return this.pos = b = this.options.duration ? c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), e && e.set ? e.set(this) : C.propHooks._default.set(this), this
    }};
    C.prototype.init.prototype =
        C.prototype;
    C.propHooks = {_default: {get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = c.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
    }, set: function (a) {
        c.fx.step[a.prop] ? c.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[c.cssProps[a.prop]] || c.cssHooks[a.prop]) ? c.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}};
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }};
    c.easing = {linear: function (a) {
        return a
    }, swing: function (a) {
        return.5 - Math.cos(a * Math.PI) / 2
    }};
    c.fx = C.prototype.init;
    c.fx.step = {};
    var X, Ba, sc = /^(?:toggle|show|hide)$/, Fb = new RegExp("^(?:([+-])=|)(" + sa + ")([a-z%]*)$", "i"), tc = /queueHooks$/, va = [function (a, b, e) {
        var f, g, d, k, l, h, p, u = this, t = {}, n = a.style, q = a.nodeType && na(a), y = c._data(a, "fxshow");
        e.queue || (k = c._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function () {
            k.unqueued || l()
        }), k.unqueued++, u.always(function () {
            u.always(function () {
                k.unqueued--;
                c.queue(a, "fx").length || k.empty.fire()
            })
        }));
        1 === a.nodeType && ("height"in b || "width"in b) && (e.overflow = [n.overflow, n.overflowX, n.overflowY], h = c.css(a, "display"), p = "none" === h ? c._data(a, "olddisplay") || ca(a.nodeName) : h, "inline" === p && "none" === c.css(a, "float") && (v.inlineBlockNeedsLayout && "inline" !== ca(a.nodeName) ? n.zoom = 1 : n.display = "inline-block"));
        e.overflow && (n.overflow = "hidden", v.shrinkWrapBlocks() || u.always(function () {
            n.overflow = e.overflow[0];
            n.overflowX = e.overflow[1];
            n.overflowY = e.overflow[2]
        }));
        for (f in b)if (g =
            b[f], sc.exec(g)) {
            if (delete b[f], d = d || "toggle" === g, g === (q ? "hide" : "show")) {
                if ("show" !== g || !y || void 0 === y[f])continue;
                q = !0
            }
            t[f] = y && y[f] || c.style(a, f)
        } else h = void 0;
        if (c.isEmptyObject(t))"inline" === ("none" === h ? ca(a.nodeName) : h) && (n.display = h); else for (f in y ? "hidden"in y && (q = y.hidden) : y = c._data(a, "fxshow", {}), d && (y.hidden = !q), q ? c(a).show() : u.done(function () {
            c(a).hide()
        }), u.done(function () {
            var b;
            c._removeData(a, "fxshow");
            for (b in t)c.style(a, b, t[b])
        }), t)b = lb(q ? y[f] : 0, f, u), f in y || (y[f] = b.start, q && (b.end =
            b.start, b.start = "width" === f || "height" === f ? 1 : 0))
    }], oa = {"*": [function (a, b) {
        var e = this.createTween(a, b), f = e.cur(), g = Fb.exec(b), d = g && g[3] || (c.cssNumber[a] ? "" : "px"), k = (c.cssNumber[a] || "px" !== d && +f) && Fb.exec(c.css(e.elem, a)), l = 1, h = 20;
        if (k && k[3] !== d) {
            d = d || k[3];
            g = g || [];
            k = +f || 1;
            do l = l || ".5", k /= l, c.style(e.elem, a, k + d); while (l !== (l = e.cur() / f) && 1 !== l && --h)
        }
        return g && (k = e.start = +k || +f || 0, e.unit = d, e.end = g[1] ? k + (g[1] + 1) * g[2] : +g[2]), e
    }]};
    c.Animation = c.extend(mb, {tweener: function (a, b) {
        c.isFunction(a) ? (b = a, a = ["*"]) :
            a = a.split(" ");
        for (var e, f = 0, g = a.length; g > f; f++)e = a[f], oa[e] = oa[e] || [], oa[e].unshift(b)
    }, prefilter: function (a, b) {
        b ? va.unshift(a) : va.push(a)
    }});
    c.speed = function (a, b, e) {
        var f = a && "object" == typeof a ? c.extend({}, a) : {complete: e || !e && b || c.isFunction(a) && a, duration: a, easing: e && b || b && !c.isFunction(b) && b};
        return f.duration = c.fx.off ? 0 : "number" == typeof f.duration ? f.duration : f.duration in c.fx.speeds ? c.fx.speeds[f.duration] : c.fx.speeds._default, (null == f.queue || !0 === f.queue) && (f.queue = "fx"), f.old = f.complete, f.complete =
            function () {
                c.isFunction(f.old) && f.old.call(this);
                f.queue && c.dequeue(this, f.queue)
            }, f
    };
    c.fn.extend({fadeTo: function (a, b, c, f) {
        return this.filter(na).css("opacity", 0).show().end().animate({opacity: b}, a, c, f)
    }, animate: function (a, b, e, f) {
        var g = c.isEmptyObject(a), d = c.speed(b, e, f);
        b = function () {
            var b = mb(this, c.extend({}, a), d);
            (g || c._data(this, "finish")) && b.stop(!0)
        };
        return b.finish = b, g || !1 === d.queue ? this.each(b) : this.queue(d.queue, b)
    }, stop: function (a, b, e) {
        var f = function (a) {
            var b = a.stop;
            delete a.stop;
            b(e)
        };
        return"string" != typeof a && (e = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
            var b = !0, d = null != a && a + "queueHooks", k = c.timers, l = c._data(this);
            if (d)l[d] && l[d].stop && f(l[d]); else for (d in l)l[d] && l[d].stop && tc.test(d) && f(l[d]);
            for (d = k.length; d--;)k[d].elem !== this || null != a && k[d].queue !== a || (k[d].anim.stop(e), b = !1, k.splice(d, 1));
            !b && e || c.dequeue(this, a)
        })
    }, finish: function (a) {
        return!1 !== a && (a = a || "fx"), this.each(function () {
            var b, e = c._data(this), f = e[a + "queue"];
            b = e[a + "queueHooks"];
            var g =
                c.timers, d = f ? f.length : 0;
            e.finish = !0;
            c.queue(this, a, []);
            b && b.stop && b.stop.call(this, !0);
            for (b = g.length; b--;)g[b].elem === this && g[b].queue === a && (g[b].anim.stop(!0), g.splice(b, 1));
            for (b = 0; d > b; b++)f[b] && f[b].finish && f[b].finish.call(this);
            delete e.finish
        })
    }});
    c.each(["toggle", "show", "hide"], function (a, b) {
        var e = c.fn[b];
        c.fn[b] = function (a, c, d) {
            return null == a || "boolean" == typeof a ? e.apply(this, arguments) : this.animate(ua(b, !0), a, c, d)
        }
    });
    c.each({slideDown: ua("show"), slideUp: ua("hide"), slideToggle: ua("toggle"),
        fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        c.fn[a] = function (a, c, g) {
            return this.animate(b, a, c, g)
        }
    });
    c.timers = [];
    c.fx.tick = function () {
        var a, b = c.timers, e = 0;
        for (X = c.now(); e < b.length; e++)a = b[e], a() || b[e] !== a || b.splice(e--, 1);
        b.length || c.fx.stop();
        X = void 0
    };
    c.fx.timer = function (a) {
        c.timers.push(a);
        a() ? c.fx.start() : c.timers.pop()
    };
    c.fx.interval = 13;
    c.fx.start = function () {
        Ba || (Ba = setInterval(c.fx.tick, c.fx.interval))
    };
    c.fx.stop = function () {
        clearInterval(Ba);
        Ba = null
    };
    c.fx.speeds = {slow: 600, fast: 200, _default: 400};
    c.fn.delay = function (a, b) {
        return a = c.fx ? c.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var g = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(g)
            }
        })
    };
    (function () {
        var a, b, c, f, g;
        b = w.createElement("div");
        b.setAttribute("className", "t");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        f = b.getElementsByTagName("a")[0];
        c = w.createElement("select");
        g = c.appendChild(w.createElement("option"));
        a = b.getElementsByTagName("input")[0];
        f.style.cssText = "top:1px";
        v.getSetAttribute = "t" !== b.className;
        v.style = /top/.test(f.getAttribute("style"));
        v.hrefNormalized = "/a" === f.getAttribute("href");
        v.checkOn = !!a.value;
        v.optSelected = g.selected;
        v.enctype = !!w.createElement("form").enctype;
        c.disabled = !0;
        v.optDisabled = !g.disabled;
        a = w.createElement("input");
        a.setAttribute("value", "");
        v.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        v.radioValue = "t" === a.value
    })();
    var uc = /\r/g;
    c.fn.extend({val: function (a) {
        var b, e, f, g =
            this[0];
        if (arguments.length)return f = c.isFunction(a), this.each(function (e) {
            var g;
            1 === this.nodeType && (g = f ? a.call(this, e, c(this).val()) : a, null == g ? g = "" : "number" == typeof g ? g += "" : c.isArray(g) && (g = c.map(g, function (a) {
                return null == a ? "" : a + ""
            })), b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, g, "value") || (this.value = g))
        });
        if (g)return b = c.valHooks[g.type] || c.valHooks[g.nodeName.toLowerCase()], b && "get"in b && void 0 !== (e = b.get(g, "value")) ? e : (e = g.value, "string" == typeof e ? e.replace(uc, "") : null == e ? "" : e)
    }});
    c.extend({valHooks: {option: {get: function (a) {
        var b = c.find.attr(a, "value");
        return null != b ? b : c.trim(c.text(a))
    }}, select: {get: function (a) {
        for (var b, e = a.options, f = a.selectedIndex, g = "select-one" === a.type || 0 > f, d = g ? null : [], k = g ? f + 1 : e.length, l = 0 > f ? k : g ? f : 0; k > l; l++)if (b = e[l], !(!b.selected && l !== f || (v.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && c.nodeName(b.parentNode, "optgroup"))) {
            if (a = c(b).val(), g)return a;
            d.push(a)
        }
        return d
    }, set: function (a, b) {
        for (var e, f, g = a.options, d = c.makeArray(b), k = g.length; k--;)if (f = g[k], 0 <= c.inArray(c.valHooks.option.get(f), d))try {
            f.selected = e = !0
        } catch (l) {
            f.scrollHeight
        } else f.selected = !1;
        return e || (a.selectedIndex = -1), g
    }}}});
    c.each(["radio", "checkbox"], function () {
        c.valHooks[this] = {set: function (a, b) {
            return c.isArray(b) ? a.checked = 0 <= c.inArray(c(a).val(), b) : void 0
        }};
        v.checkOn || (c.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var la, Gb, Y = c.expr.attrHandle, Qa = /^(?:checked|selected)$/i,
        Z = v.getSetAttribute, Da = v.input;
    c.fn.extend({attr: function (a, b) {
        return J(this, c.attr, a, b, 1 < arguments.length)
    }, removeAttr: function (a) {
        return this.each(function () {
            c.removeAttr(this, a)
        })
    }});
    c.extend({attr: function (a, b, e) {
        var f, g, d = a.nodeType;
        if (a && 3 !== d && 8 !== d && 2 !== d)return"undefined" === typeof a.getAttribute ? c.prop(a, b, e) : (1 === d && c.isXMLDoc(a) || (b = b.toLowerCase(), f = c.attrHooks[b] || (c.expr.match.bool.test(b) ? Gb : la)), void 0 === e ? f && "get"in f && null !== (g = f.get(a, b)) ? g : (g = c.find.attr(a, b), null == g ? void 0 : g) :
                null !== e ? f && "set"in f && void 0 !== (g = f.set(a, e, b)) ? g : (a.setAttribute(b, e + ""), e) : void c.removeAttr(a, b))
    }, removeAttr: function (a, b) {
        var e, f, g = 0, d = b && b.match(S);
        if (d && 1 === a.nodeType)for (; e = d[g++];)f = c.propFix[e] || e, c.expr.match.bool.test(e) ? Da && Z || !Qa.test(e) ? a[f] = !1 : a[c.camelCase("default-" + e)] = a[f] = !1 : c.attr(a, e, ""), a.removeAttribute(Z ? e : f)
    }, attrHooks: {type: {set: function (a, b) {
        if (!v.radioValue && "radio" === b && c.nodeName(a, "input")) {
            var e = a.value;
            return a.setAttribute("type", b), e && (a.value = e), b
        }
    }}}});
    Gb =
    {set: function (a, b, e) {
        return!1 === b ? c.removeAttr(a, e) : Da && Z || !Qa.test(e) ? a.setAttribute(!Z && c.propFix[e] || e, e) : a[c.camelCase("default-" + e)] = a[e] = !0, e
    }};
    c.each(c.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var e = Y[b] || c.find.attr;
        Y[b] = Da && Z || !Qa.test(b) ? function (a, b, c) {
            var d, k;
            return c || (k = Y[b], Y[b] = d, d = null != e(a, b, c) ? b.toLowerCase() : null, Y[b] = k), d
        } : function (a, b, e) {
            return e ? void 0 : a[c.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Da && Z || (c.attrHooks.value = {set: function (a, b, e) {
        return c.nodeName(a,
            "input") ? void(a.defaultValue = b) : la && la.set(a, b, e)
    }});
    Z || (la = {set: function (a, b, c) {
        var f = a.getAttributeNode(c);
        return f || a.setAttributeNode(f = a.ownerDocument.createAttribute(c)), f.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }}, Y.id = Y.name = Y.coords = function (a, b, c) {
        var f;
        return c ? void 0 : (f = a.getAttributeNode(b)) && "" !== f.value ? f.value : null
    }, c.valHooks.button = {get: function (a, b) {
        var c = a.getAttributeNode(b);
        return c && c.specified ? c.value : void 0
    }, set: la.set}, c.attrHooks.contenteditable = {set: function (a, b, c) {
        la.set(a, "" === b ? !1 : b, c)
    }}, c.each(["width", "height"], function (a, b) {
        c.attrHooks[b] = {set: function (a, c) {
            return"" === c ? (a.setAttribute(b, "auto"), c) : void 0
        }}
    }));
    v.style || (c.attrHooks.style = {get: function (a) {
        return a.style.cssText || void 0
    }, set: function (a, b) {
        return a.style.cssText = b + ""
    }});
    var vc = /^(?:input|select|textarea|button|object)$/i, wc = /^(?:a|area)$/i;
    c.fn.extend({prop: function (a, b) {
        return J(this, c.prop, a, b, 1 < arguments.length)
    }, removeProp: function (a) {
        return a = c.propFix[a] || a, this.each(function () {
            try {
                this[a] = void 0, delete this[a]
            } catch (b) {
            }
        })
    }});
    c.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, e) {
        var f, g, d, k = a.nodeType;
        if (a && 3 !== k && 8 !== k && 2 !== k)return d = 1 !== k || !c.isXMLDoc(a), d && (b = c.propFix[b] || b, g = c.propHooks[b]), void 0 !== e ? g && "set"in g && void 0 !== (f = g.set(a, e, b)) ? f : a[b] = e : g && "get"in g && null !== (f = g.get(a, b)) ? f : a[b]
    }, propHooks: {tabIndex: {get: function (a) {
        var b = c.find.attr(a, "tabindex");
        return b ? parseInt(b, 10) : vc.test(a.nodeName) || wc.test(a.nodeName) && a.href ? 0 : -1
    }}}});
    v.hrefNormalized ||
    c.each(["href", "src"], function (a, b) {
        c.propHooks[b] = {get: function (a) {
            return a.getAttribute(b, 4)
        }}
    });
    v.optSelected || (c.propHooks.selected = {get: function (a) {
        a = a.parentNode;
        return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
    }});
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        c.propFix[this.toLowerCase()] = this
    });
    v.enctype || (c.propFix.enctype = "encoding");
    var Ra = /[\t\r\n\f]/g;
    c.fn.extend({addClass: function (a) {
        var b,
            e, f, g, d, k = 0, l = this.length;
        b = "string" == typeof a && a;
        if (c.isFunction(a))return this.each(function (b) {
            c(this).addClass(a.call(this, b, this.className))
        });
        if (b)for (b = (a || "").match(S) || []; l > k; k++)if (e = this[k], f = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(Ra, " ") : " ")) {
            for (d = 0; g = b[d++];)0 > f.indexOf(" " + g + " ") && (f += g + " ");
            f = c.trim(f);
            e.className !== f && (e.className = f)
        }
        return this
    }, removeClass: function (a) {
        var b, e, f, d, k, l = 0, h = this.length;
        b = 0 === arguments.length || "string" == typeof a && a;
        if (c.isFunction(a))return this.each(function (b) {
            c(this).removeClass(a.call(this,
                b, this.className))
        });
        if (b)for (b = (a || "").match(S) || []; h > l; l++)if (e = this[l], f = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(Ra, " ") : "")) {
            for (k = 0; d = b[k++];)for (; 0 <= f.indexOf(" " + d + " ");)f = f.replace(" " + d + " ", " ");
            f = a ? c.trim(f) : "";
            e.className !== f && (e.className = f)
        }
        return this
    }, toggleClass: function (a, b) {
        var e = typeof a;
        return"boolean" == typeof b && "string" === e ? b ? this.addClass(a) : this.removeClass(a) : this.each(c.isFunction(a) ? function (e) {
            c(this).toggleClass(a.call(this, e, this.className, b), b)
        } : function () {
            if ("string" ===
                e)for (var b, d = 0, k = c(this), l = a.match(S) || []; b = l[d++];)k.hasClass(b) ? k.removeClass(b) : k.addClass(b); else("undefined" === e || "boolean" === e) && (this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || "")
        })
    }, hasClass: function (a) {
        a = " " + a + " ";
        for (var b = 0, c = this.length; c > b; b++)if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Ra, " ").indexOf(a))return!0;
        return!1
    }});
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (a, b) {
            c.fn[b] = function (a, c) {
                return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
            }
        });
    c.fn.extend({hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, delegate: function (a, b, c, f) {
        return this.on(b, a, c, f)
    }, undelegate: function (a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }});
    var Sa = c.now(), Ta = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    c.parseJSON = function (a) {
        if (h.JSON && h.JSON.parse)return h.JSON.parse(a + "");
        var b, e = null, f = c.trim(a + "");
        return f && !c.trim(f.replace(xc, function (a, c, f, d) {
            return b && c && (e = 0), 0 === e ? a : (b = f || c, e += !d - !f, "")
        })) ? Function("return " + f)() : c.error("Invalid JSON: " + a)
    };
    c.parseXML = function (a) {
        var b, e;
        if (!a || "string" != typeof a)return null;
        try {
            h.DOMParser ? (e = new DOMParser, b = e.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
        } catch (f) {
            b = void 0
        }
        return b && b.documentElement && !b.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a), b
    };
    var aa, M, yc = /#.*$/, Hb = /([?&])_=[^&]*/, zc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ac = /^(?:GET|HEAD)$/, Bc = /^\/\//, Ib = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Jb = {}, Ia = {}, Kb = "*/".concat("*");
    try {
        M = location.href
    } catch (Ic) {
        M = w.createElement("a"), M.href = "", M = M.href
    }
    aa = Ib.exec(M.toLowerCase()) || [];
    c.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: M, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(aa[1]),
        global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": c.parseJSON, "text xml": c.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, b) {
        return b ? Ja(Ja(a,
            c.ajaxSettings), b) : Ja(c.ajaxSettings, a)
    }, ajaxPrefilter: nb(Jb), ajaxTransport: nb(Ia), ajax: function (a, b) {
        function e(a, b, e, f) {
            var d, g, t, w, F = b;
            if (2 !== D) {
                D = 2;
                h && clearTimeout(h);
                u = void 0;
                l = f || "";
                x.readyState = 0 < a ? 4 : 0;
                f = 200 <= a && 300 > a || 304 === a;
                if (e) {
                    t = n;
                    for (var G = x, K, L, C, H, N = t.contents, B = t.dataTypes; "*" === B[0];)B.shift(), void 0 === L && (L = t.mimeType || G.getResponseHeader("Content-Type"));
                    if (L)for (H in N)if (N[H] && N[H].test(L)) {
                        B.unshift(H);
                        break
                    }
                    if (B[0]in e)C = B[0]; else {
                        for (H in e) {
                            if (!B[0] || t.converters[H + " " + B[0]]) {
                                C =
                                    H;
                                break
                            }
                            K || (K = H)
                        }
                        C = C || K
                    }
                    t = C ? (C !== B[0] && B.unshift(C), e[C]) : void 0
                }
                var P;
                a:{
                    e = n;
                    K = t;
                    L = x;
                    C = f;
                    var I, M, J;
                    t = {};
                    G = e.dataTypes.slice();
                    if (G[1])for (I in e.converters)t[I.toLowerCase()] = e.converters[I];
                    for (H = G.shift(); H;)if (e.responseFields[H] && (L[e.responseFields[H]] = K), !J && C && e.dataFilter && (K = e.dataFilter(K, e.dataType)), J = H, H = G.shift())if ("*" === H)H = J; else if ("*" !== J && J !== H) {
                        if (I = t[J + " " + H] || t["* " + H], !I)for (P in t)if (M = P.split(" "), M[1] === H && (I = t[J + " " + M[0]] || t["* " + M[0]])) {
                            !0 === I ? I = t[P] : !0 !== t[P] && (H = M[0],
                                G.unshift(M[1]));
                            break
                        }
                        if (!0 !== I)if (I && e["throws"])K = I(K); else try {
                            K = I(K)
                        } catch (R) {
                            P = {state: "parsererror", error: I ? R : "No conversion from " + J + " to " + H};
                            break a
                        }
                    }
                    P = {state: "success", data: K}
                }
                t = P;
                f ? (n.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (c.lastModified[k] = w), w = x.getResponseHeader("etag"), w && (c.etag[k] = w)), 204 === a || "HEAD" === n.type ? F = "nocontent" : 304 === a ? F = "notmodified" : (F = t.state, d = t.data, g = t.error, f = !g)) : (g = F, (a || !F) && (F = "error", 0 > a && (a = 0)));
                x.status = a;
                x.statusText = (b || F) + "";
                f ? E.resolveWith(q,
                    [d, F, x]) : E.rejectWith(q, [x, F, g]);
                x.statusCode(v);
                v = void 0;
                p && y.trigger(f ? "ajaxSuccess" : "ajaxError", [x, n, f ? d : g]);
                A.fireWith(q, [x, F]);
                p && (y.trigger("ajaxComplete", [x, n]), --c.active || c.event.trigger("ajaxStop"))
            }
        }

        "object" == typeof a && (b = a, a = void 0);
        b = b || {};
        var f, d, k, l, h, p, u, t, n = c.ajaxSetup({}, b), q = n.context || n, y = n.context && (q.nodeType || q.jquery) ? c(q) : c.event, E = c.Deferred(), A = c.Callbacks("once memory"), v = n.statusCode || {}, w = {}, F = {}, D = 0, G = "canceled", x = {readyState: 0, getResponseHeader: function (a) {
            var b;
            if (2 ===
                D) {
                if (!t)for (t = {}; b = zc.exec(l);)t[b[1].toLowerCase()] = b[2];
                b = t[a.toLowerCase()]
            }
            return null == b ? null : b
        }, getAllResponseHeaders: function () {
            return 2 === D ? l : null
        }, setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return D || (a = F[c] = F[c] || a, w[a] = b), this
        }, overrideMimeType: function (a) {
            return D || (n.mimeType = a), this
        }, statusCode: function (a) {
            var b;
            if (a)if (2 > D)for (b in a)v[b] = [v[b], a[b]]; else x.always(a[x.status]);
            return this
        }, abort: function (a) {
            a = a || G;
            return u && u.abort(a), e(0, a), this
        }};
        if (E.promise(x).complete =
            A.add, x.success = x.done, x.error = x.fail, n.url = ((a || n.url || M) + "").replace(yc, "").replace(Bc, aa[1] + "//"), n.type = b.method || b.type || n.method || n.type, n.dataTypes = c.trim(n.dataType || "*").toLowerCase().match(S) || [""], null == n.crossDomain && (f = Ib.exec(n.url.toLowerCase()), n.crossDomain = !(!f || f[1] === aa[1] && f[2] === aa[2] && (f[3] || ("http:" === f[1] ? "80" : "443")) === (aa[3] || ("http:" === aa[1] ? "80" : "443")))), n.data && n.processData && "string" != typeof n.data && (n.data = c.param(n.data, n.traditional)), ob(Jb, n, b, x), 2 === D)return x;
        (p = c.event && n.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
        n.type = n.type.toUpperCase();
        n.hasContent = !Ac.test(n.type);
        k = n.url;
        n.hasContent || (n.data && (k = n.url += (Ta.test(k) ? "&" : "?") + n.data, delete n.data), !1 === n.cache && (n.url = Hb.test(k) ? k.replace(Hb, "$1_=" + Sa++) : k + (Ta.test(k) ? "&" : "?") + "_=" + Sa++));
        n.ifModified && (c.lastModified[k] && x.setRequestHeader("If-Modified-Since", c.lastModified[k]), c.etag[k] && x.setRequestHeader("If-None-Match", c.etag[k]));
        (n.data && n.hasContent && !1 !== n.contentType || b.contentType) &&
        x.setRequestHeader("Content-Type", n.contentType);
        x.setRequestHeader("Accept", n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : n.accepts["*"]);
        for (d in n.headers)x.setRequestHeader(d, n.headers[d]);
        if (n.beforeSend && (!1 === n.beforeSend.call(q, x, n) || 2 === D))return x.abort();
        G = "abort";
        for (d in{success: 1, error: 1, complete: 1})x[d](n[d]);
        if (u = ob(Ia, n, b, x)) {
            x.readyState = 1;
            p && y.trigger("ajaxSend", [x, n]);
            n.async && 0 < n.timeout && (h = setTimeout(function () {
                    x.abort("timeout")
                },
                n.timeout));
            try {
                D = 1, u.send(w, e)
            } catch (C) {
                if (!(2 > D))throw C;
                e(-1, C)
            }
        } else e(-1, "No Transport");
        return x
    }, getJSON: function (a, b, e) {
        return c.get(a, b, e, "json")
    }, getScript: function (a, b) {
        return c.get(a, void 0, b, "script")
    }});
    c.each(["get", "post"], function (a, b) {
        c[b] = function (a, f, d, k) {
            return c.isFunction(f) && (k = k || d, d = f, f = void 0), c.ajax({url: a, type: b, dataType: k, data: f, success: d})
        }
    });
    c._evalUrl = function (a) {
        return c.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    c.fn.extend({wrapAll: function (a) {
        if (c.isFunction(a))return this.each(function (b) {
            c(this).wrapAll(a.call(this,
                b))
        });
        if (this[0]) {
            var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]);
            b.map(function () {
                for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                return a
            }).append(this)
        }
        return this
    }, wrapInner: function (a) {
        return this.each(c.isFunction(a) ? function (b) {
            c(this).wrapInner(a.call(this, b))
        } : function () {
            var b = c(this), e = b.contents();
            e.length ? e.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = c.isFunction(a);
        return this.each(function (e) {
            c(this).wrapAll(b ?
                a.call(this, e) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
        }).end()
    }});
    c.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !v.reliableHiddenOffsets() && "none" === (a.style && a.style.display || c.css(a, "display"))
    };
    c.expr.filters.visible = function (a) {
        return!c.expr.filters.hidden(a)
    };
    var Cc = /%20/g, Wb = /\[\]$/, Lb = /\r?\n/g, Dc = /^(?:submit|button|image|reset|file)$/i, Ec = /^(?:input|select|textarea|keygen)/i;
    c.param =
        function (a, b) {
            var e, f = [], d = function (a, b) {
                b = c.isFunction(b) ? b() : null == b ? "" : b;
                f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = c.ajaxSettings && c.ajaxSettings.traditional), c.isArray(a) || a.jquery && !c.isPlainObject(a))c.each(a, function () {
                d(this.name, this.value)
            }); else for (e in a)Ka(e, a[e], b, d);
            return f.join("&").replace(Cc, "+")
        };
    c.fn.extend({serialize: function () {
        return c.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var a = c.prop(this, "elements");
            return a ? c.makeArray(a) : this
        }).filter(function () {
            var a = this.type;
            return this.name && !c(this).is(":disabled") && Ec.test(this.nodeName) && !Dc.test(a) && (this.checked || !Ga.test(a))
        }).map(function (a, b) {
            var e = c(this).val();
            return null == e ? null : c.isArray(e) ? c.map(e, function (a) {
                return{name: b.name, value: a.replace(Lb, "\r\n")}
            }) : {name: b.name, value: e.replace(Lb, "\r\n")}
        }).get()
    }});
    c.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function () {
        var a;
        if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) &&
            pb()))a:{
            try {
                a = new h.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {
            }
            a = void 0
        }
        return a
    } : pb;
    var Fc = 0, Ea = {}, Fa = c.ajaxSettings.xhr();
    h.attachEvent && h.attachEvent("onunload", function () {
        for (var a in Ea)Ea[a](void 0, !0)
    });
    v.cors = !!Fa && "withCredentials"in Fa;
    (Fa = v.ajax = !!Fa) && c.ajaxTransport(function (a) {
        if (!a.crossDomain || v.cors) {
            var b;
            return{send: function (e, f) {
                var d, k = a.xhr(), l = ++Fc;
                if (k.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (d in a.xhrFields)k[d] = a.xhrFields[d];
                a.mimeType &&
                k.overrideMimeType && k.overrideMimeType(a.mimeType);
                a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (d in e)void 0 !== e[d] && k.setRequestHeader(d, e[d] + "");
                k.send(a.hasContent && a.data || null);
                b = function (e, d) {
                    var g, h, p;
                    if (b && (d || 4 === k.readyState))if (delete Ea[l], b = void 0, k.onreadystatechange = c.noop, d)4 !== k.readyState && k.abort(); else {
                        p = {};
                        g = k.status;
                        "string" == typeof k.responseText && (p.text = k.responseText);
                        try {
                            h = k.statusText
                        } catch (t) {
                            h = ""
                        }
                        g || !a.isLocal || a.crossDomain ? 1223 ===
                            g && (g = 204) : g = p.text ? 200 : 404
                    }
                    p && f(g, h, p, k.getAllResponseHeaders())
                };
                a.async ? 4 === k.readyState ? setTimeout(b) : k.onreadystatechange = Ea[l] = b : b()
            }, abort: function () {
                b && b(void 0, !0)
            }}
        }
    });
    c.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (a) {
        return c.globalEval(a), a
    }}});
    c.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET",
            a.global = !1)
    });
    c.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, e = w.head || c("head")[0] || w.documentElement;
            return{send: function (c, d) {
                b = w.createElement("script");
                b.async = !0;
                a.scriptCharset && (b.charset = a.scriptCharset);
                b.src = a.url;
                b.onload = b.onreadystatechange = function (a, c) {
                    (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || d(200, "success"))
                };
                e.insertBefore(b, e.firstChild)
            }, abort: function () {
                b &&
                b.onload(void 0, !0)
            }}
        }
    });
    var Mb = [], Ua = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var a = Mb.pop() || c.expando + "_" + Sa++;
        return this[a] = !0, a
    }});
    c.ajaxPrefilter("json jsonp", function (a, b, e) {
        var f, d, k, l = !1 !== a.jsonp && (Ua.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Ua.test(a.data) && "data");
        return l || "jsonp" === a.dataTypes[0] ? (f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, l ?
            a[l] = a[l].replace(Ua, "$1" + f) : !1 !== a.jsonp && (a.url += (Ta.test(a.url) ? "&" : "?") + a.jsonp + "=" + f), a.converters["script json"] = function () {
            return k || c.error(f + " was not called"), k[0]
        }, a.dataTypes[0] = "json", d = h[f], h[f] = function () {
            k = arguments
        }, e.always(function () {
            h[f] = d;
            a[f] && (a.jsonpCallback = b.jsonpCallback, Mb.push(f));
            k && c.isFunction(d) && d(k[0]);
            k = d = void 0
        }), "script") : void 0
    });
    c.parseHTML = function (a, b, e) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (e = b, b = !1);
        b = b || w;
        var f = vb.exec(a);
        e = !e && [];
        return f ? [b.createElement(f[1])] : (f = c.buildFragment([a], b, e), e && e.length && c(e).remove(), c.merge([], f.childNodes))
    };
    var Nb = c.fn.load;
    c.fn.load = function (a, b, e) {
        if ("string" != typeof a && Nb)return Nb.apply(this, arguments);
        var f, d, k, l = this, h = a.indexOf(" ");
        return 0 <= h && (f = c.trim(a.slice(h, a.length)), a = a.slice(0, h)), c.isFunction(b) ? (e = b, b = void 0) : b && "object" == typeof b && (k = "POST"), 0 < l.length && c.ajax({url: a, type: k, dataType: "html", data: b}).done(function (a) {
            d = arguments;
            l.html(f ? c("<div>").append(c.parseHTML(a)).find(f) :
                a)
        }).complete(e && function (a, b) {
            l.each(e, d || [a.responseText, b, a])
        }), this
    };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        c.fn[b] = function (a) {
            return this.on(b, a)
        }
    });
    c.expr.filters.animated = function (a) {
        return c.grep(c.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ob = h.document.documentElement;
    c.offset = {setOffset: function (a, b, e) {
        var f, d, k, l, h, p, t = c.css(a, "position"), n = c(a), u = {};
        "static" === t && (a.style.position = "relative");
        h = n.offset();
        k = c.css(a, "top");
        p = c.css(a, "left");
        ("absolute" === t || "fixed" === t) && -1 < c.inArray("auto", [k, p]) ? (f = n.position(), l = f.top, d = f.left) : (l = parseFloat(k) || 0, d = parseFloat(p) || 0);
        c.isFunction(b) && (b = b.call(a, e, h));
        null != b.top && (u.top = b.top - h.top + l);
        null != b.left && (u.left = b.left - h.left + d);
        "using"in b ? b.using.call(a, u) : n.css(u)
    }};
    c.fn.extend({offset: function (a) {
        if (arguments.length)return void 0 === a ? this : this.each(function (b) {
            c.offset.setOffset(this, a, b)
        });
        var b, e, f = {top: 0, left: 0}, d = this[0], k = d && d.ownerDocument;
        if (k)return b = k.documentElement,
            c.contains(b, d) ? ("undefined" !== typeof d.getBoundingClientRect && (f = d.getBoundingClientRect()), e = qb(k), {top: f.top + (e.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: f.left + (e.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)}) : f
    }, position: function () {
        if (this[0]) {
            var a, b, e = {top: 0, left: 0}, f = this[0];
            return"fixed" === c.css(f, "position") ? b = f.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), c.nodeName(a[0], "html") || (e = a.offset()), e.top += c.css(a[0], "borderTopWidth", !0), e.left += c.css(a[0], "borderLeftWidth",
                !0)), {top: b.top - e.top - c.css(f, "marginTop", !0), left: b.left - e.left - c.css(f, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var a = this.offsetParent || Ob; a && !c.nodeName(a, "html") && "static" === c.css(a, "position");)a = a.offsetParent;
            return a || Ob
        })
    }});
    c.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var e = /Y/.test(b);
        c.fn[a] = function (f) {
            return J(this, function (a, f, d) {
                var k = qb(a);
                return void 0 === d ? k ? b in k ? k[b] : k.document.documentElement[f] : a[f] : void(k ? k.scrollTo(e ?
                    c(k).scrollLeft() : d, e ? d : c(k).scrollTop()) : a[f] = d)
            }, a, f, arguments.length, null)
        }
    });
    c.each(["top", "left"], function (a, b) {
        c.cssHooks[b] = db(v.pixelPosition, function (a, f) {
            return f ? (f = W(a, b), ta.test(f) ? c(a).position()[b] + "px" : f) : void 0
        })
    });
    c.each({Height: "height", Width: "width"}, function (a, b) {
        c.each({padding: "inner" + a, content: b, "": "outer" + a}, function (e, f) {
            c.fn[f] = function (f, d) {
                var k = arguments.length && (e || "boolean" != typeof f), l = e || (!0 === f || !0 === d ? "margin" : "border");
                return J(this, function (b, e, f) {
                    var d;
                    return c.isWindow(b) ?
                        b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement, Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === f ? c.css(b, e, l) : c.style(b, e, f, l)
                }, b, k ? f : void 0, k, null)
            }
        })
    });
    c.fn.size = function () {
        return this.length
    };
    c.fn.andSelf = c.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return c
    });
    var Gc = h.jQuery, Hc = h.$;
    return c.noConflict = function (a) {
        return h.$ === c && (h.$ = Hc), a && h.jQuery === c && (h.jQuery = Gc), c
    }, "undefined" === typeof q && (h.jQuery = h.$ = c), c
});
BOOMR_start = (new Date).getTime();
function BOOMR_check_doc_domain(h) {
    if (!h) {
        if (window.parent === window || !document.getElementById("boomr-if-as"))return;
        h = document.domain
    }
    h.indexOf(".")
}
BOOMR_check_doc_domain();
(function (h) {
    var q, d, l, p, n, A;
    h.parent !== h && document.getElementById("boomr-if-as") && "script" === document.getElementById("boomr-if-as").nodeName.toLowerCase() && (h = h.parent, p = document.getElementById("boomr-if-as").src);
    l = h.document;
    h.BOOMR || (h.BOOMR = {});
    BOOMR = h.BOOMR;
    BOOMR.version || (BOOMR.version = "0.9", BOOMR.window = h, BOOMR.plugins || (BOOMR.plugins = {}), function () {
        try {
            void 0 !== new h.CustomEvent("CustomEvent") && (n = function (d, k) {
                return new h.CustomEvent(d, k)
            })
        } catch (d) {
        }
        try {
            !n && l.createEvent && l.createEvent("CustomEvent") &&
            (n = function (d, k) {
                var h = l.createEvent("CustomEvent");
                k = k || {cancelable: !1, bubbles: !1};
                h.initCustomEvent(d, k.bubbles, k.cancelable, k.detail);
                return h
            })
        } catch (p) {
        }
        !n && l.createEventObject && (n = function (d, k) {
            var h = l.createEventObject();
            h.type = h.propertyName = d;
            h.detail = k.detail;
            return h
        });
        n || (n = function () {
        })
    }(), A = function (d, h) {
        var p = n(d, {detail: h});
        p && BOOMR.setImmediate(function () {
            l.dispatchEvent ? l.dispatchEvent(p) : l.fireEvent && l.fireEvent("onpropertychange", p)
        })
    }, q = {beacon_url: "", beacon_type: "AUTO", site_domain: h.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,
        "$1").toLowerCase(), user_ip: "", strip_query_string: !1, onloadfired: !1, handlers_attached: !1, events: {page_ready: [], page_unload: [], dom_loaded: [], visibility_changed: [], before_beacon: [], onbeacon: [], xhr_load: [], click: [], form_submit: []}, public_events: {before_beacon: "onBeforeBoomerangBeacon", onbeacon: "onBoomerangBeacon", onboomerangloaded: "onBoomerangLoaded"}, vars: {}, errors: {}, disabled_plugins: {}, xb_handler: function (d) {
        return function (l) {
            var p;
            l || (l = h.event);
            l.target ? p = l.target : l.srcElement && (p = l.srcElement);
            3 === p.nodeType && (p = p.parentNode);
            p && "OBJECT" === p.nodeName.toUpperCase() && "application/x-shockwave-flash" === p.type || q.fireEvent(d, p)
        }
    }, fireEvent: function (d, l) {
        var h, p, n;
        d = d.toLowerCase();
        if (!this.events.hasOwnProperty(d))return!1;
        this.public_events.hasOwnProperty(d) && A(this.public_events[d], l);
        n = this.events[d];
        for (h = 0; h < n.length; h++)try {
            p = n[h], p.fn.call(p.scope, l, p.cb_data)
        } catch (q) {
            BOOMR.addError(q, "fireEvent." + d)
        }
        return!0
    }}, d = {t_lstart: null, t_start: BOOMR_start, t_end: null, url: p, utils: {objectToString: function (d, l, h) {
        var p = [], n;
        if (!d || "object" !== typeof d)return d;
        void 0 === l && (l = "\n\t");
        h || (h = 0);
        if ("[object Array]" === Object.prototype.toString.call(d)) {
            for (n = 0; n < d.length; n++)0 < h && null !== d[n] && "object" === typeof d[n] ? p.push(this.objectToString(d[n], l + ("\n\t" === l ? "\t" : ""), h - 1)) : p.push(encodeURIComponent(d[n]));
            l = ","
        } else for (n in d)Object.prototype.hasOwnProperty.call(d, n) && (0 < h && null !== d[n] && "object" === typeof d[n] ? p.push(encodeURIComponent(n) + "=" + this.objectToString(d[n], l + ("\n\t" === l ? "\t" : ""), h - 1)) : p.push(encodeURIComponent(n) +
            "=" + encodeURIComponent(d[n])));
        return p.join(l)
    }, getCookie: function (d) {
        if (!d)return null;
        d = " " + d + "=";
        var h, p;
        p = " " + l.cookie + ";";
        return 0 <= (h = p.indexOf(d)) ? (h += d.length, p = p.substring(h, p.indexOf(";", h))) : null
    }, setCookie: function (d, h, p) {
        var n, y, A;
        if (!d || !q.site_domain)return BOOMR.debug("No cookie name or site domain: " + d + "/" + q.site_domain), !1;
        h = this.objectToString(h, "&");
        n = d + "=" + h;
        y = [n, "path=/", "domain=" + q.site_domain];
        p && (A = new Date, A.setTime(A.getTime() + 1E3 * p), A = A.toGMTString(), y.push("expires=" +
            A));
        if (500 > n.length) {
            l.cookie = y.join("; ");
            d = this.getCookie(d);
            if (h === d)return!0;
            BOOMR.warn("Saved cookie value doesn't match what we tried to set:\n" + h + "\n" + d)
        } else BOOMR.warn("Cookie too long: " + n.length + " " + n);
        return!1
    }, getSubCookies: function (d) {
        var l, h, p, n = !1, q = {};
        if (!d)return null;
        if ("string" !== typeof d)return BOOMR.debug("TypeError: cookie is not a string: " + typeof d), null;
        d = d.split("&");
        l = 0;
        for (h = d.length; l < h; l++)p = d[l].split("="), p[0] && (p.push(""), q[decodeURIComponent(p[0])] = decodeURIComponent(p[1]),
            n = !0);
        return n ? q : null
    }, removeCookie: function (d) {
        return this.setCookie(d, {}, -86400)
    }, cleanupURL: function (d) {
        return d ? q.strip_query_string ? d.replace(/\?.*/, "?qs-redacted") : d : ""
    }, hashQueryString: function (d, l) {
        if (!d)return d;
        d.match(/^\/\//) && (d = location.protocol + d);
        if (!d.match(/^(https?|file):/))return BOOMR.error("Passed in URL is invalid: " + d), "";
        l && (d = d.replace(/#.*/, ""));
        return BOOMR.utils.MD5 ? d.replace(/\?([^#]*)/, function (d, k) {
            return"?" + (10 < k.length ? BOOMR.utils.MD5(k) : k)
        }) : d
    }, pluginConfig: function (d, l, h, p) {
        var n, q = 0;
        if (!l || !l[h])return!1;
        for (n = 0; n < p.length; n++)void 0 !== l[h][p[n]] && (d[p[n]] = l[h][p[n]], q++);
        return 0 < q
    }, addListener: function (d, l, h) {
        d.addEventListener ? d.addEventListener(l, h, !1) : d.attachEvent && d.attachEvent("on" + l, h)
    }, removeListener: function (d, l, h) {
        d.removeEventListener ? d.removeEventListener(l, h, !1) : d.detachEvent && d.detachEvent("on" + l, h)
    }, pushVars: function (d, l, h) {
        var p, n, q = 0;
        for (p in l)if (l.hasOwnProperty(p))if ("[object Array]" === Object.prototype.toString.call(l[p]))for (n = 0; n < l[p].length; ++n)q +=
            BOOMR.utils.pushVars(d, l[p][n], p + "[" + n + "]"); else++q, d.push(encodeURIComponent(h ? h + "[" + p + "]" : p) + "=" + (void 0 === l[p] || null === l[p] ? "" : encodeURIComponent(l[p])));
        return q
    }, postData: function (d) {
        var l = document.createElement("iframe"), h = document.createElement("form"), p = document.createElement("input");
        l.name = "boomerang_post";
        l.style.display = h.style.display = "none";
        h.method = "POST";
        h.action = q.beacon_url;
        h.target = l.name;
        p.name = "data";
        window.JSON ? (h.enctype = "text/plain", p.value = JSON.stringify(q.vars)) : (h.enctype =
            "application/x-www-form-urlencoded", p.value = d);
        document.body.appendChild(l);
        h.appendChild(p);
        document.body.appendChild(h);
        BOOMR.utils.addListener(l, "load", function () {
            document.body.removeChild(h);
            document.body.removeChild(l)
        });
        h.submit()
    }}, init: function (k) {
        var p, n, A = ["beacon_url", "beacon_type", "site_domain", "user_ip", "strip_query_string"];
        BOOMR_check_doc_domain();
        k || (k = {});
        for (p = 0; p < A.length; p++)void 0 !== k[A[p]] && (q[A[p]] = k[A[p]]);
        void 0 !== k.log && (this.log = k.log);
        this.log || (this.log = function () {
        });
        for (n in this.plugins)if (this.plugins.hasOwnProperty(n))if (k[n] && k[n].hasOwnProperty("enabled") && !1 === k[n].enabled)q.disabled_plugins[n] = 1; else if (q.disabled_plugins[n] && delete q.disabled_plugins[n], "function" === typeof this.plugins[n].init)try {
            this.plugins[n].init(k)
        } catch (y) {
            BOOMR.addError(y, n + ".init")
        }
        if (q.handlers_attached)return this;
        q.onloadfired || void 0 !== k.autorun && !1 === k.autorun || (l.readyState && "complete" === l.readyState ? this.setImmediate(BOOMR.page_ready, null, null, BOOMR) : h.onpagehide || null ===
            h.onpagehide ? d.utils.addListener(h, "pageshow", BOOMR.page_ready) : d.utils.addListener(h, "load", BOOMR.page_ready));
        d.utils.addListener(h, "DOMContentLoaded", function () {
            q.fireEvent("dom_loaded")
        });
        (function () {
            var k, p;
            k = function () {
                q.fireEvent("visibility_changed")
            };
            l.webkitVisibilityState ? d.utils.addListener(l, "webkitvisibilitychange", k) : l.msVisibilityState ? d.utils.addListener(l, "msvisibilitychange", k) : l.visibilityState && d.utils.addListener(l, "visibilitychange", k);
            d.utils.addListener(l, "mouseup", q.xb_handler("click"));
            k = l.getElementsByTagName("form");
            for (p = 0; p < k.length; p++)d.utils.addListener(k[p], "submit", q.xb_handler("form_submit"));
            h.onpagehide || null === h.onpagehide || d.utils.addListener(h, "unload", function () {
                BOOMR.window = h = null
            })
        })();
        q.handlers_attached = !0;
        return this
    }, page_ready: function (d) {
        d || (d = h.event);
        d || (d = {name: "load"});
        if (q.onloadfired)return this;
        q.fireEvent("page_ready", d);
        q.onloadfired = !0;
        return this
    }, setImmediate: function (d, l, p, n) {
        var q = function () {
            d.call(n || null, l, p || {});
            q = null
        };
        h.setImmediate ? h.setImmediate(q) :
            h.msSetImmediate ? h.msSetImmediate(q) : h.webkitSetImmediate ? h.webkitSetImmediate(q) : h.mozSetImmediate ? h.mozSetImmediate(q) : setTimeout(q, 10)
    }, subscribe: function (k, l, p, n) {
        var A, F, D;
        k = k.toLowerCase();
        if (!q.events.hasOwnProperty(k))return this;
        D = q.events[k];
        for (A = 0; A < D.length; A++)if (F = D[A], F.fn === l && F.cb_data === p && F.scope === n)return this;
        D.push({fn: l, cb_data: p || {}, scope: n || null});
        "page_ready" === k && q.onloadfired && this.setImmediate(l, null, p, n);
        "page_unload" === k && (k = function (d) {
            l && l.call(n, d || h.event, p)
        },
                h.onpagehide || null === h.onpagehide ? d.utils.addListener(h, "pagehide", k) : d.utils.addListener(h, "unload", k), d.utils.addListener(h, "beforeunload", k));
        return this
    }, addError: function (d, l) {
        "string" !== typeof d && (d = String(d));
        void 0 !== l && (d = "[" + l + ":" + (new Date).getTime() + "] " + d);
        q.errors[d] ? q.errors[d]++ : q.errors[d] = 1
    }, addVar: function (d, l) {
        if ("string" === typeof d)q.vars[d] = l; else if ("object" === typeof d)for (var h in d)d.hasOwnProperty(h) && (q.vars[h] = d[h]);
        return this
    }, removeVar: function (d) {
        var l, h;
        if (!arguments.length)return this;
        h = 1 === arguments.length && "[object Array]" === Object.prototype.toString.apply(d) ? d : arguments;
        for (l = 0; l < h.length; l++)q.vars.hasOwnProperty(h[l]) && delete q.vars[h[l]];
        return this
    }, requestStart: function (d) {
        var l = (new Date).getTime();
        BOOMR.plugins.RT.startTimer("xhr_" + d, l);
        return{loaded: function (h) {
            BOOMR.responseEnd(d, l, h)
        }}
    }, responseEnd: function (d, l, h) {
        BOOMR.plugins.RT.startTimer("xhr_" + d, l);
        q.fireEvent("xhr_load", {name: "xhr_" + d, data: h})
    }, sendBeacon: function () {
        var d, p;
        p = [];
        BOOMR.debug("Checking if we can send beacon");
        for (d in this.plugins)if (this.plugins.hasOwnProperty(d) && !q.disabled_plugins[d] && !this.plugins[d].is_complete())return BOOMR.debug("Plugin " + d + " is not complete, deferring beacon send"), !1;
        q.vars.v = BOOMR.version;
        q.vars.u = BOOMR.utils.cleanupURL(l.URL.replace(/#.*/, ""));
        h !== window && (q.vars["if"] = "");
        for (d in q.errors)q.errors.hasOwnProperty(d) && p.push(d + (1 < q.errors[d] ? " (*" + q.errors[d] + ")" : ""));
        0 < p.length && (q.vars.errors = p.join("\n"));
        q.errors = {};
        q.fireEvent("before_beacon", q.vars);
        if (!q.beacon_url)return BOOMR.debug("No beacon_url, but would have sent: " +
            BOOMR.utils.objectToString(q.vars)), !0;
        d = [];
        p = BOOMR.utils.pushVars(d, q.vars);
        this.setImmediate(q.fireEvent, "onbeacon", q.vars, q);
        if (!p)return this;
        d = d.join("&");
        "POST" === q.beacon_type ? BOOMR.utils.postData(d) : (p = q.beacon_url + (-1 < q.beacon_url.indexOf("?") ? "&" : "?") + d, 2E3 < p.length && "AUTO" === q.beacon_type ? BOOMR.utils.postData(d) : (BOOMR.debug("Sending url: " + p.replace(/&/g, "\n\t")), d = new Image, d.src = p));
        return!0
    }}, delete BOOMR_start, "number" === typeof BOOMR_lstart ? (d.t_lstart = BOOMR_lstart, delete BOOMR_lstart) :
        "number" === typeof BOOMR.window.BOOMR_lstart && (d.t_lstart = BOOMR.window.BOOMR_lstart), function () {
        var l;
        h.YAHOO && h.YAHOO.widget && h.YAHOO.widget.Logger ? d.log = h.YAHOO.log : h.Y && h.Y.log ? d.log = h.Y.log : "object" === typeof console && void 0 !== console.log && (d.log = function (d, l, k) {
            console.log(k + ": [" + l + "] " + d)
        });
        l = function (d) {
            return function (l, k) {
                this.log(l, d, "boomerang" + (k ? "." + k : ""));
                return this
            }
        };
        d.debug = l("debug");
        d.info = l("info");
        d.warn = l("warn");
        d.error = l("error")
    }(), function () {
        for (var l in d)d.hasOwnProperty(l) &&
        (BOOMR[l] = d[l])
    }(), BOOMR.plugins = BOOMR.plugins || {}, A("onBoomerangLoaded", {BOOMR: BOOMR}))
})(window);
(function (h) {
    var q = h.document, d;
    BOOMR = BOOMR || {};
    BOOMR.plugins = BOOMR.plugins || {};
    BOOMR.plugins.RT || (d = {onloadfired: !1, unloadfired: !1, visiblefired: !1, initialized: !1, complete: !1, timers: {}, cookie: "RT", cookie_exp: 600, strict_referrer: !0, navigationType: 0, navigationStart: void 0, responseStart: void 0, t_start: void 0, cached_t_start: void 0, t_fb_approx: void 0, r: void 0, r2: void 0, basic_timers: {t_done: 1, t_resp: 1, t_page: 1}, updateCookie: function (d, h) {
        var n, q;
        if (!this.cookie)return!1;
        n = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)) ||
        {};
        if ("object" === typeof d)for (q in d)if (d.hasOwnProperty(q))if (void 0 === d[q])n.hasOwnProperty(q) && delete n[q]; else {
            if ("nu" === q || "r" === q)d[q] = BOOMR.utils.hashQueryString(d[q], !0);
            n[q] = d[q]
        }
        q = (new Date).getTime();
        h && (n[h] = q);
        BOOMR.debug("Setting cookie (timer=" + h + ")\n" + BOOMR.utils.objectToString(n), "rt");
        if (!BOOMR.utils.setCookie(this.cookie, n, this.cookie_exp))return BOOMR.error("cannot set start cookie", "rt"), !1;
        n = (new Date).getTime();
        50 < n - q && (BOOMR.utils.removeCookie(this.cookie), BOOMR.error("took more than 50ms to set cookie... aborting: " +
            q + " -> " + n, "rt"));
        return!0
    }, initFromCookie: function () {
        var d, h;
        if (h = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)))h.s = Math.max(+h.ul || 0, +h.cl || 0), BOOMR.debug("Read from cookie " + BOOMR.utils.objectToString(h), "rt"), h.s && (h.r || h.nu) && (this.r = h.r, d = BOOMR.utils.hashQueryString(q.URL, !0), BOOMR.debug(this.r + " =?= " + this.r2, "rt"), BOOMR.debug(h.s + " <? " + (+h.cl + 15), "rt"), BOOMR.debug(h.nu + " =?= " + d, "rt"), !this.strict_referrer || h.nu && h.nu === d && h.s < +h.cl + 15 || h.s === +h.ul && this.r === this.r2 ? (this.t_start =
            h.s, +h.hd > h.s && (this.t_fb_approx = parseInt(h.hd, 10))) : this.t_start = this.t_fb_approx = void 0), this.updateCookie({s: void 0, r: void 0, nu: void 0, ul: void 0, cl: void 0, hd: void 0})
    }, getBoomerangTimings: function () {
        var d, h, n, q;
        BOOMR.t_start && (BOOMR.plugins.RT.startTimer("boomerang", BOOMR.t_start), BOOMR.plugins.RT.endTimer("boomerang", BOOMR.t_end), BOOMR.plugins.RT.endTimer("boomr_fb", BOOMR.t_start), BOOMR.t_lstart && (BOOMR.plugins.RT.endTimer("boomr_ld", BOOMR.t_lstart), BOOMR.plugins.RT.setTimer("boomr_lat", BOOMR.t_start -
            BOOMR.t_lstart)));
        try {
            if (window.performance && window.performance.getEntriesByName)for (q in n = {"rt.bmr.": BOOMR.url}, n)if (n.hasOwnProperty(q) && n[q] && (d = window.performance.getEntriesByName(n[q])) && 0 !== d.length)for (h in d = d[0], d)d.hasOwnProperty(h) && h.match(/(Start|End)$/) && 0 < d[h] && BOOMR.addVar(q + h.replace(/^(...).*(St|En).*$/, "$1$2"), d[h])
        } catch (k) {
            BOOMR.addError(k, "rt.getBoomerangTimings")
        }
    }, checkPreRender: function () {
        if (!(q.visibilityState && "prerender" === q.visibilityState || q.msVisibilityState && 3 === q.msVisibilityState))return!1;
        BOOMR.plugins.RT.startTimer("t_load", this.navigationStart);
        BOOMR.plugins.RT.endTimer("t_load");
        BOOMR.plugins.RT.startTimer("t_prerender", this.navigationStart);
        BOOMR.plugins.RT.startTimer("t_postrender");
        BOOMR.subscribe("visibility_changed", BOOMR.plugins.RT.done, "visible", BOOMR.plugins.RT);
        return!0
    }, initFromNavTiming: function () {
        var d, p, n;
        this.navigationStart || ((p = h.performance || h.msPerformance || h.webkitPerformance || h.mozPerformance) && p.navigation && (this.navigationType = p.navigation.type), p && p.timing ?
            d = p.timing : h.chrome && h.chrome.csi && h.chrome.csi().startE ? (d = {navigationStart: h.chrome.csi().startE}, n = "csi") : h.gtbExternal && h.gtbExternal.startE() && (d = {navigationStart: h.gtbExternal.startE()}, n = "gtb"), d ? (BOOMR.addVar("rt.start", n || "navigation"), this.navigationStart = d.navigationStart || d.fetchStart || void 0, this.responseStart = d.responseStart || void 0, navigator.userAgent.match(/Firefox\/[78]\./) && (this.navigationStart = d.unloadEventStart || d.fetchStart || void 0)) : BOOMR.warn("This browser doesn't support the WebTiming API",
            "rt"))
    }, setPageLoadTimers: function (l) {
        d.initFromCookie();
        d.initFromNavTiming();
        if (d.checkPreRender())return!1;
        d.responseStart ? (BOOMR.plugins.RT.endTimer("t_resp", d.responseStart), d.timers.t_load ? BOOMR.plugins.RT.setTimer("t_page", d.timers.t_load.end - d.responseStart) : BOOMR.plugins.RT.setTimer("t_page", l - d.responseStart)) : d.timers.hasOwnProperty("t_page") ? BOOMR.plugins.RT.endTimer("t_page") : d.t_fb_approx && (BOOMR.plugins.RT.endTimer("t_resp", d.t_fb_approx), BOOMR.plugins.RT.setTimer("t_page", l - d.t_fb_approx));
        d.timers.hasOwnProperty("t_postrender") && (BOOMR.plugins.RT.endTimer("t_postrender"), BOOMR.plugins.RT.endTimer("t_prerender"));
        return!0
    }, setSupportingTimestamps: function (l) {
        BOOMR.addVar("rt.tstart", l);
        "number" === typeof d.t_start && d.t_start !== l && BOOMR.addVar("rt.cstart", d.t_start);
        BOOMR.addVar("rt.bstart", BOOMR.t_start);
        BOOMR.t_lstart && BOOMR.addVar("rt.blstart", BOOMR.t_lstart);
        BOOMR.addVar("rt.end", d.timers.t_done.end)
    }, determineTStart: function (l, h) {
        var n;
        "xhr" === l && h && d.timers[h] ? (n = d.timers[h].start,
            BOOMR.addVar("rt.start", "manual")) : d.navigationStart ? n = d.navigationStart : d.t_start && 2 !== d.navigationType ? (n = d.t_start, BOOMR.addVar("rt.start", "cookie")) : d.cached_t_start ? n = d.cached_t_start : (BOOMR.addVar("rt.start", "none"), n = void 0);
        BOOMR.debug("Got start time: " + n, "rt");
        return d.cached_t_start = n
    }, page_ready: function () {
        this.onloadfired = !0
    }, visibility_changed: function () {
        q.hidden || q.msHidden || q.webkitHidden || (d.visiblefired = !0)
    }, page_unload: function (d) {
        BOOMR.debug("Unload called with " + BOOMR.utils.objectToString(d) +
            " when unloadfired = " + this.unloadfired, "rt");
        this.unloadfired || BOOMR.plugins.RT.done(d, "unload");
        this.updateCookie({r: q.URL}, "beforeunload" === d.type ? "ul" : "hd");
        this.unloadfired = !0
    }, _iterable_click: function (d, h, n, q) {
        if (n) {
            for (BOOMR.debug(d + " called with " + n.nodeName, "rt"); n && n.nodeName.toUpperCase() !== h;)n = n.parentNode;
            n && n.nodeName.toUpperCase() === h && (BOOMR.debug("passing through", "rt"), d = q(n), this.updateCookie({nu: d}, "cl"), BOOMR.addVar("nu", BOOMR.utils.cleanupURL(d)))
        }
    }, onclick: function (l) {
        d._iterable_click("Click",
            "A", l, function (d) {
                return d.href
            })
    }, onsubmit: function (l) {
        d._iterable_click("Submit", "FORM", l, function (d) {
            d = d.action || q.URL || "";
            return d.match(/\?/) ? d : d + "?"
        })
    }, domloaded: function () {
        BOOMR.plugins.RT.endTimer("t_domloaded")
    }}, BOOMR.plugins.RT = {init: function (l) {
        BOOMR.debug("init RT", "rt");
        h !== BOOMR.window && (h = BOOMR.window);
        q = h.document;
        BOOMR.utils.pluginConfig(d, l, "RT", ["cookie", "cookie_exp", "strict_referrer"]);
        d.r = d.r2 = BOOMR.utils.hashQueryString(q.referrer, !0);
        d.initFromCookie();
        d.getBoomerangTimings();
        if (d.initialized)return this;
        d.complete = !1;
        d.timers = {};
        BOOMR.subscribe("page_ready", d.page_ready, null, d);
        d.visiblefired = !(q.hidden || q.msHidden || q.webkitHidden);
        d.visiblefired || BOOMR.subscribe("visibility_changed", d.visibility_changed, null, d);
        BOOMR.subscribe("page_ready", this.done, "load", this);
        BOOMR.subscribe("xhr_load", this.done, "xhr", this);
        BOOMR.subscribe("dom_loaded", d.domloaded, null, d);
        BOOMR.subscribe("page_unload", d.page_unload, null, d);
        BOOMR.subscribe("click", d.onclick, null, d);
        BOOMR.subscribe("form_submit",
            d.onsubmit, null, d);
        BOOMR.subscribe("before_beacon", this.addTimersToBeacon, "beacon", this);
        d.initialized = !0;
        return this
    }, startTimer: function (l, h) {
        l && ("t_page" === l && this.endTimer("t_resp", h), d.timers[l] = {start: "number" === typeof h ? h : (new Date).getTime()});
        return this
    }, endTimer: function (l, h) {
        l && (d.timers[l] = d.timers[l] || {}, void 0 === d.timers[l].end && (d.timers[l].end = "number" === typeof h ? h : (new Date).getTime()));
        return this
    }, setTimer: function (l, h) {
        l && (d.timers[l] = {delta: h});
        return this
    }, addTimersToBeacon: function (l, h) {
        var n, q, k = [];
        for (n in d.timers)d.timers.hasOwnProperty(n) && (q = d.timers[n], "number" !== typeof q.delta && ("number" !== typeof q.start && (q.start = d.cached_t_start), q.delta = q.end - q.start), isNaN(q.delta) || (d.basic_timers.hasOwnProperty(n) ? BOOMR.addVar(n, q.delta) : k.push(n + "|" + q.delta)));
        k.length && BOOMR.addVar("t_other", k.join(","));
        "beacon" === h && (d.timers = {}, d.complete = !1)
    }, done: function (l, h) {
        BOOMR.debug("Called done with " + BOOMR.utils.objectToString(l) + ", " + h, "rt");
        var n, q = (new Date).getTime(), k = !1;
        d.complete = !1;
        if (("load" === h || "visible" === h) && !d.setPageLoadTimers(q))return this;
        "xhr" === h && l && l.data && (k = l.data.subresource);
        n = d.determineTStart(h, l ? l.name : null);
        this.endTimer("t_done", q);
        BOOMR.removeVar("t_done", "t_page", "t_resp", "t_postrender", "t_prerender", "t_load", "t_other", "r", "r2", "rt.tstart", "rt.cstart", "rt.bstart", "rt.end", "rt.subres", "rt.abld");
        d.setSupportingTimestamps(n);
        this.addTimersToBeacon();
        "xhr" !== h && (BOOMR.addVar("r", BOOMR.utils.cleanupURL(d.r)), d.r2 !== d.r && BOOMR.addVar("r2", BOOMR.utils.cleanupURL(d.r2)));
        k && BOOMR.addVar("rt.subres", 1);
        d.updateCookie();
        "unload" === h && (BOOMR.addVar("rt.quit", ""), d.onloadfired || BOOMR.addVar("rt.abld", ""), d.visiblefired || BOOMR.addVar("rt.ntvu", ""));
        d.complete = !0;
        BOOMR.sendBeacon();
        return this
    }, is_complete: function () {
        return d.complete
    }})
})(window);
(function () {
    var h, q;
    BOOMR = BOOMR || {};
    BOOMR.plugins = BOOMR.plugins || {};
    BOOMR.plugins.BW || (q = [
        {name: "image-0.png", size: 11483, timeout: 1400},
        {name: "image-1.png", size: 40658, timeout: 1200},
        {name: "image-2.png", size: 164897, timeout: 1300},
        {name: "image-3.png", size: 381756, timeout: 1500},
        {name: "image-4.png", size: 1234664, timeout: 1200},
        {name: "image-5.png", size: 4509613, timeout: 1200},
        {name: "image-6.png", size: 9084559, timeout: 1200}
    ], q.end = q.length, q.start = 0, q.l = {name: "image-l.gif", size: 35, timeout: 1E3}, h = {base_url: "", timeout: 15E3,
        nruns: 5, latency_runs: 10, user_ip: "", test_https: !1, cookie_exp: 604800, cookie: "BA", results: [], latencies: [], latency: null, runs_left: 0, aborted: !1, complete: !0, running: !1, initialized: !1, ncmp: function (d, h) {
            return d - h
        }, iqr: function (d) {
            var h = d.length - 1, p, n, q, k = [], u;
            p = (d[Math.floor(.25 * h)] + d[Math.ceil(.25 * h)]) / 2;
            n = (d[Math.floor(.75 * h)] + d[Math.ceil(.75 * h)]) / 2;
            q = 1.5 * (n - p);
            if (0 === q)return d;
            h++;
            for (u = 0; u < h && d[u] < n + q; u++)d[u] > p - q && k.push(d[u]);
            return k
        }, calc_latency: function () {
            var d, h, p = 0, n = 0, q;
            this.latencies.shift();
            q = this.iqr(this.latencies.sort(this.ncmp));
            h = q.length;
            BOOMR.debug("latencies: " + this.latencies, "bw");
            BOOMR.debug("lat_filtered: " + q, "bw");
            for (d = 0; d < h; d++)p += q[d], n += q[d] * q[d];
            d = Math.round(p / h);
            p = Math.sqrt(n / h - p * p / (h * h));
            n = (1.96 * p / Math.sqrt(h)).toFixed(2);
            p = p.toFixed(2);
            h = Math.round((q[Math.floor(h / 2)] + q[Math.ceil(h / 2)]) / 2);
            return{mean: d, median: h, stddev: p, stderr: n}
        }, calc_bw: function () {
            var d, h, p = 0, n, A = [], k = [], u = 0, t = 0, E = 0, y = 0, F, D, ba = [];
            for (d = 0; d < this.nruns; d++)if (this.results[d] && this.results[d].r)for (n =
                                                                                              this.results[d].r, F = 0, h = n.length - 1; 0 <= h && 3 > F && n[h]; h--)null !== n[h].t && (p++, F++, D = 1E3 * q[h].size / n[h].t, A.push(D), n[h].t > this.latency.mean ? (D = 1E3 * q[h].size / (n[h].t - this.latency.mean), k.push(D)) : ba.push(h + "_" + n[h].t));
            BOOMR.debug("got " + p + " readings", "bw");
            BOOMR.debug("bandwidths: " + A, "bw");
            BOOMR.debug("corrected: " + k, "bw");
            3 < A.length ? (A = this.iqr(A.sort(this.ncmp)), k = this.iqr(k.sort(this.ncmp))) : (A = A.sort(this.ncmp), k = k.sort(this.ncmp));
            BOOMR.debug("after iqr: " + A, "bw");
            BOOMR.debug("corrected: " + k, "bw");
            p = Math.max(A.length, k.length);
            for (d = 0; d < p; d++)d < A.length && (u += A[d], t += Math.pow(A[d], 2)), d < k.length && (E += k[d], y += Math.pow(k[d], 2));
            p = A.length;
            d = Math.round(u / p);
            u = Math.sqrt(t / p - Math.pow(u / p, 2));
            t = Math.round(1.96 * u / Math.sqrt(p));
            u = Math.round(u);
            p = A.length - 1;
            A = Math.round((A[Math.floor(p / 2)] + A[Math.ceil(p / 2)]) / 2);
            1 > k.length ? (BOOMR.debug("not enough valid corrected datapoints, falling back to uncorrected", "bw"), ba.push("l==" + k.length), h = d, E = u, y = t, p = A) : (p = k.length, h = Math.round(E / p), E = Math.sqrt(y / p - Math.pow(E /
                p, 2)), y = (1.96 * E / Math.sqrt(p)).toFixed(2), E = E.toFixed(2), p = k.length - 1, p = Math.round((k[Math.floor(p / 2)] + k[Math.ceil(p / 2)]) / 2));
            BOOMR.debug("amean: " + d + ", median: " + A, "bw");
            BOOMR.debug("corrected amean: " + h + ", median: " + p, "bw");
            return{mean: d, stddev: u, stderr: t, median: A, mean_corrected: h, stddev_corrected: E, stderr_corrected: y, median_corrected: p, debug_info: ba}
        }, load_img: function (d, h, p) {
            function n(n) {
                return function () {
                    p && p.call(E, d, u, h, n);
                    null !== n && (t = t.onload = t.onerror = null, clearTimeout(k), E = p = null)
                }
            }

            var A =
                this.base_url + q[d].name + "?t=" + (new Date).getTime() + Math.random(), k = 0, u = 0, t = new Image, E = this;
            t.onload = n(!0);
            t.onerror = n(!1);
            k = setTimeout(n(null), q[d].timeout + Math.min(400, this.latency ? this.latency.mean : 400));
            u = (new Date).getTime();
            t.src = A
        }, lat_loaded: function (d, h, p, n) {
            p === this.latency_runs + 1 && (null !== n && (d = (new Date).getTime() - h, this.latencies.push(d)), 0 === this.latency_runs && (this.latency = this.calc_latency()), BOOMR.setImmediate(this.iterate, null, null, this))
        }, img_loaded: function (d, h, p, n) {
            p !== this.runs_left +
                1 || this.results[this.nruns - p].r[d] || (null === n ? this.results[this.nruns - p].r[d + 1] = {t: null, state: null, run: p} : (h = {start: h, end: (new Date).getTime(), t: null, state: n, run: p}, n && (h.t = h.end - h.start), this.results[this.nruns - p].r[d] = h, d >= q.end - 1 || void 0 !== this.results[this.nruns - p].r[d + 1] ? (BOOMR.debug(BOOMR.utils.objectToString(this.results[this.nruns - p], void 0, 2), "bw"), p === this.nruns && (q.start = d), BOOMR.setImmediate(this.iterate, null, null, this)) : this.load_img(d + 1, p, this.img_loaded)))
        }, finish: function () {
            this.latency ||
            (this.latency = this.calc_latency());
            var d = this.calc_bw(), h = {bw: d.median_corrected, bw_err: parseFloat(d.stderr_corrected, 10), lat: this.latency.mean, lat_err: parseFloat(this.latency.stderr, 10), bw_time: Math.round((new Date).getTime() / 1E3)};
            BOOMR.addVar(h);
            0 < d.debug_info.length && BOOMR.addVar("bw_debug", d.debug_info.join(","));
            !isNaN(h.bw) && 0 < h.bw && BOOMR.utils.setCookie(this.cookie, {ba: Math.round(h.bw), be: h.bw_err, l: h.lat, le: h.lat_err, ip: this.user_ip, t: h.bw_time}, this.user_ip ? this.cookie_exp : 0);
            this.complete = !0;
            BOOMR.sendBeacon();
            this.running = !1
        }, iterate: function () {
            this.aborted || (this.runs_left ? this.latency_runs ? this.load_img("l", this.latency_runs--, this.lat_loaded) : (this.results.push({r: []}), this.load_img(q.start, this.runs_left--, this.img_loaded)) : this.finish())
        }, setVarsFromCookie: function () {
            var d, l, p, n, q, k, u, t;
            return(d = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(h.cookie))) && d.ba && (l = parseInt(d.ba, 10), p = parseFloat(d.be, 10), n = parseInt(d.l, 10) || 0, q = parseFloat(d.le, 10) || 0, k = d.ip.replace(/\.\d+$/, "0"),
                d = parseInt(d.t, 10), u = this.user_ip.replace(/\.\d+$/, "0"), t = Math.round((new Date).getTime() / 1E3), k === u && d >= t - this.cookie_exp && 0 < l) ? (this.complete = !0, BOOMR.addVar({bw: l, lat: n, bw_err: p, lat_err: q, bw_time: d}), !0) : !1
        }}, BOOMR.plugins.BW = {init: function (d) {
        if (h.initialized)return this;
        BOOMR.utils.pluginConfig(h, d, "BW", "base_url timeout nruns cookie cookie_exp test_https".split(" "));
        d && d.user_ip && (h.user_ip = d.user_ip);
        if (!h.base_url)return this;
        q.start = 0;
        h.runs_left = h.nruns;
        h.latency_runs = 10;
        h.results = [];
        h.latencies =
            [];
        h.latency = null;
        h.complete = h.aborted = !1;
        BOOMR.removeVar("ba", "ba_err", "lat", "lat_err");
        h.setVarsFromCookie() || (BOOMR.subscribe("page_ready", this.run, null, this), BOOMR.subscribe("page_unload", this.skip, null, this));
        h.initialized = !0;
        return this
    }, run: function () {
        if (h.running || h.complete)return this;
        if (!h.test_https && "https:" === BOOMR.window.location.protocol)return BOOMR.info("HTTPS detected, skipping bandwidth test", "bw"), h.complete = !0, BOOMR.sendBeacon(), this;
        h.running = !0;
        setTimeout(this.abort, h.timeout);
        h.iterate();
        return this
    }, abort: function () {
        h.aborted = !0;
        h.running && h.finish()
    }, skip: function () {
        h.complete || (h.complete = !0, BOOMR.sendBeacon())
    }, is_complete: function () {
        return h.complete
    }})
})();
(function () {
    BOOMR = BOOMR || {};
    BOOMR.plugins = BOOMR.plugins || {};
    if (!BOOMR.plugins.NavigationTiming) {
        var h = {complete: !1, done: function () {
            var h = BOOMR.window, d, l;
            if (this.complete)return this;
            (d = h.performance || h.msPerformance || h.webkitPerformance || h.mozPerformance) && d.timing && d.navigation && (BOOMR.info("This user agent supports NavigationTiming.", "nt"), l = d.navigation, d = d.timing, l = {nt_red_cnt: l.redirectCount, nt_nav_type: l.type, nt_nav_st: d.navigationStart, nt_red_st: d.redirectStart, nt_red_end: d.redirectEnd, nt_fet_st: d.fetchStart,
                nt_dns_st: d.domainLookupStart, nt_dns_end: d.domainLookupEnd, nt_con_st: d.connectStart, nt_con_end: d.connectEnd, nt_req_st: d.requestStart, nt_res_st: d.responseStart, nt_res_end: d.responseEnd, nt_domloading: d.domLoading, nt_domint: d.domInteractive, nt_domcontloaded_st: d.domContentLoadedEventStart, nt_domcontloaded_end: d.domContentLoadedEventEnd, nt_domcomp: d.domComplete, nt_load_st: d.loadEventStart, nt_load_end: d.loadEventEnd, nt_unload_st: d.unloadEventStart, nt_unload_end: d.unloadEventEnd}, d.secureConnectionStart &&
                (l.nt_ssl_st = d.secureConnectionStart), d.msFirstPaint && (l.nt_first_paint = d.msFirstPaint), BOOMR.addVar(l));
            h.chrome && h.chrome.loadTimes && (d = h.chrome.loadTimes()) && (l = {nt_spdy: d.wasFetchedViaSpdy ? 1 : 0, nt_first_paint: d.firstPaintTime}, BOOMR.addVar(l));
            this.complete = !0;
            BOOMR.sendBeacon()
        }};
        BOOMR.plugins.NavigationTiming = {init: function () {
            BOOMR.subscribe("page_ready", h.done, null, h);
            BOOMR.subscribe("page_unload", h.done, null, h);
            return this
        }, is_complete: function () {
            return h.complete
        }}
    }
})();
BOOMR.subscribe("before_beacon", function (h) {
    var q, d = [], l = {};
    h.t_other || (h.t_other = "");
    for (var p in h)p.match(/^(t_done|t_other|bw|lat|bw_err|lat_err|u|r2?)$/) || (p.match(/^t_/) ? h.t_other += "," + p + "|" + h[p] : d.push(p + " = " + h[p]));
    h.t_done && (l.t_done = h.t_done);
    if (h.t_other) {
        q = h.t_other.replace(/^,/, "").replace(/\|/g, " = ").split(",");
        for (var n = 0; n < q.length; n++);
    }
    h.bw && (l.bw = h.bw, l.bw_err = h.bw_err);
    h.lat && (l.lat = h.lat, l.lat_err = h.lat_err);
    document.getElementById("results");
    for (p in h)l[p] = h[p];
    if (d.length)for (n =
                          0; n < d.length; n++)document.createTextNode(d[n]);
    l.u = l.u.split("?")[0];
    l.user_agent = navigator.userAgent;
    jQuery.ajax({url: "https://monitor.dev.lacnic.net/post/", type: "POST", data: l, crossDomain: !0})
});