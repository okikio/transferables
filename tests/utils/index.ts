const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function encode(input?: string) { 
  return encoder.encode(input);
}

export function decode(input?: BufferSource, options?: TextDecodeOptions) { 
  return decoder.decode(input, options);
}