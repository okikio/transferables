/// <reference lib="webworker" />
import { getTransferable, getTransferables, hasTransferables } from "../../src/index";

self.onmessage = ({ data }) => {
  const { name, variant, cycle, i, obj } = data;
  console.log({ name, variant, cycle, i })

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
        const transfer = Array.from(getTransferable(obj, true)) as Transferable[];
        self.postMessage(msg, transfer);
        break;
      }
      case "postMessage (getTransferables)": {
        const transfer = getTransferables(obj, true) as Transferable[];
        self.postMessage(msg, transfer);
        break;
      }
    }
  } catch (e) { console.warn(e); }
}