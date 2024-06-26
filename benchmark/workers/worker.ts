/// <reference lib="webworker" />
import { CreatePostMessageVariants, ListenPostMessageRecieverSetup } from "../utils/_postmessage.ts";
import { getTransferable, getTransferables, hasTransferables } from "../../src/mod.ts";

const variantsFn = CreatePostMessageVariants({
  hasTransferables, getTransferable, getTransferables
});
ListenPostMessageRecieverSetup(self, variantsFn);