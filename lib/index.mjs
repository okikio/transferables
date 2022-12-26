const v = Object.getPrototypeOf(Int8Array), D = globalThis.AudioData, R = globalThis.VideoFrame, B = globalThis.OffscreenCanvas, P = globalThis.RTCDataChannel, h = "ReadableStream" in globalThis, m = "WritableStream" in globalThis, p = "TransformStream" in globalThis, u = "MessageChannel" in globalThis, w = "MessagePort" in globalThis, A = "ArrayBuffer" in globalThis, S = "AudioData" in globalThis, E = "ImageBitmap" in globalThis, M = "VideoFrame" in globalThis, O = "OffscreenCanvas" in globalThis, x = "RTCDataChannel" in globalThis, g = "structuredClone" in globalThis, V = {
  ReadableStreamExists: h,
  WritableStreamExists: m,
  TransformStreamExists: p,
  MessageChannelExists: u,
  MessagePortExists: w,
  ArrayBufferExists: A,
  AudioDataExists: S,
  ImageBitmapExists: E,
  VideoFrameExists: M,
  OffscreenCanvasExists: O,
  RTCDataChannelExists: x
};
async function F() {
  async function n() {
    try {
      if (!u)
        return !1;
      const s = new MessageChannel(), r = { port1: s.port1 }, e = g ? structuredClone(r, {
        transfer: [
          s.port1
        ]
      }) : r, a = new MessageChannel(), o = { port1: e.port1 };
      await new Promise((l) => {
        a.port1.postMessage(o, [
          o.port1
        ]), a.port1.onmessage = () => {
          l();
        }, a.port2.onmessage = ({ data: d }) => {
          a.port2.postMessage(d, [
            d.port1
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
      if (!h || !m || !p || !u && !g)
        return !1;
      const s = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      }, r = g ? structuredClone(s, {
        transfer: [
          s.readonly,
          s.writeonly,
          s.tranformonly
        ]
      }) : s;
      if (u) {
        const e = new MessageChannel(), a = r;
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
            ].filter((d) => d !== void 0));
          };
        }), e.port1.close();
      }
    } catch (s) {
      return console.warn(s), !1;
    }
    return !0;
  }
  const [i, t] = await Promise.all([n(), f()]);
  return { channel: i, streams: t };
}
function y(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function T(n) {
  return n instanceof v || n instanceof DataView;
}
function c(n) {
  return h && n instanceof ReadableStream || m && n instanceof WritableStream || p && n instanceof TransformStream;
}
function b(n) {
  return u && n instanceof MessageChannel;
}
function C(n) {
  return A && n instanceof ArrayBuffer || w && n instanceof MessagePort || S && n instanceof D || E && n instanceof ImageBitmap || M && n instanceof R || O && n instanceof B || x && n instanceof P;
}
function I(n) {
  return Array.from(new Set(n));
}
function q(n, f = !1, i = 1e4) {
  const t = /* @__PURE__ */ new Set([]), s = [[n]];
  for (const r of s) {
    for (let e of r)
      if (C(e))
        t.add(e);
      else if (T(e))
        t.add(e.buffer);
      else if (b(e))
        t.add(e.port1), t.add(e.port2);
      else if (f && c(e))
        t.add(e);
      else if (!c(e) && y(e)) {
        const a = Array.isArray(e) ? e : Object.values(e);
        a.length && s.push(a);
      }
    if (--i === 0)
      break;
  }
  return Array.from(t);
}
function* W(n, f = !1, i = 1e4) {
  const t = /* @__PURE__ */ new Set([]);
  let s = [n], r = [];
  for (; s.length > 0 && i > 0; ) {
    for (let e of s)
      if (!t.has(e)) {
        if (T(e)) {
          t.add(e);
          const { buffer: a } = e;
          if (t.has(a))
            continue;
          yield a, t.add(a);
        } else if (C(e))
          yield e, t.add(e);
        else if (b(e)) {
          if (t.add(e), t.has(e.port1) || t.has(e.port2))
            continue;
          yield e.port1, yield e.port2, t.add(e.port1), t.add(e.port2);
        } else if (f && c(e))
          yield e, t.add(e);
        else if (!c(e) && y(e)) {
          const a = Array.isArray(e) ? e : Object.values(e), o = a.length;
          for (let l = 0; l < o; l++)
            r.push(a[l]);
        }
      }
    s = r, r = [], i--;
  }
  return t.clear(), s = null, r = null, null;
}
function L(n, f = !1, i = 1e4) {
  let t = [n], s = [];
  for (; t.length > 0 && i > 0; ) {
    for (let r of t) {
      if (T(r))
        return !0;
      if (C(r))
        return !0;
      if (b(r))
        return !0;
      if (f && c(r))
        return !0;
      if (!c(r) && y(r)) {
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
  V as AVAILABLE_TRANSFERABLE_OBJECTS,
  D as AudioData,
  B as OffscreenCanvas,
  P as RTCDataChannel,
  v as TypedArray,
  R as VideoFrame,
  I as filterOutDuplicates,
  W as getTransferable,
  q as getTransferables,
  L as hasTransferables,
  b as isMessageChannel,
  y as isObject,
  c as isStream,
  F as isSupported,
  C as isTransferable,
  T as isTypedArray
};
