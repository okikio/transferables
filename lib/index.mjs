const y = Object.getPrototypeOf(Int8Array), m = globalThis.AudioData, p = globalThis.VideoFrame, w = globalThis.OffscreenCanvas, T = globalThis.RTCDataChannel;
async function b() {
  const t = await (async () => {
    try {
      const s = { channel: new MessageChannel() };
      structuredClone(s, {
        transfer: [
          s.channel.port1,
          s.channel.port2
        ]
      });
      const n = new MessageChannel(), a = { channel: new MessageChannel() };
      await new Promise((r) => {
        n.port1.postMessage(a, [
          a.channel.port1,
          a.channel.port2
        ]), n.port1.onmessage = () => {
          n.port1.close(), r();
        }, n.port2.onmessage = ({ data: e }) => {
          n.port2.postMessage(e, [
            e.channel.port1,
            e.channel.port2
          ].filter((l) => l != null));
        };
      });
    } catch (s) {
      return console.warn(s), !1;
    }
    return !0;
  })(), o = await (async () => {
    try {
      const s = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      };
      structuredClone(s, {
        transfer: [
          s.readonly,
          s.writeonly,
          s.tranformonly
        ]
      });
      const n = new MessageChannel(), a = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      };
      await new Promise((r) => {
        n.port1.postMessage(a, [
          a.readonly,
          a.writeonly,
          a.tranformonly
        ]), n.port1.onmessage = () => {
          n.port1.close(), r();
        }, n.port2.onmessage = ({ data: e }) => {
          n.port2.postMessage(e, [
            e.readonly,
            e.writeonly,
            e.tranformonly
          ].filter((l) => l != null));
        };
      });
    } catch (s) {
      return console.warn(s), !1;
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
  return "ArrayBuffer" in globalThis && t instanceof ArrayBuffer || "MessagePort" in globalThis && t instanceof MessagePort || "AudioData" in globalThis && t instanceof m || "ImageBitmap" in globalThis && t instanceof ImageBitmap || "VideoFrame" in globalThis && t instanceof p || "OffscreenCanvas" in globalThis && t instanceof w || "RTCDataChannel" in globalThis && t instanceof T;
}
function C(t) {
  return Array.from(new Set(t));
}
function S(t, o = !1, s = 1e4) {
  const n = /* @__PURE__ */ new Set([]);
  let a = [], r = [t];
  for (; r.length > 0 && s > 0; ) {
    for (let e of r)
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
    r = a, a = [], s--;
  }
  return Array.from(n);
}
function* A(t, o = !1, s = 1e4) {
  const n = /* @__PURE__ */ new Set([]);
  let a = [t], r = [];
  for (; a.length > 0 && s > 0; ) {
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
            r.push(l[f]);
        }
      }
    a = r, r = [], s--;
  }
  return n.clear(), a = null, r = null, null;
}
function M(t, o = !1, s = 1e4) {
  let n = [t], a = [];
  for (; n.length > 0 && s > 0; ) {
    for (let r of n) {
      if (h(r))
        return !0;
      if (g(r))
        return !0;
      if (d(r))
        return !0;
      if (o && c(r))
        return !0;
      if (u(r) && !c(r)) {
        const e = Array.isArray(r) ? r : Object.values(r), l = e.length;
        for (let i = 0; i < l; i++)
          a.push(e[i]);
      }
    }
    n = a, a = [], s--;
  }
  return n = null, a = null, !1;
}
export {
  m as AudioData,
  w as OffscreenCanvas,
  T as RTCDataChannel,
  y as TypedArray,
  p as VideoFrame,
  C as filterOutDuplicates,
  A as getTransferable,
  S as getTransferables,
  M as hasTransferables,
  d as isMessageChannel,
  u as isObject,
  c as isStream,
  b as isSupported,
  g as isTransferable,
  h as isTypedArray
};
