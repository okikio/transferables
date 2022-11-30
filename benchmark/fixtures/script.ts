import postMessageBenchmark from "./postMessage";
import structuredCloneBenchmark from "./structuredClone";

import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';

const structuredCloneBtn: HTMLButtonElement = document.querySelector("#structuredClone");
const postMessageBtn: HTMLButtonElement = document.querySelector("#postMessage");

const structuredCloneResultEl: HTMLDivElement = document.createElement("div");
const postMessageResultEl: HTMLDivElement = document.createElement("div");

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

postMessageBtn?.addEventListener('click', async function (e: MouseEvent) {
  const result = await postMessageBenchmark(e);
  postMessageResultEl.id = "postMessageResult";
  postMessageResultEl.dataset.value = result;
  postMessageResultEl.innerHTML = micromark(result, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()]
  });
  document.body.appendChild(postMessageResultEl);
})