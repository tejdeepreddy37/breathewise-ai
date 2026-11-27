import{u as he,j as c}from"./index-CjcXTqsI.js";import{r as x,u as fe,v as ge,U as pe,w as me,x as ve,A as be,H as Ce,t as Ee,y as ye,z as xe}from"./lucide-vendor-lPYoJfUQ.js";import"./recharts-vendor-CS_UlHr8.js";var B;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(B||(B={}));/**
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
 */var U;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(U||(U={}));var H;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(H||(H={}));/**
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
 */const q=["user","model","function","system"];var K;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(K||(K={}));var W;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(W||(W={}));var Y;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(Y||(Y={}));var V;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(V||(V={}));var R;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"})(R||(R={}));var Q;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(Q||(Q={}));var z;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(z||(z={}));var J;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(J||(J={}));/**
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
 */class C extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class $ extends C{constructor(n,t){super(n),this.response=t}}class se extends C{constructor(n,t,i,s){super(n),this.status=t,this.statusText=i,this.errorDetails=s}}class N extends C{}/**
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
 */const we="https://generativelanguage.googleapis.com",Ae="v1beta",Ne="0.21.0",Ie="genai-js";var _;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(_||(_={}));class _e{constructor(n,t,i,s,a){this.model=n,this.task=t,this.apiKey=i,this.stream=s,this.requestOptions=a}toString(){var n,t;const i=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||Ae;let a=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||we}/${i}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function $e(e){const n=[];return e!=null&&e.apiClient&&n.push(e.apiClient),n.push(`${Ie}/${Ne}`),n.join(" ")}async function Oe(e){var n;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",$e(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let i=(n=e.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(i){if(!(i instanceof Headers))try{i=new Headers(i)}catch(s){throw new N(`unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${s.message}`)}for(const[s,a]of i.entries()){if(s==="x-goog-api-key")throw new N(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new N(`Header name ${s} can only be set using the apiClient field`);t.append(s,a)}}return t}async function Se(e,n,t,i,s,a){const r=new _e(e,n,t,i,a);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},Pe(a)),{method:"POST",headers:await Oe(r),body:s})}}async function P(e,n,t,i,s,a={},r=fetch){const{url:l,fetchOptions:o}=await Se(e,n,t,i,s,a);return Re(l,o,r)}async function Re(e,n,t=fetch){let i;try{i=await t(e,n)}catch(s){Me(s,e)}return i.ok||await Te(i,e),i}function Me(e,n){let t=e;throw e instanceof se||e instanceof N||(t=new C(`Error fetching from ${n.toString()}: ${e.message}`),t.stack=e.stack),t}async function Te(e,n){let t="",i;try{const s=await e.json();t=s.error.message,s.error.details&&(t+=` ${JSON.stringify(s.error.details)}`,i=s.error.details)}catch{}throw new se(`Error fetching from ${n.toString()}: [${e.status} ${e.statusText}] ${t}`,e.status,e.statusText,i)}function Pe(e){const n={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const t=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>t.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{t.abort()}),n.signal=t.signal}return n}/**
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
 */function F(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new $(`${A(e)}`,e);return ke(e)}else if(e.promptFeedback)throw new $(`Text not available. ${A(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new $(`${A(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),X(e)[0]}else if(e.promptFeedback)throw new $(`Function call not available. ${A(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),k(e.candidates[0]))throw new $(`${A(e)}`,e);return X(e)}else if(e.promptFeedback)throw new $(`Function call not available. ${A(e)}`,e)},e}function ke(e){var n,t,i,s;const a=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const r of(s=(i=e.candidates)===null||i===void 0?void 0:i[0].content)===null||s===void 0?void 0:s.parts)r.text&&a.push(r.text),r.executableCode&&a.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&a.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}function X(e){var n,t,i,s;const a=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const r of(s=(i=e.candidates)===null||i===void 0?void 0:i[0].content)===null||s===void 0?void 0:s.parts)r.functionCall&&a.push(r.functionCall);if(a.length>0)return a}const je=[R.RECITATION,R.SAFETY,R.LANGUAGE];function k(e){return!!e.finishReason&&je.includes(e.finishReason)}function A(e){var n,t,i;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((i=e.candidates)===null||i===void 0)&&i[0]){const a=e.candidates[0];k(a)&&(s+=`Candidate was blocked due to ${a.finishReason}`,a.finishMessage&&(s+=`: ${a.finishMessage}`))}return s}function M(e){return this instanceof M?(this.v=e,this):new M(e)}function De(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(e,n||[]),s,a=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(u){i[u]&&(s[u]=function(h){return new Promise(function(g,v){a.push([u,h,g,v])>1||l(u,h)})})}function l(u,h){try{o(i[u](h))}catch(g){p(a[0][3],g)}}function o(u){u.value instanceof M?Promise.resolve(u.value.v).then(m,f):p(a[0][2],u)}function m(u){l("next",u)}function f(u){l("throw",u)}function p(u,h){u(h),a.shift(),a.length&&l(a[0][0],a[0][1])}}/**
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
 */const Z=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Le(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=Be(n),[i,s]=t.tee();return{stream:Ge(i),response:Fe(s)}}async function Fe(e){const n=[],t=e.getReader();for(;;){const{done:i,value:s}=await t.read();if(i)return F(Ue(n));n.push(s)}}function Ge(e){return De(this,arguments,function*(){const t=e.getReader();for(;;){const{value:i,done:s}=yield M(t.read());if(s)break;yield yield M(F(i))}})}function Be(e){const n=e.getReader();return new ReadableStream({start(i){let s="";return a();function a(){return n.read().then(({value:r,done:l})=>{if(l){if(s.trim()){i.error(new C("Failed to parse stream"));return}i.close();return}s+=r;let o=s.match(Z),m;for(;o;){try{m=JSON.parse(o[1])}catch{i.error(new C(`Error parsing JSON response: "${o[1]}"`));return}i.enqueue(m),s=s.substring(o[0].length),o=s.match(Z)}return a()})}}})}function Ue(e){const n=e[e.length-1],t={promptFeedback:n==null?void 0:n.promptFeedback};for(const i of e){if(i.candidates)for(const s of i.candidates){const a=s.index;if(t.candidates||(t.candidates=[]),t.candidates[a]||(t.candidates[a]={index:s.index}),t.candidates[a].citationMetadata=s.citationMetadata,t.candidates[a].groundingMetadata=s.groundingMetadata,t.candidates[a].finishReason=s.finishReason,t.candidates[a].finishMessage=s.finishMessage,t.candidates[a].safetyRatings=s.safetyRatings,s.content&&s.content.parts){t.candidates[a].content||(t.candidates[a].content={role:s.content.role||"user",parts:[]});const r={};for(const l of s.content.parts)l.text&&(r.text=l.text),l.functionCall&&(r.functionCall=l.functionCall),l.executableCode&&(r.executableCode=l.executableCode),l.codeExecutionResult&&(r.codeExecutionResult=l.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),t.candidates[a].content.parts.push(r)}}i.usageMetadata&&(t.usageMetadata=i.usageMetadata)}return t}/**
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
 */async function oe(e,n,t,i){const s=await P(n,_.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(t),i);return Le(s)}async function ae(e,n,t,i){const a=await(await P(n,_.GENERATE_CONTENT,e,!1,JSON.stringify(t),i)).json();return{response:F(a)}}/**
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
 */function re(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function T(e){let n=[];if(typeof e=="string")n=[{text:e}];else for(const t of e)typeof t=="string"?n.push({text:t}):n.push(t);return He(n)}function He(e){const n={role:"user",parts:[]},t={role:"function",parts:[]};let i=!1,s=!1;for(const a of e)"functionResponse"in a?(t.parts.push(a),s=!0):(n.parts.push(a),i=!0);if(i&&s)throw new C("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!s)throw new C("No content is provided for sending chat message.");return i?n:t}function qe(e,n){var t;let i={model:n==null?void 0:n.model,generationConfig:n==null?void 0:n.generationConfig,safetySettings:n==null?void 0:n.safetySettings,tools:n==null?void 0:n.tools,toolConfig:n==null?void 0:n.toolConfig,systemInstruction:n==null?void 0:n.systemInstruction,cachedContent:(t=n==null?void 0:n.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const s=e.generateContentRequest!=null;if(e.contents){if(s)throw new N("CountTokensRequest must have one of contents or generateContentRequest, not both.");i.contents=e.contents}else if(s)i=Object.assign(Object.assign({},i),e.generateContentRequest);else{const a=T(e);i.contents=[a]}return{generateContentRequest:i}}function ee(e){let n;return e.contents?n=e:n={contents:[T(e)]},e.systemInstruction&&(n.systemInstruction=re(e.systemInstruction)),n}function Ke(e){return typeof e=="string"||Array.isArray(e)?{content:T(e)}:e}/**
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
 */const te=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],We={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ye(e){let n=!1;for(const t of e){const{role:i,parts:s}=t;if(!n&&i!=="user")throw new C(`First content should be with role 'user', got ${i}`);if(!q.includes(i))throw new C(`Each item should include role field. Got ${i} but valid roles are: ${JSON.stringify(q)}`);if(!Array.isArray(s))throw new C("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new C("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of s)for(const o of te)o in l&&(a[o]+=1);const r=We[i];for(const l of te)if(!r.includes(l)&&a[l]>0)throw new C(`Content with role '${i}' can't contain '${l}' part`);n=!0}}/**
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
 */const ne="SILENT_ERROR";class Ve{constructor(n,t,i,s={}){this.model=t,this.params=i,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,i!=null&&i.history&&(Ye(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n,t={}){var i,s,a,r,l,o;await this._sendPromise;const m=T(n),f={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(o=this.params)===null||o===void 0?void 0:o.cachedContent,contents:[...this._history,m]},p=Object.assign(Object.assign({},this._requestOptions),t);let u;return this._sendPromise=this._sendPromise.then(()=>ae(this._apiKey,this.model,f,p)).then(h=>{var g;if(h.response.candidates&&h.response.candidates.length>0){this._history.push(m);const v=Object.assign({parts:[],role:"model"},(g=h.response.candidates)===null||g===void 0?void 0:g[0].content);this._history.push(v)}else{const v=A(h.response);v&&console.warn(`sendMessage() was unsuccessful. ${v}. Inspect response object for details.`)}u=h}),await this._sendPromise,u}async sendMessageStream(n,t={}){var i,s,a,r,l,o;await this._sendPromise;const m=T(n),f={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(o=this.params)===null||o===void 0?void 0:o.cachedContent,contents:[...this._history,m]},p=Object.assign(Object.assign({},this._requestOptions),t),u=oe(this._apiKey,this.model,f,p);return this._sendPromise=this._sendPromise.then(()=>u).catch(h=>{throw new Error(ne)}).then(h=>h.response).then(h=>{if(h.candidates&&h.candidates.length>0){this._history.push(m);const g=Object.assign({},h.candidates[0].content);g.role||(g.role="model"),this._history.push(g)}else{const g=A(h);g&&console.warn(`sendMessageStream() was unsuccessful. ${g}. Inspect response object for details.`)}}).catch(h=>{h.message!==ne&&console.error(h)}),u}}/**
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
 */async function Qe(e,n,t,i){return(await P(n,_.COUNT_TOKENS,e,!1,JSON.stringify(t),i)).json()}/**
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
 */async function ze(e,n,t,i){return(await P(n,_.EMBED_CONTENT,e,!1,JSON.stringify(t),i)).json()}async function Je(e,n,t,i){const s=t.requests.map(r=>Object.assign(Object.assign({},r),{model:n}));return(await P(n,_.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),i)).json()}/**
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
 */class ie{constructor(n,t,i={}){this.apiKey=n,this._requestOptions=i,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=re(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(n,t={}){var i;const s=ee(n),a=Object.assign(Object.assign({},this._requestOptions),t);return ae(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},s),a)}async generateContentStream(n,t={}){var i;const s=ee(n),a=Object.assign(Object.assign({},this._requestOptions),t);return oe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},s),a)}startChat(n){var t;return new Ve(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},n),this._requestOptions)}async countTokens(n,t={}){const i=qe(n,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return Qe(this.apiKey,this.model,i,s)}async embedContent(n,t={}){const i=Ke(n),s=Object.assign(Object.assign({},this._requestOptions),t);return ze(this.apiKey,this.model,i,s)}async batchEmbedContents(n,t={}){const i=Object.assign(Object.assign({},this._requestOptions),t);return Je(this.apiKey,this.model,n,i)}}/**
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
 */class Xe{constructor(n){this.apiKey=n}getGenerativeModel(n,t){if(!n.model)throw new C("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ie(this.apiKey,n,t)}getGenerativeModelFromCachedContent(n,t,i){if(!n.name)throw new N("Cached content must contain a `name` field.");if(!n.model)throw new N("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const r of s)if(t!=null&&t[r]&&n[r]&&(t==null?void 0:t[r])!==n[r]){if(r==="model"){const l=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,o=n.model.startsWith("models/")?n.model.replace("models/",""):n.model;if(l===o)continue}throw new N(`Different value for "${r}" specified in modelParams (${t[r]}) and cachedContent (${n[r]})`)}const a=Object.assign(Object.assign({},t),{model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n});return new ie(this.apiKey,a,i)}}const L={},Ze=1e4;function et(e,n,t){return new Promise((i,s)=>{const a=setTimeout(()=>s(new Error(`${t} timed out after ${n}ms`)),n);e.then(r=>{clearTimeout(a),i(r)}).catch(r=>{clearTimeout(a),s(r)})})}function tt(e){if(!Array.isArray(e)||e.length===0)return[];const n=e.filter(a=>!!(a&&typeof a.content=="string"&&a.content.trim().length>0)).slice(-6).map(a=>({role:a.role==="assistant"?"model":"user",parts:[{text:a.content.trim()}]})),t=n.findIndex(a=>a.role==="user");if(t===-1)return[];const i=n.slice(t),s=[];for(const a of i){const r=s[s.length-1];r&&r.role===a.role?r.parts[0].text=`${r.parts[0].text}
${a.parts[0].text}`:s.push(a)}return s}async function nt(e,n,t,i,s,a,r,l){var g,v;const o=(e||"").toLowerCase(),m=!!t.metadata.isUnavailable,f=typeof t.current.pm25=="number"&&Number.isFinite(t.current.pm25)?t.current.pm25:0;if(o.includes("inhaler")||o.includes("puff")||o.includes("dosage")||o.includes("dose")||o.includes("medicine")||o.includes("medication")||o.includes("steroid")||o.includes("albuterol")||o.includes("budecort")||o.includes("foracort")||o.includes("asthma attack")||o.includes("chest pain")||o.includes("diagnos")||o.includes("prescri")||o.includes("shortness of breath"))return`Medical & Clinical Triage Notice:
BreatheWise AI is an environmental lifestyle and exposure-reduction assistant, NOT a medical diagnostic or clinical prescribing service.

We cannot recommend medication dosages, advise on prescription inhaler adjustments, or diagnose clinical symptoms.

• If you are experiencing acute shortness of breath, continuous wheezing, chest tightness, or declining peak flow, please consult your licensed physician or seek emergency medical care immediately.
• Environmental Safety Advice: ${m?`Live atmospheric readings are currently unavailable for ${t.city}.`:`In ${t.city}, current PM2.5 is ${f} µg/m³ (CPCB NAQI ${t.current.aqi} — ${t.current.aqiCategory}).`} Maintain a sealed indoor envelope with continuous HEPA filtration active, and avoid any outdoor physical exertion.`;if(m&&!o.includes("mask")&&!o.includes("cpcb")&&!o.includes("plant"))return`Telemetry Unavailable for ${t.city}, ${t.state} (${t.metadata.latitude.toFixed(2)}°N, ${t.metadata.longitude.toFixed(2)}°E):
Live atmospheric measurements are currently unavailable for this location (no fabricated readings are used).

• Retry the live connection in the header, or select a calibrated monitoring station from the location picker for live guidance.
${r?`• Your active scenario context: ${r}`:""}`;const p=a||(L==null?void 0:L.VITE_GEMINI_API_KEY),u=t.metadata.isLive?`Live Copernicus CAMS (${t.metadata.fetchTimestamp})`:(g=t.metadata.fetchTimestamp)!=null&&g.includes("Cached")?`Cached Copernicus CAMS (${t.metadata.fetchTimestamp})`:`Calibrated Regional Baseline (${t.metadata.fetchTimestamp})`,h=()=>{if(o.includes("live data")||o.includes("real-time")||o.includes("realtime")||o.includes("source")||o.includes("fresh"))return`Data Provenance & Freshness for ${t.city} (${t.metadata.latitude.toFixed(2)}°N, ${t.metadata.longitude.toFixed(2)}°E):
• Status: ${u}
• Provider: ${t.metadata.provider}
• Standard: ${t.current.aqiStandard}

${t.metadata.isLive?"Current readings reflect live gridded Copernicus Atmosphere Monitoring Service (CAMS 0.25°) telemetry and meteorological observations.":"Note: Live network telemetry is not active for this snapshot; values reflect cached or calibrated regional baseline data rather than a fresh real-time observation."}`;if(o.includes("why")&&o.includes("aqi")||o.includes("pm2.5 is low")||o.includes("pm25 is low")){const b=t.current.primaryPollutant||"PM2.5";return`Why CPCB NAQI Can Be High Even When PM2.5 Is Moderate/Low:
Under India's Central Pollution Control Board (CPCB) NAQI standard, the overall AQI is the MAXIMUM sub-index across all monitored pollutants (PM2.5, PM10, NO2, SO2, CO, O3) — not an average.

In ${t.city} right now:
• Overall CPCB NAQI: ${t.current.aqi} (${t.current.aqiCategory})
• Dominant Pollutant Driver: ${b}
• Current Readings: PM2.5 = ${f} µg/m³${t.current.pm10!=null?`, PM10 = ${t.current.pm10} µg/m³`:""}${t.current.no2!=null?`, NO2 = ${t.current.no2} µg/m³`:""}${t.current.o3!=null?`, O3 = ${t.current.o3} µg/m³`:""}

Therefore, if coarse dust (PM10), traffic NO2, or ground-level Ozone spikes while fine PM2.5 stays low, the overall NAQI reflects that dominant pollutant.`}if(o.includes("run")||o.includes("jog")||o.includes("exercise")||o.includes("workout")||o.includes("bike")&&o.includes("exercise")){const b=s==="pediatric"?" For children/pediatric lungs (higher breathing rate per kg body weight), restrict high-traffic outdoor exertion.":s==="senior_respiratory"?" For senior or asthmatic airways, keep rescue medication accessible and prefer light, low-traffic timing.":s==="outdoor_athlete"?" For athletes, aerobic exertion multiplies minute ventilation from ~8 L/min up to 55+ L/min.":"";return f>120?`Outdoor Exercise Safety Alert for ${t.city}:
Current PM2.5 is ${f} µg/m³ (CPCB NAQI ${t.current.aqi} — ${t.current.aqiCategory}). Under aerobic exertion, your minute ventilation rises to over 55 L/min, dramatically accelerating micro-particulate intake.${b}

Recommendation: Cancel outdoor cardio workouts today. Shift exercise indoors to a room with HEPA filtration active. Even during the diurnal minimum (${i.displayWindow}), PM2.5 remains hazardous for aerobic respiration.`:`Outdoor Exercise Guidance for ${t.city}:
Current PM2.5 is ${f} µg/m³ (CPCB NAQI ${t.current.aqi} — ${t.current.aqiCategory}).${b} If running or exercising outdoors today, time your session strictly within the diurnal minimum window (${i.displayWindow}) when atmospheric dispersion is greatest. Sensitive individuals and runners should wear a certified N95 respirator to minimize airway irritation.`}if(o.includes("window")||o.includes("ventilat")||o.includes("flush")||o.includes("air out")){const b=r?`
• Active Setup: ${r}`:"";return f>60?`Indoor Air Safety Notice for ${t.city}:
Current outdoor PM2.5 is ${f} µg/m³. Natural ventilation is strictly NOT recommended today. Opening windows will flood your home with outdoor particulates, degrading indoor air quality. Keep all exterior windows sealed, set air conditioners to internal recirculation, and run your HEPA air purifier.${b}`:`Indoor Ventilation Protocol for ${t.city}:
Outdoor air quality is ${f<=30?"clean":"moderate"} (PM2.5: ${f} µg/m³). You may conduct a brief 15 to 20-minute cross-ventilation flush during the diurnal dispersion window (${i.displayWindow}) to evacuate indoor CO2 and cooking odors. Seal all windows before evening traffic congestion begins.${b}`}if(o.includes("commute")||o.includes("metro")||o.includes("auto")||o.includes("traffic")||o.includes("bus")||o.includes("drive"))return`Commute Exposure Analysis for ${t.city}:
In dense traffic corridors, open two-wheelers and auto-rickshaws expose commuters to direct tailpipe exhaust (~30% higher than ambient background). Switching to the AC Metro reduces your commute particulate exposure by up to 72% while saving ~0.88 kg of CO2 vs an auto-rickshaw (or ~2.07 kg vs a private AC cab) on a 14 km trip.`;if(o.includes("child")||o.includes("kid")||o.includes("school")||o.includes("baby")||o.includes("family"))return f>100?`Child Air Protection Advisory for ${t.city}:
Children have developing lungs and higher respiratory rates per kilogram of body weight. With current PM2.5 at ${f} µg/m³, ensure schools conduct physical education indoors and keep outdoor playtime to a strict minimum. When outdoors for necessary transit, equip a well-fitted pediatric particulate mask.`:`Family Air Quality Guidance:
Outdoor PM2.5 is ${f} µg/m³. Today's relatively lower exposure window is ${i.displayWindow}. Schedule outdoor family activities during this window and avoid major arterial roadways during morning and evening rush hours.`;if(o.includes("inhaled")||o.includes("exposure simulation")||o.includes("personal exposure")||o.includes("contributed most")){const b=r?`
• Active Scenario: ${r}`:"";return`Personal Exposure Interpretation for ${t.city} (${u}):
• Why this matters: Gross inhaled PM2.5 mass (M_inh = C_ambient × V_E × t × (1 - η_mask)) depends on three multipliers: ambient concentration (${f} µg/m³), breathing rate (minute ventilation V_E, which rises from 16 L/min walking to 55 L/min running), and duration.${b}
• Why now: Today's lowest outdoor exposure window is ${i.displayWindow} (${i.statusLabel}); exercising or commuting outside this window exposes airways to higher peak concentrations.
• What impact: Wearing a well-fitted N95 respirator cuts inhaled particulate mass by ~95%, while shifting vigorous activity indoors with HEPA filtration or to ${i.displayWindow} is the highest-leverage reduction.`}if(o.includes("mask")||o.includes("n95")||o.includes("cloth")||o.includes("surgical")||o.includes("respirator"))return`Mask Efficacy & Barrier Science:
• Cloth Masks: Provide only 20–25% nominal filtration for PM2.5 because woven fabric pores (20–100 µm) are much larger than fine combustion aerosols (<2.5 µm).
• Surgical Masks: Filter ~60% under ideal conditions, but lack perimeter facial seal, allowing inward leakage around the cheeks and nose bridge.
• Certified N95 / FFP2: Provides >95% filtration efficiency using electrostatically charged meltblown polypropylene microfibers that capture sub-micron particles via impaction, interception, and diffusion.

Recommendation: When ambient PM2.5 exceeds 90 µg/m³, wear a snug-fitting N95 respirator for all outdoor transit.`;if(o.includes("plant")||o.includes("plants")||o.includes("nasa"))return`Indoor Plants vs. Air Quality Reality:
While the 1989 NASA Clean Air Study demonstrated that potted plants absorb certain VOCs (like benzene and formaldehyde) in sealed airtight test chambers over days, peer-reviewed building science studies show that plants have virtually NEGLIGIBLE (<1%) capacity to remove ambient fine particulate matter (PM2.5) in real-world ventilated rooms.

To clean particulate air indoors, mechanical HEPA filtration (with a Clean Air Delivery Rate of 200–300 m³/h) is required. Plants add psychological calm and aesthetics, but cannot substitute for a particulate filter.`;if(o.includes("inversion")||o.includes("winter")||o.includes("why is pollution")||o.includes("stubble")||o.includes("night"))return`Atmospheric Mechanics & Inversion Trapping in ${t.city}:
During clear winter evenings, the Earth's surface radiates heat rapidly into space, cooling the ground air layer while warmer air remains aloft. This creates a "thermal inversion cap" where the planetary boundary layer collapses from ~1,200 meters in the afternoon down to 100–200 meters overnight.

With low surface wind speeds (<6 km/h), vehicular tailpipe emissions, brick kiln soot, and biomass smoke become physically trapped in a thin ground blanket, causing PM2.5 to double between 8 PM and 9 AM. Midday solar heating breaks this cap, creating today's lower exposure window (${i.displayWindow}).`;if(o.includes("sleep")||o.includes("bedroom")||o.includes("overnight")||o.includes("nighttime"))return`Overnight Bedroom Air Protocol for ${t.city}:
Humans spend approximately 7 to 9 continuous hours in the bedroom, inhaling 2,500 to 3,500 litres of air. Because outdoor nocturnal inversion traps severe pollution at ground level, particles seep through window cracks.

Actionable Directive:
1. Keep bedroom windows and doors closed to minimize the infiltration volume.
2. Run your HEPA air purifier continuously on Quiet / Medium mode placed at least 1 meter away from walls and near breathing height.
3. Avoid burning mosquito coils or dhoop incense, which emit high concentrations of formaldehyde and PM2.5 in closed bedrooms.`;if(o.includes("cpcb")||o.includes("epa")||o.includes("difference between")||o.includes("standard")||o.includes("scale"))return`Understanding CPCB NAQI vs. US EPA AQI:
• Indian CPCB NAQI: Calibrated by the Central Pollution Control Board (2014) for Indian ambient realities. Its PM2.5 scale is: 0–30 (Good), 31–60 (Satisfactory), 61–90 (Moderate), 91–120 (Poor), 121–250 (Very Poor), and 250+ (Severe). Current CPCB NAQI for ${t.city} is ${t.current.aqi} (${t.current.aqiCategory}).
• US EPA AQI: Employs stricter public health brackets: 0–12 µg/m³ (Good), 12.1–35.4 (Moderate), 35.5–55.4 (Unhealthy for Sensitive), 55.5–150.4 (Unhealthy), 150.5–250.4 (Very Unhealthy), and 250.5+ (Hazardous).

BreatheWise displays both in the Transparency Drawer so users and judges can compare verified global standards side-by-side.`;if(o.includes("primary")||o.includes("dominant")||o.includes("driving")||o.includes("which pollutant")||o.includes("main problem")){const b=t.current.primaryPollutant||"PM2.5",w=t.current.pm10!=null?` PM10 is ${t.current.pm10} µg/m³.`:"",O=t.current.no2!=null?` NO2 is ${t.current.no2} µg/m³.`:"",I=t.current.o3!=null?` Ozone is ${t.current.o3} µg/m³.`:"";return`Primary Pollutant Analysis for ${t.city}:
The governing pollutant driving your CPCB NAQI of ${t.current.aqi} (${t.current.aqiCategory}) is ${b} (PM2.5 concentration: ${f} µg/m³).${w}${O}${I}

Fine particulate matter (<2.5 µm) originates primarily from vehicular combustion, biomass/stubble smoke, and industrial emissions. Because PM2.5 particles are small enough to penetrate deep into pulmonary alveoli and enter the bloodstream, personal barrier protection (N95) and indoor HEPA air cleaning are your most effective interventions today.`}if(o.includes("when to")||o.includes("best time")||o.includes("what time")||o.includes("shift")||o.includes("outdoor timing"))return`Daily Outdoor Exposure Planning for ${t.city}:
• Optimal Window: Today's lowest relative exposure window is ${i.displayWindow} (Average PM2.5: ~${i.averagePm25} µg/m³, providing a ${i.reductionVsPeakPercent}% drop vs peak hours).
• Convective Mechanism: Daytime solar insolation expands the planetary boundary layer, diluting ground-level exhaust.
• Actionable Guidance: Shift all essential outdoor errands, groceries, or transit to ${i.displayWindow}. Avoid outdoor exposure between 7:00–10:00 AM and 5:30–8:30 PM when surface nocturnal inversion traps tailpipe plumes at breathing level.`;if(o.includes("purifier")||o.includes("hepa")||o.includes("ionizer")||o.includes("cadr")||o.includes("ozone generator"))return`Air Purifier Science & Technology Guide:
• True HEPA (H13 / H14): Mechanical fiberglass filtration that captures at least 99.97% of 0.3 µm particles. Safe, zero emissions, and the gold standard for particulate removal.
• Activated Carbon Stage: Necessary to adsorb toxic gases, VOCs, and cooking odors that pass through HEPA.
• CRITICAL WARNING — Avoid Ionizers & Ozone Generators: Electronic ionizers and electrostatic cleaners produce secondary Ozone (O3) and reactive free radicals as byproducts. Ozone is a severe pulmonary irritant that exacerbates asthma and damages airway epithelial tissue.
• Sizing Rule: Ensure your purifier CADR (Clean Air Delivery Rate) provides at least 4 to 5 Air Changes per Hour (ACH) for your room volume (m³).`;if(o.includes("what should i do")||o.includes("what to avoid")||o.includes("right now")||o.includes("checklist")||o.includes("action"))return`Immediate Air Protection Action Checklist for ${t.city} (PM2.5: ${f} µg/m³):
1. ENVELOPE: ${f>60?"Keep all exterior windows, doors, and balcony vents strictly sealed.":"Brief 15-min natural ventilation safe during "+i.displayWindow+"."}
2. INDOOR: Run your HEPA air purifier on Medium/Turbo mode in the primary living or sleeping area.
3. TRANSIT: Avoid open two-wheeler or auto-rickshaw transit in traffic. Choose AC Metro or enclosed vehicles with internal AC recirculation.
4. BARRIER: Wear a certified N95 respirator if stepping outside during peak traffic.
5. AVOID: Do not burn incense, candles, or mosquito coils; avoid indoor deep-frying without kitchen exhaust running on maximum.`;const E=r?`

Active Scenario Context: ${r}`:"";return`In ${t.city} (${u}), current PM2.5 is ${t.current.pm25} µg/m³ and CPCB NAQI is ${t.current.aqi} (${t.current.aqiCategory}, driven by ${t.current.primaryPollutant}). Today's lowest relative exposure window is ${i.displayWindow} (${i.statusLabel}). For your ${s.replace("_"," ")} profile, prioritize barrier protection (N95) during rush hours and keep indoor spaces sealed when outdoor PM2.5 exceeds 60 µg/m³.${E}`};if(!p||p==="YOUR_GEMINI_API_KEY")return h();try{const E=`You are BreatheWise AI, an expert Environmental Intelligence and Living Assistant.
Current verified environmental context for ${t.city}, ${t.state}, India (${t.metadata.latitude.toFixed(4)}°N, ${t.metadata.longitude.toFixed(4)}°E):
- Data Provenance: ${u} (Provider: ${t.metadata.provider})
- CPCB NAQI: ${t.current.aqi} (${t.current.aqiCategory}), Dominant Pollutant: ${t.current.primaryPollutant}
- Pollutants: PM2.5=${t.current.pm25} µg/m³, PM10=${t.current.pm10??"unobserved"} µg/m³, NO2=${t.current.no2??"unobserved"} µg/m³, SO2=${t.current.so2??"unobserved"} µg/m³, CO=${t.current.co??"unobserved"} mg/m³, O3=${t.current.o3??"unobserved"} µg/m³
- Weather: Temp=${t.weather.temperature}°C, Humidity=${t.weather.humidity}%, Wind=${t.weather.windSpeed} km/h
- Lowest Exposure Window: ${i.displayWindow} (${i.statusLabel})
- Active Vulnerability Profile: ${s}
- Ozone Warning: ${i.ozoneRiskWarning||"None"}
${r?`- User Active Scenarios: ${r}`:""}

STRICT RULES:
1. If PM2.5 > 60 µg/m³ or O3 > 100 µg/m³, NEVER tell the user to open windows or ventilate.
2. If PM2.5 > 120 µg/m³, advise against outdoor aerobic workouts.
3. Distinguish measured/modeled values honestly and state data provenance if asked. Never invent numbers or claim cached/baseline data is live.
4. Never diagnose diseases or prescribe medications.
Keep responses direct, actionable, and grounded in the exact numbers above.`,w=(l?l(p,E):new Xe(p).getGenerativeModel({model:"gemini-2.0-flash",systemInstruction:E})).startChat({history:tt(n)}),I=(v=(await et(w.sendMessage(e),Ze,"Gemini assistant")).response.text())==null?void 0:v.trim();if(!I)throw new Error("Empty response from Gemini");return I}catch(E){return console.warn("[BreatheWise] Gemini chat error, using deterministic response.",E),h()}}const at=()=>{const{telemetry:e,cleanAirWindow:n,userPreferences:t,sessionApiKey:i,setSessionApiKey:s,scenarioState:a,pendingAiPrompt:r,clearPendingAiPrompt:l}=he(),o=!!e.metadata.isUnavailable,m=e.city.includes("—")?e.city.split("—")[0].trim():e.city,f=()=>o?`Live atmospheric measurements are unavailable for ${e.city}, ${e.state}. Ask any exposure-protection question or select a monitoring station in the header.`:`Based on the current air quality in ${m}:
• Current AQI: ${e.current.aqi} (${e.current.aqiCategory}, driven by ${e.current.primaryPollutant})
• PM₂.₅: ${e.current.pm25} µg/m³
• Optimal Exposure Window: ${n.displayWindow}
• Ask me about exercise timing, masks, indoor air, or AQI drivers.`,[p,u]=x.useState([{id:"welcome",role:"assistant",content:f(),timestamp:"Just now"}]),[h,g]=x.useState(""),[v,E]=x.useState(!1),[b,w]=x.useState(!1),[O,I]=x.useState(i||""),G=x.useRef(null);x.useEffect(()=>{u(d=>d.length===1&&d[0].id==="welcome"?[{...d[0],content:f()}]:d)},[e.city,e.current.pm25,e.current.aqi,e.current.aqiCategory,e.current.primaryPollutant,n.displayWindow,o]),x.useEffect(()=>{var d;p.length>1&&((d=G.current)==null||d.scrollIntoView({behavior:"smooth"}))},[p]),x.useEffect(()=>{if(r&&!v){const d=r;l(),j(d)}},[r]);const ce=()=>{const d=a.commute,y=a.indoor,S=a.exposure;return`Commute: ${d.origin} -> ${d.destination} (${d.distanceKm} km via ${d.mode}); Indoor: ${y.roomType} ${y.roomAreaM2}m² at ${y.ventilationAch} ACH, Purifier ${y.usingPurifier?`ON (${y.purifierCadr} m³/h CADR)`:"OFF"}, Source=${y.indoorSource}; Exposure: ${S.activity} for ${S.durationMinutes} min, Mask=${S.maskType}.`},j=async d=>{const y=d||h;if(!y.trim()||v)return;const S={id:`u-${Date.now()}`,role:"user",content:y.trim(),timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};u(D=>[...D,S]),g(""),E(!0);try{const D=await nt(y,p,e,n,t.vulnerabilityProfile,i,ce()),de={id:`b-${Date.now()}`,role:"assistant",content:D,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};u(ue=>[...ue,de])}finally{E(!1)}},le=[{label:"Is it safe to exercise today?",icon:c.jsx(be,{className:"w-4 h-4 text-[#0284C7]"}),bg:"bg-[#E0F2FE]"},{label:"How can I reduce indoor pollution?",icon:c.jsx(Ce,{className:"w-4 h-4 text-[#16A34A]"}),bg:"bg-[#DCFCE7]"},{label:"Which mask is best?",icon:c.jsx(Ee,{className:"w-4 h-4 text-[#2563EB]"}),bg:"bg-[#DBEAFE]"},{label:"Why is AQI high when PM2.5 is low?",icon:c.jsx(ye,{className:"w-4 h-4 text-[#0D9488]"}),bg:"bg-[#CCFBF1]"},{label:"Is this based on live data?",icon:c.jsx(xe,{className:"w-4 h-4 text-[#D97706]"}),bg:"bg-[#FEF3C7]"}];return c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch animate-in fade-in duration-200",children:[c.jsxs("div",{className:"lg:col-span-8 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col min-h-[430px] max-h-[540px] overflow-hidden",children:[b&&c.jsxs("div",{className:"p-3.5 bg-[#F0F7FD] border-b border-[#CBE0F2] text-xs space-y-2 animate-in fade-in",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsxs("span",{className:"font-bold text-[#0C2340] flex items-center space-x-1.5",children:[c.jsx(fe,{className:"w-4 h-4 text-[#0EA5E9]"}),c.jsxs("span",{children:["Session-Only Gemini API Key ",i?"(Active)":"(Optional)"]})]}),c.jsx("button",{type:"button",onClick:()=>w(!1),className:"text-[#5A7896] hover:text-[#0C2340] font-bold p-1 cursor-pointer",children:"✕"})]}),c.jsx("p",{className:"text-[#476788] text-[11px]",children:"Stored only in volatile session memory and cleared when you close the tab."}),c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("input",{type:"password",placeholder:"AIzaSy...",value:O,onChange:d=>I(d.target.value),className:"flex-1 px-3 py-1.5 text-xs bg-white border border-[#CBE0F2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 font-mono"}),c.jsx("button",{type:"button",onClick:()=>{s(O.trim()),w(!1)},className:"px-4 py-1.5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white rounded-xl font-bold text-xs cursor-pointer",children:"Save"}),i&&c.jsx("button",{type:"button",onClick:()=>{s(""),I(""),w(!1)},className:"px-3 py-1.5 bg-white border border-rose-200 text-rose-700 rounded-xl font-medium text-xs hover:bg-rose-50 cursor-pointer",title:"Remove Key",children:c.jsx(ge,{className:"w-3.5 h-3.5"})})]})]}),c.jsxs("div",{className:"flex-1 p-5 overflow-y-auto space-y-4 text-[13px]",children:[p.map(d=>c.jsxs("div",{className:`flex items-start space-x-3 ${d.role==="user"?"justify-end":"justify-start"}`,children:[d.role==="assistant"&&c.jsx("div",{className:"w-9 h-9 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm",children:c.jsx("svg",{className:"w-4.5 h-4.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"})})}),c.jsxs("div",{className:`p-4 rounded-2xl max-w-[85%] sm:max-w-[80%] leading-relaxed ${d.role==="user"?"bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white shadow-sm font-medium":"bg-white/95 text-[#0C2340] border border-[#E6F1FA] shadow-2xs"}`,children:[d.role==="assistant"&&c.jsxs("div",{className:"font-extrabold text-[#0C2340] mb-1.5",children:["BreatheWise ",c.jsx("span",{className:"text-[#10B981]",children:"AI"})]}),c.jsx("div",{className:"whitespace-pre-wrap",children:d.content})]}),d.role==="user"&&c.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs",children:c.jsx(pe,{className:"w-4 h-4"})})]},d.id)),v&&c.jsxs("div",{className:"flex items-center space-x-2 text-[#476788] text-xs italic p-2",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-[#0EA5E9] animate-ping mr-1"}),"Evaluating live telemetry and guidelines..."]}),c.jsx("div",{ref:G})]}),c.jsxs("div",{className:"p-3.5 border-t border-[#E6F1FA] bg-white/85 space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between px-1 text-[10.5px] font-semibold text-[#5A7896]",children:[c.jsxs("span",{children:["Engine:"," ",c.jsx("strong",{className:i?"text-[#059669]":"text-[#0284C7]",children:i?"Gemini 2.0 Flash (Live Key Active)":"Deterministic Physics Engine (Add Key for Live Gemini)"})]}),c.jsxs("span",{className:"hidden sm:inline text-[#7B97B2]",children:["Profile: ",t.vulnerabilityProfile.replace("_"," ")]})]}),c.jsxs("form",{onSubmit:d=>{d.preventDefault(),j()},className:"flex items-center space-x-2",children:[c.jsx("button",{type:"button",onClick:()=>w(d=>!d),"aria-label":"Gemini API Key Settings",title:i?"Gemini Key Active (Click to manage)":"Optional Session Gemini Key",className:`p-2.5 rounded-xl border transition-all cursor-pointer shrink-0 ${i||b?"bg-[#E0F2FE] border-[#0EA5E9] text-[#0284C7]":"bg-white border-[#DCEBF7] text-[#476788] hover:text-[#0C2340]"}`,children:c.jsx(me,{className:"w-4 h-4"})}),c.jsx("input",{type:"text",value:h,onChange:d=>g(d.target.value),placeholder:"Ask about air quality, health tips, or exposure...",className:"flex-1 bg-white border border-[#DCEBF7] rounded-xl px-4 py-2.5 text-xs text-[#0C2340] placeholder:text-[#7B97B2] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/25 focus:border-[#0EA5E9] transition-all"}),c.jsx("button",{type:"submit",disabled:!h.trim()||v,"aria-label":"Send question",className:"p-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:brightness-105 disabled:opacity-45 text-white transition-all cursor-pointer shadow-sm shrink-0",children:c.jsx(ve,{className:"w-4 h-4"})})]})]})]}),c.jsxs("div",{className:"lg:col-span-4 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col space-y-3",children:[c.jsx("h2",{className:"text-[15px] font-extrabold text-[#0C2340]",children:"Quick Questions"}),c.jsx("div",{className:"space-y-2.5 flex-1 flex flex-col justify-center",children:le.map(d=>c.jsxs("button",{type:"button",onClick:()=>j(d.label),disabled:v,className:"w-full px-3.5 py-3 rounded-xl bg-white/95 hover:bg-white border border-[#E6F1FA] hover:border-[#0EA5E9]/60 flex items-center space-x-3 transition-all cursor-pointer text-left shadow-2xs",children:[c.jsx("div",{className:`w-8 h-8 rounded-lg ${d.bg} flex items-center justify-center shrink-0`,children:d.icon}),c.jsx("span",{className:"text-xs font-bold text-[#0C2340] leading-snug",children:d.label})]},d.label))})]})]})};export{at as AiAssistantWorkspace};
