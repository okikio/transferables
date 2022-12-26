const v = Object.getPrototypeOf(Int8Array), D = globalThis.AudioData, R = globalThis.VideoFrame, B = globalThis.OffscreenCanvas, P = globalThis.RTCDataChannel, h = "ReadableStream" in globalThis, m = "WritableStream" in globalThis, p = "TransformStream" in globalThis, g = "MessageChannel" in globalThis, A = "MessagePort" in globalThis, w = "ArrayBuffer" in globalThis, S = "AudioData" in globalThis, E = "ImageBitmap" in globalThis, M = "VideoFrame" in globalThis, O = "OffscreenCanvas" in globalThis, x = "RTCDataChannel" in globalThis, d = "structuredClone" in globalThis, q = {
  ReadableStreamExists: h,
  WritableStreamExists: m,
  TransformStreamExists: p,
  MessageChannelExists: g,
  MessagePortExists: A,
  ArrayBufferExists: w,
  AudioDataExists: S,
  ImageBitmapExists: E,
  VideoFrameExists: M,
  OffscreenCanvasExists: O,
  RTCDataChannelExists: x
};
async function V() {
  async function n() {
    try {
      if (!g)
        return !1;
      const s = new MessageChannel(), o = { port1: s.port1 }, i = d ? structuredClone(o, {
        transfer: [
          s.port1
        ]
      }) : o, r = new MessageChannel(), a = { port1: i.port1 };
      await new Promise((e) => {
        r.port1.postMessage(a, [
          a.port1
        ]), r.port1.onmessage = () => {
          e();
        }, r.port2.onmessage = ({ data: l }) => {
          r.port2.postMessage(l, [
            l.port1
          ]);
        };
      }), r.port1.close();
    } catch (s) {
      return console.warn(s), !1;
    }
    return !0;
  }
  async function f() {
    try {
      if (!h || !m || !p || !g && !d)
        return !1;
      const s = {
        readonly: new ReadableStream(),
        writeonly: new WritableStream(),
        tranformonly: new TransformStream()
      }, o = d ? structuredClone(s, {
        transfer: [
          s.readonly,
          s.writeonly,
          s.tranformonly
        ]
      }) : s;
      if (g) {
        const i = new MessageChannel(), r = o;
        await new Promise((a) => {
          i.port1.postMessage(r, [
            r.readonly,
            r.writeonly,
            r.tranformonly
          ]), i.port1.onmessage = () => {
            a();
          }, i.port2.onmessage = ({ data: e }) => {
            i.port2.postMessage(e, [
              e.readonly,
              e.writeonly,
              e.tranformonly
            ].filter((l) => l !== void 0));
          };
        }), i.port1.close();
      }
    } catch (s) {
      return console.warn(s), !1;
    }
    return !0;
  }
  const [c, t] = await Promise.all([n(), f()]);
  return { channel: c, streams: t };
}
function y(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function b(n) {
  return n instanceof v || n instanceof DataView;
}
function u(n) {
  return h && n instanceof ReadableStream || m && n instanceof WritableStream || p && n instanceof TransformStream;
}
function T(n) {
  return g && n instanceof MessageChannel;
}
function C(n) {
  return w && n instanceof ArrayBuffer || A && n instanceof MessagePort || S && n instanceof D || E && n instanceof ImageBitmap || M && n instanceof R || O && n instanceof B || x && n instanceof P;
}
function F(n) {
  return Array.from(new Set(n));
}
function I(n, f = !1, c = 1e4) {
  const t = /* @__PURE__ */ new Set([]), s = [[n]];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = i.length;
    for (let a = 0; a < r; a++) {
      const e = i[a];
      if (b(e))
        t.add(e.buffer);
      else if (C(e))
        t.add(e);
      else if (T(e))
        t.add(e.port1), t.add(e.port2);
      else if (f && u(e))
        t.add(e);
      else if (!u(e) && y(e)) {
        const l = Array.isArray(e) ? e : Object.values(e);
        l.length && s.push(l);
      }
    }
    if (--c <= 0)
      break;
  }
  return Array.from(t);
}
function* W(n, f = !1, c = 1e4) {
  const t = /* @__PURE__ */ new Set([]), s = [[n]];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = i.length;
    for (let a = 0; a < r; a++) {
      const e = i[a];
      if (!t.has(e)) {
        if (b(e)) {
          t.add(e);
          const { buffer: l } = e;
          if (t.has(l))
            continue;
          yield l, t.add(l);
        } else if (C(e))
          yield e, t.add(e);
        else if (T(e)) {
          if (t.add(e), t.has(e.port1) || t.has(e.port2))
            continue;
          yield e.port1, yield e.port2, t.add(e.port1), t.add(e.port2);
        } else if (f && u(e))
          yield e, t.add(e);
        else if (!u(e) && y(e)) {
          const l = Array.isArray(e) ? e : Object.values(e);
          l.length && s.push(l);
        }
      }
    }
    if (--c <= 0)
      break;
  }
  return null;
}
function k(n, f = !1, c = 1e4) {
  const t = [[n]];
  for (let s = 0; s < t.length; s++) {
    const o = t[s], i = o.length;
    for (let r = 0; r < i; r++) {
      const a = o[r];
      if (b(a))
        return !0;
      if (C(a))
        return !0;
      if (T(a))
        return !0;
      if (f && u(a))
        return !0;
      if (!u(a) && y(a)) {
        const e = Array.isArray(a) ? a : Object.values(a);
        e.length && t.push(e);
      }
    }
    if (--c <= 0)
      break;
  }
  return !1;
}
export {
  q as AVAILABLE_TRANSFERABLE_OBJECTS,
  D as AudioData,
  B as OffscreenCanvas,
  P as RTCDataChannel,
  v as TypedArray,
  R as VideoFrame,
  F as filterOutDuplicates,
  W as getTransferable,
  I as getTransferables,
  k as hasTransferables,
  T as isMessageChannel,
  y as isObject,
  u as isStream,
  V as isSupported,
  C as isTransferable,
  b as isTypedArray
};
