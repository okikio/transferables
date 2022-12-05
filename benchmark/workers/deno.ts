/// <reference lib="webworker" />
import { getTransferable, getTransferables, hasTransferables } from "../../src/index.ts";
import { registerMessageListener } from "./messagechannel.ts";

registerMessageListener(self, {
  getTransferable,
  getTransferables,
  hasTransferables
})