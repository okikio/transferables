import type { GenerateStub } from "./_utils.ts";
import type {
  getTransferable as transferable,
  getTransferables as transferables,
  hasTransferables as has
} from "../../src/mod.ts";

export interface ITransferables {
  getTransferable: typeof transferable,
  getTransferables: typeof transferables,
  hasTransferables: typeof has,
}

export interface IIteration {
  name: string;
  variant: string;
  index: number;
  error?: string;
  data: ReturnType<typeof GenerateStub>;
}