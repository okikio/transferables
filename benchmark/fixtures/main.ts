import postMessageMessageChannelBenchmark from "./postMessageMessageChannel";
import postMessageWorkerBenchmark from "./postMessageWorker";
import structuredCloneBenchmark from "./structuredClone";

import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';

export const structuredCloneBtn: HTMLButtonElement = document.querySelector("#structuredClone");
export const postMessageMessageChannelBtn: HTMLButtonElement = document.querySelector("#postMessageMessageChannel");
export const postMessageWorkerBtn: HTMLButtonElement = document.querySelector("#postMessageWorker");

export const structuredCloneResultEl: HTMLDivElement = document.createElement("div");
export const postMessageMessageChannelResultEl: HTMLDivElement = document.createElement("div");
export const postMessageWorkerResultEl: HTMLDivElement = document.createElement("div");

structuredCloneBtn?.addEventListener('click', async function (e: MouseEvent) {
  const result = await structuredCloneBenchmark(e);
  structuredCloneResultEl.id = "structuredCloneResult";
  structuredCloneResultEl.dataset.value = result;
  structuredCloneResultEl.innerHTML = micromark(result, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()]
  });
  document.body.appendChild(structuredCloneResultEl);
})

postMessageMessageChannelBtn?.addEventListener('click', async function (e: MouseEvent) {
  const result = await postMessageMessageChannelBenchmark(e);
  postMessageMessageChannelResultEl.id = "postMessageMessageChannel";
  postMessageMessageChannelResultEl.dataset.value = result;
  postMessageMessageChannelResultEl.innerHTML = micromark(result, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()]
  });
  document.body.appendChild(postMessageMessageChannelResultEl);
})

postMessageWorkerBtn?.addEventListener('click', async function (e: MouseEvent) {
  const result = await postMessageWorkerBenchmark(e);
  postMessageWorkerResultEl.id = "postMessageWorkerResult";
  postMessageWorkerResultEl.dataset.value = result;
  postMessageWorkerResultEl.innerHTML = micromark(result, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()]
  });
  document.body.appendChild(postMessageWorkerResultEl);
})