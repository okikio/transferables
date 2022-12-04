const y = Object.getPrototypeOf(Int8Array), T = globalThis.AudioData, m = globalThis.VideoFrame, b = globalThis.OffscreenCanvas, p = globalThis.RTCDataChannel;
function A() {
  const n = (() => {
    try {
      const a = { channel: new MessageChannel() };
      structuredClone(a, {
        transfer: [
          a.channel.port1,
          a.channel.port2
        ]
      });
    } catch (a) {
      return console.warn(a), !1;
    }
    return !0;
  })();
  return { streams: (() => {
    try {
      const a = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      };
      structuredClone(a, { transfer: Object.values(a) });
    } catch (a) {
      return console.warn(a), !1;
    }
    return !0;
  })(), channel: n };
}
function c(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function h(n) {
  return n instanceof y || n instanceof DataView;
}
function u(n) {
  return "ReadableStream" in globalThis && n instanceof ReadableStream || "WritableStream" in globalThis && n instanceof WritableStream || "TransformStream" in globalThis && n instanceof TransformStream;
}
function d(n) {
  return "MessageChannel" in globalThis && n instanceof MessageChannel;
}
function g(n) {
  return "ArrayBuffer" in globalThis && n instanceof ArrayBuffer || "MessagePort" in globalThis && n instanceof MessagePort || "AudioData" in globalThis && n instanceof T || "ImageBitmap" in globalThis && n instanceof ImageBitmap || "VideoFrame" in globalThis && n instanceof m || "OffscreenCanvas" in globalThis && n instanceof b || "RTCDataChannel" in globalThis && n instanceof p;
}
function w(n) {
  return Array.from(new Set(n));
}
function S(n, f = !1, a = 1e4) {
  const t = /* @__PURE__ */ new Set([]);
  let s = [], r = [n];
  for (; r.length > 0 && a > 0; ) {
    for (let e of r)
      if (h(e))
        t.add(e.buffer);
      else if (g(e))
        t.add(e);
      else if (d(e))
        t.add(e.port1), t.add(e.port2);
      else if (f && u(e))
        t.add(e);
      else if (!u(e) && c(e)) {
        const l = Array.isArray(e) ? e : Object.values(e), i = l.length;
        for (let o = 0; o < i; o++)
          s.push(l[o]);
      }
    r = s, s = [], a--;
  }
  return Array.from(t);
}
function* C(n, f = !1, a = 1e4) {
  const t = /* @__PURE__ */ new Set([]);
  let s = [n], r = [];
  for (; s.length > 0 && a > 0; ) {
    for (let e of s)
      if (!t.has(e)) {
        if (h(e)) {
          t.add(e);
          const { buffer: l } = e;
          if (t.has(l))
            continue;
          yield l, t.add(l);
        } else if (g(e))
          yield e, t.add(e);
        else if (d(e)) {
          if (t.add(e), t.has(e.port1) || t.has(e.port2))
            continue;
          yield e.port1, yield e.port2, t.add(e.port1), t.add(e.port2);
        } else if (f && u(e))
          yield e, t.add(e);
        else if (!u(e) && c(e)) {
          const l = Array.isArray(e) ? e : Object.values(e), i = l.length;
          for (let o = 0; o < i; o++)
            r.push(l[o]);
        }
      }
    s = r, r = [], a--;
  }
  return t.clear(), s = null, r = null, null;
}
function O(n, f = !1, a = 1e4) {
  let t = [n], s = [];
  for (; t.length > 0 && a > 0; ) {
    for (let r of t) {
      if (h(r))
        return !0;
      if (g(r))
        return !0;
      if (d(r))
        return !0;
      if (f && u(r))
        return !0;
      if (c(r) && !u(r)) {
        const e = Array.isArray(r) ? r : Object.values(r), l = e.length;
        for (let i = 0; i < l; i++)
          s.push(e[i]);
      }
    }
    t = s, s = [], a--;
  }
  return t = null, s = null, !1;
}
export {
  T as AudioData,
  b as OffscreenCanvas,
  p as RTCDataChannel,
  y as TypedArray,
  m as VideoFrame,
  w as filterOutDuplicates,
  C as getTransferable,
  S as getTransferables,
  O as hasTransferables,
  d as isMessageChannel,
  c as isObject,
  u as isStream,
  A as isSupported,
  g as isTransferable,
  h as isTypedArray
};
