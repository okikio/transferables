const y = Object.getPrototypeOf(Int8Array), T = globalThis.AudioData, m = globalThis.VideoFrame, p = globalThis.OffscreenCanvas, b = globalThis.RTCDataChannel;
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
  })(), i = (() => {
    try {
      const a = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      };
      structuredClone(a, {
        transfer: [
          a.readonly,
          a.writeonly,
          a.tranformonly
        ]
      });
    } catch (a) {
      return console.warn(a), !1;
    }
    return !0;
  })();
  return { channel: n, streams: i };
}
function c(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function d(n) {
  return n instanceof y || n instanceof DataView;
}
function u(n) {
  return "ReadableStream" in globalThis && n instanceof ReadableStream || "WritableStream" in globalThis && n instanceof WritableStream || "TransformStream" in globalThis && n instanceof TransformStream;
}
function h(n) {
  return "MessageChannel" in globalThis && n instanceof MessageChannel;
}
function g(n) {
  return "ArrayBuffer" in globalThis && n instanceof ArrayBuffer || "MessagePort" in globalThis && n instanceof MessagePort || "AudioData" in globalThis && n instanceof T || "ImageBitmap" in globalThis && n instanceof ImageBitmap || "VideoFrame" in globalThis && n instanceof m || "OffscreenCanvas" in globalThis && n instanceof p || "RTCDataChannel" in globalThis && n instanceof b;
}
function w(n) {
  return Array.from(new Set(n));
}
function S(n, i = !1, a = 1e4) {
  const t = /* @__PURE__ */ new Set([]);
  let l = [], r = [n];
  for (; r.length > 0 && a > 0; ) {
    for (let e of r)
      if (d(e))
        t.add(e.buffer);
      else if (g(e))
        t.add(e);
      else if (h(e))
        t.add(e.port1), t.add(e.port2);
      else if (i && u(e))
        t.add(e);
      else if (!u(e) && c(e)) {
        const s = Array.isArray(e) ? e : Object.values(e), o = s.length;
        for (let f = 0; f < o; f++)
          l.push(s[f]);
      }
    r = l, l = [], a--;
  }
  return Array.from(t);
}
function* C(n, i = !1, a = 1e4) {
  const t = /* @__PURE__ */ new Set([]);
  let l = [n], r = [];
  for (; l.length > 0 && a > 0; ) {
    for (let e of l)
      if (!t.has(e)) {
        if (d(e)) {
          t.add(e);
          const { buffer: s } = e;
          if (t.has(s))
            continue;
          yield s, t.add(s);
        } else if (g(e))
          yield e, t.add(e);
        else if (h(e)) {
          if (t.add(e), t.has(e.port1) || t.has(e.port2))
            continue;
          yield e.port1, yield e.port2, t.add(e.port1), t.add(e.port2);
        } else if (i && u(e))
          yield e, t.add(e);
        else if (!u(e) && c(e)) {
          const s = Array.isArray(e) ? e : Object.values(e), o = s.length;
          for (let f = 0; f < o; f++)
            r.push(s[f]);
        }
      }
    l = r, r = [], a--;
  }
  return t.clear(), l = null, r = null, null;
}
function O(n, i = !1, a = 1e4) {
  let t = [n], l = [];
  for (; t.length > 0 && a > 0; ) {
    for (let r of t) {
      if (d(r))
        return !0;
      if (g(r))
        return !0;
      if (h(r))
        return !0;
      if (i && u(r))
        return !0;
      if (c(r) && !u(r)) {
        const e = Array.isArray(r) ? r : Object.values(r), s = e.length;
        for (let o = 0; o < s; o++)
          l.push(e[o]);
      }
    }
    t = l, l = [], a--;
  }
  return t = null, l = null, !1;
}
export {
  T as AudioData,
  p as OffscreenCanvas,
  b as RTCDataChannel,
  y as TypedArray,
  m as VideoFrame,
  w as filterOutDuplicates,
  C as getTransferable,
  S as getTransferables,
  O as hasTransferables,
  h as isMessageChannel,
  c as isObject,
  u as isStream,
  A as isSupported,
  g as isTransferable,
  d as isTypedArray
};
