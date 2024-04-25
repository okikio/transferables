/////////////////////////////
/// webcodecs APIs
/////////////////////////////

// @filename: ./types.d.ts
// Versioning:
// Until the WebCodecs spec is finalized, the major version number is 0. I have chosen to use minor
// version 1 to denote the API as defined by the IDL files from the Chromium repo at
// https://chromium.googlesource.com/chromium/src/+/main/third_party/blink/renderer/modules/webcodecs.
// Please use a version number above 0.1 if using the spec at https://w3c.github.io/webcodecs/ as
// the source.

// The declarations in webcodecs.generated.d.ts have been generated using the code in
// https://github.com/yume-chan/webcodecs-lib-generator. See
// https://github.com/yume-chan/webcodecs-lib-generator/blob/main/README.md for more detail.

// The following declarations are copied from
// https://github.com/microsoft/TypeScript-DOM-lib-generator/blob/a75338e1ea8a958bf08a5745141d2ab8f14ba2ca/baselines/dom.generated.d.ts
// and modified to expand the types to include VideoFrame.

/////////////////////////////
/// webcodecs APIs
/////////////////////////////

// type AlphaOption = "discard" | "keep";
type AudioSampleFormat = "f32" | "f32-planar" | "s16" | "s16-planar" | "s32" | "s32-planar" | "u8" | "u8-planar";

interface AudioDataCopyToOptions {
  format?: AudioSampleFormat | undefined;
  frameCount?: number | undefined;
  frameOffset?: number | undefined;
  planeIndex: number;
}

interface AudioDataInit {
  data: AllowSharedBufferSource;
  format: AudioSampleFormat;
  numberOfChannels: number;
  numberOfFrames: number;
  sampleRate: number;
  timestamp: number;
}

interface AudioData {
  readonly duration: number;
  readonly format: AudioSampleFormat;
  readonly numberOfChannels: number;
  readonly numberOfFrames: number;
  readonly sampleRate: number;
  readonly timestamp: number;
  allocationSize(options: AudioDataCopyToOptions): number;
  clone(): AudioData;
  close(): void;
  copyTo(destination: AllowSharedBufferSource, options: AudioDataCopyToOptions): void;
}

declare var AudioData: {
  prototype: AudioData;
  new(init: AudioDataInit): AudioData;
};

interface AudioDataOutputCallback {
  (output: AudioData): void;
}
