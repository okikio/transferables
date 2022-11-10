import type { TypeTypedArray } from "../src";

import { it } from 'vitest';
import { getTransferables, hasTransferables } from "../src";

import bytes from "pretty-bytes";
import { dmeanstdev } from '@stdlib/stats-base';

import Table from "cli-table3";

export const timeFormatter = new Intl.RelativeTimeFormat("en", {
  style: "narrow",
  numeric: "auto",
});

const perfs = new Map<string, Map<string, number[]>>();
function add(name: string, variant: string, fn?: Function) {
  const start = performance.now();
  fn?.();
  const end = performance.now();
  const duration = end - start;

  if (!perfs.has(name)) perfs.set(name, new Map<string, number[]>());
  if (!perfs.get(name)?.has(variant)) perfs.get(name)?.set(variant, []);
  perfs.get(name)?.get(variant)?.push(duration);
}

// 16MB = 1024 * 1024 * 16
const MB = 1024 * 1024;


/**
 * Generates an Array of a certain MB size
 * 
 * @param size Array size in MB
 */
export function range(size = 16) {
  return Array.from({ length: size * MB }, (v, i) => i);
}

/**
 * Generates a complex object for various array buffer sizes, 
 * to test how much of an impact transferable objects actually have
 * on performance
 * 
 * @param size Array size in MB
 */
export function generateObj(size = 16) {
  const arr = range(size);
  const uint8 = new Uint8Array(arr);
  const { buffer: arrbuf } = uint8;

  const int8 = new Int8Array(arr);
  const uint8c = new Uint8ClampedArray(arr)
  const int16 = new Int16Array(arr);
  const uint16 = new Uint16Array(arr);
  const int32 = new Int32Array(arr);
  const uint32 = new Uint32Array(arr);
  const float32 = new Float32Array(arr);
  const float64 = new Float64Array(arr);

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
  // fn1.ports = ports;

  function fn2() { }
  // fn2.channel = channel;

  const other_objects = {
    arr: range(size),
    prototype: fn2.prototype,

    arr2: [int8,
      uint8c,
      int16,
      uint16,
      int32,
      uint32,
      float32,
      float64,]

    // complexTypedArrObj,
    // streams,
    // channel,
    // ports,
    // instanciatedClass: new class {
    //   #x = {
    //     internal: {
    //       value: 25,
    //       // ports
    //     }
    //   };
    //   // streams = streams;
    //   x: number | object = 5;
    //   constructor() {
    //     // this.x = { complexTypedArrObj };
    //   }
    // }()
  }

  const dynamic_size_object = {};
  const len = Math.min(Math.max(size, 1), 1000);

  for (let i = 0; i < len; i++) {
    const arr_ = range(size);
    const uint8_ = new Uint8Array(arr_);
    const int8_ = new Int8Array(arr_);
    const uint8c_ = new Uint8ClampedArray(arr_)
    const int16_ = new Int16Array(arr_);
    const uint16_ = new Uint16Array(arr_);
    const int32_ = new Int32Array(arr_);
    const uint32_ = new Uint32Array(arr_);
    const float32_ = new Float32Array(arr_);
    const float64_ = new Float64Array(arr_);

    // const channel_ = new MessageChannel();
    // const ports_ = [channel.port1, channel.port2];

    // const streams_ = {
    //   readonly: new ReadableStream(),
    //   writeonly: new WritableStream(),
    //   tranformonly: new TransformStream()
    // }

    dynamic_size_object[i] = {
      // uint8_all: [
      //   uint8_,
      //   int8_,
      //   uint8c_,
      //   int16_,
      //   uint16_,
      //   int32_,
      //   uint32_,
      //   float32_,
      //   float64_,
      //   // channel_,
      //   // ports_,
      //   // streams_,
      // ],
      arr_,
      uint8_,
      int8_,
      uint8c_,
      int16_,
      uint16_,
      int32_,
      uint32_,
      float32_,
      float64_,
      // channel_,
      // ports_,
      // streams_,
    };
  }

  return {
    other_objects,
    random_noise_object: dynamic_size_object,
    // complexTypedArrObj
  };
}

it("structuredClone", () => { 
})
  let head = [`hasTransferables`, `getTransferables`, `structuredClone`, `structuredClone (Transferable)`];
  for (let i = 0; i < 1; i++) {
    const cycle = `Cycle ${i}`;
    for (let i = 0; i < Math.log2(16 * MB); i++) {
      const num = Math.pow(2, i);
      const sizeStr = bytes(num, { maximumFractionDigits: 3 });
      const obj = generateObj(num / MB);

      let transferableExists = false;
      add(sizeStr, `hasTransferables`, () => {
        transferableExists = hasTransferables(obj, 100, true);
      })

      let transfer: any[] | null = null;
      add(sizeStr, `getTransferables`, () => {
        transfer = getTransferables(obj, 100, true);
      })

      add(sizeStr, `structuredClone`, () => {
        try {
          structuredClone(obj);
        } catch (e) { console.warn(e); }
      })

      add(sizeStr, `structuredClone (Transferable)`, () => {
        try {
          structuredClone(obj, {
            transfer: transfer && transfer.length > 0 ? transfer : []
          });
        } catch (e) { console.warn(e); }
      })

    }
    console.log("\n")
  }

  const table = new Table({
    head: ["", ...head]
  });

  perfs.forEach((variants, name) => {
    let obj = {};
    variants.forEach((durations, variant) => {
      const [mean, std] = dmeanstdev(durations.length, 0, new Float64Array(durations), 1, new Float64Array(2), 1);
      obj[name] ??= [];
      obj[name].push(`${timeFormatter.format(mean, "seconds")} ± ${timeFormatter.format(std, "seconds").replace("in ", "")}`);

    });
    table.push(obj);
  })

  console.log(table.toString())

