(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.
querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.
addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){
const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin===
"use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}
function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Hd(e){return e&&e.__esModule&&Object.prototype.
hasOwnProperty.call(e,"default")?e.default:e}var ru={exports:{}},Di={},iu={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Symbol.for("react.element"),Qd=Symbol.for("react.portal"),Kd=Symbol.for("react.fragment"),Gd=Symbol.for("react\
.strict_mode"),Yd=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),Jd=Symbol.
for("react.forward_ref"),qd=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),Qa=Symbol.
iterator;function nf(e){return e===null||typeof e!="object"?null:(e=Qa&&e[Qa]||e["@@iterator"],typeof e=="function"?e:null)}
var lu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},
ou=Object.assign,au={};function Ln(e,t,n){this.props=e,this.context=t,this.refs=au,this.updater=n||lu}Ln.prototype.isReactComponent=
{};Ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): \
takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(
this,e,t,"setState")};Ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function su(){}
su.prototype=Ln.prototype;function Io(e,t,n){this.props=e,this.context=t,this.refs=au,this.updater=n||lu}var Oo=Io.prototype=
new su;Oo.constructor=Io;ou(Oo,Ln.prototype);Oo.isPureReactComponent=!0;var Ka=Array.isArray,uu=Object.prototype.hasOwnProperty,
Fo={current:null},cu={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.
ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)uu.call(t,r)&&!cu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.
length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)
for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cr,type:e,key:l,ref:o,props:i,_owner:Fo.current}}
function rf(e,t){return{$$typeof:Cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Do(e){return typeof e==
"object"&&e!==null&&e.$$typeof===Cr}function lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}
var Ga=/\/+/g;function sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lf(""+e.key):t.toString(36)}function ti(e,t,n,r,i){
var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"num\
ber":o=!0;break;case"object":switch(e.$$typeof){case Cr:case Qd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+sl(o,0):r,Ka(i)?
(n="",e!=null&&(n=e.replace(Ga,"$&/")+"/"),ti(i,t,n,"",function(c){return c})):i!=null&&(Do(i)&&(i=rf(i,n+(!i.key||o&&o.
key===i.key?"":(""+i.key).replace(Ga,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ka(e))for(var a=0;a<e.length;a++){
l=e[a];var s=r+sl(l,a);o+=ti(l,t,n,s,i)}else if(s=nf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.
value,s=r+sl(l,a++),o+=ti(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React chil\
d (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a co\
llection of children, use an array instead.");return o}function Ir(e,t,n){if(e==null)return e;var r=[],i=0;return ti(e,r,
"","",function(l){return t.call(n,l,i++)}),r}function of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){
(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e.
_result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={
current:null},ni={transition:null},af={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:ni,ReactCurrentOwner:Fo};function fu(){
throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Ir,forEach:function(e,t,n){Ir(e,
function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ir(e,function(){t++}),t},toArray:function(e){return Ir(
e,function(t){return t})||[]},only:function(e){if(!Do(e))throw Error("React.Children.only expected to receive a single R\
eact element child.");return e}};A.Component=Ln;A.Fragment=Kd;A.Profiler=Yd;A.PureComponent=Io;A.StrictMode=Gd;A.Suspense=
qd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;A.act=fu;A.cloneElement=function(e,t,n){if(e==null)throw Error(
"React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ou({},e.props),i=e.key,l=e.
ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Fo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)
var a=e.type.defaultProps;for(s in t)uu.call(t,s)&&!cu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.
length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Cr,
type:e.type,key:i,ref:l,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:Zd,_currentValue:e,_currentValue2:e,
_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xd,_context:e},e.Consumer=
e};A.createElement=du;A.createFactory=function(e){var t=du.bind(null,e);return t.type=e,t};A.createRef=function(){return{
current:null}};A.forwardRef=function(e){return{$$typeof:Jd,render:e}};A.isValidElement=Do;A.lazy=function(e){return{$$typeof:tf,
_payload:{_status:-1,_result:e},_init:of}};A.memo=function(e,t){return{$$typeof:ef,type:e,compare:t===void 0?null:t}};A.
startTransition=function(e){var t=ni.transition;ni.transition={};try{e()}finally{ni.transition=t}};A.unstable_act=fu;A.useCallback=
function(e,t){return ve.current.useCallback(e,t)};A.useContext=function(e){return ve.current.useContext(e)};A.useDebugValue=
function(){};A.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};A.useEffect=function(e,t){return ve.current.
useEffect(e,t)};A.useId=function(){return ve.current.useId()};A.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(
e,t,n)};A.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ve.
current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ve.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ve.
current.useReducer(e,t,n)};A.useRef=function(e){return ve.current.useRef(e)};A.useState=function(e){return ve.current.useState(
e)};A.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ve.
current.useTransition()};A.version="18.3.1";iu.exports=A;var S=iu.exports;const bt=Hd(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=S,uf=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,ff=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.
ReactCurrentOwner,mf={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+
n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)df.call(t,r)&&!mf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&
e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:uf,type:e,key:l,ref:o,props:i,_owner:ff.
current}}Di.Fragment=cf;Di.jsx=mu;Di.jsxs=mu;ru.exports=Di;var u=ru.exports,pu={exports:{}},Le={},hu={exports:{}},gu={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,I){var F=M.length;M.push(I);e:for(;0<F;){var V=F-1>>>1,Z=M[V];if(0<i(Z,I))M[V]=I,M[F]=Z,F=V;else
break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var I=M[0],F=M.pop();if(F!==
I){M[0]=F;e:for(var V=0,Z=M.length,Dt=Z>>>1;V<Dt;){var nt=2*(V+1)-1,ze=M[nt],J=nt+1,be=M[J];if(0>i(ze,F))J<Z&&0>i(be,ze)?
(M[V]=be,M[J]=F,V=J):(M[V]=ze,M[nt]=F,V=nt);else if(J<Z&&0>i(be,F))M[V]=be,M[J]=F,V=J;else break e}}return I}function i(M,I){
var F=M.sortIndex-I.sortIndex;return F!==0?F:M.id-I.id}if(typeof performance=="object"&&typeof performance.now=="functio\
n"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.
now()-a}}var s=[],c=[],p=1,y=null,g=3,w=!1,v=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout==
"function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&
navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){
for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=M)r(c),I.sortIndex=I.expirationTime,t(s,I);else
break;I=n(c)}}function x(M){if(k=!1,m(M),!v)if(n(s)!==null)v=!0,mt(E);else{var I=n(c);I!==null&&bn(x,I.startTime-M)}}function E(M,I){
v=!1,k&&(k=!1,f(L),L=-1),w=!0;var F=g;try{for(m(I),y=n(s);y!==null&&(!(y.expirationTime>I)||M&&!U());){var V=y.callback;
if(typeof V=="function"){y.callback=null,g=y.priorityLevel;var Z=V(y.expirationTime<=I);I=e.unstable_now(),typeof Z=="fu\
nction"?y.callback=Z:y===n(s)&&r(s),m(I)}else r(s);y=n(s)}if(y!==null)var Dt=!0;else{var nt=n(c);nt!==null&&bn(x,nt.startTime-
I),Dt=!1}return Dt}finally{y=null,g=F,w=!1}}var j=!1,R=null,L=-1,O=5,T=-1;function U(){return!(e.unstable_now()-T<O)}function ke(){
if(R!==null){var M=e.unstable_now();T=M;var I=!0;try{I=R(!0,M)}finally{I?Ge():(j=!1,R=null)}}else j=!1}var Ge;if(typeof d==
"function")Ge=function(){d(ke)};else if(typeof MessageChannel<"u"){var h=new MessageChannel,re=h.port2;h.port1.onmessage=
ke,Ge=function(){re.postMessage(null)}}else Ge=function(){b(ke,0)};function mt(M){R=M,j||(j=!0,Ge())}function bn(M,I){L=
b(function(){M(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.
unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){
M.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,mt(E))},e.unstable_forceFrameRate=function(M){0>M||
125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is n\
ot supported"):O=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=
function(){return n(s)},e.unstable_next=function(M){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var F=g;g=I;
try{return M()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=
function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var F=g;g=M;try{return I()}finally{g=F}},e.
unstable_scheduleCallback=function(M,I,F){var V=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F==
"number"&&0<F?V+F:V):F=V,M){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:
Z=5e3}return Z=F+Z,M={id:p++,callback:I,priorityLevel:M,startTime:F,expirationTime:Z,sortIndex:-1},F>V?(M.sortIndex=F,t(
c,M),n(s)===null&&M===n(c)&&(k?(f(L),L=-1):k=!0,bn(x,F-V))):(M.sortIndex=Z,t(s,M),v||w||(v=!0,mt(E))),M},e.unstable_shouldYield=
U,e.unstable_wrapCallback=function(M){var I=g;return function(){var F=g;g=I;try{return M.apply(this,arguments)}finally{g=
F}}}})(gu);hu.exports=gu;var pf=hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=S,Pe=pf;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)
t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or u\
se the non-minified dev environment for full errors and additional helpful warnings."}var yu=new Set,ar={};function Jt(e,t){
Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(ar[e]=t,e=0;e<t.length;e++)yu.add(t[e])}var st=!(typeof window>"u"||typeof window.
document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
Ya={},Xa={};function yf(e){return Al.call(Xa,e)?!0:Al.call(Ya,e)?!1:gf.test(e)?Xa[e]=!0:(Ya[e]=!0,!1)}function vf(e,t,n,r){
if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?
!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wf(e,t,n,r){if(t===
null||typeof t>"u"||vf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:
return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,
this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,
this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressConte\
ntEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["\
acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){
var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){
ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].
forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer\
 disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline \
readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),
null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["captur\
e","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){
ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,
!1)});var Ao=/[\-:]([a-z])/g;function $o(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form base\
line-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering \
dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adj\
ust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical \
horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-pos\
ition overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity st\
rikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-mi\
terlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness u\
nicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert\
-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ao,
$o);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(
" ").forEach(function(e){var t=e.replace(Ao,$o);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base",
"xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ao,$o);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/nam\
espace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=
new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(
function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uo(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;
(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wf(t,n,i,r)&&(n=null),r||i===null?
yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:
"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?
e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for(
"react.element"),on=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),Vo=Symbol.for("react.strict_mode"),$l=Symbol.
for("react.profiler"),vu=Symbol.for("react.provider"),wu=Symbol.for("react.context"),Bo=Symbol.for("react.forward_ref"),
Ul=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),Wo=Symbol.for("react.memo"),vt=Symbol.for("react.la\
zy"),ku=Symbol.for("react.offscreen"),Za=Symbol.iterator;function Fn(e){return e===null||typeof e!="object"?null:(e=Za&&
e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ul;function Gn(e){if(ul===void 0)try{throw Error()}catch(n){
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
!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;
if(typeof e=="string")return e;switch(e){case an:return"Fragment";case on:return"Portal";case $l:return"Profiler";case Vo:
return"StrictMode";case Ul:return"Suspense";case Vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wu:
return(e.displayName||"Context")+".Consumer";case vu:return(e._context.displayName||"Context")+".Provider";case Bo:var t=e.
render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wo:return t=
e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}
function xf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:
return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||
e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"\
Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===Vo?"StrictMode":"Mode";case 22:return"\
Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:
return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||
null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"\
undefined":return e;case"object":return e;default:return""}}function xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===
"input"&&(t==="checkbox"||t==="radio")}function Sf(e){var t=xu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.
constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="funct\
ion"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){
r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){
r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=Sf(
e))}function Su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xu(e)?e.checked?
"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>
"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var n=t.checked;return X({},t,{
defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ja(e,t){var n=t.
defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState=
{initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _u(e,t){
t=t.checked,t!=null&&Uo(e,"checked",t,!1)}function Hl(e,t){_u(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===
0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute(
"value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,Tt(t.defaultValue)),
t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qa(e,t,n){if(t.hasOwnProperty("v\
alue")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))
return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=
!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||pi(e.ownerDocument)!==e)&&(n==null?
e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function vn(e,t,n,r){
if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),
e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].
value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=
!0)}}function Kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return X({},t,{value:void 0,defaultValue:void 0,
children:""+e._wrapperState.initialValue})}function es(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=
null){if(t!=null)throw Error(N(92));if(Yn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState=
{initialValue:Tt(n)}}function Cu(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.
defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ts(e){var t=e.textContent;
t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nu(e){switch(e){case"svg":return"http://www.w3.\
org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){
return e==null||e==="http://www.w3.org/1999/xhtml"?Nu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://w\
ww.w3.org/1999/xhtml":e}var Dr,ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.
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
Jn[t]=Jn[e]})});function Eu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(
e)&&Jn[e]?(""+t).trim():t+"px"}function Ru(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===
0,i=Eu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cf=X({menuitem:!0},{area:!0,base:!0,br:!0,
col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){
if(Cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){
if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))
throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Xl(e,t){if(e.indexOf("-")===-1)
return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"\
font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Ho(e){
return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:
e}var Jl=null,wn=null,kn=null;function ns(e){if(e=Er(e)){if(typeof Jl!="function")throw Error(N(280));var t=e.stateNode;
t&&(t=Bi(t),Jl(e.stateNode,e.type,t))}}function Mu(e){wn?kn?kn.push(e):kn=[e]:wn=e}function Pu(){if(wn){var e=wn,t=kn;if(kn=
wn=null,ns(e),t)for(e=0;e<t.length;e++)ns(t[e])}}function Lu(e,t){return e(t)}function Tu(){}var fl=!1;function zu(e,t,n){
if(fl)return e(t,n);fl=!0;try{return Lu(e,t,n)}finally{fl=!1,(wn!==null||kn!==null)&&(Tu(),Pu())}}function ur(e,t){var n=e.
stateNode;if(n===null)return null;var r=Bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCaptu\
re":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onM\
ouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||
e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(
N(231,t,typeof n));return n}var ql=!1;if(st)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){ql=!0}}),window.
addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{ql=!1}function Nf(e,t,n,r,i,l,o,a,s){var c=Array.
prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var qn=!1,hi=null,gi=!1,eo=null,jf={onError:function(e){
qn=!0,hi=e}};function Ef(e,t,n,r,i,l,o,a,s){qn=!1,hi=null,Nf.apply(jf,arguments)}function Rf(e,t,n,r,i,l,o,a,s){if(Ef.apply(
this,arguments),qn){if(qn){var c=hi;qn=!1,hi=null}else throw Error(N(198));gi||(gi=!0,eo=c)}}function qt(e){var t=e,n=e;
if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?
n:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==
null)return t.dehydrated}return null}function rs(e){if(qt(e)!==e)throw Error(N(188))}function Mf(e){var t=e.alternate;if(!t){
if(t=qt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.
alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return rs(
i),e;if(l===r)return rs(i),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){
if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}
if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)
throw Error(N(188));return n.stateNode.current===n?e:t}function Iu(e){return e=Mf(e),e!==null?Ou(e):null}function Ou(e){
if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Fu=Pe.
unstable_scheduleCallback,is=Pe.unstable_cancelCallback,Pf=Pe.unstable_shouldYield,Lf=Pe.unstable_requestPaint,te=Pe.unstable_now,
Tf=Pe.unstable_getCurrentPriorityLevel,Qo=Pe.unstable_ImmediatePriority,Du=Pe.unstable_UserBlockingPriority,yi=Pe.unstable_NormalPriority,
zf=Pe.unstable_LowPriority,Au=Pe.unstable_IdlePriority,Ai=null,et=null;function bf(e){if(et&&typeof et.onCommitFiberRoot==
"function")try{et.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Ff,If=Math.
log,Of=Math.LN2;function Ff(e){return e>>>=0,e===0?32:31-(If(e)/Of|0)|0}var Ar=64,$r=4194304;function Xn(e){switch(e&-e){case 1:
return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:
return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:
return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var n=e.
pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xn(
a):(l&=o,l!==0&&(r=Xn(l)))}else o=n&~i,o!==0?r=Xn(o):l!==0&&(r=Xn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,
l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)
n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function Df(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:
return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:
return-1;default:return-1}}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<
l;){var o=31-He(l),a=1<<o,s=i[o];s===-1?(!(a&n)||a&r)&&(i[o]=Df(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function to(e){return e=
e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $u(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),
e}function ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=
0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function $f(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=
0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=
e.expirationTimes;0<n;){var i=31-He(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Ko(e,t){var n=e.entangledLanes|=t;for(e=
e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?
16:536870912:4:1}var Vu,Go,Bu,Wu,Hu,no=!1,Ur=[],Ct=null,Nt=null,jt=null,cr=new Map,dr=new Map,kt=[],Uf="mousedown mouseu\
p touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositi\
onend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
" ");function ls(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Nt=null;break;case"\
mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointerc\
apture":case"lostpointercapture":dr.delete(t.pointerId)}}function An(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e=
{blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Er(t),t!==null&&Go(t)),e):
(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vf(e,t,n,r,i){switch(t){case"\
focusin":return Ct=An(Ct,e,t,n,r,i),!0;case"dragenter":return Nt=An(Nt,e,t,n,r,i),!0;case"mouseover":return jt=An(jt,e,t,
n,r,i),!0;case"pointerover":var l=i.pointerId;return cr.set(l,An(cr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":
return l=i.pointerId,dr.set(l,An(dr.get(l)||null,e,t,n,r,i)),!0}return!1}function Qu(e){var t=Vt(e.target);if(t!==null){
var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=bu(n),t!==null){e.blockedOn=t,Hu(e.priority,function(){Bu(n)});return}}else if(t===
3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=
null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ro(e.domEventName,e.eventSystemFlags,
t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else
return t=Er(n),t!==null&&Go(t),e.blockedOn=n,!1;t.shift()}return!0}function os(e,t,n){ri(e)&&n.delete(t)}function Bf(){no=
!1,Ct!==null&&ri(Ct)&&(Ct=null),Nt!==null&&ri(Nt)&&(Nt=null),jt!==null&&ri(jt)&&(jt=null),cr.forEach(os),dr.forEach(os)}
function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,no||(no=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Bf)))}
function fr(e){function t(i){return $n(i,e)}if(0<Ur.length){$n(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===
e&&(r.blockedOn=null)}}for(Ct!==null&&$n(Ct,e),Nt!==null&&$n(Nt,e),jt!==null&&$n(jt,e),cr.forEach(t),dr.forEach(t),n=0;n<
kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)Qu(n),n.blockedOn===
null&&kt.shift()}var xn=ft.ReactCurrentBatchConfig,wi=!0;function Wf(e,t,n,r){var i=B,l=xn.transition;xn.transition=null;
try{B=1,Yo(e,t,n,r)}finally{B=i,xn.transition=l}}function Hf(e,t,n,r){var i=B,l=xn.transition;xn.transition=null;try{B=4,
Yo(e,t,n,r)}finally{B=i,xn.transition=l}}function Yo(e,t,n,r){if(wi){var i=ro(e,t,n,r);if(i===null)_l(e,t,r,ki,n),ls(e,r);else if(Vf(
i,e,t,n,r))r.stopPropagation();else if(ls(e,r),t&4&&-1<Uf.indexOf(e)){for(;i!==null;){var l=Er(i);if(l!==null&&Vu(l),l=ro(
e,t,n,r),l===null&&_l(e,t,r,ki,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else _l(e,t,r,null,n)}}var ki=null;function ro(e,t,n,r){
if(ki=null,e=Ho(r),e=Vt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bu(t),e!==null)return e;e=null}else if(n===
3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&
(e=null);return ki=e,null}function Ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"\
cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"\
invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"\
pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"\
touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"\
compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"b\
lur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"dra\
g":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"poi\
ntermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"\
mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tf()){case Qo:return 1;case Du:return 4;case yi:case zf:
return 16;case Au:return 536870912;default:return 16}default:return 16}}var St=null,Xo=null,ii=null;function Gu(){if(ii)
return ii;var e,t=Xo,n=t.length,r,i="value"in St?St.value:St.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-
e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return ii=i.slice(e,1<r?1-r:void 0)}function li(e){var t=e.keyCode;return"charCode"in
e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function as(){return!1}
function Te(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.
currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=
null?l.defaultPrevented:l.returnValue===!1)?Vr:as,this.isPropagationStopped=as,this}return X(t.prototype,{preventDefault:function(){
this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&
(n.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?
n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},
isPersistent:Vr}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,
isTrusted:0},Zo=Te(Tn),jr=X({},Tn,{view:0,detail:0}),Qf=Te(jr),pl,hl,Un,$i=X({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,
pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(e){
return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){
return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(pl=e.screenX-Un.screenX,hl=e.screenY-Un.screenY):hl=
pl=0,Un=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:hl}}),ss=Te($i),Kf=X({},$i,{dataTransfer:0}),Gf=Te(
Kf),Yf=X({},jr,{relatedTarget:0}),gl=Te(Yf),Xf=X({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zf=Te(Xf),Jf=X({},
Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qf=Te(Jf),em=X({},Tn,{data:0}),
us=Te(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"\
OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",
12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageD\
own",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"\
F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"Scro\
llLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;
return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function Jo(){return im}var lm=X({},jr,{key:function(e){
if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.
fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,
altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){
return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="ke\
ydown"||e.type==="keyup"?e.keyCode:0}}),om=Te(lm),am=X({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,
tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cs=Te(am),sm=X({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,
metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo}),um=Te(sm),cm=X({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),
dm=Te(cm),fm=X({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Te(
fm),pm=[9,13,27,32],qo=st&&"CompositionEvent"in window,er=null;st&&"documentMode"in document&&(er=document.documentMode);
var hm=st&&"TextEvent"in window&&!er,Yu=st&&(!qo||er&&8<er&&11>=er),ds=" ",fs=!1;function Xu(e,t){switch(e){case"keyup":
return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:
return!1}}function Zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function gm(e,t){switch(e){case"\
compositionend":return Zu(t);case"keypress":return t.which!==32?null:(fs=!0,ds);case"textInput":return e=t.data,e===ds&&
fs?null:e;default:return null}}function ym(e,t){if(sn)return e==="compositionend"||!qo&&Xu(e,t)?(e=Gu(),ii=Xo=St=null,sn=
!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.
char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&
t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,
number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.
toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Ju(e,t,n,r){Mu(r),t=xi(t,"onChange"),0<t.length&&(n=
new Zo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,mr=null;function wm(e){uc(e,0)}function Ui(e){
var t=dn(e);if(Su(t))return e}function km(e,t){if(e==="change")return t}var qu=!1;if(st){var yl;if(st){var vl="oninput"in
document;if(!vl){var ps=document.createElement("div");ps.setAttribute("oninput","return;"),vl=typeof ps.oninput=="functi\
on"}yl=vl}else yl=!1;qu=yl&&(!document.documentMode||9<document.documentMode)}function hs(){tr&&(tr.detachEvent("onprope\
rtychange",ec),mr=tr=null)}function ec(e){if(e.propertyName==="value"&&Ui(mr)){var t=[];Ju(t,mr,e,Ho(e)),zu(wm,t)}}function xm(e,t,n){
e==="focusin"?(hs(),tr=t,mr=n,tr.attachEvent("onpropertychange",ec)):e==="focusout"&&hs()}function Sm(e){if(e==="selecti\
onchange"||e==="keyup"||e==="keydown")return Ui(mr)}function _m(e,t){if(e==="click")return Ui(t)}function Cm(e,t){if(e===
"input"||e==="change")return Ui(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.
is=="function"?Object.is:Nm;function pr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===
null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Al.
call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ys(e,t){
var n=gs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{
for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gs(n)}}function tc(e,t){return e&&t?e===t?!0:
e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(
t)&16):!1:!1}function nc(){for(var e=window,t=pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.
href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pi(e.document)}return t}function ea(e){var t=e&&e.nodeName&&
e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.
type==="password")||t==="textarea"||e.contentEditable==="true")}function jm(e){var t=nc(),n=e.focusedElem,r=e.selectionRange;
if(t!==n&&n&&n.ownerDocument&&tc(n.ownerDocument.documentElement,n)){if(r!==null&&ea(n)){if(t=r.start,e=r.end,e===void 0&&
(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&
t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?
l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ys(n,l);var o=ys(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||
e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),
e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=
n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&
n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Em=st&&"documentMode"in document&&
11>=document.documentMode,un=null,io=null,nr=null,lo=!1;function vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?
n:n.ownerDocument;lo||un==null||un!==pi(r)||(r=un,"selectionStart"in r&&ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:
(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,
focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&pr(nr,r)||(nr=r,r=xi(io,"onSelect"),0<r.length&&(t=new Zo("onSelec\
t","select",null,t,n),e.push({event:t,listeners:r}),t.target=un)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.
toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br(
"Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","Transit\
ionEnd")},wl={},rc={};st&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,
delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.
transition);function Vi(e){if(wl[e])return wl[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in
rc)return wl[e]=t[n];return e}var ic=Vi("animationend"),lc=Vi("animationiteration"),oc=Vi("animationstart"),ac=Vi("trans\
itionend"),sc=new Map,ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dra\
gEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input i\
nvalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut m\
ouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progres\
s rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange \
scroll toggle touchMove waiting wheel".split(" ");function It(e,t){sc.set(e,t),Jt(t,[e])}for(var kl=0;kl<ws.length;kl++){
var xl=ws[kl],Rm=xl.toLowerCase(),Mm=xl[0].toUpperCase()+xl.slice(1);It(Rm,"on"+Mm)}It(ic,"onAnimationEnd");It(lc,"onAni\
mationIteration");It(oc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");
It(ac,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onP\
ointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click\
 focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin k\
eydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput",
"paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onComposition\
Start","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupd\
ate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied e\
ncrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking st\
alled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("cancel close invalid load scroll toggle".split(" ").
concat(Zn));function ks(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rf(r,t,void 0,e),e.currentTarget=null}function uc(e,t){
t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=
o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;ks(i,a,c),l=s}else
for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;ks(
i,a,c),l=s}}}if(gi)throw e=eo,gi=!1,eo=null,e}function H(e,t){var n=t[co];n===void 0&&(n=t[co]=new Set);var r=e+"__bubbl\
e";n.has(r)||(cc(t,e,2,!1),n.add(r))}function Sl(e,t,n){var r=0;t&&(r|=4),cc(n,e,r,t)}var Wr="_reactListening"+Math.random().
toString(36).slice(2);function hr(e){if(!e[Wr]){e[Wr]=!0,yu.forEach(function(n){n!=="selectionchange"&&(Pm.has(n)||Sl(n,
!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,Sl("selectionchange",!1,t))}}function cc(e,t,n,r){
switch(Ku(t)){case 1:var i=Wf;break;case 4:i=Hf;break;default:i=Yo}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&
t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,
!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _l(e,t,n,r,i){var l=r;if(!(t&1)&&
!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===
8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,
s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vt(a),o===null)return;if(s=o.tag,s===5||
s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}zu(function(){var c=l,p=Ho(n),y=[];e:{var g=sc.get(e);if(g!==void 0){
var w=Zo,v=e;switch(e){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":w=om;break;case"focusin":v="focus",
w=gl;break;case"focusout":v="blur",w=gl;break;case"beforeblur":case"afterblur":w=gl;break;case"click":if(n.button===2)break e;case"\
auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":
w=ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"d\
rop":w=Gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=um;break;case ic:case lc:case oc:w=Zf;
break;case ac:w=dm;break;case"scroll":w=Qf;break;case"wheel":w=mm;break;case"copy":case"cut":case"paste":w=qf;break;case"\
gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"\
pointerover":case"pointerup":w=cs}var k=(t&4)!==0,b=!k&&e==="scroll",f=k?g!==null?g+"Capture":null:g;k=[];for(var d=c,m;d!==
null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=ur(d,f),x!=null&&k.push(gr(d,x,m)))),b)break;d=d.
return}0<k.length&&(g=new w(g,v,null,n,p),y.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="point\
erover",w=e==="mouseout"||e==="pointerout",g&&n!==Zl&&(v=n.relatedTarget||n.fromElement)&&(Vt(v)||v[ut]))break e;if((w||
g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?
Vt(v):null,v!==null&&(b=qt(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(k=ss,x="onMouseLeave",f="o\
nMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=cs,x="onPointerLeave",f="onPointerEnter",d="pointer"),b=
w==null?g:dn(w),m=v==null?g:dn(v),g=new k(x,d+"leave",w,n,p),g.target=b,g.relatedTarget=m,x=null,Vt(p)===c&&(k=new k(f,d+
"enter",v,n,p),k.target=m,k.relatedTarget=b,x=k),b=x,w&&v)t:{for(k=w,f=v,d=0,m=k;m;m=rn(m))d++;for(m=0,x=f;x;x=rn(x))m++;
for(;0<d-m;)k=rn(k),d--;for(;0<m-d;)f=rn(f),m--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=rn(k),f=rn(f)}k=
null}else k=null;w!==null&&xs(y,g,w,k,!1),v!==null&&b!==null&&xs(y,b,v,k,!0)}}e:{if(g=c?dn(c):window,w=g.nodeName&&g.nodeName.
toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=km;else if(ms(g))if(qu)E=Cm;else{E=Sm;var j=xm}else(w=g.nodeName)&&
w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=_m);if(E&&(E=E(e,c))){Ju(y,E,n,p);break e}j&&j(e,
g,c),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Ql(g,"number",g.value)}switch(j=c?dn(c):window,
e){case"focusin":(ms(j)||j.contentEditable==="true")&&(un=j,io=c,nr=null);break;case"focusout":nr=io=un=null;break;case"\
mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,vs(y,n,p);break;case"selectionchange":if(Em)break;case"\
keydown":case"keyup":vs(y,n,p)}var R;if(qo)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"c\
ompositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else sn?Xu(
e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Yu&&n.locale!=="ko"&&(sn||L!==
"onCompositionStart"?L==="onCompositionEnd"&&sn&&(R=Gu()):(St=p,Xo="value"in St?St.value:St.textContent,sn=!0)),j=xi(c,L),
0<j.length&&(L=new us(L,e,null,n,p),y.push({event:L,listeners:j}),R?L.data=R:(R=Zu(n),R!==null&&(L.data=R)))),(R=hm?gm(e,
n):ym(e,n))&&(c=xi(c,"onBeforeInput"),0<c.length&&(p=new us("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:c}),
p.data=R))}uc(y,t)})}function gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capt\
ure",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ur(e,n),l!=null&&r.unshift(gr(e,l,i)),l=ur(e,t),l!=
null&&r.push(gr(e,l,i))),e=e.return}return r}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||
null}function xs(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&
s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=ur(n,l),s!=null&&o.unshift(gr(n,s,a))):i||(s=ur(n,l),s!=null&&o.push(gr(n,s,a)))),
n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Lm=/\r\n?/g,Tm=/\u0000|\uFFFD/g;function Ss(e){return(typeof e==
"string"?e:""+e).replace(Lm,`
`).replace(Tm,"")}function Hr(e,t,n){if(t=Ss(t),Ss(e)!==t&&n)throw Error(N(425))}function Si(){}var oo=null,ao=null;function so(e,t){
return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML==
"object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uo=typeof setTimeout=="function"?
setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,_s=typeof Promise=="function"?Promise:void 0,bm=typeof queueMicrotask==
"function"?queueMicrotask:typeof _s<"u"?function(e){return _s.resolve(null).then(e).catch(Im)}:uo;function Im(e){setTimeout(
function(){throw e})}function Cl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,
n==="/$"){if(r===0){e.removeChild(i),fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fr(t)}function Et(e){
for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;
if(t==="/$")return null}}return e}function Cs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===
"$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(
36).slice(2),qe="__reactFiber$"+zn,yr="__reactProps$"+zn,ut="__reactContainer$"+zn,co="__reactEvents$"+zn,Om="__reactLis\
teners$"+zn,Fm="__reactHandles$"+zn;function Vt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[qe]){
if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cs(e);e!==null;){if(n=e[qe])return n;e=Cs(e)}return t}e=
n,n=e.parentNode}return null}function Er(e){return e=e[qe]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}
function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Bi(e){return e[yr]||null}var fo=[],
fn=-1;function Ot(e){return{current:e}}function Q(e){0>fn||(e.current=fo[fn],fo[fn]=null,fn--)}function W(e,t){fn++,fo[fn]=
e.current,e.current=t}var zt={},pe=Ot(zt),Ce=Ot(!1),Kt=zt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.
stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},
l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=
i),i}function Ne(e){return e=e.childContextTypes,e!=null}function _i(){Q(Ce),Q(pe)}function Ns(e,t,n){if(pe.current!==zt)
throw Error(N(168));W(pe,t),W(Ce,n)}function dc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!=
"function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,xf(e)||"Unknown",i));return X({},
n,r)}function Ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Kt=pe.current,W(pe,e),W(Ce,
Ce.current),!0}function js(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=dc(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=
e,Q(Ce),Q(pe),W(pe,e)):Q(Ce),W(Ce,n)}var it=null,Wi=!1,Nl=!1;function fc(e){it===null?it=[e]:it.push(e)}function Dm(e){Wi=
!0,fc(e)}function Ft(){if(!Nl&&it!==null){Nl=!0;var e=0,t=B;try{var n=it;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==
null)}it=null,Wi=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),Fu(Qo,Ft),i}finally{B=t,Nl=!1}}return null}var mn=[],pn=0,
Ni=null,ji=0,Ie=[],Oe=0,Gt=null,lt=1,ot="";function At(e,t){mn[pn++]=ji,mn[pn++]=Ni,Ni=e,ji=t}function mc(e,t,n){Ie[Oe++]=
lt,Ie[Oe++]=ot,Ie[Oe++]=Gt,Gt=e;var r=lt;e=ot;var i=32-He(r)-1;r&=~(1<<i),n+=1;var l=32-He(t)+i;if(30<l){var o=i-i%5;l=(r&
(1<<o)-1).toString(32),r>>=o,i-=o,lt=1<<32-He(t)+i|n<<i|r,ot=l+e}else lt=1<<l|n<<i|r,ot=e}function ta(e){e.return!==null&&
(At(e,1),mc(e,1,0))}function na(e){for(;e===Ni;)Ni=mn[--pn],mn[pn]=null,ji=mn[--pn],mn[pn]=null;for(;e===Gt;)Gt=Ie[--Oe],
Ie[Oe]=null,ot=Ie[--Oe],Ie[Oe]=null,lt=Ie[--Oe],Ie[Oe]=null}var Me=null,Re=null,K=!1,We=null;function pc(e,t){var n=Fe(5,
null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(
n)}function Es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?
null:t,t!==null?(e.stateNode=t,Me=e,Re=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:
t,t!==null?(e.stateNode=t,Me=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:lt,overflow:ot}:
null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=
n,Me=e,Re=null,!0):!1;default:return!1}}function mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function po(e){if(K){var t=Re;
if(t){var n=t;if(!Es(e,t)){if(mo(e))throw Error(N(418));t=Et(n.nextSibling);var r=Me;t&&Es(e,t)?pc(r,n):(e.flags=e.flags&
-4097|2,K=!1,Me=e)}}else{if(mo(e))throw Error(N(418));e.flags=e.flags&-4097|2,K=!1,Me=e}}}function Rs(e){for(e=e.return;e!==
null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Qr(e){if(e!==Me)return!1;if(!K)return Rs(e),K=!0,!1;var t;
if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!so(e.type,e.memoizedProps)),t&&(t=Re)){if(mo(e))throw hc(),
Error(N(418));for(;t;)pc(e,t),t=Et(t.nextSibling)}if(Rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,
!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Et(e.nextSibling);
break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Me?Et(e.stateNode.nextSibling):null;return!0}
function hc(){for(var e=Re;e;)e=Et(e.nextSibling)}function jn(){Re=Me=null,K=!1}function ra(e){We===null?We=[e]:We.push(
e)}var Am=ft.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n.
_owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,l=""+e;return t!==
null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:
a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Kr(e,t){
throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+
"}":e))}function Ms(e){var t=e._init;return t(e._payload)}function gc(e){function t(f,d){if(e){var m=f.deletions;m===null?
(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}
function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){
return f=Lt(f,d),f.index=0,f.sibling=null,f}function l(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?
(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,x){
return d===null||d.tag!==6?(d=Tl(m,f.mode,x),d.return=f,d):(d=i(d,m),d.return=f,d)}function s(f,d,m,x){var E=m.type;return E===
an?p(f,d,m.props.children,x,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Ms(E)===
d.type)?(x=i(d,m.props),x.ref=Vn(f,d,m),x.return=f,x):(x=fi(m.type,m.key,m.props,null,f.mode,x),x.ref=Vn(f,d,m),x.return=
f,x)}function c(f,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==
m.implementation?(d=zl(m,f.mode,x),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function p(f,d,m,x,E){return d===null||
d.tag!==7?(d=Qt(m,f.mode,x,E),d.return=f,d):(d=i(d,m),d.return=f,d)}function y(f,d,m){if(typeof d=="string"&&d!==""||typeof d==
"number")return d=Tl(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:return m=fi(
d.type,d.key,d.props,null,f.mode,m),m.ref=Vn(f,null,d),m.return=f,m;case on:return d=zl(d,f.mode,m),d.return=f,d;case vt:
var x=d._init;return y(f,x(d._payload),m)}if(Yn(d)||Fn(d))return d=Qt(d,f.mode,m,null),d.return=f,d;Kr(f,d)}return null}
function g(f,d,m,x){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(f,
d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Or:return m.key===E?s(f,d,m,x):null;case on:return m.
key===E?c(f,d,m,x):null;case vt:return E=m._init,g(f,d,E(m._payload),x)}if(Yn(m)||Fn(m))return E!==null?null:p(f,d,m,x,null);
Kr(f,m)}return null}function w(f,d,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,a(d,
f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Or:return f=f.get(x.key===null?m:x.key)||null,s(d,f,x,
E);case on:return f=f.get(x.key===null?m:x.key)||null,c(d,f,x,E);case vt:var j=x._init;return w(f,d,m,j(x._payload),E)}if(Yn(
x)||Fn(x))return f=f.get(m)||null,p(d,f,x,E,null);Kr(d,x)}return null}function v(f,d,m,x){for(var E=null,j=null,R=d,L=d=
0,O=null;R!==null&&L<m.length;L++){R.index>L?(O=R,R=null):O=R.sibling;var T=g(f,R,m[L],x);if(T===null){R===null&&(R=O);break}
e&&R&&T.alternate===null&&t(f,R),d=l(T,d,L),j===null?E=T:j.sibling=T,j=T,R=O}if(L===m.length)return n(f,R),K&&At(f,L),E;
if(R===null){for(;L<m.length;L++)R=y(f,m[L],x),R!==null&&(d=l(R,d,L),j===null?E=R:j.sibling=R,j=R);return K&&At(f,L),E}for(R=
r(f,R);L<m.length;L++)O=w(R,f,L,m[L],x),O!==null&&(e&&O.alternate!==null&&R.delete(O.key===null?L:O.key),d=l(O,d,L),j===
null?E=O:j.sibling=O,j=O);return e&&R.forEach(function(U){return t(f,U)}),K&&At(f,L),E}function k(f,d,m,x){var E=Fn(m);if(typeof E!=
"function")throw Error(N(150));if(m=E.call(m),m==null)throw Error(N(151));for(var j=E=null,R=d,L=d=0,O=null,T=m.next();R!==
null&&!T.done;L++,T=m.next()){R.index>L?(O=R,R=null):O=R.sibling;var U=g(f,R,T.value,x);if(U===null){R===null&&(R=O);break}
e&&R&&U.alternate===null&&t(f,R),d=l(U,d,L),j===null?E=U:j.sibling=U,j=U,R=O}if(T.done)return n(f,R),K&&At(f,L),E;if(R===
null){for(;!T.done;L++,T=m.next())T=y(f,T.value,x),T!==null&&(d=l(T,d,L),j===null?E=T:j.sibling=T,j=T);return K&&At(f,L),
E}for(R=r(f,R);!T.done;L++,T=m.next())T=w(R,f,L,T.value,x),T!==null&&(e&&T.alternate!==null&&R.delete(T.key===null?L:T.key),
d=l(T,d,L),j===null?E=T:j.sibling=T,j=T);return e&&R.forEach(function(ke){return t(f,ke)}),K&&At(f,L),E}function b(f,d,m,x){
if(typeof m=="object"&&m!==null&&m.type===an&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.
$$typeof){case Or:e:{for(var E=m.key,j=d;j!==null;){if(j.key===E){if(E=m.type,E===an){if(j.tag===7){n(f,j.sibling),d=i(j,
m.props.children),d.return=f,f=d;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Ms(E)===
j.type){n(f,j.sibling),d=i(j,m.props),d.ref=Vn(f,j,m),d.return=f,f=d;break e}n(f,j);break}else t(f,j);j=j.sibling}m.type===
an?(d=Qt(m.props.children,f.mode,x,m.key),d.return=f,f=d):(x=fi(m.type,m.key,m.props,null,f.mode,x),x.ref=Vn(f,d,m),x.return=
f,f=x)}return o(f);case on:e:{for(j=m.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&
d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else
t(f,d);d=d.sibling}d=zl(m,f.mode,x),d.return=f,f=d}return o(f);case vt:return j=m._init,b(f,d,j(m._payload),x)}if(Yn(m))
return v(f,d,m,x);if(Fn(m))return k(f,d,m,x);Kr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&
d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=Tl(m,f.mode,x),d.return=f,f=d),o(f)):n(f,d)}return b}var En=gc(
!0),yc=gc(!1),Ei=Ot(null),Ri=null,hn=null,ia=null;function la(){ia=hn=Ri=null}function oa(e){var t=Ei.current;Q(Ei),e._currentValue=
t}function ho(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=
t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){Ri=e,ia=hn=null,e=e.dependencies,
e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ia!==e)
if(e={context:e,memoizedValue:t,next:null},hn===null){if(Ri===null)throw Error(N(308));hn=e,Ri.dependencies={lanes:0,firstContext:e}}else
hn=hn.next=e;return t}var Bt=null;function aa(e){Bt===null?Bt=[e]:Bt.push(e)}function vc(e,t,n,r){var i=t.interleaved;return i===
null?(n.next=n,aa(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==
null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.
tag===3?n.stateNode:null}var wt=!1;function sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,
shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue=
{baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}
function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;
if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,
ct(e,n)}return i=r.interleaved,i===null?(t.next=t,aa(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function oi(e,t,n){
if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ko(e,n)}}function Ps(e,t){
var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){
do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=
l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,
shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=
t}function Mi(e,t,n,r){var i=e.updateQueue;wt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){
i.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?l=c:o.next=c,o=s;var p=e.alternate;p!==null&&(p=p.updateQueue,
a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=s))}if(l!==null){var y=i.baseState;o=0,
p=c=s=null,a=l;do{var g=a.lane,w=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,
callback:a.callback,next:null});e:{var v=e,k=a;switch(g=t,w=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){y=v.call(
w,y,g);break e}y=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,g=typeof v=="function"?v.call(w,y,g):
v,g==null)break e;y=X({},y,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=
[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=w,s=y):
p=p.next=w,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.
shared.pending=null}}while(!0);if(p===null&&(s=y),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,
t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Xt|=o,e.lanes=o,e.memoizedState=y}}function Ls(e,t,n){
if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=
n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Rr={},tt=Ot(Rr),vr=Ot(Rr),wr=Ot(Rr);function Wt(e){if(e===Rr)
throw Error(N(174));return e}function ua(e,t){switch(W(wr,t),W(vr,e),W(tt,Rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?
t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}Q(tt),W(tt,
t)}function Rn(){Q(tt),Q(vr),Q(wr)}function kc(e){Wt(wr.current);var t=Wt(tt.current),n=Gl(t,e.type);t!==n&&(W(vr,e),W(tt,
n))}function ca(e){vr.current===e&&(Q(tt),Q(vr))}var G=Ot(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.
memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.
revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;
for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}
var jl=[];function da(){for(var e=0;e<jl.length;e++)jl[e]._workInProgressVersionPrimary=null;jl.length=0}var ai=ft.ReactCurrentDispatcher,
El=ft.ReactCurrentBatchConfig,Yt=0,Y=null,ie=null,oe=null,Li=!1,rr=!1,kr=0,$m=0;function de(){throw Error(N(321))}function fa(e,t){
if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function ma(e,t,n,r,i,l){
if(Yt=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=e===null||e.memoizedState===null?Wm:Hm,e=n(r,i),
rr){l=0;do{if(rr=!1,kr=0,25<=l)throw Error(N(301));l+=1,oe=ie=null,t.updateQueue=null,ai.current=Qm,e=n(r,i)}while(rr)}if(ai.
current=Ti,t=ie!==null&&ie.next!==null,Yt=0,oe=ie=Y=null,Li=!1,t)throw Error(N(300));return e}function pa(){var e=kr!==0;
return kr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?
Y.memoizedState=oe=e:oe=oe.next=e,oe}function $e(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=
ie.next;var t=oe===null?Y.memoizedState:oe.next;if(t!==null)oe=t,ie=e;else{if(e===null)throw Error(N(310));ie=e,e={memoizedState:ie.
memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},oe===null?Y.memoizedState=oe=e:oe=
oe.next=e}return oe}function xr(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=$e(),n=t.queue;if(n===null)
throw Error(N(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.
next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,c=l;do{var p=c.
lane;if((Yt&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),
r=c.hasEagerState?c.eagerState:e(r,c.action);else{var y={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.
eagerState,next:null};s===null?(a=s=y,o=r):s=s.next=y,Y.lanes|=p,Xt|=p}c=c.next}while(c!==null&&c!==l);s===null?o=r:s.next=
a,Ke(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,
e!==null){i=e;do l=i.lane,Y.lanes|=l,Xt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}
function Ml(e){var t=$e(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,
l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ke(l,t.memoizedState)||
(_e=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function xc(){}function Sc(e,t){
var n=Y,r=$e(),i=t(),l=!Ke(r.memoizedState,i);if(l&&(r.memoizedState=i,_e=!0),r=r.queue,ha(Nc.bind(null,n,r,e),[e]),r.getSnapshot!==
t||l||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Sr(9,Cc.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(
N(349));Yt&30||_c(n,t,i)}return i}function _c(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t=
{lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cc(e,t,n,r){
t.value=n,t.getSnapshot=r,jc(t)&&Ec(e)}function Nc(e,t,n){return n(function(){jc(t)&&Ec(e)})}function jc(e){var t=e.getSnapshot;
e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Ec(e){var t=ct(e,1);t!==null&&Qe(t,e,1,-1)}function Ts(e){
var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,
lastRenderedReducer:xr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,Y,e),[t.memoizedState,e]}function Sr(e,t,n,r){
return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=
t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rc(){
return $e().memoizedState}function si(e,t,n,r){var i=Je();Y.flags|=e,i.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}
function Hi(e,t,n,r){var i=$e();r=r===void 0?null:r;var l=void 0;if(ie!==null){var o=ie.memoizedState;if(l=o.destroy,r!==
null&&fa(r,o.deps)){i.memoizedState=Sr(t,n,l,r);return}}Y.flags|=e,i.memoizedState=Sr(1|t,n,l,r)}function zs(e,t){return si(
8390656,8,e,t)}function ha(e,t){return Hi(2048,8,e,t)}function Mc(e,t){return Hi(4,2,e,t)}function Pc(e,t){return Hi(4,4,
e,t)}function Lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,
function(){t.current=null}}function Tc(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4,4,Lc.bind(null,t,e),n)}function ga(){}
function zc(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fa(t,r[1])?r[0]:(n.memoizedState=
[e,t],e)}function bc(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fa(t,r[1])?r[0]:
(e=e(),n.memoizedState=[e,t],e)}function Ic(e,t,n){return Yt&21?(Ke(n,t)||(n=$u(),Y.lanes|=n,Xt|=n,e.baseState=!0),t):(e.
baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Um(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=El.transition;
El.transition={};try{e(!1),t()}finally{B=n,El.transition=r}}function Oc(){return $e().memoizedState}function Vm(e,t,n){var r=Pt(
e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Dc(t,n);else if(n=vc(e,t,n,r),n!==null){var i=ye();
Qe(n,e,r,i),Ac(n,t,r)}}function Bm(e,t,n){var r=Pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(
e))Dc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.
lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ke(a,o)){var s=t.interleaved;s===null?(i.next=i,aa(t)):(i.
next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=vc(e,t,i,r),n!==null&&(i=ye(),Qe(n,e,r,i),Ac(n,t,r))}}function Fc(e){
var t=e.alternate;return e===Y||t!==null&&t===Y}function Dc(e,t){rr=Li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,
n.next=t),e.pending=t}function Ac(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ko(e,n)}}var Ti={readContext:Ae,
useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,
useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,
useId:de,unstable_isNewReconciler:!1},Wm={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?
null:t],e},useContext:Ae,useEffect:zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,
4,Lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(
4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){
var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,
lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vm.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){
var t=Je();return e={current:e},t.memoizedState=e},useState:Ts,useDebugValue:ga,useDeferredValue:function(e){return Je().
memoizedState=e},useTransition:function(){var e=Ts(!1),t=e[0];return e=Um.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},
useSyncExternalStore:function(e,t,n){var r=Y,i=Je();if(K){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ae===null)
throw Error(N(349));Yt&30||_c(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,zs(Nc.bind(null,r,
l,e),[e]),r.flags|=2048,Sr(9,Cc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Je(),t=ae.identifierPrefix;if(K){
var n=ot,r=lt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$m++,
t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hm={readContext:Ae,useCallback:zc,
useContext:Ae,useEffect:ha,useImperativeHandle:Tc,useInsertionEffect:Mc,useLayoutEffect:Pc,useMemo:bc,useReducer:Rl,useRef:Rc,
useState:function(){return Rl(xr)},useDebugValue:ga,useDeferredValue:function(e){var t=$e();return Ic(t,ie.memoizedState,
e)},useTransition:function(){var e=Rl(xr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:Sc,
useId:Oc,unstable_isNewReconciler:!1},Qm={readContext:Ae,useCallback:zc,useContext:Ae,useEffect:ha,useImperativeHandle:Tc,
useInsertionEffect:Mc,useLayoutEffect:Pc,useMemo:bc,useReducer:Ml,useRef:Rc,useState:function(){return Ml(xr)},useDebugValue:ga,
useDeferredValue:function(e){var t=$e();return ie===null?t.memoizedState=e:Ic(t,ie.memoizedState,e)},useTransition:function(){
var e=Ml(xr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:Sc,useId:Oc,unstable_isNewReconciler:!1};
function Ve(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}
function go(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=
n)}var Qi={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;
var r=ye(),i=Pt(e),l=at(r,i);l.payload=t,n!=null&&(l.callback=n),t=Rt(e,l,i),t!==null&&(Qe(t,e,i,r),oi(t,e,i))},enqueueReplaceState:function(e,t,n){
e=e._reactInternals;var r=ye(),i=Pt(e),l=at(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Rt(e,l,i),t!==null&&(Qe(t,
e,i,r),oi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Pt(e),i=at(n,r);i.tag=2,t!=null&&(i.
callback=t),t=Rt(e,i,r),t!==null&&(Qe(t,e,r,n),oi(t,e,r))}};function bs(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate==
"function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!pr(n,r)||!pr(i,l):!0}function $c(e,t,n){
var r=!1,i=zt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(i=Ne(t)?Kt:pe.current,r=t.contextTypes,l=(r=r!=
null)?Nn(e,i):zt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,
t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=
l),t}function Is(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.
UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qi.enqueueReplaceState(
t,t.state,null)}function yo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},sa(e);var l=t.contextType;
typeof l=="object"&&l!==null?i.context=Ae(l):(l=Ne(t)?Kt:pe.current,i.context=Nn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,
typeof l=="function"&&(go(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate==
"function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.
componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),
t!==i.state&&Qi.enqueueReplaceState(i,i.state,null),Mi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="fu\
nction"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=kf(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??
null}}function vo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Km=typeof WeakMap=="func\
tion"?WeakMap:Map;function Uc(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){
bi||(bi=!0,Ro=r),vo(e,t)},n}function Vc(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="fu\
nction"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vo(e,t)}}var l=e.stateNode;return l!==null&&
typeof l.componentDidCatch=="function"&&(n.callback=function(){vo(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):
Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Os(e,t,n){var r=e.
pingCache;if(r===null){r=e.pingCache=new Km;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));
i.has(n)||(i.add(n),e=ap.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==
null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ds(e,t,n,r,i){return e.mode&1?(e.
flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===
null?n.tag=17:(t=at(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var Gm=ft.ReactCurrentOwner,_e=!1;function ge(e,t,n,r){t.child=
e===null?yc(t,null,n,r):En(t,e.child,n,r)}function As(e,t,n,r,i){n=n.render;var l=t.ref;return Sn(t,i),r=ma(e,t,n,r,l,i),
n=pa(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(K&&n&&ta(t),t.flags|=1,ge(e,t,r,
i),t.child)}function $s(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Ca(l)&&l.defaultProps===void 0&&
n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Bc(e,t,l,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,
e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:pr,n(o,r)&&e.ref===t.
ref)return dt(e,t,i)}return t.flags|=1,e=Lt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var l=e.
memoizedProps;if(pr(l,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.
lanes=e.lanes,dt(e,t,i)}return wo(e,t,n,r,i)}function Wc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:
null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(yn,Ee),Ee|=n;else{
if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,
transitions:null},t.updateQueue=null,W(yn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=
l!==null?l.baseLanes:n,W(yn,Ee),Ee|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,W(yn,Ee),Ee|=r;return ge(
e,t,i,n),t.child}function Hc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}
function wo(e,t,n,r,i){var l=Ne(n)?Kt:pe.current;return l=Nn(t,l),Sn(t,i),n=ma(e,t,n,r,l,i),r=pa(),e!==null&&!_e?(t.updateQueue=
e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(K&&r&&ta(t),t.flags|=1,ge(e,t,n,i),t.child)}function Us(e,t,n,r,i){
if(Ne(n)){var l=!0;Ci(t)}else l=!1;if(Sn(t,i),t.stateNode===null)ui(e,t),$c(t,n,r),yo(t,n,r,i),r=!0;else if(e===null){var o=t.
stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=Ne(n)?Kt:pe.
current,c=Nn(t,c));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";
y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&
Is(t,o,r,c),wt=!1;var g=t.memoizedState;o.state=g,Mi(t,r,o,i),s=t.memoizedState,a!==r||g!==s||Ce.current||wt?(typeof p==
"function"&&(go(t,n,p,r),s=t.memoizedState),(a=wt||bs(t,n,a,r,g,s,c))?(y||typeof o.UNSAFE_componentWillMount!="function"&&
typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==
"function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount==
"function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount==
"function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,wc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ve(t.type,a),
o.props=c,y=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=Ne(n)?Kt:pe.current,s=Nn(
t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.
UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==y||g!==s)&&Is(t,o,r,s),
wt=!1,g=t.memoizedState,o.state=g,Mi(t,r,o,i);var v=t.memoizedState;a!==y||g!==v||Ce.current||wt?(typeof w=="function"&&
(go(t,n,w,r),v=t.memoizedState),(c=wt||bs(t,n,c,r,g,v,s)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.
componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,s),typeof o.UNSAFE_componentWillUpdate==
"function"&&o.UNSAFE_componentWillUpdate(r,v,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==
"function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=
4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=
r,t.memoizedState=v),o.props=r,o.state=v,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&
g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||
(t.flags|=1024),r=!1)}return ko(e,t,n,r,l,i)}function ko(e,t,n,r,i,l){Hc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&
js(t,n,!1),dt(e,t,l);r=t.stateNode,Gm.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.
flags|=1,e!==null&&o?(t.child=En(t,e.child,null,l),t.child=En(t,null,a,l)):ge(e,t,a,l),t.memoizedState=r.state,i&&js(t,n,
!0),t.child}function Qc(e){var t=e.stateNode;t.pendingContext?Ns(e,t.pendingContext,t.pendingContext!==t.context):t.context&&
Ns(e,t.context,!1),ua(e,t.containerInfo)}function Vs(e,t,n,r,i){return jn(),ra(i),t.flags|=256,ge(e,t,n,r),t.child}var xo={
dehydrated:null,treeContext:null,retryLane:0};function So(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kc(e,t,n){
var r=t.pendingProps,i=G.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),
a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(G,i&1),e===null)return po(t),e=t.memoizedState,e!==null&&
(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,
l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Yi(o,r,0,null),e=
Qt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=So(n),t.memoizedState=xo,e):ya(t,o));if(i=
e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ym(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;
var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=
null):(r=Lt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Lt(a,l):(l=Qt(l,o,n,null),l.flags|=2),l.return=t,r.return=
t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?So(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.
transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=xo,r}return l=e.child,e=l.sibling,r=Lt(l,{mode:"\
visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=
[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ya(e,t){return t=Yi({mode:"visible",children:t},e.
mode,0,null),t.return=e,e.child=t}function Gr(e,t,n,r){return r!==null&&ra(r),En(t,e.child,null,n),e=ya(t,t.pendingProps.
children),e.flags|=2,t.memoizedState=null,e}function Ym(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(
N(422))),Gr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Yi({mode:"visi\
ble",children:r.children},i,0,null),l=Qt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&En(
t,e.child,null,o),t.child.memoizedState=So(o),t.memoizedState=xo,l);if(!(t.mode&1))return Gr(e,t,o,null);if(i.data==="$!"){
if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(N(419)),r=Pl(l,r,void 0),Gr(e,t,o,r)}if(a=(o&
e.childLanes)!==0,_e||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:
i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=
i,ct(e,i),Qe(r,e,i,-1))}return _a(),r=Pl(Error(N(421))),Gr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=
sp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Re=Et(i.nextSibling),Me=t,K=!0,We=null,e!==null&&(Ie[Oe++]=lt,Ie[Oe++]=
ot,Ie[Oe++]=Gt,lt=e.id,ot=e.overflow,Gt=t),t=ya(t,r.children),t.flags|=4096,t)}function Bs(e,t,n){e.lanes|=t;var r=e.alternate;
r!==null&&(r.lanes|=t),ho(e.return,t,n)}function Ll(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,
rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.
last=r,l.tail=n,l.tailMode=i)}function Gc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ge(e,t,r.children,n),r=
G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==
null&&Bs(e,n,t);else if(e.tag===19)Bs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;
for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(
G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&
Pi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ll(t,!1,i,n,l);break;case"\
backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Pi(e)===null){t.child=i;break}e=i.sibling,
i.sibling=n,n=i,i=e}Ll(t,!0,n,null,l);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}
return t.child}function ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){
if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(
N(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=
Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xm(e,t,n){switch(t.tag){case 3:Qc(t),jn();break;case 5:
kc(t);break;case 1:Ne(t.type)&&Ci(t);break;case 4:ua(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.
memoizedProps.value;W(Ei,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==
null?(W(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Kc(e,t,n):(W(G,G.current&1),e=dt(e,t,n),e!==null?e.sibling:
null);W(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gc(e,t,n);t.flags|=128}if(i=t.memoizedState,
i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(G,G.current),r)break;return null;case 22:case 23:return t.lanes=
0,Wc(e,t,n)}return dt(e,t,n)}var Yc,_o,Xc,Zc;Yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(
n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){
if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_o=function(){};Xc=function(e,t,n,r){
var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wt(tt.current);var l=null;switch(n){case"input":i=Wl(e,i),r=Wl(e,r),l=[];break;case"\
select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=Kl(e,i),r=Kl(e,r),l=[];break;default:
typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}Yl(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(
c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!==
"dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="au\
toFocus"&&(ar.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(
c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]=
"");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dan\
gerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!=
"string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&
(ar.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&H("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("\
style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!K)switch(e.
tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=
null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===
null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,
n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=
e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.
subtreeFlags|=r,e.childLanes=n,t}function Zm(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:
return fe(t),null;case 1:return Ne(t.type)&&_i(),fe(t),null;case 3:return r=t.stateNode,Rn(),Q(Ce),Q(pe),da(),r.pendingContext&&
(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qr(t)?t.flags|=4:e===null||e.memoizedState.
isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(Lo(We),We=null))),_o(e,t),fe(t),null;case 5:ca(t);var i=Wt(wr.current);
if(n=t.type,e!==null&&t.stateNode!=null)Xc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===
null)throw Error(N(166));return fe(t),null}if(e=Wt(tt.current),Qr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[qe]=
t,r[yr]=l,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("loa\
d",r);break;case"video":case"audio":for(i=0;i<Zn.length;i++)H(Zn[i],r);break;case"source":H("error",r);break;case"img":case"\
image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ja(r,l),H("invalid",r);break;case"\
select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":es(r,l),H("invalid",r)}Yl(n,l),i=
null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==
!0&&Hr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&
Hr(r.textContent,a,e),i=["children",""+a]):ar.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"i\
nput":Fr(r),qa(r,l,!0);break;case"textarea":Fr(r),ts(r);break;case"select":case"option":break;default:typeof l.onClick==
"function"&&(r.onclick=Si)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http:\
//www.w3.org/1999/xhtml"&&(e=Nu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML=
"<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(
n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[yr]=r,Yc(e,t,
!1,!1),t.stateNode=e;e:{switch(o=Xl(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"\
embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zn.length;i++)H(Zn[i],e);i=r;break;case"source":H("error",
e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"\
input":Ja(e,r),i=Wl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},
i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":es(e,r),i=Kl(e,r),H("invalid",e);break;default:i=r}Yl(n,i),
a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Ru(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,
s!=null&&ju(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&sr(e,s):typeof s=="number"&&sr(e,""+s):l!==
"suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ar.hasOwnProperty(l)?s!=null&&l==="o\
nScroll"&&H("scroll",e):s!=null&&Uo(e,l,s,o))}switch(n){case"input":Fr(e),qa(e,r,!1);break;case"textarea":Fr(e),ts(e);break;case"\
option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?
vn(e,!!r.multiple,l,!1):r.defaultValue!=null&&vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="func\
tion"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=
!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.
stateNode!=null)Zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Wt(wr.
current),Wt(tt.current),Qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(l=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.
tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,
n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return fe(
t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Re!==
null&&t.mode&1&&!(t.flags&128))hc(),jn(),t.flags|=98560,l=!1;else if(l=Qr(t),r!==null&&r.dehydrated!==null){if(e===null){
if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[qe]=t}else jn(),!(t.
flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),l=!1}else We!==null&&(Lo(We),We=null),l=!0;if(!l)return t.flags&65536?
t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&
1&&(e===null||G.current&1?le===0&&(le=3):_a())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Rn(),_o(e,t),
e===null&&hr(t.stateNode.containerInfo),fe(t),null;case 10:return oa(t.type._context),fe(t),null;case 17:return Ne(t.type)&&
_i(),fe(t),null;case 19:if(Q(G),l=t.memoizedState,l===null)return fe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)
if(r)Bn(l,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Pi(e),o!==null){for(t.flags|=128,Bn(l,
!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,
o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,
l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=
0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.
type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(G,G.
current&1|2),t.child}e=e.sibling}l.tail!==null&&te()>Pn&&(t.flags|=128,r=!0,Bn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Pi(
o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(l,!0),l.tail===null&&l.tailMode===
"hidden"&&!o.alternate&&!K)return fe(t),null}else 2*te()-l.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(
l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.
tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=te(),t.sibling=null,n=G.current,W(G,r?n&1|2:n&
1),t):(fe(t),null);case 22:case 23:return Sa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=
8192),r&&t.mode&1?Ee&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}
throw Error(N(156,t.tag))}function Jm(e,t){switch(na(t),t.tag){case 1:return Ne(t.type)&&_i(),e=t.flags,e&65536?(t.flags=
e&-65537|128,t):null;case 3:return Rn(),Q(Ce),Q(pe),da(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:
return ca(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));
jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return Rn(),null;case 10:return oa(
t.type._context),null;case 22:case 23:return Sa(),null;case 24:return null;default:return null}}var Yr=!1,me=!1,qm=typeof WeakSet==
"function"?WeakSet:Set,P=null;function gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,
t,r)}else n.current=null}function Co(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Ws=!1;function ep(e,t){if(oo=wi,e=nc(),ea(e)){
if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||
window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;
r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,p=0,y=e,g=null;t:for(;;){for(var w;y!==
n||i!==0&&y.nodeType!==3||(a=o+i),y!==l||r!==0&&y.nodeType!==3||(s=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(w=y.firstChild)!==
null;)g=y,y=w;for(;;){if(y===e)break t;if(g===n&&++c===i&&(a=o),g===l&&++p===r&&(s=o),(w=y.nextSibling)!==null)break;y=g,
g=y.parentNode}y=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ao={focusedElem:e,
selectionRange:n},wi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==
null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.
memoizedProps,b=v.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ve(t.type,k),b);f.__reactInternalSnapshotBeforeUpdate=
d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(
m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){ee(t,t.return,x)}if(e=
t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=Ws,Ws=!1,v}function ir(e,t,n){var r=t.updateQueue;if(r=
r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Co(
t,n,l)}i=i.next}while(i!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;
do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function No(e){var t=e.ref;if(t!==null){var n=e.
stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jc(e){var t=e.alternate;
t!==null&&(e.alternate=null,Jc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],
delete t[yr],delete t[co],delete t[Om],delete t[Fm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=
null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===
3||e.tag===4}function Hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.
sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;
e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,
t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):
(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==
null))for(jo(e,t,n),e=e.sibling;e!==null;)jo(e,t,n),e=e.sibling}function Eo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,
t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eo(e,t,n),e=e.sibling;e!==null;)Eo(e,t,n),
e=e.sibling}var se=null,Be=!1;function ht(e,t,n){for(n=n.child;n!==null;)ed(e,t,n),n=n.sibling}function ed(e,t,n){if(et&&
typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:me||gn(n,t);case 6:
var r=se,i=Be;se=null,ht(e,t,n),se=r,Be=i,se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):
e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?Cl(e.parentNode,
n):e.nodeType===1&&Cl(e,n),fr(e)):Cl(se,n.stateNode));break;case 4:r=se,i=Be,se=n.stateNode.containerInfo,Be=!0,ht(e,t,n),
se=r,Be=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;
do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Co(n,t,o),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!me&&(gn(
n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){
ee(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ht(e,t,n),me=r):ht(
e,t,n);break;default:ht(e,t,n)}}function Qs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===
null&&(n=e.stateNode=new qm),t.forEach(function(r){var i=up.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){
var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:
se=a.stateNode,Be=!1;break e;case 3:se=a.stateNode.containerInfo,Be=!0;break e;case 4:se=a.stateNode.containerInfo,Be=!0;
break e}a=a.return}if(se===null)throw Error(N(160));ed(l,o,i),se=null,Be=!1;var s=i.alternate;s!==null&&(s.return=null),
i.return=null}catch(c){ee(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)td(t,e),t=t.sibling}function td(e,t){var n=e.
alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Xe(e),r&4){try{ir(3,e,e.return),Ki(3,e)}catch(k){
ee(e,e.return,k)}try{ir(5,e,e.return)}catch(k){ee(e,e.return,k)}}break;case 1:Ue(t,e),Xe(e),r&512&&n!==null&&gn(n,n.return);
break;case 5:if(Ue(t,e),Xe(e),r&512&&n!==null&&gn(n,n.return),e.flags&32){var i=e.stateNode;try{sr(i,"")}catch(k){ee(e,e.
return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;
if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&_u(i,l),Xl(a,o);var c=Xl(a,l);for(o=0;o<
s.length;o+=2){var p=s[o],y=s[o+1];p==="style"?Ru(i,y):p==="dangerouslySetInnerHTML"?ju(i,y):p==="children"?sr(i,y):Uo(i,
p,y,c)}switch(a){case"input":Hl(i,l);break;case"textarea":Cu(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i.
_wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?vn(i,!!l.multiple,w,!1):g!==!!l.multiple&&(l.defaultValue!=
null?vn(i,!!l.multiple,l.defaultValue,!0):vn(i,!!l.multiple,l.multiple?[]:"",!1))}i[yr]=l}catch(k){ee(e,e.return,k)}}break;case 6:
if(Ue(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){
ee(e,e.return,k)}}break;case 3:if(Ue(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(k){
ee(e,e.return,k)}break;case 4:Ue(t,e),Xe(e);break;case 13:Ue(t,e),Xe(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,
i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ka=te())),r&4&&Qs(e);break;case 22:if(p=
n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||p,Ue(t,e),me=c):Ue(t,e),Xe(e),r&8192){if(c=e.memoizedState!==null,
(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(y=P=p;P!==null;){switch(g=P,w=g.child,g.tag){case 0:case 11:case 14:case 15:
ir(4,g,g.return);break;case 1:gn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;
try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){ee(r,n,k)}}break;case 5:gn(g,g.
return);break;case 22:if(g.memoizedState!==null){Gs(y);continue}}w!==null?(w.return=g,P=w):Gs(y)}p=p.sibling}e:for(p=null,
y=e;;){if(y.tag===5){if(p===null){p=y;try{i=y.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("dis\
play","none","important"):l.display="none"):(a=y.stateNode,s=y.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?
s.display:null,a.style.display=Eu("display",o))}catch(k){ee(e,e.return,k)}}}else if(y.tag===6){if(p===null)try{y.stateNode.
nodeValue=c?"":y.memoizedProps}catch(k){ee(e,e.return,k)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&
y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===
e)break e;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ue(t,e),Xe(e),
r&4&&Qs(e);break;case 21:break;default:Ue(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==
null;){if(qc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(sr(i,
""),r.flags&=-33);var l=Hs(e);Eo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hs(e);jo(e,a,o);break;default:
throw Error(N(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){P=e,nd(e)}function nd(e,t,n){
for(var r=(e.mode&1)!==0;P!==null;){var i=P,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yr;if(!o){var a=i.
alternate,s=a!==null&&a.memoizedState!==null||me;a=Yr;var c=me;if(Yr=o,(me=s)&&!c)for(P=i;P!==null;)o=P,s=o.child,o.tag===
22&&o.memoizedState!==null?Ys(i):s!==null?(s.return=o,P=s):Ys(i);for(;l!==null;)P=l,nd(l),l=l.sibling;P=i,Yr=a,me=c}Ks(e)}else
i.subtreeFlags&8772&&l!==null?(l.return=i,P=l):Ks(e)}}function Ks(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;
try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===
null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(
i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ls(t,l,r);break;case 3:var o=t.updateQueue;
if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ls(
t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"\
input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:
break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){
var y=p.dehydrated;y!==null&&fr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}
me||t.flags&512&&No(t)}catch(g){ee(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;
break}P=t.return}}function Gs(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.
return,P=n;break}P=t.return}}function Ys(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;
try{Ki(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;
try{r.componentDidMount()}catch(s){ee(t,i,s)}}var l=t.return;try{No(t)}catch(s){ee(t,l,s)}break;case 5:var o=t.return;try{
No(t)}catch(s){ee(t,o,s)}}}catch(s){ee(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,
P=a;break}P=t.return}}var np=Math.ceil,zi=ft.ReactCurrentDispatcher,va=ft.ReactCurrentOwner,De=ft.ReactCurrentBatchConfig,
$=0,ae=null,ne=null,ue=0,Ee=0,yn=Ot(0),le=0,_r=null,Xt=0,Gi=0,wa=0,lr=null,Se=null,ka=0,Pn=1/0,rt=null,bi=!1,Ro=null,Mt=null,
Xr=!1,_t=null,Ii=0,or=0,Mo=null,ci=-1,di=0;function ye(){return $&6?te():ci!==-1?ci:ci=te()}function Pt(e){return e.mode&
1?$&2&&ue!==0?ue&-ue:Am.transition!==null?(di===0&&(di=$u()),di):(e=B,e!==0||(e=window.event,e=e===void 0?16:Ku(e.type)),
e):1}function Qe(e,t,n,r){if(50<or)throw or=0,Mo=null,Error(N(185));Nr(e,n,r),(!($&2)||e!==ae)&&(e===ae&&(!($&2)&&(Gi|=n),
le===4&&xt(e,ue)),je(e,r),n===1&&$===0&&!(t.mode&1)&&(Pn=te()+500,Wi&&Ft()))}function je(e,t){var n=e.callbackNode;Af(e,
t);var r=vi(e,e===ae?ue:0);if(r===0)n!==null&&is(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==
t){if(n!=null&&is(n),t===1)e.tag===0?Dm(Xs.bind(null,e)):fc(Xs.bind(null,e)),bm(function(){!($&6)&&Ft()}),n=null;else{switch(Uu(
r)){case 1:n=Qo;break;case 4:n=Du;break;case 16:n=yi;break;case 536870912:n=Au;break;default:n=yi}n=cd(n,rd.bind(null,e))}
e.callbackPriority=t,e.callbackNode=n}}function rd(e,t){if(ci=-1,di=0,$&6)throw Error(N(327));var n=e.callbackNode;if(_n()&&
e.callbackNode!==n)return null;var r=vi(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oi(e,r);else{
t=r;var i=$;$|=2;var l=ld();(ae!==e||ue!==t)&&(rt=null,Pn=te()+500,Ht(e,t));do try{lp();break}catch(a){id(e,a)}while(!0);
la(),zi.current=l,$=i,ne!==null?t=0:(ae=null,ue=0,t=le)}if(t!==0){if(t===2&&(i=to(e),i!==0&&(r=i,t=Po(e,i))),t===1)throw n=
_r,Ht(e,0),xt(e,r),je(e,te()),n;if(t===6)xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!rp(i)&&(t=Oi(e,r),t===2&&(l=to(
e),l!==0&&(r=l,t=Po(e,l))),t===1))throw n=_r,Ht(e,0),xt(e,r),je(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:
throw Error(N(345));case 2:$t(e,Se,rt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=ka+500-te(),10<t)){if(vi(e,0)!==0)break;
if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=uo($t.bind(null,e,Se,rt),t);
break}$t(e,Se,rt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-He(r);l=1<<o,o=t[o],
o>i&&(i=o),r&=~l}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,
10<r){e.timeoutHandle=uo($t.bind(null,e,Se,rt),r);break}$t(e,Se,rt);break;case 5:$t(e,Se,rt);break;default:throw Error(N(
329))}}}return je(e,te()),e.callbackNode===n?rd.bind(null,e):null}function Po(e,t){var n=lr;return e.current.memoizedState.
isDehydrated&&(Ht(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Se,Se=n,t!==null&&Lo(t)),e}function Lo(e){Se===null?Se=e:Se.push.
apply(Se,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<
n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ke(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&
16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.
return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~wa,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=
~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Xs(e){if($&6)throw Error(N(327));_n();var t=vi(
e,0);if(!(t&1))return je(e,te()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=to(e);r!==0&&(t=r,n=Po(e,r))}if(n===1)throw n=
_r,Ht(e,0),xt(e,t),je(e,te()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,
$t(e,Se,rt),je(e,te()),null}function xa(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Pn=te()+500,Wi&&Ft())}}function Zt(e){
_t!==null&&_t.tag===0&&!($&6)&&_n();var t=$;$|=1;var n=De.transition,r=B;try{if(De.transition=null,B=1,e)return e()}finally{
B=r,De.transition=n,$=t,!($&6)&&Ft()}}function Sa(){Ee=yn.current,Q(yn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=
0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zm(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(na(r),
r.tag){case 1:r=r.type.childContextTypes,r!=null&&_i();break;case 3:Rn(),Q(Ce),Q(pe),da();break;case 5:ca(r);break;case 4:
Rn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:oa(r.type._context);break;case 22:case 23:Sa()}n=n.return}if(ae=
e,ne=e=Lt(e.current,null),ue=Ee=t,le=0,_r=null,wa=Gi=Xt=0,Se=lr=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,
r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Bt=null}return e}
function id(e,t){do{var n=ne;try{if(la(),ai.current=Ti,Li){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&
(i.pending=null),r=r.next}Li=!1}if(Yt=0,oe=ie=Y=null,rr=!1,kr=0,va.current=null,n===null||n.return===null){le=1,_r=t,ne=
null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){
var c=s,p=a,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=
g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Fs(o);if(w!==null){w.flags&=-257,Ds(w,o,
a,l,t),w.mode&1&&Os(l,c,t),t=w,s=c;var v=t.updateQueue;if(v===null){var k=new Set;k.add(s),t.updateQueue=k}else v.add(s);
break e}else{if(!(t&1)){Os(l,c,t),_a();break e}s=Error(N(426))}}else if(K&&a.mode&1){var b=Fs(o);if(b!==null){!(b.flags&
65536)&&(b.flags|=256),Ds(b,o,a,l,t),ra(Mn(s,a));break e}}l=s=Mn(s,a),le!==4&&(le=2),lr===null?lr=[l]:lr.push(l),l=o;do{
switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Uc(l,s,t);Ps(l,f);break e;case 1:a=s;var d=l.type,m=l.stateNode;
if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mt===
null||!Mt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=Vc(l,a,t);Ps(l,x);break e}}l=l.return}while(l!==null)}ad(n)}catch(E){
t=E,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function ld(){var e=zi.current;return zi.current=Ti,e===null?
Ti:e}function _a(){(le===0||le===3||le===2)&&(le=4),ae===null||!(Xt&268435455)&&!(Gi&268435455)||xt(ae,ue)}function Oi(e,t){
var n=$;$|=2;var r=ld();(ae!==e||ue!==t)&&(rt=null,Ht(e,t));do try{ip();break}catch(i){id(e,i)}while(!0);if(la(),$=n,zi.
current=r,ne!==null)throw Error(N(261));return ae=null,ue=0,le}function ip(){for(;ne!==null;)od(ne)}function lp(){for(;ne!==
null&&!Pf();)od(ne)}function od(e){var t=ud(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?ad(e):ne=t,va.current=
null}function ad(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jm(n,t),n!==null){n.flags&=32767,ne=n;
return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ne=null;return}}else if(n=Zm(n,t,Ee),n!==null){
ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);le===0&&(le=5)}function $t(e,t,n){var r=B,i=De.transition;
try{De.transition=null,B=1,op(e,t,n,r)}finally{De.transition=i,B=r}return null}function op(e,t,n,r){do _n();while(_t!==null);
if($&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=
0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if($f(e,l),e===ae&&
(ne=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xr||(Xr=!0,cd(yi,function(){return _n(),null})),l=(n.flags&15990)!==
0,n.subtreeFlags&15990||l){l=De.transition,De.transition=null;var o=B;B=1;var a=$;$|=4,va.current=null,ep(e,n),td(n,e),jm(
ao),wi=!!oo,ao=oo=null,e.current=n,tp(n),Lf(),$=a,B=o,De.transition=l}else e.current=n;if(Xr&&(Xr=!1,_t=e,Ii=i),l=e.pendingLanes,
l===0&&(Mt=null),bf(n.stateNode),je(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.
stack,digest:i.digest});if(bi)throw bi=!1,e=Ro,Ro=null,e;return Ii&1&&e.tag!==0&&_n(),l=e.pendingLanes,l&1?e===Mo?or++:(or=
0,Mo=e):or=0,Ft(),null}function _n(){if(_t!==null){var e=Uu(Ii),t=De.transition,n=B;try{if(De.transition=null,B=16>e?16:
e,_t===null)var r=!1;else{if(e=_t,_t=null,Ii=0,$&6)throw Error(N(331));var i=$;for($|=4,P=e.current;P!==null;){var l=P,o=l.
child;if(P.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(P=c;P!==null;){var p=P;switch(p.
tag){case 0:case 11:case 15:ir(8,p,l)}var y=p.child;if(y!==null)y.return=p,P=y;else for(;P!==null;){p=P;var g=p.sibling,
w=p.return;if(Jc(p),p===c){P=null;break}if(g!==null){g.return=w,P=g;break}P=w}}}var v=l.alternate;if(v!==null){var k=v.child;
if(k!==null){v.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}P=l}}if(l.subtreeFlags&2064&&o!==null)o.
return=l,P=o;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ir(9,l,l.return)}var f=l.sibling;
if(f!==null){f.return=l.return,P=f;break e}P=l.return}}var d=e.current;for(P=d;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&
2064&&m!==null)m.return=o,P=m;else e:for(o=d;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ki(
9,a)}}catch(E){ee(a,a.return,E)}if(a===o){P=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,P=x;break e}P=a.
return}}if($=i,Ft(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Ai,e)}catch{}r=!0}return r}finally{
B=n,De.transition=t}}return!1}function Zs(e,t,n){t=Mn(n,t),t=Uc(e,t,1),e=Rt(e,t,1),t=ye(),e!==null&&(Nr(e,1,t),je(e,t))}
function ee(e,t,n){if(e.tag===3)Zs(e,e,n);else for(;t!==null;){if(t.tag===3){Zs(t,e,n);break}else if(t.tag===1){var r=t.
stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.
has(r))){e=Mn(n,e),e=Vc(t,e,1),t=Rt(t,e,1),e=ye(),t!==null&&(Nr(t,1,e),je(t,e));break}}t=t.return}}function ap(e,t,n){var r=e.
pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(le===4||le===3&&(ue&130023424)===
ue&&500>te()-ka?Ht(e,0):wa|=n),je(e,t)}function sd(e,t){t===0&&(e.mode&1?(t=$r,$r<<=1,!($r&130023424)&&($r=4194304)):t=1);
var n=ye();e=ct(e,t),e!==null&&(Nr(e,t,n),je(e,n))}function sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sd(
e,n)}function up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:
r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),sd(e,n)}var ud;ud=function(e,t,n){if(e!==null)if(e.
memoizedProps!==t.pendingProps||Ce.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Xm(e,t,n);_e=!!(e.flags&
131072)}else _e=!1,K&&t.flags&1048576&&mc(t,ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ui(e,t),e=t.pendingProps;
var i=Nn(t,pe.current);Sn(t,n),i=ma(null,t,r,e,i,n);var l=pa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.
render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(l=!0,Ci(t)):l=!1,t.memoizedState=
i.state!==null&&i.state!==void 0?i.state:null,sa(t),i.updater=Qi,t.stateNode=i,i._reactInternals=t,yo(t,r,e,n),t=ko(null,
t,r,!0,l,n)):(t.tag=0,K&&l&&ta(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ui(e,t),e=t.pendingProps,
i=r._init,r=i(r._payload),t.type=r,i=t.tag=dp(r),e=Ve(r,e),i){case 0:t=wo(null,t,r,e,n);break e;case 1:t=Us(null,t,r,e,n);
break e;case 11:t=As(null,t,r,e,n);break e;case 14:t=$s(null,t,r,Ve(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:
return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),wo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.
elementType===r?i:Ve(r,i),Us(e,t,r,i,n);case 3:e:{if(Qc(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,
i=l.element,wc(e,t),Mi(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.
cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=
l,t.flags&256){i=Mn(Error(N(423)),t),t=Vs(e,t,r,n,i);break e}else if(r!==i){i=Mn(Error(N(424)),t),t=Vs(e,t,r,n,i);break e}else
for(Re=Et(t.stateNode.containerInfo.firstChild),Me=t,K=!0,We=null,n=yc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,
n=n.sibling;else{if(jn(),r===i){t=dt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return kc(t),e===null&&po(t),r=
t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,so(r,i)?o=null:l!==null&&so(r,l)&&(t.flags|=32),Hc(
e,t),ge(e,t,o,n),t.child;case 6:return e===null&&po(t),null;case 13:return Kc(e,t,n);case 4:return ua(t,t.stateNode.containerInfo),
r=t.pendingProps,e===null?t.child=En(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===
r?i:Ve(r,i),As(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),
t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,
o=i.value,W(Ei,r._currentValue),r._currentValue=o,l!==null)if(Ke(l.value,o)){if(l.children===i.children&&!Ce.current){t=
dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.
firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=at(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;
var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),
ho(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.
return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ho(o,n,t),o=l.sibling}else o=l.child;
if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}
o=o.return}l=o}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sn(t,n),i=Ae(i),
r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),$s(e,t,r,i,n);case 15:
return Bc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),ui(e,t),t.
tag=1,Ne(r)?(e=!0,Ci(t)):e=!1,Sn(t,n),$c(t,r,i),yo(t,r,i,n),ko(null,t,r,!0,e,n);case 19:return Gc(e,t,n);case 22:return Wc(
e,t,n)}throw Error(N(156,t.tag))};function cd(e,t){return Fu(e,t)}function cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=
this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.
dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.
deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new cp(e,t,n,r)}function Ca(e){
return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return Ca(e)?1:0;if(e!=null){if(e=
e.$$typeof,e===Bo)return 11;if(e===Wo)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,
t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=
t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=
e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.
dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,
n.ref=e.ref,n}function fi(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Ca(e)&&(o=1);else if(typeof e=="string")o=5;else
e:switch(e){case an:return Qt(n.children,i,l,t);case Vo:o=8,i|=8;break;case $l:return e=Fe(12,n,t,i|2),e.elementType=$l,
e.lanes=l,e;case Ul:return e=Fe(13,n,t,i),e.elementType=Ul,e.lanes=l,e;case Vl:return e=Fe(19,n,t,i),e.elementType=Vl,e.
lanes=l,e;case ku:return Yi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vu:o=10;break e;case wu:
o=9;break e;case Bo:o=11;break e;case Wo:o=14;break e;case vt:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}
return t=Fe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Qt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Yi(e,t,n,r){
return e=Fe(22,e,r,t),e.elementType=ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Tl(e,t,n){return e=Fe(6,e,null,t),
e.lanes=n,e}function zl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.
containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,n,r,i){this.tag=t,this.containerInfo=
e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=
this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=
this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),
this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Na(e,t,n,r,i,l,o,a,s){
return e=new fp(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Fe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState=
{element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sa(l),e}function mp(e,t,n){var r=3<
arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:on,key:r==null?null:""+r,children:e,containerInfo:t,
implementation:n}}function dd(e){if(!e)return zt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;
do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;
break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ne(n))return dc(e,n,t)}return t}function fd(e,t,n,r,i,l,o,a,s){
return e=Na(n,r,!0,e,i,l,o,a,s),e.context=dd(null),n=e.current,r=ye(),i=Pt(n),l=at(r,i),l.callback=t??null,Rt(n,l,i),e.current.
lanes=i,Nr(e,i,r),je(e,r),e}function Xi(e,t,n,r){var i=t.current,l=ye(),o=Pt(i);return n=dd(n),t.context===null?t.context=
n:t.pendingContext=n,t=at(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,o),e!==null&&
(Qe(e,i,o,l),oi(e,i,o)),o}function Fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:
return e.child.stateNode}}function Js(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=
n!==0&&n<t?n:t}}function ja(e,t){Js(e,t),(e=e.alternate)&&Js(e,t)}function pp(){return null}var md=typeof reportError=="\
function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}Zi.prototype.render=Ea.prototype.
render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Xi(e,t,null,null)};Zi.prototype.unmount=Ea.prototype.
unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Xi(
null,e,null,null)}),t[ut]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){
if(e){var t=Wu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(
n,0,e),n===0&&Qu(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ji(e){return!(!e||
e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qs(){}
function hp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Fi(o);l.call(c)}}var o=fd(t,r,e,0,null,
!1,!1,"",qs);return e._reactRootContainer=o,e[ut]=o.current,hr(e.nodeType===8?e.parentNode:e),Zt(),o}for(;i=e.lastChild;)
e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fi(s);a.call(c)}}var s=Na(e,0,!1,null,null,!1,!1,"",
qs);return e._reactRootContainer=s,e[ut]=s.current,hr(e.nodeType===8?e.parentNode:e),Zt(function(){Xi(t,s,n,r)}),s}function qi(e,t,n,r,i){
var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Fi(o);a.call(s)}}Xi(t,o,e,
i)}else o=hp(n,t,e,i,r);return Fi(o)}Vu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){
var n=Xn(t.pendingLanes);n!==0&&(Ko(t,n|1),je(t,te()),!($&6)&&(Pn=te()+500,Ft()))}break;case 13:Zt(function(){var r=ct(e,
1);if(r!==null){var i=ye();Qe(r,e,1,i)}}),ja(e,1)}};Go=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=ye();
Qe(t,e,134217728,n)}ja(e,134217728)}};Bu=function(e){if(e.tag===13){var t=Pt(e),n=ct(e,t);if(n!==null){var r=ye();Qe(n,e,
t,r)}ja(e,t)}};Wu=function(){return B};Hu=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Jl=function(e,t,n){switch(t){case"\
input":if(Hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("inp\
ut[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bi(r);
if(!i)throw Error(N(90));Su(r),Hl(r,i)}}}break;case"textarea":Cu(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,
t,!1)}};Lu=xa;Tu=Zt;var gp={usingClientEntryPoint:!1,Events:[Er,dn,Bi,Mu,Pu,xa]},Wn={findFiberByHostInstance:Vt,bundleType:0,
version:"18.3.1",rendererPackageName:"react-dom"},yp={bundleType:Wn.bundleType,version:Wn.version,rendererPackageName:Wn.
rendererPackageName,rendererConfig:Wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,
overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,
scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Iu(e),e===
null?null:e.stateNode},findFiberByHostInstance:Wn.findFiberByHostInstance||pp,findHostInstancesForRefresh:null,scheduleRefresh:null,
scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<
"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Ai=Zr.inject(yp),et=Zr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=
gp;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(
N(200));return mp(e,t,null,n)};Le.createRoot=function(e,t){if(!Ra(e))throw Error(N(299));var n=!1,r="",i=md;return t!=null&&
(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=
t.onRecoverableError)),t=Na(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,hr(e.nodeType===8?e.parentNode:e),new Ea(t)};Le.findDOMNode=
function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==
"function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Iu(t),e=e===null?null:e.stateNode,e};Le.flushSync=
function(e){return Zt(e)};Le.hydrate=function(e,t,n){if(!Ji(t))throw Error(N(200));return qi(null,e,t,!0,n)};Le.hydrateRoot=
function(e,t,n){if(!Ra(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=md;if(n!=null&&(n.unstable_strictMode===
!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),
t=fd(t,null,e,1,n??null,i,!1,l,o),e[ut]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.
mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);
return new Zi(t)};Le.render=function(e,t,n){if(!Ji(t))throw Error(N(200));return qi(null,e,t,!1,n)};Le.unmountComponentAtNode=
function(e){if(!Ji(e))throw Error(N(40));return e._reactRootContainer?(Zt(function(){qi(null,null,e,!1,function(){e._reactRootContainer=
null,e[ut]=null})}),!0):!1};Le.unstable_batchedUpdates=xa;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ji(
n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return qi(e,t,n,!1,r)};Le.version="18.3\
.1-next-f1338f8080-20240426";function pd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd)}catch(e){console.error(e)}}pd(),pu.exports=Le;var hd=pu.
exports,gd,eu=hd;gd=eu.createRoot,eu.hydrateRoot;function Jr(e,t){const[n,r]=S.useState(t),[i,l]=S.useState(!1),[o,a]=S.
useState("");S.useEffect(()=>{try{const c=window.localStorage.getItem("sft:"+e);if(c!=null){const p=JSON.parse(c),y=t!==
null&&typeof t=="object"&&!Array.isArray(t)&&p!==null&&typeof p=="object"&&!Array.isArray(p)?{...t,...p}:p;r(y)}}catch{a(
"Saved data on this browser could not be read.")}l(!0)},[e]);const s=S.useCallback(c=>{r(p=>{const y=typeof c=="function"?
c(p):c;try{window.localStorage.setItem("sft:"+e,JSON.stringify(y))}catch{a("This browser blocked saving. Changes last un\
til the tab closes.")}return y})},[e]);return[n,s,{ready:i,message:o}]}const vp={longer:["images/images/longer-0.txt","i\
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
s/images/catalog-3.txt","images/images/catalog-4.txt","images/images/catalog-5.txt","images/images/catalog-6.txt"]},bl={};
function Ma(e){return bl[e]||(bl[e]=Promise.all(vp[e].map(async t=>{const n=await fetch(t);if(!n.ok)throw Error("Image u\
navailable");return n.text()})).then(t=>"data:image/jpeg;base64,"+t.join("").replace(/\s/g,"")))}function yd(e){const[t,
n]=S.useState("");return S.useEffect(()=>{let r=!0;return Ma(e).then(i=>{r&&n(i)}).catch(()=>{}),()=>{r=!1}},[e]),t}const wp={
rain:"photos/12-rain.jpg",library:"photos/13-library.jpg",coffee:"photos/14-coffee.jpg",desk:"photos/15-desk.jpg",mountains:"\
photos/28-mountains.jpg",forest:"photos/17-forest.jpg",stars:"photos/18-stars.jpg",ocean:"photos/19-ocean.jpg"},kp={rain:"\
thumbs/20-rain.jpg",library:"thumbs/21-library.jpg",coffee:"thumbs/22-coffee.jpg",desk:"thumbs/23-desk.jpg",mountains:"t\
humbs/24-mountains.jpg",forest:"thumbs/25-forest.jpg",stars:"thumbs/26-stars.jpg",ocean:"thumbs/27-ocean.jpg"},tu=Object.
fromEntries(Object.keys(wp).map(e=>[e,()=>Ma(e).then(t=>({default:t}))])),nu=Object.fromEntries(Object.keys(kp).map(e=>[
e,()=>Ma("thumb-"+e).then(t=>({default:t}))])),Il={},Ol={},Fl={focusMin:25,shortMin:5,longMin:15,longEvery:4,autoBreaks:!1,
autoFocus:!1,alarmSound:"bell",alarmVolume:.8,alarmRepeat:!0,customAlarm:null,tick:!1,ambient:"none",ambientVolume:.5,notifications:!1,
keepAwake:!1,background:{kind:"builtin",id:"rain"},bgAnimate:!0,customFit:"cover",scrim:.45,accent:"#9fd8c6",font:"sans",
clockStyle:"ring",clockSize:"m",showDots:!0,showChip:!0,showHint:!0,spotify:null,spotifyOpen:!1},xp=[{id:"rain",name:"Ra\
iny window"},{id:"library",name:"Library"},{id:"coffee",name:"Coffee notes"},{id:"desk",name:"Night desk"},{id:"mountain\
s",name:"Mountains"},{id:"forest",name:"Misty forest"},{id:"stars",name:"Night sky"},{id:"ocean",name:"Ocean"}],mi=[{id:"\
dusk",name:"Dusk",css:"linear-gradient(160deg, #232453 0%, #6b3f63 55%, #c96f4a 100%)"},{id:"moss",name:"Moss",css:"line\
ar-gradient(160deg, #0f2e25 0%, #1d5c46 60%, #7ea87b 100%)"},{id:"ink",name:"Ink",css:"linear-gradient(160deg, #101418 0\
%, #1f2a33 100%)"},{id:"dawn",name:"Dawn",css:"linear-gradient(160deg, #3b2f4a 0%, #8a5a6e 55%, #e8a87c 100%)"}],vd=[{id:"\
aurora",name:"Aurora"},{id:"meteor",name:"Falling stars"},{id:"waves",name:"Night waves"},{id:"rainfall",name:"Rain stre\
aks"}],wd=[{id:"shrine",name:"Moonlit shrine",url:"https://cdn.pixabay.com/video/2026/04/22/348164_large.mp4",tile:0,preview:"\
curated",duration:5},{id:"rainy-window",name:"Rainy window",url:"https://cdn.pixabay.com/video/2026/09/15/376433_medium.\
mp4",tile:1,preview:"curated",duration:8},{id:"misty-river",name:"Misty river",url:"https://cdn.pixabay.com/video/2026/0\
4/05/344726_medium.mp4",tile:2,preview:"curated",duration:24},{id:"water-garden",name:"Water garden",url:"https://cdn.pi\
xabay.com/video/2025/07/12/290959_medium.mp4",tile:3,preview:"curated",duration:9.633333},{id:"sakura-night",name:"Islan\
d moon",url:"https://cdn.pixabay.com/video/2023/03/22/155672-810706799_large.mp4",tile:4,preview:"curated",duration:60.116667},
{id:"night-train",name:"Night train",url:"https://cdn.pixabay.com/video/2025/10/23/311602_medium.mp4",tile:5,preview:"cu\
rated",duration:64},{id:"japan-street",name:"Sakura street",url:"https://cdn.pixabay.com/video/2025/04/07/270367_medium.\
mp4",tile:6,preview:"curated",duration:10.36},{id:"cozy-window",name:"Rainy desk",url:"https://cdn.pixabay.com/video/202\
6/09/13/376049_large.mp4",tile:7,preview:"curated",duration:6},{id:"balcony-dusk",name:"Evening balcony",url:"https://cd\
n.pixabay.com/video/2026/09/15/376434_medium.mp4",tile:8,preview:"curated",duration:8}],To=[{id:"long-215407",name:"Rain\
y study window",url:"https://cdn.pixabay.com/video/2024/06/05/215407_medium.mp4",tile:0,preview:"longer",duration:60.093367},
{id:"long-297863",name:"Rainlit reading nook",url:"https://cdn.pixabay.com/video/2025/08/17/297863_medium.mp4",tile:1,preview:"\
longer",duration:64},{id:"long-265906",name:"Neon rainy lounge",url:"https://cdn.pixabay.com/video/2025/03/19/265906_med\
ium.mp4",tile:2,preview:"longer",duration:60},{id:"long-276498",name:"Night desk journal",url:"https://cdn.pixabay.com/v\
ideo/2025/05/03/276498_medium.mp4",tile:3,preview:"longer",duration:52.066667},{id:"long-311563",name:"Umbrella city",url:"\
https://cdn.pixabay.com/video/2025/10/23/311563_medium.mp4",tile:4,preview:"longer",duration:61.166667},{id:"long-180170",
name:"Neon alley puddles",url:"https://cdn.pixabay.com/video/2023/09/11/180170-863654648_medium.mp4",tile:5,preview:"lon\
ger",duration:24.875},{id:"long-229537",name:"Moonlit river window",url:"https://cdn.pixabay.com/video/2024/09/03/229537\
_medium.mp4",tile:6,preview:"longer",duration:30.03},{id:"long-211097",name:"Cabin porch fire",url:"https://cdn.pixabay.\
com/video/2024/05/07/211097_medium.mp4",tile:7,preview:"longer",duration:30},{id:"long-246535",name:"Window cat at dusk",
url:"https://cdn.pixabay.com/video/2024/12/13/246535_medium.mp4",tile:8,preview:"longer",duration:58.5585},{id:"long-246\
241",name:"Rainy sofa cat",url:"https://cdn.pixabay.com/video/2024/12/11/246241_medium.mp4",tile:9,preview:"longer",duration:75.341933},
{id:"long-204116",name:"Firelit cabin",url:"https://cdn.pixabay.com/video/2024/03/14/204116-923594064_medium.mp4",tile:10,
preview:"longer",duration:30},{id:"long-248668",name:"Lavender lounge",url:"https://cdn.pixabay.com/video/2024/12/25/248\
668_medium.mp4",tile:11,preview:"longer",duration:20},{id:"long-371447",name:"City cat companion",url:"https://cdn.pixab\
ay.com/video/2026/08/19/371447_medium.mp4",tile:12,preview:"longer",duration:60.165704},{id:"long-379222",name:"City blu\
es",url:"https://cdn.pixabay.com/video/2026/09/27/379222_medium.mp4",tile:13,preview:"longer",duration:20.1201},{id:"lon\
g-345856",name:"Sleepy desk cat",url:"https://cdn.pixabay.com/video/2026/04/11/345856_medium.mp4",tile:14,preview:"longe\
r",duration:64},{id:"long-312345",name:"Lamp and sleeping cat",url:"https://cdn.pixabay.com/video/2025/10/27/312345_medi\
um.mp4",tile:15,preview:"longer",duration:64},{id:"long-271841",name:"Rainy study companion",url:"https://cdn.pixabay.co\
m/video/2025/04/13/271841_medium.mp4",tile:16,preview:"longer",duration:67.8},{id:"long-297736",name:"Rooftop study",url:"\
https://cdn.pixabay.com/video/2025/08/16/297736_medium.mp4",tile:17,preview:"longer",duration:72},{id:"long-246242",name:"\
Sleeping hearth cat",url:"https://cdn.pixabay.com/video/2024/12/11/246242_medium.mp4",tile:18,preview:"longer",duration:58.691967},
{id:"long-246243",name:"Dusk window cat",url:"https://cdn.pixabay.com/video/2024/12/11/246243_medium.mp4",tile:19,preview:"\
longer",duration:76.709967},{id:"long-202823",name:"Candlelit library",url:"https://cdn.pixabay.com/video/2024/03/03/202\
823-919000176_medium.mp4",tile:20,preview:"longer",duration:30},{id:"long-75368",name:"Old-town rain",url:"https://cdn.p\
ixabay.com/video/2021/05/26/75368-555547951_medium.mp4",tile:21,preview:"longer",duration:32.873333},{id:"long-38271",name:"\
Storm at sea",url:"https://cdn.pixabay.com/video/2020/05/06/38271-415950897_medium.mp4",tile:22,preview:"longer",duration:58.516667},
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
8_medium.mp4",tile:70,preview:"longer",duration:60},{id:"long-184370",name:"Twilight pagoda",url:"https://cdn.pixabay.co\
m/video/2023/10/10/184370-873181596_medium.mp4",tile:71,preview:"longer",duration:24.213333},{id:"long-266428",name:"Sno\
wy shrine lantern",url:"https://cdn.pixabay.com/video/2025/03/21/266428_medium.mp4",tile:72,preview:"longer",duration:27.483333},
{id:"long-225944",name:"Lantern street",url:"https://cdn.pixabay.com/video/2024/08/11/225944_medium.mp4",tile:73,preview:"\
longer",duration:30},{id:"long-265909",name:"Anime river sunset",url:"https://cdn.pixabay.com/video/2025/03/19/265909_me\
dium.mp4",tile:74,preview:"longer",duration:60},{id:"long-281165",name:"Violet Mount Fuji",url:"https://cdn.pixabay.com/\
video/2025/05/23/281165_medium.mp4",tile:75,preview:"longer",duration:30},{id:"long-153086",name:"Snowy Kyoto lane",url:"\
https://cdn.pixabay.com/video/2023/03/04/153086-846385128_medium.mp4",tile:76,preview:"longer",duration:52.51},{id:"long\
-185425",name:"Stormy mountain garden",url:"https://cdn.pixabay.com/video/2023/10/17/185425-875362672_medium.mp4",tile:77,
preview:"longer",duration:25},{id:"long-158195",name:"Moonlit cherry pond",url:"https://cdn.pixabay.com/video/2023/04/10\
/158195-816372976_medium.mp4",tile:78,preview:"longer",duration:60.053333},{id:"long-189472",name:"Snowy shrine gate",url:"\
https://cdn.pixabay.com/video/2023/11/17/189472-885804489_medium.mp4",tile:79,preview:"longer",duration:60.053333},{id:"\
long-214500",name:"Night library student",url:"https://cdn.pixabay.com/video/2024/05/30/214500_medium.mp4",tile:80,preview:"\
longer",duration:63.229833},{id:"long-314688",name:"Sunset headphones",url:"https://cdn.pixabay.com/video/2025/11/08/314\
688_medium.mp4",tile:81,preview:"longer",duration:64},{id:"long-345955",name:"Cozy room companion",url:"https://cdn.pixa\
bay.com/video/2026/04/12/345955_medium.mp4",tile:82,preview:"longer",duration:64},{id:"long-208093",name:"Coffee shop he\
arth",url:"https://cdn.pixabay.com/video/2024/04/15/208093_medium.mp4",tile:83,preview:"longer",duration:30},{id:"long-2\
09201",name:"Garden porch",url:"https://cdn.pixabay.com/video/2024/04/24/209201_medium.mp4",tile:84,preview:"longer",duration:20},
{id:"long-204117",name:"Tea by the fire",url:"https://cdn.pixabay.com/video/2024/03/14/204117-923594068_medium.mp4",tile:85,
preview:"longer",duration:30},{id:"long-246984",name:"Covered forest porch",url:"https://cdn.pixabay.com/video/2024/12/1\
6/246984_medium.mp4",tile:86,preview:"longer",duration:30},{id:"long-267296",name:"Round-door storybook",url:"https://cd\
n.pixabay.com/video/2025/03/25/267296_medium.mp4",tile:87,preview:"longer",duration:60},{id:"long-301045",name:"Rainy fi\
reside study",url:"https://cdn.pixabay.com/video/2025/09/01/301045_medium.mp4",tile:88,preview:"longer",duration:60.5},{
id:"long-297472",name:"Moonclock lounge",url:"https://cdn.pixabay.com/video/2025/08/14/297472_medium.mp4",tile:89,preview:"\
longer",duration:30},{id:"long-242924",name:"Snowy coffee shop",url:"https://cdn.pixabay.com/video/2024/11/23/242924_med\
ium.mp4",tile:90,preview:"longer",duration:60},{id:"long-243342",name:"Winter cafe",url:"https://cdn.pixabay.com/video/2\
024/11/26/243342_medium.mp4",tile:91,preview:"longer",duration:60},{id:"long-286806",name:"Open book garden",url:"https:\
//cdn.pixabay.com/video/2025/06/20/286806_medium.mp4",tile:92,preview:"longer",duration:30.03},{id:"long-244452",name:"S\
nowy porch chair",url:"https://cdn.pixabay.com/video/2024/12/02/244452_medium.mp4",tile:93,preview:"longer",duration:30},
{id:"long-244362",name:"Snowy cabin deck",url:"https://cdn.pixabay.com/video/2024/12/02/244362_medium.mp4",tile:94,preview:"\
longer",duration:30},{id:"long-210707",name:"Autumn porch hearth",url:"https://cdn.pixabay.com/video/2024/05/05/210707_m\
edium.mp4",tile:95,preview:"longer",duration:30},{id:"long-309388",name:"Dusk window reader",url:"https://cdn.pixabay.co\
m/video/2025/10/12/309388_medium.mp4",tile:96,preview:"longer",duration:64},{id:"long-265815",name:"Neon headphones",url:"\
https://cdn.pixabay.com/video/2025/03/18/265815_medium.mp4",tile:97,preview:"longer",duration:59.993267},{id:"long-26604\
2",name:"Pale winter lounge",url:"https://cdn.pixabay.com/video/2025/03/19/266042_medium.mp4",tile:98,preview:"longer",duration:30.03},
{id:"long-325442",name:"Pink-haired study",url:"https://cdn.pixabay.com/video/2026/01/01/325442_medium.mp4",tile:99,preview:"\
longer",duration:30},{id:"long-265816",name:"Night laptop study",url:"https://cdn.pixabay.com/video/2025/03/18/265816_me\
dium.mp4",tile:100,preview:"longer",duration:59.993267}],zo=[{id:"anime-lofi-rain-363709",name:"Rainy bus stop",url:"htt\
ps://cdn.pixabay.com/video/2026/07/13/363709_medium.mp4",tile:0,duration:10},{id:"anime-lofi-record-363710",name:"Record\
 shop",url:"https://cdn.pixabay.com/video/2026/07/13/363710_medium.mp4",tile:1,duration:10},{id:"aurora-borealis-norther\
n-186969-879222062",name:"Aurora lake",url:"https://cdn.pixabay.com/video/2023/10/29/186969-879222062_medium.mp4",tile:2,
duration:7.615},{id:"autumn-forest-trees-313784",name:"Autumn nook",url:"https://cdn.pixabay.com/video/2025/11/04/313784\
_medium.mp4",tile:3,duration:30},{id:"autumn-forest-trees-313787",name:"Lakeside campfire",url:"https://cdn.pixabay.com/\
video/2025/11/04/313787_medium.mp4",tile:4,duration:30},{id:"autumn-nature-cabin-324160",name:"Cabin bedroom",url:"https\
://cdn.pixabay.com/video/2025/12/24/324160_medium.mp4",tile:5,duration:30},{id:"autumn-nature-cabin-324164",name:"Forest\
 cabin",url:"https://cdn.pixabay.com/video/2025/12/24/324164_medium.mp4",tile:6,duration:30},{id:"autumn-relaxation-fore\
st-309119",name:"Autumn lake",url:"https://cdn.pixabay.com/video/2025/10/10/309119_medium.mp4",tile:7,duration:10.55},{id:"\
beach-ocean-night-384362",name:"Stormy coast",url:"https://cdn.pixabay.com/video/2026/10/22/384362_medium.mp4",tile:8,duration:10.066667},
{id:"bioluminescence-beach-waves-343671",name:"Starlit shore",url:"https://cdn.pixabay.com/video/2026/03/31/343671_mediu\
m.mp4",tile:9,duration:20.125},{id:"bioluminescence-beach-waves-346010",name:"Midnight waves",url:"https://cdn.pixabay.c\
om/video/2026/04/12/346010_medium.mp4",tile:10,duration:15},{id:"bioluminescence-bioluminescent-ocean-381552",name:"Glow\
ing ocean",url:"https://cdn.pixabay.com/video/2026/10/08/381552_medium.mp4",tile:11,duration:15.041667},{id:"bioluminesc\
ent-beach-375118-375118",name:"Aurora coast",url:"https://cdn.pixabay.com/video/2026/09/08/375118_medium.mp4",tile:12,duration:15.041667},
{id:"boats-moon-moonlight-381338",name:"Moonlit boats",url:"https://cdn.pixabay.com/video/2026/10/07/381338_medium.mp4",
tile:13,duration:15.041667},{id:"bonfire-flames-fire-201688-916116512",name:"Bonfire",url:"https://cdn.pixabay.com/video\
/2024/02/23/201688-916116512_medium.mp4",tile:14,duration:44.223333},{id:"book-candle-stars-184469-873483892",name:"Cand\
lelit book",url:"https://cdn.pixabay.com/video/2023/10/10/184469-873483892_medium.mp4",tile:15,duration:30.08},{id:"book\
-study-books-347655",name:"Library fire",url:"https://cdn.pixabay.com/video/2026/04/19/347655_medium.mp4",tile:16,duration:6.3},
{id:"campfire-bonfire-flames-225422",name:"Campfire embers",url:"https://cdn.pixabay.com/video/2024/08/08/225422_medium.\
mp4",tile:17,duration:11.9},{id:"candle-flame-advent-311235",name:"Rainy candle",url:"https://cdn.pixabay.com/video/2025\
/10/21/311235_medium.mp4",tile:18,duration:19.291667},{id:"candle-flame-advent-312390",name:"Candlelight",url:"https://c\
dn.pixabay.com/video/2025/10/28/312390_medium.mp4",tile:19,duration:13.6},{id:"candle-flame-candlelight-312404",name:"Sn\
owy window",url:"https://cdn.pixabay.com/video/2025/10/28/312404_medium.mp4",tile:20,duration:15.88},{id:"cedar-tree-lin\
e-211013",name:"Cedar trail",url:"https://cdn.pixabay.com/video/2024/05/07/211013_medium.mp4",tile:21,duration:37.65},{id:"\
city-starry-sky-310146",name:"Purple night",url:"https://cdn.pixabay.com/video/2025/10/15/310146_medium.mp4",tile:22,duration:8.083333},
{id:"coffee-cup-rest-309872",name:"Rainy coffee",url:"https://cdn.pixabay.com/video/2025/10/14/309872_medium.mp4",tile:23,
duration:12},{id:"coffee-living-room-237103",name:"Fireside coffee",url:"https://cdn.pixabay.com/video/2024/10/19/237103\
_medium.mp4",tile:24,duration:17.666667},{id:"coffee-tea-steam-285759",name:"Morning steam",url:"https://cdn.pixabay.com\
/video/2025/06/13/285759_medium.mp4",tile:25,duration:5.64},{id:"cottage-cabin-house-180939-865223880",name:"Garden cott\
age",url:"https://cdn.pixabay.com/video/2023/09/16/180939-865223880_medium.mp4",tile:26,duration:7.593333},{id:"couch-so\
fa-rain-185888-876579680",name:"Forest lounge",url:"https://cdn.pixabay.com/video/2023/10/20/185888-876579680_medium.mp4",
tile:27,duration:6},{id:"cozy-bedroom-289797-289797",name:"Cozy bedroom",url:"https://cdn.pixabay.com/video/2025/07/06/2\
89797_medium.mp4",tile:28,duration:30},{id:"cozy-bedroom-modern-290857",name:"Rainy bedroom",url:"https://cdn.pixabay.co\
m/video/2025/07/12/290857_medium.mp4",tile:29,duration:24},{id:"cozy-bedroom-modern-290943",name:"Quiet suite",url:"http\
s://cdn.pixabay.com/video/2025/07/12/290943_medium.mp4",tile:30,duration:24},{id:"cozy-bedroom-modern-290944",name:"Wind\
ow retreat",url:"https://cdn.pixabay.com/video/2025/07/12/290944_medium.mp4",tile:31,duration:24},{id:"cozy-winter-autum\
n-253056",name:"Winter fire",url:"https://cdn.pixabay.com/video/2025/01/17/253056_medium.mp4",tile:32,duration:10.583333},
{id:"creek-snow-winter-190915-888878158",name:"Snowy creek",url:"https://cdn.pixabay.com/video/2023/11/27/190915-8888781\
58_medium.mp4",tile:33,duration:50.133333},{id:"dark-ocean-ocean-372868",name:"Ocean doorway",url:"https://cdn.pixabay.c\
om/video/2026/08/27/372868_medium.mp4",tile:34,duration:10.3},{id:"dark-ocean-ocean-372869",name:"Stormy pier",url:"http\
s://cdn.pixabay.com/video/2026/08/27/372869_medium.mp4",tile:35,duration:12.633333},{id:"dark-room-storm-369507",name:"R\
ainy room",url:"https://cdn.pixabay.com/video/2026/08/09/369507_medium.mp4",tile:36,duration:10},{id:"dream-nature-fanta\
sy-297586",name:"Winter cottage",url:"https://cdn.pixabay.com/video/2025/08/15/297586_medium.mp4",tile:37,duration:7.733333},
{id:"fireplace-fire-heat-327084",name:"Fireplace",url:"https://cdn.pixabay.com/video/2026/01/11/327084_medium.mp4",tile:38,
duration:12.04},{id:"fireplace-winter-snow-347140",name:"Snowy lounge",url:"https://cdn.pixabay.com/video/2026/04/17/347\
140_medium.mp4",tile:39,duration:16},{id:"flowers-tree-moon-179020-861022089",name:"Moonlit blossoms",url:"https://cdn.p\
ixabay.com/video/2023/09/03/179020-861022089_medium.mp4",tile:40,duration:7.21},{id:"forest-nature-wood-329836",name:"Mo\
onlit forest",url:"https://cdn.pixabay.com/video/2026/01/23/329836_medium.mp4",tile:41,duration:9.6},{id:"ice-forest-fro\
zen-254850",name:"Frozen river",url:"https://cdn.pixabay.com/video/2025/01/27/254850_medium.mp4",tile:42,duration:50.5505},
{id:"landscape-cute-heaven-371729",name:"Castle at night",url:"https://cdn.pixabay.com/video/2026/08/21/371729_medium.mp\
4",tile:43,duration:24.716667},{id:"landscape-waterfall-water-298040",name:"Forest falls",url:"https://cdn.pixabay.com/v\
ideo/2025/08/18/298040_medium.mp4",tile:44,duration:33.383333},{id:"library-books-363706-363706",name:"Library desk",url:"\
https://cdn.pixabay.com/video/2026/07/13/363706_medium.mp4",tile:45,duration:10},{id:"lighthouse-landscape-nature-325141",
name:"Coastal lighthouse",url:"https://cdn.pixabay.com/video/2025/12/31/325141_medium.mp4",tile:46,duration:9.8},{id:"li\
ghthouse-storm-ocean-373895",name:"Midnight lighthouse",url:"https://cdn.pixabay.com/video/2026/09/01/373895_medium.mp4",
tile:47,duration:15},{id:"lighthouse-wave-ocean-358853",name:"Storm lighthouse",url:"https://cdn.pixabay.com/video/2026/\
06/16/358853_medium.mp4",tile:48,duration:20},{id:"loop-ocean-nature-358453",name:"Silver waves",url:"https://cdn.pixaba\
y.com/video/2026/06/14/358453_medium.mp4",tile:49,duration:15.041667},{id:"luxury-bedroom-cozy-290401",name:"Night loung\
e",url:"https://cdn.pixabay.com/video/2025/07/09/290401_medium.mp4",tile:50,duration:30},{id:"moon-clouds-stars-209264",
name:"Clouds and moon",url:"https://cdn.pixabay.com/video/2024/04/24/209264_medium.mp4",tile:51,duration:5},{id:"moon-fu\
ll-moon-370403",name:"Sunset ocean",url:"https://cdn.pixabay.com/video/2026/08/13/370403_medium.mp4",tile:52,duration:5},
{id:"moon-nature-night-290116",name:"Crimson moon",url:"https://cdn.pixabay.com/video/2025/07/08/290116_medium.mp4",tile:53,
duration:8.4},{id:"moon-night-sky-256347",name:"Still moonlight",url:"https://cdn.pixabay.com/video/2025/02/04/256347_me\
dium.mp4",tile:54,duration:15.133182},{id:"moon-trees-forest-183967-872226594",name:"Forest moon",url:"https://cdn.pixab\
ay.com/video/2023/10/07/183967-872226594_medium.mp4",tile:55,duration:7.615},{id:"moonlight-patrol-boat-290456",name:"Mo\
onlit sail",url:"https://cdn.pixabay.com/video/2025/07/10/290456_medium.mp4",tile:56,duration:5.066667},{id:"mountains-l\
ake-water-124774-732319023",name:"Alpine lake",url:"https://cdn.pixabay.com/video/2022/07/20/124774-732319023_medium.mp4",
tile:57,duration:20.01},{id:"nature-night-moonlight-313411",name:"Golden moon",url:"https://cdn.pixabay.com/video/2025/1\
1/02/313411_medium.mp4",tile:58,duration:7.6},{id:"night-old-capital-182475-868496329",name:"Kyoto sunset",url:"https://\
cdn.pixabay.com/video/2023/09/26/182475-868496329_medium.mp4",tile:59,duration:17.321667},{id:"night-view-moon-143565-78\
2758320",name:"City moon",url:"https://cdn.pixabay.com/video/2022/12/19/143565-782758320_medium.mp4",tile:60,duration:12.011667},
{id:"night-view-yamadas-283431",name:"Night sky",url:"https://cdn.pixabay.com/video/2025/06/03/283431_medium.mp4",tile:61,
duration:8.966667},{id:"ocean-night-stars-377557",name:"Ship at night",url:"https://cdn.pixabay.com/video/2026/09/19/377\
557_medium.mp4",tile:62,duration:30.066667},{id:"ocean-scene-cinemagraph-372866",name:"Coastal cabin",url:"https://cdn.p\
ixabay.com/video/2026/08/27/372866_medium.mp4",tile:63,duration:11.3},{id:"ocean-sea-fog-299418",name:"Misty ocean",url:"\
https://cdn.pixabay.com/video/2025/08/24/299418_medium.mp4",tile:64,duration:10.4},{id:"ocean-sea-waves-174033-850286651",
name:"Blue moon coast",url:"https://cdn.pixabay.com/video/2023/07/31/174033-850286651_medium.mp4",tile:65,duration:7.04},
{id:"ocean-sea-waves-232793",name:"Rocky sea",url:"https://cdn.pixabay.com/video/2024/09/23/232793_medium.mp4",tile:66,duration:60.026633},
{id:"purple-cosmic-space-278396",name:"Purple cosmos",url:"https://cdn.pixabay.com/video/2025/05/12/278396_medium.mp4",tile:67,
duration:52.2},{id:"radio-tower-night-211067",name:"Tokyo tower",url:"https://cdn.pixabay.com/video/2024/05/07/211067_me\
dium.mp4",tile:68,duration:31.08105},{id:"rain-cobblestone-puddle-380412",name:"Rainy cobbles",url:"https://cdn.pixabay.\
com/video/2026/10/02/380412_medium.mp4",tile:69,duration:14.166667},{id:"rain-leaves-foliage-227700",name:"Rainy leaves",
url:"https://cdn.pixabay.com/video/2024/08/21/227700_medium.mp4",tile:70,duration:24},{id:"rain-nature-water-289712",name:"\
Rainy path",url:"https://cdn.pixabay.com/video/2025/07/05/289712_medium.mp4",tile:71,duration:16.9},{id:"rain-outside-37\
2862-372862",name:"Storm lounge",url:"https://cdn.pixabay.com/video/2026/08/27/372862_medium.mp4",tile:72,duration:10},{
id:"rain-raining-raindrops-199501-910530342",name:"Rainy puddles",url:"https://cdn.pixabay.com/video/2024/02/06/199501-9\
10530342_medium.mp4",tile:73,duration:11.36},{id:"rain-train-window-363703",name:"Neon train",url:"https://cdn.pixabay.c\
om/video/2026/07/13/363703_medium.mp4",tile:74,duration:10},{id:"rain-umbrella-night-368211",name:"Rainy street",url:"ht\
tps://cdn.pixabay.com/video/2026/08/02/368211_medium.mp4",tile:75,duration:22.8},{id:"sea-coast-japan-197525-905005651",
name:"Quiet coast",url:"https://cdn.pixabay.com/video/2024/01/21/197525-905005651_medium.mp4",tile:76,duration:37.845},{
id:"sea-full-moon-227600",name:"Moonlit surf",url:"https://cdn.pixabay.com/video/2024/08/20/227600_medium.mp4",tile:77,duration:15.041783},
{id:"sea-ocean-waves-269357",name:"Moonlit boat",url:"https://cdn.pixabay.com/video/2025/04/02/269357_medium.mp4",tile:78,
duration:6.366667},{id:"sky-clouds-moon-243117",name:"Violet sky",url:"https://cdn.pixabay.com/video/2024/11/24/243117_m\
edium.mp4",tile:79,duration:10.033333},{id:"snow-cold-scenery-167736-837429014",name:"Snowy shrine",url:"https://cdn.pix\
abay.com/video/2023/06/18/167736-837429014_medium.mp4",tile:80,duration:10.046667},{id:"starry-sky-milky-170888-84443295\
5",name:"Starry pines",url:"https://cdn.pixabay.com/video/2023/07/10/170888-844432955_medium.mp4",tile:81,duration:7.55},
{id:"starry-sky-milky-285663",name:"Starry cottage",url:"https://cdn.pixabay.com/video/2025/06/13/285663_medium.mp4",tile:82,
duration:27.05},{id:"steaming-mug-hot-322244",name:"Warm coffee",url:"https://cdn.pixabay.com/video/2025/12/16/322244_me\
dium.mp4",tile:83,duration:15.3},{id:"table-epoxy-lounge-298514",name:"Alpine table",url:"https://cdn.pixabay.com/video/\
2025/08/19/298514_medium.mp4",tile:84,duration:20.833333},{id:"train-commuting-train-170887-844432947",name:"City commut\
e",url:"https://cdn.pixabay.com/video/2023/07/10/170887-844432947_medium.mp4",tile:85,duration:12.583333},{id:"train-sil\
ence-anime-286593",name:"Sunset train",url:"https://cdn.pixabay.com/video/2025/06/19/286593_medium.mp4",tile:86,duration:10.433333},
{id:"tree-foliage-rain-176026-854526263",name:"Green leaves",url:"https://cdn.pixabay.com/video/2023/08/14/176026-854526\
263_medium.mp4",tile:87,duration:15.266667},{id:"tree-forest-rain-205213-926480936",name:"Rainy woodland",url:"https://c\
dn.pixabay.com/video/2024/03/22/205213-926480936_medium.mp4",tile:88,duration:15.033333},{id:"tree-leaves-rain-172759-84\
7869814",name:"Wet leaves",url:"https://cdn.pixabay.com/video/2023/07/22/172759-847869814_medium.mp4",tile:89,duration:10.133333},
{id:"tree-stars-starry-176198-855206384",name:"Violet branches",url:"https://cdn.pixabay.com/video/2023/08/15/176198-855\
206384_medium.mp4",tile:90,duration:7.566667},{id:"trees-foliage-forest-171443-845465129",name:"Mountain forest",url:"ht\
tps://cdn.pixabay.com/video/2023/07/13/171443-845465129_medium.mp4",tile:91,duration:15.266667},{id:"trees-forest-moon-1\
83969-872226597",name:"Night blossoms",url:"https://cdn.pixabay.com/video/2023/10/07/183969-872226597_medium.mp4",tile:92,
duration:7.658333},{id:"trees-leaves-snow-190667-888333548",name:"Winter branches",url:"https://cdn.pixabay.com/video/20\
23/11/25/190667-888333548_medium.mp4",tile:93,duration:6.228333},{id:"turtle-moon-night-289572",name:"Turtles at night",
url:"https://cdn.pixabay.com/video/2025/07/04/289572_medium.mp4",tile:94,duration:5.875},{id:"wallpaper-pixel-anime-2477\
38",name:"Neon city",url:"https://cdn.pixabay.com/video/2024/12/19/247738_medium.mp4",tile:95,duration:10.2},{id:"wallpa\
per-pixel-anime-247740",name:"Sunset crossing",url:"https://cdn.pixabay.com/video/2024/12/19/247740_medium.mp4",tile:96,
duration:19},{id:"wallpaper-pixel-anime-247741",name:"Kyoto evening",url:"https://cdn.pixabay.com/video/2024/12/19/24774\
1_medium.mp4",tile:97,duration:6},{id:"waterfall-trees-forest-208570",name:"Forest waterfall",url:"https://cdn.pixabay.c\
om/video/2024/04/19/208570_medium.mp4",tile:98,duration:15.533333},{id:"waves-ocean-sea-372255",name:"Moonlit ocean",url:"\
https://cdn.pixabay.com/video/2026/08/23/372255_medium.mp4",tile:99,duration:15.041667},{id:"winter-snow-nature-336603",
name:"Snowy walk",url:"https://cdn.pixabay.com/video/2026/02/25/336603_medium.mp4",tile:100,duration:18.083333}],Sp={"ba\
lcony-dusk-l.jpg":"53-balcony-dusk-l.jpg","balcony-dusk-l.mp4":"32-balcony-dusk-l.mp4","balcony-dusk-p.jpg":"52-balcony-\
dusk-p.jpg","balcony-dusk-p.mp4":"31-balcony-dusk-p.mp4","cozy-window-l.jpg":"51-cozy-window-l.jpg","cozy-window-l.mp4":"\
30-cozy-window-l.mp4","cozy-window-p.jpg":"50-cozy-window-p.jpg","cozy-window-p.mp4":"29-cozy-window-p.mp4","japan-stree\
t-l.jpg":"49-japan-street-l.jpg","japan-street-l.mp4":"34-japan-street-l.mp4","japan-street-p.jpg":"48-japan-street-p.jp\
g","japan-street-p.mp4":"35-japan-street-p.mp4","misty-river-l.jpg":"40-misty-river-l.jpg","misty-river-l.mp4":"22-misty\
-river-l.mp4","misty-river-p.jpg":"39-misty-river-p.jpg","misty-river-p.mp4":"21-misty-river-p.mp4","night-train-l.jpg":"\
47-night-train-l.jpg","night-train-l.mp4":"28-night-train-l.mp4","night-train-p.jpg":"46-night-train-p.jpg","night-train\
-p.mp4":"27-night-train-p.mp4","rainy-window-l.jpg":"41-rainy-window-l.jpg","rainy-window-l.mp4":"20-rainy-window-l.mp4",
"rainy-window-p.jpg":"37-rainy-window-p.jpg","rainy-window-p.mp4":"17-rainy-window-p.mp4","sakura-night-l.jpg":"45-sakur\
a-night-l.jpg","sakura-night-l.mp4":"26-sakura-night-l.mp4","sakura-night-p.jpg":"44-sakura-night-p.jpg","sakura-night-p\
.mp4":"25-sakura-night-p.mp4","shrine-l.jpg":"10-shrine-l.jpg","shrine-l.mp4":"1-shrine-l.mp4","shrine-p.jpg":"36-shrine\
-p.jpg","shrine-p.mp4":"18-shrine-p.mp4","water-garden-l.jpg":"43-water-garden-l.jpg","water-garden-l.mp4":"24-water-gar\
den-l.mp4","water-garden-p.jpg":"42-water-garden-p.jpg","water-garden-p.mp4":"23-water-garden-p.mp4"},kd=(e,t,n)=>`scene\
s/${Sp[`${e}-${t}.${n}`]}`,_p=(e,t)=>kd(e.id,t,"jpg"),Cp=[{id:"mint",name:"Mint",value:"#9fd8c6"},{id:"sky",name:"Sky",value:"\
#9cc7ff"},{id:"rose",name:"Rose",value:"#f2a9c4"},{id:"amber",name:"Amber",value:"#ffcf99"},{id:"violet",name:"Violet",value:"\
#c9b6ff"},{id:"white",name:"White",value:"#ffffff"}],xd=[{id:"sans",name:"Sans",css:"inherit"},{id:"serif",name:"Serif",
css:"Georgia, 'Times New Roman', serif"},{id:"mono",name:"Mono",css:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace"},
{id:"round",name:"Round",css:"'Trebuchet MS', Verdana, sans-serif"}],Np=[{id:"mint",name:"Mint",accent:"#9fd8c6",font:"s\
ans",bg:{kind:"gradient",id:"ink"}},{id:"dusk",name:"Dusk",accent:"#ffcf99",font:"serif",bg:{kind:"gradient",id:"dusk"}},
{id:"moss",name:"Moss",accent:"#7ea87b",font:"round",bg:{kind:"gradient",id:"moss"}},{id:"dawn",name:"Dawn",accent:"#f2a\
9c4",font:"serif",bg:{kind:"gradient",id:"dawn"}}],jp=[{id:"bell",name:"Bell"},{id:"chime",name:"Chime"},{id:"gong",name:"\
Gong"},{id:"beep",name:"Digital"},{id:"wood",name:"Woodblock"},{id:"custom",name:"My sound"}],Sd=[{id:"none",name:"Off"},
{id:"rain",name:"Rain",file:"sounds/rain.m4a"},{id:"storm",name:"Thunderstorm",file:"sounds/thunderstorm.m4a"},{id:"ocea\
n",name:"Ocean waves",file:"sounds/ocean.m4a"},{id:"forest",name:"Forest birds",file:"sounds/forest.m4a"},{id:"fire",name:"\
Fireplace",file:"sounds/fireplace.m4a"},{id:"cafe",name:"Restaurant chatter",file:"sounds/coffee-shop.m4a"},{id:"night",
name:"Field cricket",file:"sounds/crickets.m4a"},{id:"wind",name:"Wind",file:"sounds/wind.m4a"},{id:"stream",name:"Strea\
m",file:"sounds/stream.m4a"},{id:"brown",name:"Brown noise"},{id:"white",name:"White noise"}],_d=[{id:"lofi",name:"Lofi \
Girl",url:"https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"},{id:"deep",name:"Deep Focus",url:"https://open.spo\
tify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"},{id:"piano",name:"Peaceful Piano",url:"https://open.spotify.com/playlist/37i9\
dQZF1DX4sWSpwq3LiO"}],gt={focus:"Focus",short:"Short break",long:"Long break"};let Hn=null;function el(){return Hn||(Hn=
new(window.AudioContext||window.webkitAudioContext)),Hn.state==="suspended"&&Hn.resume(),Hn}function yt(e,t,n){const r=e.
createOscillator(),i=e.createGain();r.type=n.type||"sine",r.frequency.value=n.freq,i.gain.setValueAtTime(1e-4,n.start),i.
gain.exponentialRampToValueAtTime(Math.max(2e-4,n.gain),n.start+.012),i.gain.exponentialRampToValueAtTime(1e-4,n.start+n.
dur),r.connect(i),i.connect(t),r.start(n.start),r.stop(n.start+n.dur+.05)}function Qn(e,t,n){const r=el(),i=r.createGain();
i.gain.value=t,i.connect(r.destination);const l=n?2:1,o=e==="gong"?3.6:e==="bell"?2.4:1.6;for(let a=0;a<l;a++){const s=r.
currentTime+.02+a*(o+.35);if(e==="bell")[[660,.5],[1320,.28],[1760,.14],[2240,.07]].forEach(([c,p])=>yt(r,i,{freq:c,start:s,
dur:2.2,gain:p}));else if(e==="chime")yt(r,i,{freq:783.99,start:s,dur:1.3,gain:.4}),yt(r,i,{freq:1046.5,start:s+.32,dur:1.4,
gain:.34});else if(e==="gong")[[196,.42],[294,.24],[392,.17],[523,.09]].forEach(([c,p])=>yt(r,i,{freq:c,start:s,dur:3.4,
gain:p}));else if(e==="beep")for(let c=0;c<3;c++)yt(r,i,{freq:880,type:"square",start:s+c*.3,dur:.16,gain:.22});else e===
"wood"&&(yt(r,i,{freq:1400,type:"triangle",start:s,dur:.07,gain:.5}),yt(r,i,{freq:1400,type:"triangle",start:s+.22,dur:.07,
gain:.4}))}}function Ep(e){const t=el(),n=t.createGain();n.gain.value=.35*e,n.connect(t.destination),yt(t,n,{freq:1800,start:t.
currentTime,dur:.035,gain:.5})}function Rp(e,t){const n=2*e.sampleRate,r=e.createBuffer(1,n,e.sampleRate),i=r.getChannelData(
0);let l=0;for(let o=0;o<n;o++){const a=Math.random()*2-1;t==="brown"?(l=(l+.02*a)/1.02,i[o]=l*3.2):i[o]=a}return r}const Mp={
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
t","sounds/stream-3.txt","sounds/stream-4.txt","sounds/stream-5.txt"]},qr={};function Pp(e,t){return qr[t]||(qr[t]=Promise.
all((Mp[t]||[]).map(async n=>{const r=await fetch(n);if(!r.ok)throw new Error(`HTTP ${r.status}`);return(await r.text()).
trim()})).then(n=>{if(!n.length)throw new Error("Recording unavailable");const r=atob(n.join(""));return e.decodeAudioData(
Uint8Array.from(r,i=>i.charCodeAt(0)).buffer)}).catch(n=>{throw delete qr[t],n})),qr[t]}function Lp(e,t){if(e==="none")return null;
const n=Sd.find(a=>a.id===e),r=el(),i=r.createGain();if(i.gain.value=t,i.connect(r.destination),n!=null&&n.file){let a=!1,
s=null;return Pp(r,n.file).then(c=>{a||(s=r.createBufferSource(),s.buffer=c,s.loop=!0,s.connect(i),s.start())}).catch(()=>{}),
()=>{a=!0;try{s==null||s.stop()}catch{}try{i.disconnect()}catch{}}}const l=r.createBufferSource();l.buffer=Rp(r,e==="whi\
te"?"white":"brown"),l.loop=!0;let o=l;if(e==="brown"){const a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=
900,o.connect(a),o=a}return o.connect(i),l.start(),()=>{try{l.stop(),i.disconnect()}catch{}}}function Tp(e){return/^https:\/\/.+/i.
test(e.trim())}async function bo(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.blob()}
async function zp(e){var i;const t=e.trim();if(/pin\.it\//i.test(t))throw new Error("short pin link");const n=t.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
let r=t;if(n){const l=await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${n[1]}&base_scheme=https`);
if(!l.ok)throw new Error("pin lookup failed");const o=await l.json();if((o==null?void 0:o.status)!=="success"||!Array.isArray(
o==null?void 0:o.data)||o.data.length===0)throw new Error("pin unavailable");const a=(i=o.data[0])==null?void 0:i.images;
if(!a)throw new Error("pin has no image");const s=a.originals||a["736x"]||a["564x"]||a["236x"];if(!(s!=null&&s.url))throw new Error(
"pin has no image");r=s.url}if(!/^https:\/\//i.test(r))throw new Error("not a link");try{const l=await bo(r);if(l.type.startsWith(
"image/"))return l;throw new Error("not an image")}catch{const l=`https://images.weserv.nl/?url=${encodeURIComponent(r.replace(
/^https?:\/\//,""))}&w=1920`,o=await bo(l);if(!o.type.startsWith("image/"))throw new Error("not an image");return o}}function Cd(e){
const t=_d.find(i=>i.id===e),r=(t?t.url:e).trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
return r?`https://open.spotify.com/embed/${r[1].toLowerCase()}/${r[2]}?theme=0`:null}const Ut=({d:e,vb:t=24})=>u.jsx("sv\
g",{width:"18",height:"18",viewBox:`0 0 ${t} ${t}`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"ro\
und",strokeLinejoin:"round","aria-hidden":"true",children:e.split("|").map((n,r)=>u.jsx("path",{d:n},r))}),bp="M4 9V4h5|\
M20 9V4h-5|M4 15v5h5|M20 15v5h-5",Ip="M5 12h14",Op="M4 6h16|M4 12h16|M4 18h10",Fp="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0\
 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2",
Nd="M6 6l12 12|M18 6L6 18",Dp="M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5";function ln(e){
const t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(
2,"0")}`}function Kn(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).
padStart(2,"0")}`}function ei({label:e,value:t,min:n,max:r,onChange:i,unit:l}){const o=a=>{const s=parseInt(a,10);Number.
isFinite(s)&&i(Math.min(r,Math.max(n,s)))};return u.jsxs("div",{className:"ft-field",children:[u.jsx("span",{className:"\
ft-field-label",children:e}),u.jsxs("span",{className:"ft-stepper",children:[u.jsx("button",{type:"button","aria-label":`\
Decrease ${e}`,onClick:()=>i(Math.max(n,t-1)),children:"-"}),u.jsx("input",{className:"ft-stepper-input",type:"number",inputMode:"\
numeric","aria-label":`${e} value`,min:n,max:r,value:t,onChange:a=>o(a.target.value)}),l?u.jsx("span",{className:"ft-ste\
pper-unit",children:l}):null,u.jsx("button",{type:"button","aria-label":`Increase ${e}`,onClick:()=>i(Math.min(r,t+1)),children:"\
+"})]})]})}function Ze({label:e,hint:t,checked:n,onChange:r}){return u.jsxs("button",{type:"button",role:"switch","aria-\
checked":n,className:`ft-toggle ${n?"is-on":""}`,onClick:()=>r(!n),children:[u.jsxs("span",{className:"ft-toggle-text",children:[
u.jsx("span",{className:"ft-field-label",children:e}),t?u.jsx("span",{className:"ft-field-hint",children:t}):null]}),u.jsx(
"span",{className:"ft-switch",children:u.jsx("span",{className:"ft-knob"})})]})}const Ap=bt.memo(function({scene:t,paused:n,
animate:r}){const i=S.useRef(null),[l,o]=S.useState(!1),a=yd("rain"),s=S.useRef({paused:n,animate:r});s.current={paused:n,
animate:r};const[c,p]=S.useState(()=>window.matchMedia("(orientation: portrait)").matches);S.useEffect(()=>{const w=window.
matchMedia("(orientation: portrait)"),v=()=>p(w.matches);return w.addEventListener("change",v),()=>w.removeEventListener(
"change",v)},[]);const y=c?"p":"l",g=t.url?c?t.url:t.url.replace("_medium.mp4","_large.mp4"):kd(t.id,y,"mp4");return S.useEffect(
()=>{o(!1);const w=Array.from(i.current.querySelectorAll("video"));let v=0,k=!1,b=!1,f=0,d=!1;const m=j=>j.play().catch(
()=>{}),x=()=>{s.current.paused||!s.current.animate||document.hidden?w.forEach(j=>j.pause()):(m(w[v]),k&&m(w[1-v]))},E=()=>{
if(b)return;const j=w[v],R=w[1-v];if(!d&&j.readyState>=2&&(d=!0,x()),!(!s.current.paused&&s.current.animate&&!document.hidden))
w.forEach(O=>{O.paused||O.pause()});else if(d){j.paused&&!j.ended&&m(j);const O=t.duration||j.duration,T=Math.min(1.5,O/
4);if(!k&&Number.isFinite(O)&&j.currentTime>=O-T&&R.readyState>=2&&(k=!0,R.currentTime=0,m(R)),k){R.paused&&m(R);const U=Math.
min(1,R.currentTime/T);j.style.opacity=String(1-U),R.style.opacity="1",U>=1&&(j.pause(),j.currentTime=0,j.style.zIndex="\
0",j.style.opacity="1",R.style.zIndex="1",v=1-v,k=!1,i.current.dataset.wraps=String(Number(i.current.dataset.wraps||0)+1))}}
f=requestAnimationFrame(E)};return w[0].style.zIndex="1",w[1].style.zIndex="0",f=requestAnimationFrame(E),document.addEventListener(
"visibilitychange",x),window.addEventListener("pointerdown",x),()=>{b=!0,cancelAnimationFrame(f),w.forEach(j=>j.pause()),
document.removeEventListener("visibilitychange",x),window.removeEventListener("pointerdown",x)}},[g]),u.jsxs("div",{ref:i,
className:"ft-scene-stage",style:{backgroundImage:l&&a?`url(${a})`:"linear-gradient(135deg,#182226,#090d13)",backgroundSize:"\
cover",backgroundPosition:"center"},children:[l&&u.jsx("span",{className:"ft-stream-status",children:"This scene couldn'\
t load. Choose another background in Settings."}),[0,1].map(w=>u.jsx("video",{onError:()=>o(!0),style:{objectFit:t.preview===
"longer"?"contain":c?"cover":"contain"},className:"ft-bg ft-bgvideo",src:g,muted:!0,playsInline:!0,disablePictureInPicture:!0,
disableRemotePlayback:!0,preload:"auto","aria-hidden":"true"},w))]},g)}),$p=bt.memo(function({kind:t,id:n,scrim:r,builtinSrc:i,
linkBg:l,uploadBg:o,paused:a,animate:s,customFit:c}){let p={};t==="builtin"&&i?p={backgroundImage:`url(${i})`}:t==="grad\
ient"?p={backgroundImage:(mi.find(v=>v.id===n)||mi[0]).css}:t==="link"&&(l==null?void 0:l.kind)==="image"?p={backgroundImage:`\
url(${l.url})`}:t==="upload"&&(o==null?void 0:o.kind)==="image"?p={backgroundImage:`url(${o.url})`}:(t==="link"||t==="up\
load"||t==="builtin")&&(p={backgroundImage:mi[0].css}),(t==="link"||t==="upload")&&p.backgroundImage&&(p={...p,backgroundSize:c,
backgroundRepeat:"no-repeat",backgroundColor:"#101418"});const y=vd.some(v=>v.id===n)?n:"aurora",g=t==="scene"?[...wd,...To,
...zo].find(v=>v.id===n):void 0,w=t==="link"&&(l==null?void 0:l.kind)==="video"?l.url:t==="upload"&&(o==null?void 0:o.kind)===
"video"?o.url:null;return u.jsxs(u.Fragment,{children:[g?u.jsx(Ap,{scene:g,paused:!!a,animate:s}):w?u.jsx(Up,{src:w,paused:!!a,
animate:s,fit:c}):t==="animated"?u.jsxs("div",{className:`ft-anim ft-anim-${y}`,"aria-hidden":"true",children:[u.jsx("i",
{}),u.jsx("i",{}),u.jsx("i",{})]}):u.jsx("div",{className:"ft-bg",style:p}),u.jsx("div",{className:"ft-scrim",style:{opacity:r}})]})}),
Up=bt.memo(function({src:t,paused:n,animate:r,fit:i}){const l=S.useRef(null);return S.useEffect(()=>{const o=l.current;if(!o)
return;const a=()=>{n||!r||document.hidden?o.pause():o.play().catch(()=>{})};a();const s=()=>{!n&&r&&!document.hidden&&o.
play().catch(()=>{})};return document.addEventListener("visibilitychange",a),window.addEventListener("pointerdown",s),()=>{
document.removeEventListener("visibilitychange",a),window.removeEventListener("pointerdown",s)}},[n,r,t]),r?u.jsx("video",
{ref:l,className:"ft-bg ft-bgvideo",style:{objectFit:i,backgroundColor:"#101418"},src:t,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,
preload:"auto","aria-hidden":"true"}):null}),Dl=bt.memo(function({scene:t,active:n,onPick:r}){const i=yd(t.preview||"cat\
alog"),l=t.preview==="curated"?3:8,o=t.preview==="curated"?3:13;return u.jsxs("button",{type:"button",className:`ft-bgsw\
atch ft-bgswatch-named ${n?"is-active":""}`,"aria-label":`${t.name} animated scene`,onClick:r,children:[t.tile!=null?u.jsx(
"span",{className:"ft-bgswatch-img",style:{backgroundImage:i?`url(${i})`:void 0,backgroundSize:`${l*100}% ${o*100}%`,backgroundPosition:`${t.
tile%l*100/(l-1)}% ${Math.floor(t.tile/l)*100/(o-1)}%`}}):u.jsx("img",{className:"ft-bgswatch-img",src:_p(t,"p"),alt:"",
loading:"lazy",decoding:"async"}),u.jsx("span",{className:"ft-bgswatch-name",children:t.name})]})}),Vp=bt.memo(function({
id:t,name:n,active:r,onPick:i}){const[l,o]=S.useState(Ol[t]||null);return S.useEffect(()=>{let a=!0;return!Ol[t]&&nu[t]&&
nu[t]().then(s=>{Ol[t]=s.default,a&&o(s.default)}).catch(()=>{}),()=>{a=!1}},[t]),u.jsx("button",{type:"button",className:`\
ft-bgswatch ${r?"is-active":""}`,style:l?{backgroundImage:`url(${l})`}:void 0,"aria-label":n,onClick:i})}),Bp=bt.memo(function({
chip:t,panel:n,fullscreenSupported:r,onFullscreen:i,onTasks:l,onSettings:o,onMinimize:a,onPopout:s}){return u.jsxs("head\
er",{className:"ft-topbar",children:[u.jsx("span",{className:"ft-brand",children:"Study focus"}),t?u.jsx("span",{className:"\
ft-chip",title:"Today's completed focus time",children:t}):null,u.jsxs("span",{className:"ft-topbar-actions",children:[r?
u.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Fullscreen",onClick:i,children:u.jsx(Ut,{d:bp})}):null,
u.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"Open timer in its own window",title:"Open timer in it\
s own window",onClick:s,children:u.jsx(Ut,{d:Dp})}),u.jsx("button",{type:"button",className:"ft-iconbtn","aria-label":"M\
inimize to a small timer",title:"Minimize to a small timer",onClick:a,children:u.jsx(Ut,{d:Ip})}),u.jsx("button",{type:"\
button",className:`ft-iconbtn ${n==="tasks"?"is-active":""}`,"aria-label":"Tasks",onClick:l,children:u.jsx(Ut,{d:Op})}),
u.jsx("button",{type:"button",className:`ft-iconbtn ${n==="settings"?"is-active":""}`,"aria-label":"Settings",onClick:o,
children:u.jsx(Ut,{d:Fp})})]})]})}),Wp=bt.memo(function({tasksState:t,setTasksState:n,week:r,ready:i,savedMessage:l,onClose:o}){
const[a,s]=S.useState(""),[c,p]=S.useState(1),y=t.tasks,g=Math.max(1,...r.map(v=>v.minutes)),w=()=>{const v=a.trim();if(!v)
return;const k={id:`t${Date.now()}`,title:v,est:c,done:0,completed:!1};n(b=>({tasks:[...b.tasks,k],activeId:b.activeId||
k.id})),s(""),p(1)};return u.jsxs("aside",{className:"ft-sheet","aria-label":"Tasks",children:[u.jsxs("div",{className:"\
ft-sheet-head",children:[u.jsx("h2",{children:"Tasks"}),u.jsx("button",{type:"button",className:"ft-sheet-close","aria-l\
abel":"Close tasks",onClick:o,children:u.jsx(Ut,{d:Nd})})]}),u.jsxs("div",{className:"ft-addtask",children:[u.jsx("input",
{value:a,placeholder:"What are you studying?",onChange:v=>s(v.target.value),onKeyDown:v=>{v.key==="Enter"&&w()},maxLength:120}),
u.jsxs("span",{className:"ft-stepper is-small",children:[u.jsx("button",{type:"button","aria-label":"Fewer pomodoros",onClick:()=>p(
Math.max(1,c-1)),children:"-"}),u.jsxs("span",{className:"ft-stepper-value",children:[c,u.jsx("em",{children:"est"})]}),
u.jsx("button",{type:"button","aria-label":"More pomodoros",onClick:()=>p(Math.min(20,c+1)),children:"+"})]}),u.jsx("but\
ton",{type:"button",className:"ft-primary is-compact",onClick:w,disabled:!i,children:"Add"})]}),y.length===0?u.jsx("p",{
className:"ft-field-hint",children:"No tasks yet. Add one to track pomodoros against it, or just run the timer."}):null,
u.jsx("ul",{className:"ft-tasklist",children:y.map(v=>u.jsxs("li",{className:`${v.id===t.activeId?"is-active":""} ${v.completed?
"is-done":""}`,children:[u.jsx("button",{type:"button",className:"ft-taskcheck","aria-label":v.completed?"Mark not done":
"Mark done",onClick:()=>n(k=>({...k,tasks:k.tasks.map(b=>b.id===v.id?{...b,completed:!b.completed}:b)})),children:v.completed?
"✓":""}),u.jsx("button",{type:"button",className:"ft-taskname",onClick:()=>n(k=>({...k,activeId:v.id})),children:v.title}),
u.jsxs("span",{className:"ft-taskcount",children:[v.done,"/",v.est]}),u.jsx("button",{type:"button",className:"ft-taskde\
l","aria-label":`Delete ${v.title}`,onClick:()=>n(k=>({tasks:k.tasks.filter(b=>b.id!==v.id),activeId:k.activeId===v.id?null:
k.activeId})),children:"×"})]},v.id))}),y.some(v=>v.completed)?u.jsx("button",{type:"button",className:"ft-ghost is-com\
pact",onClick:()=>n(v=>({...v,tasks:v.tasks.filter(k=>!k.completed)})),children:"Clear completed"}):null,u.jsxs("div",{className:"\
ft-week",children:[u.jsx("h3",{children:"This week"}),u.jsx("div",{className:"ft-weekbars",role:"img","aria-label":`Focu\
s minutes by day: ${r.map(v=>`${v.label} ${v.minutes}`).join(", ")}`,children:r.map((v,k)=>u.jsxs("span",{className:"ft-\
weekcol",children:[u.jsx("span",{className:"ft-weekbar",style:{height:`${Math.round(v.minutes/g*64)}px`}}),u.jsx("span",
{className:"ft-weekday",children:v.label})]},k))})]}),u.jsx("p",{className:"ft-field-hint",children:l})]})});function Hp(){
const[e,t]=S.useState(null),[,n]=S.useState(0),r=S.useRef(null);S.useEffect(()=>{const s=new BroadcastChannel("sft-sync");
r.current=s,s.onmessage=p=>{var y;((y=p.data)==null?void 0:y.t)==="state"&&t(p.data)};const c=window.setInterval(()=>n(p=>p+
1),500);return()=>{window.clearInterval(c),s.close()}},[]);const i=s=>{var c;return(c=r.current)==null?void 0:c.postMessage(
{t:"cmd",cmd:s})};let l=e?e.remaining:0;e!=null&&e.running&&(l=Math.max(0,e.remaining-(Date.now()-e.at)));const o=!e||Date.
now()-e.at>4e3,a=e&&e.dur>0?Math.round((1-l/e.dur)*100):0;return u.jsxs("div",{className:"ft-popout",style:{"--ft-accent":(e==
null?void 0:e.accent)||"#9fd8c6"},children:[u.jsx("div",{className:"ft-popout-phase",children:e?gt[e.phase]:"Study focus"}),
u.jsx("div",{className:"ft-popout-time",children:e?ln(l):"--:--"}),u.jsx("div",{className:"ft-popout-bar","aria-hidden":"\
true",children:u.jsx("span",{style:{width:`${a}%`}})}),u.jsxs("div",{className:"ft-popout-btns",children:[u.jsx("button",
{type:"button",className:"ft-primary is-compact",onClick:()=>i("toggle"),children:e!=null&&e.running?"Pause":"Start"}),u.
jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>i("reset"),children:"Reset"}),u.jsx("button",{type:"\
button",className:"ft-ghost is-compact",onClick:()=>i("skip"),children:"Skip"})]}),o?u.jsx("p",{className:"ft-popout-not\
e",children:"Open the study timer in another tab to control it from here."}):null]})}const Qp=bt.memo(function({settings:t,
patch:n,bgStatus:r,soundStatus:i,lastBgSrcRef:l,lastSndSrcRef:o,resolveLinkBg:a,resolveCustomSound:s,uploadBg:c,uploadSound:p,
previewAlarm:y,requestNotifications:g,notificationsSupported:w,wakeLockSupported:v,onResetSettings:k,savedMessage:b,onClose:f}){
const[d,m]=S.useState(""),[x,E]=S.useState(""),[j,R]=S.useState(""),[L,O]=S.useState(""),T=t.background,U=()=>{const h=d.
trim();h&&a(h).then(re=>{re&&(l.current=h,n({background:{kind:"link",source:h}}))})},ke=()=>{const h=x.trim();Tp(h)&&s(h).
then(re=>{var mt;re&&(o.current=h,n({alarmSound:"custom",customAlarm:{source:h,name:((mt=h.split("/").pop())==null?void 0:
mt.split("?")[0])||"Custom sound"}}))})},Ge=()=>{const h=j.trim();if(h){if(!Cd(h)){O("That is not a Spotify link. Copy a\
 link that starts with https://open.spotify.com/ from the Spotify app (Share - Copy link). Your current player is unchan\
ged.");return}O(""),n({spotify:h,spotifyOpen:!0})}};return u.jsxs("aside",{className:"ft-sheet","aria-label":"Settings",
children:[u.jsxs("div",{className:"ft-sheet-head",children:[u.jsx("h2",{children:"Settings"}),u.jsx("button",{type:"butt\
on",className:"ft-sheet-close","aria-label":"Close settings",onClick:f,children:u.jsx(Ut,{d:Nd})})]}),u.jsxs("section",{
children:[u.jsx("h3",{children:"Appearance"}),u.jsx("div",{className:"ft-chips",children:Np.map(h=>u.jsxs("button",{type:"\
button",className:"ft-chipbtn",onClick:()=>n({accent:h.accent,font:h.font,background:{kind:h.bg.kind,id:h.bg.id}}),children:[
h.name," theme"]},h.id))}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-lab\
el",children:"Accent color"}),u.jsxs("span",{className:"ft-inrow",children:[Cp.map(h=>u.jsx("button",{type:"button",className:`\
ft-colorswatch ${t.accent.toLowerCase()===h.value?"is-active":""}`,style:{background:h.value},"aria-label":`${h.name} ac\
cent`,onClick:()=>n({accent:h.value})},h.id)),u.jsxs("label",{className:"ft-colorcustom",children:[u.jsx("input",{type:"\
color",value:/^#[0-9a-f]{6}$/i.test(t.accent)?t.accent:"#9fd8c6","aria-label":"Custom accent color",onChange:h=>n({accent:h.
target.value})}),u.jsx("span",{children:"Custom"})]})]})]}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx(
"span",{className:"ft-field-label",children:"Font"}),u.jsx("div",{className:"ft-chips",children:xd.map(h=>u.jsx("button",
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
ic (Spotify player)"}),u.jsx("div",{className:"ft-chips",children:_d.map(h=>u.jsx("button",{type:"button",className:`ft-\
chipbtn ${t.spotify===h.id?"is-active":""}`,onClick:()=>{O(""),n({spotify:h.id,spotifyOpen:!0})},children:h.name},h.id))}),
u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"Any Spotify l\
ink"}),u.jsx("span",{className:"ft-field-hint",children:"Paste an open.spotify.com playlist, album, track or podcast lin\
k (in Spotify: Share - Copy link). Music plays in Spotify's official player at the bottom of the page; this is not accou\
nt sync. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-second preview\
s when signed out; podcast episodes usually play in full."}),u.jsxs("span",{className:"ft-inrow",children:[u.jsx("input",
{className:"ft-textinput",value:j,placeholder:"https://open.spotify.com/playlist/…",onChange:h=>R(h.target.value),inputMode:"\
url"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:Ge,children:"Use link"})]}),t.spotify?u.jsxs(
"span",{className:"ft-inrow",children:[u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:()=>n({spotifyOpen:!t.
spotifyOpen}),children:t.spotifyOpen?"Minimize player":"Show player"}),u.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:()=>n({spotify:null,spotifyOpen:!1}),children:"Remove player"})]}):null,L?u.jsx("span",{className:"\
ft-field-hint",children:L}):null]})]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Timer"}),u.jsx(ei,{label:"Focus",
value:t.focusMin,min:1,max:180,unit:"min",onChange:h=>n({focusMin:h})}),u.jsx(ei,{label:"Short break",value:t.shortMin,min:1,
max:60,unit:"min",onChange:h=>n({shortMin:h})}),u.jsx(ei,{label:"Long break",value:t.longMin,min:1,max:90,unit:"min",onChange:h=>n(
{longMin:h})}),u.jsx(ei,{label:"Long break every",value:t.longEvery,min:1,max:12,unit:"sessions",onChange:h=>n({longEvery:h})}),
u.jsx(Ze,{label:"Auto-start breaks",checked:t.autoBreaks,onChange:h=>n({autoBreaks:h})}),u.jsx(Ze,{label:"Auto-start foc\
us",checked:t.autoFocus,onChange:h=>n({autoFocus:h})}),w?u.jsx(Ze,{label:"Browser notifications",hint:"Alerts when a ses\
sion ends in another tab.",checked:t.notifications,onChange:g}):null,v?u.jsx(Ze,{label:"Keep screen awake",checked:t.keepAwake,
onChange:h=>n({keepAwake:h})}):null]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Alarm"}),u.jsx("div",{className:"\
ft-chips",children:jp.map(h=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.alarmSound===h.id?"is-active":""}`,
onClick:()=>{n({alarmSound:h.id}),y(h.id)},children:h.name},h.id))}),u.jsxs("div",{className:"ft-field",children:[u.jsx(
"span",{className:"ft-field-label",children:"Volume"}),u.jsx("input",{type:"range",min:0,max:1,step:.05,value:t.alarmVolume,
"aria-label":"Alarm volume",onChange:h=>n({alarmVolume:parseFloat(h.target.value)})})]}),u.jsx(Ze,{label:"Ring twice",checked:t.
alarmRepeat,onChange:h=>n({alarmRepeat:h})}),u.jsx(Ze,{label:"Ticking while running",checked:t.tick,onChange:h=>n({tick:h})}),
u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"My sound from\
 a link"}),u.jsx("span",{className:"ft-field-hint",children:"Paste a direct audio link (mp3, wav, ogg). Links work when \
the file's host allows cross-site loading; many do not. Uploading a file always works until the tab reloads; a saved lin\
k reloads each visit."}),u.jsxs("span",{className:"ft-inrow",children:[u.jsx("input",{className:"ft-textinput",value:x,placeholder:"\
https://…/sound.mp3",onChange:h=>E(h.target.value),inputMode:"url"}),u.jsx("button",{type:"button",className:"ft-ghost\
 is-compact",onClick:ke,children:"Use link"})]}),u.jsxs("span",{className:"ft-inrow",children:[u.jsxs("label",{className:"\
ft-ghost is-compact ft-filebtn",children:["Upload audio",u.jsx("input",{type:"file",accept:"audio/*","aria-label":"Uploa\
d alarm sound file",className:"ft-fileinput",onChange:h=>{var re;return p((re=h.target.files)==null?void 0:re[0])}})]}),
t.customAlarm?u.jsxs("span",{className:"ft-field-hint",children:["Current: ",t.customAlarm.name]}):null]}),i?u.jsx("span",
{className:"ft-field-hint",children:i}):null]})]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Ambient sound"}),u.
jsx("div",{className:"ft-chips",children:Sd.map(h=>u.jsx("button",{type:"button",className:`ft-chipbtn ${t.ambient===h.id?
"is-active":""}`,onClick:()=>n({ambient:h.id}),children:h.name},h.id))}),t.ambient!=="none"?u.jsxs("div",{className:"ft-\
field",children:[u.jsx("span",{className:"ft-field-label",children:"Ambient volume"}),u.jsx("input",{type:"range",min:0,
max:1,step:.05,value:t.ambientVolume,"aria-label":"Ambient volume",onChange:h=>n({ambientVolume:parseFloat(h.target.value)})})]}):
null]}),u.jsxs("section",{children:[u.jsx("h3",{children:"Background"}),u.jsx("h4",{className:"ft-subhead",children:"Ani\
mated scenes"}),u.jsx("div",{className:"ft-bggrid",children:wd.map(h=>u.jsx(Dl,{scene:h,active:T.kind==="scene"&&T.id===
h.id,onPick:()=>n({background:{kind:"scene",id:h.id}})},h.id))}),u.jsxs("details",{className:"ft-extra-scenes",children:[
u.jsxs("summary",{children:["Longer study scenes (",To.length,")"]}),u.jsx("p",{className:"ft-field-hint",children:"20-7\
7 seconds of source footage per scene, with a soft end-to-start dissolve. Wide scenes keep their whole composition on ph\
ones with plain dark space."}),u.jsx("div",{className:"ft-bggrid",children:To.map(h=>u.jsx(Dl,{scene:h,active:T.kind==="\
scene"&&T.id===h.id,onPick:()=>n({background:{kind:"scene",id:h.id}})},h.id))})]}),u.jsxs("details",{className:"ft-extra\
-scenes",children:[u.jsxs("summary",{children:["Earlier scenes (",zo.length,")"]}),u.jsx("p",{className:"ft-field-hint",
children:"Videos stream only when chosen. If a source is unavailable, choose another scene. Animation and pop-out suppor\
t depend on your browser."}),u.jsx("div",{className:"ft-bggrid",children:zo.map(h=>u.jsx(Dl,{scene:h,active:T.kind==="sc\
ene"&&T.id===h.id,onPick:()=>n({background:{kind:"scene",id:h.id}})},h.id))})]}),u.jsx("div",{style:{display:"none"}}),u.
jsx(Ze,{label:"Animate backgrounds",hint:"Motion starts by itself. Turn off to pause motion and save battery.",checked:t.
bgAnimate!==!1,onChange:h=>n({bgAnimate:h})}),u.jsx("h4",{className:"ft-subhead",children:"Animated"}),u.jsx("div",{className:"\
ft-bggrid",children:vd.map(h=>u.jsx("button",{type:"button",className:`ft-bgswatch ft-animsw ft-animsw-${h.id} ${T.kind===
"animated"&&T.id===h.id?"is-active":""}`,"aria-label":`${h.name} animated background`,onClick:()=>n({background:{kind:"a\
nimated",id:h.id}})},h.id))}),u.jsx("h4",{className:"ft-subhead",children:"Photos"}),u.jsx("div",{className:"ft-bggrid",
children:xp.map(h=>u.jsx(Vp,{id:h.id,name:h.name,active:T.kind==="builtin"&&T.id===h.id,onPick:()=>n({background:{kind:"\
builtin",id:h.id}})},h.id))}),u.jsx("h4",{className:"ft-subhead",children:"Colors"}),u.jsx("div",{className:"ft-bggrid",
children:mi.map(h=>u.jsx("button",{type:"button",className:`ft-bgswatch ${T.kind==="gradient"&&T.id===h.id?"is-active":""}`,
style:{backgroundImage:h.css},"aria-label":h.name,onClick:()=>n({background:{kind:"gradient",id:h.id}})},h.id))}),u.jsxs(
"div",{className:"ft-field is-stacked",children:[u.jsx("span",{className:"ft-field-label",children:"Pinterest, image or \
video link"}),u.jsx("span",{className:"ft-field-hint",children:"Paste a full public Pinterest pin link (pinterest.com/pi\
n/…), a direct image link (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the scr\
een, cropped to match its own shape, never stretched. Saved links reload each visit. When a direct image load is blocked\
, the link you paste is fetched through a public image relay (weserv.nl), so never use private boards or private URLs."}),
u.jsxs("span",{className:"ft-inrow",children:[u.jsx("input",{className:"ft-textinput",value:d,placeholder:"https://www.p\
interest.com/pin/…",onChange:h=>m(h.target.value),inputMode:"url"}),u.jsx("button",{type:"button",className:"ft-ghost \
is-compact",onClick:U,children:"Use link"})]}),u.jsxs("span",{className:"ft-inrow",children:[u.jsxs("label",{className:"\
ft-ghost is-compact ft-filebtn",children:["Upload image or video",u.jsx("input",{type:"file",accept:"image/*,video/*","a\
ria-label":"Upload background image or video file",className:"ft-fileinput",onChange:h=>{var re;return c((re=h.target.files)==
null?void 0:re[0])}})]}),u.jsx("span",{className:"ft-field-hint",children:"Lasts until the tab reloads."})]}),r?u.jsx("s\
pan",{className:"ft-field-hint",children:r}):null]}),u.jsxs("div",{className:"ft-field is-stacked",children:[u.jsx("span",
{className:"ft-field-label",children:"Imported image or video fit"}),u.jsxs("span",{className:"ft-inrow",children:[u.jsx(
"button",{type:"button",className:`ft-chipbtn ${t.customFit!=="contain"?"is-active":""}`,onClick:()=>n({customFit:"cover"}),
children:"Crop to fill"}),u.jsx("button",{type:"button",className:`ft-chipbtn ${t.customFit==="contain"?"is-active":""}`,
onClick:()=>n({customFit:"contain"}),children:"Show whole image"})]}),u.jsx("span",{className:"ft-field-hint",children:"\
Crop fills the screen. Show whole image preserves the full composition with plain dark space where needed. No blur-fill \
or stretching."})]}),u.jsxs("div",{className:"ft-field",children:[u.jsx("span",{className:"ft-field-label",children:"Dar\
ken background"}),u.jsx("input",{type:"range",min:.15,max:.85,step:.05,value:t.scrim,"aria-label":"Background darkness",
onChange:h=>n({scrim:parseFloat(h.target.value)})})]})]}),u.jsxs("div",{className:"ft-field",children:[u.jsx("span",{className:"\
ft-field-label",children:"Start over"}),u.jsx("button",{type:"button",className:"ft-ghost is-compact",onClick:k,children:"\
Reset settings"})]}),u.jsxs("p",{className:"ft-field-hint",children:["Your settings, tasks and stats stay in this browse\
r. Link backgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay when a direct loa\
d is blocked; Spotify playback happens inside Spotify's official player; selected catalog videos stream from Pixabay's C\
DN. ",b]})]})});function Kp(){return typeof window<"u"&&/[?&]popout=1/.test(window.location.search)?u.jsx(Hp,{}):u.jsx(Gp,
{})}function Gp(){var Wa;const[e,t,n]=Jr("ft-settings.v2",Fl),[r,i,l]=Jr("ft-tasks.v1",{tasks:[],activeId:null}),[o,a,s]=Jr(
"ft-stats.v1",{days:{}}),[c,p,y]=Jr("ft-session.v1",null),g=S.useMemo(()=>({focus:e.focusMin*6e4,short:e.shortMin*6e4,long:e.
longMin*6e4}),[e.focusMin,e.shortMin,e.longMin]),[w,v]=S.useState("focus"),[k,b]=S.useState(!1),[f,d]=S.useState(g.focus),
[m,x]=S.useState(0),[E,j]=S.useState("none"),[R,L]=S.useState(!1),O=S.useRef(0),T=S.useRef(!1);T.current=k;const U=S.useRef(
w);U.current=w;const ke=S.useRef(f);ke.current=f;const Ge=S.useRef(e.accent);Ge.current=e.accent;const[h,re]=S.useState(
null),[mt,bn]=S.useState(null),[M,I]=S.useState(null),[F,V]=S.useState(""),[Z,Dt]=S.useState(null),[nt,ze]=S.useState(""),
J=S.useRef(null),be=S.useRef(null),Mr=S.useRef(null),Pa=S.useCallback(async _=>{V("Loading background…");try{const C=_.
trim();if(/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(C)&&!/pin(it)?\./i.test(C))return re(D=>(D&&D.url.startsWith("blob:")&&URL.
revokeObjectURL(D.url),{url:C,kind:"video"})),V("Background applied."),!0;const z=await zp(_);return z.type.startsWith("\
video/")?re(D=>(D&&D.url.startsWith("blob:")&&URL.revokeObjectURL(D.url),{url:URL.createObjectURL(z),kind:"video"})):re(
D=>(D&&D.url.startsWith("blob:")&&URL.revokeObjectURL(D.url),{url:URL.createObjectURL(z),kind:"image"})),V("Background a\
pplied."),!0}catch(C){const z=C instanceof Error&&C.message==="short pin link"?"Short pin.it links cannot be resolved he\
re. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous background is unchanged.":"Cou\
ld not load that pin or link. Private or deleted pins cannot be read. Use a public pin link, a direct image link, or upl\
oad the image below. Your previous background is unchanged.";return V(z),!1}},[]),La=S.useCallback(async _=>{ze("Loading\
 sound…");try{const C=await bo(_);if(!/^audio\//.test(C.type)&&!/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.test(_))throw new Error(
"not audio");return Dt(z=>(z&&URL.revokeObjectURL(z),URL.createObjectURL(C))),ze("Sound saved. It will ring when a sessi\
on ends."),!0}catch{return ze("That link blocks cross-site loading. Download the sound to your device and upload it inst\
ead. Your previous sound is unchanged."),!1}},[]),tl=S.useRef(""),nl=S.useRef("");S.useEffect(()=>{n.ready&&e.background.
kind==="link"&&e.background.source&&e.background.source!==tl.current&&(tl.current=e.background.source,Pa(e.background.source))},
[n.ready,e.background]),S.useEffect(()=>{var C;if(!n.ready)return;const _=((C=e.customAlarm)==null?void 0:C.source)||"";
e.alarmSound==="custom"&&_&&_!==nl.current&&(nl.current=_,La(_))},[n.ready,e.alarmSound,e.customAlarm]);const Ta=S.useRef(
!1);S.useEffect(()=>{var _;!n.ready||Ta.current||(Ta.current=!0,e.background.kind==="upload"&&(xe({background:{kind:"gra\
dient",id:"dusk"}}),V("Your uploaded image resets when the tab reloads. Upload it again, or save a link instead.")),!((_=
e.customAlarm)!=null&&_.source)&&e.alarmSound==="custom"&&(xe({alarmSound:"bell"}),ze("Your uploaded sound resets when t\
he tab reloads. Upload it again, or save a link instead.")))},[n.ready]),S.useEffect(()=>{n.ready&&(!e.accent||!e.font||
!e.clockStyle||!e.clockSize||typeof e.showDots!="boolean"||typeof e.spotifyOpen!="boolean"||e.spotify===void 0||typeof e.
bgAnimate!="boolean")&&t(_=>({...Fl,..._}))},[n.ready]);const pt=e.background;S.useEffect(()=>{let _=!0;if(n.ready){if(pt.
kind==="builtin"){const C=pt.id&&tu[pt.id]?pt.id:"rain";Il[C]?I(Il[C]):(I(null),tu[C]().then(z=>{Il[C]=z.default,_&&I(z.
default)}).catch(()=>{}))}return()=>{_=!1}}},[n.ready,pt.kind,pt.id]);const za=S.useRef(!1),Ye=S.useCallback(_=>{y.ready&&
p({phase:_.phase,running:_.running,endAt:_.endAt||0,remainingMs:_.remainingMs,cycleCount:_.cycleCount})},[y.ready]);S.useEffect(
()=>{if(!y.ready||za.current||(za.current=!0,!c))return;const _=c.phase==="short"||c.phase==="long"?c.phase:"focus";if(v(
_),x(c.cycleCount||0),c.running&&c.endAt>Date.now()+500)O.current=c.endAt,d(c.endAt-Date.now()),b(!0);else if(c.running)
d(he.current[_]),b(!1);else{const C=typeof c.remainingMs=="number"&&c.remainingMs>0?Math.min(c.remainingMs,he.current[_]):
he.current[_];d(C),b(!1)}},[y.ready]);const en=S.useRef({}),he=S.useRef(g);he.current=g;const ba=S.useCallback(_=>{const C=U.
current;let z="focus",D=m;if(C==="focus"){if(D=_?m:m+1,x(D),z=D%Math.max(1,e.longEvery)===0&&D>0?"long":"short",!_){const zr=Kn(),
Ha=o.days[zr]||{focusSec:0,sessions:0};a({days:{...o.days,[zr]:{focusSec:Ha.focusSec+Math.round(he.current.focus/1e3),sessions:Ha.
sessions+1}}}),r.activeId&&i(al=>({...al,tasks:al.tasks.map(br=>br.id===al.activeId?{...br,done:br.done+1}:br)}))}}else z=
"focus";if(e.alarmSound==="custom"&&J.current)try{J.current.currentTime=0,J.current.volume=e.alarmVolume,J.current.play().
catch(()=>Qn("bell",e.alarmVolume,e.alarmRepeat))}catch{Qn("bell",e.alarmVolume,e.alarmRepeat)}else e.alarmSound==="cust\
om"?Qn("bell",e.alarmVolume,e.alarmRepeat):Qn(e.alarmSound,e.alarmVolume,e.alarmRepeat);if(e.notifications&&typeof Notification<
"u"&&Notification.permission==="granted")try{new Notification(`${gt[C]} finished`,{body:z==="focus"?"Time to focus.":`Ti\
me for a ${gt[z].toLowerCase()}.`})}catch{}delete en.current[C],v(z),d(he.current[z]);const q=z==="focus"?e.autoFocus:e.
autoBreaks;q?(O.current=Date.now()+he.current[z],b(!0)):b(!1),Ye({phase:z,running:q,endAt:q?Date.now()+he.current[z]:0,remainingMs:he.
current[z],cycleCount:D})},[m,e,o,a,i,Ye]),Pr=S.useRef(ba);Pr.current=ba,S.useEffect(()=>{if(!k)return;const _=window.setInterval(
()=>{const C=O.current-Date.now();C<=0?Pr.current(!1):d(z=>Math.ceil(z/1e3)!==Math.ceil(C/1e3)?C:z)},250);return()=>window.
clearInterval(_)},[k]),S.useEffect(()=>{T.current||(delete en.current[U.current],d(g[U.current]))},[g]);const Ia=S.useRef(
0);S.useEffect(()=>{if(!k||!e.tick)return;const _=window.setInterval(()=>{const C=Math.ceil((O.current-Date.now())/1e3);
C!==Ia.current&&(Ia.current=C,Ep(e.alarmVolume))},250);return()=>window.clearInterval(_)},[k,e.tick,e.alarmVolume]),S.useEffect(
()=>{document.title=`${ln(f)} - ${gt[w]} - Study focus timer`},[f,w]),S.useEffect(()=>(be.current&&(be.current(),be.current=
null),e.ambient!=="none"&&(be.current=Lp(e.ambient,e.ambientVolume)),()=>{be.current&&(be.current(),be.current=null)}),[
e.ambient,e.ambientVolume]),S.useEffect(()=>{if(!e.keepAwake||!("wakeLock"in navigator))return;let _=!1;const C=()=>{navigator.
wakeLock.request("screen").then(D=>{_||(Mr.current=D)}).catch(()=>{})};C();const z=()=>{document.visibilityState==="visi\
ble"&&C()};return document.addEventListener("visibilitychange",z),()=>{if(_=!0,document.removeEventListener("visibilityc\
hange",z),Mr.current){try{Mr.current.release()}catch{}Mr.current=null}}},[e.keepAwake]),S.useEffect(()=>{Z?(J.current=new Audio(
Z),J.current.preload="auto"):J.current=null},[Z]);const Oa=S.useRef(()=>{}),Fa=S.useRef(()=>{}),Da=S.useRef(()=>{}),tn=S.
useCallback(()=>{if(el(),J.current)try{J.current.pause(),J.current.currentTime=0}catch{}O.current=Date.now()+ke.current,
b(!0),Ye({phase:U.current,running:!0,endAt:O.current,remainingMs:ke.current,cycleCount:m})},[Ye,m]),nn=S.useCallback(()=>{
b(!1),Ye({phase:U.current,running:!1,remainingMs:ke.current,cycleCount:m})},[Ye,m]),In=S.useCallback(()=>{delete en.current[U.
current],b(!1),d(he.current[U.current]),Ye({phase:U.current,running:!1,remainingMs:he.current[U.current],cycleCount:m})},
[Ye,m]),Lr=S.useCallback(()=>{Pr.current(!0)},[]);Oa.current=tn,Fa.current=nn,Da.current=In;const On=S.useCallback(_=>{const C=U.
current;if(_===C)return;const z=T.current?Math.max(0,O.current-Date.now()):ke.current;z>0&&z<he.current[C]?en.current[C]=
z:delete en.current[C];const D=en.current[_],q=typeof D=="number"&&D>0?Math.min(D,he.current[_]):he.current[_];b(!1),v(_),
d(q),Ye({phase:_,running:!1,remainingMs:q,cycleCount:m})},[Ye,m]),rl=S.useCallback(()=>{document.fullscreenElement?document.
exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]),[Aa,$a]=S.useState(null),
jd=S.useCallback(()=>{const _=window.documentPictureInPicture;if(_!=null&&_.requestWindow){_.requestWindow({width:320,height:200}).
then(C=>{for(const z of Array.from(document.styleSheets))try{const D=Array.from(z.cssRules||[]).map(zr=>zr.cssText).join(
`
`),q=C.document.createElement("style");q.textContent=D,C.document.head.appendChild(q)}catch{const D=z.href;if(D){const q=C.
document.createElement("link");q.rel="stylesheet",q.href=D,C.document.head.appendChild(q)}}C.document.body.className="ft\
-pip-body",C.addEventListener("pagehide",()=>$a(null)),$a(C)}).catch(()=>{});return}window.open(`${window.location.pathname}\
?popout=1`,"sft-popout","popup=yes,width=360,height=240")},[]);S.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const _=new BroadcastChannel(
"sft-sync"),C=()=>_.postMessage({t:"state",phase:U.current,remaining:ke.current,running:T.current,dur:he.current[U.current],
accent:Ge.current,at:Date.now()});C();const z=window.setInterval(C,1e3);return _.onmessage=D=>{const q=D.data;(q==null?void 0:
q.t)==="cmd"&&(q.cmd==="toggle"?T.current?Fa.current():Oa.current():q.cmd==="reset"?Da.current():q.cmd==="skip"&&Pr.current(
!0))},()=>{window.clearInterval(z),_.close()}},[]);const Ed=S.useCallback(()=>{j("none"),L(!0)},[]),Rd=E==="tasks",Md=E===
"settings",Pd=S.useCallback(()=>j(_=>_==="tasks"?"none":"tasks"),[]),Ld=S.useCallback(()=>j(_=>_==="settings"?"none":"se\
ttings"),[]);S.useEffect(()=>{const _=C=>{var D;const z=(D=C.target)==null?void 0:D.tagName;z==="INPUT"||z==="TEXTAREA"||
z==="SELECT"||(C.code==="Space"?(C.preventDefault(),T.current?nn():tn()):C.key==="r"||C.key==="R"?In():C.key==="s"||C.key===
"S"?Lr():C.key==="1"?On("focus"):C.key==="2"?On("short"):C.key==="3"?On("long"):C.key==="m"||C.key==="M"?L(q=>!q):(C.key===
"f"||C.key==="F")&&rl())};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[tn,nn,
In,Lr,On,rl]);const xe=S.useCallback(_=>t(C=>({...C,..._})),[t]),Td=S.useCallback(_=>{if(!_)return;const C=_.type.startsWith(
"video/");if(!C&&!_.type.startsWith("image/")){V("That file is not an image or video.");return}bn(z=>(z&&URL.revokeObjectURL(
z.url),{url:URL.createObjectURL(_),kind:C?"video":"image"})),xe({background:{kind:"upload"}}),V("Background applied for \
this visit. Use a link to keep it across visits.")},[xe]),zd=S.useCallback(_=>{if(_){if(!_.type.startsWith("audio/")){ze(
"That file is not an audio file.");return}Dt(C=>(C&&URL.revokeObjectURL(C),URL.createObjectURL(_))),xe({alarmSound:"cust\
om",customAlarm:{source:"",name:_.name}}),ze(`Using "${_.name}" for this visit. Use a link to keep it across visits.`)}},
[xe]),bd=S.useCallback(_=>{var C;if(_==="custom"){if(J.current)try{J.current.currentTime=0,J.current.volume=e.alarmVolume,
J.current.play().catch(()=>ze("Your browser blocked playback before the first tap. Press Start once, then preview again."))}catch{}else
ze((C=e.customAlarm)!=null&&C.source?"Still loading your sound.":"Add a link or upload a file first.");return}Qn(_,e.alarmVolume,
!1)},[e.alarmVolume,e.customAlarm]),Id=S.useCallback(_=>{if(!_){xe({notifications:!1});return}if(!(typeof Notification>"\
u"))try{const C=Notification.requestPermission();C&&typeof C.then=="function"?C.then(z=>xe({notifications:z==="granted"})).
catch(()=>xe({notifications:!1})):xe({notifications:Notification.permission==="granted"})}catch{xe({notifications:!1})}},
[xe]),Od=S.useCallback(()=>t(Fl),[t]),Fd=S.useMemo(()=>({focusSec:0,sessions:0}),[]),Tr=o.days[Kn()]||Fd,il=S.useMemo(()=>{
var z,D;let _=0;const C=new Date;for(((z=o.days[Kn(C)])==null?void 0:z.sessions)>0||C.setDate(C.getDate()-1);((D=o.days[Kn(
C)])==null?void 0:D.sessions)>0;)_++,C.setDate(C.getDate()-1);return _},[o.days]),Dd=S.useMemo(()=>{const _=[];for(let C=6;C>=
0;C--){const z=new Date;z.setDate(z.getDate()-C);const D=o.days[Kn(z)];_.push({label:`${"SMTWTFS"[z.getDay()]}`,minutes:Math.
round(((D==null?void 0:D.focusSec)||0)/60)})}return _},[o.days]),Ad=S.useMemo(()=>e.showChip?`${Tr.sessions} ${Tr.sessions===
1?"session":"sessions"} · ${Math.round(Tr.focusSec/60)} min${il>1?` · ${il}-day streak`:""}`:null,[e.showChip,Tr,il]),
$d=n.ready&&l.ready&&s.ready,Ud=((Wa=xd.find(_=>_.id===e.font))==null?void 0:Wa.css)||"inherit",ll=1-f/Math.max(1,g[w]),
ol=118,Ua=2*Math.PI*ol,Vd=typeof Notification<"u",Bd=typeof navigator<"u"&&"wakeLock"in navigator,Wd=typeof document<"u"&&
document.fullscreenEnabled,Va=r.tasks.find(_=>_.id===r.activeId)||null,Ba=e.spotify?Cd(e.spotify):null;return u.jsxs("di\
v",{className:`ft-root ${R?"is-compact":""}`,style:{"--ft-accent":e.accent,"--ft-font":Ud},children:[u.jsx($p,{kind:pt.kind,
id:pt.id,scrim:e.scrim,builtinSrc:M,linkBg:h,uploadBg:mt,paused:R,animate:e.bgAnimate!==!1,customFit:e.customFit||"cover"}),
u.jsx(Bp,{chip:Ad,panel:E,fullscreenSupported:Wd,onFullscreen:rl,onTasks:Pd,onSettings:Ld,onMinimize:Ed,onPopout:jd}),u.
jsxs("main",{className:"ft-center",children:[u.jsx("nav",{className:"ft-modes","aria-label":"Timer mode",children:["focu\
s","short","long"].map(_=>u.jsx("button",{type:"button",className:`ft-mode ${w===_?"is-active":""}`,onClick:()=>On(_),children:gt[_]},
_))}),e.showDots?u.jsx("div",{className:"ft-dots","aria-label":"Cycle progress",children:Array.from({length:Math.max(1,e.
longEvery)}).map((_,C)=>u.jsx("span",{className:`ft-dot ${C<m%Math.max(1,e.longEvery)||m>0&&m%Math.max(1,e.longEvery)===
0&&w!=="focus"?"is-done":""}`},C))}):null,u.jsxs("div",{className:`ft-clock is-${e.clockSize}`,role:"timer","aria-live":"\
off","aria-label":`${gt[w]} timer, ${ln(f)} remaining`,children:[e.clockStyle==="ring"?u.jsxs("svg",{className:"ft-ring",
viewBox:"0 0 260 260","aria-hidden":"true",children:[u.jsx("circle",{className:"ft-ring-track",cx:"130",cy:"130",r:ol}),
u.jsx("circle",{className:"ft-ring-fill",cx:"130",cy:"130",r:ol,strokeDasharray:Ua,strokeDashoffset:Ua*(1-ll)})]}):null,
u.jsxs("div",{className:"ft-time-wrap",children:[u.jsx("div",{className:"ft-time",children:ln(f)}),u.jsx("div",{className:"\
ft-taskline",children:Va?Va.title:w==="focus"?"Pick a task or just focus":"Rest up"})]})]}),e.clockStyle==="bar"?u.jsx("\
div",{className:"ft-progressbar","aria-hidden":"true",children:u.jsx("span",{style:{width:`${Math.round(ll*100)}%`}})}):
null,u.jsxs("div",{className:"ft-controls",children:[u.jsx("button",{type:"button",className:"ft-primary",onClick:()=>k?
nn():tn(),children:k?"Pause":f<g[w]?"Resume":"Start"}),u.jsx("button",{type:"button",className:"ft-ghost",onClick:In,children:"\
Reset"}),u.jsx("button",{type:"button",className:"ft-ghost",onClick:Lr,children:"Skip"})]}),e.showHint?u.jsx("p",{className:"\
ft-hint",children:"Space start or pause · R reset · S skip · M minimize · F fullscreen"}):null]}),R?u.jsxs("div",{className:"\
ft-compactpill",role:"dialog","aria-label":"Minimized timer",children:[u.jsx("span",{className:"ft-compactphase",children:gt[w]}),
u.jsx("span",{className:"ft-compacttime",children:ln(f)}),u.jsx("button",{type:"button",className:"ft-compactbtn","aria-\
label":k?"Pause":"Start",onClick:()=>k?nn():tn(),children:k?"❚❚":"▶"}),u.jsx("button",{type:"button",className:"ft\
-compactbtn","aria-label":"Expand timer",onClick:()=>L(!1),children:"⤢"})]}):null,Rd?u.jsx(Wp,{tasksState:r,setTasksState:i,
week:Dd,ready:$d,savedMessage:l.message||s.message||"",onClose:()=>j("none")}):null,Md?u.jsx(Qp,{settings:e,patch:xe,bgStatus:F,
soundStatus:nt,lastBgSrcRef:tl,lastSndSrcRef:nl,resolveLinkBg:Pa,resolveCustomSound:La,uploadBg:Td,uploadSound:zd,previewAlarm:bd,
requestNotifications:Id,notificationsSupported:Vd,wakeLockSupported:Bd,onResetSettings:Od,savedMessage:n.message||"",onClose:()=>j(
"none")}):null,Aa?hd.createPortal(u.jsxs("div",{className:"ft-pip",children:[u.jsx("div",{className:"ft-pip-phase",children:gt[w]}),
u.jsx("div",{className:"ft-pip-time",children:ln(f)}),u.jsx("div",{className:"ft-pip-bar","aria-hidden":"true",children:u.
jsx("span",{style:{width:`${Math.round(ll*100)}%`}})}),u.jsxs("div",{className:"ft-pip-btns",children:[u.jsx("button",{type:"\
button",className:"ft-primary is-compact",onClick:()=>k?nn():tn(),children:k?"Pause":"Start"}),u.jsx("button",{type:"but\
ton",className:"ft-ghost is-compact",onClick:In,children:"Reset"}),u.jsx("button",{type:"button",className:"ft-ghost is-\
compact",onClick:Lr,children:"Skip"})]})]}),Aa.document.body):null,Ba?u.jsxs("div",{className:`ft-spotify ${e.spotifyOpen?
"is-open":""}`,children:[u.jsx("div",{className:"ft-spotify-frame","aria-hidden":!e.spotifyOpen,children:u.jsx("iframe",
{src:Ba,width:"100%",height:"152",frameBorder:"0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture\
-in-picture",loading:"lazy",title:"Spotify player"})}),u.jsx("button",{type:"button",className:"ft-spotify-toggle","aria\
-expanded":e.spotifyOpen,onClick:()=>xe({spotifyOpen:!e.spotifyOpen}),children:e.spotifyOpen?"Hide player":"♫ Music"})]}):
null]})}gd(document.getElementById("root")).render(u.jsx(Kp,{}));
