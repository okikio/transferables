/// <reference lib="webworker" />
import type { MessagePort as NodeMessagePort, Worker as NodeWorker, TransferListItem } from "node:worker_threads";
import type { IIteration, ITransferables } from "./_types.d.ts";
import { withResolvers } from "./_utils.ts";

export function CreatePostMessageVariants(
  { getTransferable, getTransferables, hasTransferables }: ITransferables
) {
  return {
    async hasTransferables(
      port: MessagePort | NodeMessagePort | typeof self | typeof globalThis = globalThis,
      _data: IIteration
    ) {
      const { name, variant, index, data } = _data;
      const simpleMessage = { name, variant, index };

      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._complexData } = data;
      hasTransferables(_complexData, true);

      const _port = (port as MessagePort | NodeMessagePort);
      _port.postMessage(simpleMessage);
      return await Promise.resolve(data);
    },

    "postMessage (no transfer)": async function (
      port: MessagePort | NodeMessagePort | typeof self | typeof globalThis = globalThis, 
      _data: IIteration
    ) {
      const { name, variant, index, data } = _data;
      const simpleMessage = { name, variant, index };
      const fullMessage = { ...simpleMessage, data };

      const _port = (port as MessagePort | NodeMessagePort);
      _port.postMessage(fullMessage);
      return await Promise.resolve(data);
    },

    "postMessage (manually) (transfer)": async function (
      port: MessagePort | NodeMessagePort | typeof self | typeof globalThis = globalThis, 
      _data: IIteration
    ) {
      const { name, variant, index, data } = _data;
      const simpleMessage = { name, variant, index };
      const fullMessage = { ...simpleMessage, data };

      const transfer = data.transferable as Transferable[] | TransferListItem[];
      const _port = (port as MessagePort | NodeMessagePort);
      _port.postMessage(fullMessage, transfer as any);
      return await Promise.resolve(data);
    },

    "postMessage (getTransferables)": async function (
      port: MessagePort | NodeMessagePort | typeof self | typeof globalThis = globalThis, 
      _data: IIteration
    ) {
      const { name, variant, index, data } = _data;
      const simpleMessage = { name, variant, index };
      const fullMessage = { ...simpleMessage, data };

      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._complexData } = data;
      const transfer = getTransferables(_complexData, true) as Transferable[] | TransferListItem[];
      
      const _port = (port as MessagePort | NodeMessagePort);
      _port.postMessage(simpleMessage);
      return await Promise.resolve(data);
    },

    "postMessage (getTransferables) (transfer)": async function (
      port: MessagePort | NodeMessagePort | typeof self | typeof globalThis = globalThis, 
      _data: IIteration
    ) {
      const { name, variant, index, data } = _data;
      const simpleMessage = { name, variant, index };
      const fullMessage = { ...simpleMessage, data };

      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._complexData } = data;
      const transfer = getTransferables(_complexData, true) as Transferable[] | TransferListItem[];

      const _port = (port as MessagePort | NodeMessagePort);
      _port.postMessage(fullMessage, transfer as any);
      return await Promise.resolve(data);
    },

    "postMessage (getTransferable*)": async function (
      port: MessagePort | NodeMessagePort | typeof self | typeof globalThis = globalThis, 
      _data: IIteration
    ) {
      const { name, variant, index, data } = _data;
      const simpleMessage = { name, variant, index };
      const fullMessage = { ...simpleMessage, data };

      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._complexData } = data;
      const transfer = Array.from(getTransferable(_complexData, true)) as Transferable[] | TransferListItem[];

      const _port = (port as MessagePort | NodeMessagePort);
      _port.postMessage(simpleMessage);
      return await Promise.resolve(data);
    },

    "postMessage (getTransferable*) (transfer)": async function (
      port: MessagePort | NodeMessagePort | typeof self | typeof globalThis = globalThis, 
      _data: IIteration
    ) {
      const { name, variant, index, data } = _data;
      const simpleMessage = { name, variant, index };
      const fullMessage = { ...simpleMessage, data };

      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._complexData } = data;
      const transfer = Array.from(getTransferable(_complexData, true)) as Transferable[] | TransferListItem[];

      const _port = (port as MessagePort | NodeMessagePort);
      _port.postMessage(fullMessage, transfer as any);
      return await Promise.resolve(data);
    }
  };
}


export const queue = new Map<string, ReturnType<typeof withResolvers>>();
export async function AsyncPostMessagePromise(
  port: MessagePort | NodeMessagePort | Worker | NodeWorker | typeof self | typeof globalThis = globalThis,
  { name, index, variant, data, }: IIteration
) {
  const queueKey = `${name}-${variant}-${index}`;
  const simpleMessage = { name, variant, index };
  const fullMessage = { ...simpleMessage, data };

  const promise = withResolvers();
  queue.set(queueKey, promise);

  try {
    const _port = (port as MessagePort | NodeMessagePort | Worker | NodeWorker);
    const transfer = data.transferable as Transferable[] | TransferListItem[];
    (_port as MessagePort | NodeMessagePort).postMessage(fullMessage, transfer as any);
  } catch (e) {
    console.warn("Warn", e)
  }

  return await promise.promise;
}


export function ListenPostMessageRecieverSetup(
  port: MessagePort | NodeMessagePort | typeof self | typeof globalThis = globalThis,
  variantsFn: ReturnType<typeof CreatePostMessageVariants>
) {
  const _port = (port as MessagePort | NodeMessagePort);
  const onmessage = async ({ data: _data }: MessageEvent<IIteration>) => {
    const { name, variant, index } = _data;
    try {
      // @ts-ignore variantsFn is struggling to accept the variant key
      await variantsFn[variant](_port, _data);
    } catch (e) {
      const simpleMessage = { name, variant, index, error: String(e) };
      _port.postMessage(simpleMessage);
      console.warn(e);
    }
  }

  if ((port as NodeMessagePort)?.on) {
    (port as NodeMessagePort)?.on?.("message", 
      (data) => onmessage({ data } as MessageEvent<IIteration>)
    );
  } else {
    (port as MessagePort).onmessage ??= onmessage;
  }
  _port?.start?.();
}



export function ListenPostMessageSenderSetup(
  port: MessagePort | NodeMessagePort | Worker | NodeWorker | typeof self | typeof globalThis = globalThis,
) {
  const _port = (port as MessagePort | NodeMessagePort | Worker | NodeWorker);
  const onmessage = ({ data: _data }: MessageEvent<IIteration>) => {
    const { name, variant, index, data, error } = _data;

    const queueKey = `${name}-${variant}-${index}`;
    const { resolve, reject } = queue.get(queueKey) ?? {};

    if (!error) resolve?.(data);
    else reject?.(error);
  }

  if ((port as NodeMessagePort)?.on) {
    (port as NodeMessagePort)?.on?.("message",
      (data) => onmessage({ data } as MessageEvent<IIteration>)
    );
  } else {
    (port as MessagePort).onmessage ??= onmessage;
  }
  (_port as MessagePort | NodeMessagePort)?.start?.();
}