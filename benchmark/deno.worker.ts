import { MB, generateObj } from "./utils.ts";
import { getTransferables, hasTransferables } from "../src/index.ts";

self.onmessage = ({ data }) => {
  const { name, variant, cycle, i } = data;
  const num = Math.pow(2, i);

  /**
   * Deno doesn't support transferable streams
   */
  const obj = generateObj(num / MB, { streams: false, channel: false });
  const transferables = getTransferables(obj, 100, true);

  try {
    let msg = { name, variant, cycle, i, obj };
    if (variant == 'postMessage') {
      self.postMessage(msg);
    } else {
      self.postMessage(msg, transferables);
    }
    // console.log(data)
  } catch (e) { console.warn(e); }
}