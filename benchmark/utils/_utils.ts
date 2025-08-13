import type { BenchmarkReport, Report } from "@poolifier/tatami-ng";
import { MAX_SIZE, BITS_IN_BYTE } from "./_constants.ts";

import { markdownTable } from "markdown-table";
import { isSupported } from "../../src/mod.ts";

// Confirm if MessageChannels & Streams are cloneable
export const IsClonable = await isSupported();
console.log({ IsClonable })

// Based off of http://www.javascripter.net/faq/browsern.htm
export function GetBrowser() {
  const nAgt = navigator.userAgent;
  let browserName = navigator.appName;
  let fullVersion = '' + parseFloat(navigator.appVersion);
  let majorVersion = parseInt(navigator.appVersion, 10);
  let nameOffset, verOffset, ix;

  // In Opera 15+, the true version is after "OPR/" 
  if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 4);
  }
  // In older Opera, the true version is after "Opera" or after "Version"
  else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome" 
  else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version" 
  else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox" 
  else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent 
  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
    (verOffset = nAgt.lastIndexOf('/'))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() === browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(";")) != -1)
    fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(" ")) != -1)
    fullVersion = fullVersion.substring(0, ix);

  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  return ''
    + 'Browser name  = ' + browserName + '\n'
    + 'Full version  = ' + fullVersion + '\n'
    + 'Major version = ' + majorVersion + '\n'
    + 'navigator.appName = ' + navigator.appName + '\n'
    + 'navigator.userAgent = ' + navigator.userAgent + '\n'
}

if ("navigator" in globalThis) {
  console.log(GetBrowser())
}

/**
 * Generates an Array of a certain MB size (by default 16 MB)
 * 
 * @param size Array size in MB
 */
export function range(size = MAX_SIZE) {
  return Array.from({ length: size }, (_, i) => i);
}

/**
 * Generates a complex object for benchmark testing. It creates various typed arrays and other potential transferables.
 * @param size - Array size in megabytes, defaults to 16MB.
 * @param enable - Options to include streams and channels in the object.
 * @returns A complex object with different types of properties, including possible transferables.
 */
export function GenerateStub(size = MAX_SIZE, enable: { streams?: boolean, channel?: boolean } = {}) {
  // Array buffer initialization and object structure setup.
  // This function constructs a deeply nested object with multiple layers and types of arrays.
  // It is designed to test the impact of transferables on structured cloning performance.
  // Detailed inline comments provide insights into each step and structure.

  // Initial array and typed arrays setup.
  // Reduce memory pressure
  const size_in_megabytes = Math.max(Math.round(size / BITS_IN_BYTE), 1);
  const uint8 = new Uint8Array(size_in_megabytes); 
  // More typed arrays with different types.
  const { buffer: arrbuf } = uint8;

  const int8 = new Int8Array(size_in_megabytes);
  const uint8c = new Uint8ClampedArray(size_in_megabytes)
  const int16 = new Int16Array(size_in_megabytes);
  const uint16 = new Uint16Array(size_in_megabytes);
  const int32 = new Int32Array(size_in_megabytes);
  const uint32 = new Uint32Array(size_in_megabytes);
  const float32 = new Float32Array(size_in_megabytes);
  const float64 = new Float64Array(size_in_megabytes);

  const isStream = enable.streams ?? true;
  const isChannel = enable.channel ?? true;

  // Preparing transferables array.
  const transferable: any[] = [];
  // Adding array buffers to transferables.
  transferable.push(arrbuf, int8.buffer, uint8c.buffer, int16.buffer, uint16.buffer, int32.buffer, uint32.buffer, float32.buffer, float64.buffer);

  // Complex object structure that includes various nested and combined typed arrays.
  const complex_typed_arr_obj = {
    int8,
    uint8_uint8c: [uint8, uint8c],
    // Further nested structures combining different typed arrays.
    float32_float64_uint32_int32_uint16_int16_uint8obj: {
      float32_float64_obj: [
        float32,
        float64,
        { float32_float64_int16_int32: [float32, float64, int16, int32] }
      ],
      uint32: [uint32],
      uint16_float32: [uint16, float32],
      uint16_obj_int16: [
        uint16,
        { arrbuf: [arrbuf] },
        int16,
      ],
      obj_uin8_uint16: [
        { arrbuf_uint8_uint16: [arrbuf, uint8, uint16] },
        uint8,
        uint16
      ]
    },
    arrbuf,
    arrbuf_obj: { buf: arrbuf },
    arrbuf_float32: [arrbuf, float32]
  };

  // Additional features based on environment capabilities.
  // Adding message channels if supported.
  const channel = isChannel && ('MessageChannel' in globalThis) && new globalThis.MessageChannel();
  const ports = channel && [channel?.port1, channel?.port2];
  Array.isArray(ports) && transferable.push(...ports);

  // Stream setup if supported.
  const readable = "ReadableStream" in globalThis;
  const writable = "WritableStream" in globalThis;
  const transform = "TransformStream" in globalThis;
  const streams = isStream && {
    readonly: readable && new ReadableStream(),
    writeonly: writable && new WritableStream(),
    tranformonly: transform && new TransformStream()
  };
  streams && streams.readonly && transferable.push(streams.readonly);
  streams && streams.writeonly && transferable.push(streams.writeonly);
  streams && streams.tranformonly && transferable.push(streams.tranformonly);

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

  // Functions as part of the object, demonstrating how they can be structured.
  const fn1 = function () { }
  fn1.ports = ports;

  function fn2() { }
  // fn2.channel = channel;

  // Additional objects showcasing different use-cases and configurations.
  const other_objects = {
    arr: size_in_megabytes,
    prototype: fn2.prototype,
    arr2: [int8, uint8c, int16, uint16, int32, uint32, float32, float64],
    complexTypedArrObj: complex_typed_arr_obj,
    streams,
    // channel,
    ports,
    instanciatedClass: new class {
      #x = { internal: { value: 25, ports } };
      streams = streams;
      x: number | object = 5;
      constructor() {
        this.x = { complexTypedArrObj: complex_typed_arr_obj };
      }
    }()
  };

  // Constructing a dynamic sized object based on the input size, further demonstrating complex use-cases.
  const dynamic_size_object: Record<string | number, unknown> = {};
  const len = Math.min(Math.max(size_in_megabytes + 10, 1), 1000);

  for (let i = 0; i < len; i++) {
    // Repeating the initial array and typed array setup for each entry.
    const uint8_ = new Uint8Array(size_in_megabytes);
    const int8_ = new Int8Array(size_in_megabytes);
    const uint8c_ = new Uint8ClampedArray(size_in_megabytes);
    const int16_ = new Int16Array(size_in_megabytes);
    const uint16_ = new Uint16Array(size_in_megabytes);
    const int32_ = new Int32Array(size_in_megabytes);
    const uint32_ = new Uint32Array(size_in_megabytes);
    const float32_ = new Float32Array(size_in_megabytes);
    const float64_ = new Float64Array(size_in_megabytes);

    // Adding buffer objects to transferable list.
    transferable.push(uint8_.buffer, int8_.buffer, uint8c_.buffer, int16_.buffer, uint16_.buffer, int32_.buffer, uint32_.buffer, float32_.buffer, float64_.buffer);

    // Handling channels and ports within loops.
    const channel_ = isChannel && ('MessageChannel' in globalThis) && new globalThis.MessageChannel();
    const ports_ = channel_ && [channel_.port1, channel_.port2];
    Array.isArray(ports_) && transferable.push(...ports_);

    // Stream objects setup within the loop.
    const streams_ = isStream && {
      readonly: new ReadableStream(),
      writeonly: new WritableStream(),
      tranformonly: new TransformStream()
    };

    // Adding streams to transferable list if they exist.
    streams_ && streams_.readonly && transferable.push(streams_.readonly);
    streams_ && streams_.writeonly && transferable.push(streams_.writeonly);
    streams_ && streams_.tranformonly && transferable.push(streams_.tranformonly);

    // Building dynamic object properties with various configurations and types.
    dynamic_size_object[i] = {
      uint8_all: [ uint8_, int8_, uint8c_, int16_, uint16_, int32_, uint32_, float32_, float64_, /* channel_, */ ports_, streams_, ],
      
      uint8_,
      int8_,
      uint8c_,
      int16_,
      uint16_,
      int32_,
      uint32_,
      float32_,
      float64_,
      /* channel_, */
      ports_,
      streams_,
    };
  }
  
  return {
    other_objects,
    dynamic_size_object,
    complexTypedArrObj: complex_typed_arr_obj,
    transferable: Array.from(new Set(transferable))
      .filter(x => x),
  };
}

export const NumberFormatter = new Intl.NumberFormat();
export function PrintMarkdownTable(variants: string[], benchmarks: BenchmarkReport['benchmarks'][]) {
  const head = ["", ...variants];
  const groupedBenchmarks = Object.entries<BenchmarkReport['benchmarks'][]>(
    // @ts-ignore `Object.groupBy(...)`
    Object.groupBy(
      benchmarks, 
      (bench: BenchmarkReport['benchmarks']) => bench.group
    )
  );

  const benchmarkResults = groupedBenchmarks.map(([_group, _benchmarks]) => {
    const values = _benchmarks.map((bench) => {
      if (!bench) return 'null';
      if (bench.error) return 'null';

      const opsPerSec = bench.stats?.samples ?? 0;
      const margin = bench.stats?.throughput?.rmoe ?? 0;

      const opsPerSecStr = NumberFormatter.format(Math.round(opsPerSec * 100) / 100);
      const marginStr = NumberFormatter.format(Math.round(margin * 100) / 100);

      return `${opsPerSecStr} iter/sec ±${marginStr}%`;
    })

    return [_group, ...values];
  })

  const result = markdownTable([head, ...benchmarkResults]);
  console.log(result);
  console.log("\n");

  return result;
}

export function withResolvers() {
  let resolve: ((value: unknown) => void) | undefined;
  let reject: ((value: unknown) => void) | undefined;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}