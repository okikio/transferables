/// <reference lib="webworker" />
import { getTransferable, getTransferables, hasTransferables } from "../../src/mod.ts";
import { registerMessageListener } from "./messagechannel.ts";

registerMessageListener(self, {
  getTransferable, 
  getTransferables, 
  hasTransferables
})