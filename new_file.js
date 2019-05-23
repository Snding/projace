_superframeJSLoader(function() {
    (function(define, require, vw, page) {
        with(page) {
            var Zepto = function() {
                function t(t) {
                    return null == t ? String(t) : H[U.call(t)] || "object"
                }

                function e(e) {
                    return "function" == t(e)
                }

                function n(t) {
                    return null != t && t == t.window
                }

                function i(t) {
                    return null != t && t.nodeType == t.DOCUMENT_NODE
                }

                function r(e) {
                    return "object" == t(e)
                }

                function o(t) {
                    return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
                }

                function a(t) {
                    return "number" == typeof t.length
                }

                function s(t) {
                    return N.call(t, function(t) {
                        return null != t
                    })
                }

                function u(t) {
                    return t.length > 0 ? T.fn.concat.apply([], t) : t
                }

                function c(t) {
                    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }

                function l(t) {
                    return t in Z ? Z[t] : Z[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
                }

                function f(t, e) {
                    return "number" != typeof e || _[c(t)] ? e : e + "px"
                }

                function h(t) {
                    var e, n;
                    return k[t] || (e = P.createElement(t), P.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), k[t] = n), k[t]
                }

                function p(t) {
                    return "children" in t ? A.call(t.children) : T.map(t.childNodes, function(t) {
                        return 1 == t.nodeType ? t : void 0
                    })
                }

                function d(t, e, n) {
                    for (E in e) n && (o(e[E]) || G(e[E])) ? (o(e[E]) && !o(t[E]) && (t[E] = {}), G(e[E]) && !G(t[E]) && (t[E] = []), d(t[E], e[E], n)) : e[E] !== x && (t[E] = e[E])
                }

                function m(t, e) {
                    return null == e ? T(t) : T(t).filter(e)
                }

                function v(t, n, i, r) {
                    return e(n) ? n.call(t, i, r) : n
                }

                function g(t, e, n) {
                    null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
                }

                function y(t, e) {
                    var n = t.className,
                        i = n && n.baseVal !== x;
                    return e === x ? i ? n.baseVal : n : void(i ? n.baseVal = e : t.className = e)
                }

                function b(t) {
                    var e;
                    try {
                        return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? T.parseJSON(t) : t : e) : t
                    } catch (n) {
                        return t
                    }
                }

                function w(t, e) {
                    e(t);
                    for (var n in t.childNodes) w(t.childNodes[n], e)
                }
                var x, E, T, j, C, S, O = [],
                    A = O.slice,
                    N = O.filter,
                    P = window.document,
                    k = {},
                    Z = {},
                    _ = {
                        "column-count": 1,
                        columns: 1,
                        "font-weight": 1,
                        "line-height": 1,
                        opacity: 1,
                        "z-index": 1,
                        zoom: 1
                    },
                    D = /^\s*<(\w+|!)[^>]*>/,
                    $ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                    L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                    F = /^(?:body|html)$/i,
                    M = /([A-Z])/g,
                    R = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                    q = ["after", "prepend", "before", "append"],
                    z = P.createElement("table"),
                    W = P.createElement("tr"),
                    I = {
                        tr: P.createElement("tbody"),
                        tbody: z,
                        thead: z,
                        tfoot: z,
                        td: W,
                        th: W,
                        "*": P.createElement("div")
                    },
                    B = /complete|loaded|interactive/,
                    V = /^[\w-]*$/,
                    H = {},
                    U = H.toString,
                    X = {},
                    J = P.createElement("div"),
                    Y = {
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        "for": "htmlFor",
                        "class": "className",
                        maxlength: "maxLength",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        rowspan: "rowSpan",
                        colspan: "colSpan",
                        usemap: "useMap",
                        frameborder: "frameBorder",
                        contenteditable: "contentEditable"
                    },
                    G = Array.isArray || function(t) {
                        return t instanceof Array
                    };
                return X.matches = function(t, e) {
                    if (!e || !t || 1 !== t.nodeType) return !1;
                    var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                    if (n) return n.call(t, e);
                    var i, r = t.parentNode,
                        o = !r;
                    return o && (r = J).appendChild(t), i = ~X.qsa(r, e).indexOf(t), o && J.removeChild(t), i
                }, C = function(t) {
                    return t.replace(/-+(.)?/g, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                }, S = function(t) {
                    return N.call(t, function(e, n) {
                        return t.indexOf(e) == n
                    })
                }, X.fragment = function(t, e, n) {
                    var i, r, a;
                    return $.test(t) && (i = T(P.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(L, "<$1></$2>")), e === x && (e = D.test(t) && RegExp.$1), e in I || (e = "*"), a = I[e], a.innerHTML = "" + t, i = T.each(A.call(a.childNodes), function() {
                        a.removeChild(this)
                    })), o(n) && (r = T(i), T.each(n, function(t, e) {
                        R.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
                    })), i
                }, X.Z = function(t, e) {
                    return t = t || [], t.__proto__ = T.fn, t.selector = e || "", t
                }, X.isZ = function(t) {
                    return t instanceof X.Z
                }, X.init = function(t, n) {
                    var i;
                    if (!t) return X.Z();
                    if ("string" == typeof t)
                        if (t = t.trim(), "<" == t[0] && D.test(t)) i = X.fragment(t, RegExp.$1, n), t = null;
                        else {
                            if (n !== x) return T(n).find(t);
                            i = X.qsa(P, t)
                        } else {
                        if (e(t)) return T(P).ready(t);
                        if (X.isZ(t)) return t;
                        if (G(t)) i = s(t);
                        else if (r(t)) i = [t], t = null;
                        else if (D.test(t)) i = X.fragment(t.trim(), RegExp.$1, n), t = null;
                        else {
                            if (n !== x) return T(n).find(t);
                            i = X.qsa(P, t)
                        }
                    }
                    return X.Z(i, t)
                }, T = function(t, e) {
                    return X.init(t, e)
                }, T.extend = function(t) {
                    var e, n = A.call(arguments, 1);
                    return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
                        d(t, n, e)
                    }), t
                }, X.qsa = function(t, e) {
                    var n, r = "#" == e[0],
                        o = !r && "." == e[0],
                        a = r || o ? e.slice(1) : e,
                        s = V.test(a);
                    return i(t) && s && r ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : A.call(s && !r ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
                }, T.contains = function(t, e) {
                    return t !== e && t.contains(e)
                }, T.type = t, T.isFunction = e, T.isWindow = n, T.isArray = G, T.isPlainObject = o, T.isEmptyObject = function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }, T.inArray = function(t, e, n) {
                    return O.indexOf.call(e, t, n)
                }, T.camelCase = C, T.trim = function(t) {
                    return null == t ? "" : String.prototype.trim.call(t)
                }, T.uuid = 0, T.support = {}, T.expr = {}, T.map = function(t, e) {
                    var n, i, r, o = [];
                    if (a(t))
                        for (i = 0; i < t.length; i++) n = e(t[i], i), null != n && o.push(n);
                    else
                        for (r in t) n = e(t[r], r), null != n && o.push(n);
                    return u(o)
                }, T.each = function(t, e) {
                    var n, i;
                    if (a(t)) {
                        for (n = 0; n < t.length; n++)
                            if (e.call(t[n], n, t[n]) === !1) return t
                    } else
                        for (i in t)
                            if (e.call(t[i], i, t[i]) === !1) return t; return t
                }, T.grep = function(t, e) {
                    return N.call(t, e)
                }, window.JSON && (T.parseJSON = JSON.parse), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                    H["[object " + e + "]"] = e.toLowerCase()
                }), T.fn = {
                    forEach: O.forEach,
                    reduce: O.reduce,
                    push: O.push,
                    sort: O.sort,
                    indexOf: O.indexOf,
                    concat: O.concat,
                    map: function(t) {
                        return T(T.map(this, function(e, n) {
                            return t.call(e, n, e)
                        }))
                    },
                    slice: function() {
                        return T(A.apply(this, arguments))
                    },
                    ready: function(t) {
                        return B.test(P.readyState) && P.body ? t(T) : P.addEventListener("DOMContentLoaded", function() {
                            t(T)
                        }, !1), this
                    },
                    get: function(t) {
                        return t === x ? A.call(this) : this[t >= 0 ? t : t + this.length]
                    },
                    toArray: function() {
                        return this.get()
                    },
                    size: function() {
                        return this.length
                    },
                    remove: function() {
                        return this.each(function() {
                            null != this.parentNode && this.parentNode.removeChild(this)
                        })
                    },
                    each: function(t) {
                        return O.every.call(this, function(e, n) {
                            return t.call(e, n, e) !== !1
                        }), this
                    },
                    filter: function(t) {
                        return e(t) ? this.not(this.not(t)) : T(N.call(this, function(e) {
                            return X.matches(e, t)
                        }))
                    },
                    add: function(t, e) {
                        return T(S(this.concat(T(t, e))))
                    },
                    is: function(t) {
                        return this.length > 0 && X.matches(this[0], t)
                    },
                    not: function(t) {
                        var n = [];
                        if (e(t) && t.call !== x) this.each(function(e) {
                            t.call(this, e) || n.push(this)
                        });
                        else {
                            var i = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? A.call(t) : T(t);
                            this.forEach(function(t) {
                                i.indexOf(t) < 0 && n.push(t)
                            })
                        }
                        return T(n)
                    },
                    has: function(t) {
                        return this.filter(function() {
                            return r(t) ? T.contains(this, t) : T(this).find(t).size()
                        })
                    },
                    eq: function(t) {
                        return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                    },
                    first: function() {
                        var t = this[0];
                        return t && !r(t) ? t : T(t)
                    },
                    last: function() {
                        var t = this[this.length - 1];
                        return t && !r(t) ? t : T(t)
                    },
                    find: function(t) {
                        var e, n = this;
                        return e = "object" == typeof t ? T(t).filter(function() {
                            var t = this;
                            return O.some.call(n, function(e) {
                                return T.contains(e, t)
                            })
                        }) : 1 == this.length ? T(X.qsa(this[0], t)) : this.map(function() {
                            return X.qsa(this, t)
                        })
                    },
                    closest: function(t, e) {
                        var n = this[0],
                            r = !1;
                        for ("object" == typeof t && (r = T(t)); n && !(r ? r.indexOf(n) >= 0 : X.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
                        return T(n)
                    },
                    parents: function(t) {
                        for (var e = [], n = this; n.length > 0;) n = T.map(n, function(t) {
                            return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                        });
                        return m(e, t)
                    },
                    parent: function(t) {
                        return m(S(this.pluck("parentNode")), t)
                    },
                    children: function(t) {
                        return m(this.map(function() {
                            return p(this)
                        }), t)
                    },
                    contents: function() {
                        return this.map(function() {
                            return A.call(this.childNodes)
                        })
                    },
                    siblings: function(t) {
                        return m(this.map(function(t, e) {
                            return N.call(p(e.parentNode), function(t) {
                                return t !== e
                            })
                        }), t)
                    },
                    empty: function() {
                        return this.each(function() {
                            this.innerHTML = ""
                        })
                    },
                    pluck: function(t) {
                        return T.map(this, function(e) {
                            return e[t]
                        })
                    },
                    show: function() {
                        return this.each(function() {
                            "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                        })
                    },
                    replaceWith: function(t) {
                        return this.before(t).remove()
                    },
                    wrap: function(t) {
                        var n = e(t);
                        if (this[0] && !n) var i = T(t).get(0),
                            r = i.parentNode || this.length > 1;
                        return this.each(function(e) {
                            T(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
                        })
                    },
                    wrapAll: function(t) {
                        if (this[0]) {
                            T(this[0]).before(t = T(t));
                            for (var e;
                                (e = t.children()).length;) t = e.first();
                            T(t).append(this)
                        }
                        return this
                    },
                    wrapInner: function(t) {
                        var n = e(t);
                        return this.each(function(e) {
                            var i = T(this),
                                r = i.contents(),
                                o = n ? t.call(this, e) : t;
                            r.length ? r.wrapAll(o) : i.append(o)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            T(this).replaceWith(T(this).children())
                        }), this
                    },
                    clone: function() {
                        return this.map(function() {
                            return this.cloneNode(!0)
                        })
                    },
                    hide: function() {
                        return this.css("display", "none")
                    },
                    toggle: function(t) {
                        return this.each(function() {
                            var e = T(this);
                            (t === x ? "none" == e.css("display") : t) ? e.show(): e.hide()
                        })
                    },
                    prev: function(t) {
                        return T(this.pluck("previousElementSibling")).filter(t || "*")
                    },
                    next: function(t) {
                        return T(this.pluck("nextElementSibling")).filter(t || "*")
                    },
                    html: function(t) {
                        return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function(e) {
                            var n = this.innerHTML;
                            T(this).empty().append(v(this, t, e, n))
                        })
                    },
                    text: function(t) {
                        return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                            this.textContent = t === x ? "" : "" + t
                        })
                    },
                    attr: function(t, e) {
                        var n;
                        return "string" == typeof t && e === x ? 0 == this.length || 1 !== this[0].nodeType ? x : "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : this.each(function(n) {
                            if (1 === this.nodeType)
                                if (r(t))
                                    for (E in t) g(this, E, t[E]);
                                else g(this, t, v(this, e, n, this.getAttribute(t)))
                        })
                    },
                    removeAttr: function(t) {
                        return this.each(function() {
                            1 === this.nodeType && g(this, t)
                        })
                    },
                    prop: function(t, e) {
                        return t = Y[t] || t, e === x ? this[0] && this[0][t] : this.each(function(n) {
                            this[t] = v(this, e, n, this[t])
                        })
                    },
                    data: function(t, e) {
                        var n = this.attr("data-" + t.replace(M, "-$1").toLowerCase(), e);
                        return null !== n ? b(n) : x
                    },
                    val: function(t) {
                        return 0 === arguments.length ? this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function() {
                            return this.selected
                        }).pluck("value") : this[0].value) : this.each(function(e) {
                            this.value = v(this, t, e, this.value)
                        })
                    },
                    offset: function(t) {
                        if (t) return this.each(function(e) {
                            var n = T(this),
                                i = v(this, t, e, n.offset()),
                                r = n.offsetParent().offset(),
                                o = {
                                    top: i.top - r.top,
                                    left: i.left - r.left
                                };
                            "static" == n.css("position") && (o.position = "relative"), n.css(o)
                        });
                        if (0 == this.length) return null;
                        var e = this[0].getBoundingClientRect();
                        return {
                            left: e.left + window.pageXOffset,
                            top: e.top + window.pageYOffset,
                            width: Math.round(e.width),
                            height: Math.round(e.height)
                        }
                    },
                    css: function(e, n) {
                        if (arguments.length < 2) {
                            var i = this[0],
                                r = getComputedStyle(i, "");
                            if (!i) return;
                            if ("string" == typeof e) return i.style[C(e)] || r.getPropertyValue(e);
                            if (G(e)) {
                                var o = {};
                                return T.each(G(e) ? e : [e], function(t, e) {
                                    o[e] = i.style[C(e)] || r.getPropertyValue(e)
                                }), o
                            }
                        }
                        var a = "";
                        if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function() {
                            this.style.removeProperty(c(e))
                        });
                        else
                            for (E in e) e[E] || 0 === e[E] ? a += c(E) + ":" + f(E, e[E]) + ";" : this.each(function() {
                                this.style.removeProperty(c(E))
                            });
                        return this.each(function() {
                            this.style.cssText += ";" + a
                        })
                    },
                    index: function(t) {
                        return t ? this.indexOf(T(t)[0]) : this.parent().children().indexOf(this[0])
                    },
                    hasClass: function(t) {
                        return t ? O.some.call(this, function(t) {
                            return this.test(y(t))
                        }, l(t)) : !1
                    },
                    addClass: function(t) {
                        return t ? this.each(function(e) {
                            j = [];
                            var n = y(this),
                                i = v(this, t, e, n);
                            i.split(/\s+/g).forEach(function(t) {
                                T(this).hasClass(t) || j.push(t)
                            }, this), j.length && y(this, n + (n ? " " : "") + j.join(" "))
                        }) : this
                    },
                    removeClass: function(t) {
                        return this.each(function(e) {
                            return t === x ? y(this, "") : (j = y(this), v(this, t, e, j).split(/\s+/g).forEach(function(t) {
                                j = j.replace(l(t), " ")
                            }), void y(this, j.trim()))
                        })
                    },
                    toggleClass: function(t, e) {
                        return t ? this.each(function(n) {
                            var i = T(this),
                                r = v(this, t, n, y(this));
                            r.split(/\s+/g).forEach(function(t) {
                                (e === x ? !i.hasClass(t) : e) ? i.addClass(t): i.removeClass(t)
                            })
                        }) : this
                    },
                    scrollTop: function(t) {
                        if (this.length) {
                            var e = "scrollTop" in this[0];
                            return t === x ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                                this.scrollTop = t
                            } : function() {
                                this.scrollTo(this.scrollX, t)
                            })
                        }
                    },
                    scrollLeft: function(t) {
                        if (this.length) {
                            var e = "scrollLeft" in this[0];
                            return t === x ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                                this.scrollLeft = t
                            } : function() {
                                this.scrollTo(t, this.scrollY)
                            })
                        }
                    },
                    position: function() {
                        if (this.length) {
                            var t = this[0],
                                e = this.offsetParent(),
                                n = this.offset(),
                                i = F.test(e[0].nodeName) ? {
                                    top: 0,
                                    left: 0
                                } : e.offset();
                            return n.top -= parseFloat(T(t).css("margin-top")) || 0, n.left -= parseFloat(T(t).css("margin-left")) || 0, i.top += parseFloat(T(e[0]).css("border-top-width")) || 0, i.left += parseFloat(T(e[0]).css("border-left-width")) || 0, {
                                top: n.top - i.top,
                                left: n.left - i.left
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var t = this.offsetParent || P.body; t && !F.test(t.nodeName) && "static" == T(t).css("position");) t = t.offsetParent;
                            return t
                        })
                    }
                }, T.fn.detach = T.fn.remove, ["width", "height"].forEach(function(t) {
                    var e = t.replace(/./, function(t) {
                        return t[0].toUpperCase()
                    });
                    T.fn[t] = function(r) {
                        var o, a = this[0];
                        return r === x ? n(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                            a = T(this), a.css(t, v(this, r, e, a[t]()))
                        })
                    }
                }), q.forEach(function(e, n) {
                    var i = n % 2;
                    T.fn[e] = function() {
                        var e, r, o = T.map(arguments, function(n) {
                                return e = t(n), "object" == e || "array" == e || null == n ? n : X.fragment(n)
                            }),
                            a = this.length > 1;
                        return o.length < 1 ? this : this.each(function(t, e) {
                            r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null, o.forEach(function(t) {
                                if (a) t = t.cloneNode(!0);
                                else if (!r) return T(t).remove();
                                w(r.insertBefore(t, e), function(t) {
                                    null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                                })
                            })
                        })
                    }, T.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
                        return T(t)[e](this), this
                    }
                }), X.Z.prototype = T.fn, X.uniq = S, X.deserializeValue = b, T.zepto = X, T
            }();
            this.Zepto = Zepto, void 0 === this.$ && (this.$ = Zepto),
                function(t) {
                    function e(t) {
                        return t === window && (t = x), t._zid || (t._zid = h++)
                    }

                    function n(t, n, o, a) {
                        if (n = i(n), n.ns) var s = r(n.ns);
                        return (v[e(t)] || []).filter(function(t) {
                            return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
                        })
                    }

                    function i(t) {
                        var e = ("" + t).split(".");
                        return {
                            e: e[0],
                            ns: e.slice(1).sort().join(" ")
                        }
                    }

                    function r(t) {
                        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
                    }

                    function o(t, e) {
                        return t.del && !y && t.e in b || !!e
                    }

                    function a(t) {
                        return w[t] || y && b[t] || t
                    }

                    function s(n, r, s, u, l, h, p) {
                        var d = e(n),
                            m = v[d] || (v[d] = []);
                        r.split(/\s/).forEach(function(e) {
                            if ("ready" == e) return t(document).ready(s);
                            var r = i(e);
                            r.fn = s, r.sel = l, r.e in w && (s = function(e) {
                                var n = e.relatedTarget;
                                return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0
                            }), r.del = h;
                            var d = h || s;
                            r.proxy = function(t) {
                                if (t = c(t), !t.isImmediatePropagationStopped()) {
                                    t.data = u;
                                    var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                                    return e === !1 && (t.preventDefault(), t.stopPropagation()), e
                                }
                            }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, p))
                        })
                    }

                    function u(t, i, r, s, u) {
                        var c = e(t);
                        (i || "").split(/\s/).forEach(function(e) {
                            n(t, e, r, s).forEach(function(e) {
                                delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
                            })
                        })
                    }

                    function c(e, n) {
                        return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(C, function(t, i) {
                            var r = n[t];
                            e[t] = function() {
                                return this[i] = E, r && r.apply(n, arguments)
                            }, e[i] = T
                        }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = E)), e
                    }

                    function l(t) {
                        var e, n = {
                            originalEvent: t
                        };
                        for (e in t) j.test(e) || t[e] === f || (n[e] = t[e]);
                        return c(n, t)
                    }
                    var f, h = 1,
                        p = Array.prototype.slice,
                        d = t.isFunction,
                        m = function(t) {
                            return "string" == typeof t
                        },
                        v = {},
                        g = {},
                        y = "onfocusin" in window,
                        b = {
                            focus: "focusin",
                            blur: "focusout"
                        },
                        w = {
                            mouseenter: "mouseover",
                            mouseleave: "mouseout"
                        };
                    g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents";
                    var x = {};
                    t.event = {
                        add: s,
                        remove: u
                    }, t.proxy = function(n, i) {
                        if (d(n)) {
                            var r = function() {
                                return n.apply(i, arguments)
                            };
                            return r._zid = e(n), r
                        }
                        if (m(i)) return t.proxy(n[i], n);
                        throw new TypeError("expected function")
                    }, t.fn.bind = function(t, e, n) {
                        return this.on(t, e, n)
                    }, t.fn.unbind = function(t, e) {
                        return this.off(t, e)
                    }, t.fn.one = function(t, e, n, i) {
                        return this.on(t, e, n, i, 1)
                    };
                    var E = function() {
                            return !0
                        },
                        T = function() {
                            return !1
                        },
                        j = /^([A-Z]|returnValue$|layer[XY]$)/,
                        C = {
                            preventDefault: "isDefaultPrevented",
                            stopImmediatePropagation: "isImmediatePropagationStopped",
                            stopPropagation: "isPropagationStopped"
                        };
                    t.fn.delegate = function(t, e, n) {
                        return this.on(e, t, n)
                    }, t.fn.undelegate = function(t, e, n) {
                        return this.off(e, t, n)
                    }, t.fn.live = function(e, n) {
                        return t(vw.container).delegate(this.selector, e, n), this
                    }, t.fn.die = function(e, n) {
                        return t(vw.container).undelegate(this.selector, e, n), this
                    }, t.fn.on = function(e, n, i, r, o) {
                        var a, c, h = this;
                        return e && !m(e) ? (t.each(e, function(t, e) {
                            h.on(t, n, i, e, o)
                        }), h) : (m(n) || d(r) || r === !1 || (r = i, i = n, n = f), (d(i) || i === !1) && (r = i, i = f), r === !1 && (r = T), h.each(function(f, h) {
                            o && (a = function(t) {
                                return u(h, t.type, r), r.apply(this, arguments)
                            }), n && (c = function(e) {
                                var i, o = t(e.target).closest(n, h).get(0);
                                return o && o !== h ? (i = t.extend(l(e), {
                                    currentTarget: o,
                                    liveFired: h
                                }), (a || r).apply(o, [i].concat(p.call(arguments, 1)))) : void 0
                            }), s(h, e, r, i, n, c || a)
                        }))
                    }, t.fn.off = function(e, n, i) {
                        var r = this;
                        return e && !m(e) ? (t.each(e, function(t, e) {
                            r.off(t, n, e)
                        }), r) : (m(n) || d(i) || i === !1 || (i = n, n = f), i === !1 && (i = T), r.each(function() {
                            u(this, e, i, n)
                        }))
                    }, t.fn.trigger = function(e, n) {
                        return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
                            !("dispatchEvent" in this) || t.os.android && window.useCommonTrigger ? t(this).triggerHandler(e, n) : this.dispatchEvent(e)
                        })
                    }, t.fn.triggerHandler = function(e, i) {
                        var r, o;
                        return this.each(function(a, s) {
                            r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = s, t.each(n(s, e.type || e), function(t, e) {
                                return o = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
                            })
                        }), o
                    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
                        t.fn[e] = function(t) {
                            return t ? this.bind(e, t) : this.trigger(e)
                        }
                    }), ["focus", "blur"].forEach(function(e) {
                        t.fn[e] = function(t) {
                            return t ? this.bind(e, t) : this.each(function() {
                                try {
                                    this[e]()
                                } catch (t) {}
                            }), this
                        }
                    }), t.Event = function(t, e) {
                        m(t) || (e = t, t = e.type);
                        var n = document.createEvent(g[t] || "Events"),
                            i = !0;
                        if (e)
                            for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
                        return n.initEvent(t, i, !0), c(n)
                    }
                }(Zepto),
                function(t) {
                    function e(e, n, i) {
                        var r = t.Event(n);
                        return t(e).trigger(r, i), !r.isDefaultPrevented()
                    }

                    function n(t, n, i, r) {
                        return t.global ? e(n || y, i, r) : void 0
                    }

                    function i(e) {
                        e.global && 0 === t.active++ && n(e, null, "ajaxStart")
                    }

                    function r(e) {
                        e.global && !--t.active && n(e, null, "ajaxStop")
                    }

                    function o(t, e) {
                        var i = e.context;
                        return e.beforeSend.call(i, t, e) === !1 || n(e, i, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, i, "ajaxSend", [t, e])
                    }

                    function a(t, e, i, r) {
                        var o = i.context,
                            a = "success";
                        i.success.call(o, t, a, e), r && r.resolveWith(o, [t, a, e]), n(i, o, "ajaxSuccess", [e, i, t]), u(a, e, i)
                    }

                    function s(t, e, i, r, o) {
                        var a = r.context;
                        r.error.call(a, i, e, t), o && o.rejectWith(a, [i, e, t]), n(r, a, "ajaxError", [i, r, t || e]), u(e, i, r)
                    }

                    function u(t, e, i) {
                        var o = i.context;
                        i.complete.call(o, e, t), n(i, o, "ajaxComplete", [e, i]), r(i)
                    }

                    function c() {}

                    function l(t) {
                        return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == E ? "json" : w.test(t) ? "script" : x.test(t) && "xml") || "text"
                    }

                    function f(t, e) {
                        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
                    }

                    function h(e) {
                        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
                    }

                    function p(e, n, i, r) {
                        return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
                            url: e,
                            data: n,
                            success: i,
                            dataType: r
                        }
                    }

                    function d(e, n, i, r) {
                        var o, a = t.isArray(n),
                            s = t.isPlainObject(n);
                        t.each(n, function(n, u) {
                            o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? d(e, u, i, n) : e.add(n, u)
                        })
                    }
                    var m, v, g = 0,
                        y = window.document,
                        b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                        w = /^(?:text|application)\/javascript/i,
                        x = /^(?:text|application)\/xml/i,
                        E = "application/json",
                        T = "text/html",
                        j = /^\s*$/;
                    t.active = 0, t.ajaxJSONP = function(e, n) {
                        if (!("type" in e)) return t.ajax(e);
                        var i, r, u = "sf_edu_wenku_jsonp",
                            c = e.jsonpCallback,
                            l = (t.isFunction(c) ? c() : c) || u + ++g,
                            f = y.createElement("script"),
                            h = window[l],
                            p = function(e) {
                                t(f).off().remove(), t(f).triggerHandler("error", e || "abort")
                            },
                            d = {
                                abort: p
                            };
                        if (n && n.promise(d), t(f).on("load error", function(o, u) {
                            clearTimeout(r), t(f).length && t(f).off().remove(), "error" != o.type && i ? a(i[0], d, e, n) : s(null, u || "error", d, e, n), window[l] = h, i && t.isFunction(h) && h(i[0]), h = i = void 0
                        }), o(d, e) === !1) return p("abort"), d;
                        window[l] = function() {
                            i = arguments
                        }, f.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l);
                        var m = y.head;
                        if (vw && vw.container) {
                            var v = t(vw.container).find(".sfa-head").get(0);
                            m = v || vw.container
                        }
                        return m.appendChild(f), e.timeout > 0 && (r = setTimeout(function() {
                            p("timeout")
                        }, e.timeout)), d
                    }, t.ajaxSettings = {
                        type: "GET",
                        beforeSend: c,
                        success: c,
                        error: c,
                        complete: c,
                        context: null,
                        global: !0,
                        xhr: function() {
                            return new window.XMLHttpRequest
                        },
                        accepts: {
                            script: "text/javascript, application/javascript, application/x-javascript",
                            json: E,
                            xml: "application/xml, text/xml",
                            html: T,
                            text: "text/plain"
                        },
                        crossDomain: !1,
                        timeout: 0,
                        processData: !0,
                        cache: !0
                    }, t.ajax = function(e) {
                        var n = t.extend({}, e || {}),
                            r = t.Deferred && t.Deferred();
                        for (m in t.ajaxSettings) void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
                        i(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), h(n), n.cache === !1 && (n.url = f(n.url, "_=" + Date.now()));
                        var u = n.dataType,
                            p = /\?.+=\?/.test(n.url);
                        if ("jsonp" == u || p) return p || (n.url = f(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, r);
                        var d, g = n.accepts[u],
                            y = {},
                            b = function(t, e) {
                                y[t.toLowerCase()] = [t, e]
                            },
                            w = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
                            x = n.xhr(),
                            E = x.setRequestHeader;
                        if (e.responseType && (x.responseType = e.responseType), r && r.promise(x), n.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", g || "*/*"), (g = n.mimeType || g) && (g.indexOf(",") > -1 && (g = g.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(g)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && b("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
                            for (v in n.headers) b(v, n.headers[v]);
                        if (x.setRequestHeader = b, x.onreadystatechange = function() {
                            if (4 == x.readyState) {
                                x.onreadystatechange = c, clearTimeout(d);
                                var e, i = !1;
                                if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == w) {
                                    u = u || l(n.mimeType || x.getResponseHeader("content-type")), e = "binary" == u ? x.response : x.responseText;
                                    try {
                                        "script" == u ? (1, eval)(e) : "xml" == u ? e = x.responseXML : "json" == u && (e = j.test(e) ? null : t.parseJSON(e))
                                    } catch (o) {
                                        i = o
                                    }
                                    i ? s(i, "parsererror", x, n, r) : a(e, x, n, r)
                                } else s(x.statusText || null, x.status ? "error" : "abort", x, n, r)
                            }
                        }, o(x, n) === !1) return x.abort(), s(null, "abort", x, n, r), x;
                        if (n.xhrFields)
                            for (v in n.xhrFields) x[v] = n.xhrFields[v];
                        var T = "async" in n ? n.async : !0;
                        x.open(n.type, n.url, T, n.username, n.password);
                        for (v in y) E.apply(x, y[v]);
                        return n.timeout > 0 && (d = setTimeout(function() {
                            x.onreadystatechange = c, x.abort(), s(null, "timeout", x, n, r)
                        }, n.timeout)), x.send(n.data ? n.data : null), x
                    }, t.get = function() {
                        return t.ajax(p.apply(null, arguments))
                    }, t.post = function() {
                        var e = p.apply(null, arguments);
                        return e.type = "POST", t.ajax(e)
                    }, t.getJSON = function() {
                        var e = p.apply(null, arguments);
                        return e.dataType = "json", t.ajax(e)
                    }, t.fn.load = function(e, n, i) {
                        if (!this.length) return this;
                        var r, o = this,
                            a = e.split(/\s/),
                            s = p(e, n, i),
                            u = s.success;
                        return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function(e) {
                            o.html(r ? t("<div>").html(e.replace(b, "")).find(r) : e), u && u.apply(o, arguments)
                        }, t.ajax(s), this
                    };
                    var C = encodeURIComponent;
                    t.param = function(t, e) {
                        var n = [];
                        return n.add = function(t, e) {
                            this.push(C(t) + "=" + C(e))
                        }, d(n, t, e), n.join("&").replace(/%20/g, "+")
                    }
                }(Zepto),
                function(t) {
                    t.fn.serializeArray = function() {
                        var e, n = [];
                        return t([].slice.call(this.get(0).elements)).each(function() {
                            e = t(this);
                            var i = e.attr("type");
                            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && n.push({
                                name: e.attr("name"),
                                value: e.val()
                            })
                        }), n
                    }, t.fn.serialize = function() {
                        var t = [];
                        return this.serializeArray().forEach(function(e) {
                            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                        }), t.join("&")
                    }, t.fn.submit = function(e) {
                        if (e) this.bind("submit", e);
                        else if (this.length) {
                            var n = t.Event("submit");
                            this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
                        }
                        return this
                    }
                }(Zepto),
                function(t) {
                    function e(t) {
                        var e = this.os = {},
                            n = this.browser = {},
                            i = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                            r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                            o = t.match(/(iPad).*OS\s([\d_]+)/),
                            a = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                            s = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
                            u = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                            c = u && t.match(/TouchPad/),
                            l = t.match(/Kindle\/([\d.]+)/),
                            f = t.match(/Silk\/([\d._]+)/),
                            h = t.match(/(BlackBerry).*Version\/([\d.]+)/),
                            p = t.match(/(BB10).*Version\/([\d.]+)/),
                            d = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                            m = t.match(/PlayBook/),
                            v = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
                            g = t.match(/Firefox\/([\d.]+)/),
                            y = t.match(/MSIE\s([\d.]+)/),
                            b = i && t.match(/Mobile\//) && !v,
                            w = t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !v;
                        (n.webkit = !!i) && (n.version = i[1]), r && (e.android = !0, e.version = r[2]), s && !a && (e.ios = e.iphone = !0, e.version = s[2].replace(/_/g, ".")), o && (e.ios = e.ipad = !0, e.version = o[2].replace(/_/g, ".")), a && (e.ios = e.ipod = !0, e.version = a[3] ? a[3].replace(/_/g, ".") : null), u && (e.webos = !0, e.version = u[2]), c && (e.touchpad = !0), h && (e.blackberry = !0, e.version = h[2]), p && (e.bb10 = !0, e.version = p[2]), d && (e.rimtabletos = !0, e.version = d[2]), m && (n.playbook = !0), l && (e.kindle = !0, e.version = l[1]), f && (n.silk = !0, n.version = f[1]), !f && e.android && t.match(/Kindle Fire/) && (n.silk = !0), v && (n.chrome = !0, n.version = v[1]), g && (n.firefox = !0, n.version = g[1]), y && (n.ie = !0, n.version = y[1]), b && (t.match(/Safari/) || e.ios) && (n.safari = !0), w && (n.webview = !0), e.tablet = !!(o || m || r && !t.match(/Mobile/) || g && t.match(/Tablet/) || y && !t.match(/Phone/) && t.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(r || s || u || h || p || v && t.match(/Android/) || v && t.match(/CriOS\/([\d.]+)/) || g && t.match(/Mobile/) || y && t.match(/Touch/)))
                    }
                    e.call(t, navigator.userAgent), t.__detect = e
                }(Zepto),
                function(t, e) {
                    function n(t) {
                        return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
                    }

                    function i(t) {
                        return r ? r + t : t.toLowerCase()
                    }
                    var r, o, a, s, u, c, l, f, h, p, d = "",
                        m = {
                            Webkit: "webkit",
                            Moz: "",
                            O: "o"
                        },
                        v = window.document,
                        g = v.createElement("div"),
                        y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                        b = {};
                    t.each(m, function(t, n) {
                        return g.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", r = n, !1) : void 0
                    }), o = d + "transform", b[a = d + "transition-property"] = b[s = d + "transition-duration"] = b[c = d + "transition-delay"] = b[u = d + "transition-timing-function"] = b[l = d + "animation-name"] = b[f = d + "animation-duration"] = b[p = d + "animation-delay"] = b[h = d + "animation-timing-function"] = "", t.fx = {
                        off: r === e && g.style.transitionProperty === e,
                        speeds: {
                            _default: 400,
                            fast: 200,
                            slow: 600
                        },
                        cssPrefix: d,
                        transitionEnd: i("TransitionEnd"),
                        animationEnd: i("AnimationEnd")
                    }, t.fn.animate = function(n, i, r, o, a) {
                        return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a)
                    }, t.fn.anim = function(i, r, d, m, v) {
                        var g, w, x, E = {},
                            T = "",
                            j = this,
                            C = t.fx.transitionEnd,
                            S = !1;
                        if (r === e && (r = t.fx.speeds._default / 1e3), v === e && (v = 0), t.fx.off && (r = 0), "string" == typeof i) E[l] = i, E[f] = r + "s", E[p] = v + "s", E[h] = d || "linear", C = t.fx.animationEnd;
                        else {
                            w = [];
                            for (g in i) y.test(g) ? T += g + "(" + i[g] + ") " : (E[g] = i[g], w.push(n(g)));
                            T && (E[o] = T, w.push(o)), r > 0 && "object" == typeof i && (E[a] = w.join(", "), E[s] = r + "s", E[c] = v + "s", E[u] = d || "linear")
                        }
                        return x = function(e) {
                            if ("undefined" != typeof e) {
                                if (e.target !== e.currentTarget) return;
                                t(e.target).unbind(C, x)
                            } else t(this).unbind(C, x);
                            S = !0, t(this).css(b), m && m.call(this)
                        }, r > 0 && (this.bind(C, x), setTimeout(function() {
                            S || x.call(j)
                        }, 1e3 * r + 25)), this.size() && this.get(0).clientLeft, this.css(E), 0 >= r && setTimeout(function() {
                            j.each(function() {
                                x.call(this)
                            })
                        }, 0), this
                    }, g = null
                }(Zepto),
                function(t, e) {
                    function n(n, i, r, o, a) {
                        "function" != typeof i || a || (a = i, i = e);
                        var s = {
                            opacity: r
                        };
                        return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a)
                    }

                    function i(e, i, r, o) {
                        return n(e, i, 0, r, function() {
                            a.call(t(this)), o && o.call(this)
                        })
                    }
                    var r = window.document,
                        o = (r.documentElement, t.fn.show),
                        a = t.fn.hide,
                        s = t.fn.toggle;
                    t.fn.show = function(t, i) {
                        return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
                    }, t.fn.hide = function(t, n) {
                        return t === e ? a.call(this) : i(this, t, "0,0", n)
                    }, t.fn.toggle = function(n, i) {
                        return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
                            var e = t(this);
                            e["none" == e.css("display") ? "show" : "hide"](n, i)
                        })
                    }, t.fn.fadeTo = function(t, e, i) {
                        return n(this, t, e, null, i)
                    }, t.fn.fadeIn = function(t, e) {
                        var n = this.css("opacity");
                        return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
                    }, t.fn.fadeOut = function(t, e) {
                        return i(this, t, null, e)
                    }, t.fn.fadeToggle = function(e, n) {
                        return this.each(function() {
                            var i = t(this);
                            i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
                        })
                    }
                }(Zepto),
                function(t) {
                    var e, n = [];
                    t.fn.remove = function() {
                        return this.each(function() {
                            this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function() {
                                n = []
                            }, 6e4)), this.parentNode.removeChild(this))
                        })
                    }
                }(Zepto),
                function(t) {
                    function e(e, i) {
                        var u = e[s],
                            c = u && r[u];
                        if (void 0 === i) return c || n(e);
                        if (c) {
                            if (i in c) return c[i];
                            var l = a(i);
                            if (l in c) return c[l]
                        }
                        return o.call(t(e), i)
                    }

                    function n(e, n, o) {
                        var u = e[s] || (e[s] = ++t.uuid),
                            c = r[u] || (r[u] = i(e));
                        return void 0 !== n && (c[a(n)] = o), c
                    }

                    function i(e) {
                        var n = {};
                        return t.each(e.attributes || u, function(e, i) {
                            0 == i.name.indexOf("data-") && (n[a(i.name.replace("data-", ""))] = t.zepto.deserializeValue(i.value))
                        }), n
                    }
                    var r = {},
                        o = t.fn.data,
                        a = t.camelCase,
                        s = t.expando = "Zepto" + +new Date,
                        u = [];
                    t.fn.data = function(i, r) {
                        return void 0 === r ? t.isPlainObject(i) ? this.each(function(e, r) {
                            t.each(i, function(t, e) {
                                n(r, t, e)
                            })
                        }) : 0 == this.length ? void 0 : e(this[0], i) : this.each(function() {
                            n(this, i, r)
                        })
                    }, t.fn.removeData = function(e) {
                        return "string" == typeof e && (e = e.split(/\s+/)), this.each(function() {
                            var n = this[s],
                                i = n && r[n];
                            i && t.each(e || i, function(t) {
                                delete i[e ? a(this) : t]
                            })
                        })
                    }, ["remove", "empty"].forEach(function(e) {
                        var n = t.fn[e];
                        t.fn[e] = function() {
                            var t = this.find("*");
                            return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this)
                        }
                    })
                }(Zepto),
                function(t) {
                    function e(n) {
                        var i = [
                                ["resolve", "done", t.Callbacks({
                                    once: 1,
                                    memory: 1
                                }), "resolved"],
                                ["reject", "fail", t.Callbacks({
                                    once: 1,
                                    memory: 1
                                }), "rejected"],
                                ["notify", "progress", t.Callbacks({
                                    memory: 1
                                })]
                            ],
                            r = "pending",
                            o = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return a.done(arguments).fail(arguments), this
                                },
                                then: function() {
                                    var n = arguments;
                                    return e(function(e) {
                                        t.each(i, function(i, r) {
                                            var s = t.isFunction(n[i]) && n[i];
                                            a[r[1]](function() {
                                                var n = s && s.apply(this, arguments);
                                                if (n && t.isFunction(n.promise)) n.promise().done(e.resolve).fail(e.reject).progress(e.notify);
                                                else {
                                                    var i = this === o ? e.promise() : this,
                                                        a = s ? [n] : arguments;
                                                    e[r[0] + "With"](i, a)
                                                }
                                            })
                                        }), n = null
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? t.extend(e, o) : o
                                }
                            },
                            a = {};
                        return t.each(i, function(t, e) {
                            var n = e[2],
                                s = e[3];
                            o[e[1]] = n.add, s && n.add(function() {
                                r = s
                            }, i[1 ^ t][2].disable, i[2][2].lock), a[e[0]] = function() {
                                return a[e[0] + "With"](this === a ? o : this, arguments), this
                            }, a[e[0] + "With"] = n.fireWith
                        }), o.promise(a), n && n.call(a, a), a
                    }
                    var n = Array.prototype.slice;
                    t.when = function(i) {
                        var r, o, a, s = n.call(arguments),
                            u = s.length,
                            c = 0,
                            l = 1 !== u || i && t.isFunction(i.promise) ? u : 0,
                            f = 1 === l ? i : e(),
                            h = function(t, e, i) {
                                return function(o) {
                                    e[t] = this, i[t] = arguments.length > 1 ? n.call(arguments) : o, i === r ? f.notifyWith(e, i) : --l || f.resolveWith(e, i)
                                }
                            };
                        if (u > 1)
                            for (r = new Array(u), o = new Array(u), a = new Array(u); u > c; ++c) s[c] && t.isFunction(s[c].promise) ? s[c].promise().done(h(c, a, s)).fail(f.reject).progress(h(c, o, r)) : --l;
                        return l || f.resolveWith(a, s), f.promise()
                    }, t.Deferred = e
                }(Zepto),
                function(t) {
                    t.Callbacks = function(e) {
                        e = t.extend({}, e);
                        var n, i, r, o, a, s, u = [],
                            c = !e.once && [],
                            l = function(t) {
                                for (n = e.memory && t, i = !0, s = o || 0, o = 0, a = u.length, r = !0; u && a > s; ++s)
                                    if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                                        n = !1;
                                        break
                                    }
                                r = !1, u && (c ? c.length && l(c.shift()) : n ? u.length = 0 : f.disable())
                            },
                            f = {
                                add: function() {
                                    if (u) {
                                        var i = u.length,
                                            s = function(n) {
                                                t.each(n, function(t, n) {
                                                    "function" == typeof n ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" != typeof n && s(n)
                                                })
                                            };
                                        s(arguments), r ? a = u.length : n && (o = i, l(n))
                                    }
                                    return this
                                },
                                remove: function() {
                                    return u && t.each(arguments, function(e, n) {
                                        for (var i;
                                            (i = t.inArray(n, u, i)) > -1;) u.splice(i, 1), r && (a >= i && --a, s >= i && --s)
                                    }), this
                                },
                                has: function(e) {
                                    return !(!u || !(e ? t.inArray(e, u) > -1 : u.length))
                                },
                                empty: function() {
                                    return a = u.length = 0, this
                                },
                                disable: function() {
                                    return u = c = n = void 0, this
                                },
                                disabled: function() {
                                    return !u
                                },
                                lock: function() {
                                    return c = void 0, n || f.disable(), this
                                },
                                locked: function() {
                                    return !c
                                },
                                fireWith: function(t, e) {
                                    return !u || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : l(e)), this
                                },
                                fire: function() {
                                    return f.fireWith(this, arguments)
                                },
                                fired: function() {
                                    return !!i
                                }
                            };
                        return f
                    }
                }(Zepto),
                function(t) {
                    function e(e) {
                        return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
                    }

                    function n(t, e) {
                        t = t.replace(/=#\]/g, '="#"]');
                        var n, i, r = s.exec(t);
                        if (r && r[2] in a && (n = a[r[2]], i = r[3], t = r[1], i)) {
                            var o = Number(i);
                            i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o
                        }
                        return e(t, n, i)
                    }
                    var i = t.zepto,
                        r = i.qsa,
                        o = i.matches,
                        a = t.expr[":"] = {
                            visible: function() {
                                return e(this) ? this : void 0
                            },
                            hidden: function() {
                                return e(this) ? void 0 : this
                            },
                            selected: function() {
                                return this.selected ? this : void 0
                            },
                            checked: function() {
                                return this.checked ? this : void 0
                            },
                            parent: function() {
                                return this.parentNode
                            },
                            first: function(t) {
                                return 0 === t ? this : void 0
                            },
                            last: function(t, e) {
                                return t === e.length - 1 ? this : void 0
                            },
                            eq: function(t, e, n) {
                                return t === n ? this : void 0
                            },
                            contains: function(e, n, i) {
                                return t(this).text().indexOf(i) > -1 ? this : void 0
                            },
                            has: function(t, e, n) {
                                return i.qsa(this, n).length ? this : void 0
                            }
                        },
                        s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
                        u = /^\s*>/,
                        c = "Zepto" + +new Date;
                    i.qsa = function(e, o) {
                        return n(o, function(n, a, s) {
                            try {
                                var l;
                                !n && a ? n = "*" : u.test(n) && (l = t(e).addClass(c), n = "." + c + " " + n);
                                var f = r(e, n)
                            } catch (h) {
                                throw console.error("error performing selector: %o", o), h
                            } finally {
                                l && l.removeClass(c)
                            }
                            return a ? i.uniq(t.map(f, function(t, e) {
                                return a.call(t, e, f, s)
                            })) : f
                        })
                    }, i.matches = function(t, e) {
                        return n(e, function(e, n, i) {
                            return !(e && !o(t, e) || n && n.call(t, null, i) !== t)
                        })
                    }
                }(Zepto),
                function(t) {
                    t.fn.end = function() {
                        return this.prevObject || t()
                    }, t.fn.andSelf = function() {
                        return this.add(this.prevObject || t())
                    }, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e) {
                        var n = t.fn[e];
                        t.fn[e] = function() {
                            var t = n.apply(this, arguments);
                            return t.prevObject = this, t
                        }
                    })
                }(Zepto);
        }
    }).apply(window._SF_ ? window._SF_.page : window, window._SF_ ? [window._SF_.page.define, window._SF_.page.require, window._SF_.vw, window._SF_.page] : [window.define, window.require, null, null]);;
    (function(define, require, vw, page) {
        with(page) {
            "use strict";
            ! function() {
                var t = !1,
                    o = !1;
                return function() {
                    var n = $.zepto.init;
                    $.zepto.init = function(i) {
                        if ("string" === $.type(i) && 1 === arguments.length && (o || require && require.globalData && require.globalData.get && (o = !0, t = require.globalData.get("isYogDebug")), i = i.trim(), "<" !== i[0])) {
                            var e = "请使用 $(vw.container).find('" + i + "') 来选择元素";
                            t && console.error(e)
                        }
                        return n.apply(this, [].slice.call(arguments))
                    }
                }(), window._SF_.__SYNC__PAGE__ ? void($.sfDetach = function() {}) : (function() {
                        var t = $.ajax,
                            o = window.location.hostname,
                            n = window.location.protocol,
                            i = "",
                            e = require.globalData.get("urlDomainPrefix") || "";
                        "http:" !== n || "m.baidu.com" !== o && "www.baidu.com" !== o && "wk.baidu.com" !== e || (i = "https:"), $.ajax = function(o) {
                            o = o || {};
                            var n = o.url || "";
                            return e && !/^(https?:)?\/\//.test(n) && (!/^\//.test(n), o.url = i + "//" + e + n), location.host !== e && /^.+\.baidu\.(com|mobi)(:\d+)?$/.test(location.host) && (o.xhrFields = o.xhrFields || {}, o.xhrFields.withCredentials = !0), t.call(this, o)
                        }
                    }(), void
                    function() {
                        var t = $.zepto.init,
                            o = [],
                            n = !1;
                        vw.on("attach", function() {
                            n = !0, o.length && $.each(o, function(t, o) {
                                o($)
                            })
                        }), $.zepto.init = function(i) {
                            return $.isFunction(i) ? void(n ? i($) : o.push(i)) : t.apply(this, [].slice.call(arguments))
                        };
                        var i = [];
                        vw.on("detach", function() {
                            var t = this;
                            $.each(i, function(o, n) {
                                n.call(t)
                            })
                        }), $.sfDetach = function(t) {
                            i.push(t)
                        }, $.sfDetach(function() {
                            try {
                                var t = window._SF_._global_._ssp || {},
                                    o = t.destroy || function() {};
                                o()
                            } catch (n) {}
                        })
                    }())
            }(),
            function() {
                function t(t, o) {
                    a++, o.__custom_for_sf_onload = r
                }

                function o(t, o) {
                    o.__custom_for_sf_onload === r && (a--, n())
                }

                function n() {
                    c && !a && e === i && ($(document).off("ajaxComplete", o), $(customEventMediator).trigger("mock-sf-onload"))
                }
                if (!window._SF_.__SYNC__PAGE__) {
                    var i, e = 0,
                        a = 0,
                        c = !1,
                        r = "beforeAttach";
                    $(document).on("ajaxBeforeSend", t).on("ajaxComplete", o), $(function() {
                        function o() {
                            e++, n()
                        }
                        c = !0, $(document).off("ajaxBeforeSend", t), i = $(vw.container).find("img").length, i ? $(vw.container).find("img").each(function() {
                            try {
                                this.complete ? o() : ($(this).on("load", o), $(this).on("error", o))
                            } catch (t) {}
                        }) : n()
                    }), vw.on("detach", function() {
                        $(document).off("ajaxBeforeSend", t).off("ajaxComplete", o)
                    })
                }
            }();
        }
    }).apply(window._SF_ ? window._SF_.page : window, window._SF_ ? [window._SF_.page.define, window._SF_.page.require, window._SF_.vw, window._SF_.page] : [window.define, window.require, null, null]);;
    (function(define, require, vw, page) {
        with(page) {
            "use strict";
            ! function(r, t) {
                function n(r) {
                    return "function" == typeof r
                }

                function e(r) {
                    d >= p || (r.msg = r.msg.substr(0, 500), r.efr = N[r.from] || N.other, delete r.from, v[r.msg] || (v[r.msg] = !0, y.push(r), d++, b && clearTimeout(b), b = setTimeout(function() {
                        b = null, c()
                    }, h)))
                }

                function c() {
                    for (var r; y.length > 0;) r = y.shift(), wapfelog.send("click", r, m, l), _(r)
                }

                function o(r) {
                    if (!r) return {};
                    r = r.replace(/[\(\)]/g, "");
                    var t = r.match(/https?:\/\/[^\n]+/);
                    t = t ? $.trim(t[0]) : "";
                    var n = t.match(/:(\d+):(\d+)/);
                    n ? t = t.replace(n[0], "") : n = ["", 0, 0];
                    var e = r.split(/\n\n/)[0] || "";
                    return e = e.replace(/\n/g, "").split(/\s*\bat\b\s*/).slice(0, 9).join("@at "), {
                        script: t,
                        lineNumber: n[1],
                        colNumber: n[2],
                        stack: e
                    }
                }

                function i(r) {
                    var t = o(r.stack),
                        n = r.msg || "",
                        c = t.stack || r.stack || "";
                    c && (n = -1 === c.indexOf(n) ? n + "@" + c : c);
                    var i = {
                        msg: n,
                        file: r.script || t.script || "",
                        lineno: r.lineNumber || t.lineNumber || 0,
                        colno: r.colNumber || t.colNumber || 0,
                        from: r.from
                    };
                    e(i)
                }

                function a(t, n) {
                    return function() {
                        try {
                            t.apply(this, n || arguments)
                        } catch (e) {
                            var c = {
                                msg: e.message || e.description || e.toString() || "",
                                script: e.fileName || e.sourceURL || e.script || "",
                                stack: e.stack || "",
                                from: "trycatch"
                            };
                            try {
                                i(c)
                            } catch (e) {}
                            if (!w) {
                                var o = r.onerror;
                                r.onerror = function() {}, w = setTimeout(function() {
                                    r.onerror = o, w = null
                                }, g)
                            }
                            throw e
                        }
                    }
                }

                function u(r, t) {
                    var e = function() {
                        for (var e, c, o = [], i = 0, u = arguments.length; u > i; i++) e = arguments[i], n(e) && (c = a(e), t && (e.__trycatchWrap ? c = e.__trycatchWrap : e.__trycatchWrap = c), e = c), o.push(e);
                        return r.apply(this, o)
                    };
                    return e
                }

                function s(r) {
                    return $.each(r, function(t, e) {
                        n(e) && (r[t] = a(e))
                    }), r
                }

                function f(r) {
                    return function(t, n) {
                        if ("string" == typeof t) try {
                            t = new Function(t)
                        } catch (e) {
                            throw e
                        }
                        var c = [].slice.call(arguments, 2);
                        return t = a(t, c.length && c), r(t, n)
                    }
                }
                var l = "100567",
                    m = "1",
                    p = 50,
                    h = 300,
                    g = 0,
                    v = {},
                    y = [],
                    b = null,
                    d = 0,
                    N = {
                        onerror: 1,
                        trycatch: 2,
                        custom: 3,
                        other: 4
                    },
                    _ = "function" == typeof alog ? function(r) {
                        alog("exception.fire", "catch", {
                            msg: r.msg,
                            path: r.file,
                            ln: r.lineno
                        })
                    } : function() {},
                    k = r.onerror;
                r.onerror = function(r, t, n, e, c) {
                    if (k) try {
                        k.apply(this, arguments)
                    } catch (o) {}
                    var a = {
                        msg: r || "",
                        script: t || "",
                        lineNumber: n || 0,
                        colNumber: e || 0,
                        stack: c ? c.stack : "",
                        from: "onerror"
                    };
                    try {
                        i(a)
                    } catch (o) {}
                    return !1
                }, $ && $.sfDetach && $.sfDetach(function() {
                    r.onerror = k
                });
                var w = null;
                ! function() {
                    var r = t.$;
                    if (r) {
                        var e = r.fn.on,
                            c = r.fn.off;
                        r.fn.on = u(e, !0), r.fn.off = function() {
                            for (var r, t = [], e = 0, o = arguments.length; o > e; e++) r = arguments[e], n(r) && r.__trycatchWrap && (r = r.__trycatchWrap), t.push(r);
                            return c.apply(this, t)
                        };
                        var o = r.zepto.init;
                        r.zepto.init = function(r) {
                            return n(r) ? (r = a(r), o.call(this, r)) : o.apply(this, arguments)
                        };
                        var i = r.ajax;
                        r.ajax = function(r) {
                            return s(r), i.call(this, r)
                        };
                        var f = r.ajaxJSONP;
                        r.ajaxJSONP = function(r, t) {
                            return s(r), f.call(this, r, t)
                        }
                    }
                }(),
                function() {
                    var r = t.require,
                        n = t.define;
                    t.require = u(r), $.extend(t.require, r), t.define = u(n), $.extend(t.define, n), t.require.async = u(t.require.async)
                }(), t.setTimeout = f(t.setTimeout || r.setTimeout), t.setInterval = f(t.setInterval || r.setInterval), t.jsErrorReporter = {
                    push: function(r) {
                        if (r && r.msg) {
                            var t = {
                                msg: r.msg || "",
                                file: r.script || "",
                                lineno: r.lineNumber || 0,
                                colno: r.colNumber || 0,
                                from: "custom"
                            };
                            e(t)
                        }
                    },
                    wrap: function(r) {
                        return n(r) ? a(r) : s(r)
                    }
                }
            }(window, window._SF_.page);
        }
    }).apply(window._SF_ ? window._SF_.page : window, window._SF_ ? [window._SF_.page.define, window._SF_.page.require, window._SF_.vw, window._SF_.page] : [window.define, window.require, null, null]);;
    (function(define, require, vw, page) {
        with(page) {
            function WapFelog() {}
            var crossDomain = require("sf_common:widget/util/cross_domain/cross_domain.js").createSingleCrossDomain(),
                Promise = require("sf_common:widget/util/cross_domain/promise.js").Promise,
                wapfelogMap = this.wapfelogMap = {};
            WapFelog.prototype = {
                constructor: WapFelog,
                log: function(o) {
                    var e = new Image,
                        t = "wap_log_" + Math.floor(2147483648 * Math.random()).toString(36);
                    wapfelogMap[t] = e, e.onload = e.onerror = e.onabort = function() {
                        e.onload = e.onerror = e.onabort = null, wapfelogMap[t] = null, e = null
                    }, e.src = o
                },
                getSfHit: function() {
                    var o = 0,
                        e = !1,
                        t = null;
                    return function() {
                        return e ? Promise.resolve(o) : t ? t : t = crossDomain.cookie.get("H_WISE_SIDS").then(function(t) {
                            t = t.value || "";
                            var n = /(^|_)11424([1-4])($|_)/.exec(t);
                            return n && (o = parseInt(n[2], 10) || 0), e = !0, o
                        })
                    }
                }(),
                send: function(o, e, t, n) {
                    var r = this;
                    n = n || 1e5;
                    var i = 7,
                        a = (new Date).getTime(),
                        c = [],
                        s = "https://wkctj.baidu.com",
                        l = 0;
                    if (/iPhone/.test(navigator.userAgent) ? i = 6 : /iPad/.test(navigator.userAgent) && (i = 5), "pv" === o || "click" === o || "ad" === o) {
                        var f = (page || customEventMediator || {}).wkwapfelogConf;
                        e = e || {};
                        for (var u in f) f.hasOwnProperty(u) && (e[u] = f[u]);
                        if (e && (t || (/yd\.baidu\.com/.test(location.href) || /yuedu\.baidu\.com/.test(location.href) ? t = 2 : (/wk\.baidu\.com/.test(location.href) || /wenku\.baidu\.com/.test(location.href)) && (t = 1)), "click" !== o || n)) {
                            "https:" === document.location.protocol && (l = 1);
                            var d = 0;
                            if (window._SF_.__SYNC__PAGE__ && (d = 1), "pv" === o ? c = [s + "/pv.gif?pid=1&bid=" + t + "&fr=" + i + "&act_id=" + n + "&ssl=" + l] : "click" === o ? c = [s + "/click.gif?pid=1&bid=" + t + "&fr=" + i + "&act_id=" + n + "&ssl=" + l] : "ad" === o && (c = [s + "/ad.gif?pid=1&bid=" + t + "&fr=" + i + "&ssl=" + l]), c = c.concat(["isSync=" + d, "url=" + encodeURIComponent(location.href), "t=" + a, "refer=" + (document.referrer ? encodeURIComponent(document.referrer) : "")]), e)
                                for (var p in e) e.hasOwnProperty(p) && c.push(p + "=" + encodeURIComponent(e[p]));
                            var g = 0;
                            this.getSfHit().then(function(o) {
                                o && (g = o), c.push("sf_hit=" + g)
                            }).catch(function() {}).then(function() {
                                r.log(c.join("&"))
                            })
                        }
                    }
                }
            }, this.wapfelog = new WapFelog;
        }
    }).apply(window._SF_ ? window._SF_.page : window, window._SF_ ? [window._SF_.page.define, window._SF_.page.require, window._SF_.vw, window._SF_.page] : [window.define, window.require, null, null]);;
    (function(define, require, vw, page) {
        with(page) {
            var logSendAllPage = function() {
                var o = location.href || "",
                    e = (new Date).getTime(),
                    a = ["//wkclick.baidu.com/v.gif?pid=332", "url=" + encodeURIComponent(o), "type=66666666", "t=" + e, "nsact=base.pv", "action=base_wa_pv"];
                "https:" === location.protocol && a.push("ssl=1");
                var l = window._SF_.page.wapfelog || {};
                l && l.log && l.log(a.join("&"))
            };
            logSendAllPage();
        }
    }).apply(window._SF_ ? window._SF_.page : window, window._SF_ ? [window._SF_.page.define, window._SF_.page.require, window._SF_.vw, window._SF_.page] : [window.define, window.require, null, null]);;
    (function(define, require, vw, page) {
        with(page) {
            $(document).ready(function() {
                function e(e) {
                    if ($.trim(e)) {
                        var a = "://",
                            c = e.indexOf(a);
                        c >= 0 && (c += a.length, e = e.slice(c));
                        var i = e.split("/"),
                            r = /([^?&:]+)/g,
                            s = i[0].match(r)[0];
                        return s
                    }
                }

                function a() {
                    var a = "m.baidu.com",
                        c = "wk.baidu.com",
                        s = [];
                    return l.test(r) ? s.push("SF") : e(i) === a && s.push("WISE"), (!$.trim(i) && !l.test(r) || e(i) === c || "wenku.baidu.com" === e(i)) && s.push("WK"), !n.test(i) && $.trim(i) && s.push("NOTBAIDU"), s
                }

                function c(e) {
                    e.all && wapfelog.send("click", {}, 1, e.all), t.test(r) ? e.view && wapfelog.send("click", {}, 1, e.view) : s.test(r) && e.search && wapfelog.send("click", {}, 1, e.search)
                }
                for (var i = document.referrer, r = window.location.href, s = /\/search[^\w]?/, t = /\/view[^\w]?/, l = /\/sf_edu_wenku\//, n = /\.baidu\./i, u = a(), w = 0; w < u.length; w++) {
                    var h = {};
                    switch (u[w]) {
                        case "NOTBAIDU":
                            h.all = 100691, h.view = 100695, h.search = 100699;
                            break;
                        case "SF":
                            h.all = 100692, h.view = 100697, h.search = 100701;
                            break;
                        case "WK":
                            h.all = 100693, h.view = 100698, h.search = 100702;
                            break;
                        case "WISE":
                            h.all = 100694, h.view = 100696, h.search = 100700
                    }
                    c(h)
                }
            });
        }
    }).apply(window._SF_ ? window._SF_.page : window, window._SF_ ? [window._SF_.page.define, window._SF_.page.require, window._SF_.vw, window._SF_.page] : [window.define, window.require, null, null]);
});