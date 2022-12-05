/// <reference lib="webworker" />
import { getTransferable, getTransferables, hasTransferables } from "../../src/index";
import { registerMessageListener } from "./messagechannel";

registerMessageListener(self, {
  getTransferable, 
  getTransferables, 
  hasTransferables
})