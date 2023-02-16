const k = Object.getPrototypeOf(Int8Array), q = globalThis.AudioData, I = globalThis.ImageBitmap, V = globalThis.VideoFrame, F = globalThis.OffscreenCanvas, W = globalThis.RTCDataChannel, h = globalThis.MessageChannel, B = globalThis.ReadableStream, R = globalThis.WritableStream, D = globalThis.TransformStream, p = "ReadableStream" in globalThis, d = "WritableStream" in globalThis, y = "TransformStream" in globalThis, P = p && d && y, g = "MessageChannel" in globalThis, b = "MessagePort" in globalThis, T = "ArrayBuffer" in globalThis, C = "AudioData" in globalThis, A = "ImageBitmap" in globalThis, w = "VideoFrame" in globalThis, S = "OffscreenCanvas" in globalThis, E = "RTCDataChannel" in globalThis, j = T && b && C && A && w && S && E, m = "structuredClone" in globalThis, L = {
  TransferableExists: j,
  StreamExists: P,
  ReadableStreamExists: p,
  WritableStreamExists: d,
  TransformStreamExists: y,
  MessageChannelExists: g,
  MessagePortExists: b,
  ArrayBufferExists: T,
  AudioDataExists: C,
  ImageBitmapExists: A,
  VideoFrameExists: w,
  OffscreenCanvasExists: S,
  RTCDataChannelExists: E
};
async function _() {
  async function t() {
    try {
      if (!g)
        return !1;
      const n = new h(), o = { port1: n.port1 }, i = m ? structuredClone(o, {
        transfer: [
          n.port1
        ]
      }) : o, a = new h(), s = { port1: i.port1 };
      await new Promise((e) => {
        a.port1.postMessage(s, [
          s.port1
        ]), a.port1.onmessage = () => {
          e();
        }, a.port2.onmessage = ({ data: l }) => {
          a.port2.postMessage(l, [
            l.port1
          ]);
        };
      }), a.port1.close();
    } catch (n) {
      return console.warn(n), !1;
    }
    return !0;
  }
  async function c() {
    try {
      if (!P || !g && !m)
        return !1;
      const n = {
        readonly: new B(),
        writeonly: new R(),
        tranformonly: new D()
      }, o = m ? structuredClone(n, {
        transfer: [
          n.readonly,
          n.writeonly,
          n.tranformonly
        ]
      }) : n;
      if (g) {
        const i = new h(), a = o;
        await new Promise((s) => {
          i.port1.postMessage(a, [
            a.readonly,
            a.writeonly,
            a.tranformonly
          ]), i.port1.onmessage = () => {
            s();
          }, i.port2.onmessage = ({ data: e }) => {
            i.port2.postMessage(e, [
              e.readonly,
              e.writeonly,
              e.tranformonly
            ].filter((l) => l !== void 0));
          };
        }), i.port1.close();
      }
    } catch (n) {
      return console.warn(n), !1;
    }
    return !0;
  }
  const [f, r] = await Promise.all([t(), c()]);
  return { channel: f, streams: r };
}
function x(t) {
  return typeof t == "object" && t !== null || typeof t == "function";
}
function O(t) {
  return ArrayBuffer.isView(t);
}
function u(t) {
  return p && t instanceof B || d && t instanceof R || y && t instanceof D;
}
function M(t) {
  return g && t instanceof h;
}
function v(t) {
  return T && t instanceof ArrayBuffer || b && t instanceof MessagePort || C && t instanceof q || A && t instanceof I || w && t instanceof V || S && t instanceof F || E && t instanceof W;
}
function J(t) {
  return Array.from(new Set(t));
}
function N(t, c = !1, f = 1e4) {
  const r = /* @__PURE__ */ new Set([]), n = [[t]];
  for (let o = 0; o < n.length; o++) {
    const i = n[o], a = i.length;
    for (let s = 0; s < a; s++) {
      const e = i[s];
      if (O(e))
        r.add(e.buffer);
      else if (v(e) || c && u(e))
        r.add(e);
      else if (M(e))
        r.add(e.port1), r.add(e.port2);
      else if (!u(e) && x(e)) {
        const l = Array.isArray(e) ? e : Object.values(e);
        l.length && n.push(l);
      }
    }
    if (--f <= 0)
      break;
  }
  return Array.from(r);
}
function* z(t, c = !1, f = 1e4) {
  const r = /* @__PURE__ */ new Set([]), n = [[t]];
  for (let o = 0; o < n.length; o++) {
    const i = n[o], a = i.length;
    for (let s = 0; s < a; s++) {
      const e = i[s];
      if (O(e)) {
        const { buffer: l } = e;
        if (r.has(l))
          continue;
        yield l, r.add(l);
      } else if (v(e) || c && u(e)) {
        if (r.has(e))
          continue;
        yield e, r.add(e);
      } else if (M(e)) {
        if (r.has(e.port1) || r.has(e.port2))
          continue;
        yield e.port1, yield e.port2, r.add(e.port1), r.add(e.port2);
      } else if (!u(e) && x(e)) {
        const l = Array.isArray(e) ? e : Object.values(e);
        l.length && n.push(l);
      }
    }
    if (--f <= 0)
      break;
  }
  return null;
}
function G(t, c = !1, f = 1e4) {
  const r = [[t]];
  for (let n = 0; n < r.length; n++) {
    const o = r[n], i = o.length;
    for (let a = 0; a < i; a++) {
      const s = o[a];
      if (O(s))
        return !0;
      if (v(s) || c && u(s))
        return !0;
      if (M(s))
        return !0;
      if (!u(s) && x(s)) {
        const e = Array.isArray(s) ? s : Object.values(s);
        e.length && r.push(e);
      }
    }
    if (--f <= 0)
      break;
  }
  return !1;
}
export {
  L as AVAILABLE_TRANSFERABLE_OBJECTS,
  q as AudioData,
  I as ImageBitmap,
  h as MessageChannel,
  F as OffscreenCanvas,
  W as RTCDataChannel,
  B as ReadableStream,
  D as TransformStream,
  k as TypedArray,
  V as VideoFrame,
  R as WritableStream,
  J as filterOutDuplicates,
  z as getTransferable,
  N as getTransferables,
  G as hasTransferables,
  M as isMessageChannel,
  x as isObject,
  u as isStream,
  _ as isSupported,
  v as isTransferable,
  O as isTypedArray
};
