"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const A=Object.getPrototypeOf(Int8Array),S=globalThis.AudioData,w=globalThis.VideoFrame,E=globalThis.OffscreenCanvas,O=globalThis.RTCDataChannel,T="ReadableStream"in globalThis,b="WritableStream"in globalThis,C="TransformStream"in globalThis,g="MessageChannel"in globalThis,M="MessagePort"in globalThis,v="ArrayBuffer"in globalThis,D="AudioData"in globalThis,R="ImageBitmap"in globalThis,x="VideoFrame"in globalThis,B="OffscreenCanvas"in globalThis,P="RTCDataChannel"in globalThis,y="structuredClone"in globalThis,V={ReadableStreamExists:T,WritableStreamExists:b,TransformStreamExists:C,MessageChannelExists:g,MessagePortExists:M,ArrayBufferExists:v,AudioDataExists:D,ImageBitmapExists:R,VideoFrameExists:x,OffscreenCanvasExists:B,RTCDataChannelExists:P};async function F(){async function t(){try{if(!g)return!1;const s=new MessageChannel,o={port1:s.port1},i=y?structuredClone(o,{transfer:[s.port1]}):o,r=new MessageChannel,a={port1:i.port1};await new Promise(e=>{r.port1.postMessage(a,[a.port1]),r.port1.onmessage=()=>{e()},r.port2.onmessage=({data:l})=>{r.port2.postMessage(l,[l.port1])}}),r.port1.close()}catch(s){return console.warn(s),!1}return!0}async function f(){try{if(!T||!b||!C||!g&&!y)return!1;const s={readonly:new ReadableStream,writeonly:new WritableStream,tranformonly:new TransformStream},o=y?structuredClone(s,{transfer:[s.readonly,s.writeonly,s.tranformonly]}):s;if(g){const i=new MessageChannel,r=o;await new Promise(a=>{i.port1.postMessage(r,[r.readonly,r.writeonly,r.tranformonly]),i.port1.onmessage=()=>{a()},i.port2.onmessage=({data:e})=>{i.port2.postMessage(e,[e.readonly,e.writeonly,e.tranformonly].filter(l=>l!==void 0))}}),i.port1.close()}}catch(s){return console.warn(s),!1}return!0}const[c,n]=await Promise.all([t(),f()]);return{channel:c,streams:n}}function d(t){return typeof t=="object"&&t!==null||typeof t=="function"}function h(t){return t instanceof A||t instanceof DataView}function u(t){return T&&t instanceof ReadableStream||b&&t instanceof WritableStream||C&&t instanceof TransformStream}function m(t){return g&&t instanceof MessageChannel}function p(t){return v&&t instanceof ArrayBuffer||M&&t instanceof MessagePort||D&&t instanceof S||R&&t instanceof ImageBitmap||x&&t instanceof w||B&&t instanceof E||P&&t instanceof O}function q(t){return Array.from(new Set(t))}function I(t,f=!1,c=1e4){const n=new Set([]),s=[[t]];for(let o=0;o<s.length;o++){const i=s[o],r=i.length;for(let a=0;a<r;a++){const e=i[a];if(h(e))n.add(e.buffer);else if(p(e))n.add(e);else if(m(e))n.add(e.port1),n.add(e.port2);else if(f&&u(e))n.add(e);else if(!u(e)&&d(e)){const l=Array.isArray(e)?e:Object.values(e);l.length&&s.push(l)}}if(--c<=0)break}return Array.from(n)}function*L(t,f=!1,c=1e4){const n=new Set([]),s=[[t]];for(let o=0;o<s.length;o++){const i=s[o],r=i.length;for(let a=0;a<r;a++){const e=i[a];if(!n.has(e)){if(h(e)){n.add(e);const{buffer:l}=e;if(n.has(l))continue;yield l,n.add(l)}else if(p(e))yield e,n.add(e);else if(m(e)){if(n.add(e),n.has(e.port1)||n.has(e.port2))continue;yield e.port1,yield e.port2,n.add(e.port1),n.add(e.port2)}else if(f&&u(e))yield e,n.add(e);else if(!u(e)&&d(e)){const l=Array.isArray(e)?e:Object.values(e);l.length&&s.push(l)}}}if(--c<=0)break}return null}function j(t,f=!1,c=1e4){const n=[[t]];for(let s=0;s<n.length;s++){const o=n[s],i=o.length;for(let r=0;r<i;r++){const a=o[r];if(h(a))return!0;if(p(a))return!0;if(m(a))return!0;if(f&&u(a))return!0;if(!u(a)&&d(a)){const e=Array.isArray(a)?a:Object.values(a);e.length&&n.push(e)}}if(--c<=0)break}return!1}exports.AVAILABLE_TRANSFERABLE_OBJECTS=V;exports.AudioData=S;exports.OffscreenCanvas=E;exports.RTCDataChannel=O;exports.TypedArray=A;exports.VideoFrame=w;exports.filterOutDuplicates=q;exports.getTransferable=L;exports.getTransferables=I;exports.hasTransferables=j;exports.isMessageChannel=m;exports.isObject=d;exports.isStream=u;exports.isSupported=F;exports.isTransferable=p;exports.isTypedArray=h;
