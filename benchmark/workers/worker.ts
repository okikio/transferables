/// <reference lib="webworker" />
import { MB, generateObj } from "../utils";
import { getTransferable, getTransferables, hasTransferables } from "../../src/index";

self.onmessage = ({ data }) => {
  const { name, variant, cycle, i } = data;
  const num = Math.pow(2, i);

  /**
   * Deno doesn't support transferable streams
   */
  const obj = generateObj(num / MB, { streams: false, channel: false });

  try {
    let msg = { name, variant, cycle, i, obj };
    console.log({ name, variant, cycle, i });
    
    switch (variant) {
      case "postMessage": {
        self.postMessage(msg);
        break;
      }
      case "postMessage (predefined)": {
        self.postMessage(msg, obj.transferable);
        break;
      }
      case "hasTransferables": {
        hasTransferables(obj, true);
        self.postMessage(msg);
        break;
      }
      case "getTransferable": {
        const transferItt: any[] | null = Array.from(getTransferable(obj, true));
        self.postMessage(msg, transferItt);
        break;
      }
      case "getTransferable(s)": {
        const transferGen: any[] | null = getTransferables(obj, true);
        self.postMessage(msg, transferGen);
        break;
      }
    }
  } catch (e) { console.warn(e); }
}