const x = Object.getPrototypeOf(Int8Array), v = globalThis.AudioData, D = globalThis.VideoFrame, R = globalThis.OffscreenCanvas, B = globalThis.RTCDataChannel, d = "ReadableStream" in globalThis, g = "WritableStream" in globalThis, h = "TransformStream" in globalThis, m = "MessageChannel" in globalThis, C = "MessagePort" in globalThis, w = "ArrayBuffer" in globalThis, A = "AudioData" in globalThis, S = "ImageBitmap" in globalThis, E = "VideoFrame" in globalThis, M = "OffscreenCanvas" in globalThis, O = "RTCDataChannel" in globalThis, P = {
  ReadableStreamExists: d,
  WritableStreamExists: g,
  TransformStreamExists: h,
  MessageChannelExists: m,
  MessagePortExists: C,
  ArrayBufferExists: w,
  AudioDataExists: A,
  ImageBitmapExists: S,
  VideoFrameExists: E,
  OffscreenCanvasExists: M,
  RTCDataChannelExists: O
};
async function V() {
  async function n() {
    try {
      if (!m)
        return !1;
      const s = new MessageChannel(), r = { port1: s.port1 }, e = structuredClone(r, {
        transfer: [
          s.port1
        ]
      }), a = new MessageChannel(), o = { port1: e.port1 };
      await new Promise((l) => {
        a.port1.postMessage(o, [
          o.port1
        ]), a.port1.onmessage = () => {
          l();
        }, a.port2.onmessage = ({ data: u }) => {
          a.port2.postMessage(u, [
            u.port1
          ]);
        };
      }), a.port1.close();
    } catch (s) {
      return console.warn(s), !1;
    }
    return !0;
  }
  async function f() {
    try {
      if (!d || !g || !h)
        return !1;
      const s = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      }, r = structuredClone(s, {
        transfer: [
          s.readonly,
          s.writeonly,
          s.tranformonly
        ]
      }), e = new MessageChannel(), a = r;
      await new Promise((o) => {
        e.port1.postMessage(a, [
          a.readonly,
          a.writeonly,
          a.tranformonly
        ]), e.port1.onmessage = () => {
          o();
        }, e.port2.onmessage = ({ data: l }) => {
          e.port2.postMessage(l, [
            l.readonly,
            l.writeonly,
            l.tranformonly
          ].filter((u) => u !== void 0));
        };
      }), e.port1.close();
    } catch (s) {
      return console.warn(s), !1;
    }
    return !0;
  }
  const [i, t] = await Promise.all([n(), f()]);
  return { channel: i, streams: t };
}
function p(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function y(n) {
  return n instanceof x || n instanceof DataView;
}
function c(n) {
  return d && n instanceof ReadableStream || g && n instanceof WritableStream || h && n instanceof TransformStream;
}
function T(n) {
  return m && n instanceof MessageChannel;
}
function b(n) {
  return w && n instanceof ArrayBuffer || C && n instanceof MessagePort || A && n instanceof v || S && n instanceof ImageBitmap || E && n instanceof D || M && n instanceof R || O && n instanceof B;
}
function F(n) {
  return Array.from(new Set(n));
}
function I(n, f = !1, i = 1e4) {
  const t = /* @__PURE__ */ new Set([]), s = [[n]];
  for (const r of s) {
    for (let e of r)
      if (b(e))
        t.add(e);
      else if (y(e))
        t.add(e.buffer);
      else if (T(e))
        t.add(e.port1), t.add(e.port2);
      else if (f && c(e))
        t.add(e);
      else if (!c(e) && p(e)) {
        const a = Array.isArray(e) ? e : Object.values(e);
        a.length && s.push(a);
      }
    if (--i === 0)
      break;
  }
  return Array.from(t);
}
function* q(n, f = !1, i = 1e4) {
  const t = /* @__PURE__ */ new Set([]);
  let s = [n], r = [];
  for (; s.length > 0 && i > 0; ) {
    for (let e of s)
      if (!t.has(e)) {
        if (y(e)) {
          t.add(e);
          const { buffer: a } = e;
          if (t.has(a))
            continue;
          yield a, t.add(a);
        } else if (b(e))
          yield e, t.add(e);
        else if (T(e)) {
          if (t.add(e), t.has(e.port1) || t.has(e.port2))
            continue;
          yield e.port1, yield e.port2, t.add(e.port1), t.add(e.port2);
        } else if (f && c(e))
          yield e, t.add(e);
        else if (!c(e) && p(e)) {
          const a = Array.isArray(e) ? e : Object.values(e), o = a.length;
          for (let l = 0; l < o; l++)
            r.push(a[l]);
        }
      }
    s = r, r = [], i--;
  }
  return t.clear(), s = null, r = null, null;
}
function W(n, f = !1, i = 1e4) {
  let t = [n], s = [];
  for (; t.length > 0 && i > 0; ) {
    for (let r of t) {
      if (y(r))
        return !0;
      if (b(r))
        return !0;
      if (T(r))
        return !0;
      if (f && c(r))
        return !0;
      if (!c(r) && p(r)) {
        const e = Array.isArray(r) ? r : Object.values(r), a = e.length;
        for (let o = 0; o < a; o++)
          s.push(e[o]);
      }
    }
    t = s, s = [], i--;
  }
  return t = null, s = null, !1;
}
export {
  P as AVAILABLE_TRANSFERABLE_OBJECTS,
  v as AudioData,
  R as OffscreenCanvas,
  B as RTCDataChannel,
  x as TypedArray,
  D as VideoFrame,
  F as filterOutDuplicates,
  q as getTransferable,
  I as getTransferables,
  W as hasTransferables,
  T as isMessageChannel,
  p as isObject,
  c as isStream,
  V as isSupported,
  b as isTransferable,
  y as isTypedArray
};
