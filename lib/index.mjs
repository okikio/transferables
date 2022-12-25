const O = Object.getPrototypeOf(Int8Array), x = globalThis.AudioData, v = globalThis.VideoFrame, D = globalThis.OffscreenCanvas, R = globalThis.RTCDataChannel, u = "ReadableStream" in globalThis, d = "WritableStream" in globalThis, h = "TransformStream" in globalThis, g = "MessageChannel" in globalThis, b = "MessagePort" in globalThis, w = "ArrayBuffer" in globalThis, A = "AudioData" in globalThis, C = "ImageBitmap" in globalThis, S = "VideoFrame" in globalThis, E = "OffscreenCanvas" in globalThis, M = "RTCDataChannel" in globalThis, B = {
  ReadableStreamExists: u,
  WritableStreamExists: d,
  TransformStreamExists: h,
  MessageChannelExists: g,
  MessagePortExists: b,
  ArrayBufferExists: w,
  AudioDataExists: A,
  ImageBitmapExists: C,
  VideoFrameExists: S,
  OffscreenCanvasExists: E,
  RTCDataChannelExists: M
};
async function P() {
  const n = await (async () => {
    try {
      if (!g)
        return !1;
      const r = new MessageChannel(), s = { port1: r.port1 }, a = structuredClone(s, {
        transfer: [
          r.port1
        ]
      }), t = new MessageChannel(), e = { port1: a.port1 };
      await new Promise((o) => {
        t.port1.postMessage(e, [
          e.port1
        ]), t.port1.onmessage = () => {
          o();
        }, t.port2.onmessage = ({ data: l }) => {
          t.port2.postMessage(l, [
            l.port1
          ]);
        };
      }), t.port1.close();
    } catch (r) {
      return console.warn(r), !1;
    }
    return !0;
  })(), i = await (async () => {
    try {
      if (!u || !d || !h)
        return !1;
      const r = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      }, s = structuredClone(r, {
        transfer: [
          r.readonly,
          r.writeonly,
          r.tranformonly
        ]
      }), a = new MessageChannel(), t = s;
      await new Promise((e) => {
        a.port1.postMessage(t, [
          t.readonly,
          t.writeonly,
          t.tranformonly
        ]), a.port1.onmessage = () => {
          e();
        }, a.port2.onmessage = ({ data: o }) => {
          a.port2.postMessage(o, [
            o.readonly,
            o.writeonly,
            o.tranformonly
          ].filter((l) => l !== void 0));
        };
      }), a.port1.close();
    } catch (r) {
      return console.warn(r), !1;
    }
    return !0;
  })();
  return { channel: n, streams: i };
}
function m(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function p(n) {
  return n instanceof O || n instanceof DataView;
}
function c(n) {
  return u && n instanceof ReadableStream || d && n instanceof WritableStream || h && n instanceof TransformStream;
}
function y(n) {
  return g && n instanceof MessageChannel;
}
function T(n) {
  return w && n instanceof ArrayBuffer || b && n instanceof MessagePort || A && n instanceof x || C && n instanceof ImageBitmap || S && n instanceof v || E && n instanceof D || M && n instanceof R;
}
function V(n) {
  return Array.from(new Set(n));
}
function F(n, i = !1, r = 1e4) {
  const s = /* @__PURE__ */ new Set([]);
  let a = [], t = [n];
  for (; t.length > 0 && r > 0; ) {
    for (let e of t)
      if (T(e))
        s.add(e);
      else if (p(e))
        s.add(e.buffer);
      else if (y(e))
        s.add(e.port1), s.add(e.port2);
      else if (i && c(e))
        s.add(e);
      else if (!c(e) && m(e)) {
        const o = Array.isArray(e) ? e : Object.values(e), l = o.length;
        for (let f = 0; f < l; f++)
          a.push(o[f]);
      }
    t = a, a = [], r--;
  }
  return Array.from(s);
}
function* I(n, i = !1, r = 1e4) {
  const s = /* @__PURE__ */ new Set([]);
  let a = [n], t = [];
  for (; a.length > 0 && r > 0; ) {
    for (let e of a)
      if (!s.has(e)) {
        if (p(e)) {
          s.add(e);
          const { buffer: o } = e;
          if (s.has(o))
            continue;
          yield o, s.add(o);
        } else if (T(e))
          yield e, s.add(e);
        else if (y(e)) {
          if (s.add(e), s.has(e.port1) || s.has(e.port2))
            continue;
          yield e.port1, yield e.port2, s.add(e.port1), s.add(e.port2);
        } else if (i && c(e))
          yield e, s.add(e);
        else if (!c(e) && m(e)) {
          const o = Array.isArray(e) ? e : Object.values(e), l = o.length;
          for (let f = 0; f < l; f++)
            t.push(o[f]);
        }
      }
    a = t, t = [], r--;
  }
  return s.clear(), a = null, t = null, null;
}
function W(n, i = !1, r = 1e4) {
  let s = [n], a = [];
  for (; s.length > 0 && r > 0; ) {
    for (let t of s) {
      if (p(t))
        return !0;
      if (T(t))
        return !0;
      if (y(t))
        return !0;
      if (i && c(t))
        return !0;
      if (m(t) && !c(t)) {
        const e = Array.isArray(t) ? t : Object.values(t), o = e.length;
        for (let l = 0; l < o; l++)
          a.push(e[l]);
      }
    }
    s = a, a = [], r--;
  }
  return s = null, a = null, !1;
}
export {
  B as AVAILABLE_TRANSFERABLE_OBJECTS,
  x as AudioData,
  D as OffscreenCanvas,
  R as RTCDataChannel,
  O as TypedArray,
  v as VideoFrame,
  V as filterOutDuplicates,
  I as getTransferable,
  F as getTransferables,
  W as hasTransferables,
  y as isMessageChannel,
  m as isObject,
  c as isStream,
  P as isSupported,
  T as isTransferable,
  p as isTypedArray
};
