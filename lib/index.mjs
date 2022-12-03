const T = Object.getPrototypeOf(Int8Array), y = globalThis.AudioData, b = globalThis.VideoFrame, p = globalThis.OffscreenCanvas, m = globalThis.RTCDataChannel;
function c(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function d(n) {
  return n instanceof T || n instanceof DataView;
}
function o(n) {
  return "ReadableStream" in globalThis && n instanceof ReadableStream || "WritableStream" in globalThis && n instanceof WritableStream || "TransformStream" in globalThis && n instanceof TransformStream;
}
function h(n) {
  return "MessageChannel" in globalThis && n instanceof MessageChannel;
}
function g(n) {
  return "ArrayBuffer" in globalThis && n instanceof ArrayBuffer || "MessagePort" in globalThis && n instanceof MessagePort || "AudioData" in globalThis && n instanceof y || "ImageBitmap" in globalThis && n instanceof ImageBitmap || "VideoFrame" in globalThis && n instanceof b || "OffscreenCanvas" in globalThis && n instanceof p || "RTCDataChannel" in globalThis && n instanceof m;
}
function A(n) {
  return Array.from(new Set(n));
}
function O(n, u = !1, s = 1e4) {
  const a = /* @__PURE__ */ new Set([]);
  let l = [], t = [n];
  for (; t.length > 0 && s > 0; ) {
    for (let e of t)
      if (d(e))
        a.add(e.buffer);
      else if (g(e))
        a.add(e);
      else if (h(e))
        a.add(e.port1), a.add(e.port2);
      else if (u && o(e))
        a.add(e);
      else if (c(e) && !o(e)) {
        const r = Array.isArray(e) ? e : Object.values(e), i = r.length;
        for (let f = 0; f < i; f++)
          l.push(r[f]);
      }
    t = l, l = [], s--;
  }
  return Array.from(a);
}
function* S(n, u = !1, s = 1e4) {
  const a = /* @__PURE__ */ new Set([]);
  let l = [n], t = [];
  for (; l.length > 0 && s > 0; ) {
    for (let e of l)
      if (!a.has(e)) {
        if (d(e)) {
          const { buffer: r } = e;
          if (a.has(r))
            continue;
          yield r, a.add(r), a.add(e);
        } else if (g(e))
          yield e, a.add(e);
        else if (h(e)) {
          if (a.has(e.port1))
            continue;
          yield e.port1, yield e.port2, a.add(e.port1), a.add(e.port2), a.add(e);
        } else if (u && o(e))
          yield e, a.add(e);
        else if (!o(e) && c(e)) {
          const r = Array.isArray(e) ? e : Object.values(e), i = r.length;
          for (let f = 0; f < i; f++)
            t.push(r[f]);
        }
      }
    l = t, t = [], s--;
  }
  return a.clear(), l = null, t = null, null;
}
function v(n, u = !1, s = 1e4) {
  let a = [n], l = [];
  for (; a.length > 0 && s > 0; ) {
    for (let t of a) {
      if (d(t))
        return !0;
      if (g(t))
        return !0;
      if (h(t))
        return !0;
      if (u && o(t))
        return !0;
      if (c(t) && !o(t)) {
        const e = Array.isArray(t) ? t : Object.values(t), r = e.length;
        for (let i = 0; i < r; i++)
          l.push(e[i]);
      }
    }
    a = l, l = [], s--;
  }
  return a = null, l = null, !1;
}
export {
  y as AudioData,
  p as OffscreenCanvas,
  m as RTCDataChannel,
  T as TypedArray,
  b as VideoFrame,
  A as filterOutDuplicates,
  S as getTransferable,
  O as getTransferables,
  v as hasTransferables,
  h as isMessageChannel,
  c as isObject,
  o as isStream,
  g as isTransferable,
  d as isTypedArray
};
