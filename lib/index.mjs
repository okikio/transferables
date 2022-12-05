const y = Object.getPrototypeOf(Int8Array), m = globalThis.AudioData, p = globalThis.VideoFrame, T = globalThis.OffscreenCanvas, b = globalThis.RTCDataChannel;
function w() {
  const t = (() => {
    try {
      const r = new MessageChannel(), n = { channel: new MessageChannel() };
      structuredClone(n, {
        transfer: [
          n.channel.port1,
          n.channel.port2
        ]
      });
      const a = { channel: new MessageChannel() };
      r.port1.postMessage(a, {
        transfer: [
          a.channel.port1,
          a.channel.port2
        ]
      }), r.port1.close();
    } catch (r) {
      return console.warn(r), !1;
    }
    return !0;
  })(), o = (() => {
    try {
      const r = new MessageChannel(), n = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      };
      structuredClone(n, {
        transfer: [
          n.readonly,
          n.writeonly,
          n.tranformonly
        ]
      });
      const a = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      };
      r.port1.postMessage(a, {
        transfer: [
          a.readonly,
          a.writeonly,
          a.tranformonly
        ]
      }), r.port1.close();
    } catch (r) {
      return console.warn(r), !1;
    }
    return !0;
  })();
  return { channel: t, streams: o };
}
function u(t) {
  return typeof t == "object" && t !== null || typeof t == "function";
}
function h(t) {
  return t instanceof y || t instanceof DataView;
}
function c(t) {
  return "ReadableStream" in globalThis && t instanceof ReadableStream || "WritableStream" in globalThis && t instanceof WritableStream || "TransformStream" in globalThis && t instanceof TransformStream;
}
function d(t) {
  return "MessageChannel" in globalThis && t instanceof MessageChannel;
}
function g(t) {
  return "ArrayBuffer" in globalThis && t instanceof ArrayBuffer || "MessagePort" in globalThis && t instanceof MessagePort || "AudioData" in globalThis && t instanceof m || "ImageBitmap" in globalThis && t instanceof ImageBitmap || "VideoFrame" in globalThis && t instanceof p || "OffscreenCanvas" in globalThis && t instanceof T || "RTCDataChannel" in globalThis && t instanceof b;
}
function C(t) {
  return Array.from(new Set(t));
}
function S(t, o = !1, r = 1e4) {
  const n = /* @__PURE__ */ new Set([]);
  let a = [], s = [t];
  for (; s.length > 0 && r > 0; ) {
    for (let e of s)
      if (h(e))
        n.add(e.buffer);
      else if (g(e))
        n.add(e);
      else if (d(e))
        n.add(e.port1), n.add(e.port2);
      else if (o && c(e))
        n.add(e);
      else if (!c(e) && u(e)) {
        const l = Array.isArray(e) ? e : Object.values(e), i = l.length;
        for (let f = 0; f < i; f++)
          a.push(l[f]);
      }
    s = a, a = [], r--;
  }
  return Array.from(n);
}
function* A(t, o = !1, r = 1e4) {
  const n = /* @__PURE__ */ new Set([]);
  let a = [t], s = [];
  for (; a.length > 0 && r > 0; ) {
    for (let e of a)
      if (!n.has(e)) {
        if (h(e)) {
          n.add(e);
          const { buffer: l } = e;
          if (n.has(l))
            continue;
          yield l, n.add(l);
        } else if (g(e))
          yield e, n.add(e);
        else if (d(e)) {
          if (n.add(e), n.has(e.port1) || n.has(e.port2))
            continue;
          yield e.port1, yield e.port2, n.add(e.port1), n.add(e.port2);
        } else if (o && c(e))
          yield e, n.add(e);
        else if (!c(e) && u(e)) {
          const l = Array.isArray(e) ? e : Object.values(e), i = l.length;
          for (let f = 0; f < i; f++)
            s.push(l[f]);
        }
      }
    a = s, s = [], r--;
  }
  return n.clear(), a = null, s = null, null;
}
function M(t, o = !1, r = 1e4) {
  let n = [t], a = [];
  for (; n.length > 0 && r > 0; ) {
    for (let s of n) {
      if (h(s))
        return !0;
      if (g(s))
        return !0;
      if (d(s))
        return !0;
      if (o && c(s))
        return !0;
      if (u(s) && !c(s)) {
        const e = Array.isArray(s) ? s : Object.values(s), l = e.length;
        for (let i = 0; i < l; i++)
          a.push(e[i]);
      }
    }
    n = a, a = [], r--;
  }
  return n = null, a = null, !1;
}
export {
  m as AudioData,
  T as OffscreenCanvas,
  b as RTCDataChannel,
  y as TypedArray,
  p as VideoFrame,
  C as filterOutDuplicates,
  A as getTransferable,
  S as getTransferables,
  M as hasTransferables,
  d as isMessageChannel,
  u as isObject,
  c as isStream,
  w as isSupported,
  g as isTransferable,
  h as isTypedArray
};
