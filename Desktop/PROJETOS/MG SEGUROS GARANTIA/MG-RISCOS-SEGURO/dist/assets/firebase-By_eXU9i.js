const Eh=()=>{};var ia={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Th=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,_=o>>2,T=(o&3)<<4|u>>4;let A=(u&15)<<2|f>>6,S=f&63;h||(S=64,a||(A=64)),r.push(t[_],t[T],t[A],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Th(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||T==null)throw new Ih;const A=o<<2|u>>4;if(r.push(A),f!==64){const S=u<<4&240|f>>2;if(r.push(S),T!==64){const C=f<<6&192|T;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ih extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wh=function(n){const e=bl(n);return Pl.encodeByteArray(e,!0)},Dr=function(n){return wh(n).replace(/\./g,"")},Sl=function(n){try{return Pl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=()=>Ah().__FIREBASE_DEFAULTS__,bh=()=>{if(typeof process>"u"||typeof ia>"u")return;const n=ia.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ph=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sl(n[1]);return e&&JSON.parse(e)},Xr=()=>{try{return Eh()||Rh()||bh()||Ph()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cl=n=>{var e,t;return(t=(e=Xr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kl=n=>{const e=Cl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Dl=()=>{var n;return(n=Xr())===null||n===void 0?void 0:n.config},Nl=n=>{var e;return(e=Xr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n){return n.endsWith(".cloudworkstations.dev")}async function fs(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dr(JSON.stringify(t)),Dr(JSON.stringify(a)),""].join(".")}const Rn={};function Ch(){const n={prod:[],emulator:[]};for(const e of Object.keys(Rn))Rn[e]?n.emulator.push(e):n.prod.push(e);return n}function kh(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let sa=!1;function ps(n,e){if(typeof window>"u"||typeof document>"u"||!Lt(window.location.host)||Rn[n]===e||Rn[n]||sa)return;Rn[n]=e;function t(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=Ch().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,S){A.setAttribute("width","24"),A.setAttribute("id",S),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function f(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{sa=!0,a()},A}function _(A,S){A.setAttribute("id",S),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=kh(r),S=t("text"),C=document.getElementById(S)||document.createElement("span"),O=t("learnmore"),D=document.getElementById(O)||document.createElement("a"),$=t("preprendIcon"),M=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const x=A.element;u(x),_(D,O);const B=f();h(M,$),x.append(M,C,D,B),document.body.appendChild(x)}o?(C.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Nh(){var n;const e=(n=Xr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mh(){const n=ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xh(){return!Nh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uh(){try{return typeof indexedDB=="object"}catch{return!1}}function Fh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="FirebaseError";class $e extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bh,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?jh(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new $e(i,u,r)}}function jh(n,e){return n.replace($h,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $h=/\{\$([^}]+)}/g;function Hh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(oa(o)&&oa(a)){if(!Pt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function oa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zh(n,e){const t=new qh(n,e);return t.subscribe.bind(t)}class qh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Vi),i.error===void 0&&(i.error=Vi),i.complete===void 0&&(i.complete=Vi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n){return n&&n._delegate?n._delegate:n}class ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qh(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kh(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kh(n){return n===Et?void 0:n}function Qh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Jh={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Yh=j.INFO,Zh={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},ed=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Zh[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gs{constructor(e){this.name=e,this._logLevel=Yh,this._logHandler=ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const td=(n,e)=>e.some(t=>n instanceof t);let aa,la;function nd(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rd(){return la||(la=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vl=new WeakMap,Gi=new WeakMap,Ll=new WeakMap,Li=new WeakMap,ms=new WeakMap;function id(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(lt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vl.set(t,n)}).catch(()=>{}),ms.set(e,n),e}function sd(n){if(Gi.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Gi.set(n,e)}let Wi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ll.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function od(n){Wi=n(Wi)}function ad(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Mi(this),e,...t);return Ll.set(r,e.sort?e.sort():[e]),lt(r)}:rd().includes(n)?function(...e){return n.apply(Mi(this),e),lt(Vl.get(this))}:function(...e){return lt(n.apply(Mi(this),e))}}function ld(n){return typeof n=="function"?ad(n):(n instanceof IDBTransaction&&sd(n),td(n,nd())?new Proxy(n,Wi):n)}function lt(n){if(n instanceof IDBRequest)return id(n);if(Li.has(n))return Li.get(n);const e=ld(n);return e!==n&&(Li.set(n,e),ms.set(e,n)),e}const Mi=n=>ms.get(n);function cd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=lt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(lt(a.result),h.oldVersion,h.newVersion,lt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const ud=["get","getKey","getAll","getAllKeys","count"],hd=["put","add","delete","clear"],xi=new Map;function ca(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xi.get(e))return xi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=hd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ud.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),i&&h.done]))[0]};return xi.set(e,o),o}od(n=>({...n,get:(e,t,r)=>ca(e,t)||n.get(e,t,r),has:(e,t)=>!!ca(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",ua="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new gs("@firebase/app"),pd="@firebase/app-compat",gd="@firebase/analytics-compat",md="@firebase/analytics",_d="@firebase/app-check-compat",yd="@firebase/app-check",vd="@firebase/auth",Ed="@firebase/auth-compat",Td="@firebase/database",Id="@firebase/data-connect",wd="@firebase/database-compat",Ad="@firebase/functions",Rd="@firebase/functions-compat",bd="@firebase/installations",Pd="@firebase/installations-compat",Sd="@firebase/messaging",Cd="@firebase/messaging-compat",kd="@firebase/performance",Dd="@firebase/performance-compat",Nd="@firebase/remote-config",Od="@firebase/remote-config-compat",Vd="@firebase/storage",Ld="@firebase/storage-compat",Md="@firebase/firestore",xd="@firebase/ai",Ud="@firebase/firestore-compat",Fd="firebase",Bd="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]",jd={[Ki]:"fire-core",[pd]:"fire-core-compat",[md]:"fire-analytics",[gd]:"fire-analytics-compat",[yd]:"fire-app-check",[_d]:"fire-app-check-compat",[vd]:"fire-auth",[Ed]:"fire-auth-compat",[Td]:"fire-rtdb",[Id]:"fire-data-connect",[wd]:"fire-rtdb-compat",[Ad]:"fire-fn",[Rd]:"fire-fn-compat",[bd]:"fire-iid",[Pd]:"fire-iid-compat",[Sd]:"fire-fcm",[Cd]:"fire-fcm-compat",[kd]:"fire-perf",[Dd]:"fire-perf-compat",[Nd]:"fire-rc",[Od]:"fire-rc-compat",[Vd]:"fire-gcs",[Ld]:"fire-gcs-compat",[Md]:"fire-fst",[Ud]:"fire-fst-compat",[xd]:"fire-vertex","fire-js":"fire-js",[Fd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Map,$d=new Map,Xi=new Map;function ha(n,e){try{n.container.addComponent(e)}catch(t){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function St(n){const e=n.name;if(Xi.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;Xi.set(e,n);for(const t of Nr.values())ha(t,n);for(const t of $d.values())ha(t,n);return!0}function Jr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Se(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ct=new Bn("app","Firebase",Hd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=Bd;function qd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qi,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw ct.create("bad-app-name",{appName:String(i)});if(t||(t=Dl()),!t)throw ct.create("no-options");const o=Nr.get(i);if(o){if(Pt(t,o.options)&&Pt(r,o.config))return o;throw ct.create("duplicate-app",{appName:i})}const a=new Xh(i);for(const h of Xi.values())a.addComponent(h);const u=new zd(t,r,a);return Nr.set(i,u),u}function _s(n=Qi){const e=Nr.get(n);if(!e&&n===Qi&&Dl())return qd();if(!e)throw ct.create("no-app",{appName:n});return e}function xe(n,e,t){var r;let i=(r=jd[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(u.join(" "));return}St(new ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="firebase-heartbeat-database",Wd=1,Nn="firebase-heartbeat-store";let Ui=null;function Ml(){return Ui||(Ui=cd(Gd,Wd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nn)}catch(t){console.warn(t)}}}}).catch(n=>{throw ct.create("idb-open",{originalErrorMessage:n.message})})),Ui}async function Kd(n){try{const t=(await Ml()).transaction(Nn),r=await t.objectStore(Nn).get(xl(n));return await t.done,r}catch(e){if(e instanceof $e)Xe.warn(e.message);else{const t=ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xe.warn(t.message)}}}async function da(n,e){try{const r=(await Ml()).transaction(Nn,"readwrite");await r.objectStore(Nn).put(e,xl(n)),await r.done}catch(t){if(t instanceof $e)Xe.warn(t.message);else{const r=ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xe.warn(r.message)}}}function xl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=1024,Xd=30;class Jd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Xd){const a=ef(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fa(),{heartbeatsToSend:r,unsentEntries:i}=Yd(this._heartbeatsCache.heartbeats),o=Dr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Xe.warn(t),""}}}function fa(){return new Date().toISOString().substring(0,10)}function Yd(n,e=Qd){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),pa(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),pa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uh()?Fh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return da(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return da(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pa(n){return Dr(JSON.stringify({version:2,heartbeats:n})).length}function ef(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n){St(new ht("platform-logger",e=>new dd(e),"PRIVATE")),St(new ht("heartbeat",e=>new Jd(e),"PRIVATE")),xe(Ki,ua,n),xe(Ki,ua,"esm2017"),xe("fire-js","")}tf("");function ys(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ul(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nf=Ul,Fl=new Bn("auth","Firebase",Ul());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new gs("@firebase/auth");function rf(n,...e){Or.logLevel<=j.WARN&&Or.warn(`Auth (${Mt}): ${n}`,...e)}function wr(n,...e){Or.logLevel<=j.ERROR&&Or.error(`Auth (${Mt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,...e){throw Es(n,...e)}function Ve(n,...e){return Es(n,...e)}function vs(n,e,t){const r=Object.assign(Object.assign({},nf()),{[e]:t});return new Bn("auth","Firebase",r).create(e,{appName:n.name})}function wt(n){return vs(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sf(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Fe(n,"argument-error"),vs(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Es(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Fl.create(n,...e)}function L(n,e,...t){if(!n)throw Es(e,...t)}function Ge(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wr(e),new Error(e)}function Je(n,e){n||Ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function of(){return ga()==="http:"||ga()==="https:"}function ga(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(of()||Vh()||"connection"in navigator)?navigator.onLine:!0}function lf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.shortDelay=e,this.longDelay=t,Je(t>e,"Short delay should be less than long delay!"),this.isMobile=Dh()||Lh()}get(){return af()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n,e){Je(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hf=new $n(3e4,6e4);function Is(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tn(n,e,t,r,i={}){return jl(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=jn(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:h},o);return Oh()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Lt(n.emulatorConfig.host)&&(f.credentials="include"),Bl.fetch()(await $l(n,n.config.apiHost,t,u),f)})}async function jl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cf),e);try{const i=new ff(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw gr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw gr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw gr(n,"user-disabled",a);const _=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw vs(n,_,f);Fe(n,_)}}catch(i){if(i instanceof $e)throw i;Fe(n,"network-request-failed",{message:String(i)})}}async function df(n,e,t,r,i={}){const o=await tn(n,e,t,r,i);return"mfaPendingCredential"in o&&Fe(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function $l(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?Ts(n.config,i):`${n.config.apiScheme}://${i}`;return uf.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class ff{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"network-request-failed")),hf.get())})}}function gr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ve(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(n,e){return tn(n,"POST","/v1/accounts:delete",e)}async function Vr(n,e){return tn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gf(n,e=!1){const t=ve(n),r=await t.getIdToken(e),i=ws(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:bn(Fi(i.auth_time)),issuedAtTime:bn(Fi(i.iat)),expirationTime:bn(Fi(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Fi(n){return Number(n)*1e3}function ws(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return wr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sl(t);return i?JSON.parse(i):(wr("Failed to decode base64 JWT payload"),null)}catch(i){return wr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ma(n){const e=ws(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $e&&mf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await On(n,Vr(t,{idToken:r}));L(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Hl(o.providerUserInfo):[],u=vf(n.providerData,a),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),_=h?f:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Yi(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,T)}async function yf(n){const e=ve(n);await Lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vf(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hl(n){return n.map(e=>{var{providerId:t}=e,r=ys(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(n,e){const t=await jl(n,{},async()=>{const r=jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await $l(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Bl.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tf(n,e){return tn(n,"POST","/v2/accounts:revokeToken",Is(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ma(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=ma(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Ef(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new qt;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qt,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ne{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=ys(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _f(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await On(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gf(this,e)}reload(){return yf(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Se(this.auth.app))return Promise.reject(wt(this.auth));const e=await this.getIdToken();return await On(this,pf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,f,_;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(u=t.tenantId)!==null&&u!==void 0?u:void 0,D=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,$=(f=t.createdAt)!==null&&f!==void 0?f:void 0,M=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:x,emailVerified:B,isAnonymous:Ee,providerData:X,stsTokenManager:v}=t;L(x&&v,e,"internal-error");const p=qt.fromJSON(this.name,v);L(typeof x=="string",e,"internal-error"),nt(T,e.name),nt(A,e.name),L(typeof B=="boolean",e,"internal-error"),L(typeof Ee=="boolean",e,"internal-error"),nt(S,e.name),nt(C,e.name),nt(O,e.name),nt(D,e.name),nt($,e.name),nt(M,e.name);const m=new Ne({uid:x,auth:e,email:A,emailVerified:B,displayName:T,isAnonymous:Ee,photoURL:C,phoneNumber:S,tenantId:O,stsTokenManager:p,createdAt:$,lastLoginAt:M});return X&&Array.isArray(X)&&(m.providerData=X.map(y=>Object.assign({},y))),D&&(m._redirectEventId=D),m}static async _fromIdTokenResponse(e,t,r=!1){const i=new qt;i.updateFromServerResponse(t);const o=new Ne({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Lr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Hl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new qt;u.updateFromIdToken(r);const h=new Ne({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Map;function We(n){Je(n instanceof Function,"Expected a class definition");let e=_a.get(n);return e?(Je(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_a.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zl.type="NONE";const ya=zl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n,e,t){return`firebase:${n}:${e}:${t}`}class Gt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ar(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ar("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Vr(this.auth,{idToken:e}).catch(()=>{});return t?Ne._fromGetAccountInfoResponse(this.auth,t,e):null}return Ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gt(We(ya),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||We(ya);const a=Ar(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const _=await f._get(a);if(_){let T;if(typeof _=="string"){const A=await Vr(e,{idToken:_}).catch(()=>{});if(!A)break;T=await Ne._fromGetAccountInfoResponse(e,A,_)}else T=Ne._fromJSON(e,_);f!==o&&(u=T),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Gt(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Gt(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ql(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xl(e))return"Blackberry";if(Jl(e))return"Webos";if(Gl(e))return"Safari";if((e.includes("chrome/")||Wl(e))&&!e.includes("edge/"))return"Chrome";if(Ql(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ql(n=ye()){return/firefox\//i.test(n)}function Gl(n=ye()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wl(n=ye()){return/crios\//i.test(n)}function Kl(n=ye()){return/iemobile/i.test(n)}function Ql(n=ye()){return/android/i.test(n)}function Xl(n=ye()){return/blackberry/i.test(n)}function Jl(n=ye()){return/webos/i.test(n)}function As(n=ye()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function If(n=ye()){var e;return As(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wf(){return Mh()&&document.documentMode===10}function Yl(n=ye()){return As(n)||Ql(n)||Jl(n)||Xl(n)||/windows phone/i.test(n)||Kl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n,e=[]){let t;switch(n){case"Browser":t=va(ye());break;case"Worker":t=`${va(ye())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rf(n,e={}){return tn(n,"GET","/v2/passwordPolicy",Is(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=6;class Pf{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:bf,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new Af(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Gt.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vr(this,{idToken:e}),r=await Ne._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Se(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Se(this.app))return Promise.reject(wt(this));const t=e?ve(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Se(this.app)?Promise.reject(wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Se(this.app)?Promise.reject(wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rf(this),t=new Pf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Gt.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Se(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Yr(n){return ve(n)}class Ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=zh(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cf(n){Rs=n}function kf(n){return Rs.loadJS(n)}function Df(){return Rs.gapiScript}function Nf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n,e){const t=Jr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Pt(o,e??{}))return i;Fe(i,"already-initialized")}return t.initialize({options:e})}function Vf(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lf(n,e,t){const r=Yr(n);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=ec(e),{host:a,port:u}=Mf(e),h=u===null?"":`:${u}`,f={url:`${o}//${a}${h}/`},_=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Pt(f,r.config.emulator)&&Pt(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Lt(a)?(fs(`${o}//${a}${h}`),ps("Auth",!0)):xf()}function ec(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mf(n){const e=ec(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ta(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ta(a)}}}function Ta(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,t){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(n,e){return df(n,"POST","/v1/accounts:signInWithIdp",Is(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="http://localhost";class Ct extends tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=ys(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ct(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Wt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wt(e,t)}buildRequest(){const e={requestUri:Uf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends bs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Hn{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ct._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return it.credential(t,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Hn{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Hn{constructor(){super("twitter.com")}static credential(e,t){return Ct._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ot.credential(t,r)}catch{return null}}}ot.TWITTER_SIGN_IN_METHOD="twitter.com";ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Ne._fromIdTokenResponse(e,r,i),a=Ia(r);return new Qt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ia(r);return new Qt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ia(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends $e{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Mr(e,t,r,i)}}function nc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(n,o,e,r):o})}async function Ff(n,e,t=!1){const r=await On(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(n,e,t=!1){const{auth:r}=n;if(Se(r.app))return Promise.reject(wt(r));const i="reauthenticate";try{const o=await On(n,nc(r,i,e,n),t);L(o.idToken,r,"internal-error");const a=ws(o.idToken);L(a,r,"internal-error");const{sub:u}=a;return L(n.uid===u,r,"user-mismatch"),Qt._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(n,e,t=!1){if(Se(n.app))return Promise.reject(wt(n));const r="signIn",i=await nc(n,r,e),o=await Qt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function $f(n,e,t,r){return ve(n).onIdTokenChanged(e,t,r)}function Hf(n,e,t){return ve(n).beforeAuthStateChanged(e,t)}function Yy(n,e,t,r){return ve(n).onAuthStateChanged(e,t,r)}const xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=1e3,qf=10;class ic extends rc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);wf()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qf):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ic.type="LOCAL";const Gf=ic;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sc.type="SESSION";const oc=sc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Zr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async f=>f(t.origin,o)),h=await Wf(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const f=Ps("",20);i.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(T){const A=T;if(A.data.eventId===f)switch(A.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(A.data.response);break;default:clearTimeout(_),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function Qf(n){Ue().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function Xf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Yf(){return ac()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firebaseLocalStorageDb",Zf=1,Ur="firebaseLocalStorage",cc="fbase_key";class zn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ei(n,e){return n.transaction([Ur],e?"readwrite":"readonly").objectStore(Ur)}function ep(){const n=indexedDB.deleteDatabase(lc);return new zn(n).toPromise()}function Zi(){const n=indexedDB.open(lc,Zf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ur,{keyPath:cc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ur)?e(r):(r.close(),await ep(),e(await Zi()))})})}async function wa(n,e,t){const r=ei(n,!0).put({[cc]:e,value:t});return new zn(r).toPromise()}async function tp(n,e){const t=ei(n,!1).get(e),r=await new zn(t).toPromise();return r===void 0?null:r.value}function Aa(n,e){const t=ei(n,!0).delete(e);return new zn(t).toPromise()}const np=800,rp=3;class uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>rp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance(Yf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Xf(),!this.activeServiceWorker)return;this.sender=new Kf(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zi();return await wa(e,xr,"1"),await Aa(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>wa(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Aa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ei(i,!1).getAll();return new zn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),np)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uc.type="LOCAL";const ip=uc;new $n(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n,e){return e?We(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sp(n){return jf(n.auth,new Ss(n),n.bypassAuthState)}function op(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Bf(t,new Ss(n),n.bypassAuthState)}async function ap(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Ff(t,new Ss(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sp;case"linkViaPopup":case"linkViaRedirect":return ap;case"reauthViaPopup":case"reauthViaRedirect":return op;default:Fe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new $n(2e3,1e4);async function Zy(n,e,t){if(Se(n.app))return Promise.reject(Ve(n,"operation-not-supported-in-this-environment"));const r=Yr(n);sf(n,e,bs);const i=hc(r,t);return new Tt(r,"signInViaPopup",e,i).executeNotNull()}class Tt extends dc{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Ps();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lp.get())};e()}}Tt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="pendingRedirect",Rr=new Map;class up extends dc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Rr.get(this.auth._key());if(!e){try{const r=await hp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Rr.set(this.auth._key(),e)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hp(n,e){const t=pp(e),r=fp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function dp(n,e){Rr.set(n._key(),e)}function fp(n){return We(n._redirectPersistence)}function pp(n){return Ar(cp,n.config.apiKey,n.name)}async function gp(n,e,t=!1){if(Se(n.app))return Promise.reject(wt(n));const r=Yr(n),i=hc(r,e),a=await new up(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=10*60*1e3;class _p{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ve(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ra(e))}saveEventToCache(e){this.cachedEventUids.add(Ra(e)),this.lastProcessedEventTime=Date.now()}}function Ra(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(n,e={}){return tn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tp=/^https?/;async function Ip(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vp(n);for(const t of e)try{if(wp(t))return}catch{}Fe(n,"unauthorized-domain")}function wp(n){const e=Ji(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Tp.test(t))return!1;if(Ep.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new $n(3e4,6e4);function ba(){const n=Ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Rp(n){return new Promise((e,t)=>{var r,i,o;function a(){ba(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ba(),t(Ve(n,"network-request-failed"))},timeout:Ap.get()})}if(!((i=(r=Ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ue().gapi)===null||o===void 0)&&o.load)a();else{const u=Nf("iframefcb");return Ue()[u]=()=>{gapi.load?a():t(Ve(n,"network-request-failed"))},kf(`${Df()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw br=null,e})}let br=null;function bp(n){return br=br||Rp(n),br}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new $n(5e3,15e3),Sp="__/auth/iframe",Cp="emulator/auth/iframe",kp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Np(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ts(e,Cp):`https://${n.config.authDomain}/${Sp}`,r={apiKey:e.apiKey,appName:n.name,v:Mt},i=Dp.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${jn(r).slice(1)}`}async function Op(n){const e=await bp(n),t=Ue().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:Np(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kp,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ve(n,"network-request-failed"),u=Ue().setTimeout(()=>{o(a)},Pp.get());function h(){Ue().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lp=500,Mp=600,xp="_blank",Up="http://localhost";class Pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fp(n,e,t,r=Lp,i=Mp){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},Vp),{width:r.toString(),height:i.toString(),top:o,left:a}),f=ye().toLowerCase();t&&(u=Wl(f)?xp:t),ql(f)&&(e=e||Up,h.scrollbars="yes");const _=Object.entries(h).reduce((A,[S,C])=>`${A}${S}=${C},`,"");if(If(f)&&u!=="_self")return Bp(e||"",u),new Pa(null);const T=window.open(e||"",u,_);L(T,n,"popup-blocked");try{T.focus()}catch{}return new Pa(T)}function Bp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="__/auth/handler",$p="emulator/auth/handler",Hp=encodeURIComponent("fac");async function Sa(n,e,t,r,i,o){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mt,eventId:i};if(e instanceof bs){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Hh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))a[_]=T}if(e instanceof Hn){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(a.scopes=_.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const _ of Object.keys(u))u[_]===void 0&&delete u[_];const h=await n._getAppCheckToken(),f=h?`#${Hp}=${encodeURIComponent(h)}`:"";return`${zp(n)}?${jn(u).slice(1)}${f}`}function zp({config:n}){return n.emulator?Ts(n,$p):`https://${n.authDomain}/${jp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="webStorageSupport";class qp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oc,this._completeRedirectFn=gp,this._overrideRedirectResult=dp}async _openPopup(e,t,r,i){var o;Je((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Sa(e,t,r,Ji(),i);return Fp(e,a,Ps())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Sa(e,t,r,Ji(),i);return Qf(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Je(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Op(e),r=new _p(e);return t.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bi,{type:Bi},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Bi];a!==void 0&&t(!!a),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ip(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yl()||Gl()||As()}}const Gp=qp;var Ca="@firebase/auth",ka="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qp(n){St(new ht("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zl(n)},f=new Sf(r,i,o,h);return Vf(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),St(new ht("auth-internal",e=>{const t=Yr(e.getProvider("auth").getImmediate());return(r=>new Wp(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(Ca,ka,Kp(n)),xe(Ca,ka,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=5*60,Jp=Nl("authIdTokenMaxAge")||Xp;let Da=null;const Yp=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Jp)return;const i=t==null?void 0:t.token;Da!==i&&(Da=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ev(n=_s()){const e=Jr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Of(n,{popupRedirectResolver:Gp,persistence:[ip,Gf,oc]}),r=Nl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Yp(o.toString());Hf(t,a,()=>a(t.currentUser)),$f(t,u=>a(u))}}const i=Cl("auth");return i&&Lf(t,`http://${i}`),t}function Zp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Cf({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Ve("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Zp().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qp("Browser");var eg="firebase",tg="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe(eg,tg,"app");var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(y,E,w){for(var g=Array(arguments.length-2),He=2;He<arguments.length;He++)g[He-2]=arguments[He];return p.prototype[E].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],E=v.g[2];var w=v.g[3],g=p+(w^m&(E^w))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=w+(E^p&(m^E))+y[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(m^w&(p^m))+y[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=m+(p^E&(w^p))+y[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(w^m&(E^w))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=w+(E^p&(m^E))+y[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(m^w&(p^m))+y[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=m+(p^E&(w^p))+y[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(w^m&(E^w))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=w+(E^p&(m^E))+y[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(m^w&(p^m))+y[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=m+(p^E&(w^p))+y[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(w^m&(E^w))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=w+(E^p&(m^E))+y[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(m^w&(p^m))+y[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=m+(p^E&(w^p))+y[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(E^w&(m^E))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=w+(m^E&(p^m))+y[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(w^p))+y[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=m+(w^p&(E^w))+y[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(m^E))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=w+(m^E&(p^m))+y[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(w^p))+y[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=m+(w^p&(E^w))+y[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(m^E))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=w+(m^E&(p^m))+y[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(w^p))+y[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=m+(w^p&(E^w))+y[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(m^E))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=w+(m^E&(p^m))+y[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(w^p))+y[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=m+(w^p&(E^w))+y[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(m^E^w)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=w+(p^m^E)+y[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^m)+y[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=m+(E^w^p)+y[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^w)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=w+(p^m^E)+y[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^m)+y[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=m+(E^w^p)+y[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^w)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=w+(p^m^E)+y[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^m)+y[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=m+(E^w^p)+y[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^w)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=w+(p^m^E)+y[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^m)+y[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=m+(E^w^p)+y[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(E^(m|~w))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=w+(m^(p|~E))+y[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~m))+y[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=m+(w^(E|~p))+y[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~w))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=w+(m^(p|~E))+y[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~m))+y[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=m+(w^(E|~p))+y[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~w))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=w+(m^(p|~E))+y[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~m))+y[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=m+(w^(E|~p))+y[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~w))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=w+(m^(p|~E))+y[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~m))+y[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=m+(w^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,y=this.B,E=this.h,w=0;w<p;){if(E==0)for(;w<=m;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<p;)if(y[E++]=v.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<p;)if(y[E++]=v[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)v[m++]=this.g[p]>>>y&255;return v};function o(v,p){var m=u;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function a(v,p){this.h=p;for(var m=[],y=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;y&&w==p||(m[E]=w,y=!1)}this.g=m}var u={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return T;if(0>v)return D(f(-v));for(var p=[],m=1,y=0;v>=m;y++)p[y]=v/m|0,m*=4294967296;return new a(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=T,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+w),p);8>w?(w=f(Math.pow(p,w)),y=y.j(w).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var T=h(0),A=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-D(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(O(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),m=this,y="";;){var E=B(m,p).g;m=$(m,E.j(p));var w=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=E,C(m))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=$(this,v),O(v)?-1:C(v)?0:1};function D(v){for(var p=v.g.length,m=[],y=0;y<p;y++)m[y]=~v.g[y];return new a(m,~v.h).add(A)}n.abs=function(){return O(this)?D(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0,E=0;E<=p;E++){var w=y+(this.i(E)&65535)+(v.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,w&=65535,g&=65535,m[E]=g<<16|w}return new a(m,m[m.length-1]&-2147483648?-1:0)};function $(v,p){return v.add(D(p))}n.j=function(v){if(C(this)||C(v))return T;if(O(this))return O(v)?D(this).j(D(v)):D(D(this).j(v));if(O(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var w=this.i(y)>>>16,g=this.i(y)&65535,He=v.i(E)>>>16,sn=v.i(E)&65535;m[2*y+2*E]+=g*sn,M(m,2*y+2*E),m[2*y+2*E+1]+=w*sn,M(m,2*y+2*E+1),m[2*y+2*E+1]+=g*He,M(m,2*y+2*E+1),m[2*y+2*E+2]+=w*He,M(m,2*y+2*E+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new a(m,0)};function M(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function x(v,p){this.g=v,this.h=p}function B(v,p){if(C(p))throw Error("division by zero");if(C(v))return new x(T,T);if(O(v))return p=B(D(v),p),new x(D(p.g),D(p.h));if(O(p))return p=B(v,D(p)),new x(D(p.g),p.h);if(30<v.g.length){if(O(v)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var m=A,y=p;0>=y.l(v);)m=Ee(m),y=Ee(y);var E=X(m,1),w=X(y,1);for(y=X(y,2),m=X(m,2);!C(y);){var g=w.add(y);0>=g.l(v)&&(E=E.add(m),w=g),y=X(y,1),m=X(m,1)}return p=$(v,E.j(p)),new x(E,p)}for(E=T;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(m),g=w.j(p);O(g)||0<g.l(v);)m-=y,w=f(m),g=w.j(p);C(w)&&(w=A),E=E.add(w),v=$(v,g)}return new x(E,v)}n.A=function(v){return B(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&v.i(y);return new a(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|v.i(y);return new a(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^v.i(y);return new a(m,this.h^v.h)};function Ee(v){for(var p=v.g.length+1,m=[],y=0;y<p;y++)m[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(m,v.h)}function X(v,p){var m=p>>5;p%=32;for(var y=v.g.length-m,E=[],w=0;w<y;w++)E[w]=0<p?v.i(w+m)>>>p|v.i(w+m+1)<<32-p:v.i(w+m);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=_,Cs=a}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pc,An,gc,Pr,es,mc,_c,yc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,c){return s==Array.prototype||s==Object.prototype||(s[l]=c.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof mr=="object"&&mr];for(var l=0;l<s.length;++l){var c=s[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in c))break e;c=c[I]}s=s[s.length-1],d=c[s],l=l(d),l!=d&&l!=null&&e(c,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var c=0,d=!1,I={next:function(){if(!d&&c<s.length){var R=c++;return{value:l(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function f(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function _(s,l,c){return s.call.apply(s.bind,arguments)}function T(s,l,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(l,I)}}return function(){return s.apply(l,arguments)}}function A(s,l,c){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,A.apply(null,arguments)}function S(s,l){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function C(s,l){function c(){}c.prototype=l.prototype,s.aa=l.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,I,R){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return l.prototype[I].apply(d,k)}}function O(s){const l=s.length;if(0<l){const c=Array(l);for(let d=0;d<l;d++)c[d]=s[d];return c}return[]}function D(s,l){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const I=s.length||0,R=d.length||0;s.length=I+R;for(let k=0;k<R;k++)s[I+k]=d[k]}else s.push(d)}}class ${constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(s){return/^[\s\xa0]*$/.test(s)}function x(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function B(s){return B[" "](s),s}B[" "]=function(){};var Ee=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function X(s,l,c){for(const d in s)l.call(c,s[d],d,s)}function v(s,l){for(const c in s)l.call(void 0,s[c],c,s)}function p(s){const l={};for(const c in s)l[c]=s[c];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,l){let c,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(c in d)s[c]=d[c];for(let R=0;R<m.length;R++)c=m[R],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function E(s){var l=1;s=s.split(":");const c=[];for(;0<l&&s.length;)c.push(s.shift()),l--;return s.length&&c.push(s.join(":")),c}function w(s){u.setTimeout(()=>{throw s},0)}function g(){var s=ui;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class He{constructor(){this.h=this.g=null}add(l,c){const d=sn.get();d.set(l,c),this.h?this.h.next=d:this.g=d,this.h=d}}var sn=new $(()=>new Fu,s=>s.reset());class Fu{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let on,an=!1,ui=new He,ro=()=>{const s=u.Promise.resolve(void 0);on=()=>{s.then(Bu)}};var Bu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){w(c)}var l=sn;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}an=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var ju=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return s}();function ln(s,l){if(he.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(Ee){e:{try{B(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else c=="mouseover"?l=s.fromElement:c=="mouseout"&&(l=s.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:$u[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ln.aa.h.call(this)}}C(ln,he);var $u={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Xn="closure_listenable_"+(1e6*Math.random()|0),Hu=0;function zu(s,l,c,d,I){this.listener=s,this.proxy=null,this.src=l,this.type=c,this.capture=!!d,this.ha=I,this.key=++Hu,this.da=this.fa=!1}function Jn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Yn(s){this.src=s,this.g={},this.h=0}Yn.prototype.add=function(s,l,c,d,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var k=di(s,l,d,I);return-1<k?(l=s[k],c||(l.fa=!1)):(l=new zu(l,this.src,R,!!d,I),l.fa=c,s.push(l)),l};function hi(s,l){var c=l.type;if(c in s.g){var d=s.g[c],I=Array.prototype.indexOf.call(d,l,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(Jn(l),s.g[c].length==0&&(delete s.g[c],s.h--))}}function di(s,l,c,d){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==d)return I}return-1}var fi="closure_lm_"+(1e6*Math.random()|0),pi={};function io(s,l,c,d,I){if(Array.isArray(l)){for(var R=0;R<l.length;R++)io(s,l[R],c,d,I);return null}return c=ao(c),s&&s[Xn]?s.K(l,c,f(d)?!!d.capture:!1,I):qu(s,l,c,!1,d,I)}function qu(s,l,c,d,I,R){if(!l)throw Error("Invalid event type");var k=f(I)?!!I.capture:!!I,G=mi(s);if(G||(s[fi]=G=new Yn(s)),c=G.add(l,c,d,k,R),c.proxy)return c;if(d=Gu(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)ju||(I=k),I===void 0&&(I=!1),s.addEventListener(l.toString(),d,I);else if(s.attachEvent)s.attachEvent(oo(l.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Gu(){function s(c){return l.call(s.src,s.listener,c)}const l=Wu;return s}function so(s,l,c,d,I){if(Array.isArray(l))for(var R=0;R<l.length;R++)so(s,l[R],c,d,I);else d=f(d)?!!d.capture:!!d,c=ao(c),s&&s[Xn]?(s=s.i,l=String(l).toString(),l in s.g&&(R=s.g[l],c=di(R,c,d,I),-1<c&&(Jn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[l],s.h--)))):s&&(s=mi(s))&&(l=s.g[l.toString()],s=-1,l&&(s=di(l,c,d,I)),(c=-1<s?l[s]:null)&&gi(c))}function gi(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Xn])hi(l.i,s);else{var c=s.type,d=s.proxy;l.removeEventListener?l.removeEventListener(c,d,s.capture):l.detachEvent?l.detachEvent(oo(c),d):l.addListener&&l.removeListener&&l.removeListener(d),(c=mi(l))?(hi(c,s),c.h==0&&(c.src=null,l[fi]=null)):Jn(s)}}}function oo(s){return s in pi?pi[s]:pi[s]="on"+s}function Wu(s,l){if(s.da)s=!0;else{l=new ln(l,this);var c=s.listener,d=s.ha||s.src;s.fa&&gi(s),s=c.call(d,l)}return s}function mi(s){return s=s[fi],s instanceof Yn?s:null}var _i="__closure_events_fn_"+(1e9*Math.random()>>>0);function ao(s){return typeof s=="function"?s:(s[_i]||(s[_i]=function(l){return s.handleEvent(l)}),s[_i])}function de(){Ye.call(this),this.i=new Yn(this),this.M=this,this.F=null}C(de,Ye),de.prototype[Xn]=!0,de.prototype.removeEventListener=function(s,l,c,d){so(this,s,l,c,d)};function Te(s,l){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=l.type||l,typeof l=="string")l=new he(l,s);else if(l instanceof he)l.target=l.target||s;else{var I=l;l=new he(d,s),y(l,I)}if(I=!0,c)for(var R=c.length-1;0<=R;R--){var k=l.g=c[R];I=Zn(k,d,!0,l)&&I}if(k=l.g=s,I=Zn(k,d,!0,l)&&I,I=Zn(k,d,!1,l)&&I,c)for(R=0;R<c.length;R++)k=l.g=c[R],I=Zn(k,d,!1,l)&&I}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var c=s.g[l],d=0;d<c.length;d++)Jn(c[d]);delete s.g[l],s.h--}}this.F=null},de.prototype.K=function(s,l,c,d){return this.i.add(String(s),l,!1,c,d)},de.prototype.L=function(s,l,c,d){return this.i.add(String(s),l,!0,c,d)};function Zn(s,l,c,d){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,R=0;R<l.length;++R){var k=l[R];if(k&&!k.da&&k.capture==c){var G=k.listener,oe=k.ha||k.src;k.fa&&hi(s.i,k),I=G.call(oe,d)!==!1&&I}}return I&&!d.defaultPrevented}function lo(s,l,c){if(typeof s=="function")c&&(s=A(s,c));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function co(s){s.g=lo(()=>{s.g=null,s.i&&(s.i=!1,co(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class Ku extends Ye{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:co(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cn(s){Ye.call(this),this.h=s,this.g={}}C(cn,Ye);var uo=[];function ho(s){X(s.g,function(l,c){this.g.hasOwnProperty(c)&&gi(l)},s),s.g={}}cn.prototype.N=function(){cn.aa.N.call(this),ho(this)},cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yi=u.JSON.stringify,Qu=u.JSON.parse,Xu=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function vi(){}vi.prototype.h=null;function fo(s){return s.h||(s.h=s.i())}function po(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ei(){he.call(this,"d")}C(Ei,he);function Ti(){he.call(this,"c")}C(Ti,he);var mt={},go=null;function er(){return go=go||new de}mt.La="serverreachability";function mo(s){he.call(this,mt.La,s)}C(mo,he);function hn(s){const l=er();Te(l,new mo(l))}mt.STAT_EVENT="statevent";function _o(s,l){he.call(this,mt.STAT_EVENT,s),this.stat=l}C(_o,he);function Ie(s){const l=er();Te(l,new _o(l,s))}mt.Ma="timingevent";function yo(s,l){he.call(this,mt.Ma,s),this.size=l}C(yo,he);function dn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function fn(){this.g=!0}fn.prototype.xa=function(){this.g=!1};function Ju(s,l,c,d,I,R){s.info(function(){if(s.g)if(R)for(var k="",G=R.split("&"),oe=0;oe<G.length;oe++){var q=G[oe].split("=");if(1<q.length){var fe=q[0];q=q[1];var pe=fe.split("_");k=2<=pe.length&&pe[1]=="type"?k+(fe+"="+q+"&"):k+(fe+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+l+`
`+c+`
`+k})}function Yu(s,l,c,d,I,R,k){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+l+`
`+c+`
`+R+" "+k})}function Ft(s,l,c,d){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+eh(s,c)+(d?" "+d:"")})}function Zu(s,l){s.info(function(){return"TIMEOUT: "+l})}fn.prototype.info=function(){};function eh(s,l){if(!s.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<I.length;k++)I[k]=""}}}}return yi(c)}catch{return l}}var tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ii;function nr(){}C(nr,vi),nr.prototype.g=function(){return new XMLHttpRequest},nr.prototype.i=function(){return{}},Ii=new nr;function Ze(s,l,c,d){this.j=s,this.i=l,this.l=c,this.R=d||1,this.U=new cn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Eo}function Eo(){this.i=null,this.g="",this.h=!1}var To={},wi={};function Ai(s,l,c){s.L=1,s.v=or(ze(l)),s.m=c,s.P=!0,Io(s,null)}function Io(s,l){s.F=Date.now(),rr(s),s.A=ze(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Mo(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Eo,s.g=ea(s.j,c?l:null,!s.m),0<s.O&&(s.M=new Ku(A(s.Y,s,s.g),s.O)),l=s.U,c=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(uo[0]=I.toString()),I=uo);for(var R=0;R<I.length;R++){var k=io(c,I[R],d||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),hn(),Ju(s.i,s.u,s.A,s.l,s.R,s.m)}Ze.prototype.ca=function(s){s=s.target;const l=this.M;l&&qe(s)==3?l.j():this.Y(s)},Ze.prototype.Y=function(s){try{if(s==this.g)e:{const pe=qe(this.g);var l=this.g.Ba();const $t=this.g.Z();if(!(3>pe)&&(pe!=3||this.g&&(this.h.h||this.g.oa()||Ho(this.g)))){this.J||pe!=4||l==7||(l==8||0>=$t?hn(3):hn(2)),Ri(this);var c=this.g.Z();this.X=c;t:if(wo(this)){var d=Ho(this.g);s="";var I=d.length,R=qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_t(this),pn(this);var k="";break t}this.h.i=new u.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,s+=this.h.i.decode(d[l],{stream:!(R&&l==I-1)});d.length=0,this.h.g+=s,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=c==200,Yu(this.i,this.u,this.A,this.l,this.R,pe,c),this.o){if(this.T&&!this.K){t:{if(this.g){var G,oe=this.g;if((G=oe.g?oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(G)){var q=G;break t}}q=null}if(c=q)Ft(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bi(this,c);else{this.o=!1,this.s=3,Ie(12),_t(this),pn(this);break e}}if(this.P){c=!0;let Ce;for(;!this.J&&this.C<k.length;)if(Ce=th(this,k),Ce==wi){pe==4&&(this.s=4,Ie(14),c=!1),Ft(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==To){this.s=4,Ie(15),Ft(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else Ft(this.i,this.l,Ce,null),bi(this,Ce);if(wo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||k.length!=0||this.h.h||(this.s=1,Ie(16),c=!1),this.o=this.o&&c,!c)Ft(this.i,this.l,k,"[Invalid Chunked Response]"),_t(this),pn(this);else if(0<k.length&&!this.W){this.W=!0;var fe=this.j;fe.g==this&&fe.ba&&!fe.M&&(fe.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ni(fe),fe.M=!0,Ie(11))}}else Ft(this.i,this.l,k,null),bi(this,k);pe==4&&_t(this),this.o&&!this.J&&(pe==4?Xo(this.j,this):(this.o=!1,rr(this)))}else yh(this.g),c==400&&0<k.indexOf("Unknown SID")?(this.s=3,Ie(12)):(this.s=0,Ie(13)),_t(this),pn(this)}}}catch{}finally{}};function wo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function th(s,l){var c=s.C,d=l.indexOf(`
`,c);return d==-1?wi:(c=Number(l.substring(c,d)),isNaN(c)?To:(d+=1,d+c>l.length?wi:(l=l.slice(d,d+c),s.C=d+c,l)))}Ze.prototype.cancel=function(){this.J=!0,_t(this)};function rr(s){s.S=Date.now()+s.I,Ao(s,s.I)}function Ao(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=dn(A(s.ba,s),l)}function Ri(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Ze.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Zu(this.i,this.A),this.L!=2&&(hn(),Ie(17)),_t(this),this.s=2,pn(this)):Ao(this,this.S-s)};function pn(s){s.j.G==0||s.J||Xo(s.j,s)}function _t(s){Ri(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,ho(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function bi(s,l){try{var c=s.j;if(c.G!=0&&(c.g==s||Pi(c.h,s))){if(!s.K&&Pi(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)dr(c),ur(c);else break e;Di(c),Ie(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=dn(A(c.Za,c),6e3));if(1>=Po(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else vt(c,11)}else if((s.K||c.g==s)&&dr(c),!M(l))for(I=c.Da.g.parse(l),l=0;l<I.length;l++){let q=I[l];if(c.T=q[0],q=q[1],c.G==2)if(q[0]=="c"){c.K=q[1],c.ia=q[2];const fe=q[3];fe!=null&&(c.la=fe,c.j.info("VER="+c.la));const pe=q[4];pe!=null&&(c.Aa=pe,c.j.info("SVER="+c.Aa));const $t=q[5];$t!=null&&typeof $t=="number"&&0<$t&&(d=1.5*$t,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Ce=s.g;if(Ce){const pr=Ce.g?Ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pr){var R=d.h;R.g||pr.indexOf("spdy")==-1&&pr.indexOf("quic")==-1&&pr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Si(R,R.h),R.h=null))}if(d.D){const Oi=Ce.g?Ce.g.getResponseHeader("X-HTTP-Session-Id"):null;Oi&&(d.ya=Oi,K(d.I,d.D,Oi))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var k=s;if(d.qa=Zo(d,d.J?d.ia:null,d.W),k.K){So(d.h,k);var G=k,oe=d.L;oe&&(G.I=oe),G.B&&(Ri(G),rr(G)),d.g=k}else Ko(d);0<c.i.length&&hr(c)}else q[0]!="stop"&&q[0]!="close"||vt(c,7);else c.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?vt(c,7):ki(c):q[0]!="noop"&&c.l&&c.l.ta(q),c.v=0)}}hn(4)}catch{}}var nh=class{constructor(s,l){this.g=s,this.map=l}};function Ro(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Po(s){return s.h?1:s.g?s.g.size:0}function Pi(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function Si(s,l){s.g?s.g.add(l):s.h=l}function So(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Ro.prototype.cancel=function(){if(this.i=Co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Co(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const c of s.g.values())l=l.concat(c.D);return l}return O(s.i)}function rh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],c=s.length,d=0;d<c;d++)l.push(s[d]);return l}l=[],c=0;for(d in s)l[c++]=s[d];return l}function ih(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var c=0;c<s;c++)l.push(c);return l}l=[],c=0;for(const d in s)l[c++]=d;return l}}}function ko(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var c=ih(s),d=rh(s),I=d.length,R=0;R<I;R++)l.call(void 0,d[R],c&&c[R],s)}var Do=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sh(s,l){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),I=null;if(0<=d){var R=s[c].substring(0,d);I=s[c].substring(d+1)}else R=s[c];l(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function yt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof yt){this.h=s.h,ir(this,s.j),this.o=s.o,this.g=s.g,sr(this,s.s),this.l=s.l;var l=s.i,c=new _n;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),No(this,c),this.m=s.m}else s&&(l=String(s).match(Do))?(this.h=!1,ir(this,l[1]||"",!0),this.o=gn(l[2]||""),this.g=gn(l[3]||"",!0),sr(this,l[4]),this.l=gn(l[5]||"",!0),No(this,l[6]||"",!0),this.m=gn(l[7]||"")):(this.h=!1,this.i=new _n(null,this.h))}yt.prototype.toString=function(){var s=[],l=this.j;l&&s.push(mn(l,Oo,!0),":");var c=this.g;return(c||l=="file")&&(s.push("//"),(l=this.o)&&s.push(mn(l,Oo,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(mn(c,c.charAt(0)=="/"?lh:ah,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",mn(c,uh)),s.join("")};function ze(s){return new yt(s)}function ir(s,l,c){s.j=c?gn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function sr(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function No(s,l,c){l instanceof _n?(s.i=l,hh(s.i,s.h)):(c||(l=mn(l,ch)),s.i=new _n(l,s.h))}function K(s,l,c){s.i.set(l,c)}function or(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function gn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function mn(s,l,c){return typeof s=="string"?(s=encodeURI(s).replace(l,oh),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function oh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Oo=/[#\/\?@]/g,ah=/[#\?:]/g,lh=/[#\?]/g,ch=/[#\?@]/g,uh=/#/g;function _n(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function et(s){s.g||(s.g=new Map,s.h=0,s.i&&sh(s.i,function(l,c){s.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=_n.prototype,n.add=function(s,l){et(this),this.i=null,s=Bt(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(l),this.h+=1,this};function Vo(s,l){et(s),l=Bt(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Lo(s,l){return et(s),l=Bt(s,l),s.g.has(l)}n.forEach=function(s,l){et(this),this.g.forEach(function(c,d){c.forEach(function(I){s.call(l,I,d,this)},this)},this)},n.na=function(){et(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let d=0;d<l.length;d++){const I=s[d];for(let R=0;R<I.length;R++)c.push(l[d])}return c},n.V=function(s){et(this);let l=[];if(typeof s=="string")Lo(this,s)&&(l=l.concat(this.g.get(Bt(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)l=l.concat(s[c])}return l},n.set=function(s,l){return et(this),this.i=null,s=Bt(this,s),Lo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Mo(s,l,c){Vo(s,l),0<c.length&&(s.i=null,s.g.set(Bt(s,l),O(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var d=l[c];const R=encodeURIComponent(String(d)),k=this.V(d);for(d=0;d<k.length;d++){var I=R;k[d]!==""&&(I+="="+encodeURIComponent(String(k[d]))),s.push(I)}}return this.i=s.join("&")};function Bt(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function hh(s,l){l&&!s.j&&(et(s),s.i=null,s.g.forEach(function(c,d){var I=d.toLowerCase();d!=I&&(Vo(this,d),Mo(this,I,c))},s)),s.j=l}function dh(s,l){const c=new fn;if(u.Image){const d=new Image;d.onload=S(tt,c,"TestLoadImage: loaded",!0,l,d),d.onerror=S(tt,c,"TestLoadImage: error",!1,l,d),d.onabort=S(tt,c,"TestLoadImage: abort",!1,l,d),d.ontimeout=S(tt,c,"TestLoadImage: timeout",!1,l,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else l(!1)}function fh(s,l){const c=new fn,d=new AbortController,I=setTimeout(()=>{d.abort(),tt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?tt(c,"TestPingServer: ok",!0,l):tt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),tt(c,"TestPingServer: error",!1,l)})}function tt(s,l,c,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(c)}catch{}}function ph(){this.g=new Xu}function gh(s,l,c){const d=c||"";try{ko(s,function(I,R){let k=I;f(I)&&(k=yi(I)),l.push(d+R+"="+encodeURIComponent(k))})}catch(I){throw l.push(d+"type="+encodeURIComponent("_badmap")),I}}function ar(s){this.l=s.Ub||null,this.j=s.eb||!1}C(ar,vi),ar.prototype.g=function(){return new lr(this.l,this.j)},ar.prototype.i=function(s){return function(){return s}}({});function lr(s,l){de.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(lr,de),n=lr.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,vn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function xo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?yn(this):vn(this),this.readyState==3&&xo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,yn(this))},n.Qa=function(s){this.g&&(this.response=s,yn(this))},n.ga=function(){this.g&&yn(this)};function yn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,vn(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=l.next();return s.join(`\r
`)};function vn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Uo(s){let l="";return X(s,function(c,d){l+=d,l+=":",l+=c,l+=`\r
`}),l}function Ci(s,l,c){e:{for(d in c){var d=!1;break e}d=!0}d||(c=Uo(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):K(s,l,c))}function J(s){de.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(J,de);var mh=/^https?$/i,_h=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ii.g(),this.v=this.o?fo(this.o):fo(Ii),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(R){Fo(this,R);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)c.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),I=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(_h,l,void 0))||d||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of c)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$o(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Fo(this,R)}};function Fo(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Bo(s),cr(s)}function Bo(s){s.A||(s.A=!0,Te(s,"complete"),Te(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Te(this,"complete"),Te(this,"abort"),cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cr(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?jo(this):this.bb())},n.bb=function(){jo(this)};function jo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||qe(s)!=4||s.Z()!=2)){if(s.u&&qe(s)==4)lo(s.Ea,0,s);else if(Te(s,"readystatechange"),qe(s)==4){s.h=!1;try{const k=s.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var d;if(d=k===0){var I=String(s.D).match(Do)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),d=!mh.test(I?I.toLowerCase():"")}c=d}if(c)Te(s,"complete"),Te(s,"success");else{s.m=6;try{var R=2<qe(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Bo(s)}}finally{cr(s)}}}}function cr(s,l){if(s.g){$o(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Te(s,"ready");try{c.onreadystatechange=d}catch{}}}function $o(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function qe(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<qe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),Qu(l)}};function Ho(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function yh(s){const l={};s=(s.g&&2<=qe(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(M(s[d]))continue;var c=E(s[d]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[I]||[];l[I]=R,R.push(c)}v(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function En(s,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||l}function zo(s){this.Aa=0,this.i=[],this.j=new fn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,s),this.cb=En("retryDelaySeedMs",1e4,s),this.Wa=En("forwardChannelMaxRetries",2,s),this.wa=En("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ro(s&&s.concurrentRequestLimit),this.Da=new ph,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=zo.prototype,n.la=8,n.G=1,n.connect=function(s,l,c,d){Ie(0),this.W=s,this.H=l||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Zo(this,null,this.W),hr(this)};function ki(s){if(qo(s),s.G==3){var l=s.U++,c=ze(s.I);if(K(c,"SID",s.K),K(c,"RID",l),K(c,"TYPE","terminate"),Tn(s,c),l=new Ze(s,s.j,l),l.L=2,l.v=or(ze(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=ea(l.j,null),l.g.ea(l.v)),l.F=Date.now(),rr(l)}Yo(s)}function ur(s){s.g&&(Ni(s),s.g.cancel(),s.g=null)}function qo(s){ur(s),s.u&&(u.clearTimeout(s.u),s.u=null),dr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function hr(s){if(!bo(s.h)&&!s.s){s.s=!0;var l=s.Ga;on||ro(),an||(on(),an=!0),ui.add(l,s),s.B=0}}function vh(s,l){return Po(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=dn(A(s.Ga,s,l),Jo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Ze(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=Wo(this,I,l),c=ze(this.I),K(c,"RID",s),K(c,"CVER",22),this.D&&K(c,"X-HTTP-Session-Id",this.D),Tn(this,c),R&&(this.O?l="headers="+encodeURIComponent(String(Uo(R)))+"&"+l:this.m&&Ci(c,this.m,R)),Si(this.h,I),this.Ua&&K(c,"TYPE","init"),this.P?(K(c,"$req",l),K(c,"SID","null"),I.T=!0,Ai(I,c,null)):Ai(I,c,l),this.G=2}}else this.G==3&&(s?Go(this,s):this.i.length==0||bo(this.h)||Go(this))};function Go(s,l){var c;l?c=l.l:c=s.U++;const d=ze(s.I);K(d,"SID",s.K),K(d,"RID",c),K(d,"AID",s.T),Tn(s,d),s.m&&s.o&&Ci(d,s.m,s.o),c=new Ze(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Wo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Si(s.h,c),Ai(c,d,l)}function Tn(s,l){s.H&&X(s.H,function(c,d){K(l,d,c)}),s.l&&ko({},function(c,d){K(l,d,c)})}function Wo(s,l,c){c=Math.min(s.i.length,c);var d=s.l?A(s.l.Na,s.l,s):null;e:{var I=s.i;let R=-1;for(;;){const k=["count="+c];R==-1?0<c?(R=I[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let G=!0;for(let oe=0;oe<c;oe++){let q=I[oe].g;const fe=I[oe].map;if(q-=R,0>q)R=Math.max(0,I[oe].g-100),G=!1;else try{gh(fe,k,"req"+q+"_")}catch{d&&d(fe)}}if(G){d=k.join("&");break e}}}return s=s.i.splice(0,c),l.D=s,d}function Ko(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;on||ro(),an||(on(),an=!0),ui.add(l,s),s.v=0}}function Di(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=dn(A(s.Fa,s),Jo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=dn(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ie(10),ur(this),Qo(this))};function Ni(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Qo(s){s.g=new Ze(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=ze(s.qa);K(l,"RID","rpc"),K(l,"SID",s.K),K(l,"AID",s.T),K(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(l,"TO",s.ja),K(l,"TYPE","xmlhttp"),Tn(s,l),s.m&&s.o&&Ci(l,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=or(ze(l)),c.m=null,c.P=!0,Io(c,s)}n.Za=function(){this.C!=null&&(this.C=null,ur(this),Di(this),Ie(19))};function dr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Xo(s,l){var c=null;if(s.g==l){dr(s),Ni(s),s.g=null;var d=2}else if(Pi(s.h,l))c=l.D,So(s.h,l),d=1;else return;if(s.G!=0){if(l.o)if(d==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var I=s.B;d=er(),Te(d,new yo(d,c)),hr(s)}else Ko(s);else if(I=l.s,I==3||I==0&&0<l.X||!(d==1&&vh(s,l)||d==2&&Di(s)))switch(c&&0<c.length&&(l=s.h,l.i=l.i.concat(c)),I){case 1:vt(s,5);break;case 4:vt(s,10);break;case 3:vt(s,6);break;default:vt(s,2)}}}function Jo(s,l){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*l}function vt(s,l){if(s.j.info("Error code "+l),l==2){var c=A(s.fb,s),d=s.Xa;const I=!d;d=new yt(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ir(d,"https"),or(d),I?dh(d.toString(),c):fh(d.toString(),c)}else Ie(2);s.G=0,s.l&&s.l.sa(l),Yo(s),qo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function Yo(s){if(s.G=0,s.ka=[],s.l){const l=Co(s.h);(l.length!=0||s.i.length!=0)&&(D(s.ka,l),D(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function Zo(s,l,c){var d=c instanceof yt?ze(c):new yt(c);if(d.g!="")l&&(d.g=l+"."+d.g),sr(d,d.s);else{var I=u.location;d=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var R=new yt(null);d&&ir(R,d),l&&(R.g=l),I&&sr(R,I),c&&(R.l=c),d=R}return c=s.D,l=s.ya,c&&l&&K(d,c,l),K(d,"VER",s.la),Tn(s,d),d}function ea(s,l,c){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new J(new ar({eb:c})):new J(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ta(){}n=ta.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fr(){}fr.prototype.g=function(s,l){return new be(s,l)};function be(s,l){de.call(this),this.g=new zo(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!M(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!M(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new jt(this)}C(be,de),be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){ki(this.g)},be.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=yi(s),s=c);l.i.push(new nh(l.Ya++,s)),l.G==3&&hr(l)},be.prototype.N=function(){this.g.l=null,delete this.j,ki(this.g),delete this.g,be.aa.N.call(this)};function na(s){Ei.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const c in l){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}C(na,Ei);function ra(){Ti.call(this),this.status=1}C(ra,Ti);function jt(s){this.g=s}C(jt,ta),jt.prototype.ua=function(){Te(this.g,"a")},jt.prototype.ta=function(s){Te(this.g,new na(s))},jt.prototype.sa=function(s){Te(this.g,new ra)},jt.prototype.ra=function(){Te(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,yc=function(){return new fr},_c=function(){return er()},mc=mt,es={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tr.NO_ERROR=0,tr.TIMEOUT=8,tr.HTTP_ERROR=6,Pr=tr,vo.COMPLETE="complete",gc=vo,po.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",de.prototype.listen=de.prototype.K,An=po,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,pc=J}).apply(typeof mr<"u"?mr:typeof self<"u"?self:typeof window<"u"?window:{});const Oa="@firebase/firestore",Va="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new gs("@firebase/firestore");function Ht(){return kt.logLevel}function N(n,...e){if(kt.logLevel<=j.DEBUG){const t=e.map(ks);kt.debug(`Firestore (${nn}): ${n}`,...t)}}function Dt(n,...e){if(kt.logLevel<=j.ERROR){const t=e.map(ks);kt.error(`Firestore (${nn}): ${n}`,...t)}}function ti(n,...e){if(kt.logLevel<=j.WARN){const t=e.map(ks);kt.warn(`Firestore (${nn}): ${n}`,...t)}}function ks(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,vc(n,r,t)}function vc(n,e,t){let r=`FIRESTORE (${nn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Dt(r),new Error(r)}function Z(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||vc(e,i,r)}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends $e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(me.UNAUTHENTICATED))}shutdown(){}}class rg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ig{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new At;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new At,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new At)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new Ec(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new me(e)}}class sg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class og{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new sg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class La{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ag{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Se(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new La(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new La(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=lg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function z(n,e){return n<e?-1:n>e?1:0}function ts(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return z(r,i);{const o=cg(),a=ug(o.encode(Ma(n,t)),o.encode(Ma(e,t)));return a!==0?a:z(r,i)}}t+=r>65535?2:1}return z(n.length,e.length)}function Ma(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ug(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return z(n[t],e[t]);return z(n.length,e.length)}function Xt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=-62135596800,Ua=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ua);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xa)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ua}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-xa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new se(0,0))}static max(){return new Q(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="__name__";class Le{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Le?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Le.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return z(e.length,t.length)}static compareSegments(e,t){const r=Le.isNumericId(e),i=Le.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Le.extractNumericId(e).compare(Le.extractNumericId(t)):ts(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class Y extends Le{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const hg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Le{construct(e,t,r){return new ce(e,t,r)}static isValidIdentifier(e){return hg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fa}static keyField(){return new ce([Fa])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(Y.fromString(e))}static fromName(e){return new U(Y.fromString(e).popFirst(5))}static empty(){return new U(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new Y(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=-1;function dg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new dt(i,U.empty(),e)}function fg(n){return new dt(n.readTime,n.key,Vn)}class dt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new dt(Q.min(),U.empty(),Vn)}static max(){return new dt(Q.max(),U.empty(),Vn)}}function pg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==gg)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next(_=>{a[f]=_,++u,u===o&&r(a)},_=>i(_))}})}static doWhile(e,t){return new b((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function _g(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Ns.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=-1;function Vs(n){return n==null}function Fr(n){return n===0&&1/n==-1/0}function yg(n){return typeof n=="number"&&Number.isInteger(n)&&!Fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="";function vg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ba(e)),e=Eg(n.get(t),e);return Ba(e)}function Eg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Ic:t+="";break;default:t+=o}}return t}function Ba(n){return n+Ic+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _r(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _r(this.root,e,this.comparator,!1)}getReverseIterator(){return new _r(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _r(this.root,e,this.comparator,!0)}}class _r{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ae.RED,this.left=i??ae.EMPTY,this.right=o??ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ae(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $a(this.data.getIterator())}getIteratorFrom(e){return new $a(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class $a{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new ue(ce.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Tg("Invalid base64 string: "+o):o}}(e);return new Be(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const Ig=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=Ig.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?Be.fromBase64String(n):Be.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="server_timestamp",Rc="__type__",bc="__previous_value__",Pc="__local_write_time__";function Ls(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rc])===null||t===void 0?void 0:t.stringValue)===Ac}function Ms(n){const e=n.mapValue.fields[bc];return Ls(e)?Ms(e):e}function Br(n){const e=Nt(n.mapValue.fields[Pc].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t,r,i,o,a,u,h,f,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=_}}const jr="(default)";class $r{constructor(e,t){this.projectId=e,this.database=t||jr}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===jr}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="__type__",Ag="__max__",yr={mapValue:{}},Cc="__vector__",ns="value";function Ot(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ls(n)?4:bg(n)?9007199254740991:Rg(n)?10:11:F(28295,{value:n})}function je(n,e){if(n===e)return!0;const t=Ot(n);if(t!==Ot(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Br(n).isEqual(Br(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Nt(i.timestampValue),u=Nt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Jt(i.bytesValue).isEqual(Jt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return le(i.geoPointValue.latitude)===le(o.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return le(i.integerValue)===le(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=le(i.doubleValue),u=le(o.doubleValue);return a===u?Fr(a)===Fr(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Xt(n.arrayValue.values||[],e.arrayValue.values||[],je);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(ja(a)!==ja(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!je(a[h],u[h])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function Ln(n,e){return(n.values||[]).find(t=>je(t,e))!==void 0}function Yt(n,e){if(n===e)return 0;const t=Ot(n),r=Ot(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=le(o.integerValue||o.doubleValue),h=le(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Ha(n.timestampValue,e.timestampValue);case 4:return Ha(Br(n),Br(e));case 5:return ts(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Jt(o),h=Jt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const _=z(u[f],h[f]);if(_!==0)return _}return z(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=z(le(o.latitude),le(a.latitude));return u!==0?u:z(le(o.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return za(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,f,_;const T=o.fields||{},A=a.fields||{},S=(u=T[ns])===null||u===void 0?void 0:u.arrayValue,C=(h=A[ns])===null||h===void 0?void 0:h.arrayValue,O=z(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((_=C==null?void 0:C.values)===null||_===void 0?void 0:_.length)||0);return O!==0?O:za(S,C)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===yr.mapValue&&a===yr.mapValue)return 0;if(o===yr.mapValue)return 1;if(a===yr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let T=0;T<h.length&&T<_.length;++T){const A=ts(h[T],_[T]);if(A!==0)return A;const S=Yt(u[h[T]],f[_[T]]);if(S!==0)return S}return z(h.length,_.length)}(n.mapValue,e.mapValue);default:throw F(23264,{Pe:t})}}function Ha(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=Nt(n),r=Nt(e),i=z(t.seconds,r.seconds);return i!==0?i:z(t.nanos,r.nanos)}function za(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Yt(t[i],r[i]);if(o)return o}return z(t.length,r.length)}function Zt(n){return rs(n)}function rs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Nt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=rs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${rs(t.fields[a])}`;return i+"}"}(n.mapValue):F(61005,{value:n})}function Sr(n){switch(Ot(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ms(n);return e?16+Sr(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Sr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return rn(r.fields,(o,a)=>{i+=o.length+Sr(a)}),i}(n.mapValue);default:throw F(13486,{value:n})}}function is(n){return!!n&&"integerValue"in n}function xs(n){return!!n&&"arrayValue"in n}function Cr(n){return!!n&&"mapValue"in n}function Rg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Sc])===null||t===void 0?void 0:t.stringValue)===Cc}function Pn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return rn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Pn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function bg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ag}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pn(t)}setAll(e){let t=ce.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Pn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Cr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Cr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){rn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new De(Pn(this.value))}}function kc(n){const e=[];return rn(n.fields,(t,r)=>{const i=new ce([t]);if(Cr(r)){const o=kc(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Oe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ke(e,0,Q.min(),Q.min(),Q.min(),De.empty(),0)}static newFoundDocument(e,t,r,i){return new ke(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new ke(e,2,t,Q.min(),Q.min(),De.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,Q.min(),Q.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.position=e,this.inclusive=t}}function qa(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=Yt(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ga(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!je(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{}class ie extends Dc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cg(e,t,r):t==="array-contains"?new Ng(e,r):t==="in"?new Og(e,r):t==="not-in"?new Vg(e,r):t==="array-contains-any"?new Lg(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kg(e,r):new Dg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Yt(t,this.value)):t!==null&&Ot(this.value)===Ot(t)&&this.matchesComparison(Yt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends Dc{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ft(e,t)}matches(e){return Nc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Nc(n){return n.op==="and"}function Oc(n){return Sg(n)&&Nc(n)}function Sg(n){for(const e of n.filters)if(e instanceof ft)return!1;return!0}function ss(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+Zt(n.value);if(Oc(n))return n.filters.map(e=>ss(e)).join(",");{const e=n.filters.map(t=>ss(t)).join(",");return`${n.op}(${e})`}}function Vc(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&je(r.value,i.value)}(n,e):n instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&Vc(a,i.filters[u]),!0):!1}(n,e):void F(19439)}function Lc(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${Zt(t.value)}`}(n):n instanceof ft?function(t){return t.op.toString()+" {"+t.getFilters().map(Lc).join(" ,")+"}"}(n):"Filter"}class Cg extends ie{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class kg extends ie{constructor(e,t){super(e,"in",t),this.keys=Mc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dg extends ie{constructor(e,t){super(e,"not-in",t),this.keys=Mc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Mc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class Ng extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xs(t)&&Ln(t.arrayValue,this.value)}}class Og extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ln(this.value.arrayValue,t)}}class Vg extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ln(this.value.arrayValue,t)}}class Lg extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ln(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function Wa(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Mg(n,e,t,r,i,o,a)}function Us(n){const e=W(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ss(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Zt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Zt(r)).join(",")),e.Ie=t}return e.Ie}function Fs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ga(n.startAt,e.startAt)&&Ga(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function xg(n,e,t,r,i,o,a,u){return new ni(n,e,t,r,i,o,a,u)}function Ug(n){return new ni(n)}function Ka(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fg(n){return n.collectionGroup!==null}function Sn(n){const e=W(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ue(ce.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new zr(o,r))}),t.has(ce.keyField().canonicalString())||e.Ee.push(new zr(ce.keyField(),r))}return e.Ee}function Rt(n){const e=W(n);return e.de||(e.de=Bg(e,Sn(n))),e.de}function Bg(n,e){if(n.limitType==="F")return Wa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new zr(i.field,o)});const t=n.endAt?new Hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hr(n.startAt.position,n.startAt.inclusive):null;return Wa(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function os(n,e,t){return new ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xc(n,e){return Fs(Rt(n),Rt(e))&&n.limitType===e.limitType}function Uc(n){return`${Us(Rt(n))}|lt:${n.limitType}`}function In(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Lc(i)).join(", ")}]`),Vs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Zt(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Zt(i)).join(",")),`Target(${r})`}(Rt(n))}; limitType=${n.limitType})`}function Bs(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Sn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const f=qa(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,Sn(r),i)||r.endAt&&!function(a,u,h){const f=qa(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,Sn(r),i))}(n,e)}function jg(n){return(e,t)=>{let r=!1;for(const i of Sn(n)){const o=$g(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function $g(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Yt(h,f):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return wc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Re(U.comparator);function qr(){return Hg}const Fc=new Re(U.comparator);function vr(...n){let e=Fc;for(const t of n)e=e.insert(t.key,t);return e}function Bc(n){let e=Fc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function It(){return Cn()}function jc(){return Cn()}function Cn(){return new xt(n=>n.toString(),(n,e)=>n.isEqual(e))}const zg=new Re(U.comparator),qg=new ue(U.comparator);function _e(...n){let e=qg;for(const t of n)e=e.add(t);return e}const Gg=new ue(z);function Wg(){return Gg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(e)?"-0":e}}function $c(n){return{integerValue:""+n}}function Kg(n,e){return yg(e)?$c(e):js(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this._=void 0}}function Qg(n,e,t){return n instanceof Mn?function(i,o){const a={fields:{[Rc]:{stringValue:Ac},[Pc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ls(o)&&(o=Ms(o)),o&&(a.fields[bc]=o),{mapValue:a}}(t,e):n instanceof xn?zc(n,e):n instanceof Un?qc(n,e):function(i,o){const a=Hc(i,o),u=Qa(a)+Qa(i.Re);return is(a)&&is(i.Re)?$c(u):js(i.serializer,u)}(n,e)}function Xg(n,e,t){return n instanceof xn?zc(n,e):n instanceof Un?qc(n,e):t}function Hc(n,e){return n instanceof Gr?function(r){return is(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Mn extends ri{}class xn extends ri{constructor(e){super(),this.elements=e}}function zc(n,e){const t=Gc(e);for(const r of n.elements)t.some(i=>je(i,r))||t.push(r);return{arrayValue:{values:t}}}class Un extends ri{constructor(e){super(),this.elements=e}}function qc(n,e){let t=Gc(e);for(const r of n.elements)t=t.filter(i=>!je(i,r));return{arrayValue:{values:t}}}class Gr extends ri{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Qa(n){return le(n.integerValue||n.doubleValue)}function Gc(n){return xs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.field=e,this.transform=t}}function Yg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof xn&&i instanceof xn||r instanceof Un&&i instanceof Un?Xt(r.elements,i.elements,je):r instanceof Gr&&i instanceof Gr?je(r.Re,i.Re):r instanceof Mn&&i instanceof Mn}(n.transform,e.transform)}class Zg{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ii{}function Wc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qc(n.key,Ke.none()):new Gn(n.key,n.data,Ke.none());{const t=n.data,r=De.empty();let i=new ue(ce.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ut(n.key,r,new Oe(i.toArray()),Ke.none())}}function em(n,e,t){n instanceof Gn?function(i,o,a){const u=i.value.clone(),h=Ja(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Ut?function(i,o,a){if(!kr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ja(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Kc(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function kn(n,e,t,r){return n instanceof Gn?function(o,a,u,h){if(!kr(o.precondition,a))return u;const f=o.value.clone(),_=Ya(o.fieldTransforms,h,a);return f.setAll(_),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ut?function(o,a,u,h){if(!kr(o.precondition,a))return u;const f=Ya(o.fieldTransforms,h,a),_=a.data;return _.setAll(Kc(o)),_.setAll(f),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(o,a,u){return kr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function tm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Hc(r.transform,i||null);o!=null&&(t===null&&(t=De.empty()),t.set(r.field,o))}return t||null}function Xa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xt(r,i,(o,a)=>Yg(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gn extends ii{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends ii{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Kc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ja(n,e,t){const r=new Map;Z(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,Xg(a,u,t[i]))}return r}function Ya(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Qg(o,a,e))}return r}class Qc extends ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nm extends ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&em(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=kn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=kn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jc();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=Wc(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&Xt(this.mutations,e.mutations,(t,r)=>Xa(t,r))&&Xt(this.baseMutations,e.baseMutations,(t,r)=>Xa(t,r))}}class $s{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Z(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return zg}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new $s(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne,H;function sm(n){switch(n){case P.OK:return F(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function om(n){if(n===void 0)return Dt("GRPC error has no .code"),P.UNKNOWN;switch(n){case ne.OK:return P.OK;case ne.CANCELLED:return P.CANCELLED;case ne.UNKNOWN:return P.UNKNOWN;case ne.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ne.INTERNAL:return P.INTERNAL;case ne.UNAVAILABLE:return P.UNAVAILABLE;case ne.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ne.NOT_FOUND:return P.NOT_FOUND;case ne.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ne.ABORTED:return P.ABORTED;case ne.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ne.DATA_LOSS:return P.DATA_LOSS;default:return F(39323,{code:n})}}(H=ne||(ne={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Cs([4294967295,4294967295],0);class am{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function as(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cm(n,e){return as(n,e.toTimestamp())}function Kt(n){return Z(!!n,49232),Q.fromTimestamp(function(t){const r=Nt(t);return new se(r.seconds,r.nanos)}(n))}function Xc(n,e){return ls(n,e).canonicalString()}function ls(n,e){const t=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function um(n){const e=Y.fromString(n);return Z(ym(e),10190,{key:e.toString()}),e}function cs(n,e){return Xc(n.databaseId,e.path)}function hm(n){const e=um(n);return e.length===4?Y.emptyPath():fm(e)}function dm(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fm(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Za(n,e,t){return{name:cs(n,e),fields:t.value.mapValue.fields}}function pm(n,e){let t;if(e instanceof Gn)t={update:Za(n,e.key,e.value)};else if(e instanceof Qc)t={delete:cs(n,e.key)};else if(e instanceof Ut)t={update:Za(n,e.key,e.data),updateMask:_m(e.fieldMask)};else{if(!(e instanceof nm))return F(16599,{ft:e.type});t={verify:cs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Mn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof xn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Un)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Gr)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw F(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:cm(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)}(n,e.precondition)),t}function gm(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?Kt(i.updateTime):Kt(o);return a.isEqual(Q.min())&&(a=Kt(o)),new Zg(a,i.transformResults||[])}(t,e))):[]}function mm(n){let e=hm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Z(r===1,65062);const _=t.from[0];_.allDescendants?i=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(T){const A=Jc(T);return A instanceof ft&&Oc(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(T){return T.map(A=>function(C){return new zr(zt(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(A))}(t.orderBy));let u=null;t.limit&&(u=function(T){let A;return A=typeof T=="object"?T.value:T,Vs(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(T){const A=!!T.before,S=T.values||[];return new Hr(S,A)}(t.startAt));let f=null;return t.endAt&&(f=function(T){const A=!T.before,S=T.values||[];return new Hr(S,A)}(t.endAt)),xg(e,i,a,o,u,"F",h,f)}function Jc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zt(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zt(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=zt(t.unaryFilter.field);return ie.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zt(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return ie.create(zt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ft.create(t.compositeFilter.filters.map(r=>Jc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function zt(n){return ce.fromServerFormat(n.fieldPath)}function _m(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ym(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.wt=e}}function Em(n){const e=mm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?os(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.Cn=new Im}addToCollectionParentIndex(e,t){return this.Cn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(dt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(dt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class Im{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ue(Y.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ue(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yc=41943040;class Ae{static withCacheSize(e){return new Ae(e,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae.DEFAULT_COLLECTION_PERCENTILE=10,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ae.DEFAULT=new Ae(Yc,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ae.DISABLED=new Ae(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new en(0)}static lr(){return new en(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="LruGarbageCollector",wm=1048576;function nl([n,e],[t,r]){const i=z(n,t);return i===0?z(e,r):i}class Am{constructor(e){this.Er=e,this.buffer=new ue(nl),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();nl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Rm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){N(tl,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qn(t)?N(tl,"Ignoring IndexedDB error during garbage collection: ",t):await Ds(t)}await this.mr(3e5)})}}class bm{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Ns.le);const r=new Am(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(el)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),el):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,o,a,u,h,f;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,a=Date.now(),this.nthSequenceNumber(e,i))).next(T=>(r=T,u=Date.now(),this.removeTargets(e,r,t))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(f=Date.now(),Ht()<=j.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${T} documents in `+(f-h)+`ms
Total Duration: ${f-_}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function Pm(n,e){return new bm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.changes=new xt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&kn(r.mutation,i,Oe.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,t,r=_e()){const i=It();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=vr();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=It();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,_e()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=qr();const a=Cn(),u=function(){return Cn()}();return t.forEach((h,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof Ut)?o=o.insert(f.key,f):_!==void 0?(a.set(f.key,_.mutation.getFieldMask()),kn(_.mutation,f,_.mutation.getFieldMask(),se.now())):a.set(f.key,Oe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,_)=>a.set(f,_)),t.forEach((f,_)=>{var T;return u.set(f,new Cm(_,(T=a.get(f))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Cn();let i=new Re((a,u)=>a-u),o=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let _=r.get(h)||Oe.empty();_=u.applyToLocalView(f,_),r.set(h,_);const T=(i.get(u.batchId)||_e()).add(h);i=i.insert(u.batchId,T)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,_=h.value,T=jc();_.forEach(A=>{if(!o.has(A)){const S=Wc(t.get(A),r.get(A));S!==null&&T.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,T))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):b.resolve(It());let u=Vn,h=o;return a.next(f=>b.forEach(f,(_,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(_)?b.resolve():this.remoteDocumentCache.getEntry(e,_).next(A=>{h=h.insert(_,A)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,_e())).next(_=>({batchId:u,changes:Bc(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=vr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=vr();return this.indexManager.getCollectionParents(e,o).next(u=>b.forEach(u,h=>{const f=function(T,A){return new ni(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(_=>{_.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,f)=>{const _=f.getKey();a.get(_)===null&&(a=a.insert(_,ke.newInvalidDocument(_)))});let u=vr();return a.forEach((h,f)=>{const _=o.get(h);_!==void 0&&kn(_.mutation,f,Oe.empty(),se.now()),Bs(t,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return b.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Kt(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:Em(i.bundledQuery),readTime:Kt(i.readTime)}}(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.overlays=new Re(U.comparator),this.Qr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=It();return b.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.bt(e,t,o)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=It(),o=t.length+1,a=new U(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Re((f,_)=>f-_);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=It(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const u=It(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,_)=>u.set(f,_)),!(u.size()>=i)););return b.resolve(u)}bt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new im(t,r));let o=this.Qr.get(t);o===void 0&&(o=_e(),this.Qr.set(t,o)),this.Qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.$r=new ue(re.Ur),this.Kr=new ue(re.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new re(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new re(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new U(new Y([])),r=new re(t,e),i=new re(t,e+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new U(new Y([])),r=new re(t,e),i=new re(t,e+1);let o=_e();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new re(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class re{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return U.comparator(e.key,t.key)||z(e.Zr,t.Zr)}static Wr(e,t){return z(e.Zr,t.Zr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ue(re.Ur)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rm(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Xr=this.Xr.add(new re(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Os:this.nr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new re(t,0),i=new re(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],a=>{const u=this.ei(a.Zr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(z);return t.forEach(i=>{const o=new re(i,0),a=new re(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],u=>{r=r.add(u.Zr)})}),b.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new re(new U(o),0);let u=new ue(z);return this.Xr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.Zr)),!0)},a),b.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Z(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return b.forEach(t.mutations,i=>{const o=new re(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new re(t,0),i=this.Xr.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.ii=e,this.docs=function(){return new Re(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=qr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ke.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=qr();const a=t.path,u=new U(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||pg(fg(_),r)<=0||(i.has(_.key)||Bs(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(e,t,r,i){F(9500)}si(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Mm(this)}getSize(e){return b.resolve(this.size)}}class Mm extends Sm{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.persistence=e,this.oi=new xt(t=>Us(t),Fs),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this._i=0,this.ai=new Hs,this.targetCount=0,this.ui=en.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),b.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new en(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Tr(t),b.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t){this.ci={},this.overlays={},this.li=new Ns(0),this.hi=!1,this.hi=!0,this.Pi=new Om,this.referenceDelegate=e(this),this.Ti=new xm(this),this.indexManager=new Tm,this.remoteDocumentCache=function(i){return new Lm(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new vm(t),this.Ei=new Dm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new Vm(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new Um(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(e,t){return b.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class Um extends mg{constructor(e){super(),this.currentSequenceNumber=e}}class zs{constructor(e){this.persistence=e,this.Vi=new Hs,this.mi=null}static fi(e){return new zs(e)}get gi(){if(this.mi)return this.mi;throw F(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.gi,r=>{const i=U.fromPath(r);return this.pi(e,i).next(o=>{o||t.removeEntry(i,Q.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return b.or([()=>b.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Wr{constructor(e,t){this.persistence=e,this.yi=new xt(r=>vg(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Pm(this,t)}static fi(e,t){return new Wr(e,t)}di(){}Ai(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return b.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(o=>o?b.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(e,a=>this.Dr(e,a,t).next(u=>{u||(r++,o.removeEntry(a,Q.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),b.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Sr(e.data.value)),t}Dr(e,t,r){return b.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=_e(),i=_e();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new qs(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return xh()?8:_g(ye())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ws(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Ss(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Fm;return this.bs(e,t,a).next(u=>{if(o.result=u,this.fs)return this.Ds(e,t,a,u.size)})}).next(()=>o.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(Ht()<=j.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",In(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),b.resolve()):(Ht()<=j.DEBUG&&N("QueryEngine","Query:",In(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(Ht()<=j.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",In(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rt(t))):b.resolve())}ws(e,t){if(Ka(t))return b.resolve(null);let r=Rt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=os(t,null,"F"),r=Rt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=_e(...o);return this.ys.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const f=this.vs(t,u);return this.Cs(t,f,a,h.readTime)?this.ws(e,os(t,null,"F")):this.Fs(e,f,t,h)}))})))}Ss(e,t,r,i){return Ka(t)||i.isEqual(Q.min())?b.resolve(null):this.ys.getDocuments(e,r).next(o=>{const a=this.vs(t,o);return this.Cs(t,a,r,i)?b.resolve(null):(Ht()<=j.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),In(t)),this.Fs(e,a,t,dg(i,Vn)).next(u=>u))})}vs(e,t){let r=new ue(jg(e));return t.forEach((i,o)=>{Bs(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}bs(e,t,r){return Ht()<=j.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",In(t)),this.ys.getDocumentsMatchingQuery(e,t,dt.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="LocalStore";class $m{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new Re(z),this.Os=new xt(o=>Us(o),Fs),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new km(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Hm(n,e,t,r){return new $m(n,e,t,r)}async function eu(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=_e();for(const f of i){a.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){u.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return t.localDocuments.getDocuments(r,h).next(f=>({ks:f,removedBatchIds:a,addedBatchIds:u}))})})}function zm(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,h,f,_){const T=f.batch,A=T.keys();let S=b.resolve();return A.forEach(C=>{S=S.next(()=>_.getEntry(h,C)).next(O=>{const D=f.docVersions.get(C);Z(D!==null,48541),O.version.compareTo(D)<0&&(T.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),_.addEntry(O)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=_e();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function qm(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Gm(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Os),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class rl{constructor(){this.activeTargetIds=Wg()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wm{constructor(){this.xo=new rl,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new rl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="ConnectivityMonitor";class sl{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(il,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){N(il,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er=null;function us(){return Er===null?Er=function(){return 268435456+Math.round(2147483648*Math.random())}():Er++,"0x"+Er.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="RestConnection",Qm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xm{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===jr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,o){const a=us(),u=this.jo(e,t.toUriEncodedString());N(ji,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:f}=new URL(u),_=Lt(f);return this.Jo(e,u,h,r,_).then(T=>(N(ji,`Received RPC '${e}' ${a}: `,T),T),T=>{throw ti(ji,`RPC '${e}' ${a} failed with error: `,T,"url: ",u,"request:",r),T})}Yo(e,t,r,i,o,a){return this.zo(e,t,r,i,o)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}jo(e,t){const r=Qm[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="WebChannelConnection";class Ym extends Xm{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const a=us();return new Promise((u,h)=>{const f=new pc;f.setWithCredentials(!0),f.listenOnce(gc.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Pr.NO_ERROR:const T=f.getResponseJson();N(ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(T)),u(T);break;case Pr.TIMEOUT:N(ge,`RPC '${e}' ${a} timed out`),h(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Pr.HTTP_ERROR:const A=f.getStatus();if(N(ge,`RPC '${e}' ${a} failed with status:`,A,"response text:",f.getResponseText()),A>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const O=function($){const M=$.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(M)>=0?M:P.UNKNOWN}(C.status);h(new V(O,C.message))}else h(new V(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new V(P.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{N(ge,`RPC '${e}' ${a} completed.`)}});const _=JSON.stringify(i);N(ge,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",_,r,15)})}T_(e,t,r){const i=us(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yc(),u=_c(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const _=o.join("");N(ge,`Creating RPC '${e}' stream ${i}: ${_}`,h);const T=a.createWebChannel(_,h);let A=!1,S=!1;const C=new Jm({Zo:D=>{S?N(ge,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(A||(N(ge,`Opening RPC '${e}' stream ${i} transport.`),T.open(),A=!0),N(ge,`RPC '${e}' stream ${i} sending:`,D),T.send(D))},Xo:()=>T.close()}),O=(D,$,M)=>{D.listen($,x=>{try{M(x)}catch(B){setTimeout(()=>{throw B},0)}})};return O(T,An.EventType.OPEN,()=>{S||(N(ge,`RPC '${e}' stream ${i} transport opened.`),C.__())}),O(T,An.EventType.CLOSE,()=>{S||(S=!0,N(ge,`RPC '${e}' stream ${i} transport closed`),C.u_())}),O(T,An.EventType.ERROR,D=>{S||(S=!0,ti(ge,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),C.u_(new V(P.UNAVAILABLE,"The operation could not be completed")))}),O(T,An.EventType.MESSAGE,D=>{var $;if(!S){const M=D.data[0];Z(!!M,16349);const x=M,B=(x==null?void 0:x.error)||(($=x[0])===null||$===void 0?void 0:$.error);if(B){N(ge,`RPC '${e}' stream ${i} received error:`,B);const Ee=B.status;let X=function(m){const y=ne[m];if(y!==void 0)return om(y)}(Ee),v=B.message;X===void 0&&(X=P.INTERNAL,v="Unknown error status: "+Ee+" with message "+B.message),S=!0,C.u_(new V(X,v)),T.close()}else N(ge,`RPC '${e}' stream ${i} received:`,M),C.c_(M)}}),O(u,mc.STAT_EVENT,D=>{D.stat===es.PROXY?N(ge,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===es.NOPROXY&&N(ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.a_()},0),C}}function $i(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n){return new am(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,r=1e3,i=1.5,o=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=i,this.d_=o,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="PersistentStream";class Zm{constructor(e,t,r,i,o,a,u,h){this.xi=e,this.y_=r,this.w_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new tu(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===t&&this.K_(r,i)},r=>{e(()=>{const i=new V(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return N(ol,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(N(ol,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e_ extends Zm{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=gm(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=dm(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>pm(this.serializer,r))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{}class n_ extends t_{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(e,ls(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(P.UNKNOWN,o.toString())})}Yo(e,t,r,i,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(e,ls(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(P.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class r_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Dt(t),this.oa=!1):N("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="RemoteStore";class i_{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=o,this.Ea.No(a=>{r.enqueueAndForget(async()=>{Qn(this)&&(N(Wn,"Restarting streams for network reachability change."),await async function(h){const f=W(h);f.Ta.add(4),await Kn(f),f.da.set("Unknown"),f.Ta.delete(4),await oi(f)}(this))})}),this.da=new r_(r,i)}}async function oi(n){if(Qn(n))for(const e of n.Ia)await e(!0)}async function Kn(n){for(const e of n.Ia)await e(!1)}function Qn(n){return W(n).Ta.size===0}async function nu(n,e,t){if(!qn(e))throw e;n.Ta.add(1),await Kn(n),n.da.set("Offline"),t||(t=()=>qm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(Wn,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await oi(n)})}function ru(n,e){return e().catch(t=>nu(n,t,e))}async function ai(n){const e=W(n),t=pt(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Os;for(;s_(e);)try{const i=await Gm(e.localStore,r);if(i===null){e.ha.length===0&&t.N_();break}r=i.batchId,o_(e,i)}catch(i){await nu(e,i)}iu(e)&&su(e)}function s_(n){return Qn(n)&&n.ha.length<10}function o_(n,e){n.ha.push(e);const t=pt(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function iu(n){return Qn(n)&&!pt(n).F_()&&n.ha.length>0}function su(n){pt(n).start()}async function a_(n){pt(n).ta()}async function l_(n){const e=pt(n);for(const t of n.ha)e.Z_(t.mutations)}async function c_(n,e,t){const r=n.ha.shift(),i=$s.from(r,e,t);await ru(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ai(n)}async function u_(n,e){e&&pt(n).Y_&&await async function(r,i){if(function(a){return sm(a)&&a!==P.ABORTED}(i.code)){const o=r.ha.shift();pt(r).O_(),await ru(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ai(r)}}(n,e),iu(n)&&su(n)}async function al(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),N(Wn,"RemoteStore received new credentials");const r=Qn(t);t.Ta.add(3),await Kn(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await oi(t)}async function h_(n,e){const t=W(n);e?(t.Ta.delete(2),await oi(t)):e||(t.Ta.add(2),await Kn(t),t.da.set("Unknown"))}function pt(n){return n.Va||(n.Va=function(t,r,i){const o=W(t);return o.ra(),new e_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:a_.bind(null,n),i_:u_.bind(null,n),X_:l_.bind(null,n),ea:c_.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await ai(n)):(await n.Va.stop(),n.ha.length>0&&(N(Wn,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new Gs(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ou(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),qn(n))return new V(P.UNAVAILABLE,`${e}: ${n}`);throw n}class d_{constructor(){this.queries=ll(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const i=W(t),o=i.queries;i.queries=ll(),o.forEach((a,u)=>{for(const h of u.ya)h.onError(r)})})(this,new V(P.ABORTED,"Firestore shutting down"))}}function ll(){return new xt(n=>Uc(n),xc)}function f_(n){n.ba.forEach(e=>{e.next()})}var cl,ul;(ul=cl||(cl={})).Ca="default",ul.Cache="cache";const p_="SyncEngine";class g_{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new xt(u=>Uc(u),xc),this.cu=new Map,this.lu=new Set,this.hu=new Re(U.comparator),this.Pu=new Map,this.Tu=new Hs,this.Iu={},this.Eu=new Map,this.du=en.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function m_(n,e,t){const r=E_(n);try{const i=await function(a,u){const h=W(a),f=se.now(),_=u.reduce((S,C)=>S.add(C.key),_e());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=qr(),O=_e();return h.Bs.getEntries(S,_).next(D=>{C=D,C.forEach(($,M)=>{M.isValidDocument()||(O=O.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,C)).next(D=>{T=D;const $=[];for(const M of u){const x=tm(M,T.get(M.key).overlayedDocument);x!=null&&$.push(new Ut(M.key,x,kc(x.value.mapValue),Ke.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,$,u)}).next(D=>{A=D;const $=D.applyToLocalDocumentSet(T,O);return h.documentOverlayCache.saveOverlays(S,D.batchId,$)})}).then(()=>({batchId:A.batchId,changes:Bc(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let f=a.Iu[a.currentUser.toKey()];f||(f=new Re(z)),f=f.insert(u,h),a.Iu[a.currentUser.toKey()]=f}(r,i.batchId,t),await li(r,i.changes),await ai(r.remoteStore)}catch(i){const o=ou(i,"Failed to persist write");t.reject(o)}}function hl(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.uu.forEach((o,a)=>{const u=a.view.Da(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=W(a);h.onlineState=u;let f=!1;h.queries.forEach((_,T)=>{for(const A of T.ya)A.Da(u)&&(f=!0)}),f&&f_(h)}(r.eventManager,e),i.length&&r.au.j_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function __(n,e){const t=W(n),r=e.batch.batchId;try{const i=await zm(t.localStore,e);lu(t,r,null),au(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await li(t,i)}catch(i){await Ds(i)}}async function y_(n,e,t){const r=W(n);try{const i=await function(a,u){const h=W(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return h.mutationQueue.lookupMutationBatch(f,u).next(T=>(Z(T!==null,37113),_=T.keys(),h.mutationQueue.removeMutationBatch(f,T))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,_,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>h.localDocuments.getDocuments(f,_))})}(r.localStore,e);lu(r,e,t),au(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await li(r,i)}catch(i){await Ds(i)}}function au(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function lu(n,e,t){const r=W(n);let i=r.Iu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Iu[r.currentUser.toKey()]=i}}async function li(n,e,t){const r=W(n),i=[],o=[],a=[];r.uu.isEmpty()||(r.uu.forEach((u,h)=>{a.push(r.Ru(h,e,t).then(f=>{var _;if((f||t)&&r.isPrimaryClient){const T=f?!f.fromCache:(_=void 0)===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){i.push(f);const T=qs.Rs(h.targetId,f);o.push(T)}}))}),await Promise.all(a),r.au.j_(i),await async function(h,f){const _=W(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>b.forEach(f,A=>b.forEach(A.ds,S=>_.persistence.referenceDelegate.addReference(T,A.targetId,S)).next(()=>b.forEach(A.As,S=>_.persistence.referenceDelegate.removeReference(T,A.targetId,S)))))}catch(T){if(!qn(T))throw T;N(jm,"Failed to update sequence numbers: "+T)}for(const T of f){const A=T.targetId;if(!T.fromCache){const S=_.xs.get(A),C=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(C);_.xs=_.xs.insert(A,O)}}}(r.localStore,o))}async function v_(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){N(p_,"User change. New user:",e.toKey());const r=await eu(t.localStore,e);t.currentUser=e,function(o,a){o.Eu.forEach(u=>{u.forEach(h=>{h.reject(new V(P.CANCELLED,a))})}),o.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await li(t,r.ks)}}function E_(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=__.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=y_.bind(null,e),e}class Kr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=si(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Hm(this.persistence,new Bm,e.initialUser,this.serializer)}yu(e){return new Zc(zs.fi,this.serializer)}pu(e){return new Wm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kr.provider={build:()=>new Kr};class T_ extends Kr{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Z(this.persistence.referenceDelegate instanceof Wr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Rm(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new Zc(r=>Wr.fi(r,t),this.serializer)}}class hs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=v_.bind(null,this.syncEngine),await h_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new d_}()}createDatastore(e){const t=si(e.databaseInfo.databaseId),r=function(o){return new Ym(o)}(e.databaseInfo);return function(o,a,u,h){return new n_(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new i_(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>hl(this.syncEngine,t,0),function(){return sl.C()?new sl:new Km}())}createSyncEngine(e,t){return function(i,o,a,u,h,f,_){const T=new g_(i,o,a,u,h,f);return _&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=W(i);N(Wn,"RemoteStore shutting down."),o.Ta.add(5),await Kn(o),o.Ea.shutdown(),o.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hs.provider={build:()=>new hs};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="FirestoreClient";class I_{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=Tc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(gt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(gt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ou(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hi(n,e){n.asyncQueue.verifyOperationInProgress(),N(gt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eu(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function dl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await w_(n);N(gt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>al(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>al(e.remoteStore,i)),n._onlineComponents=e}async function w_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(gt,"Using user provided OfflineComponentProvider");try{await Hi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;ti("Error using user provided cache. Falling back to memory cache: "+t),await Hi(n,new Kr)}}else N(gt,"Using default OfflineComponentProvider"),await Hi(n,new T_(void 0));return n._offlineComponents}async function A_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(gt,"Using user provided OnlineComponentProvider"),await dl(n,n._uninitializedComponentsProvider._online)):(N(gt,"Using default OnlineComponentProvider"),await dl(n,new hs))),n._onlineComponents}function R_(n){return A_(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function b_(n,e,t,r){if(e===!0&&r===!0)throw new V(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pl(n){if(!U.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gl(n){if(U.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ws(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function hu(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ws(n);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="firestore.googleapis.com",ml=!0;class _l{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=du,this.ssl=ml}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ml;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wm)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}b_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ci{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _l({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _l(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ng;switch(r.type){case"firstParty":return new og(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fl.get(t);r&&(N("ComponentProvider","Removing Datastore"),fl.delete(t),r.terminate())}(this),Promise.resolve()}}function P_(n,e,t,r={}){var i;n=hu(n,ci);const o=Lt(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o&&(fs(`https://${h}`),ps("Firestore",!0)),a.host!==du&&a.host!==h&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Pt(f,u)&&(n._setSettings(f),r.mockUserToken)){let _,T;if(typeof r.mockUserToken=="string")_=r.mockUserToken,T=me.MOCK_USER;else{_=Ol(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new me(A)}n._authCredentials=new rg(new Ec(_,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class Qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class ut extends Ks{constructor(e,t,r){super(e,t,Ug(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new U(e))}withConverter(e){return new ut(this.firestore,e,this._path)}}function nv(n,e,...t){if(n=ve(n),uu("collection","path",e),n instanceof ci){const r=Y.fromString(e,...t);return gl(r),new ut(n,null,r)}{if(!(n instanceof Qe||n instanceof ut))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return gl(r),new ut(n.firestore,null,r)}}function S_(n,e,...t){if(n=ve(n),arguments.length===1&&(e=Tc.newId()),uu("doc","path",e),n instanceof ci){const r=Y.fromString(e,...t);return pl(r),new Qe(n,null,new U(r))}{if(!(n instanceof Qe||n instanceof ut))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return pl(r),new Qe(n.firestore,n instanceof ut?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="AsyncQueue";class vl{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new tu(this,"async_queue_retry"),this.ec=()=>{const r=$i();r&&N(yl,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=$i();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=$i();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new At;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!qn(e))throw e;N(yl,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Dt("INTERNAL UNHANDLED ERROR: ",El(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const i=Gs.createAndSchedule(this,e,t,r,o=>this.oc(o));return this.Hu.push(i),i}nc(){this.Ju&&F(47125,{_c:El(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function El(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class fu extends ci{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new vl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vl(e),this._firestoreClient=void 0,await e}}}function rv(n,e){const t=typeof n=="object"?n:_s(),r=typeof n=="string"?n:jr,i=Jr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=kl("firestore");o&&P_(i,...o)}return i}function C_(n){if(n._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||k_(n),n._firestoreClient}function k_(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,f,_){return new wg(u,h,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,cu(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new I_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(Be.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fn(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=/^__.*__$/;class N_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gn(e,this.data,t,this.fieldTransforms)}}function _u(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{hc:n})}}class Xs{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Xs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tc({path:r,Ec:!1});return i.dc(e),i}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Qr(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(_u(this.hc)&&D_.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class O_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||si(e)}gc(e,t,r,i=!1){return new Xs({hc:e,methodName:t,fc:r,path:ce.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V_(n){const e=n._freezeSettings(),t=si(n._databaseId);return new O_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function L_(n,e,t,r,i,o={}){const a=n.gc(o.merge||o.mergeFields?2:0,e,t,i);Tu("Data must be an object, but it was:",a,r);const u=vu(r,a);let h,f;if(o.merge)h=new Oe(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const _=[];for(const T of o.mergeFields){const A=M_(e,T,t);if(!a.contains(A))throw new V(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);F_(_,A)||_.push(A)}h=new Oe(_),f=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,f=a.fieldTransforms;return new N_(new De(u),h,f)}class Js extends Qs{_toFieldTransform(e){return new Jg(e.path,new Mn)}isEqual(e){return e instanceof Js}}function yu(n,e){if(Eu(n=ve(n)))return Tu("Unsupported field value:",e,n),vu(n,e);if(n instanceof Qs)return function(r,i){if(!_u(i.hc))throw i.Vc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=yu(u,i.Rc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=se.fromDate(r);return{timestampValue:as(i.serializer,o)}}if(r instanceof se){const o=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:as(i.serializer,o)}}if(r instanceof gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fn)return{bytesValue:lm(i.serializer,r._byteString)};if(r instanceof Qe){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Xc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mu)return function(a,u){return{mapValue:{fields:{[Sc]:{stringValue:Cc},[ns]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw u.Vc("VectorValues must only contain numeric values.");return js(u.serializer,f)})}}}}}}(r,i);throw i.Vc(`Unsupported field value: ${Ws(r)}`)}(n,e)}function vu(n,e){const t={};return wc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rn(n,(r,i)=>{const o=yu(i,e.Ic(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Eu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof gu||n instanceof Fn||n instanceof Qe||n instanceof Qs||n instanceof mu)}function Tu(n,e,t){if(!Eu(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ws(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function M_(n,e,t){if((e=ve(e))instanceof pu)return e._internalPath;if(typeof e=="string")return U_(n,e);throw Qr("Field path arguments must be of type string or ",n,!1,void 0,t)}const x_=new RegExp("[~\\*/\\[\\]]");function U_(n,e,t){if(e.search(x_)>=0)throw Qr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pu(...e.split("."))._internalPath}catch{throw Qr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qr(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new V(P.INVALID_ARGUMENT,u+n+h)}function F_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function iv(n,e){const t=hu(n.firestore,fu),r=S_(n),i=B_(n.converter,e);return j_(t,[L_(V_(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then(()=>r)}function j_(n,e){return function(r,i){const o=new At;return r.asyncQueue.enqueueAndForget(async()=>m_(await R_(r),i,o)),o.promise}(C_(n),e)}function sv(){return new Js("serverTimestamp")}(function(e,t=!0){(function(i){nn=i})(Mt),St(new ht("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new fu(new ig(r.getProvider("auth-internal")),new ag(a,r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(f.options.projectId,_)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),xe(Oa,Va,e),xe(Oa,Va,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firebasestorage.googleapis.com",wu="storageBucket",$_=2*60*1e3,H_=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends $e{constructor(e,t,r=0){super(zi(e),`Firebase Storage: ${t} (${zi(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ee;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ee||(ee={}));function zi(n){return"storage/"+n}function Ys(){const n="An unknown error occurred, please check the error payload for server response.";return new te(ee.UNKNOWN,n)}function z_(n){return new te(ee.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function q_(n){return new te(ee.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function G_(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new te(ee.UNAUTHENTICATED,n)}function W_(){return new te(ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function K_(n){return new te(ee.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Q_(){return new te(ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function X_(){return new te(ee.CANCELED,"User canceled the upload/download.")}function J_(n){return new te(ee.INVALID_URL,"Invalid URL '"+n+"'.")}function Y_(n){return new te(ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Z_(){return new te(ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wu+"' property when initializing the app?")}function ey(){return new te(ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ty(){return new te(ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ny(n){return new te(ee.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ds(n){return new te(ee.INVALID_ARGUMENT,n)}function Au(){return new te(ee.APP_DELETED,"The Firebase app was deleted.")}function ry(n){return new te(ee.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Dn(n,e){return new te(ee.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function wn(n){throw new te(ee.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Pe.makeFromUrl(e,t)}catch{return new Pe(e,"")}if(r.path==="")return r;throw Y_(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function f(B){B.path_=decodeURIComponent(B.path)}const _="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",S=new RegExp(`^https?://${T}/${_}/b/${i}/o${A}`,"i"),C={bucket:1,path:3},O=t===Iu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",$=new RegExp(`^https?://${O}/${i}/${D}`,"i"),x=[{regex:u,indices:h,postModify:o},{regex:S,indices:C,postModify:f},{regex:$,indices:{bucket:1,path:2},postModify:f}];for(let B=0;B<x.length;B++){const Ee=x[B],X=Ee.regex.exec(e);if(X){const v=X[Ee.indices.bucket];let p=X[Ee.indices.path];p||(p=""),r=new Pe(v,p),Ee.postModify(r);break}}if(r==null)throw J_(e);return r}}class iy{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(n,e,t){let r=1,i=null,o=null,a=!1,u=0;function h(){return u===2}let f=!1;function _(...D){f||(f=!0,e.apply(null,D))}function T(D){i=setTimeout(()=>{i=null,n(S,h())},D)}function A(){o&&clearTimeout(o)}function S(D,...$){if(f){A();return}if(D){A(),_.call(null,D,...$);return}if(h()||a){A(),_.call(null,D,...$);return}r<64&&(r*=2);let x;u===1?(u=2,x=0):x=(r+Math.random())*1e3,T(x)}let C=!1;function O(D){C||(C=!0,A(),!f&&(i!==null?(D||(u=2),clearTimeout(i),T(0)):D||(u=1)))}return T(0),o=setTimeout(()=>{a=!0,O(!0)},t),O}function oy(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){return n!==void 0}function ly(n){return typeof n=="object"&&!Array.isArray(n)}function Zs(n){return typeof n=="string"||n instanceof String}function Tl(n){return eo()&&n instanceof Blob}function eo(){return typeof Blob<"u"}function Il(n,e,t,r){if(r<e)throw ds(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ds(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Ru(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var bt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(bt||(bt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t,r,i,o,a,u,h,f,_,T,A=!0,S=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=_,this.connectionFactory_=T,this.retry=A,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,O)=>{this.resolve_=C,this.reject_=O,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Tr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=u=>{const h=u.loaded,f=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const u=o.getErrorCode()===bt.NO_ERROR,h=o.getStatus();if(!u||cy(h,this.additionalRetryCodes_)&&this.retry){const _=o.getErrorCode()===bt.ABORT;r(!1,new Tr(!1,null,_));return}const f=this.successCodes_.indexOf(h)!==-1;r(!0,new Tr(f,o))})},t=(r,i)=>{const o=this.resolve_,a=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(u,u.getResponse());ay(h)?o(h):o()}catch(h){a(h)}else if(u!==null){const h=Ys();h.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,h)):a(h)}else if(i.canceled){const h=this.appDelete_?Au():X_();a(h)}else{const h=Q_();a(h)}};this.canceled_?t(!1,new Tr(!1,null,!0)):this.backoffId_=sy(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oy(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function hy(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function dy(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fy(n,e){e&&(n["X-Firebase-GMPID"]=e)}function py(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function gy(n,e,t,r,i,o,a=!0,u=!1){const h=Ru(n.urlParams),f=n.url+h,_=Object.assign({},n.headers);return fy(_,e),hy(_,t),dy(_,o),py(_,r),new uy(f,n.method,_,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _y(...n){const e=my();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(eo())return new Blob(n);throw new te(ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yy(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n){if(typeof atob>"u")throw ny("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qi{constructor(e,t){this.data=e,this.contentType=t||null}}function Ey(n,e){switch(n){case Me.RAW:return new qi(bu(e));case Me.BASE64:case Me.BASE64URL:return new qi(Pu(n,e));case Me.DATA_URL:return new qi(Iy(e),wy(e))}throw Ys()}function bu(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=n.charCodeAt(++t);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Ty(n){let e;try{e=decodeURIComponent(n)}catch{throw Dn(Me.DATA_URL,"Malformed data URL.")}return bu(e)}function Pu(n,e){switch(n){case Me.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw Dn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Me.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw Dn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=vy(e)}catch(i){throw i.message.includes("polyfill")?i:Dn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Su{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Dn(Me.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Ay(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Iy(n){const e=new Su(n);return e.base64?Pu(Me.BASE64,e.rest):Ty(e.rest)}function wy(n){return new Su(n).contentType}function Ay(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){let r=0,i="";Tl(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Tl(this.data_)){const r=this.data_,i=yy(r,e,t);return i===null?null:new at(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new at(r,!0)}}static getBlob(...e){if(eo()){const t=e.map(r=>r instanceof at?r.data_:r);return new at(_y.apply(null,t))}else{const t=e.map(a=>Zs(a)?Ey(Me.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let o=0;return t.forEach(a=>{for(let u=0;u<a.length;u++)i[o++]=a[u]}),new at(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){let e;try{e=JSON.parse(n)}catch{return null}return ly(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function by(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function ku(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n,e){return e}class we{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||Py}}let Ir=null;function Sy(n){return!Zs(n)||n.length<2?n:ku(n)}function Du(){if(Ir)return Ir;const n=[];n.push(new we("bucket")),n.push(new we("generation")),n.push(new we("metageneration")),n.push(new we("name","fullPath",!0));function e(o,a){return Sy(a)}const t=new we("name");t.xform=e,n.push(t);function r(o,a){return a!==void 0?Number(a):a}const i=new we("size");return i.xform=r,n.push(i),n.push(new we("timeCreated")),n.push(new we("updated")),n.push(new we("md5Hash",null,!0)),n.push(new we("cacheControl",null,!0)),n.push(new we("contentDisposition",null,!0)),n.push(new we("contentEncoding",null,!0)),n.push(new we("contentLanguage",null,!0)),n.push(new we("contentType",null,!0)),n.push(new we("metadata","customMetadata",!0)),Ir=n,Ir}function Cy(n,e){function t(){const r=n.bucket,i=n.fullPath,o=new Pe(r,i);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function ky(n,e,t){const r={};r.type="file";const i=t.length;for(let o=0;o<i;o++){const a=t[o];r[a.local]=a.xform(r,e[a.server])}return Cy(r,n),r}function Nu(n,e,t){const r=Cu(e);return r===null?null:ky(n,r,t)}function Dy(n,e,t,r){const i=Cu(e);if(i===null||!Zs(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const _=n.bucket,T=n.fullPath,A="/b/"+a(_)+"/o/"+a(T),S=to(A,t,r),C=Ru({alt:"media",token:f});return S+C})[0]}function Ny(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}class Ou{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){if(!n)throw Ys()}function Oy(n,e){function t(r,i){const o=Nu(n,i,e);return Vu(o!==null),o}return t}function Vy(n,e){function t(r,i){const o=Nu(n,i,e);return Vu(o!==null),Dy(o,i,n.host,n._protocol)}return t}function Lu(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=W_():i=G_():t.getStatus()===402?i=q_(n.bucket):t.getStatus()===403?i=K_(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Ly(n){const e=Lu(n);function t(r,i){let o=e(r,i);return r.getStatus()===404&&(o=z_(n.path)),o.serverResponse=i.serverResponse,o}return t}function My(n,e,t){const r=e.fullServerUrl(),i=to(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,u=new Ou(i,o,Vy(n,t),a);return u.errorHandler=Ly(e),u}function xy(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Uy(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=xy(null,e)),r}function Fy(n,e,t,r,i){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let x="";for(let B=0;B<2;B++)x=x+Math.random().toString().slice(2);return x}const h=u();a["Content-Type"]="multipart/related; boundary="+h;const f=Uy(e,r,i),_=Ny(f,t),T="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,A=`\r
--`+h+"--",S=at.getBlob(T,r,A);if(S===null)throw ey();const C={name:f.fullPath},O=to(o,n.host,n._protocol),D="POST",$=n.maxUploadRetryTime,M=new Ou(O,D,Oy(n,t),$);return M.urlParams=C,M.headers=a,M.body=S.uploadData(),M.errorHandler=Lu(e),M}class By{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,o){if(this.sent_)throw wn("cannot .send() more than once");if(Lt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw wn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw wn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw wn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw wn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jy extends By{initXhr(){this.xhr_.responseType="text"}}function Mu(){return new jy}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this._service=e,t instanceof Pe?this._location=t:this._location=Pe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Vt(e,t)}get root(){const e=new Pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ku(this._location.path)}get storage(){return this._service}get parent(){const e=Ry(this._location.path);if(e===null)return null;const t=new Pe(this._location.bucket,e);return new Vt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ry(e)}}function $y(n,e,t){n._throwIfRoot("uploadBytes");const r=Fy(n.storage,n._location,Du(),new at(e,!0),t);return n.storage.makeRequestWithTokens(r,Mu).then(i=>({metadata:i,ref:n}))}function Hy(n){n._throwIfRoot("getDownloadURL");const e=My(n.storage,n._location,Du());return n.storage.makeRequestWithTokens(e,Mu).then(t=>{if(t===null)throw ty();return t})}function zy(n,e){const t=by(n._location.path,e),r=new Pe(n._location.bucket,t);return new Vt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n){return/^[A-Za-z]+:\/\//.test(n)}function Gy(n,e){return new Vt(n,e)}function xu(n,e){if(n instanceof no){const t=n;if(t._bucket==null)throw Z_();const r=new Vt(t,t._bucket);return e!=null?xu(r,e):r}else return e!==void 0?zy(n,e):n}function Wy(n,e){if(e&&qy(e)){if(n instanceof no)return Gy(n,e);throw ds("To use ref(service, url), the first argument must be a Storage instance.")}else return xu(n,e)}function wl(n,e){const t=e==null?void 0:e[wu];return t==null?null:Pe.makeFromBucketSpec(t,n)}function Ky(n,e,t,r={}){n.host=`${e}:${t}`;const i=Lt(e);i&&(fs(`https://${n.host}`),ps("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:Ol(o,n.app.options.projectId))}class no{constructor(e,t,r,i,o,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=Iu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$_,this._maxUploadRetryTime=H_,this._requests=new Set,i!=null?this._bucket=Pe.makeFromBucketSpec(i,this._host):this._bucket=wl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pe.makeFromBucketSpec(this._url,e):this._bucket=wl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Il("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Il("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Se(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vt(this,e)}_makeRequest(e,t,r,i,o=!0){if(this._deleted)return new iy(Au());{const a=gy(e,this._appId,r,i,t,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Al="@firebase/storage",Rl="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="storage";function ov(n,e,t){return n=ve(n),$y(n,e,t)}function av(n){return n=ve(n),Hy(n)}function lv(n,e){return n=ve(n),Wy(n,e)}function cv(n=_s(),e){n=ve(n);const r=Jr(n,Uu).getImmediate({identifier:e}),i=kl("storage");return i&&Qy(r,...i),r}function Qy(n,e,t,r={}){Ky(n,e,t,r)}function Xy(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new no(t,r,i,e,Mt)}function Jy(){St(new ht(Uu,Xy,"PUBLIC").setMultipleInstances(!0)),xe(Al,Rl,""),xe(Al,Rl,"esm2017")}Jy();export{it as G,cv as a,ev as b,av as c,sv as d,iv as e,nv as f,rv as g,qd as i,Yy as o,lv as r,Zy as s,ov as u};
