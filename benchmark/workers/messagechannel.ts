/// <reference lib="webworker" />
import type { getTransferable, getTransferables, hasTransferables } from "../../src/index";

export interface ITransferableFunctions {
  getTransferable: typeof getTransferable, 
  getTransferables: typeof getTransferables,
  hasTransferables: typeof hasTransferables,
}

export function registerMessageListener(
  port: MessagePort | typeof self = self, 
  { getTransferable, getTransferables, hasTransferables }: ITransferableFunctions
) {
  port.onmessage = ({ data }) => {
    const { name, variant, cycle, i, obj } = data;

    const simpleMsg = { name, variant, cycle, i };
    const msg = { ...simpleMsg, obj };

    try {
      switch (variant) {
        case "hasTransferables": {
          hasTransferables(obj, true);
          port.postMessage(simpleMsg);
          break;
        }
        case "postMessage (no transfers)": {
          port.postMessage(msg);
          break;
        }
        case "postMessage (manually)": {
          port.postMessage(msg, obj.transferable);
          break;
        }
        case "postMessage (getTransferable*)": {
          const transfer = Array.from(getTransferable(obj, true)) as Transferable[];
          port.postMessage(msg, transfer);
          break;
        }
        case "postMessage (getTransferables)": {
          const transfer = getTransferables(obj, true) as Transferable[];
          port.postMessage(msg, transfer);
          break;
        }
      }
    } catch (e) {
      console.warn(e);
      port.postMessage(simpleMsg);
    }
  }

  // (port as MessagePort)?.start?.();
}