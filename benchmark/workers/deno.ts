/// <reference lib="webworker" />
import { MB, generateObj } from "../utils.ts";
import { getTransferable, getTransferables, hasTransferables } from "../../src/index.ts";

self.onmessage = ({ data }) => {
  const { name, variant, cycle, i } = data;
  const num = Math.pow(2, i);

  /**
   * Deno doesn't support transferable streams
   */
  const obj = generateObj(num / MB, { streams: false, channel: false });

  try {
    const msg = { name, variant, cycle, i, obj };
    switch (variant) {
      case "hasTransferables": {
        hasTransferables(obj, true);
        self.postMessage(msg);
        break;
      }
      case "postMessage (no transfers)": {
        self.postMessage(msg);
        break;
      }
      case "postMessage (manually)": {
        self.postMessage(msg, obj.transferable);
        break;
      }
      case "postMessage (getTransferable)": {
        const transferItt: Transferable[] | null = Array.from(getTransferable(obj, true));
        self.postMessage(msg, transferItt);
        break;
      }
      case "postMessage (getTransferables)": {
        const transferGen: Transferable[] | null = getTransferables(obj, true);
        self.postMessage(msg, transferGen);
        break;
      }
    }
  } catch (e) { console.warn(e); }
}