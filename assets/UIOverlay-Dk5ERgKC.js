import { StudioPortfolio } from './studio.js';
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Tooltip-B8gZJWmn-BCHKKdMx.js",
      "assets/index-BwnWIdL-.js",
      "assets/index-DVLcN9EI.css",
    ]),
) => i.map((i) => d[i]);
import {
  f as M,
  c as te,
  i as Qe,
  d as ne,
  J as At,
  s as Ze,
  e as Ke,
  p as Ft,
  v as St,
  h as Ct,
  k as Tt,
  l as Lt,
  n as et,
  m as Et,
  o as $t,
  u as q,
  b as x,
  q as tt,
  t as Se,
  w as U,
  M as nt,
  x as de,
  j as s,
  _ as It,
  y as p,
  R as Mt,
  A as Ce,
} from "./index-BwnWIdL-.js";
function rt(e, t) {
  let r;
  const n = () => {
    const { currentTime: a } = t,
      o = (a === null ? 0 : a.value) / 100;
    (r !== o && e(o), (r = o));
  };
  return (M.preUpdate(n, !0), () => te(n));
}
function Rt(...e) {
  const t = !Array.isArray(e[0]),
    r = t ? 0 : -1,
    n = e[0 + r],
    a = e[1 + r],
    i = e[2 + r],
    o = e[3 + r],
    l = Qe(a, i, o);
  return t ? l(n) : l;
}
function Wt(e, t, r = {}) {
  const n = e.get();
  let a = null,
    i = n,
    o;
  const l = typeof n == "string" ? n.replace(/[\d.-]/g, "") : void 0,
    d = () => {
      (a && (a.stop(), (a = null)), (e.animation = void 0));
    },
    u = () => {
      const g = Te(e.get()),
        m = Te(i);
      if (g === m) {
        d();
        return;
      }
      const w = a ? a.getGeneratorVelocity() : e.getVelocity();
      (d(),
        (a = new At({
          keyframes: [g, m],
          velocity: w,
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...r,
          onUpdate: o,
        })));
    },
    f = () => {
      var g;
      (u(),
        (e.animation = a ?? void 0),
        (g = e.events.animationStart) == null || g.notify(),
        a == null ||
          a.then(() => {
            var m;
            ((e.animation = void 0),
              (m = e.events.animationComplete) == null || m.notify());
          }));
    };
  if (
    (e.attach((g, m) => {
      ((i = g), (o = (w) => m(ue(w, l))), M.postRender(f));
    }, d),
    ne(t))
  ) {
    let g = r.skipInitialAnimation === !0;
    const m = t.on("change", (j) => {
        g ? ((g = !1), e.jump(ue(j, l), !1)) : e.set(ue(j, l));
      }),
      w = e.on("destroy", m);
    return () => {
      (m(), w());
    };
  }
  return d;
}
function ue(e, t) {
  return t ? e + t : e;
}
function Te(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function re(e) {
  return typeof window > "u" ? !1 : e ? Ze() : Ke();
}
const _t = 50,
  Le = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  Vt = () => ({ time: 0, x: Le(), y: Le() }),
  zt = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Ee(e, t, r, n) {
  const a = r[t],
    { length: i, position: o } = zt[t],
    l = a.current,
    d = r.time;
  ((a.current = Math.abs(e[`scroll${o}`])),
    (a.scrollLength = e[`scroll${i}`] - e[`client${i}`]),
    (a.offset.length = 0),
    (a.offset[0] = 0),
    (a.offset[1] = a.scrollLength),
    (a.progress = Ft(0, a.scrollLength, a.current)));
  const u = n - d;
  a.velocity = u > _t ? 0 : St(a.current - l, u);
}
function Pt(e, t, r) {
  (Ee(e, "x", t, r), Ee(e, "y", t, r), (t.time = r));
}
function Ot(e, t) {
  const r = { x: 0, y: 0 };
  let n = e;
  for (; n && n !== t; )
    if (Ct(n))
      ((r.x += n.offsetLeft), (r.y += n.offsetTop), (n = n.offsetParent));
    else if (n.tagName === "svg") {
      const a = n.getBoundingClientRect();
      n = n.parentElement;
      const i = n.getBoundingClientRect();
      ((r.x += a.left - i.left), (r.y += a.top - i.top));
    } else if (n instanceof SVGGraphicsElement) {
      const { x: a, y: i } = n.getBBox();
      ((r.x += a), (r.y += i));
      let o = null,
        l = n.parentNode;
      for (; !o; ) (l.tagName === "svg" && (o = l), (l = n.parentNode));
      n = o;
    } else break;
  return r;
}
const pe = { start: 0, center: 0.5, end: 1 };
function $e(e, t, r = 0) {
  let n = 0;
  if ((e in pe && (e = pe[e]), typeof e == "string")) {
    const a = parseFloat(e);
    e.endsWith("px")
      ? (n = a)
      : e.endsWith("%")
        ? (e = a / 100)
        : e.endsWith("vw")
          ? (n = (a / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (n = (a / 100) * document.documentElement.clientHeight)
            : (e = a);
  }
  return (typeof e == "number" && (n = t * e), r + n);
}
const Ht = [0, 0];
function Bt(e, t, r, n) {
  let a = Array.isArray(e) ? e : Ht,
    i = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (a = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (a = e.split(" ")) : (a = [e, pe[e] ? e : "0"])),
    (i = $e(a[0], r, n)),
    (o = $e(a[1], t)),
    i - o
  );
}
const G = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Yt = { x: 0, y: 0 };
function Ut(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function Gt(e, t, r) {
  const { offset: n = G.All } = r,
    { target: a = e, axis: i = "y" } = r,
    o = i === "y" ? "height" : "width",
    l = a !== e ? Ot(a, e) : Yt,
    d = a === e ? { width: e.scrollWidth, height: e.scrollHeight } : Ut(a),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[i].offset.length = 0;
  let f = !t[i].interpolate;
  const g = n.length;
  for (let m = 0; m < g; m++) {
    const w = Bt(n[m], u[o], d[o], l[i]);
    (!f && w !== t[i].interpolatorOffsets[m] && (f = !0), (t[i].offset[m] = w));
  }
  (f &&
    ((t[i].interpolate = Qe(t[i].offset, Tt(n), { clamp: !1 })),
    (t[i].interpolatorOffsets = [...t[i].offset])),
    (t[i].progress = Lt(0, 1, t[i].interpolate(t[i].current))));
}
function qt(e, t = e, r) {
  if (((r.x.targetOffset = 0), (r.y.targetOffset = 0), t !== e)) {
    let n = t;
    for (; n && n !== e; )
      ((r.x.targetOffset += n.offsetLeft),
        (r.y.targetOffset += n.offsetTop),
        (n = n.offsetParent));
  }
  ((r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (r.x.containerLength = e.clientWidth),
    (r.y.containerLength = e.clientHeight));
}
function Xt(e, t, r, n = {}) {
  return {
    measure: (a) => {
      (qt(e, n.target, r), Pt(e, r, a), (n.offset || n.target) && Gt(e, r, n));
    },
    notify: () => t(r),
  };
}
const z = new WeakMap(),
  Ie = new WeakMap(),
  he = new WeakMap(),
  Me = new WeakMap(),
  Z = new WeakMap(),
  Re = (e) => (e === document.scrollingElement ? window : e);
function st(
  e,
  {
    container: t = document.scrollingElement,
    trackContentSize: r = !1,
    ...n
  } = {},
) {
  if (!t) return et;
  let a = he.get(t);
  a || ((a = new Set()), he.set(t, a));
  const i = Vt(),
    o = Xt(t, e, i, n);
  if ((a.add(o), !z.has(t))) {
    const d = () => {
        for (const m of a) m.measure($t.timestamp);
        M.preUpdate(u);
      },
      u = () => {
        for (const m of a) m.notify();
      },
      f = () => M.read(d);
    z.set(t, f);
    const g = Re(t);
    (window.addEventListener("resize", f),
      t !== document.documentElement && Ie.set(t, Et(t, f)),
      g.addEventListener("scroll", f),
      f());
  }
  if (r && !Z.has(t)) {
    const d = z.get(t),
      u = { width: t.scrollWidth, height: t.scrollHeight };
    Me.set(t, u);
    const f = () => {
        const m = t.scrollWidth,
          w = t.scrollHeight;
        (u.width !== m || u.height !== w) &&
          (d(), (u.width = m), (u.height = w));
      },
      g = M.read(f, !0);
    Z.set(t, g);
  }
  const l = z.get(t);
  return (
    M.read(l, !1, !0),
    () => {
      var g;
      te(l);
      const d = he.get(t);
      if (!d || (d.delete(o), d.size)) return;
      const u = z.get(t);
      (z.delete(t),
        u &&
          (Re(t).removeEventListener("scroll", u),
          (g = Ie.get(t)) == null || g(),
          window.removeEventListener("resize", u)));
      const f = Z.get(t);
      (f && (te(f), Z.delete(t)), Me.delete(t));
    }
  );
}
const Jt = [
    [G.Enter, "entry"],
    [G.Exit, "exit"],
    [G.Any, "cover"],
    [G.All, "contain"],
  ],
  We = { start: 0, end: 1 };
function Qt(e) {
  const t = e.trim().split(/\s+/);
  if (t.length !== 2) return;
  const r = We[t[0]],
    n = We[t[1]];
  if (!(r === void 0 || n === void 0)) return [r, n];
}
function Zt(e) {
  if (e.length !== 2) return;
  const t = [];
  for (const r of e)
    if (Array.isArray(r)) t.push(r);
    else if (typeof r == "string") {
      const n = Qt(r);
      if (!n) return;
      t.push(n);
    } else return;
  return t;
}
function Kt(e, t) {
  const r = Zt(e);
  if (!r) return !1;
  for (let n = 0; n < 2; n++) {
    const a = r[n],
      i = t[n];
    if (a[0] !== i[0] || a[1] !== i[1]) return !1;
  }
  return !0;
}
function ge(e) {
  if (!e) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [t, r] of Jt)
    if (Kt(e, t)) return { rangeStart: `${r} 0%`, rangeEnd: `${r} 100%` };
}
const _e = new Map();
function Ve(e) {
  const t = { value: 0 },
    r = st((n) => {
      t.value = n[e.axis].progress * 100;
    }, e);
  return { currentTime: t, cancel: r };
}
function at({ source: e, container: t, ...r }) {
  const { axis: n } = r;
  e && (t = e);
  let a = _e.get(t);
  a || ((a = new Map()), _e.set(t, a));
  const i = r.target ?? "self";
  let o = a.get(i);
  o || ((o = {}), a.set(i, o));
  const l = n + (r.offset ?? []).join(",");
  return (
    o[l] ||
      (r.target && re(r.target)
        ? ge(r.offset)
          ? (o[l] = new ViewTimeline({ subject: r.target, axis: n }))
          : (o[l] = Ve({ container: t, ...r }))
        : re()
          ? (o[l] = new ScrollTimeline({ source: t, axis: n }))
          : (o[l] = Ve({ container: t, ...r }))),
    o[l]
  );
}
function en(e, t) {
  const r = at(t),
    n = t.target ? ge(t.offset) : void 0,
    a = t.target ? re(t.target) && !!n : re();
  return e.attachTimeline({
    timeline: a ? r : void 0,
    ...(n && a && { rangeStart: n.rangeStart, rangeEnd: n.rangeEnd }),
    observe: (i) => (
      i.pause(),
      rt((o) => {
        i.time = i.iterationDuration * o;
      }, r)
    ),
  });
}
function tn(e) {
  return e.length === 2;
}
function nn(e, t) {
  return tn(e)
    ? st((r) => {
        e(r[t.axis].progress, r);
      }, t)
    : rt(e, at(t));
}
function it(
  e,
  { axis: t = "y", container: r = document.scrollingElement, ...n } = {},
) {
  if (!r) return et;
  const a = { axis: t, container: r, ...n };
  return typeof e == "function" ? nn(e, a) : en(e, a);
}
const rn = () => ({
    scrollX: U(0),
    scrollY: U(0),
    scrollXProgress: U(0),
    scrollYProgress: U(0),
  }),
  K = (e) => (e ? !e.current : !1);
function ze(e, t, r, n) {
  return {
    factory: (a) =>
      it(a, {
        ...t,
        axis: e,
        container: (r == null ? void 0 : r.current) || void 0,
        target: (n == null ? void 0 : n.current) || void 0,
      }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (a) => a,
    duration: 1,
  };
}
function sn(e, t) {
  return typeof window > "u" ? !1 : e ? Ze() && !!ge(t) : Ke();
}
function an({ container: e, target: t, ...r } = {}) {
  const n = q(rn);
  sn(t, r.offset) &&
    ((n.scrollXProgress.accelerate = ze("x", r, e, t)),
    (n.scrollYProgress.accelerate = ze("y", r, e, t)));
  const a = x.useRef(null),
    i = x.useRef(!1),
    o = x.useCallback(
      () => (
        (a.current = it(
          (l, { x: d, y: u }) => {
            (n.scrollX.set(d.current),
              n.scrollXProgress.set(d.progress),
              n.scrollY.set(u.current),
              n.scrollYProgress.set(u.progress));
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          },
        )),
        () => {
          var l;
          (l = a.current) == null || l.call(a);
        }
      ),
      [e, t, JSON.stringify(r.offset)],
    );
  return (
    tt(() => {
      if (((i.current = !1), K(e) || K(t))) {
        i.current = !0;
        return;
      } else return o();
    }, [o]),
    x.useEffect(() => {
      if (i.current) return (Se(!K(e)), Se(!K(t)), o());
    }, [o]),
    n
  );
}
function se(e) {
  const t = q(() => U(e)),
    { isStatic: r } = x.useContext(nt);
  if (r) {
    const [, n] = x.useState(e);
    x.useEffect(() => t.on("change", n), []);
  }
  return t;
}
function we(e, t) {
  const r = se(t()),
    n = () => r.set(t());
  return (
    n(),
    tt(() => {
      const a = () => M.preRender(n, !1, !0),
        i = e.map((o) => o.on("change", a));
      return () => {
        (i.forEach((o) => o()), te(n));
      };
    }),
    r
  );
}
function on(e, ...t) {
  const r = e.length;
  function n() {
    let a = "";
    for (let i = 0; i < r; i++) {
      a += e[i];
      const o = t[i];
      o && (a += ne(o) ? o.get() : o);
    }
    return a;
  }
  return we(t.filter(ne), n);
}
function ln(e) {
  ((de.current = []), e());
  const t = we(de.current, e);
  return ((de.current = void 0), t);
}
function P(e, t, r, n) {
  if (typeof e == "function") return ln(e);
  if (r !== void 0 && !Array.isArray(r) && typeof t != "function")
    return cn(e, t, r, n);
  const o = typeof t == "function" ? t : Rt(t, r, n),
    l = Array.isArray(e) ? Pe(e, o) : Pe([e], ([u]) => o(u)),
    d = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    d &&
      !d.isTransformed &&
      typeof t != "function" &&
      Array.isArray(r) &&
      (n == null ? void 0 : n.clamp) !== !1 &&
      (l.accelerate = { ...d, times: t, keyframes: r, isTransformed: !0 }),
    l
  );
}
function Pe(e, t) {
  const r = q(() => []);
  return we(e, () => {
    r.length = 0;
    const n = e.length;
    for (let a = 0; a < n; a++) r[a] = e[a].get();
    return t(r);
  });
}
function cn(e, t, r, n) {
  const a = q(() => Object.keys(r)),
    i = q(() => ({}));
  for (const o of a) i[o] = P(e, t, r[o], n);
  return i;
}
function dn(e, t = {}) {
  const { isStatic: r } = x.useContext(nt),
    n = () => (ne(e) ? e.get() : e);
  if (r) return P(n);
  const a = se(n());
  return (x.useInsertionEffect(() => Wt(a, e, t), [a, JSON.stringify(t)]), a);
}
function X(e, t = {}) {
  return dn(e, { type: "spring", ...t });
}
const un = 864e5,
  ot = 6e4,
  lt = 36e5,
  Oe = Symbol.for("constructDateFrom");
function J(e, t) {
  return typeof e == "function"
    ? e(t)
    : e && typeof e == "object" && Oe in e
      ? e[Oe](t)
      : e instanceof Date
        ? new e.constructor(t)
        : new Date(t);
}
function S(e, t) {
  return J(t || e, e);
}
function ct(e, t, r) {
  const n = S(e, r == null ? void 0 : r.in);
  return isNaN(t) ? J(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function He(e) {
  const t = S(e),
    r = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
  return (r.setUTCFullYear(t.getFullYear()), +e - +r);
}
function dt(e, ...t) {
  const r = J.bind(
    null,
    t.find((n) => typeof n == "object"),
  );
  return t.map(r);
}
function Be(e, t) {
  const r = S(e, t == null ? void 0 : t.in);
  return (r.setHours(0, 0, 0, 0), r);
}
function hn(e, t, r) {
  const [n, a] = dt(r == null ? void 0 : r.in, e, t),
    i = Be(n),
    o = Be(a),
    l = +i - He(i),
    d = +o - He(o);
  return Math.round((l - d) / un);
}
function fn(e, t, r) {
  return ct(e, t * 7, r);
}
function mn(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function pn(e) {
  return !((!mn(e) && typeof e != "number") || isNaN(+S(e)));
}
function xn(e, t) {
  const [r, n] = dt(e, t.start, t.end);
  return { start: r, end: n };
}
function ut(e, t) {
  const { start: r, end: n } = xn(t == null ? void 0 : t.in, e);
  let a = +r > +n;
  const i = a ? +r : +n,
    o = a ? n : r;
  o.setHours(0, 0, 0, 0);
  let l = 1;
  const d = [];
  for (; +o <= i; )
    (d.push(J(r, o)), o.setDate(o.getDate() + l), o.setHours(0, 0, 0, 0));
  return a ? d.reverse() : d;
}
function T(e, t) {
  const r = e < 0 ? "-" : "",
    n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
function ht(e, t) {
  const r = S(e, t == null ? void 0 : t.in);
  if (isNaN(+r)) throw new RangeError("Invalid time value");
  const n = (t == null ? void 0 : t.format) ?? "extended",
    a = (t == null ? void 0 : t.representation) ?? "complete";
  let i = "",
    o = "";
  const l = n === "extended" ? "-" : "",
    d = n === "extended" ? ":" : "";
  if (a !== "time") {
    const u = T(r.getDate(), 2),
      f = T(r.getMonth() + 1, 2);
    i = `${T(r.getFullYear(), 4)}${l}${f}${l}${u}`;
  }
  if (a !== "date") {
    const u = r.getTimezoneOffset();
    if (u !== 0) {
      const N = Math.abs(u),
        k = T(Math.trunc(N / 60), 2),
        v = T(N % 60, 2);
      o = `${u < 0 ? "+" : "-"}${k}:${v}`;
    } else o = "Z";
    const f = T(r.getHours(), 2),
      g = T(r.getMinutes(), 2),
      m = T(r.getSeconds(), 2),
      w = i === "" ? "" : "T",
      j = [f, g, m].join(d);
    i = `${i}${w}${j}${o}`;
  }
  return i;
}
function ft(e, t) {
  return S(e, t == null ? void 0 : t.in).getDay();
}
function gn(e, t) {
  return S(e, t == null ? void 0 : t.in).getMonth();
}
function wn(e, t) {
  return S(e, t == null ? void 0 : t.in).getFullYear();
}
function yn(e, t, r) {
  let n = t - ft(e, r);
  return (n <= 0 && (n += 7), ct(e, n, r));
}
function H(e, t) {
  const r = () => J(t == null ? void 0 : t.in, NaN),
    a = Nn(e);
  let i;
  if (a.date) {
    const u = Dn(a.date, 2);
    i = kn(u.restDateString, u.year);
  }
  if (!i || isNaN(+i)) return r();
  const o = +i;
  let l = 0,
    d;
  if (a.time && ((l = An(a.time)), isNaN(l))) return r();
  if (a.timezone) {
    if (((d = Fn(a.timezone)), isNaN(d))) return r();
  } else {
    const u = new Date(o + l),
      f = S(0, t == null ? void 0 : t.in);
    return (
      f.setFullYear(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()),
      f.setHours(
        u.getUTCHours(),
        u.getUTCMinutes(),
        u.getUTCSeconds(),
        u.getUTCMilliseconds(),
      ),
      f
    );
  }
  return S(o + l + d, t == null ? void 0 : t.in);
}
const ee = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  bn = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  vn =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  jn = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Nn(e) {
  const t = {},
    r = e.split(ee.dateTimeDelimiter);
  let n;
  if (r.length > 2) return t;
  if (
    (/:/.test(r[0])
      ? (n = r[0])
      : ((t.date = r[0]),
        (n = r[1]),
        ee.timeZoneDelimiter.test(t.date) &&
          ((t.date = e.split(ee.timeZoneDelimiter)[0]),
          (n = e.substr(t.date.length, e.length)))),
    n)
  ) {
    const a = ee.timezone.exec(n);
    a ? ((t.time = n.replace(a[1], "")), (t.timezone = a[1])) : (t.time = n);
  }
  return t;
}
function Dn(e, t) {
  const r = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + t) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + t) +
        "})$)",
    ),
    n = e.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  const a = n[1] ? parseInt(n[1]) : null,
    i = n[2] ? parseInt(n[2]) : null;
  return {
    year: i === null ? a : i * 100,
    restDateString: e.slice((n[1] || n[2]).length),
  };
}
function kn(e, t) {
  if (t === null) return new Date(NaN);
  const r = e.match(bn);
  if (!r) return new Date(NaN);
  const n = !!r[4],
    a = Y(r[1]),
    i = Y(r[2]) - 1,
    o = Y(r[3]),
    l = Y(r[4]),
    d = Y(r[5]) - 1;
  if (n) return En(t, l, d) ? Sn(t, l, d) : new Date(NaN);
  {
    const u = new Date(0);
    return !Tn(t, i, o) || !Ln(t, a)
      ? new Date(NaN)
      : (u.setUTCFullYear(t, i, Math.max(a, o)), u);
  }
}
function Y(e) {
  return e ? parseInt(e) : 1;
}
function An(e) {
  const t = e.match(vn);
  if (!t) return NaN;
  const r = fe(t[1]),
    n = fe(t[2]),
    a = fe(t[3]);
  return $n(r, n, a) ? r * lt + n * ot + a * 1e3 : NaN;
}
function fe(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function Fn(e) {
  if (e === "Z") return 0;
  const t = e.match(jn);
  if (!t) return 0;
  const r = t[1] === "+" ? -1 : 1,
    n = parseInt(t[2]),
    a = (t[3] && parseInt(t[3])) || 0;
  return In(n, a) ? r * (n * lt + a * ot) : NaN;
}
function Sn(e, t, r) {
  const n = new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const a = n.getUTCDay() || 7,
    i = (t - 1) * 7 + r + 1 - a;
  return (n.setUTCDate(n.getUTCDate() + i), n);
}
const Cn = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function mt(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Tn(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (Cn[t] || (mt(e) ? 29 : 28));
}
function Ln(e, t) {
  return t >= 1 && t <= (mt(e) ? 366 : 365);
}
function En(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function $n(e, t, r) {
  return e === 24
    ? t === 0 && r === 0
    : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function In(e, t) {
  return t >= 0 && t <= 59;
}
function Mn(e, t, r) {
  return fn(e, -1, r);
}
const ye = "react-activity-calendar",
  me = 8,
  pt = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  Rn = {
    months: pt,
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    totalCount: "{{count}} activities in {{year}}",
    legend: { less: "Less", more: "More" },
  },
  Ye = "(prefers-color-scheme: dark)";
function Wn() {
  const [e, t] = x.useState(() =>
      typeof window > "u"
        ? "light"
        : window.matchMedia(Ye).matches
          ? "dark"
          : "light",
    ),
    r = (n) => {
      t(n.matches ? "dark" : "light");
    };
  return (
    x.useEffect(() => {
      const n = window.matchMedia(Ye);
      return (
        t(n.matches ? "dark" : "light"),
        n.addEventListener("change", r),
        () => {
          n.removeEventListener("change", r);
        }
      );
    }, []),
    e
  );
}
const xt = `${ye}--loading-animation`;
function _n(e, t) {
  const [r, n] = x.useState(!1);
  return (
    x.useEffect(() => {
      const a = `oklab(from ${e} l a b)`,
        i =
          t === "light"
            ? `oklab(from ${e} calc(l * 0.96) a b)`
            : `oklab(from ${e} calc(l * 1.08) a b)`,
        o = document.createElement("style");
      o.innerHTML = `
      @keyframes ${xt} {
        0% {
          fill: ${a};
        }
        50% {
          fill: ${i};
        }
        100% {
          fill: ${a};
        }
      }
    `;
      const l = () => {
        n(!0);
      };
      return (
        document.head.appendChild(o),
        o.addEventListener("load", l),
        () => {
          (document.head.removeChild(o),
            o.removeEventListener("load", l),
            n(!1));
        }
      );
    }, [e, t]),
    r
  );
}
const Ue = "(prefers-reduced-motion: reduce)";
function Vn() {
  const [e, t] = x.useState(() =>
    typeof window > "u" ? !0 : window.matchMedia(Ue).matches,
  );
  return (
    x.useEffect(() => {
      const r = window.matchMedia(Ue);
      t(r.matches);
      const n = (a) => {
        t(a.matches);
      };
      return (
        r.addEventListener("change", n),
        () => {
          r.removeEventListener("change", n);
        }
      );
    }, []),
    e
  );
}
function zn(e, { minLevel: t, maxLevel: r }) {
  if (e.length === 0) throw new Error("Activity data must not be empty.");
  for (const { date: n, level: a } of e) {
    if (!pn(H(n)))
      throw new Error(
        `Activity date '${n}' is not a valid ISO 8601 date string.`,
      );
    if (a < t || a > r)
      throw new RangeError(
        `Activity level ${a} for ${n} is out of range. It must be between ${t} and ${r}.`,
      );
  }
}
function Pn(e, t = 0) {
  const r = On(e),
    n = r[0],
    a = H(n.date),
    i = ft(a) === t ? a : Mn(yn(a, t)),
    o = [...Array(hn(a, i)).fill(void 0), ...r],
    l = Math.ceil(o.length / 7);
  return ae(l).map((d) => o.slice(d * 7, d * 7 + 7));
}
function On(e) {
  const t = new Map(e.map((a) => [a.date, a])),
    r = e[0],
    n = e[e.length - 1];
  return ut({ start: H(r.date), end: H(n.date) }).map((a) => {
    const i = ht(a, { representation: "date" });
    return t.has(i) ? t.get(i) : { date: i, count: 0, level: 0 };
  });
}
function E(e) {
  return `${ye}__${e}`;
}
function Hn() {
  const e = new Date().getFullYear();
  return ut({ start: new Date(e, 0, 1), end: new Date(e, 11, 31) }).map(
    (r) => ({ date: ht(r, { representation: "date" }), count: 0, level: 0 }),
  );
}
function ae(e, t) {
  const r = t === void 0 ? 0 : e,
    n = t ?? e;
  if (n <= r)
    throw new RangeError("Invalid range: to must be greater than from");
  return Array.from({ length: n - r }, (a, i) => r + i);
}
function Bn(e, t = pt) {
  return e
    .reduce((r, n, a) => {
      const i = n.find((d) => d !== void 0);
      if (!i) throw new Error(`Unexpected error: Week ${a + 1} is empty.`);
      const o = t[gn(H(i.date))];
      if (!o) {
        const d = new Date(i.date).toLocaleString("en-US", { month: "short" });
        throw new Error(`Unexpected error: undefined month label for ${d}.`);
      }
      const l = r[r.length - 1];
      return a === 0 || (l == null ? void 0 : l.label) !== o
        ? [...r, { weekIndex: a, label: o }]
        : r;
    }, [])
    .filter(({ weekIndex: r }, n, a) =>
      n === 0
        ? a[1] && a[1].weekIndex - r >= 3
        : n === a.length - 1
          ? e.slice(r).length >= 3
          : !0,
    );
}
function Yn(e, t, r) {
  if (e.length !== 7)
    throw new Error("Exactly 7 labels, one for each weekday must be passed.");
  return e.reduce(
    (n, a, i) => (t.byDayIndex(i) ? Math.max(n, Math.ceil(Un(a, r).width)) : n),
    0,
  );
}
function Un(e, t) {
  if (typeof document > "u" || typeof window > "u")
    return { width: 0, height: 0 };
  if (t < 1) throw new RangeError("fontSize must be positive");
  if (e.length === 0) return { width: 0, height: 0 };
  const r = "http://www.w3.org/2000/svg",
    n = document.createElementNS(r, "svg");
  ((n.style.position = "absolute"),
    (n.style.visibility = "hidden"),
    (n.style.fontFamily = window.getComputedStyle(document.body).fontFamily),
    (n.style.fontSize = `${t}px`));
  const a = document.createElementNS(r, "text");
  ((a.textContent = e), n.appendChild(a), document.body.appendChild(n));
  const i = a.getBBox();
  return (document.body.removeChild(n), { width: i.width, height: i.height });
}
function Gn(e, t) {
  if (!e) return { byDayIndex: () => !1, shouldShow: !1 };
  if (e === !0)
    return { byDayIndex: (n) => ((7 + n - t) % 7) % 2 !== 0, shouldShow: !0 };
  const r = [];
  for (const n of e) {
    const a = qn[n.toLowerCase()];
    r[a] = !0;
  }
  return { byDayIndex: (n) => r[n] ?? !1, shouldShow: e.length > 0 };
}
const qn = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
function Xn(e, t = { minLevel: 0, maxLevel: 4 }) {
  const r = Jn(t);
  if (e) {
    const n = t.maxLevel - t.minLevel + 1;
    return (
      Qn(e, n),
      (e.light = e.light ?? r.light),
      (e.dark = e.dark ?? r.dark),
      {
        light: Ge(e.light)
          ? O([e.light[1], e.light[0], e.light[1]], t)
          : qe(e.light)
            ? O(e.light, t)
            : e.light,
        dark: Ge(e.dark)
          ? O([e.dark[1], e.dark[0], e.dark[1]], t)
          : qe(e.dark)
            ? O(e.dark, t)
            : e.dark,
      }
    );
  }
  return r;
}
function Jn(e) {
  return {
    light: O(["hsl(0, 0%, 26%)", "hsl(0, 0%, 92%)", "hsl(0, 0%, 26%)"], e),
    dark: O(["hsl(0, 0%, 92%)", "hsl(0, 0%, 22%)", "hsl(0, 0%, 92%)"], e),
  };
}
function Qn(e, t) {
  const r =
    "The number of colors must match the number of activity levels controlled by the `minLevel` and `maxLevel` properties.";
  if (typeof e != "object" || (e.light === void 0 && e.dark === void 0))
    throw new Error(
      `The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${t} colors respectively. ${r}`,
    );
  if (e.light) {
    const { length: n } = e.light;
    if (n !== 2 && n !== 3 && n !== t)
      throw new Error(
        `theme.light must contain exactly 2 or 3 or ${t} colors, ${n} passed. ${r}`,
      );
    for (const a of e.light)
      if (typeof window < "u" && !CSS.supports("color", a))
        throw new Error(
          `Invalid color "${a}" passed. All CSS color formats are accepted.`,
        );
  }
  if (e.dark) {
    const { length: n } = e.dark;
    if (n !== 2 && n !== 3 && n !== t)
      throw new Error(
        `theme.dark must contain exactly 2 or 3 or ${t} colors, ${n} passed. ${r}`,
      );
    for (const a of e.dark)
      if (typeof window < "u" && !CSS.supports("color", a))
        throw new Error(
          `Invalid color "${a}" passed. All CSS color formats are accepted.`,
        );
  }
}
function O([e, t, r], { minLevel: n, maxLevel: a }) {
  return ae(n, a + 1).map((i) => {
    if (i < 0) {
      if (i === n) return e;
      const l = (1 - i / n) * 100;
      return `color-mix(in oklab, ${t} ${parseFloat(l.toFixed(2))}%, ${e})`;
    }
    if (i === 0) return t;
    if (i === a) return r;
    const o = (i / a) * 100;
    return `color-mix(in oklab, ${r} ${parseFloat(o.toFixed(2))}%, ${t})`;
  });
}
function Ge(e) {
  return e.length === 2;
}
function qe(e) {
  return e.length === 3;
}
const $ = {
    container: (e) => ({
      width: "max-content",
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontSize: `${e}px`,
    }),
    scrollContainer: (e) => ({
      maxWidth: "100%",
      overflowX: "auto",
      overflowY: "hidden",
      paddingTop: Math.ceil(0.1 * e),
    }),
    calendar: { display: "block", overflow: "visible" },
    rect: (e) => ({
      stroke:
        e === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.04)",
    }),
    footer: {
      container: {
        display: "flex",
        flexWrap: "wrap",
        gap: "4px 16px",
        whiteSpace: "nowrap",
      },
      legend: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "3px",
      },
    },
  },
  Xe = x.lazy(() =>
    It(
      () => import("./Tooltip-B8gZJWmn-BCHKKdMx.js"),
      __vite__mapDeps([0, 1, 2]),
    ).then((e) => ({ default: e.Tooltip })),
  ),
  xe = x.forwardRef(
    (
      {
        data: e,
        blockMargin: t = 4,
        blockRadius: r = 2,
        blockSize: n = 12,
        className: a,
        colorScheme: i,
        fontSize: o = 14,
        labels: l,
        loading: d = !1,
        minLevel: u = 0,
        maxLevel: f = 4,
        renderBlock: g,
        renderColorLegend: m,
        showColorLegend: w = !0,
        showMonthLabels: j = !0,
        showTotalCount: N = !0,
        showWeekdayLabels: k = !1,
        style: v = {},
        theme: c,
        tooltips: h = {},
        weekStart: y = 0,
      },
      F,
    ) => {
      const [L, R] = x.useState(!1);
      if (
        (x.useEffect(() => {
          R(!0);
        }, []),
        u >= f)
      )
        throw new RangeError(
          `Minimum activity level must be less than maximum level. Got ${u} and ${f}.`,
        );
      const W = { minLevel: u, maxLevel: f },
        B = Xn(c, W),
        ie = Wn(),
        _ = i ?? ie,
        be = B[_],
        wt = _n(be[0], _),
        ve = !Vn();
      if (d) {
        if (ve && !wt) return null;
        e = Hn();
      }
      zn(e, W);
      const yt = e[0],
        je = wn(H(yt.date)),
        oe = Pn(e, y),
        C = Object.assign({}, Rn, l),
        le = j ? o + me : 0,
        Q = Gn(k, y),
        Ne = L && Q.shouldShow ? Yn(C.weekdays, Q, o) + me : void 0;
      function bt() {
        return { width: oe.length * (n + t) - t, height: le + (n + t) * 7 - t };
      }
      function vt() {
        return oe
          .map((D, b) =>
            D.map((A, V) => {
              if (!A) return null;
              const kt =
                  d && ve
                    ? {
                        animation: `${xt} 1.75s ease-in-out infinite`,
                        animationDelay: `${b * 20 + V * 20}ms`,
                      }
                    : void 0,
                Fe = s.jsx("rect", {
                  x: 0,
                  y: le + (n + t) * V,
                  width: n,
                  height: n,
                  rx: r,
                  ry: r,
                  fill: De(A.level),
                  "data-date": A.date,
                  "data-level": A.level,
                  style: { ...$.rect(_), ...kt },
                }),
                ce = g ? g(Fe, A) : Fe;
              return s.jsx(
                x.Fragment,
                {
                  children: h.activity
                    ? s.jsx(x.Suspense, {
                        fallback: ce,
                        children: s.jsx(Xe, {
                          text: h.activity.text(A),
                          colorScheme: _,
                          placement: h.activity.placement ?? "top",
                          hoverRestMs: h.activity.hoverRestMs,
                          offset: h.activity.offset,
                          transitionStyles: h.activity.transitionStyles,
                          withArrow: h.activity.withArrow,
                          children: ce,
                        }),
                      })
                    : ce,
                },
                A.date,
              );
            }),
          )
          .map((D, b) =>
            s.jsx(
              "g",
              { transform: `translate(${(n + t) * b}, 0)`, children: D },
              b,
            ),
          );
      }
      function jt() {
        if (!N && !w) return null;
        const D = e.reduce((b, A) => b + A.count, 0);
        return s.jsxs("footer", {
          className: E("footer"),
          style: { ...$.footer.container, marginLeft: Ne },
          children: [
            d && s.jsx("div", { children: " " }),
            !d &&
              N &&
              s.jsx("div", {
                className: E("count"),
                children: C.totalCount
                  ? C.totalCount
                      .replace("{{count}}", String(D))
                      .replace("{{year}}", String(je))
                  : `${D} activities in ${je}`,
              }),
            !d &&
              w &&
              s.jsxs("div", {
                className: E("legend-colors"),
                style: $.footer.legend,
                children: [
                  C.legend.less &&
                    s.jsx("span", {
                      style: { marginRight: "0.4em" },
                      children: C.legend.less,
                    }),
                  ae(u, f + 1).map((b) => {
                    const A = s.jsx(
                        "svg",
                        {
                          width: n,
                          height: n,
                          children: s.jsx("rect", {
                            width: n,
                            height: n,
                            fill: De(b),
                            rx: r,
                            ry: r,
                            style: $.rect(_),
                          }),
                        },
                        b,
                      ),
                      V = m ? m(A, b) : A;
                    return s.jsx(
                      x.Fragment,
                      {
                        children: h.colorLegend
                          ? s.jsx(x.Suspense, {
                              fallback: V,
                              children: s.jsx(Xe, {
                                text: h.colorLegend.text(b),
                                colorScheme: _,
                                placement: h.colorLegend.placement ?? "bottom",
                                hoverRestMs: h.colorLegend.hoverRestMs,
                                offset: h.colorLegend.offset,
                                transitionStyles:
                                  h.colorLegend.transitionStyles,
                                withArrow: h.colorLegend.withArrow,
                                children: V,
                              }),
                            })
                          : V,
                      },
                      b,
                    );
                  }),
                  C.legend.more &&
                    s.jsx("span", {
                      style: { marginLeft: "0.4em" },
                      children: C.legend.more,
                    }),
                ],
              }),
          ],
        });
      }
      function Nt() {
        return Q.shouldShow
          ? s.jsx("g", {
              className: E("legend-weekday"),
              children: ae(7).map((D) => {
                const b = (D + y) % 7;
                return Q.byDayIndex(b)
                  ? s.jsx(
                      "text",
                      {
                        x: -me,
                        y: le + (n + t) * D + n / 2,
                        dominantBaseline: "central",
                        textAnchor: "end",
                        fill: "currentColor",
                        children: C.weekdays[b],
                      },
                      D,
                    )
                  : null;
              }),
            })
          : null;
      }
      function Dt() {
        return j
          ? s.jsx("g", {
              className: E("legend-month"),
              children: Bn(oe, C.months).map(({ label: D, weekIndex: b }) =>
                s.jsx(
                  "text",
                  {
                    x: (n + t) * b,
                    y: 0,
                    dominantBaseline: "hanging",
                    fill: "currentColor",
                    children: D,
                  },
                  b,
                ),
              ),
            })
          : null;
      }
      function De(D) {
        return be[D - u];
      }
      const { width: ke, height: Ae } = bt();
      return s.jsxs("article", {
        ref: F,
        className: `${ye} ${a ?? ""}`.trim(),
        style: { ...v, ...$.container(o) },
        children: [
          s.jsx("div", {
            className: E("scroll-container"),
            style: $.scrollContainer(o),
            children: s.jsxs("svg", {
              width: ke,
              height: Ae,
              viewBox: `0 0 ${ke} ${Ae}`,
              className: E("calendar"),
              style: { ...$.calendar, marginLeft: Ne },
              children: [!d && Nt(), !d && Dt(), vt()],
            }),
          }),
          jt(),
        ],
      });
    },
  );
xe.displayName = "ActivityCalendar";
const Zn = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  },
  Kn = (e, t) => {
    if (typeof t != "function") return e;
    const r = t(e);
    if (!Array.isArray(r))
      throw Error(
        "transformData() function must return a list of Activity objects.",
      );
    for (const n of r) {
      if (!er(n))
        throw Error(
          "transformData() must return a list of valid Activity objects.",
        );
      if (typeof n.count != "number" || n.count < 0)
        throw Error(
          `Required property "count: number" missing or invalid. Got: ${n.count}`,
        );
      if (typeof n.date != "string" || !/\d{4}-\d{2}-\d{2}/.test(n.date))
        throw Error(
          `Required property "date: YYYY-MM-DD" missing or invalid. Got: ${n.date}`,
        );
      if (typeof n.level != "number" || n.level < 0 || n.level > 4)
        throw Error(
          `Required property "level: 0 | 1 | 2 | 3 | 4" missing or invalid: Got: ${n.level}.`,
        );
    }
    return r;
  },
  er = (e) => Object.prototype.toString.call(e) === "[object Object]";
async function tr(e, t) {
  const n = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${e}?y=${String(t)}`,
    ),
    a = await n.json();
  if (!n.ok)
    throw Error(
      `Fetching GitHub contribution data for "${e}" failed: ${a.error}`,
    );
  return a;
}
const gt = x.forwardRef(
  (
    {
      username: e,
      year: t = "last",
      labels: r,
      transformData: n,
      throwOnError: a = !1,
      errorMessage:
        i = `Error – Fetching GitHub contribution data for "${e}" failed.`,
      ...o
    },
    l,
  ) => {
    const [d, u] = x.useState(null),
      [f, g] = x.useState(!1),
      [m, w] = x.useState(null),
      j = x.useCallback(() => {
        (g(!0),
          w(null),
          tr(e, t)
            .then(u)
            .catch((v) => {
              v instanceof Error && w(v);
            })
            .finally(() => {
              g(!1);
            }));
      }, [e, t]);
    if ((x.useEffect(j, [j]), m)) {
      if (a) throw m;
      return s.jsx("div", { children: i });
    }
    if (f || !d) return s.jsx(xe, { ...o, data: [], loading: !0 });
    const N = o.theme ?? Zn,
      k = {
        totalCount: `{{count}} contributions in ${t === "last" ? "the last year" : "{{year}}"}`,
      };
    return s.jsx(xe, {
      data: Kn(d.contributions, n),
      labels: Object.assign({}, k, r),
      ref: l,
      ...o,
      theme: N,
      loading: !!o.loading || f,
      maxLevel: 4,
    });
  },
);
gt.displayName = "GitHubCalendar";
function I({ title: e, description: t, tech: r, link: n }) {
  const a = x.useRef(null),
    i = se(0),
    o = se(0),
    l = X(i, { stiffness: 300, damping: 40 }),
    d = X(o, { stiffness: 300, damping: 40 }),
    u = P(d, [-0.5, 0.5], ["10deg", "-10deg"]),
    f = P(l, [-0.5, 0.5], ["-10deg", "10deg"]),
    g = P(l, [-0.5, 0.5], [0, 100]),
    m = P(d, [-0.5, 0.5], [0, 100]),
    w = on`radial-gradient(circle at ${g}% ${m}%, rgba(212,175,55,0.1) 0%, transparent 60%)`,
    k = {
      ref: a,
      onMouseMove: (h) => {
        if (!a.current) return;
        const y = a.current.getBoundingClientRect(),
          F = y.width,
          L = y.height,
          R = h.clientX - y.left,
          W = h.clientY - y.top,
          B = R / F - 0.5,
          ie = W / L - 0.5;
        (i.set(B), o.set(ie));
      },
      onMouseLeave: () => {
        (i.set(0), o.set(0));
      },
      style: { rotateX: u, rotateY: f, transformStyle: "preserve-3d" },
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: !0, margin: "50px" },
      variants: {
        hidden: { opacity: 0, scale: 0.95, y: 40 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 14,
            mass: 1.2,
            staggerChildren: 0.15,
          },
        },
      },
      className:
        "glass-panel p-8 w-[100%] sm:w-[95%] md:w-full min-h-[300px] flex flex-col justify-between transition-all duration-700 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(255,255,255,0.08)] hover:-translate-y-2 group relative overflow-hidden text-left mx-auto focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50",
    },
    v = {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    c = s.jsxs(s.Fragment, {
      children: [
        s.jsx(p.div, {
          className:
            "absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700",
          style: { background: w },
        }),
        s.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-br from-[#ffffff]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-1",
        }),
        s.jsxs("div", {
          style: {
            transform: "translateZ(40px)",
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          },
          children: [
            s.jsxs("div", {
              children: [
                s.jsxs("div", {
                  className: "flex justify-between items-start mb-4",
                  children: [
                    s.jsx(p.h3, {
                      variants: v,
                      className:
                        "text-[22px] md:text-[24px] font-serif font-medium text-white group-hover:text-gradient-gold transition-all duration-500",
                      children: e,
                    }),
                    n &&
                      s.jsx(p.svg, {
                        variants: v,
                        className:
                          "w-5 h-5 text-white/30 group-hover:text-[#D4AF37] transition-all duration-500 -rotate-45 group-hover:rotate-0",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 1.5,
                          d: "M14 5l7 7m0 0l-7 7m7-7H3",
                        }),
                      }),
                  ],
                }),
                s.jsx(p.p, {
                  variants: v,
                  className:
                    "text-white/50 text-[14px] leading-relaxed mb-8 font-sans font-light group-hover:text-white/80 transition-all duration-500",
                  children: t,
                }),
              ],
            }),
            s.jsxs("div", {
              className: "mt-auto",
              children: [
                s.jsx(p.div, {
                  variants: v,
                  className: "flex flex-wrap gap-2",
                  children: r.map((h) =>
                    s.jsx(
                      "span",
                      {
                        className:
                          "text-[10px] px-3 py-1.5 bg-black/40 rounded-full font-sans font-medium text-white/50 uppercase tracking-[0.2em] border border-white/5 group-hover:border-white/20 group-hover:text-[#D4AF37] transition-all duration-500 shadow-sm",
                        children: h,
                      },
                      h,
                    ),
                  ),
                }),
                n &&
                  s.jsxs(p.div, {
                    variants: v,
                    className:
                      "mt-8 flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#D4AF37] font-sans text-[11px] uppercase tracking-[0.2em] font-medium",
                    children: [
                      n?.includes("/pull/") ? "View merged PR" : "View project",
                      s.jsx("svg", {
                        className:
                          "w-4 h-4 transition-transform duration-500 group-hover:translate-x-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17 8l4 4m0 0l-4 4m4-4H3",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  return n
    ? s.jsx(p.a, {
        href: n,
        target: "_blank",
        rel: "noopener noreferrer",
        ...k,
        children: c,
      })
    : s.jsx(p.div, { ...k, children: c });
}
function Je({ children: e, onClick: t, className: r = "" }) {
  const n = x.useRef(null),
    [a, i] = x.useState(!1),
    o = { stiffness: 150, damping: 15, mass: 0.1 },
    l = X(0, o),
    d = X(0, o),
    u = (g) => {
      if (!n.current) return;
      const { clientX: m, clientY: w } = g,
        {
          height: j,
          width: N,
          left: k,
          top: v,
        } = n.current.getBoundingClientRect(),
        c = k + N / 2,
        h = v + j / 2,
        y = m - c,
        F = w - h;
      (l.set(y * 0.2), d.set(F * 0.2));
    },
    f = () => {
      (i(!1), l.set(0), d.set(0));
    };
  return s.jsxs(p.button, {
    ref: n,
    onMouseMove: u,
    onMouseEnter: () => i(!0),
    onMouseLeave: f,
    onClick: t,
    style: { x: l, y: d },
    className: `relative uppercase tracking-[0.3em] font-medium transition-colors duration-500 py-4 px-10 border border-white/10 ${r}`,
    children: [
      s.jsx(p.div, {
        className: "absolute inset-0 bg-[#D4AF37]/5 z-0",
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: a ? 1 : 0, scale: a ? 1 : 0.8 },
        transition: { duration: 0.4 },
      }),
      s.jsx("span", {
        className:
          "relative z-10 flex items-center justify-center pointer-events-none",
        children: e,
      }),
    ],
  });
}
function PortfolioHeader() {
  return s.jsxs("header", { className: "portfolio-header", children: [
    s.jsx("a", { href: "#hero-section", className: "portfolio-brand", "aria-label": "Deepshekhar Das, home", children: "dd." }),
    s.jsxs("nav", { "aria-label": "Main navigation", children: [
      s.jsx("a", { href: "#work-section", children: "Selected work" }),
      s.jsx("a", { href: "#open-source-section", children: "Open source" }),
      s.jsx("a", { href: "#contact-section", className: "portfolio-nav-contact", children: "Let’s talk ↗" })
    ]})
  ]});
}

function PortfolioServices() {
  const services = [
    { number: "01", title: "Build your first product", description: "Turn a focused idea into a working web application. Define the core user journey, then build the interface and backend around it.", tags: ["Web applications", "MVP development"] },
    { number: "02", title: "Put AI to work", description: "Add an assistant, connect APIs, or automate a repetitive workflow. Start with a specific task and a clear way to check the result.", tags: ["AI integrations", "Workflow automation"] },
    { number: "03", title: "Improve what exists", description: "Fix bugs, refine an interface, or improve an existing feature. Make focused changes with tests and a clear handover.", tags: ["Bug fixes", "Product improvements"] }
  ];
  return s.jsxs("section", { id: "skills-section", className: "portfolio-services", children: [
    s.jsx("p", { className: "portfolio-eyebrow", children: "01 / How I can help" }),
    s.jsxs("h2", { children: ["From an idea to ", s.jsx("em", {children: "something useful."})] }),
    s.jsx("div", { className: "portfolio-service-grid", children: services.map(service =>
      s.jsxs("article", { className: "glass-panel portfolio-service-card", children: [
        s.jsx("span", { className: "portfolio-service-number", children: service.number }),
        s.jsx("h3", { children: service.title }),
        s.jsx("p", { children: service.description }),
        s.jsx("div", { className: "portfolio-service-tags", children: service.tags.map(tag => s.jsx("span", { children: tag }, tag)) })
      ]}, service.number)) })
  ]});
}

function EmailDraft({ form, onBack }) {
  const recipient = "deepshekhardas1234@gmail.com";
  const subject = "Project enquiry" + (form.company.trim() ? " — " + form.company.trim() : "");
  const body = ["Hi Deepshekhar,", "", form.brief.trim(), "", "Name: " + form.name.trim(), "Company: " + (form.company.trim() || "Not specified"), "Reply email: " + form.email.trim()].join("\n");
  const emailUrl = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  return s.jsxs("div", { className: "portfolio-email-draft", children: [
    s.jsx("p", { children: "Review your message, then send it from your email app." }),
    s.jsx("label", { htmlFor: "email-draft-body", children: "Your message" }),
    s.jsx("textarea", { id: "email-draft-body", value: body, readOnly: true, rows: 8 }),
    s.jsx("a", { href: emailUrl, className: "portfolio-primary", children: "Open email app ↗" }),
    s.jsx("p", { className: "portfolio-email-help", children: "If your email app does not open, copy the message above and email " + recipient + "." }),
    s.jsx("button", { type: "button", onClick: onBack, className: "portfolio-secondary", children: "← Edit project details" })
  ]});
}

function nr() {
  return s.jsx(StudioPortfolio, { Calendar: gt });
}
const sr = Object.freeze(
  Object.defineProperty(
    { __proto__: null, UIOverlay: nr },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export { sr as U, E as g };
