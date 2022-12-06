const d = Object.getPrototypeOf(Int8Array), y = globalThis.AudioData, m = globalThis.VideoFrame, w = globalThis.OffscreenCanvas, T = globalThis.RTCDataChannel;
async function b() {
  const t = await (async () => {
    try {
      const a = new MessageChannel(), n = { channel: new MessageChannel() };
      structuredClone(n, {
        transfer: [
          n.channel.port1,
          n.channel.port2
        ]
      });
      const r = { channel: new MessageChannel() };
      await new Promise((s) => {
        a.port1.start(), a.port2.start(), a.port1.postMessage(r, [
          r.channel.port1,
          r.channel.port2
        ]), a.port1.onmessage = () => {
          a.port1.close(), s();
        }, a.port2.onmessage = ({ data: e }) => {
          a.port2.postMessage(e, [
            e.channel.port1,
            e.channel.port2
          ]);
        };
      });
    } catch (a) {
      return console.warn(a), !1;
    }
    return !0;
  })(), o = await (async () => {
    try {
      const a = new MessageChannel(), n = {
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
      const r = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      };
      await new Promise((s) => {
        a.port1.start(), a.port2.start(), a.port1.postMessage(r, [
          r.readonly,
          r.writeonly,
          r.tranformonly
        ]), a.port1.onmessage = () => {
          a.port1.close(), s();
        }, a.port2.onmessage = ({ data: e }) => {
          a.port2.postMessage(e, [
            e.readonly,
            e.writeonly,
            e.tranformonly
          ]);
        };
      });
    } catch (a) {
      return console.warn(a), !1;
    }
    return !0;
  })();
  return { channel: t, streams: o };
}
function u(t) {
  return typeof t == "object" && t !== null || typeof t == "function";
}
function h(t) {
  return t instanceof d || t instanceof DataView;
}
function c(t) {
  return "ReadableStream" in globalThis && t instanceof ReadableStream || "WritableStream" in globalThis && t instanceof WritableStream || "TransformStream" in globalThis && t instanceof TransformStream;
}
function p(t) {
  return "MessageChannel" in globalThis && t instanceof MessageChannel;
}
function g(t) {
  return "ArrayBuffer" in globalThis && t instanceof ArrayBuffer || "MessagePort" in globalThis && t instanceof MessagePort || "AudioData" in globalThis && t instanceof y || "ImageBitmap" in globalThis && t instanceof ImageBitmap || "VideoFrame" in globalThis && t instanceof m || "OffscreenCanvas" in globalThis && t instanceof w || "RTCDataChannel" in globalThis && t instanceof T;
}
function C(t) {
  return Array.from(new Set(t));
}
function S(t, o = !1, a = 1e4) {
  const n = /* @__PURE__ */ new Set([]);
  let r = [], s = [t];
  for (; s.length > 0 && a > 0; ) {
    for (let e of s)
      if (h(e))
        n.add(e.buffer);
      else if (g(e))
        n.add(e);
      else if (p(e))
        n.add(e.port1), n.add(e.port2);
      else if (o && c(e))
        n.add(e);
      else if (!c(e) && u(e)) {
        const l = Array.isArray(e) ? e : Object.values(e), i = l.length;
        for (let f = 0; f < i; f++)
          r.push(l[f]);
      }
    s = r, r = [], a--;
  }
  return Array.from(n);
}
function* A(t, o = !1, a = 1e4) {
  const n = /* @__PURE__ */ new Set([]);
  let r = [t], s = [];
  for (; r.length > 0 && a > 0; ) {
    for (let e of r)
      if (!n.has(e)) {
        if (h(e)) {
          n.add(e);
          const { buffer: l } = e;
          if (n.has(l))
            continue;
          yield l, n.add(l);
        } else if (g(e))
          yield e, n.add(e);
        else if (p(e)) {
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
    r = s, s = [], a--;
  }
  return n.clear(), r = null, s = null, null;
}
function M(t, o = !1, a = 1e4) {
  let n = [t], r = [];
  for (; n.length > 0 && a > 0; ) {
    for (let s of n) {
      if (h(s))
        return !0;
      if (g(s))
        return !0;
      if (p(s))
        return !0;
      if (o && c(s))
        return !0;
      if (u(s) && !c(s)) {
        const e = Array.isArray(s) ? s : Object.values(s), l = e.length;
        for (let i = 0; i < l; i++)
          r.push(e[i]);
      }
    }
    n = r, r = [], a--;
  }
  return n = null, r = null, !1;
}
export {
  y as AudioData,
  w as OffscreenCanvas,
  T as RTCDataChannel,
  d as TypedArray,
  m as VideoFrame,
  C as filterOutDuplicates,
  A as getTransferable,
  S as getTransferables,
  M as hasTransferables,
  p as isMessageChannel,
  u as isObject,
  c as isStream,
  b as isSupported,
  g as isTransferable,
  h as isTypedArray
};
