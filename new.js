void
function(a) {
    function b(a, b) {
        function c(a, c, d) {
            d = d || 15;
            var e = new Date;
            e.setTime((new Date).getTime() + 1e3 * d), b.cookie = a + "=" + escape(c) + ";path=/;expires=" + e.toGMTString()
        }

        function d() {
            for (var a = alog.tracker && alog.tracker("speed").get("options") || {}, b = a.random = Math.random(), c = a.special_pages || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                b < f.sample && d.push(f.id)
            }
            d.length && alog("speed.set", "special_id", "[" + d + "]"), (b <= a.sample || d.length) && (alog("speed.set", "send", !0), a.product_id && a.page_id && alog("require", "speed"))
        }

        function e() {
            alog.on && alog.on("mark", function() {
                var a = alog.tracker && alog.tracker("speed").get("options") || {};
                if (h = !0, a && a.custom_metrics && a.custom_metrics.constructor == Array)
                    for (var b = a.custom_metrics, c = alog.tracker("speed").fields, e = 0; e < b.length; e++)
                        if (!c || !c.hasOwnProperty(b[e])) {
                            h = !1;
                            break
                        }
                h && d()
            })
        }

        function f(a, b) {
            var c = 0;
            if ((b.nodeName || b.tagName).toLowerCase() === a.toLowerCase()) return b;
            for (; b = b.parentNode;) {
                if (c++, (b.nodeName || b.tagName).toLowerCase() === a.toLowerCase()) return b;
                if (c >= 4) return null
            }
            return null
        }

        function g(a) {
            b.attachEvent ? b.attachEvent("onclick", a) : b.addEventListener("click", a, !1)
        }
        var h = !1;
        e(), alog.fire && alog.fire("mark"), g(function(b) {
            var b = b || a.event,
                d = b.target || b.srcElement,
                e = f("a", d);
            if (e) {
                var g = e.getAttribute("href");
                /^#|javascript:/.test(g) || c("PMS_JT", '({"s":' + +new Date + ',"r":"' + document.URL.replace(/#.*/, "") + '"})')
            }
        })
    }
    if (a) {
        var c = "http://fex.bdstatic.com",
            d = "http://static.tieba.baidu.com",
            e = d;
        ("https:" === window.location.protocol || a.https) && (c = "https://fex.bdstatic.com", d = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK", e = d), alog("set", "alias", {
            monkey: c + "/hunter/alog/monkey.mobile.min.js",
            element: c + "/hunter/alog/element.min.js?v=160118",
            speed: c + "/hunter/alog/speed.min.js?v=170721",
            feature: c + "/hunter/alog/feature.min.js?v=150727",
            csp: c + "/hunter/alog/dp.csp.min.js?v=140804",
            xss: c + "/hunter/alog/dp.xss.min.js?v=140804"
        });
        var f = a.product,
            g = a.page,
            h = a.monkey_page,
            i = a.speed_page,
            j = Math.random,
            k = d + "/tb/pms/img/st.gif",
            l = k,
            m = a.speed,
            n = a.monkey,
            o = a.exception,
            p = a.feature,
            q = a.csp,
            r = a.xss,
            s = a.cus;
        m && (m.product_id = f, m.page_id = i ? i : g, m.log_path || (m.log_path = k), alog("speed.set", "options", m), b(window, document)), n && n.sample && j() < n.sample && (alog("require", ["monkey", "element"], function(a, b) {
            a.create({
                page: h ? h : g,
                pageflag: n.pageflag,
                pid: "241",
                p: f,
                hid: n.hid,
                postUrl: l,
                dv: 6,
                reports: {
                    refer: 1,
                    staytime: 1
                }
            })
        }), alog("monkey.send", "pageview", {
            now: +new Date
        })), o && o.sample && j() < o.sample && alog("exception.create", {
            postUrl: l,
            page: h ? h : g,
            pid: "170",
            dv: 7,
            p: f
        }), p && p.sample && j() < p.sample && alog("require", "feature", function(a) {
            a.create({
                dv: 4,
                postUrl: k,
                page: h ? h : g,
                p: f
            }), a.fire("commit")
        }), q && q.sample && j() < q.sample && (alog("csp.create", {
            dv: 5,
            postUrl: k,
            page: h ? h : g,
            p: f
        }), alog("require", "csp")), r && r.sample && j() < r.sample && (alog("xss.create", {
            dv: 5,
            postUrl: k,
            page: h ? h : g,
            p: f
        }), alog("require", "xss")), s && s.sample && j() < s.sample && (alog("cus.on", "time", function(a) {
            var b, c = {},
                d = !1;
            if ("[object Object]" === a.toString()) {
                for (var e in a) "page" != e ? (b = parseInt(a[e]), b > 0 && /^z_/.test(e) && (d = !0, c[e] = b)) : c.page = a[e];
                d && alog("cus.send", "time", c)
            }
        }), alog("cus.on", "avg", function(a) {
            var b, c = {},
                d = !1;
            if ("[object Object]" === a.toString()) {
                for (var e in a) "page" != e ? (b = parseInt(a[e]), b > 0 && /^z_/.test(e) && (d = !0, c[e] = b)) : c.page = a[e];
                d && alog("cus.send", "avg", c)
            }
        }), alog("cus.on", "count", function(a) {
            var b = {},
                c = !1;
            if ("string" == typeof a && (a = [a]), a instanceof Array)
                for (var d = 0; d < a.length; d++) /^z_/.test(a[d]) ? (c = !0, b[a[d]] = 1) : /^page:/.test(a[d]) && (b.page = a[d].substring(5));
            c && alog("cus.send", "count", b)
        }), alog("cus.on", "dis", function(a) {
            var b, c = {},
                d = !1;
            if ("[object Object]" === a.toString()) {
                for (var e in a) "page" != e ? (b = a[e] + "", /^z_/.test(e) && (d = !0, c[e] = b)) : c.page = a[e];
                d && alog("cus.send", "dis", c)
            }
        }), alog("cus.create", {
            dv: 3,
            postUrl: k,
            page: g,
            p: f
        }))
    }
}(window.alogObjectConfig);