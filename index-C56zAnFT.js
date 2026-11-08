(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.
querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.
addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){
const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin===
"use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}
function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Wd(e){return e&&e.__esModule&&Object.prototype.
hasOwnProperty.call(e,"default")?e.default:e}var nu={exports:{}},Al={},ru={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=Symbol.for("react.element"),Hd=Symbol.for("react.portal"),Qd=Symbol.for("react.fragment"),Kd=Symbol.for("react\
.strict_mode"),Yd=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Xd=Symbol.for("react.context"),Zd=Symbol.
for("react.forward_ref"),Jd=Symbol.for("react.suspense"),qd=Symbol.for("react.memo"),ef=Symbol.for("react.lazy"),Ws=Symbol.
iterator;function tf(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}
var lu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},
iu=Object.assign,ou={};function Ln(e,t,n){this.props=e,this.context=t,this.refs=ou,this.updater=n||lu}Ln.prototype.isReactComponent=
{};Ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): \
takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(
this,e,t,"setState")};Ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function su(){}
su.prototype=Ln.prototype;function zo(e,t,n){this.props=e,this.context=t,this.refs=ou,this.updater=n||lu}var Io=zo.prototype=
new su;Io.constructor=zo;iu(Io,Ln.prototype);Io.isPureReactComponent=!0;var Hs=Array.isArray,au=Object.prototype.hasOwnProperty,
Oo={current:null},uu={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.
ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)au.call(t,r)&&!uu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.
length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)
for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Nr,type:e,key:i,ref:o,props:l,_owner:Oo.current}}
function nf(e,t){return{$$typeof:Nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Do(e){return typeof e==
"object"&&e!==null&&e.$$typeof===Nr}function rf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}
var Qs=/\/+/g;function ai(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rf(""+e.key):t.toString(36)}function tl(e,t,n,r,l){
var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"num\
ber":o=!0;break;case"object":switch(e.$$typeof){case Nr:case Hd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+ai(o,0):r,Hs(l)?
(n="",e!=null&&(n=e.replace(Qs,"$&/")+"/"),tl(l,t,n,"",function(c){return c})):l!=null&&(Do(l)&&(l=nf(l,n+(!l.key||o&&o.
key===l.key?"":(""+l.key).replace(Qs,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Hs(e))for(var s=0;s<e.length;s++){
i=e[s];var a=r+ai(i,s);o+=tl(i,t,n,a,l)}else if(a=tf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.
value,a=r+ai(i,s++),o+=tl(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React chil\
d (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a co\
llection of children, use an array instead.");return o}function Or(e,t,n){if(e==null)return e;var r=[],l=0;return tl(e,r,
"","",function(i){return t.call(n,i,l++)}),r}function lf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){
(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e.
_result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={
current:null},nl={transition:null},of={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Oo};function du(){
throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Or,forEach:function(e,t,n){Or(e,
function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Or(e,function(){t++}),t},toArray:function(e){return Or(
e,function(t){return t})||[]},only:function(e){if(!Do(e))throw Error("React.Children.only expected to receive a single R\
eact element child.");return e}};$.Component=Ln;$.Fragment=Qd;$.Profiler=Yd;$.PureComponent=zo;$.StrictMode=Kd;$.Suspense=
Jd;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=of;$.act=du;$.cloneElement=function(e,t,n){if(e==null)throw Error(
"React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=iu({},e.props),l=e.key,i=e.
ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Oo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)
var s=e.type.defaultProps;for(a in t)au.call(t,a)&&!uu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.
length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Nr,
type:e.type,key:l,ref:i,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:Xd,_currentValue:e,_currentValue2:e,
_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gd,_context:e},e.Consumer=
e};$.createElement=cu;$.createFactory=function(e){var t=cu.bind(null,e);return t.type=e,t};$.createRef=function(){return{
current:null}};$.forwardRef=function(e){return{$$typeof:Zd,render:e}};$.isValidElement=Do;$.lazy=function(e){return{$$typeof:ef,
_payload:{_status:-1,_result:e},_init:lf}};$.memo=function(e,t){return{$$typeof:qd,type:e,compare:t===void 0?null:t}};$.
startTransition=function(e){var t=nl.transition;nl.transition={};try{e()}finally{nl.transition=t}};$.unstable_act=du;$.useCallback=
function(e,t){return ge.current.useCallback(e,t)};$.useContext=function(e){return ge.current.useContext(e)};$.useDebugValue=
function(){};$.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};$.useEffect=function(e,t){return ge.current.
useEffect(e,t)};$.useId=function(){return ge.current.useId()};$.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(
e,t,n)};$.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ge.
current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ge.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ge.
current.useReducer(e,t,n)};$.useRef=function(e){return ge.current.useRef(e)};$.useState=function(e){return ge.current.useState(
e)};$.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ge.
current.useTransition()};$.version="18.3.1";ru.exports=$;var S=ru.exports;const It=Wd(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=S,af=Symbol.for("react.element"),uf=Symbol.for("react.fragment"),cf=Object.prototype.hasOwnProperty,df=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.
ReactCurrentOwner,ff={key:!0,ref:!0,__self:!0,__source:!0};function fu(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+
n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)cf.call(t,r)&&!ff.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&
e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:af,type:e,key:i,ref:o,props:l,_owner:df.
current}}Al.Fragment=uf;Al.jsx=fu;Al.jsxs=fu;nu.exports=Al;var u=nu.exports,pu={exports:{}},Le={},mu={exports:{}},hu={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var D=P.length;P.push(O);e:for(;0<D;){var b=D-1>>>1,Z=P[b];if(0<l(Z,O))P[b]=O,P[D]=Z,D=b;else
break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],D=P.pop();if(D!==
O){P[0]=D;e:for(var b=0,Z=P.length,At=Z>>>1;b<At;){var nt=2*(b+1)-1,ze=P[nt],J=nt+1,Ie=P[J];if(0>l(ze,D))J<Z&&0>l(Ie,ze)?
(P[b]=Ie,P[J]=D,b=J):(P[b]=ze,P[nt]=D,b=nt);else if(J<Z&&0>l(Ie,D))P[b]=Ie,P[J]=D,b=J;else break e}}return O}function l(P,O){
var D=P.sortIndex-O.sortIndex;return D!==0?D:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="functio\
n"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.
now()-s}}var a=[],c=[],v=1,y=null,m=3,k=!1,g=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout==
"function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&
navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){
for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=P)r(c),O.sortIndex=O.expirationTime,t(a,O);else
break;O=n(c)}}function x(P){if(w=!1,p(P),!g)if(n(a)!==null)g=!0,pt(_);else{var O=n(c);O!==null&&In(x,O.startTime-P)}}function _(P,O){
g=!1,w&&(w=!1,f(L),L=-1),k=!0;var D=m;try{for(p(O),y=n(a);y!==null&&(!(y.expirationTime>O)||P&&!B());){var b=y.callback;
if(typeof b=="function"){y.callback=null,m=y.priorityLevel;var Z=b(y.expirationTime<=O);O=e.unstable_now(),typeof Z=="fu\
nction"?y.callback=Z:y===n(a)&&r(a),p(O)}else r(a);y=n(a)}if(y!==null)var At=!0;else{var nt=n(c);nt!==null&&In(x,nt.startTime-
O),At=!1}return At}finally{y=null,m=D,k=!1}}var j=!1,M=null,L=-1,A=5,T=-1;function B(){return!(e.unstable_now()-T<A)}function we(){
if(M!==null){var P=e.unstable_now();T=P;var O=!0;try{O=M(!0,P)}finally{O?Ye():(j=!1,M=null)}}else j=!1}var Ye;if(typeof d==
"function")Ye=function(){d(we)};else if(typeof MessageChannel<"u"){var h=new MessageChannel,re=h.port2;h.port1.onmessage=
we,Ye=function(){re.postMessage(null)}}else Ye=function(){I(we,0)};function pt(P){M=P,j||(j=!0,Ye())}function In(P,O){L=
I(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.
unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){
P.callback=null},e.unstable_continueExecution=function(){g||k||(g=!0,pt(_))},e.unstable_forceFrameRate=function(P){0>P||
125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is n\
ot supported"):A=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=
function(){return n(a)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var D=m;m=O;
try{return P()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=
function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=m;m=P;try{return O()}finally{m=D}},e.
unstable_scheduleCallback=function(P,O,D){var b=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D==
"number"&&0<D?b+D:b):D=b,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:
Z=5e3}return Z=D+Z,P={id:v++,callback:O,priorityLevel:P,startTime:D,expirationTime:Z,sortIndex:-1},D>b?(P.sortIndex=D,t(
c,P),n(a)===null&&P===n(c)&&(w?(f(L),L=-1):w=!0,In(x,D-b))):(P.sortIndex=Z,t(a,P),g||k||(g=!0,pt(_))),P},e.unstable_shouldYield=
B,e.unstable_wrapCallback=function(P){var O=m;return function(){var D=m;m=O;try{return P.apply(this,arguments)}finally{m=
D}}}})(hu);mu.exports=hu;var pf=mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=S,Re=pf;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)
t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or u\
se the non-minified dev environment for full errors and additional helpful warnings."}var yu=new Set,sr={};function Jt(e,t){
Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(sr[e]=t,e=0;e<t.length;e++)yu.add(t[e])}var at=!(typeof window>"u"||typeof window.
document>"u"||typeof window.document.createElement>"u"),Ai=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
Ks={},Ys={};function yf(e){return Ai.call(Ys,e)?!0:Ai.call(Ks,e)?!1:hf.test(e)?Ys[e]=!0:(Ks[e]=!0,!1)}function vf(e,t,n,r){
if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?
!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gf(e,t,n,r){if(t===
null||typeof t>"u"||vf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:
return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,
this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,
this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressConte\
ntEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ke(e,0,!1,e,null,!1,!1)});[["\
acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){
var t=e[0];ce[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){
ce[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].
forEach(function(e){ce[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer\
 disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline \
readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ke(e,3,!1,e.toLowerCase(),
null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ke(e,3,!0,e,null,!1,!1)});["captur\
e","download"].forEach(function(e){ce[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){
ce[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,
!1)});var Fo=/[\-:]([a-z])/g;function Ao(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form base\
line-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering \
dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adj\
ust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical \
horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-pos\
ition overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity st\
rikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-mi\
terlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness u\
nicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert\
-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fo,
Ao);ce[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(
" ").forEach(function(e){var t=e.replace(Fo,Ao);ce[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base",
"xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fo,Ao);ce[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/nam\
espace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=
new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(
function(e){ce[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function $o(e,t,n,r){var l=ce.hasOwnProperty(t)?ce[t]:null;
(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gf(t,n,l,r)&&(n=null),r||l===null?
yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:
"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?
e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for(
"react.element"),on=Symbol.for("react.portal"),sn=Symbol.for("react.fragment"),Uo=Symbol.for("react.strict_mode"),$i=Symbol.
for("react.profiler"),vu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),bo=Symbol.for("react.forward_ref"),
Ui=Symbol.for("react.suspense"),bi=Symbol.for("react.suspense_list"),Vo=Symbol.for("react.memo"),gt=Symbol.for("react.la\
zy"),ku=Symbol.for("react.offscreen"),Gs=Symbol.iterator;function Fn(e){return e===null||typeof e!="object"?null:(e=Gs&&
e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ui;function Yn(e){if(ui===void 0)try{throw Error()}catch(n){
var t=n.stack.trim().match(/\n( *(at )?)/);ui=t&&t[1]||""}return`
`+ui+e}var ci=!1;function di(e,t){if(!e||ci)return"";ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;
try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==
"object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){
r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.
stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,
s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),
a}while(1<=o&&0<=s);break}}}finally{ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yn(e):""}function kf(e){
switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("Suspen\
seList");case 0:case 2:case 15:return e=di(e.type,!1),e;case 11:return e=di(e.type.render,!1),e;case 1:return e=di(e.type,
!0),e;default:return""}}function Vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;
if(typeof e=="string")return e;switch(e){case sn:return"Fragment";case on:return"Portal";case $i:return"Profiler";case Uo:
return"StrictMode";case Ui:return"Suspense";case bi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gu:
return(e.displayName||"Context")+".Consumer";case vu:return(e._context.displayName||"Context")+".Provider";case bo:var t=e.
render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vo:return t=
e.displayName||null,t!==null?t:Vi(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return Vi(e(t))}catch{}}return null}
function wf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:
return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||
e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"\
Portal";case 3:return"Root";case 6:return"Text";case 16:return Vi(t);case 8:return t===Uo?"StrictMode":"Mode";case 22:return"\
Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:
return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||
null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"\
undefined":return e;case"object":return e;default:return""}}function wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===
"input"&&(t==="checkbox"||t==="radio")}function xf(e){var t=wu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.
constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="funct\
ion"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){
r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){
r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=xf(
e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wu(e)?e.checked?
"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>
"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bi(e,t){var n=t.checked;return X({},t,{
defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xs(e,t){var n=t.
defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState=
{initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Su(e,t){
t=t.checked,t!=null&&$o(e,"checked",t,!1)}function Wi(e,t){Su(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===
0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute(
"value");return}t.hasOwnProperty("value")?Hi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hi(e,t.type,Tt(t.defaultValue)),
t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zs(e,t,n){if(t.hasOwnProperty("v\
alue")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))
return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=
!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hi(e,t,n){(t!=="number"||ml(e.ownerDocument)!==e)&&(n==null?
e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function gn(e,t,n,r){
if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),
e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,l=0;l<e.length;l++){if(e[l].
value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=
!0)}}function Qi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,
children:""+e._wrapperState.initialValue})}function Js(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=
null){if(t!=null)throw Error(E(92));if(Gn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState=
{initialValue:Tt(n)}}function Cu(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.
defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qs(e){var t=e.textContent;
t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nu(e){switch(e){case"svg":return"http://www.w3.\
org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ki(e,t){
return e==null||e==="http://www.w3.org/1999/xhtml"?Nu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://w\
ww.w3.org/1999/xhtml":e}var Ar,Eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.
execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||
"innerHTML"in e)e.innerHTML=t;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+t.valueOf().toString()+
"</svg>",t=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){
if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,
aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,
columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,
gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,
lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sf=["Webkit",
"ms","Moz","O"];Object.keys(Jn).forEach(function(e){Sf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),
Jn[t]=Jn[e]})});function ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(
e)&&Jn[e]?(""+t).trim():t+"px"}function _u(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===
0,l=ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Cf=X({menuitem:!0},{area:!0,base:!0,br:!0,
col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(e,t){if(t){
if(Cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){
if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))
throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Gi(e,t){if(e.indexOf("-")===-1)
return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"\
font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=null;function Bo(e){
return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:
e}var Zi=null,kn=null,wn=null;function ea(e){if(e=_r(e)){if(typeof Zi!="function")throw Error(E(280));var t=e.stateNode;
t&&(t=Bl(t),Zi(e.stateNode,e.type,t))}}function Mu(e){kn?wn?wn.push(e):wn=[e]:kn=e}function Pu(){if(kn){var e=kn,t=wn;if(wn=
kn=null,ea(e),t)for(e=0;e<t.length;e++)ea(t[e])}}function Ru(e,t){return e(t)}function Lu(){}var fi=!1;function Tu(e,t,n){
if(fi)return e(t,n);fi=!0;try{return Ru(e,t,n)}finally{fi=!1,(kn!==null||wn!==null)&&(Lu(),Pu())}}function ur(e,t){var n=e.
stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCaptu\
re":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onM\
ouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||
e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(
E(231,t,typeof n));return n}var Ji=!1;if(at)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ji=!0}}),window.
addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ji=!1}function Nf(e,t,n,r,l,i,o,s,a){var c=Array.
prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var qn=!1,hl=null,yl=!1,qi=null,Ef={onError:function(e){
qn=!0,hl=e}};function jf(e,t,n,r,l,i,o,s,a){qn=!1,hl=null,Nf.apply(Ef,arguments)}function _f(e,t,n,r,l,i,o,s,a){if(jf.apply(
this,arguments),qn){if(qn){var c=hl;qn=!1,hl=null}else throw Error(E(198));yl||(yl=!0,qi=c)}}function qt(e){var t=e,n=e;
if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?
n:null}function zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==
null)return t.dehydrated}return null}function ta(e){if(qt(e)!==e)throw Error(E(188))}function Mf(e){var t=e.alternate;if(!t){
if(t=qt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.
alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ta(
l),e;if(i===r)return ta(l),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){
if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}
if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)
throw Error(E(188));return n.stateNode.current===n?e:t}function Iu(e){return e=Mf(e),e!==null?Ou(e):null}function Ou(e){
if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Du=Re.
unstable_scheduleCallback,na=Re.unstable_cancelCallback,Pf=Re.unstable_shouldYield,Rf=Re.unstable_requestPaint,te=Re.unstable_now,
Lf=Re.unstable_getCurrentPriorityLevel,Wo=Re.unstable_ImmediatePriority,Fu=Re.unstable_UserBlockingPriority,vl=Re.unstable_NormalPriority,
Tf=Re.unstable_LowPriority,Au=Re.unstable_IdlePriority,$l=null,et=null;function zf(e){if(et&&typeof et.onCommitFiberRoot==
"function")try{et.onCommitFiberRoot($l,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Df,If=Math.
log,Of=Math.LN2;function Df(e){return e>>>=0,e===0?32:31-(If(e)/Of|0)|0}var $r=64,Ur=4194304;function Xn(e){switch(e&-e){case 1:
return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:
return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:
return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gl(e,t){var n=e.
pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Xn(
s):(i&=o,i!==0&&(r=Xn(i)))}else o=n&~l,o!==0?r=Xn(o):i!==0&&(r=Xn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,
i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)
n=31-He(t),l=1<<n,r|=e[n],t&=~l;return r}function Ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:
return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:
return-1;default:return-1}}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<
i;){var o=31-He(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=Ff(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function eo(e){return e=
e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $u(){var e=$r;return $r<<=1,!($r&4194240)&&($r=64),
e}function pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=
0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function $f(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=
0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=
e.expirationTimes;0<n;){var l=31-He(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ho(e,t){var n=e.entangledLanes|=t;for(e=
e.entanglements;n;){var r=31-He(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var V=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?
16:536870912:4:1}var bu,Qo,Vu,Bu,Wu,to=!1,br=[],Nt=null,Et=null,jt=null,cr=new Map,dr=new Map,wt=[],Uf="mousedown mouseu\
p touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositi\
onend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
" ");function ra(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Et=null;break;case"\
mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointerc\
apture":case"lostpointercapture":dr.delete(t.pointerId)}}function $n(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e=
{blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=_r(t),t!==null&&Qo(t)),e):
(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bf(e,t,n,r,l){switch(t){case"\
focusin":return Nt=$n(Nt,e,t,n,r,l),!0;case"dragenter":return Et=$n(Et,e,t,n,r,l),!0;case"mouseover":return jt=$n(jt,e,t,
n,r,l),!0;case"pointerover":var i=l.pointerId;return cr.set(i,$n(cr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":
return i=l.pointerId,dr.set(i,$n(dr.get(i)||null,e,t,n,r,l)),!0}return!1}function Hu(e){var t=Vt(e.target);if(t!==null){
var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=zu(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){Vu(n)});return}}else if(t===
3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=
null}function rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=no(e.domEventName,e.eventSystemFlags,
t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xi=r,n.target.dispatchEvent(r),Xi=null}else
return t=_r(n),t!==null&&Qo(t),e.blockedOn=n,!1;t.shift()}return!0}function la(e,t,n){rl(e)&&n.delete(t)}function Vf(){to=
!1,Nt!==null&&rl(Nt)&&(Nt=null),Et!==null&&rl(Et)&&(Et=null),jt!==null&&rl(jt)&&(jt=null),cr.forEach(la),dr.forEach(la)}
function Un(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Vf)))}
function fr(e){function t(l){return Un(l,e)}if(0<br.length){Un(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===
e&&(r.blockedOn=null)}}for(Nt!==null&&Un(Nt,e),Et!==null&&Un(Et,e),jt!==null&&Un(jt,e),cr.forEach(t),dr.forEach(t),n=0;n<
wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Hu(n),n.blockedOn===
null&&wt.shift()}var xn=ft.ReactCurrentBatchConfig,kl=!0;function Bf(e,t,n,r){var l=V,i=xn.transition;xn.transition=null;
try{V=1,Ko(e,t,n,r)}finally{V=l,xn.transition=i}}function Wf(e,t,n,r){var l=V,i=xn.transition;xn.transition=null;try{V=4,
Ko(e,t,n,r)}finally{V=l,xn.transition=i}}function Ko(e,t,n,r){if(kl){var l=no(e,t,n,r);if(l===null)Ci(e,t,r,wl,n),ra(e,r);else if(bf(
l,e,t,n,r))r.stopPropagation();else if(ra(e,r),t&4&&-1<Uf.indexOf(e)){for(;l!==null;){var i=_r(l);if(i!==null&&bu(i),i=no(
e,t,n,r),i===null&&Ci(e,t,r,wl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ci(e,t,r,null,n)}}var wl=null;function no(e,t,n,r){
if(wl=null,e=Bo(r),e=Vt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zu(t),e!==null)return e;e=null}else if(n===
3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&
(e=null);return wl=e,null}function Qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"\
cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"\
invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"\
pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"\
touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"\
compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"b\
lur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"dra\
g":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"poi\
ntermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"\
mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case Wo:return 1;case Fu:return 4;case vl:case Tf:
return 16;case Au:return 536870912;default:return 16}default:return 16}}var St=null,Yo=null,ll=null;function Ku(){if(ll)
return ll;var e,t=Yo,n=t.length,r,l="value"in St?St.value:St.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-
e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return ll=l.slice(e,1<r?1-r:void 0)}function il(e){var t=e.keyCode;return"charCode"in
e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function ia(){return!1}
function Te(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.
currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=
null?i.defaultPrevented:i.returnValue===!1)?Vr:ia,this.isPropagationStopped=ia,this}return X(t.prototype,{preventDefault:function(){
this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&
(n.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?
n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},
isPersistent:Vr}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,
isTrusted:0},Go=Te(Tn),jr=X({},Tn,{view:0,detail:0}),Hf=Te(jr),mi,hi,bn,Ul=X({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,
pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(e){
return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){
return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(mi=e.screenX-bn.screenX,hi=e.screenY-bn.screenY):hi=
mi=0,bn=e),mi)},movementY:function(e){return"movementY"in e?e.movementY:hi}}),oa=Te(Ul),Qf=X({},Ul,{dataTransfer:0}),Kf=Te(
Qf),Yf=X({},jr,{relatedTarget:0}),yi=Te(Yf),Gf=X({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xf=Te(Gf),Zf=X({},
Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jf=Te(Zf),qf=X({},Tn,{data:0}),
sa=Te(qf),ep={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"\
OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tp={8:"Backspace",9:"Tab",
12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageD\
own",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"\
F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"Scro\
llLock",224:"Meta"},np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rp(e){var t=this.nativeEvent;
return t.getModifierState?t.getModifierState(e):(e=np[e])?!!t[e]:!1}function Xo(){return rp}var lp=X({},jr,{key:function(e){
if(e.key){var t=ep[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.
fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,
altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){
return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="ke\
ydown"||e.type==="keyup"?e.keyCode:0}}),ip=Te(lp),op=X({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,
tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aa=Te(op),sp=X({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,
metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),ap=Te(sp),up=X({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),
cp=Te(up),dp=X({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fp=Te(
dp),pp=[9,13,27,32],Zo=at&&"CompositionEvent"in window,er=null;at&&"documentMode"in document&&(er=document.documentMode);
var mp=at&&"TextEvent"in window&&!er,Yu=at&&(!Zo||er&&8<er&&11>=er),ua=" ",ca=!1;function Gu(e,t){switch(e){case"keyup":
return pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:
return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var an=!1;function hp(e,t){switch(e){case"\
compositionend":return Xu(t);case"keypress":return t.which!==32?null:(ca=!0,ua);case"textInput":return e=t.data,e===ua&&
ca?null:e;default:return null}}function yp(e,t){if(an)return e==="compositionend"||!Zo&&Gu(e,t)?(e=Ku(),ll=Yo=St=null,an=
!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.
char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&
t.locale!=="ko"?null:t.data;default:return null}}var vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,
number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function da(e){var t=e&&e.nodeName&&e.nodeName.
toLowerCase();return t==="input"?!!vp[e.type]:t==="textarea"}function Zu(e,t,n,r){Mu(r),t=xl(t,"onChange"),0<t.length&&(n=
new Go("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,pr=null;function gp(e){ac(e,0)}function bl(e){
var t=dn(e);if(xu(t))return e}function kp(e,t){if(e==="change")return t}var Ju=!1;if(at){var vi;if(at){var gi="oninput"in
document;if(!gi){var fa=document.createElement("div");fa.setAttribute("oninput","return;"),gi=typeof fa.oninput=="functi\
on"}vi=gi}else vi=!1;Ju=vi&&(!document.documentMode||9<document.documentMode)}function pa(){tr&&(tr.detachEvent("onprope\
rtychange",qu),pr=tr=null)}function qu(e){if(e.propertyName==="value"&&bl(pr)){var t=[];Zu(t,pr,e,Bo(e)),Tu(gp,t)}}function wp(e,t,n){
e==="focusin"?(pa(),tr=t,pr=n,tr.attachEvent("onpropertychange",qu)):e==="focusout"&&pa()}function xp(e){if(e==="selecti\
onchange"||e==="keyup"||e==="keydown")return bl(pr)}function Sp(e,t){if(e==="click")return bl(t)}function Cp(e,t){if(e===
"input"||e==="change")return bl(t)}function Np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.
is=="function"?Object.is:Np;function mr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===
null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ai.
call(t,l)||!Ke(e[l],t[l]))return!1}return!0}function ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ha(e,t){
var n=ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{
for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ma(n)}}function ec(e,t){return e&&t?e===t?!0:
e&&e.nodeType===3?!1:t&&t.nodeType===3?ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(
t)&16):!1:!1}function tc(){for(var e=window,t=ml();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.
href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ml(e.document)}return t}function Jo(e){var t=e&&e.nodeName&&
e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.
type==="password")||t==="textarea"||e.contentEditable==="true")}function Ep(e){var t=tc(),n=e.focusedElem,r=e.selectionRange;
if(t!==n&&n&&n.ownerDocument&&ec(n.ownerDocument.documentElement,n)){if(r!==null&&Jo(n)){if(t=r.start,e=r.end,e===void 0&&
(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&
t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?
i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ha(n,i);var o=ha(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||
e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),
e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=
n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&
n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jp=at&&"documentMode"in document&&
11>=document.documentMode,un=null,ro=null,nr=null,lo=!1;function ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?
n:n.ownerDocument;lo||un==null||un!==ml(r)||(r=un,"selectionStart"in r&&Jo(r)?r={start:r.selectionStart,end:r.selectionEnd}:
(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,
focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&mr(nr,r)||(nr=r,r=xl(ro,"onSelect"),0<r.length&&(t=new Go("onSelec\
t","select",null,t,n),e.push({event:t,listeners:r}),t.target=un)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.
toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br(
"Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","Transit\
ionEnd")},ki={},nc={};at&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,
delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.
transition);function Vl(e){if(ki[e])return ki[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in
nc)return ki[e]=t[n];return e}var rc=Vl("animationend"),lc=Vl("animationiteration"),ic=Vl("animationstart"),oc=Vl("trans\
itionend"),sc=new Map,va="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dra\
gEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input i\
nvalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut m\
ouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progres\
s rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange \
scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){sc.set(e,t),Jt(t,[e])}for(var wi=0;wi<va.length;wi++){
var xi=va[wi],_p=xi.toLowerCase(),Mp=xi[0].toUpperCase()+xi.slice(1);Ot(_p,"on"+Mp)}Ot(rc,"onAnimationEnd");Ot(lc,"onAni\
mationIteration");Ot(ic,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");
Ot(oc,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onP\
ointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click\
 focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin k\
eydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput",
"paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onComposition\
Start","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupd\
ate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied e\
ncrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking st\
alled suspend timeupdate volumechange waiting".split(" "),Pp=new Set("cancel close invalid load scroll toggle".split(" ").
concat(Zn));function ga(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_f(r,t,void 0,e),e.currentTarget=null}function ac(e,t){
t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=
o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;ga(l,s,c),i=a}else
for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;ga(
l,s,c),i=a}}}if(yl)throw e=qi,yl=!1,qi=null,e}function H(e,t){var n=t[uo];n===void 0&&(n=t[uo]=new Set);var r=e+"__bubbl\
e";n.has(r)||(uc(t,e,2,!1),n.add(r))}function Si(e,t,n){var r=0;t&&(r|=4),uc(n,e,r,t)}var Wr="_reactListening"+Math.random().
toString(36).slice(2);function hr(e){if(!e[Wr]){e[Wr]=!0,yu.forEach(function(n){n!=="selectionchange"&&(Pp.has(n)||Si(n,
!1,e),Si(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,Si("selectionchange",!1,t))}}function uc(e,t,n,r){
switch(Qu(t)){case 1:var l=Bf;break;case 4:l=Wf;break;default:l=Ko}n=l.bind(null,t,n,e),l=void 0,!Ji||t!=="touchstart"&&
t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,
!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ci(e,t,n,r,l){var i=r;if(!(t&1)&&
!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===
8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,
a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Vt(s),o===null)return;if(a=o.tag,a===5||
a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Tu(function(){var c=i,v=Bo(n),y=[];e:{var m=sc.get(e);if(m!==void 0){
var k=Go,g=e;switch(e){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":k=ip;break;case"focusin":g="focus",
k=yi;break;case"focusout":g="blur",k=yi;break;case"beforeblur":case"afterblur":k=yi;break;case"click":if(n.button===2)break e;case"\
auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":
k=oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"d\
rop":k=Kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=ap;break;case rc:case lc:case ic:k=Xf;
break;case oc:k=cp;break;case"scroll":k=Hf;break;case"wheel":k=fp;break;case"copy":case"cut":case"paste":k=Jf;break;case"\
gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"\
pointerover":case"pointerup":k=aa}var w=(t&4)!==0,I=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var d=c,p;d!==
null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=ur(d,f),x!=null&&w.push(yr(d,x,p)))),I)break;d=d.
return}0<w.length&&(m=new k(m,g,null,n,v),y.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="point\
erover",k=e==="mouseout"||e==="pointerout",m&&n!==Xi&&(g=n.relatedTarget||n.fromElement)&&(Vt(g)||g[ut]))break e;if((k||
m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,k?(g=n.relatedTarget||n.toElement,k=c,g=g?
Vt(g):null,g!==null&&(I=qt(g),g!==I||g.tag!==5&&g.tag!==6)&&(g=null)):(k=null,g=c),k!==g)){if(w=oa,x="onMouseLeave",f="o\
nMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=aa,x="onPointerLeave",f="onPointerEnter",d="pointer"),I=
k==null?m:dn(k),p=g==null?m:dn(g),m=new w(x,d+"leave",k,n,v),m.target=I,m.relatedTarget=p,x=null,Vt(v)===c&&(w=new w(f,d+
"enter",g,n,v),w.target=p,w.relatedTarget=I,x=w),I=x,k&&g)t:{for(w=k,f=g,d=0,p=w;p;p=rn(p))d++;for(p=0,x=f;x;x=rn(x))p++;
for(;0<d-p;)w=rn(w),d--;for(;0<p-d;)f=rn(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=rn(w),f=rn(f)}w=
null}else w=null;k!==null&&ka(y,m,k,w,!1),g!==null&&I!==null&&ka(y,I,g,w,!0)}}e:{if(m=c?dn(c):window,k=m.nodeName&&m.nodeName.
toLowerCase(),k==="select"||k==="input"&&m.type==="file")var _=kp;else if(da(m))if(Ju)_=Cp;else{_=xp;var j=wp}else(k=m.nodeName)&&
k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Sp);if(_&&(_=_(e,c))){Zu(y,_,n,v);break e}j&&j(e,
m,c),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Hi(m,"number",m.value)}switch(j=c?dn(c):window,
e){case"focusin":(da(j)||j.contentEditable==="true")&&(un=j,ro=c,nr=null);break;case"focusout":nr=ro=un=null;break;case"\
mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,ya(y,n,v);break;case"selectionchange":if(jp)break;case"\
keydown":case"keyup":ya(y,n,v)}var M;if(Zo)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"c\
ompositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else an?Gu(
e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Yu&&n.locale!=="ko"&&(an||L!==
"onCompositionStart"?L==="onCompositionEnd"&&an&&(M=Ku()):(St=v,Yo="value"in St?St.value:St.textContent,an=!0)),j=xl(c,L),
0<j.length&&(L=new sa(L,e,null,n,v),y.push({event:L,listeners:j}),M?L.data=M:(M=Xu(n),M!==null&&(L.data=M)))),(M=mp?hp(e,
n):yp(e,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(v=new sa("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:c}),
v.data=M))}ac(y,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xl(e,t){for(var n=t+"Capt\
ure",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=ur(e,n),i!=null&&r.unshift(yr(e,i,l)),i=ur(e,t),i!=
null&&r.push(yr(e,i,l))),e=e.return}return r}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||
null}function ka(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&
a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=ur(n,i),a!=null&&o.unshift(yr(n,a,s))):l||(a=ur(n,i),a!=null&&o.push(yr(n,a,s)))),
n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Rp=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function wa(e){return(typeof e==
"string"?e:""+e).replace(Rp,`
`).replace(Lp,"")}function Hr(e,t,n){if(t=wa(t),wa(e)!==t&&n)throw Error(E(425))}function Sl(){}var io=null,oo=null;function so(e,t){
return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML==
"object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=typeof setTimeout=="function"?
setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,xa=typeof Promise=="function"?Promise:void 0,zp=typeof queueMicrotask==
"function"?queueMicrotask:typeof xa<"u"?function(e){return xa.resolve(null).then(e).catch(Ip)}:ao;function Ip(e){setTimeout(
function(){throw e})}function Ni(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,
n==="/$"){if(r===0){e.removeChild(l),fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);fr(t)}function _t(e){
for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;
if(t==="/$")return null}}return e}function Sa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===
"$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(
36).slice(2),qe="__reactFiber$"+zn,vr="__reactProps$"+zn,ut="__reactContainer$"+zn,uo="__reactEvents$"+zn,Op="__reactLis\
teners$"+zn,Dp="__reactHandles$"+zn;function Vt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[qe]){
if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sa(e);e!==null;){if(n=e[qe])return n;e=Sa(e)}return t}e=
n,n=e.parentNode}return null}function _r(e){return e=e[qe]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}
function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Bl(e){return e[vr]||null}var co=[],
fn=-1;function Dt(e){return{current:e}}function Q(e){0>fn||(e.current=co[fn],co[fn]=null,fn--)}function W(e,t){fn++,co[fn]=
e.current,e.current=t}var zt={},me=Dt(zt),Ne=Dt(!1),Kt=zt;function En(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.
stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},
i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=
l),l}function Ee(e){return e=e.childContextTypes,e!=null}function Cl(){Q(Ne),Q(me)}function Ca(e,t,n){if(me.current!==zt)
throw Error(E(168));W(me,t),W(Ne,n)}function cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!=
"function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(E(108,wf(e)||"Unknown",l));return X({},
n,r)}function Nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Kt=me.current,W(me,e),W(Ne,
Ne.current),!0}function Na(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=cc(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=
e,Q(Ne),Q(me),W(me,e)):Q(Ne),W(Ne,n)}var lt=null,Wl=!1,Ei=!1;function dc(e){lt===null?lt=[e]:lt.push(e)}function Fp(e){Wl=
!0,dc(e)}function Ft(){if(!Ei&&lt!==null){Ei=!0;var e=0,t=V;try{var n=lt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==
null)}lt=null,Wl=!1}catch(l){throw lt!==null&&(lt=lt.slice(e+1)),Du(Wo,Ft),l}finally{V=t,Ei=!1}}return null}var pn=[],mn=0,
El=null,jl=0,Oe=[],De=0,Yt=null,it=1,ot="";function $t(e,t){pn[mn++]=jl,pn[mn++]=El,El=e,jl=t}function fc(e,t,n){Oe[De++]=
it,Oe[De++]=ot,Oe[De++]=Yt,Yt=e;var r=it;e=ot;var l=32-He(r)-1;r&=~(1<<l),n+=1;var i=32-He(t)+l;if(30<i){var o=l-l%5;i=(r&
(1<<o)-1).toString(32),r>>=o,l-=o,it=1<<32-He(t)+l|n<<l|r,ot=i+e}else it=1<<i|n<<l|r,ot=e}function qo(e){e.return!==null&&
($t(e,1),fc(e,1,0))}function es(e){for(;e===El;)El=pn[--mn],pn[mn]=null,jl=pn[--mn],pn[mn]=null;for(;e===Yt;)Yt=Oe[--De],
Oe[De]=null,ot=Oe[--De],Oe[De]=null,it=Oe[--De],Oe[De]=null}var Pe=null,Me=null,K=!1,We=null;function pc(e,t){var n=Fe(5,
null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(
n)}function Ea(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?
null:t,t!==null?(e.stateNode=t,Pe=e,Me=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:
t,t!==null?(e.stateNode=t,Pe=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:it,overflow:ot}:
null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=
n,Pe=e,Me=null,!0):!1;default:return!1}}function fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function po(e){if(K){var t=Me;
if(t){var n=t;if(!Ea(e,t)){if(fo(e))throw Error(E(418));t=_t(n.nextSibling);var r=Pe;t&&Ea(e,t)?pc(r,n):(e.flags=e.flags&
-4097|2,K=!1,Pe=e)}}else{if(fo(e))throw Error(E(418));e.flags=e.flags&-4097|2,K=!1,Pe=e}}}function ja(e){for(e=e.return;e!==
null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Qr(e){if(e!==Pe)return!1;if(!K)return ja(e),K=!0,!1;var t;
if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!so(e.type,e.memoizedProps)),t&&(t=Me)){if(fo(e))throw mc(),
Error(E(418));for(;t;)pc(e,t),t=_t(t.nextSibling)}if(ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,
!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=_t(e.nextSibling);
break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Pe?_t(e.stateNode.nextSibling):null;return!0}
function mc(){for(var e=Me;e;)e=_t(e.nextSibling)}function jn(){Me=Pe=null,K=!1}function ts(e){We===null?We=[e]:We.push(
e)}var Ap=ft.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n.
_owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var l=r,i=""+e;return t!==
null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:
s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Kr(e,t){
throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+
"}":e))}function _a(e){var t=e._init;return t(e._payload)}function hc(e){function t(f,d){if(e){var p=f.deletions;p===null?
(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}
function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){
return f=Lt(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?
(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){
return d===null||d.tag!==6?(d=Ti(p,f.mode,x),d.return=f,d):(d=l(d,p),d.return=f,d)}function a(f,d,p,x){var _=p.type;return _===
sn?v(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===gt&&_a(_)===
d.type)?(x=l(d,p.props),x.ref=Vn(f,d,p),x.return=f,x):(x=fl(p.type,p.key,p.props,null,f.mode,x),x.ref=Vn(f,d,p),x.return=
f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==
p.implementation?(d=zi(p,f.mode,x),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function v(f,d,p,x,_){return d===null||
d.tag!==7?(d=Qt(p,f.mode,x,_),d.return=f,d):(d=l(d,p),d.return=f,d)}function y(f,d,p){if(typeof d=="string"&&d!==""||typeof d==
"number")return d=Ti(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Dr:return p=fl(
d.type,d.key,d.props,null,f.mode,p),p.ref=Vn(f,null,d),p.return=f,p;case on:return d=zi(d,f.mode,p),d.return=f,d;case gt:
var x=d._init;return y(f,x(d._payload),p)}if(Gn(d)||Fn(d))return d=Qt(d,f.mode,p,null),d.return=f,d;Kr(f,d)}return null}
function m(f,d,p,x){var _=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:s(f,
d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Dr:return p.key===_?a(f,d,p,x):null;case on:return p.
key===_?c(f,d,p,x):null;case gt:return _=p._init,m(f,d,_(p._payload),x)}if(Gn(p)||Fn(p))return _!==null?null:v(f,d,p,x,null);
Kr(f,p)}return null}function k(f,d,p,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,
f,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Dr:return f=f.get(x.key===null?p:x.key)||null,a(d,f,x,
_);case on:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,_);case gt:var j=x._init;return k(f,d,p,j(x._payload),_)}if(Gn(
x)||Fn(x))return f=f.get(p)||null,v(d,f,x,_,null);Kr(d,x)}return null}function g(f,d,p,x){for(var _=null,j=null,M=d,L=d=
0,A=null;M!==null&&L<p.length;L++){M.index>L?(A=M,M=null):A=M.sibling;var T=m(f,M,p[L],x);if(T===null){M===null&&(M=A);break}
e&&M&&T.alternate===null&&t(f,M),d=i(T,d,L),j===null?_=T:j.sibling=T,j=T,M=A}if(L===p.length)return n(f,M),K&&$t(f,L),_;
if(M===null){for(;L<p.length;L++)M=y(f,p[L],x),M!==null&&(d=i(M,d,L),j===null?_=M:j.sibling=M,j=M);return K&&$t(f,L),_}for(M=
r(f,M);L<p.length;L++)A=k(M,f,L,p[L],x),A!==null&&(e&&A.alternate!==null&&M.delete(A.key===null?L:A.key),d=i(A,d,L),j===
null?_=A:j.sibling=A,j=A);return e&&M.forEach(function(B){return t(f,B)}),K&&$t(f,L),_}function w(f,d,p,x){var _=Fn(p);if(typeof _!=
"function")throw Error(E(150));if(p=_.call(p),p==null)throw Error(E(151));for(var j=_=null,M=d,L=d=0,A=null,T=p.next();M!==
null&&!T.done;L++,T=p.next()){M.index>L?(A=M,M=null):A=M.sibling;var B=m(f,M,T.value,x);if(B===null){M===null&&(M=A);break}
e&&M&&B.alternate===null&&t(f,M),d=i(B,d,L),j===null?_=B:j.sibling=B,j=B,M=A}if(T.done)return n(f,M),K&&$t(f,L),_;if(M===
null){for(;!T.done;L++,T=p.next())T=y(f,T.value,x),T!==null&&(d=i(T,d,L),j===null?_=T:j.sibling=T,j=T);return K&&$t(f,L),
_}for(M=r(f,M);!T.done;L++,T=p.next())T=k(M,f,L,T.value,x),T!==null&&(e&&T.alternate!==null&&M.delete(T.key===null?L:T.key),
d=i(T,d,L),j===null?_=T:j.sibling=T,j=T);return e&&M.forEach(function(we){return t(f,we)}),K&&$t(f,L),_}function I(f,d,p,x){
if(typeof p=="object"&&p!==null&&p.type===sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.
$$typeof){case Dr:e:{for(var _=p.key,j=d;j!==null;){if(j.key===_){if(_=p.type,_===sn){if(j.tag===7){n(f,j.sibling),d=l(j,
p.props.children),d.return=f,f=d;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===gt&&_a(_)===
j.type){n(f,j.sibling),d=l(j,p.props),d.ref=Vn(f,j,p),d.return=f,f=d;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===
sn?(d=Qt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=fl(p.type,p.key,p.props,null,f.mode,x),x.ref=Vn(f,d,p),x.return=
f,f=x)}return o(f);case on:e:{for(j=p.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&
d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else
t(f,d);d=d.sibling}d=zi(p,f.mode,x),d.return=f,f=d}return o(f);case gt:return j=p._init,I(f,d,j(p._payload),x)}if(Gn(p))
return g(f,d,p,x);if(Fn(p))return w(f,d,p,x);Kr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&
d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=Ti(p,f.mode,x),d.return=f,f=d),o(f)):n(f,d)}return I}var _n=hc(
!0),yc=hc(!1),_l=Dt(null),Ml=null,hn=null,ns=null;function rs(){ns=hn=Ml=null}function ls(e){var t=_l.current;Q(_l),e._currentValue=
t}function mo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=
t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){Ml=e,ns=hn=null,e=e.dependencies,
e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(ns!==e)
if(e={context:e,memoizedValue:t,next:null},hn===null){if(Ml===null)throw Error(E(308));hn=e,Ml.dependencies={lanes:0,firstContext:e}}else
hn=hn.next=e;return t}var Bt=null;function is(e){Bt===null?Bt=[e]:Bt.push(e)}function vc(e,t,n,r){var l=t.interleaved;return l===
null?(n.next=n,is(t)):(n.next=l.next,l.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==
null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.
tag===3?n.stateNode:null}var kt=!1;function os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,
shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue=
{baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}
function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;
if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,
ct(e,n)}return l=r.interleaved,l===null?(t.next=t,is(r)):(t.next=l.next,l.next=t),r.interleaved=t,ct(e,n)}function ol(e,t,n){
if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ho(e,n)}}function Ma(e,t){
var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){
do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=
i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,
shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=
t}function Pl(e,t,n,r){var l=e.updateQueue;kt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){
l.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,
s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=c:s.next=c,v.lastBaseUpdate=a))}if(i!==null){var y=l.baseState;o=0,
v=c=a=null,s=i;do{var m=s.lane,k=s.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,
callback:s.callback,next:null});e:{var g=e,w=s;switch(m=t,k=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){y=g.call(
k,y,m);break e}y=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,m=typeof g=="function"?g.call(k,y,m):
g,m==null)break e;y=X({},y,m);break e;case 2:kt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=
[s]:m.push(s))}else k={eventTime:k,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(c=v=k,a=y):
v=v.next=k,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.
shared.pending=null}}while(!0);if(v===null&&(a=y),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=v,t=l.shared.interleaved,
t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Xt|=o,e.lanes=o,e.memoizedState=y}}function Pa(e,t,n){
if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=
n,typeof l!="function")throw Error(E(191,l));l.call(r)}}}var Mr={},tt=Dt(Mr),gr=Dt(Mr),kr=Dt(Mr);function Wt(e){if(e===Mr)
throw Error(E(174));return e}function ss(e,t){switch(W(kr,t),W(gr,e),W(tt,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?
t.namespaceURI:Ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ki(t,e)}Q(tt),W(tt,
t)}function Mn(){Q(tt),Q(gr),Q(kr)}function kc(e){Wt(kr.current);var t=Wt(tt.current),n=Ki(t,e.type);t!==n&&(W(gr,e),W(tt,
n))}function as(e){gr.current===e&&(Q(tt),Q(gr))}var Y=Dt(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.
memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.
revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;
for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}
var ji=[];function us(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var sl=ft.ReactCurrentDispatcher,
_i=ft.ReactCurrentBatchConfig,Gt=0,G=null,le=null,oe=null,Ll=!1,rr=!1,wr=0,$p=0;function de(){throw Error(E(321))}function cs(e,t){
if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function ds(e,t,n,r,l,i){
if(Gt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sl.current=e===null||e.memoizedState===null?Bp:Wp,e=n(r,l),
rr){i=0;do{if(rr=!1,wr=0,25<=i)throw Error(E(301));i+=1,oe=le=null,t.updateQueue=null,sl.current=Hp,e=n(r,l)}while(rr)}if(sl.
current=Tl,t=le!==null&&le.next!==null,Gt=0,oe=le=G=null,Ll=!1,t)throw Error(E(300));return e}function fs(){var e=wr!==0;
return wr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?
G.memoizedState=oe=e:oe=oe.next=e,oe}function Ue(){if(le===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=
le.next;var t=oe===null?G.memoizedState:oe.next;if(t!==null)oe=t,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.
memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},oe===null?G.memoizedState=oe=e:oe=
oe.next=e}return oe}function xr(e,t){return typeof t=="function"?t(e):t}function Mi(e){var t=Ue(),n=t.queue;if(n===null)
throw Error(E(311));n.lastRenderedReducer=e;var r=le,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.
next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,c=i;do{var v=c.
lane;if((Gt&v)===v)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),
r=c.hasEagerState?c.eagerState:e(r,c.action);else{var y={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.
eagerState,next:null};a===null?(s=a=y,o=r):a=a.next=y,G.lanes|=v,Xt|=v}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=
s,Ke(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,
e!==null){l=e;do i=l.lane,G.lanes|=i,Xt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}
function Pi(e){var t=Ue(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,
i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ke(i,t.memoizedState)||
(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wc(){}function xc(e,t){
var n=G,r=Ue(),l=t(),i=!Ke(r.memoizedState,l);if(i&&(r.memoizedState=l,Ce=!0),r=r.queue,ps(Nc.bind(null,n,r,e),[e]),r.getSnapshot!==
t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Sr(9,Cc.bind(null,n,r,l,t),void 0,null),se===null)throw Error(
E(349));Gt&30||Sc(n,t,l)}return l}function Sc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=
{lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cc(e,t,n,r){
t.value=n,t.getSnapshot=r,Ec(t)&&jc(e)}function Nc(e,t,n){return n(function(){Ec(t)&&jc(e)})}function Ec(e){var t=e.getSnapshot;
e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function jc(e){var t=ct(e,1);t!==null&&Qe(t,e,1,-1)}function Ra(e){
var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,
lastRenderedReducer:xr,lastRenderedState:e},t.queue=e,e=e.dispatch=Vp.bind(null,G,e),[t.memoizedState,e]}function Sr(e,t,n,r){
return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=
t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _c(){
return Ue().memoizedState}function al(e,t,n,r){var l=Je();G.flags|=e,l.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}
function Hl(e,t,n,r){var l=Ue();r=r===void 0?null:r;var i=void 0;if(le!==null){var o=le.memoizedState;if(i=o.destroy,r!==
null&&cs(r,o.deps)){l.memoizedState=Sr(t,n,i,r);return}}G.flags|=e,l.memoizedState=Sr(1|t,n,i,r)}function La(e,t){return al(
8390656,8,e,t)}function ps(e,t){return Hl(2048,8,e,t)}function Mc(e,t){return Hl(4,2,e,t)}function Pc(e,t){return Hl(4,4,
e,t)}function Rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,
function(){t.current=null}}function Lc(e,t,n){return n=n!=null?n.concat([e]):null,Hl(4,4,Rc.bind(null,t,e),n)}function ms(){}
function Tc(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(n.memoizedState=
[e,t],e)}function zc(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:
(e=e(),n.memoizedState=[e,t],e)}function Ic(e,t,n){return Gt&21?(Ke(n,t)||(n=$u(),G.lanes|=n,Xt|=n,e.baseState=!0),t):(e.
baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Up(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=_i.transition;
_i.transition={};try{e(!1),t()}finally{V=n,_i.transition=r}}function Oc(){return Ue().memoizedState}function bp(e,t,n){var r=Rt(
e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dc(e))Fc(t,n);else if(n=vc(e,t,n,r),n!==null){var l=ve();
Qe(n,e,r,l),Ac(n,t,r)}}function Vp(e,t,n){var r=Rt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dc(
e))Fc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.
lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ke(s,o)){var a=t.interleaved;a===null?(l.next=l,is(t)):(l.
next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=vc(e,t,l,r),n!==null&&(l=ve(),Qe(n,e,r,l),Ac(n,t,r))}}function Dc(e){
var t=e.alternate;return e===G||t!==null&&t===G}function Fc(e,t){rr=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,
n.next=t),e.pending=t}function Ac(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ho(e,n)}}var Tl={readContext:$e,
useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,
useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,
useId:de,unstable_isNewReconciler:!1},Bp={readContext:$e,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?
null:t],e},useContext:$e,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,
4,Rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(
4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){
var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,
lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){
var t=Je();return e={current:e},t.memoizedState=e},useState:Ra,useDebugValue:ms,useDeferredValue:function(e){return Je().
memoizedState=e},useTransition:function(){var e=Ra(!1),t=e[0];return e=Up.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},
useSyncExternalStore:function(e,t,n){var r=G,l=Je();if(K){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),se===null)
throw Error(E(349));Gt&30||Sc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,La(Nc.bind(null,r,
i,e),[e]),r.flags|=2048,Sr(9,Cc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=se.identifierPrefix;if(K){
var n=ot,r=it;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$p++,
t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wp={readContext:$e,useCallback:Tc,
useContext:$e,useEffect:ps,useImperativeHandle:Lc,useInsertionEffect:Mc,useLayoutEffect:Pc,useMemo:zc,useReducer:Mi,useRef:_c,
useState:function(){return Mi(xr)},useDebugValue:ms,useDeferredValue:function(e){var t=Ue();return Ic(t,le.memoizedState,
e)},useTransition:function(){var e=Mi(xr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:xc,
useId:Oc,unstable_isNewReconciler:!1},Hp={readContext:$e,useCallback:Tc,useContext:$e,useEffect:ps,useImperativeHandle:Lc,
useInsertionEffect:Mc,useLayoutEffect:Pc,useMemo:zc,useReducer:Pi,useRef:_c,useState:function(){return Pi(xr)},useDebugValue:ms,
useDeferredValue:function(e){var t=Ue();return le===null?t.memoizedState=e:Ic(t,le.memoizedState,e)},useTransition:function(){
var e=Pi(xr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:xc,useId:Oc,unstable_isNewReconciler:!1};
function Ve(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}
function ho(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=
n)}var Ql={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;
var r=ve(),l=Rt(e),i=st(r,l);i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,l),t!==null&&(Qe(t,e,l,r),ol(t,e,l))},enqueueReplaceState:function(e,t,n){
e=e._reactInternals;var r=ve(),l=Rt(e),i=st(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,l),t!==null&&(Qe(t,
e,l,r),ol(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Rt(e),l=st(n,r);l.tag=2,t!=null&&(l.
callback=t),t=Mt(e,l,r),t!==null&&(Qe(t,e,r,n),ol(t,e,r))}};function Ta(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate==
"function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(l,i):!0}function $c(e,t,n){
var r=!1,l=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=$e(i):(l=Ee(t)?Kt:me.current,r=t.contextTypes,i=(r=r!=
null)?En(e,l):zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ql,e.stateNode=t,
t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=
i),t}function za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.
UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ql.enqueueReplaceState(
t,t.state,null)}function yo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},os(e);var i=t.contextType;
typeof i=="object"&&i!==null?l.context=$e(i):(i=Ee(t)?Kt:me.current,l.context=En(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,
typeof i=="function"&&(ho(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate==
"function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.
componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),
t!==l.state&&Ql.enqueueReplaceState(l,l.state,null),Pl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="fu\
nction"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",r=t;do n+=kf(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??
null}}function vo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qp=typeof WeakMap=="func\
tion"?WeakMap:Map;function Uc(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){
Il||(Il=!0,_o=r),vo(e,t)},n}function bc(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="fu\
nction"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){vo(e,t)}}var i=e.stateNode;return i!==null&&
typeof i.componentDidCatch=="function"&&(n.callback=function(){vo(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):
Pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ia(e,t,n){var r=e.
pingCache;if(r===null){r=e.pingCache=new Qp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));
l.has(n)||(l.add(n),e=om.bind(null,e,t,n),t.then(e,e))}function Oa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==
null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Da(e,t,n,r,l){return e.mode&1?(e.
flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===
null?n.tag=17:(t=st(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Kp=ft.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=
e===null?yc(t,null,n,r):_n(t,e.child,n,r)}function Fa(e,t,n,r,l){n=n.render;var i=t.ref;return Sn(t,l),r=ds(e,t,n,r,i,l),
n=fs(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,dt(e,t,l)):(K&&n&&qo(t),t.flags|=1,ye(e,t,r,
l),t.child)}function Aa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ss(i)&&i.defaultProps===void 0&&
n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Vc(e,t,i,r,l)):(e=fl(n.type,null,r,t,t.mode,l),e.ref=t.ref,
e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(o,r)&&e.ref===t.
ref)return dt(e,t,l)}return t.flags|=1,e=Lt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Vc(e,t,n,r,l){if(e!==null){var i=e.
memoizedProps;if(mr(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ce=!0);else return t.
lanes=e.lanes,dt(e,t,l)}return go(e,t,n,r,l)}function Bc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:
null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(vn,_e),_e|=n;else{
if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,
transitions:null},t.updateQueue=null,W(vn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=
i!==null?i.baseLanes:n,W(vn,_e),_e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(vn,_e),_e|=r;return ye(
e,t,l,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}
function go(e,t,n,r,l){var i=Ee(n)?Kt:me.current;return i=En(t,i),Sn(t,l),n=ds(e,t,n,r,i,l),r=fs(),e!==null&&!Ce?(t.updateQueue=
e.updateQueue,t.flags&=-2053,e.lanes&=~l,dt(e,t,l)):(K&&r&&qo(t),t.flags|=1,ye(e,t,n,l),t.child)}function $a(e,t,n,r,l){
if(Ee(n)){var i=!0;Nl(t)}else i=!1;if(Sn(t,l),t.stateNode===null)ul(e,t),$c(t,n,r),yo(t,n,r,l),r=!0;else if(e===null){var o=t.
stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$e(c):(c=Ee(n)?Kt:me.
current,c=En(t,c));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";
y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&
za(t,o,r,c),kt=!1;var m=t.memoizedState;o.state=m,Pl(t,r,o,l),a=t.memoizedState,s!==r||m!==a||Ne.current||kt?(typeof v==
"function"&&(ho(t,n,v,r),a=t.memoizedState),(s=kt||Ta(t,n,s,r,m,a,c))?(y||typeof o.UNSAFE_componentWillMount!="function"&&
typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==
"function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount==
"function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount==
"function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,gc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ve(t.type,s),
o.props=c,y=t.pendingProps,m=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=$e(a):(a=Ee(n)?Kt:me.current,a=En(
t,a));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.
UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==y||m!==a)&&za(t,o,r,a),
kt=!1,m=t.memoizedState,o.state=m,Pl(t,r,o,l);var g=t.memoizedState;s!==y||m!==g||Ne.current||kt?(typeof k=="function"&&
(ho(t,n,k,r),g=t.memoizedState),(c=kt||Ta(t,n,c,r,m,g,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.
componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate==
"function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==
"function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=
4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=
r,t.memoizedState=g),o.props=r,o.state=g,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&
m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||
(t.flags|=1024),r=!1)}return ko(e,t,n,r,i,l)}function ko(e,t,n,r,l,i){Wc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&
Na(t,n,!1),dt(e,t,i);r=t.stateNode,Kp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.
flags|=1,e!==null&&o?(t.child=_n(t,e.child,null,i),t.child=_n(t,null,s,i)):ye(e,t,s,i),t.memoizedState=r.state,l&&Na(t,n,
!0),t.child}function Hc(e){var t=e.stateNode;t.pendingContext?Ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&
Ca(e,t.context,!1),ss(e,t.containerInfo)}function Ua(e,t,n,r,l){return jn(),ts(l),t.flags|=256,ye(e,t,n,r),t.child}var wo={
dehydrated:null,treeContext:null,retryLane:0};function xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qc(e,t,n){
var r=t.pendingProps,l=Y.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),
s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(Y,l&1),e===null)return po(t),e=t.memoizedState,e!==null&&
(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,
i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gl(o,r,0,null),e=
Qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xo(n),t.memoizedState=wo,e):hs(t,o));if(l=
e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Yp(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;
var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=
null):(r=Lt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Lt(s,i):(i=Qt(i,o,n,null),i.flags|=2),i.return=t,r.return=
t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?xo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.
transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=wo,r}return i=e.child,e=i.sibling,r=Lt(i,{mode:"\
visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=
[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hs(e,t){return t=Gl({mode:"visible",children:t},e.
mode,0,null),t.return=e,e.child=t}function Yr(e,t,n,r){return r!==null&&ts(r),_n(t,e.child,null,n),e=hs(t,t.pendingProps.
children),e.flags|=2,t.memoizedState=null,e}function Yp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ri(Error(
E(422))),Yr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Gl({mode:"visi\
ble",children:r.children},l,0,null),i=Qt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&_n(
t,e.child,null,o),t.child.memoizedState=xo(o),t.memoizedState=wo,i);if(!(t.mode&1))return Yr(e,t,o,null);if(l.data==="$!"){
if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=Ri(i,r,void 0),Yr(e,t,o,r)}if(s=(o&
e.childLanes)!==0,Ce||s){if(r=se,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:
l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=
l,ct(e,l),Qe(r,e,l,-1))}return xs(),r=Ri(Error(E(421))),Yr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=
sm.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Me=_t(l.nextSibling),Pe=t,K=!0,We=null,e!==null&&(Oe[De++]=it,Oe[De++]=
ot,Oe[De++]=Yt,it=e.id,ot=e.overflow,Yt=t),t=hs(t,r.children),t.flags|=4096,t)}function ba(e,t,n){e.lanes|=t;var r=e.alternate;
r!==null&&(r.lanes|=t),mo(e.return,t,n)}function Li(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,
rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.
last=r,i.tail=n,i.tailMode=l)}function Kc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ye(e,t,r.children,n),r=
Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==
null&&ba(e,n,t);else if(e.tag===19)ba(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;
for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(
Y,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&
Rl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Li(t,!1,l,n,i);break;case"\
backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Rl(e)===null){t.child=l;break}e=l.sibling,
l.sibling=n,n=l,l=e}Li(t,!0,n,null,i);break;case"together":Li(t,!1,null,null,void 0);break;default:t.memoizedState=null}
return t.child}function ul(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){
if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(
E(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=
Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gp(e,t,n){switch(t.tag){case 3:Hc(t),jn();break;case 5:
kc(t);break;case 1:Ee(t.type)&&Nl(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.
memoizedProps.value;W(_l,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==
null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Qc(e,t,n):(W(Y,Y.current&1),e=dt(e,t,n),e!==null?e.sibling:
null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kc(e,t,n);t.flags|=128}if(l=t.memoizedState,
l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=
0,Bc(e,t,n)}return dt(e,t,n)}var Yc,So,Gc,Xc;Yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(
n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){
if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};So=function(){};Gc=function(e,t,n,r){
var l=e.memoizedProps;if(l!==r){e=t.stateNode,Wt(tt.current);var i=null;switch(n){case"input":l=Bi(e,l),r=Bi(e,r),i=[];break;case"\
select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":l=Qi(e,l),r=Qi(e,r),i=[];break;default:
typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sl)}Yi(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(
c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!==
"dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="au\
toFocus"&&(sr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(
c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]=
"");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dan\
gerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!=
"string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&
(sr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&H("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("\
style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Xc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!K)switch(e.
tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=
null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===
null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,
n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=
e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.
subtreeFlags|=r,e.childLanes=n,t}function Xp(e,t,n){var r=t.pendingProps;switch(es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:
return fe(t),null;case 1:return Ee(t.type)&&Cl(),fe(t),null;case 3:return r=t.stateNode,Mn(),Q(Ne),Q(me),us(),r.pendingContext&&
(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qr(t)?t.flags|=4:e===null||e.memoizedState.
isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(Ro(We),We=null))),So(e,t),fe(t),null;case 5:as(t);var l=Wt(kr.current);
if(n=t.type,e!==null&&t.stateNode!=null)Gc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===
null)throw Error(E(166));return fe(t),null}if(e=Wt(tt.current),Qr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qe]=
t,r[vr]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("loa\
d",r);break;case"video":case"audio":for(l=0;l<Zn.length;l++)H(Zn[l],r);break;case"source":H("error",r);break;case"img":case"\
image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Xs(r,i),H("invalid",r);break;case"\
select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Js(r,i),H("invalid",r)}Yi(n,i),l=
null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==
!0&&Hr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&
Hr(r.textContent,s,e),l=["children",""+s]):sr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"i\
nput":Fr(r),Zs(r,i,!0);break;case"textarea":Fr(r),qs(r);break;case"select":case"option":break;default:typeof i.onClick==
"function"&&(r.onclick=Sl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http:\
//www.w3.org/1999/xhtml"&&(e=Nu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML=
"<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(
n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[vr]=r,Yc(e,t,
!1,!1),t.stateNode=e;e:{switch(o=Gi(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"\
embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<Zn.length;l++)H(Zn[l],e);l=r;break;case"source":H("error",
e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"\
input":Xs(e,r),l=Bi(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},
l=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":Js(e,r),l=Qi(e,r),H("invalid",e);break;default:l=r}Yi(n,l),
s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?_u(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,
a!=null&&Eu(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ar(e,a):typeof a=="number"&&ar(e,""+a):i!==
"suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sr.hasOwnProperty(i)?a!=null&&i==="o\
nScroll"&&H("scroll",e):a!=null&&$o(e,i,a,o))}switch(n){case"input":Fr(e),Zs(e,r,!1);break;case"textarea":Fr(e),qs(e);break;case"\
option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?
gn(e,!!r.multiple,i,!1):r.defaultValue!=null&&gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="func\
tion"&&(e.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=
!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.
stateNode!=null)Xc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Wt(kr.
current),Wt(tt.current),Qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(i=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.
tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,
n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return fe(
t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Me!==
null&&t.mode&1&&!(t.flags&128))mc(),jn(),t.flags|=98560,i=!1;else if(i=Qr(t),r!==null&&r.dehydrated!==null){if(e===null){
if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[qe]=t}else jn(),!(t.
flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else We!==null&&(Ro(We),We=null),i=!0;if(!i)return t.flags&65536?
t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&
1&&(e===null||Y.current&1?ie===0&&(ie=3):xs())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Mn(),So(e,t),
e===null&&hr(t.stateNode.containerInfo),fe(t),null;case 10:return ls(t.type._context),fe(t),null;case 17:return Ee(t.type)&&
Cl(),fe(t),null;case 19:if(Q(Y),i=t.memoizedState,i===null)return fe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)
if(r)Bn(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Rl(e),o!==null){for(t.flags|=128,Bn(i,
!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,
o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,
i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=
0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.
type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.
current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Rn&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Rl(
o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(i,!0),i.tail===null&&i.tailMode===
"hidden"&&!o.alternate&&!K)return fe(t),null}else 2*te()-i.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(
i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.
tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&
1),t):(fe(t),null);case 22:case 23:return ws(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=
8192),r&&t.mode&1?_e&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}
throw Error(E(156,t.tag))}function Zp(e,t){switch(es(t),t.tag){case 1:return Ee(t.type)&&Cl(),e=t.flags,e&65536?(t.flags=
e&-65537|128,t):null;case 3:return Mn(),Q(Ne),Q(me),us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:
return as(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));
jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return Mn(),null;case 10:return ls(
t.type._context),null;case 22:case 23:return ws(),null;case 24:return null;default:return null}}var Gr=!1,pe=!1,Jp=typeof WeakSet==
"function"?WeakSet:Set,R=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,
t,r)}else n.current=null}function Co(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Va=!1;function qp(e,t){if(io=kl,e=tc(),Jo(e)){
if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||
window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;
r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,v=0,y=e,m=null;t:for(;;){for(var k;y!==
n||l!==0&&y.nodeType!==3||(s=o+l),y!==i||r!==0&&y.nodeType!==3||(a=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(k=y.firstChild)!==
null;)m=y,y=k;for(;;){if(y===e)break t;if(m===n&&++c===l&&(s=o),m===i&&++v===r&&(a=o),(k=y.nextSibling)!==null)break;y=m,
m=y.parentNode}y=k}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(oo={focusedElem:e,
selectionRange:n},kl=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==
null;){t=R;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.
memoizedProps,I=g.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ve(t.type,w),I);f.__reactInternalSnapshotBeforeUpdate=
d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(
p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){ee(t,t.return,x)}if(e=
t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=Va,Va=!1,g}function lr(e,t,n){var r=t.updateQueue;if(r=
r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Co(
t,n,i)}l=l.next}while(l!==r)}}function Kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;
do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function No(e){var t=e.ref;if(t!==null){var n=e.
stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zc(e){var t=e.alternate;
t!==null&&(e.alternate=null,Zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],
delete t[vr],delete t[uo],delete t[Op],delete t[Dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=
null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jc(e){return e.tag===5||e.tag===
3||e.tag===4}function Ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.
sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;
e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,
t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):
(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sl));else if(r!==4&&(e=e.child,e!==
null))for(Eo(e,t,n),e=e.sibling;e!==null;)Eo(e,t,n),e=e.sibling}function jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,
t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jo(e,t,n),e=e.sibling;e!==null;)jo(e,t,n),
e=e.sibling}var ae=null,Be=!1;function ht(e,t,n){for(n=n.child;n!==null;)qc(e,t,n),n=n.sibling}function qc(e,t,n){if(et&&
typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:pe||yn(n,t);case 6:
var r=ae,l=Be;ae=null,ht(e,t,n),ae=r,Be=l,ae!==null&&(Be?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):
e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Be?(e=ae,n=n.stateNode,e.nodeType===8?Ni(e.parentNode,
n):e.nodeType===1&&Ni(e,n),fr(e)):Ni(ae,n.stateNode));break;case 4:r=ae,l=Be,ae=n.stateNode.containerInfo,Be=!0,ht(e,t,n),
ae=r,Be=l;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;
do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Co(n,t,o),l=l.next}while(l!==r)}ht(e,t,n);break;case 1:if(!pe&&(yn(
n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){
ee(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,ht(e,t,n),pe=r):ht(
e,t,n);break;default:ht(e,t,n)}}function Wa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===
null&&(n=e.stateNode=new Jp),t.forEach(function(r){var l=am.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function be(e,t){
var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:
ae=s.stateNode,Be=!1;break e;case 3:ae=s.stateNode.containerInfo,Be=!0;break e;case 4:ae=s.stateNode.containerInfo,Be=!0;
break e}s=s.return}if(ae===null)throw Error(E(160));qc(i,o,l),ae=null,Be=!1;var a=l.alternate;a!==null&&(a.return=null),
l.return=null}catch(c){ee(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ed(t,e),t=t.sibling}function ed(e,t){var n=e.
alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Xe(e),r&4){try{lr(3,e,e.return),Kl(3,e)}catch(w){
ee(e,e.return,w)}try{lr(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:be(t,e),Xe(e),r&512&&n!==null&&yn(n,n.return);
break;case 5:if(be(t,e),Xe(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var l=e.stateNode;try{ar(l,"")}catch(w){ee(e,e.
return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;
if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Su(l,i),Gi(s,o);var c=Gi(s,i);for(o=0;o<
a.length;o+=2){var v=a[o],y=a[o+1];v==="style"?_u(l,y):v==="dangerouslySetInnerHTML"?Eu(l,y):v==="children"?ar(l,y):$o(l,
v,y,c)}switch(s){case"input":Wi(l,i);break;case"textarea":Cu(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l.
_wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?gn(l,!!i.multiple,k,!1):m!==!!i.multiple&&(i.defaultValue!=
null?gn(l,!!i.multiple,i.defaultValue,!0):gn(l,!!i.multiple,i.multiple?[]:"",!1))}l[vr]=i}catch(w){ee(e,e.return,w)}}break;case 6:
if(be(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(E(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){
ee(e,e.return,w)}}break;case 3:if(be(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(w){
ee(e,e.return,w)}break;case 4:be(t,e),Xe(e);break;case 13:be(t,e),Xe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,
l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(gs=te())),r&4&&Wa(e);break;case 22:if(v=
n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||v,be(t,e),pe=c):be(t,e),Xe(e),r&8192){if(c=e.memoizedState!==null,
(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(R=e,v=e.child;v!==null;){for(y=R=v;R!==null;){switch(m=R,k=m.child,m.tag){case 0:case 11:case 14:case 15:
lr(4,m,m.return);break;case 1:yn(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;
try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:yn(m,m.
return);break;case 22:if(m.memoizedState!==null){Qa(y);continue}}k!==null?(k.return=m,R=k):Qa(y)}v=v.sibling}e:for(v=null,
y=e;;){if(y.tag===5){if(v===null){v=y;try{l=y.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("dis\
play","none","important"):i.display="none"):(s=y.stateNode,a=y.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?
a.display:null,s.style.display=ju("display",o))}catch(w){ee(e,e.return,w)}}}else if(y.tag===6){if(v===null)try{y.stateNode.
nodeValue=c?"":y.memoizedProps}catch(w){ee(e,e.return,w)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&
y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===
e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:be(t,e),Xe(e),
r&4&&Wa(e);break;case 21:break;default:be(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==
null;){if(Jc(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(ar(l,
""),r.flags&=-33);var i=Ba(e);jo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Ba(e);Eo(e,s,o);break;default:
throw Error(E(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function em(e,t,n){R=e,td(e)}function td(e,t,n){
for(var r=(e.mode&1)!==0;R!==null;){var l=R,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Gr;if(!o){var s=l.
alternate,a=s!==null&&s.memoizedState!==null||pe;s=Gr;var c=pe;if(Gr=o,(pe=a)&&!c)for(R=l;R!==null;)o=R,a=o.child,o.tag===
22&&o.memoizedState!==null?Ka(l):a!==null?(a.return=o,R=a):Ka(l);for(;i!==null;)R=i,td(i),i=i.sibling;R=l,Gr=s,pe=c}Ha(e)}else
l.subtreeFlags&8772&&i!==null?(i.return=l,R=i):Ha(e)}}function Ha(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;
try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===
null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(
l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pa(t,i,r);break;case 3:var o=t.updateQueue;
if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pa(
t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"\
input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:
break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){
var y=v.dehydrated;y!==null&&fr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}
pe||t.flags&512&&No(t)}catch(m){ee(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;
break}R=t.return}}function Qa(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.
return,R=n;break}R=t.return}}function Ka(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;
try{Kl(4,t)}catch(a){ee(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;
try{r.componentDidMount()}catch(a){ee(t,l,a)}}var i=t.return;try{No(t)}catch(a){ee(t,i,a)}break;case 5:var o=t.return;try{
No(t)}catch(a){ee(t,o,a)}}}catch(a){ee(t,t.return,a)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,
R=s;break}R=t.return}}var tm=Math.ceil,zl=ft.ReactCurrentDispatcher,ys=ft.ReactCurrentOwner,Ae=ft.ReactCurrentBatchConfig,
U=0,se=null,ne=null,ue=0,_e=0,vn=Dt(0),ie=0,Cr=null,Xt=0,Yl=0,vs=0,ir=null,Se=null,gs=0,Rn=1/0,rt=null,Il=!1,_o=null,Pt=null,
Xr=!1,Ct=null,Ol=0,or=0,Mo=null,cl=-1,dl=0;function ve(){return U&6?te():cl!==-1?cl:cl=te()}function Rt(e){return e.mode&
1?U&2&&ue!==0?ue&-ue:Ap.transition!==null?(dl===0&&(dl=$u()),dl):(e=V,e!==0||(e=window.event,e=e===void 0?16:Qu(e.type)),
e):1}function Qe(e,t,n,r){if(50<or)throw or=0,Mo=null,Error(E(185));Er(e,n,r),(!(U&2)||e!==se)&&(e===se&&(!(U&2)&&(Yl|=n),
ie===4&&xt(e,ue)),je(e,r),n===1&&U===0&&!(t.mode&1)&&(Rn=te()+500,Wl&&Ft()))}function je(e,t){var n=e.callbackNode;Af(e,
t);var r=gl(e,e===se?ue:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==
t){if(n!=null&&na(n),t===1)e.tag===0?Fp(Ya.bind(null,e)):dc(Ya.bind(null,e)),zp(function(){!(U&6)&&Ft()}),n=null;else{switch(Uu(
r)){case 1:n=Wo;break;case 4:n=Fu;break;case 16:n=vl;break;case 536870912:n=Au;break;default:n=vl}n=ud(n,nd.bind(null,e))}
e.callbackPriority=t,e.callbackNode=n}}function nd(e,t){if(cl=-1,dl=0,U&6)throw Error(E(327));var n=e.callbackNode;if(Cn()&&
e.callbackNode!==n)return null;var r=gl(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Dl(e,r);else{
t=r;var l=U;U|=2;var i=ld();(se!==e||ue!==t)&&(rt=null,Rn=te()+500,Ht(e,t));do try{lm();break}catch(s){rd(e,s)}while(!0);
rs(),zl.current=i,U=l,ne!==null?t=0:(se=null,ue=0,t=ie)}if(t!==0){if(t===2&&(l=eo(e),l!==0&&(r=l,t=Po(e,l))),t===1)throw n=
Cr,Ht(e,0),xt(e,r),je(e,te()),n;if(t===6)xt(e,r);else{if(l=e.current.alternate,!(r&30)&&!nm(l)&&(t=Dl(e,r),t===2&&(i=eo(
e),i!==0&&(r=i,t=Po(e,i))),t===1))throw n=Cr,Ht(e,0),xt(e,r),je(e,te()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:
throw Error(E(345));case 2:Ut(e,Se,rt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=gs+500-te(),10<t)){if(gl(e,0)!==0)break;
if(l=e.suspendedLanes,(l&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ao(Ut.bind(null,e,Se,rt),t);
break}Ut(e,Se,rt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-He(r);i=1<<o,o=t[o],
o>l&&(l=o),r&=~i}if(r=l,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tm(r/1960))-r,
10<r){e.timeoutHandle=ao(Ut.bind(null,e,Se,rt),r);break}Ut(e,Se,rt);break;case 5:Ut(e,Se,rt);break;default:throw Error(E(
329))}}}return je(e,te()),e.callbackNode===n?nd.bind(null,e):null}function Po(e,t){var n=ir;return e.current.memoizedState.
isDehydrated&&(Ht(e,t).flags|=256),e=Dl(e,t),e!==2&&(t=Se,Se=n,t!==null&&Ro(t)),e}function Ro(e){Se===null?Se=e:Se.push.
apply(Se,e)}function nm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<
n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ke(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&
16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.
return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~vs,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=
~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Ya(e){if(U&6)throw Error(E(327));Cn();var t=gl(
e,0);if(!(t&1))return je(e,te()),null;var n=Dl(e,t);if(e.tag!==0&&n===2){var r=eo(e);r!==0&&(t=r,n=Po(e,r))}if(n===1)throw n=
Cr,Ht(e,0),xt(e,t),je(e,te()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,
Ut(e,Se,rt),je(e,te()),null}function ks(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Rn=te()+500,Wl&&Ft())}}function Zt(e){
Ct!==null&&Ct.tag===0&&!(U&6)&&Cn();var t=U;U|=1;var n=Ae.transition,r=V;try{if(Ae.transition=null,V=1,e)return e()}finally{
V=r,Ae.transition=n,U=t,!(U&6)&&Ft()}}function ws(){_e=vn.current,Q(vn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=
0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tp(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(es(r),
r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:Mn(),Q(Ne),Q(me),us();break;case 5:as(r);break;case 4:
Mn();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:ls(r.type._context);break;case 22:case 23:ws()}n=n.return}if(se=
e,ne=e=Lt(e.current,null),ue=_e=t,ie=0,Cr=null,vs=Yl=Xt=0,Se=ir=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,
r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Bt=null}return e}
function rd(e,t){do{var n=ne;try{if(rs(),sl.current=Tl,Ll){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&
(l.pending=null),r=r.next}Ll=!1}if(Gt=0,oe=le=G=null,rr=!1,wr=0,ys.current=null,n===null||n.return===null){ie=1,Cr=t,ne=
null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){
var c=a,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=
m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Oa(o);if(k!==null){k.flags&=-257,Da(k,o,
s,i,t),k.mode&1&&Ia(i,c,t),t=k,a=c;var g=t.updateQueue;if(g===null){var w=new Set;w.add(a),t.updateQueue=w}else g.add(a);
break e}else{if(!(t&1)){Ia(i,c,t),xs();break e}a=Error(E(426))}}else if(K&&s.mode&1){var I=Oa(o);if(I!==null){!(I.flags&
65536)&&(I.flags|=256),Da(I,o,s,i,t),ts(Pn(a,s));break e}}i=a=Pn(a,s),ie!==4&&(ie=2),ir===null?ir=[i]:ir.push(i),i=o;do{
switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Uc(i,a,t);Ma(i,f);break e;case 1:s=a;var d=i.type,p=i.stateNode;
if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===
null||!Pt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=bc(i,s,t);Ma(i,x);break e}}i=i.return}while(i!==null)}od(n)}catch(_){
t=_,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function ld(){var e=zl.current;return zl.current=Tl,e===null?
Tl:e}function xs(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||!(Xt&268435455)&&!(Yl&268435455)||xt(se,ue)}function Dl(e,t){
var n=U;U|=2;var r=ld();(se!==e||ue!==t)&&(rt=null,Ht(e,t));do try{rm();break}catch(l){rd(e,l)}while(!0);if(rs(),U=n,zl.
current=r,ne!==null)throw Error(E(261));return se=null,ue=0,ie}function rm(){for(;ne!==null;)id(ne)}function lm(){for(;ne!==
null&&!Pf();)id(ne)}function id(e){var t=ad(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?od(e):ne=t,ys.current=
null}function od(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zp(n,t),n!==null){n.flags&=32767,ne=n;
return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=Xp(n,t,_e),n!==null){
ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function Ut(e,t,n){var r=V,l=Ae.transition;
try{Ae.transition=null,V=1,im(e,t,n,r)}finally{Ae.transition=l,V=r}return null}function im(e,t,n,r){do Cn();while(Ct!==null);
if(U&6)throw Error(E(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=
0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($f(e,i),e===se&&
(ne=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xr||(Xr=!0,ud(vl,function(){return Cn(),null})),i=(n.flags&15990)!==
0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var o=V;V=1;var s=U;U|=4,ys.current=null,qp(e,n),ed(n,e),Ep(
oo),kl=!!io,oo=io=null,e.current=n,em(n),Rf(),U=s,V=o,Ae.transition=i}else e.current=n;if(Xr&&(Xr=!1,Ct=e,Ol=l),i=e.pendingLanes,
i===0&&(Pt=null),zf(n.stateNode),je(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.
stack,digest:l.digest});if(Il)throw Il=!1,e=_o,_o=null,e;return Ol&1&&e.tag!==0&&Cn(),i=e.pendingLanes,i&1?e===Mo?or++:(or=
0,Mo=e):or=0,Ft(),null}function Cn(){if(Ct!==null){var e=Uu(Ol),t=Ae.transition,n=V;try{if(Ae.transition=null,V=16>e?16:
e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Ol=0,U&6)throw Error(E(331));var l=U;for(U|=4,R=e.current;R!==null;){var i=R,o=i.
child;if(R.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(R=c;R!==null;){var v=R;switch(v.
tag){case 0:case 11:case 15:lr(8,v,i)}var y=v.child;if(y!==null)y.return=v,R=y;else for(;R!==null;){v=R;var m=v.sibling,
k=v.return;if(Zc(v),v===c){R=null;break}if(m!==null){m.return=k,R=m;break}R=k}}}var g=i.alternate;if(g!==null){var w=g.child;
if(w!==null){g.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}R=i}}if(i.subtreeFlags&2064&&o!==null)o.
return=i,R=o;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lr(9,i,i.return)}var f=i.sibling;
if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var d=e.current;for(R=d;R!==null;){o=R;var p=o.child;if(o.subtreeFlags&
2064&&p!==null)p.return=o,R=p;else e:for(o=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Kl(
9,s)}}catch(_){ee(s,s.return,_)}if(s===o){R=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,R=x;break e}R=s.
return}}if(U=l,Ft(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot($l,e)}catch{}r=!0}return r}finally{
V=n,Ae.transition=t}}return!1}function Ga(e,t,n){t=Pn(n,t),t=Uc(e,t,1),e=Mt(e,t,1),t=ve(),e!==null&&(Er(e,1,t),je(e,t))}
function ee(e,t,n){if(e.tag===3)Ga(e,e,n);else for(;t!==null;){if(t.tag===3){Ga(t,e,n);break}else if(t.tag===1){var r=t.
stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.
has(r))){e=Pn(n,e),e=bc(t,e,1),t=Mt(t,e,1),e=ve(),t!==null&&(Er(t,1,e),je(t,e));break}}t=t.return}}function om(e,t,n){var r=e.
pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===
ue&&500>te()-gs?Ht(e,0):vs|=n),je(e,t)}function sd(e,t){t===0&&(e.mode&1?(t=Ur,Ur<<=1,!(Ur&130023424)&&(Ur=4194304)):t=1);
var n=ve();e=ct(e,t),e!==null&&(Er(e,t,n),je(e,n))}function sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sd(
e,n)}function am(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:
r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),sd(e,n)}var ad;ad=function(e,t,n){if(e!==null)if(e.
memoizedProps!==t.pendingProps||Ne.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Gp(e,t,n);Ce=!!(e.flags&
131072)}else Ce=!1,K&&t.flags&1048576&&fc(t,jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ul(e,t),e=t.pendingProps;
var l=En(t,me.current);Sn(t,n),l=ds(null,t,r,e,l,n);var i=fs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.
render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,Nl(t)):i=!1,t.memoizedState=
l.state!==null&&l.state!==void 0?l.state:null,os(t),l.updater=Ql,t.stateNode=l,l._reactInternals=t,yo(t,r,e,n),t=ko(null,
t,r,!0,i,n)):(t.tag=0,K&&i&&qo(t),ye(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ul(e,t),e=t.pendingProps,
l=r._init,r=l(r._payload),t.type=r,l=t.tag=cm(r),e=Ve(r,e),l){case 0:t=go(null,t,r,e,n);break e;case 1:t=$a(null,t,r,e,n);
break e;case 11:t=Fa(null,t,r,e,n);break e;case 14:t=Aa(null,t,r,Ve(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:
return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ve(r,l),go(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.
elementType===r?l:Ve(r,l),$a(e,t,r,l,n);case 3:e:{if(Hc(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,
l=i.element,gc(e,t),Pl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.
cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=
i,t.flags&256){l=Pn(Error(E(423)),t),t=Ua(e,t,r,n,l);break e}else if(r!==l){l=Pn(Error(E(424)),t),t=Ua(e,t,r,n,l);break e}else
for(Me=_t(t.stateNode.containerInfo.firstChild),Pe=t,K=!0,We=null,n=yc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,
n=n.sibling;else{if(jn(),r===l){t=dt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return kc(t),e===null&&po(t),r=
t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,so(r,l)?o=null:i!==null&&so(r,i)&&(t.flags|=32),Wc(
e,t),ye(e,t,o,n),t.child;case 6:return e===null&&po(t),null;case 13:return Qc(e,t,n);case 4:return ss(t,t.stateNode.containerInfo),
r=t.pendingProps,e===null?t.child=_n(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===
r?l:Ve(r,l),Fa(e,t,r,l,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),
t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,
o=l.value,W(_l,r._currentValue),r._currentValue=o,i!==null)if(Ke(i.value,o)){if(i.children===l.children&&!Ne.current){t=
dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.
firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=st(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;
var v=c.pending;v===null?a.next=a:(a.next=v.next,v.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),
mo(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.
return,o===null)throw Error(E(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),mo(o,n,t),o=i.sibling}else o=i.child;
if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}
o=o.return}i=o}ye(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Sn(t,n),l=$e(l),
r=r(l),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,l=Ve(r,t.pendingProps),l=Ve(r.type,l),Aa(e,t,r,l,n);case 15:
return Vc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ve(r,l),ul(e,t),t.
tag=1,Ee(r)?(e=!0,Nl(t)):e=!1,Sn(t,n),$c(t,r,l),yo(t,r,l,n),ko(null,t,r,!0,e,n);case 19:return Kc(e,t,n);case 22:return Bc(
e,t,n)}throw Error(E(156,t.tag))};function ud(e,t){return Du(e,t)}function um(e,t,n,r){this.tag=e,this.key=n,this.sibling=
this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.
dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.
deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new um(e,t,n,r)}function Ss(e){
return e=e.prototype,!(!e||!e.isReactComponent)}function cm(e){if(typeof e=="function")return Ss(e)?1:0;if(e!=null){if(e=
e.$$typeof,e===bo)return 11;if(e===Vo)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,
t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=
t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=
e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.
dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,
n.ref=e.ref,n}function fl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Ss(e)&&(o=1);else if(typeof e=="string")o=5;else
e:switch(e){case sn:return Qt(n.children,l,i,t);case Uo:o=8,l|=8;break;case $i:return e=Fe(12,n,t,l|2),e.elementType=$i,
e.lanes=i,e;case Ui:return e=Fe(13,n,t,l),e.elementType=Ui,e.lanes=i,e;case bi:return e=Fe(19,n,t,l),e.elementType=bi,e.
lanes=i,e;case ku:return Gl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vu:o=10;break e;case gu:
o=9;break e;case bo:o=11;break e;case Vo:o=14;break e;case gt:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}
return t=Fe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Qt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Gl(e,t,n,r){
return e=Fe(22,e,r,t),e.elementType=ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Ti(e,t,n){return e=Fe(6,e,null,t),
e.lanes=n,e}function zi(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.
containerInfo,pendingChildren:null,implementation:e.implementation},t}function dm(e,t,n,r,l){this.tag=t,this.containerInfo=
e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=
this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=
this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),
this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Cs(e,t,n,r,l,i,o,s,a){
return e=new dm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState=
{element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},os(i),e}function fm(e,t,n){var r=3<
arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:on,key:r==null?null:""+r,children:e,containerInfo:t,
implementation:n}}function cd(e){if(!e)return zt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;
do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;
break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ee(n))return cc(e,n,t)}return t}function dd(e,t,n,r,l,i,o,s,a){
return e=Cs(n,r,!0,e,l,i,o,s,a),e.context=cd(null),n=e.current,r=ve(),l=Rt(n),i=st(r,l),i.callback=t??null,Mt(n,i,l),e.current.
lanes=l,Er(e,l,r),je(e,r),e}function Xl(e,t,n,r){var l=t.current,i=ve(),o=Rt(l);return n=cd(n),t.context===null?t.context=
n:t.pendingContext=n,t=st(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(l,t,o),e!==null&&
(Qe(e,l,o,i),ol(e,l,o)),o}function Fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:
return e.child.stateNode}}function Xa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=
n!==0&&n<t?n:t}}function Ns(e,t){Xa(e,t),(e=e.alternate)&&Xa(e,t)}function pm(){return null}var fd=typeof reportError=="\
function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}Zl.prototype.render=Es.prototype.
render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Xl(e,t,null,null)};Zl.prototype.unmount=Es.prototype.
unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Xl(
null,e,null,null)}),t[ut]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){
if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(
n,0,e),n===0&&Hu(e)}};function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jl(e){return!(!e||
e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Za(){}
function mm(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Fl(o);i.call(c)}}var o=dd(t,r,e,0,null,
!1,!1,"",Za);return e._reactRootContainer=o,e[ut]=o.current,hr(e.nodeType===8?e.parentNode:e),Zt(),o}for(;l=e.lastChild;)
e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=Fl(a);s.call(c)}}var a=Cs(e,0,!1,null,null,!1,!1,"",
Za);return e._reactRootContainer=a,e[ut]=a.current,hr(e.nodeType===8?e.parentNode:e),Zt(function(){Xl(t,a,n,r)}),a}function ql(e,t,n,r,l){
var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=Fl(o);s.call(a)}}Xl(t,o,e,
l)}else o=mm(n,t,e,l,r);return Fl(o)}bu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){
var n=Xn(t.pendingLanes);n!==0&&(Ho(t,n|1),je(t,te()),!(U&6)&&(Rn=te()+500,Ft()))}break;case 13:Zt(function(){var r=ct(e,
1);if(r!==null){var l=ve();Qe(r,e,1,l)}}),Ns(e,1)}};Qo=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=ve();
Qe(t,e,134217728,n)}Ns(e,134217728)}};Vu=function(e){if(e.tag===13){var t=Rt(e),n=ct(e,t);if(n!==null){var r=ve();Qe(n,e,
t,r)}Ns(e,t)}};Bu=function(){return V};Wu=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Zi=function(e,t,n){switch(t){case"\
input":if(Wi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("inp\
ut[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Bl(r);
if(!l)throw Error(E(90));xu(r),Wi(r,l)}}}break;case"textarea":Cu(e,n);break;case"select":t=n.value,t!=null&&gn(e,!!n.multiple,
t,!1)}};Ru=ks;Lu=Zt;var hm={usingClientEntryPoint:!1,Events:[_r,dn,Bl,Mu,Pu,ks]},Wn={findFiberByHostInstance:Vt,bundleType:0,
version:"18.3.1",rendererPackageName:"react-dom"},ym={bundleType:Wn.bundleType,version:Wn.version,rendererPackageName:Wn.
rendererPackageName,rendererConfig:Wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,
overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,
scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Iu(e),e===
null?null:e.stateNode},findFiberByHostInstance:Wn.findFiberByHostInstance||pm,findHostInstancesForRefresh:null,scheduleRefresh:null,
scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<
"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{$l=Zr.inject(ym),et=Zr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=
hm;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!js(t))throw Error(
E(200));return fm(e,t,null,n)};Le.createRoot=function(e,t){if(!js(e))throw Error(E(299));var n=!1,r="",l=fd;return t!=null&&
(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=
t.onRecoverableError)),t=Cs(e,1,!1,null,null,n,!1,r,l),e[ut]=t.current,hr(e.nodeType===8?e.parentNode:e),new Es(t)};Le.findDOMNode=
function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==
"function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Iu(t),e=e===null?null:e.stateNode,e};Le.flushSync=
function(e){return Zt(e)};Le.hydrate=function(e,t,n){if(!Jl(t))throw Error(E(200));return ql(null,e,t,!0,n)};Le.hydrateRoot=
function(e,t,n){if(!js(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=fd;if(n!=null&&(n.unstable_strictMode===
!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),
t=dd(t,null,e,1,n??null,l,!1,i,o),e[ut]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.
mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);
return new Zl(t)};Le.render=function(e,t,n){if(!Jl(t))throw Error(E(200));return ql(null,e,t,!1,n)};Le.unmountComponentAtNode=
function(e){if(!Jl(e))throw Error(E(40));return e._reactRootContainer?(Zt(function(){ql(null,null,e,!1,function(){e._reactRootContainer=
null,e[ut]=null})}),!0):!1};Le.unstable_batchedUpdates=ks;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jl(
n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ql(e,t,n,!1,r)};Le.version="18.3\
.1-next-f1338f8080-20240426";function pd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd)}catch(e){console.error(e)}}pd(),pu.exports=Le;var md=pu.
exports,hd,Ja=md;hd=Ja.createRoot,Ja.hydrateRoot;function Jr(e,t){const[n,r]=S.useState(t),[l,i]=S.useState(!1),[o,s]=S.
useState("");S.useEffect(()=>{try{const c=window.localStorage.getItem("sft:"+e);if(c!=null){const v=JSON.parse(c),y=t!==
null&&typeof t=="object"&&!Array.isArray(t)&&v!==null&&typeof v=="object"&&!Array.isArray(v)?{...t,...v}:v;r(y)}}catch{s(
"Saved data on this browser could not be read.")}i(!0)},[e]);const a=S.useCallback(c=>{r(v=>{const y=typeof c=="function"?
c(v):c;try{window.localStorage.setItem("sft:"+e,JSON.stringify(y))}catch{s("This browser blocked saving. Changes last un\
til the tab closes.")}return y})},[e]);return[n,a,{ready:l,message:o}]}const vm={curated:["images/images/curated-0.txt"],
rain:["images/images/rain-0.txt","images/images/rain-1.txt"],"thumb-rain":["images/images/thumb-rain-0.txt"],library:["i\
mages/images/library-0.txt","images/images/library-1.txt","images/images/library-2.txt","images/images/library-3.txt","i\
mages/images/library-4.txt"],"thumb-library":["images/images/thumb-library-0.txt"],coffee:["images/images/coffee-0.txt",
"images/images/coffee-1.txt","images/images/coffee-2.txt"],"thumb-coffee":["images/images/thumb-coffee-0.txt"],desk:["im\
ages/images/desk-0.txt","images/images/desk-1.txt","images/images/desk-2.txt"],"thumb-desk":["images/images/thumb-desk-0\
.txt"],mountains:["images/images/mountains-0.txt","images/images/mountains-1.txt","images/images/mountains-2.txt","image\
s/images/mountains-3.txt","images/images/mountains-4.txt","images/images/mountains-5.txt"],"thumb-mountains":["images/im\
ages/thumb-mountains-0.txt"],forest:["images/images/forest-0.txt","images/images/forest-1.txt","images/images/forest-2.t\
xt","images/images/forest-3.txt"],"thumb-forest":["images/images/thumb-forest-0.txt"],stars:["images/images/stars-0.txt"],
"thumb-stars":["images/images/thumb-stars-0.txt"],ocean:["images/images/ocean-0.txt","images/images/ocean-1.txt","images\
/images/ocean-2.txt"],"thumb-ocean":["images/images/thumb-ocean-0.txt"],catalog:["images/images/catalog-0.txt","images/i\
mages/catalog-1.txt","images/images/catalog-2.txt","images/images/catalog-3.txt","images/images/catalog-4.txt","images/i\
mages/catalog-5.txt","images/images/catalog-6.txt"]},Ii={};function _s(e){return Ii[e]||(Ii[e]=Promise.all(vm[e].map(async t=>{
const n=await fetch(t);if(!n.ok)throw Error("Image unavailable");return n.text()})).then(t=>"data:image/jpeg;base64,"+t.
join("").replace(/\s/g,"")))}function yd(e){const[t,n]=S.useState("");return S.useEffect(()=>{let r=!0;return _s(e).then(
l=>{r&&n(l)}).catch(()=>{}),()=>{r=!1}},[e]),t}const gm={rain:"photos/12-rain.jpg",library:"photos/13-library.jpg",coffee:"\
photos/14-coffee.jpg",desk:"photos/15-desk.jpg",mountains:"photos/28-mountains.jpg",forest:"photos/17-forest.jpg",stars:"\
photos/18-stars.jpg",ocean:"photos/19-ocean.jpg"},km={rain:"thumbs/20-rain.jpg",library:"thumbs/21-library.jpg",coffee:"\
thumbs/22-coffee.jpg",desk:"thumbs/23-desk.jpg",mountains:"thumbs/24-mountains.jpg",forest:"thumbs/25-forest.jpg",stars:"\
thumbs/26-stars.jpg",ocean:"thumbs/27-ocean.jpg"},qa=Object.fromEntries(Object.keys(gm).map(e=>[e,()=>_s(e).then(t=>({default:t}))])),
eu=Object.fromEntries(Object.keys(km).map(e=>[e,()=>_s("thumb-"+e).then(t=>({default:t}))])),Oi={},Di={},Fi={focusMin:25,
shortMin:5,longMin:15,longEvery:4,autoBreaks:!1,autoFocus:!1,alarmSound:"bell",alarmVolume:.8,alarmRepeat:!0,customAlarm:null,
tick:!1,ambient:"none",ambientVolume:.5,notifications:!1,keepAwake:!1,background:{kind:"builtin",id:"rain"},bgAnimate:!0,
scrim:.45,accent:"#9fd8c6",font:"sans",clockStyle:"ring",clockSize:"m",showDots:!0,showChip:!0,showHint:!0,spotify:null,
spotifyOpen:!1},wm=[{id:"rain",name:"Rainy window"},{id:"library",name:"Library"},{id:"coffee",name:"Coffee notes"},{id:"\
desk",name:"Night desk"},{id:"mountains",name:"Mountains"},{id:"forest",name:"Misty forest"},{id:"stars",name:"Night sky"},
{id:"ocean",name:"Ocean"}],pl=[{id:"dusk",name:"Dusk",css:"linear-gradient(160deg, #232453 0%, #6b3f63 55%, #c96f4a 100%\
)"},{id:"moss",name:"Moss",css:"linear-gradient(160deg, #0f2e25 0%, #1d5c46 60%, #7ea87b 100%)"},{id:"ink",name:"Ink",css:"\
linear-gradient(160deg, #101418 0%, #1f2a33 100%)"},{id:"dawn",name:"Dawn",css:"linear-gradient(160deg, #3b2f4a 0%, #8a5\
a6e 55%, #e8a87c 100%)"}],vd=[{id:"aurora",name:"Aurora"},{id:"meteor",name:"Falling stars"},{id:"waves",name:"Night wav\
es"},{id:"rainfall",name:"Rain streaks"}],gd=[{id:"shrine",name:"Moonlit shrine",url:"https://cdn.pixabay.com/video/2026\
/04/22/348164_large.mp4",tile:0,preview:"curated"},{id:"rainy-window",name:"Rainy window",url:"https://cdn.pixabay.com/v\
ideo/2026/09/15/376433_medium.mp4",tile:1,preview:"curated"},{id:"misty-river",name:"Misty river",url:"https://cdn.pixab\
ay.com/video/2026/04/05/344726_medium.mp4",tile:2,preview:"curated"},{id:"water-garden",name:"Water garden",url:"https:/\
/cdn.pixabay.com/video/2025/07/12/290959_medium.mp4",tile:3,preview:"curated"},{id:"sakura-night",name:"Island moon",url:"\
https://cdn.pixabay.com/video/2023/03/22/155672-810706799_large.mp4",tile:4,preview:"curated"},{id:"night-train",name:"N\
ight train",url:"https://cdn.pixabay.com/video/2025/10/23/311602_medium.mp4",tile:5,preview:"curated"},{id:"japan-street",
name:"Sakura street",url:"https://cdn.pixabay.com/video/2025/04/07/270367_medium.mp4",tile:6,preview:"curated"},{id:"coz\
y-window",name:"Rainy desk",url:"https://cdn.pixabay.com/video/2026/09/13/376049_large.mp4",tile:7,preview:"curated"},{id:"\
balcony-dusk",name:"Evening balcony",url:"https://cdn.pixabay.com/video/2026/09/15/376434_medium.mp4",tile:8,preview:"cu\
rated"}],Lo=[{id:"anime-lofi-rain-363709",name:"Rainy bus stop",url:"https://cdn.pixabay.com/video/2026/07/13/363709_med\
ium.mp4",tile:0},{id:"anime-lofi-record-363710",name:"Record shop",url:"https://cdn.pixabay.com/video/2026/07/13/363710_\
medium.mp4",tile:1},{id:"aurora-borealis-northern-186969-879222062",name:"Aurora lake",url:"https://cdn.pixabay.com/vide\
o/2023/10/29/186969-879222062_medium.mp4",tile:2},{id:"autumn-forest-trees-313784",name:"Autumn nook",url:"https://cdn.p\
ixabay.com/video/2025/11/04/313784_medium.mp4",tile:3},{id:"autumn-forest-trees-313787",name:"Autumn nook",url:"https://\
cdn.pixabay.com/video/2025/11/04/313787_medium.mp4",tile:4},{id:"autumn-nature-cabin-324160",name:"Cabin bedroom",url:"h\
ttps://cdn.pixabay.com/video/2025/12/24/324160_medium.mp4",tile:5},{id:"autumn-nature-cabin-324164",name:"Cabin bedroom",
url:"https://cdn.pixabay.com/video/2025/12/24/324164_medium.mp4",tile:6},{id:"autumn-relaxation-forest-309119",name:"Aut\
umn lake",url:"https://cdn.pixabay.com/video/2025/10/10/309119_medium.mp4",tile:7},{id:"beach-ocean-night-384362",name:"\
Stormy coast",url:"https://cdn.pixabay.com/video/2026/10/22/384362_medium.mp4",tile:8},{id:"bioluminescence-beach-waves-\
343671",name:"Starlit shore",url:"https://cdn.pixabay.com/video/2026/03/31/343671_medium.mp4",tile:9},{id:"bioluminescen\
ce-beach-waves-346010",name:"Midnight waves",url:"https://cdn.pixabay.com/video/2026/04/12/346010_medium.mp4",tile:10},{
id:"bioluminescence-bioluminescent-ocean-381552",name:"Glowing ocean",url:"https://cdn.pixabay.com/video/2026/10/08/3815\
52_medium.mp4",tile:11},{id:"bioluminescent-beach-375118-375118",name:"Aurora coast",url:"https://cdn.pixabay.com/video/\
2026/09/08/375118_medium.mp4",tile:12},{id:"boats-moon-moonlight-381338",name:"Moonlit boats",url:"https://cdn.pixabay.c\
om/video/2026/10/07/381338_medium.mp4",tile:13},{id:"bonfire-flames-fire-201688-916116512",name:"Bonfire",url:"https://c\
dn.pixabay.com/video/2024/02/23/201688-916116512_medium.mp4",tile:14},{id:"book-candle-stars-184469-873483892",name:"Can\
dlelit book",url:"https://cdn.pixabay.com/video/2023/10/10/184469-873483892_medium.mp4",tile:15},{id:"book-study-books-3\
47655",name:"Library fire",url:"https://cdn.pixabay.com/video/2026/04/19/347655_medium.mp4",tile:16},{id:"campfire-bonfi\
re-flames-225422",name:"Campfire embers",url:"https://cdn.pixabay.com/video/2024/08/08/225422_medium.mp4",tile:17},{id:"\
candle-flame-advent-311235",name:"Rainy candle",url:"https://cdn.pixabay.com/video/2025/10/21/311235_medium.mp4",tile:18},
{id:"candle-flame-advent-312390",name:"Rainy candle",url:"https://cdn.pixabay.com/video/2025/10/28/312390_medium.mp4",tile:19},
{id:"candle-flame-candlelight-312404",name:"Snowy window",url:"https://cdn.pixabay.com/video/2025/10/28/312404_medium.mp\
4",tile:20},{id:"cedar-tree-line-211013",name:"Cedar trail",url:"https://cdn.pixabay.com/video/2024/05/07/211013_medium.\
mp4",tile:21},{id:"city-starry-sky-310146",name:"Purple night",url:"https://cdn.pixabay.com/video/2025/10/15/310146_medi\
um.mp4",tile:22},{id:"coffee-cup-rest-309872",name:"Rainy coffee",url:"https://cdn.pixabay.com/video/2025/10/14/309872_m\
edium.mp4",tile:23},{id:"coffee-living-room-237103",name:"Fireside coffee",url:"https://cdn.pixabay.com/video/2024/10/19\
/237103_medium.mp4",tile:24},{id:"coffee-tea-steam-285759",name:"Morning steam",url:"https://cdn.pixabay.com/video/2025/\
06/13/285759_medium.mp4",tile:25},{id:"cottage-cabin-house-180939-865223880",name:"Garden cottage",url:"https://cdn.pixa\
bay.com/video/2023/09/16/180939-865223880_medium.mp4",tile:26},{id:"couch-sofa-rain-185888-876579680",name:"Forest loung\
e",url:"https://cdn.pixabay.com/video/2023/10/20/185888-876579680_medium.mp4",tile:27},{id:"cozy-bedroom-289797-289797",
name:"Cozy bedroom",url:"https://cdn.pixabay.com/video/2025/07/06/289797_medium.mp4",tile:28},{id:"cozy-bedroom-modern-2\
90857",name:"Rainy bedroom",url:"https://cdn.pixabay.com/video/2025/07/12/290857_medium.mp4",tile:29},{id:"cozy-bedroom-\
modern-290943",name:"Rainy bedroom",url:"https://cdn.pixabay.com/video/2025/07/12/290943_medium.mp4",tile:30},{id:"cozy-\
bedroom-modern-290944",name:"Rainy bedroom",url:"https://cdn.pixabay.com/video/2025/07/12/290944_medium.mp4",tile:31},{id:"\
cozy-winter-autumn-253056",name:"Winter fire",url:"https://cdn.pixabay.com/video/2025/01/17/253056_medium.mp4",tile:32},
{id:"creek-snow-winter-190915-888878158",name:"Snowy creek",url:"https://cdn.pixabay.com/video/2023/11/27/190915-8888781\
58_medium.mp4",tile:33},{id:"dark-ocean-ocean-372868",name:"Ocean doorway",url:"https://cdn.pixabay.com/video/2026/08/27\
/372868_medium.mp4",tile:34},{id:"dark-ocean-ocean-372869",name:"Ocean doorway",url:"https://cdn.pixabay.com/video/2026/\
08/27/372869_medium.mp4",tile:35},{id:"dark-room-storm-369507",name:"Rainy room",url:"https://cdn.pixabay.com/video/2026\
/08/09/369507_medium.mp4",tile:36},{id:"dream-nature-fantasy-297586",name:"Winter cottage",url:"https://cdn.pixabay.com/\
video/2025/08/15/297586_medium.mp4",tile:37},{id:"fireplace-fire-heat-327084",name:"Fireplace",url:"https://cdn.pixabay.\
com/video/2026/01/11/327084_medium.mp4",tile:38},{id:"fireplace-winter-snow-347140",name:"Snowy lounge",url:"https://cdn\
.pixabay.com/video/2026/04/17/347140_medium.mp4",tile:39},{id:"flowers-tree-moon-179020-861022089",name:"Moonlit blossom\
s",url:"https://cdn.pixabay.com/video/2023/09/03/179020-861022089_medium.mp4",tile:40},{id:"forest-nature-wood-329836",name:"\
Moonlit forest",url:"https://cdn.pixabay.com/video/2026/01/23/329836_medium.mp4",tile:41},{id:"ice-forest-frozen-254850",
name:"Frozen river",url:"https://cdn.pixabay.com/video/2025/01/27/254850_medium.mp4",tile:42},{id:"landscape-cute-heaven\
-371729",name:"Castle at night",url:"https://cdn.pixabay.com/video/2026/08/21/371729_medium.mp4",tile:43},{id:"landscape\
-waterfall-water-298040",name:"Forest falls",url:"https://cdn.pixabay.com/video/2025/08/18/298040_medium.mp4",tile:44},{
id:"library-books-363706-363706",name:"Library desk",url:"https://cdn.pixabay.com/video/2026/07/13/363706_medium.mp4",tile:45},
{id:"lighthouse-landscape-nature-325141",name:"Coastal lighthouse",url:"https://cdn.pixabay.com/video/2025/12/31/325141_\
medium.mp4",tile:46},{id:"lighthouse-storm-ocean-373895",name:"Midnight lighthouse",url:"https://cdn.pixabay.com/video/2\
026/09/01/373895_medium.mp4",tile:47},{id:"lighthouse-wave-ocean-358853",name:"Storm lighthouse",url:"https://cdn.pixaba\
y.com/video/2026/06/16/358853_medium.mp4",tile:48},{id:"loop-ocean-nature-358453",name:"Silver waves",url:"https://cdn.p\
ixabay.com/video/2026/06/14/358453_medium.mp4",tile:49},{id:"luxury-bedroom-cozy-290401",name:"Night lounge",url:"https:\
//cdn.pixabay.com/video/2025/07/09/290401_medium.mp4",tile:50},{id:"moon-clouds-stars-209264",name:"Clouds and moon",url:"\
https://cdn.pixabay.com/video/2024/04/24/209264_medium.mp4",tile:51},{id:"moon-full-moon-370403",name:"Sunset ocean",url:"\
https://cdn.pixabay.com/video/2026/08/13/370403_medium.mp4",tile:52},{id:"moon-nature-night-290116",name:"Crimson moon",
url:"https://cdn.pixabay.com/video/2025/07/08/290116_medium.mp4",tile:53},{id:"moon-night-sky-256347",name:"Still moonli\
ght",url:"https://cdn.pixabay.com/video/2025/02/04/256347_medium.mp4",tile:54},{id:"moon-trees-forest-183967-872226594",
name:"Forest moon",url:"https://cdn.pixabay.com/video/2023/10/07/183967-872226594_medium.mp4",tile:55},{id:"moonlight-pa\
trol-boat-290456",name:"Moonlit sail",url:"https://cdn.pixabay.com/video/2025/07/10/290456_medium.mp4",tile:56},{id:"mou\
ntains-lake-water-124774-732319023",name:"Alpine lake",url:"https://cdn.pixabay.com/video/2022/07/20/124774-732319023_me\
dium.mp4",tile:57},{id:"nature-night-moonlight-313411",name:"Golden moon",url:"https://cdn.pixabay.com/video/2025/11/02/\
313411_medium.mp4",tile:58},{id:"night-old-capital-182475-868496329",name:"Kyoto sunset",url:"https://cdn.pixabay.com/vi\
deo/2023/09/26/182475-868496329_medium.mp4",tile:59},{id:"night-view-moon-143565-782758320",name:"City moon",url:"https:\
//cdn.pixabay.com/video/2022/12/19/143565-782758320_medium.mp4",tile:60},{id:"night-view-yamadas-283431",name:"Night sky",
url:"https://cdn.pixabay.com/video/2025/06/03/283431_medium.mp4",tile:61},{id:"ocean-night-stars-377557",name:"Ship at n\
ight",url:"https://cdn.pixabay.com/video/2026/09/19/377557_medium.mp4",tile:62},{id:"ocean-scene-cinemagraph-372866",name:"\
Coastal cabin",url:"https://cdn.pixabay.com/video/2026/08/27/372866_medium.mp4",tile:63},{id:"ocean-sea-fog-299418",name:"\
Misty ocean",url:"https://cdn.pixabay.com/video/2025/08/24/299418_medium.mp4",tile:64},{id:"ocean-sea-waves-174033-85028\
6651",name:"Blue moon coast",url:"https://cdn.pixabay.com/video/2023/07/31/174033-850286651_medium.mp4",tile:65},{id:"oc\
ean-sea-waves-232793",name:"Rocky sea",url:"https://cdn.pixabay.com/video/2024/09/23/232793_medium.mp4",tile:66},{id:"pu\
rple-cosmic-space-278396",name:"Purple cosmos",url:"https://cdn.pixabay.com/video/2025/05/12/278396_medium.mp4",tile:67},
{id:"radio-tower-night-211067",name:"Tokyo tower",url:"https://cdn.pixabay.com/video/2024/05/07/211067_medium.mp4",tile:68},
{id:"rain-cobblestone-puddle-380412",name:"Rainy cobbles",url:"https://cdn.pixabay.com/video/2026/10/02/380412_medium.mp\
4",tile:69},{id:"rain-leaves-foliage-227700",name:"Rainy leaves",url:"https://cdn.pixabay.com/video/2024/08/21/227700_me\
dium.mp4",tile:70},{id:"rain-nature-water-289712",name:"Rainy path",url:"https://cdn.pixabay.com/video/2025/07/05/289712\
_medium.mp4",tile:71},{id:"rain-outside-372862-372862",name:"Storm lounge",url:"https://cdn.pixabay.com/video/2026/08/27\
/372862_medium.mp4",tile:72},{id:"rain-raining-raindrops-199501-910530342",name:"Rainy puddles",url:"https://cdn.pixabay\
.com/video/2024/02/06/199501-910530342_medium.mp4",tile:73},{id:"rain-train-window-363703",name:"Neon train",url:"https:\
//cdn.pixabay.com/video/2026/07/13/363703_medium.mp4",tile:74},{id:"rain-umbrella-night-368211",name:"Rainy street",url:"\
https://cdn.pixabay.com/video/2026/08/02/368211_medium.mp4",tile:75},{id:"sea-coast-japan-197525-905005651",name:"Quiet \
coast",url:"https://cdn.pixabay.com/video/2024/01/21/197525-905005651_medium.mp4",tile:76},{id:"sea-full-moon-227600",name:"\
Moonlit surf",url:"https://cdn.pixabay.com/video/2024/08/20/227600_medium.mp4",tile:77},{id:"sea-ocean-waves-269357",name:"\
Moonlit boat",url:"https://cdn.pixabay.com/video/2025/04/02/269357_medium.mp4",tile:78},{id:"sky-clouds-moon-243117",name:"\
Violet sky",url:"https://cdn.pixabay.com/video/2024/11/24/243117_medium.mp4",tile:79},{id:"snow-cold-scenery-167736-8374\
29014",name:"Snowy shrine",url:"https://cdn.pixabay.com/video/2023/06/18/167736-837429014_medium.mp4",tile:80},{id:"star\
ry-sky-milky-170888-844432955",name:"Starry pines",url:"https://cdn.pixabay.com/video/2023/07/10/170888-844432955_medium\
.mp4",tile:81},{id:"starry-sky-milky-285663",name:"Starry pines",url:"https://cdn.pixabay.com/video/2025/06/13/285663_me\
dium.mp4",tile:82},{id:"steaming-mug-hot-322244",name:"Warm coffee",url:"https://cdn.pixabay.com/video/2025/12/16/322244\
_medium.mp4",tile:83},{id:"table-epoxy-lounge-298514",name:"Alpine table",url:"https://cdn.pixabay.com/video/2025/08/19/\
298514_medium.mp4",tile:84},{id:"train-commuting-train-170887-844432947",name:"City commute",url:"https://cdn.pixabay.co\
m/video/2023/07/10/170887-844432947_medium.mp4",tile:85},{id:"train-silence-anime-286593",name:"Sunset train",url:"https\
://cdn.pixabay.com/video/2025/06/19/286593_medium.mp4",tile:86},{id:"tree-foliage-rain-176026-854526263",name:"Green lea\
ves",url:"https://cdn.pixabay.com/video/2023/08/14/176026-854526263_medium.mp4",tile:87},{id:"tree-forest-rain-205213-92\
6480936",name:"Rainy woodland",url:"https://cdn.pixabay.com/video/2024/03/22/205213-926480936_medium.mp4",tile:88},{id:"\
tree-leaves-rain-172759-847869814",name:"Wet leaves",url:"https://cdn.pixabay.com/video/2023/07/22/172759-847869814_medi\
um.mp4",tile:89},{id:"tree-stars-starry-176198-855206384",name:"Violet branches",url:"https://cdn.pixabay.com/video/2023\
/08/15/176198-855206384_medium.mp4",tile:90},{id:"trees-foliage-forest-171443-845465129",name:"Mountain forest",url:"htt\
ps://cdn.pixabay.com/video/2023/07/13/171443-845465129_medium.mp4",tile:91},{id:"trees-forest-moon-183969-872226597",name:"\
Night blossoms",url:"https://cdn.pixabay.com/video/2023/10/07/183969-872226597_medium.mp4",tile:92},{id:"trees-leaves-sn\
ow-190667-888333548",name:"Winter branches",url:"https://cdn.pixabay.com/video/2023/11/25/190667-888333548_medium.mp4",tile:93},
{id:"turtle-moon-night-289572",name:"Turtles at night",url:"https://cdn.pixabay.com/video/2025/07/04/289572_medium.mp4",
tile:94},{id:"wallpaper-pixel-anime-247738",name:"Neon city",url:"https://cdn.pixabay.com/video/2024/12/19/247738_medium\
.mp4",tile:95},{id:"wallpaper-pixel-anime-247740",name:"Sunset crossing",url:"https://cdn.pixabay.com/video/2024/12/19/2\
47740_medium.mp4",tile:96},{id:"wallpaper-pixel-anime-247741",name:"Kyoto evening",url:"https://cdn.pixabay.com/video/20\
24/12/19/247741_medium.mp4",tile:97},{id:"waterfall-trees-forest-208570",name:"Forest waterfall",url:"https://cdn.pixaba\
y.com/video/2024/04/19/208570_medium.mp4",tile:98},{id:"waves-ocean-sea-372255",name:"Moonlit ocean",url:"https://cdn.pi\
xabay.com/video/2026/08/23/372255_medium.mp4",tile:99},{id:"winter-snow-nature-336603",name:"Snowy walk",url:"https://cd\
n.pixabay.com/video/2026/02/25/336603_medium.mp4",tile:100}],xm={"balcony-dusk-l.jpg":"53-balcony-dusk-l.jpg","balcony-d\
usk-l.mp4":"32-balcony-dusk-l.mp4","balcony-dusk-p.jpg":"52-balcony-dusk-p.jpg","balcony-dusk-p.mp4":"31-balcony-dusk-p.\
mp4","cozy-window-l.jpg":"51-cozy-window-l.jpg","cozy-window-l.mp4":"30-cozy-window-l.mp4","cozy-window-p.jpg":"50-cozy-\
window-p.jpg","cozy-window-p.mp4":"29-cozy-window-p.mp4","japan-street-l.jpg":"49-japan-street-l.jpg","japan-street-l.mp\
4":"34-japan-street-l.mp4","japan-street-p.jpg":"48-japan-street-p.jpg","japan-street-p.mp4":"35-japan-street-p.mp4","mi\
sty-river-l.jpg":"40-misty-river-l.jpg","misty-river-l.mp4":"22-misty-river-l.mp4","misty-river-p.jpg":"39-misty-river-p\
.jpg","misty-river-p.mp4":"21-misty-river-p.mp4","night-train-l.jpg":"47-night-train-l.jpg","night-train-l.mp4":"28-nigh\
t-train-l.mp4","night-train-p.jpg":"46-night-train-p.jpg","night-train-p.mp4":"27-night-train-p.mp4","rainy-window-l.jpg":"\
41-rainy-window-l.jpg","rainy-window-l.mp4":"20-rainy-window-l.mp4","rainy-window-p.jpg":"37-rainy-window-p.jpg","rainy-\
window-p.mp4":"17-rainy-window-p.mp4","sakura-night-l.jpg":"45-sakura-night-l.jpg","sakura-night-l.mp4":"26-sakura-night\
-l.mp4","sakura-night-p.jpg":"44-sakura-night-p.jpg","sakura-night-p.mp4":"25-sakura-night-p.mp4","shrine-l.jpg":"10-shr\
ine-l.jpg","shrine-l.mp4":"1-shrine-l.mp4","shrine-p.jpg":"36-shrine-p.jpg","shrine-p.mp4":"18-shrine-p.mp4","water-gard\
en-l.jpg":"43-water-garden-l.jpg","water-garden-l.mp4":"24-water-garden-l.mp4","water-garden-p.jpg":"42-water-garden-p.j\
pg","water-garden-p.mp4":"23-water-garden-p.mp4"},kd=(e,t,n)=>`scenes/${xm[`${e}-${t}.${n}`]}`,Sm=(e,t)=>kd(e.id,t,"jpg"),
Cm=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"Sky",value:"#9cc7ff"},{id:"rose",name:"Rose",value:"#f2a9c4"},
{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"Violet",value:"#c9b6ff"},{id:"white",name:"White",value:"#f\
fffff"}],wd=[{id:"sans",name:"Sans",css:"inherit"},{id:"serif",name:"Serif",css:"Georgia, 'Times New Roman', serif"},{id:"\
mono",name:"Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},{id:"round",name:"Round",css:"'Trebuchet MS\
', Verdana, sans-serif"}],Nm=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"sans",bg:{kind:"gradient",id:"ink"}},{id:"du\
sk",name:"Dusk",accent:"#ffcf99",font:"serif",bg:{kind:"gradient",id:"dusk"}},{id:"moss",name:"Moss",accent:"#7ea87b",font:"\
round",bg:{kind:"gradient",id:"moss"}},{id:"dawn",name:"Dawn",accent:"#f2a9c4",font:"serif",bg:{kind:"gradient",id:"dawn"}}],
Em=[{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"\
Woodblock"},{id:"custom",name:"My sound"}],xd=[{id:"none",name:"Off"},{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"\
storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocean",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"\
forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",
name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",name:"Field cricket",file:"sounds/crickets.m4a"},{id:"\
wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Stream",file:"sounds/stream.m4a"},{id:"brown",name:"Brown n\
oise"},{id:"white",name:"White noise"}],Sd=[{id:"lofi",name:"Lofi Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9\
xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",
name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"}],yt={focus:"Focus",short:"Short br\
eak",long:"Long break"};let Hn=null;function ei(){return Hn||(Hn=new(window.AudioContext||window.webkitAudioContext)),Hn.
state==="suspended"&&Hn.resume(),Hn}function vt(e,t,n){const r=e.createOscillator(),l=e.createGain();r.type=n.type||"sin\
e",r.frequency.value=n.freq,l.gain.setValueAtTime(1e-4,n.start),l.gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),
n.start+.012),l.gain.exponentialRampToValueAtTime(1e-4,n.start+n.dur),r.connect(l),l.connect(t),r.start(n.start),r.stop(
n.start+n.dur+.05)}function Qn(e,t,n){const r=ei(),l=r.createGain();l.gain.value=t,l.connect(r.destination);const i=n?2:
1,o=e==="gong"?3.6:e==="bell"?2.4:1.6;for(let s=0;s<i;s++){const a=r.currentTime+.02+s*(o+.35);if(e==="bell")[[660,.5],[
1320,.28],[1760,.14],[2240,.07]].forEach(([c,v])=>vt(r,l,{freq:c,start:a,dur:2.2,gain:v}));else if(e==="chime")vt(r,l,{freq:783.99,
start:a,dur:1.3,gain:.4}),vt(r,l,{freq:1046.5,start:a+.32,dur:1.4,gain:.34});else if(e==="gong")[[196,.42],[294,.24],[392,
.17],[523,.09]].forEach(([c,v])=>vt(r,l,{freq:c,start:a,dur:3.4,gain:v}));else if(e==="beep")for(let c=0;c<3;c++)vt(r,l,
{freq:880,type:"square",start:a+c*.3,dur:.16,gain:.22});else e==="wood"&&(vt(r,l,{freq:1400,type:"triangle",start:a,dur:.07,
gain:.5}),vt(r,l,{freq:1400,type:"triangle",start:a+.22,dur:.07,gain:.4}))}}function jm(e){const t=ei(),n=t.createGain();
n.gain.value=.35*e,n.connect(t.destination),vt(t,n,{freq:1800,start:t.currentTime,dur:.035,gain:.5})}function _m(e,t){const n=2*
e.sampleRate,r=e.createBuffer(1,n,e.sampleRate),l=r.getChannelData(0);let i=0;for(let o=0;o<n;o++){const s=Math.random()*
2-1;t==="brown"?(i=(i+.02*s)/1.02,l[o]=i*3.2):l[o]=s}return r}const Mm={"sounds/rain.m4a":["sounds/rain-0.txt","sounds/r\
ain-1.txt","sounds/rain-2.txt","sounds/rain-3.txt","sounds/rain-4.txt","sounds/rain-5.txt"],"sounds/thunderstorm.m4a":["\
sounds/thunderstorm-0.txt","sounds/thunderstorm-1.txt","sounds/thunderstorm-2.txt","sounds/thunderstorm-3.txt","sounds/t\
hunderstorm-4.txt","sounds/thunderstorm-5.txt"],"sounds/ocean.m4a":["sounds/ocean-0.txt","sounds/ocean-1.txt","sounds/oc\
ean-2.txt","sounds/ocean-3.txt","sounds/ocean-4.txt","sounds/ocean-5.txt"],"sounds/forest.m4a":["sounds/forest-0.txt","s\
ounds/forest-1.txt","sounds/forest-2.txt","sounds/forest-3.txt","sounds/forest-4.txt"],"sounds/fireplace.m4a":["sounds/f\
ireplace-0.txt","sounds/fireplace-1.txt","sounds/fireplace-2.txt","sounds/fireplace-3.txt","sounds/fireplace-4.txt","sou\
nds/fireplace-5.txt"],"sounds/coffee-shop.m4a":["sounds/coffee-shop-0.txt","sounds/coffee-shop-1.txt","sounds/coffee-sho\
p-2.txt","sounds/coffee-shop-3.txt","sounds/coffee-shop-4.txt","sounds/coffee-shop-5.txt"],"sounds/crickets.m4a":["sound\
s/crickets-0.txt","sounds/crickets-1.txt","sounds/crickets-2.txt","sounds/crickets-3.txt"],"sounds/wind.m4a":["sounds/wi\
nd-0.txt","sounds/wind-1.txt","sounds/wind-2.txt","sounds/wind-3.txt","sounds/wind-4.txt","sounds/wind-5.txt"],"sounds/s\
tream.m4a":["sounds/stream-0.txt","sounds/stream-1.txt","sounds/stream-2.txt","sounds/stream-3.txt","sounds/stream-4.txt",
"sounds/stream-5.txt"]},qr={};function Pm(e,t){return qr[t]||(qr[t]=Promise.all((Mm[t]||[]).map(async n=>{const r=await fetch(
n);if(!r.ok)throw new Error(`HTTP ${r.status}`);return(await r.text()).trim()})).then(n=>{if(!n.length)throw new Error("\
Recording unavailable");const r=atob(n.join(""));return e.decodeAudioData(Uint8Array.from(r,l=>l.charCodeAt(0)).buffer)}).
catch(n=>{throw delete qr[t],n})),qr[t]}function Rm(e,t){if(e==="none")return null;const n=xd.find(s=>s.id===e),r=ei(),l=r.
createGain();if(l.gain.value=t,l.connect(r.destination),n!=null&&n.file){let s=!1,a=null;return Pm(r,n.file).then(c=>{s||
(a=r.createBufferSource(),a.buffer=c,a.loop=!0,a.connect(l),a.start())}).catch(()=>{}),()=>{s=!0;try{a==null||a.stop()}catch{}
try{l.disconnect()}catch{}}}const i=r.createBufferSource();i.buffer=_m(r,e==="white"?"white":"brown"),i.loop=!0;let o=i;
if(e==="brown"){const s=r.createBiquadFilter();s.type="lowpass",s.frequency.value=900,o.connect(s),o=s}return o.connect(
l),i.start(),()=>{try{i.stop(),l.disconnect()}catch{}}}function Lm(e){return/^https:\/\/.+/i.test(e.trim())}async function To(e){
const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.blob()}async function Tm(e){var l;const t=e.
trim();if(/pin\.it\//i.test(t))throw new Error("short pin link");const n=t.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let r=t;if(n){const i=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!i.ok)throw new Error("pin lookup failed");const o=await i.json();if((o==null?void 0:o.status)!=="success"||!Array.isArray(
o==null?void 0:o.data)||o.data.length===0)throw new Error("pin unavailable");const s=(l=o.data[0])==null?void 0:l.images;
if(!s)throw new Error("pin has no image");const a=s.originals||s["736x"]||s["564x"]||s["236x"];if(!(a!=null&&a.url))throw new Error(
"pin has no image");r=a.url}if(!/^https:\/\//i.test(r))throw new Error("not a link");try{const i=await To(r);if(i.type.startsWith(
"image/"))return i;throw new Error("not an image")}catch{const i=`https://images.weserv.nl/?url=${encodeURIComponent(r.replace(
/^https?:\/\//,""))}&w=1920`,o=await To(i);if(!o.type.startsWith("image/"))throw new Error("not an image");return o}}function Cd(e){
const t=Sd.find(l=>l.id===e),r=(t?t.url:e).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return r?`https://open.spotify.com/embed/${r[1].toLowerCase()}/${r[2]}?theme=0`:null}const bt=({d:e,vb:t=24})=>u.jsx("sv\
g",{width:"18",height:"18",viewBox:`0 0 ${t} ${t}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"ro\
und",strokeLinejoin:"round","aria-hidden":"true",children:e.split("|").map((n,r)=>u.jsx("path",{d:n},r))}),zm="M4 9V4h5|\
M20 9V4h-5|M4 15v5h5|M20 15v5h-5",Im="M5 12h14",Om="M4 6h16|M4 12h16|M4 18h10",Dm="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0\
 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",
Nd="M6 6l12 12|M18 6L6 18",Fm="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function ln(e){
const t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(
2,"0")}`}function Kn(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).
padStart(2,"0")}`}function el({label:e,value:t,min:n,max:r,onChange:l,unit:i}){const o=s=>{const a=parseInt(s,10);Number.
isFinite(a)&&l(Math.min(r,Math.max(n,a)))};return u.jsxs("div",{className:"ft-field",children:[u.jsx("span",{className:"\
ft-field-label",children:e}),u.jsxs("span",{className:"ft-stepper",children:[u.jsx("button",{type:"button","aria-label":`\
Decrease ${e}`,onClick:()=>l(Math.max(n,t-1)),children:"-"}),u.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${e} value`,min:n,max:r,value:t,onChange:s=>o(s.target.value)}),i?u.jsx("span",{className:"ft-ste\
pper-unit",children:i}):null,u.jsx("button",{type:"button","aria-label":`Increase ${e}`,onClick:()=>l(Math.min(r,t+1)),children:"\
+"})]})]})}function Ze({label:e,hint:t,checked:n,onChange:r}){return u.jsxs("button",{type:"button",role:"switch","aria-\
checked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>r(!n),children:[u.jsxs("span",{className:"ft-toggle-text",children:[
u.jsx("span",{className:"ft-field-label",children:e}),t?u.jsx("span",{className:"ft-field-hint",children:t}):null]}),u.jsx(
"span",{className:"ft-switch",children:u.jsx("span",{className:"ft-knob"})})]})}const Am=It.memo(function({scene:t,paused:n,
animate:r}){const l=S.useRef(null),[i,o]=S.useState(!1),s=yd("rain"),a=S.useRef({paused:n,animate:r});a.current={paused:n,
animate:r};const[c,v]=S.useState(()=>window.matchMedia("(orientation: portrait)").matches);S.useEffect(()=>{const k=window.
matchMedia("(orientation: portrait)"),g=()=>v(k.matches);return k.addEventListener("change",g),()=>k.removeEventListener(
"change",g)},[]);const y=c?"p":"l",m=t.url||kd(t.id,y,"mp4");return S.useEffect(()=>{o(!1);const k=Array.from(l.current.
querySelectorAll("video"));let g=0,w=!1,I=!1,f=0,d=!1;const p=j=>j.play().catch(()=>{}),x=()=>{a.current.paused||!a.current.
animate||document.hidden?k.forEach(j=>j.pause()):(p(k[g]),w&&p(k[1-g]))},_=()=>{if(I)return;const j=k[g],M=k[1-g];if(!d&&
j.readyState>=2&&(d=!0,x()),!(!a.current.paused&&a.current.animate&&!document.hidden))k.forEach(A=>{A.paused||A.pause()});else if(d){
j.paused&&!j.ended&&p(j);const A=Math.min(1.5,j.duration/4);if(!w&&Number.isFinite(j.duration)&&j.currentTime>=j.duration-
A&&M.readyState>=2&&(w=!0,M.currentTime=0,p(M)),w){M.paused&&p(M);const T=Math.min(1,M.currentTime/A);j.style.opacity=String(
1-T),M.style.opacity="1",T>=1&&(j.pause(),j.currentTime=0,j.style.zIndex="0",j.style.opacity="1",M.style.zIndex="1",g=1-
g,w=!1,l.current.dataset.wraps=String(Number(l.current.dataset.wraps||0)+1))}}f=requestAnimationFrame(_)};return k[0].style.
zIndex="1",k[1].style.zIndex="0",f=requestAnimationFrame(_),document.addEventListener("visibilitychange",x),window.addEventListener(
"pointerdown",x),()=>{I=!0,cancelAnimationFrame(f),k.forEach(j=>j.pause()),document.removeEventListener("visibilitychang\
e",x),window.removeEventListener("pointerdown",x)}},[m]),u.jsxs("div",{ref:l,className:"ft-scene-stage",style:{backgroundImage:s?
`url(${s})`:void 0,backgroundSize:"cover",backgroundPosition:"center"},children:[i&&u.jsx("span",{className:"ft-stream-s\
tatus",children:"This scene couldn't load. Choose another background in Settings."}),[0,1].map(k=>u.jsx("video",{onError:()=>o(
!0),className:"ft-bg ft-bgvideo",src:m,muted:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0,preload:"\
auto","aria-hidden":"true"},k))]},m)}),$m=It.memo(function({kind:t,id:n,scrim:r,builtinSrc:l,linkBg:i,uploadBg:o,paused:s,
animate:a}){let c={};t==="builtin"&&l?c={backgroundImage:`url(${l})`}:t==="gradient"?c={backgroundImage:(pl.find(k=>k.id===
n)||pl[0]).css}:t==="link"&&(i==null?void 0:i.kind)==="image"?c={backgroundImage:`url(${i.url})`}:t==="upload"&&(o==null?
void 0:o.kind)==="image"?c={backgroundImage:`url(${o.url})`}:(t==="link"||t==="upload"||t==="builtin")&&(c={backgroundImage:pl[0].
css});const v=vd.some(k=>k.id===n)?n:"aurora",y=t==="scene"?[...gd,...Lo].find(k=>k.id===n):void 0,m=t==="link"&&(i==null?
void 0:i.kind)==="video"?i.url:t==="upload"&&(o==null?void 0:o.kind)==="video"?o.url:null;return u.jsxs(u.Fragment,{children:[
y?u.jsx(Am,{scene:y,paused:!!s,animate:a}):m?u.jsx(Um,{src:m,paused:!!s,animate:a}):t==="animated"?u.jsxs("div",{className:`\
ft-anim ft-anim-${v}`,"aria-hidden":"true",children:[u.jsx("i",{}),u.jsx("i",{}),u.jsx("i",{})]}):u.jsx("div",{className:"\
ft-bg",style:c}),u.jsx("div",{className:"ft-scrim",style:{opacity:r}})]})}),Um=It.memo(function({src:t,paused:n,animate:r}){
const l=S.useRef(null);return S.useEffect(()=>{const i=l.current;if(!i)return;const o=()=>{n||!r||document.hidden?i.pause():
i.play().catch(()=>{})};o();const s=()=>{!n&&r&&!document.hidden&&i.play().catch(()=>{})};return document.addEventListener(
"visibilitychange",o),window.addEventListener("pointerdown",s),()=>{document.removeEventListener("visibilitychange",o),window.
removeEventListener("pointerdown",s)}},[n,r,t]),r?u.jsx("video",{ref:l,className:"ft-bg ft-bgvideo",src:t,muted:!0,loop:!0,
autoPlay:!0,playsInline:!0,preload:"auto","aria-hidden":"true"}):null}),tu=It.memo(function({scene:t,active:n,onPick:r}){
const l=yd(t.preview||"catalog"),i=t.preview?3:8,o=t.preview?3:13;return u.jsxs("button",{type:"button",className:`ft-bg\
swatch ft-bgswatch-named ${n?"is-active":""}`,"aria-label":`${t.name} animated scene`,onClick:r,children:[t.tile!=null?u.
jsx("span",{className:"ft-bgswatch-img",style:{backgroundImage:l?`url(${l})`:void 0,backgroundSize:`${i*100}% ${o*100}%`,
backgroundPosition:`${t.tile%i*100/(i-1)}% ${Math.floor(t.tile/i)*100/(o-1)}%`}}):u.jsx("img",{className:"ft-bgswatch-im\
g",src:Sm(t,"p"),alt:"",loading:"lazy",decoding:"async"}),u.jsx("span",{className:"ft-bgswatch-name",children:t.name})]})}),
bm=It.memo(function({id:t,name:n,active:r,onPick:l}){const[i,o]=S.useState(Di[t]||null);return S.useEffect(()=>{let s=!0;
return!Di[t]&&eu[t]&&eu[t]().then(a=>{Di[t]=a.default,s&&o(a.default)}).catch(()=>{}),()=>{s=!1}},[t]),u.jsx("button",{type:"\
button",className:`ft-bgswatch ${r?"is-active":""}`,style:i?{backgroundImage:`url(${i})`}:void 0,"aria-label":n,onClick:l})}),
Vm=It.memo(function({chip:t,panel:n,fullscreenSupported:r,onFullscreen:l,onTasks:i,onSettings:o,onMinimize:s,onPopout:a}){
return u.jsxs("header",{className:"ft-topbar",children:[u.jsx("span",{className:"ft-brand",children:"Study focus"}),t?u.
jsx("span",{className:"ft-chip",title:"Today's completed focus time",children:t}):null,u.jsxs("span",{className:"ft-topb\
ar-actions",children:[r?u.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:l,children:u.
jsx(bt,{d:zm})}):null,u.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"\
Open timer in its own window",onClick:a,children:u.jsx(bt,{d:Fm})}),u.jsx("button",{type:"button",className:"ft-iconbtn",
"aria-label":"Minimize to a small timer",title:"Minimize to a small timer",onClick:s,children:u.jsx(bt,{d:Im})}),u.jsx("\
button",{type:"button",className:`ft-iconbtn ${n==="tasks"?"is-active":""}`,"aria-label":"Tasks",onClick:i,children:u.jsx(
bt,{d:Om})}),u.jsx("button",{type:"button",className:`ft-iconbtn ${n==="settings"?"is-active":""}`,"aria-label":"Setting\
s",onClick:o,children:u.jsx(bt,{d:Dm})})]})]})}),Bm=It.memo(function({tasksState:t,setTasksState:n,week:r,ready:l,savedMessage:i,
onClose:o}){const[s,a]=S.useState(""),[c,v]=S.useState(1),y=t.tasks,m=Math.max(1,...r.map(g=>g.minutes)),k=()=>{const g=s.
trim();if(!g)return;const w={id:`t${Date.now()}`,title:g,est:c,done:0,completed:!1};n(I=>({tasks:[...I.tasks,w],activeId:I.
activeId||w.id})),a(""),v(1)};return u.jsxs("aside",{className:"ft-sheet","aria-label":"Tasks",children:[u.jsxs("div",{className:"\
ft-sheet-head",children:[u.jsx("h2",{children:"Tasks"}),u.jsx("button",{type:"button",className:"ft-sheet-close","aria-l\
abel":"Close tasks",onClick:o,children:u.jsx(bt,{d:Nd})})]}),u.jsxs("div",{className:"ft-addtask",children:[u.jsx("input",
{value:s,placeholder:"What are you studying?",onChange:g=>a(g.target.value),onKeyDown:g=>{g.key==="Enter"&&k()},maxLength:120}),
u.jsxs("span",{className:"ft-stepper is-small",children:[u.jsx("button",{type:"button","aria-label":"Fewer pomodoros",onClick:()=>v(
Math.max(1,c-1)),children:"-"}),u.jsxs("span",{className:"ft-stepper-value",children:[c,u.jsx("em",{children:"est"})]}),
u.jsx("button",{type:"button","aria-label":"More pomodoros",onClick:()=>v(Math.min(20,c+1)),children:"+"})]}),u.jsx("but\
ton",{type:"button",className:"ft-primary is-compact",onClick:k,disabled:!l,children:"Add"})]}),y.length===0?u.jsx("p",{
className:"ft-field-hint",children:"No tasks yet. Add one to track pomodoros against it, or just run the timer."}):null,
u.jsx("ul",{className:"ft-tasklist",children:y.map(g=>u.jsxs("li",{className:`${g.id===t.activeId?"is-active":""} ${g.completed?
"is-done":""}`,children:[u.jsx("button",{type:"button",className:"ft-taskcheck","aria-label":g.completed?"Mark not done":
"Mark done",onClick:()=>n(w=>({...w,tasks:w.tasks.map(I=>I.id===g.id?{...I,completed:!I.completed}:I)})),children:g.completed?
"✓":""}),u.jsx("button",{type:"button",className:"ft-taskname",onClick:()=>n(w=>({...w,activeId:g.id})),children:g.title}),
u.jsxs("span",{className:"ft-taskcount",children:[g.done,"/",g.est]}),u.jsx("button",{type:"button",className:"ft-taskde\
l","aria-label":`Delete ${g.title}`,onClick:()=>n(w=>({tasks:w.tasks.filter(I=>I.id!==g.id),activeId:w.activeId===g.id?null:
w.activeId})),children:"×"})]},g.id))}),y.some(g=>g.completed)?u.jsx("button",{type:"button",className:"ft-ghost is-com\
pact",onClick:()=>n(g=>({...g,tasks:g.tasks.filter(w=>!w.completed)})),children:"Clear completed"}):null,u.jsxs("div",{className:"\
ft-week",children:[u.jsx("h3",{children:"This week"}),u.jsx("div",{className:"ft-weekbars",role:"img","aria-label":`Focu\
s minutes by day: ${r.map(g=>`${g.label} ${g.minutes}`).join(", ")}`,children:r.map((g,w)=>u.jsxs("span",{className:"ft-\
weekcol",children:[u.jsx("span",{className:"ft-weekbar",style:{height:`${Math.round(g.minutes/m*64)}px`}}),u.jsx("span",
{className:"ft-weekday",children:g.label})]},w))})]}),u.jsx("p",{className:"ft-field-hint",children:i})]})});function Wm(){
const[e,t]=S.useState(null),[,n]=S.useState(0),r=S.useRef(null);S.useEffect(()=>{const a=new BroadcastChannel("sft-sync");
r.current=a,a.onmessage=v=>{var y;((y=v.data)==null?void 0:y.t)==="state"&&t(v.data)};const c=window.setInterval(()=>n(v=>v+
1),500);return()=>{window.clearInterval(c),a.close()}},[]);const l=a=>{var c;return(c=r.current)==null?void 0:c.postMessage(
{t:"cmd",cmd:a})};let i=e?e.remaining:0;e!=null&&e.running&&(i=Math.max(0,e.remaining-(Date.now()-e.at)));const o=!e||Date.
now()-e.at>4e3,s=e&&e.dur>0?Math.round((1-i/e.dur)*100):0;return u.jsxs("div",{className:"ft-popout",style:{"--ft-accent":(e==
null?void 0:e.accent)||"#9fd8c6"},children:[u.jsx("div",{className:"ft-popout-phase",children:e?yt[e.phase]:"Study focus"}),
u.jsx("div",{className:"ft-popout-time",children:e?ln(i):"--:--"}),u.jsx("div",{className:"ft-popout-bar","aria-hidden":"\
true",children:u.jsx("span",{style:{width:`${s}%`}})}),u.jsxs("div",{className:"ft-popout-btns",children:[u.jsx("button",
{type:"button",className:"ft-primary is-compact",onClick:()=>l("toggle"),children:e!=null&&e.running?"Pause":"Start"}),u.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>l("reset"),children:"Reset"}),u.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:()=>l("skip"),children:"Skip"})]}),o?u.jsx("p",{className:"ft-popout-not\
e",children:"Open the study timer in another tab to control it from here."}):null]})}const Hm=It.memo(function({settings:t,
patch:n,bgStatus:r,soundStatus:l,lastBgSrcRef:i,lastSndSrcRef:o,resolveLinkBg:s,resolveCustomSound:a,uploadBg:c,uploadSound:v,
previewAlarm:y,requestNotifications:m,notificationsSupported:k,wakeLockSupported:g,onResetSettings:w,savedMessage:I,onClose:f}){
const[d,p]=S.useState(""),[x,_]=S.useState(""),[j,M]=S.useState(""),[L,A]=S.useState(""),T=t.background,B=()=>{const h=d.
trim();h&&s(h).then(re=>{re&&(i.current=h,n({background:{kind:"link",source:h}}))})},we=()=>{const h=x.trim();Lm(h)&&a(h).
then(re=>{var pt;re&&(o.current=h,n({alarmSound:"custom",customAlarm:{source:h,name:((pt=h.split("/").pop())==null?void 0:
pt.split("?")[0])||"Custom sound"}}))})},Ye=()=>{const h=j.trim();if(h){if(!Cd(h)){A("That is not a Spotify link. Copy a\
 link that starts with https://open.spotify.com/ from the Spotify app (Share - Copy link). Your current player is unchan\
ged.");return}A(""),n({spotify:h,spotifyOpen:!0})}};return u.jsxs("aside",{className:"ft-sheet","aria-label":"Settings",
children:[u.jsxs("div",{className:"ft-sheet-head",children:[u.jsx("h2",{children:"Settings"}),u.jsx("button",{type:"butt\
on",className:"ft-sheet-close","aria-label":"Close settings",onClick:f,children:u.jsx(bt,{d:Nd})})]}),u.jsxs("section",{
children:[u.jsx("h3",{children:"Appearance"}),u.jsx("div",{className:"ft-chips",children:Nm.map(h=>u.jsxs("button",{type:"\
button",className:"ft-chipbtn",onClick:()=>n({accent:h.accent,font:h.font,background:{kind:h.bg.kind,id:h.bg.id}}),children:[
h.name," theme"]},h.id))}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-lab\
el",children:"Accent color"}),u.jsxs("span",{className:"ft-inrow",children:[Cm.map(h=>u.jsx("button",{type:"button",className:`\
ft-colorswatch ${t.accent.toLowerCase()===h.value?"is-active":""}`,style:{background:h.value},"aria-label":`${h.name} ac\
cent`,onClick:()=>n({accent:h.value})},h.id)),u.jsxs("label",{className:"ft-colorcustom",children:[u.jsx("input",{type:"\
color",value:/^#[0-9a-f]{6}$/i.test(t.accent)?t.accent:"#9fd8c6","aria-label":"Custom accent color",onChange:h=>n({accent:h.
target.value})}),u.jsx("span",{children:"Custom"})]})]})]}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx(
"span",{className:"ft-field-label",children:"Font"}),u.jsx("div",{className:"ft-chips",children:wd.map(h=>u.jsx("button",
{type:"button",className:`ft-chipbtn ${t.font===h.id?"is-active":""}`,style:h.css==="inherit"?void 0:{fontFamily:h.css},
onClick:()=>n({font:h.id}),children:h.name},h.id))})]}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("s\
pan",{className:"ft-field-label",children:"Clock style"}),u.jsx("div",{className:"ft-chips",children:[["ring","Ring"],["\
bar","Bar"],["minimal","Minimal"]].map(([h,re])=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.clockStyle===h?
"is-active":""}`,onClick:()=>n({clockStyle:h}),children:re},h))})]}),u.jsxs("div",{className:"ft-field is-stacked",children:[
u.jsx("span",{className:"ft-field-label",children:"Clock size"}),u.jsx("div",{className:"ft-chips",children:[["s","Small"],
["m","Medium"],["l","Large"]].map(([h,re])=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.clockSize===h?"is-ac\
tive":""}`,onClick:()=>n({clockSize:h}),children:re},h))})]}),u.jsx(Ze,{label:"Cycle dots",checked:t.showDots,onChange:h=>n(
{showDots:h})}),u.jsx(Ze,{label:"Today's stats chip",checked:t.showChip,onChange:h=>n({showChip:h})}),u.jsx(Ze,{label:"S\
hortcut hints",checked:t.showHint,onChange:h=>n({showHint:h})})]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Mus\
ic (Spotify player)"}),u.jsx("div",{className:"ft-chips",children:Sd.map(h=>u.jsx("button",{type:"button",className:`ft-\
chipbtn ${t.spotify===h.id?"is-active":""}`,onClick:()=>{A(""),n({spotify:h.id,spotifyOpen:!0})},children:h.name},h.id))}),
u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"Any Spotify l\
ink"}),u.jsx("span",{className:"ft-field-hint",children:"Paste an open.spotify.com playlist, album, track or podcast lin\
k (in Spotify: Share - Copy link). Music plays in Spotify's official player at the bottom of the page; this is not accou\
nt sync. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-second preview\
s when signed out; podcast episodes usually play in full."}),u.jsxs("span",{className:"ft-inrow",children:[u.jsx("input",
{className:"ft-textinput",value:j,placeholder:"https://open.spotify.com/playlist/…",onChange:h=>M(h.target.value),inputMode:"\
url"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:Ye,children:"Use link"})]}),t.spotify?u.jsxs(
"span",{className:"ft-inrow",children:[u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({spotifyOpen:!t.
spotifyOpen}),children:t.spotifyOpen?"Minimize player":"Show player"}),u.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:()=>n({spotify:null,spotifyOpen:!1}),children:"Remove player"})]}):null,L?u.jsx("span",{className:"\
ft-field-hint",children:L}):null]})]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Timer"}),u.jsx(el,{label:"Focus",
value:t.focusMin,min:1,max:180,unit:"min",onChange:h=>n({focusMin:h})}),u.jsx(el,{label:"Short break",value:t.shortMin,min:1,
max:60,unit:"min",onChange:h=>n({shortMin:h})}),u.jsx(el,{label:"Long break",value:t.longMin,min:1,max:90,unit:"min",onChange:h=>n(
{longMin:h})}),u.jsx(el,{label:"Long break every",value:t.longEvery,min:1,max:12,unit:"sessions",onChange:h=>n({longEvery:h})}),
u.jsx(Ze,{label:"Auto-start breaks",checked:t.autoBreaks,onChange:h=>n({autoBreaks:h})}),u.jsx(Ze,{label:"Auto-start foc\
us",checked:t.autoFocus,onChange:h=>n({autoFocus:h})}),k?u.jsx(Ze,{label:"Browser notifications",hint:"Alerts when a ses\
sion ends in another tab.",checked:t.notifications,onChange:m}):null,g?u.jsx(Ze,{label:"Keep screen awake",checked:t.keepAwake,
onChange:h=>n({keepAwake:h})}):null]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Alarm"}),u.jsx("div",{className:"\
ft-chips",children:Em.map(h=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.alarmSound===h.id?"is-active":""}`,
onClick:()=>{n({alarmSound:h.id}),y(h.id)},children:h.name},h.id))}),u.jsxs("div",{className:"ft-field",children:[u.jsx(
"span",{className:"ft-field-label",children:"Volume"}),u.jsx("input",{type:"range",min:0,max:1,step:.05,value:t.alarmVolume,
"aria-label":"Alarm volume",onChange:h=>n({alarmVolume:parseFloat(h.target.value)})})]}),u.jsx(Ze,{label:"Ring twice",checked:t.
alarmRepeat,onChange:h=>n({alarmRepeat:h})}),u.jsx(Ze,{label:"Ticking while running",checked:t.tick,onChange:h=>n({tick:h})}),
u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"My sound from\
 a link"}),u.jsx("span",{className:"ft-field-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when \
the file's host allows cross-site loading; many do not. Uploading a file always works until the tab reloads; a saved lin\
k reloads each visit."}),u.jsxs("span",{className:"ft-inrow",children:[u.jsx("input",{className:"ft-textinput",value:x,placeholder:"\
https://…/sound.mp3",onChange:h=>_(h.target.value),inputMode:"url"}),u.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:we,children:"Use link"})]}),u.jsxs("span",{className:"ft-inrow",children:[u.jsxs("label",{className:"\
ft-ghost is-compact ft-filebtn",children:["Upload audio",u.jsx("input",{type:"file",accept:"audio/*","aria-label":"Uploa\
d alarm sound file",className:"ft-fileinput",onChange:h=>{var re;return v((re=h.target.files)==null?void 0:re[0])}})]}),
t.customAlarm?u.jsxs("span",{className:"ft-field-hint",children:["Current: ",t.customAlarm.name]}):null]}),l?u.jsx("span",
{className:"ft-field-hint",children:l}):null]})]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Ambient sound"}),u.
jsx("div",{className:"ft-chips",children:xd.map(h=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.ambient===h.id?
"is-active":""}`,onClick:()=>n({ambient:h.id}),children:h.name},h.id))}),t.ambient!=="none"?u.jsxs("div",{className:"ft-\
field",children:[u.jsx("span",{className:"ft-field-label",children:"Ambient volume"}),u.jsx("input",{type:"range",min:0,
max:1,step:.05,value:t.ambientVolume,"aria-label":"Ambient volume",onChange:h=>n({ambientVolume:parseFloat(h.target.value)})})]}):
null]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Background"}),u.jsx("h4",{className:"ft-subhead",children:"Ani\
mated scenes"}),u.jsx("div",{className:"ft-bggrid",children:gd.map(h=>u.jsx(tu,{scene:h,active:T.kind==="scene"&&T.id===
h.id,onPick:()=>n({background:{kind:"scene",id:h.id}})},h.id))}),u.jsxs("details",{className:"ft-extra-scenes",children:[
u.jsxs("summary",{children:["More animated scenes (",Lo.length,")"]}),u.jsx("p",{className:"ft-field-hint",children:"Vid\
eos stream only when chosen. If a source is unavailable, choose another scene. Animation and pop-out support depend on y\
our browser."}),u.jsx("div",{className:"ft-bggrid",children:Lo.map(h=>u.jsx(tu,{scene:h,active:T.kind==="scene"&&T.id===
h.id,onPick:()=>n({background:{kind:"scene",id:h.id}})},h.id))})]}),u.jsx("div",{style:{display:"none"}}),u.jsx(Ze,{label:"\
Animate backgrounds",hint:"Motion starts by itself. Turn off to pause motion and save battery.",checked:t.bgAnimate!==!1,
onChange:h=>n({bgAnimate:h})}),u.jsx("h4",{className:"ft-subhead",children:"Animated"}),u.jsx("div",{className:"ft-bggri\
d",children:vd.map(h=>u.jsx("button",{type:"button",className:`ft-bgswatch ft-animsw ft-animsw-${h.id} ${T.kind==="anima\
ted"&&T.id===h.id?"is-active":""}`,"aria-label":`${h.name} animated background`,onClick:()=>n({background:{kind:"animate\
d",id:h.id}})},h.id))}),u.jsx("h4",{className:"ft-subhead",children:"Photos"}),u.jsx("div",{className:"ft-bggrid",children:wm.
map(h=>u.jsx(bm,{id:h.id,name:h.name,active:T.kind==="builtin"&&T.id===h.id,onPick:()=>n({background:{kind:"builtin",id:h.
id}})},h.id))}),u.jsx("h4",{className:"ft-subhead",children:"Colors"}),u.jsx("div",{className:"ft-bggrid",children:pl.map(
h=>u.jsx("button",{type:"button",className:`ft-bgswatch ${T.kind==="gradient"&&T.id===h.id?"is-active":""}`,style:{backgroundImage:h.
css},"aria-label":h.name,onClick:()=>n({background:{kind:"gradient",id:h.id}})},h.id))}),u.jsxs("div",{className:"ft-fie\
ld is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"Pinterest, image or video link"}),u.jsx("spa\
n",{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image lin\
k (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match it\
s own shape, never stretched. Saved links reload each visit. When a direct image load is blocked, the link you paste is \
fetched through a public image relay (weserv.nl), so never use private boards or private URLs."}),u.jsxs("span",{className:"\
ft-inrow",children:[u.jsx("input",{className:"ft-textinput",value:d,placeholder:"https://www.pinterest.com/pin/…",onChange:h=>p(
h.target.value),inputMode:"url"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:B,children:"Use \
link"})]}),u.jsxs("span",{className:"ft-inrow",children:[u.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:[
"Upload image or video",u.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload background image or vid\
eo file",className:"ft-fileinput",onChange:h=>{var re;return c((re=h.target.files)==null?void 0:re[0])}})]}),u.jsx("span",
{className:"ft-field-hint",children:"Lasts until the tab reloads."})]}),r?u.jsx("span",{className:"ft-field-hint",children:r}):
null]}),u.jsxs("div",{className:"ft-field",children:[u.jsx("span",{className:"ft-field-label",children:"Darken backgroun\
d"}),u.jsx("input",{type:"range",min:.15,max:.85,step:.05,value:t.scrim,"aria-label":"Background darkness",onChange:h=>n(
{scrim:parseFloat(h.target.value)})})]})]}),u.jsxs("div",{className:"ft-field",children:[u.jsx("span",{className:"ft-fie\
ld-label",children:"Start over"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:w,children:"Rese\
t settings"})]}),u.jsxs("p",{className:"ft-field-hint",children:["Your settings, tasks and stats stay in this browser. L\
ink backgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay when a direct load is\
 blocked; Spotify playback happens inside Spotify's official player; selected catalog videos stream from Pixabay's CDN. ",
I]})]})});function Qm(){return typeof window<"u"&&/[?&]popout=1/.test(window.location.search)?u.jsx(Wm,{}):u.jsx(Km,{})}
function Km(){var Vs;const[e,t,n]=Jr("ft-settings.v2",Fi),[r,l,i]=Jr("ft-tasks.v1",{tasks:[],activeId:null}),[o,s,a]=Jr(
"ft-stats.v1",{days:{}}),[c,v,y]=Jr("ft-session.v1",null),m=S.useMemo(()=>({focus:e.focusMin*6e4,short:e.shortMin*6e4,long:e.
longMin*6e4}),[e.focusMin,e.shortMin,e.longMin]),[k,g]=S.useState("focus"),[w,I]=S.useState(!1),[f,d]=S.useState(m.focus),
[p,x]=S.useState(0),[_,j]=S.useState("none"),[M,L]=S.useState(!1),A=S.useRef(0),T=S.useRef(!1);T.current=w;const B=S.useRef(
k);B.current=k;const we=S.useRef(f);we.current=f;const Ye=S.useRef(e.accent);Ye.current=e.accent;const[h,re]=S.useState(
null),[pt,In]=S.useState(null),[P,O]=S.useState(null),[D,b]=S.useState(""),[Z,At]=S.useState(null),[nt,ze]=S.useState(""),
J=S.useRef(null),Ie=S.useRef(null),Pr=S.useRef(null),Ms=S.useCallback(async C=>{b("Loading background…");try{const N=C.
trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(N)&&!/pin(it)?\./i.test(N))return re(F=>(F&&F.url.startsWith("blob:")&&URL.
revokeObjectURL(F.url),{url:N,kind:"video"})),b("Background applied."),!0;const z=await Tm(C);return z.type.startsWith("\
video/")?re(F=>(F&&F.url.startsWith("blob:")&&URL.revokeObjectURL(F.url),{url:URL.createObjectURL(z),kind:"video"})):re(
F=>(F&&F.url.startsWith("blob:")&&URL.revokeObjectURL(F.url),{url:URL.createObjectURL(z),kind:"image"})),b("Background a\
pplied."),!0}catch(N){const z=N instanceof Error&&N.message==="short pin link"?"Short pin.it links cannot be resolved he\
re. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous background is unchanged.":"Cou\
ld not load that pin or link. Private or deleted pins cannot be read. Use a public pin link, a direct image link, or upl\
oad the image below. Your previous background is unchanged.";return b(z),!1}},[]),Ps=S.useCallback(async C=>{ze("Loading\
 sound…");try{const N=await To(C);if(!/^audio\//.test(N.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.test(C))throw new Error(
"not audio");return At(z=>(z&&URL.revokeObjectURL(z),URL.createObjectURL(N))),ze("Sound saved. It will ring when a sessi\
on ends."),!0}catch{return ze("That link blocks cross-site loading. Download the sound to your device and upload it inst\
ead. Your previous sound is unchanged."),!1}},[]),ti=S.useRef(""),ni=S.useRef("");S.useEffect(()=>{n.ready&&e.background.
kind==="link"&&e.background.source&&e.background.source!==ti.current&&(ti.current=e.background.source,Ms(e.background.source))},
[n.ready,e.background]),S.useEffect(()=>{var N;if(!n.ready)return;const C=((N=e.customAlarm)==null?void 0:N.source)||"";
e.alarmSound==="custom"&&C&&C!==ni.current&&(ni.current=C,Ps(C))},[n.ready,e.alarmSound,e.customAlarm]);const Rs=S.useRef(
!1);S.useEffect(()=>{var C;!n.ready||Rs.current||(Rs.current=!0,e.background.kind==="upload"&&(xe({background:{kind:"gra\
dient",id:"dusk"}}),b("Your uploaded image resets when the tab reloads. Upload it again, or save a link instead.")),!((C=
e.customAlarm)!=null&&C.source)&&e.alarmSound==="custom"&&(xe({alarmSound:"bell"}),ze("Your uploaded sound resets when t\
he tab reloads. Upload it again, or save a link instead.")))},[n.ready]),S.useEffect(()=>{n.ready&&(!e.accent||!e.font||
!e.clockStyle||!e.clockSize||typeof e.showDots!="boolean"||typeof e.spotifyOpen!="boolean"||e.spotify===void 0||typeof e.
bgAnimate!="boolean")&&t(C=>({...Fi,...C}))},[n.ready]);const mt=e.background;S.useEffect(()=>{let C=!0;if(n.ready){if(mt.
kind==="builtin"){const N=mt.id&&qa[mt.id]?mt.id:"rain";Oi[N]?O(Oi[N]):(O(null),qa[N]().then(z=>{Oi[N]=z.default,C&&O(z.
default)}).catch(()=>{}))}return()=>{C=!1}}},[n.ready,mt.kind,mt.id]);const Ls=S.useRef(!1),Ge=S.useCallback(C=>{y.ready&&
v({phase:C.phase,running:C.running,endAt:C.endAt||0,remainingMs:C.remainingMs,cycleCount:C.cycleCount})},[y.ready]);S.useEffect(
()=>{if(!y.ready||Ls.current||(Ls.current=!0,!c))return;const C=c.phase==="short"||c.phase==="long"?c.phase:"focus";if(g(
C),x(c.cycleCount||0),c.running&&c.endAt>Date.now()+500)A.current=c.endAt,d(c.endAt-Date.now()),I(!0);else if(c.running)
d(he.current[C]),I(!1);else{const N=typeof c.remainingMs=="number"&&c.remainingMs>0?Math.min(c.remainingMs,he.current[C]):
he.current[C];d(N),I(!1)}},[y.ready]);const en=S.useRef({}),he=S.useRef(m);he.current=m;const Ts=S.useCallback(C=>{const N=B.
current;let z="focus",F=p;if(N==="focus"){if(F=C?p:p+1,x(F),z=F%Math.max(1,e.longEvery)===0&&F>0?"long":"short",!C){const zr=Kn(),
Bs=o.days[zr]||{focusSec:0,sessions:0};s({days:{...o.days,[zr]:{focusSec:Bs.focusSec+Math.round(he.current.focus/1e3),sessions:Bs.
sessions+1}}}),r.activeId&&l(si=>({...si,tasks:si.tasks.map(Ir=>Ir.id===si.activeId?{...Ir,done:Ir.done+1}:Ir)}))}}else z=
"focus";if(e.alarmSound==="custom"&&J.current)try{J.current.currentTime=0,J.current.volume=e.alarmVolume,J.current.play().
catch(()=>Qn("bell",e.alarmVolume,e.alarmRepeat))}catch{Qn("bell",e.alarmVolume,e.alarmRepeat)}else e.alarmSound==="cust\
om"?Qn("bell",e.alarmVolume,e.alarmRepeat):Qn(e.alarmSound,e.alarmVolume,e.alarmRepeat);if(e.notifications&&typeof Notification<
"u"&&Notification.permission==="granted")try{new Notification(`${yt[N]} finished`,{body:z==="focus"?"Time to focus.":`Ti\
me for a ${yt[z].toLowerCase()}.`})}catch{}delete en.current[N],g(z),d(he.current[z]);const q=z==="focus"?e.autoFocus:e.
autoBreaks;q?(A.current=Date.now()+he.current[z],I(!0)):I(!1),Ge({phase:z,running:q,endAt:q?Date.now()+he.current[z]:0,remainingMs:he.
current[z],cycleCount:F})},[p,e,o,s,l,Ge]),Rr=S.useRef(Ts);Rr.current=Ts,S.useEffect(()=>{if(!w)return;const C=window.setInterval(
()=>{const N=A.current-Date.now();N<=0?Rr.current(!1):d(z=>Math.ceil(z/1e3)!==Math.ceil(N/1e3)?N:z)},250);return()=>window.
clearInterval(C)},[w]),S.useEffect(()=>{T.current||(delete en.current[B.current],d(m[B.current]))},[m]);const zs=S.useRef(
0);S.useEffect(()=>{if(!w||!e.tick)return;const C=window.setInterval(()=>{const N=Math.ceil((A.current-Date.now())/1e3);
N!==zs.current&&(zs.current=N,jm(e.alarmVolume))},250);return()=>window.clearInterval(C)},[w,e.tick,e.alarmVolume]),S.useEffect(
()=>{document.title=`${ln(f)} - ${yt[k]} - Study focus timer`},[f,k]),S.useEffect(()=>(Ie.current&&(Ie.current(),Ie.current=
null),e.ambient!=="none"&&(Ie.current=Rm(e.ambient,e.ambientVolume)),()=>{Ie.current&&(Ie.current(),Ie.current=null)}),[
e.ambient,e.ambientVolume]),S.useEffect(()=>{if(!e.keepAwake||!("wakeLock"in navigator))return;let C=!1;const N=()=>{navigator.
wakeLock.request("screen").then(F=>{C||(Pr.current=F)}).catch(()=>{})};N();const z=()=>{document.visibilityState==="visi\
ble"&&N()};return document.addEventListener("visibilitychange",z),()=>{if(C=!0,document.removeEventListener("visibilityc\
hange",z),Pr.current){try{Pr.current.release()}catch{}Pr.current=null}}},[e.keepAwake]),S.useEffect(()=>{Z?(J.current=new Audio(
Z),J.current.preload="auto"):J.current=null},[Z]);const Is=S.useRef(()=>{}),Os=S.useRef(()=>{}),Ds=S.useRef(()=>{}),tn=S.
useCallback(()=>{if(ei(),J.current)try{J.current.pause(),J.current.currentTime=0}catch{}A.current=Date.now()+we.current,
I(!0),Ge({phase:B.current,running:!0,endAt:A.current,remainingMs:we.current,cycleCount:p})},[Ge,p]),nn=S.useCallback(()=>{
I(!1),Ge({phase:B.current,running:!1,remainingMs:we.current,cycleCount:p})},[Ge,p]),On=S.useCallback(()=>{delete en.current[B.
current],I(!1),d(he.current[B.current]),Ge({phase:B.current,running:!1,remainingMs:he.current[B.current],cycleCount:p})},
[Ge,p]),Lr=S.useCallback(()=>{Rr.current(!0)},[]);Is.current=tn,Os.current=nn,Ds.current=On;const Dn=S.useCallback(C=>{const N=B.
current;if(C===N)return;const z=T.current?Math.max(0,A.current-Date.now()):we.current;z>0&&z<he.current[N]?en.current[N]=
z:delete en.current[N];const F=en.current[C],q=typeof F=="number"&&F>0?Math.min(F,he.current[C]):he.current[C];I(!1),g(C),
d(q),Ge({phase:C,running:!1,remainingMs:q,cycleCount:p})},[Ge,p]),ri=S.useCallback(()=>{document.fullscreenElement?document.
exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]),[Fs,As]=S.useState(null),
Ed=S.useCallback(()=>{const C=window.documentPictureInPicture;if(C!=null&&C.requestWindow){C.requestWindow({width:320,height:200}).
then(N=>{for(const z of Array.from(document.styleSheets))try{const F=Array.from(z.cssRules||[]).map(zr=>zr.cssText).join(
`
`),q=N.document.createElement("style");q.textContent=F,N.document.head.appendChild(q)}catch{const F=z.href;if(F){const q=N.
document.createElement("link");q.rel="stylesheet",q.href=F,N.document.head.appendChild(q)}}N.document.body.className="ft\
-pip-body",N.addEventListener("pagehide",()=>As(null)),As(N)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);S.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const C=new BroadcastChannel(
"sft-sync"),N=()=>C.postMessage({t:"state",phase:B.current,remaining:we.current,running:T.current,dur:he.current[B.current],
accent:Ye.current,at:Date.now()});N();const z=window.setInterval(N,1e3);return C.onmessage=F=>{const q=F.data;(q==null?void 0:
q.t)==="cmd"&&(q.cmd==="toggle"?T.current?Os.current():Is.current():q.cmd==="reset"?Ds.current():q.cmd==="skip"&&Rr.current(
!0))},()=>{window.clearInterval(z),C.close()}},[]);const jd=S.useCallback(()=>{j("none"),L(!0)},[]),_d=_==="tasks",Md=_===
"settings",Pd=S.useCallback(()=>j(C=>C==="tasks"?"none":"tasks"),[]),Rd=S.useCallback(()=>j(C=>C==="settings"?"none":"se\
ttings"),[]);S.useEffect(()=>{const C=N=>{var F;const z=(F=N.target)==null?void 0:F.tagName;z==="INPUT"||z==="TEXTAREA"||
z==="SELECT"||(N.code==="Space"?(N.preventDefault(),T.current?nn():tn()):N.key==="r"||N.key==="R"?On():N.key==="s"||N.key===
"S"?Lr():N.key==="1"?Dn("focus"):N.key==="2"?Dn("short"):N.key==="3"?Dn("long"):N.key==="m"||N.key==="M"?L(q=>!q):(N.key===
"f"||N.key==="F")&&ri())};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[tn,nn,
On,Lr,Dn,ri]);const xe=S.useCallback(C=>t(N=>({...N,...C})),[t]),Ld=S.useCallback(C=>{if(!C)return;const N=C.type.startsWith(
"video/");if(!N&&!C.type.startsWith("image/")){b("That file is not an image or video.");return}In(z=>(z&&URL.revokeObjectURL(
z.url),{url:URL.createObjectURL(C),kind:N?"video":"image"})),xe({background:{kind:"upload"}}),b("Background applied for \
this visit. Use a link to keep it across visits.")},[xe]),Td=S.useCallback(C=>{if(C){if(!C.type.startsWith("audio/")){ze(
"That file is not an audio file.");return}At(N=>(N&&URL.revokeObjectURL(N),URL.createObjectURL(C))),xe({alarmSound:"cust\
om",customAlarm:{source:"",name:C.name}}),ze(`Using "${C.name}" for this visit. Use a link to keep it across visits.`)}},
[xe]),zd=S.useCallback(C=>{var N;if(C==="custom"){if(J.current)try{J.current.currentTime=0,J.current.volume=e.alarmVolume,
J.current.play().catch(()=>ze("Your browser blocked playback before the first tap. Press Start once, then preview again."))}catch{}else
ze((N=e.customAlarm)!=null&&N.source?"Still loading your sound.":"Add a link or upload a file first.");return}Qn(C,e.alarmVolume,
!1)},[e.alarmVolume,e.customAlarm]),Id=S.useCallback(C=>{if(!C){xe({notifications:!1});return}if(!(typeof Notification>"\
u"))try{const N=Notification.requestPermission();N&&typeof N.then=="function"?N.then(z=>xe({notifications:z==="granted"})).
catch(()=>xe({notifications:!1})):xe({notifications:Notification.permission==="granted"})}catch{xe({notifications:!1})}},
[xe]),Od=S.useCallback(()=>t(Fi),[t]),Dd=S.useMemo(()=>({focusSec:0,sessions:0}),[]),Tr=o.days[Kn()]||Dd,li=S.useMemo(()=>{
var z,F;let C=0;const N=new Date;for(((z=o.days[Kn(N)])==null?void 0:z.sessions)>0||N.setDate(N.getDate()-1);((F=o.days[Kn(
N)])==null?void 0:F.sessions)>0;)C++,N.setDate(N.getDate()-1);return C},[o.days]),Fd=S.useMemo(()=>{const C=[];for(let N=6;N>=
0;N--){const z=new Date;z.setDate(z.getDate()-N);const F=o.days[Kn(z)];C.push({label:`${"SMTWTFS"[z.getDay()]}`,minutes:Math.
round(((F==null?void 0:F.focusSec)||0)/60)})}return C},[o.days]),Ad=S.useMemo(()=>e.showChip?`${Tr.sessions} ${Tr.sessions===
1?"session":"sessions"} · ${Math.round(Tr.focusSec/60)} min${li>1?` · ${li}-day streak`:""}`:null,[e.showChip,Tr,li]),
$d=n.ready&&i.ready&&a.ready,Ud=((Vs=wd.find(C=>C.id===e.font))==null?void 0:Vs.css)||"inherit",ii=1-f/Math.max(1,m[k]),
oi=118,$s=2*Math.PI*oi,bd=typeof Notification<"u",Vd=typeof navigator<"u"&&"wakeLock"in navigator,Bd=typeof document<"u"&&
document.fullscreenEnabled,Us=r.tasks.find(C=>C.id===r.activeId)||null,bs=e.spotify?Cd(e.spotify):null;return u.jsxs("di\
v",{className:`ft-root ${M?"is-compact":""}`,style:{"--ft-accent":e.accent,"--ft-font":Ud},children:[u.jsx($m,{kind:mt.kind,
id:mt.id,scrim:e.scrim,builtinSrc:P,linkBg:h,uploadBg:pt,paused:M,animate:e.bgAnimate!==!1}),u.jsx(Vm,{chip:Ad,panel:_,fullscreenSupported:Bd,
onFullscreen:ri,onTasks:Pd,onSettings:Rd,onMinimize:jd,onPopout:Ed}),u.jsxs("main",{className:"ft-center",children:[u.jsx(
"nav",{className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(C=>u.jsx("button",{type:"but\
ton",className:`ft-mode ${k===C?"is-active":""}`,onClick:()=>Dn(C),children:yt[C]},C))}),e.showDots?u.jsx("div",{className:"\
ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,e.longEvery)}).map((C,N)=>u.jsx("span",{className:`\
ft-dot ${N<p%Math.max(1,e.longEvery)||p>0&&p%Math.max(1,e.longEvery)===0&&k!=="focus"?"is-done":""}`},N))}):null,u.jsxs(
"div",{className:`ft-clock is-${e.clockSize}`,role:"timer","aria-live":"off","aria-label":`${yt[k]} timer, ${ln(f)} rema\
ining`,children:[e.clockStyle==="ring"?u.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-hidden":"true",children:[
u.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:oi}),u.jsx("circle",{className:"ft-ring-fill",cx:"130",cy:"\
130",r:oi,strokeDasharray:$s,strokeDashoffset:$s*(1-ii)})]}):null,u.jsxs("div",{className:"ft-time-wrap",children:[u.jsx(
"div",{className:"ft-time",children:ln(f)}),u.jsx("div",{className:"ft-taskline",children:Us?Us.title:k==="focus"?"Pick \
a task or just focus":"Rest up"})]})]}),e.clockStyle==="bar"?u.jsx("div",{className:"ft-progressbar","aria-hidden":"true",
children:u.jsx("span",{style:{width:`${Math.round(ii*100)}%`}})}):null,u.jsxs("div",{className:"ft-controls",children:[u.
jsx("button",{type:"button",className:"ft-primary",onClick:()=>w?nn():tn(),children:w?"Pause":f<m[k]?"Resume":"Start"}),
u.jsx("button",{type:"button",className:"ft-ghost",onClick:On,children:"Reset"}),u.jsx("button",{type:"button",className:"\
ft-ghost",onClick:Lr,children:"Skip"})]}),e.showHint?u.jsx("p",{className:"ft-hint",children:"Space start or pause · R r\
eset · S skip · M minimize · F fullscreen"}):null]}),M?u.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-l\
abel":"Minimized timer",children:[u.jsx("span",{className:"ft-compactphase",children:yt[k]}),u.jsx("span",{className:"ft\
-compacttime",children:ln(f)}),u.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":w?"Pause":"Start",onClick:()=>w?
nn():tn(),children:w?"❚❚":"▶"}),u.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",
onClick:()=>L(!1),children:"⤢"})]}):null,_d?u.jsx(Bm,{tasksState:r,setTasksState:l,week:Fd,ready:$d,savedMessage:i.message||
a.message||"",onClose:()=>j("none")}):null,Md?u.jsx(Hm,{settings:e,patch:xe,bgStatus:D,soundStatus:nt,lastBgSrcRef:ti,lastSndSrcRef:ni,
resolveLinkBg:Ms,resolveCustomSound:Ps,uploadBg:Ld,uploadSound:Td,previewAlarm:zd,requestNotifications:Id,notificationsSupported:bd,
wakeLockSupported:Vd,onResetSettings:Od,savedMessage:n.message||"",onClose:()=>j("none")}):null,Fs?md.createPortal(u.jsxs(
"div",{className:"ft-pip",children:[u.jsx("div",{className:"ft-pip-phase",children:yt[k]}),u.jsx("div",{className:"ft-pi\
p-time",children:ln(f)}),u.jsx("div",{className:"ft-pip-bar","aria-hidden":"true",children:u.jsx("span",{style:{width:`${Math.
round(ii*100)}%`}})}),u.jsxs("div",{className:"ft-pip-btns",children:[u.jsx("button",{type:"button",className:"ft-primar\
y is-compact",onClick:()=>w?nn():tn(),children:w?"Pause":"Start"}),u.jsx("button",{type:"button",className:"ft-ghost is-\
compact",onClick:On,children:"Reset"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:Lr,children:"\
Skip"})]})]}),Fs.document.body):null,bs?u.jsxs("div",{className:`ft-spotify ${e.spotifyOpen?"is-open":""}`,children:[u.jsx(
"div",{className:"ft-spotify-frame","aria-hidden":!e.spotifyOpen,children:u.jsx("iframe",{src:bs,width:"100%",height:"15\
2",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"\
Spotify player"})}),u.jsx("button",{type:"button",className:"ft-spotify-toggle","aria-expanded":e.spotifyOpen,onClick:()=>xe(
{spotifyOpen:!e.spotifyOpen}),children:e.spotifyOpen?"Hide player":"♫ Music"})]}):null]})}hd(document.getElementById("\
root")).render(u.jsx(Qm,{}));
