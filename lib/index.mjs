const q = Object.getPrototypeOf(Int8Array), I = globalThis.AudioData, V = globalThis.ImageBitmap, F = globalThis.VideoFrame, W = globalThis.OffscreenCanvas, k = globalThis.RTCDataChannel, h = globalThis.MessageChannel, B = globalThis.ReadableStream, D = globalThis.WritableStream, R = globalThis.TransformStream, p = "ReadableStream" in globalThis, d = "WritableStream" in globalThis, y = "TransformStream" in globalThis, P = p && d && y, g = "MessageChannel" in globalThis, b = "MessagePort" in globalThis, T = "ArrayBuffer" in globalThis, C = "AudioData" in globalThis, A = "ImageBitmap" in globalThis, w = "VideoFrame" in globalThis, S = "OffscreenCanvas" in globalThis, E = "RTCDataChannel" in globalThis, L = T && b && C && A && w && S && E, m = "structuredClone" in globalThis, j = {
  TransferableExists: L,
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
      }) : o, r = new h(), s = { port1: i.port1 };
      await new Promise((e) => {
        r.port1.postMessage(s, [
          s.port1
        ]), r.port1.onmessage = () => {
          e();
        }, r.port2.onmessage = ({ data: l }) => {
          r.port2.postMessage(l, [
            l.port1
          ]);
        };
      }), r.port1.close();
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
        writeonly: new D(),
        tranformonly: new R()
      }, o = m ? structuredClone(n, {
        transfer: [
          n.readonly,
          n.writeonly,
          n.tranformonly
        ]
      }) : n;
      if (g) {
        const i = new h(), r = o;
        await new Promise((s) => {
          i.port1.postMessage(r, [
            r.readonly,
            r.writeonly,
            r.tranformonly
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
  const [f, a] = await Promise.all([t(), c()]);
  return { channel: f, streams: a };
}
function x(t) {
  return typeof t == "object" && t !== null || typeof t == "function";
}
function O(t) {
  return t instanceof q || t instanceof DataView;
}
function u(t) {
  return p && t instanceof B || d && t instanceof D || y && t instanceof R;
}
function M(t) {
  return g && t instanceof h;
}
function v(t) {
  return T && t instanceof ArrayBuffer || b && t instanceof MessagePort || C && t instanceof I || A && t instanceof V || w && t instanceof F || S && t instanceof W || E && t instanceof k;
}
function J(t) {
  return Array.from(new Set(t));
}
function N(t, c = !1, f = 1e4) {
  const a = /* @__PURE__ */ new Set([]), n = [[t]];
  for (let o = 0; o < n.length; o++) {
    const i = n[o], r = i.length;
    for (let s = 0; s < r; s++) {
      const e = i[s];
      if (O(e))
        a.add(e.buffer);
      else if (v(e) || c && u(e))
        a.add(e);
      else if (M(e))
        a.add(e.port1), a.add(e.port2);
      else if (!u(e) && x(e)) {
        const l = Array.isArray(e) ? e : Object.values(e);
        l.length && n.push(l);
      }
    }
    if (--f <= 0)
      break;
  }
  return Array.from(a);
}
function* z(t, c = !1, f = 1e4) {
  const a = /* @__PURE__ */ new Set([]), n = [[t]];
  for (let o = 0; o < n.length; o++) {
    const i = n[o], r = i.length;
    for (let s = 0; s < r; s++) {
      const e = i[s];
      if (O(e)) {
        const { buffer: l } = e;
        if (a.has(l))
          continue;
        yield l, a.add(l);
      } else if (v(e) || c && u(e)) {
        if (a.has(e))
          continue;
        yield e, a.add(e);
      } else if (M(e)) {
        if (a.has(e.port1) || a.has(e.port2))
          continue;
        yield e.port1, yield e.port2, a.add(e.port1), a.add(e.port2);
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
  const a = [[t]];
  for (let n = 0; n < a.length; n++) {
    const o = a[n], i = o.length;
    for (let r = 0; r < i; r++) {
      const s = o[r];
      if (O(s))
        return !0;
      if (v(s) || c && u(s))
        return !0;
      if (M(s))
        return !0;
      if (!u(s) && x(s)) {
        const e = Array.isArray(s) ? s : Object.values(s);
        e.length && a.push(e);
      }
    }
    if (--f <= 0)
      break;
  }
  return !1;
}
export {
  j as AVAILABLE_TRANSFERABLE_OBJECTS,
  I as AudioData,
  V as ImageBitmap,
  h as MessageChannel,
  W as OffscreenCanvas,
  k as RTCDataChannel,
  B as ReadableStream,
  R as TransformStream,
  q as TypedArray,
  F as VideoFrame,
  D as WritableStream,
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
