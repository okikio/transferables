const d = Object.getPrototypeOf(Int8Array), b = globalThis.AudioData, y = globalThis.VideoFrame, m = globalThis.OffscreenCanvas, A = globalThis.RTCDataChannel;
function h(t) {
  return typeof t == "object" && t !== null || typeof t == "function";
}
function g(t) {
  return t instanceof d || t instanceof DataView;
}
function f(t) {
  return "ReadableStream" in globalThis && t instanceof ReadableStream || "WritableStream" in globalThis && t instanceof WritableStream || "TransformStream" in globalThis && t instanceof TransformStream;
}
function T(t) {
  return "ArrayBuffer" in globalThis && t instanceof ArrayBuffer || "MessagePort" in globalThis && t instanceof MessagePort || "AudioData" in globalThis && t instanceof b || "ImageBitmap" in globalThis && t instanceof ImageBitmap || "VideoFrame" in globalThis && t instanceof y || "OffscreenCanvas" in globalThis && t instanceof m || "RTCDataChannel" in globalThis && t instanceof A;
}
function p(t) {
  return [...new Set(t)];
}
function O(t, o = !1, l = 1e4) {
  const n = /* @__PURE__ */ new Set([]);
  let s = [], a = [t];
  for (; a.length > 0 && l > 0; ) {
    for (let e of a)
      if (g(e))
        n.add(e.buffer);
      else if (T(e))
        n.add(e);
      else if (o && f(e))
        n.add(e);
      else if (h(e) && !f(e)) {
        const i = Array.isArray(e) ? e : Object.values(e), r = i.length;
        for (let u = 0; u < r; u++)
          s.push(i[u]);
      }
    a = s, s = [], l--;
  }
  return Array.from(n);
}
function* S(t, o = !1, l = 1e4) {
  const n = /* @__PURE__ */ new Set([]);
  let s = [t], a = [];
  for (; s.length > 0 && l > 0; ) {
    for (let e of s) {
      const i = !n.has(e);
      if (g(e)) {
        if (i) {
          const { buffer: r } = e;
          n.has(r) || (yield r, n.add(r)), n.add(e);
        }
      } else if (T(e) || o && f(e))
        i && (yield e, n.add(e));
      else if (!f(e) && h(e)) {
        const r = Array.isArray(e) ? e : Object.values(e), u = r.length;
        for (let c = 0; c < u; c++)
          a.push(r[c]);
      }
    }
    s = a, a = [], l--;
  }
  n.clear();
}
function v(t, o = !1, l = 1e4) {
  let n = [t], s = [];
  for (; n.length > 0 && l > 0; ) {
    for (let a of n) {
      if (g(a))
        return !0;
      if (T(a))
        return !0;
      if (o && f(a))
        return !0;
      if (h(a) && !f(a)) {
        const e = Array.isArray(a) ? a : Object.values(a), i = e.length;
        for (let r = 0; r < i; r++)
          s.push(e[r]);
      }
    }
    n = s, s = [], l--;
  }
  return !1;
}
export {
  b as AudioData,
  m as OffscreenCanvas,
  A as RTCDataChannel,
  d as TypedArray,
  y as VideoFrame,
  p as filterOutDuplicates,
  S as getTransferable,
  O as getTransferables,
  v as hasTransferables,
  h as isObject,
  f as isStream,
  T as isTransferable,
  g as isTypedArray
};
