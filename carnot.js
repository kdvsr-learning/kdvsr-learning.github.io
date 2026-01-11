org = "undefined" === typeof org ? {} : org; org.sriku = org.sriku || {};
var LOG_LEVEL = 1; 
org.sriku.Carnot = function (m) {
    function K(a) {
        var d = {}; a.on = function (b, a) { b = s(b); var k = d[b] || (d[b] = {}), c = a.__steller_eventable_id__ || 0; if (c in k) return this; c || Object.defineProperty(a, "__steller_eventable_id__", { value: c = T++, enumerable: !1, configurable: !1, writable: !1 }); k[c] = a; return this }; a.off = function (b, a) { b = s(b); var k = d[b]; if (!k) return this; var c = a && a.__steller_eventable_id__ || 0; c ? delete k[c] : a || delete d[b]; return this }; a.emit = function (a) {
            a = s(a); var e = d[a]; if (!e) return this; for (var k in e) try {
                e[k].apply(this,
                    arguments)
            } catch (c) { 1 <= LOG_LEVEL && console.log("./eventable.js[107]:\t", "Exception in event watcher - ", c) } return this
        }; return a
    } function t(a) {
        function d(a) { return a.trim() } function b(a) { return 0 < a.length } function e(a) { return a.trim().replace(/\s+/g, " ") } function k(a) {
            var c; /^\>/.test(a) ? (c = "text", a = [a.substring(1).trim()]) : /\=/.test(a) ? (c = "property", a = a.split("=").filter(b).map(e), a[0] = e(a[0]).toLowerCase()) : (a = a.split(/\s/g).map(d).filter(b), c = a.filter(function (a) { return ba.test(a) }).length === a.length ?
                "svarasthana" : "lyrics"); return { type: c, tokens: a }
        } function c(a, b) { for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]); return b } function g(a) { var b = c(l, {}), d = []; a.forEach(function (a) { "property" === a.type && 2 === a.tokens.length ? b["$" + a.tokens[0]] = a.tokens[1] : d.push(a) }); return 0 === d.length ? (c(b, l), null) : { type: "paragraph", lines: d, properties: b } } var l = { "$aksharas per line": 16, "$tala pattern": ",", $stretch: 1 }; a = a.textContent.trim().split(/([ \t]*\n)([ \t]*\n)+/).map(d).filter(b); a = a.map(function (a) {
            a = a.split(/\n/).map(d).filter(b).map(k);
            return g(a)
        }).filter(function (a) { return a }); return 0 === a.length ? [{ type: "properties", properties: l }] : a
    } function F(a, d, b) {
        var e, k, c, g; function l(u, a, f, b) { var c = v[u]; c || (c = v[u] = { x: a, fromY: f, toY: b }); c.toY = b } function m() { var u, a; for (u in v) v.hasOwnProperty(u) && (a = v[u], G(p, "line", { x1: a.x, y1: a.fromY, x2: a.x, y2: a.toY, "stroke-width": 2, stroke: "black" })); v = {} } function s(a) {
            var b = a.x2 - 0.5 * a.dx, f = (a.x1 + b) / 2, c = a.y1 + Math.min(100, 5 + 0.125 * (b - a.x1)); G(p, "path", {
                d: ["M" + a.x1 + "," + a.y1, "Q" + f + "," + c, "" + b + "," + a.y2, "Q" + f + "," +
                    (c + 3), "" + a.x1 + "," + a.y1].join(" "), "stroke-linejoin": "round", "stroke-width": "0.5", stroke: "black", fill: "black"
            }); e = Math.max(e, a.x2); k = Math.max(k, c)
        } function t(a) {
            if (Y in a.properties) {
                var d = a.properties[Y].replace(/\s/g, ""); if (!ca.test(d)) throw Error("Bad phrase groupings syntax: " + d); for (var f = d.match(/[_]/g).length, y = a.properties[z], L = 0, h = 0, e = 0, r = 0; L < a.tala_interval.from;)y.instructions[h].tick && L++, h++; for (; h < y.instructions.length && y.instructions[h].space;)++h; var m = f / +(a.properties[M] || a.properties[N]),
                    O = +a.properties[B] * b[B], p = O * (+a.properties[C] || b[C]), n = [], D = 0.75 * b[w]; for (c -= D; L < a.tala_interval.to;) {
                        f = y.instructions[h]; if (f.tick) { dx = f.tick * O / m; switch (d[e]) { case "_": g += dx; ++e; break; case "(": n.push({ dx: dx, x1: g, y1: c }); ++e; continue; case ")": n[n.length - 1].x2 = g; n[n.length - 1].y2 = c; ++e; continue }++r; if (r >= m) r = 0, ++L, ++h; else continue } e < d.length && ")" === d[e] && (n[n.length - 1].x2 = g, n[n.length - 1].y2 = c, ++e); for (; h < y.instructions.length && (f = y.instructions[h], !f.tick);)f.space ? g = f.scale ? g + f.space * p : g + f.space : f.line &&
                            (f.draw && l(h, g, c - b[w] - b[H] + D, c + b[I]), g += f.line), f = y.instructions[++h]
                    } e < d.length && (n[n.length - 1].x2 = g, n[n.length - 1].y2 = c); n.forEach(s); c = k
            }
        } function K(a) { var b = [], f, c, d, h; f = c = 0; for (d = a.length; c < d; ++c)if (h = a.charAt(c), "," === h || "_" === h) c > f && b.push(a.substring(f, c)), f = c + 1, b.push(h); c > f && b.push(a.substring(f, c)); return b } function F(a, d, f) {
            for (var e = a.properties[z], k = 0, h = 0, m = 0; k < a.tala_interval.from;)e.instructions[h].tick && k++, h++; for (; h < e.instructions.length && e.instructions[h].space;)++h; var r = d.tokens.length /
                +(a.properties[M] || a.properties[N]), Z = +a.properties[B] * b[B], O = Z * (+a.properties[C] || b[C]), s = "font-family:" + ("lyrics" === d.type ? "serif" : b[U]) + ";" + (f || ""), n = [b[P], +(a.properties[Q] || b[Q])]; n.push(n[1] - (n[0] - n[1])); var D = function (a) { return "font-size: " + n[6 < a ? 2 : 2 < a ? 1 : 0] + "pt;" }, t = s + D(r), V = 0, x, q, R, v = "svarasthana" === d.type, r = Math.floor(r); q = { x: g, y: c, style: t }; for (var A = function (a) { G(p, "text", q, T(a)); q.x += R / x.length }, E = function (a) { var u = G, b = p; u(b, "text", q, "_" === a ? "" : a); q.x += R / x.length }; k < a.tala_interval.to;) {
                    f =
                    e.instructions[h]; if (f.tick) if (R = f.tick * Z / r, q.x = g, q.y = c, q.style = t, v ? (x = d.tokens[m].match(da) || [], q.style = s + D((2 < x.length ? x.length : 1) * r), x.forEach(A)) : (x = K(d.tokens[m]), q.style = s + D(r), x.forEach(E)), g += R, ++V, ++m, V >= r) V = 0, ++k, ++h; else continue; for (; h < e.instructions.length && (f = e.instructions[h], !f.tick);)f.space ? g = f.scale ? g + f.space * O : g + f.space : f.line && (f.draw && l(h, g, c - b[w] - b[H], c + b[I]), g += f.line), f = e.instructions[++h]
                } J()
        } function J(a) { c += b[a || w]; k = Math.max(c, k); e = Math.max(g + 40, e); g = b[A] } function S(a) {
            var b =
                "$" + a; if (b in W) return W[b]; var f, c, d, h = [], e; f = 0; for (c = a.length; f < c; ++f)switch (d = a.charAt(f), e = f + 1 < c && "|" === a.charAt(f + 1) || 0 < f && "|" === a.charAt(f - 1), d) { case "|": e ? h.push({ line: 5, draw: !0 }) : h.push({ line: 10, draw: !0 }); break; case " ": e ? h.push({ space: 15, scale: !1 }) : h.push({ space: 30, scale: !0 }); break; case ",": h.push({ tick: 40 }); break; case "_": h.push({ line: 10, draw: !1 }); break; default: throw Error("Unknown pattern character [" + d + '] in tala - "' + a + '"'); }return W[b] = { pattern: a, aksharas: $(a), instructions: h }
        } function $(a) {
            return (a =
                a.match(/,/g)) && a.length || 0
        } function T(a) { if ("_" === a) return ""; switch (a.length) { case 3: return "+" === a[1] && "+" === a[2] ? a[0] + E.overddot : "-" === a[1] && "-" === a[2] ? a[0] + E.underddot : a; case 2: return "+" === a[1] ? a[0] + E.overdot : "-" === a[1] ? a[0] + E.underdot : a; default: return a } } function G(b, c, f, d) { var e = a.document.createElementNS("http://www.w3.org/2000/svg", c); f && Object.keys(f).forEach(function (a) { f[a] && e.setAttribute(a, f[a]) }); d && (e.textContent = d); b.appendChild(e); return e } var z = "$tala pattern", N = "$aksharas per line",
            Y = "$phrases", M = "$aksharas", w = "$line spacing", P = "$notation font size", Q = "$notation small font size", U = "$notation font", B = "$stretch", C = "$stretch space", A = "$margin left", H = "$line extension top", I = "$line extension bottom", W = {}; k = e = c = g = 0; var v = {}; (function (a) {
                a[w] = +a[w] || 22; a["$para spacing"] = +a["$para spacing"] || a[w]; a[P] = +a[P] || 13; a[Q] = +a[Q] || a[P] - 2; a[U] = a[U] || "sans-serif"; a["$text font"] = a["$text font"] || "serif"; a[B] = +a[B] || 1; a[C] = +a[C] || 1; a["$margin top"] = +a["$margin top"] || a[w]; a[A] = +a[A] || 10; a[H] =
                    +a[H] || 0; a[I] = +a[I] || 5
            })(b); c = b["$margin top"]; g = b[A]; (function (a) {
                var b = 0, c = 0, d = 0, e = 0, h, k, g, m, l; h = 0; for (k = a.length; h < k; ++h) {
                    g = a[h]; m = g.properties[z]; e = $(m); d = +(g.properties[M] || g.properties[N]); c += d; for (l = e; c > l;)g.properties[z] += m, l += e; m = g.properties[z] = S(g.properties[z].replace(/\|\|+/g, "||")); var p = +(g.properties[M] || g.properties[N]); g.lines.forEach(function (a) {
                        if ("text" !== a.type && a.tokens.length < p) {
                            var b, c, d, f, e, g = []; d = Math.floor(l / a.tokens.length); f = Math.round(l - d * a.tokens.length); b = 0; for (e =
                                a.tokens.length; b < e; ++b)for (g.push(a.tokens[b]), c = 1; c < d; ++c)g.push("_"); for (b = 0; b < f; ++b)g.push("_"); a.tokens = g
                        }
                    }); g.tala_interval = { from: b, to: c }; for (b = c; b >= e;)b -= e, c -= e
                } return a
            })(d); var X = a.document.createElement("div"), p, aa = function (d) { p && (p.setAttribute("width", e), p.setAttribute("height", k), X.style.width = "" + e + "px"); d && (p = a.document.createElementNS("http://www.w3.org/2000/svg", "svg"), X.appendChild(p), c = b["$margin top"], g = b[A], k = e = 0) }; aa(!0); d.forEach(function (a, e) {
                a.lines && (a.lines.forEach(function (d) {
                    switch (d.type) {
                        case "text": m();
                            G(p, "text", { x: g, y: c, style: "font-family: Tahoma," + b["$text font"] + ";font-size: 12pt; font-weight: bold; text-decoration: underline; " }, d.tokens.join(" ")); J(); c += b[H] + b[I]; break; case "svarasthana": F(a, d); break; case "lyrics": F(a, d, "font-style: italic;"); break; default: throw Error("Unknown line type " + d.type);
                    }
                }), t(a), m(), aa(e + 1 < d.length))
            }); return X
    } function J(a) {
        a = a || l.document; var d = a.querySelectorAll("pre.carnot_section"), d = Array.prototype.slice.call(d); a = a.querySelectorAll("pre"); var b, e, k; b = 0; for (e = a.length; b < e; ++b)k = a[b], k.classList.contains("carnot_ignore") ||
            /^\s*tala\s+pattern\s*=/.test(k.textContent) && d.push(k); return d
    } function S() { var a = l.document.querySelector("pre.carnot_style"); a ? (a.hidden = !0, a = t(a)[0].properties) : a = {}; m.renderPage(a) } var l = this, s = function () { var a = {}; return function (d) { if (a[d]) throw Error("Invalid event name - " + d); return d } }(), T = 1; K.observe = function (a, d, b) { b = s(b || d); var e = a[d]; a[d] = function () { var a = e.apply(this, arguments), c = Array.prototype.slice.call(arguments); c.unshift(b); this.emit.apply(this, c); return a }; return a }; m = K(m); var ba =
        /^(([SrRgGmMPdDnN][\+\-]*)|[,_])+$/, da = RegExp("([SrRgGmMPdDnN][\\+\\-]*)|[,_]", "g"), ca = /([_]|\([_]+\))+/, E = { overdot: String.fromCharCode(775), overddot: String.fromCharCode(776), underdot: String.fromCharCode(803), underddot: String.fromCharCode(804) }; m.renderNotation = function (a, d) { d = d || {}; var b = l.document.createElement("pre"); b.textContent = a; return F(l, t(b), d) }; m.renderSections = function (a, d) {
            d = d || {}; var b = "string" === typeof a ? l.document.querySelectorAll(a) : a, e = [], k, c, b = Array.prototype.slice.call(b); b.forEach(function (a) {
                return a.hidden =
                    !0
            }); k = 0; for (c = b.length; k < c; ++k)e.push(F(l, t(b[k]), d)), b[k].parentElement.insertBefore(e[k], b[k]), m.emit("rendered_section", e[k]); m.emit("render_complete", e)
        }; m.renderPage = function (a) { "interactive" === l.document.readyState ? setTimeout(m.renderSections, 0, J(l.document), a) : l.document.addEventListener("readystatechange", function () { "interactive" === l.document.readyState && (m.renderSections("pre.carnot_section", a), l.document.removeEventListener("readystatechange", arguments.callee)) }) }; m.findSections = J; m.scanStyle =
            function (a) { a = a || l.document; return (a = a.querySelector("pre.carnot_style")) ? (a.hidden = !0, a = t(a), a[a.length - 1].properties) : {} }; "interactive" === l.document.readyState ? S() : l.document.addEventListener("readystatechange", function () { "interactive" === l.document.readyState && (S(), l.document.removeEventListener("readystatechange", arguments.callee)) }); return m
}({});
