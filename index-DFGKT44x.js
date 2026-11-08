(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.
querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.
addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){
const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin===
"use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}
function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Hd(e){return e&&e.__esModule&&Object.prototype.
hasOwnProperty.call(e,"default")?e.default:e}var nu={exports:{}},Di={},ru={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Symbol.for("react.element"),Qd=Symbol.for("react.portal"),Kd=Symbol.for("react.fragment"),Gd=Symbol.for("react\
.strict_mode"),Yd=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),Jd=Symbol.
for("react.forward_ref"),qd=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),Wa=Symbol.
iterator;function nf(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}
var iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},
lu=Object.assign,ou={};function Ln(e,t,n){this.props=e,this.context=t,this.refs=ou,this.updater=n||iu}Ln.prototype.isReactComponent=
{};Ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): \
takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(
this,e,t,"setState")};Ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function au(){}
au.prototype=Ln.prototype;function To(e,t,n){this.props=e,this.context=t,this.refs=ou,this.updater=n||iu}var bo=To.prototype=
new au;bo.constructor=To;lu(bo,Ln.prototype);bo.isPureReactComponent=!0;var Ha=Array.isArray,su=Object.prototype.hasOwnProperty,
zo={current:null},uu={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.
ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)su.call(t,r)&&!uu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.
length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)
for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cr,type:e,key:l,ref:o,props:i,_owner:zo.current}}
function rf(e,t){return{$$typeof:Cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Io(e){return typeof e==
"object"&&e!==null&&e.$$typeof===Cr}function lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}
var Qa=/\/+/g;function sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lf(""+e.key):t.toString(36)}function ti(e,t,n,r,i){
var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"num\
ber":o=!0;break;case"object":switch(e.$$typeof){case Cr:case Qd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+sl(o,0):r,Ha(i)?
(n="",e!=null&&(n=e.replace(Qa,"$&/")+"/"),ti(i,t,n,"",function(c){return c})):i!=null&&(Io(i)&&(i=rf(i,n+(!i.key||o&&o.
key===i.key?"":(""+i.key).replace(Qa,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ha(e))for(var a=0;a<e.length;a++){
l=e[a];var s=r+sl(l,a);o+=ti(l,t,n,s,i)}else if(s=nf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.
value,s=r+sl(l,a++),o+=ti(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React chil\
d (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a co\
llection of children, use an array instead.");return o}function Ir(e,t,n){if(e==null)return e;var r=[],i=0;return ti(e,r,
"","",function(l){return t.call(n,l,i++)}),r}function of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){
(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e.
_result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={
current:null},ni={transition:null},af={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ni,ReactCurrentOwner:zo};function du(){
throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Ir,forEach:function(e,t,n){Ir(e,
function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ir(e,function(){t++}),t},toArray:function(e){return Ir(
e,function(t){return t})||[]},only:function(e){if(!Io(e))throw Error("React.Children.only expected to receive a single R\
eact element child.");return e}};D.Component=Ln;D.Fragment=Kd;D.Profiler=Yd;D.PureComponent=To;D.StrictMode=Gd;D.Suspense=
qd;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;D.act=du;D.cloneElement=function(e,t,n){if(e==null)throw Error(
"React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lu({},e.props),i=e.key,l=e.
ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=zo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)
var a=e.type.defaultProps;for(s in t)su.call(t,s)&&!uu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.
length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Cr,
type:e.type,key:i,ref:l,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Zd,_currentValue:e,_currentValue2:e,
_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xd,_context:e},e.Consumer=
e};D.createElement=cu;D.createFactory=function(e){var t=cu.bind(null,e);return t.type=e,t};D.createRef=function(){return{
current:null}};D.forwardRef=function(e){return{$$typeof:Jd,render:e}};D.isValidElement=Io;D.lazy=function(e){return{$$typeof:tf,
_payload:{_status:-1,_result:e},_init:of}};D.memo=function(e,t){return{$$typeof:ef,type:e,compare:t===void 0?null:t}};D.
startTransition=function(e){var t=ni.transition;ni.transition={};try{e()}finally{ni.transition=t}};D.unstable_act=du;D.useCallback=
function(e,t){return ke.current.useCallback(e,t)};D.useContext=function(e){return ke.current.useContext(e)};D.useDebugValue=
function(){};D.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};D.useEffect=function(e,t){return ke.current.
useEffect(e,t)};D.useId=function(){return ke.current.useId()};D.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(
e,t,n)};D.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ke.
current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ke.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ke.
current.useReducer(e,t,n)};D.useRef=function(e){return ke.current.useRef(e)};D.useState=function(e){return ke.current.useState(
e)};D.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ke.
current.useTransition()};D.version="18.3.1";ru.exports=D;var x=ru.exports;const zt=Hd(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=x,uf=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,ff=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.
ReactCurrentOwner,mf={key:!0,ref:!0,__self:!0,__source:!0};function fu(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+
n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)df.call(t,r)&&!mf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&
e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:uf,type:e,key:l,ref:o,props:i,_owner:ff.
current}}Di.Fragment=cf;Di.jsx=fu;Di.jsxs=fu;nu.exports=Di;var u=nu.exports,mu={exports:{}},Te={},pu={exports:{}},hu={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,I){var O=L.length;L.push(I);e:for(;0<O;){var B=O-1>>>1,q=L[B];if(0<i(q,I))L[B]=I,L[O]=q,O=B;else
break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var I=L[0],O=L.pop();if(O!==
I){L[0]=O;e:for(var B=0,q=L.length,Dt=q>>>1;B<Dt;){var nt=2*(B+1)-1,ze=L[nt],ee=nt+1,Ie=L[ee];if(0>i(ze,O))ee<q&&0>i(Ie,
ze)?(L[B]=Ie,L[ee]=O,B=ee):(L[B]=ze,L[nt]=O,B=nt);else if(ee<q&&0>i(Ie,O))L[B]=Ie,L[ee]=O,B=ee;else break e}}return I}function i(L,I){
var O=L.sortIndex-I.sortIndex;return O!==0?O:L.id-I.id}if(typeof performance=="object"&&typeof performance.now=="functio\
n"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.
now()-a}}var s=[],c=[],y=1,p=null,g=3,S=!1,v=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout==
"function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&
navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){
for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=L)r(c),I.sortIndex=I.expirationTime,t(s,I);else
break;I=n(c)}}function k(L){if(w=!1,m(L),!v)if(n(s)!==null)v=!0,mt(R);else{var I=n(c);I!==null&&zn(k,I.startTime-L)}}function R(L,I){
v=!1,w&&(w=!1,f(j),j=-1),S=!0;var O=g;try{for(m(I),p=n(s);p!==null&&(!(p.expirationTime>I)||L&&!U());){var B=p.callback;
if(typeof B=="function"){p.callback=null,g=p.priorityLevel;var q=B(p.expirationTime<=I);I=e.unstable_now(),typeof q=="fu\
nction"?p.callback=q:p===n(s)&&r(s),m(I)}else r(s);p=n(s)}if(p!==null)var Dt=!0;else{var nt=n(c);nt!==null&&zn(k,nt.startTime-
I),Dt=!1}return Dt}finally{p=null,g=O,S=!1}}var M=!1,P=null,j=-1,A=5,E=-1;function U(){return!(e.unstable_now()-E<A)}function ue(){
if(P!==null){var L=e.unstable_now();E=L;var I=!0;try{I=P(!0,L)}finally{I?V():(M=!1,P=null)}}else M=!1}var V;if(typeof d==
"function")V=function(){d(ue)};else if(typeof MessageChannel<"u"){var h=new MessageChannel,Q=h.port2;h.port1.onmessage=ue,
V=function(){Q.postMessage(null)}}else V=function(){z(ue,0)};function mt(L){P=L,M||(M=!0,V())}function zn(L,I){j=z(function(){
L(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=
3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=
function(){v||S||(v=!0,mt(R))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a po\
sitive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=
function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:
var I=3;break;default:I=g}var O=g;g=I;try{return L()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=
function(){},e.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=g;
g=L;try{return I()}finally{g=O}},e.unstable_scheduleCallback=function(L,I,O){var B=e.unstable_now();switch(typeof O=="ob\
ject"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,L){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;
break;case 4:q=1e4;break;default:q=5e3}return q=O+q,L={id:y++,callback:I,priorityLevel:L,startTime:O,expirationTime:q,sortIndex:-1},
O>B?(L.sortIndex=O,t(c,L),n(s)===null&&L===n(c)&&(w?(f(j),j=-1):w=!0,zn(k,O-B))):(L.sortIndex=q,t(s,L),v||S||(v=!0,mt(R))),
L},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(L){var I=g;return function(){var O=g;g=I;try{return L.apply(
this,arguments)}finally{g=O}}}})(hu);pu.exports=hu;var pf=pu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=x,Le=pf;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)
t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or u\
se the non-minified dev environment for full errors and additional helpful warnings."}var gu=new Set,ar={};function Jt(e,t){
Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(ar[e]=t,e=0;e<t.length;e++)gu.add(t[e])}var st=!(typeof window>"u"||typeof window.
document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
Ka={},Ga={};function yf(e){return Dl.call(Ga,e)?!0:Dl.call(Ka,e)?!1:gf.test(e)?Ga[e]=!0:(Ka[e]=!0,!1)}function vf(e,t,n,r){
if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?
!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wf(e,t,n,r){if(t===
null||typeof t>"u"||vf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:
return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,
this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,
this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressConte\
ntEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new xe(e,0,!1,e,null,!1,!1)});[["\
acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){
var t=e[0];fe[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){
fe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].
forEach(function(e){fe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer\
 disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline \
readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new xe(e,3,!1,e.toLowerCase(),
null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new xe(e,3,!0,e,null,!1,!1)});["captur\
e","download"].forEach(function(e){fe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){
fe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,
!1)});var Oo=/[\-:]([a-z])/g;function Fo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form base\
line-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering \
dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adj\
ust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical \
horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-pos\
ition overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity st\
rikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-mi\
terlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness u\
nicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert\
-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oo,
Fo);fe[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(
" ").forEach(function(e){var t=e.replace(Oo,Fo);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base",
"xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oo,Fo);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/nam\
espace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=
new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(
function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Do(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;
(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wf(t,n,i,r)&&(n=null),r||i===null?
yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:
"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?
e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for(
"react.element"),on=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),Ao=Symbol.for("react.strict_mode"),Al=Symbol.
for("react.profiler"),yu=Symbol.for("react.provider"),vu=Symbol.for("react.context"),$o=Symbol.for("react.forward_ref"),
$l=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),Uo=Symbol.for("react.memo"),vt=Symbol.for("react.la\
zy"),wu=Symbol.for("react.offscreen"),Ya=Symbol.iterator;function Fn(e){return e===null||typeof e!="object"?null:(e=Ya&&
e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ul;function Gn(e){if(ul===void 0)try{throw Error()}catch(n){
var t=n.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||""}return`
`+ul+e}var cl=!1;function dl(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;
try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==
"object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){
r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.
stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,
a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),
s}while(1<=o&&0<=a);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gn(e):""}function kf(e){
switch(e.tag){case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return Gn("Suspense");case 19:return Gn("Suspen\
seList");case 0:case 2:case 15:return e=dl(e.type,!1),e;case 11:return e=dl(e.type.render,!1),e;case 1:return e=dl(e.type,
!0),e;default:return""}}function Vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;
if(typeof e=="string")return e;switch(e){case an:return"Fragment";case on:return"Portal";case Al:return"Profiler";case Ao:
return"StrictMode";case $l:return"Suspense";case Ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vu:
return(e.displayName||"Context")+".Consumer";case yu:return(e._context.displayName||"Context")+".Provider";case $o:var t=e.
render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uo:return t=
e.displayName||null,t!==null?t:Vl(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Vl(e(t))}catch{}}return null}
function xf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:
return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||
e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"\
Portal";case 3:return"Root";case 6:return"Text";case 16:return Vl(t);case 8:return t===Ao?"StrictMode":"Mode";case 22:return"\
Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:
return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||
null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"\
undefined":return e;case"object":return e;default:return""}}function ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===
"input"&&(t==="checkbox"||t==="radio")}function Sf(e){var t=ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.
constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="funct\
ion"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){
r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){
r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=Sf(
e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ku(e)?e.checked?
"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>
"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return J({},t,{
defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xa(e,t){var n=t.
defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState=
{initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Su(e,t){
t=t.checked,t!=null&&Do(e,"checked",t,!1)}function Wl(e,t){Su(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===
0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute(
"value");return}t.hasOwnProperty("value")?Hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hl(e,t.type,Tt(t.defaultValue)),
t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Za(e,t,n){if(t.hasOwnProperty("v\
alue")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))
return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=
!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hl(e,t,n){(t!=="number"||pi(e.ownerDocument)!==e)&&(n==null?
e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function vn(e,t,n,r){
if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),
e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].
value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=
!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return J({},t,{value:void 0,defaultValue:void 0,
children:""+e._wrapperState.initialValue})}function Ja(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=
null){if(t!=null)throw Error(N(92));if(Yn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState=
{initialValue:Tt(n)}}function _u(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.
defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qa(e){var t=e.textContent;
t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cu(e){switch(e){case"svg":return"http://www.w3.\
org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){
return e==null||e==="http://www.w3.org/1999/xhtml"?Cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://w\
ww.w3.org/1999/xhtml":e}var Dr,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.
execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||
"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+
"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){
if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,
aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,
columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,
gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,
lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_f=["Webkit",
"ms","Moz","O"];Object.keys(Jn).forEach(function(e){_f.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),
Jn[t]=Jn[e]})});function ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(
e)&&Jn[e]?(""+t).trim():t+"px"}function Eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===
0,i=ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cf=J({menuitem:!0},{area:!0,base:!0,br:!0,
col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){
if(Cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){
if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))
throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Yl(e,t){if(e.indexOf("-")===-1)
return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"\
font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function Vo(e){
return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:
e}var Zl=null,wn=null,kn=null;function es(e){if(e=Er(e)){if(typeof Zl!="function")throw Error(N(280));var t=e.stateNode;
t&&(t=Bi(t),Zl(e.stateNode,e.type,t))}}function Ru(e){wn?kn?kn.push(e):kn=[e]:wn=e}function Mu(){if(wn){var e=wn,t=kn;if(kn=
wn=null,es(e),t)for(e=0;e<t.length;e++)es(t[e])}}function Pu(e,t){return e(t)}function Lu(){}var fl=!1;function Tu(e,t,n){
if(fl)return e(t,n);fl=!0;try{return Pu(e,t,n)}finally{fl=!1,(wn!==null||kn!==null)&&(Lu(),Mu())}}function ur(e,t){var n=e.
stateNode;if(n===null)return null;var r=Bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCaptu\
re":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onM\
ouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||
e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(
N(231,t,typeof n));return n}var Jl=!1;if(st)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Jl=!0}}),window.
addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Jl=!1}function Nf(e,t,n,r,i,l,o,a,s){var c=Array.
prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var qn=!1,hi=null,gi=!1,ql=null,jf={onError:function(e){
qn=!0,hi=e}};function Ef(e,t,n,r,i,l,o,a,s){qn=!1,hi=null,Nf.apply(jf,arguments)}function Rf(e,t,n,r,i,l,o,a,s){if(Ef.apply(
this,arguments),qn){if(qn){var c=hi;qn=!1,hi=null}else throw Error(N(198));gi||(gi=!0,ql=c)}}function qt(e){var t=e,n=e;
if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?
n:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==
null)return t.dehydrated}return null}function ts(e){if(qt(e)!==e)throw Error(N(188))}function Mf(e){var t=e.alternate;if(!t){
if(t=qt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.
alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ts(
i),e;if(l===r)return ts(i),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){
if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}
if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)
throw Error(N(188));return n.stateNode.current===n?e:t}function zu(e){return e=Mf(e),e!==null?Iu(e):null}function Iu(e){
if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Iu(e);if(t!==null)return t;e=e.sibling}return null}var Ou=Le.
unstable_scheduleCallback,ns=Le.unstable_cancelCallback,Pf=Le.unstable_shouldYield,Lf=Le.unstable_requestPaint,re=Le.unstable_now,
Tf=Le.unstable_getCurrentPriorityLevel,Bo=Le.unstable_ImmediatePriority,Fu=Le.unstable_UserBlockingPriority,yi=Le.unstable_NormalPriority,
bf=Le.unstable_LowPriority,Du=Le.unstable_IdlePriority,Ai=null,et=null;function zf(e){if(et&&typeof et.onCommitFiberRoot==
"function")try{et.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Ff,If=Math.
log,Of=Math.LN2;function Ff(e){return e>>>=0,e===0?32:31-(If(e)/Of|0)|0}var Ar=64,$r=4194304;function Xn(e){switch(e&-e){case 1:
return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:
return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:
return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var n=e.
pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xn(
a):(l&=o,l!==0&&(r=Xn(l)))}else o=n&~i,o!==0?r=Xn(o):l!==0&&(r=Xn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,
l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)
n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Df(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:
return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:
return-1;default:return-1}}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<
l;){var o=31-Ke(l),a=1<<o,s=i[o];s===-1?(!(a&n)||a&r)&&(i[o]=Df(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function eo(e){return e=
e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Au(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),
e}function ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=
0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function $f(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=
0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=
e.expirationTimes;0<n;){var i=31-Ke(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Wo(e,t){var n=e.entangledLanes|=t;for(e=
e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function $u(e){return e&=-e,1<e?4<e?e&268435455?
16:536870912:4:1}var Uu,Ho,Vu,Bu,Wu,to=!1,Ur=[],Ct=null,Nt=null,jt=null,cr=new Map,dr=new Map,kt=[],Uf="mousedown mouseu\
p touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositi\
onend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
" ");function rs(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Nt=null;break;case"\
mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointerc\
apture":case"lostpointercapture":dr.delete(t.pointerId)}}function An(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e=
{blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Er(t),t!==null&&Ho(t)),e):
(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vf(e,t,n,r,i){switch(t){case"\
focusin":return Ct=An(Ct,e,t,n,r,i),!0;case"dragenter":return Nt=An(Nt,e,t,n,r,i),!0;case"mouseover":return jt=An(jt,e,t,
n,r,i),!0;case"pointerover":var l=i.pointerId;return cr.set(l,An(cr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":
return l=i.pointerId,dr.set(l,An(dr.get(l)||null,e,t,n,r,i)),!0}return!1}function Hu(e){var t=Vt(e.target);if(t!==null){
var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=bu(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){Vu(n)});return}}else if(t===
3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=
null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=no(e.domEventName,e.eventSystemFlags,
t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xl=r,n.target.dispatchEvent(r),Xl=null}else
return t=Er(n),t!==null&&Ho(t),e.blockedOn=n,!1;t.shift()}return!0}function is(e,t,n){ri(e)&&n.delete(t)}function Bf(){to=
!1,Ct!==null&&ri(Ct)&&(Ct=null),Nt!==null&&ri(Nt)&&(Nt=null),jt!==null&&ri(jt)&&(jt=null),cr.forEach(is),dr.forEach(is)}
function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Bf)))}
function fr(e){function t(i){return $n(i,e)}if(0<Ur.length){$n(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===
e&&(r.blockedOn=null)}}for(Ct!==null&&$n(Ct,e),Nt!==null&&$n(Nt,e),jt!==null&&$n(jt,e),cr.forEach(t),dr.forEach(t),n=0;n<
kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)Hu(n),n.blockedOn===
null&&kt.shift()}var xn=ft.ReactCurrentBatchConfig,wi=!0;function Wf(e,t,n,r){var i=W,l=xn.transition;xn.transition=null;
try{W=1,Qo(e,t,n,r)}finally{W=i,xn.transition=l}}function Hf(e,t,n,r){var i=W,l=xn.transition;xn.transition=null;try{W=4,
Qo(e,t,n,r)}finally{W=i,xn.transition=l}}function Qo(e,t,n,r){if(wi){var i=no(e,t,n,r);if(i===null)_l(e,t,r,ki,n),rs(e,r);else if(Vf(
i,e,t,n,r))r.stopPropagation();else if(rs(e,r),t&4&&-1<Uf.indexOf(e)){for(;i!==null;){var l=Er(i);if(l!==null&&Uu(l),l=no(
e,t,n,r),l===null&&_l(e,t,r,ki,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else _l(e,t,r,null,n)}}var ki=null;function no(e,t,n,r){
if(ki=null,e=Vo(r),e=Vt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bu(t),e!==null)return e;e=null}else if(n===
3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&
(e=null);return ki=e,null}function Qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"\
cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"\
invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"\
pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"\
touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"\
compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"b\
lur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"dra\
g":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"poi\
ntermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"\
mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tf()){case Bo:return 1;case Fu:return 4;case yi:case bf:
return 16;case Du:return 536870912;default:return 16}default:return 16}}var St=null,Ko=null,ii=null;function Ku(){if(ii)
return ii;var e,t=Ko,n=t.length,r,i="value"in St?St.value:St.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-
e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return ii=i.slice(e,1<r?1-r:void 0)}function li(e){var t=e.keyCode;return"charCode"in
e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function ls(){return!1}
function be(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.
currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=
null?l.defaultPrevented:l.returnValue===!1)?Vr:ls,this.isPropagationStopped=ls,this}return J(t.prototype,{preventDefault:function(){
this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&
(n.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?
n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},
isPersistent:Vr}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,
isTrusted:0},Go=be(Tn),jr=J({},Tn,{view:0,detail:0}),Qf=be(jr),pl,hl,Un,$i=J({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,
pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yo,button:0,buttons:0,relatedTarget:function(e){
return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){
return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(pl=e.screenX-Un.screenX,hl=e.screenY-Un.screenY):hl=
pl=0,Un=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:hl}}),os=be($i),Kf=J({},$i,{dataTransfer:0}),Gf=be(
Kf),Yf=J({},jr,{relatedTarget:0}),gl=be(Yf),Xf=J({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zf=be(Xf),Jf=J({},
Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qf=be(Jf),em=J({},Tn,{data:0}),
as=be(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"\
OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",
12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageD\
own",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"\
F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"Scro\
llLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;
return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function Yo(){return im}var lm=J({},jr,{key:function(e){
if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.
fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,
altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yo,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){
return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="ke\
ydown"||e.type==="keyup"?e.keyCode:0}}),om=be(lm),am=J({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,
tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=be(am),sm=J({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,
metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yo}),um=be(sm),cm=J({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),
dm=be(cm),fm=J({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=be(
fm),pm=[9,13,27,32],Xo=st&&"CompositionEvent"in window,er=null;st&&"documentMode"in document&&(er=document.documentMode);
var hm=st&&"TextEvent"in window&&!er,Gu=st&&(!Xo||er&&8<er&&11>=er),us=" ",cs=!1;function Yu(e,t){switch(e){case"keyup":
return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:
return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function gm(e,t){switch(e){case"\
compositionend":return Xu(t);case"keypress":return t.which!==32?null:(cs=!0,us);case"textInput":return e=t.data,e===us&&
cs?null:e;default:return null}}function ym(e,t){if(sn)return e==="compositionend"||!Xo&&Yu(e,t)?(e=Ku(),ii=Ko=St=null,sn=
!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.
char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gu&&
t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,
number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ds(e){var t=e&&e.nodeName&&e.nodeName.
toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Zu(e,t,n,r){Ru(r),t=xi(t,"onChange"),0<t.length&&(n=
new Go("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,mr=null;function wm(e){sc(e,0)}function Ui(e){
var t=dn(e);if(xu(t))return e}function km(e,t){if(e==="change")return t}var Ju=!1;if(st){var yl;if(st){var vl="oninput"in
document;if(!vl){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),vl=typeof fs.oninput=="functi\
on"}yl=vl}else yl=!1;Ju=yl&&(!document.documentMode||9<document.documentMode)}function ms(){tr&&(tr.detachEvent("onprope\
rtychange",qu),mr=tr=null)}function qu(e){if(e.propertyName==="value"&&Ui(mr)){var t=[];Zu(t,mr,e,Vo(e)),Tu(wm,t)}}function xm(e,t,n){
e==="focusin"?(ms(),tr=t,mr=n,tr.attachEvent("onpropertychange",qu)):e==="focusout"&&ms()}function Sm(e){if(e==="selecti\
onchange"||e==="keyup"||e==="keydown")return Ui(mr)}function _m(e,t){if(e==="click")return Ui(t)}function Cm(e,t){if(e===
"input"||e==="change")return Ui(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.
is=="function"?Object.is:Nm;function pr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===
null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dl.
call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hs(e,t){
var n=ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{
for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ps(n)}}function ec(e,t){return e&&t?e===t?!0:
e&&e.nodeType===3?!1:t&&t.nodeType===3?ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(
t)&16):!1:!1}function tc(){for(var e=window,t=pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.
href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pi(e.document)}return t}function Zo(e){var t=e&&e.nodeName&&
e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.
type==="password")||t==="textarea"||e.contentEditable==="true")}function jm(e){var t=tc(),n=e.focusedElem,r=e.selectionRange;
if(t!==n&&n&&n.ownerDocument&&ec(n.ownerDocument.documentElement,n)){if(r!==null&&Zo(n)){if(t=r.start,e=r.end,e===void 0&&
(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&
t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?
l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=hs(n,l);var o=hs(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||
e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),
e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=
n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&
n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Em=st&&"documentMode"in document&&
11>=document.documentMode,un=null,ro=null,nr=null,io=!1;function gs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?
n:n.ownerDocument;io||un==null||un!==pi(r)||(r=un,"selectionStart"in r&&Zo(r)?r={start:r.selectionStart,end:r.selectionEnd}:
(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,
focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&pr(nr,r)||(nr=r,r=xi(ro,"onSelect"),0<r.length&&(t=new Go("onSelec\
t","select",null,t,n),e.push({event:t,listeners:r}),t.target=un)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.
toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br(
"Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","Transit\
ionEnd")},wl={},nc={};st&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,
delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.
transition);function Vi(e){if(wl[e])return wl[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in
nc)return wl[e]=t[n];return e}var rc=Vi("animationend"),ic=Vi("animationiteration"),lc=Vi("animationstart"),oc=Vi("trans\
itionend"),ac=new Map,ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dra\
gEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input i\
nvalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut m\
ouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progres\
s rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange \
scroll toggle touchMove waiting wheel".split(" ");function It(e,t){ac.set(e,t),Jt(t,[e])}for(var kl=0;kl<ys.length;kl++){
var xl=ys[kl],Rm=xl.toLowerCase(),Mm=xl[0].toUpperCase()+xl.slice(1);It(Rm,"on"+Mm)}It(rc,"onAnimationEnd");It(ic,"onAni\
mationIteration");It(lc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");
It(oc,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onP\
ointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click\
 focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin k\
eydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput",
"paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onComposition\
Start","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupd\
ate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied e\
ncrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking st\
alled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("cancel close invalid load scroll toggle".split(" ").
concat(Zn));function vs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rf(r,t,void 0,e),e.currentTarget=null}function sc(e,t){
t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=
o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;vs(i,a,c),l=s}else
for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;vs(
i,a,c),l=s}}}if(gi)throw e=ql,gi=!1,ql=null,e}function K(e,t){var n=t[uo];n===void 0&&(n=t[uo]=new Set);var r=e+"__bubbl\
e";n.has(r)||(uc(t,e,2,!1),n.add(r))}function Sl(e,t,n){var r=0;t&&(r|=4),uc(n,e,r,t)}var Wr="_reactListening"+Math.random().
toString(36).slice(2);function hr(e){if(!e[Wr]){e[Wr]=!0,gu.forEach(function(n){n!=="selectionchange"&&(Pm.has(n)||Sl(n,
!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,Sl("selectionchange",!1,t))}}function uc(e,t,n,r){
switch(Qu(t)){case 1:var i=Wf;break;case 4:i=Hf;break;default:i=Qo}n=i.bind(null,t,n,e),i=void 0,!Jl||t!=="touchstart"&&
t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,
!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _l(e,t,n,r,i){var l=r;if(!(t&1)&&
!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===
8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,
s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vt(a),o===null)return;if(s=o.tag,s===5||
s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Tu(function(){var c=l,y=Vo(n),p=[];e:{var g=ac.get(e);if(g!==void 0){
var S=Go,v=e;switch(e){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":S=om;break;case"focusin":v="focus",
S=gl;break;case"focusout":v="blur",S=gl;break;case"beforeblur":case"afterblur":S=gl;break;case"click":if(n.button===2)break e;case"\
auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":
S=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"d\
rop":S=Gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=um;break;case rc:case ic:case lc:S=Zf;
break;case oc:S=dm;break;case"scroll":S=Qf;break;case"wheel":S=mm;break;case"copy":case"cut":case"paste":S=qf;break;case"\
gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"\
pointerover":case"pointerup":S=ss}var w=(t&4)!==0,z=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,m;d!==
null;){m=d;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,f!==null&&(k=ur(d,f),k!=null&&w.push(gr(d,k,m)))),z)break;d=d.
return}0<w.length&&(g=new S(g,v,null,n,y),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="point\
erover",S=e==="mouseout"||e==="pointerout",g&&n!==Xl&&(v=n.relatedTarget||n.fromElement)&&(Vt(v)||v[ut]))break e;if((S||
g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,S?(v=n.relatedTarget||n.toElement,S=c,v=v?
Vt(v):null,v!==null&&(z=qt(v),v!==z||v.tag!==5&&v.tag!==6)&&(v=null)):(S=null,v=c),S!==v)){if(w=os,k="onMouseLeave",f="o\
nMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ss,k="onPointerLeave",f="onPointerEnter",d="pointer"),z=
S==null?g:dn(S),m=v==null?g:dn(v),g=new w(k,d+"leave",S,n,y),g.target=z,g.relatedTarget=m,k=null,Vt(y)===c&&(w=new w(f,d+
"enter",v,n,y),w.target=m,w.relatedTarget=z,k=w),z=k,S&&v)t:{for(w=S,f=v,d=0,m=w;m;m=rn(m))d++;for(m=0,k=f;k;k=rn(k))m++;
for(;0<d-m;)w=rn(w),d--;for(;0<m-d;)f=rn(f),m--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=rn(w),f=rn(f)}w=
null}else w=null;S!==null&&ws(p,g,S,w,!1),v!==null&&z!==null&&ws(p,z,v,w,!0)}}e:{if(g=c?dn(c):window,S=g.nodeName&&g.nodeName.
toLowerCase(),S==="select"||S==="input"&&g.type==="file")var R=km;else if(ds(g))if(Ju)R=Cm;else{R=Sm;var M=xm}else(S=g.nodeName)&&
S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(R=_m);if(R&&(R=R(e,c))){Zu(p,R,n,y);break e}M&&M(e,
g,c),e==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Hl(g,"number",g.value)}switch(M=c?dn(c):window,
e){case"focusin":(ds(M)||M.contentEditable==="true")&&(un=M,ro=c,nr=null);break;case"focusout":nr=ro=un=null;break;case"\
mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":io=!1,gs(p,n,y);break;case"selectionchange":if(Em)break;case"\
keydown":case"keyup":gs(p,n,y)}var P;if(Xo)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"c\
ompositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else sn?Yu(
e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Gu&&n.locale!=="ko"&&(sn||j!==
"onCompositionStart"?j==="onCompositionEnd"&&sn&&(P=Ku()):(St=y,Ko="value"in St?St.value:St.textContent,sn=!0)),M=xi(c,j),
0<M.length&&(j=new as(j,e,null,n,y),p.push({event:j,listeners:M}),P?j.data=P:(P=Xu(n),P!==null&&(j.data=P)))),(P=hm?gm(e,
n):ym(e,n))&&(c=xi(c,"onBeforeInput"),0<c.length&&(y=new as("onBeforeInput","beforeinput",null,n,y),p.push({event:y,listeners:c}),
y.data=P))}sc(p,t)})}function gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capt\
ure",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ur(e,n),l!=null&&r.unshift(gr(e,l,i)),l=ur(e,t),l!=
null&&r.push(gr(e,l,i))),e=e.return}return r}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||
null}function ws(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&
s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=ur(n,l),s!=null&&o.unshift(gr(n,s,a))):i||(s=ur(n,l),s!=null&&o.push(gr(n,s,a)))),
n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Lm=/\r\n?/g,Tm=/\u0000|\uFFFD/g;function ks(e){return(typeof e==
"string"?e:""+e).replace(Lm,`
`).replace(Tm,"")}function Hr(e,t,n){if(t=ks(t),ks(e)!==t&&n)throw Error(N(425))}function Si(){}var lo=null,oo=null;function ao(e,t){
return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML==
"object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?
setTimeout:void 0,bm=typeof clearTimeout=="function"?clearTimeout:void 0,xs=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask==
"function"?queueMicrotask:typeof xs<"u"?function(e){return xs.resolve(null).then(e).catch(Im)}:so;function Im(e){setTimeout(
function(){throw e})}function Cl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,
n==="/$"){if(r===0){e.removeChild(i),fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fr(t)}function Et(e){
for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;
if(t==="/$")return null}}return e}function Ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===
"$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(
36).slice(2),qe="__reactFiber$"+bn,yr="__reactProps$"+bn,ut="__reactContainer$"+bn,uo="__reactEvents$"+bn,Om="__reactLis\
teners$"+bn,Fm="__reactHandles$"+bn;function Vt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[qe]){
if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ss(e);e!==null;){if(n=e[qe])return n;e=Ss(e)}return t}e=
n,n=e.parentNode}return null}function Er(e){return e=e[qe]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}
function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Bi(e){return e[yr]||null}var co=[],
fn=-1;function Ot(e){return{current:e}}function G(e){0>fn||(e.current=co[fn],co[fn]=null,fn--)}function H(e,t){fn++,co[fn]=
e.current,e.current=t}var bt={},ge=Ot(bt),Ne=Ot(!1),Kt=bt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.
stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},
l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=
i),i}function je(e){return e=e.childContextTypes,e!=null}function _i(){G(Ne),G(ge)}function _s(e,t,n){if(ge.current!==bt)
throw Error(N(168));H(ge,t),H(Ne,n)}function cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!=
"function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,xf(e)||"Unknown",i));return J({},
n,r)}function Ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Kt=ge.current,H(ge,e),H(Ne,
Ne.current),!0}function Cs(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=cc(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=
e,G(Ne),G(ge),H(ge,e)):G(Ne),H(Ne,n)}var it=null,Wi=!1,Nl=!1;function dc(e){it===null?it=[e]:it.push(e)}function Dm(e){Wi=
!0,dc(e)}function Ft(){if(!Nl&&it!==null){Nl=!0;var e=0,t=W;try{var n=it;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==
null)}it=null,Wi=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),Ou(Bo,Ft),i}finally{W=t,Nl=!1}}return null}var mn=[],pn=0,
Ni=null,ji=0,Oe=[],Fe=0,Gt=null,lt=1,ot="";function At(e,t){mn[pn++]=ji,mn[pn++]=Ni,Ni=e,ji=t}function fc(e,t,n){Oe[Fe++]=
lt,Oe[Fe++]=ot,Oe[Fe++]=Gt,Gt=e;var r=lt;e=ot;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var l=32-Ke(t)+i;if(30<l){var o=i-i%5;l=(r&
(1<<o)-1).toString(32),r>>=o,i-=o,lt=1<<32-Ke(t)+i|n<<i|r,ot=l+e}else lt=1<<l|n<<i|r,ot=e}function Jo(e){e.return!==null&&
(At(e,1),fc(e,1,0))}function qo(e){for(;e===Ni;)Ni=mn[--pn],mn[pn]=null,ji=mn[--pn],mn[pn]=null;for(;e===Gt;)Gt=Oe[--Fe],
Oe[Fe]=null,ot=Oe[--Fe],Oe[Fe]=null,lt=Oe[--Fe],Oe[Fe]=null}var Pe=null,Me=null,Y=!1,Qe=null;function mc(e,t){var n=De(5,
null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(
n)}function Ns(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?
null:t,t!==null?(e.stateNode=t,Pe=e,Me=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:
t,t!==null?(e.stateNode=t,Pe=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:lt,overflow:ot}:
null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=
n,Pe=e,Me=null,!0):!1;default:return!1}}function fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mo(e){if(Y){var t=Me;
if(t){var n=t;if(!Ns(e,t)){if(fo(e))throw Error(N(418));t=Et(n.nextSibling);var r=Pe;t&&Ns(e,t)?mc(r,n):(e.flags=e.flags&
-4097|2,Y=!1,Pe=e)}}else{if(fo(e))throw Error(N(418));e.flags=e.flags&-4097|2,Y=!1,Pe=e}}}function js(e){for(e=e.return;e!==
null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Qr(e){if(e!==Pe)return!1;if(!Y)return js(e),Y=!0,!1;var t;
if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ao(e.type,e.memoizedProps)),t&&(t=Me)){if(fo(e))throw pc(),
Error(N(418));for(;t;)mc(e,t),t=Et(t.nextSibling)}if(js(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,
!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Et(e.nextSibling);
break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Pe?Et(e.stateNode.nextSibling):null;return!0}
function pc(){for(var e=Me;e;)e=Et(e.nextSibling)}function jn(){Me=Pe=null,Y=!1}function ea(e){Qe===null?Qe=[e]:Qe.push(
e)}var Am=ft.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n.
_owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,l=""+e;return t!==
null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:
a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Kr(e,t){
throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+
"}":e))}function Es(e){var t=e._init;return t(e._payload)}function hc(e){function t(f,d){if(e){var m=f.deletions;m===null?
(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}
function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){
return f=Lt(f,d),f.index=0,f.sibling=null,f}function l(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?
(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,k){
return d===null||d.tag!==6?(d=Tl(m,f.mode,k),d.return=f,d):(d=i(d,m),d.return=f,d)}function s(f,d,m,k){var R=m.type;return R===
an?y(f,d,m.props.children,k,m.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===vt&&Es(R)===
d.type)?(k=i(d,m.props),k.ref=Vn(f,d,m),k.return=f,k):(k=fi(m.type,m.key,m.props,null,f.mode,k),k.ref=Vn(f,d,m),k.return=
f,k)}function c(f,d,m,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==
m.implementation?(d=bl(m,f.mode,k),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function y(f,d,m,k,R){return d===null||
d.tag!==7?(d=Qt(m,f.mode,k,R),d.return=f,d):(d=i(d,m),d.return=f,d)}function p(f,d,m){if(typeof d=="string"&&d!==""||typeof d==
"number")return d=Tl(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:return m=fi(
d.type,d.key,d.props,null,f.mode,m),m.ref=Vn(f,null,d),m.return=f,m;case on:return d=bl(d,f.mode,m),d.return=f,d;case vt:
var k=d._init;return p(f,k(d._payload),m)}if(Yn(d)||Fn(d))return d=Qt(d,f.mode,m,null),d.return=f,d;Kr(f,d)}return null}
function g(f,d,m,k){var R=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(f,
d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Or:return m.key===R?s(f,d,m,k):null;case on:return m.
key===R?c(f,d,m,k):null;case vt:return R=m._init,g(f,d,R(m._payload),k)}if(Yn(m)||Fn(m))return R!==null?null:y(f,d,m,k,null);
Kr(f,m)}return null}function S(f,d,m,k,R){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(m)||null,a(d,
f,""+k,R);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Or:return f=f.get(k.key===null?m:k.key)||null,s(d,f,k,
R);case on:return f=f.get(k.key===null?m:k.key)||null,c(d,f,k,R);case vt:var M=k._init;return S(f,d,m,M(k._payload),R)}if(Yn(
k)||Fn(k))return f=f.get(m)||null,y(d,f,k,R,null);Kr(d,k)}return null}function v(f,d,m,k){for(var R=null,M=null,P=d,j=d=
0,A=null;P!==null&&j<m.length;j++){P.index>j?(A=P,P=null):A=P.sibling;var E=g(f,P,m[j],k);if(E===null){P===null&&(P=A);break}
e&&P&&E.alternate===null&&t(f,P),d=l(E,d,j),M===null?R=E:M.sibling=E,M=E,P=A}if(j===m.length)return n(f,P),Y&&At(f,j),R;
if(P===null){for(;j<m.length;j++)P=p(f,m[j],k),P!==null&&(d=l(P,d,j),M===null?R=P:M.sibling=P,M=P);return Y&&At(f,j),R}for(P=
r(f,P);j<m.length;j++)A=S(P,f,j,m[j],k),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?j:A.key),d=l(A,d,j),M===
null?R=A:M.sibling=A,M=A);return e&&P.forEach(function(U){return t(f,U)}),Y&&At(f,j),R}function w(f,d,m,k){var R=Fn(m);if(typeof R!=
"function")throw Error(N(150));if(m=R.call(m),m==null)throw Error(N(151));for(var M=R=null,P=d,j=d=0,A=null,E=m.next();P!==
null&&!E.done;j++,E=m.next()){P.index>j?(A=P,P=null):A=P.sibling;var U=g(f,P,E.value,k);if(U===null){P===null&&(P=A);break}
e&&P&&U.alternate===null&&t(f,P),d=l(U,d,j),M===null?R=U:M.sibling=U,M=U,P=A}if(E.done)return n(f,P),Y&&At(f,j),R;if(P===
null){for(;!E.done;j++,E=m.next())E=p(f,E.value,k),E!==null&&(d=l(E,d,j),M===null?R=E:M.sibling=E,M=E);return Y&&At(f,j),
R}for(P=r(f,P);!E.done;j++,E=m.next())E=S(P,f,j,E.value,k),E!==null&&(e&&E.alternate!==null&&P.delete(E.key===null?j:E.key),
d=l(E,d,j),M===null?R=E:M.sibling=E,M=E);return e&&P.forEach(function(ue){return t(f,ue)}),Y&&At(f,j),R}function z(f,d,m,k){
if(typeof m=="object"&&m!==null&&m.type===an&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.
$$typeof){case Or:e:{for(var R=m.key,M=d;M!==null;){if(M.key===R){if(R=m.type,R===an){if(M.tag===7){n(f,M.sibling),d=i(M,
m.props.children),d.return=f,f=d;break e}}else if(M.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===vt&&Es(R)===
M.type){n(f,M.sibling),d=i(M,m.props),d.ref=Vn(f,M,m),d.return=f,f=d;break e}n(f,M);break}else t(f,M);M=M.sibling}m.type===
an?(d=Qt(m.props.children,f.mode,k,m.key),d.return=f,f=d):(k=fi(m.type,m.key,m.props,null,f.mode,k),k.ref=Vn(f,d,m),k.return=
f,f=k)}return o(f);case on:e:{for(M=m.key;d!==null;){if(d.key===M)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&
d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else
t(f,d);d=d.sibling}d=bl(m,f.mode,k),d.return=f,f=d}return o(f);case vt:return M=m._init,z(f,d,M(m._payload),k)}if(Yn(m))
return v(f,d,m,k);if(Fn(m))return w(f,d,m,k);Kr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&
d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=Tl(m,f.mode,k),d.return=f,f=d),o(f)):n(f,d)}return z}var En=hc(
!0),gc=hc(!1),Ei=Ot(null),Ri=null,hn=null,ta=null;function na(){ta=hn=Ri=null}function ra(e){var t=Ei.current;G(Ei),e._currentValue=
t}function po(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=
t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){Ri=e,ta=hn=null,e=e.dependencies,
e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(ta!==e)
if(e={context:e,memoizedValue:t,next:null},hn===null){if(Ri===null)throw Error(N(308));hn=e,Ri.dependencies={lanes:0,firstContext:e}}else
hn=hn.next=e;return t}var Bt=null;function ia(e){Bt===null?Bt=[e]:Bt.push(e)}function yc(e,t,n,r){var i=t.interleaved;return i===
null?(n.next=n,ia(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==
null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.
tag===3?n.stateNode:null}var wt=!1;function la(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,
shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue=
{baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}
function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;
if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,
ct(e,n)}return i=r.interleaved,i===null?(t.next=t,ia(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function oi(e,t,n){
if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wo(e,n)}}function Rs(e,t){
var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){
do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=
l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,
shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=
t}function Mi(e,t,n,r){var i=e.updateQueue;wt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){
i.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?l=c:o.next=c,o=s;var y=e.alternate;y!==null&&(y=y.updateQueue,
a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=c:a.next=c,y.lastBaseUpdate=s))}if(l!==null){var p=i.baseState;o=0,
y=c=s=null,a=l;do{var g=a.lane,S=a.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,
callback:a.callback,next:null});e:{var v=e,w=a;switch(g=t,S=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(
S,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(S,p,g):
v,g==null)break e;p=J({},p,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=
[a]:g.push(a))}else S={eventTime:S,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(c=y=S,s=p):
y=y.next=S,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.
shared.pending=null}}while(!0);if(y===null&&(s=p),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=y,t=i.shared.interleaved,
t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Xt|=o,e.lanes=o,e.memoizedState=p}}function Ms(e,t,n){
if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=
n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Rr={},tt=Ot(Rr),vr=Ot(Rr),wr=Ot(Rr);function Wt(e){if(e===Rr)
throw Error(N(174));return e}function oa(e,t){switch(H(wr,t),H(vr,e),H(tt,Rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?
t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}G(tt),H(tt,
t)}function Rn(){G(tt),G(vr),G(wr)}function wc(e){Wt(wr.current);var t=Wt(tt.current),n=Kl(t,e.type);t!==n&&(H(vr,e),H(tt,
n))}function aa(e){vr.current===e&&(G(tt),G(vr))}var X=Ot(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.
memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.
revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;
for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}
var jl=[];function sa(){for(var e=0;e<jl.length;e++)jl[e]._workInProgressVersionPrimary=null;jl.length=0}var ai=ft.ReactCurrentDispatcher,
El=ft.ReactCurrentBatchConfig,Yt=0,Z=null,le=null,ae=null,Li=!1,rr=!1,kr=0,$m=0;function me(){throw Error(N(321))}function ua(e,t){
if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function ca(e,t,n,r,i,l){
if(Yt=l,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=e===null||e.memoizedState===null?Wm:Hm,e=n(r,i),
rr){l=0;do{if(rr=!1,kr=0,25<=l)throw Error(N(301));l+=1,ae=le=null,t.updateQueue=null,ai.current=Qm,e=n(r,i)}while(rr)}if(ai.
current=Ti,t=le!==null&&le.next!==null,Yt=0,ae=le=Z=null,Li=!1,t)throw Error(N(300));return e}function da(){var e=kr!==0;
return kr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?
Z.memoizedState=ae=e:ae=ae.next=e,ae}function Ue(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=
le.next;var t=ae===null?Z.memoizedState:ae.next;if(t!==null)ae=t,le=e;else{if(e===null)throw Error(N(310));le=e,e={memoizedState:le.
memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ae===null?Z.memoizedState=ae=e:ae=
ae.next=e}return ae}function xr(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=Ue(),n=t.queue;if(n===null)
throw Error(N(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.
next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,c=l;do{var y=c.
lane;if((Yt&y)===y)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),
r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.
eagerState,next:null};s===null?(a=s=p,o=r):s=s.next=p,Z.lanes|=y,Xt|=y}c=c.next}while(c!==null&&c!==l);s===null?o=r:s.next=
a,Ye(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,
e!==null){i=e;do l=i.lane,Z.lanes|=l,Xt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}
function Ml(e){var t=Ue(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,
l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ye(l,t.memoizedState)||
(Ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function kc(){}function xc(e,t){
var n=Z,r=Ue(),i=t(),l=!Ye(r.memoizedState,i);if(l&&(r.memoizedState=i,Ce=!0),r=r.queue,fa(Cc.bind(null,n,r,e),[e]),r.getSnapshot!==
t||l||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Sr(9,_c.bind(null,n,r,i,t),void 0,null),se===null)throw Error(
N(349));Yt&30||Sc(n,t,i)}return i}function Sc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t=
{lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _c(e,t,n,r){
t.value=n,t.getSnapshot=r,Nc(t)&&jc(e)}function Cc(e,t,n){return n(function(){Nc(t)&&jc(e)})}function Nc(e){var t=e.getSnapshot;
e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function jc(e){var t=ct(e,1);t!==null&&Ge(t,e,1,-1)}function Ps(e){
var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,
lastRenderedReducer:xr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,Z,e),[t.memoizedState,e]}function Sr(e,t,n,r){
return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=
t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ec(){
return Ue().memoizedState}function si(e,t,n,r){var i=Je();Z.flags|=e,i.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}
function Hi(e,t,n,r){var i=Ue();r=r===void 0?null:r;var l=void 0;if(le!==null){var o=le.memoizedState;if(l=o.destroy,r!==
null&&ua(r,o.deps)){i.memoizedState=Sr(t,n,l,r);return}}Z.flags|=e,i.memoizedState=Sr(1|t,n,l,r)}function Ls(e,t){return si(
8390656,8,e,t)}function fa(e,t){return Hi(2048,8,e,t)}function Rc(e,t){return Hi(4,2,e,t)}function Mc(e,t){return Hi(4,4,
e,t)}function Pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,
function(){t.current=null}}function Lc(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4,4,Pc.bind(null,t,e),n)}function ma(){}
function Tc(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ua(t,r[1])?r[0]:(n.memoizedState=
[e,t],e)}function bc(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ua(t,r[1])?r[0]:
(e=e(),n.memoizedState=[e,t],e)}function zc(e,t,n){return Yt&21?(Ye(n,t)||(n=Au(),Z.lanes|=n,Xt|=n,e.baseState=!0),t):(e.
baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Um(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=El.transition;
El.transition={};try{e(!1),t()}finally{W=n,El.transition=r}}function Ic(){return Ue().memoizedState}function Vm(e,t,n){var r=Pt(
e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Oc(e))Fc(t,n);else if(n=yc(e,t,n,r),n!==null){var i=we();
Ge(n,e,r,i),Dc(n,t,r)}}function Bm(e,t,n){var r=Pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oc(
e))Fc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.
lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,o)){var s=t.interleaved;s===null?(i.next=i,ia(t)):(i.
next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=yc(e,t,i,r),n!==null&&(i=we(),Ge(n,e,r,i),Dc(n,t,r))}}function Oc(e){
var t=e.alternate;return e===Z||t!==null&&t===Z}function Fc(e,t){rr=Li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,
n.next=t),e.pending=t}function Dc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wo(e,n)}}var Ti={readContext:$e,
useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,
useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,
useId:me,unstable_isNewReconciler:!1},Wm={readContext:$e,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?
null:t],e},useContext:$e,useEffect:Ls,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,
4,Pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(
4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){
var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,
lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vm.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){
var t=Je();return e={current:e},t.memoizedState=e},useState:Ps,useDebugValue:ma,useDeferredValue:function(e){return Je().
memoizedState=e},useTransition:function(){var e=Ps(!1),t=e[0];return e=Um.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},
useSyncExternalStore:function(e,t,n){var r=Z,i=Je();if(Y){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),se===null)
throw Error(N(349));Yt&30||Sc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ls(Cc.bind(null,r,
l,e),[e]),r.flags|=2048,Sr(9,_c.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Je(),t=se.identifierPrefix;if(Y){
var n=ot,r=lt;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$m++,
t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hm={readContext:$e,useCallback:Tc,
useContext:$e,useEffect:fa,useImperativeHandle:Lc,useInsertionEffect:Rc,useLayoutEffect:Mc,useMemo:bc,useReducer:Rl,useRef:Ec,
useState:function(){return Rl(xr)},useDebugValue:ma,useDeferredValue:function(e){var t=Ue();return zc(t,le.memoizedState,
e)},useTransition:function(){var e=Rl(xr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:kc,useSyncExternalStore:xc,
useId:Ic,unstable_isNewReconciler:!1},Qm={readContext:$e,useCallback:Tc,useContext:$e,useEffect:fa,useImperativeHandle:Lc,
useInsertionEffect:Rc,useLayoutEffect:Mc,useMemo:bc,useReducer:Ml,useRef:Ec,useState:function(){return Ml(xr)},useDebugValue:ma,
useDeferredValue:function(e){var t=Ue();return le===null?t.memoizedState=e:zc(t,le.memoizedState,e)},useTransition:function(){
var e=Ml(xr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:kc,useSyncExternalStore:xc,useId:Ic,unstable_isNewReconciler:!1};
function We(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}
function ho(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=
n)}var Qi={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;
var r=we(),i=Pt(e),l=at(r,i);l.payload=t,n!=null&&(l.callback=n),t=Rt(e,l,i),t!==null&&(Ge(t,e,i,r),oi(t,e,i))},enqueueReplaceState:function(e,t,n){
e=e._reactInternals;var r=we(),i=Pt(e),l=at(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Rt(e,l,i),t!==null&&(Ge(t,
e,i,r),oi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Pt(e),i=at(n,r);i.tag=2,t!=null&&(i.
callback=t),t=Rt(e,i,r),t!==null&&(Ge(t,e,r,n),oi(t,e,r))}};function Ts(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate==
"function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!pr(n,r)||!pr(i,l):!0}function Ac(e,t,n){
var r=!1,i=bt,l=t.contextType;return typeof l=="object"&&l!==null?l=$e(l):(i=je(t)?Kt:ge.current,r=t.contextTypes,l=(r=r!=
null)?Nn(e,i):bt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,
t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=
l),t}function bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.
UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qi.enqueueReplaceState(
t,t.state,null)}function go(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},la(e);var l=t.contextType;
typeof l=="object"&&l!==null?i.context=$e(l):(l=je(t)?Kt:ge.current,i.context=Nn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,
typeof l=="function"&&(ho(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate==
"function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.
componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),
t!==i.state&&Qi.enqueueReplaceState(i,i.state,null),Mi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="fu\
nction"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=kf(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??
null}}function yo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Km=typeof WeakMap=="func\
tion"?WeakMap:Map;function $c(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){
zi||(zi=!0,Eo=r),yo(e,t)},n}function Uc(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="fu\
nction"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yo(e,t)}}var l=e.stateNode;return l!==null&&
typeof l.componentDidCatch=="function"&&(n.callback=function(){yo(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):
Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function zs(e,t,n){var r=e.
pingCache;if(r===null){r=e.pingCache=new Km;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));
i.has(n)||(i.add(n),e=ap.bind(null,e,t,n),t.then(e,e))}function Is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==
null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Os(e,t,n,r,i){return e.mode&1?(e.
flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===
null?n.tag=17:(t=at(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var Gm=ft.ReactCurrentOwner,Ce=!1;function ve(e,t,n,r){t.child=
e===null?gc(t,null,n,r):En(t,e.child,n,r)}function Fs(e,t,n,r,i){n=n.render;var l=t.ref;return Sn(t,i),r=ca(e,t,n,r,l,i),
n=da(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(Y&&n&&Jo(t),t.flags|=1,ve(e,t,r,
i),t.child)}function Ds(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!xa(l)&&l.defaultProps===void 0&&
n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Vc(e,t,l,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,
e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:pr,n(o,r)&&e.ref===t.
ref)return dt(e,t,i)}return t.flags|=1,e=Lt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Vc(e,t,n,r,i){if(e!==null){var l=e.
memoizedProps;if(pr(l,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.
lanes=e.lanes,dt(e,t,i)}return vo(e,t,n,r,i)}function Bc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:
null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(yn,Re),Re|=n;else{
if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,
transitions:null},t.updateQueue=null,H(yn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=
l!==null?l.baseLanes:n,H(yn,Re),Re|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,H(yn,Re),Re|=r;return ve(
e,t,i,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}
function vo(e,t,n,r,i){var l=je(n)?Kt:ge.current;return l=Nn(t,l),Sn(t,i),n=ca(e,t,n,r,l,i),r=da(),e!==null&&!Ce?(t.updateQueue=
e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(Y&&r&&Jo(t),t.flags|=1,ve(e,t,n,i),t.child)}function As(e,t,n,r,i){
if(je(n)){var l=!0;Ci(t)}else l=!1;if(Sn(t,i),t.stateNode===null)ui(e,t),Ac(t,n,r),go(t,n,r,i),r=!0;else if(e===null){var o=t.
stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$e(c):(c=je(n)?Kt:ge.
current,c=Nn(t,c));var y=n.getDerivedStateFromProps,p=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";
p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&
bs(t,o,r,c),wt=!1;var g=t.memoizedState;o.state=g,Mi(t,r,o,i),s=t.memoizedState,a!==r||g!==s||Ne.current||wt?(typeof y==
"function"&&(ho(t,n,y,r),s=t.memoizedState),(a=wt||Ts(t,n,a,r,g,s,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&
typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==
"function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount==
"function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount==
"function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:We(t.type,a),
o.props=c,p=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=je(n)?Kt:ge.current,s=Nn(
t,s));var S=n.getDerivedStateFromProps;(y=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.
UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==s)&&bs(t,o,r,s),
wt=!1,g=t.memoizedState,o.state=g,Mi(t,r,o,i);var v=t.memoizedState;a!==p||g!==v||Ne.current||wt?(typeof S=="function"&&
(ho(t,n,S,r),v=t.memoizedState),(c=wt||Ts(t,n,c,r,g,v,s)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.
componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,s),typeof o.UNSAFE_componentWillUpdate==
"function"&&o.UNSAFE_componentWillUpdate(r,v,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==
"function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=
4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=
r,t.memoizedState=v),o.props=r,o.state=v,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&
g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||
(t.flags|=1024),r=!1)}return wo(e,t,n,r,l,i)}function wo(e,t,n,r,i,l){Wc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&
Cs(t,n,!1),dt(e,t,l);r=t.stateNode,Gm.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.
flags|=1,e!==null&&o?(t.child=En(t,e.child,null,l),t.child=En(t,null,a,l)):ve(e,t,a,l),t.memoizedState=r.state,i&&Cs(t,n,
!0),t.child}function Hc(e){var t=e.stateNode;t.pendingContext?_s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&
_s(e,t.context,!1),oa(e,t.containerInfo)}function $s(e,t,n,r,i){return jn(),ea(i),t.flags|=256,ve(e,t,n,r),t.child}var ko={
dehydrated:null,treeContext:null,retryLane:0};function xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qc(e,t,n){
var r=t.pendingProps,i=X.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),
a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(X,i&1),e===null)return mo(t),e=t.memoizedState,e!==null&&
(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,
l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Yi(o,r,0,null),e=
Qt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=xo(n),t.memoizedState=ko,e):pa(t,o));if(i=
e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ym(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;
var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=
null):(r=Lt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Lt(a,l):(l=Qt(l,o,n,null),l.flags|=2),l.return=t,r.return=
t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?xo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.
transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ko,r}return l=e.child,e=l.sibling,r=Lt(l,{mode:"\
visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=
[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pa(e,t){return t=Yi({mode:"visible",children:t},e.
mode,0,null),t.return=e,e.child=t}function Gr(e,t,n,r){return r!==null&&ea(r),En(t,e.child,null,n),e=pa(t,t.pendingProps.
children),e.flags|=2,t.memoizedState=null,e}function Ym(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(
N(422))),Gr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Yi({mode:"visi\
ble",children:r.children},i,0,null),l=Qt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&En(
t,e.child,null,o),t.child.memoizedState=xo(o),t.memoizedState=ko,l);if(!(t.mode&1))return Gr(e,t,o,null);if(i.data==="$!"){
if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(N(419)),r=Pl(l,r,void 0),Gr(e,t,o,r)}if(a=(o&
e.childLanes)!==0,Ce||a){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:
i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=
i,ct(e,i),Ge(r,e,i,-1))}return ka(),r=Pl(Error(N(421))),Gr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=
sp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Me=Et(i.nextSibling),Pe=t,Y=!0,Qe=null,e!==null&&(Oe[Fe++]=lt,Oe[Fe++]=
ot,Oe[Fe++]=Gt,lt=e.id,ot=e.overflow,Gt=t),t=pa(t,r.children),t.flags|=4096,t)}function Us(e,t,n){e.lanes|=t;var r=e.alternate;
r!==null&&(r.lanes|=t),po(e.return,t,n)}function Ll(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,
rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.
last=r,l.tail=n,l.tailMode=i)}function Kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ve(e,t,r.children,n),r=
X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==
null&&Us(e,n,t);else if(e.tag===19)Us(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;
for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(
X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&
Pi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ll(t,!1,i,n,l);break;case"\
backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Pi(e)===null){t.child=i;break}e=i.sibling,
i.sibling=n,n=i,i=e}Ll(t,!0,n,null,l);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}
return t.child}function ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){
if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(
N(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=
Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xm(e,t,n){switch(t.tag){case 3:Hc(t),jn();break;case 5:
wc(t);break;case 1:je(t.type)&&Ci(t);break;case 4:oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.
memoizedProps.value;H(Ei,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==
null?(H(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Qc(e,t,n):(H(X,X.current&1),e=dt(e,t,n),e!==null?e.sibling:
null);H(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kc(e,t,n);t.flags|=128}if(i=t.memoizedState,
i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(X,X.current),r)break;return null;case 22:case 23:return t.lanes=
0,Bc(e,t,n)}return dt(e,t,n)}var Gc,So,Yc,Xc;Gc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(
n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){
if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};So=function(){};Yc=function(e,t,n,r){
var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wt(tt.current);var l=null;switch(n){case"input":i=Bl(e,i),r=Bl(e,r),l=[];break;case"\
select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),l=[];break;case"textarea":i=Ql(e,i),r=Ql(e,r),l=[];break;default:
typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}Gl(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(
c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!==
"dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="au\
toFocus"&&(ar.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(
c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]=
"");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dan\
gerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!=
"string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&
(ar.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&K("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("\
style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Xc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!Y)switch(e.
tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=
null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===
null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,
n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=
e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.
subtreeFlags|=r,e.childLanes=n,t}function Zm(e,t,n){var r=t.pendingProps;switch(qo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:
return pe(t),null;case 1:return je(t.type)&&_i(),pe(t),null;case 3:return r=t.stateNode,Rn(),G(Ne),G(ge),sa(),r.pendingContext&&
(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qr(t)?t.flags|=4:e===null||e.memoizedState.
isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Po(Qe),Qe=null))),So(e,t),pe(t),null;case 5:aa(t);var i=Wt(wr.current);
if(n=t.type,e!==null&&t.stateNode!=null)Yc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===
null)throw Error(N(166));return pe(t),null}if(e=Wt(tt.current),Qr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[qe]=
t,r[yr]=l,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("loa\
d",r);break;case"video":case"audio":for(i=0;i<Zn.length;i++)K(Zn[i],r);break;case"source":K("error",r);break;case"img":case"\
image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Xa(r,l),K("invalid",r);break;case"\
select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":Ja(r,l),K("invalid",r)}Gl(n,l),i=
null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==
!0&&Hr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&
Hr(r.textContent,a,e),i=["children",""+a]):ar.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"i\
nput":Fr(r),Za(r,l,!0);break;case"textarea":Fr(r),qa(r);break;case"select":case"option":break;default:typeof l.onClick==
"function"&&(r.onclick=Si)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http:\
//www.w3.org/1999/xhtml"&&(e=Cu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML=
"<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(
n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[yr]=r,Gc(e,t,
!1,!1),t.stateNode=e;e:{switch(o=Yl(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"\
embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zn.length;i++)K(Zn[i],e);i=r;break;case"source":K("error",
e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"\
input":Xa(e,r),i=Bl(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},
i=J({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ja(e,r),i=Ql(e,r),K("invalid",e);break;default:i=r}Gl(n,i),
a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Eu(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,
s!=null&&Nu(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&sr(e,s):typeof s=="number"&&sr(e,""+s):l!==
"suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ar.hasOwnProperty(l)?s!=null&&l==="o\
nScroll"&&K("scroll",e):s!=null&&Do(e,l,s,o))}switch(n){case"input":Fr(e),Za(e,r,!1);break;case"textarea":Fr(e),qa(e);break;case"\
option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?
vn(e,!!r.multiple,l,!1):r.defaultValue!=null&&vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="func\
tion"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=
!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.
stateNode!=null)Xc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Wt(wr.
current),Wt(tt.current),Qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(l=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.
tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,
n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return pe(
t),null;case 13:if(G(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Me!==
null&&t.mode&1&&!(t.flags&128))pc(),jn(),t.flags|=98560,l=!1;else if(l=Qr(t),r!==null&&r.dehydrated!==null){if(e===null){
if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[qe]=t}else jn(),!(t.
flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Qe!==null&&(Po(Qe),Qe=null),l=!0;if(!l)return t.flags&65536?
t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&
1&&(e===null||X.current&1?oe===0&&(oe=3):ka())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Rn(),So(e,t),
e===null&&hr(t.stateNode.containerInfo),pe(t),null;case 10:return ra(t.type._context),pe(t),null;case 17:return je(t.type)&&
_i(),pe(t),null;case 19:if(G(X),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)
if(r)Bn(l,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Pi(e),o!==null){for(t.flags|=128,Bn(l,
!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,
o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,
l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=
0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.
type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(X,X.
current&1|2),t.child}e=e.sibling}l.tail!==null&&re()>Pn&&(t.flags|=128,r=!0,Bn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Pi(
o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(l,!0),l.tail===null&&l.tailMode===
"hidden"&&!o.alternate&&!Y)return pe(t),null}else 2*re()-l.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(
l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.
tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=re(),t.sibling=null,n=X.current,H(X,r?n&1|2:n&
1),t):(pe(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=
8192),r&&t.mode&1?Re&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}
throw Error(N(156,t.tag))}function Jm(e,t){switch(qo(t),t.tag){case 1:return je(t.type)&&_i(),e=t.flags,e&65536?(t.flags=
e&-65537|128,t):null;case 3:return Rn(),G(Ne),G(ge),sa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:
return aa(t),null;case 13:if(G(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));
jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(X),null;case 4:return Rn(),null;case 10:return ra(
t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var Yr=!1,he=!1,qm=typeof WeakSet==
"function"?WeakSet:Set,T=null;function gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,
t,r)}else n.current=null}function _o(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Vs=!1;function ep(e,t){if(lo=wi,e=tc(),Zo(e)){
if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||
window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;
r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,y=0,p=e,g=null;t:for(;;){for(var S;p!==
n||i!==0&&p.nodeType!==3||(a=o+i),p!==l||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==
null;)g=p,p=S;for(;;){if(p===e)break t;if(g===n&&++c===i&&(a=o),g===l&&++y===r&&(s=o),(S=p.nextSibling)!==null)break;p=g,
g=p.parentNode}p=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(oo={focusedElem:e,
selectionRange:n},wi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==
null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.
memoizedProps,z=v.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:We(t.type,w),z);f.__reactInternalSnapshotBeforeUpdate=
d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(
m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){ne(t,t.return,k)}if(e=
t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=Vs,Vs=!1,v}function ir(e,t,n){var r=t.updateQueue;if(r=
r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&_o(
t,n,l)}i=i.next}while(i!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;
do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Co(e){var t=e.ref;if(t!==null){var n=e.
stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zc(e){var t=e.alternate;
t!==null&&(e.alternate=null,Zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],
delete t[yr],delete t[uo],delete t[Om],delete t[Fm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=
null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jc(e){return e.tag===5||e.tag===
3||e.tag===4}function Bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.
sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;
e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function No(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,
t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):
(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==
null))for(No(e,t,n),e=e.sibling;e!==null;)No(e,t,n),e=e.sibling}function jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,
t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jo(e,t,n),e=e.sibling;e!==null;)jo(e,t,n),
e=e.sibling}var ce=null,He=!1;function ht(e,t,n){for(n=n.child;n!==null;)qc(e,t,n),n=n.sibling}function qc(e,t,n){if(et&&
typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:he||gn(n,t);case 6:
var r=ce,i=He;ce=null,ht(e,t,n),ce=r,He=i,ce!==null&&(He?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):
e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(He?(e=ce,n=n.stateNode,e.nodeType===8?Cl(e.parentNode,
n):e.nodeType===1&&Cl(e,n),fr(e)):Cl(ce,n.stateNode));break;case 4:r=ce,i=He,ce=n.stateNode.containerInfo,He=!0,ht(e,t,n),
ce=r,He=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;
do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&_o(n,t,o),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!he&&(gn(
n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){
ne(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ht(e,t,n),he=r):ht(
e,t,n);break;default:ht(e,t,n)}}function Ws(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===
null&&(n=e.stateNode=new qm),t.forEach(function(r){var i=up.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){
var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:
ce=a.stateNode,He=!1;break e;case 3:ce=a.stateNode.containerInfo,He=!0;break e;case 4:ce=a.stateNode.containerInfo,He=!0;
break e}a=a.return}if(ce===null)throw Error(N(160));qc(l,o,i),ce=null,He=!1;var s=i.alternate;s!==null&&(s.return=null),
i.return=null}catch(c){ne(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ed(t,e),t=t.sibling}function ed(e,t){var n=e.
alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{ir(3,e,e.return),Ki(3,e)}catch(w){
ne(e,e.return,w)}try{ir(5,e,e.return)}catch(w){ne(e,e.return,w)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&gn(n,n.return);
break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&gn(n,n.return),e.flags&32){var i=e.stateNode;try{sr(i,"")}catch(w){ne(e,e.
return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;
if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Su(i,l),Yl(a,o);var c=Yl(a,l);for(o=0;o<
s.length;o+=2){var y=s[o],p=s[o+1];y==="style"?Eu(i,p):y==="dangerouslySetInnerHTML"?Nu(i,p):y==="children"?sr(i,p):Do(i,
y,p,c)}switch(a){case"input":Wl(i,l);break;case"textarea":_u(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i.
_wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?vn(i,!!l.multiple,S,!1):g!==!!l.multiple&&(l.defaultValue!=
null?vn(i,!!l.multiple,l.defaultValue,!0):vn(i,!!l.multiple,l.multiple?[]:"",!1))}i[yr]=l}catch(w){ne(e,e.return,w)}}break;case 6:
if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){
ne(e,e.return,w)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(w){
ne(e,e.return,w)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,
i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ya=re())),r&4&&Ws(e);break;case 22:if(y=
n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||y,Ve(t,e),he=c):Ve(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,
(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(p=T=y;T!==null;){switch(g=T,S=g.child,g.tag){case 0:case 11:case 14:case 15:
ir(4,g,g.return);break;case 1:gn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;
try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ne(r,n,w)}}break;case 5:gn(g,g.
return);break;case 22:if(g.memoizedState!==null){Qs(p);continue}}S!==null?(S.return=g,T=S):Qs(p)}y=y.sibling}e:for(y=null,
p=e;;){if(p.tag===5){if(y===null){y=p;try{i=p.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("dis\
play","none","important"):l.display="none"):(a=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?
s.display:null,a.style.display=ju("display",o))}catch(w){ne(e,e.return,w)}}}else if(p.tag===6){if(y===null)try{p.stateNode.
nodeValue=c?"":p.memoizedProps}catch(w){ne(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&
p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===
e)break e;y===p&&(y=null),p=p.return}y===p&&(y=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ve(t,e),Ze(e),
r&4&&Ws(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==
null;){if(Jc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(sr(i,
""),r.flags&=-33);var l=Bs(e);jo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bs(e);No(e,a,o);break;default:
throw Error(N(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){T=e,td(e)}function td(e,t,n){
for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yr;if(!o){var a=i.
alternate,s=a!==null&&a.memoizedState!==null||he;a=Yr;var c=he;if(Yr=o,(he=s)&&!c)for(T=i;T!==null;)o=T,s=o.child,o.tag===
22&&o.memoizedState!==null?Ks(i):s!==null?(s.return=o,T=s):Ks(i);for(;l!==null;)T=l,td(l),l=l.sibling;T=i,Yr=a,he=c}Hs(e)}else
i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):Hs(e)}}function Hs(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;
try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===
null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(
i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ms(t,l,r);break;case 3:var o=t.updateQueue;
if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ms(
t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"\
input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:
break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){
var p=y.dehydrated;p!==null&&fr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}
he||t.flags&512&&Co(t)}catch(g){ne(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;
break}T=t.return}}function Qs(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.
return,T=n;break}T=t.return}}function Ks(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;
try{Ki(4,t)}catch(s){ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;
try{r.componentDidMount()}catch(s){ne(t,i,s)}}var l=t.return;try{Co(t)}catch(s){ne(t,l,s)}break;case 5:var o=t.return;try{
Co(t)}catch(s){ne(t,o,s)}}}catch(s){ne(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,
T=a;break}T=t.return}}var np=Math.ceil,bi=ft.ReactCurrentDispatcher,ha=ft.ReactCurrentOwner,Ae=ft.ReactCurrentBatchConfig,
$=0,se=null,ie=null,de=0,Re=0,yn=Ot(0),oe=0,_r=null,Xt=0,Gi=0,ga=0,lr=null,_e=null,ya=0,Pn=1/0,rt=null,zi=!1,Eo=null,Mt=null,
Xr=!1,_t=null,Ii=0,or=0,Ro=null,ci=-1,di=0;function we(){return $&6?re():ci!==-1?ci:ci=re()}function Pt(e){return e.mode&
1?$&2&&de!==0?de&-de:Am.transition!==null?(di===0&&(di=Au()),di):(e=W,e!==0||(e=window.event,e=e===void 0?16:Qu(e.type)),
e):1}function Ge(e,t,n,r){if(50<or)throw or=0,Ro=null,Error(N(185));Nr(e,n,r),(!($&2)||e!==se)&&(e===se&&(!($&2)&&(Gi|=n),
oe===4&&xt(e,de)),Ee(e,r),n===1&&$===0&&!(t.mode&1)&&(Pn=re()+500,Wi&&Ft()))}function Ee(e,t){var n=e.callbackNode;Af(e,
t);var r=vi(e,e===se?de:0);if(r===0)n!==null&&ns(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==
t){if(n!=null&&ns(n),t===1)e.tag===0?Dm(Gs.bind(null,e)):dc(Gs.bind(null,e)),zm(function(){!($&6)&&Ft()}),n=null;else{switch($u(
r)){case 1:n=Bo;break;case 4:n=Fu;break;case 16:n=yi;break;case 536870912:n=Du;break;default:n=yi}n=ud(n,nd.bind(null,e))}
e.callbackPriority=t,e.callbackNode=n}}function nd(e,t){if(ci=-1,di=0,$&6)throw Error(N(327));var n=e.callbackNode;if(_n()&&
e.callbackNode!==n)return null;var r=vi(e,e===se?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oi(e,r);else{
t=r;var i=$;$|=2;var l=id();(se!==e||de!==t)&&(rt=null,Pn=re()+500,Ht(e,t));do try{lp();break}catch(a){rd(e,a)}while(!0);
na(),bi.current=l,$=i,ie!==null?t=0:(se=null,de=0,t=oe)}if(t!==0){if(t===2&&(i=eo(e),i!==0&&(r=i,t=Mo(e,i))),t===1)throw n=
_r,Ht(e,0),xt(e,r),Ee(e,re()),n;if(t===6)xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!rp(i)&&(t=Oi(e,r),t===2&&(l=eo(
e),l!==0&&(r=l,t=Mo(e,l))),t===1))throw n=_r,Ht(e,0),xt(e,r),Ee(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:
throw Error(N(345));case 2:$t(e,_e,rt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=ya+500-re(),10<t)){if(vi(e,0)!==0)break;
if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=so($t.bind(null,e,_e,rt),t);
break}$t(e,_e,rt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ke(r);l=1<<o,o=t[o],
o>i&&(i=o),r&=~l}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,
10<r){e.timeoutHandle=so($t.bind(null,e,_e,rt),r);break}$t(e,_e,rt);break;case 5:$t(e,_e,rt);break;default:throw Error(N(
329))}}}return Ee(e,re()),e.callbackNode===n?nd.bind(null,e):null}function Mo(e,t){var n=lr;return e.current.memoizedState.
isDehydrated&&(Ht(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=_e,_e=n,t!==null&&Po(t)),e}function Po(e){_e===null?_e=e:_e.push.
apply(_e,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<
n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ye(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&
16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.
return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~ga,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=
~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Gs(e){if($&6)throw Error(N(327));_n();var t=vi(
e,0);if(!(t&1))return Ee(e,re()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=eo(e);r!==0&&(t=r,n=Mo(e,r))}if(n===1)throw n=
_r,Ht(e,0),xt(e,t),Ee(e,re()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,
$t(e,_e,rt),Ee(e,re()),null}function va(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Pn=re()+500,Wi&&Ft())}}function Zt(e){
_t!==null&&_t.tag===0&&!($&6)&&_n();var t=$;$|=1;var n=Ae.transition,r=W;try{if(Ae.transition=null,W=1,e)return e()}finally{
W=r,Ae.transition=n,$=t,!($&6)&&Ft()}}function wa(){Re=yn.current,G(yn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=
0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bm(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(qo(r),
r.tag){case 1:r=r.type.childContextTypes,r!=null&&_i();break;case 3:Rn(),G(Ne),G(ge),sa();break;case 5:aa(r);break;case 4:
Rn();break;case 13:G(X);break;case 19:G(X);break;case 10:ra(r.type._context);break;case 22:case 23:wa()}n=n.return}if(se=
e,ie=e=Lt(e.current,null),de=Re=t,oe=0,_r=null,ga=Gi=Xt=0,_e=lr=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,
r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Bt=null}return e}
function rd(e,t){do{var n=ie;try{if(na(),ai.current=Ti,Li){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&
(i.pending=null),r=r.next}Li=!1}if(Yt=0,ae=le=Z=null,rr=!1,kr=0,ha.current=null,n===null||n.return===null){oe=1,_r=t,ie=
null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=de,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){
var c=s,y=a,p=y.tag;if(!(y.mode&1)&&(p===0||p===11||p===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=
g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Is(o);if(S!==null){S.flags&=-257,Os(S,o,
a,l,t),S.mode&1&&zs(l,c,t),t=S,s=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(s),t.updateQueue=w}else v.add(s);
break e}else{if(!(t&1)){zs(l,c,t),ka();break e}s=Error(N(426))}}else if(Y&&a.mode&1){var z=Is(o);if(z!==null){!(z.flags&
65536)&&(z.flags|=256),Os(z,o,a,l,t),ea(Mn(s,a));break e}}l=s=Mn(s,a),oe!==4&&(oe=2),lr===null?lr=[l]:lr.push(l),l=o;do{
switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=$c(l,s,t);Rs(l,f);break e;case 1:a=s;var d=l.type,m=l.stateNode;
if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mt===
null||!Mt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=Uc(l,a,t);Rs(l,k);break e}}l=l.return}while(l!==null)}od(n)}catch(R){
t=R,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function id(){var e=bi.current;return bi.current=Ti,e===null?
Ti:e}function ka(){(oe===0||oe===3||oe===2)&&(oe=4),se===null||!(Xt&268435455)&&!(Gi&268435455)||xt(se,de)}function Oi(e,t){
var n=$;$|=2;var r=id();(se!==e||de!==t)&&(rt=null,Ht(e,t));do try{ip();break}catch(i){rd(e,i)}while(!0);if(na(),$=n,bi.
current=r,ie!==null)throw Error(N(261));return se=null,de=0,oe}function ip(){for(;ie!==null;)ld(ie)}function lp(){for(;ie!==
null&&!Pf();)ld(ie)}function ld(e){var t=sd(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?od(e):ie=t,ha.current=
null}function od(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jm(n,t),n!==null){n.flags&=32767,ie=n;
return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ie=null;return}}else if(n=Zm(n,t,Re),n!==null){
ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);oe===0&&(oe=5)}function $t(e,t,n){var r=W,i=Ae.transition;
try{Ae.transition=null,W=1,op(e,t,n,r)}finally{Ae.transition=i,W=r}return null}function op(e,t,n,r){do _n();while(_t!==null);
if($&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=
0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if($f(e,l),e===se&&
(ie=se=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xr||(Xr=!0,ud(yi,function(){return _n(),null})),l=(n.flags&15990)!==
0,n.subtreeFlags&15990||l){l=Ae.transition,Ae.transition=null;var o=W;W=1;var a=$;$|=4,ha.current=null,ep(e,n),ed(n,e),jm(
oo),wi=!!lo,oo=lo=null,e.current=n,tp(n),Lf(),$=a,W=o,Ae.transition=l}else e.current=n;if(Xr&&(Xr=!1,_t=e,Ii=i),l=e.pendingLanes,
l===0&&(Mt=null),zf(n.stateNode),Ee(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.
stack,digest:i.digest});if(zi)throw zi=!1,e=Eo,Eo=null,e;return Ii&1&&e.tag!==0&&_n(),l=e.pendingLanes,l&1?e===Ro?or++:(or=
0,Ro=e):or=0,Ft(),null}function _n(){if(_t!==null){var e=$u(Ii),t=Ae.transition,n=W;try{if(Ae.transition=null,W=16>e?16:
e,_t===null)var r=!1;else{if(e=_t,_t=null,Ii=0,$&6)throw Error(N(331));var i=$;for($|=4,T=e.current;T!==null;){var l=T,o=l.
child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(T=c;T!==null;){var y=T;switch(y.
tag){case 0:case 11:case 15:ir(8,y,l)}var p=y.child;if(p!==null)p.return=y,T=p;else for(;T!==null;){y=T;var g=y.sibling,
S=y.return;if(Zc(y),y===c){T=null;break}if(g!==null){g.return=S,T=g;break}T=S}}}var v=l.alternate;if(v!==null){var w=v.child;
if(w!==null){v.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.
return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ir(9,l,l.return)}var f=l.sibling;
if(f!==null){f.return=l.return,T=f;break e}T=l.return}}var d=e.current;for(T=d;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&
2064&&m!==null)m.return=o,T=m;else e:for(o=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ki(
9,a)}}catch(R){ne(a,a.return,R)}if(a===o){T=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,T=k;break e}T=a.
return}}if($=i,Ft(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Ai,e)}catch{}r=!0}return r}finally{
W=n,Ae.transition=t}}return!1}function Ys(e,t,n){t=Mn(n,t),t=$c(e,t,1),e=Rt(e,t,1),t=we(),e!==null&&(Nr(e,1,t),Ee(e,t))}
function ne(e,t,n){if(e.tag===3)Ys(e,e,n);else for(;t!==null;){if(t.tag===3){Ys(t,e,n);break}else if(t.tag===1){var r=t.
stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.
has(r))){e=Mn(n,e),e=Uc(t,e,1),t=Rt(t,e,1),e=we(),t!==null&&(Nr(t,1,e),Ee(t,e));break}}t=t.return}}function ap(e,t,n){var r=e.
pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(de&n)===n&&(oe===4||oe===3&&(de&130023424)===
de&&500>re()-ya?Ht(e,0):ga|=n),Ee(e,t)}function ad(e,t){t===0&&(e.mode&1?(t=$r,$r<<=1,!($r&130023424)&&($r=4194304)):t=1);
var n=we();e=ct(e,t),e!==null&&(Nr(e,t,n),Ee(e,n))}function sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ad(
e,n)}function up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:
r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),ad(e,n)}var sd;sd=function(e,t,n){if(e!==null)if(e.
memoizedProps!==t.pendingProps||Ne.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Xm(e,t,n);Ce=!!(e.flags&
131072)}else Ce=!1,Y&&t.flags&1048576&&fc(t,ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ui(e,t),e=t.pendingProps;
var i=Nn(t,ge.current);Sn(t,n),i=ca(null,t,r,e,i,n);var l=da();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.
render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(l=!0,Ci(t)):l=!1,t.memoizedState=
i.state!==null&&i.state!==void 0?i.state:null,la(t),i.updater=Qi,t.stateNode=i,i._reactInternals=t,go(t,r,e,n),t=wo(null,
t,r,!0,l,n)):(t.tag=0,Y&&l&&Jo(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ui(e,t),e=t.pendingProps,
i=r._init,r=i(r._payload),t.type=r,i=t.tag=dp(r),e=We(r,e),i){case 0:t=vo(null,t,r,e,n);break e;case 1:t=As(null,t,r,e,n);
break e;case 11:t=Fs(null,t,r,e,n);break e;case 14:t=Ds(null,t,r,We(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:
return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),vo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.
elementType===r?i:We(r,i),As(e,t,r,i,n);case 3:e:{if(Hc(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,
i=l.element,vc(e,t),Mi(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.
cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=
l,t.flags&256){i=Mn(Error(N(423)),t),t=$s(e,t,r,n,i);break e}else if(r!==i){i=Mn(Error(N(424)),t),t=$s(e,t,r,n,i);break e}else
for(Me=Et(t.stateNode.containerInfo.firstChild),Pe=t,Y=!0,Qe=null,n=gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,
n=n.sibling;else{if(jn(),r===i){t=dt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return wc(t),e===null&&mo(t),r=
t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,ao(r,i)?o=null:l!==null&&ao(r,l)&&(t.flags|=32),Wc(
e,t),ve(e,t,o,n),t.child;case 6:return e===null&&mo(t),null;case 13:return Qc(e,t,n);case 4:return oa(t,t.stateNode.containerInfo),
r=t.pendingProps,e===null?t.child=En(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===
r?i:We(r,i),Fs(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),
t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,
o=i.value,H(Ei,r._currentValue),r._currentValue=o,l!==null)if(Ye(l.value,o)){if(l.children===i.children&&!Ne.current){t=
dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.
firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=at(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;
var y=c.pending;y===null?s.next=s:(s.next=y.next,y.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),
po(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.
return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),po(o,n,t),o=l.sibling}else o=l.child;
if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}
o=o.return}l=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sn(t,n),i=$e(i),
r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),Ds(e,t,r,i,n);case 15:
return Vc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),ui(e,t),t.
tag=1,je(r)?(e=!0,Ci(t)):e=!1,Sn(t,n),Ac(t,r,i),go(t,r,i,n),wo(null,t,r,!0,e,n);case 19:return Kc(e,t,n);case 22:return Bc(
e,t,n)}throw Error(N(156,t.tag))};function ud(e,t){return Ou(e,t)}function cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=
this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.
dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.
deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new cp(e,t,n,r)}function xa(e){
return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=
e.$$typeof,e===$o)return 11;if(e===Uo)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,
t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=
t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=
e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.
dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,
n.ref=e.ref,n}function fi(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")xa(e)&&(o=1);else if(typeof e=="string")o=5;else
e:switch(e){case an:return Qt(n.children,i,l,t);case Ao:o=8,i|=8;break;case Al:return e=De(12,n,t,i|2),e.elementType=Al,
e.lanes=l,e;case $l:return e=De(13,n,t,i),e.elementType=$l,e.lanes=l,e;case Ul:return e=De(19,n,t,i),e.elementType=Ul,e.
lanes=l,e;case wu:return Yi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yu:o=10;break e;case vu:
o=9;break e;case $o:o=11;break e;case Uo:o=14;break e;case vt:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}
return t=De(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Qt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Yi(e,t,n,r){
return e=De(22,e,r,t),e.elementType=wu,e.lanes=n,e.stateNode={isHidden:!1},e}function Tl(e,t,n){return e=De(6,e,null,t),
e.lanes=n,e}function bl(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.
containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,n,r,i){this.tag=t,this.containerInfo=
e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=
this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=
this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),
this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sa(e,t,n,r,i,l,o,a,s){
return e=new fp(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=De(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState=
{element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},la(l),e}function mp(e,t,n){var r=3<
arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:on,key:r==null?null:""+r,children:e,containerInfo:t,
implementation:n}}function cd(e){if(!e)return bt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;
do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;
break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(je(n))return cc(e,n,t)}return t}function dd(e,t,n,r,i,l,o,a,s){
return e=Sa(n,r,!0,e,i,l,o,a,s),e.context=cd(null),n=e.current,r=we(),i=Pt(n),l=at(r,i),l.callback=t??null,Rt(n,l,i),e.current.
lanes=i,Nr(e,i,r),Ee(e,r),e}function Xi(e,t,n,r){var i=t.current,l=we(),o=Pt(i);return n=cd(n),t.context===null?t.context=
n:t.pendingContext=n,t=at(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,o),e!==null&&
(Ge(e,i,o,l),oi(e,i,o)),o}function Fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:
return e.child.stateNode}}function Xs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=
n!==0&&n<t?n:t}}function _a(e,t){Xs(e,t),(e=e.alternate)&&Xs(e,t)}function pp(){return null}var fd=typeof reportError=="\
function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}Zi.prototype.render=Ca.prototype.
render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Xi(e,t,null,null)};Zi.prototype.unmount=Ca.prototype.
unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Xi(
null,e,null,null)}),t[ut]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){
if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(
n,0,e),n===0&&Hu(e)}};function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ji(e){return!(!e||
e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zs(){}
function hp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Fi(o);l.call(c)}}var o=dd(t,r,e,0,null,
!1,!1,"",Zs);return e._reactRootContainer=o,e[ut]=o.current,hr(e.nodeType===8?e.parentNode:e),Zt(),o}for(;i=e.lastChild;)
e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fi(s);a.call(c)}}var s=Sa(e,0,!1,null,null,!1,!1,"",
Zs);return e._reactRootContainer=s,e[ut]=s.current,hr(e.nodeType===8?e.parentNode:e),Zt(function(){Xi(t,s,n,r)}),s}function qi(e,t,n,r,i){
var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Fi(o);a.call(s)}}Xi(t,o,e,
i)}else o=hp(n,t,e,i,r);return Fi(o)}Uu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){
var n=Xn(t.pendingLanes);n!==0&&(Wo(t,n|1),Ee(t,re()),!($&6)&&(Pn=re()+500,Ft()))}break;case 13:Zt(function(){var r=ct(e,
1);if(r!==null){var i=we();Ge(r,e,1,i)}}),_a(e,1)}};Ho=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=we();
Ge(t,e,134217728,n)}_a(e,134217728)}};Vu=function(e){if(e.tag===13){var t=Pt(e),n=ct(e,t);if(n!==null){var r=we();Ge(n,e,
t,r)}_a(e,t)}};Bu=function(){return W};Wu=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Zl=function(e,t,n){switch(t){case"\
input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("inp\
ut[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bi(r);
if(!i)throw Error(N(90));xu(r),Wl(r,i)}}}break;case"textarea":_u(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,
t,!1)}};Pu=va;Lu=Zt;var gp={usingClientEntryPoint:!1,Events:[Er,dn,Bi,Ru,Mu,va]},Wn={findFiberByHostInstance:Vt,bundleType:0,
version:"18.3.1",rendererPackageName:"react-dom"},yp={bundleType:Wn.bundleType,version:Wn.version,rendererPackageName:Wn.
rendererPackageName,rendererConfig:Wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,
overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,
scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zu(e),e===
null?null:e.stateNode},findFiberByHostInstance:Wn.findFiberByHostInstance||pp,findHostInstancesForRefresh:null,scheduleRefresh:null,
scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<
"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Ai=Zr.inject(yp),et=Zr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=
gp;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Na(t))throw Error(
N(200));return mp(e,t,null,n)};Te.createRoot=function(e,t){if(!Na(e))throw Error(N(299));var n=!1,r="",i=fd;return t!=null&&
(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=
t.onRecoverableError)),t=Sa(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,hr(e.nodeType===8?e.parentNode:e),new Ca(t)};Te.findDOMNode=
function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==
"function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=zu(t),e=e===null?null:e.stateNode,e};Te.flushSync=
function(e){return Zt(e)};Te.hydrate=function(e,t,n){if(!Ji(t))throw Error(N(200));return qi(null,e,t,!0,n)};Te.hydrateRoot=
function(e,t,n){if(!Na(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=fd;if(n!=null&&(n.unstable_strictMode===
!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),
t=dd(t,null,e,1,n??null,i,!1,l,o),e[ut]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.
mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);
return new Zi(t)};Te.render=function(e,t,n){if(!Ji(t))throw Error(N(200));return qi(null,e,t,!1,n)};Te.unmountComponentAtNode=
function(e){if(!Ji(e))throw Error(N(40));return e._reactRootContainer?(Zt(function(){qi(null,null,e,!1,function(){e._reactRootContainer=
null,e[ut]=null})}),!0):!1};Te.unstable_batchedUpdates=va;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ji(
n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return qi(e,t,n,!1,r)};Te.version="18.3\
.1-next-f1338f8080-20240426";function md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(md)}catch(e){console.error(e)}}md(),mu.exports=Te;var pd=mu.
exports,hd,Js=pd;hd=Js.createRoot,Js.hydrateRoot;function Jr(e,t){const[n,r]=x.useState(t),[i,l]=x.useState(!1),[o,a]=x.
useState("");x.useEffect(()=>{try{const c=window.localStorage.getItem("sft:"+e);if(c!=null){const y=JSON.parse(c),p=t!==
null&&typeof t=="object"&&!Array.isArray(t)&&y!==null&&typeof y=="object"&&!Array.isArray(y)?{...t,...y}:y;r(p)}}catch{a(
"Saved data on this browser could not be read.")}l(!0)},[e]);const s=x.useCallback(c=>{r(y=>{const p=typeof c=="function"?
c(y):c;try{window.localStorage.setItem("sft:"+e,JSON.stringify(p))}catch{a("This browser blocked saving. Changes last un\
til the tab closes.")}return p})},[e]);return[n,s,{ready:i,message:o}]}const vp={longer:["images/images/longer-0.txt","i\
mages/images/longer-1.txt","images/images/longer-2.txt","images/images/longer-3.txt","images/images/longer-4.txt","image\
s/images/longer-5.txt"],curated:["images/images/curated-0.txt"],rain:["images/images/rain-0.txt","images/images/rain-1.t\
xt"],"thumb-rain":["images/images/thumb-rain-0.txt"],library:["images/images/library-0.txt","images/images/library-1.txt",
"images/images/library-2.txt","images/images/library-3.txt","images/images/library-4.txt"],"thumb-library":["images/imag\
es/thumb-library-0.txt"],coffee:["images/images/coffee-0.txt","images/images/coffee-1.txt","images/images/coffee-2.txt"],
"thumb-coffee":["images/images/thumb-coffee-0.txt"],desk:["images/images/desk-0.txt","images/images/desk-1.txt","images/\
images/desk-2.txt"],"thumb-desk":["images/images/thumb-desk-0.txt"],mountains:["images/images/mountains-0.txt","images/i\
mages/mountains-1.txt","images/images/mountains-2.txt","images/images/mountains-3.txt","images/images/mountains-4.txt","\
images/images/mountains-5.txt"],"thumb-mountains":["images/images/thumb-mountains-0.txt"],forest:["images/images/forest-\
0.txt","images/images/forest-1.txt","images/images/forest-2.txt","images/images/forest-3.txt"],"thumb-forest":["images/i\
mages/thumb-forest-0.txt"],stars:["images/images/stars-0.txt"],"thumb-stars":["images/images/thumb-stars-0.txt"],ocean:[
"images/images/ocean-0.txt","images/images/ocean-1.txt","images/images/ocean-2.txt"],"thumb-ocean":["images/images/thumb\
-ocean-0.txt"],catalog:["images/images/catalog-0.txt","images/images/catalog-1.txt","images/images/catalog-2.txt","image\
s/images/catalog-3.txt","images/images/catalog-4.txt","images/images/catalog-5.txt","images/images/catalog-6.txt"]},zl={};
function ja(e){return zl[e]||(zl[e]=Promise.all(vp[e].map(async t=>{const n=await fetch(t);if(!n.ok)throw Error("Image u\
navailable");return n.text()})).then(t=>"data:image/jpeg;base64,"+t.join("").replace(/\s/g,"")))}function gd(e){const[t,
n]=x.useState("");return x.useEffect(()=>{let r=!0;return ja(e).then(i=>{r&&n(i)}).catch(()=>{}),()=>{r=!1}},[e]),t}const wp={
rain:"photos/12-rain.jpg",library:"photos/13-library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk.jpg",mountains:"\
photos/28-mountains.jpg",forest:"photos/17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-ocean.jpg"},kp={rain:"\
thumbs/20-rain.jpg",library:"thumbs/21-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-desk.jpg",mountains:"t\
humbs/24-mountains.jpg",forest:"thumbs/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-ocean.jpg"},qs=Object.
fromEntries(Object.keys(wp).map(e=>[e,()=>ja(e).then(t=>({default:t}))])),eu=Object.fromEntries(Object.keys(kp).map(e=>[
e,()=>ja("thumb-"+e).then(t=>({default:t}))])),Il={},Ol={},Fl={focusMin:25,shortMin:5,longMin:15,longEvery:4,autoBreaks:!1,
autoFocus:!1,alarmSound:"bell",alarmVolume:.8,alarmRepeat:!0,customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,notifications:!1,
keepAwake:!1,background:{kind:"builtin",id:"rain"},bgAnimate:!0,customFit:"cover",enhance:!0,scrim:.45,accent:"#9fd8c6",
font:"sans",clockStyle:"ring",clockSize:"m",showDots:!0,showChip:!0,showHint:!0,spotify:null,spotifyOpen:!1},xp=[{id:"ra\
in",name:"Rainy window"},{id:"library",name:"Library"},{id:"coffee",name:"Coffee notes"},{id:"desk",name:"Night desk"},{
id:"mountains",name:"Mountains"},{id:"forest",name:"Misty forest"},{id:"stars",name:"Night sky"},{id:"ocean",name:"Ocean"}],
mi=[{id:"dusk",name:"Dusk",css:"linear-gradient(160deg, #232453 0%, #6b3f63 55%, #c96f4a 100%)"},{id:"moss",name:"Moss",
css:"linear-gradient(160deg, #0f2e25 0%, #1d5c46 60%, #7ea87b 100%)"},{id:"ink",name:"Ink",css:"linear-gradient(160deg, \
#101418 0%, #1f2a33 100%)"},{id:"dawn",name:"Dawn",css:"linear-gradient(160deg, #3b2f4a 0%, #8a5a6e 55%, #e8a87c 100%)"}],
yd=[{id:"aurora",name:"Aurora"},{id:"meteor",name:"Falling stars"},{id:"waves",name:"Night waves"},{id:"rainfall",name:"\
Rain streaks"}],Ea=[{id:"shrine",name:"Moonlit shrine",url:"https://cdn.pixabay.com/video/2026/04/22/348164_large.mp4",tile:0,
preview:"curated",duration:5},{id:"rainy-window",name:"Rainy window",url:"https://cdn.pixabay.com/video/2026/09/15/37643\
3_medium.mp4",tile:1,preview:"curated",duration:8},{id:"misty-river",name:"Misty river",url:"https://cdn.pixabay.com/vid\
eo/2026/04/05/344726_medium.mp4",tile:2,preview:"curated",duration:24},{id:"water-garden",name:"Water garden",url:"https\
://cdn.pixabay.com/video/2025/07/12/290959_medium.mp4",tile:3,preview:"curated",duration:9.633333},{id:"sakura-night",name:"\
Island moon",url:"https://cdn.pixabay.com/video/2023/03/22/155672-810706799_large.mp4",tile:4,preview:"curated",duration:60.116667},
{id:"night-train",name:"Night train",url:"https://cdn.pixabay.com/video/2025/10/23/311602_medium.mp4",tile:5,preview:"cu\
rated",duration:64},{id:"cozy-window",name:"Rainy desk",url:"https://cdn.pixabay.com/video/2026/09/13/376049_large.mp4",
tile:7,preview:"curated",duration:6},{id:"balcony-dusk",name:"Evening balcony",url:"https://cdn.pixabay.com/video/2026/0\
9/15/376434_medium.mp4",tile:8,preview:"curated",duration:8}],Sp=[{id:"long-215407",name:"Rainy study window",url:"https\
://cdn.pixabay.com/video/2024/06/05/215407_medium.mp4",tile:0,preview:"longer",duration:60.093367},{id:"long-297863",name:"\
Rainlit reading nook",url:"https://cdn.pixabay.com/video/2025/08/17/297863_medium.mp4",tile:1,preview:"longer",duration:64},
{id:"long-265906",name:"Neon rainy lounge",url:"https://cdn.pixabay.com/video/2025/03/19/265906_medium.mp4",tile:2,preview:"\
longer",duration:60},{id:"long-276498",name:"Night desk journal",url:"https://cdn.pixabay.com/video/2025/05/03/276498_me\
dium.mp4",tile:3,preview:"longer",duration:52.066667},{id:"long-311563",name:"Umbrella city",url:"https://cdn.pixabay.co\
m/video/2025/10/23/311563_medium.mp4",tile:4,preview:"longer",duration:61.166667},{id:"long-180170",name:"Neon alley pud\
dles",url:"https://cdn.pixabay.com/video/2023/09/11/180170-863654648_medium.mp4",tile:5,preview:"longer",duration:24.875},
{id:"long-229537",name:"Moonlit river window",url:"https://cdn.pixabay.com/video/2024/09/03/229537_medium.mp4",tile:6,preview:"\
longer",duration:30.03},{id:"long-211097",name:"Cabin porch fire",url:"https://cdn.pixabay.com/video/2024/05/07/211097_m\
edium.mp4",tile:7,preview:"longer",duration:30},{id:"long-246535",name:"Window cat at dusk",url:"https://cdn.pixabay.com\
/video/2024/12/13/246535_medium.mp4",tile:8,preview:"longer",duration:58.5585},{id:"long-246241",name:"Rainy sofa cat",url:"\
https://cdn.pixabay.com/video/2024/12/11/246241_medium.mp4",tile:9,preview:"longer",duration:75.341933},{id:"long-204116",
name:"Firelit cabin",url:"https://cdn.pixabay.com/video/2024/03/14/204116-923594064_medium.mp4",tile:10,preview:"longer",
duration:30},{id:"long-248668",name:"Lavender lounge",url:"https://cdn.pixabay.com/video/2024/12/25/248668_medium.mp4",tile:11,
preview:"longer",duration:20},{id:"long-371447",name:"City cat companion",url:"https://cdn.pixabay.com/video/2026/08/19/\
371447_medium.mp4",tile:12,preview:"longer",duration:60.165704},{id:"long-379222",name:"City blues",url:"https://cdn.pix\
abay.com/video/2026/09/27/379222_medium.mp4",tile:13,preview:"longer",duration:20.1201},{id:"long-345856",name:"Sleepy d\
esk cat",url:"https://cdn.pixabay.com/video/2026/04/11/345856_medium.mp4",tile:14,preview:"longer",duration:64},{id:"lon\
g-312345",name:"Lamp and sleeping cat",url:"https://cdn.pixabay.com/video/2025/10/27/312345_medium.mp4",tile:15,preview:"\
longer",duration:64},{id:"long-271841",name:"Rainy study companion",url:"https://cdn.pixabay.com/video/2025/04/13/271841\
_medium.mp4",tile:16,preview:"longer",duration:67.8},{id:"long-297736",name:"Rooftop study",url:"https://cdn.pixabay.com\
/video/2025/08/16/297736_medium.mp4",tile:17,preview:"longer",duration:72},{id:"long-246242",name:"Sleeping hearth cat",
url:"https://cdn.pixabay.com/video/2024/12/11/246242_medium.mp4",tile:18,preview:"longer",duration:58.691967},{id:"long-\
246243",name:"Dusk window cat",url:"https://cdn.pixabay.com/video/2024/12/11/246243_medium.mp4",tile:19,preview:"longer",
duration:76.709967},{id:"long-202823",name:"Candlelit library",url:"https://cdn.pixabay.com/video/2024/03/03/202823-9190\
00176_medium.mp4",tile:20,preview:"longer",duration:30},{id:"long-75368",name:"Old-town rain",url:"https://cdn.pixabay.c\
om/video/2021/05/26/75368-555547951_medium.mp4",tile:21,preview:"longer",duration:32.873333},{id:"long-38271",name:"Stor\
m at sea",url:"https://cdn.pixabay.com/video/2020/05/06/38271-415950897_medium.mp4",tile:22,preview:"longer",duration:58.516667},
{id:"long-360380",name:"Library afternoon",url:"https://cdn.pixabay.com/video/2026/06/23/360380_medium.mp4",tile:23,preview:"\
longer",duration:22.208333},{id:"long-310025",name:"Night study wall",url:"https://cdn.pixabay.com/video/2025/10/15/3100\
25_medium.mp4",tile:24,preview:"longer",duration:64},{id:"long-330062",name:"City laptop glow",url:"https://cdn.pixabay.\
com/video/2026/01/24/330062_medium.mp4",tile:25,preview:"longer",duration:63.533333},{id:"long-345838",name:"Library dog",
url:"https://cdn.pixabay.com/video/2026/04/11/345838_medium.mp4",tile:26,preview:"longer",duration:61.4},{id:"long-21108\
9",name:"Autumn porch",url:"https://cdn.pixabay.com/video/2024/05/07/211089_medium.mp4",tile:27,preview:"longer",duration:30},
{id:"long-301247",name:"Retro train cat",url:"https://cdn.pixabay.com/video/2025/09/02/301247_medium.mp4",tile:28,preview:"\
longer",duration:29.866667},{id:"long-208856",name:"Cottage candlelight",url:"https://cdn.pixabay.com/video/2024/04/21/2\
08856_medium.mp4",tile:29,preview:"longer",duration:30},{id:"long-257953",name:"Rainy woodland lounge",url:"https://cdn.\
pixabay.com/video/2025/02/13/257953_medium.mp4",tile:30,preview:"longer",duration:30.03},{id:"long-258729",name:"Red rai\
ny room",url:"https://cdn.pixabay.com/video/2025/02/17/258729_medium.mp4",tile:31,preview:"longer",duration:30.03},{id:"\
long-251562",name:"Ancient forest",url:"https://cdn.pixabay.com/video/2025/01/09/251562_medium.mp4",tile:32,preview:"lon\
ger",duration:60.266667},{id:"long-243696",name:"Mountain lodge window",url:"https://cdn.pixabay.com/video/2024/11/28/24\
3696_medium.mp4",tile:33,preview:"longer",duration:30},{id:"long-247096",name:"Classic hearth room",url:"https://cdn.pix\
abay.com/video/2024/12/17/247096_medium.mp4",tile:34,preview:"longer",duration:30},{id:"long-168104",name:"Moonlit loung\
e",url:"https://cdn.pixabay.com/video/2023/06/20/168104-838533643_medium.mp4",tile:35,preview:"longer",duration:60.06},{
id:"long-205001",name:"Candlelit studio",url:"https://cdn.pixabay.com/video/2024/03/21/205001-926015670_medium.mp4",tile:36,
preview:"longer",duration:30.058333},{id:"long-182592",name:"Round-door library",url:"https://cdn.pixabay.com/video/2023\
/09/27/182592-868916643_medium.mp4",tile:37,preview:"longer",duration:39.833333},{id:"long-166272",name:"Ember-lit room",
url:"https://cdn.pixabay.com/video/2023/06/08/166272-834580690_medium.mp4",tile:38,preview:"longer",duration:60.116667},
{id:"long-120583",name:"Rainy bedroom",url:"https://cdn.pixabay.com/video/2022/06/17/120583-721287175_medium.mp4",tile:39,
preview:"longer",duration:29.631667},{id:"long-236040",name:"Mountain lake bedroom",url:"https://cdn.pixabay.com/video/2\
024/10/12/236040_medium.mp4",tile:40,preview:"longer",duration:30.03},{id:"long-181971",name:"Hilltop sunset",url:"https\
://cdn.pixabay.com/video/2023/09/23/181971-867576062_medium.mp4",tile:41,preview:"longer",duration:60.06},{id:"long-2592\
93",name:"Round-door fire",url:"https://cdn.pixabay.com/video/2025/02/18/259293_medium.mp4",tile:42,preview:"longer",duration:30.03},
{id:"long-253904",name:"Snowy city window",url:"https://cdn.pixabay.com/video/2025/01/22/253904_medium.mp4",tile:43,preview:"\
longer",duration:60},{id:"long-267347",name:"Sunset city lounge",url:"https://cdn.pixabay.com/video/2025/03/25/267347_me\
dium.mp4",tile:44,preview:"longer",duration:60},{id:"long-208105",name:"Forest library",url:"https://cdn.pixabay.com/vid\
eo/2024/04/15/208105_medium.mp4",tile:45,preview:"longer",duration:30},{id:"long-156473",name:"Rainy sunset room",url:"h\
ttps://cdn.pixabay.com/video/2023/03/28/156473-812592018_medium.mp4",tile:46,preview:"longer",duration:60.138333},{id:"l\
ong-201968",name:"Fireside tabby",url:"https://cdn.pixabay.com/video/2024/02/25/201968-916877887_medium.mp4",tile:47,preview:"\
longer",duration:30.08},{id:"long-108292",name:"Victorian fire",url:"https://cdn.pixabay.com/video/2022/02/20/108292-680\
195115_medium.mp4",tile:48,preview:"longer",duration:60.01},{id:"long-201179",name:"Rainy mountain retreat",url:"https:/\
/cdn.pixabay.com/video/2024/02/20/201179-914924544_medium.mp4",tile:49,preview:"longer",duration:58.123333},{id:"long-20\
8621",name:"Blue mountain bedroom",url:"https://cdn.pixabay.com/video/2024/04/19/208621_medium.mp4",tile:50,preview:"lon\
ger",duration:20.04},{id:"long-204238",name:"Sunlit bookcase",url:"https://cdn.pixabay.com/video/2024/03/15/204238-92390\
9572_medium.mp4",tile:51,preview:"longer",duration:31.978333},{id:"long-205644",name:"Warm timber library",url:"https://\
cdn.pixabay.com/video/2024/03/25/205644-927347938_medium.mp4",tile:52,preview:"longer",duration:30},{id:"long-205634",name:"\
Indoor garden library",url:"https://cdn.pixabay.com/video/2024/03/25/205634-927347905_medium.mp4",tile:53,preview:"longe\
r",duration:30},{id:"long-209220",name:"Snowy fireplace bedroom",url:"https://cdn.pixabay.com/video/2024/04/24/209220_me\
dium.mp4",tile:54,preview:"longer",duration:30},{id:"long-337559",name:"Rainy high-rise",url:"https://cdn.pixabay.com/vi\
deo/2026/03/02/337559_medium.mp4",tile:55,preview:"longer",duration:64.8},{id:"long-210278",name:"Quiet bookshelf nook",
url:"https://cdn.pixabay.com/video/2024/05/01/210278_medium.mp4",tile:56,preview:"longer",duration:30},{id:"long-219025",
name:"Sunlit mountain lounge",url:"https://cdn.pixabay.com/video/2024/07/01/219025_medium.mp4",tile:57,preview:"longer",
duration:30.03},{id:"long-267920",name:"Classic book room",url:"https://cdn.pixabay.com/video/2025/03/27/267920_medium.m\
p4",tile:58,preview:"longer",duration:30.03},{id:"long-208089",name:"Golden reading room",url:"https://cdn.pixabay.com/v\
ideo/2024/04/15/208089_medium.mp4",tile:59,preview:"longer",duration:30},{id:"long-258614",name:"Rain on glass",url:"htt\
ps://cdn.pixabay.com/video/2025/02/16/258614_medium.mp4",tile:60,preview:"longer",duration:30.9},{id:"long-181977",name:"\
Sunset forest lounge",url:"https://cdn.pixabay.com/video/2023/09/23/181977-867576065_medium.mp4",tile:61,preview:"longer",
duration:60.06},{id:"long-167688",name:"Forest rain windows",url:"https://cdn.pixabay.com/video/2023/06/18/167688-837428\
971_medium.mp4",tile:62,preview:"longer",duration:60.138333},{id:"long-188977",name:"Round-window lounge",url:"https://c\
dn.pixabay.com/video/2023/11/13/188977-884185356_medium.mp4",tile:63,preview:"longer",duration:60.116667},{id:"long-2081\
06",name:"Sunbeam lodge",url:"https://cdn.pixabay.com/video/2024/04/15/208106_medium.mp4",tile:64,preview:"longer",duration:30},
{id:"long-181947",name:"Warm sunset lounge",url:"https://cdn.pixabay.com/video/2023/09/23/181947-867576048_medium.mp4",tile:65,
preview:"longer",duration:60.06},{id:"long-298922",name:"Mountain study lounge",url:"https://cdn.pixabay.com/video/2025/\
08/21/298922_medium.mp4",tile:66,preview:"longer",duration:30.033333},{id:"long-209881",name:"Sunlit green room",url:"ht\
tps://cdn.pixabay.com/video/2024/04/29/209881_medium.mp4",tile:67,preview:"longer",duration:30},{id:"long-261757",name:"\
Rainy city apartment",url:"https://cdn.pixabay.com/video/2025/03/01/261757_medium.mp4",tile:68,preview:"longer",duration:60},
{id:"long-324169",name:"Rainy timber bedroom",url:"https://cdn.pixabay.com/video/2025/12/24/324169_medium.mp4",tile:69,preview:"\
longer",duration:30},{id:"long-340848",name:"Mountain night retreat",url:"https://cdn.pixabay.com/video/2026/03/18/34084\
8_medium.mp4",tile:70,preview:"longer",duration:60},{id:"long-266428",name:"Snowy shrine lantern",url:"https://cdn.pixab\
ay.com/video/2025/03/21/266428_medium.mp4",tile:72,preview:"longer",duration:27.483333},{id:"long-225944",name:"Lantern \
street",url:"https://cdn.pixabay.com/video/2024/08/11/225944_medium.mp4",tile:73,preview:"longer",duration:30},{id:"long\
-265909",name:"Anime river sunset",url:"https://cdn.pixabay.com/video/2025/03/19/265909_medium.mp4",tile:74,preview:"lon\
ger",duration:60},{id:"long-281165",name:"Violet Mount Fuji",url:"https://cdn.pixabay.com/video/2025/05/23/281165_medium\
.mp4",tile:75,preview:"longer",duration:30},{id:"long-153086",name:"Snowy Kyoto lane",url:"https://cdn.pixabay.com/video\
/2023/03/04/153086-846385128_medium.mp4",tile:76,preview:"longer",duration:52.51},{id:"long-185425",name:"Stormy mountai\
n garden",url:"https://cdn.pixabay.com/video/2023/10/17/185425-875362672_medium.mp4",tile:77,preview:"longer",duration:25},
{id:"long-158195",name:"Moonlit cherry pond",url:"https://cdn.pixabay.com/video/2023/04/10/158195-816372976_medium.mp4",
tile:78,preview:"longer",duration:60.053333},{id:"long-189472",name:"Snowy shrine gate",url:"https://cdn.pixabay.com/vid\
eo/2023/11/17/189472-885804489_medium.mp4",tile:79,preview:"longer",duration:60.053333},{id:"long-214500",name:"Night li\
brary student",url:"https://cdn.pixabay.com/video/2024/05/30/214500_medium.mp4",tile:80,preview:"longer",duration:63.229833},
{id:"long-314688",name:"Sunset headphones",url:"https://cdn.pixabay.com/video/2025/11/08/314688_medium.mp4",tile:81,preview:"\
longer",duration:64},{id:"long-345955",name:"Cozy room companion",url:"https://cdn.pixabay.com/video/2026/04/12/345955_m\
edium.mp4",tile:82,preview:"longer",duration:64},{id:"long-208093",name:"Coffee shop hearth",url:"https://cdn.pixabay.co\
m/video/2024/04/15/208093_medium.mp4",tile:83,preview:"longer",duration:30},{id:"long-209201",name:"Garden porch",url:"h\
ttps://cdn.pixabay.com/video/2024/04/24/209201_medium.mp4",tile:84,preview:"longer",duration:20},{id:"long-204117",name:"\
Tea by the fire",url:"https://cdn.pixabay.com/video/2024/03/14/204117-923594068_medium.mp4",tile:85,preview:"longer",duration:30},
{id:"long-246984",name:"Covered forest porch",url:"https://cdn.pixabay.com/video/2024/12/16/246984_medium.mp4",tile:86,preview:"\
longer",duration:30},{id:"long-267296",name:"Round-door storybook",url:"https://cdn.pixabay.com/video/2025/03/25/267296_\
medium.mp4",tile:87,preview:"longer",duration:60},{id:"long-301045",name:"Rainy fireside study",url:"https://cdn.pixabay\
.com/video/2025/09/01/301045_medium.mp4",tile:88,preview:"longer",duration:60.5},{id:"long-297472",name:"Moonclock loung\
e",url:"https://cdn.pixabay.com/video/2025/08/14/297472_medium.mp4",tile:89,preview:"longer",duration:30},{id:"long-2429\
24",name:"Snowy coffee shop",url:"https://cdn.pixabay.com/video/2024/11/23/242924_medium.mp4",tile:90,preview:"longer",duration:60},
{id:"long-243342",name:"Winter cafe",url:"https://cdn.pixabay.com/video/2024/11/26/243342_medium.mp4",tile:91,preview:"l\
onger",duration:60},{id:"long-286806",name:"Open book garden",url:"https://cdn.pixabay.com/video/2025/06/20/286806_mediu\
m.mp4",tile:92,preview:"longer",duration:30.03},{id:"long-244452",name:"Snowy porch chair",url:"https://cdn.pixabay.com/\
video/2024/12/02/244452_medium.mp4",tile:93,preview:"longer",duration:30},{id:"long-244362",name:"Snowy cabin deck",url:"\
https://cdn.pixabay.com/video/2024/12/02/244362_medium.mp4",tile:94,preview:"longer",duration:30},{id:"long-210707",name:"\
Autumn porch hearth",url:"https://cdn.pixabay.com/video/2024/05/05/210707_medium.mp4",tile:95,preview:"longer",duration:30},
{id:"long-309388",name:"Dusk window reader",url:"https://cdn.pixabay.com/video/2025/10/12/309388_medium.mp4",tile:96,preview:"\
longer",duration:64},{id:"long-265815",name:"Neon headphones",url:"https://cdn.pixabay.com/video/2025/03/18/265815_mediu\
m.mp4",tile:97,preview:"longer",duration:59.993267},{id:"long-266042",name:"Pale winter lounge",url:"https://cdn.pixabay\
.com/video/2025/03/19/266042_medium.mp4",tile:98,preview:"longer",duration:30.03},{id:"long-325442",name:"Pink-haired st\
udy",url:"https://cdn.pixabay.com/video/2026/01/01/325442_medium.mp4",tile:99,preview:"longer",duration:30},{id:"long-26\
5816",name:"Night laptop study",url:"https://cdn.pixabay.com/video/2025/03/18/265816_medium.mp4",tile:100,preview:"longe\
r",duration:59.993267}],_p=[{id:"anime-lofi-rain-363709",name:"Rainy bus stop",url:"https://cdn.pixabay.com/video/2026/0\
7/13/363709_medium.mp4",tile:0,duration:10},{id:"anime-lofi-record-363710",name:"Record shop",url:"https://cdn.pixabay.c\
om/video/2026/07/13/363710_medium.mp4",tile:1,duration:10},{id:"autumn-forest-trees-313784",name:"Autumn nook",url:"http\
s://cdn.pixabay.com/video/2025/11/04/313784_medium.mp4",tile:3,duration:30},{id:"autumn-forest-trees-313787",name:"Lakes\
ide campfire",url:"https://cdn.pixabay.com/video/2025/11/04/313787_medium.mp4",tile:4,duration:30},{id:"autumn-nature-ca\
bin-324160",name:"Cabin bedroom",url:"https://cdn.pixabay.com/video/2025/12/24/324160_medium.mp4",tile:5,duration:30},{id:"\
autumn-nature-cabin-324164",name:"Forest cabin",url:"https://cdn.pixabay.com/video/2025/12/24/324164_medium.mp4",tile:6,
duration:30},{id:"bioluminescence-beach-waves-343671",name:"Starlit shore",url:"https://cdn.pixabay.com/video/2026/03/31\
/343671_medium.mp4",tile:9,duration:20.125},{id:"bioluminescence-beach-waves-346010",name:"Midnight waves",url:"https://\
cdn.pixabay.com/video/2026/04/12/346010_medium.mp4",tile:10,duration:15},{id:"bioluminescence-bioluminescent-ocean-38155\
2",name:"Glowing ocean",url:"https://cdn.pixabay.com/video/2026/10/08/381552_medium.mp4",tile:11,duration:15.041667},{id:"\
bioluminescent-beach-375118-375118",name:"Aurora coast",url:"https://cdn.pixabay.com/video/2026/09/08/375118_medium.mp4",
tile:12,duration:15.041667},{id:"boats-moon-moonlight-381338",name:"Moonlit boats",url:"https://cdn.pixabay.com/video/20\
26/10/07/381338_medium.mp4",tile:13,duration:15.041667},{id:"bonfire-flames-fire-201688-916116512",name:"Bonfire",url:"h\
ttps://cdn.pixabay.com/video/2024/02/23/201688-916116512_medium.mp4",tile:14,duration:44.223333},{id:"book-candle-stars-\
184469-873483892",name:"Candlelit book",url:"https://cdn.pixabay.com/video/2023/10/10/184469-873483892_medium.mp4",tile:15,
duration:30.08},{id:"book-study-books-347655",name:"Library fire",url:"https://cdn.pixabay.com/video/2026/04/19/347655_m\
edium.mp4",tile:16,duration:6.3},{id:"campfire-bonfire-flames-225422",name:"Campfire embers",url:"https://cdn.pixabay.co\
m/video/2024/08/08/225422_medium.mp4",tile:17,duration:11.9},{id:"candle-flame-advent-311235",name:"Rainy candle",url:"h\
ttps://cdn.pixabay.com/video/2025/10/21/311235_medium.mp4",tile:18,duration:19.291667},{id:"candle-flame-advent-312390",
name:"Candlelight",url:"https://cdn.pixabay.com/video/2025/10/28/312390_medium.mp4",tile:19,duration:13.6},{id:"city-sta\
rry-sky-310146",name:"Purple night",url:"https://cdn.pixabay.com/video/2025/10/15/310146_medium.mp4",tile:22,duration:8.083333},
{id:"coffee-cup-rest-309872",name:"Rainy coffee",url:"https://cdn.pixabay.com/video/2025/10/14/309872_medium.mp4",tile:23,
duration:12},{id:"coffee-living-room-237103",name:"Fireside coffee",url:"https://cdn.pixabay.com/video/2024/10/19/237103\
_medium.mp4",tile:24,duration:17.666667},{id:"coffee-tea-steam-285759",name:"Morning steam",url:"https://cdn.pixabay.com\
/video/2025/06/13/285759_medium.mp4",tile:25,duration:5.64},{id:"couch-sofa-rain-185888-876579680",name:"Forest lounge",
url:"https://cdn.pixabay.com/video/2023/10/20/185888-876579680_medium.mp4",tile:27,duration:6},{id:"cozy-bedroom-289797-\
289797",name:"Cozy bedroom",url:"https://cdn.pixabay.com/video/2025/07/06/289797_medium.mp4",tile:28,duration:30},{id:"c\
ozy-bedroom-modern-290857",name:"Rainy bedroom",url:"https://cdn.pixabay.com/video/2025/07/12/290857_medium.mp4",tile:29,
duration:24},{id:"cozy-bedroom-modern-290943",name:"Quiet suite",url:"https://cdn.pixabay.com/video/2025/07/12/290943_me\
dium.mp4",tile:30,duration:24},{id:"cozy-bedroom-modern-290944",name:"Window retreat",url:"https://cdn.pixabay.com/video\
/2025/07/12/290944_medium.mp4",tile:31,duration:24},{id:"creek-snow-winter-190915-888878158",name:"Snowy creek",url:"htt\
ps://cdn.pixabay.com/video/2023/11/27/190915-888878158_medium.mp4",tile:33,duration:50.133333},{id:"dark-ocean-ocean-372\
868",name:"Ocean doorway",url:"https://cdn.pixabay.com/video/2026/08/27/372868_medium.mp4",tile:34,duration:10.3},{id:"d\
ark-ocean-ocean-372869",name:"Stormy pier",url:"https://cdn.pixabay.com/video/2026/08/27/372869_medium.mp4",tile:35,duration:12.633333},
{id:"dark-room-storm-369507",name:"Rainy room",url:"https://cdn.pixabay.com/video/2026/08/09/369507_medium.mp4",tile:36,
duration:10},{id:"dream-nature-fantasy-297586",name:"Winter cottage",url:"https://cdn.pixabay.com/video/2025/08/15/29758\
6_medium.mp4",tile:37,duration:7.733333},{id:"fireplace-fire-heat-327084",name:"Fireplace",url:"https://cdn.pixabay.com/\
video/2026/01/11/327084_medium.mp4",tile:38,duration:12.04},{id:"fireplace-winter-snow-347140",name:"Snowy lounge",url:"\
https://cdn.pixabay.com/video/2026/04/17/347140_medium.mp4",tile:39,duration:16},{id:"flowers-tree-moon-179020-861022089",
name:"Moonlit blossoms",url:"https://cdn.pixabay.com/video/2023/09/03/179020-861022089_medium.mp4",tile:40,duration:7.21},
{id:"landscape-waterfall-water-298040",name:"Forest falls",url:"https://cdn.pixabay.com/video/2025/08/18/298040_medium.m\
p4",tile:44,duration:33.383333},{id:"library-books-363706-363706",name:"Library desk",url:"https://cdn.pixabay.com/video\
/2026/07/13/363706_medium.mp4",tile:45,duration:10},{id:"loop-ocean-nature-358453",name:"Silver waves",url:"https://cdn.\
pixabay.com/video/2026/06/14/358453_medium.mp4",tile:49,duration:15.041667},{id:"luxury-bedroom-cozy-290401",name:"Night\
 lounge",url:"https://cdn.pixabay.com/video/2025/07/09/290401_medium.mp4",tile:50,duration:30},{id:"moon-full-moon-37040\
3",name:"Sunset ocean",url:"https://cdn.pixabay.com/video/2026/08/13/370403_medium.mp4",tile:52,duration:5},{id:"moon-na\
ture-night-290116",name:"Crimson moon",url:"https://cdn.pixabay.com/video/2025/07/08/290116_medium.mp4",tile:53,duration:8.4},
{id:"moon-night-sky-256347",name:"Still moonlight",url:"https://cdn.pixabay.com/video/2025/02/04/256347_medium.mp4",tile:54,
duration:15.133182},{id:"moon-trees-forest-183967-872226594",name:"Forest moon",url:"https://cdn.pixabay.com/video/2023/\
10/07/183967-872226594_medium.mp4",tile:55,duration:7.615},{id:"moonlight-patrol-boat-290456",name:"Moonlit sail",url:"h\
ttps://cdn.pixabay.com/video/2025/07/10/290456_medium.mp4",tile:56,duration:5.066667},{id:"mountains-lake-water-124774-7\
32319023",name:"Alpine lake",url:"https://cdn.pixabay.com/video/2022/07/20/124774-732319023_medium.mp4",tile:57,duration:20.01},
{id:"nature-night-moonlight-313411",name:"Golden moon",url:"https://cdn.pixabay.com/video/2025/11/02/313411_medium.mp4",
tile:58,duration:7.6},{id:"night-view-moon-143565-782758320",name:"City moon",url:"https://cdn.pixabay.com/video/2022/12\
/19/143565-782758320_medium.mp4",tile:60,duration:12.011667},{id:"night-view-yamadas-283431",name:"Night sky",url:"https\
://cdn.pixabay.com/video/2025/06/03/283431_medium.mp4",tile:61,duration:8.966667},{id:"ocean-night-stars-377557",name:"S\
hip at night",url:"https://cdn.pixabay.com/video/2026/09/19/377557_medium.mp4",tile:62,duration:30.066667},{id:"ocean-se\
a-fog-299418",name:"Misty ocean",url:"https://cdn.pixabay.com/video/2025/08/24/299418_medium.mp4",tile:64,duration:10.4},
{id:"ocean-sea-waves-174033-850286651",name:"Blue moon coast",url:"https://cdn.pixabay.com/video/2023/07/31/174033-85028\
6651_medium.mp4",tile:65,duration:7.04},{id:"ocean-sea-waves-232793",name:"Rocky sea",url:"https://cdn.pixabay.com/video\
/2024/09/23/232793_medium.mp4",tile:66,duration:60.026633},{id:"purple-cosmic-space-278396",name:"Purple cosmos",url:"ht\
tps://cdn.pixabay.com/video/2025/05/12/278396_medium.mp4",tile:67,duration:52.2},{id:"radio-tower-night-211067",name:"To\
kyo tower",url:"https://cdn.pixabay.com/video/2024/05/07/211067_medium.mp4",tile:68,duration:31.08105},{id:"rain-cobbles\
tone-puddle-380412",name:"Rainy cobbles",url:"https://cdn.pixabay.com/video/2026/10/02/380412_medium.mp4",tile:69,duration:14.166667},
{id:"rain-leaves-foliage-227700",name:"Rainy leaves",url:"https://cdn.pixabay.com/video/2024/08/21/227700_medium.mp4",tile:70,
duration:24},{id:"rain-outside-372862-372862",name:"Storm lounge",url:"https://cdn.pixabay.com/video/2026/08/27/372862_m\
edium.mp4",tile:72,duration:10},{id:"rain-raining-raindrops-199501-910530342",name:"Rainy puddles",url:"https://cdn.pixa\
bay.com/video/2024/02/06/199501-910530342_medium.mp4",tile:73,duration:11.36},{id:"sea-coast-japan-197525-905005651",name:"\
Quiet coast",url:"https://cdn.pixabay.com/video/2024/01/21/197525-905005651_medium.mp4",tile:76,duration:37.845},{id:"se\
a-full-moon-227600",name:"Moonlit surf",url:"https://cdn.pixabay.com/video/2024/08/20/227600_medium.mp4",tile:77,duration:15.041783},
{id:"sea-ocean-waves-269357",name:"Moonlit boat",url:"https://cdn.pixabay.com/video/2025/04/02/269357_medium.mp4",tile:78,
duration:6.366667},{id:"sky-clouds-moon-243117",name:"Violet sky",url:"https://cdn.pixabay.com/video/2024/11/24/243117_m\
edium.mp4",tile:79,duration:10.033333},{id:"snow-cold-scenery-167736-837429014",name:"Snowy shrine",url:"https://cdn.pix\
abay.com/video/2023/06/18/167736-837429014_medium.mp4",tile:80,duration:10.046667},{id:"starry-sky-milky-170888-84443295\
5",name:"Starry pines",url:"https://cdn.pixabay.com/video/2023/07/10/170888-844432955_medium.mp4",tile:81,duration:7.55},
{id:"starry-sky-milky-285663",name:"Starry cottage",url:"https://cdn.pixabay.com/video/2025/06/13/285663_medium.mp4",tile:82,
duration:27.05},{id:"steaming-mug-hot-322244",name:"Warm coffee",url:"https://cdn.pixabay.com/video/2025/12/16/322244_me\
dium.mp4",tile:83,duration:15.3},{id:"train-commuting-train-170887-844432947",name:"City commute",url:"https://cdn.pixab\
ay.com/video/2023/07/10/170887-844432947_medium.mp4",tile:85,duration:12.583333},{id:"tree-foliage-rain-176026-854526263",
name:"Green leaves",url:"https://cdn.pixabay.com/video/2023/08/14/176026-854526263_medium.mp4",tile:87,duration:15.266667},
{id:"tree-forest-rain-205213-926480936",name:"Rainy woodland",url:"https://cdn.pixabay.com/video/2024/03/22/205213-92648\
0936_medium.mp4",tile:88,duration:15.033333},{id:"tree-leaves-rain-172759-847869814",name:"Wet leaves",url:"https://cdn.\
pixabay.com/video/2023/07/22/172759-847869814_medium.mp4",tile:89,duration:10.133333},{id:"tree-stars-starry-176198-8552\
06384",name:"Violet branches",url:"https://cdn.pixabay.com/video/2023/08/15/176198-855206384_medium.mp4",tile:90,duration:7.566667},
{id:"trees-foliage-forest-171443-845465129",name:"Mountain forest",url:"https://cdn.pixabay.com/video/2023/07/13/171443-\
845465129_medium.mp4",tile:91,duration:15.266667},{id:"trees-forest-moon-183969-872226597",name:"Night blossoms",url:"ht\
tps://cdn.pixabay.com/video/2023/10/07/183969-872226597_medium.mp4",tile:92,duration:7.658333},{id:"trees-leaves-snow-19\
0667-888333548",name:"Winter branches",url:"https://cdn.pixabay.com/video/2023/11/25/190667-888333548_medium.mp4",tile:93,
duration:6.228333},{id:"wallpaper-pixel-anime-247738",name:"Neon city",url:"https://cdn.pixabay.com/video/2024/12/19/247\
738_medium.mp4",tile:95,duration:10.2},{id:"wallpaper-pixel-anime-247740",name:"Sunset crossing",url:"https://cdn.pixaba\
y.com/video/2024/12/19/247740_medium.mp4",tile:96,duration:19},{id:"wallpaper-pixel-anime-247741",name:"Kyoto evening",url:"\
https://cdn.pixabay.com/video/2024/12/19/247741_medium.mp4",tile:97,duration:6},{id:"waves-ocean-sea-372255",name:"Moonl\
it ocean",url:"https://cdn.pixabay.com/video/2026/08/23/372255_medium.mp4",tile:99,duration:15.041667},{id:"earth-215421",
name:"Eiffel Tower by the Seine",url:"https://cdn.pixabay.com/video/2024/06/05/215421_large.mp4",duration:15,poster:"pos\
ters/earth-215421.jpg"},{id:"earth-10866",name:"Brooklyn Bridge at night",url:"https://cdn.pixabay.com/video/2017/07/23/\
10866-226635329_large.mp4",duration:12.72,poster:"posters/earth-10866.jpg"},{id:"earth-149070",name:"Statue of Liberty",
url:"https://cdn.pixabay.com/video/2023/02/02/149070-795426972_large.mp4",duration:60,poster:"posters/earth-149070.jpg"},
{id:"earth-17962",name:"Golden Gate Bridge",url:"https://cdn.pixabay.com/video/2018/08/26/17962-287000048_large.mp4",duration:58.36,
poster:"posters/earth-17962.jpg"},{id:"earth-200313",name:"Northern lights",url:"https://cdn.pixabay.com/video/2024/02/1\
2/200313-912384824_large.mp4",duration:30.06,poster:"posters/earth-200313.jpg"},{id:"earth-292822",name:"Green aurora",url:"\
https://cdn.pixabay.com/video/2025/07/22/292822_large.mp4",duration:20.03,poster:"posters/earth-292822.jpg"},{id:"earth-\
183960",name:"Golden beach sunset",url:"https://cdn.pixabay.com/video/2023/10/07/183960-872226574_large.mp4",duration:22.83,
poster:"posters/earth-183960.jpg"},{id:"earth-45704",name:"Rolling ocean waves",url:"https://cdn.pixabay.com/video/2020/\
07/27/45704-446485426_large.mp4",duration:28.73,poster:"posters/earth-45704.jpg"},{id:"earth-214938",name:"Mount Fuji su\
nrise",url:"https://cdn.pixabay.com/video/2024/06/02/214938_large.mp4",duration:21.35,poster:"posters/earth-214938.jpg"},
{id:"earth-91319",name:"Mount Fuji lake",url:"https://cdn.pixabay.com/video/2021/10/08/91319-626985271_large.mp4",duration:12.47,
poster:"posters/earth-91319.jpg"},{id:"earth-246856",name:"Rainbow waterfall",url:"https://cdn.pixabay.com/video/2024/12\
/15/246856_large.mp4",duration:30.03,poster:"posters/earth-246856.jpg"},{id:"earth-173887",name:"Mountain river falls",url:"\
https://cdn.pixabay.com/video/2023/07/30/173887-850026370_large.mp4",duration:29.56,poster:"posters/earth-173887.jpg"}],
vd=new Map([...Ea,...Sp,..._p].map(e=>[e.id,e]));function Cp(e,t){const n=o=>e.replace(/_(tiny|small|medium|large)\.mp4/,
o),r=[n("_medium.mp4"),n("_large.mp4"),n("_small.mp4"),n("_tiny.mp4")],i=[...new Set(r)],l=n(t?"_small.mp4":"_medium.mp4");
return[l,...i.filter(o=>o!==l)]}function Np(e,t){if(e.poster)return{backgroundImage:`url(${e.poster})`,backgroundSize:"c\
over",backgroundPosition:"center"};if(!t||e.tile==null)return{backgroundImage:"linear-gradient(135deg,#182226,#090d13)"};
const n=e.preview==="curated"?3:8,r=e.preview==="curated"?3:13;return{backgroundImage:`url(${t})`,backgroundSize:`${n*100}\
% ${r*100}%`,backgroundPosition:`${e.tile%n*100/(n-1)}% ${Math.floor(e.tile/n)*100/(r-1)}%`}}const jp={"balcony-dusk-l.j\
pg":"53-balcony-dusk-l.jpg","balcony-dusk-l.mp4":"32-balcony-dusk-l.mp4","balcony-dusk-p.jpg":"52-balcony-dusk-p.jpg","b\
alcony-dusk-p.mp4":"31-balcony-dusk-p.mp4","cozy-window-l.jpg":"51-cozy-window-l.jpg","cozy-window-l.mp4":"30-cozy-windo\
w-l.mp4","cozy-window-p.jpg":"50-cozy-window-p.jpg","cozy-window-p.mp4":"29-cozy-window-p.mp4","japan-street-l.jpg":"49-\
japan-street-l.jpg","japan-street-l.mp4":"34-japan-street-l.mp4","japan-street-p.jpg":"48-japan-street-p.jpg","japan-str\
eet-p.mp4":"35-japan-street-p.mp4","misty-river-l.jpg":"40-misty-river-l.jpg","misty-river-l.mp4":"22-misty-river-l.mp4",
"misty-river-p.jpg":"39-misty-river-p.jpg","misty-river-p.mp4":"21-misty-river-p.mp4","night-train-l.jpg":"47-night-trai\
n-l.jpg","night-train-l.mp4":"28-night-train-l.mp4","night-train-p.jpg":"46-night-train-p.jpg","night-train-p.mp4":"27-n\
ight-train-p.mp4","rainy-window-l.jpg":"41-rainy-window-l.jpg","rainy-window-l.mp4":"20-rainy-window-l.mp4","rainy-windo\
w-p.jpg":"37-rainy-window-p.jpg","rainy-window-p.mp4":"17-rainy-window-p.mp4","sakura-night-l.jpg":"45-sakura-night-l.jp\
g","sakura-night-l.mp4":"26-sakura-night-l.mp4","sakura-night-p.jpg":"44-sakura-night-p.jpg","sakura-night-p.mp4":"25-sa\
kura-night-p.mp4","shrine-l.jpg":"10-shrine-l.jpg","shrine-l.mp4":"1-shrine-l.mp4","shrine-p.jpg":"36-shrine-p.jpg","shr\
ine-p.mp4":"18-shrine-p.mp4","water-garden-l.jpg":"43-water-garden-l.jpg","water-garden-l.mp4":"24-water-garden-l.mp4","\
water-garden-p.jpg":"42-water-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},wd=(e,t,n)=>`scenes/${jp[`${e}\
-${t}.${n}`]}`,Ep=(e,t)=>wd(e.id,t,"jpg"),Rp=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"Sky",value:"#9cc7f\
f"},{id:"rose",name:"Rose",value:"#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"Violet",value:"\
#c9b6ff"},{id:"white",name:"White",value:"#ffffff"}],kd=[{id:"sans",name:"Sans",css:"inherit"},{id:"serif",name:"Serif",
css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},
{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, sans-serif"}],Mp=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"s\
ans",bg:{kind:"gradient",id:"ink"}},{id:"dusk",name:"Dusk",accent:"#ffcf99",font:"serif",bg:{kind:"gradient",id:"dusk"}},
{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",bg:{kind:"gradient",id:"moss"}},{id:"dawn",name:"Dawn",accent:"#f2a\
9c4",font:"serif",bg:{kind:"gradient",id:"dawn"}}],Pp=[{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"\
Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Woodblock"},{id:"custom",name:"My sound"}],xd=[{id:"none",name:"Off"},
{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocea\
n",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"\
Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",
name:"Field cricket",file:"sounds/crickets.m4a"},{id:"wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Strea\
m",file:"sounds/stream.m4a"},{id:"brown",name:"Brown noise"},{id:"white",name:"White noise"}],Sd=[{id:"lofi",name:"Lofi \
Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spo\
tify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9\
dQZF1DX4sWSpwq3LiO"}],gt={focus:"Focus",short:"Short break",long:"Long break"};let Hn=null;function el(){return Hn||(Hn=
new(window.AudioContext||window.webkitAudioContext)),Hn.state==="suspended"&&Hn.resume(),Hn}function yt(e,t,n){const r=e.
createOscillator(),i=e.createGain();r.type=n.type||"sine",r.frequency.value=n.freq,i.gain.setValueAtTime(1e-4,n.start),i.
gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),n.start+.012),i.gain.exponentialRampToValueAtTime(1e-4,n.start+n.
dur),r.connect(i),i.connect(t),r.start(n.start),r.stop(n.start+n.dur+.05)}function Qn(e,t,n){const r=el(),i=r.createGain();
i.gain.value=t,i.connect(r.destination);const l=n?2:1,o=e==="gong"?3.6:e==="bell"?2.4:1.6;for(let a=0;a<l;a++){const s=r.
currentTime+.02+a*(o+.35);if(e==="bell")[[660,.5],[1320,.28],[1760,.14],[2240,.07]].forEach(([c,y])=>yt(r,i,{freq:c,start:s,
dur:2.2,gain:y}));else if(e==="chime")yt(r,i,{freq:783.99,start:s,dur:1.3,gain:.4}),yt(r,i,{freq:1046.5,start:s+.32,dur:1.4,
gain:.34});else if(e==="gong")[[196,.42],[294,.24],[392,.17],[523,.09]].forEach(([c,y])=>yt(r,i,{freq:c,start:s,dur:3.4,
gain:y}));else if(e==="beep")for(let c=0;c<3;c++)yt(r,i,{freq:880,type:"square",start:s+c*.3,dur:.16,gain:.22});else e===
"wood"&&(yt(r,i,{freq:1400,type:"triangle",start:s,dur:.07,gain:.5}),yt(r,i,{freq:1400,type:"triangle",start:s+.22,dur:.07,
gain:.4}))}}function Lp(e){const t=el(),n=t.createGain();n.gain.value=.35*e,n.connect(t.destination),yt(t,n,{freq:1800,start:t.
currentTime,dur:.035,gain:.5})}function Tp(e,t){const n=2*e.sampleRate,r=e.createBuffer(1,n,e.sampleRate),i=r.getChannelData(
0);let l=0;for(let o=0;o<n;o++){const a=Math.random()*2-1;t==="brown"?(l=(l+.02*a)/1.02,i[o]=l*3.2):i[o]=a}return r}const bp={
"sounds/rain.m4a":["sounds/rain-0.txt","sounds/rain-1.txt","sounds/rain-2.txt","sounds/rain-3.txt","sounds/rain-4.txt","\
sounds/rain-5.txt"],"sounds/thunderstorm.m4a":["sounds/thunderstorm-0.txt","sounds/thunderstorm-1.txt","sounds/thunderst\
orm-2.txt","sounds/thunderstorm-3.txt","sounds/thunderstorm-4.txt","sounds/thunderstorm-5.txt"],"sounds/ocean.m4a":["sou\
nds/ocean-0.txt","sounds/ocean-1.txt","sounds/ocean-2.txt","sounds/ocean-3.txt","sounds/ocean-4.txt","sounds/ocean-5.txt"],
"sounds/forest.m4a":["sounds/forest-0.txt","sounds/forest-1.txt","sounds/forest-2.txt","sounds/forest-3.txt","sounds/for\
est-4.txt"],"sounds/fireplace.m4a":["sounds/fireplace-0.txt","sounds/fireplace-1.txt","sounds/fireplace-2.txt","sounds/f\
ireplace-3.txt","sounds/fireplace-4.txt","sounds/fireplace-5.txt"],"sounds/coffee-shop.m4a":["sounds/coffee-shop-0.txt",
"sounds/coffee-shop-1.txt","sounds/coffee-shop-2.txt","sounds/coffee-shop-3.txt","sounds/coffee-shop-4.txt","sounds/coff\
ee-shop-5.txt"],"sounds/crickets.m4a":["sounds/crickets-0.txt","sounds/crickets-1.txt","sounds/crickets-2.txt","sounds/c\
rickets-3.txt"],"sounds/wind.m4a":["sounds/wind-0.txt","sounds/wind-1.txt","sounds/wind-2.txt","sounds/wind-3.txt","soun\
ds/wind-4.txt","sounds/wind-5.txt"],"sounds/stream.m4a":["sounds/stream-0.txt","sounds/stream-1.txt","sounds/stream-2.tx\
t","sounds/stream-3.txt","sounds/stream-4.txt","sounds/stream-5.txt"]},qr={};function zp(e,t){return qr[t]||(qr[t]=Promise.
all((bp[t]||[]).map(async n=>{const r=await fetch(n);if(!r.ok)throw new Error(`HTTP ${r.status}`);return(await r.text()).
trim()})).then(n=>{if(!n.length)throw new Error("Recording unavailable");const r=atob(n.join(""));return e.decodeAudioData(
Uint8Array.from(r,i=>i.charCodeAt(0)).buffer)}).catch(n=>{throw delete qr[t],n})),qr[t]}function Ip(e,t){if(e==="none")return null;
const n=xd.find(a=>a.id===e),r=el(),i=r.createGain();if(i.gain.value=t,i.connect(r.destination),n!=null&&n.file){let a=!1,
s=null;return zp(r,n.file).then(c=>{a||(s=r.createBufferSource(),s.buffer=c,s.loop=!0,s.connect(i),s.start())}).catch(()=>{}),
()=>{a=!0;try{s==null||s.stop()}catch{}try{i.disconnect()}catch{}}}const l=r.createBufferSource();l.buffer=Tp(r,e==="whi\
te"?"white":"brown"),l.loop=!0;let o=l;if(e==="brown"){const a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=
900,o.connect(a),o=a}return o.connect(i),l.start(),()=>{try{l.stop(),i.disconnect()}catch{}}}function Op(e){return/^https:\/\/.+/i.
test(e.trim())}async function Lo(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.blob()}
async function Fp(e){var i;const t=e.trim();if(/pin\.it\//i.test(t))throw new Error("short pin link");const n=t.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let r=t;if(n){const l=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!l.ok)throw new Error("pin lookup failed");const o=await l.json();if((o==null?void 0:o.status)!=="success"||!Array.isArray(
o==null?void 0:o.data)||o.data.length===0)throw new Error("pin unavailable");const a=(i=o.data[0])==null?void 0:i.images;
if(!a)throw new Error("pin has no image");const s=a.originals||a["736x"]||a["564x"]||a["236x"];if(!(s!=null&&s.url))throw new Error(
"pin has no image");r=s.url}if(!/^https:\/\//i.test(r))throw new Error("not a link");try{const l=await Lo(r);if(l.type.startsWith(
"image/"))return l;throw new Error("not an image")}catch{const l=`https://images.weserv.nl/?url=${encodeURIComponent(r.replace(
/^https?:\/\//,""))}&w=1920`,o=await Lo(l);if(!o.type.startsWith("image/"))throw new Error("not an image");return o}}function _d(e){
const t=Sd.find(i=>i.id===e),r=(t?t.url:e).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return r?`https://open.spotify.com/embed/${r[1].toLowerCase()}/${r[2]}?theme=0`:null}const Ut=({d:e,vb:t=24})=>u.jsx("sv\
g",{width:"18",height:"18",viewBox:`0 0 ${t} ${t}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"ro\
und",strokeLinejoin:"round","aria-hidden":"true",children:e.split("|").map((n,r)=>u.jsx("path",{d:n},r))}),Dp="M4 9V4h5|\
M20 9V4h-5|M4 15v5h5|M20 15v5h-5",Ap="M5 12h14",$p="M4 6h16|M4 12h16|M4 18h10",Up="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0\
 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",
Cd="M6 6l12 12|M18 6L6 18",Vp="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function ln(e){
const t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(
2,"0")}`}function Kn(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).
padStart(2,"0")}`}function ei({label:e,value:t,min:n,max:r,onChange:i,unit:l}){const o=a=>{const s=parseInt(a,10);Number.
isFinite(s)&&i(Math.min(r,Math.max(n,s)))};return u.jsxs("div",{className:"ft-field",children:[u.jsx("span",{className:"\
ft-field-label",children:e}),u.jsxs("span",{className:"ft-stepper",children:[u.jsx("button",{type:"button","aria-label":`\
Decrease ${e}`,onClick:()=>i(Math.max(n,t-1)),children:"-"}),u.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${e} value`,min:n,max:r,value:t,onChange:a=>o(a.target.value)}),l?u.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,u.jsx("button",{type:"button","aria-label":`Increase ${e}`,onClick:()=>i(Math.min(r,t+1)),children:"\
+"})]})]})}function Be({label:e,hint:t,checked:n,onChange:r}){return u.jsxs("button",{type:"button",role:"switch","aria-\
checked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>r(!n),children:[u.jsxs("span",{className:"ft-toggle-text",children:[
u.jsx("span",{className:"ft-field-label",children:e}),t?u.jsx("span",{className:"ft-field-hint",children:t}):null]}),u.jsx(
"span",{className:"ft-switch",children:u.jsx("span",{className:"ft-knob"})})]})}const Bp=zt.memo(function({scene:t,paused:n,
animate:r}){const i=x.useRef(null),[l,o]=x.useState(!1),[a,s]=x.useState(0),c=x.useMemo(()=>window.matchMedia("(max-widt\
h: 900px), (orientation: portrait)").matches,[]),y=x.useMemo(()=>t.url?Cp(t.url,c):[wd(t.id,"p","mp4")],[t,c]),p=y[Math.
min(a,y.length-1)],g=gd(t.preview||"catalog"),S=x.useRef({paused:n,animate:r});return S.current={paused:n,animate:r},x.useEffect(
()=>{o(!1);const v=i.current;if(!v)return;let w=!1,z=!1,f=0,d=!1,m=!1;const k=V=>V.play().catch(()=>{}),R=()=>!S.current.
paused&&S.current.animate&&!document.hidden,M=()=>{const V=document.createElement("video");return V.className="ft-bg ft-\
bgvideo",V.muted=!0,V.playsInline=!0,V.setAttribute("playsinline",""),V.setAttribute("disablepictureinpicture",""),V.setAttribute(
"disableremoteplayback",""),V.preload="auto",V.src=p,V.setAttribute("aria-hidden","true"),V},P=()=>{m||z||(m=!0,s(V=>V<y.
length-1?V+1:(o(!0),V)))};let j=null;const A=()=>{z||(E&&(E.currentTime=0,E.style.opacity="1",R()&&k(E)),j&&(j.remove(),
j=null),w=!1)};let E=M();E.addEventListener("error",P),E.addEventListener("ended",A),v.appendChild(E);const U=()=>{R()?d&&
E&&(k(E),j&&k(j)):(E==null||E.pause(),j==null||j.pause())},ue=()=>{if(!(z||!E)){if(!d&&E.readyState>=2&&(d=!0,R()&&k(E)),
R()&&d){E.paused&&!E.ended&&k(E);const V=t.duration||E.duration,h=Math.min(1.5,V/4);if(!w&&Number.isFinite(V)&&E.currentTime>=
V-h&&(w=!0,j=M(),j.style.opacity="0",j.style.zIndex="2",j.addEventListener("error",()=>{}),v.appendChild(j),j.currentTime=
0,k(j)),w&&j&&j.readyState>=2){j.paused&&k(j);const Q=Math.min(1,j.currentTime/h);E.style.opacity=String(1-Q),j.style.opacity=
"1",Q>=1&&(E.remove(),E=j,j=null,w=!1,E.addEventListener("error",P),E.addEventListener("ended",A),v.dataset.wraps=String(
Number(v.dataset.wraps||0)+1))}}f=requestAnimationFrame(ue)}};return f=requestAnimationFrame(ue),document.addEventListener(
"visibilitychange",U),window.addEventListener("pointerdown",U),()=>{z=!0,cancelAnimationFrame(f),E==null||E.pause(),j==null||
j.pause(),E==null||E.remove(),j==null||j.remove(),document.removeEventListener("visibilitychange",U),window.removeEventListener(
"pointerdown",U)}},[p]),u.jsx("div",{ref:i,className:"ft-scene-stage",style:Np(t,g),children:l&&u.jsx("span",{className:"\
ft-stream-status",children:"This scene could not load right now. Try another background."})},p)}),Wp=zt.memo(function({kind:t,
id:n,scrim:r,builtinSrc:i,linkBg:l,uploadBg:o,paused:a,animate:s,customFit:c,enhance:y}){let p={};t==="builtin"&&i?p={backgroundImage:`\
url(${i})`}:t==="gradient"?p={backgroundImage:(mi.find(w=>w.id===n)||mi[0]).css}:t==="link"&&(l==null?void 0:l.kind)==="\
image"?p={backgroundImage:`url(${l.url})`}:t==="upload"&&(o==null?void 0:o.kind)==="image"?p={backgroundImage:`url(${o.url}\
)`}:(t==="link"||t==="upload"||t==="builtin")&&(p={backgroundImage:mi[0].css}),(t==="link"||t==="upload")&&p.backgroundImage&&
(p={...p,backgroundSize:c,backgroundRepeat:"no-repeat",backgroundColor:"#101418"},y!==!1&&(p={...p,filter:"url(#ft-sharp\
en) saturate(1.08) contrast(1.05)"}));const g=yd.some(w=>w.id===n)?n:"aurora",S=t==="scene"?vd.get(n)||Ea[0]:void 0,v=t===
"link"&&(l==null?void 0:l.kind)==="video"?l.url:t==="upload"&&(o==null?void 0:o.kind)==="video"?o.url:null;return u.jsxs(
u.Fragment,{children:[S?u.jsx(Bp,{scene:S,paused:!!a,animate:s}):v?u.jsx(Hp,{src:v,paused:!!a,animate:s,fit:c}):t==="ani\
mated"?u.jsxs("div",{className:`ft-anim ft-anim-${g}`,"aria-hidden":"true",children:[u.jsx("i",{}),u.jsx("i",{}),u.jsx("\
i",{})]}):u.jsx("div",{className:"ft-bg",style:p}),u.jsx("div",{className:"ft-scrim",style:{opacity:r}}),u.jsx("svg",{width:"\
0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:u.jsx("filter",{id:"ft-sharpen",children:u.jsx("\
feConvolveMatrix",{order:"3",kernelMatrix:"0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"})})})]})}),Hp=zt.memo(function({src:t,paused:n,
animate:r,fit:i}){const l=x.useRef(null);return x.useEffect(()=>{const o=l.current;if(!o)return;const a=()=>{n||!r||document.
hidden?o.pause():o.play().catch(()=>{})};a();const s=()=>{!n&&r&&!document.hidden&&o.play().catch(()=>{})};return document.
addEventListener("visibilitychange",a),window.addEventListener("pointerdown",s),()=>{document.removeEventListener("visib\
ilitychange",a),window.removeEventListener("pointerdown",s)}},[n,r,t]),r?u.jsx("video",{ref:l,className:"ft-bg ft-bgvide\
o",style:{objectFit:i,backgroundColor:"#101418"},src:t,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto","aria-\
hidden":"true"}):null}),Nd=zt.memo(function({scene:t,active:n,onPick:r}){const i=gd(t.preview||"catalog"),l=t.preview===
"curated"?3:8,o=t.preview==="curated"?3:13;return u.jsxs("button",{type:"button",className:`ft-bgswatch ft-bgswatch-name\
d ${n?"is-active":""}`,"aria-label":`${t.name} animated scene`,onClick:r,children:[t.poster?u.jsx("img",{className:"ft-b\
gswatch-img",src:t.poster,alt:"",loading:"lazy",decoding:"async"}):t.tile!=null?u.jsx("span",{className:"ft-bgswatch-img",
style:{backgroundImage:i?`url(${i})`:void 0,backgroundSize:`${l*100}% ${o*100}%`,backgroundPosition:`${t.tile%l*100/(l-1)}\
% ${Math.floor(t.tile/l)*100/(o-1)}%`}}):u.jsx("img",{className:"ft-bgswatch-img",src:Ep(t,"p"),alt:"",loading:"lazy",decoding:"\
async"}),u.jsx("span",{className:"ft-bgswatch-name",children:t.name})]})}),Qp=zt.memo(function({id:t,name:n,active:r,onPick:i}){
const[l,o]=x.useState(Ol[t]||null);return x.useEffect(()=>{let a=!0;return!Ol[t]&&eu[t]&&eu[t]().then(s=>{Ol[t]=s.default,
a&&o(s.default)}).catch(()=>{}),()=>{a=!1}},[t]),u.jsx("button",{type:"button",className:`ft-bgswatch ${r?"is-active":""}`,
style:l?{backgroundImage:`url(${l})`}:void 0,"aria-label":n,onClick:i})}),Kp=zt.memo(function({chip:t,panel:n,fullscreenSupported:r,
onFullscreen:i,onTasks:l,onSettings:o,onMinimize:a,onPopout:s}){return u.jsxs("header",{className:"ft-topbar",children:[
u.jsx("span",{className:"ft-brand",children:"Study focus"}),t?u.jsx("span",{className:"ft-chip",title:"Today's completed\
 focus time",children:t}):null,u.jsxs("span",{className:"ft-topbar-actions",children:[r?u.jsx("button",{type:"button",className:"\
ft-iconbtn","aria-label":"Fullscreen",onClick:i,children:u.jsx(Ut,{d:Dp})}):null,u.jsx("button",{type:"button",className:"\
ft-iconbtn","aria-label":"Open timer in its own window",title:"Open timer in its own window",onClick:s,children:u.jsx(Ut,
{d:Vp})}),u.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Minimize to a small timer",title:"Minimize \
to a small timer",onClick:a,children:u.jsx(Ut,{d:Ap})}),u.jsx("button",{type:"button",className:`ft-iconbtn ${n==="tasks"?
"is-active":""}`,"aria-label":"Tasks",onClick:l,children:u.jsx(Ut,{d:$p})}),u.jsx("button",{type:"button",className:`ft-\
iconbtn ${n==="settings"?"is-active":""}`,"aria-label":"Settings",onClick:o,children:u.jsx(Ut,{d:Up})})]})]})}),Gp=zt.memo(
function({tasksState:t,setTasksState:n,week:r,ready:i,savedMessage:l,onClose:o}){const[a,s]=x.useState(""),[c,y]=x.useState(
1),p=t.tasks,g=Math.max(1,...r.map(v=>v.minutes)),S=()=>{const v=a.trim();if(!v)return;const w={id:`t${Date.now()}`,title:v,
est:c,done:0,completed:!1};n(z=>({tasks:[...z.tasks,w],activeId:z.activeId||w.id})),s(""),y(1)};return u.jsxs("aside",{className:"\
ft-sheet","aria-label":"Tasks",children:[u.jsxs("div",{className:"ft-sheet-head",children:[u.jsx("h2",{children:"Tasks"}),
u.jsx("button",{type:"button",className:"ft-sheet-close","aria-label":"Close tasks",onClick:o,children:u.jsx(Ut,{d:Cd})})]}),
u.jsxs("div",{className:"ft-addtask",children:[u.jsx("input",{value:a,placeholder:"What are you studying?",onChange:v=>s(
v.target.value),onKeyDown:v=>{v.key==="Enter"&&S()},maxLength:120}),u.jsxs("span",{className:"ft-stepper is-small",children:[
u.jsx("button",{type:"button","aria-label":"Fewer pomodoros",onClick:()=>y(Math.max(1,c-1)),children:"-"}),u.jsxs("span",
{className:"ft-stepper-value",children:[c,u.jsx("em",{children:"est"})]}),u.jsx("button",{type:"button","aria-label":"Mo\
re pomodoros",onClick:()=>y(Math.min(20,c+1)),children:"+"})]}),u.jsx("button",{type:"button",className:"ft-primary is-c\
ompact",onClick:S,disabled:!i,children:"Add"})]}),p.length===0?u.jsx("p",{className:"ft-field-hint",children:"No tasks y\
et. Add one to track pomodoros against it, or just run the timer."}):null,u.jsx("ul",{className:"ft-tasklist",children:p.
map(v=>u.jsxs("li",{className:`${v.id===t.activeId?"is-active":""} ${v.completed?"is-done":""}`,children:[u.jsx("button",
{type:"button",className:"ft-taskcheck","aria-label":v.completed?"Mark not done":"Mark done",onClick:()=>n(w=>({...w,tasks:w.
tasks.map(z=>z.id===v.id?{...z,completed:!z.completed}:z)})),children:v.completed?"✓":""}),u.jsx("button",{type:"butto\
n",className:"ft-taskname",onClick:()=>n(w=>({...w,activeId:v.id})),children:v.title}),u.jsxs("span",{className:"ft-task\
count",children:[v.done,"/",v.est]}),u.jsx("button",{type:"button",className:"ft-taskdel","aria-label":`Delete ${v.title}`,
onClick:()=>n(w=>({tasks:w.tasks.filter(z=>z.id!==v.id),activeId:w.activeId===v.id?null:w.activeId})),children:"×"})]},
v.id))}),p.some(v=>v.completed)?u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n(v=>({...v,tasks:v.
tasks.filter(w=>!w.completed)})),children:"Clear completed"}):null,u.jsxs("div",{className:"ft-week",children:[u.jsx("h3",
{children:"This week"}),u.jsx("div",{className:"ft-weekbars",role:"img","aria-label":`Focus minutes by day: ${r.map(v=>`${v.
label} ${v.minutes}`).join(", ")}`,children:r.map((v,w)=>u.jsxs("span",{className:"ft-weekcol",children:[u.jsx("span",{className:"\
ft-weekbar",style:{height:`${Math.round(v.minutes/g*64)}px`}}),u.jsx("span",{className:"ft-weekday",children:v.label})]},
w))})]}),u.jsx("p",{className:"ft-field-hint",children:l})]})});function Yp(){const[e,t]=x.useState(null),[,n]=x.useState(
0),r=x.useRef(null);x.useEffect(()=>{const s=new BroadcastChannel("sft-sync");r.current=s,s.onmessage=y=>{var p;((p=y.data)==
null?void 0:p.t)==="state"&&t(y.data)};const c=window.setInterval(()=>n(y=>y+1),500);return()=>{window.clearInterval(c),
s.close()}},[]);const i=s=>{var c;return(c=r.current)==null?void 0:c.postMessage({t:"cmd",cmd:s})};let l=e?e.remaining:0;
e!=null&&e.running&&(l=Math.max(0,e.remaining-(Date.now()-e.at)));const o=!e||Date.now()-e.at>4e3,a=e&&e.dur>0?Math.round(
(1-l/e.dur)*100):0;return u.jsxs("div",{className:"ft-popout",style:{"--ft-accent":(e==null?void 0:e.accent)||"#9fd8c6"},
children:[u.jsx("div",{className:"ft-popout-phase",children:e?gt[e.phase]:"Study focus"}),u.jsx("div",{className:"ft-pop\
out-time",children:e?ln(l):"--:--"}),u.jsx("div",{className:"ft-popout-bar","aria-hidden":"true",children:u.jsx("span",{
style:{width:`${a}%`}})}),u.jsxs("div",{className:"ft-popout-btns",children:[u.jsx("button",{type:"button",className:"ft\
-primary is-compact",onClick:()=>i("toggle"),children:e!=null&&e.running?"Pause":"Start"}),u.jsx("button",{type:"button",
className:"ft-ghost is-compact",onClick:()=>i("reset"),children:"Reset"}),u.jsx("button",{type:"button",className:"ft-gh\
ost is-compact",onClick:()=>i("skip"),children:"Skip"})]}),o?u.jsx("p",{className:"ft-popout-note",children:"Open the st\
udy timer in another tab to control it from here."}):null]})}const tu=[{section:"Real-world scenes",name:"Earth landmark\
s",ids:["earth-215421","earth-10866","earth-256109","earth-149070","earth-17962","earth-381","earth-200313","earth-29282\
2","earth-183960","earth-45704","earth-214938","earth-91319","earth-246856","earth-173887"]},{section:"Real-world scenes",
name:"Fireplaces & warm drinks",ids:["bonfire-flames-fire-201688-916116512","campfire-bonfire-flames-225422","fireplace-\
fire-heat-327084","cozy-winter-autumn-253056","candle-flame-advent-312390","candle-flame-advent-311235","coffee-tea-stea\
m-285759","steaming-mug-hot-322244","candle-flame-candlelight-312404"]},{section:"Real-world scenes",name:"Ocean & coast",
ids:["lighthouse-landscape-nature-325141","lighthouse-storm-ocean-373895","long-38271","loop-ocean-nature-358453","ocean\
-sea-waves-232793","ocean-sea-fog-299418","ocean-sea-waves-174033-850286651","sea-coast-japan-197525-905005651","sea-ful\
l-moon-227600","waves-ocean-sea-372255","sea-ocean-waves-269357","ocean-night-stars-377557","ocean-scene-cinemagraph-372\
866","moonlight-patrol-boat-290456","dark-ocean-ocean-372869","moon-full-moon-370403","nature-night-moonlight-313411","m\
oon-night-sky-256347","moon-nature-night-290116","dark-ocean-ocean-372868","lighthouse-wave-ocean-358853"]},{section:"Re\
al-world scenes",name:"Forest & mountains",ids:["moon-trees-forest-183967-872226594","rain-raining-raindrops-199501-9105\
30342","cedar-tree-line-211013","trees-foliage-forest-171443-845465129","waterfall-trees-forest-208570","landscape-water\
fall-water-298040","forest-nature-wood-329836","mountains-lake-water-124774-732319023","tree-foliage-rain-176026-8545262\
63","tree-forest-rain-205213-926480936","tree-leaves-rain-172759-847869814","rain-leaves-foliage-227700","rain-nature-wa\
ter-289712","long-258614","flowers-tree-moon-179020-861022089"]},{section:"Real-world scenes",name:"Snow & winter",ids:[
"creek-snow-winter-190915-888878158","trees-leaves-snow-190667-888333548","winter-snow-nature-336603","snow-cold-scenery\
-167736-837429014","long-266428"]},{section:"Real-world scenes",name:"Night skies & cities",ids:["starry-sky-milky-17088\
8-844432955","starry-sky-milky-285663","sky-clouds-moon-243117","night-view-yamadas-283431","night-view-moon-143565-7827\
58320","train-commuting-train-170887-844432947","radio-tower-night-211067","rain-cobblestone-puddle-380412","long-75368"]},
{section:"Illustrated scenes",name:"Cats & companions",ids:["long-246535","long-246241","long-201968","long-371447","lon\
g-345856","long-312345","long-246242","long-246243","long-301247","long-345838","long-271841","long-345955"]},{section:"\
Illustrated scenes",name:"Libraries & books",ids:["long-202823","long-360380","long-208105","long-204238","long-205644",
"long-205634","long-210278","long-267920","long-208089","long-182592","long-259293","long-267296","library-books-363706-\
363706","book-study-books-347655","book-candle-stars-184469-873483892","long-214500","long-286806","long-276498","long-3\
10025"]},{section:"Illustrated scenes",name:"Rainy rooms",ids:["long-215407","long-297863","long-229537","long-211089","\
long-209201","long-246984","long-309388","long-261757","long-324169","long-257953","long-258729","long-301045","long-156\
473","long-120583","cozy-bedroom-modern-290857","dark-room-storm-369507","rain-outside-372862-372862","long-201179","lon\
g-167688","long-210707","long-243696","long-340848","long-244362","long-244452","long-242924","long-243342","autumn-fore\
st-trees-313784","coffee-cup-rest-309872"]},{section:"Illustrated scenes",name:"City lights & neon",ids:["long-265906","\
long-311563","long-180170","long-379222","long-330062","long-337559","long-253904","long-267347","long-265815","wallpape\
r-pixel-anime-247738","city-starry-sky-310146","wallpaper-pixel-anime-247740","wallpaper-pixel-anime-247741","long-22594\
4","long-265909","long-265816","long-325442","anime-lofi-record-363710","anime-lofi-rain-363709","long-297736","long-314\
688"]},{section:"Illustrated scenes",name:"Japan & cherry blossom",ids:["long-153086","long-185425","long-158195","long-\
189472","long-281165"]},{section:"Illustrated scenes",name:"Dreamy nights",ids:["bioluminescence-beach-waves-343671","bi\
oluminescence-beach-waves-346010","bioluminescence-bioluminescent-ocean-381552","bioluminescent-beach-375118-375118","bo\
ats-moon-moonlight-381338","purple-cosmic-space-278396","turtle-moon-night-289572","trees-forest-moon-183969-872226597",
"tree-stars-starry-176198-855206384","long-181971","long-248668","long-168104","long-266042","long-208621","long-236040",
"dream-nature-fantasy-297586","fireplace-winter-snow-347140","long-209220","long-297472","long-188977","long-251562"]},{
section:"Illustrated scenes",name:"Cozy rooms",ids:["long-211097","long-204116","long-208856","long-247096","long-205001",
"long-166272","long-108292","long-219025","long-181977","long-208106","long-181947","long-298922","long-209881","long-20\
8093","long-204117","autumn-forest-trees-313787","autumn-nature-cabin-324160","autumn-nature-cabin-324164","coffee-livin\
g-room-237103","couch-sofa-rain-185888-876579680","cozy-bedroom-289797-289797","cozy-bedroom-modern-290943","cozy-bedroo\
m-modern-290944","luxury-bedroom-cozy-290401"]}],Xp=({group:e,bg:t,patch:n,showSection:r})=>{const[i,l]=x.useState(!1),o=e.
ids.map(a=>vd.get(a)).filter(a=>!!a);return o.length?u.jsxs(u.Fragment,{children:[r?u.jsx("h4",{className:"ft-subhead",children:e.
section}):null,u.jsxs("details",{className:"ft-extra-scenes",open:i,onToggle:a=>l(a.currentTarget.open),children:[u.jsxs(
"summary",{children:[e.name," (",o.length,")"]}),i?u.jsx("div",{className:"ft-bggrid",children:o.map(a=>u.jsx(Nd,{scene:a,
active:t.kind==="scene"&&t.id===a.id,onPick:()=>n({background:{kind:"scene",id:a.id}})},a.id))}):null]})]}):null},Zp=zt.
memo(function({settings:t,patch:n,bgStatus:r,soundStatus:i,lastBgSrcRef:l,lastSndSrcRef:o,resolveLinkBg:a,resolveCustomSound:s,
uploadBg:c,uploadSound:y,previewAlarm:p,requestNotifications:g,notificationsSupported:S,wakeLockSupported:v,onResetSettings:w,
savedMessage:z,onClose:f}){const[d,m]=x.useState(""),[k,R]=x.useState(""),[M,P]=x.useState(""),[j,A]=x.useState(""),E=t.
background,U=()=>{const h=d.trim();h&&a(h).then(Q=>{Q&&(l.current=h,n({background:{kind:"link",source:h}}))})},ue=()=>{const h=k.
trim();Op(h)&&s(h).then(Q=>{var mt;Q&&(o.current=h,n({alarmSound:"custom",customAlarm:{source:h,name:((mt=h.split("/").pop())==
null?void 0:mt.split("?")[0])||"Custom sound"}}))})},V=()=>{const h=M.trim();if(h){if(!_d(h)){A("That is not a Spotify l\
ink. Copy a link that starts with https://open.spotify.com/ from the Spotify app (Share - Copy link). Your current playe\
r is unchanged.");return}A(""),n({spotify:h,spotifyOpen:!0})}};return u.jsxs("aside",{className:"ft-sheet","aria-label":"\
Settings",children:[u.jsxs("div",{className:"ft-sheet-head",children:[u.jsx("h2",{children:"Settings"}),u.jsx("button",{
type:"button",className:"ft-sheet-close","aria-label":"Close settings",onClick:f,children:u.jsx(Ut,{d:Cd})})]}),u.jsxs("\
section",{children:[u.jsx("h3",{children:"Appearance"}),u.jsx("div",{className:"ft-chips",children:Mp.map(h=>u.jsxs("but\
ton",{type:"button",className:"ft-chipbtn",onClick:()=>n({accent:h.accent,font:h.font,background:{kind:h.bg.kind,id:h.bg.
id}}),children:[h.name," theme"]},h.id))}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"\
ft-field-label",children:"Accent color"}),u.jsxs("span",{className:"ft-inrow",children:[Rp.map(h=>u.jsx("button",{type:"\
button",className:`ft-colorswatch ${t.accent.toLowerCase()===h.value?"is-active":""}`,style:{background:h.value},"aria-l\
abel":`${h.name} accent`,onClick:()=>n({accent:h.value})},h.id)),u.jsxs("label",{className:"ft-colorcustom",children:[u.
jsx("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(t.accent)?t.accent:"#9fd8c6","aria-label":"Custom accent color",onChange:h=>n(
{accent:h.target.value})}),u.jsx("span",{children:"Custom"})]})]})]}),u.jsxs("div",{className:"ft-field is-stacked",children:[
u.jsx("span",{className:"ft-field-label",children:"Font"}),u.jsx("div",{className:"ft-chips",children:kd.map(h=>u.jsx("b\
utton",{type:"button",className:`ft-chipbtn ${t.font===h.id?"is-active":""}`,style:h.css==="inherit"?void 0:{fontFamily:h.
css},onClick:()=>n({font:h.id}),children:h.name},h.id))})]}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx(
"span",{className:"ft-field-label",children:"Clock style"}),u.jsx("div",{className:"ft-chips",children:[["ring","Ring"],
["bar","Bar"],["minimal","Minimal"]].map(([h,Q])=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.clockStyle===h?
"is-active":""}`,onClick:()=>n({clockStyle:h}),children:Q},h))})]}),u.jsxs("div",{className:"ft-field is-stacked",children:[
u.jsx("span",{className:"ft-field-label",children:"Clock size"}),u.jsx("div",{className:"ft-chips",children:[["s","Small"],
["m","Medium"],["l","Large"]].map(([h,Q])=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.clockSize===h?"is-act\
ive":""}`,onClick:()=>n({clockSize:h}),children:Q},h))})]}),u.jsx(Be,{label:"Cycle dots",checked:t.showDots,onChange:h=>n(
{showDots:h})}),u.jsx(Be,{label:"Today's stats chip",checked:t.showChip,onChange:h=>n({showChip:h})}),u.jsx(Be,{label:"S\
hortcut hints",checked:t.showHint,onChange:h=>n({showHint:h})})]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Mus\
ic (Spotify player)"}),u.jsx("div",{className:"ft-chips",children:Sd.map(h=>u.jsx("button",{type:"button",className:`ft-\
chipbtn ${t.spotify===h.id?"is-active":""}`,onClick:()=>{A(""),n({spotify:h.id,spotifyOpen:!0})},children:h.name},h.id))}),
u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"Any Spotify l\
ink"}),u.jsx("span",{className:"ft-field-hint",children:"Paste an open.spotify.com playlist, album, track or podcast lin\
k (in Spotify: Share - Copy link). Music plays in Spotify's official player at the bottom of the page; this is not accou\
nt sync. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-second preview\
s when signed out; podcast episodes usually play in full."}),u.jsxs("span",{className:"ft-inrow",children:[u.jsx("input",
{className:"ft-textinput",value:M,placeholder:"https://open.spotify.com/playlist/…",onChange:h=>P(h.target.value),inputMode:"\
url"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:V,children:"Use link"})]}),t.spotify?u.jsxs(
"span",{className:"ft-inrow",children:[u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({spotifyOpen:!t.
spotifyOpen}),children:t.spotifyOpen?"Minimize player":"Show player"}),u.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:()=>n({spotify:null,spotifyOpen:!1}),children:"Remove player"})]}):null,j?u.jsx("span",{className:"\
ft-field-hint",children:j}):null]})]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Timer"}),u.jsx(ei,{label:"Focus",
value:t.focusMin,min:1,max:180,unit:"min",onChange:h=>n({focusMin:h})}),u.jsx(ei,{label:"Short break",value:t.shortMin,min:1,
max:60,unit:"min",onChange:h=>n({shortMin:h})}),u.jsx(ei,{label:"Long break",value:t.longMin,min:1,max:90,unit:"min",onChange:h=>n(
{longMin:h})}),u.jsx(ei,{label:"Long break every",value:t.longEvery,min:1,max:12,unit:"sessions",onChange:h=>n({longEvery:h})}),
u.jsx(Be,{label:"Auto-start breaks",checked:t.autoBreaks,onChange:h=>n({autoBreaks:h})}),u.jsx(Be,{label:"Auto-start foc\
us",checked:t.autoFocus,onChange:h=>n({autoFocus:h})}),S?u.jsx(Be,{label:"Browser notifications",hint:"Alerts when a ses\
sion ends in another tab.",checked:t.notifications,onChange:g}):null,v?u.jsx(Be,{label:"Keep screen awake",checked:t.keepAwake,
onChange:h=>n({keepAwake:h})}):null]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Alarm"}),u.jsx("div",{className:"\
ft-chips",children:Pp.map(h=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.alarmSound===h.id?"is-active":""}`,
onClick:()=>{n({alarmSound:h.id}),p(h.id)},children:h.name},h.id))}),u.jsxs("div",{className:"ft-field",children:[u.jsx(
"span",{className:"ft-field-label",children:"Volume"}),u.jsx("input",{type:"range",min:0,max:1,step:.05,value:t.alarmVolume,
"aria-label":"Alarm volume",onChange:h=>n({alarmVolume:parseFloat(h.target.value)})})]}),u.jsx(Be,{label:"Ring twice",checked:t.
alarmRepeat,onChange:h=>n({alarmRepeat:h})}),u.jsx(Be,{label:"Ticking while running",checked:t.tick,onChange:h=>n({tick:h})}),
u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"My sound from\
 a link"}),u.jsx("span",{className:"ft-field-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when \
the file's host allows cross-site loading; many do not. Uploading a file always works until the tab reloads; a saved lin\
k reloads each visit."}),u.jsxs("span",{className:"ft-inrow",children:[u.jsx("input",{className:"ft-textinput",value:k,placeholder:"\
https://…/sound.mp3",onChange:h=>R(h.target.value),inputMode:"url"}),u.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:ue,children:"Use link"})]}),u.jsxs("span",{className:"ft-inrow",children:[u.jsxs("label",{className:"\
ft-ghost is-compact ft-filebtn",children:["Upload audio",u.jsx("input",{type:"file",accept:"audio/*","aria-label":"Uploa\
d alarm sound file",className:"ft-fileinput",onChange:h=>{var Q;return y((Q=h.target.files)==null?void 0:Q[0])}})]}),t.customAlarm?
u.jsxs("span",{className:"ft-field-hint",children:["Current: ",t.customAlarm.name]}):null]}),i?u.jsx("span",{className:"\
ft-field-hint",children:i}):null]})]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Ambient sound"}),u.jsx("div",{className:"\
ft-chips",children:xd.map(h=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.ambient===h.id?"is-active":""}`,onClick:()=>n(
{ambient:h.id}),children:h.name},h.id))}),t.ambient!=="none"?u.jsxs("div",{className:"ft-field",children:[u.jsx("span",{
className:"ft-field-label",children:"Ambient volume"}),u.jsx("input",{type:"range",min:0,max:1,step:.05,value:t.ambientVolume,
"aria-label":"Ambient volume",onChange:h=>n({ambientVolume:parseFloat(h.target.value)})})]}):null]}),u.jsxs("section",{children:[
u.jsx("h3",{children:"Background"}),u.jsx("h4",{className:"ft-subhead",children:"Featured scenes"}),u.jsx("div",{className:"\
ft-bggrid",children:Ea.map(h=>u.jsx(Nd,{scene:h,active:E.kind==="scene"&&E.id===h.id,onPick:()=>n({background:{kind:"sce\
ne",id:h.id}})},h.id))}),tu.map((h,Q)=>u.jsx(Xp,{group:h,bg:E,patch:n,showSection:Q===0||tu[Q-1].section!==h.section},h.
name)),u.jsx("p",{className:"ft-field-hint",children:"Scenes fill the whole screen. Only scenes whose motion loops clean\
ly are listed. Videos stream only when chosen; a scene that cannot load shows its preview instead of going black."}),u.jsx(
Be,{label:"Animate backgrounds",hint:"Motion starts by itself. Turn off to pause motion and save battery.",checked:t.bgAnimate!==
!1,onChange:h=>n({bgAnimate:h})}),u.jsx("h4",{className:"ft-subhead",children:"Animated"}),u.jsx("div",{className:"ft-bg\
grid",children:yd.map(h=>u.jsx("button",{type:"button",className:`ft-bgswatch ft-animsw ft-animsw-${h.id} ${E.kind==="an\
imated"&&E.id===h.id?"is-active":""}`,"aria-label":`${h.name} animated background`,onClick:()=>n({background:{kind:"anim\
ated",id:h.id}})},h.id))}),u.jsx("h4",{className:"ft-subhead",children:"Photos"}),u.jsx("div",{className:"ft-bggrid",children:xp.
map(h=>u.jsx(Qp,{id:h.id,name:h.name,active:E.kind==="builtin"&&E.id===h.id,onPick:()=>n({background:{kind:"builtin",id:h.
id}})},h.id))}),u.jsx("h4",{className:"ft-subhead",children:"Colors"}),u.jsx("div",{className:"ft-bggrid",children:mi.map(
h=>u.jsx("button",{type:"button",className:`ft-bgswatch ${E.kind==="gradient"&&E.id===h.id?"is-active":""}`,style:{backgroundImage:h.
css},"aria-label":h.name,onClick:()=>n({background:{kind:"gradient",id:h.id}})},h.id))}),u.jsxs("div",{className:"ft-fie\
ld is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"Pinterest, image or video link"}),u.jsx("spa\
n",{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image lin\
k (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match it\
s own shape, never stretched. Saved links reload each visit. When a direct image load is blocked, the link you paste is \
fetched through a public image relay (weserv.nl), so never use private boards or private URLs."}),u.jsxs("span",{className:"\
ft-inrow",children:[u.jsx("input",{className:"ft-textinput",value:d,placeholder:"https://www.pinterest.com/pin/…",onChange:h=>m(
h.target.value),inputMode:"url"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:U,children:"Use \
link"})]}),u.jsxs("span",{className:"ft-inrow",children:[u.jsxs("label",{className:"ft-ghost is-compact ft-filebtn",children:[
"Upload image or video",u.jsx("input",{type:"file",accept:"image/*,video/*","aria-label":"Upload background image or vid\
eo file",className:"ft-fileinput",onChange:h=>{var Q;return c((Q=h.target.files)==null?void 0:Q[0])}})]}),u.jsx("span",{
className:"ft-field-hint",children:"Lasts until the tab reloads."})]}),r?u.jsx("span",{className:"ft-field-hint",children:r}):
null]}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"Impor\
ted image or video fit"}),u.jsxs("span",{className:"ft-inrow",children:[u.jsx("button",{type:"button",className:`ft-chip\
btn ${t.customFit!=="contain"?"is-active":""}`,onClick:()=>n({customFit:"cover"}),children:"Crop to fill"}),u.jsx("butto\
n",{type:"button",className:`ft-chipbtn ${t.customFit==="contain"?"is-active":""}`,onClick:()=>n({customFit:"contain"}),
children:"Show whole image"})]}),u.jsx("span",{className:"ft-field-hint",children:"Crop fills the screen. Show whole ima\
ge preserves the full composition with plain dark space where needed. No blur-fill or stretching."})]}),u.jsx(Be,{label:"\
Enhance imported images",hint:"Sharpens and boosts images you paste or upload. Runs on your device only; images never le\
ave this browser.",checked:t.enhance!==!1,onChange:h=>n({enhance:h})}),u.jsxs("div",{className:"ft-field",children:[u.jsx(
"span",{className:"ft-field-label",children:"Darken background"}),u.jsx("input",{type:"range",min:.15,max:.85,step:.05,value:t.
scrim,"aria-label":"Background darkness",onChange:h=>n({scrim:parseFloat(h.target.value)})})]})]}),u.jsxs("div",{className:"\
ft-field",children:[u.jsx("span",{className:"ft-field-label",children:"Start over"}),u.jsx("button",{type:"button",className:"\
ft-ghost is-compact",onClick:w,children:"Reset settings"})]}),u.jsxs("p",{className:"ft-field-hint",children:["Your sett\
ings, tasks and stats stay in this browser. Link backgrounds and sounds are fetched from the sites you paste, through th\
e weserv.nl image relay when a direct load is blocked; Spotify playback happens inside Spotify's official player; select\
ed catalog videos stream from Pixabay's CDN. ",z]})]})});function Jp(){return typeof window<"u"&&/[?&]popout=1/.test(window.
location.search)?u.jsx(Yp,{}):u.jsx(qp,{})}function qp(){var Va;const[e,t,n]=Jr("ft-settings.v2",Fl),[r,i,l]=Jr("ft-task\
s.v1",{tasks:[],activeId:null}),[o,a,s]=Jr("ft-stats.v1",{days:{}}),[c,y,p]=Jr("ft-session.v1",null),g=x.useMemo(()=>({focus:e.
focusMin*6e4,short:e.shortMin*6e4,long:e.longMin*6e4}),[e.focusMin,e.shortMin,e.longMin]),[S,v]=x.useState("focus"),[w,z]=x.
useState(!1),[f,d]=x.useState(g.focus),[m,k]=x.useState(0),[R,M]=x.useState("none"),[P,j]=x.useState(!1),A=x.useRef(0),E=x.
useRef(!1);E.current=w;const U=x.useRef(S);U.current=S;const ue=x.useRef(f);ue.current=f;const V=x.useRef(e.accent);V.current=
e.accent;const[h,Q]=x.useState(null),[mt,zn]=x.useState(null),[L,I]=x.useState(null),[O,B]=x.useState(""),[q,Dt]=x.useState(
null),[nt,ze]=x.useState(""),ee=x.useRef(null),Ie=x.useRef(null),Mr=x.useRef(null),Ra=x.useCallback(async _=>{B("Loading\
 background…");try{const C=_.trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(C)&&!/pin(it)?\./i.test(C))return Q(F=>(F&&
F.url.startsWith("blob:")&&URL.revokeObjectURL(F.url),{url:C,kind:"video"})),B("Background applied."),!0;const b=await Fp(
_);return b.type.startsWith("video/")?Q(F=>(F&&F.url.startsWith("blob:")&&URL.revokeObjectURL(F.url),{url:URL.createObjectURL(
b),kind:"video"})):Q(F=>(F&&F.url.startsWith("blob:")&&URL.revokeObjectURL(F.url),{url:URL.createObjectURL(b),kind:"imag\
e"})),B("Background applied."),!0}catch(C){const b=C instanceof Error&&C.message==="short pin link"?"Short pin.it links \
cannot be resolved here. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous background \
is unchanged.":"Could not load that pin or link. Private or deleted pins cannot be read. Use a public pin link, a direct\
 image link, or upload the image below. Your previous background is unchanged.";return B(b),!1}},[]),Ma=x.useCallback(async _=>{
ze("Loading sound…");try{const C=await Lo(_);if(!/^audio\//.test(C.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.
test(_))throw new Error("not audio");return Dt(b=>(b&&URL.revokeObjectURL(b),URL.createObjectURL(C))),ze("Sound saved. I\
t will ring when a session ends."),!0}catch{return ze("That link blocks cross-site loading. Download the sound to your d\
evice and upload it instead. Your previous sound is unchanged."),!1}},[]),tl=x.useRef(""),nl=x.useRef("");x.useEffect(()=>{
n.ready&&e.background.kind==="link"&&e.background.source&&e.background.source!==tl.current&&(tl.current=e.background.source,
Ra(e.background.source))},[n.ready,e.background]),x.useEffect(()=>{var C;if(!n.ready)return;const _=((C=e.customAlarm)==
null?void 0:C.source)||"";e.alarmSound==="custom"&&_&&_!==nl.current&&(nl.current=_,Ma(_))},[n.ready,e.alarmSound,e.customAlarm]);
const Pa=x.useRef(!1);x.useEffect(()=>{var _;!n.ready||Pa.current||(Pa.current=!0,e.background.kind==="upload"&&(Se({background:{
kind:"gradient",id:"dusk"}}),B("Your uploaded image resets when the tab reloads. Upload it again, or save a link instead\
.")),!((_=e.customAlarm)!=null&&_.source)&&e.alarmSound==="custom"&&(Se({alarmSound:"bell"}),ze("Your uploaded sound res\
ets when the tab reloads. Upload it again, or save a link instead.")))},[n.ready]),x.useEffect(()=>{n.ready&&(!e.accent||
!e.font||!e.clockStyle||!e.clockSize||typeof e.showDots!="boolean"||typeof e.spotifyOpen!="boolean"||e.spotify===void 0||
typeof e.bgAnimate!="boolean")&&t(_=>({...Fl,..._}))},[n.ready]);const pt=e.background;x.useEffect(()=>{let _=!0;if(n.ready){
if(pt.kind==="builtin"){const C=pt.id&&qs[pt.id]?pt.id:"rain";Il[C]?I(Il[C]):(I(null),qs[C]().then(b=>{Il[C]=b.default,_&&
I(b.default)}).catch(()=>{}))}return()=>{_=!1}}},[n.ready,pt.kind,pt.id]);const La=x.useRef(!1),Xe=x.useCallback(_=>{p.ready&&
y({phase:_.phase,running:_.running,endAt:_.endAt||0,remainingMs:_.remainingMs,cycleCount:_.cycleCount})},[p.ready]);x.useEffect(
()=>{if(!p.ready||La.current||(La.current=!0,!c))return;const _=c.phase==="short"||c.phase==="long"?c.phase:"focus";if(v(
_),k(c.cycleCount||0),c.running&&c.endAt>Date.now()+500)A.current=c.endAt,d(c.endAt-Date.now()),z(!0);else if(c.running)
d(ye.current[_]),z(!1);else{const C=typeof c.remainingMs=="number"&&c.remainingMs>0?Math.min(c.remainingMs,ye.current[_]):
ye.current[_];d(C),z(!1)}},[p.ready]);const en=x.useRef({}),ye=x.useRef(g);ye.current=g;const Ta=x.useCallback(_=>{const C=U.
current;let b="focus",F=m;if(C==="focus"){if(F=_?m:m+1,k(F),b=F%Math.max(1,e.longEvery)===0&&F>0?"long":"short",!_){const br=Kn(),
Ba=o.days[br]||{focusSec:0,sessions:0};a({days:{...o.days,[br]:{focusSec:Ba.focusSec+Math.round(ye.current.focus/1e3),sessions:Ba.
sessions+1}}}),r.activeId&&i(al=>({...al,tasks:al.tasks.map(zr=>zr.id===al.activeId?{...zr,done:zr.done+1}:zr)}))}}else b=
"focus";if(e.alarmSound==="custom"&&ee.current)try{ee.current.currentTime=0,ee.current.volume=e.alarmVolume,ee.current.play().
catch(()=>Qn("bell",e.alarmVolume,e.alarmRepeat))}catch{Qn("bell",e.alarmVolume,e.alarmRepeat)}else e.alarmSound==="cust\
om"?Qn("bell",e.alarmVolume,e.alarmRepeat):Qn(e.alarmSound,e.alarmVolume,e.alarmRepeat);if(e.notifications&&typeof Notification<
"u"&&Notification.permission==="granted")try{new Notification(`${gt[C]} finished`,{body:b==="focus"?"Time to focus.":`Ti\
me for a ${gt[b].toLowerCase()}.`})}catch{}delete en.current[C],v(b),d(ye.current[b]);const te=b==="focus"?e.autoFocus:e.
autoBreaks;te?(A.current=Date.now()+ye.current[b],z(!0)):z(!1),Xe({phase:b,running:te,endAt:te?Date.now()+ye.current[b]:
0,remainingMs:ye.current[b],cycleCount:F})},[m,e,o,a,i,Xe]),Pr=x.useRef(Ta);Pr.current=Ta,x.useEffect(()=>{if(!w)return;
const _=window.setInterval(()=>{const C=A.current-Date.now();C<=0?Pr.current(!1):d(b=>Math.ceil(b/1e3)!==Math.ceil(C/1e3)?
C:b)},250);return()=>window.clearInterval(_)},[w]),x.useEffect(()=>{E.current||(delete en.current[U.current],d(g[U.current]))},
[g]);const ba=x.useRef(0);x.useEffect(()=>{if(!w||!e.tick)return;const _=window.setInterval(()=>{const C=Math.ceil((A.current-
Date.now())/1e3);C!==ba.current&&(ba.current=C,Lp(e.alarmVolume))},250);return()=>window.clearInterval(_)},[w,e.tick,e.alarmVolume]),
x.useEffect(()=>{document.title=`${ln(f)} - ${gt[S]} - Study focus timer`},[f,S]),x.useEffect(()=>(Ie.current&&(Ie.current(),
Ie.current=null),e.ambient!=="none"&&(Ie.current=Ip(e.ambient,e.ambientVolume)),()=>{Ie.current&&(Ie.current(),Ie.current=
null)}),[e.ambient,e.ambientVolume]),x.useEffect(()=>{if(!e.keepAwake||!("wakeLock"in navigator))return;let _=!1;const C=()=>{
navigator.wakeLock.request("screen").then(F=>{_||(Mr.current=F)}).catch(()=>{})};C();const b=()=>{document.visibilityState===
"visible"&&C()};return document.addEventListener("visibilitychange",b),()=>{if(_=!0,document.removeEventListener("visibi\
litychange",b),Mr.current){try{Mr.current.release()}catch{}Mr.current=null}}},[e.keepAwake]),x.useEffect(()=>{q?(ee.current=
new Audio(q),ee.current.preload="auto"):ee.current=null},[q]);const za=x.useRef(()=>{}),Ia=x.useRef(()=>{}),Oa=x.useRef(
()=>{}),tn=x.useCallback(()=>{if(el(),ee.current)try{ee.current.pause(),ee.current.currentTime=0}catch{}A.current=Date.now()+
ue.current,z(!0),Xe({phase:U.current,running:!0,endAt:A.current,remainingMs:ue.current,cycleCount:m})},[Xe,m]),nn=x.useCallback(
()=>{z(!1),Xe({phase:U.current,running:!1,remainingMs:ue.current,cycleCount:m})},[Xe,m]),In=x.useCallback(()=>{delete en.
current[U.current],z(!1),d(ye.current[U.current]),Xe({phase:U.current,running:!1,remainingMs:ye.current[U.current],cycleCount:m})},
[Xe,m]),Lr=x.useCallback(()=>{Pr.current(!0)},[]);za.current=tn,Ia.current=nn,Oa.current=In;const On=x.useCallback(_=>{const C=U.
current;if(_===C)return;const b=E.current?Math.max(0,A.current-Date.now()):ue.current;b>0&&b<ye.current[C]?en.current[C]=
b:delete en.current[C];const F=en.current[_],te=typeof F=="number"&&F>0?Math.min(F,ye.current[_]):ye.current[_];z(!1),v(
_),d(te),Xe({phase:_,running:!1,remainingMs:te,cycleCount:m})},[Xe,m]),rl=x.useCallback(()=>{document.fullscreenElement?
document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]),[Fa,Da]=x.useState(
null),jd=x.useCallback(()=>{const _=window.documentPictureInPicture;if(_!=null&&_.requestWindow){_.requestWindow({width:320,
height:200}).then(C=>{for(const b of Array.from(document.styleSheets))try{const F=Array.from(b.cssRules||[]).map(br=>br.
cssText).join(`
`),te=C.document.createElement("style");te.textContent=F,C.document.head.appendChild(te)}catch{const F=b.href;if(F){const te=C.
document.createElement("link");te.rel="stylesheet",te.href=F,C.document.head.appendChild(te)}}C.document.body.className=
"ft-pip-body",C.addEventListener("pagehide",()=>Da(null)),Da(C)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);x.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const _=new BroadcastChannel(
"sft-sync"),C=()=>_.postMessage({t:"state",phase:U.current,remaining:ue.current,running:E.current,dur:ye.current[U.current],
accent:V.current,at:Date.now()});C();const b=window.setInterval(C,1e3);return _.onmessage=F=>{const te=F.data;(te==null?
void 0:te.t)==="cmd"&&(te.cmd==="toggle"?E.current?Ia.current():za.current():te.cmd==="reset"?Oa.current():te.cmd==="ski\
p"&&Pr.current(!0))},()=>{window.clearInterval(b),_.close()}},[]);const Ed=x.useCallback(()=>{M("none"),j(!0)},[]),Rd=R===
"tasks",Md=R==="settings",Pd=x.useCallback(()=>M(_=>_==="tasks"?"none":"tasks"),[]),Ld=x.useCallback(()=>M(_=>_==="setti\
ngs"?"none":"settings"),[]);x.useEffect(()=>{const _=C=>{var F;const b=(F=C.target)==null?void 0:F.tagName;b==="INPUT"||
b==="TEXTAREA"||b==="SELECT"||(C.code==="Space"?(C.preventDefault(),E.current?nn():tn()):C.key==="r"||C.key==="R"?In():C.
key==="s"||C.key==="S"?Lr():C.key==="1"?On("focus"):C.key==="2"?On("short"):C.key==="3"?On("long"):C.key==="m"||C.key===
"M"?j(te=>!te):(C.key==="f"||C.key==="F")&&rl())};return window.addEventListener("keydown",_),()=>window.removeEventListener(
"keydown",_)},[tn,nn,In,Lr,On,rl]);const Se=x.useCallback(_=>t(C=>({...C,..._})),[t]),Td=x.useCallback(_=>{if(!_)return;
const C=_.type.startsWith("video/");if(!C&&!_.type.startsWith("image/")){B("That file is not an image or video.");return}
zn(b=>(b&&URL.revokeObjectURL(b.url),{url:URL.createObjectURL(_),kind:C?"video":"image"})),Se({background:{kind:"upload"}}),
B("Background applied for this visit. Use a link to keep it across visits.")},[Se]),bd=x.useCallback(_=>{if(_){if(!_.type.
startsWith("audio/")){ze("That file is not an audio file.");return}Dt(C=>(C&&URL.revokeObjectURL(C),URL.createObjectURL(
_))),Se({alarmSound:"custom",customAlarm:{source:"",name:_.name}}),ze(`Using "${_.name}" for this visit. Use a link to k\
eep it across visits.`)}},[Se]),zd=x.useCallback(_=>{var C;if(_==="custom"){if(ee.current)try{ee.current.currentTime=0,ee.
current.volume=e.alarmVolume,ee.current.play().catch(()=>ze("Your browser blocked playback before the first tap. Press S\
tart once, then preview again."))}catch{}else ze((C=e.customAlarm)!=null&&C.source?"Still loading your sound.":"Add a li\
nk or upload a file first.");return}Qn(_,e.alarmVolume,!1)},[e.alarmVolume,e.customAlarm]),Id=x.useCallback(_=>{if(!_){Se(
{notifications:!1});return}if(!(typeof Notification>"u"))try{const C=Notification.requestPermission();C&&typeof C.then==
"function"?C.then(b=>Se({notifications:b==="granted"})).catch(()=>Se({notifications:!1})):Se({notifications:Notification.
permission==="granted"})}catch{Se({notifications:!1})}},[Se]),Od=x.useCallback(()=>t(Fl),[t]),Fd=x.useMemo(()=>({focusSec:0,
sessions:0}),[]),Tr=o.days[Kn()]||Fd,il=x.useMemo(()=>{var b,F;let _=0;const C=new Date;for(((b=o.days[Kn(C)])==null?void 0:
b.sessions)>0||C.setDate(C.getDate()-1);((F=o.days[Kn(C)])==null?void 0:F.sessions)>0;)_++,C.setDate(C.getDate()-1);return _},
[o.days]),Dd=x.useMemo(()=>{const _=[];for(let C=6;C>=0;C--){const b=new Date;b.setDate(b.getDate()-C);const F=o.days[Kn(
b)];_.push({label:`${"SMTWTFS"[b.getDay()]}`,minutes:Math.round(((F==null?void 0:F.focusSec)||0)/60)})}return _},[o.days]),
Ad=x.useMemo(()=>e.showChip?`${Tr.sessions} ${Tr.sessions===1?"session":"sessions"} · ${Math.round(Tr.focusSec/60)} min${il>
1?` · ${il}-day streak`:""}`:null,[e.showChip,Tr,il]),$d=n.ready&&l.ready&&s.ready,Ud=((Va=kd.find(_=>_.id===e.font))==
null?void 0:Va.css)||"inherit",ll=1-f/Math.max(1,g[S]),ol=118,Aa=2*Math.PI*ol,Vd=typeof Notification<"u",Bd=typeof navigator<
"u"&&"wakeLock"in navigator,Wd=typeof document<"u"&&document.fullscreenEnabled,$a=r.tasks.find(_=>_.id===r.activeId)||null,
Ua=e.spotify?_d(e.spotify):null;return u.jsxs("div",{className:`ft-root ${P?"is-compact":""}`,style:{"--ft-accent":e.accent,
"--ft-font":Ud},children:[u.jsx(Wp,{kind:pt.kind,id:pt.id,scrim:e.scrim,builtinSrc:L,linkBg:h,uploadBg:mt,paused:P,animate:e.
bgAnimate!==!1,customFit:e.customFit||"cover",enhance:e.enhance!==!1}),u.jsx(Kp,{chip:Ad,panel:R,fullscreenSupported:Wd,
onFullscreen:rl,onTasks:Pd,onSettings:Ld,onMinimize:Ed,onPopout:jd}),u.jsxs("main",{className:"ft-center",children:[u.jsx(
"nav",{className:"ft-modes","aria-label":"Timer mode",children:["focus","short","long"].map(_=>u.jsx("button",{type:"but\
ton",className:`ft-mode ${S===_?"is-active":""}`,onClick:()=>On(_),children:gt[_]},_))}),e.showDots?u.jsx("div",{className:"\
ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,e.longEvery)}).map((_,C)=>u.jsx("span",{className:`\
ft-dot ${C<m%Math.max(1,e.longEvery)||m>0&&m%Math.max(1,e.longEvery)===0&&S!=="focus"?"is-done":""}`},C))}):null,u.jsxs(
"div",{className:`ft-clock is-${e.clockSize}`,role:"timer","aria-live":"off","aria-label":`${gt[S]} timer, ${ln(f)} rema\
ining`,children:[e.clockStyle==="ring"?u.jsxs("svg",{className:"ft-ring",viewBox:"0 0 260 260","aria-hidden":"true",children:[
u.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:ol}),u.jsx("circle",{className:"ft-ring-fill",cx:"130",cy:"\
130",r:ol,strokeDasharray:Aa,strokeDashoffset:Aa*(1-ll)})]}):null,u.jsxs("div",{className:"ft-time-wrap",children:[u.jsx(
"div",{className:"ft-time",children:ln(f)}),u.jsx("div",{className:"ft-taskline",children:$a?$a.title:S==="focus"?"Pick \
a task or just focus":"Rest up"})]})]}),e.clockStyle==="bar"?u.jsx("div",{className:"ft-progressbar","aria-hidden":"true",
children:u.jsx("span",{style:{width:`${Math.round(ll*100)}%`}})}):null,u.jsxs("div",{className:"ft-controls",children:[u.
jsx("button",{type:"button",className:"ft-primary",onClick:()=>w?nn():tn(),children:w?"Pause":f<g[S]?"Resume":"Start"}),
u.jsx("button",{type:"button",className:"ft-ghost",onClick:In,children:"Reset"}),u.jsx("button",{type:"button",className:"\
ft-ghost",onClick:Lr,children:"Skip"})]}),e.showHint?u.jsx("p",{className:"ft-hint",children:"Space start or pause · R r\
eset · S skip · M minimize · F fullscreen"}):null]}),P?u.jsxs("div",{className:"ft-compactpill",role:"dialog","aria-l\
abel":"Minimized timer",children:[u.jsx("span",{className:"ft-compactphase",children:gt[S]}),u.jsx("span",{className:"ft\
-compacttime",children:ln(f)}),u.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":w?"Pause":"Start",onClick:()=>w?
nn():tn(),children:w?"❚❚":"▶"}),u.jsx("button",{type:"button",className:"ft-compactbtn","aria-label":"Expand timer",
onClick:()=>j(!1),children:"⤢"})]}):null,Rd?u.jsx(Gp,{tasksState:r,setTasksState:i,week:Dd,ready:$d,savedMessage:l.message||
s.message||"",onClose:()=>M("none")}):null,Md?u.jsx(Zp,{settings:e,patch:Se,bgStatus:O,soundStatus:nt,lastBgSrcRef:tl,lastSndSrcRef:nl,
resolveLinkBg:Ra,resolveCustomSound:Ma,uploadBg:Td,uploadSound:bd,previewAlarm:zd,requestNotifications:Id,notificationsSupported:Vd,
wakeLockSupported:Bd,onResetSettings:Od,savedMessage:n.message||"",onClose:()=>M("none")}):null,Fa?pd.createPortal(u.jsxs(
"div",{className:"ft-pip",children:[u.jsx("div",{className:"ft-pip-phase",children:gt[S]}),u.jsx("div",{className:"ft-pi\
p-time",children:ln(f)}),u.jsx("div",{className:"ft-pip-bar","aria-hidden":"true",children:u.jsx("span",{style:{width:`${Math.
round(ll*100)}%`}})}),u.jsxs("div",{className:"ft-pip-btns",children:[u.jsx("button",{type:"button",className:"ft-primar\
y is-compact",onClick:()=>w?nn():tn(),children:w?"Pause":"Start"}),u.jsx("button",{type:"button",className:"ft-ghost is-\
compact",onClick:In,children:"Reset"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:Lr,children:"\
Skip"})]})]}),Fa.document.body):null,Ua?u.jsxs("div",{className:`ft-spotify ${e.spotifyOpen?"is-open":""}`,children:[u.jsx(
"div",{className:"ft-spotify-frame","aria-hidden":!e.spotifyOpen,children:u.jsx("iframe",{src:Ua,width:"100%",height:"15\
2",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"\
Spotify player"})}),u.jsx("button",{type:"button",className:"ft-spotify-toggle","aria-expanded":e.spotifyOpen,onClick:()=>Se(
{spotifyOpen:!e.spotifyOpen}),children:e.spotifyOpen?"Hide player":"♫ Music"})]}):null]})}hd(document.getElementById("\
root")).render(u.jsx(Jp,{}));
