function EmploymentType() {
  return enumerate("Permanent", "Temporary", "Project");
}
function TaxStatus() {
  return enumerate("Gross", "Net");
}
function Interval() {
  return enumerate("Week", "Month", "Year");
}
function CompanySize() {
  return enumerate(
    "LessThanTen",
    "TenToTwenty",
    "TwentyToFifty",
    "FiftyToTwoHundred",
    "MoreThanTwoHundred"
  );
}
function VersionControlSystem() {
  return enumerate("NotYetChosen", "Git");
}
function IssueTrackers() {
  return enumerate("NotYetChosen", "GitHub");
}
function BuildServers() {
  return enumerate("NotYetChosen", "Jenkins", "Travis");
}
function CodeAnalysisTools() {
  return enumerate("NotYetChosen");
}
function KnowledgeRepos() {
  return enumerate("NotYetChosen", "GitHubWiki");
}
function AgileManagementSystems() {
  return enumerate("NotYetChosen", "Kanban");
}
function TravelOptions() {
  return enumerate("None", "Possible", "Plentiful");
}
function RemoteWorking() {
  return enumerate("No", "Negotiable", "Required");
}
function RelocationPackages() {
  return enumerate("Nonealse", "Negotiable");
}
function OperationSystems() {
  return enumerate("MacOSX", "Ubuntu", "Windows");
}
function MachineType() {
  return enumerate("Workstation", "Laptop");
}
function Monitors() {
  return enumerate("Negotiable");
}
function Level() {
  return enumerate("Familiar", "Good", "Expert");
}
function TrainingType() {
  return enumerate("None", "Informal", "Formal", "External");
}
function ConferencePotential() {
  return enumerate("Attending", "Speaking");
}
function FOSS() {
  return enumerate("Closed", "SometimesOpen", "AlwaysOpen");
}
function enumerate() {
  for (v = arguments, s = { all: [], keys: v }, i = v.length; i--; )
    s[v[i]] = s.all[i] = v[i];
  return s;
}
!(function (t, e) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  function i(t) {
    var e = "length" in t && t.length,
      i = ot.type(t);
    return (
      "function" !== i &&
      !ot.isWindow(t) &&
      (!(1 !== t.nodeType || !e) ||
        "array" === i ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  function n(t, e, i) {
    if (ot.isFunction(e))
      return ot.grep(t, function (t, n) {
        return !!e.call(t, n, t) !== i;
      });
    if (e.nodeType)
      return ot.grep(t, function (t) {
        return (t === e) !== i;
      });
    if ("string" == typeof e) {
      if (dt.test(e)) return ot.filter(e, t, i);
      e = ot.filter(e, t);
    }
    return ot.grep(t, function (t) {
      return ot.inArray(t, e) >= 0 !== i;
    });
  }
  function o(t, e) {
    do t = t[e];
    while (t && 1 !== t.nodeType);
    return t;
  }
  function a(t) {
    var e = (xt[t] = {});
    return (
      ot.each(t.match(bt) || [], function (t, i) {
        e[i] = !0;
      }),
      e
    );
  }
  function s() {
    pt.addEventListener
      ? (pt.removeEventListener("DOMContentLoaded", r, !1),
        t.removeEventListener("load", r, !1))
      : (pt.detachEvent("onreadystatechange", r), t.detachEvent("onload", r));
  }
  function r() {
    (pt.addEventListener ||
      "load" === event.type ||
      "complete" === pt.readyState) &&
      (s(), ot.ready());
  }
  function l(t, e, i) {
    if (void 0 === i && 1 === t.nodeType) {
      var n = "data-" + e.replace(Ct, "-$1").toLowerCase();
      if (((i = t.getAttribute(n)), "string" == typeof i)) {
        try {
          i =
            "true" === i ||
            ("false" !== i &&
              ("null" === i
                ? null
                : +i + "" === i
                ? +i
                : _t.test(i)
                ? ot.parseJSON(i)
                : i));
        } catch (o) {}
        ot.data(t, e, i);
      } else i = void 0;
    }
    return i;
  }
  function h(t) {
    var e;
    for (e in t)
      if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e)
        return !1;
    return !0;
  }
  function c(t, e, i, n) {
    if (ot.acceptData(t)) {
      var o,
        a,
        s = ot.expando,
        r = t.nodeType,
        l = r ? ot.cache : t,
        h = r ? t[s] : t[s] && s;
      if (
        (h && l[h] && (n || l[h].data)) ||
        void 0 !== i ||
        "string" != typeof e
      )
        return (
          h || (h = r ? (t[s] = G.pop() || ot.guid++) : s),
          l[h] || (l[h] = r ? {} : { toJSON: ot.noop }),
          ("object" == typeof e || "function" == typeof e) &&
            (n
              ? (l[h] = ot.extend(l[h], e))
              : (l[h].data = ot.extend(l[h].data, e))),
          (a = l[h]),
          n || (a.data || (a.data = {}), (a = a.data)),
          void 0 !== i && (a[ot.camelCase(e)] = i),
          "string" == typeof e
            ? ((o = a[e]), null == o && (o = a[ot.camelCase(e)]))
            : (o = a),
          o
        );
    }
  }
  function u(t, e, i) {
    if (ot.acceptData(t)) {
      var n,
        o,
        a = t.nodeType,
        s = a ? ot.cache : t,
        r = a ? t[ot.expando] : ot.expando;
      if (s[r]) {
        if (e && (n = i ? s[r] : s[r].data)) {
          ot.isArray(e)
            ? (e = e.concat(ot.map(e, ot.camelCase)))
            : e in n
            ? (e = [e])
            : ((e = ot.camelCase(e)), (e = e in n ? [e] : e.split(" "))),
            (o = e.length);
          for (; o--; ) delete n[e[o]];
          if (i ? !h(n) : !ot.isEmptyObject(n)) return;
        }
        (i || (delete s[r].data, h(s[r]))) &&
          (a
            ? ot.cleanData([t], !0)
            : it.deleteExpando || s != s.window
            ? delete s[r]
            : (s[r] = null));
      }
    }
  }
  function d() {
    return !0;
  }
  function f() {
    return !1;
  }
  function p() {
    try {
      return pt.activeElement;
    } catch (t) {}
  }
  function m(t) {
    var e = Ot.split("|"),
      i = t.createDocumentFragment();
    if (i.createElement) for (; e.length; ) i.createElement(e.pop());
    return i;
  }
  function g(t, e) {
    var i,
      n,
      o = 0,
      a =
        typeof t.getElementsByTagName !== St
          ? t.getElementsByTagName(e || "*")
          : typeof t.querySelectorAll !== St
          ? t.querySelectorAll(e || "*")
          : void 0;
    if (!a)
      for (a = [], i = t.childNodes || t; null != (n = i[o]); o++)
        !e || ot.nodeName(n, e) ? a.push(n) : ot.merge(a, g(n, e));
    return void 0 === e || (e && ot.nodeName(t, e)) ? ot.merge([t], a) : a;
  }
  function v(t) {
    It.test(t.type) && (t.defaultChecked = t.checked);
  }
  function y(t, e) {
    return ot.nodeName(t, "table") &&
      ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function b(t) {
    return (t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type), t;
  }
  function x(t) {
    var e = $t.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function w(t, e) {
    for (var i, n = 0; null != (i = t[n]); n++)
      ot._data(i, "globalEval", !e || ot._data(e[n], "globalEval"));
  }
  function k(t, e) {
    if (1 === e.nodeType && ot.hasData(t)) {
      var i,
        n,
        o,
        a = ot._data(t),
        s = ot._data(e, a),
        r = a.events;
      if (r) {
        delete s.handle, (s.events = {});
        for (i in r)
          for (n = 0, o = r[i].length; o > n; n++) ot.event.add(e, i, r[i][n]);
      }
      s.data && (s.data = ot.extend({}, s.data));
    }
  }
  function S(t, e) {
    var i, n, o;
    if (1 === e.nodeType) {
      if (((i = e.nodeName.toLowerCase()), !it.noCloneEvent && e[ot.expando])) {
        o = ot._data(e);
        for (n in o.events) ot.removeEvent(e, n, o.handle);
        e.removeAttribute(ot.expando);
      }
      "script" === i && e.text !== t.text
        ? ((b(e).text = t.text), x(e))
        : "object" === i
        ? (e.parentNode && (e.outerHTML = t.outerHTML),
          it.html5Clone &&
            t.innerHTML &&
            !ot.trim(e.innerHTML) &&
            (e.innerHTML = t.innerHTML))
        : "input" === i && It.test(t.type)
        ? ((e.defaultChecked = e.checked = t.checked),
          e.value !== t.value && (e.value = t.value))
        : "option" === i
        ? (e.defaultSelected = e.selected = t.defaultSelected)
        : ("input" === i || "textarea" === i) &&
          (e.defaultValue = t.defaultValue);
    }
  }
  function _(e, i) {
    var n,
      o = ot(i.createElement(e)).appendTo(i.body),
      a =
        t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0]))
          ? n.display
          : ot.css(o[0], "display");
    return o.detach(), a;
  }
  function C(t) {
    var e = pt,
      i = Kt[t];
    return (
      i ||
        ((i = _(t, e)),
        ("none" !== i && i) ||
          ((Jt = (
            Jt || ot("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(e.documentElement)),
          (e = (Jt[0].contentWindow || Jt[0].contentDocument).document),
          e.write(),
          e.close(),
          (i = _(t, e)),
          Jt.detach()),
        (Kt[t] = i)),
      i
    );
  }
  function D(t, e) {
    return {
      get: function () {
        var i = t();
        if (null != i)
          return i
            ? void delete this.get
            : (this.get = e).apply(this, arguments);
      },
    };
  }
  function T(t, e) {
    if (e in t) return e;
    for (
      var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = de.length;
      o--;

    )
      if (((e = de[o] + i), e in t)) return e;
    return n;
  }
  function M(t, e) {
    for (var i, n, o, a = [], s = 0, r = t.length; r > s; s++)
      (n = t[s]),
        n.style &&
          ((a[s] = ot._data(n, "olddisplay")),
          (i = n.style.display),
          e
            ? (a[s] || "none" !== i || (n.style.display = ""),
              "" === n.style.display &&
                Mt(n) &&
                (a[s] = ot._data(n, "olddisplay", C(n.nodeName))))
            : ((o = Mt(n)),
              ((i && "none" !== i) || !o) &&
                ot._data(n, "olddisplay", o ? i : ot.css(n, "display"))));
    for (s = 0; r > s; s++)
      (n = t[s]),
        n.style &&
          ((e && "none" !== n.style.display && "" !== n.style.display) ||
            (n.style.display = e ? a[s] || "" : "none"));
    return t;
  }
  function A(t, e, i) {
    var n = le.exec(e);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
  }
  function I(t, e, i, n, o) {
    for (
      var a = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        s = 0;
      4 > a;
      a += 2
    )
      "margin" === i && (s += ot.css(t, i + Tt[a], !0, o)),
        n
          ? ("content" === i && (s -= ot.css(t, "padding" + Tt[a], !0, o)),
            "margin" !== i &&
              (s -= ot.css(t, "border" + Tt[a] + "Width", !0, o)))
          : ((s += ot.css(t, "padding" + Tt[a], !0, o)),
            "padding" !== i &&
              (s += ot.css(t, "border" + Tt[a] + "Width", !0, o)));
    return s;
  }
  function P(t, e, i) {
    var n = !0,
      o = "width" === e ? t.offsetWidth : t.offsetHeight,
      a = te(t),
      s = it.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, a);
    if (0 >= o || null == o) {
      if (
        ((o = ee(t, e, a)),
        (0 > o || null == o) && (o = t.style[e]),
        ne.test(o))
      )
        return o;
      (n = s && (it.boxSizingReliable() || o === t.style[e])),
        (o = parseFloat(o) || 0);
    }
    return o + I(t, e, i || (s ? "border" : "content"), n, a) + "px";
  }
  function F(t, e, i, n, o) {
    return new F.prototype.init(t, e, i, n, o);
  }
  function L() {
    return (
      setTimeout(function () {
        fe = void 0;
      }),
      (fe = ot.now())
    );
  }
  function N(t, e) {
    var i,
      n = { height: t },
      o = 0;
    for (e = e ? 1 : 0; 4 > o; o += 2 - e)
      (i = Tt[o]), (n["margin" + i] = n["padding" + i] = t);
    return e && (n.opacity = n.width = t), n;
  }
  function E(t, e, i) {
    for (
      var n, o = (be[e] || []).concat(be["*"]), a = 0, s = o.length;
      s > a;
      a++
    )
      if ((n = o[a].call(i, e, t))) return n;
  }
  function O(t, e, i) {
    var n,
      o,
      a,
      s,
      r,
      l,
      h,
      c,
      u = this,
      d = {},
      f = t.style,
      p = t.nodeType && Mt(t),
      m = ot._data(t, "fxshow");
    i.queue ||
      ((r = ot._queueHooks(t, "fx")),
      null == r.unqueued &&
        ((r.unqueued = 0),
        (l = r.empty.fire),
        (r.empty.fire = function () {
          r.unqueued || l();
        })),
      r.unqueued++,
      u.always(function () {
        u.always(function () {
          r.unqueued--, ot.queue(t, "fx").length || r.empty.fire();
        });
      })),
      1 === t.nodeType &&
        ("height" in e || "width" in e) &&
        ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
        (h = ot.css(t, "display")),
        (c = "none" === h ? ot._data(t, "olddisplay") || C(t.nodeName) : h),
        "inline" === c &&
          "none" === ot.css(t, "float") &&
          (it.inlineBlockNeedsLayout && "inline" !== C(t.nodeName)
            ? (f.zoom = 1)
            : (f.display = "inline-block"))),
      i.overflow &&
        ((f.overflow = "hidden"),
        it.shrinkWrapBlocks() ||
          u.always(function () {
            (f.overflow = i.overflow[0]),
              (f.overflowX = i.overflow[1]),
              (f.overflowY = i.overflow[2]);
          }));
    for (n in e)
      if (((o = e[n]), me.exec(o))) {
        if (
          (delete e[n], (a = a || "toggle" === o), o === (p ? "hide" : "show"))
        ) {
          if ("show" !== o || !m || void 0 === m[n]) continue;
          p = !0;
        }
        d[n] = (m && m[n]) || ot.style(t, n);
      } else h = void 0;
    if (ot.isEmptyObject(d))
      "inline" === ("none" === h ? C(t.nodeName) : h) && (f.display = h);
    else {
      m ? "hidden" in m && (p = m.hidden) : (m = ot._data(t, "fxshow", {})),
        a && (m.hidden = !p),
        p
          ? ot(t).show()
          : u.done(function () {
              ot(t).hide();
            }),
        u.done(function () {
          var e;
          ot._removeData(t, "fxshow");
          for (e in d) ot.style(t, e, d[e]);
        });
      for (n in d)
        (s = E(p ? m[n] : 0, n, u)),
          n in m ||
            ((m[n] = s.start),
            p &&
              ((s.end = s.start),
              (s.start = "width" === n || "height" === n ? 1 : 0)));
    }
  }
  function W(t, e) {
    var i, n, o, a, s;
    for (i in t)
      if (
        ((n = ot.camelCase(i)),
        (o = e[n]),
        (a = t[i]),
        ot.isArray(a) && ((o = a[1]), (a = t[i] = a[0])),
        i !== n && ((t[n] = a), delete t[i]),
        (s = ot.cssHooks[n]),
        s && "expand" in s)
      ) {
        (a = s.expand(a)), delete t[n];
        for (i in a) i in t || ((t[i] = a[i]), (e[i] = o));
      } else e[n] = o;
  }
  function R(t, e, i) {
    var n,
      o,
      a = 0,
      s = ye.length,
      r = ot.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var e = fe || L(),
            i = Math.max(0, h.startTime + h.duration - e),
            n = i / h.duration || 0,
            a = 1 - n,
            s = 0,
            l = h.tweens.length;
          l > s;
          s++
        )
          h.tweens[s].run(a);
        return (
          r.notifyWith(t, [h, a, i]),
          1 > a && l ? i : (r.resolveWith(t, [h]), !1)
        );
      },
      h = r.promise({
        elem: t,
        props: ot.extend({}, e),
        opts: ot.extend(!0, { specialEasing: {} }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: fe || L(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = ot.Tween(
            t,
            h.opts,
            e,
            i,
            h.opts.specialEasing[e] || h.opts.easing
          );
          return h.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? h.tweens.length : 0;
          if (o) return this;
          for (o = !0; n > i; i++) h.tweens[i].run(1);
          return e ? r.resolveWith(t, [h, e]) : r.rejectWith(t, [h, e]), this;
        },
      }),
      c = h.props;
    for (W(c, h.opts.specialEasing); s > a; a++)
      if ((n = ye[a].call(h, t, c, h.opts))) return n;
    return (
      ot.map(c, E, h),
      ot.isFunction(h.opts.start) && h.opts.start.call(t, h),
      ot.fx.timer(ot.extend(l, { elem: t, anim: h, queue: h.opts.queue })),
      h
        .progress(h.opts.progress)
        .done(h.opts.done, h.opts.complete)
        .fail(h.opts.fail)
        .always(h.opts.always)
    );
  }
  function z(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        o = 0,
        a = e.toLowerCase().match(bt) || [];
      if (ot.isFunction(i))
        for (; (n = a[o++]); )
          "+" === n.charAt(0)
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function H(t, e, i, n) {
    function o(r) {
      var l;
      return (
        (a[r] = !0),
        ot.each(t[r] || [], function (t, r) {
          var h = r(e, i, n);
          return "string" != typeof h || s || a[h]
            ? s
              ? !(l = h)
              : void 0
            : (e.dataTypes.unshift(h), o(h), !1);
        }),
        l
      );
    }
    var a = {},
      s = t === je;
    return o(e.dataTypes[0]) || (!a["*"] && o("*"));
  }
  function V(t, e) {
    var i,
      n,
      o = ot.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
    return i && ot.extend(!0, t, i), t;
  }
  function B(t, e, i) {
    for (var n, o, a, s, r = t.contents, l = t.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
    if (o)
      for (s in r)
        if (r[s] && r[s].test(o)) {
          l.unshift(s);
          break;
        }
    if (l[0] in i) a = l[0];
    else {
      for (s in i) {
        if (!l[0] || t.converters[s + " " + l[0]]) {
          a = s;
          break;
        }
        n || (n = s);
      }
      a = a || n;
    }
    return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0;
  }
  function j(t, e, i, n) {
    var o,
      a,
      s,
      r,
      l,
      h = {},
      c = t.dataTypes.slice();
    if (c[1]) for (s in t.converters) h[s.toLowerCase()] = t.converters[s];
    for (a = c.shift(); a; )
      if (
        (t.responseFields[a] && (i[t.responseFields[a]] = e),
        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (l = a),
        (a = c.shift()))
      )
        if ("*" === a) a = l;
        else if ("*" !== l && l !== a) {
          if (((s = h[l + " " + a] || h["* " + a]), !s))
            for (o in h)
              if (
                ((r = o.split(" ")),
                r[1] === a && (s = h[l + " " + r[0]] || h["* " + r[0]]))
              ) {
                s === !0
                  ? (s = h[o])
                  : h[o] !== !0 && ((a = r[0]), c.unshift(r[1]));
                break;
              }
          if (s !== !0)
            if (s && t["throws"]) e = s(e);
            else
              try {
                e = s(e);
              } catch (u) {
                return {
                  state: "parsererror",
                  error: s ? u : "No conversion from " + l + " to " + a,
                };
              }
        }
    return { state: "success", data: e };
  }
  function Y(t, e, i, n) {
    var o;
    if (ot.isArray(e))
      ot.each(e, function (e, o) {
        i || $e.test(t)
          ? n(t, o)
          : Y(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n);
      });
    else if (i || "object" !== ot.type(e)) n(t, e);
    else for (o in e) Y(t + "[" + o + "]", e[o], i, n);
  }
  function q() {
    try {
      return new t.XMLHttpRequest();
    } catch (e) {}
  }
  function U() {
    try {
      return new t.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function $(t) {
    return ot.isWindow(t)
      ? t
      : 9 === t.nodeType && (t.defaultView || t.parentWindow);
  }
  var G = [],
    X = G.slice,
    Q = G.concat,
    Z = G.push,
    J = G.indexOf,
    K = {},
    tt = K.toString,
    et = K.hasOwnProperty,
    it = {},
    nt = "1.11.3",
    ot = function (t, e) {
      return new ot.fn.init(t, e);
    },
    at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    st = /^-ms-/,
    rt = /-([\da-z])/gi,
    lt = function (t, e) {
      return e.toUpperCase();
    };
  (ot.fn = ot.prototype = {
    jquery: nt,
    constructor: ot,
    selector: "",
    length: 0,
    toArray: function () {
      return X.call(this);
    },
    get: function (t) {
      return null != t
        ? 0 > t
          ? this[t + this.length]
          : this[t]
        : X.call(this);
    },
    pushStack: function (t) {
      var e = ot.merge(this.constructor(), t);
      return (e.prevObject = this), (e.context = this.context), e;
    },
    each: function (t, e) {
      return ot.each(this, t, e);
    },
    map: function (t) {
      return this.pushStack(
        ot.map(this, function (e, i) {
          return t.call(e, i, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(X.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (t) {
      var e = this.length,
        i = +t + (0 > t ? e : 0);
      return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: Z,
    sort: G.sort,
    splice: G.splice,
  }),
    (ot.extend = ot.fn.extend = function () {
      var t,
        e,
        i,
        n,
        o,
        a,
        s = arguments[0] || {},
        r = 1,
        l = arguments.length,
        h = !1;
      for (
        "boolean" == typeof s && ((h = s), (s = arguments[r] || {}), r++),
          "object" == typeof s || ot.isFunction(s) || (s = {}),
          r === l && ((s = this), r--);
        l > r;
        r++
      )
        if (null != (o = arguments[r]))
          for (n in o)
            (t = s[n]),
              (i = o[n]),
              s !== i &&
                (h && i && (ot.isPlainObject(i) || (e = ot.isArray(i)))
                  ? (e
                      ? ((e = !1), (a = t && ot.isArray(t) ? t : []))
                      : (a = t && ot.isPlainObject(t) ? t : {}),
                    (s[n] = ot.extend(h, a, i)))
                  : void 0 !== i && (s[n] = i));
      return s;
    }),
    ot.extend({
      expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === ot.type(t);
      },
      isArray:
        Array.isArray ||
        function (t) {
          return "array" === ot.type(t);
        },
      isWindow: function (t) {
        return null != t && t == t.window;
      },
      isNumeric: function (t) {
        return !ot.isArray(t) && t - parseFloat(t) + 1 >= 0;
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      isPlainObject: function (t) {
        var e;
        if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t))
          return !1;
        try {
          if (
            t.constructor &&
            !et.call(t, "constructor") &&
            !et.call(t.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (i) {
          return !1;
        }
        if (it.ownLast) for (e in t) return et.call(t, e);
        for (e in t);
        return void 0 === e || et.call(t, e);
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? K[tt.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (e) {
        e &&
          ot.trim(e) &&
          (
            t.execScript ||
            function (e) {
              t.eval.call(t, e);
            }
          )(e);
      },
      camelCase: function (t) {
        return t.replace(st, "ms-").replace(rt, lt);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e, n) {
        var o,
          a = 0,
          s = t.length,
          r = i(t);
        if (n) {
          if (r) for (; s > a && ((o = e.apply(t[a], n)), o !== !1); a++);
          else for (a in t) if (((o = e.apply(t[a], n)), o === !1)) break;
        } else if (r)
          for (; s > a && ((o = e.call(t[a], a, t[a])), o !== !1); a++);
        else for (a in t) if (((o = e.call(t[a], a, t[a])), o === !1)) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(at, "");
      },
      makeArray: function (t, e) {
        var n = e || [];
        return (
          null != t &&
            (i(Object(t))
              ? ot.merge(n, "string" == typeof t ? [t] : t)
              : Z.call(n, t)),
          n
        );
      },
      inArray: function (t, e, i) {
        var n;
        if (e) {
          if (J) return J.call(e, t, i);
          for (
            n = e.length, i = i ? (0 > i ? Math.max(0, n + i) : i) : 0;
            n > i;
            i++
          )
            if (i in e && e[i] === t) return i;
        }
        return -1;
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, o = t.length; i > n; ) t[o++] = e[n++];
        if (i !== i) for (; void 0 !== e[n]; ) t[o++] = e[n++];
        return (t.length = o), t;
      },
      grep: function (t, e, i) {
        for (var n, o = [], a = 0, s = t.length, r = !i; s > a; a++)
          (n = !e(t[a], a)), n !== r && o.push(t[a]);
        return o;
      },
      map: function (t, e, n) {
        var o,
          a = 0,
          s = t.length,
          r = i(t),
          l = [];
        if (r) for (; s > a; a++) (o = e(t[a], a, n)), null != o && l.push(o);
        else for (a in t) (o = e(t[a], a, n)), null != o && l.push(o);
        return Q.apply([], l);
      },
      guid: 1,
      proxy: function (t, e) {
        var i, n, o;
        return (
          "string" == typeof e && ((o = t[e]), (e = t), (t = o)),
          ot.isFunction(t)
            ? ((i = X.call(arguments, 2)),
              (n = function () {
                return t.apply(e || this, i.concat(X.call(arguments)));
              }),
              (n.guid = t.guid = t.guid || ot.guid++),
              n)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: it,
    }),
    ot.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (t, e) {
        K["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var ht = (function (t) {
    function e(t, e, i, n) {
      var o, a, s, r, l, h, u, f, p, m;
      if (
        ((e ? e.ownerDocument || e : H) !== F && P(e),
        (e = e || F),
        (i = i || []),
        (r = e.nodeType),
        "string" != typeof t || !t || (1 !== r && 9 !== r && 11 !== r))
      )
        return i;
      if (!n && N) {
        if (11 !== r && (o = yt.exec(t)))
          if ((s = o[1])) {
            if (9 === r) {
              if (((a = e.getElementById(s)), !a || !a.parentNode)) return i;
              if (a.id === s) return i.push(a), i;
            } else if (
              e.ownerDocument &&
              (a = e.ownerDocument.getElementById(s)) &&
              R(e, a) &&
              a.id === s
            )
              return i.push(a), i;
          } else {
            if (o[2]) return J.apply(i, e.getElementsByTagName(t)), i;
            if ((s = o[3]) && w.getElementsByClassName)
              return J.apply(i, e.getElementsByClassName(s)), i;
          }
        if (w.qsa && (!E || !E.test(t))) {
          if (
            ((f = u = z),
            (p = e),
            (m = 1 !== r && t),
            1 === r && "object" !== e.nodeName.toLowerCase())
          ) {
            for (
              h = C(t),
                (u = e.getAttribute("id"))
                  ? (f = u.replace(xt, "\\$&"))
                  : e.setAttribute("id", f),
                f = "[id='" + f + "'] ",
                l = h.length;
              l--;

            )
              h[l] = f + d(h[l]);
            (p = (bt.test(t) && c(e.parentNode)) || e), (m = h.join(","));
          }
          if (m)
            try {
              return J.apply(i, p.querySelectorAll(m)), i;
            } catch (g) {
            } finally {
              u || e.removeAttribute("id");
            }
        }
      }
      return T(t.replace(lt, "$1"), e, i, n);
    }
    function i() {
      function t(i, n) {
        return (
          e.push(i + " ") > k.cacheLength && delete t[e.shift()],
          (t[i + " "] = n)
        );
      }
      var e = [];
      return t;
    }
    function n(t) {
      return (t[z] = !0), t;
    }
    function o(t) {
      var e = F.createElement("div");
      try {
        return !!t(e);
      } catch (i) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function a(t, e) {
      for (var i = t.split("|"), n = t.length; n--; ) k.attrHandle[i[n]] = e;
    }
    function s(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || $) - (~t.sourceIndex || $);
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function r(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return "input" === i && e.type === t;
      };
    }
    function l(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }
    function h(t) {
      return n(function (e) {
        return (
          (e = +e),
          n(function (i, n) {
            for (var o, a = t([], i.length, e), s = a.length; s--; )
              i[(o = a[s])] && (i[o] = !(n[o] = i[o]));
          })
        );
      });
    }
    function c(t) {
      return t && "undefined" != typeof t.getElementsByTagName && t;
    }
    function u() {}
    function d(t) {
      for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
      return n;
    }
    function f(t, e, i) {
      var n = e.dir,
        o = i && "parentNode" === n,
        a = B++;
      return e.first
        ? function (e, i, a) {
            for (; (e = e[n]); ) if (1 === e.nodeType || o) return t(e, i, a);
          }
        : function (e, i, s) {
            var r,
              l,
              h = [V, a];
            if (s) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || o) && t(e, i, s)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || o) {
                  if (
                    ((l = e[z] || (e[z] = {})),
                    (r = l[n]) && r[0] === V && r[1] === a)
                  )
                    return (h[2] = r[2]);
                  if (((l[n] = h), (h[2] = t(e, i, s)))) return !0;
                }
          };
    }
    function p(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var o = t.length; o--; ) if (!t[o](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function m(t, i, n) {
      for (var o = 0, a = i.length; a > o; o++) e(t, i[o], n);
      return n;
    }
    function g(t, e, i, n, o) {
      for (var a, s = [], r = 0, l = t.length, h = null != e; l > r; r++)
        (a = t[r]) && (!i || i(a, n, o)) && (s.push(a), h && e.push(r));
      return s;
    }
    function v(t, e, i, o, a, s) {
      return (
        o && !o[z] && (o = v(o)),
        a && !a[z] && (a = v(a, s)),
        n(function (n, s, r, l) {
          var h,
            c,
            u,
            d = [],
            f = [],
            p = s.length,
            v = n || m(e || "*", r.nodeType ? [r] : r, []),
            y = !t || (!n && e) ? v : g(v, d, t, r, l),
            b = i ? (a || (n ? t : p || o) ? [] : s) : y;
          if ((i && i(y, b, r, l), o))
            for (h = g(b, f), o(h, [], r, l), c = h.length; c--; )
              (u = h[c]) && (b[f[c]] = !(y[f[c]] = u));
          if (n) {
            if (a || t) {
              if (a) {
                for (h = [], c = b.length; c--; )
                  (u = b[c]) && h.push((y[c] = u));
                a(null, (b = []), h, l);
              }
              for (c = b.length; c--; )
                (u = b[c]) &&
                  (h = a ? tt(n, u) : d[c]) > -1 &&
                  (n[h] = !(s[h] = u));
            }
          } else (b = g(b === s ? b.splice(p, b.length) : b)), a ? a(null, s, b, l) : J.apply(s, b);
        })
      );
    }
    function y(t) {
      for (
        var e,
          i,
          n,
          o = t.length,
          a = k.relative[t[0].type],
          s = a || k.relative[" "],
          r = a ? 1 : 0,
          l = f(
            function (t) {
              return t === e;
            },
            s,
            !0
          ),
          h = f(
            function (t) {
              return tt(e, t) > -1;
            },
            s,
            !0
          ),
          c = [
            function (t, i, n) {
              var o =
                (!a && (n || i !== M)) ||
                ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
              return (e = null), o;
            },
          ];
        o > r;
        r++
      )
        if ((i = k.relative[t[r].type])) c = [f(p(c), i)];
        else {
          if (((i = k.filter[t[r].type].apply(null, t[r].matches)), i[z])) {
            for (n = ++r; o > n && !k.relative[t[n].type]; n++);
            return v(
              r > 1 && p(c),
              r > 1 &&
                d(
                  t
                    .slice(0, r - 1)
                    .concat({ value: " " === t[r - 2].type ? "*" : "" })
                ).replace(lt, "$1"),
              i,
              n > r && y(t.slice(r, n)),
              o > n && y((t = t.slice(n))),
              o > n && d(t)
            );
          }
          c.push(i);
        }
      return p(c);
    }
    function b(t, i) {
      var o = i.length > 0,
        a = t.length > 0,
        s = function (n, s, r, l, h) {
          var c,
            u,
            d,
            f = 0,
            p = "0",
            m = n && [],
            v = [],
            y = M,
            b = n || (a && k.find.TAG("*", h)),
            x = (V += null == y ? 1 : Math.random() || 0.1),
            w = b.length;
          for (h && (M = s !== F && s); p !== w && null != (c = b[p]); p++) {
            if (a && c) {
              for (u = 0; (d = t[u++]); )
                if (d(c, s, r)) {
                  l.push(c);
                  break;
                }
              h && (V = x);
            }
            o && ((c = !d && c) && f--, n && m.push(c));
          }
          if (((f += p), o && p !== f)) {
            for (u = 0; (d = i[u++]); ) d(m, v, s, r);
            if (n) {
              if (f > 0) for (; p--; ) m[p] || v[p] || (v[p] = Q.call(l));
              v = g(v);
            }
            J.apply(l, v),
              h && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l);
          }
          return h && ((V = x), (M = y)), m;
        };
      return o ? n(s) : s;
    }
    var x,
      w,
      k,
      S,
      _,
      C,
      D,
      T,
      M,
      A,
      I,
      P,
      F,
      L,
      N,
      E,
      O,
      W,
      R,
      z = "sizzle" + 1 * new Date(),
      H = t.document,
      V = 0,
      B = 0,
      j = i(),
      Y = i(),
      q = i(),
      U = function (t, e) {
        return t === e && (I = !0), 0;
      },
      $ = 1 << 31,
      G = {}.hasOwnProperty,
      X = [],
      Q = X.pop,
      Z = X.push,
      J = X.push,
      K = X.slice,
      tt = function (t, e) {
        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        return -1;
      },
      et =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      it = "[\\x20\\t\\r\\n\\f]",
      nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ot = nt.replace("w", "w#"),
      at =
        "\\[" +
        it +
        "*(" +
        nt +
        ")(?:" +
        it +
        "*([*^$|!~]?=)" +
        it +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ot +
        "))|)" +
        it +
        "*\\]",
      st =
        ":(" +
        nt +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        at +
        ")*)|.*)\\)|)",
      rt = new RegExp(it + "+", "g"),
      lt = new RegExp(
        "^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$",
        "g"
      ),
      ht = new RegExp("^" + it + "*," + it + "*"),
      ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
      ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
      dt = new RegExp(st),
      ft = new RegExp("^" + ot + "$"),
      pt = {
        ID: new RegExp("^#(" + nt + ")"),
        CLASS: new RegExp("^\\.(" + nt + ")"),
        TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + at),
        PSEUDO: new RegExp("^" + st),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            it +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            it +
            "*(?:([+-]|)" +
            it +
            "*(\\d+)|))" +
            it +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + et + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            it +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            it +
            "*((?:-\\d)?\\d*)" +
            it +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      mt = /^(?:input|select|textarea|button)$/i,
      gt = /^h\d$/i,
      vt = /^[^{]+\{\s*\[native \w/,
      yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      bt = /[+~]/,
      xt = /'|\\/g,
      wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
      kt = function (t, e, i) {
        var n = "0x" + e - 65536;
        return n !== n || i
          ? e
          : 0 > n
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      },
      St = function () {
        P();
      };
    try {
      J.apply((X = K.call(H.childNodes)), H.childNodes),
        X[H.childNodes.length].nodeType;
    } catch (_t) {
      J = {
        apply: X.length
          ? function (t, e) {
              Z.apply(t, K.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    (w = e.support = {}),
      (_ = e.isXML = function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
      (P = e.setDocument = function (t) {
        var e,
          i,
          n = t ? t.ownerDocument || t : H;
        return n !== F && 9 === n.nodeType && n.documentElement
          ? ((F = n),
            (L = n.documentElement),
            (i = n.defaultView),
            i &&
              i !== i.top &&
              (i.addEventListener
                ? i.addEventListener("unload", St, !1)
                : i.attachEvent && i.attachEvent("onunload", St)),
            (N = !_(n)),
            (w.attributes = o(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (w.getElementsByTagName = o(function (t) {
              return (
                t.appendChild(n.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (w.getElementsByClassName = vt.test(n.getElementsByClassName)),
            (w.getById = o(function (t) {
              return (
                (L.appendChild(t).id = z),
                !n.getElementsByName || !n.getElementsByName(z).length
              );
            })),
            w.getById
              ? ((k.find.ID = function (t, e) {
                  if ("undefined" != typeof e.getElementById && N) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : [];
                  }
                }),
                (k.filter.ID = function (t) {
                  var e = t.replace(wt, kt);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }))
              : (delete k.find.ID,
                (k.filter.ID = function (t) {
                  var e = t.replace(wt, kt);
                  return function (t) {
                    var i =
                      "undefined" != typeof t.getAttributeNode &&
                      t.getAttributeNode("id");
                    return i && i.value === e;
                  };
                })),
            (k.find.TAG = w.getElementsByTagName
              ? function (t, e) {
                  return "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : w.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var i,
                    n = [],
                    o = 0,
                    a = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (i = a[o++]); ) 1 === i.nodeType && n.push(i);
                    return n;
                  }
                  return a;
                }),
            (k.find.CLASS =
              w.getElementsByClassName &&
              function (t, e) {
                return N ? e.getElementsByClassName(t) : void 0;
              }),
            (O = []),
            (E = []),
            (w.qsa = vt.test(n.querySelectorAll)) &&
              (o(function (t) {
                (L.appendChild(t).innerHTML =
                  "<a id='" +
                  z +
                  "'></a><select id='" +
                  z +
                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    E.push("[*^$]=" + it + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    E.push("\\[" + it + "*(?:value|" + et + ")"),
                  t.querySelectorAll("[id~=" + z + "-]").length || E.push("~="),
                  t.querySelectorAll(":checked").length || E.push(":checked"),
                  t.querySelectorAll("a#" + z + "+*").length ||
                    E.push(".#.+[+~]");
              }),
              o(function (t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    E.push("name" + it + "*[*^$|!~]?="),
                  t.querySelectorAll(":enabled").length ||
                    E.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  E.push(",.*:");
              })),
            (w.matchesSelector = vt.test(
              (W =
                L.matches ||
                L.webkitMatchesSelector ||
                L.mozMatchesSelector ||
                L.oMatchesSelector ||
                L.msMatchesSelector)
            )) &&
              o(function (t) {
                (w.disconnectedMatch = W.call(t, "div")),
                  W.call(t, "[s!='']:x"),
                  O.push("!=", st);
              }),
            (E = E.length && new RegExp(E.join("|"))),
            (O = O.length && new RegExp(O.join("|"))),
            (e = vt.test(L.compareDocumentPosition)),
            (R =
              e || vt.test(L.contains)
                ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                      n = e && e.parentNode;
                    return (
                      t === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(i.contains
                          ? i.contains(n)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(n))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (U = e
              ? function (t, e) {
                  if (t === e) return (I = !0), 0;
                  var i =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return i
                    ? i
                    : ((i =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1),
                      1 & i ||
                      (!w.sortDetached && e.compareDocumentPosition(t) === i)
                        ? t === n || (t.ownerDocument === H && R(H, t))
                          ? -1
                          : e === n || (e.ownerDocument === H && R(H, e))
                          ? 1
                          : A
                          ? tt(A, t) - tt(A, e)
                          : 0
                        : 4 & i
                        ? -1
                        : 1);
                }
              : function (t, e) {
                  if (t === e) return (I = !0), 0;
                  var i,
                    o = 0,
                    a = t.parentNode,
                    r = e.parentNode,
                    l = [t],
                    h = [e];
                  if (!a || !r)
                    return t === n
                      ? -1
                      : e === n
                      ? 1
                      : a
                      ? -1
                      : r
                      ? 1
                      : A
                      ? tt(A, t) - tt(A, e)
                      : 0;
                  if (a === r) return s(t, e);
                  for (i = t; (i = i.parentNode); ) l.unshift(i);
                  for (i = e; (i = i.parentNode); ) h.unshift(i);
                  for (; l[o] === h[o]; ) o++;
                  return o
                    ? s(l[o], h[o])
                    : l[o] === H
                    ? -1
                    : h[o] === H
                    ? 1
                    : 0;
                }),
            n)
          : F;
      }),
      (e.matches = function (t, i) {
        return e(t, null, null, i);
      }),
      (e.matchesSelector = function (t, i) {
        if (
          ((t.ownerDocument || t) !== F && P(t),
          (i = i.replace(ut, "='$1']")),
          !(!w.matchesSelector || !N || (O && O.test(i)) || (E && E.test(i))))
        )
          try {
            var n = W.call(t, i);
            if (
              n ||
              w.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return n;
          } catch (o) {}
        return e(i, F, null, [t]).length > 0;
      }),
      (e.contains = function (t, e) {
        return (t.ownerDocument || t) !== F && P(t), R(t, e);
      }),
      (e.attr = function (t, e) {
        (t.ownerDocument || t) !== F && P(t);
        var i = k.attrHandle[e.toLowerCase()],
          n = i && G.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
        return void 0 !== n
          ? n
          : w.attributes || !N
          ? t.getAttribute(e)
          : (n = t.getAttributeNode(e)) && n.specified
          ? n.value
          : null;
      }),
      (e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (e.uniqueSort = function (t) {
        var e,
          i = [],
          n = 0,
          o = 0;
        if (
          ((I = !w.detectDuplicates),
          (A = !w.sortStable && t.slice(0)),
          t.sort(U),
          I)
        ) {
          for (; (e = t[o++]); ) e === t[o] && (n = i.push(o));
          for (; n--; ) t.splice(i[n], 1);
        }
        return (A = null), t;
      }),
      (S = e.getText = function (t) {
        var e,
          i = "",
          n = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += S(t);
          } else if (3 === o || 4 === o) return t.nodeValue;
        } else for (; (e = t[n++]); ) i += S(e);
        return i;
      }),
      (k = e.selectors = {
        cacheLength: 50,
        createPseudo: n,
        match: pt,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(wt, kt)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(wt, kt)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || e.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && e.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              i = !t[6] && t[2];
            return pt.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : i &&
                    dt.test(i) &&
                    (e = C(i, !0)) &&
                    (e = i.indexOf(")", i.length - e) - i.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(wt, kt).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = j[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                j(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      ("undefined" != typeof t.getAttribute &&
                        t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (t, i, n) {
            return function (o) {
              var a = e.attr(o, t);
              return null == a
                ? "!=" === i
                : !i ||
                    ((a += ""),
                    "=" === i
                      ? a === n
                      : "!=" === i
                      ? a !== n
                      : "^=" === i
                      ? n && 0 === a.indexOf(n)
                      : "*=" === i
                      ? n && a.indexOf(n) > -1
                      : "$=" === i
                      ? n && a.slice(-n.length) === n
                      : "~=" === i
                      ? (" " + a.replace(rt, " ") + " ").indexOf(n) > -1
                      : "|=" === i &&
                        (a === n || a.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (t, e, i, n, o) {
            var a = "nth" !== t.slice(0, 3),
              s = "last" !== t.slice(-4),
              r = "of-type" === e;
            return 1 === n && 0 === o
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, i, l) {
                  var h,
                    c,
                    u,
                    d,
                    f,
                    p,
                    m = a !== s ? "nextSibling" : "previousSibling",
                    g = e.parentNode,
                    v = r && e.nodeName.toLowerCase(),
                    y = !l && !r;
                  if (g) {
                    if (a) {
                      for (; m; ) {
                        for (u = e; (u = u[m]); )
                          if (
                            r
                              ? u.nodeName.toLowerCase() === v
                              : 1 === u.nodeType
                          )
                            return !1;
                        p = m = "only" === t && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [s ? g.firstChild : g.lastChild]), s && y)) {
                      for (
                        c = g[z] || (g[z] = {}),
                          h = c[t] || [],
                          f = h[0] === V && h[1],
                          d = h[0] === V && h[2],
                          u = f && g.childNodes[f];
                        (u = (++f && u && u[m]) || (d = f = 0) || p.pop());

                      )
                        if (1 === u.nodeType && ++d && u === e) {
                          c[t] = [V, f, d];
                          break;
                        }
                    } else if (
                      y &&
                      (h = (e[z] || (e[z] = {}))[t]) &&
                      h[0] === V
                    )
                      d = h[1];
                    else
                      for (
                        ;
                        (u = (++f && u && u[m]) || (d = f = 0) || p.pop()) &&
                        ((r
                          ? u.nodeName.toLowerCase() !== v
                          : 1 !== u.nodeType) ||
                          !++d ||
                          (y && ((u[z] || (u[z] = {}))[t] = [V, d]), u !== e));

                      );
                    return (d -= o), d === n || (d % n === 0 && d / n >= 0);
                  }
                };
          },
          PSEUDO: function (t, i) {
            var o,
              a =
                k.pseudos[t] ||
                k.setFilters[t.toLowerCase()] ||
                e.error("unsupported pseudo: " + t);
            return a[z]
              ? a(i)
              : a.length > 1
              ? ((o = [t, t, "", i]),
                k.setFilters.hasOwnProperty(t.toLowerCase())
                  ? n(function (t, e) {
                      for (var n, o = a(t, i), s = o.length; s--; )
                        (n = tt(t, o[s])), (t[n] = !(e[n] = o[s]));
                    })
                  : function (t) {
                      return a(t, 0, o);
                    })
              : a;
          },
        },
        pseudos: {
          not: n(function (t) {
            var e = [],
              i = [],
              o = D(t.replace(lt, "$1"));
            return o[z]
              ? n(function (t, e, i, n) {
                  for (var a, s = o(t, null, n, []), r = t.length; r--; )
                    (a = s[r]) && (t[r] = !(e[r] = a));
                })
              : function (t, n, a) {
                  return (e[0] = t), o(e, null, a, i), (e[0] = null), !i.pop();
                };
          }),
          has: n(function (t) {
            return function (i) {
              return e(t, i).length > 0;
            };
          }),
          contains: n(function (t) {
            return (
              (t = t.replace(wt, kt)),
              function (e) {
                return (e.textContent || e.innerText || S(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: n(function (t) {
            return (
              ft.test(t || "") || e.error("unsupported lang: " + t),
              (t = t.replace(wt, kt).toLowerCase()),
              function (e) {
                var i;
                do
                  if (
                    (i = N
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()), i === t || 0 === i.indexOf(t + "-")
                    );
                while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id;
          },
          root: function (t) {
            return t === L;
          },
          focus: function (t) {
            return (
              t === F.activeElement &&
              (!F.hasFocus || F.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: function (t) {
            return t.disabled === !1;
          },
          disabled: function (t) {
            return t.disabled === !0;
          },
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, t.selected === !0
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !k.pseudos.empty(t);
          },
          header: function (t) {
            return gt.test(t.nodeName);
          },
          input: function (t) {
            return mt.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: h(function () {
            return [0];
          }),
          last: h(function (t, e) {
            return [e - 1];
          }),
          eq: h(function (t, e, i) {
            return [0 > i ? i + e : i];
          }),
          even: h(function (t, e) {
            for (var i = 0; e > i; i += 2) t.push(i);
            return t;
          }),
          odd: h(function (t, e) {
            for (var i = 1; e > i; i += 2) t.push(i);
            return t;
          }),
          lt: h(function (t, e, i) {
            for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
            return t;
          }),
          gt: h(function (t, e, i) {
            for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
            return t;
          }),
        },
      }),
      (k.pseudos.nth = k.pseudos.eq);
    for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      k.pseudos[x] = r(x);
    for (x in { submit: !0, reset: !0 }) k.pseudos[x] = l(x);
    return (
      (u.prototype = k.filters = k.pseudos),
      (k.setFilters = new u()),
      (C = e.tokenize = function (t, i) {
        var n,
          o,
          a,
          s,
          r,
          l,
          h,
          c = Y[t + " "];
        if (c) return i ? 0 : c.slice(0);
        for (r = t, l = [], h = k.preFilter; r; ) {
          (!n || (o = ht.exec(r))) &&
            (o && (r = r.slice(o[0].length) || r), l.push((a = []))),
            (n = !1),
            (o = ct.exec(r)) &&
              ((n = o.shift()),
              a.push({ value: n, type: o[0].replace(lt, " ") }),
              (r = r.slice(n.length)));
          for (s in k.filter)
            !(o = pt[s].exec(r)) ||
              (h[s] && !(o = h[s](o))) ||
              ((n = o.shift()),
              a.push({ value: n, type: s, matches: o }),
              (r = r.slice(n.length)));
          if (!n) break;
        }
        return i ? r.length : r ? e.error(t) : Y(t, l).slice(0);
      }),
      (D = e.compile = function (t, e) {
        var i,
          n = [],
          o = [],
          a = q[t + " "];
        if (!a) {
          for (e || (e = C(t)), i = e.length; i--; )
            (a = y(e[i])), a[z] ? n.push(a) : o.push(a);
          (a = q(t, b(o, n))), (a.selector = t);
        }
        return a;
      }),
      (T = e.select = function (t, e, i, n) {
        var o,
          a,
          s,
          r,
          l,
          h = "function" == typeof t && t,
          u = !n && C((t = h.selector || t));
        if (((i = i || []), 1 === u.length)) {
          if (
            ((a = u[0] = u[0].slice(0)),
            a.length > 2 &&
              "ID" === (s = a[0]).type &&
              w.getById &&
              9 === e.nodeType &&
              N &&
              k.relative[a[1].type])
          ) {
            if (
              ((e = (k.find.ID(s.matches[0].replace(wt, kt), e) || [])[0]), !e)
            )
              return i;
            h && (e = e.parentNode), (t = t.slice(a.shift().value.length));
          }
          for (
            o = pt.needsContext.test(t) ? 0 : a.length;
            o-- && ((s = a[o]), !k.relative[(r = s.type)]);

          )
            if (
              (l = k.find[r]) &&
              (n = l(
                s.matches[0].replace(wt, kt),
                (bt.test(a[0].type) && c(e.parentNode)) || e
              ))
            ) {
              if ((a.splice(o, 1), (t = n.length && d(a)), !t))
                return J.apply(i, n), i;
              break;
            }
        }
        return (
          (h || D(t, u))(n, e, !N, i, (bt.test(t) && c(e.parentNode)) || e), i
        );
      }),
      (w.sortStable = z.split("").sort(U).join("") === z),
      (w.detectDuplicates = !!I),
      P(),
      (w.sortDetached = o(function (t) {
        return 1 & t.compareDocumentPosition(F.createElement("div"));
      })),
      o(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        a("type|href|height|width", function (t, e, i) {
          return i
            ? void 0
            : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        o(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        a("value", function (t, e, i) {
          return i || "input" !== t.nodeName.toLowerCase()
            ? void 0
            : t.defaultValue;
        }),
      o(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        a(et, function (t, e, i) {
          var n;
          return i
            ? void 0
            : t[e] === !0
            ? e.toLowerCase()
            : (n = t.getAttributeNode(e)) && n.specified
            ? n.value
            : null;
        }),
      e
    );
  })(t);
  (ot.find = ht),
    (ot.expr = ht.selectors),
    (ot.expr[":"] = ot.expr.pseudos),
    (ot.unique = ht.uniqueSort),
    (ot.text = ht.getText),
    (ot.isXMLDoc = ht.isXML),
    (ot.contains = ht.contains);
  var ct = ot.expr.match.needsContext,
    ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    dt = /^.[^:#\[\.,]*$/;
  (ot.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ":not(" + t + ")"),
      1 === e.length && 1 === n.nodeType
        ? ot.find.matchesSelector(n, t)
          ? [n]
          : []
        : ot.find.matches(
            t,
            ot.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    ot.fn.extend({
      find: function (t) {
        var e,
          i = [],
          n = this,
          o = n.length;
        if ("string" != typeof t)
          return this.pushStack(
            ot(t).filter(function () {
              for (e = 0; o > e; e++) if (ot.contains(n[e], this)) return !0;
            })
          );
        for (e = 0; o > e; e++) ot.find(t, n[e], i);
        return (
          (i = this.pushStack(o > 1 ? ot.unique(i) : i)),
          (i.selector = this.selector ? this.selector + " " + t : t),
          i
        );
      },
      filter: function (t) {
        return this.pushStack(n(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(n(this, t || [], !0));
      },
      is: function (t) {
        return !!n(
          this,
          "string" == typeof t && ct.test(t) ? ot(t) : t || [],
          !1
        ).length;
      },
    });
  var ft,
    pt = t.document,
    mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    gt = (ot.fn.init = function (t, e) {
      var i, n;
      if (!t) return this;
      if ("string" == typeof t) {
        if (
          ((i =
            "<" === t.charAt(0) &&
            ">" === t.charAt(t.length - 1) &&
            t.length >= 3
              ? [null, t, null]
              : mt.exec(t)),
          !i || (!i[1] && e))
        )
          return !e || e.jquery
            ? (e || ft).find(t)
            : this.constructor(e).find(t);
        if (i[1]) {
          if (
            ((e = e instanceof ot ? e[0] : e),
            ot.merge(
              this,
              ot.parseHTML(
                i[1],
                e && e.nodeType ? e.ownerDocument || e : pt,
                !0
              )
            ),
            ut.test(i[1]) && ot.isPlainObject(e))
          )
            for (i in e)
              ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
          return this;
        }
        if (((n = pt.getElementById(i[2])), n && n.parentNode)) {
          if (n.id !== i[2]) return ft.find(t);
          (this.length = 1), (this[0] = n);
        }
        return (this.context = pt), (this.selector = t), this;
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : ot.isFunction(t)
        ? "undefined" != typeof ft.ready
          ? ft.ready(t)
          : t(ot)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          ot.makeArray(t, this));
    });
  (gt.prototype = ot.fn), (ft = ot(pt));
  var vt = /^(?:parents|prev(?:Until|All))/,
    yt = { children: !0, contents: !0, next: !0, prev: !0 };
  ot.extend({
    dir: function (t, e, i) {
      for (
        var n = [], o = t[e];
        o &&
        9 !== o.nodeType &&
        (void 0 === i || 1 !== o.nodeType || !ot(o).is(i));

      )
        1 === o.nodeType && n.push(o), (o = o[e]);
      return n;
    },
    sibling: function (t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
  }),
    ot.fn.extend({
      has: function (t) {
        var e,
          i = ot(t, this),
          n = i.length;
        return this.filter(function () {
          for (e = 0; n > e; e++) if (ot.contains(this, i[e])) return !0;
        });
      },
      closest: function (t, e) {
        for (
          var i,
            n = 0,
            o = this.length,
            a = [],
            s =
              ct.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0;
          o > n;
          n++
        )
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (s
                ? s.index(i) > -1
                : 1 === i.nodeType && ot.find.matchesSelector(i, t))
            ) {
              a.push(i);
              break;
            }
        return this.pushStack(a.length > 1 ? ot.unique(a) : a);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? ot.inArray(this[0], ot(t))
            : ot.inArray(t.jquery ? t[0] : t, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(ot.unique(ot.merge(this.get(), ot(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
    ot.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return ot.dir(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return ot.dir(t, "parentNode", i);
        },
        next: function (t) {
          return o(t, "nextSibling");
        },
        prev: function (t) {
          return o(t, "previousSibling");
        },
        nextAll: function (t) {
          return ot.dir(t, "nextSibling");
        },
        prevAll: function (t) {
          return ot.dir(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return ot.dir(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return ot.dir(t, "previousSibling", i);
        },
        siblings: function (t) {
          return ot.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return ot.sibling(t.firstChild);
        },
        contents: function (t) {
          return ot.nodeName(t, "iframe")
            ? t.contentDocument || t.contentWindow.document
            : ot.merge([], t.childNodes);
        },
      },
      function (t, e) {
        ot.fn[t] = function (i, n) {
          var o = ot.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (o = ot.filter(n, o)),
            this.length > 1 &&
              (yt[t] || (o = ot.unique(o)), vt.test(t) && (o = o.reverse())),
            this.pushStack(o)
          );
        };
      }
    );
  var bt = /\S+/g,
    xt = {};
  (ot.Callbacks = function (t) {
    t = "string" == typeof t ? xt[t] || a(t) : ot.extend({}, t);
    var e,
      i,
      n,
      o,
      s,
      r,
      l = [],
      h = !t.once && [],
      c = function (a) {
        for (
          i = t.memory && a, n = !0, s = r || 0, r = 0, o = l.length, e = !0;
          l && o > s;
          s++
        )
          if (l[s].apply(a[0], a[1]) === !1 && t.stopOnFalse) {
            i = !1;
            break;
          }
        (e = !1),
          l && (h ? h.length && c(h.shift()) : i ? (l = []) : u.disable());
      },
      u = {
        add: function () {
          if (l) {
            var n = l.length;
            !(function a(e) {
              ot.each(e, function (e, i) {
                var n = ot.type(i);
                "function" === n
                  ? (t.unique && u.has(i)) || l.push(i)
                  : i && i.length && "string" !== n && a(i);
              });
            })(arguments),
              e ? (o = l.length) : i && ((r = n), c(i));
          }
          return this;
        },
        remove: function () {
          return (
            l &&
              ot.each(arguments, function (t, i) {
                for (var n; (n = ot.inArray(i, l, n)) > -1; )
                  l.splice(n, 1), e && (o >= n && o--, s >= n && s--);
              }),
            this
          );
        },
        has: function (t) {
          return t ? ot.inArray(t, l) > -1 : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), (o = 0), this;
        },
        disable: function () {
          return (l = h = i = void 0), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (h = void 0), i || u.disable(), this;
        },
        locked: function () {
          return !h;
        },
        fireWith: function (t, i) {
          return (
            !l ||
              (n && !h) ||
              ((i = i || []),
              (i = [t, i.slice ? i.slice() : i]),
              e ? h.push(i) : c(i)),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return u;
  }),
    ot.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ot.Callbacks("memory")],
          ],
          i = "pending",
          n = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return ot
                .Deferred(function (i) {
                  ot.each(e, function (e, a) {
                    var s = ot.isFunction(t[e]) && t[e];
                    o[a[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && ot.isFunction(t.promise)
                        ? t
                            .promise()
                            .done(i.resolve)
                            .fail(i.reject)
                            .progress(i.notify)
                        : i[a[0] + "With"](
                            this === n ? i.promise() : this,
                            s ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? ot.extend(t, n) : n;
            },
          },
          o = {};
        return (
          (n.pipe = n.then),
          ot.each(e, function (t, a) {
            var s = a[2],
              r = a[3];
            (n[a[1]] = s.add),
              r &&
                s.add(
                  function () {
                    i = r;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (o[a[0]] = function () {
                return o[a[0] + "With"](this === o ? n : this, arguments), this;
              }),
              (o[a[0] + "With"] = s.fireWith);
          }),
          n.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (t) {
        var e,
          i,
          n,
          o = 0,
          a = X.call(arguments),
          s = a.length,
          r = 1 !== s || (t && ot.isFunction(t.promise)) ? s : 0,
          l = 1 === r ? t : ot.Deferred(),
          h = function (t, i, n) {
            return function (o) {
              (i[t] = this),
                (n[t] = arguments.length > 1 ? X.call(arguments) : o),
                n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n);
            };
          };
        if (s > 1)
          for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++)
            a[o] && ot.isFunction(a[o].promise)
              ? a[o]
                  .promise()
                  .done(h(o, n, a))
                  .fail(l.reject)
                  .progress(h(o, i, e))
              : --r;
        return r || l.resolveWith(n, a), l.promise();
      },
    });
  var wt;
  (ot.fn.ready = function (t) {
    return ot.ready.promise().done(t), this;
  }),
    ot.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? ot.readyWait++ : ot.ready(!0);
      },
      ready: function (t) {
        if (t === !0 ? !--ot.readyWait : !ot.isReady) {
          if (!pt.body) return setTimeout(ot.ready);
          (ot.isReady = !0),
            (t !== !0 && --ot.readyWait > 0) ||
              (wt.resolveWith(pt, [ot]),
              ot.fn.triggerHandler &&
                (ot(pt).triggerHandler("ready"), ot(pt).off("ready")));
        }
      },
    }),
    (ot.ready.promise = function (e) {
      if (!wt)
        if (((wt = ot.Deferred()), "complete" === pt.readyState))
          setTimeout(ot.ready);
        else if (pt.addEventListener)
          pt.addEventListener("DOMContentLoaded", r, !1),
            t.addEventListener("load", r, !1);
        else {
          pt.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
          var i = !1;
          try {
            i = null == t.frameElement && pt.documentElement;
          } catch (n) {}
          i &&
            i.doScroll &&
            !(function o() {
              if (!ot.isReady) {
                try {
                  i.doScroll("left");
                } catch (t) {
                  return setTimeout(o, 50);
                }
                s(), ot.ready();
              }
            })();
        }
      return wt.promise(e);
    });
  var kt,
    St = "undefined";
  for (kt in ot(it)) break;
  (it.ownLast = "0" !== kt),
    (it.inlineBlockNeedsLayout = !1),
    ot(function () {
      var t, e, i, n;
      (i = pt.getElementsByTagName("body")[0]),
        i &&
          i.style &&
          ((e = pt.createElement("div")),
          (n = pt.createElement("div")),
          (n.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          i.appendChild(n).appendChild(e),
          typeof e.style.zoom !== St &&
            ((e.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth),
            t && (i.style.zoom = 1)),
          i.removeChild(n));
    }),
    (function () {
      var t = pt.createElement("div");
      if (null == it.deleteExpando) {
        it.deleteExpando = !0;
        try {
          delete t.test;
        } catch (e) {
          it.deleteExpando = !1;
        }
      }
      t = null;
    })(),
    (ot.acceptData = function (t) {
      var e = ot.noData[(t.nodeName + " ").toLowerCase()],
        i = +t.nodeType || 1;
      return (
        (1 === i || 9 === i) &&
        (!e || (e !== !0 && t.getAttribute("classid") === e))
      );
    });
  var _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ct = /([A-Z])/g;
  ot.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (t) {
      return (
        (t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando]), !!t && !h(t)
      );
    },
    data: function (t, e, i) {
      return c(t, e, i);
    },
    removeData: function (t, e) {
      return u(t, e);
    },
    _data: function (t, e, i) {
      return c(t, e, i, !0);
    },
    _removeData: function (t, e) {
      return u(t, e, !0);
    },
  }),
    ot.fn.extend({
      data: function (t, e) {
        var i,
          n,
          o,
          a = this[0],
          s = a && a.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((o = ot.data(a)), 1 === a.nodeType && !ot._data(a, "parsedAttrs"))
          ) {
            for (i = s.length; i--; )
              s[i] &&
                ((n = s[i].name),
                0 === n.indexOf("data-") &&
                  ((n = ot.camelCase(n.slice(5))), l(a, n, o[n])));
            ot._data(a, "parsedAttrs", !0);
          }
          return o;
        }
        return "object" == typeof t
          ? this.each(function () {
              ot.data(this, t);
            })
          : arguments.length > 1
          ? this.each(function () {
              ot.data(this, t, e);
            })
          : a
          ? l(a, t, ot.data(a, t))
          : void 0;
      },
      removeData: function (t) {
        return this.each(function () {
          ot.removeData(this, t);
        });
      },
    }),
    ot.extend({
      queue: function (t, e, i) {
        var n;
        return t
          ? ((e = (e || "fx") + "queue"),
            (n = ot._data(t, e)),
            i &&
              (!n || ot.isArray(i)
                ? (n = ot._data(t, e, ot.makeArray(i)))
                : n.push(i)),
            n || [])
          : void 0;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = ot.queue(t, e),
          n = i.length,
          o = i.shift(),
          a = ot._queueHooks(t, e),
          s = function () {
            ot.dequeue(t, e);
          };
        "inprogress" === o && ((o = i.shift()), n--),
          o &&
            ("fx" === e && i.unshift("inprogress"),
            delete a.stop,
            o.call(t, s, a)),
          !n && a && a.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          ot._data(t, i) ||
          ot._data(t, i, {
            empty: ot.Callbacks("once memory").add(function () {
              ot._removeData(t, e + "queue"), ot._removeData(t, i);
            }),
          })
        );
      },
    }),
    ot.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), i--),
          arguments.length < i
            ? ot.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var i = ot.queue(this, t, e);
                ot._queueHooks(this, t),
                  "fx" === t && "inprogress" !== i[0] && ot.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          ot.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          o = ot.Deferred(),
          a = this,
          s = this.length,
          r = function () {
            --n || o.resolveWith(a, [a]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          s--;

        )
          (i = ot._data(a[s], t + "queueHooks")),
            i && i.empty && (n++, i.empty.add(r));
        return r(), o.promise(e);
      },
    });
  var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Tt = ["Top", "Right", "Bottom", "Left"],
    Mt = function (t, e) {
      return (
        (t = e || t),
        "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
      );
    },
    At = (ot.access = function (t, e, i, n, o, a, s) {
      var r = 0,
        l = t.length,
        h = null == i;
      if ("object" === ot.type(i)) {
        o = !0;
        for (r in i) ot.access(t, e, r, i[r], !0, a, s);
      } else if (
        void 0 !== n &&
        ((o = !0),
        ot.isFunction(n) || (s = !0),
        h &&
          (s
            ? (e.call(t, n), (e = null))
            : ((h = e),
              (e = function (t, e, i) {
                return h.call(ot(t), i);
              }))),
        e)
      )
        for (; l > r; r++) e(t[r], i, s ? n : n.call(t[r], r, e(t[r], i)));
      return o ? t : h ? e.call(t) : l ? e(t[0], i) : a;
    }),
    It = /^(?:checkbox|radio)$/i;
  !(function () {
    var t = pt.createElement("input"),
      e = pt.createElement("div"),
      i = pt.createDocumentFragment();
    if (
      ((e.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (it.leadingWhitespace = 3 === e.firstChild.nodeType),
      (it.tbody = !e.getElementsByTagName("tbody").length),
      (it.htmlSerialize = !!e.getElementsByTagName("link").length),
      (it.html5Clone =
        "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML),
      (t.type = "checkbox"),
      (t.checked = !0),
      i.appendChild(t),
      (it.appendChecked = t.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
      i.appendChild(e),
      (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (it.noCloneEvent = !0),
      e.attachEvent &&
        (e.attachEvent("onclick", function () {
          it.noCloneEvent = !1;
        }),
        e.cloneNode(!0).click()),
      null == it.deleteExpando)
    ) {
      it.deleteExpando = !0;
      try {
        delete e.test;
      } catch (n) {
        it.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var e,
        i,
        n = pt.createElement("div");
      for (e in { submit: !0, change: !0, focusin: !0 })
        (i = "on" + e),
          (it[e + "Bubbles"] = i in t) ||
            (n.setAttribute(i, "t"),
            (it[e + "Bubbles"] = n.attributes[i].expando === !1));
      n = null;
    })();
  var Pt = /^(?:input|select|textarea)$/i,
    Ft = /^key/,
    Lt = /^(?:mouse|pointer|contextmenu)|click/,
    Nt = /^(?:focusinfocus|focusoutblur)$/,
    Et = /^([^.]*)(?:\.(.+)|)$/;
  (ot.event = {
    global: {},
    add: function (t, e, i, n, o) {
      var a,
        s,
        r,
        l,
        h,
        c,
        u,
        d,
        f,
        p,
        m,
        g = ot._data(t);
      if (g) {
        for (
          i.handler && ((l = i), (i = l.handler), (o = l.selector)),
            i.guid || (i.guid = ot.guid++),
            (s = g.events) || (s = g.events = {}),
            (c = g.handle) ||
              ((c = g.handle = function (t) {
                return typeof ot === St || (t && ot.event.triggered === t.type)
                  ? void 0
                  : ot.event.dispatch.apply(c.elem, arguments);
              }),
              (c.elem = t)),
            e = (e || "").match(bt) || [""],
            r = e.length;
          r--;

        )
          (a = Et.exec(e[r]) || []),
            (f = m = a[1]),
            (p = (a[2] || "").split(".").sort()),
            f &&
              ((h = ot.event.special[f] || {}),
              (f = (o ? h.delegateType : h.bindType) || f),
              (h = ot.event.special[f] || {}),
              (u = ot.extend(
                {
                  type: f,
                  origType: m,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: o,
                  needsContext: o && ot.expr.match.needsContext.test(o),
                  namespace: p.join("."),
                },
                l
              )),
              (d = s[f]) ||
                ((d = s[f] = []),
                (d.delegateCount = 0),
                (h.setup && h.setup.call(t, n, p, c) !== !1) ||
                  (t.addEventListener
                    ? t.addEventListener(f, c, !1)
                    : t.attachEvent && t.attachEvent("on" + f, c))),
              h.add &&
                (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
              o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
              (ot.event.global[f] = !0));
        t = null;
      }
    },
    remove: function (t, e, i, n, o) {
      var a,
        s,
        r,
        l,
        h,
        c,
        u,
        d,
        f,
        p,
        m,
        g = ot.hasData(t) && ot._data(t);
      if (g && (c = g.events)) {
        for (e = (e || "").match(bt) || [""], h = e.length; h--; )
          if (
            ((r = Et.exec(e[h]) || []),
            (f = m = r[1]),
            (p = (r[2] || "").split(".").sort()),
            f)
          ) {
            for (
              u = ot.event.special[f] || {},
                f = (n ? u.delegateType : u.bindType) || f,
                d = c[f] || [],
                r =
                  r[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = a = d.length;
              a--;

            )
              (s = d[a]),
                (!o && m !== s.origType) ||
                  (i && i.guid !== s.guid) ||
                  (r && !r.test(s.namespace)) ||
                  (n && n !== s.selector && ("**" !== n || !s.selector)) ||
                  (d.splice(a, 1),
                  s.selector && d.delegateCount--,
                  u.remove && u.remove.call(t, s));
            l &&
              !d.length &&
              ((u.teardown && u.teardown.call(t, p, g.handle) !== !1) ||
                ot.removeEvent(t, f, g.handle),
              delete c[f]);
          } else for (f in c) ot.event.remove(t, f + e[h], i, n, !0);
        ot.isEmptyObject(c) && (delete g.handle, ot._removeData(t, "events"));
      }
    },
    trigger: function (e, i, n, o) {
      var a,
        s,
        r,
        l,
        h,
        c,
        u,
        d = [n || pt],
        f = et.call(e, "type") ? e.type : e,
        p = et.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((r = c = n = n || pt),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Nt.test(f + ot.event.triggered) &&
          (f.indexOf(".") >= 0 &&
            ((p = f.split(".")), (f = p.shift()), p.sort()),
          (s = f.indexOf(":") < 0 && "on" + f),
          (e = e[ot.expando] ? e : new ot.Event(f, "object" == typeof e && e)),
          (e.isTrigger = o ? 2 : 3),
          (e.namespace = p.join(".")),
          (e.namespace_re = e.namespace
            ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (i = null == i ? [e] : ot.makeArray(i, [e])),
          (h = ot.event.special[f] || {}),
          o || !h.trigger || h.trigger.apply(n, i) !== !1))
      ) {
        if (!o && !h.noBubble && !ot.isWindow(n)) {
          for (
            l = h.delegateType || f, Nt.test(l + f) || (r = r.parentNode);
            r;
            r = r.parentNode
          )
            d.push(r), (c = r);
          c === (n.ownerDocument || pt) &&
            d.push(c.defaultView || c.parentWindow || t);
        }
        for (u = 0; (r = d[u++]) && !e.isPropagationStopped(); )
          (e.type = u > 1 ? l : h.bindType || f),
            (a =
              (ot._data(r, "events") || {})[e.type] && ot._data(r, "handle")),
            a && a.apply(r, i),
            (a = s && r[s]),
            a &&
              a.apply &&
              ot.acceptData(r) &&
              ((e.result = a.apply(r, i)),
              e.result === !1 && e.preventDefault());
        if (
          ((e.type = f),
          !o &&
            !e.isDefaultPrevented() &&
            (!h._default || h._default.apply(d.pop(), i) === !1) &&
            ot.acceptData(n) &&
            s &&
            n[f] &&
            !ot.isWindow(n))
        ) {
          (c = n[s]), c && (n[s] = null), (ot.event.triggered = f);
          try {
            n[f]();
          } catch (m) {}
          (ot.event.triggered = void 0), c && (n[s] = c);
        }
        return e.result;
      }
    },
    dispatch: function (t) {
      t = ot.event.fix(t);
      var e,
        i,
        n,
        o,
        a,
        s = [],
        r = X.call(arguments),
        l = (ot._data(this, "events") || {})[t.type] || [],
        h = ot.event.special[t.type] || {};
      if (
        ((r[0] = t),
        (t.delegateTarget = this),
        !h.preDispatch || h.preDispatch.call(this, t) !== !1)
      ) {
        for (
          s = ot.event.handlers.call(this, t, l), e = 0;
          (o = s[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = o.elem, a = 0;
            (n = o.handlers[a++]) && !t.isImmediatePropagationStopped();

          )
            (!t.namespace_re || t.namespace_re.test(n.namespace)) &&
              ((t.handleObj = n),
              (t.data = n.data),
              (i = (
                (ot.event.special[n.origType] || {}).handle || n.handler
              ).apply(o.elem, r)),
              void 0 !== i &&
                (t.result = i) === !1 &&
                (t.preventDefault(), t.stopPropagation()));
        return h.postDispatch && h.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        o,
        a,
        s = [],
        r = e.delegateCount,
        l = t.target;
      if (r && l.nodeType && (!t.button || "click" !== t.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
            for (o = [], a = 0; r > a; a++)
              (n = e[a]),
                (i = n.selector + " "),
                void 0 === o[i] &&
                  (o[i] = n.needsContext
                    ? ot(i, this).index(l) >= 0
                    : ot.find(i, this, null, [l]).length),
                o[i] && o.push(n);
            o.length && s.push({ elem: l, handlers: o });
          }
      return r < e.length && s.push({ elem: this, handlers: e.slice(r) }), s;
    },
    fix: function (t) {
      if (t[ot.expando]) return t;
      var e,
        i,
        n,
        o = t.type,
        a = t,
        s = this.fixHooks[o];
      for (
        s ||
          (this.fixHooks[o] = s = Lt.test(o)
            ? this.mouseHooks
            : Ft.test(o)
            ? this.keyHooks
            : {}),
          n = s.props ? this.props.concat(s.props) : this.props,
          t = new ot.Event(a),
          e = n.length;
        e--;

      )
        (i = n[e]), (t[i] = a[i]);
      return (
        t.target || (t.target = a.srcElement || pt),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        (t.metaKey = !!t.metaKey),
        s.filter ? s.filter(t, a) : t
      );
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (t, e) {
        var i,
          n,
          o,
          a = e.button,
          s = e.fromElement;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((n = t.target.ownerDocument || pt),
            (o = n.documentElement),
            (i = n.body),
            (t.pageX =
              e.clientX +
              ((o && o.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((o && o.clientLeft) || (i && i.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((o && o.scrollTop) || (i && i.scrollTop) || 0) -
              ((o && o.clientTop) || (i && i.clientTop) || 0))),
          !t.relatedTarget &&
            s &&
            (t.relatedTarget = s === t.target ? e.toElement : s),
          t.which ||
            void 0 === a ||
            (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
          t
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== p() && this.focus)
            try {
              return this.focus(), !1;
            } catch (t) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === p() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return ot.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (t) {
          return ot.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
    simulate: function (t, e, i, n) {
      var o = ot.extend(new ot.Event(), i, {
        type: t,
        isSimulated: !0,
        originalEvent: {},
      });
      n ? ot.event.trigger(o, null, e) : ot.event.dispatch.call(e, o),
        o.isDefaultPrevented() && i.preventDefault();
    },
  }),
    (ot.removeEvent = pt.removeEventListener
      ? function (t, e, i) {
          t.removeEventListener && t.removeEventListener(e, i, !1);
        }
      : function (t, e, i) {
          var n = "on" + e;
          t.detachEvent &&
            (typeof t[n] === St && (t[n] = null), t.detachEvent(n, i));
        }),
    (ot.Event = function (t, e) {
      return this instanceof ot.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && t.returnValue === !1)
                  ? d
                  : f))
            : (this.type = t),
          e && ot.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || ot.now()),
          void (this[ot.expando] = !0))
        : new ot.Event(t, e);
    }),
    (ot.Event.prototype = {
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = d),
          t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = d),
          t &&
            (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = d),
          t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ot.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        ot.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = this,
              o = t.relatedTarget,
              a = t.handleObj;
            return (
              (!o || (o !== n && !ot.contains(n, o))) &&
                ((t.type = a.origType),
                (i = a.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      }
    ),
    it.submitBubbles ||
      (ot.event.special.submit = {
        setup: function () {
          return (
            !ot.nodeName(this, "form") &&
            void ot.event.add(this, "click._submit keypress._submit", function (
              t
            ) {
              var e = t.target,
                i =
                  ot.nodeName(e, "input") || ot.nodeName(e, "button")
                    ? e.form
                    : void 0;
              i &&
                !ot._data(i, "submitBubbles") &&
                (ot.event.add(i, "submit._submit", function (t) {
                  t._submit_bubble = !0;
                }),
                ot._data(i, "submitBubbles", !0));
            })
          );
        },
        postDispatch: function (t) {
          t._submit_bubble &&
            (delete t._submit_bubble,
            this.parentNode &&
              !t.isTrigger &&
              ot.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function () {
          return (
            !ot.nodeName(this, "form") && void ot.event.remove(this, "._submit")
          );
        },
      }),
    it.changeBubbles ||
      (ot.event.special.change = {
        setup: function () {
          return Pt.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (ot.event.add(this, "propertychange._change", function (t) {
                  "checked" === t.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                ot.event.add(this, "click._change", function (t) {
                  this._just_changed &&
                    !t.isTrigger &&
                    (this._just_changed = !1),
                    ot.event.simulate("change", this, t, !0);
                })),
              !1)
            : void ot.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Pt.test(e.nodeName) &&
                  !ot._data(e, "changeBubbles") &&
                  (ot.event.add(e, "change._change", function (t) {
                    !this.parentNode ||
                      t.isSimulated ||
                      t.isTrigger ||
                      ot.event.simulate("change", this.parentNode, t, !0);
                  }),
                  ot._data(e, "changeBubbles", !0));
              });
        },
        handle: function (t) {
          var e = t.target;
          return this !== e ||
            t.isSimulated ||
            t.isTrigger ||
            ("radio" !== e.type && "checkbox" !== e.type)
            ? t.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return ot.event.remove(this, "._change"), !Pt.test(this.nodeName);
        },
      }),
    it.focusinBubbles ||
      ot.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var i = function (t) {
          ot.event.simulate(e, t.target, ot.event.fix(t), !0);
        };
        ot.event.special[e] = {
          setup: function () {
            var n = this.ownerDocument || this,
              o = ot._data(n, e);
            o || n.addEventListener(t, i, !0), ot._data(n, e, (o || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              o = ot._data(n, e) - 1;
            o
              ? ot._data(n, e, o)
              : (n.removeEventListener(t, i, !0), ot._removeData(n, e));
          },
        };
      }),
    ot.fn.extend({
      on: function (t, e, i, n, o) {
        var a, s;
        if ("object" == typeof t) {
          "string" != typeof e && ((i = i || e), (e = void 0));
          for (a in t) this.on(a, e, i, t[a], o);
          return this;
        }
        if (
          (null == i && null == n
            ? ((n = e), (i = e = void 0))
            : null == n &&
              ("string" == typeof e
                ? ((n = i), (i = void 0))
                : ((n = i), (i = e), (e = void 0))),
          n === !1)
        )
          n = f;
        else if (!n) return this;
        return (
          1 === o &&
            ((s = n),
            (n = function (t) {
              return ot().off(t), s.apply(this, arguments);
            }),
            (n.guid = s.guid || (s.guid = ot.guid++))),
          this.each(function () {
            ot.event.add(this, t, n, i, e);
          })
        );
      },
      one: function (t, e, i, n) {
        return this.on(t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, o;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            ot(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (o in t) this.off(o, e, t[o]);
          return this;
        }
        return (
          (e === !1 || "function" == typeof e) && ((i = e), (e = void 0)),
          i === !1 && (i = f),
          this.each(function () {
            ot.event.remove(this, t, i, e);
          })
        );
      },
      trigger: function (t, e) {
        return this.each(function () {
          ot.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        return i ? ot.event.trigger(t, e, i, !0) : void 0;
      },
    });
  var Ot =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Wt = / jQuery\d+="(?:null|\d+)"/g,
    Rt = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
    zt = /^\s+/,
    Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Vt = /<([\w:]+)/,
    Bt = /<tbody/i,
    jt = /<|&#?\w+;/,
    Yt = /<(?:script|style|link)/i,
    qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ut = /^$|\/(?:java|ecma)script/i,
    $t = /^true\/(.*)/,
    Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Xt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    Qt = m(pt),
    Zt = Qt.appendChild(pt.createElement("div"));
  (Xt.optgroup = Xt.option),
    (Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead),
    (Xt.th = Xt.td),
    ot.extend({
      clone: function (t, e, i) {
        var n,
          o,
          a,
          s,
          r,
          l = ot.contains(t.ownerDocument, t);
        if (
          (it.html5Clone || ot.isXMLDoc(t) || !Rt.test("<" + t.nodeName + ">")
            ? (a = t.cloneNode(!0))
            : ((Zt.innerHTML = t.outerHTML),
              Zt.removeChild((a = Zt.firstChild))),
          !(
            (it.noCloneEvent && it.noCloneChecked) ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            ot.isXMLDoc(t)
          ))
        )
          for (n = g(a), r = g(t), s = 0; null != (o = r[s]); ++s)
            n[s] && S(o, n[s]);
        if (e)
          if (i)
            for (r = r || g(t), n = n || g(a), s = 0; null != (o = r[s]); s++)
              k(o, n[s]);
          else k(t, a);
        return (
          (n = g(a, "script")),
          n.length > 0 && w(n, !l && g(t, "script")),
          (n = r = o = null),
          a
        );
      },
      buildFragment: function (t, e, i, n) {
        for (
          var o, a, s, r, l, h, c, u = t.length, d = m(e), f = [], p = 0;
          u > p;
          p++
        )
          if (((a = t[p]), a || 0 === a))
            if ("object" === ot.type(a)) ot.merge(f, a.nodeType ? [a] : a);
            else if (jt.test(a)) {
              for (
                r = r || d.appendChild(e.createElement("div")),
                  l = (Vt.exec(a) || ["", ""])[1].toLowerCase(),
                  c = Xt[l] || Xt._default,
                  r.innerHTML = c[1] + a.replace(Ht, "<$1></$2>") + c[2],
                  o = c[0];
                o--;

              )
                r = r.lastChild;
              if (
                (!it.leadingWhitespace &&
                  zt.test(a) &&
                  f.push(e.createTextNode(zt.exec(a)[0])),
                !it.tbody)
              )
                for (
                  a =
                    "table" !== l || Bt.test(a)
                      ? "<table>" !== c[1] || Bt.test(a)
                        ? 0
                        : r
                      : r.firstChild,
                    o = a && a.childNodes.length;
                  o--;

                )
                  ot.nodeName((h = a.childNodes[o]), "tbody") &&
                    !h.childNodes.length &&
                    a.removeChild(h);
              for (
                ot.merge(f, r.childNodes), r.textContent = "";
                r.firstChild;

              )
                r.removeChild(r.firstChild);
              r = d.lastChild;
            } else f.push(e.createTextNode(a));
        for (
          r && d.removeChild(r),
            it.appendChecked || ot.grep(g(f, "input"), v),
            p = 0;
          (a = f[p++]);

        )
          if (
            (!n || -1 === ot.inArray(a, n)) &&
            ((s = ot.contains(a.ownerDocument, a)),
            (r = g(d.appendChild(a), "script")),
            s && w(r),
            i)
          )
            for (o = 0; (a = r[o++]); ) Ut.test(a.type || "") && i.push(a);
        return (r = null), d;
      },
      cleanData: function (t, e) {
        for (
          var i,
            n,
            o,
            a,
            s = 0,
            r = ot.expando,
            l = ot.cache,
            h = it.deleteExpando,
            c = ot.event.special;
          null != (i = t[s]);
          s++
        )
          if ((e || ot.acceptData(i)) && ((o = i[r]), (a = o && l[o]))) {
            if (a.events)
              for (n in a.events)
                c[n] ? ot.event.remove(i, n) : ot.removeEvent(i, n, a.handle);
            l[o] &&
              (delete l[o],
              h
                ? delete i[r]
                : typeof i.removeAttribute !== St
                ? i.removeAttribute(r)
                : (i[r] = null),
              G.push(o));
          }
      },
    }),
    ot.fn.extend({
      text: function (t) {
        return At(
          this,
          function (t) {
            return void 0 === t
              ? ot.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || pt).createTextNode(t)
                );
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = y(this, t);
            e.appendChild(t);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = y(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      remove: function (t, e) {
        for (
          var i, n = t ? ot.filter(t, this) : this, o = 0;
          null != (i = n[o]);
          o++
        )
          e || 1 !== i.nodeType || ot.cleanData(g(i)),
            i.parentNode &&
              (e && ot.contains(i.ownerDocument, i) && w(g(i, "script")),
              i.parentNode.removeChild(i));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && ot.cleanData(g(t, !1)); t.firstChild; )
            t.removeChild(t.firstChild);
          t.options && ot.nodeName(t, "select") && (t.options.length = 0);
        }
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return ot.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return At(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t)
              return 1 === e.nodeType ? e.innerHTML.replace(Wt, "") : void 0;
            if (
              !(
                "string" != typeof t ||
                Yt.test(t) ||
                (!it.htmlSerialize && Rt.test(t)) ||
                (!it.leadingWhitespace && zt.test(t)) ||
                Xt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]
              )
            ) {
              t = t.replace(Ht, "<$1></$2>");
              try {
                for (; n > i; i++)
                  (e = this[i] || {}),
                    1 === e.nodeType &&
                      (ot.cleanData(g(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (o) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = arguments[0];
        return (
          this.domManip(arguments, function (e) {
            (t = this.parentNode),
              ot.cleanData(g(this)),
              t && t.replaceChild(e, this);
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
        );
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (t, e) {
        t = Q.apply([], t);
        var i,
          n,
          o,
          a,
          s,
          r,
          l = 0,
          h = this.length,
          c = this,
          u = h - 1,
          d = t[0],
          f = ot.isFunction(d);
        if (
          f ||
          (h > 1 && "string" == typeof d && !it.checkClone && qt.test(d))
        )
          return this.each(function (i) {
            var n = c.eq(i);
            f && (t[0] = d.call(this, i, n.html())), n.domManip(t, e);
          });
        if (
          h &&
          ((r = ot.buildFragment(t, this[0].ownerDocument, !1, this)),
          (i = r.firstChild),
          1 === r.childNodes.length && (r = i),
          i)
        ) {
          for (a = ot.map(g(r, "script"), b), o = a.length; h > l; l++)
            (n = r),
              l !== u &&
                ((n = ot.clone(n, !0, !0)), o && ot.merge(a, g(n, "script"))),
              e.call(this[l], n, l);
          if (o)
            for (
              s = a[a.length - 1].ownerDocument, ot.map(a, x), l = 0;
              o > l;
              l++
            )
              (n = a[l]),
                Ut.test(n.type || "") &&
                  !ot._data(n, "globalEval") &&
                  ot.contains(s, n) &&
                  (n.src
                    ? ot._evalUrl && ot._evalUrl(n.src)
                    : ot.globalEval(
                        (n.text || n.textContent || n.innerHTML || "").replace(
                          Gt,
                          ""
                        )
                      ));
          r = i = null;
        }
        return this;
      },
    }),
    ot.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        ot.fn[t] = function (t) {
          for (var i, n = 0, o = [], a = ot(t), s = a.length - 1; s >= n; n++)
            (i = n === s ? this : this.clone(!0)),
              ot(a[n])[e](i),
              Z.apply(o, i.get());
          return this.pushStack(o);
        };
      }
    );
  var Jt,
    Kt = {};
  !(function () {
    var t;
    it.shrinkWrapBlocks = function () {
      if (null != t) return t;
      t = !1;
      var e, i, n;
      return (
        (i = pt.getElementsByTagName("body")[0]),
        i && i.style
          ? ((e = pt.createElement("div")),
            (n = pt.createElement("div")),
            (n.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            i.appendChild(n).appendChild(e),
            typeof e.style.zoom !== St &&
              ((e.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (e.appendChild(pt.createElement("div")).style.width = "5px"),
              (t = 3 !== e.offsetWidth)),
            i.removeChild(n),
            t)
          : void 0
      );
    };
  })();
  var te,
    ee,
    ie = /^margin/,
    ne = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
    oe = /^(top|right|bottom|left)$/;
  t.getComputedStyle
    ? ((te = function (e) {
        return e.ownerDocument.defaultView.opener
          ? e.ownerDocument.defaultView.getComputedStyle(e, null)
          : t.getComputedStyle(e, null);
      }),
      (ee = function (t, e, i) {
        var n,
          o,
          a,
          s,
          r = t.style;
        return (
          (i = i || te(t)),
          (s = i ? i.getPropertyValue(e) || i[e] : void 0),
          i &&
            ("" !== s ||
              ot.contains(t.ownerDocument, t) ||
              (s = ot.style(t, e)),
            ne.test(s) &&
              ie.test(e) &&
              ((n = r.width),
              (o = r.minWidth),
              (a = r.maxWidth),
              (r.minWidth = r.maxWidth = r.width = s),
              (s = i.width),
              (r.width = n),
              (r.minWidth = o),
              (r.maxWidth = a))),
          void 0 === s ? s : s + ""
        );
      }))
    : pt.documentElement.currentStyle &&
      ((te = function (t) {
        return t.currentStyle;
      }),
      (ee = function (t, e, i) {
        var n,
          o,
          a,
          s,
          r = t.style;
        return (
          (i = i || te(t)),
          (s = i ? i[e] : void 0),
          null == s && r && r[e] && (s = r[e]),
          ne.test(s) &&
            !oe.test(e) &&
            ((n = r.left),
            (o = t.runtimeStyle),
            (a = o && o.left),
            a && (o.left = t.currentStyle.left),
            (r.left = "fontSize" === e ? "1em" : s),
            (s = r.pixelLeft + "px"),
            (r.left = n),
            a && (o.left = a)),
          void 0 === s ? s : s + "" || "auto"
        );
      })),
    !(function () {
      function e() {
        var e, i, n, o;
        (i = pt.getElementsByTagName("body")[0]),
          i &&
            i.style &&
            ((e = pt.createElement("div")),
            (n = pt.createElement("div")),
            (n.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            i.appendChild(n).appendChild(e),
            (e.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
            (a = s = !1),
            (l = !0),
            t.getComputedStyle &&
              ((a = "1%" !== (t.getComputedStyle(e, null) || {}).top),
              (s =
                "4px" ===
                (t.getComputedStyle(e, null) || { width: "4px" }).width),
              (o = e.appendChild(pt.createElement("div"))),
              (o.style.cssText = e.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (o.style.marginRight = o.style.width = "0"),
              (e.style.width = "1px"),
              (l = !parseFloat(
                (t.getComputedStyle(o, null) || {}).marginRight
              )),
              e.removeChild(o)),
            (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (o = e.getElementsByTagName("td")),
            (o[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (r = 0 === o[0].offsetHeight),
            r &&
              ((o[0].style.display = ""),
              (o[1].style.display = "none"),
              (r = 0 === o[0].offsetHeight)),
            i.removeChild(n));
      }
      var i, n, o, a, s, r, l;
      (i = pt.createElement("div")),
        (i.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (o = i.getElementsByTagName("a")[0]),
        (n = o && o.style) &&
          ((n.cssText = "float:left;opacity:.5"),
          (it.opacity = "0.5" === n.opacity),
          (it.cssFloat = !!n.cssFloat),
          (i.style.backgroundClip = "content-box"),
          (i.cloneNode(!0).style.backgroundClip = ""),
          (it.clearCloneStyle = "content-box" === i.style.backgroundClip),
          (it.boxSizing =
            "" === n.boxSizing ||
            "" === n.MozBoxSizing ||
            "" === n.WebkitBoxSizing),
          ot.extend(it, {
            reliableHiddenOffsets: function () {
              return null == r && e(), r;
            },
            boxSizingReliable: function () {
              return null == s && e(), s;
            },
            pixelPosition: function () {
              return null == a && e(), a;
            },
            reliableMarginRight: function () {
              return null == l && e(), l;
            },
          }));
    })(),
    (ot.swap = function (t, e, i, n) {
      var o,
        a,
        s = {};
      for (a in e) (s[a] = t.style[a]), (t.style[a] = e[a]);
      o = i.apply(t, n || []);
      for (a in e) t.style[a] = s[a];
      return o;
    });
  var ae = /alpha\([^)]*\)/i,
    se = /opacity\s*=\s*([^)]*)/,
    re = /^(none|table(?!-c[ea]).+)/,
    le = new RegExp("^(" + Dt + ")(.*)$", "i"),
    he = new RegExp("^([+-])=(" + Dt + ")", "i"),
    ce = { position: "absolute", visibility: "hidden", display: "block" },
    ue = { letterSpacing: "0", fontWeight: "400" },
    de = ["Webkit", "O", "Moz", "ms"];
  ot.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = ee(t, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: it.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
          a,
          s,
          r = ot.camelCase(e),
          l = t.style;
        if (
          ((e = ot.cssProps[r] || (ot.cssProps[r] = T(l, r))),
          (s = ot.cssHooks[e] || ot.cssHooks[r]),
          void 0 === i)
        )
          return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e];
        if (
          ((a = typeof i),
          "string" === a &&
            (o = he.exec(i)) &&
            ((i = (o[1] + 1) * o[2] + parseFloat(ot.css(t, e))),
            (a = "number")),
          null != i &&
            i === i &&
            ("number" !== a || ot.cssNumber[r] || (i += "px"),
            it.clearCloneStyle ||
              "" !== i ||
              0 !== e.indexOf("background") ||
              (l[e] = "inherit"),
            !(s && "set" in s && void 0 === (i = s.set(t, i, n)))))
        )
          try {
            l[e] = i;
          } catch (h) {}
      }
    },
    css: function (t, e, i, n) {
      var o,
        a,
        s,
        r = ot.camelCase(e);
      return (
        (e = ot.cssProps[r] || (ot.cssProps[r] = T(t.style, r))),
        (s = ot.cssHooks[e] || ot.cssHooks[r]),
        s && "get" in s && (a = s.get(t, !0, i)),
        void 0 === a && (a = ee(t, e, n)),
        "normal" === a && e in ue && (a = ue[e]),
        "" === i || i
          ? ((o = parseFloat(a)), i === !0 || ot.isNumeric(o) ? o || 0 : a)
          : a
      );
    },
  }),
    ot.each(["height", "width"], function (t, e) {
      ot.cssHooks[e] = {
        get: function (t, i, n) {
          return i
            ? re.test(ot.css(t, "display")) && 0 === t.offsetWidth
              ? ot.swap(t, ce, function () {
                  return P(t, e, n);
                })
              : P(t, e, n)
            : void 0;
        },
        set: function (t, i, n) {
          var o = n && te(t);
          return A(
            t,
            i,
            n
              ? I(
                  t,
                  e,
                  n,
                  it.boxSizing &&
                    "border-box" === ot.css(t, "boxSizing", !1, o),
                  o
                )
              : 0
          );
        },
      };
    }),
    it.opacity ||
      (ot.cssHooks.opacity = {
        get: function (t, e) {
          return se.test(
            (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : e
            ? "1"
            : "";
        },
        set: function (t, e) {
          var i = t.style,
            n = t.currentStyle,
            o = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            a = (n && n.filter) || i.filter || "";
          (i.zoom = 1),
            ((e >= 1 || "" === e) &&
              "" === ot.trim(a.replace(ae, "")) &&
              i.removeAttribute &&
              (i.removeAttribute("filter"), "" === e || (n && !n.filter))) ||
              (i.filter = ae.test(a) ? a.replace(ae, o) : a + " " + o);
        },
      }),
    (ot.cssHooks.marginRight = D(it.reliableMarginRight, function (t, e) {
      return e
        ? ot.swap(t, { display: "inline-block" }, ee, [t, "marginRight"])
        : void 0;
    })),
    ot.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (ot.cssHooks[t + e] = {
        expand: function (i) {
          for (
            var n = 0, o = {}, a = "string" == typeof i ? i.split(" ") : [i];
            4 > n;
            n++
          )
            o[t + Tt[n] + e] = a[n] || a[n - 2] || a[0];
          return o;
        },
      }),
        ie.test(t) || (ot.cssHooks[t + e].set = A);
    }),
    ot.fn.extend({
      css: function (t, e) {
        return At(
          this,
          function (t, e, i) {
            var n,
              o,
              a = {},
              s = 0;
            if (ot.isArray(e)) {
              for (n = te(t), o = e.length; o > s; s++)
                a[e[s]] = ot.css(t, e[s], !1, n);
              return a;
            }
            return void 0 !== i ? ot.style(t, e, i) : ot.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
      show: function () {
        return M(this, !0);
      },
      hide: function () {
        return M(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              Mt(this) ? ot(this).show() : ot(this).hide();
            });
      },
    }),
    (ot.Tween = F),
    (F.prototype = {
      constructor: F,
      init: function (t, e, i, n, o, a) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = o || "swing"),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = a || (ot.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = F.propHooks[this.prop];
        return t && t.get ? t.get(this) : F.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = F.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e = ot.easing[this.easing](
                t,
                this.options.duration * t,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : F.propHooks._default.set(this),
          this
        );
      },
    }),
    (F.prototype.init.prototype = F.prototype),
    (F.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] ||
            (t.elem.style && null != t.elem.style[t.prop])
            ? ((e = ot.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0)
            : t.elem[t.prop];
        },
        set: function (t) {
          ot.fx.step[t.prop]
            ? ot.fx.step[t.prop](t)
            : t.elem.style &&
              (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop])
            ? ot.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }),
    (F.propHooks.scrollTop = F.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      },
    }),
    (ot.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
    }),
    (ot.fx = F.prototype.init),
    (ot.fx.step = {});
  var fe,
    pe,
    me = /^(?:toggle|show|hide)$/,
    ge = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
    ve = /queueHooks$/,
    ye = [O],
    be = {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e),
            n = i.cur(),
            o = ge.exec(e),
            a = (o && o[3]) || (ot.cssNumber[t] ? "" : "px"),
            s =
              (ot.cssNumber[t] || ("px" !== a && +n)) &&
              ge.exec(ot.css(i.elem, t)),
            r = 1,
            l = 20;
          if (s && s[3] !== a) {
            (a = a || s[3]), (o = o || []), (s = +n || 1);
            do (r = r || ".5"), (s /= r), ot.style(i.elem, t, s + a);
            while (r !== (r = i.cur() / n) && 1 !== r && --l);
          }
          return (
            o &&
              ((s = i.start = +s || +n || 0),
              (i.unit = a),
              (i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
            i
          );
        },
      ],
    };
  (ot.Animation = ot.extend(R, {
    tweener: function (t, e) {
      ot.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
      for (var i, n = 0, o = t.length; o > n; n++)
        (i = t[n]), (be[i] = be[i] || []), be[i].unshift(e);
    },
    prefilter: function (t, e) {
      e ? ye.unshift(t) : ye.push(t);
    },
  })),
    (ot.speed = function (t, e, i) {
      var n =
        t && "object" == typeof t
          ? ot.extend({}, t)
          : {
              complete: i || (!i && e) || (ot.isFunction(t) && t),
              duration: t,
              easing: (i && e) || (e && !ot.isFunction(e) && e),
            };
      return (
        (n.duration = ot.fx.off
          ? 0
          : "number" == typeof n.duration
          ? n.duration
          : n.duration in ot.fx.speeds
          ? ot.fx.speeds[n.duration]
          : ot.fx.speeds._default),
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          ot.isFunction(n.old) && n.old.call(this),
            n.queue && ot.dequeue(this, n.queue);
        }),
        n
      );
    }),
    ot.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(Mt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var o = ot.isEmptyObject(t),
          a = ot.speed(e, i, n),
          s = function () {
            var e = R(this, ot.extend({}, t), a);
            (o || ot._data(this, "finish")) && e.stop(!0);
          };
        return (
          (s.finish = s),
          o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
        );
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          "string" != typeof t && ((i = e), (e = t), (t = void 0)),
          e && t !== !1 && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              o = null != t && t + "queueHooks",
              a = ot.timers,
              s = ot._data(this);
            if (o) s[o] && s[o].stop && n(s[o]);
            else for (o in s) s[o] && s[o].stop && ve.test(o) && n(s[o]);
            for (o = a.length; o--; )
              a[o].elem !== this ||
                (null != t && a[o].queue !== t) ||
                (a[o].anim.stop(i), (e = !1), a.splice(o, 1));
            (e || !i) && ot.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          t !== !1 && (t = t || "fx"),
          this.each(function () {
            var e,
              i = ot._data(this),
              n = i[t + "queue"],
              o = i[t + "queueHooks"],
              a = ot.timers,
              s = n ? n.length : 0;
            for (
              i.finish = !0,
                ot.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = a.length;
              e--;

            )
              a[e].elem === this &&
                a[e].queue === t &&
                (a[e].anim.stop(!0), a.splice(e, 1));
            for (e = 0; s > e; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    ot.each(["toggle", "show", "hide"], function (t, e) {
      var i = ot.fn[e];
      ot.fn[e] = function (t, n, o) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(N(e, !0), t, n, o);
      };
    }),
    ot.each(
      {
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        ot.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (ot.timers = []),
    (ot.fx.tick = function () {
      var t,
        e = ot.timers,
        i = 0;
      for (fe = ot.now(); i < e.length; i++)
        (t = e[i]), t() || e[i] !== t || e.splice(i--, 1);
      e.length || ot.fx.stop(), (fe = void 0);
    }),
    (ot.fx.timer = function (t) {
      ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop();
    }),
    (ot.fx.interval = 13),
    (ot.fx.start = function () {
      pe || (pe = setInterval(ot.fx.tick, ot.fx.interval));
    }),
    (ot.fx.stop = function () {
      clearInterval(pe), (pe = null);
    }),
    (ot.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ot.fn.delay = function (t, e) {
      return (
        (t = ot.fx ? ot.fx.speeds[t] || t : t),
        (e = e || "fx"),
        this.queue(e, function (e, i) {
          var n = setTimeout(e, t);
          i.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (function () {
      var t, e, i, n, o;
      (e = pt.createElement("div")),
        e.setAttribute("className", "t"),
        (e.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (n = e.getElementsByTagName("a")[0]),
        (i = pt.createElement("select")),
        (o = i.appendChild(pt.createElement("option"))),
        (t = e.getElementsByTagName("input")[0]),
        (n.style.cssText = "top:1px"),
        (it.getSetAttribute = "t" !== e.className),
        (it.style = /top/.test(n.getAttribute("style"))),
        (it.hrefNormalized = "/a" === n.getAttribute("href")),
        (it.checkOn = !!t.value),
        (it.optSelected = o.selected),
        (it.enctype = !!pt.createElement("form").enctype),
        (i.disabled = !0),
        (it.optDisabled = !o.disabled),
        (t = pt.createElement("input")),
        t.setAttribute("value", ""),
        (it.input = "" === t.getAttribute("value")),
        (t.value = "t"),
        t.setAttribute("type", "radio"),
        (it.radioValue = "t" === t.value);
    })();
  var xe = /\r/g;
  ot.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        o = this[0];
      return arguments.length
        ? ((n = ot.isFunction(t)),
          this.each(function (i) {
            var o;
            1 === this.nodeType &&
              ((o = n ? t.call(this, i, ot(this).val()) : t),
              null == o
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : ot.isArray(o) &&
                  (o = ot.map(o, function (t) {
                    return null == t ? "" : t + "";
                  })),
              (e =
                ot.valHooks[this.type] ||
                ot.valHooks[this.nodeName.toLowerCase()]),
              (e && "set" in e && void 0 !== e.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? ((e = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()]),
          e && "get" in e && void 0 !== (i = e.get(o, "value"))
            ? i
            : ((i = o.value),
              "string" == typeof i ? i.replace(xe, "") : null == i ? "" : i))
        : void 0;
    },
  }),
    ot.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = ot.find.attr(t, "value");
            return null != e ? e : ot.trim(ot.text(t));
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                i,
                n = t.options,
                o = t.selectedIndex,
                a = "select-one" === t.type || 0 > o,
                s = a ? null : [],
                r = a ? o + 1 : n.length,
                l = 0 > o ? r : a ? o : 0;
              r > l;
              l++
            )
              if (
                ((i = n[l]),
                !(
                  (!i.selected && l !== o) ||
                  (it.optDisabled
                    ? i.disabled
                    : null !== i.getAttribute("disabled")) ||
                  (i.parentNode.disabled &&
                    ot.nodeName(i.parentNode, "optgroup"))
                ))
              ) {
                if (((e = ot(i).val()), a)) return e;
                s.push(e);
              }
            return s;
          },
          set: function (t, e) {
            for (
              var i, n, o = t.options, a = ot.makeArray(e), s = o.length;
              s--;

            )
              if (((n = o[s]), ot.inArray(ot.valHooks.option.get(n), a) >= 0))
                try {
                  n.selected = i = !0;
                } catch (r) {
                  n.scrollHeight;
                }
              else n.selected = !1;
            return i || (t.selectedIndex = -1), o;
          },
        },
      },
    }),
    ot.each(["radio", "checkbox"], function () {
      (ot.valHooks[this] = {
        set: function (t, e) {
          return ot.isArray(e)
            ? (t.checked = ot.inArray(ot(t).val(), e) >= 0)
            : void 0;
        },
      }),
        it.checkOn ||
          (ot.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var we,
    ke,
    Se = ot.expr.attrHandle,
    _e = /^(?:checked|selected)$/i,
    Ce = it.getSetAttribute,
    De = it.input;
  ot.fn.extend({
    attr: function (t, e) {
      return At(this, ot.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        ot.removeAttr(this, t);
      });
    },
  }),
    ot.extend({
      attr: function (t, e, i) {
        var n,
          o,
          a = t.nodeType;
        if (t && 3 !== a && 8 !== a && 2 !== a)
          return typeof t.getAttribute === St
            ? ot.prop(t, e, i)
            : ((1 === a && ot.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (n =
                  ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? ke : we))),
              void 0 === i
                ? n && "get" in n && null !== (o = n.get(t, e))
                  ? o
                  : ((o = ot.find.attr(t, e)), null == o ? void 0 : o)
                : null !== i
                ? n && "set" in n && void 0 !== (o = n.set(t, i, e))
                  ? o
                  : (t.setAttribute(e, i + ""), i)
                : void ot.removeAttr(t, e));
      },
      removeAttr: function (t, e) {
        var i,
          n,
          o = 0,
          a = e && e.match(bt);
        if (a && 1 === t.nodeType)
          for (; (i = a[o++]); )
            (n = ot.propFix[i] || i),
              ot.expr.match.bool.test(i)
                ? (De && Ce) || !_e.test(i)
                  ? (t[n] = !1)
                  : (t[ot.camelCase("default-" + i)] = t[n] = !1)
                : ot.attr(t, i, ""),
              t.removeAttribute(Ce ? i : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!it.radioValue && "radio" === e && ot.nodeName(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
    }),
    (ke = {
      set: function (t, e, i) {
        return (
          e === !1
            ? ot.removeAttr(t, i)
            : (De && Ce) || !_e.test(i)
            ? t.setAttribute((!Ce && ot.propFix[i]) || i, i)
            : (t[ot.camelCase("default-" + i)] = t[i] = !0),
          i
        );
      },
    }),
    ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = Se[e] || ot.find.attr;
      Se[e] =
        (De && Ce) || !_e.test(e)
          ? function (t, e, n) {
              var o, a;
              return (
                n ||
                  ((a = Se[e]),
                  (Se[e] = o),
                  (o = null != i(t, e, n) ? e.toLowerCase() : null),
                  (Se[e] = a)),
                o
              );
            }
          : function (t, e, i) {
              return i
                ? void 0
                : t[ot.camelCase("default-" + e)]
                ? e.toLowerCase()
                : null;
            };
    }),
    (De && Ce) ||
      (ot.attrHooks.value = {
        set: function (t, e, i) {
          return ot.nodeName(t, "input")
            ? void (t.defaultValue = e)
            : we && we.set(t, e, i);
        },
      }),
    Ce ||
      ((we = {
        set: function (t, e, i) {
          var n = t.getAttributeNode(i);
          return (
            n || t.setAttributeNode((n = t.ownerDocument.createAttribute(i))),
            (n.value = e += ""),
            "value" === i || e === t.getAttribute(i) ? e : void 0
          );
        },
      }),
      (Se.id = Se.name = Se.coords = function (t, e, i) {
        var n;
        return i
          ? void 0
          : (n = t.getAttributeNode(e)) && "" !== n.value
          ? n.value
          : null;
      }),
      (ot.valHooks.button = {
        get: function (t, e) {
          var i = t.getAttributeNode(e);
          return i && i.specified ? i.value : void 0;
        },
        set: we.set,
      }),
      (ot.attrHooks.contenteditable = {
        set: function (t, e, i) {
          we.set(t, "" !== e && e, i);
        },
      }),
      ot.each(["width", "height"], function (t, e) {
        ot.attrHooks[e] = {
          set: function (t, i) {
            return "" === i ? (t.setAttribute(e, "auto"), i) : void 0;
          },
        };
      })),
    it.style ||
      (ot.attrHooks.style = {
        get: function (t) {
          return t.style.cssText || void 0;
        },
        set: function (t, e) {
          return (t.style.cssText = e + "");
        },
      });
  var Te = /^(?:input|select|textarea|button|object)$/i,
    Me = /^(?:a|area)$/i;
  ot.fn.extend({
    prop: function (t, e) {
      return At(this, ot.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return (
        (t = ot.propFix[t] || t),
        this.each(function () {
          try {
            (this[t] = void 0), delete this[t];
          } catch (e) {}
        })
      );
    },
  }),
    ot.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (t, e, i) {
        var n,
          o,
          a,
          s = t.nodeType;
        if (t && 3 !== s && 8 !== s && 2 !== s)
          return (
            (a = 1 !== s || !ot.isXMLDoc(t)),
            a && ((e = ot.propFix[e] || e), (o = ot.propHooks[e])),
            void 0 !== i
              ? o && "set" in o && void 0 !== (n = o.set(t, i, e))
                ? n
                : (t[e] = i)
              : o && "get" in o && null !== (n = o.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = ot.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : Te.test(t.nodeName) || (Me.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    it.hrefNormalized ||
      ot.each(["href", "src"], function (t, e) {
        ot.propHooks[e] = {
          get: function (t) {
            return t.getAttribute(e, 4);
          },
        };
      }),
    it.optSelected ||
      (ot.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return (
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
          );
        },
      }),
    ot.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ot.propFix[this.toLowerCase()] = this;
      }
    ),
    it.enctype || (ot.propFix.enctype = "encoding");
  var Ae = /[\t\r\n\f]/g;
  ot.fn.extend({
    addClass: function (t) {
      var e,
        i,
        n,
        o,
        a,
        s,
        r = 0,
        l = this.length,
        h = "string" == typeof t && t;
      if (ot.isFunction(t))
        return this.each(function (e) {
          ot(this).addClass(t.call(this, e, this.className));
        });
      if (h)
        for (e = (t || "").match(bt) || []; l > r; r++)
          if (
            ((i = this[r]),
            (n =
              1 === i.nodeType &&
              (i.className ? (" " + i.className + " ").replace(Ae, " ") : " ")))
          ) {
            for (a = 0; (o = e[a++]); )
              n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            (s = ot.trim(n)), i.className !== s && (i.className = s);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        i,
        n,
        o,
        a,
        s,
        r = 0,
        l = this.length,
        h = 0 === arguments.length || ("string" == typeof t && t);
      if (ot.isFunction(t))
        return this.each(function (e) {
          ot(this).removeClass(t.call(this, e, this.className));
        });
      if (h)
        for (e = (t || "").match(bt) || []; l > r; r++)
          if (
            ((i = this[r]),
            (n =
              1 === i.nodeType &&
              (i.className ? (" " + i.className + " ").replace(Ae, " ") : "")))
          ) {
            for (a = 0; (o = e[a++]); )
              for (; n.indexOf(" " + o + " ") >= 0; )
                n = n.replace(" " + o + " ", " ");
            (s = t ? ot.trim(n) : ""), i.className !== s && (i.className = s);
          }
      return this;
    },
    toggleClass: function (t, e) {
      var i = typeof t;
      return "boolean" == typeof e && "string" === i
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : this.each(
            ot.isFunction(t)
              ? function (i) {
                  ot(this).toggleClass(t.call(this, i, this.className, e), e);
                }
              : function () {
                  if ("string" === i)
                    for (
                      var e, n = 0, o = ot(this), a = t.match(bt) || [];
                      (e = a[n++]);

                    )
                      o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                  else
                    (i === St || "boolean" === i) &&
                      (this.className &&
                        ot._data(this, "__className__", this.className),
                      (this.className =
                        this.className || t === !1
                          ? ""
                          : ot._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (t) {
      for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
        if (
          1 === this[i].nodeType &&
          (" " + this[i].className + " ").replace(Ae, " ").indexOf(e) >= 0
        )
          return !0;
      return !1;
    },
  }),
    ot.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, e) {
        ot.fn[e] = function (t, i) {
          return arguments.length > 0
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      }
    ),
    ot.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
    });
  var Ie = ot.now(),
    Pe = /\?/,
    Fe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (ot.parseJSON = function (e) {
    if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
    var i,
      n = null,
      o = ot.trim(e + "");
    return o &&
      !ot.trim(
        o.replace(Fe, function (t, e, o, a) {
          return (
            i && e && (n = 0), 0 === n ? t : ((i = o || e), (n += !a - !o), "")
          );
        })
      )
      ? Function("return " + o)()
      : ot.error("Invalid JSON: " + e);
  }),
    (ot.parseXML = function (e) {
      var i, n;
      if (!e || "string" != typeof e) return null;
      try {
        t.DOMParser
          ? ((n = new DOMParser()), (i = n.parseFromString(e, "text/xml")))
          : ((i = new ActiveXObject("Microsoft.XMLDOM")),
            (i.async = "false"),
            i.loadXML(e));
      } catch (o) {
        i = void 0;
      }
      return (
        (i &&
          i.documentElement &&
          !i.getElementsByTagName("parsererror").length) ||
          ot.error("Invalid XML: " + e),
        i
      );
    });
  var Le,
    Ne,
    Ee = /#.*$/,
    Oe = /([?&])_=[^&]*/,
    We = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ze = /^(?:GET|HEAD)$/,
    He = /^\/\//,
    Ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Be = {},
    je = {},
    Ye = "*/".concat("*");
  try {
    Ne = location.href;
  } catch (qe) {
    (Ne = pt.createElement("a")), (Ne.href = ""), (Ne = Ne.href);
  }
  (Le = Ve.exec(Ne.toLowerCase()) || []),
    ot.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ne,
        type: "GET",
        isLocal: Re.test(Le[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ye,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ot.parseJSON,
          "text xml": ot.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? V(V(t, ot.ajaxSettings), e) : V(ot.ajaxSettings, t);
      },
      ajaxPrefilter: z(Be),
      ajaxTransport: z(je),
      ajax: function (t, e) {
        function i(t, e, i, n) {
          var o,
            c,
            v,
            y,
            x,
            k = e;
          2 !== b &&
            ((b = 2),
            r && clearTimeout(r),
            (h = void 0),
            (s = n || ""),
            (w.readyState = t > 0 ? 4 : 0),
            (o = (t >= 200 && 300 > t) || 304 === t),
            i && (y = B(u, w, i)),
            (y = j(u, y, w, o)),
            o
              ? (u.ifModified &&
                  ((x = w.getResponseHeader("Last-Modified")),
                  x && (ot.lastModified[a] = x),
                  (x = w.getResponseHeader("etag")),
                  x && (ot.etag[a] = x)),
                204 === t || "HEAD" === u.type
                  ? (k = "nocontent")
                  : 304 === t
                  ? (k = "notmodified")
                  : ((k = y.state), (c = y.data), (v = y.error), (o = !v)))
              : ((v = k), (t || !k) && ((k = "error"), 0 > t && (t = 0))),
            (w.status = t),
            (w.statusText = (e || k) + ""),
            o ? p.resolveWith(d, [c, k, w]) : p.rejectWith(d, [w, k, v]),
            w.statusCode(g),
            (g = void 0),
            l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [w, u, o ? c : v]),
            m.fireWith(d, [w, k]),
            l &&
              (f.trigger("ajaxComplete", [w, u]),
              --ot.active || ot.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var n,
          o,
          a,
          s,
          r,
          l,
          h,
          c,
          u = ot.ajaxSetup({}, e),
          d = u.context || u,
          f = u.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
          p = ot.Deferred(),
          m = ot.Callbacks("once memory"),
          g = u.statusCode || {},
          v = {},
          y = {},
          b = 0,
          x = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === b) {
                if (!c)
                  for (c = {}; (e = We.exec(s)); ) c[e[1].toLowerCase()] = e[2];
                e = c[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? s : null;
            },
            setRequestHeader: function (t, e) {
              var i = t.toLowerCase();
              return b || ((t = y[i] = y[i] || t), (v[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return b || (u.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > b) for (e in t) g[e] = [g[e], t[e]];
                else w.always(t[w.status]);
              return this;
            },
            abort: function (t) {
              var e = t || x;
              return h && h.abort(e), i(0, e), this;
            },
          };
        if (
          ((p.promise(w).complete = m.add),
          (w.success = w.done),
          (w.error = w.fail),
          (u.url = ((t || u.url || Ne) + "")
            .replace(Ee, "")
            .replace(He, Le[1] + "//")),
          (u.type = e.method || e.type || u.method || u.type),
          (u.dataTypes = ot
            .trim(u.dataType || "*")
            .toLowerCase()
            .match(bt) || [""]),
          null == u.crossDomain &&
            ((n = Ve.exec(u.url.toLowerCase())),
            (u.crossDomain = !(
              !n ||
              (n[1] === Le[1] &&
                n[2] === Le[2] &&
                (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                  (Le[3] || ("http:" === Le[1] ? "80" : "443")))
            ))),
          u.data &&
            u.processData &&
            "string" != typeof u.data &&
            (u.data = ot.param(u.data, u.traditional)),
          H(Be, u, e, w),
          2 === b)
        )
          return w;
        (l = ot.event && u.global),
          l && 0 === ot.active++ && ot.event.trigger("ajaxStart"),
          (u.type = u.type.toUpperCase()),
          (u.hasContent = !ze.test(u.type)),
          (a = u.url),
          u.hasContent ||
            (u.data &&
              ((a = u.url += (Pe.test(a) ? "&" : "?") + u.data), delete u.data),
            u.cache === !1 &&
              (u.url = Oe.test(a)
                ? a.replace(Oe, "$1_=" + Ie++)
                : a + (Pe.test(a) ? "&" : "?") + "_=" + Ie++)),
          u.ifModified &&
            (ot.lastModified[a] &&
              w.setRequestHeader("If-Modified-Since", ot.lastModified[a]),
            ot.etag[a] && w.setRequestHeader("If-None-Match", ot.etag[a])),
          ((u.data && u.hasContent && u.contentType !== !1) || e.contentType) &&
            w.setRequestHeader("Content-Type", u.contentType),
          w.setRequestHeader(
            "Accept",
            u.dataTypes[0] && u.accepts[u.dataTypes[0]]
              ? u.accepts[u.dataTypes[0]] +
                  ("*" !== u.dataTypes[0] ? ", " + Ye + "; q=0.01" : "")
              : u.accepts["*"]
          );
        for (o in u.headers) w.setRequestHeader(o, u.headers[o]);
        if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === b))
          return w.abort();
        x = "abort";
        for (o in { success: 1, error: 1, complete: 1 }) w[o](u[o]);
        if ((h = H(je, u, e, w))) {
          (w.readyState = 1),
            l && f.trigger("ajaxSend", [w, u]),
            u.async &&
              u.timeout > 0 &&
              (r = setTimeout(function () {
                w.abort("timeout");
              }, u.timeout));
          try {
            (b = 1), h.send(v, i);
          } catch (k) {
            if (!(2 > b)) throw k;
            i(-1, k);
          }
        } else i(-1, "No Transport");
        return w;
      },
      getJSON: function (t, e, i) {
        return ot.get(t, e, i, "json");
      },
      getScript: function (t, e) {
        return ot.get(t, void 0, e, "script");
      },
    }),
    ot.each(["get", "post"], function (t, e) {
      ot[e] = function (t, i, n, o) {
        return (
          ot.isFunction(i) && ((o = o || n), (n = i), (i = void 0)),
          ot.ajax({ url: t, type: e, dataType: o, data: i, success: n })
        );
      };
    }),
    (ot._evalUrl = function (t) {
      return ot.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    ot.fn.extend({
      wrapAll: function (t) {
        if (ot.isFunction(t))
          return this.each(function (e) {
            ot(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (
                  var t = this;
                  t.firstChild && 1 === t.firstChild.nodeType;

                )
                  t = t.firstChild;
                return t;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (t) {
        return this.each(
          ot.isFunction(t)
            ? function (e) {
                ot(this).wrapInner(t.call(this, e));
              }
            : function () {
                var e = ot(this),
                  i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
              }
        );
      },
      wrap: function (t) {
        var e = ot.isFunction(t);
        return this.each(function (i) {
          ot(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (ot.expr.filters.hidden = function (t) {
      return (
        (t.offsetWidth <= 0 && t.offsetHeight <= 0) ||
        (!it.reliableHiddenOffsets() &&
          "none" === ((t.style && t.style.display) || ot.css(t, "display")))
      );
    }),
    (ot.expr.filters.visible = function (t) {
      return !ot.expr.filters.hidden(t);
    });
  var Ue = /%20/g,
    $e = /\[\]$/,
    Ge = /\r?\n/g,
    Xe = /^(?:submit|button|image|reset|file)$/i,
    Qe = /^(?:input|select|textarea|keygen)/i;
  (ot.param = function (t, e) {
    var i,
      n = [],
      o = function (t, e) {
        (e = ot.isFunction(e) ? e() : null == e ? "" : e),
          (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
      };
    if (
      (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional),
      ot.isArray(t) || (t.jquery && !ot.isPlainObject(t)))
    )
      ot.each(t, function () {
        o(this.name, this.value);
      });
    else for (i in t) Y(i, t[i], e, o);
    return n.join("&").replace(Ue, "+");
  }),
    ot.fn.extend({
      serialize: function () {
        return ot.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = ot.prop(this, "elements");
          return t ? ot.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !ot(this).is(":disabled") &&
              Qe.test(this.nodeName) &&
              !Xe.test(t) &&
              (this.checked || !It.test(t))
            );
          })
          .map(function (t, e) {
            var i = ot(this).val();
            return null == i
              ? null
              : ot.isArray(i)
              ? ot.map(i, function (t) {
                  return { name: e.name, value: t.replace(Ge, "\r\n") };
                })
              : { name: e.name, value: i.replace(Ge, "\r\n") };
          })
          .get();
      },
    }),
    (ot.ajaxSettings.xhr =
      void 0 !== t.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                q()) ||
              U()
            );
          }
        : q);
  var Ze = 0,
    Je = {},
    Ke = ot.ajaxSettings.xhr();
  t.attachEvent &&
    t.attachEvent("onunload", function () {
      for (var t in Je) Je[t](void 0, !0);
    }),
    (it.cors = !!Ke && "withCredentials" in Ke),
    (Ke = it.ajax = !!Ke),
    Ke &&
      ot.ajaxTransport(function (t) {
        if (!t.crossDomain || it.cors) {
          var e;
          return {
            send: function (i, n) {
              var o,
                a = t.xhr(),
                s = ++Ze;
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (o in t.xhrFields) a[o] = t.xhrFields[o];
              t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              for (o in i) void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
              a.send((t.hasContent && t.data) || null),
                (e = function (i, o) {
                  var r, l, h;
                  if (e && (o || 4 === a.readyState))
                    if (
                      (delete Je[s],
                      (e = void 0),
                      (a.onreadystatechange = ot.noop),
                      o)
                    )
                      4 !== a.readyState && a.abort();
                    else {
                      (h = {}),
                        (r = a.status),
                        "string" == typeof a.responseText &&
                          (h.text = a.responseText);
                      try {
                        l = a.statusText;
                      } catch (c) {
                        l = "";
                      }
                      r || !t.isLocal || t.crossDomain
                        ? 1223 === r && (r = 204)
                        : (r = h.text ? 200 : 404);
                    }
                  h && n(r, l, h, a.getAllResponseHeaders());
                }),
                t.async
                  ? 4 === a.readyState
                    ? setTimeout(e)
                    : (a.onreadystatechange = Je[s] = e)
                  : e();
            },
            abort: function () {
              e && e(void 0, !0);
            },
          };
        }
      }),
    ot.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (t) {
          return ot.globalEval(t), t;
        },
      },
    }),
    ot.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1),
        t.crossDomain && ((t.type = "GET"), (t.global = !1));
    }),
    ot.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var e,
          i = pt.head || ot("head")[0] || pt.documentElement;
        return {
          send: function (n, o) {
            (e = pt.createElement("script")),
              (e.async = !0),
              t.scriptCharset && (e.charset = t.scriptCharset),
              (e.src = t.url),
              (e.onload = e.onreadystatechange = function (t, i) {
                (i || !e.readyState || /loaded|complete/.test(e.readyState)) &&
                  ((e.onload = e.onreadystatechange = null),
                  e.parentNode && e.parentNode.removeChild(e),
                  (e = null),
                  i || o(200, "success"));
              }),
              i.insertBefore(e, i.firstChild);
          },
          abort: function () {
            e && e.onload(void 0, !0);
          },
        };
      }
    });
  var ti = [],
    ei = /(=)\?(?=&|$)|\?\?/;
  ot.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = ti.pop() || ot.expando + "_" + Ie++;
      return (this[t] = !0), t;
    },
  }),
    ot.ajaxPrefilter("json jsonp", function (e, i, n) {
      var o,
        a,
        s,
        r =
          e.jsonp !== !1 &&
          (ei.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              ei.test(e.data) &&
              "data");
      return r || "jsonp" === e.dataTypes[0]
        ? ((o = e.jsonpCallback = ot.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          r
            ? (e[r] = e[r].replace(ei, "$1" + o))
            : e.jsonp !== !1 &&
              (e.url += (Pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
          (e.converters["script json"] = function () {
            return s || ot.error(o + " was not called"), s[0];
          }),
          (e.dataTypes[0] = "json"),
          (a = t[o]),
          (t[o] = function () {
            s = arguments;
          }),
          n.always(function () {
            (t[o] = a),
              e[o] && ((e.jsonpCallback = i.jsonpCallback), ti.push(o)),
              s && ot.isFunction(a) && a(s[0]),
              (s = a = void 0);
          }),
          "script")
        : void 0;
    }),
    (ot.parseHTML = function (t, e, i) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && ((i = e), (e = !1)), (e = e || pt);
      var n = ut.exec(t),
        o = !i && [];
      return n
        ? [e.createElement(n[1])]
        : ((n = ot.buildFragment([t], e, o)),
          o && o.length && ot(o).remove(),
          ot.merge([], n.childNodes));
    });
  var ii = ot.fn.load;
  (ot.fn.load = function (t, e, i) {
    if ("string" != typeof t && ii) return ii.apply(this, arguments);
    var n,
      o,
      a,
      s = this,
      r = t.indexOf(" ");
    return (
      r >= 0 && ((n = ot.trim(t.slice(r, t.length))), (t = t.slice(0, r))),
      ot.isFunction(e)
        ? ((i = e), (e = void 0))
        : e && "object" == typeof e && (a = "POST"),
      s.length > 0 &&
        ot
          .ajax({ url: t, type: a, dataType: "html", data: e })
          .done(function (t) {
            (o = arguments),
              s.html(n ? ot("<div>").append(ot.parseHTML(t)).find(n) : t);
          })
          .complete(
            i &&
              function (t, e) {
                s.each(i, o || [t.responseText, e, t]);
              }
          ),
      this
    );
  }),
    ot.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        ot.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (ot.expr.filters.animated = function (t) {
      return ot.grep(ot.timers, function (e) {
        return t === e.elem;
      }).length;
    });
  var ni = t.document.documentElement;
  (ot.offset = {
    setOffset: function (t, e, i) {
      var n,
        o,
        a,
        s,
        r,
        l,
        h,
        c = ot.css(t, "position"),
        u = ot(t),
        d = {};
      "static" === c && (t.style.position = "relative"),
        (r = u.offset()),
        (a = ot.css(t, "top")),
        (l = ot.css(t, "left")),
        (h =
          ("absolute" === c || "fixed" === c) &&
          ot.inArray("auto", [a, l]) > -1),
        h
          ? ((n = u.position()), (s = n.top), (o = n.left))
          : ((s = parseFloat(a) || 0), (o = parseFloat(l) || 0)),
        ot.isFunction(e) && (e = e.call(t, i, r)),
        null != e.top && (d.top = e.top - r.top + s),
        null != e.left && (d.left = e.left - r.left + o),
        "using" in e ? e.using.call(t, d) : u.css(d);
    },
  }),
    ot.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ot.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n = { top: 0, left: 0 },
          o = this[0],
          a = o && o.ownerDocument;
        return a
          ? ((e = a.documentElement),
            ot.contains(e, o)
              ? (typeof o.getBoundingClientRect !== St &&
                  (n = o.getBoundingClientRect()),
                (i = $(a)),
                {
                  top:
                    n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                  left:
                    n.left +
                    (i.pageXOffset || e.scrollLeft) -
                    (e.clientLeft || 0),
                })
              : n)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i = { top: 0, left: 0 },
            n = this[0];
          return (
            "fixed" === ot.css(n, "position")
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                ot.nodeName(t[0], "html") || (i = t.offset()),
                (i.top += ot.css(t[0], "borderTopWidth", !0)),
                (i.left += ot.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - i.top - ot.css(n, "marginTop", !0),
              left: e.left - i.left - ot.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || ni;
            t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position");

          )
            t = t.offsetParent;
          return t || ni;
        });
      },
    }),
    ot.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      t,
      e
    ) {
      var i = /Y/.test(e);
      ot.fn[t] = function (n) {
        return At(
          this,
          function (t, n, o) {
            var a = $(t);
            return void 0 === o
              ? a
                ? e in a
                  ? a[e]
                  : a.document.documentElement[n]
                : t[n]
              : void (a
                  ? a.scrollTo(
                      i ? ot(a).scrollLeft() : o,
                      i ? o : ot(a).scrollTop()
                    )
                  : (t[n] = o));
          },
          t,
          n,
          arguments.length,
          null
        );
      };
    }),
    ot.each(["top", "left"], function (t, e) {
      ot.cssHooks[e] = D(it.pixelPosition, function (t, i) {
        return i
          ? ((i = ee(t, e)), ne.test(i) ? ot(t).position()[e] + "px" : i)
          : void 0;
      });
    }),
    ot.each({ Height: "height", Width: "width" }, function (t, e) {
      ot.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (
        i,
        n
      ) {
        ot.fn[n] = function (n, o) {
          var a = arguments.length && (i || "boolean" != typeof n),
            s = i || (n === !0 || o === !0 ? "margin" : "border");
          return At(
            this,
            function (e, i, n) {
              var o;
              return ot.isWindow(e)
                ? e.document.documentElement["client" + t]
                : 9 === e.nodeType
                ? ((o = e.documentElement),
                  Math.max(
                    e.body["scroll" + t],
                    o["scroll" + t],
                    e.body["offset" + t],
                    o["offset" + t],
                    o["client" + t]
                  ))
                : void 0 === n
                ? ot.css(e, i, s)
                : ot.style(e, i, n, s);
            },
            e,
            a ? n : void 0,
            a,
            null
          );
        };
      });
    }),
    (ot.fn.size = function () {
      return this.length;
    }),
    (ot.fn.andSelf = ot.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ot;
      });
  var oi = t.jQuery,
    ai = t.$;
  return (
    (ot.noConflict = function (e) {
      return (
        t.$ === ot && (t.$ = ai), e && t.jQuery === ot && (t.jQuery = oi), ot
      );
    }),
    typeof e === St && (t.jQuery = t.$ = ot),
    ot
  );
}),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.moment = e());
  })(this, function () {
    "use strict";
    function t() {
      return Ui.apply(null, arguments);
    }
    function e(t) {
      Ui = t;
    }
    function i(t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    }
    function n(t) {
      return (
        t instanceof Date ||
        "[object Date]" === Object.prototype.toString.call(t)
      );
    }
    function o(t, e) {
      var i,
        n = [];
      for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
      return n;
    }
    function a(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function s(t, e) {
      for (var i in e) a(e, i) && (t[i] = e[i]);
      return (
        a(e, "toString") && (t.toString = e.toString),
        a(e, "valueOf") && (t.valueOf = e.valueOf),
        t
      );
    }
    function r(t, e, i, n) {
      return At(t, e, i, n, !0).utc();
    }
    function l() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
      };
    }
    function h(t) {
      return null == t._pf && (t._pf = l()), t._pf;
    }
    function c(t) {
      if (null == t._isValid) {
        var e = h(t);
        (t._isValid = !(
          isNaN(t._d.getTime()) ||
          !(e.overflow < 0) ||
          e.empty ||
          e.invalidMonth ||
          e.invalidWeekday ||
          e.nullInput ||
          e.invalidFormat ||
          e.userInvalidated
        )),
          t._strict &&
            (t._isValid =
              t._isValid &&
              0 === e.charsLeftOver &&
              0 === e.unusedTokens.length &&
              void 0 === e.bigHour);
      }
      return t._isValid;
    }
    function u(t) {
      var e = r(NaN);
      return null != t ? s(h(e), t) : (h(e).userInvalidated = !0), e;
    }
    function d(t) {
      return void 0 === t;
    }
    function f(t, e) {
      var i, n, o;
      if (
        (d(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
        d(e._i) || (t._i = e._i),
        d(e._f) || (t._f = e._f),
        d(e._l) || (t._l = e._l),
        d(e._strict) || (t._strict = e._strict),
        d(e._tzm) || (t._tzm = e._tzm),
        d(e._isUTC) || (t._isUTC = e._isUTC),
        d(e._offset) || (t._offset = e._offset),
        d(e._pf) || (t._pf = h(e)),
        d(e._locale) || (t._locale = e._locale),
        Gi.length > 0)
      )
        for (i in Gi) (n = Gi[i]), (o = e[n]), d(o) || (t[n] = o);
      return t;
    }
    function p(e) {
      f(this, e),
        (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
        Xi === !1 && ((Xi = !0), t.updateOffset(this), (Xi = !1));
    }
    function m(t) {
      return t instanceof p || (null != t && null != t._isAMomentObject);
    }
    function g(t) {
      return t < 0 ? Math.ceil(t) : Math.floor(t);
    }
    function v(t) {
      var e = +t,
        i = 0;
      return 0 !== e && isFinite(e) && (i = g(e)), i;
    }
    function y(t, e, i) {
      var n,
        o = Math.min(t.length, e.length),
        a = Math.abs(t.length - e.length),
        s = 0;
      for (n = 0; n < o; n++)
        ((i && t[n] !== e[n]) || (!i && v(t[n]) !== v(e[n]))) && s++;
      return s + a;
    }
    function b() {}
    function x(t) {
      return t ? t.toLowerCase().replace("_", "-") : t;
    }
    function w(t) {
      for (var e, i, n, o, a = 0; a < t.length; ) {
        for (
          o = x(t[a]).split("-"),
            e = o.length,
            i = x(t[a + 1]),
            i = i ? i.split("-") : null;
          e > 0;

        ) {
          if ((n = k(o.slice(0, e).join("-")))) return n;
          if (i && i.length >= e && y(o, i, !0) >= e - 1) break;
          e--;
        }
        a++;
      }
      return null;
    }
    function k(t) {
      var e = null;
      if (!Qi[t] && "undefined" != typeof module && module && module.exports)
        try {
          (e = $i._abbr), require("./locale/" + t), S(e);
        } catch (i) {}
      return Qi[t];
    }
    function S(t, e) {
      var i;
      return t && ((i = d(e) ? C(t) : _(t, e)), i && ($i = i)), $i._abbr;
    }
    function _(t, e) {
      return null !== e
        ? ((e.abbr = t), (Qi[t] = Qi[t] || new b()), Qi[t].set(e), S(t), Qi[t])
        : (delete Qi[t], null);
    }
    function C(t) {
      var e;
      if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
        return $i;
      if (!i(t)) {
        if ((e = k(t))) return e;
        t = [t];
      }
      return w(t);
    }
    function D(t, e) {
      var i = t.toLowerCase();
      Zi[i] = Zi[i + "s"] = Zi[e] = t;
    }
    function T(t) {
      return "string" == typeof t ? Zi[t] || Zi[t.toLowerCase()] : void 0;
    }
    function M(t) {
      var e,
        i,
        n = {};
      for (i in t) a(t, i) && ((e = T(i)), e && (n[e] = t[i]));
      return n;
    }
    function A(t) {
      return (
        t instanceof Function ||
        "[object Function]" === Object.prototype.toString.call(t)
      );
    }
    function I(e, i) {
      return function (n) {
        return null != n
          ? (F(this, e, n), t.updateOffset(this, i), this)
          : P(this, e);
      };
    }
    function P(t, e) {
      return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
    }
    function F(t, e, i) {
      t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i);
    }
    function L(t, e) {
      var i;
      if ("object" == typeof t) for (i in t) this.set(i, t[i]);
      else if (((t = T(t)), A(this[t]))) return this[t](e);
      return this;
    }
    function N(t, e, i) {
      var n = "" + Math.abs(t),
        o = e - n.length,
        a = t >= 0;
      return (
        (a ? (i ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, o)).toString().substr(1) +
        n
      );
    }
    function E(t, e, i, n) {
      var o = n;
      "string" == typeof n &&
        (o = function () {
          return this[n]();
        }),
        t && (en[t] = o),
        e &&
          (en[e[0]] = function () {
            return N(o.apply(this, arguments), e[1], e[2]);
          }),
        i &&
          (en[i] = function () {
            return this.localeData().ordinal(o.apply(this, arguments), t);
          });
    }
    function O(t) {
      return t.match(/\[[\s\S]/)
        ? t.replace(/^\[|\]$/g, "")
        : t.replace(/\\/g, "");
    }
    function W(t) {
      var e,
        i,
        n = t.match(Ji);
      for (e = 0, i = n.length; e < i; e++)
        en[n[e]] ? (n[e] = en[n[e]]) : (n[e] = O(n[e]));
      return function (o) {
        var a = "";
        for (e = 0; e < i; e++)
          a += n[e] instanceof Function ? n[e].call(o, t) : n[e];
        return a;
      };
    }
    function R(t, e) {
      return t.isValid()
        ? ((e = z(e, t.localeData())), (tn[e] = tn[e] || W(e)), tn[e](t))
        : t.localeData().invalidDate();
    }
    function z(t, e) {
      function i(t) {
        return e.longDateFormat(t) || t;
      }
      var n = 5;
      for (Ki.lastIndex = 0; n >= 0 && Ki.test(t); )
        (t = t.replace(Ki, i)), (Ki.lastIndex = 0), (n -= 1);
      return t;
    }
    function H(t, e, i) {
      xn[t] = A(e)
        ? e
        : function (t, n) {
            return t && i ? i : e;
          };
    }
    function V(t, e) {
      return a(xn, t) ? xn[t](e._strict, e._locale) : new RegExp(B(t));
    }
    function B(t) {
      return j(
        t
          .replace("\\", "")
          .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
            t,
            e,
            i,
            n,
            o
          ) {
            return e || i || n || o;
          })
      );
    }
    function j(t) {
      return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function Y(t, e) {
      var i,
        n = e;
      for (
        "string" == typeof t && (t = [t]),
          "number" == typeof e &&
            (n = function (t, i) {
              i[e] = v(t);
            }),
          i = 0;
        i < t.length;
        i++
      )
        wn[t[i]] = n;
    }
    function q(t, e) {
      Y(t, function (t, i, n, o) {
        (n._w = n._w || {}), e(t, n._w, n, o);
      });
    }
    function U(t, e, i) {
      null != e && a(wn, t) && wn[t](e, i._a, i, t);
    }
    function $(t, e) {
      return new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
    }
    function G(t, e) {
      return i(this._months)
        ? this._months[t.month()]
        : this._months[Pn.test(e) ? "format" : "standalone"][t.month()];
    }
    function X(t, e) {
      return i(this._monthsShort)
        ? this._monthsShort[t.month()]
        : this._monthsShort[Pn.test(e) ? "format" : "standalone"][t.month()];
    }
    function Q(t, e, i) {
      var n, o, a;
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          n = 0;
        n < 12;
        n++
      ) {
        if (
          ((o = r([2e3, n])),
          i &&
            !this._longMonthsParse[n] &&
            ((this._longMonthsParse[n] = new RegExp(
              "^" + this.months(o, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[n] = new RegExp(
              "^" + this.monthsShort(o, "").replace(".", "") + "$",
              "i"
            ))),
          i ||
            this._monthsParse[n] ||
            ((a = "^" + this.months(o, "") + "|^" + this.monthsShort(o, "")),
            (this._monthsParse[n] = new RegExp(a.replace(".", ""), "i"))),
          i && "MMMM" === e && this._longMonthsParse[n].test(t))
        )
          return n;
        if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
        if (!i && this._monthsParse[n].test(t)) return n;
      }
    }
    function Z(t, e) {
      var i;
      return t.isValid()
        ? "string" == typeof e &&
          ((e = t.localeData().monthsParse(e)), "number" != typeof e)
          ? t
          : ((i = Math.min(t.date(), $(t.year(), e))),
            t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i),
            t)
        : t;
    }
    function J(e) {
      return null != e
        ? (Z(this, e), t.updateOffset(this, !0), this)
        : P(this, "Month");
    }
    function K() {
      return $(this.year(), this.month());
    }
    function tt(t) {
      return this._monthsParseExact
        ? (a(this, "_monthsRegex") || it.call(this),
          t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : this._monthsShortStrictRegex && t
        ? this._monthsShortStrictRegex
        : this._monthsShortRegex;
    }
    function et(t) {
      return this._monthsParseExact
        ? (a(this, "_monthsRegex") || it.call(this),
          t ? this._monthsStrictRegex : this._monthsRegex)
        : this._monthsStrictRegex && t
        ? this._monthsStrictRegex
        : this._monthsRegex;
    }
    function it() {
      function t(t, e) {
        return e.length - t.length;
      }
      var e,
        i,
        n = [],
        o = [],
        a = [];
      for (e = 0; e < 12; e++)
        (i = r([2e3, e])),
          n.push(this.monthsShort(i, "")),
          o.push(this.months(i, "")),
          a.push(this.months(i, "")),
          a.push(this.monthsShort(i, ""));
      for (n.sort(t), o.sort(t), a.sort(t), e = 0; e < 12; e++)
        (n[e] = j(n[e])), (o[e] = j(o[e])), (a[e] = j(a[e]));
      (this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")$", "i")),
        (this._monthsShortStrictRegex = new RegExp(
          "^(" + n.join("|") + ")$",
          "i"
        ));
    }
    function nt(t) {
      var e,
        i = t._a;
      return (
        i &&
          h(t).overflow === -2 &&
          ((e =
            i[Sn] < 0 || i[Sn] > 11
              ? Sn
              : i[_n] < 1 || i[_n] > $(i[kn], i[Sn])
              ? _n
              : i[Cn] < 0 ||
                i[Cn] > 24 ||
                (24 === i[Cn] && (0 !== i[Dn] || 0 !== i[Tn] || 0 !== i[Mn]))
              ? Cn
              : i[Dn] < 0 || i[Dn] > 59
              ? Dn
              : i[Tn] < 0 || i[Tn] > 59
              ? Tn
              : i[Mn] < 0 || i[Mn] > 999
              ? Mn
              : -1),
          h(t)._overflowDayOfYear && (e < kn || e > _n) && (e = _n),
          h(t)._overflowWeeks && e === -1 && (e = An),
          h(t)._overflowWeekday && e === -1 && (e = In),
          (h(t).overflow = e)),
        t
      );
    }
    function ot(e) {
      t.suppressDeprecationWarnings === !1 &&
        "undefined" != typeof console &&
        console.warn &&
        console.warn("Deprecation warning: " + e);
    }
    function at(t, e) {
      var i = !0;
      return s(function () {
        return (
          i &&
            (ot(
              t +
                "\nArguments: " +
                Array.prototype.slice.call(arguments).join(", ") +
                "\n" +
                new Error().stack
            ),
            (i = !1)),
          e.apply(this, arguments)
        );
      }, e);
    }
    function st(t, e) {
      On[t] || (ot(e), (On[t] = !0));
    }
    function rt(t) {
      var e,
        i,
        n,
        o,
        a,
        s,
        r = t._i,
        l = Wn.exec(r) || Rn.exec(r);
      if (l) {
        for (h(t).iso = !0, e = 0, i = Hn.length; e < i; e++)
          if (Hn[e][1].exec(l[1])) {
            (o = Hn[e][0]), (n = Hn[e][2] !== !1);
            break;
          }
        if (null == o) return void (t._isValid = !1);
        if (l[3]) {
          for (e = 0, i = Vn.length; e < i; e++)
            if (Vn[e][1].exec(l[3])) {
              a = (l[2] || " ") + Vn[e][0];
              break;
            }
          if (null == a) return void (t._isValid = !1);
        }
        if (!n && null != a) return void (t._isValid = !1);
        if (l[4]) {
          if (!zn.exec(l[4])) return void (t._isValid = !1);
          s = "Z";
        }
        (t._f = o + (a || "") + (s || "")), kt(t);
      } else t._isValid = !1;
    }
    function lt(e) {
      var i = Bn.exec(e._i);
      return null !== i
        ? void (e._d = new Date(+i[1]))
        : (rt(e),
          void (
            e._isValid === !1 &&
            (delete e._isValid, t.createFromInputFallback(e))
          ));
    }
    function ht(t, e, i, n, o, a, s) {
      var r = new Date(t, e, i, n, o, a, s);
      return (
        t < 100 && t >= 0 && isFinite(r.getFullYear()) && r.setFullYear(t), r
      );
    }
    function ct(t) {
      var e = new Date(Date.UTC.apply(null, arguments));
      return (
        t < 100 &&
          t >= 0 &&
          isFinite(e.getUTCFullYear()) &&
          e.setUTCFullYear(t),
        e
      );
    }
    function ut(t) {
      return dt(t) ? 366 : 365;
    }
    function dt(t) {
      return (t % 4 === 0 && t % 100 !== 0) || t % 400 === 0;
    }
    function ft() {
      return dt(this.year());
    }
    function pt(t, e, i) {
      var n = 7 + e - i,
        o = (7 + ct(t, 0, n).getUTCDay() - e) % 7;
      return -o + n - 1;
    }
    function mt(t, e, i, n, o) {
      var a,
        s,
        r = (7 + i - n) % 7,
        l = pt(t, n, o),
        h = 1 + 7 * (e - 1) + r + l;
      return (
        h <= 0
          ? ((a = t - 1), (s = ut(a) + h))
          : h > ut(t)
          ? ((a = t + 1), (s = h - ut(t)))
          : ((a = t), (s = h)),
        { year: a, dayOfYear: s }
      );
    }
    function gt(t, e, i) {
      var n,
        o,
        a = pt(t.year(), e, i),
        s = Math.floor((t.dayOfYear() - a - 1) / 7) + 1;
      return (
        s < 1
          ? ((o = t.year() - 1), (n = s + vt(o, e, i)))
          : s > vt(t.year(), e, i)
          ? ((n = s - vt(t.year(), e, i)), (o = t.year() + 1))
          : ((o = t.year()), (n = s)),
        { week: n, year: o }
      );
    }
    function vt(t, e, i) {
      var n = pt(t, e, i),
        o = pt(t + 1, e, i);
      return (ut(t) - n + o) / 7;
    }
    function yt(t, e, i) {
      return null != t ? t : null != e ? e : i;
    }
    function bt(e) {
      var i = new Date(t.now());
      return e._useUTC
        ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
        : [i.getFullYear(), i.getMonth(), i.getDate()];
    }
    function xt(t) {
      var e,
        i,
        n,
        o,
        a = [];
      if (!t._d) {
        for (
          n = bt(t),
            t._w && null == t._a[_n] && null == t._a[Sn] && wt(t),
            t._dayOfYear &&
              ((o = yt(t._a[kn], n[kn])),
              t._dayOfYear > ut(o) && (h(t)._overflowDayOfYear = !0),
              (i = ct(o, 0, t._dayOfYear)),
              (t._a[Sn] = i.getUTCMonth()),
              (t._a[_n] = i.getUTCDate())),
            e = 0;
          e < 3 && null == t._a[e];
          ++e
        )
          t._a[e] = a[e] = n[e];
        for (; e < 7; e++)
          t._a[e] = a[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
        24 === t._a[Cn] &&
          0 === t._a[Dn] &&
          0 === t._a[Tn] &&
          0 === t._a[Mn] &&
          ((t._nextDay = !0), (t._a[Cn] = 0)),
          (t._d = (t._useUTC ? ct : ht).apply(null, a)),
          null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
          t._nextDay && (t._a[Cn] = 24);
      }
    }
    function wt(t) {
      var e, i, n, o, a, s, r, l;
      (e = t._w),
        null != e.GG || null != e.W || null != e.E
          ? ((a = 1),
            (s = 4),
            (i = yt(e.GG, t._a[kn], gt(It(), 1, 4).year)),
            (n = yt(e.W, 1)),
            (o = yt(e.E, 1)),
            (o < 1 || o > 7) && (l = !0))
          : ((a = t._locale._week.dow),
            (s = t._locale._week.doy),
            (i = yt(e.gg, t._a[kn], gt(It(), a, s).year)),
            (n = yt(e.w, 1)),
            null != e.d
              ? ((o = e.d), (o < 0 || o > 6) && (l = !0))
              : null != e.e
              ? ((o = e.e + a), (e.e < 0 || e.e > 6) && (l = !0))
              : (o = a)),
        n < 1 || n > vt(i, a, s)
          ? (h(t)._overflowWeeks = !0)
          : null != l
          ? (h(t)._overflowWeekday = !0)
          : ((r = mt(i, n, o, a, s)),
            (t._a[kn] = r.year),
            (t._dayOfYear = r.dayOfYear));
    }
    function kt(e) {
      if (e._f === t.ISO_8601) return void rt(e);
      (e._a = []), (h(e).empty = !0);
      var i,
        n,
        o,
        a,
        s,
        r = "" + e._i,
        l = r.length,
        c = 0;
      for (o = z(e._f, e._locale).match(Ji) || [], i = 0; i < o.length; i++)
        (a = o[i]),
          (n = (r.match(V(a, e)) || [])[0]),
          n &&
            ((s = r.substr(0, r.indexOf(n))),
            s.length > 0 && h(e).unusedInput.push(s),
            (r = r.slice(r.indexOf(n) + n.length)),
            (c += n.length)),
          en[a]
            ? (n ? (h(e).empty = !1) : h(e).unusedTokens.push(a), U(a, n, e))
            : e._strict && !n && h(e).unusedTokens.push(a);
      (h(e).charsLeftOver = l - c),
        r.length > 0 && h(e).unusedInput.push(r),
        h(e).bigHour === !0 &&
          e._a[Cn] <= 12 &&
          e._a[Cn] > 0 &&
          (h(e).bigHour = void 0),
        (e._a[Cn] = St(e._locale, e._a[Cn], e._meridiem)),
        xt(e),
        nt(e);
    }
    function St(t, e, i) {
      var n;
      return null == i
        ? e
        : null != t.meridiemHour
        ? t.meridiemHour(e, i)
        : null != t.isPM
        ? ((n = t.isPM(i)),
          n && e < 12 && (e += 12),
          n || 12 !== e || (e = 0),
          e)
        : e;
    }
    function _t(t) {
      var e, i, n, o, a;
      if (0 === t._f.length)
        return (h(t).invalidFormat = !0), void (t._d = new Date(NaN));
      for (o = 0; o < t._f.length; o++)
        (a = 0),
          (e = f({}, t)),
          null != t._useUTC && (e._useUTC = t._useUTC),
          (e._f = t._f[o]),
          kt(e),
          c(e) &&
            ((a += h(e).charsLeftOver),
            (a += 10 * h(e).unusedTokens.length),
            (h(e).score = a),
            (null == n || a < n) && ((n = a), (i = e)));
      s(t, i || e);
    }
    function Ct(t) {
      if (!t._d) {
        var e = M(t._i);
        (t._a = o(
          [
            e.year,
            e.month,
            e.day || e.date,
            e.hour,
            e.minute,
            e.second,
            e.millisecond,
          ],
          function (t) {
            return t && parseInt(t, 10);
          }
        )),
          xt(t);
      }
    }
    function Dt(t) {
      var e = new p(nt(Tt(t)));
      return e._nextDay && (e.add(1, "d"), (e._nextDay = void 0)), e;
    }
    function Tt(t) {
      var e = t._i,
        o = t._f;
      return (
        (t._locale = t._locale || C(t._l)),
        null === e || (void 0 === o && "" === e)
          ? u({ nullInput: !0 })
          : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
            m(e)
              ? new p(nt(e))
              : (i(o) ? _t(t) : o ? kt(t) : n(e) ? (t._d = e) : Mt(t),
                c(t) || (t._d = null),
                t))
      );
    }
    function Mt(e) {
      var a = e._i;
      void 0 === a
        ? (e._d = new Date(t.now()))
        : n(a)
        ? (e._d = new Date(+a))
        : "string" == typeof a
        ? lt(e)
        : i(a)
        ? ((e._a = o(a.slice(0), function (t) {
            return parseInt(t, 10);
          })),
          xt(e))
        : "object" == typeof a
        ? Ct(e)
        : "number" == typeof a
        ? (e._d = new Date(a))
        : t.createFromInputFallback(e);
    }
    function At(t, e, i, n, o) {
      var a = {};
      return (
        "boolean" == typeof i && ((n = i), (i = void 0)),
        (a._isAMomentObject = !0),
        (a._useUTC = a._isUTC = o),
        (a._l = i),
        (a._i = t),
        (a._f = e),
        (a._strict = n),
        Dt(a)
      );
    }
    function It(t, e, i, n) {
      return At(t, e, i, n, !1);
    }
    function Pt(t, e) {
      var n, o;
      if ((1 === e.length && i(e[0]) && (e = e[0]), !e.length)) return It();
      for (n = e[0], o = 1; o < e.length; ++o)
        (e[o].isValid() && !e[o][t](n)) || (n = e[o]);
      return n;
    }
    function Ft() {
      var t = [].slice.call(arguments, 0);
      return Pt("isBefore", t);
    }
    function Lt() {
      var t = [].slice.call(arguments, 0);
      return Pt("isAfter", t);
    }
    function Nt(t) {
      var e = M(t),
        i = e.year || 0,
        n = e.quarter || 0,
        o = e.month || 0,
        a = e.week || 0,
        s = e.day || 0,
        r = e.hour || 0,
        l = e.minute || 0,
        h = e.second || 0,
        c = e.millisecond || 0;
      (this._milliseconds = +c + 1e3 * h + 6e4 * l + 36e5 * r),
        (this._days = +s + 7 * a),
        (this._months = +o + 3 * n + 12 * i),
        (this._data = {}),
        (this._locale = C()),
        this._bubble();
    }
    function Et(t) {
      return t instanceof Nt;
    }
    function Ot(t, e) {
      E(t, 0, 0, function () {
        var t = this.utcOffset(),
          i = "+";
        return (
          t < 0 && ((t = -t), (i = "-")),
          i + N(~~(t / 60), 2) + e + N(~~t % 60, 2)
        );
      });
    }
    function Wt(t, e) {
      var i = (e || "").match(t) || [],
        n = i[i.length - 1] || [],
        o = (n + "").match($n) || ["-", 0, 0],
        a = +(60 * o[1]) + v(o[2]);
      return "+" === o[0] ? a : -a;
    }
    function Rt(e, i) {
      var o, a;
      return i._isUTC
        ? ((o = i.clone()),
          (a = (m(e) || n(e) ? +e : +It(e)) - +o),
          o._d.setTime(+o._d + a),
          t.updateOffset(o, !1),
          o)
        : It(e).local();
    }
    function zt(t) {
      return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
    }
    function Ht(e, i) {
      var n,
        o = this._offset || 0;
      return this.isValid()
        ? null != e
          ? ("string" == typeof e
              ? (e = Wt(vn, e))
              : Math.abs(e) < 16 && (e = 60 * e),
            !this._isUTC && i && (n = zt(this)),
            (this._offset = e),
            (this._isUTC = !0),
            null != n && this.add(n, "m"),
            o !== e &&
              (!i || this._changeInProgress
                ? ie(this, Zt(e - o, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  t.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this)
          : this._isUTC
          ? o
          : zt(this)
        : null != e
        ? this
        : NaN;
    }
    function Vt(t, e) {
      return null != t
        ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
        : -this.utcOffset();
    }
    function Bt(t) {
      return this.utcOffset(0, t);
    }
    function jt(t) {
      return (
        this._isUTC &&
          (this.utcOffset(0, t),
          (this._isUTC = !1),
          t && this.subtract(zt(this), "m")),
        this
      );
    }
    function Yt() {
      return (
        this._tzm
          ? this.utcOffset(this._tzm)
          : "string" == typeof this._i && this.utcOffset(Wt(gn, this._i)),
        this
      );
    }
    function qt(t) {
      return (
        !!this.isValid() &&
        ((t = t ? It(t).utcOffset() : 0), (this.utcOffset() - t) % 60 === 0)
      );
    }
    function Ut() {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }
    function $t() {
      if (!d(this._isDSTShifted)) return this._isDSTShifted;
      var t = {};
      if ((f(t, this), (t = Tt(t)), t._a)) {
        var e = t._isUTC ? r(t._a) : It(t._a);
        this._isDSTShifted = this.isValid() && y(t._a, e.toArray()) > 0;
      } else this._isDSTShifted = !1;
      return this._isDSTShifted;
    }
    function Gt() {
      return !!this.isValid() && !this._isUTC;
    }
    function Xt() {
      return !!this.isValid() && this._isUTC;
    }
    function Qt() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    function Zt(t, e) {
      var i,
        n,
        o,
        s = t,
        r = null;
      return (
        Et(t)
          ? (s = { ms: t._milliseconds, d: t._days, M: t._months })
          : "number" == typeof t
          ? ((s = {}), e ? (s[e] = t) : (s.milliseconds = t))
          : (r = Gn.exec(t))
          ? ((i = "-" === r[1] ? -1 : 1),
            (s = {
              y: 0,
              d: v(r[_n]) * i,
              h: v(r[Cn]) * i,
              m: v(r[Dn]) * i,
              s: v(r[Tn]) * i,
              ms: v(r[Mn]) * i,
            }))
          : (r = Xn.exec(t))
          ? ((i = "-" === r[1] ? -1 : 1),
            (s = {
              y: Jt(r[2], i),
              M: Jt(r[3], i),
              d: Jt(r[4], i),
              h: Jt(r[5], i),
              m: Jt(r[6], i),
              s: Jt(r[7], i),
              w: Jt(r[8], i),
            }))
          : null == s
          ? (s = {})
          : "object" == typeof s &&
            ("from" in s || "to" in s) &&
            ((o = te(It(s.from), It(s.to))),
            (s = {}),
            (s.ms = o.milliseconds),
            (s.M = o.months)),
        (n = new Nt(s)),
        Et(t) && a(t, "_locale") && (n._locale = t._locale),
        n
      );
    }
    function Jt(t, e) {
      var i = t && parseFloat(t.replace(",", "."));
      return (isNaN(i) ? 0 : i) * e;
    }
    function Kt(t, e) {
      var i = { milliseconds: 0, months: 0 };
      return (
        (i.months = e.month() - t.month() + 12 * (e.year() - t.year())),
        t.clone().add(i.months, "M").isAfter(e) && --i.months,
        (i.milliseconds = +e - +t.clone().add(i.months, "M")),
        i
      );
    }
    function te(t, e) {
      var i;
      return t.isValid() && e.isValid()
        ? ((e = Rt(e, t)),
          t.isBefore(e)
            ? (i = Kt(t, e))
            : ((i = Kt(e, t)),
              (i.milliseconds = -i.milliseconds),
              (i.months = -i.months)),
          i)
        : { milliseconds: 0, months: 0 };
    }
    function ee(t, e) {
      return function (i, n) {
        var o, a;
        return (
          null === n ||
            isNaN(+n) ||
            (st(
              e,
              "moment()." +
                e +
                "(period, number) is deprecated. Please use moment()." +
                e +
                "(number, period)."
            ),
            (a = i),
            (i = n),
            (n = a)),
          (i = "string" == typeof i ? +i : i),
          (o = Zt(i, n)),
          ie(this, o, t),
          this
        );
      };
    }
    function ie(e, i, n, o) {
      var a = i._milliseconds,
        s = i._days,
        r = i._months;
      e.isValid() &&
        ((o = null == o || o),
        a && e._d.setTime(+e._d + a * n),
        s && F(e, "Date", P(e, "Date") + s * n),
        r && Z(e, P(e, "Month") + r * n),
        o && t.updateOffset(e, s || r));
    }
    function ne(t, e) {
      var i = t || It(),
        n = Rt(i, this).startOf("day"),
        o = this.diff(n, "days", !0),
        a =
          o < -6
            ? "sameElse"
            : o < -1
            ? "lastWeek"
            : o < 0
            ? "lastDay"
            : o < 1
            ? "sameDay"
            : o < 2
            ? "nextDay"
            : o < 7
            ? "nextWeek"
            : "sameElse",
        s = e && (A(e[a]) ? e[a]() : e[a]);
      return this.format(s || this.localeData().calendar(a, this, It(i)));
    }
    function oe() {
      return new p(this);
    }
    function ae(t, e) {
      var i = m(t) ? t : It(t);
      return (
        !(!this.isValid() || !i.isValid()) &&
        ((e = T(d(e) ? "millisecond" : e)),
        "millisecond" === e ? +this > +i : +i < +this.clone().startOf(e))
      );
    }
    function se(t, e) {
      var i = m(t) ? t : It(t);
      return (
        !(!this.isValid() || !i.isValid()) &&
        ((e = T(d(e) ? "millisecond" : e)),
        "millisecond" === e ? +this < +i : +this.clone().endOf(e) < +i)
      );
    }
    function re(t, e, i) {
      return this.isAfter(t, i) && this.isBefore(e, i);
    }
    function le(t, e) {
      var i,
        n = m(t) ? t : It(t);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ((e = T(e || "millisecond")),
        "millisecond" === e
          ? +this === +n
          : ((i = +n),
            +this.clone().startOf(e) <= i && i <= +this.clone().endOf(e)))
      );
    }
    function he(t, e) {
      return this.isSame(t, e) || this.isAfter(t, e);
    }
    function ce(t, e) {
      return this.isSame(t, e) || this.isBefore(t, e);
    }
    function ue(t, e, i) {
      var n, o, a, s;
      return this.isValid()
        ? ((n = Rt(t, this)),
          n.isValid()
            ? ((o = 6e4 * (n.utcOffset() - this.utcOffset())),
              (e = T(e)),
              "year" === e || "month" === e || "quarter" === e
                ? ((s = de(this, n)),
                  "quarter" === e ? (s /= 3) : "year" === e && (s /= 12))
                : ((a = this - n),
                  (s =
                    "second" === e
                      ? a / 1e3
                      : "minute" === e
                      ? a / 6e4
                      : "hour" === e
                      ? a / 36e5
                      : "day" === e
                      ? (a - o) / 864e5
                      : "week" === e
                      ? (a - o) / 6048e5
                      : a)),
              i ? s : g(s))
            : NaN)
        : NaN;
    }
    function de(t, e) {
      var i,
        n,
        o = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        a = t.clone().add(o, "months");
      return (
        e - a < 0
          ? ((i = t.clone().add(o - 1, "months")), (n = (e - a) / (a - i)))
          : ((i = t.clone().add(o + 1, "months")), (n = (e - a) / (i - a))),
        -(o + n)
      );
    }
    function fe() {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function pe() {
      var t = this.clone().utc();
      return 0 < t.year() && t.year() <= 9999
        ? A(Date.prototype.toISOString)
          ? this.toDate().toISOString()
          : R(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        : R(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }
    function me(e) {
      var i = R(this, e || t.defaultFormat);
      return this.localeData().postformat(i);
    }
    function ge(t, e) {
      return this.isValid() && ((m(t) && t.isValid()) || It(t).isValid())
        ? Zt({ to: this, from: t }).locale(this.locale()).humanize(!e)
        : this.localeData().invalidDate();
    }
    function ve(t) {
      return this.from(It(), t);
    }
    function ye(t, e) {
      return this.isValid() && ((m(t) && t.isValid()) || It(t).isValid())
        ? Zt({ from: this, to: t }).locale(this.locale()).humanize(!e)
        : this.localeData().invalidDate();
    }
    function be(t) {
      return this.to(It(), t);
    }
    function xe(t) {
      var e;
      return void 0 === t
        ? this._locale._abbr
        : ((e = C(t)), null != e && (this._locale = e), this);
    }
    function we() {
      return this._locale;
    }
    function ke(t) {
      switch ((t = T(t))) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0);
      }
      return (
        "week" === t && this.weekday(0),
        "isoWeek" === t && this.isoWeekday(1),
        "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
        this
      );
    }
    function Se(t) {
      return (
        (t = T(t)),
        void 0 === t || "millisecond" === t
          ? this
          : this.startOf(t)
              .add(1, "isoWeek" === t ? "week" : t)
              .subtract(1, "ms")
      );
    }
    function _e() {
      return +this._d - 6e4 * (this._offset || 0);
    }
    function Ce() {
      return Math.floor(+this / 1e3);
    }
    function De() {
      return this._offset ? new Date(+this) : this._d;
    }
    function Te() {
      var t = this;
      return [
        t.year(),
        t.month(),
        t.date(),
        t.hour(),
        t.minute(),
        t.second(),
        t.millisecond(),
      ];
    }
    function Me() {
      var t = this;
      return {
        years: t.year(),
        months: t.month(),
        date: t.date(),
        hours: t.hours(),
        minutes: t.minutes(),
        seconds: t.seconds(),
        milliseconds: t.milliseconds(),
      };
    }
    function Ae() {
      return this.isValid() ? this.toISOString() : "null";
    }
    function Ie() {
      return c(this);
    }
    function Pe() {
      return s({}, h(this));
    }
    function Fe() {
      return h(this).overflow;
    }
    function Le() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }
    function Ne(t, e) {
      E(0, [t, t.length], 0, e);
    }
    function Ee(t) {
      return ze.call(
        this,
        t,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function Oe(t) {
      return ze.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function We() {
      return vt(this.year(), 1, 4);
    }
    function Re() {
      var t = this.localeData()._week;
      return vt(this.year(), t.dow, t.doy);
    }
    function ze(t, e, i, n, o) {
      var a;
      return null == t
        ? gt(this, n, o).year
        : ((a = vt(t, n, o)), e > a && (e = a), He.call(this, t, e, i, n, o));
    }
    function He(t, e, i, n, o) {
      var a = mt(t, e, i, n, o),
        s = ct(a.year, 0, a.dayOfYear);
      return (
        this.year(s.getUTCFullYear()),
        this.month(s.getUTCMonth()),
        this.date(s.getUTCDate()),
        this
      );
    }
    function Ve(t) {
      return null == t
        ? Math.ceil((this.month() + 1) / 3)
        : this.month(3 * (t - 1) + (this.month() % 3));
    }
    function Be(t) {
      return gt(t, this._week.dow, this._week.doy).week;
    }
    function je() {
      return this._week.dow;
    }
    function Ye() {
      return this._week.doy;
    }
    function qe(t) {
      var e = this.localeData().week(this);
      return null == t ? e : this.add(7 * (t - e), "d");
    }
    function Ue(t) {
      var e = gt(this, 1, 4).week;
      return null == t ? e : this.add(7 * (t - e), "d");
    }
    function $e(t, e) {
      return "string" != typeof t
        ? t
        : isNaN(t)
        ? ((t = e.weekdaysParse(t)), "number" == typeof t ? t : null)
        : parseInt(t, 10);
    }
    function Ge(t, e) {
      return i(this._weekdays)
        ? this._weekdays[t.day()]
        : this._weekdays[
            this._weekdays.isFormat.test(e) ? "format" : "standalone"
          ][t.day()];
    }
    function Xe(t) {
      return this._weekdaysShort[t.day()];
    }
    function Qe(t) {
      return this._weekdaysMin[t.day()];
    }
    function Ze(t, e, i) {
      var n, o, a;
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          n = 0;
        n < 7;
        n++
      ) {
        if (
          ((o = It([2e3, 1]).day(n)),
          i &&
            !this._fullWeekdaysParse[n] &&
            ((this._fullWeekdaysParse[n] = new RegExp(
              "^" + this.weekdays(o, "").replace(".", ".?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[n] = new RegExp(
              "^" + this.weekdaysShort(o, "").replace(".", ".?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[n] = new RegExp(
              "^" + this.weekdaysMin(o, "").replace(".", ".?") + "$",
              "i"
            ))),
          this._weekdaysParse[n] ||
            ((a =
              "^" +
              this.weekdays(o, "") +
              "|^" +
              this.weekdaysShort(o, "") +
              "|^" +
              this.weekdaysMin(o, "")),
            (this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i"))),
          i && "dddd" === e && this._fullWeekdaysParse[n].test(t))
        )
          return n;
        if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
        if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
        if (!i && this._weekdaysParse[n].test(t)) return n;
      }
    }
    function Je(t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != t
        ? ((t = $e(t, this.localeData())), this.add(t - e, "d"))
        : e;
    }
    function Ke(t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == t ? e : this.add(t - e, "d");
    }
    function ti(t) {
      return this.isValid()
        ? null == t
          ? this.day() || 7
          : this.day(this.day() % 7 ? t : t - 7)
        : null != t
        ? this
        : NaN;
    }
    function ei(t) {
      var e =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return null == t ? e : this.add(t - e, "d");
    }
    function ii() {
      return this.hours() % 12 || 12;
    }
    function ni(t, e) {
      E(t, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), e);
      });
    }
    function oi(t, e) {
      return e._meridiemParse;
    }
    function ai(t) {
      return "p" === (t + "").toLowerCase().charAt(0);
    }
    function si(t, e, i) {
      return t > 11 ? (i ? "pm" : "PM") : i ? "am" : "AM";
    }
    function ri(t, e) {
      e[Mn] = v(1e3 * ("0." + t));
    }
    function li() {
      return this._isUTC ? "UTC" : "";
    }
    function hi() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function ci(t) {
      return It(1e3 * t);
    }
    function ui() {
      return It.apply(null, arguments).parseZone();
    }
    function di(t, e, i) {
      var n = this._calendar[t];
      return A(n) ? n.call(e, i) : n;
    }
    function fi(t) {
      var e = this._longDateFormat[t],
        i = this._longDateFormat[t.toUpperCase()];
      return e || !i
        ? e
        : ((this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (
            t
          ) {
            return t.slice(1);
          })),
          this._longDateFormat[t]);
    }
    function pi() {
      return this._invalidDate;
    }
    function mi(t) {
      return this._ordinal.replace("%d", t);
    }
    function gi(t) {
      return t;
    }
    function vi(t, e, i, n) {
      var o = this._relativeTime[i];
      return A(o) ? o(t, e, i, n) : o.replace(/%d/i, t);
    }
    function yi(t, e) {
      var i = this._relativeTime[t > 0 ? "future" : "past"];
      return A(i) ? i(e) : i.replace(/%s/i, e);
    }
    function bi(t) {
      var e, i;
      for (i in t) (e = t[i]), A(e) ? (this[i] = e) : (this["_" + i] = e);
      this._ordinalParseLenient = new RegExp(
        this._ordinalParse.source + "|" + /\d{1,2}/.source
      );
    }
    function xi(t, e, i, n) {
      var o = C(),
        a = r().set(n, e);
      return o[i](a, t);
    }
    function wi(t, e, i, n, o) {
      if (
        ("number" == typeof t && ((e = t), (t = void 0)),
        (t = t || ""),
        null != e)
      )
        return xi(t, e, i, o);
      var a,
        s = [];
      for (a = 0; a < n; a++) s[a] = xi(t, a, i, o);
      return s;
    }
    function ki(t, e) {
      return wi(t, e, "months", 12, "month");
    }
    function Si(t, e) {
      return wi(t, e, "monthsShort", 12, "month");
    }
    function _i(t, e) {
      return wi(t, e, "weekdays", 7, "day");
    }
    function Ci(t, e) {
      return wi(t, e, "weekdaysShort", 7, "day");
    }
    function Di(t, e) {
      return wi(t, e, "weekdaysMin", 7, "day");
    }
    function Ti() {
      var t = this._data;
      return (
        (this._milliseconds = xo(this._milliseconds)),
        (this._days = xo(this._days)),
        (this._months = xo(this._months)),
        (t.milliseconds = xo(t.milliseconds)),
        (t.seconds = xo(t.seconds)),
        (t.minutes = xo(t.minutes)),
        (t.hours = xo(t.hours)),
        (t.months = xo(t.months)),
        (t.years = xo(t.years)),
        this
      );
    }
    function Mi(t, e, i, n) {
      var o = Zt(e, i);
      return (
        (t._milliseconds += n * o._milliseconds),
        (t._days += n * o._days),
        (t._months += n * o._months),
        t._bubble()
      );
    }
    function Ai(t, e) {
      return Mi(this, t, e, 1);
    }
    function Ii(t, e) {
      return Mi(this, t, e, -1);
    }
    function Pi(t) {
      return t < 0 ? Math.floor(t) : Math.ceil(t);
    }
    function Fi() {
      var t,
        e,
        i,
        n,
        o,
        a = this._milliseconds,
        s = this._days,
        r = this._months,
        l = this._data;
      return (
        (a >= 0 && s >= 0 && r >= 0) ||
          (a <= 0 && s <= 0 && r <= 0) ||
          ((a += 864e5 * Pi(Ni(r) + s)), (s = 0), (r = 0)),
        (l.milliseconds = a % 1e3),
        (t = g(a / 1e3)),
        (l.seconds = t % 60),
        (e = g(t / 60)),
        (l.minutes = e % 60),
        (i = g(e / 60)),
        (l.hours = i % 24),
        (s += g(i / 24)),
        (o = g(Li(s))),
        (r += o),
        (s -= Pi(Ni(o))),
        (n = g(r / 12)),
        (r %= 12),
        (l.days = s),
        (l.months = r),
        (l.years = n),
        this
      );
    }
    function Li(t) {
      return (4800 * t) / 146097;
    }
    function Ni(t) {
      return (146097 * t) / 4800;
    }
    function Ei(t) {
      var e,
        i,
        n = this._milliseconds;
      if (((t = T(t)), "month" === t || "year" === t))
        return (
          (e = this._days + n / 864e5),
          (i = this._months + Li(e)),
          "month" === t ? i : i / 12
        );
      switch (((e = this._days + Math.round(Ni(this._months))), t)) {
        case "week":
          return e / 7 + n / 6048e5;
        case "day":
          return e + n / 864e5;
        case "hour":
          return 24 * e + n / 36e5;
        case "minute":
          return 1440 * e + n / 6e4;
        case "second":
          return 86400 * e + n / 1e3;
        case "millisecond":
          return Math.floor(864e5 * e) + n;
        default:
          throw new Error("Unknown unit " + t);
      }
    }
    function Oi() {
      return (
        this._milliseconds +
        864e5 * this._days +
        (this._months % 12) * 2592e6 +
        31536e6 * v(this._months / 12)
      );
    }
    function Wi(t) {
      return function () {
        return this.as(t);
      };
    }
    function Ri(t) {
      return (t = T(t)), this[t + "s"]();
    }
    function zi(t) {
      return function () {
        return this._data[t];
      };
    }
    function Hi() {
      return g(this.days() / 7);
    }
    function Vi(t, e, i, n, o) {
      return o.relativeTime(e || 1, !!i, t, n);
    }
    function Bi(t, e, i) {
      var n = Zt(t).abs(),
        o = Oo(n.as("s")),
        a = Oo(n.as("m")),
        s = Oo(n.as("h")),
        r = Oo(n.as("d")),
        l = Oo(n.as("M")),
        h = Oo(n.as("y")),
        c = (o < Wo.s && ["s", o]) ||
          (a <= 1 && ["m"]) ||
          (a < Wo.m && ["mm", a]) ||
          (s <= 1 && ["h"]) ||
          (s < Wo.h && ["hh", s]) ||
          (r <= 1 && ["d"]) ||
          (r < Wo.d && ["dd", r]) ||
          (l <= 1 && ["M"]) ||
          (l < Wo.M && ["MM", l]) ||
          (h <= 1 && ["y"]) || ["yy", h];
      return (c[2] = e), (c[3] = +t > 0), (c[4] = i), Vi.apply(null, c);
    }
    function ji(t, e) {
      return void 0 !== Wo[t] && (void 0 === e ? Wo[t] : ((Wo[t] = e), !0));
    }
    function Yi(t) {
      var e = this.localeData(),
        i = Bi(this, !t, e);
      return t && (i = e.pastFuture(+this, i)), e.postformat(i);
    }
    function qi() {
      var t,
        e,
        i,
        n = Ro(this._milliseconds) / 1e3,
        o = Ro(this._days),
        a = Ro(this._months);
      (t = g(n / 60)),
        (e = g(t / 60)),
        (n %= 60),
        (t %= 60),
        (i = g(a / 12)),
        (a %= 12);
      var s = i,
        r = a,
        l = o,
        h = e,
        c = t,
        u = n,
        d = this.asSeconds();
      return d
        ? (d < 0 ? "-" : "") +
            "P" +
            (s ? s + "Y" : "") +
            (r ? r + "M" : "") +
            (l ? l + "D" : "") +
            (h || c || u ? "T" : "") +
            (h ? h + "H" : "") +
            (c ? c + "M" : "") +
            (u ? u + "S" : "")
        : "P0D";
    }
    var Ui,
      $i,
      Gi = (t.momentProperties = []),
      Xi = !1,
      Qi = {},
      Zi = {},
      Ji = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      Ki = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      tn = {},
      en = {},
      nn = /\d/,
      on = /\d\d/,
      an = /\d{3}/,
      sn = /\d{4}/,
      rn = /[+-]?\d{6}/,
      ln = /\d\d?/,
      hn = /\d\d\d\d?/,
      cn = /\d\d\d\d\d\d?/,
      un = /\d{1,3}/,
      dn = /\d{1,4}/,
      fn = /[+-]?\d{1,6}/,
      pn = /\d+/,
      mn = /[+-]?\d+/,
      gn = /Z|[+-]\d\d:?\d\d/gi,
      vn = /Z|[+-]\d\d(?::?\d\d)?/gi,
      yn = /[+-]?\d+(\.\d{1,3})?/,
      bn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      xn = {},
      wn = {},
      kn = 0,
      Sn = 1,
      _n = 2,
      Cn = 3,
      Dn = 4,
      Tn = 5,
      Mn = 6,
      An = 7,
      In = 8;
    E("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }),
      E("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t);
      }),
      E("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t);
      }),
      D("month", "M"),
      H("M", ln),
      H("MM", ln, on),
      H("MMM", function (t, e) {
        return e.monthsShortRegex(t);
      }),
      H("MMMM", function (t, e) {
        return e.monthsRegex(t);
      }),
      Y(["M", "MM"], function (t, e) {
        e[Sn] = v(t) - 1;
      }),
      Y(["MMM", "MMMM"], function (t, e, i, n) {
        var o = i._locale.monthsParse(t, n, i._strict);
        null != o ? (e[Sn] = o) : (h(i).invalidMonth = t);
      });
    var Pn = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
      Fn = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
      Ln = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      Nn = bn,
      En = bn,
      On = {};
    t.suppressDeprecationWarnings = !1;
    var Wn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
      Rn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
      zn = /Z|[+-]\d\d(?::?\d\d)?/,
      Hn = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
      ],
      Vn = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
      ],
      Bn = /^\/?Date\((\-?\d+)/i;
    (t.createFromInputFallback = at(
      "moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
      function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
      }
    )),
      E("Y", 0, 0, function () {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t;
      }),
      E(0, ["YY", 2], 0, function () {
        return this.year() % 100;
      }),
      E(0, ["YYYY", 4], 0, "year"),
      E(0, ["YYYYY", 5], 0, "year"),
      E(0, ["YYYYYY", 6, !0], 0, "year"),
      D("year", "y"),
      H("Y", mn),
      H("YY", ln, on),
      H("YYYY", dn, sn),
      H("YYYYY", fn, rn),
      H("YYYYYY", fn, rn),
      Y(["YYYYY", "YYYYYY"], kn),
      Y("YYYY", function (e, i) {
        i[kn] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e);
      }),
      Y("YY", function (e, i) {
        i[kn] = t.parseTwoDigitYear(e);
      }),
      Y("Y", function (t, e) {
        e[kn] = parseInt(t, 10);
      }),
      (t.parseTwoDigitYear = function (t) {
        return v(t) + (v(t) > 68 ? 1900 : 2e3);
      });
    var jn = I("FullYear", !1);
    t.ISO_8601 = function () {};
    var Yn = at(
        "moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
        function () {
          var t = It.apply(null, arguments);
          return this.isValid() && t.isValid() ? (t < this ? this : t) : u();
        }
      ),
      qn = at(
        "moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
        function () {
          var t = It.apply(null, arguments);
          return this.isValid() && t.isValid() ? (t > this ? this : t) : u();
        }
      ),
      Un = function () {
        return Date.now ? Date.now() : +new Date();
      };
    Ot("Z", ":"),
      Ot("ZZ", ""),
      H("Z", vn),
      H("ZZ", vn),
      Y(["Z", "ZZ"], function (t, e, i) {
        (i._useUTC = !0), (i._tzm = Wt(vn, t));
      });
    var $n = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {};
    var Gn = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
      Xn = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Zt.fn = Nt.prototype;
    var Qn = ee(1, "add"),
      Zn = ee(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Jn = at(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function (t) {
        return void 0 === t ? this.localeData() : this.locale(t);
      }
    );
    E(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100;
    }),
      E(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
      }),
      Ne("gggg", "weekYear"),
      Ne("ggggg", "weekYear"),
      Ne("GGGG", "isoWeekYear"),
      Ne("GGGGG", "isoWeekYear"),
      D("weekYear", "gg"),
      D("isoWeekYear", "GG"),
      H("G", mn),
      H("g", mn),
      H("GG", ln, on),
      H("gg", ln, on),
      H("GGGG", dn, sn),
      H("gggg", dn, sn),
      H("GGGGG", fn, rn),
      H("ggggg", fn, rn),
      q(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
        e[n.substr(0, 2)] = v(t);
      }),
      q(["gg", "GG"], function (e, i, n, o) {
        i[o] = t.parseTwoDigitYear(e);
      }),
      E("Q", 0, "Qo", "quarter"),
      D("quarter", "Q"),
      H("Q", nn),
      Y("Q", function (t, e) {
        e[Sn] = 3 * (v(t) - 1);
      }),
      E("w", ["ww", 2], "wo", "week"),
      E("W", ["WW", 2], "Wo", "isoWeek"),
      D("week", "w"),
      D("isoWeek", "W"),
      H("w", ln),
      H("ww", ln, on),
      H("W", ln),
      H("WW", ln, on),
      q(["w", "ww", "W", "WW"], function (t, e, i, n) {
        e[n.substr(0, 1)] = v(t);
      });
    var Kn = { dow: 0, doy: 6 };
    E("D", ["DD", 2], "Do", "date"),
      D("date", "D"),
      H("D", ln),
      H("DD", ln, on),
      H("Do", function (t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient;
      }),
      Y(["D", "DD"], _n),
      Y("Do", function (t, e) {
        e[_n] = v(t.match(ln)[0], 10);
      });
    var to = I("Date", !0);
    E("d", 0, "do", "day"),
      E("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t);
      }),
      E("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t);
      }),
      E("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t);
      }),
      E("e", 0, 0, "weekday"),
      E("E", 0, 0, "isoWeekday"),
      D("day", "d"),
      D("weekday", "e"),
      D("isoWeekday", "E"),
      H("d", ln),
      H("e", ln),
      H("E", ln),
      H("dd", bn),
      H("ddd", bn),
      H("dddd", bn),
      q(["dd", "ddd", "dddd"], function (t, e, i, n) {
        var o = i._locale.weekdaysParse(t, n, i._strict);
        null != o ? (e.d = o) : (h(i).invalidWeekday = t);
      }),
      q(["d", "e", "E"], function (t, e, i, n) {
        e[n] = v(t);
      });
    var eo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      io = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      no = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    E("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
      D("dayOfYear", "DDD"),
      H("DDD", un),
      H("DDDD", an),
      Y(["DDD", "DDDD"], function (t, e, i) {
        i._dayOfYear = v(t);
      }),
      E("H", ["HH", 2], 0, "hour"),
      E("h", ["hh", 2], 0, ii),
      E("hmm", 0, 0, function () {
        return "" + ii.apply(this) + N(this.minutes(), 2);
      }),
      E("hmmss", 0, 0, function () {
        return (
          "" + ii.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
        );
      }),
      E("Hmm", 0, 0, function () {
        return "" + this.hours() + N(this.minutes(), 2);
      }),
      E("Hmmss", 0, 0, function () {
        return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2);
      }),
      ni("a", !0),
      ni("A", !1),
      D("hour", "h"),
      H("a", oi),
      H("A", oi),
      H("H", ln),
      H("h", ln),
      H("HH", ln, on),
      H("hh", ln, on),
      H("hmm", hn),
      H("hmmss", cn),
      H("Hmm", hn),
      H("Hmmss", cn),
      Y(["H", "HH"], Cn),
      Y(["a", "A"], function (t, e, i) {
        (i._isPm = i._locale.isPM(t)), (i._meridiem = t);
      }),
      Y(["h", "hh"], function (t, e, i) {
        (e[Cn] = v(t)), (h(i).bigHour = !0);
      }),
      Y("hmm", function (t, e, i) {
        var n = t.length - 2;
        (e[Cn] = v(t.substr(0, n))),
          (e[Dn] = v(t.substr(n))),
          (h(i).bigHour = !0);
      }),
      Y("hmmss", function (t, e, i) {
        var n = t.length - 4,
          o = t.length - 2;
        (e[Cn] = v(t.substr(0, n))),
          (e[Dn] = v(t.substr(n, 2))),
          (e[Tn] = v(t.substr(o))),
          (h(i).bigHour = !0);
      }),
      Y("Hmm", function (t, e, i) {
        var n = t.length - 2;
        (e[Cn] = v(t.substr(0, n))), (e[Dn] = v(t.substr(n)));
      }),
      Y("Hmmss", function (t, e, i) {
        var n = t.length - 4,
          o = t.length - 2;
        (e[Cn] = v(t.substr(0, n))),
          (e[Dn] = v(t.substr(n, 2))),
          (e[Tn] = v(t.substr(o)));
      });
    var oo = /[ap]\.?m?\.?/i,
      ao = I("Hours", !0);
    E("m", ["mm", 2], 0, "minute"),
      D("minute", "m"),
      H("m", ln),
      H("mm", ln, on),
      Y(["m", "mm"], Dn);
    var so = I("Minutes", !1);
    E("s", ["ss", 2], 0, "second"),
      D("second", "s"),
      H("s", ln),
      H("ss", ln, on),
      Y(["s", "ss"], Tn);
    var ro = I("Seconds", !1);
    E("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      E(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      E(0, ["SSS", 3], 0, "millisecond"),
      E(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }),
      E(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }),
      E(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      E(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      E(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      E(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      D("millisecond", "ms"),
      H("S", un, nn),
      H("SS", un, on),
      H("SSS", un, an);
    var lo;
    for (lo = "SSSS"; lo.length <= 9; lo += "S") H(lo, pn);
    for (lo = "S"; lo.length <= 9; lo += "S") Y(lo, ri);
    var ho = I("Milliseconds", !1);
    E("z", 0, 0, "zoneAbbr"), E("zz", 0, 0, "zoneName");
    var co = p.prototype;
    (co.add = Qn),
      (co.calendar = ne),
      (co.clone = oe),
      (co.diff = ue),
      (co.endOf = Se),
      (co.format = me),
      (co.from = ge),
      (co.fromNow = ve),
      (co.to = ye),
      (co.toNow = be),
      (co.get = L),
      (co.invalidAt = Fe),
      (co.isAfter = ae),
      (co.isBefore = se),
      (co.isBetween = re),
      (co.isSame = le),
      (co.isSameOrAfter = he),
      (co.isSameOrBefore = ce),
      (co.isValid = Ie),
      (co.lang = Jn),
      (co.locale = xe),
      (co.localeData = we),
      (co.max = qn),
      (co.min = Yn),
      (co.parsingFlags = Pe),
      (co.set = L),
      (co.startOf = ke),
      (co.subtract = Zn),
      (co.toArray = Te),
      (co.toObject = Me),
      (co.toDate = De),
      (co.toISOString = pe),
      (co.toJSON = Ae),
      (co.toString = fe),
      (co.unix = Ce),
      (co.valueOf = _e),
      (co.creationData = Le),
      (co.year = jn),
      (co.isLeapYear = ft),
      (co.weekYear = Ee),
      (co.isoWeekYear = Oe),
      (co.quarter = co.quarters = Ve),
      (co.month = J),
      (co.daysInMonth = K),
      (co.week = co.weeks = qe),
      (co.isoWeek = co.isoWeeks = Ue),
      (co.weeksInYear = Re),
      (co.isoWeeksInYear = We),
      (co.date = to),
      (co.day = co.days = Je),
      (co.weekday = Ke),
      (co.isoWeekday = ti),
      (co.dayOfYear = ei),
      (co.hour = co.hours = ao),
      (co.minute = co.minutes = so),
      (co.second = co.seconds = ro),
      (co.millisecond = co.milliseconds = ho),
      (co.utcOffset = Ht),
      (co.utc = Bt),
      (co.local = jt),
      (co.parseZone = Yt),
      (co.hasAlignedHourOffset = qt),
      (co.isDST = Ut),
      (co.isDSTShifted = $t),
      (co.isLocal = Gt),
      (co.isUtcOffset = Xt),
      (co.isUtc = Qt),
      (co.isUTC = Qt),
      (co.zoneAbbr = li),
      (co.zoneName = hi),
      (co.dates = at("dates accessor is deprecated. Use date instead.", to)),
      (co.months = at("months accessor is deprecated. Use month instead", J)),
      (co.years = at("years accessor is deprecated. Use year instead", jn)),
      (co.zone = at(
        "moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",
        Vt
      ));
    var uo = co,
      fo = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      },
      po = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      mo = "Invalid date",
      go = "%d",
      vo = /\d{1,2}/,
      yo = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      },
      bo = b.prototype;
    (bo._calendar = fo),
      (bo.calendar = di),
      (bo._longDateFormat = po),
      (bo.longDateFormat = fi),
      (bo._invalidDate = mo),
      (bo.invalidDate = pi),
      (bo._ordinal = go),
      (bo.ordinal = mi),
      (bo._ordinalParse = vo),
      (bo.preparse = gi),
      (bo.postformat = gi),
      (bo._relativeTime = yo),
      (bo.relativeTime = vi),
      (bo.pastFuture = yi),
      (bo.set = bi),
      (bo.months = G),
      (bo._months = Fn),
      (bo.monthsShort = X),
      (bo._monthsShort = Ln),
      (bo.monthsParse = Q),
      (bo._monthsRegex = En),
      (bo.monthsRegex = et),
      (bo._monthsShortRegex = Nn),
      (bo.monthsShortRegex = tt),
      (bo.week = Be),
      (bo._week = Kn),
      (bo.firstDayOfYear = Ye),
      (bo.firstDayOfWeek = je),
      (bo.weekdays = Ge),
      (bo._weekdays = eo),
      (bo.weekdaysMin = Qe),
      (bo._weekdaysMin = no),
      (bo.weekdaysShort = Xe),
      (bo._weekdaysShort = io),
      (bo.weekdaysParse = Ze),
      (bo.isPM = ai),
      (bo._meridiemParse = oo),
      (bo.meridiem = si),
      S("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
          var e = t % 10,
            i =
              1 === v((t % 100) / 10)
                ? "th"
                : 1 === e
                ? "st"
                : 2 === e
                ? "nd"
                : 3 === e
                ? "rd"
                : "th";
          return t + i;
        },
      }),
      (t.lang = at("moment.lang is deprecated. Use moment.locale instead.", S)),
      (t.langData = at(
        "moment.langData is deprecated. Use moment.localeData instead.",
        C
      ));
    var xo = Math.abs,
      wo = Wi("ms"),
      ko = Wi("s"),
      So = Wi("m"),
      _o = Wi("h"),
      Co = Wi("d"),
      Do = Wi("w"),
      To = Wi("M"),
      Mo = Wi("y"),
      Ao = zi("milliseconds"),
      Io = zi("seconds"),
      Po = zi("minutes"),
      Fo = zi("hours"),
      Lo = zi("days"),
      No = zi("months"),
      Eo = zi("years"),
      Oo = Math.round,
      Wo = { s: 45, m: 45, h: 22, d: 26, M: 11 },
      Ro = Math.abs,
      zo = Nt.prototype;
    (zo.abs = Ti),
      (zo.add = Ai),
      (zo.subtract = Ii),
      (zo.as = Ei),
      (zo.asMilliseconds = wo),
      (zo.asSeconds = ko),
      (zo.asMinutes = So),
      (zo.asHours = _o),
      (zo.asDays = Co),
      (zo.asWeeks = Do),
      (zo.asMonths = To),
      (zo.asYears = Mo),
      (zo.valueOf = Oi),
      (zo._bubble = Fi),
      (zo.get = Ri),
      (zo.milliseconds = Ao),
      (zo.seconds = Io),
      (zo.minutes = Po),
      (zo.hours = Fo),
      (zo.days = Lo),
      (zo.weeks = Hi),
      (zo.months = No),
      (zo.years = Eo),
      (zo.humanize = Yi),
      (zo.toISOString = qi),
      (zo.toString = qi),
      (zo.toJSON = qi),
      (zo.locale = xe),
      (zo.localeData = we),
      (zo.toIsoString = at(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        qi
      )),
      (zo.lang = Jn),
      E("X", 0, 0, "unix"),
      E("x", 0, 0, "valueOf"),
      H("x", mn),
      H("X", yn),
      Y("X", function (t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10));
      }),
      Y("x", function (t, e, i) {
        i._d = new Date(v(t));
      }),
      (t.version = "2.11.1"),
      e(It),
      (t.fn = uo),
      (t.min = Ft),
      (t.max = Lt),
      (t.now = Un),
      (t.utc = r),
      (t.unix = ci),
      (t.months = ki),
      (t.isDate = n),
      (t.locale = S),
      (t.invalid = u),
      (t.duration = Zt),
      (t.isMoment = m),
      (t.weekdays = _i),
      (t.parseZone = ui),
      (t.localeData = C),
      (t.isDuration = Et),
      (t.monthsShort = Si),
      (t.weekdaysMin = Di),
      (t.defineLocale = _),
      (t.weekdaysShort = Ci),
      (t.normalizeUnits = T),
      (t.relativeTimeThreshold = ji),
      (t.prototype = uo);
    var Ho = t;
    return Ho;
  });
var skel = (function () {
  "use strict";
  var t = {
    breakpointIds: null,
    events: {},
    isInit: !1,
    obj: { attachments: {}, breakpoints: {}, head: null, states: {} },
    sd: "/",
    state: null,
    stateHandlers: {},
    stateId: "",
    vars: {},
    DOMReady: null,
    indexOf: null,
    isArray: null,
    iterate: null,
    matchesMedia: null,
    extend: function (e, i) {
      t.iterate(i, function (n) {
        t.isArray(i[n])
          ? (t.isArray(e[n]) || (e[n] = []), t.extend(e[n], i[n]))
          : "object" == typeof i[n]
          ? ("object" != typeof e[n] && (e[n] = {}), t.extend(e[n], i[n]))
          : (e[n] = i[n]);
      });
    },
    newStyle: function (t) {
      var e = document.createElement("style");
      return (e.type = "text/css"), (e.innerHTML = t), e;
    },
    _canUse: null,
    canUse: function (e) {
      t._canUse || (t._canUse = document.createElement("div"));
      var i = t._canUse.style,
        n = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        e in i ||
        "Moz" + n in i ||
        "Webkit" + n in i ||
        "O" + n in i ||
        "ms" + n in i
      );
    },
    on: function (e, i) {
      var n = e.split(/[\s]+/);
      return (
        t.iterate(n, function (e) {
          var o = n[e];
          if (t.isInit) {
            if ("init" == o) return void i();
            if ("change" == o) i();
            else {
              var a = o.charAt(0);
              if ("+" == a || "!" == a) {
                var s = o.substring(1);
                if (s in t.obj.breakpoints)
                  if ("+" == a && t.obj.breakpoints[s].active) i();
                  else if ("!" == a && !t.obj.breakpoints[s].active)
                    return void i();
              }
            }
          }
          t.events[o] || (t.events[o] = []), t.events[o].push(i);
        }),
        t
      );
    },
    trigger: function (e) {
      return t.events[e] && 0 != t.events[e].length
        ? (t.iterate(t.events[e], function (i) {
            t.events[e][i]();
          }),
          t)
        : void 0;
    },
    breakpoint: function (e) {
      return t.obj.breakpoints[e];
    },
    breakpoints: function (e) {
      function i(t, e) {
        (this.name = this.id = t),
          (this.media = e),
          (this.active = !1),
          (this.wasActive = !1);
      }
      return (
        (i.prototype.matches = function () {
          return t.matchesMedia(this.media);
        }),
        (i.prototype.sync = function () {
          (this.wasActive = this.active), (this.active = this.matches());
        }),
        t.iterate(e, function (n) {
          t.obj.breakpoints[n] = new i(n, e[n]);
        }),
        window.setTimeout(function () {
          t.poll();
        }, 0),
        t
      );
    },
    addStateHandler: function (e, i) {
      t.stateHandlers[e] = i;
    },
    callStateHandler: function (e) {
      var i = t.stateHandlers[e]();
      t.iterate(i, function (e) {
        t.state.attachments.push(i[e]);
      });
    },
    changeState: function (e) {
      t.iterate(t.obj.breakpoints, function (e) {
        t.obj.breakpoints[e].sync();
      }),
        (t.vars.lastStateId = t.stateId),
        (t.stateId = e),
        (t.breakpointIds =
          t.stateId === t.sd ? [] : t.stateId.substring(1).split(t.sd)),
        t.obj.states[t.stateId]
          ? (t.state = t.obj.states[t.stateId])
          : ((t.obj.states[t.stateId] = { attachments: [] }),
            (t.state = t.obj.states[t.stateId]),
            t.iterate(t.stateHandlers, t.callStateHandler)),
        t.detachAll(t.state.attachments),
        t.attachAll(t.state.attachments),
        (t.vars.stateId = t.stateId),
        (t.vars.state = t.state),
        t.trigger("change"),
        t.iterate(t.obj.breakpoints, function (e) {
          t.obj.breakpoints[e].active
            ? t.obj.breakpoints[e].wasActive || t.trigger("+" + e)
            : t.obj.breakpoints[e].wasActive && t.trigger("-" + e);
        });
    },
    generateStateConfig: function (e, i) {
      var n = {};
      return (
        t.extend(n, e),
        t.iterate(t.breakpointIds, function (e) {
          t.extend(n, i[t.breakpointIds[e]]);
        }),
        n
      );
    },
    getStateId: function () {
      var e = "";
      return (
        t.iterate(t.obj.breakpoints, function (i) {
          var n = t.obj.breakpoints[i];
          n.matches() && (e += t.sd + n.id);
        }),
        e
      );
    },
    poll: function () {
      var e = "";
      (e = t.getStateId()),
        "" === e && (e = t.sd),
        e !== t.stateId && t.changeState(e);
    },
    _attach: null,
    attach: function (e) {
      var i = t.obj.head,
        n = e.element;
      return (
        (!n.parentNode || !n.parentNode.tagName) &&
        (t._attach || (t._attach = i.firstChild),
        i.insertBefore(n, t._attach.nextSibling),
        e.permanent && (t._attach = n),
        !0)
      );
    },
    attachAll: function (e) {
      var i = [];
      t.iterate(e, function (t) {
        i[e[t].priority] || (i[e[t].priority] = []),
          i[e[t].priority].push(e[t]);
      }),
        i.reverse(),
        t.iterate(i, function (e) {
          t.iterate(i[e], function (n) {
            t.attach(i[e][n]);
          });
        });
    },
    detach: function (t) {
      var e = t.element;
      return (
        !(
          t.permanent ||
          !e.parentNode ||
          (e.parentNode && !e.parentNode.tagName)
        ) && (e.parentNode.removeChild(e), !0)
      );
    },
    detachAll: function (e) {
      var i = {};
      t.iterate(e, function (t) {
        i[e[t].id] = !0;
      }),
        t.iterate(t.obj.attachments, function (e) {
          e in i || t.detach(t.obj.attachments[e]);
        });
    },
    attachment: function (e) {
      return e in t.obj.attachments ? t.obj.attachments[e] : null;
    },
    newAttachment: function (e, i, n, o) {
      return (t.obj.attachments[e] = {
        id: e,
        element: i,
        priority: n,
        permanent: o,
      });
    },
    init: function () {
      t.initMethods(),
        t.initVars(),
        t.initEvents(),
        (t.obj.head = document.getElementsByTagName("head")[0]),
        (t.isInit = !0),
        t.trigger("init");
    },
    initEvents: function () {
      t.on("resize", function () {
        t.poll();
      }),
        t.on("orientationChange", function () {
          t.poll();
        }),
        t.DOMReady(function () {
          t.trigger("ready");
        }),
        window.onload && t.on("load", window.onload),
        (window.onload = function () {
          t.trigger("load");
        }),
        window.onresize && t.on("resize", window.onresize),
        (window.onresize = function () {
          t.trigger("resize");
        }),
        window.onorientationchange &&
          t.on("orientationChange", window.onorientationchange),
        (window.onorientationchange = function () {
          t.trigger("orientationChange");
        });
    },
    initMethods: function () {
      document.addEventListener
        ? !(function (e, i) {
            t.DOMReady = i();
          })("domready", function () {
            function t(t) {
              for (a = 1; (t = i.shift()); ) t();
            }
            var e,
              i = [],
              n = document,
              o = "DOMContentLoaded",
              a = /^loaded|^c/.test(n.readyState);
            return (
              n.addEventListener(
                o,
                (e = function () {
                  n.removeEventListener(o, e), t();
                })
              ),
              function (t) {
                a ? t() : i.push(t);
              }
            );
          })
        : !(function (e, i) {
            t.DOMReady = i();
          })("domready", function (t) {
            function e(t) {
              for (f = 1; (t = n.shift()); ) t();
            }
            var i,
              n = [],
              o = !1,
              a = document,
              s = a.documentElement,
              r = s.doScroll,
              l = "DOMContentLoaded",
              h = "addEventListener",
              c = "onreadystatechange",
              u = "readyState",
              d = r ? /^loaded|^c/ : /^loaded|c/,
              f = d.test(a[u]);
            return (
              a[h] &&
                a[h](
                  l,
                  (i = function () {
                    a.removeEventListener(l, i, o), e();
                  }),
                  o
                ),
              r &&
                a.attachEvent(
                  c,
                  (i = function () {
                    /^c/.test(a[u]) && (a.detachEvent(c, i), e());
                  })
                ),
              (t = r
                ? function (e) {
                    self != top
                      ? f
                        ? e()
                        : n.push(e)
                      : (function () {
                          try {
                            s.doScroll("left");
                          } catch (i) {
                            return setTimeout(function () {
                              t(e);
                            }, 50);
                          }
                          e();
                        })();
                  }
                : function (t) {
                    f ? t() : n.push(t);
                  })
            );
          }),
        Array.prototype.indexOf
          ? (t.indexOf = function (t, e) {
              return t.indexOf(e);
            })
          : (t.indexOf = function (t, e) {
              if ("string" == typeof t) return t.indexOf(e);
              var i,
                n,
                o = e ? e : 0;
              if (!this) throw new TypeError();
              if (((n = this.length), 0 === n || o >= n)) return -1;
              for (0 > o && (o = n - Math.abs(o)), i = o; n > i; i++)
                if (this[i] === t) return i;
              return -1;
            }),
        Array.isArray
          ? (t.isArray = function (t) {
              return Array.isArray(t);
            })
          : (t.isArray = function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
        Object.keys
          ? (t.iterate = function (t, e) {
              if (!t) return [];
              var i,
                n = Object.keys(t);
              for (i = 0; n[i] && e(n[i], t[n[i]]) !== !1; i++);
            })
          : (t.iterate = function (t, e) {
              if (!t) return [];
              var i;
              for (i in t)
                if (
                  Object.prototype.hasOwnProperty.call(t, i) &&
                  e(i, t[i]) === !1
                )
                  break;
            }),
        window.matchMedia
          ? (t.matchesMedia = function (t) {
              return "" == t || window.matchMedia(t).matches;
            })
          : window.styleMedia || window.media
          ? (t.matchesMedia = function (t) {
              if ("" == t) return !0;
              var e = window.styleMedia || window.media;
              return e.matchMedium(t || "all");
            })
          : window.getComputedStyle
          ? (t.matchesMedia = function (t) {
              if ("" == t) return !0;
              var e = document.createElement("style"),
                i = document.getElementsByTagName("script")[0],
                n = null;
              (e.type = "text/css"),
                (e.id = "matchmediajs-test"),
                i.parentNode.insertBefore(e, i),
                (n =
                  ("getComputedStyle" in window &&
                    window.getComputedStyle(e, null)) ||
                  e.currentStyle);
              var o = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
              return (
                e.styleSheet ? (e.styleSheet.cssText = o) : (e.textContent = o),
                "1px" === n.width
              );
            })
          : (t.matchesMedia = function (t) {
              if ("" == t) return !0;
              var e,
                i,
                n,
                o,
                a = { "min-width": null, "max-width": null },
                s = !1;
              for (n = t.split(/\s+and\s+/), e = 0; e < n.length; e++)
                (i = n[e]),
                  "(" == i.charAt(0) &&
                    ((i = i.substring(1, i.length - 1)),
                    (o = i.split(/:\s+/)),
                    2 == o.length &&
                      ((a[o[0].replace(/^\s+|\s+$/g, "")] = parseInt(o[1])),
                      (s = !0)));
              if (!s) return !1;
              var r = document.documentElement.clientWidth,
                l = document.documentElement.clientHeight;
              return !(
                (null !== a["min-width"] && r < a["min-width"]) ||
                (null !== a["max-width"] && r > a["max-width"]) ||
                (null !== a["min-height"] && l < a["min-height"]) ||
                (null !== a["max-height"] && l > a["max-height"])
              );
            }),
        navigator.userAgent.match(/MSIE ([0-9]+)/) &&
          RegExp.$1 < 9 &&
          (t.newStyle = function (t) {
            var e = document.createElement("span");
            return (
              (e.innerHTML = '&nbsp;<style type="text/css">' + t + "</style>"),
              e
            );
          });
    },
    initVars: function () {
      var e,
        i,
        n,
        o = navigator.userAgent;
      (e = "other"),
        (i = 0),
        (n = [
          ["firefox", /Firefox\/([0-9\.]+)/],
          ["bb", /BlackBerry.+Version\/([0-9\.]+)/],
          ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/],
          ["opera", /OPR\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)/],
          ["edge", /Edge\/([0-9\.]+)/],
          ["safari", /Version\/([0-9\.]+).+Safari/],
          ["chrome", /Chrome\/([0-9\.]+)/],
          ["ie", /MSIE ([0-9]+)/],
          ["ie", /Trident\/.+rv:([0-9]+)/],
        ]),
        t.iterate(n, function (t, n) {
          return o.match(n[1])
            ? ((e = n[0]), (i = parseFloat(RegExp.$1)), !1)
            : void 0;
        }),
        (t.vars.browser = e),
        (t.vars.browserVersion = i),
        (e = "other"),
        (i = 0),
        (n = [
          [
            "ios",
            /([0-9_]+) like Mac OS X/,
            function (t) {
              return t.replace("_", ".").replace("_", "");
            },
          ],
          [
            "ios",
            /CPU like Mac OS X/,
            function (t) {
              return 0;
            },
          ],
          ["android", /Android ([0-9\.]+)/, null],
          [
            "mac",
            /Macintosh.+Mac OS X ([0-9_]+)/,
            function (t) {
              return t.replace("_", ".").replace("_", "");
            },
          ],
          ["wp", /Windows Phone ([0-9\.]+)/, null],
          ["windows", /Windows NT ([0-9\.]+)/, null],
          ["bb", /BlackBerry.+Version\/([0-9\.]+)/, null],
          ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/, null],
        ]),
        t.iterate(n, function (t, n) {
          return o.match(n[1])
            ? ((e = n[0]),
              (i = parseFloat(n[2] ? n[2](RegExp.$1) : RegExp.$1)),
              !1)
            : void 0;
        }),
        (t.vars.os = e),
        (t.vars.osVersion = i),
        (t.vars.IEVersion =
          "ie" == t.vars.browser ? t.vars.browserVersion : 99),
        (t.vars.touch =
          "wp" == t.vars.os
            ? navigator.msMaxTouchPoints > 0
            : !!("ontouchstart" in window)),
        (t.vars.mobile =
          "wp" == t.vars.os ||
          "android" == t.vars.os ||
          "ios" == t.vars.os ||
          "bb" == t.vars.os);
    },
  };
  return t.init(), t;
})();
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (module.exports = e())
    : (t.skel = e());
})(this, function () {
  return skel;
}),
  (function (t, e) {
    function i() {
      var t = m.elements;
      return "string" == typeof t ? t.split(" ") : t;
    }
    function n(t) {
      var e = p[t[d]];
      return e || ((e = {}), f++, (t[d] = f), (p[f] = e)), e;
    }
    function o(t, i, o) {
      return (
        i || (i = e),
        l
          ? i.createElement(t)
          : (o || (o = n(i)),
            (i = o.cache[t]
              ? o.cache[t].cloneNode()
              : u.test(t)
              ? (o.cache[t] = o.createElem(t)).cloneNode()
              : o.createElem(t)),
            i.canHaveChildren && !c.test(t) ? o.frag.appendChild(i) : i)
      );
    }
    function a(t, e) {
      e.cache ||
        ((e.cache = {}),
        (e.createElem = t.createElement),
        (e.createFrag = t.createDocumentFragment),
        (e.frag = e.createFrag())),
        (t.createElement = function (i) {
          return m.shivMethods ? o(i, t, e) : e.createElem(i);
        }),
        (t.createDocumentFragment = Function(
          "h,f",
          "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
            i()
              .join()
              .replace(/\w+/g, function (t) {
                return (
                  e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                );
              }) +
            ");return n}"
        )(m, e.frag));
    }
    function s(t) {
      t || (t = e);
      var i = n(t);
      if (m.shivCSS && !r && !i.hasCSS) {
        var o,
          s = t;
        (o = s.createElement("p")),
          (s = s.getElementsByTagName("head")[0] || s.documentElement),
          (o.innerHTML =
            "x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>"),
          (o = s.insertBefore(o.lastChild, s.firstChild)),
          (i.hasCSS = !!o);
      }
      return l || a(t, i), t;
    }
    var r,
      l,
      h = t.html5 || {},
      c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      d = "_html5shiv",
      f = 0,
      p = {};
    !(function () {
      try {
        var t = e.createElement("a");
        (t.innerHTML = "<xyz></xyz>"), (r = "hidden" in t);
        var i;
        if (!(i = 1 == t.childNodes.length)) {
          e.createElement("a");
          var n = e.createDocumentFragment();
          i =
            "undefined" == typeof n.cloneNode ||
            "undefined" == typeof n.createDocumentFragment ||
            "undefined" == typeof n.createElement;
        }
        l = i;
      } catch (o) {
        l = r = !0;
      }
    })();
    var m = {
      elements:
        h.elements ||
        "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
      version: "3.6.2",
      shivCSS: !1 !== h.shivCSS,
      supportsUnknownElements: l,
      shivMethods: !1 !== h.shivMethods,
      type: "default",
      shivDocument: s,
      createElement: o,
      createDocumentFragment: function (t, o) {
        if ((t || (t = e), l)) return t.createDocumentFragment();
        for (
          var o = o || n(t),
            a = o.frag.cloneNode(),
            s = 0,
            r = i(),
            h = r.length;
          s < h;
          s++
        )
          a.createElement(r[s]);
        return a;
      },
    };
    (t.html5 = m), s(e);
  })(this, document),
  !(function (t) {
    "use strict";
    t.matchMedia =
      t.matchMedia ||
      (function (t) {
        var e,
          i = t.documentElement,
          n = i.firstElementChild || i.firstChild,
          o = t.createElement("body"),
          a = t.createElement("div");
        return (
          (a.id = "mq-test-1"),
          (a.style.cssText = "position:absolute;top:-100em"),
          (o.style.background = "none"),
          o.appendChild(a),
          function (t) {
            return (
              (a.innerHTML =
                '&shy;<style media="' +
                t +
                '"> #mq-test-1 { width: 42px; }</style>'),
              i.insertBefore(o, n),
              (e = 42 === a.offsetWidth),
              i.removeChild(o),
              { matches: e, media: t }
            );
          }
        );
      })(t.document);
  })(this),
  (function (t) {
    "use strict";
    function e() {
      w(!0);
    }
    var i = {};
    (t.respond = i), (i.update = function () {});
    var n = [],
      o = (function () {
        var e = !1;
        try {
          e = new t.XMLHttpRequest();
        } catch (i) {
          e = new t.ActiveXObject("Microsoft.XMLHTTP");
        }
        return function () {
          return e;
        };
      })(),
      a = function (t, e) {
        var i = o();
        i &&
          (i.open("GET", t, !0),
          (i.onreadystatechange = function () {
            4 !== i.readyState ||
              (200 !== i.status && 304 !== i.status) ||
              e(i.responseText);
          }),
          4 !== i.readyState && i.send(null));
      },
      s = function (t) {
        return t.replace(i.regex.minmaxwh, "").match(i.regex.other);
      };
    if (
      ((i.ajax = a),
      (i.queue = n),
      (i.unsupportedmq = s),
      (i.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g,
      }),
      (i.mediaQueriesSupported =
        t.matchMedia &&
        null !== t.matchMedia("only all") &&
        t.matchMedia("only all").matches),
      !i.mediaQueriesSupported)
    ) {
      var r,
        l,
        h,
        c = t.document,
        u = c.documentElement,
        d = [],
        f = [],
        p = [],
        m = {},
        g = 30,
        v = c.getElementsByTagName("head")[0] || u,
        y = c.getElementsByTagName("base")[0],
        b = v.getElementsByTagName("link"),
        x = function () {
          var t,
            e = c.createElement("div"),
            i = c.body,
            n = u.style.fontSize,
            o = i && i.style.fontSize,
            a = !1;
          return (
            (e.style.cssText = "position:absolute;font-size:1em;width:1em"),
            i ||
              ((i = a = c.createElement("body")),
              (i.style.background = "none")),
            (u.style.fontSize = "100%"),
            (i.style.fontSize = "100%"),
            i.appendChild(e),
            a && u.insertBefore(i, u.firstChild),
            (t = e.offsetWidth),
            a ? u.removeChild(i) : i.removeChild(e),
            (u.style.fontSize = n),
            o && (i.style.fontSize = o),
            (t = h = parseFloat(t))
          );
        },
        w = function (e) {
          var i = "clientWidth",
            n = u[i],
            o = ("CSS1Compat" === c.compatMode && n) || c.body[i] || n,
            a = {},
            s = b[b.length - 1],
            m = new Date().getTime();
          if (e && r && g > m - r)
            return t.clearTimeout(l), void (l = t.setTimeout(w, g));
          r = m;
          for (var y in d)
            if (d.hasOwnProperty(y)) {
              var k = d[y],
                S = k.minw,
                _ = k.maxw,
                C = null === S,
                D = null === _,
                T = "em";
              S && (S = parseFloat(S) * (S.indexOf(T) > -1 ? h || x() : 1)),
                _ && (_ = parseFloat(_) * (_.indexOf(T) > -1 ? h || x() : 1)),
                (k.hasquery &&
                  ((C && D) || !(C || o >= S) || !(D || _ >= o))) ||
                  (a[k.media] || (a[k.media] = []),
                  a[k.media].push(f[k.rules]));
            }
          for (var M in p)
            p.hasOwnProperty(M) &&
              p[M] &&
              p[M].parentNode === v &&
              v.removeChild(p[M]);
          p.length = 0;
          for (var A in a)
            if (a.hasOwnProperty(A)) {
              var I = c.createElement("style"),
                P = a[A].join("\n");
              (I.type = "text/css"),
                (I.media = A),
                v.insertBefore(I, s.nextSibling),
                I.styleSheet
                  ? (I.styleSheet.cssText = P)
                  : I.appendChild(c.createTextNode(P)),
                p.push(I);
            }
        },
        k = function (t, e, n) {
          var o = t
              .replace(i.regex.comments, "")
              .replace(i.regex.keyframes, "")
              .match(i.regex.media),
            a = (o && o.length) || 0;
          e = e.substring(0, e.lastIndexOf("/"));
          var r = function (t) {
              return t.replace(i.regex.urls, "$1" + e + "$2$3");
            },
            l = !a && n;
          e.length && (e += "/"), l && (a = 1);
          for (var h = 0; a > h; h++) {
            var c, u, p, m;
            l
              ? ((c = n), f.push(r(t)))
              : ((c = o[h].match(i.regex.findStyles) && RegExp.$1),
                f.push(RegExp.$2 && r(RegExp.$2))),
              (p = c.split(",")),
              (m = p.length);
            for (var g = 0; m > g; g++)
              (u = p[g]),
                s(u) ||
                  d.push({
                    media:
                      (u.split("(")[0].match(i.regex.only) && RegExp.$2) ||
                      "all",
                    rules: f.length - 1,
                    hasquery: u.indexOf("(") > -1,
                    minw:
                      u.match(i.regex.minw) &&
                      parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw:
                      u.match(i.regex.maxw) &&
                      parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                  });
          }
          w();
        },
        S = function () {
          if (n.length) {
            var e = n.shift();
            a(e.href, function (i) {
              k(i, e.href, e.media),
                (m[e.href] = !0),
                t.setTimeout(function () {
                  S();
                }, 0);
            });
          }
        },
        _ = function () {
          for (var e = 0; e < b.length; e++) {
            var i = b[e],
              o = i.href,
              a = i.media,
              s = i.rel && "stylesheet" === i.rel.toLowerCase();
            o &&
              s &&
              !m[o] &&
              (i.styleSheet && i.styleSheet.rawCssText
                ? (k(i.styleSheet.rawCssText, o, a), (m[o] = !0))
                : ((!/^([a-zA-Z:]*\/\/)/.test(o) && !y) ||
                    o.replace(RegExp.$1, "").split("/")[0] ===
                      t.location.host) &&
                  ("//" === o.substring(0, 2) && (o = t.location.protocol + o),
                  n.push({ href: o, media: a })));
          }
          S();
        };
      _(),
        (i.update = _),
        (i.getEmValue = x),
        t.addEventListener
          ? t.addEventListener("resize", e, !1)
          : t.attachEvent && t.attachEvent("onresize", e);
    }
  })(this),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["moment"], e)
      : "object" == typeof exports
      ? (module.exports = e.call(t, require("moment")))
      : (t.Chart = e.call(t, t.moment));
  })(this || window, function (t) {
    return (
      !(function e(t, i, n) {
        function o(s, r) {
          if (!i[s]) {
            if (!t[s]) {
              var l = "function" == typeof require && require;
              if (!r && l) return l(s, !0);
              if (a) return a(s, !0);
              var h = new Error("Cannot find module '" + s + "'");
              throw ((h.code = "MODULE_NOT_FOUND"), h);
            }
            var c = (i[s] = { exports: {} });
            t[s][0].call(
              c.exports,
              function (e) {
                var i = t[s][1][e];
                return o(i ? i : e);
              },
              c,
              c.exports,
              e,
              t,
              i,
              n
            );
          }
          return i[s].exports;
        }
        for (
          var a = "function" == typeof require && require, s = 0;
          s < n.length;
          s++
        )
          o(n[s]);
        return o;
      })(
        {
          1: [
            function (t, e, i) {
              !(function () {
                var i = t("color-convert"),
                  n = t("color-string"),
                  o = function (t) {
                    if (t instanceof o) return t;
                    if (!(this instanceof o)) return new o(t);
                    if (
                      ((this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1,
                      }),
                      "string" == typeof t)
                    ) {
                      var e = n.getRgba(t);
                      if (e) this.setValues("rgb", e);
                      else if ((e = n.getHsla(t))) this.setValues("hsl", e);
                      else {
                        if (!(e = n.getHwb(t)))
                          throw new Error(
                            'Unable to parse color from string "' + t + '"'
                          );
                        this.setValues("hwb", e);
                      }
                    } else if ("object" == typeof t) {
                      var e = t;
                      if (void 0 !== e.r || void 0 !== e.red)
                        this.setValues("rgb", e);
                      else if (void 0 !== e.l || void 0 !== e.lightness)
                        this.setValues("hsl", e);
                      else if (void 0 !== e.v || void 0 !== e.value)
                        this.setValues("hsv", e);
                      else if (void 0 !== e.w || void 0 !== e.whiteness)
                        this.setValues("hwb", e);
                      else {
                        if (void 0 === e.c && void 0 === e.cyan)
                          throw new Error(
                            "Unable to parse color from object " +
                              JSON.stringify(t)
                          );
                        this.setValues("cmyk", e);
                      }
                    }
                  };
                (o.prototype = {
                  rgb: function (t) {
                    return this.setSpace("rgb", arguments);
                  },
                  hsl: function (t) {
                    return this.setSpace("hsl", arguments);
                  },
                  hsv: function (t) {
                    return this.setSpace("hsv", arguments);
                  },
                  hwb: function (t) {
                    return this.setSpace("hwb", arguments);
                  },
                  cmyk: function (t) {
                    return this.setSpace("cmyk", arguments);
                  },
                  rgbArray: function () {
                    return this.values.rgb;
                  },
                  hslArray: function () {
                    return this.values.hsl;
                  },
                  hsvArray: function () {
                    return this.values.hsv;
                  },
                  hwbArray: function () {
                    return 1 !== this.values.alpha
                      ? this.values.hwb.concat([this.values.alpha])
                      : this.values.hwb;
                  },
                  cmykArray: function () {
                    return this.values.cmyk;
                  },
                  rgbaArray: function () {
                    var t = this.values.rgb;
                    return t.concat([this.values.alpha]);
                  },
                  hslaArray: function () {
                    var t = this.values.hsl;
                    return t.concat([this.values.alpha]);
                  },
                  alpha: function (t) {
                    return void 0 === t
                      ? this.values.alpha
                      : (this.setValues("alpha", t), this);
                  },
                  red: function (t) {
                    return this.setChannel("rgb", 0, t);
                  },
                  green: function (t) {
                    return this.setChannel("rgb", 1, t);
                  },
                  blue: function (t) {
                    return this.setChannel("rgb", 2, t);
                  },
                  hue: function (t) {
                    return this.setChannel("hsl", 0, t);
                  },
                  saturation: function (t) {
                    return this.setChannel("hsl", 1, t);
                  },
                  lightness: function (t) {
                    return this.setChannel("hsl", 2, t);
                  },
                  saturationv: function (t) {
                    return this.setChannel("hsv", 1, t);
                  },
                  whiteness: function (t) {
                    return this.setChannel("hwb", 1, t);
                  },
                  blackness: function (t) {
                    return this.setChannel("hwb", 2, t);
                  },
                  value: function (t) {
                    return this.setChannel("hsv", 2, t);
                  },
                  cyan: function (t) {
                    return this.setChannel("cmyk", 0, t);
                  },
                  magenta: function (t) {
                    return this.setChannel("cmyk", 1, t);
                  },
                  yellow: function (t) {
                    return this.setChannel("cmyk", 2, t);
                  },
                  black: function (t) {
                    return this.setChannel("cmyk", 3, t);
                  },
                  hexString: function () {
                    return n.hexString(this.values.rgb);
                  },
                  rgbString: function () {
                    return n.rgbString(this.values.rgb, this.values.alpha);
                  },
                  rgbaString: function () {
                    return n.rgbaString(this.values.rgb, this.values.alpha);
                  },
                  percentString: function () {
                    return n.percentString(this.values.rgb, this.values.alpha);
                  },
                  hslString: function () {
                    return n.hslString(this.values.hsl, this.values.alpha);
                  },
                  hslaString: function () {
                    return n.hslaString(this.values.hsl, this.values.alpha);
                  },
                  hwbString: function () {
                    return n.hwbString(this.values.hwb, this.values.alpha);
                  },
                  keyword: function () {
                    return n.keyword(this.values.rgb, this.values.alpha);
                  },
                  rgbNumber: function () {
                    return (
                      (this.values.rgb[0] << 16) |
                      (this.values.rgb[1] << 8) |
                      this.values.rgb[2]
                    );
                  },
                  luminosity: function () {
                    for (
                      var t = this.values.rgb, e = [], i = 0;
                      i < t.length;
                      i++
                    ) {
                      var n = t[i] / 255;
                      e[i] =
                        0.03928 >= n
                          ? n / 12.92
                          : Math.pow((n + 0.055) / 1.055, 2.4);
                    }
                    return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
                  },
                  contrast: function (t) {
                    var e = this.luminosity(),
                      i = t.luminosity();
                    return e > i
                      ? (e + 0.05) / (i + 0.05)
                      : (i + 0.05) / (e + 0.05);
                  },
                  level: function (t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
                  },
                  dark: function () {
                    var t = this.values.rgb,
                      e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                    return 128 > e;
                  },
                  light: function () {
                    return !this.dark();
                  },
                  negate: function () {
                    for (var t = [], e = 0; 3 > e; e++)
                      t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this;
                  },
                  lighten: function (t) {
                    return (
                      (this.values.hsl[2] += this.values.hsl[2] * t),
                      this.setValues("hsl", this.values.hsl),
                      this
                    );
                  },
                  darken: function (t) {
                    return (
                      (this.values.hsl[2] -= this.values.hsl[2] * t),
                      this.setValues("hsl", this.values.hsl),
                      this
                    );
                  },
                  saturate: function (t) {
                    return (
                      (this.values.hsl[1] += this.values.hsl[1] * t),
                      this.setValues("hsl", this.values.hsl),
                      this
                    );
                  },
                  desaturate: function (t) {
                    return (
                      (this.values.hsl[1] -= this.values.hsl[1] * t),
                      this.setValues("hsl", this.values.hsl),
                      this
                    );
                  },
                  whiten: function (t) {
                    return (
                      (this.values.hwb[1] += this.values.hwb[1] * t),
                      this.setValues("hwb", this.values.hwb),
                      this
                    );
                  },
                  blacken: function (t) {
                    return (
                      (this.values.hwb[2] += this.values.hwb[2] * t),
                      this.setValues("hwb", this.values.hwb),
                      this
                    );
                  },
                  greyscale: function () {
                    var t = this.values.rgb,
                      e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this;
                  },
                  clearer: function (t) {
                    return (
                      this.setValues(
                        "alpha",
                        this.values.alpha - this.values.alpha * t
                      ),
                      this
                    );
                  },
                  opaquer: function (t) {
                    return (
                      this.setValues(
                        "alpha",
                        this.values.alpha + this.values.alpha * t
                      ),
                      this
                    );
                  },
                  rotate: function (t) {
                    var e = this.values.hsl[0];
                    return (
                      (e = (e + t) % 360),
                      (e = 0 > e ? 360 + e : e),
                      (this.values.hsl[0] = e),
                      this.setValues("hsl", this.values.hsl),
                      this
                    );
                  },
                  mix: function (t, e) {
                    e = 1 - (null == e ? 0.5 : e);
                    for (
                      var i = 2 * e - 1,
                        n = this.alpha() - t.alpha(),
                        o = ((i * n == -1 ? i : (i + n) / (1 + i * n)) + 1) / 2,
                        a = 1 - o,
                        s = this.rgbArray(),
                        r = t.rgbArray(),
                        l = 0;
                      l < s.length;
                      l++
                    )
                      s[l] = s[l] * o + r[l] * a;
                    this.setValues("rgb", s);
                    var h = this.alpha() * e + t.alpha() * (1 - e);
                    return this.setValues("alpha", h), this;
                  },
                  toJSON: function () {
                    return this.rgb();
                  },
                  clone: function () {
                    return new o(this.rgb());
                  },
                }),
                  (o.prototype.getValues = function (t) {
                    for (var e = {}, i = 0; i < t.length; i++)
                      e[t.charAt(i)] = this.values[t][i];
                    return (
                      1 != this.values.alpha && (e.a = this.values.alpha), e
                    );
                  }),
                  (o.prototype.setValues = function (t, e) {
                    var n = {
                        rgb: ["red", "green", "blue"],
                        hsl: ["hue", "saturation", "lightness"],
                        hsv: ["hue", "saturation", "value"],
                        hwb: ["hue", "whiteness", "blackness"],
                        cmyk: ["cyan", "magenta", "yellow", "black"],
                      },
                      o = {
                        rgb: [255, 255, 255],
                        hsl: [360, 100, 100],
                        hsv: [360, 100, 100],
                        hwb: [360, 100, 100],
                        cmyk: [100, 100, 100, 100],
                      },
                      a = 1;
                    if ("alpha" == t) a = e;
                    else if (e.length)
                      (this.values[t] = e.slice(0, t.length)),
                        (a = e[t.length]);
                    else if (void 0 !== e[t.charAt(0)]) {
                      for (var s = 0; s < t.length; s++)
                        this.values[t][s] = e[t.charAt(s)];
                      a = e.a;
                    } else if (void 0 !== e[n[t][0]]) {
                      for (var r = n[t], s = 0; s < t.length; s++)
                        this.values[t][s] = e[r[s]];
                      a = e.alpha;
                    }
                    if (
                      ((this.values.alpha = Math.max(
                        0,
                        Math.min(1, void 0 !== a ? a : this.values.alpha)
                      )),
                      "alpha" != t)
                    ) {
                      for (var s = 0; s < t.length; s++) {
                        var l = Math.max(
                          0,
                          Math.min(o[t][s], this.values[t][s])
                        );
                        this.values[t][s] = Math.round(l);
                      }
                      for (var h in n) {
                        h != t && (this.values[h] = i[t][h](this.values[t]));
                        for (var s = 0; s < h.length; s++) {
                          var l = Math.max(
                            0,
                            Math.min(o[h][s], this.values[h][s])
                          );
                          this.values[h][s] = Math.round(l);
                        }
                      }
                      return !0;
                    }
                  }),
                  (o.prototype.setSpace = function (t, e) {
                    var i = e[0];
                    return void 0 === i
                      ? this.getValues(t)
                      : ("number" == typeof i &&
                          (i = Array.prototype.slice.call(e)),
                        this.setValues(t, i),
                        this);
                  }),
                  (o.prototype.setChannel = function (t, e, i) {
                    return void 0 === i
                      ? this.values[t][e]
                      : ((this.values[t][e] = i),
                        this.setValues(t, this.values[t]),
                        this);
                  }),
                  (window.Color = e.exports = o);
              })();
            },
            { "color-convert": 3, "color-string": 4 },
          ],
          2: [
            function (t, e, i) {
              function n(t) {
                var e,
                  i,
                  n,
                  o = t[0] / 255,
                  a = t[1] / 255,
                  s = t[2] / 255,
                  r = Math.min(o, a, s),
                  l = Math.max(o, a, s),
                  h = l - r;
                return (
                  l == r
                    ? (e = 0)
                    : o == l
                    ? (e = (a - s) / h)
                    : a == l
                    ? (e = 2 + (s - o) / h)
                    : s == l && (e = 4 + (o - a) / h),
                  (e = Math.min(60 * e, 360)),
                  0 > e && (e += 360),
                  (n = (r + l) / 2),
                  (i = l == r ? 0 : 0.5 >= n ? h / (l + r) : h / (2 - l - r)),
                  [e, 100 * i, 100 * n]
                );
              }
              function o(t) {
                var e,
                  i,
                  n,
                  o = t[0],
                  a = t[1],
                  s = t[2],
                  r = Math.min(o, a, s),
                  l = Math.max(o, a, s),
                  h = l - r;
                return (
                  (i = 0 == l ? 0 : ((h / l) * 1e3) / 10),
                  l == r
                    ? (e = 0)
                    : o == l
                    ? (e = (a - s) / h)
                    : a == l
                    ? (e = 2 + (s - o) / h)
                    : s == l && (e = 4 + (o - a) / h),
                  (e = Math.min(60 * e, 360)),
                  0 > e && (e += 360),
                  (n = ((l / 255) * 1e3) / 10),
                  [e, i, n]
                );
              }
              function a(t) {
                var e = t[0],
                  i = t[1],
                  o = t[2],
                  a = n(t)[0],
                  s = (1 / 255) * Math.min(e, Math.min(i, o)),
                  o = 1 - (1 / 255) * Math.max(e, Math.max(i, o));
                return [a, 100 * s, 100 * o];
              }
              function s(t) {
                var e,
                  i,
                  n,
                  o,
                  a = t[0] / 255,
                  s = t[1] / 255,
                  r = t[2] / 255;
                return (
                  (o = Math.min(1 - a, 1 - s, 1 - r)),
                  (e = (1 - a - o) / (1 - o) || 0),
                  (i = (1 - s - o) / (1 - o) || 0),
                  (n = (1 - r - o) / (1 - o) || 0),
                  [100 * e, 100 * i, 100 * n, 100 * o]
                );
              }
              function l(t) {
                return Z[JSON.stringify(t)];
              }
              function h(t) {
                var e = t[0] / 255,
                  i = t[1] / 255,
                  n = t[2] / 255;
                (e =
                  e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92),
                  (i =
                    i > 0.04045
                      ? Math.pow((i + 0.055) / 1.055, 2.4)
                      : i / 12.92),
                  (n =
                    n > 0.04045
                      ? Math.pow((n + 0.055) / 1.055, 2.4)
                      : n / 12.92);
                var o = 0.4124 * e + 0.3576 * i + 0.1805 * n,
                  a = 0.2126 * e + 0.7152 * i + 0.0722 * n,
                  s = 0.0193 * e + 0.1192 * i + 0.9505 * n;
                return [100 * o, 100 * a, 100 * s];
              }
              function c(t) {
                var e,
                  i,
                  n,
                  o = h(t),
                  a = o[0],
                  s = o[1],
                  r = o[2];
                return (
                  (a /= 95.047),
                  (s /= 100),
                  (r /= 108.883),
                  (a =
                    a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
                  (s =
                    s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116),
                  (r =
                    r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116),
                  (e = 116 * s - 16),
                  (i = 500 * (a - s)),
                  (n = 200 * (s - r)),
                  [e, i, n]
                );
              }
              function u(t) {
                return R(c(t));
              }
              function d(t) {
                var e,
                  i,
                  n,
                  o,
                  a,
                  s = t[0] / 360,
                  r = t[1] / 100,
                  l = t[2] / 100;
                if (0 == r) return (a = 255 * l), [a, a, a];
                (i = 0.5 > l ? l * (1 + r) : l + r - l * r),
                  (e = 2 * l - i),
                  (o = [0, 0, 0]);
                for (var h = 0; 3 > h; h++)
                  (n = s + (1 / 3) * -(h - 1)),
                    0 > n && n++,
                    n > 1 && n--,
                    (a =
                      1 > 6 * n
                        ? e + 6 * (i - e) * n
                        : 1 > 2 * n
                        ? i
                        : 2 > 3 * n
                        ? e + (i - e) * (2 / 3 - n) * 6
                        : e),
                    (o[h] = 255 * a);
                return o;
              }
              function f(t) {
                var e,
                  i,
                  n = t[0],
                  o = t[1] / 100,
                  a = t[2] / 100;
                return (
                  (a *= 2),
                  (o *= 1 >= a ? a : 2 - a),
                  (i = (a + o) / 2),
                  (e = (2 * o) / (a + o)),
                  [n, 100 * e, 100 * i]
                );
              }
              function p(t) {
                return a(d(t));
              }
              function m(t) {
                return s(d(t));
              }
              function v(t) {
                return l(d(t));
              }
              function y(t) {
                var e = t[0] / 60,
                  i = t[1] / 100,
                  n = t[2] / 100,
                  o = Math.floor(e) % 6,
                  a = e - Math.floor(e),
                  s = 255 * n * (1 - i),
                  r = 255 * n * (1 - i * a),
                  l = 255 * n * (1 - i * (1 - a)),
                  n = 255 * n;
                switch (o) {
                  case 0:
                    return [n, l, s];
                  case 1:
                    return [r, n, s];
                  case 2:
                    return [s, n, l];
                  case 3:
                    return [s, r, n];
                  case 4:
                    return [l, s, n];
                  case 5:
                    return [n, s, r];
                }
              }
              function x(t) {
                var e,
                  i,
                  n = t[0],
                  o = t[1] / 100,
                  a = t[2] / 100;
                return (
                  (i = (2 - o) * a),
                  (e = o * a),
                  (e /= 1 >= i ? i : 2 - i),
                  (e = e || 0),
                  (i /= 2),
                  [n, 100 * e, 100 * i]
                );
              }
              function w(t) {
                return a(y(t));
              }
              function k(t) {
                return s(y(t));
              }
              function S(t) {
                return l(y(t));
              }
              function _(t) {
                var e,
                  i,
                  n,
                  o,
                  a = t[0] / 360,
                  s = t[1] / 100,
                  l = t[2] / 100,
                  h = s + l;
                switch (
                  (h > 1 && ((s /= h), (l /= h)),
                  (e = Math.floor(6 * a)),
                  (i = 1 - l),
                  (n = 6 * a - e),
                  0 != (1 & e) && (n = 1 - n),
                  (o = s + n * (i - s)),
                  e)
                ) {
                  default:
                  case 6:
                  case 0:
                    (r = i), (g = o), (b = s);
                    break;
                  case 1:
                    (r = o), (g = i), (b = s);
                    break;
                  case 2:
                    (r = s), (g = i), (b = o);
                    break;
                  case 3:
                    (r = s), (g = o), (b = i);
                    break;
                  case 4:
                    (r = o), (g = s), (b = i);
                    break;
                  case 5:
                    (r = i), (g = s), (b = o);
                }
                return [255 * r, 255 * g, 255 * b];
              }
              function C(t) {
                return n(_(t));
              }
              function D(t) {
                return o(_(t));
              }
              function T(t) {
                return s(_(t));
              }
              function M(t) {
                return l(_(t));
              }
              function A(t) {
                var e,
                  i,
                  n,
                  o = t[0] / 100,
                  a = t[1] / 100,
                  s = t[2] / 100,
                  r = t[3] / 100;
                return (
                  (e = 1 - Math.min(1, o * (1 - r) + r)),
                  (i = 1 - Math.min(1, a * (1 - r) + r)),
                  (n = 1 - Math.min(1, s * (1 - r) + r)),
                  [255 * e, 255 * i, 255 * n]
                );
              }
              function I(t) {
                return n(A(t));
              }
              function P(t) {
                return o(A(t));
              }
              function F(t) {
                return a(A(t));
              }
              function L(t) {
                return l(A(t));
              }
              function N(t) {
                var e,
                  i,
                  n,
                  o = t[0] / 100,
                  a = t[1] / 100,
                  s = t[2] / 100;
                return (
                  (e = 3.2406 * o + -1.5372 * a + s * -0.4986),
                  (i = o * -0.9689 + 1.8758 * a + 0.0415 * s),
                  (n = 0.0557 * o + a * -0.204 + 1.057 * s),
                  (e =
                    e > 0.0031308
                      ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                      : (e = 12.92 * e)),
                  (i =
                    i > 0.0031308
                      ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055
                      : (i = 12.92 * i)),
                  (n =
                    n > 0.0031308
                      ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                      : (n = 12.92 * n)),
                  (e = Math.min(Math.max(0, e), 1)),
                  (i = Math.min(Math.max(0, i), 1)),
                  (n = Math.min(Math.max(0, n), 1)),
                  [255 * e, 255 * i, 255 * n]
                );
              }
              function E(t) {
                var e,
                  i,
                  n,
                  o = t[0],
                  a = t[1],
                  s = t[2];
                return (
                  (o /= 95.047),
                  (a /= 100),
                  (s /= 108.883),
                  (o =
                    o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
                  (a =
                    a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
                  (s =
                    s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116),
                  (e = 116 * a - 16),
                  (i = 500 * (o - a)),
                  (n = 200 * (a - s)),
                  [e, i, n]
                );
              }
              function O(t) {
                return R(E(t));
              }
              function W(t) {
                var e,
                  i,
                  n,
                  o,
                  a = t[0],
                  s = t[1],
                  r = t[2];
                return (
                  8 >= a
                    ? ((i = (100 * a) / 903.3),
                      (o = 7.787 * (i / 100) + 16 / 116))
                    : ((i = 100 * Math.pow((a + 16) / 116, 3)),
                      (o = Math.pow(i / 100, 1 / 3))),
                  (e =
                    0.008856 >= e / 95.047
                      ? (e = (95.047 * (s / 500 + o - 16 / 116)) / 7.787)
                      : 95.047 * Math.pow(s / 500 + o, 3)),
                  (n =
                    0.008859 >= n / 108.883
                      ? (n = (108.883 * (o - r / 200 - 16 / 116)) / 7.787)
                      : 108.883 * Math.pow(o - r / 200, 3)),
                  [e, i, n]
                );
              }
              function R(t) {
                var e,
                  i,
                  n,
                  o = t[0],
                  a = t[1],
                  s = t[2];
                return (
                  (e = Math.atan2(s, a)),
                  (i = (360 * e) / 2 / Math.PI),
                  0 > i && (i += 360),
                  (n = Math.sqrt(a * a + s * s)),
                  [o, n, i]
                );
              }
              function z(t) {
                return N(W(t));
              }
              function H(t) {
                var e,
                  i,
                  n,
                  o = t[0],
                  a = t[1],
                  s = t[2];
                return (
                  (n = (s / 360) * 2 * Math.PI),
                  (e = a * Math.cos(n)),
                  (i = a * Math.sin(n)),
                  [o, e, i]
                );
              }
              function V(t) {
                return W(H(t));
              }
              function B(t) {
                return z(H(t));
              }
              function j(t) {
                return Q[t];
              }
              function Y(t) {
                return n(j(t));
              }
              function q(t) {
                return o(j(t));
              }
              function U(t) {
                return a(j(t));
              }
              function $(t) {
                return s(j(t));
              }
              function G(t) {
                return c(j(t));
              }
              function X(t) {
                return h(j(t));
              }
              e.exports = {
                rgb2hsl: n,
                rgb2hsv: o,
                rgb2hwb: a,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: h,
                rgb2lab: c,
                rgb2lch: u,
                hsl2rgb: d,
                hsl2hsv: f,
                hsl2hwb: p,
                hsl2cmyk: m,
                hsl2keyword: v,
                hsv2rgb: y,
                hsv2hsl: x,
                hsv2hwb: w,
                hsv2cmyk: k,
                hsv2keyword: S,
                hwb2rgb: _,
                hwb2hsl: C,
                hwb2hsv: D,
                hwb2cmyk: T,
                hwb2keyword: M,
                cmyk2rgb: A,
                cmyk2hsl: I,
                cmyk2hsv: P,
                cmyk2hwb: F,
                cmyk2keyword: L,
                keyword2rgb: j,
                keyword2hsl: Y,
                keyword2hsv: q,
                keyword2hwb: U,
                keyword2cmyk: $,
                keyword2lab: G,
                keyword2xyz: X,
                xyz2rgb: N,
                xyz2lab: E,
                xyz2lch: O,
                lab2xyz: W,
                lab2rgb: z,
                lab2lch: R,
                lch2lab: H,
                lch2xyz: V,
                lch2rgb: B,
              };
              var Q = {
                  aliceblue: [240, 248, 255],
                  antiquewhite: [250, 235, 215],
                  aqua: [0, 255, 255],
                  aquamarine: [127, 255, 212],
                  azure: [240, 255, 255],
                  beige: [245, 245, 220],
                  bisque: [255, 228, 196],
                  black: [0, 0, 0],
                  blanchedalmond: [255, 235, 205],
                  blue: [0, 0, 255],
                  blueviolet: [138, 43, 226],
                  brown: [165, 42, 42],
                  burlywood: [222, 184, 135],
                  cadetblue: [95, 158, 160],
                  chartreuse: [127, 255, 0],
                  chocolate: [210, 105, 30],
                  coral: [255, 127, 80],
                  cornflowerblue: [100, 149, 237],
                  cornsilk: [255, 248, 220],
                  crimson: [220, 20, 60],
                  cyan: [0, 255, 255],
                  darkblue: [0, 0, 139],
                  darkcyan: [0, 139, 139],
                  darkgoldenrod: [184, 134, 11],
                  darkgray: [169, 169, 169],
                  darkgreen: [0, 100, 0],
                  darkgrey: [169, 169, 169],
                  darkkhaki: [189, 183, 107],
                  darkmagenta: [139, 0, 139],
                  darkolivegreen: [85, 107, 47],
                  darkorange: [255, 140, 0],
                  darkorchid: [153, 50, 204],
                  darkred: [139, 0, 0],
                  darksalmon: [233, 150, 122],
                  darkseagreen: [143, 188, 143],
                  darkslateblue: [72, 61, 139],
                  darkslategray: [47, 79, 79],
                  darkslategrey: [47, 79, 79],
                  darkturquoise: [0, 206, 209],
                  darkviolet: [148, 0, 211],
                  deeppink: [255, 20, 147],
                  deepskyblue: [0, 191, 255],
                  dimgray: [105, 105, 105],
                  dimgrey: [105, 105, 105],
                  dodgerblue: [30, 144, 255],
                  firebrick: [178, 34, 34],
                  floralwhite: [255, 250, 240],
                  forestgreen: [34, 139, 34],
                  fuchsia: [255, 0, 255],
                  gainsboro: [220, 220, 220],
                  ghostwhite: [248, 248, 255],
                  gold: [255, 215, 0],
                  goldenrod: [218, 165, 32],
                  gray: [128, 128, 128],
                  green: [0, 128, 0],
                  greenyellow: [173, 255, 47],
                  grey: [128, 128, 128],
                  honeydew: [240, 255, 240],
                  hotpink: [255, 105, 180],
                  indianred: [205, 92, 92],
                  indigo: [75, 0, 130],
                  ivory: [255, 255, 240],
                  khaki: [240, 230, 140],
                  lavender: [230, 230, 250],
                  lavenderblush: [255, 240, 245],
                  lawngreen: [124, 252, 0],
                  lemonchiffon: [255, 250, 205],
                  lightblue: [173, 216, 230],
                  lightcoral: [240, 128, 128],
                  lightcyan: [224, 255, 255],
                  lightgoldenrodyellow: [250, 250, 210],
                  lightgray: [211, 211, 211],
                  lightgreen: [144, 238, 144],
                  lightgrey: [211, 211, 211],
                  lightpink: [255, 182, 193],
                  lightsalmon: [255, 160, 122],
                  lightseagreen: [32, 178, 170],
                  lightskyblue: [135, 206, 250],
                  lightslategray: [119, 136, 153],
                  lightslategrey: [119, 136, 153],
                  lightsteelblue: [176, 196, 222],
                  lightyellow: [255, 255, 224],
                  lime: [0, 255, 0],
                  limegreen: [50, 205, 50],
                  linen: [250, 240, 230],
                  magenta: [255, 0, 255],
                  maroon: [128, 0, 0],
                  mediumaquamarine: [102, 205, 170],
                  mediumblue: [0, 0, 205],
                  mediumorchid: [186, 85, 211],
                  mediumpurple: [147, 112, 219],
                  mediumseagreen: [60, 179, 113],
                  mediumslateblue: [123, 104, 238],
                  mediumspringgreen: [0, 250, 154],
                  mediumturquoise: [72, 209, 204],
                  mediumvioletred: [199, 21, 133],
                  midnightblue: [25, 25, 112],
                  mintcream: [245, 255, 250],
                  mistyrose: [255, 228, 225],
                  moccasin: [255, 228, 181],
                  navajowhite: [255, 222, 173],
                  navy: [0, 0, 128],
                  oldlace: [253, 245, 230],
                  olive: [128, 128, 0],
                  olivedrab: [107, 142, 35],
                  orange: [255, 165, 0],
                  orangered: [255, 69, 0],
                  orchid: [218, 112, 214],
                  palegoldenrod: [238, 232, 170],
                  palegreen: [152, 251, 152],
                  paleturquoise: [175, 238, 238],
                  palevioletred: [219, 112, 147],
                  papayawhip: [255, 239, 213],
                  peachpuff: [255, 218, 185],
                  peru: [205, 133, 63],
                  pink: [255, 192, 203],
                  plum: [221, 160, 221],
                  powderblue: [176, 224, 230],
                  purple: [128, 0, 128],
                  rebeccapurple: [102, 51, 153],
                  red: [255, 0, 0],
                  rosybrown: [188, 143, 143],
                  royalblue: [65, 105, 225],
                  saddlebrown: [139, 69, 19],
                  salmon: [250, 128, 114],
                  sandybrown: [244, 164, 96],
                  seagreen: [46, 139, 87],
                  seashell: [255, 245, 238],
                  sienna: [160, 82, 45],
                  silver: [192, 192, 192],
                  skyblue: [135, 206, 235],
                  slateblue: [106, 90, 205],
                  slategray: [112, 128, 144],
                  slategrey: [112, 128, 144],
                  snow: [255, 250, 250],
                  springgreen: [0, 255, 127],
                  steelblue: [70, 130, 180],
                  tan: [210, 180, 140],
                  teal: [0, 128, 128],
                  thistle: [216, 191, 216],
                  tomato: [255, 99, 71],
                  turquoise: [64, 224, 208],
                  violet: [238, 130, 238],
                  wheat: [245, 222, 179],
                  white: [255, 255, 255],
                  whitesmoke: [245, 245, 245],
                  yellow: [255, 255, 0],
                  yellowgreen: [154, 205, 50],
                },
                Z = {};
              for (var J in Q) Z[JSON.stringify(Q[J])] = J;
            },
            {},
          ],
          3: [
            function (t, e, i) {
              var n = t("./conversions"),
                o = function () {
                  return new h();
                };
              for (var a in n) {
                o[a + "Raw"] = (function (t) {
                  return function (e) {
                    return (
                      "number" == typeof e &&
                        (e = Array.prototype.slice.call(arguments)),
                      n[t](e)
                    );
                  };
                })(a);
                var s = /(\w+)2(\w+)/.exec(a),
                  r = s[1],
                  l = s[2];
                (o[r] = o[r] || {}),
                  (o[r][l] = o[a] = (function (t) {
                    return function (e) {
                      "number" == typeof e &&
                        (e = Array.prototype.slice.call(arguments));
                      var i = n[t](e);
                      if ("string" == typeof i || void 0 === i) return i;
                      for (var o = 0; o < i.length; o++)
                        i[o] = Math.round(i[o]);
                      return i;
                    };
                  })(a));
              }
              var h = function () {
                this.convs = {};
              };
              (h.prototype.routeSpace = function (t, e) {
                var i = e[0];
                return void 0 === i
                  ? this.getValues(t)
                  : ("number" == typeof i &&
                      (i = Array.prototype.slice.call(e)),
                    this.setValues(t, i));
              }),
                (h.prototype.setValues = function (t, e) {
                  return (
                    (this.space = t),
                    (this.convs = {}),
                    (this.convs[t] = e),
                    this
                  );
                }),
                (h.prototype.getValues = function (t) {
                  var e = this.convs[t];
                  if (!e) {
                    var i = this.space,
                      n = this.convs[i];
                    (e = o[i][t](n)), (this.convs[t] = e);
                  }
                  return e;
                }),
                ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
                  h.prototype[t] = function (e) {
                    return this.routeSpace(t, arguments);
                  };
                }),
                (e.exports = o);
            },
            { "./conversions": 2 },
          ],
          4: [
            function (t, e, i) {
              function n(t) {
                if (t) {
                  var e = /^#([a-fA-F0-9]{3})$/,
                    i = /^#([a-fA-F0-9]{6})$/,
                    n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    a = /(\w+)/,
                    s = [0, 0, 0],
                    r = 1,
                    l = t.match(e);
                  if (l) {
                    l = l[1];
                    for (var h = 0; h < s.length; h++)
                      s[h] = parseInt(l[h] + l[h], 16);
                  } else if ((l = t.match(i))) {
                    l = l[1];
                    for (var h = 0; h < s.length; h++)
                      s[h] = parseInt(l.slice(2 * h, 2 * h + 2), 16);
                  } else if ((l = t.match(n))) {
                    for (var h = 0; h < s.length; h++)
                      s[h] = parseInt(l[h + 1]);
                    r = parseFloat(l[4]);
                  } else if ((l = t.match(o))) {
                    for (var h = 0; h < s.length; h++)
                      s[h] = Math.round(2.55 * parseFloat(l[h + 1]));
                    r = parseFloat(l[4]);
                  } else if ((l = t.match(a))) {
                    if ("transparent" == l[1]) return [0, 0, 0, 0];
                    if (((s = x[l[1]]), !s)) return;
                  }
                  for (var h = 0; h < s.length; h++) s[h] = y(s[h], 0, 255);
                  return (r = r || 0 == r ? y(r, 0, 1) : 1), (s[3] = r), s;
                }
              }
              function o(t) {
                if (t) {
                  var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    i = t.match(e);
                  if (i) {
                    var n = parseFloat(i[4]),
                      o = y(parseInt(i[1]), 0, 360),
                      a = y(parseFloat(i[2]), 0, 100),
                      s = y(parseFloat(i[3]), 0, 100),
                      r = y(isNaN(n) ? 1 : n, 0, 1);
                    return [o, a, s, r];
                  }
                }
              }
              function a(t) {
                if (t) {
                  var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    i = t.match(e);
                  if (i) {
                    var n = parseFloat(i[4]),
                      o = y(parseInt(i[1]), 0, 360),
                      a = y(parseFloat(i[2]), 0, 100),
                      s = y(parseFloat(i[3]), 0, 100),
                      r = y(isNaN(n) ? 1 : n, 0, 1);
                    return [o, a, s, r];
                  }
                }
              }
              function s(t) {
                var e = n(t);
                return e && e.slice(0, 3);
              }
              function r(t) {
                var e = o(t);
                return e && e.slice(0, 3);
              }
              function l(t) {
                var e = n(t);
                return e
                  ? e[3]
                  : (e = o(t))
                  ? e[3]
                  : (e = a(t))
                  ? e[3]
                  : void 0;
              }
              function h(t) {
                return "#" + b(t[0]) + b(t[1]) + b(t[2]);
              }
              function c(t, e) {
                return 1 > e || (t[3] && t[3] < 1)
                  ? u(t, e)
                  : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
              }
              function u(t, e) {
                return (
                  void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                  "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                );
              }
              function d(t, e) {
                if (1 > e || (t[3] && t[3] < 1)) return f(t, e);
                var i = Math.round((t[0] / 255) * 100),
                  n = Math.round((t[1] / 255) * 100),
                  o = Math.round((t[2] / 255) * 100);
                return "rgb(" + i + "%, " + n + "%, " + o + "%)";
              }
              function f(t, e) {
                var i = Math.round((t[0] / 255) * 100),
                  n = Math.round((t[1] / 255) * 100),
                  o = Math.round((t[2] / 255) * 100);
                return (
                  "rgba(" +
                  i +
                  "%, " +
                  n +
                  "%, " +
                  o +
                  "%, " +
                  (e || t[3] || 1) +
                  ")"
                );
              }
              function p(t, e) {
                return 1 > e || (t[3] && t[3] < 1)
                  ? m(t, e)
                  : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
              }
              function m(t, e) {
                return (
                  void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                  "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                );
              }
              function g(t, e) {
                return (
                  void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                  "hwb(" +
                    t[0] +
                    ", " +
                    t[1] +
                    "%, " +
                    t[2] +
                    "%" +
                    (void 0 !== e && 1 !== e ? ", " + e : "") +
                    ")"
                );
              }
              function v(t) {
                return w[t.slice(0, 3)];
              }
              function y(t, e, i) {
                return Math.min(Math.max(e, t), i);
              }
              function b(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e;
              }
              var x = t("color-name");
              e.exports = {
                getRgba: n,
                getHsla: o,
                getRgb: s,
                getHsl: r,
                getHwb: a,
                getAlpha: l,
                hexString: h,
                rgbString: c,
                rgbaString: u,
                percentString: d,
                percentaString: f,
                hslString: p,
                hslaString: m,
                hwbString: g,
                keyword: v,
              };
              var w = {};
              for (var k in x) w[x[k]] = k;
            },
            { "color-name": 5 },
          ],
          5: [
            function (t, e, i) {
              e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50],
              };
            },
            {},
          ],
        },
        {},
        [1]
      ),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = function (t, e) {
            (this.config = e),
              t.length && t[0].getContext && (t = t[0]),
              t.getContext && (t = t.getContext("2d")),
              (this.ctx = t),
              (this.canvas = t.canvas),
              (this.width =
                t.canvas.width ||
                parseInt(i.helpers.getStyle(t.canvas, "width")) ||
                i.helpers.getMaximumWidth(t.canvas)),
              (this.height =
                t.canvas.height ||
                parseInt(i.helpers.getStyle(t.canvas, "height")) ||
                i.helpers.getMaximumHeight(t.canvas)),
              (this.aspectRatio = this.width / this.height),
              (isNaN(this.aspectRatio) || isFinite(this.aspectRatio) === !1) &&
                (this.aspectRatio =
                  void 0 !== e.aspectRatio ? e.aspectRatio : 2),
              (this.originalCanvasStyleWidth = t.canvas.style.width),
              (this.originalCanvasStyleHeight = t.canvas.style.height),
              i.helpers.retinaScale(this),
              e && (this.controller = new i.Controller(this));
            var n = this;
            return (
              i.helpers.addResizeListener(t.canvas.parentNode, function () {
                n.controller &&
                  n.controller.config.options.responsive &&
                  n.controller.resize();
              }),
              this.controller ? this.controller : this
            );
          };
        (i.defaults = {
          global: {
            responsive: !0,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: !0,
            events: [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ],
            hover: { onHover: null, mode: "single", animationDuration: 400 },
            onClick: null,
            defaultColor: "rgba(0,0,0,0.1)",
            elements: {},
            legendCallback: function (t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              for (var i = 0; i < t.data.datasets.length; i++)
                e.push(
                  '<li><span style="background-color:' +
                    t.data.datasets[i].backgroundColor +
                    '">'
                ),
                  t.data.datasets[i].label && e.push(t.data.datasets[i].label),
                  e.push("</span></li>");
              return e.push("</ul>"), e.join("");
            },
          },
        }),
          (t.Chart = i),
          (i.noConflict = function () {
            return (t.Chart = e), i;
          });
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = (e.helpers = {});
        (i.each = function (t, e, n, o) {
          var a, s;
          if (i.isArray(t))
            if (((s = t.length), o))
              for (a = s - 1; a >= 0; a--) e.call(n, t[a], a);
            else for (a = 0; a < s; a++) e.call(n, t[a], a);
          else if ("object" == typeof t) {
            var r = Object.keys(t);
            for (s = r.length, a = 0; a < s; a++) e.call(n, t[r[a]], r[a]);
          }
        }),
          (i.clone = function (t) {
            var e = {};
            return (
              i.each(t, function (n, o) {
                t.hasOwnProperty(o) &&
                  (i.isArray(n)
                    ? (e[o] = n.slice(0))
                    : "object" == typeof n && null !== n
                    ? (e[o] = i.clone(n))
                    : (e[o] = n));
              }),
              e
            );
          }),
          (i.extend = function (t) {
            for (var e = arguments.length, n = [], o = 1; o < e; o++)
              n.push(arguments[o]);
            return (
              i.each(n, function (e) {
                i.each(e, function (i, n) {
                  e.hasOwnProperty(n) && (t[n] = i);
                });
              }),
              t
            );
          }),
          (i.configMerge = function (t) {
            var n = i.clone(t);
            return (
              i.each(Array.prototype.slice.call(arguments, 1), function (t) {
                i.each(t, function (o, a) {
                  if (t.hasOwnProperty(a))
                    if ("scales" === a)
                      n[a] = i.scaleMerge(n.hasOwnProperty(a) ? n[a] : {}, o);
                    else if ("scale" === a)
                      n[a] = i.configMerge(
                        n.hasOwnProperty(a) ? n[a] : {},
                        e.scaleService.getScaleDefaults(o.type),
                        o
                      );
                    else if (
                      n.hasOwnProperty(a) &&
                      i.isArray(n[a]) &&
                      i.isArray(o)
                    ) {
                      var s = n[a];
                      i.each(o, function (t, e) {
                        e < s.length
                          ? "object" == typeof s[e] &&
                            null !== s[e] &&
                            "object" == typeof t &&
                            null !== t
                            ? (s[e] = i.configMerge(s[e], t))
                            : (s[e] = t)
                          : s.push(t);
                      });
                    } else
                      n.hasOwnProperty(a) &&
                      "object" == typeof n[a] &&
                      null !== n[a] &&
                      "object" == typeof o
                        ? (n[a] = i.configMerge(n[a], o))
                        : (n[a] = o);
                });
              }),
              n
            );
          }),
          (i.extendDeep = function (t) {
            function e(t) {
              return (
                i.each(arguments, function (n) {
                  n !== t &&
                    i.each(n, function (i, n) {
                      t[n] && t[n].constructor && t[n].constructor === Object
                        ? e(t[n], i)
                        : (t[n] = i);
                    });
                }),
                t
              );
            }
            return e.apply(this, arguments);
          }),
          (i.scaleMerge = function (t, n) {
            var o = i.clone(t);
            return (
              i.each(n, function (t, a) {
                n.hasOwnProperty(a) &&
                  ("xAxes" === a || "yAxes" === a
                    ? o.hasOwnProperty(a)
                      ? i.each(t, function (t, n) {
                          n >= o[a].length || !o[a][n].type
                            ? o[a].push(
                                i.configMerge(
                                  t.type
                                    ? e.scaleService.getScaleDefaults(t.type)
                                    : {},
                                  t
                                )
                              )
                            : t.type !== o[a][n].type
                            ? (o[a][n] = i.configMerge(
                                o[a][n],
                                t.type
                                  ? e.scaleService.getScaleDefaults(t.type)
                                  : {},
                                t
                              ))
                            : (o[a][n] = i.configMerge(o[a][n], t));
                        })
                      : ((o[a] = []),
                        i.each(t, function (t) {
                          o[a].push(
                            i.configMerge(
                              t.type
                                ? e.scaleService.getScaleDefaults(t.type)
                                : {},
                              t
                            )
                          );
                        }))
                    : o.hasOwnProperty(a) &&
                      "object" == typeof o[a] &&
                      null !== o[a] &&
                      "object" == typeof t
                    ? (o[a] = i.configMerge(o[a], t))
                    : (o[a] = t));
              }),
              o
            );
          }),
          (i.getValueAtIndexOrDefault = function (t, e, n) {
            return void 0 === t || null === t
              ? n
              : i.isArray(t)
              ? e < t.length
                ? t[e]
                : n
              : t;
          }),
          (i.getValueOrDefault = function (t, e) {
            return void 0 === t ? e : t;
          }),
          (i.indexOf = function (t, e) {
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
            return -1;
          }),
          (i.where = function (t, e) {
            var n = [];
            return (
              i.each(t, function (t) {
                e(t) && n.push(t);
              }),
              n
            );
          }),
          (i.findNextWhere = function (t, e, i) {
            (void 0 !== i && null !== i) || (i = -1);
            for (var n = i + 1; n < t.length; n++) {
              var o = t[n];
              if (e(o)) return o;
            }
          }),
          (i.findPreviousWhere = function (t, e, i) {
            (void 0 !== i && null !== i) || (i = t.length);
            for (var n = i - 1; n >= 0; n--) {
              var o = t[n];
              if (e(o)) return o;
            }
          }),
          (i.inherits = function (t) {
            var e = this,
              n =
                t && t.hasOwnProperty("constructor")
                  ? t.constructor
                  : function () {
                      return e.apply(this, arguments);
                    },
              o = function () {
                this.constructor = n;
              };
            return (
              (o.prototype = e.prototype),
              (n.prototype = new o()),
              (n.extend = i.inherits),
              t && i.extend(n.prototype, t),
              (n.__super__ = e.prototype),
              n
            );
          }),
          (i.noop = function () {}),
          (i.uid = (function () {
            var t = 0;
            return function () {
              return "chart-" + t++;
            };
          })()),
          (i.warn = function (t) {
            console && "function" == typeof console.warn && console.warn(t);
          }),
          (i.isNumber = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
          }),
          (i.max = function (t) {
            return t.reduce(function (t, e) {
              return isNaN(e) ? t : Math.max(t, e);
            }, Number.NEGATIVE_INFINITY);
          }),
          (i.min = function (t) {
            return t.reduce(function (t, e) {
              return isNaN(e) ? t : Math.min(t, e);
            }, Number.POSITIVE_INFINITY);
          }),
          (i.sign = function (t) {
            return Math.sign
              ? Math.sign(t)
              : ((t = +t), 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1);
          }),
          (i.log10 = function (t) {
            return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
          }),
          (i.toRadians = function (t) {
            return t * (Math.PI / 180);
          }),
          (i.toDegrees = function (t) {
            return t * (180 / Math.PI);
          }),
          (i.getAngleFromPoint = function (t, e) {
            var i = e.x - t.x,
              n = e.y - t.y,
              o = Math.sqrt(i * i + n * n),
              a = Math.atan2(n, i);
            return (
              a < -0.5 * Math.PI && (a += 2 * Math.PI),
              { angle: a, distance: o }
            );
          }),
          (i.aliasPixel = function (t) {
            return t % 2 === 0 ? 0 : 0.5;
          }),
          (i.splineCurve = function (t, e, i, n) {
            var o = t.skip ? e : t,
              a = e,
              s = i.skip ? e : i,
              r = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
              l = Math.sqrt(Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2)),
              h = r / (r + l),
              c = l / (r + l);
            (h = isNaN(h) ? 0 : h), (c = isNaN(c) ? 0 : c);
            var u = n * h,
              d = n * c;
            return {
              previous: { x: a.x - u * (s.x - o.x), y: a.y - u * (s.y - o.y) },
              next: { x: a.x + d * (s.x - o.x), y: a.y + d * (s.y - o.y) },
            };
          }),
          (i.nextItem = function (t, e, i) {
            return i
              ? e >= t.length - 1
                ? t[0]
                : t[e + 1]
              : e >= t.length - 1
              ? t[t.length - 1]
              : t[e + 1];
          }),
          (i.previousItem = function (t, e, i) {
            return i
              ? e <= 0
                ? t[t.length - 1]
                : t[e - 1]
              : e <= 0
              ? t[0]
              : t[e - 1];
          }),
          (i.niceNum = function (t, e) {
            var n,
              o = Math.floor(i.log10(t)),
              a = t / Math.pow(10, o);
            return (
              (n = e
                ? a < 1.5
                  ? 1
                  : a < 3
                  ? 2
                  : a < 7
                  ? 5
                  : 10
                : a <= 1
                ? 1
                : a <= 2
                ? 2
                : a <= 5
                ? 5
                : 10),
              n * Math.pow(10, o)
            );
          });
        var n = (i.easingEffects = {
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return -1 * t * (t - 2);
          },
          easeInOutQuad: function (t) {
            return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
          },
          easeInOutCubic: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t
              : 0.5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
          },
          easeInOutQuart: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function (t) {
            return 1 * (t /= 1) * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
          },
          easeInOutQuint: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function (t) {
            return -1 * Math.cos((t / 1) * (Math.PI / 2)) + 1;
          },
          easeOutSine: function (t) {
            return 1 * Math.sin((t / 1) * (Math.PI / 2));
          },
          easeInOutSine: function (t) {
            return -0.5 * (Math.cos((Math.PI * t) / 1) - 1);
          },
          easeInExpo: function (t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
          },
          easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, (-10 * t) / 1) + 1);
          },
          easeInOutExpo: function (t) {
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (t /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (t - 1))
              : 0.5 * (-Math.pow(2, -10 * --t) + 2);
          },
          easeInCirc: function (t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
          },
          easeOutCirc: function (t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
          },
          easeInOutCirc: function (t) {
            return (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function (t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t
              ? 0
              : 1 == (t /= 1)
              ? 1
              : (i || (i = 0.3),
                n < Math.abs(1)
                  ? ((n = 1), (e = i / 4))
                  : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                -(
                  n *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((1 * t - e) * (2 * Math.PI)) / i)
                ));
          },
          easeOutElastic: function (t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t
              ? 0
              : 1 == (t /= 1)
              ? 1
              : (i || (i = 0.3),
                n < Math.abs(1)
                  ? ((n = 1), (e = i / 4))
                  : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                n *
                  Math.pow(2, -10 * t) *
                  Math.sin(((1 * t - e) * (2 * Math.PI)) / i) +
                  1);
          },
          easeInOutElastic: function (t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t
              ? 0
              : 2 == (t /= 0.5)
              ? 1
              : (i || (i = 1 * (0.3 * 1.5)),
                n < Math.abs(1)
                  ? ((n = 1), (e = i / 4))
                  : (e = (i / (2 * Math.PI)) * Math.asin(1 / n)),
                t < 1
                  ? -0.5 *
                    (n *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((1 * t - e) * (2 * Math.PI)) / i))
                  : n *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((1 * t - e) * (2 * Math.PI)) / i) *
                      0.5 +
                    1);
          },
          easeInBack: function (t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e);
          },
          easeOutBack: function (t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
          },
          easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= 0.5) < 1
              ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
              : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
          },
          easeInBounce: function (t) {
            return 1 - n.easeOutBounce(1 - t);
          },
          easeOutBounce: function (t) {
            return (t /= 1) < 1 / 2.75
              ? 1 * (7.5625 * t * t)
              : t < 2 / 2.75
              ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
              : t < 2.5 / 2.75
              ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
              : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
          },
          easeInOutBounce: function (t) {
            return t < 0.5
              ? 0.5 * n.easeInBounce(2 * t)
              : 0.5 * n.easeOutBounce(2 * t - 1) + 0.5;
          },
        });
        (i.requestAnimFrame = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (t) {
              return window.setTimeout(t, 1e3 / 60);
            }
          );
        })()),
          (i.cancelAnimFrame = (function () {
            return (
              window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              window.oCancelAnimationFrame ||
              window.msCancelAnimationFrame ||
              function (t) {
                return window.clearTimeout(t, 1e3 / 60);
              }
            );
          })()),
          (i.getRelativePosition = function (t, e) {
            var i,
              n,
              o = t.originalEvent || t,
              a = t.currentTarget || t.srcElement,
              s = a.getBoundingClientRect();
            return (
              o.touches && o.touches.length > 0
                ? ((i = o.touches[0].clientX), (n = o.touches[0].clientY))
                : ((i = o.clientX), (n = o.clientY)),
              (i = Math.round(
                (((i - s.left) / (s.right - s.left)) * a.width) /
                  e.currentDevicePixelRatio
              )),
              (n = Math.round(
                (((n - s.top) / (s.bottom - s.top)) * a.height) /
                  e.currentDevicePixelRatio
              )),
              { x: i, y: n }
            );
          }),
          (i.addEvent = function (t, e, i) {
            t.addEventListener
              ? t.addEventListener(e, i)
              : t.attachEvent
              ? t.attachEvent("on" + e, i)
              : (t["on" + e] = i);
          }),
          (i.removeEvent = function (t, e, n) {
            t.removeEventListener
              ? t.removeEventListener(e, n, !1)
              : t.detachEvent
              ? t.detachEvent("on" + e, n)
              : (t["on" + e] = i.noop);
          }),
          (i.bindEvents = function (t, e, n) {
            t.events || (t.events = {}),
              i.each(e, function (e) {
                (t.events[e] = function () {
                  n.apply(t, arguments);
                }),
                  i.addEvent(t.chart.canvas, e, t.events[e]);
              });
          }),
          (i.unbindEvents = function (t, e) {
            i.each(e, function (e, n) {
              i.removeEvent(t.chart.canvas, n, e);
            });
          }),
          (i.getConstraintWidth = function (t) {
            var e,
              i = document.defaultView.getComputedStyle(t)["max-width"],
              n = document.defaultView.getComputedStyle(t.parentNode)[
                "max-width"
              ],
              o = null !== i && "none" !== i,
              a = null !== n && "none" !== n;
            return (
              (o || a) &&
                (e = Math.min(
                  o ? parseInt(i, 10) : Number.POSITIVE_INFINITY,
                  a ? parseInt(n, 10) : Number.POSITIVE_INFINITY
                )),
              e
            );
          }),
          (i.getConstraintHeight = function (t) {
            var e,
              i = document.defaultView.getComputedStyle(t)["max-height"],
              n = document.defaultView.getComputedStyle(t.parentNode)[
                "max-height"
              ],
              o = null !== i && "none" !== i,
              a = null !== n && "none" !== n;
            return (
              (i || n) &&
                (e = Math.min(
                  o ? parseInt(i, 10) : Number.POSITIVE_INFINITY,
                  a ? parseInt(n, 10) : Number.POSITIVE_INFINITY
                )),
              e
            );
          }),
          (i.getMaximumWidth = function (t) {
            var e = t.parentNode,
              n =
                parseInt(i.getStyle(e, "padding-left")) +
                parseInt(i.getStyle(e, "padding-right")),
              o = e.clientWidth - n,
              a = i.getConstraintWidth(t);
            return void 0 !== a && (o = Math.min(o, a)), o;
          }),
          (i.getMaximumHeight = function (t) {
            var e = t.parentNode,
              n =
                parseInt(i.getStyle(e, "padding-top")) +
                parseInt(i.getStyle(e, "padding-bottom")),
              o = e.clientHeight - n,
              a = i.getConstraintHeight(t);
            return void 0 !== a && (o = Math.min(o, a)), o;
          }),
          (i.getStyle = function (t, e) {
            return t.currentStyle
              ? t.currentStyle[e]
              : document.defaultView
                  .getComputedStyle(t, null)
                  .getPropertyValue(e);
          }),
          (i.retinaScale = function (t) {
            var e = t.ctx,
              i = t.canvas.width,
              n = t.canvas.height,
              o = (t.currentDevicePixelRatio = window.devicePixelRatio || 1);
            1 !== o &&
              ((e.canvas.height = n * o),
              (e.canvas.width = i * o),
              e.scale(o, o),
              (e.canvas.style.width = i + "px"),
              (e.canvas.style.height = n + "px"),
              (t.originalDevicePixelRatio = t.originalDevicePixelRatio || o));
          }),
          (i.clear = function (t) {
            t.ctx.clearRect(0, 0, t.width, t.height);
          }),
          (i.fontString = function (t, e, i) {
            return e + " " + t + "px " + i;
          }),
          (i.longestText = function (t, e, n, o) {
            (o = o || {}),
              (o.data = o.data || {}),
              (o.garbageCollect = o.garbageCollect || []),
              o.font !== e &&
                ((o.data = {}), (o.garbageCollect = []), (o.font = e)),
              (t.font = e);
            var a = 0;
            i.each(n, function (e) {
              var i = o.data[e];
              i ||
                ((i = o.data[e] = t.measureText(e).width),
                o.garbageCollect.push(e)),
                i > a && (a = i);
            });
            var s = o.garbageCollect.length / 2;
            if (s > n.length)
              for (var r = 0; r < s; r++) {
                var l = o.garbageCollect.shift();
                delete o.data[l];
              }
            return a;
          }),
          (i.drawRoundedRectangle = function (t, e, i, n, o, a) {
            t.beginPath(),
              t.moveTo(e + a, i),
              t.lineTo(e + n - a, i),
              t.quadraticCurveTo(e + n, i, e + n, i + a),
              t.lineTo(e + n, i + o - a),
              t.quadraticCurveTo(e + n, i + o, e + n - a, i + o),
              t.lineTo(e + a, i + o),
              t.quadraticCurveTo(e, i + o, e, i + o - a),
              t.lineTo(e, i + a),
              t.quadraticCurveTo(e, i, e + a, i),
              t.closePath();
          }),
          (i.color = function (e) {
            return t.Color
              ? t.Color(e)
              : (console.log("Color.js not found!"), e);
          }),
          (i.addResizeListener = function (t, e) {
            var i = document.createElement("iframe"),
              n = "chartjs-hidden-iframe";
            i.classlist ? i.classlist.add(n) : i.setAttribute("class", n),
              (i.style.width = "100%"),
              (i.style.display = "block"),
              (i.style.border = 0),
              (i.style.height = 0),
              (i.style.margin = 0),
              (i.style.position = "absolute"),
              (i.style.left = 0),
              (i.style.right = 0),
              (i.style.top = 0),
              (i.style.bottom = 0),
              t.insertBefore(i, t.firstChild);
            (i.contentWindow || i).onresize = function () {
              e && e();
            };
          }),
          (i.removeResizeListener = function (t) {
            var e = t.querySelector(".chartjs-hidden-iframe");
            e && e.parentNode.removeChild(e);
          }),
          (i.isArray = function (t) {
            return Array.isArray
              ? Array.isArray(t)
              : "[object Array]" === Object.prototype.toString.call(arg);
          }),
          (i.isDatasetVisible = function (t) {
            return !t.hidden;
          }),
          (i.callCallback = function (t, e, i) {
            t && "function" == typeof t.call && t.apply(i, e);
          });
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.elements = {}),
          (e.Element = function (t) {
            i.extend(this, t), this.initialize.apply(this, arguments);
          }),
          i.extend(e.Element.prototype, {
            initialize: function () {},
            pivot: function () {
              return (
                this._view || (this._view = i.clone(this._model)),
                (this._start = i.clone(this._view)),
                this
              );
            },
            transition: function (t) {
              return (
                this._view || (this._view = i.clone(this._model)),
                1 === t
                  ? ((this._view = this._model), (this._start = null), this)
                  : (this._start || this.pivot(),
                    i.each(
                      this._model,
                      function (e, n) {
                        if ("_" !== n[0] && this._model.hasOwnProperty(n))
                          if (this._view.hasOwnProperty(n))
                            if (e === this._view[n]);
                            else if ("string" == typeof e)
                              try {
                                var o = i
                                  .color(this._start[n])
                                  .mix(i.color(this._model[n]), t);
                                this._view[n] = o.rgbString();
                              } catch (a) {
                                this._view[n] = e;
                              }
                            else if ("number" == typeof e) {
                              var s =
                                void 0 !== this._start[n] &&
                                isNaN(this._start[n]) === !1
                                  ? this._start[n]
                                  : 0;
                              this._view[n] = (this._model[n] - s) * t + s;
                            } else this._view[n] = e;
                          else
                            "number" != typeof e || isNaN(this._view[n])
                              ? (this._view[n] = e)
                              : (this._view[n] = e * t);
                        else;
                      },
                      this
                    ),
                    this)
              );
            },
            tooltipPosition: function () {
              return { x: this._model.x, y: this._model.y };
            },
            hasValue: function () {
              return i.isNumber(this._model.x) && i.isNumber(this._model.y);
            },
          }),
          (e.Element.extend = i.inherits);
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.global.animation = {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: i.noop,
          onComplete: i.noop,
        }),
          (e.Animation = e.Element.extend({
            currentStep: null,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null,
          })),
          (e.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            addAnimation: function (t, e, n, o) {
              o || (t.animating = !0);
              for (var a = 0; a < this.animations.length; ++a)
                if (this.animations[a].chartInstance === t)
                  return void (this.animations[a].animationObject = e);
              this.animations.push({ chartInstance: t, animationObject: e }),
                1 == this.animations.length &&
                  i.requestAnimFrame.call(window, this.digestWrapper);
            },
            cancelAnimation: function (t) {
              var e = i.findNextWhere(this.animations, function (e) {
                return e.chartInstance === t;
              });
              e && (this.animations.splice(e, 1), (t.animating = !1));
            },
            digestWrapper: function () {
              e.animationService.startDigest.call(e.animationService);
            },
            startDigest: function () {
              var t = Date.now(),
                e = 0;
              this.dropFrames > 1 &&
                ((e = Math.floor(this.dropFrames)),
                (this.dropFrames = this.dropFrames % 1));
              for (var n = 0; n < this.animations.length; n++)
                null === this.animations[n].animationObject.currentStep &&
                  (this.animations[n].animationObject.currentStep = 0),
                  (this.animations[n].animationObject.currentStep += 1 + e),
                  this.animations[n].animationObject.currentStep >
                    this.animations[n].animationObject.numSteps &&
                    (this.animations[
                      n
                    ].animationObject.currentStep = this.animations[
                      n
                    ].animationObject.numSteps),
                  this.animations[n].animationObject.render(
                    this.animations[n].chartInstance,
                    this.animations[n].animationObject
                  ),
                  this.animations[n].animationObject.onAnimationProgress &&
                    this.animations[n].animationObject.onAnimationProgress
                      .call &&
                    this.animations[n].animationObject.onAnimationProgress.call(
                      this.animations[n].chartInstance,
                      this.animations[n]
                    ),
                  this.animations[n].animationObject.currentStep ==
                    this.animations[n].animationObject.numSteps &&
                    (this.animations[n].animationObject.onAnimationComplete &&
                      this.animations[n].animationObject.onAnimationComplete
                        .call &&
                      this.animations[
                        n
                      ].animationObject.onAnimationComplete.call(
                        this.animations[n].chartInstance,
                        this.animations[n]
                      ),
                    (this.animations[n].chartInstance.animating = !1),
                    this.animations.splice(n, 1),
                    n--);
              var o = Date.now(),
                a = (o - t) / this.frameDuration;
              (this.dropFrames += a),
                this.animations.length > 0 &&
                  i.requestAnimFrame.call(window, this.digestWrapper);
            },
          });
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.types = {}),
          (e.instances = {}),
          (e.controllers = {}),
          (e.Controller = function (t) {
            return (
              (this.chart = t),
              (this.config = t.config),
              (this.options = this.config.options = i.configMerge(
                e.defaults.global,
                e.defaults[this.config.type],
                this.config.options || {}
              )),
              (this.id = i.uid()),
              Object.defineProperty(this, "data", {
                get: function () {
                  return this.config.data;
                },
              }),
              (e.instances[this.id] = this),
              this.options.responsive && this.resize(!0),
              this.initialize.call(this),
              this
            );
          }),
          i.extend(e.Controller.prototype, {
            initialize: function () {
              return (
                this.bindEvents(),
                this.ensureScalesHaveIDs(),
                this.buildOrUpdateControllers(),
                this.buildScales(),
                this.buildSurroundingItems(),
                this.updateLayout(),
                this.resetElements(),
                this.initToolTip(),
                this.draw(),
                this.update(),
                this
              );
            },
            clear: function () {
              return i.clear(this.chart), this;
            },
            stop: function () {
              return e.animationService.cancelAnimation(this), this;
            },
            resize: function (t) {
              var e = this.chart.canvas,
                n = i.getMaximumWidth(this.chart.canvas),
                o =
                  this.options.maintainAspectRatio &&
                  isNaN(this.chart.aspectRatio) === !1 &&
                  isFinite(this.chart.aspectRatio) &&
                  0 !== this.chart.aspectRatio
                    ? n / this.chart.aspectRatio
                    : i.getMaximumHeight(this.chart.canvas),
                a = this.chart.width !== n || this.chart.height !== o;
              return a
                ? ((e.width = this.chart.width = n),
                  (e.height = this.chart.height = o),
                  i.retinaScale(this.chart),
                  t ||
                    (this.stop(),
                    this.update(this.options.responsiveAnimationDuration)),
                  this)
                : this;
            },
            ensureScalesHaveIDs: function () {
              var t = "x-axis-",
                e = "y-axis-";
              this.options.scales &&
                (this.options.scales.xAxes &&
                  this.options.scales.xAxes.length &&
                  i.each(this.options.scales.xAxes, function (e, i) {
                    e.id = e.id || t + i;
                  }),
                this.options.scales.yAxes &&
                  this.options.scales.yAxes.length &&
                  i.each(this.options.scales.yAxes, function (t, i) {
                    t.id = t.id || e + i;
                  }));
            },
            buildScales: function () {
              if (
                ((this.scales = {}),
                this.options.scales &&
                  (this.options.scales.xAxes &&
                    this.options.scales.xAxes.length &&
                    i.each(
                      this.options.scales.xAxes,
                      function (t, i) {
                        var n = e.scaleService.getScaleConstructor(t.type);
                        if (n) {
                          var o = new n({
                            ctx: this.chart.ctx,
                            options: t,
                            chart: this,
                            id: t.id,
                          });
                          this.scales[o.id] = o;
                        }
                      },
                      this
                    ),
                  this.options.scales.yAxes &&
                    this.options.scales.yAxes.length &&
                    i.each(
                      this.options.scales.yAxes,
                      function (t, i) {
                        var n = e.scaleService.getScaleConstructor(t.type);
                        if (n) {
                          var o = new n({
                            ctx: this.chart.ctx,
                            options: t,
                            chart: this,
                            id: t.id,
                          });
                          this.scales[o.id] = o;
                        }
                      },
                      this
                    )),
                this.options.scale)
              ) {
                var t = e.scaleService.getScaleConstructor(
                  this.options.scale.type
                );
                if (t) {
                  var n = new t({
                    ctx: this.chart.ctx,
                    options: this.options.scale,
                    chart: this,
                  });
                  (this.scale = n), (this.scales.radialScale = n);
                }
              }
              e.scaleService.addScalesToLayout(this);
            },
            buildSurroundingItems: function () {
              this.options.title &&
                ((this.titleBlock = new e.Title({
                  ctx: this.chart.ctx,
                  options: this.options.title,
                  chart: this,
                })),
                e.layoutService.addBox(this, this.titleBlock)),
                this.options.legend &&
                  ((this.legend = new e.Legend({
                    ctx: this.chart.ctx,
                    options: this.options.legend,
                    chart: this,
                  })),
                  e.layoutService.addBox(this, this.legend));
            },
            updateLayout: function () {
              e.layoutService.update(this, this.chart.width, this.chart.height);
            },
            buildOrUpdateControllers: function () {
              var t = [],
                n = [];
              if (
                (i.each(
                  this.data.datasets,
                  function (i, o) {
                    i.type || (i.type = this.config.type);
                    var a = i.type;
                    t.push(a),
                      i.controller
                        ? i.controller.updateIndex(o)
                        : ((i.controller = new e.controllers[a](this, o)),
                          n.push(i.controller));
                  },
                  this
                ),
                t.length > 1)
              )
                for (var o = 1; o < t.length; o++)
                  if (t[o] != t[o - 1]) {
                    this.isCombo = !0;
                    break;
                  }
              return n;
            },
            resetElements: function () {
              i.each(this.data.datasets, function (t, e) {
                t.controller.reset();
              });
            },
            update: function (t, n) {
              this.tooltip._data = this.data;
              var o = this.buildOrUpdateControllers();
              e.layoutService.update(this, this.chart.width, this.chart.height),
                i.each(o, function (t) {
                  t.reset();
                }),
                i.each(this.data.datasets, function (t, e) {
                  t.controller.buildOrUpdateElements();
                }),
                i.each(this.data.datasets, function (t, e) {
                  t.controller.update();
                }),
                this.render(t, n);
            },
            render: function (t, n) {
              if (
                this.options.animation &&
                (("undefined" != typeof t && 0 !== t) ||
                  ("undefined" == typeof t &&
                    0 !== this.options.animation.duration))
              ) {
                var o = new e.Animation();
                (o.numSteps = (t || this.options.animation.duration) / 16.66),
                  (o.easing = this.options.animation.easing),
                  (o.render = function (t, e) {
                    var n = i.easingEffects[e.easing],
                      o = e.currentStep / e.numSteps,
                      a = n(o);
                    t.draw(a, o, e.currentStep);
                  }),
                  (o.onAnimationProgress = this.options.animation.onProgress),
                  (o.onAnimationComplete = this.options.animation.onComplete),
                  e.animationService.addAnimation(this, o, t, n);
              } else
                this.draw(),
                  this.options.animation &&
                    this.options.animation.onComplete &&
                    this.options.animation.onComplete.call &&
                    this.options.animation.onComplete.call(this);
              return this;
            },
            draw: function (t) {
              var e = t || 1;
              this.clear(),
                i.each(
                  this.boxes,
                  function (t) {
                    t.draw(this.chartArea);
                  },
                  this
                ),
                this.scale && this.scale.draw(),
                i.each(this.data.datasets, function (e, n) {
                  i.isDatasetVisible(e) && e.controller.draw(t);
                }),
                this.tooltip.transition(e).draw();
            },
            getElementAtEvent: function (t) {
              var e = i.getRelativePosition(t, this.chart),
                n = [];
              return (
                i.each(this.data.datasets, function (t, o) {
                  i.isDatasetVisible(t) &&
                    i.each(t.metaData, function (t, i) {
                      if (t.inRange(e.x, e.y)) return n.push(t), n;
                    });
                }),
                n
              );
            },
            getElementsAtEvent: function (t) {
              var e = i.getRelativePosition(t, this.chart),
                n = [],
                o = function () {
                  for (var t = 0; t < this.data.datasets.length; t++)
                    if (i.isDatasetVisible(this.data.datasets[t]))
                      for (
                        var n = 0;
                        n < this.data.datasets[t].metaData.length;
                        n++
                      )
                        if (this.data.datasets[t].metaData[n].inRange(e.x, e.y))
                          return this.data.datasets[t].metaData[n];
                }.call(this);
              return o
                ? (i.each(this.data.datasets, function (t, e) {
                    i.isDatasetVisible(t) && n.push(t.metaData[o._index]);
                  }),
                  n)
                : n;
            },
            getDatasetAtEvent: function (t) {
              var e = this.getElementAtEvent(t);
              return (
                e.length > 0 &&
                  (e = this.data.datasets[e[0]._datasetIndex].metaData),
                e
              );
            },
            generateLegend: function () {
              return this.options.legendCallback(this);
            },
            destroy: function () {
              this.clear(),
                i.unbindEvents(this, this.events),
                i.removeResizeListener(this.chart.canvas.parentNode);
              var t = this.chart.canvas;
              (t.width = this.chart.width),
                (t.height = this.chart.height),
                void 0 !== this.chart.originalDevicePixelRatio &&
                  this.chart.ctx.scale(
                    1 / this.chart.originalDevicePixelRatio,
                    1 / this.chart.originalDevicePixelRatio
                  ),
                (t.style.width = this.chart.originalCanvasStyleWidth),
                (t.style.height = this.chart.originalCanvasStyleHeight),
                delete e.instances[this.id];
            },
            toBase64Image: function () {
              return this.chart.canvas.toDataURL.apply(
                this.chart.canvas,
                arguments
              );
            },
            initToolTip: function () {
              this.tooltip = new e.Tooltip(
                {
                  _chart: this.chart,
                  _chartInstance: this,
                  _data: this.data,
                  _options: this.options,
                },
                this
              );
            },
            bindEvents: function () {
              i.bindEvents(this, this.options.events, function (t) {
                this.eventHandler(t);
              });
            },
            eventHandler: function (t) {
              if (
                ((this.lastActive = this.lastActive || []),
                (this.lastTooltipActive = this.lastTooltipActive || []),
                "mouseout" == t.type)
              )
                (this.active = []), (this.tooltipActive = []);
              else {
                var e = this,
                  n = function (i) {
                    switch (i) {
                      case "single":
                        return e.getElementAtEvent(t);
                      case "label":
                        return e.getElementsAtEvent(t);
                      case "dataset":
                        return e.getDatasetAtEvent(t);
                      default:
                        return t;
                    }
                  };
                (this.active = n(this.options.hover.mode)),
                  (this.tooltipActive = n(this.options.tooltips.mode));
              }
              this.options.hover.onHover &&
                this.options.hover.onHover.call(this, this.active),
                ("mouseup" != t.type && "click" != t.type) ||
                  (this.options.onClick &&
                    this.options.onClick.call(this, t, this.active),
                  this.legend &&
                    this.legend.handleEvent &&
                    this.legend.handleEvent(t));
              if (this.lastActive.length)
                switch (this.options.hover.mode) {
                  case "single":
                    this.data.datasets[
                      this.lastActive[0]._datasetIndex
                    ].controller.removeHoverStyle(
                      this.lastActive[0],
                      this.lastActive[0]._datasetIndex,
                      this.lastActive[0]._index
                    );
                    break;
                  case "label":
                  case "dataset":
                    for (var o = 0; o < this.lastActive.length; o++)
                      this.lastActive[o] &&
                        this.data.datasets[
                          this.lastActive[o]._datasetIndex
                        ].controller.removeHoverStyle(
                          this.lastActive[o],
                          this.lastActive[o]._datasetIndex,
                          this.lastActive[o]._index
                        );
                }
              if (this.active.length && this.options.hover.mode)
                switch (this.options.hover.mode) {
                  case "single":
                    this.data.datasets[
                      this.active[0]._datasetIndex
                    ].controller.setHoverStyle(this.active[0]);
                    break;
                  case "label":
                  case "dataset":
                    for (var a = 0; a < this.active.length; a++)
                      this.active[a] &&
                        this.data.datasets[
                          this.active[a]._datasetIndex
                        ].controller.setHoverStyle(this.active[a]);
                }
              if (
                ((this.options.tooltips.enabled ||
                  this.options.tooltips.custom) &&
                  (this.tooltip.initialize(),
                  (this.tooltip._active = this.tooltipActive),
                  this.tooltip.update()),
                this.tooltip.pivot(),
                !this.animating)
              ) {
                var s;
                i.each(
                  this.active,
                  function (t, e) {
                    t !== this.lastActive[e] && (s = !0);
                  },
                  this
                ),
                  i.each(
                    this.tooltipActive,
                    function (t, e) {
                      t !== this.lastTooltipActive[e] && (s = !0);
                    },
                    this
                  ),
                  (this.lastActive.length !== this.active.length ||
                    this.lastTooltipActive.length !==
                      this.tooltipActive.length ||
                    s) &&
                    (this.stop(),
                    (this.options.tooltips.enabled ||
                      this.options.tooltips.custom) &&
                      this.tooltip.update(!0),
                    this.render(this.options.hover.animationDuration, !0));
              }
              return (
                (this.lastActive = this.active),
                (this.lastTooltipActive = this.tooltipActive),
                this
              );
            },
          });
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.DatasetController = function (t, e) {
          this.initialize.call(this, t, e);
        }),
          i.extend(e.DatasetController.prototype, {
            initialize: function (t, e) {
              (this.chart = t),
                (this.index = e),
                this.linkScales(),
                this.addElements();
            },
            updateIndex: function (t) {
              this.index = t;
            },
            linkScales: function () {
              this.getDataset().xAxisID ||
                (this.getDataset().xAxisID = this.chart.options.scales.xAxes[0].id),
                this.getDataset().yAxisID ||
                  (this.getDataset().yAxisID = this.chart.options.scales.yAxes[0].id);
            },
            getDataset: function () {
              return this.chart.data.datasets[this.index];
            },
            getScaleForId: function (t) {
              return this.chart.scales[t];
            },
            reset: function () {
              this.update(!0);
            },
            buildOrUpdateElements: function () {
              var t = this.getDataset().data.length,
                e = this.getDataset().metaData.length;
              if (t < e) this.getDataset().metaData.splice(t, e - t);
              else if (t > e)
                for (var i = e; i < t; ++i) this.addElementAndReset(i);
            },
            addElements: i.noop,
            addElementAndReset: i.noop,
            draw: i.noop,
            removeHoverStyle: i.noop,
            setHoverStyle: i.noop,
            update: i.noop,
          }),
          (e.DatasetController.extend = i.inherits);
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        e.layoutService = {
          defaults: {},
          addBox: function (t, e) {
            t.boxes || (t.boxes = []), t.boxes.push(e);
          },
          removeBox: function (t, e) {
            t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1);
          },
          update: function (t, e, n) {
            function o(t) {
              var e,
                i = t.isHorizontal();
              i
                ? ((e = t.update(t.options.fullWidth ? m : w, x)),
                  (k -= e.height))
                : ((e = t.update(b, y)), (w -= e.width)),
                S.push({ horizontal: i, minSize: e, box: t });
            }
            function a(t) {
              var e = i.findNextWhere(S, function (e) {
                return e.box === t;
              });
              if (e)
                if (t.isHorizontal()) {
                  var n = { left: _, right: C, top: 0, bottom: 0 };
                  t.update(t.options.fullWidth ? m : w, g / 2, n);
                } else t.update(e.minSize.width, k);
            }
            function s(t) {
              var e = i.findNextWhere(S, function (e) {
                  return e.box === t;
                }),
                n = { left: 0, right: 0, top: D, bottom: T };
              e && t.update(e.minSize.width, k, n);
            }
            function r(t) {
              t.isHorizontal()
                ? ((t.left = t.options.fullWidth ? l : _),
                  (t.right = t.options.fullWidth ? e - l : _ + w),
                  (t.top = P),
                  (t.bottom = P + t.height),
                  (P = t.bottom))
                : ((t.left = I),
                  (t.right = I + t.width),
                  (t.top = D),
                  (t.bottom = D + k),
                  (I = t.right));
            }
            if (t) {
              var l = e > 30 ? 5 : 2,
                h = n > 30 ? 5 : 2,
                c = i.where(t.boxes, function (t) {
                  return "left" == t.options.position;
                }),
                u = i.where(t.boxes, function (t) {
                  return "right" == t.options.position;
                }),
                d = i.where(t.boxes, function (t) {
                  return "top" == t.options.position;
                }),
                f = i.where(t.boxes, function (t) {
                  return "bottom" == t.options.position;
                }),
                p = i.where(t.boxes, function (t) {
                  return "chartArea" == t.options.position;
                });
              d.sort(function (t, e) {
                return (
                  (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                );
              }),
                f.sort(function (t, e) {
                  return (
                    (t.options.fullWidth ? 1 : 0) -
                    (e.options.fullWidth ? 1 : 0)
                  );
                });
              var m = e - 2 * l,
                g = n - 2 * h,
                v = m / 2,
                y = g / 2,
                b = (e - v) / (c.length + u.length),
                x = (n - y) / (d.length + f.length),
                w = m,
                k = g,
                S = [];
              i.each(c.concat(u, d, f), o);
              var _ = l,
                C = l,
                D = h,
                T = h;
              i.each(c.concat(u), a),
                i.each(c, function (t) {
                  _ += t.width;
                }),
                i.each(u, function (t) {
                  C += t.width;
                }),
                i.each(d.concat(f), a),
                i.each(d, function (t) {
                  D += t.height;
                }),
                i.each(f, function (t) {
                  T += t.height;
                }),
                i.each(c.concat(u), s),
                (_ = l),
                (C = l),
                (D = h),
                (T = h),
                i.each(c, function (t) {
                  _ += t.width;
                }),
                i.each(u, function (t) {
                  C += t.width;
                }),
                i.each(d, function (t) {
                  D += t.height;
                }),
                i.each(f, function (t) {
                  T += t.height;
                });
              var M = n - D - T,
                A = e - _ - C;
              (A === w && M === k) ||
                (i.each(c, function (t) {
                  t.height = M;
                }),
                i.each(u, function (t) {
                  t.height = M;
                }),
                i.each(d, function (t) {
                  t.width = A;
                }),
                i.each(f, function (t) {
                  t.width = A;
                }),
                (k = M),
                (w = A));
              var I = l,
                P = h;
              i.each(c.concat(d), r),
                (I += w),
                (P += k),
                i.each(u, r),
                i.each(f, r),
                (t.chartArea = {
                  left: _,
                  top: D,
                  right: _ + w,
                  bottom: D + k,
                }),
                i.each(p, function (e) {
                  (e.left = t.chartArea.left),
                    (e.top = t.chartArea.top),
                    (e.right = t.chartArea.right),
                    (e.bottom = t.chartArea.bottom),
                    e.update(w, k);
                });
            }
          },
        };
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.global.legend = {
          display: !0,
          position: "top",
          fullWidth: !0,
          onClick: function (t, e) {
            var i = this.chart.data.datasets[e.datasetIndex];
            (i.hidden = !i.hidden), this.chart.update();
          },
          labels: {
            boxWidth: 40,
            fontSize: 12,
            fontStyle: "normal",
            fontColor: "#666",
            fontFamily: "Helvetica Neue",
            padding: 10,
            generateLabels: function (t) {
              return t.datasets.map(function (t, e) {
                return {
                  text: t.label,
                  fillStyle: t.backgroundColor,
                  hidden: t.hidden,
                  lineCap: t.borderCapStyle,
                  lineDash: t.borderDash,
                  lineDashOffset: t.borderDashOffset,
                  lineJoin: t.borderJoinStyle,
                  lineWidth: t.borderWidth,
                  strokeStyle: t.borderColor,
                  datasetIndex: e,
                };
              }, this);
            },
          },
        }),
          (e.Legend = e.Element.extend({
            initialize: function (t) {
              i.extend(this, t),
                (this.legendHitBoxes = []),
                (this.doughnutMode = !1);
            },
            beforeUpdate: i.noop,
            update: function (t, e, i) {
              return (
                this.beforeUpdate(),
                (this.maxWidth = t),
                (this.maxHeight = e),
                (this.margins = i),
                this.beforeSetDimensions(),
                this.setDimensions(),
                this.afterSetDimensions(),
                this.beforeBuildLabels(),
                this.buildLabels(),
                this.afterBuildLabels(),
                this.beforeFit(),
                this.fit(),
                this.afterFit(),
                this.afterUpdate(),
                this.minSize
              );
            },
            afterUpdate: i.noop,
            beforeSetDimensions: i.noop,
            setDimensions: function () {
              this.isHorizontal()
                ? ((this.width = this.maxWidth),
                  (this.left = 0),
                  (this.right = this.width))
                : ((this.height = this.maxHeight),
                  (this.top = 0),
                  (this.bottom = this.height)),
                (this.paddingLeft = 0),
                (this.paddingTop = 0),
                (this.paddingRight = 0),
                (this.paddingBottom = 0),
                (this.minSize = { width: 0, height: 0 });
            },
            afterSetDimensions: i.noop,
            beforeBuildLabels: i.noop,
            buildLabels: function () {
              this.legendItems = this.options.labels.generateLabels.call(
                this,
                this.chart.data
              );
            },
            afterBuildLabels: i.noop,
            beforeFit: i.noop,
            fit: function () {
              var t = this.ctx,
                e = i.fontString(
                  this.options.labels.fontSize,
                  this.options.labels.fontStyle,
                  this.options.labels.fontFamily
                );
              if (
                ((this.legendHitBoxes = []),
                this.isHorizontal()
                  ? (this.minSize.width = this.maxWidth)
                  : (this.minSize.width = this.options.display ? 10 : 0),
                this.isHorizontal()
                  ? (this.minSize.height = this.options.display ? 10 : 0)
                  : (this.minSize.height = this.maxHeight),
                this.options.display && this.isHorizontal())
              ) {
                this.lineWidths = [0];
                var n = this.legendItems.length
                  ? this.options.labels.fontSize + this.options.labels.padding
                  : 0;
                (t.textAlign = "left"),
                  (t.textBaseline = "top"),
                  (t.font = e),
                  i.each(
                    this.legendItems,
                    function (e, i) {
                      var o =
                        this.options.labels.boxWidth +
                        this.options.labels.fontSize / 2 +
                        t.measureText(e.text).width;
                      this.lineWidths[this.lineWidths.length - 1] + o >=
                        this.width &&
                        ((n +=
                          this.options.labels.fontSize +
                          this.options.labels.padding),
                        (this.lineWidths[this.lineWidths.length] = this.left)),
                        (this.legendHitBoxes[i] = {
                          left: 0,
                          top: 0,
                          width: o,
                          height: this.options.labels.fontSize,
                        }),
                        (this.lineWidths[this.lineWidths.length - 1] +=
                          o + this.options.labels.padding);
                    },
                    this
                  ),
                  (this.minSize.height += n);
              }
              (this.width = this.minSize.width),
                (this.height = this.minSize.height);
            },
            afterFit: i.noop,
            isHorizontal: function () {
              return (
                "top" == this.options.position ||
                "bottom" == this.options.position
              );
            },
            draw: function () {
              if (this.options.display) {
                var t = this.ctx,
                  n = {
                    x: this.left + (this.width - this.lineWidths[0]) / 2,
                    y: this.top + this.options.labels.padding,
                    line: 0,
                  },
                  o = i.fontString(
                    this.options.labels.fontSize,
                    this.options.labels.fontStyle,
                    this.options.labels.fontFamily
                  );
                this.isHorizontal() &&
                  ((t.textAlign = "left"),
                  (t.textBaseline = "top"),
                  (t.lineWidth = 0.5),
                  (t.strokeStyle = this.options.labels.fontColor),
                  (t.fillStyle = this.options.labels.fontColor),
                  (t.font = o),
                  i.each(
                    this.legendItems,
                    function (i, o) {
                      var a = t.measureText(i.text).width,
                        s =
                          this.options.labels.boxWidth +
                          this.options.labels.fontSize / 2 +
                          a;
                      n.x + s >= this.width &&
                        ((n.y +=
                          this.options.labels.fontSize +
                          this.options.labels.padding),
                        n.line++,
                        (n.x =
                          this.left +
                          (this.width - this.lineWidths[n.line]) / 2)),
                        t.save();
                      var r = function (t, e) {
                        return void 0 !== t ? t : e;
                      };
                      (t.fillStyle = r(
                        i.fillStyle,
                        e.defaults.global.defaultColor
                      )),
                        (t.lineCap = r(
                          i.lineCap,
                          e.defaults.global.elements.line.borderCapStyle
                        )),
                        (t.lineDashOffset = r(
                          i.lineDashOffset,
                          e.defaults.global.elements.line.borderDashOffset
                        )),
                        (t.lineJoin = r(
                          i.lineJoin,
                          e.defaults.global.elements.line.borderJoinStyle
                        )),
                        (t.lineWidth = r(
                          i.lineWidth,
                          e.defaults.global.elements.line.borderWidth
                        )),
                        (t.strokeStyle = r(
                          i.strokeStyle,
                          e.defaults.global.defaultColor
                        )),
                        t.setLineDash &&
                          t.setLineDash(
                            r(
                              i.lineDash,
                              e.defaults.global.elements.line.borderDash
                            )
                          ),
                        t.strokeRect(
                          n.x,
                          n.y,
                          this.options.labels.boxWidth,
                          this.options.labels.fontSize
                        ),
                        t.fillRect(
                          n.x,
                          n.y,
                          this.options.labels.boxWidth,
                          this.options.labels.fontSize
                        ),
                        t.restore(),
                        (this.legendHitBoxes[o].left = n.x),
                        (this.legendHitBoxes[o].top = n.y),
                        t.fillText(
                          i.text,
                          this.options.labels.boxWidth +
                            this.options.labels.fontSize / 2 +
                            n.x,
                          n.y
                        ),
                        i.hidden &&
                          (t.beginPath(),
                          (t.lineWidth = 2),
                          t.moveTo(
                            this.options.labels.boxWidth +
                              this.options.labels.fontSize / 2 +
                              n.x,
                            n.y + this.options.labels.fontSize / 2
                          ),
                          t.lineTo(
                            this.options.labels.boxWidth +
                              this.options.labels.fontSize / 2 +
                              n.x +
                              a,
                            n.y + this.options.labels.fontSize / 2
                          ),
                          t.stroke()),
                        (n.x += s + this.options.labels.padding);
                    },
                    this
                  ));
              }
            },
            handleEvent: function (t) {
              var e = i.getRelativePosition(t, this.chart.chart);
              if (
                e.x >= this.left &&
                e.x <= this.right &&
                e.y >= this.top &&
                e.y <= this.bottom
              )
                for (var n = 0; n < this.legendHitBoxes.length; ++n) {
                  var o = this.legendHitBoxes[n];
                  if (
                    e.x >= o.left &&
                    e.x <= o.left + o.width &&
                    e.y >= o.top &&
                    e.y <= o.top + o.height
                  ) {
                    this.options.onClick &&
                      this.options.onClick.call(this, t, this.legendItems[n]);
                    break;
                  }
                }
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.scale = {
          display: !0,
          gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            offsetGridLines: !1,
          },
          scaleLabel: {
            fontColor: "#666",
            fontFamily: "Helvetica Neue",
            fontSize: 12,
            fontStyle: "normal",
            labelString: "",
            display: !1,
          },
          ticks: {
            beginAtZero: !1,
            fontSize: 12,
            fontStyle: "normal",
            fontColor: "#666",
            fontFamily: "Helvetica Neue",
            maxRotation: 90,
            mirror: !1,
            padding: 10,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 20,
            callback: function (t) {
              return "" + t;
            },
          },
        }),
          (e.Scale = e.Element.extend({
            beforeUpdate: function () {
              i.callCallback(this.options.beforeUpdate, [this]);
            },
            update: function (t, e, n) {
              return (
                this.beforeUpdate(),
                (this.maxWidth = t),
                (this.maxHeight = e),
                (this.margins = i.extend(
                  { left: 0, right: 0, top: 0, bottom: 0 },
                  n
                )),
                this.beforeSetDimensions(),
                this.setDimensions(),
                this.afterSetDimensions(),
                this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                this.beforeBuildTicks(),
                this.buildTicks(),
                this.afterBuildTicks(),
                this.beforeTickToLabelConversion(),
                this.convertTicksToLabels(),
                this.afterTickToLabelConversion(),
                this.beforeCalculateTickRotation(),
                this.calculateTickRotation(),
                this.afterCalculateTickRotation(),
                this.beforeFit(),
                this.fit(),
                this.afterFit(),
                this.afterUpdate(),
                this.minSize
              );
            },
            afterUpdate: function () {
              i.callCallback(this.options.afterUpdate, [this]);
            },
            beforeSetDimensions: function () {
              i.callCallback(this.options.beforeSetDimensions, [this]);
            },
            setDimensions: function () {
              this.isHorizontal()
                ? ((this.width = this.maxWidth),
                  (this.left = 0),
                  (this.right = this.width))
                : ((this.height = this.maxHeight),
                  (this.top = 0),
                  (this.bottom = this.height)),
                (this.paddingLeft = 0),
                (this.paddingTop = 0),
                (this.paddingRight = 0),
                (this.paddingBottom = 0);
            },
            afterSetDimensions: function () {
              i.callCallback(this.options.afterSetDimensions, [this]);
            },
            beforeDataLimits: function () {
              i.callCallback(this.options.beforeDataLimits, [this]);
            },
            determineDataLimits: i.noop,
            afterDataLimits: function () {
              i.callCallback(this.options.afterDataLimits, [this]);
            },
            beforeBuildTicks: function () {
              i.callCallback(this.options.beforeBuildTicks, [this]);
            },
            buildTicks: i.noop,
            afterBuildTicks: function () {
              i.callCallback(this.options.afterBuildTicks, [this]);
            },
            beforeTickToLabelConversion: function () {
              i.callCallback(this.options.beforeTickToLabelConversion, [this]);
            },
            convertTicksToLabels: function () {
              this.ticks = this.ticks.map(function (t, e, i) {
                return this.options.ticks.userCallback
                  ? this.options.ticks.userCallback(t, e, i)
                  : this.options.ticks.callback(t, e, i);
              }, this);
            },
            afterTickToLabelConversion: function () {
              i.callCallback(this.options.afterTickToLabelConversion, [this]);
            },
            beforeCalculateTickRotation: function () {
              i.callCallback(this.options.beforeCalculateTickRotation, [this]);
            },
            calculateTickRotation: function () {
              var t = i.fontString(
                this.options.ticks.fontSize,
                this.options.ticks.fontStyle,
                this.options.ticks.fontFamily
              );
              this.ctx.font = t;
              var e,
                n = this.ctx.measureText(this.ticks[0]).width,
                o = this.ctx.measureText(this.ticks[this.ticks.length - 1])
                  .width;
              if (
                ((this.labelRotation = 0),
                (this.paddingRight = 0),
                (this.paddingLeft = 0),
                this.options.display && this.isHorizontal())
              ) {
                (this.paddingRight = o / 2 + 3),
                  (this.paddingLeft = n / 2 + 3),
                  this.longestTextCache || (this.longestTextCache = {});
                for (
                  var a,
                    s,
                    r = i.longestText(
                      this.ctx,
                      t,
                      this.ticks,
                      this.longestTextCache
                    ),
                    l = r,
                    h = this.getPixelForTick(1) - this.getPixelForTick(0) - 6;
                  l > h && this.labelRotation < this.options.ticks.maxRotation;

                ) {
                  if (
                    ((a = Math.cos(i.toRadians(this.labelRotation))),
                    (s = Math.sin(i.toRadians(this.labelRotation))),
                    (e = a * n),
                    e + this.options.ticks.fontSize / 2 > this.yLabelWidth &&
                      (this.paddingLeft = e + this.options.ticks.fontSize / 2),
                    (this.paddingRight = this.options.ticks.fontSize / 2),
                    s * r > this.maxHeight)
                  ) {
                    this.labelRotation--;
                    break;
                  }
                  this.labelRotation++, (l = a * r);
                }
              }
              this.margins &&
                ((this.paddingLeft = Math.max(
                  this.paddingLeft - this.margins.left,
                  0
                )),
                (this.paddingRight = Math.max(
                  this.paddingRight - this.margins.right,
                  0
                )));
            },
            afterCalculateTickRotation: function () {
              i.callCallback(this.options.afterCalculateTickRotation, [this]);
            },
            beforeFit: function () {
              i.callCallback(this.options.beforeFit, [this]);
            },
            fit: function () {
              if (
                ((this.minSize = { width: 0, height: 0 }),
                this.isHorizontal()
                  ? (this.minSize.width = this.isFullWidth()
                      ? this.maxWidth - this.margins.left - this.margins.right
                      : this.maxWidth)
                  : (this.minSize.width =
                      this.options.gridLines.display && this.options.display
                        ? 10
                        : 0),
                this.isHorizontal()
                  ? (this.minSize.height =
                      this.options.gridLines.display && this.options.display
                        ? 10
                        : 0)
                  : (this.minSize.height = this.maxHeight),
                this.options.scaleLabel.display &&
                  (this.isHorizontal()
                    ? (this.minSize.height +=
                        1.5 * this.options.scaleLabel.fontSize)
                    : (this.minSize.width +=
                        1.5 * this.options.scaleLabel.fontSize)),
                this.options.ticks.display && this.options.display)
              ) {
                var t = i.fontString(
                  this.options.ticks.fontSize,
                  this.options.ticks.fontStyle,
                  this.options.ticks.fontFamily
                );
                this.longestTextCache || (this.longestTextCache = {});
                var e = i.longestText(
                  this.ctx,
                  t,
                  this.ticks,
                  this.longestTextCache
                );
                if (this.isHorizontal()) {
                  this.longestLabelWidth = e;
                  var n =
                    Math.sin(i.toRadians(this.labelRotation)) *
                      this.longestLabelWidth +
                    1.5 * this.options.ticks.fontSize;
                  (this.minSize.height = Math.min(
                    this.maxHeight,
                    this.minSize.height + n
                  )),
                    (t = i.fontString(
                      this.options.ticks.fontSize,
                      this.options.ticks.fontStyle,
                      this.options.ticks.fontFamily
                    )),
                    (this.ctx.font = t);
                  var o = this.ctx.measureText(this.ticks[0]).width,
                    a = this.ctx.measureText(this.ticks[this.ticks.length - 1])
                      .width,
                    s = Math.cos(i.toRadians(this.labelRotation)),
                    r = Math.sin(i.toRadians(this.labelRotation));
                  (this.paddingLeft =
                    0 !== this.labelRotation ? s * o + 3 : o / 2 + 3),
                    (this.paddingRight =
                      0 !== this.labelRotation
                        ? r * (this.options.ticks.fontSize / 2) + 3
                        : a / 2 + 3);
                } else {
                  var l = this.maxWidth - this.minSize.width;
                  this.options.ticks.mirror ||
                    (e += this.options.ticks.padding),
                    e < l
                      ? (this.minSize.width += e)
                      : (this.minSize.width = this.maxWidth),
                    (this.paddingTop = this.options.ticks.fontSize / 2),
                    (this.paddingBottom = this.options.ticks.fontSize / 2);
                }
              }
              this.margins &&
                ((this.paddingLeft = Math.max(
                  this.paddingLeft - this.margins.left,
                  0
                )),
                (this.paddingTop = Math.max(
                  this.paddingTop - this.margins.top,
                  0
                )),
                (this.paddingRight = Math.max(
                  this.paddingRight - this.margins.right,
                  0
                )),
                (this.paddingBottom = Math.max(
                  this.paddingBottom - this.margins.bottom,
                  0
                ))),
                (this.width = this.minSize.width),
                (this.height = this.minSize.height);
            },
            afterFit: function () {
              i.callCallback(this.options.afterFit, [this]);
            },
            isHorizontal: function () {
              return (
                "top" === this.options.position ||
                "bottom" === this.options.position
              );
            },
            isFullWidth: function () {
              return this.options.fullWidth;
            },
            getRightValue: function n(t) {
              return null === t || "undefined" == typeof t
                ? NaN
                : "number" == typeof t && isNaN(t)
                ? NaN
                : "object" == typeof t
                ? t instanceof Date
                  ? t
                  : n(this.isHorizontal() ? t.x : t.y)
                : t;
            },
            getLabelForIndex: i.noop,
            getPixelForValue: i.noop,
            getPixelForTick: function (t, e) {
              if (this.isHorizontal()) {
                var i = this.width - (this.paddingLeft + this.paddingRight),
                  n =
                    i /
                    Math.max(
                      this.ticks.length -
                        (this.options.gridLines.offsetGridLines ? 0 : 1),
                      1
                    ),
                  o = n * t + this.paddingLeft;
                e && (o += n / 2);
                var a = this.left + Math.round(o);
                return (a += this.isFullWidth() ? this.margins.left : 0);
              }
              var s = this.height - (this.paddingTop + this.paddingBottom);
              return this.top + t * (s / (this.ticks.length - 1));
            },
            getPixelForDecimal: function (t) {
              if (this.isHorizontal()) {
                var e = this.width - (this.paddingLeft + this.paddingRight),
                  i = e * t + this.paddingLeft,
                  n = this.left + Math.round(i);
                return (n += this.isFullWidth() ? this.margins.left : 0);
              }
              return this.top + t * this.height;
            },
            draw: function (t) {
              if (this.options.display) {
                var e,
                  n,
                  o,
                  a,
                  s,
                  r = 0 !== this.labelRotation,
                  l = this.options.ticks.autoSkip;
                this.options.ticks.maxTicksLimit &&
                  (s = this.options.ticks.maxTicksLimit),
                  (this.ctx.fillStyle = this.options.ticks.fontColor);
                var h = i.fontString(
                    this.options.ticks.fontSize,
                    this.options.ticks.fontStyle,
                    this.options.ticks.fontFamily
                  ),
                  c = Math.cos(i.toRadians(this.labelRotation)),
                  u = Math.sin(i.toRadians(this.labelRotation)),
                  d = this.longestLabelWidth * c;
                this.options.ticks.fontSize * u;
                if (this.isHorizontal()) {
                  e = !0;
                  var f =
                      "bottom" === this.options.position
                        ? this.top
                        : this.bottom - 10,
                    p =
                      "bottom" === this.options.position
                        ? this.top + 10
                        : this.bottom;
                  if (
                    ((n = !1),
                    (d / 2 + this.options.ticks.autoSkipPadding) *
                      this.ticks.length >
                      this.width - (this.paddingLeft + this.paddingRight) &&
                      (n =
                        1 +
                        Math.floor(
                          ((d / 2 + this.options.ticks.autoSkipPadding) *
                            this.ticks.length) /
                            (this.width -
                              (this.paddingLeft + this.paddingRight))
                        )),
                    l || (n = !1),
                    s && this.ticks.length > s)
                  )
                    for (; !n || this.ticks.length / (n || 1) > s; )
                      n || (n = 1), (n += 1);
                  i.each(
                    this.ticks,
                    function (o, a) {
                      var s = this.ticks.length == a + 1,
                        l = n > 1 && a % n > 0;
                      if ((!l || s) && void 0 !== o && null !== o) {
                        var c = this.getPixelForTick(a),
                          u = this.getPixelForTick(
                            a,
                            this.options.gridLines.offsetGridLines
                          );
                        this.options.gridLines.display &&
                          (a ===
                          ("undefined" != typeof this.zeroLineIndex
                            ? this.zeroLineIndex
                            : 0)
                            ? ((this.ctx.lineWidth = this.options.gridLines.zeroLineWidth),
                              (this.ctx.strokeStyle = this.options.gridLines.zeroLineColor),
                              (e = !0))
                            : e &&
                              ((this.ctx.lineWidth = this.options.gridLines.lineWidth),
                              (this.ctx.strokeStyle = this.options.gridLines.color),
                              (e = !1)),
                          (c += i.aliasPixel(this.ctx.lineWidth)),
                          this.ctx.beginPath(),
                          this.options.gridLines.drawTicks &&
                            (this.ctx.moveTo(c, f), this.ctx.lineTo(c, p)),
                          this.options.gridLines.drawOnChartArea &&
                            (this.ctx.moveTo(c, t.top),
                            this.ctx.lineTo(c, t.bottom)),
                          this.ctx.stroke()),
                          this.options.ticks.display &&
                            (this.ctx.save(),
                            this.ctx.translate(
                              u,
                              r
                                ? this.top + 12
                                : "top" === this.options.position
                                ? this.bottom - 10
                                : this.top + 10
                            ),
                            this.ctx.rotate(
                              i.toRadians(this.labelRotation) * -1
                            ),
                            (this.ctx.font = h),
                            (this.ctx.textAlign = r ? "right" : "center"),
                            (this.ctx.textBaseline = r
                              ? "middle"
                              : "top" === this.options.position
                              ? "bottom"
                              : "top"),
                            this.ctx.fillText(o, 0, 0),
                            this.ctx.restore());
                      }
                    },
                    this
                  ),
                    this.options.scaleLabel.display &&
                      ((this.ctx.textAlign = "center"),
                      (this.ctx.textBaseline = "middle"),
                      (this.ctx.fillStyle = this.options.scaleLabel.fontColor),
                      (this.ctx.font = i.fontString(
                        this.options.scaleLabel.fontSize,
                        this.options.scaleLabel.fontStyle,
                        this.options.scaleLabel.fontFamily
                      )),
                      (o = this.left + (this.right - this.left) / 2),
                      (a =
                        "bottom" === this.options.position
                          ? this.bottom - this.options.scaleLabel.fontSize / 2
                          : this.top + this.options.scaleLabel.fontSize / 2),
                      this.ctx.fillText(
                        this.options.scaleLabel.labelString,
                        o,
                        a
                      ));
                } else {
                  e = !0;
                  var m =
                      "right" === this.options.position
                        ? this.left
                        : this.right - 5,
                    g =
                      "right" === this.options.position
                        ? this.left + 5
                        : this.right;
                  if (
                    (i.each(
                      this.ticks,
                      function (n, o) {
                        if (void 0 !== n && null !== n) {
                          var a = this.getPixelForTick(o);
                          if (
                            (this.options.gridLines.display &&
                              (o ===
                              ("undefined" != typeof this.zeroLineIndex
                                ? this.zeroLineIndex
                                : 0)
                                ? ((this.ctx.lineWidth = this.options.gridLines.zeroLineWidth),
                                  (this.ctx.strokeStyle = this.options.gridLines.zeroLineColor),
                                  (e = !0))
                                : e &&
                                  ((this.ctx.lineWidth = this.options.gridLines.lineWidth),
                                  (this.ctx.strokeStyle = this.options.gridLines.color),
                                  (e = !1)),
                              (a += i.aliasPixel(this.ctx.lineWidth)),
                              this.ctx.beginPath(),
                              this.options.gridLines.drawTicks &&
                                (this.ctx.moveTo(m, a), this.ctx.lineTo(g, a)),
                              this.options.gridLines.drawOnChartArea &&
                                (this.ctx.moveTo(t.left, a),
                                this.ctx.lineTo(t.right, a)),
                              this.ctx.stroke()),
                            this.options.ticks.display)
                          ) {
                            var s,
                              r = this.getPixelForTick(
                                o,
                                this.options.gridLines.offsetGridLines
                              );
                            this.ctx.save(),
                              "left" === this.options.position
                                ? this.options.ticks.mirror
                                  ? ((s =
                                      this.right + this.options.ticks.padding),
                                    (this.ctx.textAlign = "left"))
                                  : ((s =
                                      this.right - this.options.ticks.padding),
                                    (this.ctx.textAlign = "right"))
                                : this.options.ticks.mirror
                                ? ((s = this.left - this.options.ticks.padding),
                                  (this.ctx.textAlign = "right"))
                                : ((s = this.left + this.options.ticks.padding),
                                  (this.ctx.textAlign = "left")),
                              this.ctx.translate(s, r),
                              this.ctx.rotate(
                                i.toRadians(this.labelRotation) * -1
                              ),
                              (this.ctx.font = h),
                              (this.ctx.textBaseline = "middle"),
                              this.ctx.fillText(n, 0, 0),
                              this.ctx.restore();
                          }
                        }
                      },
                      this
                    ),
                    this.options.scaleLabel.display)
                  ) {
                    (o =
                      "left" === this.options.position
                        ? this.left + this.options.scaleLabel.fontSize / 2
                        : this.right - this.options.scaleLabel.fontSize / 2),
                      (a = this.top + (this.bottom - this.top) / 2);
                    var v =
                      "left" === this.options.position
                        ? -0.5 * Math.PI
                        : 0.5 * Math.PI;
                    this.ctx.save(),
                      this.ctx.translate(o, a),
                      this.ctx.rotate(v),
                      (this.ctx.textAlign = "center"),
                      (this.ctx.fillStyle = this.options.scaleLabel.fontColor),
                      (this.ctx.font = i.fontString(
                        this.options.scaleLabel.fontSize,
                        this.options.scaleLabel.fontStyle,
                        this.options.scaleLabel.fontFamily
                      )),
                      (this.ctx.textBaseline = "middle"),
                      this.ctx.fillText(
                        this.options.scaleLabel.labelString,
                        0,
                        0
                      ),
                      this.ctx.restore();
                  }
                }
                (this.ctx.lineWidth = this.options.gridLines.lineWidth),
                  (this.ctx.strokeStyle = this.options.gridLines.color);
                var y = this.left,
                  b = this.right,
                  x = this.top,
                  w = this.bottom;
                this.isHorizontal()
                  ? ((x = w =
                      "top" === this.options.position ? this.bottom : this.top),
                    (x += i.aliasPixel(this.ctx.lineWidth)),
                    (w += i.aliasPixel(this.ctx.lineWidth)))
                  : ((y = b =
                      "left" === this.options.position
                        ? this.right
                        : this.left),
                    (y += i.aliasPixel(this.ctx.lineWidth)),
                    (b += i.aliasPixel(this.ctx.lineWidth))),
                  this.ctx.beginPath(),
                  this.ctx.moveTo(y, x),
                  this.ctx.lineTo(b, w),
                  this.ctx.stroke();
              }
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        e.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function (t, e, n) {
            (this.constructors[t] = e), (this.defaults[t] = i.clone(n));
          },
          getScaleConstructor: function (t) {
            return this.constructors.hasOwnProperty(t)
              ? this.constructors[t]
              : void 0;
          },
          getScaleDefaults: function (t) {
            return this.defaults.hasOwnProperty(t)
              ? i.scaleMerge(e.defaults.scale, this.defaults[t])
              : {};
          },
          addScalesToLayout: function (t) {
            i.each(t.scales, function (i) {
              e.layoutService.addBox(t, i);
            });
          },
        };
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.global.title = {
          display: !1,
          position: "top",
          fullWidth: !0,
          fontColor: "#666",
          fontFamily: "Helvetica Neue",
          fontSize: 12,
          fontStyle: "bold",
          padding: 10,
          text: "",
        }),
          (e.Title = e.Element.extend({
            initialize: function (t) {
              i.extend(this, t),
                (this.options = i.configMerge(
                  e.defaults.global.title,
                  t.options
                )),
                (this.legendHitBoxes = []);
            },
            beforeUpdate: i.noop,
            update: function (t, e, i) {
              return (
                this.beforeUpdate(),
                (this.maxWidth = t),
                (this.maxHeight = e),
                (this.margins = i),
                this.beforeSetDimensions(),
                this.setDimensions(),
                this.afterSetDimensions(),
                this.beforeBuildLabels(),
                this.buildLabels(),
                this.afterBuildLabels(),
                this.beforeFit(),
                this.fit(),
                this.afterFit(),
                this.afterUpdate(),
                this.minSize
              );
            },
            afterUpdate: i.noop,
            beforeSetDimensions: i.noop,
            setDimensions: function () {
              this.isHorizontal()
                ? ((this.width = this.maxWidth),
                  (this.left = 0),
                  (this.right = this.width))
                : ((this.height = this.maxHeight),
                  (this.top = 0),
                  (this.bottom = this.height)),
                (this.paddingLeft = 0),
                (this.paddingTop = 0),
                (this.paddingRight = 0),
                (this.paddingBottom = 0),
                (this.minSize = { width: 0, height: 0 });
            },
            afterSetDimensions: i.noop,
            beforeBuildLabels: i.noop,
            buildLabels: i.noop,
            afterBuildLabels: i.noop,
            beforeFit: i.noop,
            fit: function () {
              this.ctx,
                i.fontString(
                  this.options.fontSize,
                  this.options.fontStyle,
                  this.options.fontFamily
                );
              this.isHorizontal()
                ? (this.minSize.width = this.maxWidth)
                : (this.minSize.width = 0),
                this.isHorizontal()
                  ? (this.minSize.height = 0)
                  : (this.minSize.height = this.maxHeight),
                this.isHorizontal() &&
                  this.options.display &&
                  (this.minSize.height +=
                    this.options.fontSize + 2 * this.options.padding),
                (this.width = this.minSize.width),
                (this.height = this.minSize.height);
            },
            afterFit: i.noop,
            isHorizontal: function () {
              return (
                "top" == this.options.position ||
                "bottom" == this.options.position
              );
            },
            draw: function () {
              if (this.options.display) {
                var t,
                  e,
                  n = this.ctx;
                if (this.isHorizontal())
                  this.options.display &&
                    ((n.textAlign = "center"),
                    (n.textBaseline = "middle"),
                    (n.fillStyle = this.options.fontColor),
                    (n.font = i.fontString(
                      this.options.fontSize,
                      this.options.fontStyle,
                      this.options.fontFamily
                    )),
                    (t = this.left + (this.right - this.left) / 2),
                    (e = this.top + (this.bottom - this.top) / 2),
                    n.fillText(this.options.text, t, e));
                else if (this.options.display) {
                  (t =
                    "left" == this.options.position
                      ? this.left + this.options.fontSize / 2
                      : this.right - this.options.fontSize / 2),
                    (e = this.top + (this.bottom - this.top) / 2);
                  var o =
                    "left" == this.options.position
                      ? -0.5 * Math.PI
                      : 0.5 * Math.PI;
                  n.save(),
                    n.translate(t, e),
                    n.rotate(o),
                    (n.textAlign = "center"),
                    (n.fillStyle = this.options.fontColor),
                    (n.font = i.fontString(
                      this.options.fontSize,
                      this.options.fontStyle,
                      this.options.fontFamily
                    )),
                    (n.textBaseline = "middle"),
                    n.fillText(this.options.text, 0, 0),
                    n.restore();
                }
              }
            },
          }));
      }.call(this),
      function () {
        "use strict";
        function t(t, e) {
          return e && (n.isArray(e) ? (t = t.concat(e)) : t.push(e)), t;
        }
        var e = this,
          i = e.Chart,
          n = i.helpers;
        (i.defaults.global.tooltips = {
          enabled: !0,
          custom: null,
          mode: "single",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          titleFontSize: 12,
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleColor: "#fff",
          titleAlign: "left",
          bodyFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          bodyFontSize: 12,
          bodyFontStyle: "normal",
          bodySpacing: 2,
          bodyColor: "#fff",
          bodyAlign: "left",
          footerFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          footerFontSize: 12,
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          callbacks: {
            beforeTitle: n.noop,
            title: function (t, e) {
              var i = "";
              return (
                t.length > 0 &&
                  (t[0].xLabel
                    ? (i = t[0].xLabel)
                    : e.labels.length > 0 &&
                      t[0].index < e.labels.length &&
                      (i = e.labels[t[0].index])),
                i
              );
            },
            afterTitle: n.noop,
            beforeBody: n.noop,
            beforeLabel: n.noop,
            label: function (t, e) {
              var i = e.datasets[t.datasetIndex].label || "";
              return i + ": " + t.yLabel;
            },
            afterLabel: n.noop,
            afterBody: n.noop,
            beforeFooter: n.noop,
            footer: n.noop,
            afterFooter: n.noop,
          },
        }),
          (i.Tooltip = i.Element.extend({
            initialize: function () {
              var t = this._options;
              n.extend(this, {
                _model: {
                  xPadding: t.tooltips.xPadding,
                  yPadding: t.tooltips.yPadding,
                  bodyColor: t.tooltips.bodyColor,
                  _bodyFontFamily: t.tooltips.bodyFontFamily,
                  _bodyFontStyle: t.tooltips.bodyFontStyle,
                  _bodyAlign: t.tooltips.bodyAlign,
                  bodyFontSize: t.tooltips.bodyFontSize,
                  bodySpacing: t.tooltips.bodySpacing,
                  titleColor: t.tooltips.titleColor,
                  _titleFontFamily: t.tooltips.titleFontFamily,
                  _titleFontStyle: t.tooltips.titleFontStyle,
                  titleFontSize: t.tooltips.titleFontSize,
                  _titleAlign: t.tooltips.titleAlign,
                  titleSpacing: t.tooltips.titleSpacing,
                  titleMarginBottom: t.tooltips.titleMarginBottom,
                  footerColor: t.tooltips.footerColor,
                  _footerFontFamily: t.tooltips.footerFontFamily,
                  _footerFontStyle: t.tooltips.footerFontStyle,
                  footerFontSize: t.tooltips.footerFontSize,
                  _footerAlign: t.tooltips.footerAlign,
                  footerSpacing: t.tooltips.footerSpacing,
                  footerMarginTop: t.tooltips.footerMarginTop,
                  caretSize: t.tooltips.caretSize,
                  cornerRadius: t.tooltips.cornerRadius,
                  backgroundColor: t.tooltips.backgroundColor,
                  opacity: 0,
                  legendColorBackground: t.tooltips.multiKeyBackground,
                },
              });
            },
            getTitle: function () {
              var e = this._options.tooltips.callbacks.beforeTitle.apply(
                  this,
                  arguments
                ),
                i = this._options.tooltips.callbacks.title.apply(
                  this,
                  arguments
                ),
                n = this._options.tooltips.callbacks.afterTitle.apply(
                  this,
                  arguments
                ),
                o = [];
              return (o = t(o, e)), (o = t(o, i)), (o = t(o, n));
            },
            getBeforeBody: function () {
              var t = this._options.tooltips.callbacks.beforeBody.apply(
                this,
                arguments
              );
              return n.isArray(t) ? t : void 0 !== t ? [t] : [];
            },
            getBody: function (t, e) {
              var i = [];
              return (
                n.each(
                  t,
                  function (t) {
                    var n =
                        this._options.tooltips.callbacks.beforeLabel.call(
                          this,
                          t,
                          e
                        ) || "",
                      o =
                        this._options.tooltips.callbacks.label.call(
                          this,
                          t,
                          e
                        ) || "",
                      a =
                        this._options.tooltips.callbacks.afterLabel.call(
                          this,
                          t,
                          e
                        ) || "";
                    i.push(n + o + a);
                  },
                  this
                ),
                i
              );
            },
            getAfterBody: function () {
              var t = this._options.tooltips.callbacks.afterBody.apply(
                this,
                arguments
              );
              return n.isArray(t) ? t : void 0 !== t ? [t] : [];
            },
            getFooter: function () {
              var e = this._options.tooltips.callbacks.beforeFooter.apply(
                  this,
                  arguments
                ),
                i = this._options.tooltips.callbacks.footer.apply(
                  this,
                  arguments
                ),
                n = this._options.tooltips.callbacks.afterFooter.apply(
                  this,
                  arguments
                ),
                o = [];
              return (o = t(o, e)), (o = t(o, i)), (o = t(o, n));
            },
            getAveragePosition: function (t) {
              if (!t.length) return !1;
              var e = [],
                i = [];
              n.each(t, function (t) {
                if (t) {
                  var n = t.tooltipPosition();
                  e.push(n.x), i.push(n.y);
                }
              });
              for (var o = 0, a = 0, s = 0; s < e.length; s++)
                (o += e[s]), (a += i[s]);
              return {
                x: Math.round(o / e.length),
                y: Math.round(a / e.length),
              };
            },
            update: function (t) {
              if (this._active.length) {
                this._model.opacity = 1;
                var e,
                  i = this._active[0],
                  o = [],
                  a = [];
                if ("single" === this._options.tooltips.mode) {
                  var s = i._yScale || i._scale;
                  a.push({
                    xLabel: i._xScale
                      ? i._xScale.getLabelForIndex(i._index, i._datasetIndex)
                      : "",
                    yLabel: s
                      ? s.getLabelForIndex(i._index, i._datasetIndex)
                      : "",
                    index: i._index,
                    datasetIndex: i._datasetIndex,
                  }),
                    (e = this.getAveragePosition(this._active));
                } else
                  n.each(this._data.datasets, function (t, e) {
                    if (n.isDatasetVisible(t)) {
                      var o = t.metaData[i._index];
                      if (o) {
                        var s = i._yScale || i._scale;
                        a.push({
                          xLabel: o._xScale
                            ? o._xScale.getLabelForIndex(
                                o._index,
                                o._datasetIndex
                              )
                            : "",
                          yLabel: s
                            ? s.getLabelForIndex(o._index, o._datasetIndex)
                            : "",
                          index: i._index,
                          datasetIndex: e,
                        });
                      }
                    }
                  }),
                    n.each(this._active, function (t) {
                      t &&
                        o.push({
                          borderColor: t._view.borderColor,
                          backgroundColor: t._view.backgroundColor,
                        });
                    }),
                    (e = this.getAveragePosition(this._active)),
                    (e.y = this._active[0]._yScale.getPixelForDecimal(0.5));
                n.extend(this._model, {
                  title: this.getTitle(a, this._data),
                  beforeBody: this.getBeforeBody(a, this._data),
                  body: this.getBody(a, this._data),
                  afterBody: this.getAfterBody(a, this._data),
                  footer: this.getFooter(a, this._data),
                }),
                  n.extend(this._model, {
                    x: Math.round(e.x),
                    y: Math.round(e.y),
                    caretPadding: n.getValueOrDefault(e.padding, 2),
                    labelColors: o,
                  });
                var r = this.getTooltipSize(this._model);
                this.determineAlignment(r),
                  n.extend(
                    this._model,
                    this.getBackgroundPoint(this._model, r)
                  );
              } else this._model.opacity = 0;
              return (
                t &&
                  this._options.tooltips.custom &&
                  this._options.tooltips.custom.call(this, this._model),
                this
              );
            },
            getTooltipSize: function (t) {
              var e = this._chart.ctx,
                i = { height: 2 * t.yPadding, width: 0 },
                o = t.body.length + t.beforeBody.length + t.afterBody.length;
              return (
                (i.height += t.title.length * t.titleFontSize),
                (i.height += (t.title.length - 1) * t.titleSpacing),
                (i.height += t.title.length ? t.titleMarginBottom : 0),
                (i.height += o * t.bodyFontSize),
                (i.height += o ? (o - 1) * t.bodySpacing : 0),
                (i.height += t.footer.length ? t.footerMarginTop : 0),
                (i.height += t.footer.length * t.footerFontSize),
                (i.height += t.footer.length
                  ? (t.footer.length - 1) * t.footerSpacing
                  : 0),
                (e.font = n.fontString(
                  t.titleFontSize,
                  t._titleFontStyle,
                  t._titleFontFamily
                )),
                n.each(t.title, function (t) {
                  i.width = Math.max(i.width, e.measureText(t).width);
                }),
                (e.font = n.fontString(
                  t.bodyFontSize,
                  t._bodyFontStyle,
                  t._bodyFontFamily
                )),
                n.each(t.beforeBody.concat(t.afterBody), function (t) {
                  i.width = Math.max(i.width, e.measureText(t).width);
                }),
                n.each(
                  t.body,
                  function (n) {
                    i.width = Math.max(
                      i.width,
                      e.measureText(n).width +
                        ("single" !== this._options.tooltips.mode
                          ? t.bodyFontSize + 2
                          : 0)
                    );
                  },
                  this
                ),
                (e.font = n.fontString(
                  t.footerFontSize,
                  t._footerFontStyle,
                  t._footerFontFamily
                )),
                n.each(t.footer, function (t) {
                  i.width = Math.max(i.width, e.measureText(t).width);
                }),
                (i.width += 2 * t.xPadding),
                i
              );
            },
            determineAlignment: function (t) {
              (this._model.xAlign = this._model.yAlign = "center"),
                this._model.y < t.height
                  ? (this._model.yAlign = "top")
                  : this._model.y > this._chart.height - t.height &&
                    (this._model.yAlign = "bottom");
              var e,
                i,
                n,
                o,
                a,
                s = this,
                r =
                  (this._chartInstance.chartArea.left +
                    this._chartInstance.chartArea.right) /
                  2,
                l =
                  (this._chartInstance.chartArea.top +
                    this._chartInstance.chartArea.bottom) /
                  2;
              "center" === this._model.yAlign
                ? ((e = function (t) {
                    return t <= r;
                  }),
                  (i = function (t) {
                    return t > r;
                  }))
                : ((e = function (e) {
                    return e <= t.width / 2;
                  }),
                  (i = function (e) {
                    return e >= s._chart.width - t.width / 2;
                  })),
                (n = function (e) {
                  return e + t.width > s._chart.width;
                }),
                (o = function (e) {
                  return e - t.width < 0;
                }),
                (a = function (t) {
                  return t <= l ? "top" : "bottom";
                }),
                e(this._model.x)
                  ? ((this._model.xAlign = "left"),
                    n(this._model.x) &&
                      ((this._model.xAlign = "center"),
                      (this._model.yAlign = a(this._model.y))))
                  : i(this._model.x) &&
                    ((this._model.xAlign = "right"),
                    o(this._model.x) &&
                      ((this._model.xAlign = "center"),
                      (this._model.yAlign = a(this._model.y))));
            },
            getBackgroundPoint: function (t, e) {
              var i = { x: t.x, y: t.y };
              return (
                "right" === t.xAlign
                  ? (i.x -= e.width)
                  : "center" === t.xAlign && (i.x -= e.width / 2),
                "top" === t.yAlign
                  ? (i.y += t.caretPadding + t.caretSize)
                  : "bottom" === t.yAlign
                  ? (i.y -= e.height + t.caretPadding + t.caretSize)
                  : (i.y -= e.height / 2),
                "center" == t.yAlign
                  ? "left" === t.xAlign
                    ? (i.x += t.caretPadding + t.caretSize)
                    : "right" === t.xAlign &&
                      (i.x -= t.caretPadding + t.caretSize)
                  : "left" === t.xAlign
                  ? (i.x -= t.cornerRadius + t.caretPadding)
                  : "right" === t.xAlign &&
                    (i.x += t.cornerRadius + t.caretPadding),
                i
              );
            },
            drawCaret: function (t, e, i, o) {
              var a,
                s,
                r,
                l,
                h,
                c,
                u = this._view,
                d = this._chart.ctx;
              "center" === u.yAlign
                ? ("left" === u.xAlign
                    ? ((a = t.x), (s = a - u.caretSize), (r = a))
                    : ((a = t.x + e.width), (s = a + u.caretSize), (r = a)),
                  (h = t.y + e.height / 2),
                  (l = h - u.caretSize),
                  (c = h + u.caretSize))
                : ("left" === u.xAlign
                    ? ((a = t.x + u.cornerRadius),
                      (s = a + u.caretSize),
                      (r = s + u.caretSize))
                    : "right" === u.xAlign
                    ? ((a = t.x + e.width - u.cornerRadius),
                      (s = a - u.caretSize),
                      (r = s - u.caretSize))
                    : ((s = t.x + e.width / 2),
                      (a = s - u.caretSize),
                      (r = s + u.caretSize)),
                  "top" === u.yAlign
                    ? ((l = t.y), (h = l - u.caretSize), (c = l))
                    : ((l = t.y + e.height), (h = l + u.caretSize), (c = l))),
                (d.fillStyle = n.color(u.backgroundColor).alpha(i).rgbString()),
                d.beginPath(),
                d.moveTo(a, l),
                d.lineTo(s, h),
                d.lineTo(r, c),
                d.closePath(),
                d.fill();
            },
            drawTitle: function (t, e, i, o) {
              e.title.length &&
                ((i.textAlign = e._titleAlign),
                (i.textBaseline = "top"),
                (i.fillStyle = n.color(e.titleColor).alpha(o).rgbString()),
                (i.font = n.fontString(
                  e.titleFontSize,
                  e._titleFontStyle,
                  e._titleFontFamily
                )),
                n.each(e.title, function (n, o) {
                  i.fillText(n, t.x, t.y),
                    (t.y += e.titleFontSize + e.titleSpacing),
                    o + 1 === e.title.length &&
                      (t.y += e.titleMarginBottom - e.titleSpacing);
                }));
            },
            drawBody: function (t, e, i, o) {
              (i.textAlign = e._bodyAlign),
                (i.textBaseline = "top"),
                (i.fillStyle = n.color(e.bodyColor).alpha(o).rgbString()),
                (i.font = n.fontString(
                  e.bodyFontSize,
                  e._bodyFontStyle,
                  e._bodyFontFamily
                )),
                n.each(e.beforeBody, function (n) {
                  i.fillText(n, t.x, t.y),
                    (t.y += e.bodyFontSize + e.bodySpacing);
                }),
                n.each(
                  e.body,
                  function (a, s) {
                    "single" !== this._options.tooltips.mode &&
                      ((i.fillStyle = n
                        .color(e.legendColorBackground)
                        .alpha(o)
                        .rgbaString()),
                      i.fillRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize),
                      (i.strokeStyle = n
                        .color(e.labelColors[s].borderColor)
                        .alpha(o)
                        .rgbaString()),
                      i.strokeRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize),
                      (i.fillStyle = n
                        .color(e.labelColors[s].backgroundColor)
                        .alpha(o)
                        .rgbaString()),
                      i.fillRect(
                        t.x + 1,
                        t.y + 1,
                        e.bodyFontSize - 2,
                        e.bodyFontSize - 2
                      ),
                      (i.fillStyle = n
                        .color(e.bodyColor)
                        .alpha(o)
                        .rgbaString())),
                      i.fillText(
                        a,
                        t.x +
                          ("single" !== this._options.tooltips.mode
                            ? e.bodyFontSize + 2
                            : 0),
                        t.y
                      ),
                      (t.y += e.bodyFontSize + e.bodySpacing);
                  },
                  this
                ),
                n.each(e.afterBody, function (n) {
                  i.fillText(n, t.x, t.y), (t.y += e.bodyFontSize);
                }),
                (t.y -= e.bodySpacing);
            },
            drawFooter: function (t, e, i, o) {
              e.footer.length &&
                ((t.y += e.footerMarginTop),
                (i.textAlign = e._footerAlign),
                (i.textBaseline = "top"),
                (i.fillStyle = n.color(e.footerColor).alpha(o).rgbString()),
                (i.font = n.fontString(
                  e.footerFontSize,
                  e._footerFontStyle,
                  e._footerFontFamily
                )),
                n.each(e.footer, function (n) {
                  i.fillText(n, t.x, t.y),
                    (t.y += e.footerFontSize + e.footerSpacing);
                }));
            },
            draw: function () {
              var t = this._chart.ctx,
                e = this._view;
              if (0 !== e.opacity) {
                var i = e.caretPadding,
                  o = this.getTooltipSize(e),
                  a = { x: e.x, y: e.y },
                  s = Math.abs(e.opacity < 0.001) ? 0 : e.opacity;
                this._options.tooltips.enabled &&
                  ((t.fillStyle = n
                    .color(e.backgroundColor)
                    .alpha(s)
                    .rgbString()),
                  n.drawRoundedRectangle(
                    t,
                    a.x,
                    a.y,
                    o.width,
                    o.height,
                    e.cornerRadius
                  ),
                  t.fill(),
                  this.drawCaret(a, o, s, i),
                  (a.x += e.xPadding),
                  (a.y += e.yPadding),
                  this.drawTitle(a, e, t, s),
                  this.drawBody(a, e, t, s),
                  this.drawFooter(a, e, t, s));
              }
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.bar = {
          hover: { mode: "label" },
          scales: {
            xAxes: [
              {
                type: "category",
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                gridLines: { offsetGridLines: !0 },
              },
            ],
            yAxes: [{ type: "linear" }],
          },
        }),
          (e.controllers.bar = e.DatasetController.extend({
            initialize: function (t, i) {
              e.DatasetController.prototype.initialize.call(this, t, i),
                (this.getDataset().bar = !0);
            },
            getBarCount: function () {
              var t = 0;
              return (
                i.each(this.chart.data.datasets, function (e) {
                  i.isDatasetVisible(e) && e.bar && ++t;
                }),
                t
              );
            },
            addElements: function () {
              (this.getDataset().metaData = this.getDataset().metaData || []),
                i.each(
                  this.getDataset().data,
                  function (t, i) {
                    this.getDataset().metaData[i] =
                      this.getDataset().metaData[i] ||
                      new e.elements.Rectangle({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: i,
                      });
                  },
                  this
                );
            },
            addElementAndReset: function (t) {
              this.getDataset().metaData = this.getDataset().metaData || [];
              var i = new e.elements.Rectangle({
                  _chart: this.chart.chart,
                  _datasetIndex: this.index,
                  _index: t,
                }),
                n = this.getBarCount();
              this.updateElement(i, t, !0, n),
                this.getDataset().metaData.splice(t, 0, i);
            },
            update: function (t) {
              var e = this.getBarCount();
              i.each(
                this.getDataset().metaData,
                function (i, n) {
                  this.updateElement(i, n, t, e);
                },
                this
              );
            },
            updateElement: function (t, e, n, o) {
              var a,
                s = this.getScaleForId(this.getDataset().xAxisID),
                r = this.getScaleForId(this.getDataset().yAxisID);
              (a =
                r.min < 0 && r.max < 0
                  ? r.getPixelForValue(r.max)
                  : r.min > 0 && r.max > 0
                  ? r.getPixelForValue(r.min)
                  : r.getPixelForValue(0)),
                i.extend(t, {
                  _chart: this.chart.chart,
                  _xScale: s,
                  _yScale: r,
                  _datasetIndex: this.index,
                  _index: e,
                  _model: {
                    x: this.calculateBarX(e, this.index),
                    y: n ? a : this.calculateBarY(e, this.index),
                    label: this.chart.data.labels[e],
                    datasetLabel: this.getDataset().label,
                    base: this.calculateBarBase(this.index, e),
                    width: this.calculateBarWidth(o),
                    backgroundColor:
                      t.custom && t.custom.backgroundColor
                        ? t.custom.backgroundColor
                        : i.getValueAtIndexOrDefault(
                            this.getDataset().backgroundColor,
                            e,
                            this.chart.options.elements.rectangle
                              .backgroundColor
                          ),
                    borderColor:
                      t.custom && t.custom.borderColor
                        ? t.custom.borderColor
                        : i.getValueAtIndexOrDefault(
                            this.getDataset().borderColor,
                            e,
                            this.chart.options.elements.rectangle.borderColor
                          ),
                    borderWidth:
                      t.custom && t.custom.borderWidth
                        ? t.custom.borderWidth
                        : i.getValueAtIndexOrDefault(
                            this.getDataset().borderWidth,
                            e,
                            this.chart.options.elements.rectangle.borderWidth
                          ),
                  },
                }),
                t.pivot();
            },
            calculateBarBase: function (t, e) {
              var n =
                  (this.getScaleForId(this.getDataset().xAxisID),
                  this.getScaleForId(this.getDataset().yAxisID)),
                o = 0;
              if (n.options.stacked) {
                var a = this.chart.data.datasets[t].data[e];
                if (a < 0)
                  for (var s = 0; s < t; s++) {
                    var r = this.chart.data.datasets[s];
                    i.isDatasetVisible(r) &&
                      r.yAxisID === n.id &&
                      r.bar &&
                      (o += r.data[e] < 0 ? r.data[e] : 0);
                  }
                else
                  for (var l = 0; l < t; l++) {
                    var h = this.chart.data.datasets[l];
                    i.isDatasetVisible(h) &&
                      h.yAxisID === n.id &&
                      h.bar &&
                      (o += h.data[e] > 0 ? h.data[e] : 0);
                  }
                return n.getPixelForValue(o);
              }
              return (
                (o = n.getPixelForValue(n.min)),
                n.beginAtZero ||
                (n.min <= 0 && n.max >= 0) ||
                (n.min >= 0 && n.max <= 0)
                  ? (o = n.getPixelForValue(0, 0))
                  : n.min < 0 && n.max < 0 && (o = n.getPixelForValue(n.max)),
                o
              );
            },
            getRuler: function () {
              var t = this.getScaleForId(this.getDataset().xAxisID),
                e =
                  (this.getScaleForId(this.getDataset().yAxisID),
                  this.getBarCount()),
                i = function () {
                  for (
                    var e = t.getPixelForTick(1) - t.getPixelForTick(0), i = 2;
                    i < this.getDataset().data.length;
                    i++
                  )
                    e = Math.min(
                      t.getPixelForTick(i) - t.getPixelForTick(i - 1),
                      e
                    );
                  return e;
                }.call(this),
                n = i * t.options.categoryPercentage,
                o = (i - i * t.options.categoryPercentage) / 2,
                a = n / e,
                s = a * t.options.barPercentage,
                r = a - a * t.options.barPercentage;
              return {
                datasetCount: e,
                tickWidth: i,
                categoryWidth: n,
                categorySpacing: o,
                fullBarWidth: a,
                barWidth: s,
                barSpacing: r,
              };
            },
            calculateBarWidth: function () {
              var t = this.getScaleForId(this.getDataset().xAxisID),
                e = this.getRuler();
              return t.options.stacked ? e.categoryWidth : e.barWidth;
            },
            getBarIndex: function (t) {
              for (var e = 0, n = 0; n < t; ++n)
                i.isDatasetVisible(this.chart.data.datasets[n]) &&
                  this.chart.data.datasets[n].bar &&
                  ++e;
              return e;
            },
            calculateBarX: function (t, e) {
              var i =
                  (this.getScaleForId(this.getDataset().yAxisID),
                  this.getScaleForId(this.getDataset().xAxisID)),
                n = this.getBarIndex(e),
                o = this.getRuler(),
                a = i.getPixelForValue(null, t, e, this.chart.isCombo);
              return (
                (a -= this.chart.isCombo ? o.tickWidth / 2 : 0),
                i.options.stacked
                  ? a + o.categoryWidth / 2 + o.categorySpacing
                  : a +
                    o.barWidth / 2 +
                    o.categorySpacing +
                    o.barWidth * n +
                    o.barSpacing / 2 +
                    o.barSpacing * n
              );
            },
            calculateBarY: function (t, e) {
              var n =
                  (this.getScaleForId(this.getDataset().xAxisID),
                  this.getScaleForId(this.getDataset().yAxisID)),
                o = this.getDataset().data[t];
              if (n.options.stacked) {
                for (var a = 0, s = 0, r = 0; r < e; r++) {
                  var l = this.chart.data.datasets[r];
                  i.isDatasetVisible(l) &&
                    l.bar &&
                    l.yAxisID === n.id &&
                    (l.data[t] < 0
                      ? (s += l.data[t] || 0)
                      : (a += l.data[t] || 0));
                }
                return o < 0
                  ? n.getPixelForValue(s + o)
                  : n.getPixelForValue(a + o);
              }
              return n.getPixelForValue(o);
            },
            draw: function (t) {
              var e = t || 1;
              i.each(
                this.getDataset().metaData,
                function (t, i) {
                  var n = this.getDataset().data[i];
                  null === n ||
                    void 0 === n ||
                    isNaN(n) ||
                    t.transition(e).draw();
                },
                this
              );
            },
            setHoverStyle: function (t) {
              var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index;
              (t._model.backgroundColor =
                t.custom && t.custom.hoverBackgroundColor
                  ? t.custom.hoverBackgroundColor
                  : i.getValueAtIndexOrDefault(
                      e.hoverBackgroundColor,
                      n,
                      i
                        .color(t._model.backgroundColor)
                        .saturate(0.5)
                        .darken(0.1)
                        .rgbString()
                    )),
                (t._model.borderColor =
                  t.custom && t.custom.hoverBorderColor
                    ? t.custom.hoverBorderColor
                    : i.getValueAtIndexOrDefault(
                        e.hoverBorderColor,
                        n,
                        i
                          .color(t._model.borderColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.hoverBorderWidth
                    ? t.custom.hoverBorderWidth
                    : i.getValueAtIndexOrDefault(
                        e.hoverBorderWidth,
                        n,
                        t._model.borderWidth
                      ));
            },
            removeHoverStyle: function (t) {
              var e = (this.chart.data.datasets[t._datasetIndex], t._index);
              (t._model.backgroundColor =
                t.custom && t.custom.backgroundColor
                  ? t.custom.backgroundColor
                  : i.getValueAtIndexOrDefault(
                      this.getDataset().backgroundColor,
                      e,
                      this.chart.options.elements.rectangle.backgroundColor
                    )),
                (t._model.borderColor =
                  t.custom && t.custom.borderColor
                    ? t.custom.borderColor
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().borderColor,
                        e,
                        this.chart.options.elements.rectangle.borderColor
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.borderWidth
                    ? t.custom.borderWidth
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().borderWidth,
                        e,
                        this.chart.options.elements.rectangle.borderWidth
                      ));
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.bubble = {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
            yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
          },
          tooltips: {
            callbacks: {
              title: function (t, e) {
                return "";
              },
              label: function (t, e) {
                var i = e.datasets[t.datasetIndex].label || "",
                  n = e.datasets[t.datasetIndex].data[t.index];
                return i + ": (" + n.x + ", " + n.y + ", " + n.r + ")";
              },
            },
          },
        }),
          (e.controllers.bubble = e.DatasetController.extend({
            addElements: function () {
              (this.getDataset().metaData = this.getDataset().metaData || []),
                i.each(
                  this.getDataset().data,
                  function (t, i) {
                    this.getDataset().metaData[i] =
                      this.getDataset().metaData[i] ||
                      new e.elements.Point({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: i,
                      });
                  },
                  this
                );
            },
            addElementAndReset: function (t) {
              this.getDataset().metaData = this.getDataset().metaData || [];
              var i = new e.elements.Point({
                _chart: this.chart.chart,
                _datasetIndex: this.index,
                _index: t,
              });
              this.updateElement(i, t, !0),
                this.getDataset().metaData.splice(t, 0, i);
            },
            update: function (t) {
              var e,
                n = this.getDataset().metaData,
                o = this.getScaleForId(this.getDataset().yAxisID);
              this.getScaleForId(this.getDataset().xAxisID);
              (e =
                o.min < 0 && o.max < 0
                  ? o.getPixelForValue(o.max)
                  : o.min > 0 && o.max > 0
                  ? o.getPixelForValue(o.min)
                  : o.getPixelForValue(0)),
                i.each(
                  n,
                  function (e, i) {
                    this.updateElement(e, i, t);
                  },
                  this
                );
            },
            updateElement: function (t, e, n) {
              var o,
                a = this.getScaleForId(this.getDataset().yAxisID),
                s = this.getScaleForId(this.getDataset().xAxisID);
              (o =
                a.min < 0 && a.max < 0
                  ? a.getPixelForValue(a.max)
                  : a.min > 0 && a.max > 0
                  ? a.getPixelForValue(a.min)
                  : a.getPixelForValue(0)),
                i.extend(t, {
                  _chart: this.chart.chart,
                  _xScale: s,
                  _yScale: a,
                  _datasetIndex: this.index,
                  _index: e,
                  _model: {
                    x: n
                      ? s.getPixelForDecimal(0.5)
                      : s.getPixelForValue(
                          this.getDataset().data[e],
                          e,
                          this.index,
                          this.chart.isCombo
                        ),
                    y: n
                      ? o
                      : a.getPixelForValue(
                          this.getDataset().data[e],
                          e,
                          this.index
                        ),
                    radius: n
                      ? 0
                      : t.custom && t.custom.radius
                      ? t.custom.radius
                      : this.getRadius(this.getDataset().data[e]),
                    backgroundColor:
                      t.custom && t.custom.backgroundColor
                        ? t.custom.backgroundColor
                        : i.getValueAtIndexOrDefault(
                            this.getDataset().backgroundColor,
                            e,
                            this.chart.options.elements.point.backgroundColor
                          ),
                    borderColor:
                      t.custom && t.custom.borderColor
                        ? t.custom.borderColor
                        : i.getValueAtIndexOrDefault(
                            this.getDataset().borderColor,
                            e,
                            this.chart.options.elements.point.borderColor
                          ),
                    borderWidth:
                      t.custom && t.custom.borderWidth
                        ? t.custom.borderWidth
                        : i.getValueAtIndexOrDefault(
                            this.getDataset().borderWidth,
                            e,
                            this.chart.options.elements.point.borderWidth
                          ),
                    hitRadius:
                      t.custom && t.custom.hitRadius
                        ? t.custom.hitRadius
                        : i.getValueAtIndexOrDefault(
                            this.getDataset().hitRadius,
                            e,
                            this.chart.options.elements.point.hitRadius
                          ),
                  },
                }),
                (t._model.skip =
                  t.custom && t.custom.skip
                    ? t.custom.skip
                    : isNaN(t._model.x) || isNaN(t._model.y)),
                t.pivot();
            },
            getRadius: function (t) {
              return t.r || this.chart.options.elements.point.radius;
            },
            draw: function (t) {
              var e = t || 1;
              i.each(this.getDataset().metaData, function (t, i) {
                t.transition(e), t.draw();
              });
            },
            setHoverStyle: function (t) {
              var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index;
              (t._model.radius =
                t.custom && t.custom.hoverRadius
                  ? t.custom.hoverRadius
                  : i.getValueAtIndexOrDefault(
                      e.hoverRadius,
                      n,
                      this.chart.options.elements.point.hoverRadius
                    ) + this.getRadius(this.getDataset().data[t._index])),
                (t._model.backgroundColor =
                  t.custom && t.custom.hoverBackgroundColor
                    ? t.custom.hoverBackgroundColor
                    : i.getValueAtIndexOrDefault(
                        e.hoverBackgroundColor,
                        n,
                        i
                          .color(t._model.backgroundColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                (t._model.borderColor =
                  t.custom && t.custom.hoverBorderColor
                    ? t.custom.hoverBorderColor
                    : i.getValueAtIndexOrDefault(
                        e.hoverBorderColor,
                        n,
                        i
                          .color(t._model.borderColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.hoverBorderWidth
                    ? t.custom.hoverBorderWidth
                    : i.getValueAtIndexOrDefault(
                        e.hoverBorderWidth,
                        n,
                        t._model.borderWidth
                      ));
            },
            removeHoverStyle: function (t) {
              var e = (this.chart.data.datasets[t._datasetIndex], t._index);
              (t._model.radius =
                t.custom && t.custom.radius
                  ? t.custom.radius
                  : this.getRadius(this.getDataset().data[t._index])),
                (t._model.backgroundColor =
                  t.custom && t.custom.backgroundColor
                    ? t.custom.backgroundColor
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().backgroundColor,
                        e,
                        this.chart.options.elements.point.backgroundColor
                      )),
                (t._model.borderColor =
                  t.custom && t.custom.borderColor
                    ? t.custom.borderColor
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().borderColor,
                        e,
                        this.chart.options.elements.point.borderColor
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.borderWidth
                    ? t.custom.borderWidth
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().borderWidth,
                        e,
                        this.chart.options.elements.point.borderWidth
                      ));
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.doughnut = {
          animation: { animateRotate: !0, animateScale: !1 },
          aspectRatio: 1,
          hover: { mode: "single" },
          legendCallback: function (t) {
            var e = [];
            if (
              (e.push('<ul class="' + t.id + '-legend">'),
              t.data.datasets.length)
            )
              for (var i = 0; i < t.data.datasets[0].data.length; ++i)
                e.push(
                  '<li><span style="background-color:' +
                    t.data.datasets[0].backgroundColor[i] +
                    '">'
                ),
                  t.data.labels[i] && e.push(t.data.labels[i]),
                  e.push("</span></li>");
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function (t) {
                return t.labels.map(function (e, i) {
                  return {
                    text: e,
                    fillStyle: t.datasets[0].backgroundColor[i],
                    hidden: isNaN(t.datasets[0].data[i]),
                    index: i,
                  };
                });
              },
            },
            onClick: function (t, e) {
              i.each(this.chart.data.datasets, function (t) {
                t.metaHiddenData = t.metaHiddenData || [];
                var i = e.index;
                isNaN(t.data[i])
                  ? isNaN(t.metaHiddenData[i]) ||
                    (t.data[i] = t.metaHiddenData[i])
                  : ((t.metaHiddenData[i] = t.data[i]), (t.data[i] = NaN));
              }),
                this.chart.update();
            },
          },
          cutoutPercentage: 50,
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t, e) {
                return (
                  e.labels[t.index] +
                  ": " +
                  e.datasets[t.datasetIndex].data[t.index]
                );
              },
            },
          },
        }),
          (e.defaults.pie = i.clone(e.defaults.doughnut)),
          i.extend(e.defaults.pie, { cutoutPercentage: 0 }),
          (e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend(
            {
              linkScales: function () {},
              addElements: function () {
                (this.getDataset().metaData = this.getDataset().metaData || []),
                  i.each(
                    this.getDataset().data,
                    function (t, i) {
                      this.getDataset().metaData[i] =
                        this.getDataset().metaData[i] ||
                        new e.elements.Arc({
                          _chart: this.chart.chart,
                          _datasetIndex: this.index,
                          _index: i,
                        });
                    },
                    this
                  );
              },
              addElementAndReset: function (t, n) {
                this.getDataset().metaData = this.getDataset().metaData || [];
                var o = new e.elements.Arc({
                  _chart: this.chart.chart,
                  _datasetIndex: this.index,
                  _index: t,
                });
                n &&
                  i.isArray(this.getDataset().backgroundColor) &&
                  this.getDataset().backgroundColor.splice(t, 0, n),
                  this.updateElement(o, t, !0),
                  this.getDataset().metaData.splice(t, 0, o);
              },
              getVisibleDatasetCount: function () {
                return i.where(this.chart.data.datasets, function (t) {
                  return i.isDatasetVisible(t);
                }).length;
              },
              getRingIndex: function (t) {
                for (var e = 0, n = 0; n < t; ++n)
                  i.isDatasetVisible(this.chart.data.datasets[n]) && ++e;
                return e;
              },
              update: function (t) {
                var e = Math.min(
                  this.chart.chartArea.right - this.chart.chartArea.left,
                  this.chart.chartArea.bottom - this.chart.chartArea.top
                );
                (this.chart.outerRadius = Math.max(
                  e / 2 - this.chart.options.elements.arc.borderWidth / 2,
                  0
                )),
                  (this.chart.innerRadius = Math.max(
                    this.chart.options.cutoutPercentage
                      ? (this.chart.outerRadius / 100) *
                          this.chart.options.cutoutPercentage
                      : 1,
                    0
                  )),
                  (this.chart.radiusLength =
                    (this.chart.outerRadius - this.chart.innerRadius) /
                    this.getVisibleDatasetCount()),
                  (this.getDataset().total = 0),
                  i.each(
                    this.getDataset().data,
                    function (t) {
                      isNaN(t) || (this.getDataset().total += Math.abs(t));
                    },
                    this
                  ),
                  (this.outerRadius =
                    this.chart.outerRadius -
                    this.chart.radiusLength * this.getRingIndex(this.index)),
                  (this.innerRadius =
                    this.outerRadius - this.chart.radiusLength),
                  i.each(
                    this.getDataset().metaData,
                    function (e, i) {
                      this.updateElement(e, i, t);
                    },
                    this
                  );
              },
              updateElement: function (t, e, n) {
                var o =
                    (this.chart.chartArea.left + this.chart.chartArea.right) /
                    2,
                  a =
                    (this.chart.chartArea.top + this.chart.chartArea.bottom) /
                    2,
                  s = {
                    x: o,
                    y: a,
                    startAngle: Math.PI * -0.5,
                    endAngle: Math.PI * -0.5,
                    circumference: this.chart.options.animation.animateRotate
                      ? 0
                      : this.calculateCircumference(this.getDataset().data[e]),
                    outerRadius: this.chart.options.animation.animateScale
                      ? 0
                      : this.outerRadius,
                    innerRadius: this.chart.options.animation.animateScale
                      ? 0
                      : this.innerRadius,
                  };
                i.extend(t, {
                  _chart: this.chart.chart,
                  _datasetIndex: this.index,
                  _index: e,
                  _model: n
                    ? s
                    : {
                        x: o,
                        y: a,
                        circumference: this.calculateCircumference(
                          this.getDataset().data[e]
                        ),
                        outerRadius: this.outerRadius,
                        innerRadius: this.innerRadius,
                        backgroundColor:
                          t.custom && t.custom.backgroundColor
                            ? t.custom.backgroundColor
                            : i.getValueAtIndexOrDefault(
                                this.getDataset().backgroundColor,
                                e,
                                this.chart.options.elements.arc.backgroundColor
                              ),
                        hoverBackgroundColor:
                          t.custom && t.custom.hoverBackgroundColor
                            ? t.custom.hoverBackgroundColor
                            : i.getValueAtIndexOrDefault(
                                this.getDataset().hoverBackgroundColor,
                                e,
                                this.chart.options.elements.arc
                                  .hoverBackgroundColor
                              ),
                        borderWidth:
                          t.custom && t.custom.borderWidth
                            ? t.custom.borderWidth
                            : i.getValueAtIndexOrDefault(
                                this.getDataset().borderWidth,
                                e,
                                this.chart.options.elements.arc.borderWidth
                              ),
                        borderColor:
                          t.custom && t.custom.borderColor
                            ? t.custom.borderColor
                            : i.getValueAtIndexOrDefault(
                                this.getDataset().borderColor,
                                e,
                                this.chart.options.elements.arc.borderColor
                              ),
                        label: i.getValueAtIndexOrDefault(
                          this.getDataset().label,
                          e,
                          this.chart.data.labels[e]
                        ),
                      },
                }),
                  n ||
                    (0 === e
                      ? (t._model.startAngle = Math.PI * -0.5)
                      : (t._model.startAngle = this.getDataset().metaData[
                          e - 1
                        ]._model.endAngle),
                    (t._model.endAngle =
                      t._model.startAngle + t._model.circumference),
                    e < this.getDataset().data.length - 1 &&
                      (this.getDataset().metaData[e + 1]._model.startAngle =
                        t._model.endAngle)),
                  t.pivot();
              },
              draw: function (t) {
                var e = t || 1;
                i.each(this.getDataset().metaData, function (t, i) {
                  t.transition(e).draw();
                });
              },
              setHoverStyle: function (t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                  n = t._index;
                (t._model.backgroundColor =
                  t.custom && t.custom.hoverBackgroundColor
                    ? t.custom.hoverBackgroundColor
                    : i.getValueAtIndexOrDefault(
                        e.hoverBackgroundColor,
                        n,
                        i
                          .color(t._model.backgroundColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                  (t._model.borderColor =
                    t.custom && t.custom.hoverBorderColor
                      ? t.custom.hoverBorderColor
                      : i.getValueAtIndexOrDefault(
                          e.hoverBorderColor,
                          n,
                          i
                            .color(t._model.borderColor)
                            .saturate(0.5)
                            .darken(0.1)
                            .rgbString()
                        )),
                  (t._model.borderWidth =
                    t.custom && t.custom.hoverBorderWidth
                      ? t.custom.hoverBorderWidth
                      : i.getValueAtIndexOrDefault(
                          e.hoverBorderWidth,
                          n,
                          t._model.borderWidth
                        ));
              },
              removeHoverStyle: function (t) {
                var e = (this.chart.data.datasets[t._datasetIndex], t._index);
                (t._model.backgroundColor =
                  t.custom && t.custom.backgroundColor
                    ? t.custom.backgroundColor
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().backgroundColor,
                        e,
                        this.chart.options.elements.arc.backgroundColor
                      )),
                  (t._model.borderColor =
                    t.custom && t.custom.borderColor
                      ? t.custom.borderColor
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().borderColor,
                          e,
                          this.chart.options.elements.arc.borderColor
                        )),
                  (t._model.borderWidth =
                    t.custom && t.custom.borderWidth
                      ? t.custom.borderWidth
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().borderWidth,
                          e,
                          this.chart.options.elements.arc.borderWidth
                        ));
              },
              calculateCircumference: function (t) {
                return this.getDataset().total > 0 && !isNaN(t)
                  ? 1.999999 * Math.PI * (t / this.getDataset().total)
                  : 0;
              },
            }
          ));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.line = {
          showLines: !0,
          hover: { mode: "label" },
          scales: {
            xAxes: [{ type: "category", id: "x-axis-0" }],
            yAxes: [{ type: "linear", id: "y-axis-0" }],
          },
        }),
          (e.controllers.line = e.DatasetController.extend({
            addElements: function () {
              (this.getDataset().metaData = this.getDataset().metaData || []),
                (this.getDataset().metaDataset =
                  this.getDataset().metaDataset ||
                  new e.elements.Line({
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _points: this.getDataset().metaData,
                  })),
                i.each(
                  this.getDataset().data,
                  function (t, i) {
                    this.getDataset().metaData[i] =
                      this.getDataset().metaData[i] ||
                      new e.elements.Point({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: i,
                      });
                  },
                  this
                );
            },
            addElementAndReset: function (t) {
              this.getDataset().metaData = this.getDataset().metaData || [];
              var i = new e.elements.Point({
                _chart: this.chart.chart,
                _datasetIndex: this.index,
                _index: t,
              });
              this.updateElement(i, t, !0),
                this.getDataset().metaData.splice(t, 0, i),
                this.chart.options.showLines &&
                  0 !== this.chart.options.elements.line.tension &&
                  this.updateBezierControlPoints();
            },
            update: function (t) {
              var e,
                n = this.getDataset().metaDataset,
                o = this.getDataset().metaData,
                a = this.getScaleForId(this.getDataset().yAxisID);
              this.getScaleForId(this.getDataset().xAxisID);
              (e =
                a.min < 0 && a.max < 0
                  ? a.getPixelForValue(a.max)
                  : a.min > 0 && a.max > 0
                  ? a.getPixelForValue(a.min)
                  : a.getPixelForValue(0)),
                this.chart.options.showLines &&
                  ((n._scale = a),
                  (n._datasetIndex = this.index),
                  (n._children = o),
                  (n._model = {
                    tension:
                      n.custom && n.custom.tension
                        ? n.custom.tension
                        : i.getValueOrDefault(
                            this.getDataset().tension,
                            this.chart.options.elements.line.tension
                          ),
                    backgroundColor:
                      n.custom && n.custom.backgroundColor
                        ? n.custom.backgroundColor
                        : this.getDataset().backgroundColor ||
                          this.chart.options.elements.line.backgroundColor,
                    borderWidth:
                      n.custom && n.custom.borderWidth
                        ? n.custom.borderWidth
                        : this.getDataset().borderWidth ||
                          this.chart.options.elements.line.borderWidth,
                    borderColor:
                      n.custom && n.custom.borderColor
                        ? n.custom.borderColor
                        : this.getDataset().borderColor ||
                          this.chart.options.elements.line.borderColor,
                    borderCapStyle:
                      n.custom && n.custom.borderCapStyle
                        ? n.custom.borderCapStyle
                        : this.getDataset().borderCapStyle ||
                          this.chart.options.elements.line.borderCapStyle,
                    borderDash:
                      n.custom && n.custom.borderDash
                        ? n.custom.borderDash
                        : this.getDataset().borderDash ||
                          this.chart.options.elements.line.borderDash,
                    borderDashOffset:
                      n.custom && n.custom.borderDashOffset
                        ? n.custom.borderDashOffset
                        : this.getDataset().borderDashOffset ||
                          this.chart.options.elements.line.borderDashOffset,
                    borderJoinStyle:
                      n.custom && n.custom.borderJoinStyle
                        ? n.custom.borderJoinStyle
                        : this.getDataset().borderJoinStyle ||
                          this.chart.options.elements.line.borderJoinStyle,
                    fill:
                      n.custom && n.custom.fill
                        ? n.custom.fill
                        : void 0 !== this.getDataset().fill
                        ? this.getDataset().fill
                        : this.chart.options.elements.line.fill,
                    scaleTop: a.top,
                    scaleBottom: a.bottom,
                    scaleZero: e,
                  }),
                  n.pivot()),
                i.each(
                  o,
                  function (e, i) {
                    this.updateElement(e, i, t);
                  },
                  this
                ),
                this.chart.options.showLines &&
                  0 !== this.chart.options.elements.line.tension &&
                  this.updateBezierControlPoints();
            },
            getPointBackgroundColor: function (t, e) {
              var n = this.chart.options.elements.point.backgroundColor,
                o = this.getDataset();
              return (
                t.custom && t.custom.backgroundColor
                  ? (n = t.custom.backgroundColor)
                  : o.pointBackgroundColor
                  ? (n = i.getValueAtIndexOrDefault(
                      o.pointBackgroundColor,
                      e,
                      n
                    ))
                  : o.backgroundColor && (n = o.backgroundColor),
                n
              );
            },
            getPointBorderColor: function (t, e) {
              var n = this.chart.options.elements.point.borderColor,
                o = this.getDataset();
              return (
                t.custom && t.custom.borderColor
                  ? (n = t.custom.borderColor)
                  : o.pointBorderColor
                  ? (n = i.getValueAtIndexOrDefault(
                      this.getDataset().pointBorderColor,
                      e,
                      n
                    ))
                  : o.borderColor && (n = o.borderColor),
                n
              );
            },
            getPointBorderWidth: function (t, e) {
              var n = this.chart.options.elements.point.borderWidth,
                o = this.getDataset();
              return (
                t.custom && void 0 !== t.custom.borderWidth
                  ? (n = t.custom.borderWidth)
                  : void 0 !== o.pointBorderWidth
                  ? (n = i.getValueAtIndexOrDefault(o.pointBorderWidth, e, n))
                  : void 0 !== o.borderWidth && (n = o.borderWidth),
                n
              );
            },
            updateElement: function (t, e, n) {
              var o,
                a = this.getScaleForId(this.getDataset().yAxisID),
                s = this.getScaleForId(this.getDataset().xAxisID);
              (o =
                a.min < 0 && a.max < 0
                  ? a.getPixelForValue(a.max)
                  : a.min > 0 && a.max > 0
                  ? a.getPixelForValue(a.min)
                  : a.getPixelForValue(0)),
                (t._chart = this.chart.chart),
                (t._xScale = s),
                (t._yScale = a),
                (t._datasetIndex = this.index),
                (t._index = e),
                (t._model = {
                  x: s.getPixelForValue(
                    this.getDataset().data[e],
                    e,
                    this.index,
                    this.chart.isCombo
                  ),
                  y: n
                    ? o
                    : this.calculatePointY(
                        this.getDataset().data[e],
                        e,
                        this.index,
                        this.chart.isCombo
                      ),
                  tension:
                    t.custom && t.custom.tension
                      ? t.custom.tension
                      : i.getValueOrDefault(
                          this.getDataset().tension,
                          this.chart.options.elements.line.tension
                        ),
                  radius:
                    t.custom && t.custom.radius
                      ? t.custom.radius
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().radius,
                          e,
                          this.chart.options.elements.point.radius
                        ),
                  pointStyle:
                    t.custom && t.custom.pointStyle
                      ? t.custom.pointStyle
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().pointStyle,
                          e,
                          this.chart.options.elements.point.pointStyle
                        ),
                  backgroundColor: this.getPointBackgroundColor(t, e),
                  borderColor: this.getPointBorderColor(t, e),
                  borderWidth: this.getPointBorderWidth(t, e),
                  hitRadius:
                    t.custom && t.custom.hitRadius
                      ? t.custom.hitRadius
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().hitRadius,
                          e,
                          this.chart.options.elements.point.hitRadius
                        ),
                }),
                (t._model.skip =
                  t.custom && t.custom.skip
                    ? t.custom.skip
                    : isNaN(t._model.x) || isNaN(t._model.y));
            },
            calculatePointY: function (t, e, n, o) {
              var a =
                (this.getScaleForId(this.getDataset().xAxisID),
                this.getScaleForId(this.getDataset().yAxisID));
              if (a.options.stacked) {
                for (
                  var s = 0, r = 0, l = this.chart.data.datasets.length - 1;
                  l > n;
                  l--
                ) {
                  var h = this.chart.data.datasets[l];
                  "line" === h.type &&
                    i.isDatasetVisible(h) &&
                    (h.data[e] < 0
                      ? (r += h.data[e] || 0)
                      : (s += h.data[e] || 0));
                }
                return t < 0
                  ? a.getPixelForValue(r + t)
                  : a.getPixelForValue(s + t);
              }
              return a.getPixelForValue(t);
            },
            updateBezierControlPoints: function () {
              i.each(
                this.getDataset().metaData,
                function (t, e) {
                  var n = i.splineCurve(
                    i.previousItem(this.getDataset().metaData, e)._model,
                    t._model,
                    i.nextItem(this.getDataset().metaData, e)._model,
                    t._model.tension
                  );
                  (t._model.controlPointPreviousX = Math.max(
                    Math.min(n.previous.x, this.chart.chartArea.right),
                    this.chart.chartArea.left
                  )),
                    (t._model.controlPointPreviousY = Math.max(
                      Math.min(n.previous.y, this.chart.chartArea.bottom),
                      this.chart.chartArea.top
                    )),
                    (t._model.controlPointNextX = Math.max(
                      Math.min(n.next.x, this.chart.chartArea.right),
                      this.chart.chartArea.left
                    )),
                    (t._model.controlPointNextY = Math.max(
                      Math.min(n.next.y, this.chart.chartArea.bottom),
                      this.chart.chartArea.top
                    )),
                    t.pivot();
                },
                this
              );
            },
            draw: function (t) {
              var e = t || 1;
              i.each(this.getDataset().metaData, function (t) {
                t.transition(e);
              }),
                this.chart.options.showLines &&
                  this.getDataset().metaDataset.transition(e).draw(),
                i.each(this.getDataset().metaData, function (t) {
                  t.draw();
                });
            },
            setHoverStyle: function (t) {
              var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index;
              (t._model.radius =
                t.custom && t.custom.hoverRadius
                  ? t.custom.hoverRadius
                  : i.getValueAtIndexOrDefault(
                      e.pointHoverRadius,
                      n,
                      this.chart.options.elements.point.hoverRadius
                    )),
                (t._model.backgroundColor =
                  t.custom && t.custom.hoverBackgroundColor
                    ? t.custom.hoverBackgroundColor
                    : i.getValueAtIndexOrDefault(
                        e.pointHoverBackgroundColor,
                        n,
                        i
                          .color(t._model.backgroundColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                (t._model.borderColor =
                  t.custom && t.custom.hoverBorderColor
                    ? t.custom.hoverBorderColor
                    : i.getValueAtIndexOrDefault(
                        e.pointHoverBorderColor,
                        n,
                        i
                          .color(t._model.borderColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.hoverBorderWidth
                    ? t.custom.hoverBorderWidth
                    : i.getValueAtIndexOrDefault(
                        e.pointHoverBorderWidth,
                        n,
                        t._model.borderWidth
                      ));
            },
            removeHoverStyle: function (t) {
              var e = (this.chart.data.datasets[t._datasetIndex], t._index);
              (t._model.radius =
                t.custom && t.custom.radius
                  ? t.custom.radius
                  : i.getValueAtIndexOrDefault(
                      this.getDataset().radius,
                      e,
                      this.chart.options.elements.point.radius
                    )),
                (t._model.backgroundColor = this.getPointBackgroundColor(t, e)),
                (t._model.borderColor = this.getPointBorderColor(t, e)),
                (t._model.borderWidth = this.getPointBorderWidth(t, e));
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.polarArea = {
          scale: { type: "radialLinear", lineArc: !0 },
          animateRotate: !0,
          animateScale: !0,
          aspectRatio: 1,
          legendCallback: function (t) {
            var e = [];
            if (
              (e.push('<ul class="' + t.id + '-legend">'),
              t.data.datasets.length)
            )
              for (var i = 0; i < t.data.datasets[0].data.length; ++i)
                e.push(
                  '<li><span style="background-color:' +
                    t.data.datasets[0].backgroundColor[i] +
                    '">'
                ),
                  t.data.labels[i] && e.push(t.data.labels[i]),
                  e.push("</span></li>");
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function (t) {
                return t.labels.map(function (e, i) {
                  return {
                    text: e,
                    fillStyle: t.datasets[0].backgroundColor[i],
                    hidden: isNaN(t.datasets[0].data[i]),
                    index: i,
                  };
                });
              },
            },
            onClick: function (t, e) {
              i.each(this.chart.data.datasets, function (t) {
                t.metaHiddenData = t.metaHiddenData || [];
                var i = e.index;
                isNaN(t.data[i])
                  ? isNaN(t.metaHiddenData[i]) ||
                    (t.data[i] = t.metaHiddenData[i])
                  : ((t.metaHiddenData[i] = t.data[i]), (t.data[i] = NaN));
              }),
                this.chart.update();
            },
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              },
            },
          },
        }),
          (e.controllers.polarArea = e.DatasetController.extend({
            linkScales: function () {},
            addElements: function () {
              (this.getDataset().metaData = this.getDataset().metaData || []),
                i.each(
                  this.getDataset().data,
                  function (t, i) {
                    this.getDataset().metaData[i] =
                      this.getDataset().metaData[i] ||
                      new e.elements.Arc({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: i,
                      });
                  },
                  this
                );
            },
            addElementAndReset: function (t) {
              this.getDataset().metaData = this.getDataset().metaData || [];
              var i = new e.elements.Arc({
                _chart: this.chart.chart,
                _datasetIndex: this.index,
                _index: t,
              });
              this.updateElement(i, t, !0),
                this.getDataset().metaData.splice(t, 0, i);
            },
            getVisibleDatasetCount: function () {
              return i.where(this.chart.data.datasets, function (t) {
                return i.isDatasetVisible(t);
              }).length;
            },
            update: function (t) {
              var e = Math.min(
                this.chart.chartArea.right - this.chart.chartArea.left,
                this.chart.chartArea.bottom - this.chart.chartArea.top
              );
              (this.chart.outerRadius = Math.max(
                (e - this.chart.options.elements.arc.borderWidth / 2) / 2,
                0
              )),
                (this.chart.innerRadius = Math.max(
                  this.chart.options.cutoutPercentage
                    ? (this.chart.outerRadius / 100) *
                        this.chart.options.cutoutPercentage
                    : 1,
                  0
                )),
                (this.chart.radiusLength =
                  (this.chart.outerRadius - this.chart.innerRadius) /
                  this.getVisibleDatasetCount()),
                (this.getDataset().total = 0),
                i.each(
                  this.getDataset().data,
                  function (t) {
                    this.getDataset().total += Math.abs(t);
                  },
                  this
                ),
                (this.outerRadius =
                  this.chart.outerRadius -
                  this.chart.radiusLength * this.index),
                (this.innerRadius = this.outerRadius - this.chart.radiusLength),
                i.each(
                  this.getDataset().metaData,
                  function (e, i) {
                    this.updateElement(e, i, t);
                  },
                  this
                );
            },
            updateElement: function (t, e, n) {
              for (
                var o = this.calculateCircumference(this.getDataset().data[e]),
                  a =
                    (this.chart.chartArea.left + this.chart.chartArea.right) /
                    2,
                  s =
                    (this.chart.chartArea.top + this.chart.chartArea.bottom) /
                    2,
                  r = 0,
                  l = 0;
                l < e;
                ++l
              )
                isNaN(this.getDataset().data[l]) || ++r;
              var h = -0.5 * Math.PI + o * r,
                c = h + o,
                u = {
                  x: a,
                  y: s,
                  innerRadius: 0,
                  outerRadius: this.chart.options.animateScale
                    ? 0
                    : this.chart.scale.getDistanceFromCenterForValue(
                        this.getDataset().data[e]
                      ),
                  startAngle: this.chart.options.animateRotate
                    ? Math.PI * -0.5
                    : h,
                  endAngle: this.chart.options.animateRotate
                    ? Math.PI * -0.5
                    : c,
                  backgroundColor:
                    t.custom && t.custom.backgroundColor
                      ? t.custom.backgroundColor
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().backgroundColor,
                          e,
                          this.chart.options.elements.arc.backgroundColor
                        ),
                  borderWidth:
                    t.custom && t.custom.borderWidth
                      ? t.custom.borderWidth
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().borderWidth,
                          e,
                          this.chart.options.elements.arc.borderWidth
                        ),
                  borderColor:
                    t.custom && t.custom.borderColor
                      ? t.custom.borderColor
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().borderColor,
                          e,
                          this.chart.options.elements.arc.borderColor
                        ),
                  label: i.getValueAtIndexOrDefault(
                    this.chart.data.labels,
                    e,
                    this.chart.data.labels[e]
                  ),
                };
              i.extend(t, {
                _chart: this.chart.chart,
                _datasetIndex: this.index,
                _index: e,
                _scale: this.chart.scale,
                _model: n
                  ? u
                  : {
                      x: a,
                      y: s,
                      innerRadius: 0,
                      outerRadius: this.chart.scale.getDistanceFromCenterForValue(
                        this.getDataset().data[e]
                      ),
                      startAngle: h,
                      endAngle: c,
                      backgroundColor:
                        t.custom && t.custom.backgroundColor
                          ? t.custom.backgroundColor
                          : i.getValueAtIndexOrDefault(
                              this.getDataset().backgroundColor,
                              e,
                              this.chart.options.elements.arc.backgroundColor
                            ),
                      borderWidth:
                        t.custom && t.custom.borderWidth
                          ? t.custom.borderWidth
                          : i.getValueAtIndexOrDefault(
                              this.getDataset().borderWidth,
                              e,
                              this.chart.options.elements.arc.borderWidth
                            ),
                      borderColor:
                        t.custom && t.custom.borderColor
                          ? t.custom.borderColor
                          : i.getValueAtIndexOrDefault(
                              this.getDataset().borderColor,
                              e,
                              this.chart.options.elements.arc.borderColor
                            ),
                      label: i.getValueAtIndexOrDefault(
                        this.chart.data.labels,
                        e,
                        this.chart.data.labels[e]
                      ),
                    },
              }),
                t.pivot();
            },
            draw: function (t) {
              var e = t || 1;
              i.each(this.getDataset().metaData, function (t, i) {
                t.transition(e).draw();
              });
            },
            setHoverStyle: function (t) {
              var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index;
              (t._model.backgroundColor =
                t.custom && t.custom.hoverBackgroundColor
                  ? t.custom.hoverBackgroundColor
                  : i.getValueAtIndexOrDefault(
                      e.hoverBackgroundColor,
                      n,
                      i
                        .color(t._model.backgroundColor)
                        .saturate(0.5)
                        .darken(0.1)
                        .rgbString()
                    )),
                (t._model.borderColor =
                  t.custom && t.custom.hoverBorderColor
                    ? t.custom.hoverBorderColor
                    : i.getValueAtIndexOrDefault(
                        e.hoverBorderColor,
                        n,
                        i
                          .color(t._model.borderColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.hoverBorderWidth
                    ? t.custom.hoverBorderWidth
                    : i.getValueAtIndexOrDefault(
                        e.hoverBorderWidth,
                        n,
                        t._model.borderWidth
                      ));
            },
            removeHoverStyle: function (t) {
              var e = (this.chart.data.datasets[t._datasetIndex], t._index);
              (t._model.backgroundColor =
                t.custom && t.custom.backgroundColor
                  ? t.custom.backgroundColor
                  : i.getValueAtIndexOrDefault(
                      this.getDataset().backgroundColor,
                      e,
                      this.chart.options.elements.arc.backgroundColor
                    )),
                (t._model.borderColor =
                  t.custom && t.custom.borderColor
                    ? t.custom.borderColor
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().borderColor,
                        e,
                        this.chart.options.elements.arc.borderColor
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.borderWidth
                    ? t.custom.borderWidth
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().borderWidth,
                        e,
                        this.chart.options.elements.arc.borderWidth
                      ));
            },
            calculateCircumference: function (t) {
              if (isNaN(t)) return 0;
              var e = i.where(this.getDataset().data, function (t) {
                return isNaN(t);
              }).length;
              return (2 * Math.PI) / (this.getDataset().data.length - e);
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.radar = {
          scale: { type: "radialLinear" },
          elements: { line: { tension: 0 } },
        }),
          (e.controllers.radar = e.DatasetController.extend({
            linkScales: function () {},
            addElements: function () {
              (this.getDataset().metaData = this.getDataset().metaData || []),
                (this.getDataset().metaDataset =
                  this.getDataset().metaDataset ||
                  new e.elements.Line({
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _points: this.getDataset().metaData,
                    _loop: !0,
                  })),
                i.each(
                  this.getDataset().data,
                  function (t, i) {
                    this.getDataset().metaData[i] =
                      this.getDataset().metaData[i] ||
                      new e.elements.Point({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: i,
                        _model: { x: 0, y: 0 },
                      });
                  },
                  this
                );
            },
            addElementAndReset: function (t) {
              this.getDataset().metaData = this.getDataset().metaData || [];
              var i = new e.elements.Point({
                _chart: this.chart.chart,
                _datasetIndex: this.index,
                _index: t,
              });
              this.updateElement(i, t, !0),
                this.getDataset().metaData.splice(t, 0, i),
                this.updateBezierControlPoints();
            },
            update: function (t) {
              var e,
                n = this.getDataset().metaDataset,
                o = this.getDataset().metaData,
                a = this.chart.scale;
              (e =
                a.min < 0 && a.max < 0
                  ? a.getPointPositionForValue(0, a.max)
                  : a.min > 0 && a.max > 0
                  ? a.getPointPositionForValue(0, a.min)
                  : a.getPointPositionForValue(0, 0)),
                i.extend(this.getDataset().metaDataset, {
                  _datasetIndex: this.index,
                  _children: this.getDataset().metaData,
                  _model: {
                    tension:
                      n.custom && n.custom.tension
                        ? n.custom.tension
                        : i.getValueOrDefault(
                            this.getDataset().tension,
                            this.chart.options.elements.line.tension
                          ),
                    backgroundColor:
                      n.custom && n.custom.backgroundColor
                        ? n.custom.backgroundColor
                        : this.getDataset().backgroundColor ||
                          this.chart.options.elements.line.backgroundColor,
                    borderWidth:
                      n.custom && n.custom.borderWidth
                        ? n.custom.borderWidth
                        : this.getDataset().borderWidth ||
                          this.chart.options.elements.line.borderWidth,
                    borderColor:
                      n.custom && n.custom.borderColor
                        ? n.custom.borderColor
                        : this.getDataset().borderColor ||
                          this.chart.options.elements.line.borderColor,
                    fill:
                      n.custom && n.custom.fill
                        ? n.custom.fill
                        : void 0 !== this.getDataset().fill
                        ? this.getDataset().fill
                        : this.chart.options.elements.line.fill,
                    borderCapStyle:
                      n.custom && n.custom.borderCapStyle
                        ? n.custom.borderCapStyle
                        : this.getDataset().borderCapStyle ||
                          this.chart.options.elements.line.borderCapStyle,
                    borderDash:
                      n.custom && n.custom.borderDash
                        ? n.custom.borderDash
                        : this.getDataset().borderDash ||
                          this.chart.options.elements.line.borderDash,
                    borderDashOffset:
                      n.custom && n.custom.borderDashOffset
                        ? n.custom.borderDashOffset
                        : this.getDataset().borderDashOffset ||
                          this.chart.options.elements.line.borderDashOffset,
                    borderJoinStyle:
                      n.custom && n.custom.borderJoinStyle
                        ? n.custom.borderJoinStyle
                        : this.getDataset().borderJoinStyle ||
                          this.chart.options.elements.line.borderJoinStyle,
                    scaleTop: a.top,
                    scaleBottom: a.bottom,
                    scaleZero: e,
                  },
                }),
                this.getDataset().metaDataset.pivot(),
                i.each(
                  o,
                  function (e, i) {
                    this.updateElement(e, i, t);
                  },
                  this
                ),
                this.updateBezierControlPoints();
            },
            updateElement: function (t, e, n) {
              var o = this.chart.scale.getPointPositionForValue(
                e,
                this.getDataset().data[e]
              );
              i.extend(t, {
                _datasetIndex: this.index,
                _index: e,
                _scale: this.chart.scale,
                _model: {
                  x: n ? this.chart.scale.xCenter : o.x,
                  y: n ? this.chart.scale.yCenter : o.y,
                  tension:
                    t.custom && t.custom.tension
                      ? t.custom.tension
                      : i.getValueOrDefault(
                          this.getDataset().tension,
                          this.chart.options.elements.line.tension
                        ),
                  radius:
                    t.custom && t.custom.radius
                      ? t.custom.radius
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().pointRadius,
                          e,
                          this.chart.options.elements.point.radius
                        ),
                  backgroundColor:
                    t.custom && t.custom.backgroundColor
                      ? t.custom.backgroundColor
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().pointBackgroundColor,
                          e,
                          this.chart.options.elements.point.backgroundColor
                        ),
                  borderColor:
                    t.custom && t.custom.borderColor
                      ? t.custom.borderColor
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().pointBorderColor,
                          e,
                          this.chart.options.elements.point.borderColor
                        ),
                  borderWidth:
                    t.custom && t.custom.borderWidth
                      ? t.custom.borderWidth
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().pointBorderWidth,
                          e,
                          this.chart.options.elements.point.borderWidth
                        ),
                  pointStyle:
                    t.custom && t.custom.pointStyle
                      ? t.custom.pointStyle
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().pointStyle,
                          e,
                          this.chart.options.elements.point.pointStyle
                        ),
                  hitRadius:
                    t.custom && t.custom.hitRadius
                      ? t.custom.hitRadius
                      : i.getValueAtIndexOrDefault(
                          this.getDataset().hitRadius,
                          e,
                          this.chart.options.elements.point.hitRadius
                        ),
                },
              }),
                (t._model.skip =
                  t.custom && t.custom.skip
                    ? t.custom.skip
                    : isNaN(t._model.x) || isNaN(t._model.y));
            },
            updateBezierControlPoints: function () {
              i.each(
                this.getDataset().metaData,
                function (t, e) {
                  var n = i.splineCurve(
                    i.previousItem(this.getDataset().metaData, e, !0)._model,
                    t._model,
                    i.nextItem(this.getDataset().metaData, e, !0)._model,
                    t._model.tension
                  );
                  (t._model.controlPointPreviousX = Math.max(
                    Math.min(n.previous.x, this.chart.chartArea.right),
                    this.chart.chartArea.left
                  )),
                    (t._model.controlPointPreviousY = Math.max(
                      Math.min(n.previous.y, this.chart.chartArea.bottom),
                      this.chart.chartArea.top
                    )),
                    (t._model.controlPointNextX = Math.max(
                      Math.min(n.next.x, this.chart.chartArea.right),
                      this.chart.chartArea.left
                    )),
                    (t._model.controlPointNextY = Math.max(
                      Math.min(n.next.y, this.chart.chartArea.bottom),
                      this.chart.chartArea.top
                    )),
                    t.pivot();
                },
                this
              );
            },
            draw: function (t) {
              var e = t || 1;
              i.each(this.getDataset().metaData, function (t, i) {
                t.transition(e);
              }),
                this.getDataset().metaDataset.transition(e).draw(),
                i.each(this.getDataset().metaData, function (t) {
                  t.draw();
                });
            },
            setHoverStyle: function (t) {
              var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index;
              (t._model.radius =
                t.custom && t.custom.hoverRadius
                  ? t.custom.hoverRadius
                  : i.getValueAtIndexOrDefault(
                      e.pointHoverRadius,
                      n,
                      this.chart.options.elements.point.hoverRadius
                    )),
                (t._model.backgroundColor =
                  t.custom && t.custom.hoverBackgroundColor
                    ? t.custom.hoverBackgroundColor
                    : i.getValueAtIndexOrDefault(
                        e.pointHoverBackgroundColor,
                        n,
                        i
                          .color(t._model.backgroundColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                (t._model.borderColor =
                  t.custom && t.custom.hoverBorderColor
                    ? t.custom.hoverBorderColor
                    : i.getValueAtIndexOrDefault(
                        e.pointHoverBorderColor,
                        n,
                        i
                          .color(t._model.borderColor)
                          .saturate(0.5)
                          .darken(0.1)
                          .rgbString()
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.hoverBorderWidth
                    ? t.custom.hoverBorderWidth
                    : i.getValueAtIndexOrDefault(
                        e.pointHoverBorderWidth,
                        n,
                        t._model.borderWidth
                      ));
            },
            removeHoverStyle: function (t) {
              var e = (this.chart.data.datasets[t._datasetIndex], t._index);
              (t._model.radius =
                t.custom && t.custom.radius
                  ? t.custom.radius
                  : i.getValueAtIndexOrDefault(
                      this.getDataset().radius,
                      e,
                      this.chart.options.elements.point.radius
                    )),
                (t._model.backgroundColor =
                  t.custom && t.custom.backgroundColor
                    ? t.custom.backgroundColor
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().pointBackgroundColor,
                        e,
                        this.chart.options.elements.point.backgroundColor
                      )),
                (t._model.borderColor =
                  t.custom && t.custom.borderColor
                    ? t.custom.borderColor
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().pointBorderColor,
                        e,
                        this.chart.options.elements.point.borderColor
                      )),
                (t._model.borderWidth =
                  t.custom && t.custom.borderWidth
                    ? t.custom.borderWidth
                    : i.getValueAtIndexOrDefault(
                        this.getDataset().pointBorderWidth,
                        e,
                        this.chart.options.elements.point.borderWidth
                      ));
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = (e.helpers, { position: "bottom" }),
          n = e.Scale.extend({
            buildTicks: function (t) {
              this.ticks = this.chart.data.labels;
            },
            getLabelForIndex: function (t, e) {
              return this.ticks[t];
            },
            getPixelForValue: function (t, e, i, n) {
              if (this.isHorizontal()) {
                var o = this.width - (this.paddingLeft + this.paddingRight),
                  a =
                    o /
                    Math.max(
                      this.chart.data.labels.length -
                        (this.options.gridLines.offsetGridLines ? 0 : 1),
                      1
                    ),
                  s = a * e + this.paddingLeft;
                return (
                  this.options.gridLines.offsetGridLines && n && (s += a / 2),
                  this.left + Math.round(s)
                );
              }
              var r = this.height - (this.paddingTop + this.paddingBottom),
                l =
                  r /
                  Math.max(
                    this.chart.data.labels.length -
                      (this.options.gridLines.offsetGridLines ? 0 : 1),
                    1
                  ),
                h = l * e + this.paddingTop;
              return (
                this.options.gridLines.offsetGridLines && n && (h += l / 2),
                this.top + Math.round(h)
              );
            },
          });
        e.scaleService.registerScaleType("category", n, i);
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers,
          n = {
            position: "left",
            ticks: {
              callback: function (t, e, n) {
                var o = n[1] - n[0];
                Math.abs(o) > 1 &&
                  t !== Math.floor(t) &&
                  (o = t - Math.floor(t));
                var a = i.log10(Math.abs(o)),
                  s = "";
                if (0 !== t) {
                  var r = -1 * Math.floor(a);
                  (r = Math.max(Math.min(r, 20), 0)), (s = t.toFixed(r));
                } else s = "0";
                return s;
              },
            },
          },
          o = e.Scale.extend({
            determineDataLimits: function () {
              if (
                ((this.min = null), (this.max = null), this.options.stacked)
              ) {
                var t = {},
                  e = !1,
                  n = !1;
                i.each(
                  this.chart.data.datasets,
                  function (o) {
                    void 0 === t[o.type] &&
                      (t[o.type] = { positiveValues: [], negativeValues: [] });
                    var a = t[o.type].positiveValues,
                      s = t[o.type].negativeValues;
                    i.isDatasetVisible(o) &&
                      (this.isHorizontal()
                        ? o.xAxisID === this.id
                        : o.yAxisID === this.id) &&
                      i.each(
                        o.data,
                        function (t, i) {
                          var o = +this.getRightValue(t);
                          isNaN(o) ||
                            ((a[i] = a[i] || 0),
                            (s[i] = s[i] || 0),
                            this.options.relativePoints
                              ? (a[i] = 100)
                              : o < 0
                              ? ((n = !0), (s[i] += o))
                              : ((e = !0), (a[i] += o)));
                        },
                        this
                      );
                  },
                  this
                ),
                  i.each(
                    t,
                    function (t) {
                      var e = t.positiveValues.concat(t.negativeValues),
                        n = i.min(e),
                        o = i.max(e);
                      (this.min =
                        null === this.min ? n : Math.min(this.min, n)),
                        (this.max =
                          null === this.max ? o : Math.max(this.max, o));
                    },
                    this
                  );
              } else
                i.each(
                  this.chart.data.datasets,
                  function (t) {
                    i.isDatasetVisible(t) &&
                      (this.isHorizontal()
                        ? t.xAxisID === this.id
                        : t.yAxisID === this.id) &&
                      i.each(
                        t.data,
                        function (t, e) {
                          var i = +this.getRightValue(t);
                          isNaN(i) ||
                            (null === this.min
                              ? (this.min = i)
                              : i < this.min && (this.min = i),
                            null === this.max
                              ? (this.max = i)
                              : i > this.max && (this.max = i));
                        },
                        this
                      );
                  },
                  this
                );
              if (this.options.ticks.beginAtZero) {
                var o = i.sign(this.min),
                  a = i.sign(this.max);
                o < 0 && a < 0
                  ? (this.max = 0)
                  : o > 0 && a > 0 && (this.min = 0);
              }
              void 0 !== this.options.ticks.min
                ? (this.min = this.options.ticks.min)
                : void 0 !== this.options.ticks.suggestedMin &&
                  (this.min = Math.min(
                    this.min,
                    this.options.ticks.suggestedMin
                  )),
                void 0 !== this.options.ticks.max
                  ? (this.max = this.options.ticks.max)
                  : void 0 !== this.options.ticks.suggestedMax &&
                    (this.max = Math.max(
                      this.max,
                      this.options.ticks.suggestedMax
                    )),
                this.min === this.max && (this.min--, this.max++);
            },
            buildTicks: function () {
              this.ticks = [];
              var t;
              (t = this.isHorizontal()
                ? Math.min(
                    this.options.ticks.maxTicksLimit
                      ? this.options.ticks.maxTicksLimit
                      : 11,
                    Math.ceil(this.width / 50)
                  )
                : Math.min(
                    this.options.ticks.maxTicksLimit
                      ? this.options.ticks.maxTicksLimit
                      : 11,
                    Math.ceil(this.height / (2 * this.options.ticks.fontSize))
                  )),
                (t = Math.max(2, t));
              var e = i.niceNum(this.max - this.min, !1),
                n = i.niceNum(e / (t - 1), !0),
                o = Math.floor(this.min / n) * n,
                a = Math.ceil(this.max / n) * n,
                s = Math.ceil((a - o) / n);
              this.ticks.push(
                void 0 !== this.options.ticks.min ? this.options.ticks.min : o
              );
              for (var r = 1; r < s; ++r) this.ticks.push(o + r * n);
              this.ticks.push(
                void 0 !== this.options.ticks.max ? this.options.ticks.max : a
              ),
                ("left" != this.options.position &&
                  "right" != this.options.position) ||
                  this.ticks.reverse(),
                (this.max = i.max(this.ticks)),
                (this.min = i.min(this.ticks)),
                this.options.ticks.reverse
                  ? (this.ticks.reverse(),
                    (this.start = this.max),
                    (this.end = this.min))
                  : ((this.start = this.min), (this.end = this.max)),
                (this.ticksAsNumbers = this.ticks.slice()),
                (this.zeroLineIndex = this.ticks.indexOf(0));
            },
            getLabelForIndex: function (t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            getPixelForValue: function (t, e, i, n) {
              var o,
                a = +this.getRightValue(t),
                s = this.end - this.start;
              if (this.isHorizontal()) {
                var r = this.width - (this.paddingLeft + this.paddingRight);
                return (
                  (o = this.left + (r / s) * (a - this.start)),
                  Math.round(o + this.paddingLeft)
                );
              }
              var l = this.height - (this.paddingTop + this.paddingBottom);
              return (
                (o =
                  this.bottom -
                  this.paddingBottom -
                  (l / s) * (a - this.start)),
                Math.round(o)
              );
            },
            getPixelForTick: function (t, e) {
              return this.getPixelForValue(
                this.ticksAsNumbers[t],
                null,
                null,
                e
              );
            },
          });
        e.scaleService.registerScaleType("linear", o, n);
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers,
          n = {
            position: "left",
            ticks: {
              callback: function (t, i, n) {
                var o = t / Math.pow(10, Math.floor(e.helpers.log10(t)));
                return 1 === o ||
                  2 === o ||
                  5 === o ||
                  0 === i ||
                  i === n.length - 1
                  ? t.toExponential()
                  : "";
              },
            },
          },
          o = e.Scale.extend({
            determineDataLimits: function () {
              if (
                ((this.min = null), (this.max = null), this.options.stacked)
              ) {
                var t = {};
                i.each(
                  this.chart.data.datasets,
                  function (e) {
                    i.isDatasetVisible(e) &&
                      (this.isHorizontal()
                        ? e.xAxisID === this.id
                        : e.yAxisID === this.id) &&
                      (void 0 === t[e.type] && (t[e.type] = []),
                      i.each(
                        e.data,
                        function (i, n) {
                          var o = t[e.type],
                            a = +this.getRightValue(i);
                          isNaN(a) ||
                            ((o[n] = o[n] || 0),
                            this.options.relativePoints
                              ? (o[n] = 100)
                              : (o[n] += a));
                        },
                        this
                      ));
                  },
                  this
                ),
                  i.each(
                    t,
                    function (t) {
                      var e = i.min(t),
                        n = i.max(t);
                      (this.min =
                        null === this.min ? e : Math.min(this.min, e)),
                        (this.max =
                          null === this.max ? n : Math.max(this.max, n));
                    },
                    this
                  );
              } else
                i.each(
                  this.chart.data.datasets,
                  function (t) {
                    i.isDatasetVisible(t) &&
                      (this.isHorizontal()
                        ? t.xAxisID === this.id
                        : t.yAxisID === this.id) &&
                      i.each(
                        t.data,
                        function (t, e) {
                          var i = +this.getRightValue(t);
                          isNaN(i) ||
                            (null === this.min
                              ? (this.min = i)
                              : i < this.min && (this.min = i),
                            null === this.max
                              ? (this.max = i)
                              : i > this.max && (this.max = i));
                        },
                        this
                      );
                  },
                  this
                );
              (this.min =
                void 0 !== this.options.ticks.min
                  ? this.options.ticks.min
                  : this.min),
                (this.max =
                  void 0 !== this.options.ticks.max
                    ? this.options.ticks.max
                    : this.max),
                this.min === this.max &&
                  (0 !== this.min && null !== this.min
                    ? ((this.min = Math.pow(
                        10,
                        Math.floor(i.log10(this.min)) - 1
                      )),
                      (this.max = Math.pow(
                        10,
                        Math.floor(i.log10(this.max)) + 1
                      )))
                    : ((this.min = 1), (this.max = 10)));
            },
            buildTicks: function () {
              this.tickValues = [];
              for (
                var t =
                  void 0 !== this.options.ticks.min
                    ? this.options.ticks.min
                    : Math.pow(10, Math.floor(i.log10(this.min)));
                t < this.max;

              ) {
                this.tickValues.push(t);
                var e = Math.floor(i.log10(t)),
                  n = Math.floor(t / Math.pow(10, e)) + 1;
                10 === n && ((n = 1), ++e), (t = n * Math.pow(10, e));
              }
              var o =
                void 0 !== this.options.ticks.max ? this.options.ticks.max : t;
              this.tickValues.push(o),
                ("left" != this.options.position &&
                  "right" != this.options.position) ||
                  this.tickValues.reverse(),
                (this.max = i.max(this.tickValues)),
                (this.min = i.min(this.tickValues)),
                this.options.ticks.reverse
                  ? (this.tickValues.reverse(),
                    (this.start = this.max),
                    (this.end = this.min))
                  : ((this.start = this.min), (this.end = this.max)),
                (this.ticks = this.tickValues.slice());
            },
            getLabelForIndex: function (t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            getPixelForTick: function (t, e) {
              return this.getPixelForValue(this.tickValues[t], null, null, e);
            },
            getPixelForValue: function (t, e, n, o) {
              var a,
                s = +this.getRightValue(t),
                r = i.log10(this.end) - i.log10(this.start);
              if (this.isHorizontal())
                if (0 === s) a = this.left + this.paddingLeft;
                else {
                  var l = this.width - (this.paddingLeft + this.paddingRight);
                  (a =
                    this.left + (l / r) * (i.log10(s) - i.log10(this.start))),
                    (a += this.paddingLeft);
                }
              else if (0 === s) a = this.top + this.paddingTop;
              else {
                var h = this.height - (this.paddingTop + this.paddingBottom);
                a =
                  this.bottom -
                  this.paddingBottom -
                  (h / r) * (i.log10(s) - i.log10(this.start));
              }
              return a;
            },
          });
        e.scaleService.registerScaleType("logarithmic", o, n);
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers,
          n = {
            display: !0,
            animate: !0,
            lineArc: !1,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1,
            },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2,
            },
            pointLabels: {
              fontFamily: "'Arial'",
              fontStyle: "normal",
              fontSize: 10,
              fontColor: "#666",
              callback: function (t) {
                return t;
              },
            },
          },
          o = e.Scale.extend({
            getValueCount: function () {
              return this.chart.data.labels.length;
            },
            setDimensions: function () {
              (this.width = this.maxWidth),
                (this.height = this.maxHeight),
                (this.xCenter = Math.round(this.width / 2)),
                (this.yCenter = Math.round(this.height / 2));
              var t = i.min([this.height, this.width]);
              this.drawingArea = this.options.display
                ? t / 2 -
                  (this.options.ticks.fontSize / 2 +
                    this.options.ticks.backdropPaddingY)
                : t / 2;
            },
            determineDataLimits: function () {
              if (
                ((this.min = null),
                (this.max = null),
                i.each(
                  this.chart.data.datasets,
                  function (t) {
                    i.isDatasetVisible(t) &&
                      i.each(
                        t.data,
                        function (t, e) {
                          var i = +this.getRightValue(t);
                          isNaN(i) ||
                            (null === this.min
                              ? (this.min = i)
                              : i < this.min && (this.min = i),
                            null === this.max
                              ? (this.max = i)
                              : i > this.max && (this.max = i));
                        },
                        this
                      );
                  },
                  this
                ),
                this.options.ticks.beginAtZero)
              ) {
                var t = i.sign(this.min),
                  e = i.sign(this.max);
                t < 0 && e < 0
                  ? (this.max = 0)
                  : t > 0 && e > 0 && (this.min = 0);
              }
              void 0 !== this.options.ticks.min
                ? (this.min = this.options.ticks.min)
                : void 0 !== this.options.ticks.suggestedMin &&
                  (this.min = Math.min(
                    this.min,
                    this.options.ticks.suggestedMin
                  )),
                void 0 !== this.options.ticks.max
                  ? (this.max = this.options.ticks.max)
                  : void 0 !== this.options.ticks.suggestedMax &&
                    (this.max = Math.max(
                      this.max,
                      this.options.ticks.suggestedMax
                    )),
                this.min === this.max && (this.min--, this.max++);
            },
            buildTicks: function () {
              this.ticks = [];
              var t = Math.min(
                this.options.ticks.maxTicksLimit
                  ? this.options.ticks.maxTicksLimit
                  : 11,
                Math.ceil(
                  this.drawingArea / (1.5 * this.options.ticks.fontSize)
                )
              );
              t = Math.max(2, t);
              var e = i.niceNum(this.max - this.min, !1),
                n = i.niceNum(e / (t - 1), !0),
                o = Math.floor(this.min / n) * n,
                a = Math.ceil(this.max / n) * n,
                s = Math.ceil((a - o) / n);
              this.ticks.push(
                void 0 !== this.options.ticks.min ? this.options.ticks.min : o
              );
              for (var r = 1; r < s; ++r) this.ticks.push(o + r * n);
              this.ticks.push(
                void 0 !== this.options.ticks.max ? this.options.ticks.max : a
              ),
                (this.max = i.max(this.ticks)),
                (this.min = i.min(this.ticks)),
                this.options.ticks.reverse
                  ? (this.ticks.reverse(),
                    (this.start = this.max),
                    (this.end = this.min))
                  : ((this.start = this.min), (this.end = this.max)),
                (this.zeroLineIndex = this.ticks.indexOf(0));
            },
            convertTicksToLabels: function () {
              e.Scale.prototype.convertTicksToLabels.call(this),
                (this.pointLabels = this.chart.data.labels.map(
                  this.options.pointLabels.callback,
                  this
                ));
            },
            getLabelForIndex: function (t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            fit: function () {
              var t,
                e,
                n,
                o,
                a,
                s,
                r,
                l,
                h,
                c,
                u,
                d,
                f = i.min([
                  this.height / 2 - this.options.pointLabels.fontSize - 5,
                  this.width / 2,
                ]),
                p = this.width,
                m = 0;
              for (
                this.ctx.font = i.fontString(
                  this.options.pointLabels.fontSize,
                  this.options.pointLabels.fontStyle,
                  this.options.pointLabels.fontFamily
                ),
                  e = 0;
                e < this.getValueCount();
                e++
              )
                (t = this.getPointPosition(e, f)),
                  (n =
                    this.ctx.measureText(
                      this.pointLabels[e] ? this.pointLabels[e] : ""
                    ).width + 5),
                  0 === e || e === this.getValueCount() / 2
                    ? ((o = n / 2),
                      t.x + o > p && ((p = t.x + o), (a = e)),
                      t.x - o < m && ((m = t.x - o), (r = e)))
                    : e < this.getValueCount() / 2
                    ? t.x + n > p && ((p = t.x + n), (a = e))
                    : e > this.getValueCount() / 2 &&
                      t.x - n < m &&
                      ((m = t.x - n), (r = e));
              (h = m),
                (c = Math.ceil(p - this.width)),
                (s = this.getIndexAngle(a)),
                (l = this.getIndexAngle(r)),
                (u = c / Math.sin(s + Math.PI / 2)),
                (d = h / Math.sin(l + Math.PI / 2)),
                (u = i.isNumber(u) ? u : 0),
                (d = i.isNumber(d) ? d : 0),
                (this.drawingArea = Math.round(f - (d + u) / 2)),
                this.setCenterPoint(d, u);
            },
            setCenterPoint: function (t, e) {
              var i = this.width - e - this.drawingArea,
                n = t + this.drawingArea;
              (this.xCenter = Math.round((n + i) / 2 + this.left)),
                (this.yCenter = Math.round(this.height / 2 + this.top));
            },
            getIndexAngle: function (t) {
              var e = (2 * Math.PI) / this.getValueCount();
              return t * e - Math.PI / 2;
            },
            getDistanceFromCenterForValue: function (t) {
              if (null === t) return 0;
              var e = this.drawingArea / (this.max - this.min);
              return this.options.reverse
                ? (this.max - t) * e
                : (t - this.min) * e;
            },
            getPointPosition: function (t, e) {
              var i = this.getIndexAngle(t);
              return {
                x: Math.round(Math.cos(i) * e) + this.xCenter,
                y: Math.round(Math.sin(i) * e) + this.yCenter,
              };
            },
            getPointPositionForValue: function (t, e) {
              return this.getPointPosition(
                t,
                this.getDistanceFromCenterForValue(e)
              );
            },
            draw: function () {
              if (this.options.display) {
                var t = this.ctx;
                if (
                  (i.each(
                    this.ticks,
                    function (e, n) {
                      if (n > 0 || this.options.reverse) {
                        var o = this.getDistanceFromCenterForValue(
                            this.ticks[n]
                          ),
                          a = this.yCenter - o;
                        if (this.options.gridLines.display)
                          if (
                            ((t.strokeStyle = this.options.gridLines.color),
                            (t.lineWidth = this.options.gridLines.lineWidth),
                            this.options.lineArc)
                          )
                            t.beginPath(),
                              t.arc(
                                this.xCenter,
                                this.yCenter,
                                o,
                                0,
                                2 * Math.PI
                              ),
                              t.closePath(),
                              t.stroke();
                          else {
                            t.beginPath();
                            for (var s = 0; s < this.getValueCount(); s++) {
                              var r = this.getPointPosition(
                                s,
                                this.getDistanceFromCenterForValue(
                                  this.ticks[n]
                                )
                              );
                              0 === s ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);
                            }
                            t.closePath(), t.stroke();
                          }
                        if (this.options.ticks.display) {
                          if (
                            ((t.font = i.fontString(
                              this.options.ticks.fontSize,
                              this.options.ticks.fontStyle,
                              this.options.ticks.fontFamily
                            )),
                            this.options.ticks.showLabelBackdrop)
                          ) {
                            var l = t.measureText(e).width;
                            (t.fillStyle = this.options.ticks.backdropColor),
                              t.fillRect(
                                this.xCenter -
                                  l / 2 -
                                  this.options.ticks.backdropPaddingX,
                                a -
                                  this.options.ticks.fontSize / 2 -
                                  this.options.ticks.backdropPaddingY,
                                l + 2 * this.options.ticks.backdropPaddingX,
                                this.options.ticks.fontSize +
                                  2 * this.options.ticks.backdropPaddingY
                              );
                          }
                          (t.textAlign = "center"),
                            (t.textBaseline = "middle"),
                            (t.fillStyle = this.options.ticks.fontColor),
                            t.fillText(e, this.xCenter, a);
                        }
                      }
                    },
                    this
                  ),
                  !this.options.lineArc)
                ) {
                  (t.lineWidth = this.options.angleLines.lineWidth),
                    (t.strokeStyle = this.options.angleLines.color);
                  for (var e = this.getValueCount() - 1; e >= 0; e--) {
                    if (this.options.angleLines.display) {
                      var n = this.getPointPosition(
                        e,
                        this.getDistanceFromCenterForValue(
                          this.options.reverse ? this.min : this.max
                        )
                      );
                      t.beginPath(),
                        t.moveTo(this.xCenter, this.yCenter),
                        t.lineTo(n.x, n.y),
                        t.stroke(),
                        t.closePath();
                    }
                    var o = this.getPointPosition(
                      e,
                      this.getDistanceFromCenterForValue(
                        this.options.reverse ? this.min : this.max
                      ) + 5
                    );
                    (t.font = i.fontString(
                      this.options.pointLabels.fontSize,
                      this.options.pointLabels.fontStyle,
                      this.options.pointLabels.fontFamily
                    )),
                      (t.fillStyle = this.options.pointLabels.fontColor);
                    var a = this.pointLabels.length,
                      s = this.pointLabels.length / 2,
                      r = s / 2,
                      l = e < r || e > a - r,
                      h = e === r || e === a - r;
                    0 === e
                      ? (t.textAlign = "center")
                      : e === s
                      ? (t.textAlign = "center")
                      : e < s
                      ? (t.textAlign = "left")
                      : (t.textAlign = "right"),
                      h
                        ? (t.textBaseline = "middle")
                        : l
                        ? (t.textBaseline = "bottom")
                        : (t.textBaseline = "top"),
                      t.fillText(
                        this.pointLabels[e] ? this.pointLabels[e] : "",
                        o.x,
                        o.y
                      );
                  }
                }
              }
            },
          });
        e.scaleService.registerScaleType("radialLinear", o, n);
      }.call(this),
      function (t) {
        "use strict";
        if (!t)
          return void console.warn(
            "Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at http://momentjs.com/"
          );
        var e = this,
          i = e.Chart,
          n = i.helpers,
          o = {
            units: [
              {
                name: "millisecond",
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500],
              },
              { name: "second", steps: [1, 2, 5, 10, 30] },
              { name: "minute", steps: [1, 2, 5, 10, 30] },
              { name: "hour", steps: [1, 2, 3, 6, 12] },
              { name: "day", steps: [1, 2, 5] },
              { name: "week", maxStep: 4 },
              { name: "month", maxStep: 3 },
              { name: "quarter", maxStep: 4 },
              { name: "year", maxStep: !1 },
            ],
          },
          a = {
            position: "bottom",
            time: {
              format: !1,
              unit: !1,
              round: !1,
              displayFormat: !1,
              displayFormats: {
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm:ss a",
                hour: "MMM D, hA",
                day: "ll",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY",
              },
            },
          },
          s = i.Scale.extend({
            getLabelMoment: function (t, e) {
              return this.labelMoments[t][e];
            },
            determineDataLimits: function () {
              this.labelMoments = [];
              var e = [];
              this.chart.data.labels && this.chart.data.labels.length > 0
                ? (n.each(
                    this.chart.data.labels,
                    function (t, i) {
                      var n = this.parseTime(t);
                      this.options.time.round &&
                        n.startOf(this.options.time.round),
                        e.push(n);
                    },
                    this
                  ),
                  (this.firstTick = t.min.call(this, e)),
                  (this.lastTick = t.max.call(this, e)))
                : ((this.firstTick = null), (this.lastTick = null)),
                n.each(
                  this.chart.data.datasets,
                  function (i, o) {
                    var a = [];
                    "object" == typeof i.data[0]
                      ? n.each(
                          i.data,
                          function (e, i) {
                            var n = this.parseTime(this.getRightValue(e));
                            this.options.time.round &&
                              n.startOf(this.options.time.round),
                              a.push(n),
                              (this.firstTick =
                                null !== this.firstTick
                                  ? t.min(this.firstTick, n)
                                  : n),
                              (this.lastTick =
                                null !== this.lastTick
                                  ? t.max(this.lastTick, n)
                                  : n);
                          },
                          this
                        )
                      : (a = e),
                      this.labelMoments.push(a);
                  },
                  this
                ),
                this.options.time.min &&
                  (this.firstTick = this.parseTime(this.options.time.min)),
                this.options.time.max &&
                  (this.lastTick = this.parseTime(this.options.time.max)),
                (this.firstTick = (this.firstTick || t()).clone()),
                (this.lastTick = (this.lastTick || t()).clone());
            },
            buildTicks: function (t) {
              if (
                ((this.ticks = []),
                (this.unitScale = 1),
                this.options.time.unit)
              )
                (this.tickUnit = this.options.time.unit || "day"),
                  (this.displayFormat = this.options.time.displayFormats[
                    this.tickUnit
                  ]),
                  (this.tickRange = Math.ceil(
                    this.lastTick.diff(this.firstTick, this.tickUnit, !0)
                  ));
              else {
                var e = this.isHorizontal()
                    ? this.width - (this.paddingLeft + this.paddingRight)
                    : this.height - (this.paddingTop + this.paddingBottom),
                  i = e / (this.options.ticks.fontSize + 10),
                  a = this.options.time.round ? 0 : 1;
                (this.tickUnit = "millisecond"),
                  (this.tickRange = Math.ceil(
                    this.lastTick.diff(this.firstTick, this.tickUnit, !0) + a
                  )),
                  (this.displayFormat = this.options.time.displayFormats[
                    this.tickUnit
                  ]);
                for (var s = 0, r = o.units[s]; s < o.units.length; ) {
                  if (
                    ((this.unitScale = 1),
                    n.isArray(r.steps) &&
                      Math.ceil(this.tickRange / i) < n.max(r.steps))
                  ) {
                    for (var l = 0; l < r.steps.length; ++l)
                      if (r.steps[l] > Math.ceil(this.tickRange / i)) {
                        this.unitScale = r.steps[l];
                        break;
                      }
                    break;
                  }
                  if (
                    r.maxStep === !1 ||
                    Math.ceil(this.tickRange / i) < r.maxStep
                  ) {
                    this.unitScale = Math.ceil(this.tickRange / i);
                    break;
                  }
                  ++s,
                    (r = o.units[s]),
                    (this.tickUnit = r.name),
                    (this.tickRange = Math.ceil(
                      this.lastTick.diff(this.firstTick, this.tickUnit) + a
                    )),
                    (this.displayFormat = this.options.time.displayFormats[
                      r.name
                    ]);
                }
              }
              var h;
              this.options.time.min
                ? (h = this.firstTick.clone().startOf(this.tickUnit))
                : (this.firstTick.startOf(this.tickUnit), (h = this.firstTick)),
                this.options.time.max || this.lastTick.endOf(this.tickUnit),
                (this.smallestLabelSeparation = this.width),
                n.each(
                  this.chart.data.datasets,
                  function (t, e) {
                    for (var i = 1; i < this.labelMoments[e].length; i++)
                      this.smallestLabelSeparation = Math.min(
                        this.smallestLabelSeparation,
                        this.labelMoments[e][i].diff(
                          this.labelMoments[e][i - 1],
                          this.tickUnit,
                          !0
                        )
                      );
                  },
                  this
                ),
                this.options.time.displayFormat &&
                  (this.displayFormat = this.options.time.displayFormat),
                this.ticks.push(this.firstTick.clone());
              for (var c = 1; c < this.tickRange; ++c) {
                var u = h.clone().add(c, this.tickUnit);
                if (
                  this.options.time.max &&
                  u.diff(this.lastTick, this.tickUnit, !0) >= 0
                )
                  break;
                c % this.unitScale === 0 && this.ticks.push(u);
              }
              this.options.time.max
                ? this.ticks.push(this.lastTick.clone())
                : 0 !==
                    this.ticks[this.ticks.length - 1].diff(
                      this.lastTick,
                      this.tickUnit,
                      !0
                    ) &&
                  ((this.tickRange =
                    Math.ceil(this.tickRange / this.unitScale) *
                    this.unitScale),
                  this.ticks.push(
                    this.firstTick.clone().add(this.tickRange, this.tickUnit)
                  ),
                  (this.lastTick = this.ticks[this.ticks.length - 1].clone()));
            },
            getLabelForIndex: function (t, e) {
              var i =
                this.chart.data.labels && t < this.chart.data.labels.length
                  ? this.chart.data.labels[t]
                  : "";
              return (
                "object" == typeof this.chart.data.datasets[e].data[0] &&
                  (i = this.getRightValue(this.chart.data.datasets[e].data[t])),
                this.options.time.tooltipFormat &&
                  (i = this.parseTime(i).format(
                    this.options.time.tooltipFormat
                  )),
                i
              );
            },
            convertTicksToLabels: function () {
              this.ticks = this.ticks.map(function (t, e, i) {
                var n = t.format(this.displayFormat);
                return this.options.ticks.userCallback
                  ? this.options.ticks.userCallback(n, e, i)
                  : n;
              }, this);
            },
            getPixelForValue: function (t, e, i, n) {
              var o = this.getLabelMoment(i, e),
                a = o.diff(this.firstTick, this.tickUnit, !0),
                s = a / this.tickRange;
              if (this.isHorizontal()) {
                var r = this.width - (this.paddingLeft + this.paddingRight),
                  l =
                    (r / Math.max(this.ticks.length - 1, 1),
                    r * s + this.paddingLeft);
                return this.left + Math.round(l);
              }
              var h = this.height - (this.paddingTop + this.paddingBottom),
                c =
                  (h / Math.max(this.ticks.length - 1, 1),
                  h * s + this.paddingTop);
              return this.top + Math.round(c);
            },
            parseTime: function (e) {
              return "function" == typeof e.getMonth || "number" == typeof e
                ? t(e)
                : e.isValid && e.isValid()
                ? e
                : "string" != typeof this.options.time.format &&
                  this.options.time.format.call
                ? this.options.time.format(e)
                : t(e, this.options.time.format);
            },
          });
        i.scaleService.registerScaleType("time", s, a);
      }.call(this, t),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.global.elements.arc = {
          backgroundColor: e.defaults.global.defaultColor,
          borderColor: "#fff",
          borderWidth: 2,
        }),
          (e.elements.Arc = e.Element.extend({
            inLabelRange: function (t) {
              var e = this._view;
              return (
                !!e &&
                Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
              );
            },
            inRange: function (t, e) {
              var n = this._view;
              if (n) {
                var o = i.getAngleFromPoint(n, { x: t, y: e }),
                  a =
                    n.startAngle < -0.5 * Math.PI
                      ? n.startAngle + 2 * Math.PI
                      : n.startAngle > 1.5 * Math.PI
                      ? n.startAngle - 2 * Math.PI
                      : n.startAngle,
                  s =
                    n.endAngle < -0.5 * Math.PI
                      ? n.endAngle + 2 * Math.PI
                      : n.endAngle > 1.5 * Math.PI
                      ? n.endAngle - 2 * Math.PI
                      : n.endAngle,
                  r = o.angle >= a && o.angle <= s,
                  l =
                    o.distance >= n.innerRadius && o.distance <= n.outerRadius;
                return r && l;
              }
              return !1;
            },
            tooltipPosition: function () {
              var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
              return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
            },
            draw: function () {
              var t = this._chart.ctx,
                e = this._view;
              t.beginPath(),
                t.arc(e.x, e.y, e.outerRadius, e.startAngle, e.endAngle),
                t.arc(e.x, e.y, e.innerRadius, e.endAngle, e.startAngle, !0),
                t.closePath(),
                (t.strokeStyle = e.borderColor),
                (t.lineWidth = e.borderWidth),
                (t.fillStyle = e.backgroundColor),
                t.fill(),
                (t.lineJoin = "bevel"),
                e.borderWidth && t.stroke();
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers;
        (e.defaults.global.elements.line = {
          tension: 0.4,
          backgroundColor: e.defaults.global.defaultColor,
          borderWidth: 3,
          borderColor: e.defaults.global.defaultColor,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          fill: !0,
        }),
          (e.elements.Line = e.Element.extend({
            lineToNextPoint: function (t, e, i, n, o) {
              var a = this._chart.ctx;
              e._view.skip
                ? n.call(this, t, e, i)
                : t._view.skip
                ? o.call(this, t, e, i)
                : 0 === e._view.tension
                ? a.lineTo(e._view.x, e._view.y)
                : a.bezierCurveTo(
                    t._view.controlPointNextX,
                    t._view.controlPointNextY,
                    e._view.controlPointPreviousX,
                    e._view.controlPointPreviousY,
                    e._view.x,
                    e._view.y
                  );
            },
            draw: function () {
              function t(t) {
                s._view.skip || r._view.skip
                  ? t && a.lineTo(n._view.scaleZero.x, n._view.scaleZero.y)
                  : a.bezierCurveTo(
                      r._view.controlPointNextX,
                      r._view.controlPointNextY,
                      s._view.controlPointPreviousX,
                      s._view.controlPointPreviousY,
                      s._view.x,
                      s._view.y
                    );
              }
              var n = this,
                o = this._view,
                a = this._chart.ctx,
                s = this._children[0],
                r = this._children[this._children.length - 1];
              a.save(),
                this._children.length > 0 &&
                  o.fill &&
                  (a.beginPath(),
                  i.each(
                    this._children,
                    function (t, e) {
                      var n = i.previousItem(this._children, e),
                        s = i.nextItem(this._children, e);
                      0 === e
                        ? (this._loop
                            ? a.moveTo(o.scaleZero.x, o.scaleZero.y)
                            : a.moveTo(t._view.x, o.scaleZero),
                          t._view.skip
                            ? this._loop ||
                              a.moveTo(s._view.x, this._view.scaleZero)
                            : a.lineTo(t._view.x, t._view.y))
                        : this.lineToNextPoint(
                            n,
                            t,
                            s,
                            function (t, e, i) {
                              this._loop
                                ? a.lineTo(
                                    this._view.scaleZero.x,
                                    this._view.scaleZero.y
                                  )
                                : (a.lineTo(t._view.x, this._view.scaleZero),
                                  a.moveTo(i._view.x, this._view.scaleZero));
                            },
                            function (t, e) {
                              a.lineTo(e._view.x, e._view.y);
                            }
                          );
                    },
                    this
                  ),
                  this._loop
                    ? t(!0)
                    : (a.lineTo(
                        this._children[this._children.length - 1]._view.x,
                        o.scaleZero
                      ),
                      a.lineTo(this._children[0]._view.x, o.scaleZero)),
                  (a.fillStyle =
                    o.backgroundColor || e.defaults.global.defaultColor),
                  a.closePath(),
                  a.fill()),
                (a.lineCap =
                  o.borderCapStyle ||
                  e.defaults.global.elements.line.borderCapStyle),
                a.setLineDash &&
                  a.setLineDash(
                    o.borderDash || e.defaults.global.elements.line.borderDash
                  ),
                (a.lineDashOffset =
                  o.borderDashOffset ||
                  e.defaults.global.elements.line.borderDashOffset),
                (a.lineJoin =
                  o.borderJoinStyle ||
                  e.defaults.global.elements.line.borderJoinStyle),
                (a.lineWidth =
                  o.borderWidth || e.defaults.global.elements.line.borderWidth),
                (a.strokeStyle =
                  o.borderColor || e.defaults.global.defaultColor),
                a.beginPath(),
                i.each(
                  this._children,
                  function (t, e) {
                    var n = i.previousItem(this._children, e),
                      o = i.nextItem(this._children, e);
                    0 === e
                      ? a.moveTo(t._view.x, t._view.y)
                      : this.lineToNextPoint(
                          n,
                          t,
                          o,
                          function (t, e, i) {
                            a.moveTo(i._view.x, i._view.y);
                          },
                          function (t, e) {
                            a.moveTo(e._view.x, e._view.y);
                          }
                        );
                  },
                  this
                ),
                this._loop && this._children.length > 0 && t(),
                a.stroke(),
                a.restore();
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart;
        e.helpers;
        (e.defaults.global.elements.point = {
          radius: 3,
          pointStyle: "circle",
          backgroundColor: e.defaults.global.defaultColor,
          borderWidth: 1,
          borderColor: e.defaults.global.defaultColor,
          hitRadius: 1,
          hoverRadius: 4,
          hoverBorderWidth: 1,
        }),
          (e.elements.Point = e.Element.extend({
            inRange: function (t, e) {
              var i = this._view;
              if (i) {
                var n = i.hitRadius + i.radius;
                return (
                  Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(n, 2)
                );
              }
              return !1;
            },
            inLabelRange: function (t) {
              var e = this._view;
              return (
                !!e &&
                Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
              );
            },
            tooltipPosition: function () {
              var t = this._view;
              return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
            },
            draw: function () {
              var t = this._view,
                i = this._chart.ctx;
              if (!t.skip && (t.radius > 0 || t.borderWidth > 0)) {
                (i.strokeStyle =
                  t.borderColor || e.defaults.global.defaultColor),
                  (i.lineWidth =
                    t.borderWidth ||
                    e.defaults.global.elements.point.borderWidth),
                  (i.fillStyle =
                    t.backgroundColor || e.defaults.global.defaultColor);
                var n = t.radius || e.defaults.global.elements.point.radius;
                switch (t.pointStyle) {
                  case "circle":
                  default:
                    i.beginPath(),
                      i.arc(t.x, t.y, n, 0, 2 * Math.PI),
                      i.closePath(),
                      i.fill();
                    break;
                  case "triangle":
                    i.beginPath();
                    var o = (3 * n) / Math.sqrt(3),
                      a = (o * Math.sqrt(3)) / 2;
                    i.moveTo(t.x - o / 2, t.y + a / 3),
                      i.lineTo(t.x + o / 2, t.y + a / 3),
                      i.lineTo(t.x, t.y - (2 * a) / 3),
                      i.closePath(),
                      i.fill();
                    break;
                  case "rect":
                    i.fillRect(
                      t.x - (1 / Math.SQRT2) * n,
                      t.y - (1 / Math.SQRT2) * n,
                      (2 / Math.SQRT2) * n,
                      (2 / Math.SQRT2) * n
                    ),
                      i.strokeRect(
                        t.x - (1 / Math.SQRT2) * n,
                        t.y - (1 / Math.SQRT2) * n,
                        (2 / Math.SQRT2) * n,
                        (2 / Math.SQRT2) * n
                      );
                    break;
                  case "rectRot":
                    i.translate(t.x, t.y),
                      i.rotate(Math.PI / 4),
                      i.fillRect(
                        (-1 / Math.SQRT2) * n,
                        (-1 / Math.SQRT2) * n,
                        (2 / Math.SQRT2) * n,
                        (2 / Math.SQRT2) * n
                      ),
                      i.strokeRect(
                        (-1 / Math.SQRT2) * n,
                        (-1 / Math.SQRT2) * n,
                        (2 / Math.SQRT2) * n,
                        (2 / Math.SQRT2) * n
                      ),
                      i.setTransform(1, 0, 0, 1, 0, 0);
                    break;
                  case "cross":
                    i.beginPath(),
                      i.moveTo(t.x, t.y + n),
                      i.lineTo(t.x, t.y - n),
                      i.moveTo(t.x - n, t.y),
                      i.lineTo(t.x + n, t.y),
                      i.closePath();
                    break;
                  case "crossRot":
                    i.beginPath();
                    var s = Math.cos(Math.PI / 4) * n,
                      r = Math.sin(Math.PI / 4) * n;
                    i.moveTo(t.x - s, t.y - r),
                      i.lineTo(t.x + s, t.y + r),
                      i.moveTo(t.x - s, t.y + r),
                      i.lineTo(t.x + s, t.y - r),
                      i.closePath();
                    break;
                  case "star":
                    i.beginPath(),
                      i.moveTo(t.x, t.y + n),
                      i.lineTo(t.x, t.y - n),
                      i.moveTo(t.x - n, t.y),
                      i.lineTo(t.x + n, t.y);
                    var s = Math.cos(Math.PI / 4) * n,
                      r = Math.sin(Math.PI / 4) * n;
                    i.moveTo(t.x - s, t.y - r),
                      i.lineTo(t.x + s, t.y + r),
                      i.moveTo(t.x - s, t.y + r),
                      i.lineTo(t.x + s, t.y - r),
                      i.closePath();
                    break;
                  case "line":
                    i.beginPath(),
                      i.moveTo(t.x - n, t.y),
                      i.lineTo(t.x + n, t.y),
                      i.closePath();
                    break;
                  case "dash":
                    i.beginPath(),
                      i.moveTo(t.x, t.y),
                      i.lineTo(t.x + n, t.y),
                      i.closePath();
                }
                i.stroke();
              }
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart;
        e.helpers;
        (e.defaults.global.elements.rectangle = {
          backgroundColor: e.defaults.global.defaultColor,
          borderWidth: 0,
          borderColor: e.defaults.global.defaultColor,
        }),
          (e.elements.Rectangle = e.Element.extend({
            draw: function () {
              var t = this._chart.ctx,
                e = this._view,
                i = e.width / 2,
                n = e.x - i,
                o = e.x + i,
                a = e.base - (e.base - e.y),
                s = e.borderWidth / 2;
              e.borderWidth && ((n += s), (o -= s), (a += s)),
                t.beginPath(),
                (t.fillStyle = e.backgroundColor),
                (t.strokeStyle = e.borderColor),
                (t.lineWidth = e.borderWidth),
                t.moveTo(n, e.base),
                t.lineTo(n, a),
                t.lineTo(o, a),
                t.lineTo(o, e.base),
                t.fill(),
                e.borderWidth && t.stroke();
            },
            height: function () {
              var t = this._view;
              return t.base - t.y;
            },
            inRange: function (t, e) {
              var i = this._view,
                n = !1;
              return (
                i &&
                  (n =
                    i.y < i.base
                      ? t >= i.x - i.width / 2 &&
                        t <= i.x + i.width / 2 &&
                        e >= i.y &&
                        e <= i.base
                      : t >= i.x - i.width / 2 &&
                        t <= i.x + i.width / 2 &&
                        e >= i.base &&
                        e <= i.y),
                n
              );
            },
            inLabelRange: function (t) {
              var e = this._view;
              return !!e && t >= e.x - e.width / 2 && t <= e.x + e.width / 2;
            },
            tooltipPosition: function () {
              var t = this._view;
              return { x: t.x, y: t.y };
            },
          }));
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart;
        e.helpers;
        e.Bar = function (t, i) {
          return (i.type = "bar"), new e(t, i);
        };
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart;
        e.helpers;
        e.Bubble = function (t, i) {
          return (i.type = "bubble"), new e(t, i);
        };
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart;
        e.helpers;
        e.Doughnut = function (t, i) {
          return (i.type = "doughnut"), new e(t, i);
        };
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart;
        e.helpers;
        e.Line = function (t, i) {
          return (i.type = "line"), new e(t, i);
        };
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart;
        e.helpers;
        e.PolarArea = function (t, i) {
          return (i.type = "polarArea"), new e(t, i);
        };
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i = e.helpers,
          n = { aspectRatio: 1 };
        e.Radar = function (t, o) {
          return (
            (o.options = i.configMerge(n, o.options)),
            (o.type = "radar"),
            new e(t, o)
          );
        };
      }.call(this),
      function () {
        "use strict";
        var t = this,
          e = t.Chart,
          i =
            (e.helpers,
            {
              hover: { mode: "single" },
              scales: {
                xAxes: [{ type: "linear", position: "bottom", id: "x-axis-1" }],
                yAxes: [{ type: "linear", position: "left", id: "y-axis-1" }],
              },
              tooltips: {
                callbacks: {
                  title: function (t, e) {
                    return "";
                  },
                  label: function (t, e) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")";
                  },
                },
              },
            });
        (e.defaults.scatter = i),
          (e.controllers.scatter = e.controllers.line),
          (e.Scatter = function (t, i) {
            return (i.type = "scatter"), new e(t, i);
          });
      }.call(this),
      this.Chart
    );
  });
var job = {
  headline: "Javascript wizard with good sense of design",
  essentials: {
    locations: ["berlin", "london"],
    employment: EmploymentType().Permanent,
    startdate: new Date().getTime(),
    salary: {
      status: TaxStatus().Gross,
      interval: Interval().Year,
      currency: "GBP",
      amount: 35e3,
      stockoptions: !0,
    },
    industry: "Blockchain",
    companysize: CompanySize().TenToTwenty,
    teamsize: { min: 1, max: 5 },
  },
  methodology: {
    codereviews: !0,
    prototyping: !0,
    pairprogramming: !0,
    failfast: !0,
    unittests: !0,
    integrationtests: !0,
    buildserver: BuildServers().Travis,
    staticcodeanalysis: CodeAnalysisTools().NotYetChosen,
    versioncontrol: VersionControlSystem().Git,
    issuetracker: IssueTrackers().GitHub,
    knowledgerepo: KnowledgeRepos().GitHubWiki,
    standups: !0,
    qaprotocol: !0,
    agilemanagement: AgileManagementSystems().Kanban,
    freedomovertools: !0,
    onecommandbuild: !0,
    quickstart: !0,
    commitondayone: !0,
  },
  specs: {
    workload: 1,
    workweek: 144e3,
    holidays: 20,
    corehours: { from: 1100, to: 1700 },
    travel: TravelOptions().Plentiful,
    remote: RemoteWorking().Negotiable,
    relocationpackage: RelocationPackages().Negotiable,
  },
  profile: {
    newfeatures: 70,
    clientsupport: 20,
    documentation: 10,
    maintenance: 0,
    meetings: 0,
  },
  equipment: {
    operatingsystem: [OperationSystems().MacOSX, OperationSystems().Ubuntu],
    computer: MachineType().Laptop,
    monitors: Monitors().Negotiable,
  },
  technologies: {
    css3: Level().Expert,
    html5: Level().Expert,
    javascript: Level().Expert,
    node: Level().Expert,
    rest: Level().Good,
    jsonrpc: Level().Good,
    uiux: Level().Good,
    design: Level().Good,
    oneof: {
      junit: Level().Good,
      mocha: Level().Good,
      jasmine: Level().Good,
      selenium: Level().Good,
    },
    oneof: {
      react: Level().Familiar,
      meteor: Level().Familiar,
      angular: Level().Familiar,
    },
    p2p: Level().Familiar,
    ethereum: Level().Familiar,
    blockchain: Level().Familiar,
    oneof: {
      rust: Level().Familiar,
      haskell: Level().Familiar,
      ruby: Level().Familiar,
      python: Level().Familiar,
      cpp: Level().Familiar,
    },
    gametheory: Level().Familiar,
    cryptography: Level().Familiar,
    boardgames: Level().Familiar,
  },
  other: [
    "we do retreats",
    "we change the world",
    "best team around",
    "hardcore",
  ],
  misc: {
    training: TrainingType().Informal,
    fossphilosophy: FOSS().AlwaysOpen,
    codingretreats: !0,
    conferences: [
      ConferencePotential().Speaking,
      ConferencePotential().Attending,
    ],
    teamevents: !0,
    healthcare: !0,
    mobilephone: !1,
    kitchen: !0,
    canteen: !1,
    freestuff: ["coffee", "beverages", "snacks", "bikeparking", "playroom"],
  },
};
!(function (t) {
  function e(t, e, i) {
    return (
      "string" == typeof t &&
        ("%" == t.slice(-1)
          ? (t = (parseInt(t.substring(0, t.length - 1)) / 100) * e)
          : "vh" == t.slice(-2)
          ? (t = (parseInt(t.substring(0, t.length - 2)) / 100) * i)
          : "px" == t.slice(-2) &&
            (t = parseInt(t.substring(0, t.length - 2)))),
      t
    );
  }
  var i = t(window),
    n = 1,
    o = {};
  i
    .on("scroll", function () {
      var e = i.scrollTop();
      t.map(o, function (t) {
        window.clearTimeout(t.timeoutId),
          (t.timeoutId = window.setTimeout(function () {
            t.handler(e);
          }, t.options.delay));
      });
    })
    .on("load", function () {
      i.trigger("scroll");
    }),
    (jQuery.fn.scrollex = function (a) {
      var s = t(this);
      if (0 == this.length) return s;
      if (this.length > 1) {
        for (var r = 0; r < this.length; r++) t(this[r]).scrollex(a);
        return s;
      }
      if (s.data("_scrollexId")) return s;
      var l, h, c, u, d;
      switch (
        ((l = n++),
        (h = jQuery.extend(
          {
            top: 0,
            bottom: 0,
            delay: 0,
            mode: "default",
            enter: null,
            leave: null,
            initialize: null,
            terminate: null,
            scroll: null,
          },
          a
        )),
        h.mode)
      ) {
        case "top":
          c = function (t, e, i, n, o) {
            return t >= n && o >= t;
          };
          break;
        case "bottom":
          c = function (t, e, i, n, o) {
            return i >= n && o >= i;
          };
          break;
        case "middle":
          c = function (t, e, i, n, o) {
            return e >= n && o >= e;
          };
          break;
        case "top-only":
          c = function (t, e, i, n, o) {
            return n >= t && i >= n;
          };
          break;
        case "bottom-only":
          c = function (t, e, i, n, o) {
            return i >= o && o >= t;
          };
          break;
        default:
        case "default":
          c = function (t, e, i, n, o) {
            return i >= n && o >= t;
          };
      }
      return (
        (u = function (t) {
          var n,
            o,
            a,
            s,
            r,
            l,
            h = this.state,
            c = !1,
            u = this.$element.offset();
          (n = i.height()),
            (o = t + n / 2),
            (a = t + n),
            (s = this.$element.outerHeight()),
            (r = u.top + e(this.options.top, s, n)),
            (l = u.top + s - e(this.options.bottom, s, n)),
            (c = this.test(t, o, a, r, l)),
            c != h &&
              ((this.state = c),
              c
                ? this.options.enter && this.options.enter.apply(this.element)
                : this.options.leave && this.options.leave.apply(this.element)),
            this.options.scroll &&
              this.options.scroll.apply(this.element, [(o - r) / (l - r)]);
        }),
        (d = {
          id: l,
          options: h,
          test: c,
          handler: u,
          state: null,
          element: this,
          $element: s,
          timeoutId: null,
        }),
        (o[l] = d),
        s.data("_scrollexId", d.id),
        d.options.initialize && d.options.initialize.apply(this),
        s
      );
    }),
    (jQuery.fn.unscrollex = function () {
      var e = t(this);
      if (0 == this.length) return e;
      if (this.length > 1) {
        for (var i = 0; i < this.length; i++) t(this[i]).unscrollex();
        return e;
      }
      var n, a;
      return (n = e.data("_scrollexId"))
        ? ((a = o[n]),
          window.clearTimeout(a.timeoutId),
          delete o[n],
          e.removeData("_scrollexId"),
          a.options.terminate && a.options.terminate.apply(this),
          e)
        : e;
    });
})(jQuery),
  (function (t) {
    skel.breakpoints({
      xlarge: "(max-width: 1680px)",
      large: "(max-width: 1280px)",
      medium: "(max-width: 980px)",
      small: "(max-width: 736px)",
      xsmall: "(max-width: 480px)",
    }),
      t(function () {
        var e = t(window),
          i = t("body");
        t("#sidebar");
        skel.vars.IEVersion < 12 && i.addClass("is-ie"),
          "/" === window.location.pathname &&
            window.location.hostname.indexOf("blog") === -1 &&
            (skel.canUse("transition") && i.addClass("is-loading"),
            e.on("load", function () {
              window.setTimeout(function () {
                i.removeClass("is-loading");
              }, 100);
            })),
          t("form").placeholder(),
          t("form").on("click", ".submit", function (e) {
            e.stopPropagation(),
              e.preventDefault(),
              t(this).parents("form").submit();
          }),
          skel.on("+medium -medium", function () {
            t.prioritize(
              ".important\\28 medium\\29",
              skel.breakpoint("medium").active
            );
          }),
          t(".spotlights > section")
            .scrollex({
              mode: "middle",
              top: "-10vh",
              bottom: "-10vh",
              initialize: function () {
                skel.canUse("transition") && t(this).addClass("inactive");
              },
              enter: function () {
                t(this).removeClass("inactive");
              },
            })
            .each(function () {
              var e,
                i = t(this),
                n = i.find(".image:first"),
                o = n.find("img");
              n.css("background-image", "url(" + o.attr("src") + ")"),
                (e = o.data("position")) && n.css("background-position", e),
                o.hide();
            }),
          skel.canUse("transition") &&
            t(".features").scrollex({
              mode: "middle",
              top: "-20vh",
              bottom: "-20vh",
              initialize: function () {
                t(this).addClass("inactive");
              },
              enter: function () {
                t(this).removeClass("inactive");
              },
            });
      });
  })(jQuery),
  (function (t) {
    (t.fn.navList = function () {
      var e = t(this);
      return (
        ($a = e.find("a")),
        (b = []),
        $a.each(function () {
          var e = t(this),
            i = Math.max(0, e.parents("li").length - 1),
            n = e.attr("href"),
            o = e.attr("target");
          b.push(
            '<a class="link depth-' +
              i +
              '"' +
              ("undefined" != typeof o && "" != o
                ? ' target="' + o + '"'
                : "") +
              ("undefined" != typeof n && "" != n ? ' href="' + n + '"' : "") +
              '><span class="indent-' +
              i +
              '"></span>' +
              e.text() +
              "</a>"
          );
        }),
        b.join("")
      );
    }),
      (t.fn.panel = function (e) {
        if (0 == this.length) return o;
        if (this.length > 1) {
          for (var i = 0; i < this.length; i++) t(this[i]).panel(e);
          return o;
        }
        var n,
          o = t(this),
          a = t("body"),
          s = t(window),
          r = o.attr("id");
        return (
          (n = t.extend(
            {
              delay: 0,
              hideOnClick: !1,
              hideOnEscape: !1,
              hideOnSwipe: !1,
              resetScroll: !1,
              resetForms: !1,
              side: null,
              target: o,
              visibleClass: "visible",
            },
            e
          )),
          "jQuery" != typeof n.target && (n.target = t(n.target)),
          (o._hide = function (t) {
            n.target.hasClass(n.visibleClass) &&
              (t && (t.preventDefault(), t.stopPropagation()),
              n.target.removeClass(n.visibleClass),
              window.setTimeout(function () {
                n.resetScroll && o.scrollTop(0),
                  n.resetForms &&
                    o.find("form").each(function () {
                      this.reset();
                    });
              }, n.delay));
          }),
          o
            .css("-ms-overflow-style", "-ms-autohiding-scrollbar")
            .css("-webkit-overflow-scrolling", "touch"),
          n.hideOnClick &&
            (o.find("a").css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"),
            o.on("click", "a", function (e) {
              var i = t(this),
                a = i.attr("href"),
                s = i.attr("target");
              a &&
                "#" != a &&
                "" != a &&
                a != "#" + r &&
                (e.preventDefault(),
                e.stopPropagation(),
                o._hide(),
                window.setTimeout(function () {
                  "_blank" == s ? window.open(a) : (window.location.href = a);
                }, n.delay + 10));
            })),
          o.on("touchstart", function (t) {
            (o.touchPosX = t.originalEvent.touches[0].pageX),
              (o.touchPosY = t.originalEvent.touches[0].pageY);
          }),
          o.on("touchmove", function (t) {
            if (null !== o.touchPosX && null !== o.touchPosY) {
              var e = o.touchPosX - t.originalEvent.touches[0].pageX,
                i = o.touchPosY - t.originalEvent.touches[0].pageY,
                a = o.outerHeight(),
                s = o.get(0).scrollHeight - o.scrollTop();
              if (n.hideOnSwipe) {
                var r = !1,
                  l = 20,
                  h = 50;
                switch (n.side) {
                  case "left":
                    r = i < l && i > -1 * l && e > h;
                    break;
                  case "right":
                    r = i < l && i > -1 * l && e < -1 * h;
                    break;
                  case "top":
                    r = e < l && e > -1 * l && i > h;
                    break;
                  case "bottom":
                    r = e < l && e > -1 * l && i < -1 * h;
                }
                if (r)
                  return (
                    (o.touchPosX = null), (o.touchPosY = null), o._hide(), !1
                  );
              }
              ((o.scrollTop() < 0 && i < 0) ||
                (s > a - 2 && s < a + 2 && i > 0)) &&
                (t.preventDefault(), t.stopPropagation());
            }
          }),
          o.on("click touchend touchstart touchmove", function (t) {
            t.stopPropagation();
          }),
          o.on("click", 'a[href="#' + r + '"]', function (t) {
            t.preventDefault(),
              t.stopPropagation(),
              n.target.removeClass(n.visibleClass);
          }),
          a.on("click touchend", function (t) {
            o._hide(t);
          }),
          a.on("click", 'a[href="#' + r + '"]', function (t) {
            t.preventDefault(),
              t.stopPropagation(),
              n.target.toggleClass(n.visibleClass);
          }),
          n.hideOnEscape &&
            s.on("keydown", function (t) {
              27 == t.keyCode && o._hide(t);
            }),
          o
        );
      }),
      (t.fn.placeholder = function () {
        if ("undefined" != typeof document.createElement("input").placeholder)
          return t(this);
        if (0 == this.length) return i;
        if (this.length > 1) {
          for (var e = 0; e < this.length; e++) t(this[e]).placeholder();
          return i;
        }
        var i = t(this);
        return (
          i
            .find("input[type=text],textarea")
            .each(function () {
              var e = t(this);
              ("" != e.val() && e.val() != e.attr("placeholder")) ||
                e.addClass("polyfill-placeholder").val(e.attr("placeholder"));
            })
            .on("blur", function () {
              var e = t(this);
              e.attr("name").match(/-polyfill-field$/) ||
                ("" == e.val() &&
                  e
                    .addClass("polyfill-placeholder")
                    .val(e.attr("placeholder")));
            })
            .on("focus", function () {
              var e = t(this);
              e.attr("name").match(/-polyfill-field$/) ||
                (e.val() == e.attr("placeholder") &&
                  e.removeClass("polyfill-placeholder").val(""));
            }),
          i.find("input[type=password]").each(function () {
            var e = t(this),
              i = t(
                t("<div>")
                  .append(e.clone())
                  .remove()
                  .html()
                  .replace(/type="password"/i, 'type="text"')
                  .replace(/type=password/i, "type=text")
              );
            "" != e.attr("id") &&
              i.attr("id", e.attr("id") + "-polyfill-field"),
              "" != e.attr("name") &&
                i.attr("name", e.attr("name") + "-polyfill-field"),
              i
                .addClass("polyfill-placeholder")
                .val(i.attr("placeholder"))
                .insertAfter(e),
              "" == e.val() ? e.hide() : i.hide(),
              e.on("blur", function (t) {
                t.preventDefault();
                var i = e
                  .parent()
                  .find("input[name=" + e.attr("name") + "-polyfill-field]");
                "" == e.val() && (e.hide(), i.show());
              }),
              i
                .on("focus", function (t) {
                  t.preventDefault();
                  var e = i
                    .parent()
                    .find(
                      "input[name=" +
                        i.attr("name").replace("-polyfill-field", "") +
                        "]"
                    );
                  i.hide(), e.show().focus();
                })
                .on("keypress", function (t) {
                  t.preventDefault(), i.val("");
                });
          }),
          i
            .on("submit", function () {
              i.find("input[type=text],input[type=password],textarea").each(
                function (e) {
                  var i = t(this);
                  i.attr("name").match(/-polyfill-field$/) &&
                    i.attr("name", ""),
                    i.val() == i.attr("placeholder") &&
                      (i.removeClass("polyfill-placeholder"), i.val(""));
                }
              );
            })
            .on("reset", function (e) {
              e.preventDefault(),
                i.find("select").val(t("option:first").val()),
                i.find("input,textarea").each(function () {
                  var e,
                    i = t(this);
                  switch ((i.removeClass("polyfill-placeholder"), this.type)) {
                    case "submit":
                    case "reset":
                      break;
                    case "password":
                      i.val(i.attr("defaultValue")),
                        (e = i
                          .parent()
                          .find(
                            "input[name=" + i.attr("name") + "-polyfill-field]"
                          )),
                        "" == i.val()
                          ? (i.hide(), e.show())
                          : (i.show(), e.hide());
                      break;
                    case "checkbox":
                    case "radio":
                      i.attr("checked", i.attr("defaultValue"));
                      break;
                    case "text":
                    case "textarea":
                      i.val(i.attr("defaultValue")),
                        "" == i.val() &&
                          (i.addClass("polyfill-placeholder"),
                          i.val(i.attr("placeholder")));
                      break;
                    default:
                      i.val(i.attr("defaultValue"));
                  }
                });
            }),
          i
        );
      }),
      (t.prioritize = function (e, i) {
        var n = "__prioritize";
        "jQuery" != typeof e && (e = t(e)),
          e.each(function () {
            var e,
              o = t(this),
              a = o.parent();
            if (0 != a.length)
              if (o.data(n)) {
                if (i) return;
                (e = o.data(n)), o.insertAfter(e), o.removeData(n);
              } else {
                if (!i) return;
                if (((e = o.prev()), 0 == e.length)) return;
                o.prependTo(a), o.data(n, e);
              }
          });
      });
  })(jQuery);
