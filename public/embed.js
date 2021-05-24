/*!
 Copyright 2020 Kiln Enterprises Ltd

This file may be freely used, and distributed without modification.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
OF THE POSSIBILITY OF SUCH DAMAGE.

*/
window.FlourishConfig = {
    app_url: "https://app.flourish.studio",
    public_url: "https://public.flourish.studio/",
    embeds_url: "https://flo.uri.sh/"
}, function () {
    "use strict";
    var t, r;

    function e() {
        if (null == t) {
            var r = function () {
                var t = window.location;
                "about:srcdoc" == t.href && (t = window.parent.location);
                var r = {};
                return function (t, e, i) {
                    // eslint-disable-next-line no-cond-assign
                    for (; i = e.exec(t);) r[decodeURIComponent(i[1])] = decodeURIComponent(i[2])
                }(t.search.substring(1).replace(/\+/g, "%20"), /([^&=]+)=?([^&]*)/g), r
            }();
            t = "referrer" in r ? /^https:\/\/medium.com\//.test(r.referrer) : !("auto" in r)
        }
        return t
    }

    function i(t) {
        var r = t || window.innerWidth;
        return r > 999 ? 650 : r > 599 ? 575 : 400
    }

    function a(t, e) {
        if (window.top !== window.self) {
            var i = window;
            if ("srcdoc" == i.location.pathname && (i = i.parent), r) return t = parseInt(t, 10), void i.parent.postMessage({
                sentinel: "amp",
                type: "embed-size",
                height: t
            }, "*");
            var a = {
                sender: "Flourish",
                context: "iframe.resize",
                method: "resize",
                height: t,
                src: i.location.toString()
            };
            if (e) for (var o in e) a[o] = e[o];
            i.parent.postMessage(JSON.stringify(a), "*")
        }
    }

    function o() {
        return (-1 !== navigator.userAgent.indexOf("Safari") || -1 !== navigator.userAgent.indexOf("iPhone")) && -1 == navigator.userAgent.indexOf("Chrome")
    }

    function s(t) {
        window.addEventListener("message", (function (r) {
            if (null != r.source && (r.origin === document.location.origin || r.origin.match(/\/\/localhost:\d+$|\/\/flourish-api\.com$|\.flourish\.(?:local(:\d+)?|net|rocks|studio)$|\.uri\.sh$/))) {
                var e;
                try {
                    e = JSON.parse(r.data)
                } catch (t) {
                    return void console.warn("Unexpected non-JSON message: " + JSON.stringify(r.data))
                }
                if ("Flourish" === e.sender) {
                    for (var i = document.querySelectorAll("iframe"), a = 0; a < i.length; a++) if (i[a].contentWindow == r.source || i[a].contentWindow == r.source.parent) return void t(e, i[a]);
                    console.warn("could not find frame", e)
                }
            }
        })), o() && (window.addEventListener("resize", n), n())
    }

    function n() {
        for (var t = document.querySelectorAll(".flourish-embed"), r = 0; r < t.length; r++) {
            var e = t[r];
            if (!e.getAttribute("data-width")) {
                var i = e.querySelector("iframe"), a = window.getComputedStyle(e),
                    o = e.offsetWidth - parseFloat(a.paddingLeft) - parseFloat(a.paddingRight);
                i.style.width = o + "px"
            }
        }
    }

    function l(t, r, e, a) {
        var s;
        e && "number" == typeof e ? (s = e, e += "px") : e && e.match(/^[ \t\r\n\f]*([+-]?\d+|\d*\.\d+(?:[eE][+-]?\d+)?)(?:\\?[Pp]|\\0{0,4}[57]0(?:\r\n|[ \t\r\n\f])?)(?:\\?[Xx]|\\0{0,4}[57]8(?:\r\n|[ \t\r\n\f])?)[ \t\r\n\f]*$/) && (s = parseFloat(e)), a && "number" == typeof a && (a += "px");
        var n = document.createElement("iframe");
        return n.setAttribute("scrolling", "no"), n.setAttribute("frameborder", "0"), n.setAttribute("title", "Interactive or visual content"), n.setAttribute("sandbox", "allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"), r.appendChild(n), e ? n.style.width = e : o() ? n.style.width = r.offsetWidth + "px" : n.style.width = "100%", !!a || (t.match(/\?/) ? t += "&auto=1" : t += "?auto=1", a = i(s || n.offsetWidth) + "px"), a && ("%" === a.charAt(a.length - 1) && (a = parseFloat(a) / 100 * r.parentNode.offsetHeight + "px"), n.style.height = a), n.setAttribute("src", t), n
    }

    var u = {
        de: {credits: {default: "Erstellt mit Flourish"}},
        en: {
            credits: {
                default: "A Flourish data visualization",
                chart: "A Flourish chart",
                map: {text: "A Flourish map", url: "https://flourish.studio/visualisations/maps/"},
                survey: {
                    text: "A Flourish survey visualization",
                    url: "https://flourish.studio/visualisations/survey-data/"
                },
                network: {
                    text: "A Flourish network chart",
                    url: "https://flourish.studio/visualisations/network-charts/"
                },
                scatter: {
                    text: "A Flourish scatter chart",
                    url: "https://flourish.studio/visualisations/scatter-charts/"
                },
                sankey: {text: "A Flourish sankey chart", url: "https://flourish.studio/visualisations/sankey-charts/"},
                quiz: "A Flourish quiz",
                bar_race: {
                    text: "A Flourish bar chart race",
                    url: "https://flourish.studio/visualisations/bar-chart-race/"
                },
                "bar-chart-race": {
                    text: "A Flourish bar chart race",
                    url: "https://flourish.studio/visualisations/bar-chart-race/"
                },
                cards: "Interactive content by Flourish",
                chord: "A Flourish chord diagram",
                election: "A Flourish election chart",
                globe: {text: "A Flourish connections globe", url: "https://flourish.studio/visualisations/maps/"},
                hierarchy: {
                    text: "A Flourish hierarchy chart",
                    url: "https://flourish.studio/visualisations/treemaps/"
                },
                "line-chart-race": "A Flourish line chart race",
                parliament: "A Flourish election chart",
                "photo-slider": "Interactive content by Flourish",
                slope: {text: "A Flourish slope chart", url: "https://flourish.studio/visualisations/slope-charts/"},
                sports: "A Flourish sports visualization",
                explore: "A Flourish data visualization",
                "word-cloud": "A Flourish data visualization"
            }
        },
        es: {
            credits: {
                default: "Creado con Flourish",
                bar_race: {text: "Créé avec Flourish", url: "https://flourish.studio/visualisations/bar-chart-race/"},
                "bar-chart-race": {
                    text: "Créé avec Flourish",
                    url: "https://flourish.studio/visualisations/bar-chart-race/"
                }
            }
        },
        fr: {
            credits: {
                default: "Créé avec Flourish",
                bar_race: {text: "Créé avec Flourish", url: "https://flourish.studio/visualisations/bar-chart-race/"},
                "bar-chart-race": {
                    text: "Créé avec Flourish",
                    url: "https://flourish.studio/visualisations/bar-chart-race/"
                }
            }
        },
        it: {
            credits: {
                default: "Creato con Flourish",
                bar_race: {text: "Creato con Flourish", url: "https://flourish.studio/visualisations/bar-chart-race/"},
                "bar-chart-race": {
                    text: "Creato con Flourish",
                    url: "https://flourish.studio/visualisations/bar-chart-race/"
                }
            }
        },
        mi: {
            credits: {
                default: "Hangaia ki te Flourish",
                bar_race: {
                    text: "Hangaia ki te Flourish",
                    url: "https://flourish.studio/visualisations/bar-chart-race/"
                },
                "bar-chart-race": {
                    text: "Hangaia ki te Flourish",
                    url: "https://flourish.studio/visualisations/bar-chart-race/"
                }
            }
        },
        nl: {
            credits: {
                default: "Gemaakt met Flourish",
                bar_race: {text: "Gemaakt met Flourish", url: "https://flourish.studio/visualisations/bar-chart-race/"},
                "bar-chart-race": {
                    text: "Gemaakt met Flourish",
                    url: "https://flourish.studio/visualisations/bar-chart-race/"
                }
            }
        },
        pt: {
            default: "Feito com Flourish",
            bar_race: {text: "Feito com Flourish", url: "https://flourish.studio/visualisations/bar-chart-race/"},
            "bar-chart-race": {
                text: "Feito com Flourish",
                url: "https://flourish.studio/visualisations/bar-chart-race/"
            }
        }
    };

    function h(t, r, e, i) {
        t = t || "https://flourish.studio", r = r || "?utm_source=api&utm_campaign=" + window.location.href, e = e || "https://public.flourish.studio/", i = i || "A Flourish data visualisation";
        var a = document.createElement("div");
        a.setAttribute("class", "flourish-credit"), a.setAttribute("style", "width:100%!important;margin:0 0 4px!important;text-align:right!important;font-family:Helvetica,sans-serif!important;color:#888!important;font-size:11px!important;font-weight:bold!important;font-style:normal!important;-webkit-font-smoothing:antialiased!important;box-shadow:none!important;");
        var o = document.createElement("a");
        o.setAttribute("href", t + r), o.setAttribute("target", "_top"), o.setAttribute("style", "display:inline-block!important;text-decoration:none!important;font:inherit!important;color:inherit!important;border:none!important;margin:0 5px!important;box-shadow:none!important;"), a.appendChild(o);
        var s = document.createElement("img");
        s.setAttribute("alt", "Flourish logo"), s.setAttribute("src", e + "resources/bosh.svg"), s.setAttribute("style", "font:inherit!important;width:auto!important;height:12px!important;border:none!important;margin:0 2px 0!important;vertical-align:middle!important;display:inline-block!important;box-shadow:none!important;"), o.appendChild(s);
        var n = document.createElement("span");
        return n.setAttribute("style", "font:inherit!important;color:#888!important;vertical-align:middle!important;display:inline-block!important;box-shadow:none!important;"), n.appendChild(document.createTextNode(i)), o.appendChild(n), a
    }

    function c(t, r) {
        var e, i;
        return r = r || "", "object" == typeof (e = u[t = t || "en"].credits[r] || u.en.credits[r] || u.en.credits.default) && (e.url && (i = e.url), e = e.text), {
            credit_text: e,
            credit_url: i
        }
    }

    !function () {
        function t() {
            if (!window.FlourishLoaded) {
                window.FlourishLoaded = !0;
                var t = window.Flourish && window.Flourish.external, n = "en",
                    d = document.querySelector("meta[name='language'],meta[name='LANGUAGE']");
                d && d.hasAttribute("content") && (n = d.getAttribute("content").substr(0, 2), u[n] || (n = "en"));
                var p, f = Array.prototype.slice.call(document.querySelectorAll(".flourish-embed"));
                if (!t) for (var m = document.querySelectorAll("script"), b = 0; b < m.length; b++) {
                    var g = m[b];
                    if (g.src && g.src.match(/(?:\.flourish\.(?:net|rocks|studio)|(?:localhost|flourish\.local)(?::\d+)?)\//g) && g.src.match(/\/embed\.js$/)) {
                        if (!p) {
                            var v = g.getAttribute("src");
                            p = v.substr(0, v.lastIndexOf("/resources")) + "/"
                        }
                        if (g.getAttribute("data-src")) {
                            var w = document.createElement("div");
                            w.setAttribute("class", "flourish-embed"), w.setAttribute("data-src", g.getAttribute("data-src")), g.getAttribute("data-height") && w.setAttribute("data-height", g.getAttribute("data-height")), g.getAttribute("data-width") && w.setAttribute("data-width", g.getAttribute("data-width")), g.parentNode.insertBefore(w, g), f.push(w)
                        }
                    }
                }
                if (f.length) {
                    var F = (r = "#amp=1" == window.location.hash, {
                        createEmbedIframe: l,
                        isFixedHeight: e,
                        getHeightForBreakpoint: i,
                        startEventListeners: s,
                        notifyParentWindow: a,
                        isSafari: o
                    });
                    for (b = 0; b < f.length; b++) {
                        var A, x, y, _ = f[b], C = _.getAttribute("data-src");
                        if (C) {
                            var k, E = C.split("?"), S = E.length > 1 || window.Flourish && window.Flourish.hide;
                            // eslint-disable-next-line no-cond-assign
                            if (C = E[0], t ? (k = C, A = window.FlourishConfig.public_url, x = "?utm_source=embed&utm_campaign=" + C) : (k = (y = 0 === C.indexOf("template/")) ? window.FlourishConfig.app_url + "/" + C + "/preview" : window.FlourishConfig.embeds_url + C + "/embed", A = p + C + "/", x = "?utm_source=showcase&utm_campaign=" + C), F.createEmbedIframe(k, _, _.getAttribute("data-width"), _.getAttribute("data-height")), !y && !S) {
                                for (var z = "", L = _.className.split(" "), O = 0; O < L.length; O++) if ("flourish-embed" != L[O] && 0 == L[O].indexOf("flourish-")) {
                                    z = L[O].substr(9);
                                    break
                                }
                                z || (z = 0 == C.indexOf("story") ? "story" : "default");
                                var I = c(n, z),
                                    N = h(I.credit_url || A, x, window.FlourishConfig.public_url, I.credit_text);
                                _.appendChild(N)
                            }
                        }
                    }
                    F.startEventListeners((function (t, r) {
                        "resize" == t.method && ("number" == typeof t.height && (t.height += "px"), t.height && (r.style.height = t.height))
                    }))
                } else console.warn("Flourish: could not find anything to embed")
            }
        }

        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
    }()
}();
//# sourceMappingURL=embed.js.map
