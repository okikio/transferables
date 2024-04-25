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
      return await Promise.resolve(data);
    },

    "structuredClone (no transfer)": async function (data: ReturnType<typeof GenerateStub>) {
      return await Promise.resolve(
        structuredClone(data)
      );
    },

    "structuredClone (manually) (transfer)": async function (data: ReturnType<typeof GenerateStub>) {
      return await Promise.resolve(
        structuredClone(data, { transfer: data.transferable })
      );
    },

    "structuredClone (getTransferables)": async function (data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      const transfer = getTransferables(_data, true) as Transferable[];
      return await Promise.resolve(data);
    },

    "structuredClone (getTransferables) (transfer)": async function (data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      const transfer = getTransferables(_data, true) as Transferable[];
      return await Promise.resolve(
        structuredClone(data, { transfer })
      );
    },

    "structuredClone (getTransferable*)": async function (data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      const transfer = Array.from(getTransferable(_data, true)) as Transferable[];
      return await Promise.resolve(data);
    },

    "structuredClone (getTransferable*) (transfer)": async function (data: ReturnType<typeof GenerateStub>) {
      // We don't want to make it too easy to find all the transferables
      const { transferable, ..._data } = data;
      const transfer = Array.from(getTransferable(_data, true)) as Transferable[];
      return await Promise.resolve(
        structuredClone(data, { transfer })
      );
    }
  };
}
