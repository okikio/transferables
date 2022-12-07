const p = Object.getPrototypeOf(Int8Array), y = globalThis.AudioData, m = globalThis.VideoFrame, T = globalThis.OffscreenCanvas, b = globalThis.RTCDataChannel;
async function w() {
  const n = await (async () => {
    try {
      const s = new MessageChannel(), r = { port1: s.port1 }, a = structuredClone(r, {
        transfer: [
          s.port1
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
    } catch (s) {
      return console.warn(s), !1;
    }
    return !0;
  })(), i = await (async () => {
    try {
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
      }), a = new MessageChannel(), t = r;
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
          ].filter((l) => l != null));
        };
      }), a.port1.close();
    } catch (s) {
      return console.warn(s), !1;
    }
    return !0;
  })();
  return { channel: n, streams: i };
}
function u(n) {
  return typeof n == "object" && n !== null || typeof n == "function";
}
function h(n) {
  return n instanceof p || n instanceof DataView;
}
function c(n) {
  return "ReadableStream" in globalThis && n instanceof ReadableStream || "WritableStream" in globalThis && n instanceof WritableStream || "TransformStream" in globalThis && n instanceof TransformStream;
}
function d(n) {
  return "MessageChannel" in globalThis && n instanceof MessageChannel;
}
function g(n) {
  return "ArrayBuffer" in globalThis && n instanceof ArrayBuffer || "MessagePort" in globalThis && n instanceof MessagePort || "AudioData" in globalThis && n instanceof y || "ImageBitmap" in globalThis && n instanceof ImageBitmap || "VideoFrame" in globalThis && n instanceof m || "OffscreenCanvas" in globalThis && n instanceof T || "RTCDataChannel" in globalThis && n instanceof b;
}
function C(n) {
  return Array.from(new Set(n));
}
function A(n, i = !1, s = 1e4) {
  const r = /* @__PURE__ */ new Set([]);
  let a = [], t = [n];
  for (; t.length > 0 && s > 0; ) {
    for (let e of t)
      if (h(e))
        r.add(e.buffer);
      else if (g(e))
        r.add(e);
      else if (d(e))
        r.add(e.port1), r.add(e.port2);
      else if (i && c(e))
        r.add(e);
      else if (!c(e) && u(e)) {
        const o = Array.isArray(e) ? e : Object.values(e), l = o.length;
        for (let f = 0; f < l; f++)
          a.push(o[f]);
      }
    t = a, a = [], s--;
  }
  return Array.from(r);
}
function* S(n, i = !1, s = 1e4) {
  const r = /* @__PURE__ */ new Set([]);
  let a = [n], t = [];
  for (; a.length > 0 && s > 0; ) {
    for (let e of a)
      if (!r.has(e)) {
        if (h(e)) {
          r.add(e);
          const { buffer: o } = e;
          if (r.has(o))
            continue;
          yield o, r.add(o);
        } else if (g(e))
          yield e, r.add(e);
        else if (d(e)) {
          if (r.add(e), r.has(e.port1) || r.has(e.port2))
            continue;
          yield e.port1, yield e.port2, r.add(e.port1), r.add(e.port2);
        } else if (i && c(e))
          yield e, r.add(e);
        else if (!c(e) && u(e)) {
          const o = Array.isArray(e) ? e : Object.values(e), l = o.length;
          for (let f = 0; f < l; f++)
            t.push(o[f]);
        }
      }
    a = t, t = [], s--;
  }
  return r.clear(), a = null, t = null, null;
}
function M(n, i = !1, s = 1e4) {
  let r = [n], a = [];
  for (; r.length > 0 && s > 0; ) {
    for (let t of r) {
      if (h(t))
        return !0;
      if (g(t))
        return !0;
      if (d(t))
        return !0;
      if (i && c(t))
        return !0;
      if (u(t) && !c(t)) {
        const e = Array.isArray(t) ? t : Object.values(t), o = e.length;
        for (let l = 0; l < o; l++)
          a.push(e[l]);
      }
    }
    r = a, a = [], s--;
  }
  return r = null, a = null, !1;
}
export {
  y as AudioData,
  T as OffscreenCanvas,
  b as RTCDataChannel,
  p as TypedArray,
  m as VideoFrame,
  C as filterOutDuplicates,
  S as getTransferable,
  A as getTransferables,
  M as hasTransferables,
  d as isMessageChannel,
  u as isObject,
  c as isStream,
  w as isSupported,
  g as isTransferable,
  h as isTypedArray
};
