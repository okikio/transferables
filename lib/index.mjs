const y = Object.getPrototypeOf(Int8Array), b = globalThis.AudioData, m = globalThis.VideoFrame, p = globalThis.OffscreenCanvas, A = globalThis.RTCDataChannel;
function h(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function d(n) {
  return n instanceof y || n instanceof DataView;
}
function f(n) {
  return "ReadableStream" in globalThis && n instanceof ReadableStream || "WritableStream" in globalThis && n instanceof WritableStream || "TransformStream" in globalThis && n instanceof TransformStream;
}
function g(n) {
  return "MessageChannel" in globalThis && n instanceof MessageChannel;
}
function T(n) {
  return "ArrayBuffer" in globalThis && n instanceof ArrayBuffer || "MessagePort" in globalThis && n instanceof MessagePort || "AudioData" in globalThis && n instanceof b || "ImageBitmap" in globalThis && n instanceof ImageBitmap || "VideoFrame" in globalThis && n instanceof m || "OffscreenCanvas" in globalThis && n instanceof p || "RTCDataChannel" in globalThis && n instanceof A;
}
function O(n) {
  return Array.from(new Set(n));
}
function S(n, o = !1, s = 1e4) {
  const t = /* @__PURE__ */ new Set([]);
  let l = [], a = [n];
  for (; a.length > 0 && s > 0; ) {
    for (let e of a)
      if (d(e))
        t.add(e.buffer);
      else if (T(e))
        t.add(e);
      else if (g(e))
        t.add(e.port1), t.add(e.port2);
      else if (o && f(e))
        t.add(e);
      else if (h(e) && !f(e)) {
        const i = Array.isArray(e) ? e : Object.values(e), r = i.length;
        for (let u = 0; u < r; u++)
          l.push(i[u]);
      }
    a = l, l = [], s--;
  }
  return Array.from(t);
}
function* v(n, o = !1, s = 1e4) {
  const t = /* @__PURE__ */ new Set([]);
  let l = [n], a = [];
  for (; l.length > 0 && s > 0; ) {
    for (let e of l) {
      const i = !t.has(e);
      if (d(e)) {
        if (i) {
          const { buffer: r } = e;
          t.has(r) || (yield r, t.add(r)), t.add(e);
        }
      } else if (g(e))
        i && (yield e.port1, t.add(e.port1), yield e.port2, t.add(e.port2));
      else if (T(e) || o && f(e))
        i && (yield e, t.add(e));
      else if (!f(e) && h(e)) {
        const r = Array.isArray(e) ? e : Object.values(e), u = r.length;
        for (let c = 0; c < u; c++)
          a.push(r[c]);
      }
    }
    l = a, a = [], s--;
  }
  return t.clear(), l = null, a = null, null;
}
function C(n, o = !1, s = 1e4) {
  let t = [n], l = [];
  for (; t.length > 0 && s > 0; ) {
    for (let a of t) {
      if (d(a))
        return !0;
      if (T(a))
        return !0;
      if (g(a))
        return !0;
      if (o && f(a))
        return !0;
      if (h(a) && !f(a)) {
        const e = Array.isArray(a) ? a : Object.values(a), i = e.length;
        for (let r = 0; r < i; r++)
          l.push(e[r]);
      }
    }
    t = l, l = [], s--;
  }
  return t = null, l = null, !1;
}
export {
  b as AudioData,
  p as OffscreenCanvas,
  A as RTCDataChannel,
  y as TypedArray,
  m as VideoFrame,
  O as filterOutDuplicates,
  v as getTransferable,
  S as getTransferables,
  C as hasTransferables,
  g as isMessageChannel,
  h as isObject,
  f as isStream,
  T as isTransferable,
  d as isTypedArray
};
