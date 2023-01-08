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
          const transfer = obj.transferable as Transferable[];
          port.postMessage(simpleMsg);
          break;
        }
        case "postMessage (manually) (transfer)": {
          const transfer = obj.transferable as Transferable[];
          port.postMessage(msg, transfer);
          break;
        }
        case "postMessage (getTransferables)": {
          const transfer = getTransferables(obj, true) as Transferable[];
          port.postMessage(simpleMsg);
          break;
        }
        case "postMessage (getTransferables) (transfer)": {
          const transfer = getTransferables(obj, true) as Transferable[];
          port.postMessage(msg, transfer);
          break;
        }
        case "postMessage (getTransferable*)": {
          const transfer = Array.from(getTransferable(obj, true)) as Transferable[];
          port.postMessage(simpleMsg);
          break;
        }
        case "postMessage (getTransferable*) (transfer)": {
          const transfer = Array.from(getTransferable(obj, true)) as Transferable[];
          port.postMessage(msg, transfer);
          break;
        }
      }
    } catch (e) {
      port.postMessage({ ...simpleMsg, error: String(e) });
    }
  }
}