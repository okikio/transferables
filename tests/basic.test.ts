import { hasTransferables, getTransferables } from "../src";
import { describe, expect, it } from 'vitest';
import { encode } from './utils/index';

const uint8 = encode("Lorem Ipsium");
const { buffer: arrbuf } = uint8;

const int8 = new Int8Array(uint8);
const uint8c = new Uint8ClampedArray(uint8)
const int16 = new Int16Array(uint8);
const uint16 = new Uint16Array(uint8);
const int32 = new Int32Array(uint8);
const uint32 = new Uint32Array(uint8);
const float32 = new Float32Array(uint8);
const float64 = new Float64Array(uint8);

const complexTypedArrObj = {
  int8: int8,
  uint8_uint8c: [uint8, uint8c],
  float32_float64_uint32_int32_uint16_int16_uint8obj: {
    float32_float64_obj: [
      float32,
      float64,
      {
        float32_float64_int16_int32: [float32, float64, int16, int32]
      }
    ],
    uint32: [uint32],
    uint16_float32: [uint16, float32],
    uint16_obj_int16: [
      uint16,
      {
        arrbuf: [arrbuf]
      },
      int16,
    ],
    obj_uin8_uint16: [
      {
        arrbuf_uint8_uint16: [arrbuf, uint8, uint16]
      },
      uint8,
      uint16
    ]
  },
  arrbuf: arrbuf,
  arrbuf_obj: {
    buf: arrbuf
  },
  arrbuf_float32: [arrbuf, float32]
}

const channel = new MessageChannel();
const ports = [channel.port1, channel.port2];

const streams = {
  readonly: new ReadableStream(),
  writeonly: new WritableStream(),
  tranformonly: new TransformStream()
}

// No polyfill for OffscreenCanvas, RTCPeerConnection, and RTCDataChannel
// const offscreencanvas = new OffscreenCanvas(200, 200);
// const PeerConnection = new RTCPeerConnection();
// const DataChannel = PeerConnection.createDataChannel("my channel");

// No polyfill
// const audiodata_imagebitmap_videoframe_offscreencanvas_rtcdatachannel = { 
//   audiodata: new AudioData(),
//   imagebitmap: new ImageBitmap(),
//   videoframe: new VideoFrame(),
//   offscreencanvas,
//   rtcdatachannel: new RTCDataChannel()
// }

const fn1 = function () { }
fn1.ports = ports;

function fn2() { }
fn2.channel = channel;

const other_objects = {
  complexTypedArrObj,
  streams,
  channel,
  ports,
  fn1,
  fn2,
  prototype: fn2.prototype,
  constructor: fn1.constructor,
  func() {
    console.log("Functions")
    this.x = {
      value: 25,
      ports
    };
  },
  instanciatedClass: new class {
    #x = {
      internal: {
        value: 25,
        ports
      }
    };
    streams = streams;
    x: number | object = 5;
    constructor() {
      this.x = { complexTypedArrObj };
    }
  }()
}

describe("Transferables", () => {
  it('ArrayBuffer', () => {
    expect(hasTransferables(arrbuf)).toBe(true);

    const transferables = getTransferables(arrbuf);
    expect(transferables).toHaveLength(1);
    expect(transferables[0]).toBeInstanceOf(ArrayBuffer);
    expect(transferables[0]).toBe(arrbuf);
  })

  it('TypedArrays Single', () => {
    expect(hasTransferables(uint8)).toBe(true);
    expect(hasTransferables(int8)).toBe(true);
    expect(hasTransferables(uint8c)).toBe(true);
    expect(hasTransferables(int16)).toBe(true);
    expect(hasTransferables(uint16)).toBe(true);
    expect(hasTransferables(int32)).toBe(true);
    expect(hasTransferables(uint32)).toBe(true);
    expect(hasTransferables(float32)).toBe(true);
    expect(hasTransferables(float64)).toBe(true);

    const transferables = getTransferables(uint8);
    expect(transferables).toHaveLength(1);
    expect(transferables[0]).toBeInstanceOf(ArrayBuffer);
    expect(transferables[0]).toBe(arrbuf);

    expect(getTransferables(int8)).toEqual([arrbuf]);
    expect(getTransferables(uint8c)).toEqual([arrbuf]);
    expect(getTransferables(int16)).toEqual([arrbuf]);
    expect(getTransferables(uint16)).toEqual([arrbuf]);
    expect(getTransferables(int32)).toEqual([arrbuf]);
    expect(getTransferables(uint32)).toEqual([arrbuf]);
    expect(getTransferables(float32)).toEqual([arrbuf]);
    expect(getTransferables(float64)).toEqual([arrbuf]);
  })

  it('TypedArrays Complex', () => {
    expect(hasTransferables(complexTypedArrObj)).toBe(true);

    const transferables = getTransferables(complexTypedArrObj);
    expect(transferables).toHaveLength(9);

    expect(transferables.map(x => x instanceof ArrayBuffer))
      .toEqual(Array.from({ length: 9 }, () => true));
    expect(transferables).toContain(uint8.buffer);
    expect(transferables).toContain(arrbuf);
    expect(transferables).toContain(int8.buffer);
    expect(transferables).toContain(uint8c.buffer);
    expect(transferables).toContain(int16.buffer);
    expect(transferables).toContain(uint16.buffer);
    expect(transferables).toContain(int32.buffer);
    expect(transferables).toContain(uint32.buffer);
    expect(transferables).toContain(float32.buffer);
    expect(transferables).toContain(float64.buffer);

    expect(transferables.indexOf(float64.buffer)).toBe(4);

    const transferables2 = getTransferables([complexTypedArrObj, arrbuf]);
    expect(transferables2).toHaveLength(9);

    expect(transferables2.map(x => x instanceof ArrayBuffer))
      .toEqual(Array.from({ length: 9 }, () => true));
    expect(transferables2).toContain(uint8.buffer);
    expect(transferables2).toContain(arrbuf);
    expect(transferables2).toContain(int8.buffer);
    expect(transferables2).toContain(uint8c.buffer);
    expect(transferables2).toContain(int16.buffer);
    expect(transferables2).toContain(uint16.buffer);
    expect(transferables2).toContain(int32.buffer);
    expect(transferables2).toContain(uint32.buffer);
    expect(transferables2).toContain(float32.buffer);
    expect(transferables2).toContain(float64.buffer);

    expect(transferables2.indexOf(float64.buffer)).toBe(4);
  })

  it('MessagePort', () => {
    expect(hasTransferables(ports)).toBe(true);

    const transferables = getTransferables(ports);
    expect(transferables).toHaveLength(2);

    expect(transferables).toContainEqual(channel.port1);
    expect(transferables).toContainEqual(channel.port2);
  })

  it('Readable/Wriatable/Tranform Streams', () => {
    expect(hasTransferables(streams, Infinity, true)).toBe(true);

    const transferables = getTransferables(streams, Infinity, true);
    expect(transferables).toHaveLength(3);

    expect(transferables).toContainEqual(streams.readonly);
    expect(transferables).toContainEqual(streams.writeonly);
    expect(transferables).toContainEqual(streams.tranformonly);
  })

  // No polyfill
  // it('AudioData + ImageBitmap + VideoFrame + OffscreenCanvas', () => {
  //   expect(hasTransferables(audiodata_imagebitmap_videoframe_offscreencanvas_rtcdatachannel, Infinity, true)).toBe(true);

  //   const transferables = getTransferables(audiodata_imagebitmap_videoframe_offscreencanvas_rtcdatachannel, Infinity, true);
  //   expect(transferables).toHaveLength(4);

  //   expect(transferables).toContainEqual(audiodata_imagebitmap_videoframe_offscreencanvas_rtcdatachannel.audiodata);
  //   expect(transferables).toContainEqual(audiodata_imagebitmap_videoframe_offscreencanvas_rtcdatachannel.imagebitmap);
  //   expect(transferables).toContainEqual(audiodata_imagebitmap_videoframe_offscreencanvas_rtcdatachannel.videoframe);
  //   expect(transferables).toContainEqual(audiodata_imagebitmap_videoframe_offscreencanvas_rtcdatachannel.offscreencanvas);
  //   expect(transferables).toContainEqual(audiodata_imagebitmap_videoframe_offscreencanvas_rtcdatachannel.rtcdatachannel);
  // })
  
  it('Functions, Classes and Other objects', () => {
    expect(hasTransferables(other_objects, Infinity, true)).toBe(true);

    const transferables = getTransferables(other_objects, Infinity, true);
    expect(transferables).toHaveLength(3 + 9 + 2);

    expect(transferables).toContainEqual(streams.readonly);
    expect(transferables).toContainEqual(streams.writeonly);
    expect(transferables).toContainEqual(streams.tranformonly);

    expect(transferables).toContainEqual(channel.port1);
    expect(transferables).toContainEqual(channel.port2);

    expect(transferables).toContain(uint8.buffer);
    expect(transferables).toContain(arrbuf);
    expect(transferables).toContain(int8.buffer);
    expect(transferables).toContain(uint8c.buffer);
    expect(transferables).toContain(int16.buffer);
    expect(transferables).toContain(uint16.buffer);
    expect(transferables).toContain(int32.buffer);
    expect(transferables).toContain(uint32.buffer);
    expect(transferables).toContain(float32.buffer);
    expect(transferables).toContain(float64.buffer);
  })
})