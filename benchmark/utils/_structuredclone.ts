import type { ITransferables } from "./_types.d.ts";
import type { GenerateStub } from "./_utils.ts";

export function CreateStructuredCloneVariants(
  { getTransferable, getTransferables, hasTransferables }: ITransferables
) {
  return {
    async hasTransferables(data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      hasTransferables(_data, true);
      await Promise.resolve();
    },

    "structuredClone (no transfer)": async function (data: ReturnType<typeof GenerateStub>) {
      structuredClone(data);
      await Promise.resolve();
    },

    "structuredClone (manually) (transfer)": async function (data: ReturnType<typeof GenerateStub>) {
      structuredClone(data, { transfer: data.transferable });
      await Promise.resolve();
    },

    "structuredClone (getTransferables)": async function (data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      getTransferables(_data, true) as Transferable[];
      await Promise.resolve();
    },

    "structuredClone (getTransferables) (transfer)": async function (data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      const transfer = getTransferables(_data, true) as Transferable[];
      structuredClone(data, { transfer });
      await Promise.resolve();
    },

    "structuredClone (getTransferable*)": async function (data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      Array.from(getTransferable(_data, true)) as Transferable[];
      await Promise.resolve();
    },

    "structuredClone (getTransferable*) (transfer)": async function (data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      const transfer = Array.from(getTransferable(_data, true)) as Transferable[];
      structuredClone(data, { transfer });
      await Promise.resolve();
    }
  };
}
