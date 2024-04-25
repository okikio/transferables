/// <reference lib="webworker" />
import { CreatePostMessageVariants, ListenPostMessageRecieverSetup } from "../utils/_postmessage.ts";
import { getTransferable, getTransferables, hasTransferables } from "../../src/mod.ts";
import { parentPort } from "node:worker_threads";

const variantsFn = CreatePostMessageVariants({
  hasTransferables, getTransferable, getTransferables
});
ListenPostMessageRecieverSetup(parentPort!, variantsFn);